const inputs = document.querySelectorAll('.controler input')

inputs.forEach(input => input.addEventListener('change',handelchange));
inputs.forEach(input=>input.addEventListener('mousemove',handelchange));

function handelchange(){
    const suffix = this.dataset.size || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
    console.log("hiiii")
}

const inputss= document.querySelectorAll('input')

inputss.forEach(input=>{
    input.addEventListener('click',function(){
        const suffix = this.dataset.size || '';
        document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
        console.log("hiiii")
    })
});