'use client'
import React, { useState } from 'react'

function CekMandiri() {

const [jawaban, setJawaban] = useState([
  {question : 'Apakah Anda berolahraga secara teratur?', answer : ''},
  {question : 'Apakah Anda memiliki riwayat keluarga dengan diabetes?', answer : ''},
  {question : 'Apakah Anda merokok?', answer : ''},
  {question : 'Apakah Anda merasa haus berlebihan?', answer : ''},
  {question : 'Apakah Anda sering buang air kecil?', answer : ''},
  {question : 'Apakah Anda mengalami penurunan berat badan drastis?', answer : ''},
  {question : 'Apakah Anda sering merasa lelah?', answer : ''}

])

const [profile, setProfile] = useState(true)
const [result, setResult] = useState(false)
const [hasil, setHasil] = useState('')

const [tinggi, setTinggi] = useState(0)
const [berat, setBerat] = useState(0)
const [umur, setUmur] = useState(0)

const [active, setActive] = useState(0)

const addAnswer = (val : string) =>{
  const arr = jawaban
  arr[active].answer = val
  setJawaban([...arr])
}

const cekDiabetes = () =>{
  let hasilCek = ''
  let score = 0
  const tinggiM = tinggi/100
  const bmi = berat/(tinggiM*tinggiM)
  score += umur >= 45 ? 1 : 0
  score += bmi >= 25 ? 1 : 0
  score += jawaban[0].answer === 'tidak' ? 1 : 0
  score += jawaban[1].answer === 'ya' ? 2 : 0
  score += jawaban[2].answer === 'ya' ? 1 : 0
  score += jawaban[3].answer === 'ya' ? 1 : 0
  score += jawaban[4].answer === 'ya' ? 1 : 0
  score += jawaban[5].answer === 'ya' ? 1 : 0
  score += jawaban[6].answer === 'ya' ? 1 : 0
if(score <= 3){
  hasilCek = '1'
}
else if(score <= 6){
  hasilCek = '2'
}
else{
  hasilCek = '3'

}
setHasil(hasilCek)
    setResult(true)

console.log(hasilCek)

}

const toNext = () =>{
  const val = active+1
  if(val <=6)
  {
    setActive(val)
  }
  else{
    cekDiabetes()
  }
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-red-800 to-red-600 px-5 md:px-0">


{profile ?


        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
   
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold flex items-center">
        Cek Diri
      </h2>
      <span className="text-gray-500 text-sm">{active+1}/7</span>
    </div>



    <div className="space-y-4">
     <div className="w-full flex flex-wrap">
      <div className="w-full px-4">
           <label htmlFor="">Umur</label>
           <input onChange={(target)=>{setUmur(target.currentTarget.value)}} className='border-2 border-slate-500 w-full py-2 px-1 rounded-xl mt-2 mb-4' type="number" />
         </div>
         <div className="w-1/2 px-4">
           <label htmlFor="">Tinggi Badan (cm)</label>
           <input onChange={(target)=>{setTinggi(target.currentTarget.value)}} className='border-2 border-slate-500 w-full py-2 px-1 rounded-xl mt-2 mb-4' type="number" />
         </div>

         <div className="w-1/2 px-4">
           <label htmlFor="">Berat Badan (kg)</label>
           <input onChange={(target)=>{setBerat(target.currentTarget.value)}} className='border-2 border-slate-500 w-full py-2 px-1 rounded-xl mt-2 mb-4' type="number" />
         </div>
      </div>
    </div>

    <div className="flex justify-end mt-8">
      {/* <button onClick={()=>{setActive(active-1)}} className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
        Kembali
      </button> */}
      <button onClick={()=>{setProfile(false)}} className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
        Lanjut
      </button>
    </div>
  </div>

  : !result ?
 <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
   
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold flex items-center">
        Cek Diri
      </h2>
      <span className="text-gray-500 text-sm">{active+1}/7</span>
    </div>

    <p className="text-gray-800 mb-6">
      {jawaban[active].question}
    </p>

    <div className="space-y-4">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input onClick={()=>{addAnswer('ya')}} type="radio" name="hipertensi" value="ya" className="form-radio text-red-600" checked={jawaban[active].answer === 'ya'}/>
        <span>Ya</span>
      </label>
      <label className="flex items-center space-x-2 cursor-pointer">
        <input onClick={()=>{addAnswer('tidak')}} type="radio" name="hipertensi" value="tidak" className="form-radio text-red-600" checked={jawaban[active].answer === 'tidak'}/>
        <span>Tidak</span>
      </label>
    </div>

    <div className="flex justify-between mt-8">
      <button onClick={()=>{setActive(active-1);}} className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
        Kembali
      </button>
      <button onClick={()=>{toNext()}} className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
        Lanjut
      </button>
    </div>
  </div>

  :
  <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
   
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold flex items-center">
        Hasil Cek Diri
      </h2>
    </div>

{ hasil === '1' ?
 <p className="text-green-500 mb-6 text-2xl">
      Risiko rendah
    </p> :
  hasil === '2' ?
 <p className="text-green-500 mb-6 text-2xl">
      Risiko sedang
    </p>
  :
 <p className="text-green-500 mb-6 text-2xl">
      Risiko tinggi — dianjurkan tes medis lebih lanjut
    </p>
}
   
   <div className="">
    <a href="/" className='text-blue-400'>Kembali ke home </a>
   </div>


  </div>
  
}
</div>

 


//     <div className='w-screen'>
//       <div className="w-[80%] px-10">
//         <div className="">Identitas</div>
//         <div className="border rounded-xl p-8">

// <div className="w-full flex flex-wrap">
//           <div className="w-1/2 px-8">
//             <label htmlFor="">Nama</label>
//             <input className='border-2 border-slate-500 w-full py-2 px-3 rounded-xl mt-2 mb-4' type="text" />
//           </div>

//           <div className="w-1/2 px-8">
//             <label htmlFor="">Tanggal Lahir</label>
//             <input className='border-2 border-slate-500 w-full py-2 px-3 rounded-xl mt-2 mb-4' type="date" />
//           </div>
// </div>


// <div className="w-full flex flex-wrap">
//           <div className="w-1/2 px-8">
//             <label htmlFor="">Tinggi Badan</label>
//             <input className='border-2 border-slate-500 w-full py-2 px-3 rounded-xl mt-2 mb-4' type="text" />
//           </div>

//           <div className="w-1/2 px-8">
//             <label htmlFor="">Berat Badan</label>
//             <input className='border-2 border-slate-500 w-full py-2 px-3 rounded-xl mt-2 mb-4' type="date" />
//           </div>
// </div>
// <div className="w-full flex flex-wrap">
//           <div className="w-1/2 px-8">
//             <label htmlFor="">IMT (Index Masa Tubuh)</label>
//             <input className='border-2 border-slate-500 w-full py-2 px-3 rounded-xl mt-2 mb-4' type="text" />
//           </div>

//           <div className="w-1/2 px-8">
//             <label htmlFor="">Alamat</label>
//             <textarea className='border-2 border-slate-500 w-full py-2 px-3 rounded-xl mt-2 mb-4' name="" id="" rows="4" cols="50"></textarea>
//           </div>
// </div>


// <div className="w-full flex flex-wrap">
//           <div className="w-1/2 px-8">
//             <label htmlFor="">Jenis Kelamin</label>
//             <div className="w-full">
//             <input className='mx-4' type="radio" />Laki-laki
//             <input className='mx-4' type="radio" />Peempuan

//             </div>
//           </div>

// </div>

//         </div>
//       </div>
//     </div>
  )
}

export default CekMandiri
