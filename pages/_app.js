import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import '../styles/Global.scss';
import { Provider } from 'react-redux';
import { useStore } from '../store/configureStore';

const MyApp = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>

    )
}

export { MyApp as default };