! function() {
    var e;
	
    if (void 0 === window.jQuery || "1.11.1" !== window.jQuery.fn.jquery) {
        var t = document.createElement("script");
        t.setAttribute("type", "text/javascript"), t.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"), t.readyState ? t.onreadystatechange = function() {
            "complete" != this.readyState && "loaded" != this.readyState || a()
        } : t.onload = a, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(t)
    } else e = window.jQuery, r();

    function a() {
        e = window.jQuery.noConflict(!0), r()
    }

    function i(e) {
        var t = " " + document.cookie,
            a = " " + e + "=",
            i = null,
            r = 0,
            n = 0;
        return t.length > 0 && -1 != (r = t.indexOf(a)) && (r += a.length, -1 == (n = t.indexOf(";", r)) && (n = t.length), i = unescape(t.substring(r, n))), i
    }

    function r() {
        var t, a, r = (t = i("_locale") || void 0, a = !("object" != typeof Intl || !Intl || "function" != typeof Intl.NumberFormat), {
            toLocaleString: function(e, i) {
                var r = Number(e);
                if (isNaN(r)) return e;
                var n, o = i && i.minDecimalPlaces,
                    c = i && i.maxDecimalPlaces;
                return void 0 === o || void 0 === c ? (n = r, a ? n.toLocaleString(t) : n.toLocaleString()) : function(e, i, r) {
                    return a ? e.toLocaleString(t, {
                        minimumFractionDigits: i,
                        maximumFractionDigits: r
                    }) : e.toFixed(r)
                }(r, o, c)
            }
        });

        function n(e, t) {
            var a = t;
            t = Math.pow(10, t);
            for (var i = ["K", "M", "B", "T"], n = i.length - 1; n >= 0; n--) {
                var o = Math.pow(10, 3 * (n + 1));
                if (o <= e) {
                    1e3 == (e = Math.round(e * t / o) / t) && n < i.length - 1 && (e = 1, n++), e = r.toLocaleString(Number(e), {
                        minDecimalPlaces: a,
                        maxDecimalPlaces: a
                    }), e += " " + i[n];
                    break
                }
            }
            return e
        }

        function o(e, t) {
            return "BTC" == t ? function(e) {
                e = e >= 1e3 ? r.toLocaleString(Math.round(e)) : e >= 1 ? r.toLocaleString(e, {
                    minDecimalPlaces: 8,
                    maxDecimalPlaces: 8
                }) : e < 1e-8 ? Number(e).toExponential(4) : r.toLocaleString(e, {
                    minDecimalPlaces: 8,
                    maxDecimalPlaces: 8
                });
                return e
            }(e) : function(e) {
                e = e >= 1 ? e >= 1e5 ? r.toLocaleString(Math.round(e)) : r.toLocaleString(e, {
                    minDecimalPlaces: 2,
                    maxDecimalPlaces: 2
                }) : e < 1e-6 ? Number(e).toExponential(2) : r.toLocaleString(e, {
                    minDecimalPlaces: 6,
                    maxDecimalPlaces: 6
                });
                return e
            }(e)
        }

        function c(e, t, a) {
            var i = t,
                r = {
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
            return e.toLowerCase() in r && (i = r[e.toLowerCase()] + i), a && (i = i + ' <span style="font-size:9px">' + e.toUpperCase() + "</span>"), i
        }

        function l(e, t, a, i, l, s, d, p, change24h, u, h, g, v, f, x, y, b, w, L, change7d) {
            var k = w ? "https://s2.coinmarketcap.com/static/img/coins/64x64/" + w + ".png" : "https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/" + e + ".png",
                C = "#009e73";
            change24h < 0 && (C = "#d94040"), change24h = r.toLocaleString(change24h, {
                minDecimalPlaces: 2,
                maxDecimalPlaces: 2
            }), 
			C7d = "#009e73";
			change7d < 0 && (C7d = "#d94040"), change7d = r.toLocaleString(change7d, {
                minDecimalPlaces: 2,
                maxDecimalPlaces: 2
            }),
			valTickerHTML = v ? "(" + a + ")" : "", valPrice = s ? o(s, i) : "?", valPercentHTML = change24h ? '<br/><span style="color:' + C + '">(' + change24h + '% 24h)</span><br/><span style="color:' + C7d + '">(' + change7d + '% 7d)' : "", valMarketCap = u ? n(u, 2) : "?", valVolume = h ? n(h, 2) : "?", poweredBy = "", d ? (mainLineHeight = 25, valPriceSecondary = p ? o(p, d) : "?", secondaryHTML = '<br><span style="font-size: 12px; color: rgba(200, 200, 200, 1)">' + valPriceSecondary + " " + d + " </span>") : (mainLineHeight = 30, secondaryHTML = "");
            var P = "utm_medium=widget&utm_campaign=cmcwidget&utm_source=" + location.hostname + "&utm_content=" + e,
                M = '<div style="border:2px solid #e1e5ea;border-radius: 10px;font-family: \'Helvetica Neue\',Helvetica,Arial,sans-serif;min-width:285px;">    <div>        <div style="float:right;width:67%;border: none;text-align:left;padding:5px 0px;line-height:' + mainLineHeight + 'px;">            <span style="font-size: 18px;"><a href="https://coinmarketcap.com/currencies/' + e + "/?" + P + '" target="_blank">' + t + " " + valTickerHTML + '</a></span> <br>            <span style="font-size: 16px;">' + valPrice + " " + i + " " + valPercentHTML + "</span></span>            " + secondaryHTML + '        </div>        <div style="text-align:center;padding:5px 0px;width:33%;"><img src="' + k + '"></div>    </div>';
            return M += function(e, t, a, i, r, n, o, l, s) {
                var d = 0,
                    p = 0,
                    m = "",
                    u = "",
                    h = "",
                    g = "zh" == s ? "äº¤æ˜“é‡ï¼ˆ24å°æ—¶ï¼‰" : "VOLUME";
                if (e && d++, t && d++, a && d++, 0 == d) return "";
                1 == d && (p = 100), 2 == d && (p = 49.8), 3 == d && (p = 33), e && (borderWidth = 0, (a || t) && (borderWidth = 1), m = '                    <div style="text-align:center;float:left;width:' + p + "%;font-size:12px;padding:12px 0;border-right:" + borderWidth + 'px solid #e1e5ea;line-height:1.25em;">                        ' + ("zh" == s ? "æŽ’å" : "RANK") + '                        <br><br>                        <span style="font-size: 17px; ">' + n + "</span>                    </div>");
                a && (borderWidth = 0, t && (borderWidth = 1), u = '                    <div style="text-align:center;float:left;width:' + p + "%;font-size:12px;padding:12px 0 16px 0;border-right:" + borderWidth + 'px solid #e1e5ea;line-height:1.25em;">                        ' + ("zh" == s ? "å¸‚å€¼" : "MARKET CAP") + '                        <br><br>                        <span style="font-size: 14px; ">' + c(r, o, i) + "</span>                    </div>");
                t && (h = '                    <div style="text-align:center;float:left;width:' + p + '%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;">                        ' + g + '                        <br><br>                        <span style="font-size: 14px; ">' + c(r, l, i) + "</span>                    </div>");
                return detailedHTML = '<div style="border-top: 1px solid #e1e5ea;clear:both;">' + m + u + h + "</div>", detailedHTML
            }(f, x, y, b, l, g, valMarketCap, valVolume, L), M += '    <div style="border-top: 1px solid #e1e5ea;text-align:center;clear:both;font-size:10px;font-style:italic;padding:5px 0;">  </div></div>'
        }
		
        e(document).ready(function(e) {
            e(".coinmarketcap-currency-widget").each(function() {
                var t = e(this).attr("data-currency"),
                    currencyid = e(this).data("currencyid"),
                    i = e(this).attr("data-base").toUpperCase(),
                    r = e(this).attr("data-secondary"),
                    n = e(this).data("language");
                n = n || "en-us", r = "BTC" == (r = r ? r.toUpperCase() : null) || "USD" == r ? r : null;
                var o = e(this).attr("data-stats");
                o = (o = o ? o.toUpperCase() : null) == i ? i : "USD";
                var c, s = !1 !== e(this).data("ticker"),
                    d = !1 !== e(this).data("rank"),
                    p = !1 !== e(this).data("marketcap"),
                    m = !1 !== e(this).data("volume"),
                    u = !1 !== e(this).data("statsticker"),
                    h = this;
                c = currencyid ? "https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=" + currencyid + "&convert=BTC,USD," + i : "https://widgets.coinmarketcap.com/v1/ticker/" + t + "/?ref=widget&convert=" + i, e.get({
                    url: c,
                    success: function(c) {
                        if (c = c.length ? c[0] : c.data, t || (t = c[currencyid].name.toLowerCase()), currencyid) var g = c[currencyid],
                            v = parseFloat(g.quote[i].price),
                            f = r && parseFloat(g.quote[r].price),
                            x = parseInt(g.quote[i].market_cap),
                            y = parseInt(g.quote[i].volume_24h),
                            change24h = parseFloat(g.quote[i].percent_change_24h),
                            change7d = parseFloat(g.quote[i].percent_change_7d),
                            w = c[currencyid].name,
                            L = c[currencyid].symbol,
                            k = c[currencyid].cmc_rank;
                        else {
                            var C = "price_" + i.toLowerCase(),
                                P = r ? "price_" + r.toLowerCase() : null,
                                M = "market_cap_" + o.toLowerCase(),
                                _ = "24h_volume_" + o.toLowerCase();
                            v = parseFloat(c[C]), f = P ? parseFloat(c[P]) : null, x = parseInt(c[M]), y = parseInt(c[_]), change24h = Number(c.percent_change_24h), w = c.name, L = c.symbol, k = c.rank
                        }
                        var S = l(t, w, L, i, o, v, r, f, change24h, x, y, k, s, d, m, p, u, currencyid, n, change7d);
                        e(h).html(S), e(h).find("a").css({
                            "text-decoration": "none",
                            color: "#1070e0"
                        })
                    }
                })
            })
        })
    }
	
	window.setInterval(function(){r()}, 60000);
}();

