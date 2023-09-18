import "../components/Cards.css"
import picu from '../pics/pic1-u.png'
import picuu from '../pics/pic-2u.png'
import picuuu from '../pics/pic-3u.png'

const Cards = () => {
  return (
    <>
   <div className="container mx-auto row">
   <div className="col-lg-4 col-md-6 col-sm-12">
<div className="card card-background">
  <div className="image"  style={{backgroundImage: 'url(https://cyclofix.co.uk/static/img/photos/velo_new.png)', backgroundSize: 'cover', backgroundPosition: '50% 50%'}}>
    <div className="filter" />
  </div>
  <div className="content">
    <h5 className="price">Classicals, Hybrids, MTB, Vintage, Gravel... all bikes are accepted!
  
    </h5> 
  </div>
  <div className="footer">
    <div className="author">
      <a href="#">
        <span className="spn">Bike</span>
      </a>
    </div>
                          
  </div>
</div>
</div>
  <div className="col-lg-4 col-md-6 col-sm-12">
  <div className="card card-background">
    <div className="image" style={{backgroundImage: 'url(https://cyclofix.co.uk/static/img/photos/vae-dacathlon.png)', backgroundSize: 'cover', backgroundPosition: '50% 50%'}}>
      <div className="filter" />
    </div>
    <div className="content">
      <h5 className="price">Get your e-bike maintained to push it to the limits!
       
      </h5> 
    </div>
    <div className="footer">
      <div className="author">
        <a href="#">
          <span className="spn">e-Bike</span>
        </a>
      </div>
                             
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-12">
  <div className="card card-background">
    <div className="image" style={{backgroundImage: 'url(https://cyclofix.co.uk/static/img/photos/trottinette_new.png)', backgroundSize: 'cover', backgroundPosition: '50% 50%'}}>
      <div className="filter" />
    </div>
    <div className="content">
      <h5 className="price">Mechanics will cherish all two-wheelers, including scooters!
        <a href="#" className="pull-right">
         
        </a>
      </h5> 
    </div>
    <div className="footer">
      <div className="author">
        <a href="#">
          <span className="spn">Scooter</span>
        </a>
      </div>
                           
    </div>
  </div>
</div> 
   </div>
    </>
  )
}

export default Cards
