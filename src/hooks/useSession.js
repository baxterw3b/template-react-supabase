import { useEffect } from 'react'
import { useStore } from '../stores/store'
import { supabase } from "../supabaseClient"

const useSession = () => {
  const {session, setSession} = useStore()

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_, session) => {
      setSession(session)
    })
  }, [setSession])

  return session
}

export default useSession