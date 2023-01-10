import styled, { css } from 'styled-components'

const QuantityValues = css`
  display: flex;
`

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`
const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

const ColumnNumber = styled.span`
  width: 23%;

  ${({ quantity }) => quantity && QuantityValues}
`

const ArrowButton = styled.div`
  cursor: pointer;
`

const Value = styled.div`
  margin: 0 10px;
`

const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`

export {
  ImageContainer,
  CheckoutItemContainer,
  ColumnNumber,
  RemoveButton,
  ArrowButton,
  Value,
}
