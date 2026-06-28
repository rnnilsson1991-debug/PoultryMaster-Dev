(()=>{const ICON_INC=`<svg class="inline-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="11" y="17" width="42" height="34" rx="8" fill="#eef3ea" stroke="#5f6b61" stroke-width="3"/><path d="M22 17v-5h20v5" fill="none" stroke="#5f6b61" stroke-width="3" stroke-linecap="round"/><path d="M32 26c-6 0-10 6-10 12 0 5 3.7 8 10 8s10-3 10-8c0-6-4-12-10-12Z" fill="#f1c15b" stroke="#d7a947" stroke-width="2"/><circle cx="45" cy="26" r="3" fill="#18833b"/><path d="M15 52h34" stroke="#5f6b61" stroke-width="3" stroke-linecap="round"/></svg>`;const ICON_CHART=`<svg class="inline-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="10" width="44" height="44" rx="8" fill="#f7faf4" stroke="#dfe4d8" stroke-width="3"/><path d="M18 46V20M18 46h30" stroke="#5f6b61" stroke-width="3" stroke-linecap="round"/><path d="M22 40l8-10 8 6 10-18" fill="none" stroke="#18833b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="30" r="2.5" fill="#d7b45a"/><circle cx="38" cy="36" r="2.5" fill="#d7b45a"/></svg>`;
const I18N={
  sv:{dashboard:'Översikt',overview:'Översikt',eggs:'Ägg',candling:'Lysning',chicks:'Kycklingar',flock:'Flock',laying:'Värpning',activeEggs:'Aktiva ägg',incubators:'Kläckare',statistics:'Statistik',settings:'Inställningar',farmJournal:'Gårdsjournal',machines:'Maskiner',registerEvent:'Registrera ny händelse',registerSub:'Ägg, lysning, kycklingar, hälsa, vikt m.m.',mostImportant:'Viktigast idag',upcomingNotDone:'Kommande (ej utförda)',activeHatches:'Aktiva kläckningar',reportsTrends:'Rapporter och trender',appSettings:'Appinställningar',farmTimeline:'Gårdens tidslinje',incubatorAccessories:'Kläckare och tillbehör',today:'idag',total:'Totalt',hens:'Hönor',roosters:'Tuppar',unknown:'Okända',unknownGender:'Okänt',hen:'Höna',rooster:'Tupp',flockEmpty:'Inga fåglar ännu.',add:'Lägg till',nameId:'Namn / ID',breed:'Ras',sex:'Kön',hatchDate:'Kläckdatum',origin:'Ursprung',mother:'Mor',father:'Far',ringNumber:'Ringnummer',status:'Status',active:'Aktiv',breeding:'Avel',sold:'Såld',dead:'Död',notes:'Anteckningar',save:'Spara',photoCamera:'Bild / kamera',edit:'Redigera',delete:'Ta bort',lifeBook:'Livsbok',logWeight:'Logga vikt',logHealth:'Logga hälsa',parents:'Mor/Far',breedingStatus:'Avelsstatus',notAssessed:'Ej bedömd',production:'Produktion',eggsTotal:'Ägg totalt',last30Days:'Senaste 30 dagar',avgWeek:'Snitt/vecka',avgWeight:'Medelvikt',biggestEgg:'Största ägg',doubleYolks:'Dubbelgulor',savedBreedingEggs:'Sparade avelsägg',pedigree:'Avelsträd',offspring:'Avkommor',noOffspring:'Inga avkommor registrerade ännu.',lifeline:'Livslinje',noLifeline:'Ingen livslinje ännu.',flockIndividual:'flockindivid',register:'Registrera',editVerb:'Redigera'},
  en:{dashboard:'Overview',overview:'Overview',eggs:'Eggs',candling:'Candling',chicks:'Chicks',flock:'Flock',laying:'Laying',activeEggs:'Active eggs',incubators:'Incubators',statistics:'Statistics',settings:'Settings',farmJournal:'Farm journal',machines:'Machines',registerEvent:'Register new event',registerSub:'Eggs, candling, chicks, health, weight, etc.',mostImportant:'Most important today',upcomingNotDone:'Upcoming (not completed)',activeHatches:'Active hatches',reportsTrends:'Reports and trends',appSettings:'App settings',farmTimeline:'Farm timeline',incubatorAccessories:'Incubators and accessories',today:'today',total:'Total',hens:'Hens',roosters:'Roosters',unknown:'Unknown',unknownGender:'Unknown',hen:'Hen',rooster:'Rooster',flockEmpty:'No birds yet.',add:'Add',nameId:'Name / ID',breed:'Breed',sex:'Sex',hatchDate:'Hatch date',origin:'Origin',mother:'Mother',father:'Father',ringNumber:'Ring number',status:'Status',active:'Active',breeding:'Breeding',sold:'Sold',dead:'Dead',notes:'Notes',save:'Save',photoCamera:'Photo / camera',edit:'Edit',delete:'Delete',lifeBook:'Life book',logWeight:'Log weight',logHealth:'Log health',parents:'Mother/Father',breedingStatus:'Breeding status',notAssessed:'Not assessed',production:'Production',eggsTotal:'Eggs total',last30Days:'Last 30 days',avgWeek:'Average/week',avgWeight:'Average weight',biggestEgg:'Largest egg',doubleYolks:'Double yolks',savedBreedingEggs:'Saved breeding eggs',pedigree:'Pedigree',offspring:'Offspring',noOffspring:'No offspring registered yet.',lifeline:'Lifeline',noLifeline:'No lifeline yet.',flockIndividual:'flock bird',register:'Register',editVerb:'Edit'},
  da:{dashboard:'Oversigt',overview:'Oversigt',eggs:'Æg',candling:'Lysning',chicks:'Kyllinger',flock:'Flok',laying:'Æglægning',activeEggs:'Aktive æg',incubators:'Rugemaskiner',statistics:'Statistik',settings:'Indstillinger',farmJournal:'Gårdsjournal',machines:'Maskiner',registerEvent:'Registrér ny hændelse',registerSub:'Æg, lysning, kyllinger, sundhed, vægt m.m.',mostImportant:'Vigtigst i dag',upcomingNotDone:'Kommende (ikke udført)',activeHatches:'Aktive klækninger',reportsTrends:'Rapporter og trends',appSettings:'Appindstillinger',farmTimeline:'Gårdens tidslinje',incubatorAccessories:'Rugemaskiner og tilbehør',today:'i dag',total:'I alt',hens:'Høner',roosters:'Haner',unknown:'Ukendte',unknownGender:'Ukendt',hen:'Høne',rooster:'Hane',flockEmpty:'Ingen fugle endnu.',add:'Tilføj',nameId:'Navn / ID',breed:'Race',sex:'Køn',hatchDate:'Klækkedato',origin:'Oprindelse',mother:'Mor',father:'Far',ringNumber:'Ringnummer',status:'Status',active:'Aktiv',breeding:'Avl',sold:'Solgt',dead:'Død',notes:'Noter',save:'Gem',photoCamera:'Billede / kamera',edit:'Rediger',delete:'Slet',lifeBook:'Livsbog',logWeight:'Log vægt',logHealth:'Log sundhed',parents:'Mor/Far',breedingStatus:'Avlsstatus',notAssessed:'Ikke vurderet',production:'Produktion',eggsTotal:'Æg i alt',last30Days:'Seneste 30 dage',avgWeek:'Gns./uge',avgWeight:'Gennemsnitsvægt',biggestEgg:'Største æg',doubleYolks:'Dobbelte blommer',savedBreedingEggs:'Gemte rugeæg',pedigree:'Stamtræ',offspring:'Afkom',noOffspring:'Intet afkom registreret endnu.',lifeline:'Livslinje',noLifeline:'Ingen livslinje endnu.',flockIndividual:'flokindivid',register:'Registrér',editVerb:'Rediger'},
  no:{dashboard:'Oversikt',overview:'Oversikt',eggs:'Egg',candling:'Lysing',chicks:'Kyllinger',flock:'Flokk',laying:'Egglegging',activeEggs:'Aktive egg',incubators:'Rugemaskiner',statistics:'Statistikk',settings:'Innstillinger',farmJournal:'Gårdsjournal',machines:'Maskiner',registerEvent:'Registrer ny hendelse',registerSub:'Egg, lysing, kyllinger, helse, vekt m.m.',mostImportant:'Viktigst i dag',upcomingNotDone:'Kommende (ikke utført)',activeHatches:'Aktive klekkinger',reportsTrends:'Rapporter og trender',appSettings:'Appinnstillinger',farmTimeline:'Gårdens tidslinje',incubatorAccessories:'Rugemaskiner og tilbehør',today:'i dag',total:'Totalt',hens:'Høner',roosters:'Haner',unknown:'Ukjente',unknownGender:'Ukjent',hen:'Høne',rooster:'Hane',flockEmpty:'Ingen fugler ennå.',add:'Legg til',nameId:'Navn / ID',breed:'Rase',sex:'Kjønn',hatchDate:'Klekkedato',origin:'Opprinnelse',mother:'Mor',father:'Far',ringNumber:'Ringnummer',status:'Status',active:'Aktiv',breeding:'Avl',sold:'Solgt',dead:'Død',notes:'Notater',save:'Lagre',photoCamera:'Bilde / kamera',edit:'Rediger',delete:'Slett',lifeBook:'Livsbok',logWeight:'Logg vekt',logHealth:'Logg helse',parents:'Mor/Far',breedingStatus:'Avlsstatus',notAssessed:'Ikke vurdert',production:'Produksjon',eggsTotal:'Egg totalt',last30Days:'Siste 30 dager',avgWeek:'Snitt/uke',avgWeight:'Snittvekt',biggestEgg:'Største egg',doubleYolks:'Dobbelplommer',savedBreedingEggs:'Lagrede rugeegg',pedigree:'Stamtre',offspring:'Avkom',noOffspring:'Ingen avkom registrert ennå.',lifeline:'Livslinje',noLifeline:'Ingen livslinje ennå.',flockIndividual:'flokkindivid',register:'Registrer',editVerb:'Rediger'},
  fi:{dashboard:'Yleiskatsaus',overview:'Yleiskatsaus',eggs:'Munat',candling:'Läpivalaisu',chicks:'Poikaset',flock:'Parvi',laying:'Muninta',activeEggs:'Aktiiviset munat',incubators:'Hautomakoneet',statistics:'Tilastot',settings:'Asetukset',farmJournal:'Tilapäiväkirja',machines:'Laitteet',registerEvent:'Lisää uusi tapahtuma',registerSub:'Munat, läpivalaisu, poikaset, terveys, paino jne.',mostImportant:'Tärkeintä tänään',upcomingNotDone:'Tulossa (ei tehty)',activeHatches:'Aktiiviset haudonnat',reportsTrends:'Raportit ja trendit',appSettings:'Sovelluksen asetukset',farmTimeline:'Tilan aikajana',incubatorAccessories:'Hautomakoneet ja tarvikkeet',today:'tänään',total:'Yhteensä',hens:'Kanat',roosters:'Kukot',unknown:'Tuntemattomat',unknownGender:'Tuntematon',hen:'Kana',rooster:'Kukko',flockEmpty:'Ei lintuja vielä.',add:'Lisää',nameId:'Nimi / ID',breed:'Rotu',sex:'Sukupuoli',hatchDate:'Kuoriutumispäivä',origin:'Alkuperä',mother:'Emo',father:'Isä',ringNumber:'Rengasnumero',status:'Tila',active:'Aktiivinen',breeding:'Jalostus',sold:'Myyty',dead:'Kuollut',notes:'Muistiinpanot',save:'Tallenna',photoCamera:'Kuva / kamera',edit:'Muokkaa',delete:'Poista',lifeBook:'Elämänkirja',logWeight:'Kirjaa paino',logHealth:'Kirjaa terveys',parents:'Emo/Isä',breedingStatus:'Jalostustila',notAssessed:'Ei arvioitu',production:'Tuotanto',eggsTotal:'Munia yhteensä',last30Days:'Viimeiset 30 päivää',avgWeek:'Keskiarvo/viikko',avgWeight:'Keskipaino',biggestEgg:'Suurin muna',doubleYolks:'Kaksoiskeltuaiset',savedBreedingEggs:'Säästetyt siitosmunat',pedigree:'Sukupuu',offspring:'Jälkeläiset',noOffspring:'Jälkeläisiä ei ole vielä rekisteröity.',lifeline:'Elämänkaari',noLifeline:'Ei elämänkaarta vielä.',flockIndividual:'parven yksilö',register:'Rekisteröi',editVerb:'Muokkaa'}
};

// PoultryMaster v2.9.9 – Laying module I18N extension
Object.assign(I18N.sv,{
  eggsToday:'Ägg idag',last7Days:'Senaste 7 dagar',bestHen:'Bästa höna',breedingEggs:'Avelsägg',
  doubleYolk:'Dubbel gula',doubleYolks:'Dubbelgulor',pieces:'st',registeredPicked:'Registrerat/plockat',
  laidPeriod:'Värpt period',productionPeriod:'Produktionsperiod',daysLabel:'dagar',eggsPerDay:'ägg/dag',
  totalEggWeight:'Total äggvikt',averageWeight:'Medelvikt',shellQuality:'Skalkvalitet',eggColor:'Äggfärg',
  yes:'Ja',no:'Nej',noLayingLogs:'Inga värpningar loggade ännu.',registrationDate:'Registreringsdatum',
  fromDate:'Från datum',toDate:'Till datum',henFlock:'Höna / flock',eggCount:'Antal ägg',
  totalWeightGram:'Totalvikt gram',period:'Period',savedBreedingEgg:'Sparat avelsägg',
  selectOption:'Välj',weightGrams:'Vikt gram'
});
Object.assign(I18N.en,{
  eggsToday:'Eggs today',last7Days:'Last 7 days',bestHen:'Best hen',breedingEggs:'Breeding eggs',
  doubleYolk:'Double yolk',doubleYolks:'Double yolks',pieces:'pcs',registeredPicked:'Registered/picked',
  laidPeriod:'Laid period',productionPeriod:'Production period',daysLabel:'days',eggsPerDay:'eggs/day',
  totalEggWeight:'Total egg weight',averageWeight:'Average weight',shellQuality:'Shell quality',eggColor:'Egg colour',
  yes:'Yes',no:'No',noLayingLogs:'No laying logs yet.',registrationDate:'Registration date',
  fromDate:'From date',toDate:'To date',henFlock:'Hen / flock',eggCount:'Number of eggs',
  totalWeightGram:'Total weight (g)',period:'Period',savedBreedingEgg:'Saved breeding egg',
  selectOption:'Select',weightGrams:'Weight (g)'
});
Object.assign(I18N.da,{
  eggsToday:'Æg i dag',last7Days:'Seneste 7 dage',bestHen:'Bedste høne',breedingEggs:'Avlsæg',
  doubleYolk:'Dobbeltblomme',doubleYolks:'Dobbeltblommer',pieces:'stk',registeredPicked:'Registreret/samlet',
  laidPeriod:'Lagt periode',productionPeriod:'Produktionsperiode',daysLabel:'dage',eggsPerDay:'æg/dag',
  totalEggWeight:'Samlet ægvægt',averageWeight:'Gennemsnitsvægt',shellQuality:'Skalkvalitet',eggColor:'Ægfarve',
  yes:'Ja',no:'Nej',noLayingLogs:'Ingen æglægninger logget endnu.',registrationDate:'Registreringsdato',
  fromDate:'Fra dato',toDate:'Til dato',henFlock:'Høne / flok',eggCount:'Antal æg',
  totalWeightGram:'Totalvægt gram',period:'Periode',savedBreedingEgg:'Gemt avlsæg',
  selectOption:'Vælg',weightGrams:'Vægt gram'
});
Object.assign(I18N.no,{
  eggsToday:'Egg i dag',last7Days:'Siste 7 dager',bestHen:'Beste høne',breedingEggs:'Avlsegg',
  doubleYolk:'Dobbel plomme',doubleYolks:'Doble plommer',pieces:'stk',registeredPicked:'Registrert/plukket',
  laidPeriod:'Lagt periode',productionPeriod:'Produksjonsperiode',daysLabel:'dager',eggsPerDay:'egg/dag',
  totalEggWeight:'Total eggvekt',averageWeight:'Gjennomsnittsvekt',shellQuality:'Skallkvalitet',eggColor:'Eggfarge',
  yes:'Ja',no:'Nei',noLayingLogs:'Ingen egglegginger logget ennå.',registrationDate:'Registreringsdato',
  fromDate:'Fra dato',toDate:'Til dato',henFlock:'Høne / flokk',eggCount:'Antall egg',
  totalWeightGram:'Totalvekt gram',period:'Periode',savedBreedingEgg:'Lagret avlsegg',
  selectOption:'Velg',weightGrams:'Vekt gram'
});
Object.assign(I18N.fi,{
  eggsToday:'Munia tänään',last7Days:'Viimeiset 7 päivää',bestHen:'Paras kana',breedingEggs:'Jalostusmunat',
  doubleYolk:'Kaksoiskeltuainen',doubleYolks:'Kaksoiskeltuaiset',pieces:'kpl',registeredPicked:'Rekisteröity/kerätty',
  laidPeriod:'Munintajakso',productionPeriod:'Tuotantojakso',daysLabel:'päivää',eggsPerDay:'munaa/päivä',
  totalEggWeight:'Munien kokonaispaino',averageWeight:'Keskipaino',shellQuality:'Kuoren laatu',eggColor:'Munan väri',
  yes:'Kyllä',no:'Ei',noLayingLogs:'Munintamerkintöjä ei vielä ole.',registrationDate:'Rekisteröintipäivä',
  fromDate:'Alkaen',toDate:'Päättyen',henFlock:'Kana / parvi',eggCount:'Munien määrä',
  totalWeightGram:'Kokonaispaino grammaa',period:'Jakso',savedBreedingEgg:'Tallennettu jalostusmuna',
  selectOption:'Valitse',weightGrams:'Paino grammoina'
});

function lang(){return (state.farmSettings&&state.farmSettings.language)||'sv'}
function t(k){return (I18N[lang()]&&I18N[lang()][k])||I18N.sv[k]||k}
function tv(value,keyPrefix){
  if(value===undefined||value===null||value==='')return '';
  const map={'Okänt':'unknownGender','Höna':'hen','Tupp':'rooster','Aktiv':'active','Avel':'breeding','Såld':'sold','Död':'dead'};
  const k=keyPrefix||map[value];
  return k?t(k):value;
}
function flockTitle(){
  const farm=(state.farmSettings&&state.farmSettings.farmName)||'Österlen Poultry';
  return `${farm} – ${t('flock')}`;
}
function translateStaticText(){
  const map=[
    ['.dashboard-kicker','overview'],
    ['.reg-title','registerEvent'],
    ['.reg-sub','registerSub'],['.dash-title-task','mostImportant'],['.dash-title-upcoming','upcomingNotDone'],['.dash-title-hatches','activeHatches']
  ];
  map.forEach(([sel,key])=>document.querySelectorAll(sel).forEach(el=>el.textContent=t(key)));
  const saveBtn=document.querySelector('#form .btn.primary'); if(saveBtn)saveBtn.textContent=t('save');
  const addText='+ '+t('add');
  const layingAdd=document.querySelector('#view-laying [data-action="add"][data-type="laying"]');
  if(layingAdd) layingAdd.textContent=addText;
  document.querySelectorAll('.nav').forEach(btn=>{
    const v=btn.getAttribute('data-view');
    const label=btn.querySelector('.nav-label');
    if(label&&v&&t(v))label.textContent=t(v);
  });
}

const KEY='egg_manager_v2';let view='dashboard',sub='eggs',formType='',editId=null,statsTab='hatch',candlingFilter='active',candlingQuery='',candlingOpen={},candlingExpert={},dashOpen={},eggOpen={},eggFilter='all';const $=id=>document.getElementById(id);const today=()=>new Date().toISOString().slice(0,10);const uid=p=>p+'-'+Date.now();let state=load();normalize();function def(){return{settings:{incubationDays:21,candling1:8,candling2:14,lockdown:18,temp:37.7,humidity:45},farmSettings:{farmName:'',owner:'',farmLogo:'',country:'Sverige',language:'sv',dateFormat:'YYYY-MM-DD',units:'metric'},incubators:[{id:'inc-1',name:'River ET-512A',model:'ET-512A',capacity:12,tempTarget:37.7,humidityTarget:45,status:'Aktiv',notes:'Huvudmaskin'},{id:'inc-2',name:'Joom ET-512',model:'ET-512',capacity:12,tempTarget:38.0,humidityTarget:45,status:'Reserv',notes:'Reservmaskin'}],eggs:[],candling:[],chicks:[],flock:[],events:[],laying:[],batches:[],lifeEvents:[],completedTasks:{}}}function normalize(){state.settings=state.settings||def().settings;state.farmSettings=state.farmSettings||def().farmSettings;state.incubators=state.incubators||[];state.eggs=state.eggs||[];state.candling=state.candling||[];state.chicks=state.chicks||[];state.flock=state.flock||[];state.events=state.events||[];state.laying=state.laying||[];state.batches=state.batches||[];state.lifeEvents=state.lifeEvents||[];state.completedTasks=state.completedTasks||{};if(state.incubators&&state.incubators.length&&!state.incubators.some(i=>i.isDefault))state.incubators[0].isDefault=true}function load(){try{return JSON.parse(localStorage.getItem(KEY))||def()}catch{return def()}}function save(){localStorage.setItem(KEY,JSON.stringify(state))}function days(a,b=today()){let x=new Date(a),y=new Date(b);x.setHours(0,0,0,0);y.setHours(0,0,0,0);return Math.max(0,Math.floor((y-x)/86400000))}function addDays(a,n){let d=new Date(a);d.setDate(d.getDate()+Number(n));return d.toISOString().slice(0,10)}function dateOnly(a){let d=new Date(a);d.setHours(0,0,0,0);return d}function dayDiff(a,b){return Math.floor((dateOnly(b)-dateOnly(a))/86400000)}function logStart(l){return l.layFrom||l.date}function logEnd(l){return l.layTo||l.date}function periodDays(l){return Math.max(1,dayDiff(logStart(l),logEnd(l))+1)}function overlapDays(a,b,c,d){let s=dateOnly(a)>dateOnly(c)?dateOnly(a):dateOnly(c),e=dateOnly(b)<dateOnly(d)?dateOnly(b):dateOnly(d);return Math.max(0,Math.floor((e-s)/86400000)+1)}function eggsInRange(l,from,to){let c=+l.count||0;return c?c/periodDays(l)*overlapDays(logStart(l),logEnd(l),from,to):0}function fmtNum(n){n=Number(n)||0;return Math.abs(n-Math.round(n))<0.05?String(Math.round(n)):n.toFixed(1)}function incName(id){return state.incubators.find(i=>i.id===id)?.name||'Ingen'}function batchName(id){return state.batches.find(b=>b.id===id)?.name||''}function batchOptions(current=''){let opts=[['','Ingen vald']];state.batches.slice().sort((a,b)=>String(b.startDate||'').localeCompare(String(a.startDate||''))).forEach(b=>opts.push([b.id,(b.name||'Omgång')+' · '+(b.startDate||'')]));if(current&&!opts.some(o=>o[0]===current))opts.push([current,current+' (saknas)']);return opts}function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}function statusPill(status){const dangerStatuses=['Obefruktat','Dött embryo','Kasserat'];return `<span class="pill ${dangerStatuses.includes(status)?'danger-pill':''}">${esc(status)}</span>`}function candlingResultClass(result){const dangerResults=['Obefruktat','Dött embryo','Blodring'];const goodResults=['Ser lovande ut','Tydliga blodkärl'];if(dangerResults.includes(result))return 'danger-text';if(goodResults.includes(result))return 'good-text';return ''}function latestWeight(id){let key=String(id||'').toLowerCase();let arr=state.events.filter(e=>e.type==='Vägning'&&String(e.targetId||'').toLowerCase()===key&&e.weight).sort((a,b)=>String(a.date).localeCompare(String(b.date)));return arr[arr.length-1]||null}function prevWeight(id){let key=String(id||'').toLowerCase();let arr=state.events.filter(e=>e.type==='Vägning'&&String(e.targetId||'').toLowerCase()===key&&e.weight).sort((a,b)=>String(a.date).localeCompare(String(b.date)));return arr.length>1?arr[arr.length-2]:null}function weightInfo(id){let w=latestWeight(id),p=prevWeight(id);if(!w)return '<p><b>Senaste vikt:</b> Ej loggad</p>';let diff=p?Number(w.weight)-Number(p.weight):null;return `<p><b>Senaste vikt:</b> ${esc(w.weight)} g ${diff!==null?`<span class="pill">${diff>=0?'+':''}${diff} g</span>`:''}<br><small>${esc(w.date)}</small></p>`}function birdOptions(){let opts=[];state.chicks.forEach(c=>opts.push([c.id,'Kyckling '+c.id]));state.flock.forEach(f=>opts.push([f.name,'Flock '+f.name]));state.eggs.forEach(e=>opts.push([e.id,'Ägg '+e.id]));return opts}function parentOptions(gender,current='',selfName=''){let opts=[['','Okänd / ej registrerad']];let cur=String(current||'');let self=String(selfName||'').toLowerCase();state.flock.filter(f=>f.gender===gender&&f.status!=='Död'&&String(f.name||'').toLowerCase()!==self).forEach(f=>opts.push([f.name,f.name+' – '+(f.breed||gender)]));if(cur&&!opts.some(o=>o[0]===cur))opts.push([cur,cur+' (ej registrerad)']);return opts}
function firstNonEmpty(...vals){return vals.find(v=>v!==undefined&&v!==null&&String(v).trim()!=='')||''}function lifeFindEntity(id){let key=String(id||'').toLowerCase();let egg=state.eggs.find(e=>String(e.id||'').toLowerCase()===key);let chick=state.chicks.find(c=>String(c.id||'').toLowerCase()===key||String(c.eggId||'').toLowerCase()===key);let flock=state.flock.find(f=>String(f.id||'').toLowerCase()===key||String(f.name||'').toLowerCase()===key||String(f.source||'').toLowerCase().includes(key));if(!egg&&chick&&chick.eggId)egg=state.eggs.find(e=>String(e.id||'').toLowerCase()===String(chick.eggId||'').toLowerCase());if(!chick&&egg)chick=state.chicks.find(c=>String(c.eggId||'').toLowerCase()===String(egg.id||'').toLowerCase()||String(c.id||'').toLowerCase()===String(egg.id||'').toLowerCase());if(!flock&&chick)flock=state.flock.find(f=>String(f.name||'').toLowerCase()===String(chick.id||'').toLowerCase()||String(f.source||'').toLowerCase().includes(String(chick.eggId||chick.id||'').toLowerCase()));return{egg,chick,flock}}function lifeKeys(id){let e=lifeFindEntity(id),keys=new Set();[id,e.egg?.id,e.chick?.id,e.chick?.eggId,e.flock?.id,e.flock?.name].filter(Boolean).forEach(x=>keys.add(String(x).toLowerCase()));return keys}function lifeTypeStyle(type){if(['candling_good','hatched','moved_chick','moved_flock','egg_laid','award'].includes(type))return'good';if(['candling_warn','health','weight'].includes(type))return'warn';if(['candling_bad','died','discarded'].includes(type))return'bad';if(['registered','batch','photo','manual'].includes(type))return'info';return'neutral'}function lifeTypeIcon(type){return{registered:'🥚',batch:'📦',candling_good:'🔦',candling_warn:'🔦',candling_bad:'🔦',hatched:'🐣',moved_chick:'🐥',moved_flock:'🐓',weight:'⚖️',health:'🩺',egg_laid:'🥚',photo:'📷',award:'🏆',manual:'📌',died:'⚫',discarded:'🗑️'}[type]||'📌'}function makeLifeEvent(date,type,title,desc='',source='',image=''){return{date:date||today(),type,title,desc,source,image}}function lifeBookEvents(id){let ent=lifeFindEntity(id),keys=lifeKeys(id),events=[];let egg=ent.egg,chick=ent.chick,flock=ent.flock;if(egg){events.push(makeLifeEvent(egg.dateSet,'registered','Ägget registrerades',`${egg.breed||'Okänd ras'}${egg.source?' · Ursprung: '+egg.source:''}`,'Ägg',egg.image||''));if(egg.batchId)events.push(makeLifeEvent(egg.dateSet,'batch','Kopplades till omgång',batchName(egg.batchId)||egg.batchId,'Omgång'));if(egg.status==='Kläckt')events.push(makeLifeEvent(addDays(egg.dateSet,state.settings.incubationDays),'hatched','Markerades som kläckt','Ägget har gått vidare i kedjan.','Ägg'));if(['Dött embryo','Obefruktat','Kasserat'].includes(egg.status))events.push(makeLifeEvent(today(),egg.status==='Kasserat'?'discarded':'died','Utvecklingen avbröts',egg.status,'Ägg'));}(state.candling||[]).forEach(c=>{if(keys.has(String(c.eggId||'').toLowerCase())){let typ=['Ser lovande ut','Tydliga blodkärl'].includes(c.result)?'candling_good':(c.result==='Osäkert'?'candling_warn':'candling_bad');events.push(makeLifeEvent(c.date,typ,`Lysning dag ${c.day||''}`.trim(),`${c.result}${c.notes?' · '+c.notes:''}`,'Lysning',c.image||''));}});if(chick){events.push(makeLifeEvent(chick.hatchDate,'hatched','Kläcktes / registrerades som kyckling',`${chick.breed||''}${chick.gender?' · Kön: '+chick.gender:''}`,'Kyckling',chick.image||''));if(chick.status==='Flyttad till flock')events.push(makeLifeEvent(today(),'moved_flock','Flyttades vidare mot flock','Kycklingen är markerad som flyttad till flock.','Kyckling'));}if(flock){events.push(makeLifeEvent(flock.hatchDate||today(),'moved_flock','Registrerades i flocken',`${flock.name||''}${flock.ringNumber?' · Ring: '+flock.ringNumber:''}`,'Flock',flock.image||''));if(flock.ringNumber)events.push(makeLifeEvent(flock.hatchDate||today(),'manual','Ringmärktes',`Ringnummer: ${flock.ringNumber}`,'Flock'));if(flock.breedingStatus&&flock.breedingStatus!=='Ej bedömd')events.push(makeLifeEvent(today(),'award','Avelsstatus uppdaterad',flock.breedingStatus,'Avel'));}(state.events||[]).forEach(ev=>{let k=String(ev.targetId||'').toLowerCase();if(keys.has(k)){let typ=ev.type==='Vägning'?'weight':(ev.type==='Hälsa'||ev.type==='Sjukdom'?'health':'manual');let desc=(ev.weight?ev.weight+' g · ':'')+(ev.notes||ev.type||'');events.push(makeLifeEvent(ev.date,typ,ev.type||'Händelse',desc,'Gårdsjournal'));}});let laid=(state.laying||[]).filter(l=>keys.has(String(l.henId||'').toLowerCase())).sort((a,b)=>String(logStart(a)).localeCompare(String(logStart(b))));if(laid[0])events.push(makeLifeEvent(logStart(laid[0]),'egg_laid','Första registrerade värpningen',`${laid[0].count||1} ägg${laid[0].totalWeight?' · '+laid[0].totalWeight+' g totalt':''}`,'Värpning'));let custom=(state.lifeEvents||[]).filter(ev=>keys.has(String(ev.entityId||'').toLowerCase()));custom.forEach(ev=>events.push(makeLifeEvent(ev.date,ev.type||'manual',ev.title||'Livshändelse',ev.desc||ev.notes||'',ev.source||'Livsbok',ev.image||'')));let seen=new Set();return events.filter(ev=>{let sig=[ev.date,ev.type,ev.title,ev.desc].join('|');if(seen.has(sig))return false;seen.add(sig);return true}).sort((a,b)=>String(a.date).localeCompare(String(b.date)));}function renderLifeBook(id){let ent=lifeFindEntity(id),primary=ent.flock?.name||ent.chick?.id||ent.egg?.id||id;let breed=firstNonEmpty(ent.flock?.breed,ent.chick?.breed,ent.egg?.breed,'Okänd ras');let status=firstNonEmpty(ent.flock?.status,ent.chick?.status,ent.egg?.status,'Okänd');let stage=ent.flock?'Flock':ent.chick?'Kyckling':ent.egg?'Ägg':'Individ';let start=firstNonEmpty(ent.egg?.dateSet,ent.chick?.hatchDate,ent.flock?.hatchDate);let evs=lifeBookEvents(id);$('lifebook-title').textContent='📖 Livsbok – '+primary;let summary=`<div class="life-summary"><h3>${esc(primary)}</h3><div class="muted">${esc(breed)} · ${esc(stage)}</div><div class="life-kpi"><div><b>${esc(status)}</b><small>Status</small></div><div><b>${start?days(start)+' dagar':'-'}</b><small>Ålder i systemet</small></div><div><b>${evs.length}</b><small>Händelser</small></div><div><b>${esc(stage)}</b><small>Nuvarande steg</small></div></div></div>`;let timeline=evs.length?`<div class="life-timeline">${evs.map(ev=>`<div class="life-item"><div class="life-dot ${lifeTypeStyle(ev.type)}">${lifeTypeIcon(ev.type)}</div><div><div class="life-title">${esc(ev.title)}</div><div class="life-meta">${esc(ev.date)}${ev.source?' · '+esc(ev.source):''}</div>${ev.desc?`<div>${esc(ev.desc)}</div>`:''}${ev.image?`<img class="candling-photo-thumb" src="${ev.image}" alt="Bild från livsbok">`:''}</div></div>`).join('')}</div>`:'<div class="empty">Ingen livshistorik ännu.</div>';$('lifebook-body').innerHTML=summary+timeline;$('lifebook-modal').classList.add('active')}function show(v){view=v;document.querySelectorAll('main section').forEach(s=>s.classList.add('hidden'));$('view-'+v).classList.remove('hidden');document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active',n.dataset.view===v));render();window.scrollTo(0,0)}function render(){if(view==='dashboard'){dash();applyDashboardAccordions();}if(view==='eggs')sub==='eggs'?eggs():incs();if(view==='candling')candles();if(view==='chicks')chicks();if(view==='flock')flock();if(view==='laying')laying();if(view==='statistics')stats();if(view==='settings')settings();if(view==='events')events();applyFarmTitles();translateStaticText()}
function applyDashboardAccordions(){
  const cfg=[
    ['tasks','dash-tasks-card','Viktigast idag'],
    ['upcoming','dash-upcoming-card','Kommande (ej utförda)'],
    ['hatches','dash-hatches-card','Aktiva kläckningar']
  ];
  cfg.forEach(([key,cardId,label])=>{
    const card=$(cardId);
    if(!card)return;
    card.classList.toggle('open',!!dashOpen[key]);
    const body=$(key==='hatches'?'hatches':key);
    if(body) body.style.display=dashOpen[key]?'block':'none';
    const h=card.querySelector('h3');
    if(h){
      let count='';
      if(key==='tasks') count=' ('+openTasksCount(todayTasksFromEggs((state.eggs||[]).filter(e=>e.status==='Inkuberas')))+')';
      if(key==='upcoming') count=' ('+(($('upcoming')?.children?.length)||0)+')';
      if(key==='hatches') count=' ('+(state.eggs||[]).filter(e=>e.status==='Inkuberas').length+')';
      h.textContent=(dashOpen[key]?'▼ ':'▶ ')+label+count;
      h.setAttribute('onclick',"window.toggleDashboardSection && window.toggleDashboardSection('"+key+"')");
    }
  });
}
window.toggleDashboardSection=function(key){
  dashOpen[key]=!dashOpen[key];
  applyDashboardAccordions();
};



function renderFarmToday(activeEggs,tasks,up){
  try{
    const el=$('farm-today');
    if(el) el.innerHTML=farmTodayHTML(activeEggs,tasks,up);
  }catch(err){
    const el=$('farm-today');
    if(el) el.innerHTML='<div class="farm-today-card"><div class="farm-today-title">🌱 ${farmTodayTitle()}</div><div class="farm-today-status">🟢 Stabil</div><div class="farm-today-text">Öppna korten för mer detaljer.</div></div>';
  }
}

function farmTodayHTML(activeEggs,tasks,up){
function farmStoppedEggsText(active,danger){
  const l=lang();
  const rows={
    sv:`${active} ägg är aktiva och ${danger} har avbrutits. Läget är under kontroll.`,
    en:`${active} active eggs and ${danger} stopped. Everything is under control.`,
    da:`${active} aktive æg og ${danger} stoppet. Situationen er under kontrol.`,
    no:`${active} aktive egg og ${danger} stoppet. Situasjonen er under kontroll.`,
    fi:`${active} aktiivista munaa ja ${danger} keskeytettyä. Tilanne on hallinnassa.`
  };
  return rows[l]||rows.sv;
}


  let s=state.settings||{};
  let active=activeEggs.length;
  let danger=(state.eggs||[]).filter(e=>['Obefruktat','Dött embryo','Kasserat'].includes(e.status)).length;
  let uncertain=(state.eggs||[]).filter(e=>e.status==='Osäkert').length;
  let todayTasks=openTasksCount(tasks);
  let lockdownToday=0,hatchToday=0,candlingToday=0;
  for(const e of activeEggs){
    let d=days(e.dateSet);
    if(d===s.lockdown)lockdownToday++;
    if(d>=s.incubationDays)hatchToday++;
    if(d===s.candling1||d===s.candling2)candlingToday++;
  }
  let level='good',status='Stabil',msg='Allt ser stabilt ut idag. Öppna korten för mer detaljer.',tip='Fortsätt hålla temperatur och vattennivå stabilt.';
  const totalTasks=(tasks||[]).length, doneTasks=doneTasksCount(tasks||[]);
  if(totalTasks>0 && doneTasks===totalTasks){
    level='good';status='Allt klart för idag';
    msg='Alla planerade uppgifter är genomförda. PoultryMaster fortsätter hålla koll på gården.';
    tip='Bra jobbat. Nu återstår normal tillsyn och att hålla kläckaren stabil.';
  }else if(hatchToday>0){
    level='bad';status='Kläckning nära';
    msg=`${hatchToday} ägg är vid kläckdag eller passerad beräknad kläckning. Öppna inte kläckaren i onödan.`;
    tip='Håll luftfuktigheten stabil och låt kycklingarna arbeta i lugn och ro.';
  }else if(lockdownToday>0){
    level='warn';status='Lockdown idag';
    msg=`${lockdownToday} ägg går in i lockdown idag. Förbered genom att stoppa vändning och höja fukten enligt din plan.`;
    tip='Efter lockdown ska kläckaren öppnas så lite som möjligt.';
  }else if(candlingToday>0){
    level='warn';status='Lysningsdag';
    msg=`${candlingToday} ägg ska lysas idag. Logga resultatet direkt efter varje ägg.`;
    tip='Ta ut ett ägg i taget, lys i mörkt rum och välj hur säker du är på observationen.';
  }else if(uncertain>0){
    level='warn';status='Följ upp';
    msg=`${uncertain} ägg är markerade som osäkra. Planera en extra kontroll innan du fattar beslut.`;
    tip='Osäkra ägg ska hellre följas upp en gång extra än kasseras för tidigt.';
  }else if(danger>0&&active>0){
    level='good';status='Stabil med avbrott';
    msg=farmStoppedEggsText(active,danger);
    tip='Dokumentationen i Livsboken gör att du kan se mönster efter flera kläckningar.';
  }else if(active===0){
    level='warn';status='Ingen aktiv kläckning';
    msg='Inga ägg är aktiva just nu. Registrera en ny omgång när du startar nästa kläckning.';
    tip='Skapa gärna en omgång först, så blir historiken tydligare.';
  }
  let chip=level==='good'?'🟢':level==='warn'?'🟡':'🔴';
  return `<div class="farm-today-card"><div class="farm-today-head"><div><div class="farm-today-title">🌱 ${farmTodayTitle()}</div><div class="farm-today-status">${esc(chip+' '+status)}</div><div class="farm-today-text">${esc(msg)}</div></div><span class="farm-today-chip ${level}">${esc(status)}</span></div><div class="farm-today-mini"><span class="status-chip">🥚 Aktiva: ${active}</span><span class="status-chip">🐣 Kycklingar: ${state.chicks.length}</span><span class="status-chip">🐓 Flock: ${state.flock.length}</span>${todayTasks?`<span class="status-chip warn">📌 Uppgifter idag: ${todayTasks}</span>`:''}</div><div class="farm-today-tip">💡 Dagens tips: ${esc(tip)}</div></div>`;
}


function dashboardInsightsHTML(activeEggs,tasks,up){
  const insights=[];
  const eggs=state.eggs||[], cand=state.candling||[], chicks=state.chicks||[], flock=state.flock||[], laying=state.laying||[];
  const hatched=eggs.filter(e=>e.status==='Kläckt').length;
  const stopped=eggs.filter(e=>['Obefruktat','Dött embryo','Kasserat'].includes(e.status)).length;
  const totalFinished=hatched+stopped;
  const survival=totalFinished?Math.round(hatched/totalFinished*100):null;
  const active=activeEggs.length;
  const uncertain=eggs.filter(e=>e.status==='Osäkert').length;
  const danger=stopped;
  const todayTasks=openTasksCount(tasks);

  if(todayTasks>0){
    insights.push({icon:'📌',title:'Åtgärd idag',text:`Du har ${todayTasks} uppgift${todayTasks===1?'':'er'} idag. Öppna kortet “Viktigast idag” och gör dem en i taget.`,tag:'Prioritet'});
  }
  if(active>0){
    const oldest=activeEggs.slice().sort((a,b)=>days(b.dateSet)-days(a.dateSet))[0];
    const d=oldest?days(oldest.dateSet):0;
    const left=Math.max(0,(state.settings.incubationDays||21)-d);
    insights.push({icon:'🥚',title:'Aktiv kläckning',text:`${active} ägg inkuberas just nu. Längst gångna ägg är på dag ${d}; cirka ${left} dagar kvar till beräknad kläckning.`,tag:'Kläckning'});
  }
  if(uncertain>0){
    insights.push({icon:'🟡',title:'Osäkra ägg',text:`${uncertain} ägg är markerade som osäkra. De bör följas upp extra innan du tar bort något.`,tag:'Uppföljning'});
  }
  if(survival!==null){
    insights.push({icon:'📈',title:'Kläckningshistorik',text:`Av avslutade ägg är ${survival}% markerade som kläckta. När du får fler omgångar blir denna siffra mer värdefull.`,tag:'Statistik'});
  }else if(eggs.length>0){
    insights.push({icon:'📈',title:'Bygger statistik',text:'Du har börjat samla data. När fler ägg avslutas kan PoultryMaster börja visa riktiga trender.',tag:'Databas'});
  }
  if(cand.length>=3){
    const positive=cand.filter(c=>['Ser lovande ut','Tydliga blodkärl'].includes(c.result)).length;
    insights.push({icon:'🔦',title:'Lysningsmönster',text:`${positive} av ${cand.length} lysningar är positiva. Det ger bättre underlag för framtida bedömningar.`,tag:'Lysning'});
  }
  if(chicks.length>0){
    const noWeight=chicks.filter(c=>!latestWeight(c.id)).length;
    if(noWeight>0) insights.push({icon:'⚖️',title:'Viktuppföljning',text:`${noWeight} kyckling${noWeight===1?'':'ar'} saknar viktregistrering. Viktkurvan blir värdefull när kycklingmodulen utvecklas.`,tag:'Kycklingar'});
  }
  if(flock.length>0 && laying.length===0){
    insights.push({icon:'🥚',title:'Värpningsdata saknas',text:'Flock finns registrerad men ingen värpning ännu. Börja logga värpning när hönorna kommer igång.',tag:'Värpning'});
  }

  if(!insights.length){
    insights.push({icon:'🌱',title:'Nästa steg',text:'Registrera din första omgång eller nästa händelse så börjar PoultryMaster bygga användbara insikter.',tag:'Start'});
  }

  return `<div class="insight-card"><h3>🧠 PoultryMasters insikter <span class="pill">${insights.length}</span></h3><div class="insight-list">${insights.slice(0,4).map(i=>`<div class="insight-item"><div class="insight-title">${esc(i.icon+' '+i.title)}</div><div class="insight-text">${esc(i.text)}</div><span class="insight-tag">${esc(i.tag)}</span></div>`).join('')}</div></div>`;
}
function renderDashboardInsights(activeEggs,tasks,up){
  const el=$('dashboard-insights');
  if(el) el.innerHTML=dashboardInsightsHTML(activeEggs,tasks,up);
}


function taskKey(kind,id,date=today()){return [date,kind,id].join('|')}
function isTaskDone(kind,id,date=today()){state.completedTasks=state.completedTasks||{};return !!state.completedTasks[taskKey(kind,id,date)]}
function setTaskDone(kind,id,done,date=today()){
  state.completedTasks=state.completedTasks||{};
  const key=taskKey(kind,id,date);
  if(done){state.completedTasks[key]={done:true,date,completedAt:new Date().toISOString(),kind,id}}
  else{delete state.completedTasks[key]}
  save();render();
}
function todayTasksFromEggs(activeEggs){
  let tasks=[];
  for(const e of activeEggs){
    let d=days(e.dateSet),s=state.settings;
    if(d===s.candling1)tasks.push({kind:'candling1',id:e.id,date:today(),icon:'🔦',label:'Första lysning'});
    if(d===s.candling2)tasks.push({kind:'candling2',id:e.id,date:today(),icon:'🔦',label:'Andra lysning'});
    if(d===s.lockdown)tasks.push({kind:'lockdown',id:e.id,date:today(),icon:'🔒',label:'Lockdown'});
    if(d===s.incubationDays)tasks.push({kind:'hatchday',id:e.id,date:today(),icon:'🐣',label:'Kläckdag'});
  }
  return tasks;
}
function openTasksCount(tasks){return tasks.filter(t=>!isTaskDone(t.kind,t.id,t.date)).length}
function doneTasksCount(tasks){return tasks.length-openTasksCount(tasks)}
function todayProgressHTML(tasks){if(!tasks.length)return '';const done=doneTasksCount(tasks), total=tasks.length, pct=Math.round(done/total*100);return `<div class="today-progress-box"><div class="today-progress-head"><span>Dagens arbete</span><span>${done}/${total} klara</span></div><div class="today-progress-track"><div class="today-progress-fill" style="width:${pct}%"></div></div></div>`;}


function plannedRoutineKind(label){
  if(label==='Första lysning')return 'candling1';
  if(label==='Andra lysning')return 'candling2';
  if(label==='Lockdown')return 'lockdown';
  if(label==='Kläckning'||label==='Beräknad kläckning')return 'hatchday';
  return String(label||'').toLowerCase().replace(/\s+/g,'_');
}
function plannedRoutineIsDone(label,id,date){
  return isTaskDone(plannedRoutineKind(label),id,date);
}

function completeMatchingTask(kind,id,date=today()){
  state.completedTasks=state.completedTasks||{};
  const key=taskKey(kind,id,date);
  state.completedTasks[key]={done:true,date,completedAt:new Date().toISOString(),kind,id,source:'auto'};
}
function completeTaskFromSavedRecord(type,record){
  if(type==='candling'&&record&&record.eggId){
    const egg=state.eggs.find(e=>e.id===record.eggId);
    if(egg){
      const d=days(egg.dateSet,record.date||today()),s=state.settings;
      if(d===s.candling1)completeMatchingTask('candling1',egg.id,record.date||today());
      if(d===s.candling2)completeMatchingTask('candling2',egg.id,record.date||today());
    }
  }
  if(type==='event'&&record&&record.type){
    // För framtida rutiner kan event kopplas här utan att bygga om checklistan.
  }
}


window.pmSetTaskDone=function(kind,id,date,done){
  setTaskDone(kind,id,done,date||today());
};
window.pmConfirmTask=function(kind,id,date){
  setTaskDone(kind,id,true,date||today());
};

function taskHTML(t){
  const checked=isTaskDone(t.kind,t.id,t.date);
  return `<div class="task-check-item ${checked?'done':''}">
    <input type="checkbox" ${checked?'checked':''}
      onchange="window.pmSetTaskDone('${esc(t.kind)}','${esc(t.id)}','${esc(t.date)}',this.checked)">
    <span style="flex:1"><span class="task-check-text">${t.icon} ${esc(t.label)}: <b>${esc(t.id)}</b></span>${checked?'<div class="task-done-note">Klart och sparat i dagens logg.</div>':''}</span>
    ${checked?`<button type="button" class="btn small" onclick="window.pmSetTaskDone('${esc(t.kind)}','${esc(t.id)}','${esc(t.date)}',false)">Ångra</button>`:`<button type="button" class="btn small" onclick="window.pmConfirmTask('${esc(t.kind)}','${esc(t.id)}','${esc(t.date)}')">Klar</button>`}
  </div>`;
}

function dash(){let activeEggs=state.eggs.filter(e=>e.status==='Inkuberas');let activeCount=activeEggs.length;let activeIncs=state.incubators.filter(i=>i.status==='Aktiv').length;$('s-eggs').textContent=activeCount;$('s-inc').textContent=activeIncs;$('s-chicks').textContent=state.chicks.length;$('s-flock').textContent=state.flock.length;if($('s-eggs-sub'))$('s-eggs-sub').textContent=activeEggs.length?`Dag ${Math.max(...activeEggs.map(e=>days(e.dateSet)))} av ${state.settings.incubationDays}`:'Inga aktiva';if($('s-inc-sub'))$('s-inc-sub').textContent=activeIncs===1?'1 i drift':`${activeIncs} i drift`;if($('s-chicks-sub'))$('s-chicks-sub').textContent=state.chicks.length?'Kläckta registrerade':'0 kläckta';if($('s-flock-sub'))$('s-flock-sub').textContent=state.flock.length?'Registrerade fåglar':'0 registrerade';let tasks=todayTasksFromEggs(activeEggs);
let openTaskCount=openTasksCount(tasks);
$('tasks').innerHTML=tasks.length
  ? todayProgressHTML(tasks)+tasks.map(taskHTML).join('')+(openTaskCount===0?'<div class="tasks-complete-box">🎉 Alla dagens uppgifter är slutförda.</div>':'')
  : '<div class="empty">✅ Inga planerade uppgifter idag.</div>';let up=[];for(const e of activeEggs)for(const [n,l] of [[state.settings.candling1,'Första lysning'],[state.settings.candling2,'Andra lysning'],[state.settings.lockdown,'Lockdown'],[state.settings.incubationDays,'Kläckning']]){let date=addDays(e.dateSet,n),left=days(today(),date);if(new Date(date)>=new Date(today())&&!plannedRoutineIsDone(l,e.id,date))up.push({date,left,l,id:e.id})}up.sort((a,b)=>a.left-b.left);$('upcoming').innerHTML=up.length?up.slice(0,6).map(u=>`<div><b>${u.date}</b> (${u.left?`om ${u.left} d`:'Idag'}) – ${u.l} ${u.id}</div>`).join(''):'<div class="empty">Inga kommande moment.</div>';renderFarmToday(activeEggs,tasks,up);if($('hatch-summary')){if(activeEggs.length){let lead=activeEggs.slice().sort((a,b)=>days(b.dateSet)-days(a.dateSet))[0];let d=days(lead.dateSet);let p=Math.min(100,Math.round(d/state.settings.incubationDays*100));let hatchDate=addDays(lead.dateSet,state.settings.incubationDays);let hatchLeft=state.settings.incubationDays-d;let next=up[0];let uncertain=state.eggs.filter(e=>e.status==='Osäkert').length;let danger=state.eggs.filter(e=>['Obefruktat','Dött embryo','Kasserat'].includes(e.status)).length;let survivalBase=activeEggs.length+danger+uncertain;let survival=survivalBase?Math.floor(activeEggs.length/survivalBase*100):100;$('hatch-summary').innerHTML=`<div class="hatch-summary-card"><div class="hatch-summary-head"><div class="hatch-summary-title">Aktiva kläckningar</div><span class="pill">${p}%</span></div><div class="hatch-summary-main"><div class="big-egg">🥚</div><div><h3>${activeEggs.length} ägg i kläckare</h3><p class="muted" style="margin:4px 0 0"><b>Dag ${d} av ${state.settings.incubationDays}</b></p></div></div><div class="hatch-meta"><div class="hatch-meta-box"><b>🔦 Nästa händelse</b><small>${next?`${next.l} ${next.left?`om ${next.left} dagar`:'idag'}`:'Inget planerat'}${next?`<br>${next.date}`:''}</small></div><div class="hatch-meta-box"><b>🐣 Beräknad kläckning</b><small>${hatchLeft>0?`Om ${hatchLeft} dagar`:'Idag / passerad'}<br>${hatchDate}</small></div></div><div class="progress"><div class="bar" style="width:${p}%"></div></div><div class="hatch-percent">${p}%</div><div class="status-strip"><span class="status-chip">🟢 Aktiva: ${activeEggs.length}</span>${uncertain?`<span class="status-chip warn">🟡 Osäkra: ${uncertain}</span>`:''}${danger?`<span class="status-chip bad">🔴 Avbrutna: ${danger}</span>`:''}<span class="status-chip survival">📈 Överlevnadsgrad: ${survival}%</span></div></div>`}else{$('hatch-summary').innerHTML=`<div class="hatch-summary-card"><div class="hatch-summary-title">Aktiva kläckningar</div><p class="empty">Inga ägg i kläckare just nu.</p><button class="btn primary" data-action="add" data-type="egg">+ Lägg till ägg</button></div>`}}$('hatches').innerHTML=activeEggs.map(cardEgg).join('')||'<div class="card"><div class="body"><p>Inga aktiva kläckningar ännu.</p><button class="btn primary" data-action="add" data-type="egg">+ Lägg till ägg</button></div></div>';if($('dash-hatches-card')){
  $('dash-hatches-card').classList.toggle('open',!!dashOpen.hatches);
  const h=$('dash-hatches-card').querySelector('h3');
  if(h) h.firstChild.textContent=(dashOpen.hatches?'▼':'▶')+' Aktiva kläckningar ('+activeEggs.length+')';
}}function cardEgg(e){let d=days(e.dateSet),p=Math.min(100,d/state.settings.incubationDays*100);let hatchDate=addDays(e.dateSet,state.settings.incubationDays);let left=state.settings.incubationDays-d;let lockLeft=state.settings.lockdown-d;let hatchText=left>1?`🐣 Kläcks om ${left} dagar`:left===1?'🐣 Kläcks imorgon':left===0?'🐣 Kläckdag idag':`⏳ ${Math.abs(left)} dagar över beräknad kläckning`;let lockText=lockLeft>1?`🔒 Lockdown om ${lockLeft} dagar`:lockLeft===1?'🔒 Lockdown imorgon':lockLeft===0?'🔥 Lockdown idag':null;return `<div class="card"><h3>🥚 Ägg ${esc(e.id)} <span class="pill">Dag ${d}</span></h3><div class="body">${e.image ? `<img src="${e.image}" style="width:120px;height:120px;object-fit:cover;border-radius:12px;margin-bottom:12px;">` : ''}<p><b>Ras:</b> ${esc(e.breed)}</p><p><b>Kläckare:</b> ${esc(incName(e.incubatorId))}</p><p><b>Beräknad kläckning:</b> ${hatchDate}</p><p><span class="pill">${hatchText}</span></p>${lockText?`<p><span class="pill">${lockText}</span></p>`:''}<div class="progress"><div class="bar" style="width:${p}%"></div></div><div class="actions"><button class="btn small life-book-btn" data-action="life-book" data-id="${esc(e.id)}">📖 Livsbok</button><button class="btn small" data-action="edit" data-type="egg" data-id="${esc(e.id)}">Redigera</button><button class="btn small danger" data-action="del" data-type="egg" data-id="${esc(e.id)}">Ta bort</button></div></div></div>`}

function eggPhase(e){let d=days(e.dateSet);if(e.status==='Kläckt')return'🐣 Kläckt';if(['Obefruktat','Dött embryo','Kasserat'].includes(e.status))return'⚫ Avbrutet';if(d>=state.settings.incubationDays)return'🐣 Kläckning';if(d>=state.settings.lockdown)return'🟧 Lockdown';if(d>=state.settings.candling1)return'🟩 Embryoutveckling';return'🟦 Tidig utveckling'}
function eggProgress(e){return Math.max(0,Math.min(100,Math.round(days(e.dateSet)/state.settings.incubationDays*100)))}
function eggHealth(e){let h=candlingHistoryForEgg(e.id),pm=candlingAssessment(e,h);let out=hatchOutcome(e);if(['Obefruktat','Dött embryo','Blodring','Kasserat'].includes(out))return{cls:'critical',label:'🔴 Kritisk',pm};if(out==='Kläckt')return{cls:'strong',label:'🐣 Kläckt',pm};if(pm.vitality.level==='strong')return{cls:'strong',label:'🟢 Stark',pm};if(pm.vitality.level==='critical')return{cls:'critical',label:'🔴 Kritisk',pm};return{cls:'medium',label:'🟡 Osäker',pm}}
function eggNextAction(e){let d=days(e.dateSet),s=state.settings;if(e.status==='Kläckt')return'🐣 Skapa eller följ kycklingen i nästa livsfas.';if(['Obefruktat','Dött embryo','Kasserat'].includes(e.status))return'📖 Avslutad – historiken finns kvar i Livsboken.';if(d===s.candling1)return'🔦 Första lysning idag';if(d===s.candling2)return'🔦 Andra lysning idag';if(d===s.lockdown)return'🔒 Lockdown idag';if(d>=s.incubationDays)return'🐣 Kläckning kan börja';let next=[[s.candling1,'Första lysning'],[s.candling2,'Andra lysning'],[s.lockdown,'Lockdown'],[s.incubationDays,'Kläckning']].find(x=>x[0]>d);return next?`📅 Nästa: ${next[1]} om ${next[0]-d} dagar`:'📅 Följ enligt plan'}
function eggMatchesFilter(e){let h=eggHealth(e),d=days(e.dateSet),s=state.settings;if(eggFilter==='active')return e.status==='Inkuberas';if(eggFilter==='uncertain')return h.cls==='medium'||e.status==='Osäkert';if(eggFilter==='critical')return h.cls==='critical';if(eggFilter==='today')return e.status==='Inkuberas'&&(d===s.candling1||d===s.candling2||d===s.lockdown||d>=s.incubationDays);if(eggFilter==='soon')return e.status==='Inkuberas'&&(s.incubationDays-d)<=7;return true}
function eggFilterHTML(){let eggs=state.eggs||[];let count=f=>eggs.filter(f).length;let s=state.settings;let filters=[['all','📦 Alla',eggs.length],['active','🟢 Aktiva',count(e=>e.status==='Inkuberas')],['uncertain','🟡 Osäkra',count(e=>eggHealth(e).cls==='medium'||e.status==='Osäkert')],['critical','🔴 Kritiska',count(e=>eggHealth(e).cls==='critical')],['today','🔦 Idag',count(e=>{let d=days(e.dateSet);return e.status==='Inkuberas'&&(d===s.candling1||d===s.candling2||d===s.lockdown||d>=s.incubationDays)})],['soon','🐣 Inom 7 dagar',count(e=>e.status==='Inkuberas'&&(s.incubationDays-days(e.dateSet))<=7)]];return `<div class="egg-filter-bar">${filters.map(f=>`<button class="btn ${eggFilter===f[0]?'active':''}" data-action="egg-filter" data-filter="${f[0]}">${f[1]} (${f[2]})</button>`).join('')}</div>`}
function eggCard(e){let d=days(e.dateSet),pct=eggProgress(e),health=eggHealth(e),h=candlingHistoryForEgg(e.id),latest=h[h.length-1],open=!!eggOpen[e.id],phase=eggPhase(e),inc=incName(e.incubatorId),next=eggNextAction(e),batch=batchName(e.batchId);let cardCls=health.cls==='critical'?'critical':(health.cls==='medium'?'warn':'');let pm=health.pm;let latestTxt=latest?`${latest.result} · ${latest.date}`:'Ingen lysning ännu';return `<div class="egg-card-v2 ${cardCls} ${open?'open':''}"><div class="egg-card-head" data-action="toggle-egg-card" data-id="${esc(e.id)}"><div class="egg-symbol">🥚</div><div><div class="egg-title">${esc(e.id)} ${statusPill(e.status)}</div><div class="egg-subline">${esc(e.breed||'Okänd ras')} · ${esc(phase)}</div><div class="egg-expand-hint">${open?'Tryck för att dölja detaljer':'Öppna kortet för mer detaljer'}</div></div><div><div class="egg-day">Dag ${d}/${state.settings.incubationDays}</div><span class="egg-health ${health.cls}">${esc(health.label)}</span></div></div><div class="egg-progress-wrap"><div class="egg-progress-top"><span>${esc(phase)}</span><span>${pct}%</span></div><div class="egg-progress"><div class="egg-progress-fill" style="width:${pct}%"></div></div></div><div class="egg-next">${esc(next)}</div><div class="egg-details"><div class="egg-detail-grid"><div class="egg-detail-box"><b>Ursprung</b><span>${esc(e.source||'Okänt')}</span></div><div class="egg-detail-box"><b>Kläckare</b><span>${esc(inc)}</span></div><div class="egg-detail-box"><b>Startdatum</b><span>${esc(e.dateSet)}</span></div><div class="egg-detail-box"><b>Senaste lysning</b><span>${esc(latestTxt)}</span></div>${batch?`<div class="egg-detail-box"><b>Omgång</b><span>${esc(batch)}</span></div>`:''}<div class="egg-detail-box"><b>Livsbok</b><span>${lifeBookEvents(e.id).length} händelser</span></div></div>${e.image?`<img src="${e.image}" style="width:120px;height:120px;object-fit:cover;border-radius:14px;margin:8px 0;border:1px solid var(--line)">`:''}<div class="egg-pm-box"><b>🧠 PoultryMaster bedömer</b><div class="egg-pm-conclusion">${esc(pm.conclusion||'Fortsätt samla observationer så blir bedömningen säkrare.')}</div><div class="muted" style="margin-top:6px;font-weight:800">${esc(pm.probabilityMeaning||'')}</div></div><div class="egg-actions">${e.status==='Kläckt'&&!state.chicks.some(c=>c.eggId===e.id)?`<button class="btn small primary" data-action="chick-from-egg" data-id="${esc(e.id)}">🐣 Skapa kyckling</button>`:''}<button class="btn small primary life-book-btn" data-action="life-book" data-id="${esc(e.id)}">📖 Livsbok</button><button class="btn small" data-action="quick-candling" data-id="${esc(e.id)}">🔦 Lysning</button><button class="btn small" data-action="edit" data-type="egg" data-id="${esc(e.id)}">Redigera</button><button class="btn small danger" data-action="del" data-type="egg" data-id="${esc(e.id)}">Ta bort</button></div></div></div>`}
function eggs(){document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.sub===sub));let filtered=(state.eggs||[]).filter(eggMatchesFilter);$('egg-filters').innerHTML=eggFilterHTML();$('egg-list').innerHTML=filtered.length?filtered.map(eggCard).join(''):'<div class="card"><div class="body">Inga ägg matchar filtret.</div></div>'}function incs(){document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.sub===sub));$('egg-filters').innerHTML='';$('egg-list').innerHTML=`<div class="row"><p class="muted"><b>Mina kläckare</b><br>Hantera kläckare under Inställningar → Kläckare.</p><button class="btn primary" data-action="view" data-view="settings">Hantera kläckare</button></div>`+(state.incubators||[]).map(machineCardHTML).join('')||'<div class="empty">Inga kläckare registrerade.</div>'}function candlingOutcome(e){let outcome=hatchOutcome(e);if(outcome==='Aktiv')return{cat:'active',label:'🟢 Levande / aktiv',cls:'good-text'};if(outcome==='Kläckt')return{cat:'hatched',label:'🐣 Kläckt',cls:'good-text'};if(['Obefruktat','Dött embryo','Blodring','Kasserat'].includes(outcome))return{cat:'stopped',label:'🔴 '+outcome,cls:'danger-text'};if(outcome==='Osäker')return{cat:'active',label:'🟡 Osäker',cls:''};return{cat:'all',label:outcome||'Okänd',cls:''}}function candlingHistoryForEgg(id){let key=String(id||'').toLowerCase();return (state.candling||[]).filter(c=>String(c.eggId||'').toLowerCase()===key).sort((a,b)=>String(a.date).localeCompare(String(b.date)))}function latestCandlingForEgg(id){let h=candlingHistoryForEgg(id);return h[h.length-1]||null}function candlingDot(result){if(['Ser lovande ut','Tydliga blodkärl'].includes(result))return{icon:'●',cls:'good'};if(result==='Osäkert')return{icon:'●',cls:'warn'};if(['Obefruktat','Dött embryo','Blodring'].includes(result))return{icon:'●',cls:'bad'};return{icon:'●',cls:'neutral'}}function nextCandlingInfo(e){let d=days(e.dateSet);let plan=[[state.settings.candling1,'Första lysning'],[state.settings.candling2,'Andra lysning'],[state.settings.lockdown,'Lockdown / sista kontroll']].filter(x=>Number(x[0])>d).sort((a,b)=>a[0]-b[0])[0];if(!plan)return '✔ Sista planerade lysning utförd';let left=plan[0]-d;return `${plan[1]} · Dag ${plan[0]} · ${left===0?'idag':left===1?'imorgon':'om '+left+' dagar'}`}function candlingObsList(){return[
  ['movement','Rörelse observerad'],['heartbeat','Hjärtslag observerat'],['clearVessels','Tydliga blodkärl'],['weakVessels','Svaga blodkärl'],
  ['embryoLarge','Embryot fyller större delen av ägget'],['airNormal','Luftblåsa normal'],['airLarge','Luftblåsa stor'],['airSmall','Luftblåsa liten'],
  ['bloodRing','Blodring'],['noVessels','Inga kärl synliga'],['badSmell','Dålig lukt'],['crack','Spricka i skalet'],['hardToSee','Svårbedömt / mörkt skal']
]}function candlingObservationLabels(c){let obs=Array.isArray(c?.observations)?c.observations:[];let map=Object.fromEntries(candlingObsList());return obs.map(o=>map[o]||o).filter(Boolean)}function candlingObsInputs(it){let chosen=new Set(Array.isArray(it?.observations)?it.observations:[]);return `<label>Observationer</label><div class="candling-obs-grid">${candlingObsList().map(([k,l])=>`<label class="candling-obs-option"><input type="checkbox" name="obs_${esc(k)}" ${chosen.has(k)?'checked':''}> ${esc(l)}</label>`).join('')}</div>`}function candlingConfidenceWeight(c){let v=c?.confidence||'osaker';return {'100':'mycket hög','ganska':'hög','osaker':'måttlig','mycket_osaker':'låg'}[v]||'måttlig'}function candlingConfidenceLabel(c){let v=c?.confidence||'';return {'100':'🟢 100 % säker','ganska':'🟢 Ganska säker','osaker':'🟡 Osäker','mycket_osaker':'🔴 Mycket osäker'}[v]||'Ej angiven'}function candlingAssessment(e,history){
  let d=days(e.dateSet);
  let latest=history[history.length-1]||null;
  let positives=history.filter(c=>['Ser lovande ut','Tydliga blodkärl'].includes(c.result)).length;
  let uncertain=history.filter(c=>c.result==='Osäkert').length;
  let danger=history.filter(c=>['Obefruktat','Dött embryo','Blodring'].includes(c.result));
  let notes=history.map(c=>c.notes||'').filter(Boolean).join(' ').toLowerCase();
  let obsAll=history.flatMap(c=>Array.isArray(c.observations)?c.observations:[]);
  let latestObs=Array.isArray(latest?.observations)?latest.observations:[];
  let highConf=history.filter(c=>['100','ganska'].includes(c.confidence)).length;
  let lowConf=history.filter(c=>['osaker','mycket_osaker'].includes(c.confidence)).length;
  let reasons=[];
  let security='low',securityText='🔴 Mycket låg';
  let assessment='',recommendation='',conclusion='',trend='➡️ Ingen tydlig trend ännu';
  let vitality={level:'medium',text:'🟡 Livskraft: Okänd'};
  let next=nextCandlingInfo(e);
  let hasMovement=/rör|rörelse|levande|lever|aktiv|spark|fladdr/.test(notes)||obsAll.includes('movement')||obsAll.includes('heartbeat');
  let hardToSee=/svårt|svår|mörk|mork|mörkt|maran|tjockt skal|svårbedöm/.test(notes)||obsAll.includes('hardToSee');
  let strongDev=/mest välutveckl|välutvecklad|tydlig|tydliga|mycket utvecklad|stark|fina kärl|bra kärl/.test(notes)||obsAll.includes('clearVessels')||obsAll.includes('embryoLarge');
  let noChange=/ingen förändring|oförändrad|samma som sist|likadan/.test(notes);
  let negativeObs=obsAll.some(o=>['bloodRing','noVessels','badSmell','crack'].includes(o));
  let severeObs=obsAll.some(o=>['badSmell','bloodRing','noVessels'].includes(o));
  let worse=/sämre|mindre kärl|avstann|blodring|dött|död|kasser/.test(notes)||negativeObs;

  if(!history.length){
    assessment='Ingen lysning är registrerad ännu. PoultryMaster har därför inte tillräckligt underlag för att bedöma utvecklingen.';
    reasons.push('Ingen lysningshistorik finns sparad för ägget.');
    recommendation='Logga första lysningen när ägget nått planerad kontrollpunkt.';
    conclusion='Ingen slutsats kan dras ännu. Första lysningen behövs för att PoultryMaster ska kunna börja följa utvecklingen.';
  }else{
    if(positives)reasons.push(`${positives} positiv${positives>1?'a':''} lysning${positives>1?'ar':''} är registrerad${positives>1?'e':''}.`);
    if(uncertain)reasons.push(`${uncertain} lysning${uncertain>1?'ar':''} har markerats som osäker${uncertain>1?'a':''}.`);
    if(highConf)reasons.push(`${highConf} observation${highConf>1?'er':''} har markerats med hög säkerhet.`);
    if(lowConf)reasons.push(`${lowConf} observation${lowConf>1?'er':''} har markerats med lägre säkerhet.`);
    if(danger.length||negativeObs)reasons.push('Minst en avvikelse är registrerad i lysningshistoriken.');
    if(hasMovement)reasons.push('Observationerna nämner rörelse, hjärtslag, liv eller tydlig aktivitet.');
    if(strongDev)reasons.push('Observationerna beskriver tydliga blodkärl, stark utveckling eller stor embryomassa.');
    if(hardToSee)reasons.push('Ägget har markerats som svårbedömt, vilket sänker säkerheten.');
    if(noChange)reasons.push('Anteckningarna antyder liten eller ingen förändring sedan tidigare kontroll.');
    if(latestObs.length)reasons.push('Senaste markerade observationer: '+candlingObservationLabels(latest).join(', ')+'.');
    if(latest?.confidence)reasons.push('Senaste säkerhetsnivå: '+candlingConfidenceLabel(latest)+'.');
    if(!reasons.length)reasons.push('Bedömningen bygger på senaste registrerade resultat och aktuell inkuberingsdag.');

    if(severeObs||danger.length||['Obefruktat','Dött embryo','Blodring'].includes(latest.result)||worse){
      security=lowConf&&!highConf?'medium':'medium'; securityText='🟡 Begränsat';
      vitality={level:'critical',text:'🔴 Livskraft: Kritisk'};
      trend='⬇️ Försämrad / avvikande';
      assessment='Utvecklingen avviker från en normal positiv kurva. PoultryMaster ser tecken som gör att ägget bör följas extra noggrant innan ett slutligt beslut tas.';
      recommendation='Gör en bekräftande lysning innan ägget klassas som avbrutet, särskilt om observationen var svår eller osäker.';
      conclusion='Ägget visar avvikande tecken. Behåll bara ägget vidare om du vill bekräfta med ytterligare kontroll.';
    }else if(latest.result==='Osäkert'||hardToSee||uncertain){
      security=highConf&&positives?'medium':'medium'; securityText='🟡 Begränsat';
      vitality={level:'medium',text:'🟡 Livskraft: Osäker'};
      trend=noChange?'➡️ Oförändrad':'➡️ Svårbedömd';
      assessment='Utvecklingen går inte att bedöma helt säkert utifrån nuvarande underlag. Tidigare observationer kan fortfarande tala för utveckling, men osäkerheten behöver följas upp.';
      recommendation='Jämför vid nästa lysning och leta efter tydligare kärlnät, ökad mörk embryomassa eller rörelse.';
      conclusion='Det finns fortfarande möjlighet till utveckling, men underlaget är inte starkt nog för en säker slutsats.';
    }else if(positives>=2||hasMovement||strongDev){
      security=(hasMovement||strongDev||highConf>=2)?'high':'high';
      securityText=(hasMovement||strongDev||highConf>=2)?'🟢 Mycket starkt':'🟢 Hög';
      vitality={level:'strong',text:'🟢 Livskraft: Stark'};
      trend='⬆️ Stabilt ökande';
      assessment='Utvecklingen ser mycket stabil ut. Flera positiva lysningar eller tydliga observationer talar för att embryot utvecklas enligt förväntan.';
      recommendation=`Fortsätt enligt plan. ${next}`;
      conclusion='Ägget bedöms ha goda förutsättningar att fortsätta utvecklas normalt. Inga registrerade observationer tyder just nu på avvikande utveckling.';
    }else if(positives===1){
      security='medium'; securityText='🟡 Begränsat';
      vitality={level:'medium',text:'🟡 Livskraft: Lovande'};
      trend='⬆️ Tidigt positiv';
      assessment='Första positiva tecken är registrerade. PoultryMaster ser ett lovande utgångsläge, men fler observationer behövs innan säkerheten blir hög.';
      recommendation=`Fortsätt följa utvecklingen vid nästa planerade kontroll. ${next}`;
      conclusion='Ägget visar lovande tecken, men behöver minst en uppföljande positiv lysning för en starkare bedömning.';
    }else{
      security='low'; securityText='🟠 Otillräckligt';
      vitality={level:'medium',text:'🟡 Livskraft: Oklar'};
      trend='➡️ Oklart mönster';
      assessment='PoultryMaster hittar inget tydligt mönster i observationerna ännu.';
      recommendation='Fortsätt samla data och gör nästa lysning enligt plan.';
      conclusion='Det går inte att dra någon säker slutsats utifrån nuvarande information.';
    }
  }
  let probability=50,probabilityMeaning='Oklart underlag – mer data behövs.';
  if(!history.length){
    probability=0;
    probabilityMeaning='Ingen sannolikhet ännu – första lysningen saknas.';
  }else if(vitality.level==='critical'){
    probability=(severeObs||danger.length)?25:40;
    probabilityMeaning=probability<=25?'Otillräckligt sannolikhet – bekräfta innan beslut.':'Avvikande tecken – följ upp noggrant.';
  }else if(vitality.level==='strong'){
    probability=(hasMovement&&highConf>=2)?96:((hasMovement||strongDev)?92:88);
    probabilityMeaning=probability>=95?'Mycket starkt underlag – fortsätt enligt plan.':'Mycket god sannolikhet – fortsätt enligt plan.';
  }else if(String(vitality.text||'').includes('Lovande')){
    probability=75;
    probabilityMeaning='Lovande sannolikhet – behöver följas upp.';
  }else if(String(vitality.text||'').includes('Osäker')){
    probability=60;
    probabilityMeaning='Begränsat sannolikhet – bedömningen är osäker.';
  }else{
    probability=50;
    probabilityMeaning='Oklart läge – fler observationer behövs.';
  }
  if(hardToSee&&probability>60){
    probability=Math.max(60,probability-8);
    probabilityMeaning+=' Svårbedömt skal sänker säkerheten.';
  }
  return {assessment,reasons,security,securityText,recommendation,conclusion,trend,vitality,probability,probabilityMeaning};
}
function candlingCard(e){let d=days(e.dateSet),out=candlingOutcome(e),history=candlingHistoryForEgg(e.id),latest=latestCandlingForEgg(e.id);let batch=batchName(e.batchId);let open=!!candlingOpen[e.id];let latestLine=latest?`${esc(latest.date)} • <span class="${candlingResultClass(latest.result)}">${esc(latest.result)}</span>`:'Ingen lysning loggad ännu';let latestNote=latest&&latest.notes?`<div class="candling-latest-note">${esc(latest.notes)}</div>`:'';let updated=latest?`<p class="muted" style="margin:8px 0 0">📅 Senast uppdaterad: ${esc(latest.date)}</p>`:'';let photoChip=latest&&latest.image?`<span class="candling-photo-chip">📷 1 bild</span><img class="candling-photo-thumb" src="${latest.image}" alt="Bild från senaste lysning">`:`<span class="candling-photo-chip">📷 Ingen bild</span>`;let nextBox=`<div class="candling-next-box"><b>📅 Nästa planerade kontroll</b><br><span class="muted">${esc(nextCandlingInfo(e))}</span></div>`;let pm=candlingAssessment(e,history);let progressPct=Math.max(0,Math.min(100,Math.round(d/state.settings.incubationDays*100)));let vitalityBox=`<div class="candling-vitality-box"><div class="candling-vitality-head"><span class="candling-vitality-title">Livskraft</span><span class="candling-vitality-chip ${pm.vitality.level}">${esc(pm.vitality.text)}</span></div><div class="candling-stage-line"><div class="candling-stage-labels"><span>Dag 1</span><span>Dag ${state.settings.lockdown} Lockdown</span><span>Dag ${state.settings.incubationDays}</span></div><div class="candling-stage-track"><div class="candling-stage-fill" style="width:${progressPct}%"></div><span class="candling-stage-dot" style="left:${progressPct}%"></span></div><div class="candling-stage-current">Dag ${d} av ${state.settings.incubationDays}</div></div></div>`;let reasonsHtml=pm.reasons.map(r=>`<li>${esc(r)}</li>`).join('');let expertOpen=!!candlingExpert[e.id];let assessment=`<div class="candling-assessment-box"><b>🧠 PoultryMasters analys</b><div class="candling-probability-box"><div class="candling-probability-top"><div><span class="candling-probability-label">Sannolikhet</span><span class="candling-probability-meaning">${esc(pm.probabilityMeaning)}</span></div><span class="candling-probability-number">${esc(pm.probability)}%</span></div></div><div class="candling-assessment-part"><strong>Bedömning</strong><span class="muted">${esc(pm.assessment)}</span></div><div class="candling-assessment-part"><strong>Analysunderlag</strong><span class="candling-security ${pm.security}">${esc(pm.securityText)}</span></div><div class="candling-assessment-part"><strong>Utvecklingstrend</strong><span class="candling-trend">${esc(pm.trend)}</span></div><div class="candling-assessment-part"><strong>Rekommendation</strong><span class="muted">${esc(pm.recommendation)}</span></div><div class="candling-assessment-part"><strong>Slutsats</strong><div class="candling-conclusion">${esc(pm.conclusion)}</div></div><button class="btn small candling-expert-btn" data-action="toggle-candling-expert" data-id="${esc(e.id)}"><span>🧠 Varför denna bedömning?</span><span>${expertOpen?'▲':'▼'}</span></button><div class="candling-expert ${expertOpen?'open':''}"><div class="candling-assessment-part"><strong>Varför drar PoultryMaster denna slutsats?</strong><ul class="candling-assessment-list">${reasonsHtml}</ul></div><div class="candling-disclaimer">Bedömningen baseras på registrerade observationer och fungerar som beslutsstöd. Den ersätter inte din egen slutliga bedömning.</div></div><div class="candling-module-lock">Candling Module 2.3 – Probability Insight</div></div>`;let hist=history.length?`<div class="candling-history candling-timeline ${open?'':'collapsed'}">${history.slice().reverse().map(c=>{let dot=candlingDot(c.result);return `<div class="candling-timeline-item"><div class="candling-dot ${dot.cls}">${dot.icon}</div><div><div class="candling-timeline-title">Dag ${esc(c.day||days(e.dateSet,c.date))} · ${esc(c.date)}</div><div class="${candlingResultClass(c.result)}">${esc(c.result)}</div><div class="candling-timeline-meta">Säkerhet: ${esc(candlingConfidenceLabel(c))}</div>${candlingObservationLabels(c).length?`<div class="candling-obs-chips">${candlingObservationLabels(c).map(o=>`<span class="candling-obs-chip">${esc(o)}</span>`).join('')}</div>`:''}${c.notes?`<div class="candling-timeline-meta">${esc(c.notes)}</div>`:''}${c.image?`<img class="candling-photo-thumb" src="${c.image}" alt="Bild från lysning">`:''}<div class="actions"><button class="btn small" data-action="edit" data-type="candling" data-id="${esc(c.id)}">Redigera</button><button class="btn small danger" data-action="del" data-type="candling" data-id="${esc(c.id)}">Ta bort</button></div></div></div>`}).join('')}</div>`:`<div class="empty">Ingen historik ännu.</div>`;return `<div class="card candling-egg-card"><h3><div class="candling-egg-head"><div class="candling-egg-main"><span>🔦</span><span><span class="candling-egg-id">${esc(e.id)}</span> <span class="pill">Dag ${d}</span><br><span class="candling-egg-sub">${esc(e.breed||'Okänd ras')}${batch?` · ${esc(batch)}`:''}</span></span></div><span class="candling-status ${out.cls}">${out.label}</span></div></h3><div class="body"><p><b>🔦 Senaste lysning</b><br>${latestLine}</p>${latestNote}${updated}<div class="candling-counts"><span class="status-chip">Kläckare: ${esc(incName(e.incubatorId))}</span>${photoChip}</div>${vitalityBox}${nextBox}${assessment}<div class="actions"><button class="btn small primary" data-action="quick-candling" data-id="${esc(e.id)}">+ Logga lysning</button><button class="btn small" data-action="edit" data-type="egg" data-id="${esc(e.id)}">✏️ Redigera ägg</button><button class="btn small life-book-btn" data-action="life-book" data-id="${esc(e.id)}">📖 Livsbok</button></div><div class="candling-history-toggle"><button class="btn small" data-action="toggle-candling-history" data-id="${esc(e.id)}"><span>${open?'▲ Dölj historik':'▼ Visa historik'} (${history.length})</span><span>${open?'':'›'}</span></button></div>${hist}</div></div>`}function candles(){let eggs=(state.eggs||[]).slice().sort((a,b)=>String(a.dateSet).localeCompare(String(b.dateSet))||String(a.id).localeCompare(String(b.id)));let counts={all:eggs.length,active:0,stopped:0,hatched:0};eggs.forEach(e=>{let c=candlingOutcome(e).cat;if(c==='active')counts.active++;if(c==='stopped')counts.stopped++;if(c==='hatched')counts.hatched++});let q=String(candlingQuery||'').trim().toLowerCase();let filtered=eggs.filter(e=>{let cat=candlingOutcome(e).cat;let okFilter=candlingFilter==='all'||cat===candlingFilter;let text=[e.id,e.breed,e.source,batchName(e.batchId),incName(e.incubatorId)].join(' ').toLowerCase();let okQuery=!q||text.includes(q);return okFilter&&okQuery});$('candling-list').innerHTML=`<div class="candling-toolbar"><input id="candling-search" class="candling-search" placeholder="Sök ägg, ras, omgång..." value="${esc(candlingQuery)}"><div class="candling-filters"><button class="btn ${candlingFilter==='active'?'active':''}" data-action="candling-filter" data-filter="active">🟢 Aktiva (${counts.active})</button><button class="btn ${candlingFilter==='stopped'?'active':''}" data-action="candling-filter" data-filter="stopped">🔴 Avbrutna (${counts.stopped})</button><button class="btn ${candlingFilter==='hatched'?'active':''}" data-action="candling-filter" data-filter="hatched">🐣 Kläckta (${counts.hatched})</button><button class="btn ${candlingFilter==='all'?'active':''}" data-action="candling-filter" data-filter="all">📦 Alla (${counts.all})</button></div><p class="muted" style="margin:0">Visar ägg först. Öppna journalen under varje ägg för att följa lysningarna dag för dag.</p></div>`+(filtered.map(candlingCard).join('')||'<div class="card"><div class="body">Inga ägg matchar filtret.</div></div>')}function chicks(){
 const L={
  sv:{title:'Kycklingar',add:'+ Lägg till',heroTitle:'Digital uppväxtjournal',heroText:'Följ varje kyckling från kläckning till flock: ålder, vikt, hälsa, utveckling och livsbok.',unknown:'Okänt',alive:'Lever',moved:'Flyttad till flock',dead:'Död',observe:'Observeras',healthy:'Frisk',days:'dagar',age:'Ålder',sex:'Kön',status:'Status',currentStage:'Nuvarande fas',breed:'Ras',weight:'Vikt',latestWeight:'Senaste vikt',noWeight:'Ingen vikt loggad',growth:'Tillväxt',growthText:'Logga vikt regelbundet för att bygga tillväxtkurva.',health:'Hälsa',noHealth:'Inga hälsologgar registrerade.',genetics:'Genetik',mother:'Mor',father:'Far',siblings:'Kullsyskon',unknownParent:'Okänd / ej registrerad',development:'Utveckling',assessment:'PoultryMaster bedömning',assessmentGood:'Kycklingen utvecklas utan registrerade varningssignaler.',assessmentObserve:'Följ upp kycklingen extra noggrant. Det finns hälso- eller statusnoteringar.',recommendation:'Rekommendation',recGood:'Fortsätt med normal tillsyn, värme, foder och regelbunden viktloggning.',recObserve:'Gör tätare kontroller och logga vikt/hälsa tills utvecklingen är stabil.',lifeBook:'Livsbok',timeline:'Tidslinje',hatched:'Kläcktes',registered:'Registrerad',fromEgg:'Från ägg',events:'händelser',moveFlock:'Till flock',logWeight:'Logga vikt',logHealth:'Logga hälsa',edit:'Redigera',delete:'Ta bort',empty:'Inga kycklingar ännu.',photoAlt:'Bild på kyckling',juvenile:'Kyckling',readySoon:'Växer vidare',inBrooder:'Startfas',notes:'Anteckningar'},
  en:{title:'Chicks',add:'+ Add',heroTitle:'Digital growth journal',heroText:'Follow each chick from hatch to flock: age, weight, health, development and life book.',unknown:'Unknown',alive:'Alive',moved:'Moved to flock',dead:'Dead',observe:'Watch',healthy:'Healthy',days:'days',age:'Age',sex:'Sex',status:'Status',currentStage:'Current stage',breed:'Breed',weight:'Weight',latestWeight:'Latest weight',noWeight:'No weight logged',growth:'Growth',growthText:'Log weight regularly to build a growth curve.',health:'Health',noHealth:'No health logs registered.',genetics:'Genetics',mother:'Mother',father:'Father',siblings:'Siblings',unknownParent:'Unknown / not registered',development:'Development',assessment:'PoultryMaster assessment',assessmentGood:'The chick is developing without registered warning signs.',assessmentObserve:'Follow this chick more closely. Health or status notes are registered.',recommendation:'Recommendation',recGood:'Continue normal supervision, warmth, feed and regular weight logging.',recObserve:'Check more often and log weight/health until development is stable.',lifeBook:'Life book',timeline:'Timeline',hatched:'Hatched',registered:'Registered',fromEgg:'From egg',events:'events',moveFlock:'Move to flock',logWeight:'Log weight',logHealth:'Log health',edit:'Edit',delete:'Delete',empty:'No chicks yet.',photoAlt:'Chick photo',juvenile:'Chick',readySoon:'Growing on',inBrooder:'Brooder stage',notes:'Notes'},
  da:{title:'Kyllinger',add:'+ Tilføj',heroTitle:'Digital opvækstjournal',heroText:'Følg hver kylling fra klækning til flok: alder, vægt, sundhed, udvikling og livsbog.',unknown:'Ukendt',alive:'Lever',moved:'Flyttet til flok',dead:'Død',observe:'Observeres',healthy:'Sund',days:'dage',age:'Alder',sex:'Køn',status:'Status',currentStage:'Nuværende fase',breed:'Race',weight:'Vægt',latestWeight:'Seneste vægt',noWeight:'Ingen vægt logget',growth:'Vækst',growthText:'Log vægt regelmæssigt for at opbygge vækstkurve.',health:'Sundhed',noHealth:'Ingen sundhedslogge registreret.',genetics:'Genetik',mother:'Mor',father:'Far',siblings:'Kuld-søskende',unknownParent:'Ukendt / ikke registreret',development:'Udvikling',assessment:'PoultryMaster vurdering',assessmentGood:'Kyllingen udvikler sig uden registrerede advarselstegn.',assessmentObserve:'Følg denne kylling ekstra nøje. Sundheds- eller statusnoter er registreret.',recommendation:'Anbefaling',recGood:'Fortsæt med normalt tilsyn, varme, foder og regelmæssig vægtlogning.',recObserve:'Kontrollér oftere og log vægt/sundhed indtil udviklingen er stabil.',lifeBook:'Livsbog',timeline:'Tidslinje',hatched:'Klækket',registered:'Registreret',fromEgg:'Fra æg',events:'hændelser',moveFlock:'Til flok',logWeight:'Log vægt',logHealth:'Log sundhed',edit:'Redigér',delete:'Slet',empty:'Ingen kyllinger endnu.',photoAlt:'Billede af kylling',juvenile:'Kylling',readySoon:'Vokser videre',inBrooder:'Startfase',notes:'Noter'},
  no:{title:'Kyllinger',add:'+ Legg til',heroTitle:'Digital oppvekstjournal',heroText:'Følg hver kylling fra klekking til flokk: alder, vekt, helse, utvikling og livsbok.',unknown:'Ukjent',alive:'Lever',moved:'Flyttet til flokk',dead:'Død',observe:'Observeres',healthy:'Frisk',days:'dager',age:'Alder',sex:'Kjønn',status:'Status',currentStage:'Nåværende fase',breed:'Rase',weight:'Vekt',latestWeight:'Siste vekt',noWeight:'Ingen vekt logget',growth:'Vekst',growthText:'Logg vekt regelmessig for å bygge vekstkurve.',health:'Helse',noHealth:'Ingen helselogger registrert.',genetics:'Genetikk',mother:'Mor',father:'Far',siblings:'Kullsøsken',unknownParent:'Ukjent / ikke registrert',development:'Utvikling',assessment:'PoultryMaster vurdering',assessmentGood:'Kyllingen utvikler seg uten registrerte varselsignaler.',assessmentObserve:'Følg denne kyllingen ekstra nøye. Helse- eller statusnotater er registrert.',recommendation:'Anbefaling',recGood:'Fortsett med normalt tilsyn, varme, fôr og regelmessig vektlogging.',recObserve:'Kontroller oftere og logg vekt/helse til utviklingen er stabil.',lifeBook:'Livsbok',timeline:'Tidslinje',hatched:'Klekket',registered:'Registrert',fromEgg:'Fra egg',events:'hendelser',moveFlock:'Til flokk',logWeight:'Logg vekt',logHealth:'Logg helse',edit:'Rediger',delete:'Slett',empty:'Ingen kyllinger ennå.',photoAlt:'Bilde av kylling',juvenile:'Kylling',readySoon:'Vokser videre',inBrooder:'Startfase',notes:'Notater'},
  fi:{title:'Poikaset',add:'+ Lisää',heroTitle:'Digitaalinen kasvupäiväkirja',heroText:'Seuraa jokaista poikasta kuoriutumisesta parveen: ikä, paino, terveys, kehitys ja elämänkirja.',unknown:'Tuntematon',alive:'Elossa',moved:'Siirretty parveen',dead:'Kuollut',observe:'Seurannassa',healthy:'Terve',days:'päivää',age:'Ikä',sex:'Sukupuoli',status:'Tila',currentStage:'Nykyinen vaihe',breed:'Rotu',weight:'Paino',latestWeight:'Viimeisin paino',noWeight:'Painoa ei ole kirjattu',growth:'Kasvu',growthText:'Kirjaa paino säännöllisesti kasvukäyrää varten.',health:'Terveys',noHealth:'Ei terveysmerkintöjä.',genetics:'Genetiikka',mother:'Emo',father:'Isä',siblings:'Sisarukset',unknownParent:'Tuntematon / ei rekisteröity',development:'Kehitys',assessment:'PoultryMaster-arvio',assessmentGood:'Poikanen kehittyy ilman rekisteröityjä varoitusmerkkejä.',assessmentObserve:'Seuraa poikasta tarkemmin. Terveys- tai tilamerkintöjä on rekisteröity.',recommendation:'Suositus',recGood:'Jatka normaalia valvontaa, lämpöä, ruokintaa ja säännöllistä painonseurantaa.',recObserve:'Tarkista useammin ja kirjaa paino/terveys, kunnes kehitys on vakaa.',lifeBook:'Elämänkirja',timeline:'Aikajana',hatched:'Kuoriutui',registered:'Rekisteröity',fromEgg:'Munasta',events:'tapahtumaa',moveFlock:'Parveen',logWeight:'Kirjaa paino',logHealth:'Kirjaa terveys',edit:'Muokkaa',delete:'Poista',empty:'Ei poikasia vielä.',photoAlt:'Poikasen kuva',juvenile:'Poikanen',readySoon:'Kasvaa eteenpäin',inBrooder:'Alkuvaihe',notes:'Muistiinpanot'}
 };
 const lg=(state.farmSettings&&state.farmSettings.language)||'sv'; const T=L[lg]||L.sv; const tr=k=>T[k]||L.sv[k]||k;
 const title=$('chicks-title-main'); if(title)title.textContent=tr('title');
 const addBtn=document.querySelector('#view-chicks .row .btn.primary'); if(addBtn)addBtn.textContent=tr('add');
 const list=$('chick-list'); if(!list)return;
 const statusText=s=>{let v=String(s||'').toLowerCase(); if(v.includes('flytt'))return tr('moved'); if(v.includes('död')||v.includes('dead'))return tr('dead'); if(!v||v.includes('lever')||v.includes('alive'))return tr('alive'); return s||tr('unknown')};
 const genderText=g=>{let v=String(g||'').toLowerCase(); if(v.includes('höna')||v.includes('hen'))return lg==='en'?'Hen':(lg==='fi'?'Kana':(lg==='da'?'Høne':(lg==='no'?'Høne':'Höna'))); if(v.includes('tupp')||v.includes('rooster'))return lg==='en'?'Rooster':(lg==='fi'?'Kukko':(lg==='da'?'Hane':(lg==='no'?'Hane':'Tupp'))); return tr('unknown')};
 const healthLogs=id=>(state.events||[]).filter(e=>String(e.targetId||'').toLowerCase()===String(id||'').toLowerCase()&&(e.type==='Hälsa'||e.type==='Sjukdom'));
 const weightLogs=id=>(state.events||[]).filter(e=>String(e.targetId||'').toLowerCase()===String(id||'').toLowerCase()&&e.type==='Vägning'&&e.weight).sort((a,b)=>String(a.date).localeCompare(String(b.date)));
 const siblings=c=>state.chicks.filter(x=>x.id!==c.id&&((x.eggId&&c.eggId&&x.eggId===c.eggId)||(x.hatchDate&&c.hatchDate&&x.hatchDate===c.hatchDate&&x.breed===c.breed))).length;
 const stage=age=>age<21?tr('inBrooder'):tr('readySoon');
 const growthPct=age=>Math.max(8,Math.min(100,Math.round(age/56*100)));
 const lifeCount=id=>{try{return lifeBookEvents(id).length}catch(e){return 0}};
 const card=c=>{
   const age=days(c.hatchDate); const weights=weightLogs(c.id); const lastW=weights[weights.length-1]; const prevW=weights[weights.length-2]; const diff=(lastW&&prevW)?Number(lastW.weight)-Number(prevW.weight):null; const h=healthLogs(c.id); const warn=h.length||String(c.status||'').toLowerCase().includes('observer'); const moved=String(c.status||'').toLowerCase().includes('flytt'); const dead=String(c.status||'').toLowerCase().includes('död'); const stClass=dead?'bad':(warn?'warn':''); const score=dead?0:(warn?70:95); const lcount=lifeCount(c.id); const img=c.image?`<img class="chick-photo" src="${esc(c.image)}" alt="${esc(tr('photoAlt'))}">`:`<div class="chick-photo">🐣</div>`;
   const tl=[`<div class="chick-timeline-item"><div class="chick-dot">🐣</div><div><div class="chick-t-title">${tr('hatched')}</div><div class="chick-t-meta">${esc(c.hatchDate||'')} · ${tr('fromEgg')} ${esc(c.eggId||c.id||'')}</div></div></div>`];
   if(lastW)tl.push(`<div class="chick-timeline-item"><div class="chick-dot">⚖️</div><div><div class="chick-t-title">${tr('latestWeight')}</div><div class="chick-t-meta">${esc(lastW.date||'')} · ${esc(lastW.weight)} g${diff!==null?` · ${diff>=0?'+':''}${esc(diff)} g`:''}</div></div></div>`);
   h.slice(-2).forEach(ev=>tl.push(`<div class="chick-timeline-item"><div class="chick-dot">🩺</div><div><div class="chick-t-title">${tr('health')}</div><div class="chick-t-meta">${esc(ev.date||'')} · ${esc(ev.notes||ev.type||'')}</div></div></div>`));
   if(moved)tl.push(`<div class="chick-timeline-item"><div class="chick-dot">🐓</div><div><div class="chick-t-title">${tr('moved')}</div><div class="chick-t-meta">${tr('lifeBook')} · ${lcount} ${tr('events')}</div></div></div>`);
   return `<div class="chick-card"><div class="chick-head">${img}<div><div class="chick-id">${esc(c.id)}</div><div class="chick-sub">${esc(c.breed||tr('unknown'))}${c.eggId?` · ${tr('fromEgg')} ${esc(c.eggId)}`:''}</div></div><span class="chick-status ${stClass}">${statusText(c.status)}</span></div><div class="chick-body"><div class="chick-kpi"><div><b>${age}</b><small>${tr('age')} · ${tr('days')}</small></div><div><b>${genderText(c.gender)}</b><small>${tr('sex')}</small></div><div><b>${lastW?esc(lastW.weight)+' g':'—'}</b><small>${tr('latestWeight')}</small></div><div><b>${lcount}</b><small>${tr('lifeBook')} · ${tr('events')}</small></div></div><div class="chick-section"><div class="chick-section-title">📈 ${tr('growth')}</div><div class="chick-progress"><div class="chick-progress-fill" style="width:${growthPct(age)}%"></div></div><p class="chick-note">${lastW?`${tr('latestWeight')}: ${esc(lastW.weight)} g · ${esc(lastW.date||'')}`:tr('growthText')}</p></div><div class="chick-section"><div class="chick-section-title">❤️ ${tr('health')}</div><div class="chick-chip-row"><span class="chick-chip ${warn?'warn':''}">${warn?tr('observe'):tr('healthy')}</span><span class="chick-chip">${h.length} ${tr('events')}</span></div><p class="chick-note">${h.length?esc(h[h.length-1].notes||h[h.length-1].type||''):tr('noHealth')}</p></div><div class="chick-section"><div class="chick-section-title">🧬 ${tr('genetics')}</div><p><b>${tr('mother')}:</b> ${esc(c.mother||tr('unknownParent'))}</p><p><b>${tr('father')}:</b> ${esc(c.father||tr('unknownParent'))}</p><p><b>${tr('siblings')}:</b> ${siblings(c)}</p></div><div class="chick-section"><div class="chick-section-title">🧠 ${tr('assessment')}</div><p><b>${tr('status')}:</b> ${score}%</p><p class="chick-note">${warn?tr('assessmentObserve'):tr('assessmentGood')}</p><p><b>${tr('recommendation')}:</b> <span class="muted">${warn?tr('recObserve'):tr('recGood')}</span></p></div><div class="chick-section"><div class="chick-section-title">📖 ${tr('timeline')}</div><div class="chick-timeline">${tl.join('')}</div></div>${c.notes?`<div class="chick-section"><div class="chick-section-title">📝 ${tr('notes')}</div><p class="chick-note">${esc(c.notes)}</p></div>`:''}<div class="chick-actions"><button class="btn small primary" data-action="quick-weight" data-id="${esc(c.id)}">⚖️ ${tr('logWeight')}</button><button class="btn small" data-action="quick-health" data-id="${esc(c.id)}">🩺 ${tr('logHealth')}</button><button class="btn small primary" data-action="move-flock" data-id="${esc(c.id)}">🐓 ${tr('moveFlock')}</button><button class="btn small life-book-btn" data-action="life-book" data-id="${esc(c.id)}">📖 ${tr('lifeBook')}</button><button class="btn small" data-action="edit" data-type="chick" data-id="${esc(c.id)}">${tr('edit')}</button><button class="btn small danger" data-action="del" data-type="chick" data-id="${esc(c.id)}">${tr('delete')}</button></div></div></div>`;
 };
 list.innerHTML=`<div class="chick-hero"><div class="chick-hero-title">🐣 ${tr('heroTitle')}</div><div class="chick-hero-text">${tr('heroText')}</div></div>`+((state.chicks||[]).map(card).join('')||`<div class="card"><div class="body">${tr('empty')}</div></div>`);
}function layingStatsFor(id){let key=String(id||'').toLowerCase();let logs=(state.laying||[]).filter(l=>String(l.henId||'').toLowerCase()===key);let eggs=logs.reduce((a,l)=>a+(+l.count||0),0);let w=logs.reduce((a,l)=>a+(+l.totalWeight||0),0);let c=logs.reduce((a,l)=>a+((+l.totalWeight||0)>0?(+l.count||0):0),0);let avg=c?w/c:0;let breed=logs.filter(l=>l.breedingEgg===true||l.breedingEgg==='on').length;return{eggs,avg,breed,logs}}
function healthInfo(id){let key=String(id||'').toLowerCase();let arr=(state.events||[]).filter(e=>(e.type==='Hälsa'||e.type==='Sjukdom')&&String(e.targetId||'').toLowerCase()===key).sort((a,b)=>String(a.date).localeCompare(String(b.date)));let h=arr[arr.length-1];return h?`<p><b>Senaste hälsa:</b> ${esc(h.notes||h.type)}<br><small>${esc(h.date)}</small></p>`:'<p><b>Senaste hälsa:</b> Ej loggad</p>'}
function individualStats(id){let key=String(id||'').toLowerCase(),logs=(state.laying||[]).filter(l=>String(l.henId||'').toLowerCase()===key),now=today(),d30=addDays(now,-30);logs=logs.slice().sort((a,b)=>String(logStart(a)).localeCompare(String(logStart(b))));let total=logs.reduce((a,l)=>a+(+l.count||0),0);let last30=logs.reduce((a,l)=>a+eggsInRange(l,d30,now),0);let weights=logs.filter(l=>(+l.totalWeight||0)>0&&(+l.count||0)>0);let weightSum=weights.reduce((a,l)=>a+(+l.totalWeight||0),0),weightCount=weights.reduce((a,l)=>a+(+l.count||0),0),avg=weightCount?weightSum/weightCount:0;let biggest=logs.reduce((m,l)=>Math.max(m,(+l.count||0)>0&&(+l.totalWeight||0)>0?(+l.totalWeight)/(+l.count):0),0);let doubleYolks=logs.filter(l=>l.doubleYolk===true||l.doubleYolk==='on').length;let breeding=logs.filter(l=>l.breedingEgg===true||l.breedingEgg==='on').length;let qs=logs.map(l=>parseInt(String(l.shellQuality||'').slice(0,1))).filter(Boolean);let q=qs.length?qs.reduce((a,b)=>a+b,0)/qs.length:0;let firstDate=logs[0]?logStart(logs[0]):now;let weeks=Math.max(1,Math.ceil((dateOnly(now)-dateOnly(firstDate))/604800000));let perWeek=total/weeks;let prod=Math.min(35,Math.round(total/250*35));let weight=avg?Math.min(25,Math.round(avg/70*25)):0;let shell=qs.length?Math.min(25,Math.round(q/5*25)):0;let breed=Math.min(15,Math.round(breeding*3));let penalty=Math.round(doubleYolks*2);let score=Math.max(0,Math.min(100,prod+weight+shell+breed-penalty));return{logs,total,last30,avg,biggest,doubleYolks,breeding,q,perWeek,score,prod,weight,shell,breed,penalty,shellCount:qs.length}}function individualRecommendation(f,st){let status=f.breedingStatus||'Ej bedömd';if(!st.logs.length)return`<div class="empty">Ingen rekommendation ännu. Poängen börjar på 0 och byggs upp först när värpning, äggvikt och skalkvalitet loggas.</div>`;let verdict='Fortsätt samla data';if(st.logs.length>=30&&st.score>=80)verdict='Behåll starkt för avel';else if(st.logs.length>=15&&st.score>=65)verdict='Kandidat för avel';else if(st.logs.length>=10&&st.score<40)verdict='Svag avelskandidat just nu';let reasons=[];if(st.total)reasons.push(`${st.total} registrerade ägg`);if(st.avg)reasons.push(`${st.avg.toFixed(1)} g medelvikt`);if(st.shellCount)reasons.push(`${st.q.toFixed(1)}/5 skalkvalitet`);if(st.breeding)reasons.push(`${st.breeding} sparade avelsägg`);return`<p><b>⭐ Rekommendation:</b> ${esc(verdict)}</p><p><b>Avelsstatus:</b> ${esc(status)}</p><p class="muted">${esc(reasons.join(' · ')||'För lite data ännu')}</p>`}
function scoreBreakdown(st){let total=st.score,pct=Math.max(0,Math.min(100,total));return`<p><b>🧬 Avelsindex:</b> ${total} / 100</p><div class="scorebar"><div class="scorefill" style="width:${pct}%"></div></div><div class="two" style="margin-top:12px"><div><b>${st.prod}</b><br>Produktion</div><div><b>${st.weight}</b><br>Äggvikt</div><div><b>${st.shell}</b><br>Skalkvalitet</div><div><b>${st.breed}</b><br>Avelsägg</div></div>${st.penalty?`<p class="muted">Minus ${st.penalty} p för dubbelgulor.</p>`:''}<p class="muted">Poäng ges bara för registrerad data. Ny individ börjar därför på 0/100.</p>`}
function descendantsOf(id){let key=String(id||'').toLowerCase();let birds=(state.flock||[]).filter(f=>String(f.mother||'').toLowerCase()===key||String(f.father||'').toLowerCase()===key).map(f=>f.name);let chicks=(state.chicks||[]).filter(c=>String(c.mother||'').toLowerCase()===key||String(c.father||'').toLowerCase()===key).map(c=>c.id);return[...new Set([...birds,...chicks])]}
function pedigreeTree(f){let kids=descendantsOf(f.name);let mother=f.mother||'-',father=f.father||'-';let kidHtml=kids.length?kids.map(k=>`<span class="pill" style="margin:3px">${esc(k)}</span>`).join(''):'<span class="muted">Inga registrerade ännu</span>';return`<div style="background:#f6faf3;border:1px solid var(--line);border-radius:18px;padding:14px;margin:8px 0"><div><b>Mor:</b> ${esc(mother)}</div><div><b>Far:</b> ${esc(father)}</div><div style="border-left:4px solid var(--accent);margin:12px 0;padding:8px 0 8px 12px"><b>${esc(f.name)}</b><br><span class="muted">${esc(f.breed||'Okänd ras')} · ${esc(f.gender||'Okänt kön')}</span></div><div><b>Avkommor:</b><br>${kidHtml}</div></div>`}
function timelineFor(f){let id=f.name,items=[];if(f.hatchDate)items.push({date:f.hatchDate,text:'Kläcktes/föddes'});if(f.ringed==='Ja'||f.ringNumber)items.push({date:f.hatchDate||today(),text:'Ringmärkt'+(f.ringNumber?' #'+f.ringNumber:'')});(state.events||[]).filter(e=>String(e.targetId||'').toLowerCase()===String(id||'').toLowerCase()).forEach(e=>items.push({date:e.date,text:e.type+(e.notes?' – '+e.notes:'')}));let first=(state.laying||[]).filter(l=>String(l.henId||'').toLowerCase()===String(id||'').toLowerCase()).sort((a,b)=>String(logStart(a)).localeCompare(String(logStart(b))))[0];if(first)items.push({date:logStart(first),text:'Första registrerade ägget'});items.sort((a,b)=>String(a.date).localeCompare(String(b.date)));return items.slice(-6)}
function flock(){
  let statsBox=document.querySelector('#view-flock .body.two');
  if(statsBox){
    statsBox.innerHTML=`<div><b id="f-total">0</b><br>${t('total')}</div><div><b id="f-hens">0</b><br>${t('hens')}</div><div><b id="f-roosters">0</b><br>${t('roosters')}</div><div><b id="f-unknown">0</b><br>${t('unknown')}</div>`;
  }
  const title=$('flock-title-main');
  if(title)title.textContent=flockTitle();
  const addBtn=document.querySelector('#view-flock [data-action="add"][data-type="flock"]');
  if(addBtn)addBtn.textContent='+ '+t('add');

  let activeFlock=state.flock.filter(f=>f.status==='Aktiv');
  $('f-total').textContent=activeFlock.length;
  $('f-hens').textContent=activeFlock.filter(f=>f.gender==='Höna').length;
  $('f-roosters').textContent=activeFlock.filter(f=>f.gender==='Tupp').length;
  $('f-unknown').textContent=activeFlock.filter(f=>f.gender==='Okänt').length;

  $('flock-list').innerHTML=state.flock.map(f=>{
    let s=individualStats(f.name);
    let ring=f.ringNumber?`<p><b>${t('ringNumber')}:</b> ${esc(f.ringNumber)}</p>`:'';
    let parent=(f.mother||f.father)?`<p><b>${t('parents')}:</b> ${esc(f.mother||'-')} / ${esc(f.father||'-')}</p>`:'';
    let kids=descendantsOf(f.name);
    let timeline=timelineFor(f);
    return `<div class="card"><h3>🐓 ${esc(f.name)} <span class="pill">${esc(tv(f.status))}</span></h3><div class="body">${f.image ? `<img src="${f.image}" style="width:120px;height:120px;object-fit:cover;border-radius:12px;margin-bottom:12px;">` : ''}<p><b>${t('breed')}:</b> ${esc(f.breed)}</p><p><b>${t('sex')}:</b> ${esc(tv(f.gender))}</p>${ring}${parent}<p><b>${t('breedingStatus')}:</b> ${esc(f.breedingStatus||t('notAssessed'))}</p>${weightInfo(f.name)}${healthInfo(f.name)}<h3 style="padding:14px 0 8px;border:0">📈 ${t('production')}</h3><div class="two"><div><b>${s.total}</b><br>${t('eggsTotal')}</div><div><b>${s.last30}</b><br>${t('last30Days')}</div><div><b>${s.perWeek?s.perWeek.toFixed(1):'-'}</b><br>${t('avgWeek')}</div><div><b>${s.avg?s.avg.toFixed(1)+' g':'-'}</b><br>${t('avgWeight')}</div><div><b>${s.biggest?s.biggest.toFixed(1)+' g':'-'}</b><br>${t('biggestEgg')}</div><div><b>${s.doubleYolks}</b><br>${t('doubleYolks')}</div></div><h3 style="padding:14px 0 8px;border:0">🧬 ${t('breeding')}</h3>${scoreBreakdown(s)}${individualRecommendation(f,s)}<p><b>${t('savedBreedingEggs')}:</b> ${s.breeding}</p><h3 style="padding:14px 0 8px;border:0">🌳 ${t('pedigree')}</h3>${pedigreeTree(f)}<h3 style="padding:14px 0 8px;border:0">🐣 ${t('offspring')}</h3>${kids.length?kids.map(k=>`<span class="pill" style="margin:3px">${esc(k)}</span>`).join(''):`<div class="empty">${t('noOffspring')}</div>`}<h3 style="padding:14px 0 8px;border:0">📅 ${t('lifeline')}</h3>${timeline.length?timeline.map(ti=>`<div class="rank"><span><b>${esc(ti.date)}</b><br>${esc(ti.text)}</span></div>`).join(''):`<div class="empty">${t('noLifeline')}</div>`}<div class="actions"><button class="btn small life-book-btn" data-action="life-book" data-id="${esc(f.name)}">📖 ${t('lifeBook')}</button><button class="btn small primary" data-action="quick-weight" data-id="${esc(f.name)}">⚖️ ${t('logWeight')}</button><button class="btn small primary" data-action="quick-health" data-id="${esc(f.name)}">🩺 ${t('logHealth')}</button><button class="btn small" data-action="edit" data-type="flock" data-id="${esc(f.id)}">${t('edit')}</button><button class="btn small danger" data-action="del" data-type="flock" data-id="${esc(f.id)}">${t('delete')}</button></div></div></div>`;
  }).join('')||`<div class="card"><div class="body">${t('flockEmpty')}</div></div>`;
}
function laying(){
  let logs=state.laying||[],td=today();
  let sum=(from)=>logs.reduce((a,l)=>a+eggsInRange(l,from,td),0);
  let d7=addDays(td,-7),d30=addDays(td,-30);
  let by={}; logs.forEach(l=>{by[l.henId]=(by[l.henId]||0)+(+l.count||0)});
  let best=Object.entries(by).sort((a,b)=>b[1]-a[1])[0];
  let avgLogs=logs.filter(l=>(+l.count||0)>0&&(+l.totalWeight||0)>0);
  let avgAll=avgLogs.length?(avgLogs.reduce((a,l)=>a+(+l.totalWeight||0),0)/avgLogs.reduce((a,l)=>a+(+l.count||0),0)).toFixed(1):'-';
  let breeding=logs.filter(l=>l.breedingEgg==='on'||l.breedingEgg===true).length;
  let doubleYolks=logs.filter(l=>l.doubleYolk==='on'||l.doubleYolk===true).length;
  $('laying-summary').innerHTML=`<div><b>${fmtNum(logs.reduce((a,l)=>a+eggsInRange(l,td,td),0))}</b><br>${t('eggsToday')}</div><div><b>${fmtNum(sum(d7))}</b><br>${t('last7Days')}</div><div><b>${fmtNum(sum(d30))}</b><br>${t('last30Days')}</div><div><b>${best?esc(best[0])+' ('+best[1]+')':'-'}</b><br>${t('bestHen')}</div><div><b>${avgAll}${avgAll==='-'?'':' g'}</b><br>${t('averageWeight')}</div><div><b>${breeding}</b><br>${t('breedingEggs')}</div><div><b>${doubleYolks}</b><br>${t('doubleYolks')}</div>`;
  $('laying-list').innerHTML=logs.slice().sort((a,b)=>String(logEnd(b)).localeCompare(String(logEnd(a)))).map(l=>{
    let avg=(+l.count||0)>0&&(+l.totalWeight||0)>0?((+l.totalWeight)/(+l.count)).toFixed(1)+' g':'-';
    let breed=(l.breedingEgg==='on'||l.breedingEgg===true)?t('yes'):t('no');
    let dbl=(l.doubleYolk==='on'||l.doubleYolk===true)?t('yes'):t('no');
    let pd=periodDays(l);
    let period=logStart(l)===logEnd(l)?esc(logStart(l)):`${esc(logStart(l))} → ${esc(logEnd(l))}`;
    let perDay=pd>1?`<p><b>${t('productionPeriod')}:</b> ${pd} ${t('daysLabel')} (${fmtNum((+l.count||0)/pd)} ${t('eggsPerDay')})</p>`:'';
    return `<div class="card"><h3>🥚 ${esc(l.henId||t('flock'))} <span class="pill">${esc(l.count||0)} ${t('pieces')}</span></h3><div class="body"><p><b>${t('registeredPicked')}:</b> ${esc(l.date)}</p><p><b>${t('laidPeriod')}:</b> ${period}</p>${perDay}<p><b>${t('totalEggWeight')}:</b> ${l.totalWeight?esc(l.totalWeight)+' g':'-'}</p><p><b>${t('averageWeight')}:</b> ${avg}</p><p><b>${t('shellQuality')}:</b> ${esc(l.shellQuality||'-')}</p><p><b>${t('eggColor')}:</b> ${esc(l.eggColor||'-')}</p><p><b>${t('doubleYolk')}:</b> ${dbl}</p><p><b>${t('breedingEggs')}:</b> ${breed}</p><p>${esc(l.notes||'')}</p><div class="actions"><button class="btn small" data-action="edit" data-type="laying" data-id="${esc(l.id)}">${t('edit')}</button><button class="btn small danger" data-action="del" data-type="laying" data-id="${esc(l.id)}">${t('delete')}</button></div></div></div>`
  }).join('')||`<div class="card"><div class="body">${t('noLayingLogs')}</div></div>`;
}
function hatchOutcome(e){let key=String(e.id||'').toLowerCase();let logs=(state.candling||[]).filter(c=>String(c.eggId||'').toLowerCase()===key);let hasBlood=logs.some(c=>c.result==='Blodring');let hasDead=logs.some(c=>c.result==='Dött embryo');let status=e.status||'';if(status==='Kläckt')return'Kläckt';if(status==='Inkuberas')return'Aktiv';if(status==='Osäkert')return'Osäker';if(status==='Obefruktat')return'Obefruktat';if(status==='Kasserat')return'Kasserat';if(status==='Dött embryo'||hasDead)return'Dött embryo';if(hasBlood)return'Blodring';return status||'Okänd'}function hatchLossDay(e){let key=String(e.id||'').toLowerCase();let logs=(state.candling||[]).filter(c=>String(c.eggId||'').toLowerCase()===key&&['Obefruktat','Dött embryo','Blodring'].includes(c.result));let eggDay=days(e.dateSet);if(logs.length){let best=logs.slice().sort((a,b)=>(+b.day||eggDay)-(+a.day||eggDay))[0];return +best.day||eggDay}return eggDay}function hatchGroupStats(items){let total=items.length;let active=items.filter(e=>hatchOutcome(e)==='Aktiv').length;let hatched=items.filter(e=>hatchOutcome(e)==='Kläckt').length;let uncertain=items.filter(e=>hatchOutcome(e)==='Osäker').length;let infertile=items.filter(e=>hatchOutcome(e)==='Obefruktat').length;let blood=items.filter(e=>hatchOutcome(e)==='Blodring').length;let dead=items.filter(e=>hatchOutcome(e)==='Dött embryo').length;let discarded=items.filter(e=>hatchOutcome(e)==='Kasserat').length;let stopped=infertile+blood+dead+discarded;let survival=total?Math.round((active+hatched)/total*100):0;return{total,active,hatched,uncertain,infertile,blood,dead,discarded,stopped,survival}}function batchEggs(batch){let id=batch.id;return (state.eggs||[]).filter(e=>e.batchId===id || (!e.batchId&&batch.legacyStart&&e.dateSet===batch.legacyStart))}function inferredBatches(){let manual=(state.batches||[]).map(b=>({...b,legacyStart:null,manual:true}));let used=new Set(manual.map(b=>b.startDate));let legacy={};(state.eggs||[]).forEach(e=>{if(!e.batchId){let d=e.dateSet||'Okänt datum';(legacy[d]=legacy[d]||[]).push(e)}});let inferred=Object.keys(legacy).filter(d=>!used.has(d)).map((d,i)=>({id:'legacy-'+d,name:'Omgång start '+d,startDate:d,legacyStart:d,incubatorId:legacy[d][0]?.incubatorId||'',status:legacy[d].some(e=>e.status==='Inkuberas')?'Aktiv':'Arkiverad',notes:'Automatiskt grupperad från äggens startdatum',manual:false}));return [...manual,...inferred].sort((a,b)=>String(b.startDate||'').localeCompare(String(a.startDate||'')))}function batchCard(b,idx){let eggs=batchEggs(b),x=hatchGroupStats(eggs),day=eggs.length?Math.max(...eggs.map(e=>days(e.dateSet))):0,p=x.total?x.survival:0;let breeds=[...new Set(eggs.map(e=>e.breed).filter(Boolean))].slice(0,3).join(', ')||'Inga ägg ännu';let inc=b.incubatorId?incName(b.incubatorId):(eggs[0]?.incubatorId?incName(eggs[0].incubatorId):'Ingen kläckare');return `<div class="batch-card"><div class="batch-head"><div><div class="batch-title">${esc(b.name||('Omgång #'+(idx+1)))} ${b.status?`<span class="pill">${esc(b.status)}</span>`:''}</div><div class="batch-meta">📅 Start: ${esc(b.startDate||'-')} · ${eggs.length?`Dag ${day} av ${state.settings.incubationDays}`:'Inga ägg'}<br>🏠 Kläckare: ${esc(inc)}<br>🐓 Raser: ${esc(breeds)}</div></div><span class="pill">${p}%</span></div><div class="progress"><div class="bar" style="width:${p}%"></div></div><div class="batch-stats"><div><b>${x.total}</b><small>Startade</small></div><div><b>${x.active}</b><small>Aktiva</small></div><div><b>${x.stopped}</b><small>Avbrutna</small></div><div><b>${x.hatched}</b><small>Kläckta</small></div></div><div class="actions">${b.manual?`<button class="btn small" data-action="edit" data-type="batch" data-id="${esc(b.id)}">Redigera</button><button class="btn small danger" data-action="del" data-type="batch" data-id="${esc(b.id)}">Ta bort</button>`:`<button class="btn small primary" data-action="create-batch-from-date" data-date="${esc(b.legacyStart)}">⚙️ Hantera omgång</button>`}</div></div>`}function batchOverviewHtml(){let batches=inferredBatches(),active=batches.filter(b=>b.status==='Aktiv'||batchEggs(b).some(e=>e.status==='Inkuberas')),finished=batches.filter(b=>!active.includes(b));let activeHtml=active.length?active.map(batchCard).join(''):'<div class="empty">Inga aktiva omgångar ännu.</div>';let oldHtml=finished.length?finished.map(batchCard).join(''):'<div class="empty">Inga avslutade omgångar ännu.</div>';return `<div class="card"><h3>🐣 Kläckomgångar</h3><div class="body"><div class="analysis-kpi"><div><b>${batches.length}</b><small>Totalt omgångar</small></div><div><b>${active.length}</b><small>Aktiva omgångar</small></div><div><b>${finished.length}</b><small>Avslutade omgångar</small></div><div><b>${(state.batches||[]).length}</b><small>Manuella</small></div></div><button class="btn primary" data-action="add" data-type="batch">+ Ny omgång</button><p class="muted">Tips: skapa en omgång och välj den när du registrerar ägg. Gamla ägg utan omgång grupperas automatiskt efter startdatum.</p></div></div><h3 style="margin:18px 4px 8px">Aktiva omgångar</h3>${activeHtml}<h3 style="margin:18px 4px 8px">Avslutade omgångar</h3>${oldHtml}`}
function hatchHistoryHtml(){let eggs=state.eggs||[];if(!eggs.length)return`<div class="card"><h3>🐣 Kläckanalys</h3><div class="body"><div class="empty">Ingen kläckhistorik ännu. Lägg in ägg först.</div></div></div>`;let g=hatchGroupStats(eggs);let stage1=0,stage2=0,stage3=0;eggs.forEach(e=>{let o=hatchOutcome(e);if(['Obefruktat','Blodring','Dött embryo','Kasserat'].includes(o)){let d=hatchLossDay(e);if(d<=8)stage1++;else if(d<=14)stage2++;else stage3++}});let byBreed={},byInc={},byStart={};eggs.forEach(e=>{let b=e.breed||'Okänd ras',i=incName(e.incubatorId)||'Okänd kläckare',st=e.dateSet||'Okänt datum';(byBreed[b]=byBreed[b]||[]).push(e);(byInc[i]=byInc[i]||[]).push(e);(byStart[st]=byStart[st]||[]).push(e)});let row=(name,arr)=>{let x=hatchGroupStats(arr),p=x.total?x.survival:0;return`<div class="minirow"><div><b>${esc(name)}</b><div class="scorebar"><div class="scorefill" style="width:${p}%"></div></div><small class="muted">Startade: ${x.total} · Aktiva: ${x.active} · Kläckta: ${x.hatched} · Avbrutna: ${x.stopped}</small></div><span class="pill">${p}%</span></div>`};let breeds=Object.entries(byBreed).sort((a,b)=>b[1].length-a[1].length).map(([k,v])=>row(k,v)).join('');let incs=Object.entries(byInc).sort((a,b)=>b[1].length-a[1].length).map(([k,v])=>row(k,v)).join('');let batches=Object.entries(byStart).sort((a,b)=>String(a[0]).localeCompare(String(b[0]))).map(([date,arr],idx)=>{let x=hatchGroupStats(arr);return`<div class="history-batch"><h4>Omgång #${idx+1} · Start ${esc(date)}</h4><div class="two"><div><b>${x.total}</b><br>Startade</div><div><b>${x.active}</b><br>Aktiva</div><div><b>${x.stopped}</b><br>Avbrutna</div><div><b>${x.hatched}</b><br>Kläckta</div></div><p><span class="pill">Överlevnadsgrad: ${x.survival}%</span></p></div>`}).join('');return`<div class="card"><h3>🐣 Kläckanalys & historik</h3><div class="body"><div class="analysis-kpi"><div><b>${g.total}</b><small>Totalt inkuberade</small></div><div><b>${g.survival}%</b><small>Överlevnadsgrad</small></div><div><b>${g.active}</b><small>Aktiva just nu</small></div><div><b>${g.stopped}</b><small>Avbrutna</small></div></div><div class="status-strip"><span class="status-chip">🟢 Aktiva: ${g.active}</span>${g.uncertain?`<span class="status-chip warn">🟡 Osäkra: ${g.uncertain}</span>`:''}<span class="status-chip bad">🔴 Avbrutna: ${g.stopped}</span><span class="status-chip survival">🐣 Kläckta: ${g.hatched}</span></div></div></div><div class="card"><h3>Förluster per stadium</h3><div class="body stage-list"><div class="rank"><span><b>Före / omkring dag 8</b><br>${stage1} ägg</span></div><div class="rank"><span><b>Dag 8–14</b><br>${stage2} ägg</span></div><div class="rank"><span><b>Dag 14–21</b><br>${stage3} ägg</span></div><p class="muted">Beräknas från status och lysningsloggar. Ju mer du loggar vid lysning, desto bättre blir analysen.</p></div></div><div class="card"><h3>Statistik per ras</h3><div class="body analysis-bars">${breeds}</div></div><div class="card"><h3>Statistik per kläckare</h3><div class="body analysis-bars">${incs}</div></div><div class="card"><h3>Omgångshistorik</h3><div class="body">${batches}</div></div>`}function stats(){let total=state.eggs.length,hat=state.eggs.filter(e=>e.status==='Kläckt').length,dead=state.eggs.filter(e=>e.status==='Dött embryo').length,inf=state.eggs.filter(e=>e.status==='Obefruktat').length;let logs=state.laying||[];let eggBy={},weightBy={},countBy={},breedingBy={},qualityBy={},doubleBy={};logs.forEach(l=>{let id=l.henId||'Okänd';eggBy[id]=(eggBy[id]||0)+(+l.count||0);if((+l.totalWeight||0)>0&&(+l.count||0)>0){weightBy[id]=(weightBy[id]||0)+(+l.totalWeight||0);countBy[id]=(countBy[id]||0)+(+l.count||0)}let q=parseInt(String(l.shellQuality||'').slice(0,1));if(q){qualityBy[id]=qualityBy[id]||[];qualityBy[id].push(q)}if(l.breedingEgg==='on'||l.breedingEgg===true)breedingBy[id]=(breedingBy[id]||0)+1;if(l.doubleYolk==='on'||l.doubleYolk===true)doubleBy[id]=(doubleBy[id]||0)+1});let ids=[...new Set([...Object.keys(eggBy),...Object.keys(weightBy),...Object.keys(breedingBy)])];let topLayers=Object.entries(eggBy).sort((a,b)=>b[1]-a[1]).slice(0,5);let topAvg=Object.keys(weightBy).map(id=>[id,(weightBy[id]/countBy[id])]).sort((a,b)=>b[1]-a[1]).slice(0,5);let breeders=Object.keys(breedingBy).sort();let maxEggs=Math.max(1,...Object.values(eggBy));let maxAvg=Math.max(1,...topAvg.map(x=>x[1]));let barList=(arr,fmt,val,max)=>arr.length?arr.map(x=>`<div class="minirow"><div><b>${fmt(x)}</b><div class="scorebar"><div class="scorefill" style="width:${Math.min(100,(val(x)/max)*100)}%"></div></div></div><span class="pill">${val(x)}</span></div>`).join(''):'<div class="empty">Ingen data ännu.</div>';let candidates=ids.map(id=>{let eggs=eggBy[id]||0,avg=countBy[id]?weightBy[id]/countBy[id]:0,q=qualityBy[id]?.length?qualityBy[id].reduce((a,b)=>a+b,0)/qualityBy[id].length:0,breed=breedingBy[id]||0,dbl=doubleBy[id]||0;let prod=Math.min(35,Math.round(eggs/250*35)),weight=avg?Math.min(25,Math.round(avg/70*25)):0,shell=qualityBy[id]?.length?Math.min(25,Math.round(q/5*25)):0,breedPts=Math.min(15,Math.round(breed*3)),penalty=Math.round(dbl*2);let score=Math.max(0,Math.min(100,prod+weight+shell+breedPts-penalty));return{id,eggs,avg,q,breed,dbl,score}}).sort((a,b)=>b.score-a.score).slice(0,8);let rank=(arr,fmt)=>arr.length?arr.map((x,i)=>`<div class="rank"><span>${i+1}. ${fmt(x)}</span></div>`).join(''):'<div class="empty">Ingen data ännu.</div>';
let cand=(state.candling||[]).filter(c=>c.result);let riskDays=cand.filter(c=>+c.day>=5&&+c.day<=8);let deadRisk=riskDays.filter(c=>c.result==='Dött embryo'||c.result==='Blodring').length;let riskPct=riskDays.length?Math.round(deadRisk/riskDays.length*100):0;let humidityNote=riskDays.length&&riskPct>=30?'⚠️ Hög andel döda embryon dag 5–8. Kontrollera luftfuktighet, temperaturstabilitet, äggkvalitet och hur ofta maskinen öppnas.':'✅ Ingen tydlig varning kring tidig embryodöd ännu.';let unfertPct=total?Math.round(inf/total*100):0;let hatchPct=(hat+dead+inf)>0?Math.round(hat/(hat+dead+inf)*100):0;let hatchAnalysis=`<p><b>Tidig embryodöd dag 5–8:</b> ${riskDays.length?riskPct+' %':'Ingen data ännu'}</p><p><b>Obefruktade:</b> ${total?unfertPct+' %':'Ingen data ännu'}</p><p><b>Kläckprocent av bedömda ägg:</b> ${hat+dead+inf?hatchPct+' %':'Ingen data ännu'}</p><p>${humidityNote}</p>`;
let bestRec=candidates[0];let recText=bestRec?`<p><b>${esc(bestRec.id)}</b> rekommenderas just nu som starkaste avelskandidat.</p><p>${esc(bestRec.id)} har ${bestRec.eggs} registrerade ägg, medelvikt ${bestRec.avg?bestRec.avg.toFixed(1)+' g':'saknas'}, skalkvalitet ${bestRec.q.toFixed(1)}/5 och ${bestRec.breed} markerade avelsägg.</p><p class="muted">Rekommendationen blir säkrare först när varje höna har minst 30–50 registrerade ägg.</p>`:'<div class="empty">Ingen avelsrekommendation ännu. Logga värpning, vikt och skalkvalitet per individ först.</div>';
let hatchSection=`<div class="stats-section-title">🐣 Kläckning</div>`+batchOverviewHtml()+hatchHistoryHtml()+`<div class="card"><h3>Kläckning</h3><div class="body"><p>Totalt ägg: <b>${total}</b></p><p>Kläckta: <b>${hat}</b></p><p>Obefruktade: <b>${inf}</b></p><p>Döda embryon: <b>${dead}</b></p><p>Kycklingar: <b>${state.chicks.length}</b></p><p>Flock: <b>${state.flock.length}</b></p></div></div><div class="card"><h3>🧪 Kläckningsanalys</h3><div class="body">${hatchAnalysis}</div></div>`;
let layingSection=`<div class="stats-section-title">🥚 Värpning</div><div class="card"><h3>📊 Äggproduktion - graf</h3><div class="body">${barList(topLayers,x=>esc(x[0])+' – '+x[1]+' ägg',x=>x[1],maxEggs)}</div></div><div class="card"><h3>⚖️ Medelvikt - graf</h3><div class="body">${barList(topAvg,x=>esc(x[0])+' – '+x[1].toFixed(1)+' g',x=>x[1].toFixed(1),maxAvg)}</div></div><div class="card"><h3>🏆 Topplista: bästa värpare</h3><div class="body">${rank(topLayers,x=>esc(x[0])+' <b>'+x[1]+'</b> ägg')}</div></div><div class="card"><h3>🥚 Topplista: största medelägg</h3><div class="body">${rank(topAvg,x=>esc(x[0])+' <b>'+x[1].toFixed(1)+' g</b>')}</div></div>`;
let avelSection=`<div class="stats-section-title">🧬 Avel</div><div class="card"><h3>🎯 Avelsrekommendation</h3><div class="body">${recText}</div></div><div class="card"><h3>🧬 Avelsindex</h3><div class="body"><p class="muted">Index väger ihop antal ägg, medelvikt, skalkvalitet och markerade avelsägg. Poängen måste förtjänas via registrerad data och är ett urvalsverktyg, inte en absolut sanning.</p>${rank(candidates,x=>esc(x.id)+' <span class="pill">Index '+x.score+'</span><br><small>'+x.eggs+' ägg · '+(x.avg?x.avg.toFixed(1)+' g':'-')+' · skal '+x.q.toFixed(1)+'</small>')}</div></div><div class="card"><h3>Avelskandidater</h3><div class="body">${breeders.length?breeders.map(id=>`<div>${esc(id)} <span class="pill">${breedingBy[id]} avelsägg</span></div>`).join(''):'<div class="empty">Inga avelsägg markerade ännu.</div>'}</div></div>`;
let weightEvents=(state.events||[]).filter(e=>e.type==='Vägning');let healthEvents=(state.events||[]).filter(e=>e.type==='Hälsa'||e.type==='Sjukdom');let recentHealth=[...healthEvents].sort((a,b)=>String(b.date).localeCompare(String(a.date))).slice(0,6);let recentWeight=[...weightEvents].sort((a,b)=>String(b.date).localeCompare(String(a.date))).slice(0,6);let weightHealthSection=`<div class="stats-section-title">⚖️ Registrera vikt / hälsa</div><div class="card"><h3>Sammanfattning</h3><div class="body"><div class="stats-mini-grid"><div class="stats-mini-box"><b>${weightEvents.length}</b><br>Viktloggar</div><div class="stats-mini-box"><b>${healthEvents.length}</b><br>Hälsologgar</div></div><p class="muted">Den här fliken blir mer värdefull när kycklingar och flock börjar loggas löpande.</p></div></div><div class="card"><h3>⚖️ Senaste viktloggar</h3><div class="body">${recentWeight.length?recentWeight.map(e=>`<div class="rank"><span><b>${esc(e.date)}</b> · ${esc(e.targetId||'-')}<br>${esc(e.weight||'-')} g ${e.notes?`· ${esc(e.notes)}`:''}</span></div>`).join(''):'<div class="empty">Inga viktloggar ännu.</div>'}</div></div><div class="card"><h3>🩺 Senaste hälsologgar</h3><div class="body">${recentHealth.length?recentHealth.map(e=>`<div class="rank"><span><b>${esc(e.date)}</b> · ${esc(e.targetId||'-')}<br>${esc(e.notes||e.type)}</span></div>`).join(''):'<div class="empty">Inga hälsologgar ännu.</div>'}</div></div>`;
let biggestEggLog=logs.filter(l=>(+l.count||0)>0&&(+l.totalWeight||0)>0).map(l=>({id:l.henId||'Okänd',date:l.date||'',avg:(+l.totalWeight)/(+l.count),count:(+l.count||0),total:(+l.totalWeight||0)})).sort((a,b)=>b.avg-a.avg)[0];let bestLayer=topLayers[0];let bestBreeder=candidates[0];let hatchRounds=Object.entries((state.eggs||[]).reduce((a,e)=>{let k=e.dateSet||'Okänt datum';(a[k]=a[k]||[]).push(e);return a},{})).map(([date,arr])=>({date,stats:hatchGroupStats(arr)})).filter(r=>r.stats.total>0).sort((a,b)=>b.stats.survival-a.stats.survival||b.stats.hatched-a.stats.hatched);let bestHatch=hatchRounds[0];let legends=(state.flock||[]).filter(f=>String(f.breedingStatus||'').includes('Legend')||String(f.notes||'').toLowerCase().includes('legend'));let hofEmpty=(!biggestEggLog&&!bestLayer&&!bestBreeder&&!bestHatch&&!legends.length);let hallSection=`<div class="stats-section-title">🏆 Hall of Fame</div>${hofEmpty?`<div class="card"><h3>🏆 Hall of Fame</h3><div class="body"><div class="stats-empty-note">Inga rekord ännu. När du börjar logga värpning, kläckning och avel kommer PoultryMaster fylla den här sidan automatiskt.</div></div></div>`:`<div class="card"><h3>🏆 Rekord & legender</h3><div class="body"><div class="hall-grid"><div class="hall-card"><b>${bestLayer?esc(bestLayer[1]):'-'}</b><small>🥇 Bästa värpare${bestLayer?`<br>${esc(bestLayer[0])}`:''}</small></div><div class="hall-card"><b>${biggestEggLog?biggestEggLog.avg.toFixed(1)+' g':'-'}</b><small>🥚 Största medelägg${biggestEggLog?`<br>${esc(biggestEggLog.id)} · ${esc(biggestEggLog.date)}`:''}</small></div><div class="hall-card"><b>${bestHatch?bestHatch.stats.survival+'%':'-'}</b><small>🐣 Bästa kläckning${bestHatch?`<br>${bestHatch.stats.hatched} av ${bestHatch.stats.total} · ${esc(bestHatch.date)}`:''}</small></div><div class="hall-card"><b>${bestBreeder?bestBreeder.score:'-'}</b><small>👑 Starkast avelsindex${bestBreeder?`<br>${esc(bestBreeder.id)}`:''}</small></div><div class="hall-card wide"><b>${legends.length}</b><small>⭐ Legender markerade</small>${legends.length?`<div style="margin-top:10px">${legends.map(f=>`<span class="pill" style="margin:3px">${esc(f.name||f.id||'Legend')}</span>`).join('')}</div>`:`<p class="muted" style="margin:8px 0 0">Markera en fågel som ⭐ Legend i flockkortet när du vill lyfta fram en grundare, favorit eller historiskt viktig individ.</p>`}</div></div></div></div>`}`;let sections={hatch:hatchSection,laying:layingSection,breeding:avelSection,health:weightHealthSection,hall:hallSection};
$('stats').innerHTML=`<div class="tabs stats-tabs"><button class="btn tab ${statsTab==='hatch'?'active':''}" data-action="stats-tab" data-stats="hatch">🐣 Kläckning</button><button class="btn tab ${statsTab==='laying'?'active':''}" data-action="stats-tab" data-stats="laying">🥚 Värpning</button><button class="btn tab ${statsTab==='breeding'?'active':''}" data-action="stats-tab" data-stats="breeding">🧬 Avel</button><button class="btn tab ${statsTab==='health'?'active':''}" data-action="stats-tab" data-stats="health">⚖️ Hälsa</button><button class="btn tab ${statsTab==='hall'?'active':''}" data-action="stats-tab" data-stats="hall">🏆 Hall</button></div>${sections[statsTab]||hatchSection}`}
function machineDefaults(existing={}){
  return {
    id: existing.id || uid('inc'),
    name: existing.name || '',
    brand: existing.brand || '',
    model: existing.model || '',
    capacity: existing.capacity || 12,
    tempTarget: existing.tempTarget || state.settings.temp || 37.7,
    humidityTarget: existing.humidityTarget || state.settings.humidity || 45,
    lockdownHumidity: existing.lockdownHumidity || 65,
    turning: existing.turning || 'Ja',
    turnsPerDay: existing.turnsPerDay || '',
    status: existing.status || 'Aktiv',
    isDefault: !!existing.isDefault,
    notes: existing.notes || ''
  };
}
function machineCardHTML(i){
  i=machineDefaults(i);
  return `<div class="machine-card">
    <div class="machine-head">
      <div>
        <div class="machine-title">🥚 ${esc(i.name||'Namnlös kläckare')} ${i.isDefault?'<span class="pill">Standard</span>':''}</div>
        <div class="machine-meta">${esc([i.brand,i.model].filter(Boolean).join(' · ')||'Ingen modell angiven')} · ${esc(i.status||'Aktiv')}</div>
      </div>
      <div class="actions" style="margin-top:0">
        <button class="btn small" data-action="machine-edit" data-id="${esc(i.id)}">Redigera</button>
        <button class="btn small danger" data-action="machine-delete" data-id="${esc(i.id)}">Ta bort</button>
      </div>
    </div>
    <div class="machine-grid">
      <div><b>Kapacitet</b><span>${esc(i.capacity)} ägg</span></div>
      <div><b>Temperatur</b><span>${esc(i.tempTarget)} °C</span></div>
      <div><b>Fuktighet</b><span>${esc(i.humidityTarget)} % RH</span></div>
      <div><b>Lockdown</b><span>${esc(i.lockdownHumidity)} % RH</span></div>
      <div><b>Vändning</b><span>${esc(i.turning)}${i.turnsPerDay?' · '+esc(i.turnsPerDay)+'/dygn':''}</span></div>
      <div><b>Används av</b><span>${state.eggs.filter(e=>e.incubatorId===i.id&&e.status==='Inkuberas').length} aktiva ägg</span></div>
    </div>
    ${i.notes?`<p class="machine-meta" style="margin-top:10px">${esc(i.notes)}</p>`:''}
  </div>`;
}
function machineEditorHTML(i={}){
  i=machineDefaults(i);
  return `<div class="machine-editor" id="machine-editor">
    <div class="machine-editor-title">${i.id&&state.incubators.some(x=>x.id===i.id)?'Redigera kläckare':'Lägg till kläckare'}</div>
    <input type="hidden" id="machine-id" value="${esc(i.id)}">
    <div class="settings-two">
      <div><label>Namn</label><input id="machine-name" value="${esc(i.name)}" placeholder="Ex. River ET-512A"></div>
      <div><label>Fabrikat</label><input id="machine-brand" value="${esc(i.brand)}" placeholder="Ex. River, Borotto, Brinsea"></div>
      <div><label>Modell</label><input id="machine-model" value="${esc(i.model)}" placeholder="Ex. ET-512A"></div>
      <div><label>Kapacitet</label><input id="machine-capacity" type="number" value="${esc(i.capacity)}"></div>
      <div><label>Standardtemperatur °C</label><input id="machine-temp" type="number" step="0.1" value="${esc(i.tempTarget)}"></div>
      <div><label>Standardfuktighet % RH</label><input id="machine-humidity" type="number" value="${esc(i.humidityTarget)}"></div>
      <div><label>Lockdown-fuktighet % RH</label><input id="machine-lockdown-humidity" type="number" value="${esc(i.lockdownHumidity)}"></div>
      <div><label>Automatisk vändning</label><select id="machine-turning"><option ${i.turning==='Ja'?'selected':''}>Ja</option><option ${i.turning==='Nej'?'selected':''}>Nej</option></select></div>
      <div><label>Vändningar per dygn</label><input id="machine-turns" type="number" value="${esc(i.turnsPerDay)}" placeholder="Valfritt"></div>
      <div><label>Status</label><select id="machine-status"><option ${i.status==='Aktiv'?'selected':''}>Aktiv</option><option ${i.status==='Reserv'?'selected':''}>Reserv</option><option ${i.status==='Service'?'selected':''}>Service</option><option ${i.status==='Avställd'?'selected':''}>Avställd</option></select></div>
    </div>
    <label>Anteckningar</label><textarea id="machine-notes" placeholder="Kalibrering, avvikelser, placering, service...">${esc(i.notes)}</textarea>
    <label style="display:flex;align-items:center;gap:8px;font-weight:900"><input id="machine-default" type="checkbox" style="width:auto" ${i.isDefault?'checked':''}> Använd som standardkläckare</label>
    <div class="actions"><button class="btn primary" data-action="machine-save">Spara kläckare</button><button class="btn" data-action="machine-cancel">Avbryt</button></div>
  </div>`;
}
function renderMachineSettings(editId=''){
  const list=(state.incubators||[]).map(machineCardHTML).join('')||'<div class="empty">Inga kläckare registrerade ännu.</div>';
  const editing=editId?machineEditorHTML(state.incubators.find(i=>i.id===editId)||{}):'';
  return `<div class="settings-section"><h3>🐣 Kläckare</h3><div class="body"><p class="settings-help">Här hanteras användarens egna kläckare. Varje kläckare får egen kapacitet, temperatur, fuktighet och lockdown-profil.</p><div class="actions"><button class="btn primary" data-action="machine-new">+ Lägg till kläckare</button></div>${editing}<h4>Mina kläckare</h4>${list}</div></div>`;
}
function readMachineEditor(){
  return {
    id: $('machine-id').value || uid('inc'),
    name: $('machine-name').value.trim() || 'Ny kläckare',
    brand: $('machine-brand').value.trim(),
    model: $('machine-model').value.trim(),
    capacity: +$('machine-capacity').value || 0,
    tempTarget: +$('machine-temp').value || 37.7,
    humidityTarget: +$('machine-humidity').value || 45,
    lockdownHumidity: +$('machine-lockdown-humidity').value || 65,
    turning: $('machine-turning').value,
    turnsPerDay: $('machine-turns').value,
    status: $('machine-status').value,
    isDefault: $('machine-default').checked,
    notes: $('machine-notes').value.trim()
  };
}
function saveMachineFromEditor(){
  let m=readMachineEditor();
  if(m.isDefault)state.incubators.forEach(x=>x.isDefault=false);
  let idx=state.incubators.findIndex(x=>x.id===m.id);
  if(idx>-1)state.incubators[idx]=m; else state.incubators.push(m);
  if(!state.incubators.some(x=>x.isDefault)&&state.incubators[0])state.incubators[0].isDefault=true;
  save();settings();
}

function poultryMasterLogoSVG(cls='settings-identity-logo'){
  return `<svg class="${cls}" viewBox="0 0 64 64" aria-label="PoultryMaster" role="img"><path d="M32 4 52 12v16c0 16-8.7 26.6-20 32C20.7 54.6 12 44 12 28V12L32 4Z" fill="#12351f" stroke="#d7b45a" stroke-width="3"/><path d="M32 17c-8 0-13 8.5-13 18 0 8.6 5.4 14 13 14s13-5.4 13-14c0-9.5-5-18-13-18Z" fill="#f1c15b"/><path d="M26 34c0-7 2.1-12 6-15 3.9 3 6 8 6 15 0 5.2-2.1 8.5-6 8.5S26 39.2 26 34Z" fill="#ffd47a" opacity=".65"/></svg>`;
}
function farmLogoHTML(){
  const f=state.farmSettings||def().farmSettings;
  return f.farmLogo?`<img class="farm-logo-preview" src="${f.farmLogo}" alt="Gårdslogotyp">`:poultryMasterLogoSVG('farm-logo-preview');
}
function farmLangLabel(v){return {sv:'Svenska',en:'English',da:'Dansk',no:'Norsk',fi:'Suomi'}[v||'sv']||'Svenska'}
function farmDisplayName(){let n=(state.farmSettings&&state.farmSettings.farmName)||'';return String(n).trim()||'PoultryMaster'}
function farmTodayTitle(){return farmDisplayName()+' '+t('today')}
function applyFarmTitles(){
  const n=farmDisplayName();
  const set=(id,label)=>{const el=$(id);if(el)el.textContent=n+' – '+label};
  set('stats-title',t('statistics'));
  set('journal-title-main',t('farmJournal'));
  set('settings-title-main',t('settings'));
  set('eggs-title-main',t('eggs')+' & '+t('incubators').toLowerCase());
  set('candling-title-main',t('candling'));
  set('chicks-title-main',t('chicks'));
  set('flock-title-main',t('flock'));
  set('laying-title-main',t('laying'));
}


function renderSettingsPage(){
  const s=state.settings;
  const f=state.farmSettings||def().farmSettings;
  return `<div class="settings-section"><h3>🐓 Min gård</h3><div class="body"><p class="settings-help">Här sparas användarens egen gårdsprofil. PoultryMaster behåller sin identitet i apphuvudet, medan gårdsprofilen gör rapporter, livsböcker och utskrifter personliga.</p>
    <div class="farm-profile-preview">
      <div class="farm-profile-row">
        ${farmLogoHTML()}
        <div>
          <div class="farm-profile-name">${esc(f.farmName||'Min gård')}</div>
          <div class="farm-profile-meta">${f.owner?'Ägare: '+esc(f.owner)+' · ':''}${esc(f.country||'Sverige')} · ${farmLangLabel(f.language)}</div>
          <div class="farm-logo-actions">
            <label class="btn small">📷 Välj logotyp<input id="farm-logo-file" type="file" accept="image/*" style="display:none"></label>
            <label class="btn small">📸 Kamera<input id="farm-logo-camera" type="file" accept="image/*" capture="environment" style="display:none"></label>
            ${f.farmLogo?'<button class="btn small danger" data-action="farm-logo-remove">Ta bort logotyp</button>':''}
          </div>
        </div>
      </div>
    </div>
    <form id="farm-settings-form">
      <div class="settings-two">
        <div><label>Gårdsnamn</label><input id="farm-name" value="${esc(f.farmName||'')}" placeholder="Ex. Österlen Hönsgård"></div>
        <div><label>Ägare</label><input id="farm-owner" value="${esc(f.owner||'')}" placeholder="Ex. Robin Nilsson"></div>
        <div><label>Land</label><select id="farm-country">
          ${['Sverige','Danmark','Norge','Finland','Tyskland','Annat'].map(c=>`<option value="${c}" ${(f.country||'Sverige')===c?'selected':''}>${c}</option>`).join('')}
        </select></div>
        <div><label>Språk</label><select id="farm-language">
          <option value="sv" ${(f.language||'sv')==='sv'?'selected':''}>Svenska</option>
          <option value="en" ${(f.language||'sv')==='en'?'selected':''}>English</option>
          <option value="da" ${(f.language||'sv')==='da'?'selected':''}>Dansk</option>
          <option value="no" ${(f.language||'sv')==='no'?'selected':''}>Norsk</option>
          <option value="fi" ${(f.language||'sv')==='fi'?'selected':''}>Suomi</option>
        </select></div>
        <div><label>Enheter</label><select id="farm-units">
          <option value="metric" ${(f.units||'metric')==='metric'?'selected':''}>Metriskt: °C, gram</option>
          <option value="imperial" ${(f.units||'metric')==='imperial'?'selected':''}>Imperial: °F, oz</option>
        </select></div>
        <div><label>Datumformat</label><select id="farm-date-format">
          <option value="YYYY-MM-DD" ${(f.dateFormat||'YYYY-MM-DD')==='YYYY-MM-DD'?'selected':''}>YYYY-MM-DD</option>
          <option value="DD/MM/YYYY" ${(f.dateFormat||'YYYY-MM-DD')==='DD/MM/YYYY'?'selected':''}>DD/MM/YYYY</option>
          <option value="MM/DD/YYYY" ${(f.dateFormat||'YYYY-MM-DD')==='MM/DD/YYYY'?'selected':''}>MM/DD/YYYY</option>
        </select></div>
      </div><br><button class="btn primary" data-action="farm-settings-save">Spara gårdsprofil</button>
    </form></div></div>
    <div class="settings-section"><h3>🥚 Inkubering</h3><div class="body"><p class="settings-help">Globala standarddagar. Temperatur och fuktighet används bara som förslag när en ny kläckare skapas.</p><form id="settings-form-visible">
    <div class="settings-two">
      <div><label>Inkubationstid</label><input id="v-set-days" type="number" value="${esc(s.incubationDays)}"></div>
      <div><label>Första lysning dag</label><input id="v-set-c1" type="number" value="${esc(s.candling1)}"></div>
      <div><label>Andra lysning dag</label><input id="v-set-c2" type="number" value="${esc(s.candling2)}"></div>
      <div><label>Lockdown dag</label><input id="v-set-lock" type="number" value="${esc(s.lockdown)}"></div>
      <div><label>Standardtemperatur för ny kläckare</label><input id="v-set-temp" type="number" step="0.1" value="${esc(s.temp)}"></div>
      <div><label>Standardfuktighet för ny kläckare</label><input id="v-set-hum" type="number" value="${esc(s.humidity)}"></div>
    </div><br><button class="btn primary" data-action="settings-save">Spara inkuberingsregler</button></form></div></div>
    ${renderMachineSettings()}
    <div class="settings-section"><h3>📂 Backup</h3><div class="body"><p class="settings-help"><b>Backup 2.0</b><br>Exporterar PoultryMaster-data med versionsinfo, datum och kontrollräkning.</p><div class="actions"><button class="btn primary" data-action="export-full">Exportera komplett backup</button><button class="btn" data-action="export-light">Exportera utan bilder</button></div><label class="btn primary" for="import-file" style="margin-top:12px;text-align:center;width:100%;display:block">Importera backup</label><p class="settings-help" style="font-size:.86rem;margin-top:12px">Komplett backup tar med bilder men kan bli stor. Backup utan bilder är mindre och snabbare.</p></div></div>
    <div class="settings-section"><h3>🛡 PoultryMaster</h3><div class="body"><p class="settings-help">Appens varumärke och plattform finns kvar i sidhuvud, appikon och systemets identitet. Gårdslogotypen används för användarens egen gård och framtida rapporter.</p><p class="muted"><b>PoultryMaster v2.9.9</b><br>Utvecklad tillsammans med riktiga hönsägare.</p></div></div>`;
}

function settings(){if($('settings-content')){$('settings-content').innerHTML=renderSettingsPage();}let s=state.settings;if($('set-days'))$('set-days').value=s.incubationDays;if($('set-c1'))$('set-c1').value=s.candling1;if($('set-c2'))$('set-c2').value=s.candling2;if($('set-lock'))$('set-lock').value=s.lockdown;if($('set-temp'))$('set-temp').value=s.temp;if($('set-hum'))$('set-hum').value=s.humidity}function journalEventIcon(type){return{task:'✅',upcoming:'📅',candling:'🔦',egg:'🥚',chick:'🐣',flock:'🐓',laying:'🥚',health:'🩺',weight:'⚖️',manual:'📌',batch:'📦'}[type]||'📌'}
function journalEventStyle(type){if(type==='task'||type==='candling'||type==='laying')return'good';if(type==='upcoming')return'warn';if(type==='health')return'bad';return'info'}
function journalItemHTML(j){return `<div class="journal-item"><div class="journal-dot ${journalEventStyle(j.kind)}">${journalEventIcon(j.kind)}</div><div><div class="journal-title">${esc(j.title)}${j.date?`<span class="journal-date">${esc(j.date)}</span>`:''}</div><div class="journal-meta">${esc(j.source||'Gårdsjournal')}${j.target?` · ${esc(j.target)}`:''}</div>${j.desc?`<div class="journal-desc">${esc(j.desc)}</div>`:''}</div></div>`}
function journalTodayItems(){let items=[];let activeEggs=(state.eggs||[]).filter(e=>e.status==='Inkuberas');let tasks=todayTasksFromEggs(activeEggs);tasks.forEach(t=>{if(isTaskDone(t.kind,t.id,t.date))items.push({kind:'task',date:t.date,title:t.label+' slutförd',target:t.id,source:'Dagens uppgifter',desc:'Markerad som klar i PoultryMaster.'});else items.push({kind:'upcoming',date:t.date,title:t.label+' kvar idag',target:t.id,source:'Dagens uppgifter',desc:'Väntar på registrering eller manuell markering.'})});(state.candling||[]).filter(c=>c.date===today()).forEach(c=>items.push({kind:'candling',date:c.date,title:'Lysning registrerad',target:c.eggId,source:'Lysning',desc:(c.result||'')+(c.notes?' · '+c.notes:'')}));(state.events||[]).filter(e=>e.date===today()).forEach(e=>items.push({kind:(e.type==='Vägning'?'weight':(e.type==='Hälsa'||e.type==='Sjukdom'?'health':'manual')),date:e.date,title:e.type||'Händelse registrerad',target:e.targetId,source:'Manuell händelse',desc:e.notes||''}));(state.laying||[]).filter(l=>logStart(l)<=today()&&logEnd(l)>=today()).forEach(l=>items.push({kind:'laying',date:today(),title:'Värpning registrerad',target:l.henId||'Flock',source:'Värpning',desc:`${l.count||0} ägg${l.totalWeight?' · '+l.totalWeight+' g totalt':''}`}));return items}
function journalUpcomingItems(){let items=[];let activeEggs=(state.eggs||[]).filter(e=>e.status==='Inkuberas');for(const e of activeEggs){let d=days(e.dateSet),s=state.settings;let checks=[['Första lysning',s.candling1,'🔦'],['Andra lysning',s.candling2,'🔦'],['Lockdown',s.lockdown,'🔒'],['Beräknad kläckning',s.incubationDays,'🐣']];checks.forEach(([label,day,ico])=>{let diff=day-d,date=addDays(today(),diff);if(diff>=0&&diff<=14&&!plannedRoutineIsDone(label,e.id,date)){items.push({kind:'upcoming',date,title:`${ico} ${label}${diff===0?' idag':' om '+diff+' dagar'}`,target:e.id,source:'Planerad rutin',desc:`Dag ${day} av ${s.incubationDays}`})}})}return items.sort((a,b)=>String(a.date).localeCompare(String(b.date))).slice(0,24)}
function journalHistoryItems(){let items=[];Object.values(state.completedTasks||{}).forEach(t=>{if(t&&t.done&&t.date&&t.date!==today())items.push({kind:'task',date:t.date,title:'Uppgift slutförd',target:t.id,source:'Dagens uppgifter',desc:'Markerad som klar i PoultryMaster.'})});(state.candling||[]).forEach(c=>items.push({kind:'candling',date:c.date,title:'Lysning registrerad',target:c.eggId,source:'Lysning',desc:(c.result||'')+(c.notes?' · '+c.notes:'')}));(state.events||[]).forEach(e=>items.push({kind:(e.type==='Vägning'?'weight':(e.type==='Hälsa'||e.type==='Sjukdom'?'health':'manual')),date:e.date,title:e.type||'Händelse registrerad',target:e.targetId,source:'Manuell händelse',desc:e.notes||''}));(state.eggs||[]).forEach(e=>items.push({kind:'egg',date:e.dateSet,title:'Ägg registrerat',target:e.id,source:'Ägg',desc:`${e.breed||'Okänd ras'}${e.source?' · '+e.source:''}`}));(state.chicks||[]).forEach(c=>items.push({kind:'chick',date:c.hatchDate,title:'Kyckling registrerad',target:c.id,source:'Kyckling',desc:c.breed||''}));(state.flock||[]).forEach(f=>items.push({kind:'flock',date:f.hatchDate||today(),title:'Individ registrerad i flock',target:f.name||f.id,source:'Flock',desc:`${f.breed||''}${f.ringNumber?' · Ring '+f.ringNumber:''}`}));(state.laying||[]).forEach(l=>items.push({kind:'laying',date:logStart(l),title:'Värpning registrerad',target:l.henId||'Flock',source:'Värpning',desc:`${l.count||0} ägg${l.totalWeight?' · '+l.totalWeight+' g totalt':''}`}));return items.filter(x=>x.date).sort((a,b)=>String(b.date).localeCompare(String(a.date))).slice(0,80)}
function journalSection(title,items,empty){return `<div class="journal-section"><div class="journal-section-title">${esc(title)} (${items.length})</div>${items.length?items.map(journalItemHTML).join(''):`<div class="journal-empty">${esc(empty)}</div>`}</div>`}
function events(){let todayItems=journalTodayItems(),upcomingItems=journalUpcomingItems(),historyItems=journalHistoryItems();$('event-list').innerHTML=`<div class="journal-hero"><div class="journal-hero-title">📖 Gårdsjournal</div><div class="journal-hero-text">Här samlas allt som händer på gården. Registrering sker från startsidans gröna knapp, medan journalen visar dagens arbete, kommande rutiner och historiken.</div></div>${journalSection('🌱 Idag',todayItems,'Inget registrerat för idag ännu.')}${journalSection('📅 Kommande',upcomingItems,'Inga kommande rutiner hittades.')}${journalSection('📖 Historik',historyItems,'Ingen historik ännu. När du registrerar ägg, lysning, vikt, hälsa eller värpning hamnar det här.')}`}


/* PoultryMaster v2.9.9 – Safe modal repair
   Restores Add/Edit dialogs so buttons never fall through to browser window.open(). */
function optionHTML(opts,val=''){
  return opts.map(o=>{let v=Array.isArray(o)?o[0]:o, lab=Array.isArray(o)?o[1]:o;return `<option value="${esc(v)}" ${String(v)===String(val||'')?'selected':''}>${esc(lab)}</option>`}).join('');
}
function inputHTML(name,label,value='',type='text',extra=''){
  return `<label>${label}</label><input name="${name}" type="${type}" value="${esc(value||'')}" ${extra}>`;
}
function selectHTML(name,label,opts,value=''){
  return `<label>${label}</label><select name="${name}">${optionHTML(opts,value)}</select>`;
}
function textHTML(name,label,value=''){
  return `<label>${label}</label><textarea name="${name}">${esc(value||'')}</textarea>`;
}
function imageHTML(current=''){
  return `<label>${t('photoCamera')}</label><input name="imageFile" type="file" accept="image/*" capture="environment"><input name="image" type="hidden" value="${esc(current||'')}">${current?`<img src="${current}" style="width:110px;height:110px;object-fit:cover;border-radius:14px;margin-top:8px;border:1px solid var(--line)">`:''}`;
}
function fileToDataURL(file){return new Promise((resolve,reject)=>{if(!file){resolve('');return}let r=new FileReader();r.onload=()=>resolve(r.result||'');r.onerror=reject;r.readAsDataURL(file)})}
function typeTitle(type,editing){
  const map={egg:t('eggs'),incubator:t('incubators'),candling:t('candling'),chick:t('chicks'),flock:t('flockIndividual'),event:t('farmJournal'),laying:t('laying'),batch:'omgång'};
  return (editing?t('editVerb')+' ':t('register')+' ')+(map[type]||'post');
}
function formFields(type,item={}){
  const incOpts=[['','Ingen vald'],...(state.incubators||[]).map(i=>[i.id,i.name||i.id])];
  const eggOpts=[['','Välj ägg'],...(state.eggs||[]).map(e=>[e.id,`${e.id} – ${e.breed||'Okänd ras'}`])];
  const birdOpts=[['','Ingen vald'],...birdOptions()];
  const genderOpts=['Okänt','Höna','Tupp'];
  if(type==='egg')return `${inputHTML('id','Ägg-ID',item.id||uid('egg'))}${inputHTML('breed','Ras',item.breed||'')}${inputHTML('source','Ursprung',item.source||'')}${inputHTML('dateSet','Startdatum',item.dateSet||today(),'date')}${selectHTML('incubatorId','Kläckare',incOpts,item.incubatorId||'')}${selectHTML('status','Status',['Inkuberas','Osäkert','Kläckt','Obefruktat','Dött embryo','Blodring','Kasserat'],item.status||'Inkuberas')}${selectHTML('batchId','Omgång',batchOptions(item.batchId||''),item.batchId||'')}${imageHTML(item.image||'')}${textHTML('notes','Anteckningar',item.notes||'')}`;
  if(type==='incubator')return `${inputHTML('name','Namn',item.name||'')}${inputHTML('model','Modell',item.model||'')}${inputHTML('capacity','Kapacitet',item.capacity||'','number')}${inputHTML('tempTarget','Måltemperatur',item.tempTarget||state.settings.temp||37.7,'number','step="0.1"')}${inputHTML('humidityTarget','Målfuktighet',item.humidityTarget||state.settings.humidity||45,'number')}${selectHTML('status','Status',['Aktiv','Reserv','Avstängd'],item.status||'Aktiv')}${textHTML('notes','Anteckningar',item.notes||'')}`;
  if(type==='batch')return `${inputHTML('name','Namn',item.name||('Omgång start '+today()))}${inputHTML('startDate','Startdatum',item.startDate||today(),'date')}${selectHTML('incubatorId','Kläckare',incOpts,item.incubatorId||'')}${selectHTML('status','Status',['Aktiv','Avslutad'],item.status||'Aktiv')}${textHTML('notes','Anteckningar',item.notes||'')}`;
  if(type==='candling')return `${selectHTML('eggId','Ägg',eggOpts,item.eggId||'')}${inputHTML('date','Datum',item.date||today(),'date')}${inputHTML('day','Dag',item.day||'','number')}${selectHTML('result','Resultat',['Tydliga blodkärl','Ser lovande ut','Osäkert','Blodring','Obefruktat','Dött embryo'],item.result||'Osäkert')}${selectHTML('confidence','Säkerhet',['','Låg','Medel','Hög','100%'],item.confidence||'')}${imageHTML(item.image||'')}${textHTML('notes','Anteckning',item.notes||'')}`;
  if(type==='chick')return `${inputHTML('id','Kyckling-ID / namn',item.id||uid('chick'))}${selectHTML('eggId','Kopplat ägg',eggOpts,item.eggId||'')}${inputHTML('breed','Ras',item.breed||'')}${inputHTML('hatchDate','Kläckdatum',item.hatchDate||today(),'date')}${selectHTML('gender','Kön',genderOpts,item.gender||'Okänt')}${selectHTML('status','Status',['Lever','Observeras','Behandling','Flyttad till flock','Död'],item.status||'Lever')}${inputHTML('weight','Vikt gram',item.weight||'','number','step="0.1"')}${inputHTML('mother','Mor',item.mother||'')}${inputHTML('father','Far',item.father||'')}${inputHTML('ringNumber','Ringnummer',item.ringNumber||'')}${imageHTML(item.image||'')}${textHTML('notes','Anteckningar',item.notes||'')}`;
  if(type==='flock')return `${inputHTML('name',t('nameId'),item.name||uid('bird'))}${inputHTML('breed',t('breed'),item.breed||'')}${selectHTML('gender',t('sex'),[['Okänt',t('unknownGender')],['Höna',t('hen')],['Tupp',t('rooster')]],item.gender||'Okänt')}${inputHTML('hatchDate',t('hatchDate'),item.hatchDate||today(),'date')}${inputHTML('source',t('origin'),item.source||'')}${inputHTML('mother',t('mother'),item.mother||'')}${inputHTML('father',t('father'),item.father||'')}${inputHTML('ringNumber',t('ringNumber'),item.ringNumber||'')}${selectHTML('status',t('status'),[['Aktiv',t('active')],['Avel',t('breeding')],['Såld',t('sold')],['Död',t('dead')]],item.status||'Aktiv')}${imageHTML(item.image||'')}${textHTML('notes',t('notes'),item.notes||'')}`;
  if(type==='event')return `${inputHTML('date','Datum',item.date||today(),'date')}${selectHTML('targetId','Individ / ägg',birdOpts,item.targetId||'')}${selectHTML('type','Typ',['Hälsa','Vägning','Sjukdom','Behandling','Foto','Anteckning'],item.type||'Anteckning')}${inputHTML('weight','Vikt gram',item.weight||'','number','step="0.1"')}${textHTML('notes','Anteckningar',item.notes||'')}`;
  if(type==='laying')return `${inputHTML('date',t('registrationDate'),item.date||today(),'date')}${inputHTML('layFrom',t('fromDate'),item.layFrom||item.date||today(),'date')}${inputHTML('layTo',t('toDate'),item.layTo||item.date||today(),'date')}${inputHTML('henId',t('henFlock'),item.henId||'')}${inputHTML('count',t('eggCount'),item.count||'','number')}${inputHTML('totalWeight',t('totalWeightGram'),item.totalWeight||'','number','step="0.1"')}<label>${t('averageWeight')}</label><input name="averageWeightPreview" readonly><label>${t('period')}</label><input name="periodPreview" readonly>${inputHTML('shellQuality',t('shellQuality'),item.shellQuality||'')}${inputHTML('eggColor',t('eggColor'),item.eggColor||'')}${selectHTML('doubleYolk',t('doubleYolk'),[['',t('no')],['on',t('yes')]],(item.doubleYolk==='on'||item.doubleYolk===true)?'on':'')}${selectHTML('breedingEgg',t('savedBreedingEgg'),[['',t('no')],['on',t('yes')]],(item.breedingEgg==='on'||item.breedingEgg===true)?'on':'')}${textHTML('notes',t('notes'),item.notes||'')}`;
  return textHTML('notes','Anteckningar',item.notes||'');
}
function arrForType(type){return {egg:state.eggs,incubator:state.incubators,candling:state.candling,chick:state.chicks,flock:state.flock,event:state.events,laying:state.laying,batch:state.batches}[type]}
function findItem(type,id){let arr=arrForType(type)||[];return arr.find(x=>String(x.id||x.name||'')===String(id||''))||{};}
function open(type,id=''){
  formType=type; editId=id||'';
  const item=id?findItem(type,id):{};
  const modal=$('modal'), title=$('modal-title'), fields=$('fields'), form=$('form');
  if(!modal||!title||!fields||!form)return;
  title.textContent=typeTitle(type,!!id);
  fields.innerHTML=formFields(type,item);
  modal.classList.add('active');
  setTimeout(()=>{try{form.querySelector('input,select,textarea')?.focus()}catch(e){}},30);
}
function close(){const m=$('modal'); if(m)m.classList.remove('active'); formType=''; editId=null;}
async function saveModalRecord(e){
  e.preventDefault();
  if(!formType)return;
  const form=$('form');
  const fd=new FormData(form); const obj={};
  for(const [k,v] of fd.entries()) if(k!=='imageFile') obj[k]=String(v||'').trim();
  const file=form.elements.imageFile?.files?.[0];
  if(file)obj.image=await fileToDataURL(file);
  if(!obj.image && form.elements.image)obj.image=form.elements.image.value||'';
  let arr=arrForType(formType); if(!arr)return;
  if(formType==='incubator'&&!obj.id)obj.id=editId||uid('inc');
  if(formType==='batch'&&!obj.id)obj.id=editId||uid('batch');
  if(formType==='event'&&!obj.id)obj.id=editId||uid('event');
  if(formType==='laying'&&!obj.id)obj.id=editId||uid('laying');
  if(formType==='flock'&&!obj.id)obj.id=editId||uid('flock');
  if(formType==='egg'&&!obj.id)obj.id=editId||uid('egg');
  if(formType==='chick'&&!obj.id)obj.id=editId||uid('chick');
  if(formType==='candling'&&!obj.id)obj.id=editId||uid('candling');
  if(formType==='candling'&&obj.eggId&&!obj.day){let eg=state.eggs.find(x=>x.id===obj.eggId); if(eg)obj.day=String(days(eg.dateSet,obj.date||today()));}
  let idx=arr.findIndex(x=>String(x.id||x.name||'')===String(editId||obj.id));
  if(idx>-1)arr[idx]={...arr[idx],...obj}; else arr.push(obj);
  try{completeTaskFromSavedRecord(formType,obj)}catch(e){}
  save(); close(); render();
}
if($('form')&&!$('form').dataset.pmModalRepair){$('form').dataset.pmModalRepair='1';$('form').addEventListener('submit',saveModalRecord)}
function backupCounts(data){let img=0;const scan=o=>{if(!o||typeof o!=='object')return;if(Array.isArray(o)){o.forEach(scan);return}Object.entries(o).forEach(([k,v])=>{let key=String(k).toLowerCase();if(typeof v==='string'&&(key.includes('image')||key.includes('photo'))&&v.startsWith('data:image'))img++;else scan(v)})};scan(data);return{eggs:data.eggs?.length||0,activeEggs:data.eggs?.filter(e=>e.status==='Inkuberas').length||0,incubators:data.incubators?.length||0,candlings:data.candling?.length||0,chicks:data.chicks?.length||0,flock:data.flock?.length||0,events:data.events?.length||0,laying:data.laying?.length||0,batches:data.batches?.length||0,lifeEvents:data.lifeEvents?.length||0,images:img}}function cloneForBackup(includeImages=true){let copy=JSON.parse(JSON.stringify(state));if(!includeImages){const strip=o=>{if(!o||typeof o!=='object')return;if(Array.isArray(o)){o.forEach(strip);return}Object.keys(o).forEach(k=>{let key=String(k).toLowerCase();if((key.includes('image')||key.includes('photo'))&&typeof o[k]==='string'&&o[k].startsWith('data:image'))o[k]='';else strip(o[k])})};strip(copy)}return copy}function exportBackup(includeImages=true){let data=cloneForBackup(includeImages),counts=backupCounts(data);let backup={app:'PoultryMaster',backupVersion:2,appVersion:'2.4.8',exportDate:new Date().toISOString(),includeImages,counts,data};let json=JSON.stringify(backup,null,2);let blob=new Blob([json],{type:'application/json'}),url=URL.createObjectURL(blob),ln=document.createElement('a');let stamp=new Date().toISOString().slice(0,10);ln.href=url;ln.download=`PoultryMaster_Backup_${includeImages?'Komplett':'UtanBilder'}_${stamp}.json`;ln.click();URL.revokeObjectURL(url);let mb=(json.length/1024/1024).toFixed(2);alert(`Backup skapad\n\nÄgg: ${counts.eggs}\nAktiva ägg: ${counts.activeEggs}\nKycklingar: ${counts.chicks}\nFlock: ${counts.flock}\nLysningar: ${counts.candlings}\nHändelser: ${counts.events}\nVärpning: ${counts.laying}\nOmgångar: ${counts.batches||0}\nLivsbok: ${counts.lifeEvents||0}\nBilder: ${counts.images}\nStorlek: ca ${mb} MB`)}function readBackupObject(raw){let parsed=JSON.parse(raw);if(parsed&&parsed.app==='PoultryMaster'&&parsed.data)return parsed.data;if(parsed&&(parsed.settings||parsed.eggs||parsed.incubators))return parsed;throw new Error('Fel filtyp')}document.addEventListener('click',e=>{let b=e.target.closest('button,[data-action]');if(!b)return;let a=b.dataset.action;if(!a)return;if(a==='view')show(b.dataset.view);if(a==='incubators'){sub='incubators';show('eggs')}if(a==='sub'){sub=b.dataset.sub;render()}if(a==='stats-tab'){statsTab=b.dataset.stats;render()}if(a==='candling-filter'){candlingFilter=b.dataset.filter||'active';render()}if(a==='toggle-candling-history'){let id=b.dataset.id;candlingOpen[id]=!candlingOpen[id];render()}if(a==='toggle-egg-card'){let id=b.dataset.id;eggOpen[id]=!eggOpen[id];render()}if(a==='egg-filter'){eggFilter=b.dataset.filter||'all';render()}if(a==='toggle-candling-expert'){let id=b.dataset.id;candlingExpert[id]=!candlingExpert[id];render()}if(a==='add-current')open(sub==='eggs'?'egg':'incubator');if(a==='add')open(b.dataset.type);if(a==='edit')open(b.dataset.type,b.dataset.id);if(a==='close')close();if(a==='del'){if(confirm('Radera posten?')){let arr={egg:state.eggs,incubator:state.incubators,candling:state.candling,chick:state.chicks,flock:state.flock,event:state.events,laying:state.laying,batch:state.batches}[b.dataset.type];let i=arr.findIndex(x=>x.id===b.dataset.id);if(i>-1){if(b.dataset.type==='batch')state.eggs.filter(e=>e.batchId===b.dataset.id).forEach(e=>e.batchId='');arr.splice(i,1)}save();render()}}if(a==='chick-from-egg'){let eg=state.eggs.find(x=>x.id===b.dataset.id);if(eg){state.chicks.push({id:eg.id,eggId:eg.id,breed:eg.breed,hatchDate:today(),gender:'Okänt',status:'Lever',weight:'',notes:''});save();show('chicks')}}if(a==='move-flock'){let c=state.chicks.find(x=>x.id===b.dataset.id);if(c){state.flock.push({id:uid('flock'),name:c.id,breed:c.breed,gender:c.gender,hatchDate:c.hatchDate,source:'Kläckt från ägg '+(c.eggId||c.id),mother:'',father:'',ringed:'Nej',ringNumber:'',breedingStatus:'Ej bedömd',status:'Aktiv',notes:c.notes||''});c.status='Flyttad till flock';save();show('flock')}}if(a==='quick-weight'){open('event');let f=$('form');if(f.elements.targetId)f.elements.targetId.value=b.dataset.id;if(f.elements.type)f.elements.type.value='Vägning';$('modal-title').textContent='Logga vikt';}if(a==='quick-health'){open('event');let f=$('form');if(f.elements.targetId)f.elements.targetId.value=b.dataset.id;if(f.elements.type)f.elements.type.value='Hälsa';$('modal-title').textContent='Logga hälsa';}if(a==='quick-candling'){open('candling');let egg=state.eggs.find(x=>String(x.id).toLowerCase()===String(b.dataset.id||'').toLowerCase());let f=$('form');if(egg){if(f.elements.eggId)f.elements.eggId.value=egg.id;if(f.elements.day)f.elements.day.value=days(egg.dateSet);$('modal-title').textContent='Logga lysning för '+egg.id;} }if(a==='register-menu'){$('quick-modal').classList.add('active')}if(a==='quick-close'){$('quick-modal').classList.remove('active')}if(a==='quick-add'){$('quick-modal').classList.remove('active');open(b.dataset.type)}if(a==='quick-health-manual'){$('quick-modal').classList.remove('active');open('event');let f=$('form');if(f.elements.type)f.elements.type.value='Hälsa';$('modal-title').textContent='Logga hälsa'}if(a==='quick-weight-manual'){$('quick-modal').classList.remove('active');open('event');let f=$('form');if(f.elements.type)f.elements.type.value='Vägning';$('modal-title').textContent='Logga vikt'}if(a==='create-batch-from-date'){let d=b.dataset.date;let id=uid('batch');state.batches.push({id,name:'Omgång start '+d,startDate:d,incubatorId:'',status:'Aktiv',notes:'Skapad från befintliga ägg'});state.eggs.filter(e=>!e.batchId&&e.dateSet===d).forEach(e=>e.batchId=id);save();render()}if(a==='life-book')renderLifeBook(b.dataset.id);if(a==='close-lifebook')$('lifebook-modal').classList.remove('active');if(a==='export-full')exportBackup(true);if(a==='export-light')exportBackup(false);if(a==='export')exportBackup(true)});

document.addEventListener('click',e=>{
  const b=e.target.closest('button,[data-action]');
  if(!b)return;
  const a=b.dataset.action;
  if(a==='settings-save'){
    e.preventDefault();
    state.settings={incubationDays:+$('v-set-days').value||21,candling1:+$('v-set-c1').value||8,candling2:+$('v-set-c2').value||14,lockdown:+$('v-set-lock').value||18,temp:+$('v-set-temp').value||37.7,humidity:+$('v-set-hum').value||45};
    save();settings();return;
  }
  if(a==='farm-settings-save'){
    e.preventDefault();
    state.farmSettings={...(state.farmSettings||{}),farmName:$('farm-name').value.trim(),owner:$('farm-owner').value.trim(),country:$('farm-country').value,language:$('farm-language').value,units:$('farm-units').value,dateFormat:$('farm-date-format').value};
    save();render();return;
  }
  if(a==='farm-logo-remove'){
    e.preventDefault();
    state.farmSettings=state.farmSettings||def().farmSettings;
    state.farmSettings.farmLogo='';
    save();settings();return;
  }
  if(a==='machine-new'){e.preventDefault(); if($('settings-content')){$('settings-content').innerHTML=renderSettingsPage().replace(renderMachineSettings(),renderMachineSettings('__new__')); const ed=$('machine-editor'); if(ed)ed.scrollIntoView({behavior:'smooth',block:'start'});} return;}
  if(a==='machine-edit'){e.preventDefault(); if($('settings-content')){$('settings-content').innerHTML=renderSettingsPage().replace(renderMachineSettings(),renderMachineSettings(b.dataset.id)); const ed=$('machine-editor'); if(ed)ed.scrollIntoView({behavior:'smooth',block:'start'});} return;}
  if(a==='machine-cancel'){e.preventDefault();settings();return;}
  if(a==='machine-save'){e.preventDefault();saveMachineFromEditor();return;}
  if(a==='machine-delete'){
    e.preventDefault();
    const id=b.dataset.id;
    const used=(state.eggs||[]).some(e=>e.incubatorId===id);
    if(used){alert('Kläckaren används av registrerade ägg. Byt kläckare på äggen innan du tar bort den.');return;}
    if(confirm('Ta bort kläckaren?')){state.incubators=state.incubators.filter(i=>i.id!==id);if(state.incubators[0]&&!state.incubators.some(i=>i.isDefault))state.incubators[0].isDefault=true;save();settings();}
    return;
  }
});

document.addEventListener('change',e=>{
  const input=e.target.closest('#farm-logo-file,#farm-logo-camera');
  if(!input||!input.files||!input.files[0])return;
  const file=input.files[0];
  const reader=new FileReader();
  reader.onload=()=>{
    state.farmSettings=state.farmSettings||def().farmSettings;
    state.farmSettings.farmLogo=reader.result;
    save();settings();
  };
  reader.readAsDataURL(file);
});

if($('settings-form'))$('settings-form').addEventListener('submit',e=>{e.preventDefault();state.settings={incubationDays:+$('set-days').value||21,candling1:+$('set-c1').value||8,candling2:+$('set-c2').value||14,lockdown:+$('set-lock').value||18,temp:+$('set-temp').value||37.7,humidity:+$('set-hum').value||45};save();show('dashboard')});if($('import-file'))$('import-file').addEventListener('change',e=>{let file=e.target.files[0];if(!file)return;let r=new FileReader();r.onload=()=>{try{let imported=readBackupObject(r.result);let c=backupCounts(imported);let ok=confirm(`Importera backup?\n\nDetta ERSÄTTER all nuvarande data i appen.\n\nÄgg: ${c.eggs}\nKycklingar: ${c.chicks}\nFlock: ${c.flock}\nLysningar: ${c.candlings}\nHändelser: ${c.events}\nVärpning: ${c.laying}\nOmgångar: ${c.batches||0}\nLivsbok: ${c.lifeEvents||0}\nBilder: ${c.images}`);if(!ok){e.target.value='';return}state=imported;normalize();save();render();e.target.value='';alert('Import klar. PoultryMaster-data är återställd.')}catch(err){e.target.value='';alert('Kunde inte läsa backupfilen. Kontrollera att det är en PoultryMaster-backup.')}};r.readAsText(file)});document.addEventListener('input',e=>{if(e.target&&e.target.id==='candling-search'){candlingQuery=e.target.value;render();return}if(formType!=='laying')return;let f=$('form');let c=+f.elements.count?.value||0,w=+f.elements.totalWeight?.value||0,avg=f.elements.averageWeightPreview;if(avg)avg.value=(c>0&&w>0)?(w/c).toFixed(1)+' g':'';let pp=f.elements.periodPreview,lf=f.elements.layFrom?.value,lt=f.elements.layTo?.value;if(pp&&lf&&lt){let pd=Math.max(1,dayDiff(lf,lt)+1);pp.value=pd+' dagar'+(c>0?' · '+fmtNum(c/pd)+' ägg/dag':'')}});show('dashboard')})();

// Task completion enhancements
function updateTaskProgressUI(tasks){
 const total=openTasksCount(tasks)+(tasks.filter(t=>state.completedTasks[(today()+'_'+t.id)]).length);
 const done=tasks.filter(t=>state.completedTasks[(today()+'_'+t.id)]).length;
 const remaining=total-done;
 const chip=document.querySelector('.farm-today-mini');
 if(chip){
   let el=document.getElementById('today-progress-chip');
   if(!el){
     el=document.createElement('span');
     el.id='today-progress-chip';
     el.className='status-chip';
     chip.appendChild(el);
   }
   el.textContent=`✅ ${done}/${total} klara`;
 }
 const tip=document.querySelector('.farm-today-tip');
 const status=document.querySelector('.farm-today-status');
 const text=document.querySelector('.farm-today-text');
 if(total>0 && remaining===0){
   if(status) status.textContent='🟢 Allt klart för idag';
   if(text) text.textContent='Alla planerade uppgifter är genomförda. PoultryMaster övervakar nu gården.';
   if(tip) tip.textContent='💡 Dagens tips: Gör gärna en sista visuell kontroll av djuren. Sedan är dagens rutiner klara.';
 }
}
const _oldDash=dash;
dash=function(){
 _oldDash();
 try{
   const tasks=todayTasksFromEggs((state.eggs||[]).filter(e=>e.status==='Inkuberas'));
   updateTaskProgressUI(tasks);
 }catch(e){}
}


if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// Task completion enhancements
function updateTaskProgressUI(tasks){
 const total=openTasksCount(tasks)+(tasks.filter(t=>state.completedTasks[(today()+'_'+t.id)]).length);
 const done=tasks.filter(t=>state.completedTasks[(today()+'_'+t.id)]).length;
 const remaining=total-done;
 const chip=document.querySelector('.farm-today-mini');
 if(chip){
   let el=document.getElementById('today-progress-chip');
   if(!el){
     el=document.createElement('span');
     el.id='today-progress-chip';
     el.className='status-chip';
     chip.appendChild(el);
   }
   el.textContent=`✅ ${done}/${total} klara`;
 }
 const tip=document.querySelector('.farm-today-tip');
 const status=document.querySelector('.farm-today-status');
 const text=document.querySelector('.farm-today-text');
 if(total>0 && remaining===0){
   if(status) status.textContent='🟢 Allt klart för idag';
   if(text) text.textContent='Alla planerade uppgifter är genomförda. PoultryMaster övervakar nu gården.';
   if(tip) tip.textContent='💡 Dagens tips: Gör gärna en sista visuell kontroll av djuren. Sedan är dagens rutiner klara.';
 }
}
const _oldDash=dash;
dash=function(){
 _oldDash();
 try{
   const tasks=todayTasksFromEggs((state.eggs||[]).filter(e=>e.status==='Inkuberas'));
   updateTaskProgressUI(tasks);
 }catch(e){}
}
