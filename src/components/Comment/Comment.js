import React from 'react'
import axios from 'axios';
import { HashRouter as Router ,Link  } from 'react-router-dom'
import { connect } from 'react-redux'
import './Comment.css'
//你的第一个组件 
class Comment extends React.Component {
    state = {
        comment:[],
        uid : 27610708,
        page : 1
    }
    
    render() {
        return ( 
        <div className="Comment">
            <div className="weui-panel__hd">最新评论</div>
            {
                this.state.comment.map((item,index)=>{
                    return <div className="content1" key={index}>
                    <div className="title">
                        <p className="img">
                            <img src={item.user.profile_image}></img>
                            <span className="name1">{item.user.username}
                            <span className="time">{item.ctime}</span>
                            </span>
                        </p>
                        <p>
                        <svg t="1561551925772" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4409" width="20" height="20">
                            <path d="M693.07 289.952v0.17l0.257-4.69-0.256 4.605z m309.823 164.932c-32.406-58.844-82.04-92.103-149.581-95.343-40.934-1.877-81.869-0.683-122.889-0.853l-5.543-0.17c0-0.939 0-1.45 0.17-1.962a778.607 778.607 0 0 0 11.855-88.35c2.302-28.143 3.837-56.37 4.35-84.598 0.425-24.39 2.728-48.866-0.854-73a121.95 121.95 0 0 0-69.247-96.281c-43.408-21.405-86.56-18.591-127.238 7.59-30.274 19.444-48.61 47.757-55.432 83.233-2.985 15.095-2.303 30.275-2.303 45.54 0.171 40.508-7.334 79.566-26.266 115.469-49.121 92.87-126.64 141.224-232.217 143.185-40.764 0.768-81.613 0.17-122.462 0.085-12.11 0-23.964 1.45-35.392 5.458C26.437 430.237 0 467.761 0 514.068v404.483c0 13.9 1.876 27.46 7.42 40.082 17.055 38.888 46.648 61.913 89.288 63.704 44.09 1.876 88.35 0.597 132.525 0.682 4.264 0 8.528-0.597 12.28-2.558 10.66-5.714 14.498-14.924 14.498-26.437-0.086-173.46 0-346.92 0-520.293 0-4.69-1.962-10.831 0.852-13.645 2.388-2.559 8.528-1.535 12.963-2.218a303.682 303.682 0 0 0 131.075-49.462 304.45 304.45 0 0 0 120.672-157.768c11.939-34.965 16.373-70.953 15.862-107.709-0.086-8.784-0.341-17.567 0.853-26.351a76.752 76.752 0 0 1 152.566 13.218c-0.086 45.71-1.28 91.335-5.288 136.875-3.155 36.67-6.822 73.34-18.761 108.561a25.072 25.072 0 0 0-0.939 13.56c2.815 13.048 12.793 20.637 27.29 20.723 49.377 0.17 98.584 0.511 147.876 0.597 16.885 0.085 33.43 1.705 49.292 7.93a128.346 128.346 0 0 1 76.41 156.575c-7.845 26.863-17.056 53.3-26.522 79.651-32.918 92.103-68.735 183.097-104.297 274.176a65.24 65.24 0 0 1-24.134 29.25c-15.692 11.258-33.686 14.157-52.448 14.157H388.536c-2.388 0-4.776 0-7.164 0.256a25.413 25.413 0 0 0-19.273 38.717c5.8 9.381 14.839 12.28 25.584 12.28 124.594-0.17 249.274-0.085 373.868-0.085 30.7 0 58.843-7.845 83.489-26.607 16.032-12.195 29.507-26.693 37.011-45.966 13.645-34.965 27.46-69.93 41.02-105.065a5069.898 5069.898 0 0 0 85.28-232.218c6.993-20.978 13.474-42.213 14.668-64.471a171.498 171.498 0 0 0-20.126-93.808zM199.214 972.022c-31.468-0.17-62.937 0-94.49-0.085-31.213 0-53.556-22.003-53.556-53.13v-405.08c0-30.616 22.002-52.874 52.703-53.044 32.15-0.256 64.301 0 96.452-0.17 4.434 0 4.35 1.96 4.35 5.116v250.723l0.084 250.297c0 4.605-1.194 5.373-5.543 5.373z" fill="#8a8a8a" p-id="4410"></path></svg>
                        <span>{item.like_count}</span>
                        </p>
                    </div>
                    <p className="txt">{item.content}</p>
                </div>
                })
            }
            
        </div>
        )
    }
  
  componentDidMount(){
      // 判断缓存是否有数据 有缓存就从缓存读数据
      if (sessionStorage.getItem(this.props.uid)) {
        this.setState({
            // page: ++this.state.page,
            comment: JSON.parse(sessionStorage.getItem(this.props.uid)),
        })
    } else {
        // 如果没有缓存发请求
        this.getComment();
    }
  }
  async getComment(){
    const data = await axios.get('https://www.apiopen.top/satinCommentApi?id='+this.props.uid+'&page='+this.state.page)
    // console.log(data.data.data.hot.list)
    
    this.setState({
        //先++后赋值
        page : ++this.state.page,
        //旧数据，新数据 
        comment : [...data.data.data.hot.list,...this.state.comment ],
    })
    sessionStorage.setItem(this.props.uid, JSON.stringify([...data.data.data.hot.list,...this.state.comment]))
}
}; 
export default connect((state)=>{
    return state
})(Comment)
