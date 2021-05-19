import { PRODUCTS_DISPLAY_PROPERTIES } from '../constants';
import { ToggleProps } from './toggle.types';
import { Provider } from 'react-redux';
import store from '../core/store';
import Toggle from './index';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('check Toggle display', () => {
    const mockFn = jest.fn();
    const event = {
        preventDefault() { },
        target: { value: 'list' }
    };
    const toggleValues = [PRODUCTS_DISPLAY_PROPERTIES.GRID, PRODUCTS_DISPLAY_PROPERTIES.LIST];
    const toggleComponent = shallow<ToggleProps>(
        <Provider store={store}>
            <Toggle values={toggleValues} />
        </Provider>
    );
    toggleComponent.debug();

    it('togglesValues.length should match the amount of inputs', () => {
        expect(toggleComponent.find('input').length).toEqual(toggleValues.length);
    })

    it('togglesValues.length should match the amount of label', () => {
        expect(toggleComponent.find('.toggleLabel').length).toEqual(toggleValues.length);
    })
    it('togglesValue to be called with list ', () => {
        toggleComponent.find('radio-8db96e0b-2b40-4c44-9cd1-747494d5e50e').simulate('change', event);
        expect(mockFn).toBeCalledWith('list');
    })
});