import React from 'react'
import renderer from 'react-test-renderer'
import { ListImgLoad, ListTitleLoad, ListDescriptionLoad, LoadWrapper, LoadingAnimation, StyledImage, ListContainer, Container } from './productDetails.styles'

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