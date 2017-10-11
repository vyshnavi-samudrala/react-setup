// @flow

export type item = {
  id: number,
  text: string
}

export type list = {
  items: Array<item>
}

export type header = {
  title: string
}

export type home = {
  title: string,
  items: Array<item>
}

export type listBox = {
  newItem: string,
  items: Array<item>
}
