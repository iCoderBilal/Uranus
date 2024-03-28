function Believe() {
  return (
    <>
      <div className="guide-section bg-gradient-to-r from-cyan-700 to-blue-800 p-5 lg:p-10 shadow-lg text-white">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8">
          How to Purchase Uranus Token (ANUS) on Solana
        </h2>
        <p className="mb-6 text-lg">
          Follow this guide to secure your first $ANUS tokens on the Solana network, starting from wallet setup to transaction.
        </p>

        <div className="steps-section mb-8">
          <h3 className="text-xl lg:text-2xl font-semibold mb-5">Set Up Solflare Wallet</h3>
          <ol className="list-decimal pl-4 lg:pl-8 space-y-3 text-base lg:text-lg">
            <li>
              Visit <a href="https://solflare.com/" className="text-blue-300 hover:text-blue-200 underline" target="_blank" rel="noopener noreferrer">Solflare's website</a> to download the Solflare wallet. Then follow the setup instructions carefully. Solflare also supports hardware wallets.
            </li>
            <li>
              Fund your wallet with Solana from any centralized exchange (Coinbase, Kraken, Binance, etc). After acquiring SOL, transfer it to your Solflare wallet address.
            </li>
          </ol>
        </div>

        <div className="buying-section">
          <h3 className="text-xl lg:text-2xl font-semibold mb-5">Acquire Uranus Token (ANUS)</h3>
          <ol className="list-decimal pl-4 lg:pl-8 space-y-3 text-base lg:text-lg" start="3">
            <li>
              With SOL in your wallet, access Jupiter, a DEX on Solana, at <a href="https://jup.ag" className="text-blue-300 hover:text-blue-200 underline" target="_blank" rel="noopener noreferrer">jup.ag</a> and connect your Solflare wallet.
            </li>
            <li>
              Swap SOL for ANUS by entering the Uranus token contract address: <span className="font-mono text-sm lg:text-base bg-blue-900 p-1 rounded">9hjZ8UTNrNWt3YUTHVpvzdQjNbp64NbKSDsbLqKR6BZc</span>. Decide on the amount of SOL you want to exchange, and confirm the transaction within your wallet.
            </li>
          </ol>
        </div>
      </div>

      <div className="believe-video-section pb-20">
        <h1 className="text-[6vw] lg:text-5xl xl:text-6xl 2xl:text-7xl lg:px-[15vw] px-4 text-center text-white font-bold">
          The Story of The Shiba Inu Army Pumping Uranus
        </h1>
        <div className="flex justify-center mt-10">
          <iframe
            data-aos="zoom-in"
            src="https://www.youtube.com/embed/-KJZCYW_pN8?si=Au1JpegZCtG3UJGg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="lg:w-[50vw] lg:h-[28vw] w-[90vw] h-[50vw] xl:h-[30vw]"
          ></iframe>
        </div>
      </div>

      <div className="believe-section pb-20">
        <h1 className="text-[6vw] lg:text-5xl xl:text-6xl 2xl:text-7xl lg:px-[250px] px-4 leading-tight text-center text-white font-bold">
          The Memeifesto: Embrace the Wild Side of Crypto
        </h1>
        <p className="mt-8 mb-14 text-[3.5vw] lg:text-lg xl:text-xl 2xl:text-2xl lg:px-[33vw] px-4 text-white text-center">
          Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn’t just your daily horoscope.
        </p>
        
        <a href="https://coinmarketcap.com/currencies/uranus-sol/" className="block mx-auto text-center py-3 px-8 bg-blue-500 text-lg lg:text-xl xl:text-2xl font-semibold text-white rounded-full hover:bg-blue-600 transition-colors duration-300 ease-in-out">
          Get Started
        </a>
      </div>
    </>
  );
}

export default Believe;
