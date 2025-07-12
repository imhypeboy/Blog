/**
 * 스타일 상수 정의
 * 전체 애플리케이션에서 일관된 디자인을 위한 공통 스타일
 */

// 색상 팔레트
export const colors = {
  primary: '#ff5733',
  primaryLight: '#ff6b4a',
  primaryDark: '#ff4520',
  secondary: '#6366f1',
  text: {
    primary: '#1a202c',
    secondary: '#4a5568',
    tertiary: '#718096',
  },
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#e2e8f0',
  },
  overlay: {
    primary: 'rgba(255, 87, 51, 0.1)',
    secondary: 'rgba(99, 102, 241, 0.1)',
  }
} as const

// 그라디언트
export const gradients = {
  primary: 'linear-gradient(135deg, #ff5733 0%, #ff4520 100%)',
  primaryHover: 'linear-gradient(135deg, #ff6b4a 0%, #ff5733 100%)',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
  cardOverlay: 'linear-gradient(135deg, rgba(255, 87, 51, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
} as const

// 그림자
export const shadows = {
  primary: '0 8px 24px rgba(255, 87, 51, 0.3)',
  primaryHover: '0 12px 32px rgba(255, 87, 51, 0.4)',
  card: '0 4px 12px rgba(0, 0, 0, 0.1)',
  cardHover: '0 8px 24px rgba(0, 0, 0, 0.15)',
} as const

// 보더 반지름
export const borderRadius = {
  small: '8px',
  medium: '12px',
  large: '16px',
  xl: '20px',
  circle: '50%',
} as const

// 전환 효과
export const transitions = {
  fast: '0.2s ease',
  medium: '0.3s ease',
  slow: '0.4s ease',
  transform: 'transform 0.3s ease',
} as const

// 여백 (MUI의 spacing과 호환)
export const spacing = {
  xs: 1,   // 8px
  sm: 2,   // 16px
  md: 3,   // 24px
  lg: 4,   // 32px
  xl: 6,   // 48px
  xxl: 8,  // 64px
} as const

// 타이포그래피
export const typography = {
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fontSize: {
    xs: '0.75rem',   // 12px
    sm: '0.875rem',  // 14px
    base: '1rem',    // 16px
    lg: '1.125rem',  // 18px
    xl: '1.25rem',   // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  }
} as const

// 글래스모피즘 효과
export const glassmorphism = {
  light: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  medium: {
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
  },
  dark: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
  }
} as const

// 애니메이션 변형들
export const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  },
  scaleOnHover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" }
  }
} as const 