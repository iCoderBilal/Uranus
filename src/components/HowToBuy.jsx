
import webLogo from "../assets/web-logo.png"
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import Footer from "./Footer";
import Header from "./Header";

const HowToBuy = () => {
    const mySectionRef = useRef(null);

    const scrollToSection = () => {
        mySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
    
  return (
    <>
      <div id="hero-section">
      <Header/>
        <div className="hero-section-main pb-20">
                <h1 data-aos="zoom-in" className="pt-16 lg:pt-32 text-[10vw] lg:text-[4vw] lg:pl-[250px] lg:pr-[250px] pl-3 pr-3 leading-[12vw] lg:leading-[5.5vw] text-center font-bold" >
                How To Buy
                <br/>
                <b className="text-[13vw] leading-[19vw] lg:text-[7vw] lg:leading-[8vw]">$ANUS</b>
                </h1>
                <p className="mt-6 lg:mb-20 mb-14 text-[4.5vw] lg:text-[1.5vw] lg:pl-[350px] lg:pr-[350px] pl-3 pr-3 text-slate-300 lg:leading-[1.9vw] text-center">
                If you’re new to buying $anus, it’s ok. We’ll help your curiosity get filled. </p>

               <a onClick={scrollToSection} className=" cursor-pointer mx-auto text-center mt-10 py-[15px] px-[40px] bg-custom-blue lg:text-[1.5vw] lg:leading-[2.2vw] font-semibold text-white rounded-[40px]">Buy $ANUS NOW</a>
            </div>
      
        </div>
 



<section className="overflow-hidden bg-[#000000]" ref={mySectionRef}>
  <div className="items-center w-full py-24 mx-auto px-4 lg:px-0 max-w-7xl md:px-0">

    <div className="pt-12 mx-auto text-left border-white/70">
      <h2 className="sr-only">intro.</h2>
      <div>
        <div className="grid grid-cols-1 text-sm gap-x-2 gap-y-14 md:gap-12 md:grid-cols-2" data-aos="fade-down">


          <div>
            <div
              className="text-white border-2 border-white justify-center flex h-12 items-center w-12 bg-[#3361FD]"
              style={{
                borderBottomLeftRadius: "15px 255px",
                borderBottomRightRadius: "225px 15px",
                borderTopLeftRadius: "255px 15px",
                borderTopRightRadius: "15px 225px",
                boxShadow: "-5px 5px #3361FD"
              }}
            >
             <p className='lg:text-2xl'>1</p>
            </div>
            <div>
              <p className="mt-6 text-2xl font-medium leading-6 tracking-normal text-white lg:text-4xl">
                Prepare For Entry
              </p>
            </div>
            <div className="mt-2 text-base lg:text-xl text-neutral-300">
              Download and Set Up Solflare Wallet: Begin by visiting <a href='https://solflare.com/' className='underline'>Solflare's website</a> to download the Solflare wallet. Follow the instructions to set up your wallet and securely store your seed phrase. If you prefer using a hardware wallet, Solflare supports connections with devices like Ledger.
            </div>
          </div>
          <div>
            <div
              className="text-white border-2 border-white justify-center flex h-12 items-center w-12 bg-[#3361FD]"
              style={{
                borderBottomLeftRadius: "15px 255px",
                borderBottomRightRadius: "225px 15px",
                borderTopLeftRadius: "255px 15px",
                borderTopRightRadius: "15px 225px",
                boxShadow: "-5px 5px #3361FD"
              }}
            >
             <p className='lg:text-2xl'>2</p>
            </div>
            <div>
              <p className="mt-6 text-2xl font-medium leading-6 tracking-normal text-white lg:text-4xl">
              Get Your Injection Ready

              </p>
            </div>
            <div className="mt-2 text-base lg:text-xl text-neutral-300">
            Fund Your Wallet with Solana (SOL): To engage in transactions on the Solana network, you'll need SOL, the native cryptocurrency, to cover transaction fees (gas). You can acquire SOL through centralized exchanges by trading fiat or other cryptocurrencies. Once you have SOL, withdraw it to your Solflare wallet address. 
            </div>
          </div>

          <div>
            <div
              className="text-white border-2 border-white justify-center flex h-12 items-center w-12 bg-[#3361FD]"
              style={{
                borderBottomLeftRadius: "15px 255px",
                borderBottomRightRadius: "225px 15px",
                borderTopLeftRadius: "255px 15px",
                borderTopRightRadius: "15px 225px",
                boxShadow: "-5px 5px #3361FD"
              }}
            >
             <p className='lg:text-2xl'>3</p>
            </div>
            <div>
              <p className="mt-6 text-2xl font-medium leading-6 tracking-normal text-white lg:text-4xl">
              Inject Your Liquidity Into Uranus
              </p>
            </div>
            <div className="mt-2 text-base lg:text-xl text-neutral-300">
            It’s time to use the app to swap your sol into Uranus. 
         

<p className='my-4'>9hjZ8UTNrNWt3YUTHVpvzdQjNbp64NbKSDsbLqKR6BZc</p>



(make sure it's the right one – no one likes ending up on the wrong planet). Decide how many SOL units you want to exchange, and confirm the transaction in your wallet. It’s like swapping space fuel for cosmic goodies!
            </div>
          </div>



          <div>
            <div
              className="text-white border-2 border-white justify-center flex h-12 items-center w-12 bg-[#3361FD]"
              style={{
                borderBottomLeftRadius: "15px 255px",
                borderBottomRightRadius: "225px 15px",
                borderTopLeftRadius: "255px 15px",
                borderTopRightRadius: "15px 225px",
                boxShadow: "-5px 5px #3361FD"
              }}
            >
             <p className='lg:text-2xl'>4</p>
            </div>
            <div>
              <p className="mt-6 text-2xl font-medium leading-6 tracking-normal text-white lg:text-4xl">
              Watch Uranus Rise as Fiat Collapses
              </p>
            </div>
            <div className="mt-2 text-base lg:text-xl text-neutral-300">
            After your escapade, you might want to keep an eye on your intergalactic investment. Tools like <a className='underline' href='https://www.dextools.io/app/en/solana/pair-explorer/your-token-pair'>DEX Screener</a> are your telescopes to the stars, helping you monitor the market movements and performance of your token.
            </div>
          </div>


        </div>
     
      </div>
    </div>
  </div>
</section>

<div className="believe-section pb-16">
        <h1 className="pt-16 lg:pt-32 text-[7vw] lg:text-[2.5vw] lg:pl-[250px] lg:pr-[250px] pl-3 pr-3 leading-[9vw] lg:leading-[3vw] text-center text-white font-bold">
        Is Uranus the Next Big Thing in Crypto?
        </h1>
        <p className="mt-8 mb-14 text-[4vw] lg:text-[1.2vw] lg:pl-[33vw] lg:pr-[33vw] pl-3 pr-3 text-slate-300 lg:leading-[1.5vw] text-left">
        Remember, navigating the crypto universe can be thrilling, but it’s wise to have your space suit on – always do your research and be prepared for cosmic volatility! 🚀💫
<br/>
<br/>
The revolution is underway, you’re still early. 
<br/>
<br/>
Uranus: it’s more than a load of hot air. 
<br/>
<br/>
It’s the downfall of the false rulers of humanity 🙂
        </p>

        
      </div>


      <Footer/>

    </>
  )
}

export default HowToBuy
