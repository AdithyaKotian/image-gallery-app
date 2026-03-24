import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      bg: string;
      border: string;
      accent: string;
    };
  }
}