import React from 'react';
import { Search, ChevronRight, User, Award, BarChart2, Trophy } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#120d1d] p-2 font-sans text-xs text-gray-200">
      <header className="flex flex-wrap items-center justify-between gap-2 rounded-t-lg border-b border-[#2d2244] bg-[#1a1228] p-2">
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-yellow-500 text-sm font-bold text-[#120d1d]">
            BB
          </div>
          <nav className="flex items-center gap-4 text-sm font-semibold text-gray-300">
            <span className="cursor-pointer hover:text-white">Portail</span>
            <span className="cursor-pointer hover:text-white">Effectif</span>
            <span className="cursor-pointer hover:text-white">Recrutement</span>
            <span className="cursor-pointer hover:text-white">Jour de match</span>
            <span className="cursor-pointer hover:text-white">Club</span>
            <span className="cursor-pointer border-b-2 border-pink-500 pb-1 text-pink-400">Carrière</span>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2 top-1.5 h-3.5 w-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher"
              className="rounded border border-[#2d2244] bg-[#120d1d] py-1 pl-7 pr-3 text-xs text-gray-200 focus:border-pink-500 focus:outline-none"
            />
          </div>
          <div className="rounded border border-[#2d2244] bg-[#120d1d] px-2 py-1 text-center">
            <div className="text-[10px] text-gray-400">29/10/2026</div>
            <div className="font-bold text-pink-400">Mer 10:00</div>
          </div>
          <button className="flex items-center gap-1 rounded bg-pink-600 px-4 py-1.5 font-bold text-white shadow hover:bg-pink-500">
            Continuer <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      <nav className="flex items-center gap-4 border-b border-[#2d2244] bg-[#1a1228] px-4 py-1.5 text-[11px] text-gray-400">
        <span className="border-b border-pink-400 font-semibold text-pink-400">Vue d&apos;ensemble</span>
        <span className="cursor-pointer hover:text-white">Mon profil</span>
        <span className="cursor-pointer hover:text-white">Mon contrat</span>
        <span className="cursor-pointer hover:text-white">Mes badges</span>
        <span className="cursor-pointer hover:text-white">Mes rapports</span>
        <span className="cursor-pointer hover:text-white">Mon historique</span>
        <span className="cursor-pointer hover:text-white">Stats de gestion</span>
      </nav>

      <main className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
        <section className="flex flex-col gap-3 rounded border border-[#2d2244] bg-[#1e152e] p-3">
          <h2 className="border-b border-[#2d2244] pb-1 text-sm font-bold text-pink-400">Mon profil</h2>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-500/30 bg-gray-700">
              <User className="h-6 w-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Benjamin Bigot</h3>
              <p className="text-gray-400">30 ans (27/3/1996)</p>
              <p className="text-[10px] text-gray-400">Réputation : <span className="text-gray-200">Nationale</span></p>
            </div>
          </div>
          <div className="border-t border-[#2d2244] pt-2">
            <h4 className="mb-1 font-semibold text-gray-300">Attributs prioritaires</h4>
            <div className="space-y-1">
              <div className="flex justify-between border-b border-[#2a1d3d] py-0.5">
                <span className="text-gray-400">Détermination</span>
                <span className="font-semibold text-green-400">Très bon</span>
              </div>
              <div className="flex justify-between border-b border-[#2a1d3d] py-0.5">
                <span className="text-gray-400">Entraînement des jeunes</span>
                <span className="font-semibold text-green-400">Excellence</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-gray-400">Adaptabilité</span>
                <span className="font-semibold text-yellow-400">Raisonnable</span>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2d2244] pt-2">
            <h4 className="mb-1 font-semibold text-gray-300">Tendances</h4>
            <div className="flex flex-wrap gap-1">
              <span className="rounded bg-[#2a1d3d] px-2 py-0.5 text-[10px] text-pink-300">Joue un football offensif</span>
              <span className="rounded bg-[#2a1d3d] px-2 py-0.5 text-[10px] text-pink-300">Pratique un football spectaculaire</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3 rounded border border-[#2d2244] bg-[#1e152e] p-3">
          <h2 className="border-b border-[#2d2244] pb-1 text-sm font-bold text-pink-400">Mon contrat</h2>
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-yellow-500 text-[10px] font-bold text-black">BB</div>
            <div>
              <p className="text-sm font-bold text-white">3,3K € p/m</p>
              <p className="text-[10px] text-gray-400">Sous contrat avec Portfolio FC</p>
            </div>
          </div>
          <div className="space-y-1 rounded border border-[#2d2244] bg-[#120d1d] p-2">
            <div className="flex justify-between text-gray-400">
              <span>Prise de fonction :</span>
              <span className="text-gray-200">25 juil 2025</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Fin de contrat :</span>
              <span className="text-gray-200">30 juin 2028</span>
            </div>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-700">
              <div className="h-full w-2/3 bg-pink-500" />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3 rounded border border-[#2d2244] bg-[#1e152e] p-3">
          <h2 className="border-b border-[#2d2244] pb-1 text-sm font-bold text-pink-400">Mes qualifications</h2>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-400" />
            <div>
              <p className="font-bold text-white">Licence Pro UEFA</p>
              <p className="text-[10px] text-gray-400">Obtenue avec mention</p>
            </div>
          </div>
          <p className="text-[11px] leading-relaxed text-gray-400">
            Spécialisé en gestion d&apos;équipe web, architecture React &amp; Next.js et déploiement continu.
          </p>
        </section>

        <section className="flex flex-col gap-3 rounded border border-[#2d2244] bg-[#1e152e] p-3 md:col-span-3 lg:col-span-1">
          <h2 className="border-b border-[#2d2244] pb-1 text-sm font-bold text-pink-400">Mon historique</h2>
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="border-b border-[#2d2244] text-gray-400">
                <th className="pb-1">Année</th>
                <th className="pb-1">Équipe</th>
                <th className="pb-1">Rôle</th>
                <th className="pb-1">Trophées</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a1d3d]">
              <tr>
                <td className="py-1 text-gray-400">2025/26</td>
                <td className="py-1 font-semibold text-white">Portfolio FC</td>
                <td className="py-1 text-pink-300">Lead Developer</td>
                <td className="py-1">🏆 1</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-400">2024/25</td>
                <td className="py-1 font-semibold text-white">Project Corp</td>
                <td className="py-1 text-gray-300">Fullstack React</td>
                <td className="py-1">🥇 2</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="flex flex-col gap-3 rounded border border-[#2d2244] bg-[#1e152e] p-3 md:col-span-3 lg:col-span-4">
          <h2 className="flex items-center gap-2 border-b border-[#2d2244] pb-1 text-sm font-bold text-pink-400">
            <BarChart2 className="h-4 w-4" /> Stats de gestion
          </h2>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="rounded border border-[#2d2244] bg-[#120d1d] p-3">
              <p className="text-gray-400">Saisons dans l&apos;historique</p>
              <p className="mt-1 text-lg font-bold text-white">2</p>
            </div>
            <div className="rounded border border-[#2d2244] bg-[#120d1d] p-3">
              <p className="text-gray-400">Équipes</p>
              <p className="mt-1 text-lg font-bold text-white">2</p>
            </div>
            <div className="rounded border border-[#2d2244] bg-[#120d1d] p-3">
              <p className="flex items-center gap-1 text-gray-400"><Trophy className="h-3.5 w-3.5 text-yellow-400" /> Trophées</p>
              <p className="mt-1 text-lg font-bold text-white">3</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
