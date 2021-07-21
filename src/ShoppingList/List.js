import React from 'react'

const List = ({match}) => (
  <h3>{'Message with ID'} {match.params.id} </h3>
)

export default List
