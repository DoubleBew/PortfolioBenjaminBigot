"use client";

import React, { useState, useEffect } from 'react';
import { Phone, Mail, Compass, Instagram, Globe, MessageSquare } from 'lucide-react';

export default function App() {
  const gallerySlides = [
    {
      image: '/photos/presentation_jour_de_stade.jpg',
      title: 'Pourquoi Jour de Stade ?',
      description: "Jour de Stade est né lors de mon voyage au Chili, où j'ai vécu un an. Ma passion pour le football m'a poussé à découvrir le plus de stades possible. Le but était alors de capturer les plus belles images possible avec mon appareil photo, et de faire des vidéos en format court sur TikTok et Instagram. Raconter le football chilien sous différentes formes : vidéos explicatives, trends, interactions. Les retours que j'ai reçus m'ont poussé à continuer. Ainsi, je peux partager ma passion initiale pour le football et faire découvrir ce championnat méconnu en Europe.",
      metadata: 'Réseaux sociaux / Monde / Jour de Stade',
    },
    {
      image: '/photos/IMG_1735.jpg',
      title: 'Raconter le football chilien',
      description: "Regarder le football d'une autre manière. À travers la photographie, je souhaite faire connaître ce championnat encore méconnu en Europe. Au-delà de l'aspect du jeu, le but est de faire connaître le côté culturel du pays via le football. Rendre beau le football chilien.",
      metadata: 'Photographie / Chili / Jour de Stade',
    },
    {
      image: '/photos/IMG_1236.jpg',
      title: 'Trouver le cliché parfait.',
      description: 'Le football chilien manque de moyen, la vétusté des stades en est la preuve. Cependant, ils ne manquent pas de charme de par leur architecture et leur emplacement. À Antofagasta, il est impossible de passer à côté de l’Estadio Regional Calvo y Bascuñán, aux couleurs du club.',
      metadata: 'Photographie / Estadio Regional Calvo y Bascuñán / Jour de Stade',
    },
    {
      image: '/photos/IMG_0603.jpg',
      title: 'Immortaliser l’atmosphère',
      description: 'Raconter l’ambiance à travers une photo et rêver. La Universidad de Chile, club historique et le deuxième plus titré, est un régal pour les amateurs d’ambiance électrique.',
      metadata: 'Photographie / Estadio Nacional / Jour de Stade',
    },
    {
      image: '/photos/IMG_0404.jpg',
      title: 'Histoire et football',
      description: 'Le football est un formidable moyen de connaître l’histoire du pays. À l’image de Palestino, le club raconte une partie de l’immigration chilienne et aide à comprendre sa démographie actuelle.',
      metadata: 'Photographie / Estadio municipal de la Cisterna / Jour de Stade',
    },
    {
      image: '/photos/IMG_1829.jpg',
      title: 'Football et culture générale',
      description: 'Pourquoi el "Estadio Zorros del desierto" s’appelle ainsi ? Pourquoi Cobreloa s’appelle ainsi ? Tant de choses à connaître via le football. Il s’agit ici du club professionnel de la ville de Calama.',
      metadata: 'Photographie / Estadio Zorros del desierto / Jour de Stade',
    },
    {
      image: '/photos/IMG_OM_Chili.jpg',
      title: "L'OM et le Chili",
      description: "Faire connaître l'Olympique de Marseille aux Chiliens me tient à cœur. Ayant connu le Chili un an, je trouve beaucoup de similitudes entre les clubs chiliens et l'OM, deux clubs à très forte identité.",
      metadata: 'Photographie / Stade Vélodrome / Jour de Stade',
    },
    {
      image: '/photos/IMG_0312.jpg',
      title: 'Football et culture',
      description: "À l'image de Colo-Colo, chaque club raconte, à sa façon, l'histoire du pays. La culture Mapuche est très présente et revendiquée chez \"l'éterno campéon\".",
      metadata: 'Photographie / Estadio Monumental / Jour De Stade',
    },
  ];
  const [time, setTime] = useState<Date>(new Date());
  const [showFollowMenu, setShowFollowMenu] = useState<boolean>(false);
  const [activeGallerySlide, setActiveGallerySlide] = useState(0);
  const [selectedGallerySlide, setSelectedGallerySlide] = useState<number | null>(null);
  const [liveStats, setLiveStats] = useState<any>({
    tiktokFollowers: '432',
    tiktokLikes: '9.0K',
    tiktokViews: '135.0K+',
    instaFollowers: '140',
    instaViews: '23.5K+',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (selectedGallerySlide !== null) return;

    const galleryTimer = setTimeout(() => {
      setActiveGallerySlide((current) => (current + 1) % gallerySlides.length);
    }, 5000);
    return () => clearTimeout(galleryTimer);
  }, [activeGallerySlide, gallerySlides.length, selectedGallerySlide]);

  const showGallerySlide = (index: number) => {
    setActiveGallerySlide((index + gallerySlides.length) % gallerySlides.length);
  };

  const truncateDescription = (description: string) =>
    description.length > 40 ? `${description.slice(0, 37)}...` : description;

// Synchro automatique des stats en direct
useEffect(() => {
const fetchStats = () => {
fetch('/api/stats')
.then((res) => res.json())
.then((data) => {
if (data?.tiktok) {
setLiveStats({
tiktokFollowers: data.tiktok.followers || '432',
tiktokLikes: data.tiktok.likes || '9.0K',
tiktokViews: data.tiktok.views || '135.0K+',
instaFollowers: data.instagram?.followers || '140',
instaViews: data.instagram?.views || '23.5K+'
});
}
})
.catch(() => {});
};

fetchStats();
const interval = setInterval(fetchStats, 300000); // Rafraîchit toutes les 5 minutes
return () => clearInterval(interval);
}, []);

const formatDate = (date: Date) => {
const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0');
const year = date.getFullYear();
return `${day}/${month}/${year}`;
};

const formatTime = (date: Date) => {
const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
const dayName = days[date.getDay()];
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');
return `${dayName} ${hours}:${minutes}:${seconds}`;
};

return (
<div className="min-h-screen bg-[#0b0713] text-[#e2d9f3] font-sans text-xs p-3 leading-normal flex flex-col justify-between" onClick={() => showFollowMenu && setShowFollowMenu(false)}>
{/* Top Navigation Bar */}
<header className="bg-[#150d21] border-b border-[#261838] px-4 py-2 flex items-center justify-between gap-2 rounded-t-lg shadow-inner relative">
  <div className="flex items-center gap-4">
    <div className="w-9 h-9 bg-[#f59e0b] rounded flex items-center justify-center font-bold text-[#0b0713] text-base border border-[#fef08a] shadow-md">
      BB
    </div>
    <nav className="flex items-center gap-5 font-semibold text-[#a799c4] text-sm">
      <span className="hover:text-white cursor-pointer">Portail</span>
      <span className="hover:text-white cursor-pointer">Effectif</span>
      <span className="hover:text-white cursor-pointer">Recrutement</span>
      <span className="hover:text-white cursor-pointer">Jour de match</span>
      <span className="hover:text-white cursor-pointer">Club</span>
      <span className="text-[#fbbf24] border-b-2 border-[#fbbf24] pb-0.5 font-bold cursor-pointer">Carrière</span>
    </nav>
  </div>

    <div className="flex items-center gap-4 relative">
      <div className="bg-[#0b0713] border border-[#261838] px-3 py-1 rounded text-center min-w-[100px]">
        <div className="text-[10px] text-[#8e7dae]">{formatDate(time)}</div>
        <div className="font-bold text-[#fbbf24] text-xs">{formatTime(time)}</div>
      </div>

      {/* Menu Bouton Me Suivre */}
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setShowFollowMenu(!showFollowMenu)}
          className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold px-4 py-2 rounded flex items-center gap-1.5 text-xs shadow-md transition-all cursor-pointer"
        >
          Me suivre »
        </button>
        {showFollowMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-[#150d21] border border-[#a855f7]/50 rounded-lg shadow-2xl z-50 p-1.5 space-y-1 animate-in fade-in slide-in-from-top-2">
            <div className="px-2 py-1 text-[10px] text-[#8e7dae] font-semibold uppercase tracking-wider border-b border-[#261838]">
              Réseaux Jour de Stade
            </div>
            <a
              href="https://www.tiktok.com/@jour.de.stade?_r=1&_t=ZS-9ARxxx00MJl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-2.5 py-2 rounded hover:bg-[#221435] text-white transition-colors group"
            >
              <svg className="w-4 h-4 fill-current text-pink-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.115 6.34 6.34 0 0 0 1.05 8.92 6.326 6.326 0 0 0 8.807-1.743c.094-.148.18-.3.258-.456V9.13a8.216 8.216 0 0 0 4.512 1.348V7.032a4.79 4.79 0 0 1-1.003-.346z"/>
              </svg>
              <div className="flex flex-col">
                <span className="font-bold text-xs">TikTok</span>
                <span className="text-[9px] text-[#8e7dae]">@jour.de.stade</span>
              </div>
            </a>
            <a
              href="https://www.instagram.com/jour_de_stade?mdxt=MXZneXo2MjhhM3o4dw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-2.5 py-2 rounded hover:bg-[#221435] text-white transition-colors group"
            >
              <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="font-bold text-xs">Instagram</span>
                <span className="text-[9px] text-[#8e7dae]">@jour_de_stade</span>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  </header>
  {/* Secondary Navigation Bar */}
  {selectedGallerySlide === null ? (
    <div className="bg-[#150d21] border-b border-[#261838] px-5 py-1.5 flex items-center gap-5 text-[#8e7dae] text-xs mb-3 rounded-b-lg">
      <span className="text-[#fbbf24] font-bold border-b-2 border-[#fbbf24] pb-0.5">Vue d'ensemble</span>
      <span className="hover:text-white cursor-pointer">Mon profil</span>
      <span className="hover:text-white cursor-pointer">Mon contrat</span>
      <span className="hover:text-white cursor-pointer">Mes badges</span>
      <span className="hover:text-white cursor-pointer">Mes rapports</span>
      <span className="hover:text-white cursor-pointer">Mon historique</span>
      <span className="hover:text-white cursor-pointer">Stats de gestion</span>
    </div>
  ) : (
    <div className="bg-[#0f1021] border-b border-violet-500/30 px-5 py-2 flex items-center gap-2 text-xs mb-3 rounded-b-lg">
      <button
        type="button"
        onClick={() => setSelectedGallerySlide(null)}
        className="font-semibold text-violet-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
      >
        Vue d&apos;ensemble
      </button>
      <span className="text-violet-400/70">&gt;</span>
      <span className="font-semibold text-white">Infos</span>
    </div>
  )}
  {/* Main Dashboard Layout */}
  {selectedGallerySlide === null ? (
  <main className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-grow">

    {/* CARD 1: MON PROFIL */}
    <section className="lg:col-span-4 bg-[#150d21] border border-[#261838] rounded-lg p-4 flex flex-col justify-between shadow-xl">
      <div>
        <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase border-b border-[#261838] pb-1.5 mb-3">MON PROFIL</h2>

        <div className="flex items-start gap-3.5 mb-4">
          <div className="w-14 h-14 bg-[#221435] rounded-full overflow-hidden border-2 border-[#a855f7]/40 shrink-0 shadow">
            <img src="https://github.com/identicons/benbigot.png" alt="Benjamin Bigot" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Benjamin Bigot</h3>
            <p className="text-[#8e7dae] text-xs">31 ans (27/03/1995)</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#8e7dae] text-xs">Réputation :</span>
              <span className="text-[#c084fc] font-semibold text-xs">● Créatif</span>
            </div>
            <p className="text-[#c084fc] font-semibold text-xs mt-1">Licence STAPS / Management du sport</p>
            <p className="text-[#8e7dae] text-[11px]">+ 2 autres diplômes</p>
          </div>
        </div>
        <div className="border-t border-[#261838] pt-3 space-y-2">
          <p className="text-[#8e7dae] font-bold text-xs uppercase">CONTACTS</p>
          <div className="flex justify-between items-center py-1 border-b border-[#1c112e]">
            <span className="text-[#e2d9f3] flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#a855f7]"/>
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]"/>
              06 35 26 33 23
            </span>
            <span className="text-[#c084fc] font-semibold">Disponible</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-[#1c112e]">
            <span className="text-[#e2d9f3] flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#a855f7]"/> ben.bigot@live.fr</span>
            <span className="text-[#34d399] font-semibold">Actif</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-[#e2d9f3] flex items-center gap-2"><Compass className="w-3.5 h-3.5 text-[#a855f7]"/> Recherche poste de Chargé de communication / Chargé de projet</span>
            <span className="text-[#fbbf24] font-semibold">Ouvert</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#261838] pt-3 mt-3">
        <p className="text-[#8e7dae] font-bold text-xs uppercase mb-1.5">Tendances</p>
        <div className="flex flex-wrap gap-1.5">
          <span className="bg-[#221435] text-[#d8b4fe] px-2.5 py-1 rounded text-xs border border-[#261838]">Adaptabilité</span>
          <span className="bg-[#221435] text-[#d8b4fe] px-2.5 py-1 rounded text-xs border border-[#261838]">Force de proposition</span>
          <span className="bg-[#221435] text-[#d8b4fe] px-2.5 py-1 rounded text-xs border border-[#261838]">Autodidacte</span>
        </div>
      </div>
    </section>
    {/* CARD 2: GALERIE & REPORTAGES */}
    <section className="lg:col-span-5 bg-[#150d21] border border-[#261838] rounded-lg p-4 flex flex-col shadow-xl">
      <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase border-b border-[#261838] pb-1.5 mb-3">GALERIE &amp; REPORTAGES</h2>
      <div
        className="relative flex h-[420px] shrink-0 flex-col justify-end overflow-hidden rounded-lg border border-[#261838] bg-[#0b0713] sm:h-[380px] lg:h-[360px]"
        role="group"
        aria-label={`Galerie photo: ${gallerySlides[activeGallerySlide].title}`}
      >
        <button
          type="button"
          onClick={() => setSelectedGallerySlide(activeGallerySlide)}
          aria-label={`Afficher les informations de ${gallerySlides[activeGallerySlide].title}`}
          className={`absolute inset-0 z-0 cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#c084fc] ${activeGallerySlide < 2 ? 'bg-[#0f1021]' : ''}`}
        >
          <span aria-hidden="true" className={`absolute inset-0 ${activeGallerySlide < 2 ? 'bg-transparent' : 'bg-[#0b0713]/25'}`} />
          <img
            src={gallerySlides[activeGallerySlide].image}
            alt=""
            className={`absolute inset-0 h-full w-full object-center ${activeGallerySlide < 2 ? 'object-contain' : 'object-cover'}`}
          />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b0713]/90 via-[#0b0713]/35 to-black/10" />
        </button>
        <div className="pointer-events-none relative z-10 p-4 pt-16">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8b4fe]">
            Reportage {String(activeGallerySlide + 1).padStart(2, '0')} / {String(gallerySlides.length).padStart(2, '0')}
          </p>
          <h3 className="mb-2 text-2xl font-bold leading-tight text-white">{gallerySlides[activeGallerySlide].title}</h3>
          <p className="mb-4 text-xs leading-relaxed text-[#e2d9f3]">{truncateDescription(gallerySlides[activeGallerySlide].description)}</p>
          <p className="text-[10px] font-medium text-[#c4b5d9]">{gallerySlides[activeGallerySlide].metadata}</p>
        </div>
        <div className="relative z-20 flex gap-1.5 px-4 pb-3 pt-2" aria-label="Sélectionner une photo">
          {gallerySlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => showGallerySlide(index)}
              aria-label={`Afficher la photo ${index + 1}: ${slide.title}`}
              aria-current={index === activeGallerySlide ? 'true' : undefined}
              className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/30"
            >
              {index === activeGallerySlide && <span key={activeGallerySlide} className="gallery-progress block h-full rounded-full bg-[#c084fc]" />}
              {index < activeGallerySlide && <span className="block h-full rounded-full bg-[#c084fc]" />}
            </button>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes gallery-progress {
          from { width: 0; }
          to { width: 100%; }
        }
        .gallery-progress {
          animation: gallery-progress 5s linear forwards;
        }
      `}</style>
    </section>
    {/* CARD 3: MES QUALIFICATIONS */}
    <section className="lg:col-span-3 bg-[#150d21] border border-[#261838] rounded-lg p-4 flex flex-col justify-between shadow-xl">
      <div>
        <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase border-b border-[#261838] pb-1.5 mb-3">MES QUALIFICATIONS</h2>
        <h3 className="font-bold text-white text-sm mb-1">3 diplômes</h3>
        <p className="text-[#8e7dae] text-xs mb-3 leading-relaxed">
          ◌ Double cursus sport & banque, base économique solide.
        </p>
        <div className="flex gap-2 mb-4">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-4 h-4 rounded-full border border-[#a855f7]/40"></div>
          ))}
        </div>
      </div>
      <div className="space-y-2 border-t border-[#261838] pt-3">
        <div className="text-xs">
          <p className="font-bold text-white">Licence STAPS <span className="text-[#8e7dae] font-normal">- Management du sport</span></p>
        </div>
        <div className="text-xs">
          <p className="font-bold text-white">BTS Banque</p>
        </div>
        <div className="text-xs">
          <p className="font-bold text-white">BAC Économique et social</p>
        </div>
      </div>
    </section>
    {/* CARD 4: MON HISTORIQUE */}
    <section className="lg:col-span-6 bg-[#150d21] border border-[#261838] rounded-lg p-4 shadow-xl flex flex-col justify-between">
      <div>
        <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase border-b border-[#261838] pb-1.5 mb-3">MON HISTORIQUE</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-[#8e7dae] border-b border-[#261838]">
                <th className="pb-2">Année</th>
                <th className="pb-2">Équipe</th>
                <th className="pb-2">Championnat</th>
                <th className="pb-2">Position</th>
                <th className="pb-2">Pays</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1c112e]">
              <tr>
                <td className="py-2.5 text-[#8e7dae]">2025 -</td>
                <td className="py-2.5 font-bold text-white">Jour de Stade</td>
                <td className="py-2.5"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Réseaux sociaux</span></td>
                <td className="py-2.5 text-[#e2d9f3]">Le monde</td>
                <td className="py-2.5"><Globe className="w-4 h-4 text-purple-400" /></td>
              </tr>
              <tr>
                <td className="py-2.5 text-[#8e7dae]">2025 -</td>
                <td className="py-2.5 font-bold text-white">Sport 2000</td>
                <td className="py-2.5"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Retail Sport</span></td>
                <td className="py-2.5 text-[#e2d9f3]">Marseille</td>
                <td className="py-2.5"><img src="https://flagcdn.com/w20/fr.png" alt="France" className="w-4 h-auto rounded-sm" /></td>
              </tr>
              <tr>
                <td className="py-2.5 text-[#8e7dae]">2025</td>
                <td className="py-2.5 font-bold text-white">Realsport</td>
                <td className="py-2.5"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Retail Sport</span></td>
                <td className="py-2.5 text-[#e2d9f3]">Antofagasta</td>
                <td className="py-2.5"><img src="https://flagcdn.com/w20/cl.png" alt="Chili" className="w-4 h-auto rounded-sm" /></td>
              </tr>
              <tr>
                <td className="py-2.5 text-[#8e7dae]">2024-25</td>
                <td className="py-2.5 font-bold text-white">Pariwana Hostel</td>
                <td className="py-2.5"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Hôtellerie</span></td>
                <td className="py-2.5 text-[#e2d9f3]">Santiago</td>
                <td className="py-2.5"><img src="https://flagcdn.com/w20/cl.png" alt="Chili" className="w-4 h-auto rounded-sm" /></td>
              </tr>
              <tr>
                <td className="py-2.5 text-[#8e7dae]">2019-24</td>
                <td className="py-2.5 font-bold text-white">Decathlon</td>
                <td className="py-2.5"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Retail Sport</span></td>
                <td className="py-2.5 text-[#e2d9f3]">Marseille</td>
                <td className="py-2.5"><img src="https://flagcdn.com/w20/fr.png" alt="France" className="w-4 h-auto rounded-sm" /></td>
              </tr>
              <tr>
                <td className="py-2.5 text-[#8e7dae]">2018</td>
                <td className="py-2.5 font-bold text-white">Rugby Club Flers P.B.</td>
                <td className="py-2.5"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Stage</span></td>
                <td className="py-2.5 text-[#e2d9f3]">Flers</td>
                <td className="py-2.5"><img src="https://flagcdn.com/w20/fr.png" alt="France" className="w-4 h-auto rounded-sm" /></td>
              </tr>
              <tr>
                <td className="py-2.5 text-[#8e7dae]">2013-15</td>
                <td className="py-2.5 font-bold text-white">Crédit Agricole</td>
                <td className="py-2.5"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Alternance</span></td>
                <td className="py-2.5 text-[#e2d9f3]">La Ferté Macé</td>
                <td className="py-2.5"><img src="https://flagcdn.com/w20/fr.png" alt="France" className="w-4 h-auto rounded-sm" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    {/* CARD 5: STATS DE GESTION - DONNÉES RÉELLES VÉRIFIÉES */}
    <section className="lg:col-span-3 bg-[#150d21] border border-[#261838] rounded-lg p-4 shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between border-b border-[#261838] pb-1.5 mb-3">
          <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase">STATS DE GESTION</h2>
          <span className="flex items-center gap-1 text-[9px] text-[#34d399] font-bold bg-[#0b0713] px-1.5 py-0.5 rounded border border-[#261838]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse"></span> LIVE
          </span>
        </div>
        <p className="text-[#8e7dae] font-bold uppercase text-[10px] mb-2.5">MÉDIAS « JOUR DE STADE »</p>
        {/* BLOC TIKTOK */}
        <div className="bg-[#0b0713] p-3 rounded-lg border border-[#261838] mb-3 space-y-1.5">
          <div className="flex items-center justify-between border-b border-[#1c112e] pb-1.5 mb-1">
            <div className="flex items-center gap-1.5 text-pink-400 font-bold text-xs">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.115 6.34 6.34 0 0 0 1.05 8.92 6.326 6.326 0 0 0 8.807-1.743c.094-.148.18-.3.258-.456V9.13a8.216 8.216 0 0 0 4.512 1.348V7.032a4.79 4.79 0 0 1-1.003-.346z"/>
              </svg>
              <span>TikTok</span>
            </div>
            <span className="text-[10px] text-[#8e7dae]">@jour.de.stade</span>
          </div>
          <div className="flex justify-between py-0.5 border-b border-[#1c112e]">
            <span className="text-[#e2d9f3]">Abonnés</span>
            <span className="text-[#c084fc] font-semibold">{liveStats.tiktokFollowers || '432'}</span>
          </div>
          <div className="flex justify-between py-0.5 border-b border-[#1c112e]">
            <span className="text-[#e2d9f3]">J'aime</span>
            <span className="text-[#fbbf24] font-bold">{liveStats.tiktokLikes || '9.0K'}</span>
          </div>
          <div className="flex justify-between py-0.5">
            <span className="text-[#e2d9f3]">Vues</span>
            <span className="text-[#38bdf8] font-bold">{liveStats.tiktokViews || '135.0K+'}</span>
          </div>
        </div>
        {/* BLOC INSTAGRAM */}
        <div className="bg-[#0b0713] p-3 rounded-lg border border-[#261838] space-y-1.5">
          <div className="flex items-center justify-between border-b border-[#1c112e] pb-1.5 mb-1">
            <div className="flex items-center gap-1.5 text-pink-500 font-bold text-xs">
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </div>
            <span className="text-[10px] text-[#8e7dae]">@jour_de_stade</span>
          </div>
          <div className="flex justify-between py-0.5 border-b border-[#1c112e]">
            <span className="text-[#e2d9f3]">Abonnés</span>
            <span className="text-[#c084fc] font-semibold">{liveStats.instaFollowers || '140'}</span>
          </div>
          <div className="flex justify-between py-0.5">
            <span className="text-[#e2d9f3]">Vues</span>
            <span className="text-[#38bdf8] font-bold">{liveStats.instaViews || '23.5K+'}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#261838] pt-2.5 mt-3 text-[10px] text-[#8e7dae] text-center italic">
        Création de contenu, montage & écriture
      </div>
    </section>
  </main>
  ) : (
    <main
      className="flex-1 rounded-xl border border-violet-500/30 bg-[#0f1021] p-3 shadow-xl sm:p-5"
      onClick={() => setSelectedGallerySlide(null)}
    >
      <article
        className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-violet-400/30 bg-[#2d1f47] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative mx-auto w-fit max-w-full overflow-hidden">
          <img
            src={gallerySlides[selectedGallerySlide].image}
            alt=""
            className="block max-h-[min(60vh,480px)] max-w-full"
          />
          <div className="absolute inset-0 bg-[#0f1021]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2d1f47] via-[#2d1f47]/40 to-[#0f1021]/10" />
          <h1 className="absolute inset-x-0 bottom-0 p-5 text-2xl font-bold text-white drop-shadow-lg sm:p-8 sm:text-4xl">
            {gallerySlides[selectedGallerySlide].title}
          </h1>
        </div>
        <div className="border-t border-violet-400/20 bg-[#0f1021] p-5 sm:p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-violet-300">
            {gallerySlides[selectedGallerySlide].metadata}
          </p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-gray-200 sm:text-base">
            {gallerySlides[selectedGallerySlide].description}
          </p>
        </div>
      </article>
    </main>
  )}
</div>
);
}