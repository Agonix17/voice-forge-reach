import { useState, useRef, useEffect } from "react";
import { Check, X, Mic, Play, Pause } from "lucide-react";
import { useT } from "@/lib/i18n";

type Mode = "original" | "auto" | "vox";

const MODE_STYLES: Record<Mode, { waveColor: string; ringClass: string; badgeClass: string; qualityClass: string }> = {
  original: {
    waveColor: "var(--muted-foreground)",
    ringClass: "ring-border",
    badgeClass: "bg-surface-elevated text-muted-foreground border-border",
    qualityClass: "text-muted-foreground",
  },
  auto: {
    waveColor: "var(--destructive)",
    ringClass: "ring-destructive/50",
    badgeClass: "bg-destructive/15 text-destructive border-destructive/40",
    qualityClass: "text-destructive",
  },
  vox: {
    waveColor: "var(--primary)",
    ringClass: "ring-primary/60",
    badgeClass: "bg-primary/15 text-primary border-primary/40",
    qualityClass: "text-primary",
  },
};

const AUDIO_SRCS: Record<Mode, string> = {
  original: "/audio/original.mp3",
  auto: "/audio/auto-dub.mp3",
  vox: "/audio/premium-dub.mp3",
};

const fmt = (s: number) => {
  if (!isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
};

export function Hero() {
  const { t } = useT();
  const [mode, setMode] = useState<Mode>("original");
  const s = MODE_STYLES[mode];

  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) return;
    audio.volume = 0.8;

    const onPlay = () => { audio.play().catch(() => {}); setPlaying(true); };
    const onPause = () => { audio.pause(); setPlaying(false); };
    const onSeek = () => { audio.currentTime = video.currentTime; };
    const onEnded = () => { audio.pause(); setPlaying(false); };
    const onTime = () => setCurrentTime(video.currentTime);
    const onMeta = () => setDuration(video.duration || 0);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("seeked", onSeek);
    video.addEventListener("ended", onEnded);
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("loadedmetadata", onMeta);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("seeked", onSeek);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, []);

  const switchTrack = (k: Mode) => {
    const video = videoRef.current;
    const audio = audioRef.current;
    const wasPlaying = video ? !video.paused : false;
    const time = video ? video.currentTime : 0;
    setMode(k);
    requestAnimationFrame(() => {
      const a = audioRef.current;
      if (!a) return;
      a.volume = 0.8;
      a.currentTime = time;
      if (wasPlaying) a.play().catch(() => {});
    });
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const onScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = Number(e.target.value);
    if (videoRef.current) videoRef.current.currentTime = t;
    if (audioRef.current) audioRef.current.currentTime = t;
    setCurrentTime(t);
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" style={{ animation: "var(--animate-fade-up)" }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              {t("hero.badge")}
            </div>

            <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              {t("hero.title1")}
              <br />
              <span className="gradient-text">{t("hero.title2a")}</span> {t("hero.title2b")}
              <br />
              <span className="text-foreground">{t("hero.title3")}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 sm:px-8 py-4 min-h-[48px] text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
                {t("hero.ctaPrimary")}
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-6 sm:px-8 py-4 min-h-[48px] text-base font-semibold text-foreground hover:bg-surface-elevated transition-colors">
                {t("hero.ctaSecondary")}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-4 sm:gap-8 pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">40M+</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{t("hero.stat1")}</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">+30%</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{t("hero.stat2")}</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">72h</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{t("hero.stat3")}</div>
              </div>
            </div>
          </div>

          <div className="relative" style={{ animation: "var(--animate-scale-in)" }}>
            <div className="mb-2 text-center text-xs text-muted-foreground">{t("hero.playerHint")}</div>
            <div className={`relative rounded-xl overflow-hidden bg-surface ring-1 transition-all duration-500 ${s.ringClass}`}>
              <div className="aspect-video relative bg-surface-elevated flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <video
                  ref={videoRef}
                  src="/video/demo.mp4"
                  muted
                  playsInline
                  loop
                  className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                />
                <audio ref={audioRef} src={AUDIO_SRCS[mode]} preload="auto" loop />

                {!playing && (
                  <button
                    type="button"
                    aria-label="Play"
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer bg-black/20 hover:bg-black/30 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </button>
                )}

                <div className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[10px] font-bold uppercase tracking-wider transition-all duration-300 z-20 ${s.badgeClass}`}>
                  {mode === "vox" && <Check className="w-3 h-3" />}
                  {mode === "auto" && <X className="w-3 h-3" />}
                  {mode === "original" && <Mic className="w-3 h-3" />}
                  {t(`mode.${mode}.badge`)}
                </div>

                <div className="absolute top-4 right-4 hidden md:block z-20">
                  <span key={`v-${mode}`} className={`text-[10px] font-bold uppercase tracking-wider ${s.qualityClass}`} style={{ animation: "var(--animate-fade-in)" }}>
                    {t(`mode.${mode}.vibe`)}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border z-10">
                  <div className="h-full transition-[width] duration-150" style={{ width: `${progressPct}%`, backgroundColor: s.waveColor }} />
                </div>
              </div>


              <div className="px-4 sm:px-5 py-3 border-t border-border flex items-center gap-3 text-[11px] sm:text-xs">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={playing ? "Pause" : "Play"}
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-surface-elevated hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" fill="currentColor" />}
                </button>
                <span className="font-mono text-muted-foreground flex-shrink-0 tabular-nums">{fmt(currentTime)} / {fmt(duration)}</span>
                <input
                  type="range"
                  min={0}
                  max={duration || 0}
                  step={0.01}
                  value={currentTime}
                  onChange={onScrub}
                  aria-label="Seek"
                  className="flex-1 h-1 accent-primary cursor-pointer"
                />
                <span key={`q-${mode}`} className={`font-semibold text-right flex-shrink-0 hidden md:inline ${s.qualityClass}`} style={{ animation: "var(--animate-fade-in)" }}>{t(`mode.${mode}.quality`)}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 p-3 border-t border-border">
                {(Object.keys(MODE_STYLES) as Mode[]).map((k) => {
                  const active = mode === k;
                  const isVox = k === "vox";
                  const isAuto = k === "auto";
                  return (
                    <button
                      key={k}
                      onClick={() => switchTrack(k)}
                      aria-pressed={active}
                      className={`group relative flex flex-col items-center justify-center gap-1 px-2 sm:px-3 py-3 min-h-[56px] rounded-md text-[11px] sm:text-xs font-semibold transition-colors ${
                        active
                          ? isVox
                            ? "bg-primary text-primary-foreground"
                            : isAuto
                            ? "bg-destructive/15 text-destructive border border-destructive/40"
                            : "bg-surface-elevated text-foreground border border-border"
                          : isAuto
                          ? "text-destructive/70 hover:text-destructive hover:bg-destructive/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                      }`}
                    >
                      <span className="flex items-center gap-1 sm:gap-1.5 text-center leading-tight">
                        {isVox && <Check className="w-3.5 h-3.5 flex-shrink-0" />}
                        {isAuto && <X className="w-3.5 h-3.5 flex-shrink-0" />}
                        {k === "original" && <Mic className="w-3.5 h-3.5 flex-shrink-0" />}
                        <span className="hidden sm:inline">{t(`mode.${k}.label`)}</span>
                        <span className="sm:hidden">{t(`mode.${k}.short`)}</span>
                      </span>
                      <span className="text-[9px] uppercase tracking-wider opacity-80">
                        {t(`mode.${k}.badge`)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
