import { createTheme } from '@mui/material/styles'

// wrtn.io 스타일 글래스모피즘 정의
export const glassStyles = {
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '20px',
  boxShadow: `
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.5)
  `,
}

// 강조 요소용 subtle 네온 글로우 (포인트 컬러만)
export const subtleGlow = {
  boxShadow: `
    0 0 20px rgba(255, 87, 51, 0.2),
    0 0 40px rgba(255, 87, 51, 0.1)
  `,
  border: '1px solid rgba(255, 87, 51, 0.3)',
}

// 텍스트 강조용 subtle 글로우
export const textSubtleGlow = {
  textShadow: `
    0 0 10px rgba(255, 87, 51, 0.3),
    0 0 20px rgba(255, 87, 51, 0.1)
  `,
}

// 공통 테마 옵션 (wrtn.io 스타일)
const commonTheme = {
  typography: {
    fontFamily: '"Inter", "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontSize: 'clamp(3rem, 8vw, 5rem)',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.75,
      fontWeight: 400,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          textTransform: 'none',
          fontWeight: 500,
          padding: '14px 32px',
          boxShadow: 'none',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s ease',
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(12px)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.8)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #ff5733 0%, #ff4520 100%)',
          color: '#ffffff',
          border: 'none',
          '&:hover': {
            background: 'linear-gradient(135deg, #ff6b4a 0%, #ff5733 100%)',
            boxShadow: `
              0 8px 25px rgba(255, 87, 51, 0.4),
              0 0 20px rgba(255, 87, 51, 0.2)
            `,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          transition: 'all 0.3s ease',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.08),
            0 2px 8px rgba(0, 0, 0, 0.04)
          `,
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow: `
              0 12px 40px rgba(0, 0, 0, 0.12),
              0 4px 12px rgba(0, 0, 0, 0.06)
            `,
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '16px',
            backdropFilter: 'blur(12px)',
            background: 'rgba(255, 255, 255, 0.6)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.7)',
            },
            '&.Mui-focused': {
              background: 'rgba(255, 255, 255, 0.8)',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
}

// 라이트 테마 (wrtn.io 스타일)
export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#ff5733',
      light: '#ff6b4a',
      dark: '#e64a19',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6366f1',
      light: '#8b5cf6',
      dark: '#4f46e5',
      contrastText: '#ffffff',
    },
    background: {
      default: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
      paper: 'rgba(255, 255, 255, 0.8)',
    },
    text: {
      primary: '#1a202c',
      secondary: '#4a5568',
    },
    success: {
      main: '#10b981',
    },
    error: {
      main: '#ef4444',
    },
    warning: {
      main: '#f59e0b',
    },
    info: {
      main: '#3b82f6',
    },
  },
})

// 다크 테마 (wrtn.io 다크 모드 스타일)
export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff5733',
      light: '#ff6b4a',
      dark: '#e64a19',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8b5cf6',
      light: '#a78bfa',
      dark: '#7c3aed',
      contrastText: '#ffffff',
    },
    background: {
      default: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      paper: 'rgba(15, 23, 42, 0.8)',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
    success: {
      main: '#10b981',
    },
    error: {
      main: '#ef4444',
    },
    warning: {
      main: '#f59e0b',
    },
    info: {
      main: '#3b82f6',
    },
  },
  components: {
    ...commonTheme.components,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(20px)',
          background: 'rgba(15, 23, 42, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          '&:hover': {
            background: 'rgba(15, 23, 42, 0.8)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },
})

// 접근성을 위한 애니메이션 설정
export const reducedMotionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

// 고급 애니메이션 variants
export const standardMotionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeOut' },
}

export const heroVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
}

export const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -10,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  }
}

export const textRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
} 