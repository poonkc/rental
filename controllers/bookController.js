const http = require("http-status");
const bookmodel = require("../models/bookmodel")


exports.create = async (req, res) => {
    const Book = req.body;
  
    try {
      const BookDoc = new bookmodel(Book);
      await BookDoc.save();
      res.send(Book);
    } catch (error) {
      res.status(http.INTERNAL_SERVER_ERROR).send({
          error : error.message});
    }
  };

  exports.findAll = async (req, res) => {
    try {
      const Book = await bookmodel.find({});
      res.send(Book);
    } catch (error) {
      res.status(http.INTERNAL_SERVER_ERROR).send({
        message: error.message || 'Some error occured while retrieving Books',
      });
    }
  };

  exports.findOne = async (req, res) => {
    try {
      const id = req.params.id;

        const Book = await bookmodel.findById(id);
    //   const Book = await bookmodel.find({$and:[{book_id : req.params.book_id}]});
      res.send(Book);
    } catch (error) {
        res.status(http.INTERNAL_SERVER_ERROR).send({
            error : error.message});
    }
  };

  exports.update = async (req, res) => {
      try{
    const { ...data } = req.body;
    const result = await bookmodel.findOneAndUpdate(
              { _id: req.params.id },
              data);
    res.status(http.OK).send({message : "update success!!"});
      }catch(error){res.status(http.INTERNAL_SERVER_ERROR).send({
        error : error.message});}
  }

  exports.delete = async (req, res) => {
    try {
      await bookmodel.deleteOne({book_id: req.params.id});
  
      res.status(200).send();
    } catch (error) {
      res.status(http.INTERNAL_SERVER_ERROR).send({
        error : error.message});
    }
  };