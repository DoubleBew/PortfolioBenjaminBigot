"use client";

import React, { useState } from 'react';
import {
  Trophy, Award, FileText, History, BarChart2, Briefcase,
  ChevronDown, ExternalLink, Play, Eye, Heart, Share2, Activity
} from 'lucide-react';

export default function PortfolioFM() {
  const [videos] = useState([
    {
      id: 1,
      title: "Vidéo - Jour de Stade (JDS)",
      platform: "TikTok",
      views: "128.5K",
      likes: "14.2K",
      shares: "1.8K",
      embedUrl: "https://www.tiktok.com",
      thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "Reportage Terrain / Event Sport",
      platform: "Instagram",
      views: "45.2K",
      likes: "5.1K",
      shares: "620",
      embedUrl: "https://www.instagram.com",
      thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&auto=format&fit=crop&q=60"
    }
  ]);

  return (
    <div className="min-h-screen bg-[#121921] text-gray-100 font-sans p-2 sm:p-4 selection:bg-emerald-500 selection:text-white">
      {/* BARRE DE NAVIGATION SUPÉRIEURE */}
      <header className="bg-[#1a232e] border-b border-gray-800 rounded-t-lg p-2 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1 sm:gap-3">
          <div className="bg-purple-900 text-purple-200 font-bold px-2 py-1 rounded">BB</div>
          <nav className="flex items-center gap-1 sm:gap-2 text-gray-300">
            <span className="hover:bg-gray-800 px-2 py-1 rounded cursor-pointer flex items-center gap-1">Portail <ChevronDown size={12}/></span>
            <span className="hover:bg-gray-800 px-2 py-1 rounded cursor-pointer flex items-center gap-1">Effectif <ChevronDown size={12}/></span>
            <span className="hover:bg-gray-800 px-2 py-1 rounded cursor-pointer flex items-center gap-1">Recrutement <ChevronDown size={12}/></span>
            <span className="hover:bg-gray-800 px-2 py-1 rounded cursor-pointer flex items-center gap-1">Jour de match <ChevronDown size={12}/></span>
            <span className="hover:bg-gray-800 px-2 py-1 rounded cursor-pointer flex items-center gap-1">Club <ChevronDown size={12}/></span>
            <span className="hover:bg-gray-800 px-2 py-1 rounded cursor-pointer flex items-center gap-1">Carrière <ChevronDown size={12}/></span>
          </nav>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <span>10/10/2026 • Sam 23:05</span>
          <span className="bg-emerald-900/50 text-emerald-400 border border-emerald-700/50 px-2 py-0.5 rounded flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Favoris (3)
          </span>
        </div>
      </header>

      {/* SOUS-BARRE DE NAVIGATION */}
      <div className="bg-[#161d26] border-b border-gray-800 p-2 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white flex items-center gap-1">Vue d'ensemble</span>
          <span className="text-gray-400 hover:text-white cursor-pointer flex items-center gap-0.5">Mon profil <ExternalLink size={10}/></span>
          <span className="text-gray-400 hover:text-white cursor-pointer flex items-center gap-0.5">Mes badges <ExternalLink size={10}/></span>
          <span className="text-gray-400 hover:text-white cursor-pointer flex items-center gap-0.5">Mes rapports <ExternalLink size={10}/></span>
          <span className="text-gray-400 hover:text-white cursor-pointer flex items-center gap-0.5">Mon historique <ExternalLink size={10}/></span>
          <span className="text-gray-400 hover:text-white cursor-pointer flex items-center gap-0.5">Stats de gestion <ExternalLink size={10}/></span>
        </div>
      </div>

      {/* GRILLE PRINCIPALE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

        {/* COLONNE 1 : MON PROFIL */}
        <div className="bg-[#1a232e] border border-gray-800 rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-800 pb-2">
            <h2 className="text-sm font-bold text-gray-200 flex items-center gap-2">
              <span className="text-purple-400">BB</span> Mon profil
            </h2>
            <ExternalLink size={14} className="text-gray-500 cursor-pointer" />
          </div>

          <div className="flex items-start gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-700 to-indigo-900 rounded border border-purple-500/30 flex items-center justify-center text-xl font-bold text-white">
              BB
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Benjamin Bigot</h3>
              <p className="text-xs text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 31 ans (27/03/1995)
              </p>
              <p className="text-xs text-gray-400 mt-1">Licence STAPS / Management du sport + 2 diplômes</p>
            </div>
          </div>

          <div className="space-y-2 text-xs border-t border-gray-800/60 pt-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Réputation</span>
              <span className="text-gray-200 font-medium">Polyvalent</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Téléphone</span>
              <span className="text-emerald-400 font-mono">06 35 26 33 23</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Email</span>
              <span className="text-emerald-400 font-mono">ben.bigot@live.fr</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Statut</span>
              <span className="bg-emerald-900/40 text-emerald-300 border border-emerald-700/50 px-2 py-0.5 rounded text-[10px]">Recherche active</span>
            </div>
          </div>

          <div className="border-t border-gray-800/60 pt-3">
            <h4 className="text-xs font-semibold text-gray-400 mb-2">Tendances & Atouts</h4>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-[11px]">Adaptabilité</span>
              <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-[11px]">Relation client</span>
              <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-[11px]">Autodidacte</span>
            </div>
          </div>
        </div>

        {/* COLONNE 2 : INFOS EN DIRECT */}
        <div className="bg-[#1a232e] border border-gray-800 rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-800 pb-2">
            <h2 className="text-sm font-bold text-gray-200 flex items-center gap-2">
              <Activity size={16} className="text-red-500 animate-pulse" />
              Infos en direct <span className="text-[10px] bg-red-900/60 text-red-300 border border-red-700/50 px-1.5 py-0.2 rounded uppercase">LIVE</span>
            </h2>
            <span className="text-[10px] text-gray-400">Auto-sync API</span>
          </div>

          <div className="space-y-3">
            {videos.map((vid) => (
              <div key={vid.id} className="bg-[#121921] border border-gray-800 rounded p-2 hover:border-gray-700 transition">
                <div className="relative h-32 rounded overflow-hidden group mb-2">
                  <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <Play size={18} fill="white" className="ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                    {vid.platform}
                  </span>
                </div>

                <h4 className="text-xs font-semibold text-gray-200 truncate">{vid.title}</h4>

                <div className="grid grid-cols-3 gap-1 mt-2 text-center text-[10px]">
                  <div className="bg-[#1a232e] p-1 rounded border border-gray-800/80">
                    <span className="text-gray-400 block flex items-center justify-center gap-0.5"><Eye size={10} /> Vues</span>
                    <span className="text-emerald-400 font-bold font-mono">{vid.views}</span>
                  </div>
                  <div className="bg-[#1a232e] p-1 rounded border border-gray-800/80">
                    <span className="text-gray-400 block flex items-center justify-center gap-0.5"><Heart size={10} /> Likes</span>
                    <span className="text-red-400 font-bold font-mono">{vid.likes}</span>
                  </div>
                  <div className="bg-[#1a232e] p-1 rounded border border-gray-800/80">
                    <span className="text-gray-400 block flex items-center justify-center gap-0.5"><Share2 size={10} /> Partages</span>
                    <span className="text-blue-400 font-bold font-mono">{vid.shares}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLONNE 3 : MES QUALIFICATIONS */}
        <div className="bg-[#1a232e] border border-gray-800 rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-800 pb-2">
            <h2 className="text-sm font-bold text-gray-200 flex items-center gap-2">
              <Award size={16} className="text-amber-400" /> Mes qualifications
            </h2>
            <span className="text-xs text-gray-400">3 diplômes</span>
          </div>

          <p className="text-xs text-gray-400 italic">
            "Double cursus sport & banque, base économique solide."
          </p>

          <div className="space-y-2">
            <div className="bg-[#121921] p-2.5 rounded border border-gray-800 text-xs">
              <div className="font-semibold text-gray-200">Licence STAPS · Management du sport</div>
              <div className="text-[10px] text-gray-400">Spécialisation gestion d'événements & structures</div>
            </div>
            <div className="bg-[#121921] p-2.5 rounded border border-gray-800 text-xs">
              <div className="font-semibold text-gray-200">BTS Banque</div>
              <div className="text-[10px] text-gray-400">Analyse économique & relation client</div>
            </div>
            <div className="bg-[#121921] p-2.5 rounded border border-gray-800 text-xs">
              <div className="font-semibold text-gray-200">BAC Économique et social</div>
              <div className="text-[10px] text-gray-400">Enseignement général</div>
            </div>
          </div>

          <div className="border-t border-gray-800/60 pt-3">
            <h4 className="text-xs font-semibold text-gray-400 mb-2">Langues & Rapports</h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between items-center bg-[#121921] px-2 py-1 rounded">
                <span className="text-gray-300">🇫🇷 Français</span>
                <span className="text-emerald-400 text-[10px]">Langue maternelle</span>
              </div>
              <div className="flex justify-between items-center bg-[#121921] px-2 py-1 rounded">
                <span className="text-gray-300">🇪🇸 Espagnol</span>
                <span className="text-blue-400 text-[10px]">Courant</span>
              </div>
              <div className="flex justify-between items-center bg-[#121921] px-2 py-1 rounded">
                <span className="text-gray-300">🇬🇧 Anglais</span>
                <span className="text-amber-400 text-[10px]">Professionnel</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* HISTORIQUE */}
      <div className="bg-[#1a232e] border border-gray-800 rounded-lg p-4 mt-4">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
          <h2 className="text-sm font-bold text-gray-200 flex items-center gap-2">
            <History size={16} className="text-blue-400" /> Mon historique
          </h2>
          <span className="text-[11px] text-gray-400">↗ Cliquez sur une ligne pour explorer l'expérience</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 text-[11px]">
                <th className="py-2 px-2">Année</th>
                <th className="py-2 px-2">Équipe</th>
                <th className="py-2 px-2">Championnat</th>
                <th className="py-2 px-2">Position / Rôle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              <tr className="hover:bg-gray-800/40 cursor-pointer transition">
                <td className="py-2 px-2 font-mono text-emerald-400">2025 –</td>
                <td className="py-2 px-2 font-semibold text-white">JDS (Jour de Stade)</td>
                <td className="py-2 px-2 text-gray-400">Réseaux sociaux</td>
                <td className="py-2 px-2 text-gray-300">Création de contenu TikTok/Insta (128K vues)</td>
              </tr>
              <tr className="hover:bg-gray-800/40 cursor-pointer transition">
                <td className="py-2 px-2 font-mono text-gray-400">2025 –</td>
                <td className="py-2 px-2 font-semibold text-white">S2K (Sport 2000)</td>
                <td className="py-2 px-2 text-gray-400">Retail Sport</td>
                <td className="py-2 px-2 text-gray-300">Vente & animation commerciale</td>
              </tr>
              <tr className="hover:bg-gray-800/40 cursor-pointer transition">
                <td className="py-2 px-2 font-mono text-gray-400">2025</td>
                <td className="py-2 px-2 font-semibold text-white">RS (Realsport)</td>
                <td className="py-2 px-2 text-gray-400">Retail Sport</td>
                <td className="py-2 px-2 text-gray-300">Conseil & gestion de rayon</td>
              </tr>
              <tr className="hover:bg-gray-800/40 cursor-pointer transition">
                <td className="py-2 px-2 font-mono text-gray-400">2024–25</td>
                <td className="py-2 px-2 font-semibold text-white">PW (Pariwana Hostel)</td>
                <td className="py-2 px-2 text-gray-400">Hostellerie</td>
                <td className="py-2 px-2 text-gray-300">Accueil & relation client internationale</td>
              </tr>
              <tr className="hover:bg-gray-800/40 cursor-pointer transition">
                <td className="py-2 px-2 font-mono text-gray-400">2019–24</td>
                <td className="py-2 px-2 font-semibold text-white">DK (Decathlon)</td>
                <td className="py-2 px-2 text-gray-400">Retail Sport</td>
                <td className="py-2 px-2 text-gray-300">Vendeur & Formateur sports collectifs (5 ans)</td>
              </tr>
              <tr className="hover:bg-gray-800/40 cursor-pointer transition">
                <td className="py-2 px-2 font-mono text-gray-400">2018</td>
                <td className="py-2 px-2 font-semibold text-white">RCF (Rugby Club Flers P.B.)</td>
                <td className="py-2 px-2 text-gray-400">Stage</td>
                <td className="py-2 px-2 text-gray-300">Assistant événementiel & communication</td>
              </tr>
              <tr className="hover:bg-gray-800/40 cursor-pointer transition">
                <td className="py-2 px-2 font-mono text-gray-400">2013–15</td>
                <td className="py-2 px-2 font-semibold text-white">CA (Crédit Agricole)</td>
                <td className="py-2 px-2 text-gray-400">Alternance</td>
                <td className="py-2 px-2 text-gray-300">Gestion de portefeuille / Conseil bancaire</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
