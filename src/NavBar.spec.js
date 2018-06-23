import React, { Component } from 'react'
import { shallow, mount } from 'enzyme' // 348 K
import './enzyme-setup'

const context = describe;

describe('Testing out React.Component Abstract Class', () => {
  context('React.Component "this" ', () => {
    it('test what "this" stands for', () => {
      class EmptyComponent extends Component {
        render() {
          return <div>{this}</div>
        }
      }
    })
  })
})