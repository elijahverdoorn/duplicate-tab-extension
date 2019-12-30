chrome.commands.onCommand.addListener(function(command) {
	// console.log('got command:', command);

	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(queryResult) {
		let currentTab = queryResult[0] // Should only get one result
		if (currentTab) {
			// Make sure that the current tab exists
			// console.log('currentTab is:', currentTab);
			chrome.tabs.duplicate(currentTab.id, function(newTab) {
				chrome.tabs.update(newTab.id, {
					highlighted: true
				});
			});
		}
	});
});
