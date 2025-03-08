import {chromium} from 'playwright'

const exec = async () => {
    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://playwright.com')

    await page.screenshot({
        path: './output/screenshot.png'
    })

    await context.close()
    await browser.close()
}

exec().then(console.log).catch(console.error)