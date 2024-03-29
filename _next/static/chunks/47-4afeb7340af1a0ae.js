(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [47], {
        29047: function(e, i, s) {
            "use strict";
            s.d(i, {
                $: function() {
                    return Footer
                }
            });
            var a = s(85893),
                n = s(51259),
                r = s.n(n),
                t = s(25675),
                l = s.n(t),
                o = s(41664),
                c = s.n(o),
                d = s(32553),
                m = {
                    src: "/_next/static/media/logo-horizontalwhite.ecf69e9c.svg",
                    height: 37,
                    width: 112,
                    blurWidth: 0,
                    blurHeight: 0
                },
                x = s(40464),
                p = s(65428),
                h = s(19294),
                b = s(28087),
                f = s.n(b),
                g = s(67294),
                y = s(37245),
                u = s(78908);
            let FooterSignup = class FooterSignup extends g.Component {
                render() {
                    let {
                        email: e,
                        success: i,
                        error: s
                    } = this.state;
                    return (0, a.jsxs)("form", {
                        onSubmit: this.handleSubmit,
                        className: "jsx-865096dc357b0139",
                        children: [i && (0, a.jsx)("div", {
                            className: "jsx-865096dc357b0139 success",
                            children: (0, a.jsx)(u.x, {
                                color: "white",
                                style: {
                                    fontSize: "16px"
                                },
                                children: p.u2
                            })
                        }), s && (0, a.jsx)("div", {
                            className: "jsx-865096dc357b0139 success",
                            children: (0, a.jsx)(u.x, {
                                color: "white",
                                style: {
                                    fontSize: "16px"
                                },
                                children: p.y9
                            })
                        }), (0, a.jsxs)("div", {
                            className: "jsx-865096dc357b0139 flexwrapper",
                            children: [(0, a.jsx)("h2", {
                                className: "jsx-865096dc357b0139",
                                children: "Get Ecosystem Updates to Your Inbox"
                            }), (0, a.jsxs)("div", {
                                className: "jsx-865096dc357b0139 formdiv",
                                children: [(0, a.jsx)("input", {
                                    type: "email",
                                    placeholder: p.Uv,
                                    name: "email",
                                    value: e,
                                    onChange: this.updateEmail,
                                    required: !0,
                                    className: "jsx-865096dc357b0139 email"
                                }), (0, a.jsx)("input", {
                                    type: "submit",
                                    name: "submit",
                                    value: p.Zf,
                                    className: "jsx-865096dc357b0139 submit"
                                })]
                            })]
                        }), (0, a.jsx)(r(), {
                            id: "865096dc357b0139",
                            children: 'form.jsx-865096dc357b0139{width:100%}.flexwrapper.jsx-865096dc357b0139{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:no-wrap;-ms-flex-wrap:no-wrap;flex-wrap:no-wrap;width:100%}.success.jsx-865096dc357b0139{text-align:left}h2.jsx-865096dc357b0139{color:white;font-size:28px;margin:0;margin-bottom:20px;margin-top:20px}.formdiv.jsx-865096dc357b0139{min-width:510px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.email.jsx-865096dc357b0139{width:100%;max-width:300px;display:inline-block;background:rgba(255,255,255,.1);height:40px;font-size:17px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;border:none;color:white;padding-left:10px;font-family:"Inter",helvetica,arial,sans-serif;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input.jsx-865096dc357b0139::-webkit-input-placeholder{color:#616161}.submit.jsx-865096dc357b0139{display:inline-block;height:40px;background:#474dff;font-family:"Inter",helvetica,arial,sans-serif;color:#fff;text-decoration:none;font-size:15px;width:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;border:none;margin-left:10px;padding-left:20px;padding-right:20px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;opacity:1;-webkit-transition:all.2s ease;-moz-transition:all.2s ease;-o-transition:all.2s ease;transition:all.2s ease;position:relative;font-weight:500;-webkit-appearance:none}.submit.jsx-865096dc357b0139:hover{cursor:pointer;opacity:1;-webkit-transition:all.2s ease;-moz-transition:all.2s ease;-o-transition:all.2s ease;transition:all.2s ease;background:#3b41e1}@media only screen and (max-width:991px){.formdiv.jsx-865096dc357b0139{min-width:0;width:100%}h2.jsx-865096dc357b0139{margin-bottom:16px}input.jsx-865096dc357b0139{width:100%}.submit.jsx-865096dc357b0139,.email.jsx-865096dc357b0139{max-width:none;margin:0;margin-bottom:10px;margin-left:6px}@media only screen and (max-width:767px){form.jsx-865096dc357b0139{margin-top:0px;text-align:center}.formdiv.jsx-865096dc357b0139{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.flexwrapper.jsx-865096dc357b0139{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.submit.jsx-865096dc357b0139,.email.jsx-865096dc357b0139{display:block;max-width:none;margin:0;margin-top:10px;margin-left:3px}h2.jsx-865096dc357b0139{margin-bottom:20px;font-size:28px;line-height:1.1}}@media only screen and (max-width:465px){.submit.jsx-865096dc357b0139,.email.jsx-865096dc357b0139{display:block;max-width:none;margin:0;width:100%;margin-top:10px}}}'
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        email: "",
                        success: !1,
                        error: !1
                    }, this.updateEmail = e => {
                        this.setState({
                            email: e.target.value
                        })
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            email: i
                        } = this.state;
                        (0, y.Qx)(i).then(() => this.setState({
                            email: "",
                            success: !0,
                            error: !1
                        })).catch(() => this.setState({
                            success: !1,
                            error: !0
                        }))
                    }
                }
            };
            let Footer = () => (0, a.jsxs)("footer", {
                className: r().dynamic([
                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                ]),
                children: [(0, a.jsxs)(d.W2, {
                    style: {
                        paddingLeft: 15,
                        paddingRight: 15
                    },
                    children: [(0, a.jsx)(d.X2, {
                        children: (0, a.jsx)(d.JX, {
                            sm: 12,
                            md: 12,
                            lg: 12,
                            id: "center",
                            children: (0, a.jsx)(FooterSignup, {})
                        })
                    }), (0, a.jsx)("hr", {
                        className: r().dynamic([
                            ["940e02122f37aec3", [h.O.green, h.O.purple]]
                        ])
                    }), (0, a.jsxs)(d.X2, {
                        align: "normal",
                        children: [(0, a.jsxs)(d.JX, {
                            xs: 6,
                            sm: 6,
                            md: 3,
                            lg: 3,
                            children: [(0, a.jsx)("h5", {
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]),
                                children: "Learn"
                            }), (0, a.jsx)(c(), {
                                className: f().link,
                                href: "/",
                                children: p.LE
                            }), (0, a.jsx)(c(), {
                                className: f().link,
                                href: "/ecosystem",
                                children: x.uZ
                            }), (0, a.jsx)(c(), {
                                className: f().link,
                                href: "/solutions",
                                children: "Solutions"
                            }), (0, a.jsx)("a", {
                                href: "https://blog.helium.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " " + (f().link || ""),
                                children: p.tQ
                            }), (0, a.jsx)("a", {
                                href: "http://whitepaper.helium.com",
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " " + (f().link || ""),
                                children: p.JE
                            })]
                        }), (0, a.jsxs)(d.JX, {
                            xs: 6,
                            sm: 6,
                            md: 3,
                            lg: 3,
                            children: [(0, a.jsx)("h5", {
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]),
                                children: p.o0
                            }), (0, a.jsx)(c(), {
                                className: f().link,
                                href: "/mine",
                                children: p.Ot
                            }), (0, a.jsx)(c(), {
                                className: f().link,
                                href: "/enterprise",
                                children: p.D$
                            }), (0, a.jsx)(c(), {
                                className: f().link,
                                href: "/roam",
                                children: "Roam"
                            }), (0, a.jsx)(c(), {
                                className: f().link,
                                href: "/switch",
                                children: "Switch from 3G"
                            }), (0, a.jsx)(c(), {
                                className: f().link,
                                href: "/token",
                                children: "HNT and Data Credits"
                            }), (0, a.jsx)("a", {
                                href: "https://docs.helium.com",
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " " + (f().link || ""),
                                children: p.f0
                            }), (0, a.jsx)(c(), {
                                className: f().link,
                                href: "/5G",
                                children: "Helium Mobile"
                            })]
                        }), (0, a.jsxs)(d.JX, {
                            xs: 6,
                            sm: 6,
                            md: 3,
                            lg: 3,
                            children: [(0, a.jsx)("h5", {
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " margintopwhensm",
                                children: p.xs
                            }), (0, a.jsx)("a", {
                                href: "https://discord.gg/helium",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " " + (f().link || ""),
                                children: "Discord"
                            }), (0, a.jsx)("a", {
                                href: "https://twitter.com/helium",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " " + (f().link || ""),
                                children: "Twitter"
                            }), (0, a.jsx)("a", {
                                href: "https://www.facebook.com/heliumsystems",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " " + (f().link || ""),
                                children: "Facebook"
                            }), (0, a.jsx)("a", {
                                href: "https://www.linkedin.com/company/heliuminc",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " " + (f().link || ""),
                                children: "LinkedIn"
                            }), (0, a.jsx)("a", {
                                href: "https://github.com/helium",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " " + (f().link || ""),
                                children: "Github"
                            }), (0, a.jsx)("a", {
                                href: "https://www.youtube.com/c/HeliumInc",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " " + (f().link || ""),
                                children: "YouTube"
                            }), (0, a.jsx)("a", {
                                href: "https://www.reddit.com/r/HeliumNetwork",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " " + (f().link || ""),
                                children: "Reddit"
                            }), (0, a.jsx)("a", {
                                href: "https://www.instagram.com/helium/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " " + (f().link || ""),
                                children: "Instagram"
                            })]
                        }), (0, a.jsxs)(d.JX, {
                            xs: 6,
                            md: 3,
                            lg: 3,
                            children: [(0, a.jsx)("h5", {
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " margintopwhensm",
                                children: p.Q3
                            }), (0, a.jsx)("a", {
                                href: "mailto:hello@helium.foundation",
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " " + (f().link || ""),
                                children: "hello@helium.foundation"
                            }), (0, a.jsx)("a", {
                                href: "mailto:press@helium.foundation",
                                className: r().dynamic([
                                    ["940e02122f37aec3", [h.O.green, h.O.purple]]
                                ]) + " " + (f().link || ""),
                                children: "press@helium.foundation"
                            })]
                        })]
                    }), (0, a.jsx)("hr", {
                        className: r().dynamic([
                            ["940e02122f37aec3", [h.O.green, h.O.purple]]
                        ])
                    }), (0, a.jsx)("div", {
                        className: r().dynamic([
                            ["940e02122f37aec3", [h.O.green, h.O.purple]]
                        ]) + " flexbox",
                        children: (0, a.jsx)("div", {
                            className: r().dynamic([
                                ["940e02122f37aec3", [h.O.green, h.O.purple]]
                            ]) + " footerlogo",
                            children: (0, a.jsx)(l(), {
                                alt: "Helium Logo",
                                className: f().containImg,
                                src: m
                            })
                        })
                    })]
                }), (0, a.jsx)("div", {
                    className: r().dynamic([
                        ["940e02122f37aec3", [h.O.green, h.O.purple]]
                    ]) + " footerbar",
                    children: (0, a.jsx)(d.W2, {
                        children: (0, a.jsx)(d.X2, {
                            children: (0, a.jsxs)(d.JX, {
                                lg: 12,
                                children: [(0, a.jsx)(c(), {
                                    className: f().link,
                                    href: "/privacy",
                                    children: p.vS
                                }), (0, a.jsx)(c(), {
                                    className: f().link,
                                    href: "/website-terms",
                                    children: p.DA
                                })]
                            })
                        })
                    })
                }), (0, a.jsx)(r(), {
                    id: "940e02122f37aec3",
                    dynamic: [h.O.green, h.O.purple],
                    children: "footer.__jsx-style-dynamic-selector{background:#000;padding-top:150px;overflow:hidden;position:relative;z-index:2}.flexbox.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.appstorelinks.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}img.applink.__jsx-style-dynamic-selector{margin:5px;-webkit-transition:all.2s ease;-moz-transition:all.2s ease;-o-transition:all.2s ease;transition:all.2s ease;position:relative;top:0}img.applink.__jsx-style-dynamic-selector:hover{-webkit-transition:all.2s ease;-moz-transition:all.2s ease;-o-transition:all.2s ease;transition:all.2s ease;top:4px}.footerlogo.__jsx-style-dynamic-selector{margin-top:0px;width:170px}h5.__jsx-style-dynamic-selector{color:white;font-weight:500;font-size:14px;margin:10px 0;text-transform:uppercase;letter-spacing:.5px;font-weight:600}.link.__jsx-style-dynamic-selector{display:block;text-decoration:none;color:#aaa;font-weight:300;font-size:17px;line-height:26px}hr.__jsx-style-dynamic-selector{margin:50px 0;border:none;border-top:1px solid#858585;opacity:.5}.link.__jsx-style-dynamic-selector:hover{color:white}.footerbar.__jsx-style-dynamic-selector{background:#141617;padding-top:40px;padding-bottom:40px;margin-top:40px;color:rgba(0,0,0,.5)}.footerbar.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:inline;color:white;font-weight:500;margin-right:20px;font-size:14px}.footerbar.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:".concat(h.O.green, "}.footerbar.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:").concat(h.O.purple, ";display:inline-block}@media only screen and (max-width:768px){.margintopwhensm.__jsx-style-dynamic-selector{margin-top:40px}.footerbar.__jsx-style-dynamic-selector{margin-top:40px}img.applink.__jsx-style-dynamic-selector{height:50px}.flexbox.__jsx-style-dynamic-selector{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.appstorelinks.__jsx-style-dynamic-selector{margin-top:50px}h5.__jsx-style-dynamic-selector{margin-top:40px}.footerlogo.__jsx-style-dynamic-selector{margin:0 auto;float:none;width:100%;max-width:200px;margin-top:30px}.footerbar.__jsx-style-dynamic-selector .link.__jsx-style-dynamic-selector,p.__jsx-style-dynamic-selector{display:block;margin-top:6px}}@media only screen and (max-width:465px){.link.__jsx-style-dynamic-selector{font-size:14px}}")
                })]
            })
        },
        28087: function(e) {
            e.exports = {
                link: "Footer_link__TBOP7",
                containImg: "Footer_containImg__aRm0K"
            }
        },
        40464: function(e) {
            "use strict";
            e.exports = JSON.parse('{"uZ":"Ecosystem","cJ":"Helium uses cookies on this site to enhance your user experience, understand site usage, and assist in our marketing efforts.","A4":"I Agree","Ps":"Submit"}')
        }
    }
]);