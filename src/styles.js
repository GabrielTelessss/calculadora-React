import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #282c34;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    width: 400px;
    padding: 20px;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

