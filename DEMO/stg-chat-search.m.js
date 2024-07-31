var I = Object.defineProperty;
var H = (e, t, n) => t in e ? I(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => (H(e, typeof t != "symbol" ? t + "" : t, n), n);
function l() {
}
function T(e) {
  return e();
}
function L() {
  return /* @__PURE__ */ Object.create(null);
}
function w(e) {
  e.forEach(T);
}
function J(e) {
  return typeof e == "function";
}
function R(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function V(e) {
  return Object.keys(e).length === 0;
}
function v(e, ...t) {
  if (e == null) {
    for (const s of t)
      s(void 0);
    return l;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function D(e, t, n) {
  e.$$.on_destroy.push(v(t, n));
}
function P(e, t) {
  e.appendChild(t);
}
function U(e, t, n) {
  e.insertBefore(t, n || null);
}
function j(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function k(e) {
  return document.createElement(e);
}
function F(e) {
  return document.createTextNode(e);
}
function G(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function K(e) {
  return Array.from(e.childNodes);
}
function Q(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function W(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let m;
function p(e) {
  m = e;
}
function X() {
  if (!m)
    throw new Error("Function called outside component initialization");
  return m;
}
function Y(e) {
  X().$$.on_mount.push(e);
}
const _ = [], B = [];
let b = [];
const M = [], Z = /* @__PURE__ */ Promise.resolve();
let S = !1;
function tt() {
  S || (S = !0, Z.then(q));
}
function O(e) {
  b.push(e);
}
const E = /* @__PURE__ */ new Set();
let h = 0;
function q() {
  if (h !== 0)
    return;
  const e = m;
  do {
    try {
      for (; h < _.length; ) {
        const t = _[h];
        h++, p(t), et(t.$$);
      }
    } catch (t) {
      throw _.length = 0, h = 0, t;
    }
    for (p(null), _.length = 0, h = 0; B.length; )
      B.pop()();
    for (let t = 0; t < b.length; t += 1) {
      const n = b[t];
      E.has(n) || (E.add(n), n());
    }
    b.length = 0;
  } while (_.length);
  for (; M.length; )
    M.pop()();
  S = !1, E.clear(), p(e);
}
function et(e) {
  if (e.fragment !== null) {
    e.update(), w(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(O);
  }
}
function nt(e) {
  const t = [], n = [];
  b.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), b = t;
}
const st = /* @__PURE__ */ new Set();
function rt(e, t) {
  e && e.i && (st.delete(e), e.i(t));
}
function it(e, t, n) {
  const { fragment: s, after_update: i } = e.$$;
  s && s.m(t, n), O(() => {
    const r = e.$$.on_mount.map(T).filter(J);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : w(r), e.$$.on_mount = [];
  }), i.forEach(O);
}
function ct(e, t) {
  const n = e.$$;
  n.fragment !== null && (nt(n.after_update), w(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ot(e, t) {
  e.$$.dirty[0] === -1 && (_.push(e), tt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ut(e, t, n, s, i, r, o = null, u = [-1]) {
  const $ = m;
  p(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: l,
    not_equal: i,
    bound: L(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || ($ ? $.$$.context : [])),
    // everything else
    callbacks: L(),
    dirty: u,
    skip_bound: !1,
    root: t.target || $.$$.root
  };
  o && o(c.root);
  let g = !1;
  if (c.ctx = n ? n(e, t.props || {}, (a, C, ...A) => {
    const N = A.length ? A[0] : C;
    return c.ctx && i(c.ctx[a], c.ctx[a] = N) && (!c.skip_bound && c.bound[a] && c.bound[a](N), g && ot(e, a)), C;
  }) : [], c.update(), g = !0, w(c.before_update), c.fragment = s ? s(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = K(t.target);
      c.fragment && c.fragment.l(a), a.forEach(j);
    } else
      c.fragment && c.fragment.c();
    t.intro && rt(e.$$.fragment), it(e, t.target, t.anchor), q();
  }
  p($);
}
let z;
typeof HTMLElement == "function" && (z = class extends HTMLElement {
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
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return () => {
          let o;
          return {
            c: function() {
              o = k("slot"), r !== "default" && G(o, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, g) {
              U(c, o, g);
            },
            d: function(c) {
              c && j(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = W(this);
      for (const r of this.$$s)
        r in s && (n[r] = [t(r)]);
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = y(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
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
      const i = () => {
        this.$$r = !0;
        for (const r in this.$$p_d)
          if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
            const o = y(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const r in this.$$l)
        for (const o of this.$$l[r]) {
          const u = this.$$c.$on(r, o);
          this.$$l_u.set(o, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = y(t, s, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
  var r;
  const i = (r = n[e]) == null ? void 0 : r.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function $t(e, t, n, s, i, r) {
  let o = class extends z {
    constructor() {
      super(e, n, i), this.$$p_d = t;
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
        var c;
        $ = y(u, $, t), this.$$d[u] = $, (c = this.$$c) == null || c.$set({ [u]: $ });
      }
    });
  }), s.forEach((u) => {
    Object.defineProperty(o.prototype, u, {
      get() {
        var $;
        return ($ = this.$$c) == null ? void 0 : $[u];
      }
    });
  }), r && (o = r(o)), e.element = /** @type {any} */
  o, o;
}
class ft {
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
    ct(this, 1), this.$destroy = l;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!J(n))
      return l;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const i = s.indexOf(n);
      i !== -1 && s.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !V(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const lt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(lt);
const d = [];
function at(e, t = l) {
  let n;
  const s = /* @__PURE__ */ new Set();
  function i(u) {
    if (R(e, u) && (e = u, n)) {
      const $ = !d.length;
      for (const c of s)
        c[1](), d.push(c, e);
      if ($) {
        for (let c = 0; c < d.length; c += 2)
          d[c][0](d[c + 1]);
        d.length = 0;
      }
    }
  }
  function r(u) {
    i(u(e));
  }
  function o(u, $ = l) {
    const c = [u, $];
    return s.add(c), s.size === 1 && (n = t(i, r) || l), u(e), () => {
      s.delete(c), s.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: o };
}
const ht = "http://localhost:8099", dt = () => {
  const e = {}, { subscribe: t, set: n } = at(e);
  return {
    subscribe: t,
    set: (s) => n(s),
    start: async ({ language: s } = {}) => {
      const i = new URLSearchParams();
      s && i.append("l", s);
      let r = `${ht}/search/start`;
      return i.toString() && (r += `?${i.toString()}`), await (await fetch(r, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })).json();
    }
    // start: async () => {
    //     const queryParams = new URLSearchParams();
    //     const url = 'https://catfact.ninja/fact';
    // 	const res = await fetch(url, {
    // 		method: 'GET',
    // 		headers: {
    // 			'Content-Type': 'application/json'
    // 		}
    // 	});
    // 	const response = await res.json();
    // 	return response;
    // }
  };
}, x = dt();
function _t(e) {
  let t, n, s = JSON.stringify(
    /*$search*/
    e[0],
    null,
    2
  ) + "", i;
  return {
    c() {
      t = k("div"), n = k("pre"), i = F(s);
    },
    m(r, o) {
      U(r, t, o), P(t, n), P(n, i);
    },
    p(r, [o]) {
      o & /*$search*/
      1 && s !== (s = JSON.stringify(
        /*$search*/
        r[0],
        null,
        2
      ) + "") && Q(i, s);
    },
    i: l,
    o: l,
    d(r) {
      r && j(t);
    }
  };
}
function bt(e, t, n) {
  let s;
  return D(e, x, (i) => n(0, s = i)), Y(async () => {
    let i = await x.start({ language: "it" });
    x.set(i);
  }), [s];
}
class pt extends ft {
  constructor(t) {
    super(), ut(this, t, bt, _t, R, {});
  }
}
customElements.define("stg-chat-search", $t(pt, {}, [], [], !0));
export {
  pt as default
};
