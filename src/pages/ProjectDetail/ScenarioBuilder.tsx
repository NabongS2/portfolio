import React from 'react';
import styled from 'styled-components';
import { Typography, Flex, Row, Col, Tag, Button } from 'antd';
import { 
  ArrowLeftOutlined, 
  CalendarOutlined, 
  UserOutlined, 
  CodeOutlined 
} from '@ant-design/icons';
import { motion } from 'framer-motion';
// react-router-dom을 사용 중이시라면 useNavigate를 import 해주세요.
// import { useNavigate } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

const DetailContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background || '#0B0F19'};
  min-height: 100vh;
  padding: 120px 10vw 100px;
  color: #F8FAFC;
`;

const HeroSection = styled(motion.section)`
  margin-bottom: 80px;
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 40px;
  margin-top: 40px;
`;

const MetaItem = styled(Flex)`
  .meta-label {
    color: #64748B;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .meta-value {
    color: #F8FAFC;
    font-size: 1.1rem;
    font-weight: 500;
  }
  .meta-icon {
    color: #3B82F6;
    margin-right: 8px;
  }
`;

const NeonTag = styled(Tag)`
  background: rgba(59, 130, 246, 0.1);
  color: #60A5FA;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  padding: 4px 12px;
  font-size: 0.9rem;
  margin-bottom: 8px;
`;

const OverviewSection = styled(motion.section)`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 80px;
  margin-bottom: 80px;
`;

export default function ScenarioBuilderDetail() {
  // const navigate = useNavigate();

  return (
    <DetailContainer>
      {/* 🔙 뒤로 가기 네비게이션 */}
      <Button 
        type="text" 
        icon={<ArrowLeftOutlined />} 
        style={{ color: '#94A3B8', marginBottom: '40px', fontSize: '1rem' }}
        onClick={() => window.history.back()} // 라우터 사용 시 navigate(-1)로 변경
      >
        Back to Projects
      </Button>

      {/* 01. Hero Section */}
      <HeroSection 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <Text style={{ color: '#3B82F6', fontWeight: 700, letterSpacing: '2px' }}>
          CASE STUDY 01
        </Text>
        <Title level={1} style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, color: '#F8FAFC', marginTop: '16px' }}>
          시나리오 빌더 리빌딩
        </Title>
        <Paragraph style={{ color: '#94A3B8', fontSize: '1.4rem', maxWidth: '800px', marginTop: '24px' }}>
          복잡한 JSON 대화 모델을 직관적인 노드 캔버스로 시각화하여, 운영팀의 생산성과 시스템 조회 성능을 극대화한 풀스택 프로젝트입니다.
        </Paragraph>

        {/* 프로젝트 핵심 메타 정보 */}
        <MetaGrid>
          <MetaItem vertical>
            <Text className="meta-label"><UserOutlined className="meta-icon"/> Role</Text>
            <Text className="meta-value">풀스택 개발 & 아키텍처 설계</Text>
          </MetaItem>
          
          <MetaItem vertical>
            <Text className="meta-label"><CalendarOutlined className="meta-icon"/> Period</Text>
            <Text className="meta-value">202X.XX ~ 202X.XX (N개월)</Text>
          </MetaItem>

          <MetaItem vertical>
            <Text className="meta-label"><CodeOutlined className="meta-icon"/> Tech Stack</Text>
            <Flex wrap="wrap" gap={8} style={{ marginTop: '4px' }}>
              <NeonTag>React Flow</NeonTag>
              <NeonTag>Zustand</NeonTag>
              <NeonTag>Spring Boot</NeonTag>
              <NeonTag>Redis</NeonTag>
            </Flex>
          </MetaItem>
        </MetaGrid>
      </HeroSection>

      {/* 02. The Challenge & Purpose */}
      <OverviewSection
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
      >
        <Row gutter={[64, 40]}>
          <Col xs={24} md={12}>
            <Title level={3} style={{ color: '#F8FAFC', fontWeight: 800 }}>The Challenge</Title>
            <Title level={4} style={{ color: '#60A5FA', fontWeight: 600, marginTop: '16px' }}>
              "텍스트로만 이루어진 복잡한 데이터 모델"
            </Title>
            <Paragraph style={{ color: '#94A3B8', fontSize: '1.1rem', lineHeight: 1.8 }}>
              기존 시스템은 수백 개의 조건문과 답변이 얽힌 챗봇 시나리오를 단순 JSON 텍스트 형태로 관리했습니다. 
              이로 인해 운영팀이 전체 흐름을 파악하는 데 오랜 시간이 걸렸고, 수정 시 휴먼 에러가 빈번하게 발생하는 치명적인 UX/DX(Developer Experience) 문제가 있었습니다.
            </Paragraph>
          </Col>

          <Col xs={24} md={12}>
            <Title level={3} style={{ color: '#F8FAFC', fontWeight: 800 }}>The Solution</Title>
            <Title level={4} style={{ color: '#C1FF33', fontWeight: 600, marginTop: '16px' }}>
              "시각적 캔버스와 실시간 동기화 아키텍처"
            </Title>
            <Paragraph style={{ color: '#94A3B8', fontSize: '1.1rem', lineHeight: 1.8 }}>
              React Flow를 도입해 데이터를 직관적인 노드와 엣지(Edge) 형태로 시각화했습니다.
              또한 상태 관리 라이브러리(Zustand)와 Redis 캐싱을 결합하여, 대량의 노드를 드래그 앤 드롭할 때도 버벅임 없이 즉각적으로 서버와 동기화되는 아키텍처를 설계했습니다.
            </Paragraph>
          </Col>
        </Row>
      </OverviewSection>
    </DetailContainer>
  );
}