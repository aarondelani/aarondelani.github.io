(function delani(i) {
body = document.body;
prevScroll = {Y: scrollY, X: scrollX},
scrollDown = false;

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

hasClass = function (el, c) {
	if (el.classList) {
		return el.classList.contains(c);
	} else {
		return !!el.className.match(new RegExp('(\\s|^)' + c + '(\\s|$)'));
	}
};

addClass = function (el, c) {
	if (el.classList) {
		el.classList.add(c);
	} else if (!hasClass(el, c)) {
		el.c += " " + c;
	}
};

removeClass = function (el, c) {
	if (el.classList) {
		el.classList.remove(c);
	} else if (hasClass(el, c)) {
		var reg = new RegExp('(\\s|^)' + c + '(\\s|$)')
		el.className=el.className.replace(reg, ' ');
	}
};

nav = document.getElementById("port_nav"),
prevScroll = {Y: scrollY, X: scrollX},
scrollDown = false;

if (nav != null) {
	window.onscroll = function () {
		// console.log('something');
		if (scrollY > nav.offsetHeight) {
			addClass(body, 'scrolled');
		} else if (scrollY < nav.offsetHeight) {
			removeClass(body, 'scrolled');
		}

		if (scrollY > prevScroll.Y) {
			scrollDown = true;
		}  if ((scrollY < prevScroll.Y) || !(scrollY > 0)) {
			scrollDown = false;
		}

		if (!scrollDown) {
			nav.style.marginTop = 0;
		} else {
			nav.style.marginTop = "-" + nav.offsetHeight + "px";
		}

		prevScroll = {Y: scrollY, X: scrollX};
	};
}

introduction = document.getElementsByClassName('introduction')[0];
poster = document.getElementsByClassName('poster')[0];

var posterReset = function (e) {
	if (introduction) {
		var introval = introduction.offsetHeight + introduction.offsetTop;
		var posterLess = poster.offsetHeight <= introval;

		if (e != undefined) {
			console.log(e);
		}

		if (posterLess) {
			console.log('eureka', posterLess, poster.offsetHeight, introval);

			poster.style.height = introval + "px";
		} if (poster.offsetHeight < (window.innerHeight/2)) {
			console.log('poster less than window', poster.offsetHeight < window.innerHeight/2);
			poster.style.height = window.innerHeight + "px";
		}
	}
};

posterReset();

window.addEventListener('orientationchange', function (e) {
	posterReset(e);
});
window.addEventListener('resize', function (e) {
	posterReset(e);
});
})();
