import React from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { standardMotionVariants } from '../theme/theme'

const ProfilePage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={standardMotionVariants}
    >
      <Box sx={{ py: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              사용자 프로필
            </Typography>
            <Typography variant="body1" color="text.secondary">
              현재 개발 중인 페이지입니다.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  )
}

export default ProfilePage 