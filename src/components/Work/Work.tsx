"use client"
import { fadeIn } from "@/utils/motionTransitions"
import { AvatarWorks } from "../AvatarWorks/AvatarWorks"
//import { Circle } from "../Circle"
import { motion } from 'framer-motion'
import { cardContent } from "./Work.data"
import { useState } from "react"

export function Work() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const handleClick = (index: number) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: "410px",
            opacity: 1
        },
        collapsed: {
            width: "180px",
            opacity: 0.5
        }
    }

    return (
        <div className="h-screen">
            <AvatarWorks />
            
            <div className="grid pb-32 md:min-h-screen mt-28 md:mt-2 place-items-center lg:mt-2">
                <div>
                    <motion.h1
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="my-5 text-2xl text-center md:text-4-xl"
                    >Mis proyectos <span className="text-secondary"> destacables</span>
                    </motion.h1>
                    <motion.div
                        className="flex flex-col items-center h-full gap-5 px-2 md:flex-row"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {cardContent.map(({ id, title, imageUrl, description, skills }) => (
                            <motion.div key={id}
                                className={`card cursor-pointer h-[400px] bg-auto bg-no-repeat bg-center rounded-[20px] ${id === expandedIndex && 'expanded'}`}
                                initial={{ opacity: 1 }}
                                variants={cardVariants}
                                animate={id === expandedIndex ? 'expanded' : 'collapsed'}
                                exit={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.5 }}
                                onClick={() => handleClick(id)}
                                style={{
                                    backgroundImage: `url(/assets/${imageUrl})`
                                }}
                            >
                                <div className="flex flex-col justify-end h-full lg:mt-5 md:mt-5 sm:mt-0">
                                    <div className="card-footer rounded-b-[20px] bg-blue-800 bg-opacity-90 flex flex-col items-center justify-center p-2">
                                        <h2 className="text-xl font-semibold text-center text-white"
                                        dangerouslySetInnerHTML={{ __html: title }}/>
                                        {id === expandedIndex && (
                                            <>
                                                <p className="text-sm" dangerouslySetInnerHTML={{ __html: description }}/>
                                                <div className="flex gap-5 mt-3" style = {{color:'orange'}}>                                                
                                                    {skills.map((data, index) => (
                                                        <p key={index}>{data.icon}</p>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {/*<Circle />*/}
        </div>
    )
}
