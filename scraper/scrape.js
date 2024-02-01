const puppeteer = require('puppeteer');
const fs = require('fs');

let data = {};

async function getCP() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    const baseUrl = 'https://db.pokemongohub.net/pokemon/';
    // let currentPage = 1;
    // const totalPages = 500;

    let currentPage = 901
    const totalPages = 1008;

    while (currentPage <= totalPages) {
        const url = `${baseUrl}/${currentPage}/iv-chart`;
        await page.goto(url, {
            waitUntil: 'domcontentloaded',
        });

        const cpLevel = await page.evaluate(() => {
            const nameElement = document.querySelector('h1');
            const name = nameElement ? nameElement.textContent.replace(' IV Chart', '') : '';

            const weatherInfluences = document.querySelectorAll('span[class^="WeatherInfluences_weatherText"]');
            let weatherBoost = Array.from(weatherInfluences).map(element => element.innerText);

            const hundoCPElement = document.querySelector('table tbody tr td:nth-child(4) strong');
            const hundoCP = hundoCPElement ? hundoCPElement.textContent : '';

            const hundoWeatherCPElement = document.querySelector('table tbody tr td:nth-child(5) strong');
            const hundoWeatherCP = hundoWeatherCPElement ? hundoWeatherCPElement.textContent : '';

            return { name, hundoCP, hundoWeatherCP, weatherBoost };
        });

        data[currentPage] = cpLevel;
        await page.waitForTimeout(2000);
        currentPage++;
    }

    await browser.close();
    fs.writeFileSync('./data/Pokemon_Raid_Hundo_CP2.json', JSON.stringify(data, null, 2), 'utf-8');

}

getCP();