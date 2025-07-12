import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import TrendingPage from './pages/TrendingPage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import PostPage from './pages/PostPage'
import CreatePostPage from './pages/CreatePostPage'
import ChatPage from './pages/ChatPage'
import ProfilePage from './pages/ProfilePage'
import { useAuthStore } from './store/authStore'
import { supabase } from './lib/supabase'
import { standardMotionVariants } from './theme/theme'

function App() {
  const { setUser, setLoading } = useAuthStore()

  useEffect(() => {
    // 초기 세션 확인
    const initializeAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setUser(session?.user ?? null)
      } catch (error) {
        console.error('Auth initialization error:', error)
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()

    // 인증 상태 변화 리스너
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [setUser, setLoading])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
        backgroundAttachment: 'fixed',
      }}
    >
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={standardMotionVariants}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/create" element={<CreatePostPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
          </Routes>
        </Layout>
      </motion.div>
    </Box>
  )
}

export default App 