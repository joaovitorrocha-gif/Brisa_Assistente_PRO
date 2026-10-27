(() => {
  const ID = "brisa-super-assistente";
  const old = document.getElementById(ID);
  if (old) { old.remove(); return; }

  const KEY = "brisaSuperAssistant_v1";
  const defaults = [
    {cat:"Abertura", title:"Apresentação", text:"Olá! Tudo bem? Meu nome é Vitor e vou te ajudar com seu atendimento. 😊"},
    {cat:"Financeiro", title:"Boleto por e-mail", text:"Posso encaminhar o boleto para o e-mail cadastrado e o código de barras por SMS."},
    {cat:"Financeiro", title:"Brisa Cliente", text:"Pelo aplicativo Brisa Cliente, você consegue consultar suas faturas e realizar o pagamento pelas opções disponíveis."},
    {cat:"Encerramento", title:"Encerramento cordial", text:"Agradeço pelo contato! Foi um prazer te atender. Se precisar, estaremos à disposição. 😊"}
  ];
  let data;
  try { data = JSON.parse(localStorage.getItem(KEY)) || {}; } catch { data = {}; }
  data.replies = Array.isArray(data.replies) ? data.replies : defaults;
  const root = document.createElement("div");
  root.id = ID;
  root.innerHTML = `
  <style>
    #${ID}{position:fixed;z-index:2147483647;right:18px;top:90px;width:360px;max-height:82vh;color:#edf2ff;font:13px/1.45 Inter,system-ui,Arial,sans-serif}
    #${ID} *{box-sizing:border-box} #${ID} .shell{background:#101522;border:1px solid #30394d;border-radius:18px;box-shadow:0 18px 60px #0009;overflow:hidden}
    #${ID} .head{display:flex;align-items:center;gap:9px;padding:12px 14px;background:linear-gradient(120deg,#19243a,#111827);cursor:move;border-bottom:1px solid #30394d}
    #${ID} .brand{font-weight:800;font-size:14px;letter-spacing:.2px} #${ID} .sub{font-size:10px;color:#9eacc6}
    #${ID} button,#${ID} input,#${ID} select,#${ID} textarea{font:inherit}
    #${ID} button{border:1px solid #39455d;background:#202b40;color:#f5f7ff;padding:7px 9px;border-radius:9px;cursor:pointer}
    #${ID} button:hover{background:#2b3a55} #${ID} .close{margin-left:auto;background:#42242c;border-color:#693440}
    #${ID} .tabs{display:flex;gap:5px;padding:9px 10px;background:#131a28;overflow:auto}
    #${ID} .tabs button{white-space:nowrap;font-size:11px} #${ID} .tabs button.active{background:#185e58;border-color:#2b9b8e}
    #${ID} .body{padding:12px;overflow:auto;max-height:calc(82vh - 104px)} #${ID} .timer{display:flex;align-items:center;justify-content:space-between;background:#0c111c;border:1px solid #27334a;padding:12px;border-radius:12px;margin-bottom:10px}
    #${ID} .time{font-size:25px;font-weight:800;font-variant-numeric:tabular-nums;color:#63e6be} #${ID} .muted{color:#9eacc6;font-size:11px}
    #${ID} .field{display:flex;flex-direction:column;gap:5px;margin:8px 0} #${ID} label{color:#b9c5dc;font-size:11px}
    #${ID} input,#${ID} select,#${ID} textarea{width:100%;background:#0c111c;color:#edf2ff;border:1px solid #303b52;border-radius:9px;padding:9px;outline:none}
    #${ID} textarea{resize:vertical;min-height:76px} #${ID} .row{display:flex;gap:6px} #${ID} .row>*{flex:1;min-width:0}
    #${ID} .list{display:flex;flex-direction:column;gap:7px;margin-top:10px} #${ID} .item{padding:10px;border:1px solid #2a354a;background:#151d2c;border-radius:11px}
    #${ID} .itemtop{display:flex;align-items:center;gap:6px;margin-bottom:5px} #${ID} .itemtop strong{flex:1} #${ID} .pill{font-size:10px;color:#78e7d1;background:#153a3a;padding:2px 6px;border-radius:20px}
    #${ID} .replytext{white-space:pre-wrap;color:#cbd5e7;margin:5px 0 9px;max-height:85px;overflow:auto}
    #${ID} .primary{background:#126d63;border-color:#218e80} #${ID} .danger{background:#40232b;border-color:#6d3744} #${ID} .note{background:#172338;border-radius:9px;padding:9px;color:#b9c8df;font-size:11px}
    #${ID} .hidden{display:none!important} #${ID} .mini{font-size:10px;padding:5px 7px!important}
  </style>
  <div class="shell">
    <div class="head" id="brisa-drag"><div style="font-size:22px">◈</div><div><div class="brand">BRISA • ASSISTENTE PRO</div><div class="sub">Ferramentas rápidas de atendimento</div></div><button class="close mini" id="brisa-close" title="Fechar">✕</button></div>
    <div class="tabs">
      <button data-tab="respostas" class="active">✉ Respostas</button><button data-tab="tempo">◷ Cronômetro</button><button data-tab="conversa">▤ Conversa</button><button data-tab="relatorio">▣ Relatório</button>
    </div>
    <div class="body">
      <section data-page="respostas">
        <div class="field"><label>Pesquisar respostas</label><input id="brisa-search" placeholder="Ex.: boleto, cancelamento, encerramento..."></div>
        <div class="row"><div class="field"><label>Categoria</label><select id="brisa-catfilter"><option value="">Todas</option></select></div><button id="brisa-export" style="align-self:end;margin-bottom:8px">Exportar backup</button></div>
        <div class="note">As respostas ficam salvas neste navegador. Use “Copiar” para revisar e colar manualmente no chat.</div>
        <div id="brisa-replies" class="list"></div>
        <hr style="border:0;border-top:1px solid #30394d;margin:14px 0">
        <strong>Adicionar / editar resposta</strong>
        <div class="field"><label>Título</label><input id="brisa-title" placeholder="Ex.: Orientação sobre vencimento"></div>
        <div class="row"><div class="field"><label>Categoria</label><input id="brisa-category" placeholder="Financeiro"></div><div class="field"><label>Editar item</label><select id="brisa-edit"><option value="">Nova resposta</option></select></div></div>
        <div class="field"><label>Texto da resposta</label><textarea id="brisa-text" placeholder="Digite sua mensagem pronta..."></textarea></div>
        <div class="row"><button class="primary" id="brisa-save">Salvar resposta</button><button id="brisa-clear">Limpar campos</button></div>
        <div class="field"><label>Importar backup JSON</label><input type="file" id="brisa-import" accept=".json,application/json"></div>
      </section>
      <section data-page="tempo" class="hidden">
        <div class="timer"><div><div class="muted">TEMPO DECORRIDO</div><div class="time" id="brisa-time">00:00</div><div class="muted" id="brisa-timerstate">Pronto para iniciar</div></div><div style="font-size:26px">◷</div></div>
        <div class="row"><button class="primary" id="brisa-start">Iniciar</button><button id="brisa-pause">Pausar</button><button class="danger" id="brisa-reset">Zerar</button></div>
        <div class="field"><label>Aviso visual após (segundos)</label><input id="brisa-threshold" type="number" min="1" value="60"></div>
        <div id="brisa-alert" class="note">O cronômetro é independente do contador oficial do Genesys.</div>
        <p class="muted">Este contador mede o tempo desde o início manual. Ele não altera nem pausa o contador oficial da plataforma.</p>
      </section>
      <section data-page="conversa" class="hidden">
        <div class="note">Cole aqui a transcrição que você pode acessar no Genesys. O assistente organiza o texto localmente; não captura automaticamente dados da página.</div>
        <div class="field"><label>Transcrição</label><textarea id="brisa-transcript" style="min-height:220px" placeholder="Cole a conversa aqui..."></textarea></div>
        <div class="row"><button class="primary" id="brisa-copytranscript">Copiar conversa</button><button id="brisa-cleartranscript">Limpar</button></div>
        <div class="muted" id="brisa-charcount" style="margin-top:7px">0 caracteres</div>
      </section>
      <section data-page="relatorio" class="hidden">
        <div class="note">Preencha os dados disponíveis. Revise o texto antes de copiar para o sistema de registro.</div>
        <div class="row"><div class="field"><label>Canal</label><select id="brisa-channel"><option>Chat</option><option>Ligação</option></select></div><div class="field"><label>Confirmação de dados</label><select id="brisa-confirm"><option>Sim</option><option>Não</option></select></div></div>
        <div class="field"><label>Nome do cliente ou responsável</label><input id="brisa-client" placeholder="Nome"></div>
        <div class="field"><label>Tipo da solicitação</label><input id="brisa-request" placeholder="Ex.: segunda via de boleto"></div>
        <div class="field"><label>Informação adicional e desfecho</label><textarea id="brisa-info" placeholder="Contexto, orientações, encaminhamento e status"></textarea></div>
        <div class="field"><label>Protocolo</label><input id="brisa-protocol" placeholder="Número do protocolo"></div>
        <div class="field"><label>Link da interação (opcional)</label><input id="brisa-link" placeholder="https://..."></div>
        <div class="row"><button class="primary" id="brisa-generatereport">Gerar relatório</button><button id="brisa-copyreport">Copiar relatório</button></div>
        <div class="field"><label>Relatório gerado</label><textarea id="brisa-reportout" style="min-height:145px" placeholder="O relatório aparecerá aqui..."></textarea></div>
      </section>
    </div>
  </div>`;
  document.documentElement.appendChild(root);
  const $ = s => root.querySelector(s);
  const $$ = s => [...root.querySelectorAll(s)];
  const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch(e) { alert("Não foi possível salvar no armazenamento local."); } };
  const copy = async t => { try { await navigator.clipboard.writeText(t); alert("Copiado. Revise antes de enviar ao cliente."); } catch { const x=document.createElement("textarea");x.value=t;root.appendChild(x);x.select();document.execCommand("copy");x.remove();alert("Texto copiado. Revise antes de enviar."); } };
  const esc = s => String(s ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  function renderReplies() {
    const cats=[...new Set(data.replies.map(r=>r.cat).filter(Boolean))].sort();
    const filter=$("#brisa-catfilter"), prev=filter.value;
    filter.innerHTML='<option value="">Todas</option>'+cats.map(c=>`<option>${esc(c)}</option>`).join('');
    filter.value=cats.includes(prev)?prev:"";
    const search=$("#brisa-search").value.toLowerCase();
    const items=data.replies.map((r,i)=>({...r,i})).filter(r=>(!filter.value||r.cat===filter.value)&&(`${r.title} ${r.cat} ${r.text}`.toLowerCase().includes(search)));
    $("#brisa-replies").innerHTML=items.length?items.map(r=>`<div class="item"><div class="itemtop"><strong>${esc(r.title)}</strong><span class="pill">${esc(r.cat||"Geral")}</span></div><div class="replytext">${esc(r.text)}</div><div class="row"><button class="primary" data-copy="${r.i}">Copiar</button><button data-edit="${r.i}">Editar</button><button class="danger" data-delete="${r.i}">Excluir</button></div></div>`).join(''):'<div class="muted">Nenhuma resposta encontrada.</div>';
    $("#brisa-edit").innerHTML='<option value="">Nova resposta</option>'+data.replies.map((r,i)=>`<option value="${i}">${esc(r.title)}</option>`).join('');
  }
  function resetForm(){ $("#brisa-title").value="";$("#brisa-category").value="";$("#brisa-text").value="";$("#brisa-edit").value=""; }
  function selectTab(tab){$$("[data-tab]").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));$$("[data-page]").forEach(p=>p.classList.toggle("hidden",p.dataset.page!==tab));}
  $$("[data-tab]").forEach(b=>b.addEventListener("click",()=>selectTab(b.dataset.tab)));
  $("#brisa-close").addEventListener("click",()=>root.remove());
  $("#brisa-search").addEventListener("input",renderReplies);$("#brisa-catfilter").addEventListener("change",renderReplies);
  $("#brisa-replies").addEventListener("click",e=>{
    const b=e.target.closest("button");if(!b)return;
    if(b.dataset.copy!==undefined) copy(data.replies[+b.dataset.copy].text);
    if(b.dataset.edit!==undefined){const r=data.replies[+b.dataset.edit];$("#brisa-edit").value=b.dataset.edit;$("#brisa-title").value=r.title;$("#brisa-category").value=r.cat;$("#brisa-text").value=r.text;}
    if(b.dataset.delete!==undefined&&confirm("Excluir esta resposta?")){data.replies.splice(+b.dataset.delete,1);persist();renderReplies();}
  });
  $("#brisa-save").addEventListener("click",()=>{
    const r={title:$("#brisa-title").value.trim(),cat:$("#brisa-category").value.trim()||"Geral",text:$("#brisa-text").value.trim()};
    if(!r.title||!r.text){alert("Preencha o título e o texto da resposta.");return;}
    const idx=$("#brisa-edit").value;
    if(idx==="")data.replies.unshift(r);else data.replies[+idx]=r;
    persist();resetForm();renderReplies();alert("Resposta salva neste navegador.");
  });
  $("#brisa-clear").addEventListener("click",resetForm);
  $("#brisa-export").addEventListener("click",()=>{const blob=new Blob([JSON.stringify(data.replies,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="respostas-brisanet.json";a.click();URL.revokeObjectURL(a.href);});
  $("#brisa-import").addEventListener("change",async e=>{const f=e.target.files[0];if(!f)return;try{const val=JSON.parse(await f.text());if(!Array.isArray(val)||!val.every(r=>r&&typeof r.title==="string"&&typeof r.text==="string"))throw Error();if(confirm("Substituir suas respostas atuais pelas respostas do backup?")){data.replies=val;persist();renderReplies();alert("Backup importado.");}}catch{alert("Arquivo inválido. Use um backup JSON exportado por este painel.");}e.target.value="";});
  let elapsed=0, startedAt=0, running=false, tick=null;
  function updateTimer(){const total=Math.floor(elapsed+(running?(Date.now()-startedAt)/1000:0));const m=String(Math.floor(total/60)).padStart(2,"0"),s=String(total%60).padStart(2,"0");$("#brisa-time").textContent=`${m}:${s}`;const threshold=Math.max(1,parseInt($("#brisa-threshold").value,10)||60);const over=total>=threshold;$("#brisa-alert").textContent=over?`Atenção: ${m}:${s} — limite visual configurado atingido.`:"O cronômetro é independente do contador oficial do Genesys.";$("#brisa-alert").style.borderColor=over?"#b77935":"#27334a";$("#brisa-timerstate").textContent=running?(over?"Em andamento • limite atingido":"Em andamento"):(total?"Pausado":"Pronto para iniciar");}
  $("#brisa-start").addEventListener("click",()=>{if(!running){startedAt=Date.now();running=true;tick=setInterval(updateTimer,250);updateTimer();}});
  $("#brisa-pause").addEventListener("click",()=>{if(running){elapsed+=(Date.now()-startedAt)/1000;running=false;clearInterval(tick);updateTimer();}});
  $("#brisa-reset").addEventListener("click",()=>{running=false;clearInterval(tick);elapsed=0;startedAt=0;updateTimer();});
  $("#brisa-threshold").addEventListener("input",updateTimer);
  $("#brisa-transcript").addEventListener("input",()=>$("#brisa-charcount").textContent=$("#brisa-transcript").value.length+" caracteres");
  $("#brisa-copytranscript").addEventListener("click",()=>{const t=$("#brisa-transcript").value.trim();if(!t){alert("Cole a conversa antes de copiar.");return;}copy(t);});
  $("#brisa-cleartranscript").addEventListener("click",()=>{$("#brisa-transcript").value="";$("#brisa-charcount").textContent="0 caracteres";});
  $("#brisa-generatereport").addEventListener("click",()=>{
    const val=id=>$("#brisa-"+id).value.trim();
    let out=`; Ligação/Chat: ${val("channel")}; Confirmação de dados: ${val("confirm")}; Nome do cliente ou responsável: ${val("client")}; Tipo da solicitação: ${val("request")}; Informação Adicional: ${val("info")}; Protocolo de atendimento: ${val("protocol")}.`;
    if(val("link"))out+="\n"+val("link");
    $("#brisa-reportout").value=out;
  });
  $("#brisa-copyreport").addEventListener("click",()=>{const t=$("#brisa-reportout").value.trim();if(!t){alert("Gere o relatório primeiro.");return;}copy(t);});
  // Drag panel by header; clamp to viewport.
  const head=$("#brisa-drag");let drag=null;
  head.addEventListener("pointerdown",e=>{if(e.target.closest("button"))return;const r=root.getBoundingClientRect();drag={x:e.clientX-r.left,y:e.clientY-r.top};head.setPointerCapture(e.pointerId);});
  head.addEventListener("pointermove",e=>{if(!drag)return;root.style.left=Math.max(0,Math.min(innerWidth-root.offsetWidth,e.clientX-drag.x))+"px";root.style.top=Math.max(0,Math.min(innerHeight-60,e.clientY-drag.y))+"px";root.style.right="auto";});
  head.addEventListener("pointerup",()=>drag=null);head.addEventListener("pointercancel",()=>drag=null);
  renderReplies(); updateTimer();
})();
