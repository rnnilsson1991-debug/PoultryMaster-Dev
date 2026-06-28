/* PoultryMaster v2.9.9 – Egg module I18N overlay
   Safe layer: translates rendered Egg module text only. No stored data changes. */
(function(){
  const KEY='egg_manager_v2';
  const L={
    sv:{eggsTitle:'Ägg & kläckare',add:'+ Lägg till',eggList:'Ägglista',incubators:'Kläckare',all:'Alla',active:'Aktiva',uncertain:'Osäkra',critical:'Kritiska',today:'Idag',soon:'Inom 7 dagar',noEggsFilter:'Inga ägg matchar filtret.',myIncubators:'Mina kläckare',manageIncubatorsText:'Hantera kläckare under Inställningar → Kläckare.',manageIncubators:'Hantera kläckare',noIncubators:'Inga kläckare registrerade.',unknownBreed:'Okänd ras',unknown:'Okänt',tapHide:'Tryck för att dölja detaljer',tapOpen:'Öppna kortet för mer detaljer',day:'Dag',of:'av',origin:'Ursprung',incubator:'Kläckare',startDate:'Startdatum',latestCandling:'Senaste lysning',noCandlingYet:'Ingen lysning ännu',batch:'Omgång',lifeBook:'Livsbok',events:'händelser',pmJudges:'PoultryMaster bedömer',pmMoreData:'Fortsätt samla observationer så blir bedömningen säkrare.',createChick:'Skapa kyckling',candling:'Lysning',edit:'Redigera',delete:'Ta bort',hatched:'Kläckt',stopped:'Avbrutet',hatching:'Kläckning',lockdown:'Lockdown',embryoDev:'Embryoutveckling',earlyDev:'Tidig utveckling',strong:'Stark',weakCritical:'Kritisk',next:'Nästa',firstCandling:'Första lysning',secondCandling:'Andra lysning',hatch:'Kläckning',followPlan:'Följ enligt plan',inDays:'om {n} dagar',todayLower:'idag',eggDone:'Avslutad – historiken finns kvar i Livsboken.',eggHatchedNext:'Skapa eller följ kycklingen i nästa livsfas.',hatchCanStart:'Kläckning kan börja',capacity:'Kapacitet',temperature:'Temperatur',humidity:'Fuktighet',turning:'Vändning',usedBy:'Används av',eggsUnit:'ägg',activeEggs:'aktiva ägg',standard:'Standard',noModel:'Ingen modell angiven',unnamedIncubator:'Namnlös kläckare'},
    en:{eggsTitle:'Eggs & incubators',add:'+ Add',eggList:'Egg list',incubators:'Incubators',all:'All',active:'Active',uncertain:'Uncertain',critical:'Critical',today:'Today',soon:'Within 7 days',noEggsFilter:'No eggs match the filter.',myIncubators:'My incubators',manageIncubatorsText:'Manage incubators under Settings → Incubators.',manageIncubators:'Manage incubators',noIncubators:'No incubators registered.',unknownBreed:'Unknown breed',unknown:'Unknown',tapHide:'Tap to hide details',tapOpen:'Open the card for more details',day:'Day',of:'of',origin:'Origin',incubator:'Incubator',startDate:'Start date',latestCandling:'Latest candling',noCandlingYet:'No candling yet',batch:'Batch',lifeBook:'Life book',events:'events',pmJudges:'PoultryMaster assessment',pmMoreData:'Keep collecting observations so the assessment becomes more reliable.',createChick:'Create chick',candling:'Candling',edit:'Edit',delete:'Delete',hatched:'Hatched',stopped:'Stopped',hatching:'Hatching',lockdown:'Lockdown',embryoDev:'Embryo development',earlyDev:'Early development',strong:'Strong',weakCritical:'Critical',next:'Next',firstCandling:'First candling',secondCandling:'Second candling',hatch:'Hatch',followPlan:'Follow the plan',inDays:'in {n} days',todayLower:'today',eggDone:'Finished – the history remains in the Life book.',eggHatchedNext:'Create or follow the chick in the next life stage.',hatchCanStart:'Hatching may begin',capacity:'Capacity',temperature:'Temperature',humidity:'Humidity',turning:'Turning',usedBy:'Used by',eggsUnit:'eggs',activeEggs:'active eggs',standard:'Default',noModel:'No model specified',unnamedIncubator:'Unnamed incubator'},
    da:{eggsTitle:'Æg & rugemaskiner',add:'+ Tilføj',eggList:'Ægliste',incubators:'Rugemaskiner',all:'Alle',active:'Aktive',uncertain:'Usikre',critical:'Kritiske',today:'I dag',soon:'Inden for 7 dage',noEggsFilter:'Ingen æg matcher filteret.',myIncubators:'Mine rugemaskiner',manageIncubatorsText:'Administrér rugemaskiner under Indstillinger → Rugemaskiner.',manageIncubators:'Administrér rugemaskiner',noIncubators:'Ingen rugemaskiner registreret.',unknownBreed:'Ukendt race',unknown:'Ukendt',tapHide:'Tryk for at skjule detaljer',tapOpen:'Åbn kortet for flere detaljer',day:'Dag',of:'af',origin:'Oprindelse',incubator:'Rugemaskine',startDate:'Startdato',latestCandling:'Seneste lysning',noCandlingYet:'Ingen lysning endnu',batch:'Hold',lifeBook:'Livsbog',events:'hændelser',pmJudges:'PoultryMaster vurderer',pmMoreData:'Fortsæt med at samle observationer, så vurderingen bliver sikrere.',createChick:'Opret kylling',candling:'Lysning',edit:'Redigér',delete:'Slet',hatched:'Klækket',stopped:'Afbrudt',hatching:'Klækning',lockdown:'Lockdown',embryoDev:'Embryoudvikling',earlyDev:'Tidlig udvikling',strong:'Stærk',weakCritical:'Kritisk',next:'Næste',firstCandling:'Første lysning',secondCandling:'Anden lysning',hatch:'Klækning',followPlan:'Følg planen',inDays:'om {n} dage',todayLower:'i dag',eggDone:'Afsluttet – historikken findes fortsat i Livsbogen.',eggHatchedNext:'Opret eller følg kyllingen i næste livsfase.',hatchCanStart:'Klækning kan begynde',capacity:'Kapacitet',temperature:'Temperatur',humidity:'Fugtighed',turning:'Vending',usedBy:'Bruges af',eggsUnit:'æg',activeEggs:'aktive æg',standard:'Standard',noModel:'Ingen model angivet',unnamedIncubator:'Unavngiven rugemaskine'},
    no:{eggsTitle:'Egg & rugemaskiner',add:'+ Legg til',eggList:'Eggliste',incubators:'Rugemaskiner',all:'Alle',active:'Aktive',uncertain:'Usikre',critical:'Kritiske',today:'I dag',soon:'Innen 7 dager',noEggsFilter:'Ingen egg matcher filteret.',myIncubators:'Mine rugemaskiner',manageIncubatorsText:'Administrer rugemaskiner under Innstillinger → Rugemaskiner.',manageIncubators:'Administrer rugemaskiner',noIncubators:'Ingen rugemaskiner registrert.',unknownBreed:'Ukjent rase',unknown:'Ukjent',tapHide:'Trykk for å skjule detaljer',tapOpen:'Åpne kortet for flere detaljer',day:'Dag',of:'av',origin:'Opprinnelse',incubator:'Rugemaskin',startDate:'Startdato',latestCandling:'Siste lysing',noCandlingYet:'Ingen lysing ennå',batch:'Omgång',lifeBook:'Livsbok',events:'hendelser',pmJudges:'PoultryMaster vurderer',pmMoreData:'Fortsett å samle observasjoner, så blir vurderingen sikrere.',createChick:'Opprett kylling',candling:'Lysing',edit:'Rediger',delete:'Slett',hatched:'Klekket',stopped:'Avbrutt',hatching:'Klekking',lockdown:'Lockdown',embryoDev:'Embryoutvikling',earlyDev:'Tidlig utvikling',strong:'Sterk',weakCritical:'Kritisk',next:'Neste',firstCandling:'Første lysing',secondCandling:'Andre lysing',hatch:'Klekking',followPlan:'Følg planen',inDays:'om {n} dager',todayLower:'i dag',eggDone:'Avsluttet – historikken finnes fortsatt i Livsboken.',eggHatchedNext:'Opprett eller følg kyllingen i neste livsfase.',hatchCanStart:'Klekking kan begynne',capacity:'Kapasitet',temperature:'Temperatur',humidity:'Fuktighet',turning:'Vending',usedBy:'Brukes av',eggsUnit:'egg',activeEggs:'aktive egg',standard:'Standard',noModel:'Ingen modell angitt',unnamedIncubator:'Navnløs rugemaskin'},
    fi:{eggsTitle:'Munat & hautomakoneet',add:'+ Lisää',eggList:'Munalista',incubators:'Hautomakoneet',all:'Kaikki',active:'Aktiiviset',uncertain:'Epävarmat',critical:'Kriittiset',today:'Tänään',soon:'7 päivän sisällä',noEggsFilter:'Yksikään muna ei vastaa suodatinta.',myIncubators:'Omat hautomakoneet',manageIncubatorsText:'Hallinnoi hautomakoneita kohdassa Asetukset → Hautomakoneet.',manageIncubators:'Hallinnoi hautomakoneita',noIncubators:'Ei rekisteröityjä hautomakoneita.',unknownBreed:'Tuntematon rotu',unknown:'Tuntematon',tapHide:'Piilota tiedot napauttamalla',tapOpen:'Avaa kortti nähdäksesi lisätiedot',day:'Päivä',of:'/',origin:'Alkuperä',incubator:'Hautomakone',startDate:'Aloituspäivä',latestCandling:'Viimeisin läpivalaisu',noCandlingYet:'Ei läpivalaisua vielä',batch:'Erä',lifeBook:'Elämänkirja',events:'tapahtumaa',pmJudges:'PoultryMaster arvioi',pmMoreData:'Jatka havaintojen keräämistä, jotta arvio tarkentuu.',createChick:'Luo poikanen',candling:'Läpivalaisu',edit:'Muokkaa',delete:'Poista',hatched:'Kuoriutunut',stopped:'Keskeytetty',hatching:'Kuoriutuminen',lockdown:'Lockdown',embryoDev:'Alkion kehitys',earlyDev:'Varhainen kehitys',strong:'Vahva',weakCritical:'Kriittinen',next:'Seuraava',firstCandling:'Ensimmäinen läpivalaisu',secondCandling:'Toinen läpivalaisu',hatch:'Kuoriutuminen',followPlan:'Seuraa suunnitelmaa',inDays:'{n} päivän kuluttua',todayLower:'tänään',eggDone:'Päättynyt – historia säilyy Elämänkirjassa.',eggHatchedNext:'Luo tai seuraa poikasta seuraavassa elämänvaiheessa.',hatchCanStart:'Kuoriutuminen voi alkaa',capacity:'Kapasiteetti',temperature:'Lämpötila',humidity:'Kosteus',turning:'Kääntö',usedBy:'Käytössä',eggsUnit:'munaa',activeEggs:'aktiivista munaa',standard:'Oletus',noModel:'Mallia ei ole määritetty',unnamedIncubator:'Nimetön hautomakone'}
  };
  function getState(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
  function lang(){return (getState().farmSettings&&getState().farmSettings.language)||'sv'}
  function tr(k){const l=lang();return (L[l]&&L[l][k])||L.sv[k]||k}
  function fmt(k,n){return tr(k).replace('{n}',n)}
  function set(el,text){if(el&&el.textContent!==text)el.textContent=text}
  function num(txt,fallback='0'){const m=String(txt||'').match(/\d+/);return m?m[0]:fallback}
  function visibleEggModule(){const v=document.getElementById('view-eggs');return v&&!v.classList.contains('hidden')}
  function translatePhaseText(txt){
    return String(txt||'')
      .replace('🐣 Kläckt','🐣 '+tr('hatched'))
      .replace('⚫ Avbrutet','⚫ '+tr('stopped'))
      .replace('🐣 Kläckning','🐣 '+tr('hatching'))
      .replace('🟧 Lockdown','🟧 '+tr('lockdown'))
      .replace('🟩 Embryoutveckling','🟩 '+tr('embryoDev'))
      .replace('🟦 Tidig utveckling','🟦 '+tr('earlyDev'));
  }
  function translateStatusPill(el){
    if(!el)return;let txt=el.textContent.trim();
    const map={Inkuberas:tr('active'),Kläckt:tr('hatched'),Osäkert:tr('uncertain'),Obefruktat:'Infertile','Dött embryo':'Dead embryo',Blodring:'Blood ring',Kasserat:'Discarded'};
    if(lang()==='sv')return;
    if(map[txt])set(el,map[txt]);
  }
  function translateHealth(el){
    if(!el)return;let t=el.textContent;
    if(/Kläckt|Hatched|Klækket|Klekket|Kuoriutunut/.test(t))set(el,'🐣 '+tr('hatched'));
    else if(/Stark|Strong|Stærk|Sterk|Vahva/.test(t))set(el,'🟢 '+tr('strong'));
    else if(/Kritisk|Critical|Kriittinen/.test(t))set(el,'🔴 '+tr('weakCritical'));
    else if(/Osäker|Uncertain|Usikker|Epävarma|Usikre/.test(t))set(el,'🟡 '+tr('uncertain'));
  }
  function translateNext(el){
    if(!el)return;let t=el.textContent,n=num(t,'');
    if(/Skapa eller följ/.test(t))return set(el,'🐣 '+tr('eggHatchedNext'));
    if(/Avslutad/.test(t))return set(el,'📖 '+tr('eggDone'));
    if(/Första lysning idag/.test(t))return set(el,'🔦 '+tr('firstCandling')+' '+tr('todayLower'));
    if(/Andra lysning idag/.test(t))return set(el,'🔦 '+tr('secondCandling')+' '+tr('todayLower'));
    if(/Lockdown idag/.test(t))return set(el,'🔒 '+tr('lockdown')+' '+tr('todayLower'));
    if(/Kläckning kan börja/.test(t))return set(el,'🐣 '+tr('hatchCanStart'));
    if(/Nästa:/.test(t)){
      let kind=/Första/.test(t)?tr('firstCandling'):/Andra/.test(t)?tr('secondCandling'):/Lockdown/.test(t)?tr('lockdown'):tr('hatch');
      return set(el,'📅 '+tr('next')+': '+kind+' '+fmt('inDays',n));
    }
    if(/Följ enligt plan/.test(t))return set(el,'📅 '+tr('followPlan'));
  }
  function translateEggCard(card){
    card.querySelectorAll('.pill').forEach(translateStatusPill);
    const sub=card.querySelector('.egg-subline'); if(sub){sub.childNodes.forEach(n=>{if(n.nodeType===3)n.nodeValue=translatePhaseText(n.nodeValue).replace('Okänd ras',tr('unknownBreed'))})}
    const hint=card.querySelector('.egg-expand-hint'); if(hint){if(/dölja|hide|skjule|piilota/i.test(hint.textContent))set(hint,tr('tapHide'));else set(hint,tr('tapOpen'))}
    const day=card.querySelector('.egg-day'); if(day){const m=day.textContent.match(/(\d+)\D+(\d+)/);if(m)set(day,`${tr('day')} ${m[1]} ${tr('of')} ${m[2]}`)}
    translateHealth(card.querySelector('.egg-health'));
    card.querySelectorAll('.egg-progress-top span:first-child').forEach(el=>set(el,translatePhaseText(el.textContent)));
    translateNext(card.querySelector('.egg-next'));
    const labels={Ursprung:'origin',Kläckare:'incubator',Startdatum:'startDate','Senaste lysning':'latestCandling',Omgång:'batch',Livsbok:'lifeBook',Kapacitet:'capacity',Temperatur:'temperature',Fuktighet:'humidity',Vändning:'turning','Används av':'usedBy'};
    card.querySelectorAll('.egg-detail-box b,.machine-grid b').forEach(b=>{const k=labels[b.textContent.trim()];if(k)set(b,tr(k))});
    card.querySelectorAll('.egg-detail-box span').forEach(s=>{
      if(s.textContent.trim()==='Okänt')set(s,tr('unknown'));
      if(s.textContent.includes('Ingen lysning ännu'))set(s,tr('noCandlingYet'));
      if(/\d+\s+händelser/.test(s.textContent))set(s,`${num(s.textContent)} ${tr('events')}`);
    });
    const pm=card.querySelector('.egg-pm-box b'); if(pm)set(pm,'🧠 '+tr('pmJudges'));
    const conc=card.querySelector('.egg-pm-conclusion'); if(conc&&/Fortsätt samla observationer/.test(conc.textContent))set(conc,tr('pmMoreData'));
    card.querySelectorAll('button').forEach(btn=>{
      if(/Skapa kyckling|Create chick|Opret kylling|Opprett kylling|Luo poikanen/.test(btn.textContent))set(btn,'🐣 '+tr('createChick'));
      else if(/Livsbok|Life book|Livsbog|Elämänkirja/.test(btn.textContent))set(btn,'📖 '+tr('lifeBook'));
      else if(/Lysning|Candling|Läpivalaisu|Lysing/.test(btn.textContent))set(btn,'🔦 '+tr('candling'));
      else if(/Redigera|Edit|Redigér|Rediger|Muokkaa/.test(btn.textContent))set(btn,tr('edit'));
      else if(/Ta bort|Delete|Slet|Slett|Poista/.test(btn.textContent))set(btn,tr('delete'));
    });
  }
  function translateIncubators(){
    const list=document.getElementById('egg-list'); if(!list)return;
    list.querySelectorAll('p.muted').forEach(p=>{if(/Mina kläckare|My incubators|Mine/.test(p.textContent))p.innerHTML=`<b>${tr('myIncubators')}</b><br>${tr('manageIncubatorsText')}`});
    list.querySelectorAll('button').forEach(b=>{if(/Hantera kläckare|Manage incubators|Administr/.test(b.textContent))set(b,tr('manageIncubators'))});
    list.querySelectorAll('.empty').forEach(e=>{if(/Inga kläckare/.test(e.textContent))set(e,tr('noIncubators'))});
    list.querySelectorAll('.machine-card').forEach(card=>{
      card.querySelectorAll('.pill').forEach(p=>{if(/Standard|Default|Oletus/.test(p.textContent))set(p,tr('standard'))});
      card.querySelectorAll('.machine-title').forEach(t=>{if(t.textContent.includes('Namnlös kläckare'))t.textContent=t.textContent.replace('Namnlös kläckare',tr('unnamedIncubator'))});
      card.querySelectorAll('.machine-meta').forEach(m=>{if(m.textContent.includes('Ingen modell angiven'))set(m,m.textContent.replace('Ingen modell angiven',tr('noModel')))});
      card.querySelectorAll('.machine-grid b').forEach(b=>{const k={Kapacitet:'capacity',Temperatur:'temperature',Fuktighet:'humidity',Lockdown:'lockdown',Vändning:'turning','Används av':'usedBy'}[b.textContent.trim()];if(k)set(b,tr(k))});
      card.querySelectorAll('.machine-grid span').forEach(s=>{s.textContent=s.textContent.replace(/ägg/g,tr('eggsUnit')).replace(/aktiva ägg/g,tr('activeEggs')).replace('/dygn','/day')});
      card.querySelectorAll('button').forEach(btn=>{if(/Redigera|Edit|Redigér|Rediger|Muokkaa/.test(btn.textContent))set(btn,tr('edit')); if(/Ta bort|Delete|Slet|Slett|Poista/.test(btn.textContent))set(btn,tr('delete'))});
    });
  }
  function translateEggs(){
    const sec=document.getElementById('view-eggs'); if(!sec)return;
    set(document.getElementById('eggs-title-main'),tr('eggsTitle'));
    const add=sec.querySelector('[data-action="add-current"]'); if(add)set(add,tr('add'));
    set(document.getElementById('tab-eggs'),tr('eggList'));
    set(document.getElementById('tab-inc'),tr('incubators'));
    const filterNames={all:'📦 '+tr('all'),active:'🟢 '+tr('active'),uncertain:'🟡 '+tr('uncertain'),critical:'🔴 '+tr('critical'),today:'🔦 '+tr('today'),soon:'🐣 '+tr('soon')};
    sec.querySelectorAll('.egg-filter-bar button').forEach(btn=>{const f=btn.dataset.filter;if(filterNames[f])set(btn,`${filterNames[f]} (${num(btn.textContent)})`)});
    sec.querySelectorAll('.card .body').forEach(b=>{if(/Inga ägg matchar filtret/.test(b.textContent))set(b,tr('noEggsFilter'))});
    sec.querySelectorAll('.egg-card-v2').forEach(translateEggCard);
    translateIncubators();
  }
  function run(){translateEggs()}
  let busy=false;function schedule(){if(busy)return;busy=true;requestAnimationFrame(()=>{try{run()}catch(e){}busy=false})}
  document.addEventListener('DOMContentLoaded',schedule);window.addEventListener('load',schedule);document.addEventListener('click',()=>setTimeout(schedule,80),true);
  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true,characterData:true});setInterval(schedule,900);
})();

/* PoultryMaster v2.9.9 – Egg module final I18N polish
   Safe layer: translates remaining UI-generated egg texts only. User data such as breeds, farm names, IDs and incubator names are preserved. */
(function(){
  const KEY='egg_manager_v2';
  const T={
    sv:{batchStart:'Omgång start',uncertain:'Osäkert',clearVessels:'Tydliga blodkärl',promising:'Ser lovande ut',bloodRing:'Blodring',infertile:'Obefruktat',deadEmbryo:'Dött embryo',discarded:'Kasserat',pmAbnormal:'Ägget visar avvikande tecken. Behåll bara ägget vidare om du vill bekräfta med ytterligare kontroll.',pmLowProb:'Otillräcklig sannolikhet – bekräfta innan beslut.',pmGoodProb:'Mycket god sannolikhet – fortsätt enligt plan.',pmNormal:'Ägget bedöms ha goda förutsättningar att fortsätta utvecklas normalt.',incubatorPrefix:'Kläckare',noImage:'Ingen bild',latestCandling:'Senaste lysning',nextSecondCandling:'Andra lysning',nextFirstCandling:'Första lysning',nextLockdown:'Lockdown / sista kontroll',nextHatch:'Beräknad kläckning'},
    en:{batchStart:'Batch start',uncertain:'Uncertain',clearVessels:'Clear blood vessels',promising:'Looks promising',bloodRing:'Blood ring',infertile:'Infertile',deadEmbryo:'Dead embryo',discarded:'Discarded',pmAbnormal:'The egg shows abnormal signs. Only keep it going if you want to confirm with an additional check.',pmLowProb:'Insufficient probability — confirm before making a decision.',pmGoodProb:'Very good probability — continue according to plan.',pmNormal:'The egg appears to have good conditions to continue developing normally.',incubatorPrefix:'Incubator',noImage:'No image',latestCandling:'Latest candling',nextSecondCandling:'Second candling',nextFirstCandling:'First candling',nextLockdown:'Lockdown / final check',nextHatch:'Estimated hatch'},
    da:{batchStart:'Hold start',uncertain:'Usikkert',clearVessels:'Tydelige blodkar',promising:'Ser lovende ud',bloodRing:'Blodring',infertile:'Ubefrugtet',deadEmbryo:'Dødt embryo',discarded:'Kasseret',pmAbnormal:'Ægget viser afvigende tegn. Behold kun ægget videre, hvis du vil bekræfte med en ekstra kontrol.',pmLowProb:'Utilstrækkelig sandsynlighed — bekræft før beslutning.',pmGoodProb:'Meget god sandsynlighed — fortsæt efter planen.',pmNormal:'Ægget vurderes at have gode forudsætninger for at fortsætte normal udvikling.',incubatorPrefix:'Rugemaskine',noImage:'Intet billede',latestCandling:'Seneste lysning',nextSecondCandling:'Anden lysning',nextFirstCandling:'Første lysning',nextLockdown:'Lockdown / sidste kontrol',nextHatch:'Forventet klækning'},
    no:{batchStart:'Omgång start',uncertain:'Usikkert',clearVessels:'Tydelige blodårer',promising:'Ser lovende ut',bloodRing:'Blodring',infertile:'Ubefruktet',deadEmbryo:'Dødt embryo',discarded:'Kassert',pmAbnormal:'Egget viser avvikende tegn. Behold egget videre bare hvis du vil bekrefte med en ekstra kontroll.',pmLowProb:'Utilstrekkelig sannsynlighet — bekreft før beslutning.',pmGoodProb:'Svært god sannsynlighet — fortsett etter planen.',pmNormal:'Egget vurderes å ha gode forutsetninger for å fortsette normal utvikling.',incubatorPrefix:'Rugemaskin',noImage:'Ingen bilde',latestCandling:'Siste lysing',nextSecondCandling:'Andre lysing',nextFirstCandling:'Første lysing',nextLockdown:'Lockdown / siste kontroll',nextHatch:'Beregnet klekking'},
    fi:{batchStart:'Erän aloitus',uncertain:'Epävarma',clearVessels:'Selvät verisuonet',promising:'Näyttää lupaavalta',bloodRing:'Verirengas',infertile:'Hedelmöittymätön',deadEmbryo:'Kuollut alkio',discarded:'Hylätty',pmAbnormal:'Munassa näkyy poikkeavia merkkejä. Jatka vain, jos haluat varmistaa tilanteen lisätarkastuksella.',pmLowProb:'Riittämätön todennäköisyys — varmista ennen päätöstä.',pmGoodProb:'Erittäin hyvä todennäköisyys — jatka suunnitelman mukaan.',pmNormal:'Munalla arvioidaan olevan hyvät edellytykset jatkaa normaalia kehitystä.',incubatorPrefix:'Hautomakone',noImage:'Ei kuvaa',latestCandling:'Viimeisin läpivalaisu',nextSecondCandling:'Toinen läpivalaisu',nextFirstCandling:'Ensimmäinen läpivalaisu',nextLockdown:'Lockdown / viimeinen tarkistus',nextHatch:'Arvioitu kuoriutuminen'}
  };
  function st(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
  function lang(){return (st().farmSettings&&st().farmSettings.language)||'sv'}
  function tr(k){const l=lang();return (T[l]&&T[l][k])||T.sv[k]||k}
  function inEggs(){const v=document.getElementById('view-eggs');return v&&!v.classList.contains('hidden')}
  function walkText(root,cb){const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(n){return n.nodeValue&&n.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});let n;while(n=w.nextNode())cb(n)}
  function repl(txt){
    let s=String(txt);
    const replacements=[
      [/Omgång start/g,tr('batchStart')],
      [/Senaste lysning/g,tr('latestCandling')],
      [/Osäkert/g,tr('uncertain')],
      [/Tydliga blodkärl/g,tr('clearVessels')],
      [/Ser lovande ut/g,tr('promising')],
      [/Blodring/g,tr('bloodRing')],
      [/Obefruktat/g,tr('infertile')],
      [/Dött embryo/g,tr('deadEmbryo')],
      [/Kasserat/g,tr('discarded')],
      [/Ägget visar avvikande tecken\. Behåll bara ägget vidare om du vill bekräfta med ytterligare kontroll\./g,tr('pmAbnormal')],
      [/Otillräcklig sannolikhet – bekräfta innan beslut\./g,tr('pmLowProb')],
      [/Mycket god sannolikhet – fortsätt enligt plan\./g,tr('pmGoodProb')],
      [/Ägget bedöms ha goda förutsättningar att fortsätta utvecklas normalt\./g,tr('pmNormal')],
      [/Kläckare:/g,tr('incubatorPrefix')+':'],
      [/Ingen bild/g,tr('noImage')],
      [/Andra lysning/g,tr('nextSecondCandling')],
      [/Första lysning/g,tr('nextFirstCandling')],
      [/Lockdown \/ sista kontroll/g,tr('nextLockdown')],
      [/Beräknad kläckning/g,tr('nextHatch')]
    ];
    replacements.forEach(([a,b])=>{s=s.replace(a,b)});
    return s;
  }
  function run(){
    if(!inEggs())return;
    const sec=document.getElementById('view-eggs');
    walkText(sec,n=>{const v=repl(n.nodeValue); if(v!==n.nodeValue)n.nodeValue=v});
  }
  let busy=false;function sched(){if(busy)return;busy=true;requestAnimationFrame(()=>{try{run()}catch(e){}busy=false})}
  document.addEventListener('DOMContentLoaded',sched);window.addEventListener('load',sched);document.addEventListener('click',()=>setTimeout(sched,80),true);
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true,characterData:true});setInterval(sched,800);
})();

/* PoultryMaster v2.9.9 – Eggs Final Polish
   Scope: Egg module + Life book UI labels only.
   Rule: interface/system text is translated; user-entered data, notes, breeds, IDs, farm names and incubator names are preserved. */
(function(){
  const KEY='egg_manager_v2';
  const L={
    sv:{
      eggsTitle:'Ägg & kläckare',add:'+ Lägg till',eggList:'Ägglista',incubators:'Kläckare',all:'Alla',active:'Aktiva',uncertain:'Osäkra',critical:'Kritiska',today:'Idag',soon:'Inom 7 dagar',
      activeOne:'Aktiv',criticalOne:'Kritisk',uncertainOne:'Osäkert',strong:'Stark',weakCritical:'Kritisk',hatched:'Kläckt',stopped:'Avbrutet',discarded:'Kasserat',infertile:'Obefruktat',deadEmbryo:'Dött embryo',bloodRing:'Blodring',
      unknown:'Okänd',unknownBreed:'Okänd ras',origin:'Ursprung',incubator:'Kläckare',startDate:'Startdatum',latestCandling:'Senaste lysning',noCandlingYet:'Ingen lysning ännu',batch:'Omgång',batchStart:'Omgång start',
      lifeBook:'Livsbok',events:'händelser',pmJudges:'PoultryMaster bedömer',pmMoreData:'Fortsätt med att samla observationer, så blir bedömningen säkrare.',
      createChick:'Skapa kyckling',candling:'Lysning',edit:'Redigera',delete:'Ta bort',tapHide:'Tryck för att dölja detaljer',tapOpen:'Öppna kortet för fler detaljer',
      day:'Dag',of:'av',next:'Nästa',nextFirstCandling:'Första lysning',nextSecondCandling:'Andra lysning',nextLockdown:'Lockdown / sista kontroll',nextHatch:'Beräknad kläckning',
      embryoDev:'Embryoutveckling',earlyDev:'Tidig utveckling',hatching:'Kläckning',lockdown:'Lockdown',hatch:'Kläckning',followPlan:'Följ planen',inDays:'om {n} dagar',todayLower:'idag',
      pmAbnormal:'Ägget visar avvikande tecken. Behåll bara ägget vidare om du vill bekräfta med ytterligare kontroll.',pmLowProb:'Otillräcklig sannolikhet – bekräfta innan beslut.',pmGoodProb:'Mycket god sannolikhet – fortsätt enligt plan.',pmNormal:'Ägget bedöms ha goda förutsättningar att fortsätta utvecklas normalt.',
      noImage:'Ingen bild',myIncubators:'Mina kläckare',manageIncubators:'Hantera kläckare',manageIncubatorsText:'Hantera kläckare under Inställningar → Kläckare.',capacity:'Kapacitet',temperature:'Temperatur',humidity:'Fuktighet',turning:'Vändning',usedBy:'Används av',eggsUnit:'ägg',activeEggs:'aktiva ägg',standard:'Standard',noModel:'Ingen modell angiven',unnamedIncubator:'Namnlös kläckare',noIncubators:'Inga kläckare registrerade.',
      lbTitle:'Livsbok',lbEggRegistered:'Ägget registrerades',lbAddedBatch:'Kopplades till omgång',lbMarkedHatched:'Markerades som kläckt',lbDevelopmentStopped:'Utvecklingen avbröts',lbCandlingDay:'Lysning dag {n}',lbHatchedChick:'Kläcktes / registrerades som kyckling',lbMovedFlock:'Flyttades vidare mot flock',lbRegisteredFlock:'Registrerades i flocken',lbRinged:'Ringmärktes',lbBreedingStatus:'Avelsstatus uppdaterad',srcEgg:'Ägg',srcBatch:'Omgång',srcCandling:'Lysning',srcChick:'Kyckling',srcFlock:'Flock',srcBreeding:'Avel',gender:'Kön',ring:'Ring',ringNumber:'Ringnummer'
    },
    en:{
      eggsTitle:'Eggs & incubators',add:'+ Add',eggList:'Egg list',incubators:'Incubators',all:'All',active:'Active',uncertain:'Uncertain',critical:'Critical',today:'Today',soon:'Within 7 days',
      activeOne:'Active',criticalOne:'Critical',uncertainOne:'Uncertain',strong:'Strong',weakCritical:'Critical',hatched:'Hatched',stopped:'Stopped',discarded:'Discarded',infertile:'Infertile',deadEmbryo:'Dead embryo',bloodRing:'Blood ring',
      unknown:'Unknown',unknownBreed:'Unknown breed',origin:'Origin',incubator:'Incubator',startDate:'Start date',latestCandling:'Latest candling',noCandlingYet:'No candling yet',batch:'Batch',batchStart:'Batch start',
      lifeBook:'Life book',events:'events',pmJudges:'PoultryMaster assessment',pmMoreData:'Keep collecting observations to make the assessment more reliable.',
      createChick:'Create chick',candling:'Candling',edit:'Edit',delete:'Delete',tapHide:'Tap to hide details',tapOpen:'Open the card for more details',
      day:'Day',of:'of',next:'Next',nextFirstCandling:'First candling',nextSecondCandling:'Second candling',nextLockdown:'Lockdown / final check',nextHatch:'Estimated hatch',
      embryoDev:'Embryo development',earlyDev:'Early development',hatching:'Hatching',lockdown:'Lockdown',hatch:'Hatch',followPlan:'Follow the plan',inDays:'in {n} days',todayLower:'today',
      pmAbnormal:'The egg shows abnormal signs. Only keep it going if you want to confirm with an additional check.',pmLowProb:'Insufficient probability — confirm before making a decision.',pmGoodProb:'Very good probability — continue according to plan.',pmNormal:'The egg appears to have good conditions to continue developing normally.',
      noImage:'No image',myIncubators:'My incubators',manageIncubators:'Manage incubators',manageIncubatorsText:'Manage incubators under Settings → Incubators.',capacity:'Capacity',temperature:'Temperature',humidity:'Humidity',turning:'Turning',usedBy:'Used by',eggsUnit:'eggs',activeEggs:'active eggs',standard:'Standard',noModel:'No model specified',unnamedIncubator:'Unnamed incubator',noIncubators:'No incubators registered.',
      lbTitle:'Life book',lbEggRegistered:'Egg registered',lbAddedBatch:'Added to batch',lbMarkedHatched:'Marked as hatched',lbDevelopmentStopped:'Development stopped',lbCandlingDay:'Candling day {n}',lbHatchedChick:'Hatched / registered as chick',lbMovedFlock:'Moved toward flock',lbRegisteredFlock:'Registered in flock',lbRinged:'Ring marked',lbBreedingStatus:'Breeding status updated',srcEgg:'Egg',srcBatch:'Batch',srcCandling:'Candling',srcChick:'Chick',srcFlock:'Flock',srcBreeding:'Breeding',gender:'Sex',ring:'Ring',ringNumber:'Ring number'
    },
    da:{
      eggsTitle:'Æg & rugemaskiner',add:'+ Tilføj',eggList:'Ægliste',incubators:'Rugemaskiner',all:'Alle',active:'Aktive',uncertain:'Usikre',critical:'Kritiske',today:'I dag',soon:'Inden 7 dage',
      activeOne:'Aktiv',criticalOne:'Kritisk',uncertainOne:'Usikkert',strong:'Stærk',weakCritical:'Kritisk',hatched:'Klækket',stopped:'Afbrudt',discarded:'Kasseret',infertile:'Ubefrugtet',deadEmbryo:'Dødt embryo',bloodRing:'Blodring',
      unknown:'Ukendt',unknownBreed:'Ukendt race',origin:'Oprindelse',incubator:'Rugemaskine',startDate:'Startdato',latestCandling:'Seneste lysning',noCandlingYet:'Ingen lysning endnu',batch:'Hold',batchStart:'Hold start',
      lifeBook:'Livsbog',events:'hændelser',pmJudges:'PoultryMaster vurderer',pmMoreData:'Fortsæt med at samle observationer, så vurderingen bliver mere sikker.',
      createChick:'Opret kylling',candling:'Lysning',edit:'Redigér',delete:'Slet',tapHide:'Tryk for at skjule detaljer',tapOpen:'Åbn kortet for flere detaljer',
      day:'Dag',of:'af',next:'Næste',nextFirstCandling:'Første lysning',nextSecondCandling:'Anden lysning',nextLockdown:'Lockdown / sidste kontrol',nextHatch:'Forventet klækning',
      embryoDev:'Embryoudvikling',earlyDev:'Tidlig udvikling',hatching:'Klækning',lockdown:'Lockdown',hatch:'Klækning',followPlan:'Følg planen',inDays:'om {n} dage',todayLower:'i dag',
      pmAbnormal:'Ægget viser afvigende tegn. Behold kun ægget videre, hvis du vil bekræfte med en ekstra kontrol.',pmLowProb:'Utilstrækkelig sandsynlighed — bekræft før beslutning.',pmGoodProb:'Meget god sandsynlighed — fortsæt efter planen.',pmNormal:'Ægget vurderes at have gode forudsætninger for at fortsætte normal udvikling.',
      noImage:'Intet billede',myIncubators:'Mine rugemaskiner',manageIncubators:'Administrér rugemaskiner',manageIncubatorsText:'Administrér rugemaskiner under Indstillinger → Rugemaskiner.',capacity:'Kapacitet',temperature:'Temperatur',humidity:'Fugtighed',turning:'Vending',usedBy:'Bruges af',eggsUnit:'æg',activeEggs:'aktive æg',standard:'Standard',noModel:'Ingen model angivet',unnamedIncubator:'Unavngiven rugemaskine',noIncubators:'Ingen rugemaskiner registreret.',
      lbTitle:'Livsbog',lbEggRegistered:'Æg registreret',lbAddedBatch:'Tilføjet til hold',lbMarkedHatched:'Markeret som klækket',lbDevelopmentStopped:'Udviklingen stoppede',lbCandlingDay:'Lysning dag {n}',lbHatchedChick:'Klækket / registreret som kylling',lbMovedFlock:'Flyttet mod flok',lbRegisteredFlock:'Registreret i flokken',lbRinged:'Ringmærket',lbBreedingStatus:'Avlsstatus opdateret',srcEgg:'Æg',srcBatch:'Hold',srcCandling:'Lysning',srcChick:'Kylling',srcFlock:'Flok',srcBreeding:'Avl',gender:'Køn',ring:'Ring',ringNumber:'Ringnummer'
    },
    no:{
      eggsTitle:'Egg & rugemaskiner',add:'+ Legg til',eggList:'Eggliste',incubators:'Rugemaskiner',all:'Alle',active:'Aktive',uncertain:'Usikre',critical:'Kritiske',today:'I dag',soon:'Innen 7 dager',
      activeOne:'Aktiv',criticalOne:'Kritisk',uncertainOne:'Usikkert',strong:'Sterk',weakCritical:'Kritisk',hatched:'Klekket',stopped:'Avbrutt',discarded:'Kassert',infertile:'Ubefruktet',deadEmbryo:'Dødt embryo',bloodRing:'Blodring',
      unknown:'Ukjent',unknownBreed:'Ukjent rase',origin:'Opprinnelse',incubator:'Rugemaskin',startDate:'Startdato',latestCandling:'Siste lysing',noCandlingYet:'Ingen lysing ennå',batch:'Omgång',batchStart:'Omgång start',
      lifeBook:'Livsbok',events:'hendelser',pmJudges:'PoultryMaster vurderer',pmMoreData:'Fortsett å samle observasjoner, så blir vurderingen sikrere.',
      createChick:'Opprett kylling',candling:'Lysing',edit:'Rediger',delete:'Slett',tapHide:'Trykk for å skjule detaljer',tapOpen:'Åpne kortet for flere detaljer',
      day:'Dag',of:'av',next:'Neste',nextFirstCandling:'Første lysing',nextSecondCandling:'Andre lysing',nextLockdown:'Lockdown / siste kontroll',nextHatch:'Beregnet klekking',
      embryoDev:'Embryoutvikling',earlyDev:'Tidlig utvikling',hatching:'Klekking',lockdown:'Lockdown',hatch:'Klekking',followPlan:'Følg planen',inDays:'om {n} dager',todayLower:'i dag',
      pmAbnormal:'Egget viser avvikende tegn. Behold egget videre bare hvis du vil bekrefte med en ekstra kontroll.',pmLowProb:'Utilstrekkelig sannsynlighet — bekreft før beslutning.',pmGoodProb:'Svært god sannsynlighet — fortsett etter planen.',pmNormal:'Egget vurderes å ha gode forutsetninger for å fortsette normal utvikling.',
      noImage:'Ingen bilde',myIncubators:'Mine rugemaskiner',manageIncubators:'Administrer rugemaskiner',manageIncubatorsText:'Administrer rugemaskiner under Innstillinger → Rugemaskiner.',capacity:'Kapasitet',temperature:'Temperatur',humidity:'Fuktighet',turning:'Vending',usedBy:'Brukes av',eggsUnit:'egg',activeEggs:'aktive egg',standard:'Standard',noModel:'Ingen modell angitt',unnamedIncubator:'Navnløs rugemaskin',noIncubators:'Ingen rugemaskiner registrert.',
      lbTitle:'Livsbok',lbEggRegistered:'Egg registrert',lbAddedBatch:'Koblet til omgang',lbMarkedHatched:'Markert som klekket',lbDevelopmentStopped:'Utviklingen stoppet',lbCandlingDay:'Lysing dag {n}',lbHatchedChick:'Klekket / registrert som kylling',lbMovedFlock:'Flyttet videre mot flokk',lbRegisteredFlock:'Registrert i flokken',lbRinged:'Ringmerket',lbBreedingStatus:'Avlsstatus oppdatert',srcEgg:'Egg',srcBatch:'Omgång',srcCandling:'Lysing',srcChick:'Kylling',srcFlock:'Flokk',srcBreeding:'Avl',gender:'Kjønn',ring:'Ring',ringNumber:'Ringnummer'
    },
    fi:{
      eggsTitle:'Munat & hautomakoneet',add:'+ Lisää',eggList:'Munalista',incubators:'Hautomakoneet',all:'Kaikki',active:'Aktiiviset',uncertain:'Epävarmat',critical:'Kriittiset',today:'Tänään',soon:'7 päivän sisällä',
      activeOne:'Aktiivinen',criticalOne:'Kriittinen',uncertainOne:'Epävarma',strong:'Vahva',weakCritical:'Kriittinen',hatched:'Kuoriutunut',stopped:'Keskeytetty',discarded:'Hylätty',infertile:'Hedelmöittymätön',deadEmbryo:'Kuollut alkio',bloodRing:'Verirengas',
      unknown:'Tuntematon',unknownBreed:'Tuntematon rotu',origin:'Alkuperä',incubator:'Hautomakone',startDate:'Aloituspäivä',latestCandling:'Viimeisin läpivalaisu',noCandlingYet:'Ei läpivalaisua vielä',batch:'Erä',batchStart:'Erän aloitus',
      lifeBook:'Elämänkirja',events:'tapahtumaa',pmJudges:'PoultryMaster arvioi',pmMoreData:'Jatka havaintojen keräämistä, jotta arvio tarkentuu.',
      createChick:'Luo poikanen',candling:'Läpivalaisu',edit:'Muokkaa',delete:'Poista',tapHide:'Piilota tiedot napauttamalla',tapOpen:'Avaa kortti nähdäksesi lisätiedot',
      day:'Päivä',of:'/',next:'Seuraava',nextFirstCandling:'Ensimmäinen läpivalaisu',nextSecondCandling:'Toinen läpivalaisu',nextLockdown:'Lockdown / viimeinen tarkistus',nextHatch:'Arvioitu kuoriutuminen',
      embryoDev:'Alkion kehitys',earlyDev:'Varhainen kehitys',hatching:'Kuoriutuminen',lockdown:'Lockdown',hatch:'Kuoriutuminen',followPlan:'Noudata suunnitelmaa',inDays:'{n} päivän päästä',todayLower:'tänään',
      pmAbnormal:'Munassa näkyy poikkeavia merkkejä. Jatka vain, jos haluat varmistaa tilanteen lisätarkastuksella.',pmLowProb:'Riittämätön todennäköisyys — varmista ennen päätöstä.',pmGoodProb:'Erittäin hyvä todennäköisyys — jatka suunnitelman mukaan.',pmNormal:'Munalla arvioidaan olevan hyvät edellytykset jatkaa normaalia kehitystä.',
      noImage:'Ei kuvaa',myIncubators:'Omat hautomakoneet',manageIncubators:'Hallinnoi hautomakoneita',manageIncubatorsText:'Hallinnoi hautomakoneita kohdassa Asetukset → Hautomakoneet.',capacity:'Kapasiteetti',temperature:'Lämpötila',humidity:'Kosteus',turning:'Kääntö',usedBy:'Käytössä',eggsUnit:'munaa',activeEggs:'aktiivista munaa',standard:'Vakio',noModel:'Mallia ei ole ilmoitettu',unnamedIncubator:'Nimetön hautomakone',noIncubators:'Hautomakoneita ei ole rekisteröity.',
      lbTitle:'Elämänkirja',lbEggRegistered:'Muna rekisteröity',lbAddedBatch:'Lisätty erään',lbMarkedHatched:'Merkitty kuoriutuneeksi',lbDevelopmentStopped:'Kehitys keskeytyi',lbCandlingDay:'Läpivalaisu päivä {n}',lbHatchedChick:'Kuoriutunut / rekisteröity poikaseksi',lbMovedFlock:'Siirretty kohti parvea',lbRegisteredFlock:'Rekisteröity parveen',lbRinged:'Rengastettu',lbBreedingStatus:'Jalostustila päivitetty',srcEgg:'Muna',srcBatch:'Erä',srcCandling:'Läpivalaisu',srcChick:'Poikanen',srcFlock:'Parvi',srcBreeding:'Jalostus',gender:'Sukupuoli',ring:'Rengas',ringNumber:'Rengasnumero'
    }
  };
  const sv=L.sv;
  function state(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
  function lang(){return (state().farmSettings&&state().farmSettings.language)||'sv'}
  function tr(k,vars){let v=(L[lang()]&&L[lang()][k])||sv[k]||k;if(vars)Object.keys(vars).forEach(x=>v=v.replace('{'+x+'}',vars[x]));return v}
  function set(el,txt){if(el&&el.textContent!==txt)el.textContent=txt}
  function visible(id){const el=document.getElementById(id);return el&&!el.classList.contains('hidden')}
  function replaceTextNode(root, map){
    if(!root)return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(n){return n.nodeValue&&n.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});
    let n; while(n=walker.nextNode()){
      let s=n.nodeValue;
      map.forEach(([rx,val])=>{s=s.replace(rx,typeof val==='function'?val():val)});
      if(s!==n.nodeValue)n.nodeValue=s;
    }
  }
  function baseMap(){return [
    [/Ägg & inkubatorer/g,tr('eggsTitle')],[/Ägg & kläckare/g,tr('eggsTitle')],[/Ägglista/g,tr('eggList')],[/Inkubatorer/g,tr('incubators')],[/Kläckare/g,tr('incubators')],
    [/Alla/g,tr('all')],[/Aktiva/g,tr('active')],[/Osäkra/g,tr('uncertain')],[/Kritiska/g,tr('critical')],[/Idag/g,tr('today')],[/Inom 7 dagar/g,tr('soon')],
    [/Aktiv\b/g,tr('activeOne')],[/Kritisk\b/g,tr('criticalOne')],[/Osäkert/g,tr('uncertainOne')],[/Stark/g,tr('strong')],
    [/Kläckt/g,tr('hatched')],[/Avbrutet/g,tr('stopped')],[/Kasserat/g,tr('discarded')],[/Obefruktat/g,tr('infertile')],[/Dött embryo/g,tr('deadEmbryo')],[/Blodring/g,tr('bloodRing')],
    [/Okänd ras/g,tr('unknownBreed')],[/Okänd/g,tr('unknown')],[/Ursprung/g,tr('origin')],[/Startdatum/g,tr('startDate')],[/Senaste lysning/g,tr('latestCandling')],[/Ingen lysning ännu/g,tr('noCandlingYet')],
    [/Omgång start/g,tr('batchStart')],[/Omgång/g,tr('batch')],[/Livsbok/g,tr('lifeBook')],[/händelser/g,tr('events')],[/PoultryMaster bedömer/g,tr('pmJudges')],
    [/Fortsätt med att samla observationer, så blir bedömningen säkrare\./g,tr('pmMoreData')],[/Skapa kyckling/g,tr('createChick')],[/Lysning/g,tr('candling')],[/Redigera/g,tr('edit')],[/Ta bort/g,tr('delete')],
    [/Tryck för att dölja detaljer/g,tr('tapHide')],[/Öppna kortet för fler detaljer/g,tr('tapOpen')],[/Dag/g,tr('day')],[/ av /g,' '+tr('of')+' '],[/Nästa/g,tr('next')],
    [/Första lysning/g,tr('nextFirstCandling')],[/Andra lysning/g,tr('nextSecondCandling')],[/Lockdown \/ sista kontroll/g,tr('nextLockdown')],[/Beräknad kläckning/g,tr('nextHatch')],
    [/Embryoutveckling/g,tr('embryoDev')],[/Tidig utveckling/g,tr('earlyDev')],[/Kläckning/g,tr('hatching')],[/Följ planen/g,tr('followPlan')],
    [/om (\d+) dagar/g,(_,n)=>tr('inDays',{n})],[/idag/g,tr('todayLower')],
    [/Ägget visar avvikande tecken\. Behåll bara ägget vidare om du vill bekräfta med ytterligare kontroll\./g,tr('pmAbnormal')],
    [/Otillräcklig sannolikhet – bekräfta innan beslut\./g,tr('pmLowProb')],[/Otillräckligt sannolikhet – bekräfta innan beslut\./g,tr('pmLowProb')],
    [/Mycket god sannolikhet – fortsätt enligt plan\./g,tr('pmGoodProb')],[/Ägget bedöms ha goda förutsättningar att fortsätta utvecklas normalt\./g,tr('pmNormal')],
    [/Ingen bild/g,tr('noImage')],[/Mina kläckare/g,tr('myIncubators')],[/Hantera kläckare/g,tr('manageIncubators')],[/Hantera kläckare under Inställningar → Kläckare\./g,tr('manageIncubatorsText')],
    [/Kapacitet/g,tr('capacity')],[/Temperatur/g,tr('temperature')],[/Fuktighet/g,tr('humidity')],[/Vändning/g,tr('turning')],[/Används av/g,tr('usedBy')],[/aktiva ägg/g,tr('activeEggs')],[/ägg/g,tr('eggsUnit')],[/Ingen modell angiven/g,tr('noModel')],[/Namnlös kläckare/g,tr('unnamedIncubator')],[/Inga kläckare registrerade\./g,tr('noIncubators')]
  ]}
  function translateEggs(){
    const sec=document.getElementById('view-eggs'); if(!sec)return;
    set(document.getElementById('eggs-title-main'),tr('eggsTitle'));
    const add=sec.querySelector('[data-action="add-current"]'); if(add)set(add,tr('add'));
    set(document.getElementById('tab-eggs'),tr('eggList'));
    set(document.getElementById('tab-inc'),tr('incubators'));
    replaceTextNode(sec, baseMap());
  }
  function translateLifeBook(){
    const modal=document.getElementById('lifebook-modal'); if(!modal || !modal.classList.contains('active'))return;
    const title=document.getElementById('lifebook-title'); if(title)title.textContent=title.textContent.replace(/Livsbok|Life book|Elämänkirja/g,tr('lbTitle'));
    modal.querySelectorAll('.life-title').forEach(el=>{
      let s=el.textContent.trim();
      let m=s.match(/^Lysning dag\s*(\d+)/i); if(m){set(el,tr('lbCandlingDay',{n:m[1]}));return;}
      const exact={
        'Ägget registrerades':'lbEggRegistered','Kopplades till omgång':'lbAddedBatch','Markerades som kläckt':'lbMarkedHatched','Utvecklingen avbröts':'lbDevelopmentStopped','Kläcktes / registrerades som kyckling':'lbHatchedChick','Flyttades vidare mot flock':'lbMovedFlock','Registrerades i flocken':'lbRegisteredFlock','Ringmärktes':'lbRinged','Avelsstatus uppdaterad':'lbBreedingStatus'
      };
      if(exact[s])set(el,tr(exact[s]));
    });
    // Translate source words in metadata only; leave descriptive notes untouched.
    modal.querySelectorAll('.life-meta').forEach(el=>{
      let s=el.textContent;
      s=s.replace(/·\s*Ägg\b/g,'· '+tr('srcEgg')).replace(/·\s*Omgång\b/g,'· '+tr('srcBatch')).replace(/·\s*Lysning\b/g,'· '+tr('srcCandling')).replace(/·\s*Kyckling\b/g,'· '+tr('srcChick')).replace(/·\s*Flock\b/g,'· '+tr('srcFlock')).replace(/·\s*Avel\b/g,'· '+tr('srcBreeding'));
      s=s.replace(/Kön:/g,tr('gender')+':').replace(/Ring:/g,tr('ring')+':').replace(/Ringnummer:/g,tr('ringNumber')+':');
      if(s!==el.textContent)el.textContent=s;
    });
  }
  function run(){translateEggs();translateLifeBook();}
  let busy=false;function schedule(){if(busy)return;busy=true;requestAnimationFrame(()=>{try{run()}catch(e){}busy=false})}
  document.addEventListener('DOMContentLoaded',schedule);window.addEventListener('load',schedule);document.addEventListener('click',()=>setTimeout(schedule,80),true);
  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true,characterData:true});setInterval(schedule,900);
})();