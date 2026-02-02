const clear = () => chrome.browsingData.removeDownloads({});

// Clear pre-existing downloads on startup.
clear();

// Clear 10 seconds after the last download completes.
let timeout;
chrome.downloads.onChanged.addListener(({state}) => {
	if (state?.current !== 'complete') {
		return;
	}

	clearTimeout(timeout);
	timeout = setTimeout(clear, 10_000);
});
