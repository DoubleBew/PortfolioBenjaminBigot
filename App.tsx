"use client";

import React, { useState, useEffect } from 'react';
import { Search, Phone, Mail, Compass, Award, Shield, ChevronRight, Instagram, Globe, MessageSquare } from 'lucide-react';

type SocialStats = {
  tiktok: {
    handle: string;
    views: string;
    followers: string;
    engagement: string;
  };
  instagram: {
    handle: string;
    trend: string;
    status: string;
  };
  isLive: boolean;
  updatedAt?: string;
  error?: string;
};

export default function App() {
  const [time, setTime] = useState<Date | null>(null);
  const [showFollowMenu, setShowFollowMenu] = useState<boolean>(false);
  const [socialStats, setSocialStats] = useState<SocialStats | null>(null);
  const [socialStatsError, setSocialStatsError] = useState<string | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const loadSocialStats = async () => {
      try {
        const response = await fetch('/api/stats', { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Stats API returned HTTP ${response.status}`);
        }

        const data = (await response.json()) as SocialStats;
        setSocialStats(data);
        setSocialStatsError(data.error ?? null);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        const message = error instanceof Error ? error.message : 'Unable to load social stats.';
        setSocialStats({
          tiktok: {
            handle: '@jour.de.stade',
            views: '128.5K+',
            followers: 'Indisponible',
            engagement: 'Élevé',
          },
          instagram: {
            handle: '@jour_de_stade',
            trend: 'En hausse',
            status: 'Actif',
          },
          isLive: false,
          error: message,
        });
        setSocialStatsError(message);
      }
    };

    void loadSocialStats();
    const timer = setInterval(() => void loadSocialStats(), 300_000);

    return () => {
      controller.abort();
      clearInterval(timer);
    };
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
            <div className="text-[10px] text-[#8e7dae]">{time ? formatDate(time) : '--/--/----'}</div>
            <div className="font-bold text-[#fbbf24] text-xs">{time ? formatTime(time) : '--- --:--:--'}</div>
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
        <span className="text-[#fbbf24] font-bold border-b-2 border-[#fbbf24] pb-0.5">Vue d'ensemble</span>
        <span className="hover:text-white cursor-pointer">Mon profil</span>
        <span className="hover:text-white cursor-pointer">Mon contrat</span>
        <span className="hover:text-white cursor-pointer">Mes badges</span>
        <span className="hover:text-white cursor-pointer">Mes rapports</span>
        <span className="hover:text-white cursor-pointer">Mon historique</span>
        <span className="hover:text-white cursor-pointer">Stats de gestion</span>
      </div>

      {/* Main Dashboard Layout */}
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

        {/* CARD 2: MON CONTRAT */}
        <section className="lg:col-span-4 bg-[#150d21] border border-[#261838] rounded-lg p-4 flex flex-col justify-between shadow-xl">
          <div>
            <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase border-b border-[#261838] pb-1.5 mb-3">MON CONTRAT</h2>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#fbbf24]/10 border border-[#fbbf24] text-[#fbbf24] rounded-lg flex items-center justify-center font-bold text-sm">
                🛡️
              </div>
              <div>
                <p className="font-bold text-white text-sm">CDI - Disponible</p>
                <p className="text-[#8e7dae] text-xs">Recherche active depuis 2025</p>
              </div>
            </div>

            <div className="bg-[#0b0713] p-3 rounded-lg border border-[#261838] space-y-2 my-3">
              <div className="flex justify-between text-[#8e7dae] text-xs">
                <span>2025</span>
                <span>2026</span>
              </div>
              <div className="w-full bg-[#1c112e] h-2 rounded-full overflow-hidden border border-[#261838]">
                <div className="bg-[#a855f7] h-full w-1/4"></div>
              </div>
              <div className="flex justify-between text-xs pt-1">
                <span className="text-[#8e7dae]">Prend fin dans :</span>
                <span className="text-[#fbbf24] font-bold">∞ jours</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#8e7dae]">Type</span>
                <span className="text-[#e2d9f3]">Plein temps</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 border-t border-[#261838] pt-3">
            <p className="text-[#8e7dae] font-bold text-xs uppercase">CLAUSE(S)</p>
            <p className="text-[#e2d9f3] text-xs">Mobilité Marseille / France • Télétravail partiel</p>
            <p className="text-[#8e7dae] font-bold text-xs uppercase pt-1">PRIMES</p>
            <p className="text-[#e2d9f3] text-xs">Performance • Engagement long terme</p>
          </div>
        </section>

        {/* CARD 3: MES QUALIFICATIONS */}
        <section className="lg:col-span-4 bg-[#150d21] border border-[#261838] rounded-lg p-4 flex flex-col justify-between shadow-xl">
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

        {/* CARD 4: MON HISTORIQUE (Plein espace) */}
        <section className="lg:col-span-5 h-full min-h-0 bg-[#150d21] border border-[#261838] rounded-lg p-4 shadow-xl flex flex-col">
          <div className="flex min-h-0 flex-1 flex-col">
            <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase border-b border-[#261838] pb-1.5 mb-3">MON HISTORIQUE</h2>

            <div className="min-h-0 flex-1 overflow-auto">
              <table className="h-full w-full text-left text-xs">
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
    {/* CARD 5: STATS DE GESTION */}
    <section className="lg:col-span-3 bg-[#150d21] border border-[#261838] rounded-lg p-4 shadow-xl">
      <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase border-b border-[#261838] pb-1.5 mb-3">STATS DE GESTION</h2>

      <div className="space-y-2 text-xs">
        <p className="text-[#8e7dae] font-bold uppercase text-[10px]">HARD SKILLS</p>
        <div className="flex justify-between py-0.5 border-b border-[#1c112e]">
          <span className="text-[#e2d9f3]">Création de logo / charte</span>
          <span className="text-[#c084fc] font-semibold">Expert</span>
        </div>
        <div className="flex justify-between py-0.5 border-b border-[#1c112e]">
          <span className="text-[#e2d9f3]">Contenu TikTok / Instagram</span>
          <span className="text-[#fbbf24] font-bold">{socialStats?.tiktok.views ?? 'Chargement…'}</span>
        </div>
        <div className="flex justify-between py-0.5 border-b border-[#1c112e]">
          <span className="text-[#e2d9f3]">Photographie</span>
          <span className="text-gray-200">Avancé</span>
        </div>
        <div className="flex justify-between py-0.5 border-b border-[#1c112e] mb-2">
          <span className="text-[#e2d9f3]">Montage vidéo</span>
          <span className="text-gray-200">Avancé</span>
        </div>
        <p className="text-[#8e7dae] font-bold uppercase text-[10px] pt-1">VENTE & GESTION</p>
        <div className="flex justify-between py-0.5 border-b border-[#1c112e]">
          <span className="text-[#e2d9f3]">Technique de vente</span>
          <span className="text-[#fbbf24] font-bold">5 ans</span>
        </div>
        <div className="flex justify-between py-0.5 border-b border-[#1c112e]">
          <span className="text-[#e2d9f3]">Animation commerciale</span>
          <span className="text-gray-200">Confirmé</span>
        </div>
        <div className="flex justify-between py-0.5 border-b border-[#1c112e]">
          <span className="text-[#e2d9f3]">Gestion stocks & démarques</span>
          <span className="text-gray-200">Confirmé</span>
        </div>
        <div className="flex justify-between py-0.5">
          <span className="text-[#e2d9f3]">Formateur sports collectifs</span>
          <span className="text-[#c084fc]">Decathlon</span>
        </div>
        <div className="border-t border-[#1c112e] pt-2">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-[#8e7dae] font-bold uppercase text-[10px]">STATS SOCIALES</p>
            <span className={socialStats?.isLive ? 'text-emerald-400' : 'text-amber-400'}>
              {socialStats?.isLive ? 'TIKTOK LIVE' : socialStats ? 'TIKTOK INDISPONIBLE' : 'CHARGEMENT'}
            </span>
          </div>
          <div className="flex justify-between py-0.5">
            <span className="text-[#e2d9f3]">TikTok · abonnés</span>
            <span className="text-[#c084fc] font-semibold">{socialStats?.tiktok.followers ?? '—'}</span>
          </div>
          <div className="flex justify-between py-0.5">
            <span className="text-[#e2d9f3]">TikTok · engagement</span>
            <span className="text-[#c084fc] font-semibold">{socialStats?.tiktok.engagement ?? '—'}</span>
          </div>
          <div className="flex justify-between py-0.5">
            <span className="text-[#e2d9f3]">Instagram · {socialStats?.instagram.handle ?? '@jour_de_stade'}</span>
            <span className="text-[#c084fc] font-semibold">{socialStats?.instagram.trend ?? 'En hausse'}</span>
          </div>
          <div className="flex justify-between py-0.5">
            <span className="text-[#e2d9f3]">Instagram · statut</span>
            <span className="text-[#c084fc] font-semibold">{socialStats?.instagram.status ?? 'Actif'}</span>
          </div>
          {socialStatsError && (
            <p className="mt-1 text-[10px] text-amber-400" role="status">
              TikTok indisponible. Valeurs indicatives affichées; Instagram reste informatif.
            </p>
          )}
        </div>
      </div>
    </section>
    {/* CARD 6: POSTES VACANTS - MISSIONS CIBLÉES */}
    <section className="lg:col-span-4 bg-[#150d21] border border-[#261838] rounded-lg p-4 shadow-xl">
      <h2 className="text-[#c084fc] font-bold text-xs tracking-wider uppercase border-b border-[#261838] pb-1.5 mb-3">POSTES VACANTS — MISSIONS CIBLÉES</h2>

      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-8 h-8 bg-[#8b5cf6] rounded-lg flex items-center justify-center font-bold text-white text-sm">
          🎯
        </div>
        <div>
          <p className="font-bold text-white text-sm">3 missions ciblées</p>
          <p className="text-[#8e7dae] text-xs">Disponible immédiatement • Marseille & France entière</p>
        </div>
      </div>
      <div className="space-y-2.5 text-xs">
        <div className="bg-[#0b0713] p-2.5 rounded-lg border border-[#261838]">
          <p className="font-bold text-white text-xs">Chargé de communication Sport</p>
          <div className="flex gap-1.5 my-1.5">
            <span className="bg-[#221435] text-[#d8b4fe] px-2 py-0.5 rounded text-[10px]">Comm. digitale</span>
            <span className="bg-[#221435] text-[#d8b4fe] px-2 py-0.5 rounded text-[10px]">Réseaux sociaux</span>
            <span className="bg-[#221435] text-[#d8b4fe] px-2 py-0.5 rounded text-[10px]">Création contenu</span>
          </div>
          <p className="text-[#fbbf24] text-xs text-right font-semibold">Priorité 1</p>
        </div>
        <div className="bg-[#0b0713] p-2.5 rounded-lg border border-[#261838]">
          <p className="font-bold text-white text-xs">Responsable d'équipe</p>
          <div className="flex gap-1.5 my-1.5">
            <span className="bg-[#221435] text-[#d8b4fe] px-2 py-0.5 rounded text-[10px]">Management</span>
            <span className="bg-[#221435] text-[#d8b4fe] px-2 py-0.5 rounded text-[10px]">Animation</span>
            <span className="bg-[#221435] text-[#d8b4fe] px-2 py-0.5 rounded text-[10px]">Formation</span>
          </div>
          <p className="text-[#fbbf24] text-xs text-right font-semibold">Priorité 2</p>
        </div>
        <div className="bg-[#0b0713] p-2.5 rounded-lg border border-[#261838]">
          <p className="font-bold text-white text-xs">Gestion de projet Sportif</p>
          <div className="flex gap-1.5 my-1.5">
            <span className="bg-[#221435] text-[#d8b4fe] px-2 py-0.5 rounded text-[10px]">Coordination</span>
            <span className="bg-[#221435] text-[#d8b4fe] px-2 py-0.5 rounded text-[10px]">Événementiel</span>
            <span className="bg-[#221435] text-[#d8b4fe] px-2 py-0.5 rounded text-[10px]">Partenariats</span>
          </div>
          <p className="text-[#fbbf24] text-xs text-right font-semibold">Priorité 3</p>
        </div>
      </div>
    </section>
  </main>
</div>
);
}
