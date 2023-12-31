import joi from "joi";

export const validateSignUp=(userData)=>{
    const Schema= joi.object({
        fullname:joi.string().required().min(5),
        email:joi.string().email().required(),
        password: joi.string().min(5),
    })

    return Schema.validateAsync(userData);
}

export const validateSignIn=(userData)=>{
    const Schema= joi.object({
        email:joi.string().email().required(),
        password: joi.string().min(5).required()
    })

    return Schema.validateAsync(userData);
}