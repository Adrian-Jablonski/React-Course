import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({selectedOption, handleDeleteSelectedOption}) => {
    return (
        <Modal
            isOpen={!!selectedOption}
            // !!undefined = false. !!'test' = true 
            onRequestClose={handleDeleteSelectedOption} // Runs when user presses esc key or when they click outside of the modal
            contentLabel="Selected Option"
            closeTimeoutMS={400}    // Gives a closing fade transition effect defined in the modal.scss file
            className="modal"   // overrides the default css
        >
            <h3 className="modal__title">Selected Option</h3>
            {selectedOption && <p className="modal__body">{selectedOption}</p>}
            <button className="button" onClick={handleDeleteSelectedOption}>Okay</button>
        </Modal>
    )
};

Modal.setAppElement('#app');

export default OptionModal;