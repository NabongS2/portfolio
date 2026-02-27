import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Button, Drawer, Switch, Flex, Typography } from 'antd';
import { MenuOutlined, BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useThemeStore } from '../../store/themeStore';
import { useLocation, useNavigate } from 'react-router-dom'; // ✨ 라우터 훅 추가

const { Header: AntdHeader } = Layout;
const { Text: AntdText } = Typography;

// --- 🎨 Minimalist nabong() SVG Logo ---
const NabongLogo = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#1E293B"/>
    <path d="M14 14L20 20L14 26" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="22" y1="26" x2="28" y2="26" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const LogoWrapper = styled(Flex)`
  cursor: pointer;
  height: 100%;
  .logo-text {
    font-family: 'Inter', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: -0.3px;
  }
  .blue-accent {
    color: #60A5FA;
  }
`;

const NavItem = styled.button<{ $isDark: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ $isDark }) => ($isDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(0, 0, 0, 0.65)')};
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  transition: all 0.2s ease;
  padding: 0;
  &:hover { 
    color: #60A5FA; 
  }
`;

export default function Header() {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const [open, setOpen] = useState(false);
  
  const location = useLocation(); // ✨ 현재 경로 파악
  const navigate = useNavigate(); // ✨ 페이지 이동

  const menuItems = [
    { key: 'about', label: '01. About', target: 'about' },
    { key: 'work', label: '02. Work', target: 'work' },
    { key: 'tech', label: '03. Tech', target: 'tech' },
    { key: 'contact', label: '04. Contact', target: 'contact' },
  ];

  // ✨ 스마트 내비게이션 함수
  const handleNavClick = (targetId: string) => {
    setOpen(false); // 모바일 드로어 닫기

    if (location.pathname === '/') {
      // 1. 메인 페이지라면 해당 섹션으로 스크롤
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 2. 상세 페이지라면 메인으로 이동하면서 해시 전달
      navigate(`/#${targetId}`);
    }
  };

  // ✨ 로고 클릭 시 이동
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <AntdHeader
      style={{
        position: 'fixed',
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10vw',
        height: '72px',
        lineHeight: '72px',
        background: isDarkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(15px)',
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
      }}
    >
      <Flex align="center" justify="space-between" style={{ width: '100%' }}>
        {/* Logo Section */}
        <LogoWrapper align="center" gap={12} onClick={handleLogoClick}>
          <NabongLogo />
          <AntdText className="logo-text" style={{ color: isDarkMode ? '#F8FAFC' : '#0F172A' }}>
            nabong<span className="blue-accent">()</span>
          </AntdText>
        </LogoWrapper>

        {/* Desktop Navigation */}
        <Flex align="center" gap={40} className="desktop-only">
          {menuItems.map(item => (
            <NavItem 
              key={item.key} 
              onClick={() => handleNavClick(item.target)} 
              $isDark={isDarkMode}
            >
              {item.label}
            </NavItem>
          ))}
          <Switch 
            checkedChildren={<BulbFilled />} 
            unCheckedChildren={<BulbOutlined />} 
            checked={isDarkMode} 
            onChange={toggleTheme}
            style={{ backgroundColor: isDarkMode ? '#3B82F6' : undefined }}
          />
        </Flex>

        {/* Mobile Menu Trigger */}
        <Button 
          className="mobile-only"
          type="text"
          icon={<MenuOutlined style={{ fontSize: '20px', color: isDarkMode ? '#F8FAFC' : '#0F172A' }} />} 
          onClick={() => setOpen(true)} 
        />
      </Flex>

      {/* Mobile Sidebar (Drawer) */}
      <Drawer
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={260}
        styles={{ 
          body: { background: isDarkMode ? '#0B0F19' : '#F8FAFC', padding: '40px 24px' },
          header: { background: isDarkMode ? '#0B0F19' : '#F8FAFC', borderBottom: 'none' }
        }}
      >
        <Flex vertical gap={32}>
          {menuItems.map(item => (
            <NavItem 
              key={item.key} 
              onClick={() => handleNavClick(item.target)} 
              style={{ fontSize: '1.1rem', textAlign: 'left' }}
              $isDark={isDarkMode}
            >
              {item.label}
            </NavItem>
          ))}
          <Flex justify="space-between" align="center" style={{ marginTop: '20px' }}>
            <AntdText style={{ color: isDarkMode ? '#94A3B8' : '#64748B' }}>Dark Mode</AntdText>
            <Switch checked={isDarkMode} onChange={toggleTheme} />
          </Flex>
        </Flex>
      </Drawer>

      <style>{`
        @media (min-width: 769px) { .desktop-only { display: flex !important; } .mobile-only { display: none !important; } }
        @media (max-width: 768px) { .desktop-only { display: none !important; } .mobile-only { display: flex !important; } }
      `}</style>
    </AntdHeader>
  );
}