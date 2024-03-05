import './App.css';
import './components/Alerts';
import { Helmet } from 'react-helmet';

import data from './data/data.json'
import Alerts from "./components/Alerts";
import Header from  "./components/Header"
import Footer from "./components/Footer";
import SearchList from "./components/SearchList";
import 'bootstrap/dist/css/bootstrap.min.css';
import {getDate} from "./utils";


import { Provider } from 'react-redux';
import store from './store';

import CombatPowerValue from "./components/CombatPowerValue";
import HideTags from "./components/GameTagsList";
import CopyHideStringButton from "./components/CopyHideStringButton";
import CustomGameTagsList from "./components/CustomGameTagsList";


function pullEventList() {
    let list = [];
    data.eventData.map( value => {

        if( value.eventType === "Events" && !value.image ){
            list.push( value )
        }

    } )

    return list;
}
function nextEvent(){
    let list = pullEventList();
    let nextEvents = [];

    list.map( value => {
        if( getDate( value.startDate ) > getDate()  ){
            nextEvents.push( value )
        }
    })

    return nextEvents;
}

function App() {
    const isTusday = (new Date().getDay() === 2);


  return (
    <div className="App">
        <Provider store={store}>

        <Helmet>
            <title>Pokemon Go Sidekick Tool</title>
            <meta name="description" content="Best way to manage your pokemon with pre-made search scripts. See upcoming Events and Raids" />
        </Helmet>
        <Alerts />
        <Header title={data.appInfo.title} />

        <div className="accordion" id="accordion1">
            <div className="accordion-item">
                <h2 className="accordion-header ">
                    <button className="accordion-button collapsed alert alert-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Manage Search by hiding
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion1">
                    <div className="accordion-body">
                        <CopyHideStringButton />
                        <hr />
                        <h3 className={'p-3'} >Game Tags</h3>
                        <HideTags />
                        <h3 className={'p-3'} >Custom Tags</h3>
                        <CustomGameTagsList />

                        <CombatPowerValue />

                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed alert alert-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        Pokemon Tag Manager
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion1">
                    <div className="accordion-body">
                        <SearchList data={data.data} />
                    </div>
                </div>
            </div>
        </div>
        <Footer appInfo={data.appInfo} />
        </Provider>
    </div>
  );
}

export default App;
