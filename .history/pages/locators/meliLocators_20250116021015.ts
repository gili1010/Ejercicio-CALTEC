export const meliLocators = {
    masTarde:"//span[contains(text(),'Más tarde')]",
    categorias: "//a[@class='nav-menu-categories-link']",
    categoriasclick: "//a[text()='Categorías']",
    construccion:"//li//a[text()='Construcción']",
    tecnologia:"//li//a[text()='Tecnología']",
    verMas:"//span[contains(text(),'🛁 Seleccionados para tu baño 🚿')]/..",
    griferiaParaBano:"//span[text()='Grifería para Baño']",
    AccesorioCelulares:"//a[contains(text(),'Accesorios para Celulares')]",
    totalResultados:"//div[@class='ui-search-search-result']",
    Ofertas:"//a[contains(text(),'Ofertas')]",
    OfertasDelDia:"//a[text()='Oferta del día']",
    Supermercado:"//a[contains(text(),'Supermercado') and @href='https://www.mercadolibre.com.ar/ofertas/supermercado#menu=categories']",
    Capsulas:"//span[contains(text(),'CAPSULAS')]",

    Vehiculos:"//a[contains(text(),'Vehículos') and @href='https://www.mercadolibre.com.ar/vehiculos/#menu=categories']",
    AutosUsados:"//span[contains(text(),'autos usados')]",
    CompraInternacional:"//a[contains(text(),'Compra Internacional')]",
    VerMasCI:"//h2[text()='Lo mejor en Tecnología']/..//a[contains(text(),'Ver más')]",
    PrecioDesde:"//input[@data-testid='Minimum-price']",
    PrecioHasta:"//input[@data-testid='Maximum-price']",
    AplicarPrecio:"//button[@data-testid='submit-price']",

    //Validaciones
    ValidarModuloSupermercado:"//h1[contains(text(),'Supermercado')]",
    ValidarModuloGriferia:"//h1[contains(text(),'Grifería para Baño')]",
    ValidarModuloOfertasDelDia:"//span[contains(text(),'Oferta del día')]",
    ValidarModuloAccesoriosCelulares:"//h2[contains(text(),'Accesorios para Celulares')]",
    ValidarTotalResultado:"//p[@class='results-quantity']",
    ValidarModuloCelulares:"//span[contains(text(),'Celulares y Teléfonos')]"
}