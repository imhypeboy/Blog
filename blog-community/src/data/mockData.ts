import type { BlogPost, HeroContent } from '../types/post'

export const heroContent: HeroContent = {
  title: '함께 만드는 개발 이야기',
  subtitle: '개발자들의 경험과 지식이 모이는 곳.\n코드 너머의 스토리를 나누고 함께 성장해요.',
  primaryButtonText: '최신 글 보기',
  secondaryButtonText: '글 작성하기'
}

export const mockPosts: BlogPost[] = [
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