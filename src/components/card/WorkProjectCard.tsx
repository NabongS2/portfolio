import {
  ArrowRightOutlined,
  CalendarOutlined, // ✨ 날짜 아이콘 추가
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import {Col, Flex, Row, Typography} from "antd";
import React from "react";
import styled from "styled-components";

const {Title, Text, Paragraph} = Typography;

const CardWrapper = styled.div`
  background-color: ${({theme}) =>
    theme.colors.cardBg || "rgba(30, 41, 59, 0.4)"};
  backdrop-filter: blur(15px);
  border: 1px solid
    ${({theme}) => theme.colors.border || "rgba(255, 255, 255, 0.08)"};
  border-radius: 20px;
  padding: 48px;
  margin-bottom: 40px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 24px;
    margin-bottom: 24px;
  }
`;

const ProjectTitle = styled(Title)`
  &.ant-typography {
    color: ${({theme}) => theme.colors.text};
    margin-bottom: 12px;
    font-weight: 800;
  }

  /* ✨ 모바일 제목 크기 축소 */
  @media (max-width: 768px) {
    font-size: 1.4rem !important;
  }
`;

// ✨ 기간 영역 스타일링 (아이콘 + 모노스페이스 폰트)
const PeriodText = styled(Text)`
  color: #94a3b8;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 16px;
  }
`;

const TechTag = styled.div`
  background: rgba(15, 23, 42, 0.5); /* 딥한 다크 네이비 배경 */
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 100px;
  padding: 6px 16px; /* 여백을 충분히 주어 답답함 해소 */
  font-size: 0.85rem;
  font-family: "Fira Code", monospace;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    background-color: #3b82f6;
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    padding: 4px 12px;
    font-size: 0.75rem;
  }
`;

const ContentBox = styled.div`
  margin-top: 36px;

  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;

const StepItem = styled.div<{$color: string}>`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

  .icon {
    font-size: 20px;
    color: ${(props) => props.$color};
    margin-top: 4px;
  }

  .desc {
    p {
      margin: 0;
      color: ${({theme}) => theme.colors.secondaryText};
      line-height: 1.7;
      font-size: 0.95rem;
    }
    strong {
      color: ${(props) => props.$color};
      font-weight: 700;
      letter-spacing: 0.5px;
      display: inline-block;
      margin-bottom: 4px;
    }
  }

  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 20px;
    .icon {
      font-size: 18px;
    }
    .desc p {
      font-size: 0.9rem;
    }
  }
`;

const DiagramPlaceholder = styled.div`
  height: 100%;
  min-height: 320px;
  background: rgba(15, 23, 42, 0.3);
  border: 1px dashed
    ${({theme}) => theme.colors.border || "rgba(255, 255, 255, 0.1)"};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px;
  color: ${({theme}) => theme.colors.secondaryText};
`;

interface ProjectCardProps {
  title: string;
  period: string;
  tags: string[];
  problem: React.ReactNode;
  action: React.ReactNode;
  result: React.ReactNode;
  diagramIcon: React.ReactNode;
  diagramTitle: string;
  diagramDesc: string;
  onDetailClick?: () => void;
}

const DetailButton = styled.button`
  background: transparent;
  border: 1px solid rgba(59, 130, 246, 0.4);
  color: #60a5fa;
  padding: 12px 28px;
  border-radius: 100px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;

  .arrow-icon {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(59, 130, 246, 0.1);
    border-color: #3b82f6;
    color: #f8fafc;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);

    .arrow-icon {
      transform: translateX(6px);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

export default function WorkProjectCard({
  title,
  period,
  tags,
  problem,
  action,
  result,
  diagramIcon,
  diagramTitle,
  diagramDesc,
  onDetailClick,
}: ProjectCardProps) {
  return (
    <CardWrapper>
      <Row gutter={[48, 32]}>
        <Col xs={24} lg={12}>
          <ProjectTitle level={3}>{title}</ProjectTitle>

          {/* ✨ 달력 아이콘이 추가된 기간 영역 */}
          <PeriodText>
            <CalendarOutlined style={{color: "#3B82F6"}} />
            {period}
          </PeriodText>

          {/* ✨ Flex wrap과 gap을 사용하여 태그 간 여백(간격) 확보 */}
          <Flex wrap="wrap" gap={10}>
            {tags.map((tag, idx) => (
              <TechTag key={idx}>{tag}</TechTag>
            ))}
          </Flex>

          <ContentBox>
            <StepItem $color="#EF4444">
              <ExclamationCircleOutlined className="icon" />
              <div className="desc">
                <p>
                  <strong>Problem</strong>
                  <br />
                  {problem}
                </p>
              </div>
            </StepItem>
            <StepItem $color="#3B82F6">
              <ThunderboltOutlined className="icon" />
              <div className="desc">
                <p>
                  <strong>Action</strong>
                  <br />
                  {action}
                </p>
              </div>
            </StepItem>
            <StepItem $color="#10B981">
              <CheckCircleOutlined className="icon" />
              <div className="desc">
                <p>
                  <strong>Result</strong>
                  <br />
                  {result}
                </p>
              </div>
            </StepItem>
          </ContentBox>

          {onDetailClick && (
            <Flex justify="flex-start" style={{marginTop: "36px"}}>
              <DetailButton onClick={onDetailClick}>
                프로젝트 자세히 보기
                <ArrowRightOutlined className="arrow-icon" />
              </DetailButton>
            </Flex>
          )}
        </Col>

        <Col xs={0} lg={12}>
          <DiagramPlaceholder>
            <div style={{marginBottom: "16px"}}>{diagramIcon}</div>
            <Text
              style={{color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem"}}
            >
              {diagramTitle}
            </Text>
            <Paragraph
              style={{fontSize: "0.95rem", marginTop: "12px", color: "#94A3B8"}}
            >
              {diagramDesc}
            </Paragraph>
          </DiagramPlaceholder>
        </Col>
      </Row>
    </CardWrapper>
  );
}
