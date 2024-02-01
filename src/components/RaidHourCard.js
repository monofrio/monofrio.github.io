import {eventActive, getDate } from "./utility";

export default function RaidHourCards ({months, eventData, raidCP}){
    let pokemonID;
    return (
        eventData.map( ( value, index) => (

                value.eventType === "Events" && value.image
                 && eventActive(value , 'today')
                ?
                 value.bodyLines[0].includes("Raid Hour")  ?
                     <div className={"event event--inline container card "} key={"raidHour-" + index}>
                         <div className={"event-layout row card-body"}>
                             {(!value.image) ? "" :
                                 <div className="event-image col-5">
                                     {
                                         Object.keys(raidCP).map( key => {
                                             let name = value.name;
                                             const raid = raidCP[key];
                                             const wordToRemove = "Mega";
                                             /** check if Mega is in the name and remove it to find the correct name look up*/
                                             const regex = new RegExp("\\b" + wordToRemove + "\\b", "gi");
                                             if( value.name.includes("Mega") ){
                                                 name = value.name.replace(regex, '').trim()
                                             }
                                             /** Show perfect IV for catching after a raid */
                                             return (raid.name === name) ? (
                                                 <div key={"mega"+index}>
                                                     <a href={'https://db.pokemongohub.net/pokemon/' + key } target={'new'} >
                                                         <img
                                                             src={value.image.url}
                                                             width="100" height="100" alt=""/>
                                                     </a>
                                                     <p style={ {fontSize: "0.7rem", lineHeight: "15px"}}>
                                                         <span> {raid.hundoCP} / {raid.hundoWeatherCP}</span><br/>
                                                         <span>100% IV / Weather Boosted</span></p>
                                                 </div> ) : ""
                                         })
                                     }
                                 </div>
                             }
                             <div className="event-details col">
                                 <div className="raid-event-info">

                                     <span className={"h3"}>{value.name}</span>
                                     { value.bodyLines !== undefined ? ( <span> - { value.bodyLines[2] } </span> ) : "" }
                                     <br />

                                     <p>
                                         { ( getDate("month", value.startDate )  !==  getDate("month") ) ? months[ getDate("month") ] : months[getDate("month", value.startDate)] }&nbsp;
                                         <br />
                                         {( value.bodyLines !== undefined ? (<span>{value.bodyLines[1]} </span>) : "")}
                                         {( value.body !== undefined) ? (<span>{value.body}</span>) : ""}
                                     </p>

                                 </div>
                             </div>
                         </div>
                     </div>

                    : "" : ""

        ))
    )
}