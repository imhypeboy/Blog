  import React, { useState } from 'react'
  import { Box, Button, Typography, useTheme, useMediaQuery, Grid } from '@mui/material'
  import FeatureTile from '../components/Trending/FeatureTile'
  import { mockPosts } from '../data/mockData'

  const categories = ['전체', 'React', 'Supabase', 'AI', 'Design'] as const

  type Category = typeof categories[number]

  const TrendingPage: React.FC = () => {
    const [category, setCategory] = useState<Category>('전체')
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const filtered = category === '전체' ? mockPosts : mockPosts.filter(p => p.tags.includes(category))

    return (
      <Box sx={{ px: { xs: 1, md: 8 }, py: 8, display: 'flex', gap: { xs: 4, md: 10 }, flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', minHeight: '80vh' }}>
        {/* Sidebar */}
        <Box sx={{ minWidth: { md: 120 }, maxWidth: { md: 160 }, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
          <Typography variant="h1" sx={{
            fontSize: { xs: '2.5rem', md: '4.5rem' },
            lineHeight: 1,
            fontWeight: 700,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(0,0,0,0.08)',
            mb: 2,
          }}>TRENDING</Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>인기글</Typography>
          <Typography variant="body2" sx={{ color: '#4a5568', mb: 2 }}>커뮤니티에서 주목받는 최신 글을 만나보세요.</Typography>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
            {categories.map(c => (
              <Button
                key={c}
                fullWidth
                onClick={() => setCategory(c)}
                variant={category === c ? 'contained' : 'text'}
                sx={{
                  borderRadius: '12px',
                  fontWeight: 500,
                  fontSize: '1rem',
                  minWidth: 0,
                  px: 0,
                  py: 1.1,
                  background: category === c ? 'linear-gradient(135deg,#ff5733 0%,#ff4520 100%)' : 'transparent',
                  color: category === c ? '#fff' : '#1a202c',
                  boxShadow: category === c ? '0 2px 12px rgba(255,87,51,0.10)' : 'none',
                  border: 'none',
                  transition: 'all 0.18s',
                  '&:hover': {
                    background: category === c ? 'linear-gradient(135deg,#ff6b4a 0%,#ff5733 100%)' : 'rgba(255,87,51,0.06)',
                    color: '#fff', // 흰색으로 변경
                  },
                }}
              >{c}</Button>
            ))}
          </Box>
        </Box>

        {/* Grid */}
        <Grid container spacing={isMobile ? 2 : 5} sx={{ flex: 1, alignItems: 'center', justifyContent: 'center', minWidth: 0 }}>
          {filtered.map((post) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={post.id} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: { xs: '100%', sm: 340, md: 400, lg: 440 }, maxWidth: '100%' }}>
                <FeatureTile post={post} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  }

  export default TrendingPage 