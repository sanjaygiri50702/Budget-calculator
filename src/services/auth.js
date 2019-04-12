function checkAuth(){
    var id = window.localStorage.getItem('_id');
    if(id){
        return id;
    }
    return null;
}
function Logout(){
    localStorage.removeItem('_id')
}

export {
     checkAuth,
     Logout
}

