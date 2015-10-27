/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcryptjs');

module.exports = {

  attributes: {

  	username : {
  		type : 'string' , 
  		unique : true , 
  		required : true 
  	} ,

  	password : { 
  		type : 'string' , 
  		required : true 
  	} ,

    ecode : { 
      type : 'string' , 
      unique : true , 
      required : true 
    } ,

  	ename : {
  		type : 'string' ,
  		required : true 
  	} ,

    dept : {
      type : 'string' ,
      required : false 
    } ,

    desg : {
      type : 'string' ,
      required : false 
    } ,

    doj : {
      type : 'string' ,
      required : false 
    } ,

  	phnum : {
      type : 'string' ,
      required : false       
    } ,

    email : {
      type : 'email' , 
      required : false 
    } ,

    ctc : {
      type : 'string' ,
      required : false       
    } ,

    status : {
      type : 'string' ,
      required : true 
    } ,

  	role : {
  		model : 'role' ,
  	}	,

    dor : {
      type : 'string' ,
      required : false 
    } 

  } ,

  //methods 

  beforeCreate : function (user , cb) {
  	//encrypt password and store
  	var salt = bcrypt.genSaltSync(10);
  	user.password = bcrypt.hashSync(user.password , salt);
  	cb();
  } ,

  comparePassword : function( p1 , p2 , cb){
    bcrypt.compare( p1 , p2 , function(err , res){
      if(err)
        cb(err , null);
      else
        cb(null , res); 
    });

  } //end of comparePassword 

};