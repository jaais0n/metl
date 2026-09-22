import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NordostFooter = () => {
  const [viennaTime, setViennaTime] = useState('');
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<SVGSVGElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Vienna',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        setViennaTime(formatter.format(now));
      } catch {
        const now = new Date();
        setViennaTime(now.toTimeString().split(' ')[0]);
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (topBarRef.current) {
        gsap.from(topBarRef.current, {
          scrollTrigger: {
            trigger: topBarRef.current,
            start: 'top 98%',
            once: true,
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }

      // Monumental Wordmark Letters Stagger Animation
      if (wordmarkRef.current) {
        const paths = wordmarkRef.current.querySelectorAll('g#Vector > path');
        gsap.from(paths, {
          scrollTrigger: {
            trigger: wordmarkRef.current,
            start: 'top 98%',
            once: true,
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.08,
          ease: 'power4.out',
          clearProps: 'all',
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#090909] text-[#F6F6F6] pt-12 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Bar */}
        <div ref={topBarRef} className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-16 border-b border-neutral-800">
          {/* Live Vienna Time */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-neutral-400">Vienna</span>
            <time className="text-white font-medium tracking-wider">
              {viennaTime || '--:--:--'}
            </time>
            <span className="px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 text-[10px]">
              CEST
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/studio-nordost/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="https://www.youtube.com/@StudioNordost" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                YouTube
              </a>
              <a href="https://www.instagram.com/studio.nordost/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Instagram
              </a>
              <a href="https://x.com/StudioNordost" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                X
              </a>
            </div>

            <span className="hidden sm:inline text-neutral-700">/</span>

            <div className="flex items-center gap-4">
              <a href="#imprint" className="hover:text-white transition">
                Imprint
              </a>
              <a href="#privacy" className="hover:text-white transition">
                Privacy
              </a>
            </div>

            <span className="hidden sm:inline text-neutral-700">/</span>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-white transition cursor-pointer"
              >
                Back to top ↑
              </button>
            </div>
          </nav>
        </div>

        {/* Monumental NORDOST Wordmark SVG with GSAP Stagger */}
        <div className="w-full pt-10 pb-4 text-neutral-300 hover:text-white transition-colors duration-500">
          <svg
            ref={wordmarkRef}
            viewBox="0 0 1472 336.369"
            fill="none"
            className="w-full h-auto max-h-[22vw] object-contain block select-none"
            aria-label="NORDOST"
          >
            <g id="Vector">
              {/* N */}
              <path
                d="M270.636 0V330.929H223.037L53.4926 82.0522V330.929H0V0H55.3059L217.144 235.73V0H270.636Z"
                fill="currentColor"
              />
              {/* O */}
              <path
                d="M513.413 213.064C513.413 236.939 508.578 258.245 498.907 276.983C489.538 295.418 476.391 309.924 459.467 320.502C442.543 331.08 423.05 336.368 400.988 336.368C379.228 336.368 359.886 331.08 342.962 320.502C326.038 309.924 312.74 295.418 303.069 276.983C293.398 258.245 288.563 236.939 288.563 213.064C288.563 188.886 293.398 167.58 303.069 149.144C312.74 130.709 326.038 116.203 342.962 105.625C359.886 95.0474 379.228 89.7585 400.988 89.7585C423.05 89.7585 442.543 95.0474 459.467 105.625C476.391 116.203 489.538 130.709 498.907 149.144C508.578 167.58 513.413 188.886 513.413 213.064ZM341.602 213.064C341.602 228.779 343.869 242.832 348.402 255.223C353.237 267.312 360.037 276.832 368.802 283.783C377.566 290.734 388.295 294.209 400.988 294.209C413.681 294.209 424.41 290.734 433.174 283.783C442.241 276.529 449.041 266.858 453.574 254.77C458.107 242.681 460.374 228.779 460.374 213.064C460.374 197.046 458.107 182.993 453.574 170.904C449.041 158.815 442.241 149.295 433.174 142.344C424.41 135.393 413.681 131.918 400.988 131.918C388.295 131.918 377.566 135.393 368.802 142.344C360.037 149.295 353.237 158.815 348.402 170.904C343.869 182.993 341.602 197.046 341.602 213.064Z"
                fill="currentColor"
              />
              {/* R */}
              <path
                d="M657.857 93.8384V145.971H648.791C634.586 145.971 622.8 148.54 613.431 153.678C604.062 158.513 596.96 165.615 592.125 174.984C587.592 184.05 585.325 195.081 585.325 208.077V331.382H531.379V95.6516H585.325V136.451C588.649 128.593 593.334 121.491 599.378 115.145C605.725 108.798 613.129 103.66 621.591 99.7316C630.355 95.8028 640.177 93.8384 651.057 93.8384H657.857Z"
                fill="currentColor"
              />
              {/* D */}
              <path
                d="M834.491 297.836C827.842 308.414 818.171 317.48 805.478 325.036C792.785 332.591 778.127 336.369 761.505 336.369C740.652 336.369 722.519 330.778 707.106 319.596C691.995 308.414 680.209 293.605 671.747 275.17C663.285 256.432 659.054 235.73 659.054 213.064C659.054 190.397 663.285 169.695 671.747 150.958C680.209 132.22 691.995 117.412 707.106 106.532C722.519 95.3498 740.652 89.7588 761.505 89.7588C778.127 89.7588 792.785 93.5365 805.478 101.092C818.171 108.647 827.842 117.714 834.491 128.292V0H887.077V330.929H834.491V297.836ZM836.758 213.064C836.758 196.744 834.189 182.54 829.051 170.451C824.216 158.362 817.114 148.994 807.745 142.345C798.678 135.394 787.496 131.918 774.199 131.918C760.901 131.918 749.568 135.394 740.199 142.345C731.132 148.994 724.182 158.362 719.346 170.451C714.511 182.54 712.093 196.744 712.093 213.064C712.093 229.081 714.511 243.286 719.346 255.676C724.182 267.765 731.132 277.285 740.199 284.236C749.568 290.885 760.901 294.209 774.199 294.209C787.496 294.209 798.678 290.885 807.745 284.236C817.114 277.285 824.216 267.765 829.051 255.676C834.189 243.286 836.758 229.081 836.758 213.064Z"
                fill="currentColor"
              />
              {/* O */}
              <path
                d="M1129.67 213.064C1129.67 236.939 1124.83 258.245 1115.16 276.983C1105.79 295.418 1092.64 309.924 1075.72 320.502C1058.8 331.08 1039.3 336.368 1017.24 336.368C995.481 336.368 976.139 331.08 959.215 320.502C942.291 309.924 928.993 295.418 919.322 276.983C909.651 258.245 904.816 236.939 904.816 213.064C904.816 188.886 909.651 167.58 919.322 149.144C928.993 130.709 942.291 116.203 959.215 105.625C976.139 95.0474 995.481 89.7585 1017.24 89.7585C1039.3 89.7585 1058.8 95.0474 1075.72 105.625C1092.64 116.203 1105.79 130.709 1115.16 149.144C1124.83 167.58 1129.67 188.886 1129.67 213.064ZM957.855 213.064C957.855 228.779 960.122 242.832 964.655 255.223C969.49 267.312 976.29 276.832 985.055 283.783C993.819 290.734 1004.55 294.209 1017.24 294.209C1029.93 294.209 1040.66 290.734 1049.43 283.783C1058.49 276.529 1065.29 266.858 1069.83 254.77C1074.36 242.681 1076.63 228.779 1076.63 213.064C1076.63 197.046 1074.36 182.993 1069.83 170.904C1065.29 158.815 1058.49 149.295 1049.43 142.344C1040.66 135.393 1029.93 131.918 1017.24 131.918C1004.55 131.918 993.819 135.393 985.055 142.344C976.29 149.295 969.49 158.815 964.655 170.904C960.122 182.993 957.855 197.046 957.855 213.064Z"
                fill="currentColor"
              />
              {/* S */}
              <path
                d="M1137.72 256.13H1189.85C1191.36 267.916 1196.8 277.587 1206.17 285.143C1215.54 292.396 1227.78 296.022 1242.89 296.022C1251.35 296.022 1258.91 294.814 1265.56 292.396C1272.51 289.978 1278.1 286.503 1282.33 281.969C1286.56 277.436 1288.68 271.845 1288.68 265.196C1288.68 258.245 1286.56 252.654 1282.33 248.423C1278.4 244.192 1271.6 241.019 1261.93 238.903L1204.36 226.663C1193.48 224.246 1183.5 220.77 1174.44 216.237C1165.67 211.401 1158.57 204.904 1153.13 196.744C1147.99 188.282 1145.42 177.553 1145.42 164.558C1145.42 150.958 1149.2 138.567 1156.76 127.385C1164.61 115.9 1175.49 106.834 1189.4 100.185C1203.6 93.234 1219.92 89.7585 1238.36 89.7585C1258.3 89.7585 1275.38 93.0829 1289.58 99.7317C1303.79 106.078 1314.97 115.145 1323.13 126.931C1331.29 138.416 1335.97 151.713 1337.18 166.824H1285.96C1284.75 156.247 1280.06 147.482 1271.9 140.531C1263.74 133.58 1252.56 130.105 1238.36 130.105C1225.97 130.105 1215.84 132.976 1207.98 138.718C1200.13 144.46 1196.2 151.713 1196.2 160.478C1196.2 167.126 1198.16 172.415 1202.09 176.344C1206.32 179.971 1212.21 182.539 1219.77 184.051L1279.61 196.744C1299.25 200.673 1314.21 208.077 1324.49 218.957C1334.76 229.837 1339.9 243.739 1339.9 260.663C1339.9 276.076 1335.52 289.525 1326.75 301.009C1318.29 312.191 1306.66 320.955 1291.85 327.302C1277.34 333.346 1261.02 336.368 1242.89 336.368C1221.73 336.368 1203.45 332.893 1188.04 325.942C1172.93 318.689 1160.99 309.018 1152.22 296.929C1143.76 284.84 1138.93 271.24 1137.72 256.13Z"
                fill="currentColor"
              />
              {/* T */}
              <path
                d="M1374.53 275.623V138.265H1348.24V95.1988H1374.53V36.7196H1426.67V95.1988H1472V138.265H1426.67V268.37C1426.67 275.623 1428.18 280.761 1431.2 283.783C1434.52 286.503 1439.66 287.863 1446.61 287.863H1472V330.929H1433.01C1414.58 330.929 1400.22 326.547 1389.95 317.782C1379.67 308.716 1374.53 294.663 1374.53 275.623Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
};
