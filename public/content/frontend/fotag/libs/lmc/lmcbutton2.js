// LMCButton 2
// www.letters-market.com

var lmcDefCounter = 1;
var lmcDefURL = 'lmcbutton2.swf';

function lmc_get_button(cliptext, idLMC, cfg) {
  var params = 'txt=' + encodeURIComponent(cliptext); 
  if(idLMC == null) { idLMC = 'lmcButton' + lmcCounter; }  
  params += '&id=' + idLMC;
  lmcDefCounter++;
  var lmcUrl = lmcDefURL;
  var bw = 60;
  var bh = 30;

  if(cfg != null)  {
    if(cfg.url != null) { lmcUrl = cfg.url;}
    if(cfg.caption != null) { params += '&capt=' + cfg.caption; }
    if(cfg.clr_bck != null) { params += '&clr_bck=' + cfg.clr_bck; }
    if(cfg.clr_txt != null) { params += '&clr_txt=' + cfg.clr_txt; }
    if(cfg.js != null) { params += '&js=' + cfg.js; }
    if(cfg.width != null) { bw = cfg.width; }
    if(cfg.height != null) { bh = cfg.height; }
  }

  var str = "";

 str += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="'+idLMC+'" width="'+bw+'" height="'+bh+'" ' +
' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"> \n' +
'    <param name="movie" value="'+lmcUrl+'" /> \n' +
'    <param name="allowScriptAccess" value="sameDomain" /> \n' +
'    <param name=FlashVars value="' + params + '" /> \n' +
'    <embed src="'+lmcUrl+'" \n' +
'        FlashVars="' + params + '" \n' +
'        name="'+idLMC+'" align="middle" \n' +
'        play="true" loop="false" quality="high" allowScriptAccess="sameDomain" \n' +
'        width="'+bw+'" height="'+bh+'" scale="exactfit" \n' +
'        type="application/x-shockwave-flash" \n' +
'        pluginspage="http://www.macromedia.com/go/getflashplayer"> \n' +
'    </embed> \n' +
'</object>';
 return str;
}


function lmc_get_obj(idLMC) {
  return (navigator.appName.indexOf("Microsoft")!=-1 ? window : document)[idLMC]
}

 function lmc_get_dom_value(id)
 {
  var itemv = document.getElementById(id);
  if(itemv != null) { return itemv.value; }
  else {  return ""; }
 }

 function lmc_set_dom_html(id, html)
 {
  var itemv = document.getElementById(id);
  if(itemv != null) { itemv.innerHTML = html; return true; }
  else {  return false; }
 }


function lmc_set_text(idLMC, text) 
{
    var lmc_btn = lmc_get_obj(idLMC);
    lmc_btn.setLMCText(text);
}


function lmc_set_text_value(idLMC, idE) 
{
    var lmc_btn = lmc_get_obj(idLMC);
    lmc_btn.setLMCText(lmc_get_dom_value(idE));
}



function lmc_set_var(idLMC, vName, vValue) {
    var lmc_btn = lmc_get_obj(idLMC);
    lmc_btn.setLMCVar(vName, vValue);    
}


function lmc_get_input(idE, idLMC, value, classes, params) {  
   var str = '<input id="'+idE+'" name="'+idE+'" value="'+ value +'"  onchange="lmc_set_text_value(\'' + idLMC + '\', \'' + idE + '\');" onkeyup="lmc_set_text_value(\'' + idLMC + '\', \'' + idE + '\');" class="' + classes + '" ' + params + ' />';
  return str;
}


function lmc_get_textarea(idE, idLMC, value, classes, params) {  
  var str = '<textarea id="'+idE+'" name="'+idE+'" onchange="lmc_set_text_value(\'' + idLMC + '\', \'' + idE + '\');" onkeyup="lmc_set_text_value(\'' + idLMC + '\', \'' + idE + '\');" class="' + classes + '" ' + params + ' >' + value + '</textarea>';
  return str;
}


function lmc_select_all(id)
{
    var el = document.getElementById(id);
    if(el != null) { el.focus(); el.select(); }
}


function lmc_is_flash_exists() {
var flash_exists = false;
try { var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
  if (fo) { flash_exists = true; }
 } catch (e) {
  if (navigator.mimeTypes
   && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
   && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) { flash_exists = true; }
 }  
 return flash_exists;
}