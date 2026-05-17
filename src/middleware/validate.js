// import { error } from "node:console"
// import { abort } from "node:process"

// const validate=(schema)=>(req,res,next)=>{
//     const {error}=schema.validate(req.body,{abortEarly:false})

//     if(error){
//         return res.status(400).json({
//             success:false,
//             error:error
//         })
//     }
// }

// export{
//    validate
// }
const validate = (schema) => (req, res, next) => {
    if (!schema || typeof schema.validate !== "function") {
        return res.status(500).json({
            success: false,
            message: "Invalid schema"
        })
    }

    const { error } = schema.validate(req.body, {
        abortEarly: false
    })

    if (error) {
        return res.status(400).json({
            success: false,
            error: error.details.map(err => err.message)
        })
    }

    next()
}

export { validate }