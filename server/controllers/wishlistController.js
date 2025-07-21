import Wishlist from "../models/Wishlist.js";

export const getWishlist = async (req, res) => {
    try {
        const userId = req?.user?._id
        const wishlist = await Wishlist.findOne({ userId: userId }, 'futsals').populate('futsals'
            // ,"name image"  //columns control
        )
        return res.status(200).json({
            status: 'success',
            message: "Wishlist fetched successfully",
            data: wishlist?.futsals || []
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting users wishlist",
        });
    }
};


export const addWishlist = async (req, res) => {
    try {
        const { futsalId } = req.params;
        const userId = req?.user?._id
        const wishlist = await Wishlist.findOne({ userId: userId })
        req.body.userId = userId
        let list = []

        //validations
        if (!futsalId) {
            return res.send({ error: "Please select a futsal to add" });
        }

        if (wishlist) {
            list = wishlist?.futsals
            if (list.includes(futsalId)) {
                return res.status(409).json({
                    status: 'failed',
                    message: 'Futsal already in the wishlist'
                })
            }
            // list.push(productId)
            const wish = await Wishlist.findByIdAndUpdate(wishlist?._id, {
                $push: { futsals: futsalId }
            })
            return res.status(201).json({
                status: 'success',
                message: "Added to wishlist"
            })
        } else {
            list.push(futsalId)
            const wish = new Wishlist({
                userId: userId,
                futsals: list
            }).save()
            return res.status(201).json({
                status: 'success',
                message: "Added to wishlist",
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while adding to wishlist",
            error
        });
    }
};

export const removeWishlist = async (req, res) => {
    try {
        const { futsalId } = req.params;
        const userId = req?.user?._id
        const wishlist = await Wishlist.findOne({ userId: userId })
        req.body.userId = userId
        let list = []
        //validations
        if (!futsalId) {
            return res.send({ error: "Please select a product to remove" });
        }

        if (wishlist) {
            list = wishlist?.futsals

            const newList = list?.filter((f)=> f.id_pack != futsalId)

            if (!list.includes(futsalId)) {
                return res.status(409).json({
                    status: 'failed',
                    message: 'Futsal is not in the wishlist'
                })
            }
            // list.push(productId)
            const wish = await Wishlist.findByIdAndUpdate(wishlist?._id, {
                products:newList
            })
            return res.status(201).json({
                status: 'success',
                message: "Removed from wishlist"
            })
        } else {
            return res.status(400).json({
                status: 'failed',
                message: "No futsal in the wishlist",
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while adding to wishlist",
            error
        });
    }
};