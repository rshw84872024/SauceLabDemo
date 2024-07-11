import { Given, When, Then, And, Before, After } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
    // Code to run before any tests in this file or suite
    // This code will run once before any tests in this file start
    cy.log('Reloading the page before tests.');
    cy.reload();
});


Given("User should on the Landing page of the wesite", () => {
    cy.visit("https://demo.nopcommerce.com/")
});

When("User clicks on Appereal Tab", () => {
    cy.get(".category-item").eq(1)
        .click();
});

Then("User should see Apperal Tab open", () => {
    cy.get(".page-title")
        .contains("Apparel")
        .should("be.visible");

});
When("User clicks on clicks on Clothing", () => {
    cy.get(".item-box").eq(1)
        .click();
});

Then("User should see the clothing tab open", () => {
    cy.get(".page-title")
        .contains("Clothing")
        .scrollIntoView()
        .should("be.visible")
});

When("User clicks on Add to cart on first item", () => {
    cy.get(".buttons").eq(0)
        .click();

});

Then("User should enter the text in text box", () => {
    cy.get(".textbox")
        .click()
        .type("ABC");
});

When("User clicks on 3 items add to cart on the page", () => {
    cy.get("#add-to-cart-button-29")
        .click()
        .wait(500)
        .get(".buttons").eq(2)
        .click()
        .wait(500)
        .get(".buttons").eq(1)
        .click();

});

Then("User should scroll to Shopping cart", () => {
    cy.get("#topcartlink")
        .scrollIntoView()
});

When("User clicks on Shopping cart", () => {
    cy.get("#topcartlink")
        .click();
});

Then("User Navigate to checkout", () => {
cy.get(".cart-total")
.scrollIntoView();
});

When("User clicks on checkout", () => {
cy.get("#termsofservice")
.click()
.get("#checkout")
.click();
});

Then("User should Navigate to Billing page to Login", () => {
cy.get("#Email")
.click()
.type("Rahul_s1@gmail.com")
.get("#Password")
.type("Rahul@123")
.get(".button-1.login-button")
.contains("Log in")
.click();
});

When("User Fulfill all checkout Requirements", () => {
cy.get("#termsofservice")
.click()
.get("#checkout")
.click();
});

Then("User should naviagte to Confirm Page to confirm the shipment", () => {
cy.get(".button-1").eq(5)
.click()
.get(".button-1").eq(8)
.click()
.get(".button-1").eq(9)
.click()
.get(".button-1").eq(10)
.click()
.get(".button-1").eq(11)
.click()

});

And("User should see confirmation page", () => {
cy.get(".page-title")
.contains("Thank you")
.should("be.visible")
.get(".title")
.contains("Your order has been successfully processed!")
.should("be.visible");
});



After(() => {
    // Code to clear data or perform cleanup actions
    // This code will run after all tests in this file have completed
    cy.log('Performing cleanup tasks after all tests.');
    // Add your cleanup logic here, for example, deleting test data from the application or resetting state.
});
