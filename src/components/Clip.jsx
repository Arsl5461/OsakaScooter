import React from 'react'
import '../components/Clip.css'
import picss from "../pics/new-pic.jpeg"
import pic from "../pics/qari.png"


const Clip = () => {
  return (
    <>
    <div className="spcc"></div>
    <div className='Container-fluid'>
        <div className='Container'>
            <div className='row cliprow'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img className='arr img-fluid' src={picss} alt="" />

                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 detailsClip'>
                    <h3>Specialists in Scooters</h3>
                    <div className='para'>
                        <p>Are you on the electric scooter team? Mechanics from our network are trained to help you repair them! Because we know that getting your scooter repaired can be a real headache, all brands can be repaired</p>
                        <div className='divs'>
                            <p>Xiaomi</p>
                            <p>MiniMotors</p>
                            <p>Inokim</p>
                            <p>Segway</p>
                            <p>Micro</p>
                            <p>InMotion</p>
                        </div>
                    </div>
                    <div className='clipbutton'>
                    <button>Book a Services <i class="fa-solid fa-angle-right"></i></button>
                    </div>

                </div>

            </div>
            
        </div>

      </div>
<div className="baner-2">
    <img src={pic} alt="" className='img-fluid' />
</div>
    </>
  )
}

export default Clip
