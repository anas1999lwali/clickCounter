let counter = 0;

document.getElementById('btn').addEventListener('click',function(){
    counter += 1;
    document.getElementById('number').innerText = counter;
})