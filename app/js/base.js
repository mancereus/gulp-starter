 var initcards =  [
 {name: "Weg", Aktion: "",hor: "true"},
 {name: "Weg", Aktion: "",ver: "true"},
 {name: "Weg", Aktion: "",ver: "true"},
 {name: "Weg", Aktion: "",ver: "true"},
 {name: "Weg", Aktion: "",ver: "true"},
 {name: "Weg", Aktion: "Jack: Pause.",ver: "true"},
 {name: "Weg", Aktion: "Jane: Puuh, diese Luft bringt mich um.",ver: "true"},
 {name: "Weg", Aktion: "Jack: Dein Vater ist vermutlich schon tot. Jane: Nein, er lebt noch."},
 {name: "Weg", Aktion: "Jack: Hier können wir rasten.",hor: "true"},
 {name: "Weg", Aktion: "Jane: Hier waren wir doch schon mal.",hor: "true", pagebreak: "pagebreak"},
 {name: "Weg", Aktion: "Jane: Ist das der richtige Weg?",hor: "true"},
 {name: "Rucksack", Aktion: "Mit dem Rucksack kannst du 3 Dinge mehr tragen.",ver: "true", imgclass:"symbol"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",ver: "true", imgclass:"symbol"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu uf die Wand.",hor: "true",ver: "true", imgclass:"symbol"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true", imgclass:"symbol"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit auf ein offenes Feld springen.",ver: "true", imgclass:"symbol"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit auf ein offenes Feld springen.",hor: "true",ver: "true", imgclass:"symbol"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit auf ein offenes Feld springen.",hor: "true", imgclass:"symbol"},
 {name: "Höhle", Aktion: "Nur mit der Fackel kann man durch die Höhle direkt zu anderen Höhlen gehen.",ver: "true", warn:"Fackel" , bgc:"blue"},
 {name: "Höhle", Aktion: "Nur mit der Fackel kann man durch die Höhle direkt zu anderen Höhlen gehen.",ver: "true", warn:"Fackel" , bgc:"blue"},
 {name: "Höhle", Aktion: "Nur mit der Fackel kann man durch die Höhle direkt zu anderen Höhlen gehen.",ver: "true", warn:"Fackel" , bgc:"blue"},
 {name: "Fackel", Aktion: "Mit der Fackel kann man durch die Höhlen gehen.",ver: "true", imgclass:"symbol", pagebreak: "pagebreak"},
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", warn:"Edelstein", bgc: "gelb" },
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", warn:"Edelstein", bgc: "gelb" },
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", warn:"Edelstein", bgc: "gelb" },
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", warn:"Edelstein", bgc: "gelb" },
 {name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift",hor: "true"},
 {name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. ",hor: "true", imgclass:"symbol"},
 {name: "Fels", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen."},

 ];

 var initActions = [
 {name: "Idol", Aktion: "Mit dem Idol kannst du die Kannibalen verjagen und an Ihnen vorbeilaufen.", imgclass:"symbol", task: true},
 {name: "Lager", color : "H",Aktion: "Du findest ein verlassenes Lager. Du kannst bis zu 2 leere Dingfelder aus dem Vorrat wieder auffüllen.", warn:"Edelstein", bgc:"green", win:"Edelstein", bgcwin:"green", task: true},
 {name: "Sonnenuntergang", color : "H",Aktion: "Im Sonnenuntergang verliebst du dich in Jane. Du weisst nicht, ob Sie deine Liebe erwidert.", warn:"Edelstein", bgc:"green", win:"Edelstein", bgcwin:"green", task: true},
 {name: "Tierfalle", color : "H",Aktion: "Dein Bein verletzt sich in einer Tierfalle des Jägers. Du kannst bis zu einem anderes Eckfeld pro Zug nur 3 Felder weit ziehen.", task: true, fuss: "-1"},
 {name: "Affenhorde", color : "H",Aktion: "Eine Affenhorde überfällt euch und klaut euch einen Gegenstand (deiner Wahl).", task: true},
 {name: "Karte", color : "H",Aktion: "Du findest eine Karte des Dschungels. Ab sofort kannst du Karten auch diagonal anlegen.", task: true},
 {name: "Sturm", color : "H",Aktion: "Ein Sturm zieht durch den Dschungel. Alle verwendeten Macheten kommen auf Machetenfelder zurück.", task: true},
 {name: "Tiger", color : "H",Aktion: "Ein Tiger überrascht euch und jagt euch quer durch den Dschungel auf ein beliebiges leeres Feld. Lege eine Karte vom Stapel auf dieses Feld.", task: true}
 ];


 var start = {name: "Akt I", color : "H", Aktion: "Janes Vater Prof Hampton ist bei der Suche nach der alten Zivilisation Mu verschollen. Jane sucht nach Hinweisen, um ihren Vater wiederzufinden."};