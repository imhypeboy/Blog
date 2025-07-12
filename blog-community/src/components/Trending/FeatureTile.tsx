import React from 'react'
import { Box, Typography, Chip, useMediaQuery, useTheme } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import type { BlogPost } from '../../types/post'
import { motion, AnimatePresence } from 'framer-motion'

interface FeatureTileProps {
  post: BlogPost
  onClick?: (post: BlogPost) => void
}

const FeatureTile: React.FC<FeatureTileProps> = ({ post, onClick }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [hovered, setHovered] = React.useState(false)

  return (
    <Box
      onClick={() => onClick?.(post)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: '20px',
        aspectRatio: '4 / 3',
        backgroundImage: `url(${post.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'transform 0.4s cubic-bezier(.4,1.6,.4,1)',
        boxShadow: hovered ? '0 8px 32px rgba(255,87,51,0.13)' : '0 2px 8px rgba(30,41,59,0.06)',
        '&:hover': { transform: 'scale(1.035)' },
      }}
    >
      {/* dark overlay for readability */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(0deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.0) 70%)',
        zIndex: 1
      }} />

      {/* 상단 제목/아이콘 (기본) */}
      <Typography
        variant="h6"
        sx={{
          position: 'absolute',
          top: 28,
          left: 32,
          color: '#fff',
          fontWeight: 700,
          fontSize: '1.18rem',
          lineHeight: 1.4,
          zIndex: 2,
          opacity: hovered && !isMobile ? 0 : 1,
          transition: 'opacity 0.3s',
          textShadow: '0 2px 8px rgba(0,0,0,0.18)',
        }}
      >
        {post.title}
      </Typography>
      <Box sx={{ position: 'absolute', top: 28, right: 32, zIndex: 2, opacity: hovered && !isMobile ? 0 : 1, transition: 'opacity 0.3s' }}>
        <AddIcon sx={{ color: '#fff' }} />
      </Box>

      {/* Hover 오버레이 */}
      <AnimatePresence>
        {(hovered || isMobile) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.22)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              borderRadius: '20px',
              padding: '32px 24px',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#ff5733',
                fontWeight: 800,
                mb: 2,
                textAlign: 'center',
                textShadow: '0 2px 12px rgba(255,87,51,0.10)',
                px: 2,
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.7rem' },
                lineHeight: 1.3,
              }}
            >
              {post.title}
            </Typography>
            {post.summary && (
              <Typography
                variant="body1"
                sx={{
                  color: '#1a202c',
                  mb: 2.5,
                  textAlign: 'center',
                  px: 2,
                  lineHeight: 1.7,
                  fontWeight: 500,
                  maxHeight: 70,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: { xs: '0.98rem', sm: '1.08rem' },
                }}
              >
                {post.summary}
              </Typography>
            )}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', mt: 1 }}>
              {post.tags?.slice(0, 3).map(tag => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    background: 'rgba(255,87,51,0.13)',
                    color: '#ff5733',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    px: 1.2,
                  }}
                />
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default FeatureTile 