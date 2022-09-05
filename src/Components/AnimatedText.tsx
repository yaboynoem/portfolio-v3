import React, { ReactElement } from "react"
import { motion } from "framer-motion"

interface IProps {
    tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    text: string
}

const AnimatedText: React.FC<IProps> = (props): ReactElement => {
    const { tag, text } = props

    const item = {
        hidden: {
            y: "200%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
        },
        visible: {
            y: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
        },
    }

    const words: string[] = text.split(" ").map((word) => {
        return word + "\u00A0"
    })

    const Tag = tag as keyof JSX.IntrinsicElements

    return (
        <Tag style={{ lineHeight: 1 }}>
            {words.map((word, index) => {
                return word.split("").map((letter, index) => {
                    return (
                        <span
                            style={{
                                overflow: "hidden",
                                display: "inline-block",
                            }}
                            key={index}
                        >
                            <motion.span style={{ display: "inline-block" }} variants={item}>
                                {letter}
                            </motion.span>
                        </span>
                    )
                })
            })}
        </Tag>
    )
}

export default AnimatedText
