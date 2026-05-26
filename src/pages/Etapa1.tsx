interface Props { onNext: () => void; }

export default function Etapa1({ onNext }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0a0a] via-[#1a080d] to-[#0d0a0a] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full mx-auto">

        <div className="text-center mb-8">
          <span className="inline-block bg-[#C4424A]/20 border border-[#C4424A]/40 text-[#E8A87C] text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest">
            💋 ETAPA 1 DE 3 — PARA MICROPIGMENTADORAS
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-4">
            Pare de errar na escolha do pigmento labial — domine a colorimetria e{' '}
            <span className="text-[#E8A87C]">atenda com confiança em cada procedimento.</span>
          </h1>
          <p className="text-[#d0c8b8] text-base sm:text-lg leading-relaxed">
            Sem tentativa e erro, sem retrabalho, sem constrangimento com a cliente.<br /><br />
            Com o <strong className="text-white">Guia Definitivo da Colorimetria Labial</strong>, você aprende a escolher o pigmento certo para cada tom de pele — e passa a cobrar mais pelo mesmo procedimento.
          </p>
        </div>

        <div className="mb-8 rounded-2xl overflow-hidden border border-[#C4424A]/30 shadow-[0_0_30px_rgba(196,66,74,0.15)]">
          <img
            src="https://i.postimg.cc/PJPGL7rk/a9dd8ffc-acd5-48bf-bed0-484914e1fe7d-(1).png"
            alt="Guia Definitivo da Colorimetria Labial"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="bg-[#1a080d] border border-[#C4424A]/20 rounded-2xl p-6 mb-8 space-y-3">
          {[
            'Chega de misturar pigmento e errar a tonalidade',
            'Chega de não saber corrigir cores oxidadas',
            'Chega de perder cliente por resultado insatisfatório',
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-red-500 text-lg">❌</span>
              <p className="text-[#d0c8b8] text-sm sm:text-base">{t}</p>
            </div>
          ))}
          <div className="border-t border-[#C4424A]/20 pt-4 mt-2">
            <p className="text-white font-semibold text-center text-sm sm:text-base">
              Agora é sobre atender com <span className="text-[#E8A87C]">precisão, teoria e resultado garantido.</span>
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[#d0c8b8] text-base mb-5 font-medium">Quer descobrir o que está te impedindo? 👇</p>
          <button
            onClick={onNext}
            className="w-full sm:w-auto bg-gradient-to-r from-[#C4424A] to-[#E8A87C] text-white font-black py-5 px-12 rounded-full text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(196,66,74,0.4)]"
          >
            Quero descobrir agora →
          </button>
        </div>

      </div>
    </div>
  );
}
