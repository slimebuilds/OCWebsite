import React from 'react';

const LandingPage = () => {
  const allImages = [
    '/images/Male/OCgaiter1male.jpg', '/images/Male/OCgaiter2male.jpg',
    '/images/Female/OCgaiter1female.jpg', '/images/Female/OCgaiter2female.jpg',
    '/images/Male/OCbandana1male.jpg', '/images/Male/OCbandana2male.jpg',
    '/images/Female/OCbandana1female.jpg', '/images/Female/OCbandana2female.jpg',
    '/images/Male/OChelmet1male.jpg', '/images/Male/OChelmet2male.jpg',
    '/images/Female/OChelmet1female.jpg', '/images/Female/OChelmet2female.jpg',
    '/images/Male/OCcap1male.jpg', '/images/Male/OCcap2male.jpg',
    '/images/Female/OCcap1female.jpg', '/images/Female/OCcap2female.jpg',
    '/images/Male/OCflag1male.jpg', '/images/Male/OCflag2male.jpg',
    '/images/Female/OCflag1female.jpg', '/images/Female/OCflag2female.jpg',
    '/images/Male/OCvest1male.jpg', '/images/Male/OCvest2male.jpg',
    '/images/Female/OCvest1female.jpg', '/images/Female/OCvest2female.jpg',
    '/images/Male/OCchain1male.jpg', '/images/Male/OCchain2male.jpg',
    '/images/Female/OCchain1female.jpg', '/images/Female/OCchain2female.jpg',
    '/images/Male/OClanyard1male.jpg', '/images/Male/OClanyard2male.jpg',
    '/images/Male/OCbackpack1male.jpg', '/images/Male/OCbackpack2male.jpg',
    '/images/Female/OCbackpack1female.jpg', '/images/Female/OCbackpack2female.jpg',
    '/images/Male/OCduffle1male.jpg', '/images/Male/OCduffle2male.jpg',
    '/images/Female/OCduffle1female.jpg', '/images/Female/OCduffle2female.jpg',
    '/images/Male/OCjogger1male.jpg', '/images/Male/OCjogger2male.jpg',
    '/images/Female/OCjogger1female.jpg', '/images/Female/OCmech1female.jpg',
    '/images/Male/OCmech1male.jpg', '/images/Male/OCmech2male.jpg',
    '/images/Female/OCapron1female.jpg', '/images/Female/OCapron2female.jpg',
    '/images/Female/OCpolo1female.jpg', '/images/Female/OCpolo2female.jpg',
    '/images/Female/OCshirt1female.jpg', '/images/Female/OCshirt2female.jpg',
    '/images/Female/OCjumper1female.jpg', '/images/Female/OCjumper2female.jpg',
    '/images/Male/OChoodie1male.jpg', '/images/Male/OChoodie2male.jpg',
    '/images/Female/OChoodie1female.jpg', '/images/Female/OChoodie2female.jpg',
    '/images/Male/OCslimhoodie1male.jpg', '/images/Male/OCslimhoodie2male.jpg',
    '/images/Female/OCslimhoodie1female.jpg',
    '/images/Male/OCjacketclosed1male.jpg', '/images/Male/OCjacketclosed2male.jpg',
    '/images/Female/OCjacketclosed1female.jpg',
    '/images/Male/OCjacketopen1male.jpg', '/images/Male/OCjacketopen2male.jpg',
    '/images/Female/OCjacketopen1female.jpg'
  ];

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const collagePattern = [
    { col: 'col-span-2', row: 'row-span-2' },
    {},
    {},
    {},
    { row: 'row-span-2' },
    {},
    {},
    {}
  ];

  const shuffledTop = shuffle(allImages).slice(0, 8).map((src, i) => ({
    src,
    ...collagePattern[i]
  }));

  const shuffledBottom = shuffle(allImages).slice(0, 8).map((src, i) => ({
    src,
    ...collagePattern[i]
  }));

  const renderCollage = (images) => (
    <div className="grid grid-cols-4 auto-rows-[150px] gap-2 md:gap-3">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={`Image ${i + 1}`}
          className={`w-full h-full object-cover rounded-md border-4 border-white dark:border-zinc-900 shadow-md ${img.col || ''} ${img.row || ''}`}
        />
      ))}
    </div>
  );

  return (
    <section className="px-4 md:px-12 py-8 space-y-12">
      {renderCollage(shuffledTop)}

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bebas mb-4" style={{ color: '#65c88c' }}>
          Original Clothing
        </h2>
        <p className="text-lg leading-relaxed">
          We believe style isn’t one-size-fits-all.<br></br> 
          That’s why we’ve created a family of distinct brands—each with its own voice, purpose, and personality.
        </p>
      </div>

      {renderCollage(shuffledBottom)}
    </section>
  );
};

export default LandingPage;
