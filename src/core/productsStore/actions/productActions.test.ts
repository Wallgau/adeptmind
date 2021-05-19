import * as productsActions from './productActions';
import { ACTION_TYPES } from '../../../constants';


const products = require('../../../data.json');

describe('set all products actions', () => {
    it('should create an action to set all products', () => {
        const expectedAction = {
            type: ACTION_TYPES.SET_ALL_PRODUCTS,
            products
        }
        expect(productsActions.productsSet(products)).toEqual(expectedAction)
    })
})

describe(' set searchString actions', () => {
    it('should create an action to set searchString', () => {
        const searchString = 'soccer'
        const expectedAction = {
            type: ACTION_TYPES.SET_SEARCH_STRING,
            searchString
        }
        expect(productsActions.setSearchString(searchString)).toEqual(expectedAction)
    })
})

describe('isLoading actions', () => {
    it('should create an action isLoading', () => {
        const isLoading = true
        const expectedAction = {
            type: ACTION_TYPES.IS_LOADING,
        }
        expect(productsActions.isLoading(isLoading)).toEqual(expectedAction)
    })
})

describe('setPagination actions', () => {
    it('should create an action to set pagination', () => {
        const currentPage = 1
        const expectedAction = {
            type: ACTION_TYPES.SET_PAGINATION_PAGE,
            currentPage
        }
        expect(productsActions.setPaginationPage(currentPage)).toEqual(expectedAction)
    })
})

describe('setView actions', () => {
    it('should create an action to set the view', () => {
        const view = 'list'
        const expectedAction = {
            type: ACTION_TYPES.SET_STORAGE_VIEW,
            view
        }
        expect(productsActions.setView(view)).toEqual(expectedAction)
    })
})