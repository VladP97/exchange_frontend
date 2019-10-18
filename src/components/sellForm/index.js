import React from "react";


export default class ExForm extends React.Component {


  render() {
    const { color, action } = this.props;

    return (

      <div className="ex__from">
        <div className="ex__form__item fb gray__text">
          <label htmlFor="ex__form__buy" className="ex__form__label">Price:</label>
          <input type="number" id="ex__form__buy" name="price" value="0" step="0.01" min="0.01" className="ex__form__input gray__text" />
          <span className="ex__form__holder">BTC</span>
        </div>
        <div className="ex__form__item fb gray__text">
          <label htmlFor="ex__form__buy" className="ex__form__label">Amount:</label>
          <input type="number" id="ex__form__buy" name="price" value="0" step="0.01" min="0.01" className="ex__form__input gray__text" />
          <span className="ex__form__holder">ARDR</span>
        </div>
        <div className="flex ex__form__btn__row">
          <input type="button" value="25%" className="ex__form__btn l__gray" />
          <input type="button" value="50%" className="ex__form__btn l__gray" />
          <input type="button" value="75%" className="ex__form__btn l__gray" />
          <input type="button" value="100%" className="ex__form__btn l__gray" />
        </div>
        <div className="ex__form__item fb gray__text">
          <label htmlFor="ex__form__buy" className="ex__form__label">Total:</label>
          <input type="number" id="ex__form__buy" name="price" value="0" step="0.01" min="0.01" className="ex__form__input gray__text" />
          <span className="ex__form__holder">BTC</span>
        </div>
        <button type="submit" className={"ex__form__submit " + color}>{action} ARDR</button>
      </div>

    )
  }
}
