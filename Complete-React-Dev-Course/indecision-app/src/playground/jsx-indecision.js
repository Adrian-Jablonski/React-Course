// Running babel src/app.js --out-file=public/scripts/app.js --presets=env,react to complite and override file in scripts/app.js

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react -- watch will automatically compile the file

let app = {
    title: 'Indecision App',
    subtitle: 'App Info',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
}

const clearAllOptions = () => {
    app.options = [];
    renderIndecisionApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');



const renderIndecisionApp = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearAllOptions}>Remove All</button>
            <ol>
                {app.options.map((option, index) => {
                    return (
                        <li key={index}>{option}</li>
                    )
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" required></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderIndecisionApp();





// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>
//     } else {
//         return 'Unknown';
//     }
// }

// const user = {
//     name : 'AJ',
//     age : 26,
//     location: null
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {user.age >= 18 && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// )