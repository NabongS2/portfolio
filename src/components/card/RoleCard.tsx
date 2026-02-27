import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Flex } from "antd";

const StyledCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg || "rgba(255, 255, 255, 0.3)"};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border || "rgba(255, 255, 255, 0.5)"};
  border-radius: 24px;
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(59, 130, 246, 0.15);
  }

  .role-icon {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .role-title {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 800;
    font-size: 1.3rem;
  }

  .role-desc {
    color: ${({ theme }) => theme.colors.secondaryText};
    line-height: 1.6;
  }

  /* ✨ 우측 기술 스택 아이콘 스타일 */
  .tech-icon-wrapper img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }
`;

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  techIcons?: string[]; // ✨ 기술 스택 이미지 URL 배열을 받을 수 있게 추가
}

export default function RoleCard({ icon, title, description, techIcons }: RoleCardProps) {
  return (
    <StyledCard whileHover={{ y: -10 }}>
      {/* ✨ 상단을 Flex로 묶어 좌/우 배치 */}
      <Flex justify="space-between" align="center" style={{ marginBottom: "8px" }}>
        <div className="role-icon">{icon}</div>
        
        {/* 우측 기술 스택 아이콘 렌더링 */}
        {techIcons && (
          <Flex gap={8} className="tech-icon-wrapper">
            {techIcons.map((url, idx) => (
              <img key={idx} src={url} alt="tech-icon" />
            ))}
          </Flex>
        )}
      </Flex>
      
      <div className="role-title">{title}</div>
      <div className="role-desc">{description}</div>
    </StyledCard>
  );
}