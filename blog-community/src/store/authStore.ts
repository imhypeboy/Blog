import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@supabase/supabase-js'
import type { User as ProfileUser } from '../types/database'

interface AuthState {
  // 상태
  user: User | null
  profile: ProfileUser | null
  isLoading: boolean
  isAuthenticated: boolean
  
  // 액션
  setUser: (user: User | null) => void
  setProfile: (profile: ProfileUser | null) => void
  setLoading: (loading: boolean) => void
  signOut: () => void
  
  // 계산된 값
  isInitialized: boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, _get) => ({
      // 초기 상태
      user: null,
      profile: null,
      isLoading: true,
      isAuthenticated: false,
      isInitialized: false,
      
      // 액션
      setUser: (user) => set((state) => ({
        user,
        isAuthenticated: !!user,
        isLoading: false,
        isInitialized: true,
      })),
      
      setProfile: (profile) => set({ profile }),
      
      setLoading: (isLoading) => set({ isLoading }),
      
      signOut: () => set({
        user: null,
        profile: null,
        isAuthenticated: false,
        isLoading: false,
      }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        profile: state.profile,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
) 