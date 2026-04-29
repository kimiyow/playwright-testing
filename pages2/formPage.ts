 import { BasePage } from "./basePage";
 import { formsLocators } from "./locators/form";
 import {Page, Locator} from "@playwright/test";

export class formPage extends BasePage {
    private readonly emailField: Locator;
    private readonly passwordField: Locator
    private readonly buttonForm: Locator;
    private readonly buttonForm2: Locator;

    constructor (page:Page) {
        super(page);
        this.emailField = page.locator(formsLocators.emailField);
        this.passwordField = page.locator(formsLocators.passwordField);
        this.buttonForm = page.locator(formsLocators.buttonForm);
        this.buttonForm2 = page.locator(formsLocators.buttonForm2);
    }

    async loginForm(){
        await this.emailField.fill('kimberly.montes53');
        await this.passwordField.fill('1235678');
        await this.buttonForm.click();
        await this.buttonForm2.click();
    }
}