import styled from "styled-components"
import {useState} from "react"

interface ContainerProps{
  bgColor: string;
  borderColor : string;
}

const Container = styled.div<ContainerProps>`
	background-color : ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`

interface CircleProps{
  bgColor: string;
	borderColor?: string;
  text ?: string;
}
function Circle({bgColor, borderColor, text ="default text"} : CircleProps) {
  const [counter, setCounter] = useState<number|string>(1)
  setCounter(2)
  setCounter("아잉")
  // setCounter(true)
	return <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>{text}</Container>
}


export default Circle