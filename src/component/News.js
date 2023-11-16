import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'

  
 export default class News extends Component{
  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general',
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  
    } 

  constructor(){
    super();
    this.state={
    articles: [],
    loading:false,
    page:1
    }
  }
 async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=ce87eccd6b9641f28c87b0cbc721ec85&page=lpageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    let parsedata=await data.json();
    // console.log(parsedata);
    this.setState({articles:parsedata.articles});
  }
   
   handlePreClick= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=ce87eccd6b9641f28c87b0cbc721ec85&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedata=await data.json();
    // console.log(parsedata);
    // console.log("pre")
    this.setState({
      page:this.state.page - 1,
      articles:parsedata.articles,
      loading:false
    })
   }
   handleNextClick= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=ce87eccd6b9641f28c87b0cbc721ec85&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedata=await data.json();
    // console.log(parsedata);
    // console.log("nex")
    this.setState({
      page:this.state.page + 1,
      articles: parsedata.articles,
      loading:false

    })
    
   }

  render() {
    return (
      <div className='container my-3'>
     <h2>Top headline--{this.props.category}</h2>
    {this.state.loading&&<Spiner/>}
          <div className='row'>
          {!this.state.loading&&this.state.articles.map((element)=>{
            return <div className='col-md-4 my-4'key={element.url}>
                <Newsitem  title={element.title? element.title.slice(0,45):" "} desc={element.description? element.description.slice(0,88):" "} imgurl={element.urlToImage} newsurl={element.url} />
            </div>
           })}
           
          </div>
          <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
      </div>
      
    )
  }
}
