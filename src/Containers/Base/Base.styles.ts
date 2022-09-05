import styled from "styled-components"
import { motion } from "framer-motion"

//Constants
import { EColor } from "Constants/Colors"

export const BaseStyle = styled.div`
    overflow: hidden;
    max-height: 100vh;
`

export const PreviewStyle = styled.div`
    background-color: ${EColor.CHAMPAGNE};
    padding: ${({ theme }) => (theme.expand ? 0 : 100)}px;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(${({ theme }) => (theme.expand ? "0" : "-100%")});
    transition: padding 1s ease-in-out, transform 0s ease-in-out 1s;
`

export const FullContainerStyle = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${EColor.MIDNIGHT_BLUE};
    transform: translateY(${({ theme }) => (theme.expand ? "0" : "-100%")});
    transition: transform 0s ease-in-out 1s;
`

export const ContainerStyle = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    font-size: calc(10px + 5vmin);
    color: ${EColor.WHITE};
    background-color: ${EColor.MIDNIGHT_BLUE};
    padding: 50px;
`

export const TextWrapperStyle = styled(motion.div)`
    overflow: hidden;
    h1,
    h3 {
        margin: 0;
        color: ${EColor.WHITE};
    }
`

export const ReactIconStyle = styled(motion.img)`
    margin-left: -50px;
`

export const ImageWrapperStyle = styled.div`
    height: calc(100vh - 200px);
`

export const MeStyle = styled.img`
    height: 120vh;
`
