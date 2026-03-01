export const PATH = {
  // 기본 경로
  HOME: '/',
  
  // 프로젝트 상세 페이지 경로 모음
  PROJECT: {
    SCENARIO_BUILDER: '/project/scenario-builder',   // 1. 시나리오 빌더
    WEB_ADMIN: '/project/web-admin',                 // 2. 콜봇 WebAdmin
    STT_ADMIN: '/project/stt-admin',                 // 3. STT WebAdmin
    MONOREPO: '/project/monorepo-design-system',     // 4. 모노레포 & 디자인 시스템
    LLM_POC: '/project/llm-poc',                     // 5. LLM 프롬프트 빌더
  },
} as const; 