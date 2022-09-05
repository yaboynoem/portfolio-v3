import { Layout } from "antd"
import Header from "Components/Header"
import React, { ReactElement } from "react"

const FullContainer: React.FC = (): ReactElement => {
    return (
        <Layout>
            <Header />
            <main></main>
            <footer></footer>
        </Layout>
    )
}

export default FullContainer
