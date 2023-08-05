import joi from "joi";

export const creditCardNo=(userData)=>{
    const Schema= joi.object({
        no:joi.Number().required().min(15),
    })

    return Schema.validateAsync(userData);
}