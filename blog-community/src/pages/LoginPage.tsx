import React, { useState, useEffect, useCallback } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Link,
  Alert,
  CircularProgress,
  Container,
} from '@mui/material'
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  CheckCircle,
} from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { supabase } from '../lib/supabase'

interface LoginCredentials {
  email: string
  password: string
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const { setUser } = useAuthStore()
  
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // 페이지 로드 시 애니메이션
  useEffect(() => {
    setIsVisible(true)
    // 저장된 이메일 불러오기
    try {
      const savedEmail = localStorage.getItem('rememberedEmail')
      if (savedEmail) {
        setCredentials(prev => ({ ...prev, email: savedEmail }))
        setRememberMe(true)
      }
    } catch (error) {
      console.warn('로컬 스토리지 접근 오류:', error)
    }
  }, [])

  // 입력 핸들러
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials(prev => ({ ...prev, [name]: value }))
    if (error) setError(null)
  }, [error])

  // 로그인 제출
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      })

      if (error) throw error

      if (data.user) {
        setUser(data.user)
        setIsSuccess(true)

        // Remember me 처리
        if (rememberMe) {
          try {
            localStorage.setItem('rememberedEmail', credentials.email)
          } catch (storageError) {
            console.warn('로컬 스토리지 접근 오류:', storageError)
          }
        } else {
          localStorage.removeItem('rememberedEmail')
        }

        // 성공 애니메이션 후 페이지 이동
        setTimeout(() => {
          navigate('/')
        }, 1500)
      }
    } catch (error: any) {
      setError(
        error.message === 'Invalid login credentials'
          ? '이메일 또는 비밀번호가 올바르지 않습니다.'
          : '로그인에 실패했습니다. 다시 시도해주세요.'
      )
      setIsLoading(false)
    }
  }

  const containerVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const cardVariants: any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  }

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              color: '#1a202c',
              mb: 2,
            }}
          >
            로그인
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#4a5568',
              fontSize: '1.1rem',
            }}
          >
            개발 이야기에 함께 참여하세요
          </Typography>
        </Box>

        <motion.div variants={cardVariants}>
          <Card
            className="glassmorphism"
            sx={{
              position: 'relative',
              overflow: 'visible',
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.65)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.35)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              {error && (
                <Alert
                  severity="error"
                  sx={{
                    mb: 3,
                    borderRadius: '12px',
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                    border: '1px solid rgba(244, 67, 54, 0.2)',
                  }}
                >
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    label="이메일"
                    placeholder="이메일 주소를 입력하세요"
                    value={credentials.email}
                    onChange={handleChange}
                    disabled={isLoading || isSuccess}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email sx={{ color: '#6b7280' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        backdropFilter: 'blur(8px)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        },
                        '&.Mui-focused': {
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                      },
                    }}
                  />
                </Box>

                <Box sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    label="비밀번호"
                    placeholder="비밀번호를 입력하세요"
                    value={credentials.password}
                    onChange={handleChange}
                    disabled={isLoading || isSuccess}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: '#6b7280' }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            disabled={isLoading || isSuccess}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        backdropFilter: 'blur(8px)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        },
                        '&.Mui-focused': {
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                      },
                    }}
                  />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        disabled={isLoading || isSuccess}
                        sx={{ color: '#ff5733' }}
                      />
                    }
                    label={
                      <Typography variant="body2" sx={{ color: '#4a5568' }}>
                        로그인 상태 유지
                      </Typography>
                    }
                  />
                  <Link
                    href="#"
                    sx={{
                      color: '#ff5733',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    비밀번호를 잊으셨나요?
                  </Link>
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isLoading || isSuccess}
                  sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #ff5733 0%, #ff4520 100%)',
                    boxShadow: '0 8px 24px rgba(255, 87, 51, 0.3)',
                    mb: 3,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #ff6b4a 0%, #ff5733 100%)',
                      boxShadow: '0 12px 32px rgba(255, 87, 51, 0.4)',
                    },
                    '&:disabled': {
                      background: '#e2e8f0',
                      color: '#64748b',
                      boxShadow: 'none',
                    },
                  }}
                >
                  {isLoading ? (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CircularProgress size={20} sx={{ mr: 1, color: 'white' }} />
                      로그인 중...
                    </Box>
                  ) : isSuccess ? (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircle sx={{ mr: 1 }} />
                      성공!
                    </Box>
                  ) : (
                    '로그인'
                  )}
                </Button>

                <Typography
                  variant="body2"
                  sx={{
                    textAlign: 'center',
                    color: '#6b7280',
                  }}
                >
                  계정이 없으신가요?{' '}
                  <Link
                    href="#"
                    onClick={() => navigate('/register')}
                    sx={{
                      color: '#ff5733',
                      textDecoration: 'none',
                      fontWeight: 500,
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    회원가입
                  </Link>
                </Typography>
              </form>
            </CardContent>

            {/* 성공 오버레이 애니메이션 */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '20px',
                    background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)',
                    backdropFilter: 'blur(20px)',
                    zIndex: 10,
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          backgroundColor: '#10b981',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3)',
                        }}
                      >
                        <CheckCircle sx={{ fontSize: 40, color: 'white' }} />
                      </Box>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: '#1a202c',
                          mb: 1,
                        }}
                      >
                        🎉 로그인 성공!
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: '#4a5568' }}
                      >
                        잠시 후 메인 페이지로 이동합니다...
                      </Typography>
                    </motion.div>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default LoginPage 