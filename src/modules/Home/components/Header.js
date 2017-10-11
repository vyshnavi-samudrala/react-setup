// @flow

import React from 'react'
import styled from 'styled-components'
import type { header } from '../model'

const HeaderWrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Title = styled.h1`
  text-align: center;
  color : #BF616A
`

const Header = ({ title }: header) => (
  <HeaderWrapper>
    <Title> {title} </Title>
  </HeaderWrapper>
)

export default Header
