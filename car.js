AFRAME.registerComponent("car",{
    schema:{
      modelRef:{type:"string",default:"C:/Users/vikas/Downloads/PRO-C151 project/PRO-C151-Student-Activity-main/PRO-C151-Student-Activity-main/assets/aston_martin_valhalla_2023/scene.gltf"}
    },
    init: function () {
      this.el.setAttribute("gltf-model",this.data.modelRef);
      const position={x:0,y:50,z:80};
      const rotation={x:0,y:-100,z:0};
      this.el.setAttribute("position",position);
      this.el.setAttribute("rotation",rotation);
      }
  });