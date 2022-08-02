import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <nav class="navbar navbar-expand-sm footercolor" >
            <div class="collapse navbar-collapse px-5" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active ">
                        <div className="footerinline">
                            <a class="nav-link linkunderline colorgrey" style={{ paddingRight: '0px' }} href="#">Terms Of Use</a>
                            <span class="nav-link" style={{ color: 'grey' }}>|</span>
                        </div>

                    </li>
                    <li class="nav-item">
                        <div className="footerinline">
                            <a class="nav-link linkunderline colorgrey" style={{ paddingRight: '0px', paddingLeft: '0px' }} href="#">Privacy Policy</a>
                            <span class="nav-link" style={{ color: 'grey' }}>|</span>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div className="footerinline">
                            <a class="nav-link linkunderline colorgrey" style={{ paddingRight: '0px', paddingLeft: '0px' }} href="#">Internet-Based Ads</a>
                            <span class="nav-link" style={{ color: 'grey' }}>|</span>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div className="footerinline">
                            <a class="nav-link linkunderline colorgrey" style={{ paddingRight: '0px', paddingLeft: '0px' }} href="#">Addendum to the Global Privacy Policy</a>
                            <span class="nav-link" style={{ color: 'grey' }}>|</span>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div className="footerinline">
                            <a class="nav-link linkunderline colorgrey" style={{ paddingLeft: '0px' }} href="#">Feedback</a>
                        </div>
                    </li>
                </ul>

            </div>
            <div className='px-5'>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link linkunderline colorgrey" href="#">© 2022 ESPN Sports Media Ltd. All rights reserved</a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Footer