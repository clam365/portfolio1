// "use client"
// import "./cursor.css"
// import {useEffect} from "react";
// import React from "react"
// import "@/app/globals.css"
//
// export const Customcursor = () => {
//     const cursorRef = React.useRef(null);
//
//     useEffect(() => {
//         document.addEventListener('mousemove', (event) => {
//             const {clientX , clientY} = event;
//             const mouseX = clientX - cursorRef.current.clientWidth / 2;
//             const mouseY = clientY - cursorRef.current.clientHeight / 2;
//             cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
//         })
//     }, []);
//
//     return <div className={"app-cursor"} id={"appCursor"} ref={cursorRef}/>;
//
// }