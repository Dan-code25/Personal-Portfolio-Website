export default function Terminal() {
  return (
    <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-2xl overflow-hidden border border-white-darker transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(250,110,0,0.15)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-white-dark text-xs font-mono">
          developer.ts
        </span>
      </div>

      {/* Code */}
      <div className="bg-zinc-950 flex font-mono text-md">
        {/* Line numbers */}
        <div className="select-none px-4 py-5 text-right text-zinc-600 border-r border-zinc-800 space-y-1">
          {Array.from({ length: 14 }, (_, i) => (
            <div key={i} className="leading-relaxed">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="px-5 py-5 space-y-1">
          <div className="leading-relaxed">
            <span className="text-pink-400">const </span>
            <span className="text-normal">myName </span>
            <span className="text-white-dark">= </span>
            <span className="text-green-400">"Dan Jheniel Bringas"</span>
            <span className="text-white-dark">;</span>
          </div>

          <div className="leading-relaxed">&nbsp;</div>

          <div className="leading-relaxed">
            <span className="text-pink-400">const </span>
            <span className="text-normal">role </span>
            <span className="text-white-dark">= </span>
            <span className="text-green-400">
              "Aspiring Full-Stack Developer & Software Engineer"
            </span>
            <span className="text-white-dark">;</span>
          </div>

          <div className="leading-relaxed">&nbsp;</div>

          <div className="leading-relaxed">
            <span className="text-pink-400">const </span>
            <span className="text-normal">education </span>
            <span className="text-white-dark">= {"{"}</span>
          </div>

          <div className="leading-relaxed pl-8">
            <span className="text-normal">degree</span>
            <span className="text-white-dark">: </span>
            <span className="text-green-400">"BS Computer Science"</span>
            <span className="text-white-dark">,</span>
          </div>

          <div className="leading-relaxed pl-8">
            <span className="text-normal">school</span>
            <span className="text-white-dark">: </span>
            <span className="text-green-400">
              "Technological University of the Philippines - Manila"
            </span>
            <span className="text-white-dark">,</span>
          </div>

          <div className="leading-relaxed">
            <span className="text-white-dark">{"};"}</span>
          </div>

          <div className="leading-relaxed">&nbsp;</div>

          <div className="leading-relaxed">
            <span className="text-pink-400">const </span>
            <span className="text-normal">passion </span>
            <span className="text-white-dark">= </span>
            <span className="text-green-400">
              "I am passionate about learning and creating innovative solutions
              through technology. I have experience in web development, mobile
              development, software engineering, and problem-solving. I am eager
              to contribute my skills and knowledge to a dynamic team and
              continue growing as a developer."
            </span>
            <span className="text-white-dark">;</span>
          </div>

          <div className="leading-relaxed">&nbsp;</div>
        </div>
      </div>
    </div>
  );
}
