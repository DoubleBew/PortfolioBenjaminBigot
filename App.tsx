import React from 'react';
import { Search, Phone, Mail, Compass, Award, ExternalLink, Briefcase, UserCheck, Shield, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e0a17] text-gray-200 font-sans text-xs p-3 leading-normal flex flex-col justify-between">
      {/* Top Navigation */}
      <header className="bg-[#181126] border-b border-[#281b3d] px-4 py-2 flex items-center justify-between gap-2 rounded-t-lg">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 bg-amber-400 rounded flex items-center justify-center font-bold text-black text-base border border-amber-300 shadow">
            BB
          </div>
          <nav className="flex items-center gap-5 font-semibold text-gray-300 text-sm">
            <span className="hover:text-white cursor-pointer">Portail</span>
            <span className="hover:text-white cursor-pointer">Effectif</span>
            <span className="hover:text-white cursor-pointer">Recrutement</span>
            <span className="hover:text-white cursor-pointer">Jour de match</span>
            <span className="hover:text-white cursor-pointer">Club</span>
            <span className="text-amber-400 border-b-2 border-amber-400 pb-0.5 font-bold cursor-pointer">Carrière</span>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#0e0a17] border border-[#281b3d] px-3 py-1 rounded text-center">
            <div className="text-[10px] text-gray-400">11/10/2026</div>
            <div className="font-bold text-amber-400 text-xs">Dim 00:02</div>
          </div>
          <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-2 rounded flex items-center gap-1.5 text-xs shadow-md">
            Me suivre »
          </button>
        </div>
      </header>

      {/* Secondary Navigation */}
      <div className="bg-[#181126] border-b border-[#281b3d] px-5 py-1.5 flex items-center gap-5 text-gray-400 text-xs mb-3 rounded-b-lg">
        <span className="text-amber-400 font-bold border-b-2 border-amber-400 pb-0.5">Vue d'ensemble</span>
        <span className="hover:text-white cursor-pointer">Mon profil</span>
        <span className="hover:text-white cursor-pointer">Mon contrat</span>
        <span className="hover:text-white cursor-pointer">Mes badges</span>
        <span className="hover:text-white cursor-pointer">Mes rapports</span>
        <span className="hover:text-white cursor-pointer">Mon historique</span>
        <span className="hover:text-white cursor-pointer">Stats de gestion</span>
      </div>

      {/* Main Dashboard - Full Screen Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-grow">
        {/* CARD 1: MON PROFIL (Col 1-4) */}
        <section className="lg:col-span-4 bg-[#181126] border border-[#281b3d] rounded-lg p-4 flex flex-col justify-between shadow-lg">
          <div>
            <h2 className="text-purple-300 font-bold text-xs tracking-wider uppercase border-b border-[#281b3d] pb-1.5 mb-3">MON PROFIL</h2>

            <div className="flex items-start gap-3.5 mb-4">
              <div className="w-14 h-14 bg-gray-700 rounded-full overflow-hidden border-2 border-purple-400/40 shrink-0 shadow">
                <img src="https://github.com/identicons/benbigot.png" alt="Benjamin Bigot" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Benjamin Bigot</h3>
                <p className="text-gray-400 text-xs">31 ans (27/03/1995)</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-400 text-xs">Réputation :</span>
                  <span className="text-purple-300 font-semibold text-xs">● Polyvalent</span>
                </div>
                <p className="text-purple-300 font-semibold text-xs mt-1">Licence STAPS / Management du sport</p>
                <p className="text-gray-400 text-[11px]">+ 2 autres diplômes</p>
              </div>
            </div>

            <div className="border-t border-[#281b3d] pt-3 space-y-2">
              <p className="text-gray-400 font-bold text-xs uppercase">ATTRIBUTS PRIORITAIRES</p>
              <div className="flex justify-between items-center py-1 border-b border-[#211735]">
                <span className="text-gray-200 flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-purple-400"/> 06 35 26 33 23</span>
                <span className="text-purple-300 font-semibold">Disponible</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#211735]">
                <span className="text-gray-200 flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-purple-400"/> ben.bigot@live.fr</span>
                <span className="text-emerald-400 font-semibold">Actif</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-200 flex items-center gap-2"><Compass className="w-3.5 h-3.5 text-purple-400"/> Recherche poste sport / communication</span>
                <span className="text-amber-400 font-semibold">Ouvert</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#281b3d] pt-3 mt-3">
            <p className="text-gray-400 font-bold text-xs uppercase mb-1.5">Tendances</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-[#211735] text-purple-200 px-2.5 py-1 rounded text-xs border border-[#281b3d]">Adaptabilité</span>
              <span className="bg-[#211735] text-purple-200 px-2.5 py-1 rounded text-xs border border-[#281b3d]">Relation client</span>
              <span className="bg-[#211735] text-purple-200 px-2.5 py-1 rounded text-xs border border-[#281b3d]">Autodidacte</span>
            </div>
          </div>
        </section>

        {/* CARD 2: MON CONTRAT (Col 5-8) */}
        <section className="lg:col-span-4 bg-[#181126] border border-[#281b3d] rounded-lg p-4 flex flex-col justify-between shadow-lg">
          <div>
            <h2 className="text-purple-300 font-bold text-xs tracking-wider uppercase border-b border-[#281b3d] pb-1.5 mb-3">MON CONTRAT</h2>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-amber-400/20 border border-amber-400 text-amber-400 rounded-lg flex items-center justify-center font-bold text-sm">
                🛡️
              </div>
              <div>
                <p className="font-bold text-white text-sm">CDI - Disponible</p>
                <p className="text-gray-400 text-xs">Recherche active depuis 2025</p>
              </div>
            </div>

            <div className="bg-[#0e0a17] p-3 rounded-lg border border-[#281b3d] space-y-2 my-3">
              <div className="flex justify-between text-gray-400 text-xs">
                <span>2025</span>
                <span>2026</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden border border-[#281b3d]">
                <div className="bg-purple-500 h-full w-1/4"></div>
              </div>
              <div className="flex justify-between text-xs pt-1">
                <span className="text-gray-400">Prend fin dans :</span>
                <span className="text-amber-400 font-bold">∞ jours</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Type</span>
                <span className="text-gray-200">Plein temps</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 border-t border-[#281b3d] pt-3">
            <p className="text-gray-400 font-bold text-xs uppercase">CLAUSE(S)</p>
            <p className="text-gray-300 text-xs">Mobilité Marseille / France • Télétravail partiel</p>
            <p className="text-gray-400 font-bold text-xs uppercase pt-1">PRIMES</p>
            <p className="text-gray-300 text-xs">Performance • Engagement long terme</p>
          </div>
        </section>

        {/* CARD 3: MES QUALIFICATIONS (Col 9-12) */}
        <section className="lg:col-span-4 bg-[#181126] border border-[#281b3d] rounded-lg p-4 flex flex-col justify-between shadow-lg">
          <div>
            <h2 className="text-purple-300 font-bold text-xs tracking-wider uppercase border-b border-[#281b3d] pb-1.5 mb-3">MES QUALIFICATIONS</h2>
            <h3 className="font-bold text-white text-sm mb-1">3 diplômes</h3>
            <p className="text-gray-400 text-xs mb-3 leading-relaxed">
              ◌ Double cursus sport & banque, base économique solide.
            </p>
            <div className="flex gap-2 mb-4">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full border border-purple-400/50"></div>
              ))}
            </div>
          </div>
          <div className="space-y-2 border-t border-[#281b3d] pt-3">
            <div className="text-xs">
              <p className="font-bold text-white">Licence STAPS <span className="text-gray-400 font-normal">- Management du sport</span></p>
            </div>
            <div className="text-xs">
              <p className="font-bold text-white">BTS Banque</p>
            </div>
            <div className="text-xs">
              <p className="font-bold text-white">BAC Économique et social</p>
            </div>
          </div>
        </section>

        {/* CARD 4: MON HISTORIQUE (Col 1-5 avec déroulant scrollable) */}
        <section className="lg:col-span-5 bg-[#181126] border border-[#281b3d] rounded-lg p-4 shadow-lg">
          <h2 className="text-purple-300 font-bold text-xs tracking-wider uppercase border-b border-[#281b3d] pb-1.5 mb-1">MON HISTORIQUE</h2>
          <p className="text-gray-500 italic text-[11px] mb-2">⚡ Déroulez le tableau pour explorer toutes les expériences</p>

          <div className="max-h-56 overflow-y-auto pr-1 space-y-1">
            <table className="w-full text-left text-xs">
              <thead className="sticky top-0 bg-[#181126] z-10">
                <tr className="text-gray-400 border-b border-[#281b3d]">
                  <th className="pb-1.5">Année</th>
                  <th className="pb-1.5">Équipe</th>
                  <th className="pb-1.5">Championnat</th>
                  <th className="pb-1.5">Position</th>
                  <th className="pb-1.5">Récomp.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#211735]">
                <tr>
                  <td className="py-1.5 text-gray-400">2025 -</td>
                  <td className="py-1.5 font-bold text-white">Jour de Stade</td>
                  <td className="py-1.5"><span className="bg-[#211735] px-1.5 py-0.5 rounded text-purple-200">Réseaux sociaux</span></td>
                  <td className="py-1.5 text-gray-500">—</td>
                  <td className="py-1.5 text-amber-400">🏆</td>
                </tr>
                <tr>
                  <td className="py-1.5 text-gray-400">2025 -</td>
                  <td className="py-1.5 font-bold text-white">Sport 2000</td>
                  <td className="py-1.5"><span className="bg-[#211735] px-1.5 py-0.5 rounded text-purple-200">Retail Sport</span></td>
                  <td className="py-1.5 text-gray-500">—</td>
                  <td className="py-1.5 text-amber-400">🏆</td>
                </tr>
                <tr>
                  <td className="py-1.5 text-gray-400">2025</td>
                  <td className="py-1.5 font-bold text-white">Realsport</td>
                  <td className="py-1.5"><span className="bg-[#211735] px-1.5 py-0.5 rounded text-purple-200">Retail Sport</span></td>
                  <td className="py-1.5 text-gray-500">—</td>
                  <td className="py-1.5 text-amber-400">🏆</td>
                </tr>
                <tr>
                  <td className="py-1.5 text-gray-400">2024-25</td>
                  <td className="py-1.5 font-bold text-white">Pariwana Hostel</td>
                  <td className="py-1.5"><span className="bg-[#211735] px-1.5 py-0.5 rounded text-purple-200">Hôtellerie</span></td>
                  <td className="py-1.5 text-gray-500">—</td>
                  <td className="py-1.5 text-amber-400">🏆</td>
                </tr>
                <tr>
                  <td className="py-1.5 text-gray-400">2019-24</td>
                  <td className="py-1.5 font-bold text-white">Decathlon</td>
                  <td className="py-1.5"><span className="bg-[#211735] px-1.5 py-0.5 rounded text-purple-200">Retail Sport</span></td>
                  <td className="py-1.5 text-gray-500">—</td>
                  <td className="py-1.5 text-amber-400">🏆</td>
                </tr>
                <tr>
                  <td className="py-1.5 text-gray-400">2018</td>
                  <td className="py-1.5 font-bold text-white">Rugby Club Flers P.B.</td>
                  <td className="py-1.5"><span className="bg-[#211735] px-1.5 py-0.5 rounded text-purple-200">Stage</span></td>
                  <td className="py-1.5 text-gray-500">—</td>
                  <td className="py-1.5 text-amber-400">🏆</td>
                </tr>
                <tr>
                  <td className="py-1.5 text-gray-400">2013-15</td>
                  <td className="py-1.5 font-bold text-white">Crédit Agricole</td>
                  <td className="py-1.5"><span className="bg-[#211735] px-1.5 py-0.5 rounded text-purple-200">Alternance</span></td>
                  <td className="py-1.5 text-gray-500">—</td>
                  <td className="py-1.5 text-amber-400">🏆</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CARD 5: STATS DE GESTION (Col 6-8) */}
        <section className="lg:col-span-3 bg-[#181126] border border-[#281b3d] rounded-lg p-4 shadow-lg">
          <h2 className="text-purple-300 font-bold text-xs tracking-wider uppercase border-b border-[#281b3d] pb-1.5 mb-3">STATS DE GESTION</h2>

          <div className="space-y-2 text-xs">
            <p className="text-gray-400 font-bold uppercase text-[10px]">HARD SKILLS</p>
            <div className="flex justify-between py-0.5 border-b border-[#211735]">
              <span className="text-gray-300">Création de logo / charte</span>
              <span className="text-purple-300 font-semibold">Expert</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-[#211735]">
              <span className="text-gray-300">Contenu TikTok / Instagram</span>
              <span className="text-amber-400 font-bold">128K vues</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-[#211735]">
              <span className="text-gray-300">Photographie</span>
              <span className="text-gray-200">Avancé</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-[#211735] mb-2">
              <span className="text-gray-300">Montage vidéo</span>
              <span className="text-gray-200">Avancé</span>
            </div>
            <p className="text-gray-400 font-bold uppercase text-[10px] pt-1">VENTE & GESTION</p>
            <div className="flex justify-between py-0.5 border-b border-[#211735]">
              <span className="text-gray-300">Technique de vente</span>
              <span className="text-amber-400 font-bold">5 ans</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-[#211735]">
              <span className="text-gray-300">Animation commerciale</span>
              <span className="text-gray-200">Confirmé</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-[#211735]">
              <span className="text-gray-300">Gestion stocks & démarques</span>
              <span className="text-gray-200">Confirmé</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-gray-300">Formateur sports collectifs</span>
              <span className="text-purple-300">Decathlon</span>
            </div>
          </div>
        </section>

        {/* CARD 6: POSTES VACANTS - MISSIONS CIBLÉES (Col 9-12) */}
        <section className="lg:col-span-4 bg-[#181126] border border-[#281b3d] rounded-lg p-4 shadow-lg">
          <h2 className="text-purple-300 font-bold text-xs tracking-wider uppercase border-b border-[#281b3d] pb-1.5 mb-3">POSTES VACANTS — MISSIONS CIBLÉES</h2>

          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">
              🎯
            </div>
            <div>
              <p className="font-bold text-white text-sm">3 missions ciblées</p>
              <p className="text-gray-400 text-xs">Disponible immédiatement • Marseille & France entière</p>
            </div>
          </div>
          <div className="space-y-2.5 text-xs">
            <div className="bg-[#0e0a17] p-2.5 rounded-lg border border-[#281b3d]">
              <p className="font-bold text-white text-xs">Chargé de communication Sport</p>
              <div className="flex gap-1.5 my-1.5">
                <span className="bg-[#211735] text-purple-200 px-2 py-0.5 rounded text-[10px]">Comm. digitale</span>
                <span className="bg-[#211735] text-purple-200 px-2 py-0.5 rounded text-[10px]">Réseaux sociaux</span>
                <span className="bg-[#211735] text-purple-200 px-2 py-0.5 rounded text-[10px]">Création contenu</span>
              </div>
              <p className="text-amber-400 text-xs text-right font-semibold">Priorité 1</p>
            </div>
            <div className="bg-[#0e0a17] p-2.5 rounded-lg border border-[#281b3d]">
              <p className="font-bold text-white text-xs">Responsable d'équipe</p>
              <div className="flex gap-1.5 my-1.5">
                <span className="bg-[#211735] text-purple-200 px-2 py-0.5 rounded text-[10px]">Management</span>
                <span className="bg-[#211735] text-purple-200 px-2 py-0.5 rounded text-[10px]">Animation</span>
                <span className="bg-[#211735] text-purple-200 px-2 py-0.5 rounded text-[10px]">Formation</span>
              </div>
              <p className="text-amber-400 text-xs text-right font-semibold">Priorité 2</p>
            </div>
            <div className="bg-[#0e0a17] p-2.5 rounded-lg border border-[#281b3d]">
              <p className="font-bold text-white text-xs">Gestion de projet Sportif</p>
              <div className="flex gap-1.5 my-1.5">
                <span className="bg-[#211735] text-purple-200 px-2 py-0.5 rounded text-[10px]">Coordination</span>
                <span className="bg-[#211735] text-purple-200 px-2 py-0.5 rounded text-[10px]">Événementiel</span>
                <span className="bg-[#211735] text-purple-200 px-2 py-0.5 rounded text-[10px]">Partenariats</span>
              </div>
              <p className="text-amber-400 text-xs text-right font-semibold">Priorité 3</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
