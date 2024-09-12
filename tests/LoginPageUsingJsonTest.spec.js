const {test, expect} = require('@playwright/test')

const {LoginPage} = require('../pageObjects/LoginPage')
const {UserRegistrationPage} = require('../pageObjects/UserRegistrationPage')

// JSON --> JSON String --> JS Object
const datas = require('../TestData/multipleData.json')

console.log(datas)

const invalidUsername = "ahmedrashaad"
const invalidUsername1 = "ahmedrashaad@hotmail."

let loginPage;
let userRegistrationPage
for(const data of datas) {
    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page)
        userRegistrationPage = new UserRegistrationPage(page)
        await loginPage.launchApplication(data.url)
    })

    // test.describe("Login Test using JSON",()=>{
        test(`Check the login with valid credentials for ${data.name}`, {tag:'@po'}, async ({})=>{
            await loginPage.validLogin(data.username, data.password)
            await expect(loginPage.homePageIdentifier).toBeVisible()
        })

        // test("Check the login with invalid credentials", {tag:'@pom'}, async ({})=>{
        //     await loginPage.invalidLogin(username, "password")
        //     await expect(loginPage.errorMessage).toHaveText("Incorrect email or password.")
        // })

        // test("Check the login with blank values", {tag:'@pom'}, async ({})=>{
        //     await loginPage.validLogin("", "")
        //     await expect(loginPage.requiredFields).toHaveCount(2)
        //     await expect(loginPage.requiredFields.first()).toHaveText("*Email is required")
        //     await expect(loginPage.requiredFields.last()).toHaveText("*Password is required")
        // })

        // test("Check the login with blank password", {tag:'@pom'}, async ({})=>{
        //     await loginPage.validLogin(username, "")
        //     await expect(loginPage.requiredFields).toHaveCount(1)
        //     await expect(loginPage.requiredFields.last()).toHaveText("*Password is required")
        // })

        // test("Check the login with data in email field without '@gmail.com'", {tag:'@pom'}, async ({})=>{
        //     await loginPage.validLogin(invalidUsername, password)
        //     await expect(loginPage.requiredFields).toHaveCount(1)
        //     await expect(loginPage.requiredFields.last()).toHaveText("*Enter Valid Email")
        // })

        // test("Check the login with data in email field without 'com'", {tag:'@pom'}, async ({})=>{
        //     await loginPage.validLogin(invalidUsername1, password)
        //     await expect(loginPage.requiredFields).toHaveCount(1)
        //     await expect(loginPage.requiredFields.last()).toHaveText("*Enter Valid Email")
        // })

        // test("Navigate to Register page using 'Don't have an account? Register here' link", {tag:'@pom'}, async()=>{
        //     await loginPage.navigateToRegisterPageUsingDontHaveAccountRegisterHereLink()
        //     await expect(userRegistrationPage.registerButton).toBeVisible()
        // })

        // test("Navigate to Forgot Password page using 'Forgot password?' link", {tag:'@pom'}, async()=>{
        //     await loginPage.navigateToForgotPasswordPage(url)
        //     await expect(loginPage.enterNewPasswordHeader).toBeVisible()
        // })

    // })
}