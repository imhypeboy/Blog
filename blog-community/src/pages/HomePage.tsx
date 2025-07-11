import React, { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Avatar,
  useTheme,
  Container,
  Button,
  IconButton,
} from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import CodeIcon from '@mui/icons-material/Code'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { glassStyles, subtleGlow, textSubtleGlow } from '../theme/theme'

const HomePage: React.FC = () => {
  const theme = useTheme()
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  // 패럴랙스 효과 (subtle)
  const heroY = useTransform(scrollY, [0, 500], [0, 50])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.8])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // 개선된 더미 데이터 (이미지 포함)
  const mockPosts = [
    {
      id: '1',
      title: 'React와 Supabase로 풀스택 개발의 미래',
      excerpt: '차세대 웹 개발 스택을 활용하여 확장 가능한 애플리케이션을 구축하는 방법을 알아보세요. 실시간 데이터베이스부터 인증까지...',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop&auto=format',
      author: {
        name: '김개발',
        avatar: '',
      },
      tags: ['React', 'Supabase', 'Full-Stack'],
      createdAt: '2024-01-15',
      views: 2847,
      likes: 156,
      readTime: '8분',
    },
    {
      id: '2',
      title: '모던 웹 디자인 시스템 구축하기',
      excerpt: '일관성 있고 확장 가능한 디자인 시스템을 만들어보세요. 컴포넌트 라이브러리부터 스타일 가이드까지...',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop&auto=format',
      author: {
        name: '박디자인',
        avatar: '',
      },
      tags: ['UI/UX', 'Design System', 'CSS'],
      createdAt: '2024-01-14',
      views: 1923,
      likes: 98,
      readTime: '6분',
    },
    {
      id: '3',
      title: 'TypeScript 고급 패턴으로 코드 품질 향상',
      excerpt: '타입 안전성과 개발 생산성을 극대화하는 TypeScript의 고급 기능들을 실전 예제와 함께 마스터해보세요...',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop&auto=format',
      author: {
        name: '이시니어',
        avatar: '',
      },
      tags: ['TypeScript', 'Best Practices', 'Architecture'],
      createdAt: '2024-01-13',
      views: 3421,
      likes: 187,
      readTime: '12분',
    },
    {
      id: '4',
      title: 'AI 기반 개발 도구로 생산성 2배 늘리기',
      excerpt: 'GitHub Copilot, ChatGPT, 그리고 최신 AI 도구들을 활용하여 개발 워크플로우를 혁신하는 실용적인 방법들...',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&auto=format',
      author: {
        name: '최AI',
        avatar: '',
      },
      tags: ['AI', 'Productivity', 'Tools'],
      createdAt: '2024-01-12',
      views: 4156,
      likes: 234,
      readTime: '10분',
    },
    {
      id: '5',
      title: '마이크로서비스 아키텍처 실전 가이드',
      excerpt: '대규모 애플리케이션을 위한 마이크로서비스 설계부터 배포까지. Docker, Kubernetes, API Gateway를 활용한...',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&auto=format',
      author: {
        name: '정클라우드',
        avatar: '',
      },
      tags: ['Microservices', 'DevOps', 'Architecture'],
      createdAt: '2024-01-11',
      views: 2789,
      likes: 145,
      readTime: '15분',
    },
    {
      id: '6',
      title: '웹 성능 최적화: 로딩 속도 3초 → 0.5초',
      excerpt: '실제 프로젝트에서 적용한 성능 최적화 기법들을 공개합니다. 코드 스플리팅, 이미지 최적화, CDN 활용까지...',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&auto=format',
      author: {
        name: '한성능',
        avatar: '',
      },
      tags: ['Performance', 'Optimization', 'Web Vitals'],
      createdAt: '2024-01-10',
      views: 3654,
      likes: 201,
      readTime: '9분',
    }
  ]

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
    <Box sx={{ overflow: 'hidden', background: 'transparent' }}>
      {/* wrtn.io 스타일 풀 브리드 히어로 섹션 */}
      <motion.div style={{ y: heroY, opacity: heroOpacity }}>
        <Box
          className="full-width"
          sx={{
            minHeight: '75vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
            py: { xs: 10, md: 16 },
          }}
        >
          {/* 글래스모피즘 배경 장식 */}
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

          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 3,
                  color: '#1a202c',
                  letterSpacing: '-0.02em',
                }}
              >
                Your First AI{' '}
                <Typography
                  component="span"
                  sx={{
                    fontStyle: 'italic',
                    color: '#ff5733',
                    ...textSubtleGlow,
                  }}
                >
                  Begins Here
                </Typography>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#4a5568',
                  fontWeight: 400,
                  mb: 6,
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.4rem' },
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                최신 기술 트렌드와 실무 경험이 만나는 곳.<br />
                개발자들과 함께 미래를 코딩하세요.
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
                  최신 글 보기
                </Button>
                <Button
                  variant="outlined"
                  size="large"
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
                  startIcon={<CodeIcon />}
                >
                  글 작성하기
                </Button>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </motion.div>

      {/* 트렌딩 섹션 (글래스모피즘 카드) */}
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
              sx={{ 
                fontWeight: 600,
                color: '#1a202c',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              트렌딩 아티클
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {mockPosts.map((post, index) => (
              <Grid item xs={12} md={6} lg={4} key={post.id}>
                <motion.div variants={cardVariants}>
                  <Card
                    className="glassmorphism-card"
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      position: 'relative',
                      '&:hover': {
                        '& .card-image': {
                          transform: 'scale(1.05)',
                        },
                        '& .card-overlay': {
                          opacity: 1,
                        }
                      },
                    }}
                  >
                    {/* 이미지 섹션 */}
                    <Box
                      sx={{
                        position: 'relative',
                        height: 200,
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
                      />
                      <Box
                        className="card-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(255, 87, 51, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
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

                    <CardContent sx={{ p: 3 }}>
                      <Typography 
                        variant="h6" 
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

                      {/* 태그들 */}
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

                      {/* 작성자 및 메타 정보 */}
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
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default HomePage 