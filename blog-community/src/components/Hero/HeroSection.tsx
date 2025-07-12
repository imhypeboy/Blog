import React from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import CodeIcon from '@mui/icons-material/Code'
import { textSubtleGlow } from '../../theme/theme'
import type { HeroContent } from '../../types/post'

interface HeroSectionProps {
  content: HeroContent
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  content, 
  onPrimaryClick, 
  onSecondaryClick 
}) => {
  const { scrollY } = useScroll()
  
  // 패럴랙스 효과 (subtle)
  const heroY = useTransform(scrollY, [0, 500], [0, 50])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.8])

  const decorativeElements = (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'rgba(255, 87, 51, 0.1)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'rgba(99, 102, 241, 0.1)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
    </>
  )

  return (
    <motion.div style={{ y: heroY, opacity: heroOpacity }}>
      <Box
        className="full-width"
        sx={{
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: `radial-gradient(circle at 0% 50%, rgba(255, 87, 51, 0.05) 0%, transparent 70%),
                       radial-gradient(circle at 100% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 70%),
                       linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)`,
          py: { xs: 10, md: 16 },
        }}
      >
        {/* 글래스모피즘 배경 장식 */}
        {decorativeElements}

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', px: { xs: 2, md: 6 }, width: { xs: '100%', md: '95vw' }, maxWidth: 1400 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 3,
                color: '#1a202c',
                letterSpacing: '-0.02em',
              }}
            >
              {content.title.split(' ').slice(0, 2).join(' ')}{' '}
              <Box component="span" sx={{ color: '#ff5733', ...textSubtleGlow }}>
                {content.title.split(' ').slice(2).join(' ')}
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: '#4a5568',
                fontWeight: 400,
                mb: 6,
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.4rem' },
                maxWidth: 900,
                mx: 'auto',
                whiteSpace: 'pre-line',
              }}
            >
              {content.subtitle}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={onPrimaryClick}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #ff5733 0%, #ff4520 100%)',
                  color: '#ffffff',
                  boxShadow: '0 8px 24px rgba(255, 87, 51, 0.3)',
                  border: 'none',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ff6b4a 0%, #ff5733 100%)',
                    boxShadow: '0 12px 32px rgba(255, 87, 51, 0.4)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {content.primaryButtonText}
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={onSecondaryClick}
                startIcon={<CodeIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  borderRadius: '16px',
                  color: '#4a5568',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(12px)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderColor: 'rgba(255, 87, 51, 0.3)',
                    color: '#ff5733',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {content.secondaryButtonText}
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  )
}

export default HeroSection 