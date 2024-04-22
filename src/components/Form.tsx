import { Component } from "react";
import './Form.css';

export class Form extends Component {
    state = {
        userName: '',
        userEmail: ''
    };

    handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        this.setState({[event.currentTarget.name]: event.currentTarget.value})
    }

    render() {
        const { userName, userEmail } = this.state;

        return (
            <div className="Form">
                <input
                    className="FormInput"
                    type="text"
                    name="userName"
                    placeholder="user name"
                    value={userName}
                    onChange={this.handleChange}
                />
                <input
                    className="FormInput"
                    type="email"
                    name="userEmail"
                    placeholder="user email"
                    value={userEmail}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}