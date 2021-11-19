# _Currency Exchanger_

#### By _**Jacob Wilson**_

#### _An application that converts an amount of currency between different types._

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _Markdown_
* _Bootstrap_
* _JQuery_
* _Jest_
* _Webpack_
* _Lint_
* _Postman_

## Description

_This application populates 2 dropdown selections for currencies based on the currencies available in the [ExchangeRate-API](https://www.exchangerate-api.com/). After the user has made a selection of a starting currency and an ending currency the application makes an API call based on the starting currency and gets it's exchange rates. Then the application finds the key value with the ending currency, which contains the conversion rate, and calculates how much money that would be after multiplying it by the exchange rate. This information is then displayed to the user. If somehow an unavailable currency were to be selected, or if the api call fails, the application would show an error message to the user._

## Setup/Installation Requirements

Make sure to include information for API

* _You can find the github repository [here](https://github.com/JLEWilson/currency_exchanger)_
* _Click the code button, and copy the https link_
* _In your in git bash or your preferred git terminal navigate to the directory you would like to store the project_
* _Enter: "git clone" followed by the https link_
* _Now that the repository is cloned to your computer, right click on the folder and click open with vs code_
* _Now type npm install in your terminal to install the packages used in the project, you may have to run install twice due to the size of the packages_
* _**To make sure the application works for you, you will need to get your own api key using the following steps:**_
_1. Create an account on the [ExchangeRate-API](https://www.exchangerate-api.com/) website._
_2. If you created an account using the **Get Free Key** button it will have already generated one for you, If you did not you will be able to generate one by navigating to the **Api Keys** tab and selecting **Add New Api Key**_
_3. Once you have an API key you will need to create a .env file at the top level of the project directory_ 
_4. type: API_KEY=Your-Api-Key-Here  with your API Key instead of the text after the equals sign._
* _You can now view the project by typing npm run start in your terminal_
* _OR_
* _You can find the deployed project on gh-pages (here)[]

## Known Bugs

* _No known bugs_

## License - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems or find a bug, would like to reach me for a separate reason, feel free to send me an email @jacobleeeugenewilson@gmail.com with details of your issue._

Copyright (c) _11/19/2021_ _Jacob Wilson(s)_