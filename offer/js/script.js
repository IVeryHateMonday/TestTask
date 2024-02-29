setTimeout("$('.body').css('transform','translateY(0)');", 1e3),
  setTimeout("$('.main-desc').addClass('b-show')", 1500),
  setTimeout("$('body').addClass('add-scroll')", 3e3),
  setTimeout("$('html').addClass('add-scroll')", 3e3),
  $(".glow-button").on("click", function () {
    $(".comment-item").addClass("comment-item-show"),
      $(".glow-button").addClass("hide"),
      $(".shine-button").addClass("show");
  });
const OFFER = "«KETON AKTIV»";
let now = new Date(),
  mm = now.getMonth() + 1,
  day = now.getDate(),
  year = now.getFullYear(),
  date = day + "." + mm + "." + year;
const massange = [
  {
    m: "Hallo, mein Name ist Sophia Müller. Ich bin Ernährungsberaterin und Endokrinologin. Willkommen auf meiner Seite.",
  },
  {
    m: "Hier biete ich kostenlose persönliche Diagnostik und Empfehlungen an, die Tausenden von Patienten beim Abnehmen geholfen haben.",
  },
  {
    m: "Wenn Sie Tipps zum Abnehmen benötigen, beantworten Sie bitte diese Fragen.",
  },
  { m: '<p class="quest">Wie viele Kilogramm möchten Sie abnehmen?</p>' },
  {
    m: '<p class="quest">Welche Körperteile benötigen eine Gewichtsabnahme?</p>',
  },
  { m: '<p class="quest">Wie aktiv ist Ihr Lebensstil?</p>' },
  { m: '<p class="quest">Ernähren Sie sich richtig?</p>' },
  { m: '<p class="quest">Wie alt sind Sie?</p>' },
  { m: '<p class="quest">Was ist ihr aktuelles Gewicht?</p>' },
  { m: '<p class="quest">Ihre Körpergröße?</p>' },
  {
    m: "Danke. Sie sind übergewichtig, haben aber die Möglichkeit, Ihr Wunschgewicht zu erreichen. Die Ursache für Übergewicht ist ein niedriger Stoffwechsel. Dies ist eine Eigenschaft von inneren Fetten, die sich an den Seiten des Bauches ansammeln.",
  },
  {
    m: "Ich empfehle, mindestens einmal täglich grünen Tee, Guarana und Beeren zu trinken. Ergänzen Sie es außerdem mit Magnesium und Vitamin B3.",
  },
  {
    m: "Grüner Tee enthält Synephrin, eine Substanz, die das Hungergefühl hemmt.",
  },
  {
    m: "Guarana enthält eine große Menge an Polyphenolen, die den Körper von Giftstoffen reinigen.",
  },
  {
    m: "Magnesium beschleunigt den Stoffwechsel, verbrennt Fett und senkt den Cholesterinspiegel im Blut deutlich.",
  },
  {
    m: "Beeren enthalten 15-mal mehr Vitamin C als Orangen und 3-mal mehr Provitamin A als Karotten.",
  },
  {
    m: "Die vorgestellten Komponenten können einzeln verbraucht werden, besser und effizienter ist es jedoch, sie alle mit «KETON AKTIV» zu verwenden. Sie liegen in einer intensiv extraktiven Form mit einer maximalen Konzentration an nützlichen Substanzen vor.",
  },
  {
    m: "Für eine spürbare Gewichtsabnahme nehmen Sie täglich 3 Tabletten ein: morgens, nachmittags und nachmittags. In einem Monat werden Sie Ihr Ziel erreichen.",
  },
  { m: "So sieht das Medikament aus: " },
  {
    m: ' <img src="images/prod.png" class="product-img" style="width: 100%; max-width: 240px;">',
  },
  {
    m: "Das Produkt enthält konzentrierte Extrakte natürlicher Fettfänger, die den Fettverbrennungsprozess kontinuierlich aktivieren.",
  },
  {
    m: "Aus diesem Grund beseitigt «KETON AKTIV» effektiv Fette, die die Wände der inneren Organe blockieren und deren ordnungsgemäße Funktion beeinträchtigen. Dadurch wird der Stoffwechsel entlastet.",
  },
  {
    m: "Dadurch wird Ihr Körper überschüssiges Fett los und nutzt es als Energiequelle. Sie beginnen weniger zu essen und verspüren kein Hungergefühl, was den Effekt des Abnehmens beschleunigt. ",
  },
  {
    m: "Hier finden Sie alle Ergebnisse meiner Kunden, die mithilfe meiner Empfehlungen abgenommen haben. ",
  },
  {
    m: ' <img src="images/comm2-92a-arb.jpg" style="border-radius: 0px 10px 10px 10px"> ',
  },
  {
    m: '<img src="images/comm-photo3-135-arb.jpg" style="border-radius: 0px 10px 10px 10px">',
  },
  {
    m: '<img src="images/comm6-abb-arb.jpg" style="border-radius: 0px 10px 10px 10px"> ',
  },
  {
    m: '<img src="images/comm4-abb.jpg" style="border-radius: 0px 10px 10px 10px"> ',
  },
  {
    m: "Die gesamte Behandlungsdauer beträgt unter Berücksichtigung Ihres Alters, Ihres Body-Mass-Index und Ihres Lebensstils 60 Tage.",
  },
  {
    m: "Während dieser Zeit wird Ihr Körper gereinigt und der Stoffwechsel normalisiert sich.",
  },
  {
    m: "Ich habe auch gute Nachrichten für Sie. Sie wurden online diagnostiziert und sind gerade Patient Nr. 2000.",
  },
  {
    m: "Drücken Sie die Taste DREHEN, und wenn Sie Glück haben, können Sie «KETON AKTIV» zu einem niedrigeren Preis bestellen. Die Anzahl der Pakete im Angebot ist begrenzt, daher rate ich Ihnen, so schnell wie möglich zu bestellen.",
  },
];
var mass_id = 0,
  length_mass = 0,
  lengt_num_mas = 0,
  text = "",
  speedtext =55,
  process = !0;

function app() {
  var e = new Date(),
    n = ("0" + e.getMinutes()).slice(-2),
    t = ("0" + e.getHours()).slice(-2) + ":" + n;
  if ($(".chat").height() + 100 > $(".content").height()) {
    $("#scroll_id").removeClass("hide");
    var s = $(".inp").val();
    $(".inp").val(++s);
  }
  const c =
    '<div class="chat-content-item manager "><div class="img-doc"><img src="images/header-ava-eac-arb.png" alt=""> </div><div class="chat-content-desc"><span class="doc-name">Sophia Müller</span><div class="chat-content-desc-item manager ch1"><p class="text text_img" id="mass' +
    mass_id +
    '"></p></div><p class="message-time" id="time">' +
    t +
    "</p></div></div>";
  $(".chat-content-list").append(c),
    "0" == document.getElementById("res").value
      ? $("#scroll_id").addClass("aba")
      : $("#scroll_id").removeClass("aba");
}

function myMassange(e) {
  var n = new Date(),
    t = ("0" + n.getMinutes()).slice(-2);
  let s =
    '<div class="chat-content-item user item-active"><div class="chat-content-desc"><span class="doc-name doc-dir">Sie</span><div class="chat-content-desc-item user"><p class="text" class="users_mass">' +
    e +
    '</p></div><p className="message-time new_time" id="time">' +
    ("0" + n.getHours()).slice(-2) +
    ":" +
    t +
    "</p></div></div>";
  $(".chat-content-list").append(s),
    $(".content").animate({ scrollTop: $(".chat-content-list").height() }, 700),
    $("#scroll_id").addClass("hide");
}

function question1() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">bis 5 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">von 5 bis 15 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">von 15 bis 20 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">über 20 kg</span></div></div>'
  );
}

function choise1() {
  $(".question1M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("bis 5 kg"),
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question1W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("von 5 bis 15 kg"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question1P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("von 15 bis 20 kg"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question1T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("über 20 kg"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
}

function question2() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">Taille und Bauch</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">Hüfte und Po</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">Hände oder Füße</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">Ich möchte an allen Teilen meines Körpers abnehmen</span></div></div>'
  );
}

function choise2() {
  $(".question2M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("Taille und Bauch"),
      $(".chat-content-buttons-gender").css("display", "none"),
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question2W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Hüfte und Po"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question2P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Hände oder Füße"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question2T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Ich möchte an allen Teilen meines Körpers abnehmen"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
}

function question3() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">Ich trainiere 3 bis 5 Mal pro Woche.</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">Ich trainiere 1 bis 3 Mal pro Woche.</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">Ich trainiere nicht, ich versuche zu laufen.</span></div><div class="chat-content-buttons-gender-block"><span class="question3T">Passiver Lebensstil.</span></div></div>'
  );
}

function choise3() {
  $(".question3M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("Ich trainiere 3 bis 5 Mal pro Woche."),
      $(".chat-content-buttons-gender").css("display", "none"),
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question3W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Ich trainiere 1 bis 3 Mal pro Woche."),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question3P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Ich trainiere nicht, ich versuche zu laufen."),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question3T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Passiver Lebensstil."),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
}

function question4() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">Ja, ich zähle Kalorien, esse keine Süßigkeiten und Gebäck.</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">Ungefähr 50 zu 50</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">Ich liebe Fast Food und Süßigkeiten.</span></div><div class="chat-content-buttons-gender-block"><span class="question4T"> Ich esse ungesunde Lebensmittel.</span></div></div>'
  );
}

function choise4() {
  $(".question4M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("Ja, ich zähle Kalorien, esse keine Süßigkeiten und Gebäck."),
      $(".chat-content-buttons-gender").css("display", "none"),
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question4W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Ungefähr 50 zu 50"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question4P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Ich liebe Fast Food und Süßigkeiten."),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question4T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange(" Ich esse ungesunde Lebensmittel."),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
}

function question5() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">bis zu 20 Jahre alt</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">20-30 Jahre alt</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">31-40 Jahre alt</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">41-50 Jahre alt</span></div><div class="chat-content-buttons-gender-block"><span class="question5G">Über 50 Jahre alt</span></div></div>'
  );
}

function choise5() {
  $(".question5M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("bis zu 20 Jahre alt"),
      $(".chat-content-buttons-gender").css("display", "none"),
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question5W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("20-30 Jahre alt"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question5P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("31-40 Jahre alt"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question5T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("41-50 Jahre alt"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question5G").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Über 50 Jahre alt"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
}

function question6() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">Weniger als 60 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">60 bis 70 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">71 bis 80 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6T">81 bis 90 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6O">Über 90 kg</span></div></div>'
  );
}

function choise6() {
  $(".question6M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("Weniger als 60 kg"),
      $(".chat-content-buttons-gender").css("display", "none"),
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question6W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("60 bis 70 kg"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question6P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("71 bis 80 kg"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question6T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("81 bis 90 kg"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question6O").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Über 90 kg"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
}

function question7() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">Unter 150 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">150-160 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">161-170 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7T">171-180 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7G">über 180 cm</span></div></div>'
  );
}

function choise7() {
  $(".question7M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("Unter 150 cm"),
      $(".chat-content-buttons-gender").css("display", "none"),
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question7W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("150-160 cm"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question7P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("161-170 cm"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question7T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("171-180 cm"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question7G").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("über 180 cm"),
        $(".chat-content-buttons-gender").css("display", "none"),
        setTimeout(() => {
          process = !0;
        }, 500);
    });
}

setTimeout(() => {
  var e = new Date(),
    n = ("0" + e.getMinutes()).slice(-2);
  const t =
    '<div class="chat-content-item manager "><div class="img-doc"><img src="images/header-ava-eac-arb.png" alt=""> </div><div class="chat-content-desc"><span class="doc-name">Sophia Müller</span><div class="chat-content-desc-item manager ch1"><p class="text" id="mass' +
    mass_id +
    '"></p></div><p class="message-time" id="time">' +
    ("0" + e.getHours()).slice(-2) +
    ":" +
    n +
    "</p></div></div>";
  $(".chat-content-list").append(t),
    $("#scroll_id").click(function (e) {
      $(this).removeClass("hide-q"),
        $(".content").animate({ scrollTop: $(".chat").height() }, 700);
    });
  const s = setInterval(function () {
    1 == process &&
      (lengt_num_mas != massange.length
        ? ((text += massange[lengt_num_mas].m[length_mass]),
          length_mass++,
          $("#mass" + lengt_num_mas).html(text),
          3 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question1(),
            (process = !1),
            choise1(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 700),
            $("#scroll_id").removeClass("hide-q")),
          4 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question2(),
            (process = !1),
            choise2(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 700),
            $("#scroll_id").removeClass("hide-q")),
          5 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question3(),
            (process = !1),
            choise3(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 700),
            $("#scroll_id").removeClass("hide-q")),
          6 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question4(),
            (process = !1),
            choise4(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 700),
            $("#scroll_id").removeClass("hide-q")),
          7 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question5(),
            (process = !1),
            choise5(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 700),
            $("#scroll_id").removeClass("hide-q")),
          8 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question6(),
            (process = !1),
            choise6(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 700),
            $("#scroll_id").removeClass("hide-q")),
          9 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question7(),
            (process = !1),
            choise7(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 700),
            $("#scroll_id").removeClass("hide-q")),
          length_mass == massange[lengt_num_mas].m.length &&
            (lengt_num_mas++, mass_id++, (length_mass = 0), (text = ""), app()))
        : (clearInterval(s),
          $("#mass" + lengt_num_mas)
            .parent()
            .parent()
            .parent()
            .css("display", "none"),
          $(".iframe-form").addClass("show"),
          $(".btn-top").addClass("show")));
  }, speedtext);
}, 1e3),
  $(".content").scroll(function () {
    "0" == document.getElementById("res").value
      ? $("#scroll_id").addClass("aba")
      : $("#scroll_id").removeClass("aba");
  });
var $marker = $("#down-box");

function viewDiv() {
  (document.getElementById("div1").style.display = "block"),
    (document.querySelector(".content").style.opacity = "0.5");
}

function viewDiv2() {
  (document.getElementById("div1").style.display = "none"),
    (document.querySelector(".content").style.opacity = "1");
}

function viewDiv3() {
  (document.getElementById("div1").style.display = "none"),
    (document.querySelector(".content").style.opacity = "1");
}

function viewDiv4() {
  (document.getElementById("div1").style.display = "block"),
    (document.querySelector(".content").style.opacity = "0.5");
}

$(".content").scroll(function () {
  $(".content").scrollTop() + $(".content").height() >=
  $(".chat").height() + 100
    ? ((document.getElementById("res").value = "0"),
      $("#scroll_id").addClass("hide"))
    : $("#scroll_id").removeClass("hide");
});
