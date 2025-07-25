const deleteData=document.getElementById("clearDataBtn");
deleteData.addEventListener("click",()=>{
    //remove favorites stored data
    localStorage.removeItem("favorites");
    //remove gallery collection data
    localStorage.removeItem("galleryCollection");
    alert("All locally stored data deleted successfully");
})