import React from 'react'
import Header from './Components/Header'
import Tables from './Components/Table'
const Search = () => {
  return (
    <>
    <Header/>
    <div className='container p-5' dir='rtl'>
      <div>
        <input className='rounded-pill p-2 w-25' placeholder='جستوجو'></input>
      </div>
      <div className='mt-5'>
        <Tables/>
      </div>
    </div>
    </>
  )
}

export default Search