'use strict'

import { Wrapper } from './Common.jsx'
import { FaCode, FaTabletAlt } from 'react-icons/fa'
import { HiWrenchScrewdriver } from 'react-icons/hi2'
import styled from 'styled-components'

const ServicesContainer = styled.section`
    background-color: #fccf8d;
    padding: clamp(4rem, 20vh, 8rem) 0;
`

const ServicesWrapper = styled(Wrapper)`
    & > :first-child {
        padding-bottom: clamp(4rem, 20vh, 4rem);
    }
`

const ServicesTitleSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2,
    p {
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: clamp(3vw, 3rem, 8rem);
        font-weight: 800;
    }

    p {
        font-weight: 300;
        letter-spacing: 2px;
    }
`

const ServicesContentSection = styled.div`
    display: grid;
    gap: 4rem;

    @media only screen and (min-width: 64em) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const ServicesCard = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    text-align: center;

    svg {
        font-size: clamp(3rem, 8vw, 4rem);
    }

    h3,
    p {
        margin: 0;
        padding: 0;
    }

    h3 {
        font-size: clamp(1rem, 1.4rem, 2rem);
    }

    p {
        font-size: clamp(1rem, 1.4rem, 2rem);
        font-weight: 300;
        line-height: clamp(1.5rem, 2rem, 10vh);
    }
`

export function Services() {
    return (
        <ServicesContainer id="services">
            <ServicesWrapper>
                <ServicesTitleSection>
                    <h2>What I do</h2>
                    <p>I dedicate myself to this daily</p>
                </ServicesTitleSection>
                <ServicesContentSection>
                    <ServicesCard>
                        <FaCode />
                        <h3>Software Development</h3>
                        <p>
                            Get an optimized design aligned with the visual identity of your brand, planned from
                            usability and become more visible to your audiences through a friendly design optimized for
                            search engines.
                        </p>
                    </ServicesCard>
                    <ServicesCard>
                        <FaTabletAlt />
                        <h3>Mobile Development</h3>
                        <p>
                            Align current mobile trends, to improve your processes and increase the level of
                            accessibility and visibility of your customers, allowing you to build loyalty with your
                            target audience, since they can be in front of your business at all times.
                        </p>
                    </ServicesCard>
                    <ServicesCard>
                        <HiWrenchScrewdriver />
                        <h3>Consultancy</h3>
                        <p>
                            Ensure the perfect functioning of your company, through a specialized computer consultancy,
                            which ranges from the analysis of requirements to the analysis and corrective and preventive
                            maintenance of your computer applications.
                        </p>
                    </ServicesCard>
                </ServicesContentSection>
            </ServicesWrapper>
        </ServicesContainer>
    )
}
