/**
* Customer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    cid : {
      type : 'string',
      required : true
    } ,

    custname : {
  		type : 'string' ,   		
  		required : true 
  	} ,

    custtype : {
      type : 'string' ,       
      required : true 
    } ,    

  	phnum : {
      type : 'string' ,
      required : true       
    } ,

    addr : {
      type : 'string' ,
      required : false 
    } ,

    locality : {
      type : 'string' ,
      required : false 
    } ,

    pincode : {
      type : 'string' ,
      required : false 
    } ,

    salesexec : {
      model : 'user' ,
      required : false 
    } ,

    markexec : {
      model : 'user' ,
      required : false 
    } ,

    sexec : {
      type : 'string' ,
      required : false 
    } ,

    mexec : {
      type : 'string' ,
      required : false 
    } 

  }

};