import styled, {css} from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid #E6ECEF;

    .avatar-name-grad {
        display: flex;
        align-items: center;

        img {
            width: 80px;
            height: 80px;
            
            margin-right: 10px;
            border-radius: 50%;
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