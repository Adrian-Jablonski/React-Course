import React from 'react';
import Option from './Option';

const Options = ({ options, handleDeleteOptions, handleDeleteOption }) => {
    return (
        <div>
            <button 
                className="button button--link"
                onClick={handleDeleteOptions}
                >Remove All
            </button>
            {options.length === 0 && <p>Please add an option to get started</p>}
            <div>
                {options.map((option, index) => {
                    return (
                        <Option
                            key={index}
                            option={option}
                            handleDeleteOption={handleDeleteOption}
                        ></Option>
                    )
                })}

            </div>
        </div>
    )
}

export default Options;