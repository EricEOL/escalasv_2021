import styled, { keyframes } from 'styled-components';

const Riple = keyframes`
    from {
        top: 72px;
        left: 72px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    to {
        top: 0px;
        left: 0px;
        width: 144px;
        height: 144px;
        opacity: 0;
  }
`;

const LoadingAnimated = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 200px;
    height: 200px;

    @media (max-width: 768px) {
        width: 40%;
        height: 100vh;
    }

    div {
        position: absolute;
        border: 4px solid #00ACE0;
        opacity: 1;
        border-radius: 50%;
        animation: ${Riple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    div:nth-child(2) {
        animation-delay: -0.5s;
    }
`;

export default function Loading() {
    return (
        <LoadingAnimated>
            <div></div>
            <div></div>
        </LoadingAnimated>
    )
}