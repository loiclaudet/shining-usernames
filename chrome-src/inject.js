/*
;;;;;;;;;;;;;::;;:ldxdool:;;;;;;;;;;::;:llodxdc;clccc:::::;,;;::;,,,,,,,,,,,,,,,
;;;;;;;;;;;;:lccodo:,,;cdo:;;;;;;;;:clloxxo:,;c;'cdlcccc:;;;;;;;;;;;,,,,,,,,,,,,
::::::::::::;:lxo:;okko;:oo:;;;:::::cdkoc::dO0Xx;:docc::;;;;;;;;;;;;;;;;,,,,,,,,
:::::::::::::lxo,;xNMWXc.cdc:::::::cddc;cdKWMMW0c:doc:;;;;;;;;;;;;;;;;;;;;;;;;,,
:cllc:::::::lxd::ONMMMXl.:dl:::::::ldc'l0XWWMMNd,:dl::;;;;;;;;;;;;;;;;;;;;;;;;;,
,:oxxlllc:::ldc'lXWWMMXl':ddolcccc:ld::kXXXXWWXl.:doc:::;:::::;;;;;;;;;;;;;;;;;;
kd::c:cddl::ld:.lXXXXX0l';c:;:odolcldc,oO0KKXXk:.';;,;lc::::;::;;;:;;::;;;;;;;;;
NN0kkc':ddooddl;;dKNNOc;lOKko;,cddldx:':okXXOl;lxxkxc,,coooollc::::::::;;;;;;;;;
XX0Odc,,:;;;:llc,;xXNk:oOKWMNx,':llol;.:dk00o:dOKWWWNd',oxl;;;,:oc::::::;;;;;;;;
cc:;,;coddddkO0Oo,:dOx;;;oXMMKl;cc;;,'';ldkkl;ccxWWMMk,';:;cxkc:dl:::::::::;;;;;
coxOOOO00000K000kc,cxdlloxNWW0:;x0OOkc';ldO0kooONWWMWx''ckKNWWx:loc:::::::::::::
0000000000000000Kk:;ok0KK0KXXd';kK00Oc';ldxk0KKKXXXKd;,cONWWWWKo:do:::::::::::::
oO00000000000000Kk:':xxxkxdo:,:d000KOc':ldxdollool:,',lOXXKOxkKk:oo:::::::::::::
;lk0000000000000Kk:':dxol:,;cok0000KOc:odxkOo,,;:::cc;cdO0xc;:dd:odcc:::::::::::
d::x000000000000Kkc':dk00o:x0000000KOc;lox00l;dO00000kl;cl:co:ld:odccccc:::cccc:
kd;;oO000000000000d;;codd:;kK00000000o;,';c:,ckK0000000kl,,od:ld:oxlcccccccccc::
cxkl;oO000000000000xl;;,,:dO0000000000kdoooodk00000000000kl;;,co;cxdlccllcccc:::
;lOOolk00000000000000OkkkO0000000000000K00KK000000000000000xc,;:,,oxllllcccccc::
:oO000000000000000000000000000000000000000000000000000000000Oo,'''lxolcccccccccc
k000000000000000000000000000000000000000000000000000000000000Oxc''lxlcccccccccll
000000000000000000000000000K0KK0KKKK0KKKKKKKKKKKKK0000000000000kc,:ddlclllllllll
000000000000000000000OOkxxdddoooooooooooooooooooooooodxxOO000000kc,:ddoloollllll
0000000Oxl::::::::::::;;,:lll:''''''''''''''''''''''';lodl::::cxOOl;cxdooooooool
000000Kx;'''''''''''''',cOWWW0c,''''''''''''''''''',l0WWWd''''':O0Ol,:ddooooooll
000000Kx;''''''''''',,,;cOWWWk:''',;:c;''''''''',;,;dXWMNd'''';oO00k:,lxdoooooll
0000000Okddc'''''''',,;;;:ool:''':dk00kolc,''''',;;;,:ool;'''lk0000Kk;,oxdoooooo
00000000000kc,'''''''',,'''''''':x0000000Ol,'''''','''''''',ck000000Ol,cxdooooll
000000000000Ol,''''''''''''''',lO000000000Oo,'''''''''''''':kK0000000Oc:dxdolllc
0000000000000Od;''''''''''''';dO000000000000xc,'''''''''':ok00000000KOc'cxdlllll
000000000000000Oxxolc:::cloxxO0000000000000000kxxxxxxxxxxO00000000000Ol,:ddlllll
0000000000000000000000000000000O000OO000000000000000000000000000000000k::ddlllll
00000000000000000000000000000Oocodc;:odl::cdllOK00000000000K00000000000l:ddlllll
000000000000000000000000000000Odclodo::odoc:cdO000000000000000000000000l:ddlllll
0000000000000000000000000000000000000OO0K00O000000000000000000000000K0k::ddooooo
00000000000000000000000000000000000000000000000000000000000000000000KOl,:xdoooll
000000000000000000000000000000000000000000000000000000000000000000000Oc;dxdollll
000000000000000000000000000000000000000000000000000000000000000000000d;cxdoollll
00000000000000000000000000000000000000000000000000000000000000000000x:;oxdoolloo
0000000000000000000000000000000000000000000000000000000000000000000x:;oxdddolooo
000000000000000000000000000000000000000000000000000000000000000000xc;lxdodoollll
**/

document.addEventListener('load', shine);

let previousUrl = '';
const observer = new MutationObserver(function(mutations) {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    shine();
  }
});
const option = {subtree: true, childList: true}
observer.observe(document, option);

function shine() {
  const re = new RegExp("(color=)?(#(?:[0-9a-fA-F]{3}){1,2})", "g");
  return Array.from(document.querySelectorAll('h2,h4'))
      .filter(e => e.innerHTML.match(re))
      .forEach(node => node.innerHTML = shiningNameToHtmlString(node.innerText)); 
}

function shiningNameToHtmlString(name) {
  const enclosingSpan = "</span>";
  const re = new RegExp("(color=)?(#(?:[0-9a-fA-F]{3}){1,2})", "g");
  const count = (name.match(re) || []).length;

  return (
    "<span>" +
    name
      // replace hex tags with styled span tags
      .replace(re, `span style=color:${"$2"};`)
      // remove size tags
      .replace(/<(size=)?\d+>/g, "")
      // remove enclosing tags
      .replace(/<\/(color|size)?>/g, "")
      // append enclosing span tags
      .concat(enclosingSpan.repeat(count)) +
    "</span>"
  );
}
