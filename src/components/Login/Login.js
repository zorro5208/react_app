import React from 'react'
import axios from 'axios';
import './Login.css'
import Header from '../Header/Header.js';
import { HashRouter as Router ,withRouter  } from 'react-router-dom'
import { connect } from 'react-redux'
import { Toast } from 'antd-mobile';
import cookie from 'react-cookies'
class Login extends React.Component {
    goPrev(){
        window.history.go(-1)
    }
    render() {
        return ( 
            <div className="Login">
                <Header state={{
                    name:'登录',
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
        <div className="weui-cells__tips">没有账号,请<a onClick={
            ()=>{
                this.props.history.push('/register')
            }
        }>  注册  </a></div>
        <div className="weui-btn-area">
            <a className="weui-btn weui-btn_primary" href="javascript:" onClick={this.Login.bind(this)} id="showTooltips">确定</a>
        </div>
            </div>
        )
    }
    constructor(props) {
        super(props);
        this.state = {
          tel: '',
          password: '',
          telState: false,
          token:true

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
                // Toast.info('验证通过', 1.5);
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
      componentWillUnmount(){
          this.Login()
      }
    async Login(){
        if(this.state.telState && this.state.password){
            const data = await axios.get('https://www.apiopen.top/login?',{
            params:{
                key : '00d91e8e0cca2b76f515926a36db68f5',
                phone : this.state.tel,
                passwd : this.state.password
            }
        })
        console.log(data.data)
        if (data.data.code === 200) {
            this.props.history.push('/home')
            this.props.dispatch({
                type: "login",
                username : this.state.tel,
                token:this.state.token
            })
            // 用户名存储到cookie
            cookie.save('username',this.state.tel,{path: '/'})
        }
        if (data.data.code === 202) {
            Toast.info('手机号或密码错误', 1.5);
        }  
        }else{
            Toast.info('信息不能为空', 1.5);
        }
        
    }
}; 
export default withRouter(connect((state)=>{
    return state
})(Login))
