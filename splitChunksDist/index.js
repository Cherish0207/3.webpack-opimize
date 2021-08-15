(() => {
  "use strict";
  var e,
    r = {
      352: (e, r, o) => {
        o(21), o(390);
        var n = o(755),
          a = o.n(n);
        console.log("index"), console.log(a());
      },
    },
    o = {};
  function n(e) {
    var a = o[e];
    if (void 0 !== a) return a.exports;
    var t = (o[e] = { exports: {} });
    return r[e].call(t.exports, t, t.exports, n), t.exports;
  }
  (n.m = r),
    (e = []),
    (n.O = (r, o, a, t) => {
      if (!o) {
        var l = 1 / 0;
        for (s = 0; s < e.length; s++) {
          for (var [o, a, t] = e[s], i = !0, p = 0; p < o.length; p++)
            (!1 & t || l >= t) && Object.keys(n.O).every((e) => n.O[e](o[p]))
              ? o.splice(p--, 1)
              : ((i = !1), t < l && (l = t));
          if (i) {
            e.splice(s--, 1);
            var v = a();
            void 0 !== v && (r = v);
          }
        }
        return r;
      }
      t = t || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > t; s--) e[s] = e[s - 1];
      e[s] = [o, a, t];
    }),
    (n.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return n.d(r, { a: r }), r;
    }),
    (n.d = (e, r) => {
      for (var o in r)
        n.o(r, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
    }),
    (n.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (() => {
      var e = { 826: 0 };
      n.O.j = (r) => 0 === e[r];
      var r = (r, o) => {
          var a,
            t,
            [l, i, p] = o,
            v = 0;
          for (a in i) n.o(i, a) && (n.m[a] = i[a]);
          if (p) var s = p(n);
          for (r && r(o); v < l.length; v++)
            (t = l[v]), n.o(e, t) && e[t] && e[t][0](), (e[l[v]] = 0);
          return n.O(s);
        },
        o = (self.webpackChunk_3_webpack_opimize =
          self.webpackChunk_3_webpack_opimize || []);
      o.forEach(r.bind(null, 0)), (o.push = r.bind(null, o.push.bind(o)));
    })();
  var a = n.O(void 0, [755, 483], () => n(352));
  a = n.O(a);
})();
