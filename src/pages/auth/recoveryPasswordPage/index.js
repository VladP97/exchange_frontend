import React from 'react';
import LoginHeader from '../../../components/loginHeader';
import "../index.css";
import AuthForm from '../../../components/authForm/index';
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom';
class RecoveryPasswordPage extends React.Component{
    render(){
        return(
            <>
                <section id="authForm">
                
                    <div className="container flexjcac column">
                        <LoginHeader text="Password recovery" 
                                    span="Do not worry, just enter your email and we'll send you a link to reset your password" 
                                     />
                        <AuthForm data = {this.props.state}
                                  buttons={
                                      <div>
                                        <div>
                                            <button className="auth__form__smb" type="submit" id="">RESET THE PASSWORD</button>
                                        </div>
                                        <div>
                                        <NavLink  to="/login" exact className="auth__form__smb auth__form_buttonlink">
                                        Cancel
                                        </NavLink>
                                       
                                        </div>
                                      </div>
                                  }/>
                </div>
            </section>
            </>
        );
    }
}

function mapStateToProps(state){
    return{
        state:state.passRecReducer.formData
    }; 
}

export default connect(mapStateToProps)(RecoveryPasswordPage);