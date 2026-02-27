import {
  ApiOutlined,
  CloudServerOutlined,
  CodeOutlined,
  DatabaseOutlined,
  HighlightOutlined,
  LaptopOutlined,
  ReadOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import {Col, Divider, Row, Typography} from "antd";
import styled from "styled-components";
import TechCard from "../../../components/card/TechCard";
import SectionHeader from "../../../components/header/SectionHeader";

const {Text} = Typography;

const SectionContainer = styled.section`
  padding: 100px 10vw;
  background-color: ${({theme}) => theme.colors.background};
`;

const TimelineWrapper = styled.div`
  padding-left: 16px;
  border-left: 2px solid rgba(59, 130, 246, 0.2);
  margin-top: 16px;
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 24px; /* ✨ 자격증이 많아져서 간격을 28px -> 24px로 살짝 줄임 */
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    left: -21px;
    top: 6px;
    width: 10px;
    height: 10px;
    background: #0f172a;
    border: 2px solid #3b82f6;
    border-radius: 50%;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDate = styled(Text)`
  display: block;
  color: #3b82f6;
  font-size: 0.85rem;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
`;

export default function TechSection() {
  const techData = [
    {
      title: "Frontend",
      icon: <CodeOutlined style={{color: "#3B82F6", fontSize: "24px"}} />,
      mainSkills: ["React", "TypeScript", "React Flow", "Zustand"],
      subSkills: [
        "JavaScript (ES6+)",
        "HTML5 / CSS3",
        "Styled-components",
        "Ant Design",
      ],
    },
    {
      title: "Backend",
      icon: <DatabaseOutlined style={{color: "#10B981", fontSize: "24px"}} />,
      mainSkills: ["Java", "Spring Boot", "REST API Architecture"],
      subSkills: ["Spring Framework", "JPA / Hibernate", "MyBatis"],
    },
    {
      title: "Data & Middleware",
      icon: <ApiOutlined style={{color: "#F43F5E", fontSize: "24px"}} />,
      mainSkills: ["Redis", "RabbitMQ", "WebSocket / SSE"],
      subSkills: ["MariaDB", "Oracle", "Webhook 연동"],
    },
    {
      title: "DevOps",
      icon: (
        <CloudServerOutlined style={{color: "#A855F7", fontSize: "24px"}} />
      ),
      mainSkills: ["pnpm (Monorepo)", "Vite", "Docker", "Linux"],
      subSkills: ["Nginx", "GitLab CI/CD"],
    },
    {
      title: "Design",
      icon: <HighlightOutlined style={{color: "#EC4899", fontSize: "24px"}} />,
      mainSkills: ["Figma"],
      subSkills: ["Photoshop", "Illustrator"],
    },
    {
      title: "Collaboration",
      icon: <TeamOutlined style={{color: "#F59E0B", fontSize: "24px"}} />,
      mainSkills: ["Git / GitLab"],
      subSkills: ["Storybook", "Jira / Redmine", "SVN", "Confluence"],
    },
  ];

  // ... 렌더링 부분 ...
  <Row gutter={[24, 24]}>
    {techData.map((data, index) => (
      <Col xs={24} md={12} lg={8} key={index}>
        <TechCard
          icon={data.icon}
          title={data.title}
          mainSkills={data.mainSkills}
          subSkills={data.subSkills}
        />
      </Col>
    ))}
  </Row>;

  return (
    <SectionContainer id="tech">
      <SectionHeader
        index="03"
        title="Tech Stack & Info"
        subtitle="견고한 아키텍처를 설계하고 운영 효율을 높이기 위해 실무에서 적극적으로 활용하는 기술들입니다."
      />

      <Row gutter={[24, 24]}>
        {techData.map((data, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <TechCard
              icon={data.icon}
              title={data.title}
              mainSkills={data.mainSkills}
              subSkills={data.subSkills}
            />
          </Col>
        ))}
      </Row>

      <Divider
        style={{
          borderColor: "rgba(59, 130, 246, 0.2)",
          margin: "80px 0 60px 0",
        }}
      >
        <Text
          style={{color: "#64748B", fontSize: "1rem", letterSpacing: "2px"}}
        >
          EDUCATION & CERTIFICATIONS
        </Text>
      </Divider>

      <Row gutter={[24, 24]}>
        {/* 1. Education (학력) */}
        <Col xs={24} lg={8}>
          <TechCard
            icon={<ReadOutlined style={{color: "#3B82F6", fontSize: "24px"}} />}
            title="Education"
          >
            <TimelineWrapper>
              <TimelineItem>
                <TimelineDate>2024.03 – 2026.02</TimelineDate>
                <Text
                  style={{
                    display: "block",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#F8FAFC",
                  }}
                >
                  한국방송통신대학교 (서울)
                </Text>
                <Text style={{color: "#94A3B8", fontSize: "0.9rem"}}>
                  컴퓨터과학과 (편입) · 학사 졸업 (3.9)
                </Text>
              </TimelineItem>

              <TimelineItem>
                <TimelineDate>2018.03 – 2020.02</TimelineDate>
                <Text
                  style={{
                    display: "block",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#F8FAFC",
                  }}
                >
                  숭의여자대학교 (서울)
                </Text>
                <Text style={{color: "#94A3B8", fontSize: "0.9rem"}}>
                  패션디자인과 · 전문학사 졸업 (3.95)
                </Text>
              </TimelineItem>
            </TimelineWrapper>
          </TechCard>
        </Col>

        {/* 2. Training (훈련 과정) */}
        <Col xs={24} lg={8}>
          <TechCard
            icon={
              <LaptopOutlined style={{color: "#A855F7", fontSize: "24px"}} />
            }
            title="Training"
          >
            <TimelineWrapper>
              <TimelineItem>
                <TimelineDate>2024.06 – 2024.07</TimelineDate>
                <Text
                  style={{
                    display: "block",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#F8FAFC",
                    lineHeight: 1.4,
                  }}
                >
                  AWS 클라우드 핵심 서비스 <br />
                  (ECR · EKS 실습)
                </Text>
                <Text style={{color: "#94A3B8", fontSize: "0.9rem"}}>
                  솔데스크
                </Text>
              </TimelineItem>

              <TimelineItem>
                <TimelineDate>2023.02 – 2023.07 </TimelineDate>
                <Text
                  style={{
                    display: "block",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#F8FAFC",
                    lineHeight: 1.4,
                  }}
                >
                  스마트웹 & 콘텐츠개발
                  <br />
                  (자바 기반 반응형 UI/UX 양성과정)
                </Text>
                <Text style={{color: "#94A3B8", fontSize: "0.9rem"}}>
                  KH 정보교육원
                </Text>
              </TimelineItem>
            </TimelineWrapper>
          </TechCard>
        </Col>

        {/* 3. Certifications (자격증) */}
        <Col xs={24} lg={8}>
          <TechCard
            icon={
              <SafetyCertificateOutlined
                style={{color: "#F59E0B", fontSize: "24px"}}
              />
            }
            title="Certifications"
          >
            <TimelineWrapper>
              <TimelineItem style={{marginBottom: "16px"}}>
                <TimelineDate>2024.10</TimelineDate>
                <Text
                  style={{display: "block", fontWeight: 700, color: "#F8FAFC"}}
                >
                  리눅스마스터 2급
                </Text>
                <Text style={{color: "#94A3B8", fontSize: "0.85rem"}}>
                  한국정보통신진흥협회
                </Text>
              </TimelineItem>

              <TimelineItem style={{marginBottom: "16px"}}>
                <TimelineDate>2024.06</TimelineDate>
                <Text
                  style={{display: "block", fontWeight: 700, color: "#F8FAFC"}}
                >
                  정보처리기사
                </Text>
                <Text style={{color: "#94A3B8", fontSize: "0.85rem"}}>
                  한국산업인력공단
                </Text>
              </TimelineItem>

              <TimelineItem style={{marginBottom: "16px"}}>
                <TimelineDate>2023.10</TimelineDate>
                <Text
                  style={{display: "block", fontWeight: 700, color: "#F8FAFC"}}
                >
                  SQL 개발자 (SQLD)
                </Text>
                <Text style={{color: "#94A3B8", fontSize: "0.85rem"}}>
                  한국데이터베이스진흥센터
                </Text>
              </TimelineItem>

              {/* ✨ 컴퓨터그래픽스운용기능사 추가 */}
              <TimelineItem style={{marginBottom: "16px"}}>
                <TimelineDate>2022.09</TimelineDate>
                <Text
                  style={{display: "block", fontWeight: 700, color: "#F8FAFC"}}
                >
                  컴퓨터그래픽스운용기능사
                </Text>
                <Text style={{color: "#94A3B8", fontSize: "0.85rem"}}>
                  한국산업인력공단
                </Text>
              </TimelineItem>

              <TimelineItem style={{marginBottom: "16px"}}>
                <TimelineDate>2022.09</TimelineDate>
                <Text
                  style={{display: "block", fontWeight: 700, color: "#F8FAFC"}}
                >
                  웹디자인 기능사
                </Text>
                <Text style={{color: "#94A3B8", fontSize: "0.85rem"}}>
                  한국산업인력공단
                </Text>
              </TimelineItem>

              {/* ✨ MOS 세부 항목 추가 */}
              <TimelineItem style={{marginBottom: "0"}}>
                <TimelineDate>2022.05</TimelineDate>
                <Text
                  style={{display: "block", fontWeight: 700, color: "#F8FAFC"}}
                >
                  MOS 2016 Master
                </Text>
                <Text
                  style={{
                    color: "#94A3B8",
                    fontSize: "0.85rem",
                    lineHeight: 1.4,
                  }}
                >
                  Word, Excel, PowerPoint, Access <br />
                  Microsoft
                </Text>
              </TimelineItem>
            </TimelineWrapper>
          </TechCard>
        </Col>
      </Row>
    </SectionContainer>
  );
}
