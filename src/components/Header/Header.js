import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router ,Link ,withRouter } from 'react-router-dom'
import './Header.css'
//你的第一个组件 
class Header extends React.Component {
  render() {
    return ( 
        <Router>
        <div className="header">
            <div className='Logo'>
                {this.props.state&&this.props.state.type}
            </div>
            <p className="name">{this.props.state&&this.props.state.name}</p>
            <div className="right">
                <Link to='/search'>
                    <svg t="1561560074737" className="icon" viewBox="0 0 1024 1024" version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" p-id="2628" width="30" height="30">
                        <path d="M896 841.1L677.5 622.7c40.2-51.9 64.2-117.1 64.2-187.8 0-169.5-142.5-306.9-312-306.9S128 265.4 128 434.9s137.4 306.9 306.9 306.9c70.8 0 135.9-24 187.8-64.2L841.1 896l54.9-54.9zM429.7 676.6c-145.2 0-246.9-101.6-246.9-246.9s101.6-246.9 246.9-246.9c145.2 0 246.9 101.6 246.9 246.9S575 676.6 429.7 676.6z" p-id="2629" fill="#ffffff"></path></svg>
                </Link>
                {/* <Link to='/'> */}
                    <svg t="1561560240739" className="icon" viewBox="0 0 1024 1024" version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" p-id="3808" width="30" height="30">
                        <path d="M256 482.13333332m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="3809" fill="#ffffff"></path><path d="M512 482.13333332m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="3810" fill="#ffffff"></path><path d="M768 482.13333332m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="3811" fill="#ffffff"></path></svg>
                {/* </Link> */}
            </div>
        </div>
        </Router>
    )
  }
  
  componentDidMount(){
    //   console.log(this)
  }
}; 
export default withRouter(Header)