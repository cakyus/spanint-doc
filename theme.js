
// automatically generate table of content
window.addEventListener('load', function() {

	var nav = document.createElement('nav');
	var navHeader = document.createElement('h1');
	navHeader.innerHTML = 'Daftar Isi';
	nav.appendChild(navHeader);

	// add into section
	var section = document.getElementsByTagName('section').item(0);
	var sectionChildFirst = section.childNodes.item(0);
	section.insertBefore(nav, sectionChildFirst);
	
	// generate table of content
	var navList = document.createElement('ol');
	nav.appendChild(navList);
	var navLinkIndex = 0;
	for ( var i in section.childNodes ) {
		if (	section.childNodes[i].tagName == 'H2'
			||	section.childNodes[i].tagName == 'H3'
			) {
		
			navLinkIndex++;
			var navListItemClass = 'h2';
			switch (section.childNodes[i].tagName) {
				case 'H2': navListItemClass = 'h2'; break;
				case 'H3': navListItemClass = 'h3'; break;
			}
		
			var navListItem = document.createElement('li');
			navListItem.setAttribute('class', navListItemClass);
			var navLink = document.createElement('a');
			navLink.setAttribute('href','#navLink'+navLinkIndex);
			navLink.innerHTML = section.childNodes[i].textContent;
			navListItem.appendChild(navLink);
			navList.appendChild(navListItem);
			
			var navSectionLink = document.createElement('a');
			navSectionLink.setAttribute('name','navLink'+navLinkIndex);
			
			if (section.childNodes[i].childNodes.length == 0) {
				section.childNodes[i].appendChild(navSectionLink);
			} else {
				section.childNodes[i].insertBefore(navSectionLink
					, section.childNodes[i].childNodes[0]
					);
			}
		}
	}
});

// set document title to h1
window.addEventListener('load', function() {
	var section = document.getElementsByTagName('section').item(0);
	for ( var i in section.childNodes ) {
		if (section.childNodes[i].tagName == 'H1') {
			document.title = section.childNodes[i].textContent;
			break;
		}
	}
});

// add banner "fork me on github"
window.addEventListener('load', function() {
	var div = document.createElement('section');
	var p = document.createElement('p');
	p.setAttribute('class', 'banner');
	div.setAttribute('class', 'bannerContainer');
	p.innerHTML = 'Fork Me on GitHub';
	div.appendChild(p);
	document.body.appendChild(div);
	console.log('Hi');
});


