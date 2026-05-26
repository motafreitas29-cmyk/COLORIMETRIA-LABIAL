import { useState, useEffect } from 'react';
import Etapa1 from './pages/Etapa1';
import Etapa2 from './pages/Etapa2';
import Etapa3 from './pages/Etapa3';

export default function App() {
  const [etapa, setEtapa] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [etapa]);

  return (
    <div className="min-h-screen bg-[#0d0a0a]">
      {etapa === 1 && <Etapa1 onNext={() => setEtapa(2)} />}
      {etapa === 2 && <Etapa2 onNext={() => setEtapa(3)} />}
      {etapa === 3 && <Etapa3 />}
    </div>
  );
}
