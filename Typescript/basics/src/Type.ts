const info =(val : string | number)=>{
    if(typeof val ==='string'){
        return val.toLowerCase();
    }
    return val+100
}