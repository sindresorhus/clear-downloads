'use strict';

setInterval(chrome.browsingData.removeDownloads.bind(null, {}), 10000);
