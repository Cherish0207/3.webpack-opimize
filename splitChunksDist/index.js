(() => {
  var e = {
      21: () => {
        console.log("a~~~~~~");
      },
      390: () => {
        console.log("b~~~~~~");
      },
    },
    o = {};
  function r(t) {
    var n = o[t];
    if (void 0 !== n) return n.exports;
    var a = (o[t] = { exports: {} });
    return e[t](a, a.exports, r), a.exports;
  }
  (r.n = (e) => {
    var o = e && e.__esModule ? () => e.default : () => e;
    return r.d(o, { a: o }), o;
  }),
    (r.d = (e, o) => {
      for (var t in o)
        r.o(o, t) &&
          !r.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: o[t] });
    }),
    (r.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
    (() => {
      "use strict";
      r(21), r(390), console.log("index");
    })();
})();
