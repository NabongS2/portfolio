import {
  CodeOutlined,
  DatabaseOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import {Col, Flex, Row, Typography} from "antd";
import {motion} from "framer-motion";
import styled from "styled-components";

const {Title, Text, Paragraph} = Typography;

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 10vw;
  /* 깊이감 있는 미드나잇 블루 배경 */
  background: radial-gradient(
    circle at 50% 50%,
    rgba(59, 130, 246, 0.05) 0%,
    #0f172a 100%
  );
`;

const RoleCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #3b82f6;
    background: rgba(30, 41, 59, 0.6);
  }

  .role-icon {
    font-size: 32px;
    color: #3b82f6;
    margin-bottom: 8px;
  }
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <Flex
        vertical
        align="center"
        style={{textAlign: "center", margin: "80px 0"}}
      >
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
        >
          <Text
            style={{
              color: "#3B82F6",
              fontWeight: 700,
              letterSpacing: "4px",
              fontSize: "0.9rem",
            }}
          >
            DESIGN-DRIVEN FULL STACK ENGINEER
          </Text>
        </motion.div>

        <Title
          level={1}
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1,
            margin: "24px 0",
            color: "#F8FAFC",
            letterSpacing: "-2px",
          }}
        >
          Architecture for <br />
          <span style={{fontStyle: "italic", color: "#94A3B8"}}>
            Scalable Operations.
          </span>
        </Title>

        <Paragraph
          style={{
            color: "#94A3B8",
            fontSize: "1.1rem",
            marginTop: "20px",
            maxWidth: "800px",
          }}
        >
          단순한 구현을 넘어, 복잡한 비즈니스 로직을 시각화하고 안정적인 시스템
          아키텍처로 해결합니다.
          <br />
          데이터의 흐름을 설계하고 운영의 효율성을 극대화하는 풀스택 개발자
          이나현입니다.
        </Paragraph>
      </Flex>

      <Row gutter={[24, 24]} style={{width: "100%", maxWidth: "1300px"}}>
        <Col xs={24} md={8}>
          <RoleCard whileHover={{y: -10}}>
            <SolutionOutlined className="role-icon" />
            <Text
              style={{color: "#F8FAFC", fontWeight: 800, fontSize: "1.3rem"}}
            >
              Planning & Design
            </Text>
            <Text style={{color: "#64748B", lineHeight: 1.6}}>
              사용자 요구사항을 분석하여 직관적인 UI/UX를 설계하고, 시스템의
              전체적인 데이터 흐름과 아키텍처를 기획합니다.
            </Text>
          </RoleCard>
        </Col>

        <Col xs={24} md={8}>
          <RoleCard whileHover={{y: -10}}>
            <CodeOutlined className="role-icon" />
            <Text
              style={{color: "#F8FAFC", fontWeight: 800, fontSize: "1.3rem"}}
            >
              Robust Development
            </Text>
            <Text style={{color: "#64748B", lineHeight: 1.6}}>
              Java/Spring 기반의 안정적인 백엔드와 React 중심의 고도화된
              프론트엔드를 연결하여 풀스택 솔루션을 구축합니다.
            </Text>
          </RoleCard>
        </Col>

        <Col xs={24} md={8}>
          <RoleCard whileHover={{y: -10}}>
            <DatabaseOutlined className="role-icon" />
            <Text
              style={{color: "#F8FAFC", fontWeight: 800, fontSize: "1.3rem"}}
            >
              Data & Infra Engineering
            </Text>
            <Text style={{color: "#64748B", lineHeight: 1.6}}>
              효율적인 RDB 모델링과 Redis 캐싱을 통해 데이터 무결성을 확보하고,{" "}
              <br />
              Docker 컨테이너 기반의 독립된 마이크로 서비스 간 최적화된 통신
              아키텍처를 구축합니다.
            </Text>
          </RoleCard>
        </Col>
      </Row>
    </HeroContainer>
  );
}
