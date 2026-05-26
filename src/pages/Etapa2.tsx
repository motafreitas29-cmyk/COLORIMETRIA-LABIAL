interface Props { onNext: () => void; }

export default function Etapa2({ onNext }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0a0a] via-[#1a080d] to-[#0d0a0a] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full mx-auto">

        <div className="text-center mb-8">
          <span className="inline-block bg-[#C4424A]/20 border border-[#C4424A]/40 text-[#E8A87C] text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest">
            🔥 ETAPA 2 DE 3
          </span>
          <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-6">
            A colorimetria é o que separa as profissionais que cobram mais —{' '}
            <span className="text-[#E8A87C]">das que dependem de sorte em cada atendimento.</span>
          </h1>
        </div>

        <div className="bg-[#1a080d] border border-[#C4424A]/20 rounded-2xl p-6 mb-8 text-[#d0c8b8] text-sm sm:text-base leading-relaxed space-y-4">
          <p>Você aplica o procedimento com técnica impecável…</p>
          <p>Mas na hora de escolher o pigmento, <strong className="text-white">fica no achismo — e o resultado pode surpreender (pra mal).</strong></p>
          <p>O pigmento oxida diferente em cada pele. O que fica lindo em uma cliente, vira amarelo ou roxo em outra.</p>
          <p>E sem saber o porquê, você não consegue corrigir — nem explicar para a cliente o que aconteceu.</p>
          <div className="border-t border-[#C4424A]/20 pt-4">
            <p>A solução não é fazer mais cursos de técnica.</p>
            <p className="text-white font-bold text-lg mt-2">É entender a teoria das cores aplicada ao lábio.</p>
          </div>
          <p>E esse guia foi criado exatamente pra isso: te dar <span className="text-[#E8A87C] font-bold">clareza, segurança e resultado previsível</span> em cada atendimento.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {[
            { icon: '🎯', text: 'Pigmento certo na primeira aplicação' },
            { icon: '💰', text: 'Justificativa para cobrar mais' },
            { icon: '💋', text: 'Resultado que a cliente volta a mostrar' },
          ].map((item, i) => (
            <div key={i} className="bg-[#C4424A]/10 border border-[#C4424A]/30 rounded-xl p-4 text-center">
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="text-white text-sm font-semibold">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1a080d] border-2 border-[#C4424A]/40 rounded-2xl p-6 mb-8 text-center">
          <p className="text-white text-lg sm:text-xl font-bold leading-snug">
            Se você pudesse saber exatamente qual pigmento usar para cada cliente, seu atendimento mudaria?
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-[#C4424A] to-[#E8A87C] text-white font-black py-5 px-8 rounded-full text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(196,66,74,0.4)]"
          >
            💋 Sim! Quero dominar isso agora →
          </button>
        </div>

      </div>
    </div>
  );
}
