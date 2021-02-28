import React from 'react';
import styled from 'styled-components';
import AsideMenu from '../components/AsideMenu';
import WindowContainer from '../components/WindowContainer';
import {LineRed, LineBlack} from '../components/LineContainer';

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

const LeftContainer = styled.div`
`;
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    height: 70vh;

`;

function Home({ data, serviceToday, serviceTomorrow }) {

    return (
        <Container>
            <AsideMenu />
            <ContentContainer>
                <LeftContainer>
                    <WindowContainer title="Escala de serviço">
                        {data.map(service => {
                            if(service.escala === 'preta') {
                                return (
                                    <LineBlack
                                        key={service.militar}
                                        avatar={service.avatar}
                                        name={service.militar}
                                        grad={service.grad}
                                        date={service.data}
                                    />
                                )
                            } else {
                                return (
                                    <LineRed
                                        key={service.militar}
                                        avatar={service.avatar}
                                        name={service.militar}
                                        grad={service.grad}
                                        date={service.data}
                                    />
                                )
                            }
                        })}
                    </WindowContainer>
                </LeftContainer>
                <RightContainer>
                    <WindowContainer title="Serviço hoje">
                        {serviceToday.escala === 'preta' && 
                            <LineBlack
                            avatar={serviceToday.avatar}
                            name={serviceToday.militar}
                            grad={serviceToday.grad}
                            date={serviceToday.data}
                            />
                        }
                        {serviceToday.escala === 'vermelha' && 
                            <LineRed
                            avatar={serviceToday.avatar}
                            name={serviceToday.militar}
                            grad={serviceToday.grad}
                            date={serviceToday.data}
                            />
                        }
                    </WindowContainer>

                    <WindowContainer title="Serviço amanhã">
                        {serviceTomorrow.escala === 'preta' && 
                            <LineBlack
                            avatar={serviceTomorrow.avatar}
                            name={serviceTomorrow.militar}
                            grad={serviceTomorrow.grad}
                            date={serviceTomorrow.data}
                            />
                        }
                        {serviceTomorrow.escala === 'vermelha' && 
                            <LineRed
                            avatar={serviceTomorrow.avatar}
                            name={serviceTomorrow.militar}
                            grad={serviceTomorrow.grad}
                            date={serviceTomorrow.data}
                            />
                        }
                    </WindowContainer>
                </RightContainer>
            </ContentContainer>
        </Container>
    )
}

export async function getStaticProps() {

    const apiData = await fetch(`http://localhost:3000/api/servicesTabletop`)
        .then(serverResponse => {
            if (serverResponse.ok) {
                return serverResponse.json()
            }
        })
        .then(objectResponse => {
            return objectResponse;
        })
        .catch(err => {
            return err;
        })

    return {
        props: {
            data: apiData.servicesModificated,
            serviceToday: apiData.whoIsServiceToday,
            serviceTomorrow: apiData.whoIsServiceTomorrow,
        },
        revalidate: 10000,
    }
}

export default Home;