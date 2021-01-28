const Users = require("../models/Users.js");
const user=require("../models/Users.js");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var upload = multer().single('avatar')
var fs=require('fs');
var csv=require('csv-parser');

module.exports={
     
    listUsers:async function(req,res){
        await Users.findAll({order:sequelize.literal('id ASC')}).exec(function(err,data) {
            if (err) return res.serverError(err);
            if (!data) return res.notFound();
            res.json(data);
           
          })
        
    },
    findUserById:async function(req,res){
         await Users.findOne({ where: { id:req.params.id}}).exec(function(err,data) {
            if (err) return res.serverError(err);
            if (!data) return res.notFound();
            res.json(data);
           
          })
         
             
    },
    addUser:async function(req,res){
        const {name,user_name,password,email_id,role,gender,contact_number,school_name,class_name}=req.body;
        await Users.create({name:name,user_name:user_name,password:password,role:role,gender:gender,email_id:email_id,contact_number:contact_number,school_name:school_name,class_name:class_name}).exec(function(err,data) {
            if (err) return res.serverError(err);
            if (!data) return res.notFound();
            res.json(data);
        })
    },
    editUser:async function(req,res){
                    const input_from_body={};
                        if(req.body.name)
                        {
                          input_from_body.name=req.body.name;
                        } 
                        if(req.body.user_name)
                        {
                          input_from_body.user_name=req.body.user_name;
                        }
                        if(req.body.password)
                        {
                          input_from_body.password=req.body.password;
                        } 
                        if(req.body.gender)
                        {
                          input_from_body.gender=req.body.gender;
                        }
                        if(req.body.email_id)
                        {
                          input_from_body.email_id=req.body.email_id;
                        }     
                        if(req.body.contact_number)
                        {
                          input_from_body.contact_number=req.body.contact_number;
                        }
                        if(req.body.school_name)
                        {
                          input_from_body.school_name=req.body.school_name;
                        }
                        if(req.body.class_name)
                        {
                          input_from_body.class_name=req.body.class_name;
                        }
                      
           await Users.updateOne({ id: req.params.id }).set(input_from_body).exec(function(err,data) {
            if (err) return res.serverError(err);
            if (!data) return res.notFound();
            res.json(data);
           
          })
        
    },
    dropUser:async function(req,res){
        var destroyedRecord = await Users.destroyOne({id:req.params.id});  
        res.json( destroyedRecord)                      
    },
    csv:function(req,res){
        input=[];
        req.file('csv_file').upload({
            adapter: require('skipper-csv'),
            csvOptions: {delimiter: ',', columns: true},
            rowHandler: function(row, fd){
                input.push(row);
                input.forEach(data =>{
                    Users.create(data);
                })
             }
          })

    }
    
    
}
     
