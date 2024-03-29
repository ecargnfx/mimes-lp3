import Image from 'next/image'
import React from 'react';
import VideoCompareSlider from '../components/VideoCompareSlider';
import Email from '../components/Email';
import Autotype from '../components/Autotype';
import { Roboto } from 'next/font/google'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/twitter'
import 'react-social-icons/instagram'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 pr-10 pl-10 pb-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center pb-4 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
          <Image
            src="/mimes-logo.svg"
            alt="Mimes.ai Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </p>
      </div>
      <div className='flex w-full flex-col justify-center p-0 sm:p-5 text-center md:w-full md:text-center mt-10 sm:mt-0'>
        <h1 className={`${roboto.className} my-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center`}><span className="bg-gradient-to-tr from-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">Animate</span> Your World</h1>
        <p className={`${roboto.className} mb-8 text-xl sm:text-2xl md:text-3xl leading-normal`}>Build 3D Animated Scenes with AI</p>
        
        <Email/>
      </div>       
      <div className='relative flex justify-center rounded-xl border border-gray-600 w-full lg:w-2/3 overflow-hidden'>       
        <VideoCompareSlider />
        <div className="absolute top-0 flex justify-center text-center rounded-xl border-t border-black bg-gray-700 bg-opacity-50 text-white p-2 lg:p-4 ">
          <Autotype 
            text="A  girl in a metallic bodysuit with geometric black rabbits" 
          />
        </div>           
      </div>
      <div className="flex justify-center items-center space-x-4 mt-10">
        <SocialIcon bgColor="transparent" fgColor="gray" url="https://twitter.com/mimes_ai" />
        <SocialIcon bgColor="transparent" fgColor="gray" url="https://instagram.com/mimes_ai" />
      </div>    
    </main>
  )
}
