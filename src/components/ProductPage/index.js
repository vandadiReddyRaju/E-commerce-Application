import {Component} from "react"

import ProductCard from  "./components/ProductCard"

import Header from '../Header'

import './index.css'

const initialProducts = [
    {
        id:1,
      "title": "Wireless Bluetooth Headphones",
      "brand": "XYZ Electronics",
      "imageUrl": "https://example.com/headphones.jpg",
      "rating": 4.5,
      "price": "$49.99"
    },
    {
        id:2,
      "title": "Smartphone Case",
      "brand": "ABC Accessories",
      "imageUrl": "https://example.com/smartphone_case.jpg",
      "rating": 4.0,
      "price": "$9.99"
    },
    {
        id:3,
      "title": "Stainless Steel Water Bottle",
      "brand": "Hydrate Co.",
      "imageUrl": "https://example.com/water_bottle.jpg",
      "rating": 4.8,
      "price": "$19.99"
    },
    {
        id:4,
      "title": "Wireless Gaming Mouse",
      "brand": "GameTech",
      "imageUrl": "https://example.com/gaming_mouse.jpg",
      "rating": 4.7,
      "price": "$39.99"
    }
  ]
  

class Products extends Component{

    state = {products :initialProducts }

    deleteProduct = (id) => {
        const {products} = this.state
        const updatedList = products.filter(eachItem => eachItem.id !== id)

        this.setState({products:updatedList})
    }
  
    render(){

        const {products} = this.state
        return(
            <>
    <Header />
    <div className="product-sections">
        {products.map( eachProduct => (
            <ProductCard key={eachProduct.id} productDetails={eachProduct}/>
        ))}
    </div>
  </>
        )
    }
}

export default Products
