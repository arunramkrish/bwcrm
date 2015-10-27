
//access all number fields in a page 
var in_arr = document.getElementsByTagName('input') ; for(var i in in_arr ) {  if( in_arr[i].type !== undefined ) { if( in_arr[i].type.localeCompare('number') === 0 )console.log(in_arr[i].type); } } 