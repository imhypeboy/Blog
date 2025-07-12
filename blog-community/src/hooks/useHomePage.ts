import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { BlogPost } from '../types/post'
import { mockPosts, heroContent } from '../data/mockData'

export const useHomePage = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  // 페이지 로드 시 애니메이션 트리거
  useEffect(() => {
    setIsVisible(true)
    
    // 실제 프로덕션에서는 API 호출
    const loadPosts = async () => {
      try {
        // 가짜 로딩 시간 (실제로는 API 응답 시간)
        await new Promise(resolve => setTimeout(resolve, 500))
        setPosts(mockPosts)
      } catch (error) {
        console.error('Failed to load posts:', error)
        // 에러 처리
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  // 버튼 클릭 핸들러
  const handleViewLatestPosts = useCallback(() => {
    // 스크롤을 트렌딩 섹션으로 부드럽게 이동
    const trendingSection = document.querySelector('#trending-section')
    if (trendingSection) {
      trendingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [])

  const handleCreatePost = useCallback(() => {
    navigate('/create')
  }, [navigate])

  const handlePostClick = useCallback((post: BlogPost) => {
    navigate(`/post/${post.id}`)
  }, [navigate])

  return {
    isVisible,
    posts,
    loading,
    heroContent,
    handlers: {
      handleViewLatestPosts,
      handleCreatePost,
      handlePostClick
    }
  }
} 