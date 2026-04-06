import React from 'react'
import usePhoneBookStore from '../store/usePhonebookStore'
import { Box } from '@mui/material';

const ContactList = () => {
    const {phoneBook, keyword} = usePhoneBookStore(); //phoneBook, keyword를 같이 가져올 거야
    const filteredList = phoneBook.filter((item)=>
    item.name.toLowerCase().includes(keyword.toLowerCase()) ||
    item.phoneNumber.includes(keyword)
)
    console.log(phoneBook)
  return (
    <div>
        <Box display = "flex" flexDirection="column" alignItems="center" gap={2}>
        {filteredList.map((item,index)=>(
        <Box
            key={item.id}
            width="300px"
            borderBottom={index !== phoneBook.length - 1 ? "1px solid gray" : "none"}
            padding={1}
    >
                <p>{item.name}</p>
                <p>{item.phoneNumber}</p>
            </Box>
        ))}
        </Box>
    </div>
  )
}

export default ContactList;