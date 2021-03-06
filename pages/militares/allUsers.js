import React, { useEffect, useState } from 'react';
import Tabletop from 'tabletop';
import AsideMenu from '../../components/AsideMenu';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;

    width: 100%;

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

        strong {
            text-align: center;
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

    const [initial, setInitial] = useState(0);
    const [limit, setLimit] = useState(2);
    const [militares, setMilitares] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: "https://docs.google.com/spreadsheets/d/1bAVYC59d1cUAKCaZsaVMN1F4wjIex8iXaqvm8tx8uu8/pubhtml",

            callback: showInfo,

            simpleSheet: true
        });

        function showInfo(data, tabletop) {

            const militaresData = Array.from(data);
            setMilitares(militaresData);
        }

    }, [limit]);

    const militaresArrayLenght = militares.length;

    function changeLimitMinus() {
        if(limit > 2 && initial > 0) {
            setInitial(initial - 3);
            setLimit(limit - 3);
        }
    }

    function changeLimitPlus() {
        if(initial <= militaresArrayLenght - 3) {
            setInitial(initial + 3);
            setLimit(limit + 3);
        }
    }

    return (
        <Container>
            <AsideMenu />
            <ContentContainer>
                <button onClick={changeLimitMinus}> - </button>
                {militares.map((militar, index) => {
                    if (index >= initial && index <= limit ) {
                        return (
                            <Card>
                                <img src={militar.avatar} />
                                <div>
                                    <h2>{militar.name}</h2>
                                </div>
                                <div className="dados-militar">
                                    <div>
                                        <span>Posto</span>
                                        <strong>{militar.grad}</strong>
                                    </div>
                                    <div>
                                        <span>Turma</span>
                                        <strong>{militar.team}</strong>
                                    </div>
                                </div>
                                <div>
                                    <span>Função Atual</span>
                                    <strong>{militar.responsability}</strong>
                                </div>
                                <div>
                                    <span>Serviços</span>
                                    <strong className="services-count">{militar.qtd_services}</strong>
                                </div>
                            </Card>
                        )
                    }
                })}

                <button onClick={changeLimitPlus}>+</button>
            </ContentContainer>
        </Container>
    )
}

export default AllUsers;