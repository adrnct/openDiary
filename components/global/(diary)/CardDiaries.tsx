import React from 'react'
import PostContent from './PostContent'
import LikesButton from '../(button)/LikesButton'
import { getUserData } from '@/utils/clerk'
import ShareButton from '../(button)/ShareButton'
import { CgComment } from 'react-icons/cg'
import Link from 'next/link'
import { supabase } from '@/utils/(supabase)/supabase'

const CardDiaries = async (): Promise<React.ReactElement> => {
    const { email } = await getUserData()
    const { data, error } = await supabase.from('diary').select().order('created_at', { ascending: false })

    if (error) return <p>please reload the page</p>
    return (
        <div>
            {data.map((diary) => {
                return (
                    <div key={diary.id} className='relative border-b-2 border-gray-700'>
                        <div id={diary.id}>
                            <PostContent
                                key={diary.id}
                                diary_id={diary.id}
                                avatar={diary.avatar}
                                content={diary.content}
                                email={diary.email}
                                username={diary.username}
                                diary_image={diary.diary_image}
                                created_at={diary.created_at}
                            />
                        </div>
                        <div className='flex items-center absolute ml-20 mb-3 -bottom-2 gap-2'>
                            <LikesButton email={email} diary={diary} />
                            <ShareButton diary_id={diary.id} />
                            <Link href={`/diary/${diary.id}`}>
                                <CgComment />
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardDiaries