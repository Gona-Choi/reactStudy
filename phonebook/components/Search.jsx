import React from 'react'
import { TextField } from '@mui/material'
import usePhoneBookStore from '../store/usePhonebookStore'

const Search = () => {
  const {keyword, setKeyword} = usePhoneBookStore()
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
            label="Search"
            variant="standard"
            width="500px"
            color="success"
            sx={{marginBottom:"2rem", width:"500px"}}
            value={keyword}
            onChange={(event)=>setKeyword(event.target.value)}
        />
    </div>
  )
}

export default Search