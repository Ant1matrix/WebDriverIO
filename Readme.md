---
runme:
  id: 01HMEXTPS16CV0GV0GVG97FBP8
  version: v2.2
---

# Installation and automated test cases of iDeal web-store using WebDriverIO

This repository contains files and scripts used to run 3 separate automated test cases on [**iDeal.lv**](https://www.ideal.lv) website.
If you don't have WebdriverIO installed and do not know how to properly operate with it, please see the instructions and links below.

## Setup and installing WebDriverIO

1) Please follow the following link to the official [WebDriverIO Getting Started Guide](https://webdriver.io/docs/gettingstarted) and follow the instructions as described there. **IMPORTANT NOTE**: Please make sure you have the latest version of NODE.js installed on your system.

2) Additionally, you can follow this [Video guide](https://www.youtube.com/watch?v=qx2mCbKi6N4) on how to setup and initialize WebdriverIO. **Please note** that the video guide describes installation of an older version of WebdriverIO, so some things described can be different from the current version, described on the official website.

## Running the test cases

After installing all default packages and dependancies, please clone this repository using `git clone` to your local machine and go to the **specs** folder.
There are currently 3 test cases that can be run using following commands:

1) `ideal_login.js` - This tests the website's login function by feeding incorrect user credentials to receive a warning message. To run this test type in your terminal: `npx wdio run ./wdio.conf.js --spec ideal_login.js`

2) `ideal_search.js` - This tests the search function of the web-store by looking feeding the input into the search bar and checking if the search bar contains the product text. To run this test type in your terminal: `npx wdio run ./wdio.conf.js --spec ideal_search.js`

3) `ideal_addBasket.js` - This tests the website's ability to add a product to a basket and remove it from it. To run this test type in your terminal: `npx wdio run ./wdio.conf.js --spec ideal_addBasket.js`