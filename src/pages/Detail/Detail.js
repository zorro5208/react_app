import React from 'react'
import './Detail.css'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header.js';
import Comment from '../../components/Comment/Comment.js';
import Footer from '../../components/Footer/Footer.js';

class Detail extends React.Component {
    render() {
        return ( 
            <div className="detail">
                <Header state={{
                    name:'详情',
                    type : (
                        <svg t="1561561397755" className="icon" viewBox="0 0 1024 1024" 
                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2573" width="30" 
                        height="30" onClick = {this.goPrev.bind(this)}>
                            <path d="M674.22000122 836.44000244c-6.5177679 0-13.10795546-2.31742859-18.10491084-6.95228577L331.67508793 528.80135728c-9.99391079-9.26971435-9.99391079-24.33300019 0-33.60271456L656.11509038 194.51228333c9.99391079-9.26971435 26.21591092-9.26971435 36.20982169 0 9.99391079 9.26971435 9.99391079 24.33300019 0 33.60271454L385.98982048 512l306.33509159 283.88500214c9.99391079 9.26971435 9.99391079 24.33300019 0 33.60271453-4.9969554 4.63485718-11.58714294 6.95228576-18.10491085 6.95228577z" p-id="2574" fill="#ffffff"></path></svg>
                    )
                }}></Header>
                <div className="weui-panel weui-panel_access">
                    {
                        this.props.content.map((item,index)=>{
                            return <div className="weui-panel__bd" key={index}>
                            <div className="title">
                                <p className="img">
                                    <img src={item.header}></img>
                                    <span>{item.username}</span>
                                </p>
                                <p><span className="time">{item.passtime}</span></p>
                            </div>
                            <div className="content">
                                <p className="name">{item.text}</p>
                                {
                                    item.video?
                                        <video width="100%" height="240" controls={true} src={item.video} type="video/mp4">
                                            </video>
                                    :
                                        <img src={item.thumbnail}></img>
                                    
                                }
                                <ul className="foot">
                                    <li>
                                        <svg t="1561551925772" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4409" width="20" height="20">
                                            <path d="M693.07 289.952v0.17l0.257-4.69-0.256 4.605z m309.823 164.932c-32.406-58.844-82.04-92.103-149.581-95.343-40.934-1.877-81.869-0.683-122.889-0.853l-5.543-0.17c0-0.939 0-1.45 0.17-1.962a778.607 778.607 0 0 0 11.855-88.35c2.302-28.143 3.837-56.37 4.35-84.598 0.425-24.39 2.728-48.866-0.854-73a121.95 121.95 0 0 0-69.247-96.281c-43.408-21.405-86.56-18.591-127.238 7.59-30.274 19.444-48.61 47.757-55.432 83.233-2.985 15.095-2.303 30.275-2.303 45.54 0.171 40.508-7.334 79.566-26.266 115.469-49.121 92.87-126.64 141.224-232.217 143.185-40.764 0.768-81.613 0.17-122.462 0.085-12.11 0-23.964 1.45-35.392 5.458C26.437 430.237 0 467.761 0 514.068v404.483c0 13.9 1.876 27.46 7.42 40.082 17.055 38.888 46.648 61.913 89.288 63.704 44.09 1.876 88.35 0.597 132.525 0.682 4.264 0 8.528-0.597 12.28-2.558 10.66-5.714 14.498-14.924 14.498-26.437-0.086-173.46 0-346.92 0-520.293 0-4.69-1.962-10.831 0.852-13.645 2.388-2.559 8.528-1.535 12.963-2.218a303.682 303.682 0 0 0 131.075-49.462 304.45 304.45 0 0 0 120.672-157.768c11.939-34.965 16.373-70.953 15.862-107.709-0.086-8.784-0.341-17.567 0.853-26.351a76.752 76.752 0 0 1 152.566 13.218c-0.086 45.71-1.28 91.335-5.288 136.875-3.155 36.67-6.822 73.34-18.761 108.561a25.072 25.072 0 0 0-0.939 13.56c2.815 13.048 12.793 20.637 27.29 20.723 49.377 0.17 98.584 0.511 147.876 0.597 16.885 0.085 33.43 1.705 49.292 7.93a128.346 128.346 0 0 1 76.41 156.575c-7.845 26.863-17.056 53.3-26.522 79.651-32.918 92.103-68.735 183.097-104.297 274.176a65.24 65.24 0 0 1-24.134 29.25c-15.692 11.258-33.686 14.157-52.448 14.157H388.536c-2.388 0-4.776 0-7.164 0.256a25.413 25.413 0 0 0-19.273 38.717c5.8 9.381 14.839 12.28 25.584 12.28 124.594-0.17 249.274-0.085 373.868-0.085 30.7 0 58.843-7.845 83.489-26.607 16.032-12.195 29.507-26.693 37.011-45.966 13.645-34.965 27.46-69.93 41.02-105.065a5069.898 5069.898 0 0 0 85.28-232.218c6.993-20.978 13.474-42.213 14.668-64.471a171.498 171.498 0 0 0-20.126-93.808zM199.214 972.022c-31.468-0.17-62.937 0-94.49-0.085-31.213 0-53.556-22.003-53.556-53.13v-405.08c0-30.616 22.002-52.874 52.703-53.044 32.15-0.256 64.301 0 96.452-0.17 4.434 0 4.35 1.96 4.35 5.116v250.723l0.084 250.297c0 4.605-1.194 5.373-5.543 5.373z" fill="#8a8a8a" p-id="4410"></path></svg>
                                        <span>{item.up}</span>
                                    </li>
                                    <li>
                                        <svg t="1561551858125" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3929" width="20" height="20"><path d="M48.464 631.08700001c48.699 62.928 143.57 58.704 250.284 56.35599999-2.209 25.413-4.421 50.832-6.63 76.246-19.954 124.422 6.40100001 225.148 107.739 243.653 25.172 4.597 57.261 1.206 76.246-6.63 50.216-20.73 66.13900001-69.316 76.244-130.943 6.03-36.774-4.886-78.582 3.314-111.053 10.411-41.21899999 42.025-71.825 74.588-91.163 39.233-23.301 89.891-37.523 142.546-46.411 84.102-14.197 199.811 28.752 228.737-39.78 12.732-30.167 4.972-88.664 4.97199999-127.629 0-98.887 0-197.80700001 1e-8-296.694 0.005-56.361 3.995-104-28.178-127.629-32.115-23.589-175.184-12.1-232.052-11.602 0 183.962 0 367.98499999 0 551.951-108.558 5.808-220.308 82.921-245.311 174.039-18.901 68.882 15.14099999 176.963-44.751 203.87300001-126.281 56.74-118.138-130.886-104.42199999-217.13100001 3.316-33.147 6.63-66.303 9.94499999-99.451 0-1.65700001 0-3.314 0-4.97200001-88.64 3.39599999-225.769 27.517-270.174-31.49199999-24.46-32.502-25.201-96.493-11.603-142.546 25.901-87.719 115.413-308.391 174.039-354.708 35.045-27.688 60.869-9.38899999 114.369-18.232 97.231-1.658 194.49-3.314 291.721-4.972 0-18.784 0-37.573 0-56.354-131.482 1.657-263.004 3.314-394.486 4.971-26.544 7.717-60.47599999 39.373-76.246 59.671-25.17 32.401-38.386 72.814-59.67100001 109.396-42.378 72.842-80.09 159.218-104.42299999 246.97-18.87300001 68.061-11.397 147.559 23.206 192.269zM802.631 74.165c46.958 0 93.93099999 0 140.89-1e-8 15.929 26.039 6.63 94.318 6.62999999 132.60100001-0.553 117.671-1.106 235.37700001-1.65699999 353.05-22.059 12.835-111.344 5.428-145.861 4.972 0-163.524 0-327.101 0-490.623z" p-id="3930" fill="#8a8a8a"></path></svg>
                                        <span>{item.down}</span>
                                    </li>
                                    <li>
                                       <svg t="1561552555271" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6111" width="22" height="22"><path d="M834.559417 516.066619c-12.96529 0-23.475667 10.513448-23.475667 23.477714l0 221.939765c0 28.479635-23.170722 51.650357-51.650357 51.650357L264.045745 813.134455c-28.480658 0-51.647287-23.170722-51.647287-51.650357L212.398458 295.443849c0-28.479635 23.166629-51.644217 51.647287-51.644217l161.473625 0c12.96222 0 23.471574-10.514471 23.471574-23.482831 0-12.961196-10.509355-23.474644-23.471574-23.474644L264.045745 196.842157c-54.366212 0-98.600669 44.231387-98.600669 98.600669l0 466.040249c0 54.370305 44.234457 98.600669 98.600669 98.600669l495.387647 0c54.373375 0 98.600669-44.231387 98.600669-98.600669L858.034061 539.545356C858.034061 526.580067 847.527776 516.066619 834.559417 516.066619L834.559417 516.066619 834.559417 516.066619zM341.910137 653.633764c-2.333138 12.755512 6.113231 24.988114 18.865673 27.321252 1.428535 0.264013 2.850931 0.388856 4.254907 0.388856 11.114129 0 20.989033-7.92653 23.065322-19.250436 0.179079-0.986467 18.804275-99.722212 83.633792-197.880813 37.722136-57.121975 83.436294-102.544491 135.867434-135.009903 50.046836-30.989805 106.61111-50.279127 168.731936-57.635675l-76.428693 78.850859c-9.024537 9.31004-8.791224 24.173562 0.51984 33.197076 4.555759 4.417613 10.44591 6.619768 16.331967 6.619768 6.133697 0 12.259208-2.387373 16.85897-7.139607l118.322849-122.075313c0.088004-0.088004 0.165776-0.182149 0.252757-0.277316 0.121773-0.124843 0.240477-0.25378 0.358157-0.384763 0.128937-0.14224 0.25685-0.290619 0.385786-0.438998 0.016373-0.019443 0.033769-0.044002 0.053212-0.060375 0.11461-0.145309 0.233314-0.283456 0.347924-0.425695 0.125867-0.152473 0.252757-0.311085 0.36839-0.469698 0.11461-0.145309 0.223081-0.293689 0.337691-0.442068 0.127913-0.179079 0.25685-0.361227 0.384763-0.540306 0.081864-0.121773 0.165776-0.246617 0.246617-0.36839 0.080841-0.12075 0.165776-0.242524 0.240477-0.36839 0.026606-0.039909 0.053212-0.086981 0.086981-0.135076 0.017396-0.030699 0.036839-0.067538 0.058328-0.101307 0.074701-0.118704 0.145309-0.239454 0.220011-0.358157 0.11768-0.212848 0.239454-0.418532 0.358157-0.62524 0.067538-0.12075 0.127913-0.239454 0.192382-0.358157 0.024559-0.044002 0.048095-0.091074 0.070608-0.135076 0.084934-0.168846 0.176009-0.341784 0.25992-0.509606 0.067538-0.14224 0.135076-0.286526 0.202615-0.428765 0.095167-0.198521 0.182149-0.391926 0.270153-0.594541 0.070608-0.158612 0.130983-0.320295 0.198521-0.48607 0.077771-0.186242 0.148379-0.36839 0.220011-0.550539 0.067538-0.186242 0.1361-0.36839 0.199545-0.553609 0.057305-0.169869 0.11461-0.337691 0.168846-0.503467 0.067538-0.203638 0.128937-0.409322 0.189312-0.610914 0.044002-0.162706 0.086981-0.318248 0.130983-0.479931 0.060375-0.208754 0.11461-0.425695 0.162706-0.641613 0.030699-0.128937 0.064468-0.25685 0.094144-0.388856 0.010233-0.035816 0.014326-0.076748 0.023536-0.110517 0.044002-0.203638 0.084934-0.409322 0.124843-0.615007 0.019443-0.118704 0.044002-0.237407 0.067538-0.355087 0.013303-0.094144 0.026606-0.181125 0.044002-0.276293 0.023536-0.161682 0.044002-0.320295 0.070608-0.481977 0.013303-0.105401 0.029676-0.213871 0.044002-0.318248 0.019443-0.154519 0.036839-0.299829 0.053212-0.455371 0.010233-0.088004 0.017396-0.179079 0.023536-0.264013 0.010233-0.080841 0.017396-0.154519 0.024559-0.236384 0.00307-0.047072 0.007163-0.092098 0.013303-0.135076 0.013303-0.206708 0.027629-0.409322 0.040932-0.615007 0-0.030699 0-0.064468 0.00307-0.095167 0.00307-0.124843 0.010233-0.249687 0.013303-0.37453 0 0 0-0.010233 0.00307-0.014326 0.007163-0.249687 0.010233-0.496304 0.010233-0.750083l0-0.007163 0-0.016373c0-0.388856-0.010233-0.766456-0.027629-1.151219-0.00307-0.033769-0.00307-0.064468-0.00921-0.095167-0.00307-0.074701-0.00307-0.145309-0.007163-0.212848l0-0.016373c-0.017396-0.274246-0.040932-0.538259-0.067538-0.804319-0.010233-0.077771-0.020466-0.158612-0.027629-0.236384l0-0.00307c-0.00614-0.040932-0.00614-0.081864-0.00921-0.121773-0.030699-0.242524-0.061398-0.483001-0.098237-0.726547-0.013303-0.104377-0.026606-0.208754-0.042979-0.314155-0.007163-0.044002-0.014326-0.084934-0.024559-0.128937-0.030699-0.205685-0.070608-0.408299-0.10847-0.610914-0.026606-0.130983-0.053212-0.26606-0.080841-0.398066 0-0.019443-0.00614-0.039909-0.013303-0.057305-0.007163-0.044002-0.017396-0.084934-0.024559-0.124843-0.033769-0.151449-0.070608-0.299829-0.104377-0.449231-0.057305-0.246617-0.12075-0.493234-0.188288-0.73985-0.027629-0.094144-0.054235-0.188288-0.080841-0.280386-0.080841-0.286526-0.168846-0.574075-0.264013-0.857531-0.016373-0.053212-0.036839-0.10847-0.053212-0.161682-0.067538-0.199545-0.128937-0.402159-0.206708-0.604774-0.00614-0.019443-0.016373-0.042979-0.026606-0.067538-0.030699-0.086981-0.067538-0.171915-0.101307-0.25685-0.010233-0.033769-0.023536-0.060375-0.036839-0.091074-0.080841-0.208754-0.161682-0.421602-0.246617-0.62831-0.051165-0.11461-0.10847-0.232291-0.158612-0.347924-0.00307-0.010233-0.007163-0.019443-0.007163-0.019443-0.097214-0.220011-0.188288-0.429789-0.289596-0.638543 0 0-0.007163-0.00921-0.007163-0.013303-0.220011-0.459464-0.459464-0.905626-0.710175-1.351787l0-0.00307c-0.182149-0.317225-0.370437-0.63138-0.563842-0.945535-0.019443-0.030699-0.044002-0.064468-0.060375-0.094144-0.11154-0.176009-0.223081-0.354064-0.341784-0.527003l-0.023536-0.033769c-0.058328-0.084934-0.11461-0.169869-0.179079-0.25992-0.060375-0.088004-0.130983-0.182149-0.199545-0.276293-0.050142-0.068562-0.101307-0.13917-0.148379-0.206708-0.051165-0.067538-0.095167-0.135076-0.145309-0.195451-0.047072-0.067538-0.098237-0.1361-0.152473-0.203638-0.118704-0.161682-0.249687-0.317225-0.375553-0.475837-0.067538-0.080841-0.130983-0.158612-0.198521-0.240477-0.033769-0.050142-0.074701-0.094144-0.10847-0.145309-0.162706-0.182149-0.327458-0.36839-0.490164-0.549515-0.042979-0.051165-0.083911-0.098237-0.130983-0.145309-0.223081-0.25071-0.455371-0.490164-0.692778-0.729617-0.019443-0.020466-0.040932-0.040932-0.063445-0.061398-0.249687-0.252757-0.506537-0.499373-0.77055-0.738827-0.013303-0.010233-0.023536-0.017396-0.030699-0.026606-0.26913-0.242524-0.537236-0.476861-0.816598-0.703011-0.014326-0.013303-0.030699-0.026606-0.044002-0.040932-0.264013-0.215918-0.533143-0.428765-0.807389-0.63138-0.036839-0.026606-0.070608-0.060375-0.110517-0.088004-0.24764-0.182149-0.497327-0.358157-0.754177-0.530073-0.070608-0.053212-0.144286-0.104377-0.218988-0.155543-0.125867-0.083911-0.25071-0.168846-0.381693-0.249687-0.097214-0.067538-0.202615-0.124843-0.303922-0.188288-0.11461-0.070608-0.230244-0.14224-0.344854-0.209778-0.104377-0.060375-0.202615-0.124843-0.303922-0.185218-0.11461-0.061398-0.226151-0.118704-0.337691-0.182149-0.135076-0.074701-0.273223-0.148379-0.409322-0.220011-0.195451-0.10847-0.391926-0.206708-0.590448-0.303922-0.152473-0.077771-0.303922-0.145309-0.456395-0.215918-0.188288-0.086981-0.3776-0.176009-0.563842-0.25378-0.171915-0.077771-0.347924-0.148379-0.520863-0.215918-0.168846-0.070608-0.343831-0.145309-0.51984-0.205685-0.192382-0.077771-0.384763-0.14224-0.584308-0.212848-0.155543-0.058328-0.317225-0.11154-0.472767-0.158612-0.104377-0.036839-0.202615-0.067538-0.306992-0.098237l-172.325787-57.132208c-12.30935-4.082992-25.594935 2.589988-29.671787 14.893198-4.079922 12.310374 2.589988 25.592888 14.894222 29.67281l69.310575 22.978341c-50.945299 11.009751-98.219999 29.928636-141.339052 56.621579-58.253752 36.075637-108.833731 86.22071-150.32982 149.052734C362.493941 544.408107 342.717526 649.222291 341.910137 653.633764L341.910137 653.633764 341.910137 653.633764zM341.910137 653.633764" p-id="6112" fill="#8a8a8a"></path></svg>
                                        <span>{item.forward}</span>
                                    </li>
                                    <li>
                                        <svg t="1561552039559" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5270" width="20" height="20"><path d="M367.997282 801.320385 265.174452 801.320385c-82.98297 0-150.247956-68.965721-150.247956-154.065911L114.926496 247.550049c0-85.113493 67.314105-154.065911 150.528342-154.065911l491.678162 0c83.147722 0 150.535505 68.982094 150.535505 154.065911l0 399.705448c0 85.195358-67.185168 154.065911-150.492526 154.065911L628.585275 801.321408c-6.860245 0-13.425777 2.867304-18.179035 7.9296L475.563136 953.289542c-9.627265 10.29446-9.30697 26.624381 0.726547 36.502355s25.982768 9.529027 35.611056-0.74599l134.850268-144.038534-18.165732 7.936763 128.591727 0c111.129007 0 200.853517-91.990111 200.853517-205.688639L958.030519 247.550049c0-113.616664-89.951685-205.694779-200.896496-205.694779l-491.678162 0c-111.020536 0-200.899566 92.045369-200.899566 205.694779l0 399.705448c0 113.616664 89.816608 205.688639 200.61918 205.688639l102.82283 0c13.911848 0 25.187659-11.56336 25.187659-25.807782C393.184941 812.864302 381.90913 801.320385 367.997282 801.320385L367.997282 801.320385 367.997282 801.320385zM282.950304 377.439328l386.43112 0c13.904685 0 25.174356-11.542894 25.174356-25.814945 0-14.251585-11.269671-25.814945-25.174356-25.814945l-386.43112 0c-13.904685 0-25.180496 11.56336-25.180496 25.814945C257.769808 365.896434 269.045619 377.439328 282.950304 377.439328L282.950304 377.439328 282.950304 377.439328zM282.950304 538.777877l456.685183 0c13.914918 0 25.187659-11.550057 25.187659-25.801642 0-14.264888-11.272741-25.821085-25.187659-25.821085L282.950304 487.155149c-13.904685 0-25.180496 11.556197-25.180496 25.821085C257.769808 527.22782 269.045619 538.777877 282.950304 538.777877L282.950304 538.777877 282.950304 538.777877zM282.950304 538.777877" p-id="5271" fill="#8a8a8a"></path></svg>
                                        <span>{item.comment}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        })
                    }
                </div>
                <Comment></Comment>
                <Footer></Footer>
            </div>
        );
    }
    goPrev(){
        window.history.go(-1)
    }
    
}

export default connect((state)=>{
    return state
})(Detail)