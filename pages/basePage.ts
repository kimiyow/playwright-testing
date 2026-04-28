

import { Page, expect } from "@playwright/test";

// La base page va a traer todos los métodos que tengamos enlazados con playwright 
export class BasePage  {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    // Aqui podemos crear los metodos que se van a repetir en todas las paginas, como por ejemplo el goto, o el click, o el fill, etc.
    async goto (url: string) {
        await this.page.goto(url);
    }

    async clickOn(selector: string) {
        await this.page.click(selector);
    }

    async selectOption(selector: string, value: string) {
        await this.page.selectOption(selector, value);
    }

    async fill(select:string, value:string)
    {
        await this.page.fill(select, value);
    }
}