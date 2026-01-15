/* eslint-disable no-unused-vars */
import FeatureCard from "../components/FeatureCard"
import {motion} from "framer-motion"

function Features() {

  const features = [
    {
      title: 'Intelligent Terrain Response',
      heading: 'Adapt to Any Terrain',
      description: 'With Terrain Response 2, the Defender automatically analyzes the driving conditions and adjusts the engine, gearbox, and differentials to maintain traction. From mud to snow, it thinks before you drive.',
    },
    {
      title: 'ClearSight Ground View',
      heading: 'Invisible Hood Technology.',
      description: 'Cameras in the front grille project a view of the terrain directly under the vehicle onto your touchscreen. Navigate tight rocks or city curbs with zero blind spots.'
    },
    {
      title: 'Pivi Pro Infotainment',
      heading: 'Always Connected.',
      description: 'An 11.4-inch floating touchscreen interface that is always on and always connected. With over-the-air software updates, the vehicle gets smarter as it ages.',
    },
  ]

  return (
    <div className='flex w-full flex-1 gap-4 items-center flex-col p-10 gap-10'>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mt-10 mb-10"
      >
        Features of Defender
      </motion.h1>
      <div className="flex flex-col gap-10 w-full items-center justify-center flex-wrap md:flex-row">
      {
        features.map((feature) => (
          <FeatureCard key={feature.title} detail={feature} />
        ))
      }
      </div>
    </div>
  )
}

export default Features