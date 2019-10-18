import React from "react";
import { NavLink } from 'react-router-dom';

export default class ExHeader extends React.Component {

    render() {

        return (
            <div className="header gray">
                <div className="container">
                    <div className="row flex">
                        <div className="header__col1">
                            <a href="https://azbit.com/">
                                <img src="/assets/img/logo.png" className="logo__img" />
                            </a>
                        </div>
                        <div className="header__col flex">
                            <div className="header__col__inner">
                                <div className="header__col__text gray__text">
                                    Last price
                                 </div>
                                <div className="header__col__text">
                                    0.0000000031
                                 </div>
                            </div>
                            <div className="header__col__inner">
                                <div className="header__col__text gray__text">
                                    (14.81)
                                </div>
                                <div className="header__col__text mint__text">
                                    +14.81%
                                </div>
                            </div>
                            <div className="header__col__inner ">
                                <div className="header__col__text gray__text">
                                    Low
                                </div>
                                <div className="header__col__text">
                                    0.0000000026
                                 </div>
                            </div>
                            <div className="header__col__inner ">
                                <div className="header__col__text gray__text">
                                    High
                                </div>
                                <div className="header__col__text">
                                    0.0000000026
                                </div>
                            </div>
                            <div className="header__col__inner">
                                <div className="header__col__text gray__text">
                                    Volume
                                </div>
                                <div className="header__col__text">
                                    9.76
                                </div>
                            </div>
                        </div>

                        <div className="header__col  cur__col" >
                            <div className="fac">
                                <img src="/assets/img/car__img.png" className="header__col__cur__img" />
                                <div className="header__coc_cur__text">
                                    AZ/BTC
                                </div>
                                <div className="header__col__cur__link">
                                </div>
                            </div>

                        </div>
                        <div className="header__col">
                            <div className="fac">
                                <img src="/assets/img/walet.png" className="header__col__wal__img" />
                                <div>
                                    <div className="header__col__text">
                                        11.4400432 BTC
                                    </div>
                                    <div className="header__col__text gray__text">
                                        24,000.12 USD (est.)
                                     </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="header__col">
                            <div className="fac">
                                <img src="../../../assets/img/login.png" className="header__col__login__img" />
                                <a href="" className="header__col__login">My Account </a>
                                <a href="" className="header__col__logout gray__text"> | Logout</a>
                            </div>
                        </div> */}
                        <div className="header__col">
                            <div className="fac">
                            <img src="/assets/img/login.png" className="header__col__login__img" />
                                <NavLink className="" to="/login" exact >
                                    Login
                                </NavLink>
                            </div>
                        </div>
                        <div className="header__col">
                            <div className="fac">
                                <img src="/assets/img/lang.png" className="header__col__lang__img" />
                                <a href="" className="header__col__lang">ENGLISH</a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

