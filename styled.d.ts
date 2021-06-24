// import original module declarations
import { CSSProp } from 'styled-components';
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary?: string;
    };
  }
}
declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
