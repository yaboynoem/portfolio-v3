//Components
import Base from "Containers/Base/Base"
import { Provider } from "react-redux"
import { store } from "Stores"

const App = () => {
    return (
        <Provider store={store}>
            <Base />
        </Provider>
    )
}

export default App
