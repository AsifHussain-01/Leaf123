
function App() {
  return (
    <div className="pl-14 pr-14 max-w-full h-full w-max h-max mr-auto ml-auto gap-5 bg-[#e9ecef]">
      <div className="pl-14 pr-14 w-full h-full w-max h-max items-center mr-auto ml-auto flex justify-center justify-between gap-5 ">
      <img className="h-[50px] w-[50px] mt-5"src="/logo.svg" />
      <h1 className="mt-5 text-sm font-bold ">Leaf Envionnmental</h1>
      <div>
        <ul className="pl-14 flex justify-center gap-5 mt-5 text-base cursor-pointer font-semibold">
          <li className="hover:bg-blue-500">Home</li>
          <li className="hover:bg-blue-500">About</li>
          <li className="hover:bg-blue-500">Our Mission</li>
          <li className="hover:bg-blue-500">Pages</li>
          <li className="hover:bg-blue-500">Support</li>
        </ul>
      </div >
      
      <button className=" gap-1 flex ml-6 mt-5 bg-yellow-400  text-sm cursor-pointer font-semibold pl-3 pr-3 pb-1 pt-1 hover:bg-blue-500">
        <img className="h-5 w-5 " src="currencyexchange.svg" />
        Contibuet</button>
      <button className=" flex gap-1 ml-2 mt-5 bg-yellow-400 text-sm cursor-pointer font-semibold pl-3 pr-3 pb-1 pt-1 hover:bg-blue-500">
      <img className="h-5 w-5 " src="input_FILL0_wght400_GRAD0_opsz48.svg" />
        Sign In</button>
      
      </div>
      <div className="pl-14 pr-14 w-full h-full w-max h-max items-center mr-auto ml-auto mt-12 flex justify-center justify-between gap-5 ">
        <div className="">
          <h1 className="text-5xl font-bold pb-10">We safeguard</h1>
          <h1 className="text-3xl font-bold pb-10">The environment.</h1>
          <p className="w-96 font-bold pb-">Over the past several decades, as the world has increasingly warmed,
             so has its potential to burn.</p>
        </div>
        <div><img className="w-full h-[400px]" src="./forest.svg"></img></div> 
      </div>
      <div className="flex pl-14 pr-10 pb-10 gap-5">
      <button className=" gap-1 flex ml-6 mt-5 bg-gray-300  text-sm cursor-pointer font-semibold pl-3 pr-3 pb-1 pt-1 hover:bg-blue-400">
        <img className="h-5 w-5 " src="local_library_FILL0_wght400_GRAD0_opsz48.svg" />
        Contibuet</button>
      <button className=" flex gap-1 ml-2 mt-5 bg-gray-300 text-sm cursor-pointer font-semibold pl-3 pr-3 pb-1 pt-1 hover:bg-blue-400">
      <img className="h-5 w-5 " src="sim_card_download_FILL0_wght400_GRAD0_opsz48.svg" />
        Sign In</button>
        </div>
    </div>
    
  );
}

export default App;
