const puppeteer = require('puppeteer');


// Function to launch Puppeteer, set up network response listener, and navigate to the given URL
async function detectM3U8File(url) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set user agent for the browser
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    const m3u8Urls = [];
    // Listen for network responses and check if it's an .m3u8 file
    page.on('response', (response) => {
        const url = response.url();
        //console.log('Detected .m3u8 file:', url);
        if (url.includes('.m3u8')) {
            m3u8Urls.push(url);
        }
    });

    // Navigate to the provided URL
    await page.goto(url);

    // Optionally, you can wait for a specific selector or condition here
    // await page.waitForSelector('...');

    // Close the browser after operations
    await browser.close();

    //return m3u8Urls;
    return [...new Set(m3u8Urls)];
}

// Example usage
//detectM3U8File('https://www.livehdtv.com/gulli/');
module.exports = detectM3U8File;