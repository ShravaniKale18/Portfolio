import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Eye, 
  Download, 
  ShieldCheck, 
  Calendar, 
  Building2, 
  Compass, 
  List, 
  Grid,
  Info,
  Layers,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { CERTIFICATES_DATA, CONSTELLATION_EDGES, CERTIFICATE_CATEGORIES } from '../data/certificatesData.js';
import { CertificateModal } from './CertificateModal.jsx';

export const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStar, setSelectedStar] = useState(CERTIFICATES_DATA[0]); // initially focus on prominent star
  const [hoveredStar, setHoveredStar] = useState(null);
  const [modalCertificate, setModalCertificate] = useState(null);
  const [viewMode, setViewMode] = useState('universe'); // 'universe' | 'list'
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const galaxyRef = useRef(null);

  // Filtered certificates
  const filteredCertificates = CERTIFICATES_DATA.filter((c) => {
    if (selectedCategory === 'All') return true;
    return c.category === selectedCategory;
  });

  // Track mouse over galaxy for subtle parallax
  const handleMouseMove = (e) => {
    if (!galaxyRef.current) return;
    const rect = galaxyRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10px to +10px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const activeFocus = hoveredStar || selectedStar || CERTIFICATES_DATA[0];

  return (
    <section id="certificates" className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Background galaxy ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-electric-violet/15 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-electric-cyan/15 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-cyan font-mono text-xs uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4 text-electric-cyan animate-pulse" />
              <span>05 // Interactive Cosmos</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              My Certifications Universe
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              An interactive constellation of verified credentials, machine learning specializations, and engineering internships.
            </p>
          </div>

          {/* View Mode Toggle & Category Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex bg-midnight-900/90 border border-white/15 rounded-2xl p-1 shadow-md">
              <button
                onClick={() => setViewMode('universe')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  viewMode === 'universe'
                    ? 'bg-gradient-to-r from-electric-violet to-electric-indigo text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Constellation Universe View"
                aria-label="Universe Constellation View"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Constellation</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  viewMode === 'list'
                    ? 'bg-gradient-to-r from-electric-violet to-electric-indigo text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Conventional Browse View"
                aria-label="List / Card Browse View"
              >
                <List className="w-3.5 h-3.5" />
                <span>Index View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CERTIFICATE_CATEGORIES.map((cat) => {
            const count = cat === 'All' 
              ? CERTIFICATES_DATA.length 
              : CERTIFICATES_DATA.filter((c) => c.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  isSelected
                    ? 'bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/50 shadow-md shadow-electric-cyan/10'
                    : 'bg-midnight-900/60 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <span>{cat}</span>
                <span className="text-[10px] opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* UNIVERSE CONSTELLATION MAP VIEW                                */}
        {/* ============================================================== */}
        {viewMode === 'universe' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* The Constellation Canvas / Interactive Galaxy */}
            <div 
              ref={galaxyRef}
              onMouseMove={handleMouseMove}
              className="lg:col-span-8 relative w-full aspect-[4/3] sm:aspect-[16/10] bg-midnight-950/90 border border-white/15 rounded-3xl overflow-hidden glass-panel shadow-2xl flex items-center justify-center select-none"
            >
              {/* Subtle deep space background grid & stars */}
              <div className="absolute inset-0 ambient-dot-grid opacity-30 pointer-events-none" />
              <div 
                className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none transition-transform duration-300"
                style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
              />

              {/* Constellation Lines SVG Layer */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {CONSTELLATION_EDGES.map((edge, idx) => {
                  const nodeA = CERTIFICATES_DATA.find((c) => c.id === edge.from);
                  const nodeB = CERTIFICATES_DATA.find((c) => c.id === edge.to);
                  if (!nodeA || !nodeB) return null;

                  const isEdgeActive = 
                    (activeFocus?.id === nodeA.id || activeFocus?.id === nodeB.id);

                  return (
                    <line
                      key={idx}
                      x1={nodeA.coords.x}
                      y1={nodeA.coords.y}
                      x2={nodeB.coords.x}
                      y2={nodeB.coords.y}
                      stroke={isEdgeActive ? 'url(#lineGrad)' : 'rgba(255, 255, 255, 0.12)'}
                      strokeWidth={isEdgeActive ? 0.8 : 0.4}
                      strokeDasharray={isEdgeActive ? 'none' : '1.5 1.5'}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* Constellation Star Nodes */}
              {CERTIFICATES_DATA.map((cert) => {
                const isSelected = selectedStar?.id === cert.id;
                const isHovered = hoveredStar?.id === cert.id;
                const isFilteredOut = selectedCategory !== 'All' && cert.category !== selectedCategory;

                const nodeSizeClass = 
                  cert.starSize === 'large' ? 'w-5 h-5 sm:w-6 sm:h-6' :
                  cert.starSize === 'medium' ? 'w-4 h-4 sm:w-5 sm:h-5' : 'w-3.5 h-3.5 sm:w-4 sm:h-4';

                return (
                  <div
                    key={cert.id}
                    style={{
                      left: `${cert.coords.x}%`,
                      top: `${cert.coords.y}%`,
                      transform: 'translate(-50%, -50%)',
                      opacity: isFilteredOut ? 0.25 : 1
                    }}
                    className="absolute z-20 transition-all duration-300"
                  >
                    {/* Interactive Star Button */}
                    <button
                      onClick={() => {
                        setSelectedStar(cert);
                      }}
                      onMouseEnter={() => setHoveredStar(cert)}
                      onMouseLeave={() => setHoveredStar(null)}
                      onFocus={() => setSelectedStar(cert)}
                      aria-label={`Certificate node: ${cert.title}`}
                      className="group/star relative flex items-center justify-center focus:outline-none"
                    >
                      {/* Outer pulsing halo */}
                      {(isSelected || isHovered) && (
                        <div 
                          className="absolute w-12 h-12 rounded-full animate-ping opacity-75 pointer-events-none"
                          style={{ backgroundColor: `${cert.starColor}40` }}
                        />
                      )}

                      {/* Surrounding orbit ring */}
                      <div 
                        className={`absolute rounded-full transition-all duration-300 pointer-events-none ${
                          isSelected || isHovered
                            ? 'w-10 h-10 border-2'
                            : 'w-8 h-8 border border-white/20'
                        }`}
                        style={{
                          borderColor: isSelected || isHovered ? cert.starColor : undefined,
                          boxShadow: isSelected || isHovered ? `0 0 15px ${cert.starColor}` : 'none'
                        }}
                      />

                      {/* Glowing star core */}
                      <div
                        className={`rounded-full transition-all duration-300 ${nodeSizeClass} flex items-center justify-center shadow-lg`}
                        style={{
                          backgroundColor: cert.starColor,
                          boxShadow: `0 0 ${isSelected || isHovered ? '20px' : '10px'} ${cert.starColor}`,
                          transform: isSelected || isHovered ? 'scale(1.25)' : 'scale(1)'
                        }}
                      >
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>

                      {/* Hover/Active label */}
                      <div
                        className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-200 z-30 ${
                          isSelected || isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                      >
                        <div className="px-2.5 py-1 rounded-lg bg-midnight-950/95 border border-white/20 text-[10px] font-mono whitespace-nowrap text-white shadow-xl flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cert.starColor }} />
                          <span>{cert.issuingOrg}</span>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}

              {/* Bottom Universe Controls Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-400 bg-midnight-950/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 pointer-events-none">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse" />
                  <span>Click or hover any star to align telescope</span>
                </span>
                <span className="hidden sm:inline text-slate-500">
                  {filteredCertificates.length} credentials in orbit
                </span>
              </div>
            </div>

            {/* Floating Credential Inspector Panel */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="p-6 sm:p-7 rounded-3xl bg-midnight-900/90 border border-white/15 glass-panel shadow-2xl space-y-6 relative overflow-hidden">
                
                {/* Glow accent matching selected star */}
                <div 
                  className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-30 pointer-events-none"
                  style={{ backgroundColor: activeFocus.starColor }}
                />

                {/* Panel Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: activeFocus.starColor, boxShadow: `0 0 10px ${activeFocus.starColor}` }}
                    />
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                      Target Star: {activeFocus.constellationGroup || activeFocus.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                    {activeFocus.category}
                  </span>
                </div>

                {/* Thumbnail Preview with Quick Peek */}
                <div 
                  onClick={() => setModalCertificate(activeFocus)}
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-midnight-950 border border-white/10 cursor-pointer group shadow-inner"
                >
                  <img
                    src={activeFocus.previewImage || activeFocus.fileUrl}
                    alt={activeFocus.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/90 via-transparent to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <div className="px-3 py-1.5 rounded-xl bg-electric-violet text-white text-xs font-mono flex items-center gap-1.5 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Open Full Certificate</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-snug">
                    {activeFocus.title}
                  </h3>

                  <div className="space-y-1.5 text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-electric-cyan shrink-0" />
                      <span className="text-white font-medium">{activeFocus.issuingOrg}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>Issued: {activeFocus.issueDate}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {activeFocus.description}
                  </p>
                </div>

                {/* Skills Learned Badges */}
                {activeFocus.skillsLearned && (
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      Competencies Acquired
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeFocus.skillsLearned.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Explore Certificate Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setModalCertificate(activeFocus)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-electric-violet to-electric-cyan text-white text-xs font-mono font-semibold shadow-lg shadow-electric-violet/25 hover:shadow-electric-violet/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Explore Full Certificate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* ALTERNATE ACCESSIBLE INDEX / LIST VIEW                         */}
        {/* ============================================================== */}
        {viewMode === 'list' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in duration-300">
            {filteredCertificates.map((cert) => (
              <article
                key={cert.id}
                tabIndex={0}
                role="button"
                aria-label={`View certificate: ${cert.title}`}
                onClick={() => setModalCertificate(cert)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setModalCertificate(cert);
                  }
                }}
                className="group rounded-3xl bg-midnight-900/60 border border-white/10 glass-panel overflow-hidden flex flex-col justify-between hover:border-electric-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-cyan/10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan"
              >
                {/* Thumbnail Area */}
                <div className="relative aspect-[16/10] bg-midnight-950 overflow-hidden border-b border-white/10">
                  <img
                    src={cert.previewImage || cert.fileUrl}
                    alt={`${cert.title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

                  <div className="absolute top-3 left-3 z-10">
                    <span 
                      className="text-[10px] font-mono uppercase tracking-wider bg-midnight-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border shadow-sm"
                      style={{ color: cert.starColor, borderColor: `${cert.starColor}50` }}
                    >
                      {cert.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-black/40">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-electric-violet/90 text-white text-xs font-mono font-medium shadow-lg">
                      <Eye className="w-4 h-4 text-electric-cyan" />
                      <span>Inspect Certificate</span>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Building2 className="w-3.5 h-3.5 text-electric-violet shrink-0" />
                      <span className="truncate">{cert.issuingOrg}</span>
                    </div>

                    <h3 className="text-base font-display font-bold text-white group-hover:text-electric-cyan transition-colors leading-snug line-clamp-2">
                      {cert.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Issued {cert.issueDate}</span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  {cert.skillsLearned && cert.skillsLearned.length > 0 && (
                    <div className="pt-3 border-t border-white/5 space-y-1.5">
                      <div className="flex flex-wrap gap-1">
                        {cert.skillsLearned.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skillsLearned.length > 3 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-slate-500">
                            +{cert.skillsLearned.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer action */}
                <div className="px-6 py-3.5 bg-midnight-950/70 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-electric-cyan group-hover:underline flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect</span>
                  </span>
                  
                  {cert.verificationUrl && (
                    <span className="text-emerald-400 flex items-center gap-1 text-[11px]" title="Verifiable Credential">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>

              </article>
            ))}
          </div>
        )}

      </div>

      {/* Full Screen Lightbox Modal with Next/Previous Navigation */}
      {modalCertificate && (
        <CertificateModal
          certificate={modalCertificate}
          allCertificates={filteredCertificates}
          onNavigate={(nextCert) => setModalCertificate(nextCert)}
          onClose={() => setModalCertificate(null)}
        />
      )}

    </section>
  );
};
