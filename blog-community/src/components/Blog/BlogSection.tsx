import React, { memo } from 'react'
import { Container, Typography, Box, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import type { BlogPost } from '../../types/post'
import BlogCard from './BlogCard'

interface BlogSectionProps {
  posts: BlogPost[]
  title?: string
  onPostClick?: (post: BlogPost) => void
}

const BlogSection: React.FC<BlogSectionProps> = memo(({ 
  posts, 
  title = '트렌딩 아티클',
  onPostClick 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 8, justifyContent: 'center' }}>
          <TrendingUpIcon sx={{ color: '#ff5733', mr: 2, fontSize: '2rem' }} />
          <Typography 
            variant="h3" 
            component="h2"
            sx={{ 
              fontWeight: 600,
              color: '#1a202c',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            {title}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <BlogCard 
                post={post} 
                onClick={onPostClick}
                variants={cardVariants}
              />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  )
})

BlogSection.displayName = 'BlogSection'

export default BlogSection 