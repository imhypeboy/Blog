import React, { useState } from 'react'
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  IconButton,
  Link,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  GitHub,
  Launch,
  Close,
  Code,
  TrendingUp,
  Star,
} from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  stats: {
    stars: number
    forks: number
    views: number
  }
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'AI 블로그 플랫폼',
    description: 'React + Supabase로 구축한 현대적인 블로그 커뮤니티',
    longDescription: 'TypeScript, React, Supabase, MUI를 활용하여 구축한 풀스택 블로그 플랫폼입니다. 실시간 댓글, 사용자 인증, 글래스모피즘 UI 등 최신 웹 기술을 적용했습니다.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
    technologies: ['React', 'TypeScript', 'Supabase', 'MUI', 'Framer Motion'],
    githubUrl: 'https://github.com/example/blog-platform',
    liveUrl: 'https://blog-platform.vercel.app',
    featured: true,
    stats: { stars: 42, forks: 12, views: 1200 }
  },
  {
    id: '2',
    title: 'E-commerce Dashboard',
    description: '관리자를 위한 실시간 대시보드 및 분석 도구',
    longDescription: 'Next.js와 Chart.js를 활용한 실시간 전자상거래 대시보드입니다. 매출 분석, 재고 관리, 고객 분석 등 다양한 기능을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    technologies: ['Next.js', 'Chart.js', 'Tailwind CSS', 'PostgreSQL'],
    githubUrl: 'https://github.com/example/ecommerce-dashboard',
    liveUrl: 'https://dashboard.example.com',
    featured: true,
    stats: { stars: 38, forks: 8, views: 890 }
  },
  {
    id: '3',
    title: 'Mobile Todo App',
    description: 'React Native로 구축한 크로스 플랫폼 할일 관리 앱',
    longDescription: 'React Native와 Expo를 사용하여 개발한 할일 관리 앱입니다. 오프라인 동기화, 푸시 알림, 다크 모드 등을 지원합니다.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
    technologies: ['React Native', 'Expo', 'SQLite', 'Redux'],
    githubUrl: 'https://github.com/example/todo-app',
    featured: false,
    stats: { stars: 25, forks: 5, views: 650 }
  },
  {
    id: '4',
    title: 'AI 이미지 생성기',
    description: 'OpenAI API를 활용한 AI 이미지 생성 웹 앱',
    longDescription: 'OpenAI DALL-E API를 활용하여 텍스트로부터 이미지를 생성하는 웹 애플리케이션입니다. 사용자 친화적인 인터페이스와 이미지 편집 기능을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    technologies: ['Vue.js', 'OpenAI API', 'Node.js', 'Express'],
    githubUrl: 'https://github.com/example/ai-image-generator',
    liveUrl: 'https://ai-images.example.com',
    featured: false,
    stats: { stars: 67, forks: 15, views: 2100 }
  },
  {
    id: '5',
    title: 'Blockchain Wallet',
    description: 'Web3 기반 암호화폐 지갑 인터페이스',
    longDescription: 'Web3.js와 MetaMask를 연동한 암호화폐 지갑 인터페이스입니다. 토큰 전송, 잔액 조회, 거래 내역 등의 기능을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop',
    technologies: ['React', 'Web3.js', 'Ethereum', 'MetaMask'],
    githubUrl: 'https://github.com/example/crypto-wallet',
    featured: false,
    stats: { stars: 33, forks: 7, views: 980 }
  },
  {
    id: '6',
    title: 'Real-time Chat App',
    description: 'Socket.IO를 활용한 실시간 채팅 애플리케이션',
    longDescription: 'Socket.IO와 Node.js를 활용한 실시간 채팅 애플리케이션입니다. 그룹 채팅, 파일 공유, 이모지 반응 등의 기능을 지원합니다.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop',
    technologies: ['Node.js', 'Socket.IO', 'React', 'MongoDB'],
    githubUrl: 'https://github.com/example/chat-app',
    liveUrl: 'https://chat.example.com',
    featured: true,
    stats: { stars: 51, forks: 11, views: 1450 }
  },
]

const PortfolioPage: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const filteredProjects = filter === 'featured' 
    ? mockProjects.filter(p => p.featured)
    : mockProjects

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  const handleCloseDialog = () => {
    setSelectedProject(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* 헤더 섹션 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #ff5733 0%, #ff4520 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            포트폴리오
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#4a5568',
              fontSize: { xs: '1rem', md: '1.25rem' },
              mb: 4,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            개발자들의 창의적인 프로젝트와 혁신적인 아이디어를 만나보세요
          </Typography>

          {/* 필터 버튼 */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 6 }}>
            <Button
              variant={filter === 'all' ? 'contained' : 'outlined'}
              onClick={() => setFilter('all')}
              sx={{
                borderRadius: '20px',
                px: 3,
                py: 1,
                textTransform: 'none',
                fontWeight: 500,
                background: filter === 'all' 
                  ? 'linear-gradient(135deg, #ff5733 0%, #ff4520 100%)'
                  : 'transparent',
                borderColor: '#ff5733',
                color: filter === 'all' ? '#fff' : '#ff5733',
                '&:hover': {
                  background: filter === 'all' 
                    ? 'linear-gradient(135deg, #ff6b4a 0%, #ff5733 100%)'
                    : 'rgba(255, 87, 51, 0.1)',
                }
              }}
            >
              전체 프로젝트
            </Button>
            <Button
              variant={filter === 'featured' ? 'contained' : 'outlined'}
              onClick={() => setFilter('featured')}
              startIcon={<Star />}
              sx={{
                borderRadius: '20px',
                px: 3,
                py: 1,
                textTransform: 'none',
                fontWeight: 500,
                background: filter === 'featured' 
                  ? 'linear-gradient(135deg, #ff5733 0%, #ff4520 100%)'
                  : 'transparent',
                borderColor: '#ff5733',
                color: filter === 'featured' ? '#fff' : '#ff5733',
                '&:hover': {
                  background: filter === 'featured' 
                    ? 'linear-gradient(135deg, #ff6b4a 0%, #ff5733 100%)'
                    : 'rgba(255, 87, 51, 0.1)',
                }
              }}
            >
              인기 프로젝트
            </Button>
          </Box>
        </Box>
      </motion.div>

      {/* 프로젝트 그리드 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <motion.div variants={cardVariants}>
                <Card
                  onClick={() => handleProjectClick(project)}
                  sx={{
                    cursor: 'pointer',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: 'rgba(255, 255, 255, 0.55)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(255, 87, 51, 0.15)',
                      background: 'rgba(255, 255, 255, 0.65)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          color: '#1a202c',
                          flex: 1,
                        }}
                      >
                        {project.title}
                      </Typography>
                      {project.featured && (
                        <Chip
                          icon={<Star />}
                          label="인기"
                          size="small"
                          sx={{
                            background: 'linear-gradient(135deg, #ff5733 0%, #ff4520 100%)',
                            color: '#fff',
                            fontWeight: 500,
                            '& .MuiChip-icon': {
                              color: '#fff',
                            },
                          }}
                        />
                      )}
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#4a5568',
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* 기술 스택 */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            background: 'rgba(255, 87, 51, 0.1)',
                            color: '#ff5733',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                      {project.technologies.length > 3 && (
                        <Chip
                          label={`+${project.technologies.length - 3}`}
                          size="small"
                          sx={{
                            background: 'rgba(74, 85, 104, 0.1)',
                            color: '#4a5568',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                          }}
                        />
                      )}
                    </Box>

                    {/* 통계 */}
                    <Box sx={{ display: 'flex', gap: 3, color: '#4a5568', fontSize: '0.875rem' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Star sx={{ fontSize: '1rem' }} />
                        <span>{project.stats.stars}</span>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Code sx={{ fontSize: '1rem' }} />
                        <span>{project.stats.forks}</span>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <TrendingUp sx={{ fontSize: '1rem' }} />
                        <span>{project.stats.views}</span>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* 프로젝트 상세 다이얼로그 */}
      <Dialog
        open={!!selectedProject}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          },
        }}
      >
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 2 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: '#1a202c' }}>
                  {selectedProject.title}
                </Typography>
                <IconButton onClick={handleCloseDialog} sx={{ color: '#4a5568' }}>
                  <Close />
                </IconButton>
              </DialogTitle>

              <DialogContent sx={{ pt: 0 }}>
                <Box sx={{ mb: 3 }}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '16px',
                    }}
                  />
                </Box>

                <Typography variant="body1" sx={{ color: '#4a5568', mb: 3, lineHeight: 1.7 }}>
                  {selectedProject.longDescription}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a202c', mb: 2 }}>
                    사용된 기술
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        sx={{
                          background: 'rgba(255, 87, 51, 0.1)',
                          color: '#ff5733',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a202c' }}>
                      {selectedProject.stats.stars}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#4a5568' }}>
                      Stars
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a202c' }}>
                      {selectedProject.stats.forks}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#4a5568' }}>
                      Forks
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a202c' }}>
                      {selectedProject.stats.views}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#4a5568' }}>
                      Views
                    </Typography>
                  </Box>
                </Box>
              </DialogContent>

              <DialogActions sx={{ p: 3, pt: 0 }}>
                <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                  {selectedProject.githubUrl && (
                    <Button
                      component={Link}
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      startIcon={<GitHub />}
                      sx={{
                        flex: 1,
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontWeight: 500,
                        borderColor: '#4a5568',
                        color: '#4a5568',
                        '&:hover': {
                          borderColor: '#ff5733',
                          color: '#ff5733',
                        },
                      }}
                    >
                      GitHub
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button
                      component={Link}
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      startIcon={<Launch />}
                      sx={{
                        flex: 1,
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontWeight: 500,
                        background: 'linear-gradient(135deg, #ff5733 0%, #ff4520 100%)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #ff6b4a 0%, #ff5733 100%)',
                        },
                      }}
                    >
                      라이브 데모
                    </Button>
                  )}
                </Box>
              </DialogActions>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog>
    </Container>
  )
}

export default PortfolioPage 