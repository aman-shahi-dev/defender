/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Navbar from "../components/Navbar"
import { useMotionValueEvent, useScroll, useTransform, motion, useMotionTemplate, useSpring } from "motion/react";

const Card = (({ feature, containerRef }) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        container: containerRef,
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
    const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
    const scaleContent = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.5])
    
    const scaleText = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.8])
    const blurText = useTransform(scrollYProgress, [0.5,1], [0,10])

    return (
        <div
            ref={ref}
            key={feature.title}
            className="grid md:grid-cols-2 gap-20 items-center justify-center md:py-40 py-10 px-5"
        >
            <motion.div
                style={{
                    filter: useMotionTemplate`blur(${blurText}px)`,
                    scale: scaleText,
                }}
                className="flex flex-col gap-5"
            >
                <h2 className="text-sm md:text-3xl font-bold">{feature.title}</h2>
                <p className="text-neutral-400 text-xs md:text-lg">{feature.description}</p>
            </motion.div>
            <motion.div
                style={{
                    y: translateContent,
                    opacity: opacityContent,
                    scale: scaleContent,
                }}
            >
                {feature.content}
            </motion.div>
        </div>
    )
});


function Home({ containerRef }) {
    const scrollRef = useRef(null);

    const features = [
            {
                title: "The Unstoppable Icon",
                description: "Engineered to conquer the world’s toughest terrain with absolute modern refinement.",
                content: (
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1736746419802-b608fa1ea070?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image-1"
                            height="500"
                            width="500"
                            className="rounded-lg"
                        />
                    </div>
                )
            },
            {
                title: "Urban Commander",
                description: "A rugged utilitarian design that commands city streets with undeniable style.",
                content: (
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1736746871486-da897d2900b6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image-2"
                            height="500"
                            width="500"
                            className="rounded-lg"
                        />
                    </div>
                )
            },
            {
                title: "Ultimate Capability",
                description: "Permanent All-Wheel Drive ensures you tackle any environment with total confidence.",
                content: (
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1667470930963-7995370bdcb4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image-3"
                            height="500"
                            width="500"
                            className="rounded-lg"
                        />
                    </div>
                )
            },
            {
                title: "Modern Sanctuary",
                description: "Functional, luxurious interior designed for supreme comfort on every extreme journey.",
                content: (
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1655468332000-18ecac4ab2c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image-4"
                            height="500"
                            width="500"
                            className="rounded-lg"
                        />
                    </div>
                )
            },
            {
                title: "Purposeful Design",
                description: "A reassuringly recognizable silhouette that is visually compelling and extremely capable.",
                content: (
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1663051096746-25aeb547145c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image-5"
                            height="500"
                            width="500"
                            className="rounded-lg"
                        />
                    </div>
                )
            },
    ]

    const imageContainerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: imageContainerRef,
        offset: ["start end", "end start"],
    })

    const backgrounds = ["#444444", "#333333", "#222222", "#111111", "#000000", "#111111"]

    const [background, setBackground] = useState(backgrounds[0])

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const finalValue = Math.floor(latest * backgrounds.length)
        setBackground(backgrounds[finalValue])
    })

  return (
    <>  
        {/* Title Container */}
        <motion.h1
            initial={{ opacity: 0, y: -30 }} // Start invisible and 50px down
            animate={{ opacity: 1, y: 20 }}  // Animate to visible and original position
            transition={{ duration: 0.8 }}
            className="text-center text-4xl font-bold font-inter tracking-widest bg-[#444444] p-2"
        >
            DEFENDER
        </motion.h1>
        {/* Main Container */}
        <motion.main 
            ref={scrollRef}
            animate={{ backgroundColor: background }}
            className="min-h-full flex-1 items-center justify-center font-jost"
            >
            <div className="flex flex-col gap-60 max-w-4xl mx-auto">
                {
                    features.map((feature) => (
                        <Card key={feature.title} feature={feature} containerRef={containerRef} />
                    ))
                }
            </div>
        </motion.main>
    </>
  )
}

export default Home
