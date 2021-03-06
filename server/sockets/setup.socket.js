const socket = require('socket.io');

const socketConnection = (server, app) => {
    //Socket.io Setup
    const io = socket(server);

    //Socket.io Endpoints
    io.on('connection', socket => {
        console.log('Connected to Socket.io');

        //join the socket room based off of the conversation
        socket.on('join room', data => {
            console.log('joined room:', data.roomId);
            socket.join(data.roomId);
        });

        //send a new message to this room
        socket.on('message sent', data => {
            //destruct the information of the message from the data obj
            const { roomId, user_id, body } = data;
            console.log(roomId);
            //get the current time stamp of the message
            const date = new Date();
            let hours = date.getHours();
            //check to see if it is a single value
            if (parseInt(hours) < 10) {
                hours = '0' + hours;
            };
            let minutes = date.getMinutes();
            //check to see if it is a single value
            if (parseInt(minutes) < 10) {
                minutes = '0' + minutes;
            };
            //create the new time stamp
            const timestamp = `${hours}:${minutes}`;
            //store the db instance
            const db = app.get('db');
            //create a new message for the db
            db.create_new_message([roomId, user_id, body, timestamp]).then(() => {
                console.log('New message created!');
            }).then(() => {
                //query the data base and return the messages related to the conversation
                db.get_conversation_messages([roomId]).then(dbResponse => {
                    //emit the dbResponse to the conversation
                    io.emit('update messages', dbResponse);
                });
            }).catch(error => {
                console.log(error.message);
            });
        });

        //show a user is typing
        socket.on('typing', roomId => {
            //emit a message that the user is typing
            socket.broadcast.emit('user typing', roomId);
        })

        //disconnect the user
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};

//Export Socket Connection
module.exports = {
    socketConnection
};