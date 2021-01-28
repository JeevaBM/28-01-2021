/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Userservice = require("../services/Userservice");

module.exports = {
    listUsers:function(req,res){
        return Userservice.listUsers();
    },
    findUserById:function(req,res){
        return Userservice.findUserById(req,res);
    },
    addUser:function(req,res){
        return Userservice.addUser(req,res);
    },
    editUser:function(req,res){
        return Userservice.editUser(req,res);
    },
    dropUser:function(req,res){
        return Userservice.dropUser(req,res);
    },
    csv:function(req,res){
        return Userservice.csv(req,res);
    }
    

};

