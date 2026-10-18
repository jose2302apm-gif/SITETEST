/* VITRINE 2.2 — catálogo de demonstração. Atualize dados, preços e links antes de publicar. */
const products=[
{id:1,name:"Fone Bluetooth Pulse",category:"Tecnologia",price:189.90,oldPrice:249.90,discount:24,rating:"4,9",label:"EXEMPLO",featured:true,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30b?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1505740420928-5e560c06d30b?auto=format&fit=crop&w=1100&q=85","https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85"],description:"Som envolvente, visual moderno e conforto para acompanhar sua rotina. Confira todos os detalhes e a compatibilidade antes de escolher.",specs:"Consulte no anúncio as características técnicas, autonomia, conectividade, garantia e conteúdo da embalagem.",affiliateUrl:"https://example.com/seu-link-afiliado-1",videoUrl:""},
{id:2,name:"Relógio Minimal Urban",category:"Acessórios",price:139.90,oldPrice:199.90,discount:30,rating:"4,8",label:"EXEMPLO",featured:true,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1100&q=85","https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85"],description:"Um acessório elegante e fácil de combinar. O design minimalista funciona em ocasiões casuais ou em produções mais arrumadas.",specs:"Confira materiais, dimensões, resistência à água e garantia na página do vendedor.",affiliateUrl:"https://example.com/seu-link-afiliado-2",videoUrl:""},
{id:3,name:"Luminária Studio",category:"Casa",price:89.90,oldPrice:119.90,discount:25,rating:"4,7",label:"EXEMPLO",featured:true,image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1100&q=85","https://images.unsplash.com/photo-1507474306266-8c1e5a4e3f9b?auto=format&fit=crop&w=900&q=85"],description:"Uma luz acolhedora para dar personalidade à mesa de trabalho, ao quarto ou ao cantinho de leitura.",specs:"Verifique voltagem, dimensões, tipo de lâmpada e instruções de uso no anúncio.",affiliateUrl:"https://example.com/seu-link-afiliado-3",videoUrl:""},
{id:4,name:"Tênis Everyday",category:"Estilo",price:219.90,oldPrice:279.90,discount:21,rating:"4,9",label:"EXEMPLO",featured:true,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1100&q=85","https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85"],description:"Um tênis de visual marcante para acompanhar a rotina. Confira numeração, cores e medidas para escolher com mais segurança.",specs:"Consulte a tabela de medidas, os materiais e as orientações de conservação no anúncio.",affiliateUrl:"https://example.com/seu-link-afiliado-4",videoUrl:""},
{id:5,name:"Caixa de Som Compacta",category:"Tecnologia",price:119.90,oldPrice:159.90,discount:25,rating:"4,8",label:"EXEMPLO",featured:false,image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1100&q=85","https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=85"],description:"Uma alternativa compacta para ouvir suas músicas em diferentes ambientes. Compare potência, autonomia e conexões.",specs:"Consulte potência, autonomia, tipo de conexão e garantia na loja parceira.",affiliateUrl:"https://example.com/seu-link-afiliado-5",videoUrl:""},
{id:6,name:"Mochila Daily",category:"Acessórios",price:99.90,oldPrice:139.90,discount:29,rating:"4,7",label:"EXEMPLO",featured:false,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1100&q=85","https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=900&q=85"],description:"Uma mochila versátil para os compromissos do dia a dia. Veja as dimensões e os compartimentos antes de comprar.",specs:"Confira capacidade, dimensões, material e compartimentos na página do vendedor.",affiliateUrl:"https://example.com/seu-link-afiliado-6",videoUrl:""},
{id:7,name:"Caneca Térmica",category:"Casa",price:69.90,oldPrice:89.90,discount:22,rating:"4,8",label:"EXEMPLO",featured:false,image:"https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1100&q=85","https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&w=900&q=85"],description:"Uma companheira prática para sua mesa, estudo ou trabalho. Confira capacidade, material e instruções de limpeza.",specs:"Consulte capacidade, conservação térmica e instruções de limpeza no anúncio.",affiliateUrl:"https://example.com/seu-link-afiliado-7",videoUrl:""},
{id:8,name:"Óculos Solar Classic",category:"Estilo",price:79.90,oldPrice:109.90,discount:27,rating:"4,6",label:"EXEMPLO",featured:false,image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1100&q=85","https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85"],description:"Um clássico que completa diferentes estilos. Confira formato, medidas e proteção das lentes descritos pelo vendedor.",specs:"Verifique proteção UV, dimensões e demais características no anúncio.",affiliateUrl:"https://example.com/seu-link-afiliado-8",videoUrl:""}
];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const money=n=>Number(n||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const STORAGE_KEY="vitrine-store-state-v3";
const safeRead=()=>{try{const value=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");return value&&typeof value==="object"&&!Array.isArray(value)?value:{}}catch{return {}}};
const initialState=safeRead();
function normalizeCart(value){
 if(!Array.isArray(value))return [];
 const quantities=new Map();
 for(const item of value){
  if(!item||typeof item!=="object")continue;
  const id=Number(item.id),qty=Number(item.qty);
  if(!products.some(p=>p.id===id)||!Number.isFinite(qty)||qty<1)continue;
  quantities.set(id,Math.min(99,(quantities.get(id)||0)+Math.floor(qty)));
 }
 return [...quantities.entries()].slice(0,products.length).map(([id,qty])=>({id,qty:Math.max(1,Math.min(99,qty))}));
}
let cart=normalizeCart(initialState.cart);
let favorites=new Set(Array.isArray(initialState.favorites)?initialState.favorites.map(Number).filter(id=>products.some(p=>p.id===id)):[]);
let activeCategory="Todos",activeProduct=null,quantity=1,toastTimer,favoritesOnly=false,lastFocus=null;
const policyCopy={
 privacidade:["Privacidade","Esta demonstração salva apenas carrinho e favoritos no armazenamento local deste navegador. Não envia esses dados a um servidor. Antes de publicar, atualize esta política conforme os serviços, cookies, analytics e dados que seu site realmente utilizar."],
 afiliados:["Como funcionam os links de afiliados","Alguns links podem direcionar para lojas parceiras. Se uma compra for realizada por meio deles, a Vitrine poderá receber comissão, sem custo adicional para o comprador. Preços, estoque, frete e condições são definidos pelo vendedor e devem ser confirmados na página de destino. Substitua os links de demonstração pelos seus links de afiliado válidos."],
 compras:["Compras e devoluções","A compra é concluída no site do vendedor parceiro, que define pagamento, entrega, garantia, troca e devolução. Confira as políticas e os dados da loja antes de finalizar. Esta vitrine não processa pagamentos."],
 contato:["Contato","Adicione aqui seu e-mail comercial e os canais oficiais de atendimento antes de publicar o site. Substitua também os links de redes sociais pelos endereços reais dos seus perfis."]
};
function escapeHTML(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
// Allowlist de imagens: origem própria e imagens Unsplash em HTTPS.
function safeImageURL(value){
 const raw=String(value??"").trim();
 try{
  const url=new URL(raw,window.location.href);
  if(url.username||url.password)return fallbackImage;
  if(url.protocol==="https:"&&url.hostname==="images.unsplash.com")return url.href;
  if((url.protocol==="https:"||url.protocol==="http:")&&url.origin===window.location.origin)return url.href;
  if(window.location.protocol==="file:"&&!/^[a-z][a-z0-9+.-]*:/i.test(raw)&&!raw.startsWith("//"))return raw;
 }catch{}
 return fallbackImage;
}
// Links externos de afiliados devem usar HTTPS e não podem conter credenciais ou placeholders.
function safeAffiliateURL(value){
 try{const url=new URL(String(value??""));if(url.protocol!=="https:"||url.username||url.password||url.hostname==="example.com"||url.hostname.endsWith(".example.com"))return null;return url.href}catch{return null}
}
function safeMediaURL(value){
 try{const url=new URL(String(value??""));if(url.protocol!=="https:"||url.username||url.password)return "";return url.href}catch{return ""}
}
function saveState(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify({cart,favorites:[...favorites]}))}catch{showToast("Não foi possível salvar os dados neste navegador.")}}
function discountPercent(p){if(!p.oldPrice||p.oldPrice<=p.price)return 0;return Math.round((1-p.price/p.oldPrice)*100)}
function productCard(p){
 const fav=favorites.has(p.id),discount=discountPercent(p);
 return `<article class="product-card" data-card="${p.id}" tabindex="0" aria-label="${escapeHTML(p.name)}. Pressione Enter para ver detalhes">
  <div class="product-image-wrap"><img class="product-image" src="${escapeHTML(safeImageURL(p.image))}" alt="${escapeHTML(p.name)}" loading="lazy" decoding="async" width="420" height="360"><span class="product-label">${escapeHTML(p.label||"EXEMPLO")}</span><button type="button" class="favorite-button ${fav?"is-favorite":""}" data-fav="${p.id}" aria-pressed="${fav}" aria-label="${fav?"Remover dos":"Adicionar aos"} favoritos" title="${fav?"Remover dos":"Adicionar aos"} favoritos">${fav?"♥":"♡"}</button></div>
  <div class="product-content"><span class="product-category">${escapeHTML(p.category)}</span><h3 class="product-name">${escapeHTML(p.name)}</h3><p class="product-card-note">Preço de demonstração</p>
  <div class="price-row"><div>${discount?`<span class="price-old">${money(p.oldPrice)}</span>`:""}<strong class="price-current">${money(p.price)}</strong></div>${discount?`<span class="price-discount">-${discount}%*</span>`:""}</div>
  <button type="button" class="product-open" data-open="${p.id}">Ver detalhes <span aria-hidden="true">↗</span></button></div></article>`;
}
function renderPromos(){const list=products.filter(p=>p.featured).sort((a,b)=>discountPercent(b)-discountPercent(a));$("#promoRail").innerHTML=list.map(productCard).join("");}
function getFilteredProducts(){
 let list=products.filter(p=>activeCategory==="Todos"||p.category===activeCategory);
 const q=$("#searchInput").value.trim().toLocaleLowerCase("pt-BR");
 if(q)list=list.filter(p=>(p.name+" "+p.category+" "+p.description+" "+p.specs).toLocaleLowerCase("pt-BR").includes(q));
 if(favoritesOnly)list=list.filter(p=>favorites.has(p.id));
 const priceFilter=$("#priceFilter")?.value||"all";
 if(priceFilter==="under100")list=list.filter(p=>p.price<=100);
 else if(priceFilter==="100to200")list=list.filter(p=>p.price>100&&p.price<=200);
 else if(priceFilter==="over200")list=list.filter(p=>p.price>200);
 if($("#offersOnly")?.checked)list=list.filter(p=>discountPercent(p)>0);
 const sort=$("#sortSelect").value;
 if(sort==="low")list.sort((a,b)=>a.price-b.price);
 else if(sort==="high")list.sort((a,b)=>b.price-a.price);
 else if(sort==="discount")list.sort((a,b)=>discountPercent(b)-discountPercent(a));
 else if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name,"pt-BR"));
 else list.sort((a,b)=>Number(b.featured)-Number(a.featured)||a.id-b.id);
 return list;
}
function renderProducts(){
 const list=getFilteredProducts(),q=$("#searchInput").value.trim();
 $("#productGrid").innerHTML=list.map(productCard).join("");
 $("#emptyState").classList.toggle("hidden",list.length!==0);
 $("#searchStatus").classList.toggle("hidden",!q&&!favoritesOnly&&activeCategory==="Todos"&&$("#priceFilter").value==="all"&&!$("#offersOnly").checked);
 $("#searchStatus").textContent=favoritesOnly?`Seus favoritos: ${list.length} produto(s).`:q?`${list.length} resultado(s) para “${q}”.`:`${list.length} produto(s) correspondem aos filtros.`;
 $("#catalogSubtitle").textContent=favoritesOnly?"Produtos que você salvou neste navegador.":q?"Resultados atualizados enquanto você digita.":"Explore a seleção ou use os filtros para encontrar o que procura.";
 $("#clearSearch").classList.toggle("visible",q.length>0);$("#favoriteCount").textContent=favorites.size;
 $$(".category-chip").forEach(b=>b.classList.toggle("active",b.dataset.category===activeCategory));
}
function renderAll(){renderPromos();renderProducts();renderCart();}
function showToast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2800)}
function updateCounts(){const count=cart.reduce((s,i)=>s+i.qty,0);$("#cartCount").textContent=count;$("#drawerCount").textContent=`(${count})`;$("#favoriteCount").textContent=favorites.size}
function addToCart(id,qty=1){const p=products.find(x=>x.id===Number(id));if(!p)return;const amount=Math.max(1,Math.min(99,Math.floor(Number(qty)||1)));const item=cart.find(x=>x.id===p.id);if(item)item.qty=Math.min(99,item.qty+amount);else cart.push({id:p.id,qty:amount});saveState();renderCart();showToast(`${p.name} foi adicionado ao carrinho.`)}
function renderCart(){
 const list=$("#cartItems");list.innerHTML=cart.map(i=>{const p=products.find(x=>x.id===i.id);if(!p)return "";return `<div class="cart-row"><img src="${escapeHTML(safeImageURL(p.image))}" alt="${escapeHTML(p.name)}" loading="lazy" width="80" height="80"><div><div class="cart-name">${escapeHTML(p.name)}</div><div class="cart-meta">${money(p.price)} cada · preço demonstrativo</div><div class="cart-price">${money(p.price*i.qty)}</div><div class="cart-controls"><button type="button" data-qty="-1" data-id="${p.id}" aria-label="Diminuir quantidade">−</button><span aria-live="polite">${i.qty}</span><button type="button" data-qty="1" data-id="${p.id}" aria-label="Aumentar quantidade">+</button></div><button type="button" class="cart-buy-one" data-buy="${p.id}">Ver na loja parceira ↗</button></div><button type="button" class="remove-item" data-remove="${p.id}" aria-label="Remover ${escapeHTML(p.name)}" title="Remover item">×</button></div>`}).join("");
 const empty=cart.length===0;$("#cartEmpty").classList.toggle("hidden",!empty);$("#drawerFooter").classList.toggle("hidden",empty);
 $("#cartTotal").textContent=money(cart.reduce((s,i)=>s+(products.find(p=>p.id===i.id)?.price||0)*i.qty,0));updateCounts();
}
function openCart(){closePolicy();lastFocus=document.activeElement;$("#overlay").classList.remove("hidden");$("#cartDrawer").classList.add("open");$("#cartDrawer").setAttribute("aria-hidden","false");document.body.classList.add("cart-open");$("#cartClose").focus()}
function closeCart(){if(!$("#cartDrawer").classList.contains("open"))return;$("#overlay").classList.add("hidden");$("#cartDrawer").classList.remove("open");$("#cartDrawer").setAttribute("aria-hidden","true");document.body.classList.remove("cart-open");if(lastFocus?.focus)lastFocus.focus()}
function showHome(){closeCart();$("#detailView").classList.add("hidden");$("#homeView").classList.remove("hidden");activeProduct=null;document.title="Vitrine — Achados que valem a pena";window.scrollTo({top:0,behavior:reducedMotion?"auto":"smooth"})}
function openProduct(id){const p=products.find(x=>x.id===Number(id));if(!p)return;closeCart();activeProduct=p;quantity=1;$("#homeView").classList.add("hidden");$("#detailView").classList.remove("hidden");$("#detailCategory").textContent=`Vitrine / ${p.category}`;$("#detailName").textContent=p.name;$("#detailDescription").textContent=p.description;$("#detailPrice").textContent=money(p.price);$("#detailOldPrice").textContent=p.oldPrice>p.price?money(p.oldPrice):"";$("#detailDiscount").textContent=discountPercent(p)?`-${discountPercent(p)}%*`:"";$("#detailBadge").textContent="EXEMPLO";$("#detailRating").textContent="Informações demonstrativas; consulte o anúncio oficial";$("#detailImage").src=safeImageURL((p.images||[])[0]||p.image);$("#detailImage").alt=p.name;$("#detailThumbnails").innerHTML=(p.images||[p.image]).map((src,i)=>`<button type="button" class="detail-thumb ${i===0?"active":""}" data-image="${escapeHTML(safeImageURL(src))}" aria-label="Ver foto ${i+1}"><img src="${escapeHTML(safeImageURL(src))}" alt="" loading="lazy" width="90" height="90"></button>`).join("");$("#detailVideoWrap").classList.toggle("hidden",!p.videoUrl);const mediaURL=safeMediaURL(p.videoUrl);if(mediaURL)$("#detailVideo").src=mediaURL;else $("#detailVideo").removeAttribute("src");$("#qtyValue").textContent=quantity;$("#specContent").textContent=p.specs;$("#specContent").classList.add("hidden");$("#specToggle span").textContent="＋";$("#saveDetail").textContent=favorites.has(p.id)?"♥ Salvo nos favoritos":"♡ Salvar nos favoritos";$("#saveDetail").classList.toggle("saved",favorites.has(p.id));document.title=`${p.name} | Vitrine`;window.scrollTo({top:0,behavior:reducedMotion?"auto":"smooth"})}
function buyProduct(p){if(!p)return;const url=safeAffiliateURL(p.affiliateUrl);if(!url){showToast("Link de afiliado inválido ou ainda não configurado. Use um endereço HTTPS real no script.js.");return;}const link=document.createElement("a");link.href=url;link.target="_blank";link.rel="noopener noreferrer sponsored";link.referrerPolicy="no-referrer";document.body.appendChild(link);link.click();link.remove()}
function buyCart(){if(!cart.length)return;if(cart.length>1){showToast("Abra cada produto pelo botão ‘Ver na loja parceira’; cada item pode ter um vendedor diferente.");return}buyProduct(products.find(p=>p.id===cart[0].id))}
function toggleFavorite(id){id=Number(id);if(!products.some(p=>p.id===id))return;if(favorites.has(id)){favorites.delete(id);showToast("Produto removido dos favoritos.")}else{favorites.add(id);showToast("Produto salvo nos favoritos.")}saveState();renderPromos();renderProducts();if(activeProduct&&activeProduct.id===id){$("#saveDetail").textContent=favorites.has(id)?"♥ Salvo nos favoritos":"♡ Salvar nos favoritos";$("#saveDetail").classList.toggle("saved",favorites.has(id))}}
function resetFilters(){$("#searchInput").value="";$("#priceFilter").value="all";$("#offersOnly").checked=false;$("#sortSelect").value="featured";activeCategory="Todos";favoritesOnly=false;renderProducts()}
function clearSearch(){if(!$("#searchInput").value&&!favoritesOnly)return;$("#searchInput").value="";favoritesOnly=false;renderProducts()}
function closePolicy(){const p=$("#policyPanel");if(p)p.classList.add("hidden")}
function showPolicy(key){const data=policyCopy[key];if(!data)return;closeCart();$("#policyTitle").textContent=data[0];$("#policyText").textContent=data[1];$("#policyPanel").classList.remove("hidden");$("#policyPanel").scrollIntoView({behavior:reducedMotion?"auto":"smooth",block:"center"})}
const reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// Fallback visual when an external image fails to load.
const fallbackImage="data:image/svg+xml;charset=UTF-8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><rect width="640" height="480" fill="#f0edff"/><g fill="none" stroke="#7865e8" stroke-width="7" opacity=".7"><rect x="240" y="145" width="160" height="130" rx="18"/><path d="M270 300h100M290 320h60"/></g><text x="320" y="370" text-anchor="middle" font-family="Arial" font-size="22" fill="#33266d">Imagem indisponível</text></svg>');
document.addEventListener("error",e=>{const img=e.target;if(img?.tagName==="IMG"&&!img.dataset.fallback){img.dataset.fallback="1";img.src=fallbackImage}},true);
// Delegated actions keep controls working when cards are rerendered.
document.addEventListener("click",e=>{
 const fav=e.target.closest("[data-fav]");if(fav){e.preventDefault();e.stopPropagation();toggleFavorite(fav.dataset.fav);return}
 const buy=e.target.closest("[data-buy]");if(buy){e.preventDefault();buyProduct(products.find(p=>p.id===Number(buy.dataset.buy)));return}
 const open=e.target.closest("[data-open]");if(open){openProduct(open.dataset.open);return}
 const card=e.target.closest("[data-card]");if(card&&!e.target.closest("button")){openProduct(card.dataset.card);return}
 const qty=e.target.closest("[data-qty]");if(qty){const item=cart.find(i=>i.id===Number(qty.dataset.id));if(item){item.qty+=Number(qty.dataset.qty);if(item.qty<=0)cart=cart.filter(i=>i.id!==item.id);if(item) item.qty=Math.min(99,item.qty);saveState();renderCart()}return}
 const rem=e.target.closest("[data-remove]");if(rem){cart=cart.filter(i=>i.id!==Number(rem.dataset.remove));saveState();renderCart();showToast("Produto removido do carrinho.");return}
 const thumb=e.target.closest("[data-image]");if(thumb){$("#detailImage").src=safeImageURL(thumb.dataset.image);$$(".detail-thumb").forEach(t=>t.classList.toggle("active",t===thumb));return}
 const social=e.target.closest("[data-social]");if(social){e.preventDefault();showToast(`Adicione o link real do ${social.dataset.social} no index.html.`);return}
 const info=e.target.closest("[data-info]");if(info){e.preventDefault();showPolicy(info.dataset.info);return}
 const cat=e.target.closest("[data-footer-category]");if(cat){activeCategory=cat.dataset.footerCategory;favoritesOnly=false;renderProducts();$("#catalogo").scrollIntoView({behavior:reducedMotion?"auto":"smooth"});return}
});
$$("[data-home]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();closePolicy();showHome()}));
$("#searchForm").addEventListener("submit",e=>{e.preventDefault();renderProducts();$("#catalogo").scrollIntoView({behavior:reducedMotion?"auto":"smooth",block:"start"})});
$("#searchInput").addEventListener("input",()=>{favoritesOnly=false;renderProducts()});$("#clearSearch").addEventListener("click",()=>{clearSearch();$("#searchInput").focus()});$("#resetSearch").addEventListener("click",()=>{resetFilters();$("#catalogo").scrollIntoView({behavior:reducedMotion?"auto":"smooth",block:"start"})});
$("#sortSelect").addEventListener("change",renderProducts);$("#priceFilter").addEventListener("change",renderProducts);$("#offersOnly").addEventListener("change",renderProducts);$("#resetFilters").addEventListener("click",resetFilters);
$("#categoryList").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;activeCategory=b.dataset.category;favoritesOnly=false;renderProducts();$("#catalogo").scrollIntoView({behavior:reducedMotion?"auto":"smooth",block:"start"})});
$("#railPrev").addEventListener("click",()=>$("#promoRail").scrollBy({left:-$("#promoRail").clientWidth*.8,behavior:reducedMotion?"auto":"smooth"}));$("#railNext").addEventListener("click",()=>$("#promoRail").scrollBy({left:$("#promoRail").clientWidth*.8,behavior:reducedMotion?"auto":"smooth"}));
$("#cartOpen").addEventListener("click",openCart);$("#cartClose").addEventListener("click",closeCart);$("#overlay").addEventListener("click",closeCart);$("#continueShopping").addEventListener("click",()=>{closeCart();$("#catalogo").scrollIntoView({behavior:reducedMotion?"auto":"smooth"})});$("#clearCart").addEventListener("click",()=>{cart=[];saveState();renderCart();showToast("Carrinho limpo.")});$("#cartBuy").addEventListener("click",buyCart);
$("#favoritesOpen").addEventListener("click",()=>{favoritesOnly=!favoritesOnly;activeCategory="Todos";$("#searchInput").value="";$("#priceFilter").value="all";$("#offersOnly").checked=false;$("#sortSelect").value="featured";renderProducts();if(favoritesOnly)$("#catalogo").scrollIntoView({behavior:reducedMotion?"auto":"smooth",block:"start"})});
$("#backToShop").addEventListener("click",showHome);$("#qtyMinus").addEventListener("click",()=>{$("#qtyValue").textContent=quantity=Math.max(1,quantity-1)});$("#qtyPlus").addEventListener("click",()=>{$("#qtyValue").textContent=quantity=Math.min(99,quantity+1)});$("#addToCart").addEventListener("click",()=>{if(activeProduct)addToCart(activeProduct.id,quantity)});$("#buyNow").addEventListener("click",()=>buyProduct(activeProduct));$("#saveDetail").addEventListener("click",()=>{if(activeProduct)toggleFavorite(activeProduct.id)});$("#specToggle").addEventListener("click",()=>{$("#specContent").classList.toggle("hidden");$("#specToggle span").textContent=$("#specContent").classList.contains("hidden")?"＋":"−"});
$("#policyClose").addEventListener("click",closePolicy);
$("#productGrid").addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches(".product-card, .product-card *")&&!e.target.closest("button")){const card=e.target.closest(".product-card");if(card){e.preventDefault();openProduct(card.dataset.card)}}});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();closePolicy()}if($("#cartDrawer").classList.contains("open")&&e.key==="Tab"){const items=[...$("#cartDrawer").querySelectorAll('button:not([disabled]),a[href],input,select,[tabindex]:not([tabindex="-1"])')];if(!items.length)return;const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
$("#currentYear").textContent=String(new Date().getFullYear());
// Liquid Glass interativo: o brilho acompanha mouse, caneta ou toque sem bibliotecas externas.
const glassTargets=".product-card,.category-chip,.search,.header-link,.rail-buttons button,.btn,.favorite-button,.detail-main-image,.detail-thumbnails button";
let glassReleaseTimer;
function glassPoint(event,target){
 const rect=target.getBoundingClientRect();
 if(!rect.width||!rect.height)return;
 const x=Math.max(0,Math.min(100,((event.clientX-rect.left)/rect.width)*100));
 const y=Math.max(0,Math.min(100,((event.clientY-rect.top)/rect.height)*100));
 target.style.setProperty("--glass-x",x+"%");
 target.style.setProperty("--glass-y",y+"%");
}
document.addEventListener("pointermove",event=>{
 const target=event.target.closest?.(glassTargets);
 if(target)glassPoint(event,target);
},{passive:true});
document.addEventListener("pointerdown",event=>{
 const target=event.target.closest?.(glassTargets);
 if(!target)return;
 glassPoint(event,target);
 target.classList.add("glass-active");
 if(glassReleaseTimer)clearTimeout(glassReleaseTimer);
},{passive:true});
function releaseGlass(){
 if(glassReleaseTimer)clearTimeout(glassReleaseTimer);
 glassReleaseTimer=setTimeout(()=>document.querySelectorAll(".glass-active").forEach(el=>el.classList.remove("glass-active")),520);
}
document.addEventListener("pointerup",releaseGlass,{passive:true});
document.addEventListener("pointercancel",releaseGlass,{passive:true});

// Banner responsivo com setas, indicadores e suporte ao teclado.
const heroSlides=[...document.querySelectorAll(".hero-slide")];
const heroDots=[...document.querySelectorAll("[data-go-slide]")];
let heroIndex=0;
function showHeroSlide(index){if(!heroSlides.length)return;heroIndex=(index+heroSlides.length)%heroSlides.length;heroSlides.forEach((slide,i)=>{const active=i===heroIndex;slide.classList.toggle("slide-active",active);slide.setAttribute("aria-hidden",String(!active));});heroDots.forEach((dot,i)=>{const active=i===heroIndex;dot.classList.toggle("active",active);if(active)dot.setAttribute("aria-current","true");else dot.removeAttribute("aria-current")})}
$("#heroPrev")?.addEventListener("click",()=>showHeroSlide(heroIndex-1));
$("#heroNext")?.addEventListener("click",()=>showHeroSlide(heroIndex+1));
$("#heroDots")?.addEventListener("click",e=>{const dot=e.target.closest("[data-go-slide]");if(dot)showHeroSlide(Number(dot.dataset.goSlide)||0)});
$("#heroSlider")?.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")showHeroSlide(heroIndex-1);if(e.key==="ArrowRight")showHeroSlide(heroIndex+1)});
let heroTouchX=null;$("#heroSlider")?.addEventListener("touchstart",e=>{heroTouchX=e.changedTouches[0]?.clientX??null},{passive:true});$("#heroSlider")?.addEventListener("touchend",e=>{if(heroTouchX===null)return;const dx=e.changedTouches[0].clientX-heroTouchX;if(Math.abs(dx)>45)showHeroSlide(heroIndex+(dx<0?1:-1));heroTouchX=null},{passive:true});
// Mantém a navegação translúcida durante a rolagem, com estado mais leve ao descer.
let headerScrollTick=false;function updateHeaderGlass(){const header=$("#top");if(header)header.classList.toggle("is-scrolled",window.scrollY>24);headerScrollTick=false}window.addEventListener("scroll",()=>{if(!headerScrollTick){window.requestAnimationFrame(updateHeaderGlass);headerScrollTick=true}},{passive:true});updateHeaderGlass();
$("#heroSlider")?.addEventListener("click",e=>{const link=e.target.closest("[data-hero-category]");if(!link)return;activeCategory=link.dataset.heroCategory;favoritesOnly=false;renderProducts()});

renderAll();
