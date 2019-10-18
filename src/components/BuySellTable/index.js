import React from "react";


export default class BuySellTable extends React.Component {


  toggleHover(e) {
    e.currentTarget.style.background = this.props.colorHover;
    let el = e.currentTarget[this.props.sibling];
    while (el) {
      el.style.background = this.props.colorHover;
      el = el[this.props.sibling];
    }
  }
  toggleLeave(e) {
    e.currentTarget.style.background = '';
    let el = e.currentTarget[this.props.sibling];
    while (el) {
      el.style.background = '';
      el = el[this.props.sibling];
    }
  }

  render() {
    const { text, table } = this.props
   
    return (
      <table className={"ex__table " + table}>
        <tbody>
          <tr className=""
            onMouseEnter={(e) => this.toggleHover(e)}
            onMouseLeave={(e) => this.toggleLeave(e)}
          >
            <td className={text}> 0.00000002 </td>
            <td className="m__gray"> 2142857 </td>
            <td className="m__gray">7.71428520 </td>
          </tr>
          <tr className=""
            onMouseEnter={(e) => this.toggleHover(e)}
            onMouseLeave={(e) => this.toggleLeave(e)}
          >
            <td className={text}> 0.00000002 </td>
            <td className=" m__gray"> 2142857 </td>
            <td className=" m__gray">7.71428520</td>
          </tr>
          <tr className=""
            onMouseEnter={(e) => this.toggleHover(e)}
            onMouseLeave={(e) => this.toggleLeave(e)}
          >
            <td className={text}> 0.00000002 </td>
            <td className=" m__gray"> 2142857 </td>
            <td className="m__gray">7.71428520</td>
          </tr>
          <tr className=""
            onMouseEnter={(e) => this.toggleHover(e)}
            onMouseLeave={(e) => this.toggleLeave(e)}
          >
            <td className={text}> 0.00000002 </td>
            <td className=" m__gray"> 2142857</td>
            <td className="m__gray"> 7.71428520</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

