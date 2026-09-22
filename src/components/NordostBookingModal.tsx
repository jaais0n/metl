import { useState } from 'react';

interface NordostBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NordostBookingModal = ({ isOpen, onClose }: NordostBookingModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#090909] text-[#F6F6F6] rounded-2xl p-6 sm:p-8 border border-neutral-800">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="space-y-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Free 30-min call
            </span>
            <h3 className="text-2xl font-medium tracking-tight text-white mt-1">
              Book Discovery Call
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Tell us where your brand is now. We'll give you an honest read on what's holding it back. No pitch.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-lg font-mono">
                ✓
              </div>
              <p className="text-base font-medium text-white">Call request received</p>
              <p className="text-xs text-neutral-400">We will reach out to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Miller"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@startup.com"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">Company / Project URL</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="startup.bio"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">What's your current stage?</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Seed round prep, visual rebrand, product launch..."
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-medium text-xs font-mono hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Confirm Discovery Call</span>
                </button>
                <a
                  href="https://cal.com/denise-hodl/lets-talk?utm_source=home&utm_content=modal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-neutral-800 text-neutral-300 font-medium text-xs font-mono hover:text-white transition text-center"
                >
                  Direct Cal.com link ↗
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
