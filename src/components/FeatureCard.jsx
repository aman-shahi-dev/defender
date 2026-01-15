/* eslint-disable no-unused-vars */
import {motion} from "framer-motion"

function FeatureCard({detail}) {
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.5 }}
            className="bg-gray-600/50 w-[80px] h-[220px] rounded-lg p-4 flex-1 text-white flex flex-col gap-2 "
        >
            <h1 className="text-2xl font-bold">{detail.title}</h1>
            <h2 className="text-lg font-bold">{detail.heading}</h2>
            <h3 className="text-md text-neutral-400">{detail.description}</h3>
        </motion.div>
    )
}

export default FeatureCard