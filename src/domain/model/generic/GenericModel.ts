export class GenericModel{

    constructor(object = {}) {
       
        if(object != undefined){
            var keyNames = Object.keys(object);        
            for (var i = 0; i < keyNames.length; i++ ){ 
                    var field = keyNames[i];
                    this[field] = object[field] != undefined ? object[field] : '';
            }
        }
    }

    getUrl() : String{
        throw new Error("Get url not implemented");
    }
<<<<<<< HEAD

    getFiltro(){
        
    };
=======
>>>>>>> 1f71801189505974f1a58d93f21732b6c46f4b02
}