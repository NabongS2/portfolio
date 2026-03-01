import React from 'react';
import { Typography, Flex, Row, Col, Space, Grid } from 'antd';
import { 
  CheckCircleFilled, 
  SyncOutlined,
  BlockOutlined,
  LineChartOutlined,
  DashboardOutlined,
  AppstoreAddOutlined,
  BellOutlined,
} from '@ant-design/icons';

// ✨ 전역 상태 및 공통 컴포넌트 불러오기
import { useThemeStore } from '../../store/themeStore'; 

import ProjectLayout from "../../components/layout/ProjectLayout";
import { 
  ContentSection, 
  GlassCard, 
  HighlightCard, 
  TechTag 
} from "../../styles/components/ProjectStyles";
const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;
export default function WebAdminDetail() {
  const screens = useBreakpoint();
  const { isDarkMode } = useThemeStore();

  const colors = {
    title: isDarkMode ? '#F8FAFC' : '#0F172A',
    text: isDarkMode ? '#CBD5E1' : '#475569',
    subText: isDarkMode ? '#94A3B8' : '#64748B',
    cardBg: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#F8FAFC',
  };

  return (
    <ProjectLayout>
      
      {/* 01. 히어로 섹션 */}
      <ContentSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Title level={1} style={{ color: colors.title, fontSize: screens.md ? '3.2rem' : '2rem', fontWeight: 900, marginBottom: '24px' }}>
          AI 콜봇 통합 운영 관리(WebAdmin) <br/>고도화 및 SaaS형 플랫폼 구축
        </Title>
        
        <Row gutter={[40, 32]}>
          <Col xs={24} lg={14}>
            <Space direction="vertical" size={32} style={{ width: '100%' }}>
              <div>
                <Text style={{ color: '#3B82F6', fontWeight: 800, fontSize: '1.2rem' }}>📌 프로젝트 개요</Text>
                <Paragraph style={{ color: colors.text, fontSize: '1.15rem', marginTop: '12px', lineHeight: 1.8 }}>
                  기존 레거시 시스템을 React SPA 및 모노레포 구조로 전환함과 동시에, 신규 병원 도입을 가속화할 수 있는 <strong>SaaS형 관리자 플랫폼</strong>을 구축했습니다.
                  테넌트별 표준화된 서비스 구축 환경을 제공하고, 다각도의 통계 및 실시간 모니터링을 통해 현업의 데이터 기반 운영(Data-driven)을 극대화했습니다.
                </Paragraph>
              </div>
              
              <Flex gap={40} wrap="wrap">
                <div>
                  <Text style={{ color: '#3B82F6', fontWeight: 700, fontSize: '1.1rem' }}>📅 기간</Text>
                  <div style={{ color: colors.title, marginTop: '8px', fontSize: '1.2rem', fontWeight: 700 }}>
                    2024.08 ~ 현재 <span style={{ fontSize: '0.95rem', color: colors.subText, fontWeight: 500 }}>(지속 고도화 중)</span>
                  </div>
                </div>
                <div>
                  <Text style={{ color: '#3B82F6', fontWeight: 700, fontSize: '1.1rem' }}>👩‍💻 역할</Text>
                  <div style={{ color: colors.title, marginTop: '8px', fontSize: '1.2rem', fontWeight: 700 }}>
                    아키텍처 설계, 화면 설계, 프론트/백엔드 개발 전반
                  </div>
                </div>
              </Flex>
            </Space>
          </Col>

          <Col xs={24} lg={10}>
            <GlassCard $isDark={isDarkMode} style={{ padding: '32px' }}>
              <Text style={{ color: '#3B82F6', fontWeight: 800, fontSize: '1.2rem', display: 'block', marginBottom: '24px' }}>💻 사용 기술</Text>
              
              <Space direction="vertical" size={20} style={{ width: '100%' }}>
                <Flex vertical gap={10}>
                  <Text style={{ color: colors.subText, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Frontend</Text>
                  <Flex wrap="wrap" gap={8}>
                    {['React', 'TypeScript', 'Zustand', 'Styled-components', 'Ant Design'].map(tech => (
                      <TechTag key={tech} $isDark={isDarkMode}>{tech}</TechTag>
                    ))}
                  </Flex>
                </Flex>

                <Flex vertical gap={10}>
                  <Text style={{ color: colors.subText, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Backend / Message</Text>
                  <Flex wrap="wrap" gap={8}>
                    {['Spring Boot', 'REST API', 'RabbitMQ'].map(tech => (
                      <TechTag key={tech} $isDark={isDarkMode}>{tech}</TechTag>
                    ))}
                  </Flex>
                </Flex>

                <Flex vertical gap={10}>
                  <Text style={{ color: colors.subText, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Architecture & Infra</Text>
                  <Flex wrap="wrap" gap={8}>
                    {['pnpm workspace', 'Vite', 'Storybook', 'Docker', 'Redis'].map(tech => (
                      <TechTag key={tech} $isDark={isDarkMode}>{tech}</TechTag>
                    ))}
                  </Flex>
                </Flex>
              </Space>
            </GlassCard>
          </Col>
        </Row>
      </ContentSection>

      {/* 02. 기술적 도전과 아키텍처 */}
      <ContentSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Title level={3} style={{ color: colors.title, marginBottom: '32px' }}>🚀 핵심 아키텍처 고도화</Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <HighlightCard $isDark={isDarkMode} $borderColor="#3B82F6">
              <Flex align="center" gap={12} style={{ marginBottom: '16px' }}>
                <SyncOutlined style={{ color: '#3B82F6', fontSize: '24px' }} />
                <Title level={4} style={{ color: colors.title, margin: 0 }}>RabbitMQ 무중단(Zero-Downtime) 배포</Title>
              </Flex>
              <Paragraph style={{ color: colors.text, lineHeight: 1.7 }}>
                기존에는 콜봇 설정 변경 시 전체 시스템 재배포가 필요해 대응 속도가 저하되었습니다. 
                이를 해결하기 위해 <strong>RabbitMQ 기반의 비동기 이벤트 전달망</strong>을 구축하여, 재배포 없이 컨테이너 환경 전반에 즉시 설정이 반영되도록 개선했습니다.
              </Paragraph>
            </HighlightCard>
          </Col>
          <Col xs={24} md={12}>
            <HighlightCard $isDark={isDarkMode} $borderColor="#10B981">
              <Flex align="center" gap={12} style={{ marginBottom: '16px' }}>
                <BlockOutlined style={{ color: '#10B981', fontSize: '24px' }} />
                <Title level={4} style={{ color: colors.title, margin: 0 }}>모노레포(Monorepo) 및 레거시 청산</Title>
              </Flex>
              <Paragraph style={{ color: colors.text, lineHeight: 1.7 }}>
                유지보수가 불가능했던 HTML/jQuery 레거시를 <strong>React SPA와 pnpm workspace 구조</strong>로 전면 리빌딩했습니다. 
                공통 UI 컴포넌트(@ui)를 도입하고 Storybook으로 문서화하여 개발 생산성과 시스템 전반의 UI/UX 일관성을 확립했습니다.
              </Paragraph>
            </HighlightCard>
          </Col>
        </Row>
      </ContentSection>
      
      {/* 03. 주요 비즈니스 기능 설계 및 구현 */}
      <ContentSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Title level={3} style={{ color: colors.title, marginBottom: '32px' }}>📁 주요 서비스 기능 및 구현</Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: '#3B82F6' }}><AppstoreAddOutlined /> 표준화된 서비스 구축 아키텍처 (SaaS화)</Title>
              <ul style={{ color: colors.text, paddingLeft: '20px', lineHeight: 2 }}>
                <li><strong>계층형 설정 구조 도입:</strong> 테넌트 생성 → 서비스 생성 → 기준 데이터 연동의 단계를 거쳐 손쉽게 플랫폼을 구축할 수 있는 구조 설계</li>
                <li><strong>표준 진료 예약 시스템:</strong> 신규 병원(고객사) 도입 시, 복잡한 커스텀 개발 없이 표준화된 템플릿만으로 콜봇 예약 시스템을 즉각 적용 가능하도록 구현</li>
              </ul>
            </GlassCard>
          </Col>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: '#10B981' }}><LineChartOutlined /> 다각도 통계 및 이력 시각화</Title>
              <ul style={{ color: colors.text, paddingLeft: '20px', lineHeight: 2 }}>
                <li><strong>맞춤형 대시보드:</strong> 콜봇 사용률, 평균 통화 시간, 완료율 등 핵심 지표 시각화</li>
                <li><strong>이력 및 통계 통합:</strong> 상담/알람/병원안내 이력과 시스템/채널/업무별(예약확인, 취소 등) 통계 페이지 구축</li>
                <li><strong>사용자 여정 분석:</strong> Sankey 다이어그램을 통해 이탈 구간 트래킹 등 서비스 품질 분석 제공</li>
              </ul>
            </GlassCard>
          </Col>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: '#F59E0B' }}><DashboardOutlined /> 실시간 상담 모니터링</Title>
              <ul style={{ color: colors.text, paddingLeft: '20px', lineHeight: 2 }}>
                <li><strong>실시간 트래픽 연동:</strong> Redis와 연동하여 테넌트별 콜봇 연결 상태 및 실시간 상담 내용 파악</li>
                <li><strong>로컬 캐싱 최적화:</strong> 사용자가 선택한 상담 이력을 localStorage에 최대 10개까지 저장하여 빠른 재조회 환경 제공</li>
              </ul>
            </GlassCard>
          </Col>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: '#8B5CF6' }}><BellOutlined /> 시스템 설정 및 통합 알람 관리</Title>
              <ul style={{ color: colors.text, paddingLeft: '20px', lineHeight: 2 }}>
                <li><strong>시스템 환경 관리:</strong> 알람 설정, 서버 관리, 공통코드 등 콜봇 운영에 필요한 전반적인 시스템 환경 설정 통합</li>
                <li>RabbitMQ와 연동하여 관리자가 설정한 시스템 및 알람 정책이 즉각적으로 서비스 서버에 반영되도록 구현</li>
              </ul>
            </GlassCard>
          </Col>
        </Row>
      </ContentSection>

      {/* 04. 프로젝트 핵심 성과 */}
      <ContentSection initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <GlassCard $isDark={isDarkMode} style={{ background: isDarkMode ? 'rgba(59, 130, 246, 0.1)' : '#EFF6FF', border: '1px solid #3B82F6' }}>
          <Title level={3} style={{ color: '#3B82F6', textAlign: 'center', marginBottom: '40px' }}>✅ 전체 기여 및 비즈니스 성과</Title>
          <Row gutter={[24, 24]}>
            {[
              "테넌트-서비스-기준데이터 기반의 계층형 구조를 설계하여 신규 병원(고객) 온보딩 비용과 시간 획기적 감축",
              "다양한 분석 통계(업무/채널별) 및 이력 관리 체계를 구축하여 현업의 데이터 기반 의사결정 효율 극대화",
              "RabbitMQ를 활용한 무중단(Zero-downtime) 설정 반영 아키텍처로 서비스 대응 속도 대폭 개선",
              "기존 jQuery 기반의 무거운 시스템을 React SPA 및 모노레포로 전환하여 로딩 및 렌더링 성능 최적화"
            ].map((text, i) => (
              <Col xs={24} md={12} key={i}>
                <Flex align="start" gap={12} style={{ background: colors.cardBg, padding: '20px', borderRadius: '16px', border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`, height: '100%' }}>
                  <CheckCircleFilled style={{ color: '#10B981', fontSize: '1.2rem', marginTop: '4px' }} />
                  <Text style={{ color: colors.title, fontSize: '1.05rem', lineHeight: 1.6 }}>{text}</Text>
                </Flex>
              </Col>
            ))}
          </Row>
        </GlassCard>
      </ContentSection>

    </ProjectLayout>
  );
}