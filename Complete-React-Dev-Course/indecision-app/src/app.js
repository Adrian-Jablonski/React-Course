class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        })
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header
                    title={title}
                    subtitle={subtitle}
                ></Header>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                ></Action>
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                ></Options>
                <AddOption
                    handleAddOption={this.handleAddOption}
                ></AddOption>
            </div>
        )
    }
}

const Header = ({ title, subtitle }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
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

const Options = ({ options, handleDeleteOptions }) => {
    return (
        <div>
            <button onClick={handleDeleteOptions}>Remove All</button>

            <ol>
                {options.map((option, index) => {
                    return (
                        <Option
                            key={index}
                            option={option}
                        ></Option>
                    )
                })}

            </ol>
        </div>
    )

}

const Option = ({ option }) => {
    return (
        <li>{option}</li>
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
        e.target.elements.option.value = '';
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>This option already exists+</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" required></input>
                    <button>Add Option</button>
                </form>
            </div>

        )
    }
}

ReactDOM.render(<IndecisionApp></IndecisionApp>, document.getElementById('app'));