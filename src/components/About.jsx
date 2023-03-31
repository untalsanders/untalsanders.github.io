'use strict'

import Image from 'next/image'
import { Wrapper } from './Common'
import styled from 'styled-components'

const AboutContainer = styled.section`
    /* background-color: #3bb4c1; */
    padding: min(4rem, 4rem) 0;
`

const AboutWrapper = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        column-gap: 2rem;
    }

    img {
        border-radius: 50%;
        border: 2px solid #ccc;
    }

    div {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        text-align: center;

        h2 {
            font-size: clamp(1.2rem, 3rem, 8rem);
            font-weight: 800;
            text-transform: uppercase;
        }

        p {
            font-size: clamp(1rem, 1.5rem, 2rem);
            font-weight: 300;
        }
    }
`

const CVButton = styled.a`
    background-color: #111;
    color: white;
    font-size: clamp(1rem, 1.5rem, 2rem);
    font-weight: bold;
    padding: 1rem;
    border-radius: 0.8rem;

    &:hover {
        background-color: rgba(1, 1, 1, 0.75);
    }
`

export default function About() {
    return (
        <AboutContainer id="about-me">
            <AboutWrapper>
                <Image src="/blog/images/avatar.png" alt="Avatar" width={340} height={340} />
                <div>
                    <h2>¿Who am I?</h2>
                    <p>
                        My name is Sanders and I am a professional with a strong career in Software Engineering and a
                        growing interest in Artificial Intelligence and Machine Learning, with a passion for Physics and
                        Mathematics. I have more than 5 years of experience in software development with Java and
                        Nodejs. I have creativity to solve problems and adapt to different environments and cultures.
                        Ability to work in a team and manage interpersonal relationships.
                    </p>
                    <CVButton href="/blog/resume">View CV</CVButton>
                </div>
            </AboutWrapper>
        </AboutContainer>
    )
}
