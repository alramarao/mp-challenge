# MpChallenge
MARKT-PILOT I Software Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `npm run api:mock` to start the mock json-server with mock data which can be accessible on `http://localhost:4200/`

Run `npm run start:mock` to start the mock json-server and concurrently run angular application

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Packages Installed

`npm install json-server` to use proxy server with mock json data

`npm install consurrently` to run json-server proxy server and angular application simultaneously

`ng generate environments` to configure and store environment variables

`npm install bootstrap` to grab quick and simple styles

`ng add @angular-eslint/schematics` to prevent verify lint errors

`npm install @ngrx/store @ngrx/store-devtools @ngrx/effects` using NgRx Store to maintain the state management

`npm install @angular/material` to use angular material paginator in the overview page

`npm install ng2-charts chart.js` to use pie chart in details page

## Taks
I have spent around 7-8 hours to complete the below tasks including the bonus items which are mentioned in the pdf, along with the other bonus items which I added to the application

### Overview page
    Displaying the chocolate over table with below columns
    - Name
    - Brand
    - Lowest price per 100g
    - Average price for 100g
    - Link to the cheapest shop

    Bonus items:
    - Added Details button for each row to navigate the user to details component
    - Added Paginator using angular material to access more items, it has connected to GET API to fetch based on page index.

### Details page
    Displaying the details for selected chocolate.
    - Widget-1 - displaying Name and Brand
    - Widget-2 for Prices - Displaying all the prices in a table for that specific chocolate, `Amount` and `Shop Link` are the columns in the prices table
    
    Bonus items:
    - Added new widget for Nutrition details which shows the Pie chart with nutrition values for respective chocolate
    - Highliting the cheapest price per 100g in the details view (Highlighting the row with bootstrap primary color)
    - Making the Name and Brand are editable and also completed the implementation to push the changes to back end API

### Bonus items which are not described in the document:
    - Used NgRx Redux for state management
    - Used Bootstrap to make UI much better
    - Used json-server to proxy the backend server instead of reading the .json file directly.