import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typography, Flex } from 'antd';

const { Title, Text } = Typography;

const HeaderWrapper = styled(motion.div)`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 보내주신 이미지처럼 기본 좌측 정렬 */
  text-align: left;
  width: 100%;
`;

const TopRow = styled(Flex)`
  width: 100%;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
`;

// ✨ 파란색 숫자
const IndexText = styled.span`
  color: #3B82F6;
  font-family: 'Fira Code', monospace; /* 코딩 폰트로 엣지 추가 */
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

// ✨ 이미지의 핵심! 파란색에서 투명하게 사라지는 선
const GradientLine = styled.div`
  height: 1px;
  width: 100%;
  max-width: 250px; /* 선의 최대 길이 */
  background: linear-gradient(90deg, #3B82F6 0%, rgba(59, 130, 246, 0) 100%);
`;

// ✨ 메인 타이틀
const MainTitle = styled(Title)`
  &.ant-typography {
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.8rem; /* 너무 크지 않고 딱 적당한 크기 */
    font-weight: 800;
    margin: 0 0 12px 0 !important;
    letter-spacing: -0.5px;
  }
`;

// ✨ 서브 타이틀
const Subtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.secondaryText || '#94A3B8'};
  font-size: 1.15rem;
  font-weight: 400;
  letter-spacing: -0.3px;
`;

interface SectionHeaderProps {
  index: string; 
  title: string; 
  subtitle: string;
}

export default function SectionHeader({ index, title, subtitle }: SectionHeaderProps) {
  return (
    <HeaderWrapper 
      initial={{ opacity: 0, x: -20 }} /* 아래에서 위가 아닌, 살짝 왼쪽에서 등장하게 변경 */
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <TopRow>
        <IndexText>{index}.</IndexText>
        <GradientLine />
      </TopRow>
      
      <MainTitle level={2}>{title}</MainTitle>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderWrapper>
  );
}