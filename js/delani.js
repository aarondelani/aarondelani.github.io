(function delani(i) {
body = document.body;

// Creating DOM Objects on the Fly
createObj = function (o, attrs) {
	// Parameters example:
	// o = {
	// 	classes: "list-group-item block-item",
	// 	tag: 'li',
	// 	contents: 'string',
	// 	id: 'id'
	// };

	if (o.tag) {
		var obj = document.createElement(o.tag);

		if (o.classes) {
			obj.className = o.classes;
		} false;
		if (o.contents) {
			// Accepts strings and renders HTML
			obj.innerHTML = o.contents;
		} false;
		if (o.id) {
			obj.id = o.id;
		} false;
	} else {
		// If no tags exist, just fill with content
		var obj = document.createElement('div');

		obj.innerHTML = o;
		obj = obj.firstChild;
	}

	// attrs is an array of objects with key value pairing
	// attr = [
	// {"i":"a"},
	// {key:value}
	// ];
	if (attrs) {
		for (var i = 0, l = attrs.length; i < l; i++) {
			var key = "",
			val = Object.values(attrs[i]);

			for (key in attrs[i]) {
				key = key;
			}

			obj.setAttribute(key, val[0]);
		}
	}

	return obj;
};

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
