import React from 'react'
import { HashRouter as Router ,Link ,withRouter } from 'react-router-dom'
import Header from '../components/Header/Header.js';
import Search from '../components/Search/Search.js';
import NavTab from '../components/NavTab/NavTab.js';
import Content from '../components/Content/Content.js';
import Footer from '../components/Footer/Footer.js';

class Home extends React.Component {
    render() {
        return ( 
            <div>
                <Header  state={{
                    name:'',
                    type :(
                        <img src="http://wimg.spriteapp.cn/huodong/logo_new.png" onClick={()=>{
                            this.props.history.push('/')
                        }}></img>
                    )
                }}></Header>
                {/* <Search></Search> */}
                <NavTab></NavTab>
                <Content type={{
                    type :'1',
                    paly : 'image1'
                }}></Content>
                <Footer index={0}></Footer>
            </div>
        );
    }
    
}

export default withRouter(Home)