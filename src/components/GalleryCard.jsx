/* eslint-disable no-unused-vars */
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import { useRef } from "react";

function GalleryCard({detail}) {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        container: null,
        offset: ["start end", "end start"],
    });

    const translateContent = useSpring(
        useTransform(scrollYProgress, [0, 1], [-450, 500]),
        {
            stiffness: 100,
            damping: 30,
            mass: 1,
        }
    );
    return (
        <motion.div
            ref={ref}
            key={detail.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-600/20 rounded-lg py-2 px-4 text-white flex flex-col items-center gap-2"
        >
            <img src={detail.img} alt="" width='400' className="hover:scale-95 transition-all duration-300 rounded-lg"/>
            <h2 className="text-2xl font-bold">{detail.title}</h2>
        </motion.div>
    )
}

export default GalleryCard