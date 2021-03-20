import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Global.scss';
import '../styles/variables/Colors.scss';
import '../styles/variables/Typography.scss';
import '../styles/variables/Spacing.scss';
import '../styles/variables/Grid.scss';
import '../styles/styles.scss';
import "../styles/sections/Homepage-section.scss";
import "../styles/sections/General-section.scss";
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