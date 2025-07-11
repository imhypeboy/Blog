import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dummy.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'dummy_key_for_development'

// 개발 모드에서는 경고만 출력
if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn('⚠️ Supabase 환경 변수가 설정되지 않음 - 개발 모드로 실행 중')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// 타입 안전성을 위한 헬퍼 함수들
export const getUser = () => supabase.auth.getUser()
export const getSession = () => supabase.auth.getSession()
export const signOut = () => supabase.auth.signOut()

// 실시간 구독을 위한 헬퍼
export const subscribeToTable = <T>(
  table: string,
  callback: (payload: any) => void,
  filters?: string
) => {
  const channel = supabase
    .channel(`${table}-changes`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table,
        filter: filters
      },
      callback
    )
    .subscribe()

  return () => supabase.removeChannel(channel)
} 