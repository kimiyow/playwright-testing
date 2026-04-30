import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class navbarPage {
    private readonly page: Page;
    private readonly mainMenu: Locator;;
    private readonly accionesMovilidad: Locator;
    private readonly buttonRegistrarSolicitud: Locator;

    constructor(page: Page) {
        this.page = page;   
        this.mainMenu = page.locator('#menu-solicitudes');   
        this.accionesMovilidad = page.locator('#submenu-solicitudes-acciones-movilidad');
        this.buttonRegistrarSolicitud = page.locator('#nuevoRegistroSAM');

    }

    async navigateToMenuSolicitudes() {
        await this.mainMenu.hover();
        await this.mainMenu.click();
        await expect(this.accionesMovilidad).toBeVisible();
        await this.accionesMovilidad.click();
        await this.buttonRegistrarSolicitud.click();
        
    }
}
