describe("This is a test case for the problem user",()=>{
    it("this is to test the log in when the username and the bassword are correct",()=>{
       cy.visit("https://www.saucedemo.com/")
       cy.get('[data-test="username"]').type("problem_user")
       cy.get('[data-test="password"]').type("secret_sauce")
       cy.get('[data-test="login-button"]').click()
    })
    })