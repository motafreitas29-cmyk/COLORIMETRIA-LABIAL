import { useState, useEffect } from 'react';
import { Shield, ChevronDown, ChevronUp, CheckCircle2, Star, Clock } from 'lucide-react';

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

const FAQ = [
  { q: 'Preciso ter conhecimento prévio em colorimetria?', a: 'Não. O guia começa do zero, com linguagem simples e aplicada diretamente à micropigmentação labial.' },
  { q: 'É um vídeo ou material em PDF?', a: 'É um guia digital em PDF — você acessa na hora, lê no celular, tablet ou computador.' },
  { q: 'Em quanto tempo recebo o material?', a: 'O acesso é imediato. Assim que o pagamento for confirmado, você já pode baixar.' },
  { q: 'Serve para quem está começando?', a: 'Sim! Foi criado especialmente para micropigmentadoras que querem parar de errar na escolha de pigmentos.' },
  { q: 'E se eu não gostar?', a: 'Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor sem perguntas.' },
];

const CONTEUDO = [
  { emoji: '🎨', titulo: 'Teoria das Cores aplicada ao lábio' },
  { emoji: '💋', titulo: 'Classificação dos tons e subtons labiais' },
  { emoji: '🔬', titulo: 'Oxidação e correção de pigmentos' },
  { emoji: '📊', titulo: 'Tabela de pigmentos por tipo de pele' },
  { emoji: '⚗️', titulo: 'Misturas e neutralização de cores' },
  { emoji: '✅', titulo: 'Protocolo de diagnóstico por cliente' },
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
      <Clock className="w-4 h-4 text-red-400 flex-shrink-0" />
      <span className="text-red-300 text-sm font-bold">
        Oferta expira em: <span className="text-white font-black tabular-nums">{String(time.m).padStart(2, '0')}:{String(time.s).padStart(2, '0')}</span>
      </span>
    </div>
  );
}

export default function Etapa3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0a0a] via-[#1a080d] to-[#0d0a0a] text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest animate-pulse">
            💋 ÚLTIMA ETAPA — OFERTA ESPECIAL
          </span>
          <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3">
            Você está a <span className="text-[#E8A87C]">um passo</span> de dominar a colorimetria labial{' '}
            e nunca mais errar na escolha do pigmento.
          </h1>
          <p className="text-[#d0c8b8] text-sm">Veja tudo que você recebe agora 👇</p>
        </div>

        {/* Video */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-[#C4424A]/30 shadow-[0_0_30px_rgba(196,66,74,0.15)] max-w-xs mx-auto">
          <lite-vsl id="cmplz6gcy000lljrd34g94xq1" base="https://hostplayvideos.vercel.app" aspect="9/16"></lite-vsl>
        </div>

        {/* Conteúdo */}
        <div className="bg-[#1a080d] border-2 border-[#C4424A]/50 rounded-2xl p-6 mb-8">
          <h2 className="text-white font-black text-center text-lg mb-4">O que está incluído no guia:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {CONTEUDO.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl flex-shrink-0">{item.emoji}</span>
                <span className="text-[#d0c8b8] text-sm font-medium">{item.titulo}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[#d0c8b8] text-xs border-t border-[#C4424A]/20 pt-4">
            📄 Formato digital (PDF) · Acesso imediato · Leia no celular ou computador
          </p>
        </div>

        {/* Depoimentos */}
        <div className="space-y-3 mb-8">
          {[
            { nome: 'Jéssica M.', txt: 'Finalmente entendi por que meus pigmentos oxidavam estranho. Mudou minha abordagem completamente!' },
            { nome: 'Camila R.', txt: 'Parei de depender de tentativa e erro. Agora consigo explicar qual tom vamos usar e por quê.' },
          ].map((d, i) => (
            <div key={i} className="bg-[#1a080d] border border-[#C4424A]/20 rounded-xl p-4">
              <div className="flex gap-1 mb-2">{[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 text-[#E8A87C] fill-[#E8A87C]" />)}</div>
              <p className="text-[#d0c8b8] text-sm italic mb-2">"{d.txt}"</p>
              <p className="text-white font-bold text-xs">— {d.nome}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h3 className="text-white font-black text-center text-base mb-4">Ainda tem dúvidas?</h3>
          <div className="space-y-2">
            {FAQ.map((item, i) => <FAQItem key={i} q={`${i + 1}️⃣ ${item.q}`} a={item.a} />)}
          </div>
        </div>

        {/* Oferta */}
        <div className="bg-[#1a080d] border-2 border-[#C4424A] rounded-2xl p-8 text-center shadow-[0_0_40px_rgba(196,66,74,0.2)]">
          <Countdown />
          <p className="text-[#d0c8b8] text-xs mb-1 uppercase tracking-widest">📄 PDF Digital · Acesso imediato · Pagamento único</p>
          <div className="mb-1">
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
            className="block w-full bg-gradient-to-r from-[#C4424A] to-[#E8A87C] text-white font-black py-5 rounded-full text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(196,66,74,0.6)] mb-3"
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

      </div>
    </div>
  );
}
