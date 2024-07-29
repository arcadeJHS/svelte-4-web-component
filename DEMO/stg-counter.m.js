var J = Object.defineProperty;
var R = (e, t, n) => t in e ? J(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => (R(e, typeof t != "symbol" ? t + "" : t, n), n);
function m() {
}
function v(e) {
  return e();
}
function C() {
  return /* @__PURE__ */ Object.create(null);
}
function g(e) {
  e.forEach(v);
}
function B(e) {
  return typeof e == "function";
}
function V(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function U(e) {
  return Object.keys(e).length === 0;
}
function L(e, t) {
  e.appendChild(t);
}
function M(e, t, n) {
  e.insertBefore(t, n || null);
}
function E(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function T(e) {
  return document.createElement(e);
}
function N(e) {
  return document.createTextNode(e);
}
function q(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function z(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function D(e) {
  return Array.from(e.childNodes);
}
function F(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function G(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let k;
function _(e) {
  k = e;
}
const h = [], S = [];
let a = [];
const P = [], K = /* @__PURE__ */ Promise.resolve();
let w = !1;
function Q() {
  w || (w = !0, K.then(H));
}
function x(e) {
  a.push(e);
}
const y = /* @__PURE__ */ new Set();
let d = 0;
function H() {
  if (d !== 0)
    return;
  const e = k;
  do {
    try {
      for (; d < h.length; ) {
        const t = h[d];
        d++, _(t), W(t.$$);
      }
    } catch (t) {
      throw h.length = 0, d = 0, t;
    }
    for (_(null), h.length = 0, d = 0; S.length; )
      S.pop()();
    for (let t = 0; t < a.length; t += 1) {
      const n = a[t];
      y.has(n) || (y.add(n), n());
    }
    a.length = 0;
  } while (h.length);
  for (; P.length; )
    P.pop()();
  w = !1, y.clear(), _(e);
}
function W(e) {
  if (e.fragment !== null) {
    e.update(), g(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(x);
  }
}
function X(e) {
  const t = [], n = [];
  a.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), a = t;
}
const Y = /* @__PURE__ */ new Set();
function Z(e, t) {
  e && e.i && (Y.delete(e), e.i(t));
}
function tt(e, t, n) {
  const { fragment: i, after_update: c } = e.$$;
  i && i.m(t, n), x(() => {
    const s = e.$$.on_mount.map(v).filter(B);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : g(s), e.$$.on_mount = [];
  }), c.forEach(x);
}
function et(e, t) {
  const n = e.$$;
  n.fragment !== null && (X(n.after_update), g(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function nt(e, t) {
  e.$$.dirty[0] === -1 && (h.push(e), Q(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function st(e, t, n, i, c, s, r = null, $ = [-1]) {
  const u = k;
  _(e);
  const o = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: m,
    not_equal: c,
    bound: C(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: C(),
    dirty: $,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  r && r(o.root);
  let b = !1;
  if (o.ctx = n ? n(e, t.props || {}, (l, O, ...j) => {
    const A = j.length ? j[0] : O;
    return o.ctx && c(o.ctx[l], o.ctx[l] = A) && (!o.skip_bound && o.bound[l] && o.bound[l](A), b && nt(e, l)), O;
  }) : [], o.update(), b = !0, g(o.before_update), o.fragment = i ? i(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const l = D(t.target);
      o.fragment && o.fragment.l(l), l.forEach(E);
    } else
      o.fragment && o.fragment.c();
    t.intro && Z(e.$$.fragment), tt(e, t.target, t.anchor), H();
  }
  _(u);
}
let I;
typeof HTMLElement == "function" && (I = class extends HTMLElement {
  constructor(t, n, i) {
    super();
    /** The Svelte component constructor */
    f(this, "$$ctor");
    /** Slots */
    f(this, "$$s");
    /** The Svelte component instance */
    f(this, "$$c");
    /** Whether or not the custom element is connected */
    f(this, "$$cn", !1);
    /** Component props data */
    f(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    f(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    f(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    f(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    f(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const c = this.$$c.$on(t, n);
      this.$$l_u.set(n, c);
    }
    super.addEventListener(t, n, i);
  }
  removeEventListener(t, n, i) {
    if (super.removeEventListener(t, n, i), this.$$c) {
      const c = this.$$l_u.get(n);
      c && (c(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return () => {
          let r;
          return {
            c: function() {
              r = T("slot"), s !== "default" && z(r, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(o, b) {
              M(o, r, b);
            },
            d: function(o) {
              o && E(r);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = G(this);
      for (const s of this.$$s)
        s in i && (n[s] = [t(s)]);
      for (const s of this.attributes) {
        const r = this.$$g_p(s.name);
        r in this.$$d || (this.$$d[r] = p(r, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const c = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const r = p(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            r == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, r);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(c), c();
      for (const s in this.$$l)
        for (const r of this.$$l[s]) {
          const $ = this.$$c.$on(s, r);
          this.$$l_u.set(r, $);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, i) {
    var c;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = p(t, i, this.$$p_d, "toProp"), (c = this.$$c) == null || c.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function p(e, t, n, i) {
  var s;
  const c = (s = n[e]) == null ? void 0 : s.type;
  if (t = c === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (c) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (c) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function it(e, t, n, i, c, s) {
  let r = class extends I {
    constructor() {
      super(e, n, c), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        ($) => (t[$].attribute || $).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach(($) => {
    Object.defineProperty(r.prototype, $, {
      get() {
        return this.$$c && $ in this.$$c ? this.$$c[$] : this.$$d[$];
      },
      set(u) {
        var o;
        u = p($, u, t), this.$$d[$] = u, (o = this.$$c) == null || o.$set({ [$]: u });
      }
    });
  }), i.forEach(($) => {
    Object.defineProperty(r.prototype, $, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[$];
      }
    });
  }), s && (r = s(r)), e.element = /** @type {any} */
  r, r;
}
class rt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    et(this, 1), this.$destroy = m;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!B(n))
      return m;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const c = i.indexOf(n);
      c !== -1 && i.splice(c, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !U(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ct = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ct);
function ot(e) {
  let t, n, i, c, s;
  return {
    c() {
      t = T("button"), n = N("count is "), i = N(
        /*count*/
        e[0]
      );
    },
    m(r, $) {
      M(r, t, $), L(t, n), L(t, i), c || (s = q(
        t,
        "click",
        /*increment*/
        e[1]
      ), c = !0);
    },
    p(r, [$]) {
      $ & /*count*/
      1 && F(
        i,
        /*count*/
        r[0]
      );
    },
    i: m,
    o: m,
    d(r) {
      r && E(t), c = !1, s();
    }
  };
}
function $t(e, t, n) {
  let i = 0;
  return [i, () => {
    n(0, i += 1);
  }];
}
class ut extends rt {
  constructor(t) {
    super(), st(this, t, $t, ot, V, {});
  }
}
customElements.define("stg-counter", it(ut, {}, [], [], !0));
export {
  ut as default
};
