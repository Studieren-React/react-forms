import { Component } from "react";
import './Form.css';

const NAME_LENGTH: number = 10;
const EMAIL_PATTERN: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export class Form extends Component {
    state = {
        userName: '',
        userEmail: '',
        userMessage: '',
        userSelect: undefined,
        userCheck: false,
        userGender: ''
    };

    handleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        this.setState({[event.currentTarget.name]: event.currentTarget.value})
    }

    handleCheckboxChange = (event: React.FormEvent<HTMLInputElement>): void => {
        this.setState({[event.currentTarget.name]: event.currentTarget.checked})
    }

    nameValidator = () => {
        const { userName } = this.state;
        
        if (userName.length < NAME_LENGTH) {
            console.error(`The name length ${userName.length} must be greater than ${NAME_LENGTH}`);
        }
    }

    emailValidator = () => {
        const { userEmail } = this.state;

        if (!EMAIL_PATTERN.test(userEmail)) {
            console.error(`Email ${userEmail} isn't valid!`)
        }
    }

    render() {
        const { userName, userEmail, userMessage, userSelect, userCheck, userGender } = this.state;

        return (
            <div className="Form">
                <input
                    className="FormInput"
                    type="text"
                    name="userName"
                    placeholder="user name"
                    value={userName}
                    onChange={this.handleChange}
                    onBlur={this.nameValidator}
                />
                <input
                    className="FormInput"
                    type="email"
                    name="userEmail"
                    placeholder="user email"
                    value={userEmail}
                    onChange={this.handleChange}
                    onBlur={this.emailValidator}
                />
                <br />
                <textarea
                    className="FormInput"
                    name="userMessage"
                    value={userMessage}
                    onChange={this.handleChange}
                />
                <br />
                <select
                    name="userSelect"
                    value={userSelect}
                    onChange={this.handleChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="userCheck"
                        checked={userCheck}
                        onChange={this.handleCheckboxChange}
                    />
                    User subscription
                </label>
                <br />
                <div className="UserGender">
                    <input
                        type="radio"
                        name="userGender"
                        value="male"
                        onChange={this.handleChange}
                        checked={userGender === 'male'}
                    /> Male
                    <input
                        type="radio"
                        name="userGender"
                        value="female"
                        onChange={this.handleChange}
                        checked={userGender === 'female'}
                    /> Female
                </div>
            </div>
        )
    }
}