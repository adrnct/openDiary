import React from 'react'
import Wrapper from '@/components/global/Wrapper'

const loading = (): React.ReactElement => {
    return (
        <Wrapper title='Loading...'>
            <div className=' flex justify-center items-center'>
                <span className='loading loading-ball loading-lg'></span>
            </div>
        </Wrapper>
    )
}

export default loading
