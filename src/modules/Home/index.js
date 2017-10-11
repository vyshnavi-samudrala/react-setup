// @flow

import React from 'react'
import Header from './components/Header'
import ListBox from './components/ListBox.js'
import type { home } from './model'

const Home = ({ title, items }: home) => (
  <div>
    <Header title={title} />
    <ListBox />
  </div>
)

export default Home
