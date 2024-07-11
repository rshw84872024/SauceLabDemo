// Importing necessary Cypress-Cucumber preprocessor steps
import { Given, When, Then, And, Before, After } from 'cypress-cucumber-preprocessor/steps';

// Before hook to run before any tests in this file or suite
Before(() => {
    // Code to run before any tests in this file or suite
    // This code will run once before any tests in this file start
    cy.log('Reloading the page before tests.');
    cy.reload();
});

// Step definitions using Cucumber syntax
// Step: User should be on the Landing page of the website

Given("User should on the Landing page of the wesite", () => {

    cy.visit("https://demo.nopcommerce.com/")
});
// Step: User clicks on Apparel Tab
When("User clicks on Appereal Tab", () => {
    cy.get(".category-item").eq(1)
        .click();
});
// Step: User should see Apparel Tab open
Then("User should see Apperal Tab open", () => {
    cy.get(".page-title")
        .contains("Apparel")
        .should("be.visible");

});

// Step: User clicks on Clothing
When("User clicks on clicks on Clothing", () => {
    cy.get(".item-box").eq(1)
        .click();
});
// Step: User should see the clothing tab open
Then("User should see the clothing tab open", () => {
    cy.get(".page-title")
        .contains("Clothing")
        .scrollIntoView()
        .should("be.visible")
});
// Step: User clicks on Add to cart on first item
When("User clicks on Add to cart on first item", () => {
    cy.get(".buttons").eq(0)
        .click();

});
// Step: User should enter the text in text box
Then("User should enter the text in text box", () => {
    cy.get(".textbox")
        .click()
        .type("ABC");
});
// Step: User clicks on 3 items add to cart on the page
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
// Step: User should scroll to Shopping cart
Then("User should scroll to Shopping cart", () => {
    cy.get("#topcartlink")
        .scrollIntoView()
});
// Step: User clicks on Shopping cart
When("User clicks on Shopping cart", () => {
    cy.get("#topcartlink")
        .click();
});
// Step: User Navigate to checkout
Then("User Navigate to checkout", () => {
cy.get(".cart-total")
.scrollIntoView();
});
// Step: User clicks on checkout
When("User clicks on checkout", () => {
cy.get("#termsofservice")
.click()
.get("#checkout")
.click();
});
// Step: User should Navigate to Billing page to Login
Then("User should Navigate to Billing page to Login", () => {
cy.get("#Email")
.click()
.type("Rahul$@gmail.com")
.get("#Password")
.type("Rahul@123")
.get(".button-1.login-button")
.contains("Log in")
.click();
});
// Step: User Fulfill all checkout Requirements
When("User Fulfill all checkout Requirements", () => {
cy.get("#termsofservice")
.click()
.get("#checkout")
.click();
});
// Step: User should navigate to Confirm Page to confirm the shipment
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
// Step: User should see confirmation page
And("User should see confirmation page", () => {
cy.get(".page-title")
.contains("Thank you")
.should("be.visible")
.get(".title")
.contains("Your order has been successfully processed!")
.should("be.visible");
});


// After hook to perform cleanup actions after all tests in this file or suite
After(() => {
    // Code to clear data or perform cleanup actions
    // This code will run after all tests in this file have completed
    cy.log('Performing cleanup tasks after all tests.');
    // Add your cleanup logic here, for example, deleting test data from the application or resetting state.
});
