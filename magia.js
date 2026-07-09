const CONFIG = {
  novia:"Anaïs",  
  novio:"Juan",  
  fechaISO:"2027-04-24T12:00:00",          // mueve la cuenta atrás  
  fechaTexto:"Sábado · 24 Abril 2027",  
  diaCorto:"24 de Abril",  
  rsvpLimite:"Confírmanos antes del 11 de Noviembre de 2026.",  
  cierreFrase:"Bajo el mismo sol, entre dos mares",  
  isla:{  
    novia:{nombre:"Ibiza", coords:"39°04′N · 1°44′E", coordsLargo:"39°04′N · 1°44′E · Mediterráneo",  
           desc:"Pinos, sal y atardeceres de las Pitiusas."},  
    novio:{nombre:"Lanzarote", coords:"29°07′N · -13°47′O", coordsLargo:"29°07′N · -13°47′O · Atlántico",  
           desc:"Lava, viento y cielos de fuego en el Atlántico."},
  },  
  distancia:"1.700 km",  
  historia:[  
    {
      when:"El principio",
      head:"Todo empezó en la universidad",
      body:"Ella de Ibiza y él de Lanzarote, pero los unió Madrid. Entre clases, amigos y planes de universidad, acabamos cruzándonos en el momento adecuado."
    },
    {
      when:"El camino",
      head:"Construyendo nuestro hogar",
      body:"A lo largo de estos años hemos vivido en distintas ciudades, recorrido muchos kilómetros y pasado por etapas muy diferentes. Algunas cosas han cambiado mucho; otras, por suerte, no."
    },
    {
      when:"Hasta hoy",
      head:"Siete años después",
      body:"Tras todo lo vivido juntos, ha llegado el momento de reunir a las personas que más queremos y con quien hemos tenido la suerte de vivir todas esas etapas y momentos caóticos para celebrar el siguiente paso de esta historia."
    }
  ],  
  lugar:{nombre:"Dalt Vila", direccion:"Plaça de la Catedral, 1, 07800 Eivissa, Illes Balears",  
         mapaURL:"https://maps.app.goo.gl/wqo9e8dKhwTPpv9H6"},  
  convite:{nombre:"Can Curreu", direccion:"Diseminado P 4 San Carlos, 79, 07850, Illes Balears",  
         mapaURL:"https://maps.app.goo.gl/N8NfjNphF6gvEHzXA"},  
  itinerario:[
    {
      hora:"12:00",
      titulo:"Ceremonia nupcial",
      sub:"Catedral de Santa María, Dalt Vila",
      icono:"./Media/anillos.png"
    },
    {
      hora:"14:00",
      titulo:"Recepción",
      sub:"Can Curreu, Sant Carles",
      icono:"./Media/bebida.png"
    },
    {
      hora:"16:00",
      titulo:"Comida",
      sub:"Entre pinos y olivos",
      icono:"./Media/plato.png"
    },
    {
      hora:"18:00",
      titulo:"Fiesta",
      sub:"Hasta que caiga el sol",
      icono:"./Media/musica.png"
    },
  ],   
  vestimenta:{titulo:"Semi-formal",   
    texto:"Colores primaverales, rebequita y zapato cómodo: habrá césped, baile y mucho alcohol. Aunque el blanco no está en la lista, aquí hay recomendaciones que no os harán desentonar:",
    paleta:["#DD874E","#EAAF7A","#D65A57","#E7C878","#B9B45E","#9E92A6","#9AA8BC"]},  
  regalo:{texto:"Lo importante es que estéis con nosotros ese día. Si además queréis tener un detalle, hemos dejado esta opción por si os resulta más cómoda que el formato 'sobre' tradicional.",  
    opciones:[  
      {label:"IBAN", valor:"ES03 0049 4973 5323 1701 5930"},  
      {label:"Bizum", valor:"649 888 277"},  
    ]},  
  faq:[  
    {q:"¿Y el acompañante?", a:"Los acompañantes se indican al confirmar tu asistencia y lo tendremos en cuenta para el catering. Si en la invitación os hemos indicado un número, significa que podéis venir con ese número de acompañantes. Pueden ser pareja, hijos, familiares, etc.; en cualquier caso, se trata de personas que ya hemos previsto y por eso hemos enviado la invitación de forma conjunta. Si tenéis dudas sobre quién podría ser ese acompañante, no dudéis en preguntarnos."},  
    {q:"¿Los niños son bienvenidos?", a:"¡Claro! Avísanos para preparar su sitio y su menú. Indicanos en los comentarios de la confirmación qué edad tienen y si necesitan trona."},  
    {q:"¿Hay aparcamiento?", a:"Sí, en el propio lugar hay 2 parkings. Al ser limitado, recomendamos compartir coche o venir en taxi."},  
    {q:"¿Hasta cuándo confirmo?", a:"Cuanto antes mejor, y como muy tarde en la fecha indicada en la sección de confirmación."},  
  ],  
  // RSVP -> Google Sheets (mediante Apps Script).  
  // Pega en sheetURL la URL que termina en /exec de tu "Aplicación web" de Apps Script.  
  // Alternativas: modo:"whatsapp" o "email" (usan "destino" en vez de sheetURL).  
  rsvp:{  
    modo:"sheets",  
    sheetURL:"https://script.google.com/macros/s/AKfycbyaaHlF2jjbR5rAzKUKkLzVLtyD0zozEx8D7cUbVcTwp6ClwCynPZnIbSYmfNDlGWELaQ/exec",  
    destino:"34600000000",  
  },  
};  

// window.addEventListener('load', () => {
//   document.body.classList.remove('loading');});

/* ==========================================================  
   ▲▲▲  FIN DE LA ZONA EDITABLE  ▲▲▲  
   ========================================================== */

const $=id=>document.getElementById(id);  
const set=(id,v)=>{const e=$(id);if(e)e.textContent=v};  
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;  

/* ---- Textos ---- */  
set('t-novia',CONFIG.novia); set('t-novio',CONFIG.novio);  
set('nav-i',CONFIG.novia[0]); set('nav-l',CONFIG.novio[0]);  
set('t-fecha',CONFIG.fechaTexto); set('t-dia-corto',CONFIG.diaCorto);  
set('t-isla-novia',CONFIG.isla.novia.nombre); set('t-isla-novia-2',CONFIG.isla.novia.nombre);  
set('t-isla-novio',CONFIG.isla.novio.nombre); set('t-isla-novio-2',CONFIG.isla.novio.nombre);  
set('t-coord-novia',CONFIG.isla.novia.coords); set('t-coord-novia-2',CONFIG.isla.novia.coordsLargo);  
set('t-coord-novio',CONFIG.isla.novio.coords); set('t-coord-novio-2',CONFIG.isla.novio.coordsLargo);  
set('t-desc-novia',CONFIG.isla.novia.desc); set('t-desc-novio',CONFIG.isla.novio.desc);  
set('t-distancia',CONFIG.distancia);  
set('t-lugar',CONFIG.lugar.nombre); set('t-direccion',CONFIG.lugar.direccion);
$('t-mapa').href=CONFIG.lugar.mapaURL;   
set('t-convite',CONFIG.convite.nombre); set('t-direccion1',CONFIG.convite.direccion);  
$('t-mapa1').href=CONFIG.convite.mapaURL;  
set('t-viaje-intro',CONFIG.viajeIntro);  
set('t-dress-title',CONFIG.vestimenta.titulo); set('t-dress-text',CONFIG.vestimenta.texto);  
set('t-gift-text',CONFIG.regalo.texto);  
set('t-rsvp-fecha',CONFIG.rsvpLimite);  
set('t-end-sub',CONFIG.cierreFrase);  
set('t-foot-novia',CONFIG.isla.novia.nombre); set('t-foot-novio',CONFIG.isla.novio.nombre);  
document.title=`J & A`;  

/* ---- Render listas ---- */  
$('story').innerHTML=CONFIG.historia.map(b=>  
  `<div class="beat"><div class="dot"></div><div><div class="when">${b.when}</div><div class="head">${b.head}</div><div class="body">${b.body}</div></div></div>`).join('');  

$('plan').innerHTML = CONFIG.itinerario.map((i, index) => `
  <div class="timeline-item reveal ${index % 2 === 0 ? 'icon-left' : 'icon-right'}">

    <div class="timeline-visual">
      <img src="${i.icono}" alt="${i.titulo}">
    </div>

    <div class="timeline-dot"></div>

    <div class="timeline-text">
      <div class="timeline-hour">${i.hora}</div>

      <div class="timeline-event">
        <div class="timeline-title">${i.titulo}</div>

        ${i.sub
          ? `<div class="timeline-sub">${i.sub}</div>`
          : ''
        }

      </div>
    </div>

  </div>
`).join('');

$('faq').innerHTML=CONFIG.faq.map(f=>  
  `<details><summary>${f.q}</summary><div class="a">${f.a}</div></details>`).join('');  

$('gift-rows').innerHTML=CONFIG.regalo.opciones.map((o,i)=>  
  `<button class="copybtn" data-copy="${o.valor}" data-i="${i}"><small>${o.label}</small> <span>${o.valor}</span></button>`).join('');  

document.querySelectorAll('.copybtn').forEach(b=>b.addEventListener('click',()=>{  
  navigator.clipboard?.writeText(b.dataset.copy);  
  const s=b.querySelector('span'),old=s.textContent;
  s.textContent='¡Copiado!';  
  setTimeout(()=>s.textContent=old,1400);  
}));  

/* ---- Cuenta atrás ---- */  
const target=new Date(CONFIG.fechaISO).getTime(), pad=n=>String(n).padStart(2,'0');  

function tick(){  
  const diff=target-Date.now();  
  if(diff<=0){
    ['d','h','m','s'].forEach(i=>set(i,'00'));
    set('count-msg','¡Hoy es el día!');
    clearInterval(timer);
    return;
  }  
  set('d',Math.floor(diff/86400000));  
  set('h',pad(Math.floor(diff/3600000)%24));  
  set('m',pad(Math.floor(diff/60000)%60));  
  set('s',pad(Math.floor(diff/1000)%60));  
}  

tick(); 
const timer=setInterval(tick,1000);  

/* ---- Barco sorpresa ---- */

const boatScreen = document.getElementById('boat-screen');
const countdownPanel = document.querySelector('.countdown-panel');
const countdownAudio = document.getElementById('countdown-audio');
const contadorSection = document.getElementById('contador-section');

let viajeIniciado = false;

if(boatScreen){

  boatScreen.addEventListener('click',()=>{

    viajeIniciado = true;

    countdownPanel.classList.add('started');

    countdownAudio.play().catch(()=>{});

  });

}

/* Música solo mientras se vea */

if(contadorSection){

  const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

      if(!viajeIniciado) return;

      if(entry.isIntersecting){

        countdownAudio.play().catch(()=>{});

      }else{

        countdownAudio.pause();

      }

    });

  },{
    threshold:0.30
  });

  observer.observe(contadorSection);

}

/* ---- RSVP -> WhatsApp / email / Sheets ---- */  
const seg=$('seg-asiste');  
const sendBtn=$('rsvp-send'), rstatus=$('rsvp-status');  
const fieldMenuPrincipal=$('field-menu-principal');  
const menuPrincipal=$('f-menu-principal');  
const fieldAcomp=$('field-acomp');  
const acompInput=$('f-acomp');  
const guestList=$('guest-list');  
const fieldNoAsiste=$('field-no-asiste');  
const fieldAlergias=$('field-alergias');  

let asiste='Sí, allí estaré';  

function showStatus(msg,ok){
  rstatus.style.opacity=0;

  setTimeout(()=>{
    rstatus.textContent=msg;
    rstatus.className='rsvp-status'+(ok===true?' ok':ok===false?' err':'');
    rstatus.style.transition='opacity .3s ease';
    rstatus.style.opacity=1;
  },120);
} 

function isAttending(){
  return asiste.indexOf('Sí')===0;
}  



function getAdultMenuOptions(){  
  return `
    <option value="">Elige una opción</option>
    <option value="Carne">Carne</option>
    <option value="Pescado">Pescado</option>
  `;
}

function getChildMenuOptions(){  
  return `
    <option value="">Elige una opción</option>
    <option value="Escalope de pollo">Escalope de pollo</option>
    <option value="Espaguetis boloñesa">Espaguetis boloñesa</option>
  `;
}

function guestRow(i){  
  return `  
    <div class="guest-card" data-guest="${i}">  
      <div class="guest-title">Acompañante ${i-1}</div>  

      <div class="field">
        <label for="f-guest-${i}-nombre">Nombre y apellidos</label>
        <input id="f-guest-${i}-nombre" type="text" placeholder="Nombre completo">
      </div>

      <div class="field">
        <label for="f-guest-${i}-tipo">Tipo de menú</label>
        <select id="f-guest-${i}-tipo" data-guest-tipo="${i}">
          <option value="">Elige una opción</option>
          <option value="Adulto">Menú adulto</option>
          <option value="Niño">Menú niño</option>
        </select>
      </div>

      <div class="field">
        <label for="f-guest-${i}-menu">Menú</label>
        <select id="f-guest-${i}-menu">
          <option value="">Elige primero el tipo de menú</option>
        </select>
      </div>  

      <div class="field">
        <label for="f-guest-${i}-alergias">Alergias o intolerancias del acompañante</label>
        <input
          id="f-guest-${i}-alergias"
          type="text"
          placeholder="Opcional">
      </div>
    </div>`;  
}  

function updateGuestMenu(i){
  const tipo=$(`f-guest-${i}-tipo`);
  const menu=$(`f-guest-${i}-menu`);
  if(!tipo || !menu) return;

  if(tipo.value==='Adulto'){
    menu.innerHTML=getAdultMenuOptions();
  }else if(tipo.value==='Niño'){
    menu.innerHTML=getChildMenuOptions();
  }else{
    menu.innerHTML='<option value="">Elige primero el tipo de menú</option>';
  }
}

function clampGuests(){
  let n = parseInt(acompInput.value,10);

  if (Number.isNaN(n) || n < 1) n = 1;
  if (n > 10) n = 10;

  acompInput.value = n;
  return n;
}

function bindGuestMenuEvents(){
  document.querySelectorAll('[data-guest-tipo]').forEach(select=>{
    select.addEventListener('change',()=>{
      updateGuestMenu(select.dataset.guestTipo);
    });
  });
}

function renderGuests(){
  if(!isAttending()){
    guestList.innerHTML='';
    return;
  }

  const total=clampGuests();
  const extras=Math.max(0,total-1);
  const html=Array.from({length:extras},(_,i)=>guestRow(i+2)).join('');

  guestList.style.opacity=0;

  requestAnimationFrame(()=>{
    guestList.innerHTML=html;
    bindGuestMenuEvents();
    guestList.style.transition='opacity .25s ease';
    guestList.style.opacity=1;
  });
}

function updateAttendanceUI(){  
  const attending=isAttending();  

  fieldMenuPrincipal.classList.toggle('is-hidden',!attending);  
  fieldAcomp.classList.toggle('is-hidden',!attending);  
  fieldAlergias.classList.toggle('is-hidden',!attending);  
  fieldNoAsiste.classList.toggle('is-hidden',attending);  

  if(attending){  
    if(!acompInput.value || Number(acompInput.value)<1) acompInput.value='1';  
    renderGuests();  
  }else{  
    guestList.innerHTML='';  
    showStatus('');  
  }  
}  

seg.addEventListener('click',e=>{
  const b=e.target.closest('button');
  if(!b)return;  

  seg.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed','false'));  
  b.setAttribute('aria-pressed','true');  

  asiste=b.dataset.v;  
  updateAttendanceUI();  
});  

acompInput.addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, '');
});

acompInput.addEventListener('blur', function () {
  clampGuests();
  renderGuests();
});

updateAttendanceUI();  

sendBtn.addEventListener('click',async ()=>{  
  if(sendBtn.disabled)return;
  const nombre=$('f-nombre').value.trim();  

  if(!nombre){
    showStatus('Pon tu nombre, porfa.',false);
    $('f-nombre').focus();
    return;
  }  

  let invitados=[];  

  if(isAttending()){  
    const total=clampGuests();  

    if(!menuPrincipal.value){
      showStatus('Elige si prefieres carne o pescado.',false);
      menuPrincipal.focus();
      return;
    }  

    for(let i=2;i<=total;i++){  
      const n=$(`f-guest-${i}-nombre`);  
      const t=$(`f-guest-${i}-tipo`);  
      const m=$(`f-guest-${i}-menu`);
      const a=$(`f-guest-${i}-alergias`);  

      const nombreInvitado=n?.value.trim()||'';  
      const tipoInvitado=t?.value||'';  
      const menuInvitado=m?.value||'';  

      if(!nombreInvitado){
        showStatus(`Falta el nombre del acompañante ${i-1}.`,false);
        n?.focus();
        return;
      }  

      if(!tipoInvitado){
        showStatus(`Falta elegir si el acompañante ${i-1} quiere menú adulto o menú niño.`,false);
        t?.focus();
        return;
      }  

      if(!menuInvitado){
        showStatus(`Falta elegir el menú del acompañante ${i-1}.`,false);
        m?.focus();
        return;
      }  

      invitados.push({
        numero:i,
        nombre:nombreInvitado,
        tipoMenu:tipoInvitado,
        menu:menuInvitado,
        alergias:a?.value.trim() || ''
      });
    }  
  }  

  const datos={  
    nombre,  
    asiste,  
    menu: isAttending()?menuPrincipal.value:'',  
    acompanantes: isAttending()?acompInput.value:'0',  
    invitados: JSON.stringify(invitados),  
    alergias: isAttending()?($('f-alergias').value.trim()||'ninguna'):'',  
    mensaje:$('f-msg').value.trim()  
  };  

  // Modo Google Sheets  
  sendBtn.disabled=true; 
  showStatus('Enviando…');  

  try{  
    await fetch(CONFIG.rsvp.sheetURL,{
      method:'POST',
      mode:'no-cors',
      body:new URLSearchParams(datos)
    });  

    showStatus(isAttending()?'¡Confirmado! Nos vemos en la isla.':'Nos da mucha pena que no puedas venir, pero gracias por avisarnos.',true);  

    $('f-nombre').value='';  
    menuPrincipal.value='';  
    acompInput.value='1';  
    guestList.innerHTML='';  
    $('f-alergias').value='';  
    $('f-msg').value='';  
    sendBtn.disabled=false;  
    updateAttendanceUI();  
  }catch(err){  
    sendBtn.disabled=false;  
    showStatus('No se pudo enviar. Revisa la conexión e inténtalo otra vez.',false);  
  }  
});  

/* ---- Nav + progreso ---- */  
const nav=$('nav'), prog=$('progress');  

addEventListener('scroll',()=>{  
  const sc=scrollY, max=document.body.scrollHeight-innerHeight;  
  prog.style.width=(sc/max*100)+'%';  
  nav.classList.toggle('show',sc>innerHeight*.85);  
},{passive:true});  

/* ---- Reveal ---- */  
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    e.target.classList.add('in');
    io.unobserve(e.target);
  }
}),{threshold:.12});  

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));  

/* ---- Línea del plan que se dibuja con el scroll ---- */
const planTimeline = document.getElementById('plan');

function updatePlanTimelineProgress() {
  if (!planTimeline) return;

  const rect = planTimeline.getBoundingClientRect();
  const viewportH = window.innerHeight || document.documentElement.clientHeight;

  const start = viewportH * 0.75;
  const end = viewportH * 0.25;

  const total = rect.height + start - end;
  const current = start - rect.top;

  const progress = Math.min(1, Math.max(0, current / total));

  planTimeline.style.setProperty('--plan-progress', `${progress * 100}%`);
}

window.addEventListener('scroll', updatePlanTimelineProgress, { passive: true });
window.addEventListener('resize', updatePlanTimelineProgress);
updatePlanTimelineProgress();

/* ---- Estrellas ---- */  
const starbox=$('stars');  

for(let i=0;i<90;i++){
  const s=document.createElement('span');
  s.className='star';  
  s.style.left=Math.random()*100+'%';
  s.style.top=Math.random()*70+'%';  
  s.style.animationDelay=(Math.random()*4)+'s';  
  const sz=Math.random()<.2?2.5:1.5;
  s.style.width=s.style.height=sz+'px';  
  starbox.appendChild(s);
}  

/* ---- CIELO QUE ATARDECE (scroll-driven) ---- */  
const sky=$('sky'), celest=$('celest'), moon=$('moon');  

// keyframes: [t=0 atardecer] -> [t=.5 dorado] -> [t=1 noche]  
const TOP=[
  '#FFF9D7', // amarillo suave
  '#FFD79A', // golden hour
  '#F7C3AE'  // rosa melocotón
];

const MID=[
  '#FFE2A8',
  '#F7B977',
  '#EFA39B'
];

const HOR=[
  '#FFD99B',
  '#EEA46A',
  '#D98E88'
];

const hex=h=>{
  h=h.replace('#','');
  return[
    parseInt(h.slice(0,2),16),
    parseInt(h.slice(2,4),16),
    parseInt(h.slice(4,6),16)
  ];
};  

const lerp=(a,b,t)=>Math.round(a+(b-a)*t);  

function pick(arr,p){ 
  // interpolación por tramos 0-.5-1  
  let a,b,t; 
  if(p<.5){
    a=hex(arr[0]);
    b=hex(arr[1]);
    t=p/.5;
  }else{
    a=hex(arr[1]);
    b=hex(arr[2]);
    t=(p-.5)/.5;
  }  
  return `rgb(${lerp(a[0],b[0],t)},${lerp(a[1],b[1],t)},${lerp(a[2],b[2],t)})`;  
}  

let ticking=false;  

function paintSky(){  
  const max=document.body.scrollHeight-innerHeight;  
  const p=Math.min(1,Math.max(0,scrollY/(max||1)));  

  sky.style.background=`linear-gradient(to bottom,${pick(TOP,p)} 0%,${pick(MID,p)} 55%,${pick(HOR,p)} 100%)`;  

  // sol baja y se apaga  
  celest.style.top=(48+p*28)+'vh';
  celest.style.opacity = 1 - (p * 0.45); 
  //celest.style.opacity=Math.max(0,1-p*1.6);  
  celest.style.filter=`blur(${p*2}px)`;  

  // estrellas y luna aparecen de noche  
  starbox.style.opacity = 0;  
  moon.style.opacity = 0;  
  //starbox.style.opacity=Math.max(0,(p-.5)/.5)*.95;  
  //moon.style.opacity=Math.max(0,(p-.55)/.45)*.9;  

  ticking=false;  
}  

addEventListener('scroll',()=>{
  if(!ticking&&!reduce){
    ticking=true;
    requestAnimationFrame(paintSky);
  }
},{passive:true});  

paintSky();  

/* ---- Olas + avión (parados si se prefiere menos movimiento) ---- */  
if(reduce){  
  const pm=$('planeMotion'); 
  if(pm) pm.setAttribute('dur','9999s');  
}else{  
  const w1=document.querySelector('.w1'),w2=document.querySelector('.w2');
  let t=0;  

  (function drift(){
    t+=.6;  
    if(w1)w1.setAttribute('transform',`translate(${-60+30*Math.sin(t/30)},0)`);  
    if(w2)w2.setAttribute('transform',`translate(${-90+40*Math.cos(t/26)},0)`);  
    requestAnimationFrame(drift);
  })();  
}

/* =========================
   SOBRE INTRO MÓVIL + PC
   ========================= */

const isMobileEnvelope = window.innerWidth <= 640;

function lockPageScroll() {
  document.body.classList.add('envelope-locked');
}

function unlockPageScroll() {
  document.body.classList.remove('envelope-locked');
  window.scrollTo(0, 0);
}

function forceShowPageIfSomethingFails() {
  document.body.classList.remove('loading');
}

forceShowPageIfSomethingFails();

function initMobileEnvelope() {
  const intro = document.getElementById('mobile-intro');
  const cover = document.getElementById('mobile-cover');
  const video = document.getElementById('mobile-video');
  const desktopEnvelope = document.getElementById('desktop-envelope');

  if (desktopEnvelope) {
    desktopEnvelope.remove();
  }

  if (!intro || !cover || !video) {
    unlockPageScroll();
    return;
  }

  let opened = false;

  lockPageScroll();

  function finishMobileIntro() {
    intro.classList.add('hide');

    setTimeout(() => {
      intro.remove();
      unlockPageScroll();
    }, 800);
  }

  function openMobileEnvelope(e) {
    if (e) {
      e.preventDefault();
    }

    if (opened) return;
    opened = true;

    cover.style.display = 'none';
    video.style.opacity = '1';

    video.play().catch(() => {
      finishMobileIntro();
    });
  }

  cover.addEventListener('click', openMobileEnvelope);

  intro.addEventListener('touchmove', openMobileEnvelope, {
    passive: false
  });

  intro.addEventListener('wheel', openMobileEnvelope, {
    passive: false
  });

  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;

    const restante = video.duration - video.currentTime;

    if (restante < 0.5) {
      intro.classList.add('hide');
    }
  });

  video.addEventListener('ended', finishMobileIntro);
  video.addEventListener('error', finishMobileIntro);
}

function initDesktopEnvelope() {
  const mobileIntro = document.getElementById('mobile-intro');
  const envImg = document.getElementById('desktop-envelope-img');
  const envVideo = document.getElementById('desktop-envelope-video');
  const envContainer = document.getElementById('desktop-envelope');

  if (mobileIntro) {
    mobileIntro.remove();
  }

  if (!envImg || !envVideo || !envContainer) {
    unlockPageScroll();
    return;
  }

  let opened = false;

  lockPageScroll();

  function finishDesktopIntro() {
    envContainer.classList.add('closing');

    setTimeout(() => {
      envContainer.remove();
      unlockPageScroll();
    }, 1200);
  }

  function openDesktopEnvelope(e) {
    if (e) {
      e.preventDefault();
    }

    if (opened) return;
    opened = true;

    envImg.style.display = 'none';
    envVideo.style.display = 'block';

    envVideo.play().catch(() => {
      finishDesktopIntro();
    });
  }

  envImg.addEventListener('click', openDesktopEnvelope);

  envContainer.addEventListener('wheel', openDesktopEnvelope, {
    passive: false
  });

  envContainer.addEventListener('touchmove', openDesktopEnvelope, {
    passive: false
  });

  envVideo.addEventListener('ended', finishDesktopIntro);
  envVideo.addEventListener('error', finishDesktopIntro);
}

if (isMobileEnvelope) {
  initMobileEnvelope();
} else {
  initDesktopEnvelope();
}

const addCalendarBtn = document.getElementById('add-calendar');

if (addCalendarBtn) {

  addCalendarBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const ics = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AnaisJuanWedding//ES
BEGIN:VEVENT
UID:${Date.now()}@anaisjuan.es
DTSTAMP:20260709T120000Z
DTSTART:20270424T100000Z
DTEND:20270424T220000Z
SUMMARY:Juan y Anaïs se casan ♡
LOCATION: Catedral de Santa Maria, Dalt Vila, Ibiza, Illes Balears
DESCRIPTION: 12:00 Ceremonia - Dalt Vila & 14:00 Recepción - Can Curreu
END:VCALENDAR
`.trim();

    const blob = new Blob([ics], {
      type: 'text/calendar;charset=utf-8'
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Boda_Anais_Juan.ics';

    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
  });

}
