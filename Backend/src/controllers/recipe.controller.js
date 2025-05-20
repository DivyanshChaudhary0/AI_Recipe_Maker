
import generateIngredients from "../services/google.service.js";

export const generateRecipe = async (req,res) => {
    try{
        const { data } = req.body;
        if(!Array.isArray(data)) {
            return res.status(400).json({
                message: "Data is not valid"
            });
        }

        const response = await generateIngredients(data);

        res.status(200).json({
            message: "Recipe generated",
            recipe: response
        })

    }
    catch(err){
        res.status(500).json({
            error: err.message,
            message: "Internal server error"
        })
    }
}
