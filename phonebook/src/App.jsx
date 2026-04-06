import { useState } from 'react'
import './App.css'
import Grid from '@mui/material/Grid';
import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'
import Search from '../components/Search'

function App() {
  

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Phone Book</h1>
      <Search />
      <Grid container spacing={2}>
        <Grid size={6}>
          <ContactForm />
        </Grid>
        <Grid size={6}>
          <ContactList />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
