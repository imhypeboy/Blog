import React from 'react';
import { Box, Typography, TextField, Button, InputAdornment, Paper } from '@mui/material';
import { Email } from '@mui/icons-material';

const ForgotPasswordPage: React.FC = () => (
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
      elevation={8}
      sx={{
        p: { xs: 3, md: 5 },
        borderRadius: 6,
        maxWidth: 420,
        width: '100%',
        bgcolor: 'white',
        boxShadow: '0 8px 32px rgba(255,87,51,0.08)',
      }}
    >
      <Typography variant="h3" fontWeight={700} align="center" sx={{ mb: 2 }}>
        비밀번호 재설정
      </Typography>
      <Typography align="center" sx={{ mb: 3, color: '#4a5568', fontSize: '1.1rem' }}>
        가입하신 이메일로 비밀번호 재설정 링크를 보내드립니다.
      </Typography>
      <TextField
        fullWidth
        label="이메일"
        type="email"
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
              <Email sx={{ color: '#6b7280' }} />
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
          background: 'linear-gradient(90deg, #ff7043 0%, #ff6b81 100%)',
          boxShadow: '0 4px 16px rgba(255,87,51,0.18)',
          transition: 'all 0.2s',
          '&:hover': {
            background: 'linear-gradient(90deg, #ff6b81 0%, #ff7043 100%)',
            boxShadow: '0 8px 32px rgba(255,87,51,0.25)',
          },
        }}
      >
        비밀번호 재설정 메일 보내기
      </Button>
    </Paper>
  </Box>
);

export default ForgotPasswordPage; 