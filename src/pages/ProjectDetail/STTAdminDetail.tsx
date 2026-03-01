import React from 'react';
import { Typography, Flex, Row, Col, Space, Grid } from 'antd';
import { 
  CheckCircleFilled, 
  AudioOutlined,
  BarChartOutlined,
  BellOutlined,
  ThunderboltFilled,
  SettingOutlined
} from '@ant-design/icons';

// 전역 상태 및 공통 컴포넌트 불러오기
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
export default function STTAdminDetail() {
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
          자체 STT 엔진 통합 운영 관리 및 <br/>실시간 품질 모니터링 시스템
        </Title>
        
        <Row gutter={[40, 32]}>
          <Col xs={24} lg={14}>
            <Space direction="vertical" size={32} style={{ width: '100%' }}>
              <div>
                <Text style={{ color: '#3B82F6', fontWeight: 800, fontSize: '1.2rem' }}>📌 프로젝트 개요</Text>
                <Paragraph style={{ color: colors.text, fontSize: '1.15rem', marginTop: '12px', lineHeight: 1.8 }}>
                  자체 개발한 STT(Speech-to-Text) 엔진의 운영·모니터링·테스트·설정 관리를 통합 제공하는 전용 WebAdmin입니다.
                  웹 브라우저 환경에서 즉시 마이크와 파일을 제어하여 실시간으로 인식 품질을 검증할 수 있는 테스트 환경을 구축하고, SSE 기반의 무지연 알람 시스템을 도입하여 엔진 운영의 안정성을 극대화했습니다.
                </Paragraph>
              </div>
              
              <Flex gap={40} wrap="wrap">
                <div>
                  <Text style={{ color: '#3B82F6', fontWeight: 700, fontSize: '1.1rem' }}>📅 기간</Text>
                  <div style={{ color: colors.title, marginTop: '8px', fontSize: '1.2rem', fontWeight: 700 }}>
                    2025.05 ~ 2025.07
                  </div>
                </div>
                <div>
                  <Text style={{ color: '#3B82F6', fontWeight: 700, fontSize: '1.1rem' }}>👩‍💻 역할</Text>
                  <div style={{ color: colors.title, marginTop: '8px', fontSize: '1.2rem', fontWeight: 700 }}>
                    기획, 화면 설계, 프론트엔드 개발, 실시간 통신 연동
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
                  <Text style={{ color: colors.subText, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Frontend & Data Viz</Text>
                  <Flex wrap="wrap" gap={8}>
                    {['React', 'TypeScript', 'Zustand', 'Recharts', 'ReactECharts'].map(tech => (
                      <TechTag key={tech} $isDark={isDarkMode}>{tech}</TechTag>
                    ))}
                  </Flex>
                </Flex>

                <Flex vertical gap={10}>
                  <Text style={{ color: colors.subText, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Real-time Communication</Text>
                  <Flex wrap="wrap" gap={8}>
                    {['WebSocket', 'SSE (Server-Sent Events)', 'Web Audio API'].map(tech => (
                      <TechTag key={tech} $isDark={isDarkMode}>{tech}</TechTag>
                    ))}
                  </Flex>
                </Flex>

                <Flex vertical gap={10}>
                  <Text style={{ color: colors.subText, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Backend & MQ</Text>
                  <Flex wrap="wrap" gap={8}>
                    {['Spring Boot', 'REST API', 'RabbitMQ'].map(tech => (
                      <TechTag key={tech} $isDark={isDarkMode}>{tech}</TechTag>
                    ))}
                  </Flex>
                </Flex>
              </Space>
            </GlassCard>
          </Col>
        </Row>
      </ContentSection>

      {/* 02. 핵심 기술적 의사결정 (Real-time & Audio) */}
      <ContentSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Title level={3} style={{ color: colors.title, marginBottom: '32px' }}>🚀 실시간 데이터 파이프라인 구축</Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <HighlightCard $isDark={isDarkMode} $borderColor="#3B82F6">
              <Flex align="center" gap={12} style={{ marginBottom: '16px' }}>
                <ThunderboltFilled style={{ color: '#3B82F6', fontSize: '24px' }} />
                <Title level={4} style={{ color: colors.title, margin: 0 }}>Web Audio API & WebSocket 연동</Title>
              </Flex>
              <Paragraph style={{ color: colors.text, lineHeight: 1.7 }}>
                웹 브라우저에서 마이크 녹음 시 발생하는 WebM 오디오 데이터를 <strong>PCM chunk 데이터로 변환</strong>하는 로직을 프론트엔드에서 직접 구현했습니다.
                변환된 데이터를 WebSocket을 통해 백엔드로 스트리밍 전송하여 실시간 엔진 테스트가 가능하도록 설계했습니다.
              </Paragraph>
            </HighlightCard>
          </Col>
          <Col xs={24} md={12}>
            <HighlightCard $isDark={isDarkMode} $borderColor="#10B981">
              <Flex align="center" gap={12} style={{ marginBottom: '16px' }}>
                <BellOutlined style={{ color: '#10B981', fontSize: '24px' }} />
                <Title level={4} style={{ color: colors.title, margin: 0 }}>SSE(Server-Sent Events) 무지연 알람</Title>
              </Flex>
              <Paragraph style={{ color: colors.text, lineHeight: 1.7 }}>
                기존 폴링(Polling) 방식의 불필요한 서버 부하 문제를 해결하기 위해, 단방향 실시간 통신 기술인 <strong>SSE를 도입</strong>했습니다.
                엔진에서 발생하는 장애 및 알람 데이터를 수신 대기하고, 신규 알람 발생 시 UI에 즉각 Append 되는 모니터링 환경을 구축했습니다.
              </Paragraph>
            </HighlightCard>
          </Col>
        </Row>
      </ContentSection>
      
      {/* 03. 주요 비즈니스 기능 설계 및 구현 */}
      <ContentSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Title level={3} style={{ color: colors.title, marginBottom: '32px' }}>📁 주요 기능 설계 및 구현</Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: '#3B82F6' }}><AudioOutlined /> 다목적 음성 인식 테스트 환경</Title>
              <ul style={{ color: colors.text, paddingLeft: '20px', lineHeight: 2 }}>
                <li><strong>MIC/FILE 테스트:</strong> 브라우저 마이크 녹음 및 파일 업로드를 통한 즉각적인 인식 품질 검증 지원</li>
                <li><strong>REAL-TIME 테스트:</strong> 실시간 gRPC 인식 결과를 WebSocket으로 받아 Partial/Final 결과를 화면에 즉시 렌더링 </li>
                <li><strong>음성 EQ 시각화:</strong> 입력되는 오디오의 음성 레벨 파형을 시각화하여 직관적인 테스트 환경 제공 </li>
              </ul>
            </GlassCard>
          </Col>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: '#10B981' }}><BarChartOutlined /> 테넌트 맞춤형 지표 대시보드</Title>
              <ul style={{ color: colors.text, paddingLeft: '20px', lineHeight: 2 }}>
                <li><strong>다각도 성능 지표 시각화:</strong> 총 요청 수, 성공률(REST/gRPC), 처리한 오디오 길이 시각화</li>
                <li><strong>엔진 속도 모니터링:</strong> STT 엔진의 핵심 지표인 '음성 인식 변환 속도(RTF)'를 실시간 대시보드에 표기</li>
                <li><strong>추이 분석:</strong> 일/주/월 단위 요청량 변화 추이 및 동시 처리량 대비 채널 사용 비율 분석 차트 구현</li>
              </ul>
            </GlassCard>
          </Col>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: '#F59E0B' }}><BellOutlined /> 실시간 알람 모니터링 (AGGR)</Title>
              <ul style={{ color: colors.text, paddingLeft: '20px', lineHeight: 2 }}>
                <li><strong>SSE 기반 실시간 수신:</strong> 엔진에서 발생하는 경고 및 에러를 별도 새로고침 없이 실시간 팝업 및 리스트로 수신 </li>
                <li>알람 유형, 시간, 메시지 데이터를 가공하여 운영자가 직관적으로 장애의 경중을 파악할 수 있도록 UI 구현 </li>
              </ul>
            </GlassCard>
          </Col>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: '#8B5CF6' }}><SettingOutlined /> 무중단 엔진 설정 및 테넌트 관리</Title>
              <ul style={{ color: colors.text, paddingLeft: '20px', lineHeight: 2 }}>
                <li><strong>RabbitMQ 핫리로딩:</strong> 엔진 설정값 수정 시 메시지 큐(MQ)를 통해 대상 컨테이너에 전달하여 <strong>재시작 없이 설정 즉시 반영</strong> </li>
                <li><strong>운영 자동화:</strong> 테넌트별 구독 키 관리(중복 검증 로직 포함) 및 서비스 계약/인증 정보 관리 CRUD 구현 </li>
              </ul>
            </GlassCard>
          </Col>
        </Row>
      </ContentSection>

      {/* 04. 프로젝트 핵심 성과 */}
      <ContentSection initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <GlassCard $isDark={isDarkMode} style={{ background: isDarkMode ? 'rgba(59, 130, 246, 0.1)' : '#EFF6FF', border: '1px solid #3B82F6' }}>
          <Title level={3} style={{ color: '#3B82F6', textAlign: 'center', marginBottom: '40px' }}>✅ 전체 기여 및 시스템 성과</Title>
          <Row gutter={[24, 24]}>
            {[
              "실시간 음성 인식 테스트 환경(MIC/FILE/REAL-TIME)을 구축해 실서비스 장애 상황의 재현 및 엔진 품질 검증(QA) 속도를 획기적으로 개선",
              "STT 핵심 운영 지표(RTF, 변환 성공률, 채널 점유율 등)를 시각화하여 테넌트별 이상 징후 파악 및 운영 효율성 대폭 향상",
              "SSE(Server-Sent Events)를 도입하여 서버 부하를 줄이고, 실시간 장애 탐지(MTTR 단축) 파이프라인 확보",
              "RabbitMQ 기반의 무중단 설정 반영 시스템을 도입하여 엔진 운영의 유연성과 안정성(Zero-Downtime) 동시 확보"
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