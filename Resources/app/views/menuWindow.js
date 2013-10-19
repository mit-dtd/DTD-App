/**
 * @author Gerardo Camarena Gomez
 */
dtd.ui.menuWindow={};
dtd.ui.menuWindow.createmenuWindow=function(){
	dtd.ui.menuWindow.win=Titanium.UI.createWindow({
		title:"Menu",
		backgroundColor:"white",
		navBarHidden: true,
		navBarHidden: false,
        exitOnClose: false,
        fullscreen: true,
        orientationModes: [ Ti.UI.PORTRAIT ]
	});
	dtd.ui.menuWindow.menuWindowScrollView=Titanium.UI.createScrollView({
		top: dtd.len.longerDim.p0,
		backgroundColor:"black"
	});
	/*
	dtd.ui.menuWindow.menuWindowBackButton=Titanium.UI.createButton({
		top: dtd.len.longerDim.p900,
		height: dtd.len.longerDim.p100,
		width: dtd.len.shorterDim.p500,
		title:"Back"
	})
	*/
	dtd.ui.menuWindow.win.add(dtd.ui.menuWindow.menuWindowScrollView);
	//dtd.ui.menuWindow.win.add(dtd.ui.menuWindow.menuWindowBackButton);
	
};

dtd.ui.menuWindow.i = 0;
dtd.ui.menuWindow.addRow = function(txt, header) {
	var row = Titanium.UI.createView({
		backgroundColor: 'white',
		borderColor: '#bbb',
		borderWidth: 1,
		width: '100%',
		height: 50,
		top: 25 + 50 * dtd.ui.menuWindow.i,
		left: 0
	});
	dtd.ui.menuWindow.i++;
	var lbl = Titanium.UI.createLabel({
		color: header ? 'black' : '#555',
		font: header ? {fontSize: 24, fontWeight: 'bold'} : {fontSize: 18},
		left: 10,
		text: txt,
		textAlign: 'left'
	});
	row.add(lbl);
	dtd.ui.menuWindow.menuWindowScrollView.add(row);
};
