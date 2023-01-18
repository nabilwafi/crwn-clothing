import styled, { css } from 'styled-components'

import {
  GoogleButton,
  BaseButton,
  InvertedButton,
} from '../Button/Button.style'

const Name = css`
  width: 90%;
  margin-bottom: 15px;
`

const Price = css`
  width: 10%;
`

const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  ${GoogleButton},
  ${BaseButton},
  ${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    ${GoogleButton},
    ${BaseButton},
    ${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`

const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

type DescriptionProps = {
  name?: boolean
}

const Description = styled.div<DescriptionProps>`
  ${({ name }) => (name ? Name : Price)}
`
export { ProductCardContainer, Footer, Description }
