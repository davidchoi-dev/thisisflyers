export interface ThemeColors {
  primary: {
    brand: string;
    blue: string;
    red: string;
    green: string;
    orange: string;
    yellow: string;
    indigo: string;
  };
  neutral: {
    white: string;
    black: string;
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    surface: {
      light: string;
      medium: string;
      dark: string;
      darker: string;
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
      disabled: string;
    };
    border: {
      light: string;
      medium: string;
      dark: string;
    };
  };
  semantic: {
    success: {
      base: string;
      light: string;
      dark: string;
    };
    warning: {
      base: string;
      light: string;
    };
    error: {
      base: string;
      light: string;
    };
    info: {
      base: string;
      light: string;
    };
  };
}

export interface ThemeTypography {
  fontFamilies: {
    primary: string;
    serif: string;
    mono: string;
    emoji: string;
  };
  fontWeights: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  fontSize: {
    micro: string;
    mini: string;
    small: string;
    regular: string;
    large: string;
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    title5: string;
    title6: string;
    title7: string;
    title8: string;
    title9: string;
  };
  lineHeight: {
    tight: number;
    snug: number;
    normal: number;
    relaxed: number;
  };
  letterSpacing: {
    tight: string;
    normal: string;
    wide: string;
  };
}

export interface ThemeSpacing {
  scale: Record<string, string>;
  layout: {
    headerHeight: string;
    pagePadding: string;
    pageMaxWidth: string;
    proseMaxWidth: string;
    minTapSize: string;
  };
  grid: {
    columns: number;
    gap: string;
  };
}

export interface ThemeBorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  full: string;
  circle: string;
}

export interface ThemeShadows {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ThemeAnimations {
  duration: {
    instant: string;
    fast: string;
    normal: string;
    slow: string;
    highlightFadeIn: string;
    highlightFadeOut: string;
  };
  easing: Record<string, string>;
}

export interface ThemeEffects {
  blur: {
    header: string;
  };
  scrollbar: {
    color: string;
    colorHover: string;
    colorActive: string;
    size: string;
    sizeActive: string;
    gap: string;
  };
  focus: {
    color: string;
    width: string;
    offset: string;
    outline: string;
  };
}

export interface ThemeZIndex {
  hide: number;
  auto: string;
  base: number;
  docked: number;
  dropdown: number;
  sticky: number;
  banner: number;
  overlay: number;
  modal: number;
  popover: number;
  skipLink: number;
  toast: number;
  tooltip: number;
  max: number;
}

export interface ThemeComponents {
  button: {
    primary: {
      backgroundColor: string;
      color: string;
      border: string;
      borderRadius: string;
      padding: string;
      fontSize: string;
      fontWeight: string;
      height: string;
    };
    secondary: {
      backgroundColor: string;
      color: string;
      border: string;
      borderRadius: string;
      padding: string;
      fontSize: string;
      fontWeight: string;
      height: string;
    };
    ghost: {
      backgroundColor: string;
      color: string;
      border: string;
      borderRadius: string;
      padding: string;
      fontSize: string;
      fontWeight: string;
      height: string;
    };
  };
  header: {
    height: string;
    backgroundColor: string;
    backdropFilter: string;
    borderBottom: string;
  };
  navigation: {
    linkColor: string;
    linkColorHover: string;
    linkFontSize: string;
    linkFontWeight: string;
    linkPadding: string;
    linkBorderRadius: string;
  };
}

export interface ThemeBreakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
  shadows: ThemeShadows;
  animations: ThemeAnimations;
  effects: ThemeEffects;
  zIndex: ThemeZIndex;
  components: ThemeComponents;
  breakpoints: ThemeBreakpoints;
}

export type ThemeMode = 'dark' | 'light';
