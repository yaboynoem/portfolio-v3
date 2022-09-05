import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IApp } from "Types/AppType"
import { INITIAL_STATE } from "./InitialState"

const appReducer = createSlice({
    name: "setSeePortfolio",
    initialState: INITIAL_STATE,
    reducers: {
        setSeePortfolio: (state: IApp, action: PayloadAction<boolean>) => {
            state.seePortfolio = action.payload
        },
    },
})

export const { setSeePortfolio } = appReducer.actions

export default appReducer
