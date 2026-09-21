const SUPABASE_URL="https://rnbjhfnjyxfpskdszdwi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY="sb_publishable_JRRtyQgA8xEuR3skPoigDA_Jo-68s-L";
const sb=supabase.createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY);
const money=n=>new Intl.NumberFormat('vi-VN').format(Number(n)||0)+'đ';
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
async function me(){const {data:{user}}=await sb.auth.getUser();if(!user)return null;const {data}=await sb.from('bd_shop_profiles').select('*').eq('id',user.id).maybeSingle();return data?{user,profile:data}:null}
function fmtDate(x){return x?new Date(x).toLocaleString('vi-VN'):''}
async function requireLogin(){const x=await me();if(!x){location.href='index.html';return null}return x}
