import * as React from "react"
import "./ProductDetails.css"
import axios from "axios"
import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'

export default function ProductDetails() {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=> {
        axios.get(`https://codepath-store-api.herokuapp.com/store/${id}`)
        .then(response => {
            console.log(response.data.product)
            setProduct(response.data.product)
        });
    },[]);


//   function renderDetails(){
//     if (!product) {
//         return (<h1 className="loading">Loading</h1>)
//     }else{
//         return (
//         <section className="product-detail">
//         <div className="product-view">
//             <h1 className="product-id">Product</h1>
//             <div className="product-view-card">
//                 <div className="product-card">
//                     <div className="media">
//                         <a href="/products/1"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/RKTsquares.jpg" alt="product cover" loading="lazy"/>
//                         </a>
//                     </div>
//                     <div className="product-info">
//                         <div className="main-info">
//                             <p className="product-name">Rice Krispies</p>
//                             <div className="stars">
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//         )
//     }
//  }

  return (
    <div className="productdetails">
        <h1>Product # {product.id}</h1>
        <img src={product.image} alt={product.name + 'img'}/>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
    </div>
  )
}