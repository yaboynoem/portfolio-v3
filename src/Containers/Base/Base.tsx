import React, { ReactElement } from "react"

//Styles
import { BaseStyle, PreviewStyle, FullContainerStyle } from "./Base.styles"
import { useSelector } from "react-redux"
import { TRootState } from "Types/RootStateType"
import FullContainer from "../FullContainer/FullContainer"
import PreviewContainer from "./PreviewContainer"

const Base: React.FC = (): ReactElement => {
    const { seePortfolio } = useSelector((state: TRootState) => state.app)

    return (
        <BaseStyle>
            <FullContainerStyle theme={{ expand: seePortfolio }}>
                <FullContainer />
            </FullContainerStyle>
            <PreviewStyle theme={{ expand: seePortfolio }}>
                <PreviewContainer />
            </PreviewStyle>
        </BaseStyle>
    )
}

export default Base
