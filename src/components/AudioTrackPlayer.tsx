import { useRef, useState, useEffect } from "react";
import { Mic, X, Check } from "lucide-react";

const TRACKS = [
  { id: "original", label: "Original EN",       sub: "SOURCE",      icon: Mic,   bad: false, src: "/audio/original.mp3" },
  { id: "auto",     label: "YouTube Auto-Dub",  sub: "BAD QUALITY", icon: X,     bad: true,  src: "/audio/auto-dub.mp3" },
  { id: "premium",  label: "VoxLocalize Dub",   sub: "PREMIUM",     icon: Check, bad: false, src: "/audio/premium-dub.mp3" },
];

const fmt = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export function AudioTrackPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [active, setActive]           = useState("original");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration]       = useState(0);
  const [playing, setPlaying]         = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) return;

    const onPlay  = () => { audio.play(); setPlaying(true); };
    const onPause = () => { audio.pause(); setPlaying(false); };
    const onSeek  = () => { audio.currentTime = video.currentTime; };
    const onTime  = () => setCurrentTime(video.currentTime);
    const onMeta  = () => setDuration(video.duration);

    video.addEventListener("play",           onPlay);
    video.addEventListener("pause",          onPause);
    video.addEventListener("seeked",         onSeek);
    video.addEventListener("timeupdate",     onTime);
    video.addEventListener("loadedmetadata", onMeta);

    return () => {
      video.removeEventListener("play",           onPlay);
      video.removeEventListener("pause",          onPause);
      video.removeEventListener("seeked",         onSeek);
      video.removeEventListener("timeupdate",     onTime);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, []);

  const switchTrack = (trackId: string) => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) return;

    const wasPlaying = !video.paused;
    const time = video.currentTime;
    setActive(trackId);

    requestAnimationFrame(() => {
      audio.currentTime = time;
      if (wasPlaying) audio.play();
    });
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.paused ? video.play() : video.pause();
  };

  const activeSrc = TRACKS.find(t => t.id === active)?.src ?? "";

  return (
    <div className="rounded-2xl border border-border bg-surface overflow-hidden shadow-xl shadow-black/40">
      {/* Видео */}
      <div className="relative cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src="/video/demo.mp4"
          muted
          playsInline
          className="w-full aspect-video object-cover"
        />
        {/* Кнопка play поверх видео */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-white ml-1" />
            </div>
          </div>
        )}
      </div>

      {/* Скрытый аудио */}
      <audio ref={audioRef} src={activeSrc} preload="auto" />

      {/* Прогресс */}
      <div className="px-4 py-2 flex items-center gap-3 text-xs text-muted-foreground border-t border-border">
        <span className="tabular-nums">{fmt(currentTime)} / {fmt(duration)}</span>
        <input
          type="range"
          min={0}
          max={duration || 1}
          value={currentTime}
          onChange={e => {
            const t = Number(e.target.value);
            if (videoRef.current) videoRef.current.currentTime = t;
            if (audioRef.current) audioRef.current.currentTime = t;
          }}
          className="flex-1 accent-primary h-1 cursor-pointer"
        />
        <span className="ml-auto">Native Creator Voice</span>
      </div>

      {/* Кнопки дорожек */}
      <div className="grid grid-cols-3 border-t border-border">
        {TRACKS.map(({ id, label, sub, icon: Icon, bad }) => (
          <button
            key={id}
            onClick={() => switchTrack(id)}
            className={`flex flex-col items-center gap-0.5 py-3 text-xs transition-colors border-r last:border-r-0 border-border
              ${active === id ? "bg-surface-elevated" : "hover:bg-surface-elevated/50"}
              ${bad ? "text-red-400" : active === id ? "text-foreground" : "text-muted-foreground"}
            `}
          >
            <span className="flex items-center gap-1 font-semibold">
              <Icon className="w-3 h-3" /> {label}
            </span>
            <span className="text-[10px] opacity-60">{sub}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
