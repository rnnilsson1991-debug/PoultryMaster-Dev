/* PoultryMaster v2.9.9 Dashboard I18N Safe Overlay
   Rules: no layout changes, no app logic changes, no data changes.
   This only translates already-rendered dashboard text based on the saved language setting. */
(function(){
  const KEY='egg_manager_v2';
  const D={
    sv:{tagline:'Komplett hantering av inkubering, flock och avel',overview:'Översikt',today:'idag',activeEggs:'Aktiva ägg',incubators:'Kläckare',chicks:'Kycklingar',flock:'Flock',statistics:'Statistik',settings:'Inställningar',farmJournal:'Gårdsjournal',machines:'Maskiner',reportsTrends:'Rapporter och trender',appSettings:'Appinställningar',farmTimeline:'Gårdens tidslinje',incubatorAccessories:'Kläckare och tillbehör',registerEvent:'Registrera ny händelse',registerSub:'Ägg, lysning, kycklingar, hälsa, vikt m.m.',mostImportant:'Viktigast idag',upcomingNotDone:'Kommande (ej utförda)',activeHatches:'Aktiva kläckningar',active:'Aktiva',inOperation:'i drift',zeroHatched:'0 kläckta',zeroRegistered:'0 registrerade',hatched:'kläckta',registered:'registrerade',day:'Dag',of:'av',allDoneToday:'Allt klart för idag',allTasksDoneMsg:'Alla planerade uppgifter är genomförda. PoultryMaster fortsätter hålla koll på gården.',todaysTip:'Dagens tips',allTasksDoneTip:'Bra jobbat. Nu återstår normal tillsyn och att hålla kläckaren stabil.'},
    en:{tagline:'Complete management of incubation, flock and breeding',overview:'Overview',today:'today',activeEggs:'Active eggs',incubators:'Incubators',chicks:'Chicks',flock:'Flock',statistics:'Statistics',settings:'Settings',farmJournal:'Farm journal',machines:'Machines',reportsTrends:'Reports and trends',appSettings:'App settings',farmTimeline:'Farm timeline',incubatorAccessories:'Incubators and accessories',registerEvent:'Register new event',registerSub:'Eggs, candling, chicks, health, weight, etc.',mostImportant:'Most important today',upcomingNotDone:'Upcoming (not completed)',activeHatches:'Active hatches',active:'Active',inOperation:'in operation',zeroHatched:'0 hatched',zeroRegistered:'0 registered',hatched:'hatched',registered:'registered',day:'Day',of:'of',allDoneToday:'All done for today',allTasksDoneMsg:'All planned tasks are completed. PoultryMaster keeps monitoring the farm.',todaysTip:'Today’s tip',allTasksDoneTip:'Good work. Now normal supervision remains — keep the incubator stable.'},
    da:{tagline:'Komplet håndtering af rugning, flok og avl',overview:'Oversigt',today:'i dag',activeEggs:'Aktive æg',incubators:'Rugemaskiner',chicks:'Kyllinger',flock:'Flok',statistics:'Statistik',settings:'Indstillinger',farmJournal:'Gårdsjournal',machines:'Maskiner',reportsTrends:'Rapporter og trends',appSettings:'Appindstillinger',farmTimeline:'Gårdens tidslinje',incubatorAccessories:'Rugemaskiner og tilbehør',registerEvent:'Registrér ny hændelse',registerSub:'Æg, lysning, kyllinger, sundhed, vægt m.m.',mostImportant:'Vigtigst i dag',upcomingNotDone:'Kommende (ikke udført)',activeHatches:'Aktive klækninger',active:'Aktive',inOperation:'i drift',zeroHatched:'0 klækket',zeroRegistered:'0 registreret',hatched:'klækket',registered:'registreret',day:'Dag',of:'af',allDoneToday:'Alt klart for i dag',allTasksDoneMsg:'Alle planlagte opgaver er udført. PoultryMaster holder fortsat øje med gården.',todaysTip:'Dagens tip',allTasksDoneTip:'Godt arbejde. Nu mangler kun normal tilsyn og at holde rugemaskinen stabil.'},
    no:{tagline:'Komplett håndtering av ruging, flokk og avl',overview:'Oversikt',today:'i dag',activeEggs:'Aktive egg',incubators:'Rugemaskiner',chicks:'Kyllinger',flock:'Flokk',statistics:'Statistikk',settings:'Innstillinger',farmJournal:'Gårdsjournal',machines:'Maskiner',reportsTrends:'Rapporter og trender',appSettings:'Appinnstillinger',farmTimeline:'Gårdens tidslinje',incubatorAccessories:'Rugemaskiner og tilbehør',registerEvent:'Registrer ny hendelse',registerSub:'Egg, lysing, kyllinger, helse, vekt m.m.',mostImportant:'Viktigst i dag',upcomingNotDone:'Kommende (ikke utført)',activeHatches:'Aktive klekkinger',active:'Aktive',inOperation:'i drift',zeroHatched:'0 klekket',zeroRegistered:'0 registrert',hatched:'klekket',registered:'registrert',day:'Dag',of:'av',allDoneToday:'Alt klart for i dag',allTasksDoneMsg:'Alle planlagte oppgaver er utført. PoultryMaster holder fortsatt oversikt over gården.',todaysTip:'Dagens tips',allTasksDoneTip:'Godt jobbet. Nå gjenstår normalt tilsyn og å holde rugemaskinen stabil.'},
    fi:{tagline:'Täydellinen hallinta haudontaan, parveen ja jalostukseen',overview:'Yleiskatsaus',today:'tänään',activeEggs:'Aktiiviset munat',incubators:'Hautomakoneet',chicks:'Poikaset',flock:'Parvi',statistics:'Tilastot',settings:'Asetukset',farmJournal:'Tilapäiväkirja',machines:'Laitteet',reportsTrends:'Raportit ja trendit',appSettings:'Sovelluksen asetukset',farmTimeline:'Tilan aikajana',incubatorAccessories:'Hautomakoneet ja tarvikkeet',registerEvent:'Lisää uusi tapahtuma',registerSub:'Munat, läpivalaisu, poikaset, terveys, paino jne.',mostImportant:'Tärkeintä tänään',upcomingNotDone:'Tulossa (ei tehty)',activeHatches:'Aktiiviset haudonnat',active:'Aktiiviset',inOperation:'käytössä',zeroHatched:'0 kuoriutunut',zeroRegistered:'0 rekisteröity',hatched:'kuoriutunut',registered:'rekisteröity',day:'Päivä',of:'/',allDoneToday:'Kaikki valmista tänään',allTasksDoneMsg:'Kaikki suunnitellut tehtävät on tehty. PoultryMaster jatkaa tilan seurantaa.',todaysTip:'Päivän vinkki',allTasksDoneTip:'Hyvää työtä. Nyt riittää normaali valvonta ja hautomakoneen pitäminen vakaana.'}
  };
  function getState(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
  function lang(){return (getState().farmSettings&&getState().farmSettings.language)||'sv'}
  function tr(k){const l=lang();return (D[l]&&D[l][k])||D.sv[k]||k}
  function setText(sel,val){document.querySelectorAll(sel).forEach(el=>{if(el)el.textContent=val})}
  function setLabel(id,key){const el=document.getElementById(id);if(!el)return;const lab=el.closest('.stat')?.querySelector('.label');if(!lab)return;const sub=lab.querySelector('.sub');lab.childNodes.forEach(n=>{if(n.nodeType===3)n.nodeValue=''});lab.insertBefore(document.createTextNode(tr(key)),sub||null)}
  function setSub(id,fn){const el=document.getElementById(id);if(el)el.textContent=fn(el.textContent||'')}
  function dayText(txt){const m=String(txt).match(/(\d+)\D+(\d+)/);return m?`${tr('day')} ${m[1]} ${tr('of')} ${m[2]}`:txt}
  function farmName(){const fs=getState().farmSettings||{};return fs.farmName||'Gården'}
  function translateDashboard(){
    setText('.top small',tr('tagline'));
    setText('.dashboard-kicker',tr('overview').toUpperCase());
    setLabel('s-eggs','activeEggs'); setLabel('s-inc','incubators'); setLabel('s-chicks','chicks'); setLabel('s-flock','flock');
    setSub('s-eggs-sub',dayText);
    setSub('s-inc-sub',txt=>{const n=(txt.match(/\d+/)||['0'])[0];return `${n} ${tr('inOperation')}`});
    setSub('s-chicks-sub',txt=>{const n=(txt.match(/\d+/)||['0'])[0];return n==='0'?tr('zeroHatched'):`${n} ${tr('hatched')}`});
    setSub('s-flock-sub',txt=>{const n=(txt.match(/\d+/)||['0'])[0];return n==='0'?tr('zeroRegistered'):`${n} ${tr('registered')}`});
    const q=[['statistics','statistics','reportsTrends'],['settings','settings','appSettings'],['events','farmJournal','farmTimeline']];
    q.forEach(([view,key,sub])=>{const b=document.querySelector(`.quick[data-view="${view}"]`);if(b){const d=b.querySelector(':scope > div');const s=b.querySelector('small');if(d)d.textContent=tr(key);if(s)s.textContent=tr(sub);}});
    const m=[...document.querySelectorAll('.quick')].find(b=>b.getAttribute('data-action')==='incubators');if(m){const d=m.querySelector(':scope > div');const s=m.querySelector('small');if(d)d.textContent=tr('machines');if(s)s.textContent=tr('incubatorAccessories');}
    setText('.reg-title',tr('registerEvent')); setText('.reg-sub',tr('registerSub'));
    setText('.dash-title-task',tr('mostImportant')); setText('.dash-title-upcoming',tr('upcomingNotDone')); setText('.dash-title-hatches',tr('activeHatches'));
    const title=document.querySelector('.farm-today-title'); if(title)title.textContent=`🌱 ${farmName()} ${tr('today')}`;
    const stat=document.querySelector('.farm-today-status'); if(stat && /Allt klart|All done|Alt klart|Kaikki/.test(stat.textContent))stat.textContent=`🟢 ${tr('allDoneToday')}`;
    const chip=document.querySelector('.farm-today-chip'); if(chip && /Allt klart|All done|Alt klart|Kaikki/.test(chip.textContent))chip.textContent=tr('allDoneToday');
    const text=document.querySelector('.farm-today-text'); if(text && /Alla planerade|All planned|Alle planlagte|Kaikki suunnitellut/.test(text.textContent))text.textContent=tr('allTasksDoneMsg');
    const mini=document.querySelectorAll('.farm-today-mini .status-chip');
    if(mini[0]){const n=(mini[0].textContent.match(/\d+/)||['0'])[0];mini[0].textContent=`🥚 ${tr('active')}: ${n}`}
    if(mini[1]){const n=(mini[1].textContent.match(/\d+/)||['0'])[0];mini[1].textContent=`🐣 ${tr('chicks')}: ${n}`}
    if(mini[2]){const n=(mini[2].textContent.match(/\d+/)||['0'])[0];mini[2].textContent=`🐓 ${tr('flock')}: ${n}`}
    const tip=document.querySelector('.farm-today-tip'); if(tip && /Dagens tips|Today/.test(tip.textContent))tip.textContent=`💡 ${tr('todaysTip')}: ${tr('allTasksDoneTip')}`;
  }
  let busy=false;function run(){if(busy)return;busy=true;requestAnimationFrame(()=>{try{translateDashboard()}finally{busy=false}})}
  document.addEventListener('DOMContentLoaded',run); window.addEventListener('load',run); setInterval(run,700);
  new MutationObserver(run).observe(document.documentElement,{childList:true,subtree:true,characterData:true});
})();

/* PoultryMaster v2.9.9 – Dashboard Final I18N polish
   Dashboard-only safe layer: translates rendered dashboard text without touching stored data or other modules. */
(function(){
  const KEY='egg_manager_v2';
  const L={
    sv:{
      tagline:'Komplett hantering av inkubering, flock och avel',overview:'Översikt',today:'idag',activeEggs:'Aktiva ägg',incubators:'Kläckare',chicks:'Kycklingar',flock:'Flock',statistics:'Statistik',settings:'Inställningar',farmJournal:'Gårdsjournal',machines:'Maskiner',reportsTrends:'Rapporter och trender',appSettings:'Appinställningar',farmTimeline:'Gårdens tidslinje',incubatorAccessories:'Kläckare och tillbehör',registerEvent:'Registrera ny händelse',registerSub:'Ägg, lysning, kycklingar, hälsa, vikt m.m.',mostImportant:'Viktigast idag',upcomingNotDone:'Kommande (ej utförda)',activeHatches:'Aktiva kläckningar',
      active:'Aktiva',uncertain:'Osäkra',stopped:'Avbrutna',survivalRate:'Överlevnadsgrad',inOperation:'i drift',zeroHatched:'0 kläckta',zeroRegistered:'0 registrerade',hatched:'kläckta',registered:'registrerade',day:'Dag',of:'av',eggsInIncubator:'ägg i kläckare',noActive:'Inga aktiva',nextEvent:'Nästa händelse',estimatedHatch:'Beräknad kläckning',inDays:'om {n} dagar',inDaysCap:'Om {n} dagar',todayCap:'Idag',todaySlashPassed:'Idag / passerad',nothingPlanned:'Inget planerat',noEggsInIncubator:'Inga ägg i kläckare just nu.',addEgg:'+ Lägg till ägg',
      allDoneToday:'Allt klart för idag',stable:'Stabil',allTasksDoneMsg:'Alla planerade uppgifter är genomförda. PoultryMaster fortsätter hålla koll på gården.',stableMsg:'Allt ser stabilt ut idag. Öppna korten för mer detaljer.',todaysTip:'Dagens tips',stableTip:'Fortsätt hålla temperatur och vattennivå stabilt.',allTasksDoneTip:'Bra jobbat. Nu återstår normal tillsyn och att hålla kläckaren stabil.',hatchClose:'Kläckning nära',lockdownToday:'Lockdown idag',candlingDay:'Lysningsdag',followUp:'Följ upp',stableStopped:'Stabil med avbrott',noActiveHatch:'Ingen aktiv kläckning',
      todayWork:'Dagens arbete',done:'klara',allDoneBox:'🎉 Alla dagens uppgifter är slutförda.',noTasksToday:'✅ Inga planerade uppgifter idag.',firstCandling:'Första lysning',secondCandling:'Andra lysning',lockdown:'Lockdown',hatchDay:'Kläckdag',candlingSoon:'Kläckning',savedDone:'Klart och sparat i dagens logg.',undo:'Ångra',complete:'Klar',todayLower:'idag',noUpcoming:'Inga kommande moment.',noActiveHatchesYet:'Inga aktiva kläckningar ännu.',edit:'Redigera',delete:'Ta bort',lifeBook:'Livsbok',
      insights:'PoultryMasters insikter',priority:'Prioritet',hatching:'Kläckning',followUpTag:'Uppföljning',statisticsTag:'Statistik',database:'Databas',candlingTag:'Lysning',chicksTag:'Kycklingar',layingTag:'Värpning',start:'Start',nextStep:'Nästa steg',actionToday:'Åtgärd idag',activeHatch:'Aktiv kläckning',uncertainEggs:'Osäkra ägg',hatchHistory:'Kläckningshistorik',buildingStats:'Bygger statistik',candlingPattern:'Lysningsmönster',weightFollowUp:'Viktuppföljning',layingMissing:'Värpningsdata saknas'
    },
    en:{
      tagline:'Complete management of incubation, flock and breeding',overview:'Overview',today:'today',activeEggs:'Active eggs',incubators:'Incubators',chicks:'Chicks',flock:'Flock',statistics:'Statistics',settings:'Settings',farmJournal:'Farm journal',machines:'Machines',reportsTrends:'Reports and trends',appSettings:'App settings',farmTimeline:'Farm timeline',incubatorAccessories:'Incubators and accessories',registerEvent:'Register new event',registerSub:'Eggs, candling, chicks, health, weight, etc.',mostImportant:'Most important today',upcomingNotDone:'Upcoming (not completed)',activeHatches:'Active hatches',
      active:'Active',uncertain:'Uncertain',stopped:'Stopped',survivalRate:'Survival rate',inOperation:'in operation',zeroHatched:'0 hatched',zeroRegistered:'0 registered',hatched:'hatched',registered:'registered',day:'Day',of:'of',eggsInIncubator:'eggs in incubator',noActive:'No active eggs',nextEvent:'Next event',estimatedHatch:'Estimated hatch',inDays:'in {n} days',inDaysCap:'In {n} days',todayCap:'Today',todaySlashPassed:'Today / overdue',nothingPlanned:'Nothing planned',noEggsInIncubator:'No eggs in the incubator right now.',addEgg:'+ Add egg',
      allDoneToday:'All done for today',stable:'Stable',allTasksDoneMsg:'All planned tasks are completed. PoultryMaster keeps monitoring the farm.',stableMsg:'Everything looks stable today. Open the cards for more details.',todaysTip:'Today’s tip',stableTip:'Keep temperature and water level stable.',allTasksDoneTip:'Good work. Now normal supervision remains — keep the incubator stable.',hatchClose:'Hatch is close',lockdownToday:'Lockdown today',candlingDay:'Candling day',followUp:'Follow up',stableStopped:'Stable with stopped eggs',noActiveHatch:'No active hatch',
      todayWork:'Today’s work',done:'done',allDoneBox:'🎉 All tasks for today are completed.',noTasksToday:'✅ No planned tasks today.',firstCandling:'First candling',secondCandling:'Second candling',lockdown:'Lockdown',hatchDay:'Hatch day',candlingSoon:'Hatch',savedDone:'Done and saved in today’s log.',undo:'Undo',complete:'Done',todayLower:'today',noUpcoming:'No upcoming actions.',noActiveHatchesYet:'No active hatches yet.',edit:'Edit',delete:'Delete',lifeBook:'Life book',
      insights:'PoultryMaster insights',priority:'Priority',hatching:'Hatching',followUpTag:'Follow-up',statisticsTag:'Statistics',database:'Database',candlingTag:'Candling',chicksTag:'Chicks',layingTag:'Laying',start:'Start',nextStep:'Next step',actionToday:'Action today',activeHatch:'Active hatch',uncertainEggs:'Uncertain eggs',hatchHistory:'Hatch history',buildingStats:'Building statistics',candlingPattern:'Candling pattern',weightFollowUp:'Weight follow-up',layingMissing:'Laying data missing'
    },
    da:{
      tagline:'Komplet håndtering af rugning, flok og avl',overview:'Oversigt',today:'i dag',activeEggs:'Aktive æg',incubators:'Rugemaskiner',chicks:'Kyllinger',flock:'Flok',statistics:'Statistik',settings:'Indstillinger',farmJournal:'Gårdsjournal',machines:'Maskiner',reportsTrends:'Rapporter og trends',appSettings:'Appindstillinger',farmTimeline:'Gårdens tidslinje',incubatorAccessories:'Rugemaskiner og tilbehør',registerEvent:'Registrér ny hændelse',registerSub:'Æg, lysning, kyllinger, sundhed, vægt m.m.',mostImportant:'Vigtigst i dag',upcomingNotDone:'Kommende (ikke udført)',activeHatches:'Aktive klækninger',
      active:'Aktive',uncertain:'Usikre',stopped:'Afbrudte',survivalRate:'Overlevelsesgrad',inOperation:'i drift',zeroHatched:'0 klækket',zeroRegistered:'0 registreret',hatched:'klækket',registered:'registreret',day:'Dag',of:'af',eggsInIncubator:'æg i rugemaskine',noActive:'Ingen aktive',nextEvent:'Næste hændelse',estimatedHatch:'Forventet klækning',inDays:'om {n} dage',inDaysCap:'Om {n} dage',todayCap:'I dag',todaySlashPassed:'I dag / passeret',nothingPlanned:'Intet planlagt',noEggsInIncubator:'Ingen æg i rugemaskinen lige nu.',addEgg:'+ Tilføj æg',
      allDoneToday:'Alt klart for i dag',stable:'Stabil',allTasksDoneMsg:'Alle planlagte opgaver er udført. PoultryMaster holder fortsat øje med gården.',stableMsg:'Alt ser stabilt ud i dag. Åbn kortene for flere detaljer.',todaysTip:'Dagens tip',stableTip:'Hold temperatur og vandniveau stabilt.',allTasksDoneTip:'Godt arbejde. Nu mangler kun normalt tilsyn og at holde rugemaskinen stabil.',hatchClose:'Klækning tæt på',lockdownToday:'Lockdown i dag',candlingDay:'Lysningsdag',followUp:'Følg op',stableStopped:'Stabil med afbrudte æg',noActiveHatch:'Ingen aktiv klækning',
      todayWork:'Dagens arbejde',done:'klare',allDoneBox:'🎉 Alle dagens opgaver er færdige.',noTasksToday:'✅ Ingen planlagte opgaver i dag.',firstCandling:'Første lysning',secondCandling:'Anden lysning',lockdown:'Lockdown',hatchDay:'Klækkedag',candlingSoon:'Klækning',savedDone:'Klart og gemt i dagens log.',undo:'Fortryd',complete:'Klar',todayLower:'i dag',noUpcoming:'Ingen kommende trin.',noActiveHatchesYet:'Ingen aktive klækninger endnu.',edit:'Redigér',delete:'Slet',lifeBook:'Livsbog',
      insights:'PoultryMaster indsigter',priority:'Prioritet',hatching:'Klækning',followUpTag:'Opfølgning',statisticsTag:'Statistik',database:'Database',candlingTag:'Lysning',chicksTag:'Kyllinger',layingTag:'Æglægning',start:'Start',nextStep:'Næste skridt',actionToday:'Handling i dag',activeHatch:'Aktiv klækning',uncertainEggs:'Usikre æg',hatchHistory:'Klækningshistorik',buildingStats:'Opbygger statistik',candlingPattern:'Lysningsmønster',weightFollowUp:'Vægtopfølgning',layingMissing:'Æglægningsdata mangler'
    },
    no:{
      tagline:'Komplett håndtering av ruging, flokk og avl',overview:'Oversikt',today:'i dag',activeEggs:'Aktive egg',incubators:'Rugemaskiner',chicks:'Kyllinger',flock:'Flokk',statistics:'Statistikk',settings:'Innstillinger',farmJournal:'Gårdsjournal',machines:'Maskiner',reportsTrends:'Rapporter og trender',appSettings:'Appinnstillinger',farmTimeline:'Gårdens tidslinje',incubatorAccessories:'Rugemaskiner og tilbehør',registerEvent:'Registrer ny hendelse',registerSub:'Egg, lysing, kyllinger, helse, vekt m.m.',mostImportant:'Viktigst i dag',upcomingNotDone:'Kommende (ikke utført)',activeHatches:'Aktive klekkinger',
      active:'Aktive',uncertain:'Usikre',stopped:'Avbrutte',survivalRate:'Overlevelsesgrad',inOperation:'i drift',zeroHatched:'0 klekket',zeroRegistered:'0 registrert',hatched:'klekket',registered:'registrert',day:'Dag',of:'av',eggsInIncubator:'egg i rugemaskin',noActive:'Ingen aktive',nextEvent:'Neste hendelse',estimatedHatch:'Beregnet klekking',inDays:'om {n} dager',inDaysCap:'Om {n} dager',todayCap:'I dag',todaySlashPassed:'I dag / passert',nothingPlanned:'Ingenting planlagt',noEggsInIncubator:'Ingen egg i rugemaskinen akkurat nå.',addEgg:'+ Legg til egg',
      allDoneToday:'Alt klart for i dag',stable:'Stabil',allTasksDoneMsg:'Alle planlagte oppgaver er utført. PoultryMaster holder fortsatt oversikt over gården.',stableMsg:'Alt ser stabilt ut i dag. Åpne kortene for flere detaljer.',todaysTip:'Dagens tips',stableTip:'Hold temperatur og vannnivå stabilt.',allTasksDoneTip:'Godt jobbet. Nå gjenstår normalt tilsyn og å holde rugemaskinen stabil.',hatchClose:'Klekking nærmer seg',lockdownToday:'Lockdown i dag',candlingDay:'Lysingsdag',followUp:'Følg opp',stableStopped:'Stabil med avbrutte egg',noActiveHatch:'Ingen aktiv klekking',
      todayWork:'Dagens arbeid',done:'klare',allDoneBox:'🎉 Alle dagens oppgaver er fullført.',noTasksToday:'✅ Ingen planlagte oppgaver i dag.',firstCandling:'Første lysing',secondCandling:'Andre lysing',lockdown:'Lockdown',hatchDay:'Klekkedag',candlingSoon:'Klekking',savedDone:'Klart og lagret i dagens logg.',undo:'Angre',complete:'Klar',todayLower:'i dag',noUpcoming:'Ingen kommende trinn.',noActiveHatchesYet:'Ingen aktive klekkinger ennå.',edit:'Rediger',delete:'Slett',lifeBook:'Livsbok',
      insights:'PoultryMaster innsikt',priority:'Prioritet',hatching:'Klekking',followUpTag:'Oppfølging',statisticsTag:'Statistikk',database:'Database',candlingTag:'Lysing',chicksTag:'Kyllinger',layingTag:'Egglegging',start:'Start',nextStep:'Neste steg',actionToday:'Tiltak i dag',activeHatch:'Aktiv klekking',uncertainEggs:'Usikre egg',hatchHistory:'Klekkingshistorikk',buildingStats:'Bygger statistikk',candlingPattern:'Lysingsmønster',weightFollowUp:'Vektoppfølging',layingMissing:'Eggleggingsdata mangler'
    },
    fi:{
      tagline:'Täydellinen hallinta haudontaan, parveen ja jalostukseen',overview:'Yleiskatsaus',today:'tänään',activeEggs:'Aktiiviset munat',incubators:'Hautomakoneet',chicks:'Poikaset',flock:'Parvi',statistics:'Tilastot',settings:'Asetukset',farmJournal:'Tilapäiväkirja',machines:'Laitteet',reportsTrends:'Raportit ja trendit',appSettings:'Sovelluksen asetukset',farmTimeline:'Tilan aikajana',incubatorAccessories:'Hautomakoneet ja tarvikkeet',registerEvent:'Lisää uusi tapahtuma',registerSub:'Munat, läpivalaisu, poikaset, terveys, paino jne.',mostImportant:'Tärkeintä tänään',upcomingNotDone:'Tulossa (ei tehty)',activeHatches:'Aktiiviset haudonnat',
      active:'Aktiiviset',uncertain:'Epävarmat',stopped:'Keskeytetyt',survivalRate:'Selviytymisaste',inOperation:'käytössä',zeroHatched:'0 kuoriutunut',zeroRegistered:'0 rekisteröity',hatched:'kuoriutunut',registered:'rekisteröity',day:'Päivä',of:'/',eggsInIncubator:'munaa hautomakoneessa',noActive:'Ei aktiivisia',nextEvent:'Seuraava tapahtuma',estimatedHatch:'Arvioitu kuoriutuminen',inDays:'{n} päivän kuluttua',inDaysCap:'{n} päivän kuluttua',todayCap:'Tänään',todaySlashPassed:'Tänään / ohitettu',nothingPlanned:'Ei suunniteltua',noEggsInIncubator:'Hautomakoneessa ei ole munia juuri nyt.',addEgg:'+ Lisää muna',
      allDoneToday:'Kaikki valmista tänään',stable:'Vakaa',allTasksDoneMsg:'Kaikki suunnitellut tehtävät on tehty. PoultryMaster jatkaa tilan seurantaa.',stableMsg:'Kaikki näyttää vakaalta tänään. Avaa kortit nähdäksesi lisätiedot.',todaysTip:'Päivän vinkki',stableTip:'Pidä lämpötila ja veden taso vakaana.',allTasksDoneTip:'Hyvää työtä. Nyt riittää normaali valvonta ja hautomakoneen pitäminen vakaana.',hatchClose:'Kuoriutuminen lähellä',lockdownToday:'Lockdown tänään',candlingDay:'Läpivalaisupäivä',followUp:'Seuraa',stableStopped:'Vakaa, keskeytyksiä mukana',noActiveHatch:'Ei aktiivista haudontaa',
      todayWork:'Tämän päivän työ',done:'valmis',allDoneBox:'🎉 Kaikki tämän päivän tehtävät on tehty.',noTasksToday:'✅ Ei suunniteltuja tehtäviä tänään.',firstCandling:'Ensimmäinen läpivalaisu',secondCandling:'Toinen läpivalaisu',lockdown:'Lockdown',hatchDay:'Kuoriutumispäivä',candlingSoon:'Kuoriutuminen',savedDone:'Valmis ja tallennettu päivän lokiin.',undo:'Kumoa',complete:'Valmis',todayLower:'tänään',noUpcoming:'Ei tulevia vaiheita.',noActiveHatchesYet:'Ei aktiivisia haudontoja vielä.',edit:'Muokkaa',delete:'Poista',lifeBook:'Elämänkirja',
      insights:'PoultryMasterin havainnot',priority:'Prioriteetti',hatching:'Haudonta',followUpTag:'Seuranta',statisticsTag:'Tilastot',database:'Tietokanta',candlingTag:'Läpivalaisu',chicksTag:'Poikaset',layingTag:'Muninta',start:'Aloitus',nextStep:'Seuraava askel',actionToday:'Toimi tänään',activeHatch:'Aktiivinen haudonta',uncertainEggs:'Epävarmat munat',hatchHistory:'Kuoriutumishistoria',buildingStats:'Tilastot kertyvät',candlingPattern:'Läpivalaisumalli',weightFollowUp:'Painonseuranta',layingMissing:'Munintatiedot puuttuvat'
    }
  };
  function state(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
  function lang(){return (state().farmSettings&&state().farmSettings.language)||'sv'}
  function tr(k){const l=lang();return (L[l]&&L[l][k])||L.sv[k]||k}
  function farm(){const fs=state().farmSettings||{};return String(fs.farmName||'PoultryMaster').trim()||'PoultryMaster'}
  function fmt(key,n){return tr(key).replace('{n}',n)}
  function setText(sel,val){document.querySelectorAll(sel).forEach(el=>{if(el)el.textContent=val})}
  function setLabel(id,key){const el=document.getElementById(id);if(!el)return;const lab=el.closest('.stat')?.querySelector('.label');if(!lab)return;const sub=lab.querySelector('.sub');[...lab.childNodes].forEach(n=>{if(n.nodeType===3)n.remove()});lab.insertBefore(document.createTextNode(tr(key)),sub||null)}
  function extractNum(txt,def='0'){const m=String(txt||'').match(/-?\d+/);return m?m[0]:def}
  function translateSubtitles(){
    const se=document.getElementById('s-eggs-sub');
    if(se){const nums=String(se.textContent).match(/\d+/g)||[];se.textContent=nums.length>=2?`${tr('day')} ${nums[0]} ${tr('of')} ${nums[1]}`:tr('noActive')}
    const si=document.getElementById('s-inc-sub'); if(si){si.textContent=`${extractNum(si.textContent)} ${tr('inOperation')}`}
    const sc=document.getElementById('s-chicks-sub'); if(sc){const n=extractNum(sc.textContent);sc.textContent=n==='0'?tr('zeroHatched'):`${n} ${tr('hatched')}`}
    const sf=document.getElementById('s-flock-sub'); if(sf){const n=extractNum(sf.textContent);sf.textContent=n==='0'?tr('zeroRegistered'):`${n} ${tr('registered')}`}
  }
  function translateQuickCards(){
    const q=[['statistics','statistics','reportsTrends'],['settings','settings','appSettings'],['events','farmJournal','farmTimeline']];
    q.forEach(([view,key,sub])=>{const b=document.querySelector(`.quick[data-view="${view}"]`);if(!b)return;const d=b.querySelector(':scope > div');const s=b.querySelector('small');if(d)d.textContent=tr(key);if(s)s.textContent=tr(sub)});
    const m=[...document.querySelectorAll('.quick')].find(b=>b.getAttribute('data-action')==='incubators');
    if(m){const d=m.querySelector(':scope > div');const s=m.querySelector('small');if(d)d.textContent=tr('machines');if(s)s.textContent=tr('incubatorAccessories')}
  }
  function translateAccordions(){
    const items=[['dash-tasks-card','mostImportant'],['dash-upcoming-card','upcomingNotDone'],['dash-hatches-card','activeHatches']];
    items.forEach(([id,key])=>{const h=document.querySelector(`#${id} h3`);if(!h)return;const n=(h.textContent.match(/\(\d+\)/)||[''])[0];const open=/▼/.test(h.textContent);h.textContent=(open?'▼ ':'▶ ')+tr(key)+(n?' '+n:'')});
  }
  function translateFarmToday(){
    const title=document.querySelector('.farm-today-title'); if(title)title.textContent=`🌱 ${farm()} ${tr('today')}`;
    const statusEl=document.querySelector('.farm-today-status'), chipEl=document.querySelector('.farm-today-chip');
    const raw=(statusEl?.textContent||chipEl?.textContent||'');
    let key=/klart|done|klart|valmista/i.test(raw)?'allDoneToday':/Kläckning nära|Hatch is close|Klækning|Klekking|Kuoriutuminen/i.test(raw)?'hatchClose':/Lockdown/i.test(raw)?'lockdownToday':/Lysningsdag|Candling|Lysingsdag|Läpivalaisu/i.test(raw)?'candlingDay':/Följ|Follow|Følg|Seuraa/i.test(raw)?'followUp':/Ingen aktiv|No active|Ei aktiivista/i.test(raw)?'noActiveHatch':/Stabil med|Stable with|Vakaa/i.test(raw)?'stableStopped':'stable';
    const icon=key==='hatchClose'||key==='noActiveHatch'?'🔴':(key==='lockdownToday'||key==='candlingDay'||key==='followUp')?'🟡':'🟢';
    if(statusEl)statusEl.textContent=`${icon} ${tr(key)}`;
    if(chipEl)chipEl.textContent=tr(key);
    const txt=document.querySelector('.farm-today-text');
    if(txt){
      if(key==='allDoneToday')txt.textContent=tr('allTasksDoneMsg');
      else if(key==='stable')txt.textContent=tr('stableMsg');
    }
    const mini=document.querySelectorAll('.farm-today-mini .status-chip');
    if(mini[0])mini[0].textContent=`🥚 ${tr('active')}: ${extractNum(mini[0].textContent)}`;
    if(mini[1])mini[1].textContent=`🐣 ${tr('chicks')}: ${extractNum(mini[1].textContent)}`;
    if(mini[2])mini[2].textContent=`🐓 ${tr('flock')}: ${extractNum(mini[2].textContent)}`;
    if(mini[3])mini[3].textContent=`📌 ${tr('todayWork')}: ${extractNum(mini[3].textContent)}`;
    const tip=document.querySelector('.farm-today-tip');
    if(tip){
      const tipText=key==='allDoneToday'?tr('allTasksDoneTip'):tr('stableTip');
      tip.textContent=`💡 ${tr('todaysTip')}: ${tipText}`;
    }
  }
  function translateTasks(){
    const ph=document.querySelector('.today-progress-head');
    if(ph){const spans=ph.querySelectorAll('span');if(spans[0])spans[0].textContent=tr('todayWork');if(spans[1]){const nums=spans[1].textContent.match(/\d+/g)||['0','0'];spans[1].textContent=`${nums[0]}/${nums[1]} ${tr('done')}`}}
    document.querySelectorAll('.task-check-text').forEach(el=>{
      let txt=el.textContent;
      const b=el.querySelector('b'); const id=b?b.textContent:extractNum(txt,'');
      const icon=txt.includes('Lockdown')?'🔒':txt.includes('Kläck')||txt.includes('Hatch')?'🐣':'🔦';
      const key=txt.includes('Första')||txt.includes('First')?'firstCandling':txt.includes('Andra')||txt.includes('Second')?'secondCandling':txt.includes('Lockdown')?'lockdown':'hatchDay';
      el.innerHTML=`${icon} ${tr(key)}: <b>${id}</b>`;
    });
    document.querySelectorAll('.task-done-note').forEach(el=>el.textContent=tr('savedDone'));
    document.querySelectorAll('.task-check-item button').forEach(btn=>{
      if(/Ångra|Undo|Fortryd|Angre|Kumoa/i.test(btn.textContent))btn.textContent=tr('undo');
      else btn.textContent=tr('complete');
    });
    const box=document.querySelector('.tasks-complete-box'); if(box)box.textContent=tr('allDoneBox');
    const tasks=document.getElementById('tasks'); if(tasks && /Inga planerade|No planned|Ingen planlagte|Ei suunniteltuja/.test(tasks.textContent))tasks.innerHTML=`<div class="empty">${tr('noTasksToday')}</div>`;
  }
  function translateHatchSummary(){
    const hs=document.getElementById('hatch-summary'); if(!hs)return;
    hs.querySelectorAll('.hatch-summary-title').forEach(el=>el.textContent=tr('activeHatches'));
    const h3=hs.querySelector('h3');
    if(h3){const n=extractNum(h3.textContent);h3.textContent=`${n} ${tr('eggsInIncubator')}`}
    const p=hs.querySelector('.hatch-summary-main .muted b');
    if(p){const nums=p.textContent.match(/\d+/g)||[];if(nums.length>=2)p.textContent=`${tr('day')} ${nums[0]} ${tr('of')} ${nums[1]}`}
    const boxes=hs.querySelectorAll('.hatch-meta-box');
    if(boxes[0]){
      const b=boxes[0].querySelector('b'), s=boxes[0].querySelector('small');
      if(b)b.textContent=`🔦 ${tr('nextEvent')}`;
      if(s){
        const date=(s.innerHTML.match(/\d{4}-\d{2}-\d{2}/)||[''])[0];
        const n=(s.textContent.match(/om\s+(\d+)|in\s+(\d+)|(\d+)\s+dag|(\d+)\s+day|(\d+)\s+päiv/i)||[]).filter(Boolean).pop();
        if(/Inget|Nothing|Intet|Ingenting|Ei suunniteltua/.test(s.textContent))s.innerHTML=tr('nothingPlanned')+(date?`<br>${date}`:'');
        else {
          let ev=/Lockdown/i.test(s.textContent)?tr('lockdown'):/Lysning|Candling|Lysing|Läpivalaisu/i.test(s.textContent)?tr('candling')||tr('firstCandling'):tr('hatchDay');
          s.innerHTML=`${ev} ${n?fmt('inDays',n):tr('todayLower')}${date?`<br>${date}`:''}`;
        }
      }
    }
    if(boxes[1]){
      const b=boxes[1].querySelector('b'), s=boxes[1].querySelector('small');
      if(b)b.textContent=`🐣 ${tr('estimatedHatch')}`;
      if(s){
        const date=(s.innerHTML.match(/\d{4}-\d{2}-\d{2}/)||[''])[0];
        const n=(s.textContent.match(/(\d+)/)||[])[1]||'';
        const txt=/passerad|overdue|passert|ohitettu/i.test(s.textContent)?tr('todaySlashPassed'):(n?fmt('inDaysCap',n):tr('todayCap'));
        s.innerHTML=txt+(date?`<br>${date}`:'');
      }
    }
    hs.querySelectorAll('.status-strip .status-chip').forEach(ch=>{
      const n=extractNum(ch.textContent);
      if(/Aktiva|Active|Aktive|Aktiiviset/.test(ch.textContent))ch.textContent=`🟢 ${tr('active')}: ${n}`;
      else if(/Osäkra|Uncertain|Usikre|Epävarmat/.test(ch.textContent))ch.textContent=`🟡 ${tr('uncertain')}: ${n}`;
      else if(/Avbrutna|Stopped|Afbrudte|Avbrutte|Keskeytetyt/.test(ch.textContent))ch.textContent=`🔴 ${tr('stopped')}: ${n}`;
      else if(/Överlevnadsgrad|Survival|Overlevelse|Selviytymis/.test(ch.textContent))ch.textContent=`📈 ${tr('survivalRate')}: ${n}%`;
    });
    if(/Inga ägg|No eggs|Ingen æg|Ingen egg|ei ole munia/i.test(hs.textContent)){
      hs.querySelector('.empty') && (hs.querySelector('.empty').textContent=tr('noEggsInIncubator'));
      hs.querySelector('button') && (hs.querySelector('button').textContent=tr('addEgg'));
    }
  }
  function translateUpcoming(){
    const up=document.getElementById('upcoming'); if(!up)return;
    if(/Inga kommande|No upcoming|Ingen kommende|Ei tulevia/.test(up.textContent)){up.innerHTML=`<div class="empty">${tr('noUpcoming')}</div>`;return}
    [...up.children].forEach(div=>{
      const date=(div.textContent.match(/\d{4}-\d{2}-\d{2}/)||[''])[0];
      const left=(div.textContent.match(/om\s+(\d+)|in\s+(\d+)|(\d+)\s+d/i)||[]).filter(Boolean).pop();
      let kind=/Första|First/.test(div.textContent)?tr('firstCandling'):/Andra|Second/.test(div.textContent)?tr('secondCandling'):/Lockdown/.test(div.textContent)?tr('lockdown'):tr('hatchDay');
      const id=(div.textContent.match(/[A-ZÅÄÖ]{0,4}\d+|[A-Z]{1,4}/)||['']).pop();
      div.innerHTML=`<b>${date}</b> (${left?fmt('inDays',left):tr('todayCap')}) – ${kind} ${id}`;
    });
  }
  function translateHatchesList(){
    const h=document.getElementById('hatches'); if(!h)return;
    const l=lang();
    const word={
      egg:{sv:'Ägg',en:'Egg',da:'Æg',no:'Egg',fi:'Muna'},
      breed:{sv:'Ras',en:'Breed',da:'Race',no:'Rase',fi:'Rotu'},
      incubator:{sv:'Kläckare',en:'Incubator',da:'Rugemaskine',no:'Rugemaskin',fi:'Hautomakone'},
      hatchesIn:{sv:'Kläcks om {n} dagar',en:'Hatches in {n} days',da:'Klækker om {n} dage',no:'Klekkes om {n} dager',fi:'Kuoriutuu {n} päivän kuluttua'},
      hatchesTomorrow:{sv:'Kläcks imorgon',en:'Hatches tomorrow',da:'Klækker i morgen',no:'Klekkes i morgen',fi:'Kuoriutuu huomenna'},
      hatchToday:{sv:'Kläckdag idag',en:'Hatch day today',da:'Klækkedag i dag',no:'Klekkedag i dag',fi:'Kuoriutumispäivä tänään'},
      overdue:{sv:'{n} dagar över beräknad kläckning',en:'{n} days past estimated hatch',da:'{n} dage efter forventet klækning',no:'{n} dager over beregnet klekking',fi:'{n} päivää yli arvioidun kuoriutumisen'},
      lockdownIn:{sv:'Lockdown om {n} dagar',en:'Lockdown in {n} days',da:'Lockdown om {n} dage',no:'Lockdown om {n} dager',fi:'Lockdown {n} päivän kuluttua'},
      lockdownTomorrow:{sv:'Lockdown imorgon',en:'Lockdown tomorrow',da:'Lockdown i morgen',no:'Lockdown i morgen',fi:'Lockdown huomenna'},
      lockdownToday:{sv:'Lockdown idag',en:'Lockdown today',da:'Lockdown i dag',no:'Lockdown i dag',fi:'Lockdown tänään'}
    };
    const w=(k)=>((word[k]&&word[k][l])||word[k].sv);
    const replN=(s,n)=>s.replace('{n}',n);
    if(/Inga aktiva kläckningar|No active hatches|Ingen aktive|Ei aktiivisia/.test(h.textContent)){
      h.innerHTML=`<div class="card"><div class="body"><p>${tr('noActiveHatchesYet')}</p><button class="btn primary" data-action="add" data-type="egg">${tr('addEgg')}</button></div></div>`;return;
    }
    h.querySelectorAll('.card').forEach(card=>{
      const head=card.querySelector('h3');
      if(head){
        const btnId=card.querySelector('[data-id]')?.getAttribute('data-id')||'';
        const txt=head.textContent||'';
        const id=(txt.match(/(?:Ägg|Egg|eggs|Æg|Muna)\s+([^\s]+)/i)||[])[1]||btnId;
        const day=(txt.match(/(?:Dag|Day|Päivä)\s+(\d+)/i)||[])[1]||extractNum(txt);
        head.innerHTML=`🥚 ${w('egg')}${id?' '+id:''} <span class="pill">${tr('day')} ${day}</span>`;
      }
      card.querySelectorAll('p').forEach(p=>{
        p.innerHTML=p.innerHTML
          .replace(/<b>(?:Ras|Breed|Race|Rase|Rotu):<\/b>/gi,`<b>${w('breed')}:</b>`)
          .replace(/<b>(?:Kläckare|Incubator|Rugemaskine|Rugemaskin|Hautomakone|Rugemaskiner|Incubators):<\/b>/gi,`<b>${w('incubator')}:</b>`)
          .replace(/<b>(?:Beräknad kläckning|Estimated hatch|Forventet klækning|Beregnet klekking|Arvioitu kuoriutuminen):<\/b>/gi,`<b>${tr('estimatedHatch')}:</b>`);
      });
      card.querySelectorAll('.body .pill').forEach(pill=>{
        const txt=pill.textContent||'';
        const n=(txt.match(/(\d+)/)||[])[1];
        if(/Kläcks om|Hatches in|Klækker om|Klekkes om|Kuoriutuu/i.test(txt) && n) pill.textContent='🐣 '+replN(w('hatchesIn'),n);
        else if(/Kläcks imorgon|Hatches tomorrow|Klækker i morgen|Klekkes i morgen|huomenna/i.test(txt)) pill.textContent='🐣 '+w('hatchesTomorrow');
        else if(/Kläckdag idag|Hatch day today|Klækkedag|Klekkedag|Kuoriutumispäivä/i.test(txt)) pill.textContent='🐣 '+w('hatchToday');
        else if(/över beräknad|past estimated|efter forventet|over beregnet|yli arvioidun/i.test(txt) && n) pill.textContent='⏳ '+replN(w('overdue'),n);
        else if(/Lockdown om|Lockdown in/i.test(txt) && n) pill.textContent='🔒 '+replN(w('lockdownIn'),n);
        else if(/Lockdown imorgon|Lockdown tomorrow|Lockdown i morgen|Lockdown huomenna/i.test(txt)) pill.textContent='🔒 '+w('lockdownTomorrow');
        else if(/Lockdown idag|Lockdown today|Lockdown i dag|Lockdown tänään/i.test(txt)) pill.textContent='🔥 '+w('lockdownToday');
      });
    });
    h.querySelectorAll('.actions button').forEach(btn=>{
      if(/Livsbok|Life book|Livsbog|Elämänkirja/.test(btn.textContent))btn.textContent='📖 '+tr('lifeBook');
      if(/Redigera|Edit|Redigér|Rediger|Muokkaa/.test(btn.textContent))btn.textContent=tr('edit');
      if(/Ta bort|Delete|Slet|Poista/.test(btn.textContent))btn.textContent=tr('delete');
    });
  }
  function translateInsights(){
    const card=document.querySelector('.insight-card'); if(!card)return;
    const head=card.querySelector('h3'); if(head){const pill=head.querySelector('.pill')?.outerHTML||'';head.innerHTML=`🧠 ${tr('insights')} ${pill}`}
    const titleMap={'Åtgärd idag':'actionToday','Aktiv kläckning':'activeHatch','Osäkra ägg':'uncertainEggs','Kläckningshistorik':'hatchHistory','Bygger statistik':'buildingStats','Lysningsmönster':'candlingPattern','Viktuppföljning':'weightFollowUp','Värpningsdata saknas':'layingMissing','Nästa steg':'nextStep'};
    const tagMap={'Prioritet':'priority','Kläckning':'hatching','Uppföljning':'followUpTag','Statistik':'statisticsTag','Databas':'database','Lysning':'candlingTag','Kycklingar':'chicksTag','Värpning':'layingTag','Start':'start'};
    card.querySelectorAll('.insight-title').forEach(el=>{
      const icon=(el.textContent.match(/^\S+/)||[''])[0]; const txt=el.textContent.replace(/^\S+\s*/,'').trim();
      if(titleMap[txt])el.textContent=`${icon} ${tr(titleMap[txt])}`;
    });
    card.querySelectorAll('.insight-tag').forEach(el=>{const k=tagMap[el.textContent.trim()];if(k)el.textContent=tr(k)});
  }
  function translateStatic(){
    setText('.top small',tr('tagline'));
    setText('.dashboard-kicker',tr('overview').toUpperCase());
    setLabel('s-eggs','activeEggs');setLabel('s-inc','incubators');setLabel('s-chicks','chicks');setLabel('s-flock','flock');
    translateSubtitles();translateQuickCards();
    setText('.reg-title',tr('registerEvent'));setText('.reg-sub',tr('registerSub'));
    document.querySelectorAll('.nav').forEach(btn=>{const v=btn.getAttribute('data-view');const lab=btn.querySelector('.nav-label');if(lab&&L[lang()][v])lab.textContent=tr(v)});
    translateAccordions();
  }
  function run(){
    if(!document.getElementById('view-dashboard'))return;
    translateStatic();translateFarmToday();translateTasks();translateHatchSummary();translateUpcoming();translateHatchesList();translateInsights();
  }
  let busy=false;
  function schedule(){if(busy)return;busy=true;requestAnimationFrame(()=>{try{run()}catch(e){}busy=false})}
  document.addEventListener('DOMContentLoaded',schedule);
  window.addEventListener('load',schedule);
  document.addEventListener('click',()=>setTimeout(schedule,60),true);
  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true,characterData:true});
  setInterval(schedule,1000);
})();

/* PoultryMaster v2.10.1 – Dashboard Today Tasks I18N Fix
   Scope: Dashboard "today task" card + Most important today checklist.
   Languages: Svenska, English, Dansk, Norsk, Suomi.
   No data changes. No layout changes. */
(function(){
  const KEY='egg_manager_v2';
  const D={
    sv:{today:'idag',active:'Aktiva',chicks:'Kycklingar',flock:'Flock',todayWork:'Dagens arbete',todaysTip:'Dagens tips',done:'klara',allDoneToday:'Allt klart för idag',stable:'Stabil',hatchClose:'Kläckning nära',lockdownToday:'Lockdown idag',candlingDay:'Lysningsdag',followUp:'Följ upp',stableStopped:'Stabil med avbrott',noActiveHatch:'Ingen aktiv kläckning',allTasksDoneMsg:'Alla planerade uppgifter är genomförda. PoultryMaster fortsätter hålla koll på gården.',stableMsg:'Allt ser stabilt ut idag. Öppna korten för mer detaljer.',hatchCloseMsg:'{n} ägg är vid kläckdag eller passerad beräknad kläckning. Öppna inte kläckaren i onödan.',lockdownTodayMsg:'{n} ägg går in i lockdown idag. Förbered genom att stoppa vändning och höja fukten enligt din plan.',candlingDayMsg:'{n} ägg ska lysas idag. Logga resultatet direkt efter varje ägg.',followUpMsg:'{n} ägg är markerade som osäkra. Planera en extra kontroll innan du fattar beslut.',stableStoppedMsg:'{active} ägg är aktiva och {stopped} har avbrutits. Läget är under kontroll.',noActiveHatchMsg:'Inga ägg är aktiva just nu. Registrera en ny omgång när du startar nästa kläckning.',allTasksDoneTip:'Bra jobbat. Nu återstår normal tillsyn och att hålla kläckaren stabil.',stableTip:'Fortsätt hålla temperatur och vattennivå stabilt.',hatchCloseTip:'Håll luftfuktigheten stabil och låt kycklingarna arbeta i lugn och ro.',lockdownTip:'Efter lockdown ska kläckaren öppnas så lite som möjligt.',candlingTip:'Ta ut ett ägg i taget, lys i mörkt rum och välj hur säker du är på observationen.',followUpTip:'Osäkra ägg ska hellre följas upp en gång extra än kasseras för tidigt.',stableStoppedTip:'Dokumentationen i Livsboken gör att du kan se mönster efter flera kläckningar.',noActiveHatchTip:'Skapa gärna en omgång först, så blir historiken tydligare.',firstCandling:'Första lysning',secondCandling:'Andra lysning',lockdown:'Lockdown',hatchDay:'Kläckdag',savedDone:'Klart och sparat i dagens logg.',undo:'Ångra',complete:'Klar',noTasksToday:'✅ Inga planerade uppgifter idag.'},
    en:{today:'today',active:'Active',chicks:'Chicks',flock:'Flock',todayWork:'Today’s work',todaysTip:'Today’s tip',done:'done',allDoneToday:'All done for today',stable:'Stable',hatchClose:'Hatch is close',lockdownToday:'Lockdown today',candlingDay:'Candling day',followUp:'Follow up',stableStopped:'Stable with stopped eggs',noActiveHatch:'No active hatch',allTasksDoneMsg:'All planned tasks are completed. PoultryMaster keeps monitoring the farm.',stableMsg:'Everything looks stable today. Open the cards for more details.',hatchCloseMsg:'{n} eggs are at hatch day or past the estimated hatch date. Do not open the incubator unnecessarily.',lockdownTodayMsg:'{n} eggs enter lockdown today. Stop turning and raise humidity according to your plan.',candlingDayMsg:'{n} eggs should be candled today. Log the result directly after each egg.',followUpMsg:'{n} eggs are marked as uncertain. Plan an extra check before making a decision.',stableStoppedMsg:'{active} eggs are active and {stopped} have been stopped. Everything is under control.',noActiveHatchMsg:'No eggs are active right now. Register a new batch when you start the next hatch.',allTasksDoneTip:'Good work. Now normal supervision remains — keep the incubator stable.',stableTip:'Keep temperature and water level stable.',hatchCloseTip:'Keep humidity stable and let the chicks work in peace.',lockdownTip:'After lockdown, open the incubator as little as possible.',candlingTip:'Take one egg at a time, candle in a dark room, and record how certain you are.',followUpTip:'Uncertain eggs are better checked once more than discarded too early.',stableStoppedTip:'The Life book documentation helps you spot patterns across several hatches.',noActiveHatchTip:'Create a batch first so the history becomes clearer.',firstCandling:'First candling',secondCandling:'Second candling',lockdown:'Lockdown',hatchDay:'Hatch day',savedDone:'Done and saved in today’s log.',undo:'Undo',complete:'Done',noTasksToday:'✅ No planned tasks today.'},
    da:{today:'i dag',active:'Aktive',chicks:'Kyllinger',flock:'Flok',todayWork:'Dagens arbejde',todaysTip:'Dagens tip',done:'klare',allDoneToday:'Alt klart for i dag',stable:'Stabil',hatchClose:'Klækning tæt på',lockdownToday:'Lockdown i dag',candlingDay:'Lysningsdag',followUp:'Følg op',stableStopped:'Stabil med afbrudte æg',noActiveHatch:'Ingen aktiv klækning',allTasksDoneMsg:'Alle planlagte opgaver er udført. PoultryMaster holder fortsat øje med gården.',stableMsg:'Alt ser stabilt ud i dag. Åbn kortene for flere detaljer.',hatchCloseMsg:'{n} æg er på klækkedag eller efter forventet klækning. Åbn ikke rugemaskinen unødigt.',lockdownTodayMsg:'{n} æg går i lockdown i dag. Stop vending og hæv fugten efter din plan.',candlingDayMsg:'{n} æg skal lyses i dag. Log resultatet direkte efter hvert æg.',followUpMsg:'{n} æg er markeret som usikre. Planlæg en ekstra kontrol før du beslutter dig.',stableStoppedMsg:'{active} æg er aktive, og {stopped} er afbrudt. Situationen er under kontrol.',noActiveHatchMsg:'Ingen æg er aktive lige nu. Registrér et nyt hold, når du starter næste klækning.',allTasksDoneTip:'Godt arbejde. Nu mangler kun normalt tilsyn og at holde rugemaskinen stabil.',stableTip:'Hold temperatur og vandniveau stabilt.',hatchCloseTip:'Hold fugten stabil og lad kyllingerne arbejde i ro.',lockdownTip:'Efter lockdown skal rugemaskinen åbnes så lidt som muligt.',candlingTip:'Tag ét æg ad gangen, lys i et mørkt rum, og angiv hvor sikker observationen er.',followUpTip:'Usikre æg bør hellere kontrolleres én gang ekstra end kasseres for tidligt.',stableStoppedTip:'Dokumentationen i Livsbogen hjælper dig med at se mønstre over flere klækninger.',noActiveHatchTip:'Opret gerne et hold først, så historikken bliver tydeligere.',firstCandling:'Første lysning',secondCandling:'Anden lysning',lockdown:'Lockdown',hatchDay:'Klækkedag',savedDone:'Klart og gemt i dagens log.',undo:'Fortryd',complete:'Klar',noTasksToday:'✅ Ingen planlagte opgaver i dag.'},
    no:{today:'i dag',active:'Aktive',chicks:'Kyllinger',flock:'Flokk',todayWork:'Dagens arbeid',todaysTip:'Dagens tips',done:'klare',allDoneToday:'Alt klart for i dag',stable:'Stabil',hatchClose:'Klekking nærmer seg',lockdownToday:'Lockdown i dag',candlingDay:'Lysingsdag',followUp:'Følg opp',stableStopped:'Stabil med avbrutte egg',noActiveHatch:'Ingen aktiv klekking',allTasksDoneMsg:'Alle planlagte oppgaver er utført. PoultryMaster holder fortsatt oversikt over gården.',stableMsg:'Alt ser stabilt ut i dag. Åpne kortene for flere detaljer.',hatchCloseMsg:'{n} egg er på klekkedag eller forbi beregnet klekking. Ikke åpne rugemaskinen unødvendig.',lockdownTodayMsg:'{n} egg går i lockdown i dag. Stopp vending og øk fuktigheten etter planen din.',candlingDayMsg:'{n} egg skal lyses i dag. Logg resultatet rett etter hvert egg.',followUpMsg:'{n} egg er merket som usikre. Planlegg en ekstra kontroll før du tar en beslutning.',stableStoppedMsg:'{active} egg er aktive, og {stopped} er avbrutt. Situasjonen er under kontroll.',noActiveHatchMsg:'Ingen egg er aktive akkurat nå. Registrer et nytt kull når du starter neste klekking.',allTasksDoneTip:'Godt jobbet. Nå gjenstår normalt tilsyn og å holde rugemaskinen stabil.',stableTip:'Hold temperatur og vannnivå stabilt.',hatchCloseTip:'Hold fuktigheten stabil og la kyllingene arbeide i ro.',lockdownTip:'Etter lockdown skal rugemaskinen åpnes så lite som mulig.',candlingTip:'Ta ett egg om gangen, lys i et mørkt rom og registrer hvor sikker du er.',followUpTip:'Usikre egg bør heller følges opp én gang ekstra enn kasseres for tidlig.',stableStoppedTip:'Dokumentasjonen i Livsboken hjelper deg å se mønstre over flere klekkinger.',noActiveHatchTip:'Opprett gjerne et kull først, så blir historikken tydeligere.',firstCandling:'Første lysing',secondCandling:'Andre lysing',lockdown:'Lockdown',hatchDay:'Klekkedag',savedDone:'Klart og lagret i dagens logg.',undo:'Angre',complete:'Klar',noTasksToday:'✅ Ingen planlagte oppgaver i dag.'},
    fi:{today:'tänään',active:'Aktiiviset',chicks:'Poikaset',flock:'Parvi',todayWork:'Tämän päivän työ',todaysTip:'Päivän vinkki',done:'valmis',allDoneToday:'Kaikki valmista tänään',stable:'Vakaa',hatchClose:'Kuoriutuminen lähellä',lockdownToday:'Lockdown tänään',candlingDay:'Läpivalaisupäivä',followUp:'Seuraa',stableStopped:'Vakaa, keskeytyksiä mukana',noActiveHatch:'Ei aktiivista haudontaa',allTasksDoneMsg:'Kaikki suunnitellut tehtävät on tehty. PoultryMaster jatkaa tilan seurantaa.',stableMsg:'Kaikki näyttää vakaalta tänään. Avaa kortit nähdäksesi lisätiedot.',hatchCloseMsg:'{n} munaa on kuoriutumispäivässä tai arvioitu päivä on ohitettu. Älä avaa hautomakonetta turhaan.',lockdownTodayMsg:'{n} munaa siirtyy lockdowniin tänään. Lopeta kääntö ja nosta kosteutta suunnitelmasi mukaan.',candlingDayMsg:'{n} munaa tulee läpivalaista tänään. Kirjaa tulos heti jokaisen munan jälkeen.',followUpMsg:'{n} munaa on merkitty epävarmoiksi. Suunnittele lisätarkistus ennen päätöstä.',stableStoppedMsg:'{active} munaa on aktiivisia ja {stopped} on keskeytetty. Tilanne on hallinnassa.',noActiveHatchMsg:'Aktiivisia munia ei ole juuri nyt. Rekisteröi uusi erä, kun aloitat seuraavan haudonnan.',allTasksDoneTip:'Hyvää työtä. Nyt riittää normaali valvonta ja hautomakoneen pitäminen vakaana.',stableTip:'Pidä lämpötila ja veden taso vakaana.',hatchCloseTip:'Pidä kosteus vakaana ja anna poikasten työskennellä rauhassa.',lockdownTip:'Lockdownin jälkeen hautomakonetta tulee avata mahdollisimman vähän.',candlingTip:'Ota yksi muna kerrallaan, läpivalaise pimeässä huoneessa ja kirjaa havaintosi varmuus.',followUpTip:'Epävarmat munat kannattaa tarkistaa vielä kerran ennen liian aikaista hylkäämistä.',stableStoppedTip:'Elämänkirjan dokumentointi auttaa näkemään kuvioita useiden haudontojen välillä.',noActiveHatchTip:'Luo ensin erä, jotta historiasta tulee selkeämpi.',firstCandling:'Ensimmäinen läpivalaisu',secondCandling:'Toinen läpivalaisu',lockdown:'Lockdown',hatchDay:'Kuoriutumispäivä',savedDone:'Valmis ja tallennettu päivän lokiin.',undo:'Kumoa',complete:'Valmis',noTasksToday:'✅ Ei suunniteltuja tehtäviä tänään.'}
  };
  function getState(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}}
  function lang(){return (getState().farmSettings||{}).language||'sv'}
  function tx(k){const l=lang();return (D[l]&&D[l][k])||D.sv[k]||k}
  function fmt(s,obj){return String(s).replace(/\{(\w+)\}/g,(_,k)=>obj&&obj[k]!=null?obj[k]:'')}
  function days(date){const d=new Date(date+'T00:00:00');const n=new Date();const t=new Date(n.getFullYear(),n.getMonth(),n.getDate());return Math.floor((t-d)/86400000)}
  function numbers(){
    const st=getState(), eggs=st.eggs||[], settings=st.settings||{};
    const active=eggs.filter(e=>e.status==='Inkuberas');
    const stopped=eggs.filter(e=>['Obefruktat','Dött embryo','Kasserat'].includes(e.status)).length;
    const uncertain=eggs.filter(e=>e.status==='Osäkert').length;
    let candling=0, lockdown=0, hatch=0;
    active.forEach(e=>{const d=days(e.dateSet); if(d===settings.candling1||d===settings.candling2)candling++; if(d===settings.lockdown)lockdown++; if(d>=settings.incubationDays)hatch++;});
    return {active:active.length, stopped, uncertain, candling, lockdown, hatch, chicks:(st.chicks||[]).length, flock:(st.flock||[]).length};
  }
  function statusKey(){
    const status=document.querySelector('.farm-today-status')?.textContent||document.querySelector('.farm-today-chip')?.textContent||'';
    if(/klart|done|valmista|klart/i.test(status))return 'allDoneToday';
    if(/Kläckning nära|Hatch is close|Klækning tæt|Klekking nær|Kuoriutuminen lähellä/i.test(status))return 'hatchClose';
    if(/Lockdown/i.test(status))return 'lockdownToday';
    if(/Lysningsdag|Candling day|Lysingsdag|Läpivalaisupäivä/i.test(status))return 'candlingDay';
    if(/Följ upp|Follow up|Følg op|Følg opp|Seuraa/i.test(status))return 'followUp';
    if(/Stabil med|Stable with|Vakaa, keskeytyksiä/i.test(status))return 'stableStopped';
    if(/Ingen aktiv|No active hatch|Ei aktiivista/i.test(status))return 'noActiveHatch';
    return 'stable';
  }
  function translateFarmTodayTaskBlock(){
    const n=numbers(), key=statusKey();
    const icon=(key==='hatchClose'||key==='noActiveHatch')?'🔴':(key==='stable'||key==='stableStopped'||key==='allDoneToday')?'🟢':'🟡';
    const label=tx(key);
    const status=document.querySelector('.farm-today-status'); if(status)status.textContent=`${icon} ${label}`;
    const chip=document.querySelector('.farm-today-chip'); if(chip)chip.textContent=label;
    const title=document.querySelector('.farm-today-title');
    if(title){const farm=(getState().farmSettings||{}).farmName||'PoultryMaster';title.textContent=`🌱 ${farm} ${tx('today')}`;}
    const msgKey={allDoneToday:'allTasksDoneMsg',stable:'stableMsg',hatchClose:'hatchCloseMsg',lockdownToday:'lockdownTodayMsg',candlingDay:'candlingDayMsg',followUp:'followUpMsg',stableStopped:'stableStoppedMsg',noActiveHatch:'noActiveHatchMsg'}[key]||'stableMsg';
    const count={hatchClose:n.hatch,lockdownToday:n.lockdown,candlingDay:n.candling,followUp:n.uncertain}[key]||0;
    const text=document.querySelector('.farm-today-text');
    if(text)text.textContent=fmt(tx(msgKey),{n:count,active:n.active,stopped:n.stopped});
    const tips={allDoneToday:'allTasksDoneTip',stable:'stableTip',hatchClose:'hatchCloseTip',lockdownToday:'lockdownTip',candlingDay:'candlingTip',followUp:'followUpTip',stableStopped:'stableStoppedTip',noActiveHatch:'noActiveHatchTip'};
    const tip=document.querySelector('.farm-today-tip'); if(tip)tip.textContent=`💡 ${tx('todaysTip')}: ${tx(tips[key]||'stableTip')}`;
    const mini=document.querySelectorAll('.farm-today-mini .status-chip');
    if(mini[0])mini[0].textContent=`🥚 ${tx('active')}: ${n.active}`;
    if(mini[1])mini[1].textContent=`🐣 ${tx('chicks')}: ${n.chicks}`;
    if(mini[2])mini[2].textContent=`🐓 ${tx('flock')}: ${n.flock}`;
    if(mini[3])mini[3].textContent=`📌 ${tx('todayWork')}: ${(mini[3].textContent.match(/\d+/)||['0'])[0]}`;
  }
  function translateChecklist(){
    const ph=document.querySelector('.today-progress-head');
    if(ph){const spans=ph.querySelectorAll('span');if(spans[0])spans[0].textContent=tx('todayWork');if(spans[1]){const nums=spans[1].textContent.match(/\d+/g)||['0','0'];spans[1].textContent=`${nums[0]}/${nums[1]} ${tx('done')}`;}}
    const taskRoot=document.getElementById('tasks');
    if(taskRoot && /Inga planerade|No planned|Ingen planlagte|Ei suunniteltuja/.test(taskRoot.textContent))taskRoot.innerHTML=`<div class="empty">${tx('noTasksToday')}</div>`;
    document.querySelectorAll('.task-check-text').forEach(el=>{
      const id=el.querySelector('b')?.textContent || '';
      const raw=el.textContent;
      let k='hatchDay', icon='🐣';
      if(/Första|First|Første|Ensimmäinen/.test(raw)){k='firstCandling';icon='🔦'}
      else if(/Andra|Second|Anden|Andre|Toinen/.test(raw)){k='secondCandling';icon='🔦'}
      else if(/Lockdown/.test(raw)){k='lockdown';icon='🔒'}
      el.innerHTML=`${icon} ${tx(k)}: <b>${id}</b>`;
    });
    document.querySelectorAll('.task-done-note').forEach(el=>el.textContent=tx('savedDone'));
    document.querySelectorAll('.task-check-item button').forEach(btn=>{
      if(/Ångra|Undo|Fortryd|Angre|Kumoa/i.test(btn.textContent))btn.textContent=tx('undo');
      else btn.textContent=tx('complete');
    });
  }
  function run(){
    const dash=document.getElementById('view-dashboard');
    if(!dash || dash.classList.contains('hidden'))return;
    try{translateFarmTodayTaskBlock();translateChecklist();}catch(e){}
  }
  let busy=false;function sched(){if(busy)return;busy=true;requestAnimationFrame(()=>{busy=false;run();});}
  document.addEventListener('DOMContentLoaded',sched);
  window.addEventListener('load',sched);
  document.addEventListener('click',()=>setTimeout(sched,60),true);
  window.addEventListener('storage',sched);
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true,characterData:true});
  setTimeout(sched,50);setTimeout(sched,300);setInterval(sched,1500);
})();