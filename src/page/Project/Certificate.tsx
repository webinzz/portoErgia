import { motion } from "motion/react"

import {certificates} from "./Data"

function CertificateList() {
  return (
    <div className="grid w-screen md:grid-cols-3 gap-5 space-y-6  md:p-16 p-4 pt-10 md:py-10  " >
        {certificates.map((certifikat) => (
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{ duration: 0.5 }}
              className="group col-span-1 flex items-end  h-72 rounded   relative    dark:bg-slate-900  text-slate-500 shadow-lg overflow-hidden bg-[url(/img/mountains.jpg)] bg-cover bg-center "
              style={{ backgroundImage: `url(${certifikat.bg})`,
               }}
            > 
            <div className=" w-full h-full  bg-gradient-to-b from-transparent dark:to-slate-900 to-white flex flex-col justify-end p-4">
                <p  className="text-2xl font-extrabold text-slate-700 dark:text-slate-100">{certifikat.title}</p>
                <p  className="text-lg dark:text-slate-100 ">{certifikat.description}</p>
            </div>
        
            </motion.div>
        ))}
    </div>
  )
}

export default CertificateList