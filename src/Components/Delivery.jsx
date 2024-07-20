import React from 'react'
import Process1 from '../assets/images/process1.png'
import Process2 from '../assets/images/process2.png'
import Process3 from '../assets/images/process3.png'

const Delivery=()=> {
    return (

        <div className="container px-4 py-5 delivery-process">
            <h2 className='text-center display-4 mt-4 fw-bold'>How Delivery Works</h2>
            
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 row-cols-md-3">
                <div className="col px-5 text-center">
                    <div className="mb-3">
                   <img src={Process1} alt="" className='w-50 h-50'/>
                    </div>
                    <h2>Pick Your Veg</h2>
                    <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi. </p>
                    
                </div>
                <div className="col px-5 text-center">
                    <div className="mb-3">
                    <img src={Process2} alt="" className='w-50 h-50'/>  
                    </div>
                    <h2>We Deliver the Bag</h2>
                    <p>Gumbo beet greens corn soko endive gumbo gourd parsley.</p>
                   
                </div>
                <div className="col px-5 text-center">
                    <div className="mb-3">
                    <img src={Process3} alt="" className='w-50 h-50'/>
                    </div>
                    <h2>You Enjoy Your Veg</h2>
                    <p>Paragraph of text beneath the heading to explain.</p>
                   
                </div>
            </div>
        </div>
    )
}

export default Delivery
