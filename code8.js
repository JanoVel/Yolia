gdjs.CreditosCode = {};
gdjs.CreditosCode.GDNewSpriteObjects1= [];
gdjs.CreditosCode.GDNewSpriteObjects2= [];
gdjs.CreditosCode.GDNewSpriteObjects3= [];
gdjs.CreditosCode.GDNewSpriteObjects4= [];
gdjs.CreditosCode.GDNewSpriteObjects5= [];
gdjs.CreditosCode.GDNewSpriteObjects6= [];
gdjs.CreditosCode.GDNewSpriteObjects7= [];
gdjs.CreditosCode.GDNewSpriteObjects8= [];
gdjs.CreditosCode.GDNewSpriteObjects9= [];
gdjs.CreditosCode.GDNewSpriteObjects10= [];
gdjs.CreditosCode.GDNewSpriteObjects11= [];
gdjs.CreditosCode.GDJOSUEObjects1= [];
gdjs.CreditosCode.GDJOSUEObjects2= [];
gdjs.CreditosCode.GDJOSUEObjects3= [];
gdjs.CreditosCode.GDJOSUEObjects4= [];
gdjs.CreditosCode.GDJOSUEObjects5= [];
gdjs.CreditosCode.GDJOSUEObjects6= [];
gdjs.CreditosCode.GDJOSUEObjects7= [];
gdjs.CreditosCode.GDJOSUEObjects8= [];
gdjs.CreditosCode.GDJOSUEObjects9= [];
gdjs.CreditosCode.GDJOSUEObjects10= [];
gdjs.CreditosCode.GDJOSUEObjects11= [];
gdjs.CreditosCode.GDNADIAObjects1= [];
gdjs.CreditosCode.GDNADIAObjects2= [];
gdjs.CreditosCode.GDNADIAObjects3= [];
gdjs.CreditosCode.GDNADIAObjects4= [];
gdjs.CreditosCode.GDNADIAObjects5= [];
gdjs.CreditosCode.GDNADIAObjects6= [];
gdjs.CreditosCode.GDNADIAObjects7= [];
gdjs.CreditosCode.GDNADIAObjects8= [];
gdjs.CreditosCode.GDNADIAObjects9= [];
gdjs.CreditosCode.GDNADIAObjects10= [];
gdjs.CreditosCode.GDNADIAObjects11= [];
gdjs.CreditosCode.GDOLIVERObjects1= [];
gdjs.CreditosCode.GDOLIVERObjects2= [];
gdjs.CreditosCode.GDOLIVERObjects3= [];
gdjs.CreditosCode.GDOLIVERObjects4= [];
gdjs.CreditosCode.GDOLIVERObjects5= [];
gdjs.CreditosCode.GDOLIVERObjects6= [];
gdjs.CreditosCode.GDOLIVERObjects7= [];
gdjs.CreditosCode.GDOLIVERObjects8= [];
gdjs.CreditosCode.GDOLIVERObjects9= [];
gdjs.CreditosCode.GDOLIVERObjects10= [];
gdjs.CreditosCode.GDOLIVERObjects11= [];
gdjs.CreditosCode.GDFERObjects1= [];
gdjs.CreditosCode.GDFERObjects2= [];
gdjs.CreditosCode.GDFERObjects3= [];
gdjs.CreditosCode.GDFERObjects4= [];
gdjs.CreditosCode.GDFERObjects5= [];
gdjs.CreditosCode.GDFERObjects6= [];
gdjs.CreditosCode.GDFERObjects7= [];
gdjs.CreditosCode.GDFERObjects8= [];
gdjs.CreditosCode.GDFERObjects9= [];
gdjs.CreditosCode.GDFERObjects10= [];
gdjs.CreditosCode.GDFERObjects11= [];
gdjs.CreditosCode.GDMELODYObjects1= [];
gdjs.CreditosCode.GDMELODYObjects2= [];
gdjs.CreditosCode.GDMELODYObjects3= [];
gdjs.CreditosCode.GDMELODYObjects4= [];
gdjs.CreditosCode.GDMELODYObjects5= [];
gdjs.CreditosCode.GDMELODYObjects6= [];
gdjs.CreditosCode.GDMELODYObjects7= [];
gdjs.CreditosCode.GDMELODYObjects8= [];
gdjs.CreditosCode.GDMELODYObjects9= [];
gdjs.CreditosCode.GDMELODYObjects10= [];
gdjs.CreditosCode.GDMELODYObjects11= [];

gdjs.CreditosCode.conditionTrue_0 = {val:false};
gdjs.CreditosCode.condition0IsTrue_0 = {val:false};
gdjs.CreditosCode.condition1IsTrue_0 = {val:false};


gdjs.CreditosCode.asyncCallback11228508 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", false);
}}
gdjs.CreditosCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.CreditosCode.asyncCallback11228508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditosCode.asyncCallback11228316 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("MELODY"), gdjs.CreditosCode.GDMELODYObjects10);

{for(var i = 0, len = gdjs.CreditosCode.GDMELODYObjects10.length ;i < len;++i) {
    gdjs.CreditosCode.GDMELODYObjects10[i].hide();
}
}
{ //Subevents
gdjs.CreditosCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.CreditosCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.CreditosCode.GDMELODYObjects9) asyncObjectsList.addObject("MELODY", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.CreditosCode.asyncCallback11228316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditosCode.asyncCallback11228100 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("MELODY"), gdjs.CreditosCode.GDMELODYObjects9);

{for(var i = 0, len = gdjs.CreditosCode.GDMELODYObjects9.length ;i < len;++i) {
    gdjs.CreditosCode.GDMELODYObjects9[i].hide(false);
}
}
{ //Subevents
gdjs.CreditosCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.CreditosCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save MELODY as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CreditosCode.asyncCallback11228100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditosCode.asyncCallback11227932 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("FER"), gdjs.CreditosCode.GDFERObjects8);

{for(var i = 0, len = gdjs.CreditosCode.GDFERObjects8.length ;i < len;++i) {
    gdjs.CreditosCode.GDFERObjects8[i].hide();
}
}
{ //Subevents
gdjs.CreditosCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.CreditosCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.CreditosCode.GDFERObjects7) asyncObjectsList.addObject("FER", obj);
/* Don't save MELODY as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.CreditosCode.asyncCallback11227932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditosCode.asyncCallback11227716 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("FER"), gdjs.CreditosCode.GDFERObjects7);

{for(var i = 0, len = gdjs.CreditosCode.GDFERObjects7.length ;i < len;++i) {
    gdjs.CreditosCode.GDFERObjects7[i].hide(false);
}
}
{ //Subevents
gdjs.CreditosCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.CreditosCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save FER as it will be provided by the parent asyncObjectsList. */
/* Don't save MELODY as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CreditosCode.asyncCallback11227716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditosCode.asyncCallback11227524 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("OLIVER"), gdjs.CreditosCode.GDOLIVERObjects6);

{for(var i = 0, len = gdjs.CreditosCode.GDOLIVERObjects6.length ;i < len;++i) {
    gdjs.CreditosCode.GDOLIVERObjects6[i].hide();
}
}
{ //Subevents
gdjs.CreditosCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.CreditosCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save FER as it will be provided by the parent asyncObjectsList. */
/* Don't save MELODY as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.CreditosCode.GDOLIVERObjects5) asyncObjectsList.addObject("OLIVER", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.CreditosCode.asyncCallback11227524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditosCode.asyncCallback11227308 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("OLIVER"), gdjs.CreditosCode.GDOLIVERObjects5);

{for(var i = 0, len = gdjs.CreditosCode.GDOLIVERObjects5.length ;i < len;++i) {
    gdjs.CreditosCode.GDOLIVERObjects5[i].hide(false);
}
}
{ //Subevents
gdjs.CreditosCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.CreditosCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save FER as it will be provided by the parent asyncObjectsList. */
/* Don't save MELODY as it will be provided by the parent asyncObjectsList. */
/* Don't save OLIVER as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CreditosCode.asyncCallback11227308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditosCode.asyncCallback11227052 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NADIA"), gdjs.CreditosCode.GDNADIAObjects4);

{for(var i = 0, len = gdjs.CreditosCode.GDNADIAObjects4.length ;i < len;++i) {
    gdjs.CreditosCode.GDNADIAObjects4[i].hide();
}
}
{ //Subevents
gdjs.CreditosCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.CreditosCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save FER as it will be provided by the parent asyncObjectsList. */
/* Don't save MELODY as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.CreditosCode.GDNADIAObjects3) asyncObjectsList.addObject("NADIA", obj);
/* Don't save OLIVER as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.CreditosCode.asyncCallback11227052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditosCode.asyncCallback11226788 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NADIA"), gdjs.CreditosCode.GDNADIAObjects3);

{for(var i = 0, len = gdjs.CreditosCode.GDNADIAObjects3.length ;i < len;++i) {
    gdjs.CreditosCode.GDNADIAObjects3[i].hide(false);
}
}
{ //Subevents
gdjs.CreditosCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.CreditosCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save FER as it will be provided by the parent asyncObjectsList. */
/* Don't save MELODY as it will be provided by the parent asyncObjectsList. */
/* Don't save NADIA as it will be provided by the parent asyncObjectsList. */
/* Don't save OLIVER as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CreditosCode.asyncCallback11226788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditosCode.asyncCallback11226524 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("JOSUE"), gdjs.CreditosCode.GDJOSUEObjects2);
{for(var i = 0, len = gdjs.CreditosCode.GDJOSUEObjects2.length ;i < len;++i) {
    gdjs.CreditosCode.GDJOSUEObjects2[i].hide();
}
}
{ //Subevents
gdjs.CreditosCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.CreditosCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.CreditosCode.GDFERObjects1) asyncObjectsList.addObject("FER", obj);
for (const obj of gdjs.CreditosCode.GDMELODYObjects1) asyncObjectsList.addObject("MELODY", obj);
for (const obj of gdjs.CreditosCode.GDNADIAObjects1) asyncObjectsList.addObject("NADIA", obj);
for (const obj of gdjs.CreditosCode.GDOLIVERObjects1) asyncObjectsList.addObject("OLIVER", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.CreditosCode.asyncCallback11226524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditosCode.eventsList10 = function(runtimeScene) {

{


gdjs.CreditosCode.condition0IsTrue_0.val = false;
{
gdjs.CreditosCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CreditosCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FER"), gdjs.CreditosCode.GDFERObjects1);
gdjs.copyArray(runtimeScene.getObjects("MELODY"), gdjs.CreditosCode.GDMELODYObjects1);
gdjs.copyArray(runtimeScene.getObjects("NADIA"), gdjs.CreditosCode.GDNADIAObjects1);
gdjs.copyArray(runtimeScene.getObjects("OLIVER"), gdjs.CreditosCode.GDOLIVERObjects1);
{for(var i = 0, len = gdjs.CreditosCode.GDNADIAObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDNADIAObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CreditosCode.GDMELODYObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDMELODYObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CreditosCode.GDFERObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDFERObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CreditosCode.GDOLIVERObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDOLIVERObjects1[i].hide();
}
}
{ //Subevents
gdjs.CreditosCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.CreditosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditosCode.GDNewSpriteObjects1.length = 0;
gdjs.CreditosCode.GDNewSpriteObjects2.length = 0;
gdjs.CreditosCode.GDNewSpriteObjects3.length = 0;
gdjs.CreditosCode.GDNewSpriteObjects4.length = 0;
gdjs.CreditosCode.GDNewSpriteObjects5.length = 0;
gdjs.CreditosCode.GDNewSpriteObjects6.length = 0;
gdjs.CreditosCode.GDNewSpriteObjects7.length = 0;
gdjs.CreditosCode.GDNewSpriteObjects8.length = 0;
gdjs.CreditosCode.GDNewSpriteObjects9.length = 0;
gdjs.CreditosCode.GDNewSpriteObjects10.length = 0;
gdjs.CreditosCode.GDNewSpriteObjects11.length = 0;
gdjs.CreditosCode.GDJOSUEObjects1.length = 0;
gdjs.CreditosCode.GDJOSUEObjects2.length = 0;
gdjs.CreditosCode.GDJOSUEObjects3.length = 0;
gdjs.CreditosCode.GDJOSUEObjects4.length = 0;
gdjs.CreditosCode.GDJOSUEObjects5.length = 0;
gdjs.CreditosCode.GDJOSUEObjects6.length = 0;
gdjs.CreditosCode.GDJOSUEObjects7.length = 0;
gdjs.CreditosCode.GDJOSUEObjects8.length = 0;
gdjs.CreditosCode.GDJOSUEObjects9.length = 0;
gdjs.CreditosCode.GDJOSUEObjects10.length = 0;
gdjs.CreditosCode.GDJOSUEObjects11.length = 0;
gdjs.CreditosCode.GDNADIAObjects1.length = 0;
gdjs.CreditosCode.GDNADIAObjects2.length = 0;
gdjs.CreditosCode.GDNADIAObjects3.length = 0;
gdjs.CreditosCode.GDNADIAObjects4.length = 0;
gdjs.CreditosCode.GDNADIAObjects5.length = 0;
gdjs.CreditosCode.GDNADIAObjects6.length = 0;
gdjs.CreditosCode.GDNADIAObjects7.length = 0;
gdjs.CreditosCode.GDNADIAObjects8.length = 0;
gdjs.CreditosCode.GDNADIAObjects9.length = 0;
gdjs.CreditosCode.GDNADIAObjects10.length = 0;
gdjs.CreditosCode.GDNADIAObjects11.length = 0;
gdjs.CreditosCode.GDOLIVERObjects1.length = 0;
gdjs.CreditosCode.GDOLIVERObjects2.length = 0;
gdjs.CreditosCode.GDOLIVERObjects3.length = 0;
gdjs.CreditosCode.GDOLIVERObjects4.length = 0;
gdjs.CreditosCode.GDOLIVERObjects5.length = 0;
gdjs.CreditosCode.GDOLIVERObjects6.length = 0;
gdjs.CreditosCode.GDOLIVERObjects7.length = 0;
gdjs.CreditosCode.GDOLIVERObjects8.length = 0;
gdjs.CreditosCode.GDOLIVERObjects9.length = 0;
gdjs.CreditosCode.GDOLIVERObjects10.length = 0;
gdjs.CreditosCode.GDOLIVERObjects11.length = 0;
gdjs.CreditosCode.GDFERObjects1.length = 0;
gdjs.CreditosCode.GDFERObjects2.length = 0;
gdjs.CreditosCode.GDFERObjects3.length = 0;
gdjs.CreditosCode.GDFERObjects4.length = 0;
gdjs.CreditosCode.GDFERObjects5.length = 0;
gdjs.CreditosCode.GDFERObjects6.length = 0;
gdjs.CreditosCode.GDFERObjects7.length = 0;
gdjs.CreditosCode.GDFERObjects8.length = 0;
gdjs.CreditosCode.GDFERObjects9.length = 0;
gdjs.CreditosCode.GDFERObjects10.length = 0;
gdjs.CreditosCode.GDFERObjects11.length = 0;
gdjs.CreditosCode.GDMELODYObjects1.length = 0;
gdjs.CreditosCode.GDMELODYObjects2.length = 0;
gdjs.CreditosCode.GDMELODYObjects3.length = 0;
gdjs.CreditosCode.GDMELODYObjects4.length = 0;
gdjs.CreditosCode.GDMELODYObjects5.length = 0;
gdjs.CreditosCode.GDMELODYObjects6.length = 0;
gdjs.CreditosCode.GDMELODYObjects7.length = 0;
gdjs.CreditosCode.GDMELODYObjects8.length = 0;
gdjs.CreditosCode.GDMELODYObjects9.length = 0;
gdjs.CreditosCode.GDMELODYObjects10.length = 0;
gdjs.CreditosCode.GDMELODYObjects11.length = 0;

gdjs.CreditosCode.eventsList10(runtimeScene);
return;

}

gdjs['CreditosCode'] = gdjs.CreditosCode;
