describe('Digital Tolk Test Suite', function(){

    it('TS_01', function(){

        cy.visit('https://ct.digitaltolk.se/')
        cy.title().should('eq','DigitalTolk - snabb tillgång till kvalitetstolkar - Home')
        cy.wait(5000)
    })       
    
    it('TS_02', function(){


        cy.xpath('//input[@placeholder="Välj"]').click()
        cy.wait(5000)
        cy.xpath('//*[contains(text(),"EN")]').click()
        cy.wait(5000)
        cy.xpath('//label[contains(text(),"Select Language")]').should('have.text',"Select Language") 
       

    })
    
    it('TS_03', function(){

        cy.xpath('//a[@class="app-button-primary-o home-page__banner-action-login"]').click()
        cy.url().should('contains', '/login')
        cy.wait(5000)


    })
    it('TS_04', function(){

        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/input[1]').type('ABCDEFGH')
        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]').type('123456')
        
    
        cy.xpath('//button[@class="el-button app-button-primary el-button--default login-form__login-button"]').click()
        cy.wait(5000)
        cy.xpath('//p[contains(text(),"The user credentials were incorrect.")]').should('have.text',"The user credentials were incorrect.")

    })
    
    it('TS_05', function(){

        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/input[1]').clear()
        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]').clear()

        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/input[1]').type('basharat@customer.com')
        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]').type('Test123$')
        
        cy.xpath('//button[@class="el-button app-button-primary el-button--default login-form__login-button"]').click()
        cy.wait(3000)
        
        cy.title().should('eq','DigitalTolk - snabb tillgång till kvalitetstolkar - Home')
    })
    it('TS_06', function(){

        cy.xpath('//input[@placeholder="Select Language"]').click()
        cy.wait(3000)
        cy.xpath('//span[contains(text(),"Ludhianiska")]').click()

        cy.xpath('//input[@placeholder="Day"]').click()
        cy.wait(3000)
        cy.xpath('//span[@class="flatpickr-day nextMonthDay"][contains(text(),"3")]').click()
        cy.wait(3000)
        cy.xpath('//input[@placeholder="Day"]').click()
        cy.xpath('//div[@class="dayContainer"]/span[14]').click()

        //span[contains(@class,'flatpickr-day')][contains(text(),'16')]
        
        cy.xpath('//input[@placeholder="Start Time"]').click()
       // cy.wait(3000)
        //cy.xpath('//body[1]/div[8]/div[1]/div[1]/ul[1]/li[3]/span[1]').click({force: true})

        //cy.xpath('/html/body/div[8]/div[1]/div[1]/ul/li[7]/span').click()
        cy.xpath('//span[contains(text(),"06:00")]').last().click({force: true})

        cy.xpath('//span[contains(text(),"Physical")]').click()
        cy.wait(3000)
        cy.xpath('//span[contains(text(),"Others")]').click()

        //cy.xpath('//i[@class="el-select__caret el-input__icon el-icon-arrow-up"]').last().click()
        cy.wait(3000)
        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]').click()
        cy.wait(3000)
        cy.xpath('//span[contains(text(),"Female Translator")]').click()

        cy.xpath('//input[@class="el-select__input"]').first().type('Basharat Test')

        cy.xpath('//span[contains(text(),"Basharat Test Translator - 81175")]').click()

        cy.xpath('//span[contains(text(),"Click to upload")]').click()

        const filepath = 'images/TestPic.PNG'
        cy.get('input[type="file"]').attachFile(filepath)
        //cy.xpath('//*[@id="pane-default"]/div/div/form/div[3]/div/div/div/button/span').click()
        cy.xpath('//body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]/div[1]/div[1]/div[1]/button[1]/span[1]').click()
        cy.wait(5000)

    })
    it('TS_07', function(){

        cy.xpath('//body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]/div[1]/div[1]/div[1]/button[1]/span[1]').click()
        cy.wait(3000)
        cy.xpath('//span[contains(text(),"Login")]').click()
        cy.wait(5000)
        //cy.xpath('//span[contains(text(),"Confirmation"]').should('have.text', "Confirmation")
        //cy.xpath('//label[contains(text(),"Booker Name:")]')
        cy.xpath('//label[contains(text(),"Booker Name:")]').should('have.text',"Booker Name:") 

        cy.xpath('//input[@placeholder="Input Booker Name"]').click({force: true})
        cy.xpath('//input[@placeholder="Input Booker Name"]').type("Dummy Broker Name")

        cy.xpath('//input[@placeholder="Input Staff Name"]').click({force: true})
        cy.xpath('//input[@placeholder="Input Staff Name"]').type("Dummy Staff Name")

        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[4]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]').click({force: true})
        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[4]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]').type("Dummy Booking Reference")
        
        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[4]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/div[4]/div[1]/div[1]/textarea[1]').click({force: true})
        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[4]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/div[4]/div[1]/div[1]/textarea[1]').type("Dummy Booking Notes")
        
        cy.wait(3000)
        cy.xpath('//span[contains(text(),"Fax")]').click()

        cy.xpath('//input[@placeholder="Ange i formatet 468738293 utan mellanslag, +, eller 00"]').type("1234567890")

        cy.xpath('//a[contains(text(),"Change")]').click()
        cy.xpath('//input[@id="google_address_autocomplete"]').clear()
        cy.wait(1000)
        cy.xpath('//input[@id="google_address_autocomplete"]').type("Centralplan 15, 111 20 Stockholm, Sverige")
        
        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[4]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/label[2]/span[2]').click()
        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[4]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/div[2]/div[1]/div[1]/label[2]/span[2]').click()
        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/main[1]/div[1]/div[4]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/div[3]/div[1]/div[1]/label[2]/span[2]').click()

        cy.xpath('//span[contains(text(),"Create Booking")]').click()

        cy.wait(5000)
    })   
   

});


