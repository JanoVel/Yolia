gdjs.CUANDO_32GANASCode = {};
gdjs.CUANDO_32GANASCode.GDNewSpriteObjects1= [];
gdjs.CUANDO_32GANASCode.GDNewSpriteObjects2= [];
gdjs.CUANDO_32GANASCode.GDNewSpriteObjects3= [];
gdjs.CUANDO_32GANASCode.GDNewSpriteObjects4= [];
gdjs.CUANDO_32GANASCode.GDNewSpriteObjects5= [];
gdjs.CUANDO_32GANASCode.GDJOSUEObjects1= [];
gdjs.CUANDO_32GANASCode.GDJOSUEObjects2= [];
gdjs.CUANDO_32GANASCode.GDJOSUEObjects3= [];
gdjs.CUANDO_32GANASCode.GDJOSUEObjects4= [];
gdjs.CUANDO_32GANASCode.GDJOSUEObjects5= [];
gdjs.CUANDO_32GANASCode.GDNADIAObjects1= [];
gdjs.CUANDO_32GANASCode.GDNADIAObjects2= [];
gdjs.CUANDO_32GANASCode.GDNADIAObjects3= [];
gdjs.CUANDO_32GANASCode.GDNADIAObjects4= [];
gdjs.CUANDO_32GANASCode.GDNADIAObjects5= [];
gdjs.CUANDO_32GANASCode.GDOLIVERObjects1= [];
gdjs.CUANDO_32GANASCode.GDOLIVERObjects2= [];
gdjs.CUANDO_32GANASCode.GDOLIVERObjects3= [];
gdjs.CUANDO_32GANASCode.GDOLIVERObjects4= [];
gdjs.CUANDO_32GANASCode.GDOLIVERObjects5= [];
gdjs.CUANDO_32GANASCode.GDFERObjects1= [];
gdjs.CUANDO_32GANASCode.GDFERObjects2= [];
gdjs.CUANDO_32GANASCode.GDFERObjects3= [];
gdjs.CUANDO_32GANASCode.GDFERObjects4= [];
gdjs.CUANDO_32GANASCode.GDFERObjects5= [];
gdjs.CUANDO_32GANASCode.GDMELODYObjects1= [];
gdjs.CUANDO_32GANASCode.GDMELODYObjects2= [];
gdjs.CUANDO_32GANASCode.GDMELODYObjects3= [];
gdjs.CUANDO_32GANASCode.GDMELODYObjects4= [];
gdjs.CUANDO_32GANASCode.GDMELODYObjects5= [];
gdjs.CUANDO_32GANASCode.GDNewTextObjects1= [];
gdjs.CUANDO_32GANASCode.GDNewTextObjects2= [];
gdjs.CUANDO_32GANASCode.GDNewTextObjects3= [];
gdjs.CUANDO_32GANASCode.GDNewTextObjects4= [];
gdjs.CUANDO_32GANASCode.GDNewTextObjects5= [];

gdjs.CUANDO_32GANASCode.conditionTrue_0 = {val:false};
gdjs.CUANDO_32GANASCode.condition0IsTrue_0 = {val:false};
gdjs.CUANDO_32GANASCode.condition1IsTrue_0 = {val:false};


gdjs.CUANDO_32GANASCode.asyncCallback11220236 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", false);
}}
gdjs.CUANDO_32GANASCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.CUANDO_32GANASCode.asyncCallback11220236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CUANDO_32GANASCode.asyncCallback11219332 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("JOSUE"), gdjs.CUANDO_32GANASCode.GDJOSUEObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("NADIA"), gdjs.CUANDO_32GANASCode.GDNADIAObjects4);

{for(var i = 0, len = gdjs.CUANDO_32GANASCode.GDJOSUEObjects4.length ;i < len;++i) {
    gdjs.CUANDO_32GANASCode.GDJOSUEObjects4[i].hide();
}
}{for(var i = 0, len = gdjs.CUANDO_32GANASCode.GDNADIAObjects4.length ;i < len;++i) {
    gdjs.CUANDO_32GANASCode.GDNADIAObjects4[i].hide();
}
}
{ //Subevents
gdjs.CUANDO_32GANASCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.CUANDO_32GANASCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save JOSUE as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.CUANDO_32GANASCode.GDNADIAObjects3) asyncObjectsList.addObject("NADIA", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.CUANDO_32GANASCode.asyncCallback11219332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CUANDO_32GANASCode.asyncCallback11219668 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NADIA"), gdjs.CUANDO_32GANASCode.GDNADIAObjects3);

{for(var i = 0, len = gdjs.CUANDO_32GANASCode.GDNADIAObjects3.length ;i < len;++i) {
    gdjs.CUANDO_32GANASCode.GDNADIAObjects3[i].hide(false);
}
}
{ //Subevents
gdjs.CUANDO_32GANASCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.CUANDO_32GANASCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.CUANDO_32GANASCode.GDJOSUEObjects2) asyncObjectsList.addObject("JOSUE", obj);
/* Don't save NADIA as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.CUANDO_32GANASCode.asyncCallback11219668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CUANDO_32GANASCode.asyncCallback11219404 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("JOSUE"), gdjs.CUANDO_32GANASCode.GDJOSUEObjects2);

{for(var i = 0, len = gdjs.CUANDO_32GANASCode.GDJOSUEObjects2.length ;i < len;++i) {
    gdjs.CUANDO_32GANASCode.GDJOSUEObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.CUANDO_32GANASCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.CUANDO_32GANASCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.CUANDO_32GANASCode.GDJOSUEObjects1) asyncObjectsList.addObject("JOSUE", obj);
for (const obj of gdjs.CUANDO_32GANASCode.GDNADIAObjects1) asyncObjectsList.addObject("NADIA", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.CUANDO_32GANASCode.asyncCallback11219404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CUANDO_32GANASCode.eventsList4 = function(runtimeScene) {

{


gdjs.CUANDO_32GANASCode.condition0IsTrue_0.val = false;
{
gdjs.CUANDO_32GANASCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CUANDO_32GANASCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FER"), gdjs.CUANDO_32GANASCode.GDFERObjects1);
gdjs.copyArray(runtimeScene.getObjects("JOSUE"), gdjs.CUANDO_32GANASCode.GDJOSUEObjects1);
gdjs.copyArray(runtimeScene.getObjects("MELODY"), gdjs.CUANDO_32GANASCode.GDMELODYObjects1);
gdjs.copyArray(runtimeScene.getObjects("NADIA"), gdjs.CUANDO_32GANASCode.GDNADIAObjects1);
gdjs.copyArray(runtimeScene.getObjects("OLIVER"), gdjs.CUANDO_32GANASCode.GDOLIVERObjects1);
{for(var i = 0, len = gdjs.CUANDO_32GANASCode.GDNADIAObjects1.length ;i < len;++i) {
    gdjs.CUANDO_32GANASCode.GDNADIAObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CUANDO_32GANASCode.GDMELODYObjects1.length ;i < len;++i) {
    gdjs.CUANDO_32GANASCode.GDMELODYObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CUANDO_32GANASCode.GDFERObjects1.length ;i < len;++i) {
    gdjs.CUANDO_32GANASCode.GDFERObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CUANDO_32GANASCode.GDOLIVERObjects1.length ;i < len;++i) {
    gdjs.CUANDO_32GANASCode.GDOLIVERObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CUANDO_32GANASCode.GDJOSUEObjects1.length ;i < len;++i) {
    gdjs.CUANDO_32GANASCode.GDJOSUEObjects1[i].hide();
}
}
{ //Subevents
gdjs.CUANDO_32GANASCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.CUANDO_32GANASCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CUANDO_32GANASCode.GDNewSpriteObjects1.length = 0;
gdjs.CUANDO_32GANASCode.GDNewSpriteObjects2.length = 0;
gdjs.CUANDO_32GANASCode.GDNewSpriteObjects3.length = 0;
gdjs.CUANDO_32GANASCode.GDNewSpriteObjects4.length = 0;
gdjs.CUANDO_32GANASCode.GDNewSpriteObjects5.length = 0;
gdjs.CUANDO_32GANASCode.GDJOSUEObjects1.length = 0;
gdjs.CUANDO_32GANASCode.GDJOSUEObjects2.length = 0;
gdjs.CUANDO_32GANASCode.GDJOSUEObjects3.length = 0;
gdjs.CUANDO_32GANASCode.GDJOSUEObjects4.length = 0;
gdjs.CUANDO_32GANASCode.GDJOSUEObjects5.length = 0;
gdjs.CUANDO_32GANASCode.GDNADIAObjects1.length = 0;
gdjs.CUANDO_32GANASCode.GDNADIAObjects2.length = 0;
gdjs.CUANDO_32GANASCode.GDNADIAObjects3.length = 0;
gdjs.CUANDO_32GANASCode.GDNADIAObjects4.length = 0;
gdjs.CUANDO_32GANASCode.GDNADIAObjects5.length = 0;
gdjs.CUANDO_32GANASCode.GDOLIVERObjects1.length = 0;
gdjs.CUANDO_32GANASCode.GDOLIVERObjects2.length = 0;
gdjs.CUANDO_32GANASCode.GDOLIVERObjects3.length = 0;
gdjs.CUANDO_32GANASCode.GDOLIVERObjects4.length = 0;
gdjs.CUANDO_32GANASCode.GDOLIVERObjects5.length = 0;
gdjs.CUANDO_32GANASCode.GDFERObjects1.length = 0;
gdjs.CUANDO_32GANASCode.GDFERObjects2.length = 0;
gdjs.CUANDO_32GANASCode.GDFERObjects3.length = 0;
gdjs.CUANDO_32GANASCode.GDFERObjects4.length = 0;
gdjs.CUANDO_32GANASCode.GDFERObjects5.length = 0;
gdjs.CUANDO_32GANASCode.GDMELODYObjects1.length = 0;
gdjs.CUANDO_32GANASCode.GDMELODYObjects2.length = 0;
gdjs.CUANDO_32GANASCode.GDMELODYObjects3.length = 0;
gdjs.CUANDO_32GANASCode.GDMELODYObjects4.length = 0;
gdjs.CUANDO_32GANASCode.GDMELODYObjects5.length = 0;
gdjs.CUANDO_32GANASCode.GDNewTextObjects1.length = 0;
gdjs.CUANDO_32GANASCode.GDNewTextObjects2.length = 0;
gdjs.CUANDO_32GANASCode.GDNewTextObjects3.length = 0;
gdjs.CUANDO_32GANASCode.GDNewTextObjects4.length = 0;
gdjs.CUANDO_32GANASCode.GDNewTextObjects5.length = 0;

gdjs.CUANDO_32GANASCode.eventsList4(runtimeScene);
return;

}

gdjs['CUANDO_32GANASCode'] = gdjs.CUANDO_32GANASCode;
