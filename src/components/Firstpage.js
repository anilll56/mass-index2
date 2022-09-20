import {React , useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './Firstpage.css';

const Firstpage =({weight,setWeight,size,setSize}) => {
  

  let navigate=useNavigate();
  return (
    <div className='bigAlice'>
      <div className='headerCss'>KİTLE İNDEKSİ HESAPLAMA</div>
          <div className='bigConteiner'>
      <div  className='center'>

      <div>
        <div className=''>Kilonuzu giriniz</div>
        <div><input className='inputStyle' value={weight} onChange={(Event)=>setWeight(Event.target.value)}></input></div>
      </div>
      <div>
        <div>Boyunuzu giriniz</div>
        <div><input className='inputStyle' value={size} onChange={(Event)=>setSize(Event.target.value)}></input></div>
      </div>
      <div className='button2' onClick={()=>{navigate("/Resultpage")}}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  HESAPLA
</div>

      </div>
    </div>
    </div>

  )
}

export default Firstpage;

