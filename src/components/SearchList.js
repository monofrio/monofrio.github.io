import './utility'
import data from "../data/data.json";

function copySearchString (id) {
    let output = data.data[id]['search']
    let pokemon = data.data[id]['pokemon']
    let tag = data.data[id]['tag']

    /** Safe Transfer */
    if(output === '' && tag === "" && pokemon === "" || data.data[id]['name'] === "Safe Transfer"){
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

let superString = "!favorite & !shiny & !3* & !4* & !lucky & !ultra beasts & !12candy & !purify & !free-evol & !evolve & !pvp & !xl & !xxl & &!legendary & !mythical & !shadow & !2x Transfer & !pvp";

function findNew(id){
    let output = data.data[id]['value']  + " & !" + data.data[id]['tag'];
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

export default function SearchList({data}){
    return(
        <ul className="list-group">
            {data.map( (val) => (
                <li className={'list-group-item'} key={val.name}>
                    <div className={"row"} >
                        <div className={"col"}>
                            <h4>{val.title} &nbsp;
                                { (val.info === "")? "" :<><button type="button" className={"btn btn-outline-info btn-sm"} data-bs-toggle={"modal"} data-bs-target={"#" + "Modal" + val.id }>more info</button></>}
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
