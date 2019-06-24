import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={300}
        className="modal"
    >
        <h4 className="modal__title">Selected Option</h4>
        <div className="modal__body">
        { props.selectedOption && <p>{props.selectedOption}</p>}
        <button className="button modal--button" onClick={props.handleClearSelectedOption}>Okay</button>
        </div>
    </Modal>
)

export default OptionModal