function in_array(needle, haystack, argStrict) {var key = '',strict = !! argStrict;
  if (strict) {for (key in haystack) {if (haystack[key] === needle) {return true;}}
  } else {for (key in haystack) {if (haystack[key] == needle) {return true;}}}return false;}
var last = [
['Head-Tracker','h/head-tracker.html',''],
['Eye-Tracker','e/eye-tracker.html',''],
['Intranet','i/intranet.html',''],
['Extrusion','e/extrusion.html',''],
['Plug-In','p/plug-in.html',''],
['Energy-Star','e/energy-star.html',''],
['E-Mail Postfach','e/e-mail-postfach.html',''],
['HDTV','h/hdtv.html',''],
['HD Ready','h/hd-ready.html',''],
['Supersampling','s/supersampling.html','']
];
var sites = [
['Abfragesprache','a/abfragesprache.html',''],
['Account','a/account.html',''],
['ACM','a/acm.html',''],
['Ada','a/ada.html',''],
['Adabas','a/adabas.html',''],
['Add-on','a/add-on.html',''],
['Adressierung','a/adressierung.html',''],
['Adressraum','a/adressraum.html',''],
['Adressregister','a/adressregister.html',''],
['Aiken-Code','a/aiken-howard-hathaway.html',''],
['Aiken, Howard Hathaway','a/aiken-howard-hathaway.html',''],
['Akkumulator','a/akkumulator.html',''],
['Aktiv','a/aktiv.html',''],
['Aktiver Bildschirm','a/aktiver-bildschirm.html',''],
['Aktiv-Lautsprecher','a/aktiv-lautsprecher.html',''],
['Algol','a/algol.html',''],
['Algorithmus','a/algorithmus.html',''],
['Aliasing','a/aliasing.html',''],
['Alphanumerisch','a/alphanumerisch.html',''],
['Alphaversion','a/alphaversion.html',''],
['ALU','a/alu.html',''],
['A.M.','a/a-m.html',''],
['Analog','a/analog.html',''],
['Analog-Digital-Wandler','a/analog-digital-wandler.html',''],
['Analog-Signal','a/analog-signal.html',''],
['And','a/and.html',''],
['Animation','a/animation.html',''],
['ANSI','a/ansi.html',''],
['ANSI-Code','a/ansi-code.html',''],
['ANSI-Datei','a/ansi-datei.html',''],
['ANSI-Zeichensatz','a/ansi-zeichensatz.html',''],
['Anti-Aliasing','a/anti-aliasing.html',''],
['Antivirensoftware','a/antivirensoftware.html',''],
['Anweisung','a/anweisung.html',''],
['Anwendungsprogramm','a/anwendungsprogramm.html',''],
['API','a/api.html',''],
['APL','a/apl.html',''],
['APPC','a/appc.html',''],
['Application-Server','a/application-server.html',''],
['Äquivalenz','a/aequivalenz.html',''],
['Arbeitsspeicher','a/arbeitsspeicher.html',''],
['Archivierung','a/archivierung.html',''],
['Argument','a/argument.html',''],
['Arithmetischer Überlauf','a/arithmetischer-ueberlauf.html',''],
['Array','a/array.html',''],
['ASCII','a/ascii.html',''],
['ASCII-Code','a/ascii-code.html',''],
['ASCII-Zeichensatz','a/ascii-zeichensatz.html',''],
['ASIC','a/asic.html',''],
['Assembler','a/assembler.html',''],
['Assistent','a/assistent.html',''],
['Asynchron','a/asynchron.html',''],
['AT-Bus','a/at-bus.html',''],
['ATM','a/atm.html',''],
['Auflösung','a/aufloesung.html',''],
['Ausführbares Programm','a/ausfuehrbares-programm.html',''],
['Auslagerungsdatei','a/auslagerungsdatei.html',''],
['Auto Answer','a/auto-answer.html',''],
['Autoexec','a/autoexec.html',''],
['AWK','a/awk.html',''],
['Abstrakte Klasse','http://www.bullhost.de/a/abstrakte-klasse.html',''],
['Absturz','a/absturz.html',''],
['Access','a/access.html',''],
['Administrator','a/administrator.html',''],
['AGP','a/agp.html',''],
['Aktiendiagramm','a/aktiendiagramm.html',''],
['Alt','a/alt.html',''],
['Alt-Gr','a/alt-gr.html',''],
['Animationsprogramm','a/animationsprogramm.html',''],
['Ankerzelle','a/ankerzelle.html',''],
['Anklopfen','a/anklopfen.html',''],
['Anschlagdrucker','a/anschlagdrucker.html',''],
['Anschlagfreier Drucker','a/anschlagfreier-drucker.html',''],
['Anwendungsschicht','a/anwendungsschicht.html',''],
['Apple','a/apple.html',''],
['Apple II','a/apple-2.html',''],
['AppleShare','a/appleshare.html',''],
['AppleTalk','a/appletalk.html',''],
['Application Layer','a/application-layer.html',''],
['Arbeitsstation','a/arbeitsstation.html',''],
['Archie','a/archie.html',''],
['Archiv','a/archiv.html',''],
['Archiv-Attribut','a/archiv-attribut.html',''],
['Arcnet','a/arcnet.html',''],
['Arithmetischer Coprozessor','a/arithmetischer-coprozessor.html',''],
['ARPANET','a/arpanet.html',''],
['ASCII-Datei','a/ascii-datei.html',''],
['ASP','a/asp.html',''],
['Assem. Programmiersprache','a/assemblernahe-programmiersprache.html',''],
['Assemblieren','a/assemblieren.html',''],
['Assoziative Bemaßung','a/assoziative-bemassung.html',''],
['Asterisk','a/asterisk.html',''],
['Asymm. Multiprozessorsystem','a/asymmetrisches-multiprozessorsystem.html',''],
['AT','a/at.html',''],
['Atom','a/atom.html',''],
['Attribut','a/attribut.html',''],
['Audiotext','a/audiotext.html',''],
['Auditing','a/auditing.html',''],
['Aufrastern','a/aufrastern.html',''],
['Aufwärtskompatibel','a/aufwaertskompatibel.html',''],
['Ausdruck','a/ausdruck.html',''],
['Ausführbare Datei','a/ausfuehrbare-datei.html',''],
['Ausgabegerät','a/ausgabegeraet.html',''],
['Ausrichtung','a/ausrichtung.html',''],
['Ausschneiden','a/ausschneiden.html',''],
['Austastlücke','a/austastluecke.html',''],
['Auswahlschalter','a/auswahlschalter.html',''],
['AutoCAD','a/autocad.html',''],
['Autodesk','a/autodesk.html',''],
['AUTOEXEC.BAT','a/autoexec-bat.html',''],
['Autoformat','a/autoformat.html',''],
['Autokorrektur','a/autokorrektur.html',''],
['Automatische Bemaßung','a/automatische-bemassung.html',''],
['Automatischer Einzelblatteinzug','a/automatischer-einzelblatteinzug.html',''],
['Auto-Parkeinrichtung','a/auto-parkeinrichtung.html',''],
['Autorensystem','a/autorensystem.html',''],
['Autosketch','a/autosketch.html',''],
['Autotracing','a/autotracing.html',''],
['A/UX','a/a-ux.html',''],
['AVI-Format','a/avi-format.html',''],
['Absoluter Bezug','a/absoluter-bezug.html',''],
['AC97','a/ac97.html',''],
['Access Point','a/access-point.html',''],
['ActiveSync-Verfahren','a/activesync-verfahren.html',''],
['ActiveX','a/activex.html',''],
['Add-In','a/add-in.html',''],
['AdImpressions','a/adimpressions.html',''],
['Adware','a/adware.html',''],
['Agent','a/agent.html',''],
['Aktive Kühler','a/aktive-kuehler.html',''],
['Alpha-Blending','a/alpha-blending.html',''],
['Anisotropische Beleuchtung','a/anisotropische-beleuchtung.html',''],
['Anisotropische Filterung','a/anisotropische-filterung.html',''],
['Anlagenanschluss','a/anlagenanschluss.html',''],
['Anker','a/anker.html',''],
['Anschaltgebühr','a/anschaltgebuehr.html',''],
['Ansicht','a/ansicht.html',''],
['Antonym','a/antonym.html',''],
['Application Sharing','a/application-sharing.html',''],
['Arbeitsplatz','a/arbeitsplatz.html',''],
['Architektur','a/architektur.html',''],
['ASF-Datei','a/asf-datei.html',''],
['asym. Verschlüsselung','a/asymmetrische-verschluesselung.html',''],
['ATA','a/ata.html',''],
['Athlon','a/athlon.html',''],
['ATI-Radeon','a/ati-radeon.html',''],
['AT&T','a/at-t.html',''],
['Attachment','a/attachment.html',''],
['Authenzität','a/authenzitaet.html',''],
['Autochanger','a/autochanger.html',''],
['AutoPlay-Funktion','a/autoplay-funktion.html',''],
['Autoscan','a/autoscan.html',''],
['Autostart','a/autostart.html',''],
['Autovervollständigen','a/autovervollstaendigen.html','']
];
console.log(sites.length);
/*
var links = [];
$('td a').each(function() {if(this.href.indexOf("a/")){
   links.push( this.href );} 
   var href = this.href;
});
*/
var more_entries = new Array();
var last_entries = new Array();
var rando_more = new Array();
var rando_last = new Array();
var moreHTML ='';
var lastHTML ='<ul class="pure-menu-list"><li class="pure-menu-item" style="padding-top: 5px;"><span class=""  style="padding: 7px 0px 0px 12px;height: 24px;">Letzte Einträge</span></li></ul>';
for (var a=0;a<6;a++)
{
var rando_l = Math.floor((Math.random() * last.length) + 0);
var rando_m = Math.floor((Math.random() * sites.length) + 0);
if(!in_array(rando_l,rando_last)){rando_last.push(rando_l);
last_entries.push(new Array(last[rando_l][0],last[rando_l][1],last[rando_l][2]));
}
if(!in_array(rando_m,rando_more)){rando_more.push(rando_m);
more_entries.push(new Array(sites[rando_m][0],sites[rando_m][1],sites[rando_m][2]));
}
}
for(var b=0;b<more_entries.length;b++){/*console.log(more_entries[b]);*/moreHTML += "<a href='http://www.bullhost.de/"+more_entries[b][1]+"' title='"+more_entries[b][0]+"'>Definition bzw. Erklärung: "+more_entries[b][0]+"</a><br/>";}
for(var c=0;c<last_entries.length;c++){/*console.log(last_entries[c]);*/lastHTML += "<a href='http://www.bullhost.de/"+last_entries[c][1]+"' title='"+last_entries[c][0]+"' style='padding: 2px 0px 4px 12px;height: 18px;'> • "+last_entries[c][0]+"</a><br/>";}
(function () {
document.getElementById('more_entries').innerHTML =moreHTML;
document.getElementById('last_entries').innerHTML =lastHTML;
})();
