import styled from "@emotion/styled"
import Head from "next/head"
import FramerMotionCards from "../components/FramerMotionCards"
import ReactSpringCards from "../components/ReactSpringCards"

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const H1 = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`

const H2 = styled.h1`
  margin: 0;
  margin-top: 70px;
  margin-bottom: 40px;
  line-height: 1.15;
  font-size: 2.5rem;
  text-align: center;
`

export default function Home() {
  return (
    <Container>
      <Head>
        <title>React Animation Experiments</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <H1>React Animation Experiments</H1>
        <H2>Framer Motion:</H2>
        <FramerMotionCards />
        <H2>React Spring:</H2>
        <ReactSpringCards />
      </Main>
    </Container>
  )
}
