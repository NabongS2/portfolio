import React from 'react';
import styled from 'styled-components';
import { Typography, Row, Col, Tag } from 'antd';
import { 
  ThunderboltOutlined, 
  ExclamationCircleOutlined, 
  CheckCircleOutlined, 
  DeploymentUnitOutlined 
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

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 48px;
  margin-bottom: 40px;
  overflow: hidden;
`;

const ProjectTitle = styled(Title)`
  &.ant-typography {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 8px;
  }
`;

const TechTag = styled(Tag)`
  background: rgba(59, 130, 246, 0.1);
  color: #3B82F6;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  padding: 2px 12px;
  margin-bottom: 8px;
`;

const ContentBox = styled.div`
  margin-top: 32px;
`;

const StepItem = styled.div<{ $color: string }>`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  
  .icon {
    font-size: 20px;
    color: ${(props) => props.$color};
    margin-top: 4px;
  }
  
  .desc {
    p { margin: 0; color: ${({ theme }) => theme.colors.secondaryText}; line-height: 1.7; }
    strong { color: ${(props) => props.$color}; font-weight: 600; }
  }
`;

const DiagramPlaceholder = styled.div`
  height: 100%;
  min-height: 320px;
  background: rgba(15, 23, 42, 0.3);
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export default function WorkSection() {
  return (
    <SectionContainer id="work">
      <SectionHeader>
        <SectionNumber>02.</SectionNumber>
        <Title level={2} style={{ display: 'inline', fontWeight: 700 }}>Work Experience</Title>
        <Paragraph style={{ color: '#94A3B8', fontSize: '1.1rem', marginTop: '8px' }}>
          보안을 준수하며 기술적 해결 과정을 중심으로 정리한 핵심 프로젝트입니다.
        </Paragraph>
      </SectionHeader>

      {/* 프로젝트 1: 시나리오 빌더 */}
      <ProjectCard>
        <Row gutter={[48, 32]}>
          <Col xs={24} lg={12}>
            <ProjectTitle level={3}>시나리오 빌더 — React Flow 기반 에디터</ProjectTitle>
            <Text style={{ color: '#64748B', display: 'block', marginBottom: '16px' }}>2024.05 – 2024.09</Text>
            <div style={{ marginBottom: '24px' }}>
              <TechTag>React Flow</TechTag><TechTag>Spring Boot</TechTag><TechTag>Redis</TechTag><TechTag>Zustand</TechTag>
            </div>
            
            <ContentBox>
              <StepItem $color="#EF4444">
                <ExclamationCircleOutlined className="icon" />
                <div className="desc">
                  <p><strong>Problem</strong><br/>대화 모델(JSON) 규모 증가에 따른 DB 조회 성능 저하 및 운영자의 복잡한 로직 파악 어려움[cite: 49, 50].</p>
                </div>
              </StepItem>
              <StepItem $color="#3B82F6">
                <ThunderboltOutlined className="icon" />
                <div className="desc">
                  <p><strong>Action</strong><br/>React Flow 기반 시각화 UI 구현 및 Redis 캐싱 레이어 도입으로 조회 성능 최적화 주도[cite: 20, 53].</p>
                </div>
              </StepItem>
              <StepItem $color="#10B981">
                <CheckCircleOutlined className="icon" />
                <div className="desc">
                  <p><strong>Result</strong><br/>조회 속도 수초에서 수백ms 이하로 개선, 비개발자 운영자의 모델 설계 가능 환경 구축[cite: 42, 58].</p>
                </div>
              </StepItem>
            </ContentBox>
          </Col>
          <Col xs={24} lg={12}>
            <DiagramPlaceholder>
              <DeploymentUnitOutlined style={{ fontSize: '40px', color: '#3B82F6', marginBottom: '16px' }} />
              <Text style={{ color: '#F8FAFC', fontWeight: 600 }}>Architecture: Node-Serialization Flow</Text>
              <Paragraph style={{ fontSize: '0.85rem', marginTop: '8px' }}>
                React Flow State ↔ JSON 역직렬화 ↔ Redis 캐싱 흐름 도식 예정
              </Paragraph>
            </DiagramPlaceholder>
          </Col>
        </Row>
      </ProjectCard>

      {/* 프로젝트 2: STT 운영 관리 */}
      <ProjectCard>
        <Row gutter={[48, 32]}>
          <Col xs={24} lg={12}>
            <ProjectTitle level={3}>STT 실시간 운영 시스템 — WebSocket/SSE 기반</ProjectTitle>
            <Text style={{ color: '#64748B', display: 'block', marginBottom: '16px' }}>2025.05 – 2025.07</Text>
            <div style={{ marginBottom: '24px' }}>
              <TechTag>WebSocket</TechTag><TechTag>SSE</TechTag><TechTag>RabbitMQ</TechTag><TechTag>TypeScript</TechTag>
            </div>
            
            <ContentBox>
              <StepItem $color="#EF4444">
                <ExclamationCircleOutlined className="icon" />
                <div className="desc">
                  <p><strong>Problem</strong><br/>음성 인식 결과의 실시간 확인 불가 및 엔진 알람의 폴링(Polling) 방식에 따른 서버 부하[cite: 220, 270].</p>
                </div>
              </StepItem>
              <StepItem $color="#3B82F6">
                <ThunderboltOutlined className="icon" />
                <div className="desc">
                  <p><strong>Action</strong><br/>SSE 기반 실시간 알람 시스템 및 MIC/FILE 테스트용 WebSocket 통신 구조 설계[cite: 249, 265].</p>
                </div>
              </StepItem>
              <StepItem $color="#10B981">
                <CheckCircleOutlined className="icon" />
                <div className="desc">
                  <p><strong>Result</strong><br/>장애 탐지 속도 향상 및 실서비스 문제 재현/검증 시간 대폭 단축 성과[cite: 262, 297].</p>
                </div>
              </StepItem>
            </ContentBox>
          </Col>
          <Col xs={24} lg={12}>
            <DiagramPlaceholder>
              <ThunderboltOutlined style={{ fontSize: '40px', color: '#10B981', marginBottom: '16px' }} />
              <Text style={{ color: '#F8FAFC', fontWeight: 600 }}>Real-time Communication Pipeline</Text>
              <Paragraph style={{ fontSize: '0.85rem', marginTop: '8px' }}>
                STT Engine ↔ RabbitMQ ↔ Web Server ↔ SSE/WS Client 구조
              </Paragraph>
            </DiagramPlaceholder>
          </Col>
        </Row>
      </ProjectCard>

      {/* 프로젝트 3: 모노레포 전환 */}
      <ProjectCard>
        <Row gutter={[48, 32]}>
          <Col xs={24} lg={12}>
            <ProjectTitle level={3}>모노레포 기반 디자인 시스템 & 레거시 리빌딩</ProjectTitle>
            <Text style={{ color: '#64748B', display: 'block', marginBottom: '16px' }}>2025.02 – 2025.03</Text>
            <div style={{ marginBottom: '24px' }}>
              <TechTag>pnpm</TechTag><TechTag>Storybook</TechTag><TechTag>Vite</TechTag><TechTag>Styled-components</TechTag>
            </div>
            
            <ContentBox>
              <StepItem $color="#EF4444">
                <ExclamationCircleOutlined className="icon" />
                <div className="desc">
                  <p><strong>Problem</strong><br/>여러 프로젝트에 걸친 중복 UI 컴포넌트 산재 및 일관성 없는 디자인으로 인한 유지보수성 저하[cite: 329, 346].</p>
                </div>
              </StepItem>
              <StepItem $color="#3B82F6">
                <ThunderboltOutlined className="icon" />
                <div className="desc">
                  <p><strong>Action</strong><br/>pnpm workspace 기반 모노레포 구축 및 @ui 공통 패키지 분리, Storybook 문서화 수행[cite: 335, 350, 355].</p>
                </div>
              </StepItem>
              <StepItem $color="#10B981">
                <CheckCircleOutlined className="icon" />
                <div className="desc">
                  <p><strong>Result</strong><br/>중복 코드 약 70% 제거, 신규 프로젝트 셋업 시간 단축 및 UI 일관성 확보[cite: 374, 384].</p>
                </div>
              </StepItem>
            </ContentBox>
          </Col>
          <Col xs={24} lg={12}>
            <DiagramPlaceholder>
              <DeploymentUnitOutlined style={{ fontSize: '40px', color: '#A855F7', marginBottom: '16px' }} />
              <Text style={{ color: '#F8FAFC', fontWeight: 600 }}>Monorepo Structure & @ui System</Text>
              <Paragraph style={{ fontSize: '0.85rem', marginTop: '8px' }}>
                apps/ (admin, stt) & packages/ (ui, core) 의존성 관계 도식
              </Paragraph>
            </DiagramPlaceholder>
          </Col>
        </Row>
      </ProjectCard>
    </SectionContainer>
  );
}