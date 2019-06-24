class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                <p>{this.state.visibility && 'These are some hidden details.'}</p>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector('#app'))

// const details = "These are some important details about something, I guess."
// let isDetailShowing = false

// const toggleDetails = () => {
//     isDetailShowing = !isDetailShowing
//     renderApp()
// }

// const appRoot = document.querySelector('#app')

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleDetails}>{isDetailShowing ? 'Hide details' : 'Show details'}</button>
//             <p>{isDetailShowing && details}</p>
//         </div>
//     )
    
//     ReactDOM.render(template, appRoot)
// }

// renderApp()