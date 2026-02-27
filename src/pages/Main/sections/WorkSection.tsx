import React from "react";
import { Typography, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SectionHeader from "../../../components/header/SectionHeader";
import { DeploymentUnitOutlined, ThunderboltOutlined, DesktopOutlined, RobotOutlined, AudioOutlined } from "@ant-design/icons";
import WorkProjectCard from "../../../components/card/WorkProjectCard";

const { Text, Title } = Typography;

const SectionContainer = styled.section`
  padding: 100px 10vw;
  background-color: ${({ theme }) => theme.colors.background};
`;

const TimelineWrapper = styled.div`
  margin-bottom: 80px;
  padding-left: 20px;
  border-left: 2px solid rgba(59, 130, 246, 0.2);
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 40px;
  padding-left: 24px;

  &::before {
    content: '';
    position: absolute;
    left: -29px;
    top: 6px;
    width: 14px;
    height: 14px;
    background: #0F172A;
    border: 2px solid #3B82F6;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
  }
  &:last-child { margin-bottom: 0; }
`;

export default function WorkSection() {
  const navigate = useNavigate();

const projectList = [
    {
      title: "LLM 기반 설문 리서치 플랫폼 및 프롬프트 시뮬레이터 (진행 중)",
      period: "2025.10 – Present", // ✨ 시작 날짜 확인해주세요!
      tags: ["React", "TypeScript", "LLM API", "Redis", "Prompt Engineering"],
      problem: "기존 룰베이스(사전 기반) 챗봇 구조로는 다양하고 복잡한 설문조사 응답을 처리하는 데 한계가 있었으며, 고객이 원하는 설문을 직접 구성하고 테스트할 환경이 부재.",
      action: "사용자 동적 설문 등록 페이지를 구축하고, 각 설문마다 요구되는 LLM 지침(프롬프트)을 Redis에 매핑하여 관리하는 아키텍처 설계. 또한, 등록된 지침을 LLM API와 연동해 실시간으로 질의응답을 검증하는 시뮬레이터 개발.",
      result: "[진행 중] 단순 시나리오 기반을 넘어 LLM을 활용한 동적 발화 분석 구조를 도입함으로써, 고객 맞춤형 리서치 서비스 확장 및 운영자의 자체적인 프롬프트 성능 튜닝 환경 확보 기대.",
      diagramIcon: <RobotOutlined style={{ fontSize: "40px", color: "#A855F7" }} />,
      diagramTitle: "LLM Dynamic Prompt & Simulator Flow",
      diagramDesc: "User Config ↔ Redis (Prompt Mapping) ↔ LLM API ↔ Simulator UI",
      onDetailClick: undefined, 
    },
    {
      title: "콜봇 운영 관리(WebAdmin) 통합 및 고도화",
      period: "2025.08 – Present",
      tags: ["React", "TypeScript", "Redis", "RabbitMQ", "ECharts"],
      problem: "기존 HTML+jQuery 기반 레거시의 무분별한 CSS 사용과 비표준 설계로 인해 렌더링 지연 및 유지보수 한계 발생.",
      action: "React 기반 SPA 및 모노레포 구조로 이관하고, Redis 기반 실시간 모니터링과 RabbitMQ 연동 무중단 설정 아키텍처 구축.",
      result: "로드 타임 단축 및 렌더링 성능 개선, 실시간 모니터링(Sankey 차트 등)을 통한 장애 대응 속도 향상 및 운영 자동화 실현.",
      diagramIcon: <DesktopOutlined style={{ fontSize: "40px", color: "#3B82F6" }} />,
      diagramTitle: "WebAdmin Modernization Architecture",
      diagramDesc: "Redis(실시간 모니터링) & RabbitMQ(설정 배포) 기반 데이터 파이프라인",
      onDetailClick: () => navigate("/project/web-admin"),
    },
    {
      title: "STT 음성 인식 운영 관리 시스템 통합 구축",
      period: "2025.05 – 2025.07",
      tags: ["React", "WebSocket", "SSE", "RabbitMQ"],
      problem: "자체 STT 엔진의 상태 모니터링, 품질 테스트, 설정 및 구독 관리가 파편화되어 있어 신속한 품질 검증 및 장애 대응 등 운영 관리에 한계 존재.",
      action: "테넌트별 운영 지표 대시보드를 구축하고, WebSocket/SSE를 활용한 실시간 음성 인식 테스트(MIC/FILE/REAL-TIME) 및 알람 수신 UI 개발. 또한, RabbitMQ를 연동해 무중단 설정 반영 아키텍처 구현.",
      result: "STT 엔진 운영에 필요한 전 기능을 단일 플랫폼으로 통합하여 운영 자동화 및 표준화 기반을 마련했으며, 실시간 테스트 및 알람을 통해 품질 검증 속도를 획기적으로 향상.",
      diagramIcon: <AudioOutlined style={{ fontSize: "40px", color: "#10B981" }} />,
      diagramTitle: "Integrated Real-time Pipeline",
      diagramDesc: "STT Engine ↔ RabbitMQ/WS/SSE ↔ Web Admin UI 통합 구조",
      onDetailClick: () => navigate("/project/stt-admin"),
    },
   {
      title: "AI 콜봇 시나리오 빌더 & NLP 사전 통합 관리 에디터",
      period: "2024.05 – 2024.09",
      tags: ["React Flow", "Spring Boot", "Redis", "NLP Integration", "Zustand"],
      problem: "복잡한 대화 모델(JSON) 관리에 따른 운영자의 로직 파악의 한계가 있었으며, NLP 사전(Intent)과 시나리오 간의 정합성 검증 및 발화 테스트를 통합적으로 수행할 환경이 부재했습니다.",
      action: "React Flow 기반 대화 플로우 시각화 빌더와 Redis 캐싱 기반 고성능 REST API를 풀스택으로 개발했습니다. 또한, NLP 사전(Intent, Synonym) 관리 페이지를 구축하고 NLU Core와 연동하여 실시간 발화 테스트 및 디버깅 기능을 통합했습니다.",
      result: "대용량 시나리오 조회 성능 및 운영 안정성(버전 관리/Rollback)을 대폭 개선했으며, 비개발자 운영자도 직관적으로 시나리오를 설계하고 NLP 의도 분석 결과를 즉시 검증할 수 있는 원스톱 환경을 완성했습니다.",
      diagramIcon: <DeploymentUnitOutlined style={{ fontSize: "40px", color: "#F59E0B" }} />,
      diagramTitle: "Architecture: Scenario & NLP Pipeline",
      diagramDesc: "React Flow State ↔ JSON 직렬화 및 NLU Core 발화 테스트 연동 흐름",
      onDetailClick: () => navigate("/project/scenario-builder"),
    },
    {
      title: "모노레포 기반 디자인 시스템 & 레거시 리빌딩",
      period: "2025.02 – 2025.03",
      tags: ["pnpm workspace", "Storybook", "Vite", "Styled-components"],
      problem: "다수 관리자 프로젝트에 걸친 중복 UI 산재, 전역 CSS 남용으로 일관성이 결여되고 신규 기능 개발 시 유지보수 위험도 증가.",
      action: "pnpm workspace 기반 프론트엔드 모노레포 아키텍처 설계, @ui 공통 패키지 분리 및 Storybook을 활용한 문서화 수행.",
      result: "중복 코드 약 70% 제거, 신규 개발 셋업 시간 단축 및 UI 일관성을 확보하여 장기적인 플랫폼 확장 기반 마련.",
      diagramIcon: <DeploymentUnitOutlined style={{ fontSize: "40px", color: "#A855F7" }} />,
      diagramTitle: "Monorepo Structure & @ui System",
      diagramDesc: "apps/ (admin, stt) & packages/ (ui, core) 모듈 간 의존성 관계",
      onDetailClick: undefined, 
    }
  ];

  return (
    <SectionContainer id="work">
      {/* ✨ 서브타이틀 나현님 강점 맞춤형으로 변경 */}
      <SectionHeader
        index="02"
        title="Work Experience"
        subtitle="복잡한 비즈니스 로직을 직관적인 UI와 견고한 아키텍처로 풀어낸 핵심 프로젝트입니다."
      />

      {/* 회사 이력 타임라인 */}
      <TimelineWrapper>
        <TimelineItem>
          <Flex align="baseline" gap={12} style={{ marginBottom: "8px" }}>
            <Title level={4} style={{ color: "#F8FAFC", margin: 0 }}>㈜ 브로드씨엔에스 기술연구소</Title>
            <Text style={{ color: "#3B82F6", fontWeight: 600 }}>AI 개발실팀 연구원 / 웹개발</Text>
          </Flex>
          <Text style={{ color: "#94A3B8", fontSize: "1rem" }}>2023.09 ~ 재직 중 (2년 6개월)</Text>
        </TimelineItem>

        <TimelineItem>
          <Flex align="baseline" gap={12} style={{ marginBottom: "8px" }}>
            <Title level={4} style={{ color: "#F8FAFC", margin: 0 }}>㈜ 레이어베이스</Title>
            <Text style={{ color: "#94A3B8", fontWeight: 600 }}>웹디자인팀 팀원 / 웹디자인</Text>
          </Flex>
          <Text style={{ color: "#94A3B8", fontSize: "1rem" }}>2020.09 ~ 2022.10 (2년 2개월)</Text>
        </TimelineItem>
      </TimelineWrapper>

      {/* 프로젝트 카드 매핑 */}
      {projectList.map((project, index) => (
        <WorkProjectCard
          key={index}
          title={project.title}
          period={project.period}
          tags={project.tags}
          problem={project.problem}
          action={project.action}
          result={project.result}
          diagramIcon={project.diagramIcon}
          diagramTitle={project.diagramTitle}
          diagramDesc={project.diagramDesc}
          onDetailClick={project.onDetailClick} // ✨ 버튼 클릭 이벤트 넘겨주기
        />
      ))}
    </SectionContainer>
  );
}