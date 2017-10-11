import React from 'react'
import ReactDOM from 'react-dom'
import Home from './modules/Home'

const listItems = [{ id: 1, text: 'One' }, { id: 2, text: 'Two' }]
const App = () => (
  <div>
    <Home title="React Setup" items={listItems} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
