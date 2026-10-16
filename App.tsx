"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Compass, Instagram, Globe, MessageSquare } from 'lucide-react';
import { translate, type Language } from './translations';

type SocialStats = {
  tiktokFollowers: string;
  tiktokLikes: string;
  tiktokViews: string;
  instaFollowers: string;
  instaViews: string;
};

function SocialStatsPanel({ stats, language, className }: { stats: SocialStats; language: Language; className: string }) {
  return (
    <section className={`${className} rounded-lg border border-[#261838] bg-[#150d21] p-4 shadow-xl`}>
      <div className="flex items-center justify-between border-b border-[#261838] pb-1.5 mb-3">
        <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase">{translate('STATS RÉSEAUX SOCIAUX', language)}</h2>
        <span className="flex items-center gap-1 text-[9px] text-[#34d399] font-bold bg-[#0b0713] px-1.5 py-0.5 rounded border border-[#261838]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse"></span> {translate('LIVE', language)}
        </span>
      </div>
      <p className="text-[#8e7dae] font-bold uppercase text-[10px] mb-2.5">{translate('MÉDIAS « JOUR DE STADE »', language)}</p>
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
          <span className="text-[#e2d9f3]">{translate('Abonnés', language)}</span>
          <span className="text-[#c084fc] font-semibold">{stats.tiktokFollowers || '432'}</span>
        </div>
        <div className="flex justify-between py-0.5 border-b border-[#1c112e]">
          <span className="text-[#e2d9f3]">{translate("J'aime", language)}</span>
          <span className="text-[#fbbf24] font-bold">{stats.tiktokLikes || '9.0K'}</span>
        </div>
        <div className="flex justify-between py-0.5">
          <span className="text-[#e2d9f3]">{translate('Vues', language)}</span>
          <span className="text-[#38bdf8] font-bold">{stats.tiktokViews || '135.0K+'}</span>
        </div>
      </div>
      <div className="bg-[#0b0713] p-3 rounded-lg border border-[#261838] space-y-1.5">
        <div className="flex items-center justify-between border-b border-[#1c112e] pb-1.5 mb-1">
          <div className="flex items-center gap-1.5 text-pink-500 font-bold text-xs">
            <Instagram className="w-3.5 h-3.5" />
            <span>Instagram</span>
          </div>
          <span className="text-[10px] text-[#8e7dae]">@jour_de_stade</span>
        </div>
        <div className="flex justify-between py-0.5 border-b border-[#1c112e]">
          <span className="text-[#e2d9f3]">{translate('Abonnés', language)}</span>
          <span className="text-[#c084fc] font-semibold">{stats.instaFollowers || '140'}</span>
        </div>
        <div className="flex justify-between py-0.5">
          <span className="text-[#e2d9f3]">{translate('Vues', language)}</span>
          <span className="text-[#38bdf8] font-bold">{stats.instaViews || '23.5K+'}</span>
        </div>
      </div>
      <div className="border-t border-[#261838] pt-2.5 mt-3 text-[10px] text-[#8e7dae] text-center italic">
        {translate('Création de contenu, montage & écriture', language)}
      </div>
    </section>
  );
}

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
  const visitedStadiums: Array<{ name: string; city: string; country: string; lat: number; lon: number }> = [
    { name: 'Stade Vélodrome', city: 'Marseille', country: 'France', lat: 43.2698474, lon: 5.3959082 },
    { name: "Stade Michel d'Ornano", city: 'Caen', country: 'France', lat: 49.1794925, lon: -0.3969526 },
    { name: 'Roazhon Park', city: 'Rennes', country: 'France', lat: 48.1075655, lon: -1.7126543 },
    { name: 'Stade Marie-Marvingt', city: 'Le Mans', country: 'France', lat: 47.9591652, lon: 0.2231087 },
    { name: 'Stade de France', city: 'Saint-Denis (93)', country: 'France', lat: 48.9244726, lon: 2.3601325 },
    { name: 'Stade de la Beaujoire', city: 'Nantes', country: 'France', lat: 47.256005, lon: -1.5247552 },
    { name: 'Stade du Hazé', city: 'Flers', country: 'France', lat: 48.7464799, lon: -0.58124282 },
    { name: 'Stade du Moustoir', city: 'Lorient', country: 'France', lat: 47.7488021, lon: -3.3695412 },
    { name: 'Stade Gerland', city: 'Lyon', country: 'France', lat: 45.7237756, lon: 4.8322517 },
    { name: 'Estadio Regional Calvo y Bascuñán', city: 'Antofagasta', country: 'Chili', lat: -23.6701523, lon: -70.4052848 },
    { name: 'Estadio Monumental David Arellano', city: 'Macul, Santiago', country: 'Chili', lat: -33.5064746, lon: -70.6049202 },
    { name: 'Estadio Nacional Julio Martínez Prádanos', city: 'Ñuñoa, Santiago', country: 'Chili', lat: -33.4643821, lon: -70.6106181 },
    { name: 'Estadio Bicentenario de La Florida', city: 'La Florida, Santiago', country: 'Chili', lat: -33.5408024, lon: -70.578182 },
    { name: 'Estadio Municipal de La Cisterna', city: 'La Cisterna, Santiago', country: 'Chili', lat: -33.5206721, lon: -70.673901 },
    { name: 'Estadio Zorros del Desierto', city: 'Calama', country: 'Chili', lat: -22.4605187, lon: -68.9205829 },
    { name: 'Stadion Bâlgarska Armija', city: 'Sofia', country: 'Bulgarie', lat: 42.6842389, lon: 23.339692 },
    { name: 'Stadio Giuseppe Meazza', city: 'Milan', country: 'Italie', lat: 45.4782003, lon: 9.123964 },
  ];
  const stadiumCapacities: Record<string, number> = {
    'Stade Vélodrome': 67400, 'Stade de France': 80000, "Stade Michel d'Ornano": 20300, 'Roazhon Park': 29700,
    'Stade Marie-Marvingt': 25000, 'Stade de la Beaujoire': 35300, 'Stade du Moustoir': 18500, 'Stade Gerland': 35000,
    'Stade du Hazé': 3500, 'Estadio Regional Calvo y Bascuñán': 21100, 'Estadio Monumental David Arellano': 47000,
    'Estadio Nacional Julio Martínez Prádanos': 48600, 'Estadio Bicentenario de La Florida': 12000,
    'Estadio Municipal de La Cisterna': 6000, 'Estadio Zorros del Desierto': 12100, 'Stadion Bâlgarska Armija': 22000,
    'Stadio Giuseppe Meazza': 75800,
  };
  const countryFlags: Record<string, string> = { France: '🇫🇷', Chili: '🇨🇱', Italie: '🇮🇹', Bulgarie: '🇧🇬' };
  const photoGalleryImages = [
    { src: '/photos/visiter-01.jpg', alt: 'Coucher de soleil sur Santiago' },
    { src: '/photos/visiter-02.jpg', alt: 'Rue de Santiago photographiée de nuit en noir et blanc' },
    { src: '/photos/visiter-03.jpg', alt: 'Bâtiment illuminé au bord de l’eau, la nuit' },
    { src: '/photos/visiter-04.jpg', alt: 'Rue d’Antofagasta avec les montagnes en arrière-plan' },
    { src: '/photos/visiter-05.jpg', alt: 'Promenade sur le front de mer à Antofagasta' },
    { src: '/photos/visiter-06.jpg', alt: 'Coucher de soleil sur la mer' },
    { src: '/photos/visiter-07.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-08.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-09.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-10.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-11.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-12.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-13.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-14.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-15.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-16.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-17.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-18.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-19.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-20.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-21.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-22.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-23.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-24.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-25.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-26.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-27.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-28.jpg', alt: 'Photo de stade et de football' },
    { src: '/photos/visiter-29.jpg', alt: 'Maillot blanc et bleu de Cobreloa' },
    { src: '/photos/visiter-30.jpg', alt: 'Détail d’un maillot bleu de la sélection chilienne' },
    { src: '/photos/visiter-31.jpg', alt: 'Écusson de Deportes Antofagasta sur un maillot' },
    { src: '/photos/visiter-32.jpg', alt: 'Maillots de football noir et blanc de Colo-Colo' },
    { src: '/photos/visiter-33.jpg', alt: 'Panneaux indicateurs au coucher du soleil dans le désert' },
    { src: '/photos/visiter-34.jpg', alt: 'Cactus dans le désert au coucher du soleil' },
    { src: '/photos/visiter-35.jpg', alt: 'Rue d’Antofagasta avec les montagnes en arrière-plan' },
    { src: '/photos/visiter-36.jpg', alt: 'Écusson brodé de Universidad de Chile' },
    { src: '/photos/visiter-37.jpg', alt: 'Vue des tribunes de l’Estadio Nacional de Chile' },
    { src: '/photos/visiter-38.jpg', alt: 'Écharpe bleue des Pumas d’Antofagasta devant un stade' },
    { src: '/photos/visiter-39.jpg', alt: 'Tribunes colorées d’un stade avec une banderole de supporters' },
  ];
  const photoGalleryRotations = ['-3deg', '2.5deg', '-2deg', '3deg', '-2.5deg', '2deg'];
  const photoGalleryLayouts = [
    'col-span-1 lg:col-span-4 aspect-[4/3]',
    'col-span-1 lg:col-span-3 aspect-[3/4]',
    'col-span-2 lg:col-span-5 aspect-[4/3]',
    'col-span-1 lg:col-span-4 aspect-[3/4]',
    'col-span-1 lg:col-span-5 aspect-[4/3]',
    'col-span-2 lg:col-span-3 aspect-[3/2]',
  ];
  const [time, setTime] = useState<Date>(new Date());
  const [language, setLanguage] = useState<Language>('FR');
  const [showFollowMenu, setShowFollowMenu] = useState<boolean>(false);
  const [activeGallerySlide, setActiveGallerySlide] = useState(0);
  const [selectedGallerySlide, setSelectedGallerySlide] = useState<number | null>(null);
  const [showDiplomas, setShowDiplomas] = useState(false);
  const [showPhotoGallery, setShowPhotoGallery] = useState(false);
  const [showLegalNotices, setShowLegalNotices] = useState(false);
  const [showSocialStats, setShowSocialStats] = useState(false);
  const [showMethod, setShowMethod] = useState(false);
  const [selectedPhotoGalleryImage, setSelectedPhotoGalleryImage] = useState<number | null>(null);
  const diplomaPopoverRef = useRef<HTMLDivElement | null>(null);
  const [selectedStadium, setSelectedStadium] = useState(0);
  const [isStadiumMapExpanded, setIsStadiumMapExpanded] = useState(false);
  const [stadiumMapView, setStadiumMapView] = useState<'world' | 'santiago'>('world');
  const [stadiumMapZoom, setStadiumMapZoom] = useState(1);
  const [stadiumMapOffset, setStadiumMapOffset] = useState({ x: 0, y: 0 });
  const stadiumMapDrag = useRef<{ pointerId: number; x: number; y: number; offsetX: number; offsetY: number } | null>(null);
  const stadiumMapViewport = useRef<HTMLDivElement | null>(null);
  const [liveStats, setLiveStats] = useState<SocialStats>({
    tiktokFollowers: '432',
    tiktokLikes: '9.0K',
    tiktokViews: '135.0K+',
    instaFollowers: '140',
    instaViews: '23.5K+',
  });
  const localizeNode = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') return translate(node, language);
    if (Array.isArray(node)) return node.map(localizeNode);
    if (!React.isValidElement<{ [key: string]: unknown; children?: React.ReactNode }>(node)) return node;

    const props = { ...node.props };
    if (props.children !== undefined) props.children = localizeNode(props.children);
    ['alt', 'aria-label', 'placeholder', 'title'].forEach((attribute) => {
      if (typeof props[attribute] === 'string') {
        props[attribute] = translate(props[attribute], language);
      }
    });
    return React.cloneElement(node, props);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (selectedGallerySlide !== null || showPhotoGallery || showLegalNotices || showSocialStats) return;

    const galleryTimer = setTimeout(() => {
      setActiveGallerySlide((current) => (current + 1) % gallerySlides.length);
    }, 5000);
    return () => clearTimeout(galleryTimer);
  }, [activeGallerySlide, gallerySlides.length, selectedGallerySlide, showLegalNotices, showPhotoGallery, showSocialStats]);

  useEffect(() => {
    if (selectedPhotoGalleryImage === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedPhotoGalleryImage(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selectedPhotoGalleryImage]);

  useEffect(() => {
    if (!showDiplomas) return;
    const closeOnOutsidePointerDown = (event: PointerEvent) => {
      if (!diplomaPopoverRef.current?.contains(event.target as Node)) {
        setShowDiplomas(false);
      }
    };
    document.addEventListener('pointerdown', closeOnOutsidePointerDown);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointerDown);
  }, [showDiplomas]);

  useEffect(() => {
    if (!isStadiumMapExpanded) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsStadiumMapExpanded(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isStadiumMapExpanded]);

  const showGallerySlide = (index: number) => {
    setActiveGallerySlide((index + gallerySlides.length) % gallerySlides.length);
  };

  const truncateDescription = (description: string) =>
    description.length > 40 ? `${description.slice(0, 37)}...` : description;

  const zoomStadiumMap = (direction: 1 | -1) => {
    const nextZoom = Math.min(4, Math.max(1, stadiumMapZoom + direction * 0.5));
    setStadiumMapZoom(nextZoom);
    if (nextZoom === 1) {
      setStadiumMapOffset({ x: 0, y: 0 });
      return;
    }
    const viewport = stadiumMapViewport.current;
    if (viewport) {
      setStadiumMapOffset((currentOffset) => {
        const maxX = viewport.clientWidth * (nextZoom - 1) / 2;
        const maxY = viewport.clientHeight * (nextZoom - 1) / 2;
        return {
          x: Math.max(-maxX, Math.min(maxX, currentOffset.x)),
          y: Math.max(-maxY, Math.min(maxY, currentOffset.y)),
        };
      });
    }
  };

  const switchStadiumMapView = () => {
    setStadiumMapView((currentView) => currentView === 'world' ? 'santiago' : 'world');
    setStadiumMapZoom(1);
    setStadiumMapOffset({ x: 0, y: 0 });
  };

  const startStadiumMapDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (stadiumMapZoom <= 1 || event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    stadiumMapDrag.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      offsetX: stadiumMapOffset.x,
      offsetY: stadiumMapOffset.y,
    };
  };

  const moveStadiumMap = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = stadiumMapDrag.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    setStadiumMapOffset({
      x: Math.max(
        -event.currentTarget.clientWidth * (stadiumMapZoom - 1) / 2,
        Math.min(event.currentTarget.clientWidth * (stadiumMapZoom - 1) / 2, drag.offsetX + event.clientX - drag.x),
      ),
      y: Math.max(
        -event.currentTarget.clientHeight * (stadiumMapZoom - 1) / 2,
        Math.min(event.currentTarget.clientHeight * (stadiumMapZoom - 1) / 2, drag.offsetY + event.clientY - drag.y),
      ),
    });
  };

  const stopStadiumMapDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (stadiumMapDrag.current?.pointerId !== event.pointerId) return;
    stadiumMapDrag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const renderStadiumMap = (expanded = false) => (
    <div
      ref={expanded ? stadiumMapViewport : undefined}
      className={`relative aspect-[2/1] w-full overflow-hidden rounded-lg border border-violet-400/20 bg-[#0f1021] ${expanded ? 'touch-none' : ''} ${expanded && stadiumMapZoom > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
      role="group"
      aria-label="Carte des stades visités"
      onPointerDown={expanded ? startStadiumMapDrag : undefined}
      onPointerMove={expanded ? moveStadiumMap : undefined}
      onPointerUp={expanded ? stopStadiumMapDrag : undefined}
      onPointerCancel={expanded ? stopStadiumMapDrag : undefined}
    >
      {expanded ? (
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${stadiumMapOffset.x}px, ${stadiumMapOffset.y}px) scale(${stadiumMapView === 'santiago' ? stadiumMapZoom / (2 ** Math.floor(Math.log2(stadiumMapZoom))) : stadiumMapZoom})`,
            transformOrigin: 'center',
          }}
        >
          {stadiumMapView === 'world' ? (
            <img src="/world-map.svg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full" />
          ) : (() => {
            const viewport = stadiumMapViewport.current;
            const width = viewport?.clientWidth ?? 1024;
            const height = viewport?.clientHeight ?? 512;
            const tileZoom = 12 + Math.floor(Math.log2(stadiumMapZoom));
            const worldSize = 256 * 2 ** tileZoom;
            const centerLat = -33.50808;
            const centerLon = -70.616905;
            const centerX = ((centerLon + 180) / 360) * worldSize;
            const centerY = (1 - Math.asinh(Math.tan(centerLat * Math.PI / 180)) / Math.PI) / 2 * worldSize;
            const scale = stadiumMapZoom / (2 ** Math.floor(Math.log2(stadiumMapZoom)));
            const mapCenterX = centerX - stadiumMapOffset.x / scale;
            const mapCenterY = centerY - stadiumMapOffset.y / scale;
            const minTileX = Math.floor((mapCenterX - width / (2 * scale)) / 256) - 1;
            const maxTileX = Math.floor((mapCenterX + width / (2 * scale)) / 256) + 1;
            const minTileY = Math.floor((mapCenterY - height / (2 * scale)) / 256) - 1;
            const maxTileY = Math.floor((mapCenterY + height / (2 * scale)) / 256) + 1;
            const tileCount = 2 ** tileZoom;
            const tiles: React.ReactNode[] = [];

            for (let tileX = minTileX; tileX <= maxTileX; tileX += 1) {
              for (let tileY = minTileY; tileY <= maxTileY; tileY += 1) {
                if (tileY < 0 || tileY >= tileCount) continue;
                const wrappedTileX = ((tileX % tileCount) + tileCount) % tileCount;
                tiles.push(
                  <img
                    key={`${tileZoom}-${tileX}-${tileY}`}
                    src={`https://tile.openstreetmap.org/${tileZoom}/${wrappedTileX}/${tileY}.png`}
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    className="absolute h-64 w-64 max-w-none"
                    style={{ left: width / 2 + tileX * 256 - centerX, top: height / 2 + tileY * 256 - centerY }}
                  />,
                );
              }
            }

            return (
              <>
                {tiles}
                {visitedStadiums.filter((stadium) => stadium.city.includes('Santiago')).map((stadium) => {
                  const latitude = stadium.lat * Math.PI / 180;
                  const stadiumX = ((stadium.lon + 180) / 360) * worldSize;
                  const stadiumY = (1 - Math.asinh(Math.tan(latitude)) / Math.PI) / 2 * worldSize;
                  const stadiumIndex = visitedStadiums.indexOf(stadium);

                  return (
                    <button
                      key={stadium.name}
                      type="button"
                      onClick={() => setSelectedStadium(stadiumIndex)}
                      onPointerDown={(event) => event.stopPropagation()}
                      aria-label={`${stadium.name}, ${stadium.city}, ${stadium.country}`}
                      aria-pressed={selectedStadium === stadiumIndex}
                      title={`${stadium.name} - ${stadium.city}`}
                      className="group absolute z-10 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-black/30 transition-transform hover:scale-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                      style={{
                        left: width / 2 + stadiumX - centerX,
                        top: height / 2 + stadiumY - centerY,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <span className={`block rounded-full border border-white shadow-[0_0_4px_rgba(0,0,0,0.9)] ${selectedStadium === stadiumIndex ? 'h-2 w-2 bg-red-500 ring-1 ring-red-300/70' : 'h-1.5 w-1.5 bg-red-500'}`} />
                    </button>
                  );
                })}
                <a
                  href="https://www.openstreetmap.org/copyright"
                  target="_blank"
                  rel="noreferrer"
                  onPointerDown={(event) => event.stopPropagation()}
                  className="absolute bottom-1 left-1 z-20 rounded bg-white/90 px-1.5 py-0.5 text-[10px] text-[#333] shadow"
                >
                  © OpenStreetMap
                </a>
              </>
            );
          })()}
          {stadiumMapView === 'world' && visitedStadiums.map((stadium, index) => (
            <button
              key={stadium.name}
              type="button"
              onClick={() => setSelectedStadium(index)}
              onPointerDown={(event) => event.stopPropagation()}
              aria-label={`${stadium.name}, ${stadium.city}, ${stadium.country}`}
              aria-pressed={selectedStadium === index}
              title={`${stadium.name} - ${stadium.city}`}
              className="absolute z-10 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-black/30 transition-transform hover:scale-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              style={{
                left: `${((stadium.lon + 180) / 360) * 100}%`,
                top: `${((90 - stadium.lat) / 180) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className={`block rounded-full border border-white shadow-[0_0_4px_rgba(0,0,0,0.9)] ${selectedStadium === index ? 'h-2 w-2 bg-red-500 ring-1 ring-red-300/70' : 'h-1.5 w-1.5 bg-red-500'}`} />
            </button>
          ))}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => {
            setStadiumMapZoom(1);
            setStadiumMapOffset({ x: 0, y: 0 });
            setIsStadiumMapExpanded(true);
          }}
          aria-label="Agrandir la carte interactive des stades visités"
          className="absolute inset-0 z-0 cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-violet-300"
        >
          <img src="/world-map.svg" alt="" aria-hidden="true" className="h-full w-full" />
        </button>
      )}
      {!expanded && visitedStadiums.map((stadium, index) => (
        <button
          key={stadium.name}
          type="button"
          onClick={() => setSelectedStadium(index)}
          aria-label={`${stadium.name}, ${stadium.city}, ${stadium.country}`}
          aria-pressed={selectedStadium === index}
          title={`${stadium.name} - ${stadium.city}`}
          className="absolute z-10 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-black/30 transition-transform hover:scale-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          style={{
            left: `${((stadium.lon + 180) / 360) * 100}%`,
            top: `${((90 - stadium.lat) / 180) * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <span className={`block rounded-full border border-white shadow-[0_0_4px_rgba(0,0,0,0.9)] ${selectedStadium === index ? 'h-2 w-2 bg-red-500 ring-1 ring-red-300/70' : 'h-1.5 w-1.5 bg-red-500'}`} />
        </button>
      ))}
      {expanded && (
        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1 rounded-lg border border-white/20 bg-[#150d21]/95 p-1 shadow-lg">
          <button
            type="button"
            onClick={switchStadiumMapView}
            onPointerDown={(event) => event.stopPropagation()}
            aria-label={stadiumMapView === 'world' ? 'Afficher la carte des stades de Santiago' : 'Revenir à la carte du monde'}
            className="rounded px-2 py-2 text-xs font-semibold text-white hover:bg-violet-500/30"
          >
            {stadiumMapView === 'world' ? 'Santiago' : 'Monde'}
          </button>
          <button
            type="button"
            onClick={() => zoomStadiumMap(-1)}
            onPointerDown={(event) => event.stopPropagation()}
            disabled={stadiumMapZoom <= 1}
            aria-label="Dézoomer la carte"
            className="flex h-9 w-9 items-center justify-center rounded text-xl font-semibold text-white hover:bg-violet-500/30 disabled:cursor-not-allowed disabled:opacity-40"
          >
            −
          </button>
          <span className="min-w-12 text-center text-xs font-semibold text-white" aria-live="polite">{Math.round(stadiumMapZoom * 100)}%</span>
          <button
            type="button"
            onClick={() => zoomStadiumMap(1)}
            onPointerDown={(event) => event.stopPropagation()}
            disabled={stadiumMapZoom >= 4}
            aria-label="Zoomer la carte"
            className="flex h-9 w-9 items-center justify-center rounded text-xl font-semibold text-white hover:bg-violet-500/30 disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>
      )}
    </div>
  );

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
const days = language === 'FR'
  ? ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  : ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const dayName = days[date.getDay()];
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');
return `${dayName} ${hours}:${minutes}:${seconds}`;
};

const appContent = (
<div lang={language === 'FR' ? 'fr' : 'es'} className="min-h-screen bg-[#0b0713] text-[#e2d9f3] font-sans text-xs p-3 leading-normal flex flex-col justify-between" onClick={() => showFollowMenu && setShowFollowMenu(false)}>
{/* Top Navigation Bar */}
<header className="bg-[#150d21] border-b border-[#261838] px-4 py-2 flex flex-wrap items-center justify-between gap-2 rounded-t-lg shadow-inner relative">
  <div className="flex items-center gap-4">
    <div className="w-9 h-9 bg-[#f59e0b] rounded flex items-center justify-center font-bold text-[#0b0713] text-base border border-[#fef08a] shadow-md">
      BB
    </div>
    <nav className="flex items-center gap-5 font-semibold text-[#a799c4] text-sm">
      <span className="text-[#fbbf24] border-b-2 border-[#fbbf24] pb-0.5 font-bold cursor-pointer">Carrière</span>
    </nav>
  </div>

  <div className="order-3 flex w-full items-center justify-center gap-2 text-[10px] font-semibold text-[#a799c4] md:order-none md:absolute md:left-1/2 md:w-auto md:-translate-x-1/2">
    <span>langue</span>
    <button type="button" onClick={() => setLanguage('FR')} aria-label="Français" aria-pressed={language === 'FR'} className={`rounded px-1.5 py-1 leading-none transition-colors hover:bg-violet-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300 ${language === 'FR' ? 'bg-violet-500/20 ring-1 ring-violet-300/50' : ''}`}>
      🇫🇷
    </button>
    <span aria-hidden="true" className="text-[#5b4a72]">|</span>
    <button type="button" onClick={() => setLanguage('ES')} aria-label="Español" aria-pressed={language === 'ES'} className={`rounded px-1.5 py-1 leading-none transition-colors hover:bg-violet-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300 ${language === 'ES' ? 'bg-violet-500/20 ring-1 ring-violet-300/50' : ''}`}>
      🇪🇸
    </button>
    <span>idioma</span>
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
  <div className="bg-[#150d21] border-b border-[#261838] px-5 py-1.5 flex items-center gap-5 text-[#8e7dae] text-xs mb-3 rounded-b-lg">
      <button
        type="button"
        onClick={() => {
          setSelectedGallerySlide(null);
          setShowPhotoGallery(false);
          setShowLegalNotices(false);
          setShowSocialStats(false);
        }}
        className={`${!showPhotoGallery && !showLegalNotices && !showSocialStats && selectedGallerySlide === null ? 'text-[#fbbf24] border-b-2 border-[#fbbf24]' : 'hover:text-white'} pb-0.5 font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300`}
      >
        Vue d&apos;ensemble
      </button>
      <button
        type="button"
        onClick={() => {
          setSelectedGallerySlide(null);
          setShowPhotoGallery(false);
          setShowLegalNotices(false);
          setShowSocialStats(true);
        }}
        className={`${showSocialStats ? 'text-[#fbbf24] border-b-2 border-[#fbbf24]' : 'hover:text-white'} pb-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300`}
      >
        {translate('Stats réseaux sociaux', language)}
      </button>
      <button
        type="button"
        onClick={() => {
          setSelectedGallerySlide(null);
          setShowPhotoGallery(false);
          setShowSocialStats(false);
          setShowLegalNotices(true);
        }}
        className={`${showLegalNotices ? 'text-[#fbbf24] border-b-2 border-[#fbbf24]' : 'hover:text-white'} pb-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300`}
      >
        Mentions légales
      </button>
  </div>
  {/* Main Dashboard Layout */}
  {showPhotoGallery ? (
  <main
    className="flex-1 rounded-xl border border-violet-500/30 bg-[#0f1021] p-4 shadow-xl sm:p-6"
    onContextMenu={(event) => event.preventDefault()}
    onCopy={(event) => event.preventDefault()}
    onCut={(event) => event.preventDefault()}
    onDragStart={(event) => event.preventDefault()}
  >
    <div className="mb-5 flex items-center justify-between gap-3 border-b border-violet-400/20 pb-3">
      <div>
        <h1 className="text-lg font-bold text-white sm:text-xl">Mes photos</h1>
        <p className="mt-1 text-xs text-[#8e7dae]">Cliquez sur une photo pour l&apos;afficher en grand.</p>
      </div>
      <button
        type="button"
        onClick={() => setShowPhotoGallery(false)}
        className="rounded-lg border border-violet-400/30 px-3 py-2 text-xs font-semibold text-[#e9d5ff] transition-colors hover:bg-violet-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
      >
        Retour à l&apos;accueil
      </button>
    </div>
    <div className="photo-scatter grid grid-cols-2 items-center gap-4 px-1 pb-5 sm:gap-7 sm:px-4 lg:grid-cols-12 lg:gap-10">
      {photoGalleryImages.map((photo, index) => (
        <button
          key={photo.src}
          type="button"
          onClick={() => setSelectedPhotoGalleryImage(index)}
          style={{ transform: `rotate(${photoGalleryRotations[index % photoGalleryRotations.length]})`, animationDelay: `${index * -0.8}s` }}
          className={`photo-scatter-item group relative select-none overflow-hidden rounded-md border-[6px] border-white bg-white p-1 shadow-xl transition-transform duration-300 hover:z-10 hover:scale-105 hover:!rotate-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300 sm:border-[10px] ${photoGalleryLayouts[index % photoGalleryLayouts.length]}`}
          aria-label={`Afficher en grand : ${photo.alt}`}
        >
          <img src={photo.src} alt={photo.alt} loading="lazy" draggable={false} className="h-full w-full select-none object-cover" />
        </button>
      ))}
    </div>
    <style jsx>{`
      @keyframes photo-float {
        0%, 100% { translate: 0 0; }
        50% { translate: 0 -10px; }
      }
      .photo-scatter-item {
        animation: photo-float 4.5s ease-in-out infinite;
      }
    `}</style>
  </main>
  ) : selectedGallerySlide !== null ? (
    <main
      className="flex-1 rounded-xl border border-violet-500/30 bg-[#0f1021] p-2 shadow-xl sm:p-4"
      onClick={() => setSelectedGallerySlide(null)}
    >
      <article
        className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-violet-400/30 bg-[#2d1f47] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={`relative mx-auto overflow-hidden ${![0, 1, 5].includes(selectedGallerySlide) ? 'h-[min(55vh,440px)] w-full' : 'w-fit max-w-full'}`}>
          <img
            src={gallerySlides[selectedGallerySlide].image}
            alt=""
            className={`block ${![0, 1, 5].includes(selectedGallerySlide) ? 'h-full w-full object-cover object-center' : 'max-h-[min(55vh,440px)] max-w-full'}`}
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
  ) : showLegalNotices ? (
  <main className="flex-1 rounded-xl border border-violet-500/30 bg-[#0f1021] p-4 shadow-xl sm:p-6">
    <div className="mx-auto max-w-4xl">
      <h1 className="border-b border-violet-400/20 pb-3 text-xl font-bold text-white sm:text-2xl">Mentions légales</h1>
      <p className="mt-3 text-sm leading-relaxed text-[#c4b5d9]">
        Informations relatives à l&apos;édition et à l&apos;utilisation de ce site.
      </p>

      <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#e2d9f3]">
        <section>
          <h2 className="text-base font-bold text-violet-300">Éditeur du site</h2>
          <p className="mt-2">
            Benjamin Bigot, personne physique et directeur de la publication
            <br />
            41 Chemin de l&apos;Armée d&apos;Afrique, 13005 Marseille, France
            <br />
            Téléphone : <a className="text-violet-300 hover:text-white" href="tel:+33635263323">06 35 26 33 23</a>
            <br />
            E-mail : <a className="text-violet-300 hover:text-white" href="mailto:ben.bigot@live.fr">ben.bigot@live.fr</a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-violet-300">Hébergement</h2>
          <p className="mt-2">
            Vercel Inc.
            <br />
            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            <br />
            Assistance : <a className="text-violet-300 underline hover:text-white" href="https://vercel.com/help" target="_blank" rel="noopener noreferrer">vercel.com/help</a>
            {' · '}
            <a className="text-violet-300 underline hover:text-white" href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-violet-300">Propriété intellectuelle</h2>
          <p className="mt-2">
            Sauf mention contraire, les textes, photographies et autres contenus originaux de ce site sont la propriété de Benjamin Bigot. Toute reproduction ou réutilisation sans autorisation préalable est interdite, sous réserve des exceptions prévues par la loi.
          </p>
          <p className="mt-2 font-semibold text-white">© 2026 Benjamin Bigot — Tous droits réservés. Photos et contenus originaux.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-violet-300">Données personnelles et confidentialité</h2>
          <p className="mt-2">
            Le responsable du traitement est Benjamin Bigot, joignable à l&apos;adresse <a className="text-violet-300 underline hover:text-white" href="mailto:ben.bigot@live.fr">ben.bigot@live.fr</a>. Ce site ne comporte ni espace membre ni formulaire de collecte. Les données techniques de connexion peuvent être traitées par l&apos;hébergeur pour diffuser et sécuriser le site ; elles ne sont pas conservées directement par l&apos;éditeur. Leur durée de conservation dépend des paramètres et des pratiques de Vercel, décrites dans sa <a className="text-violet-300 underline hover:text-white" href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">notice de confidentialité</a>.
          </p>
          <p className="mt-2">
            Les ressources tierces sont fournies par TikTok (vidéo), OpenStreetMap (tuiles cartographiques) et FlagCDN (drapeaux). Leur chargement peut transmettre des données techniques, notamment l&apos;adresse IP, aux fournisseurs concernés. Vercel Inc. étant établi aux États-Unis, des transferts de données hors de l&apos;Espace économique européen peuvent avoir lieu. Les liens vers les réseaux sociaux ne transmettent des informations à ces services que lorsque vous les ouvrez.
          </p>
          <p className="mt-2">
            Ce site ne met pas en œuvre de mesure d&apos;audience propre. Les lecteurs ou ressources tiers peuvent utiliser des cookies ou autres traceurs selon leurs propres pratiques ; le blocage des cookies tiers dans votre navigateur peut limiter certaines fonctionnalités. Pour exercer vos droits d&apos;accès, de rectification, d&apos;effacement, de limitation ou d&apos;opposition, contactez l&apos;éditeur par e-mail. Vous pouvez également adresser une réclamation à la <a className="text-violet-300 underline hover:text-white" href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">CNIL</a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-violet-300">Services tiers et crédits</h2>
          <p className="mt-2">
            Vidéo : <a className="text-violet-300 underline hover:text-white" href="https://www.tiktok.com/legal/page/eea/privacy-policy/fr" target="_blank" rel="noopener noreferrer">politique de confidentialité TikTok</a>.
            {' '}Cartographie : <a className="text-violet-300 underline hover:text-white" href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">politique de confidentialité OpenStreetMap</a> et <a className="text-violet-300 underline hover:text-white" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">crédits cartographiques</a>.
            {' '}Drapeaux : <a className="text-violet-300 underline hover:text-white" href="https://flagcdn.com/" target="_blank" rel="noopener noreferrer">FlagCDN</a>.
          </p>
        </section>
      </div>
    </div>
  </main>
  ) : showSocialStats ? (
  <main className="flex-1 rounded-xl border border-violet-500/30 bg-[#0f1021] p-4 shadow-xl sm:p-6">
    <div className="mx-auto max-w-2xl">
      <SocialStatsPanel 
        stats={{
          tiktokFollowers: '432',
          tiktokLikes: '9.0K',
          tiktokViews: '135.0K+',
          instaFollowers: '140',
          instaViews: '23.5K+'
        }}
        language={language}
        className="flex flex-col justify-between"
      />
    </div>
  </main>
  ) : (
  <main className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-grow">

    {/* CARD 1: MON PROFIL */}
    <section className="lg:col-span-3 order-1 bg-[#150d21] border border-[#261838] rounded-lg p-4 flex flex-col justify-between shadow-xl">
      <div>
        <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase border-b border-[#261838] pb-1.5 mb-3">MON PROFIL</h2>

        <div className="flex items-start gap-3.5 mb-4">
          <div className="w-14 h-14 bg-[#221435] rounded-full overflow-hidden border-2 border-[#a855f7]/40 shrink-0 shadow">
            <img src="/photos/benjamin-bigot.jpg" alt="Benjamin Bigot" className="h-full w-full object-cover object-top" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Benjamin Bigot</h3>
            <p className="text-[#8e7dae] text-xs">27/03/1995</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#8e7dae] text-xs">Réputation :</span>
              <span className="text-[#c084fc] font-semibold text-xs">● {translate('Créatif', language)}</span>
            </div>
            <p className="text-[#c084fc] font-semibold text-xs mt-1">Licence STAPS / Management du sport</p>
            <div ref={diplomaPopoverRef} className="relative mt-1">
              <button
                type="button"
                onClick={() => setShowDiplomas((current) => !current)}
                aria-expanded={showDiplomas}
                className="text-left text-[11px] text-[#8e7dae] underline decoration-dotted underline-offset-2 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
              >
                + 2 autres diplômes
              </button>
              {showDiplomas && (
                <div className="absolute left-0 top-full z-20 mt-2 w-52 rounded-lg border border-violet-400/30 bg-[#0f1021] p-2.5 shadow-xl">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-violet-300">Mes diplômes</p>
                  <ul className="mt-1.5 space-y-1 text-[11px] text-[#e2d9f3]">
                    <li>Baccalauréat ES</li>
                    <li>BTS Banque</li>
                    <li>Licence STAPS / Management du sport</li>
                  </ul>
                </div>
              )}
            </div>
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
          </div>
          <div className="flex justify-between items-center py-1 border-b border-[#1c112e]">
            <span className="text-[#e2d9f3] flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#a855f7]"/> ben.bigot@live.fr</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-[#e2d9f3] flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#a855f7]"/>
              {translate('Recherche poste de ', language)}
              {translate('Chargé de communication', language)} / {translate('Chargé de projet', language)}
            </span>
          </div>
          <div className="flex items-center gap-2 py-1 text-[#e2d9f3]">
            <Compass className="w-3.5 h-3.5 shrink-0 text-[#a855f7]" />
            <span>{translate('Mobilité : France / Chili', language)}</span>
          </div>
          <div className="flex items-start gap-2 py-1 text-[#e2d9f3]">
            <Globe className="mt-0.5 w-3.5 h-3.5 shrink-0 text-[#a855f7]" />
            <span>{translate('Langues parlées : Français (natif) / Espagnol (courant) / Anglais (intermédiaire/professionnel)', language)}</span>
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
    {/* CARD 2: CE QU'IL FAUT SAVOIR */}
    <section className="lg:col-span-6 order-2 bg-[#150d21] border border-[#261838] rounded-lg p-4 flex flex-col shadow-xl">
      <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase border-b border-[#261838] pb-1.5 mb-3">Ce qu&apos;il faut savoir</h2>
      <div
        className="relative flex min-h-[420px] flex-1 flex-col justify-end overflow-hidden rounded-lg border border-[#261838] bg-[#0b0713] sm:min-h-[380px] lg:min-h-[360px]"
        role="group"
        aria-label={`Galerie photo: ${gallerySlides[activeGallerySlide].title}`}
      >
        <button
          type="button"
          onClick={() => setSelectedGallerySlide(activeGallerySlide)}
          aria-label={`Afficher les informations de ${gallerySlides[activeGallerySlide].title}`}
          className={`absolute inset-0 z-0 cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#c084fc] ${activeGallerySlide < 2 ? 'bg-[#0f1021]' : ''}`}
        >
          {activeGallerySlide < 2 && (
            <span
              aria-hidden="true"
              className="absolute inset-0 scale-110 bg-cover bg-center opacity-50 blur-xl"
              style={{ backgroundImage: `url("${gallerySlides[activeGallerySlide].image}")` }}
            />
          )}
          <span aria-hidden="true" className={`absolute inset-0 ${activeGallerySlide < 2 ? 'bg-transparent' : 'bg-[#0b0713]/25'}`} />
          <img
            src={gallerySlides[activeGallerySlide].image}
            alt=""
            className={`absolute inset-0 h-full w-full ${activeGallerySlide < 2 ? `object-contain ${activeGallerySlide === 0 ? 'object-top' : 'object-center'}` : 'object-cover object-center'}`}
          />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b0713]/90 via-[#0b0713]/35 to-black/10" />
        </button>
        <div className="pointer-events-none relative z-10 p-4 pt-16">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8b4fe]">
            Reportage {String(activeGallerySlide + 1).padStart(2, '0')} / {String(gallerySlides.length).padStart(2, '0')}
          </p>
          <h3 className="mb-2 text-2xl font-bold leading-tight text-white">{gallerySlides[activeGallerySlide].title}</h3>
          <p className="mb-4 text-xs leading-relaxed text-[#e2d9f3]">{truncateDescription(translate(gallerySlides[activeGallerySlide].description, language))}</p>
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
    {/* CARD 3: CARTE INTERACTIVE */}
    <section className="order-4 lg:col-span-5 bg-[#150d21] border border-[#261838] rounded-lg p-4 shadow-xl">
      <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase border-b border-[#261838] pb-1.5 mb-2">Carte interactive / Stades visités</h2>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <p className="text-[#8e7dae] text-[10px]">Cliquez sur la carte pour agrandir · Sélectionnez un stade</p>
        <div className="flex items-center gap-3 text-[10px] font-semibold text-[#c4b5d9]">
          <span><strong className="text-white">{visitedStadiums.length}</strong> stades</span>
          <span><strong className="text-white">{new Set(visitedStadiums.map((stadium) => stadium.country)).size}</strong> pays</span>
        </div>
      </div>
      {renderStadiumMap()}
      <label htmlFor="stadium-selector" className="mt-3 block text-[10px] font-semibold uppercase tracking-wider text-[#8e7dae]">Choisir un stade</label>
      <select
        id="stadium-selector"
        value={selectedStadium}
        onChange={(event) => setSelectedStadium(Number(event.target.value))}
        className="mt-1 w-full rounded-lg border border-violet-400/20 bg-[#0f1021] p-2 text-xs text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
      >
        {visitedStadiums.map((stadium, index) => (
          <option key={stadium.name} value={index}>{stadium.name} — {stadium.city}</option>
        ))}
      </select>
      <div className="mt-3 rounded-lg border border-violet-400/20 bg-[#0f1021] p-3" aria-live="polite">
        <p className="text-xs font-bold leading-snug text-white">{visitedStadiums[selectedStadium].name}</p>
        <p className="mt-1 text-[11px] text-[#c4b5d9]">{visitedStadiums[selectedStadium].city} · {visitedStadiums[selectedStadium].country}</p>
      </div>
      <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-wider text-[#8e7dae]">
        <span className="inline-block h-2 w-2 rounded-full border border-white bg-red-500 align-middle shadow-[0_0_5px_rgba(239,68,68,0.8)]" />{' '}
        Point rouge : stade visité · {visitedStadiums.length} au total
      </p>
      <div className="mt-3 max-h-80 overflow-y-auto rounded-lg border border-violet-400/20 bg-[#0f1021]">
        <table className="w-full text-left text-[11px]">
          <caption className="sr-only">{translate('Tableau des stades visités', language)}</caption>
          <thead className="sticky top-0 bg-[#1a1030] text-[#8e7dae]">
            <tr>
              <th scope="col" className="px-2 py-1.5 font-bold">{translate('Stade', language)}</th>
              <th scope="col" className="px-2 py-1.5 font-bold">{translate('Ville / Pays', language)}</th>
              <th scope="col" className="px-2 py-1.5 text-right font-bold">{translate('Capacité', language)}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-900/30">
            {visitedStadiums.map((stadium, index) => {
              const capacity = stadiumCapacities[stadium.name] ?? 0;
              const isSelected = selectedStadium === index;
              return (
                <tr
                  key={stadium.name}
                  onClick={() => setSelectedStadium(index)}
                  className={`cursor-pointer transition-colors hover:bg-violet-500/15 ${isSelected ? 'bg-violet-500/25' : ''}`}
                >
                  <td className="px-2 py-1.5 font-bold text-white">
                    <button
                      type="button"
                      onClick={() => setSelectedStadium(index)}
                      aria-pressed={isSelected}
                      className="text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
                    >
                      {stadium.name}
                    </button>
                  </td>
                  <td className="px-2 py-1.5 text-[#e2d9f3]">{stadium.city.split(', ').pop()}, {stadium.country.replace(' ', '\u00a0')} {countryFlags[stadium.country]}</td>
                  <td className="px-2 py-1.5">
                    <div className="flex flex-col items-end gap-1">
                      <span className="font-semibold text-[#fbbf24]">~{capacity.toLocaleString('fr-FR')}</span>
                      <span className="h-1 w-full min-w-[3rem] overflow-hidden rounded-full bg-[#261838]">
                        <span className="block h-full rounded-full bg-gradient-to-r from-[#a855f7] to-[#fbbf24]" style={{ width: `${Math.max(4, (capacity / 80000) * 100)}%` }} />
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
    {/* CARD 4: MON HISTORIQUE */}
    <section className="order-5 lg:col-span-4 bg-[#150d21] border border-[#261838] rounded-lg p-4 pb-2 shadow-xl flex flex-col">
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
            <tbody className="divide-y divide-purple-900/30">
              <tr>
                <td className="py-4 text-[#8e7dae]">2025 -</td>
                <td className="py-4 font-bold text-white">Jour de Stade</td>
                <td className="py-4"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Réseaux sociaux</span></td>
                <td className="py-4 text-[#e2d9f3]">Le monde</td>
                <td className="py-4"><Globe className="w-4 h-4 text-purple-400" /></td>
              </tr>
              <tr>
                <td className="py-4 text-[#8e7dae]">2025 -</td>
                <td className="py-4 font-bold text-white">Sport 2000</td>
                <td className="py-4"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Retail Sport</span></td>
                <td className="py-4 text-[#e2d9f3]">Marseille</td>
                <td className="py-4"><img src="https://flagcdn.com/w20/fr.png" alt="France" className="w-4 h-auto rounded-sm" /></td>
              </tr>
              <tr>
                <td className="py-4 text-[#8e7dae]">2025</td>
                <td className="py-4 font-bold text-white">Realsport</td>
                <td className="py-4"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Retail Sport</span></td>
                <td className="py-4 text-[#e2d9f3]">Antofagasta</td>
                <td className="py-4"><img src="https://flagcdn.com/w20/cl.png" alt="Chili" className="w-4 h-auto rounded-sm" /></td>
              </tr>
              <tr>
                <td className="py-4 text-[#8e7dae]">2024-25</td>
                <td className="py-4 font-bold text-white">Pariwana Hostel</td>
                <td className="py-4"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Hôtellerie</span></td>
                <td className="py-4 text-[#e2d9f3]">Santiago</td>
                <td className="py-4"><img src="https://flagcdn.com/w20/cl.png" alt="Chili" className="w-4 h-auto rounded-sm" /></td>
              </tr>
              <tr>
                <td className="py-4 text-[#8e7dae]">2019-24</td>
                <td className="py-4 font-bold text-white">Decathlon</td>
                <td className="py-4"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Retail Sport</span></td>
                <td className="py-4 text-[#e2d9f3]">Marseille</td>
                <td className="py-4"><img src="https://flagcdn.com/w20/fr.png" alt="France" className="w-4 h-auto rounded-sm" /></td>
              </tr>
              <tr>
                <td className="py-4 text-[#8e7dae]">2018</td>
                <td className="py-4 font-bold text-white">Rugby Club Flers P.B.</td>
                <td className="py-4"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Stage</span></td>
                <td className="py-4 text-[#e2d9f3]">Flers</td>
                <td className="py-4"><img src="https://flagcdn.com/w20/fr.png" alt="France" className="w-4 h-auto rounded-sm" /></td>
              </tr>
              <tr>
                <td className="py-4 text-[#8e7dae]">2013-15</td>
                <td className="py-4 font-bold text-white">Crédit Agricole</td>
                <td className="py-4"><span className="bg-[#221435] px-2 py-0.5 rounded text-[#d8b4fe]">Alternance</span></td>
                <td className="py-4 text-[#e2d9f3]">La Ferté Macé</td>
                <td className="py-4"><img src="https://flagcdn.com/w20/fr.png" alt="France" className="w-4 h-auto rounded-sm" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-lg border border-violet-400/20 bg-[#0f1021] p-3">
          <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fbbf24]">{translate('Ce que ce parcours m’apporte', language)}</h3>
          <ul className="space-y-2">
            {[
              ['Com’ & Content', 'Création de logo avec le RC Flers en tant que chargé de communication (charte graphique, dossier stratégique) et pilotage de contenu multi-plateformes avec Jour de Stade (script, tournage, montage, modération).'],
              ['Gestion de Projet', 'Rigueur, organisation et culture du résultat issues du secteur bancaire et du retail.'],
              ['Adaptabilité & International', 'Expériences terrain et bilingues au Chili (Santiago, Antofagasta) et en retail (Decathlon, Sport 2000).'],
            ].map(([title, text]) => (
              <li key={title} className="rounded-md border-l-2 border-[#c084fc] bg-[#150d21] px-3 py-2">
                <p className="text-xs font-bold text-[#d8b4fe]">{translate(title, language)}</p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#e2d9f3]">{translate(text, language)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    {/* CARD 5: GALERIE TIKTOK */}
    <section className="order-6 lg:col-span-3 bg-[#150d21] border border-[#261838] rounded-lg p-4 shadow-xl flex flex-col">
      <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase border-b border-[#261838] pb-1.5 mb-3">Galerie</h2>
      <div className="flex flex-1 flex-col items-center">
        <iframe
          src="https://www.tiktok.com/player/v1/7515221320624393477?autoplay=1&muted=1&controls=1&volume_control=0&description=0&music_info=0&rel=0"
          title="Vidéo TikTok de Jour de Stade sur les maillots chiliens"
          className="w-full max-h-[min(65vh,620px)] aspect-[9/16] overflow-hidden rounded-lg border border-[#261838] bg-[#0b0713]"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <p className="mt-3 text-center text-xs font-semibold leading-relaxed text-[#e2d9f3]">
          POV : donner vie aux maillots chiliens
        </p>
        <button
          type="button"
          onClick={() => setShowPhotoGallery(true)}
          className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-violet-400/30 bg-violet-500/15 px-4 py-2.5 text-sm font-bold text-[#e9d5ff] transition-colors hover:bg-violet-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
        >
          Visiter
        </button>
      </div>
    </section>

    {/* CARD 6: LE CONCEPT */}
    <section className="order-3 lg:col-span-3 bg-[#150d21] border border-[#261838] rounded-lg p-4 shadow-xl flex flex-col">
      <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase border-b border-[#261838] pb-1.5 mb-3">{translate('Le Concept', language)}</h2>
      <div className="flex flex-1 flex-col items-center">
        <iframe
          src="https://www.tiktok.com/player/v1/7516662567851412741?autoplay=1&muted=1&controls=1&volume_control=0&description=0&music_info=0&rel=0"
          title="Le Concept - Jour de Stade"
          className="w-full max-h-[min(65vh,620px)] aspect-[9/16] overflow-hidden rounded-lg border border-[#261838] bg-[#0b0713]"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <button
          type="button"
          onClick={() => setShowMethod(true)}
          className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-violet-400/30 bg-violet-500/15 px-4 py-2.5 text-sm font-bold text-[#e9d5ff] transition-colors hover:bg-violet-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
        >
          {translate('Découvrir la méthode', language)}
        </button>
      </div>
    </section>
  </main>
  )}
      {selectedGallerySlide === null && !showPhotoGallery && !showLegalNotices && !showSocialStats && (
        <footer className="mt-4 border-t border-[#261838] py-4 text-center text-xs text-[#8e7dae]">
          © 2026 Benjamin Bigot — Tous droits réservés. Photos et contenus originaux.
        </footer>
      )}
      {showMethod && (
      <div
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:items-center sm:p-6"
        onClick={() => setShowMethod(false)}
        onKeyDown={(event) => { if (event.key === 'Escape') setShowMethod(false); }}
      >
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="method-title"
          className="my-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl overflow-y-auto rounded-xl border border-violet-400/40 bg-[#150d21] p-4 shadow-2xl sm:max-h-[calc(100dvh-3rem)] sm:p-6"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#261838] pb-2">
            <h2 id="method-title" className="text-[#c084fc] font-bold text-sm tracking-wider uppercase">{translate('Découvrir la méthode', language)}</h2>
            <button
              type="button"
              autoFocus
              onClick={() => setShowMethod(false)}
              className="rounded-lg border border-violet-400/30 bg-violet-500/15 px-3 py-1 text-xs font-bold text-[#e9d5ff] transition-colors hover:bg-violet-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
            >
              {translate('Fermer', language)}
            </button>
          </div>
          <img
            src="/photos/methode-tournage.jpg"
            alt={translate('Benjamin Bigot en plein tournage avec un prompteur devant les écharpes de clubs chiliens', language)}
            className="mx-auto mb-5 aspect-[4/3] w-full max-w-xs rounded-2xl border border-violet-400/30 object-cover object-[50%_30%] shadow-lg"
          />
          <div className="space-y-4">
            {[
              ["L'idée 💡", "Passionné de football et d'histoire, j'ai créé Jour de Stade afin de faire connaître le football chilien au public français, et par la même occasion, sa culture et son histoire. O'Higgins, Palestino, Colo-Colo, l'Audax Italiano, la Universidad de Chile... Chaque club raconte une partie de la riche histoire du Chili. Par la même occasion, j'ai souhaité faire connaître Marseille via l'OM, aux chiliens, de la même manière. Afin de créer du contenu régulièrement, des trends et vidéos récréatives viennent compléter le compte."],
              ["L'écriture ✍️", "Pour chaque vidéo explicative est écrit au préalable un script avec deux ou trois parties maximum. Pour les clubs chiliens, la langue parlée est le français, pour la vidéo explicative sur l'OM, elle est écrite en espagnol. Chaque vidéo contient des sous-titres français et espagnols."],
              ['Tournage / Montage 🎥', "Le tournage est réalisé en fonction du script et du type de vidéo finale souhaitée. Facecam, prompteur, extrait, photographie. L'idée est de retranscrire l'émotion de la vidéo, qu'elle soit humoristique, immersive ou explicative. Le montage est fait dans les codes des réseaux sociaux : dynamique (cut, habillage, sound design)."],
              ['Publication 📣', "La vidéo est postée avec une description faite pour inciter le plus possible à l'interaction. L'alliance d'un hook percutant, d'une vignette captivante et d'un référencement ciblé par hashtags pour maximiser la portée."],
              ['Outils utilisés 🛠️', 'Smartphone / Micro-cravate / CapCut / Canva / Veed.io / Appareil photo / TikTok'],
            ].map(([title, text]) => (
              <article key={title}>
                <h3 className="mb-1 text-sm font-bold text-[#fbbf24]">{translate(title, language)}</h3>
                <p className="text-xs leading-relaxed text-[#e2d9f3]">{translate(text, language)}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
      )}
      {isStadiumMapExpanded && (
      <div
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:items-center sm:p-6"
        onClick={() => setIsStadiumMapExpanded(false)}
      >
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="expanded-stadium-map-title"
          className="my-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-7xl overflow-y-auto rounded-xl border border-violet-400/40 bg-[#150d21] p-4 shadow-2xl sm:max-h-[calc(100dvh-3rem)] sm:p-6"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2 id="expanded-stadium-map-title" className="text-sm font-bold uppercase tracking-wider text-[#d8b4fe] sm:text-base">
                Carte interactive / Stades visités
              </h2>
              <p className="mt-1 text-xs text-[#8e7dae]">Affichez la carte détaillée de Santiago, puis zoomez ou déplacez-la. Sélectionnez un marqueur pour afficher le stade.</p>
            </div>
            <button
              type="button"
              onClick={() => setIsStadiumMapExpanded(false)}
              className="shrink-0 rounded border border-violet-400/30 px-3 py-1.5 text-xs font-semibold text-white hover:bg-violet-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
            >
              Fermer
            </button>
          </div>
          {renderStadiumMap(true)}
          <label htmlFor="expanded-stadium-selector" className="mt-3 block text-[10px] font-semibold uppercase tracking-wider text-[#8e7dae]">Choisir un stade</label>
          <select
            id="expanded-stadium-selector"
            value={selectedStadium}
            onChange={(event) => setSelectedStadium(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-violet-400/20 bg-[#0f1021] p-2 text-xs text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300"
          >
            {visitedStadiums.map((stadium, index) => (
              <option key={stadium.name} value={index}>{stadium.name} — {stadium.city}</option>
            ))}
          </select>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-violet-400/20 bg-[#0f1021] p-3" aria-live="polite">
            <div>
              <p className="text-sm font-bold leading-snug text-white">{visitedStadiums[selectedStadium].name}</p>
              <p className="mt-1 text-xs text-[#c4b5d9]">{visitedStadiums[selectedStadium].city} · {visitedStadiums[selectedStadium].country}</p>
            </div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8e7dae]">
              <span className="inline-block h-2 w-2 rounded-full border border-white bg-red-500" />
              {visitedStadiums.length} {translate('stades visités', language)}
            </p>
          </div>
        </section>
      </div>
    )}
    {selectedPhotoGalleryImage !== null && (
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={photoGalleryImages[selectedPhotoGalleryImage].alt}
        onClick={() => setSelectedPhotoGalleryImage(null)}
        onContextMenu={(event) => event.preventDefault()}
        onCopy={(event) => event.preventDefault()}
        onCut={(event) => event.preventDefault()}
        onDragStart={(event) => event.preventDefault()}
      >
        <button
          type="button"
          onClick={() => setSelectedPhotoGalleryImage(null)}
          aria-label="Fermer la photo"
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/60 text-2xl text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          ×
        </button>
        <img
          src={photoGalleryImages[selectedPhotoGalleryImage].src}
          alt={photoGalleryImages[selectedPhotoGalleryImage].alt}
          draggable={false}
          onClick={(event) => event.stopPropagation()}
          className="max-h-[92vh] max-w-[96vw] select-none object-contain shadow-2xl"
        />
      </div>
    )}
</div>
);
return language === 'ES' ? localizeNode(appContent) : appContent;
}