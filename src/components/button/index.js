import React from 'react'

const Button = ({ customClass, text }) => {
  return (
    <a href='#' className={`inline-block cursor-pointer linear duration-300 border-2 border-solid font-semibold ${customClass}`}>
      {text}
    </a>
  )
}

export default Button