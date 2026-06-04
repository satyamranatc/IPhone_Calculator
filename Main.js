let historyText = document.querySelector("#history")
let answerText = document.querySelector("#answer")
let btns = document.querySelectorAll("table button")


for(let i of btns)
{
    i.onclick = function()
    {
        let btnText = i.innerText;
        
        if(btnText == "C")
        {
              answerText.innerHTML = "";``
        }
        else if (btnText == "Ce")
        {
              answerText.innerHTML = answerText.innerHTML.slice(0,-1);
        }
        else if (btnText == "x2")
        {
                historyText.innerHTML = answerText.innerHTML;
              answerText.innerHTML **= 2;
        }
        else if (btnText == "x")
        {
              answerText.innerHTML +="*";
        }
        else if (btnText == "=")
        {
            historyText.innerHTML = answerText.innerHTML;
              answerText.innerHTML = eval(answerText.innerHTML);
        }
        else
        {
            console.log(btnText);
              answerText.innerHTML += btnText;
        }
    }
}