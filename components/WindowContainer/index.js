import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;

    background-color: #fff;

    border-radius: 8px;

    padding: 10px;

    .title {
        padding: 10px;

        strong {
            font-size: 18px;
        }
    }
`

export default function WindowContainer({title, children}) {
   return (
    <Container>
        <div className="title">
            <strong>{title}</strong>
        </div>
        {children}
    </Container>
   ) 
}