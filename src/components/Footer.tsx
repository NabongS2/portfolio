import React from 'react';
import styled from 'styled-components';
import { Typography, Flex } from 'antd';

const { Text } = Typography;

const FooterWrapper = styled.footer`
  padding: 60px 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border || 'rgba(255, 255, 255, 0.05)'};
`;

const BrandText = styled(Text)`
  color: #94A3B8;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 2px;
`;

const CopyrightText = styled(Text)`
  color: #64748B;
  font-size: 0.8rem;
  font-family: 'Fira Code', monospace;
`;

const BuiltWith = styled(Text)`
  color: #475569;
  font-size: 0.75rem;
  margin-top: 8px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <BrandText>DESIGN-DRIVEN FULL STACK ENGINEER</BrandText>
      <CopyrightText>© 2026 Lee Na-hyun. All rights reserved.</CopyrightText>
      <BuiltWith>
        Built with React, TypeScript, Ant Design & Framer Motion
      </BuiltWith>
    </FooterWrapper>
  );
}