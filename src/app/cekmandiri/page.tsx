'use client'
import React, { useState } from 'react'

function CekMandiri() {

  const [loading,setLoading] = useState(false)
const [jawaban, setJawaban] = useState([

  // hipoglikemia
  {question : 'Apakah anda pernah mengalami gejala seperti gemetar, gelisah, keringat dingin, mudah lelah,  lapar mendadak, saat kadar gula darah  <70 mg/dL dan lebih dari 54 mg/dL ? Dan membaik setelah mengkonsumsi makanan atau minuman manis?', answer : ''},
  {question : 'Pernahkah anda mengalami pandangan kabur, kelelahan berat dan merasakan kebingungan, kesulitan berkonsentrasi, atau pusing ketika kadar gula darah Anda di bawah 54 mg/dL?', answer : ''},
  {question : 'Pernahkah Anda mengalami  kehilangan kesadaran atau pingsan akibat kadar gula darah yang sangat rendah (<54 mg/dL dengan disertai gangguan kesadaran) dan membutuhkan bantuan orang lain untuk mengatasi kondisi hipoglikemia tersebut ?', answer : ''},
  
  // hiperglekimia
  {question : 'Apakah Anda mengalami peningkatan kadar gula darah sewaktu antara 140-200 mg/dL disertai gejala ringan seperti sering merasa haus (polidipsia), sering buang air kecil (poliuria), dan lapar berlebihan (polifagia) ?', answer : ''},
  {question : 'Apakah kadar gula darah sewaktu Anda mencapai 200-300 mg/dL dengan gejala sedang seperti kelemahan, kelelahan, penglihatan kabur, dan mulut kering yang mulai mengganggu aktivitas sehari-hari ?', answer : ''},
  {question : 'Apakah Anda memiliki kadar gula darah sewaktu >300 mg/dL dengan gejala berat termasuk kebingungan, nyeri perut, mual/muntah, pernapasan cepat, atau penurunan kesadaran yang memerlukan perhatian medis segera ?', answer : ''},
  
  // retinopati diabetik
  {question : 'Apakah Anda mengalami gangguan penglihatan ringan seperti penglihatan kabur atau adanya titik-titik kecil (mikroaneurisma) pada retina tanpa adanya perdarahan atau gejala berat lainnya?', answer : ''},
  {question : 'Apakah Anda mengalami penglihatan kabur yang lebih sering atau kehilangan sebagian penglihatan disertai adanya perdarahan retina, eksudat halus, atau pembuluh darah tidak normal pada satu atau lebih kuadran retina?', answer : ''},
  {question : 'Apakah Anda mengalami penurunan tajam penglihatan, munculnya bayangan gelap atau bercak-bercak pada penglihatan, disertai adanya neovaskularisasi (pertumbuhan pembuluh darah baru abnormal) atau perdarahan vitreus pada retina?', answer : ''},
  
  // Nefropati diabetik
  {question : 'Apakah hasil pemeriksaan AuCR Anda berada pada kisaran 30-300 mg/g (mikroalbuminuria) dengan keluhan  pembengkakan ringan di kaki atau pergelangan kaki ?', answer : ''},
  {question : 'Apakah AuCR Anda > 300 mg/g dengan pembengkakan yang jelas di kaki/tangan atau gejala mual dan lelah?', answer : ''},
  {question : 'Apakah AuCR Anda > 300 mg/g dengan pembengkakan berat, gatal-gatal pada kulit, lelah, mual berulang, dan tekanan darah tidak stabil?', answer : ''},

  // Neuropati diabetik
  {question : 'Apakah Anda merasakan kesemutan atau kebas ringan yang sering muncul di ujung jari tangan atau kaki, terutama saat malam hari atau saat beristirahat selama beberapa minggu terakhir ?', answer : ''},
  {question : 'Apakah Anda merasakan kesemutan atau kebas yang semakin sering dan terasa nyeri menjalar dari kaki ke betis atau lengan selama beberapa minggu terakhir?', answer : ''},
  {question : 'Apakah Anda sudah merasakan mati rasa luas di kaki atau tangan sehingga sering mengalami luka yang tidak terasa sampai akhirnya terluka parah? ', answer : ''},


])

const url = "https://script.google.com/macros/s/AKfycbz4Wbawy7vmgYXhgVacW8nk3aZZ_yZiaPCv3yjYB3I/devhttps://script.google.com/macros/s/AKfycbyOJ4J5vExa9FJC6y6A2P5_C9rzJMQSnNeFFyAOX5f1CuXhKH_jnAccesTgJv7t26sV/exec"
// tambah data ke spreadsheet
          const saveToDB = async () => {
            
       
// nama=${nama.toString()}alamat=${alamat.toString()}&gula_darah=${guldar.toString()}&statistik=${statistik.toString()}&diastolik=${diastolik.toString()}&tinggi=${tinggi.toString()}&berat=${berat.toString()}&umur=${umur.toString()}&bmi=${bmi.toString()}&hipoglikemia=${result[0].toString()}&hiperglekimia=${result[1].toString()}&retinopati_diabetik=${result[2].toString()}&Nefropati_diabetik=${result[3].toString()}&Neuropati_diabetik=${result[4].toString()}
                // console.log('hasil', url+`?action=add-rekam&nama=${nama.toString()}&alamat=${alamat.toString()}&gula_darah=${guldar.toString()}&statistik=${statistik.toString()}&diastolik=${diastolik.toString()}&tinggi=${tinggi.toString()}&berat=${berat.toString()}&umur=${umur.toString()}&bmi=${bmi.toString()}&hipoglikemia=${hasil[0].res.toString()}&hiperglekimia=${hasil[1].res.toString()}&retinopati_diabetik=${hasil[2].res.toString()}&Nefropati_diabetik=${hasil[3].res.toString()}&Neuropati_diabetik=${hasil[4].res.toString()}`)


                 await fetch(url+`?action=add-rekam&nama=${nama.toString()}&alamat=${alamat.toString()}&gula_darah=${guldar.toString()}&statistik=${statistik.toString()}&diastolik=${diastolik.toString()}&tinggi=${tinggi.toString()}&berat=${berat.toString()}&umur=${umur.toString()}&bmi=${bmi.toString()}&hipoglikemia=${hasil[0].res.toString()}&hiperglekimia=${hasil[1].res.toString()}&retinopati_diabetik=${hasil[2].res.toString()}&Nefropati_diabetik=${hasil[3].res.toString()}&Neuropati_diabetik=${hasil[4].res.toString()}`)
                .then((res) => res.json())
                .then(() => {
                  alert("data berhasil disimpan")
                  setLoading(true)
                  
                })
             alert("data berhasil disimpan")
                  setLoading(true)
             console.log("Berhasi;")
         }

        //  nama
        // alamat
        // gula_darah
        // statistik
        // diastolik
        // tinggi
        // berat
        // umur
        // bmi
        // hipoglikemia
        // hiperglekimia
        // retinopati diabetik
        // Nefropati diabetik
        // Neuropati diabetik


const [profile, setProfile] = useState(true)
const [result, setResult] = useState(false)
const [hasil, setHasil] = useState([{res : ""},{res : ""},{res : ""},{res : ""},{res : ""}])
const [nama, setNama] = useState('')
const [alamat, setAlamat] = useState('')

const [guldar, setGuldar] = useState('')
const [statistik, setStatistik] = useState('')
const [diastolik, setDiastolik] = useState('')

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
  const hasilCek = hasil
  // let score = 0
  // score += umur >= 45 ? 1 : 0
  // score += bmi >= 25 ? 1 : 0
// hipoglikemia
  if(jawaban[2].answer === "ya")
  {
  hasilCek[0].res = 'Grade 3 hipoglikemia'
  }
  else if(jawaban[1].answer === "ya")
  {
  hasilCek[0].res = 'Grade 2 hipoglikemia'
  }
  else if(jawaban[0].answer === "ya")
  {
  hasilCek[0].res = 'Grade 1 hipoglikemia'
  }
  else{
  hasilCek[0].res = 'tidak memiliki resiko hipoglikemia'
  }
  

  // hiperglekimia
   if(jawaban[5].answer === "ya")
  {
  hasilCek[1].res = 'Grade 3 hiperglekimia'
  }
  else if(jawaban[4].answer === "ya")
  {
  hasilCek[1].res = 'Grade 2 hiperglekimia'
  }
  else if(jawaban[3].answer === "ya")
  {
  hasilCek[1].res = 'Grade 1 hiperglekimia'
  }
  else{
  hasilCek[0].res = 'tidak memiliki resiko hiperglekimia'
  }
 


    // retinopati diabetik
  if(jawaban[8].answer === "ya")
  {
  hasilCek[2].res = 'Grade 3 retinopati diabetik'
  }
  else if(jawaban[7].answer === "ya")
  {
  hasilCek[2].res = 'Grade 2 retinopati diabetik'
  }
  else if(jawaban[6].answer === "ya")
  {
  hasilCek[2].res = 'Grade 1 retinopati diabetik'
  }
  else{
  hasilCek[2].res = 'tidak memiliki resiko retinopati diabetik'
  }




    // Nefropati diabetik
  if(jawaban[11].answer === "ya")
  {
  hasilCek[3].res = 'Grade 3 Nefropati diabetik'
  }
  if(jawaban[10].answer === "ya")
  {
  hasilCek[3].res = 'Grade 2 Nefropati diabetik'
  }
  else if(jawaban[9].answer === "ya")
  {
  hasilCek[3].res = 'Grade 1 Nefropati diabetik'
  }
  else{
  hasilCek[3].res = 'tidak memiliki resiko Nefropati diabetik'
  }



  // Neuropati diabetik
  if(jawaban[14].answer === "ya")
  {
  hasilCek[4].res = 'Grade 3 Neuropati diabetik'
  }
  if(jawaban[13].answer === "ya")
  {
  hasilCek[4].res = 'Grade 2 Neuropati diabetik'
  }
  if(jawaban[12].answer === "ya")
  {
  hasilCek[4].res = 'Grade 1 Neuropati diabetik'
  }
  else{
  hasilCek[4].res = 'tidak memiliki resiko Neuropati diabetik'
  }


setHasil(hasilCek)
    setResult(true)

console.log(hasilCek)

}

const toNext = () =>{
  const val = active+1
  if(val <= (jawaban.length-1))
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
  if(umur != 0 && bmi != 0 && nama != '' && alamat != '' && guldar != "" && statistik != "" && diastolik != ""){

    setProfile(false)
  }
  else{
    alert('Lengkapi data dengan benar terlebih dahulu!')
  }
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-sky-800 to-sky-600 px-5 md:px-0">


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
        <div className="w-full px-4">
           <label htmlFor="">Hasil Cek Gula Darah</label>
           <input onChange={(target)=>{setGuldar(target.currentTarget.value)}} value={guldar} className='border-2 border-slate-500 w-full py-2 px-1 rounded-xl mt-2 mb-4 ' type="number" />
         </div>

        <div className="w-full px-4">
           <label htmlFor="">Tekanan Darah</label>
           <div className="w-full flex">

            <div className="w-1/2">
                <input onChange={(target)=>{setStatistik(target.currentTarget.value)}} value={statistik} className='border-2 border-slate-500 w-[90%] py-2 px-1 rounded-xl mt-2 mb-4' type="number" placeholder='statistik' />
            </div>

            <div className="w-1/2">
               <input onChange={(target)=>{setDiastolik(target.currentTarget.value)}} value={diastolik} className='border-2 border-slate-500 w-[90%] py-2 px-1 rounded-xl mt-2 mb-4' type="number" placeholder='diastolik' />
            </div>


           </div>
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
           <label htmlFor="">IMT</label>
           <input value={bmi} className='border-2 border-slate-500 w-full py-2 px-1 rounded-xl mt-2 mb-4 bg-slate-200' type="text" readOnly />
         </div>
      </div>
    </div>

    <div className="flex justify-end mt-8">
      {/* <button onClick={()=>{setActive(active-1)}} className="px-6 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700">
        Kembali
      </button> */}
      <button onClick={()=>{toQuestion()}} className="px-6 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700">
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
      <span className="text-gray-500 text-sm">{active+1}/{jawaban.length}</span>
    </div>

    <p className="text-gray-800 mb-6">
      {jawaban[active].question}
    </p>

    <div className="space-y-4">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input onClick={()=>{addAnswer('ya')}} type="radio" name="hipertensi" value="ya" className="form-radio text-sky-600" checked={jawaban[active].answer === 'ya'}/>
        <span>Ya</span>
      </label>
      <label className="flex items-center space-x-2 cursor-pointer">
        <input onClick={()=>{addAnswer('tidak')}} type="radio" name="hipertensi" value="tidak" className="form-radio text-sky-600" checked={jawaban[active].answer === 'tidak'}/>
        <span>Tidak</span>
      </label>
    </div>

    <div className="flex justify-between mt-8">
      {active > 0 ? 
      <button onClick={()=>{setActive(active-1);}} className="px-6 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700">
        Kembali
      </button>
      :
      <button onClick={()=>{}} className="px-6 py-2 text-white rounded-md hover:bg-slate-700 bg-slate-500" disabled>
        Kembali
      </button>
      
      }
    
      <button onClick={()=>{toNext()}} className="px-6 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700">
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

{hasil && hasil.map((item, key)=>(
    <p key={key} className="text-green-500 mb-6 text-lg">
       * {item.res}
  </p>
))

}
{ 
// hasil === '1' ?
//  <p className="text-green-500 mb-6 text-2xl">
//       Risiko rendah
//     </p> :
//   hasil === '2' ?
//  <p className="text-yellow-500 mb-6 text-2xl">
//       Risiko sedang
//     </p>
//   :
//  <p className="text-red-500 mb-6 text-2xl">
//       Risiko tinggi — dianjurkan tes medis lebih lanjut
//     </p>
}
   
   <div className="flex">
    <a href="/information" className='text-blue-400'>Kembali ke home </a>
    {loading ?
    <a className='ml-auto text-green-400'>Selesai </a>

    :
    <button onClick={()=>{saveToDB()}} className='text-white ml-auto p-2 bg-amber-500'>Kirim Data </button>
    
  }
   </div>

   <div className="text-sm mt-8">* catatan :  kirim data akan mengirim data anda kepada kami sebagai bahan survei, pastikan anda setuju sebelum mengirim data.</div>


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
