
m = new Map()
var xmlhttp = new XMLHttpRequest();

list = document.querySelectorAll('select')
links=document.querySelectorAll('a')


conts = document.querySelectorAll('section')
conts.forEach(cont =>{
  cont.addEventListener('mouseover',function(){
    namePath=cont.classList[0];
    loadXMLDoc(namePath)
  },{once:true})
})
 
function loadXMLDoc(name) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(this,name);
    }
  };
  xhttp.open("GET", 'Data/'+name+'.xml', true);
  xhttp.send();
}

function myFunction(xml,name) {
  var xmlDoc = xml.responseXML;
  var rows = xmlDoc.getElementsByTagName("Row")
  btns = document.querySelectorAll('.my-Yara')
      for (let i = 0; i < rows.length; i++) {
        populateList(rows,i,name)
        filll(rows,i,rows[i].childNodes[0].nodeValue)
      }
}

function populateList(rows,i,name){
  list.forEach(li=>{
    if (li.classList.contains(name)){
     if(rows[i].parentNode.nodeName==='المحصول'&rows[i].getAttribute('type')===li.classList[0])
   {
     item = document.createElement('option')
     item.innerHTML = `${rows[i].childNodes[0].nodeValue}`
     item.value = rows[i].childNodes[0].nodeValue
     li.appendChild(item)
   }
    }
   })
}


containers= document.querySelectorAll('.fruit-container')

function filll(rows,i,n)
  {
    containers.forEach(c => {
    var select = c.querySelector("select");
    var options = c.querySelector(".fruit-options");
    var title = c.querySelector(".fruit-title");
    var nutritionLink = c.querySelector(".nutrition-link");
    var recipesLink = c.querySelector(".recipes-link");
    var availabilityLink = c.querySelector(".availability-link");
    var result = c.querySelector(".fruit-result");
    
     
    
    select.addEventListener("change", function() {
      var fruit = this.value;
      if (fruit) {
        options.style.display = "block";
        title.innerHTML = fruit;
      } else {
        options.style.display = "none";
        result.innerHTML = "";
      }
      city=select.classList[1] 
      if(rows[i].parentNode.nodeName===city&fruit===rows[i].getAttribute('id')){
              if(rows[i].getAttribute('ty')==='M'){
                nutritionLink.addEventListener("click", function(event) {
                event.preventDefault();
                result.innerHTML = `(هكتار)المساحات الزراعية=${n}`;
              })
            }
            else if(rows[i].getAttribute('ty')==='W'){
              availabilityLink.addEventListener("click", function(event) {
                event.preventDefault();
                result.innerHTML = `الاستهلاك المائى=${n}`;
              });
            }
            else if(rows[i].getAttribute('ty')==='E'){
              recipesLink.addEventListener("click", function(event) {
                event.preventDefault();
                result.innerHTML = `انتاجية المحاصيل (طن-هكتار)=${n}`;
              });
            }
          }
  
    });
  
  })
}