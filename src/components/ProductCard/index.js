import { AiTwotoneDelete } from "react-icons/ai";

import './index.css'


const ProductCard = props => {

  const {productDetails,deleteProduct} = props

  const {id,title, brand, imageUrl, rating, price} = productDetails

  const onClickDeleteItem = () => {
    deleteProduct(id)
  }
  return (
    <li className="product-item">
      <img src={imageUrl} alt="product" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <p className="brand">by {brand}</p>
      <div className="product-details">
        <p className="price">Rs {price}/-</p>
        <div className="rating-container">
          <p className="rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
      <AiTwotoneDelete className="delete-icon" onClick={onClickDeleteItem}/>
    </li>
  )
}



export default ProductCard