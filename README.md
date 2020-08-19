# Setup

1. Clone the project using git or by downloading the zip file.
2. Run "npm install" to install the node modues.
3. This application uses ng2-charts to display trends(charts). To install the module and its dependencies, 
      run:
      npm install ng2-charts@2.2.5 --save
      npm install chart.js --save
 4. Run "ng serve --o". This will open the application at http://localhost:4200/
 
## Use case A

1. The app lands at the currency conversion page by default.
2. Select the currency using the dropdown.
3. Enter the amount you want to convert into INR.
4. Click convert.
5. The corresponding conversion rate will be shown in INR.

## Use case B

1. Click on "Show trends" in the nav-bar.
2. Select the currency using the dropdown.
3. Click on "Trends" button.
4. A line graph shows the trend in the choosen currency against INR in an year(current-past 12 months)

## Future Enhancements

1. Add date picker to allow the user to select the start and end date between which they want to see the currency trends.
2. Include the other types of charts such as pie chart, bar graph, etc.
3. Allow the user to interchange INR and choosen currency and enter the amount in INR to see the conversion rate of choosen currency.
