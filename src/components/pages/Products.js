  
import React from 'react';
import '../../App.css'
import {SliderData} from '../data/SliderData'
import Hero from '../Hero';
import HeroSection from '../HeroSection';
import Cards from '../Cards'
import Footer from '../Footer';

function Products(){
  return (
    <>
      <Hero slides={SliderData}/>
      

    </>
  )
}

export default Products;

/* 
export default function Products() {
  return (
    <h1 className='products'>PRODUCTS</h1>
    
  )
} */