const http = require("http-status");
const receiptmodel = require("../models/recepitmodel")
const rentModel = require("../models/rentmodel")
const bookModel = require("../models/bookmodel")

  exports.create = async (req, res) => {
    const receipt = req.body;
    const date2 = new Date(req.body.in);
    try {
        const rental = await rentModel.findById({_id : req.body.rent});
        const date1 = new Date(rental.out)
        if(!rental){
            return res.status(404).json({
                message: "Rent not found"
            });
        }
        var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
        console.log(rental)
        if(diffDays <= 3){
            receipt.price = 0
        }else{
            receipt.price = (diffDays)*20
        }

        const book = await bookModel.findById({_id : rental.book});

        const available = (book.available) + 1;
        await bookModel.findByIdAndUpdate({ _id: rental.book }, {available: available});

        const addreceipt = new receiptmodel(receipt);

      await addreceipt.save();

      res.status(http.OK).send({receipt});
    } catch (error) {
      res.status(http.INTERNAL_SERVER_ERROR).send({
          error : error.message});
    }
  };