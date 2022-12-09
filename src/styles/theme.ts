declare module '@emotion/react' {
  export interface Theme {
    colors: {
      wantedMain: string;
      wantedSub: string;
      wantedGreen: string;
      white: string;
      gray300: string;
      gray600: string;
      gray900: string;
      black: string;
    };
  }
}

const theme = {
  colors: {
    wantedMain: '#2C5BF3',
    wantedSub: '#448BF4',
    wantedGreen: '#29DDAA',
    white: '#fff',
    gray300: '#d3d3d3',
    gray600: '#808080',
    gray900: '#A9A9A9',
    black: '#000',
  },
};

export default theme;
