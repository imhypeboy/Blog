import React from 'react'
import { Box, CircularProgress, Container, Typography } from '@mui/material'
import HeroSection from '../components/Hero/HeroSection'
import BlogSection from '../components/Blog/BlogSection'
import { useHomePage } from '../hooks/useHomePage'

/**
 * 홈페이지 컴포넌트
 * - 히어로 섹션과 트렌딩 블로그 포스트 목록을 표시
 * - 글래스모피즘 디자인 적용
 * - 반응형 레이아웃 지원
 */
const HomePage: React.FC = () => {
  const { 
    posts, 
    loading, 
    heroContent, 
    handlers 
  } = useHomePage()

  // 로딩 상태 컴포넌트
  const LoadingState = () => (
    <Container maxWidth="lg" sx={{ py: 12, textAlign: 'center' }}>
      <CircularProgress sx={{ color: '#ff5733', mb: 2 }} />
      <Typography variant="body1" sx={{ color: '#4a5568' }}>
        최신 글을 불러오고 있습니다...
      </Typography>
    </Container>
  )

  // 에러 상태 컴포넌트 (posts가 빈 배열일 때)
  const EmptyState = () => (
    <Container maxWidth="lg" sx={{ py: 12, textAlign: 'center' }}>
      <Typography variant="h6" sx={{ color: '#4a5568', mb: 2 }}>
        아직 게시된 글이 없습니다
      </Typography>
      <Typography variant="body2" sx={{ color: '#718096' }}>
        첫 번째 개발 이야기를 작성해보세요!
      </Typography>
    </Container>
  )

  return (
    <Box 
      sx={{ 
        overflow: 'hidden', 
        background: 'transparent',
        minHeight: '100vh'
      }}
      role="main"
      aria-label="홈페이지"
    >
      {/* 히어로 섹션 */}
      <HeroSection
        content={heroContent}
        onPrimaryClick={handlers.handleViewLatestPosts}
        onSecondaryClick={handlers.handleCreatePost}
      />

      {/* 트렌딩 섹션 */}
      <section id="trending-section" aria-labelledby="trending-title">
        {loading ? (
          <LoadingState />
        ) : posts.length > 0 ? (
          <BlogSection
            posts={posts}
            title="트렌딩 아티클"
            onPostClick={handlers.handlePostClick}
          />
        ) : (
          <EmptyState />
        )}
      </section>
    </Box>
  )
}

export default HomePage 