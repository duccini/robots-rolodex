import React from 'react'

import './SearchBox.css'

function SearchBox({ placeholder, onHandleChange}) {
  return (
    <input
      className="search" 
      type="search" 
      placeholder={ placeholder }
      // def uma função anonima chamada pelo React no synthetic event
      onChange={ onHandleChange }
    />
  )
}

export default SearchBox
