import { Button, TextField,  } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Movie from './Movie'

const Addmovie = () => {
    
   
      var[movie,setmovie]=useState({
        MovieName:"",
        Director:"",
        Language:"",
        Genere:"",
        ReleaseYear:""
      })

        const handler =(e) => {
            const{name,value}=e.target
            setmovie({...Movie,[name]:value})
      }
      const savedata = (e)=>{
        axios.post("http://localhost:3005/Show",Movie)
        .then(Response=>{
            alert("Added")
        })
        .catch(error=>{
            alert("Failed")
        })
      }
      return(

        <div>
            <TextField name='Movie Name' variant='standard'
            label='MovieName' onChange='handler'
             value={Movie.Movie}></TextField>
             <br></br>
             <br></br>

              <TextField name='Director'  variant='standard'
            label='MovieName' onChange='handler'
             value={Movie.Movie}></TextField>
             <br></br>
             <br></br>

              <TextField name='Language' variant='standard'
            label='MovieName' onChange='handler'
             value={Movie.Movie}></TextField>
             <br></br>
             <br></br>

              <TextField name='Genere' variant='standard'
            label='MovieName' onChange='handler'
             value={Movie.Movie}></TextField>
             <br></br>
             <br></br>

              <TextField name='Release' variant='standard'
            label='MovieName' onChange='handler'
             value={Movie.Movie}></TextField>
             <br></br>
             <br></br>

             <Button variant='contained' onClick={savedata}>Submit</Button>
        </div>
  
  )
      
}

export default Addmovie
