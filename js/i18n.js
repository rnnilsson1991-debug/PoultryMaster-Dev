/* PoultryMaster v2.10.3 – Full I18N Runtime Revision
   Scope: user-visible text only. No layout, CSS, data model, or app logic changes.
   Supported languages: sv, en, da, no, fi. */
(function(){
  if(window.__PM_FULL_I18N_102__) return;
  window.__PM_FULL_I18N_102__ = true;

  const STORE_KEY = 'egg_manager_v2';

  const L = {
    sv:{
      tagline:'Komplett hantering av inkubering, flock och avel',
      overview:'Översikt', eggs:'Ägg', candling:'Lysning', chicks:'Kycklingar', flock:'Flock', laying:'Värpning',
      statistics:'Statistik', settings:'Inställningar', farmJournal:'Gårdsjournal', machines:'Maskiner',
      reportsTrends:'Rapporter och trender', appSettings:'Appinställningar', farmTimeline:'Gårdens tidslinje', incubatorAccessories:'Kläckare och tillbehör',
      activeEggs:'Aktiva ägg', incubators:'Kläckare', active:'Aktiva', stopped:'Avbrutna', uncertain:'Osäkra', hatched:'Kläckta',
      today:'idag', day:'Dag', of:'av', inOperation:'i drift', registered:'registrerade', hatchedLower:'kläckta',
      registerEvent:'Registrera ny händelse', registerSub:'Ägg, lysning, kycklingar, hälsa, vikt m.m.',
      mostImportant:'Viktigast idag', upcomingNotDone:'Kommande (ej utförda)', activeHatches:'Aktiva kläckningar',
      back:'← Tillbaka', add:'Lägg till', edit:'Redigera', delete:'Ta bort', save:'Spara', cancel:'Avbryt', close:'Stäng',
      lifeBook:'Livsbok', addEgg:'+ Lägg till ägg', manageIncubators:'Hantera kläckare',
      todayTip:'Dagens tips', keepTempWater:'Håll temperatur och vattennivå stabilt.',
      candlingDay:'Lysningsdag', candlingTodayMsg:'{n} ägg ska lysas idag. Logga resultatet direkt efter varje ägg.',
      lockdownToday:'Lockdown idag', lockdownTodayMsg:'{n} ägg går in i lockdown idag. Sluta vända och höj luftfuktigheten enligt plan.',
      hatchClose:'Kläckning nära', hatchCloseMsg:'{n} ägg är vid kläckdag eller passerad beräknad kläckning. Öppna inte kläckaren i onödan.',
      stableStopped:'Stabilt med avbrutna ägg', stableStoppedMsg:'{active} ägg är aktiva och {stopped} har avbrutits. Läget är under kontroll.',
      stable:'Stabilt läge', stableMsg:'Allt ser stabilt ut idag. Öppna korten för mer detaljer.',
      allDoneToday:'Allt klart för idag', allTasksDoneMsg:'Alla planerade uppgifter är genomförda. PoultryMaster fortsätter hålla koll på gården.',
      allTasksDoneTip:'Bra jobbat. Nu återstår normal tillsyn och att hålla kläckaren stabil.',
      firstCandling:'Första lysning', secondCandling:'Andra lysning', lockdown:'Lockdown', hatchDay:'Kläckdag', estimatedHatch:'Beräknad kläckning',
      nextEvent:'Nästa händelse', candlingToday:'lysning idag', inDays:'om {n} dagar', inOneDay:'om 1 dag', todayLower:'idag',
      eggsInIncubator:'{n} ägg i kläckare', survivalRate:'Överlevnadsgrad', plannedRoutine:'Planerad rutin',
      noActiveHatches:'Inga aktiva kläckningar ännu.', noRecords:'Inga registrerade ännu', noHistory:'Ingen historik ännu.',
      farmJournalIntro:'Här samlas allt som händer på gården. Registrering sker från startsidans gröna knapp, medan journalen visar dagens arbete, kommande rutiner och historiken.',
      todaySection:'IDAG', upcoming:'KOMMANDE', history:'HISTORIK',
      statsHatching:'Kläckning', statsLaying:'Värpning', statsBreeding:'Avel', statsHealth:'Hälsa', statsHall:'Hall',
      hatchBatches:'Kläckomgångar', totalBatches:'Totalt omgångar', activeBatches:'Aktiva omgångar', finishedBatches:'Avslutade omgångar', manual:'Manuella',
      newBatch:'+ Ny omgång', batchTip:'Tips: skapa en omgång och välj den när du registrerar ägg. Gamla ägg utan omgång grupperas automatiskt efter startdatum.',
      started:'Startade', totalIncubated:'Totalt inkuberade', activeNow:'Aktiva just nu',
      hatchAnalysisHistory:'Kläckanalys & historik', lossesByStage:'Förluster per stadium',
      beforeDay8:'Före / omkring dag 8', day8to14:'Dag 8–14', day14to21:'Dag 14–21',
      noFinishedBatches:'Inga avslutade omgångar ännu.', noActiveBatches:'Inga aktiva omgångar ännu.',
      total:'Totalt', hens:'Hönor', roosters:'Tuppar', unknown:'Okända', noBirds:'Inga fåglar ännu.',
      eggsToday:'Ägg idag', last7:'Senaste 7 dagar', last30:'Senaste 30 dagar', bestHen:'Bästa höna', averageWeight:'Medelvikt', breedingEggs:'Avelsägg', doubleYolks:'Dubbelgulor',
      noLayingLogs:'Inga värpningar loggade ännu.',
      breed:'Ras', sex:'Kön', status:'Status', notes:'Anteckningar', origin:'Ursprung', mother:'Mor', father:'Far', ringNumber:'Ringnummer',
      nameId:'Namn / ID', hatchDate:'Kläckdatum', photoCamera:'Bild / kamera', unknownGender:'Okänt'
    },
    en:{
      tagline:'Complete management of incubation, flock and breeding',
      overview:'Overview', eggs:'Eggs', candling:'Candling', chicks:'Chicks', flock:'Flock', laying:'Laying',
      statistics:'Statistics', settings:'Settings', farmJournal:'Farm journal', machines:'Machines',
      reportsTrends:'Reports and trends', appSettings:'App settings', farmTimeline:'Farm timeline', incubatorAccessories:'Incubators and accessories',
      activeEggs:'Active eggs', incubators:'Incubators', active:'Active', stopped:'Stopped', uncertain:'Uncertain', hatched:'Hatched',
      today:'today', day:'Day', of:'of', inOperation:'in operation', registered:'registered', hatchedLower:'hatched',
      registerEvent:'Register new event', registerSub:'Eggs, candling, chicks, health, weight, etc.',
      mostImportant:'Most important today', upcomingNotDone:'Upcoming (not completed)', activeHatches:'Active hatches',
      back:'← Back', add:'Add', edit:'Edit', delete:'Delete', save:'Save', cancel:'Cancel', close:'Close',
      lifeBook:'Life book', addEgg:'+ Add egg', manageIncubators:'Manage incubators',
      todayTip:'Today’s tip', keepTempWater:'Keep temperature and water level stable.',
      candlingDay:'Candling day', candlingTodayMsg:'{n} eggs should be candled today. Log the result immediately after each egg.',
      lockdownToday:'Lockdown today', lockdownTodayMsg:'{n} eggs enter lockdown today. Stop turning and raise humidity according to plan.',
      hatchClose:'Hatch is close', hatchCloseMsg:'{n} eggs are at hatch day or past the estimated hatch date. Do not open the incubator unnecessarily.',
      stableStopped:'Stable with stopped eggs', stableStoppedMsg:'{active} eggs are active and {stopped} have been stopped. Everything is under control.',
      stable:'Stable status', stableMsg:'Everything looks stable today. Open the cards for more details.',
      allDoneToday:'All done for today', allTasksDoneMsg:'All planned tasks are completed. PoultryMaster keeps monitoring the farm.',
      allTasksDoneTip:'Good work. Now normal supervision remains — keep the incubator stable.',
      firstCandling:'First candling', secondCandling:'Second candling', lockdown:'Lockdown', hatchDay:'Hatch day', estimatedHatch:'Estimated hatch',
      nextEvent:'Next event', candlingToday:'candling today', inDays:'in {n} days', inOneDay:'in 1 day', todayLower:'today',
      eggsInIncubator:'{n} eggs in incubator', survivalRate:'Survival rate', plannedRoutine:'Planned routine',
      noActiveHatches:'No active hatches yet.', noRecords:'No records yet', noHistory:'No history yet.',
      farmJournalIntro:'Everything that happens on the farm is collected here. Registration is done from the green button on the dashboard, while the journal shows today’s work, upcoming routines and history.',
      todaySection:'TODAY', upcoming:'UPCOMING', history:'HISTORY',
      statsHatching:'Hatching', statsLaying:'Laying', statsBreeding:'Breeding', statsHealth:'Health', statsHall:'Hall',
      hatchBatches:'Hatch batches', totalBatches:'Total batches', activeBatches:'Active batches', finishedBatches:'Finished batches', manual:'Manual',
      newBatch:'+ New batch', batchTip:'Tip: create a batch and select it when registering eggs. Old eggs without a batch are automatically grouped by start date.',
      started:'Started', totalIncubated:'Total incubated', activeNow:'Active now',
      hatchAnalysisHistory:'Hatch analysis & history', lossesByStage:'Losses by stage',
      beforeDay8:'Before / around day 8', day8to14:'Day 8–14', day14to21:'Day 14–21',
      noFinishedBatches:'No finished batches yet.', noActiveBatches:'No active batches yet.',
      total:'Total', hens:'Hens', roosters:'Roosters', unknown:'Unknown', noBirds:'No birds yet.',
      eggsToday:'Eggs today', last7:'Last 7 days', last30:'Last 30 days', bestHen:'Best hen', averageWeight:'Average weight', breedingEggs:'Breeding eggs', doubleYolks:'Double yolks',
      noLayingLogs:'No laying logs yet.',
      breed:'Breed', sex:'Sex', status:'Status', notes:'Notes', origin:'Origin', mother:'Mother', father:'Father', ringNumber:'Ring number',
      nameId:'Name / ID', hatchDate:'Hatch date', photoCamera:'Photo / camera', unknownGender:'Unknown'
    },
    da:{
      tagline:'Komplet håndtering af rugning, flok og avl',
      overview:'Oversigt', eggs:'Æg', candling:'Lysning', chicks:'Kyllinger', flock:'Flok', laying:'Æglægning',
      statistics:'Statistik', settings:'Indstillinger', farmJournal:'Gårdsjournal', machines:'Maskiner',
      reportsTrends:'Rapporter og trends', appSettings:'Appindstillinger', farmTimeline:'Gårdens tidslinje', incubatorAccessories:'Rugemaskiner og tilbehør',
      activeEggs:'Aktive æg', incubators:'Rugemaskiner', active:'Aktive', stopped:'Stoppede', uncertain:'Usikre', hatched:'Klækkede',
      today:'i dag', day:'Dag', of:'af', inOperation:'i drift', registered:'registreret', hatchedLower:'klækket',
      registerEvent:'Registrér ny hændelse', registerSub:'Æg, lysning, kyllinger, sundhed, vægt m.m.',
      mostImportant:'Vigtigst i dag', upcomingNotDone:'Kommende (ikke udført)', activeHatches:'Aktive klækninger',
      back:'← Tilbage', add:'Tilføj', edit:'Redigér', delete:'Slet', save:'Gem', cancel:'Annuller', close:'Luk',
      lifeBook:'Livsbog', addEgg:'+ Tilføj æg', manageIncubators:'Administrér rugemaskiner',
      todayTip:'Dagens tip', keepTempWater:'Hold temperatur og vandniveau stabilt.',
      candlingDay:'Lysningsdag', candlingTodayMsg:'{n} æg skal lyses i dag. Log resultatet direkte efter hvert æg.',
      lockdownToday:'Lockdown i dag', lockdownTodayMsg:'{n} æg går i lockdown i dag. Stop vending og hæv fugtigheden efter planen.',
      hatchClose:'Klækning tæt på', hatchCloseMsg:'{n} æg er på klækkedag eller forbi forventet klækning. Åbn ikke rugemaskinen unødigt.',
      stableStopped:'Stabilt med stoppede æg', stableStoppedMsg:'{active} æg er aktive og {stopped} er stoppede. Situationen er under kontrol.',
      stable:'Stabil status', stableMsg:'Alt ser stabilt ud i dag. Åbn kortene for flere detaljer.',
      allDoneToday:'Alt klart for i dag', allTasksDoneMsg:'Alle planlagte opgaver er udført. PoultryMaster holder fortsat øje med gården.',
      allTasksDoneTip:'Godt arbejde. Nu mangler kun normalt tilsyn — hold rugemaskinen stabil.',
      firstCandling:'Første lysning', secondCandling:'Anden lysning', lockdown:'Lockdown', hatchDay:'Klækkedag', estimatedHatch:'Forventet klækning',
      nextEvent:'Næste hændelse', candlingToday:'lysning i dag', inDays:'om {n} dage', inOneDay:'om 1 dag', todayLower:'i dag',
      eggsInIncubator:'{n} æg i rugemaskine', survivalRate:'Overlevelsesgrad', plannedRoutine:'Planlagt rutine',
      noActiveHatches:'Ingen aktive klækninger endnu.', noRecords:'Ingen registreringer endnu', noHistory:'Ingen historik endnu.',
      farmJournalIntro:'Her samles alt, der sker på gården. Registrering sker fra den grønne knap på oversigten, mens journalen viser dagens arbejde, kommende rutiner og historik.',
      todaySection:'I DAG', upcoming:'KOMMENDE', history:'HISTORIK',
      statsHatching:'Klækning', statsLaying:'Æglægning', statsBreeding:'Avl', statsHealth:'Sundhed', statsHall:'Hall',
      hatchBatches:'Klækkehold', totalBatches:'Hold i alt', activeBatches:'Aktive hold', finishedBatches:'Afsluttede hold', manual:'Manuelle',
      newBatch:'+ Nyt hold', batchTip:'Tip: opret et hold og vælg det, når du registrerer æg. Gamle æg uden hold grupperes automatisk efter startdato.',
      started:'Startede', totalIncubated:'Rugede i alt', activeNow:'Aktive nu',
      hatchAnalysisHistory:'Klækkeanalyse & historik', lossesByStage:'Tab pr. stadie',
      beforeDay8:'Før / omkring dag 8', day8to14:'Dag 8–14', day14to21:'Dag 14–21',
      noFinishedBatches:'Ingen afsluttede hold endnu.', noActiveBatches:'Ingen aktive hold endnu.',
      total:'Total', hens:'Høner', roosters:'Haner', unknown:'Ukendte', noBirds:'Ingen fugle endnu.',
      eggsToday:'Æg i dag', last7:'Sidste 7 dage', last30:'Sidste 30 dage', bestHen:'Bedste høne', averageWeight:'Gennemsnitsvægt', breedingEggs:'Avlsæg', doubleYolks:'Dobbelte blommer',
      noLayingLogs:'Ingen æglægningslogge endnu.',
      breed:'Race', sex:'Køn', status:'Status', notes:'Noter', origin:'Oprindelse', mother:'Mor', father:'Far', ringNumber:'Ringnummer',
      nameId:'Navn / ID', hatchDate:'Klækkedato', photoCamera:'Billede / kamera', unknownGender:'Ukendt'
    },
    no:{
      tagline:'Komplett håndtering av ruging, flokk og avl',
      overview:'Oversikt', eggs:'Egg', candling:'Lysing', chicks:'Kyllinger', flock:'Flokk', laying:'Egglegging',
      statistics:'Statistikk', settings:'Innstillinger', farmJournal:'Gårdsjournal', machines:'Maskiner',
      reportsTrends:'Rapporter og trender', appSettings:'Appinnstillinger', farmTimeline:'Gårdens tidslinje', incubatorAccessories:'Rugemaskiner og tilbehør',
      activeEggs:'Aktive egg', incubators:'Rugemaskiner', active:'Aktive', stopped:'Stoppet', uncertain:'Usikre', hatched:'Klekket',
      today:'i dag', day:'Dag', of:'av', inOperation:'i drift', registered:'registrert', hatchedLower:'klekket',
      registerEvent:'Registrer ny hendelse', registerSub:'Egg, lysing, kyllinger, helse, vekt m.m.',
      mostImportant:'Viktigst i dag', upcomingNotDone:'Kommende (ikke utført)', activeHatches:'Aktive klekkinger',
      back:'← Tilbake', add:'Legg til', edit:'Rediger', delete:'Slett', save:'Lagre', cancel:'Avbryt', close:'Lukk',
      lifeBook:'Livsbok', addEgg:'+ Legg til egg', manageIncubators:'Administrer rugemaskiner',
      todayTip:'Dagens tips', keepTempWater:'Hold temperatur og vannnivå stabilt.',
      candlingDay:'Lysingsdag', candlingTodayMsg:'{n} egg skal lyses i dag. Logg resultatet rett etter hvert egg.',
      lockdownToday:'Lockdown i dag', lockdownTodayMsg:'{n} egg går i lockdown i dag. Stopp vending og øk fuktigheten etter planen.',
      hatchClose:'Klekking nær', hatchCloseMsg:'{n} egg er på klekkedag eller forbi beregnet klekking. Ikke åpne rugemaskinen unødvendig.',
      stableStopped:'Stabilt med stoppede egg', stableStoppedMsg:'{active} egg er aktive og {stopped} er stoppet. Situasjonen er under kontroll.',
      stable:'Stabil status', stableMsg:'Alt ser stabilt ut i dag. Åpne kortene for flere detaljer.',
      allDoneToday:'Alt klart for i dag', allTasksDoneMsg:'Alle planlagte oppgaver er fullført. PoultryMaster fortsetter å følge med på gården.',
      allTasksDoneTip:'Godt jobbet. Nå gjenstår normalt tilsyn — hold rugemaskinen stabil.',
      firstCandling:'Første lysing', secondCandling:'Andre lysing', lockdown:'Lockdown', hatchDay:'Klekkedag', estimatedHatch:'Beregnet klekking',
      nextEvent:'Neste hendelse', candlingToday:'lysing i dag', inDays:'om {n} dager', inOneDay:'om 1 dag', todayLower:'i dag',
      eggsInIncubator:'{n} egg i rugemaskin', survivalRate:'Overlevelsesgrad', plannedRoutine:'Planlagt rutine',
      noActiveHatches:'Ingen aktive klekkinger ennå.', noRecords:'Ingen registreringer ennå', noHistory:'Ingen historikk ennå.',
      farmJournalIntro:'Her samles alt som skjer på gården. Registrering gjøres fra den grønne knappen på oversikten, mens journalen viser dagens arbeid, kommende rutiner og historikk.',
      todaySection:'I DAG', upcoming:'KOMMENDE', history:'HISTORIKK',
      statsHatching:'Klekking', statsLaying:'Egglegging', statsBreeding:'Avl', statsHealth:'Helse', statsHall:'Hall',
      hatchBatches:'Klekkeomganger', totalBatches:'Totalt omganger', activeBatches:'Aktive omganger', finishedBatches:'Avsluttede omganger', manual:'Manuelle',
      newBatch:'+ Ny omgang', batchTip:'Tips: opprett en omgang og velg den når du registrerer egg. Gamle egg uten omgang grupperes automatisk etter startdato.',
      started:'Startet', totalIncubated:'Totalt ruget', activeNow:'Aktive nå',
      hatchAnalysisHistory:'Klekkeanalyse & historikk', lossesByStage:'Tap per stadium',
      beforeDay8:'Før / rundt dag 8', day8to14:'Dag 8–14', day14to21:'Dag 14–21',
      noFinishedBatches:'Ingen avsluttede omganger ennå.', noActiveBatches:'Ingen aktive omganger ennå.',
      total:'Totalt', hens:'Høner', roosters:'Haner', unknown:'Ukjente', noBirds:'Ingen fugler ennå.',
      eggsToday:'Egg i dag', last7:'Siste 7 dager', last30:'Siste 30 dager', bestHen:'Beste høne', averageWeight:'Gjennomsnittsvekt', breedingEggs:'Avlsegg', doubleYolks:'Dobbelplommer',
      noLayingLogs:'Ingen eggleggingslogger ennå.',
      breed:'Rase', sex:'Kjønn', status:'Status', notes:'Notater', origin:'Opprinnelse', mother:'Mor', father:'Far', ringNumber:'Ringnummer',
      nameId:'Navn / ID', hatchDate:'Klekkedato', photoCamera:'Bilde / kamera', unknownGender:'Ukjent'
    },
    fi:{
      tagline:'Täydellinen haudonnan, parven ja jalostuksen hallinta',
      overview:'Yleiskatsaus', eggs:'Munat', candling:'Läpivalaisu', chicks:'Poikaset', flock:'Parvi', laying:'Muninta',
      statistics:'Tilastot', settings:'Asetukset', farmJournal:'Tilapäiväkirja', machines:'Laitteet',
      reportsTrends:'Raportit ja trendit', appSettings:'Sovelluksen asetukset', farmTimeline:'Tilan aikajana', incubatorAccessories:'Hautomakoneet ja tarvikkeet',
      activeEggs:'Aktiiviset munat', incubators:'Hautomakoneet', active:'Aktiiviset', stopped:'Keskeytetyt', uncertain:'Epävarmat', hatched:'Kuoriutuneet',
      today:'tänään', day:'Päivä', of:'/', inOperation:'käytössä', registered:'rekisteröity', hatchedLower:'kuoriutunut',
      registerEvent:'Lisää uusi tapahtuma', registerSub:'Munat, läpivalaisu, poikaset, terveys, paino jne.',
      mostImportant:'Tärkeintä tänään', upcomingNotDone:'Tulossa (ei tehty)', activeHatches:'Aktiiviset kuoriutumiset',
      back:'← Takaisin', add:'Lisää', edit:'Muokkaa', delete:'Poista', save:'Tallenna', cancel:'Peruuta', close:'Sulje',
      lifeBook:'Elämänkirja', addEgg:'+ Lisää muna', manageIncubators:'Hallinnoi hautomakoneita',
      todayTip:'Päivän vinkki', keepTempWater:'Pidä lämpötila ja veden taso vakaana.',
      candlingDay:'Läpivalaisupäivä', candlingTodayMsg:'{n} munaa pitää läpivalaista tänään. Kirjaa tulos heti jokaisen munan jälkeen.',
      lockdownToday:'Lockdown tänään', lockdownTodayMsg:'{n} munaa siirtyy lockdown-vaiheeseen tänään. Lopeta kääntö ja nosta kosteus suunnitelman mukaan.',
      hatchClose:'Kuoriutuminen lähellä', hatchCloseMsg:'{n} munaa on kuoriutumispäivässä tai arvioitu päivä on ohitettu. Älä avaa hautomakonetta turhaan.',
      stableStopped:'Vakaa, keskeytettyjä munia', stableStoppedMsg:'{active} munaa on aktiivisia ja {stopped} on keskeytetty. Tilanne on hallinnassa.',
      stable:'Vakaa tila', stableMsg:'Kaikki näyttää vakaalta tänään. Avaa kortit nähdäksesi lisätiedot.',
      allDoneToday:'Kaikki valmista tänään', allTasksDoneMsg:'Kaikki suunnitellut tehtävät on tehty. PoultryMaster jatkaa tilan seurantaa.',
      allTasksDoneTip:'Hyvää työtä. Nyt riittää normaali valvonta — pidä hautomakone vakaana.',
      firstCandling:'Ensimmäinen läpivalaisu', secondCandling:'Toinen läpivalaisu', lockdown:'Lockdown', hatchDay:'Kuoriutumispäivä', estimatedHatch:'Arvioitu kuoriutuminen',
      nextEvent:'Seuraava tapahtuma', candlingToday:'läpivalaisu tänään', inDays:'{n} päivän kuluttua', inOneDay:'1 päivän kuluttua', todayLower:'tänään',
      eggsInIncubator:'{n} munaa hautomakoneessa', survivalRate:'Selviytymisaste', plannedRoutine:'Suunniteltu rutiini',
      noActiveHatches:'Ei aktiivisia kuoriutumisia vielä.', noRecords:'Ei merkintöjä vielä', noHistory:'Ei historiaa vielä.',
      farmJournalIntro:'Tänne kerätään kaikki tilalla tapahtuva. Rekisteröinti tehdään yleiskatsauksen vihreästä painikkeesta, ja päiväkirja näyttää päivän työt, tulevat rutiinit ja historian.',
      todaySection:'TÄNÄÄN', upcoming:'TULOSSA', history:'HISTORIA',
      statsHatching:'Kuoriutuminen', statsLaying:'Muninta', statsBreeding:'Jalostus', statsHealth:'Terveys', statsHall:'Hall',
      hatchBatches:'Kuoriutumiserät', totalBatches:'Erät yhteensä', activeBatches:'Aktiiviset erät', finishedBatches:'Päättyneet erät', manual:'Manuaaliset',
      newBatch:'+ Uusi erä', batchTip:'Vinkki: luo erä ja valitse se munia rekisteröidessä. Vanhat munat ilman erää ryhmitellään automaattisesti aloituspäivän mukaan.',
      started:'Aloitettu', totalIncubated:'Haudottu yhteensä', activeNow:'Aktiiviset nyt',
      hatchAnalysisHistory:'Kuoriutumisanalyysi ja historia', lossesByStage:'Menetykset vaiheittain',
      beforeDay8:'Ennen / noin päivä 8', day8to14:'Päivä 8–14', day14to21:'Päivä 14–21',
      noFinishedBatches:'Ei päättyneitä eriä vielä.', noActiveBatches:'Ei aktiivisia eriä vielä.',
      total:'Yhteensä', hens:'Kanat', roosters:'Kukot', unknown:'Tuntemattomat', noBirds:'Ei lintuja vielä.',
      eggsToday:'Munia tänään', last7:'Viimeiset 7 päivää', last30:'Viimeiset 30 päivää', bestHen:'Paras kana', averageWeight:'Keskipaino', breedingEggs:'Siitosmunat', doubleYolks:'Kaksoiskeltuaiset',
      noLayingLogs:'Munintamerkintöjä ei vielä ole.',
      breed:'Rotu', sex:'Sukupuoli', status:'Tila', notes:'Muistiinpanot', origin:'Alkuperä', mother:'Emo', father:'Isä', ringNumber:'Rengasnumero',
      nameId:'Nimi / ID', hatchDate:'Kuoriutumispäivä', photoCamera:'Kuva / kamera', unknownGender:'Tuntematon'
    }
  };

  function readState(){
    try{return JSON.parse(localStorage.getItem(STORE_KEY)||'{}')||{}}catch(e){return {}}
  }
  function lang(){
    const s=readState();
    const raw=((s.farmSettings||{}).language || (s.settings||{}).language || document.documentElement.lang || 'sv');
    const v=String(raw).toLowerCase();
    if(v.startsWith('en')||v==='english')return 'en';
    if(v.startsWith('da')||v==='dansk')return 'da';
    if(v.startsWith('no')||v.startsWith('nb')||v.startsWith('nn')||v==='norsk')return 'no';
    if(v.startsWith('fi')||v==='suomi')return 'fi';
    return 'sv';
  }
  function tx(k){const l=lang();return (L[l]&&L[l][k]) || (L.sv&&L.sv[k]) || k}
  function fmt(s,o){return String(s||'').replace(/\{(\w+)\}/g,function(_,k){return o&&o[k]!=null?o[k]:''})}
  function norm(s){return String(s||'').replace(/\s+/g,' ').trim()}
  function setText(el,val){if(el && typeof val==='string' && el.textContent!==val) el.textContent=val}

  const exactKey = {
    'Komplett hantering av inkubering, flock och avel':'tagline',
    'Complete management of incubation, flock and breeding':'tagline',
    'Översikt':'overview','Overview':'overview','Oversigt':'overview','Yleiskatsaus':'overview',
    'Ägg':'eggs','Eggs':'eggs','Æg':'eggs','Egg':'eggs','Munat':'eggs',
    'Lysning':'candling','Candling':'candling','Lysing':'candling','Läpivalaisu':'candling',
    'Kycklingar':'chicks','Chicks':'chicks','Kyllinger':'chicks','Poikaset':'chicks',
    'Flock':'flock','Flok':'flock','Flokk':'flock','Parvi':'flock',
    'Värpning':'laying','Laying':'laying','Æglægning':'laying','Egglegging':'laying','Muninta':'laying',
    'Statistik':'statistics','Statistics':'statistics','Statistikk':'statistics','Tilastot':'statistics',
    'Inställningar':'settings','Settings':'settings','Indstillinger':'settings','Innstillinger':'settings','Asetukset':'settings',
    'Gårdsjournal':'farmJournal','Farm journal':'farmJournal','Tilapäiväkirja':'farmJournal',
    'Maskiner':'machines','Machines':'machines','Laitteet':'machines',
    'Aktiva ägg':'activeEggs','Active eggs':'activeEggs','Aktive æg':'activeEggs','Aktive egg':'activeEggs','Aktiiviset munat':'activeEggs',
    'Kläckare':'incubators','Incubators':'incubators','Rugemaskiner':'incubators','Hautomakoneet':'incubators',
    'Rapporter och trender':'reportsTrends','Reports and trends':'reportsTrends','Rapporter og trender':'reportsTrends','Raportit ja trendit':'reportsTrends',
    'Appinställningar':'appSettings','App settings':'appSettings','Appindstillinger':'appSettings','Appinnstillinger':'appSettings','Sovelluksen asetukset':'appSettings',
    'Gårdens tidslinje':'farmTimeline','Farm timeline':'farmTimeline','Tilan aikajana':'farmTimeline',
    'Kläckare och tillbehör':'incubatorAccessories','Incubators and accessories':'incubatorAccessories','Rugemaskiner og tilbehør':'incubatorAccessories','Hautomakoneet ja tarvikkeet':'incubatorAccessories',
    'Registrera ny händelse':'registerEvent','Register new event':'registerEvent','Registrér ny hændelse':'registerEvent','Registrer ny hendelse':'registerEvent','Lisää uusi tapahtuma':'registerEvent',
    'Ägg, lysning, kycklingar, hälsa, vikt m.m.':'registerSub','Eggs, candling, chicks, health, weight, etc.':'registerSub','Munat, läpivalaisu, poikaset, terveys, paino jne.':'registerSub',
    'Viktigast idag':'mostImportant','Most important today':'mostImportant','Tärkeintä tänään':'mostImportant',
    'Kommande (ej utförda)':'upcomingNotDone','Upcoming (not completed)':'upcomingNotDone',
    'Aktiva kläckningar':'activeHatches','Active hatches':'activeHatches','Aktiiviset kuoriutumiset':'activeHatches',
    '← Tillbaka':'back','← Back':'back','← Tilbage':'back','← Takaisin':'back',
    'Lägg till':'add','Add':'add','Tilføj':'add','Legg til':'add','Lisää':'add',
    'Redigera':'edit','Edit':'edit','Redigér':'edit','Rediger':'edit','Muokkaa':'edit',
    'Ta bort':'delete','Delete':'delete','Slet':'delete','Poista':'delete',
    'Spara':'save','Save':'save','Gem':'save','Lagre':'save','Tallenna':'save',
    'Livsbok':'lifeBook','Life book':'lifeBook','Livsbog':'lifeBook','Elämänkirja':'lifeBook',
    'Dagens tips':'todayTip','Today’s tip':'todayTip','Today\'s tip':'todayTip','Päivän vinkki':'todayTip',
    'Håll temperatur och vattennivå stabilt.':'keepTempWater','Keep temperature and water level stable.':'keepTempWater',
    'Lysningsdag':'candlingDay','Candling day':'candlingDay','Läpivalaisupäivä':'candlingDay',
    'Stabilt med avbrutna ägg':'stableStopped','Stable with stopped eggs':'stableStopped',
    'Allt klart för idag':'allDoneToday','All done for today':'allDoneToday',
    'Första lysning':'firstCandling','First candling':'firstCandling',
    'Andra lysning':'secondCandling','Second candling':'secondCandling',
    'Lockdown':'lockdown',
    'Kläckdag':'hatchDay','Hatch day':'hatchDay',
    'Beräknad kläckning':'estimatedHatch','Estimated hatch':'estimatedHatch',
    'Nästa händelse':'nextEvent','Next event':'nextEvent',
    'Planerad rutin':'plannedRoutine','Planned routine':'plannedRoutine',
    'Överlevnadsgrad':'survivalRate','Survival rate':'survivalRate',
    'Inga aktiva kläckningar ännu.':'noActiveHatches','No active hatches yet.':'noActiveHatches',
    'Inga registrerade ännu':'noRecords','No records yet':'noRecords',
    'Ingen historik ännu.':'noHistory','No history yet.':'noHistory',
    'IDAG':'todaySection','TODAY':'todaySection','KOMMANDE':'upcoming','UPCOMING':'upcoming','HISTORIK':'history','HISTORY':'history',
    'Kläckning':'statsHatching','Hatching':'statsHatching',
    'Avel':'statsBreeding','Breeding':'statsBreeding',
    'Hälsa':'statsHealth','Health':'statsHealth',
    'Hall':'statsHall',
    'Kläckomgångar':'hatchBatches','Hatch batches':'hatchBatches',
    'Totalt omgångar':'totalBatches','Total batches':'totalBatches',
    'Aktiva omgångar':'activeBatches','Active batches':'activeBatches',
    'Avslutade omgångar':'finishedBatches','Finished batches':'finishedBatches',
    'Manuella':'manual','Manual':'manual',
    '+ Ny omgång':'newBatch','+ New batch':'newBatch',
    'Startade':'started','Started':'started',
    'Totalt inkuberade':'totalIncubated','Total incubated':'totalIncubated',
    'Aktiva just nu':'activeNow','Active now':'activeNow',
    'Kläckanalys & historik':'hatchAnalysisHistory','Hatch analysis & history':'hatchAnalysisHistory',
    'Förluster per stadium':'lossesByStage','Losses by stage':'lossesByStage',
    'Före / omkring dag 8':'beforeDay8','Before / around day 8':'beforeDay8',
    'Dag 8–14':'day8to14','Day 8–14':'day8to14',
    'Dag 14–21':'day14to21','Day 14–21':'day14to21',
    'Inga avslutade omgångar ännu.':'noFinishedBatches','No finished batches yet.':'noFinishedBatches',
    'Inga aktiva omgångar ännu.':'noActiveBatches','No active batches yet.':'noActiveBatches',
    'Totalt':'total','Total':'total','Hönor':'hens','Hens':'hens','Tuppar':'roosters','Roosters':'roosters','Okända':'unknown','Unknown':'unknown',
    'Inga fåglar ännu.':'noBirds','No birds yet.':'noBirds',
    'Ägg idag':'eggsToday','Eggs today':'eggsToday',
    'Senaste 7 dagar':'last7','Last 7 days':'last7',
    'Senaste 30 dagar':'last30','Last 30 days':'last30',
    'Bästa höna':'bestHen','Best hen':'bestHen',
    'Medelvikt':'averageWeight','Average weight':'averageWeight',
    'Avelsägg':'breedingEggs','Breeding eggs':'breedingEggs',
    'Dubbelgulor':'doubleYolks','Double yolks':'doubleYolks',
    'Inga värpningar loggade ännu.':'noLayingLogs','No laying logs yet.':'noLayingLogs',
    'Ras':'breed','Breed':'breed','Kön':'sex','Sex':'sex','Status':'status',
    'Anteckningar':'notes','Notes':'notes','Ursprung':'origin','Origin':'origin',
    'Mor':'mother','Mother':'mother','Far':'father','Father':'father',
    'Ringnummer':'ringNumber','Ring number':'ringNumber',
    'Namn / ID':'nameId','Name / ID':'nameId',
    'Kläckdatum':'hatchDate','Hatch date':'hatchDate',
    'Bild / kamera':'photoCamera','Photo / camera':'photoCamera',
    'Okänt':'unknownGender'
  };

  function translateExactText(s){
    const k = exactKey[norm(s)];
    return k ? tx(k) : null;
  }

  function translateDynamic(s){
    let n = norm(s);
    if(!n) return null;

    let m;
    if((m=n.match(/^(\d+)\s+ägg ska lysas idag\. Logga resultatet direkt efter varje ägg\.$/))) return fmt(tx('candlingTodayMsg'),{n:m[1]});
    if((m=n.match(/^(\d+)\s+eggs should be candled today\. Log the result immediately after each egg\.$/))) return fmt(tx('candlingTodayMsg'),{n:m[1]});
    if((m=n.match(/^(\d+)\s+ägg går in i lockdown idag\..*$/))) return fmt(tx('lockdownTodayMsg'),{n:m[1]});
    if((m=n.match(/^(\d+)\s+ägg är vid kläckdag.*$/))) return fmt(tx('hatchCloseMsg'),{n:m[1]});
    if((m=n.match(/^(\d+)\s+ägg är aktiva och\s+(\d+)\s+har avbrutits\. Läget är under kontroll\.$/))) return fmt(tx('stableStoppedMsg'),{active:m[1],stopped:m[2]});
    if((m=n.match(/^(\d+)\s+active eggs and\s+(\d+)\s+stopped\. Everything is under control\.$/))) return fmt(tx('stableStoppedMsg'),{active:m[1],stopped:m[2]});
    if((m=n.match(/^Dag\s+(\d+)\s+av\s+(\d+)$/i))) return `${tx('day')} ${m[1]} ${tx('of')} ${m[2]}`;
    if((m=n.match(/^Day\s+(\d+)\s+of\s+(\d+)$/i))) return `${tx('day')} ${m[1]} ${tx('of')} ${m[2]}`;
    if((m=n.match(/^(\d+)\s+ägg i kläckare$/i))) return fmt(tx('eggsInIncubator'),{n:m[1]});
    if((m=n.match(/^(\d+)\s+eggs in incubator$/i))) return fmt(tx('eggsInIncubator'),{n:m[1]});
    if((m=n.match(/^Kläcks om\s+(\d+)\s+dagar?$/i))) return `${tx('hatched')} ${m[1]==='1'?tx('inOneDay'):fmt(tx('inDays'),{n:m[1]})}`;
    if((m=n.match(/^Lockdown om\s+(\d+)\s+dagar?$/i))) return `${tx('lockdown')} ${m[1]==='1'?tx('inOneDay'):fmt(tx('inDays'),{n:m[1]})}`;
    if((m=n.match(/^Beräknad kläckning om\s+(\d+)\s+dagar?$/i))) return `${tx('estimatedHatch')} ${m[1]==='1'?tx('inOneDay'):fmt(tx('inDays'),{n:m[1]})}`;
    if((m=n.match(/^Andra lysning om\s+(\d+)\s+dagar?$/i))) return `${tx('secondCandling')} ${m[1]==='1'?tx('inOneDay'):fmt(tx('inDays'),{n:m[1]})}`;
    if((m=n.match(/^Första lysning om\s+(\d+)\s+dagar?$/i))) return `${tx('firstCandling')} ${m[1]==='1'?tx('inOneDay'):fmt(tx('inDays'),{n:m[1]})}`;
    if((m=n.match(/^Second candling in\s+(\d+)\s+days?$/i))) return `${tx('secondCandling')} ${m[1]==='1'?tx('inOneDay'):fmt(tx('inDays'),{n:m[1]})}`;
    if((m=n.match(/^First candling in\s+(\d+)\s+days?$/i))) return `${tx('firstCandling')} ${m[1]==='1'?tx('inOneDay'):fmt(tx('inDays'),{n:m[1]})}`;
    if((m=n.match(/^In\s+(\d+)\s+days?$/i))) return m[1]==='1'?tx('inOneDay'):fmt(tx('inDays'),{n:m[1]});
    if((m=n.match(/^Om\s+(\d+)\s+dagar?$/i))) return m[1]==='1'?tx('inOneDay'):fmt(tx('inDays'),{n:m[1]});
    if((m=n.match(/^om\s+(\d+)\s+dagar?$/i))) return m[1]==='1'?tx('inOneDay'):fmt(tx('inDays'),{n:m[1]});
    if((m=n.match(/^Planerad rutin\s*[·:]\s*(.+)$/i))) return `${tx('plannedRoutine')} · ${m[1]}`;
    if((m=n.match(/^Planned routine\s*[·:]\s*(.+)$/i))) return `${tx('plannedRoutine')} · ${m[1]}`;
    if((m=n.match(/^Aktiva:\s*(\d+)$/i))) return `${tx('active')}: ${m[1]}`;
    if((m=n.match(/^Active:\s*(\d+)$/i))) return `${tx('active')}: ${m[1]}`;
    if((m=n.match(/^Avbrutna:\s*(\d+)$/i))) return `${tx('stopped')}: ${m[1]}`;
    if((m=n.match(/^Stopped:\s*(\d+)$/i))) return `${tx('stopped')}: ${m[1]}`;
    if((m=n.match(/^Överlevnadsgrad:\s*(.+)$/i))) return `${tx('survivalRate')}: ${m[1]}`;
    if((m=n.match(/^Survival rate:\s*(.+)$/i))) return `${tx('survivalRate')}: ${m[1]}`;
    if((m=n.match(/^(\d+)\/(\d+)\s+klara$/i))) return lang()==='sv'?`${m[1]}/${m[2]} klara`:`${m[1]}/${m[2]} done`;
    return null;
  }

  function translateString(s){
    return translateExactText(s) || translateDynamic(s);
  }

  function translateTextNode(node){
    const raw=node.nodeValue;
    if(!raw || !raw.trim()) return;
    const leading=(raw.match(/^\s*/)||[''])[0], trailing=(raw.match(/\s*$/)||[''])[0];
    const mid=raw.trim();
    const repl=translateString(mid);
    if(repl && repl!==mid) node.nodeValue = leading + repl + trailing;
  }

  function translateAttributes(root){
    const attrs=['placeholder','title','aria-label','alt'];
    (root.querySelectorAll?root.querySelectorAll('*'):[]).forEach(el=>{
      attrs.forEach(a=>{
        if(el.hasAttribute && el.hasAttribute(a)){
          const repl=translateString(el.getAttribute(a));
          if(repl) el.setAttribute(a,repl);
        }
      });
      if(el.tagName==='INPUT' && ['button','submit','reset'].includes((el.type||'').toLowerCase())){
        const repl=translateString(el.value);
        if(repl) el.value=repl;
      }
    });
  }

  function walk(root){
    const skip=new Set(['SCRIPT','STYLE','NOSCRIPT','SVG']);
    const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{
      acceptNode:function(n){
        const p=n.parentElement;
        if(!p || skip.has(p.tagName)) return NodeFilter.FILTER_REJECT;
        if(p.closest && p.closest('script,style,svg,noscript')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let nodes=[], n;
    while(n=w.nextNode()) nodes.push(n);
    nodes.forEach(translateTextNode);
  }

  function translateKnownLayout(){
    document.documentElement.lang = lang()==='no' ? 'nb' : lang();

    setText(document.querySelector('.top small'), tx('tagline'));

    const map = [
      ['.dashboard-kicker','overview'],
      ['#eggs-title-main','eggs'],
      ['#candling-title-main','candling'],
      ['#chicks-title-main','chicks'],
      ['#flock-title-main','flock'],
      ['#laying-title-main','laying'],
      ['#stats-title','statistics'],
      ['#settings-title-main','settings'],
      ['#journal-title-main','farmJournal'],
      ['.dash-title-task','mostImportant'],
      ['.dash-title-upcoming','upcomingNotDone'],
      ['.dash-title-hatches','activeHatches'],
      ['.reg-title','registerEvent'],
      ['.reg-sub','registerSub']
    ];
    map.forEach(([sel,k])=>document.querySelectorAll(sel).forEach(el=>setText(el,tx(k))));

    const navKeys=['overview','eggs','candling','chicks','flock','laying'];
    document.querySelectorAll('.bottom .nav .nav-label').forEach((el,i)=>{ if(navKeys[i]) setText(el,tx(navKeys[i])); });

    const stats=document.querySelectorAll('#view-dashboard .stat .label');
    if(stats[0]) stats[0].firstChild && (stats[0].firstChild.nodeValue=tx('activeEggs'));
    if(stats[1]) stats[1].firstChild && (stats[1].firstChild.nodeValue=tx('incubators'));
    if(stats[2]) stats[2].firstChild && (stats[2].firstChild.nodeValue=tx('chicks'));
    if(stats[3]) stats[3].firstChild && (stats[3].firstChild.nodeValue=tx('flock'));

    const quick=document.querySelectorAll('#view-dashboard .quick');
    const q=[['statistics','reportsTrends'],['settings','appSettings'],['farmJournal','farmTimeline'],['machines','incubatorAccessories']];
    quick.forEach((el,i)=>{ if(q[i]){ const div=el.querySelector('div'); const small=el.querySelector('small'); setText(div,tx(q[i][0])); setText(small,tx(q[i][1])); }});

    document.querySelectorAll('button').forEach(btn=>{
      const t=norm(btn.textContent);
      if(/^\+\s*(Lägg till|Add|Tilføj|Legg til|Lisää)$/.test(t)) btn.textContent='+ '+tx('add');
      if(/^\+\s*(Logga lysning|Log candling)/.test(t)) btn.textContent='+ '+(lang()==='sv'?'Logga lysning':lang()==='en'?'Log candling':lang()==='da'?'Log lysning':lang()==='no'?'Logg lysing':'Kirjaa läpivalaisu');
    });

    translateAttributes(document);
    walk(document.body);
  }

  let busy=false;
  function apply(){
    if(busy) return;
    busy=true;
    try{ translateKnownLayout(); }catch(e){ console.warn('PoultryMaster I18N overlay warning:', e); }
    busy=false;
  }

  const mo=new MutationObserver(function(){ clearTimeout(apply._t); apply._t=setTimeout(apply,40); });
  function start(){
    apply();
    if(document.body) mo.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['placeholder','title','aria-label','alt','value']});
  }

  ['click','change','input'].forEach(ev=>document.addEventListener(ev,()=>setTimeout(apply,80),true));
  window.addEventListener('storage',()=>setTimeout(apply,80));
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
  setInterval(apply,1200);
})();

/* PoultryMaster v2.10.3 – Deep I18N Refactor Guard
   Extra pass focused on render-generated hardcoded UI text. No CSS/layout/data changes. */
(function(){
  if(window.__PM_DEEP_I18N_103__) return;
  window.__PM_DEEP_I18N_103__=true;
  const STORE_KEY='egg_manager_v2';

  const D={
    sv:{
      myFarm:'Min gård', myFarmHelp:'Här sparas användarens egen gårdsprofil. PoultryMaster behåller sin identitet i apphuvudet, medan gårdsprofilen gör rapporter, livsböcker och utskrifter personliga.',
      owner:'Ägare', country:'Land', language:'Språk', units:'Enheter', dateFormat:'Datumformat', farmName:'Gårdsnamn',
      chooseLogo:'Välj logotyp', camera:'Kamera', removeLogo:'Ta bort logotyp', saveFarmProfile:'Spara gårdsprofil',
      incubation:'Inkubering', incubationHelp:'Globala standarddagar. Temperatur och fuktighet används bara som förslag när en ny kläckare skapas.',
      incubationTime:'Inkubationstid', firstCandlingDay:'Första lysning dag', secondCandlingDay:'Andra lysning dag', lockdownDay:'Lockdown dag',
      defaultTemp:'Standardtemperatur för ny kläckare', defaultHumidity:'Standardfuktighet för ny kläckare', saveIncubationRules:'Spara inkuberingsregler',
      incubators:'Kläckare', incubatorsHelp:'Här hanteras användarens egna kläckare. Varje kläckare får egen kapacitet, temperatur, fuktighet och lockdown-profil.',
      addIncubator:'Lägg till kläckare', myIncubators:'Mina kläckare', standard:'Standard', capacity:'Kapacitet', temperature:'Temperatur', humidity:'Fuktighet',
      turning:'Vändning', usedBy:'Används av', yes:'Ja', no:'Nej', active:'Aktiv', reserve:'Reserv', off:'Avstängd', model:'Modell', name:'Namn',
      save:'Spara', edit:'Redigera', delete:'Ta bort', back:'← Tillbaka', add:'Lägg till',
      settings:'Inställningar', statistics:'Statistik', farmJournal:'Gårdsjournal', machines:'Maskiner',
      hatching:'Kläckning', laying:'Värpning', breeding:'Avel', health:'Hälsa', hall:'Hall',
      hatchBatches:'Kläckomgångar', totalBatches:'Totalt omgångar', activeBatches:'Aktiva omgångar', finishedBatches:'Avslutade omgångar', manual:'Manuella',
      newBatch:'Ny omgång', batchTip:'Tips: skapa en omgång och välj den när du registrerar ägg. Gamla ägg utan omgång grupperas automatiskt efter startdatum.',
      activeRounds:'Aktiva omgångar', finishedRounds:'Avslutade omgångar', noFinishedRounds:'Inga avslutade omgångar ännu.',
      start:'Start', day:'Dag', of:'av', breeds:'Raser', started:'Startade', stopped:'Avbrutna', hatched:'Kläckta',
      hatchAnalysis:'Kläckanalys & historik', totalIncubated:'Totalt inkuberade', survivalRate:'Överlevnadsgrad', activeNow:'Aktiva just nu',
      lossesByStage:'Förluster per stadium', beforeAroundDay8:'Före / omkring dag 8', aroundDay:'omkring dag', noData:'Ingen data ännu.',
      farmJournalIntro:'Här samlas allt som händer på gården. Registrering sker från startsidans gröna knapp, medan journalen visar dagens arbete, kommande rutiner och historiken.',
      today:'IDAG', upcoming:'KOMMANDE', history:'HISTORIK', noToday:'Inget registrerat för idag ännu.', plannedRoutine:'Planerad rutin',
      firstCandling:'Första lysning', secondCandling:'Andra lysning', lockdown:'Lockdown', estimatedHatch:'Beräknad kläckning',
      quickRegister:'Registrera ny händelse', registerEgg:'Registrera ägg', registerBatch:'Registrera omgång', logCandling:'Logga lysning', registerChick:'Registrera kyckling',
      registerFlock:'Registrera flock', registerLaying:'Registrera värpning', registerHealth:'Registrera hälsa', registerWeight:'Registrera vikt', registerEvent:'Registrera händelse',
      newPost:'Ny post', lifeBook:'Livsbok', notes:'Anteckningar', status:'Status', breed:'Ras', origin:'Ursprung', eggId:'Ägg-ID', startDate:'Startdatum',
      eggList:'Ägglista', all:'Alla', critical:'Kritiska', uncertain:'Osäkra', todayLower:'idag', within7:'Inom 7 dagar',
      noEggs:'Inga ägg ännu.', noChicks:'Inga kycklingar ännu.', noBirds:'Inga fåglar ännu.', noLaying:'Inga värpningar loggade ännu.'
    },
    en:{
      myFarm:'My farm', myFarmHelp:'The user’s farm profile is saved here. PoultryMaster keeps its own identity in the app header, while the farm profile makes reports, life books and printouts personal.',
      owner:'Owner', country:'Country', language:'Language', units:'Units', dateFormat:'Date format', farmName:'Farm name',
      chooseLogo:'Choose logo', camera:'Camera', removeLogo:'Remove logo', saveFarmProfile:'Save farm profile',
      incubation:'Incubation', incubationHelp:'Global default days. Temperature and humidity are only used as suggestions when a new incubator is created.',
      incubationTime:'Incubation time', firstCandlingDay:'First candling day', secondCandlingDay:'Second candling day', lockdownDay:'Lockdown day',
      defaultTemp:'Default temperature for new incubator', defaultHumidity:'Default humidity for new incubator', saveIncubationRules:'Save incubation rules',
      incubators:'Incubators', incubatorsHelp:'Manage the user’s own incubators here. Each incubator has its own capacity, temperature, humidity and lockdown profile.',
      addIncubator:'Add incubator', myIncubators:'My incubators', standard:'Standard', capacity:'Capacity', temperature:'Temperature', humidity:'Humidity',
      turning:'Turning', usedBy:'Used by', yes:'Yes', no:'No', active:'Active', reserve:'Reserve', off:'Off', model:'Model', name:'Name',
      save:'Save', edit:'Edit', delete:'Delete', back:'← Back', add:'Add',
      settings:'Settings', statistics:'Statistics', farmJournal:'Farm journal', machines:'Machines',
      hatching:'Hatching', laying:'Laying', breeding:'Breeding', health:'Health', hall:'Hall',
      hatchBatches:'Hatch batches', totalBatches:'Total batches', activeBatches:'Active batches', finishedBatches:'Finished batches', manual:'Manual',
      newBatch:'New batch', batchTip:'Tip: create a batch and select it when registering eggs. Old eggs without a batch are grouped automatically by start date.',
      activeRounds:'Active batches', finishedRounds:'Finished batches', noFinishedRounds:'No finished batches yet.',
      start:'Start', day:'Day', of:'of', breeds:'Breeds', started:'Started', stopped:'Stopped', hatched:'Hatched',
      hatchAnalysis:'Hatch analysis & history', totalIncubated:'Total incubated', survivalRate:'Survival rate', activeNow:'Active now',
      lossesByStage:'Losses by stage', beforeAroundDay8:'Before / around day 8', aroundDay:'around day', noData:'No data yet.',
      farmJournalIntro:'Everything that happens on the farm is collected here. Registration is done from the green button on the overview, while the journal shows today’s work, upcoming routines and history.',
      today:'TODAY', upcoming:'UPCOMING', history:'HISTORY', noToday:'Nothing registered for today yet.', plannedRoutine:'Planned routine',
      firstCandling:'First candling', secondCandling:'Second candling', lockdown:'Lockdown', estimatedHatch:'Estimated hatch',
      quickRegister:'Register new event', registerEgg:'Register egg', registerBatch:'Register batch', logCandling:'Log candling', registerChick:'Register chick',
      registerFlock:'Register flock', registerLaying:'Register laying', registerHealth:'Register health', registerWeight:'Register weight', registerEvent:'Register event',
      newPost:'New entry', lifeBook:'Life book', notes:'Notes', status:'Status', breed:'Breed', origin:'Origin', eggId:'Egg ID', startDate:'Start date',
      eggList:'Egg list', all:'All', critical:'Critical', uncertain:'Uncertain', todayLower:'today', within7:'Within 7 days',
      noEggs:'No eggs yet.', noChicks:'No chicks yet.', noBirds:'No birds yet.', noLaying:'No laying logs yet.'
    },
    da:{
      myFarm:'Min gård', myFarmHelp:'Her gemmes brugerens egen gårdsprofil. PoultryMaster beholder sin identitet i appens top, mens gårdsprofilen gør rapporter, livsbøger og udskrifter personlige.',
      owner:'Ejer', country:'Land', language:'Sprog', units:'Enheder', dateFormat:'Datoformat', farmName:'Gårdsnavn',
      chooseLogo:'Vælg logo', camera:'Kamera', removeLogo:'Fjern logo', saveFarmProfile:'Gem gårdsprofil',
      incubation:'Rugning', incubationHelp:'Globale standarddage. Temperatur og fugtighed bruges kun som forslag, når en ny rugemaskine oprettes.',
      incubationTime:'Rugetid', firstCandlingDay:'Første lysningsdag', secondCandlingDay:'Anden lysningsdag', lockdownDay:'Lockdown-dag',
      defaultTemp:'Standardtemperatur for ny rugemaskine', defaultHumidity:'Standardfugtighed for ny rugemaskine', saveIncubationRules:'Gem rugeregler',
      incubators:'Rugemaskiner', incubatorsHelp:'Her håndteres brugerens egne rugemaskiner. Hver rugemaskine har egen kapacitet, temperatur, fugtighed og lockdown-profil.',
      addIncubator:'Tilføj rugemaskine', myIncubators:'Mine rugemaskiner', standard:'Standard', capacity:'Kapacitet', temperature:'Temperatur', humidity:'Fugtighed',
      turning:'Vending', usedBy:'Bruges af', yes:'Ja', no:'Nej', active:'Aktiv', reserve:'Reserve', off:'Slukket', model:'Model', name:'Navn',
      save:'Gem', edit:'Redigér', delete:'Slet', back:'← Tilbage', add:'Tilføj',
      settings:'Indstillinger', statistics:'Statistik', farmJournal:'Gårdsjournal', machines:'Maskiner',
      hatching:'Klækning', laying:'Æglægning', breeding:'Avl', health:'Sundhed', hall:'Hall',
      hatchBatches:'Klækkehold', totalBatches:'Hold i alt', activeBatches:'Aktive hold', finishedBatches:'Afsluttede hold', manual:'Manuelle',
      newBatch:'Nyt hold', batchTip:'Tip: opret et hold og vælg det, når du registrerer æg. Gamle æg uden hold grupperes automatisk efter startdato.',
      activeRounds:'Aktive hold', finishedRounds:'Afsluttede hold', noFinishedRounds:'Ingen afsluttede hold endnu.',
      start:'Start', day:'Dag', of:'af', breeds:'Racer', started:'Startede', stopped:'Stoppede', hatched:'Klækkede',
      hatchAnalysis:'Klækkeanalyse & historik', totalIncubated:'Rugede i alt', survivalRate:'Overlevelsesgrad', activeNow:'Aktive nu',
      lossesByStage:'Tab pr. stadie', beforeAroundDay8:'Før / omkring dag 8', aroundDay:'omkring dag', noData:'Ingen data endnu.',
      farmJournalIntro:'Her samles alt, der sker på gården. Registrering sker fra den grønne knap på oversigten, mens journalen viser dagens arbejde, kommende rutiner og historik.',
      today:'I DAG', upcoming:'KOMMENDE', history:'HISTORIK', noToday:'Intet registreret for i dag endnu.', plannedRoutine:'Planlagt rutine',
      firstCandling:'Første lysning', secondCandling:'Anden lysning', lockdown:'Lockdown', estimatedHatch:'Forventet klækning',
      quickRegister:'Registrér ny hændelse', registerEgg:'Registrér æg', registerBatch:'Registrér hold', logCandling:'Log lysning', registerChick:'Registrér kylling',
      registerFlock:'Registrér flok', registerLaying:'Registrér æglægning', registerHealth:'Registrér sundhed', registerWeight:'Registrér vægt', registerEvent:'Registrér hændelse',
      newPost:'Ny post', lifeBook:'Livsbog', notes:'Noter', status:'Status', breed:'Race', origin:'Oprindelse', eggId:'Æg-ID', startDate:'Startdato',
      eggList:'Ægliste', all:'Alle', critical:'Kritiske', uncertain:'Usikre', todayLower:'i dag', within7:'Inden for 7 dage',
      noEggs:'Ingen æg endnu.', noChicks:'Ingen kyllinger endnu.', noBirds:'Ingen fugle endnu.', noLaying:'Ingen æglægningslogge endnu.'
    },
    no:{
      myFarm:'Min gård', myFarmHelp:'Her lagres brukerens egen gårdsprofil. PoultryMaster beholder sin identitet i apphodet, mens gårdsprofilen gjør rapporter, livsbøker og utskrifter personlige.',
      owner:'Eier', country:'Land', language:'Språk', units:'Enheter', dateFormat:'Datoformat', farmName:'Gårdsnavn',
      chooseLogo:'Velg logo', camera:'Kamera', removeLogo:'Fjern logo', saveFarmProfile:'Lagre gårdsprofil',
      incubation:'Ruging', incubationHelp:'Globale standarddager. Temperatur og fuktighet brukes bare som forslag når en ny rugemaskin opprettes.',
      incubationTime:'Rugetid', firstCandlingDay:'Første lysingsdag', secondCandlingDay:'Andre lysingsdag', lockdownDay:'Lockdown-dag',
      defaultTemp:'Standardtemperatur for ny rugemaskin', defaultHumidity:'Standardfuktighet for ny rugemaskin', saveIncubationRules:'Lagre rugeregler',
      incubators:'Rugemaskiner', incubatorsHelp:'Her håndteres brukerens egne rugemaskiner. Hver rugemaskin får egen kapasitet, temperatur, fuktighet og lockdown-profil.',
      addIncubator:'Legg til rugemaskin', myIncubators:'Mine rugemaskiner', standard:'Standard', capacity:'Kapasitet', temperature:'Temperatur', humidity:'Fuktighet',
      turning:'Vending', usedBy:'Brukes av', yes:'Ja', no:'Nei', active:'Aktiv', reserve:'Reserve', off:'Av', model:'Modell', name:'Navn',
      save:'Lagre', edit:'Rediger', delete:'Slett', back:'← Tilbake', add:'Legg til',
      settings:'Innstillinger', statistics:'Statistikk', farmJournal:'Gårdsjournal', machines:'Maskiner',
      hatching:'Klekking', laying:'Egglegging', breeding:'Avl', health:'Helse', hall:'Hall',
      hatchBatches:'Klekkeomganger', totalBatches:'Totalt omganger', activeBatches:'Aktive omganger', finishedBatches:'Avsluttede omganger', manual:'Manuelle',
      newBatch:'Ny omgang', batchTip:'Tips: opprett en omgang og velg den når du registrerer egg. Gamle egg uten omgang grupperes automatisk etter startdato.',
      activeRounds:'Aktive omganger', finishedRounds:'Avsluttede omganger', noFinishedRounds:'Ingen avsluttede omganger ennå.',
      start:'Start', day:'Dag', of:'av', breeds:'Raser', started:'Startede', stopped:'Avbrutte', hatched:'Klekket',
      hatchAnalysis:'Klekkeanalyse & historikk', totalIncubated:'Totalt ruget', survivalRate:'Overlevelsesgrad', activeNow:'Aktive nå',
      lossesByStage:'Tap per stadium', beforeAroundDay8:'Før / rundt dag 8', aroundDay:'rundt dag', noData:'Ingen data ennå.',
      farmJournalIntro:'Her samles alt som skjer på gården. Registrering gjøres fra den grønne knappen på oversikten, mens journalen viser dagens arbeid, kommende rutiner og historikk.',
      today:'I DAG', upcoming:'KOMMENDE', history:'HISTORIKK', noToday:'Ingenting registrert for i dag ennå.', plannedRoutine:'Planlagt rutine',
      firstCandling:'Første lysing', secondCandling:'Andre lysing', lockdown:'Lockdown', estimatedHatch:'Beregnet klekking',
      quickRegister:'Registrer ny hendelse', registerEgg:'Registrer egg', registerBatch:'Registrer omgang', logCandling:'Logg lysing', registerChick:'Registrer kylling',
      registerFlock:'Registrer flokk', registerLaying:'Registrer egglegging', registerHealth:'Registrer helse', registerWeight:'Registrer vekt', registerEvent:'Registrer hendelse',
      newPost:'Ny post', lifeBook:'Livsbok', notes:'Notater', status:'Status', breed:'Rase', origin:'Opprinnelse', eggId:'Egg-ID', startDate:'Startdato',
      eggList:'Eggliste', all:'Alle', critical:'Kritiske', uncertain:'Usikre', todayLower:'i dag', within7:'Innen 7 dager',
      noEggs:'Ingen egg ennå.', noChicks:'Ingen kyllinger ennå.', noBirds:'Ingen fugler ennå.', noLaying:'Ingen eggleggingslogger ennå.'
    },
    fi:{
      myFarm:'Minun tilani', myFarmHelp:'Käyttäjän oma tilaprofiili tallennetaan tähän. PoultryMaster säilyttää oman identiteettinsä sovelluksen otsikossa, ja tilaprofiili tekee raporteista, elämänkirjoista ja tulosteista henkilökohtaisia.',
      owner:'Omistaja', country:'Maa', language:'Kieli', units:'Yksiköt', dateFormat:'Päivämäärämuoto', farmName:'Tilan nimi',
      chooseLogo:'Valitse logo', camera:'Kamera', removeLogo:'Poista logo', saveFarmProfile:'Tallenna tilaprofiili',
      incubation:'Haudonta', incubationHelp:'Yleiset oletuspäivät. Lämpötilaa ja kosteutta käytetään vain ehdotuksina, kun uusi hautomakone luodaan.',
      incubationTime:'Haudonta-aika', firstCandlingDay:'Ensimmäinen läpivalaisupäivä', secondCandlingDay:'Toinen läpivalaisupäivä', lockdownDay:'Lockdown-päivä',
      defaultTemp:'Uuden hautomakoneen oletuslämpötila', defaultHumidity:'Uuden hautomakoneen oletuskosteus', saveIncubationRules:'Tallenna haudontasäännöt',
      incubators:'Hautomakoneet', incubatorsHelp:'Täällä hallitaan käyttäjän omia hautomakoneita. Jokaisella hautomakoneella on oma kapasiteetti, lämpötila, kosteus ja lockdown-profiili.',
      addIncubator:'Lisää hautomakone', myIncubators:'Omat hautomakoneet', standard:'Oletus', capacity:'Kapasiteetti', temperature:'Lämpötila', humidity:'Kosteus',
      turning:'Kääntö', usedBy:'Käytössä', yes:'Kyllä', no:'Ei', active:'Aktiivinen', reserve:'Varalla', off:'Pois päältä', model:'Malli', name:'Nimi',
      save:'Tallenna', edit:'Muokkaa', delete:'Poista', back:'← Takaisin', add:'Lisää',
      settings:'Asetukset', statistics:'Tilastot', farmJournal:'Tilapäiväkirja', machines:'Laitteet',
      hatching:'Kuoriutuminen', laying:'Muninta', breeding:'Jalostus', health:'Terveys', hall:'Hall',
      hatchBatches:'Kuoriutumiserät', totalBatches:'Erät yhteensä', activeBatches:'Aktiiviset erät', finishedBatches:'Päättyneet erät', manual:'Manuaaliset',
      newBatch:'Uusi erä', batchTip:'Vinkki: luo erä ja valitse se munia rekisteröidessä. Vanhat munat ilman erää ryhmitellään automaattisesti aloituspäivän mukaan.',
      activeRounds:'Aktiiviset erät', finishedRounds:'Päättyneet erät', noFinishedRounds:'Ei päättyneitä eriä vielä.',
      start:'Aloitus', day:'Päivä', of:'/', breeds:'Rodut', started:'Aloitetut', stopped:'Keskeytetyt', hatched:'Kuoriutuneet',
      hatchAnalysis:'Kuoriutumisanalyysi ja historia', totalIncubated:'Haudottu yhteensä', survivalRate:'Selviytymisaste', activeNow:'Aktiiviset nyt',
      lossesByStage:'Menetykset vaiheittain', beforeAroundDay8:'Ennen / noin päivä 8', aroundDay:'noin päivä', noData:'Ei tietoja vielä.',
      farmJournalIntro:'Tänne kerätään kaikki tilalla tapahtuva. Rekisteröinti tehdään yleiskatsauksen vihreästä painikkeesta, ja päiväkirja näyttää päivän työt, tulevat rutiinit ja historian.',
      today:'TÄNÄÄN', upcoming:'TULOSSA', history:'HISTORIA', noToday:'Tänään ei ole vielä merkintöjä.', plannedRoutine:'Suunniteltu rutiini',
      firstCandling:'Ensimmäinen läpivalaisu', secondCandling:'Toinen läpivalaisu', lockdown:'Lockdown', estimatedHatch:'Arvioitu kuoriutuminen',
      quickRegister:'Lisää uusi tapahtuma', registerEgg:'Rekisteröi muna', registerBatch:'Rekisteröi erä', logCandling:'Kirjaa läpivalaisu', registerChick:'Rekisteröi poikanen',
      registerFlock:'Rekisteröi parvi', registerLaying:'Rekisteröi muninta', registerHealth:'Rekisteröi terveys', registerWeight:'Rekisteröi paino', registerEvent:'Rekisteröi tapahtuma',
      newPost:'Uusi merkintä', lifeBook:'Elämänkirja', notes:'Muistiinpanot', status:'Tila', breed:'Rotu', origin:'Alkuperä', eggId:'Muna-ID', startDate:'Aloituspäivä',
      eggList:'Munalista', all:'Kaikki', critical:'Kriittiset', uncertain:'Epävarmat', todayLower:'tänään', within7:'7 päivän sisällä',
      noEggs:'Ei munia vielä.', noChicks:'Ei poikasia vielä.', noBirds:'Ei lintuja vielä.', noLaying:'Munintamerkintöjä ei vielä ole.'
    }
  };

  function getState(){try{return JSON.parse(localStorage.getItem(STORE_KEY)||'{}')||{}}catch(e){return {}}}
  function getLang(){
    const s=getState();
    let l=(s.farmSettings&&s.farmSettings.language)||document.documentElement.lang||'sv';
    return D[l]?l:'sv';
  }
  function tr(k){const l=getLang();return (D[l]&&D[l][k])||(D.sv&&D.sv[k])||k}
  function norm(s){return String(s||'').replace(/\s+/g,' ').trim()}
  function fmt(s,o){return String(s).replace(/\{(\w+)\}/g,(_,k)=>o[k]??'')}

  const keyByPhrase = {};
  function add(k, arr){arr.forEach(x=>keyByPhrase[norm(x)]=k)}
  [
    ['myFarm',['Min gård','My farm']], ['myFarmHelp',['Här sparas användarens egen gårdsprofil. PoultryMaster behåller sin identitet i apphuvudet, medan gårdsprofilen gör rapporter, livsböcker och utskrifter personliga.']],
    ['owner',['Ägare','Owner']], ['country',['Land','Country']], ['language',['Språk','Language']], ['units',['Enheter','Units']], ['dateFormat',['Datumformat','Date format']], ['farmName',['Gårdsnamn','Farm name']],
    ['chooseLogo',['Välj logotyp','Choose logo']], ['camera',['Kamera','Camera']], ['removeLogo',['Ta bort logotyp','Remove logo']], ['saveFarmProfile',['Spara gårdsprofil','Save farm profile']],
    ['incubation',['Inkubering','Incubation']], ['incubationHelp',['Globala standarddagar. Temperatur och fuktighet används bara som förslag när en ny kläckare skapas.']],
    ['incubationTime',['Inkubationstid','Incubation time']], ['firstCandlingDay',['Första lysning dag','First candling day']], ['secondCandlingDay',['Andra lysning dag','Second candling day']], ['lockdownDay',['Lockdown dag','Lockdown day']],
    ['defaultTemp',['Standardtemperatur för ny kläckare','Default temperature for new incubator']], ['defaultHumidity',['Standardfuktighet för ny kläckare','Default humidity for new incubator']], ['saveIncubationRules',['Spara inkuberingsregler','Save incubation rules']],
    ['incubators',['Kläckare','Incubators']], ['incubatorsHelp',['Här hanteras användarens egna kläckare. Varje kläckare får egen kapacitet, temperatur, fuktighet och lockdown-profil.']],
    ['addIncubator',['Lägg till kläckare','Add incubator']], ['myIncubators',['Mina kläckare','My incubators']], ['standard',['Standard']], ['capacity',['Kapacitet','Capacity']], ['temperature',['Temperatur','Temperature']], ['humidity',['Fuktighet','Humidity']],
    ['turning',['Vändning','Turning']], ['usedBy',['Används av','Used by']], ['yes',['Ja','Yes']], ['no',['Nej','No']], ['active',['Aktiv','Active']], ['reserve',['Reserv','Reserve']], ['off',['Avstängd','Off']], ['model',['Modell','Model']], ['name',['Namn','Name']],
    ['settings',['Inställningar','Settings']], ['statistics',['Statistik','Statistics']], ['farmJournal',['Gårdsjournal','Farm journal']], ['machines',['Maskiner','Machines']],
    ['hatching',['Kläckning','Hatching']], ['laying',['Värpning','Laying']], ['breeding',['Avel','Breeding']], ['health',['Hälsa','Health']], ['hall',['Hall']],
    ['hatchBatches',['Kläckomgångar','Hatch batches']], ['totalBatches',['Totalt omgångar','Total batches']], ['activeBatches',['Aktiva omgångar','Active batches']], ['finishedBatches',['Avslutade omgångar','Finished batches']], ['manual',['Manuella','Manual']],
    ['newBatch',['Ny omgång','New batch']], ['batchTip',['Tips: skapa en omgång och välj den när du registrerar ägg. Gamla ägg utan omgång grupperas automatiskt efter startdatum.']],
    ['activeRounds',['Aktiva omgångar','Active batches']], ['finishedRounds',['Avslutade omgångar','Finished batches']], ['noFinishedRounds',['Inga avslutade omgångar ännu.','No finished batches yet.']],
    ['start',['Start']], ['day',['Dag','Day']], ['breeds',['Raser','Breeds']], ['started',['Startade','Started']], ['stopped',['Avbrutna','Stopped']], ['hatched',['Kläckta','Hatched']],
    ['hatchAnalysis',['Kläckanalys & historik','Hatch analysis & history']], ['totalIncubated',['Totalt inkuberade','Total incubated']], ['survivalRate',['Överlevnadsgrad','Survival rate']], ['activeNow',['Aktiva just nu','Active now']],
    ['lossesByStage',['Förluster per stadium','Losses by stage']], ['beforeAroundDay8',['Före / omkring dag 8','Before / around day 8']], ['noData',['Ingen data ännu.','No data yet.']],
    ['farmJournalIntro',['Här samlas allt som händer på gården. Registrering sker från startsidans gröna knapp, medan journalen visar dagens arbete, kommande rutiner och historiken.']],
    ['today',['IDAG','TODAY']], ['upcoming',['KOMMANDE','UPCOMING']], ['history',['HISTORIK','HISTORY']], ['noToday',['Inget registrerat för idag ännu.','Nothing registered for today yet.']], ['plannedRoutine',['Planerad rutin','Planned routine']],
    ['firstCandling',['Första lysning','First candling']], ['secondCandling',['Andra lysning','Second candling']], ['lockdown',['Lockdown']], ['estimatedHatch',['Beräknad kläckning','Estimated hatch']],
    ['quickRegister',['Registrera ny händelse','Register new event']], ['registerEgg',['Registrera ägg','Register egg']], ['registerBatch',['Registrera omgång','Register batch']], ['logCandling',['Logga lysning','Log candling']], ['registerChick',['Registrera kyckling','Register chick']],
    ['registerFlock',['Registrera flock','Register flock']], ['registerLaying',['Registrera värpning','Register laying']], ['registerHealth',['Registrera hälsa','Register health']], ['registerWeight',['Registrera vikt','Register weight']], ['registerEvent',['Registrera händelse','Register event']],
    ['newPost',['Ny post','New entry']], ['lifeBook',['Livsbok','Life book']], ['notes',['Anteckningar','Notes']], ['status',['Status']], ['breed',['Ras','Breed']], ['origin',['Ursprung','Origin']], ['eggId',['Ägg-ID','Egg ID']], ['startDate',['Startdatum','Start date']],
    ['eggList',['Ägglista','Egg list']], ['all',['Alla','All']], ['critical',['Kritiska','Critical']], ['uncertain',['Osäkra','Uncertain']], ['within7',['Inom 7 dagar','Within 7 days']],
    ['noEggs',['Inga ägg ännu.','No eggs yet.']], ['noChicks',['Inga kycklingar ännu.','No chicks yet.']], ['noBirds',['Inga fåglar ännu.','No birds yet.']], ['noLaying',['Inga värpningar loggade ännu.','No laying logs yet.']],
    ['save',['Spara','Save']], ['edit',['Redigera','Edit']], ['delete',['Ta bort','Delete']], ['back',['← Tillbaka','← Back']], ['add',['Lägg till','Add']]
  ].forEach(([k,a])=>add(k,a));

  function translateExact(s){const k=keyByPhrase[norm(s)];return k?tr(k):null}
  function translateDynamic(s){
    let n=norm(s), m;
    if(!n) return null;
    if((m=n.match(/^(\+ ?)(Lägg till kläckare|Add incubator)$/))) return m[1]+tr('addIncubator');
    if((m=n.match(/^(\+ ?)(Ny omgång|New batch)$/))) return m[1]+tr('newBatch');
    if((m=n.match(/^(\+ ?)(Lägg till|Add)$/))) return m[1]+tr('add');
    if((m=n.match(/^(\+ ?)(Logga lysning|Log candling)$/))) return m[1]+tr('logCandling');
    if((m=n.match(/^Ägare:\s*(.+)$/))) return tr('owner')+': '+m[1];
    if((m=n.match(/^Owner:\s*(.+)$/))) return tr('owner')+': '+m[1];
    if((m=n.match(/^Start:\s*(.+)$/))) return tr('start')+': '+m[1];
    if((m=n.match(/^Dag\s+(\d+)\s+av\s+(\d+)$/i))) return `${tr('day')} ${m[1]} ${tr('of')} ${m[2]}`;
    if((m=n.match(/^Day\s+(\d+)\s+of\s+(\d+)$/i))) return `${tr('day')} ${m[1]} ${tr('of')} ${m[2]}`;
    if((m=n.match(/^Raser:\s*(.+)$/))) return tr('breeds')+': '+m[1];
    if((m=n.match(/^Breeds:\s*(.+)$/))) return tr('breeds')+': '+m[1];
    if((m=n.match(/^Kläckare:\s*(.+)$/))) return tr('incubators')+': '+m[1];
    if((m=n.match(/^Incubator:\s*(.+)$/))) return tr('incubators')+': '+m[1];
    if((m=n.match(/^(\d+)\s+aktiva ägg$/i))) return `${m[1]} ${tr('active').toLowerCase()} ${tr('eggList').toLowerCase()}`;
    if((m=n.match(/^(\d+)\s+ägg ska lysas idag\. Logga resultatet direkt efter varje ägg\.$/i))) return getLang()==='en'?`${m[1]} eggs should be candled today. Log the result immediately after each egg.`:null;
    if((m=n.match(/^Andra lysning om\s+(\d+)\s+dagar?$/i))) return `${tr('secondCandling')} ${inDays(m[1])}`;
    if((m=n.match(/^Första lysning om\s+(\d+)\s+dagar?$/i))) return `${tr('firstCandling')} ${inDays(m[1])}`;
    if((m=n.match(/^Lockdown om\s+(\d+)\s+dagar?$/i))) return `${tr('lockdown')} ${inDays(m[1])}`;
    if((m=n.match(/^Beräknad kläckning om\s+(\d+)\s+dagar?$/i))) return `${tr('estimatedHatch')} ${inDays(m[1])}`;
    if((m=n.match(/^Planerad rutin\s*·\s*(.+)$/i))) return `${tr('plannedRoutine')} · ${m[1]}`;
    return null;
  }
  function inDays(n){
    n=String(n);
    const l=getLang();
    if(l==='sv') return n==='1'?'om 1 dag':`om ${n} dagar`;
    if(l==='en') return n==='1'?'in 1 day':`in ${n} days`;
    if(l==='da') return n==='1'?'om 1 dag':`om ${n} dage`;
    if(l==='no') return n==='1'?'om 1 dag':`om ${n} dager`;
    return `${n} päivän kuluttua`;
  }
  function translateString(s){return translateExact(s)||translateDynamic(s)}
  function skipNode(n){
    if(!n || !n.parentElement) return true;
    const tag=n.parentElement.tagName;
    return ['SCRIPT','STYLE','TEXTAREA'].includes(tag);
  }
  function translateTextNode(n){
    if(skipNode(n)) return;
    const raw=n.nodeValue; if(!raw||!raw.trim()) return;
    const lead=(raw.match(/^\s*/)||[''])[0], trail=(raw.match(/\s*$/)||[''])[0], mid=raw.trim();
    const out=translateString(mid);
    if(out && out!==mid) n.nodeValue=lead+out+trail;
  }
  function walk(root){
    if(!root) return;
    const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null);
    let n; const nodes=[];
    while((n=w.nextNode())) nodes.push(n);
    nodes.forEach(translateTextNode);
  }
  function translateSelects(root){
    (root||document).querySelectorAll('option').forEach(o=>{
      const out=translateString(o.textContent);
      if(out) o.textContent=out;
    });
    (root||document).querySelectorAll('input[placeholder],textarea[placeholder]').forEach(el=>{
      const out=translateString(el.getAttribute('placeholder'));
      if(out) el.setAttribute('placeholder',out);
    });
    (root||document).querySelectorAll('input[type="button"],input[type="submit"]').forEach(el=>{
      const out=translateString(el.value);
      if(out) el.value=out;
    });
  }
  function apply(){
    try{
      document.documentElement.lang=getLang();
      const top=document.querySelector('.top small'); if(top) top.textContent = (window.I18N&&window.I18N[getLang()]&&window.I18N[getLang()].tagline)||top.textContent;
      walk(document.body); translateSelects(document);
    }catch(e){console.warn('PoultryMaster deep I18N guard:',e)}
  }
  const mo=new MutationObserver(()=>{clearTimeout(apply._t);apply._t=setTimeout(apply,30)});
  function start(){apply();mo.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['placeholder','value']})}
  ['click','change','input'].forEach(ev=>document.addEventListener(ev,()=>setTimeout(apply,80),true));
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
  setInterval(apply,1000);
})();