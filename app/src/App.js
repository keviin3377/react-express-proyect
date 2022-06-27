import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import port from './../port';

//components
import Home from './components/Navbar';
import About from './components/ProductsList';

console.log(port);

function App(){

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:PORT/api/products")
    .then(res => setProducts(res.data))
    .catch(err => console.log(err));
  } 