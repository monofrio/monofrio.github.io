import {eventActive, getDate } from "./utility";

export default function SpotlightHourCard ({months, eventData}){
    return(
        eventData.map( (value, index) => (

            (value.eventType === "Events") && value.image && !value.body && eventActive( value, "today")
                ?
                <div className={"event event--inline container card "} key={"spotlight-" + index}>
                    <div className={(getDate() >= getDate(eventActive(value, "start")) && getDate() < getDate(eventActive(value, "end")))? "event-layout row card-body alert alert-success" : "event-layout row card-body alert alert-warning"}>
                        {(!value.image) ? "" :
                            <div className="event-image col">
                                <img
                                    src={value.image.url}
                                    width="125" height="125" alt=""/>
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
                : ""
        ))
    )
}
