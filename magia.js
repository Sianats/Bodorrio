const CONFIG = {
  novia:"Anaïs",  
  novio:"Juan",  
  fechaISO:"2027-04-24T12:00:00",          // mueve la cuenta atrás  
  fechaTexto:"Sábado · 24 Abril 2027",  
  diaCorto:"24 de Abril",  
  rsvpLimite:"Confírmanos antes del 11 de Noviembre de 2026.",  
  cierreFrase:"Bajo el mismo sol, entre dos mares",  
  isla:{  
    novia:{nombre:"Ibiza", coords:"38°54′N · 1°26′E", coordsLargo:"38°54′N · 1°26′E · Mediterráneo",  
           desc:"Pinos, sal y atardeceres de las Pitiusas."},  
    novio:{nombre:"Lanzarote", coords:"29°03′N · 13°38′O", coordsLargo:"29°03′N · 13°38′O · Atlántico",  
           desc:"Lava, viento y cielos de fuego en el Atlántico."},  
  },  
  distancia:"1.700 km",  
  historia:[  
    {when:"El principio", head:"Dos islas, un encuentro", body:"Ella creció con los pies en el Mediterráneo; él, sobre roca volcánica. El mapa los tenía lejos, pero el destino no."},  
    {when:"El camino", head:"Mil kilómetros de mar", body:"Vuelos, mensajes y escapadas. Aprendimos que el hogar no es una isla: es la persona."},  
    {when:"El momento", head:"El siguiente paso", body:"Con todo lo vivido, decidimos apostar por nosotros."},  
  ],  
  lugar:{nombre:"Dalt Vila", direccion:"Plaça de la Catedral, 1, 07800 Eivissa, Illes Balears",  
         mapaURL:"https://maps.app.goo.gl/wqo9e8dKhwTPpv9H6"},  
  convite:{nombre:"Can Curreu", direccion:"Diseminado P 4 San Carlos, 79, 07850, Illes Balears",  
         mapaURL:"https://maps.app.goo.gl/N8NfjNphF6gvEHzXA"},  
  itinerario:[  
    {hora:"12:00", titulo:"Ceremonia", sub:"Al Mediodia"},  
    {hora:"14:00", titulo:"Cóctel", sub:"En una Casa Payesa"},  
    {hora:"16:00", titulo:"Comida", sub:"Entre pinos y olivos"},  
    {hora:"18:30", titulo:"Fiesta", sub:"Hasta que caiga el sol"},  
  ],  
  viajeIntro:"Venís de lejos y nos hace mucha ilusión. Aquí tenéis lo esencial para organizar el viaje.",  
  viaje:[  
    {ico:"Cómo llegar", titulo:"Vuelos a Ibiza (IBZ)", texto:"Conexiones directas desde Madrid, Barcelona, Valencia y Palma. Desde Canarias, escala en la península."},  
    {ico:"En la isla", titulo:"Coche de alquiler", texto:"Lo más cómodo para moverse. Los novios recomiendan MotoLuis."},  
    {ico:"Dónde dormir", titulo:"Zona Santa Eulària", texto:"Hoteles y agroturismos cerca del lugar. Contactad con los novios para recomendaciones y descuentos."},  
    {ico:"Detalle", titulo:"Desplazamiento", texto:"Con alcohol de por medio, siempre es mejor ir en taxi o designar al sobrio del grupo... </br> ¡Suerte a esa persona!"},  
  ],  
  vestimenta:{titulo:"Semi-formal",   
    texto:"Colores primaverales, rebequita y zapato cómodo: habrá césped, baile y mucho alcohol. Aunque el blanco no está en la lista, aquí hay recomendaciones que no os harán desentonar:",  
    paleta:["#DD874E","#EAAF7A","#D65A57","#E7C878","#B9B45E","#9E92A6","#9AA8BC"]},  
  regalo:{texto:"Vuestra presencia es lo único imprescindible. Si además queréis regalarnos algo pero no sabeis qué...",  
    opciones:[  
      {label:"IBAN", valor:"ES03 0049 4973 5323 1701 5930"},  
      {label:"Bizum", valor:"649 888 277"},  
    ]},  
  faq:[  
    {q:"¿Puedo llevar acompañante?", a:"Puedes indicarlo al confirmar tu asistencia y lo tendremos en cuenta para el catering. Eso sí, ante la duda, siempre es un acierto preguntar antes, ya que no podemos incluir a personas con las que no tengamos relación directa."},  
    {q:"¿Los niños son bienvenidos?", a:"¡Claro! Avísanos para preparar su sitio y su menú."},  
    {q:"¿Hay aparcamiento?", a:"Sí, en el propio lugar."},  
    {q:"¿Hasta cuándo confirmo?", a:"Cuanto antes mejor, y como muy tarde en la fecha indicada en la sección de confirmación."},  
  ],  
  // RSVP -> Google Sheets (mediante Apps Script).  
  // Pega en sheetURL la URL que termina en /exec de tu "Aplicación web" de Apps Script.  
  // Alternativas: modo:"whatsapp" o "email" (usan "destino" en vez de sheetURL).  
  rsvp:{  
    modo:"sheets",  
    sheetURL:"https://script.google.com/macros/s/AKfycbyAbJzySf3zyxI7tgr2ooXxcpwXpZPpwCv2Kav7enNx1Gwu1RII1Y5byVCOxrB6Xe1ZIg/exec",  
    destino:"34600000000",  
  },  
};  

window.addEventListener('load', () => {
  document.body.classList.remove('loading');});

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
document.title=`${CONFIG.novio} y ${CONFIG.novia} · Nos casamos`;  

/* ---- Render listas ---- */  
$('story').innerHTML=CONFIG.historia.map(b=>  
  `<div class="beat"><div class="dot"></div><div><div class="when">${b.when}</div><div class="head">${b.head}</div><div class="body">${b.body}</div></div></div>`).join('');  

$('plan').innerHTML=CONFIG.itinerario.map(i=>  
  `<div class="item"><div class="t">${i.hora}</div><div class="ev"><span class="h">${i.titulo}</span>${i.sub?` <span class="s">· ${i.sub}</span>`:''}</div></div>`).join('');  

$('viaje-cards').innerHTML=CONFIG.viaje.map(c=>  
  `<div class="card"><div class="ico">${c.ico}</div><h4>${c.titulo}</h4><p>${c.texto}</p></div>`).join('');  

$('swatches').innerHTML=CONFIG.vestimenta.paleta.map(c=>`<span class="swatch" style="background:${c}"></span>`).join('');  

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

function clampGuests(){
  let n = parseInt(acompInput.value,10);
  if (Number.isNaN(n)) n = 1;
  n = Math.max(1, Math.min(10,n));
  acompInput.value = n;
  return n;
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

acompInput.addEventListener('input',renderGuests);  
acompInput.addEventListener('blur',renderGuests);  

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
        menu:menuInvitado
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

  // Alternativas WhatsApp / email  
  if(CONFIG.rsvp.modo==='whatsapp'||CONFIG.rsvp.modo==='email'){  
    const invitadosTxt=invitados.length?`  
Invitados:  
${invitados.map(i=>`- ${i.nombre}: ${i.tipoMenu} · ${i.menu}`).join('\n')}`:'';  

    const texto=`¡Hola! Confirmo para vuestra boda.  
Nombre: ${datos.nombre}  
Asistencia: ${datos.asiste}${datos.menu?`  
Menú principal: ${datos.menu}`:''}  
Total asistentes: ${datos.acompanantes}${invitadosTxt}${datos.alergias?`  
Alergias: ${datos.alergias}`:''}${datos.mensaje?`  
Mensaje: ${datos.mensaje}`:''}`;  

    if(CONFIG.rsvp.modo==='email'){
      location.href=`mailto:${CONFIG.rsvp.destino}?subject=${encodeURIComponent('Confirmación de asistencia')}&body=${encodeURIComponent(texto)}`;
    }else{
      window.open(`https://wa.me/${CONFIG.rsvp.destino}?text=${encodeURIComponent(texto)}`,'_blank');
    }  
    return;  
  }  

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
const TOP=['#FFE5D9','#FBC4AB','#FADCD9'];  
const MID=['#FBC4AB','#F7A8A4','#E8877F'];  
const HOR=['#FFE5D9','#FBC4AB','#EAA190'];  

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
  celest.style.top=(56+p*40)+'vh';  
  celest.style.opacity = 1 - (p * 0.85);  
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

/* ---- SOBRE SUAVE ---- */

const gate=document.getElementById('envelope-gate');
const btn=document.getElementById('open-envelope');

if(gate && btn){
  btn.addEventListener('click',()=>{

    if(gate.classList.contains('is-opening')) return;

    gate.classList.add('is-opening');

    gate.addEventListener('transitionend',function handler(){

      if(!gate.classList.contains('is-opening')) return;

      gate.removeEventListener('transitionend',handler);

      gate.classList.add('is-unfolding');

      requestAnimationFrame(()=>{
        gate.classList.add('is-hiding');
        document.body.classList.remove('envelope-locked');
      });

      setTimeout(()=>{
        gate.style.display='none';
      },600);

    });

  });
}
