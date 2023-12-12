import {eventActive, getDate } from "./utility";

export default function EventCards ({months, eventData}){
    return(
        eventData.map( ( value, index) => (
                (
                    ( value.eventType === "Events" ) && !value.image
                    && eventActive( value )
                ) ?
                    <div className="event event--inline container card" key={"event-" + index}>
                        <div className="event-layout row card-body">
                            {(!value.image) ? "" :
                                <div className="event-image col">
                                    <img
                                        src={value.image.url}
                                        width="125" height="125" alt=""/>
                                </div>
                            }
                            <div className="event-details col">
                                <div className="raid-event-info">
                                    <span className={"h3"}>{value.name}</span><br/>
                                    <span>{months[getDate(value.startDate, "month")]}</span>
                                    <span> {getDate("day", value.startDate)}{(value.startDate !== value.endDate)? "-" + getDate(value.endDate, "day") : ""} </span>
                                    <br/>
                                    <span>{ (value.body !== undefined)? value.body : ""}</span><br />

                                </div>
                            </div>
                        </div>
                    </div>
                    : ''
            )

        )

    )
}
