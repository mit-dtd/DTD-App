/**
 * @author Gerardo Camarena Gomez
 */
dtd.ui.homeWindow={};
dtd.ui.homeWindow.createhomeWindow= function(){
	dtd.ui.homeWindow.win=Titanium.UI.createWindow({
		title:"DTD App",
		backgroundColor: "white",
        navBarHidden: true,
        exitOnClose: false,
        fullscreen: true,
        orientationModes: [ Ti.UI.PORTRAIT ]
  
		
	
	});
	

	
	dtd.ui.homeWindow.titleView= Titanium.UI.createImageView({
		
		image:"/Images/deltalogo.png",
		top: dtd.len.longerDim.p1,
		width: dtd.len.shorterDim.p1000
		
	});
	dtd.ui.homeWindow.menuButton=Titanium.UI.createButton({
		//title: "Menu",
		backgroundImage:"/Images/delts_menu.png",
		left: dtd.len.shorterDim.p1,
		top:dtd.len.longerDim.p150,
		width: dtd.len.shorterDim.p333,
		height: dtd.len.longerDim.p200,
		backgrounColor:"white",
		borderColor: "black"
	});
	dtd.ui.homeWindow.calendarButton=Titanium.UI.createButton({
		//title: "Calendar",
		backgroundImage:"/Images/delts_calendar.png",
		left: dtd.len.shorterDim.p333,
		top:dtd.len.longerDim.p150,
		width: dtd.len.shorterDim.p333,
		height: dtd.len.longerDim.p200


	});
	
	dtd.ui.homeWindow.brohoodButton=Titanium.UI.createButton({
		//title: "Brohood points",
		backgroundImage:"/Images/delts_bropoints.png",
		left: dtd.len.shorterDim.p666,
		top:dtd.len.longerDim.p150,
		width: dtd.len.shorterDim.p333,
		height: dtd.len.longerDim.p200
	});

	dtd.ui.homeWindow.win.add(dtd.ui.homeWindow.titleView);
	dtd.ui.homeWindow.win.add(dtd.ui.homeWindow.menuButton);
	dtd.ui.homeWindow.win.add(dtd.ui.homeWindow.calendarButton);
	dtd.ui.homeWindow.win.add(dtd.ui.homeWindow.brohoodButton);
	
};
