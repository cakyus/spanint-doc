
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
		if (	section.childNodes[i].tagName == 'H1'
			||	section.childNodes[i].tagName == 'H2'
			) {
		
			navLinkIndex++;
			var navListItemClass = 'h1';
			switch (section.childNodes[i].tagName) {
				case 'H1': navListItemClass = 'h1'; break;
				case 'H2': navListItemClass = 'h2'; break;
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
