class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: props.count
        }
    }
    componentDidMount() {
        let count = parseInt(localStorage.getItem('count'))
        if(!isNaN(count)) {
            count = parseInt(count)
            this.setState(() => ({ count }))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            console.log('saving')
            localStorage.setItem('count', this.state.count)
        }
    }
    handleAddOne() { 
        this.setState((prevState) => {
            return {
                count: prevState.count  + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1 
            }
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.querySelector('#app'))

// let app = {
//     title: "Indecision App",
//     subtitle: "Put your life in the hands of a computer",
//     options: ['One', 'Two']
// }

// const template = (
//     <div id="wrapper">
//         <h2 id="heading">{ app.title }</h2>
//         <p>{ app.subtitle }</p>
//         <p>{ app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
//         <ol>
//             <li>One</li>
//             <li>Two</li>
//         </ol>
//     </div>
// );

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const subtractOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.querySelector('#app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={subtractOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()