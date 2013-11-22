/**
 * @author cwgordon7
 */
dtd.ui.brohoodWindow={};
dtd.ui.brohoodWindow.createbrohoodWindow=function(){
	dtd.ui.brohoodWindow.win=Titanium.UI.createWindow({
		backgroundColor:"white",
		
	});
	dtd.ui.brohoodWindow.brohoodWindowLogoView= Titanium.UI.createView({
		top: dtd.len.longerDim.p1,
		height: dtd.len.longerDim.p100,
		width: dtd.len.shorterDim.p1000,
		backgroundColor:"#D3D3D3",
		backgroundImage: "/Images/bplogo.png"
		
	})
	dtd.ui.brohoodWindow.brohoodWindowLogoView.backgroundImage.width= dtd.len.shorterDim.p700
	dtd.ui.brohoodWindow.brohoodWindowScrollView=Titanium.UI.createScrollView({
		top: dtd.len.longerDim.p100,
		backgroundColor: 'white'
	})
	
	dtd.ui.brohoodWindow.win.add(dtd.ui.brohoodWindow.brohoodWindowLogoView);
	dtd.ui.brohoodWindow.win.add(dtd.ui.brohoodWindow.brohoodWindowScrollView);
};