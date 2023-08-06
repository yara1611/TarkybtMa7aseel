
m = new Map()
var xmlhttp = new XMLHttpRequest();
function loadXMLDoc() {
    
    xmlhttp.onreadystatechange = function () {

        // Request finished and response 
        // is ready and Status is "OK"
        if (this.readyState == 4 && this.status == 200) {
            empDetails(this);
        }
    };

    // employee.xml is the external xml file
    xmlhttp.open("GET", "Task1.xml", true);
    xmlhttp.send();
    
}

function empDetails(xml) {
     xmlDoc = xml.responseXML;
     x = xmlDoc.getElementsByTagName("City");

    // Start to fetch the data by using TagName 
    for (const key in x) {
        if (Object.hasOwnProperty.call(x, key)) {
           
                m.set(x[key].getAttribute('id'),key)
        }
    }
console.log(m)
return x
}

loadXMLDoc()

cont2 = document.createElement('div')
closeElement = document.createElement('i')
closeElement.classList.add('fa-regular','fa-circle-xmark','fa-2x','position-absolute','top-0','end-0','m-3')
closeElement.id='close'
closeElement.addEventListener("click",closeSlid)
cont2.classList.add("d-flex",'justify-content-between','align-items-center','position-relative','p-3')
cont2.id ='boxInner'

cont2.appendChild(closeElement)






var boxContainer=document.getElementById("boxContainer")
boxInner = document.querySelector('#boxInner')

cont = document.querySelectorAll('.city')
types = document.querySelectorAll('.type')

cont.forEach(i => {
    i.addEventListener('click',function(e){
        console.log(e.target.parentNode.querySelector('h3').textContent)
        f = e.target.parentNode.querySelector('h3').textContent.replace('مدينة ', '')
        info(f,empDetails(xmlhttp))
    })
});

//replace
var tNames
types.forEach(t => {
    t.addEventListener('click',function(e){
        boxContainer.replaceChild(cont2,boxInner)
        tNames = tNameFun(e)
    })
});

function tNameFun(e){
    tName = e.target.parentNode.querySelector('h3').textContent
    console.log(tName)
    return tName
}

function info(f,x){
    number= m.get(f)
    console.log("n"+number)
    cont2.innerHTML = `${f}: ${tNames}<br>`
    fillInfo(number,x)
    closeElement.addEventListener("click",closeSlid)
    cont2.appendChild(closeElement)
}

function fillInfo(n,x) {
    for (i = 0; i < x.item(n).childNodes.length; i++) {
        if (x.item(n).childNodes[i].nodeType == 1 & x.item(n).childNodes[i].nodeName === 'الاعلاف') {
            cont2.innerHTML += `${x.item(n).childNodes[i].getAttribute('fruit')} بمساحة ${x.item(n).childNodes[i].getAttribute('nums')} <br>`
        }
    }
}

function closeSlid(){
    boxContainer.replaceChild(boxInner,cont2)
    // boxContainer.classList.replace("d-flex","d-none")
    
  }













  var containers = document.querySelectorAll(".fruit-container");

  for (var i = 0; i < containers.length; i++) {
    var container = containers[i];
    var select = container.querySelector("select");
    var options = container.querySelector(".fruit-options");
    var title = container.querySelector(".fruit-title");
    var nutritionLink = container.querySelector(".nutrition-link");
    var recipesLink = container.querySelector(".recipes-link");
    var availabilityLink = container.querySelector(".availability-link");
    var result = container.querySelector(".fruit-result");

    select.addEventListener("change", function() {
      var fruit = this.value;
      if (fruit) {
        options.style.display = "block";
        title.innerHTML = fruit;
      } else {
        options.style.display = "none";
        result.innerHTML = "";
      }
    });

    nutritionLink.addEventListener("click", function(event) {
      event.preventDefault();
      result.innerHTML = "قيمة التغذية للفاكهة هي 100";
    });

    recipesLink.addEventListener("click", function(event) {
      event.preventDefault();
      result.innerHTML = "هناك 5 وصفات للفاكهة";
    });

    availabilityLink.addEventListener("click", function(event) {
      event.preventDefault();
      result.innerHTML = "الفاكهة متوفرة في 10 متاجر";
    });
  }