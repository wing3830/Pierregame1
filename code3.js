gdjs.true2Code = {};
gdjs.true2Code.GDNewSpriteObjects1= [];
gdjs.true2Code.GDNewSpriteObjects2= [];
gdjs.true2Code.GDNewSprite2Objects1= [];
gdjs.true2Code.GDNewSprite2Objects2= [];
gdjs.true2Code.GDNewSprite3Objects1= [];
gdjs.true2Code.GDNewSprite3Objects2= [];
gdjs.true2Code.GDNewSprite4Objects1= [];
gdjs.true2Code.GDNewSprite4Objects2= [];
gdjs.true2Code.GDNewSprite5Objects1= [];
gdjs.true2Code.GDNewSprite5Objects2= [];

gdjs.true2Code.conditionTrue_0 = {val:false};
gdjs.true2Code.condition0IsTrue_0 = {val:false};
gdjs.true2Code.condition1IsTrue_0 = {val:false};
gdjs.true2Code.condition2IsTrue_0 = {val:false};


gdjs.true2Code.mapOfGDgdjs_46true2Code_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.true2Code.GDNewSprite3Objects1});
gdjs.true2Code.eventsList0 = function(runtimeScene) {

{


gdjs.true2Code.condition0IsTrue_0.val = false;
{
gdjs.true2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.true2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.true2Code.GDNewSprite3Objects1);

gdjs.true2Code.condition0IsTrue_0.val = false;
gdjs.true2Code.condition1IsTrue_0.val = false;
{
gdjs.true2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.true2Code.mapOfGDgdjs_46true2Code_46GDNewSprite3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.true2Code.condition0IsTrue_0.val ) {
{
gdjs.true2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.true2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "無名のシーン", false);
}}

}


{


gdjs.true2Code.condition0IsTrue_0.val = false;
{
gdjs.true2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.true2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "斬ってやる.mp3", false, 100, 1);
}}

}


};

gdjs.true2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.true2Code.GDNewSpriteObjects1.length = 0;
gdjs.true2Code.GDNewSpriteObjects2.length = 0;
gdjs.true2Code.GDNewSprite2Objects1.length = 0;
gdjs.true2Code.GDNewSprite2Objects2.length = 0;
gdjs.true2Code.GDNewSprite3Objects1.length = 0;
gdjs.true2Code.GDNewSprite3Objects2.length = 0;
gdjs.true2Code.GDNewSprite4Objects1.length = 0;
gdjs.true2Code.GDNewSprite4Objects2.length = 0;
gdjs.true2Code.GDNewSprite5Objects1.length = 0;
gdjs.true2Code.GDNewSprite5Objects2.length = 0;

gdjs.true2Code.eventsList0(runtimeScene);

return;

}

gdjs['true2Code'] = gdjs.true2Code;
