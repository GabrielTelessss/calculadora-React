import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    margin: 5px 10px;
    border: none;
    border-radius: 10px;
    background-color: #00AAF0;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    cursor: pointer;
    transition: backgound-color 0,3s, transform 0,2s;
    
    &:hover {
        background-color: #0099cc;
        transform: translateY(-2px);
    }

    &:active{
        transform: translateY(0);
    }
`