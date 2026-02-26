import React from 'react';
import styled from 'styled-components';
import { Typography, Row, Col } from 'antd';
import { 
  CodeOutlined, 
  DatabaseOutlined, 
  CloudServerOutlined, 
  TeamOutlined, 
  ReadOutlined, 
  SafetyCertificateOutlined 
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const SectionContainer = styled.section`
  padding: 100px 10vw;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionHeader = styled.div`
  margin-bottom: 60px;
`;

const SectionNumber = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 1.1rem;
  margin-right: 12px;
`;

const StackCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 32px;
  height: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

const StackTitle = styled(Text)`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechBadge = styled.span<{ $primary?: boolean }>`
  background: ${(props) => props.$primary ? 'rgba(59, 130, 246, 0.15)' : 'rgba(148, 163, 184, 0.1)'};
  color: ${(props) => props.$primary ? '#3B82F6' : ({ theme }) => theme.colors.secondaryText};
  border: 1px solid ${(props) => props.$primary ? 'rgba(59, 130, 246, 0.3)' : 'rgba(148, 163, 184, 0.2)'};
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${(props) => props.$primary ? '#3B82F6' : '#64748B'};
  }
`;

const InfoItem = styled.div`
  margin-bottom: 20px;
  &:last-child { margin-bottom: 0; }
`;

export default function TechSection() {
  return (
    <SectionContainer id="tech">
      <SectionHeader>
        <SectionNumber>03.</SectionNumber>
        <Title level={2} style={{ display: 'inline', fontWeight: 700 }}>Tech Stack & Info</Title>
        <Paragraph style={{ color: '#94A3B8', fontSize: '1.1rem', marginTop: '8px' }}>
          프로젝트에서 실전으로 사용한 기술 스택과 자격 정보입니다.
        </Paragraph>
      </SectionHeader>

      <Row gutter={[24, 24]}>
        {/* Frontend - 주력 기술 강조 [cite: 441, 443] */}
        <Col xs={24} md={12}>
          <StackCard>
            <CardHeader>
              <CodeOutlined style={{ color: '#3B82F6', fontSize: '20px' }} />
              <StackTitle>Frontend</StackTitle>
            </CardHeader>
            <BadgeContainer>
              <TechBadge $primary>React</TechBadge>
              <TechBadge $primary>TypeScript</TechBadge>
              <TechBadge $primary>React Flow</TechBadge>
              <TechBadge>Zustand</TechBadge>
              <TechBadge>Next.js</TechBadge>
              <TechBadge>Tailwind CSS</TechBadge>
              <TechBadge>Styled-components</TechBadge>
              <TechBadge>Ant Design</TechBadge>
            </BadgeContainer>
          </StackCard>
        </Col>

        {/* Backend [cite: 442, 444, 446] */}
        <Col xs={24} md={12}>
          <StackCard>
            <CardHeader>
              <DatabaseOutlined style={{ color: '#10B981', fontSize: '20px' }} />
              <StackTitle>Backend</StackTitle>
            </CardHeader>
            <BadgeContainer>
              <TechBadge $primary>Spring Boot</TechBadge>
              <TechBadge $primary>Java</TechBadge>
              <TechBadge>JPA/Hibernate</TechBadge>
              <TechBadge>MyBatis</TechBadge>
              <TechBadge>Node.js</TechBadge>
              <TechBadge>Express</TechBadge>
            </BadgeContainer>
          </StackCard>
        </Col>

        {/* Infra / DB [cite: 447, 449, 450, 452] */}
        <Col xs={24} md={12}>
          <StackCard>
            <CardHeader>
              <CloudServerOutlined style={{ color: '#A855F7', fontSize: '20px' }} />
              <StackTitle>Infra / DB</StackTitle>
            </CardHeader>
            <BadgeContainer>
              <TechBadge $primary>Redis</TechBadge>
              <TechBadge $primary>RabbitMQ</TechBadge>
              <TechBadge>MariaDB</TechBadge>
              <TechBadge>Docker</TechBadge>
              <TechBadge>Linux</TechBadge>
              <TechBadge>Nginx</TechBadge>
              <TechBadge>AWS EC2</TechBadge>
            </BadgeContainer>
          </StackCard>
        </Col>

        {/* Collaboration [cite: 454, 456] */}
        <Col xs={24} md={12}>
          <StackCard>
            <CardHeader>
              <TeamOutlined style={{ color: '#F59E0B', fontSize: '20px' }} />
              <StackTitle>Tools & Collaboration</StackTitle>
            </CardHeader>
            <BadgeContainer>
              <TechBadge $primary>Git / GitLab</TechBadge>
              <TechBadge $primary>pnpm / Monorepo</TechBadge>
              <TechBadge>Jira</TechBadge>
              <TechBadge>Confluence</TechBadge>
              <TechBadge>Figma</TechBadge>
              <TechBadge>Storybook</TechBadge>
            </BadgeContainer>
          </StackCard>
        </Col>

        {/* Education [cite: 410, 416, 418] */}
        <Col xs={24} md={12}>
          <StackCard>
            <CardHeader>
              <ReadOutlined style={{ color: '#3B82F6', fontSize: '20px' }} />
              <StackTitle>Education</StackTitle>
            </CardHeader>
            <InfoItem>
              <Text style={{ display: 'block', fontWeight: 600, fontSize: '1rem' }}>한국방송통신대학교 컴퓨터과학과</Text>
              <Text style={{ color: '#64748B', fontSize: '0.9rem' }}>3학년 편입 · 재학 중 (졸업예정: 2026.02) [cite: 410, 416, 418]</Text>
            </InfoItem>
          </StackCard>
        </Col>

        {/* Certifications [cite: 430, 433, 434, 435] */}
        <Col xs={24} md={12}>
          <StackCard>
            <CardHeader>
              <SafetyCertificateOutlined style={{ color: '#F59E0B', fontSize: '20px' }} />
              <StackTitle>Certifications</StackTitle>
            </CardHeader>
            <Row justify="space-between" style={{ marginBottom: '8px' }}>
              <Text style={{ fontWeight: 600 }}>정보처리기사</Text>
              <Text style={{ color: '#64748B', fontSize: '0.85rem' }}>한국산업인력공단 [cite: 434]</Text>
            </Row>
            <Row justify="space-between" style={{ marginBottom: '8px' }}>
              <Text style={{ fontWeight: 600 }}>SQL 개발자 (SQLD)</Text>
              <Text style={{ color: '#64748B', fontSize: '0.85rem' }}>한국데이터베이스진흥센터 [cite: 435]</Text>
            </Row>
            <Row justify="space-between">
              <Text style={{ fontWeight: 600 }}>리눅스마스터 2급</Text>
              <Text style={{ color: '#64748B', fontSize: '0.85rem' }}>한국정보통신진흥협회 [cite: 433]</Text>
            </Row>
          </StackCard>
        </Col>
      </Row>
    </SectionContainer>
  );
}