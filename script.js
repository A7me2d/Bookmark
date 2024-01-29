
var productName = document.getElementById('pName');
var categoryInut = document.getElementById('pCateg');
var productList = [];

if(localStorage.getItem('list') !==null){
    productList = JSON.parse(localStorage.getItem('list'));
   display()
}

function createProduct(){


    if(urlValed() == true && productName.value !==''){
        var product = {
            pname: productName.value,
            categorg: categoryInut.value,
            
        }
        
        productList.push(product)
        console.log(productList)
        localStorage.setItem('list' , JSON.stringify(productList))
        clearForm()
        display()
        console.log(productList)
    }else{
        alert('Enter True URL or a site name')
    }


}


function clearForm(){
    productName.value = '';
    categoryInut.value = '';
}


function display(){

    var trs=``;
    var y = 1;

    for(var i=0 ; i<productList.length;i++){
        trs +=`
        <tr>
        <td>${y}</td>
        <td>${productList[i].pname}</td>
        <td><a href="https://${productList[i].categorg}" class="btn btn-outline-warning"><i class="fa-solid fa-eye pe-1"></i>Visit</a></td>
        <td><a class="btn btn-outline-danger" onclick="deleteProduct(${i})" ><i class="fa fa-trash pe-1"></i>Delet</a></td>
       </tr>
        `
        y++;
    }
    document.getElementById('tableBody').innerHTML=trs;
}

function deleteProduct(index){
    console.log(index);
    productList.splice(index,1);
    localStorage.setItem('list' , JSON.stringify(productList))

    console.log(productList);
    display();
}


function urlValed(){
 var nameValue = categoryInut.value
 
 var nameRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
  
 if(nameRegex.test(nameValue) === true){
    // console.log('match')
    return true
 }else{
    // console.log('no match')
    return false

 }

}



