import React, { Component } from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends Component {

    state = {
        options: this.props.options,
        selectedOption: undefined
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // Do nothing
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {   // Checks if state was changed
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    handleDeleteOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })

        this.setState(() => ({ options: [] }))
    }

    handleDeleteSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleAddOption = (option) => {

        if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     }
        // })

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer!';
        return (
            <div>
                <Header
                    subtitle={subtitle}
                ></Header>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    ></Action>
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    ></Options>
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    ></AddOption>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleDeleteSelectedOption={this.handleDeleteSelectedOption}
                ></OptionModal>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}