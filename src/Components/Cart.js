import React from 'react'
import { TextField,Grid, Select, MenuItem} from "@mui/material"


const Cart = () => {


  return (
    <div className="top-0 right-0 bg-white  h-full p-10 absolute z-30" >
       <div className=" md:block max-w-screen-sm border-r border-gray-200  py-6">

            <Grid>
                <Grid>
                     <div className="font-mono">
                         Client
                     </div>
                </Grid>
            <Grid >
            

                <Select className="outline-1 pl-40 placeholder:Client Name" >
                    <MenuItem >A</MenuItem>
                    <MenuItem >B</MenuItem>
                    <MenuItem >C</MenuItem>
                    </Select> 
                              
                     
            </Grid>
              </Grid>

            <Grid>
                <Grid>
                     <div className="font-mono" >
                         Date of Commencement
                     </div>
                </Grid>
                <Grid >
                    <TextField className="outline-1"  placeholder="dd/mm/yyyy" />
                </Grid>
            </Grid>

            <Grid>
                <Grid>
                     <div className="font-mono">
                         Date of Completion
                     </div>
                </Grid>
                <Grid >
                    <TextField className="outline-1"  placeholder="dd/mm/yyyy" />
                </Grid>
            </Grid>

            <Grid>
                <Grid>
                     <div className="font-mono" >
                         RFQ Code
                     </div>
                </Grid>
                <Grid >
                    <TextField className="outline-1"  placeholder="RFQ Code" />
                </Grid>
            </Grid>

            <div className="py-8">
            <button className="text-white w-24 justify-center  flex items-center 
                   rounded-md bg-gradient-to-r from-cyan-500 to-cyan-500 cursor-pointer group">
                Done
            </button>
            </div>

            

           </div> 

                 

 </div>
 
 
  )
}

export default Cart