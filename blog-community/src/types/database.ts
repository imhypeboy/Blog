export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          username: string
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          username: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          username?: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      posts: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string | null
          featured_image: string | null
          category: string | null
          tags: string[] | null
          status: 'draft' | 'published' | 'archived'
          author_id: string
          views: number
          likes: number
          created_at: string
          updated_at: string
          published_at: string | null
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt?: string | null
          featured_image?: string | null
          category?: string | null
          tags?: string[] | null
          status?: 'draft' | 'published' | 'archived'
          author_id: string
          views?: number
          likes?: number
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string | null
          featured_image?: string | null
          category?: string | null
          tags?: string[] | null
          status?: 'draft' | 'published' | 'archived'
          author_id?: string
          views?: number
          likes?: number
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
      }
      comments: {
        Row: {
          id: string
          content: string
          post_id: string
          author_id: string
          parent_id: string | null
          likes: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          content: string
          post_id: string
          author_id: string
          parent_id?: string | null
          likes?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          content?: string
          post_id?: string
          author_id?: string
          parent_id?: string | null
          likes?: number
          created_at?: string
          updated_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          type: 'comment' | 'like' | 'follow' | 'mention'
          message: string
          user_id: string
          sender_id: string | null
          related_id: string | null
          read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          type: 'comment' | 'like' | 'follow' | 'mention'
          message: string
          user_id: string
          sender_id?: string | null
          related_id?: string | null
          read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          type?: 'comment' | 'like' | 'follow' | 'mention'
          message?: string
          user_id?: string
          sender_id?: string | null
          related_id?: string | null
          read?: boolean
          created_at?: string
        }
      }
      rooms: {
        Row: {
          id: string
          name: string
          description: string | null
          type: 'public' | 'private'
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          type?: 'public' | 'private'
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          type?: 'public' | 'private'
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          content: string
          room_id: string
          sender_id: string
          reply_to: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          content: string
          room_id: string
          sender_id: string
          reply_to?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          content?: string
          room_id?: string
          sender_id?: string
          reply_to?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// 편의성을 위한 타입 별칭
export type User = Database['public']['Tables']['users']['Row']
export type Post = Database['public']['Tables']['posts']['Row']
export type Comment = Database['public']['Tables']['comments']['Row']
export type Notification = Database['public']['Tables']['notifications']['Row']
export type Room = Database['public']['Tables']['rooms']['Row']
export type Message = Database['public']['Tables']['messages']['Row']

export type InsertUser = Database['public']['Tables']['users']['Insert']
export type InsertPost = Database['public']['Tables']['posts']['Insert']
export type InsertComment = Database['public']['Tables']['comments']['Insert']
export type InsertNotification = Database['public']['Tables']['notifications']['Insert']
export type InsertRoom = Database['public']['Tables']['rooms']['Insert']
export type InsertMessage = Database['public']['Tables']['messages']['Insert']

export type UpdateUser = Database['public']['Tables']['users']['Update']
export type UpdatePost = Database['public']['Tables']['posts']['Update']
export type UpdateComment = Database['public']['Tables']['comments']['Update']
export type UpdateNotification = Database['public']['Tables']['notifications']['Update']
export type UpdateRoom = Database['public']['Tables']['rooms']['Update']
export type UpdateMessage = Database['public']['Tables']['messages']['Update'] 