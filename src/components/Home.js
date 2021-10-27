import React from 'react';
import clouds from '../clouds2.png';


export default function Home() {
    return (
        <main>
            <img src={clouds} alt="Fluffy Clouds" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8" >
                <h1 className="text-6xl text-indigo-700 font-bold cursive leading-none lg:leading-snug home-name">Hey, I'm Morgan</h1>
            </section>
        </main>
    )
}