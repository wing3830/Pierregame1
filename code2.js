gdjs._28961_21517_12398_12471_12540_125312Code = {};
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSpriteObjects1= [];
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSpriteObjects2= [];
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite2Objects1= [];
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite2Objects2= [];
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite3Objects1= [];
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite3Objects2= [];
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite4Objects1= [];
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite4Objects2= [];

gdjs._28961_21517_12398_12471_12540_125312Code.conditionTrue_0 = {val:false};
gdjs._28961_21517_12398_12471_12540_125312Code.condition0IsTrue_0 = {val:false};
gdjs._28961_21517_12398_12471_12540_125312Code.condition1IsTrue_0 = {val:false};
gdjs._28961_21517_12398_12471_12540_125312Code.condition2IsTrue_0 = {val:false};


gdjs._28961_21517_12398_12471_12540_125312Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_95125312Code_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite3Objects1});
gdjs._28961_21517_12398_12471_12540_125312Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_95125312Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSpriteObjects1});
gdjs._28961_21517_12398_12471_12540_125312Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_95125312Code_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite2Objects1});
gdjs._28961_21517_12398_12471_12540_125312Code.eventsList0 = function(runtimeScene) {

{


gdjs._28961_21517_12398_12471_12540_125312Code.condition0IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_125312Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._28961_21517_12398_12471_12540_125312Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "お前は俺の所有物だ2.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite3Objects1);

gdjs._28961_21517_12398_12471_12540_125312Code.condition0IsTrue_0.val = false;
gdjs._28961_21517_12398_12471_12540_125312Code.condition1IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_125312Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._28961_21517_12398_12471_12540_125312Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_95125312Code_46GDNewSprite3Objects1Objects, runtimeScene, true, false);
}if ( gdjs._28961_21517_12398_12471_12540_125312Code.condition0IsTrue_0.val ) {
{
gdjs._28961_21517_12398_12471_12540_125312Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._28961_21517_12398_12471_12540_125312Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "お前は俺の所有物だ23.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSpriteObjects1);

gdjs._28961_21517_12398_12471_12540_125312Code.condition0IsTrue_0.val = false;
gdjs._28961_21517_12398_12471_12540_125312Code.condition1IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_125312Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._28961_21517_12398_12471_12540_125312Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_95125312Code_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs._28961_21517_12398_12471_12540_125312Code.condition0IsTrue_0.val ) {
{
gdjs._28961_21517_12398_12471_12540_125312Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._28961_21517_12398_12471_12540_125312Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "true2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite2Objects1);

gdjs._28961_21517_12398_12471_12540_125312Code.condition0IsTrue_0.val = false;
gdjs._28961_21517_12398_12471_12540_125312Code.condition1IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_125312Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._28961_21517_12398_12471_12540_125312Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_95125312Code_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
}if ( gdjs._28961_21517_12398_12471_12540_125312Code.condition0IsTrue_0.val ) {
{
gdjs._28961_21517_12398_12471_12540_125312Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._28961_21517_12398_12471_12540_125312Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "true", false);
}}

}


};

gdjs._28961_21517_12398_12471_12540_125312Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSpriteObjects1.length = 0;
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSpriteObjects2.length = 0;
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite2Objects1.length = 0;
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite2Objects2.length = 0;
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite3Objects1.length = 0;
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite3Objects2.length = 0;
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite4Objects1.length = 0;
gdjs._28961_21517_12398_12471_12540_125312Code.GDNewSprite4Objects2.length = 0;

gdjs._28961_21517_12398_12471_12540_125312Code.eventsList0(runtimeScene);

return;

}

gdjs['_28961_21517_12398_12471_12540_125312Code'] = gdjs._28961_21517_12398_12471_12540_125312Code;
