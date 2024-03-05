import data from "../data/data.json";

export default function Alerts(){
    document.getElementById("mainAlert")
    return (
        <div id={"mainAlert"} className="alert alert-warning" role="alert">
            <strong>This is still in Beta.</strong> - Version: {data.appInfo.version} <br/>
        </div>
    )
}
