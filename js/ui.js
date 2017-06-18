//----------------menu-----------------

(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink'),
        content  = document.getElementById('main');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll(e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }

    menuLink.onclick = function (e) {
        toggleAll(e);
    };

    content.onclick = function(e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };

}(this, this.document));

//
// --------------Copy button  ---------------
//

function copyTextToClipboard(text) {

    var textArea = document.createElement("textarea");
	    textArea.style.position = 'fixed';
	    textArea.style.top = 0;
	    textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
        textArea.style.width = '2em';
        textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
        textArea.style.padding = 0;

  // Clean up any borders.
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
        textArea.style.background = 'transparent';


        textArea.value = text;

        document.body.appendChild(textArea);

        textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
        } catch (err) {
        console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
}


var copyEmail = document.querySelector('.fa-files-o');

    copyEmail.addEventListener('click', function(event) {
        copyTextToClipboard('pro100gt@gmail.com');
});


// This is the "Offline copy of pages" service worker
// Add this below content to your HTML page, or add the js file to your page at the very top to register sercie worker
if (navigator.serviceWorker.controller) {
  //console.log('active service worker found, no need to register')
} else {
  //Register the ServiceWorker
  navigator.serviceWorker.register('./sw.js', {
    scope: './'
  }).then(function(reg) {
    //console.log('Service worker has been registered for scope:'+ reg.scope);
  });
}

