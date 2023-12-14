import {eventActive, getDate } from "./utility";

export default function RaidCards ({months, eventData, raidCP}){
    return (
        eventData.map( ( value, index) => (
            (value.eventType === "Raids" && eventActive( value )
            )
                ?
                <div className="event event--inline container card" key={"raid-" + index}>
                    <div className="event-layout row card-body" style={ { padding: "10px 0 10px 10px"}}>
                        {(!value.image) ? "" :
                            <div className="event-image col-5">
                                <img
                                    src={value.image.url}
                                    width="100" height="100" alt=""/>
                            </div>
                        }
                        <div className="event-details col" >
                            <div className="raid-event-info">
                                <div>
                                    <span className={"h3"}>{value.name}</span><br />
                                    <p>
                                        <span>{months[getDate(value.startDate, "month")]}</span>
                                        <span> {getDate("day", value.startDate)}{(value.startDate !== value.endDate)? "-" + getDate(value.endDate, "day") : ""} </span>
                                        <br /><small> { value.bodyLines[0]} - {value.bodyLines[1]} </small>
                                    </p>
                                </div>
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
                                                <p style={ {fontSize: "0.7rem", lineHeight: "15px"}}>
                                                    <span>{raid.hundoCP} / {raid.hundoWeatherCP}</span><br/>
                                                    <span>100% IV / Weather Boosted</span></p>
                                            </div> ) : ""
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div> : ""
        ))
    )
}