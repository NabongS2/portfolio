// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      cardBg: string;
      text: string;
      secondaryText: string;
      primary: string;
      border: string;
      headerBg: string;
    };
  }
}