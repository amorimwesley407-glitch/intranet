import { useState } from 'react';
import { navigateFromSidebar } from '../../lib/navigation';
import { Archive, ArrowDownToLine, ArrowLeft, ArrowRight, Bell, BookOpen, BriefcaseBusiness, ChevronDown, ChevronRight, CircleDollarSign, ClipboardList, Download, FileSpreadsheet, FileText, FolderOpen, Heart, Home, Laptop2, Menu, MessageCircle, Newspaper, Presentation, Search, Settings, ShieldCheck, Star, Upload, Users, Wrench, X } from 'lucide-react';
type IconType = typeof FileText;
type DocumentRow = {
  name: string;
  area: string;
  type: string;
  date: string;
  size: string;
  kind: 'PDF' | 'XLSX' | 'DOCX' | 'PPTX';
};
const navItems = [{
  label: 'Início',
  icon: Home
}, {
  label: 'Notícias',
  icon: Newspaper
}, {
  label: 'Meus Processos',
  icon: Settings
}, {
  label: 'Documentos',
  icon: FolderOpen
}, {
  label: 'Sistemas',
  icon: Laptop2
}, {
  label: 'RH',
  icon: Users
}, {
  label: 'Suporte',
  icon: Wrench
}, {
  label: 'Fale Conosco',
  icon: MessageCircle
}];
const categories: {
  label: string;
  count: string;
  icon: IconType;
  green: boolean;
}[] = [{
  label: 'Manuais e Tutoriais',
  count: '23 docs',
  icon: BookOpen,
  green: false
}, {
  label: 'Políticas e Normas',
  count: '18 docs',
  icon: ShieldCheck,
  green: true
}, {
  label: 'Formulários',
  count: '31 docs',
  icon: ClipboardList,
  green: false
}, {
  label: 'Contratos e Jurídico',
  count: '16 docs',
  icon: BriefcaseBusiness,
  green: true
}, {
  label: 'Planilhas e Relatórios',
  count: '42 docs',
  icon: FileSpreadsheet,
  green: false
}, {
  label: 'Treinamentos',
  count: '27 docs',
  icon: Presentation,
  green: true
}, {
  label: 'Procedimentos Técnicos',
  count: '36 docs',
  icon: Wrench,
  green: false
}, {
  label: 'Outros Documentos',
  count: '55 docs',
  icon: Archive,
  green: true
}];
const documents: DocumentRow[] = [{
  name: 'Manual do Colaborador 2026',
  area: 'RH',
  type: 'Manual',
  date: '01/09/2026',
  size: '4,2 MB',
  kind: 'PDF'
}, {
  name: 'Planilha de Escalas — Setembro 2026',
  area: 'Operacional',
  type: 'Planilha',
  date: '28/08/2026',
  size: '1,1 MB',
  kind: 'XLSX'
}, {
  name: 'Política de Uso de Sistemas e TI',
  area: 'TI',
  type: 'Política',
  date: '25/08/2026',
  size: '890 KB',
  kind: 'DOCX'
}, {
  name: 'Apresentação Campanha Q4 — Comercial',
  area: 'Comercial',
  type: 'Apresentação',
  date: '20/08/2026',
  size: '6,7 MB',
  kind: 'PPTX'
}, {
  name: 'Procedimento de Abertura de Chamados',
  area: 'Suporte',
  type: 'Procedimento',
  date: '18/08/2026',
  size: '2,3 MB',
  kind: 'PDF'
}, {
  name: 'Contrato Modelo — Clientes Corporativos',
  area: 'Jurídico',
  type: 'Contrato',
  date: '15/08/2026',
  size: '1,8 MB',
  kind: 'DOCX'
}, {
  name: 'Indicadores Financeiros — Agosto 2026',
  area: 'Financeiro',
  type: 'Planilha',
  date: '10/08/2026',
  size: '3,4 MB',
  kind: 'XLSX'
}];
const favorites = ['Manual do Colaborador 2026', 'Política de Uso de Sistemas e TI', 'Indicadores Financeiros — Agosto 2026'];
const downloads = [{
  name: 'Manual do Colaborador 2026',
  area: 'RH',
  count: '342 downloads'
}, {
  name: 'Política de Segurança da Informação',
  area: 'TI',
  count: '286 downloads'
}, {
  name: 'Planilha de Escalas — Setembro',
  area: 'Operacional',
  count: '214 downloads'
}, {
  name: 'Guia de Benefícios FAC 2026',
  area: 'RH',
  count: '178 downloads'
}];
const fileColors: Record<DocumentRow['kind'], string> = {
  PDF: 'text-[#D44747] bg-[#FFF0F0]',
  XLSX: 'text-[#168A50] bg-[#EAF8EF]',
  DOCX: 'text-[#2673B8] bg-[#EDF5FD]',
  PPTX: 'text-[#D87925] bg-[#FFF4E9]'
};
function FacMark() {
  return <div className="flex items-center gap-3"><div className="relative flex h-12 w-[84px] items-center justify-center rounded-xl bg-[#003366]"><span className="text-[34px] font-black italic leading-none tracking-[-0.12em] text-white">FAC</span><span className="absolute -right-1 top-1 text-[18px] font-bold text-[#39B54A]">◔</span></div><p className="hidden text-[10px] font-bold uppercase leading-tight tracking-[0.1em] text-[#003366] min-[420px]:block">Tecnologia que<br />conecta pessoas</p></div>;
}
function Sidebar({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  return <aside className={`fixed inset-y-0 left-0 z-30 w-[238px] shrink-0 bg-[#003366] px-4 py-5 text-white transition-transform duration-300 lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}><div className="mb-9 flex items-center justify-between border-b border-white/15 pb-5"><div><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#63D26E]">Portal interno</p><h2 className="mt-1 text-xl font-bold">Intranet FAC</h2></div><button aria-label="Fechar menu" onClick={onClose} className="rounded-lg p-2 text-white/70 hover:bg-white/10 lg:hidden"><X size={18} /></button></div><nav aria-label="Navegação principal"><p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.17em] text-white/45">Navegação</p><ul className="space-y-1">{navItems.map(({
          label,
          icon: Icon
        }) => <li key={label}><button onClick={() => navigateFromSidebar(label)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-white/10 ${label === 'Documentos' ? 'bg-[#00A651] text-white shadow-[0_5px_16px_rgba(0,166,81,.25)]' : 'text-white/75'}`}><Icon size={18} /><span>{label}</span>{label === 'Documentos' ? <ChevronRight className="ml-auto" size={15} /> : null}</button></li>)}</ul></nav><div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.06] p-4"><div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A651]/20 text-[#65DD7B]"><ShieldCheck size={19} /></div><p className="text-xs font-semibold">Ambiente seguro</p><p className="mt-1 text-[11px] leading-relaxed text-white/55">Acesso protegido para colaboradores FAC.</p></div></aside>;
}
export function FacDocumentIcon({
  kind
}: {
  kind: DocumentRow['kind'];
}) {
  const Icon = kind === 'XLSX' ? FileSpreadsheet : kind === 'PPTX' ? Presentation : FileText;
  return <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${fileColors[kind]}`}><Icon size={18} /></span>;
}
export function FacDocumentos() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [favoriteRows, setFavoriteRows] = useState<string[]>(favorites);
  const toggleFavorite = (name: string) => setFavoriteRows(current => current.includes(name) ? current.filter(item => item !== name) : [...current, name]);
  const visibleDocuments = documents.filter(document => document.name.toLowerCase().includes(query.toLowerCase()));
  return <div className="min-h-screen bg-[#F5F6FA] text-[#16344E]"><header className="sticky top-0 z-20 flex h-[78px] items-center justify-between gap-5 border-b border-[#DDE7ED] bg-white px-4 shadow-[0_2px_12px_rgba(0,51,102,.07)] sm:px-7 lg:px-9"><div className="flex items-center gap-3"><button onClick={() => setMenuOpen(true)} aria-label="Abrir menu" className="rounded-lg p-2 text-[#003366] hover:bg-[#F0F5F8] lg:hidden"><Menu size={22} /></button><FacMark /></div><label className="relative hidden max-w-[430px] flex-1 md:block"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87A0B1]" size={17} /><input aria-label="Buscar na intranet" placeholder="O que você procura?" className="h-11 w-full rounded-xl border border-[#D9E4EA] bg-[#F7FAFC] pl-11 pr-4 text-sm outline-none focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/15" /></label><div className="flex items-center gap-3"><button aria-label="Notificações" className="relative rounded-xl p-2 text-[#527087] hover:bg-[#F0F5F8]"><Bell size={20} /><span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#00A651] ring-2 ring-white" /></button><div className="h-9 w-9 rounded-full bg-[#DDEBF1] p-[3px]"><div className="flex h-full w-full items-center justify-center rounded-full bg-[#F2B782] text-sm font-bold text-[#6B3A25]">R</div></div><div className="hidden leading-tight sm:block"><p className="text-sm font-semibold text-[#16344E]">Olá, Roberta</p><p className="mt-1 text-[11px] text-[#718999]">Comercial</p></div></div></header><div className="flex min-h-[calc(100vh-78px)]">{menuOpen ? <button aria-label="Fechar menu" onClick={() => setMenuOpen(false)} className="fixed inset-0 z-20 bg-[#00254A]/40 lg:hidden" /> : null}<Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} /><main className="min-w-0 flex-1 px-4 py-6 sm:px-7 lg:px-9 lg:py-8"><div className="mx-auto max-w-[1480px]"><div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-medium text-[#8797A3]">Início <span className="mx-1 text-[#C1CBD1]">›</span> Documentos</p><h1 className="text-2xl font-bold tracking-[-0.03em] text-[#003366] sm:text-[30px]">Biblioteca de Documentos</h1><p className="mt-2 text-sm text-[#718999]">Acesse, baixe e compartilhe documentos oficiais da FAC Telecom.</p></div><button className="flex w-fit items-center gap-2 rounded-lg bg-[#00A651] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#008D45]"><Upload size={16} /> <span>Solicitar Documento</span></button></div>
<div className="mb-6 grid grid-cols-2 gap-3 xl:grid-cols-4">{[{
              icon: FileText,
              number: '248',
              label: 'Documentos disponíveis'
            }, {
              icon: Archive,
              number: '12',
              label: 'Adicionados este mês'
            }, {
              icon: Download,
              number: '1.340',
              label: 'Downloads este mês'
            }, {
              icon: Star,
              number: '34',
              label: 'Favoritos salvos'
            }].map(({
              icon: Icon,
              number,
              label
            }) => <div key={label} className="flex items-center gap-3 rounded-xl border border-[#E3EBEF] bg-white p-4 shadow-[0_3px_12px_rgba(17,65,90,.05)]"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F7EE] text-[#00A651]"><Icon size={19} /></span><div><strong className="block text-lg leading-none text-[#003366]">{number}</strong><span className="mt-1 block text-[11px] leading-tight text-[#718999]">{label}</span></div></div>)}</div>
<section className="mb-6 rounded-2xl border border-[#E0EAEF] bg-white p-4 shadow-[0_4px_18px_rgba(17,65,90,.05)]"><div className="flex flex-col gap-3 xl:flex-row xl:items-center"><strong className="whitespace-nowrap text-sm text-[#31536A]">Filtrar por:</strong><select aria-label="Filtrar por área" className="h-10 rounded-lg border border-[#D9E4EA] bg-white px-3 text-sm text-[#526E7D] outline-none focus:border-[#00A651]"><option>Área: Todas</option><option>Comercial</option><option>TI</option><option>RH</option><option>Financeiro</option><option>Operacional</option><option>Jurídico</option><option>Administrativo</option></select><select aria-label="Filtrar por tipo" className="h-10 rounded-lg border border-[#D9E4EA] bg-white px-3 text-sm text-[#526E7D] outline-none focus:border-[#00A651]"><option>Tipo: Todos os tipos</option><option>Manual</option><option>Política</option><option>Formulário</option><option>Contrato</option><option>Procedimento</option><option>Planilha</option><option>Apresentação</option></select><select aria-label="Ordenar documentos" className="h-10 rounded-lg border border-[#D9E4EA] bg-white px-3 text-sm text-[#526E7D] outline-none focus:border-[#00A651]"><option>Mais recentes</option><option>Mais baixados</option><option>Nome A–Z</option></select><label className="relative min-w-0 flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#93A5AF]" size={16} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar documento..." className="h-10 w-full rounded-lg border border-[#D9E4EA] bg-[#F7FAFC] pl-9 pr-3 text-sm outline-none focus:border-[#00A651]" /></label><button className="h-10 rounded-lg bg-[#00A651] px-5 text-sm font-bold text-white transition hover:bg-[#008D45]">Filtrar</button></div></section>
<div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">{categories.map(({
              label,
              count,
              icon: Icon,
              green
            }) => <button key={label} className={`group flex min-h-[125px] flex-col items-start justify-between rounded-xl p-4 text-left text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${green ? 'bg-[#00A651]' : 'bg-[#003E70]'}`}><div className="flex w-full items-start justify-between"><Icon size={27} strokeWidth={1.7} /><ArrowRight className="opacity-70 transition group-hover:translate-x-1" size={17} /></div><div><strong className="block text-sm leading-tight">{label}</strong><span className="mt-1 block text-[11px] text-white/70">{count}</span></div></button>)}</div>
<div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]"><section className="min-w-0 overflow-hidden rounded-2xl border border-[#E0EAEF] bg-white shadow-[0_4px_18px_rgba(17,65,90,.05)]"><div className="flex items-end justify-between border-b border-[#E7EEF2] px-5 pt-5 sm:px-6"><h2 className="border-b-2 border-[#39B54A] pb-3 text-lg font-bold text-[#003366]">Documentos Recentes</h2><button className="mb-3 flex items-center gap-1 text-xs font-bold text-[#00A651] hover:text-[#007A3B]">Ver todos <ChevronRight size={14} /></button></div><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#F8FAFB] text-[10px] uppercase tracking-[0.08em] text-[#8195A1]"><tr><th className="w-14 px-5 py-3">Ícone</th><th className="px-3 py-3">Nome do Documento</th><th className="px-3 py-3">Área</th><th className="px-3 py-3">Tipo</th><th className="px-3 py-3">Atualizado em</th><th className="px-3 py-3">Tamanho</th><th className="px-5 py-3 text-right">Ações</th></tr></thead><tbody>{visibleDocuments.map((document, rowIndex) => <tr key={document.name} className={rowIndex % 2 ? 'bg-[#FBFCFD]' : 'bg-white'}><td className="px-5 py-3"><FacDocumentIcon kind={document.kind} /></td><td className="px-3 py-3 font-semibold text-[#194361]">{document.name}</td><td className="px-3 py-3 text-[#526E7D]">{document.area}</td><td className="px-3 py-3 text-[#526E7D]">{document.type}</td><td className="px-3 py-3 whitespace-nowrap text-[#718999]">{document.date}</td><td className="px-3 py-3 whitespace-nowrap text-[#718999]">{document.size}</td><td className="px-5 py-3"><div className="flex justify-end gap-1"><button aria-label={`Baixar ${document.name}`} className="rounded-lg p-2 text-[#527087] hover:bg-[#EAF7EE] hover:text-[#00A651]"><ArrowDownToLine size={16} /></button><button aria-label={`Favoritar ${document.name}`} onClick={() => toggleFavorite(document.name)} className={`rounded-lg p-2 hover:bg-[#FFF6DD] ${favoriteRows.includes(document.name) ? 'text-[#E4A51B]' : 'text-[#9BAAB2]'}`}><Heart size={16} fill={favoriteRows.includes(document.name) ? 'currentColor' : 'none'} /></button></div></td></tr>)}</tbody></table></div><div className="flex items-center justify-center gap-1 border-t border-[#E7EEF2] px-5 py-4"><button className="mr-3 flex items-center gap-1 text-xs font-semibold text-[#78909E] hover:text-[#003366]"><ArrowLeft size={14} /> Anterior</button><button className="h-7 w-7 rounded-md bg-[#003366] text-xs font-bold text-white">1</button><button className="h-7 w-7 rounded-md text-xs font-semibold text-[#526E7D] hover:bg-[#EAF7EE]">2</button><button className="h-7 w-7 rounded-md text-xs font-semibold text-[#526E7D] hover:bg-[#EAF7EE]">3</button><button className="ml-3 flex items-center gap-1 text-xs font-semibold text-[#00A651] hover:text-[#007A3B]">Próximo <ArrowRight size={14} /></button></div></section>
<aside className="space-y-5"><section className="rounded-2xl border border-[#E0EAEF] bg-white p-5 shadow-[0_4px_18px_rgba(17,65,90,.05)]"><div className="mb-4 flex items-center justify-between border-b border-[#E7EEF2] pb-3"><h2 className="text-base font-bold text-[#003366]">Documentos Favoritos</h2><Star className="text-[#E4A51B]" size={17} fill="currentColor" /></div><ul className="space-y-3">{favorites.map(name => <li key={name} className="flex gap-2"><FileText className="mt-0.5 shrink-0 text-[#D44747]" size={17} /><div className="min-w-0"><p className="truncate text-xs font-semibold text-[#31536A]">{name}</p><button className="mt-1 text-[11px] font-semibold text-[#00A651]">Baixar documento</button></div></li>)}</ul></section><section className="rounded-2xl bg-[#003366] p-5 text-white shadow-[0_8px_20px_rgba(0,51,102,.14)]"><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00A651] text-white"><Upload size={19} /></div><h2 className="text-base font-bold">Tem um documento para compartilhar?</h2><p className="mt-2 text-xs leading-relaxed text-white/70">Envie arquivos oficiais para a biblioteca da FAC.</p><button className="mt-5 w-full rounded-lg bg-[#00A651] px-3 py-2.5 text-xs font-bold text-white hover:bg-[#13B85D]">Enviar Documento</button></section><section className="rounded-2xl border border-[#E0EAEF] bg-white p-5 shadow-[0_4px_18px_rgba(17,65,90,.05)]"><h2 className="mb-4 border-b border-[#E7EEF2] pb-3 text-base font-bold text-[#003366]">Documentos Mais Baixados</h2><ol className="space-y-3">{downloads.map((item, index) => <li key={item.name} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF7EE] text-xs font-bold text-[#00A651]">{index + 1}</span><div className="min-w-0"><p className="truncate text-xs font-semibold text-[#31536A]">{item.name}</p><div className="mt-1 flex items-center gap-2"><span className="rounded bg-[#F0F4F6] px-1.5 py-0.5 text-[10px] text-[#718999]">{item.area}</span><span className="text-[10px] text-[#00A651]">↓ {item.count}</span></div></div></li>)}</ol></section></aside></div><footer className="mt-8 flex flex-col items-center justify-between gap-4 border-t-4 border-[#39B54A] bg-[#003366] px-6 py-6 text-white sm:flex-row"><FacMark /><p className="text-xs text-white/75">Intranet FAC — Informação na palma da mão. Resultado em cada conexão.</p><p className="text-[11px] text-white/50">© 2026 FAC Telecom</p></footer></div></main></div></div>;
}
