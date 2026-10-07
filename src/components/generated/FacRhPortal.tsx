import { useState } from 'react';
import { navigateFromSidebar } from '../../lib/navigation';
import { Bell, BriefcaseBusiness, CalendarDays, ChevronRight, Clock3, Download, FileCheck2, FileText, FolderOpen, HeartPulse, Home, Laptop2, Menu, MessageCircle, Newspaper, Phone, Search, Settings, ShieldCheck, Stethoscope, Users, WalletCards, Wrench, X, CircleDollarSign, GraduationCap, Dumbbell, ShoppingBasket, BusFront, Mail, Plus, UserRound, CheckCircle2 } from 'lucide-react';
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
const actions = [{
  title: 'Minhas Férias',
  icon: CalendarDays,
  lines: ['Saldo: 28 dias disponíveis', 'Período aquisitivo: jan–dez 2026'],
  button: 'Solicitar Férias',
  tone: 'green'
}, {
  title: 'Contracheque',
  icon: FileText,
  lines: ['Último: Agosto 2026', 'Líquido: R$ 4.820,00'],
  button: 'Ver Holerites',
  tone: 'blue'
}, {
  title: 'Plano de Saúde',
  icon: HeartPulse,
  lines: ['Unimed — Plano Executivo', 'Dependentes: 2 cadastrados'],
  button: 'Ver Carteirinha',
  tone: 'green'
}, {
  title: 'Ponto Eletrônico',
  icon: Clock3,
  lines: ['Status: Regular ✅', 'Banco de horas: +4h20'],
  button: 'Ver Espelho',
  tone: 'blue'
}];
const requests = [{
  type: '🏖️ Férias (30 dias)',
  date: '02/09/2026',
  status: '🟡 Em análise',
  color: 'amber',
  action: 'Ver detalhes'
}, {
  type: '🏠 Home office — setembro',
  date: '28/08/2026',
  status: '✅ Aprovado',
  color: 'green',
  action: 'Ver detalhes'
}, {
  type: '📄 Declaração de vínculo',
  date: '20/08/2026',
  status: '✅ Pronto para download',
  color: 'green',
  action: 'Baixar'
}, {
  type: '💰 Reembolso de despesas',
  date: '10/08/2026',
  status: '🔴 Reprovado',
  color: 'red',
  action: 'Ver motivo'
}, {
  type: '📅 Abono de falta',
  date: '05/08/2026',
  status: '✅ Aprovado',
  color: 'green',
  action: 'Ver detalhes'
}];
const payslips = [{
  month: 'Agosto 2026',
  competence: '08/2026',
  value: 'R$ 4.820,00'
}, {
  month: 'Julho 2026',
  competence: '07/2026',
  value: 'R$ 4.820,00'
}, {
  month: 'Junho 2026',
  competence: '06/2026',
  value: 'R$ 4.750,00'
}, {
  month: 'Maio 2026',
  competence: '05/2026',
  value: 'R$ 4.750,00'
}];
const benefits = [{
  name: 'Plano de Saúde',
  detail: 'Unimed Executivo',
  icon: Stethoscope
}, {
  name: 'Plano Odontológico',
  detail: 'OdontoPrev',
  icon: HeartPulse
}, {
  name: 'Vale Refeição',
  detail: 'R$ 35,00/dia',
  icon: WalletCards
}, {
  name: 'Vale Alimentação',
  detail: 'R$ 500,00/mês',
  icon: ShoppingBasket
}, {
  name: 'Vale Transporte',
  detail: 'Configurado',
  icon: BusFront
}, {
  name: 'Auxílio Educação',
  detail: 'Até R$ 400,00/mês',
  icon: GraduationCap
}, {
  name: 'Gympass',
  detail: 'Ativo',
  icon: Dumbbell
}];
const events = [{
  date: '15/09',
  text: 'Prazo: Solicitação de férias Q4',
  color: 'bg-[#00A651]'
}, {
  date: '20/09',
  text: 'Treinamento: CRM 3.0 (obrigatório)',
  color: 'bg-[#1377B5]'
}, {
  date: '25/09',
  text: 'Fechamento de ponto — setembro',
  color: 'bg-[#E3A51A]'
}, {
  date: '01/10',
  text: 'Novo plano de saúde entra em vigor',
  color: 'bg-[#00A651]'
}];
function FacMark() {
  return <div className="flex items-center gap-3"><div className="relative flex h-12 w-[84px] items-center justify-center rounded-xl bg-[#003366]"><span className="text-[34px] font-black italic leading-none tracking-[-0.12em] text-white">FAC</span><span className="absolute -right-1 top-1 text-[18px] font-bold text-[#39B54A]">◔</span></div><div className="hidden min-[420px]:block"><p className="text-[10px] font-bold uppercase leading-tight tracking-[0.1em] text-[#003366]">Tecnologia que</p><p className="text-[10px] font-bold uppercase leading-tight tracking-[0.1em] text-[#003366]">conecta pessoas</p></div></div>;
}
function Sidebar({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [active, setActive] = useState('RH');
  return <aside className={`fixed inset-y-0 left-0 z-30 w-[228px] shrink-0 bg-[#003366] px-4 py-5 text-white transition-transform lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}><div className="mb-8 flex items-center justify-between border-b border-white/15 pb-5"><div><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#63D26E]">Portal interno</p><h2 className="mt-1 text-xl font-bold">Intranet FAC</h2></div><button aria-label="Fechar menu" onClick={onClose} className="rounded-lg p-2 lg:hidden"><X size={18} /></button></div><nav aria-label="Navegação principal"><p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.17em] text-white/45">Navegação</p><ul className="space-y-1">{navItems.map(({
          label,
          icon: Icon
        }) => <li key={label}><button onClick={() => { setActive(label); navigateFromSidebar(label); }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${active === label ? 'bg-[#00A651] text-white shadow-lg' : 'text-white/75 hover:bg-white/10'}`}><Icon size={18} /><span>{label}</span>{active === label ? <ChevronRight className="ml-auto" size={15} /> : null}</button></li>)}</ul></nav><div className="mt-10 hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 lg:block"><ShieldCheck className="mb-3 text-[#63D26E]" size={20} /><p className="text-xs font-semibold">Ambiente seguro</p><p className="mt-1 text-[11px] leading-relaxed text-white/55">Acesso protegido para colaboradores FAC.</p></div></aside>;
}
export function FacRhPortal() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="min-h-screen bg-[#F5F6FA] text-[#16344E]"><header className="sticky top-0 z-20 flex h-[78px] items-center justify-between gap-5 border-b border-[#DDE7ED] bg-white px-4 shadow-[0_2px_12px_rgba(0,51,102,.07)] sm:px-7 lg:px-9"><div className="flex items-center gap-3"><button onClick={() => setMenuOpen(true)} aria-label="Abrir menu" className="rounded-lg p-2 text-[#003366] lg:hidden"><Menu size={22} /></button><FacMark /></div><div className="hidden max-w-[430px] flex-1 md:block"><label className="relative block"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87A0B1]" size={17} /><input aria-label="Buscar na intranet" placeholder="O que você procura?" className="h-11 w-full rounded-xl border border-[#D9E4EA] bg-[#F7FAFC] pl-11 pr-4 text-sm outline-none focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/15" /></label></div><div className="flex items-center gap-3"><button aria-label="Notificações" className="relative rounded-xl p-2 text-[#527087]"><Bell size={20} /><span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#00A651] ring-2 ring-white" /></button><div className="h-9 w-9 rounded-full bg-[#DDEBF1] p-[3px]"><div className="flex h-full w-full items-center justify-center rounded-full bg-[#F2B782] text-sm font-bold text-[#6B3A25]">R</div></div><div className="hidden leading-tight sm:block"><p className="text-sm font-semibold text-[#16344E]">Olá, Roberta</p><p className="mt-1 text-[11px] text-[#718999]">Comercial</p></div></div></header><div className="flex min-h-[calc(100vh-78px)]">{menuOpen ? <button aria-label="Fechar menu" onClick={() => setMenuOpen(false)} className="fixed inset-0 z-20 bg-[#00254A]/40 lg:hidden" /> : null}<Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} /><main className="min-w-0 flex-1 px-4 py-6 sm:px-7 lg:px-9 lg:py-8"><div className="mx-auto max-w-[1440px]"><div className="mb-6"><p className="mb-2 text-xs font-medium text-[#8496A2]">Início <span className="px-1 text-[#B0BEC5]">&gt;</span> RH</p><h1 className="text-2xl font-bold tracking-[-0.03em] text-[#003366] sm:text-[30px]">Portal do Colaborador — RH</h1><p className="mt-2 text-sm text-[#718999]">Gerencie suas informações, benefícios e solicitações em um só lugar.</p></div>

<section className="mb-6 flex flex-col justify-between gap-5 rounded-2xl bg-gradient-to-r from-[#003366] to-[#07528C] p-6 text-white shadow-[0_12px_30px_rgba(0,51,102,.16)] lg:flex-row lg:items-center lg:p-7"><div className="flex items-center gap-4 sm:gap-6"><div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-[#39B54A] bg-[#00A651] text-2xl font-extrabold">RC</div><div><h2 className="text-2xl font-bold">Roberta Carvalho</h2><p className="mt-1 text-sm text-white/80">Analista Comercial Sênior <span className="px-1">|</span> Área: Comercial <span className="px-1">|</span> Filial: São Paulo</p><div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full bg-white/10 px-3 py-1.5 text-xs">📅 Admissão: 15/03/2021</span><span className="rounded-full bg-white/10 px-3 py-1.5 text-xs">⏱️ 5 anos e 6 meses de empresa</span><span className="rounded-full bg-white/10 px-3 py-1.5 text-xs">🪪 Matrícula: FAC-04821</span></div></div></div><div className="flex shrink-0 gap-3"><button className="rounded-lg bg-[#00A651] px-4 py-2.5 text-sm font-bold transition hover:bg-[#08b95e]">Atualizar Dados</button><button className="rounded-lg border border-white/60 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/10">Ver Contrato</button></div></section>

<section aria-label="Ações rápidas" className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{actions.map(({
              title,
              icon: Icon,
              lines,
              button,
              tone
            }) => <article key={title} className="rounded-2xl border border-[#E0EAEF] bg-white p-5 shadow-[0_4px_18px_rgba(17,65,90,.06)] transition hover:-translate-y-0.5 hover:shadow-lg"><div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${tone === 'green' ? 'bg-[#EAF7EE] text-[#00A651]' : 'bg-[#EAF2F8] text-[#07528C]'}`}><Icon size={21} /></div><h2 className="text-base font-bold text-[#003366]">{title}</h2><p className="mt-2 text-sm text-[#3F6074]">{lines[0]}</p><p className={`mt-1 text-xs ${tone === 'green' ? 'font-semibold text-[#00A651]' : 'text-[#718999]'}`}>{lines[1]}</p><button className="mt-4 text-xs font-bold text-[#07528C] hover:text-[#00A651]">{button} <ChevronRight className="inline" size={13} /></button></article>)}</section>

<div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_300px]"><div className="space-y-6"><section className="overflow-hidden rounded-2xl border border-[#E0EAEF] bg-white shadow-[0_4px_18px_rgba(17,65,90,.05)]"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E7EEF2] px-5 py-4 sm:px-6"><h2 className="border-b-2 border-[#39B54A] pb-2 text-lg font-bold text-[#003366]">Minhas Solicitações</h2><button className="flex items-center gap-1 rounded-lg bg-[#00A651] px-3 py-2 text-xs font-bold text-white hover:bg-[#008E45]"><Plus size={15} /> Nova Solicitação</button></div><div className="overflow-x-auto"><table className="w-full min-w-[650px] text-left text-sm"><thead className="bg-[#F7FAFC] text-[11px] uppercase tracking-wide text-[#8095A2]"><tr><th className="px-5 py-3 font-semibold">Tipo</th><th className="px-5 py-3 font-semibold">Data</th><th className="px-5 py-3 font-semibold">Status</th><th className="px-5 py-3 font-semibold">Ação</th></tr></thead><tbody className="divide-y divide-[#EDF2F4]">{requests.map(request => <tr key={request.type} className="hover:bg-[#FBFDFC]"><td className="px-5 py-3.5 font-medium text-[#244D65]">{request.type}</td><td className="px-5 py-3.5 text-[#718999]">{request.date}</td><td className={`px-5 py-3.5 font-medium ${request.color === 'green' ? 'text-[#168541]' : request.color === 'red' ? 'text-[#C94B4B]' : 'text-[#BD8210]'}`}>{request.status}</td><td className="px-5 py-3.5"><button className="text-xs font-bold text-[#07528C] hover:text-[#00A651]">{request.action}</button></td></tr>)}</tbody></table></div><div className="flex items-center justify-end gap-1 px-5 py-4"><button className="rounded-md bg-[#003366] px-2.5 py-1.5 text-xs font-bold text-white">1</button><button className="rounded-md px-2.5 py-1.5 text-xs text-[#567286] hover:bg-[#EAF7EE]">2</button><button className="rounded-md px-2.5 py-1.5 text-xs text-[#567286] hover:bg-[#EAF7EE]">3</button><button aria-label="Próxima página" className="rounded-md px-2 py-1 text-[#00A651]"><ChevronRight size={16} /></button></div></section>
<section className="rounded-2xl border border-[#E0EAEF] bg-white p-5 shadow-[0_4px_18px_rgba(17,65,90,.05)] sm:p-6"><div className="mb-3 border-b border-[#E7EEF2] pb-3"><h2 className="w-fit border-b-2 border-[#39B54A] pb-2 text-lg font-bold text-[#003366]">Holerites</h2></div><div className="divide-y divide-[#EDF2F4]">{payslips.map(slip => <div key={slip.month} className="flex flex-wrap items-center gap-3 py-3"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF0F0] text-[#D44949]"><FileText size={18} /></div><div className="min-w-[135px] flex-1"><p className="text-sm font-bold text-[#244D65]">{slip.month}</p><p className="text-xs text-[#8095A2]">Competência {slip.competence}</p></div><strong className="mr-3 text-sm text-[#244D65]">{slip.value}</strong><button className="flex items-center gap-1 text-xs font-bold text-[#07528C] hover:text-[#00A651]"><Download size={14} /> Baixar</button></div>)}</div><button className="mt-3 text-xs font-bold text-[#00A651]">Ver todos os holerites →</button></section></div>

<aside className="space-y-6"><section className="rounded-2xl border border-[#E0EAEF] bg-white p-5 shadow-[0_4px_18px_rgba(17,65,90,.05)]"><h2 className="mb-4 border-b-2 border-[#39B54A] pb-3 text-lg font-bold text-[#003366]">Meus Benefícios</h2><ul className="space-y-3">{benefits.map(({
                    name,
                    detail,
                    icon: Icon
                  }) => <li key={name} className="flex items-center gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF7EE] text-[#00A651]"><Icon size={16} /></span><div className="min-w-0"><p className="truncate text-xs font-bold text-[#31536A]">{name}</p><p className="truncate text-[11px] text-[#8095A2]">{detail}</p></div></li>)}</ul><button className="mt-5 text-xs font-bold text-[#00A651]">Gerenciar benefícios →</button></section><section className="rounded-2xl border border-[#E0EAEF] bg-white p-5 shadow-[0_4px_18px_rgba(17,65,90,.05)]"><h2 className="mb-4 border-b-2 border-[#39B54A] pb-3 text-lg font-bold text-[#003366]">Próximos Eventos RH</h2><ul className="space-y-3">{events.map(event => <li key={event.date} className="flex gap-3 border-l-4 border-[#00A651] pl-3"><span className="text-xs font-bold text-[#003366]">{event.date}</span><span className="text-xs leading-snug text-[#527087]">{event.text}</span></li>)}</ul></section><section className="overflow-hidden rounded-2xl border border-[#E0EAEF] bg-white shadow-[0_4px_18px_rgba(17,65,90,.05)]"><div className="bg-[#003366] px-5 py-4"><h2 className="text-base font-bold text-white">Fale com o RH</h2></div><ul className="space-y-3 p-5 text-xs text-[#527087]"><li className="flex gap-2"><Mail size={15} className="shrink-0 text-[#00A651]" /> rh@factelecom.com.br</li><li className="flex gap-2"><Phone size={15} className="shrink-0 text-[#00A651]" /> (11) 3000-0001 ramal 200</li><li className="flex gap-2"><MessageCircle size={15} className="shrink-0 text-[#00A651]" /> Chat interno: <button className="font-bold text-[#07528C]">Abrir chamado</button></li><li className="flex gap-2"><Clock3 size={15} className="shrink-0 text-[#00A651]" /> Horário: seg–sex, 8h–18h</li></ul></section></aside></div>
<footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t-4 border-[#00A651] bg-[#003366] px-6 py-6 text-white sm:flex-row"><FacMark /><p className="text-center text-xs text-white/80">Intranet FAC — Informação na palma da mão. Resultado em cada conexão.</p><p className="flex items-center gap-1 text-xs text-white/65"><CheckCircle2 size={14} className="text-[#63D26E]" /> Ambiente seguro</p></footer></div></main></div></div>;
}
