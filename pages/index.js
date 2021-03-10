import Layout from "../components/Layout";
import HomePage from "../components/HomePage";

const Home = () => {
    return (
        <Layout content={<HomePage />} />
    )
}

export { Home as default };
