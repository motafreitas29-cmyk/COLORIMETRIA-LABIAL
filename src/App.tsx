import { useState, useEffect } from 'react';
import { Shield, CheckCircle2, ChevronDown, ChevronUp, Star } from 'lucide-react';

const PAYMENT_LINK = "https://";

function playDing() {
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const gain = ctx.createGain();
  gain.connect(ctx.destination);
  [523, 659, 784, 1046].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    osc.connect(gain);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
    gain.gain.setValueAtTime(0.25, ctx.currentTime + i * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.3);
    osc.start(ctx.currentTime + i * 0.08);
    osc.stop(ctx.currentTime + i * 0.08 + 0.3);
  });
}

const dores = [
  'Misturar pigmento e errar a tonalidade da cliente',
  'Não saber corrigir cores oxidadas ou amareladas',
  'Perder clientes por resultado insatisfatório',
  'Reprovar em avaliações por falta de teoria de cor',
  'Depender de tentativa e erro em cada atendimento',
];

const conteudo = [
  { emoji: '🎨', titulo: 'Fundamentos da Teoria das Cores', desc: 'Círculo cromático, cores primárias, secundárias e terciárias aplicadas à micropigmentação labial.' },
  { emoji: '💋', titulo: 'Classificação dos Tons de Lábio', desc: 'Como identificar o tom natural da cliente e escolher o pigmento certo desde a primeira aplicação.' },
  { emoji: '🔬', titulo: 'Oxidação e Correção de Cores', desc: 'Por que os pigmentos mudam de cor e como corrigir tons indesejados com precisão.' },
  { emoji: '📊', titulo: 'Guia de Pigmentos por Subtom', desc: 'Tabela completa: qual pigmento usar para cada tipo de pele — frias, quentes e neutras.' },
  { emoji: '⚗️', titulo: 'Mistura e Neutralização', desc: 'Como misturar pigmentos para criar tons personalizados e neutralizar cores problemáticas.' },
  { emoji: '✅', titulo: 'Protocolo de Atendimento por Tom', desc: 'Passo a passo do diagnóstico à escolha do pigmento ideal para cada cliente.' },
];

const faq = [
  { q: 'Preciso ter conhecimento prévio em colorimetria?', a: 'Não. O guia começa do zero, com linguagem simples e aplicada diretamente à micropigmentação labial.' },
  { q: 'É um vídeo ou material em PDF?', a: 'É um guia digital em PDF — você acessa na hora, lê no celular, tablet ou computador.' },
  { q: 'Em quanto tempo recebo o material?', a: 'O acesso é imediato. Assim que o pagamento for confirmado, você já pode baixar.' },
  { q: 'Serve para quem está começando?', a: 'Sim! Foi criado especialmente para micropigmentadoras que querem parar de errar na escolha de pigmentos.' },
  { q: 'E se eu não entender alguma parte?', a: 'O conteúdo foi criado de forma didática e visual. Mas se tiver dúvidas, é só entrar em contato.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#C4424A]/20 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 text-left hover:bg-[#C4424A]/5 transition-colors">
        <span className="text-white font-semibold text-sm sm:text-base pr-4">{q}</span>
        {open ? <ChevronUp className="text-[#E8A87C] w-5 h-5 flex-shrink-0" /> : <ChevronDown className="text-[#E8A87C] w-5 h-5 flex-shrink-0" />}
      </button>
      {open && <div className="px-4 pb-4 text-[#d0c8b8] text-sm leading-relaxed border-t border-[#C4424A]/10 pt-3">{a}</div>}
    </div>
  );
}

function Countdown() {
  const [time, setTime] = useState({ m: 14, s: 59 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { m: prev.m - 1, s: 59 };
        return { m: 14, s: 59 };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex items-center justify-center gap-2 bg-red-900/30 border border-red-500/40 rounded-xl px-4 py-3 mb-6">
      <span className="text-red-300 text-sm font-bold">
        ⏰ Oferta expira em: <span className="text-white font-black tabular-nums">{String(time.m).padStart(2, '0')}:{String(time.s).padStart(2, '0')}</span>
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0a0a] via-[#1a0a0d] to-[#0d0a0a] text-white">

      {/* HERO */}
      <section className="px-4 py-14 text-center max-w-2xl mx-auto">
        <span className="inline-block bg-[#C4424A]/20 border border-[#C4424A]/40 text-[#E8A87C] text-xs font-bold px-4 py-1 rounded-full mb-5 tracking-widest">
          💋 PARA MICROPIGMENTADORAS
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5">
          Pare de errar na escolha do pigmento labial —{' '}
          <span className="text-[#E8A87C]">domine a colorimetria de uma vez por todas.</span>
        </h1>
        <p className="text-[#d0c8b8] text-base sm:text-lg leading-relaxed mb-8">
          O <strong className="text-white">Guia Definitivo da Colorimetria Labial</strong> é o material que vai te fazer escolher o pigmento certo para cada cliente — sem tentativa e erro, sem retrabalho e sem constrangimento.
        </p>
        <a
          href={PAYMENT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playDing}
          className="inline-block bg-gradient-to-r from-[#C4424A] to-[#E8A87C] text-white font-black py-5 px-10 rounded-full text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(196,66,74,0.5)] mb-4"
        >
          💋 QUERO O GUIA POR R$17,00
        </a>
        <p className="text-[#888] text-xs">📄 PDF Digital · Acesso imediato · Pagamento único</p>
      </section>

      {/* DORES */}
      <section className="px-4 py-12 max-w-2xl mx-auto">
        <div className="bg-[#1a0a0d] border border-[#C4424A]/20 rounded-2xl p-6 mb-4">
          <h2 className="text-white font-black text-xl text-center mb-6">Você já passou por isso?</h2>
          <div className="space-y-3">
            {dores.map((d, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-red-500 text-lg flex-shrink-0">❌</span>
                <p className="text-[#d0c8b8] text-sm sm:text-base">{d}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-[#C4424A]/20 pt-5 mt-5 text-center">
            <p className="text-white font-bold text-base">
              Isso não é falta de habilidade — é falta de <span className="text-[#E8A87C]">teoria de cor aplicada.</span>
            </p>
            <p className="text-[#d0c8b8] text-sm mt-2">E esse guia resolve isso de vez.</p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="px-4 py-12 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black">O que você vai aprender:</h2>
          <p className="text-[#d0c8b8] text-sm mt-2">6 módulos completos — do básico ao avançado</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {conteudo.map((item, i) => (
            <div key={i} className="bg-[#1a0a0d] border border-[#C4424A]/20 rounded-2xl p-5 hover:border-[#E8A87C]/40 transition-colors">
              <p className="text-3xl mb-3">{item.emoji}</p>
              <h3 className="text-white font-bold text-sm mb-2">{item.titulo}</h3>
              <p className="text-[#d0c8b8] text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playDing}
            className="inline-block bg-gradient-to-r from-[#C4424A] to-[#E8A87C] text-white font-black py-5 px-10 rounded-full text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(196,66,74,0.4)]"
          >
            💋 QUERO APRENDER AGORA
          </a>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="px-4 py-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-black text-center mb-6">O que dizem as alunas:</h2>
        <div className="space-y-4">
          {[
            { nome: 'Jéssica M.', txt: 'Finalmente entendi por que meus pigmentos oxidavam estranho. O guia mudou completamente minha abordagem no atendimento.', stars: 5 },
            { nome: 'Camila R.', txt: 'Parei de depender de tentativa e erro. Agora consigo explicar para a cliente qual tom vamos usar e por quê. Profissionalismo total.', stars: 5 },
            { nome: 'Patrícia L.', txt: 'Valia muito mais do que R$17. Conteúdo de nível de curso pago por um valor simbólico. Recomendo para todas as colegas.', stars: 5 },
          ].map((d, i) => (
            <div key={i} className="bg-[#1a0a0d] border border-[#C4424A]/20 rounded-2xl p-5">
              <div className="flex gap-1 mb-3">{[...Array(d.stars)].map((_, j) => <Star key={j} className="w-4 h-4 text-[#E8A87C] fill-[#E8A87C]" />)}</div>
              <p className="text-[#d0c8b8] text-sm italic mb-3">"{d.txt}"</p>
              <p className="text-white font-bold text-sm">— {d.nome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-black text-center mb-6">Dúvidas frequentes:</h2>
        <div className="space-y-2">
          {faq.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* OFERTA FINAL */}
      <section className="px-4 py-12 max-w-2xl mx-auto">
        <div className="bg-[#1a0a0d] border-2 border-[#C4424A] rounded-2xl p-8 text-center shadow-[0_0_40px_rgba(196,66,74,0.2)]">
          <Countdown />
          <p className="text-[#E8A87C] text-xs font-bold uppercase tracking-widest mb-2">Oferta exclusiva</p>
          <h2 className="text-white text-2xl sm:text-3xl font-black mb-2">Guia Definitivo da Colorimetria Labial</h2>
          <p className="text-[#888] text-xs mb-4">📄 PDF Digital · Acesso imediato · Para micropigmentadoras</p>
          <div className="mb-2">
            <p className="text-[#888] text-sm line-through">De R$97,00</p>
            <p className="text-6xl font-black text-white leading-none">
              <span className="text-2xl text-[#d0c8b8]">R$</span>17<span className="text-3xl">,00</span>
            </p>
          </div>
          <p className="text-green-400 text-xs mb-6 font-bold">⚡ 82% de desconto — só nesta página</p>
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playDing}
            className="block w-full bg-gradient-to-r from-[#C4424A] to-[#E8A87C] text-white font-black py-5 rounded-full text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(196,66,74,0.6)] mb-5"
          >
            💋 GARANTIR MEU GUIA POR R$17,00
          </a>
          <div className="flex items-center justify-center gap-4 text-xs text-[#888] flex-wrap">
            <div className="flex items-center gap-1"><Shield className="w-3 h-3" /><span>7 dias de garantia</span></div>
            <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /><span>Acesso imediato</span></div>
            <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /><span>Pagamento seguro</span></div>
          </div>
        </div>
        <p className="text-center text-[#666] text-xs mt-6">
          Micropigmentadoras que dominam colorimetria cobram <span className="text-[#E8A87C] font-semibold">até 50% mais</span> pelo mesmo procedimento.
        </p>
      </section>

    </div>
  );
}
