import { useState } from 'react'
import React from 'react'
import './App.css'
import AddCategory from './components/AddCategory'
import DisplayGifs from './components/DisplayGifs';

function App() {
const [category, setCategory] = useState("");

  return (
    <div className='App'>
      <h2>Buscador de GIFS by Danixilo</h2>
      <AddCategory setCategory={setCategory}/>
      <DisplayGifs  category={category}/>
    </div>
  )
}

export default App
