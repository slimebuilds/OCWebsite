import React from 'react';

const teamMembers = [
  {
    name: 'Larry Tate',
    role: 'Owner',
    image: '/images/team/larrytate.png',
    logo: '/images/team/larrylogo.png',

  },
  {
    name: 'Cara Samson',
    role: 'Owner',
    image: '/images/team/carasamson.png',
    logo: '/images/OClogo.png',
    
  },
  {
    name: 'Jose Samson',
    role: 'Manager',
    image: '/images/team/josesamson.png',
    logo: '/images/team/joselogo.png',
    
  },
  {
    name: 'Tatiana Wheeler',
    role: 'Manager',
    image: '/images/team/tatianawheeler.png',
    logo: '/images/team/tatianalogo.png',
    
  },
  {
    name: 'Leon Fraser',
    role: 'Manager',
    image: '/images/team/leonfraser.png',
    logo: '/images/team/leonlogo.png',
    
  },
  {
    name: 'Jax Corsair',
    role: 'Supervisor',
    image: '/images/team/jaxcorsair.png',
    logo: '/images/team/jaxlogo.png',
    
  },
  {
    name: 'Thomas Grayson',
    role: 'Importer',
    image: '/images/team/thomasgrayson.png',
    logo: '/images/team/thomaslogo.png',
    
  },
  {
    name: 'Timothy Evans',
    role: 'Importer',
    image: '/images/team/timothyevans.png',
    logo: '/images/OClogo.png',
    
  },
  {
    name: 'Oliver McKenzie',
    role: 'Importer',
    image: '/images/team/olivermckenzie.png',
    logo: '/images/OClogo.png',
    
  },
  {
    name: 'Zale Whitecrow',
    role: 'Staff',
    image: '/images/team/zalewhitecrow.png',
    logo: '/images/team/zalelogo.png',
    
  },
  {
    name: 'Sally Nailburry',
    role: 'Staff',
    image: '/images/team/sallynailburry.png',
    logo: '/images/team/sallylogo.png',
    
  },
  {
    name: 'Alexander Novak',
    role: 'Staff',
    image: '/images/team/alexandernovak.png',
    logo: '/images/team/alexanderlogo.png',
    
  },
  {
    name: 'Eden Revelstoke',
    role: 'Staff',
    image: '/images/team/edenrevelstoke.png',
    logo: '/images/team/edenlogo.png',
    
  },
  {
    name: 'Brandon Sinclair',
    role: 'Staff',
    image: '/images/team/brandonsinclair.png',
    logo: '/images/team/brandonlogo.png',
    
  },
  {
    name: 'Blake Thomson',
    role: 'Admin Assistant & Designer',
    image: '/images/team/blakethomson.png',
    logo: '/images/team/blakelogo.png',
    
  },
  {
    name: 'May McKenzie',
    role: 'Designer',
    image: '/images/team/maylogo.png',
    logo: '/images/team/maylogo.png',
    
  },
];

const TeamPage = () => {
  return (
    <section className="p-6 md:p-12">
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#65c88c' }}>OC Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-48 h-48 mx-auto mb-4 group">

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-full border-4 border-[#65c88c] transition-opacity duration-500 group-hover:opacity-0"
              />

              <img
                src={member.logo}
                alt={`${member.name} Logo`}
                className="w-full h-full object-contain rounded-full border-4 border-[#65c88c] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <h3 className="text-xl mb-1">{member.name}</h3>
            <p className="text-xl text-[#65c88c] mb-1">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
