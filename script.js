function appendValue(num)
{
    let d=document.getElementById('result');
    d.value=d.value+num;
    
}
function clearDisplay()
{
    window.location="index.html";
}

function del_last()
{
    let del=document.getElementById('result');
    del.value=del.value.slice(0,-1);
}
function calculate()
{
    let res=document.getElementById('result');

    try{
        res.value=eval(res.value);

    }
    catch(error)
    {
        res.value="Error";
    }
}