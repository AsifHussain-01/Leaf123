
function App() {
  return (
    <div className=" container w-full h-full mx-auto my-4 md:h-full md:w-full md:mx-auto">
      {/* header */}
      <div className="w-full h-full flex items-center justify-between md:w-full md:h-full Md:flex md:items-center md:justify-between md:px-2">
        <div className="flex items-end justify-center gap-5 md:flex md:items-center md:justify-center md:gap-2">
          <img className="h-[50px] w-[50px] md:h-[30px] md:w-[30px]" src="/logo.svg" />
          <h1 className="text-sm font-bold">Leaf Envionnmental</h1></div>
        <div>
          <ul className="flex justify-center gap-x-4 text-base cursor-pointer font-semibold">
            <li className="hover:bg-blue-500">Home</li>
            <li className="hover:bg-blue-500">About</li>
            <li className="hover:bg-blue-500">Our Mission</li>
            <li className="hover:bg-blue-500">Pages</li>
            <li className="hover:bg-blue-500">Support</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <button className=" h-8 rounded-full gap-1 flex bg-yellow-400  text-sm cursor-pointer font-semibold px-3 py-1 hover:bg-blue-500">
            <img className="h-5 w-5 " src="currencyexchange.svg" />
            Contibuet</button>
          <button className=" h-8 rounded-full flex gap-1 bg-yellow-400 text-sm cursor-pointer font-semibold px-3 py-1 hover:bg-blue-500">
            <img className="h-5 w-5 " src="input_FILL0_wght400_GRAD0_opsz48.svg" />
            Sign In</button>
        </div>
      </div>
      {/* b */}
      <div className="items-center flex justify-center  gap-9 md:gap-0">
        <div className="">
          <h1 className="text-6xl font-bold pb-16 md:pl-3">We safeguard</h1>
          <h1 className="text-4xl font-bold pb-16 md:pl-3">The environment.</h1>
          <p className="w-96  font-bold text-lx md:pl-3">Over the past several decades, as the world has increasingly warmed,
            so has its potential to burn.</p>
        </div>
        <div><img className="w-[900px] h-[700px] md:w-[700px] md:h-[700px]" src="./forest.svg"></img></div>
      </div>
      <div className="flex justify-end gap-5 md:px-2">
        <button className=" rounded-full gap-1 flex ml-6 mt-1 bg-gray-300  text-sm cursor-pointer font-semibold pl-3 pr-3 pb-1 pt-1 hover:bg-blue-400">
          <img className="h-5 w-5 " src="local_library_FILL0_wght400_GRAD0_opsz48.svg" />
          Our mission</button>
        <button className=" rounded-full flex gap-1 ml-2 mt-1 bg-gray-300 text-sm cursor-pointer font-semibold pl-3 pr-3 pb-1 pt-1 hover:bg-blue-400">
          <img className="h-5 w-5 " src="sim_card_download_FILL0_wght400_GRAD0_opsz48.svg" />
          Donwload report</button>
      </div>
    </div>

  );
}

export default App;
