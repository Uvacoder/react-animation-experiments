import styled from "@emotion/styled"

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;

  & > * + * {
    margin-left: 50px;
  }
`

export default CardContainer
