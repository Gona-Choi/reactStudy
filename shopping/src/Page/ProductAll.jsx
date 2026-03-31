import { useEffect, useState } from "react"
import React from 'react'


const ProductAll = () => {
    const [productList, setProductList] = useState([])
    const getProducts=async()=>{
        let url = `http://localhost:4000/products/`
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data)
    }
    useEffect(()=>{
        getProducts()
    },[])

  return (
    <div>
        <h1>전체상품페이지</h1>
    </div>
  )
}

export default ProductAll