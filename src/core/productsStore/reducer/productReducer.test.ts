import { ACTION_TYPES } from '../../../constants';
import reducer from './productReducer';

describe('products reducer', () => {
    const products = [{
        "image": "b_w_jacket.jpg",
        "title": "Adidas Boys' Tiro Windbreaker Jacket in Black Size",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor doloremque molestiae totam! Dicta dolore dolores et, laudantium magnam molestias qui quo quod repudiandae sequi? Adipisci deserunt doloribus quis quos."
    },
    {
        "image": "black_jacket.jpg",
        "title": "Adidas Men's Juventus Soccer Windbreaker Jacket",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor doloremque molestiae totam! Dicta dolore dolores et, laudantium magnam molestias qui quo quod repudiandae sequi? Adipisci deserunt doloribus quis quos."
    },
    {
        "image": "navy_jacket.jpg",
        "title": "Adidas Men's Arsenal Soccer Windbreaker Jacket",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor doloremque molestiae totam! Dicta dolore dolores et, laudantium magnam molestias qui quo quod repudiandae sequi? Adipisci deserunt doloribus quis quos."
    }];

    const initialState = ({
        products: [],
        hasError: false,
        isLoading: true,
        searchString: '',
        currentPage: 0,
        view: 'grid',
    });


    test('handles SET_ALL_PRODUCTS action', () => {
        const action = {
            type: ACTION_TYPES.SET_ALL_PRODUCTS,
            products: [...initialState.products, ...products],
        };

        const expectedState = ({
            products: products,
            hasError: false,
            isLoading: true,
            searchString: '',
            currentPage: 0,
            view: 'grid',
        });

        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    test('handles SET_STORAGE_VIEW action', () => {
        const action = {
            type: ACTION_TYPES.SET_STORAGE_VIEW,
            products: [],
            hasError: false,
            isLoading: true,
            searchString: '',
            currentPage: 0,
            view: 'list',
        };

        const expectedState = ({
            products: [],
            hasError: false,
            isLoading: true,
            searchString: '',
            currentPage: 0,
            view: action.view,
        });

        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    test('handles SET_SEARCH_STRING action', () => {
        const action = {
            type: ACTION_TYPES.SET_SEARCH_STRING,
            products: [],
            hasError: false,
            isLoading: true,
            searchString: 'george',
            currentPage: 0,
            view: 'grid',
        };

        const expectedState = ({
            products: [],
            hasError: false,
            isLoading: true,
            searchString: action.searchString,
            currentPage: 0,
            view: action.view,
        });

        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    test('handles SET_PAGINATION_PAGE action', () => {
        const action = {
            type: ACTION_TYPES.SET_PAGINATION_PAGE,
            products: [],
            hasError: false,
            isLoading: true,
            searchString: '',
            currentPage: 2,
            view: 'grid',
        };

        const expectedState = ({
            products: [],
            hasError: false,
            isLoading: true,
            searchString: '',
            currentPage: action.currentPage,
            view: action.view,
        });

        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    test('handles IS_LOADING action', () => {
        const action = {
            type: ACTION_TYPES.IS_LOADING,
            products: [],
            hasError: false,
            isLoading: false,
            searchString: '',
            currentPage: 0,
            view: 'grid',
        };

        const expectedState = ({
            products: [],
            hasError: false,
            isLoading: action.isLoading,
            searchString: '',
            currentPage: 0,
            view: action.view,
        });

        expect(reducer(initialState, action)).toEqual(expectedState);
    });
})

