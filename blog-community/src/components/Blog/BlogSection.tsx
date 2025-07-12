import React, { memo } from 'react'
import { Container, Box, Typography, Grid } from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import BlogCard from './BlogCard'
import { motion } from 'framer-motion'
import type { BlogSectionProps } from '../../types/post'

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
    <Container maxWidth="xl" sx={{ py: 12, mx: 'auto' }}>
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

        <Grid container spacing={5} justifyContent="center">
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: '100%', maxWidth: 420, aspectRatio: '4 / 3', display: 'flex' }}>
                <BlogCard 
                  post={post} 
                  onClick={onPostClick}
                  variants={cardVariants}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  )
})

BlogSection.displayName = 'BlogSection'

export default BlogSection 