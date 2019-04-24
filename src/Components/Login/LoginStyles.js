import styled, { keyframes } from 'styled-components';
import plane from '../../assets/plane.png'

//Animations 
const slideUp = keyframes`
    0% {
        opacity: .25;
        transform: scaleX(.1);
        margin-left: 100vw;
    }
    100% {
        opacity: 1;
        transform: scaleX(1);
    }
`

const loading = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

//Styled Components

export const LoadingCircle = styled.div`
    width: 35px;
    height: 35px;
    border: 3px solid #D3D3D350;
    border-top: 3px solid white;
    border-radius: 50%;
    margin-top: 15%;
    margin-left: 30%;
    animation: ${loading} 1s linear infinite;
`

export const LoginContainer = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito';
    width: 100vw;
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: row;
`

export const LeftContainer = styled.div`
    width: 65%;
    height: 100%;
    position: relative;
`

export const PlaneOne = styled.img.attrs({
    src: plane
})`
    width: 70px;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 1%;
`
export const PlaneTwo = styled.img.attrs({
    src: plane
})`
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 7%;
    left: 2%;
    transform: scaleX(-1);
`

export const RightContainer = styled.div`
    width: 35%;
    height: 100%;
    background: ${props => props.theme.green};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

/* Login Form Container */

export const LoginFormContainer = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    animation: ${slideUp} .5s;
`

export const LoginFormHeader = styled.h1`
    font-size: 35px;
    color: white;
    margin-top: 25%;
`

export const LoginFormSubHeader = styled.h2`
    font-size: 16px;
    color: #f1f3f6;
    margin-top: 5%;
`

export const LoginUsernameInput = styled.input.attrs({
    placeholder: 'Username'
})`
    width: 90%;
    height: 8%;
    background: transparent;
    color: white;
    border: none;
    border-bottom: 2px solid white;
    font-size: 18px;
    outline: none;
    margin-top: 15%;
    &::placeholder{
        color: white;
    }
`

export const LoginPasswordInput = styled.input.attrs({
    placeholder: 'Password',
    type: 'password'
})`
    width: 90%;
    height: 8%;
    background: transparent;
    color: white;
    border: none;
    border-bottom: 2px solid white;
    font-size: 18px;
    outline: none;
    margin-top: 5%;
    &::placeholder{
        color: white;
    }
`

export const LoginBtn = styled.button`
    width: 65%;
    height: 8%;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 50px 50px 50px 50px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    outline: none;
    margin-top: 15%;
    transition: ease 0.3s;
    &:hover {
        cursor: pointer;
        background: white;
        border: 2px solid ${props => props.theme.green};
        color: ${props => props.theme.green}
    }
`

export const SignUpWrapper = styled.div`
    width: 75%;
    height: 10%;
    margin-top: ${props => props.signup ? '5%' : '23%'};
    font-size: 14px;
    color: #f1f3f6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    span {
        font-size: 16px;
        text-decoration: none;
        color: ${props => props.theme.primaryBlue};
        &:hover {
            cursor: pointer;
        }
    }
`

/* Signup Form Container */
export const SignupFormContainer = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    animation: ${slideUp} .5s;
`

export const SignupFormHeader = styled.h1`
    font-size: 35px;
    color: white;
    margin-top: 25%;
`

export const SignupFormSubHeader = styled.h2`
    font-size: 16px;
    color: #f1f3f6;
    margin-top: 5%;
`

export const SignupUsernameInput = styled.input.attrs({
    placeholder: 'Username'
})`
    width: 90%;
    height: 8%;
    background: transparent;
    color: #232323;
    border: none;
    border-bottom: 2px solid white;
    font-size: 18px;
    outline: none;
    margin-top: 15%;
    &::placeholder{
        color: white;
    }
`

export const SignupPasswordInput = styled.input.attrs({
    placeholder: 'Password',
    type: 'password'
})`
    width: 90%;
    height: 8%;
    background: transparent;
    color: #232323;
    border: none;
    border-bottom: 2px solid white;
    font-size: 18px;
    outline: none;
    margin-top: 5%;
    &::placeholder{
        color: white;
    }
`

export const SignupEmailInput = styled.input.attrs({
    placeholder: 'Email',
    type: 'email'
})`
    width: 90%;
    height: 8%;
    background: transparent;
    color: #232323;
    border: none;
    border-bottom: 2px solid white;
    font-size: 18px;
    outline: none;
    margin-top: 5%;
    &::placeholder{
        color: white;
    }
`

export const SignupBtn = styled.button`
    width: 65%;
    height: 8%;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 50px 50px 50px 50px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    outline: none;
    margin-top: 15%;
    transition: ease 0.3s;
    &:hover {
        cursor: pointer;
        background: white;
        border: 2px solid ${props => props.theme.green};
        color: ${props => props.theme.green}
    }
`