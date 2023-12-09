import './App.css';
import './components/Alerts';
import data from './data/data.json'
import raidCP from './data/Pokemon_Raid_Hundo_CP.json'
import Alerts from "./components/Alerts";
import Header from  "./components/Header"
import Footer from "./components/Footer";
import SearchList from "./components/SearchList";
import RaidCards from "./components/RaidCard";
import EventCards from "./components/EventCards";
import SpotlightHourCard from "./components/SpotlightHourCard";
import {eventActive, getDate } from "./components/utility";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Alerts />
        <Header title={data.appInfo.title} />
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Current Raids and Events
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <section className="section-events">
                            <h3 className={"lead"}>Raids</h3>
                            <RaidCards months={data.months} eventData={data.eventData} raidCP={raidCP} />
                            <h3 className={"lead"}>Events</h3>
                            <EventCards months={data.months} eventData={data.eventData} raidCP={raidCP} />
                            <h3 className={"lead"}>Spotlight Hour</h3>
                            <SpotlightHourCard months={data.months} eventData={data.eventData} />
                        </section>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
    </div>
  );
}

export default App;
