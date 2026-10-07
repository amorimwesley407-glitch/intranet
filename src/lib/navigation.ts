export type IntranetScreen = 'inicio' | 'comunicados' | 'documentos' | 'rh';

export function navigateFromSidebar(label: string) {
  let screen: IntranetScreen | undefined;

  if (label.startsWith('In')) screen = 'inicio';
  else if (label.includes('Not') || label.includes('Comunicados')) screen = 'comunicados';
  else if (label.includes('Documentos')) screen = 'documentos';
  else if (label === 'RH') screen = 'rh';

  if (screen) window.dispatchEvent(new CustomEvent<IntranetScreen>('intranet:navigate', { detail: screen }));
}
