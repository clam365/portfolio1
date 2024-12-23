import React from 'react'
import "@/app/globals.css"

export default function Content() {
    return (
        <div className='bg-[#f0f0f0] py-8 px-12 h-full w-full flex flex-col justify-between' id={"footer1"}>
            <Section1 />
        </div>
    )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20' id={"footer1"}>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
                <p>Home</p>
                <p>Projects</p>
                <p>Our Mission</p>
                <p>Contact Us</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Education</h3>
                <p>News</p>
                <p>Learn</p>
                <p>Certification</p>
                <p>Publications</p>
            </div>
        </div>
    )
}