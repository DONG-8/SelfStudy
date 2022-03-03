import "styled-components";

declare module "styled-components" {
  // 인터페이스, prop들을 위해서 만든 인터페이스랑유사하다.
  export interface DefaultTheme {
    red: string;
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
  }
}
