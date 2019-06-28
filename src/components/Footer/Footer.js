import React from 'react'
import { HashRouter as Router ,Link  } from 'react-router-dom'
import { connect } from 'react-redux'
import './Footer.css'
//你的第一个组件 
class Footer extends React.Component {
    state = {
        tabs: [{
            title: '精华',
            url: '/home',
            icon: require('./主页.png')
        }, {
            title: '最新',
            url: '/new',
            icon: require('./时间.png')
        }, {
            title: '关注',
            url: '/gz',
            icon: require('./关注.png')
        }, {
            title: '我的',
            url: '/my',
            icon: require('./我的.png')
        }]
    }
    
  render() {
    return ( 
    <div className="footer">
        <div className="weui-tabbar">
            {
                this.state.tabs.map((item,index)=>{
                    return <Link to={item.url}  key={index}
                    className={
                        index===this.props.index?"weui-tabbar__item weui-bar__item_on":"weui-tabbar__item"
                    }>
                       <span style={{
                           display: 'inline-block',
                           position: 'relative'}}>
                           <img src={item.icon}></img>
                       </span>
                       <p className="weui-tabbar__label">{item.title}</p>
                   </Link>
                })
            }
            
        </div>
    </div>
    )
  }
  
  componentDidMount(){
    //   console.log(this)
  }
}; 
export default Footer
