const img=require("../controller/img")
const routers=require("express").Router();
const  uploadImage=require("../model/middleware/img_middleware")
routers.post ("/addimg",uploadImage,img.Create_img);
routers.get ("/getall",img.gat_All_img);
routers.get("/getoneimg/:id", img.gat_one_img);

routers.put("/updateimg/:id",uploadImage,img.update_img)
routers.delete("/deleteimg/:id",img.delete_img)
module.exports=routers;
