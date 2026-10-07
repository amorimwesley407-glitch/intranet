import { useEffect, useState } from 'react';
import { FacIntranetDashboard } from './components/generated/FacIntranetDashboard';
import { FacCommunicados } from './components/generated/FacCommunicados';
import { FacDocumentos } from './components/generated/FacDocumentos';
import { FacRhPortal } from './components/generated/FacRhPortal';
import type { IntranetScreen } from './lib/navigation';

const screens = {
  inicio: FacIntranetDashboard,
  comunicados: FacCommunicados,
  documentos: FacDocumentos,
  rh: FacRhPortal,
};

function App() {
  const [activeScreen, setActiveScreen] = useState<IntranetScreen>('inicio');
  const Screen = screens[activeScreen];

  useEffect(() => {
    const handleNavigation = (event: Event) => {
      setActiveScreen((event as CustomEvent<IntranetScreen>).detail);
    };

    window.addEventListener('intranet:navigate', handleNavigation);
    return () => window.removeEventListener('intranet:navigate', handleNavigation);
  }, []);

  return <Screen />;
}

export default App;
