import React from 'react'
import axios from 'axios';
import './Register.css'
import Header from '../Header/Header.js';
import { HashRouter as Router ,withRouter  } from 'react-router-dom'
import { connect } from 'react-redux'
import { Toast } from 'antd-mobile';

class Register extends React.Component {
    state = {
        
    }
    goPrev(){
        window.history.go(-1)
    }
    render() {
        return ( 
            <div className="register">
                <Header state={{
                    name:'注册',
                    type : (
                        <svg t="1561561397755" className="icon" viewBox="0 0 1024 1024" 
                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2573" width="30" 
                        height="30" onClick = {this.goPrev.bind(this)}>
                            <path d="M674.22000122 836.44000244c-6.5177679 0-13.10795546-2.31742859-18.10491084-6.95228577L331.67508793 528.80135728c-9.99391079-9.26971435-9.99391079-24.33300019 0-33.60271456L656.11509038 194.51228333c9.99391079-9.26971435 26.21591092-9.26971435 36.20982169 0 9.99391079 9.26971435 9.99391079 24.33300019 0 33.60271454L385.98982048 512l306.33509159 283.88500214c9.99391079 9.26971435 9.99391079 24.33300019 0 33.60271453-4.9969554 4.63485718-11.58714294 6.95228576-18.10491085 6.95228577z" p-id="2574" fill="#ffffff"></path></svg>
                    )
                }}></Header>
                <div className="weui-cells weui-cells_form">
            <div className="weui-cell">
                <div className="weui-cell__hd"><label className="weui-label">手机号</label></div>
                <div className="weui-cell__bd">
                    <input className="weui-input" type="number" pattern="[0-9]*" onBlur={this.telChange.bind(this)} placeholder="请输入手机号"/>
                </div>
            </div>
            <div className="weui-cell">
                <div className="weui-cell__hd"><label className="weui-label">密码</label></div>
                <div className="weui-cell__bd">
                    <input className="weui-input" type="password" onBlur={this.pswChange.bind(this)} placeholder="请输入密码"/>
                </div>
            </div>
        </div>
        <div className="weui-cells__tips">如果已有账号,请<a href="##" onClick={
            ()=>{
                this.props.history.push('/login')
            }
        }>  登录  </a></div>
        <div className="weui-btn-area">
            <a className="weui-btn weui-btn_primary" href="javascript:" onClick={this.Register.bind(this)} id="showTooltips">确定</a>
        </div>
            </div>
        )
    }
    constructor(props) {
        super(props);
        this.state = {
          tel: '',
          password: '',
          telState: false
        }
    
      }
    
      async telChange(e) {
    
        let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
        let val = e.target.value
        await this.setState({
          tel: val
        })
        if (val) {
            if (reg.test(this.state.tel)) {
                this.setState({
                  telState: true
                })
                Toast.info('验证通过', 1.5);
              } else {
                this.setState({
                  telState: false
                })
                Toast.info('手机号码不正确', 1.5);
              }
        }else{
            this.setState({
                telState: false
              })
              Toast.info('请输入11位的手机号码', 1.5);
        }
      }
      
      pswChange(e){
        let val = e.target.value
        this.setState({
          password: val
        })
      }
    
    async Register(){
        if(this.state.telState && this.state.password){
            const data = await axios.get('https://www.apiopen.top/createUser?',{
            params:{
                key : '00d91e8e0cca2b76f515926a36db68f5',
                phone : this.state.tel,
                passwd : this.state.password
            }
        })
        
        // console.log(data.data)
        if (data.data.code == '202') {
            Toast.info('用户已注册', 1.5);
        }
        if (data.data.code == '200') {
            this.props.history.push('/login')
        }
        }else{
            Toast.info('请输入完整的信息', 1.5);
        }
        
    }
    componentDidMount(){
        console.log(this)
    }
}; 
export default withRouter(connect((state)=>{
    return state
})(Register))
