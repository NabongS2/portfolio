import { create } from 'zustand';

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDarkMode: true, // 피그마 원본이 다크 모드이므로 기본값 true
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));