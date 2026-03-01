import {
  CheckCircleFilled, DatabaseOutlined, DeploymentUnitOutlined,
  HistoryOutlined, ThunderboltFilled
} from "@ant-design/icons";
import { Col, Flex, Grid, Row, Space, Typography } from "antd";

import ProjectLayout from "../../components/layout/ProjectLayout";
import { useThemeStore } from "../../store/themeStore";
import {
  ContentSection,
  GlassCard,
  HighlightCard,
  TechTag
} from "../../styles/components/ProjectStyles";

const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export default function ScenarioBuilderDetail() {
  const screens = useBreakpoint();
  const { isDarkMode } = useThemeStore();

  // ✨ 테마별 텍스트 색상 변수화
  const colors = {
    title: isDarkMode ? "#F8FAFC" : "#0F172A",
    text: isDarkMode ? "#CBD5E1" : "#475569",
    subText: isDarkMode ? "#94A3B8" : "#64748B",
    cardBg: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#F8FAFC",
  };

  return (
    // ✨ 전체 배경, 스크롤, 뒤로가기가 포함된 공통 레이아웃으로 감싸기
    <ProjectLayout>
      {/* 01. 히어로 섹션 */}
      <ContentSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Title
          level={1}
          style={{
            color: colors.title,
            fontSize: screens.md ? "3.2rem" : "2rem",
            fontWeight: 900,
            marginBottom: "24px",
          }}
        >
          챗봇 시나리오 빌더 & <br />
          NLU 사전 관리 시스템
        </Title>

        <Row gutter={[40, 32]}>
          <Col xs={24} lg={14}>
            <Space direction="vertical" size={32} style={{ width: "100%" }}>
              <div>
                <Text
                  style={{
                    color: "#3B82F6",
                    fontWeight: 800,
                    fontSize: "1.2rem",
                  }}
                >
                  📌 프로젝트 개요
                </Text>
                <Paragraph
                  style={{
                    color: colors.text,
                    fontSize: "1.15rem",
                    marginTop: "12px",
                    lineHeight: 1.8,
                  }}
                >
                  콜봇 서비스 운영자가 대화 시나리오(Flow)와 NLU 사전(Intent)을
                  직접 관리할 수 있는 웹 기반 빌더입니다. 복잡한 대화 모델
                  구조(JSON)를 시각화하여 설계하고 발화 테스트 기능을
                  제공함으로써 <strong>콜봇 운영 효율을 극대화</strong>하는 것이
                  핵심 목표였습니다.
                </Paragraph>
              </div>

              {/* ✨ 기간과 역할 폰트 사이즈 확대 및 강조 */}
              <Flex gap={40} wrap="wrap">
                <div>
                  <Text
                    style={{
                      color: "#3B82F6",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                    }}
                  >
                    📅 기간
                  </Text>
                  <div
                    style={{
                      color: colors.title,
                      marginTop: "8px",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                    }}
                  >
                    2024.05 ~ 2024.09{" "}
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: colors.subText,
                        fontWeight: 500,
                      }}
                    >
                      (25.11 고도화)
                    </span>
                  </div>
                </div>
                <div>
                  <Text
                    style={{
                      color: "#3B82F6",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                    }}
                  >
                    👩‍💻 역할
                  </Text>
                  <div
                    style={{
                      color: colors.title,
                      marginTop: "8px",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                    }}
                  >
                    프로젝트 기획, 설계, 디자인, 개발 전반
                  </div>
                </div>
              </Flex>
            </Space>
          </Col>

          <Col xs={24} lg={10}>
            <GlassCard $isDark={isDarkMode} style={{ padding: "32px" }}>
              <Text
                style={{
                  color: "#3B82F6",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  display: "block",
                  marginBottom: "24px",
                }}
              >
                💻 사용 기술
              </Text>

              {/* ✨ 프론트/백/DB/인프라 카테고리 세분화 */}
              <Space direction="vertical" size={20} style={{ width: "100%" }}>
                <Flex vertical gap={10}>
                  <Text
                    style={{
                      color: colors.subText,
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Frontend
                  </Text>
                  <Flex wrap="wrap" gap={8}>
                    {["React(JS)", "React Flow", "Zustand", "Ant Design"].map(
                      (tech) => (
                        <TechTag key={tech} $isDark={isDarkMode}>
                          {tech}
                        </TechTag>
                      )
                    )}
                  </Flex>
                </Flex>

                <Flex vertical gap={10}>
                  <Text
                    style={{
                      color: colors.subText,
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Backend
                  </Text>
                  <Flex wrap="wrap" gap={8}>
                    {["Spring Boot", "REST API"].map((tech) => (
                      <TechTag key={tech} $isDark={isDarkMode}>
                        {tech}
                      </TechTag>
                    ))}
                  </Flex>
                </Flex>

                <Flex vertical gap={10}>
                  <Text
                    style={{
                      color: colors.subText,
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    DB / Cache
                  </Text>
                  <Flex wrap="wrap" gap={8}>
                    {["MariaDB", "Redis"].map((tech) => (
                      <TechTag key={tech} $isDark={isDarkMode}>
                        {tech}
                      </TechTag>
                    ))}
                  </Flex>
                </Flex>

                <Flex vertical gap={10}>
                  <Text
                    style={{
                      color: colors.subText,
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Infra
                  </Text>
                  <Flex wrap="wrap" gap={8}>
                    {["Docker", "Linux", "Git"].map((tech) => (
                      <TechTag key={tech} $isDark={isDarkMode}>
                        {tech}
                      </TechTag>
                    ))}
                  </Flex>
                </Flex>
              </Space>
            </GlassCard>
          </Col>
        </Row>
      </ContentSection>

      {/* 02. 문제 해결 및 아키텍처 고도화 */}
      <ContentSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Title level={3} style={{ color: colors.title, marginBottom: "32px" }}>
          🚀 시나리오 빌더 고도화 및 성능 개선
        </Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <HighlightCard $isDark={isDarkMode} $borderColor="#3B82F6">
              <Flex align="center" gap={12} style={{ marginBottom: "16px" }}>
                <ThunderboltFilled
                  style={{ color: "#3B82F6", fontSize: "24px" }}
                />
                <Title level={4} style={{ color: colors.title, margin: 0 }}>
                  데이터 구조 성능 개선 (Redis)
                </Title>
              </Flex>
              <Paragraph style={{ color: colors.text, lineHeight: 1.7 }}>
                대화 모델 규모 증가로 인해 발생한{" "}
                <strong>MariaDB TEXT 컬럼 기반 조회 병목 현상</strong>을
                해결하기 위해, 대용량 JSON 모델을 Redis Hash/List 기반으로 분리
                저장하는 하이브리드 캐싱 구조를 설계했습니다.
              </Paragraph>
              <div
                style={{
                  background: isDarkMode
                    ? "rgba(16, 185, 129, 0.15)"
                    : "#ECFDF5",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #10B981",
                  textAlign: "center",
                }}
              >
                <Text style={{ color: "#10B981", fontWeight: 800 }}>
                  조회 속도: 수 초 → 수백 ms 이하로 대폭 개선
                </Text>
              </div>
            </HighlightCard>
          </Col>
          <Col xs={24} md={12}>
            <HighlightCard $isDark={isDarkMode} $borderColor="#10B981">
              <Flex align="center" gap={12} style={{ marginBottom: "16px" }}>
                <HistoryOutlined
                  style={{ color: "#10B981", fontSize: "24px" }}
                />
                <Title level={4} style={{ color: colors.title, margin: 0 }}>
                  버전 관리 (Versioning) 시스템 구축
                </Title>
              </Flex>
              <Paragraph style={{ color: colors.text, lineHeight: 1.7 }}>
                운영자의 실수 방지 및 데이터 손실 대비를 위해 Redis 기반 버전
                저장 Key Schema를 설계했습니다. 특정 버전으로 되돌릴 수 있는{" "}
                <strong>Rollback 기능</strong>과 UI 내 버전 비교 기능을 추가하여
                운영 안정성을 획기적으로 높였습니다.
              </Paragraph>
            </HighlightCard>
          </Col>
        </Row>
      </ContentSection>

      {/* 03. 주요 기능 개발 상세 */}
      <ContentSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Title level={3} style={{ color: colors.title, marginBottom: "32px" }}>
          📁 주요 기능 설계 및 구현
        </Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: "#3B82F6" }}>
                <DeploymentUnitOutlined /> 시각화 빌더 및 백엔드 API 설계
              </Title>
              <ul
                style={{
                  color: colors.text,
                  paddingLeft: "20px",
                  lineHeight: 2,
                }}
              >
                <li>
                  <strong>React Flow 도입:</strong> 노드/엣지 기반 구조로 조건
                  분기, 파라미터 설정을 시각적으로 매핑
                </li>
                <li>
                  <strong>JSON 자동 변환:</strong> 노드 이동/연결/삭제 시 UI
                  수정 사항을 JSON으로 역직렬화하여 자동 저장
                </li>
                <li>
                  <strong>에러 방지 도구:</strong> 사전 연동되지 않은 데이터
                  유실을 체크하는 디버깅 기능 지원
                </li>
                <li>
                  시나리오 템플릿 복사 기능을 통해 대화 모델 생성 시간 단축
                </li>
              </ul>
            </GlassCard>
          </Col>
          <Col xs={24} md={12}>
            <GlassCard $isDark={isDarkMode}>
              <Title level={4} style={{ color: "#10B981" }}>
                <DatabaseOutlined /> NLU 사전 관리 및 실시간 테스트
              </Title>
              <ul
                style={{
                  color: colors.text,
                  paddingLeft: "20px",
                  lineHeight: 2,
                }}
              >
                <li>
                  <strong>사전 CRUD 및 정합성 검사:</strong> 중복 발화 및 의도
                  미매칭, 시나리오 간 참조 데이터 검증 로직 구현
                </li>
                <li>
                  <strong>NLU Core 엔진 연동:</strong> 웹어드민 내에서 사전
                  데이터를 통합 관리하고 MariaDB에 실시간 반영
                </li>
                <li>
                  <strong>발화 테스트 API:</strong> 입력 문장을 엔진에 전달하여
                  의도 판단 결과를 UI에 즉각 시각화
                </li>
              </ul>
            </GlassCard>
          </Col>
        </Row>
      </ContentSection>

      {/* 04. 프로젝트 핵심 성과 */}
      <ContentSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <GlassCard
          $isDark={isDarkMode}
          style={{
            background: isDarkMode ? "rgba(59, 130, 246, 0.1)" : "#EFF6FF",
            border: "1px solid #3B82F6",
          }}
        >
          <Title
            level={3}
            style={{
              color: "#3B82F6",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            ✅ 전체 기여 및 핵심 성과
          </Title>
          <Row gutter={[24, 24]}>
            {[
              "대화 시나리오부터 발화 테스트까지 운영 전 과정을 단일 UI로 통합 구축",
              "React Flow를 직접 설계하여 대화 모델링 도구를 제품화 수준으로 고도화",
              "DB·캐시 하이브리드 아키텍처 주도로 성능 최적화 및 확장성 확보",
              "레거시 JSON 모델을 UI 툴로 전환하여 비개발자도 모델 설계 가능 환경 마련",
            ].map((text, i) => (
              <Col xs={24} md={12} key={i}>
                <Flex
                  align="center"
                  gap={12}
                  style={{
                    background: colors.cardBg,
                    padding: "20px",
                    borderRadius: "16px",
                    border: `1px solid ${
                      isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
                    }`,
                  }}
                >
                  <CheckCircleFilled
                    style={{ color: "#10B981", fontSize: "1.2rem" }}
                  />
                  <Text
                    style={{
                      color: colors.title,
                      fontSize: "1.05rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {text}
                  </Text>
                </Flex>
              </Col>
            ))}
          </Row>
        </GlassCard>
      </ContentSection>
    </ProjectLayout>
  );
}
