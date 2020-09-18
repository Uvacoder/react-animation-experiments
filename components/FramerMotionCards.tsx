import { motion } from "framer-motion"
import { FC } from "react"
import Card from "./Card"
import CardContainer from "./CardContainer"

type AnimatedCardProps = {
  delay: number
}
const AnimatedCard: FC<AnimatedCardProps> = ({ delay }) => (
  <motion.div
    initial={{ scale: 0.9, rotate: -10, opacity: 0 }}
    animate={{ scale: 1, rotate: 0, opacity: 1 }}
    transition={{
      delay,
      duration: 1,
      ease: "easeOut",
    }}
  >
    <Card />
  </motion.div>
)

const FramerMotionCards = () => (
  <CardContainer>
    <AnimatedCard delay={0} />
    <AnimatedCard delay={0.1} />
    <AnimatedCard delay={0.2} />
  </CardContainer>
)

export default FramerMotionCards
