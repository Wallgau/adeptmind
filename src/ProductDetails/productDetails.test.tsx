import { ProductDetailsProps } from './productDetails.types';
import ProductDetails from './index';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('', () => {
    const product = {
        "image": "black_jacket.jpg",
        "title": "Adidas Men's Juventus Soccer Windbreaker Jacket",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor doloremque molestiae totam! Dicta dolore dolores et, laudantium magnam molestias qui quo quod repudiandae sequi? Adipisci deserunt doloribus quis quos."
    };
    const productDetailsComponent = shallow<ProductDetailsProps>(<ProductDetails product={product} />);
    it('', () => {
    })
});