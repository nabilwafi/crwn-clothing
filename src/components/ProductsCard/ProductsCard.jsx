import React, { useContext } from 'react'
import Button, { BUTTON_TYPE_CLASS } from '../Button/Button'
import { ProductCardContainer, Footer, Description } from './ProductsCard.style'
import { CartContext } from '../../context/CartContext'

const ProductsCard = ({ products }) => {
  const { addItemToCart } = useContext(CartContext)

  return products.map((product) => {
    const { id, name, imageUrl, price } = product
    const addItemToCardHandler = () => addItemToCart(product)

    return (
      <ProductCardContainer key={id}>
        <img src={imageUrl} alt={name} />

        <Footer>
          <Description name>{name}</Description>
          <Description>{price}</Description>
        </Footer>

        <Button
          buttonType={BUTTON_TYPE_CLASS.inverted}
          onClick={addItemToCardHandler}>
          Add to cart
        </Button>
      </ProductCardContainer>
    )
  })
}

export default ProductsCard
