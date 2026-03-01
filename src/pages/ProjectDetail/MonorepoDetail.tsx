import React from 'react';
import { Typography, Flex, Row, Col, Space, Grid } from 'antd';
import { 
  CheckCircleFilled, 
  BuildOutlined,
  FormatPainterOutlined,
  AppstoreAddOutlined,
  ToolOutlined,
  CodeOutlined,
  PartitionOutlined
} from '@ant-design/icons';

// ✨ 전역 상태 및 공통 컴포넌트 불러오기
import { useThemeStore } from '../../store/themeStore'; 
import ProjectLayout from '../../components/layout/ProjectLayout';
import { 
  ContentSection, 
  GlassCard, 
  HighlightCard, 
  TechTag 
} from "../../styles/components/ProjectStyles";

const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export default function MonorepoDetail() {
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
          모노레포 기반 사내 Admin 아키텍처 및 <br/>디자인 시스템 구축
        </Title>
        
        <Row gutter={[40, 32]}>
          <Col xs={24} lg={14}>
            <Space direction="vertical" size={32} style={{ width: '100%' }}>
              <div>
                <Text style={{ color: '#3B82F6', fontWeight: 800, fontSize: '1.2rem' }}>📌 프로젝트 개요</Text>
                <Paragraph style={{ color: colors.text, fontSize: '1.15rem', marginTop: '12px', lineHeight: 1.8 }}>
                  기존 HTML/jQuery 기반 WebAdmin의 전역 CSS 남용 및 유지보수 한계를 극복하기 위해 진행된 프로젝트입니다.
                  신규 STT 관리자 페이지 구축을 계기로, 다수의 AI 서비스 Admin을 단일 저장소에서 관리하는 <strong>모노레포(Monorepo) 구조와 공통 디자인 시스템(@ui)을 통합 구축</strong>하여 전사적인 개발 생산성과 UI 일관성을 확보했습니다.
                </Paragraph>
              </div>
              
              <Flex gap={40} wrap="wrap">
                <div>
                  <Text style={{ color: '#3B82F6', fontWeight: 700, fontSize: '1.1rem' }}>📅 기간</Text>
                  <div style={{ color: colors.title, marginTop: '8px', fontSize: '1.2rem', fontWeight: 700 }}>
                    2025.02 ~ 2025.03 <span style={{ fontSize: '0.95rem', color: colors.subText, fontWeight: 500 }}>(이후 지속 개선)</span>
                  </div>
                </div>
                <div>
                  <Text style={{ color: '#3B82F6', fontWeight: 700, fontSize: '1.1rem' }}>👩‍💻 역할</Text>
                  <div style={{ color: colors.title, marginTop: '8px', fontSize: '1.2rem', fontWeight: 700 }}>
                    아키텍처 설계, UI 시스템 구축, 전환 전략 수립 및 개발
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
                  <Text style={{ color: colors.subText, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Frontend & UI System</Text>
                  <Flex wrap="wrap" gap={8}>
                    {['React', 'TypeScript', 'Storybook', 'Styled-components', 'Ant Design'].map(tech => (
                      <TechTag key={tech} $isDark={isDarkMode}>{tech}</TechTag>
                    ))}
                  </Flex>
                </Flex>

                <Flex vertical gap={10}>
                  <Text style={{ color: colors.subText, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Architecture & Build</Text>
                  <Flex wrap="wrap" gap={8}>
                    {['pnpm workspace', 'Mono-repo', 'Vite', 'Shared Packages'].map(tech => (
                      <TechTag key={tech} $isDark={isDarkMode}>{tech}</TechTag>
                    ))}
                  </Flex>
                </Flex>

                <Flex vertical gap={10}>
                  <Text style={{ color: colors.subText, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Infra & Config</Text>
                  <Flex wrap="wrap" gap={8}>
                    {['Docker', 'Nginx', 'ESLint/Prettier', 'TSConfig Alias'].map(tech => (
                      <TechTag key={tech} $isDark={isDarkMode}>{tech}</TechTag>
                    ))}
                  </Flex>
                </Flex>
              </Space>
            </GlassCard>
          </Col>
        </Row>
      </ContentSection>

      {/* 02. 핵심 아키텍처 및 디자인 시스템 */}
      <ContentSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Title level={3} style={{ color: colors.title, marginBottom: '32px' }}>🚀 핵심 아키텍처 고도화 전략</Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <HighlightCard $isDark={isDarkMode} $borderColor="#3B82F6">
              <Flex align="center" gap={12} style={{ marginBottom: '16px' }}>
                <PartitionOutlined style={{ color: '#3B82F6', fontSize: '24px' }} />
                <Title level={4} style={{ color: colors.title, margin: 0 }}>pnpm workspace 기반 모노레포 도입</Title>
              </Flex>
              <Paragraph style={{ color: colors.text, lineHeight: 1.7 }}>
                파편화된 기존 관리자 시스템들을 통합하기 위해 <strong>단일 저장소(pnpm workspace) 구조</strong>를 도입했습니다.
                서비스별 비즈니스 로직(apps)은 분리하면서도 공통 컴포넌트, 유틸, 타입 등을 패키지로 공유하여 코드 중복을 획기적으로 제거하고 개발 생산성을 극대화했습니다.
              </Paragraph>
            </HighlightCard>
          </Col>
          <Col xs={24} md={12}>
            <HighlightCard $isDark={isDarkMode} $borderColor="#10B981">
              <Flex align="center" gap={12} style={{ marginBottom: '16px' }}>
                <FormatPainterOutlined style={{ color: '#10B981', fontSize: '24px' }} />
                <Title level={4} style={{ color: colors.title, margin: 0 }}>사내 표준 UI 패키지(@ui) 정립</Title>
              </Flex>
              <Paragraph style={{ color: colors.text, lineHeight: 1.7 }}>
                화면 구조와 디자인 기준 부재로 인한 일관성 결여 문제를 해결하기 위해, 테이블, 폼, 모달 등 재사용 가능한 <strong>공통 UI 패키지(@ui)를 직접 설계</strong>했습니다.
                또한 Storybook을 활용하여 UI 컴포넌트를 문서화하고 표준 기준을 확립했습니다.
              </Paragraph>
            </HighlightCard>
          </Col>
        </Row>
      </ContentSection>
      
      {/* 03. 업무 상세 및 기술적 의사결정 */}
      <ContentSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Title level={3} style={{ color: colors.title, marginBottom: '32px' }}>📁 주요 업무 수행 상세</Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: '#3B82F6' }}><BuildOutlined /> 레거시 WebAdmin 리빌딩 전략 설계</Title>
              <ul style={{ color: colors.text, paddingLeft: '20px', lineHeight: 2 }}>
                <li><strong>전환 아키텍처 수립:</strong> STT 관리자와 기존 WebAdmin을 동일 구조에서 사용할 수 있도록 프론트 공통 아키텍처(라우팅, 번들링 등) 설계 </li>
                <li><strong>SPA 환경 이관:</strong> 수정이 위험했던 HTML+jQuery 환경을 TS+React 기반의 안정적인 구조로 단계적 마이그레이션 </li>
              </ul>
            </GlassCard>
          </Col>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: '#10B981' }}><FormatPainterOutlined /> 공통 UI 시스템 구축 및 모듈화</Title>
              <ul style={{ color: colors.text, paddingLeft: '20px', lineHeight: 2 }}>
                <li><strong>UI 일관성 확보:</strong> 공통 테마, 타이포, 간격 시스템을 정의하고 SVG 아이콘 및 에셋을 패키지에 통합 관리</li>
                <li><strong>레거시 문제 식별 및 모듈화:</strong> 기존의 테이블 구조, 레이아웃 문제 등을 식별하고 공통 UI 패키지로 추상화하여 모든 WebAdmin에 동일하게 적용</li>
              </ul>
            </GlassCard>
          </Col>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: '#F59E0B' }}><AppstoreAddOutlined /> 신규 서비스 개발 및 동시 통합</Title>
              <ul style={{ color: colors.text, paddingLeft: '20px', lineHeight: 2 }}>
                <li><strong>STT 앱 연동:</strong> STT 관리자 페이지를 모노레포의 첫 번째 앱(apps/stt)으로 개발하며 기반 아키텍처 검증 </li>
                <li><strong>공통 기능 재사용:</strong> 알람 UI, 차트, 테이블 등 서비스별 공통 기능을 모듈 형태로 분리해 타 Admin 리팩터링 속도 대폭 향상</li>
              </ul>
            </GlassCard>
          </Col>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: '#8B5CF6' }}><ToolOutlined /> 개발 환경 현대화 및 표준화</Title>
              <ul style={{ color: colors.text, paddingLeft: '20px', lineHeight: 2 }}>
                <li><strong>규칙 통일:</strong> ESLint, Prettier, TypeScript 공통 규칙 및 Git 브랜치/협업 규칙 정립</li>
                <li><strong>설정 및 인프라 최적화:</strong> tsconfig alias(@ui/*, @stt/*) 통일, 공통 타입/상수 패키지 구성 및 Docker 환경 정비</li>
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
              "기존 HTML/jQuery 기반 레거시를 React SPA로 완벽하게 전환할 수 있는 공통 아키텍처 완성",
              "pnpm 모노레포 구조 통합으로 중복 코드(보일러플레이트)를 제거하고 신규 Admin 개발 속도 획기적 향상",
              "Storybook 기반의 공통 UI 컴포넌트(@ui)를 배포하여 사내 시스템 전반의 UI/UX 표준화 및 일관성 확보",
              "장기적으로 모든 관리자 서비스를 React 기반으로 이전할 수 있는 확장성 높은 기술 플랫폼 기반 마련"
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