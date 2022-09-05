import { Action } from "redux"

export interface IApp {
    seePortfolio: boolean
}

export enum ETypesName {
    SET_SEE_PORFTOLIO = "SET_SEE_PORFTOLIO",
}

export type TSetSeePortfolio = Action<ETypesName.SET_SEE_PORFTOLIO> & {
    seePortfolio: boolean
}
