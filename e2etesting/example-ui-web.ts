describe('Add a new route', function(){

    var EC = protractor.ExpectedConditions;
    
    it('should validate that the register page is openend by default', function() {
        browser.get('/');
        var title = element(by.className('header-title'));
        browser.wait(EC.visibilityOf(title), 1000).then(function(){
            expect(title.getText()).toBe('Registreer');
        });
    })

    it('should display the report after clicking the buttonStart New Route', function() {
        var startbutton = element(by.className('route-capture-button'));
        expect(startbutton.getAttribute('class')).toContain("ion-color-success");
        startbutton.click();
        var title = element(by.className('page-title'));
        expect(title.getText()).toBe('Live rapport');
        expect(startbutton.getAttribute('class')).toContain("ion-color-danger");
    });

    it('should display the report page after stopping the route capturing', function() {
        var stopbutton = element(by.className('route-capture-button'));
        stopbutton.click()
        expect(stopbutton.getText()).toBe('START RIT');
    });

    it('should display my own routes after opening the my routes view', function() {
        var menuitem = element(by.xpath('//ion-list/ion-menu-toggle[2]'));
        expect(menuitem.getText()).toBe('Mijn ritten');
        menuitem.click()
        var rows = element(by.xpath("//ion-datetime[1]"));
        expect(rows.getText()).toBe("04 May 2019");
    });

});