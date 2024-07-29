var J = Object.defineProperty;
var R = (e, t, n) => t in e ? J(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => (R(e, typeof t != "symbol" ? t + "" : t, n), n);
function b() {
}
function M(e) {
  return e();
}
function S() {
  return /* @__PURE__ */ Object.create(null);
}
function w(e) {
  e.forEach(M);
}
function T(e) {
  return typeof e == "function";
}
function V(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function U(e) {
  return Object.keys(e).length === 0;
}
function P(e, t) {
  e.appendChild(t);
}
function g(e, t, n) {
  e.insertBefore(t, n || null);
}
function _(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function E(e) {
  return document.createElement(e);
}
function k(e) {
  return document.createTextNode(e);
}
function q() {
  return k(" ");
}
function z(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function D(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function F(e) {
  return Array.from(e.childNodes);
}
function G(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function K(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let A;
function m(e) {
  A = e;
}
const h = [], v = [];
let a = [];
const B = [], Q = /* @__PURE__ */ Promise.resolve();
let O = !1;
function W() {
  O || (O = !0, Q.then(H));
}
function j(e) {
  a.push(e);
}
const x = /* @__PURE__ */ new Set();
let d = 0;
function H() {
  if (d !== 0)
    return;
  const e = A;
  do {
    try {
      for (; d < h.length; ) {
        const t = h[d];
        d++, m(t), X(t.$$);
      }
    } catch (t) {
      throw h.length = 0, d = 0, t;
    }
    for (m(null), h.length = 0, d = 0; v.length; )
      v.pop()();
    for (let t = 0; t < a.length; t += 1) {
      const n = a[t];
      x.has(n) || (x.add(n), n());
    }
    a.length = 0;
  } while (h.length);
  for (; B.length; )
    B.pop()();
  O = !1, x.clear(), m(e);
}
function X(e) {
  if (e.fragment !== null) {
    e.update(), w(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(j);
  }
}
function Y(e) {
  const t = [], n = [];
  a.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), a = t;
}
const Z = /* @__PURE__ */ new Set();
function tt(e, t) {
  e && e.i && (Z.delete(e), e.i(t));
}
function et(e, t, n) {
  const { fragment: s, after_update: c } = e.$$;
  s && s.m(t, n), j(() => {
    const i = e.$$.on_mount.map(M).filter(T);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : w(i), e.$$.on_mount = [];
  }), c.forEach(j);
}
function nt(e, t) {
  const n = e.$$;
  n.fragment !== null && (Y(n.after_update), w(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function st(e, t) {
  e.$$.dirty[0] === -1 && (h.push(e), W(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function it(e, t, n, s, c, i, o = null, u = [-1]) {
  const $ = A;
  m(e);
  const r = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: b,
    not_equal: c,
    bound: S(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || ($ ? $.$$.context : [])),
    // everything else
    callbacks: S(),
    dirty: u,
    skip_bound: !1,
    root: t.target || $.$$.root
  };
  o && o(r.root);
  let p = !1;
  if (r.ctx = n ? n(e, t.props || {}, (l, C, ...L) => {
    const N = L.length ? L[0] : C;
    return r.ctx && c(r.ctx[l], r.ctx[l] = N) && (!r.skip_bound && r.bound[l] && r.bound[l](N), p && st(e, l)), C;
  }) : [], r.update(), p = !0, w(r.before_update), r.fragment = s ? s(r.ctx) : !1, t.target) {
    if (t.hydrate) {
      const l = F(t.target);
      r.fragment && r.fragment.l(l), l.forEach(_);
    } else
      r.fragment && r.fragment.c();
    t.intro && tt(e.$$.fragment), et(e, t.target, t.anchor), H();
  }
  m($);
}
let I;
typeof HTMLElement == "function" && (I = class extends HTMLElement {
  constructor(t, n, s) {
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
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const c = this.$$c.$on(t, n);
      this.$$l_u.set(n, c);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const c = this.$$l_u.get(n);
      c && (c(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return () => {
          let o;
          return {
            c: function() {
              o = E("slot"), i !== "default" && D(o, "name", i);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(r, p) {
              g(r, o, p);
            },
            d: function(r) {
              r && _(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = K(this);
      for (const i of this.$$s)
        i in s && (n[i] = [t(i)]);
      for (const i of this.attributes) {
        const o = this.$$g_p(i.name);
        o in this.$$d || (this.$$d[o] = y(o, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
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
        for (const i in this.$$p_d)
          if (this.$$d[i] = this.$$c.$$.ctx[this.$$c.$$.props[i]], this.$$p_d[i].reflect) {
            const o = y(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(c), c();
      for (const i in this.$$l)
        for (const o of this.$$l[i]) {
          const u = this.$$c.$on(i, o);
          this.$$l_u.set(o, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var c;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = y(t, s, this.$$p_d, "toProp"), (c = this.$$c) == null || c.$set({ [t]: this.$$d[t] }));
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
function y(e, t, n, s) {
  var i;
  const c = (i = n[e]) == null ? void 0 : i.type;
  if (t = c === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
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
function rt(e, t, n, s, c, i) {
  let o = class extends I {
    constructor() {
      super(e, n, c), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((u) => {
    Object.defineProperty(o.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set($) {
        var r;
        $ = y(u, $, t), this.$$d[u] = $, (r = this.$$c) == null || r.$set({ [u]: $ });
      }
    });
  }), s.forEach((u) => {
    Object.defineProperty(o.prototype, u, {
      get() {
        var $;
        return ($ = this.$$c) == null ? void 0 : $[u];
      }
    });
  }), i && (o = i(o)), e.element = /** @type {any} */
  o, o;
}
class ct {
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
    nt(this, 1), this.$destroy = b;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!T(n))
      return b;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const c = s.indexOf(n);
      c !== -1 && s.splice(c, 1);
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
const ot = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ot);
function $t(e) {
  let t, n, s, c, i, o, u;
  return {
    c() {
      t = E("span"), t.textContent = "Counter Added", n = q(), s = E("button"), c = k("count is "), i = k(
        /*count*/
        e[0]
      );
    },
    m($, r) {
      g($, t, r), g($, n, r), g($, s, r), P(s, c), P(s, i), o || (u = z(
        s,
        "click",
        /*increment*/
        e[1]
      ), o = !0);
    },
    p($, [r]) {
      r & /*count*/
      1 && G(
        i,
        /*count*/
        $[0]
      );
    },
    i: b,
    o: b,
    d($) {
      $ && (_(t), _(n), _(s)), o = !1, u();
    }
  };
}
function ut(e, t, n) {
  let s = 0;
  return [s, () => {
    n(0, s += 1);
  }];
}
class ft extends ct {
  constructor(t) {
    super(), it(this, t, ut, $t, V, {});
  }
}
customElements.define("stg-counter-added", rt(ft, {}, [], [], !0));
export {
  ft as default
};
