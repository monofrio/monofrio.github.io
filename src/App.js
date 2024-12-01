import React from 'react';
import './App.scss';
import './components/Alerts';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import data from './data/data.json'
import Header from  "./components/Header"
import Footer from "./components/Footer";
import SearchList from "./components/SearchList";
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';


// import CombatPowerValue from "./components/FindTags/CombatPowerValue";
import HideTags from "./components/HideTags/GameTagsList";
import CopyHideStringButton from "./components/HideTags/CopyHideStringButton";
import CustomGameTagsList from "./components/HideTags/CustomGameTagsList";
import FindTags from "./components/FindTags/FindTags";

class App extends React.Component {
    render() {
        const { combatPowerMin, combatPowerMax, finalCPString } = this.props;
        return (
            <HelmetProvider>
            <div className="App">

                    <Helmet>
                    <title>{data.appInfo.title}</title>
                    <meta name="description"
                          content="Best way to manage your pokemon with pre-made search scripts. See upcoming Events and Raids"/>
                </Helmet>
                <Header title={data.appInfo.title}/>
                <div className="accordion" id="accordion1">
                    <FindTags/>
                </div>
                <Footer appInfo={data.appInfo}/>

            </div>
            </HelmetProvider>
        );
    }
}

const mapStateToProps = (state) => ({
    combatPowerMin: state.combatPower.combatPowerMin,
    combatPowerMax: state.combatPower.combatPowerMax,
});

export default connect(mapStateToProps)(App);