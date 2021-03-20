import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/_Global.scss';
import '../styles/variables/_Colors.scss';
import '../styles/variables/_Typography.scss';
import '../styles/variables/_Spacing.scss';
import '../styles/variables/_Grid.scss';
import '../styles/styles.scss';
import "../styles/sections/_Homepage-section.scss";
import "../styles/sections/_General-section.scss";
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