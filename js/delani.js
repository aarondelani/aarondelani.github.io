(function delani(i) {

// Parses array of email objects
emails = function (arr) {
	var emails = arr;

	if (typeof emails[0] !== 'undefined' && emails[0] !== null) {
		for (var i = 0; i < emails.length; i++) {
			var str = emails[i].href;
			var str = str.replace(/\(.*\)/, "\@");

			emails[i].href = str;
		}
	}
}

})();
