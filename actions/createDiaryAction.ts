'use server'

import { redirect } from 'next/navigation'
import { getUserData } from '@/utils/clerk'
import { supabase, IDiary } from '@/utils/(supabase)/supabase'
import { randomUUID } from 'crypto'

/**
 !REQUIREMENTS OF DIARY TABLES:
    USER: email, username?, avatar
    DIARY: content, comments?
 */

export const createDiaryAction = async (formData: FormData): Promise<void> => {
    const content = formData.get('content') as string
    const { avatar, email, username } = await getUserData()
    const randomID = randomUUID()
    const created_at = new Date()

    const image: File = formData.get('image') as File
    const FileName = image.name
    const { error } = await supabase.storage.from('images').upload(FileName, image)
    if (error) {
        console.log(error)
    }
    return
    // const diaryData: IDiary = { content, email, username, avatar, diary_image, randomID }
    // console.log(diaryData)
    // await supabase.from('diary').insert(diaryData)

    // redirect('/dashboard/my-diary')
}
