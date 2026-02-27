import React from 'react';
import styled from 'styled-components';
import { Typography, Flex, Row, Col, Tag, Button, Space, Card } from 'antd';
import { 
  ArrowLeftOutlined, 
  CheckOutlined, 
  DeploymentUnitOutlined, 
  ThunderboltFilled,
  DatabaseFilled,
  SettingFilled
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Text, Paragraph } = Typography;

// --- 스타일 컴포넌트 ---
const DetailContainer = styled.div`
  background-color: #0B0F19;
  min-height: 100vh;
  padding: 120px 10vw 100px;
  color: #F8FAFC;
`;

const ContentSection = styled(motion.section)`
  margin-bottom: 80px;
`;

const InfoBox = styled.div`
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 32px;
  height: 100%;
`;

const HighlightCard = styled.div`
  background: rgba(59, 130, 246, 0.05);
  border-left: 4px solid #3B82F6;
  padding: 24px;
  border-radius: 0 16px 16px 0;
  margin-bottom: 24px;
`;

const TechTag = styled(Tag)`
  background: rgba(255, 255, 255, 0.05);
  color: #F8FAFC;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 6px 12px;
  font-size: 0.9rem;
  margin-bottom: 8px;
  border-radius: 6px;
`;

export default function ScenarioBuilderDetail() {
  return (
    <DetailContainer>
      {/* 뒤로가기 */}
      <Button 
        type="text" 
        icon={<ArrowLeftOutlined />} 
        style={{ color: '#94A3B8', marginBottom: '40px' }}
        onClick={() => window.history.back()}
      >
        프로젝트 목록으로 돌아가기
      </Button>

      {/* 01. 프로젝트 핵심 요약 */}
      <ContentSection initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Title level={1} style={{ color: '#F8FAFC', fontSize: '2.8rem', fontWeight: 900, marginBottom: '40px' }}>
          챗봇 시나리오 빌더 & NLP 사전 관리 시스템 개발
        </Title>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={14}>
            <Space direction="vertical" size={32} style={{ width: '100%' }}>
              <div>
                <Text style={{ color: '#3B82F6', fontWeight: 700 }}>📌 프로젝트 개요</Text>
                <Paragraph style={{ color: '#94A3B8', fontSize: '1.1rem', marginTop: '12px', lineHeight: 1.8 }}>
                  콜봇 서비스 운영자가 대화 시나리오(Flow)와 NLU 사전(Intent)을 직접 관리할 수 있는 웹 기반 빌더입니다.
                  복잡한 JSON 대화 모델 구조를 시각화하여 설계하고, 실시간 발화 테스트 기능을 제공함으로써 운영 효율을 극대화하는 것을 목표로 했습니다.
                </Paragraph>
              </div>
              
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Text style={{ color: '#3B82F6', fontWeight: 700 }}>📅 프로젝트 기간</Text>
                  <div style={{ color: '#F8FAFC', marginTop: '8px' }}>2024.05 ~ 2024.09 <br/><Text style={{fontSize: '0.85rem', color: '#64748B'}}>(25.11 고도화 진행)</Text></div>
                </Col>
                <Col span={12}>
                  <Text style={{ color: '#3B82F6', fontWeight: 700 }}>👩‍💻 역할</Text>
                  <div style={{ color: '#F8FAFC', marginTop: '8px' }}>프로젝트 기획, 설계, 디자인, 개발 전반 담당</div>
                </Col>
              </Row>
            </Space>
          </Col>

          <Col xs={24} lg={10}>
            <InfoBox>
              <Text style={{ color: '#3B82F6', fontWeight: 700, display: 'block', marginBottom: '20px' }}>💻 사용 기술</Text>
              <Space direction="vertical" size={12} style={{ width: '100%' }}>
                <Flex vertical>
                  <Text style={{ color: '#64748B', fontSize: '0.8rem' }}>Frontend</Text>
                  <Flex wrap="wrap" gap={6} style={{marginTop: '4px'}}>
                    <TechTag>React(JS)</TechTag><TechTag>React Flow</TechTag><TechTag>Zustand</TechTag><TechTag>Ant Design</TechTag>
                  </Flex>
                </Flex>
                <Flex vertical>
                  <Text style={{ color: '#64748B', fontSize: '0.8rem' }}>Backend</Text>
                  <Flex wrap="wrap" gap={6} style={{marginTop: '4px'}}>
                    <TechTag>Spring Boot</TechTag><TechTag>REST API</TechTag>
                  </Flex>
                </Flex>
                <Flex vertical>
                  <Text style={{ color: '#64748B', fontSize: '0.8rem' }}>DB / Cache</Text>
                  <Flex wrap="wrap" gap={6} style={{marginTop: '4px'}}>
                    <TechTag>MariaDB</TechTag><TechTag>Redis</TechTag>
                  </Flex>
                </Flex>
                <Flex vertical>
                  <Text style={{ color: '#64748B', fontSize: '0.8rem' }}>Infra</Text>
                  <Flex wrap="wrap" gap={6} style={{marginTop: '4px'}}>
                    <TechTag>Docker</TechTag><TechTag>Linux</TechTag><TechTag>Git</TechTag>
                  </Flex>
                </Flex>
              </Space>
            </InfoBox>
          </Col>
        </Row>
      </ContentSection>

      {/* 02. 상세 업무 내역 */}
      <ContentSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Title level={3} style={{ color: '#F8FAFC', marginBottom: '40px' }}>📁 담당 업무 및 해결 과정</Title>
        
        <Space direction="vertical" size={40} style={{ width: '100%' }}>
          {/* 1-1. 시나리오 빌더 */}
          <div>
            <Title level={4} style={{ color: '#60A5FA' }}>1-1) 시나리오 빌더(Scenario Builder) 개발</Title>
            <Paragraph style={{ color: '#94A3B8' }}>
              콜봇 대화 모델 JSON을 React Flow 기반의 시각적인 플로우 UI로 구성하여 운영 편의성을 획기적으로 개선했습니다.
            </Paragraph>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <HighlightCard>
                  <Text style={{ color: '#F8FAFC', fontWeight: 700 }}>시각적 플로우 설계</Text>
                  <ul style={{ color: '#94A3B8', marginTop: '12px', paddingLeft: '20px' }}>
                    <li>노드/엣지 기반 구조로 조건 분기 및 응답 흐름 시각화</li>
                    <li>UI 수정 사항을 JSON 모델로 자동 역직렬화하여 저장</li>
                  </ul>
                </HighlightCard>
              </Col>
              <Col xs={24} md={12}>
                <HighlightCard style={{ borderLeftColor: '#10B981' }}>
                  <Text style={{ color: '#F8FAFC', fontWeight: 700 }}>데이터 정합성 및 디버깅</Text>
                  <ul style={{ color: '#94A3B8', marginTop: '12px', paddingLeft: '20px' }}>
                    <li>사전 데이터 유실을 체크하는 디버깅 도구 지원</li>
                    <li>기존 시나리오를 활용한 템플릿 복사 기능 구현</li>
                  </ul>
                </HighlightCard>
              </Col>
            </Row>
          </div>

          {/* 1-2. 고도화 (성능/버전) */}
          <div style={{ background: 'rgba(59, 130, 246, 0.03)', padding: '32px', borderRadius: '24px' }}>
            <Title level={4} style={{ color: '#C1FF33' }}><ThunderboltFilled /> 성능 개선 및 버전 관리 도입</Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={12}>
                <Text style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '1.1rem' }}>성능 병목 해결 (Redis 캐싱)</Text>
                <Paragraph style={{ color: '#94A3B8', marginTop: '12px' }}>
                  대용량 JSON 조회 시 MariaDB의 속도 저하 문제를 해결하기 위해 <strong>Redis 기반 하이브리드 구조</strong>를 설계했습니다.
                </Paragraph>
                <div style={{ color: '#10B981', background: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '8px' }}>
                  조회 속도: 수 초 → <strong>수백 ms 이하로 단축</strong>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <Text style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '1.1rem' }}>안정적 운영 (Versioning)</Text>
                <Paragraph style={{ color: '#94A3B8', marginTop: '12px' }}>
                  실수 방지 및 실험 환경 분리를 위해 Redis와 MariaDB를 연동한 <strong>Rollback 체계</strong>를 구축했습니다.
                </Paragraph>
                <Tag color="cyan">버전 비교</Tag><Tag color="cyan">이력 적재</Tag><Tag color="cyan">롤백 기능</Tag>
              </Col>
            </Row>
          </div>

          {/* 2. NLU 사전 관리 */}
          <div>
            <Title level={4} style={{ color: '#60A5FA' }}>2) NLU 사전 관리 및 발화 테스트</Title>
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={16}>
                <Paragraph style={{ color: '#94A3B8', lineHeight: 1.8 }}>
                  NLU 코어 엔진과 연동하여 의도(Intent)와 치환(Synonym)을 관리하는 백오피스를 구축했습니다.
                  사용자가 입력한 문장을 실시간으로 엔진에 전달하고 분석 결과를 시각화하여 <strong>사전의 품질을 즉각적으로 확인</strong>할 수 있습니다.
                </Paragraph>
              </Col>
              <Col xs={24} lg={8}>
                <div style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '16px' }}>
                  <Text style={{ color: '#F8FAFC', fontSize: '0.9rem' }}>주요 기능</Text>
                  <ul style={{ color: '#64748B', fontSize: '0.85rem', marginTop: '10px', paddingLeft: '15px' }}>
                    <li>중복 발화 및 정합성 체크</li>
                    <li>NLU API 실시간 발화 테스트</li>
                    <li>시나리오 참조 데이터 검증</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Space>
      </ContentSection>

      {/* 03. 핵심 성과 요약 */}
      <ContentSection>
        <GlassCard style={{ textAlign: 'center', border: '1px solid #3B82F6' }}>
          <Title level={3} style={{ color: '#3B82F6', marginBottom: '32px' }}>✅ 프로젝트 핵심 성과</Title>
          <Row gutter={[24, 24]}>
            {[
              "콜봇 운영 전 과정(시나리오-사전-테스트) 단일 UI 통합",
              "복잡한 그래프 구조 시각화를 통한 제품화 수준 고도화",
              "DB-캐시 하이브리드 구조 도입으로 처리 성능 획기적 개선",
              "버전 관리 체계 정립으로 운영 안정성 및 모델 품질 강화"
            ].map((text, i) => (
              <Col xs={24} md={12} key={i}>
                <Flex align="center" gap={12} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', textAlign: 'left' }}>
                  <CheckOutlined style={{ color: '#10B981' }} />
                  <Text style={{ color: '#F8FAFC' }}>{text}</Text>
                </Flex>
              </Col>
            ))}
          </Row>
        </GlassCard>
      </ContentSection>
    </DetailContainer>
  );
}

const GlassCard = styled.div`
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 40px;
`;