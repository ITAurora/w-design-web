import { ref as y, openBlock as l, createElementBlock as i, createElementVNode as n, toDisplayString as p, onMounted as m, Fragment as S, renderList as f, normalizeClass as g, pushScopeId as x, popScopeId as V } from "vue";
const h = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [c, s] of t)
    a[c] = s;
  return a;
}, b = { class: "HelloWorld" }, B = {
  name: "HelloWorld"
}, O = /* @__PURE__ */ Object.assign(B, {
  props: {
    msg: String
  },
  setup(e) {
    const t = y(0);
    return (a, c) => (l(), i("div", b, [
      n("h1", null, p(e.msg), 1),
      n("button", {
        type: "button",
        onClick: c[0] || (c[0] = (s) => t.value++)
      }, "count is " + p(t.value), 1)
    ]));
  }
}), $ = /* @__PURE__ */ h(O, [["__scopeId", "data-v-cf9541d4"]]);
const k = (e) => (x("data-v-e1097ba3"), e = e(), V(), e), T = { class: "TypeSearch" }, I = { class: "SearchBox" }, L = ["onClick"], H = { class: "SearchContent" }, W = { class: "Searchinfo" }, j = /* @__PURE__ */ k(() => /* @__PURE__ */ n("div", { class: "icon" }, "logo", -1)), w = /* @__PURE__ */ k(() => /* @__PURE__ */ n("div", { class: "icon" }, "logo", -1)), E = {
  name: "TypeSearch"
}, N = /* @__PURE__ */ Object.assign(E, {
  props: {
    typeList: {
      type: Array,
      default() {
        return [];
      }
    },
    activeValue: {
      type: [String, Number],
      default() {
        return "";
      }
    },
    searchValue: {
      type: String,
      default() {
        return "";
      }
    }
  },
  emits: [
    "update:activeValue",
    "changeClick",
    "update:searchValue",
    "searchClick"
  ],
  setup(e, { emit: t }) {
    const a = e, c = y(""), s = () => {
    }, o = (r, d, u) => {
      t("update:activeValue", d.value), t("changeClick", r, d, u);
    }, _ = (r) => {
      t("update:searchValue", c.value.value), t("searchClick", r, c.value.value);
    };
    return m(() => {
      c.value.value = a.searchValue;
    }), (r, d) => (l(), i("div", T, [
      n("div", I, [
        (l(!0), i(S, null, f(e.typeList, (u, v) => (l(), i("div", {
          key: v + "switchBox",
          onClick: (C) => o(C, u, v),
          class: g(["SearchBoxOptions", { SearchBoxOptionsChance: e.activeValue == u.value }])
        }, p(u.name), 11, L))), 128))
      ]),
      n("div", H, [
        n("div", W, [
          j,
          n("input", {
            class: "input",
            ref_key: "input",
            ref: c,
            type: "text",
            id: "searchContent",
            name: "name",
            size: "40",
            placeholder: "请输入搜索内容",
            onClick: s
          }, null, 512),
          w,
          n("div", {
            class: "iconOption",
            onClick: _
          }, "搜索")
        ])
      ])
    ]));
  }
}), z = /* @__PURE__ */ h(N, [["__scopeId", "data-v-e1097ba3"]]);
const A = { class: "SupplierType" }, D = { class: "SupplierBox" }, F = ["onClick"], M = {
  name: "SupplierType"
}, q = /* @__PURE__ */ Object.assign(M, {
  props: {
    activeValue: {
      type: [String, Number],
      default() {
        return "";
      }
    },
    typeList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  emits: ["update:activeValue", "changeClick"],
  setup(e, { emit: t }) {
    const a = (c, s, o) => {
      t("update:activeValue", s.value), t("changeClick", c, s, o);
    };
    return (c, s) => (l(), i("div", A, [
      n("div", D, [
        (l(!0), i(S, null, f(e.typeList, (o, _) => (l(), i("div", {
          key: _ + "switchBox",
          onClick: (r) => a(r, o, _),
          class: g(["SearchBoxOptions", { SearchBoxOptionsChance: e.activeValue == o.value }])
        }, p(o.name), 11, F))), 128))
      ])
    ]));
  }
}), G = /* @__PURE__ */ h(q, [["__scopeId", "data-v-21d548ad"]]), J = [$, z, G], K = function(e, t) {
  J.forEach((a) => {
    e.component(a.name, a);
  });
}, Q = { install: K };
export {
  $ as HelloWorld,
  G as SupplierType,
  z as TypeSearch,
  Q as default
};
