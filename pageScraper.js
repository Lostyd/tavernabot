const fs = require('fs')
var data = fs.readFileSync('result.json');
var myObject = JSON.parse(data);
let i = 1
/*"may": [],
  "june": [],
  "july": [],
  "august": [],
  "september": [],
  "october": []*/ 
const scraperObject = {
	/*
	url: "https://my-calend.ru/holidays/" + i +"-october",
	
	async scraper(browser) {
		
		while (i <= 31) { 
			this.url = "https://my-calend.ru/holidays/" + i + "-october"
		let page = await browser.newPage();
		console.log(`Navigating to =>: ${this.url}`);
		await page.goto(this.url);
		//ожиданеи рендера DOM 
			await page.waitForSelector('.birthday-horoscope-stars');
		//получаем названия праздников 
		let holidaysName = await page.$$eval('section ul > li ', holidays => {

			return holidays = holidays.map(function (el) {
				let holiday = String(el.textContent)
				holiday = holiday.slice(0, -5)
				holiday = holiday.replace(/\s+/g, ' ').trim()

				return holiday
            } )

		});
		let pravoHolidays = await page.$$eval('details p > span', pravoslavie => {
			return pravoslavie = pravoslavie.map(el => el.textContent)
		})
		let narodnie = await page.$$eval('details div > a', narod => {
			return narod = narod.map(el => el.textContent)
		})
		let birthdays = await page.$$eval('details > .birthday-horoscope-stars > li', birthday => {
			return birthday = birthday.map(el => el.textContent)
		})
		let events = await page.$$eval('details > .holidays-day-info-events > ul > li', eventsArr => {
			return eventsArr = eventsArr.map(el => el.textContent)
		})
		//console.log('Праздники: ', holidaysName, '\n Православные праздники: ', pravoHolidays, '\n Народные праздники: ', narodnie, '\n Дни рождения: ', birthdays, '\n События: ', events)
			let resultat = {
			"date": i,
			"holidaysName": holidaysName,
			"pravoHolidays": pravoHolidays,
			"narodnie": narodnie ,
			"birthdays": birthdays,
			"events": events 
		}
			myObject.october.push(resultat)
			await page.close()
			i++
			if (i === 32) {
				var newData = JSON.stringify(myObject);
				fs.writeFile('result.json', newData, (err) => {
					if (err) throw err;
					console.log('new data added')
				}) 
            }
		}
	}
	*/
}

module.exports = scraperObject;