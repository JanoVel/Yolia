var gdjs;(function(t){const p=new t.Logger("Tilemap object");class c{constructor(i,e){this._object=i,this._runtimeScene=e,this._pixiObject=new PIXI.tilemap.CompositeRectTileLayer(0),this._pixiObject.tileAnim=[0,0],e.getLayer("").getRenderer().addRendererObject(this._pixiObject,i.getZOrder()),this.updateAngle(),this.updateOpacity(),this.updatePosition()}getRendererObject(){return this._pixiObject}incrementAnimationFrameX(i){this._pixiObject.tileAnim[0]+=1}updatePixiTileMap(i,e){TileMapHelper.PixiTileMapHelper.updatePixiTileMap(this._pixiObject,i,e,this._object._displayMode,this._object._layerIndex)}updatePosition(){const i=this._pixiObject.width/this._pixiObject.scale.x,e=this._pixiObject.height/this._pixiObject.scale.y;this._pixiObject.pivot.x=i/2,this._pixiObject.pivot.y=e/2,this._pixiObject.position.x=this._object.x+this._pixiObject.width/2,this._pixiObject.position.y=this._object.y+this._pixiObject.height/2}updateAngle(){this._pixiObject.rotation=t.toRad(this._object.angle)}updateOpacity(){this._pixiObject.alpha=this._object._opacity/255}setWidth(i){this._pixiObject.width=i/this._pixiObject.scale.x,this._pixiObject.pivot.x=i/2,this.updatePosition()}setHeight(i){this._pixiObject.height=i/this._pixiObject.scale.y,this._pixiObject.pivot.y=i/2,this.updatePosition()}getWidth(){return this._pixiObject.width}getHeight(){return this._pixiObject.height}}t.TileMapRuntimeObjectPixiRenderer=c,t.TileMapRuntimeObjectRenderer=t.TileMapRuntimeObjectPixiRenderer})(gdjs||(gdjs={}));
//# sourceMappingURL=tilemapruntimeobject-pixi-renderer.js.map