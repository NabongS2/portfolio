import {ConfigProvider, theme as antdTheme} from "antd";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "styled-components";

import Header from "./components/header";
import MainPage from "./pages/Main";
import ScenarioBuilderDetail from "./pages/ProjectDetail/ScenarioBuilder";
import {useThemeStore} from "./store/themeStore";
import GlobalStyle from "./styles/GlobalStyle";
import {darkTheme, lightTheme} from "./styles/theme";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  const {isDarkMode} = useThemeStore();

  return (
    // ✨ 최상단에 BrowserRouter 딱 하나만 감싸줍니다!
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* 1. Antd 테마 설정 (기본 컴포넌트용) */}
      <ConfigProvider
        theme={{
          algorithm: isDarkMode
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
          token: {
            // 피그마의 Primary 컬러(#3B82F6)를 Antd 전역에 강제 적용
            colorPrimary: "#3B82F6",
            colorBgBase: isDarkMode ? "#0F172A" : "#F8FAFC",
            fontFamily: "'Pretendard', sans-serif",
          },
        }}
      >
        {/* 2. Styled-components 테마 설정 (커스텀 레이아웃용) */}
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <GlobalStyle />
          <SmoothScroll />
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<MainPage />} />
              {/* 프로젝트 상세 페이지 */}
              <Route
                path="/project/scenario-builder"
                element={<ScenarioBuilderDetail />}
              />
            </Routes>
          </main>
        </ThemeProvider>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
