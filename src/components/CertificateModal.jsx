import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  ShieldCheck, 
  Calendar, 
  Building2,
  CheckCircle2,
  FileWarning,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

export const CertificateModal = ({ 
  certificate, 
  onClose,
  allCertificates = [],
  onNavigate
}) => {
  const [zoom, setZoom] = useState(1);
  const [hasError, setHasError] = useState(false);
  const [activeTab, setActiveTab] = useState('viewer'); // 'viewer' | 'details'

  const currentIndex = allCertificates.findIndex((c) => c.id === certificate?.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < allCertificates.length - 1;

  useEffect(() => {
    // Reset zoom and error state when certificate changes
    setZoom(1);
    setHasError(false);
    setActiveTab('viewer');

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev && onNavigate) {
        onNavigate(allCertificates[currentIndex - 1]);
      } else if (e.key === 'ArrowRight' && hasNext && onNavigate) {
        onNavigate(allCertificates[currentIndex + 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certificate, currentIndex, hasPrev, hasNext, onClose, onNavigate, allCertificates]);

  if (!certificate) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoom(1);

  const handleDownload = () => {
    if (!certificate.fileUrl) return;
    const link = document.createElement('a');
    link.href = certificate.fileUrl;
    link.download = certificate.title ? `${certificate.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf` : 'certificate.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isPdf = certificate.fileUrl?.toLowerCase().endsWith('.pdf');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate Viewer: ${certificate.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl h-[92vh] bg-midnight-900 border border-white/15 rounded-3xl shadow-2xl glass-panel flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-midnight-950/80">
          <div className="flex items-center gap-3 overflow-hidden pr-2">
            <div 
              className="p-2 rounded-xl text-white shrink-0 shadow-sm"
              style={{ backgroundColor: `${certificate.starColor || '#8b5cf6'}25`, border: `1px solid ${certificate.starColor || '#8b5cf6'}50` }}
            >
              <ShieldCheck className="w-5 h-5" style={{ color: certificate.starColor || '#8b5cf6' }} />
            </div>
            <div className="truncate">
              <h3 className="text-sm sm:text-base font-display font-bold text-white truncate">
                {certificate.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono flex items-center gap-2">
                <span>{certificate.issuingOrg}</span>
                <span>•</span>
                <span className="text-electric-cyan">{certificate.category}</span>
                {allCertificates.length > 0 && (
                  <>
                    <span>•</span>
                    <span className="text-slate-500">{currentIndex + 1} of {allCertificates.length}</span>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Previous / Next Navigator */}
            {allCertificates.length > 1 && onNavigate && (
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-0.5">
                <button
                  onClick={() => onNavigate(allCertificates[currentIndex - 1])}
                  disabled={!hasPrev}
                  className="p-1.5 text-slate-300 hover:text-white disabled:opacity-20 transition-colors"
                  title="Previous Certificate (Left Arrow)"
                  aria-label="Previous Certificate"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate(allCertificates[currentIndex + 1])}
                  disabled={!hasNext}
                  className="p-1.5 text-slate-300 hover:text-white disabled:opacity-20 transition-colors"
                  title="Next Certificate (Right Arrow)"
                  aria-label="Next Certificate"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* View Mode Toggle on Mobile */}
            <div className="sm:hidden flex bg-white/5 rounded-lg p-0.5 border border-white/10">
              <button
                onClick={() => setActiveTab('viewer')}
                className={`px-2.5 py-1 text-xs font-mono rounded ${
                  activeTab === 'viewer' ? 'bg-electric-violet text-white' : 'text-slate-400'
                }`}
              >
                Viewer
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`px-2.5 py-1 text-xs font-mono rounded ${
                  activeTab === 'details' ? 'bg-electric-violet text-white' : 'text-slate-400'
                }`}
              >
                Details
              </button>
            </div>

            {/* Desktop Zoom controls */}
            <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-xl px-1">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 0.75}
                className="p-2 text-slate-300 hover:text-white disabled:opacity-30 transition-colors"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-400 px-2 min-w-[3.5rem] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 2.5}
                className="p-2 text-slate-300 hover:text-white disabled:opacity-30 transition-colors"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-2 text-slate-400 hover:text-electric-cyan transition-colors"
                title="Reset Zoom"
                aria-label="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Open Original in New Tab */}
            <a
              href={certificate.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
              title="Open full certificate in a new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-electric-cyan" />
              <span>Full View</span>
            </a>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-white bg-electric-violet hover:bg-electric-purple rounded-xl shadow-sm transition-all"
              title="Download original certificate"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Close (Escape)"
              aria-label="Close Certificate Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content Body */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-midnight-950/90">
          
          {/* Certificate Viewport */}
          <div
            className={`lg:col-span-8 h-full overflow-auto p-4 sm:p-6 flex items-center justify-center relative bg-black/40 border-b lg:border-b-0 lg:border-r border-white/10 ${
              activeTab === 'details' ? 'hidden lg:flex' : 'flex'
            }`}
          >
            {hasError ? (
              <div className="text-center p-8 space-y-3">
                <FileWarning className="w-12 h-12 text-amber-400 mx-auto" />
                <h4 className="text-base font-semibold text-white">Preview unavailable in embedded viewer</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  You can still open the certificate file directly in a new tab or download it to your device.
                </p>
                <div className="flex justify-center gap-3 pt-2">
                  <a
                    href={certificate.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-electric-violet text-white text-xs font-mono rounded-xl"
                  >
                    <ExternalLink className="w-4 h-4" /> Open Full Certificate
                  </a>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-xs font-mono rounded-xl"
                  >
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              </div>
            ) : isPdf ? (
              <div className="w-full h-full flex flex-col items-center justify-center relative">
                {/* Embed PDF with fallback to high-resolution preview */}
                <object
                  data={`${certificate.fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  type="application/pdf"
                  className="w-full h-full rounded-xl shadow-2xl transition-transform duration-200"
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'center center',
                    minHeight: '400px'
                  }}
                  onError={() => setHasError(true)}
                >
                  <img
                    src={certificate.previewImage || certificate.fileUrl}
                    alt={certificate.title}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-transform duration-200"
                    style={{ transform: `scale(${zoom})` }}
                    onError={() => setHasError(true)}
                  />
                </object>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center overflow-auto">
                <img
                  src={certificate.fileUrl}
                  alt={certificate.title}
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-transform duration-200"
                  style={{ transform: `scale(${zoom})` }}
                  onError={() => setHasError(true)}
                />
              </div>
            )}
          </div>

          {/* Certificate Metadata & Verification Column */}
          <div
            className={`lg:col-span-4 h-full overflow-y-auto p-6 space-y-6 bg-midnight-900/60 ${
              activeTab === 'viewer' ? 'hidden lg:block' : 'block'
            }`}
          >
            {/* Header info */}
            <div>
              <span 
                className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border shadow-sm"
                style={{
                  color: certificate.starColor || '#06b6d4',
                  backgroundColor: `${certificate.starColor || '#06b6d4'}15`,
                  borderColor: `${certificate.starColor || '#06b6d4'}40`
                }}
              >
                {certificate.constellationGroup || certificate.category}
              </span>
              <h4 className="text-xl font-display font-bold text-white mt-2.5">
                {certificate.title}
              </h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-light">
                {certificate.description || 'Verified credential demonstrating engineering competence and commitment to continuous learning.'}
              </p>
            </div>

            {/* Spec Table */}
            <div className="p-4 rounded-2xl bg-midnight-950/80 border border-white/10 space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-electric-violet" />
                  Issuing Org
                </span>
                <span className="text-white font-medium text-right">{certificate.issuingOrg}</span>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-electric-cyan" />
                  Issue Date
                </span>
                <span className="text-white font-medium">{certificate.issueDate}</span>
              </div>

              {certificate.credentialId && (
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-slate-400">Credential ID</span>
                  <span className="text-electric-cyan font-mono text-[11px] truncate max-w-[160px]" title={certificate.credentialId}>
                    {certificate.credentialId}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-slate-400">File Type</span>
                <span className="uppercase text-slate-300 bg-white/5 px-2 py-0.5 rounded">
                  {certificate.fileType || 'PDF Document'}
                </span>
              </div>
            </div>

            {/* Skills Learned */}
            {certificate.skillsLearned && certificate.skillsLearned.length > 0 && (
              <div>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Skills & Concepts Acquired
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {certificate.skillsLearned.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-xl bg-midnight-950 text-slate-200 border border-white/10 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Verification Link */}
            {certificate.verificationUrl && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-electric-violet/15 to-electric-cyan/15 border border-electric-violet/30 space-y-2">
                <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Verifiable Credential
                </p>
                <p className="text-[11px] text-slate-300 leading-normal">
                  This certificate has an official verification link from the issuing organization.
                </p>
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-electric-cyan hover:text-white pt-1 transition-colors"
                >
                  <span>Verify at {certificate.issuingOrg}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Bottom Download & Open CTA */}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-electric-violet hover:bg-electric-purple text-white text-xs font-mono font-semibold transition-all shadow-md shadow-electric-violet/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Original Certificate</span>
              </button>

              <a
                href={certificate.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors border border-white/10"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Fullscreen in New Tab</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
