 var actcards =  [
 {name: "Boot", akt: "3", Aktion: "Wenn du das Boot zum Fluss brinsgt, kannst du mit Jack, Jane und Prof. Hampton das Abenteuer erfolgreich beenden.", hor: true, imgclass:"symbol"},
 {name: "Dynamit", akt: "3", Aktion: "Mit dem Dynamit kannst du einen Felsen sprengen. Lege das Dynamit dazu von einem Nachbarfeld ohne Wand dazwischen auf den Felsen.", imgclass:"symbol"},
 {name: "Fels", akt: "3", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen. Mit Dynamit und Gura Gora auf einem Felsen, kannst du diesen sprengen und Gura Gora begraben."},
 {name: "Heissluftballon", color : "H", akt: "3", imgclass:"symbol", Aktion: "Ihr findet einen alten Heissluftballon. Er scheint noch zu funktionieren, hat aber keine Luft.", warn:"Boot", bgc:"blue"},
 {name: "Ureinwohner", akt: "3", Aktion: "Die Ureinwohner durchstreifen das Tal. Ihr könnt euch vorbeischleichen, wenn auf jeder Inventarkarte nur 1 Gegenstand liegt. Sonst fangen und töten Sie euch.", warn:"Edelstein"},
 {name: "Ureinwohner", akt: "3", Aktion: "Die Ureinwohner durchstreifen das Tal. Ihr könnt euch vorbeischleichen, wenn auf jeder Inventarkarte nur 1 Gegenstand liegt. Sonst fangen und töten Sie euch.", warn:"Edelstein", pagebreak: "pagebreak"},
 {name: "Ureinwohner", akt: "3", Aktion: "Die Ureinwohner durchstreifen das Tal. Ihr könnt euch vorbeischleichen, wenn auf jeder Inventarkarte nur 1 Gegenstand liegt. Sonst fangen und töten Sie euch.", warn:"Edelstein"},
 {name: "Ureinwohner", akt: "3", Aktion: "Die Ureinwohner durchstreifen das Tal. Ihr könnt euch vorbeischleichen, wenn auf jeder Inventarkarte nur 1 Gegenstand liegt. Sonst fangen und töten Sie euch.", warn:"Edelstein"},
 {name: "Liane", akt: "3", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen.",hor: "true",ver: "true", imgclass:"symbol"},
 {name: "Liane", akt: "3", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen.",hor: "true",ver: "true", imgclass:"symbol"},
 {name: "Liane", akt: "3", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen.",ver: "true", imgclass:"symbol"},
 {name: "Machete", akt: "3", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true", imgclass:"symbol"},
 {name: "Machete", akt: "3", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true",imgclass:"symbol"},
 {name: "Schw. Kugel", akt: "3", Aktion: "Die schwarze Kugel ist faustgross und aus einem unbekannten Material. Sie scheint von innen heraus zu leuchten.", imgclass:"symbol",ver: "true"},
 {name: "Weiße Kugel", akt: "3", Aktion: "Die weisse Kugel ist faustgross und aus einem unbekannten Material. Sie scheint von innen heraus zu leuchten.", imgclass:"symbol",hor: "true"}
 ];

 var initActions = [
 {name: "Ureinwohner", akt: "3", color : "H", Aktion: "Jane hat die Ureinwohner überzeugt, dass ihre friedliche Absichten habt. Falls sie Jane gefangen hielten, kommt Sie nun mit dir mit. Die Ureinwohner lassen euch nun ungehindert vorbeiziehen.", win:"Jane2", bgcwin:"green", task: true},
 {name: "Gura Gora", akt: "3", Aktion: "Die Ureinwohner werden vom Affendämon Gura Gora zu Menschenopfern gezwungen. Er hat euch entdeckt. Nach jedem Zug zieht Gura Gora 1 Feld waagrecht oder senkrecht in eure Richtung. Wenn er euch erreicht, tötet er euch.",win:"Fluss", bgcwin:"blue", warn:"Jane2", bgc:"orange", imgclass:"symbol", task: true},
 {name: "Prof Hampton", akt: "3",  Aktion: "Janes Vater hat sich in einer Höhle vor Gura Gora versteckt. Wenn du ihm beide Kugeln bringst, verlässt er mit euch das Tal.", imgclass:"symbol", task: true},
 {name: "Heisse Quelle", akt: "3", Aktion: "Ihr könnt den Heissluftballon hier mit heisser Luft füllen. Jack, Jane und Prof. Hampton können das Abenteuer hier erfolgreich beenden.", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true},
 ];

 var secondActions = [
 {name: "Ureinwohner", akt: "3",variant:"a", Aktion: "Der Großwildjäger hat versucht den Schatz der Ureinwohner zu stehlen und diesen Frevel mit seinem Leben bezahlt. Falls Jane gefangen wurde, soll Sie als nächstes sterben. Nur wenn du das Idol abgibst oder Gura Gora besiegst, lassen Sie Jane frei. Die Ureinwohner lassen euch nun ungehindert vorbeiziehen.", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true},
 {name: "Ureinwohner", akt: "3",variant:"a", color : "H", Aktion: "Jane hat die Ureinwohner überzeugt, dass ihre friedliche Absichten habt. Falls sie Jane gefangen hielten, kommt Sie nun mit dir mit. Die Ureinwohner lassen euch nun ungehindert vorbeiziehen.", win:"Jane2", bgcwin:"green", task: true},
 {name: "Ureinwohner", akt: "3",variant:"a", color : "H", Aktion: "Die Ureinwohner sehen in Jane die Inkarnation einer Göttin. Falls Jane in Akt 2 gefangen wurde, ist sie nun mit dem Goldschmuck bekleidet. Mit Dynamit oder Pistole kannst du Sie befreien.", win:"Jane2", bgcwin:"green", task: true},
 {name: "Gura Gora", akt: "3",variant:"b", Aktion: "Die Ureinwohner werden vom Affendämon Gura Gora zu Menschenopfern gezwungen. Er hat euch entdeckt. Nach jedem Zug zieht Gura Gora 1 Feld waagrecht oder senkrecht in eure Richtung. Wenn er euch erreicht, tötet er euch.",win:"Fluss", bgcwin:"blue", warn:"Jane2", bgc:"orange", imgclass:"symbol", task: true},
 {name: "Prof Hampton", akt: "3",variant:"c",  Aktion: "Janes Vater hat sich in einer Höhle vor Gura Gora versteckt. Wenn du ihm beide Kugeln bringst, verlässt er mit euch das Tal.", imgclass:"symbol", task: true},
 {name: "Prof Hampton", akt: "3",variant:"c",  Aktion: "Janes Vater hat sich in einer Höhle vor Gura Gora versteckt. Er ist seinen Verltzungen erlegen, und vor 2 Tagen gestorben. Er hat Jane einen Abschiedsbrief hinterlassen.", imgclass:"symbol", task: true},
 {name: "Prof Hampton", akt: "3",variant:"c",  Aktion: "Janes Vater hat sich in einer Höhle vor Gura Gora versteckt. Er ist zu schwach, um Gegenstände tragen zu können.", imgclass:"symbol", task: true},
 {name: "Fluss", akt: "3", variant:"d",Aktion: "Ihr könnt mit dem Boot am Fluss das Abenteuer hier erfolgreich beenden.", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true},
 {name: "Heisse Quelle", akt: "3",variant:"d", Aktion: "Ihr könnt den Heissluftballon hier mit heisser Luft füllen. Jack, Jane und Prof. Hampton können das Abenteuer hier erfolgreich beenden.", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true},
 {name: "Schatzkammer", akt: "3",variant:"d", Aktion: "Ihr habt die goldene Schatzkammer der Ureinwohner gefunden. Mit den beiden Kugeln öffnet ihr ein Portal, dass euch aus dem Dschungel teleportiert. Jack, Jane und Prof. Hampton das Abenteuer hier erfolgreich beenden.", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true}
 ];


 var start = {name: "Akt III", akt: "3",color : "H",  Aktion: "Ihr erreicht das verschollene Tal. Hier muss sich Prof. Hampton befinden. Vielleicht ist er noch am Leben."};