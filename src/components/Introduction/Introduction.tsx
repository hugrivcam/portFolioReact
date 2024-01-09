import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Header } from '@/components/Header'
import React, {useState} from 'react'
//import { SiCplusplusbuilder } from 'react-icons/si'

export function Introduction() {
  const [showEmail, setShowEmail] = useState(false);
    return (        
        <div className="bg-[#131424]/60 w-full z-10">
            {/*header es el menu de arriba*/}
            <Header />
            <div className="w-full h-full bg-[#131424]/60 z-5">
              {/*el siguiente contenedor es un grid de 2 columnas si es md o lg, y una columna si es sm, si es medio o grande tiene el avatar en la primera columna*/ }
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
                        <h1 className="mb-5 md:mb-10 sm:text-2xl md:text-4xl text-justify">
                            Hugo Rivas del Campo,  <br />
                            <span className="text-secondary">Ingeniero técnico en informática de gestión desde 2004</span>
                        </h1>
                        <p className="max-w-sm mb-5 md:mb-10 sm:text-2x1 md:text-xl md:max-w-2xl md:mx-0 text-justify">
                            - Bienvenidos. Puedes revisar mi formación y experiencia laboral. También hay algunos links que permiten revisar algunas de mis prácticas realizadas en Angular.
                        </p>
        
                        <p className="max-w-sm sm:text-2x1 mb-10 md:text-xl md:max-w-2xl md:mx-0 md:mb-10 md:text-x text-justify">
                          - En la actualidad realizo el mantenimiento de la aplicación que he desarrollado para las zonas de recaudación ejecutiva de la Xunta de Galicia, aun así me encuentro totalmente disponible y con ilusión por afrontar nuevos proyectos.
                        </p>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                            {/* <a href="/projects" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-[rgb(255,0,0)]/50">
                              <span style={{color:'red'}}>Ver prácticas Angular</span>
                            </a> */}

                            {showEmail && (
                            <p className="hover:shadow-xl hover:shadow-hover:shadow-[rgb(255,0,0)]/50">
                            hugriv@gmail.com
                            </p>)}
                            <a onClick={()=>setShowEmail(!showEmail)} className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Contacta conmigo
                            </a>                          
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
