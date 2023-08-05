import joi from "joi";

export const creditCardNo=(userData)=>{
    const Schema= joi.object({
        no:joi.number().required().max(16),
        price:joi.string(),
        v_quality:joi.string(),
        resolution:joi.string(),
        devices:joi.array(),
        screens:joi.number(),

    })

    return Schema.validateAsync(userData);
}