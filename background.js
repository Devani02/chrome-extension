chrome.alarms.create("checkPrices", { periodInMinutes: 60 });

chrome.alarms.onAlarm.addListener(() => {
    chrome.storage.local.get({ trackedPrices: [] }, function (data) {
        let prices = data.trackedPrices;

        prices.forEach(product => {
            fetch(product.url)
                .then(response => response.text())
                .then(html => {
                    let parser = new DOMParser();
                    let doc = parser.parseFromString(html, "text/html");
                    let priceElement = doc.querySelector('[class*="price"], [id*="price"], [data-price]');

                    if (priceElement) {
                        let newPrice = parseFloat(priceElement.innerText.replace(/[^0-9.]/g, ''));

                        if (!isNaN(newPrice) && newPrice < product.price) {
                            // Send a message to create a notification
                            chrome.runtime.sendMessage({
                                type: "priceDrop",
                                oldPrice: product.price,
                                newPrice: newPrice,
                                url: product.url
                            });

                            product.price = newPrice;
                            product.timestamp = new Date().toISOString();
                        }
                    }
                });
        });

        chrome.storage.local.set({ trackedPrices: prices });
    });
});

// Listen for messages and create a notification
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "priceDrop") {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: "Price Drop Alert!",
            message: `Price dropped from $${message.oldPrice} to $${message.newPrice}`,
            priority: 2
        });
    }
});
