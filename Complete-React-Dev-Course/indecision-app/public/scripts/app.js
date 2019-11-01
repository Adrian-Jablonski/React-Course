'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: _this.props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            // this.setState(() => {
            //     return {
            //         options: []
            //     }
            // })

            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {

            if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }

            // this.setState((prevState) => {
            //     return {
            //         options: prevState.options.concat([option])
            //     }
            // })

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in the hands of a computer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, {
                    subtitle: subtitle
                }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(_ref) {
    var title = _ref.title,
        subtitle = _ref.subtitle;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            title
        ),
        React.createElement(
            'h2',
            null,
            subtitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision"
};

var Action = function Action(_ref2) {
    var handlePick = _ref2.handlePick,
        hasOptions = _ref2.hasOptions;


    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: handlePick,
                disabled: !hasOptions
            },
            'What should I do?'
        )
    );
};

var Options = function Options(_ref3) {
    var options = _ref3.options,
        handleDeleteOptions = _ref3.handleDeleteOptions;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: handleDeleteOptions },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            options.map(function (option, index) {
                return React.createElement(Option, {
                    key: index,
                    option: option
                });
            })
        )
    );
};

var Option = function Option(_ref4) {
    var option = _ref4.option;

    return React.createElement(
        'li',
        null,
        option
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value;
            e.target.elements.option.value = '';
            var error = this.props.handleAddOption(option);

            // this.setState(() => {
            //     return {
            //         error
            //     }
            // })

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    'This option already exists'
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option', required: true }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));