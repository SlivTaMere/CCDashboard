
    var e;
    if (void 0 === window.jQuery || "1.11.1" !== window.jQuery.fn.jquery) {
        var t = document.createElement("script");
        t.setAttribute("type", "text/javascript"), t.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"), t.readyState ? t.onreadystatechange = function() {
            "complete" != this.readyState && "loaded" != this.readyState || a()
        } : t.onload = a, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(t)
    } else e = window.jQuery, n();

    function a() {
        e = window.jQuery.noConflict(!0), n()
    }

    function i(e) {
        var t = " " + document.cookie,
            a = " " + e + "=",
            i = null,
            n = 0,
            r = 0;
        return t.length > 0 && -1 != (n = t.indexOf(a)) && (n += a.length, -1 == (r = t.indexOf(";", n)) && (r = t.length), i = unescape(t.substring(n, r))), i
    }

    function n() {
        var t, a, n = (t = i("_locale") || void 0, a = !("object" != typeof Intl || !Intl || "function" != typeof Intl.NumberFormat), {
            toLocaleString: function(e, i) {
                var n = Number(e);
                if (isNaN(n)) return e;
                var r, o, c, l, s = i && i.minDecimalPlaces,
                    d = i && i.maxDecimalPlaces;
                return void 0 === s || void 0 === d ? (r = n, a ? r.toLocaleString(t) : r.toLocaleString()) : (o = n, c = s, l = d, a ? o.toLocaleString(t, {
                    minimumFractionDigits: c,
                    maximumFractionDigits: l
                }) : o.toFixed(l))
            }
        });

        function r(e, t) {
            var a = t;
            t = Math.pow(10, t);
            for (var i = ["K", "M", "B", "T"], r = i.length - 1; r >= 0; r--) {
                var o = Math.pow(10, 3 * (r + 1));
                if (o <= e) {
                    1e3 == (e = Math.round(e * t / o) / t) && r < i.length - 1 && (e = 1, r++), e = n.toLocaleString(Number(e), {
                        minDecimalPlaces: a,
                        maxDecimalPlaces: a
                    }), e += " " + i[r];
                    break
                }
            }
            return e
        }

        function o(e, t) {
            return "BTC" == t ? function(e) {
                e = e >= 1e3 ? n.toLocaleString(Math.round(e)) : e >= 1 ? n.toLocaleString(e, {
                    minDecimalPlaces: 8,
                    maxDecimalPlaces: 8
                }) : e < 1e-8 ? Number(e).toExponential(4) : n.toLocaleString(e, {
                    minDecimalPlaces: 8,
                    maxDecimalPlaces: 8
                });
                return e
            }(e) : function(e) {
                e = e >= 1 ? e >= 1e5 ? n.toLocaleString(Math.round(e)) : n.toLocaleString(e, {
                    minDecimalPlaces: 2,
                    maxDecimalPlaces: 2
                }) : e < 1e-6 ? Number(e).toExponential(2) : n.toLocaleString(e, {
                    minDecimalPlaces: 6,
                    maxDecimalPlaces: 6
                });
                return e
            }(e)
        }

        function c(e, t, a) {
            var i = t,
                n = {
                    btc: "à¸¿",
                    usd: "$",
                    eur: "â‚¬",
                    cny: "Â¥",
                    gbp: "Â£",
                    cad: "$",
                    rub: "<img src='/static/img/fiat/ruble.gif'/>",
                    hkd: "$",
                    jpy: "Â¥",
                    aud: "$",
                    brl: "R$",
                    inr: "â‚¹",
                    krw: "â‚©",
                    mxn: "$",
                    idr: "Rp",
                    chf: "Fr"
                };
            return e.toLowerCase() in n && (i = n[e.toLowerCase()] + i), a && (i = i + ' <span style="font-size:9px">' + e.toUpperCase() + "</span>"), i
        }

        function l(e, t, a, i, l, s, d, p, change24h, u, h, g, f, v, x, y, b, change7d) {
            var L = "#093";
            change24h < 0 && (L = "#d14836"), change24h = n.toLocaleString(change24h, {
                minDecimalPlaces: 2,
                maxDecimalPlaces: 2
            }),
			col7d = "#093";
            change7d < 0 && (col7d = "#d14836"), change7d = n.toLocaleString(change7d, {
                minDecimalPlaces: 2,
                maxDecimalPlaces: 2
            }),
			valTickerHTML = f ? "(" + a + ")" : "", valPrice = s ? o(s, i) : "?", valPercentHTML = change24h ? '<span style="color:' + L + '"><br/>(' + change24h + '% 24h)</span><span style="color:' + col7d + '"><br/>('+ change7d + "% 7d)" : "", valMarketCap = u ? r(u, 2) : "?", valVolume = h ? r(h, 2) : "?", d ? (mainLineHeight = 25, valPriceSecondary = p ? o(p, d) : "?", secondaryHTML = '<br><span style="font-size: 12px; color:gray">' + valPriceSecondary + " " + d + " </span>") : (mainLineHeight = 30, secondaryHTML = "");
            var w = "utm_medium=widget&utm_campaign=cmcwidget&utm_source=" + location.hostname + "&utm_content=" + e,
                k = '<div style="border:2px solid #E4E6EB;border-radius: 10px;font-family: \'Helvetica Neue\',Helvetica,Arial,sans-serif;min-width:285px;">    <div>        <div style="float:right;width:67%;border: 0px solid #000;text-align:left;padding:5px 0px;line-height:' + mainLineHeight + 'px;">            <span style="font-size: 18px;"><a href="http://coinmarketcap.com/currencies/' + e + "/?" + w + '" target="_blank">' + t + " " + valTickerHTML + '</a></span> <br>            <span style="font-size: 16px;">' + valPrice + " " + i + " " + valPercentHTML + "</span></span>            " + secondaryHTML + '        </div>        <div style="text-align:center;padding:5px 0px;width:33%;"><img src="https://files.coinmarketcap.com/static/img/coins/64x64/' + e + '.png"></div>    </div>';
            return k += function(e, t, a, i, n, r, o, l) {
                var s = 0,
                    d = 0,
                    p = "",
                    m = "",
                    u = "";
                if (e && s++, t && s++, a && s++, 0 == s) return "";
                1 == s && (d = 100), 2 == s && (d = 49.8), 3 == s && (d = 33), e && (borderWidth = 0, (a || t) && (borderWidth = 1), p = '                    <div style="text-align:center;float:left;width:' + d + "%;font-size:12px;padding:12px 0;border-right:" + borderWidth + 'px solid #E4E6EB;line-height:1.25em;">                        RANK                        <br><br>                        <span style="font-size: 17px; ">' + r + "</span>                    </div>");
                a && (borderWidth = 0, t && (borderWidth = 1), m = '                    <div style="text-align:center;float:left;width:' + d + "%;font-size:12px;padding:12px 0 16px 0;border-right:" + borderWidth + 'px solid #E4E6EB;line-height:1.25em;">                        MARKET CAP                        <br><br>                        <span style="font-size: 14px; ">' + c(n, o, i) + "</span>                    </div>");
                t && (u = '                    <div style="text-align:center;float:left;width:' + d + '%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;">                        VOLUME (24H)                        <br><br>                        <span style="font-size: 14px; ">' + c(n, l, i) + "</span>                    </div>");
                return detailedHTML = '<div style="border-top: 1px solid #E4E6EB;clear:both;">' + p + m + u + "</div>", detailedHTML
            }(v, x, y, b, l, g, valMarketCap, valVolume), k += '    <div style="text-align:center;clear:both;font-size:10px;font-style:italic;padding:0px 0;"></div></div>'
        }
        e(document).ready(function(e) {
            e(".coinmarketcap-currency-widget").each(function() {
                var t = e(this).attr("data-currency"),
                    a = e(this).attr("data-base").toUpperCase(),
                    i = e(this).attr("data-secondary");
                i = "BTC" == (i = i ? i.toUpperCase() : null) || "USD" == i ? i : null;
                var n = e(this).attr("data-stats");
                n = (n = n ? n.toUpperCase() : null) == a ? a : "USD";
                var r = !1 !== e(this).data("ticker"),
                    o = !1 !== e(this).data("rank"),
                    c = !1 !== e(this).data("marketcap"),
                    s = !1 !== e(this).data("volume"),
                    d = !1 !== e(this).data("statsticker"),
                    p = this;
                e.get({
                    url: "https://widgets.coinmarketcap.com/v1/ticker/" + t + "/?ref=widget&convert=" + a,
                    success: function(m) {
                        var u = "price_" + a.toLowerCase(),
                            h = i ? "price_" + i.toLowerCase() : null,
                            g = "market_cap_" + n.toLowerCase(),
                            f = "24h_volume_" + n.toLowerCase(),
                            v = parseFloat(m[0][u]),
                            x = h ? parseFloat(m[0][h]) : null,
                            y = parseInt(m[0][g]),
                            b = parseInt(m[0][f]),
                            L = m[0].name,
                            w = m[0].symbol,
                            change24h = Number(m[0].percent_change_24h),
                            change7d = Number(m[0].percent_change_7d),
                            E = m[0].rank,
                            P = l(t, L, w, a, n, v, i, x, change24h, y, b, E, r, o, s, c, d, change7d);
                        e(p).html(P), e(p).find("a").css({
                            "text-decoration": "none",
                            color: "#428bca"
                        })
                    }
                })
            })
        })
    }
	
	window.setInterval(function(){n()}, 60000);
