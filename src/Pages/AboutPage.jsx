import React from 'react'

import Title from '../Components/Title';

import { MainLayout } from '../styles/Layout';
import styled from 'styled-components';

const AboutPage = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
            </AboutStyled>
        </MainLayout>

    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
