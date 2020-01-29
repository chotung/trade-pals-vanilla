import React from 'react'

const Footer = (props) => {
  const { absFoot } = props
  return (
    <footer className={`justify-content-center ${absFoot} footer`} >
      Footer
    </footer>
  )
}


export default Footer