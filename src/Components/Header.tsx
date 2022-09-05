import React, { ReactElement } from "react"
import styled from "styled-components"

import MyLogo from "Assets/Icons/my_logo_v1.png"
import { Space, Typography } from "antd"
import { EColor } from "Constants/Colors"
import { motion } from "framer-motion"

const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
`

const LogoStyle = styled.div`
    display: flex;
    align-items: center;

    & h2 {
        margin: 0 0 0 1rem;
        color: ${EColor.WHITE};
        font-family: "Oswald";
    }
`

const MenuStyle = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

    & li {
        float: left;
    }

    & li a {
        font-family: "Oswald";
        font-size: 1.2rem;
        display: block;
        color: white;
        text-align: center;
        padding: 16px;
        text-decoration: none;
    }
`

const Header: React.FC = (): ReactElement => {
    const MotionHeader = motion(HeaderStyle)
    const MotionLogo = motion(LogoStyle)
    const MotionMenu = motion(MenuStyle)

    const menuItems = [
        {
            name: "About",
        },
        {
            name: "Projects",
        },
        {
            name: "Contact",
        },
    ]

    return (
        <MotionHeader
            initial={{
                y: "-8vh",
            }}
            animate={{
                y: 0,
            }}
            transition={{
                type: "spring",
                duration: 0.5,
                delay: 1,
            }}
        >
            <MotionLogo
                initial={{
                    x: "-15vw",
                }}
                animate={{
                    x: 0,
                }}
                transition={{
                    type: "spring",
                    duration: 0.5,
                    delay: 1.25,
                }}
            >
                <img src={MyLogo} width={40} />
                <Typography.Title level={2}>KHAIRUL NAIM</Typography.Title>
            </MotionLogo>
            <MotionMenu>
                {menuItems.map((item, index) => (
                    <motion.li
                        initial={{
                            x: "15vw",
                        }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            type: "spring",
                            duration: 0.5,
                            delay: 1.25 + index * 0.25,
                        }}
                    >
                        <Typography.Link>{item.name}</Typography.Link>
                    </motion.li>
                ))}
            </MotionMenu>
        </MotionHeader>
    )
}

export default Header
