import logoUniswap from './assets/uni-logo.svg';
// import BG from './assets/woooow-bg3.png';
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";


function Pawa() {
  const UniswapLink = ""

  return (
    <main className="bg-[url('./assets/woooow-bg3.png')] w-screen aspect-bg min-h-lvh bg-cover bg-center  font-medium bg-no-repeat text-prpl font-satoshi flex flex-col justify-around items-center lg:px-[12.75rem] md:px-10 xs:px-3 lg:text-2xl md:text-xl sm:text-md">
      <header className="w-full flex justify-center items-center pt-[4.8rem] ">
        <h1 className="md:text-8xl text-6xl">PAWA</h1>
      </header>
      <section className="flex justify-between mb-8 md:w-3/5 mt-7 sm:w-full">
        <a className="flex items-center cursor-pointer pr-7 pb-10" aria-label="Buy on Uniswap" href={UniswapLink}>
          <span className="underline underline-offset-3">Buy on Uniswap</span>
          <img src={logoUniswap} alt="Uniswap logo" className="token-svg group w-10 h-full pl-1 pb-1 m-2" />
        </a>
        <a className="underline underline-offset-3 cursor-pointer  pt-4 ml-2" href="https://polygonscan.com/address/0x">
          View on PolygonScan
        </a>
      </section>
      <footer className="flex flex-col md:w-4/5 pt-8 mt-8 mb-1 xs:w-full">
        <div className="flex flex-col justify-around items-start w-full pt-2 mt-3">
          <h2 className="font-bold pt-1">Contact</h2>
          <a href="mailto:info@pawatoken.xyz" >
            info@pawatoken.xyz
          </a>
          <p className="sm:text-xl text-sm md:text-2xl">
            Contract address:<br/>
            0x5C9bC954F6ed9500A4851c2e3A9b286bF8918c2A
          </p>
        </div>
        <div className="flex justify-end items-end w-full min-h-20 mt-8">
          <a href="" className="flex text-prpl text-[2.75rem] mt-2 ml-6 p-4">
            <FaXTwitter />
          </a>
          <a href="" className="flex text-[3rem] mt-2 mx-6 p-4">
            <LiaTelegramPlane />
          </a>
        </div>
      </footer>
    </main>
  )
}

export default Pawa
