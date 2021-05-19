import { filterProductsBySearchString } from './productsSelectors';

const data = require('../../data.json');
const expectedData = [
    {
        "image": "black_jacket.jpg",
        "title": "Adidas Men's Juventus Soccer Windbreaker Jacket",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor doloremque molestiae totam! Dicta dolore dolores et, laudantium magnam molestias qui quo quod repudiandae sequi? Adipisci deserunt doloribus quis quos."
    },
    {
        "image": "navy_jacket.jpg",
        "title": "Adidas Men's Arsenal Soccer Windbreaker Jacket",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor doloremque molestiae totam! Dicta dolore dolores et, laudantium magnam molestias qui quo quod repudiandae sequi? Adipisci deserunt doloribus quis quos."
    },
    {
        "image": "red_jacket.jpg",
        "title": "Adidas Men's Manchester United Soccer Windbreaker Jacket",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor doloremque molestiae totam! Dicta dolore dolores et, laudantium magnam molestias qui quo quod repudiandae sequi? Adipisci deserunt doloribus quis quos."
    }
];

const mockState1 = {
    products: data,
    hasError: false,
    isLoading: false,
    searchString: 'soccer',
    currentPage: 0,
    view: 'grid',
}

const mockState2 = {
    products: data,
    hasError: false,
    isLoading: false,
    searchString: '',
    currentPage: 0,
    view: 'grid',
}


describe('Products selector', () => {

    describe('selectedProducts', () => {
        it('should return 3items that matches soccer', () => {
            expect(filterProductsBySearchString(mockState1)).toEqual(expectedData);
        });
    });

    describe('selectedProducts', () => {
        it('should return all products', () => {
            expect(filterProductsBySearchString(mockState2)).toEqual(data);
        });
    });
});

