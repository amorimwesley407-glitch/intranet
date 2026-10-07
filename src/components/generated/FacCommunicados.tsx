import { useMemo, useState } from 'react';
import { navigateFromSidebar } from '../../lib/navigation';
import { ArrowLeft, ArrowRight, Bell, ChevronDown, ChevronRight, FileText, FolderOpen, Home, Laptop2, Menu, MessageCircle, Newspaper, Search, Settings, ShieldCheck, Users, Wrench, X } from 'lucide-react';
const navItems = [{
  label: 'Início',
  icon: Home
}, {
  label: 'Notícias / Comunicados',
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
const categoryOptions = ['Todos', 'Vendas', 'TI / Sistemas', 'RH', 'Operacional', 'Treinamento'];
const areaOptions = ['Todas as áreas', 'Comercial', 'Suporte Técnico', 'Financeiro', 'Administrativo'];
const recentItems = [{
  title: 'Nova campanha de vendas Q4',
  date: '12/09/2026',
  color: 'bg-[#00A651]'
}, {
  title: 'Treinamento sistema CRM',
  date: '10/09/2026',
  color: 'bg-[#D44949]'
}, {
  title: 'Atualização de rede na região Sul',
  date: '08/09/2026',
  color: 'bg-[#1874B8]'
}, {
  title: 'Atualização do plano de saúde',
  date: '05/09/2026',
  color: 'bg-[#39B54A]'
}];
const categoryCounts = [{
  label: 'Vendas',
  count: 3
}, {
  label: 'TI / Sistemas',
  count: 4
}, {
  label: 'RH',
  count: 2
}, {
  label: 'Operacional',
  count: 5
}, {
  label: 'Administrativo',
  count: 2
}, {
  label: 'Treinamento',
  count: 3
}];
const newsItems = [{
  badge: 'URGENTE',
  badgeColor: 'bg-[#FCE9E9] text-[#C23D3D]',
  category: 'TI / SISTEMAS',
  title: 'Treinamento obrigatório — Sistema CRM versão 3.0',
  date: '10/09/2026',
  author: 'Gestão de TI',
  excerpt: 'Todos os colaboradores devem concluir o treinamento até 30/09. Acesse o link abaixo e registre sua conclusão.',
  tag: 'Treinamento'
}, {
  badge: 'INFORMATIVO',
  badgeColor: 'bg-[#E8F2FB] text-[#17649A]',
  category: 'OPERACIONAL',
  title: 'Atualização de rede na região Sul — Possível instabilidade',
  date: '08/09/2026',
  author: 'NOC / Operações',
  excerpt: 'Prevemos instabilidade entre 02h e 05h do dia 15/09 para manutenção preventiva da infraestrutura de rede.',
  tag: 'Operacional'
}, {
  badge: 'RH',
  badgeColor: 'bg-[#E8F7EC] text-[#178443]',
  category: 'BENEFÍCIOS',
  title: 'Atualização do plano de saúde — Novas coberturas a partir de outubro',
  date: '05/09/2026',
  author: 'Departamento de RH',
  excerpt: 'O plano de saúde FAC passou por melhorias significativas. Confira o novo guia de cobertura e rede credenciada.',
  tag: 'Benefícios'
}, {
  badge: 'ADMINISTRATIVO',
  badgeColor: 'bg-[#EAF0F5] text-[#164A70]',
  category: 'PROCESSOS',
  title: 'Novo fluxo de aprovação de despesas operacionais',
  date: '03/09/2026',
  author: 'Financeiro',
  excerpt: 'A partir de 01/10, todas as solicitações de reembolso e compras devem seguir o novo fluxo aprovado pela diretoria.',
  tag: 'Financeiro'
}, {
  badge: 'DESTAQUE',
  badgeColor: 'bg-[#E8F7EC] text-[#178443]',
  category: 'INOVAÇÃO',
  title: 'FAC lança portal de ideias — Compartilhe suas sugestões',
  date: '01/09/2026',
  author: 'Diretoria',
  excerpt: 'Qualquer colaborador pode agora submeter ideias de melhoria. As melhores serão implementadas e o autor receberá reconhecimento.',
  tag: 'Inovação'
}, {
  badge: 'INFORMATIVO',
  badgeColor: 'bg-[#E8F2FB] text-[#17649A]',
  category: 'SEGURANÇA',
  title: 'Campanha de conscientização sobre segurança da informação',
  date: '28/08/2026',
  author: 'TI / Segurança',
  excerpt: 'Setembro é o mês da segurança digital. Participe dos workshops e quizzes disponíveis na intranet.',
  tag: 'Segurança'
}];
function FacMark() {
  return <div className="flex items-center gap-3">
    <div className="relative flex h-12 w-[84px] items-center justify-center rounded-xl bg-[#003366] shadow-sm">
      <span className="text-[34px] font-black italic leading-none tracking-[-0.12em] text-white">FAC</span>
      <span className="absolute -right-1 top-1 text-[18px] font-bold leading-none text-[#39B54A]">◔</span>
    </div>
    <div className="hidden min-[420px]:block">
      <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.11em] text-[#003366]">Tecnologia que</p>
      <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.11em] text-[#003366]">conecta pessoas</p>
    </div>
  </div>;
}
function Sidebar({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [active, setActive] = useState('Notícias / Comunicados');
  return <aside className={`fixed inset-y-0 left-0 z-30 flex w-[238px] shrink-0 flex-col bg-[#003366] px-4 py-5 text-white transition-transform duration-300 lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
    <div className="mb-8 flex items-center justify-between border-b border-white/15 pb-5">
      <div><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#63D26E]">Portal interno</p><h2 className="mt-1 text-xl font-bold tracking-tight">Intranet FAC</h2></div>
      <button aria-label="Fechar menu" onClick={onClose} className="rounded-lg p-2 text-white/70 hover:bg-white/10 lg:hidden"><X size={18} /></button>
    </div>
    <nav aria-label="Navegação principal">
      <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.17em] text-white/45">Navegação</p>
      <ul className="space-y-1">
        {navItems.map(({
          label,
          icon: Icon
        }) => <li key={label}>
          <button onClick={() => { setActive(label); navigateFromSidebar(label); }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${active === label ? 'bg-[#00A651] text-white shadow-[0_5px_16px_rgba(0,166,81,.25)]' : 'text-white/72 hover:bg-white/10 hover:text-white'}`}>
            <Icon size={18} strokeWidth={active === label ? 2.4 : 1.8} /><span>{label}</span>{active === label ? <ChevronRight className="ml-auto" size={15} /> : null}
          </button>
        </li>)}
      </ul>
    </nav>
    <div className="mt-auto hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 lg:block">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A651]/20 text-[#65DD7B]"><ShieldCheck size={19} /></div>
      <p className="text-xs font-semibold">Ambiente seguro</p><p className="mt-1 text-[11px] leading-relaxed text-white/55">Acesso protegido para colaboradores FAC.</p>
    </div>
  </aside>;
}
export function FacCommunicados() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState('Todos');
  const [area, setArea] = useState('Todas as áreas');
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const visibleNews = useMemo(() => newsItems.filter(item => category === 'Todos' || item.tag === category || item.category === category.toUpperCase()).filter(item => !query || `${item.title} ${item.excerpt}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <div className="min-h-screen bg-[#F5F6FA] text-[#16344E]">
    <header className="sticky top-0 z-20 flex h-[78px] items-center justify-between gap-5 border-b border-[#DDE7ED] bg-white px-4 shadow-[0_2px_12px_rgba(0,51,102,.08)] sm:px-7 lg:px-9">
      <div className="flex items-center gap-4"><button onClick={() => setMenuOpen(true)} aria-label="Abrir menu" className="rounded-lg p-2 text-[#003366] hover:bg-[#F0F5F8] lg:hidden"><Menu size={22} /></button><FacMark /></div>
      <div className="hidden max-w-[430px] flex-1 md:block"><label className="relative block"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87A0B1]" size={17} /><input value={query} onChange={event => setQuery(event.target.value)} aria-label="Buscar na intranet" placeholder="O que você procura?" className="h-11 w-full rounded-xl border border-[#D9E4EA] bg-[#F7FAFC] pl-11 pr-4 text-sm text-[#16344E] outline-none transition focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/15" /></label></div>
      <div className="flex items-center gap-3"><button aria-label="Notificações" className="relative rounded-xl p-2 text-[#527087] hover:bg-[#F0F5F8]"><Bell size={20} /><span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#00A651] ring-2 ring-white" /></button><div className="h-9 w-9 rounded-full bg-[#DDEBF1] p-[3px]"><div className="flex h-full w-full items-center justify-center rounded-full bg-[#F2B782] text-sm font-bold text-[#6B3A25]">R</div></div><div className="hidden leading-tight sm:block"><p className="text-sm font-semibold text-[#16344E]">Olá, Roberta</p><p className="mt-1 text-[11px] text-[#718999]">Comercial</p></div></div>
    </header>
    <div className="flex min-h-[calc(100vh-78px)]">{menuOpen ? <button aria-label="Fechar menu" onClick={() => setMenuOpen(false)} className="fixed inset-0 z-20 bg-[#00254A]/40 lg:hidden" /> : null}<Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="min-w-0 flex-1 px-4 py-6 sm:px-7 lg:px-9 lg:py-8"><div className="mx-auto max-w-[1440px]">
        <div className="mb-6"><p className="mb-3 text-xs font-medium text-[#8295A1]">Início <span className="mx-2 text-[#B4C0C7]">&gt;</span> <span className="text-[#00A651]">Comunicados</span></p><h1 className="text-3xl font-bold tracking-[-0.04em] text-[#003366] sm:text-[34px]">Comunicados</h1><p className="mt-2 text-sm text-[#718999]">Fique por dentro de todas as novidades, avisos e atualizações da FAC.</p></div>
        <div className="mb-6 rounded-2xl border border-[#E0EAEF] bg-white p-5 shadow-[0_4px_18px_rgba(17,65,90,.06)] sm:p-6"><div className="flex flex-col gap-4 xl:flex-row xl:items-center"><p className="shrink-0 text-sm font-bold text-[#003366]">Filtrar por:</p><div className="flex flex-1 flex-wrap gap-2">{categoryOptions.map(option => <button key={option} onClick={() => setCategory(option)} className={`rounded-full border px-3 py-2 text-xs font-semibold transition ${category === option ? 'border-[#00A651] bg-[#00A651] text-white' : 'border-[#DCE6EA] bg-white text-[#527087] hover:border-[#00A651] hover:text-[#008E45]'}`}>{option}</button>)}</div><label className="relative min-w-[190px]"><select value={area} onChange={event => setArea(event.target.value)} aria-label="Filtrar por área" className="h-10 w-full appearance-none rounded-lg border border-[#D9E4EA] bg-[#F8FAFB] px-3 pr-9 text-xs font-medium text-[#527087] outline-none focus:border-[#00A651]">{areaOptions.map(option => <option key={option}>{option}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-3 text-[#8295A1]" size={15} /></label><button onClick={() => setQuery('')} className="h-10 rounded-lg bg-[#00A651] px-5 text-xs font-bold text-white shadow-sm transition hover:bg-[#008B45]">Buscar</button></div><p className="mt-4 border-t border-[#EDF2F4] pt-4 text-xs text-[#8295A1]"><strong className="text-[#003366]">12</strong> comunicados encontrados{area !== 'Todas as áreas' ? ` · ${area}` : ''}</p></div>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-6"><article className="relative overflow-hidden rounded-2xl border-l-4 border-[#39B54A] bg-[#003366] p-6 shadow-[0_10px_24px_rgba(0,51,102,.15)] sm:p-8"><div className="absolute right-[-40px] top-[-55px] h-44 w-44 rounded-full border-[24px] border-white/5" /><div className="relative"><div className="mb-4 flex flex-wrap items-center gap-2"><span className="rounded-full bg-[#39B54A] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">📌 Fixado</span><span className="rounded-full border border-[#67D879]/30 bg-[#00A651]/20 px-3 py-1 text-[10px] font-bold tracking-[0.13em] text-[#8BE98F]">VENDAS</span></div><h2 className="max-w-[730px] text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-[29px]">Nova campanha de vendas Q4 — Metas e bonificações</h2><p className="mt-3 text-xs text-white/60">12/09/2026 <span className="mx-2 text-white/30">|</span> Autor: Diretoria Comercial</p><p className="mt-5 max-w-[760px] text-sm leading-relaxed text-white/75">Confira todas as metas, premiações e estratégias para o último trimestre de 2026. A FAC está com tudo para fechar o ano com chave de ouro!</p><button className="mt-6 flex items-center gap-2 text-sm font-bold text-[#63D26E] transition hover:text-white">Ler comunicado completo <ArrowRight size={16} /></button></div></article>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{visibleNews.map(item => <article key={item.title} className="flex min-h-[258px] flex-col rounded-2xl border border-[#E0EAEF] bg-white p-5 shadow-[0_4px_18px_rgba(17,65,90,.05)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,65,90,.1)]"><div className="flex items-center justify-between gap-2"><span className={`rounded-md px-2 py-1 text-[10px] font-bold tracking-[0.08em] ${item.badgeColor}`}>{item.badge}</span><span className="text-[10px] font-bold tracking-[0.12em] text-[#8295A1]">{item.category}</span></div><h3 className="mt-4 text-lg font-bold leading-snug text-[#003366]">{item.title}</h3><p className="mt-2 text-[11px] text-[#8295A1]">{item.date} <span className="mx-1">·</span> {item.author}</p><p className="mt-3 flex-1 text-sm leading-relaxed text-[#607C8D]">{item.excerpt}</p><div className="mt-5 flex items-center justify-between border-t border-[#EDF2F4] pt-4"><span className="rounded-full bg-[#EAF7EE] px-2.5 py-1 text-[10px] font-semibold text-[#178443]">{item.tag}</span><button className="flex items-center gap-1 text-xs font-bold text-[#00A651] hover:text-[#003366]">Ler mais <ArrowRight size={14} /></button></div></article>)}</div>
            {visibleNews.length === 0 ? <div className="rounded-2xl border border-dashed border-[#C9D8DE] bg-white p-10 text-center text-sm text-[#718999]">Nenhum comunicado encontrado para este filtro.</div> : null}
            <nav aria-label="Paginação" className="flex flex-wrap items-center justify-center gap-2 pt-1"><button className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-[#718999] hover:bg-white"><ArrowLeft size={14} /> Anterior</button>{['1', '2', '3'].map(page => <button key={page} className={`h-9 w-9 rounded-lg text-xs font-bold ${page === '1' ? 'bg-[#003366] text-white' : 'text-[#527087] hover:bg-white'}`}>{page}</button>)}<button className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-[#00A651] hover:bg-white">Próximo <ArrowRight size={14} /></button></nav>
          </div>
          <aside className="space-y-5"><section className="rounded-2xl border border-[#E0EAEF] bg-white p-5 shadow-[0_4px_18px_rgba(17,65,90,.05)]"><div className="mb-3 flex items-center justify-between border-b border-[#E7EEF2] pb-3"><h2 className="text-lg font-bold text-[#003366]">Comunicados recentes</h2><Newspaper size={17} className="text-[#00A651]" /></div><ul className="divide-y divide-[#EDF2F4]">{recentItems.map(item => <li key={item.title} className="flex gap-3 py-3"><span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`} /><div><p className="text-xs font-semibold leading-snug text-[#194361]">{item.title}</p><p className="mt-1 text-[10px] text-[#8AA0AC]">{item.date}</p></div></li>)}</ul></section>
            <section className="rounded-2xl border border-[#E0EAEF] bg-white p-5 shadow-[0_4px_18px_rgba(17,65,90,.05)]"><h2 className="mb-4 border-b border-[#E7EEF2] pb-3 text-lg font-bold text-[#003366]">Categorias</h2><div className="flex flex-wrap gap-2">{categoryCounts.map(item => <button key={item.label} onClick={() => setCategory(item.label === 'TI / Sistemas' ? item.label : item.label)} className="rounded-full border border-[#DCE6EA] px-3 py-1.5 text-[11px] font-medium text-[#527087] transition hover:border-[#00A651] hover:text-[#00A651]">{item.label} <span className="font-bold text-[#00A651]">{item.count}</span></button>)}</div></section>
            <section className="rounded-2xl bg-[#003366] p-5 text-white shadow-[0_8px_20px_rgba(0,51,102,.14)]"><div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#00A651]"><FileText size={18} /></div><h2 className="text-base font-bold">Receba os comunicados no e-mail</h2><p className="mt-2 text-xs leading-relaxed text-white/65">Não perca nenhuma novidade importante da FAC.</p>{subscribed ? <p className="mt-4 rounded-lg bg-[#00A651]/20 p-3 text-xs font-semibold text-[#8BE98F]">Inscrição realizada com sucesso!</p> : <form onSubmit={event => {
                  event.preventDefault();
                  if (email) setSubscribed(true);
                }} className="mt-4 space-y-2"><input value={email} onChange={event => setEmail(event.target.value)} type="email" required placeholder="Seu melhor e-mail" aria-label="Seu melhor e-mail" className="h-10 w-full rounded-lg border border-white/15 bg-white/10 px-3 text-xs text-white outline-none placeholder:text-white/45 focus:border-[#63D26E]" /><button className="h-10 w-full rounded-lg bg-[#00A651] text-xs font-bold text-white transition hover:bg-[#39B54A]">Inscrever-se</button></form>}</section></aside>
        </div>
        <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t-4 border-[#39B54A] bg-[#003366] px-6 py-6 text-[11px] text-white/70 sm:flex-row sm:px-8"><div className="flex items-center gap-3"><span className="text-2xl font-black italic tracking-[-0.12em] text-white">FAC</span><span className="h-6 w-px bg-white/25" /><span>Intranet FAC — Informação na palma da mão.</span></div><p>Tecnologia que conecta pessoas</p></footer>
      </div></main>
    </div>
  </div>;
}
