import { PRODUCTS_DISPLAY_PROPERTIES } from "../constants";
import Toggle from "./index";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { ToggleInput, ToggleLabel } from "./toggle.styles";

Enzyme.configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}));

const toggleValues = [
    PRODUCTS_DISPLAY_PROPERTIES.GRID,
    PRODUCTS_DISPLAY_PROPERTIES.LIST,
];

const render = (method = shallow) => method(<Toggle values={toggleValues} />);
describe("check Toggle display", () => {
    const event = {
        preventDefault() { },
        target: { value: "list" },
    };

    it("togglesValues.length should match the amount of inputs", () => {
        const toggleComponent = render();
        expect(toggleComponent.find(ToggleInput).length).toEqual(
            toggleValues.length
        );
    });

    it("togglesValues.length should match the amount of label", () => {
        const toggleComponent = render();
        expect(toggleComponent.find(ToggleLabel).length).toEqual(
            toggleValues.length
        );
    });

    it("togglesValue to be called with list", () => {
        //@ts-ignore
        const toggleComponent = render(mount);
        toggleComponent.find('input[value="list"]').simulate("change", event);
        expect(mockDispatch).toBeCalledWith({
            type: "setStorageView",
            view: "list",
        });
    });
});