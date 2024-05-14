import React from 'react'

const Title = ({ title, subTitle }) => {
  return (
    <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
      <div className='title'>{title}</div>
      {subTitle ? <div className="subTitle">{subTitle}</div> : null}
    </div>
  )
}

export default Title