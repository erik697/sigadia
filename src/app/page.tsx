import Image from "next/image";

export default function Home() {
  return (
     <div className='w-screen h-screen bg'>
      <div className="h-screen w-screen bg-black opacity-20 absolute"></div>
        <div className="flex flex-wrap h-full w-full">
            <div className="h-1/2 w-full mt-auto mx-4 text-3xl text-center">
            <p className="text-4xl text-red-700">Bersama Sigadia Lawan Diabetes, </p>
            <p>Raih Hidup Sehat dan Berkualitas</p>
            </div>
            
        </div>

        <div className="w-full absolute bottom-0 left-0 flex justify-center items-center" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <a href="/information" className='px-4 py-4 rounded-xl bg-linear-to-r from-red-700 to-slate-800 text-white mr-4 text-lg'>Information</a>
                        <a href="/cekmandiri" className='px-4 py-4 rounded-xl bg-linear-to-r border-2 border-red-500 text-red-500 text-lg box-border'>Cek Diri</a>
        </div>
    </div>
  );
}
