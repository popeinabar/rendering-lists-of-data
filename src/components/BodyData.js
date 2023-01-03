import React from 'react'
// import imageData from './imageData';

 function BodyData({data}) {
  return(
      <div>
    {
        data.map(image=>{
          return(
            <div key={image.id} className="column">
              <img src={image.img} alt=""></img>
            </div>
          )
        })
      }
      </div>
  )
}
export default BodyData;
//div and return was missing