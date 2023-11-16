import React, { Component } from 'react'

export default class Newsitem extends Component {
 
  render() {
    let {title,desc,imgurl,newsurl}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
  <img src= {!imgurl?"https://images.livemint.com/img/2022/10/12/600x338/europa_a-sixteen_nine_1665591870041_1665591879672_1665591879672.webp":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{desc}...</p>
    <a href={newsurl} target="
    _blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
