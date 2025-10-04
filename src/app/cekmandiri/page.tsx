'use client'
import React, { useState } from 'react'

function CekMandiri() {

const [jawaban, setJawaban] = useState([
  {question : 'Apakah salah satu dari orang tuan Anda memiliki riwayat diabetes meliitus ?', answer : ''},
  {question : 'Apakah Anda sering mengalami rasa nyeri atau kesemutan di tangan dan kaki?', answer : ''},
  {question : 'Apakah anda sering  mengonsumsi makanan tinggi gula, seperti kue ?', answer : ''},
  {question : 'Apakah Anda merasa lebih cepat lelah daripada biasanya?', answer : ''},
  {question : 'Apakah Anda memperhatikan peningkatan rasa haus dan frekuensi buang air kecil?', answer : ''},
  {question : 'Apakah Anda memiliki riwayat tekanan darah tinggi?', answer : ''},
  {question : 'Apakah Anda berolahraga secara teratur dalam seminggu?', answer : ''},
  {question : 'Apakah Anda sering merasa lapar meskipun sudah makan?', answer : ''},
  {question : 'Apakah Anda memiliki pola makan yang tidak seimbang, seperti jarang mengonsumsi sayur dan buah?', answer : ''},
  {question : 'Apakah Anda merasakan peningkatan berat badan dalam beberapa bulan terakhir?', answer : ''},
  {question : 'Apakah Anda merasa stres atau tertekan dalam kehidupan sehari-hari?', answer : ''},
  {question : 'Apakah Anda pernah mengalami luka yang sulit disembuhkan?', answer : ''},
  {question : 'Apakah Anda memiliki kebiasaan merokok dan minum alkohol?', answer : ''},
  {question : 'Apakah Anda mengonsumsi makanan yang tinggi lemak jenuh dalam diet Anda?', answer : ''},
  {question : 'Apakah Anda rutin memeriksakan kadar gula darah Anda?', answer : ''},

])

const [profile, setProfile] = useState(true)
const [result, setResult] = useState(false)
const [hasil, setHasil] = useState('')
const [nama, setNama] = useState('')
const [alamat, setAlamat] = useState('')

const [tinggi, setTinggi] = useState(0)
const [berat, setBerat] = useState(0)
const [umur, setUmur] = useState(0)
const [bmi, setBmi] = useState(0)

const [active, setActive] = useState(0)

const addAnswer = (val : string) =>{
  const arr = jawaban
  arr[active].answer = val
  setJawaban([...arr])
}

const itungUmur = (tglLahir:string) => {
  const sekarang = new Date();
  const lahir = new Date(tglLahir);

  let umur = sekarang.getFullYear() - lahir.getFullYear();

  const bulanSekarang = sekarang.getMonth();
  const tanggalSekarang = sekarang.getDate();
  const bulanLahir = lahir.getMonth();
  const tanggalLahir = lahir.getDate();

  if (bulanSekarang < bulanLahir || (bulanSekarang === bulanLahir && tanggalSekarang < tanggalLahir)) {
    umur--;
  }

  // console.log('ini umur',umur);
  setUmur(umur)
}

const itungmbi = (val : number, col : string) => {
  let t = tinggi;
  let b = berat;
  if(col === 'tinggi'){
    t = val;
    setTinggi(val)
  }
  else{
    b = val
    setBerat(val)
  }
  const tinggiM = t/100

const bmi = b/(tinggiM*tinggiM)

  console.log('ini umur',t, tinggiM, b);
  setBmi(bmi)
}

const cekDiabetes = () =>{
  let hasilCek = ''
  let score = 0
  score += umur >= 45 ? 1 : 0
  score += bmi >= 25 ? 1 : 0
  score += jawaban[0].answer === 'ya' ? 2 : 0
  score += jawaban[1].answer === 'ya' ? 2 : 0
  score += jawaban[2].answer === 'ya' ? 1.5 : 0
  score += jawaban[3].answer === 'ya' ? 1.5 : 0
  score += jawaban[4].answer === 'ya' ? 2 : 0
  score += jawaban[5].answer === 'ya' ? 2 : 0
  score += jawaban[6].answer === 'tidak' ? 2 : 0
  score += jawaban[7].answer === 'ya' ? 1.5 : 0
  score += jawaban[8].answer === 'ya' ? 1.5 : 0
  score += jawaban[9].answer === 'ya' ? 1.5 : 0
  score += jawaban[10].answer === 'ya' ? 1 : 0
  score += jawaban[11].answer === 'ya' ? 2 : 0
  score += jawaban[12].answer === 'ya' ? 2 : 0
  score += jawaban[13].answer === 'ya' ? 1.5 : 0
  score += jawaban[14].answer === 'ya' ? 2 : 0
if(score <= 8){
  hasilCek = '1'
}
else if(score <= 16){
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
  if(val <=14)
  {
    setActive(val)
  }
  else{
    const hasil = jawaban.filter(item => item.answer === '');
    console.log(hasil)
    if(hasil.length > 0){
      alert('masih ada jawaban yang belum terisi. tolong cek kembali!')
    }
    else{
      cekDiabetes()
    }
  }
}

const toQuestion = () =>{
  if(umur != 0 && bmi != 0 && nama != '' && alamat != ''){

    setProfile(false)
  }
  else{
    alert('Lengkapi data dengan benar terlebih dahulu!')
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
      <span className="text-gray-500 text-sm"></span>
    </div>



    <div className="space-y-4">
     <div className="w-full flex flex-wrap">
      <div className="w-full px-4">
         <div className="w-full px-4">
           <label htmlFor="">Nama</label>
           <input onChange={(target)=>{setNama(target.currentTarget.value)}} className='border-2 border-slate-500 w-full py-2 px-1 rounded-xl mt-2 mb-4' type="text" />
         </div>

         <div className="w-full px-4">
           <label htmlFor="">Alamat</label>
           <input onChange={(target)=>{setAlamat(target.currentTarget.value)}} className='border-2 border-slate-500 w-full py-2 px-1 rounded-xl mt-2 mb-4' type="text" />
         </div>

           <label htmlFor="">Tanggal Lahir</label>
           <input onChange={(target)=>{itungUmur(target.currentTarget.value)}} className='border-2 border-slate-500 w-full py-2 px-1 rounded-xl mt-2 mb-4' type="date" />
         </div>
      <div className="w-full px-4">
           <label htmlFor="">Umur (tahun)</label>
           <input value={umur} className='border-2 border-slate-500 w-full py-2 px-1 rounded-xl mt-2 mb-4 bg-slate-200' type="number" readOnly />
         </div>
         <div className="w-1/2 px-4">
           <label htmlFor="">Tinggi Badan (cm)</label>
           <input onChange={(target)=>{itungmbi(Number(target.currentTarget.value), 'tinggi')}} className='border-2 border-slate-500 w-full py-2 px-1 rounded-xl mt-2 mb-4' type="number" />
         </div>

         <div className="w-1/2 px-4">
           <label htmlFor="">Berat Badan (kg)</label>
           <input onChange={(target)=>{itungmbi(Number(target.currentTarget.value), 'berat')}} className='border-2 border-slate-500 w-full py-2 px-1 rounded-xl mt-2 mb-4' type="number" />
         </div>

         <div className="w-full px-4">
           <label htmlFor="">MBI</label>
           <input value={bmi} className='border-2 border-slate-500 w-full py-2 px-1 rounded-xl mt-2 mb-4 bg-slate-200' type="text" readOnly />
         </div>
      </div>
    </div>

    <div className="flex justify-end mt-8">
      {/* <button onClick={()=>{setActive(active-1)}} className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
        Kembali
      </button> */}
      <button onClick={()=>{toQuestion()}} className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
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
      <span className="text-gray-500 text-sm">{active+1}/15</span>
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
      {active > 0 ? 
      <button onClick={()=>{setActive(active-1);}} className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
        Kembali
      </button>
      :
      <button onClick={()=>{}} className="px-6 py-2 text-white rounded-md hover:bg-slate-700 bg-slate-500" disabled>
        Kembali
      </button>
      
      }
    
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
    <a href="/information" className='text-blue-400'>Kembali ke home </a>
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
