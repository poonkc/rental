const http = require("http-status");
const usermodel = require("../models/usermodel")

exports.create = async (req, res) => {
    const user = req.body;
  
    try {
      const userDoc = new usermodel(user);
      await userDoc.save();
      res.send(user);
    } catch (error) {
      res.status(http.INTERNAL_SERVER_ERROR).send({
          error : error.message});
    }
  };

  exports.login = async (req, res) => {
    const id = req.params.id;
    const username = req.body.username
    const password = req.body.password
    try {
      const user = await usermodel.findById(id)
      if(user.username == username && user.password == password){
        return res.status(http.OK).send({message : "login success!!"});
      }else{
        return res.status(http.INTERNAL_SERVER_ERROR).send({message : "username or password incorrect!!"});
      }
    } catch (error) {
      res.status(http.INTERNAL_SERVER_ERROR).send({
          error : error.message});
    }
  };
