import React from 'react'
import './index.css'
import { TVChartContainer } from "../../components/TVChartContainer/index.jsx"
import ExForm from '../../components/sellForm/'
import Chat from '../../components/Chat'
import Options from '../../components/Options'
import SideMenu from '../../components/SideMenu'
import BuySellTable from '../../components/BuySellTable/'
import ExHeader from '../../components/ExHeader'
import HistoryTable from '../../components/HistoryTable'
import DealTable from '../../components/DealTable'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group'
import { connect } from "react-redux"
import actions from "../../actions/"
import io from "socket.io-client";

class Ex extends React.Component {

  componentDidMount() {
   // const socket = io("/")
   // socket.emit("msg", "hello")
    //this.props.load()
  
  }
  state = {
    chatShow: false,
    gridTable: "rgtable"
  }
  toggleChat = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      chatShow: !prevState.chatShow
    })
    )
  }
  toggleGridTable = (e) => {
    e.preventDefault();
    this.setState({
      gridTable: e.currentTarget.attributes.data.value
    })

  }
  render() {
console.log(this.props.loading)   
    let dealTable = "";
    if(this.props.loading){
      dealTable = <div className="lds-ripple"><div></div><div></div></div>
    }
    else{
       dealTable = <DealTable/>
    }
     
    return (

      <section id="ex__page">

        <ExHeader />
        <div className="ex__page__inner">
          <a href="" className="side__hide__link" onClick={(e) => this.toggleChat(e)}>
            {this.state.chatShow ?
              <i className="fa fa-angle-double-left"></i>
              : <i className="fa fa-angle-double-right"></i>
            }
          </a>
          <SideMenu />
          <div className="container">
            <div className="row flex">
              <Transition in={this.state.chatShow} timeout={300}>
                {(status) => (
                  <div className={`col__md ex__col__1 fcolw ${status}`}>
                    <div className="trading__block gray">
                      <TVChartContainer />
                    </div>

                    <div className="history__tabs gray">
                      <a className="history__tabs__hide fac">
                        <img src="/assets/img/hide.png" className="history__tabs__img" />
                        <div className="history__tabs__hide__text">
                          Hide Other Pairs
                         </div>
                      </a>
                      <Tabs>
                        <TabList className="ex__tabs__links">
                          <Tab className="ex__tabs__link gray__text">Open Orders</Tab>
                          <Tab className="ex__tabs__link gray__text">Order History</Tab>
                          <Tab className="ex__tabs__link gray__text">Trade History</Tab>
                          <Tab className="ex__tabs__link gray__text">Funds</Tab>
                        </TabList>

                        <TabPanel>
                          <HistoryTable />
                        </TabPanel>
                        <TabPanel>
                          <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                          <h2>Any content 3</h2>
                        </TabPanel>
                        <TabPanel>
                          <h2>Any content 4</h2>
                        </TabPanel>
                      </Tabs>
                    </div>
                  </div>

                )}
              </Transition>

              <div className="col__md ex__col__2 fcolw">
                <div className="flex h__100">
                  <div className="ex__col__2__sub gray">
                    <div className={`grid__table red__table__cont ${this.state.gridTable}`}>
                      <div className="grid__table__header">
                        <div className="faec">
                          <div className="grid__tbale__header__links flex">
                            <a className="grid__table__header__link" href="" data="rgtable" onClick={(e) => this.toggleGridTable(e)}>
                              <div className="red"></div>
                              <div className="mint"></div>
                            </a>
                            <a className="grid__table__header__link" href="" data="gtable" onClick={(e) => this.toggleGridTable(e)}>
                              <div className="gray__rec"></div>
                              <div className="mint"></div>
                            </a>
                            <a className="grid__table__header__link" href="" data="rtable" onClick={(e) => this.toggleGridTable(e)}>
                              <div className="red"></div>
                              <div className="gray__rec"></div>
                            </a>
                          </div>
                          <div className="left__auto red__table__item3 gray__text">
                            grioups
                          </div>
                          <select className="red__table__header__select">
                            <option>8 decimals</option>
                            <option>10 decimals</option>
                          </select>
                        </div>
                      </div>
                      <div className="red__table__header">
                        <div className="gray__text">
                          Price (BTC)
                      </div>
                      </div>
                      {this.state.gridTable == "rgtable" || this.state.gridTable == "rtable" ? (
                        <BuySellTable
                          text="red__text"
                          table="red__table"
                          sibling="nextElementSibling"
                          colorHover="rgba(234, 0, 56, 0.15)"
                          gridTable={this.state.gridTable}
                        />
                      ) : (
                          ""
                        )}

                    </div>
                    <div className="green__table__header">
                      <div className="faec">
                        <div className="green__table__header__item mint__text">
                          0.0000000030
                            </div>
                        <img src="/assets/img/arr.png" />
                        <div className="green__table__header__item2">
                          $0.000029
                          </div>
                        <img src="/assets/img/ind.png" className="green__table__header__ind" />
                      </div>
                    </div>
                    <div className={`grid__table green__table__cont ${this.state.gridTable}`}>

                      {this.state.gridTable == "rgtable" || this.state.gridTable == "gtable" ? (
                        <BuySellTable
                          text="mint__text"
                          table="green__table"
                          sibling="previousElementSibling"
                          colorHover="rgba(23, 172, 117, 0.1)"
                          gridTable={this.state.gridTable}
                        />
                      ) : (
                          ""
                        )}

                    </div>

                  </div>
                  <div className="ex__col__2__sub gray">
                   {dealTable}
                  </div>
                </div>
                <div className="ex__tabs gray">
                  <Tabs>
                    <TabList className="ex__tabs__links">
                      <Tab className="ex__tabs__link gray__text">Limit</Tab>
                      <Tab className="ex__tabs__link gray__text">Market</Tab>
                      <Tab className="ex__tabs__link gray__text">Shop-Limit</Tab>
                    </TabList>

                    <TabPanel>
                      <label className="checkbox ex__form__check">
                        <input type="checkbox" />
                        <div className="checkbox__text">Pay Az Tоkens</div>
                      </label>
                      <div className="fb">
                        <div className="ex___tabs__col">
                          <div className="fbw">
                            <div className="ex__tabs__text">
                              BUY ARDR
                            </div>
                            <div className="ex__tabs__text">
                              0,00000000 BTC
                             </div>
                          </div>
                          <ExForm
                            color="red"
                            action="Buy"
                          />
                        </div>
                        <div className="ex__tabs__line"></div>
                        <div className="ex___tabs__col">
                          <div className="fbw">
                            <div className="ex__tabs__text">
                              SELL ARDR
                            </div>
                            <div className="ex__tabs__text">
                              0,00000000 BTC
                           </div>
                          </div>
                          <ExForm
                            color="mint"
                            action="Sell"
                          />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                      <h2>Any content 3</h2>
                    </TabPanel>
                  </Tabs>
                </div>

              </div>

              <Transition in={this.state.chatShow} timeout={300}>
                {(status) => (
                  <div className={`col__md ex__col__3 gray fcoljb ${status}`}>
                    <Switch>
                      <Route path="/options">
                        <Options />
                      </Route>
                      <Route path="/">
                        <Chat />
                      </Route>
                    </Switch>
                  </div>
                )}
              </Transition>
            </div>
          </div>

        </div>
      </section>

    );
  }

}
let mapStateToProps = (state) => {

  return {
    items: state.exReducer.payload,
    loading: state.exReducer.loading,
  }
};

let mapDispatchToProps = (dispatch) => {

  return {
    load: () => dispatch(actions.dealTable.load())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Ex);


