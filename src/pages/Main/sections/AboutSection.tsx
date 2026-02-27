import {
  AppstoreAddOutlined,
  DatabaseOutlined,
  NodeIndexOutlined,
} from "@ant-design/icons";
import {Col, Row, Typography} from "antd";
import styled from "styled-components";
import SectionHeader from "../../../components/header/SectionHeader";

const {Text, Paragraph} = Typography;

// --- 🎨 Styled Components ---
const SectionContainer = styled.section`
  padding: 100px 10vw;
  width: 100%;
`;

const StyledCard = styled.div`
  background: ${({theme}) => theme.colors.cardBg || "rgba(30, 41, 59, 0.4)"};
  backdrop-filter: blur(15px);
  border: 1px solid
    ${({theme}) => theme.colors.border || "rgba(255, 255, 255, 0.08)"};
  border-radius: 20px;
  padding: 28px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({theme}) => theme.colors.primary};
    transform: translateY(-4px);
  }
`;

const TagBadge = styled.span`
  display: inline-block;
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 0.8rem;
  font-family: "Fira Code", monospace;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export default function AboutSection() {
  return (
    <SectionContainer id="about">
      <SectionHeader
        index="01"
        title="About & Philosophy"
        subtitle="디자인과 개발의 교차점에서 사용자 중심 시스템을 설계합니다."
      />

      <Row gutter={[64, 48]}>
        {/* ✨ 좌측 텍스트 영역: AICC 도메인 전문성과 문제 해결 능력 강조 */}
        <Col xs={24} lg={10}>
          <Paragraph
            style={{color: "#94A3B8", fontSize: "1.1rem", lineHeight: 1.8}}
          >
            패션·웹 디자인 백그라운드에서 시작해, 시스템 아키텍처와 성능
            최적화까지 고민하는 풀스택 개발자로 성장했습니다. <br />
            <br />
            기술 연구소에서 자체 STT 음성 엔진을 기반으로 하는{" "}
            <strong>AICC 콜봇 컨택센터 서비스</strong>를 운영하며,
            <br />
            콜봇의 전체적인 데이터 흐름과 컨테이너 간의 통신 아키텍처를 제어하고
            고도화했습니다.
            <br />
            콜봇을 모니터링하고 제어하는 운영 관리 페이지를 구축하였으며,
            <br />
            <strong>NLP(자연어 처리) 기반의 대화 모델</strong>과 시나리오를
            시스템에 연동하며 백엔드와 인프라 전반의 운영 역량을 깊이 있게
            다졌습니다.
            <br /> 단순히 화면을 그리는 것을 넘어, 복잡한 대화 모델과 JSON
            시나리오 구조를 직관적인 시각화 툴로 풀어내어 운영팀의{" "}
            <strong>휴먼 에러를 줄이고 구축 시간을 혁신적으로 단축</strong>
            시켰습니다.
          </Paragraph>

          <div
            style={{
              borderLeft: `4px solid #3B82F6`,
              paddingLeft: "20px",
              marginTop: "40px",
            }}
          >
            <Text
              style={{
                fontSize: "1.15rem",
                fontStyle: "italic",
                color: "#F8FAFC",
                fontWeight: 600,
                lineHeight: 1.6,
              }}
            >
              "반복되는 구축 업무의 병목을 찾아내고, <br />
              시각적 인터페이스와 모노레포 아키텍처로 <br />
              운영의 생산성을 설계합니다."
            </Text>
          </div>
        </Col>

        {/* ✨ 우측 카드 영역: 나현님의 3대 핵심 프로젝트 성과 */}
        <Col xs={24} lg={14}>
          <Row gutter={[24, 24]}>
            {/* 1. 웹 어드민 및 모니터링 (데이터 & 통계) */}
            <Col span={24}>
              <StyledCard>
                <Row wrap={false} gutter={20}>
                  <Col>
                    <DatabaseOutlined
                      style={{fontSize: "28px", color: "#3B82F6"}}
                    />
                  </Col>
                  <Col flex="auto">
                    <Text
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        display: "block",
                        marginBottom: "8px",
                        color: "#F8FAFC",
                      }}
                    >
                      AICC 운영 어드민 & 데이터 파이프라인
                    </Text>
                    <Paragraph
                      style={{
                        color: "#94A3B8",
                        marginBottom: "16px",
                        lineHeight: 1.6,
                      }}
                    >
                      콜봇 서비스 설정을 위한 웹 어드민을 구축하고,{" "}
                      <strong>
                        서비스 품질 향상을 위한 다각적인 통계 대시보드와 분석
                        페이지를 제공
                      </strong>
                      했습니다. 특히 사용자와 봇 간의 복잡한 대화 여정을
                      시각화한 Sankey 다이어그램은, 대화의 이탈 및 병목 구간을
                      직관적으로 파악하여{" "}
                      <strong>
                        시나리오를 개선하는 데 가장 유의미한 분석 도구
                      </strong>
                      로 활용되었습니다.
                    </Paragraph>
                    <div>
                      <TagBadge>Spring Boot</TagBadge>
                      <TagBadge>Redis</TagBadge>
                      <TagBadge>ECharts (Sankey)</TagBadge>
                    </div>
                  </Col>
                </Row>
              </StyledCard>
            </Col>

            {/* 2. 시나리오 빌더 (시각화 및 휴먼 에러 해결) */}
            <Col span={24}>
              <StyledCard>
                <Row wrap={false} gutter={20}>
                  <Col>
                    <NodeIndexOutlined
                      style={{fontSize: "28px", color: "#3B82F6"}}
                    />
                  </Col>
                  <Col flex="auto">
                    <Text
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        display: "block",
                        marginBottom: "8px",
                        color: "#F8FAFC",
                      }}
                    >
                      React Flow 기반 시나리오 빌더 시각화
                    </Text>
                    <Paragraph
                      style={{
                        color: "#94A3B8",
                        marginBottom: "16px",
                        lineHeight: 1.6,
                      }}
                    >
                      자연어 처리 사전 시스템과 연결된 대화 모델 JSON 구조를 웹
                      에디터 캔버스로 구현했습니다. 드래그 앤 드롭 기반의
                      시나리오 버전 관리 및 복사 기능을 통해, 운영팀의 휴먼
                      에러를 방지하고 콜봇 구축 속도를 획기적으로 높였습니다.
                    </Paragraph>
                    <div>
                      <TagBadge>React Flow</TagBadge>
                      <TagBadge>Zustand</TagBadge>
                      <TagBadge>Redis</TagBadge>
                      <TagBadge>NLP</TagBadge>
                    </div>
                  </Col>
                </Row>
              </StyledCard>
            </Col>

            {/* 3. 모노레포 아키텍처 (생산성 및 재사용성) */}
            <Col span={24}>
              <StyledCard>
                <Row wrap={false} gutter={20}>
                  <Col>
                    <AppstoreAddOutlined
                      style={{fontSize: "28px", color: "#3B82F6"}}
                    />
                  </Col>
                  <Col flex="auto">
                    <Text
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        display: "block",
                        marginBottom: "8px",
                        color: "#F8FAFC",
                      }}
                    >
                      프론트엔드 모노레포 아키텍처 도입
                    </Text>
                    <Paragraph
                      style={{
                        color: "#94A3B8",
                        marginBottom: "16px",
                        lineHeight: 1.6,
                      }}
                    >
                      다수의 운용 관리 페이지가 산발적으로 생성되는 문제를
                      해결하기 위해 모노레포(pnpm) 작업 환경을 구축했습니다.
                      공통 UI 및 비즈니스 로직을 패키지로 분리하여, 신규
                      프로젝트 생성 시간을 단축하고 코드 재사용성을
                      극대화했습니다.
                    </Paragraph>
                    <div>
                      <TagBadge>pnpm Workspaces</TagBadge>
                      <TagBadge>Vite</TagBadge>
                      <TagBadge>React + Ts</TagBadge>
                    </div>
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
