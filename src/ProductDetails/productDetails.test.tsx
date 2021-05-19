import React from 'react'
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ProductDetails from './index';
import { ListImgLoad, ListTitleLoad, ListDescriptionLoad, LoadWrapper, LoadingAnimation, StyledImage, ListContainer, Container } from './productDetails.styles'

Enzyme.configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}));

test('it works', () => {
    const tree = renderer.create(<ListDescriptionLoad />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('it works', () => {
    const tree = renderer.create(<ListImgLoad selectedDisplay={'list'} />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('it works', () => {
    const tree = renderer.create(<ListTitleLoad />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('it works', () => {
    const tree = renderer.create(<LoadWrapper />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('it works', () => {
    const tree = renderer.create(<LoadingAnimation />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('it works', () => {
    const tree = renderer.create(<StyledImage />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('it works', () => {
    const tree = renderer.create(<ListContainer selectedDisplay={'list'} />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('it works', () => {
    const tree = renderer.create(<Container selectedDisplay={'list'} />).toJSON()
    expect(tree).toMatchSnapshot()
})

const render = (method = shallow) => method(<ProductDetails product={{
    "image": "navy_jacket.jpg",
    "title": "Adidas Men's Arsenal Soccer Windbreaker Jacket",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor doloremque molestiae totam! Dicta dolore dolores et, laudantium magnam molestias qui quo quod repudiandae sequi? Adipisci deserunt doloribus quis quos."
}} />)
it("renders one <ListContainer /> components", () => {
    const productDetailsComponent = render();
    expect(productDetailsComponent.find(ListContainer).length).toEqual(1);
});

