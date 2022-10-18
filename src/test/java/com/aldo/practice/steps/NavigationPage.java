package com.aldo.practice.steps;

import com.aldo.practice.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NavigationPage {
    @Given("^I am on HomePage$")
    public void iAmOnHomePage() {
    }

    @When("^I click on \"([^\"]*)\"$")
    public void iClickOn(String menu) throws InterruptedException {
       new HomePage().clickonMenu(menu);

    }

    @Then("^I am on page$")
    public void iAmOnPage() {
    }
}
