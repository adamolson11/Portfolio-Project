export default function BackgroundOrbs() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-500/20 to-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-violet-500/20 to-blue-500/10 blur-3xl" />
    </div>
  );
}