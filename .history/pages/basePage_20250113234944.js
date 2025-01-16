exports.BasePage = class BasePage {

    constructor(page, context){
        this.page = page;
        this.context = context;
    }

    //ir a la web
    async gotoPage(url){
        await this.page.goto(url);
    }

    //escribir en elemento
    async fillLocator(locator,param){
        await this.page.locator(locator).fill(param);
    }

    //click
    async clickElement(locator){
        await this.page.getByRole(locator).click();
    }

}