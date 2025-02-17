import {Song} from '@/types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const getSongsByUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  })

  const {data: seesionData, error: seesionError} = await supabase.auth.getSession()

  if(seesionError) {
    console.log(seesionError.message)
  }

  const {data, error} = await supabase
  .from('songs')
  .select('*')
  .eq('user_id', seesionData.session?.user.id)
  .order('created_at', {ascending: false})

  if(error) {
    console.log(error.message)
  }

  return (data as any) || []
}

export default getSongsByUserId