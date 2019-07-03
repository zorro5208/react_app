import React from 'react'
import './Gz.css'
import axios from 'axios';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer'
import { HashRouter as Router ,withRouter  } from 'react-router-dom'
import { connect } from 'react-redux'
import cookie from 'react-cookies'
class Gz extends React.Component {
    state = {
        
    }
    goPrev(){
        window.history.go(-1)
    }
    render() {
        return ( 
            <div className="my">
                <Header state={{
                    name:'关注',
                    type : (
                        <svg t="1561561397755" className="icon" viewBox="0 0 1024 1024" 
                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2573" width="30" 
                        height="30" onClick = {this.goPrev.bind(this)}>
                            <path d="M674.22000122 836.44000244c-6.5177679 0-13.10795546-2.31742859-18.10491084-6.95228577L331.67508793 528.80135728c-9.99391079-9.26971435-9.99391079-24.33300019 0-33.60271456L656.11509038 194.51228333c9.99391079-9.26971435 26.21591092-9.26971435 36.20982169 0 9.99391079 9.26971435 9.99391079 24.33300019 0 33.60271454L385.98982048 512l306.33509159 283.88500214c9.99391079 9.26971435 9.99391079 24.33300019 0 33.60271453-4.9969554 4.63485718-11.58714294 6.95228576-18.10491085 6.95228577z" p-id="2574" fill="#ffffff"></path></svg>
                    )
                }}></Header>
                
                <Footer index={3}></Footer>
            </div>
        )
    }
    componentDidMount(){
        console.log(this)
    }
}; 
export default withRouter(connect((state)=>{
    return state
})(Gz))
