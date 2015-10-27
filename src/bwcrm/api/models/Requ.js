/**
* Project.js
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

   	reqtype : {
      type : 'string' ,
      required : true        
    } ,

    measureqty : { 
      type : 'string' ,
      required : false
    } ,

    approx : { 
      type : 'string' ,
      required : false
    } ,
    reqdate : { 
      type : 'string' ,
      required : false
    } ,
    remarks : {
      type : 'string' ,
      required : false 
    } ,
    status : {
      type : 'string' ,
      required : false 
    } 


     }
  
};