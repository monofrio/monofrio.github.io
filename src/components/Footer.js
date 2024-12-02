import data from "../data/data.json";
import React from "react";

export default function Footer({appInfo}){
    const currentYear = new Date().getFullYear();
    return (
        <footer style={{margin: 20}}>
            <div id={"mainAlert"} className="alert alert-warning" role="alert">
                <strong>This is still in Beta.</strong> - Last Updated: {appInfo.updated} - Version: {appInfo.version}
            </div>
            <small className={"text-center"}>&copy; {currentYear} <a href={"https://markonofrio.com"} target={"_blank"}>markonofrio.com</a>
            </small>

        </footer>
    )
}