import React, { Component } from 'react'
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon'
import NavColumnComponent from './index'
import '../enzyme-setup'

const context = describe
describe('NavColumn', () => {
  it('renders', () => {
    const NavColumn = shallow(<NavColumnComponent />)
    expect(NavColumn.exists()).toBeTruthy()
  })
})