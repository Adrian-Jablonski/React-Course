import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({selectedOption, handleDeleteSelectedOption}) => {
    return (
        <Modal
            isOpen={!!selectedOption}
            // !!undefined = false. !!'test' = true 
            onRequestClose={handleDeleteSelectedOption} // Runs when user presses esc key or when they click outside of the modal
            contentLabel="Selected Option"
        >
            <h3>Selected Option</h3>
            {selectedOption && <p>{selectedOption}</p>}
            <button onClick={handleDeleteSelectedOption}>Okay</button>
        </Modal>
    )
};

Modal.setAppElement('#app');

export default OptionModal;