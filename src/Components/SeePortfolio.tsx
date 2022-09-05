import React, { ReactElement, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { RightOutlined } from "@ant-design/icons"
import { Col, Progress, Row } from "antd"
import { EColor } from "Constants/Colors"
import { useDispatch } from "react-redux"
import { setSeePortfolio } from "Stores/App/Slices"

const BaseStyle = styled(motion.div)`
    margin-top: 50px;
    cursor: pointer;
    display: inline-block;
    align-items: center;
    padding: 5px;

    & p {
        margin: 15% 0 0 0;
        color: ${EColor.WHITE};
        font-size: 2rem;
        font-weight: bold;
    }
`

const ProgressStyle = styled(Progress)`
    margin-left: 10px;

    & span.anticon-right {
        color: ${EColor.WHITE};
        font-size: 1.5rem !important;
    }
`

const SeePortfolio: React.FC = (): ReactElement => {
    const dispatch = useDispatch()
    const [progressValue, setProgressValue] = useState<number>(0)

    const handleOnClick = () => {
        dispatch(setSeePortfolio(true))
    }

    return (
        <BaseStyle
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                type: "spring",
                duration: 1.5,
            }}
            whileHover="hover"
            onHoverStart={() => {
                setProgressValue(100)
            }}
            onHoverEnd={() => {
                setProgressValue(0)
            }}
            onClick={handleOnClick}
        >
            <Row align="middle">
                <Col>
                    <p>See Portfolio</p>
                </Col>
                <Col>
                    <ProgressStyle
                        type="circle"
                        percent={progressValue}
                        format={() => <RightOutlined />}
                        width={50}
                        strokeWidth={10}
                        strokeColor={EColor.WHITE}
                        trailColor="none"
                    />
                </Col>
            </Row>
        </BaseStyle>
    )
}

export default SeePortfolio
