import { FC } from "react"
import { animated, useSpring } from "react-spring"
import Card from "./Card"
import CardContainer from "./CardContainer"

type AnimatedCardProps = {
  delay: number
}
const AnimatedCard: FC<AnimatedCardProps> = ({ delay }) => {
  const props = useSpring({
    from: {
      opacity: 0,
      transform: "translate3d(0px,0,0) scale(0.9) rotateZ(-10deg)",
    },
    to: {
      opacity: 1,
      transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
    },
    config: {
      delay,
      duration: 1000,
    },
  })
  return (
    <animated.div style={props}>
      <Card />
    </animated.div>
  )
}

const ReactSpringCards = () => {
  return (
    <CardContainer>
      <AnimatedCard delay={0} />
      <AnimatedCard delay={100} />
      <AnimatedCard delay={200} />
    </CardContainer>
  )
}

export default ReactSpringCards
