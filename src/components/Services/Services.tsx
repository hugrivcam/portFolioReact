"use client"
import { fadeIn } from "@/utils/motionTransitions";
import { AvatarWorks } from "../AvatarWorks/AvatarWorks";
//import { Circle } from "../Circle";
import { motion } from 'framer-motion'
import { Slider } from "./Slider";
import { servicesData } from "./Services.data";

//export function Services() {

export function Training() {
    return (
        <div className="flex items-center md:justify-center h-screen">
            {/*<Circle />*/}
            <AvatarWorks />
            <div className = "flex flex-col">
              <div className="flex flex-wrap flex-row md:flex-row gap-x-20 mt-10 md:mt-40 mb-1">

                  <div className="flex flex-col text-center md:text-left mb-5 md:mb-0 ">
                      <motion.h1 className=" mb-4 text-3xl" variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden">
                        Mis <span className="text-secondary">Habilidades:</span>
                      </motion.h1> 
                      <div className = "text-sm md:text-xl">
                          {servicesData.map((item, index) => (
                            <motion.p
                            key = {index}
                            variants={fadeIn('left', 0.5)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="max-w-md"> {(index + 1)  + ". " + item.title}
                            </motion.p>                    
                          ))}
                      </div>
                  </div>

                  <div className="flex flex-col text-center md:text-left text-sm md:txt-xl">
                      <motion.h1 className="mb-4 text-3xl" variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                          Mi <span className="text-secondary">Formación:</span>
                      </motion.h1>
                      <motion.p
                          variants={fadeIn('up', 0.5)}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="max-w-md text-xs md:text-normal"
                          style={{ textAlign: "justify",color: "gray"}}> A partir de 1998 he cursado FP superior en Informática de Gestión y ESEI (Escuela superior de Ingeniería informática). Tengo un recorrido profesional de más de 20 años. Actualmente estoy realizando varios cursos de programación web que me permiten explorar el desarrollo web "full-stack".
                      </motion.p>                    
                  </div>      
    
              </div>
              <motion.div
                variants={fadeIn('up', 0.7)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
              <Slider />                
              </motion.div>                    
            </div>
        </div>
    )
}
