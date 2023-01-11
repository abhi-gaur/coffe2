import React, { useState } from 'react'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import Cart from "./Cart";

const Navbar = () => {

    const [open , setOpen]=useState(false)

  return (
    <div className="flex justify-between items-center">

        <h2 className="mt-5 font-bold"><ArrowBackIosOutlinedIcon style={{ fontsize: 2 }} />Create Workorder</h2>
        <div className="px-8 py-7 flex flex-col ">
        <button className="text-white w-24 justify-center  flex items-center 
                   rounded-md bg-gradient-to-r from-cyan-500 to-cyan-500 cursor-pointer" onClick={() =>setOpen(!open)} >Save</button>
        {open && <Cart/>}
      </div>
      
      
    </div>
  )
}

export default Navbar