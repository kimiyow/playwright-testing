 import process from "process";
import { BasePage } from "./basePage";
 import { formsLocators } from "./locators/form";
 import {Page, Locator} from "@playwright/test";

export class formPage extends BasePage {
    private readonly emailField: Locator;
    private readonly passwordField: Locator
    private readonly buttonForm: Locator;
    private readonly selectIngreso: Locator;
    private readonly matriculaEmpleado: Locator;
    private readonly buttonConfirmarRol: Locator; 
    
   
   
    constructor (page:Page) {
        super(page);
        this.emailField = page.locator(formsLocators.emailField);
        this.passwordField = page.locator(formsLocators.passwordField);
        this.buttonForm = page.locator(formsLocators.buttonForm);
        this.selectIngreso =  page.locator(formsLocators.selectIngreso);
        this.matriculaEmpleado = page.locator(formsLocators.matriculaEmpleado);
        this.buttonConfirmarRol = page.locator(formsLocators.buttonConfirmarRol);
       
    }

    async loginForm(){
      
        await this.emailField.fill('eservicios.soporte'); 
        await this.passwordField.fill(process.env.PASSWORD || '');
        await this.buttonForm.click();
       
    }

    async changeRole(){
        await this.selectIngreso.selectOption('Institucional');
        await this.matriculaEmpleado.fill('dia.ens');
        await this.buttonConfirmarRol.click();
    }

    // async accessSolicitud(){
    //      await this.page.getByText('MENÚ', { exact: true }).click();
    //      await this.page.getByRole('link', { name: ' 27 Solicitudes ' }).click();
    //      await this.page.getByRole('link', { name: 'Acciones de Movilidad7' }).click();
    // }

    async navBar(){
        await this.page.getByText('MENÚ', { exact: true }).click();
        const navBar = this.page.locator('main-nav:hover');
        const menuItem = navBar.locator('a', { hasText: 'Solicitudes' });
        const submenuItem = navBar.locator('a', { hasText: 'Acciones de Movilidad' });

        await menuItem.hover();
        await submenuItem.click();
      
        
     }
      
    

}