import React from 'react'
import Content from './content';

export default function Footer() {
    return (
        <div
            className='relative h-[500px]'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
            id={"contact"}
        >
            <div className='relative h-[calc(100vh+500px)] -top-[100vh]'>
                <div className='h-[400px] sticky top-[calc(100vh-400px)]'>
                    <Content />
                </div>
            </div>
        </div>
    )
}