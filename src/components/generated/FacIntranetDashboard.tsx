import { useState } from 'react';
import { navigateFromSidebar } from '../../lib/navigation';
import { ArrowRight, BarChart3, Bell, BookOpen, BriefcaseBusiness, CalendarDays, CheckCircle2, ChevronRight, CircleDollarSign, ClipboardList, FileText, FolderOpen, Gift, Handshake, Headphones, Home, Laptop2, Link2, Menu, MessageCircle, Monitor, Newspaper, Radio, Search, Settings, ShieldCheck, Ticket, Users, Wrench, X } from 'lucide-react';
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
const accessItems = [{
  label: 'RH',
  icon: Users,
  tone: 'green'
}, {
  label: 'Financeiro',
  icon: CircleDollarSign,
  tone: 'blue'
}, {
  label: 'Comercial',
  icon: Handshake,
  tone: 'green'
}, {
  label: 'Suporte Técnico',
  icon: Headphones,
  tone: 'blue'
}, {
  label: 'Documentos',
  icon: FolderOpen,
  tone: 'green'
}, {
  label: 'Solicitações',
  icon: ClipboardList,
  tone: 'blue'
}, {
  label: 'Sistemas',
  icon: Monitor,
  tone: 'green'
}, {
  label: 'Benefícios',
  icon: Gift,
  tone: 'blue'
}];
const notices = [{
  title: 'Nova campanha de vendas',
  date: '12/09/2026',
  tone: 'bg-[#00A651]'
}, {
  title: 'Treinamento sistema CRM',
  date: '10/09/2026',
  tone: 'bg-[#D44949]'
}, {
  title: 'Atualização de rede na região',
  date: '08/09/2026',
  tone: 'bg-[#1874B8]'
}];
const quickLinks = [{
  label: '2ª via de boleto',
  icon: FileText
}, {
  label: 'Solicitar manutenção',
  icon: Wrench
}, {
  label: 'Abrir chamado',
  icon: Ticket
}, {
  label: 'Manual do colaborador',
  icon: BookOpen
}];
const features = [{
  label: 'Notícias e comunicados',
  icon: Radio
}, {
  label: 'Base de conhecimento',
  detail: '(tutoriais e manuais)',
  icon: BookOpen
}, {
  label: 'Solicitações e chamados técnicos',
  icon: Ticket
}, {
  label: 'Integração com sistemas',
  detail: '(CRM, ERP, telefonia, rede)',
  icon: Link2
}, {
  label: 'Escala e plantões',
  icon: CalendarDays
}, {
  label: 'Indicadores e relatórios',
  icon: BarChart3
}, {
  label: 'Espaço de colaboração',
  icon: Users
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
  const [active, setActive] = useState('Início');
  return <aside className={`fixed inset-y-0 left-0 z-20 w-[238px] shrink-0 bg-[#003366] px-4 py-5 text-white transition-transform duration-300 lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="mb-9 flex items-center justify-between border-b border-white/15 pb-5">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#63D26E]">Portal interno</p>
          <h2 className="mt-1 text-xl font-bold tracking-tight">Intranet FAC</h2>
        </div>
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
                <Icon size={18} strokeWidth={active === label ? 2.4 : 1.8} />
                <span>{label}</span>
                {active === label ? <ChevronRight className="ml-auto" size={15} /> : null}
              </button>
            </li>)}
        </ul>
      </nav>
      <div className="mt-auto hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 lg:block">
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A651]/20 text-[#65DD7B]"><ShieldCheck size={19} /></div>
        <p className="text-xs font-semibold">Ambiente seguro</p>
        <p className="mt-1 text-[11px] leading-relaxed text-white/55">Acesso protegido para colaboradores FAC.</p>
      </div>
    </aside>;
}
export function FacIntranetDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="min-h-screen bg-[#F3F7FA] text-[#16344E]">
      <header className="sticky top-0 z-10 flex h-[78px] items-center justify-between gap-5 border-b border-[#DDE7ED] bg-white px-4 shadow-[0_2px_12px_rgba(0,51,102,.05)] sm:px-7 lg:px-9">
        <div className="flex items-center gap-4"><button onClick={() => setMenuOpen(true)} aria-label="Abrir menu" className="rounded-lg p-2 text-[#003366] hover:bg-[#F0F5F8] lg:hidden"><Menu size={22} /></button><FacMark /></div>
        <div className="hidden max-w-[430px] flex-1 md:block">
          <label className="relative block"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87A0B1]" size={17} /><input aria-label="Buscar na intranet" placeholder="O que você procura?" className="h-11 w-full rounded-xl border border-[#D9E4EA] bg-[#F7FAFC] pl-11 pr-4 text-sm text-[#16344E] outline-none transition focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/15" /></label>
        </div>
        <div className="flex items-center gap-3"><button aria-label="Notificações" className="relative rounded-xl p-2 text-[#527087] hover:bg-[#F0F5F8]"><Bell size={20} /><span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#00A651] ring-2 ring-white" /></button><div className="h-9 w-9 rounded-full bg-[#DDEBF1] p-[3px]"><div className="flex h-full w-full items-center justify-center rounded-full bg-[#F2B782] text-sm font-bold text-[#6B3A25]">R</div></div><div className="hidden leading-tight sm:block"><p className="text-sm font-semibold text-[#16344E]">Olá, Roberta</p><p className="mt-1 text-[11px] text-[#718999]">Comercial</p></div></div>
      </header>
      <div className="flex min-h-[calc(100vh-78px)]">
        {menuOpen ? <button aria-label="Fechar menu" onClick={() => setMenuOpen(false)} className="fixed inset-0 z-10 bg-[#00254A]/40 lg:hidden" /> : null}
        <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-7 lg:px-9 lg:py-8">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-7 flex flex-col justify-between gap-2 sm:flex-row sm:items-end"><div><p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00A651]">Quarta-feira, 12 de setembro de 2026</p><h1 className="text-2xl font-bold tracking-[-0.03em] text-[#003366] sm:text-[30px]">Bom dia, Roberta <span className="text-[#39B54A]">•</span></h1></div><p className="text-sm text-[#718999]">Tudo o que você precisa, em um só lugar.</p></div>
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(300px,.95fr)]">
              <div className="space-y-5">
                <section className="relative flex min-h-[270px] overflow-hidden rounded-2xl bg-[#003366] p-7 shadow-[0_12px_30px_rgba(0,51,102,.14)] sm:p-9" style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,51,102,.98) 0%, rgba(0,64,128,.87) 48%, rgba(0,64,128,.35) 100%), url('https://storage.googleapis.com/storage.magicpath.ai/component-assets/458303222084411392/458303222495453184/b2e7b10b5e769ac8d10558f45845cc19bedacf2a1f2c45db5b91027d10a34537.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 57%'
              }}>
                  <div className="relative z-[1] flex max-w-[360px] flex-col justify-center"><span className="mb-4 w-fit rounded-full border border-[#5AD36B]/35 bg-[#39B54A]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8BE98F]">Portal do colaborador</span><h2 className="text-[30px] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-[38px]">Juntos conectamos mais!</h2><p className="mt-4 max-w-[290px] text-sm leading-relaxed text-white/75">Informação, pessoas e tecnologia no mesmo lugar.</p><button className="mt-7 flex w-fit items-center gap-2 rounded-lg bg-[#39B54A] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#002d57]/30 transition hover:bg-[#49C65A]">Saiba mais <ArrowRight size={16} /></button></div>
                </section>
                <section className="rounded-2xl border border-[#E0EAEF] bg-white p-5 shadow-[0_4px_18px_rgba(17,65,90,.05)] sm:p-6"><div className="mb-5 flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00A651]">Atalhos do portal</p><h2 className="mt-1 text-lg font-bold text-[#003366]">Acesso rápido</h2></div><span className="rounded-full bg-[#EAF7EE] px-3 py-1 text-[11px] font-semibold text-[#168541]">8 serviços</span></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{accessItems.map(({
                    label,
                    icon: Icon,
                    tone
                  }) => <button key={label} className={`group flex min-h-[92px] flex-col items-center justify-center gap-2 rounded-xl p-3 text-center text-white transition hover:-translate-y-0.5 hover:shadow-lg ${tone === 'green' ? 'bg-[#00A651]' : 'bg-[#07528C]'}`}><Icon size={24} strokeWidth={1.8} /><span className="text-xs font-semibold leading-tight">{label}</span></button>)}</div></section>
              </div>
              <aside className="space-y-5">
                <section className="rounded-2xl border border-[#E0EAEF] bg-white p-5 shadow-[0_4px_18px_rgba(17,65,90,.05)] sm:p-6"><div className="mb-5 flex items-end justify-between border-b border-[#E7EEF2] pb-3"><h2 className="border-b-2 border-[#39B54A] pb-3 text-lg font-bold text-[#003366]">Comunicados</h2><span className="text-[11px] text-[#88A0AD]">Atualizados hoje</span></div><ul className="space-y-1">{notices.map(_mpRecord => {
                    const {
                      title,
                      date,
                      tone
                    } = _mpRecord;
                    return <li key={title} className="flex gap-3 rounded-lg p-2.5 transition hover:bg-[#F5F9FA]"><span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${tone}`} /><div><p className="text-sm font-semibold leading-snug text-[#194361]">{title}</p><p className="mt-1 text-[11px] text-[#8AA0AC]">{date}</p></div></li>;
                  })}</ul><button className="mt-4 flex items-center gap-1 text-xs font-bold text-[#00A651] hover:text-[#007A3B]">Ver todos <ArrowRight size={14} /></button></section>
                <section className="rounded-2xl border border-[#E0EAEF] bg-white p-5 shadow-[0_4px_18px_rgba(17,65,90,.05)] sm:p-6"><div className="mb-4 border-b border-[#E7EEF2] pb-3"><h2 className="w-fit border-b-2 border-[#39B54A] pb-3 text-lg font-bold text-[#003366]">Acesso rápido</h2></div><ul className="divide-y divide-[#EDF2F4]">{quickLinks.map(({
                    label,
                    icon: Icon
                  }) => <li key={label}><button className="flex w-full items-center gap-3 py-3 text-left text-sm font-medium text-[#31536A] transition hover:text-[#00A651]"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF5F7] text-[#07528C]"><Icon size={16} /></span><span>{label}</span><ChevronRight className="ml-auto text-[#A1B1BA]" size={16} /></button></li>)}</ul></section>
              </aside>
            </div>
            <section className="mt-6 overflow-hidden rounded-2xl border border-[#D7E4EA] bg-white shadow-[0_4px_18px_rgba(17,65,90,.05)]"><div className="flex items-center gap-3 bg-[#003366] px-5 py-4 sm:px-7"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00A651] text-white"><BriefcaseBusiness size={16} /></div><h2 className="text-sm font-bold uppercase tracking-[0.08em] text-white sm:text-base">Funcionalidades essenciais para o setor de telecom</h2></div><div className="grid grid-cols-2 divide-x divide-y divide-[#E6EEF2] sm:grid-cols-4 lg:grid-cols-7 lg:divide-y-0">{features.map(({
                label,
                detail,
                icon: Icon
              }) => <div key={label} className="flex min-h-[125px] flex-col items-center justify-center px-3 py-5 text-center transition hover:bg-[#F4FAF7]"><Icon className="mb-3 text-[#07528C]" size={25} strokeWidth={1.7} /><p className="text-xs font-bold leading-snug text-[#1E4963]">{label}</p>{detail ? <p className="mt-0.5 text-[10px] leading-tight text-[#718999]">{detail}</p> : null}</div>)}</div></section>
            <footer className="flex flex-col items-center justify-between gap-3 py-7 text-[11px] text-[#8299A6] sm:flex-row"><p>© 2026 FAC Telecom · Tecnologia que conecta pessoas</p><p className="flex items-center gap-1"><CheckCircle2 size={13} className="text-[#00A651]" /> Ambiente seguro e protegido</p></footer>
          </div>
        </main>
      </div>
    </div>;
}
