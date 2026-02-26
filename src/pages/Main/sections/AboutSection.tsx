import React from 'react';
import styled from 'styled-components';
import { Typography, Row, Col, Card } from 'antd';
import { DatabaseOutlined, BarChartOutlined, ThunderboltOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const SectionContainer = styled.section`
  padding: 100px 10vw;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  margin-bottom: 48px;
`;

const SectionNumber = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 1.1rem;
  margin-right: 12px;
`;

const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  
  .ant-card-body {
    padding: 24px;
  }
`;

const TagBadge = styled.span`
  background: rgba(148, 163, 184, 0.1);
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-right: 8px;
`;

export default function AboutSection() {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionNumber>01.</SectionNumber>
        <Title level={2} style={{ display: 'inline', fontWeight: 700 }}>About & Philosophy</Title>
        <Paragraph style={{ color: '#94A3B8', fontSize: '1.1rem', marginTop: '8px' }}>
          디자인과 개발의 교차점에서 사용자 중심 시스템을 설계합니다
        </Paragraph>
      </SectionHeader>

      <Row gutter={[48, 48]}>
        {/* 좌측 텍스트 영역 */}
        <Col xs={24} lg={10}>
          <Paragraph style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8 }}>
            패션·웹 디자인 백그라운드에서 시작해, 시스템 아키텍처와 성능 최적화까지 고민하는 개발자로 성장했습니다. 디자이너의 시각으로 사용자 경험을 설계하고, 엔지니어의 사고로 안정적인 시스템을 구축합니다.
            <br/><br/>
            복잡한 비즈니스 로직을 직관적인 인터페이스로 풀어내는 것에 집중하며, 레거시 시스템 전환, 실시간 데이터 파이프라인, 모노레포 아키텍처 등 다양한 문제를 해결해왔습니다.
          </Paragraph>
          <div style={{ borderLeft: `4px solid #3B82F6`, paddingLeft: '20px', marginTop: '32px' }}>
            <Text style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#F8FAFC' }}>
              "단순 기능 구현을 넘어, 사용자 관점의 UI와 안정적인 백엔드 구조를 연결합니다."
            </Text>
          </div>
        </Col>

        {/* 우측 카드 영역 */}
        <Col xs={24} lg={14}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <StyledCard>
                <Row wrap={false} gutter={16}>
                  <Col><DatabaseOutlined style={{ fontSize: '24px', color: '#3B82F6' }} /></Col>
                  <Col flex="auto">
                    <Text style={{ fontSize: '1.1rem', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Frontend Architecture</Text>
                    <Paragraph style={{ color: '#94A3B8', marginBottom: '16px' }}>모노레포 구조 설계, 레거시 MPA → SPA 전환, 공통 UI 패키지 분리 및 Storybook 기반 문서화</Paragraph>
                    <div><TagBadge>React</TagBadge><TagBadge>Monorepo</TagBadge><TagBadge>pnpm</TagBadge><TagBadge>Storybook</TagBadge></div>
                  </Col>
                </Row>
              </StyledCard>
            </Col>
            
            {/* 필요에 따라 Data Visualization, Performance & Real-time 카드도 동일한 구조로 추가 */}
            <Col span={24}>
              <StyledCard>
                <Row wrap={false} gutter={16}>
                  <Col><BarChartOutlined style={{ fontSize: '24px', color: '#3B82F6' }} /></Col>
                  <Col flex="auto">
                    <Text style={{ fontSize: '1.1rem', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Data Visualization</Text>
                    <Paragraph style={{ color: '#94A3B8', marginBottom: '16px' }}>React Flow 기반 시나리오 빌더, 복잡한 데이터 흐름의 시각화 대시보드 구현</Paragraph>
                    <div><TagBadge>React Flow</TagBadge><TagBadge>D3.js</TagBadge><TagBadge>Dashboard</TagBadge></div>
                  </Col>
                </Row>
              </StyledCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </SectionContainer>
  );
}