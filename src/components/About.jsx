'use strict'

import Image from 'next/image'
import styled from 'styled-components'
import { Wrapper } from './Common'

const AboutContainer = styled.section`
    padding: clamp(4rem, 20vh, 8rem) 0;
`

const AboutWrapper = styled(Wrapper)`
    & > :first-child {
        padding-bottom: clamp(3rem, 20vh, 4rem);
    }
`

const AboutTitleSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: clamp(3vw, 3rem, 8rem);
        font-weight: 800;
    }

    p {
        font-weight: 300;
        letter-spacing: 2px;
    }
`

const AboutContentSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: clamp(1rem, 4vh, 2rem);
    column-gap: clamp(2rem, 4vw, 8rem);

    @media only screen and (min-width: 64em) {
        display: grid;
        grid-template-columns: min(min-content, 30%) 1fr;
        grid-template-rows: min-content min-content;
    }

    img {
        border-radius: 50%;
        border: clamp(2px, 4px, 1rem) solid #ccc;
        box-shadow: 0 0 1rem #111;
        grid-column: 1 / 2;
        grid-row: 1 / span 2;
    }

    p {
        font-size: clamp(1rem, 1.4rem, 2rem);
        font-weight: 300;
        line-height: clamp(1.5rem, 2rem, 10vh);
        text-align: center;
        grid-column: 2 / 3;
        grid-row: 1 / 2;

        @media only screen and (min-width: 64em) {
            text-align: initial;
        }
    }

    a {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
    }
`

const CVButton = styled.a`
    background-color: #222;
    color: white;
    font-size: clamp(1rem, 1.2rem, 2rem);
    font-weight: bold;
    padding: 1rem;
    border-radius: 0.8rem;
    text-align: center;
    width: 100%;

    &:hover {
        background-color: rgba(1, 1, 1, 0.75);
    }
`

export default function About() {
    return (
        <AboutContainer id="about">
            <AboutWrapper>
                <AboutTitleSection>
                    <h2>About Me</h2>
                    <p>What you see is what I am</p>
                </AboutTitleSection>
                <AboutContentSection>
                    <Image src="/images/avatar.png" alt="Avatar" width={300} height={300} />
                    <p>
                        My name is Sanders and I am a professional with a strong career in Software Engineering and a
                        growing interest in Artificial Intelligence and Machine Learning, with a passion for Physics and
                        Mathematics. I have more than 5 years of experience in software development with Java and
                        Nodejs. I have creativity to solve problems and adapt to different environments and cultures.
                        Ability to work in a team and manage interpersonal relationships.
                    </p>
                    <CVButton href="/resume">View CV</CVButton>
                </AboutContentSection>
            </AboutWrapper>
        </AboutContainer>
    )
}
