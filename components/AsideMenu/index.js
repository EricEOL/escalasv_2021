import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const AsideContainer = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 130px;
    height: 100vh;
    margin-right: 80px;

    background: #fff;

    box-shadow: 0 0 5px #00ACE0,
                0 0 10px #00ACE0;

    @media (max-width: 768px) {
        width: 100vw;
        height: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-around;

        box-shadow: none;
        border: none;
    }

    .logo {
        display: flex;
        align-items: center;
        flex-direction: column;

        border-bottom: 2px solid #00ACE0;

        @media (max-width: 768px) {
            display: flex;
            flex-direction: row;

            border: none;
        }

        div {
            display: flex;
            align-items: center;

            letter-spacing: -10px;
            
            span {
                font-size: 45px;
                font-style: italic;

                @media (max-width: 768px) {
                    font-size: 35px;
                }
            }

            strong {
                font-size: 65px;
                color: blueviolet;

                @media (max-width: 768px) {
                    font-size: 50px;
                }
            }
        }

        p {
            font-style: italic;
            font-size: 12px;

            margin-top: -10px;
        }
    }

    .menu-items {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        margin-top: 80px;

        @media (max-width: 768px) {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;

            margin-top: 0;
            width: 150px;
        }

        > div {
            margin-bottom: 30px;
            cursor: pointer;
            border-bottom: 2px solid transparent;

            transition: 0.3s;

            &:hover {
                border-bottom: 2px solid #00ACE0;
            }

            @media (max-width: 768px) {
                display: flex;
                flex-direction: row;

                margin-bottom: 0;
            }
        }
    }
`

export default function AsideMenu() {
    return (
        <AsideContainer>
            <div className="logo">
                <div><span>E</span><strong>X</strong></div>
                <p>EscaleX</p>
            </div>
            <div className="menu-items">
                <div>
                    <Link href="/">
                        <Image src="/calendar.svg" width={40} height={40} />
                    </Link>
                </div>

                <div>
                    <Link href="/militares/allUsers">
                        <Image src="/user.svg" width={40} height={40} />
                    </Link>
                </div>
            </div>
        </AsideContainer>
    )
}