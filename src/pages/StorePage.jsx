import React, { useState } from 'react';

const sections = [
  {
    id: 'tops',
    title: 'Tops',
    products: [
      {
        name: 'OC OPEN JACKET',
        price: '$22,000',
        images: [
          '/images/Male/OCjacketopen1male.jpg',
          '/images/Male/OCjacketopen2male.jpg',
          '/images/Female/OCjacketopen1female.jpg',
        ],
      },
      {
        name: 'OC CLOSED JACKET',
        price: '$22,000',
        images: [
          '/images/Male/OCjacketclosed1male.jpg',
          '/images/Male/OCjacketclosed2male.jpg',
          '/images/Female/OCjacketclosed1female.jpg',
        ],
      },
      {
        name: 'OC SLIM HOODIE',
        price: '$22,000',
        images: [
          '/images/Male/OCslimhoodie1male.jpg',
          '/images/Male/OCslimhoodie2male.jpg',
          '/images/Female/OCslimhoodie1female.jpg',
        ],
      },
      {
        name: 'OC REGULAR HOODIE',
        price: '$22,000',
        images: [
          '/images/Male/OChoodie1male.jpg',
          '/images/Male/OChoodie2male.jpg',
          '/images/Female/OChoodie1female.jpg',
          '/images/Female/OChoodie2female.jpg',
        ],
      },
      {
        name: 'OC JUMPER',
        price: '$22,000',
        images: [
          '/images/Female/OCjumper1female.jpg',
          '/images/Female/OCjumper2female.jpg',
        ],
      },
      {
        name: 'OC T-SHIRT',
        price: '$22,000',
        images: [
          '/images/Female/OCshirt1female.jpg',
          '/images/Female/OCshirt2female.jpg',
        ],
      },
      {
        name: 'OC POLO SHIRT',
        price: '$22,000',
        images: [
          '/images/Female/OCpolo1female.jpg',
          '/images/Female/OCpolo2female.jpg',
        ],
      },
      {
        name: 'OC APRON',
        price: '$22,000',
        images: [
          '/images/Female/OCapron1female.jpg',
          '/images/Female/OCapron2female.jpg',
        ],
      },
      {
        name: 'OC MECH OVERALLS',
        price: '$22,000',
        images: [
          '/images/Female/OCmech1female.jpg',
          '/images/Male/OCmech1male.jpg',
          '/images/Male/OCmech2male.jpg',
        ],
      },
    ],
  },
  {
    id: 'pants',
    title: 'Pants',
    products: [
      {
        name: 'OC JOGGERS',
        price: '$22,000',
        images: [
          '/images/Male/OCjogger1male.jpg',
          '/images/Male/OCjogger2male.jpg',
          '/images/Female/OCjogger1female.jpg',
        ],
      },
    ],
  },
  {
    id: 'bags',
    title: 'Bags',
    products: [
      {
        name: 'OC DUFFELBAG',
        price: '$20,000',
        images: [
          '/images/Male/OCduffle1male.jpg',
          '/images/Male/OCduffle2male.jpg',
          '/images/Female/OCduffle1female.jpg',
          '/images/Female/OCduffle2female.jpg',
        ],
      },
      {
        name: 'OC BACKPACK',
        price: '$20,000',
        images: [
          '/images/Male/OCbackpack1male.jpg',
          '/images/Male/OCbackpack2male.jpg',
          '/images/Female/OCbackpack1female.jpg',
          '/images/Female/OCbackpack2female.jpg',
        ],
      },
    ],
  },
  {
    id: 'accessories',
    title: 'Accessories',
    products: [
      {
        name: 'OC LANYARD',
        price: '$20,000',
        images: [
          '/images/Male/OClanyard1male.jpg',
          '/images/Male/OClanyard2male.jpg',
        ],
      },
      {
        name: 'OC GANG CHAIN',
        price: '$35,000',
        images: [
          '/images/Male/OCchain1male.jpg',
          '/images/Male/OCchain2male.jpg',
          '/images/Female/OCchain1female.jpg',
          '/images/Female/OCchain2female.jpg',
        ],
      },
      {
        name: 'OC BULLET RESISTANT VEST',
        price: '$20,000',
        images: [
          '/images/Male/OCvest1male.jpg',
          '/images/Male/OCvest2male.jpg',
          '/images/Female/OCvest1female.jpg',
          '/images/Female/OCvest2female.jpg',
        ],
      },
      {
        name: 'OC POCKET FLAG',
        price: '$20,000',
        images: [
          '/images/Male/OCflag1male.jpg',
          '/images/Male/OCflag2male.jpg',
          '/images/Female/OCflag1female.jpg',
          '/images/Female/OCflag2female.jpg',
        ],
      },
      {
        name: 'OC CAP',
        price: '$20,000',
        images: [
          '/images/Male/OCcap1male.jpg',
          '/images/Male/OCcap2male.jpg',
          '/images/Female/OCcap1female.jpg',
          '/images/Female/OCcap2female.jpg',
        ],
      },
      {
        name: 'OC BIKER HELMET',
        price: '$20,000',
        images: [
          '/images/Male/OChelmet1male.jpg',
          '/images/Male/OChelmet2male.jpg',
          '/images/Female/OChelmet1female.jpg',
          '/images/Female/OChelmet2female.jpg',
        ],
      },
    ],
  },
  {
    id: 'masks',
    title: 'Masks',
    products: [
      {
        name: 'OC NECK FACE BANDANA',
        price: '$20,000',
        images: [
          '/images/Male/OCbandana1male.jpg',
          '/images/Male/OCbandana2male.jpg',
          '/images/Female/OCbandana1female.jpg',
          '/images/Female/OCbandana2female.jpg',
        ],
      },
      {
        name: 'OC NECK GAITER MASK',
        price: '$20,000',
        images: [
          '/images/Male/OCgaiter1male.jpg',
          '/images/Male/OCgaiter2male.jpg',
          '/images/Female/OCgaiter1female.jpg',
          '/images/Female/OCgaiter2female.jpg',
        ],
      },
    ],
  },
];

const ProductCard = ({ product, setSelectedImage }) => {
  const [index, setIndex] = useState(0);
  const nextImage = () => setIndex((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <div className="relative flex flex-col h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow hover:shadow-xl transition overflow-hidden">
      <div className="relative w-full">
        <img
          src={product.images[index]}
          alt={product.name}
          className="w-full h-64 object-cover cursor-pointer"
          onClick={() => setSelectedImage(product.images[index])}
        />
      </div>

      {product.images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 -translate-y-1/2 transform bg-black bg-opacity-60 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-80 transition"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 -translate-y-1/2 transform bg-black bg-opacity-60 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-80 transition"
          >
            ›
          </button>
        </>
      )}

      {product.images.length > 1 && (
        <div className="flex justify-center mt-2 space-x-1">
          {product.images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? 'bg-[#65c88c]' : 'bg-gray-400'
              } inline-block`}
            />
          ))}
        </div>
      )}

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <p className="text-[#65c88c] text-sm">{product.price}</p>
      </div>
    </div>
  );
};

const StorePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="p-0 relative">
      <div className="w-full h-[60vh] bg-black relative overflow-hidden">
        <img
          src="/images/OCgif1.gif"
          alt="Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Original Clothing</h1>
        </div>
      </div>

      <nav className="flex justify-center space-x-4 mt-8 mb-8 text-[#65c88c] font-medium flex-wrap">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="hover:underline"
          >
            {section.title}
          </button>
        ))}
      </nav>

      <div className="space-y-20 px-6 md:px-12">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 shadow-md p-6">
            <h2 className="text-3xl mb-6 text-center text-[#65c88c] font-semibold">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.products.map((product, idx) => (
                <div key={idx} className="w-full">
                  <ProductCard product={product} setSelectedImage={setSelectedImage} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20 pb-24 px-4">
        <h2 className="text-2xl font-bold mb-2 text-[#65c88c]">Order Now</h2>
        <p className="mb-6 text-white">
          Click below to access the McKenzie ordering portal and secure your look.
        </p>
        <a
          href="https://discord.gg/GTGuTdkpBK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#65c88c] text-white text-lg rounded shadow hover:bg-emerald-600 transition"
        >
          McKenzie Ordering Portal
        </a>
      </div>

      <button
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#65c88c] text-white p-3 rounded-full shadow-lg hover:bg-emerald-600 transition z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑ Back to Top
      </button>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white dark:bg-zinc-800 text-black dark:text-white p-2 rounded-full text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default StorePage;
