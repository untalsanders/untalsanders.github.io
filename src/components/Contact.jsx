'use strict'

import { Wrapper } from './Common'
import { FaRegGrinWink } from 'react-icons/fa'
import styled from 'styled-components'

const ContactContainer = styled.section`
    padding: clamp(4rem, 20vh, 8rem) 0;
    background-color: #222;
    color: white;
`

const ContactWrapper = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: clamp(1.5rem, 4vh, 3rem);

    svg {
        background-color: #f9af16;
        font-size: clamp(4rem, 4vw, 3rem);
        border-radius: 50%;
    }
`

const ContentTitleSection = styled.div`
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

const ContentContentSection = styled.div`
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 200;
    line-height: clamp(2rem, 4vw, 2rem);

    a {
        color: #ef2d56;
        font-weight: 500;
    }
`

export function Contact() {
    return (
        <ContactContainer id="contact">
            <ContactWrapper>
                <ContentTitleSection>
                    <h2>Contact</h2>
                    <p>Let&apos;s do something together or share knowlegde.</p>
                </ContentTitleSection>
                <ContentContentSection>
                    Drop me a line on <a href="mailto:ing.sanders@gmail.com">ing.sanders@gmail.com</a>, it doesn&apos;t
                    matter if it is for an interview or just for a cup of coffee, I enjoy meeting new people.
                </ContentContentSection>
                <FaRegGrinWink />
            </ContactWrapper>
        </ContactContainer>
    )
}
