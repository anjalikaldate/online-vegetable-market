import React from 'react'

const SProduct=({image, Description})=> {
    return (
       
        <div className="card shadow-sm">
    
    <img src={image} alt=""  style={{height:"200px"}}/>
         <div className="card-body ">
          <p>{Description}</p>
        </div>
          </div>
       
    )
}

export default SProduct
