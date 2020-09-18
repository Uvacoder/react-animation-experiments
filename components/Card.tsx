import styled from "@emotion/styled"
import { NextPage } from "next"

const Container = styled.div`
  width: 300px;
  padding: 40px;
  border-radius: 40px;

  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.1);
`

const H1 = styled.h1`
  margin: 0;
  margin-bottom: 20px;
`

const P = styled.p`
  margin: 0;
  line-height: 1.4;
`

const Card: NextPage = () => (
  <Container>
    <H1>Lorem Ipsum</H1>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </P>
  </Container>
)

export default Card
