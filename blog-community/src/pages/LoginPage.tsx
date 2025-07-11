import React from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { standardMotionVariants } from '../theme/theme'

const LoginPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={standardMotionVariants}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <Card sx={{ maxWidth: 400, width: '100%', p: 2 }}>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom textAlign="center">
              로그인
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              현재 개발 중인 페이지입니다.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  )
}

export default LoginPage 