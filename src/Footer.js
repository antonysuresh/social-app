import React from 'react'

const Footer = () => {
  const date = new Date();
  return (
    <footer className='Footer'>
      <h2>
        Copywrite &copy; {date.getFullYear()}
      </h2>
    </footer>
  )
}

export default Footer