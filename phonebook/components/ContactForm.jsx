import React, {useState} from 'react'
import { TextField, Button, Box } from '@mui/material'
import usePhoneBookStore from '../store/usePhonebookStore';

const ContactForm = () => {
    const[name, setName] = useState("");
    const[phoneNumber, setPhoneNumber] = useState("")
    const {addContact}= usePhoneBookStore()
    
    const handleAddContact =()=>{
        //연락처 저장 장소->배열 필요 phoneBook = [] 
        //연락처를 추가
        if(!name.trim() || !phoneNumber.trim()) return //이름,전화번호가 하나라도 없으면 받지 않겠다.
        //연락처를추가
        addContact(name, phoneNumber) //name,phoneNumber 을 넘긴다.
    }
  return (
    <Box display = "flex" flexDirection="column" alignItems="center" gap={2}>
        <TextField 
        id="Name" label="Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
        <TextField 
        id="Phone number" label="Phone number" variant="outlined" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
        <Button variant="contained" size='large' onClick={handleAddContact}>Add</Button>
    </Box>
  )
}

export default ContactForm