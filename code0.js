gdjs._28961_21517_12398_12471_12540_12531Code = {};
gdjs._28961_21517_12398_12471_12540_12531Code.GDNewSpriteObjects1= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDNewSpriteObjects2= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDbuttonObjects1= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDbuttonObjects2= [];

gdjs._28961_21517_12398_12471_12540_12531Code.conditionTrue_0 = {val:false};
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0 = {val:false};
gdjs._28961_21517_12398_12471_12540_12531Code.condition1IsTrue_0 = {val:false};
gdjs._28961_21517_12398_12471_12540_12531Code.condition2IsTrue_0 = {val:false};


gdjs._28961_21517_12398_12471_12540_12531Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_9512531Code_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs._28961_21517_12398_12471_12540_12531Code.GDbuttonObjects1});
gdjs._28961_21517_12398_12471_12540_12531Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs._28961_21517_12398_12471_12540_12531Code.GDbuttonObjects1);

gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
gdjs._28961_21517_12398_12471_12540_12531Code.condition1IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._28961_21517_12398_12471_12540_12531Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_9512531Code_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val ) {
{
gdjs._28961_21517_12398_12471_12540_12531Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._28961_21517_12398_12471_12540_12531Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.random(1));
}}

}


{


gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "無名のシーン1", false);
}}

}


{


gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "無名のシーン2", false);
}}

}


};

gdjs._28961_21517_12398_12471_12540_12531Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._28961_21517_12398_12471_12540_12531Code.GDNewSpriteObjects1.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDNewSpriteObjects2.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDbuttonObjects1.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDbuttonObjects2.length = 0;

gdjs._28961_21517_12398_12471_12540_12531Code.eventsList0(runtimeScene);

return;

}

gdjs['_28961_21517_12398_12471_12540_12531Code'] = gdjs._28961_21517_12398_12471_12540_12531Code;
