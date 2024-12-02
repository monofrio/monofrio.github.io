import React from 'react';
import './App.scss';
import './components/Alerts';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import data from './data/data.json'
import Header from  "./components/Header"
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import FindTags from "./components/FindTags/FindTags";
import DisplayFinalString from "./components/FindTags/DisplayFinalString";

class App extends React.Component {
    render() {
        return (
            <HelmetProvider>
                <Helmet>
                    <title>{data.appInfo.title}</title>
                    <meta name="description"
                          content="Best way to manage your pokemon with pre-made search scripts. See upcoming Events and Raids"/>
                </Helmet>
            <div className="App">
                <Header title={data.appInfo.title}/>
                <aside className={"container-fluid"}>

                    <DisplayFinalString />

                </aside>

                <main class={"container-fluid"}>
                    <div className="accordion" id="accordion1">
                        <FindTags/>
                    </div>
                </main>
                <Footer appInfo={data.appInfo}/>

            </div>
            </HelmetProvider>
        );
    }
}

export default (App);