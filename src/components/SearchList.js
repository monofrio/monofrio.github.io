import './utility'
import React, { useState, useEffect } from 'react';
// import data from "../data/data.json";
const data =    [
    {
        "id": "0",
        "name": "Safe Transfer",
        "title": "Safe Transfer",
        "pokemon": "",
        "search": "",
        "tag": "transfer",
        "info": "This will display 0 & 1 Star pokemon that are not XL or XXL that have Combat Power 10-1000"
    },
    {
        "id": "1",
        "name": "Purify",
        "title": "1000 Stardust to Purify",
        "pokemon": "weedle, rattata, geodude, ducklett, zubat, foongus",
        "search": "shadow",
        "tag": "purify",
        "info": ""
    },
    {
        "id": "2",
        "name": "Trade: Free Evolve",
        "title": "Free Evolve when traded",
        "pokemon": "haunter, karrablast, machoke, phantump, pumpkaboo, Shelmet, Boldore, Graveler, Gurdurr, Kadabra",
        "search": "!favorite & !shadow & !4* & !lucky & !traded & !free-evol",
        "tag": "free-evol",
        "info": ""
    },
    {
        "id": "3",
        "name": "Free Evolve",
        "title": " Evolve for Free",
        "pokemon": "haunter, karrablast, machoke, phantump, pumpkaboo, Shelmet, Boldore, Graveler, Gurdurr, Kadabra",
        "search": "!favorite & !4* & traded",
        "tag": "evolve",
        "info": ""
    },
    {
        "id": "4",
        "name": "PVP",
        "title": "PVP For Great Leauge",
        "pokemon": "",
        "search": "0-1attack&3-4defense&3-4-hp&cp-1500",
        "tag": "pvp",
        "info": ""
    },
    {
        "id": "5",
        "name": "12 Candy",
        "title": "12 Candy Evolve",
        "pokemon": "Caterpie, Weedle, Pidgey, Wurmple, Whismwur, Pidove",
        "search": "",
        "tag": "12candy",
        "info": "Pokemons that cost only 12 candies to evolve can help in 2X-xp on evolving pokemons and Field Research."
    },
    {
        "id": "6",
        "name": "400Candy",
        "title": "400 Candy Evolve",
        "pokemon": "Magikarp, Wailmer, Swablu, Larvesta, Noibat, Stufful, Wimpod, Meltan",
        "search": "!favorite & !4* & !3* & !xl & !xxl &!shiny",
        "tag": "400candy",
        "info": "Finds:  Magikarp, Wailmer, Swablu, Larvesta, Noibat, Stufful, Wimpod, Meltan"
    }
]
let superString = "!favorite & !shiny & !2* & !3* & !4* & !lucky & !ultra beasts & !12candy & !purify & !free-evol & !evolve & !pvp & !xl & !xxl &!legendary & !mythical & !shadow & !2x Transfer &!trade & cp-1000";

function copySearchString (id) {
    let output = data.data[id]['search']
    let pokemon = data.data[id]['pokemon']
    let tag = data.data[id]['tag']

    /** Safe Transfer */
    if((output === '' && tag === "" && pokemon === "") || (data.data[id]['name'] === "Safe Transfer") ){
        copyContent(superString);
    }
    /** Has Tag, Pokemon, & Search Value*/
    else if( tag.length > 0 && pokemon.length > 0 && output.length > 0){
        copyContent( output + " & " + pokemon + " & !" + tag );
    } else if ( tag.length > 0 && pokemon.length > 0){
        copyContent( pokemon + " & !" + tag )
    } else {
        copyContent( output + " & !" + tag)
    }

}

let copyTag = function(id){
    let output = data.data[id]['tag'];
    copyContent(output);
}

async function copyContent(data) {
    let text = data;

    try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
        console.log('-- Value: ' + text)
        /* Resolved - text copied to clipboard successfully */
    } catch (err) {
        console.error('Failed to copy: ', err);
        /* Rejected - text failed to copy to the clipboard */
    }
}

// function tags(){
//     let tags = [];
//
//     data.forEach( key => {
//         tags.push(key.tag)
//     })
//     return tags
// }
// let tagList =  tags()
// let baseTags: []



export default function SearchList(){
    return(
        <section>
            <HideTags />
            <ul className="list-group">
            {data.map( (val) => (
                <li className={'list-group-item'} key={val.name}>
                    <div className={"row"} >
                        <div className={"col"}>
                            <h4>{val.title} &nbsp;
                                { (val.info === "")? "" :<><button type="button" className={"btn btn-outline-info btn-sm"} data-bs-toggle={"modal"} data-bs-target={"#Modal" + val.id }>i</button></>}
                                {(val.tag === "")? "" : <><br/><button className={"btn btn-dark btn h6"} onClick={ () => copyTag(val.id) } >Tag: {val.tag}</button></> }
                            </h4>
                        </div>
                        <div className="col">
                            <div className={"d-flex p-2"}>
                                <button className={"btn btn-success btn-lg"} onClick={() => copySearchString(val.id) }>Copy Search String</button>
                            </div>
                        </div>
                    </div>
                    { (val.info === "")? "" : <Modal val={val}/>}
                </li>
            ))}
        </ul>
        </section>
    )
}

function Modal( {val} ){
    return(
        <div className="modal fade" id={"Modal" + val.id} tabIndex="-1" aria-labelledby={val.id + "ModalLabel"} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{val.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        { (val.info === "")? <p>No Information at this time</p> : <p>{val.info}</p> }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

function HideTags() {
    // State to manage checkbox values
    const [checkboxes, setCheckboxes] = useState({
        favorite: 1,
        perfect: 1,
        shiny: 1,
        lucky: 1,
        beasts: 1,
        legendary: 1,
        mythical: 1,
        shadow: 1,
        '3star': 1
    });

    // Function to toggle checkbox state
    const toggleCheckbox = (key) => {
        setCheckboxes({ ...checkboxes, [key]: !checkboxes[key] });
    };

    useEffect(() => {
        // Code inside useEffect will run only once after the first render
        console.log('Component mounted');
        // You can perform any side effects here
        // For example, fetching data, subscribing to events, etc.
        // In this case, it's just logging that the component mounted

        // Cleanup function (if needed) can be returned from useEffect
        return () => {
            console.log('Component will unmount');
            // Cleanup code can be placed here
            // For example, unsubscribing from events, cancelling timers, etc.
        };
    }, []); // Empty dependency array ensures that the effect runs only once

    return (
        <div className="container">
            <aside className="row align-items-start">
                <h3>Hide</h3>
                {Object.keys(checkboxes).map((key) => (
                    <div key={key} className="col-4 p-1">
                        <input
                            type="checkbox"
                            className="btn-check"
                            id={`btn-check-${key}`}
                            autoComplete="off"
                            checked={checkboxes[key]}
                            onChange={() => toggleCheckbox(key)}
                        />
                        <label className="btn btn-outline-primary" htmlFor={`btn-check-${key}`}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </label>
                    </div>
                ))}
            </aside>
        </div>
    );
}