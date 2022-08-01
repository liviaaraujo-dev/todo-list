import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// font-family: 'Poppins', sans-serif;

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Poppins', sans-serif;
        background-color: rgb(32, 32, 36);
        color: white;
    }
`

export const Title = styled.h1`


`

export const Container = styled.div`
    text-align: center;
    margin: auto;
    max-width: 980px;
    padding: 10px;
`

export const InputAssignment = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: .6rem 1.3rem;
    margin: 20px 0;
    display: flex;
    align-items: center;

    button {
        margin-right: 5px;
        background-color: rgb(32, 32, 36);
        color: #fff;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }
    
    input {
        border: 0px;
        background: transparent;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }
`

export const Assignments = styled.div`
    margin-top: 3rem;
`
