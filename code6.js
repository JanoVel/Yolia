gdjs.Nivel_323Code = {};
gdjs.Nivel_323Code.forEachIndex2 = 0;

gdjs.Nivel_323Code.forEachIndex3 = 0;

gdjs.Nivel_323Code.forEachIndex4 = 0;

gdjs.Nivel_323Code.forEachObjects2 = [];

gdjs.Nivel_323Code.forEachObjects3 = [];

gdjs.Nivel_323Code.forEachObjects4 = [];

gdjs.Nivel_323Code.forEachTemporary2 = null;

gdjs.Nivel_323Code.forEachTemporary3 = null;

gdjs.Nivel_323Code.forEachTemporary4 = null;

gdjs.Nivel_323Code.forEachTotalCount2 = 0;

gdjs.Nivel_323Code.forEachTotalCount3 = 0;

gdjs.Nivel_323Code.forEachTotalCount4 = 0;

gdjs.Nivel_323Code.GDCosa1Objects1= [];
gdjs.Nivel_323Code.GDCosa1Objects2= [];
gdjs.Nivel_323Code.GDCosa1Objects3= [];
gdjs.Nivel_323Code.GDCosa1Objects4= [];
gdjs.Nivel_323Code.GDCosa2Objects1= [];
gdjs.Nivel_323Code.GDCosa2Objects2= [];
gdjs.Nivel_323Code.GDCosa2Objects3= [];
gdjs.Nivel_323Code.GDCosa2Objects4= [];
gdjs.Nivel_323Code.GDBaseTileObjects1= [];
gdjs.Nivel_323Code.GDBaseTileObjects2= [];
gdjs.Nivel_323Code.GDBaseTileObjects3= [];
gdjs.Nivel_323Code.GDBaseTileObjects4= [];
gdjs.Nivel_323Code.GDBarreraCosa1Objects1= [];
gdjs.Nivel_323Code.GDBarreraCosa1Objects2= [];
gdjs.Nivel_323Code.GDBarreraCosa1Objects3= [];
gdjs.Nivel_323Code.GDBarreraCosa1Objects4= [];
gdjs.Nivel_323Code.GDBarreraCosa2Objects1= [];
gdjs.Nivel_323Code.GDBarreraCosa2Objects2= [];
gdjs.Nivel_323Code.GDBarreraCosa2Objects3= [];
gdjs.Nivel_323Code.GDBarreraCosa2Objects4= [];
gdjs.Nivel_323Code.GDZonaMuerteObjects1= [];
gdjs.Nivel_323Code.GDZonaMuerteObjects2= [];
gdjs.Nivel_323Code.GDZonaMuerteObjects3= [];
gdjs.Nivel_323Code.GDZonaMuerteObjects4= [];
gdjs.Nivel_323Code.GDIndicadorCosaObjects1= [];
gdjs.Nivel_323Code.GDIndicadorCosaObjects2= [];
gdjs.Nivel_323Code.GDIndicadorCosaObjects3= [];
gdjs.Nivel_323Code.GDIndicadorCosaObjects4= [];
gdjs.Nivel_323Code.GDMetaObjects1= [];
gdjs.Nivel_323Code.GDMetaObjects2= [];
gdjs.Nivel_323Code.GDMetaObjects3= [];
gdjs.Nivel_323Code.GDMetaObjects4= [];
gdjs.Nivel_323Code.GDSwitchVerdeObjects1= [];
gdjs.Nivel_323Code.GDSwitchVerdeObjects2= [];
gdjs.Nivel_323Code.GDSwitchVerdeObjects3= [];
gdjs.Nivel_323Code.GDSwitchVerdeObjects4= [];
gdjs.Nivel_323Code.GDPuertaVerdeObjects1= [];
gdjs.Nivel_323Code.GDPuertaVerdeObjects2= [];
gdjs.Nivel_323Code.GDPuertaVerdeObjects3= [];
gdjs.Nivel_323Code.GDPuertaVerdeObjects4= [];
gdjs.Nivel_323Code.GDNewTileMap2Objects1= [];
gdjs.Nivel_323Code.GDNewTileMap2Objects2= [];
gdjs.Nivel_323Code.GDNewTileMap2Objects3= [];
gdjs.Nivel_323Code.GDNewTileMap2Objects4= [];
gdjs.Nivel_323Code.GDEnemyObjects1= [];
gdjs.Nivel_323Code.GDEnemyObjects2= [];
gdjs.Nivel_323Code.GDEnemyObjects3= [];
gdjs.Nivel_323Code.GDEnemyObjects4= [];
gdjs.Nivel_323Code.GDBJObjects1= [];
gdjs.Nivel_323Code.GDBJObjects2= [];
gdjs.Nivel_323Code.GDBJObjects3= [];
gdjs.Nivel_323Code.GDBJObjects4= [];
gdjs.Nivel_323Code.GDGJObjects1= [];
gdjs.Nivel_323Code.GDGJObjects2= [];
gdjs.Nivel_323Code.GDGJObjects3= [];
gdjs.Nivel_323Code.GDGJObjects4= [];

gdjs.Nivel_323Code.conditionTrue_0 = {val:false};
gdjs.Nivel_323Code.condition0IsTrue_0 = {val:false};
gdjs.Nivel_323Code.condition1IsTrue_0 = {val:false};
gdjs.Nivel_323Code.condition2IsTrue_0 = {val:false};
gdjs.Nivel_323Code.conditionTrue_1 = {val:false};
gdjs.Nivel_323Code.condition0IsTrue_1 = {val:false};
gdjs.Nivel_323Code.condition1IsTrue_1 = {val:false};
gdjs.Nivel_323Code.condition2IsTrue_1 = {val:false};


gdjs.Nivel_323Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Nivel_323Code.GDCosa1Objects3);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDCosa1Objects3.length;i<l;++i) {
    if ( !(gdjs.Nivel_323Code.GDCosa1Objects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDCosa1Objects3[k] = gdjs.Nivel_323Code.GDCosa1Objects3[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDCosa1Objects3.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDCosa1Objects3 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa1Objects3.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa1Objects3[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Nivel_323Code.GDCosa1Objects3);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDCosa1Objects3.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDCosa1Objects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDCosa1Objects3[k] = gdjs.Nivel_323Code.GDCosa1Objects3[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDCosa1Objects3.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDCosa1Objects3 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa1Objects3.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa1Objects3[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Nivel_323Code.GDCosa1Objects3);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDCosa1Objects3.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDCosa1Objects3[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDCosa1Objects3[k] = gdjs.Nivel_323Code.GDCosa1Objects3[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDCosa1Objects3.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDCosa1Objects3 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa1Objects3.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa1Objects3[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Nivel_323Code.GDCosa1Objects2);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDCosa1Objects2.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDCosa1Objects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDCosa1Objects2[k] = gdjs.Nivel_323Code.GDCosa1Objects2[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDCosa1Objects2.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDCosa1Objects2 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa1Objects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa1Objects2[i].setAnimation(3);
}
}}

}


};gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa1Objects1Objects = Hashtable.newFrom({"Cosa1": gdjs.Nivel_323Code.GDCosa1Objects1});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDBarreraCosa1Objects1Objects = Hashtable.newFrom({"BarreraCosa1": gdjs.Nivel_323Code.GDBarreraCosa1Objects1});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDBarreraCosa1Objects1Objects = Hashtable.newFrom({"BarreraCosa1": gdjs.Nivel_323Code.GDBarreraCosa1Objects1});
gdjs.Nivel_323Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BarreraCosa1"), gdjs.Nivel_323Code.GDBarreraCosa1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Nivel_323Code.GDCosa1Objects1);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa1Objects1Objects, gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDBarreraCosa1Objects1Objects, false, runtimeScene, false);
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDBarreraCosa1Objects1 */
/* Reuse gdjs.Nivel_323Code.GDCosa1Objects1 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa1Objects1.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa1Objects1[i].separateFromObjectsList(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDBarreraCosa1Objects1Objects, false);
}
}}

}


};gdjs.Nivel_323Code.eventsList2 = function(runtimeScene) {

{


gdjs.Nivel_323Code.eventsList0(runtimeScene);
}


{


gdjs.Nivel_323Code.eventsList1(runtimeScene);
}


};gdjs.Nivel_323Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Nivel_323Code.GDCosa2Objects3);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDCosa2Objects3.length;i<l;++i) {
    if ( !(gdjs.Nivel_323Code.GDCosa2Objects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDCosa2Objects3[k] = gdjs.Nivel_323Code.GDCosa2Objects3[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDCosa2Objects3.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDCosa2Objects3 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa2Objects3.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa2Objects3[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Nivel_323Code.GDCosa2Objects3);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDCosa2Objects3.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDCosa2Objects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDCosa2Objects3[k] = gdjs.Nivel_323Code.GDCosa2Objects3[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDCosa2Objects3.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDCosa2Objects3 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa2Objects3.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa2Objects3[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Nivel_323Code.GDCosa2Objects3);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDCosa2Objects3.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDCosa2Objects3[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDCosa2Objects3[k] = gdjs.Nivel_323Code.GDCosa2Objects3[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDCosa2Objects3.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDCosa2Objects3 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa2Objects3.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa2Objects3[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Nivel_323Code.GDCosa2Objects2);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDCosa2Objects2.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDCosa2Objects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDCosa2Objects2[k] = gdjs.Nivel_323Code.GDCosa2Objects2[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDCosa2Objects2.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDCosa2Objects2 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa2Objects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa2Objects2[i].setAnimation(3);
}
}}

}


};gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa2Objects1Objects = Hashtable.newFrom({"Cosa2": gdjs.Nivel_323Code.GDCosa2Objects1});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDBarreraCosa2Objects1Objects = Hashtable.newFrom({"BarreraCosa2": gdjs.Nivel_323Code.GDBarreraCosa2Objects1});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDBarreraCosa2Objects1Objects = Hashtable.newFrom({"BarreraCosa2": gdjs.Nivel_323Code.GDBarreraCosa2Objects1});
gdjs.Nivel_323Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BarreraCosa2"), gdjs.Nivel_323Code.GDBarreraCosa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Nivel_323Code.GDCosa2Objects1);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa2Objects1Objects, gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDBarreraCosa2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDBarreraCosa2Objects1 */
/* Reuse gdjs.Nivel_323Code.GDCosa2Objects1 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa2Objects1.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa2Objects1[i].separateFromObjectsList(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDBarreraCosa2Objects1Objects, false);
}
}}

}


};gdjs.Nivel_323Code.eventsList5 = function(runtimeScene) {

{


gdjs.Nivel_323Code.eventsList3(runtimeScene);
}


{


gdjs.Nivel_323Code.eventsList4(runtimeScene);
}


};gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDZonaMuerteObjects2Objects = Hashtable.newFrom({"ZonaMuerte": gdjs.Nivel_323Code.GDZonaMuerteObjects2});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa1Objects2Objects = Hashtable.newFrom({"Cosa1": gdjs.Nivel_323Code.GDCosa1Objects2});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDZonaMuerteObjects1Objects = Hashtable.newFrom({"ZonaMuerte": gdjs.Nivel_323Code.GDZonaMuerteObjects1});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa2Objects1Objects = Hashtable.newFrom({"Cosa2": gdjs.Nivel_323Code.GDCosa2Objects1});
gdjs.Nivel_323Code.eventsList6 = function(runtimeScene) {

{


gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ZonaMuerte"), gdjs.Nivel_323Code.GDZonaMuerteObjects2);
{for(var i = 0, len = gdjs.Nivel_323Code.GDZonaMuerteObjects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDZonaMuerteObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Nivel_323Code.GDCosa1Objects2);
gdjs.copyArray(runtimeScene.getObjects("ZonaMuerte"), gdjs.Nivel_323Code.GDZonaMuerteObjects2);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDZonaMuerteObjects2Objects, gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa1Objects2Objects, false, runtimeScene, false);
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Nivel_323Code.GDCosa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ZonaMuerte"), gdjs.Nivel_323Code.GDZonaMuerteObjects1);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDZonaMuerteObjects1Objects, gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


};gdjs.Nivel_323Code.eventsList7 = function(runtimeScene) {

{


gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().get("controllingThing1"));
}}

}


{


gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("controllingThing1"), false);
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Nivel_323Code.GDCosa1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Nivel_323Code.GDCosa2Objects2);
gdjs.copyArray(runtimeScene.getObjects("IndicadorCosa"), gdjs.Nivel_323Code.GDIndicadorCosaObjects2);
{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa1Objects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa1Objects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa2Objects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa2Objects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(false);
}
}{for(var i = 0, len = gdjs.Nivel_323Code.GDIndicadorCosaObjects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDIndicadorCosaObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.Nivel_323Code.GDCosa2Objects2.length === 0 ) ? 0 :gdjs.Nivel_323Code.GDCosa2Objects2[0].getPointX("")), 0.05), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.Nivel_323Code.GDCosa2Objects2.length === 0 ) ? 0 :gdjs.Nivel_323Code.GDCosa2Objects2[0].getPointY("")), 0.05), "", 0);
}}

}


{


gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("controllingThing1"), true);
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Nivel_323Code.GDCosa1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Nivel_323Code.GDCosa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("IndicadorCosa"), gdjs.Nivel_323Code.GDIndicadorCosaObjects1);
{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa1Objects1.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa1Objects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(false);
}
}{for(var i = 0, len = gdjs.Nivel_323Code.GDCosa2Objects1.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDCosa2Objects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Nivel_323Code.GDIndicadorCosaObjects1.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDIndicadorCosaObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.Nivel_323Code.GDCosa1Objects1.length === 0 ) ? 0 :gdjs.Nivel_323Code.GDCosa1Objects1[0].getPointX("")), 0.05), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.Nivel_323Code.GDCosa1Objects1.length === 0 ) ? 0 :gdjs.Nivel_323Code.GDCosa1Objects1[0].getPointY("")), 0.05), "", 0);
}}

}


};gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDMetaObjects2Objects = Hashtable.newFrom({"Meta": gdjs.Nivel_323Code.GDMetaObjects2});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa1Objects2Objects = Hashtable.newFrom({"Cosa1": gdjs.Nivel_323Code.GDCosa1Objects2});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDMetaObjects1Objects = Hashtable.newFrom({"Meta": gdjs.Nivel_323Code.GDMetaObjects1});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa2Objects1Objects = Hashtable.newFrom({"Cosa2": gdjs.Nivel_323Code.GDCosa2Objects1});
gdjs.Nivel_323Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Nivel_323Code.GDCosa1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Meta"), gdjs.Nivel_323Code.GDMetaObjects2);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDMetaObjects2Objects, gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa1Objects2Objects, false, runtimeScene, false);
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDMetaObjects2 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win", false);
}{for(var i = 0, len = gdjs.Nivel_323Code.GDMetaObjects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDMetaObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Nivel_323Code.GDCosa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meta"), gdjs.Nivel_323Code.GDMetaObjects1);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDMetaObjects1Objects, gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDMetaObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win", false);
}{for(var i = 0, len = gdjs.Nivel_323Code.GDMetaObjects1.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDMetaObjects1[i].setAnimation(1);
}
}}

}


};gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDSwitchVerdeObjects2Objects = Hashtable.newFrom({"SwitchVerde": gdjs.Nivel_323Code.GDSwitchVerdeObjects2});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa1Objects2Objects = Hashtable.newFrom({"Cosa1": gdjs.Nivel_323Code.GDCosa1Objects2});
gdjs.Nivel_323Code.eventsList9 = function(runtimeScene) {

};gdjs.Nivel_323Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PuertaVerde"), gdjs.Nivel_323Code.GDPuertaVerdeObjects3);

for(gdjs.Nivel_323Code.forEachIndex4 = 0;gdjs.Nivel_323Code.forEachIndex4 < gdjs.Nivel_323Code.GDPuertaVerdeObjects3.length;++gdjs.Nivel_323Code.forEachIndex4) {
gdjs.copyArray(gdjs.Nivel_323Code.GDSwitchVerdeObjects3, gdjs.Nivel_323Code.GDSwitchVerdeObjects4);

gdjs.Nivel_323Code.GDPuertaVerdeObjects4.length = 0;


gdjs.Nivel_323Code.forEachTemporary4 = gdjs.Nivel_323Code.GDPuertaVerdeObjects3[gdjs.Nivel_323Code.forEachIndex4];
gdjs.Nivel_323Code.GDPuertaVerdeObjects4.push(gdjs.Nivel_323Code.forEachTemporary4);
gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDPuertaVerdeObjects4.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDPuertaVerdeObjects4[i].getVariableNumber(gdjs.Nivel_323Code.GDPuertaVerdeObjects4[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Nivel_323Code.GDSwitchVerdeObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Nivel_323Code.GDSwitchVerdeObjects4[0].getVariables()).getFromIndex(0))) ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDPuertaVerdeObjects4[k] = gdjs.Nivel_323Code.GDPuertaVerdeObjects4[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDPuertaVerdeObjects4.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Nivel_323Code.GDPuertaVerdeObjects4.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDPuertaVerdeObjects4[i].activateBehavior("Platform", false);
}
}{for(var i = 0, len = gdjs.Nivel_323Code.GDPuertaVerdeObjects4.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDPuertaVerdeObjects4[i].hide();
}
}}
}

}


};gdjs.Nivel_323Code.eventsList11 = function(runtimeScene) {

};gdjs.Nivel_323Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PuertaVerde"), gdjs.Nivel_323Code.GDPuertaVerdeObjects2);

for(gdjs.Nivel_323Code.forEachIndex3 = 0;gdjs.Nivel_323Code.forEachIndex3 < gdjs.Nivel_323Code.GDPuertaVerdeObjects2.length;++gdjs.Nivel_323Code.forEachIndex3) {
gdjs.copyArray(gdjs.Nivel_323Code.GDSwitchVerdeObjects2, gdjs.Nivel_323Code.GDSwitchVerdeObjects3);

gdjs.Nivel_323Code.GDPuertaVerdeObjects3.length = 0;


gdjs.Nivel_323Code.forEachTemporary3 = gdjs.Nivel_323Code.GDPuertaVerdeObjects2[gdjs.Nivel_323Code.forEachIndex3];
gdjs.Nivel_323Code.GDPuertaVerdeObjects3.push(gdjs.Nivel_323Code.forEachTemporary3);
gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDPuertaVerdeObjects3.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDPuertaVerdeObjects3[i].getVariableNumber(gdjs.Nivel_323Code.GDPuertaVerdeObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Nivel_323Code.GDSwitchVerdeObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Nivel_323Code.GDSwitchVerdeObjects3[0].getVariables()).getFromIndex(0))) ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDPuertaVerdeObjects3[k] = gdjs.Nivel_323Code.GDPuertaVerdeObjects3[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDPuertaVerdeObjects3.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Nivel_323Code.GDPuertaVerdeObjects3.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDPuertaVerdeObjects3[i].activateBehavior("Platform", true);
}
}{for(var i = 0, len = gdjs.Nivel_323Code.GDPuertaVerdeObjects3.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDPuertaVerdeObjects3[i].hide(false);
}
}}
}

}


};gdjs.Nivel_323Code.eventsList13 = function(runtimeScene) {

{


{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}

}


{

gdjs.copyArray(gdjs.Nivel_323Code.GDSwitchVerdeObjects2, gdjs.Nivel_323Code.GDSwitchVerdeObjects3);


gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
gdjs.Nivel_323Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDSwitchVerdeObjects3.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDSwitchVerdeObjects3[i].getAnimation() == 0 ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDSwitchVerdeObjects3[k] = gdjs.Nivel_323Code.GDSwitchVerdeObjects3[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDSwitchVerdeObjects3.length = k;}if ( gdjs.Nivel_323Code.condition0IsTrue_0.val ) {
{
gdjs.Nivel_323Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}
if (gdjs.Nivel_323Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDSwitchVerdeObjects3 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDSwitchVerdeObjects3.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDSwitchVerdeObjects3[i].setAnimation(1);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.Nivel_323Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Nivel_323Code.GDSwitchVerdeObjects2 */

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
gdjs.Nivel_323Code.condition1IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if ( gdjs.Nivel_323Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDSwitchVerdeObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDSwitchVerdeObjects2[i].getAnimation() == 1 ) {
        gdjs.Nivel_323Code.condition1IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDSwitchVerdeObjects2[k] = gdjs.Nivel_323Code.GDSwitchVerdeObjects2[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDSwitchVerdeObjects2.length = k;}}
if (gdjs.Nivel_323Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDSwitchVerdeObjects2 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDSwitchVerdeObjects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDSwitchVerdeObjects2[i].setAnimation(0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.Nivel_323Code.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDSwitchVerdeObjects1Objects = Hashtable.newFrom({"SwitchVerde": gdjs.Nivel_323Code.GDSwitchVerdeObjects1});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa2Objects1Objects = Hashtable.newFrom({"Cosa2": gdjs.Nivel_323Code.GDCosa2Objects1});
gdjs.Nivel_323Code.eventsList14 = function(runtimeScene) {

};gdjs.Nivel_323Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PuertaVerde"), gdjs.Nivel_323Code.GDPuertaVerdeObjects2);

for(gdjs.Nivel_323Code.forEachIndex3 = 0;gdjs.Nivel_323Code.forEachIndex3 < gdjs.Nivel_323Code.GDPuertaVerdeObjects2.length;++gdjs.Nivel_323Code.forEachIndex3) {
gdjs.copyArray(gdjs.Nivel_323Code.GDSwitchVerdeObjects2, gdjs.Nivel_323Code.GDSwitchVerdeObjects3);

gdjs.Nivel_323Code.GDPuertaVerdeObjects3.length = 0;


gdjs.Nivel_323Code.forEachTemporary3 = gdjs.Nivel_323Code.GDPuertaVerdeObjects2[gdjs.Nivel_323Code.forEachIndex3];
gdjs.Nivel_323Code.GDPuertaVerdeObjects3.push(gdjs.Nivel_323Code.forEachTemporary3);
gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDPuertaVerdeObjects3.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDPuertaVerdeObjects3[i].getVariableNumber(gdjs.Nivel_323Code.GDPuertaVerdeObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Nivel_323Code.GDSwitchVerdeObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Nivel_323Code.GDSwitchVerdeObjects3[0].getVariables()).getFromIndex(0))) ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDPuertaVerdeObjects3[k] = gdjs.Nivel_323Code.GDPuertaVerdeObjects3[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDPuertaVerdeObjects3.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Nivel_323Code.GDPuertaVerdeObjects3.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDPuertaVerdeObjects3[i].activateBehavior("Platform", false);
}
}{for(var i = 0, len = gdjs.Nivel_323Code.GDPuertaVerdeObjects3.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDPuertaVerdeObjects3[i].hide();
}
}}
}

}


};gdjs.Nivel_323Code.eventsList16 = function(runtimeScene) {

};gdjs.Nivel_323Code.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PuertaVerde"), gdjs.Nivel_323Code.GDPuertaVerdeObjects1);

for(gdjs.Nivel_323Code.forEachIndex2 = 0;gdjs.Nivel_323Code.forEachIndex2 < gdjs.Nivel_323Code.GDPuertaVerdeObjects1.length;++gdjs.Nivel_323Code.forEachIndex2) {
gdjs.copyArray(gdjs.Nivel_323Code.GDSwitchVerdeObjects1, gdjs.Nivel_323Code.GDSwitchVerdeObjects2);

gdjs.Nivel_323Code.GDPuertaVerdeObjects2.length = 0;


gdjs.Nivel_323Code.forEachTemporary2 = gdjs.Nivel_323Code.GDPuertaVerdeObjects1[gdjs.Nivel_323Code.forEachIndex2];
gdjs.Nivel_323Code.GDPuertaVerdeObjects2.push(gdjs.Nivel_323Code.forEachTemporary2);
gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDPuertaVerdeObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDPuertaVerdeObjects2[i].getVariableNumber(gdjs.Nivel_323Code.GDPuertaVerdeObjects2[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Nivel_323Code.GDSwitchVerdeObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Nivel_323Code.GDSwitchVerdeObjects2[0].getVariables()).getFromIndex(0))) ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDPuertaVerdeObjects2[k] = gdjs.Nivel_323Code.GDPuertaVerdeObjects2[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDPuertaVerdeObjects2.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Nivel_323Code.GDPuertaVerdeObjects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDPuertaVerdeObjects2[i].activateBehavior("Platform", true);
}
}{for(var i = 0, len = gdjs.Nivel_323Code.GDPuertaVerdeObjects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDPuertaVerdeObjects2[i].hide(false);
}
}}
}

}


};gdjs.Nivel_323Code.eventsList18 = function(runtimeScene) {

{


{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}

}


{

gdjs.copyArray(gdjs.Nivel_323Code.GDSwitchVerdeObjects1, gdjs.Nivel_323Code.GDSwitchVerdeObjects2);


gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
gdjs.Nivel_323Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDSwitchVerdeObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDSwitchVerdeObjects2[i].getAnimation() == 0 ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDSwitchVerdeObjects2[k] = gdjs.Nivel_323Code.GDSwitchVerdeObjects2[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDSwitchVerdeObjects2.length = k;}if ( gdjs.Nivel_323Code.condition0IsTrue_0.val ) {
{
gdjs.Nivel_323Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}
if (gdjs.Nivel_323Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDSwitchVerdeObjects2 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDSwitchVerdeObjects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDSwitchVerdeObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.Nivel_323Code.eventsList15(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Nivel_323Code.GDSwitchVerdeObjects1 */

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
gdjs.Nivel_323Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDSwitchVerdeObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDSwitchVerdeObjects1[i].getAnimation() == 1 ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDSwitchVerdeObjects1[k] = gdjs.Nivel_323Code.GDSwitchVerdeObjects1[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDSwitchVerdeObjects1.length = k;}if ( gdjs.Nivel_323Code.condition0IsTrue_0.val ) {
{
gdjs.Nivel_323Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}
if (gdjs.Nivel_323Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDSwitchVerdeObjects1 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDSwitchVerdeObjects1.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDSwitchVerdeObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.Nivel_323Code.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel_323Code.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Nivel_323Code.GDCosa1Objects2);
gdjs.copyArray(runtimeScene.getObjects("SwitchVerde"), gdjs.Nivel_323Code.GDSwitchVerdeObjects2);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
gdjs.Nivel_323Code.condition1IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDSwitchVerdeObjects2Objects, gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa1Objects2Objects, false, runtimeScene, false);
}if ( gdjs.Nivel_323Code.condition0IsTrue_0.val ) {
{
{gdjs.Nivel_323Code.conditionTrue_1 = gdjs.Nivel_323Code.condition1IsTrue_0;
gdjs.Nivel_323Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11153620);
}
}}
if (gdjs.Nivel_323Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Nivel_323Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Nivel_323Code.GDCosa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("SwitchVerde"), gdjs.Nivel_323Code.GDSwitchVerdeObjects1);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
gdjs.Nivel_323Code.condition1IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDSwitchVerdeObjects1Objects, gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Nivel_323Code.condition0IsTrue_0.val ) {
{
{gdjs.Nivel_323Code.conditionTrue_1 = gdjs.Nivel_323Code.condition1IsTrue_0;
gdjs.Nivel_323Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11159124);
}
}}
if (gdjs.Nivel_323Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Nivel_323Code.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel_323Code.eventsList20 = function(runtimeScene) {

{


gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BarreraCosa1"), gdjs.Nivel_323Code.GDBarreraCosa1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BarreraCosa2"), gdjs.Nivel_323Code.GDBarreraCosa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BaseTile"), gdjs.Nivel_323Code.GDBaseTileObjects1);
{for(var i = 0, len = gdjs.Nivel_323Code.GDBarreraCosa1Objects1.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDBarreraCosa1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Nivel_323Code.GDBaseTileObjects1.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDBaseTileObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Nivel_323Code.GDBarreraCosa2Objects1.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDBarreraCosa2Objects1[i].hide();
}
}}

}


};gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Nivel_323Code.GDEnemyObjects2});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDGJObjects2Objects = Hashtable.newFrom({"GJ": gdjs.Nivel_323Code.GDGJObjects2});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Nivel_323Code.GDEnemyObjects2});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDBJObjects2Objects = Hashtable.newFrom({"BJ": gdjs.Nivel_323Code.GDBJObjects2});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa1Objects2Objects = Hashtable.newFrom({"Cosa1": gdjs.Nivel_323Code.GDCosa1Objects2});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Nivel_323Code.GDEnemyObjects2});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa2Objects2Objects = Hashtable.newFrom({"Cosa2": gdjs.Nivel_323Code.GDCosa2Objects2});
gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Nivel_323Code.GDEnemyObjects2});
gdjs.Nivel_323Code.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Nivel_323Code.GDEnemyObjects2);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDEnemyObjects2[i].getVariableNumber(gdjs.Nivel_323Code.GDEnemyObjects2[i].getVariables().get("dir")) == 0 ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDEnemyObjects2[k] = gdjs.Nivel_323Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDEnemyObjects2.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDEnemyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Nivel_323Code.GDEnemyObjects2);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDEnemyObjects2[i].getVariableNumber(gdjs.Nivel_323Code.GDEnemyObjects2[i].getVariables().get("dir")) == 1 ) {
        gdjs.Nivel_323Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDEnemyObjects2[k] = gdjs.Nivel_323Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDEnemyObjects2.length = k;}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDEnemyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Nivel_323Code.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("GJ"), gdjs.Nivel_323Code.GDGJObjects2);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
gdjs.Nivel_323Code.condition1IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDEnemyObjects2Objects, gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDGJObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Nivel_323Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDEnemyObjects2[i].getVariableNumber(gdjs.Nivel_323Code.GDEnemyObjects2[i].getVariables().get("dir")) == 0 ) {
        gdjs.Nivel_323Code.condition1IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDEnemyObjects2[k] = gdjs.Nivel_323Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDEnemyObjects2.length = k;}}
if (gdjs.Nivel_323Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDEnemyObjects2[i].returnVariable(gdjs.Nivel_323Code.GDEnemyObjects2[i].getVariables().get("dir")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BJ"), gdjs.Nivel_323Code.GDBJObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Nivel_323Code.GDEnemyObjects2);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
gdjs.Nivel_323Code.condition1IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDEnemyObjects2Objects, gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDBJObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Nivel_323Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Nivel_323Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_323Code.GDEnemyObjects2[i].getVariableNumber(gdjs.Nivel_323Code.GDEnemyObjects2[i].getVariables().get("dir")) == 1 ) {
        gdjs.Nivel_323Code.condition1IsTrue_0.val = true;
        gdjs.Nivel_323Code.GDEnemyObjects2[k] = gdjs.Nivel_323Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Nivel_323Code.GDEnemyObjects2.length = k;}}
if (gdjs.Nivel_323Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Nivel_323Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Nivel_323Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDEnemyObjects2[i].returnVariable(gdjs.Nivel_323Code.GDEnemyObjects2[i].getVariables().get("dir")).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Nivel_323Code.GDCosa1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Nivel_323Code.GDEnemyObjects2);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa1Objects2Objects, gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Nivel_323Code.GDCosa2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Nivel_323Code.GDEnemyObjects2);

gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDCosa2Objects2Objects, gdjs.Nivel_323Code.mapOfGDgdjs_46Nivel_95323Code_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{


gdjs.Nivel_323Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_323Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Nivel_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BJ"), gdjs.Nivel_323Code.GDBJObjects1);
gdjs.copyArray(runtimeScene.getObjects("GJ"), gdjs.Nivel_323Code.GDGJObjects1);
{for(var i = 0, len = gdjs.Nivel_323Code.GDBJObjects1.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDBJObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Nivel_323Code.GDGJObjects1.length ;i < len;++i) {
    gdjs.Nivel_323Code.GDGJObjects1[i].hide();
}
}}

}


};gdjs.Nivel_323Code.eventsList22 = function(runtimeScene) {

{


gdjs.Nivel_323Code.eventsList2(runtimeScene);
}


{


gdjs.Nivel_323Code.eventsList5(runtimeScene);
}


{


gdjs.Nivel_323Code.eventsList6(runtimeScene);
}


{


gdjs.Nivel_323Code.eventsList7(runtimeScene);
}


{


gdjs.Nivel_323Code.eventsList8(runtimeScene);
}


{


gdjs.Nivel_323Code.eventsList19(runtimeScene);
}


{


gdjs.Nivel_323Code.eventsList20(runtimeScene);
}


{


gdjs.Nivel_323Code.eventsList21(runtimeScene);
}


};

gdjs.Nivel_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Nivel_323Code.GDCosa1Objects1.length = 0;
gdjs.Nivel_323Code.GDCosa1Objects2.length = 0;
gdjs.Nivel_323Code.GDCosa1Objects3.length = 0;
gdjs.Nivel_323Code.GDCosa1Objects4.length = 0;
gdjs.Nivel_323Code.GDCosa2Objects1.length = 0;
gdjs.Nivel_323Code.GDCosa2Objects2.length = 0;
gdjs.Nivel_323Code.GDCosa2Objects3.length = 0;
gdjs.Nivel_323Code.GDCosa2Objects4.length = 0;
gdjs.Nivel_323Code.GDBaseTileObjects1.length = 0;
gdjs.Nivel_323Code.GDBaseTileObjects2.length = 0;
gdjs.Nivel_323Code.GDBaseTileObjects3.length = 0;
gdjs.Nivel_323Code.GDBaseTileObjects4.length = 0;
gdjs.Nivel_323Code.GDBarreraCosa1Objects1.length = 0;
gdjs.Nivel_323Code.GDBarreraCosa1Objects2.length = 0;
gdjs.Nivel_323Code.GDBarreraCosa1Objects3.length = 0;
gdjs.Nivel_323Code.GDBarreraCosa1Objects4.length = 0;
gdjs.Nivel_323Code.GDBarreraCosa2Objects1.length = 0;
gdjs.Nivel_323Code.GDBarreraCosa2Objects2.length = 0;
gdjs.Nivel_323Code.GDBarreraCosa2Objects3.length = 0;
gdjs.Nivel_323Code.GDBarreraCosa2Objects4.length = 0;
gdjs.Nivel_323Code.GDZonaMuerteObjects1.length = 0;
gdjs.Nivel_323Code.GDZonaMuerteObjects2.length = 0;
gdjs.Nivel_323Code.GDZonaMuerteObjects3.length = 0;
gdjs.Nivel_323Code.GDZonaMuerteObjects4.length = 0;
gdjs.Nivel_323Code.GDIndicadorCosaObjects1.length = 0;
gdjs.Nivel_323Code.GDIndicadorCosaObjects2.length = 0;
gdjs.Nivel_323Code.GDIndicadorCosaObjects3.length = 0;
gdjs.Nivel_323Code.GDIndicadorCosaObjects4.length = 0;
gdjs.Nivel_323Code.GDMetaObjects1.length = 0;
gdjs.Nivel_323Code.GDMetaObjects2.length = 0;
gdjs.Nivel_323Code.GDMetaObjects3.length = 0;
gdjs.Nivel_323Code.GDMetaObjects4.length = 0;
gdjs.Nivel_323Code.GDSwitchVerdeObjects1.length = 0;
gdjs.Nivel_323Code.GDSwitchVerdeObjects2.length = 0;
gdjs.Nivel_323Code.GDSwitchVerdeObjects3.length = 0;
gdjs.Nivel_323Code.GDSwitchVerdeObjects4.length = 0;
gdjs.Nivel_323Code.GDPuertaVerdeObjects1.length = 0;
gdjs.Nivel_323Code.GDPuertaVerdeObjects2.length = 0;
gdjs.Nivel_323Code.GDPuertaVerdeObjects3.length = 0;
gdjs.Nivel_323Code.GDPuertaVerdeObjects4.length = 0;
gdjs.Nivel_323Code.GDNewTileMap2Objects1.length = 0;
gdjs.Nivel_323Code.GDNewTileMap2Objects2.length = 0;
gdjs.Nivel_323Code.GDNewTileMap2Objects3.length = 0;
gdjs.Nivel_323Code.GDNewTileMap2Objects4.length = 0;
gdjs.Nivel_323Code.GDEnemyObjects1.length = 0;
gdjs.Nivel_323Code.GDEnemyObjects2.length = 0;
gdjs.Nivel_323Code.GDEnemyObjects3.length = 0;
gdjs.Nivel_323Code.GDEnemyObjects4.length = 0;
gdjs.Nivel_323Code.GDBJObjects1.length = 0;
gdjs.Nivel_323Code.GDBJObjects2.length = 0;
gdjs.Nivel_323Code.GDBJObjects3.length = 0;
gdjs.Nivel_323Code.GDBJObjects4.length = 0;
gdjs.Nivel_323Code.GDGJObjects1.length = 0;
gdjs.Nivel_323Code.GDGJObjects2.length = 0;
gdjs.Nivel_323Code.GDGJObjects3.length = 0;
gdjs.Nivel_323Code.GDGJObjects4.length = 0;

gdjs.Nivel_323Code.eventsList22(runtimeScene);
return;

}

gdjs['Nivel_323Code'] = gdjs.Nivel_323Code;
