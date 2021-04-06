import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import App from "../../pages/index";

it("renders without crashing", () => {
    shallow(<App />);
});

