import { useState } from 'react'
import { supabase } from '../supabaseClient'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')


  const authenticate = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <input type="email" onChange={e => setEmail(e.target.value)} value={email}/>
      <button onClick={authenticate} disabled={loading}>
        {loading ? <span>Loading</span> : <span>Send magic link</span>}
      </button>
    </div>
  )
}

export default Login


