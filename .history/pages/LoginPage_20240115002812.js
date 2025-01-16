import { BasePage } from './basePage';

let UserNameLocator = 'input[name="userName"]';
let PassLocator = 'input[name="password"]';
let SubmitButton = 'button[name="Submit"]';

export class LoginPage extends BasePage {
    constructor(page, context) {
        super(page, context);
    }

    async login(username, password) {
        await this.fillLocator(UserNameLocator, username);
        await this.fillLocator(PassLocator, password);
        await this.clickElement(SubmitButton);
    }
}
