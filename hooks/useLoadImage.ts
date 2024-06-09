import { Song } from "@/types"
import { useSupabaseClient } from "@supabase/auth-helpers-react"

const useLoadImage = (song: Song) => {
  const supabaseCLient = useSupabaseClient()
  if(!song) {
    return null
  }

  const {data: imgaeData} = supabaseCLient
  .storage
  .from('images')
  .getPublicUrl(song.image_path)

 return imgaeData.publicUrl 
}

export default useLoadImage