import { Row } from "antd"
import AnimatedText from "Components/AnimatedText"
import SeePortfolio from "Components/SeePortfolio"
import { EColor } from "Constants/Colors"
import { motion } from "framer-motion"
import React, { ReactElement } from "react"
import { useSelector } from "react-redux"
import { TRootState } from "Types/RootStateType"
import { ContainerStyle, TextWrapperStyle, ReactIconStyle } from "./Base.styles"

//Icons
import ReactIcon from "Assets/Icons/logo.svg"
import FramerMotionIcon from "Assets/Icons/framer-motion.webp"

const PreviewContainer: React.FC = (): ReactElement => {
    const { seePortfolio } = useSelector((state: TRootState) => state.app)

    return (
        <ContainerStyle>
            <motion.div
                initial={{
                    x: 0,
                }}
                animate={{
                    x: seePortfolio ? "-50vw" : 0,
                    transition: {
                        duration: 3,
                        type: "spring",
                    },
                }}
            >
                <TextWrapperStyle
                    initial="hidden"
                    animate="visible"
                    transition={{
                        staggerChildren: 0.025,
                    }}
                >
                    <AnimatedText tag="h1" text="KHAIRUL NAIM" />
                    <AnimatedText tag="h3" text="PORTFOLIO" />
                </TextWrapperStyle>
                <SeePortfolio />
            </motion.div>
            <motion.div
                animate={{
                    x: seePortfolio ? "100vw" : 0,
                    transition: {
                        duration: 3,
                        type: "spring",
                    },
                }}
            >
                <motion.h3
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        duration: 1.5,
                        delay: 1,
                    }}
                    style={{
                        margin: 0,
                        color: EColor.WHITE,
                    }}
                >
                    Powered By
                </motion.h3>
                <Row>
                    <ReactIconStyle
                        initial={{
                            x: 50,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                        }}
                        src={ReactIcon}
                        width={225}
                    />
                    <motion.img
                        initial={{
                            x: 50,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            type: "spring",
                            duration: 1.5,
                            delay: 1,
                        }}
                        src={FramerMotionIcon}
                        width={130}
                        style={{
                            marginTop: "15px",
                        }}
                    />
                </Row>
            </motion.div>
        </ContainerStyle>
    )
}

export default PreviewContainer
