
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({
		headless:false,
		defaultViewport:{
			width:1300,
			height:700
		}
	});
	const page = await browser.newPage();
	await page.goto('https://movie.douban.com/cinema/nowplaying/beijing/',{
		waitUntil:'domcontentloaded'
	});
	const  result=await page.evaluate(()=>{
    const $imgs = $('#nowplaying .lists>li .poster img')
		const result = []
		for (var i = 0; i < $imgs.length; i++) {
       const $img = $($imgs[i])
			 const src = $img.attr('src')
      result.push(src)
		}
   return result

	})

	console.log(result)
	await browser.close();
})();