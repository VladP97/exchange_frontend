import React from "react";


export default class Chat extends React.Component{

    render(){
        return (
                <React.Fragment >
                    <div className="chat__col">
                    <div className="chat__title">
                        CHAT
                    </div>
                        <div className="chat__text m__gray">
                        <span className="chat__text__name gray__text">Admin1:</span>
                            Guys, please make sure everyone sent me test report last week.
                        </div>
                    </div>
                    <form className="chat__form">
                        <div className="facjc">
                            <input type="text"  name="mes" value=""  className="chat__form__input" />
                            <button type="submit" className="chat__form__submit mint">Send</button>
                        </div>
                    </form>
                </React.Fragment >
        )
    }
}

