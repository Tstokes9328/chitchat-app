import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import io from 'socket.io-client';



//Dispatchers from redux
import { updateRoomId } from '../../../redux/reducers/conversation_reducer';

//Styled Components
import { ConversationsContainer, ConversationFinderContainer, InboxContainer, ConversationTab } from './ConversationsStyles';

class Conversations extends Component {
    constructor() {
        super();

        this.state = {
            userConversations: [],
            popup: false
        }
    }

    //Lifecycle Methods
    componentDidMount() {
        this.getUsersConversations();
        this.socket = io();
    };

    // ----- Methods ----- //
    getUsersConversations = () => {
        //get the user from redux state
        const { user } = this.props.userReducer;
        //ajax request to server for users conversations
        axios.get(`/user/conversations/${user.user_id}`).then(response => {
            console.log(response.data)
            //store the conversations on local state
            this.setState({
                userConversations: response.data
            });
        });
    };

    handlePopUp = () => {
        this.setState({
            popup: !this.state.popup
        });
    };

    //Socket Methods
    updateRoomId = (roomId) => {
        //call redux method to update room id
        this.props.updateRoomId(roomId);
    };

    joinSocketRoom = (roomId) => {
        //emit to the sockets to join the room
        this.socket.emit('join room', {
            roomId
        });
    };

    //will handle updating the room id and will join the socket room
    handleRoomJoin = (roomId) => {
        this.updateRoomId(roomId);
        this.joinSocketRoom(roomId);
    };


    render() {
        console.log(this.props)
        //map through the user conversations on props and return a conversation tab displayed in JSX
        const mappedUserConversations = this.state.userConversations.map((conversation, index) => {
            return (
                <ConversationTab
                    key={index}
                    to={`/dashboard/messages/${conversation.conversation_id}`} activeClassName="active"
                    onClick={() => this.handleRoomJoin(conversation.conversation_id)}
                >
                    {conversation.conversation_id}
                </ConversationTab>
            )
        });

        return (
            <ConversationsContainer>
                <ConversationFinderContainer>
                    <h1>Message Inbox</h1>
                </ConversationFinderContainer>
                <InboxContainer>
                    {mappedUserConversations}
                </InboxContainer>
            </ConversationsContainer>
        )
    }
}

//map redux state to props
const mapStateToProps = state => state;

export default connect(mapStateToProps, { updateRoomId })(Conversations);