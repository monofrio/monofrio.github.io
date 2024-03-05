import {copyContent} from "../utils";
import data from "../data/data.json";
import Modal from "./Modal";

function copySearchString (id) {
    let output = data.data[id]['search']
    let pokemon = data.data[id]['pokemon']
    let tag = data.data[id]['tag']

    /** Safe Transfer */
    if((output === '' && tag === "" && pokemon === "") || (data.data[id]['name'] === "Safe Transfer") ){
        // copyContent(superString);
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

export default function SearchList(){
    return(
        <ul className="list-group">

            {data.data.map( (val) => (
                <li className={'list-group-item'} key={val.name}>
                    <div className={"row"} >
                        <div className={"col"}>
                            <h4>{val.title} &nbsp;
                                {(val.info === "")? "" :<Modal info={val.info} id={val.id} title={val.title} pokemon={val.pokemon} buttonCopy={"i"}/>}
                                {(val.tag === "")? "" : <><br/><button className={"btn btn-outline-light btn h6"} onClick={ () => copyTag(val.id) } >Tag: {val.tag}</button></> }
                            </h4>
                        </div>
                        <div className="col">
                            <div className={"d-flex p-2"}>
                                <button className={"btn btn-success btn-lg"} onClick={() => copySearchString(val.id) }>Copy Search String</button>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}


