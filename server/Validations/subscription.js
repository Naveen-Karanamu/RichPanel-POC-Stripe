import joi from "joi";

export const creditCardNo=(userData)=>{
    const Schema= joi.object({
        price:joi.string(),
        videoQuality:joi.string(),
        resolution:joi.string(),
        planType:joi.string(),
        planName:joi.string(),
        devices:joi.array(),
        screens:joi.number(),

    })

    return Schema.validateAsync(userData);
}