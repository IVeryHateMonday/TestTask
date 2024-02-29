document.addEventListener("DOMContentLoaded", function () {
  const e = [
      { name: "Anna", gender: "f" },
      { name: "Maria", gender: "f" },
      { name: "Sophie", gender: "f" },
      { name: "Emma", gender: "f" },
      { name: "Laura", gender: "f" },
      { name: "Max", gender: "m" },
      { name: "Paul", gender: "m" },
      { name: "Lukas", gender: "m" },
      { name: "Felix", gender: "m" },
      { name: "Elias", gender: "m" },
    ],
    t = ["Berlin", "München", "Hamburg", "Köln", "Frankfurt", "Stuttgart"],
    n = document.querySelector(".alert"),
    r = n.querySelector(".alert__name"),
    l = n.querySelector(".alert__city"),
    a = n.querySelector(".alert__count"),
    o = n.querySelector(".alert__verb"),
    u = "alert--show",
    i = 20;
  let c = [],
    d = [],
    m = null;
  function g(e, t) {
    return (
      (e = Math.ceil(e)),
      (t = Math.floor(t)),
      Math.floor(Math.random() * (t - e + 1)) + e
    );
  }
  m = setInterval(function s() {
    if (n.classList.contains(u))
      return clearInterval(m), void (m = setInterval(s, g(26e3, 34e3)));
    (function () {
      let n = (function () {
          c.length === e.length && (c = []);
          let t = (function () {
              if (0 === c.length) return "f";
              const e = c.length,
                t = c.filter((e) => "m" === e.gender).length;
              return (t / e) * 100 < i ? "m" : "f";
            })(),
            n = e.filter((e) => e.gender === t && !c.includes(e));
          0 === n.length && (n = e.filter((e) => e.gender === t));
          let r = n[g(0, n.length - 1)];
          r && c.push(r);
          return r;
        })(),
        u = (function () {
          d.length === t.length && (d = []);
          let e = "";
          do {
            e = t[g(0, t.length - 1)];
          } while (d.includes(e));
          return d.push(e), e;
        })(),
        m = g(2, 4),
        s = (n.gender, "bestellt");
      (r.textContent = n.name),
        (l.textContent = "aus " + u),
        (a.textContent = m + " Pakete"),
        (o.textContent = s);
    })(),
      n.classList.add(u),
      setTimeout(function () {
        n.classList.remove(u);
      }, 1e4);
  }, g(26e3, 34e3));
});
