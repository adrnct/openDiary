import CardDiaries from '@/components/global/(diary)/CardDiaries'
import Wrapper from '@/components/global/Wrapper'
import React from 'react'

export const revalidate = 0

export default function Home(): React.ReactElement {
    return (
        <Wrapper>
            <CardDiaries />
        </Wrapper>
    )
}
