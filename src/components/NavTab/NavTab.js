import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import './NavTab.css'
import { HashRouter as Router ,NavLink  } from 'react-router-dom'

class NavTab extends React.Component {
    state = {
        active : false,
        titles:[{
            name:'全部',
            url:'/home'
        },
        {
            name:'视频',
            url:'/video'
        },
        {
            name:'图片',
            url:'/picture'
        },
        {
            name:'段子',
            url:'duanZi'
        }]
    }
    render() {
        return ( 
            <Router>
                <div className="tab">
                    {
                        this.state.titles.map((item,index)=>{
                            return <NavLink to={item.url} key={index}
                                activeClassName='active' 
                            >
                                <div className="table-item">
                                    <span className="tab-link">{item.name}</span>
                                </div>
                            </NavLink>
                        })
                    }
                </div>
            </Router>
        );
    }
    setActive(){

    }
}

export default connect((state) => {
    return state
})(NavTab)