gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];
gdjs.Game_32OverCode.GDBotonObjects1= [];
gdjs.Game_32OverCode.GDBotonObjects2= [];
gdjs.Game_32OverCode.GDNewTextObjects1= [];
gdjs.Game_32OverCode.GDNewTextObjects2= [];
gdjs.Game_32OverCode.GDNewText2Objects1= [];
gdjs.Game_32OverCode.GDNewText2Objects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_0 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDBotonObjects1Objects = Hashtable.newFrom({"Boton": gdjs.Game_32OverCode.GDBotonObjects1});
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Boton"), gdjs.Game_32OverCode.GDBotonObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDBotonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sandbox", false);
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Boton"), gdjs.Game_32OverCode.GDBotonObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32OverCode.GDBotonObjects1.length !== 0 ? gdjs.Game_32OverCode.GDBotonObjects1[0] : null), true, "", 0);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDBotonObjects1.length = 0;
gdjs.Game_32OverCode.GDBotonObjects2.length = 0;
gdjs.Game_32OverCode.GDNewTextObjects1.length = 0;
gdjs.Game_32OverCode.GDNewTextObjects2.length = 0;
gdjs.Game_32OverCode.GDNewText2Objects1.length = 0;
gdjs.Game_32OverCode.GDNewText2Objects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
