import React from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import './Search.css'
const data = {
    title:'搜索'
}
class Search extends React.Component {
    
    constructor(props){
        super(props)
        // 有状态数据
        this.state = {
            bool: false,
            inputValue : ''
        }
        // 聚焦
        this.textInput=React.createRef()
    }
    // 是否显示或隐藏
    isShow(){
        this.setState({
            bool: !this.state.bool
        })
        this.textInput.current.focus()//获取焦点
        
    }
    isHide(){
        this.setState({
            inputValue : ''
        })
        this.props.history.push('/')
    }
    // 获取input值
    getInputValue(e){
        this.setState({
            inputValue : e.target.value
        })
        
    }
    // 删除
    deleteValue(){
        this.setState({
            inputValue : ''
        })
    }
    componentDidMount(){
        // console.log(this.props.isShow)
    }
    render(){
        return (
            <div >
                <div className={
                    this.state.bool ? "weui-search-bar weui-search-bar_focusing" : "weui-search-bar"
                    } id="searchBar">
                    <form className="weui-search-bar__form">
                        <div className="weui-search-bar__box">
                            <i className="weui-icon-search"></i>
                            <input value = {this.state.inputValue} 
                                onChange={
                                    this.getInputValue.bind(this)
                                }
                                ref={this.textInput}
                            autoComplete="off"
                            style={{marginBottom:' 0px'}}
                            type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
                            <button type='button' onClick= {this.deleteValue.bind(this)}
                            style={{display: (this.state.inputValue) ? "block" : "none"}}
                            className="weui-icon-clear" id="searchClear"></button>
                        </div>
                        <label onClick = {
                            this.isShow.bind(this)
                        }
                         className="weui-search-bar__label" id="searchText">
                            <i className="weui-icon-search"></i>
                            <span>{data.title}</span>
                        </label>
                    </form>
                    <a href="javascript:"  onClick = {
                            this.isHide.bind(this)
                        }
                    className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
                </div>
                
            </div>
        )
    }
}
export default withRouter(connect((state) => {
    // getters获取数据
    return state 
  })(Search))