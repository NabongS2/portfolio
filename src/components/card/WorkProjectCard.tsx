import React from "react";
import styled from "styled-components";
import { Col, Row, Typography, Button, Flex } from "antd";
import { 
  CheckCircleOutlined, 
  ExclamationCircleOutlined, 
  ThunderboltOutlined,
  ArrowRightOutlined,
  CalendarOutlined // ✨ 날짜 아이콘 추가
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg || "rgba(30, 41, 59, 0.4)"};
  backdrop-filter: blur(15px);
  border: 1px solid ${({ theme }) => theme.colors.border || "rgba(255, 255, 255, 0.08)"};
  border-radius: 20px;
  padding: 48px;
  margin-bottom: 40px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectTitle = styled(Title)`
  &.ant-typography {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 12px;
    font-weight: 800;
  }
`;

// ✨ 기간 영역 스타일링 (아이콘 + 모노스페이스 폰트)
const PeriodText = styled(Text)`
  color: #94A3B8;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;

// ✨ 보내주신 이미지 스타일을 완벽하게 재현한 태그
const TechTag = styled.div`
  background: rgba(15, 23, 42, 0.5); /* 딥한 다크 네이비 배경 */
  color: #60A5FA;
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 100px;
  padding: 6px 16px; /* 여백을 충분히 주어 답답함 해소 */
  font-size: 0.85rem;
  font-family: 'Fira Code', monospace;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  /* ✨ 태그 앞의 파란색 동그라미 (이미지 참고) */
  &::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    background-color: #3B82F6;
    border-radius: 50%;
  }
`;

const ContentBox = styled.div`
  margin-top: 36px;
`;

const StepItem = styled.div<{ $color: string }>`
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
      color: ${({ theme }) => theme.colors.secondaryText};
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
`;

const DiagramPlaceholder = styled.div`
  height: 100%;
  min-height: 320px;
  background: rgba(15, 23, 42, 0.3);
  border: 1px dashed ${({ theme }) => theme.colors.border || "rgba(255, 255, 255, 0.1)"};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px;
  color: ${({ theme }) => theme.colors.secondaryText};
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

/* ✨ 투박함을 벗어던진 세련된 애니메이션 버튼 */
const DetailButton = styled.button`
  background: transparent;
  border: 1px solid rgba(59, 130, 246, 0.4);
  color: #60A5FA;
  padding: 12px 28px;
  border-radius: 100px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif; /* 깔끔한 영문 폰트 베이스 */

  .arrow-icon {
    transition: transform 0.3s ease;
  }

  /* ✨ 마우스를 올렸을 때의 우아한 네온 효과와 화살표 이동 */
  &:hover {
    background: rgba(59, 130, 246, 0.1);
    border-color: #3B82F6;
    color: #F8FAFC;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);

    .arrow-icon {
      transform: translateX(6px); /* 화살표가 오른쪽으로 살짝 밀림 */
    }
  }
`;

export default function WorkProjectCard({
  title, period, tags, problem, action, result, diagramIcon, diagramTitle, diagramDesc, onDetailClick
}: ProjectCardProps) {
  return (
    <CardWrapper>
      <Row gutter={[48, 32]}>
        <Col xs={24} lg={12}>
          <ProjectTitle level={3}>{title}</ProjectTitle>
          
          {/* ✨ 달력 아이콘이 추가된 기간 영역 */}
          <PeriodText>
            <CalendarOutlined style={{ color: '#3B82F6' }} />
            {period}
          </PeriodText>
          
          {/* ✨ Flex wrap과 gap을 사용하여 태그 간 여백(간격) 확보 */}
          <Flex wrap="wrap" gap={10}>
            {tags.map((tag, idx) => <TechTag key={idx}>{tag}</TechTag>)}
          </Flex>

          <ContentBox>
            <StepItem $color="#EF4444">
              <ExclamationCircleOutlined className="icon" />
              <div className="desc"><p><strong>Problem</strong><br />{problem}</p></div>
            </StepItem>
            <StepItem $color="#3B82F6">
              <ThunderboltOutlined className="icon" />
              <div className="desc"><p><strong>Action</strong><br />{action}</p></div>
            </StepItem>
            <StepItem $color="#10B981">
              <CheckCircleOutlined className="icon" />
              <div className="desc"><p><strong>Result</strong><br />{result}</p></div>
            </StepItem>
          </ContentBox>

          {onDetailClick && (
            <Flex justify="flex-start" style={{ marginTop: '36px' }}>
              <DetailButton onClick={onDetailClick}>
                프로젝트 자세히 보기
                <ArrowRightOutlined className="arrow-icon" />
              </DetailButton>
            </Flex>
          )}
        </Col>
        
        <Col xs={24} lg={12}>
          <DiagramPlaceholder>
            <div style={{ marginBottom: "16px" }}>{diagramIcon}</div>
            <Text style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem" }}>{diagramTitle}</Text>
            <Paragraph style={{ fontSize: "0.95rem", marginTop: "12px", color: "#94A3B8" }}>{diagramDesc}</Paragraph>
          </DiagramPlaceholder>
        </Col>
      </Row>
    </CardWrapper>
  );
}