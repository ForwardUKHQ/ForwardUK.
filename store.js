/* Replace this adapter with an authenticated API to enable shared, secure data. */
window.ForwardStore = (() => {
 const KEY='forward-uk-v1'; let memory;
 const clone=o=>JSON.parse(JSON.stringify(o));
 function read(){try {return JSON.parse(localStorage.getItem(KEY)) || clone(window.FORWARD_SEED);} catch {return memory || clone(window.FORWARD_SEED);}}
 function save(data){try{localStorage.setItem(KEY,JSON.stringify(data));}catch{throw new Error('Browser storage is full or unavailable. Export a backup before continuing.');}memory=data;window.dispatchEvent(new Event('forward:update'));}
 const routes=['home','manifesto','policies','news','events','representatives','leadership','branches','campaign','membership','member','privacy','accessibility'];
 const collections=['policies','manifestos','news','events','representatives','leadership','branches','announcements','campaign','volunteers','media','navigation','socials','members','registrations'];
 function validate(d){if(!d || d.version!==1 || !d.settings || collections.some(k=>!Array.isArray(d[k])))throw new Error('This is not a valid Forward UK backup.');for(const [key,value] of Object.entries(window.FORWARD_SEED.settings)){if(typeof d.settings[key]!==typeof value)throw new Error('Missing or invalid setting: '+key);if(key.endsWith('Count')&&(!Number.isFinite(d.settings[key])||d.settings[key]<0))throw new Error('Invalid statistic: '+key);}for(const k of collections){const ids=new Set();for(const r of d[k]){if(!r || typeof r.id!=='string'||!r.id||typeof r.title!=='string'||ids.has(r.id))throw new Error('Invalid or duplicate records in '+k);ids.add(r.id);for(const [key,value] of Object.entries(r)){if(!['string','boolean','number'].includes(typeof value)&&key!=='opportunities')throw new Error('Invalid field: '+key);if(key==='opportunities'&&(!Array.isArray(value)||value.some(v=>typeof v!=='string')))throw new Error('Invalid volunteer interests');}if(k==='members'&&['email','number','joined','constituency','status'].some(key=>typeof r[key]!=='string'))throw new Error('Incomplete member record');}}return d;}
 return {read,save,validate,routes,collections,
 updateSettings(values){const d=read();Object.assign(d.settings,values);save(d);},
 upsert(collection,record){const d=read();if(!collections.includes(collection))throw new Error('Unknown collection');let i=d[collection].findIndex(x=>x.id===record.id);if(i<0)d[collection].push(record);else d[collection][i]=record;save(d);},
 remove(collection,id){const d=read();d[collection]=d[collection].filter(x=>x.id!==id);save(d);},
 publicSeed(){const d=read();d.members=[];d.registrations=[];return d;},
 subscribe(fn){window.addEventListener('storage',fn);window.addEventListener('forward:update',fn);},
 escape:s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
 safeURL:u=>{try{const v=new URL(u,location.href);return ['http:','https:'].includes(v.protocol)?v.href:'#';}catch{return '#';}},
 download(name,text,type='application/json'){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}
 };
})();
