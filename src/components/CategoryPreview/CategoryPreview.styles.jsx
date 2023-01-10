import styled from 'styled-components'

const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

const Title = styled.span`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`
const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`
export { CategoryPreviewContainer, Title, Preview }
