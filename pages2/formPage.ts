 import { BasePage } from "./basePage";
 import { formsLocators } from "./locators/form";
 import {Page, Locator} from "@playwright/test";

export class formPage extends BasePage {
    private readonly emailField: Locator;
    private readonly passwordField: Locator
    private readonly buttonForm: Locator;
   

    constructor (page:Page) {
        super(page);
        this.emailField = page.locator(formsLocators.emailField);
        this.passwordField = page.locator(formsLocators.passwordField);
        this.buttonForm = page.locator(formsLocators.buttonForm);
       
    }

    async loginForm(){
      
        await this.emailField.fill(process.env.USERNAME || '');
        await this.passwordField.fill(process.env.PASSWORD || '');
        await this.buttonForm.click();
       
    }
}