Feature: Test Calculator
 This file describes calculator functionality
 
 Scenario: Add two numbers
  Given I enter 50 in calc
  And I press add
  Then I have entered 50 in calc
  And Press add
  Then calc shows 100 in calc 