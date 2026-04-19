import React, { useEffect, useState } from 'react'
import axiosInstance from './Axios'
import {Box, Button, Typography} from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextForm from '../form/TextForm';
import SelectForm from '../form/SelectForm';
import MultiSelectForm from '../form/MultiSelectForm';
import DescriptionForm from '../form/DescriptionForm';
import {useFormik} from 'formik';
import * as yup from 'yup';
import MyMessage from '../form/Message';
import { useNavigate, useParams } from 'react-router';

const Delete = () => {
    const MyParameter = useParams()
    const MyId = MyParameter.id
    const [message, setMessage] = useState([])
     const navigate = useNavigate();

    const [myData, setMyData] = useState({
            name: "",
            description: "",
            country:"",
            league:"",
            attendance:0,
            city:"",
            characteristic:[],
     })

     
  const GetData = () => {
      axiosInstance.get(`footballclub/${MyId}`).then((res) => {
          setMyData(res.data)
      })
      
    }

     useEffect(() => {
      GetData()
     },[])

    const DeleteRecord = (event) => {
        event.preventDefault()
        axiosInstance.delete(`footballclub/${MyId}/`)
        .then(()=>{
            setMessage(
                 <MyMessage
                     messageText={"You have successfully deleted data in the database!"}
                     messagecolor={"green"}
                 />
            )
            setTimeout(()=>{
                navigate('/')
            },1500)
        })
    }

  return (
    <div>
        <form onSubmit={DeleteRecord}>
        {message}
        <Box className="TopBar">
            <AddBoxIcon />
            <Typography sx={{marginLeft:'15px', fontHeight:'bold'}} varinat='subtitle2'>Are you sure that you want to delete this record?</Typography>
        </Box>

        <Box className="TextBox">
            <Typography>
                  You will bw deleting the club <strong>{myData.name}</strong> from <strong>{myData.city}</strong>.
            </Typography>
        </Box>

        <Box sx={{marginTop: '30px'}}>
            <Button type="submit" variant='contained' fullWidth>Delete</Button>
        </Box>
        </form>
    </div>
  )
}

export default Delete
