import './App.css';
import './components/Alerts';
import { Helmet } from 'react-helmet';

import data from './data/data.json'
import raidCP from './data/Pokemon_Raid_Hundo_CP.json'
import Alerts from "./components/Alerts";
import Header from  "./components/Header"
import Footer from "./components/Footer";
import SearchList from "./components/SearchList";
import RaidCards from "./components/RaidCard";
import EventCards from "./components/EventCards";
import SpotlightHourCard from "./components/SpotlightHourCard";
import RaidHourCards from "./components/RaidHourCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import {getDate} from "./components/utility";
import {GlobalState, GlobalStateProvider} from './components/GlobalState';
import HideTags from "./components/HideTags";
import RangeSlider from "./components/RangeSlider";

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
    <GlobalStateProvider>
        <Helmet>
            <title>Pokemon Go Sidekick Tool</title>
            <meta name="description" content="Best way to manage your pokemon with pre-made search scripts. See upcoming Events and Raids" />
        </Helmet>
        <Alerts />
        <Header title={data.appInfo.title} />

        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header ">
                    <button className="accordion-button alert-success alert" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Current Raids and Events
                    </button>
                       </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <section className="section-events">
                            <h3 className={"lead p-3"}>Raids</h3>
                            <RaidCards months={data.months} eventData={data.eventData} raidCP={raidCP} />
                            <h3 className={"lead p-3"}>Raid Hour</h3>
                            <RaidHourCards months={data.months} eventData={data.eventData} raidCP={raidCP} />
                            <h3 className={"lead p-3"}>Events</h3>
                            <EventCards months={data.months} eventData={pullEventList()} raidCP={raidCP} />
                            <div className="container card">{ nextEvent()[0]? "Next: " + data.months[getDate(nextEvent()[0].startDate, "month")]:"Next: No listings yet." } { nextEvent()[0]?getDate(nextEvent()[0].startDate, "day") + ", ":"" } { nextEvent()[0]?nextEvent()[0].name:""  }</div>
                            <h3 className={`lead p-3 ${isTusday? "text-success" : "text-danger"}`}>Spotlight Hour { isTusday ? "Today" : "Every Tuesday" }</h3>
                            <SpotlightHourCard months={data.months} eventData={data.eventData} />
                        </section>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header ">
                    <button className="accordion-button alert alert-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Manage Search
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <HideTags />
                        <RangeSlider />
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed alert alert-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        Pokemon Tag Manager
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <SearchList data={data.data} />
                    </div>
                </div>
            </div>
        </div>
        <Footer appInfo={data.appInfo} />
    </GlobalStateProvider>
    </div>
  );
}

export default App;
