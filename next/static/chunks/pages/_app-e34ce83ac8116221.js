(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        6840: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return n(9280)
            }])
        },
        9280: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function () {
                    return v
                }
            });
            var r = n(5893),
                o = (n(6774), n(7294));
            const a = ["light", "dark"],
                s = "(prefers-color-scheme: dark)",
                c = "undefined" == typeof window,
                l = (0, o.createContext)(void 0),
                i = e => (0, o.useContext)(l) ? o.createElement(o.Fragment, null, e.children) : o.createElement(m, e),
                m = ({
                    forcedTheme: e,
                    disableTransitionOnChange: t = !1,
                    enableSystem: n = !0,
                    enableColorScheme: r = !0,
                    storageKey: c = "theme",
                    themes: i = ["light", "dark"],
                    defaultTheme: m = (n ? "system" : "light"),
                    attribute: y = "data-theme",
                    value: b,
                    children: v,
                    nonce: g
                }) => {
                    const [p, $] = (0, o.useState)((() => d(c, m))), [w, S] = (0, o.useState)((() => d(c))), E = b ? Object.values(b) : i, k = (0, o.useCallback)((e => {
                        let o = e;
                        if (!o) return;
                        "system" === e && n && (o = f());
                        const s = b ? b[o] : o,
                            c = t ? h() : null,
                            l = document.documentElement;
                        if ("class" === y ? (l.classList.remove(...E), s && l.classList.add(s)) : s ? l.setAttribute(y, s) : l.removeAttribute(y), r) {
                            const e = a.includes(m) ? m : null,
                                t = a.includes(o) ? o : e;
                            l.style.colorScheme = t
                        }
                        null == c || c()
                    }), []), C = (0, o.useCallback)((e => {
                        $(e);
                        try {
                            localStorage.setItem(c, e)
                        } catch (e) {}
                    }), [e]), T = (0, o.useCallback)((t => {
                        const r = f(t);
                        S(r), "system" === p && n && !e && k("system")
                    }), [p, e]);
                    return (0, o.useEffect)((() => {
                        const e = window.matchMedia(s);
                        return e.addListener(T), T(e), () => e.removeListener(T)
                    }), [T]), (0, o.useEffect)((() => {
                        const e = e => {
                            e.key === c && C(e.newValue || m)
                        };
                        return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                    }), [C]), (0, o.useEffect)((() => {
                        k(null != e ? e : p)
                    }), [e, p]), o.createElement(l.Provider, {
                        value: {
                            theme: p,
                            setTheme: C,
                            forcedTheme: e,
                            resolvedTheme: "system" === p ? w : p,
                            themes: n ? [...i, "system"] : i,
                            systemTheme: n ? w : void 0
                        }
                    }, o.createElement(u, {
                        forcedTheme: e,
                        disableTransitionOnChange: t,
                        enableSystem: n,
                        enableColorScheme: r,
                        storageKey: c,
                        themes: i,
                        defaultTheme: m,
                        attribute: y,
                        value: b,
                        children: v,
                        attrs: E,
                        nonce: g
                    }), v)
                },
                u = (0, o.memo)((({
                    forcedTheme: e,
                    storageKey: t,
                    attribute: n,
                    enableSystem: r,
                    enableColorScheme: c,
                    defaultTheme: l,
                    value: i,
                    attrs: m,
                    nonce: u
                }) => {
                    const d = "system" === l,
                        h = "class" === n ? `var d=document.documentElement,c=d.classList;c.remove(${m.map((e=>`'${e}'`)).join(",")});` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
                        f = c ? a.includes(l) && l ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
                        y = (e, t = !1, r = !0) => {
                            const o = i ? i[e] : e,
                                s = t ? e + "|| ''" : `'${o}'`;
                            let l = "";
                            return c && r && !t && a.includes(e) && (l += `d.style.colorScheme = '${e}';`), "class" === n ? l += t || o ? `c.add(${s})` : "null" : o && (l += `d[s](n,${s})`), l
                        },
                        b = e ? `!function(){${h}${y(e)}}()` : r ? `!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${y(i?"x[e]":"e",!0)}}${d?"":"else{"+y(l,!1,!1)+"}"}${f}}catch(e){}}()` : `!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${y(i?"x[e]":"e",!0)}}else{${y(l,!1,!1)};}${f}}catch(t){}}();`;
                    return o.createElement("script", {
                        nonce: u,
                        dangerouslySetInnerHTML: {
                            __html: b
                        }
                    })
                }), (() => !0)),
                d = (e, t) => {
                    if (c) return;
                    let n;
                    try {
                        n = localStorage.getItem(e) || void 0
                    } catch (e) {}
                    return n || t
                },
                h = () => {
                    const e = document.createElement("style");
                    return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
                        window.getComputedStyle(document.body), setTimeout((() => {
                            document.head.removeChild(e)
                        }), 1)
                    }
                },
                f = e => (e || (e = window.matchMedia(s)), e.matches ? "dark" : "light");

            function y(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function (t) {
                        y(e, t, n[t])
                    }))
                }
                return e
            }
            var v = function (e) {
                var t = e.Component,
                    n = e.pageProps;
                return (0, r.jsx)(i, {
                    children: (0, r.jsx)(t, b({}, n))
                })
            }
        },
        6774: function () {}
    },
    function (e) {
        var t = function (t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], (function () {
            return t(6840), t(880)
        }));
        var n = e.O();
        _N_E = n
    }
]);