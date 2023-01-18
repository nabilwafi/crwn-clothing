import Button, { BUTTON_TYPE_CLASS } from '../Button/Button'
import { CategoryItem } from '../../store/categories/categories.types'
import { ProductCardContainer, Footer, Description } from './ProductsCard.style'

import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectedCartItems } from '../../store/cart/cart.selector'
import { FC } from 'react'

type ProductsProps = {
  products: CategoryItem[]
}

const ProductsCard: FC<ProductsProps> = ({ products }: ProductsProps) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectedCartItems)

  return (
    <>
      {products.map((product) => {
        const { id, name, imageUrl, price } = product

        const addItemToCardHandler = () =>
          dispatch(addItemToCart(cartItems, product))

        return (
          <ProductCardContainer key={id}>
            <img src={imageUrl} alt={name} />

            <Footer>
              <Description name={true}>{name}</Description>
              <Description name={false}>{price}</Description>
            </Footer>

            <Button
              buttonType={BUTTON_TYPE_CLASS.inverted}
              onClick={addItemToCardHandler}>
              Add to cart
            </Button>
          </ProductCardContainer>
        )
      })}
    </>
  )
}

export default ProductsCard
