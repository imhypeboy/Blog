// src/components/Layout/Header.tsx
import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthStore } from '../../store/authStore'
import { supabase } from '../../lib/supabase'

const Header: React.FC = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  
  const { user, isAuthenticated, signOut } = useAuthStore()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null)

  const handleUserMenuOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)
  const handleUserMenuClose = () => setAnchorEl(null)
  const handleMobileMenuOpen = (e: React.MouseEvent<HTMLElement>) => setMobileMenuAnchorEl(e.currentTarget)
  const handleMobileMenuClose = () => setMobileMenuAnchorEl(null)

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    signOut()
    navigate('/')
    handleUserMenuClose()
  }

  // 세그먼트 탭 정의 (wrtn.io 스타일)
  const segmentTabs = [
    { label: 'Home', path: '/' },
    { label: '인기글', path: '/trending' },
    { label: '포트폴리오', path: '/portfolio' },
    { label: 'About', path: '/about' },
  ]
  const currentTab = segmentTabs.findIndex(tab => location.pathname === tab.path)

  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        bgcolor: 'transparent',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 60, py: 1 }}>
        {/* 좌측 로고 (포인트 글로우) */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Typography
            variant="h6"
            onClick={() => navigate('/')}
            sx={{
              fontWeight: 600,
              fontSize: '1.25rem',
              color: '#ff5733',
              cursor: 'pointer',
              userSelect: 'none',
              textShadow: '0 0 10px rgba(255, 87, 51, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                textShadow: '0 0 20px rgba(255, 87, 51, 0.5)',
                transform: 'translateY(-1px)'
              },
            }}
          >
            Blog Community
          </Typography>
        </motion.div>

        {/* 중앙 세그먼트 탭 (미니멀) */}
        {!isMobile && (
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '4px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              }}
            >
              {segmentTabs.map((tab, idx) => (
                <motion.div
                  key={tab.path}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => navigate(tab.path)}
                    sx={{
                      mx: 0.5,
                      px: 2.5,
                      py: 0.8,
                      borderRadius: '12px',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      color: currentTab === idx ? '#ff5733' : '#4a5568',
                      background: currentTab === idx 
                        ? 'rgba(255, 87, 51, 0.1)' 
                        : 'transparent',
                      textShadow: currentTab === idx 
                        ? '0 0 8px rgba(255, 87, 51, 0.3)' 
                        : 'none',
                      transition: 'all 0.2s ease',
                      minHeight: '32px',
                      '&:hover': {
                        background: currentTab === idx 
                          ? 'rgba(255, 87, 51, 0.15)' 
                          : 'rgba(255, 87, 51, 0.05)',
                        color: '#ff5733',
                      },
                    }}
                  >
                    {tab.label}
                  </Button>
                </motion.div>
              ))}
            </Box>
          </Box>
        )}

        {/* 우측 로그인/유저 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {isMobile && (
            <IconButton 
              size="small" 
              edge="start" 
              color="inherit" 
              onClick={handleMobileMenuOpen} 
              sx={{ 
                mr: 1,
                color: '#4a5568',
                '&:hover': { color: '#ff5733' }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {isAuthenticated ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <IconButton size="small" edge="end" onClick={handleUserMenuOpen} color="inherit">
                <Avatar
                  src={user?.user_metadata?.avatar_url}
                  sx={{ 
                    width: 32, 
                    height: 32, 
                    border: '2px solid rgba(255, 87, 51, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '2px solid rgba(255, 87, 51, 0.6)',
                      boxShadow: '0 0 12px rgba(255, 87, 51, 0.3)',
                    }
                  }}
                >
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>
            </motion.div>
          ) : (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="contained"
                onClick={() => navigate('/login')}
                sx={{
                  borderRadius: '12px',
                  px: 2.5, 
                  py: 0.8,
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  background: 'linear-gradient(135deg, #ff5733 0%, #ff4520 100%)',
                  color: '#ffffff',
                  boxShadow: '0 4px 16px rgba(255, 87, 51, 0.3)',
                  border: 'none',
                  minHeight: '32px',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ff6b4a 0%, #ff5733 100%)',
                    boxShadow: '0 6px 20px rgba(255, 87, 51, 0.4)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                로그인
              </Button>
            </motion.div>
          )}
        </Box>

        {/* 사용자 메뉴 (글래스모피즘) */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleUserMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{
            '& .MuiPaper-root': {
              borderRadius: '16px',
              mt: 1,
              backdropFilter: 'blur(20px)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          <MenuItem 
            onClick={() => { navigate(`/profile/${user?.id}`); handleUserMenuClose() }}
            sx={{ 
              fontSize: '0.9rem',
              '&:hover': { background: 'rgba(255, 87, 51, 0.1)' }
            }}
          >
            프로필
          </MenuItem>
          <MenuItem 
            onClick={handleSignOut}
            sx={{ 
              fontSize: '0.9rem',
              '&:hover': { background: 'rgba(255, 87, 51, 0.1)' }
            }}
          >
            로그아웃
          </MenuItem>
        </Menu>

        {/* 모바일 메뉴 (글래스모피즘) */}
        <Menu
          anchorEl={mobileMenuAnchorEl}
          open={Boolean(mobileMenuAnchorEl)}
          onClose={handleMobileMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          sx={{
            '& .MuiPaper-root': {
              borderRadius: '16px',
              mt: 1,
              backdropFilter: 'blur(20px)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          {segmentTabs.map((item, idx) => (
            <MenuItem
              key={item.path}
              onClick={() => { navigate(item.path); handleMobileMenuClose() }}
              sx={{ 
                fontSize: '0.9rem',
                color: currentTab === idx ? '#ff5733' : '#4a5568',
                fontWeight: currentTab === idx ? 500 : 400,
                '&:hover': { background: 'rgba(255, 87, 51, 0.1)' }
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header
