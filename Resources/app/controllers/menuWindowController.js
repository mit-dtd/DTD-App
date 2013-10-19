/**
 * @author Gerardo Camarena Gomez
 */
dtd.ctr.menuWindow={};
dtd.ctr.menuWindow.setupmenuWindow=function(){
	dtd.ui.menuWindow.createmenuWindow();
	

	var menu=SERVER+"?q=menu&op=list";
    
    var http = Titanium.Network.createHTTPClient();
    http.setTimeout(2e4);
    http.onerror = function() {
        alert("Error fetching menu.");
    };
    http.onload = function() {
        try {
            var menuObject = JSON.parse(this.responseText);
        } catch (e) {
        	return alert("Error fetching menu.");
        }
        if (menuObject.error) {
        	return alert("Error fetching menu.");
        }
        Titanium.API.info(JSON.stringify(menuObject));
        var day = '';
        for (var index in menuObject) {
        	var menuEntry = menuObject[index];
        	if (menuEntry.day != day) {
        		Titanium.API.info("SETTING DAY");
        		day = menuEntry.day;
        		dtd.ui.menuWindow.addRow(menuEntry.day, true);
        	}
        	dtd.ui.menuWindow.addRow(menuEntry.meal + ": " + menuEntry.description, false);
        }
        // Do stuff here to display the menu.
    };
    http.open("GET", menu);
    http.send();
    Titanium.API.info("GET request made");
    
    /*dtd.ui.menuWindow.menuWindowBackButton.addEventListener("click", function() {
		dtd.ctr.homeWindow.setupHomeWindow();
		dtd.ui.homeWindow.win.close();
    });
    */
    dtd.ui.menuWindow.win.addEventListener('android:back', function(){
    	dtd.ctr.homeWindow.setupHomeWindow();
		//dtd.ui.menuWindow.win.close();
	});
    dtd.ui.menuWindow.win.open();

};

