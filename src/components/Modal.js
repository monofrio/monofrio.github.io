import PropTypes from 'prop-types';

export default function Modal(props) {
    const { id, title, buttonCopy, children } = props;

    return (
        <>
            <button
                type="button"
                className="btn btn-outline-info btn-sm"
                data-bs-toggle="modal"
                data-bs-target={`#Modal${id}`}
            >
                {buttonCopy}
            </button>

            <div
                className="modal fade"
                id={`Modal${id}`}
                tabIndex="-1"
                aria-labelledby={`ModalLabel${id}`}
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`ModalLabel${id}`}>
                                {title}
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {children}
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
        </>
    );
}

// PropTypes validation
Modal.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    buttonCopy: PropTypes.string.isRequired,
    children: PropTypes.node,
};

// Default props
Modal.defaultProps = {
    children: null,
};
