/**
* Role.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	title : {
  		type : 'string' ,
  		required : true  , 
      unique : true 
  	} ,

  	description : {
  		type : 'string'
  	} , 

    user : { 
      model : 'user'
    } ,

    master : {
      type : 'array'
    } ,

    usermanagement : {
      type : 'array'
    } ,

    customer : {
      type : 'array'
    } ,

    project : {
      type : 'array'
    } ,

    report : {
      type : 'array'
    } ,

    contact : {
      type : 'array'
    }     
    
  }
};