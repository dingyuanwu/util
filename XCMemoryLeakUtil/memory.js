/*
*create by dingyuanwu at 2017.09.13
*/
'use strict';

const heapdump = require('heapdump'); 

function showMemory() {  
    (v) => {  
       if (v < 1024) return v.toString(10);  
       else if (v < 1048576) {    
           return (v / 1024).toFixed(2) + "KB";  
       }  
       else if (v < 1073741824) 
       {  
           return (v / 1048576).toFixed(2) + "MB";  
       }  
       else {  
           return (v / 1073741824).toFixed(2) + "GB";   
       }  
   }    
   heapdump.writeSnapshot('./heapdump/' + Date.now() +'.heapsnapshot'); 
}  
 

function saveHeapSnapShotStatus(times){  
    showMemory();
    let id = setInterval(showMemory, 5000);
    
    setTimeout(() => {
      clearInterval(id);
    }, times * 5000);
}


module.exports = {
    saveHeapSnapShotStatus,
};