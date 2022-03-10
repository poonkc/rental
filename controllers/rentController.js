const http = require("http-status");
const rentmodel = require("../models/rentmodel")
const bookModel = require("../models/bookmodel")
const {ObjectId} = require('mongodb');
// const rentController = {

  exports.create = async (req, res) => {
    const rent = req.body;
    try {
        const bookRent = await bookModel.findById({_id : req.body.book});
        if(bookRent.available < 1){
          return res.status(400).send('The number of books in the library is less than 1 book');
        }
        const available = (bookRent.available) - 1;
        console.log(available)
        await bookModel.findByIdAndUpdate({ _id: req.body.book }, {available: available});
    //   const addRent = new rentmodel({rent,book: req.book._id,out: Date.now()});
      const addRent = new rentmodel(rent);

      await addRent.save();
      // await historyModel.save();
      res.status(http.OK).send({rent});
    } catch (error) {
      res.status(http.INTERNAL_SERVER_ERROR).send({
          error : error.message});
    }
  };

  exports.findAll = async (req, res) => {
    try {
      const rent = await rentmodel.aggregate([
        {
          '$lookup': {
            'from': 'books', 
            'localField': 'book', 
            'foreignField': '_id', 
            'as': 'book'
          }
        }, {
          '$unwind': {
            'path': '$book', 
            'includeArrayIndex': 'arrayIndex'
          }
        }
      ])
      res.send(rent);
    } catch (error) {
      res.status(http.INTERNAL_SERVER_ERROR).send({
        message: error.message || 'Some error occured while retrieving Books',
      });
    }
  };

  exports.findbyuserID = async (req, res) => {
    try {
      const id = req.params.id;

      const rent = await rentmodel.aggregate(
        [
          {
            '$lookup': {
              'from': 'books', 
              'localField': 'book', 
              'foreignField': '_id', 
              'as': 'book'
            }
          }, {
            '$unwind': {
              'path': '$book', 
              'includeArrayIndex': 'arrayIndex'
            }
          }, {
            '$match': {
              'user': new ObjectId(id)
            }
          }
        ]
        )
      res.send(rent);
    } catch (error) {
      res.status(http.INTERNAL_SERVER_ERROR).send({
        message: error.message || 'Some error occured while retrieving Books',
      });
    }
  };
