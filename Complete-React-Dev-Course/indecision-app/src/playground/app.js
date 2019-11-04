class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: this.props.options
        }
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

    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })

        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {

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
        }))
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer!';
        return (
            <div>
                <Header
                    subtitle={subtitle}
                ></Header>
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
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = ({ title, subtitle }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: "Indecision"
}

const Action = ({ handlePick, hasOptions }) => {

    return (
        <div>
            <button
                onClick={handlePick}
                disabled={!hasOptions}
            >What should I do?</button>
        </div>
    )

}

const Options = ({ options, handleDeleteOptions, handleDeleteOption }) => {
    return (
        <div>
            <button onClick={handleDeleteOptions}>Remove All</button>
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

const Option = ({ option, handleDeleteOption }) => {
    return (
        <div>
            {option}
            <button onClick={(e) => handleDeleteOption(option)}>Remove</button>
        </div>

    )

}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value;  
        const error = this.props.handleAddOption(option);

        // this.setState(() => {
        //     return {
        //         error
        //     }
        // })

        this.setState(() => ({ error }))

        
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>This option already exists</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" required></input>
                    <button>Add Option</button>
                </form>
            </div>

        )
    }
}

ReactDOM.render(<IndecisionApp></IndecisionApp>, document.getElementById('app'));