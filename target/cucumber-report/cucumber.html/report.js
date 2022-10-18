$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/navigation.feature");
formatter.feature({
  "line": 1,
  "name": "home Test",
  "description": "As user I want to login aldo website",
  "id": "home-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "I want to aldo",
  "description": "",
  "id": "home-test;i-want-to-aldo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"\u003cmenu\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "home-test;i-want-to-aldo;",
  "rows": [
    {
      "cells": [
        "menu"
      ],
      "line": 10,
      "id": "home-test;i-want-to-aldo;;1"
    },
    {
      "cells": [
        "New Arrivals"
      ],
      "line": 11,
      "id": "home-test;i-want-to-aldo;;2"
    },
    {
      "cells": [
        "Women"
      ],
      "line": 12,
      "id": "home-test;i-want-to-aldo;;3"
    },
    {
      "cells": [
        "Men"
      ],
      "line": 13,
      "id": "home-test;i-want-to-aldo;;4"
    },
    {
      "cells": [
        "Sale"
      ],
      "line": 14,
      "id": "home-test;i-want-to-aldo;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12308199700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I want to aldo",
  "description": "",
  "id": "home-test;i-want-to-aldo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"New Arrivals\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on page",
  "keyword": "Then "
});
formatter.match({
  "location": "NavigationPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 460750800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Arrivals",
      "offset": 12
    }
  ],
  "location": "NavigationPage.iClickOn(String)"
});
formatter.result({
  "duration": 3037030900,
  "status": "passed"
});
formatter.match({
  "location": "NavigationPage.iAmOnPage()"
});
formatter.result({
  "duration": 45900,
  "status": "passed"
});
formatter.after({
  "duration": 458500,
  "status": "passed"
});
formatter.before({
  "duration": 9986376800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "I want to aldo",
  "description": "",
  "id": "home-test;i-want-to-aldo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Women\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on page",
  "keyword": "Then "
});
formatter.match({
  "location": "NavigationPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 12
    }
  ],
  "location": "NavigationPage.iClickOn(String)"
});
formatter.result({
  "duration": 4011972900,
  "status": "passed"
});
formatter.match({
  "location": "NavigationPage.iAmOnPage()"
});
formatter.result({
  "duration": 25800,
  "status": "passed"
});
formatter.after({
  "duration": 271900,
  "status": "passed"
});
formatter.before({
  "duration": 12934821000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I want to aldo",
  "description": "",
  "id": "home-test;i-want-to-aldo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Men\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on page",
  "keyword": "Then "
});
formatter.match({
  "location": "NavigationPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 41500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Men",
      "offset": 12
    }
  ],
  "location": "NavigationPage.iClickOn(String)"
});
formatter.result({
  "duration": 6838243600,
  "status": "passed"
});
formatter.match({
  "location": "NavigationPage.iAmOnPage()"
});
formatter.result({
  "duration": 101400,
  "status": "passed"
});
formatter.after({
  "duration": 42600,
  "status": "passed"
});
formatter.before({
  "duration": 16052375500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I want to aldo",
  "description": "",
  "id": "home-test;i-want-to-aldo;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Sale\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on page",
  "keyword": "Then "
});
formatter.match({
  "location": "NavigationPage.iAmOnHomePage()"
});
formatter.result({
  "duration": 43400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sale",
      "offset": 12
    }
  ],
  "location": "NavigationPage.iClickOn(String)"
});
formatter.result({
  "duration": 19279964600,
  "status": "passed"
});
formatter.match({
  "location": "NavigationPage.iAmOnPage()"
});
formatter.result({
  "duration": 17900,
  "status": "passed"
});
formatter.after({
  "duration": 104800,
  "status": "passed"
});
});