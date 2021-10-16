import * as React from "react"
import { store } from './store/store'
import { Provider } from 'react-redux'

const ProviderElement = ({ element, props }) => {
    return (
        <Provider store={store}>
            {element}
        </Provider>
    )
}

export { ProviderElement }