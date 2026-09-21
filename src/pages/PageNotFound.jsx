import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div style={{height: '100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
      <img src="https://img.magnific.com/premium-vector/sleeping-white-cat-black-white-error-404-flash-message_151150-15087.jpg?semt=ais_hybrid&w=740&q=80" alt="PAGE NOT FOUND" />
      <h1>WE ARE SORRY</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to={'/'} className="btn btn-primary ms-2">BACK TO HOME</Link>
    </div>
  )
}

export default PageNotFound