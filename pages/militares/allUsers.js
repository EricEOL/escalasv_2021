import AsideMenu from '../../components/AsideMenu';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;

    width: 100%;
    height: 100vh;

    background: #E6ECEF;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 300px;
    height: 400px;

    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 5px #00ACE0;

    img {
        width: 130px;
        height: 130px;

        margin-top: -80px;
        border-radius: 50%;

        box-shadow: 0 0 5px #00ACE0,
                    0 0 25px #00ACE0;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            color: #00ACE0;
            letter-spacing: 3px;
        }

        span {
            padding: 5px;
            font-size: 14px;
        }

        .services-count {
            width: 50px;
            padding: 10px;
            border-radius: 8px;
            background: #00ACE0;
            color: #fff;
            text-align: center;
            font-size: 20px;
        }
    }

    .dados-militar {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
    }
`


function AllUsers() {
    return (
        <Container>
            <AsideMenu />
            <ContentContainer>
                <Card>
                    <img src="https://avatars.githubusercontent.com/u/61126457?v=4"/>
                    <div>
                        <h2>Lopes</h2>
                    </div>
                    <div className="dados-militar">
                        <div>
                            <span>Posto</span>
                            <strong>1º Ten</strong>
                        </div>
                        <div>
                            <span>Turma</span>
                            <strong>2014</strong>
                        </div>
                    </div>
                    <div>
                        <span>Função Atual</span>
                        <strong>Chefe do Setor Financeiro</strong>
                    </div>
                    <div>
                        <span>Serviços</span>
                        <strong className="services-count">50</strong>
                    </div>
                </Card>
            </ContentContainer>
        </Container>
    )
}

export default AllUsers;