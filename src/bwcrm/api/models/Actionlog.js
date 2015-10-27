/**
* Customer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
/*  	cid : {
      type : 'integer',
      required : true
    } ,
*/
  custname : {
  		type : 'string' ,   		
  		required : true 
  	} ,

    projname : {
      type : 'string' ,       
      required : true 
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
    },
    
     ftype : {
      type : 'string' ,
      required : false 
    },
    fudate : {
      type : 'string' ,
      required : false 
    },
    nfudate : {
      type : 'string' ,
      required : false 
    },
    st : {
      type : 'string' ,
      required : false 
    },
     rm : {
      type : 'string' ,
      required : false 
    }
     
     
     
     

  } /*,

  getNextID : function (nextid) {
    var seq = findAndModify({
      query : {cid : seq},
      update : {$inc : {cid : 1}},
      new : true
    });
    return seq.cid;
  } */  
};