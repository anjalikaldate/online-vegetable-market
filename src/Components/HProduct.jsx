import React from 'react'

const HProduct = ({image, image2, Title, Description}) => {
  return (
    <div className="col">
    <div className="card shadow-sm">

<img src={image} alt=""/>
     <div className="card-body d-flex">
             <img src={image2} alt="" className='w-25 h-25'/>
            
            <p>
                <strong>{Title}</strong>
                <p>{Description}</p>
            </p>  
      </div>
      </div>
    </div>
  )
}

export default HProduct