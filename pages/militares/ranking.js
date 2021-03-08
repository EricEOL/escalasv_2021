import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import styled from 'styled-components';
import AsideMenu from '../../components/AsideMenu';
import WindowContainer from '../../components/WindowContainer';
import { Container as ContainerLineRanking } from '../../components/LineContainer';
import Loading from '../../components/Loading';

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
        margin-bottom: 10vh;
    }
`;

const screenStates = {
    LOADING: 'LOADING',
    READY: 'READY'
}

export default function Ranking() {

    const [screenState, setScreenState] = useState(screenStates.LOADING);
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.READY);
        }, 3 * 1000)
    }, [screenState]);

    useEffect(() => {
        Tabletop.init({
            key: "https://docs.google.com/spreadsheets/d/1bAVYC59d1cUAKCaZsaVMN1F4wjIex8iXaqvm8tx8uu8/pubhtml",

            callback: showInfo,

            simpleSheet: true
        });

        function showInfo(data, tabletop) {

            const militaresData = Array.from(data);

            function compare(a, b) {
                if (a.qtd_services < b.qtd_services) return 1;
                if (a.qtd_services > b.qtd_services) return -1;
                return 0;
            }

            const militaresDataOrdered = militaresData.sort(compare);
            setRanking(militaresDataOrdered);
        }

    }, []);


    return (
        <Container>
            <AsideMenu />
            <ContentContainer>
                {screenState === screenStates.LOADING && (<Loading />)}

                <WindowContainer title="Ranking">
                    {ranking.map((militar, index) => {
                        if (index === 0) {
                            return (
                                <ContainerLineRanking ranking first>
                                    <div className="avatar-name-grad">
                                        <strong>{`#${index + 1}`}</strong>
                                        <img src={militar.avatar} />
                                        <div className="name-grad">
                                            <p>{militar.name}</p>
                                            <p>{militar.grad}</p>
                                        </div>
                                    </div>
                                    <div className="qtdservices-column">
                                        <span>{militar.qtd_services}</span>
                                    </div>
                                </ContainerLineRanking>
                        )}
                        if (index === 1) {
                            return (
                                <ContainerLineRanking ranking second>
                                    <div className="avatar-name-grad">
                                        <strong>{`#${index + 1}`}</strong>
                                        <img src={militar.avatar} />
                                        <div className="name-grad">
                                            <p>{militar.name}</p>
                                            <p>{militar.grad}</p>
                                        </div>
                                    </div>
                                    <div className="qtdservices-column">
                                        <span>{militar.qtd_services}</span>
                                    </div>
                                </ContainerLineRanking>
                        )}
                        if (index === 2) {
                            return (
                                <ContainerLineRanking ranking third>
                                    <div className="avatar-name-grad">
                                        <strong>{`#${index + 1}`}</strong>
                                        <img src={militar.avatar} />
                                        <div className="name-grad">
                                            <p>{militar.name}</p>
                                            <p>{militar.grad}</p>
                                        </div>
                                    </div>
                                    <div className="qtdservices-column">
                                        <span>{militar.qtd_services}</span>
                                    </div>
                                </ContainerLineRanking>
                        )}
                        if (index > 2) {
                            return (
                                <ContainerLineRanking ranking>
                                    <div className="avatar-name-grad">
                                        <strong>{`#${index + 1}`}</strong>
                                        <img src={militar.avatar} />
                                        <div className="name-grad">
                                            <p>{militar.name}</p>
                                            <p>{militar.grad}</p>
                                        </div>
                                    </div>
                                    <div className="qtdservices-column">
                                        <span>{militar.qtd_services}</span>
                                    </div>
                                </ContainerLineRanking>
                        )}
                    })}
                </WindowContainer>
            </ContentContainer>
        </Container>
    )
}