import {copyContent} from "./utility";

export function CopyButton ( copy, buttonText ) {
    return (
        <button className={"btn btn-dark"} onClick={ ()=>
            copyContent(copy)
                .then(() => {
                    console.log("Text copied successfully");
                })
                .catch((error) => {
                    console.error("Error copying text: ", error);
                })}>{buttonText}</button>
    )
}