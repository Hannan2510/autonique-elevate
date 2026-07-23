import { SectionHeader } from "./SectionHeader";

export function ProblemSolutionSection() {
  return (
    <section id="problem" className="py-20 border-t border-[#0D9488]/12 dark:border-[#0D9488]/30 bg-[#F8FFFE] dark:bg-[#061514] relative z-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="The Operational Gap"
          title="Disconnect Between Front-Desk, EMR & Patients?"
          description="Traditional clinics waste 4+ hours daily juggling fragmented tools, paper charts, and manual phone queues."
        />

        <div data-reveal data-reveal-delay="1" className="w-full flex justify-center">
          {/* LIGHT THEME SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className="w-full h-auto max-w-4xl mx-auto block dark:hidden"
            style={{ background: "transparent" }}
          >
            <defs>
              <linearGradient id="primaryGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0D9488" />
                <stop offset="100%" stopColor="#14B8A6" />
              </linearGradient>

              <linearGradient id="bgGlowLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CCFBF1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#F0FDFA" stopOpacity="0.2" />
              </linearGradient>

              <filter id="softShadowLight" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.08" />
              </filter>
            </defs>

            <style>{`
              @keyframes dashLight {
                0% { stroke-dashoffset: 1000; }
                100% { stroke-dashoffset: 0; }
              }
              @keyframes floatLeftLight {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }
              @keyframes floatRightLight {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-12px); }
              }
              @keyframes typingLight {
                0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
                40% { opacity: 1; transform: scale(1.2); }
              }
              @keyframes pulseScaleLight {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
              .card-left-light { animation: floatLeftLight 6s ease-in-out infinite; transform-origin: center; }
              .card-right-light { animation: floatRightLight 7s ease-in-out infinite 0.5s; transform-origin: center; }
              .ecg-line-light {
                stroke-dasharray: 20 1000;
                animation: dashLight 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
              .dot-1-light { animation: typingLight 1.4s infinite 0s; transform-box: fill-box; transform-origin: center; }
              .dot-2-light { animation: typingLight 1.4s infinite 0.2s; transform-box: fill-box; transform-origin: center; }
              .dot-3-light { animation: typingLight 1.4s infinite 0.4s; transform-box: fill-box; transform-origin: center; }
              .pulse-badge-light { animation: pulseScaleLight 3s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
            `}</style>

            <circle cx="200" cy="200" r="140" fill="url(#bgGlowLight)" />
            <circle cx="600" cy="200" r="150" fill="url(#bgGlowLight)" />

            <path
              d="M 280 200 L 370 200 L 385 170 L 400 230 L 415 185 L 425 205 L 435 200 L 520 200"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              className="ecg-line-light"
              d="M 280 200 L 370 200 L 385 170 L 400 230 L 415 185 L 425 205 L 435 200 L 520 200"
              fill="none"
              stroke="#0D9488"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g className="card-left-light" filter="url(#softShadowLight)">
              <rect x="80" y="100" width="220" height="200" rx="20" fill="#FFFFFF" />
              <rect x="80" y="100" width="220" height="48" rx="20" fill="#F8FAFC" />
              <circle cx="110" cy="124" r="14" fill="#25D366" />
              <path d="M 105 120 A 6 6 0 0 1 114 127 L 114 129 L 112 129 L 107 124 Z" fill="#FFFFFF" />
              <text x="132" y="128" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="12" fill="#0F172A">
                WhatsApp Booking
              </text>

              <rect x="96" y="162" width="145" height="42" rx="12" fill="#F1F5F9" />
              <text x="108" y="180" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="11" fill="#334155">
                Book doctor appointment
              </text>
              <text x="108" y="194" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="10" fontWeight="500" fill="#0D9488">
                Today, 10:30 AM
              </text>

              <rect x="125" y="214" width="160" height="48" rx="12" fill="url(#primaryGradLight)" />
              <text x="137" y="233" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="11" fontWeight="500" fill="#FFFFFF">
                Slot Confirmed! Slot 4B
              </text>
              <text x="137" y="248" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="10" fill="#CCFBF1">
                Synced with Clinic OS ✓
              </text>

              <g transform="translate(96, 268)">
                <rect x="0" y="0" width="50" height="20" rx="10" fill="#E2E8F0" />
                <circle className="dot-1-light" cx="15" cy="10" r="2.5" fill="#64748B" />
                <circle className="dot-2-light" cx="25" cy="10" r="2.5" fill="#64748B" />
                <circle className="dot-3-light" cx="35" cy="10" r="2.5" fill="#64748B" />
              </g>
            </g>

            <g className="card-right-light" filter="url(#softShadowLight)">
              <rect x="500" y="90" width="220" height="220" rx="20" fill="#FFFFFF" />

              <text x="524" y="125" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="14" fill="#0F172A">
                Live Appointments
              </text>
              <rect x="645" y="112" width="55" height="18" rx="9" fill="#CCFBF1" />
              <text x="654" y="124" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="9" fill="#0D9488">
                AUTOMATED
              </text>

              <g transform="translate(520, 142)">
                <rect x="0" y="0" width="180" height="46" rx="10" fill="#F0FDFA" stroke="#14B8A6" strokeWidth="1.5" />
                <circle cx="22" cy="23" r="12" fill="#14B8A6" />
                <path d="M 22 17 A 4 4 0 1 0 22 25 A 4 4 0 1 0 22 17 Z M 16 30 C 16 27 19 26 22 26 C 25 26 28 27 28 30" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

                <text x="42" y="20" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="11" fill="#0F172A">
                  Sarah Jenkins
                </text>
                <text x="42" y="34" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="10" fill="#5EEAD4">
                  11:00 AM • Dr. Aris
                </text>
                <circle cx="162" cy="23" r="5" fill="#14B8A6" />
              </g>

              <g transform="translate(520, 198)">
                <rect x="0" y="0" width="180" height="46" rx="10" fill="#F8FAFC" />
                <circle cx="22" cy="23" r="12" fill="#E2E8F0" />
                <path d="M 22 17 A 4 4 0 1 0 22 25 A 4 4 0 1 0 22 17 Z M 16 30 C 16 27 19 26 22 26 C 25 26 28 27 28 30" fill="none" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />

                <text x="42" y="20" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="11" fill="#334155">
                  Michael Chen
                </text>
                <text x="42" y="34" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="10" fill="#94A3B8">
                  11:30 AM • Consultation
                </text>
              </g>

              <g transform="translate(520, 254)">
                <rect x="0" y="0" width="180" height="40" rx="10" fill="#F8FAFC" />
                <rect x="42" y="12" width="70" height="6" rx="3" fill="#E2E8F0" />
                <rect x="42" y="24" width="45" height="5" rx="2.5" fill="#F1F5F9" />
              </g>
            </g>

            <g className="pulse-badge-light" transform="translate(360, 80)" filter="url(#softShadowLight)">
              <rect x="0" y="0" width="80" height="28" rx="14" fill="#FFFFFF" stroke="#CCFBF1" strokeWidth="2" />
              <circle cx="16" cy="14" r="4" fill="#14B8A6" />
              <text x="26" y="18" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="10" fill="#0D9488">
                INSTANT
              </text>
            </g>
          </svg>

          {/* DARK THEME SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className="w-full h-auto max-w-4xl mx-auto hidden dark:block"
          >
            <defs>
              <radialGradient id="siteBgDark" cx="50%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#072A25" />
                <stop offset="60%" stopColor="#031613" />
                <stop offset="100%" stopColor="#020E0C" />
              </radialGradient>

              <linearGradient id="primaryGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0D9488" />
                <stop offset="100%" stopColor="#2DD4BF" />
              </linearGradient>

              <radialGradient id="bgGlowDark" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#022C22" stopOpacity="0" />
              </radialGradient>

              <filter id="softShadowDark" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.7" />
                <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#14B8A6" floodOpacity="0.12" />
              </filter>
            </defs>

            <style>{`
              @keyframes dashDark {
                0% { stroke-dashoffset: 1000; }
                100% { stroke-dashoffset: 0; }
              }
              @keyframes floatLeftDark {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }
              @keyframes floatRightDark {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-12px); }
              }
              @keyframes typingDark {
                0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
                40% { opacity: 1; transform: scale(1.2); }
              }
              @keyframes pulseScaleDark {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
              .card-left-dark { animation: floatLeftDark 6s ease-in-out infinite; transform-origin: center; }
              .card-right-dark { animation: floatRightDark 7s ease-in-out infinite 0.5s; transform-origin: center; }
              .ecg-line-dark {
                stroke-dasharray: 20 1000;
                animation: dashDark 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
              .dot-1-dark { animation: typingDark 1.4s infinite 0s; transform-box: fill-box; transform-origin: center; }
              .dot-2-dark { animation: typingDark 1.4s infinite 0.2s; transform-box: fill-box; transform-origin: center; }
              .dot-3-dark { animation: typingDark 1.4s infinite 0.4s; transform-box: fill-box; transform-origin: center; }
              .pulse-badge-dark { animation: pulseScaleDark 3s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
            `}</style>

            <rect width="100%" height="100%" rx="16" fill="url(#siteBgDark)" />

            <circle cx="200" cy="200" r="160" fill="url(#bgGlowDark)" />
            <circle cx="600" cy="200" r="170" fill="url(#bgGlowDark)" />

            <path
              d="M 280 200 L 370 200 L 385 170 L 400 230 L 415 185 L 425 205 L 435 200 L 520 200"
              fill="none"
              stroke="#0F2B26"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              className="ecg-line-dark"
              d="M 280 200 L 370 200 L 385 170 L 400 230 L 415 185 L 425 205 L 435 200 L 520 200"
              fill="none"
              stroke="#2DD4BF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g className="card-left-dark" filter="url(#softShadowDark)">
              <rect x="80" y="100" width="220" height="200" rx="20" fill="#081C19" stroke="#133A34" strokeWidth="1.5" />

              <rect x="80" y="100" width="220" height="48" rx="20" fill="#0D2B26" />
              <circle cx="110" cy="124" r="14" fill="#25D366" />
              <path d="M 105 120 A 6 6 0 0 1 114 127 L 114 129 L 112 129 L 107 124 Z" fill="#FFFFFF" />
              <text x="132" y="128" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="12" fill="#F8FAFC">
                WhatsApp Booking
              </text>

              <rect x="96" y="162" width="145" height="42" rx="12" fill="#0D2B26" />
              <text x="108" y="180" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="11" fill="#E2E8F0">
                Book doctor appointment
              </text>
              <text x="108" y="194" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="10" fontWeight="500" fill="#2DD4BF">
                Today, 10:30 AM
              </text>

              <rect x="125" y="214" width="160" height="48" rx="12" fill="url(#primaryGradDark)" />
              <text x="137" y="233" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="11" fontWeight="600" fill="#041F1A">
                Slot Confirmed! Slot 4B
              </text>
              <text x="137" y="248" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="10" fontWeight="500" fill="#022C22">
                Synced with Clinic OS ✓
              </text>

              <g transform="translate(96, 268)">
                <rect x="0" y="0" width="50" height="20" rx="10" fill="#0D2B26" />
                <circle className="dot-1-dark" cx="15" cy="10" r="2.5" fill="#5EEAD4" />
                <circle className="dot-2-dark" cx="25" cy="10" r="2.5" fill="#5EEAD4" />
                <circle className="dot-3-dark" cx="35" cy="10" r="2.5" fill="#5EEAD4" />
              </g>
            </g>

            <g className="card-right-dark" filter="url(#softShadowDark)">
              <rect x="500" y="90" width="220" height="220" rx="20" fill="#081C19" stroke="#133A34" strokeWidth="1.5" />

              <text x="524" y="125" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="14" fill="#F8FAFC">
                Live Appointments
              </text>
              <rect x="645" y="112" width="55" height="18" rx="9" fill="#032621" stroke="#0D9488" strokeWidth="1" />
              <text x="654" y="124" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="9" fill="#2DD4BF">
                AUTOMATED
              </text>

              <g transform="translate(520, 142)">
                <rect x="0" y="0" width="180" height="46" rx="10" fill="#032621" stroke="#2DD4BF" strokeWidth="1.5" />
                <circle cx="22" cy="23" r="12" fill="#2DD4BF" />
                <path d="M 22 17 A 4 4 0 1 0 22 25 A 4 4 0 1 0 22 17 Z M 16 30 C 16 27 19 26 22 26 C 25 26 28 27 28 30" fill="none" stroke="#041F1A" strokeWidth="1.5" strokeLinecap="round" />

                <text x="42" y="20" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="11" fill="#F8FAFC">
                  Sarah Jenkins
                </text>
                <text x="42" y="34" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="10" fill="#2DD4BF">
                  11:00 AM • Dr. Aris
                </text>
                <circle cx="162" cy="23" r="5" fill="#2DD4BF" />
              </g>

              <g transform="translate(520, 198)">
                <rect x="0" y="0" width="180" height="46" rx="10" fill="#0D2B26" />
                <circle cx="22" cy="23" r="12" fill="#133A34" />
                <path d="M 22 17 A 4 4 0 1 0 22 25 A 4 4 0 1 0 22 17 Z M 16 30 C 16 27 19 26 22 26 C 25 26 28 27 28 30" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />

                <text x="42" y="20" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="11" fill="#E2E8F0">
                  Michael Chen
                </text>
                <text x="42" y="34" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="10" fill="#64748B">
                  11:30 AM • Consultation
                </text>
              </g>

              <g transform="translate(520, 254)">
                <rect x="0" y="0" width="180" height="40" rx="10" fill="#0D2B26" />
                <rect x="42" y="12" width="70" height="6" rx="3" fill="#133A34" />
                <rect x="42" y="24" width="45" height="5" rx="2.5" fill="#133A34" />
              </g>
            </g>

            <g className="pulse-badge-dark" transform="translate(360, 80)" filter="url(#softShadowDark)">
              <rect x="0" y="0" width="80" height="28" rx="14" fill="#081C19" stroke="#2DD4BF" strokeWidth="1.5" />
              <circle cx="16" cy="14" r="4" fill="#2DD4BF" />
              <text x="26" y="18" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="10" fill="#2DD4BF">
                INSTANT
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
