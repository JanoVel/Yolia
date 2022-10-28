gdjs.Inicio_322_460Code = {};
gdjs.Inicio_322_460Code.forEachIndex2 = 0;

gdjs.Inicio_322_460Code.forEachIndex3 = 0;

gdjs.Inicio_322_460Code.forEachIndex4 = 0;

gdjs.Inicio_322_460Code.forEachObjects2 = [];

gdjs.Inicio_322_460Code.forEachObjects3 = [];

gdjs.Inicio_322_460Code.forEachObjects4 = [];

gdjs.Inicio_322_460Code.forEachTemporary2 = null;

gdjs.Inicio_322_460Code.forEachTemporary3 = null;

gdjs.Inicio_322_460Code.forEachTemporary4 = null;

gdjs.Inicio_322_460Code.forEachTotalCount2 = 0;

gdjs.Inicio_322_460Code.forEachTotalCount3 = 0;

gdjs.Inicio_322_460Code.forEachTotalCount4 = 0;

gdjs.Inicio_322_460Code.GDCosa1Objects1= [];
gdjs.Inicio_322_460Code.GDCosa1Objects2= [];
gdjs.Inicio_322_460Code.GDCosa1Objects3= [];
gdjs.Inicio_322_460Code.GDCosa1Objects4= [];
gdjs.Inicio_322_460Code.GDCosa2Objects1= [];
gdjs.Inicio_322_460Code.GDCosa2Objects2= [];
gdjs.Inicio_322_460Code.GDCosa2Objects3= [];
gdjs.Inicio_322_460Code.GDCosa2Objects4= [];
gdjs.Inicio_322_460Code.GDBaseTileObjects1= [];
gdjs.Inicio_322_460Code.GDBaseTileObjects2= [];
gdjs.Inicio_322_460Code.GDBaseTileObjects3= [];
gdjs.Inicio_322_460Code.GDBaseTileObjects4= [];
gdjs.Inicio_322_460Code.GDBarreraCosa1Objects1= [];
gdjs.Inicio_322_460Code.GDBarreraCosa1Objects2= [];
gdjs.Inicio_322_460Code.GDBarreraCosa1Objects3= [];
gdjs.Inicio_322_460Code.GDBarreraCosa1Objects4= [];
gdjs.Inicio_322_460Code.GDBarreraCosa2Objects1= [];
gdjs.Inicio_322_460Code.GDBarreraCosa2Objects2= [];
gdjs.Inicio_322_460Code.GDBarreraCosa2Objects3= [];
gdjs.Inicio_322_460Code.GDBarreraCosa2Objects4= [];
gdjs.Inicio_322_460Code.GDZonaMuerteObjects1= [];
gdjs.Inicio_322_460Code.GDZonaMuerteObjects2= [];
gdjs.Inicio_322_460Code.GDZonaMuerteObjects3= [];
gdjs.Inicio_322_460Code.GDZonaMuerteObjects4= [];
gdjs.Inicio_322_460Code.GDIndicadorCosaObjects1= [];
gdjs.Inicio_322_460Code.GDIndicadorCosaObjects2= [];
gdjs.Inicio_322_460Code.GDIndicadorCosaObjects3= [];
gdjs.Inicio_322_460Code.GDIndicadorCosaObjects4= [];
gdjs.Inicio_322_460Code.GDMetaObjects1= [];
gdjs.Inicio_322_460Code.GDMetaObjects2= [];
gdjs.Inicio_322_460Code.GDMetaObjects3= [];
gdjs.Inicio_322_460Code.GDMetaObjects4= [];
gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1= [];
gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2= [];
gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3= [];
gdjs.Inicio_322_460Code.GDSwitchVerdeObjects4= [];
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects1= [];
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2= [];
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3= [];
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4= [];
gdjs.Inicio_322_460Code.GDNewTileMap2Objects1= [];
gdjs.Inicio_322_460Code.GDNewTileMap2Objects2= [];
gdjs.Inicio_322_460Code.GDNewTileMap2Objects3= [];
gdjs.Inicio_322_460Code.GDNewTileMap2Objects4= [];
gdjs.Inicio_322_460Code.GDEnemyObjects1= [];
gdjs.Inicio_322_460Code.GDEnemyObjects2= [];
gdjs.Inicio_322_460Code.GDEnemyObjects3= [];
gdjs.Inicio_322_460Code.GDEnemyObjects4= [];
gdjs.Inicio_322_460Code.GDBJObjects1= [];
gdjs.Inicio_322_460Code.GDBJObjects2= [];
gdjs.Inicio_322_460Code.GDBJObjects3= [];
gdjs.Inicio_322_460Code.GDBJObjects4= [];
gdjs.Inicio_322_460Code.GDGJObjects1= [];
gdjs.Inicio_322_460Code.GDGJObjects2= [];
gdjs.Inicio_322_460Code.GDGJObjects3= [];
gdjs.Inicio_322_460Code.GDGJObjects4= [];
gdjs.Inicio_322_460Code.GDNewSpriteObjects1= [];
gdjs.Inicio_322_460Code.GDNewSpriteObjects2= [];
gdjs.Inicio_322_460Code.GDNewSpriteObjects3= [];
gdjs.Inicio_322_460Code.GDNewSpriteObjects4= [];
gdjs.Inicio_322_460Code.GDNewSprite2Objects1= [];
gdjs.Inicio_322_460Code.GDNewSprite2Objects2= [];
gdjs.Inicio_322_460Code.GDNewSprite2Objects3= [];
gdjs.Inicio_322_460Code.GDNewSprite2Objects4= [];

gdjs.Inicio_322_460Code.conditionTrue_0 = {val:false};
gdjs.Inicio_322_460Code.condition0IsTrue_0 = {val:false};
gdjs.Inicio_322_460Code.condition1IsTrue_0 = {val:false};
gdjs.Inicio_322_460Code.condition2IsTrue_0 = {val:false};
gdjs.Inicio_322_460Code.conditionTrue_1 = {val:false};
gdjs.Inicio_322_460Code.condition0IsTrue_1 = {val:false};
gdjs.Inicio_322_460Code.condition1IsTrue_1 = {val:false};
gdjs.Inicio_322_460Code.condition2IsTrue_1 = {val:false};


gdjs.Inicio_322_460Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Inicio_322_460Code.GDCosa1Objects3);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDCosa1Objects3.length;i<l;++i) {
    if ( !(gdjs.Inicio_322_460Code.GDCosa1Objects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDCosa1Objects3[k] = gdjs.Inicio_322_460Code.GDCosa1Objects3[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDCosa1Objects3.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDCosa1Objects3 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa1Objects3.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa1Objects3[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Inicio_322_460Code.GDCosa1Objects3);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDCosa1Objects3.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDCosa1Objects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDCosa1Objects3[k] = gdjs.Inicio_322_460Code.GDCosa1Objects3[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDCosa1Objects3.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDCosa1Objects3 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa1Objects3.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa1Objects3[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Inicio_322_460Code.GDCosa1Objects3);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDCosa1Objects3.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDCosa1Objects3[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDCosa1Objects3[k] = gdjs.Inicio_322_460Code.GDCosa1Objects3[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDCosa1Objects3.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDCosa1Objects3 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa1Objects3.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa1Objects3[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Inicio_322_460Code.GDCosa1Objects2);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDCosa1Objects2.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDCosa1Objects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDCosa1Objects2[k] = gdjs.Inicio_322_460Code.GDCosa1Objects2[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDCosa1Objects2.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDCosa1Objects2 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa1Objects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa1Objects2[i].setAnimation(3);
}
}}

}


};gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa1Objects1Objects = Hashtable.newFrom({"Cosa1": gdjs.Inicio_322_460Code.GDCosa1Objects1});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDBarreraCosa1Objects1Objects = Hashtable.newFrom({"BarreraCosa1": gdjs.Inicio_322_460Code.GDBarreraCosa1Objects1});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDBarreraCosa1Objects1Objects = Hashtable.newFrom({"BarreraCosa1": gdjs.Inicio_322_460Code.GDBarreraCosa1Objects1});
gdjs.Inicio_322_460Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BarreraCosa1"), gdjs.Inicio_322_460Code.GDBarreraCosa1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Inicio_322_460Code.GDCosa1Objects1);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa1Objects1Objects, gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDBarreraCosa1Objects1Objects, false, runtimeScene, false);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDBarreraCosa1Objects1 */
/* Reuse gdjs.Inicio_322_460Code.GDCosa1Objects1 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa1Objects1.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa1Objects1[i].separateFromObjectsList(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDBarreraCosa1Objects1Objects, false);
}
}}

}


};gdjs.Inicio_322_460Code.eventsList2 = function(runtimeScene) {

{


gdjs.Inicio_322_460Code.eventsList0(runtimeScene);
}


{


gdjs.Inicio_322_460Code.eventsList1(runtimeScene);
}


};gdjs.Inicio_322_460Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Inicio_322_460Code.GDCosa2Objects3);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDCosa2Objects3.length;i<l;++i) {
    if ( !(gdjs.Inicio_322_460Code.GDCosa2Objects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDCosa2Objects3[k] = gdjs.Inicio_322_460Code.GDCosa2Objects3[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDCosa2Objects3.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDCosa2Objects3 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa2Objects3.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa2Objects3[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Inicio_322_460Code.GDCosa2Objects3);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDCosa2Objects3.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDCosa2Objects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDCosa2Objects3[k] = gdjs.Inicio_322_460Code.GDCosa2Objects3[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDCosa2Objects3.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDCosa2Objects3 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa2Objects3.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa2Objects3[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Inicio_322_460Code.GDCosa2Objects3);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDCosa2Objects3.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDCosa2Objects3[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDCosa2Objects3[k] = gdjs.Inicio_322_460Code.GDCosa2Objects3[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDCosa2Objects3.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDCosa2Objects3 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa2Objects3.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa2Objects3[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Inicio_322_460Code.GDCosa2Objects2);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDCosa2Objects2.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDCosa2Objects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDCosa2Objects2[k] = gdjs.Inicio_322_460Code.GDCosa2Objects2[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDCosa2Objects2.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDCosa2Objects2 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa2Objects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa2Objects2[i].setAnimation(3);
}
}}

}


};gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa2Objects1Objects = Hashtable.newFrom({"Cosa2": gdjs.Inicio_322_460Code.GDCosa2Objects1});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDBarreraCosa2Objects1Objects = Hashtable.newFrom({"BarreraCosa2": gdjs.Inicio_322_460Code.GDBarreraCosa2Objects1});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDBarreraCosa2Objects1Objects = Hashtable.newFrom({"BarreraCosa2": gdjs.Inicio_322_460Code.GDBarreraCosa2Objects1});
gdjs.Inicio_322_460Code.eventsList4 = function(runtimeScene) {

{


gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Inicio_322_460Code.GDCosa2Objects2);
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa2Objects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa2Objects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BarreraCosa2"), gdjs.Inicio_322_460Code.GDBarreraCosa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Inicio_322_460Code.GDCosa2Objects1);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa2Objects1Objects, gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDBarreraCosa2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDBarreraCosa2Objects1 */
/* Reuse gdjs.Inicio_322_460Code.GDCosa2Objects1 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa2Objects1.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa2Objects1[i].separateFromObjectsList(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDBarreraCosa2Objects1Objects, false);
}
}}

}


};gdjs.Inicio_322_460Code.eventsList5 = function(runtimeScene) {

{


gdjs.Inicio_322_460Code.eventsList3(runtimeScene);
}


{


gdjs.Inicio_322_460Code.eventsList4(runtimeScene);
}


};gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDZonaMuerteObjects2Objects = Hashtable.newFrom({"ZonaMuerte": gdjs.Inicio_322_460Code.GDZonaMuerteObjects2});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa1Objects2Objects = Hashtable.newFrom({"Cosa1": gdjs.Inicio_322_460Code.GDCosa1Objects2});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDZonaMuerteObjects1Objects = Hashtable.newFrom({"ZonaMuerte": gdjs.Inicio_322_460Code.GDZonaMuerteObjects1});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa2Objects1Objects = Hashtable.newFrom({"Cosa2": gdjs.Inicio_322_460Code.GDCosa2Objects1});
gdjs.Inicio_322_460Code.eventsList6 = function(runtimeScene) {

{


gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ZonaMuerte"), gdjs.Inicio_322_460Code.GDZonaMuerteObjects2);
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDZonaMuerteObjects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDZonaMuerteObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Inicio_322_460Code.GDCosa1Objects2);
gdjs.copyArray(runtimeScene.getObjects("ZonaMuerte"), gdjs.Inicio_322_460Code.GDZonaMuerteObjects2);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDZonaMuerteObjects2Objects, gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa1Objects2Objects, false, runtimeScene, false);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Inicio_322_460Code.GDCosa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ZonaMuerte"), gdjs.Inicio_322_460Code.GDZonaMuerteObjects1);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDZonaMuerteObjects1Objects, gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


};gdjs.Inicio_322_460Code.eventsList7 = function(runtimeScene) {

{


gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().get("controllingThing1"));
}}

}


{


gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("controllingThing1"), false);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Inicio_322_460Code.GDCosa1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Inicio_322_460Code.GDCosa2Objects2);
gdjs.copyArray(runtimeScene.getObjects("IndicadorCosa"), gdjs.Inicio_322_460Code.GDIndicadorCosaObjects2);
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa1Objects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa1Objects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa2Objects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa2Objects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(false);
}
}{for(var i = 0, len = gdjs.Inicio_322_460Code.GDIndicadorCosaObjects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDIndicadorCosaObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.Inicio_322_460Code.GDCosa2Objects2.length === 0 ) ? 0 :gdjs.Inicio_322_460Code.GDCosa2Objects2[0].getPointX("")), 0.05), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.Inicio_322_460Code.GDCosa2Objects2.length === 0 ) ? 0 :gdjs.Inicio_322_460Code.GDCosa2Objects2[0].getPointY("")), 0.05), "", 0);
}}

}


{


gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("controllingThing1"), true);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Inicio_322_460Code.GDCosa1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Inicio_322_460Code.GDCosa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("IndicadorCosa"), gdjs.Inicio_322_460Code.GDIndicadorCosaObjects1);
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa1Objects1.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa1Objects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(false);
}
}{for(var i = 0, len = gdjs.Inicio_322_460Code.GDCosa2Objects1.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDCosa2Objects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Inicio_322_460Code.GDIndicadorCosaObjects1.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDIndicadorCosaObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.Inicio_322_460Code.GDCosa1Objects1.length === 0 ) ? 0 :gdjs.Inicio_322_460Code.GDCosa1Objects1[0].getPointX("")), 0.05), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.Inicio_322_460Code.GDCosa1Objects1.length === 0 ) ? 0 :gdjs.Inicio_322_460Code.GDCosa1Objects1[0].getPointY("")), 0.05), "", 0);
}}

}


};gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDMetaObjects2Objects = Hashtable.newFrom({"Meta": gdjs.Inicio_322_460Code.GDMetaObjects2});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa1Objects2Objects = Hashtable.newFrom({"Cosa1": gdjs.Inicio_322_460Code.GDCosa1Objects2});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDMetaObjects1Objects = Hashtable.newFrom({"Meta": gdjs.Inicio_322_460Code.GDMetaObjects1});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa2Objects1Objects = Hashtable.newFrom({"Cosa2": gdjs.Inicio_322_460Code.GDCosa2Objects1});
gdjs.Inicio_322_460Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Inicio_322_460Code.GDCosa1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Meta"), gdjs.Inicio_322_460Code.GDMetaObjects2);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDMetaObjects2Objects, gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa1Objects2Objects, false, runtimeScene, false);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDMetaObjects2 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel 3", false);
}{for(var i = 0, len = gdjs.Inicio_322_460Code.GDMetaObjects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDMetaObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Inicio_322_460Code.GDCosa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Meta"), gdjs.Inicio_322_460Code.GDMetaObjects1);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDMetaObjects1Objects, gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDMetaObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel 3", false);
}{for(var i = 0, len = gdjs.Inicio_322_460Code.GDMetaObjects1.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDMetaObjects1[i].setAnimation(1);
}
}}

}


};gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDSwitchVerdeObjects2Objects = Hashtable.newFrom({"SwitchVerde": gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa1Objects2Objects = Hashtable.newFrom({"Cosa1": gdjs.Inicio_322_460Code.GDCosa1Objects2});
gdjs.Inicio_322_460Code.eventsList9 = function(runtimeScene) {

};gdjs.Inicio_322_460Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PuertaVerde"), gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3);

for(gdjs.Inicio_322_460Code.forEachIndex4 = 0;gdjs.Inicio_322_460Code.forEachIndex4 < gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.length;++gdjs.Inicio_322_460Code.forEachIndex4) {
gdjs.copyArray(gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3, gdjs.Inicio_322_460Code.GDSwitchVerdeObjects4);

gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4.length = 0;


gdjs.Inicio_322_460Code.forEachTemporary4 = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3[gdjs.Inicio_322_460Code.forEachIndex4];
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4.push(gdjs.Inicio_322_460Code.forEachTemporary4);
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4[i].getVariableNumber(gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Inicio_322_460Code.GDSwitchVerdeObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Inicio_322_460Code.GDSwitchVerdeObjects4[0].getVariables()).getFromIndex(0))) ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4[k] = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4[i].activateBehavior("Platform", false);
}
}{for(var i = 0, len = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4[i].hide();
}
}}
}

}


};gdjs.Inicio_322_460Code.eventsList11 = function(runtimeScene) {

};gdjs.Inicio_322_460Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PuertaVerde"), gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2);

for(gdjs.Inicio_322_460Code.forEachIndex3 = 0;gdjs.Inicio_322_460Code.forEachIndex3 < gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2.length;++gdjs.Inicio_322_460Code.forEachIndex3) {
gdjs.copyArray(gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2, gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3);

gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.length = 0;


gdjs.Inicio_322_460Code.forEachTemporary3 = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2[gdjs.Inicio_322_460Code.forEachIndex3];
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.push(gdjs.Inicio_322_460Code.forEachTemporary3);
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3[i].getVariableNumber(gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3[0].getVariables()).getFromIndex(0))) ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3[k] = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3[i].activateBehavior("Platform", true);
}
}{for(var i = 0, len = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3[i].hide(false);
}
}}
}

}


};gdjs.Inicio_322_460Code.eventsList13 = function(runtimeScene) {

{


{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}

}


{

gdjs.copyArray(gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2, gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3);


gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
gdjs.Inicio_322_460Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3[i].getAnimation() == 0 ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3[k] = gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3.length = k;}if ( gdjs.Inicio_322_460Code.condition0IsTrue_0.val ) {
{
gdjs.Inicio_322_460Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}
if (gdjs.Inicio_322_460Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3[i].setAnimation(1);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.Inicio_322_460Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2 */

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
gdjs.Inicio_322_460Code.condition1IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if ( gdjs.Inicio_322_460Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2[i].getAnimation() == 1 ) {
        gdjs.Inicio_322_460Code.condition1IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2[k] = gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2.length = k;}}
if (gdjs.Inicio_322_460Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2[i].setAnimation(0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.Inicio_322_460Code.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDSwitchVerdeObjects1Objects = Hashtable.newFrom({"SwitchVerde": gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa2Objects1Objects = Hashtable.newFrom({"Cosa2": gdjs.Inicio_322_460Code.GDCosa2Objects1});
gdjs.Inicio_322_460Code.eventsList14 = function(runtimeScene) {

};gdjs.Inicio_322_460Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PuertaVerde"), gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2);

for(gdjs.Inicio_322_460Code.forEachIndex3 = 0;gdjs.Inicio_322_460Code.forEachIndex3 < gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2.length;++gdjs.Inicio_322_460Code.forEachIndex3) {
gdjs.copyArray(gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2, gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3);

gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.length = 0;


gdjs.Inicio_322_460Code.forEachTemporary3 = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2[gdjs.Inicio_322_460Code.forEachIndex3];
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.push(gdjs.Inicio_322_460Code.forEachTemporary3);
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3[i].getVariableNumber(gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3[0].getVariables()).getFromIndex(0))) ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3[k] = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3[i].activateBehavior("Platform", false);
}
}{for(var i = 0, len = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3[i].hide();
}
}}
}

}


};gdjs.Inicio_322_460Code.eventsList16 = function(runtimeScene) {

};gdjs.Inicio_322_460Code.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PuertaVerde"), gdjs.Inicio_322_460Code.GDPuertaVerdeObjects1);

for(gdjs.Inicio_322_460Code.forEachIndex2 = 0;gdjs.Inicio_322_460Code.forEachIndex2 < gdjs.Inicio_322_460Code.GDPuertaVerdeObjects1.length;++gdjs.Inicio_322_460Code.forEachIndex2) {
gdjs.copyArray(gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1, gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2);

gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2.length = 0;


gdjs.Inicio_322_460Code.forEachTemporary2 = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects1[gdjs.Inicio_322_460Code.forEachIndex2];
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2.push(gdjs.Inicio_322_460Code.forEachTemporary2);
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2[i].getVariableNumber(gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2[0].getVariables()).getFromIndex(0))) ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2[k] = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2[i].activateBehavior("Platform", true);
}
}{for(var i = 0, len = gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2[i].hide(false);
}
}}
}

}


};gdjs.Inicio_322_460Code.eventsList18 = function(runtimeScene) {

{


{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}

}


{

gdjs.copyArray(gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1, gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2);


gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
gdjs.Inicio_322_460Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2[i].getAnimation() == 0 ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2[k] = gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2.length = k;}if ( gdjs.Inicio_322_460Code.condition0IsTrue_0.val ) {
{
gdjs.Inicio_322_460Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}
if (gdjs.Inicio_322_460Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.Inicio_322_460Code.eventsList15(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1 */

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
gdjs.Inicio_322_460Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1[i].getAnimation() == 1 ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1[k] = gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1.length = k;}if ( gdjs.Inicio_322_460Code.condition0IsTrue_0.val ) {
{
gdjs.Inicio_322_460Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}
if (gdjs.Inicio_322_460Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.Inicio_322_460Code.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.Inicio_322_460Code.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Inicio_322_460Code.GDCosa1Objects2);
gdjs.copyArray(runtimeScene.getObjects("SwitchVerde"), gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
gdjs.Inicio_322_460Code.condition1IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDSwitchVerdeObjects2Objects, gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa1Objects2Objects, false, runtimeScene, false);
}if ( gdjs.Inicio_322_460Code.condition0IsTrue_0.val ) {
{
{gdjs.Inicio_322_460Code.conditionTrue_1 = gdjs.Inicio_322_460Code.condition1IsTrue_0;
gdjs.Inicio_322_460Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11016028);
}
}}
if (gdjs.Inicio_322_460Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Inicio_322_460Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Inicio_322_460Code.GDCosa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("SwitchVerde"), gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
gdjs.Inicio_322_460Code.condition1IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDSwitchVerdeObjects1Objects, gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Inicio_322_460Code.condition0IsTrue_0.val ) {
{
{gdjs.Inicio_322_460Code.conditionTrue_1 = gdjs.Inicio_322_460Code.condition1IsTrue_0;
gdjs.Inicio_322_460Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11021532);
}
}}
if (gdjs.Inicio_322_460Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Inicio_322_460Code.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.Inicio_322_460Code.eventsList20 = function(runtimeScene) {

{


gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BarreraCosa1"), gdjs.Inicio_322_460Code.GDBarreraCosa1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BarreraCosa2"), gdjs.Inicio_322_460Code.GDBarreraCosa2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BaseTile"), gdjs.Inicio_322_460Code.GDBaseTileObjects1);
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDBarreraCosa1Objects1.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDBarreraCosa1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Inicio_322_460Code.GDBaseTileObjects1.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDBaseTileObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Inicio_322_460Code.GDBarreraCosa2Objects1.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDBarreraCosa2Objects1[i].hide();
}
}}

}


};gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Inicio_322_460Code.GDEnemyObjects2});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDGJObjects2Objects = Hashtable.newFrom({"GJ": gdjs.Inicio_322_460Code.GDGJObjects2});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Inicio_322_460Code.GDEnemyObjects2});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDBJObjects2Objects = Hashtable.newFrom({"BJ": gdjs.Inicio_322_460Code.GDBJObjects2});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa1Objects2Objects = Hashtable.newFrom({"Cosa1": gdjs.Inicio_322_460Code.GDCosa1Objects2});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Inicio_322_460Code.GDEnemyObjects2});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa2Objects2Objects = Hashtable.newFrom({"Cosa2": gdjs.Inicio_322_460Code.GDCosa2Objects2});
gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Inicio_322_460Code.GDEnemyObjects2});
gdjs.Inicio_322_460Code.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Inicio_322_460Code.GDEnemyObjects2);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDEnemyObjects2[i].getVariableNumber(gdjs.Inicio_322_460Code.GDEnemyObjects2[i].getVariables().get("dir")) == 0 ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDEnemyObjects2[k] = gdjs.Inicio_322_460Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDEnemyObjects2.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDEnemyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Inicio_322_460Code.GDEnemyObjects2);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDEnemyObjects2[i].getVariableNumber(gdjs.Inicio_322_460Code.GDEnemyObjects2[i].getVariables().get("dir")) == 1 ) {
        gdjs.Inicio_322_460Code.condition0IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDEnemyObjects2[k] = gdjs.Inicio_322_460Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDEnemyObjects2.length = k;}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDEnemyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Inicio_322_460Code.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("GJ"), gdjs.Inicio_322_460Code.GDGJObjects2);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
gdjs.Inicio_322_460Code.condition1IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDEnemyObjects2Objects, gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDGJObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Inicio_322_460Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDEnemyObjects2[i].getVariableNumber(gdjs.Inicio_322_460Code.GDEnemyObjects2[i].getVariables().get("dir")) == 0 ) {
        gdjs.Inicio_322_460Code.condition1IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDEnemyObjects2[k] = gdjs.Inicio_322_460Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDEnemyObjects2.length = k;}}
if (gdjs.Inicio_322_460Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDEnemyObjects2[i].returnVariable(gdjs.Inicio_322_460Code.GDEnemyObjects2[i].getVariables().get("dir")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BJ"), gdjs.Inicio_322_460Code.GDBJObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Inicio_322_460Code.GDEnemyObjects2);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
gdjs.Inicio_322_460Code.condition1IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDEnemyObjects2Objects, gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDBJObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Inicio_322_460Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Inicio_322_460Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Inicio_322_460Code.GDEnemyObjects2[i].getVariableNumber(gdjs.Inicio_322_460Code.GDEnemyObjects2[i].getVariables().get("dir")) == 1 ) {
        gdjs.Inicio_322_460Code.condition1IsTrue_0.val = true;
        gdjs.Inicio_322_460Code.GDEnemyObjects2[k] = gdjs.Inicio_322_460Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Inicio_322_460Code.GDEnemyObjects2.length = k;}}
if (gdjs.Inicio_322_460Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Inicio_322_460Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDEnemyObjects2[i].returnVariable(gdjs.Inicio_322_460Code.GDEnemyObjects2[i].getVariables().get("dir")).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa1"), gdjs.Inicio_322_460Code.GDCosa1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Inicio_322_460Code.GDEnemyObjects2);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa1Objects2Objects, gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cosa2"), gdjs.Inicio_322_460Code.GDCosa2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Inicio_322_460Code.GDEnemyObjects2);

gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDCosa2Objects2Objects, gdjs.Inicio_322_460Code.mapOfGDgdjs_46Inicio_95322_95460Code_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{


gdjs.Inicio_322_460Code.condition0IsTrue_0.val = false;
{
gdjs.Inicio_322_460Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Inicio_322_460Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BJ"), gdjs.Inicio_322_460Code.GDBJObjects1);
gdjs.copyArray(runtimeScene.getObjects("GJ"), gdjs.Inicio_322_460Code.GDGJObjects1);
{for(var i = 0, len = gdjs.Inicio_322_460Code.GDBJObjects1.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDBJObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Inicio_322_460Code.GDGJObjects1.length ;i < len;++i) {
    gdjs.Inicio_322_460Code.GDGJObjects1[i].hide();
}
}}

}


};gdjs.Inicio_322_460Code.eventsList22 = function(runtimeScene) {

{


gdjs.Inicio_322_460Code.eventsList2(runtimeScene);
}


{


gdjs.Inicio_322_460Code.eventsList5(runtimeScene);
}


{


gdjs.Inicio_322_460Code.eventsList6(runtimeScene);
}


{


gdjs.Inicio_322_460Code.eventsList7(runtimeScene);
}


{


gdjs.Inicio_322_460Code.eventsList8(runtimeScene);
}


{


gdjs.Inicio_322_460Code.eventsList19(runtimeScene);
}


{


gdjs.Inicio_322_460Code.eventsList20(runtimeScene);
}


{


gdjs.Inicio_322_460Code.eventsList21(runtimeScene);
}


};

gdjs.Inicio_322_460Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Inicio_322_460Code.GDCosa1Objects1.length = 0;
gdjs.Inicio_322_460Code.GDCosa1Objects2.length = 0;
gdjs.Inicio_322_460Code.GDCosa1Objects3.length = 0;
gdjs.Inicio_322_460Code.GDCosa1Objects4.length = 0;
gdjs.Inicio_322_460Code.GDCosa2Objects1.length = 0;
gdjs.Inicio_322_460Code.GDCosa2Objects2.length = 0;
gdjs.Inicio_322_460Code.GDCosa2Objects3.length = 0;
gdjs.Inicio_322_460Code.GDCosa2Objects4.length = 0;
gdjs.Inicio_322_460Code.GDBaseTileObjects1.length = 0;
gdjs.Inicio_322_460Code.GDBaseTileObjects2.length = 0;
gdjs.Inicio_322_460Code.GDBaseTileObjects3.length = 0;
gdjs.Inicio_322_460Code.GDBaseTileObjects4.length = 0;
gdjs.Inicio_322_460Code.GDBarreraCosa1Objects1.length = 0;
gdjs.Inicio_322_460Code.GDBarreraCosa1Objects2.length = 0;
gdjs.Inicio_322_460Code.GDBarreraCosa1Objects3.length = 0;
gdjs.Inicio_322_460Code.GDBarreraCosa1Objects4.length = 0;
gdjs.Inicio_322_460Code.GDBarreraCosa2Objects1.length = 0;
gdjs.Inicio_322_460Code.GDBarreraCosa2Objects2.length = 0;
gdjs.Inicio_322_460Code.GDBarreraCosa2Objects3.length = 0;
gdjs.Inicio_322_460Code.GDBarreraCosa2Objects4.length = 0;
gdjs.Inicio_322_460Code.GDZonaMuerteObjects1.length = 0;
gdjs.Inicio_322_460Code.GDZonaMuerteObjects2.length = 0;
gdjs.Inicio_322_460Code.GDZonaMuerteObjects3.length = 0;
gdjs.Inicio_322_460Code.GDZonaMuerteObjects4.length = 0;
gdjs.Inicio_322_460Code.GDIndicadorCosaObjects1.length = 0;
gdjs.Inicio_322_460Code.GDIndicadorCosaObjects2.length = 0;
gdjs.Inicio_322_460Code.GDIndicadorCosaObjects3.length = 0;
gdjs.Inicio_322_460Code.GDIndicadorCosaObjects4.length = 0;
gdjs.Inicio_322_460Code.GDMetaObjects1.length = 0;
gdjs.Inicio_322_460Code.GDMetaObjects2.length = 0;
gdjs.Inicio_322_460Code.GDMetaObjects3.length = 0;
gdjs.Inicio_322_460Code.GDMetaObjects4.length = 0;
gdjs.Inicio_322_460Code.GDSwitchVerdeObjects1.length = 0;
gdjs.Inicio_322_460Code.GDSwitchVerdeObjects2.length = 0;
gdjs.Inicio_322_460Code.GDSwitchVerdeObjects3.length = 0;
gdjs.Inicio_322_460Code.GDSwitchVerdeObjects4.length = 0;
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects1.length = 0;
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects2.length = 0;
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects3.length = 0;
gdjs.Inicio_322_460Code.GDPuertaVerdeObjects4.length = 0;
gdjs.Inicio_322_460Code.GDNewTileMap2Objects1.length = 0;
gdjs.Inicio_322_460Code.GDNewTileMap2Objects2.length = 0;
gdjs.Inicio_322_460Code.GDNewTileMap2Objects3.length = 0;
gdjs.Inicio_322_460Code.GDNewTileMap2Objects4.length = 0;
gdjs.Inicio_322_460Code.GDEnemyObjects1.length = 0;
gdjs.Inicio_322_460Code.GDEnemyObjects2.length = 0;
gdjs.Inicio_322_460Code.GDEnemyObjects3.length = 0;
gdjs.Inicio_322_460Code.GDEnemyObjects4.length = 0;
gdjs.Inicio_322_460Code.GDBJObjects1.length = 0;
gdjs.Inicio_322_460Code.GDBJObjects2.length = 0;
gdjs.Inicio_322_460Code.GDBJObjects3.length = 0;
gdjs.Inicio_322_460Code.GDBJObjects4.length = 0;
gdjs.Inicio_322_460Code.GDGJObjects1.length = 0;
gdjs.Inicio_322_460Code.GDGJObjects2.length = 0;
gdjs.Inicio_322_460Code.GDGJObjects3.length = 0;
gdjs.Inicio_322_460Code.GDGJObjects4.length = 0;
gdjs.Inicio_322_460Code.GDNewSpriteObjects1.length = 0;
gdjs.Inicio_322_460Code.GDNewSpriteObjects2.length = 0;
gdjs.Inicio_322_460Code.GDNewSpriteObjects3.length = 0;
gdjs.Inicio_322_460Code.GDNewSpriteObjects4.length = 0;
gdjs.Inicio_322_460Code.GDNewSprite2Objects1.length = 0;
gdjs.Inicio_322_460Code.GDNewSprite2Objects2.length = 0;
gdjs.Inicio_322_460Code.GDNewSprite2Objects3.length = 0;
gdjs.Inicio_322_460Code.GDNewSprite2Objects4.length = 0;

gdjs.Inicio_322_460Code.eventsList22(runtimeScene);
return;

}

gdjs['Inicio_322_460Code'] = gdjs.Inicio_322_460Code;
