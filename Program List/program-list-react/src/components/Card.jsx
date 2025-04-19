import React from 'react'

const Card = ({children, bg = 'bg-white', border = 'border-none', borderColor = ''}) => {
  return (
    <>
        <div className={`${bg} ${border} ${borderColor} p-6 rounded-lg shadow-md`}>{children}</div>
    </>
  )
}

export default Card