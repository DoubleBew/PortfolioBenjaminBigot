import React from 'react';
import { Search, Phone, Mail, Compass, Award, ExternalLink, Briefcase, UserCheck, Shield, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e0a17] text-gray-200 font-sans text-[11px] p-2 leading-tight">
      {/* Header Navigation Top */}
      <header className="bg-[#181126] border-b border-[#281b3d] px-3 py-1.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-amber-400 rounded flex items-center justify-center font-bold text-black text-sm border border-amber-300">
            BB
          </div>
          <nav className="flex items-center gap-4 font-semibold text-gray-400 text-xs">
            <span className="hover:text-white cursor-pointer">Portail</span>
            <span className="hover:text-white cursor-pointer">Effectif</span>
            <span className="hover:text-white cursor-pointer">Recrutement</span>
            <span className="hover:text-white cursor-pointer">Jour de match</span>
            <span className="hover:text-white cursor-pointer">Club</span>
            <span className="text-amber-400 border-b-2 border-amber-400 pb-0.5 font-bold cursor-pointer">Carrière</span>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#0e0a17] border border-[#281b3d] px-2.5 py-1 rounded text-center">
            <div className="text-[9px] text-gray-400">11/10/2026</div>
            <div className="font-bold text-amber-400 text-[10px]">Dim 00:02</div>
          </div>
          <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-3 py-1.5 rounded flex items-center gap-1 text-xs">
            Me suivre »
          </button>
        </div>
      </header>
      {/* Secondary Navbar */}
      <div className="bg-[#181126] border-b border-[#281b3d] px-4 py-1 flex items-center gap-4 text-gray-400 text-[10px] mb-2">
        <span className="text-amber-400 font-bold border-b border-amber-400 pb-0.5">Vue d'ensemble</span>
        <span className="hover:text-white cursor-pointer">Mon profil</span>
        <span className="hover:text-white cursor-pointer">Mon contrat</span>
        <span className="hover:text-white cursor-pointer">Mes badges</span>
        <span className="hover:text-white cursor-pointer">Mes rapports</span>
        <span className="hover:text-white cursor-pointer">Mon historique</span>
        <span className="hover:text-white cursor-pointer">Stats de gestion</span>
      </div>
      {/* Main Dashboard Layout - 6 Cards Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-2">
        {/* CARD 1: MON PROFIL (Col 1-4) */}
        <section className="lg:col-span-4 bg-[#181126] border border-[#281b3d] rounded p-3 flex flex-col justify-between">
          <div>
            <h2 className="text-purple-300 font-bold text-[11px] tracking-wider uppercase border-b border-[#281b3d] pb-1 mb-2">MON PROFIL</h2>
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden border border-purple-400/30 shrink-0">
                <img src="https://github.com/identicons/benbigot.png" alt="Benjamin Bigot" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Benjamin Bigot</h3>
                <p className="text-gray-400 text-[10px]">31 ans (27/03/1995)</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-400 text-[10px]">Réputation :</span>
                  <span className="text-purple-300 font-semibold text-[10px]">● Polyvalent</span>
                </div>
                <p className="text-purple-300 font-semibold text-[10px] mt-0.5">Licence STAPS / Management du sport</p>
                <p className="text-gray-400 text-[9px]">+ 2 autres diplômes</p>
              </div>
            </div>
            <div className="border-t border-[#281b3d] pt-2 space-y-1.5">
              <p className="text-gray-400 font-bold text-[10px] uppercase">ATTRIBUTS PRIORITAIRES</p>
              <div className="flex justify-between items-center py-0.5 border-b border-[#211735]">
                <span className="text-gray-300 flex items-center gap-1.5"><Phone className="w-3 h-3 text-purple-400"/> 06 35 26 33 23</span>
                <span className="text-purple-300 font-semibold">Disponible</span>
              </div>
              <div className="flex justify-between items-center py-0.5 border-b border-[#211735]">
                <span className="text-gray-300 flex items-center gap-1.5"><Mail className="w-3 h-3 text-purple-400"/> ben.bigot@live.fr</span>
                <span className="text-emerald-400 font-semibold">Actif</span>
              </div>
              <div className="flex justify-between items-center py-0.5">
                <span className="text-gray-300 flex items-center gap-1.5"><Compass className="w-3 h-3 text-purple-400"/> Recherche poste sport / communication</span>
                <span className="text-amber-400 font-semibold">Ouvert</span>
              </div>
            </div>
          </div>
          <div className="border-t border-[#281b3d] pt-2 mt-2">
            <p className="text-gray-400 font-bold text-[10px] uppercase mb-1">Tendances</p>
            <div className="flex flex-wrap gap-1">
              <span className="bg-[#211735] text-purple-200 px-2 py-0.5 rounded text-[9px] border border-[#281b3d]">Adaptabilité</span>
              <span className="bg-[#211735] text-purple-200 px-2 py-0.5 rounded text-[9px] border border-[#281b3d]">Relation client</span>
              <span className="bg-[#211735] text-purple-200 px-2 py-0.5 rounded text-[9px] border border-[#281b3d]">Autodidacte</span>
            </div>
          </div>
        </section>
        {/* CARD 2: MON CONTRAT (Col 5-8) */}
        <section className="lg:col-span-4 bg-[#181126] border border-[#281b3d] rounded p-3 flex flex-col justify-between">
          <div>
            <h2 className="text-purple-300 font-bold text-[11px] tracking-wider uppercase border-b border-[#281b3d] pb-1 mb-2">MON CONTRAT</h2>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-amber-400/20 border border-amber-400 text-amber-400 rounded flex items-center justify-center font-bold text-xs">
                🛡️
              </div>
              <div>
                <p className="font-bold text-white text-xs">CDI - Disponible</p>
                <p className="text-gray-400 text-[10px]">Recherche active depuis 2025</p>
              </div>
            </div>
            <div className="bg-[#0e0a17] p-2 rounded border border-[#281b3d] space-y-1.5 my-2">
              <div className="flex justify-between text-gray-400 text-[10px]">
                <span>2025</span>
                <span>2026</span>
              </div>
              <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden border border-[#281b3d]">
                <div className="bg-purple-500 h-full w-1/4"></div>
              </div>
              <div className="flex justify-between text-[10px] pt-1">
                <span className="text-gray-400">Prend fin dans :</span>
                <span className="text-amber-400 font-bold">∞ jours</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-400">Type</span>
                <span className="text-gray-200">Plein temps</span>
              </div>
            </div>
          </div>
          <div className="space-y-1.5 border-t border-[#281b3d] pt-2">
            <p className="text-gray-400 font-bold text-[10px] uppercase">CLAUSE(S)</p>
            <p className="text-gray-300 text-[10px]">Mobilité Marseille / France • Télétravail partiel</p>
            <p className="text-gray-400 font-bold text-[10px] uppercase pt-1">PRIMES</p>
            <p className="text-gray-300 text-[10px]">Performance • Engagement long terme</p>
          </div>
        </section>
        {/* CARD 3: MES QUALIFICATIONS (Col 9-12) */}
        <section className="lg:col-span-4 bg-[#181126] border border-[#281b3d] rounded p-3 flex flex-col justify-between">
          <div>
            <h2 className="text-purple-300 font-bold text-[11px] tracking-wider uppercase border-b border-[#281b3d] pb-1 mb-2">MES QUALIFICATIONS</h2>
            <h3 className="font-bold text-white text-xs mb-1">3 diplômes</h3>
            <p className="text-gray-400 text-[10px] mb-2 leading-tight">
              ◌ Double cursus sport & banque, base économique solide.
            </p>
            <div className="flex gap-1.5 mb-3">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-3.5 h-3.5 rounded-full border border-purple-400/40"></div>
              ))}
            </div>
          </div>
          <div className="space-y-1.5 border-t border-[#281b3d] pt-2">
            <div className="text-[10px]">
              <p className="font-bold text-white">Licence STAPS <span className="text-gray-400 font-normal">- Management du sport</span></p>
            </div>
            <div className="text-[10px]">
              <p className="font-bold text-white">BTS Banque</p>
            </div>
            <div className="text-[10px]">
              <p className="font-bold text-white">BAC Économique et social</p>
            </div>
          </div>
        </section>
        {/* CARD 4: MON HISTORIQUE (Col 1-5) */}
        <section className="lg:col-span-5 bg-[#181126] border border-[#281b3d] rounded p-3">
          <h2 className="text-purple-300 font-bold text-[11px] tracking-wider uppercase border-b border-[#281b3d] pb-1 mb-1">MON HISTORIQUE</h2>
          <p className="text-gray-500 italic text-[9px] mb-2">⚡ Cliquez sur une ligne pour explorer l'expérience</p>
          <table className="w-full text-left text-[10px]">
            <thead>
              <tr className="text-gray-400 border-b border-[#281b3d]">
                <th className="pb-1">Année</th>
                <th className="pb-1">Équipe</th>
                <th className="pb-1">Championnat</th>
                <th className="pb-1">Position</th>
                <th className="pb-1">Récomp.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#211735]">
              <tr>
                <td className="py-1 text-gray-400">2025 -</td>
                <td className="py-1 font-bold text-white">Jour de Stade</td>
                <td className="py-1"><span className="bg-[#211735] px-1 py-0.5 rounded text-purple-200">Réseaux sociaux</span></td>
                <td className="py-1 text-gray-500">—</td>
                <td className="py-1 text-amber-400">🏆</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-400">2025 -</td>
                <td className="py-1 font-bold text-white">Sport 2000</td>
                <td className="py-1"><span className="bg-[#211735] px-1 py-0.5 rounded text-purple-200">Retail Sport</span></td>
                <td className="py-1 text-gray-500">—</td>
                <td className="py-1 text-amber-400">🏆</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-400">2025</td>
                <td className="py-1 font-bold text-white">Realsport</td>
                <td className="py-1"><span className="bg-[#211735] px-1 py-0.5 rounded text-purple-200">Retail Sport</span></td>
                <td className="py-1 text-gray-500">—</td>
                <td className="py-1 text-amber-400">🏆</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-400">2024-25</td>
                <td className="py-1 font-bold text-white">Pariwana Hostel</td>
                <td className="py-1"><span className="bg-[#211735] px-1 py-0.5 rounded text-purple-200">Hôtellerie</span></td>
                <td className="py-1 text-gray-500">—</td>
                <td className="py-1 text-amber-400">🏆</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-400">2019-24</td>
                <td className="py-1 font-bold text-white">Decathlon</td>
                <td className="py-1"><span className="bg-[#211735] px-1 py-0.5 rounded text-purple-200">Retail Sport</span></td>
                <td className="py-1 text-gray-500">—</td>
                <td className="py-1 text-amber-400">🏆</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-400">2018</td>
                <td className="py-1 font-bold text-white">Rugby Club Flers P.B.</td>
                <td className="py-1"><span className="bg-[#211735] px-1 py-0.5 rounded text-purple-200">Stage</span></td>
                <td className="py-1 text-gray-500">—</td>
                <td className="py-1 text-amber-400">🏆</td>
              </tr>
            </tbody>
          </table>
        </section>
        {/* CARD 5: STATS DE GESTION (Col 6-8) */}
        <section className="lg:col-span-3 bg-[#181126] border border-[#281b3d] rounded p-3">
          <h2 className="text-purple-300 font-bold text-[11px] tracking-wider uppercase border-b border-[#281b3d] pb-1 mb-2">STATS DE GESTION</h2>
          <div className="space-y-1.5 text-[10px]">
            <p className="text-gray-400 font-bold uppercase text-[9px]">HARD SKILLS</p>
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
            <p className="text-gray-400 font-bold uppercase text-[9px] pt-1">VENTE & GESTION</p>
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
        <section className="lg:col-span-4 bg-[#181126] border border-[#281b3d] rounded p-3">
          <h2 className="text-purple-300 font-bold text-[11px] tracking-wider uppercase border-b border-[#281b3d] pb-1 mb-2">POSTES VACANTS — MISSIONS CIBLÉES</h2>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-purple-600 rounded flex items-center justify-center font-bold text-white text-xs">
              🎯
            </div>
            <div>
              <p className="font-bold text-white text-xs">3 missions ciblées</p>
              <p className="text-gray-400 text-[10px]">Disponible immédiatement • Marseille & France entière</p>
            </div>
          </div>
          <div className="space-y-2 text-[10px]">
            <div className="bg-[#0e0a17] p-2 rounded border border-[#281b3d]">
              <p className="font-bold text-white">Chargé de communication Sport</p>
              <div className="flex gap-1 my-1">
                <span className="bg-[#211735] text-purple-200 px-1.5 py-0.5 rounded text-[8px]">Comm. digitale</span>
                <span className="bg-[#211735] text-purple-200 px-1.5 py-0.5 rounded text-[8px]">Réseaux sociaux</span>
                <span className="bg-[#211735] text-purple-200 px-1.5 py-0.5 rounded text-[8px]">Création contenu</span>
              </div>
              <p className="text-amber-400 text-[9px] text-right font-semibold">Priorité 1</p>
            </div>
            <div className="bg-[#0e0a17] p-2 rounded border border-[#281b3d]">
              <p className="font-bold text-white">Responsable d'équipe</p>
              <div className="flex gap-1 my-1">
                <span className="bg-[#211735] text-purple-200 px-1.5 py-0.5 rounded text-[8px]">Management</span>
                <span className="bg-[#211735] text-purple-200 px-1.5 py-0.5 rounded text-[8px]">Animation</span>
                <span className="bg-[#211735] text-purple-200 px-1.5 py-0.5 rounded text-[8px]">Formation</span>
              </div>
              <p className="text-amber-400 text-[9px] text-right font-semibold">Priorité 2</p>
            </div>
            <div className="bg-[#0e0a17] p-2 rounded border border-[#281b3d]">
              <p className="font-bold text-white">Gestion de projet Sportif</p>
              <div className="flex gap-1 my-1">
                <span className="bg-[#211735] text-purple-200 px-1.5 py-0.5 rounded text-[8px]">Coordination</span>
                <span className="bg-[#211735] text-purple-200 px-1.5 py-0.5 rounded text-[8px]">Événementiel</span>
                <span className="bg-[#211735] text-purple-200 px-1.5 py-0.5 rounded text-[8px]">Partenariats</span>
              </div>
              <p className="text-amber-400 text-[9px] text-right font-semibold">Priorité 3</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
