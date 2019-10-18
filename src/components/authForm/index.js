import React from 'react';
export default class AuthForm extends React.Component{
        render(){
            console.log(this.props)
            const itemsList = this.props.data.map((item,index) => {
                    return(
                        <div key={index} className="auth__form_inpContainer">
                            <input className="auth_form__input" required
                                                                 name={item.name} 
                                                                 type={item.type} 
                                                                 placeholder={item.placeholder} />
                        <label>{item.placeholder}</label>
                        </div>
                    )
            })
            return(
                <>
                    <form className="auth__form">
                        {itemsList}
                        {this.props.link}
                        {this.props.checkBox}
                        {this.props.buttonSign}
                        {this.props.buttonCreate}
                        {this.props.buttons} 
                    </form>
                </>
            );
        }
    }
    
