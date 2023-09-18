import React from 'react'
import banner from '../pics/remove-bg.jpg'
import '../components/Banner.css'
const Banner = () => {
  return (
    <>
  <img className='B-img' src={banner} alt="" /> 
  <div className="spc"></div>
  <section className="container pt-3 mb-3  usha1122">
  <h1 className="h1 block-title text-center">Treat your scooter to some pro-level TLC</h1>
  <div className="row pt-5 mt-30">
    <div className="col-lg-4 col-sm-6 mb-30 pb-5">
      <a className="card" href="#">
        <div className="box-shadow bg-white rounded-circle mx-auto text-center ushaq" style={{width: 90, height: 90, marginTop: '-45px'}}><i  class="fa-solid fa-person-biking"></i></div>
        <div className="card-body text-center">
          <h1 className="card-title pt-3">Get your scooter back on the road in a flash with quick repairs</h1>
          <p className="card-text text-xl">Score a service appointment within 48 hours thanks to our expanding network of mechanics!</p><span className="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i className="fe-icon-arrow-right" /></span>
        </div>
      </a>
    </div>
   
    
   
    <div className="col-lg-4 col-sm-6 mb-30 pb-5">
      <a className="card" href="#">
        <div className="box-shadow bg-white rounded-circle mx-auto text-center ushaq" style={{width: 90, height: 90, marginTop: '-45px'}}><i class="fa-solid fa-magnifying-glass"></i></div>
        <div className="card-body text-center">
          <h1 className="card-title pt-5">Demand nothing less than crystal-clear communication</h1>
          <p className="card-text text-xl">Beyond a clear-cut quote, we’ll help you get to know the ins and outs of your scooter. You’ll be an expert before you know it.</p><span className="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i className="fe-icon-arrow-right" /></span>
        </div>
      </a>
    </div>
    <div className="col-lg-4 col-sm-6 mb-30 pb-5">
      <a className="card" href="#">
        <div className="box-shadow bg-white rounded-circle mx-auto text-center ushaq" style={{width: 90, height: 90, marginTop: '-45px'}}><i class="fa-solid fa-headset"></i></div>
        <div className="card-body text-center">
          <h1 className="card-title pt-1">A team available 6 days a week</h1>
          <p className="card-text text-xl">Our support team and our network of mechanics are available from Monday to Saturday to help you book a service!</p><span className="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i className="fe-icon-arrow-right" /></span>
        </div>
      </a>
    </div>
  </div>
</section>

    
    
    </>
  )
}

export default Banner
