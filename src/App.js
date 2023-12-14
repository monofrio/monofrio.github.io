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
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const isTusday = (new Date().getDay() === 2);
  return (
    <div className="App">
        <Helmet>
            <title>Pokemon Go Sidekick Tool</title>
            <meta name="description" content="Best way to manage your pokemon with pre-made search scripts. See upcoming Events and Raids" />
        </Helmet>

        <Alerts />
        <Header title={data.appInfo.title} />
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header ">
                    <button className="accordion-button alert-success alert" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Current Raids and Events
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <section className="section-events">
                            <h3 className={"lead p-3"}>Raids</h3>
                            <RaidCards months={data.months} eventData={data.eventData} raidCP={raidCP} />
                            <h3 className={"lead p-3"}>Events</h3>
                            <EventCards months={data.months} eventData={data.eventData} raidCP={raidCP} />
                            <h3 className={`lead p-3 ${isTusday? "text-success" : "text-danger"}`}>Spotlight Hour { isTusday ? "Today" : "Every Tuesday" }</h3>
                            <SpotlightHourCard months={data.months} eventData={data.eventData} />
                        </section>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed alert alert-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
