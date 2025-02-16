import images from '@/assets/images/images';
import Image from 'next/image';

// Clients component displays a row of client logos
const Clients = () => {
  return (
    <section className='padding-inline pb-16'>
      <div className='container flex items-center justify-between gap-5'>
        {/* Airbnb logo */}
        <div>
          <Image src={images.airbnb} alt='airbnb' />
        </div>
        {/* Binance logo */}
        <div>
          <Image className='max-w-full' src={images.binance} alt='binance' />
        </div>
        {/* Coinbase logo */}
        <div>
          <Image className='max-w-full' src={images.coinbase} alt='coinbase' />
        </div>
        {/* Dropbox logo */}
        <div>
          <Image className='max-w-full' src={images.dropbox} alt='dropbox' />
        </div>
      </div>
    </section>
  );
};

export default Clients;
