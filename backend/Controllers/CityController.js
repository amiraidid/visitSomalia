import City from "../models/cityModel.js";

export const getAll = async(req, res) => {
    try {
        const city = await City.find({});
        res.status(200).json({found: city.length, cities: city})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

export const getPlace = async(req, res) => {
    const { name } = req.params
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    try {
        const result = await City.findOne({name: formattedName})
        if (result) {
            res.status(200).json({place: result})
        }else {
            res.status(404).json({message: `Unable to find ${formattedName}`})
        }
    } catch (error) {
        res.status(500).json({message: `An unexpected error occurred`})
    }
}

export const regions = async (req, res) => {
    const { region } = req.params;
    const formattedRegion = region ? region.charAt(0).toUpperCase() + region.slice(1) : '';
    
    if (!formattedRegion) {
        return res.status(400).json({ message: "Region parameter is missing or invalid" });
    }

    try {
        const result = await City.find({ region: formattedRegion });

        if (!result || result.length === 0) {
            return res.status(404).json({ message: `No places found in region ${formattedRegion}` });
        }

        res.status(200).json({ found: result.length, regions: result });
    } catch (error) {
        res.status(500).json({ message: "An unexpected error occurred", error: error.message });
    }
};

