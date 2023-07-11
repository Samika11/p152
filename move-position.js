AFRAME.registerComponent("move",{
    schema:{
        clickCounter:{type:"number",default:1}
    },
    tick:function(){
        var pos=this.el.getAttribute("position");
        this.data.clickCounter=this.data.clickCounter+0.01;
        pos.y=this.data.clickCounter;
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})
AFRAME.registerComponent("count-clicks",{
    schema:{
        clickCounter:{type:"number",deafult:0}
    },
    update:function(){
        window.addEventListener("click",(e)=>{
            this.data.clickCounter=this.data.clickCounter+1;
        if (this.data.clickCounter===1){
            const rotation= {x:0,y:20,z:0};
            this.el.setAttribute("rotation",rotation)
        } else if(this.data.clickCounter===2)
        {
            const rotation={x:0,y:10,x:0}
        }
        var pos=this.el.getAttribute("position");
        pos.y=pos.y+this.data.clickCounter;
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    })}
})