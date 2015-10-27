/**
* Project.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    
    // cust : {
    //   model : 'customer' ,
    //   required : false 
    // } ,

    // custname : {
    //   type : 'string' ,
    //   required : true  , 
    // } , 


    // proj : {
    //   model : 'project' ,
    //   required : true  , 
    // } ,

    // projname : {
    //   type : 'string' ,
    //   required : true  , 
    //    } ,
  	ctype : {
      type : 'string' ,
      required : false        
    } ,

    cname : { 
      type : 'string' ,
      required : true
    } ,

   caddr1 : { 
      type : 'string' ,
      required : false
    } ,
    caddr2 : { 
      type : 'string' ,
      required : false
    } ,

    loc : {
      type : 'string' ,
      required : false 
    } ,

  trc : {
      type : 'string' ,
      required : false 
    } ,

   lnum : {
      type : 'string' ,
      required : false 
    } ,

   mnum : {
      type : 'string' ,
      required : false 
    } ,

   email : {
      type : 'string' ,
      required : false 
    } 

     }
  
};