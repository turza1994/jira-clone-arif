import styled from 'styled-components';

export const Row = styled.div`
    display: grid;
    grid-template-columns: 4fr 3fr;
    column-gap: 20px;
`

export const Col = styled.div`
    justify-self: ${(props) => props.justifySelf};
    align-self: ${(props) => props.alignSelf};
`