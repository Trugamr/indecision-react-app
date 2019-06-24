let app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option)
        e.target.elements.option.value = '';
        renderApp();
    } 
}

const onRemoveAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    let option = app.options[Math.floor(Math.random()*app.options.length)]
    alert(option);
}

const appRoot = document.querySelector('#app');

const renderApp = () => {
    const template = (
        <div id="wrapper">
            <h2 id="heading">{ app.title }</h2>
            <p>{ app.subtitle }</p>
            <p>{ app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)    
}

renderApp();