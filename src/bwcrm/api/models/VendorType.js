/**
* VendorType.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	ventypeid : {
  		type : 'string' , 
  		unique : true , 
  		required : true 
  	} ,

  	ventypename : { 
  		type : 'string' , 
  		required : true 
  	}   	

  } 

};