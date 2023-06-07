'use strict'

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'
import { FcReading } from 'react-icons/fc'
import styled from 'styled-components'

const HeroContainer = styled.div`
    background-image: url('/images/bg-hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    background-attachment: fixed;
`

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000c;
    color: #f8f8f8;
    font-weight: 200;
    text-align: center;
    height: 100vh;
    row-gap: min(0.6rem, 1.2rem);

    h2 {
        font-size: clamp(2rem, 4vw, 8rem);
        font-weight: 900;
    }

    h3 {
        font-size: clamp(1.5rem, 3vw, 6rem);
        font-weight: 200;
    }

    span:nth-of-type(1) {
        color: #f9af16;
        font-size: clamp(1.2rem, 2.4vw, 4.8rem);
        font-weight: 400;
        display: flex;
        align-items: center;
        column-gap: 0.8rem;
    }

    span:nth-of-type(2) {
        font-size: clamp(1rem, 1.5vw, 3rem);
    }
`

const SocialNetwork = styled.div`
    font-size: clamp(1.2rem, 2vw, 4rem);
    display: flex;
    column-gap: clamp(1.2rem, 2vw, min(4rem, 4rem));
    margin-top: 0.5em;
    color: black;
`

const SocialNetworkItem = styled.a`
    display: flex;
    background-color: #fff;
    border-radius: 50%;
    padding: min(0.8rem, 1rem);

    :nth-of-type(1) {
        color: #0a66c2;
    }

    :nth-of-type(2) {
        color: #000;
    }

    :nth-of-type(3) {
        color: #ff0000;
    }

    :nth-of-type(4) {
        color: #1c9cea;
    }

    :nth-of-type(5) {
        color: #e24364;
    }
`

export function Hero() {
    return (
        <HeroContainer>
            <HeroContent>
                <h3>Hi, I&apos;m</h3>
                <h2>SOFTWARE ENGINEER</h2>
                <span>
                    <FcReading /> AND I NEVER STOP LEARNING <FcReading />
                </span>
                <span>Let&apos;s work together and build something unique.</span>
                <SocialNetwork>
                    <SocialNetworkItem href="https://linkedin.com/in/sandersgutierrez" target="_blank">
                        <FaLinkedin />
                    </SocialNetworkItem>
                    <SocialNetworkItem href="https://github.com/sandersgutierrez" target="_blank">
                        <FaGithub />
                    </SocialNetworkItem>
                    <SocialNetworkItem href="https://youtube.com/@sandersgutierrez" target="_blank">
                        <FaYoutube />
                    </SocialNetworkItem>
                    <SocialNetworkItem href="https://twitter.com/untalsanders" target="_blank">
                        <FaTwitter />
                    </SocialNetworkItem>
                </SocialNetwork>
            </HeroContent>
        </HeroContainer>
    )
}
