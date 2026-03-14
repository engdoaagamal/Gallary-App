const img = require("../model/img_model");

const {createimgSchema, updateimgSchema}=require("../validated/validate_img")

const Create_img = async (req, res) => {
        const { error, value } = createimgSchema.validate(req.body,{
      abortEarly: false,
      stripUnknown: true,
    });
        if (error) return res.status(400).json({ message: error.details[0].message });

      
if (!req.file)
    return res.status(400).json({ message: "image is required" });

  const newimg = await img.create({
    title: value.title,
    image: req.file.filename
  });
        



      

      if(newimg)
        res.status(201).json({
            msg: "creating img success",
            data: newimg
        });

    
}

const gat_All_img = async (req, res) => {
    try {

        const Allimg = await img.find();
       
        if (Allimg.length === 0) return res.status(400).json({
            msg: "no  data exist",

        })


        res.status(200).json({
            msg: "Allimg fetched successfully",
            data: Allimg
        })


    } catch (error) {
        res.status(500).json({
            msg: "error in the server  ....Allimg ",
            error: error.message
        })
    }

}


const gat_one_img = async (req, res) => {

    try {

        const oneimg = await img.findById(req.params.id);

        if (!oneimg) return res.status(404).json({
            msg: "no  img with this id  exist",

        })


        res.status(200).json({
            msg: "oneimg fetched successfully",
            data: oneimg
        })


    } catch (error) {
        res.status(500).json({
            msg: "error in the server  ....oneimg ",
            error: error.message
        })
    }

}



const update_img = async (req, res) => {
try {
       const { error, value } = updateimgSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

      //  const { title, image } = value;

        
       const updateimg = await img.findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                image: req.file.filename,
                
            }
        }, { new: true });

        if (!updateimg)
            return res.status(404).json({ msg: "img not found" })

        res.status(200).json({
            msg: "updating img success",
            data: updateimg
        });
} catch (error) {
    
 res.status(500).json({
            msg: "error in the server  ....oneimg ",
            error: error.message
        })
}
  
      
    
}

const delete_img =async (req, res) => {
    try {
         const  deleteimg=  await img.findByIdAndDelete(req.params.id);
        if (!deleteimg) 
      return res.status(404).json({ msg: "img not found" })
 
    
       return res.status(200).json({
            msg: "deleting img success",
            data: deleteimg
        });

    } catch (error) {
         res.status(500).json({
            msg: "error in the server  ....oneimg ",
            error: error.message
        })
    }
}
    

module.exports = {
  Create_img,
    gat_All_img,
    gat_one_img,
    update_img,
    delete_img
}