chrome.action.onClicked.addListener(async () => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        if (tabs[0].url.includes('github')) {
            chrome.tabs.create({ url: tabs[0].url + '.patch' });
        }
        else {
            alert('Hello, World!');
        }
    });
});