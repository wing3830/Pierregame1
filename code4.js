gdjs.trueCode = {};
gdjs.trueCode.GDNewSpriteObjects1= [];
gdjs.trueCode.GDNewSpriteObjects2= [];
gdjs.trueCode.GDNewSprite2Objects1= [];
gdjs.trueCode.GDNewSprite2Objects2= [];
gdjs.trueCode.GDNewSprite3Objects1= [];
gdjs.trueCode.GDNewSprite3Objects2= [];

gdjs.trueCode.conditionTrue_0 = {val:false};
gdjs.trueCode.condition0IsTrue_0 = {val:false};
gdjs.trueCode.condition1IsTrue_0 = {val:false};
gdjs.trueCode.condition2IsTrue_0 = {val:false};


gdjs.trueCode.mapOfGDgdjs_46trueCode_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.trueCode.GDNewSprite3Objects1});
gdjs.trueCode.eventsList0 = function(runtimeScene) {

{


gdjs.trueCode.condition0IsTrue_0.val = false;
{
gdjs.trueCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.trueCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.trueCode.GDNewSprite3Objects1);

gdjs.trueCode.condition0IsTrue_0.val = false;
gdjs.trueCode.condition1IsTrue_0.val = false;
{
gdjs.trueCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.trueCode.mapOfGDgdjs_46trueCode_46GDNewSprite3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.trueCode.condition0IsTrue_0.val ) {
{
gdjs.trueCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.trueCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "無名のシーン", false);
}}

}


{


gdjs.trueCode.condition0IsTrue_0.val = false;
{
gdjs.trueCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.trueCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "好きにな.mp3", false, 100, 1);
}}

}


};

gdjs.trueCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.trueCode.GDNewSpriteObjects1.length = 0;
gdjs.trueCode.GDNewSpriteObjects2.length = 0;
gdjs.trueCode.GDNewSprite2Objects1.length = 0;
gdjs.trueCode.GDNewSprite2Objects2.length = 0;
gdjs.trueCode.GDNewSprite3Objects1.length = 0;
gdjs.trueCode.GDNewSprite3Objects2.length = 0;

gdjs.trueCode.eventsList0(runtimeScene);

return;

}

gdjs['trueCode'] = gdjs.trueCode;
