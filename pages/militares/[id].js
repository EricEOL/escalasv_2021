import React, { useEffect, useState } from 'react';
import Tabletop from 'tabletop';
import AsideMenu from '../../components/AsideMenu';
import WindowContainer from '../../components/WindowContainer';
import {LineRed, LineBlack} from '../../components/LineContainer';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;

    width: 100%;

    background: #E6ECEF;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;

    }
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100%;
        padding: 0;
        margin-top: 50px;
        margin-bottom: 50vh;
    }
`;


export default function User({ username }) {

    const [servicesOfUser, setServicesOfUser] = useState([]);

    const usernameModified = username[0].toUpperCase() + username.substr(1);

    useEffect(() => {

        Tabletop.init({
            key: "https://docs.google.com/spreadsheets/d/1IP4DHmpXKyG9zJ95e0TS7WfBqC26A_W14ek7GTGbHcA/pubhtml",

            callback: showInfo,

            simpleSheet: true
        });

        function showInfo(data, tabletop) {

            const services = Array.from(data);

            const servicesUser = services.filter(service => service.militar == usernameModified);
            setServicesOfUser(servicesUser);
        }

    }, [])

    return (
        <Container>
            <AsideMenu/>
            <ContentContainer>
                <WindowContainer title={`Todos os serviços: ${usernameModified}`}>
                        {servicesOfUser.map(service => {
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
            </ContentContainer>
        </Container>
    )
}

export async function getServerSideProps(context) {

    return {
        props: {
            username: context.params.id,
        },
    }
}