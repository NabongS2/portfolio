import React from 'react';
import styled from 'styled-components';
import { Flex } from 'antd';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import WorkSection from './sections/WorkSection';
import TechSection from './sections/TechSection';
import ContactSection from './sections/ContactSection';
import SectionWrapper from '../../components/SectionWrapper';

const MainContainer = styled(Flex)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  /* 섹션 사이의 간격을 일정하게 유지 */
  gap: 120px; 
  padding-bottom: 200px;
`;

export default function MainPage() {
  return (
    <MainContainer vertical>
      {/* 각 섹션을 SectionWrapper로 감싸기만 하면 
        내부 요소들이 스크롤에 반응해 자동으로 나타납니다. 
      */}
      
      <SectionWrapper id="hero">
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper id="about">
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper id="work">
        <WorkSection />
      </SectionWrapper>

      <SectionWrapper id="tech">
        <TechSection />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <ContactSection />
      </SectionWrapper>
    </MainContainer>
  );
}