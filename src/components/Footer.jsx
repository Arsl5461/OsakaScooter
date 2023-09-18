import '../components/Footer.css'

const Footer = () => {
  return (
    
       <>
    <hr></hr>
      <div className='Container-fluid footer-parent'>
        <div className='container'>
          <div className='row row-parent'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='About-section'>
                <div className='about'>
                  <h4>About us</h4>
                </div>
                <p>Our mission</p>
                <p>Jobs at OsakaScooter</p>
                <p>Press and Media kit</p>
                <p>Blog</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='About-section'>
                <div className='about'>
                  <h4>Services</h4>
                </div>
                <p>OsakaScooter Business</p>
                <p>Bike repair</p>
                <p>e-bike repair</p>
                <p>Scooter repair</p>
                <p>OsakaScooter certification</p>
                <p>Gift card</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='About-section'>
                <div className='about'>
                  <h4>Useful links</h4>
                </div>
                <p>Frequently asked questions</p>
                <p>Our prices</p>
                <p>Testimonials</p>
                <p>Become a mechanic</p>
                <p>Workshop directory</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='icons'>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              </div>
            </div>
            
          </div>
          <div className='endpoints'>
          <div className='privacy'>
            <p>Legal information</p>
            <p>Privacy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className='reserved'>
            <p>© 2023 OsakaScooter. All rights reserved.</p>
          </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Footer
