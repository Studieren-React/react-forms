import { Component, ReactNode } from "react";
import './Subscription.css';

const EMAIL_PATTERN: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export class Subscription extends Component {
    state = {
        userEmail: '',
        userAgreement: false
    }

    emailHandler = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({ userEmail: event.currentTarget.value })
    }

    checkboxHandler = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({ userAgreement: event.currentTarget.checked })
    }

    buttonHandler = () => {
        const { userEmail, userAgreement } = this.state;
        
        // Check email validity
        const isEmailValid: boolean = EMAIL_PATTERN.test(userEmail);
        if (!isEmailValid) {
            alert('Achtung! Email isn\'t valid!');
            return;
        }

        // Check agreement validity
        if (!userAgreement) {
            alert('You didn\'t agree with everything!');
            return;
        }

        alert('Great! You have successfully completed the form!');
        this.setState({ userEmail: '', userAgreement: false });
    }

    render(): ReactNode {
        const { userEmail, userAgreement } = this.state;

        return (
            <div className="Subscription">
                <input
                    type="email"
                    name="userEmail"
                    placeholder="User email here"
                    value={userEmail}
                    onChange={this.emailHandler}
                />
                <div className="SubscriptionAgreement">
                    <label
                        htmlFor="userAgreement"
                        className="SubscriptionAgreementLabel"
                    >
                        <input
                            className="SubscriptionAgreementCheckbox"
                            type="checkbox"
                            name="userAgreement"
                            id="userAgreement"
                            checked={userAgreement}
                            onChange={this.checkboxHandler}
                        /> I agree with everything and subscribe to everything
                    </label>
                </div>
                <div className="SubscriptionButtonWrapper">
                    <button
                        className="SubscriptionButton"
                        type="button"
                        onClick={this.buttonHandler}
                    >send</button>
                </div>
            </div>
        )
    }
}