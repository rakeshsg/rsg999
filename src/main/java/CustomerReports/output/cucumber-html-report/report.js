$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:git1/git1.feature");
formatter.feature({
  "name": "Test Calculator",
  "description": " This file describes calculator functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add two numbers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter 50 in calc",
  "keyword": "Given "
});
formatter.match({
  "location": "git1step.I_enter_50_in_calc()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press add",
  "keyword": "And "
});
formatter.match({
  "location": "git1step.I_press_add()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have entered 50 in calc",
  "keyword": "Then "
});
formatter.match({
  "location": "git1step.I_have_entered_50_in_calc1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Press add",
  "keyword": "And "
});
formatter.match({
  "location": "git1step.press_add()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "calc shows 100 in calc",
  "keyword": "Then "
});
formatter.match({
  "location": "git1step.calc_shows_100_in_calc()"
});
formatter.result({
  "status": "passed"
});
});