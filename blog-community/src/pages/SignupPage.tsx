import React from 'react';
import { Box, Typography, TextField, Button, InputAdornment, Paper, Divider, Link, Stack } from '@mui/material';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = React.useState(false);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
      }}
    >
      <Paper
        className="signup-card"
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 5,
          maxWidth: 420,
          width: '100%',
          bgcolor: '#fcfcfd',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}
      >
        <Typography variant="h4" fontWeight={800} align="center" sx={{ mb: 1 }}>
          새로운 여정의 시작
        </Typography>
        <Typography align="center" sx={{ mb: 3, color: '#6b7280', fontSize: '1.1rem' }}>
          계정을 만들고 모든 기능을 이용해 보세요.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon sx={{ color: '#ea4335' }} />}
            sx={{
              bgcolor: '#fff',
              borderColor: '#e5e7eb',
              color: '#222',
              fontWeight: 600,
              fontSize: '1rem',
              py: 1.2,
              borderRadius: 2,
              '&:hover': { bgcolor: '#f3f4f6', borderColor: '#d1d5db' },
            }}
          >
            Google
          </Button>
          <Button
            fullWidth
            variant="contained"
            startIcon={<ChatBubbleIcon sx={{ color: '#3c1e1e' }} />}
            sx={{
              bgcolor: '#fee500',
              color: '#3c1e1e',
              fontWeight: 700,
              fontSize: '1rem',
              py: 1.2,
              borderRadius: 2,
              boxShadow: 'none',
              '&:hover': { bgcolor: '#fee500', opacity: 0.95 },
            }}
          >
            카카오
          </Button>
        </Stack>
        <Divider sx={{ my: 3, color: '#b0b4ba', fontWeight: 500 }}>또는 이메일로 가입</Divider>
        <TextField
          fullWidth
          label="이메일"
          type="email"
          placeholder="you@example.com"
          variant="outlined"
          sx={{
            mb: 2,
            borderRadius: 2,
            background: '#f6f8fa',
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              background: '#f6f8fa',
              '&:hover': { background: '#f0f2f5' },
              '&.Mui-focused': { background: '#e9ecef' },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email sx={{ color: '#b0b4ba' }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label="비밀번호"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          sx={{
            mb: 2,
            borderRadius: 2,
            background: '#f6f8fa',
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              background: '#f6f8fa',
              '&:hover': { background: '#f0f2f5' },
              '&.Mui-focused': { background: '#e9ecef' },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ color: '#b0b4ba' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={() => setShowPassword((v) => !v)} sx={{ minWidth: 0, p: 0, color: '#b0b4ba' }}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label="비밀번호 확인"
          type={showPasswordCheck ? 'text' : 'password'}
          variant="outlined"
          sx={{
            mb: 3,
            borderRadius: 2,
            background: '#f6f8fa',
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              background: '#f6f8fa',
              '&:hover': { background: '#f0f2f5' },
              '&.Mui-focused': { background: '#e9ecef' },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ color: '#b0b4ba' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={() => setShowPasswordCheck((v) => !v)} sx={{ minWidth: 0, p: 0, color: '#b0b4ba' }}>
                  {showPasswordCheck ? <VisibilityOff /> : <Visibility />}
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{
            py: 1.5,
            fontWeight: 700,
            fontSize: '1.1rem',
            borderRadius: 2,
            background: 'rgba(255, 87, 51, 0.4)',
            color: '#fff',
            boxShadow: '0 4px 16px rgba(255,87,51,0.10)',
            transition: 'all 0.2s',
            '&:hover': {
              background: 'rgba(255, 87, 51, 0.6)',
              boxShadow: '0 8px 32px rgba(255,87,51,0.18)',
            },
          }}
        >
          계정 만들기
        </Button>
        <Typography align="center" sx={{ mt: 4, color: '#6b7280', fontSize: '1rem' }}>
          이미 계정이 있으신가요?{' '}
          <Link sx={{ color: '#3b82f6', fontWeight: 600, cursor: 'pointer' }} onClick={() => navigate('/login')}>
            로그인
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignupPage; 