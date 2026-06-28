/* PoultryMaster v2.9.9 – Safe Chick I18N Form Fix
   Scope: only chick module + chick registration dialog.
   No MutationObserver. No event interception. No data changes. */
(function(){
  const KEY='egg_manager_v2';
  const D={
    sv:{add:'+ Lägg till',chicks:'Kycklingar',journalTitle:'🐣 Digital uppväxtjournal',journalText:'Följ varje kyckling från kläckning till flock: ålder, vikt, hälsa, utveckling och livsbok.',empty:'Inga kycklingar ännu.',register:'Registrera kyckling',edit:'Redigera kyckling',id:'Kyckling-ID / namn',linkedEgg:'Kopplat ägg',selectEgg:'Välj ägg',breed:'Ras',hatchDate:'Kläckdatum',sex:'Kön',unknown:'Okänt',hen:'Höna',rooster:'Tupp',status:'Status',alive:'Lever',observe:'Observeras',treatment:'Behandling',moved:'Flyttad till flock',dead:'Död',weight:'Vikt gram',mother:'Mor',father:'Far',ring:'Ringnummer',photo:'Bild / kamera',notes:'Anteckningar',save:'Spara',close:'Stäng',quickRegister:'🐣 Registrera kyckling'},
    en:{add:'+ Add',chicks:'Chicks',journalTitle:'🐣 Digital growth journal',journalText:'Follow each chick from hatch to flock: age, weight, health, development and life book.',empty:'No chicks yet.',register:'Register chick',edit:'Edit chick',id:'Chick ID / name',linkedEgg:'Linked egg',selectEgg:'Select egg',breed:'Breed',hatchDate:'Hatch date',sex:'Sex',unknown:'Unknown',hen:'Hen',rooster:'Rooster',status:'Status',alive:'Alive',observe:'Under observation',treatment:'Treatment',moved:'Moved to flock',dead:'Deceased',weight:'Weight (g)',mother:'Mother',father:'Father',ring:'Ring number',photo:'Photo / camera',notes:'Notes',save:'Save',close:'Close',quickRegister:'🐣 Register chick'},
    da:{add:'+ Tilføj',chicks:'Kyllinger',journalTitle:'🐣 Digital vækstjournal',journalText:'Følg hver kylling fra klækning til flok: alder, vægt, sundhed, udvikling og livsbog.',empty:'Ingen kyllinger endnu.',register:'Registrér kylling',edit:'Redigér kylling',id:'Kylling-ID / navn',linkedEgg:'Tilknyttet æg',selectEgg:'Vælg æg',breed:'Race',hatchDate:'Klækkedato',sex:'Køn',unknown:'Ukendt',hen:'Høne',rooster:'Hane',status:'Status',alive:'Lever',observe:'Observeres',treatment:'Behandling',moved:'Flyttet til flok',dead:'Død',weight:'Vægt (g)',mother:'Mor',father:'Far',ring:'Ringnummer',photo:'Billede / kamera',notes:'Noter',save:'Gem',close:'Luk',quickRegister:'🐣 Registrér kylling'},
    no:{add:'+ Legg til',chicks:'Kyllinger',journalTitle:'🐣 Digital vekstjournal',journalText:'Følg hver kylling fra klekking til flokk: alder, vekt, helse, utvikling og livsbok.',empty:'Ingen kyllinger ennå.',register:'Registrer kylling',edit:'Rediger kylling',id:'Kylling-ID / navn',linkedEgg:'Koblet egg',selectEgg:'Velg egg',breed:'Rase',hatchDate:'Klekkedato',sex:'Kjønn',unknown:'Ukjent',hen:'Høne',rooster:'Hane',status:'Status',alive:'Lever',observe:'Observeres',treatment:'Behandling',moved:'Flyttet til flokk',dead:'Død',weight:'Vekt (g)',mother:'Mor',father:'Far',ring:'Ringnummer',photo:'Bilde / kamera',notes:'Notater',save:'Lagre',close:'Lukk',quickRegister:'🐣 Registrer kylling'},
    fi:{add:'+ Lisää',chicks:'Poikaset',journalTitle:'🐣 Digitaalinen kasvupäiväkirja',journalText:'Seuraa jokaista poikasta kuoriutumisesta parveen: ikä, paino, terveys, kehitys ja elämänkirja.',empty:'Ei poikasia vielä.',register:'Lisää poikanen',edit:'Muokkaa poikasta',id:'Poikasen ID / nimi',linkedEgg:'Liitetty muna',selectEgg:'Valitse muna',breed:'Rotu',hatchDate:'Kuoriutumispäivä',sex:'Sukupuoli',unknown:'Tuntematon',hen:'Kana',rooster:'Kukko',status:'Status',alive:'Elossa',observe:'Tarkkailussa',treatment:'Hoito',moved:'Siirretty parveen',dead:'Kuollut',weight:'Paino (g)',mother:'Emo',father:'Isä',ring:'Rengasnumero',photo:'Kuva / kamera',notes:'Muistiinpanot',save:'Tallenna',close:'Sulje',quickRegister:'🐣 Lisää poikanen'}
  };
  function getState(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}}
  function lang(){return (getState().farmSettings||{}).language||'sv'}
  function tx(k){const l=lang();return (D[l]&&D[l][k])||D.sv[k]||k}
  function farm(){const fs=getState().farmSettings||{};return String(fs.farmName||'PoultryMaster').trim()||'PoultryMaster'}
  function norm(s){return String(s||'').trim().replace(/\s+/g,' ')}
  function put(el,v){if(el&&el.textContent!==v)el.textContent=v}
  const labelKey={
    'Kyckling-ID / namn':'id','Chick ID / name':'id','Kylling-ID / navn':'id','Poikasen ID / nimi':'id',
    'Kopplat ägg':'linkedEgg','Linked egg':'linkedEgg','Tilknyttet æg':'linkedEgg','Koblet egg':'linkedEgg','Liitetty muna':'linkedEgg',
    'Ras':'breed','Breed':'breed','Race':'breed','Rase':'breed','Rotu':'breed',
    'Kläckdatum':'hatchDate','Hatch date':'hatchDate','Klækkedato':'hatchDate','Klekkedato':'hatchDate','Kuoriutumispäivä':'hatchDate',
    'Kön':'sex','Sex':'sex','Køn':'sex','Kjønn':'sex','Sukupuoli':'sex','Status':'status',
    'Vikt gram':'weight','Weight (g)':'weight','Vægt (g)':'weight','Vekt (g)':'weight','Paino (g)':'weight',
    'Mor':'mother','Mother':'mother','Emo':'mother','Far':'father','Father':'father','Isä':'father',
    'Ringnummer':'ring','Ring number':'ring','Rengasnummer':'ring','Rengasnumero':'ring',
    'Bild / kamera':'photo','Photo / camera':'photo','Billede / kamera':'photo','Bilde / kamera':'photo','Kuva / kamera':'photo',
    'Anteckningar':'notes','Notes':'notes','Noter':'notes','Notater':'notes','Muistiinpanot':'notes'
  };
  const optionKey={
    'Välj ägg':'selectEgg','Select egg':'selectEgg','Vælg æg':'selectEgg','Velg egg':'selectEgg','Valitse muna':'selectEgg',
    'Okänt':'unknown','Unknown':'unknown','Ukendt':'unknown','Ukjent':'unknown','Tuntematon':'unknown',
    'Höna':'hen','Hen':'hen','Høne':'hen','Kana':'hen','Tupp':'rooster','Rooster':'rooster','Hane':'rooster','Kukko':'rooster',
    'Lever':'alive','Alive':'alive','Elossa':'alive','Observeras':'observe','Under observation':'observe','Observeres':'observe','Tarkkailussa':'observe',
    'Behandling':'treatment','Treatment':'treatment','Hoito':'treatment','Flyttad till flock':'moved','Moved to flock':'moved','Flyttet til flok':'moved','Flyttet til flokk':'moved','Siirretty parveen':'moved',
    'Död':'dead','Deceased':'dead','Kuollut':'dead'
  };
  function chickModalOpen(){
    const m=document.getElementById('modal'), f=document.getElementById('form');
    return !!(m&&m.classList.contains('active')&&f&&f.elements&&f.elements.hatchDate&&f.elements.ringNumber&&f.elements.eggId&&f.elements.gender);
  }
  function translateModal(){
    if(!chickModalOpen())return;
    const title=document.getElementById('modal-title');
    const old=norm(title&&title.textContent);
    const editing=/Redigera|Edit|Redigér|Rediger|Muokkaa/i.test(old);
    put(title,editing?tx('edit'):tx('register'));
    document.querySelectorAll('#fields label').forEach(label=>{const k=labelKey[norm(label.textContent)]; if(k)put(label,tx(k));});
    document.querySelectorAll('#fields select option').forEach(opt=>{const k=optionKey[norm(opt.textContent)]; if(k)opt.textContent=tx(k);});
    const submit=document.querySelector('#form button[type="submit"],#form button.btn.primary,#form button');
    if(submit)put(submit,tx('save'));
    const close=document.querySelector('#modal .x'); if(close)close.setAttribute('aria-label',tx('close'));
  }
  function translateView(){
    const s=document.getElementById('view-chicks'); if(!s)return;
    const h=s.querySelector('#chicks-title-main'); if(h)put(h,`${farm()} – ${tx('chicks')}`);
    const add=s.querySelector('button[data-action="add"][data-type="chick"]'); if(add)put(add,tx('add'));
    const ht=s.querySelector('.chick-hero-title'); if(ht)put(ht,tx('journalTitle'));
    const hb=s.querySelector('.chick-hero-text'); if(hb)put(hb,tx('journalText'));
    s.querySelectorAll('.empty,.card .body').forEach(el=>{if(/^No chicks yet\.|^Inga kycklingar ännu\.|^Ingen kyllinger/.test(norm(el.textContent))||norm(el.textContent)==='Ei poikasia vielä.')put(el,tx('empty'));});
  }
  function translateQuick(){document.querySelectorAll('[data-action="quick-add"][data-type="chick"]').forEach(b=>put(b,tx('quickRegister')))}
  function run(){try{translateView();translateModal();translateQuick()}catch(e){}}
  function later(){setTimeout(run,40);setTimeout(run,180);setTimeout(run,450)}
  function safeLaterFromEvent(e){
    const target=e&&e.target;
    /* Do not re-translate while Android's native select/file pickers are open.
       Rewriting option labels during a picker session can make the screen flicker. */
    if(target && target.closest && target.closest('#modal select,#modal input,#modal textarea')) return;
    later();
  }
  document.addEventListener('DOMContentLoaded',later);
  window.addEventListener('load',later);
  document.addEventListener('click',safeLaterFromEvent);
  window.addEventListener('storage',later);
  later();
})();