const myform=document.getElementById('myform')
function handleForm(event){
event.preventDefault()
}
myform.addEventListener('submit',handleForm)
var gifImage=document.querySelector('.gif')
var image=document.querySelector('.img')
var image2=document.querySelector('.img2')
const remark=document.getElementById('remark') //h3
const markpercent=document.getElementById('mark-percent') //to show percnetg
var totalmarks=document.getElementById('totalmarks')
 image.style.display='none'
 image2.style.display='none'

    //for clear the form while click a button
    const result=document.getElementsByClassName('result')
    var inputs=document.querySelectorAll('input')
    document.getElementById('clearform').addEventListener('click',()=>{
           // console.log('reset true');
            inputs.forEach(input=>input.value='')
            totalmarks.style.display="none"
            remark.style.display="none"
            markpercent.style.display="none"
            image.style.display='none'
            image2.style.display='none'
    })
 
 function getdata(){
    const form=document.getElementsByTagName('form')
//form.reset()


    //1. to get input values
    //DOM
   const maths=document.getElementById("maths")
   const mathsValue=maths.value
   const physics=document.getElementById('physics')
   const physicsValue=physics.value
    const chemistry=document.getElementById('chemistry')
    const chemistryValue=chemistry.value
    const biology=document.getElementById('biology')
    const biologyValue=biology.value
    const english=document.getElementById('english')
    const englishValue=english.value
    const hindi=document.getElementById('hindi')
    const hindiValue=hindi.value
    const remark=document.getElementById('remark') //h3
    const markpercent=document.getElementById('mark-percent') //to show percnetg

    if(mathsValue=="" || physicsValue=="" || chemistryValue=="" || biologyValue=="" || englishValue=='' || hindiValue==''){
        markpercent.style.display="none"
        totalmarks.style.display="none"
        remark.innerHTML="please enter your marks"
        remark.style.color='rgb(102, 213, 233)'
        remark.style.display="block"
       }
      else if(mathsValue==0 || physicsValue==0 || chemistryValue==0 || biologyValue==0 || englishValue==0 || hindiValue==0){
        image.style.display="block"
        image2.style.display="none"
        remark.style.display="block"
        //markpercent.style.display="block"
        totalmarks.style.display="none"
        remark.innerHTML=`you are failed`
        remark.style.color='red'
        // if(mathsValue==0){
        //     remark.innerText=`you are failed in Maths`
        //     // markpercent.innerText=`you are failed`
        //      remark.style.color='red'
        // }
        //   if(physicsValue==0){
        //     remark.innerText=`you are failed in Physics`
        //     // markpercent.innerText=`you are failed`
        //      remark.style.color='red'
        // }
        //  if(chemistryValue==0){
        //     remark.innerText=`you are failed in Chemistry`
        //     // markpercent.innerText=`you are failed`
        //      remark.style.color='red'
        // }
        //  if(biologyValue==0){
        //     remark.innerText=`you are failed in Biology`
        //     // markpercent.innerText=`you are failed`
        //      remark.style.color='red'
        // }
        //  if(englishValue==0){
        //     remark.innerText=`you are failed in English`
        //     // markpercent.innerText=`you are failed`
        //      remark.style.color='red'
        // }
        //  if(hindiValue==0){
        //     remark.innerText=`you are failed in Hindi`
        //     // markpercent.innerText=`you are failed`
        //      remark.style.color='red'
        // }
        
        // else{
        //     remark.innerText=`you are failed`
        // }
    //     remark.innerText=`you are failed in ${}`
    //    // markpercent.innerText=`you are failed`
    //     remark.style.color='red'
        image.src="https://media1.tenor.com/images/524b7368b99418c2e10bf3eccbbbdb9a/tenor.gif?itemid=4215363"
//image.src="https://th.bing.com/th/id/R.98b9572803f02d0d36ed0243bc4fef9b?rik=o4pzPnWp9DKq0g&riu=http%3a%2f%2ffc05.deviantart.net%2ffs70%2ff%2f2013%2f062%2fa%2fb%2fdon_t_worry_be_happy_by_luuhda-d5wupj7.png&ehk=RlGMvNj%2fezn%2fakn%2fsXK%2bbmHvidLPUFmjgibXCTQm%2flY%3d&risl=&pid=ImgRaw&r=0"
//image.style.display='block'
image.style.width='360px'
image.style.height="270px"
      }
    //   mathsValue!=0 && physicsValue!=0 && chemistryValue!=0 && biologyValue!=0 && englishValue!=0 && hindiValue!=0
   else{
        //2.calculate percentage
        const total=600 //80X5=400
        var sum=0;
        sum=parseFloat(mathsValue)+parseFloat(physicsValue)+parseFloat(chemistryValue)+parseFloat(biologyValue)+parseFloat(englishValue)+parseFloat(hindiValue)
        console.log('sum',sum);
        console.log(sum);
        // document.write(sum)
        const percentage=Math.floor((sum/total)*100)
        console.log(percentage);
        remark.style.display="block"
        markpercent.style.display="block"
        totalmarks.style.display="block"
        totalmarks.innerHTML=`Your Total Marks : ${sum} / ${total}`
        totalmarks.style.color="Green"
        image.style.width='140px'
        image.style.height="140px"
        if(percentage>=90){
            markpercent.innerHTML='Your Grade : S'
            remark.innerHTML='Your percentage is'+' '+percentage + '%'
            console.log('S');
            markpercent.style.color="Green"
            remark.style.color='green'
            image.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
            image2.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
            image.style.display="block"
            image2.style.display="block"
            // image.style.width='140px'
            // image.style.height="140px"
            }

            else if(percentage>=80){
                            markpercent.innerHTML='Your Grade : A'
                            remark.innerHTML='Your percentage is'+' '+percentage + '%'
                            // image.style.dislay='block'
                            // image2.style.display="block"
                            markpercent.style.color="Green"
                            remark.style.color='green'
                            image.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
                            image2.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
                            image.style.display="block"
                            image2.style.display="block"
                            console.log('A');
                            // image.style.width='140px'
                            // image.style.height="140px"
                            }

else if(percentage>=70){
            markpercent.innerHTML='Your Grade : B'
            remark.innerHTML='Your percentage is'+' '+percentage + '%'
            image.style.display='block'
            image2.style.display="block"
            markpercent.style.color="Green"
            remark.style.color='green'
            image.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
            image2.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
            console.log('B');
            // image.style.width='140px'
            // image.style.height="140px"
            }

            else if(percentage>=60){
                            markpercent.innerHTML='Your Grade : C'
                            remark.innerHTML='Your percentage is'+' '+percentage + '%'
                            markpercent.style.color="green"
                            remark.style.color='green'
                            image.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
                            image2.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
                            image.style.display='block';
                            image2.style.display="block"
                            // image.style.width='140px'
                            // image.style.height="140px"
                            console.log('C');
                            }

                            else if(percentage>=50){
                                            markpercent.innerHTML='Your Grade : D'
                                            remark.innerHTML='Your percentage is'+' '+percentage + '%'
                                            markpercent.style.color="green"
                                            remark.style.color='green'
                                            image.style.display='block'
                                            image2.style.display="block" 
                                            image.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
                                            image2.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
                                            console.log('D');
                                            // image.style.width='140px'
                                            // image.style.height="140px"
                                            }
        else if(percentage>=40){
                                            markpercent.innerHTML='Just passed, E+'
                                            remark.innerHTML='Your percentage is'+' '+percentage + '%'
                                            markpercent.style.color="green"
                                            remark.style.color='green'
                                            image.style.display='block'
                                            image2.style.display="block"
                                    //         image.style.width='140px'
                                    // image.style.height="140px"
                                
                                            image.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
                                image2.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
                                console.log('E+');
                                }    

                                else if(percentage<40){

                                    markpercent.innerHTML='You are Failed'
                                    totalmarks.style.color="red"
                                    remark.innerHTML='Your percentage is'+' '+percentage + '%'
                                    markpercent.style.color="red"
                                    remark.style.color='red'
                                    image.src="https://media1.tenor.com/images/524b7368b99418c2e10bf3eccbbbdb9a/tenor.gif?itemid=4215363"
                                    //image.src="https://th.bing.com/th/id/R.98b9572803f02d0d36ed0243bc4fef9b?rik=o4pzPnWp9DKq0g&riu=http%3a%2f%2ffc05.deviantart.net%2ffs70%2ff%2f2013%2f062%2fa%2fb%2fdon_t_worry_be_happy_by_luuhda-d5wupj7.png&ehk=RlGMvNj%2fezn%2fakn%2fsXK%2bbmHvidLPUFmjgibXCTQm%2flY%3d&risl=&pid=ImgRaw&r=0"
                                    image.style.display='block'
                                    image.style.width='360px'
                                    image.style.height="170px"
                                    
                                    image2.style.display="none"
                                    console.log('Failed');
                                    
                                    }                
       }

 }














   