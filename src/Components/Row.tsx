import React, { ReactElement } from "react"
import styled from "styled-components"

interface IProps {
    children?: React.ReactNode
}

const RowStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    padding: 10px;
`

const Row: React.FC<IProps> = (props): ReactElement => {
    const { children } = props

    return <RowStyle>{children}</RowStyle>
}

export default Row
