import React from "react";
import styled from "styled-components";
import { Typography, Flex } from "antd";
import { ControlOutlined, StarFilled } from "@ant-design/icons";

const { Text } = Typography;

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg || "rgba(30, 41, 59, 0.4)"};
  backdrop-filter: blur(15px);
  border: 1px solid ${({ theme }) => theme.colors.border || "rgba(255, 255, 255, 0.08)"};
  border-radius: 16px;
  padding: 32px;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(59, 130, 246, 0.4);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

const StackTitle = styled(Text)`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.3px;
`;

const GroupLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  
  span {
    font-size: 0.8rem;
    font-weight: 700;
    color: #64748B;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`;
const TechBadge = styled.span<{ $primary?: boolean }>`
  background: ${(props) =>
    props.$primary ? "rgba(59, 130, 246, 0.12)" : "transparent"};
  color: ${(props) =>
    props.$primary ? "#60A5FA" : ({ theme }) => theme.colors.secondaryText || "#94A3B8"};
  border: 1px solid
    ${(props) =>
      props.$primary ? "rgba(59, 130, 246, 0.3)" : "rgba(148, 163, 184, 0.2)"};
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: ${(props) => (props.$primary ? 700 : 500)};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  
  &::before {
    content: "";
    display: ${(props) => (props.$primary ? "block" : "none")};
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #3B82F6;
    box-shadow: 0 0 8px #3B82F6;
  }
`;

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  mainSkills?: string[]; // ✨ 문자열 배열로 변경
  subSkills?: string[];  // ✨ 문자열 배열로 변경
  children?: React.ReactNode; 
}

export default function TechCard({ icon, title, mainSkills, subSkills, children }: TechCardProps) {
  return (
    <CardWrapper>
      <CardHeader>
        {icon}
        <StackTitle>{title}</StackTitle>
      </CardHeader>
      
      {/* 데이터가 있는 경우 그룹별로 렌더링 */}
      {(mainSkills || subSkills) ? (
        <Flex vertical gap={24}>
          {mainSkills && mainSkills.length > 0 && (
            <div>
              <GroupLabel>
                <StarFilled style={{ color: "#FBBF24", fontSize: "0.95rem" }} />
                <span>Main Stack</span>
              </GroupLabel>
              <Flex wrap="wrap" gap={8}>
                {mainSkills.map((skill, idx) => (
                  <TechBadge key={`main-${idx}`} $primary>{skill}</TechBadge>
                ))}
              </Flex>
            </div>
          )}

          {subSkills && subSkills.length > 0 && (
            <div>
              <GroupLabel>
                <ControlOutlined style={{ color: "#64748B", fontSize: "0.95rem" }} />
                <span>Sub & Tools</span>
              </GroupLabel>
              <Flex wrap="wrap" gap={8}>
                {subSkills.map((skill, idx) => (
                  <TechBadge key={`sub-${idx}`}>{skill}</TechBadge>
                ))}
              </Flex>
            </div>
          )}
        </Flex>
      ) : (
        children
      )}
    </CardWrapper>
  );
}