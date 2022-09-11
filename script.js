let claimBtn = document.querySelector(".claim-trial");
let tryBtn = document.querySelector(".try-trial");
let inputs =   document.querySelectorAll("input");


function displayResult(){
    inputs.forEach(input => {
        let errorSign = input.previousElementSibling;
        let label = input.nextElementSibling;
        switch(input.name){
            case "first":
                
                    if(input.value == "")
                    {
                        errorSign.style.display = "flex";
                        label.style.display = "flex";
                        input.classList.add("active");
                    }
                    else{
                        errorSign.style.display = "none";
                        label.style.display = "none";
                        if(input.classList.contains("active"))
                        input.classList.remove("active");
                    }
                break;
                case "last":
                
                    if(input.value == "")
                    {
                        errorSign.style.display = "flex";
                        label.style.display = "flex";
                        input.classList.add("active");
                    }
                    else{
                        errorSign.style.display = "none";
                        label.style.display = "none";
                        if(input.classList.contains("active"))
                        input.classList.remove("active");
                    }
                break;
                case "pass":
                
                    if(input.value == "")
                    {
                        errorSign.style.display = "flex";
                        label.style.display = "flex";
                        input.classList.add("active");
                    }
                    else{
                        errorSign.style.display = "none";
                        label.style.display = "none";
                        if(input.classList.contains("active"))
                        input.classList.remove("active");
                    }
                break;
            case "email":
                if(input.value == "" || 
                (input.value.indexOf("@") < 2 && input.value.indexOf(".") >= input.value.length-2) ||
                countAt(input.value) != 1)
                {
                        errorSign.style.display = "flex";
                        label.style.display = "flex";
                        input.classList.add("active");
                }
                else{
                        errorSign.style.display = "none";
                        label.style.display = "none";
                        if(input.classList.contains("active"))
                        input.classList.remove("active");
                }
                break;
        }
    })
}

tryBtn.addEventListener("click", displayResult);
claimBtn.addEventListener("click",displayResult);

function countAt(input) {
    let count = 0;
    for(let i = 0 ; i<input.length;i++)
    {
        if(input[i] == "@")
        count++;
    }
    return count;
}