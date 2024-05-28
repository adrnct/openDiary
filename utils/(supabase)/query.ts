import { IDiary, supabase } from './supabase'

export type DiaryQuery = {
    withEmail?: string
}

export const diaryQuery = async ({ withEmail }: DiaryQuery) => {
    if (withEmail) {
        const query = await supabase.from('diary').select('*').eq('email', withEmail).order('created_at', { ascending: false })
        return query
    } else {
        const query = await supabase.from('diary').select('*').order('created_at', { ascending: false })
        return query
    }
}
