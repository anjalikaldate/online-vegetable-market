import React from 'react'
import HProduct from './HProduct'
import Turnip from '../assets/images/turnip.png'
import Celery from '../assets/images/Celery.png'
import Amaranth from '../assets/images/Amaranth.png'
import Veg1 from '../assets/images/veg1.jpg'
import Veg2 from '../assets/images/veg2.jpg'
import Veg3 from '../assets/images/veg3.jpg'


const Healthy=()=> {
  return (
    <div className="container-fluid px-4 py-5 healthy">
            <h2 className='text-center display-4 mt-4 fw-bold'>It's Healthy Eating Made Easy</h2>
            <div classsName='container mt-5'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
         <HProduct 
           image={Veg1}
           image2={Turnip}
           Title="Delicious"
           Description="Turnips are indeed healthy, boasting an impressive nutritional profile."
         />

<HProduct 
           image={Veg2}
           image2={Amaranth}
           Title="Delicious"
           Description="Turnips are indeed healthy, boasting an impressive nutritional profile."
         />

<HProduct 
           image={Veg3}
           image2={Celery}
           Title="Delicious"
           Description="Turnips are indeed healthy, boasting an impressive nutritional profile."
         />
            </div>
            </div>
            </div>
  )
}

export default Healthy