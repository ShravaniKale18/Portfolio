import React, { useState } from 'react';
import { ConstellationCanvas } from './components/ConstellationCanvas';
import { Navbar } from './components/Navbar';
import { CommandPalette } from './components/CommandPalette';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import MissionControl from './components/MissionControl';

import { LabJournal } from './components/LabJournal';
import { GithubActivity } from './components/GithubActivity';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-midnight-950 text-slate-100 font-sans selection:bg-electric-violet selection:text-white">
      {/* Dynamic interactive constellation starry canvas */}
      <ConstellationCanvas />

      {/* Floating navigation bar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Keyboard accessible command palette (Cmd+K / Ctrl+K) */}
      <CommandPalette 
        isOpen={commandPaletteOpen} 
        onClose={() => setCommandPaletteOpen(false)} 
      />

      {/* Main page content sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <MissionControl />
        <LabJournal />
        <GithubActivity />
        <Contact />
      </main>

      {/* Modern footer */}
      <Footer />
    </div>
  );
}

export default App;
