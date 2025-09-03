import React from 'react'

export default function Cards() {
  return (
    <div className="crds">
    <div class="row" style={{marginTop:"160px"}}>
  <div class="col-sm-6 mb-3">
    <div class="card h-100">
      <div class="card-body d-flex justify-content-between align-items-center" style={{backgroundColor:" #f9e8e1"}}>
       
        <div class="flex-grow-1">
          <h5 class="card-title">Upto 25% Off</h5>
          <p class="card-text">Luxa Dark Chocolate.</p>
          <p class="card-text">Very tasty & creamy vanilla flavour creamy muffin</p>
          <a href="#" class="btn btn-primary">Shop Now</a>
        </div>
        
        <img src="./ad-image-3.png" alt="Card Image" class="ms-3" style={{width: "315px", height: "auto"}}/>
      </div>
    </div>
  </div>

  <div class="col-sm-6 mb-3">
    <div class="card h-100">
      <div class="card-body d-flex justify-content-between align-items-center">
       
        <div class="flex-grow-1">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        
        <img src="https://via.placeholder.com/100" alt="Card Image" class="ms-3" style={{width: "100px", height: "auto"}}/>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
