import React, { useState } from "react";
const SideNav=(props)=>{
    const [expandSideNav, setExpandSideNav] = useState(false)
    const toggleSideNav=()=>{
       setExpandSideNav(!expandSideNav)
    }
    return(
        <React.Fragment>
            <div className={ expandSideNav ? "side-nav show" : "side-nav" } onMouseEnter={toggleSideNav} onMouseLeave={toggleSideNav}>
                <ol className="menu-content">
                    <li className="border-bottom">
                        <span>
                            <svg className="fill-white" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="22" width="22">
                                <g data-name="20-Compass" id="_20-Compass">
                                    <path d="M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0Zm0,46A22,22,0,1,1,46,24,22,22,0,0,1,24,46Z"/>
                                    <path d="M24.94,15.65a1,1,0,0,0-1.87,0l-3,8a1,1,0,0,0,0,.7l3,8a1,1,0,0,0,1.87,0l3-8a1,1,0,0,0,0-.7ZM24,29.15,22.07,24,24,18.85,25.93,24Z"/>
                                    <path d="M24,5A19,19,0,1,0,43,24,19,19,0,0,0,24,5Zm1,35.95V37H23v3.95A17,17,0,0,1,7.05,25H11V23H7.05A17,17,0,0,1,23,7.05V11h2V7.05A17,17,0,0,1,40.95,23H37v2h3.95A17,17,0,0,1,25,40.95Z"/>
                                </g>
                            </svg>
                        </span>
                       {expandSideNav && <span>Compass</span>}
                    </li>
                    <li className="border-bottom" style={{"paddingLeft" :"8px"}}>
                        <div className="search-container">
                            <span>
                                <svg className="fill-white" enableBackground="new 0 0 32 32" id="Editable-line" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="22" width="22">
                                    <circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                                    <line fill="none" id="XMLID_44_" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="27" x2="20.366" y1="27" y2="20.366"/>
                                </svg>
                            </span>
                            {expandSideNav && <input className="form-control" type="text" placeholder="Search.." name="search" id="search"/>}
                        </div>
                    </li>
                    <li className="with-caret">
                        <span>
                            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" id="add_black_icon_18px" height="22" width="22" viewBox="0 0 18 18">
                                <g id="Group_15964" data-name="Group 15964">
                                    <rect id="Rectangle_3305" data-name="Rectangle 3305" width="18" height="18" fill="none"/>
                                    <path id="Path_22960" data-name="Path 22960" d="M69.226,601.175H61.657v-7.569a.716.716,0,1,0-1.431,0v7.569H52.657a.716.716,0,1,0,0,1.431h7.569v7.569a.716.716,0,0,0,1.431,0v-7.569h7.569a.716.716,0,0,0,0-1.431Z" transform="translate(-51.941 -592.89)"/>
                                </g>
                            </svg>
                        </span>
                        {expandSideNav && <span>Create</span>}
                        <svg className="fill-white" className="caret" id="Layer_1" style={{"enableBackground":"new 0 0 512 512"}} version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="22" width="22">
                            <polygon fill="#ffffff" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 "/>
                        </svg>
                    </li>
                    <li>
                        <span>
                            <svg className="fill-white" baseProfile="tiny" id="Layer_1" version="1.2" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="22" width="22">
                                <path d="M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3  c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768  C18.184,8.34,12,3,12,3z"/>
                            </svg>
                        </span>
                        {expandSideNav && <span>Home</span>}
                    </li>
                    <li>
                        <span>
                            <svg className="fill-white" id="Layer_1" style={{"enableBackground":"new 0 0 256 256"}} version="1.1" viewBox="0 0 256 256" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="22" width="22">
                                <g>
                                    <path d="M248.7,219.8C248.7,219.8,248.6,219.8,248.7,219.8l-0.1,0c-0.1-0.2-0.2-0.4-0.4-0.5l-36.5-44.6   c27.1-44.2,20.5-102.2-16.3-139.2C151.3-8.6,79.5-8.8,35.2,35.3c-43.9,44.2-43.8,116,0.4,160c36.9,36.8,94.9,43.5,139.2,16.3   l44.4,36.3c0.2,0.2,0.6,0.6,0.8,0.7c3.9,3.3,8.6,5,13.3,5c4.8,0,9.5-1.7,13.5-5l2-1.9c0.3-0.3,0.6-0.7,0.8-1.1   C255.3,238,255.1,227.3,248.7,219.8z M241,239.8c-0.1,0.1-0.2,0.3-0.3,0.4l-0.8,0.7c-3.9,3.3-9.5,3.3-13.5-0.1l-0.3-0.3   c-0.1-0.1-0.2-0.2-0.4-0.3l-47.4-38.8c-0.9-0.8-2.1-1.2-3.2-1.2c-1,0-2,0.3-2.9,0.9l-0.4,0.3c-40.5,26.5-94.8,20.9-129.1-13.3   C2.6,148.1,2.5,82.8,42.5,42.4C82.7,2.4,148,2.6,188.1,42.7c34.2,34.3,39.8,88.6,13.3,129.1l-0.3,0.5c-1.2,1.9-1.1,4.3,0.3,6   l38.8,47.4l0,0c0.2,0.2,0.4,0.4,0.5,0.6l0.1,0.1C244.2,230.3,244.3,235.9,241,239.8z"/>
                                    <path d="M115.3,179.3c-35.2,0-63.8-28.6-63.8-63.8c0-31.6,22.7-58,53.4-62.9V42.3c-36.5,5.1-63.6,36-63.6,73.2   c0,40.8,33.2,74,74,74c37.2,0,68.2-27.1,73.2-63.6h-10.3C173.3,156.6,146.9,179.3,115.3,179.3z"/>
                                    <path d="M122.8,41.9l-5.6-0.6v72.3h72.3l-0.6-5.6C185.4,73.2,157.6,45.4,122.8,41.9z M127.4,103.4V52.9   c25.5,4.9,45.6,25.1,50.5,50.5H127.4z"/>
                                </g>
                            </svg>
                        </span>
                        {expandSideNav && <span>Explore Data</span>}
                    </li>
                    <li>
                        <span>
                            <svg className="fill-white" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="22" width="22">
                                <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                                    <g fill="#000" id="icon-26-grinning-face">
                                        <path d="M16.5,29 C23.4035597,29 29,23.4035597 29,16.5 C29,9.59644029 23.4035597,4 16.5,4 C9.59644029,4 4,9.59644029 4,16.5 C4,23.4035597 9.59644029,29 16.5,29 L16.5,29 Z M16.5,28 C22.8512749,28 28,22.8512749 28,16.5 C28,10.1487251 22.8512749,5 16.5,5 C10.1487251,5 5,10.1487251 5,16.5 C5,22.8512749 10.1487251,28 16.5,28 L16.5,28 Z M12,14 C12.5522848,14 13,13.5522848 13,13 C13,12.4477152 12.5522848,12 12,12 C11.4477152,12 11,12.4477152 11,13 C11,13.5522848 11.4477152,14 12,14 L12,14 Z M21,14 C21.5522848,14 22,13.5522848 22,13 C22,12.4477152 21.5522848,12 21,12 C20.4477152,12 20,12.4477152 20,13 C20,13.5522848 20.4477152,14 21,14 L21,14 Z M16.4969482,21 C13.5,21 12,20 12,20 C12,20 13,23 16.5,23 C20,23 21,20 21,20 C21,20 19.4938965,21 16.4969482,21 L16.4969482,21 Z" id="grinning-face"/>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        {expandSideNav && <span>Things I Like</span>}
                    </li>
                </ol>
                <ol className="menu-content">
                    <li>
                        <span>
                            <svg className="fill-white" id="recent-time-search-reload-time" style={{"enableBackground":"new 0 0 14.947 13"}} version="1.1" viewBox="0 0 14.947 13" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="22" width="22">
                                <path d="M8.447,0C5.441,0,2.911,2.055,2.172,4.832L0.895,2.276L0,2.724l2.268,4.536L6.747,3.9l-0.6-0.8L3.055,5.419  C3.559,2.902,5.785,1,8.447,1c3.033,0,5.5,2.467,5.5,5.5S11.48,12,8.447,12v1c3.584,0,6.5-2.916,6.5-6.5S12.031,0,8.447,0z"/>
                                <polygon fill="#ffffff" points="7.947,3.5 7.947,6.768 11.17,8.916 11.725,8.084 8.947,6.232 8.947,3.5 "/>
                            </svg>
                        </span>
                        {expandSideNav && <span>Recents</span>}
                    </li>
                    <li style={{"display": "block"}}>
                        <span className="user-icon">
                            AH
                        </span>
                        {expandSideNav && <span>Alex Hamilton</span>}
                    </li>
                </ol>
            </div>
        </React.Fragment>
    )
}
export default SideNav