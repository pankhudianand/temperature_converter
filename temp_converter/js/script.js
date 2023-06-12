let celsius =document.getElementById('celsius');
let fahrenheit =document.getElementById('fahrenheit');

celsius.oninput=()=>{
    let outputf=(parseFloat(celsius.value)*9)/5+32;
    let outputk=(parseFloat(celsius.value)+273.15);
    fahrenheit.value=parseFloat(outputf.toFixed(2));
    kelvin.value=parseFloat(outputk.toFixed(2));
};
fahrenheit.oninput=()=>{
    let outputc=((parseFloat( fahrenheit.value)-32)*5)/9;
    let outputk=(((parseFloat( fahrenheit.value)-32)*5)/9)+273.15;
   celsius.value=parseFloat(outputc.toFixed(2));
   kelvin.value=parseFloat(outputk.toFixed(2));
};
kelvin.oninput=()=>{
    let outputc=(parseFloat( kelvin.value)-273.15);
    let outputf=(((parseFloat(kelvin.value)-273.15)*1.8)+32);
   celsius.value=parseFloat(outputc.toFixed(2));
   fahrenheit.value=parseFloat(outputf.toFixed(2));
};