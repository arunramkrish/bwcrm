/**
* Project.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	projname : {
  		type : 'string' ,
  		required : true  , 
      unique : true 
  	} ,

  	projtype : {
  		type : 'string' ,
      required : true  , 
  	} , 

    cust : {
      model : 'customer' ,
      required : false 
    } ,

    custname : {
      type : 'string' ,
      required : true  , 
    } ,     

    description : { 
      type : 'string' ,
      required : false
    } ,

    startdate : {
      type : 'string' ,
      required : false 
    } ,

    enddate : {
      type : 'string' ,
      required : false 
    } ,

    addr : {
      type : 'string' ,
      required : false 
    } ,

    buildstage : {
      type : 'string' ,
      required : false 
    } 

  }
  
};