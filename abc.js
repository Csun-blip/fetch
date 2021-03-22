
 fetch('https://api.github.com/users/Csun-blip/repos')
.then((res) => res.json().
then((data) => {
    //console.log(data);
    //console.log(data[0]["id"]);



var tableBody= document.querySelector('#table-body'); 

if(data.length== 0)
{
    console.log("no items in the array")

}
else{
    
    
    data.map((item, index) => {
        var trow= tableBody.insertRow(index);
       // console.log(trow);
       var cell0= trow.insertCell(0)
       var cell1= trow.insertCell(1);
       var cell2= trow.insertCell(2);
       var cell3= trow.insertCell(3);
       cell0.innerHTML= item.id;
       cell1.innerHTML= item.name;
       cell2.innerHTML= `<a href= ${item.html_url}>${item.html_url} </a>`;

       cell3.innerHTML= `${item.description}`;
       console.log(item.description)
        // console.log(item.name,item.id,item.html_url);
    })
}
//}
    
}));