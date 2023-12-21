const testDate = '';
// utils.js
export const getDate = (...args) =>{
    let output, date, today, month, day, arg;

    function isValidDateFormat(input) {
        // Regular expression for 'YYYY-MM-DD' pattern
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;

        // Test the input against the pattern
        return datePattern.test(input);
    }

    function isString(value) {
        return typeof value === 'string';
    }

    if (args.length === 0) {
        output = new Date(testDate);
    } else if (args.length === 1) {
        if (isString(args[0])) {
            arg = args[0].toLowerCase();
        } else {
            arg = args[0];
        }

        if (isValidDateFormat(arg)) {
            output = new Date(arg + "T00:00:00");
        } else if (arg === "today") {
            output = new Date(testDate);
            output.setHours(0, 0, 0, 0);
        } else if (arg === "month") {
            output = new Date(testDate).getUTCMonth();
        } else if (arg === "day") {
            output = new Date(testDate).getDate();
        } else if (arg === "year") {
            output = new Date(testDate).getUTCFullYear();
        } else if (typeof arg === "number") {
            output = new Date(arg);
        }
    } else {
        // If more than one argument is provided, check for specific cases
        for (let index = 0; index < args.length; index++) {
            const arg = args[index].toLowerCase();

            if (isValidDateFormat(arg)) {
                date = index;
            } else if (arg === "today") {
                today = index;
                console.log("Invalid Date, you cannot use today");
            } else if (arg === "month") {
                month = index;
            } else if (arg === "day") {
                day = index;
            }
        }

        if (today !== undefined) {
            output = new Date(args[today] + "T00:00:00");
        } else if (month !== undefined) {
            output = new Date(args[date]).getUTCMonth();
        } else if (day !== undefined) {
            output = new Date(args[date]).getUTCDate();
        }
    }

    return output;
};

export const convertTimeToTimestamp = (timeString, dateString) => {

    const date = new Date(dateString);
    const [hours, minutes] = timeString.split(':');
    const isPM = timeString.toLowerCase().includes('p.m.') || timeString.toLowerCase().includes('pm');
    let parsedHours = parseInt(hours, 10);

    if (isPM && parsedHours !== 12) {
        parsedHours += 12;
    }

    date.setHours(parsedHours, parseInt(minutes, 10), 0, 0);

    return date.getTime()
}

export const eventActive = (eventObject, time) => {
    let eventStartTime, eventEndTime, active;
    const currentTime = getDate();

    if(time === "today"){
        return getDate(eventObject.startDate, "day") === getDate("day")
    }

    if ( !eventObject.body && eventObject.bodyLines && eventObject.eventType === "Raids" && eventObject.image) {
        // console.log(eventObject.bodyLines)

        eventStartTime = convertTimeToTimestamp(eventObject.bodyLines[0].split(" ")[1].trim() + " " + eventObject.bodyLines[0].split(" ")[2].trim(), getDate(eventObject.startDate))
        eventEndTime = convertTimeToTimestamp(eventObject.bodyLines[1].split(" ")[1].trim() + " " + eventObject.bodyLines[1].split(" ")[2].trim(), getDate(eventObject.endDate))

        active = currentTime > eventStartTime && currentTime < eventEndTime
    }
    //Get Raid Hour
    if (eventObject.body && !eventObject.bodyLines && eventObject.eventType === "Events" && eventObject.image) {
        // console.log( "Raids Hour: ", eventObject)
        // eventStartTime = convertTimeToTimestamp(eventObject.body.split('–')[0].trim(), getDate(eventObject.startDate))

    }
    //Get Event - Spotlight
    if (eventObject.eventType === "Events" && eventObject.image && !eventObject.body) {
        eventStartTime = convertTimeToTimestamp(eventObject.bodyLines[1].split(" – ")[0].trim(), getDate(eventObject.startDate))
        eventEndTime = convertTimeToTimestamp(eventObject.bodyLines[1].split(" – ")[1].split(" ")[0] + " " + eventObject.bodyLines[1].split(" – ")[1].split(" ")[1], getDate(eventObject.endDate))
        active = currentTime > eventStartTime && currentTime < eventEndTime
    }
    //Get Event
    if (eventObject.body && !eventObject.bodyLines && eventObject.eventType === "Events" && !eventObject.image) {
        eventStartTime = convertTimeToTimestamp(eventObject.body.split('–')[0].trim(), getDate(eventObject.startDate))
        eventEndTime = convertTimeToTimestamp(eventObject.body.split('–')[1].trim(), getDate(eventObject.endDate))

        active = currentTime > eventStartTime && currentTime < eventEndTime

    }

    if (time === "start") {
        return eventStartTime
    } else if (time === "end") {
        return eventEndTime
    }

    return active;
}