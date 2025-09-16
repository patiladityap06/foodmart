import React from 'react'
import "./Cards.css";
export default function Cards() {
  return (
              <div className="crds-main">
                <div className="subcrds">
                  <div className="subhead">
                    <h4>
                      Upto 25% Off
                      <br />
                    </h4>
                    <h2>Luxa Dark Chocolate</h2>
                    <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                    <button type="button" class="btn btn-secondary" style={{backgroundColor:"black"}}>SHOW NOW </button>
                  </div>
                  <div className="im">
                    <img src="ad-image-3.png"  alt="..." />
                  </div>
                </div>
    
                <div className="crds-main2">
                  <div className="subcrds2" >
                    <div className="subhead2">
                      <h4>
                      Upto 25% Off
                      <br />
                    </h4>
                    <h2>Creamy Muffins</h2>
                    <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                    <button type="button" class="btn btn-secondary" style={{backgroundColor:"black"}}>SHOW NOW </button>
                    </div>
                    <div className="im2">
                      <img src="./ad-image-4.png"  alt="..." />
                    </div>
                  </div>
                </div>
              </div>
  )
}
