import React from 'react'
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
  Grid,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import { motion } from 'framer-motion'

const team = [
  {
    name: '홍길동',
    role: 'Founder & Frontend',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    github: 'https://github.com/example1',
  },
  {
    name: '김개발',
    role: 'Backend & Infra',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    github: 'https://github.com/example2',
  },
  {
    name: '이디자인',
    role: 'UI/UX Designer',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    github: 'https://github.com/example3',
  },
]

const faqs = [
  {
    q: '누구나 가입할 수 있나요?',
    a: '네! 개발에 관심 있는 누구나 자유롭게 가입하고 글을 작성할 수 있습니다.'
  },
  {
    q: '글 작성/수정은 어떻게 하나요?',
    a: '로그인 후 우측 상단의 "글 작성" 버튼을 통해 새 글을 작성할 수 있습니다. 본인이 작성한 글은 언제든 수정/삭제 가능합니다.'
  },
  {
    q: '포트폴리오 등록은 어떻게 하나요?',
    a: '포트폴리오 메뉴에서 "프로젝트 등록" 버튼을 통해 자신의 프로젝트를 소개할 수 있습니다.'
  },
  {
    q: '문의는 어디로 하나요?',
    a: '아래 이메일 또는 깃허브 이슈를 통해 언제든 문의해 주세요.'
  },
]

const AboutPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* 소개 섹션 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card
          sx={{
            borderRadius: '24px',
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            mb: 6,
          }}
        >
          <CardContent>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2, color: '#ff5733' }}>
              About
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1a202c' }}>
              함께 만드는 개발 이야기, Blog Community
            </Typography>
            <Typography variant="body1" sx={{ color: '#4a5568', lineHeight: 1.7 }}>
              개발자들의 경험과 지식, 그리고 성장 스토리가 모이는 공간입니다. <br />
              자유롭게 글을 쓰고, 포트폴리오를 공유하며, 서로의 성장을 응원하세요!
            </Typography>
          </CardContent>
        </Card>
      </motion.div>

      {/* 팀/운영진 섹션 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#1a202c' }}>
          운영진
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {team.map(member => (
            <Grid item xs={12} sm={4} key={member.name}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar src={member.avatar} alt={member.name} sx={{ width: 80, height: 80, mx: 'auto', mb: 1.5, boxShadow: '0 2px 12px rgba(255,87,51,0.12)' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{member.name}</Typography>
                <Typography variant="body2" sx={{ color: '#4a5568', mb: 1 }}>{member.role}</Typography>
                <Link href={member.github} target="_blank" rel="noopener" sx={{ color: '#ff5733', fontWeight: 500 }}>
                  <GitHubIcon sx={{ fontSize: 20, mr: 0.5, verticalAlign: 'middle' }} />GitHub
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* 연락처 섹션 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#1a202c' }}>
          문의
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon sx={{ color: '#ff5733' }} />
            <Link href="mailto:contact@blogcommunity.com" sx={{ color: '#4a5568', fontWeight: 500 }}>
              contact@blogcommunity.com
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <GitHubIcon sx={{ color: '#ff5733' }} />
            <Link href="https://github.com/example/blog-community" target="_blank" rel="noopener" sx={{ color: '#4a5568', fontWeight: 500 }}>
              GitHub
            </Link>
          </Box>
        </Box>
      </motion.div>

      <Divider sx={{ mb: 6 }} />

      {/* FAQ 섹션 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#1a202c' }}>
          자주 묻는 질문 (FAQ)
        </Typography>
        {faqs.map((item, idx) => (
          <Accordion key={idx} sx={{ mb: 2, borderRadius: '16px', background: 'rgba(255,255,255,0.6)', boxShadow: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 500 }}>{item.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: '#4a5568' }}>{item.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </motion.div>
    </Container>
  )
}

export default AboutPage 