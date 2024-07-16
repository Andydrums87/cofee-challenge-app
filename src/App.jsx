import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import Header from './components/Header';
import CardBody from './components/CardBody';
import Card from "./components/Card"



function App() {
  
  return (
    <div>
     <Header />
     <CardBody />
    </div>
    
  )
}

export default App