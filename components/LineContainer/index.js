import styled, {css} from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid #E6ECEF;

    @media (max-width: 768px) {
        width: 100%;
    }

    .avatar-name-grad {
        display: flex;
        align-items: center;

        > strong {
            font-size: 30px;

            color: #ddd;
            color: ${props => props.first && css`goldenrod`};
            color: ${props => props.second && css`silver`};
            color: ${props => props.third && css`#e28743`};
            
            text-shadow: 2px 2px #000;

            margin-right: 10px;
        }

        img {
            width: 80px;
            width: ${props => props.ranking && css`40px`};

            height: 80px;
            height: ${props => props.ranking && css`40px`};
            
            margin-right: 10px;
            border-radius: 50%;

            @media (max-width: 768px) {
                width: 60px;
                height: 60px;

                margin-left: 10px;
            }
        }

        .name-grad {
            display: flex;
            flex-direction: column;
            justify-content: center;

            height: 100%;
            font-size: 16px;
            font-weight: bold;

            p {
              margin: 0;
              letter-spacing: 1px;  
            }

            p + p {
                font-size: 12px;
                font-weight: normal;
                letter-spacing: 0;  
            }
        }
    }

    .date-column {
        span {
            padding: 5px;
            border-radius: 4px;
            background: ${props => props.isRed && css`red`};
            background: ${props => props.isBlack && css`#000`};

            color: #fff;
        }
    }

    .qtdservices-column {
        span {
            padding: 8px;
            background: #00ACE0;
            color: #fff;
            font-size: 20px;
            border-radius: 4px;
        }
    }
`

export function LineRed({avatar, name, grad, date}) {
    return (
        <Container isRed>
            <div className="avatar-name-grad">
                <img src={avatar} />
                <div className="name-grad">
                    <p>{name}</p>
                    <p>{grad}</p>
                </div>
            </div>
            <div className="date-column">
                <span>{date}</span>
            </div>
        </Container>
    )
}

export function LineBlack({avatar, name, grad, date}) {
    return (
        <Container isBlack>
            <div className="avatar-name-grad">
                <img src={avatar} />
                <div className="name-grad">
                    <p>{name}</p>
                    <p>{grad}</p>
                </div>
            </div>
            <div className="date-column">
                <span>{date}</span>
            </div>
        </Container>
    )
}

export function LineRanking({place, avatar, name, grad, imgRanking}) {
    return (
        <Container ranking>
            <div className="avatar-name-grad">
                <strong>{place}</strong>
                <img src={avatar} />
                <div className="name-grad">
                    <p>{name}</p>
                    <p>{grad}</p>
                </div>
            </div>
            <div className="img-ranking-column">
                <img src={imgRanking}/>
            </div>
        </Container>
    )
}