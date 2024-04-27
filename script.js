let filterData = []

let filterItems = document.querySelectorAll(".item li label")

filterItems.forEach((el) => {
        el.addEventListener("change", () => {
        let itemId = el.closest("li").dataset.itemid;
        let filterType = el.closest(".item").dataset.filtertype;
        let isCheckBox = el.querySelector("input")

            if(isCheckBox.type === 'checkbox') {
                let indexItem = filterData.findIndex(i => i.id === Number(itemId));
                
                if(indexItem !== -1) {
                    console.log("Has")
                    filterData.splice(indexItem, 1);
                    fullListCover(el)
                }
    
                if(indexItem === -1) {
                    filterData.push({
                        id: Number(itemId),
                        type: filterType
                    });
                    fullListCover(el)
                } 
                console.log(filterData)

                // Ajax call
                handleFilterDataAsync(filterData)
              }  
        })
    })

    const fullListCover = (el) => {
        let container = el.closest("ul");
        let length = container.children.length;
        let checkedItems = container.querySelectorAll("input:checked").length;
        
        

        if(length == checkedItems) {
            container.closest(".item").classList.add("full");
        } else {
            container.closest(".item").classList.remove("full");
        }

        // wrapper full check
        let totalTypes = container.closest(".wrapper").children.length;
        let itemFullSoFar = container.closest(".wrapper").querySelectorAll(".item.full").length;
        
        if((totalTypes - 1) == itemFullSoFar) {
            container.closest(".wrapper").classList.add("majority-selected");
        } else {
            container.closest(".wrapper").classList.remove("majority-selected");
        }

    }
    
    const handleFilterDataAsync = async (data) => {
        let response = await new Promise((resolve, reject) => {
            try {
                setTimeout(()=> {
                    resolve(console.log("Async result", data));
    
                }, 1000)
    
            } catch(err) {
                reject(console.log(err))
            }
        })
        return response
    }

// Another way
// =================================================================
var form = document.getElementById('input-form');

let myArray = [];

form.querySelectorAll('input').forEach(function (input) {
    
    input.addEventListener("change", () => {                                  
        if(input.type === 'checkbox') {
            // let itemAlreadyHas = myArray.some(i => i.id == Number(input.id));
            let indexItem = myArray.findIndex(i => i.id === Number(input.id));
            
            if(indexItem !== -1) {
                console.log("Old")
                myArray.splice(indexItem, 1)
            }

            if(indexItem === -1) {
                myArray.push({
                    id: Number(input.id),
                    value: input.value,
                    type: input.name
                });
            } 
            console.log("New", myArray)
          }          
    })
})



