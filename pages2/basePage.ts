import { Page, expect } from "@playwright/test"; 

// La base page va a traer todos los métodos que tengamos enlazados con playwright 
export class BasePage  {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Aqui podemos crear los metodos que se van a repetir en todas las paginas, como por ejemplo el goto, o el click, o el fill, etc.
    async loadWeb (url: string) {
        await this.page.goto(url);
    }

    async clickOn(selector: string) {
        await this.page.click(selector);
    }

    async fillField(selector:string, value:string)
    {
        await this.page.locator(selector).fill(value);
    }

    async selectOption(selector:string, value:string) {
        await this.page.locator(selector).selectOption(value);
    }

    async expectVisible(selector:string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }
    
}   