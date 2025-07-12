import React, { memo } from 'react'
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Chip, 
  Avatar 
} from '@mui/material'
import { motion } from 'framer-motion'
import type { BlogPost } from '../../types/post'

interface BlogCardProps {
  post: BlogPost
  onClick?: (post: BlogPost) => void
  variants?: any
}

const BlogCard: React.FC<BlogCardProps> = memo(({ post, onClick, variants }) => {
  const handleClick = () => {
    onClick?.(post)
  }

  const TagChips = () => (
    <Box sx={{ mb: 3 }}>
      {post.tags.slice(0, 2).map((tag, tagIndex) => (
        <Chip
          key={tagIndex}
          label={tag}
          size="small"
          sx={{
            mr: 1,
            mb: 1,
            backgroundColor: 'rgba(255, 87, 51, 0.1)',
            color: '#ff5733',
            border: '1px solid rgba(255, 87, 51, 0.2)',
            fontWeight: 500,
          }}
        />
      ))}
      {post.tags.length > 2 && (
        <Chip
          label={`+${post.tags.length - 2}`}
          size="small"
          sx={{
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            color: '#6366f1',
            border: '1px solid rgba(99, 102, 241, 0.2)',
          }}
        />
      )}
    </Box>
  )

  const AuthorInfo = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          sx={{ 
            width: 32, 
            height: 32, 
            mr: 1,
            backgroundColor: '#ff5733',
            fontSize: '0.9rem',
          }}
        >
          {post.author.name.charAt(0)}
        </Avatar>
        <Box>
          <Typography variant="caption" sx={{ fontWeight: 500, color: '#1a202c' }}>
            {post.author.name}
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', color: '#718096' }}>
            {post.createdAt}
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{ textAlign: 'right' }}>
        <Typography variant="caption" sx={{ color: '#718096', display: 'block' }}>
          조회 {post.views.toLocaleString()}
        </Typography>
        <Typography variant="caption" sx={{ color: '#718096' }}>
          좋아요 {post.likes}
        </Typography>
      </Box>
    </Box>
  )

  return (
    <motion.div variants={variants}>
      <Card
        className="glassmorphism-card"
        onClick={handleClick}
        sx={{
          height: '100%',
          cursor: 'pointer',
          overflow: 'hidden',
          position: 'relative',
          borderRadius: '24px',
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(255,255,255,0.3)',
          boxShadow: '0 12px 32px rgba(255, 87, 51, 0.25)',
          transition: 'all 0.35s ease',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            zIndex: -1,
            background:
              'linear-gradient(135deg, rgba(255, 148, 114, 0.5) 0%, rgba(242, 112, 156, 0.4) 50%, rgba(202, 165, 236, 0.4) 100%)',
            filter: 'blur(40px)',
            opacity: 0.25,
          },
          '&:hover': {
            boxShadow: '0 16px 40px rgba(255, 87, 51, 0.35)',
            transform: 'translateY(-4px)',
            '& .card-image': { transform: 'scale(1.07)' },
          },
        }}
        role="button"
        tabIndex={0}
        aria-label={`블로그 포스트: ${post.title}`}
      >
        {/* 이미지 섹션 */}
        <Box
          sx={{
            position: 'relative',
            height: '55%',
            minHeight: 180,
            overflow: 'hidden',
          }}
        >
          <Box
            className="card-image"
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${post.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.4s ease',
            }}
            role="img"
            aria-label={post.title}
          />
          <Box
            className="card-overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(255, 87, 51, 0.06) 0%, rgba(99, 102, 241, 0.06) 100%)',
            }}
          />
          
          {/* 읽기 시간 배지 */}
          <Chip
            label={post.readTime}
            size="small"
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#4a5568',
              fontWeight: 500,
              backdropFilter: 'blur(8px)',
            }}
          />
        </Box>

        <CardContent
          sx={{
            p: 3,
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <Typography 
            variant="h6" 
            component="h3"
            sx={{ 
              fontWeight: 600,
              mb: 2,
              lineHeight: 1.3,
              color: '#1a202c',
              fontSize: '1.1rem',
            }}
          >
            {post.title}
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              mb: 3,
              lineHeight: 1.6,
              color: '#4a5568',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.excerpt}
          </Typography>

          <TagChips />
          <AuthorInfo />
        </CardContent>
      </Card>
    </motion.div>
  )
})

BlogCard.displayName = 'BlogCard'

export default BlogCard 