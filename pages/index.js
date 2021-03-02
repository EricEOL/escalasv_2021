import React, {useState, useEffect} from 'react';
import Tabletop from 'tabletop';
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

function Home() {

    const [isServiceToday, setIsServiceToday] = useState([]);
    const [isServiceTomorrow, setIsServiceTomorrow] = useState([]);
    const [serviceScale, setServiceScale] = useState([]);

    useEffect(()=>{
        Tabletop.init({
            key: "https://docs.google.com/spreadsheets/d/1IP4DHmpXKyG9zJ95e0TS7WfBqC26A_W14ek7GTGbHcA/pubhtml",
    
            callback: showInfo,
    
            simpleSheet: true
        });
    
        function showInfo(data, tabletop) {
    
            const services = Array.from(data);

            const whoIsServiceToday = services.find(service => service.today == "sim");
            console.log(whoIsServiceToday);
            setIsServiceToday(whoIsServiceToday);

            const whoIsServiceTomorrow = services.find(service => service.id == Number(whoIsServiceToday.id) + 1);
            setIsServiceTomorrow(whoIsServiceTomorrow);

            const scaleSize = services.length;
            const servicesModificated = services.filter(({ id, data, militar, avatar, grad, escala }, index) => {
                if (index >= scaleSize - 4) {
                    return {
                        id,
                        data,
                        militar,
                        avatar,
                        grad,
                        escala
                    }
                }
            })
            setServiceScale(servicesModificated);
        }
    }, [])

    return (
        <Container>
            <AsideMenu />
            <ContentContainer>
                <LeftContainer>
                    <WindowContainer title="Escala de serviço">
                        {serviceScale.map(service => {
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
                        {isServiceToday.escala === 'preta' && 
                            <LineBlack
                            avatar={isServiceToday.avatar}
                            name={isServiceToday.militar}
                            grad={isServiceToday.grad}
                            date={isServiceToday.data}
                            />
                        }
                        {isServiceToday.escala === 'vermelha' && 
                            <LineRed
                            avatar={isServiceToday.avatar}
                            name={isServiceToday.militar}
                            grad={isServiceToday.grad}
                            date={isServiceToday.data}
                            />
                        }
                    </WindowContainer>

                    <WindowContainer title="Serviço amanhã">
                        {isServiceTomorrow.escala === 'preta' && 
                            <LineBlack
                            avatar={isServiceTomorrow.avatar}
                            name={isServiceTomorrow.militar}
                            grad={isServiceTomorrow.grad}
                            date={isServiceTomorrow.data}
                            />
                        }
                        {isServiceTomorrow.escala === 'vermelha' && 
                            <LineRed
                            avatar={isServiceTomorrow.avatar}
                            name={isServiceTomorrow.militar}
                            grad={isServiceTomorrow.grad}
                            date={isServiceTomorrow.data}
                            />
                        }
                    </WindowContainer>
                </RightContainer>
            </ContentContainer>
        </Container>
    )
}

export default Home;