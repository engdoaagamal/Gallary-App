const joi = require("joi")
const createimgSchema = joi.object({
    title: joi.string().trim().required()
   
}

)
const updateimgSchema = joi.object({
    title: joi.string().trim().required()
    
   
}

)
module.exports={
    createimgSchema
    ,
    updateimgSchema
}