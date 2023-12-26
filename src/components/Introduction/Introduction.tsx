import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SiCplusplusbuilder } from 'react-icons/si'

export function Introduction() {
    return (
        <div className="bg-[#131424]/60 w-full z-10">
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
                <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src="/assets/avatar2_peca_grande.png" priority width="500" height="600" alt="Avatar" />
                    </motion.div>

                    <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h1 className="mb-5 text-4xl leading-tight md:mb-5">Hugo Rivas del Campo,  <br />
                            <span className="text-secondary">Ingeniero en informática de gestión desde 2004</span>
                        </h1>
                        <p className="max-w-sm  mb-10 text-xl md:max-w-2xl md:mx-0 md:mb-10 md:text-xl text-justify">
                            - Bien venidos a mi portfolio. Os presento mi experiencia laboral así como mi formación, adjuntando links que permiten revisar algunas pruebas de mis últimas prácticas realizadas en Angular. Gracias por su interés.
                        </p>
                        
                        <p className="max-w-sm  mb-10 text-xl md:max-w-2xl md:mx-0 md:mb-10 md:text-x text-justify">
                            - Mi situación laboral actual es que por decisión tomada desde la ATRIGA (Xunta de galicia), han decidido cerrar las oficinas progresivamente para las que yo trabajo, por lo que ahora me encuentro disponible 100% en el mercado laboral, renovado y con nueva ilusión por afrontar nuevos proyectos.
                        </p>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                            <a href="/projects" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-[rgb(255,0,0)]/50">
                              <span style={{color:'red'}}>Ver prácticas Angular</span>
                            </a>
                            <a href="/contact" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Contacta conmigo
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
