'use strict'

import Image from 'next/image'
import styled from 'styled-components'
import { Wrapper } from './Common'

const AboutContainer = styled.section`
    /* background-color: #3bb4c1; */
    padding: min(4rem, 4rem) 0;
`

const AboutWrapper = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    align-items: center;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        column-gap: clamp(2rem, 4rem, 8rem);
        text-align: initial;
    }

    img {
        border-radius: 50%;
        border: clamp(2px, 4px, 1rem) solid #ccc;
        box-shadow: 0 0 1rem #111;
    }

    div {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;

        h2 {
            font-size: clamp(3vw, 3rem, 8rem);
            font-weight: 800;
            text-transform: uppercase;
        }

        p {
            font-size: clamp(1rem, 1.4rem, 2rem);
            font-weight: 300;
            line-height: clamp(1.5rem, 2rem, 10vh);
        }
    }
`

const CVButton = styled.a`
    background-color: #111;
    color: white;
    font-size: clamp(1rem, 1.2rem, 2rem);
    font-weight: bold;
    padding: 1rem;
    border-radius: 0.8rem;
    text-align: center;

    &:hover {
        background-color: rgba(1, 1, 1, 0.75);
    }
`

export default function About() {
    return (
        <AboutContainer id="about-me">
            <AboutWrapper>
                <Image src="/images/avatar.png" alt="Avatar" width={340} height={340} />
                <div>
                    <h2>¿Who am I?</h2>
                    <p>
                        My name is Sanders and I am a professional with a strong career in Software Engineering and a
                        growing interest in Artificial Intelligence and Machine Learning, with a passion for Physics and
                        Mathematics. I have more than 5 years of experience in software development with Java and
                        Nodejs. I have creativity to solve problems and adapt to different environments and cultures.
                        Ability to work in a team and manage interpersonal relationships.
                    </p>
                    <CVButton href="/resume">View CV</CVButton>
                </div>
            </AboutWrapper>
        </AboutContainer>
    )
}
