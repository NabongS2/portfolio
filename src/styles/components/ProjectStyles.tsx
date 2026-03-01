import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContentSection = styled(motion.section)`
  margin-bottom: 80px;
`;

export const GlassCard = styled.div<{ $isDark: boolean }>`
  background: ${({ $isDark }) => ($isDark ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.85)')};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ $isDark }) => ($isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.05)')};
  border-radius: 24px;
  padding: 40px;
  box-shadow: ${({ $isDark }) => ($isDark ? '0 8px 32px rgba(0, 0, 0, 0.2)' : '0 8px 24px rgba(0, 0, 0, 0.04)')};
  height: 100%;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) { padding: 24px; }
`;

export const HighlightCard = styled.div<{ $isDark: boolean, $borderColor?: string }>`
  background: ${({ $isDark }) => ($isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(255, 255, 255, 0.9)')};
  border: 1px solid ${({ $isDark }) => ($isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(0, 0, 0, 0.05)')};
  border-left: 4px solid ${({ $borderColor }) => $borderColor || '#3B82F6'};
  padding: 24px;
  border-radius: 12px;
  height: 100%;
  box-shadow: ${({ $isDark }) => ($isDark ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.03)')};
  transition: all 0.3s ease;
`;

export const TechTag = styled.div<{ $isDark: boolean }>`
  background: ${({ $isDark }) => ($isDark ? 'rgba(15, 23, 42, 0.6)' : '#EFF6FF')};
  color: #3B82F6;
  border: 1px solid ${({ $isDark }) => ($isDark ? 'rgba(59, 130, 246, 0.3)' : '#BFDBFE')};
  border-radius: 100px;
  padding: 6px 16px;
  font-size: 0.85rem;
  font-family: 'Fira Code', monospace;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  &::before { content: ''; width: 6px; height: 6px; background-color: #3B82F6; border-radius: 50%; }
`;