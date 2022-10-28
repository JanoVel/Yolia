gdjs.InicioCode = {};
gdjs.InicioCode.GDNewTextObjects1= [];
gdjs.InicioCode.GDNewTextObjects2= [];
gdjs.InicioCode.GDNombresObjects1= [];
gdjs.InicioCode.GDNombresObjects2= [];
gdjs.InicioCode.GDYoliaObjects1= [];
gdjs.InicioCode.GDYoliaObjects2= [];
gdjs.InicioCode.GDNewSprite2Objects1= [];
gdjs.InicioCode.GDNewSprite2Objects2= [];
gdjs.InicioCode.GDBotonObjects1= [];
gdjs.InicioCode.GDBotonObjects2= [];
gdjs.InicioCode.GDBoton2Objects1= [];
gdjs.InicioCode.GDBoton2Objects2= [];
gdjs.InicioCode.GDNewParticlesEmitterObjects1= [];
gdjs.InicioCode.GDNewParticlesEmitterObjects2= [];

gdjs.InicioCode.conditionTrue_0 = {val:false};
gdjs.InicioCode.condition0IsTrue_0 = {val:false};
gdjs.InicioCode.condition1IsTrue_0 = {val:false};
gdjs.InicioCode.condition2IsTrue_0 = {val:false};
gdjs.InicioCode.conditionTrue_1 = {val:false};
gdjs.InicioCode.condition0IsTrue_1 = {val:false};
gdjs.InicioCode.condition1IsTrue_1 = {val:false};
gdjs.InicioCode.condition2IsTrue_1 = {val:false};


gdjs.InicioCode.mapOfGDgdjs_46InicioCode_46GDBotonObjects1Objects = Hashtable.newFrom({"Boton": gdjs.InicioCode.GDBotonObjects1});
gdjs.InicioCode.mapOfGDgdjs_46InicioCode_46GDBoton2Objects1Objects = Hashtable.newFrom({"Boton2": gdjs.InicioCode.GDBoton2Objects1});
gdjs.InicioCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Boton"), gdjs.InicioCode.GDBotonObjects1);

gdjs.InicioCode.condition0IsTrue_0.val = false;
gdjs.InicioCode.condition1IsTrue_0.val = false;
{
gdjs.InicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_46InicioCode_46GDBotonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.InicioCode.condition0IsTrue_0.val ) {
{
gdjs.InicioCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.InicioCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sandbox", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Boton.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boton2"), gdjs.InicioCode.GDBoton2Objects1);

gdjs.InicioCode.condition0IsTrue_0.val = false;
gdjs.InicioCode.condition1IsTrue_0.val = false;
{
gdjs.InicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_46InicioCode_46GDBoton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.InicioCode.condition0IsTrue_0.val ) {
{
gdjs.InicioCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.InicioCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Creditos", false);
}}

}


{



}


{


gdjs.InicioCode.condition0IsTrue_0.val = false;
{
gdjs.InicioCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.InicioCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Boton"), gdjs.InicioCode.GDBotonObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.InicioCode.GDBotonObjects1.length !== 0 ? gdjs.InicioCode.GDBotonObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.InicioCode.condition0IsTrue_0.val = false;
{
{gdjs.InicioCode.conditionTrue_1 = gdjs.InicioCode.condition0IsTrue_0;
gdjs.InicioCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10981340);
}
}if (gdjs.InicioCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Inicio.mp3", false, 50, 1);
}}

}


};

gdjs.InicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InicioCode.GDNewTextObjects1.length = 0;
gdjs.InicioCode.GDNewTextObjects2.length = 0;
gdjs.InicioCode.GDNombresObjects1.length = 0;
gdjs.InicioCode.GDNombresObjects2.length = 0;
gdjs.InicioCode.GDYoliaObjects1.length = 0;
gdjs.InicioCode.GDYoliaObjects2.length = 0;
gdjs.InicioCode.GDNewSprite2Objects1.length = 0;
gdjs.InicioCode.GDNewSprite2Objects2.length = 0;
gdjs.InicioCode.GDBotonObjects1.length = 0;
gdjs.InicioCode.GDBotonObjects2.length = 0;
gdjs.InicioCode.GDBoton2Objects1.length = 0;
gdjs.InicioCode.GDBoton2Objects2.length = 0;
gdjs.InicioCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.InicioCode.GDNewParticlesEmitterObjects2.length = 0;

gdjs.InicioCode.eventsList0(runtimeScene);
return;

}

gdjs['InicioCode'] = gdjs.InicioCode;
