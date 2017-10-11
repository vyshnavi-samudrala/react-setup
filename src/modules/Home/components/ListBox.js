// @flow

import React, { PureComponent } from 'react'
import List from './List'
import styled from 'styled-components'
import type { listBox } from '../model'

const FormWrapper = styled.div`
    margin: 0px auto;
    margin-top : 10px;
    width: 50%;
    border: #2E3440;
    padding: 10px;
    background-color: #D8DEE9;
    padding-left : 10px;
`
const Button = styled.button`
  background: palevioletred ;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
const Input = styled.input`
  padding: 5px;
  border: none;
  border-bottom: solid 2px #c9c9c9;
  transition: border 0.3s;
`

export default class ListBox extends PureComponent<void, any, listBox> {
  state = {
    newItem: '',
    items: []
  };

  _handleOnChange = (event: Event & { currentTarget: HTMLInputElement }) => {
    const typedText = event.currentTarget.value
    this.setState({ newItem: typedText })
  };

  _handleOkClick = (_: Event) => {
    const { newItem, items } = this.state
    const addedItems = [
      ...items,
      {
        id: items.length + 1,
        text: newItem
      }
    ]
    this.setState({ newItem: '', items: addedItems })
  };

  render () {
    return (
      <div>
        <div>
          <FormWrapper>
            <Input
              type="text"
              value={this.state.newItem}
              onChange={this._handleOnChange}
            />
            <Button onClick={this._handleOkClick}>Add</Button>
          </FormWrapper>
          <List items={this.state.items} />
        </div>
      </div>
    )
  }
}
