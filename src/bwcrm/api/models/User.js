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
      required : false
    } ,

   // loginid : {
  //		type : 'string' , 
  	//	unique : true , 
  		//required : false
  //	} ,

  	password : { 
  		type : 'string' , 
  		required : true 
  	} ,

  	ecode : {
  		type : 'string' ,
  		required : false
  	} ,

  	ename : { 
  	type : 'string' ,
  	required : false 
  	} ,

  	doj : {
  		type : 'string' , 
  		required : false 
  	} ,

  	role : {
  		model : 'role' ,
      required : false 
  	} ,

  	dept : {
  		type : 'string' ,
  		required : false  
  	} ,
    
    desg : {
      type : 'string' ,
      required : false  
    } ,

    ctc : {
      type : 'integer' ,
      required : false  
    } ,

    dor : {
      type : 'string' ,
      required : false  
    } ,
    
    status : {
      type : 'string' ,
      required : false  
    } ,

  	contnum : {
  		type : 'integer' ,
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

