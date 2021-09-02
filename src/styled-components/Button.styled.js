import styled from 'styled-components';

export const BtnRound = styled.button`
    border-radius: 50%;
    border: 0;
    padding: 10px;
    margin-right: 2px;
`

export const BtnGreenSm = styled.button`
    border: 0;
    height: 12px;
    width: 12px;
    background-color: rgb(16, 214, 16);
    margin-left: 4px;
    box-shadow: 1px 1px 7px grey;
`

export const BtnPriority = styled.button`
    border-color: rgb(230, 228, 228);
    border: 0;
    padding: 7px 12px;
    
    &:hover{
        border-color: rgb(16, 214, 16);
    }
    &:focus{
        background-color: rgb(16, 214, 16);
        color: white;
    }
`

export const BtnCross = styled.button`
    border: 0;
    background: unset;
`

export const BtnBlack = styled.button`
    border: 0;
    background-color: black;
    color: white;
    padding: 4px 6px;
`