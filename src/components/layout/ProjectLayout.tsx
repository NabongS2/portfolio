import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useThemeStore } from '../../store/themeStore'; // 테마 스토어 경로 확인

const Container = styled.div<{ $isDark: boolean }>`
  background: ${({ $isDark }) => 
    $isDark 
      ? 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, #0F172A 85%)' 
      : 'linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)'
  };
  min-height: 100vh;
  padding: 120px 10vw 100px;
  color: ${({ $isDark }) => ($isDark ? '#F8FAFC' : '#0F172A')};
  transition: background 0.3s ease;

  @media (max-width: 768px) { padding: 80px 5vw 60px; }
`;

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const colors = {
    title: isDarkMode ? '#F8FAFC' : '#0F172A',
    text: isDarkMode ? '#CBD5E1' : '#475569',
    subText: isDarkMode ? '#94A3B8' : '#64748B',
    cardBg: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#F8FAFC',
  };

  return (
    <Container $isDark={isDarkMode}>
      <Button 
        type="text" 
        icon={<ArrowLeftOutlined />} 
        style={{ color: colors.subText, marginBottom: '40px' }}
        onClick={() => window.history.back()}
      >
        프로젝트 목록으로 돌아가기
      </Button>
      
      {/* 자식 컴포넌트(실제 프로젝트 내용)에 색상 데이터와 다크모드 상태를 넘겨줌
        React.cloneElement를 사용하면 자식에게 공통 props를 쏴줄 수 있습니다!
      */}
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isDarkMode, colors } as any);
        }
        return child;
      })}
    </Container>
  );
}