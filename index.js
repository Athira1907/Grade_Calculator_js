//DOM
//const maths=document.getElementById("maths").value
// var mathsValue=maths.value
// var  physics=document.getElementById('physics').value
// var chemistry=document.getElementById('chemistry').value
// var biology=document.getElementById('biology').value
// var english=document.getElementById('english').value
// const Maths2=parseInt(maths)
// console.log(Maths2);
//console.log(mathsValue);
// document.write(mathsValue)


const myform=document.getElementById('myform')
function handleForm(event){
event.preventDefault()
}
myform.addEventListener('submit',handleForm)

var gifImage=document.querySelector('.gif')
var image=document.querySelector('.img')
var image2=document.querySelector('.img2')
 image.style.display='none'
 image2.style.display='none'

function getdata(){
    const form=document.getElementsByTagName('form')
    // form.addEventListener('click',(e)=>{
    //     e.preventDefault()
    // }) 
   
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
    const remark=document.getElementById('remark')
    const markpercent=document.getElementById('mark-percent')
   // const gifImage=document.querySelector('.gif')
    // gifImage.style.visibility='hidden'
    //const image=document.getElementsByClassName('img')
    // var image=document.querySelector('.img')
    // var image2=document.querySelector('.img2')
    //const gifimages=
   // document.getElementsByClassName('gifimages').style.display="none"
    //gifimages.style.display="none"
    // console.log(maths);
    // console.log(physics);
    // console.log(chemistry);
    // console.log(biology);
    // console.log(english);
   
    //2.calculate percentage
    const total=500
    var sum=0;
    sum=parseFloat(mathsValue)+parseFloat(physicsValue)+parseFloat(chemistryValue)+parseFloat(biologyValue)+parseFloat(englishValue)
    console.log(sum);
   // document.write(sum)
   const percentage=Math.floor((sum/total)*100)
   console.log(percentage);
  // return percentage
  if(percentage>=90){
    markpercent.innerText='your Grade : S'
    console.log('S');
   // gifImage.style.visibility='visible'
    image.style.display="block"
    image2.style.display="block"
    markpercent.style.color="Green"
    remark.style.color='green'
  

    image.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
    image2.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
  }
  else if(percentage>=80){
    markpercent.innerText='your Grade : A'
   // gifImage.style.visibility='visible'
    image.style.dislay='block'
    image2.style.display="block"
    markpercent.style.color="Green"
    remark.style.color='green'
   

    image.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
    image2.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
    console.log('A');
  }
  else if(percentage>=70){
    markpercent.innerText='your Grade : B'
    image.style.display='block'
    image2.style.display="block"
    markpercent.style.color="Green"
    remark.style.color='green'
    
    
   //gifImage.style.visibility='visible'
    image.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
    image2.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
    console.log('B');
  }
  else if(percentage>=60){
    markpercent.innerText='your Grade : C'
    markpercent.style.color="green"
    remark.style.color='green'
  

  //gifImage.style.visibility='visible'
   image.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
   image2.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
   image.style.display='block';
   image2.style.display="block"

    console.log('C');
  }
  else if(percentage>=50){
    markpercent.innerText='your Grade : D'
    markpercent.style.color="green"
    remark.style.color='green'
    image.style.display='block'
    image2.style.display="block"

  // gifImage.style.visibility='visible'

    image.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
    image2.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
    console.log('D');
  }
  else if(percentage>=40){
    markpercent.innerText='just passed, E+'
    markpercent.style.color="green"
    remark.style.color='green'
    image.style.display='block'
    image2.style.display="block"

  // gifImage.style.visibility='visible'
    
   image.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
   image2.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif"
    console.log('E+');
  }
  else if(percentage<40){
    markpercent.innerText='You are Failed'
    markpercent.style.color="red"
    remark.style.color='red'
   image.src="https://media1.tenor.com/images/524b7368b99418c2e10bf3eccbbbdb9a/tenor.gif?itemid=4215363"
   //image.src="https://th.bing.com/th/id/R.98b9572803f02d0d36ed0243bc4fef9b?rik=o4pzPnWp9DKq0g&riu=http%3a%2f%2ffc05.deviantart.net%2ffs70%2ff%2f2013%2f062%2fa%2fb%2fdon_t_worry_be_happy_by_luuhda-d5wupj7.png&ehk=RlGMvNj%2fezn%2fakn%2fsXK%2bbmHvidLPUFmjgibXCTQm%2flY%3d&risl=&pid=ImgRaw&r=0"
    image.style.display='block'
    image.style.width='360px'
    image.style.height="300px"

    image2.style.display="none"
    console.log('Failed');
   // image.src=""
   // gifImage.style.display='none'
    //gifimages.style.display="none"
  }
  remark.innerHTML=percentage + '%'
  
//gifImage.innerHTML=(percentage>40)?gifImage:"Unsatisfactory"
//gifImage.innerHTML=(percentage>40)?image.src="https://media.tenor.com/images/ce4e7484ae0727138d035eea8155f600/tenor.gif":"Unsatisfactory"
}




