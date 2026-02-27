import {
  CodeOutlined,
  DatabaseOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import {Col, Flex, Row, Typography} from "antd";
import {motion} from "framer-motion";
import styled from "styled-components";
import RoleCard from "../../../components/card/RoleCard";

const {Title, Text, Paragraph} = Typography;

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 10vw;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(59, 130, 246, 0.08) 0%,
    ${({theme}) => theme.colors.background} 100%
  );
`;

export default function HeroSection() {
  const roleData = [
{
      icon: <SolutionOutlined />,
      title: "기획 및 UI/UX 설계",
      description: "사용자 요구사항을 분석하여 직관적인 UI/UX를 설계하고, 시스템의 전체적인 데이터 흐름과 아키텍처를 기획합니다.",
      techIcons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        // ✨ plain ➔ original 로 변경! 브랜드 컬러가 들어가서 까만 배경에서도 완벽하게 보입니다.
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg",
      ],
    },
    {
      icon: <CodeOutlined />,
      title: "풀스택 웹 개발", // ✨ 한글로 직관적으로 변경
      description: "Java/Spring 기반의 안정적인 백엔드와 React 중심의 고도화된 프론트엔드를 연결하여 풀스택 솔루션을 구축합니다.",
      // ✨ 개발: Java, Spring, React, TypeScript 추가
      techIcons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      ],
    },
    {
      icon: <DatabaseOutlined />,
      title: "데이터 및 인프라 설계", // ✨ 한글로 직관적으로 변경
      description: (
        <>
          효율적인 RDB 모델링과 Redis 캐싱을 통해 데이터 무결성을 확보하고, <br />
          Docker 기반 마이크로 서비스 간 최적화된 통신 아키텍처를 구축합니다.
        </>
      ),
      // ✨ 데이터/인프라: MySQL, Docker, Redis, RabbitMQ 추가
      techIcons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      ],
    },
  ];

  return (
    <HeroContainer>
      <Flex vertical align="center" style={{ textAlign: "center", margin: "80px 0" }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Text style={{ color: "#3B82F6", fontWeight: 700, letterSpacing: "4px", fontSize: "0.9rem" }}>
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
            color: "inherit", 
            letterSpacing: "-2px",
          }}
        >
          Architecture for <br />
          <span style={{ fontStyle: "italic", color: "#94A3B8" }}>
            Scalable Operations.
          </span>
        </Title>

        <Paragraph style={{ color: "#94A3B8", fontSize: "1.1rem", marginTop: "20px", maxWidth: "800px" }}>
          단순한 구현을 넘어, 복잡한 비즈니스 로직을 시각화하고 안정적인 시스템 아키텍처로 해결합니다.
          <br />
          데이터의 흐름을 설계하고 운영의 효율성을 극대화하는 풀스택 3년차 자바 웹 개발자 이나현입니다.
        </Paragraph>
      </Flex>

      <Row gutter={[24, 24]} style={{ width: "100%", maxWidth: "1300px" }}>
        {roleData.map((role, index) => (
          <Col xs={24} md={8} key={index}>
            <RoleCard
              icon={role.icon}
              title={role.title}
              description={role.description}
              techIcons={role.techIcons} 
            />
          </Col>
        ))}
      </Row>
    </HeroContainer>
  );
}