const h2 = document.querySelector('h2');
 const image = document.querySelector('img');
function toss(btn){
        
         const randomNumber = Math.ceil(Math.random()*2);
        
    
         if(btn === 'masjid' && randomNumber === 1 || btn === 'chand' && randomNumber === 2){
             
             h2.innerHTML = 'congratulation  🎉 You win the Toss'
         }else{
             
             h2.innerHTML = 'You Loss the Toss'
         }
    
         if(randomNumber === 1){
             image.src = 'https://media.istockphoto.com/id/620405426/photo/pakistani-rupees-coin.jpg?s=612x612&w=0&k=20&c=JIetW-QA_2Puq_oiQi_h1otVNVAwzqJlLsn0lpHNTjQ='
         }else{
             image.src = 'https://thumbs.dreamstime.com/z/pakistani-rupees-coin-white-background-87280619.jpg'
         }
     }