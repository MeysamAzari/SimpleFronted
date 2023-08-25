import React from 'react'
import Header from './Components/Header'
import Tables from './Components/Table'
import './Search.css'
const Search = () => {
  return (
    <>
    <Header/>
    <div className='container p-5' dir='rtl'>
      <div>
        <input className='rounded-pill p-2 search' placeholder='جستوجو'></input>
      </div>
      <div className='mt-5'>
        <Tables/>
      </div>
    </div>
    </>
  )
}

export default Search