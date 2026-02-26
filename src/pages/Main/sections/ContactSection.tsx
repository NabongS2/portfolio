import React from 'react';
import styled from 'styled-components';
import { Typography, Row, Col } from 'antd';
import { GithubOutlined, FileTextOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const SectionContainer = styled.section`
  padding: 120px 10vw;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SectionHeader = styled.div`
  margin-bottom: 64px;
`;

const SectionNumber = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 1.1rem;
`;

const ContactCard = styled.a`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  height: 100%;
  text-decoration: none;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

const ContactTitle = styled(Text)`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const ContactDesc = styled(Text)`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 0.95rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin-top: 100px;
  margin-bottom: 40px;
`;

const FooterText = styled(Text)`
  color: #64748B;
  font-size: 0.9rem;
  font-family: monospace;
`;

export default function ContactSection() {
  return (
    <SectionContainer id="contact">
      <SectionHeader>
        <SectionNumber>04.</SectionNumber>
        <Title level={2} style={{ marginTop: '8px', fontWeight: 800 }}>Contact</Title>
        <Paragraph style={{ color: '#94A3B8', fontSize: '1.1rem' }}>
          함께 일하고 싶으시다면 편하게 연락 주세요.
        </Paragraph>
      </SectionHeader>

      <Row gutter={[24, 24]} style={{ width: '100%', maxWidth: '1000px' }}>
        <Col xs={24} md={8}>
          <ContactCard href="https://github.com/your-id" target="_blank">
            <IconWrapper><GithubOutlined /></IconWrapper>
            <ContactTitle>GitHub</ContactTitle>
            <ContactDesc>프로젝트 코드 & 오픈소스 기여</ContactDesc>
          </ContactCard>
        </Col>
        
        <Col xs={24} md={8}>
          <ContactCard href="https://www.notion.so/JAVA-2324d175f3af80c18e4dc48654c50ff6?source=copy_link" target="_blank">
            <IconWrapper><FileTextOutlined /></IconWrapper>
            <ContactTitle>Notion 이력서</ContactTitle>
            <ContactDesc>상세 경력 & 프로젝트 기술서</ContactDesc>
          </ContactCard>
        </Col>
        
        <Col xs={24} md={8}>
          <ContactCard href="mailto:99lnh@naver.com">
            <IconWrapper><MailOutlined /></IconWrapper>
            <ContactTitle>Email</ContactTitle>
            <ContactDesc>99lnh@naver.com</ContactDesc>
          </ContactCard>
        </Col>
      </Row>

      <Divider />
      
      <FooterText>
        @Nabong's Portfolio.
      </FooterText>
    </SectionContainer>
  );
}