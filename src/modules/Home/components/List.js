// @flow

import React from 'react'
import styled from 'styled-components'
import type { item, list } from '../model'

const ListWrapper = styled.div`
    margin: 0px auto;
    width: 50%;
    border: #2E3440;
    padding: 10px;
    height: 250px;
    background-color: #D8DEE9;
`
const StyledUl = styled.ul`
    margin-top: 0;
    margin-bottom: 10px;
    list-style-type: none;
    margin-left: 50px;
`
const SyledLi = styled.li`
    font-size: 20px;
    color: #2E3440;
`
const Item = ({ id, text }: item) => <SyledLi> {text} </SyledLi>

const List = ({ items }: list) => (
  <ListWrapper>
    <StyledUl>
      {items.map(item => <Item key={item.id} {...item} />)}
    </StyledUl>
  </ListWrapper>
)

export default List
