import Modal from "./Modal";
import React from "react";
import ResetButton from "./FindTags/ResetButton";

export default function Header({title, version}){

    const id = "directions"
    return (
        <header className={"p-3"}>

            <h1>{title}
                &nbsp;
                <button
                    type="button"
                    className="btn btn-outline-info btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target={`#Modaldirections`}
                >
                    ?
                </button>

            </h1>

            <div
                className="modal fade"
                id={`Modaldirections`}
                tabIndex="-1"
                aria-labelledby={`ModalLabeldirections`}
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`ModalLabeldirections`}>

                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <h3>How to Use</h3>
                            <p>The Pokémon GO Search Tool is designed to help you efficiently manage your Pokémon
                                storage. Here's
                                how it works:</p>
                            <ol>
                                <li>Filter Options: Use the filters to select specific criteria for your search, such as
                                    Pokémon species, IV ranges, CP, and more.
                                </li>
                                <li>Interactive Toggles:</li>
                                <ul>
                                    <li>Blue outline: Indicates the filter is off.</li>
                                    <li>Blue: Shows related Pokémon from the search results.</li>
                                    <li>Red: Hide related Pokémon from the search results.</li>
                                </ul>
                                <li>Copy: Once your filters are set, click the "Copy Search Query" button to copy the
                                    search string.</li>
                            </ol>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}