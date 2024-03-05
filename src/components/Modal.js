export default function Modal(props) {
    const { id, title, info, buttonCopy, pokemon } = props;

    return(
        <>
        <button type="button" className={"btn btn-outline-info btn-sm"} data-bs-toggle={"modal"} data-bs-target={"#Modal" + id }>{ buttonCopy }</button>
        <div className="modal fade" id={"Modal" + id} tabIndex="-1" aria-labelledby={id + "ModalLabel"} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        { (info === "")? "" : <p>{info}</p> }
                        { pokemon !== null ? (pokemon === "")? "" : <p>Pokemon: {pokemon}</p> : "" }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
</>
    )
}