# FrankfurterApi

To run this project on your development environment you must first run these commands on the master Branch:

`npm install` <br>
`npm install @fortawesome/fontawesome-svg-core` <br>
`npm install @fortawesome/free-solid-svg-icons` <br>
`npm install @fortawesome/angular-fontawesome` <br>
`npm install xlsx`

## The Api 

The Frankfurter API tracks foreign exchange references rates published by the European Central Bank. The data refreshes around 16:00 CET every working day. Frankfurter integrates seamlessly with libraries like Money.js and Dinero.js.

Eg: https://api.frankfurter.app/${parameters}

## Tools

We've developed five main tools

## 1 - Menu
From the menu you can navigate between components and get data from different endpoints

![image](https://user-images.githubusercontent.com/71354894/155049941-b5663f62-7608-4c03-9c56-a5ebafb34e21.png)

## 2 - Latest Rates:
This endpoint returns the latest rates. We added a feature to export these rates to excel, so it is possible to get these dates and create an analysis

![image](https://user-images.githubusercontent.com/71354894/155049398-4de0c2f4-3fcc-484d-8d2b-9ed699f97d5a.png)

## 3 - Historical Rates
This endpoint returns historical rates for any working day since 4 January 1999.

![image](https://user-images.githubusercontent.com/71354894/155049497-7d3fae21-3467-4171-aabb-2364f8a81752.png)

## 4 - Time Series Rates
This endpoint returns data from a period of time from since 4 January 1999 until today. 

![image](https://user-images.githubusercontent.com/71354894/155049638-40b3f25e-9886-440a-a91f-5e4c262edeec.png)

## 5 - Conversion Rates
You can convert any value between currencies using the above endpoints in combination with the amount parameter.

![image](https://user-images.githubusercontent.com/71354894/155049704-d64ce502-261a-4ac7-9d0f-957f3816da64.png)

## Reponsivity
All the system is responsive, which means you get the same result using the website through a computer or a cell phone

![image](https://user-images.githubusercontent.com/71354894/155132849-d8fd1949-944a-4f97-8e0e-7d981471155d.png)

## Our github
Mateus: [https://github.com/MateusMo/](https://github.com/MateusMo/) <br>
Igor: [https://github.com/idmcarvalho](https://github.com/idmcarvalho) <br>
Iago: [https://github.com/iagoian](https://github.com/iagoian) <br>

## Api used to build this project [https://www.frankfurter.app/docs/](https://www.frankfurter.app/docs/)

