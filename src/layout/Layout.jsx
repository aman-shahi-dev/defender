/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { motion } from "motion/react";

function Layout() {
  return (
     <div className="min-h-screen px-8 py-2 bg-black text-white flex flex-col font-jost">
      <Navbar />
      <motion.main 
        initial={{ 
          opacity: 0,
          blur: "10px",
        }}
        animate={{ 
          opacity: 1,
          blur: "0px",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        exit={{ 
          opacity: 0,
          blur: "10px",
        }}
        className="min-h-full flex flex-col flex-1 overflow-y-auto"
      >
        <Outlet/>
      </motion.main>
    </div>
  )
}

export default Layout