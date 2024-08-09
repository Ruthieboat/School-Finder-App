import React from 'react'
import start from '../assets/images/start.jpg'

const StartCard = () => {
  return (
    <div className="card bg-base-100 w-80 shadow-lg">
  <figure>
    <img
      src={start}
      alt="first step" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
  )
}

export default StartCard