import React from 'react';
import LoginHeader from '../../../components/loginHeader';
import "../index.css";
import AuthForm from '../../../components/authForm/index';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
class LoginPage extends React.Component{
    render(){
        return(
            <section id="authForm">
                
                <div className="container flexjcac column">
                    <LoginHeader text="Welcome back!" 
                                 span="Not registered yet?" 
                                 lnk="/register" 
                                 txtlnk="Create your account" />
                    <AuthForm
                    link ={
                            <div>
                                 <NavLink  to="/recovery" exact className="auth__form_recoveryLink">
                                 Forgot your password?
                                 </NavLink>
                               
                           </div>
                    }
                    buttonSign = {
                            <div>
                                <button className="auth__form__smb" type="submit">Sign in</button>
                            </div>
                    }
                     data = {this.props.state}/>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state){
    return{
        state:state.signInReducer.formData
    }; 
}

export default connect(mapStateToProps)(LoginPage);