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
    markpercent.innerText='S'
    console.log('S');
  }
  else if(percentage>=80){
    markpercent.innerText='A'
    console.log('A');
  }
  else if(percentage>=70){
    markpercent.innerText='B'
    console.log('B');
  }
  else if(percentage>=60){
    markpercent.innerText='C'
    console.log('C');
  }
  else if(percentage>=50){
    markpercent.innerText='D'
    console.log('D');
  }
  else if(percentage>=40){
    markpercent.innerText='just passed, E+'
    console.log('E+');
  }
  else if(percentage<40){
    markpercent.innerText='You are Failed'
    console.log('Failed');
  }
  remark.innerHTML=percentage

}




