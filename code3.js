gdjs.WinCode = {};
gdjs.WinCode.GDGanasteObjects1= [];
gdjs.WinCode.GDGanasteObjects2= [];
gdjs.WinCode.GDRegresarObjects1= [];
gdjs.WinCode.GDRegresarObjects2= [];
gdjs.WinCode.GDVolverJugarObjects1= [];
gdjs.WinCode.GDVolverJugarObjects2= [];

gdjs.WinCode.conditionTrue_0 = {val:false};
gdjs.WinCode.condition0IsTrue_0 = {val:false};
gdjs.WinCode.condition1IsTrue_0 = {val:false};
gdjs.WinCode.condition2IsTrue_0 = {val:false};


gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDRegresarObjects1Objects = Hashtable.newFrom({"Regresar": gdjs.WinCode.GDRegresarObjects1});
gdjs.WinCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Regresar"), gdjs.WinCode.GDRegresarObjects1);

gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDRegresarObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sandbox", false);
}}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDGanasteObjects1.length = 0;
gdjs.WinCode.GDGanasteObjects2.length = 0;
gdjs.WinCode.GDRegresarObjects1.length = 0;
gdjs.WinCode.GDRegresarObjects2.length = 0;
gdjs.WinCode.GDVolverJugarObjects1.length = 0;
gdjs.WinCode.GDVolverJugarObjects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);
return;

}

gdjs['WinCode'] = gdjs.WinCode;
