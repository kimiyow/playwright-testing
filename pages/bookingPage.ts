 import { BasePage } from "./basePage";
 import { bookingLocators } from "./locators/booking";
 import {Page, Locator} from "@playwright/test";


 export class bookingPage extends BasePage {

    private readonly fromPort: Locator;
    private readonly toPort: Locator;
    private readonly submitButton: Locator;
    private readonly nameField: Locator;
    private readonly addressField: Locator;
    private readonly cityField: Locator;
    private readonly stateField: Locator;
    private readonly zipCodeField: Locator;
    private readonly cardTypeSelector: Locator;
    private readonly creditCardNumberField: Locator;
    private readonly creditCardMonthField: Locator;
    private readonly creditCardYearField: Locator;
    private readonly nameOnCardField: Locator;

    constructor(page:Page) {
        super(page);
        this.fromPort = page.locator(bookingLocators.fromPort);
        this.toPort = page.locator(bookingLocators.toPort);
        this.submitButton = page.locator(bookingLocators.submitButton);
        this.nameField = page.locator(bookingLocators.nameField);
        this.addressField = page.locator(bookingLocators.addressField);
        this.cityField = page.locator(bookingLocators.cityField);
        this.stateField = page.locator(bookingLocators.stateField);
        this.zipCodeField = page.locator(bookingLocators.zipCodeField);
        this.cardTypeSelector = page.locator(bookingLocators.cardTypeSelector);
        this.creditCardNumberField = page.locator(bookingLocators.creditCardNumberField);
        this.creditCardMonthField = page.locator(bookingLocators.creditCardMonthField);
        this.creditCardYearField = page.locator(bookingLocators.creditCardYearField);
        this.nameOnCardField = page.locator(bookingLocators.nameOnCardField);
    }

    async selectDestiny(){
        await this.fromPort.selectOption('Mexico City'); 
        await this.toPort.selectOption('London');
        await this.submitButton.click();
    }

    async fillForm() {
        await this.nameField.fill('Kim');
        await this.addressField.fill('123');
        await this.cityField.fill('Ens');
        await this.stateField.fill('BC12');
        await this.zipCodeField.fill('323');
        await this.cardTypeSelector.selectOption('visa');
        await this.creditCardNumberField.fill('2133123123123');
        await this.creditCardMonthField.fill('12');
        await this.creditCardYearField.fill('2025');
        await this.nameOnCardField.fill('Kim Kim');
    }
     

}