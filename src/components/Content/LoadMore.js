import React from 'react'

//你的第一个组件 
class LoadMore extends React.Component {
    state = {
        display:'black'
    }
  render() {
    return ( 
        <div className="page__bd">
            <div style={{
                    display : this.props.status ? 'black' : 'none'
                }} className="weui-loadmore" >
                <i className="weui-loading"></i>
                <span className="weui-loadmore__tips">正在加载</span>
            </div>
            <div style={{
                    display: this.props.limit >= 50 ? 'block' : 'none'
                }} className="weui-loadmore weui-loadmore_line">
                <span className="weui-loadmore__tips">暂无数据</span>
                <div className="weui-footer">
                    <p className="weui-footer__text">Copyright © 2016-2019 zorro.cn</p>
                </div>
            </div>
            
        </div>
    )
  }
  componentDidMount(){
    //   console.log(this)
  }
}; 
export default LoadMore