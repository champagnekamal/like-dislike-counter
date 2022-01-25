let like = document.querySelector('#like');
let dislike = document.querySelector('#dislike');



let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');


like.addEventListener('click',()=>{
    input1.value = parseInt(input1.value) + 1;
    
})
dislike.addEventListener('click',()=>{
    input2.value = parseInt(input2.value) - 1;

})