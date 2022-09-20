import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Resultpage.css';


function Resultpage({weight , setWeight , size , setSize ,ss,setSs}) {
    let navigate=useNavigate();
    const Mass=(weight/(Math.pow(size,2)))
    if (weight/(Math.pow(size,2))>40) {
       setSs("Aşırı Şişman. Üçüncü derece obez kategorisinde olan bu kişilerde hastalık gelişme riski çok yüksektir. Hekim ve diyetisyen eşliğinde kilo verilmesi önerilir.")
    }
    else if (weight/(Math.pow(size,2))>35) {
       setSs("Şişman. İkinci derece obez olarak tanımlanan bu değerlere sahip olan kişilerde kalp ve damar hastalıkları bakımından risk artar. Kişinin kilo vermek için diyetisyene başvurması önerilir.")
    }
    else if(weight/(Math.pow(size,2))>30){
       setSs(" Şişman. Birinci derece obez kategorisinde değerlendiren değer aralığında, kişinin kilosunun sağlık açısından risk oluşturabilecek düzeyde olduğu anlaşılır. Bu kişilerin diyetisyen yardımıyla kilo vermesi önerilir.")
    }
    else if (weight/(Math.pow(size,2))>25){
       setSs("Fazla Kilolu. Kişinin boyuna oranla kilosunun fazla olduğunu gösteren bu değer aralığında kişinin uygun diyet ile fazla kilolarından kurtulması önerilir.")
    }
    else if (weight/(Math.pow(size,2))>18.5) {
        setSs(" Normal. Bu değer aralığı kişinin ideal kiloda olduğunu gösterir. Bu değere sahip olan kişilerin düzenli, dengeli ve sağlıklı beslenmeye devam etmeleri önerilir.")
    }
    else if (weight/(Math.pow(size,2))>0) {
        setSs(" Zayıf. Kişinin boyuna oranla ağırlığının yetersiz olduğunu ifade eden bu değer ile karşılaşılması durumunda kişinin diyetisyen eşliğinde sağlıklı bir şekilde kilo alması önerilir.")
    }
  return (
    <div className='result1css'>
      <div className='result2css'>
        <div>
          Kitle İndeksiniz={weight/(Math.pow(size,2))}
        </div>
        <div className='ssCss'>{ss}</div>
      </div>
      <div><button className='resultButtoncss' onClick={()=>{navigate("/")}} > yeniden deneyin</button></div>
    </div>
  )
}

export default Resultpage;
