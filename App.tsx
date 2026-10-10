import React from 'react';
import { Search, User, Award, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#110c1c] text-gray-200 font-sans text-xs p-3">
      {/* Top Header Navigation */}
      <header className="bg-[#171025] border border-[#2b1e42] rounded-t-lg p-2 flex flex-wrap items-center justify-between gap-2 mb-1 shadow-md">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center font-bold text-black text-sm shadow">
            BB
          </div>
          <nav className="flex items-center gap-4 text-sm font-semibold text-gray-300">
            <span className="hover:text-white cursor-pointer">Portail</span>
            <span className="hover:text-white cursor-pointer">Effectif</span>
            <span className="hover:text-white cursor-pointer">Recrutement</span>
            <span className="hover:text-white cursor-pointer">Jour de match</span>
            <span className="hover:text-white cursor-pointer">Club</span>
            <span className="text-pink-400 border-b-2 border-pink-500 pb-0.5 cursor-pointer">Carrière</span>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher"
              className="bg-[#110c1c] text-gray-200 pl-8 pr-3 py-1.5 rounded border border-[#2b1e42] focus:outline-none focus:border-pink-500 text-xs w-36"
            />
          </div>
          <div className="bg-[#110c1c] border border-[#2b1e42] px-2.5 py-1 rounded text-center">
            <div className="text-[9px] text-gray-400">29/10/2026</div>
            <div className="font-bold text-pink-400 text-[11px]">Mer 10:00</div>
          </div>
          <button className="bg-pink-600 hover:bg-pink-500 text-white font-bold px-4 py-1.5 rounded flex items-center gap-1 shadow-lg text-xs">
            Continuer <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Secondary Navigation */}
      <div className="bg-[#171025] border-x border-b border-[#2b1e42] px-4 py-1.5 flex items-center gap-5 text-gray-400 text-[11px] mb-3 rounded-b-lg">
        <span className="text-pink-400 font-semibold border-b border-pink-400 pb-0.5">Vue d'ensemble</span>
        <span className="hover:text-white cursor-pointer">Mon profil</span>
        <span className="hover:text-white cursor-pointer">Mon contrat</span>
        <span className="hover:text-white cursor-pointer">Mes badges</span>
        <span className="hover:text-white cursor-pointer">Mes rapports</span>
        <span className="hover:text-white cursor-pointer">Mon historique</span>
        <span className="hover:text-white cursor-pointer">Stats de gestion</span>
      </div>

      {/* Main Dashboard Grid matching FM layout */}
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {/* Ligne 1 : Mon profil (Col 1) */}
        <section className="bg-[#1a1228] border border-[#2b1e42] rounded p-3 flex flex-col gap-3 shadow-md">
          <h2 className="text-pink-400 font-bold text-xs uppercase tracking-wide border-b border-[#2b1e42] pb-1.5">Mon profil</h2>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center border border-pink-500/30 shrink-0">
              <User className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Benjamin Bigot</h3>
              <p className="text-gray-400 text-[11px]">30 ans (27/3/1996)</p>
              <p className="text-gray-400 text-[10px]">Réputation : <span className="text-gray-200">Nationale</span></p>
            </div>
          </div>

          <div className="border-t border-[#2b1e42] pt-2">
            <h4 className="font-semibold text-gray-300 mb-1.5 text-[11px]">Attributs prioritaires</h4>
            <div className="space-y-1.5">
              <div className="flex justify-between py-0.5 border-b border-[#231835]">
                <span className="text-gray-400">Détermination</span>
                <span className="text-green-400 font-semibold">Très bon</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-[#231835]">
                <span className="text-gray-400">Entraînement des jeunes</span>
                <span className="text-green-400 font-semibold">Excellence</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-gray-400">Adaptabilité</span>
                <span className="text-yellow-400 font-semibold">Raisonnable</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#2b1e42] pt-2">
            <h4 className="font-semibold text-gray-300 mb-1.5 text-[11px]">Tendances</h4>
            <div className="flex flex-wrap gap-1">
              <span className="bg-[#231835] text-pink-300 px-2 py-1 rounded text-[10px] border border-[#2b1e42]">Joue un football offensif</span>
              <span className="bg-[#231835] text-pink-300 px-2 py-1 rounded text-[10px] border border-[#2b1e42]">Pratique un football spectaculaire</span>
            </div>
          </div>
        </section>

        {/* Ligne 1 : Mon contrat (Col 2) */}
        <section className="bg-[#1a1228] border border-[#2b1e42] rounded p-3 flex flex-col gap-3 shadow-md">
          <h2 className="text-pink-400 font-bold text-xs uppercase tracking-wide border-b border-[#2b1e42] pb-1.5">Mon contrat</h2>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-yellow-500 rounded flex items-center justify-center font-bold text-[10px] text-black shadow">
              BB
            </div>
            <div>
              <p className="font-bold text-white text-sm">3,3K € p/m</p>
              <p className="text-gray-400 text-[10px]">Sous contrat avec Portfolio FC</p>
            </div>
          </div>
          <div className="bg-[#110c1c] p-2.5 rounded border border-[#2b1e42] space-y-2">
            <div className="flex justify-between text-gray-400 text-[11px]">
              <span>Prise de fonction :</span>
              <span className="text-gray-200">25 juil 2025</span>
            </div>
            <div className="flex justify-between text-gray-400 text-[11px]">
              <span>Fin de contrat :</span>
              <span className="text-gray-200">30 juin 2028</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden mt-2 border border-[#2b1e42]">
              <div className="bg-pink-500 h-full w-2/3"></div>
            </div>
          </div>
        </section>

        {/* Ligne 1 : Mes qualifications (Col 3) */}
        <section className="bg-[#1a1228] border border-[#2b1e42] rounded p-3 flex flex-col gap-3 shadow-md">
          <h2 className="text-pink-400 font-bold text-xs uppercase tracking-wide border-b border-[#2b1e42] pb-1.5">Mes qualifications</h2>
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-yellow-400 shrink-0" />
            <div>
              <p className="font-bold text-white text-xs">Licence Pro UEFA</p>
              <p className="text-gray-400 text-[10px]">Obtenue avec mention</p>
            </div>
          </div>
          <p className="text-gray-400 text-[11px] leading-relaxed pt-1 border-t border-[#2b1e42]">
            Spécialisé en gestion d'équipe web, architecture React & Next.js et déploiement continu.
          </p>
        </section>

        {/* Ligne 1 : Mes rapports / Stats rapides (Col 4) */}
        <section className="bg-[#1a1228] border border-[#2b1e42] rounded p-3 flex flex-col gap-3 shadow-md">
          <h2 className="text-pink-400 font-bold text-xs uppercase tracking-wide border-b border-[#2b1e42] pb-1.5">Mes rapports</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] bg-[#110c1c] p-2 rounded border border-[#2b1e42]">
              <span className="text-gray-200 font-medium">Performance Web</span>
              <span className="text-pink-400 bg-pink-950/40 px-1.5 py-0.5 rounded border border-pink-500/30 text-[10px]">Optimal</span>
            </div>
            <div className="flex items-center justify-between text-[11px] bg-[#110c1c] p-2 rounded border border-[#2b1e42]">
              <span className="text-gray-200 font-medium">Architecture Code</span>
              <span className="text-green-400 bg-green-950/40 px-1.5 py-0.5 rounded border border-green-500/30 text-[10px]">Validé</span>
            </div>
          </div>
        </section>

        {/* Ligne 2 : Mon historique (Prend 2 colonnes) */}
        <section className="bg-[#1a1228] border border-[#2b1e42] rounded p-3 flex flex-col gap-3 lg:col-span-2 shadow-md">
          <h2 className="text-pink-400 font-bold text-xs uppercase tracking-wide border-b border-[#2b1e42] pb-1.5">Mon historique</h2>
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="text-gray-400 border-b border-[#2b1e42] pb-1">
                <th className="pb-1.5">Année</th>
                <th className="pb-1.5">Équipe</th>
                <th className="pb-1.5">Rôle</th>
                <th className="pb-1.5">Trophées</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#231835]">
              <tr>
                <td className="py-2 text-gray-400">2025/26</td>
                <td className="py-2 font-semibold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Portfolio FC
                </td>
                <td className="py-2 text-pink-300">Lead Developer</td>
                <td className="py-2">🏆 1</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-400">2024/25</td>
                <td className="py-2 font-semibold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> Project Corp
                </td>
                <td className="py-2 text-gray-300">Fullstack React</td>
                <td className="py-2">🥇 2</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Ligne 2 : Stats de gestion (Prend 2 colonnes) */}
        <section className="bg-[#1a1228] border border-[#2b1e42] rounded p-3 flex flex-col gap-3 lg:col-span-2 shadow-md">
          <h2 className="text-pink-400 font-bold text-xs uppercase tracking-wide border-b border-[#2b1e42] pb-1.5">Stats de gestion</h2>
          <div className="grid grid-cols-3 gap-2 text-center pt-1">
            <div className="bg-[#110c1c] p-2 rounded border border-[#2b1e42]">
              <div className="text-[10px] text-gray-400">Saisons</div>
              <div className="text-base font-bold text-white mt-0.5">2</div>
            </div>
            <div className="bg-[#110c1c] p-2 rounded border border-[#2b1e42]">
              <div className="text-[10px] text-gray-400">Équipes</div>
              <div className="text-base font-bold text-white mt-0.5">2</div>
            </div>
            <div className="bg-[#110c1c] p-2 rounded border border-[#2b1e42]">
              <div className="text-[10px] text-gray-400">Trophées</div>
              <div className="text-base font-bold text-yellow-400 mt-0.5">3 🏆</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
