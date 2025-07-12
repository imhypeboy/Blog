export interface Author {
  name: string
  avatar?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  author: Author
  tags: string[]
  createdAt: string
  views: number
  likes: number
  readTime: string
}

export interface HeroContent {
  title: string
  subtitle: string
  primaryButtonText: string
  secondaryButtonText: string
} 