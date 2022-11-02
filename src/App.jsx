import imageQrCode from "./assets/image/image-qr-code.png"
export const App = () => {
  return (
    <section className="w-screen h-screen pt-14 bg-slate-300">
     <div className="w-[25rem] h-[38rem] bg-slate-50 my-0 mx-auto rounded-3xl pt-5 ">
       <figure className="mb-8">
        <img className="max-w-[90%] rounded-2xl my-0 mx-auto" src={imageQrCode} alt="imagem qr-code" />
       </figure>
       <div>
         <h2 className="text-2xl text-center mb-3 font-bold text-slate-900">Acesse nosso site por QR CODE</h2>
         <p className="text-center text-lg max-w-xs my-0 mx-auto text-gray-500">Escaneie o QR Code e tenha acesso as ofertas imperdíveis de nossa loja.</p>
       </div>
     </div> 
    </section>
  )
}

