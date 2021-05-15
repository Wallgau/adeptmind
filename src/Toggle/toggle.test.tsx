import { PRODUCTS_DISPLAY_PROPERTIES } from '../constants';
import { ToggleProps } from './toggle.types';
import Toggle from './index';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('check Toggle display', () => {
    const toggleValues = [PRODUCTS_DISPLAY_PROPERTIES.GRID, PRODUCTS_DISPLAY_PROPERTIES.LIST];
    const toggleComponent = shallow<ToggleProps>(<Toggle onChange={jest.fn()} selectedValue="grid" values={toggleValues} />);
    it('togglesValues.length should match the amount of inputs', () => {
        expect(toggleComponent.find('.toggleInput').length).toEqual(toggleValues.length);
    })
    it('togglesValues.length should match the amount of label', () => {
        expect(toggleComponent.find('.toggleLabel').length).toEqual(toggleValues.length);
    })
});