Feature: home Test
  As user I want to login aldo website

  Scenario Outline: I want to aldo

    Given I am on HomePage
    When  I click on "<menu>"
    Then  I am on page
    Examples:
      | menu         |
      | New Arrivals |
      | Women        |
      | Men          |
      | Sale         |





