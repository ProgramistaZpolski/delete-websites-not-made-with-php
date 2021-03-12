"use strict";
let request = new Request(window.location.href);

fetch(request).then(resp => {
	if (!resp.headers.get("X-Powered-By")?.includes("PHP")) {
		document.body.innerHTML = `<h1>This website was deleted because it does not use PHP</h1>`;
	}
});
