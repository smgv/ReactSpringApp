import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Authenthication from './AuthenticationService.js'
import AuthenthicatedRoute from './AuthenthicatedRoute'


class ToDoApp extends Component {
    render() {
        return (
            <Router>
                <div className="ToDoApp">
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                        <Route path="/" exact strict component={Index} />
                        <AuthenthicatedRoute path="/welcome/:name" exact strict component={WelcomePage} />
                        <Route path="/login" exact strict component={Login} />
                        <AuthenthicatedRoute path="/todos" exact strict component={ListTodosComponent} />
                        <AuthenthicatedRoute path="/logout" exact strict component={LogoutComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent></FooterComponent>
                </div>
            </Router>
        );
    }
}

function ErrorComponent() {
    return (
        <div>
            <h2>Error Occured!!</h2>
        </div>
    )
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 1, description: 'Learn React', status: false, targetDate: new Date() },
                { id: 2, description: 'Learn Redux', status: false, targetDate: new Date() },
                { id: 3, description: 'Learn Nodejs', status: false, targetDate: new Date() },
                { id: 4, description: 'Learn Angular', status: false, targetDate: new Date() }
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="conatiner">
                    <h1>List Todos</h1>
                    <table className="table">
                        <thead>
                            <th>id</th>
                            <th>description</th>
                            <th>status</th>
                            <th>TargetDate</th>
                        </thead>
                        <tbody>
                            {this.state.todos.map(
                                todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.status.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>);
    }
}

class Index extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <p>Click here to <Link to="/login">Login</Link></p>
            </div>);
    }
}

class HeaderComponent extends Component {

    render() {
        
        const isLoggedIn = Authenthication.isLoggedIn();
        console.log(isLoggedIn)
        
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-brand"><a>Hastag</a></div>
                        <ul className="navbar-nav">
                            {isLoggedIn && <li><Link className="nav-link" to="/welcome/:name">Home</Link></li>}
                            {isLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                            {isLoggedIn && <li><Link className="nav-link" to="/logout" onClick={Authenthication.logOut}>Logout</Link></li>}
                        </ul>
                    </nav>
                </header>
            </div>);
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className="footer bg-dark">
                    <span>
                        All right reserved 2019 @hastag!
                    </span>
                </footer>
            </div>);
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are Logged Out!</h1>
                <div className="container">
                    Thank You!!
                </div>
            </div>);
    }
}



class WelcomePage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.match.params.name}</h1>
                <p>You can mange your todos <Link to="/todos">here</Link></p>
            </div>
        );
    }
}

class Login extends Component {

    // In this for every input control we have to declare different handle method
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         username: 'Ganesh',
    //         password: ''
    //     }

    //     this.handleUsernameChange = this.handleUsernameChange.bind(this);
    //     this.handlePasswordChange = this.handlePasswordChange.bind(this);
    // }

    // handleUsernameChange(event) {
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    // handlePasswordChange(event) {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             UserName : <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
    //             Password : <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
    //             <button>Login</button>
    //         </div>
    //     )
    // }

    // In this we will have common handler method for each element
    // In this state object name and input elemnt's name should be same
    constructor(props) {
        super(props);

        this.state = {
            username: 'Ganesh',
            password: '',
            hasLoginFailed: false,
            showSucessMessage: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginCheck = this.loginCheck.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value // for declaring variable we use []
        })
    }

    loginCheck() {
        if (this.state.username === "Ganesh" && this.state.password === 'admin') {
            Authenthication.registerSuccessfullLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({ showSucessMessage: true, hasLoginFailed: false })
        } else {
            console.log('failed');
            this.setState({ hasLoginFailed: true, showSucessMessage: false })
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials>
                    <ShowValidCredentials showSucessMessage={this.state.showSucessMessage}></ShowValidCredentials> */}
                    {/* True && 'String Value' -> String Value
                    False &&  'String Value' -> false */}
                    <br />
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Login</div>}
                    {this.state.showSucessMessage && <div>Valid Login</div>}
                    <br />
                    UserName : <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <br />
                    <br />
                    Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <br />
                    <br />
                    <button className="btn btn-success" onClick={this.loginCheck}>Login</button>
                </div>
            </div>
        )
    }

}




// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Login</div>
//     }
//     return null
// }

// function ShowValidCredentials(props) {
//     if (props.showSucessMessage) {
//         return <div>Valid Login</div>
//     }
//     return null
// }

export default ToDoApp

