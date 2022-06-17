(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [650], {
        9749: function (e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function i(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                        } catch (u) {
                            l = !0, o = u
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || l(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(e) {
                return function (e) {
                    if (Array.isArray(e)) return r(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || l(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e, t) {
                if (e) {
                    if ("string" === typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                var t = e.src,
                    n = e.sizes,
                    r = e.unoptimized,
                    l = void 0 !== r && r,
                    u = e.priority,
                    c = void 0 !== u && u,
                    v = e.loading,
                    g = e.lazyRoot,
                    S = void 0 === g ? null : g,
                    T = e.lazyBoundary,
                    x = void 0 === T ? "200px" : T,
                    j = e.className,
                    k = e.quality,
                    L = e.width,
                    F = e.height,
                    M = e.style,
                    I = e.objectFit,
                    D = e.objectPosition,
                    z = e.onLoadingComplete,
                    N = e.placeholder,
                    H = void 0 === N ? "empty" : N,
                    _ = e.blurDataURL,
                    B = y(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "style", "objectFit", "objectPosition", "onLoadingComplete", "placeholder", "blurDataURL"]),
                    U = s.useContext(m.ImageConfigContext),
                    q = s.useMemo((function () {
                        var e = b || U || d.imageConfigDefault,
                            t = a(e.deviceSizes).concat(a(e.imageSizes)).sort((function (e, t) {
                                return e - t
                            })),
                            n = e.deviceSizes.sort((function (e, t) {
                                return e - t
                            }));
                        return h({}, e, {
                            allSizes: t,
                            deviceSizes: n
                        })
                    }), [U]),
                    Y = B,
                    V = n ? "responsive" : "intrinsic";
                "layout" in Y && (Y.layout && (V = Y.layout), delete Y.layout);
                var W = P;
                if ("loader" in Y) {
                    if (Y.loader) {
                        var $ = Y.loader;
                        W = function (e) {
                            e.config;
                            var t = y(e, ["config"]);
                            return $(t)
                        }
                    }
                    delete Y.loader
                }
                var G = "";
                if (function (e) {
                        return "object" === typeof e && (A(e) || function (e) {
                            return void 0 !== e.src
                        }(e))
                    }(t)) {
                    var Z = A(t) ? t.default : t;
                    if (!Z.src) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Z)));
                    if (_ = _ || Z.blurDataURL, G = Z.src, (!V || "fill" !== V) && (F = F || Z.height, L = L || Z.width, !Z.height || !Z.width)) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Z)))
                }
                t = "string" === typeof t ? t : G;
                var J = C(L),
                    K = C(F),
                    Q = C(k),
                    X = !c && ("lazy" === v || "undefined" === typeof v);
                (t.startsWith("data:") || t.startsWith("blob:")) && (l = !0, X = !1);
                w.has(t) && (X = !1);
                var ee, te = i(s.useState(!1), 2),
                    ne = te[0],
                    re = te[1],
                    oe = i(p.useIntersection({
                        rootRef: S,
                        rootMargin: x,
                        disabled: !X
                    }), 3),
                    ie = oe[0],
                    ae = oe[1],
                    le = oe[2],
                    ue = !X || ae,
                    ce = {
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    se = {
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    fe = !1,
                    de = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: I,
                        objectPosition: D
                    };
                0;
                0;
                var pe = Object.assign({}, M, "raw" === V ? {} : de),
                    me = "blur" !== H || ne ? {} : {
                        filter: "blur(20px)",
                        backgroundSize: I || "cover",
                        backgroundImage: 'url("'.concat(_, '")'),
                        backgroundPosition: D || "0% 0%"
                    };
                if ("fill" === V) ce.display = "block", ce.position = "absolute", ce.top = 0, ce.left = 0, ce.bottom = 0, ce.right = 0;
                else if ("undefined" !== typeof J && "undefined" !== typeof K) {
                    var ve = K / J,
                        ge = isNaN(ve) ? "100%" : "".concat(100 * ve, "%");
                    "responsive" === V ? (ce.display = "block", ce.position = "relative", fe = !0, se.paddingTop = ge) : "intrinsic" === V ? (ce.display = "inline-block", ce.position = "relative", ce.maxWidth = "100%", fe = !0, se.maxWidth = "100%", ee = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(J, "%27%20height=%27").concat(K, "%27/%3e")) : "fixed" === V && (ce.display = "inline-block", ce.position = "relative", ce.width = J, ce.height = K)
                } else 0;
                var he = {
                    src: E,
                    srcSet: void 0,
                    sizes: void 0
                };
                ue && (he = O({
                    config: q,
                    src: t,
                    unoptimized: l,
                    layout: V,
                    width: J,
                    quality: Q,
                    sizes: n,
                    loader: W
                }));
                var ye = t;
                0;
                var be, we = "imagesrcset",
                    Ee = "imagesizes";
                we = "imageSrcSet", Ee = "imageSizes";
                var Se = (o(be = {}, we, he.srcSet), o(be, Ee, he.sizes), be),
                    Ae = s.default.useLayoutEffect,
                    Oe = s.useRef(z),
                    Ce = s.useRef(t);
                s.useEffect((function () {
                    Oe.current = z
                }), [z]), Ae((function () {
                    Ce.current !== t && (le(), Ce.current = t)
                }), [le, t]);
                var Pe = h({
                    isLazy: X,
                    imgAttributes: he,
                    heightInt: K,
                    widthInt: J,
                    qualityInt: Q,
                    layout: V,
                    className: j,
                    imgStyle: pe,
                    blurStyle: me,
                    loading: v,
                    config: q,
                    unoptimized: l,
                    placeholder: H,
                    loader: W,
                    srcString: ye,
                    onLoadingCompleteRef: Oe,
                    setBlurComplete: re,
                    setIntersection: ie,
                    isVisible: ue
                }, Y);
                return s.default.createElement(s.default.Fragment, null, "raw" === V ? s.default.createElement(R, Object.assign({}, Pe)) : s.default.createElement("span", {
                    style: ce
                }, fe ? s.default.createElement("span", {
                    style: se
                }, ee ? s.default.createElement("img", {
                    style: {
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    alt: "",
                    "aria-hidden": !0,
                    src: ee
                }) : null) : null, s.default.createElement(R, Object.assign({}, Pe))), c ? s.default.createElement(f.default, null, s.default.createElement("link", Object.assign({
                    key: "__nimg-" + he.src + he.srcSet + he.sizes,
                    rel: "preload",
                    as: "image",
                    href: he.srcSet ? void 0 : he.src
                }, Se))) : null)
            };
            var u, c, s = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                            } return t.default = e, t
                }(n(7294)),
                f = (u = n(3121)) && u.__esModule ? u : {
                    default: u
                },
                d = n(139),
                p = n(9246),
                m = n(8730),
                v = (n(670), n(2700));

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function h(e) {
                for (var t = arguments, n = function (n) {
                        var r = null != t[n] ? t[n] : {},
                            o = Object.keys(r);
                        "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter((function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        })))), o.forEach((function (t) {
                            g(e, t, r[t])
                        }))
                    }, r = 1; r < arguments.length; r++) n(r);
                return e
            }

            function y(e, t) {
                if (null == e) return {};
                var n, r, o = function (e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            c = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "",
                loader: "akamai",
                experimentalLayoutRaw: !1
            };
            var b = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "",
                    loader: "akamai",
                    experimentalLayoutRaw: !1
                },
                w = new Set,
                E = (new Map, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
            var S = new Map([
                ["default", function (e) {
                    var t = e.config,
                        n = e.src,
                        r = e.width,
                        o = e.quality;
                    0;
                    if (n.endsWith(".svg") && !t.dangerouslyAllowSVG) return n;
                    return "".concat(v.normalizePathTrailingSlash(t.path), "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(o || 75)
                }],
                ["imgix", function (e) {
                    var t = e.config,
                        n = e.src,
                        r = e.width,
                        o = e.quality,
                        i = new URL("".concat(t.path).concat(x(n))),
                        a = i.searchParams;
                    a.set("auto", a.get("auto") || "format"), a.set("fit", a.get("fit") || "max"), a.set("w", a.get("w") || r.toString()), o && a.set("q", o.toString());
                    return i.href
                }],
                ["cloudinary", function (e) {
                    var t = e.config,
                        n = e.src,
                        r = e.width,
                        o = e.quality,
                        i = ["f_auto", "c_limit", "w_" + r, "q_" + (o || "auto")].join(",") + "/";
                    return "".concat(t.path).concat(i).concat(x(n))
                }],
                ["akamai", function (e) {
                    var t = e.config,
                        n = e.src,
                        r = e.width;
                    return "".concat(t.path).concat(x(n), "?imwidth=").concat(r)
                }],
                ["custom", function (e) {
                    var t = e.src;
                    throw new Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                }]
            ]);

            function A(e) {
                return void 0 !== e.default
            }

            function O(e) {
                var t = e.config,
                    n = e.src,
                    r = e.unoptimized,
                    o = e.layout,
                    i = e.width,
                    l = e.quality,
                    u = e.sizes,
                    c = e.loader;
                if (r) return {
                    src: n,
                    srcSet: void 0,
                    sizes: void 0
                };
                var s = function (e, t, n, r) {
                        var o = e.deviceSizes,
                            i = e.allSizes;
                        if (r && ("fill" === n || "responsive" === n || "raw" === n)) {
                            for (var l, u = /(^|\s)(1?\d?\d)vw/g, c = []; l = u.exec(r); l) c.push(parseInt(l[2]));
                            if (c.length) {
                                var s, f = .01 * (s = Math).min.apply(s, a(c));
                                return {
                                    widths: i.filter((function (e) {
                                        return e >= o[0] * f
                                    })),
                                    kind: "w"
                                }
                            }
                            return {
                                widths: i,
                                kind: "w"
                            }
                        }
                        return "number" !== typeof t || "fill" === n || "responsive" === n ? {
                            widths: o,
                            kind: "w"
                        } : {
                            widths: a(new Set([t, 2 * t].map((function (e) {
                                return i.find((function (t) {
                                    return t >= e
                                })) || i[i.length - 1]
                            })))),
                            kind: "x"
                        }
                    }(t, i, o, u),
                    f = s.widths,
                    d = s.kind,
                    p = f.length - 1;
                return {
                    sizes: u || "w" !== d ? u : "100vw",
                    srcSet: f.map((function (e, r) {
                        return "".concat(c({
                            config: t,
                            src: n,
                            quality: l,
                            width: e
                        }), " ").concat("w" === d ? e : r + 1).concat(d)
                    })).join(", "),
                    src: c({
                        config: t,
                        src: n,
                        quality: l,
                        width: f[p]
                    })
                }
            }

            function C(e) {
                return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
            }

            function P(e) {
                var t, n = (null === (t = e.config) || void 0 === t ? void 0 : t.loader) || "default",
                    r = S.get(n);
                if (r) return r(e);
                throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "), ". Received: ").concat(n))
            }

            function T(e, t, n, r, o, i) {
                e && e.src !== E && e["data-loaded-src"] !== t && (e["data-loaded-src"] = t, ("decode" in e ? e.decode() : Promise.resolve()).catch((function () {})).then((function () {
                    if (e.parentNode && (w.add(t), "blur" === r && i(!0), null === o || void 0 === o ? void 0 : o.current)) {
                        var n = e.naturalWidth,
                            a = e.naturalHeight;
                        o.current({
                            naturalWidth: n,
                            naturalHeight: a
                        })
                    }
                })))
            }
            var R = function (e) {
                var t = e.imgAttributes,
                    n = e.heightInt,
                    r = e.widthInt,
                    o = e.qualityInt,
                    i = e.layout,
                    a = e.className,
                    l = e.imgStyle,
                    u = e.blurStyle,
                    c = e.isLazy,
                    f = e.placeholder,
                    d = e.loading,
                    p = e.srcString,
                    m = e.config,
                    v = e.unoptimized,
                    g = e.loader,
                    b = e.onLoadingCompleteRef,
                    w = e.setBlurComplete,
                    E = e.setIntersection,
                    S = e.onLoad,
                    A = e.onError,
                    C = (e.isVisible, y(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "layout", "className", "imgStyle", "blurStyle", "isLazy", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadingCompleteRef", "setBlurComplete", "setIntersection", "onLoad", "onError", "isVisible"]));
                return s.default.createElement(s.default.Fragment, null, s.default.createElement("img", Object.assign({}, C, t, "raw" === i ? {
                    height: n,
                    width: r
                } : {}, {
                    decoding: "async",
                    "data-nimg": i,
                    className: a,
                    style: h({}, l, u),
                    ref: s.useCallback((function (e) {
                        E(e), (null === e || void 0 === e ? void 0 : e.complete) && T(e, p, 0, f, b, w)
                    }), [E, p, i, f, b, w]),
                    onLoad: function (e) {
                        T(e.currentTarget, p, 0, f, b, w), S && S(e)
                    },
                    onError: function (e) {
                        "blur" === f && w(!0), A && A(e)
                    }
                })), (c || "blur" === f) && s.default.createElement("noscript", null, s.default.createElement("img", Object.assign({}, C, O({
                    config: m,
                    src: p,
                    unoptimized: v,
                    layout: i,
                    width: r,
                    quality: o,
                    sizes: t.sizes,
                    loader: g
                }), "raw" === i ? {
                    height: n,
                    width: r
                } : {}, {
                    decoding: "async",
                    "data-nimg": i,
                    style: l,
                    className: a,
                    loading: d || "lazy"
                }))))
            };

            function x(e) {
                return "/" === e[0] ? e.slice(1) : e
            }("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && (Object.assign(t.default, t), e.exports = t.default)
        },
        1551: function (e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                        } catch (u) {
                            l = !0, o = u
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i, a = (i = n(7294)) && i.__esModule ? i : {
                    default: i
                },
                l = n(1003),
                u = n(880),
                c = n(9246);

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function (e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var f = {};

            function d(e, t, n, r) {
                if (e && l.isLocalURL(t)) {
                    e.prefetch(t, n, r).catch((function (e) {
                        0
                    }));
                    var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    f[t + "%" + n + (o ? "%" + o : "")] = !0
                }
            }
            var p = a.default.forwardRef((function (e, t) {
                var n, r = e.legacyBehavior,
                    i = void 0 === r ? !0 !== Boolean(!1) : r,
                    p = e.href,
                    m = e.as,
                    v = e.children,
                    g = e.prefetch,
                    h = e.passHref,
                    y = e.replace,
                    b = e.shallow,
                    w = e.scroll,
                    E = e.locale,
                    S = e.onClick,
                    A = e.onMouseEnter,
                    O = s(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter"]);
                n = v, i && "string" === typeof n && (n = a.default.createElement("a", null, n));
                var C, P = !1 !== g,
                    T = u.useRouter(),
                    R = a.default.useMemo((function () {
                        var e = o(l.resolveHref(T, p, !0), 2),
                            t = e[0],
                            n = e[1];
                        return {
                            href: t,
                            as: m ? l.resolveHref(T, m) : n || t
                        }
                    }), [T, p, m]),
                    x = R.href,
                    j = R.as,
                    k = a.default.useRef(x),
                    L = a.default.useRef(j);
                i && (C = a.default.Children.only(n));
                var F = i ? C && "object" === typeof C && C.ref : t,
                    M = o(c.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    I = M[0],
                    D = M[1],
                    z = M[2],
                    N = a.default.useCallback((function (e) {
                        L.current === j && k.current === x || (z(), L.current = j, k.current = x), I(e), F && ("function" === typeof F ? F(e) : "object" === typeof F && (F.current = e))
                    }), [j, F, x, z, I]);
                a.default.useEffect((function () {
                    var e = D && P && l.isLocalURL(x),
                        t = "undefined" !== typeof E ? E : T && T.locale,
                        n = f[x + "%" + j + (t ? "%" + t : "")];
                    e && !n && d(T, x, j, {
                        locale: t
                    })
                }), [j, x, D, E, P, T]);
                var H = {
                    ref: N,
                    onClick: function (e) {
                        i || "function" !== typeof S || S(e), i && C.props && "function" === typeof C.props.onClick && C.props.onClick(e), e.defaultPrevented || function (e, t, n, r, o, i, a, u) {
                            ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function (e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && l.isLocalURL(n)) && (e.preventDefault(), t[o ? "replace" : "push"](n, r, {
                                shallow: i,
                                locale: u,
                                scroll: a
                            }))
                        }(e, T, x, j, y, b, w, E)
                    },
                    onMouseEnter: function (e) {
                        i || "function" !== typeof A || A(e), i && C.props && "function" === typeof C.props.onMouseEnter && C.props.onMouseEnter(e), l.isLocalURL(x) && d(T, x, j, {
                            priority: !0
                        })
                    }
                };
                if (!i || h || "a" === C.type && !("href" in C.props)) {
                    var _ = "undefined" !== typeof E ? E : T && T.locale,
                        B = T && T.isLocaleDomain && l.getDomainLocale(j, _, T && T.locales, T && T.domainLocales);
                    H.href = B || l.addBasePath(l.addLocale(j, _, T && T.defaultLocale))
                }
                return i ? a.default.cloneElement(C, H) : a.default.createElement("a", Object.assign({}, O, H), n)
            }));
            t.default = p, ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && (Object.assign(t.default, t), e.exports = t.default)
        },
        9246: function (e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                        } catch (u) {
                            l = !0, o = u
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function (e) {
                var t = e.rootRef,
                    n = e.rootMargin,
                    r = e.disabled || !l,
                    s = i.useRef(),
                    f = o(i.useState(!1), 2),
                    d = f[0],
                    p = f[1],
                    m = o(i.useState(t ? t.current : null), 2),
                    v = m[0],
                    g = m[1],
                    h = i.useCallback((function (e) {
                        s.current && (s.current(), s.current = void 0), r || d || e && e.tagName && (s.current = function (e, t, n) {
                            var r = function (e) {
                                    var t, n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        r = c.find((function (e) {
                                            return e.root === n.root && e.margin === n.margin
                                        }));
                                    r ? t = u.get(r) : (t = u.get(n), c.push(n));
                                    if (t) return t;
                                    var o = new Map,
                                        i = new IntersectionObserver((function (e) {
                                            e.forEach((function (e) {
                                                var t = o.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return u.set(n, t = {
                                        id: n,
                                        observer: i,
                                        elements: o
                                    }), t
                                }(n),
                                o = r.id,
                                i = r.observer,
                                a = r.elements;
                            return a.set(e, t), i.observe(e),
                                function () {
                                    if (a.delete(e), i.unobserve(e), 0 === a.size) {
                                        i.disconnect(), u.delete(o);
                                        var t = c.findIndex((function (e) {
                                            return e.root === o.root && e.margin === o.margin
                                        }));
                                        t > -1 && c.splice(t, 1)
                                    }
                                }
                        }(e, (function (e) {
                            return e && p(e)
                        }), {
                            root: v,
                            rootMargin: n
                        }))
                    }), [r, v, n, d]),
                    y = i.useCallback((function () {
                        p(!1)
                    }), []);
                return i.useEffect((function () {
                    if (!l && !d) {
                        var e = a.requestIdleCallback((function () {
                            return p(!0)
                        }));
                        return function () {
                            return a.cancelIdleCallback(e)
                        }
                    }
                }), [d]), i.useEffect((function () {
                    t && g(t.current)
                }), [t]), [h, d, y]
            };
            var i = n(7294),
                a = n(4686),
                l = "undefined" !== typeof IntersectionObserver;
            var u = new Map,
                c = [];
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && (Object.assign(t.default, t), e.exports = t.default)
        },
        9008: function (e, t, n) {
            e.exports = n(3121)
        },
        5675: function (e, t, n) {
            e.exports = n(9749)
        },
        1664: function (e, t, n) {
            e.exports = n(1551)
        },
        1: function (e, t, n) {
            "use strict";
            n.d(t, {
                V: function () {
                    return he
                }
            });
            var r = n(7294),
                o = n(2984),
                i = n(2351),
                a = n(3784),
                l = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(l || {});

            function u(e) {
                let t = e.parentElement,
                    n = null;
                for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
                let r = "" === (null == t ? void 0 : t.getAttribute("disabled"));
                return (!r || ! function (e) {
                    if (!e) return !1;
                    let t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(n)) && r
            }
            var c = n(9946),
                s = n(2180);
            var f = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(f || {});
            let d = (0, i.yV)((function (e, t) {
                    let {
                        features: n = 1,
                        ...r
                    } = e, o = {
                        ref: t,
                        "aria-hidden": 2 === (2 & n) || void 0,
                        style: {
                            position: "absolute",
                            width: 1,
                            height: 1,
                            padding: 0,
                            margin: -1,
                            overflow: "hidden",
                            clip: "rect(0, 0, 0, 0)",
                            whiteSpace: "nowrap",
                            borderWidth: "0",
                            ...4 === (4 & n) && 2 !== (2 & n) && {
                                display: "none"
                            }
                        }
                    };
                    return (0, i.sY)({
                        ourProps: o,
                        theirProps: r,
                        slot: {},
                        defaultTag: "div",
                        name: "Hidden"
                    })
                })),
                p = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e => `${e}:not([tabindex='-1'])`)).join(",");
            var m, v = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(v || {}),
                g = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(g || {}),
                h = ((m = h || {})[m.Previous = -1] = "Previous", m[m.Next = 1] = "Next", m);
            var y = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(y || {});

            function b(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }
            let w = ["textarea", "input"].join(",");

            function E(e, t, n = !0) {
                let r, o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                    i = Array.isArray(e) ? n ? function (e, t = (e => e)) {
                        return e.slice().sort(((e, n) => {
                            let r = t(e),
                                o = t(n);
                            if (null === r || null === o) return 0;
                            let i = r.compareDocumentPosition(o);
                            return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                        }))
                    }(e) : e : function (e = document.body) {
                        return null == e ? [] : Array.from(e.querySelectorAll(p))
                    }(e),
                    a = o.activeElement,
                    l = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    u = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, i.indexOf(a)) - 1;
                        if (4 & t) return Math.max(0, i.indexOf(a)) + 1;
                        if (8 & t) return i.length - 1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    c = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    s = 0,
                    f = i.length;
                do {
                    if (s >= f || s + f <= 0) return 0;
                    let e = u + s;
                    if (16 & t) e = (e + f) % f;
                    else {
                        if (e < 0) return 3;
                        if (e >= f) return 1
                    }
                    r = i[e], null == r || r.focus(c), s += l
                } while (r !== o.activeElement);
                return 6 & t && function (e) {
                    var t, n;
                    return null != (n = null == (t = null == e ? void 0 : e.matches) ? void 0 : t.call(e, w)) && n
                }(r) && r.select(), r.hasAttribute("tabindex") || r.setAttribute("tabindex", "0"), 2
            }
            var S = n(3781),
                A = n(3855);

            function O(e, t, n) {
                let o = (0, A.E)(t);
                (0, r.useEffect)((() => {
                    function t(e) {
                        o.current(e)
                    }
                    return window.addEventListener(e, t, n), () => window.removeEventListener(e, t, n)
                }), [e, n])
            }
            var C = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(C || {});

            function P() {
                let e = (0, r.useRef)(0);
                return O("keydown", (t => {
                    "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0)
                }), !0), e
            }
            var T = n(4879);

            function R(e) {
                return "undefined" == typeof window ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }

            function x(...e) {
                return (0, r.useMemo)((() => R(...e)), [...e])
            }

            function j(e, t, n, o) {
                let i = (0, A.E)(n);
                (0, r.useEffect)((() => {
                    function n(e) {
                        i.current(e)
                    }
                    return (e = null != e ? e : window).addEventListener(t, n, o), () => e.removeEventListener(t, n, o)
                }), [e, t, o])
            }
            var k = n(1021);

            function L(e, t) {
                let n = (0, r.useRef)([]),
                    o = (0, S.z)(e);
                (0, r.useEffect)((() => {
                    for (let [e, r] of t.entries())
                        if (n.current[e] !== r) {
                            let e = o(t);
                            return n.current = t, e
                        }
                }), [o, ...t])
            }
            var F = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(F || {});
            let M = Object.assign((0, i.yV)((function (e, t) {
                let n = (0, r.useRef)(null),
                    l = (0, a.T)(n, t),
                    {
                        initialFocus: u,
                        containers: c,
                        features: p = 30,
                        ...m
                    } = e;
                (0, s.H)() || (p = 1);
                let h = x(n);
                ! function ({
                    ownerDocument: e
                }, t) {
                    let n = (0, r.useRef)(null);
                    j(null == e ? void 0 : e.defaultView, "focusout", (e => {
                        !t || n.current || (n.current = e.target)
                    }), !0), L((() => {
                        t || (b(n.current), n.current = null)
                    }), [t]);
                    let o = (0, r.useRef)(!1);
                    (0, r.useEffect)((() => (o.current = !1, () => {
                        o.current = !0, (0, k.Y)((() => {
                            !o.current || (b(n.current), n.current = null)
                        }))
                    })), [])
                }({
                    ownerDocument: h
                }, Boolean(16 & p));
                let y = function ({
                    ownerDocument: e,
                    container: t,
                    initialFocus: n
                }, o) {
                    let i = (0, r.useRef)(null);
                    return L((() => {
                        if (!o) return;
                        let r = t.current;
                        if (!r) return;
                        let a = null == e ? void 0 : e.activeElement;
                        if (null != n && n.current) {
                            if ((null == n ? void 0 : n.current) === a) return void(i.current = a)
                        } else if (r.contains(a)) return void(i.current = a);
                        null != n && n.current ? b(n.current) : E(r, v.First) === g.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = null == e ? void 0 : e.activeElement
                    }), [o]), i
                }({
                    ownerDocument: h,
                    container: n,
                    initialFocus: u
                }, Boolean(2 & p));
                ! function ({
                    ownerDocument: e,
                    container: t,
                    containers: n,
                    previousActiveElement: r
                }, o) {
                    let i = (0, T.t)();
                    j(null == e ? void 0 : e.defaultView, "focus", (e => {
                        if (!o || !i.current) return;
                        let a = new Set(null == n ? void 0 : n.current);
                        a.add(t);
                        let l = r.current;
                        if (!l) return;
                        let u = e.target;
                        u && u instanceof HTMLElement ? function (e, t) {
                            var n;
                            for (let r of e)
                                if (null != (n = r.current) && n.contains(t)) return !0;
                            return !1
                        }(a, u) ? (r.current = u, b(u)) : (e.preventDefault(), e.stopPropagation(), b(l)) : b(r.current)
                    }), !0)
                }({
                    ownerDocument: h,
                    container: n,
                    containers: c,
                    previousActiveElement: y
                }, Boolean(8 & p));
                let w = P(),
                    A = (0, S.z)((() => {
                        let e = n.current;
                        !e || (0, o.E)(w.current, {
                            [C.Forwards]: () => E(e, v.First),
                            [C.Backwards]: () => E(e, v.Last)
                        })
                    })),
                    O = {
                        ref: l
                    };
                return r.createElement(r.Fragment, null, Boolean(4 & p) && r.createElement(d, {
                    as: "button",
                    type: "button",
                    onFocus: A,
                    features: f.Focusable
                }), (0, i.sY)({
                    ourProps: O,
                    theirProps: m,
                    defaultTag: "div",
                    name: "FocusTrap"
                }), Boolean(4 & p) && r.createElement(d, {
                    as: "button",
                    type: "button",
                    onFocus: A,
                    features: f.Focusable
                }))
            })), {
                features: F
            });
            var I = n(6723);
            let D = new Set,
                z = new Map;

            function N(e) {
                e.setAttribute("aria-hidden", "true"), e.inert = !0
            }

            function H(e) {
                let t = z.get(e);
                !t || (null === t["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert)
            }

            function _(e, t = !0) {
                (0, I.e)((() => {
                    if (!t || !e.current) return;
                    let n = e.current,
                        r = R(n);
                    if (r) {
                        D.add(n);
                        for (let e of z.keys()) e.contains(n) && (H(e), z.delete(e));
                        return r.querySelectorAll("body > *").forEach((e => {
                            if (e instanceof HTMLElement) {
                                for (let t of D)
                                    if (e.contains(t)) return;
                                1 === D.size && (z.set(e, {
                                    "aria-hidden": e.getAttribute("aria-hidden"),
                                    inert: e.inert
                                }), N(e))
                            }
                        })), () => {
                            if (D.delete(n), D.size > 0) r.querySelectorAll("body > *").forEach((e => {
                                if (e instanceof HTMLElement && !z.has(e)) {
                                    for (let t of D)
                                        if (e.contains(t)) return;
                                    z.set(e, {
                                        "aria-hidden": e.getAttribute("aria-hidden"),
                                        inert: e.inert
                                    }), N(e)
                                }
                            }));
                            else
                                for (let e of z.keys()) H(e), z.delete(e)
                        }
                    }
                }), [t])
            }
            var B = n(3935);
            let U = (0, r.createContext)(!1);

            function q() {
                return (0, r.useContext)(U)
            }

            function Y(e) {
                return r.createElement(U.Provider, {
                    value: e.force
                }, e.children)
            }
            let V = r.Fragment,
                W = (0, i.yV)((function (e, t) {
                    let n = e,
                        o = (0, r.useRef)(null),
                        l = (0, a.T)((0, a.h)((e => {
                            o.current = e
                        })), t),
                        u = x(o),
                        c = function (e) {
                            let t = q(),
                                n = (0, r.useContext)(G),
                                o = x(e),
                                [i, a] = (0, r.useState)((() => {
                                    if (!t && null !== n || "undefined" == typeof window) return null;
                                    let e = null == o ? void 0 : o.getElementById("headlessui-portal-root");
                                    if (e) return e;
                                    if (null === o) return null;
                                    let r = o.createElement("div");
                                    return r.setAttribute("id", "headlessui-portal-root"), o.body.appendChild(r)
                                }));
                            return (0, r.useEffect)((() => {
                                null !== i && (null != o && o.body.contains(i) || null == o || o.body.appendChild(i))
                            }), [i, o]), (0, r.useEffect)((() => {
                                t || null !== n && a(n.current)
                            }), [n, a, t]), i
                        }(o),
                        [f] = (0, r.useState)((() => {
                            var e;
                            return "undefined" == typeof window ? null : null != (e = null == u ? void 0 : u.createElement("div")) ? e : null
                        })),
                        d = (0, s.H)(),
                        p = (0, r.useRef)(!1);
                    return (0, I.e)((() => {
                        if (p.current = !1, c && f) return c.contains(f) || c.appendChild(f), () => {
                            p.current = !0, (0, k.Y)((() => {
                                var e;
                                !p.current || !c || !f || (c.removeChild(f), c.childNodes.length <= 0 && (null == (e = c.parentElement) || e.removeChild(c)))
                            }))
                        }
                    }), [c, f]), d && c && f ? (0, B.createPortal)((0, i.sY)({
                        ourProps: {
                            ref: l
                        },
                        theirProps: n,
                        defaultTag: V,
                        name: "Portal"
                    }), f) : null
                })),
                $ = r.Fragment,
                G = (0, r.createContext)(null),
                Z = (0, i.yV)((function (e, t) {
                    let {
                        target: n,
                        ...o
                    } = e, l = {
                        ref: (0, a.T)(t)
                    };
                    return r.createElement(G.Provider, {
                        value: n
                    }, (0, i.sY)({
                        ourProps: l,
                        theirProps: o,
                        defaultTag: $,
                        name: "Popover.Group"
                    }))
                })),
                J = Object.assign(W, {
                    Group: Z
                }),
                K = (0, r.createContext)(null);

            function Q() {
                let e = (0, r.useContext)(K);
                if (null === e) {
                    let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, Q), e
                }
                return e
            }
            let X = (0, i.yV)((function (e, t) {
                let n = Q(),
                    r = `headlessui-description-${(0,c.M)()}`,
                    o = (0, a.T)(t);
                (0, I.e)((() => n.register(r)), [r, n.register]);
                let l = e,
                    u = {
                        ref: o,
                        ...n.props,
                        id: r
                    };
                return (0, i.sY)({
                    ourProps: u,
                    theirProps: l,
                    slot: n.slot || {},
                    defaultTag: "p",
                    name: n.name || "Description"
                })
            }));
            var ee = n(6567);
            let te = (0, r.createContext)((() => {}));
            te.displayName = "StackContext";
            var ne = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ne || {});

            function re({
                children: e,
                onUpdate: t,
                type: n,
                element: o
            }) {
                let i = (0, r.useContext)(te),
                    a = (0, S.z)(((...e) => {
                        null == t || t(...e), i(...e)
                    }));
                return (0, I.e)((() => (a(0, n, o), () => a(1, n, o))), [a, n, o]), r.createElement(te.Provider, {
                    value: a
                }, e)
            }
            var oe = (e => (e[e.None = 1] = "None", e[e.IgnoreScrollbars = 2] = "IgnoreScrollbars", e))(oe || {});
            var ie = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ie || {}),
                ae = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(ae || {});
            let le = {
                    0: (e, t) => e.titleId === t.id ? e : {
                        ...e,
                        titleId: t.id
                    }
                },
                ue = (0, r.createContext)(null);

            function ce(e) {
                let t = (0, r.useContext)(ue);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, ce), t
                }
                return t
            }

            function se(e, t) {
                return (0, o.E)(t.type, le, e, t)
            }
            ue.displayName = "DialogContext";
            let fe = i.AN.RenderStrategy | i.AN.Static,
                de = (0, i.yV)((function (e, t) {
                    let {
                        open: n,
                        onClose: u,
                        initialFocus: p,
                        __demoMode: m = !1,
                        ...v
                    } = e, [g, h] = (0, r.useState)(0), y = (0, ee.oJ)();
                    void 0 === n && null !== y && (n = (0, o.E)(y, {
                        [ee.ZM.Open]: !0,
                        [ee.ZM.Closed]: !1
                    }));
                    let b = (0, r.useRef)(new Set),
                        w = (0, r.useRef)(null),
                        E = (0, a.T)(w, t),
                        A = (0, r.useRef)(null),
                        C = x(w),
                        P = e.hasOwnProperty("open") || null !== y,
                        T = e.hasOwnProperty("onClose");
                    if (!P && !T) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!P) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!T) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" != typeof n) throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);
                    if ("function" != typeof u) throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${u}`);
                    let L = n ? 0 : 1,
                        [F, I] = (0, r.useReducer)(se, {
                            titleId: null,
                            descriptionId: null,
                            panelRef: (0, r.createRef)()
                        }),
                        D = (0, S.z)((() => u(!1))),
                        z = (0, S.z)((e => I({
                            type: 0,
                            id: e
                        }))),
                        N = !!(0, s.H)() && (!m && 0 === L),
                        H = g > 1,
                        B = null !== (0, r.useContext)(ue),
                        U = H ? "parent" : "leaf";
                    _(w, !!H && N),
                        function (e, t, n = 1) {
                            let o = (0, r.useRef)(!1),
                                i = (0, S.z)((r => {
                                    if (o.current) return;
                                    o.current = !0, (0, k.Y)((() => {
                                        o.current = !1
                                    }));
                                    let i = function e(t) {
                                            return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                                        }(e),
                                        a = r.target;
                                    if (a.ownerDocument.documentElement.contains(a)) {
                                        if (2 === (2 & n)) {
                                            let e = 20,
                                                t = a.ownerDocument.documentElement;
                                            if (r.clientX > t.clientWidth - e || r.clientX < e || r.clientY > t.clientHeight - e || r.clientY < e) return
                                        }
                                        for (let e of i) {
                                            if (null === e) continue;
                                            let t = e instanceof HTMLElement ? e : e.current;
                                            if (null != t && t.contains(a)) return
                                        }
                                        return t(r, a)
                                    }
                                }));
                            O("pointerdown", i), O("mousedown", i)
                        }((() => {
                            var e, t;
                            return [...Array.from(null != (e = null == C ? void 0 : C.querySelectorAll("body > *")) ? e : []).filter((e => !(!(e instanceof HTMLElement) || e.contains(A.current) || F.panelRef.current && e.contains(F.panelRef.current)))), null != (t = F.panelRef.current) ? t : w.current]
                        }), (() => {
                            0 === L && (H || D())
                        }), oe.IgnoreScrollbars), j(null == C ? void 0 : C.defaultView, "keydown", (e => {
                            e.defaultPrevented || e.key === l.Escape && 0 === L && (H || (e.preventDefault(), e.stopPropagation(), D()))
                        })), (0, r.useEffect)((() => {
                            var e;
                            if (0 !== L || B) return;
                            let t = R(w);
                            if (!t) return;
                            let n = t.documentElement,
                                r = null != (e = t.defaultView) ? e : window,
                                o = n.style.overflow,
                                i = n.style.paddingRight,
                                a = r.innerWidth - n.clientWidth;
                            if (n.style.overflow = "hidden", a > 0) {
                                let e = a - (n.clientWidth - n.offsetWidth);
                                n.style.paddingRight = `${e}px`
                            }
                            return () => {
                                n.style.overflow = o, n.style.paddingRight = i
                            }
                        }), [L, B]), (0, r.useEffect)((() => {
                            if (0 !== L || !w.current) return;
                            let e = new IntersectionObserver((e => {
                                for (let t of e) 0 === t.boundingClientRect.x && 0 === t.boundingClientRect.y && 0 === t.boundingClientRect.width && 0 === t.boundingClientRect.height && D()
                            }));
                            return e.observe(w.current), () => e.disconnect()
                        }), [L, w, D]);
                    let [q, V] = function () {
                        let [e, t] = (0, r.useState)([]);
                        return [e.length > 0 ? e.join(" ") : void 0, (0, r.useMemo)((() => function (e) {
                            let n = (0, S.z)((e => (t((t => [...t, e])), () => t((t => {
                                    let n = t.slice(),
                                        r = n.indexOf(e);
                                    return -1 !== r && n.splice(r, 1), n
                                }))))),
                                o = (0, r.useMemo)((() => ({
                                    register: n,
                                    slot: e.slot,
                                    name: e.name,
                                    props: e.props
                                })), [n, e.slot, e.name, e.props]);
                            return r.createElement(K.Provider, {
                                value: o
                            }, e.children)
                        }), [t])]
                    }(), W = `headlessui-dialog-${(0,c.M)()}`, $ = (0, r.useMemo)((() => [{
                        dialogState: L,
                        close: D,
                        setTitleId: z
                    }, F]), [L, F, D, z]), G = (0, r.useMemo)((() => ({
                        open: 0 === L
                    })), [L]), Z = {
                        ref: E,
                        id: W,
                        role: "dialog",
                        "aria-modal": 0 === L || void 0,
                        "aria-labelledby": F.titleId,
                        "aria-describedby": q,
                        onClick(e) {
                            e.stopPropagation()
                        }
                    };
                    return r.createElement(re, {
                        type: "Dialog",
                        element: w,
                        onUpdate: (0, S.z)(((e, t, n) => {
                            "Dialog" === t && (0, o.E)(e, {
                                [ne.Add]() {
                                    b.current.add(n), h((e => e + 1))
                                },
                                [ne.Remove]() {
                                    b.current.add(n), h((e => e - 1))
                                }
                            })
                        }))
                    }, r.createElement(Y, {
                        force: !0
                    }, r.createElement(J, null, r.createElement(ue.Provider, {
                        value: $
                    }, r.createElement(J.Group, {
                        target: w
                    }, r.createElement(Y, {
                        force: !1
                    }, r.createElement(V, {
                        slot: G,
                        name: "Dialog.Description"
                    }, r.createElement(M, {
                        initialFocus: p,
                        containers: b,
                        features: N ? (0, o.E)(U, {
                            parent: M.features.RestoreFocus,
                            leaf: M.features.All & ~M.features.FocusLock
                        }) : M.features.None
                    }, (0, i.sY)({
                        ourProps: Z,
                        theirProps: v,
                        slot: G,
                        defaultTag: "div",
                        features: fe,
                        visible: 0 === L,
                        name: "Dialog"
                    })))))))), r.createElement(d, {
                        features: f.Hidden,
                        ref: A
                    }))
                })),
                pe = (0, i.yV)((function (e, t) {
                    let [{
                        dialogState: n,
                        close: o
                    }] = ce("Dialog.Overlay"), l = (0, a.T)(t), s = `headlessui-dialog-overlay-${(0,c.M)()}`, f = (0, S.z)((e => {
                        if (e.target === e.currentTarget) {
                            if (u(e.currentTarget)) return e.preventDefault();
                            e.preventDefault(), e.stopPropagation(), o()
                        }
                    })), d = (0, r.useMemo)((() => ({
                        open: 0 === n
                    })), [n]);
                    return (0, i.sY)({
                        ourProps: {
                            ref: l,
                            id: s,
                            "aria-hidden": !0,
                            onClick: f
                        },
                        theirProps: e,
                        slot: d,
                        defaultTag: "div",
                        name: "Dialog.Overlay"
                    })
                })),
                me = (0, i.yV)((function (e, t) {
                    let [{
                        dialogState: n
                    }, o] = ce("Dialog.Backdrop"), l = (0, a.T)(t), u = `headlessui-dialog-backdrop-${(0,c.M)()}`;
                    (0, r.useEffect)((() => {
                        if (null === o.panelRef.current) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                    }), [o.panelRef]);
                    let s = (0, r.useMemo)((() => ({
                        open: 0 === n
                    })), [n]);
                    return r.createElement(Y, {
                        force: !0
                    }, r.createElement(J, null, (0, i.sY)({
                        ourProps: {
                            ref: l,
                            id: u,
                            "aria-hidden": !0
                        },
                        theirProps: e,
                        slot: s,
                        defaultTag: "div",
                        name: "Dialog.Backdrop"
                    })))
                })),
                ve = (0, i.yV)((function (e, t) {
                    let [{
                        dialogState: n
                    }, o] = ce("Dialog.Panel"), l = (0, a.T)(t, o.panelRef), u = `headlessui-dialog-panel-${(0,c.M)()}`, s = (0, r.useMemo)((() => ({
                        open: 0 === n
                    })), [n]);
                    return (0, i.sY)({
                        ourProps: {
                            ref: l,
                            id: u
                        },
                        theirProps: e,
                        slot: s,
                        defaultTag: "div",
                        name: "Dialog.Panel"
                    })
                })),
                ge = (0, i.yV)((function (e, t) {
                    let [{
                        dialogState: n,
                        setTitleId: o
                    }] = ce("Dialog.Title"), l = `headlessui-dialog-title-${(0,c.M)()}`, u = (0, a.T)(t);
                    (0, r.useEffect)((() => (o(l), () => o(null))), [l, o]);
                    let s = (0, r.useMemo)((() => ({
                        open: 0 === n
                    })), [n]);
                    return (0, i.sY)({
                        ourProps: {
                            ref: u,
                            id: l
                        },
                        theirProps: e,
                        slot: s,
                        defaultTag: "h2",
                        name: "Dialog.Title"
                    })
                })),
                he = Object.assign(de, {
                    Backdrop: me,
                    Panel: ve,
                    Overlay: pe,
                    Title: ge,
                    Description: X
                })
        },
        3587: function (e, t, n) {
            "use strict";
            n.d(t, {
                u: function () {
                    return D
                }
            });
            var r = n(7294),
                o = n(2351),
                i = n(6567),
                a = n(2984),
                l = n(1021),
                u = n(9946),
                c = n(4879),
                s = n(6723),
                f = n(3855),
                d = n(2180),
                p = n(3784);

            function m() {
                let e = [],
                    t = [],
                    n = {
                        enqueue(e) {
                            t.push(e)
                        },
                        addEventListener: (e, t, r, o) => (e.addEventListener(t, r, o), n.add((() => e.removeEventListener(t, r, o)))),
                        requestAnimationFrame(...e) {
                            let t = requestAnimationFrame(...e);
                            return n.add((() => cancelAnimationFrame(t)))
                        },
                        nextFrame: (...e) => n.requestAnimationFrame((() => n.requestAnimationFrame(...e))),
                        setTimeout(...e) {
                            let t = setTimeout(...e);
                            return n.add((() => clearTimeout(t)))
                        },
                        add: t => (e.push(t), () => {
                            let n = e.indexOf(t);
                            if (n >= 0) {
                                let [t] = e.splice(n, 1);
                                t()
                            }
                        }),
                        dispose() {
                            for (let t of e.splice(0)) t()
                        },
                        async workQueue() {
                            for (let e of t.splice(0)) await e()
                        }
                    };
                return n
            }

            function v(e, ...t) {
                e && t.length > 0 && e.classList.add(...t)
            }

            function g(e, ...t) {
                e && t.length > 0 && e.classList.remove(...t)
            }
            var h, y = ((h = y || {}).Ended = "ended", h.Cancelled = "cancelled", h);

            function b(e, t, n, r) {
                let o = n ? "enter" : "leave",
                    i = m(),
                    l = void 0 !== r ? function (e) {
                        let t = {
                            called: !1
                        };
                        return (...n) => {
                            if (!t.called) return t.called = !0, e(...n)
                        }
                    }(r) : () => {},
                    u = (0, a.E)(o, {
                        enter: () => t.enter,
                        leave: () => t.leave
                    }),
                    c = (0, a.E)(o, {
                        enter: () => t.enterTo,
                        leave: () => t.leaveTo
                    }),
                    s = (0, a.E)(o, {
                        enter: () => t.enterFrom,
                        leave: () => t.leaveFrom
                    });
                return g(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), v(e, ...u, ...s), i.nextFrame((() => {
                    g(e, ...s), v(e, ...c),
                        function (e, t) {
                            let n = m();
                            if (!e) return n.dispose;
                            let {
                                transitionDuration: r,
                                transitionDelay: o
                            } = getComputedStyle(e), [i, a] = [r, o].map((e => {
                                let [t = 0] = e.split(",").filter(Boolean).map((e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e))).sort(((e, t) => t - e));
                                return t
                            }));
                            if (i + a !== 0) {
                                let r = [];
                                r.push(n.addEventListener(e, "transitionrun", (() => {
                                    r.splice(0).forEach((e => e())), r.push(n.addEventListener(e, "transitionend", (() => {
                                        t("ended"), r.splice(0).forEach((e => e()))
                                    }), {
                                        once: !0
                                    }), n.addEventListener(e, "transitioncancel", (() => {
                                        t("cancelled"), r.splice(0).forEach((e => e()))
                                    }), {
                                        once: !0
                                    }))
                                }), {
                                    once: !0
                                }))
                            } else t("ended");
                            n.add((() => t("cancelled"))), n.dispose
                        }(e, (n => ("ended" === n && (g(e, ...u), v(e, ...t.entered)), l(n))))
                })), i.dispose
            }
            var w = n(3781);

            function E({
                container: e,
                direction: t,
                classes: n,
                events: o,
                onStart: i,
                onStop: l
            }) {
                let u = (0, c.t)(),
                    d = function () {
                        let [e] = (0, r.useState)(m);
                        return (0, r.useEffect)((() => () => e.dispose()), [e]), e
                    }(),
                    p = (0, f.E)(t),
                    v = (0, w.z)((() => (0, a.E)(p.current, {
                        enter: () => o.current.beforeEnter(),
                        leave: () => o.current.beforeLeave(),
                        idle: () => {}
                    }))),
                    g = (0, w.z)((() => (0, a.E)(p.current, {
                        enter: () => o.current.afterEnter(),
                        leave: () => o.current.afterLeave(),
                        idle: () => {}
                    })));
                (0, s.e)((() => {
                    let t = m();
                    d.add(t.dispose);
                    let r = e.current;
                    if (r && "idle" !== p.current && u.current) return t.dispose(), v(), i.current(p.current), t.add(b(r, n.current, "enter" === p.current, (e => {
                        t.dispose(), (0, a.E)(e, {
                            [y.Ended]() {
                                g(), l.current(p.current)
                            },
                            [y.Cancelled]: () => {}
                        })
                    }))), t.dispose
                }), [t])
            }

            function S(e = "") {
                return e.split(" ").filter((e => e.trim().length > 1))
            }
            let A = (0, r.createContext)(null);
            A.displayName = "TransitionContext";
            var O, C = ((O = C || {}).Visible = "visible", O.Hidden = "hidden", O);
            let P = (0, r.createContext)(null);

            function T(e) {
                return "children" in e ? T(e.children) : e.current.filter((({
                    state: e
                }) => "visible" === e)).length > 0
            }

            function R(e) {
                let t = (0, f.E)(e),
                    n = (0, r.useRef)([]),
                    i = (0, c.t)(),
                    u = (0, w.z)(((e, r = o.l4.Hidden) => {
                        let u = n.current.findIndex((({
                            id: t
                        }) => t === e)); - 1 !== u && ((0, a.E)(r, {
                            [o.l4.Unmount]() {
                                n.current.splice(u, 1)
                            },
                            [o.l4.Hidden]() {
                                n.current[u].state = "hidden"
                            }
                        }), (0, l.Y)((() => {
                            var e;
                            !T(n) && i.current && (null == (e = t.current) || e.call(t))
                        })))
                    })),
                    s = (0, w.z)((e => {
                        let t = n.current.find((({
                            id: t
                        }) => t === e));
                        return t ? "visible" !== t.state && (t.state = "visible") : n.current.push({
                            id: e,
                            state: "visible"
                        }), () => u(e, o.l4.Unmount)
                    }));
                return (0, r.useMemo)((() => ({
                    children: n,
                    register: s,
                    unregister: u
                })), [s, u, n])
            }

            function x() {}
            P.displayName = "NestingContext";
            let j = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function k(e) {
                var t;
                let n = {};
                for (let r of j) n[r] = null != (t = e[r]) ? t : x;
                return n
            }
            let L = o.AN.RenderStrategy,
                F = (0, o.yV)((function (e, t) {
                    let {
                        beforeEnter: n,
                        afterEnter: l,
                        beforeLeave: c,
                        afterLeave: s,
                        enter: m,
                        enterFrom: v,
                        enterTo: g,
                        entered: h,
                        leave: y,
                        leaveFrom: b,
                        leaveTo: w,
                        ...O
                    } = e, C = (0, r.useRef)(null), x = (0, p.T)(C, t), [j, F] = (0, r.useState)("visible"), M = O.unmount ? o.l4.Unmount : o.l4.Hidden, {
                        show: I,
                        appear: D,
                        initial: z
                    } = function () {
                        let e = (0, r.useContext)(A);
                        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), {
                        register: N,
                        unregister: H
                    } = function () {
                        let e = (0, r.useContext)(P);
                        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), _ = (0, r.useRef)(null), B = (0, u.M)();
                    (0, r.useEffect)((() => {
                        if (B) return N(B)
                    }), [N, B]), (0, r.useEffect)((() => {
                        if (M === o.l4.Hidden && B) {
                            if (I && "visible" !== j) return void F("visible");
                            (0, a.E)(j, {
                                hidden: () => H(B),
                                visible: () => N(B)
                            })
                        }
                    }), [j, B, N, H, I, M]);
                    let U = (0, f.E)({
                            enter: S(m),
                            enterFrom: S(v),
                            enterTo: S(g),
                            entered: S(h),
                            leave: S(y),
                            leaveFrom: S(b),
                            leaveTo: S(w)
                        }),
                        q = function (e) {
                            let t = (0, r.useRef)(k(e));
                            return (0, r.useEffect)((() => {
                                t.current = k(e)
                            }), [e]), t
                        }({
                            beforeEnter: n,
                            afterEnter: l,
                            beforeLeave: c,
                            afterLeave: s
                        }),
                        Y = (0, d.H)();
                    (0, r.useEffect)((() => {
                        if (Y && "visible" === j && null === C.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }), [C, j, Y]);
                    let V = z && !D,
                        W = !Y || V || _.current === I ? "idle" : I ? "enter" : "leave",
                        $ = (0, r.useRef)(!1),
                        G = R((() => {
                            $.current || (F("hidden"), H(B))
                        }));
                    E({
                        container: C,
                        classes: U,
                        events: q,
                        direction: W,
                        onStart: (0, f.E)((() => {
                            $.current = !0
                        })),
                        onStop: (0, f.E)((e => {
                            $.current = !1, "leave" === e && !T(G) && (F("hidden"), H(B))
                        }))
                    }), (0, r.useEffect)((() => {
                        !V || (M === o.l4.Hidden ? _.current = null : _.current = I)
                    }), [I, V, j]);
                    let Z = O,
                        J = {
                            ref: x
                        };
                    return r.createElement(P.Provider, {
                        value: G
                    }, r.createElement(i.up, {
                        value: (0, a.E)(j, {
                            visible: i.ZM.Open,
                            hidden: i.ZM.Closed
                        })
                    }, (0, o.sY)({
                        ourProps: J,
                        theirProps: Z,
                        defaultTag: "div",
                        features: L,
                        visible: "visible" === j,
                        name: "Transition.Child"
                    })))
                })),
                M = (0, o.yV)((function (e, t) {
                    let {
                        show: n,
                        appear: l = !1,
                        unmount: u,
                        ...c
                    } = e, f = (0, r.useRef)(null), m = (0, p.T)(f, t);
                    (0, d.H)();
                    let v = (0, i.oJ)();
                    if (void 0 === n && null !== v && (n = (0, a.E)(v, {
                            [i.ZM.Open]: !0,
                            [i.ZM.Closed]: !1
                        })), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                    let [g, h] = (0, r.useState)(n ? "visible" : "hidden"), y = R((() => {
                        h("hidden")
                    })), [b, w] = (0, r.useState)(!0), E = (0, r.useRef)([n]);
                    (0, s.e)((() => {
                        !1 !== b && E.current[E.current.length - 1] !== n && (E.current.push(n), w(!1))
                    }), [E, n]);
                    let S = (0, r.useMemo)((() => ({
                        show: n,
                        appear: l,
                        initial: b
                    })), [n, l, b]);
                    (0, r.useEffect)((() => {
                        if (n) h("visible");
                        else if (T(y)) {
                            let e = f.current;
                            if (!e) return;
                            let t = e.getBoundingClientRect();
                            0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && h("hidden")
                        } else h("hidden")
                    }), [n, y]);
                    let O = {
                        unmount: u
                    };
                    return r.createElement(P.Provider, {
                        value: y
                    }, r.createElement(A.Provider, {
                        value: S
                    }, (0, o.sY)({
                        ourProps: {
                            ...O,
                            as: r.Fragment,
                            children: r.createElement(F, {
                                ref: m,
                                ...O,
                                ...c
                            })
                        },
                        theirProps: {},
                        defaultTag: r.Fragment,
                        features: L,
                        visible: "visible" === g,
                        name: "Transition"
                    })))
                })),
                I = (0, o.yV)((function (e, t) {
                    let n = null !== (0, r.useContext)(A),
                        o = null !== (0, i.oJ)();
                    return r.createElement(r.Fragment, null, !n && o ? r.createElement(M, {
                        ref: t,
                        ...e
                    }) : r.createElement(F, {
                        ref: t,
                        ...e
                    }))
                })),
                D = Object.assign(M, {
                    Child: I,
                    Root: M
                })
        },
        3781: function (e, t, n) {
            "use strict";
            n.d(t, {
                z: function () {
                    return i
                }
            });
            var r = n(7294),
                o = n(3855);
            let i = function (e) {
                let t = (0, o.E)(e);
                return r.useCallback(((...e) => t.current(...e)), [t])
            }
        },
        9946: function (e, t, n) {
            "use strict";
            n.d(t, {
                M: function () {
                    return c
                }
            });
            var r, o = n(7294),
                i = n(6723),
                a = n(2180);
            let l = 0;

            function u() {
                return ++l
            }
            let c = null != (r = o.useId) ? r : function () {
                let e = (0, a.H)(),
                    [t, n] = o.useState(e ? u : null);
                return (0, i.e)((() => {
                    null === t && n(u())
                }), [t]), null != t ? "" + t : void 0
            }
        },
        4879: function (e, t, n) {
            "use strict";
            n.d(t, {
                t: function () {
                    return i
                }
            });
            var r = n(7294),
                o = n(6723);

            function i() {
                let e = (0, r.useRef)(!1);
                return (0, o.e)((() => (e.current = !0, () => {
                    e.current = !1
                })), []), e
            }
        },
        6723: function (e, t, n) {
            "use strict";
            n.d(t, {
                e: function () {
                    return o
                }
            });
            var r = n(7294);
            let o = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect
        },
        3855: function (e, t, n) {
            "use strict";
            n.d(t, {
                E: function () {
                    return i
                }
            });
            var r = n(7294),
                o = n(6723);

            function i(e) {
                let t = (0, r.useRef)(e);
                return (0, o.e)((() => {
                    t.current = e
                }), [e]), t
            }
        },
        2180: function (e, t, n) {
            "use strict";
            n.d(t, {
                H: function () {
                    return i
                }
            });
            var r = n(7294);
            let o = {
                serverHandoffComplete: !1
            };

            function i() {
                let [e, t] = (0, r.useState)(o.serverHandoffComplete);
                return (0, r.useEffect)((() => {
                    !0 !== e && t(!0)
                }), [e]), (0, r.useEffect)((() => {
                    !1 === o.serverHandoffComplete && (o.serverHandoffComplete = !0)
                }), []), e
            }
        },
        3784: function (e, t, n) {
            "use strict";
            n.d(t, {
                T: function () {
                    return l
                },
                h: function () {
                    return a
                }
            });
            var r = n(7294),
                o = n(3781);
            let i = Symbol();

            function a(e, t = !0) {
                return Object.assign(e, {
                    [i]: t
                })
            }

            function l(...e) {
                let t = (0, r.useRef)(e);
                (0, r.useEffect)((() => {
                    t.current = e
                }), [e]);
                let n = (0, o.z)((e => {
                    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
                }));
                return e.every((e => null == e || (null == e ? void 0 : e[i]))) ? void 0 : n
            }
        },
        6567: function (e, t, n) {
            "use strict";
            n.d(t, {
                ZM: function () {
                    return a
                },
                oJ: function () {
                    return l
                },
                up: function () {
                    return u
                }
            });
            var r = n(7294);
            let o = (0, r.createContext)(null);
            o.displayName = "OpenClosedContext";
            var i, a = ((i = a || {})[i.Open = 0] = "Open", i[i.Closed = 1] = "Closed", i);

            function l() {
                return (0, r.useContext)(o)
            }

            function u({
                value: e,
                children: t
            }) {
                return r.createElement(o.Provider, {
                    value: e
                }, t)
            }
        },
        2984: function (e, t, n) {
            "use strict";

            function r(e, t, ...n) {
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(o, r), o
            }
            n.d(t, {
                E: function () {
                    return r
                }
            })
        },
        1021: function (e, t, n) {
            "use strict";

            function r(e) {
                "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch((e => setTimeout((() => {
                    throw e
                }))))
            }
            n.d(t, {
                Y: function () {
                    return r
                }
            })
        },
        2351: function (e, t, n) {
            "use strict";
            n.d(t, {
                AN: function () {
                    return l
                },
                l4: function () {
                    return u
                },
                sY: function () {
                    return c
                },
                yV: function () {
                    return d
                }
            });
            var r, o, i = n(7294),
                a = n(2984),
                l = ((o = l || {})[o.None = 0] = "None", o[o.RenderStrategy = 1] = "RenderStrategy", o[o.Static = 2] = "Static", o),
                u = ((r = u || {})[r.Unmount = 0] = "Unmount", r[r.Hidden = 1] = "Hidden", r);

            function c({
                ourProps: e,
                theirProps: t,
                slot: n,
                defaultTag: r,
                features: o,
                visible: i = !0,
                name: l
            }) {
                let u = f(t, e);
                if (i) return s(u, n, r, l);
                let c = null != o ? o : 0;
                if (2 & c) {
                    let {
                        static: e = !1,
                        ...t
                    } = u;
                    if (e) return s(t, n, r, l)
                }
                if (1 & c) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = u;
                    return (0, a.E)(e ? 0 : 1, {
                        0: () => null,
                        1: () => s({
                            ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, n, r, l)
                    })
                }
                return s(u, n, r, l)
            }

            function s(e, t = {}, n, r) {
                let {
                    as: o = n,
                    children: a,
                    refName: l = "ref",
                    ...u
                } = m(e, ["unmount", "static"]), c = void 0 !== e.ref ? {
                    [l]: e.ref
                } : {}, s = "function" == typeof a ? a(t) : a;
                u.className && "function" == typeof u.className && (u.className = u.className(t));
                let d = {};
                if (o === i.Fragment && Object.keys(p(u)).length > 0) {
                    if (!(0, i.isValidElement)(s) || Array.isArray(s) && s.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map((e => `  - ${e}`)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((e => `  - ${e}`)).join("\n")].join("\n"));
                    return (0, i.cloneElement)(s, Object.assign({}, f(s.props, p(m(u, ["ref"]))), d, c))
                }
                return (0, i.createElement)(o, Object.assign({}, m(u, ["ref"]), o !== i.Fragment && c, o !== i.Fragment && d), s)
            }

            function f(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    n = {};
                for (let r of e)
                    for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((e => [e, void 0]))));
                for (let r in n) Object.assign(t, {
                    [r](e, ...t) {
                        let o = n[r];
                        for (let n of o) {
                            if (e.defaultPrevented) return;
                            n(e, ...t)
                        }
                    }
                });
                return t
            }

            function d(e) {
                var t;
                return Object.assign((0, i.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function p(e) {
                let t = Object.assign({}, e);
                for (let n in t) void 0 === t[n] && delete t[n];
                return t
            }

            function m(e, t = []) {
                let n = Object.assign({}, e);
                for (let r of t) r in n && delete n[r];
                return n
            }
        }
    }
]);