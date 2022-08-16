import styled from "styled-components"

export const ModalOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    
`

export const Modal = styled.div`
    background-color: #3f3f3f;
    padding: 2.4rem;
    position: relative;
    z-index: 1;
    color: white;
    text-align: center;
    font-family: 'Poppins', sans-serif;

    h2{
        margin-bottom: 2rem;
    }
`
export const ButtonCancel = styled.button`
    background-color: #DBDCDD;
    border: none;
    color: #737380;
    padding: .8rem 2.5rem;
    cursor: pointer;
    border-radius: .2rem;
    margin-right: 1rem;

    &:hover{
        opacity: .8;
    }
`

export const ButtonYes = styled.button`
    background-color: #E73F5D;
    border: none;
    color: white;
    padding: .8rem 2.5rem;
    cursor: pointer;
    border-radius: .2rem;

    &:hover{
        opacity: .8;
    }
`
