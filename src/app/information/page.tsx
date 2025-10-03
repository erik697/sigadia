import React from 'react'
import Image from 'next/image'

function Information() {
  return (
    <div>
      <div className=''>
        <div className="w-full fixed top-0 left-0 z-50">
            <div className="w-full flex justify-center items-center">
                <div className="w-[90%] mt-8 bg-white shadow-2xl rounded-4xl flex md:flex-wrap justify-center md:justify-between items-center p-2 md:px-4 md:py-4 text-slate-700">
                    <a href='' className="w-10 h-10 rounded-full ml-5 md:mr-52">
                        <Image src={'/icons/logo.png'} className='w-10 contain-strict ' alt='' width={1000} height={1100}></Image>
                    </a>
                    <div className="flex justify-end ml-7 md:mr-8 items-center">
                       <a href='#one' className="md:hidden w-10 h-10 rounded-full ml-2">
                         <Image src={'/icons/home.png'} className='w-10 contain-strict rounded-full ' alt='' width={1000} height={1000}></Image>
                       </a>
                       <a href='#two' className="md:hidden w-10 h-10 rounded-full ml-2">
                         <Image src={'/icons/about.png'} className='w-10 contain-strict rounded-full ' alt='' width={1000} height={1000}></Image>
                       </a>
                       <a href='#three' className="md:hidden w-10 h-10 rounded-full ml-2">
                         <Image src={'/icons/diabetes.png'} className='w-10 contain-strict rounded-full ' alt='' width={1000} height={1000}></Image>
                       </a>
                        <a href='#one' className="md:mx-8 hidden md:block">Home</a>
                        <a href='#two' className="md:mx-8 hidden md:block">About</a>
                        <a href='#three' className="md:mx-8 hidden md:block">Diabetes</a>
                        <a href='/cekmandiri' className="mx-8 p-1 rounded-2xl md:px-4 bg-linear-to-r from-red-700 to-slate-800 text-white">Cek Diri</a>
                    </div>
                </div>
            </div>
        </div>

        <div id="one" className="h-dvh w-full flex flex-wrap-reverse bg-linear-to-b from-red-500 to-white ">
            <div className="mt-auto w-full md:w-1/2">
                <div className="mx-4 md:mx-24 pb-10">
                    <p className='text-5xl'>Do what it takes to start</p>
                    <p className='text-3xl text-red-500 mt-4'>to prevent diabetes and live well</p>
                    <div className="mt-8">    
                        <a href="" className='px-4 py-4 rounded-xl bg-linear-to-r from-red-700 to-slate-800 text-white mr-4 text-lg'>Jelajahi</a>
                        <a href="/cekmandiri" className='px-4 py-4 rounded-xl bg-linear-to-r border-2 border-red-500 text-red-500 text-lg box-border'>Cek Diri</a>
                    </div>
                </div>
            </div>

            <div className="hidden md:w-1/2 mt-auto">
<Image src={'/images/hero.png'} className='w-[90%] contain-strict' alt='' width={1500} height={1000}></Image>
            
            </div>
        </div>   

            <div className="bg-red-800 w-full h-52">

            </div>

        <div className="w-full flex mt-[-84px] flex-wrap">
           
            <div className="w-full md:w-1/3 flex items-center justify-center mt-10 ">
                <div className="rounded-3xl bg-white w-[80%] shadow-2xl">
                    <div className="p-8">
                        <Image src={'/icons/user.png'} className='w-20 my-4 contain-strict mx-auto' alt='' width={1500} height={1000}></Image>
                        <div className="text-xl font-bold text-center my-2">Tentang Kami</div>
                        <p className='text-center text-slate-700'>
                        Ketahui kami lebih luas untuk informasi terlengkap mengenai diabetes.
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className="w-full md:w-1/3 flex items-center justify-center mt-10">
                <div className="rounded-3xl bg-white w-[80%] shadow-2xl">
                    <div className="p-8">
                           <Image src={'/icons/cek.png'} className='w-20 my-4 contain-strict mx-auto' alt='' width={1500} height={1000}></Image>
                        <div className="text-xl font-bold text-center my-2">Cek Diri</div>
                        <p className='text-center text-slate-700'>    
                        Mulai cek diri untuk mengetahui kamu selalu dalam keadaan sehat.
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className="w-full md:w-1/3 flex items-center justify-center mt-10">
                <div className="rounded-3xl bg-white w-[80%] shadow-2xl">
                    <div className="p-8">
                           <Image src={'/icons/diabetes.png'} className='w-20 my-4 contain-strict mx-auto' alt='' width={1500} height={1000}></Image>
                        <div className="text-xl font-bold text-center my-2">Diabetes</div>
                        <p className='text-center text-slate-700'>
                            Ketahui edukasi dan penatalaksanaan diabetes.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>


<div id="two">
<div className="text-2xl text-red-600 text-center flex items-center justify-center my-4">
    <div className="w-[30%] text-center mt-24 flex items-center justify-center my-4">
   <span className='flex-grow border-t border-red-600 mr-2'></span> SIGADIA <span className='flex-grow border-t border-red-600 ml-2'></span>
    </div>
</div>


        <div className="w-full flex flex-wrap py-10 px-6 md:px-18">
            <div className=""></div>
            <div className="hidden md:block w-1/2">
            <Image src={'/images/tentang.jpg'} className='w-[90%] contain-strict' alt='' width={1500} height={1000}></Image>
            </div>
            <div className="w-full md:w-1/2">
            <div className="md:p-6 text-[14px]">
            <h1 className='text-lg md:text-xl font-bold'>SIGADIA (SIGAP HADAPI DIABETES)</h1>

                <p className='mt-5'>
                    Selamat datang di SIGADIA, platform inovatif yang didedikasikan untuk menuntun Anda memahami diabetes dengan lebih baik. Kami berkomitmen untuk menyediakan informasi komprehensif tentang diabetes, mulai dari dasar-dasar hingga upacaya pengelolaan pencegahannya.
                </p>

                <p className='mt-5'>Dengan SIGADIA, Anda akan menemukan berbagai artikel yang informatif dan edukatif mengenai pengertian, klasifikasi, dan dampak diabetes, strategi pencegahan yang efektif serta kuis interaktif untuk mendeteksi dini resiko diabetes militus secara dini. Kami percaya bahwa pengetahuan adalah kekuatan, dan bersama-sama kita bisa menghadapi tantangan diabetes dengan lebih siap.</p>
                <p className='mt-4'>Jelajahi konten-konten menarik kami dan temukan cara untuk menjaga kesehatan Anda. Mari kita hadapi diabetes dengan cerdas dan berdaya.</p>
            </div>
            </div>
        </div>
</div>

    
<div id="three">
<div className="text-2xl text-red-600 text-center mt-24 flex items-center justify-center my-4">
    <div className="md:w-[30%] text-center flex items-center justify-center my-4">
   <span className='flex-grow border-t border-red-600 mr-2'></span> Tentang Diabetes <span className='flex-grow border-t border-red-600 ml-2'></span>
    </div>
</div>


<div className="w-full flex flex-wrap px-6 md:px-18 py-10 bg-red-700">
<div className="w-full md:w-1/2 flex items-center justify-center">
<div className="w-[90%] bg-white shadow-2xl rounded-2xl p-4">
<h1 className='text-lg text-red-500 font-bold mb-2'>Diabetes</h1>
<p>
    Diabetes adalah penyakit kronis yang terjadi ketika tubuh tidak dapat memproduksi insulin secara cukup, atau tidak dapat menggunakan insulin secara efektif, sehingga kadar gula (glukosa) dalam darah menjadi tinggi. 
</p>

</div>
</div>

<div className="hidden md:block w-1/2">
<Image src={'/images/diabetes.jpg'} className='w-[90%] contain-strict' alt='' width={1500} height={1000}></Image>
</div>

</div>
</div>

<div id="three">
<div className="text-2xl text-red-600 text-center mt-24 flex items-center justify-center my-4">
    <div className="md:w-[30%] text-center flex items-center justify-center my-4">
   <span className='flex-grow border-t border-red-600 mr-2'></span> Klasifikasi diabetes melitus <span className='flex-grow border-t border-red-600 ml-2'></span>
    </div>
</div>


<div className="w-full flex flex-wrap px-6 md:px-18 py-10 ">
<div className="w-full flex items-center justify-center">
<div className="w-[90%] bg-white shadow-2xl rounded-2xl p-4">
<h1 className='text-lg text-red-500 font-bold mb-2'>Klasifikasi</h1>
<p>
Klasifikasi diabetes melitus secara umum dibagi menjadi beberapa tipe utama, yaitu: <br />


1. Diabetes Tipe 1  <br />
   - Pengertian : Diabetes tipe 1 adalah penyakit autoimun di mana sistem kekebalan tubuh menyerang dan menghancurkan sel-sel pankreas yang memproduksi insulin. Akibatnya, tubuh tidak dapat memproduksi insulin atau produksinya sangat sedikit.  <br />
   - Penyebab : Faktor genetik dan infeksi virus diduga menjadi pemicu utama. Biasanya muncul pada anak-anak dan remaja, tetapi bisa terjadi pada usia berapa pun.  <br />
   - Ciri-ciri : Penderita memerlukan suntikan insulin seumur hidup karena tubuh tidak mampu memproduksi insulin sendiri.  <br />
   - Faktor Risiko :  Riwayat keluarga, infeksi virus <br />
2. Diabetes Tipe 2 <br />
   - Pengertian : Diabetes tipe 2 terjadi ketika tubuh masih memproduksi insulin, tetapi sel-sel tubuh menjadi kurang sensitif terhadap insulin (resistensi insulin). Akibatnya, gula darah tetap tinggi. <br /> 
   - Penyebab : Kombinasi faktor genetik dan gaya hidup, seperti kelebihan berat badan, kurang aktivitas fisik, pola makan tidak sehat, dan bertambahnya usia.  <br />
   - Ciri-ciri :  Lebih sering terjadi pada orang dewasa, namun kini juga ditemukan pada usia muda.  <br />
   - Faktor Risiko : Obesitas, riwayat keluarga, tekanan darah tinggi, kadar kolesterol tidak normal, dan kurang olahraga.  <br />
   - Penanganan :  Meliputi perubahan gaya hidup, pengaturan pola makan, olahraga, dan penggunaan obat atau insulin jika diperlukan.  <br />

3. Diabetes Gestasional <br />
   - Pengertian :  Diabetes yang terjadi selama kehamilan dan biasanya hilang setelah melahirkan.  <br />
   - Penyebab : Hormon yang diproduksi oleh plasenta menyebabkan sel tubuh menjadi kurang sensitif terhadap insulin. <br /> 
   - Risiko : Jika tidak dikontrol, dapat membahayakan ibu dan janin serta meningkatkan risiko diabetes tipe 2 di masa depan.  <br />
   - Faktor Risiko : Kegemukan saat hamil atau kenaikan berat badan berlebihan selama kehamilan.  <br />

4. Diabetes Tipe Spesifik Lainnya  <br />
   - Diabetes yang disebabkan oleh kondisi medis tertentu, seperti penyakit pankreas (fibrosis kistik, pankreatitis), kelainan genetik (sindroma diabetes monogenik), atau penggunaan obat-obatan tertentu. <br />

</p>

</div>
</div>

</div>
</div>

<div id="three">
<div className="text-2xl text-red-600 text-center mt-24 flex items-center justify-center my-4">
    <div className="md:w-[30%] text-center flex items-center justify-center my-4">
   <span className='flex-grow border-t border-red-600 mr-2'></span> Komplikasi Pada Diabetes Mellitus <span className='flex-grow border-t border-red-600 ml-2'></span>
    </div>
</div>


<div className="w-full flex flex-wrap px-6 md:px-18 py-10 bg-red-700">
<div className="hidden md:block w-1/2">
<Image src={'/images/komplikasi.jpg'} className='w-[90%] contain-strict' alt='' width={1500} height={1000}></Image>
</div>

<div className="w-full md:w-1/2 flex items-center justify-center">
<div className="w-[90%] bg-white shadow-2xl rounded-2xl p-4">
<h1 className='text-lg text-red-500 font-bold mb-2'>Komplikasi</h1>
<p>
1. Gangguan Penglihatan hingga Kebutaan <br />
2. Kerusakan Ginjal <br />
3. Ulkus Kaki <br />
4. Penyakit Jantung koroner <br />
5. Stroke <br />
</p>

</div>
</div>



</div>
</div>

<div id="three">
<div className="text-2xl text-red-600 text-center mt-24 flex items-center justify-center my-4">
    <div className="md:w-[30%] text-center flex items-center justify-center my-4">
   <span className='flex-grow border-t border-red-600 mr-2'></span> Upaya Pencegahan Diabetes  <span className='flex-grow border-t border-red-600 ml-2'></span>
    </div>
</div>


<div className="w-full flex flex-wrap px-6 md:px-18 py-10 bg-red-700">
<div className="w-full md:w-1/2 flex items-center justify-center">
<div className="w-[90%] bg-white shadow-2xl rounded-2xl p-4">
<h1 className='text-lg text-red-500 font-bold mb-2'>Pencegahan</h1>
<p>
1. Mengkonsumsi makanan sehat <br />
2. Berolahraga <br />
3. Hindari stres <br />
4. Hindari Rokok dan Minuman Beralkohol <br />
5. Menurunkan berat badan <br />
</p>

</div>
</div>

<div className="hidden md:block w-1/2">
<Image src={'/images/pencegahan.jpg'} className='w-[90%] contain-strict' alt='' width={1500} height={1000}></Image>
</div>

</div>
</div>


        {/* <div id='one' className="pt-28 mx-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus temporibus eligendi nisi inventore dolorum incidunt est! Illo dolor molestiae voluptatem perspiciatis tempore qui! Nisi corrupti, rem accusamus tempora quod nulla neque earum fugit dolor ipsam alias voluptas provident, adipisci, impedit sit consectetur at? Quos quia quasi, et delectus ducimus facere ipsam consequuntur magni iure tempora voluptatum eos harum tempore.
        </div>
        
        
        <div id='two' className="pt-28 mx-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus temporibus eligendi nisi inventore dolorum incidunt est! Illo dolor molestiae voluptatem perspiciatis tempore qui! Nisi corrupti, rem accusamus tempora quod nulla neque earum fugit dolor ipsam alias voluptas provident, adipisci, impedit sit consectetur at? Quos quia quasi, et delectus ducimus facere ipsam consequuntur magni iure tempora voluptatum eos harum tempore.
        </div> */}

      </div>

      <div className="text-center mb-5 mt-24">Copyright © sigadia powered by techblendz 2025</div>
    </div>
  )
}

export default Information
