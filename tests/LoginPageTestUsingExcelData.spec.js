// const {test, expect} = require('@playwright/test')

// const {LoginPage} = require('../pageObjects/LoginPage')

// const {ExcelUtils} = require('../Utils/ExcelUtils')

// let loginPage
// let testData

// const filePath = "E:\\Downloads\\Backup\\Rashaad_LP_BackUp\\Playwright_Automation_Learning\\PlaywrightAutomation\\TestData\\loginExcelData.xlsx"

// try{
//     testData = ExcelUtils.getDataFromExcel(filePath, "loginExcelData")
// } catch (error) {
//     console.log("File Not Found")
// }

// for(const data of testData) {
//     test.beforeEach(async ({page})=>{
//         loginPage = new LoginPage(page)
//         await loginPage.launchApplication(data.url)
//     })
//     test(`Check the login with valid credentials for ${data.name}`, {tag:'@pom2'}, async ({})=>{
//         await loginPage.validLogin(data.username, data.password)
//         await expect(loginPage.homePageIdentifier).toBeVisible()
//     })
// }