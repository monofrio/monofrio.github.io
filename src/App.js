import React from 'react';
import './App.css';
import './components/Alerts';
import { Helmet } from 'react-helmet';

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
            <div className="App">
                <Helmet>
                    <title>{data.appInfo.title}</title>
                    <meta name="description" content="Best way to manage your pokemon with pre-made search scripts. See upcoming Events and Raids" />
                </Helmet>
                <Header title={data.appInfo.title} />
                <div className="accordion" id="accordion1">

            {/*<div className="accordion-item">*/}
            {/*    <h2 className="accordion-header ">*/}
            {/*        <button className="accordion-button collapsed alert alert-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">*/}
            {/*            Manage Search by Hiding*/}
            {/*        </button>*/}
            {/*    </h2>*/}
            {/*    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordion1">*/}
            {/*        <div className="accordion-body">*/}
            {/*            <CopyHideStringButton />*/}
            {/*            <hr />*/}
            {/*            <h3 className={'p-3'} >Game Tags</h3>*/}
            {/*            <HideTags />*/}
            {/*            <h3 className={'p-3'} >Custom Tags</h3>*/}
            {/*            <CustomGameTagsList />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="accordion-item">*/}
            {/*    <h2 className="accordion-header">*/}
            {/*        <button className="accordion-button collapsed alert alert-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">*/}
            {/*            Build Search*/}
            {/*        </button>*/}
            {/*    </h2>*/}
            {/*    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion1">*/}
            {/*        <div className="accordion-body">*/}
                        <FindTags />
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="accordion-item">*/}
            {/*    <h2 className="accordion-header">*/}
            {/*        <button className="accordion-button collapsed alert alert-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">*/}
            {/*            Other Search*/}
            {/*        </button>*/}
            {/*    </h2>*/}
            {/*    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion1">*/}
            {/*        <div className="accordion-body">*/}
            {/*            <SearchList data={data.data} />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


                </div>
                <Footer appInfo={data.appInfo} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    combatPowerMin: state.combatPower.combatPowerMin,
    combatPowerMax: state.combatPower.combatPowerMax,
});

export default connect(mapStateToProps)(App);