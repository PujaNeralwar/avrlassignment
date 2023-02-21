
const searchbtn=document.getElementById('searchbtn');
const table2=document.getElementById('table2');

searchbtn.addEventListener('click',getdata());
function getdata(){
    const searchText=document.getElementById('searchInput').value;

fetch("https://python3-dot-parul-arena-2.appspot.com/test?cityname=${searchText}")
.then(res => res.json())
.then(data => {
    console.log(data);
    let li="";
    if(data){
        data.forEach((item) =>{
        li+= `<tr>
        <td>${searchText}</td>
        <td>${data.description}</td>
        <td>${data.temp_in_celsius}</td>
        <td>${data.pressure_in_hPa}</td>
     
        <td>${data.date_and_time}</td>
        <td><button type="submit">Delete</button></td>  
        </tr>
        `;
    });
        } else{
              li="Data not Found";
         }
        table2.innerHtml=li;

     });
}