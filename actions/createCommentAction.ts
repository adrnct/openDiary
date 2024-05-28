'use server'
import { getUserData } from '@/utils/clerk'
import { IComments, supabase } from '@/utils/(supabase)/supabase'
import { randomUUID } from 'crypto'
import { revalidatePath } from 'next/cache'
import { Redirect } from 'next'
import { redirect } from 'next/navigation'

export const createCommentAction = async (formData: FormData) => {
    const content = formData.get('content') as string
    const diary_id = formData.get('diary_id')
    const comment_id = randomUUID()
    const created_at = new Date().toLocaleDateString()

    const { avatar, email, username } = await getUserData()

    const data: IComments = {
        comment_id,
        avatar,
        email,
        username,
        content,
        created_at,
    }

    //cek komen terakhir
    const getComment = await supabase.from('diary').select('comments').eq('id', diary_id).single()
    const existingComment: Array<IComments> = getComment.data?.comments || []

    //tambah komen
    const newComment = [...existingComment, data]
    await supabase.from('diary').update({ comments: newComment }).eq('id', diary_id)

    revalidatePath(`/diary/${diary_id}`)
}
