/**
* Customer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    cust : {
      model : 'customer' ,
      required : false 
    } ,

    custname : {
      type : 'string' ,
      required : true  , 
    } , 


    proj : {
      model : 'project' ,
      required : true  , 
    } ,

    projname : {
      type : 'string' ,
      required : true  , 
    } ,

    requi : {
      model : 'requ' ,
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

    updatedby : {
      model : 'user' ,
      required : false 
    } ,    

    mexec : {
      type : 'string' ,
      required : false 
    },

    updby : {
      type : 'string' ,
      required : false 
    } ,

    fudate : {
      type : 'string' ,
      required : false 
    }     

  } 

};