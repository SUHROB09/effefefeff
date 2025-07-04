const body=document.getElementById('bd')
const btn = document.getElementById('btn');
let rang = 0;
let ranglar=['black','white','blue','pink','red']
btn.addEventListener('click', () => {
   if(rang == 0){
    body.style.backgroundColor=ranglar [0]
    rang =1
   }else if(rang == 1){
    body.style.backgroundColor =ranglar[1]
    rang =0
      }
}) 