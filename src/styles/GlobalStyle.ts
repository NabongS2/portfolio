import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    font-family: 'Pretendard', sans-serif;
  }
  
  /* Ant Design 기본 텍스트 컬러 오버라이딩 */
  .ant-typography {
    color: ${({ theme }) => theme.colors.text} !important;
  }
`;

export default GlobalStyle;