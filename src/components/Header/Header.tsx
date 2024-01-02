"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialNetworks } from './dataHeader'

export function Header() {
    //inline-block
    return (
        
        <div className='w-full top-5 md:top-5'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container justify-between mx-auto md:flex">
                    <Link href="/">
                        <h1 className="my-3 text-4xl text-center text-white md:text-lef">Hug
                            <span className="text-secondary">Riv</span>
                        </h1>
                    </Link>
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-7">
                        {socialNetworks.map(({ logo, src,desc }) => (
                            <Link key={src} href={src} target="_blank" className="transition-all duration-300 hover:text-secondary justify-center">
                                {logo}
                                <span className="text-xs md:text-base">{desc}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
