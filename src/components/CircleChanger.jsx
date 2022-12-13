import React from 'react'
import { ReactComponent as Paths } from '../Assets/svg with paths.svg'


export const DATA = [
    {
        id: 1,
        desc1: 'Developing ERP Solution for',
        desc2: 'Text Headline',
        title: 'in furniture industry'
    }
]


export const CircleChanger = () => {
    return (
        <div className='w-80 h-80 rounded-full bg-primary-dark absolute left-[40%] top-1/4 -translate-x-1/4 -translate-y-1/4'>
            <div className='absolute top-1/4 -left-8 leading-8 text-white flex flex-col'>
                <p className='desc1'>Developing ERP Solution for</p>
                <h2 className='text-4xl font-bold'>Text Headline</h2>
                <p className='self-end'>in furniture industry</p>
            </div>
            <Paths style={
                {
                    "background": "transparent"
                }
            } className='' />
        </div>
    )
}


/**
 *     left: 50%;
    top: 20%;
    transform: translate(-50%, -20%);
 * 
 */