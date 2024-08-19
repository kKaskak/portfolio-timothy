/*! For license information please see main.8d4d999c.js.LICENSE.txt */
(() => {
	var e = {
			597: function (e) {
				e.exports = (function () {
					function e() {
						return (
							(e =
								Object.assign ||
								function (e) {
									for (var t = 1; t < arguments.length; t++) {
										var n = arguments[t];
										for (var r in n)
											Object.prototype.hasOwnProperty.call(
												n,
												r,
											) && (e[r] = n[r]);
									}
									return e;
								}),
							e.apply(this, arguments)
						);
					}
					function t(e, t) {
						if (e) {
							if ('string' === typeof e) return n(e, t);
							var r = Object.prototype.toString
								.call(e)
								.slice(8, -1);
							return (
								'Object' === r &&
									e.constructor &&
									(r = e.constructor.name),
								'Map' === r || 'Set' === r
									? Array.from(e)
									: 'Arguments' === r ||
										  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
												r,
										  )
										? n(e, t)
										: void 0
							);
						}
					}
					function n(e, t) {
						(null == t || t > e.length) && (t = e.length);
						for (var n = 0, r = new Array(t); n < t; n++)
							r[n] = e[n];
						return r;
					}
					function r(e, n) {
						var r =
							('undefined' !== typeof Symbol &&
								e[Symbol.iterator]) ||
							e['@@iterator'];
						if (r) return (r = r.call(e)).next.bind(r);
						if (
							Array.isArray(e) ||
							(r = t(e)) ||
							(n && e && 'number' === typeof e.length)
						) {
							r && (e = r);
							var i = 0;
							return function () {
								return i >= e.length
									? { done: !0 }
									: { done: !1, value: e[i++] };
							};
						}
						throw new TypeError(
							'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
						);
					}
					var i = 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg';
					function o(e) {
						var t = e.split('-'),
							n = t[1],
							r = t[2],
							o = t[3];
						if (!n || !r || !o)
							throw new Error(
								"Malformed asset _ref '" +
									e +
									'\'. Expected an id like "' +
									i +
									'".',
							);
						var a = r.split('x'),
							s = +a[0],
							l = +a[1];
						if (!isFinite(s) || !isFinite(l))
							throw new Error(
								"Malformed asset _ref '" +
									e +
									'\'. Expected an id like "' +
									i +
									'".',
							);
						return { id: n, width: s, height: l, format: o };
					}
					var a = function (e) {
							return !!e && 'string' === typeof e._ref;
						},
						s = function (e) {
							return !!e && 'string' === typeof e._id;
						},
						l = function (e) {
							var t = e;
							return (
								!(!t || !t.asset) &&
								'string' === typeof t.asset.url
							);
						};
					function u(t) {
						if (!t) return null;
						var n;
						if ('string' === typeof t && c(t))
							n = { asset: { _ref: d(t) } };
						else if ('string' === typeof t)
							n = { asset: { _ref: t } };
						else if (a(t)) n = { asset: t };
						else if (s(t)) n = { asset: { _ref: t._id || '' } };
						else if (l(t)) n = { asset: { _ref: d(t.asset.url) } };
						else {
							if ('object' !== typeof t.asset) return null;
							n = e({}, t);
						}
						var r = t;
						return (
							r.crop && (n.crop = r.crop),
							r.hotspot && (n.hotspot = r.hotspot),
							f(n)
						);
					}
					function c(e) {
						return /^https?:\/\//.test('' + e);
					}
					function d(e) {
						return ('image-' + e.split('/').slice(-1)[0]).replace(
							/\.([a-z]+)$/,
							'-$1',
						);
					}
					function f(t) {
						if (t.crop && t.hotspot) return t;
						var n = e({}, t);
						return (
							n.crop ||
								(n.crop = {
									left: 0,
									top: 0,
									bottom: 0,
									right: 0,
								}),
							n.hotspot ||
								(n.hotspot = {
									x: 0.5,
									y: 0.5,
									height: 1,
									width: 1,
								}),
							n
						);
					}
					var h = [
						['width', 'w'],
						['height', 'h'],
						['format', 'fm'],
						['download', 'dl'],
						['blur', 'blur'],
						['sharpen', 'sharp'],
						['invert', 'invert'],
						['orientation', 'or'],
						['minHeight', 'min-h'],
						['maxHeight', 'max-h'],
						['minWidth', 'min-w'],
						['maxWidth', 'max-w'],
						['quality', 'q'],
						['fit', 'fit'],
						['crop', 'crop'],
						['saturation', 'sat'],
						['auto', 'auto'],
						['dpr', 'dpr'],
						['pad', 'pad'],
					];
					function p(t) {
						var n = e({}, t || {}),
							r = n.source;
						delete n.source;
						var i = u(r);
						if (!i)
							throw new Error(
								'Unable to resolve image URL from source (' +
									JSON.stringify(r) +
									')',
							);
						var a = o(i.asset._ref || i.asset._id || ''),
							s = Math.round(i.crop.left * a.width),
							l = Math.round(i.crop.top * a.height),
							c = {
								left: s,
								top: l,
								width: Math.round(
									a.width - i.crop.right * a.width - s,
								),
								height: Math.round(
									a.height - i.crop.bottom * a.height - l,
								),
							},
							d = (i.hotspot.height * a.height) / 2,
							f = (i.hotspot.width * a.width) / 2,
							h = i.hotspot.x * a.width,
							p = i.hotspot.y * a.height,
							v = {
								left: h - f,
								top: p - d,
								right: h + f,
								bottom: p + d,
							};
						return (
							n.rect ||
								n.focalPoint ||
								n.ignoreImageParams ||
								n.crop ||
								(n = e({}, n, g({ crop: c, hotspot: v }, n))),
							m(e({}, n, { asset: a }))
						);
					}
					function m(e) {
						var t = (e.baseUrl || 'https://cdn.sanity.io').replace(
								/\/+$/,
								'',
							),
							n =
								e.asset.id +
								'-' +
								e.asset.width +
								'x' +
								e.asset.height +
								'.' +
								e.asset.format,
							r =
								t +
								'/images/' +
								e.projectId +
								'/' +
								e.dataset +
								'/' +
								n,
							i = [];
						if (e.rect) {
							var o = e.rect,
								a = o.left,
								s = o.top,
								l = o.width,
								u = o.height;
							(0 !== a ||
								0 !== s ||
								u !== e.asset.height ||
								l !== e.asset.width) &&
								i.push(
									'rect=' + a + ',' + s + ',' + l + ',' + u,
								);
						}
						e.bg && i.push('bg=' + e.bg),
							e.focalPoint &&
								(i.push('fp-x=' + e.focalPoint.x),
								i.push('fp-y=' + e.focalPoint.y));
						var c = [e.flipHorizontal && 'h', e.flipVertical && 'v']
							.filter(Boolean)
							.join('');
						return (
							c && i.push('flip=' + c),
							h.forEach(function (t) {
								var n = t[0],
									r = t[1];
								'undefined' !== typeof e[n]
									? i.push(r + '=' + encodeURIComponent(e[n]))
									: 'undefined' !== typeof e[r] &&
										i.push(
											r + '=' + encodeURIComponent(e[r]),
										);
							}),
							0 === i.length ? r : r + '?' + i.join('&')
						);
					}
					function g(e, t) {
						var n,
							r = t.width,
							i = t.height;
						if (!r || !i)
							return { width: r, height: i, rect: e.crop };
						var o = e.crop,
							a = e.hotspot,
							s = r / i;
						if (o.width / o.height > s) {
							var l = Math.round(o.height),
								u = Math.round(l * s),
								c = Math.max(0, Math.round(o.top)),
								d = Math.round((a.right - a.left) / 2 + a.left),
								f = Math.max(0, Math.round(d - u / 2));
							f < o.left
								? (f = o.left)
								: f + u > o.left + o.width &&
									(f = o.left + o.width - u),
								(n = { left: f, top: c, width: u, height: l });
						} else {
							var h = o.width,
								p = Math.round(h / s),
								m = Math.max(0, Math.round(o.left)),
								g = Math.round((a.bottom - a.top) / 2 + a.top),
								v = Math.max(0, Math.round(g - p / 2));
							v < o.top
								? (v = o.top)
								: v + p > o.top + o.height &&
									(v = o.top + o.height - p),
								(n = { left: m, top: v, width: h, height: p });
						}
						return { width: r, height: i, rect: n };
					}
					var v = [
							'clip',
							'crop',
							'fill',
							'fillmax',
							'max',
							'scale',
							'min',
						],
						A = [
							'top',
							'bottom',
							'left',
							'right',
							'center',
							'focalpoint',
							'entropy',
						],
						y = ['format'];
					function w(e) {
						return (
							!(!e || !('config' in e)) &&
							'function' === typeof e.config
						);
					}
					function b(e) {
						return (
							!(!e || !('clientConfig' in e)) &&
							'object' === typeof e.clientConfig
						);
					}
					function x(e) {
						for (var t, n = r(h); !(t = n()).done; ) {
							var i = t.value,
								o = i[0],
								a = i[1];
							if (e === o || e === a) return o;
						}
						return e;
					}
					function E(e) {
						if (w(e)) {
							var t = e.config(),
								n = t.apiHost,
								r = t.projectId,
								i = t.dataset;
							return new C(null, {
								baseUrl: (n || 'https://api.sanity.io').replace(
									/^https:\/\/api\./,
									'https://cdn.',
								),
								projectId: r,
								dataset: i,
							});
						}
						var o = e;
						if (b(o)) {
							var a = o.clientConfig,
								s = a.apiHost,
								l = a.projectId,
								u = a.dataset;
							return new C(null, {
								baseUrl: (s || 'https://api.sanity.io').replace(
									/^https:\/\/api\./,
									'https://cdn.',
								),
								projectId: l,
								dataset: u,
							});
						}
						return new C(null, e);
					}
					var C = (function () {
						function t(t, n) {
							(this.options = void 0),
								(this.options = t
									? e({}, t.options || {}, n || {})
									: e({}, n || {}));
						}
						var n = t.prototype;
						return (
							(n.withOptions = function (n) {
								var r = n.baseUrl || this.options.baseUrl,
									i = { baseUrl: r };
								for (var o in n)
									n.hasOwnProperty(o) && (i[x(o)] = n[o]);
								return new t(this, e({ baseUrl: r }, i));
							}),
							(n.image = function (e) {
								return this.withOptions({ source: e });
							}),
							(n.dataset = function (e) {
								return this.withOptions({ dataset: e });
							}),
							(n.projectId = function (e) {
								return this.withOptions({ projectId: e });
							}),
							(n.bg = function (e) {
								return this.withOptions({ bg: e });
							}),
							(n.dpr = function (e) {
								return this.withOptions(
									e && 1 !== e ? { dpr: e } : {},
								);
							}),
							(n.width = function (e) {
								return this.withOptions({ width: e });
							}),
							(n.height = function (e) {
								return this.withOptions({ height: e });
							}),
							(n.focalPoint = function (e, t) {
								return this.withOptions({
									focalPoint: { x: e, y: t },
								});
							}),
							(n.maxWidth = function (e) {
								return this.withOptions({ maxWidth: e });
							}),
							(n.minWidth = function (e) {
								return this.withOptions({ minWidth: e });
							}),
							(n.maxHeight = function (e) {
								return this.withOptions({ maxHeight: e });
							}),
							(n.minHeight = function (e) {
								return this.withOptions({ minHeight: e });
							}),
							(n.size = function (e, t) {
								return this.withOptions({
									width: e,
									height: t,
								});
							}),
							(n.blur = function (e) {
								return this.withOptions({ blur: e });
							}),
							(n.sharpen = function (e) {
								return this.withOptions({ sharpen: e });
							}),
							(n.rect = function (e, t, n, r) {
								return this.withOptions({
									rect: {
										left: e,
										top: t,
										width: n,
										height: r,
									},
								});
							}),
							(n.format = function (e) {
								return this.withOptions({ format: e });
							}),
							(n.invert = function (e) {
								return this.withOptions({ invert: e });
							}),
							(n.orientation = function (e) {
								return this.withOptions({ orientation: e });
							}),
							(n.quality = function (e) {
								return this.withOptions({ quality: e });
							}),
							(n.forceDownload = function (e) {
								return this.withOptions({ download: e });
							}),
							(n.flipHorizontal = function () {
								return this.withOptions({ flipHorizontal: !0 });
							}),
							(n.flipVertical = function () {
								return this.withOptions({ flipVertical: !0 });
							}),
							(n.ignoreImageParams = function () {
								return this.withOptions({
									ignoreImageParams: !0,
								});
							}),
							(n.fit = function (e) {
								if (-1 === v.indexOf(e))
									throw new Error(
										'Invalid fit mode "' + e + '"',
									);
								return this.withOptions({ fit: e });
							}),
							(n.crop = function (e) {
								if (-1 === A.indexOf(e))
									throw new Error(
										'Invalid crop mode "' + e + '"',
									);
								return this.withOptions({ crop: e });
							}),
							(n.saturation = function (e) {
								return this.withOptions({ saturation: e });
							}),
							(n.auto = function (e) {
								if (-1 === y.indexOf(e))
									throw new Error(
										'Invalid auto mode "' + e + '"',
									);
								return this.withOptions({ auto: e });
							}),
							(n.pad = function (e) {
								return this.withOptions({ pad: e });
							}),
							(n.url = function () {
								return p(this.options);
							}),
							(n.toString = function () {
								return this.url();
							}),
							t
						);
					})();
					return E;
				})();
			},
			694: (e, t) => {
				var n;
				!(function () {
					'use strict';
					var r = {}.hasOwnProperty;
					function i() {
						for (var e = [], t = 0; t < arguments.length; t++) {
							var n = arguments[t];
							if (n) {
								var o = typeof n;
								if ('string' === o || 'number' === o) e.push(n);
								else if (Array.isArray(n)) {
									if (n.length) {
										var a = i.apply(null, n);
										a && e.push(a);
									}
								} else if ('object' === o) {
									if (
										n.toString !==
											Object.prototype.toString &&
										!n.toString
											.toString()
											.includes('[native code]')
									) {
										e.push(n.toString());
										continue;
									}
									for (var s in n)
										r.call(n, s) && n[s] && e.push(s);
								}
							}
						}
						return e.join(' ');
					}
					e.exports
						? ((i.default = i), (e.exports = i))
						: void 0 ===
								(n = function () {
									return i;
								}.apply(t, [])) || (e.exports = n);
				})();
			},
			392: (e, t, n) => {
				(t.formatArgs = function (t) {
					if (
						((t[0] =
							(this.useColors ? '%c' : '') +
							this.namespace +
							(this.useColors ? ' %c' : ' ') +
							t[0] +
							(this.useColors ? '%c ' : ' ') +
							'+' +
							e.exports.humanize(this.diff)),
						!this.useColors)
					)
						return;
					const n = 'color: ' + this.color;
					t.splice(1, 0, n, 'color: inherit');
					let r = 0,
						i = 0;
					t[0].replace(/%[a-zA-Z%]/g, (e) => {
						'%%' !== e && (r++, '%c' === e && (i = r));
					}),
						t.splice(i, 0, n);
				}),
					(t.save = function (e) {
						try {
							e
								? t.storage.setItem('debug', e)
								: t.storage.removeItem('debug');
						} catch (n) {}
					}),
					(t.load = function () {
						let e;
						try {
							e = t.storage.getItem('debug');
						} catch (n) {}
						!e &&
							'undefined' !== typeof process &&
							'env' in process &&
							(e = {
								NODE_ENV: 'production',
								PUBLIC_URL: '',
								WDS_SOCKET_HOST: void 0,
								WDS_SOCKET_PATH: void 0,
								WDS_SOCKET_PORT: void 0,
								FAST_REFRESH: !0,
							}.DEBUG);
						return e;
					}),
					(t.useColors = function () {
						if (
							'undefined' !== typeof window &&
							window.process &&
							('renderer' === window.process.type ||
								window.process.__nwjs)
						)
							return !0;
						if (
							'undefined' !== typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent
								.toLowerCase()
								.match(/(edge|trident)\/(\d+)/)
						)
							return !1;
						return (
							('undefined' !== typeof document &&
								document.documentElement &&
								document.documentElement.style &&
								document.documentElement.style
									.WebkitAppearance) ||
							('undefined' !== typeof window &&
								window.console &&
								(window.console.firebug ||
									(window.console.exception &&
										window.console.table))) ||
							('undefined' !== typeof navigator &&
								navigator.userAgent &&
								navigator.userAgent
									.toLowerCase()
									.match(/firefox\/(\d+)/) &&
								parseInt(RegExp.$1, 10) >= 31) ||
							('undefined' !== typeof navigator &&
								navigator.userAgent &&
								navigator.userAgent
									.toLowerCase()
									.match(/applewebkit\/(\d+)/))
						);
					}),
					(t.storage = (function () {
						try {
							return localStorage;
						} catch (e) {}
					})()),
					(t.destroy = (() => {
						let e = !1;
						return () => {
							e ||
								((e = !0),
								console.warn(
									'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
								));
						};
					})()),
					(t.colors = [
						'#0000CC',
						'#0000FF',
						'#0033CC',
						'#0033FF',
						'#0066CC',
						'#0066FF',
						'#0099CC',
						'#0099FF',
						'#00CC00',
						'#00CC33',
						'#00CC66',
						'#00CC99',
						'#00CCCC',
						'#00CCFF',
						'#3300CC',
						'#3300FF',
						'#3333CC',
						'#3333FF',
						'#3366CC',
						'#3366FF',
						'#3399CC',
						'#3399FF',
						'#33CC00',
						'#33CC33',
						'#33CC66',
						'#33CC99',
						'#33CCCC',
						'#33CCFF',
						'#6600CC',
						'#6600FF',
						'#6633CC',
						'#6633FF',
						'#66CC00',
						'#66CC33',
						'#9900CC',
						'#9900FF',
						'#9933CC',
						'#9933FF',
						'#99CC00',
						'#99CC33',
						'#CC0000',
						'#CC0033',
						'#CC0066',
						'#CC0099',
						'#CC00CC',
						'#CC00FF',
						'#CC3300',
						'#CC3333',
						'#CC3366',
						'#CC3399',
						'#CC33CC',
						'#CC33FF',
						'#CC6600',
						'#CC6633',
						'#CC9900',
						'#CC9933',
						'#CCCC00',
						'#CCCC33',
						'#FF0000',
						'#FF0033',
						'#FF0066',
						'#FF0099',
						'#FF00CC',
						'#FF00FF',
						'#FF3300',
						'#FF3333',
						'#FF3366',
						'#FF3399',
						'#FF33CC',
						'#FF33FF',
						'#FF6600',
						'#FF6633',
						'#FF9900',
						'#FF9933',
						'#FFCC00',
						'#FFCC33',
					]),
					(t.log = console.debug || console.log || (() => {})),
					(e.exports = n(472)(t));
				const { formatters: r } = e.exports;
				r.j = function (e) {
					try {
						return JSON.stringify(e);
					} catch (t) {
						return '[UnexpectedJSONParseError]: ' + t.message;
					}
				};
			},
			472: (e, t, n) => {
				e.exports = function (e) {
					function t(e) {
						let n,
							i,
							o,
							a = null;
						function s() {
							for (
								var e = arguments.length,
									r = new Array(e),
									i = 0;
								i < e;
								i++
							)
								r[i] = arguments[i];
							if (!s.enabled) return;
							const o = s,
								a = Number(new Date()),
								l = a - (n || a);
							(o.diff = l),
								(o.prev = n),
								(o.curr = a),
								(n = a),
								(r[0] = t.coerce(r[0])),
								'string' !== typeof r[0] && r.unshift('%O');
							let u = 0;
							(r[0] = r[0].replace(/%([a-zA-Z%])/g, (e, n) => {
								if ('%%' === e) return '%';
								u++;
								const i = t.formatters[n];
								if ('function' === typeof i) {
									const t = r[u];
									(e = i.call(o, t)), r.splice(u, 1), u--;
								}
								return e;
							})),
								t.formatArgs.call(o, r);
							(o.log || t.log).apply(o, r);
						}
						return (
							(s.namespace = e),
							(s.useColors = t.useColors()),
							(s.color = t.selectColor(e)),
							(s.extend = r),
							(s.destroy = t.destroy),
							Object.defineProperty(s, 'enabled', {
								enumerable: !0,
								configurable: !1,
								get: () =>
									null !== a
										? a
										: (i !== t.namespaces &&
												((i = t.namespaces),
												(o = t.enabled(e))),
											o),
								set: (e) => {
									a = e;
								},
							}),
							'function' === typeof t.init && t.init(s),
							s
						);
					}
					function r(e, n) {
						const r = t(
							this.namespace +
								('undefined' === typeof n ? ':' : n) +
								e,
						);
						return (r.log = this.log), r;
					}
					function i(e) {
						return e
							.toString()
							.substring(2, e.toString().length - 2)
							.replace(/\.\*\?$/, '*');
					}
					return (
						(t.debug = t),
						(t.default = t),
						(t.coerce = function (e) {
							if (e instanceof Error) return e.stack || e.message;
							return e;
						}),
						(t.disable = function () {
							const e = [
								...t.names.map(i),
								...t.skips.map(i).map((e) => '-' + e),
							].join(',');
							return t.enable(''), e;
						}),
						(t.enable = function (e) {
							let n;
							t.save(e),
								(t.namespaces = e),
								(t.names = []),
								(t.skips = []);
							const r = ('string' === typeof e ? e : '').split(
									/[\s,]+/,
								),
								i = r.length;
							for (n = 0; n < i; n++)
								r[n] &&
									('-' === (e = r[n].replace(/\*/g, '.*?'))[0]
										? t.skips.push(
												new RegExp(
													'^' + e.slice(1) + '$',
												),
											)
										: t.names.push(
												new RegExp('^' + e + '$'),
											));
						}),
						(t.enabled = function (e) {
							if ('*' === e[e.length - 1]) return !0;
							let n, r;
							for (n = 0, r = t.skips.length; n < r; n++)
								if (t.skips[n].test(e)) return !1;
							for (n = 0, r = t.names.length; n < r; n++)
								if (t.names[n].test(e)) return !0;
							return !1;
						}),
						(t.humanize = n(193)),
						(t.destroy = function () {
							console.warn(
								'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
							);
						}),
						Object.keys(e).forEach((n) => {
							t[n] = e[n];
						}),
						(t.names = []),
						(t.skips = []),
						(t.formatters = {}),
						(t.selectColor = function (e) {
							let n = 0;
							for (let t = 0; t < e.length; t++)
								(n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
							return t.colors[Math.abs(n) % t.colors.length];
						}),
						t.enable(t.load()),
						t
					);
				};
			},
			193: (e) => {
				var t = 1e3,
					n = 60 * t,
					r = 60 * n,
					i = 24 * r,
					o = 7 * i,
					a = 365.25 * i;
				function s(e, t, n, r) {
					var i = t >= 1.5 * n;
					return Math.round(e / n) + ' ' + r + (i ? 's' : '');
				}
				e.exports = function (e, l) {
					l = l || {};
					var u = typeof e;
					if ('string' === u && e.length > 0)
						return (function (e) {
							if ((e = String(e)).length > 100) return;
							var s =
								/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
									e,
								);
							if (!s) return;
							var l = parseFloat(s[1]);
							switch ((s[2] || 'ms').toLowerCase()) {
								case 'years':
								case 'year':
								case 'yrs':
								case 'yr':
								case 'y':
									return l * a;
								case 'weeks':
								case 'week':
								case 'w':
									return l * o;
								case 'days':
								case 'day':
								case 'd':
									return l * i;
								case 'hours':
								case 'hour':
								case 'hrs':
								case 'hr':
								case 'h':
									return l * r;
								case 'minutes':
								case 'minute':
								case 'mins':
								case 'min':
								case 'm':
									return l * n;
								case 'seconds':
								case 'second':
								case 'secs':
								case 'sec':
								case 's':
									return l * t;
								case 'milliseconds':
								case 'millisecond':
								case 'msecs':
								case 'msec':
								case 'ms':
									return l;
								default:
									return;
							}
						})(e);
					if ('number' === u && isFinite(e))
						return l.long
							? (function (e) {
									var o = Math.abs(e);
									if (o >= i) return s(e, o, i, 'day');
									if (o >= r) return s(e, o, r, 'hour');
									if (o >= n) return s(e, o, n, 'minute');
									if (o >= t) return s(e, o, t, 'second');
									return e + ' ms';
								})(e)
							: (function (e) {
									var o = Math.abs(e);
									if (o >= i) return Math.round(e / i) + 'd';
									if (o >= r) return Math.round(e / r) + 'h';
									if (o >= n) return Math.round(e / n) + 'm';
									if (o >= t) return Math.round(e / t) + 's';
									return e + 'ms';
								})(e);
					throw new Error(
						'val is not a non-empty string or a valid number. val=' +
							JSON.stringify(e),
					);
				};
			},
			913: (e) => {
				var t = function (e) {
					return e.replace(/^\s+|\s+$/g, '');
				};
				e.exports = function (e) {
					if (!e) return {};
					for (
						var n, r = {}, i = t(e).split('\n'), o = 0;
						o < i.length;
						o++
					) {
						var a = i[o],
							s = a.indexOf(':'),
							l = t(a.slice(0, s)).toLowerCase(),
							u = t(a.slice(s + 1));
						'undefined' === typeof r[l]
							? (r[l] = u)
							: ((n = r[l]),
								'[object Array]' ===
								Object.prototype.toString.call(n)
									? r[l].push(u)
									: (r[l] = [r[l], u]));
					}
					return r;
				};
			},
			463: (e, t, n) => {
				'use strict';
				var r = n(791),
					i = n(296);
				function o(e) {
					for (
						var t =
								'https://reactjs.org/docs/error-decoder.html?invariant=' +
								e,
							n = 1;
						n < arguments.length;
						n++
					)
						t += '&args[]=' + encodeURIComponent(arguments[n]);
					return (
						'Minified React error #' +
						e +
						'; visit ' +
						t +
						' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
					);
				}
				var a = new Set(),
					s = {};
				function l(e, t) {
					u(e, t), u(e + 'Capture', t);
				}
				function u(e, t) {
					for (s[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
				}
				var c = !(
						'undefined' === typeof window ||
						'undefined' === typeof window.document ||
						'undefined' === typeof window.document.createElement
					),
					d = Object.prototype.hasOwnProperty,
					f =
						/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					h = {},
					p = {};
				function m(e, t, n, r, i, o, a) {
					(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
						(this.attributeName = r),
						(this.attributeNamespace = i),
						(this.mustUseProperty = n),
						(this.propertyName = e),
						(this.type = t),
						(this.sanitizeURL = o),
						(this.removeEmptyString = a);
				}
				var g = {};
				'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
					.split(' ')
					.forEach(function (e) {
						g[e] = new m(e, 0, !1, e, null, !1, !1);
					}),
					[
						['acceptCharset', 'accept-charset'],
						['className', 'class'],
						['htmlFor', 'for'],
						['httpEquiv', 'http-equiv'],
					].forEach(function (e) {
						var t = e[0];
						g[t] = new m(t, 1, !1, e[1], null, !1, !1);
					}),
					[
						'contentEditable',
						'draggable',
						'spellCheck',
						'value',
					].forEach(function (e) {
						g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
					}),
					[
						'autoReverse',
						'externalResourcesRequired',
						'focusable',
						'preserveAlpha',
					].forEach(function (e) {
						g[e] = new m(e, 2, !1, e, null, !1, !1);
					}),
					'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
						.split(' ')
						.forEach(function (e) {
							g[e] = new m(
								e,
								3,
								!1,
								e.toLowerCase(),
								null,
								!1,
								!1,
							);
						}),
					['checked', 'multiple', 'muted', 'selected'].forEach(
						function (e) {
							g[e] = new m(e, 3, !0, e, null, !1, !1);
						},
					),
					['capture', 'download'].forEach(function (e) {
						g[e] = new m(e, 4, !1, e, null, !1, !1);
					}),
					['cols', 'rows', 'size', 'span'].forEach(function (e) {
						g[e] = new m(e, 6, !1, e, null, !1, !1);
					}),
					['rowSpan', 'start'].forEach(function (e) {
						g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
					});
				var v = /[\-:]([a-z])/g;
				function A(e) {
					return e[1].toUpperCase();
				}
				function y(e, t, n, r) {
					var i = g.hasOwnProperty(t) ? g[t] : null;
					(null !== i
						? 0 !== i.type
						: r ||
							!(2 < t.length) ||
							('o' !== t[0] && 'O' !== t[0]) ||
							('n' !== t[1] && 'N' !== t[1])) &&
						((function (e, t, n, r) {
							if (
								null === t ||
								'undefined' === typeof t ||
								(function (e, t, n, r) {
									if (null !== n && 0 === n.type) return !1;
									switch (typeof t) {
										case 'function':
										case 'symbol':
											return !0;
										case 'boolean':
											return (
												!r &&
												(null !== n
													? !n.acceptsBooleans
													: 'data-' !==
															(e = e
																.toLowerCase()
																.slice(0, 5)) &&
														'aria-' !== e)
											);
										default:
											return !1;
									}
								})(e, t, n, r)
							)
								return !0;
							if (r) return !1;
							if (null !== n)
								switch (n.type) {
									case 3:
										return !t;
									case 4:
										return !1 === t;
									case 5:
										return isNaN(t);
									case 6:
										return isNaN(t) || 1 > t;
								}
							return !1;
						})(t, n, i, r) && (n = null),
						r || null === i
							? (function (e) {
									return (
										!!d.call(p, e) ||
										(!d.call(h, e) &&
											(f.test(e)
												? (p[e] = !0)
												: ((h[e] = !0), !1)))
									);
								})(t) &&
								(null === n
									? e.removeAttribute(t)
									: e.setAttribute(t, '' + n))
							: i.mustUseProperty
								? (e[i.propertyName] =
										null === n ? 3 !== i.type && '' : n)
								: ((t = i.attributeName),
									(r = i.attributeNamespace),
									null === n
										? e.removeAttribute(t)
										: ((n =
												3 === (i = i.type) ||
												(4 === i && !0 === n)
													? ''
													: '' + n),
											r
												? e.setAttributeNS(r, t, n)
												: e.setAttribute(t, n))));
				}
				'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
					.split(' ')
					.forEach(function (e) {
						var t = e.replace(v, A);
						g[t] = new m(t, 1, !1, e, null, !1, !1);
					}),
					'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
						.split(' ')
						.forEach(function (e) {
							var t = e.replace(v, A);
							g[t] = new m(
								t,
								1,
								!1,
								e,
								'http://www.w3.org/1999/xlink',
								!1,
								!1,
							);
						}),
					['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
						var t = e.replace(v, A);
						g[t] = new m(
							t,
							1,
							!1,
							e,
							'http://www.w3.org/XML/1998/namespace',
							!1,
							!1,
						);
					}),
					['tabIndex', 'crossOrigin'].forEach(function (e) {
						g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
					}),
					(g.xlinkHref = new m(
						'xlinkHref',
						1,
						!1,
						'xlink:href',
						'http://www.w3.org/1999/xlink',
						!0,
						!1,
					)),
					['src', 'href', 'action', 'formAction'].forEach(
						function (e) {
							g[e] = new m(
								e,
								1,
								!1,
								e.toLowerCase(),
								null,
								!0,
								!0,
							);
						},
					);
				var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					b = Symbol.for('react.element'),
					x = Symbol.for('react.portal'),
					E = Symbol.for('react.fragment'),
					C = Symbol.for('react.strict_mode'),
					k = Symbol.for('react.profiler'),
					S = Symbol.for('react.provider'),
					T = Symbol.for('react.context'),
					_ = Symbol.for('react.forward_ref'),
					P = Symbol.for('react.suspense'),
					M = Symbol.for('react.suspense_list'),
					D = Symbol.for('react.memo'),
					O = Symbol.for('react.lazy');
				Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
				var R = Symbol.for('react.offscreen');
				Symbol.for('react.legacy_hidden'),
					Symbol.for('react.cache'),
					Symbol.for('react.tracing_marker');
				var B = Symbol.iterator;
				function L(e) {
					return null === e || 'object' !== typeof e
						? null
						: 'function' ===
							  typeof (e = (B && e[B]) || e['@@iterator'])
							? e
							: null;
				}
				var I,
					F = Object.assign;
				function j(e) {
					if (void 0 === I)
						try {
							throw Error();
						} catch (n) {
							var t = n.stack.trim().match(/\n( *(at )?)/);
							I = (t && t[1]) || '';
						}
					return '\n' + I + e;
				}
				var N = !1;
				function z(e, t) {
					if (!e || N) return '';
					N = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (t)
							if (
								((t = function () {
									throw Error();
								}),
								Object.defineProperty(t.prototype, 'props', {
									set: function () {
										throw Error();
									},
								}),
								'object' === typeof Reflect &&
									Reflect.construct)
							) {
								try {
									Reflect.construct(t, []);
								} catch (u) {
									var r = u;
								}
								Reflect.construct(e, [], t);
							} else {
								try {
									t.call();
								} catch (u) {
									r = u;
								}
								e.call(t.prototype);
							}
						else {
							try {
								throw Error();
							} catch (u) {
								r = u;
							}
							e();
						}
					} catch (u) {
						if (u && r && 'string' === typeof u.stack) {
							for (
								var i = u.stack.split('\n'),
									o = r.stack.split('\n'),
									a = i.length - 1,
									s = o.length - 1;
								1 <= a && 0 <= s && i[a] !== o[s];

							)
								s--;
							for (; 1 <= a && 0 <= s; a--, s--)
								if (i[a] !== o[s]) {
									if (1 !== a || 1 !== s)
										do {
											if (
												(a--, 0 > --s || i[a] !== o[s])
											) {
												var l =
													'\n' +
													i[a].replace(
														' at new ',
														' at ',
													);
												return (
													e.displayName &&
														l.includes(
															'<anonymous>',
														) &&
														(l = l.replace(
															'<anonymous>',
															e.displayName,
														)),
													l
												);
											}
										} while (1 <= a && 0 <= s);
									break;
								}
						}
					} finally {
						(N = !1), (Error.prepareStackTrace = n);
					}
					return (e = e ? e.displayName || e.name : '') ? j(e) : '';
				}
				function V(e) {
					switch (e.tag) {
						case 5:
							return j(e.type);
						case 16:
							return j('Lazy');
						case 13:
							return j('Suspense');
						case 19:
							return j('SuspenseList');
						case 0:
						case 2:
						case 15:
							return (e = z(e.type, !1));
						case 11:
							return (e = z(e.type.render, !1));
						case 1:
							return (e = z(e.type, !0));
						default:
							return '';
					}
				}
				function U(e) {
					if (null == e) return null;
					if ('function' === typeof e)
						return e.displayName || e.name || null;
					if ('string' === typeof e) return e;
					switch (e) {
						case E:
							return 'Fragment';
						case x:
							return 'Portal';
						case k:
							return 'Profiler';
						case C:
							return 'StrictMode';
						case P:
							return 'Suspense';
						case M:
							return 'SuspenseList';
					}
					if ('object' === typeof e)
						switch (e.$$typeof) {
							case T:
								return (
									(e.displayName || 'Context') + '.Consumer'
								);
							case S:
								return (
									(e._context.displayName || 'Context') +
									'.Provider'
								);
							case _:
								var t = e.render;
								return (
									(e = e.displayName) ||
										(e =
											'' !==
											(e = t.displayName || t.name || '')
												? 'ForwardRef(' + e + ')'
												: 'ForwardRef'),
									e
								);
							case D:
								return null !== (t = e.displayName || null)
									? t
									: U(e.type) || 'Memo';
							case O:
								(t = e._payload), (e = e._init);
								try {
									return U(e(t));
								} catch (n) {}
						}
					return null;
				}
				function Y(e) {
					var t = e.type;
					switch (e.tag) {
						case 24:
							return 'Cache';
						case 9:
							return (t.displayName || 'Context') + '.Consumer';
						case 10:
							return (
								(t._context.displayName || 'Context') +
								'.Provider'
							);
						case 18:
							return 'DehydratedFragment';
						case 11:
							return (
								(e =
									(e = t.render).displayName || e.name || ''),
								t.displayName ||
									('' !== e
										? 'ForwardRef(' + e + ')'
										: 'ForwardRef')
							);
						case 7:
							return 'Fragment';
						case 5:
							return t;
						case 4:
							return 'Portal';
						case 3:
							return 'Root';
						case 6:
							return 'Text';
						case 16:
							return U(t);
						case 8:
							return t === C ? 'StrictMode' : 'Mode';
						case 22:
							return 'Offscreen';
						case 12:
							return 'Profiler';
						case 21:
							return 'Scope';
						case 13:
							return 'Suspense';
						case 19:
							return 'SuspenseList';
						case 25:
							return 'TracingMarker';
						case 1:
						case 0:
						case 17:
						case 2:
						case 14:
						case 15:
							if ('function' === typeof t)
								return t.displayName || t.name || null;
							if ('string' === typeof t) return t;
					}
					return null;
				}
				function Q(e) {
					switch (typeof e) {
						case 'boolean':
						case 'number':
						case 'string':
						case 'undefined':
						case 'object':
							return e;
						default:
							return '';
					}
				}
				function H(e) {
					var t = e.type;
					return (
						(e = e.nodeName) &&
						'input' === e.toLowerCase() &&
						('checkbox' === t || 'radio' === t)
					);
				}
				function G(e) {
					e._valueTracker ||
						(e._valueTracker = (function (e) {
							var t = H(e) ? 'checked' : 'value',
								n = Object.getOwnPropertyDescriptor(
									e.constructor.prototype,
									t,
								),
								r = '' + e[t];
							if (
								!e.hasOwnProperty(t) &&
								'undefined' !== typeof n &&
								'function' === typeof n.get &&
								'function' === typeof n.set
							) {
								var i = n.get,
									o = n.set;
								return (
									Object.defineProperty(e, t, {
										configurable: !0,
										get: function () {
											return i.call(this);
										},
										set: function (e) {
											(r = '' + e), o.call(this, e);
										},
									}),
									Object.defineProperty(e, t, {
										enumerable: n.enumerable,
									}),
									{
										getValue: function () {
											return r;
										},
										setValue: function (e) {
											r = '' + e;
										},
										stopTracking: function () {
											(e._valueTracker = null),
												delete e[t];
										},
									}
								);
							}
						})(e));
				}
				function W(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = '';
					return (
						e &&
							(r = H(e)
								? e.checked
									? 'true'
									: 'false'
								: e.value),
						(e = r) !== n && (t.setValue(e), !0)
					);
				}
				function X(e) {
					if (
						'undefined' ===
						typeof (e =
							e ||
							('undefined' !== typeof document
								? document
								: void 0))
					)
						return null;
					try {
						return e.activeElement || e.body;
					} catch (t) {
						return e.body;
					}
				}
				function q(e, t) {
					var n = t.checked;
					return F({}, t, {
						defaultChecked: void 0,
						defaultValue: void 0,
						value: void 0,
						checked: null != n ? n : e._wrapperState.initialChecked,
					});
				}
				function J(e, t) {
					var n = null == t.defaultValue ? '' : t.defaultValue,
						r = null != t.checked ? t.checked : t.defaultChecked;
					(n = Q(null != t.value ? t.value : n)),
						(e._wrapperState = {
							initialChecked: r,
							initialValue: n,
							controlled:
								'checkbox' === t.type || 'radio' === t.type
									? null != t.checked
									: null != t.value,
						});
				}
				function K(e, t) {
					null != (t = t.checked) && y(e, 'checked', t, !1);
				}
				function Z(e, t) {
					K(e, t);
					var n = Q(t.value),
						r = t.type;
					if (null != n)
						'number' === r
							? ((0 === n && '' === e.value) || e.value != n) &&
								(e.value = '' + n)
							: e.value !== '' + n && (e.value = '' + n);
					else if ('submit' === r || 'reset' === r)
						return void e.removeAttribute('value');
					t.hasOwnProperty('value')
						? ee(e, t.type, n)
						: t.hasOwnProperty('defaultValue') &&
							ee(e, t.type, Q(t.defaultValue)),
						null == t.checked &&
							null != t.defaultChecked &&
							(e.defaultChecked = !!t.defaultChecked);
				}
				function $(e, t, n) {
					if (
						t.hasOwnProperty('value') ||
						t.hasOwnProperty('defaultValue')
					) {
						var r = t.type;
						if (
							!(
								('submit' !== r && 'reset' !== r) ||
								(void 0 !== t.value && null !== t.value)
							)
						)
							return;
						(t = '' + e._wrapperState.initialValue),
							n || t === e.value || (e.value = t),
							(e.defaultValue = t);
					}
					'' !== (n = e.name) && (e.name = ''),
						(e.defaultChecked = !!e._wrapperState.initialChecked),
						'' !== n && (e.name = n);
				}
				function ee(e, t, n) {
					('number' === t && X(e.ownerDocument) === e) ||
						(null == n
							? (e.defaultValue =
									'' + e._wrapperState.initialValue)
							: e.defaultValue !== '' + n &&
								(e.defaultValue = '' + n));
				}
				var te = Array.isArray;
				function ne(e, t, n, r) {
					if (((e = e.options), t)) {
						t = {};
						for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
						for (n = 0; n < e.length; n++)
							(i = t.hasOwnProperty('$' + e[n].value)),
								e[n].selected !== i && (e[n].selected = i),
								i && r && (e[n].defaultSelected = !0);
					} else {
						for (
							n = '' + Q(n), t = null, i = 0;
							i < e.length;
							i++
						) {
							if (e[i].value === n)
								return (
									(e[i].selected = !0),
									void (r && (e[i].defaultSelected = !0))
								);
							null !== t || e[i].disabled || (t = e[i]);
						}
						null !== t && (t.selected = !0);
					}
				}
				function re(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
					return F({}, t, {
						value: void 0,
						defaultValue: void 0,
						children: '' + e._wrapperState.initialValue,
					});
				}
				function ie(e, t) {
					var n = t.value;
					if (null == n) {
						if (
							((n = t.children), (t = t.defaultValue), null != n)
						) {
							if (null != t) throw Error(o(92));
							if (te(n)) {
								if (1 < n.length) throw Error(o(93));
								n = n[0];
							}
							t = n;
						}
						null == t && (t = ''), (n = t);
					}
					e._wrapperState = { initialValue: Q(n) };
				}
				function oe(e, t) {
					var n = Q(t.value),
						r = Q(t.defaultValue);
					null != n &&
						((n = '' + n) !== e.value && (e.value = n),
						null == t.defaultValue &&
							e.defaultValue !== n &&
							(e.defaultValue = n)),
						null != r && (e.defaultValue = '' + r);
				}
				function ae(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue &&
						'' !== t &&
						null !== t &&
						(e.value = t);
				}
				function se(e) {
					switch (e) {
						case 'svg':
							return 'http://www.w3.org/2000/svg';
						case 'math':
							return 'http://www.w3.org/1998/Math/MathML';
						default:
							return 'http://www.w3.org/1999/xhtml';
					}
				}
				function le(e, t) {
					return null == e || 'http://www.w3.org/1999/xhtml' === e
						? se(t)
						: 'http://www.w3.org/2000/svg' === e &&
							  'foreignObject' === t
							? 'http://www.w3.org/1999/xhtml'
							: e;
				}
				var ue,
					ce = (function (e) {
						return 'undefined' !== typeof MSApp &&
							MSApp.execUnsafeLocalFunction
							? function (t, n, r, i) {
									MSApp.execUnsafeLocalFunction(function () {
										return e(t, n);
									});
								}
							: e;
					})(function (e, t) {
						if (
							'http://www.w3.org/2000/svg' !== e.namespaceURI ||
							'innerHTML' in e
						)
							e.innerHTML = t;
						else {
							for (
								(ue =
									ue ||
									document.createElement('div')).innerHTML =
									'<svg>' + t.valueOf().toString() + '</svg>',
									t = ue.firstChild;
								e.firstChild;

							)
								e.removeChild(e.firstChild);
							for (; t.firstChild; ) e.appendChild(t.firstChild);
						}
					});
				function de(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType)
							return void (n.nodeValue = t);
					}
					e.textContent = t;
				}
				var fe = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0,
					},
					he = ['Webkit', 'ms', 'Moz', 'O'];
				function pe(e, t, n) {
					return null == t || 'boolean' === typeof t || '' === t
						? ''
						: n ||
							  'number' !== typeof t ||
							  0 === t ||
							  (fe.hasOwnProperty(e) && fe[e])
							? ('' + t).trim()
							: t + 'px';
				}
				function me(e, t) {
					for (var n in ((e = e.style), t))
						if (t.hasOwnProperty(n)) {
							var r = 0 === n.indexOf('--'),
								i = pe(n, t[n], r);
							'float' === n && (n = 'cssFloat'),
								r ? e.setProperty(n, i) : (e[n] = i);
						}
				}
				Object.keys(fe).forEach(function (e) {
					he.forEach(function (t) {
						(t = t + e.charAt(0).toUpperCase() + e.substring(1)),
							(fe[t] = fe[e]);
					});
				});
				var ge = F(
					{ menuitem: !0 },
					{
						area: !0,
						base: !0,
						br: !0,
						col: !0,
						embed: !0,
						hr: !0,
						img: !0,
						input: !0,
						keygen: !0,
						link: !0,
						meta: !0,
						param: !0,
						source: !0,
						track: !0,
						wbr: !0,
					},
				);
				function ve(e, t) {
					if (t) {
						if (
							ge[e] &&
							(null != t.children ||
								null != t.dangerouslySetInnerHTML)
						)
							throw Error(o(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(o(60));
							if (
								'object' !== typeof t.dangerouslySetInnerHTML ||
								!('__html' in t.dangerouslySetInnerHTML)
							)
								throw Error(o(61));
						}
						if (null != t.style && 'object' !== typeof t.style)
							throw Error(o(62));
					}
				}
				function Ae(e, t) {
					if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
					switch (e) {
						case 'annotation-xml':
						case 'color-profile':
						case 'font-face':
						case 'font-face-src':
						case 'font-face-uri':
						case 'font-face-format':
						case 'font-face-name':
						case 'missing-glyph':
							return !1;
						default:
							return !0;
					}
				}
				var ye = null;
				function we(e) {
					return (
						(e = e.target || e.srcElement || window)
							.correspondingUseElement &&
							(e = e.correspondingUseElement),
						3 === e.nodeType ? e.parentNode : e
					);
				}
				var be = null,
					xe = null,
					Ee = null;
				function Ce(e) {
					if ((e = mi(e))) {
						if ('function' !== typeof be) throw Error(o(280));
						var t = e.stateNode;
						t && ((t = vi(t)), be(e.stateNode, e.type, t));
					}
				}
				function ke(e) {
					xe ? (Ee ? Ee.push(e) : (Ee = [e])) : (xe = e);
				}
				function Se() {
					if (xe) {
						var e = xe,
							t = Ee;
						if (((Ee = xe = null), Ce(e), t))
							for (e = 0; e < t.length; e++) Ce(t[e]);
					}
				}
				function Te(e, t) {
					return e(t);
				}
				function _e() {}
				var Pe = !1;
				function Me(e, t, n) {
					if (Pe) return e(t, n);
					Pe = !0;
					try {
						return Te(e, t, n);
					} finally {
						(Pe = !1), (null !== xe || null !== Ee) && (_e(), Se());
					}
				}
				function De(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var r = vi(n);
					if (null === r) return null;
					n = r[t];
					e: switch (t) {
						case 'onClick':
						case 'onClickCapture':
						case 'onDoubleClick':
						case 'onDoubleClickCapture':
						case 'onMouseDown':
						case 'onMouseDownCapture':
						case 'onMouseMove':
						case 'onMouseMoveCapture':
						case 'onMouseUp':
						case 'onMouseUpCapture':
						case 'onMouseEnter':
							(r = !r.disabled) ||
								(r = !(
									'button' === (e = e.type) ||
									'input' === e ||
									'select' === e ||
									'textarea' === e
								)),
								(e = !r);
							break e;
						default:
							e = !1;
					}
					if (e) return null;
					if (n && 'function' !== typeof n)
						throw Error(o(231, t, typeof n));
					return n;
				}
				var Oe = !1;
				if (c)
					try {
						var Re = {};
						Object.defineProperty(Re, 'passive', {
							get: function () {
								Oe = !0;
							},
						}),
							window.addEventListener('test', Re, Re),
							window.removeEventListener('test', Re, Re);
					} catch (tc) {
						Oe = !1;
					}
				function Be(e, t, n, r, i, o, a, s, l) {
					var u = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(n, u);
					} catch (c) {
						this.onError(c);
					}
				}
				var Le = !1,
					Ie = null,
					Fe = !1,
					je = null,
					Ne = {
						onError: function (e) {
							(Le = !0), (Ie = e);
						},
					};
				function ze(e, t, n, r, i, o, a, s, l) {
					(Le = !1), (Ie = null), Be.apply(Ne, arguments);
				}
				function Ve(e) {
					var t = e,
						n = e;
					if (e.alternate) for (; t.return; ) t = t.return;
					else {
						e = t;
						do {
							0 !== (4098 & (t = e).flags) && (n = t.return),
								(e = t.return);
						} while (e);
					}
					return 3 === t.tag ? n : null;
				}
				function Ue(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (
							(null === t &&
								null !== (e = e.alternate) &&
								(t = e.memoizedState),
							null !== t)
						)
							return t.dehydrated;
					}
					return null;
				}
				function Ye(e) {
					if (Ve(e) !== e) throw Error(o(188));
				}
				function Qe(e) {
					return null !==
						(e = (function (e) {
							var t = e.alternate;
							if (!t) {
								if (null === (t = Ve(e))) throw Error(o(188));
								return t !== e ? null : e;
							}
							for (var n = e, r = t; ; ) {
								var i = n.return;
								if (null === i) break;
								var a = i.alternate;
								if (null === a) {
									if (null !== (r = i.return)) {
										n = r;
										continue;
									}
									break;
								}
								if (i.child === a.child) {
									for (a = i.child; a; ) {
										if (a === n) return Ye(i), e;
										if (a === r) return Ye(i), t;
										a = a.sibling;
									}
									throw Error(o(188));
								}
								if (n.return !== r.return) (n = i), (r = a);
								else {
									for (var s = !1, l = i.child; l; ) {
										if (l === n) {
											(s = !0), (n = i), (r = a);
											break;
										}
										if (l === r) {
											(s = !0), (r = i), (n = a);
											break;
										}
										l = l.sibling;
									}
									if (!s) {
										for (l = a.child; l; ) {
											if (l === n) {
												(s = !0), (n = a), (r = i);
												break;
											}
											if (l === r) {
												(s = !0), (r = a), (n = i);
												break;
											}
											l = l.sibling;
										}
										if (!s) throw Error(o(189));
									}
								}
								if (n.alternate !== r) throw Error(o(190));
							}
							if (3 !== n.tag) throw Error(o(188));
							return n.stateNode.current === n ? e : t;
						})(e))
						? He(e)
						: null;
				}
				function He(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e; ) {
						var t = He(e);
						if (null !== t) return t;
						e = e.sibling;
					}
					return null;
				}
				var Ge = i.unstable_scheduleCallback,
					We = i.unstable_cancelCallback,
					Xe = i.unstable_shouldYield,
					qe = i.unstable_requestPaint,
					Je = i.unstable_now,
					Ke = i.unstable_getCurrentPriorityLevel,
					Ze = i.unstable_ImmediatePriority,
					$e = i.unstable_UserBlockingPriority,
					et = i.unstable_NormalPriority,
					tt = i.unstable_LowPriority,
					nt = i.unstable_IdlePriority,
					rt = null,
					it = null;
				var ot = Math.clz32
						? Math.clz32
						: function (e) {
								return 0 === (e >>>= 0)
									? 32
									: (31 - ((at(e) / st) | 0)) | 0;
							},
					at = Math.log,
					st = Math.LN2;
				var lt = 64,
					ut = 4194304;
				function ct(e) {
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194240 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							return 130023424 & e;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 1073741824;
						default:
							return e;
					}
				}
				function dt(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var r = 0,
						i = e.suspendedLanes,
						o = e.pingedLanes,
						a = 268435455 & n;
					if (0 !== a) {
						var s = a & ~i;
						0 !== s ? (r = ct(s)) : 0 !== (o &= a) && (r = ct(o));
					} else
						0 !== (a = n & ~i)
							? (r = ct(a))
							: 0 !== o && (r = ct(o));
					if (0 === r) return 0;
					if (
						0 !== t &&
						t !== r &&
						0 === (t & i) &&
						((i = r & -r) >= (o = t & -t) ||
							(16 === i && 0 !== (4194240 & o)))
					)
						return t;
					if (
						(0 !== (4 & r) && (r |= 16 & n),
						0 !== (t = e.entangledLanes))
					)
						for (e = e.entanglements, t &= r; 0 < t; )
							(i = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~i);
					return r;
				}
				function ft(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
							return t + 250;
						case 8:
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1;
					}
				}
				function ht(e) {
					return 0 !== (e = -1073741825 & e.pendingLanes)
						? e
						: 1073741824 & e
							? 1073741824
							: 0;
				}
				function pt() {
					var e = lt;
					return 0 === (4194240 & (lt <<= 1)) && (lt = 64), e;
				}
				function mt(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t;
				}
				function gt(e, t, n) {
					(e.pendingLanes |= t),
						536870912 !== t &&
							((e.suspendedLanes = 0), (e.pingedLanes = 0)),
						((e = e.eventTimes)[(t = 31 - ot(t))] = n);
				}
				function vt(e, t) {
					var n = (e.entangledLanes |= t);
					for (e = e.entanglements; n; ) {
						var r = 31 - ot(n),
							i = 1 << r;
						(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
					}
				}
				var At = 0;
				function yt(e) {
					return 1 < (e &= -e)
						? 4 < e
							? 0 !== (268435455 & e)
								? 16
								: 536870912
							: 4
						: 1;
				}
				var wt,
					bt,
					xt,
					Et,
					Ct,
					kt = !1,
					St = [],
					Tt = null,
					_t = null,
					Pt = null,
					Mt = new Map(),
					Dt = new Map(),
					Ot = [],
					Rt =
						'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
							' ',
						);
				function Bt(e, t) {
					switch (e) {
						case 'focusin':
						case 'focusout':
							Tt = null;
							break;
						case 'dragenter':
						case 'dragleave':
							_t = null;
							break;
						case 'mouseover':
						case 'mouseout':
							Pt = null;
							break;
						case 'pointerover':
						case 'pointerout':
							Mt.delete(t.pointerId);
							break;
						case 'gotpointercapture':
						case 'lostpointercapture':
							Dt.delete(t.pointerId);
					}
				}
				function Lt(e, t, n, r, i, o) {
					return null === e || e.nativeEvent !== o
						? ((e = {
								blockedOn: t,
								domEventName: n,
								eventSystemFlags: r,
								nativeEvent: o,
								targetContainers: [i],
							}),
							null !== t && null !== (t = mi(t)) && bt(t),
							e)
						: ((e.eventSystemFlags |= r),
							(t = e.targetContainers),
							null !== i && -1 === t.indexOf(i) && t.push(i),
							e);
				}
				function It(e) {
					var t = pi(e.target);
					if (null !== t) {
						var n = Ve(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = Ue(n)))
									return (
										(e.blockedOn = t),
										void Ct(e.priority, function () {
											xt(n);
										})
									);
							} else if (
								3 === t &&
								n.stateNode.current.memoizedState.isDehydrated
							)
								return void (e.blockedOn =
									3 === n.tag
										? n.stateNode.containerInfo
										: null);
					}
					e.blockedOn = null;
				}
				function Ft(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length; ) {
						var n = Xt(
							e.domEventName,
							e.eventSystemFlags,
							t[0],
							e.nativeEvent,
						);
						if (null !== n)
							return (
								null !== (t = mi(n)) && bt(t),
								(e.blockedOn = n),
								!1
							);
						var r = new (n = e.nativeEvent).constructor(n.type, n);
						(ye = r),
							n.target.dispatchEvent(r),
							(ye = null),
							t.shift();
					}
					return !0;
				}
				function jt(e, t, n) {
					Ft(e) && n.delete(t);
				}
				function Nt() {
					(kt = !1),
						null !== Tt && Ft(Tt) && (Tt = null),
						null !== _t && Ft(_t) && (_t = null),
						null !== Pt && Ft(Pt) && (Pt = null),
						Mt.forEach(jt),
						Dt.forEach(jt);
				}
				function zt(e, t) {
					e.blockedOn === t &&
						((e.blockedOn = null),
						kt ||
							((kt = !0),
							i.unstable_scheduleCallback(
								i.unstable_NormalPriority,
								Nt,
							)));
				}
				function Vt(e) {
					function t(t) {
						return zt(t, e);
					}
					if (0 < St.length) {
						zt(St[0], e);
						for (var n = 1; n < St.length; n++) {
							var r = St[n];
							r.blockedOn === e && (r.blockedOn = null);
						}
					}
					for (
						null !== Tt && zt(Tt, e),
							null !== _t && zt(_t, e),
							null !== Pt && zt(Pt, e),
							Mt.forEach(t),
							Dt.forEach(t),
							n = 0;
						n < Ot.length;
						n++
					)
						(r = Ot[n]).blockedOn === e && (r.blockedOn = null);
					for (; 0 < Ot.length && null === (n = Ot[0]).blockedOn; )
						It(n), null === n.blockedOn && Ot.shift();
				}
				var Ut = w.ReactCurrentBatchConfig,
					Yt = !0;
				function Qt(e, t, n, r) {
					var i = At,
						o = Ut.transition;
					Ut.transition = null;
					try {
						(At = 1), Gt(e, t, n, r);
					} finally {
						(At = i), (Ut.transition = o);
					}
				}
				function Ht(e, t, n, r) {
					var i = At,
						o = Ut.transition;
					Ut.transition = null;
					try {
						(At = 4), Gt(e, t, n, r);
					} finally {
						(At = i), (Ut.transition = o);
					}
				}
				function Gt(e, t, n, r) {
					if (Yt) {
						var i = Xt(e, t, n, r);
						if (null === i) zr(e, t, r, Wt, n), Bt(e, r);
						else if (
							(function (e, t, n, r, i) {
								switch (t) {
									case 'focusin':
										return (Tt = Lt(Tt, e, t, n, r, i)), !0;
									case 'dragenter':
										return (_t = Lt(_t, e, t, n, r, i)), !0;
									case 'mouseover':
										return (Pt = Lt(Pt, e, t, n, r, i)), !0;
									case 'pointerover':
										var o = i.pointerId;
										return (
											Mt.set(
												o,
												Lt(
													Mt.get(o) || null,
													e,
													t,
													n,
													r,
													i,
												),
											),
											!0
										);
									case 'gotpointercapture':
										return (
											(o = i.pointerId),
											Dt.set(
												o,
												Lt(
													Dt.get(o) || null,
													e,
													t,
													n,
													r,
													i,
												),
											),
											!0
										);
								}
								return !1;
							})(i, e, t, n, r)
						)
							r.stopPropagation();
						else if ((Bt(e, r), 4 & t && -1 < Rt.indexOf(e))) {
							for (; null !== i; ) {
								var o = mi(i);
								if (
									(null !== o && wt(o),
									null === (o = Xt(e, t, n, r)) &&
										zr(e, t, r, Wt, n),
									o === i)
								)
									break;
								i = o;
							}
							null !== i && r.stopPropagation();
						} else zr(e, t, r, null, n);
					}
				}
				var Wt = null;
				function Xt(e, t, n, r) {
					if (((Wt = null), null !== (e = pi((e = we(r))))))
						if (null === (t = Ve(e))) e = null;
						else if (13 === (n = t.tag)) {
							if (null !== (e = Ue(t))) return e;
							e = null;
						} else if (3 === n) {
							if (t.stateNode.current.memoizedState.isDehydrated)
								return 3 === t.tag
									? t.stateNode.containerInfo
									: null;
							e = null;
						} else t !== e && (e = null);
					return (Wt = e), null;
				}
				function qt(e) {
					switch (e) {
						case 'cancel':
						case 'click':
						case 'close':
						case 'contextmenu':
						case 'copy':
						case 'cut':
						case 'auxclick':
						case 'dblclick':
						case 'dragend':
						case 'dragstart':
						case 'drop':
						case 'focusin':
						case 'focusout':
						case 'input':
						case 'invalid':
						case 'keydown':
						case 'keypress':
						case 'keyup':
						case 'mousedown':
						case 'mouseup':
						case 'paste':
						case 'pause':
						case 'play':
						case 'pointercancel':
						case 'pointerdown':
						case 'pointerup':
						case 'ratechange':
						case 'reset':
						case 'resize':
						case 'seeked':
						case 'submit':
						case 'touchcancel':
						case 'touchend':
						case 'touchstart':
						case 'volumechange':
						case 'change':
						case 'selectionchange':
						case 'textInput':
						case 'compositionstart':
						case 'compositionend':
						case 'compositionupdate':
						case 'beforeblur':
						case 'afterblur':
						case 'beforeinput':
						case 'blur':
						case 'fullscreenchange':
						case 'focus':
						case 'hashchange':
						case 'popstate':
						case 'select':
						case 'selectstart':
							return 1;
						case 'drag':
						case 'dragenter':
						case 'dragexit':
						case 'dragleave':
						case 'dragover':
						case 'mousemove':
						case 'mouseout':
						case 'mouseover':
						case 'pointermove':
						case 'pointerout':
						case 'pointerover':
						case 'scroll':
						case 'toggle':
						case 'touchmove':
						case 'wheel':
						case 'mouseenter':
						case 'mouseleave':
						case 'pointerenter':
						case 'pointerleave':
							return 4;
						case 'message':
							switch (Ke()) {
								case Ze:
									return 1;
								case $e:
									return 4;
								case et:
								case tt:
									return 16;
								case nt:
									return 536870912;
								default:
									return 16;
							}
						default:
							return 16;
					}
				}
				var Jt = null,
					Kt = null,
					Zt = null;
				function $t() {
					if (Zt) return Zt;
					var e,
						t,
						n = Kt,
						r = n.length,
						i = 'value' in Jt ? Jt.value : Jt.textContent,
						o = i.length;
					for (e = 0; e < r && n[e] === i[e]; e++);
					var a = r - e;
					for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
					return (Zt = i.slice(e, 1 < t ? 1 - t : void 0));
				}
				function en(e) {
					var t = e.keyCode;
					return (
						'charCode' in e
							? 0 === (e = e.charCode) && 13 === t && (e = 13)
							: (e = t),
						10 === e && (e = 13),
						32 <= e || 13 === e ? e : 0
					);
				}
				function tn() {
					return !0;
				}
				function nn() {
					return !1;
				}
				function rn(e) {
					function t(t, n, r, i, o) {
						for (var a in ((this._reactName = t),
						(this._targetInst = r),
						(this.type = n),
						(this.nativeEvent = i),
						(this.target = o),
						(this.currentTarget = null),
						e))
							e.hasOwnProperty(a) &&
								((t = e[a]), (this[a] = t ? t(i) : i[a]));
						return (
							(this.isDefaultPrevented = (
								null != i.defaultPrevented
									? i.defaultPrevented
									: !1 === i.returnValue
							)
								? tn
								: nn),
							(this.isPropagationStopped = nn),
							this
						);
					}
					return (
						F(t.prototype, {
							preventDefault: function () {
								this.defaultPrevented = !0;
								var e = this.nativeEvent;
								e &&
									(e.preventDefault
										? e.preventDefault()
										: 'unknown' !== typeof e.returnValue &&
											(e.returnValue = !1),
									(this.isDefaultPrevented = tn));
							},
							stopPropagation: function () {
								var e = this.nativeEvent;
								e &&
									(e.stopPropagation
										? e.stopPropagation()
										: 'unknown' !== typeof e.cancelBubble &&
											(e.cancelBubble = !0),
									(this.isPropagationStopped = tn));
							},
							persist: function () {},
							isPersistent: tn,
						}),
						t
					);
				}
				var on,
					an,
					sn,
					ln = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function (e) {
							return e.timeStamp || Date.now();
						},
						defaultPrevented: 0,
						isTrusted: 0,
					},
					un = rn(ln),
					cn = F({}, ln, { view: 0, detail: 0 }),
					dn = rn(cn),
					fn = F({}, cn, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: En,
						button: 0,
						buttons: 0,
						relatedTarget: function (e) {
							return void 0 === e.relatedTarget
								? e.fromElement === e.srcElement
									? e.toElement
									: e.fromElement
								: e.relatedTarget;
						},
						movementX: function (e) {
							return 'movementX' in e
								? e.movementX
								: (e !== sn &&
										(sn && 'mousemove' === e.type
											? ((on = e.screenX - sn.screenX),
												(an = e.screenY - sn.screenY))
											: (an = on = 0),
										(sn = e)),
									on);
						},
						movementY: function (e) {
							return 'movementY' in e ? e.movementY : an;
						},
					}),
					hn = rn(fn),
					pn = rn(F({}, fn, { dataTransfer: 0 })),
					mn = rn(F({}, cn, { relatedTarget: 0 })),
					gn = rn(
						F({}, ln, {
							animationName: 0,
							elapsedTime: 0,
							pseudoElement: 0,
						}),
					),
					vn = rn(
						F({}, ln, {
							clipboardData: function (e) {
								return 'clipboardData' in e
									? e.clipboardData
									: window.clipboardData;
							},
						}),
					),
					An = rn(F({}, ln, { data: 0 })),
					yn = {
						Esc: 'Escape',
						Spacebar: ' ',
						Left: 'ArrowLeft',
						Up: 'ArrowUp',
						Right: 'ArrowRight',
						Down: 'ArrowDown',
						Del: 'Delete',
						Win: 'OS',
						Menu: 'ContextMenu',
						Apps: 'ContextMenu',
						Scroll: 'ScrollLock',
						MozPrintableKey: 'Unidentified',
					},
					wn = {
						8: 'Backspace',
						9: 'Tab',
						12: 'Clear',
						13: 'Enter',
						16: 'Shift',
						17: 'Control',
						18: 'Alt',
						19: 'Pause',
						20: 'CapsLock',
						27: 'Escape',
						32: ' ',
						33: 'PageUp',
						34: 'PageDown',
						35: 'End',
						36: 'Home',
						37: 'ArrowLeft',
						38: 'ArrowUp',
						39: 'ArrowRight',
						40: 'ArrowDown',
						45: 'Insert',
						46: 'Delete',
						112: 'F1',
						113: 'F2',
						114: 'F3',
						115: 'F4',
						116: 'F5',
						117: 'F6',
						118: 'F7',
						119: 'F8',
						120: 'F9',
						121: 'F10',
						122: 'F11',
						123: 'F12',
						144: 'NumLock',
						145: 'ScrollLock',
						224: 'Meta',
					},
					bn = {
						Alt: 'altKey',
						Control: 'ctrlKey',
						Meta: 'metaKey',
						Shift: 'shiftKey',
					};
				function xn(e) {
					var t = this.nativeEvent;
					return t.getModifierState
						? t.getModifierState(e)
						: !!(e = bn[e]) && !!t[e];
				}
				function En() {
					return xn;
				}
				var Cn = rn(
						F({}, cn, {
							key: function (e) {
								if (e.key) {
									var t = yn[e.key] || e.key;
									if ('Unidentified' !== t) return t;
								}
								return 'keypress' === e.type
									? 13 === (e = en(e))
										? 'Enter'
										: String.fromCharCode(e)
									: 'keydown' === e.type || 'keyup' === e.type
										? wn[e.keyCode] || 'Unidentified'
										: '';
							},
							code: 0,
							location: 0,
							ctrlKey: 0,
							shiftKey: 0,
							altKey: 0,
							metaKey: 0,
							repeat: 0,
							locale: 0,
							getModifierState: En,
							charCode: function (e) {
								return 'keypress' === e.type ? en(e) : 0;
							},
							keyCode: function (e) {
								return 'keydown' === e.type ||
									'keyup' === e.type
									? e.keyCode
									: 0;
							},
							which: function (e) {
								return 'keypress' === e.type
									? en(e)
									: 'keydown' === e.type || 'keyup' === e.type
										? e.keyCode
										: 0;
							},
						}),
					),
					kn = rn(
						F({}, fn, {
							pointerId: 0,
							width: 0,
							height: 0,
							pressure: 0,
							tangentialPressure: 0,
							tiltX: 0,
							tiltY: 0,
							twist: 0,
							pointerType: 0,
							isPrimary: 0,
						}),
					),
					Sn = rn(
						F({}, cn, {
							touches: 0,
							targetTouches: 0,
							changedTouches: 0,
							altKey: 0,
							metaKey: 0,
							ctrlKey: 0,
							shiftKey: 0,
							getModifierState: En,
						}),
					),
					Tn = rn(
						F({}, ln, {
							propertyName: 0,
							elapsedTime: 0,
							pseudoElement: 0,
						}),
					),
					_n = rn(
						F({}, fn, {
							deltaX: function (e) {
								return 'deltaX' in e
									? e.deltaX
									: 'wheelDeltaX' in e
										? -e.wheelDeltaX
										: 0;
							},
							deltaY: function (e) {
								return 'deltaY' in e
									? e.deltaY
									: 'wheelDeltaY' in e
										? -e.wheelDeltaY
										: 'wheelDelta' in e
											? -e.wheelDelta
											: 0;
							},
							deltaZ: 0,
							deltaMode: 0,
						}),
					),
					Pn = [9, 13, 27, 32],
					Mn = c && 'CompositionEvent' in window,
					Dn = null;
				c && 'documentMode' in document && (Dn = document.documentMode);
				var On = c && 'TextEvent' in window && !Dn,
					Rn = c && (!Mn || (Dn && 8 < Dn && 11 >= Dn)),
					Bn = String.fromCharCode(32),
					Ln = !1;
				function In(e, t) {
					switch (e) {
						case 'keyup':
							return -1 !== Pn.indexOf(t.keyCode);
						case 'keydown':
							return 229 !== t.keyCode;
						case 'keypress':
						case 'mousedown':
						case 'focusout':
							return !0;
						default:
							return !1;
					}
				}
				function Fn(e) {
					return 'object' === typeof (e = e.detail) && 'data' in e
						? e.data
						: null;
				}
				var jn = !1;
				var Nn = {
					color: !0,
					date: !0,
					datetime: !0,
					'datetime-local': !0,
					email: !0,
					month: !0,
					number: !0,
					password: !0,
					range: !0,
					search: !0,
					tel: !0,
					text: !0,
					time: !0,
					url: !0,
					week: !0,
				};
				function zn(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return 'input' === t ? !!Nn[e.type] : 'textarea' === t;
				}
				function Vn(e, t, n, r) {
					ke(r),
						0 < (t = Ur(t, 'onChange')).length &&
							((n = new un('onChange', 'change', null, n, r)),
							e.push({ event: n, listeners: t }));
				}
				var Un = null,
					Yn = null;
				function Qn(e) {
					Br(e, 0);
				}
				function Hn(e) {
					if (W(gi(e))) return e;
				}
				function Gn(e, t) {
					if ('change' === e) return t;
				}
				var Wn = !1;
				if (c) {
					var Xn;
					if (c) {
						var qn = 'oninput' in document;
						if (!qn) {
							var Jn = document.createElement('div');
							Jn.setAttribute('oninput', 'return;'),
								(qn = 'function' === typeof Jn.oninput);
						}
						Xn = qn;
					} else Xn = !1;
					Wn =
						Xn &&
						(!document.documentMode || 9 < document.documentMode);
				}
				function Kn() {
					Un &&
						(Un.detachEvent('onpropertychange', Zn),
						(Yn = Un = null));
				}
				function Zn(e) {
					if ('value' === e.propertyName && Hn(Yn)) {
						var t = [];
						Vn(t, Yn, e, we(e)), Me(Qn, t);
					}
				}
				function $n(e, t, n) {
					'focusin' === e
						? (Kn(),
							(Yn = n),
							(Un = t).attachEvent('onpropertychange', Zn))
						: 'focusout' === e && Kn();
				}
				function er(e) {
					if (
						'selectionchange' === e ||
						'keyup' === e ||
						'keydown' === e
					)
						return Hn(Yn);
				}
				function tr(e, t) {
					if ('click' === e) return Hn(t);
				}
				function nr(e, t) {
					if ('input' === e || 'change' === e) return Hn(t);
				}
				var rr =
					'function' === typeof Object.is
						? Object.is
						: function (e, t) {
								return (
									(e === t && (0 !== e || 1 / e === 1 / t)) ||
									(e !== e && t !== t)
								);
							};
				function ir(e, t) {
					if (rr(e, t)) return !0;
					if (
						'object' !== typeof e ||
						null === e ||
						'object' !== typeof t ||
						null === t
					)
						return !1;
					var n = Object.keys(e),
						r = Object.keys(t);
					if (n.length !== r.length) return !1;
					for (r = 0; r < n.length; r++) {
						var i = n[r];
						if (!d.call(t, i) || !rr(e[i], t[i])) return !1;
					}
					return !0;
				}
				function or(e) {
					for (; e && e.firstChild; ) e = e.firstChild;
					return e;
				}
				function ar(e, t) {
					var n,
						r = or(e);
					for (e = 0; r; ) {
						if (3 === r.nodeType) {
							if (
								((n = e + r.textContent.length),
								e <= t && n >= t)
							)
								return { node: r, offset: t - e };
							e = n;
						}
						e: {
							for (; r; ) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e;
								}
								r = r.parentNode;
							}
							r = void 0;
						}
						r = or(r);
					}
				}
				function sr(e, t) {
					return (
						!(!e || !t) &&
						(e === t ||
							((!e || 3 !== e.nodeType) &&
								(t && 3 === t.nodeType
									? sr(e, t.parentNode)
									: 'contains' in e
										? e.contains(t)
										: !!e.compareDocumentPosition &&
											!!(
												16 &
												e.compareDocumentPosition(t)
											))))
					);
				}
				function lr() {
					for (
						var e = window, t = X();
						t instanceof e.HTMLIFrameElement;

					) {
						try {
							var n =
								'string' ===
								typeof t.contentWindow.location.href;
						} catch (r) {
							n = !1;
						}
						if (!n) break;
						t = X((e = t.contentWindow).document);
					}
					return t;
				}
				function ur(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return (
						t &&
						(('input' === t &&
							('text' === e.type ||
								'search' === e.type ||
								'tel' === e.type ||
								'url' === e.type ||
								'password' === e.type)) ||
							'textarea' === t ||
							'true' === e.contentEditable)
					);
				}
				function cr(e) {
					var t = lr(),
						n = e.focusedElem,
						r = e.selectionRange;
					if (
						t !== n &&
						n &&
						n.ownerDocument &&
						sr(n.ownerDocument.documentElement, n)
					) {
						if (null !== r && ur(n))
							if (
								((t = r.start),
								void 0 === (e = r.end) && (e = t),
								'selectionStart' in n)
							)
								(n.selectionStart = t),
									(n.selectionEnd = Math.min(
										e,
										n.value.length,
									));
							else if (
								(e =
									((t = n.ownerDocument || document) &&
										t.defaultView) ||
									window).getSelection
							) {
								e = e.getSelection();
								var i = n.textContent.length,
									o = Math.min(r.start, i);
								(r = void 0 === r.end ? o : Math.min(r.end, i)),
									!e.extend &&
										o > r &&
										((i = r), (r = o), (o = i)),
									(i = ar(n, o));
								var a = ar(n, r);
								i &&
									a &&
									(1 !== e.rangeCount ||
										e.anchorNode !== i.node ||
										e.anchorOffset !== i.offset ||
										e.focusNode !== a.node ||
										e.focusOffset !== a.offset) &&
									((t = t.createRange()).setStart(
										i.node,
										i.offset,
									),
									e.removeAllRanges(),
									o > r
										? (e.addRange(t),
											e.extend(a.node, a.offset))
										: (t.setEnd(a.node, a.offset),
											e.addRange(t)));
							}
						for (t = [], e = n; (e = e.parentNode); )
							1 === e.nodeType &&
								t.push({
									element: e,
									left: e.scrollLeft,
									top: e.scrollTop,
								});
						for (
							'function' === typeof n.focus && n.focus(), n = 0;
							n < t.length;
							n++
						)
							((e = t[n]).element.scrollLeft = e.left),
								(e.element.scrollTop = e.top);
					}
				}
				var dr =
						c &&
						'documentMode' in document &&
						11 >= document.documentMode,
					fr = null,
					hr = null,
					pr = null,
					mr = !1;
				function gr(e, t, n) {
					var r =
						n.window === n
							? n.document
							: 9 === n.nodeType
								? n
								: n.ownerDocument;
					mr ||
						null == fr ||
						fr !== X(r) ||
						('selectionStart' in (r = fr) && ur(r)
							? (r = {
									start: r.selectionStart,
									end: r.selectionEnd,
								})
							: (r = {
									anchorNode: (r = (
										(r.ownerDocument &&
											r.ownerDocument.defaultView) ||
										window
									).getSelection()).anchorNode,
									anchorOffset: r.anchorOffset,
									focusNode: r.focusNode,
									focusOffset: r.focusOffset,
								}),
						(pr && ir(pr, r)) ||
							((pr = r),
							0 < (r = Ur(hr, 'onSelect')).length &&
								((t = new un('onSelect', 'select', null, t, n)),
								e.push({ event: t, listeners: r }),
								(t.target = fr))));
				}
				function vr(e, t) {
					var n = {};
					return (
						(n[e.toLowerCase()] = t.toLowerCase()),
						(n['Webkit' + e] = 'webkit' + t),
						(n['Moz' + e] = 'moz' + t),
						n
					);
				}
				var Ar = {
						animationend: vr('Animation', 'AnimationEnd'),
						animationiteration: vr(
							'Animation',
							'AnimationIteration',
						),
						animationstart: vr('Animation', 'AnimationStart'),
						transitionend: vr('Transition', 'TransitionEnd'),
					},
					yr = {},
					wr = {};
				function br(e) {
					if (yr[e]) return yr[e];
					if (!Ar[e]) return e;
					var t,
						n = Ar[e];
					for (t in n)
						if (n.hasOwnProperty(t) && t in wr)
							return (yr[e] = n[t]);
					return e;
				}
				c &&
					((wr = document.createElement('div').style),
					'AnimationEvent' in window ||
						(delete Ar.animationend.animation,
						delete Ar.animationiteration.animation,
						delete Ar.animationstart.animation),
					'TransitionEvent' in window ||
						delete Ar.transitionend.transition);
				var xr = br('animationend'),
					Er = br('animationiteration'),
					Cr = br('animationstart'),
					kr = br('transitionend'),
					Sr = new Map(),
					Tr =
						'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
							' ',
						);
				function _r(e, t) {
					Sr.set(e, t), l(t, [e]);
				}
				for (var Pr = 0; Pr < Tr.length; Pr++) {
					var Mr = Tr[Pr];
					_r(
						Mr.toLowerCase(),
						'on' + (Mr[0].toUpperCase() + Mr.slice(1)),
					);
				}
				_r(xr, 'onAnimationEnd'),
					_r(Er, 'onAnimationIteration'),
					_r(Cr, 'onAnimationStart'),
					_r('dblclick', 'onDoubleClick'),
					_r('focusin', 'onFocus'),
					_r('focusout', 'onBlur'),
					_r(kr, 'onTransitionEnd'),
					u('onMouseEnter', ['mouseout', 'mouseover']),
					u('onMouseLeave', ['mouseout', 'mouseover']),
					u('onPointerEnter', ['pointerout', 'pointerover']),
					u('onPointerLeave', ['pointerout', 'pointerover']),
					l(
						'onChange',
						'change click focusin focusout input keydown keyup selectionchange'.split(
							' ',
						),
					),
					l(
						'onSelect',
						'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
							' ',
						),
					),
					l('onBeforeInput', [
						'compositionend',
						'keypress',
						'textInput',
						'paste',
					]),
					l(
						'onCompositionEnd',
						'compositionend focusout keydown keypress keyup mousedown'.split(
							' ',
						),
					),
					l(
						'onCompositionStart',
						'compositionstart focusout keydown keypress keyup mousedown'.split(
							' ',
						),
					),
					l(
						'onCompositionUpdate',
						'compositionupdate focusout keydown keypress keyup mousedown'.split(
							' ',
						),
					);
				var Dr =
						'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
							' ',
						),
					Or = new Set(
						'cancel close invalid load scroll toggle'
							.split(' ')
							.concat(Dr),
					);
				function Rr(e, t, n) {
					var r = e.type || 'unknown-event';
					(e.currentTarget = n),
						(function (e, t, n, r, i, a, s, l, u) {
							if ((ze.apply(this, arguments), Le)) {
								if (!Le) throw Error(o(198));
								var c = Ie;
								(Le = !1),
									(Ie = null),
									Fe || ((Fe = !0), (je = c));
							}
						})(r, t, void 0, e),
						(e.currentTarget = null);
				}
				function Br(e, t) {
					t = 0 !== (4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							i = r.event;
						r = r.listeners;
						e: {
							var o = void 0;
							if (t)
								for (var a = r.length - 1; 0 <= a; a--) {
									var s = r[a],
										l = s.instance,
										u = s.currentTarget;
									if (
										((s = s.listener),
										l !== o && i.isPropagationStopped())
									)
										break e;
									Rr(i, s, u), (o = l);
								}
							else
								for (a = 0; a < r.length; a++) {
									if (
										((l = (s = r[a]).instance),
										(u = s.currentTarget),
										(s = s.listener),
										l !== o && i.isPropagationStopped())
									)
										break e;
									Rr(i, s, u), (o = l);
								}
						}
					}
					if (Fe) throw ((e = je), (Fe = !1), (je = null), e);
				}
				function Lr(e, t) {
					var n = t[di];
					void 0 === n && (n = t[di] = new Set());
					var r = e + '__bubble';
					n.has(r) || (Nr(t, e, 2, !1), n.add(r));
				}
				function Ir(e, t, n) {
					var r = 0;
					t && (r |= 4), Nr(n, e, r, t);
				}
				var Fr =
					'_reactListening' + Math.random().toString(36).slice(2);
				function jr(e) {
					if (!e[Fr]) {
						(e[Fr] = !0),
							a.forEach(function (t) {
								'selectionchange' !== t &&
									(Or.has(t) || Ir(t, !1, e), Ir(t, !0, e));
							});
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t ||
							t[Fr] ||
							((t[Fr] = !0), Ir('selectionchange', !1, t));
					}
				}
				function Nr(e, t, n, r) {
					switch (qt(t)) {
						case 1:
							var i = Qt;
							break;
						case 4:
							i = Ht;
							break;
						default:
							i = Gt;
					}
					(n = i.bind(null, t, n, e)),
						(i = void 0),
						!Oe ||
							('touchstart' !== t &&
								'touchmove' !== t &&
								'wheel' !== t) ||
							(i = !0),
						r
							? void 0 !== i
								? e.addEventListener(t, n, {
										capture: !0,
										passive: i,
									})
								: e.addEventListener(t, n, !0)
							: void 0 !== i
								? e.addEventListener(t, n, { passive: i })
								: e.addEventListener(t, n, !1);
				}
				function zr(e, t, n, r, i) {
					var o = r;
					if (0 === (1 & t) && 0 === (2 & t) && null !== r)
						e: for (;;) {
							if (null === r) return;
							var a = r.tag;
							if (3 === a || 4 === a) {
								var s = r.stateNode.containerInfo;
								if (
									s === i ||
									(8 === s.nodeType && s.parentNode === i)
								)
									break;
								if (4 === a)
									for (a = r.return; null !== a; ) {
										var l = a.tag;
										if (
											(3 === l || 4 === l) &&
											((l = a.stateNode.containerInfo) ===
												i ||
												(8 === l.nodeType &&
													l.parentNode === i))
										)
											return;
										a = a.return;
									}
								for (; null !== s; ) {
									if (null === (a = pi(s))) return;
									if (5 === (l = a.tag) || 6 === l) {
										r = o = a;
										continue e;
									}
									s = s.parentNode;
								}
							}
							r = r.return;
						}
					Me(function () {
						var r = o,
							i = we(n),
							a = [];
						e: {
							var s = Sr.get(e);
							if (void 0 !== s) {
								var l = un,
									u = e;
								switch (e) {
									case 'keypress':
										if (0 === en(n)) break e;
									case 'keydown':
									case 'keyup':
										l = Cn;
										break;
									case 'focusin':
										(u = 'focus'), (l = mn);
										break;
									case 'focusout':
										(u = 'blur'), (l = mn);
										break;
									case 'beforeblur':
									case 'afterblur':
										l = mn;
										break;
									case 'click':
										if (2 === n.button) break e;
									case 'auxclick':
									case 'dblclick':
									case 'mousedown':
									case 'mousemove':
									case 'mouseup':
									case 'mouseout':
									case 'mouseover':
									case 'contextmenu':
										l = hn;
										break;
									case 'drag':
									case 'dragend':
									case 'dragenter':
									case 'dragexit':
									case 'dragleave':
									case 'dragover':
									case 'dragstart':
									case 'drop':
										l = pn;
										break;
									case 'touchcancel':
									case 'touchend':
									case 'touchmove':
									case 'touchstart':
										l = Sn;
										break;
									case xr:
									case Er:
									case Cr:
										l = gn;
										break;
									case kr:
										l = Tn;
										break;
									case 'scroll':
										l = dn;
										break;
									case 'wheel':
										l = _n;
										break;
									case 'copy':
									case 'cut':
									case 'paste':
										l = vn;
										break;
									case 'gotpointercapture':
									case 'lostpointercapture':
									case 'pointercancel':
									case 'pointerdown':
									case 'pointermove':
									case 'pointerout':
									case 'pointerover':
									case 'pointerup':
										l = kn;
								}
								var c = 0 !== (4 & t),
									d = !c && 'scroll' === e,
									f = c
										? null !== s
											? s + 'Capture'
											: null
										: s;
								c = [];
								for (var h, p = r; null !== p; ) {
									var m = (h = p).stateNode;
									if (
										(5 === h.tag &&
											null !== m &&
											((h = m),
											null !== f &&
												null != (m = De(p, f)) &&
												c.push(Vr(p, m, h))),
										d)
									)
										break;
									p = p.return;
								}
								0 < c.length &&
									((s = new l(s, u, null, n, i)),
									a.push({ event: s, listeners: c }));
							}
						}
						if (0 === (7 & t)) {
							if (
								((l = 'mouseout' === e || 'pointerout' === e),
								(!(s =
									'mouseover' === e || 'pointerover' === e) ||
									n === ye ||
									!(u = n.relatedTarget || n.fromElement) ||
									(!pi(u) && !u[ci])) &&
									(l || s) &&
									((s =
										i.window === i
											? i
											: (s = i.ownerDocument)
												? s.defaultView ||
													s.parentWindow
												: window),
									l
										? ((l = r),
											null !==
												(u = (u =
													n.relatedTarget ||
													n.toElement)
													? pi(u)
													: null) &&
												(u !== (d = Ve(u)) ||
													(5 !== u.tag &&
														6 !== u.tag)) &&
												(u = null))
										: ((l = null), (u = r)),
									l !== u))
							) {
								if (
									((c = hn),
									(m = 'onMouseLeave'),
									(f = 'onMouseEnter'),
									(p = 'mouse'),
									('pointerout' !== e &&
										'pointerover' !== e) ||
										((c = kn),
										(m = 'onPointerLeave'),
										(f = 'onPointerEnter'),
										(p = 'pointer')),
									(d = null == l ? s : gi(l)),
									(h = null == u ? s : gi(u)),
									((s = new c(
										m,
										p + 'leave',
										l,
										n,
										i,
									)).target = d),
									(s.relatedTarget = h),
									(m = null),
									pi(i) === r &&
										(((c = new c(
											f,
											p + 'enter',
											u,
											n,
											i,
										)).target = h),
										(c.relatedTarget = d),
										(m = c)),
									(d = m),
									l && u)
								)
									e: {
										for (
											f = u, p = 0, h = c = l;
											h;
											h = Yr(h)
										)
											p++;
										for (h = 0, m = f; m; m = Yr(m)) h++;
										for (; 0 < p - h; ) (c = Yr(c)), p--;
										for (; 0 < h - p; ) (f = Yr(f)), h--;
										for (; p--; ) {
											if (
												c === f ||
												(null !== f &&
													c === f.alternate)
											)
												break e;
											(c = Yr(c)), (f = Yr(f));
										}
										c = null;
									}
								else c = null;
								null !== l && Qr(a, s, l, c, !1),
									null !== u &&
										null !== d &&
										Qr(a, d, u, c, !0);
							}
							if (
								'select' ===
									(l =
										(s = r ? gi(r) : window).nodeName &&
										s.nodeName.toLowerCase()) ||
								('input' === l && 'file' === s.type)
							)
								var g = Gn;
							else if (zn(s))
								if (Wn) g = nr;
								else {
									g = er;
									var v = $n;
								}
							else
								(l = s.nodeName) &&
									'input' === l.toLowerCase() &&
									('checkbox' === s.type ||
										'radio' === s.type) &&
									(g = tr);
							switch (
								(g && (g = g(e, r))
									? Vn(a, g, n, i)
									: (v && v(e, s, r),
										'focusout' === e &&
											(v = s._wrapperState) &&
											v.controlled &&
											'number' === s.type &&
											ee(s, 'number', s.value)),
								(v = r ? gi(r) : window),
								e)
							) {
								case 'focusin':
									(zn(v) || 'true' === v.contentEditable) &&
										((fr = v), (hr = r), (pr = null));
									break;
								case 'focusout':
									pr = hr = fr = null;
									break;
								case 'mousedown':
									mr = !0;
									break;
								case 'contextmenu':
								case 'mouseup':
								case 'dragend':
									(mr = !1), gr(a, n, i);
									break;
								case 'selectionchange':
									if (dr) break;
								case 'keydown':
								case 'keyup':
									gr(a, n, i);
							}
							var A;
							if (Mn)
								e: {
									switch (e) {
										case 'compositionstart':
											var y = 'onCompositionStart';
											break e;
										case 'compositionend':
											y = 'onCompositionEnd';
											break e;
										case 'compositionupdate':
											y = 'onCompositionUpdate';
											break e;
									}
									y = void 0;
								}
							else
								jn
									? In(e, n) && (y = 'onCompositionEnd')
									: 'keydown' === e &&
										229 === n.keyCode &&
										(y = 'onCompositionStart');
							y &&
								(Rn &&
									'ko' !== n.locale &&
									(jn || 'onCompositionStart' !== y
										? 'onCompositionEnd' === y &&
											jn &&
											(A = $t())
										: ((Kt =
												'value' in (Jt = i)
													? Jt.value
													: Jt.textContent),
											(jn = !0))),
								0 < (v = Ur(r, y)).length &&
									((y = new An(y, e, null, n, i)),
									a.push({ event: y, listeners: v }),
									A
										? (y.data = A)
										: null !== (A = Fn(n)) &&
											(y.data = A))),
								(A = On
									? (function (e, t) {
											switch (e) {
												case 'compositionend':
													return Fn(t);
												case 'keypress':
													return 32 !== t.which
														? null
														: ((Ln = !0), Bn);
												case 'textInput':
													return (e = t.data) ===
														Bn && Ln
														? null
														: e;
												default:
													return null;
											}
										})(e, n)
									: (function (e, t) {
											if (jn)
												return 'compositionend' === e ||
													(!Mn && In(e, t))
													? ((e = $t()),
														(Zt = Kt = Jt = null),
														(jn = !1),
														e)
													: null;
											switch (e) {
												case 'paste':
												default:
													return null;
												case 'keypress':
													if (
														!(
															t.ctrlKey ||
															t.altKey ||
															t.metaKey
														) ||
														(t.ctrlKey && t.altKey)
													) {
														if (
															t.char &&
															1 < t.char.length
														)
															return t.char;
														if (t.which)
															return String.fromCharCode(
																t.which,
															);
													}
													return null;
												case 'compositionend':
													return Rn &&
														'ko' !== t.locale
														? null
														: t.data;
											}
										})(e, n)) &&
									0 < (r = Ur(r, 'onBeforeInput')).length &&
									((i = new An(
										'onBeforeInput',
										'beforeinput',
										null,
										n,
										i,
									)),
									a.push({ event: i, listeners: r }),
									(i.data = A));
						}
						Br(a, t);
					});
				}
				function Vr(e, t, n) {
					return { instance: e, listener: t, currentTarget: n };
				}
				function Ur(e, t) {
					for (var n = t + 'Capture', r = []; null !== e; ) {
						var i = e,
							o = i.stateNode;
						5 === i.tag &&
							null !== o &&
							((i = o),
							null != (o = De(e, n)) && r.unshift(Vr(e, o, i)),
							null != (o = De(e, t)) && r.push(Vr(e, o, i))),
							(e = e.return);
					}
					return r;
				}
				function Yr(e) {
					if (null === e) return null;
					do {
						e = e.return;
					} while (e && 5 !== e.tag);
					return e || null;
				}
				function Qr(e, t, n, r, i) {
					for (
						var o = t._reactName, a = [];
						null !== n && n !== r;

					) {
						var s = n,
							l = s.alternate,
							u = s.stateNode;
						if (null !== l && l === r) break;
						5 === s.tag &&
							null !== u &&
							((s = u),
							i
								? null != (l = De(n, o)) &&
									a.unshift(Vr(n, l, s))
								: i ||
									(null != (l = De(n, o)) &&
										a.push(Vr(n, l, s)))),
							(n = n.return);
					}
					0 !== a.length && e.push({ event: t, listeners: a });
				}
				var Hr = /\r\n?/g,
					Gr = /\u0000|\uFFFD/g;
				function Wr(e) {
					return ('string' === typeof e ? e : '' + e)
						.replace(Hr, '\n')
						.replace(Gr, '');
				}
				function Xr(e, t, n) {
					if (((t = Wr(t)), Wr(e) !== t && n)) throw Error(o(425));
				}
				function qr() {}
				var Jr = null,
					Kr = null;
				function Zr(e, t) {
					return (
						'textarea' === e ||
						'noscript' === e ||
						'string' === typeof t.children ||
						'number' === typeof t.children ||
						('object' === typeof t.dangerouslySetInnerHTML &&
							null !== t.dangerouslySetInnerHTML &&
							null != t.dangerouslySetInnerHTML.__html)
					);
				}
				var $r = 'function' === typeof setTimeout ? setTimeout : void 0,
					ei =
						'function' === typeof clearTimeout
							? clearTimeout
							: void 0,
					ti = 'function' === typeof Promise ? Promise : void 0,
					ni =
						'function' === typeof queueMicrotask
							? queueMicrotask
							: 'undefined' !== typeof ti
								? function (e) {
										return ti
											.resolve(null)
											.then(e)
											.catch(ri);
									}
								: $r;
				function ri(e) {
					setTimeout(function () {
						throw e;
					});
				}
				function ii(e, t) {
					var n = t,
						r = 0;
					do {
						var i = n.nextSibling;
						if ((e.removeChild(n), i && 8 === i.nodeType))
							if ('/$' === (n = i.data)) {
								if (0 === r)
									return e.removeChild(i), void Vt(t);
								r--;
							} else
								('$' !== n && '$?' !== n && '$!' !== n) || r++;
						n = i;
					} while (n);
					Vt(t);
				}
				function oi(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if (
								'$' === (t = e.data) ||
								'$!' === t ||
								'$?' === t
							)
								break;
							if ('/$' === t) return null;
						}
					}
					return e;
				}
				function ai(e) {
					e = e.previousSibling;
					for (var t = 0; e; ) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ('$' === n || '$!' === n || '$?' === n) {
								if (0 === t) return e;
								t--;
							} else '/$' === n && t++;
						}
						e = e.previousSibling;
					}
					return null;
				}
				var si = Math.random().toString(36).slice(2),
					li = '__reactFiber$' + si,
					ui = '__reactProps$' + si,
					ci = '__reactContainer$' + si,
					di = '__reactEvents$' + si,
					fi = '__reactListeners$' + si,
					hi = '__reactHandles$' + si;
				function pi(e) {
					var t = e[li];
					if (t) return t;
					for (var n = e.parentNode; n; ) {
						if ((t = n[ci] || n[li])) {
							if (
								((n = t.alternate),
								null !== t.child ||
									(null !== n && null !== n.child))
							)
								for (e = ai(e); null !== e; ) {
									if ((n = e[li])) return n;
									e = ai(e);
								}
							return t;
						}
						n = (e = n).parentNode;
					}
					return null;
				}
				function mi(e) {
					return !(e = e[li] || e[ci]) ||
						(5 !== e.tag &&
							6 !== e.tag &&
							13 !== e.tag &&
							3 !== e.tag)
						? null
						: e;
				}
				function gi(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(o(33));
				}
				function vi(e) {
					return e[ui] || null;
				}
				var Ai = [],
					yi = -1;
				function wi(e) {
					return { current: e };
				}
				function bi(e) {
					0 > yi || ((e.current = Ai[yi]), (Ai[yi] = null), yi--);
				}
				function xi(e, t) {
					yi++, (Ai[yi] = e.current), (e.current = t);
				}
				var Ei = {},
					Ci = wi(Ei),
					ki = wi(!1),
					Si = Ei;
				function Ti(e, t) {
					var n = e.type.contextTypes;
					if (!n) return Ei;
					var r = e.stateNode;
					if (
						r &&
						r.__reactInternalMemoizedUnmaskedChildContext === t
					)
						return r.__reactInternalMemoizedMaskedChildContext;
					var i,
						o = {};
					for (i in n) o[i] = t[i];
					return (
						r &&
							(((e =
								e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
								t),
							(e.__reactInternalMemoizedMaskedChildContext = o)),
						o
					);
				}
				function _i(e) {
					return null !== (e = e.childContextTypes) && void 0 !== e;
				}
				function Pi() {
					bi(ki), bi(Ci);
				}
				function Mi(e, t, n) {
					if (Ci.current !== Ei) throw Error(o(168));
					xi(Ci, t), xi(ki, n);
				}
				function Di(e, t, n) {
					var r = e.stateNode;
					if (
						((t = t.childContextTypes),
						'function' !== typeof r.getChildContext)
					)
						return n;
					for (var i in (r = r.getChildContext()))
						if (!(i in t))
							throw Error(o(108, Y(e) || 'Unknown', i));
					return F({}, n, r);
				}
				function Oi(e) {
					return (
						(e =
							((e = e.stateNode) &&
								e.__reactInternalMemoizedMergedChildContext) ||
							Ei),
						(Si = Ci.current),
						xi(Ci, e),
						xi(ki, ki.current),
						!0
					);
				}
				function Ri(e, t, n) {
					var r = e.stateNode;
					if (!r) throw Error(o(169));
					n
						? ((e = Di(e, t, Si)),
							(r.__reactInternalMemoizedMergedChildContext = e),
							bi(ki),
							bi(Ci),
							xi(Ci, e))
						: bi(ki),
						xi(ki, n);
				}
				var Bi = null,
					Li = !1,
					Ii = !1;
				function Fi(e) {
					null === Bi ? (Bi = [e]) : Bi.push(e);
				}
				function ji() {
					if (!Ii && null !== Bi) {
						Ii = !0;
						var e = 0,
							t = At;
						try {
							var n = Bi;
							for (At = 1; e < n.length; e++) {
								var r = n[e];
								do {
									r = r(!0);
								} while (null !== r);
							}
							(Bi = null), (Li = !1);
						} catch (i) {
							throw (
								(null !== Bi && (Bi = Bi.slice(e + 1)),
								Ge(Ze, ji),
								i)
							);
						} finally {
							(At = t), (Ii = !1);
						}
					}
					return null;
				}
				var Ni = [],
					zi = 0,
					Vi = null,
					Ui = 0,
					Yi = [],
					Qi = 0,
					Hi = null,
					Gi = 1,
					Wi = '';
				function Xi(e, t) {
					(Ni[zi++] = Ui), (Ni[zi++] = Vi), (Vi = e), (Ui = t);
				}
				function qi(e, t, n) {
					(Yi[Qi++] = Gi), (Yi[Qi++] = Wi), (Yi[Qi++] = Hi), (Hi = e);
					var r = Gi;
					e = Wi;
					var i = 32 - ot(r) - 1;
					(r &= ~(1 << i)), (n += 1);
					var o = 32 - ot(t) + i;
					if (30 < o) {
						var a = i - (i % 5);
						(o = (r & ((1 << a) - 1)).toString(32)),
							(r >>= a),
							(i -= a),
							(Gi = (1 << (32 - ot(t) + i)) | (n << i) | r),
							(Wi = o + e);
					} else (Gi = (1 << o) | (n << i) | r), (Wi = e);
				}
				function Ji(e) {
					null !== e.return && (Xi(e, 1), qi(e, 1, 0));
				}
				function Ki(e) {
					for (; e === Vi; )
						(Vi = Ni[--zi]),
							(Ni[zi] = null),
							(Ui = Ni[--zi]),
							(Ni[zi] = null);
					for (; e === Hi; )
						(Hi = Yi[--Qi]),
							(Yi[Qi] = null),
							(Wi = Yi[--Qi]),
							(Yi[Qi] = null),
							(Gi = Yi[--Qi]),
							(Yi[Qi] = null);
				}
				var Zi = null,
					$i = null,
					eo = !1,
					to = null;
				function no(e, t) {
					var n = _u(5, null, null, 0);
					(n.elementType = 'DELETED'),
						(n.stateNode = t),
						(n.return = e),
						null === (t = e.deletions)
							? ((e.deletions = [n]), (e.flags |= 16))
							: t.push(n);
				}
				function ro(e, t) {
					switch (e.tag) {
						case 5:
							var n = e.type;
							return (
								null !==
									(t =
										1 !== t.nodeType ||
										n.toLowerCase() !==
											t.nodeName.toLowerCase()
											? null
											: t) &&
								((e.stateNode = t),
								(Zi = e),
								($i = oi(t.firstChild)),
								!0)
							);
						case 6:
							return (
								null !==
									(t =
										'' === e.pendingProps ||
										3 !== t.nodeType
											? null
											: t) &&
								((e.stateNode = t), (Zi = e), ($i = null), !0)
							);
						case 13:
							return (
								null !== (t = 8 !== t.nodeType ? null : t) &&
								((n =
									null !== Hi
										? { id: Gi, overflow: Wi }
										: null),
								(e.memoizedState = {
									dehydrated: t,
									treeContext: n,
									retryLane: 1073741824,
								}),
								((n = _u(18, null, null, 0)).stateNode = t),
								(n.return = e),
								(e.child = n),
								(Zi = e),
								($i = null),
								!0)
							);
						default:
							return !1;
					}
				}
				function io(e) {
					return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
				}
				function oo(e) {
					if (eo) {
						var t = $i;
						if (t) {
							var n = t;
							if (!ro(e, t)) {
								if (io(e)) throw Error(o(418));
								t = oi(n.nextSibling);
								var r = Zi;
								t && ro(e, t)
									? no(r, n)
									: ((e.flags = (-4097 & e.flags) | 2),
										(eo = !1),
										(Zi = e));
							}
						} else {
							if (io(e)) throw Error(o(418));
							(e.flags = (-4097 & e.flags) | 2),
								(eo = !1),
								(Zi = e);
						}
					}
				}
				function ao(e) {
					for (
						e = e.return;
						null !== e &&
						5 !== e.tag &&
						3 !== e.tag &&
						13 !== e.tag;

					)
						e = e.return;
					Zi = e;
				}
				function so(e) {
					if (e !== Zi) return !1;
					if (!eo) return ao(e), (eo = !0), !1;
					var t;
					if (
						((t = 3 !== e.tag) &&
							!(t = 5 !== e.tag) &&
							(t =
								'head' !== (t = e.type) &&
								'body' !== t &&
								!Zr(e.type, e.memoizedProps)),
						t && (t = $i))
					) {
						if (io(e)) throw (lo(), Error(o(418)));
						for (; t; ) no(e, t), (t = oi(t.nextSibling));
					}
					if ((ao(e), 13 === e.tag)) {
						if (
							!(e =
								null !== (e = e.memoizedState)
									? e.dehydrated
									: null)
						)
							throw Error(o(317));
						e: {
							for (e = e.nextSibling, t = 0; e; ) {
								if (8 === e.nodeType) {
									var n = e.data;
									if ('/$' === n) {
										if (0 === t) {
											$i = oi(e.nextSibling);
											break e;
										}
										t--;
									} else
										('$' !== n &&
											'$!' !== n &&
											'$?' !== n) ||
											t++;
								}
								e = e.nextSibling;
							}
							$i = null;
						}
					} else $i = Zi ? oi(e.stateNode.nextSibling) : null;
					return !0;
				}
				function lo() {
					for (var e = $i; e; ) e = oi(e.nextSibling);
				}
				function uo() {
					($i = Zi = null), (eo = !1);
				}
				function co(e) {
					null === to ? (to = [e]) : to.push(e);
				}
				var fo = w.ReactCurrentBatchConfig;
				function ho(e, t) {
					if (e && e.defaultProps) {
						for (var n in ((t = F({}, t)), (e = e.defaultProps)))
							void 0 === t[n] && (t[n] = e[n]);
						return t;
					}
					return t;
				}
				var po = wi(null),
					mo = null,
					go = null,
					vo = null;
				function Ao() {
					vo = go = mo = null;
				}
				function yo(e) {
					var t = po.current;
					bi(po), (e._currentValue = t);
				}
				function wo(e, t, n) {
					for (; null !== e; ) {
						var r = e.alternate;
						if (
							((e.childLanes & t) !== t
								? ((e.childLanes |= t),
									null !== r && (r.childLanes |= t))
								: null !== r &&
									(r.childLanes & t) !== t &&
									(r.childLanes |= t),
							e === n)
						)
							break;
						e = e.return;
					}
				}
				function bo(e, t) {
					(mo = e),
						(vo = go = null),
						null !== (e = e.dependencies) &&
							null !== e.firstContext &&
							(0 !== (e.lanes & t) && (gs = !0),
							(e.firstContext = null));
				}
				function xo(e) {
					var t = e._currentValue;
					if (vo !== e)
						if (
							((e = { context: e, memoizedValue: t, next: null }),
							null === go)
						) {
							if (null === mo) throw Error(o(308));
							(go = e),
								(mo.dependencies = {
									lanes: 0,
									firstContext: e,
								});
						} else go = go.next = e;
					return t;
				}
				var Eo = null;
				function Co(e) {
					null === Eo ? (Eo = [e]) : Eo.push(e);
				}
				function ko(e, t, n, r) {
					var i = t.interleaved;
					return (
						null === i
							? ((n.next = n), Co(t))
							: ((n.next = i.next), (i.next = n)),
						(t.interleaved = n),
						So(e, r)
					);
				}
				function So(e, t) {
					e.lanes |= t;
					var n = e.alternate;
					for (
						null !== n && (n.lanes |= t), n = e, e = e.return;
						null !== e;

					)
						(e.childLanes |= t),
							null !== (n = e.alternate) && (n.childLanes |= t),
							(n = e),
							(e = e.return);
					return 3 === n.tag ? n.stateNode : null;
				}
				var To = !1;
				function _o(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: { pending: null, interleaved: null, lanes: 0 },
						effects: null,
					};
				}
				function Po(e, t) {
					(e = e.updateQueue),
						t.updateQueue === e &&
							(t.updateQueue = {
								baseState: e.baseState,
								firstBaseUpdate: e.firstBaseUpdate,
								lastBaseUpdate: e.lastBaseUpdate,
								shared: e.shared,
								effects: e.effects,
							});
				}
				function Mo(e, t) {
					return {
						eventTime: e,
						lane: t,
						tag: 0,
						payload: null,
						callback: null,
						next: null,
					};
				}
				function Do(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (((r = r.shared), 0 !== (2 & kl))) {
						var i = r.pending;
						return (
							null === i
								? (t.next = t)
								: ((t.next = i.next), (i.next = t)),
							(r.pending = t),
							So(e, n)
						);
					}
					return (
						null === (i = r.interleaved)
							? ((t.next = t), Co(r))
							: ((t.next = i.next), (i.next = t)),
						(r.interleaved = t),
						So(e, n)
					);
				}
				function Oo(e, t, n) {
					if (
						null !== (t = t.updateQueue) &&
						((t = t.shared), 0 !== (4194240 & n))
					) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
					}
				}
				function Ro(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var i = null,
							o = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var a = {
									eventTime: n.eventTime,
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: n.callback,
									next: null,
								};
								null === o ? (i = o = a) : (o = o.next = a),
									(n = n.next);
							} while (null !== n);
							null === o ? (i = o = t) : (o = o.next = t);
						} else i = o = t;
						return (
							(n = {
								baseState: r.baseState,
								firstBaseUpdate: i,
								lastBaseUpdate: o,
								shared: r.shared,
								effects: r.effects,
							}),
							void (e.updateQueue = n)
						);
					}
					null === (e = n.lastBaseUpdate)
						? (n.firstBaseUpdate = t)
						: (e.next = t),
						(n.lastBaseUpdate = t);
				}
				function Bo(e, t, n, r) {
					var i = e.updateQueue;
					To = !1;
					var o = i.firstBaseUpdate,
						a = i.lastBaseUpdate,
						s = i.shared.pending;
					if (null !== s) {
						i.shared.pending = null;
						var l = s,
							u = l.next;
						(l.next = null),
							null === a ? (o = u) : (a.next = u),
							(a = l);
						var c = e.alternate;
						null !== c &&
							(s = (c = c.updateQueue).lastBaseUpdate) !== a &&
							(null === s
								? (c.firstBaseUpdate = u)
								: (s.next = u),
							(c.lastBaseUpdate = l));
					}
					if (null !== o) {
						var d = i.baseState;
						for (a = 0, c = u = l = null, s = o; ; ) {
							var f = s.lane,
								h = s.eventTime;
							if ((r & f) === f) {
								null !== c &&
									(c = c.next =
										{
											eventTime: h,
											lane: 0,
											tag: s.tag,
											payload: s.payload,
											callback: s.callback,
											next: null,
										});
								e: {
									var p = e,
										m = s;
									switch (((f = t), (h = n), m.tag)) {
										case 1:
											if (
												'function' ===
												typeof (p = m.payload)
											) {
												d = p.call(h, d, f);
												break e;
											}
											d = p;
											break e;
										case 3:
											p.flags = (-65537 & p.flags) | 128;
										case 0:
											if (
												null ===
													(f =
														'function' ===
														typeof (p = m.payload)
															? p.call(h, d, f)
															: p) ||
												void 0 === f
											)
												break e;
											d = F({}, d, f);
											break e;
										case 2:
											To = !0;
									}
								}
								null !== s.callback &&
									0 !== s.lane &&
									((e.flags |= 64),
									null === (f = i.effects)
										? (i.effects = [s])
										: f.push(s));
							} else
								(h = {
									eventTime: h,
									lane: f,
									tag: s.tag,
									payload: s.payload,
									callback: s.callback,
									next: null,
								}),
									null === c
										? ((u = c = h), (l = d))
										: (c = c.next = h),
									(a |= f);
							if (null === (s = s.next)) {
								if (null === (s = i.shared.pending)) break;
								(s = (f = s).next),
									(f.next = null),
									(i.lastBaseUpdate = f),
									(i.shared.pending = null);
							}
						}
						if (
							(null === c && (l = d),
							(i.baseState = l),
							(i.firstBaseUpdate = u),
							(i.lastBaseUpdate = c),
							null !== (t = i.shared.interleaved))
						) {
							i = t;
							do {
								(a |= i.lane), (i = i.next);
							} while (i !== t);
						} else null === o && (i.shared.lanes = 0);
						(Rl |= a), (e.lanes = a), (e.memoizedState = d);
					}
				}
				function Lo(e, t, n) {
					if (((e = t.effects), (t.effects = null), null !== e))
						for (t = 0; t < e.length; t++) {
							var r = e[t],
								i = r.callback;
							if (null !== i) {
								if (
									((r.callback = null),
									(r = n),
									'function' !== typeof i)
								)
									throw Error(o(191, i));
								i.call(r);
							}
						}
				}
				var Io = new r.Component().refs;
				function Fo(e, t, n, r) {
					(n =
						null === (n = n(r, (t = e.memoizedState))) ||
						void 0 === n
							? t
							: F({}, t, n)),
						(e.memoizedState = n),
						0 === e.lanes && (e.updateQueue.baseState = n);
				}
				var jo = {
					isMounted: function (e) {
						return !!(e = e._reactInternals) && Ve(e) === e;
					},
					enqueueSetState: function (e, t, n) {
						e = e._reactInternals;
						var r = Kl(),
							i = Zl(e),
							o = Mo(r, i);
						(o.payload = t),
							void 0 !== n && null !== n && (o.callback = n),
							null !== (t = Do(e, o, i)) &&
								($l(t, e, i, r), Oo(t, e, i));
					},
					enqueueReplaceState: function (e, t, n) {
						e = e._reactInternals;
						var r = Kl(),
							i = Zl(e),
							o = Mo(r, i);
						(o.tag = 1),
							(o.payload = t),
							void 0 !== n && null !== n && (o.callback = n),
							null !== (t = Do(e, o, i)) &&
								($l(t, e, i, r), Oo(t, e, i));
					},
					enqueueForceUpdate: function (e, t) {
						e = e._reactInternals;
						var n = Kl(),
							r = Zl(e),
							i = Mo(n, r);
						(i.tag = 2),
							void 0 !== t && null !== t && (i.callback = t),
							null !== (t = Do(e, i, r)) &&
								($l(t, e, r, n), Oo(t, e, r));
					},
				};
				function No(e, t, n, r, i, o, a) {
					return 'function' ===
						typeof (e = e.stateNode).shouldComponentUpdate
						? e.shouldComponentUpdate(r, o, a)
						: !t.prototype ||
								!t.prototype.isPureReactComponent ||
								!ir(n, r) ||
								!ir(i, o);
				}
				function zo(e, t, n) {
					var r = !1,
						i = Ei,
						o = t.contextType;
					return (
						'object' === typeof o && null !== o
							? (o = xo(o))
							: ((i = _i(t) ? Si : Ci.current),
								(o = (r =
									null !== (r = t.contextTypes) &&
									void 0 !== r)
									? Ti(e, i)
									: Ei)),
						(t = new t(n, o)),
						(e.memoizedState =
							null !== t.state && void 0 !== t.state
								? t.state
								: null),
						(t.updater = jo),
						(e.stateNode = t),
						(t._reactInternals = e),
						r &&
							(((e =
								e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
								i),
							(e.__reactInternalMemoizedMaskedChildContext = o)),
						t
					);
				}
				function Vo(e, t, n, r) {
					(e = t.state),
						'function' === typeof t.componentWillReceiveProps &&
							t.componentWillReceiveProps(n, r),
						'function' ===
							typeof t.UNSAFE_componentWillReceiveProps &&
							t.UNSAFE_componentWillReceiveProps(n, r),
						t.state !== e &&
							jo.enqueueReplaceState(t, t.state, null);
				}
				function Uo(e, t, n, r) {
					var i = e.stateNode;
					(i.props = n),
						(i.state = e.memoizedState),
						(i.refs = Io),
						_o(e);
					var o = t.contextType;
					'object' === typeof o && null !== o
						? (i.context = xo(o))
						: ((o = _i(t) ? Si : Ci.current),
							(i.context = Ti(e, o))),
						(i.state = e.memoizedState),
						'function' ===
							typeof (o = t.getDerivedStateFromProps) &&
							(Fo(e, t, o, n), (i.state = e.memoizedState)),
						'function' === typeof t.getDerivedStateFromProps ||
							'function' === typeof i.getSnapshotBeforeUpdate ||
							('function' !==
								typeof i.UNSAFE_componentWillMount &&
								'function' !== typeof i.componentWillMount) ||
							((t = i.state),
							'function' === typeof i.componentWillMount &&
								i.componentWillMount(),
							'function' === typeof i.UNSAFE_componentWillMount &&
								i.UNSAFE_componentWillMount(),
							t !== i.state &&
								jo.enqueueReplaceState(i, i.state, null),
							Bo(e, n, i, r),
							(i.state = e.memoizedState)),
						'function' === typeof i.componentDidMount &&
							(e.flags |= 4194308);
				}
				function Yo(e, t, n) {
					if (
						null !== (e = n.ref) &&
						'function' !== typeof e &&
						'object' !== typeof e
					) {
						if (n._owner) {
							if ((n = n._owner)) {
								if (1 !== n.tag) throw Error(o(309));
								var r = n.stateNode;
							}
							if (!r) throw Error(o(147, e));
							var i = r,
								a = '' + e;
							return null !== t &&
								null !== t.ref &&
								'function' === typeof t.ref &&
								t.ref._stringRef === a
								? t.ref
								: ((t = function (e) {
										var t = i.refs;
										t === Io && (t = i.refs = {}),
											null === e
												? delete t[a]
												: (t[a] = e);
									}),
									(t._stringRef = a),
									t);
						}
						if ('string' !== typeof e) throw Error(o(284));
						if (!n._owner) throw Error(o(290, e));
					}
					return e;
				}
				function Qo(e, t) {
					throw (
						((e = Object.prototype.toString.call(t)),
						Error(
							o(
								31,
								'[object Object]' === e
									? 'object with keys {' +
											Object.keys(t).join(', ') +
											'}'
									: e,
							),
						))
					);
				}
				function Ho(e) {
					return (0, e._init)(e._payload);
				}
				function Go(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r
								? ((t.deletions = [n]), (t.flags |= 16))
								: r.push(n);
						}
					}
					function n(n, r) {
						if (!e) return null;
						for (; null !== r; ) t(n, r), (r = r.sibling);
						return null;
					}
					function r(e, t) {
						for (e = new Map(); null !== t; )
							null !== t.key
								? e.set(t.key, t)
								: e.set(t.index, t),
								(t = t.sibling);
						return e;
					}
					function i(e, t) {
						return (
							((e = Mu(e, t)).index = 0), (e.sibling = null), e
						);
					}
					function a(t, n, r) {
						return (
							(t.index = r),
							e
								? null !== (r = t.alternate)
									? (r = r.index) < n
										? ((t.flags |= 2), n)
										: r
									: ((t.flags |= 2), n)
								: ((t.flags |= 1048576), n)
						);
					}
					function s(t) {
						return e && null === t.alternate && (t.flags |= 2), t;
					}
					function l(e, t, n, r) {
						return null === t || 6 !== t.tag
							? (((t = Bu(n, e.mode, r)).return = e), t)
							: (((t = i(t, n)).return = e), t);
					}
					function u(e, t, n, r) {
						var o = n.type;
						return o === E
							? d(e, t, n.props.children, r, n.key)
							: null !== t &&
								  (t.elementType === o ||
										('object' === typeof o &&
											null !== o &&
											o.$$typeof === O &&
											Ho(o) === t.type))
								? (((r = i(t, n.props)).ref = Yo(e, t, n)),
									(r.return = e),
									r)
								: (((r = Du(
										n.type,
										n.key,
										n.props,
										null,
										e.mode,
										r,
									)).ref = Yo(e, t, n)),
									(r.return = e),
									r);
					}
					function c(e, t, n, r) {
						return null === t ||
							4 !== t.tag ||
							t.stateNode.containerInfo !== n.containerInfo ||
							t.stateNode.implementation !== n.implementation
							? (((t = Lu(n, e.mode, r)).return = e), t)
							: (((t = i(t, n.children || [])).return = e), t);
					}
					function d(e, t, n, r, o) {
						return null === t || 7 !== t.tag
							? (((t = Ou(n, e.mode, r, o)).return = e), t)
							: (((t = i(t, n)).return = e), t);
					}
					function f(e, t, n) {
						if (
							('string' === typeof t && '' !== t) ||
							'number' === typeof t
						)
							return ((t = Bu('' + t, e.mode, n)).return = e), t;
						if ('object' === typeof t && null !== t) {
							switch (t.$$typeof) {
								case b:
									return (
										((n = Du(
											t.type,
											t.key,
											t.props,
											null,
											e.mode,
											n,
										)).ref = Yo(e, null, t)),
										(n.return = e),
										n
									);
								case x:
									return (
										((t = Lu(t, e.mode, n)).return = e), t
									);
								case O:
									return f(e, (0, t._init)(t._payload), n);
							}
							if (te(t) || L(t))
								return (
									((t = Ou(t, e.mode, n, null)).return = e), t
								);
							Qo(e, t);
						}
						return null;
					}
					function h(e, t, n, r) {
						var i = null !== t ? t.key : null;
						if (
							('string' === typeof n && '' !== n) ||
							'number' === typeof n
						)
							return null !== i ? null : l(e, t, '' + n, r);
						if ('object' === typeof n && null !== n) {
							switch (n.$$typeof) {
								case b:
									return n.key === i ? u(e, t, n, r) : null;
								case x:
									return n.key === i ? c(e, t, n, r) : null;
								case O:
									return h(
										e,
										t,
										(i = n._init)(n._payload),
										r,
									);
							}
							if (te(n) || L(n))
								return null !== i ? null : d(e, t, n, r, null);
							Qo(e, n);
						}
						return null;
					}
					function p(e, t, n, r, i) {
						if (
							('string' === typeof r && '' !== r) ||
							'number' === typeof r
						)
							return l(t, (e = e.get(n) || null), '' + r, i);
						if ('object' === typeof r && null !== r) {
							switch (r.$$typeof) {
								case b:
									return u(
										t,
										(e =
											e.get(null === r.key ? n : r.key) ||
											null),
										r,
										i,
									);
								case x:
									return c(
										t,
										(e =
											e.get(null === r.key ? n : r.key) ||
											null),
										r,
										i,
									);
								case O:
									return p(
										e,
										t,
										n,
										(0, r._init)(r._payload),
										i,
									);
							}
							if (te(r) || L(r))
								return d(t, (e = e.get(n) || null), r, i, null);
							Qo(t, r);
						}
						return null;
					}
					function m(i, o, s, l) {
						for (
							var u = null,
								c = null,
								d = o,
								m = (o = 0),
								g = null;
							null !== d && m < s.length;
							m++
						) {
							d.index > m
								? ((g = d), (d = null))
								: (g = d.sibling);
							var v = h(i, d, s[m], l);
							if (null === v) {
								null === d && (d = g);
								break;
							}
							e && d && null === v.alternate && t(i, d),
								(o = a(v, o, m)),
								null === c ? (u = v) : (c.sibling = v),
								(c = v),
								(d = g);
						}
						if (m === s.length) return n(i, d), eo && Xi(i, m), u;
						if (null === d) {
							for (; m < s.length; m++)
								null !== (d = f(i, s[m], l)) &&
									((o = a(d, o, m)),
									null === c ? (u = d) : (c.sibling = d),
									(c = d));
							return eo && Xi(i, m), u;
						}
						for (d = r(i, d); m < s.length; m++)
							null !== (g = p(d, i, m, s[m], l)) &&
								(e &&
									null !== g.alternate &&
									d.delete(null === g.key ? m : g.key),
								(o = a(g, o, m)),
								null === c ? (u = g) : (c.sibling = g),
								(c = g));
						return (
							e &&
								d.forEach(function (e) {
									return t(i, e);
								}),
							eo && Xi(i, m),
							u
						);
					}
					function g(i, s, l, u) {
						var c = L(l);
						if ('function' !== typeof c) throw Error(o(150));
						if (null == (l = c.call(l))) throw Error(o(151));
						for (
							var d = (c = null),
								m = s,
								g = (s = 0),
								v = null,
								A = l.next();
							null !== m && !A.done;
							g++, A = l.next()
						) {
							m.index > g
								? ((v = m), (m = null))
								: (v = m.sibling);
							var y = h(i, m, A.value, u);
							if (null === y) {
								null === m && (m = v);
								break;
							}
							e && m && null === y.alternate && t(i, m),
								(s = a(y, s, g)),
								null === d ? (c = y) : (d.sibling = y),
								(d = y),
								(m = v);
						}
						if (A.done) return n(i, m), eo && Xi(i, g), c;
						if (null === m) {
							for (; !A.done; g++, A = l.next())
								null !== (A = f(i, A.value, u)) &&
									((s = a(A, s, g)),
									null === d ? (c = A) : (d.sibling = A),
									(d = A));
							return eo && Xi(i, g), c;
						}
						for (m = r(i, m); !A.done; g++, A = l.next())
							null !== (A = p(m, i, g, A.value, u)) &&
								(e &&
									null !== A.alternate &&
									m.delete(null === A.key ? g : A.key),
								(s = a(A, s, g)),
								null === d ? (c = A) : (d.sibling = A),
								(d = A));
						return (
							e &&
								m.forEach(function (e) {
									return t(i, e);
								}),
							eo && Xi(i, g),
							c
						);
					}
					return function e(r, o, a, l) {
						if (
							('object' === typeof a &&
								null !== a &&
								a.type === E &&
								null === a.key &&
								(a = a.props.children),
							'object' === typeof a && null !== a)
						) {
							switch (a.$$typeof) {
								case b:
									e: {
										for (
											var u = a.key, c = o;
											null !== c;

										) {
											if (c.key === u) {
												if ((u = a.type) === E) {
													if (7 === c.tag) {
														n(r, c.sibling),
															((o = i(
																c,
																a.props
																	.children,
															)).return = r),
															(r = o);
														break e;
													}
												} else if (
													c.elementType === u ||
													('object' === typeof u &&
														null !== u &&
														u.$$typeof === O &&
														Ho(u) === c.type)
												) {
													n(r, c.sibling),
														((o = i(
															c,
															a.props,
														)).ref = Yo(r, c, a)),
														(o.return = r),
														(r = o);
													break e;
												}
												n(r, c);
												break;
											}
											t(r, c), (c = c.sibling);
										}
										a.type === E
											? (((o = Ou(
													a.props.children,
													r.mode,
													l,
													a.key,
												)).return = r),
												(r = o))
											: (((l = Du(
													a.type,
													a.key,
													a.props,
													null,
													r.mode,
													l,
												)).ref = Yo(r, o, a)),
												(l.return = r),
												(r = l));
									}
									return s(r);
								case x:
									e: {
										for (c = a.key; null !== o; ) {
											if (o.key === c) {
												if (
													4 === o.tag &&
													o.stateNode
														.containerInfo ===
														a.containerInfo &&
													o.stateNode
														.implementation ===
														a.implementation
												) {
													n(r, o.sibling),
														((o = i(
															o,
															a.children || [],
														)).return = r),
														(r = o);
													break e;
												}
												n(r, o);
												break;
											}
											t(r, o), (o = o.sibling);
										}
										((o = Lu(a, r.mode, l)).return = r),
											(r = o);
									}
									return s(r);
								case O:
									return e(
										r,
										o,
										(c = a._init)(a._payload),
										l,
									);
							}
							if (te(a)) return m(r, o, a, l);
							if (L(a)) return g(r, o, a, l);
							Qo(r, a);
						}
						return ('string' === typeof a && '' !== a) ||
							'number' === typeof a
							? ((a = '' + a),
								null !== o && 6 === o.tag
									? (n(r, o.sibling),
										((o = i(o, a)).return = r),
										(r = o))
									: (n(r, o),
										((o = Bu(a, r.mode, l)).return = r),
										(r = o)),
								s(r))
							: n(r, o);
					};
				}
				var Wo = Go(!0),
					Xo = Go(!1),
					qo = {},
					Jo = wi(qo),
					Ko = wi(qo),
					Zo = wi(qo);
				function $o(e) {
					if (e === qo) throw Error(o(174));
					return e;
				}
				function ea(e, t) {
					switch (
						(xi(Zo, t), xi(Ko, e), xi(Jo, qo), (e = t.nodeType))
					) {
						case 9:
						case 11:
							t = (t = t.documentElement)
								? t.namespaceURI
								: le(null, '');
							break;
						default:
							t = le(
								(t =
									(e = 8 === e ? t.parentNode : t)
										.namespaceURI || null),
								(e = e.tagName),
							);
					}
					bi(Jo), xi(Jo, t);
				}
				function ta() {
					bi(Jo), bi(Ko), bi(Zo);
				}
				function na(e) {
					$o(Zo.current);
					var t = $o(Jo.current),
						n = le(t, e.type);
					t !== n && (xi(Ko, e), xi(Jo, n));
				}
				function ra(e) {
					Ko.current === e && (bi(Jo), bi(Ko));
				}
				var ia = wi(0);
				function oa(e) {
					for (var t = e; null !== t; ) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (
								null !== n &&
								(null === (n = n.dehydrated) ||
									'$?' === n.data ||
									'$!' === n.data)
							)
								return t;
						} else if (
							19 === t.tag &&
							void 0 !== t.memoizedProps.revealOrder
						) {
							if (0 !== (128 & t.flags)) return t;
						} else if (null !== t.child) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break;
						for (; null === t.sibling; ) {
							if (null === t.return || t.return === e)
								return null;
							t = t.return;
						}
						(t.sibling.return = t.return), (t = t.sibling);
					}
					return null;
				}
				var aa = [];
				function sa() {
					for (var e = 0; e < aa.length; e++)
						aa[e]._workInProgressVersionPrimary = null;
					aa.length = 0;
				}
				var la = w.ReactCurrentDispatcher,
					ua = w.ReactCurrentBatchConfig,
					ca = 0,
					da = null,
					fa = null,
					ha = null,
					pa = !1,
					ma = !1,
					ga = 0,
					va = 0;
				function Aa() {
					throw Error(o(321));
				}
				function ya(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++)
						if (!rr(e[n], t[n])) return !1;
					return !0;
				}
				function wa(e, t, n, r, i, a) {
					if (
						((ca = a),
						(da = t),
						(t.memoizedState = null),
						(t.updateQueue = null),
						(t.lanes = 0),
						(la.current =
							null === e || null === e.memoizedState ? rs : is),
						(e = n(r, i)),
						ma)
					) {
						a = 0;
						do {
							if (((ma = !1), (ga = 0), 25 <= a))
								throw Error(o(301));
							(a += 1),
								(ha = fa = null),
								(t.updateQueue = null),
								(la.current = os),
								(e = n(r, i));
						} while (ma);
					}
					if (
						((la.current = ns),
						(t = null !== fa && null !== fa.next),
						(ca = 0),
						(ha = fa = da = null),
						(pa = !1),
						t)
					)
						throw Error(o(300));
					return e;
				}
				function ba() {
					var e = 0 !== ga;
					return (ga = 0), e;
				}
				function xa() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null,
					};
					return (
						null === ha
							? (da.memoizedState = ha = e)
							: (ha = ha.next = e),
						ha
					);
				}
				function Ea() {
					if (null === fa) {
						var e = da.alternate;
						e = null !== e ? e.memoizedState : null;
					} else e = fa.next;
					var t = null === ha ? da.memoizedState : ha.next;
					if (null !== t) (ha = t), (fa = e);
					else {
						if (null === e) throw Error(o(310));
						(e = {
							memoizedState: (fa = e).memoizedState,
							baseState: fa.baseState,
							baseQueue: fa.baseQueue,
							queue: fa.queue,
							next: null,
						}),
							null === ha
								? (da.memoizedState = ha = e)
								: (ha = ha.next = e);
					}
					return ha;
				}
				function Ca(e, t) {
					return 'function' === typeof t ? t(e) : t;
				}
				function ka(e) {
					var t = Ea(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = fa,
						i = r.baseQueue,
						a = n.pending;
					if (null !== a) {
						if (null !== i) {
							var s = i.next;
							(i.next = a.next), (a.next = s);
						}
						(r.baseQueue = i = a), (n.pending = null);
					}
					if (null !== i) {
						(a = i.next), (r = r.baseState);
						var l = (s = null),
							u = null,
							c = a;
						do {
							var d = c.lane;
							if ((ca & d) === d)
								null !== u &&
									(u = u.next =
										{
											lane: 0,
											action: c.action,
											hasEagerState: c.hasEagerState,
											eagerState: c.eagerState,
											next: null,
										}),
									(r = c.hasEagerState
										? c.eagerState
										: e(r, c.action));
							else {
								var f = {
									lane: d,
									action: c.action,
									hasEagerState: c.hasEagerState,
									eagerState: c.eagerState,
									next: null,
								};
								null === u
									? ((l = u = f), (s = r))
									: (u = u.next = f),
									(da.lanes |= d),
									(Rl |= d);
							}
							c = c.next;
						} while (null !== c && c !== a);
						null === u ? (s = r) : (u.next = l),
							rr(r, t.memoizedState) || (gs = !0),
							(t.memoizedState = r),
							(t.baseState = s),
							(t.baseQueue = u),
							(n.lastRenderedState = r);
					}
					if (null !== (e = n.interleaved)) {
						i = e;
						do {
							(a = i.lane),
								(da.lanes |= a),
								(Rl |= a),
								(i = i.next);
						} while (i !== e);
					} else null === i && (n.lanes = 0);
					return [t.memoizedState, n.dispatch];
				}
				function Sa(e) {
					var t = Ea(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						i = n.pending,
						a = t.memoizedState;
					if (null !== i) {
						n.pending = null;
						var s = (i = i.next);
						do {
							(a = e(a, s.action)), (s = s.next);
						} while (s !== i);
						rr(a, t.memoizedState) || (gs = !0),
							(t.memoizedState = a),
							null === t.baseQueue && (t.baseState = a),
							(n.lastRenderedState = a);
					}
					return [a, r];
				}
				function Ta() {}
				function _a(e, t) {
					var n = da,
						r = Ea(),
						i = t(),
						a = !rr(r.memoizedState, i);
					if (
						(a && ((r.memoizedState = i), (gs = !0)),
						(r = r.queue),
						za(Da.bind(null, n, r, e), [e]),
						r.getSnapshot !== t ||
							a ||
							(null !== ha && 1 & ha.memoizedState.tag))
					) {
						if (
							((n.flags |= 2048),
							La(9, Ma.bind(null, n, r, i, t), void 0, null),
							null === Sl)
						)
							throw Error(o(349));
						0 !== (30 & ca) || Pa(n, t, i);
					}
					return i;
				}
				function Pa(e, t, n) {
					(e.flags |= 16384),
						(e = { getSnapshot: t, value: n }),
						null === (t = da.updateQueue)
							? ((t = { lastEffect: null, stores: null }),
								(da.updateQueue = t),
								(t.stores = [e]))
							: null === (n = t.stores)
								? (t.stores = [e])
								: n.push(e);
				}
				function Ma(e, t, n, r) {
					(t.value = n), (t.getSnapshot = r), Oa(t) && Ra(e);
				}
				function Da(e, t, n) {
					return n(function () {
						Oa(t) && Ra(e);
					});
				}
				function Oa(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !rr(e, n);
					} catch (r) {
						return !0;
					}
				}
				function Ra(e) {
					var t = So(e, 1);
					null !== t && $l(t, e, 1, -1);
				}
				function Ba(e) {
					var t = xa();
					return (
						'function' === typeof e && (e = e()),
						(t.memoizedState = t.baseState = e),
						(e = {
							pending: null,
							interleaved: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: Ca,
							lastRenderedState: e,
						}),
						(t.queue = e),
						(e = e.dispatch = Za.bind(null, da, e)),
						[t.memoizedState, e]
					);
				}
				function La(e, t, n, r) {
					return (
						(e = {
							tag: e,
							create: t,
							destroy: n,
							deps: r,
							next: null,
						}),
						null === (t = da.updateQueue)
							? ((t = { lastEffect: null, stores: null }),
								(da.updateQueue = t),
								(t.lastEffect = e.next = e))
							: null === (n = t.lastEffect)
								? (t.lastEffect = e.next = e)
								: ((r = n.next),
									(n.next = e),
									(e.next = r),
									(t.lastEffect = e)),
						e
					);
				}
				function Ia() {
					return Ea().memoizedState;
				}
				function Fa(e, t, n, r) {
					var i = xa();
					(da.flags |= e),
						(i.memoizedState = La(
							1 | t,
							n,
							void 0,
							void 0 === r ? null : r,
						));
				}
				function ja(e, t, n, r) {
					var i = Ea();
					r = void 0 === r ? null : r;
					var o = void 0;
					if (null !== fa) {
						var a = fa.memoizedState;
						if (((o = a.destroy), null !== r && ya(r, a.deps)))
							return void (i.memoizedState = La(t, n, o, r));
					}
					(da.flags |= e), (i.memoizedState = La(1 | t, n, o, r));
				}
				function Na(e, t) {
					return Fa(8390656, 8, e, t);
				}
				function za(e, t) {
					return ja(2048, 8, e, t);
				}
				function Va(e, t) {
					return ja(4, 2, e, t);
				}
				function Ua(e, t) {
					return ja(4, 4, e, t);
				}
				function Ya(e, t) {
					return 'function' === typeof t
						? ((e = e()),
							t(e),
							function () {
								t(null);
							})
						: null !== t && void 0 !== t
							? ((e = e()),
								(t.current = e),
								function () {
									t.current = null;
								})
							: void 0;
				}
				function Qa(e, t, n) {
					return (
						(n = null !== n && void 0 !== n ? n.concat([e]) : null),
						ja(4, 4, Ya.bind(null, t, e), n)
					);
				}
				function Ha() {}
				function Ga(e, t) {
					var n = Ea();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && ya(t, r[1])
						? r[0]
						: ((n.memoizedState = [e, t]), e);
				}
				function Wa(e, t) {
					var n = Ea();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && ya(t, r[1])
						? r[0]
						: ((e = e()), (n.memoizedState = [e, t]), e);
				}
				function Xa(e, t, n) {
					return 0 === (21 & ca)
						? (e.baseState && ((e.baseState = !1), (gs = !0)),
							(e.memoizedState = n))
						: (rr(n, t) ||
								((n = pt()),
								(da.lanes |= n),
								(Rl |= n),
								(e.baseState = !0)),
							t);
				}
				function qa(e, t) {
					var n = At;
					(At = 0 !== n && 4 > n ? n : 4), e(!0);
					var r = ua.transition;
					ua.transition = {};
					try {
						e(!1), t();
					} finally {
						(At = n), (ua.transition = r);
					}
				}
				function Ja() {
					return Ea().memoizedState;
				}
				function Ka(e, t, n) {
					var r = Zl(e);
					if (
						((n = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						}),
						$a(e))
					)
						es(t, n);
					else if (null !== (n = ko(e, t, n, r))) {
						$l(n, e, r, Kl()), ts(n, t, r);
					}
				}
				function Za(e, t, n) {
					var r = Zl(e),
						i = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						};
					if ($a(e)) es(t, i);
					else {
						var o = e.alternate;
						if (
							0 === e.lanes &&
							(null === o || 0 === o.lanes) &&
							null !== (o = t.lastRenderedReducer)
						)
							try {
								var a = t.lastRenderedState,
									s = o(a, n);
								if (
									((i.hasEagerState = !0),
									(i.eagerState = s),
									rr(s, a))
								) {
									var l = t.interleaved;
									return (
										null === l
											? ((i.next = i), Co(t))
											: ((i.next = l.next), (l.next = i)),
										void (t.interleaved = i)
									);
								}
							} catch (u) {}
						null !== (n = ko(e, t, i, r)) &&
							($l(n, e, r, (i = Kl())), ts(n, t, r));
					}
				}
				function $a(e) {
					var t = e.alternate;
					return e === da || (null !== t && t === da);
				}
				function es(e, t) {
					ma = pa = !0;
					var n = e.pending;
					null === n
						? (t.next = t)
						: ((t.next = n.next), (n.next = t)),
						(e.pending = t);
				}
				function ts(e, t, n) {
					if (0 !== (4194240 & n)) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
					}
				}
				var ns = {
						readContext: xo,
						useCallback: Aa,
						useContext: Aa,
						useEffect: Aa,
						useImperativeHandle: Aa,
						useInsertionEffect: Aa,
						useLayoutEffect: Aa,
						useMemo: Aa,
						useReducer: Aa,
						useRef: Aa,
						useState: Aa,
						useDebugValue: Aa,
						useDeferredValue: Aa,
						useTransition: Aa,
						useMutableSource: Aa,
						useSyncExternalStore: Aa,
						useId: Aa,
						unstable_isNewReconciler: !1,
					},
					rs = {
						readContext: xo,
						useCallback: function (e, t) {
							return (
								(xa().memoizedState = [
									e,
									void 0 === t ? null : t,
								]),
								e
							);
						},
						useContext: xo,
						useEffect: Na,
						useImperativeHandle: function (e, t, n) {
							return (
								(n =
									null !== n && void 0 !== n
										? n.concat([e])
										: null),
								Fa(4194308, 4, Ya.bind(null, t, e), n)
							);
						},
						useLayoutEffect: function (e, t) {
							return Fa(4194308, 4, e, t);
						},
						useInsertionEffect: function (e, t) {
							return Fa(4, 2, e, t);
						},
						useMemo: function (e, t) {
							var n = xa();
							return (
								(t = void 0 === t ? null : t),
								(e = e()),
								(n.memoizedState = [e, t]),
								e
							);
						},
						useReducer: function (e, t, n) {
							var r = xa();
							return (
								(t = void 0 !== n ? n(t) : t),
								(r.memoizedState = r.baseState = t),
								(e = {
									pending: null,
									interleaved: null,
									lanes: 0,
									dispatch: null,
									lastRenderedReducer: e,
									lastRenderedState: t,
								}),
								(r.queue = e),
								(e = e.dispatch = Ka.bind(null, da, e)),
								[r.memoizedState, e]
							);
						},
						useRef: function (e) {
							return (
								(e = { current: e }), (xa().memoizedState = e)
							);
						},
						useState: Ba,
						useDebugValue: Ha,
						useDeferredValue: function (e) {
							return (xa().memoizedState = e);
						},
						useTransition: function () {
							var e = Ba(!1),
								t = e[0];
							return (
								(e = qa.bind(null, e[1])),
								(xa().memoizedState = e),
								[t, e]
							);
						},
						useMutableSource: function () {},
						useSyncExternalStore: function (e, t, n) {
							var r = da,
								i = xa();
							if (eo) {
								if (void 0 === n) throw Error(o(407));
								n = n();
							} else {
								if (((n = t()), null === Sl))
									throw Error(o(349));
								0 !== (30 & ca) || Pa(r, t, n);
							}
							i.memoizedState = n;
							var a = { value: n, getSnapshot: t };
							return (
								(i.queue = a),
								Na(Da.bind(null, r, a, e), [e]),
								(r.flags |= 2048),
								La(9, Ma.bind(null, r, a, n, t), void 0, null),
								n
							);
						},
						useId: function () {
							var e = xa(),
								t = Sl.identifierPrefix;
							if (eo) {
								var n = Wi;
								(t =
									':' +
									t +
									'R' +
									(n =
										(
											Gi & ~(1 << (32 - ot(Gi) - 1))
										).toString(32) + n)),
									0 < (n = ga++) &&
										(t += 'H' + n.toString(32)),
									(t += ':');
							} else
								t =
									':' +
									t +
									'r' +
									(n = va++).toString(32) +
									':';
							return (e.memoizedState = t);
						},
						unstable_isNewReconciler: !1,
					},
					is = {
						readContext: xo,
						useCallback: Ga,
						useContext: xo,
						useEffect: za,
						useImperativeHandle: Qa,
						useInsertionEffect: Va,
						useLayoutEffect: Ua,
						useMemo: Wa,
						useReducer: ka,
						useRef: Ia,
						useState: function () {
							return ka(Ca);
						},
						useDebugValue: Ha,
						useDeferredValue: function (e) {
							return Xa(Ea(), fa.memoizedState, e);
						},
						useTransition: function () {
							return [ka(Ca)[0], Ea().memoizedState];
						},
						useMutableSource: Ta,
						useSyncExternalStore: _a,
						useId: Ja,
						unstable_isNewReconciler: !1,
					},
					os = {
						readContext: xo,
						useCallback: Ga,
						useContext: xo,
						useEffect: za,
						useImperativeHandle: Qa,
						useInsertionEffect: Va,
						useLayoutEffect: Ua,
						useMemo: Wa,
						useReducer: Sa,
						useRef: Ia,
						useState: function () {
							return Sa(Ca);
						},
						useDebugValue: Ha,
						useDeferredValue: function (e) {
							var t = Ea();
							return null === fa
								? (t.memoizedState = e)
								: Xa(t, fa.memoizedState, e);
						},
						useTransition: function () {
							return [Sa(Ca)[0], Ea().memoizedState];
						},
						useMutableSource: Ta,
						useSyncExternalStore: _a,
						useId: Ja,
						unstable_isNewReconciler: !1,
					};
				function as(e, t) {
					try {
						var n = '',
							r = t;
						do {
							(n += V(r)), (r = r.return);
						} while (r);
						var i = n;
					} catch (o) {
						i =
							'\nError generating stack: ' +
							o.message +
							'\n' +
							o.stack;
					}
					return { value: e, source: t, stack: i, digest: null };
				}
				function ss(e, t, n) {
					return {
						value: e,
						source: null,
						stack: null != n ? n : null,
						digest: null != t ? t : null,
					};
				}
				function ls(e, t) {
					try {
						console.error(t.value);
					} catch (n) {
						setTimeout(function () {
							throw n;
						});
					}
				}
				var us = 'function' === typeof WeakMap ? WeakMap : Map;
				function cs(e, t, n) {
					((n = Mo(-1, n)).tag = 3), (n.payload = { element: null });
					var r = t.value;
					return (
						(n.callback = function () {
							Vl || ((Vl = !0), (Ul = r)), ls(0, t);
						}),
						n
					);
				}
				function ds(e, t, n) {
					(n = Mo(-1, n)).tag = 3;
					var r = e.type.getDerivedStateFromError;
					if ('function' === typeof r) {
						var i = t.value;
						(n.payload = function () {
							return r(i);
						}),
							(n.callback = function () {
								ls(0, t);
							});
					}
					var o = e.stateNode;
					return (
						null !== o &&
							'function' === typeof o.componentDidCatch &&
							(n.callback = function () {
								ls(0, t),
									'function' !== typeof r &&
										(null === Yl
											? (Yl = new Set([this]))
											: Yl.add(this));
								var e = t.stack;
								this.componentDidCatch(t.value, {
									componentStack: null !== e ? e : '',
								});
							}),
						n
					);
				}
				function fs(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new us();
						var i = new Set();
						r.set(t, i);
					} else
						void 0 === (i = r.get(t)) &&
							((i = new Set()), r.set(t, i));
					i.has(n) ||
						(i.add(n), (e = xu.bind(null, e, t, n)), t.then(e, e));
				}
				function hs(e) {
					do {
						var t;
						if (
							((t = 13 === e.tag) &&
								(t =
									null === (t = e.memoizedState) ||
									null !== t.dehydrated),
							t)
						)
							return e;
						e = e.return;
					} while (null !== e);
					return null;
				}
				function ps(e, t, n, r, i) {
					return 0 === (1 & e.mode)
						? (e === t
								? (e.flags |= 65536)
								: ((e.flags |= 128),
									(n.flags |= 131072),
									(n.flags &= -52805),
									1 === n.tag &&
										(null === n.alternate
											? (n.tag = 17)
											: (((t = Mo(-1, 1)).tag = 2),
												Do(n, t, 1))),
									(n.lanes |= 1)),
							e)
						: ((e.flags |= 65536), (e.lanes = i), e);
				}
				var ms = w.ReactCurrentOwner,
					gs = !1;
				function vs(e, t, n, r) {
					t.child =
						null === e ? Xo(t, null, n, r) : Wo(t, e.child, n, r);
				}
				function As(e, t, n, r, i) {
					n = n.render;
					var o = t.ref;
					return (
						bo(t, i),
						(r = wa(e, t, n, r, o, i)),
						(n = ba()),
						null === e || gs
							? (eo && n && Ji(t),
								(t.flags |= 1),
								vs(e, t, r, i),
								t.child)
							: ((t.updateQueue = e.updateQueue),
								(t.flags &= -2053),
								(e.lanes &= ~i),
								Vs(e, t, i))
					);
				}
				function ys(e, t, n, r, i) {
					if (null === e) {
						var o = n.type;
						return 'function' !== typeof o ||
							Pu(o) ||
							void 0 !== o.defaultProps ||
							null !== n.compare ||
							void 0 !== n.defaultProps
							? (((e = Du(n.type, null, r, t, t.mode, i)).ref =
									t.ref),
								(e.return = t),
								(t.child = e))
							: ((t.tag = 15), (t.type = o), ws(e, t, o, r, i));
					}
					if (((o = e.child), 0 === (e.lanes & i))) {
						var a = o.memoizedProps;
						if (
							(n = null !== (n = n.compare) ? n : ir)(a, r) &&
							e.ref === t.ref
						)
							return Vs(e, t, i);
					}
					return (
						(t.flags |= 1),
						((e = Mu(o, r)).ref = t.ref),
						(e.return = t),
						(t.child = e)
					);
				}
				function ws(e, t, n, r, i) {
					if (null !== e) {
						var o = e.memoizedProps;
						if (ir(o, r) && e.ref === t.ref) {
							if (
								((gs = !1),
								(t.pendingProps = r = o),
								0 === (e.lanes & i))
							)
								return (t.lanes = e.lanes), Vs(e, t, i);
							0 !== (131072 & e.flags) && (gs = !0);
						}
					}
					return Es(e, t, n, r, i);
				}
				function bs(e, t, n) {
					var r = t.pendingProps,
						i = r.children,
						o = null !== e ? e.memoizedState : null;
					if ('hidden' === r.mode)
						if (0 === (1 & t.mode))
							(t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null,
							}),
								xi(Ml, Pl),
								(Pl |= n);
						else {
							if (0 === (1073741824 & n))
								return (
									(e = null !== o ? o.baseLanes | n : n),
									(t.lanes = t.childLanes = 1073741824),
									(t.memoizedState = {
										baseLanes: e,
										cachePool: null,
										transitions: null,
									}),
									(t.updateQueue = null),
									xi(Ml, Pl),
									(Pl |= e),
									null
								);
							(t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null,
							}),
								(r = null !== o ? o.baseLanes : n),
								xi(Ml, Pl),
								(Pl |= r);
						}
					else
						null !== o
							? ((r = o.baseLanes | n), (t.memoizedState = null))
							: (r = n),
							xi(Ml, Pl),
							(Pl |= r);
					return vs(e, t, i, n), t.child;
				}
				function xs(e, t) {
					var n = t.ref;
					((null === e && null !== n) ||
						(null !== e && e.ref !== n)) &&
						((t.flags |= 512), (t.flags |= 2097152));
				}
				function Es(e, t, n, r, i) {
					var o = _i(n) ? Si : Ci.current;
					return (
						(o = Ti(t, o)),
						bo(t, i),
						(n = wa(e, t, n, r, o, i)),
						(r = ba()),
						null === e || gs
							? (eo && r && Ji(t),
								(t.flags |= 1),
								vs(e, t, n, i),
								t.child)
							: ((t.updateQueue = e.updateQueue),
								(t.flags &= -2053),
								(e.lanes &= ~i),
								Vs(e, t, i))
					);
				}
				function Cs(e, t, n, r, i) {
					if (_i(n)) {
						var o = !0;
						Oi(t);
					} else o = !1;
					if ((bo(t, i), null === t.stateNode))
						zs(e, t), zo(t, n, r), Uo(t, n, r, i), (r = !0);
					else if (null === e) {
						var a = t.stateNode,
							s = t.memoizedProps;
						a.props = s;
						var l = a.context,
							u = n.contextType;
						'object' === typeof u && null !== u
							? (u = xo(u))
							: (u = Ti(t, (u = _i(n) ? Si : Ci.current)));
						var c = n.getDerivedStateFromProps,
							d =
								'function' === typeof c ||
								'function' === typeof a.getSnapshotBeforeUpdate;
						d ||
							('function' !==
								typeof a.UNSAFE_componentWillReceiveProps &&
								'function' !==
									typeof a.componentWillReceiveProps) ||
							((s !== r || l !== u) && Vo(t, a, r, u)),
							(To = !1);
						var f = t.memoizedState;
						(a.state = f),
							Bo(t, r, a, i),
							(l = t.memoizedState),
							s !== r || f !== l || ki.current || To
								? ('function' === typeof c &&
										(Fo(t, n, c, r), (l = t.memoizedState)),
									(s = To || No(t, n, s, r, f, l, u))
										? (d ||
												('function' !==
													typeof a.UNSAFE_componentWillMount &&
													'function' !==
														typeof a.componentWillMount) ||
												('function' ===
													typeof a.componentWillMount &&
													a.componentWillMount(),
												'function' ===
													typeof a.UNSAFE_componentWillMount &&
													a.UNSAFE_componentWillMount()),
											'function' ===
												typeof a.componentDidMount &&
												(t.flags |= 4194308))
										: ('function' ===
												typeof a.componentDidMount &&
												(t.flags |= 4194308),
											(t.memoizedProps = r),
											(t.memoizedState = l)),
									(a.props = r),
									(a.state = l),
									(a.context = u),
									(r = s))
								: ('function' === typeof a.componentDidMount &&
										(t.flags |= 4194308),
									(r = !1));
					} else {
						(a = t.stateNode),
							Po(e, t),
							(s = t.memoizedProps),
							(u = t.type === t.elementType ? s : ho(t.type, s)),
							(a.props = u),
							(d = t.pendingProps),
							(f = a.context),
							'object' === typeof (l = n.contextType) &&
							null !== l
								? (l = xo(l))
								: (l = Ti(t, (l = _i(n) ? Si : Ci.current)));
						var h = n.getDerivedStateFromProps;
						(c =
							'function' === typeof h ||
							'function' === typeof a.getSnapshotBeforeUpdate) ||
							('function' !==
								typeof a.UNSAFE_componentWillReceiveProps &&
								'function' !==
									typeof a.componentWillReceiveProps) ||
							((s !== d || f !== l) && Vo(t, a, r, l)),
							(To = !1),
							(f = t.memoizedState),
							(a.state = f),
							Bo(t, r, a, i);
						var p = t.memoizedState;
						s !== d || f !== p || ki.current || To
							? ('function' === typeof h &&
									(Fo(t, n, h, r), (p = t.memoizedState)),
								(u = To || No(t, n, u, r, f, p, l) || !1)
									? (c ||
											('function' !==
												typeof a.UNSAFE_componentWillUpdate &&
												'function' !==
													typeof a.componentWillUpdate) ||
											('function' ===
												typeof a.componentWillUpdate &&
												a.componentWillUpdate(r, p, l),
											'function' ===
												typeof a.UNSAFE_componentWillUpdate &&
												a.UNSAFE_componentWillUpdate(
													r,
													p,
													l,
												)),
										'function' ===
											typeof a.componentDidUpdate &&
											(t.flags |= 4),
										'function' ===
											typeof a.getSnapshotBeforeUpdate &&
											(t.flags |= 1024))
									: ('function' !==
											typeof a.componentDidUpdate ||
											(s === e.memoizedProps &&
												f === e.memoizedState) ||
											(t.flags |= 4),
										'function' !==
											typeof a.getSnapshotBeforeUpdate ||
											(s === e.memoizedProps &&
												f === e.memoizedState) ||
											(t.flags |= 1024),
										(t.memoizedProps = r),
										(t.memoizedState = p)),
								(a.props = r),
								(a.state = p),
								(a.context = l),
								(r = u))
							: ('function' !== typeof a.componentDidUpdate ||
									(s === e.memoizedProps &&
										f === e.memoizedState) ||
									(t.flags |= 4),
								'function' !==
									typeof a.getSnapshotBeforeUpdate ||
									(s === e.memoizedProps &&
										f === e.memoizedState) ||
									(t.flags |= 1024),
								(r = !1));
					}
					return ks(e, t, n, r, o, i);
				}
				function ks(e, t, n, r, i, o) {
					xs(e, t);
					var a = 0 !== (128 & t.flags);
					if (!r && !a) return i && Ri(t, n, !1), Vs(e, t, o);
					(r = t.stateNode), (ms.current = t);
					var s =
						a && 'function' !== typeof n.getDerivedStateFromError
							? null
							: r.render();
					return (
						(t.flags |= 1),
						null !== e && a
							? ((t.child = Wo(t, e.child, null, o)),
								(t.child = Wo(t, null, s, o)))
							: vs(e, t, s, o),
						(t.memoizedState = r.state),
						i && Ri(t, n, !0),
						t.child
					);
				}
				function Ss(e) {
					var t = e.stateNode;
					t.pendingContext
						? Mi(
								0,
								t.pendingContext,
								t.pendingContext !== t.context,
							)
						: t.context && Mi(0, t.context, !1),
						ea(e, t.containerInfo);
				}
				function Ts(e, t, n, r, i) {
					return (
						uo(), co(i), (t.flags |= 256), vs(e, t, n, r), t.child
					);
				}
				var _s,
					Ps,
					Ms,
					Ds,
					Os = { dehydrated: null, treeContext: null, retryLane: 0 };
				function Rs(e) {
					return { baseLanes: e, cachePool: null, transitions: null };
				}
				function Bs(e, t, n) {
					var r,
						i = t.pendingProps,
						a = ia.current,
						s = !1,
						l = 0 !== (128 & t.flags);
					if (
						((r = l) ||
							(r =
								(null === e || null !== e.memoizedState) &&
								0 !== (2 & a)),
						r
							? ((s = !0), (t.flags &= -129))
							: (null !== e && null === e.memoizedState) ||
								(a |= 1),
						xi(ia, 1 & a),
						null === e)
					)
						return (
							oo(t),
							null !== (e = t.memoizedState) &&
							null !== (e = e.dehydrated)
								? (0 === (1 & t.mode)
										? (t.lanes = 1)
										: '$!' === e.data
											? (t.lanes = 8)
											: (t.lanes = 1073741824),
									null)
								: ((l = i.children),
									(e = i.fallback),
									s
										? ((i = t.mode),
											(s = t.child),
											(l = {
												mode: 'hidden',
												children: l,
											}),
											0 === (1 & i) && null !== s
												? ((s.childLanes = 0),
													(s.pendingProps = l))
												: (s = Ru(l, i, 0, null)),
											(e = Ou(e, i, n, null)),
											(s.return = t),
											(e.return = t),
											(s.sibling = e),
											(t.child = s),
											(t.child.memoizedState = Rs(n)),
											(t.memoizedState = Os),
											e)
										: Ls(t, l))
						);
					if (
						null !== (a = e.memoizedState) &&
						null !== (r = a.dehydrated)
					)
						return (function (e, t, n, r, i, a, s) {
							if (n)
								return 256 & t.flags
									? ((t.flags &= -257),
										Is(e, t, s, (r = ss(Error(o(422))))))
									: null !== t.memoizedState
										? ((t.child = e.child),
											(t.flags |= 128),
											null)
										: ((a = r.fallback),
											(i = t.mode),
											(r = Ru(
												{
													mode: 'visible',
													children: r.children,
												},
												i,
												0,
												null,
											)),
											((a = Ou(a, i, s, null)).flags |=
												2),
											(r.return = t),
											(a.return = t),
											(r.sibling = a),
											(t.child = r),
											0 !== (1 & t.mode) &&
												Wo(t, e.child, null, s),
											(t.child.memoizedState = Rs(s)),
											(t.memoizedState = Os),
											a);
							if (0 === (1 & t.mode)) return Is(e, t, s, null);
							if ('$!' === i.data) {
								if (
									(r = i.nextSibling && i.nextSibling.dataset)
								)
									var l = r.dgst;
								return (
									(r = l),
									Is(
										e,
										t,
										s,
										(r = ss(
											(a = Error(o(419))),
											r,
											void 0,
										)),
									)
								);
							}
							if (((l = 0 !== (s & e.childLanes)), gs || l)) {
								if (null !== (r = Sl)) {
									switch (s & -s) {
										case 4:
											i = 2;
											break;
										case 16:
											i = 8;
											break;
										case 64:
										case 128:
										case 256:
										case 512:
										case 1024:
										case 2048:
										case 4096:
										case 8192:
										case 16384:
										case 32768:
										case 65536:
										case 131072:
										case 262144:
										case 524288:
										case 1048576:
										case 2097152:
										case 4194304:
										case 8388608:
										case 16777216:
										case 33554432:
										case 67108864:
											i = 32;
											break;
										case 536870912:
											i = 268435456;
											break;
										default:
											i = 0;
									}
									0 !==
										(i =
											0 !== (i & (r.suspendedLanes | s))
												? 0
												: i) &&
										i !== a.retryLane &&
										((a.retryLane = i),
										So(e, i),
										$l(r, e, i, -1));
								}
								return (
									fu(), Is(e, t, s, (r = ss(Error(o(421)))))
								);
							}
							return '$?' === i.data
								? ((t.flags |= 128),
									(t.child = e.child),
									(t = Cu.bind(null, e)),
									(i._reactRetry = t),
									null)
								: ((e = a.treeContext),
									($i = oi(i.nextSibling)),
									(Zi = t),
									(eo = !0),
									(to = null),
									null !== e &&
										((Yi[Qi++] = Gi),
										(Yi[Qi++] = Wi),
										(Yi[Qi++] = Hi),
										(Gi = e.id),
										(Wi = e.overflow),
										(Hi = t)),
									(t = Ls(t, r.children)),
									(t.flags |= 4096),
									t);
						})(e, t, l, i, r, a, n);
					if (s) {
						(s = i.fallback),
							(l = t.mode),
							(r = (a = e.child).sibling);
						var u = { mode: 'hidden', children: i.children };
						return (
							0 === (1 & l) && t.child !== a
								? (((i = t.child).childLanes = 0),
									(i.pendingProps = u),
									(t.deletions = null))
								: ((i = Mu(a, u)).subtreeFlags =
										14680064 & a.subtreeFlags),
							null !== r
								? (s = Mu(r, s))
								: ((s = Ou(s, l, n, null)).flags |= 2),
							(s.return = t),
							(i.return = t),
							(i.sibling = s),
							(t.child = i),
							(i = s),
							(s = t.child),
							(l =
								null === (l = e.child.memoizedState)
									? Rs(n)
									: {
											baseLanes: l.baseLanes | n,
											cachePool: null,
											transitions: l.transitions,
										}),
							(s.memoizedState = l),
							(s.childLanes = e.childLanes & ~n),
							(t.memoizedState = Os),
							i
						);
					}
					return (
						(e = (s = e.child).sibling),
						(i = Mu(s, { mode: 'visible', children: i.children })),
						0 === (1 & t.mode) && (i.lanes = n),
						(i.return = t),
						(i.sibling = null),
						null !== e &&
							(null === (n = t.deletions)
								? ((t.deletions = [e]), (t.flags |= 16))
								: n.push(e)),
						(t.child = i),
						(t.memoizedState = null),
						i
					);
				}
				function Ls(e, t) {
					return (
						((t = Ru(
							{ mode: 'visible', children: t },
							e.mode,
							0,
							null,
						)).return = e),
						(e.child = t)
					);
				}
				function Is(e, t, n, r) {
					return (
						null !== r && co(r),
						Wo(t, e.child, null, n),
						((e = Ls(t, t.pendingProps.children)).flags |= 2),
						(t.memoizedState = null),
						e
					);
				}
				function Fs(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), wo(e.return, t, n);
				}
				function js(e, t, n, r, i) {
					var o = e.memoizedState;
					null === o
						? (e.memoizedState = {
								isBackwards: t,
								rendering: null,
								renderingStartTime: 0,
								last: r,
								tail: n,
								tailMode: i,
							})
						: ((o.isBackwards = t),
							(o.rendering = null),
							(o.renderingStartTime = 0),
							(o.last = r),
							(o.tail = n),
							(o.tailMode = i));
				}
				function Ns(e, t, n) {
					var r = t.pendingProps,
						i = r.revealOrder,
						o = r.tail;
					if ((vs(e, t, r.children, n), 0 !== (2 & (r = ia.current))))
						(r = (1 & r) | 2), (t.flags |= 128);
					else {
						if (null !== e && 0 !== (128 & e.flags))
							e: for (e = t.child; null !== e; ) {
								if (13 === e.tag)
									null !== e.memoizedState && Fs(e, n, t);
								else if (19 === e.tag) Fs(e, n, t);
								else if (null !== e.child) {
									(e.child.return = e), (e = e.child);
									continue;
								}
								if (e === t) break e;
								for (; null === e.sibling; ) {
									if (null === e.return || e.return === t)
										break e;
									e = e.return;
								}
								(e.sibling.return = e.return), (e = e.sibling);
							}
						r &= 1;
					}
					if ((xi(ia, r), 0 === (1 & t.mode))) t.memoizedState = null;
					else
						switch (i) {
							case 'forwards':
								for (n = t.child, i = null; null !== n; )
									null !== (e = n.alternate) &&
										null === oa(e) &&
										(i = n),
										(n = n.sibling);
								null === (n = i)
									? ((i = t.child), (t.child = null))
									: ((i = n.sibling), (n.sibling = null)),
									js(t, !1, i, n, o);
								break;
							case 'backwards':
								for (
									n = null, i = t.child, t.child = null;
									null !== i;

								) {
									if (
										null !== (e = i.alternate) &&
										null === oa(e)
									) {
										t.child = i;
										break;
									}
									(e = i.sibling),
										(i.sibling = n),
										(n = i),
										(i = e);
								}
								js(t, !0, n, null, o);
								break;
							case 'together':
								js(t, !1, null, null, void 0);
								break;
							default:
								t.memoizedState = null;
						}
					return t.child;
				}
				function zs(e, t) {
					0 === (1 & t.mode) &&
						null !== e &&
						((e.alternate = null),
						(t.alternate = null),
						(t.flags |= 2));
				}
				function Vs(e, t, n) {
					if (
						(null !== e && (t.dependencies = e.dependencies),
						(Rl |= t.lanes),
						0 === (n & t.childLanes))
					)
						return null;
					if (null !== e && t.child !== e.child) throw Error(o(153));
					if (null !== t.child) {
						for (
							n = Mu((e = t.child), e.pendingProps),
								t.child = n,
								n.return = t;
							null !== e.sibling;

						)
							(e = e.sibling),
								((n = n.sibling =
									Mu(e, e.pendingProps)).return = t);
						n.sibling = null;
					}
					return t.child;
				}
				function Us(e, t) {
					if (!eo)
						switch (e.tailMode) {
							case 'hidden':
								t = e.tail;
								for (var n = null; null !== t; )
									null !== t.alternate && (n = t),
										(t = t.sibling);
								null === n
									? (e.tail = null)
									: (n.sibling = null);
								break;
							case 'collapsed':
								n = e.tail;
								for (var r = null; null !== n; )
									null !== n.alternate && (r = n),
										(n = n.sibling);
								null === r
									? t || null === e.tail
										? (e.tail = null)
										: (e.tail.sibling = null)
									: (r.sibling = null);
						}
				}
				function Ys(e) {
					var t =
							null !== e.alternate &&
							e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t)
						for (var i = e.child; null !== i; )
							(n |= i.lanes | i.childLanes),
								(r |= 14680064 & i.subtreeFlags),
								(r |= 14680064 & i.flags),
								(i.return = e),
								(i = i.sibling);
					else
						for (i = e.child; null !== i; )
							(n |= i.lanes | i.childLanes),
								(r |= i.subtreeFlags),
								(r |= i.flags),
								(i.return = e),
								(i = i.sibling);
					return (e.subtreeFlags |= r), (e.childLanes = n), t;
				}
				function Qs(e, t, n) {
					var r = t.pendingProps;
					switch ((Ki(t), t.tag)) {
						case 2:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
							return Ys(t), null;
						case 1:
						case 17:
							return _i(t.type) && Pi(), Ys(t), null;
						case 3:
							return (
								(r = t.stateNode),
								ta(),
								bi(ki),
								bi(Ci),
								sa(),
								r.pendingContext &&
									((r.context = r.pendingContext),
									(r.pendingContext = null)),
								(null !== e && null !== e.child) ||
									(so(t)
										? (t.flags |= 4)
										: null === e ||
											(e.memoizedState.isDehydrated &&
												0 === (256 & t.flags)) ||
											((t.flags |= 1024),
											null !== to &&
												(ru(to), (to = null)))),
								Ps(e, t),
								Ys(t),
								null
							);
						case 5:
							ra(t);
							var i = $o(Zo.current);
							if (
								((n = t.type),
								null !== e && null != t.stateNode)
							)
								Ms(e, t, n, r, i),
									e.ref !== t.ref &&
										((t.flags |= 512),
										(t.flags |= 2097152));
							else {
								if (!r) {
									if (null === t.stateNode)
										throw Error(o(166));
									return Ys(t), null;
								}
								if (((e = $o(Jo.current)), so(t))) {
									(r = t.stateNode), (n = t.type);
									var a = t.memoizedProps;
									switch (
										((r[li] = t),
										(r[ui] = a),
										(e = 0 !== (1 & t.mode)),
										n)
									) {
										case 'dialog':
											Lr('cancel', r), Lr('close', r);
											break;
										case 'iframe':
										case 'object':
										case 'embed':
											Lr('load', r);
											break;
										case 'video':
										case 'audio':
											for (i = 0; i < Dr.length; i++)
												Lr(Dr[i], r);
											break;
										case 'source':
											Lr('error', r);
											break;
										case 'img':
										case 'image':
										case 'link':
											Lr('error', r), Lr('load', r);
											break;
										case 'details':
											Lr('toggle', r);
											break;
										case 'input':
											J(r, a), Lr('invalid', r);
											break;
										case 'select':
											(r._wrapperState = {
												wasMultiple: !!a.multiple,
											}),
												Lr('invalid', r);
											break;
										case 'textarea':
											ie(r, a), Lr('invalid', r);
									}
									for (var l in (ve(n, a), (i = null), a))
										if (a.hasOwnProperty(l)) {
											var u = a[l];
											'children' === l
												? 'string' === typeof u
													? r.textContent !== u &&
														(!0 !==
															a.suppressHydrationWarning &&
															Xr(
																r.textContent,
																u,
																e,
															),
														(i = ['children', u]))
													: 'number' === typeof u &&
														r.textContent !==
															'' + u &&
														(!0 !==
															a.suppressHydrationWarning &&
															Xr(
																r.textContent,
																u,
																e,
															),
														(i = [
															'children',
															'' + u,
														]))
												: s.hasOwnProperty(l) &&
													null != u &&
													'onScroll' === l &&
													Lr('scroll', r);
										}
									switch (n) {
										case 'input':
											G(r), $(r, a, !0);
											break;
										case 'textarea':
											G(r), ae(r);
											break;
										case 'select':
										case 'option':
											break;
										default:
											'function' === typeof a.onClick &&
												(r.onclick = qr);
									}
									(r = i),
										(t.updateQueue = r),
										null !== r && (t.flags |= 4);
								} else {
									(l =
										9 === i.nodeType ? i : i.ownerDocument),
										'http://www.w3.org/1999/xhtml' === e &&
											(e = se(n)),
										'http://www.w3.org/1999/xhtml' === e
											? 'script' === n
												? (((e =
														l.createElement(
															'div',
														)).innerHTML =
														'<script></script>'),
													(e = e.removeChild(
														e.firstChild,
													)))
												: 'string' === typeof r.is
													? (e = l.createElement(n, {
															is: r.is,
														}))
													: ((e = l.createElement(n)),
														'select' === n &&
															((l = e),
															r.multiple
																? (l.multiple =
																		!0)
																: r.size &&
																	(l.size =
																		r.size)))
											: (e = l.createElementNS(e, n)),
										(e[li] = t),
										(e[ui] = r),
										_s(e, t, !1, !1),
										(t.stateNode = e);
									e: {
										switch (((l = Ae(n, r)), n)) {
											case 'dialog':
												Lr('cancel', e),
													Lr('close', e),
													(i = r);
												break;
											case 'iframe':
											case 'object':
											case 'embed':
												Lr('load', e), (i = r);
												break;
											case 'video':
											case 'audio':
												for (i = 0; i < Dr.length; i++)
													Lr(Dr[i], e);
												i = r;
												break;
											case 'source':
												Lr('error', e), (i = r);
												break;
											case 'img':
											case 'image':
											case 'link':
												Lr('error', e),
													Lr('load', e),
													(i = r);
												break;
											case 'details':
												Lr('toggle', e), (i = r);
												break;
											case 'input':
												J(e, r),
													(i = q(e, r)),
													Lr('invalid', e);
												break;
											case 'option':
											default:
												i = r;
												break;
											case 'select':
												(e._wrapperState = {
													wasMultiple: !!r.multiple,
												}),
													(i = F({}, r, {
														value: void 0,
													})),
													Lr('invalid', e);
												break;
											case 'textarea':
												ie(e, r),
													(i = re(e, r)),
													Lr('invalid', e);
										}
										for (a in (ve(n, i), (u = i)))
											if (u.hasOwnProperty(a)) {
												var c = u[a];
												'style' === a
													? me(e, c)
													: 'dangerouslySetInnerHTML' ===
														  a
														? null !=
																(c = c
																	? c.__html
																	: void 0) &&
															ce(e, c)
														: 'children' === a
															? 'string' ===
																typeof c
																? ('textarea' !==
																		n ||
																		'' !==
																			c) &&
																	de(e, c)
																: 'number' ===
																		typeof c &&
																	de(
																		e,
																		'' + c,
																	)
															: 'suppressContentEditableWarning' !==
																	a &&
																'suppressHydrationWarning' !==
																	a &&
																'autoFocus' !==
																	a &&
																(s.hasOwnProperty(
																	a,
																)
																	? null !=
																			c &&
																		'onScroll' ===
																			a &&
																		Lr(
																			'scroll',
																			e,
																		)
																	: null !=
																			c &&
																		y(
																			e,
																			a,
																			c,
																			l,
																		));
											}
										switch (n) {
											case 'input':
												G(e), $(e, r, !1);
												break;
											case 'textarea':
												G(e), ae(e);
												break;
											case 'option':
												null != r.value &&
													e.setAttribute(
														'value',
														'' + Q(r.value),
													);
												break;
											case 'select':
												(e.multiple = !!r.multiple),
													null != (a = r.value)
														? ne(
																e,
																!!r.multiple,
																a,
																!1,
															)
														: null !=
																r.defaultValue &&
															ne(
																e,
																!!r.multiple,
																r.defaultValue,
																!0,
															);
												break;
											default:
												'function' ===
													typeof i.onClick &&
													(e.onclick = qr);
										}
										switch (n) {
											case 'button':
											case 'input':
											case 'select':
											case 'textarea':
												r = !!r.autoFocus;
												break e;
											case 'img':
												r = !0;
												break e;
											default:
												r = !1;
										}
									}
									r && (t.flags |= 4);
								}
								null !== t.ref &&
									((t.flags |= 512), (t.flags |= 2097152));
							}
							return Ys(t), null;
						case 6:
							if (e && null != t.stateNode)
								Ds(e, t, e.memoizedProps, r);
							else {
								if (
									'string' !== typeof r &&
									null === t.stateNode
								)
									throw Error(o(166));
								if (
									((n = $o(Zo.current)),
									$o(Jo.current),
									so(t))
								) {
									if (
										((r = t.stateNode),
										(n = t.memoizedProps),
										(r[li] = t),
										(a = r.nodeValue !== n) &&
											null !== (e = Zi))
									)
										switch (e.tag) {
											case 3:
												Xr(
													r.nodeValue,
													n,
													0 !== (1 & e.mode),
												);
												break;
											case 5:
												!0 !==
													e.memoizedProps
														.suppressHydrationWarning &&
													Xr(
														r.nodeValue,
														n,
														0 !== (1 & e.mode),
													);
										}
									a && (t.flags |= 4);
								} else
									((r = (
										9 === n.nodeType ? n : n.ownerDocument
									).createTextNode(r))[li] = t),
										(t.stateNode = r);
							}
							return Ys(t), null;
						case 13:
							if (
								(bi(ia),
								(r = t.memoizedState),
								null === e ||
									(null !== e.memoizedState &&
										null !== e.memoizedState.dehydrated))
							) {
								if (
									eo &&
									null !== $i &&
									0 !== (1 & t.mode) &&
									0 === (128 & t.flags)
								)
									lo(), uo(), (t.flags |= 98560), (a = !1);
								else if (
									((a = so(t)),
									null !== r && null !== r.dehydrated)
								) {
									if (null === e) {
										if (!a) throw Error(o(318));
										if (
											!(a =
												null !== (a = t.memoizedState)
													? a.dehydrated
													: null)
										)
											throw Error(o(317));
										a[li] = t;
									} else
										uo(),
											0 === (128 & t.flags) &&
												(t.memoizedState = null),
											(t.flags |= 4);
									Ys(t), (a = !1);
								} else
									null !== to && (ru(to), (to = null)),
										(a = !0);
								if (!a) return 65536 & t.flags ? t : null;
							}
							return 0 !== (128 & t.flags)
								? ((t.lanes = n), t)
								: ((r = null !== r) !==
										(null !== e &&
											null !== e.memoizedState) &&
										r &&
										((t.child.flags |= 8192),
										0 !== (1 & t.mode) &&
											(null === e ||
											0 !== (1 & ia.current)
												? 0 === Dl && (Dl = 3)
												: fu())),
									null !== t.updateQueue && (t.flags |= 4),
									Ys(t),
									null);
						case 4:
							return (
								ta(),
								Ps(e, t),
								null === e && jr(t.stateNode.containerInfo),
								Ys(t),
								null
							);
						case 10:
							return yo(t.type._context), Ys(t), null;
						case 19:
							if ((bi(ia), null === (a = t.memoizedState)))
								return Ys(t), null;
							if (
								((r = 0 !== (128 & t.flags)),
								null === (l = a.rendering))
							)
								if (r) Us(a, !1);
								else {
									if (
										0 !== Dl ||
										(null !== e && 0 !== (128 & e.flags))
									)
										for (e = t.child; null !== e; ) {
											if (null !== (l = oa(e))) {
												for (
													t.flags |= 128,
														Us(a, !1),
														null !==
															(r =
																l.updateQueue) &&
															((t.updateQueue =
																r),
															(t.flags |= 4)),
														t.subtreeFlags = 0,
														r = n,
														n = t.child;
													null !== n;

												)
													(e = r),
														((a = n).flags &=
															14680066),
														null ===
														(l = a.alternate)
															? ((a.childLanes = 0),
																(a.lanes = e),
																(a.child =
																	null),
																(a.subtreeFlags = 0),
																(a.memoizedProps =
																	null),
																(a.memoizedState =
																	null),
																(a.updateQueue =
																	null),
																(a.dependencies =
																	null),
																(a.stateNode =
																	null))
															: ((a.childLanes =
																	l.childLanes),
																(a.lanes =
																	l.lanes),
																(a.child =
																	l.child),
																(a.subtreeFlags = 0),
																(a.deletions =
																	null),
																(a.memoizedProps =
																	l.memoizedProps),
																(a.memoizedState =
																	l.memoizedState),
																(a.updateQueue =
																	l.updateQueue),
																(a.type =
																	l.type),
																(e =
																	l.dependencies),
																(a.dependencies =
																	null === e
																		? null
																		: {
																				lanes: e.lanes,
																				firstContext:
																					e.firstContext,
																			})),
														(n = n.sibling);
												return (
													xi(
														ia,
														(1 & ia.current) | 2,
													),
													t.child
												);
											}
											e = e.sibling;
										}
									null !== a.tail &&
										Je() > Nl &&
										((t.flags |= 128),
										(r = !0),
										Us(a, !1),
										(t.lanes = 4194304));
								}
							else {
								if (!r)
									if (null !== (e = oa(l))) {
										if (
											((t.flags |= 128),
											(r = !0),
											null !== (n = e.updateQueue) &&
												((t.updateQueue = n),
												(t.flags |= 4)),
											Us(a, !0),
											null === a.tail &&
												'hidden' === a.tailMode &&
												!l.alternate &&
												!eo)
										)
											return Ys(t), null;
									} else
										2 * Je() - a.renderingStartTime > Nl &&
											1073741824 !== n &&
											((t.flags |= 128),
											(r = !0),
											Us(a, !1),
											(t.lanes = 4194304));
								a.isBackwards
									? ((l.sibling = t.child), (t.child = l))
									: (null !== (n = a.last)
											? (n.sibling = l)
											: (t.child = l),
										(a.last = l));
							}
							return null !== a.tail
								? ((t = a.tail),
									(a.rendering = t),
									(a.tail = t.sibling),
									(a.renderingStartTime = Je()),
									(t.sibling = null),
									(n = ia.current),
									xi(ia, r ? (1 & n) | 2 : 1 & n),
									t)
								: (Ys(t), null);
						case 22:
						case 23:
							return (
								lu(),
								(r = null !== t.memoizedState),
								null !== e &&
									(null !== e.memoizedState) !== r &&
									(t.flags |= 8192),
								r && 0 !== (1 & t.mode)
									? 0 !== (1073741824 & Pl) &&
										(Ys(t),
										6 & t.subtreeFlags && (t.flags |= 8192))
									: Ys(t),
								null
							);
						case 24:
						case 25:
							return null;
					}
					throw Error(o(156, t.tag));
				}
				function Hs(e, t) {
					switch ((Ki(t), t.tag)) {
						case 1:
							return (
								_i(t.type) && Pi(),
								65536 & (e = t.flags)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 3:
							return (
								ta(),
								bi(ki),
								bi(Ci),
								sa(),
								0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 5:
							return ra(t), null;
						case 13:
							if (
								(bi(ia),
								null !== (e = t.memoizedState) &&
									null !== e.dehydrated)
							) {
								if (null === t.alternate) throw Error(o(340));
								uo();
							}
							return 65536 & (e = t.flags)
								? ((t.flags = (-65537 & e) | 128), t)
								: null;
						case 19:
							return bi(ia), null;
						case 4:
							return ta(), null;
						case 10:
							return yo(t.type._context), null;
						case 22:
						case 23:
							return lu(), null;
						default:
							return null;
					}
				}
				(_s = function (e, t) {
					for (var n = t.child; null !== n; ) {
						if (5 === n.tag || 6 === n.tag)
							e.appendChild(n.stateNode);
						else if (4 !== n.tag && null !== n.child) {
							(n.child.return = n), (n = n.child);
							continue;
						}
						if (n === t) break;
						for (; null === n.sibling; ) {
							if (null === n.return || n.return === t) return;
							n = n.return;
						}
						(n.sibling.return = n.return), (n = n.sibling);
					}
				}),
					(Ps = function () {}),
					(Ms = function (e, t, n, r) {
						var i = e.memoizedProps;
						if (i !== r) {
							(e = t.stateNode), $o(Jo.current);
							var o,
								a = null;
							switch (n) {
								case 'input':
									(i = q(e, i)), (r = q(e, r)), (a = []);
									break;
								case 'select':
									(i = F({}, i, { value: void 0 })),
										(r = F({}, r, { value: void 0 })),
										(a = []);
									break;
								case 'textarea':
									(i = re(e, i)), (r = re(e, r)), (a = []);
									break;
								default:
									'function' !== typeof i.onClick &&
										'function' === typeof r.onClick &&
										(e.onclick = qr);
							}
							for (c in (ve(n, r), (n = null), i))
								if (
									!r.hasOwnProperty(c) &&
									i.hasOwnProperty(c) &&
									null != i[c]
								)
									if ('style' === c) {
										var l = i[c];
										for (o in l)
											l.hasOwnProperty(o) &&
												(n || (n = {}), (n[o] = ''));
									} else
										'dangerouslySetInnerHTML' !== c &&
											'children' !== c &&
											'suppressContentEditableWarning' !==
												c &&
											'suppressHydrationWarning' !== c &&
											'autoFocus' !== c &&
											(s.hasOwnProperty(c)
												? a || (a = [])
												: (a = a || []).push(c, null));
							for (c in r) {
								var u = r[c];
								if (
									((l = null != i ? i[c] : void 0),
									r.hasOwnProperty(c) &&
										u !== l &&
										(null != u || null != l))
								)
									if ('style' === c)
										if (l) {
											for (o in l)
												!l.hasOwnProperty(o) ||
													(u &&
														u.hasOwnProperty(o)) ||
													(n || (n = {}),
													(n[o] = ''));
											for (o in u)
												u.hasOwnProperty(o) &&
													l[o] !== u[o] &&
													(n || (n = {}),
													(n[o] = u[o]));
										} else
											n || (a || (a = []), a.push(c, n)),
												(n = u);
									else
										'dangerouslySetInnerHTML' === c
											? ((u = u ? u.__html : void 0),
												(l = l ? l.__html : void 0),
												null != u &&
													l !== u &&
													(a = a || []).push(c, u))
											: 'children' === c
												? ('string' !== typeof u &&
														'number' !==
															typeof u) ||
													(a = a || []).push(
														c,
														'' + u,
													)
												: 'suppressContentEditableWarning' !==
														c &&
													'suppressHydrationWarning' !==
														c &&
													(s.hasOwnProperty(c)
														? (null != u &&
																'onScroll' ===
																	c &&
																Lr('scroll', e),
															a ||
																l === u ||
																(a = []))
														: (a = a || []).push(
																c,
																u,
															));
							}
							n && (a = a || []).push('style', n);
							var c = a;
							(t.updateQueue = c) && (t.flags |= 4);
						}
					}),
					(Ds = function (e, t, n, r) {
						n !== r && (t.flags |= 4);
					});
				var Gs = !1,
					Ws = !1,
					Xs = 'function' === typeof WeakSet ? WeakSet : Set,
					qs = null;
				function Js(e, t) {
					var n = e.ref;
					if (null !== n)
						if ('function' === typeof n)
							try {
								n(null);
							} catch (r) {
								bu(e, t, r);
							}
						else n.current = null;
				}
				function Ks(e, t, n) {
					try {
						n();
					} catch (r) {
						bu(e, t, r);
					}
				}
				var Zs = !1;
				function $s(e, t, n) {
					var r = t.updateQueue;
					if (null !== (r = null !== r ? r.lastEffect : null)) {
						var i = (r = r.next);
						do {
							if ((i.tag & e) === e) {
								var o = i.destroy;
								(i.destroy = void 0),
									void 0 !== o && Ks(t, n, o);
							}
							i = i.next;
						} while (i !== r);
					}
				}
				function el(e, t) {
					if (
						null !==
						(t = null !== (t = t.updateQueue) ? t.lastEffect : null)
					) {
						var n = (t = t.next);
						do {
							if ((n.tag & e) === e) {
								var r = n.create;
								n.destroy = r();
							}
							n = n.next;
						} while (n !== t);
					}
				}
				function tl(e) {
					var t = e.ref;
					if (null !== t) {
						var n = e.stateNode;
						e.tag,
							(e = n),
							'function' === typeof t ? t(e) : (t.current = e);
					}
				}
				function nl(e) {
					var t = e.alternate;
					null !== t && ((e.alternate = null), nl(t)),
						(e.child = null),
						(e.deletions = null),
						(e.sibling = null),
						5 === e.tag &&
							null !== (t = e.stateNode) &&
							(delete t[li],
							delete t[ui],
							delete t[di],
							delete t[fi],
							delete t[hi]),
						(e.stateNode = null),
						(e.return = null),
						(e.dependencies = null),
						(e.memoizedProps = null),
						(e.memoizedState = null),
						(e.pendingProps = null),
						(e.stateNode = null),
						(e.updateQueue = null);
				}
				function rl(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag;
				}
				function il(e) {
					e: for (;;) {
						for (; null === e.sibling; ) {
							if (null === e.return || rl(e.return)) return null;
							e = e.return;
						}
						for (
							e.sibling.return = e.return, e = e.sibling;
							5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

						) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							(e.child.return = e), (e = e.child);
						}
						if (!(2 & e.flags)) return e.stateNode;
					}
				}
				function ol(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode),
							t
								? 8 === n.nodeType
									? n.parentNode.insertBefore(e, t)
									: n.insertBefore(e, t)
								: (8 === n.nodeType
										? (t = n.parentNode).insertBefore(e, n)
										: (t = n).appendChild(e),
									(null !== (n = n._reactRootContainer) &&
										void 0 !== n) ||
										null !== t.onclick ||
										(t.onclick = qr));
					else if (4 !== r && null !== (e = e.child))
						for (ol(e, t, n), e = e.sibling; null !== e; )
							ol(e, t, n), (e = e.sibling);
				}
				function al(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode),
							t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== r && null !== (e = e.child))
						for (al(e, t, n), e = e.sibling; null !== e; )
							al(e, t, n), (e = e.sibling);
				}
				var sl = null,
					ll = !1;
				function ul(e, t, n) {
					for (n = n.child; null !== n; )
						cl(e, t, n), (n = n.sibling);
				}
				function cl(e, t, n) {
					if (it && 'function' === typeof it.onCommitFiberUnmount)
						try {
							it.onCommitFiberUnmount(rt, n);
						} catch (s) {}
					switch (n.tag) {
						case 5:
							Ws || Js(n, t);
						case 6:
							var r = sl,
								i = ll;
							(sl = null),
								ul(e, t, n),
								(ll = i),
								null !== (sl = r) &&
									(ll
										? ((e = sl),
											(n = n.stateNode),
											8 === e.nodeType
												? e.parentNode.removeChild(n)
												: e.removeChild(n))
										: sl.removeChild(n.stateNode));
							break;
						case 18:
							null !== sl &&
								(ll
									? ((e = sl),
										(n = n.stateNode),
										8 === e.nodeType
											? ii(e.parentNode, n)
											: 1 === e.nodeType && ii(e, n),
										Vt(e))
									: ii(sl, n.stateNode));
							break;
						case 4:
							(r = sl),
								(i = ll),
								(sl = n.stateNode.containerInfo),
								(ll = !0),
								ul(e, t, n),
								(sl = r),
								(ll = i);
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							if (
								!Ws &&
								null !== (r = n.updateQueue) &&
								null !== (r = r.lastEffect)
							) {
								i = r = r.next;
								do {
									var o = i,
										a = o.destroy;
									(o = o.tag),
										void 0 !== a &&
											(0 !== (2 & o) || 0 !== (4 & o)) &&
											Ks(n, t, a),
										(i = i.next);
								} while (i !== r);
							}
							ul(e, t, n);
							break;
						case 1:
							if (
								!Ws &&
								(Js(n, t),
								'function' ===
									typeof (r = n.stateNode)
										.componentWillUnmount)
							)
								try {
									(r.props = n.memoizedProps),
										(r.state = n.memoizedState),
										r.componentWillUnmount();
								} catch (s) {
									bu(n, t, s);
								}
							ul(e, t, n);
							break;
						case 21:
							ul(e, t, n);
							break;
						case 22:
							1 & n.mode
								? ((Ws = (r = Ws) || null !== n.memoizedState),
									ul(e, t, n),
									(Ws = r))
								: ul(e, t, n);
							break;
						default:
							ul(e, t, n);
					}
				}
				function dl(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var n = e.stateNode;
						null === n && (n = e.stateNode = new Xs()),
							t.forEach(function (t) {
								var r = ku.bind(null, e, t);
								n.has(t) || (n.add(t), t.then(r, r));
							});
					}
				}
				function fl(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var i = n[r];
							try {
								var a = e,
									s = t,
									l = s;
								e: for (; null !== l; ) {
									switch (l.tag) {
										case 5:
											(sl = l.stateNode), (ll = !1);
											break e;
										case 3:
										case 4:
											(sl = l.stateNode.containerInfo),
												(ll = !0);
											break e;
									}
									l = l.return;
								}
								if (null === sl) throw Error(o(160));
								cl(a, s, i), (sl = null), (ll = !1);
								var u = i.alternate;
								null !== u && (u.return = null),
									(i.return = null);
							} catch (c) {
								bu(i, t, c);
							}
						}
					if (12854 & t.subtreeFlags)
						for (t = t.child; null !== t; )
							hl(t, e), (t = t.sibling);
				}
				function hl(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if ((fl(t, e), pl(e), 4 & r)) {
								try {
									$s(3, e, e.return), el(3, e);
								} catch (g) {
									bu(e, e.return, g);
								}
								try {
									$s(5, e, e.return);
								} catch (g) {
									bu(e, e.return, g);
								}
							}
							break;
						case 1:
							fl(t, e),
								pl(e),
								512 & r && null !== n && Js(n, n.return);
							break;
						case 5:
							if (
								(fl(t, e),
								pl(e),
								512 & r && null !== n && Js(n, n.return),
								32 & e.flags)
							) {
								var i = e.stateNode;
								try {
									de(i, '');
								} catch (g) {
									bu(e, e.return, g);
								}
							}
							if (4 & r && null != (i = e.stateNode)) {
								var a = e.memoizedProps,
									s = null !== n ? n.memoizedProps : a,
									l = e.type,
									u = e.updateQueue;
								if (((e.updateQueue = null), null !== u))
									try {
										'input' === l &&
											'radio' === a.type &&
											null != a.name &&
											K(i, a),
											Ae(l, s);
										var c = Ae(l, a);
										for (s = 0; s < u.length; s += 2) {
											var d = u[s],
												f = u[s + 1];
											'style' === d
												? me(i, f)
												: 'dangerouslySetInnerHTML' ===
													  d
													? ce(i, f)
													: 'children' === d
														? de(i, f)
														: y(i, d, f, c);
										}
										switch (l) {
											case 'input':
												Z(i, a);
												break;
											case 'textarea':
												oe(i, a);
												break;
											case 'select':
												var h =
													i._wrapperState.wasMultiple;
												i._wrapperState.wasMultiple =
													!!a.multiple;
												var p = a.value;
												null != p
													? ne(i, !!a.multiple, p, !1)
													: h !== !!a.multiple &&
														(null != a.defaultValue
															? ne(
																	i,
																	!!a.multiple,
																	a.defaultValue,
																	!0,
																)
															: ne(
																	i,
																	!!a.multiple,
																	a.multiple
																		? []
																		: '',
																	!1,
																));
										}
										i[ui] = a;
									} catch (g) {
										bu(e, e.return, g);
									}
							}
							break;
						case 6:
							if ((fl(t, e), pl(e), 4 & r)) {
								if (null === e.stateNode) throw Error(o(162));
								(i = e.stateNode), (a = e.memoizedProps);
								try {
									i.nodeValue = a;
								} catch (g) {
									bu(e, e.return, g);
								}
							}
							break;
						case 3:
							if (
								(fl(t, e),
								pl(e),
								4 & r &&
									null !== n &&
									n.memoizedState.isDehydrated)
							)
								try {
									Vt(t.containerInfo);
								} catch (g) {
									bu(e, e.return, g);
								}
							break;
						case 4:
						default:
							fl(t, e), pl(e);
							break;
						case 13:
							fl(t, e),
								pl(e),
								8192 & (i = e.child).flags &&
									((a = null !== i.memoizedState),
									(i.stateNode.isHidden = a),
									!a ||
										(null !== i.alternate &&
											null !==
												i.alternate.memoizedState) ||
										(jl = Je())),
								4 & r && dl(e);
							break;
						case 22:
							if (
								((d = null !== n && null !== n.memoizedState),
								1 & e.mode
									? ((Ws = (c = Ws) || d), fl(t, e), (Ws = c))
									: fl(t, e),
								pl(e),
								8192 & r)
							) {
								if (
									((c = null !== e.memoizedState),
									(e.stateNode.isHidden = c) &&
										!d &&
										0 !== (1 & e.mode))
								)
									for (qs = e, d = e.child; null !== d; ) {
										for (f = qs = d; null !== qs; ) {
											switch (
												((p = (h = qs).child), h.tag)
											) {
												case 0:
												case 11:
												case 14:
												case 15:
													$s(4, h, h.return);
													break;
												case 1:
													Js(h, h.return);
													var m = h.stateNode;
													if (
														'function' ===
														typeof m.componentWillUnmount
													) {
														(r = h), (n = h.return);
														try {
															(t = r),
																(m.props =
																	t.memoizedProps),
																(m.state =
																	t.memoizedState),
																m.componentWillUnmount();
														} catch (g) {
															bu(r, n, g);
														}
													}
													break;
												case 5:
													Js(h, h.return);
													break;
												case 22:
													if (
														null !== h.memoizedState
													) {
														Al(f);
														continue;
													}
											}
											null !== p
												? ((p.return = h), (qs = p))
												: Al(f);
										}
										d = d.sibling;
									}
								e: for (d = null, f = e; ; ) {
									if (5 === f.tag) {
										if (null === d) {
											d = f;
											try {
												(i = f.stateNode),
													c
														? 'function' ===
															typeof (a = i.style)
																.setProperty
															? a.setProperty(
																	'display',
																	'none',
																	'important',
																)
															: (a.display =
																	'none')
														: ((l = f.stateNode),
															(s =
																void 0 !==
																	(u =
																		f
																			.memoizedProps
																			.style) &&
																null !== u &&
																u.hasOwnProperty(
																	'display',
																)
																	? u.display
																	: null),
															(l.style.display =
																pe(
																	'display',
																	s,
																)));
											} catch (g) {
												bu(e, e.return, g);
											}
										}
									} else if (6 === f.tag) {
										if (null === d)
											try {
												f.stateNode.nodeValue = c
													? ''
													: f.memoizedProps;
											} catch (g) {
												bu(e, e.return, g);
											}
									} else if (
										((22 !== f.tag && 23 !== f.tag) ||
											null === f.memoizedState ||
											f === e) &&
										null !== f.child
									) {
										(f.child.return = f), (f = f.child);
										continue;
									}
									if (f === e) break e;
									for (; null === f.sibling; ) {
										if (null === f.return || f.return === e)
											break e;
										d === f && (d = null), (f = f.return);
									}
									d === f && (d = null),
										(f.sibling.return = f.return),
										(f = f.sibling);
								}
							}
							break;
						case 19:
							fl(t, e), pl(e), 4 & r && dl(e);
						case 21:
					}
				}
				function pl(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							e: {
								for (var n = e.return; null !== n; ) {
									if (rl(n)) {
										var r = n;
										break e;
									}
									n = n.return;
								}
								throw Error(o(160));
							}
							switch (r.tag) {
								case 5:
									var i = r.stateNode;
									32 & r.flags &&
										(de(i, ''), (r.flags &= -33)),
										al(e, il(e), i);
									break;
								case 3:
								case 4:
									var a = r.stateNode.containerInfo;
									ol(e, il(e), a);
									break;
								default:
									throw Error(o(161));
							}
						} catch (s) {
							bu(e, e.return, s);
						}
						e.flags &= -3;
					}
					4096 & t && (e.flags &= -4097);
				}
				function ml(e, t, n) {
					(qs = e), gl(e, t, n);
				}
				function gl(e, t, n) {
					for (var r = 0 !== (1 & e.mode); null !== qs; ) {
						var i = qs,
							o = i.child;
						if (22 === i.tag && r) {
							var a = null !== i.memoizedState || Gs;
							if (!a) {
								var s = i.alternate,
									l =
										(null !== s &&
											null !== s.memoizedState) ||
										Ws;
								s = Gs;
								var u = Ws;
								if (((Gs = a), (Ws = l) && !u))
									for (qs = i; null !== qs; )
										(l = (a = qs).child),
											22 === a.tag &&
											null !== a.memoizedState
												? yl(i)
												: null !== l
													? ((l.return = a), (qs = l))
													: yl(i);
								for (; null !== o; )
									(qs = o), gl(o, t, n), (o = o.sibling);
								(qs = i), (Gs = s), (Ws = u);
							}
							vl(e);
						} else
							0 !== (8772 & i.subtreeFlags) && null !== o
								? ((o.return = i), (qs = o))
								: vl(e);
					}
				}
				function vl(e) {
					for (; null !== qs; ) {
						var t = qs;
						if (0 !== (8772 & t.flags)) {
							var n = t.alternate;
							try {
								if (0 !== (8772 & t.flags))
									switch (t.tag) {
										case 0:
										case 11:
										case 15:
											Ws || el(5, t);
											break;
										case 1:
											var r = t.stateNode;
											if (4 & t.flags && !Ws)
												if (null === n)
													r.componentDidMount();
												else {
													var i =
														t.elementType === t.type
															? n.memoizedProps
															: ho(
																	t.type,
																	n.memoizedProps,
																);
													r.componentDidUpdate(
														i,
														n.memoizedState,
														r.__reactInternalSnapshotBeforeUpdate,
													);
												}
											var a = t.updateQueue;
											null !== a && Lo(t, a, r);
											break;
										case 3:
											var s = t.updateQueue;
											if (null !== s) {
												if (
													((n = null),
													null !== t.child)
												)
													switch (t.child.tag) {
														case 5:
														case 1:
															n =
																t.child
																	.stateNode;
													}
												Lo(t, s, n);
											}
											break;
										case 5:
											var l = t.stateNode;
											if (null === n && 4 & t.flags) {
												n = l;
												var u = t.memoizedProps;
												switch (t.type) {
													case 'button':
													case 'input':
													case 'select':
													case 'textarea':
														u.autoFocus &&
															n.focus();
														break;
													case 'img':
														u.src &&
															(n.src = u.src);
												}
											}
											break;
										case 6:
										case 4:
										case 12:
										case 19:
										case 17:
										case 21:
										case 22:
										case 23:
										case 25:
											break;
										case 13:
											if (null === t.memoizedState) {
												var c = t.alternate;
												if (null !== c) {
													var d = c.memoizedState;
													if (null !== d) {
														var f = d.dehydrated;
														null !== f && Vt(f);
													}
												}
											}
											break;
										default:
											throw Error(o(163));
									}
								Ws || (512 & t.flags && tl(t));
							} catch (h) {
								bu(t, t.return, h);
							}
						}
						if (t === e) {
							qs = null;
							break;
						}
						if (null !== (n = t.sibling)) {
							(n.return = t.return), (qs = n);
							break;
						}
						qs = t.return;
					}
				}
				function Al(e) {
					for (; null !== qs; ) {
						var t = qs;
						if (t === e) {
							qs = null;
							break;
						}
						var n = t.sibling;
						if (null !== n) {
							(n.return = t.return), (qs = n);
							break;
						}
						qs = t.return;
					}
				}
				function yl(e) {
					for (; null !== qs; ) {
						var t = qs;
						try {
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									var n = t.return;
									try {
										el(4, t);
									} catch (l) {
										bu(t, n, l);
									}
									break;
								case 1:
									var r = t.stateNode;
									if (
										'function' ===
										typeof r.componentDidMount
									) {
										var i = t.return;
										try {
											r.componentDidMount();
										} catch (l) {
											bu(t, i, l);
										}
									}
									var o = t.return;
									try {
										tl(t);
									} catch (l) {
										bu(t, o, l);
									}
									break;
								case 5:
									var a = t.return;
									try {
										tl(t);
									} catch (l) {
										bu(t, a, l);
									}
							}
						} catch (l) {
							bu(t, t.return, l);
						}
						if (t === e) {
							qs = null;
							break;
						}
						var s = t.sibling;
						if (null !== s) {
							(s.return = t.return), (qs = s);
							break;
						}
						qs = t.return;
					}
				}
				var wl,
					bl = Math.ceil,
					xl = w.ReactCurrentDispatcher,
					El = w.ReactCurrentOwner,
					Cl = w.ReactCurrentBatchConfig,
					kl = 0,
					Sl = null,
					Tl = null,
					_l = 0,
					Pl = 0,
					Ml = wi(0),
					Dl = 0,
					Ol = null,
					Rl = 0,
					Bl = 0,
					Ll = 0,
					Il = null,
					Fl = null,
					jl = 0,
					Nl = 1 / 0,
					zl = null,
					Vl = !1,
					Ul = null,
					Yl = null,
					Ql = !1,
					Hl = null,
					Gl = 0,
					Wl = 0,
					Xl = null,
					ql = -1,
					Jl = 0;
				function Kl() {
					return 0 !== (6 & kl) ? Je() : -1 !== ql ? ql : (ql = Je());
				}
				function Zl(e) {
					return 0 === (1 & e.mode)
						? 1
						: 0 !== (2 & kl) && 0 !== _l
							? _l & -_l
							: null !== fo.transition
								? (0 === Jl && (Jl = pt()), Jl)
								: 0 !== (e = At)
									? e
									: (e =
											void 0 === (e = window.event)
												? 16
												: qt(e.type));
				}
				function $l(e, t, n, r) {
					if (50 < Wl) throw ((Wl = 0), (Xl = null), Error(o(185)));
					gt(e, n, r),
						(0 !== (2 & kl) && e === Sl) ||
							(e === Sl &&
								(0 === (2 & kl) && (Bl |= n),
								4 === Dl && iu(e, _l)),
							eu(e, r),
							1 === n &&
								0 === kl &&
								0 === (1 & t.mode) &&
								((Nl = Je() + 500), Li && ji()));
				}
				function eu(e, t) {
					var n = e.callbackNode;
					!(function (e, t) {
						for (
							var n = e.suspendedLanes,
								r = e.pingedLanes,
								i = e.expirationTimes,
								o = e.pendingLanes;
							0 < o;

						) {
							var a = 31 - ot(o),
								s = 1 << a,
								l = i[a];
							-1 === l
								? (0 !== (s & n) && 0 === (s & r)) ||
									(i[a] = ft(s, t))
								: l <= t && (e.expiredLanes |= s),
								(o &= ~s);
						}
					})(e, t);
					var r = dt(e, e === Sl ? _l : 0);
					if (0 === r)
						null !== n && We(n),
							(e.callbackNode = null),
							(e.callbackPriority = 0);
					else if (((t = r & -r), e.callbackPriority !== t)) {
						if ((null != n && We(n), 1 === t))
							0 === e.tag
								? (function (e) {
										(Li = !0), Fi(e);
									})(ou.bind(null, e))
								: Fi(ou.bind(null, e)),
								ni(function () {
									0 === (6 & kl) && ji();
								}),
								(n = null);
						else {
							switch (yt(r)) {
								case 1:
									n = Ze;
									break;
								case 4:
									n = $e;
									break;
								case 16:
								default:
									n = et;
									break;
								case 536870912:
									n = nt;
							}
							n = Su(n, tu.bind(null, e));
						}
						(e.callbackPriority = t), (e.callbackNode = n);
					}
				}
				function tu(e, t) {
					if (((ql = -1), (Jl = 0), 0 !== (6 & kl)))
						throw Error(o(327));
					var n = e.callbackNode;
					if (yu() && e.callbackNode !== n) return null;
					var r = dt(e, e === Sl ? _l : 0);
					if (0 === r) return null;
					if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t)
						t = hu(e, r);
					else {
						t = r;
						var i = kl;
						kl |= 2;
						var a = du();
						for (
							(Sl === e && _l === t) ||
							((zl = null), (Nl = Je() + 500), uu(e, t));
							;

						)
							try {
								mu();
								break;
							} catch (l) {
								cu(e, l);
							}
						Ao(),
							(xl.current = a),
							(kl = i),
							null !== Tl
								? (t = 0)
								: ((Sl = null), (_l = 0), (t = Dl));
					}
					if (0 !== t) {
						if (
							(2 === t &&
								0 !== (i = ht(e)) &&
								((r = i), (t = nu(e, i))),
							1 === t)
						)
							throw (
								((n = Ol), uu(e, 0), iu(e, r), eu(e, Je()), n)
							);
						if (6 === t) iu(e, r);
						else {
							if (
								((i = e.current.alternate),
								0 === (30 & r) &&
									!(function (e) {
										for (var t = e; ; ) {
											if (16384 & t.flags) {
												var n = t.updateQueue;
												if (
													null !== n &&
													null !== (n = n.stores)
												)
													for (
														var r = 0;
														r < n.length;
														r++
													) {
														var i = n[r],
															o = i.getSnapshot;
														i = i.value;
														try {
															if (!rr(o(), i))
																return !1;
														} catch (s) {
															return !1;
														}
													}
											}
											if (
												((n = t.child),
												16384 & t.subtreeFlags &&
													null !== n)
											)
												(n.return = t), (t = n);
											else {
												if (t === e) break;
												for (; null === t.sibling; ) {
													if (
														null === t.return ||
														t.return === e
													)
														return !0;
													t = t.return;
												}
												(t.sibling.return = t.return),
													(t = t.sibling);
											}
										}
										return !0;
									})(i) &&
									(2 === (t = hu(e, r)) &&
										0 !== (a = ht(e)) &&
										((r = a), (t = nu(e, a))),
									1 === t))
							)
								throw (
									((n = Ol),
									uu(e, 0),
									iu(e, r),
									eu(e, Je()),
									n)
								);
							switch (
								((e.finishedWork = i), (e.finishedLanes = r), t)
							) {
								case 0:
								case 1:
									throw Error(o(345));
								case 2:
								case 5:
									Au(e, Fl, zl);
									break;
								case 3:
									if (
										(iu(e, r),
										(130023424 & r) === r &&
											10 < (t = jl + 500 - Je()))
									) {
										if (0 !== dt(e, 0)) break;
										if (
											((i = e.suspendedLanes) & r) !==
											r
										) {
											Kl(),
												(e.pingedLanes |=
													e.suspendedLanes & i);
											break;
										}
										e.timeoutHandle = $r(
											Au.bind(null, e, Fl, zl),
											t,
										);
										break;
									}
									Au(e, Fl, zl);
									break;
								case 4:
									if ((iu(e, r), (4194240 & r) === r)) break;
									for (t = e.eventTimes, i = -1; 0 < r; ) {
										var s = 31 - ot(r);
										(a = 1 << s),
											(s = t[s]) > i && (i = s),
											(r &= ~a);
									}
									if (
										((r = i),
										10 <
											(r =
												(120 > (r = Je() - r)
													? 120
													: 480 > r
														? 480
														: 1080 > r
															? 1080
															: 1920 > r
																? 1920
																: 3e3 > r
																	? 3e3
																	: 4320 > r
																		? 4320
																		: 1960 *
																			bl(
																				r /
																					1960,
																			)) -
												r))
									) {
										e.timeoutHandle = $r(
											Au.bind(null, e, Fl, zl),
											r,
										);
										break;
									}
									Au(e, Fl, zl);
									break;
								default:
									throw Error(o(329));
							}
						}
					}
					return (
						eu(e, Je()),
						e.callbackNode === n ? tu.bind(null, e) : null
					);
				}
				function nu(e, t) {
					var n = Il;
					return (
						e.current.memoizedState.isDehydrated &&
							(uu(e, t).flags |= 256),
						2 !== (e = hu(e, t)) &&
							((t = Fl), (Fl = n), null !== t && ru(t)),
						e
					);
				}
				function ru(e) {
					null === Fl ? (Fl = e) : Fl.push.apply(Fl, e);
				}
				function iu(e, t) {
					for (
						t &= ~Ll,
							t &= ~Bl,
							e.suspendedLanes |= t,
							e.pingedLanes &= ~t,
							e = e.expirationTimes;
						0 < t;

					) {
						var n = 31 - ot(t),
							r = 1 << n;
						(e[n] = -1), (t &= ~r);
					}
				}
				function ou(e) {
					if (0 !== (6 & kl)) throw Error(o(327));
					yu();
					var t = dt(e, 0);
					if (0 === (1 & t)) return eu(e, Je()), null;
					var n = hu(e, t);
					if (0 !== e.tag && 2 === n) {
						var r = ht(e);
						0 !== r && ((t = r), (n = nu(e, r)));
					}
					if (1 === n)
						throw ((n = Ol), uu(e, 0), iu(e, t), eu(e, Je()), n);
					if (6 === n) throw Error(o(345));
					return (
						(e.finishedWork = e.current.alternate),
						(e.finishedLanes = t),
						Au(e, Fl, zl),
						eu(e, Je()),
						null
					);
				}
				function au(e, t) {
					var n = kl;
					kl |= 1;
					try {
						return e(t);
					} finally {
						0 === (kl = n) && ((Nl = Je() + 500), Li && ji());
					}
				}
				function su(e) {
					null !== Hl && 0 === Hl.tag && 0 === (6 & kl) && yu();
					var t = kl;
					kl |= 1;
					var n = Cl.transition,
						r = At;
					try {
						if (((Cl.transition = null), (At = 1), e)) return e();
					} finally {
						(At = r),
							(Cl.transition = n),
							0 === (6 & (kl = t)) && ji();
					}
				}
				function lu() {
					(Pl = Ml.current), bi(Ml);
				}
				function uu(e, t) {
					(e.finishedWork = null), (e.finishedLanes = 0);
					var n = e.timeoutHandle;
					if (
						(-1 !== n && ((e.timeoutHandle = -1), ei(n)),
						null !== Tl)
					)
						for (n = Tl.return; null !== n; ) {
							var r = n;
							switch ((Ki(r), r.tag)) {
								case 1:
									null !== (r = r.type.childContextTypes) &&
										void 0 !== r &&
										Pi();
									break;
								case 3:
									ta(), bi(ki), bi(Ci), sa();
									break;
								case 5:
									ra(r);
									break;
								case 4:
									ta();
									break;
								case 13:
								case 19:
									bi(ia);
									break;
								case 10:
									yo(r.type._context);
									break;
								case 22:
								case 23:
									lu();
							}
							n = n.return;
						}
					if (
						((Sl = e),
						(Tl = e = Mu(e.current, null)),
						(_l = Pl = t),
						(Dl = 0),
						(Ol = null),
						(Ll = Bl = Rl = 0),
						(Fl = Il = null),
						null !== Eo)
					) {
						for (t = 0; t < Eo.length; t++)
							if (null !== (r = (n = Eo[t]).interleaved)) {
								n.interleaved = null;
								var i = r.next,
									o = n.pending;
								if (null !== o) {
									var a = o.next;
									(o.next = i), (r.next = a);
								}
								n.pending = r;
							}
						Eo = null;
					}
					return e;
				}
				function cu(e, t) {
					for (;;) {
						var n = Tl;
						try {
							if ((Ao(), (la.current = ns), pa)) {
								for (var r = da.memoizedState; null !== r; ) {
									var i = r.queue;
									null !== i && (i.pending = null),
										(r = r.next);
								}
								pa = !1;
							}
							if (
								((ca = 0),
								(ha = fa = da = null),
								(ma = !1),
								(ga = 0),
								(El.current = null),
								null === n || null === n.return)
							) {
								(Dl = 1), (Ol = t), (Tl = null);
								break;
							}
							e: {
								var a = e,
									s = n.return,
									l = n,
									u = t;
								if (
									((t = _l),
									(l.flags |= 32768),
									null !== u &&
										'object' === typeof u &&
										'function' === typeof u.then)
								) {
									var c = u,
										d = l,
										f = d.tag;
									if (
										0 === (1 & d.mode) &&
										(0 === f || 11 === f || 15 === f)
									) {
										var h = d.alternate;
										h
											? ((d.updateQueue = h.updateQueue),
												(d.memoizedState =
													h.memoizedState),
												(d.lanes = h.lanes))
											: ((d.updateQueue = null),
												(d.memoizedState = null));
									}
									var p = hs(s);
									if (null !== p) {
										(p.flags &= -257),
											ps(p, s, l, 0, t),
											1 & p.mode && fs(a, c, t),
											(u = c);
										var m = (t = p).updateQueue;
										if (null === m) {
											var g = new Set();
											g.add(u), (t.updateQueue = g);
										} else m.add(u);
										break e;
									}
									if (0 === (1 & t)) {
										fs(a, c, t), fu();
										break e;
									}
									u = Error(o(426));
								} else if (eo && 1 & l.mode) {
									var v = hs(s);
									if (null !== v) {
										0 === (65536 & v.flags) &&
											(v.flags |= 256),
											ps(v, s, l, 0, t),
											co(as(u, l));
										break e;
									}
								}
								(a = u = as(u, l)),
									4 !== Dl && (Dl = 2),
									null === Il ? (Il = [a]) : Il.push(a),
									(a = s);
								do {
									switch (a.tag) {
										case 3:
											(a.flags |= 65536),
												(t &= -t),
												(a.lanes |= t),
												Ro(a, cs(0, u, t));
											break e;
										case 1:
											l = u;
											var A = a.type,
												y = a.stateNode;
											if (
												0 === (128 & a.flags) &&
												('function' ===
													typeof A.getDerivedStateFromError ||
													(null !== y &&
														'function' ===
															typeof y.componentDidCatch &&
														(null === Yl ||
															!Yl.has(y))))
											) {
												(a.flags |= 65536),
													(t &= -t),
													(a.lanes |= t),
													Ro(a, ds(a, l, t));
												break e;
											}
									}
									a = a.return;
								} while (null !== a);
							}
							vu(n);
						} catch (w) {
							(t = w),
								Tl === n && null !== n && (Tl = n = n.return);
							continue;
						}
						break;
					}
				}
				function du() {
					var e = xl.current;
					return (xl.current = ns), null === e ? ns : e;
				}
				function fu() {
					(0 !== Dl && 3 !== Dl && 2 !== Dl) || (Dl = 4),
						null === Sl ||
							(0 === (268435455 & Rl) &&
								0 === (268435455 & Bl)) ||
							iu(Sl, _l);
				}
				function hu(e, t) {
					var n = kl;
					kl |= 2;
					var r = du();
					for ((Sl === e && _l === t) || ((zl = null), uu(e, t)); ; )
						try {
							pu();
							break;
						} catch (i) {
							cu(e, i);
						}
					if ((Ao(), (kl = n), (xl.current = r), null !== Tl))
						throw Error(o(261));
					return (Sl = null), (_l = 0), Dl;
				}
				function pu() {
					for (; null !== Tl; ) gu(Tl);
				}
				function mu() {
					for (; null !== Tl && !Xe(); ) gu(Tl);
				}
				function gu(e) {
					var t = wl(e.alternate, e, Pl);
					(e.memoizedProps = e.pendingProps),
						null === t ? vu(e) : (Tl = t),
						(El.current = null);
				}
				function vu(e) {
					var t = e;
					do {
						var n = t.alternate;
						if (((e = t.return), 0 === (32768 & t.flags))) {
							if (null !== (n = Qs(n, t, Pl)))
								return void (Tl = n);
						} else {
							if (null !== (n = Hs(n, t)))
								return (n.flags &= 32767), void (Tl = n);
							if (null === e) return (Dl = 6), void (Tl = null);
							(e.flags |= 32768),
								(e.subtreeFlags = 0),
								(e.deletions = null);
						}
						if (null !== (t = t.sibling)) return void (Tl = t);
						Tl = t = e;
					} while (null !== t);
					0 === Dl && (Dl = 5);
				}
				function Au(e, t, n) {
					var r = At,
						i = Cl.transition;
					try {
						(Cl.transition = null),
							(At = 1),
							(function (e, t, n, r) {
								do {
									yu();
								} while (null !== Hl);
								if (0 !== (6 & kl)) throw Error(o(327));
								n = e.finishedWork;
								var i = e.finishedLanes;
								if (null === n) return null;
								if (
									((e.finishedWork = null),
									(e.finishedLanes = 0),
									n === e.current)
								)
									throw Error(o(177));
								(e.callbackNode = null),
									(e.callbackPriority = 0);
								var a = n.lanes | n.childLanes;
								if (
									((function (e, t) {
										var n = e.pendingLanes & ~t;
										(e.pendingLanes = t),
											(e.suspendedLanes = 0),
											(e.pingedLanes = 0),
											(e.expiredLanes &= t),
											(e.mutableReadLanes &= t),
											(e.entangledLanes &= t),
											(t = e.entanglements);
										var r = e.eventTimes;
										for (e = e.expirationTimes; 0 < n; ) {
											var i = 31 - ot(n),
												o = 1 << i;
											(t[i] = 0),
												(r[i] = -1),
												(e[i] = -1),
												(n &= ~o);
										}
									})(e, a),
									e === Sl && ((Tl = Sl = null), (_l = 0)),
									(0 === (2064 & n.subtreeFlags) &&
										0 === (2064 & n.flags)) ||
										Ql ||
										((Ql = !0),
										Su(et, function () {
											return yu(), null;
										})),
									(a = 0 !== (15990 & n.flags)),
									0 !== (15990 & n.subtreeFlags) || a)
								) {
									(a = Cl.transition), (Cl.transition = null);
									var s = At;
									At = 1;
									var l = kl;
									(kl |= 4),
										(El.current = null),
										(function (e, t) {
											if (((Jr = Yt), ur((e = lr())))) {
												if ('selectionStart' in e)
													var n = {
														start: e.selectionStart,
														end: e.selectionEnd,
													};
												else
													e: {
														var r =
															(n =
																((n =
																	e.ownerDocument) &&
																	n.defaultView) ||
																window)
																.getSelection &&
															n.getSelection();
														if (
															r &&
															0 !== r.rangeCount
														) {
															n = r.anchorNode;
															var i =
																	r.anchorOffset,
																a = r.focusNode;
															r = r.focusOffset;
															try {
																n.nodeType,
																	a.nodeType;
															} catch (b) {
																n = null;
																break e;
															}
															var s = 0,
																l = -1,
																u = -1,
																c = 0,
																d = 0,
																f = e,
																h = null;
															t: for (;;) {
																for (
																	var p;
																	f !== n ||
																		(0 !==
																			i &&
																			3 !==
																				f.nodeType) ||
																		(l =
																			s +
																			i),
																		f !==
																			a ||
																			(0 !==
																				r &&
																				3 !==
																					f.nodeType) ||
																			(u =
																				s +
																				r),
																		3 ===
																			f.nodeType &&
																			(s +=
																				f
																					.nodeValue
																					.length),
																		null !==
																			(p =
																				f.firstChild);

																)
																	(h = f),
																		(f = p);
																for (;;) {
																	if (f === e)
																		break t;
																	if (
																		(h ===
																			n &&
																			++c ===
																				i &&
																			(l =
																				s),
																		h ===
																			a &&
																			++d ===
																				r &&
																			(u =
																				s),
																		null !==
																			(p =
																				f.nextSibling))
																	)
																		break;
																	h = (f = h)
																		.parentNode;
																}
																f = p;
															}
															n =
																-1 === l ||
																-1 === u
																	? null
																	: {
																			start: l,
																			end: u,
																		};
														} else n = null;
													}
												n = n || { start: 0, end: 0 };
											} else n = null;
											for (
												Kr = {
													focusedElem: e,
													selectionRange: n,
												},
													Yt = !1,
													qs = t;
												null !== qs;

											)
												if (
													((e = (t = qs).child),
													0 !==
														(1028 &
															t.subtreeFlags) &&
														null !== e)
												)
													(e.return = t), (qs = e);
												else
													for (; null !== qs; ) {
														t = qs;
														try {
															var m = t.alternate;
															if (
																0 !==
																(1024 & t.flags)
															)
																switch (t.tag) {
																	case 0:
																	case 11:
																	case 15:
																	case 5:
																	case 6:
																	case 4:
																	case 17:
																		break;
																	case 1:
																		if (
																			null !==
																			m
																		) {
																			var g =
																					m.memoizedProps,
																				v =
																					m.memoizedState,
																				A =
																					t.stateNode,
																				y =
																					A.getSnapshotBeforeUpdate(
																						t.elementType ===
																							t.type
																							? g
																							: ho(
																									t.type,
																									g,
																								),
																						v,
																					);
																			A.__reactInternalSnapshotBeforeUpdate =
																				y;
																		}
																		break;
																	case 3:
																		var w =
																			t
																				.stateNode
																				.containerInfo;
																		1 ===
																		w.nodeType
																			? (w.textContent =
																					'')
																			: 9 ===
																					w.nodeType &&
																				w.documentElement &&
																				w.removeChild(
																					w.documentElement,
																				);
																		break;
																	default:
																		throw Error(
																			o(
																				163,
																			),
																		);
																}
														} catch (b) {
															bu(t, t.return, b);
														}
														if (
															null !==
															(e = t.sibling)
														) {
															(e.return =
																t.return),
																(qs = e);
															break;
														}
														qs = t.return;
													}
											(m = Zs), (Zs = !1);
										})(e, n),
										hl(n, e),
										cr(Kr),
										(Yt = !!Jr),
										(Kr = Jr = null),
										(e.current = n),
										ml(n, e, i),
										qe(),
										(kl = l),
										(At = s),
										(Cl.transition = a);
								} else e.current = n;
								if (
									(Ql && ((Ql = !1), (Hl = e), (Gl = i)),
									(a = e.pendingLanes),
									0 === a && (Yl = null),
									(function (e) {
										if (
											it &&
											'function' ===
												typeof it.onCommitFiberRoot
										)
											try {
												it.onCommitFiberRoot(
													rt,
													e,
													void 0,
													128 ===
														(128 & e.current.flags),
												);
											} catch (t) {}
									})(n.stateNode),
									eu(e, Je()),
									null !== t)
								)
									for (
										r = e.onRecoverableError, n = 0;
										n < t.length;
										n++
									)
										(i = t[n]),
											r(i.value, {
												componentStack: i.stack,
												digest: i.digest,
											});
								if (Vl)
									throw ((Vl = !1), (e = Ul), (Ul = null), e);
								0 !== (1 & Gl) && 0 !== e.tag && yu(),
									(a = e.pendingLanes),
									0 !== (1 & a)
										? e === Xl
											? Wl++
											: ((Wl = 0), (Xl = e))
										: (Wl = 0),
									ji();
							})(e, t, n, r);
					} finally {
						(Cl.transition = i), (At = r);
					}
					return null;
				}
				function yu() {
					if (null !== Hl) {
						var e = yt(Gl),
							t = Cl.transition,
							n = At;
						try {
							if (
								((Cl.transition = null),
								(At = 16 > e ? 16 : e),
								null === Hl)
							)
								var r = !1;
							else {
								if (
									((e = Hl),
									(Hl = null),
									(Gl = 0),
									0 !== (6 & kl))
								)
									throw Error(o(331));
								var i = kl;
								for (kl |= 4, qs = e.current; null !== qs; ) {
									var a = qs,
										s = a.child;
									if (0 !== (16 & qs.flags)) {
										var l = a.deletions;
										if (null !== l) {
											for (var u = 0; u < l.length; u++) {
												var c = l[u];
												for (qs = c; null !== qs; ) {
													var d = qs;
													switch (d.tag) {
														case 0:
														case 11:
														case 15:
															$s(8, d, a);
													}
													var f = d.child;
													if (null !== f)
														(f.return = d),
															(qs = f);
													else
														for (; null !== qs; ) {
															var h = (d = qs)
																	.sibling,
																p = d.return;
															if (
																(nl(d), d === c)
															) {
																qs = null;
																break;
															}
															if (null !== h) {
																(h.return = p),
																	(qs = h);
																break;
															}
															qs = p;
														}
												}
											}
											var m = a.alternate;
											if (null !== m) {
												var g = m.child;
												if (null !== g) {
													m.child = null;
													do {
														var v = g.sibling;
														(g.sibling = null),
															(g = v);
													} while (null !== g);
												}
											}
											qs = a;
										}
									}
									if (
										0 !== (2064 & a.subtreeFlags) &&
										null !== s
									)
										(s.return = a), (qs = s);
									else
										e: for (; null !== qs; ) {
											if (0 !== (2048 & (a = qs).flags))
												switch (a.tag) {
													case 0:
													case 11:
													case 15:
														$s(9, a, a.return);
												}
											var A = a.sibling;
											if (null !== A) {
												(A.return = a.return), (qs = A);
												break e;
											}
											qs = a.return;
										}
								}
								var y = e.current;
								for (qs = y; null !== qs; ) {
									var w = (s = qs).child;
									if (
										0 !== (2064 & s.subtreeFlags) &&
										null !== w
									)
										(w.return = s), (qs = w);
									else
										e: for (s = y; null !== qs; ) {
											if (0 !== (2048 & (l = qs).flags))
												try {
													switch (l.tag) {
														case 0:
														case 11:
														case 15:
															el(9, l);
													}
												} catch (x) {
													bu(l, l.return, x);
												}
											if (l === s) {
												qs = null;
												break e;
											}
											var b = l.sibling;
											if (null !== b) {
												(b.return = l.return), (qs = b);
												break e;
											}
											qs = l.return;
										}
								}
								if (
									((kl = i),
									ji(),
									it &&
										'function' ===
											typeof it.onPostCommitFiberRoot)
								)
									try {
										it.onPostCommitFiberRoot(rt, e);
									} catch (x) {}
								r = !0;
							}
							return r;
						} finally {
							(At = n), (Cl.transition = t);
						}
					}
					return !1;
				}
				function wu(e, t, n) {
					(e = Do(e, (t = cs(0, (t = as(n, t)), 1)), 1)),
						(t = Kl()),
						null !== e && (gt(e, 1, t), eu(e, t));
				}
				function bu(e, t, n) {
					if (3 === e.tag) wu(e, e, n);
					else
						for (; null !== t; ) {
							if (3 === t.tag) {
								wu(t, e, n);
								break;
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if (
									'function' ===
										typeof t.type
											.getDerivedStateFromError ||
									('function' ===
										typeof r.componentDidCatch &&
										(null === Yl || !Yl.has(r)))
								) {
									(t = Do(
										t,
										(e = ds(t, (e = as(n, e)), 1)),
										1,
									)),
										(e = Kl()),
										null !== t && (gt(t, 1, e), eu(t, e));
									break;
								}
							}
							t = t.return;
						}
				}
				function xu(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t),
						(t = Kl()),
						(e.pingedLanes |= e.suspendedLanes & n),
						Sl === e &&
							(_l & n) === n &&
							(4 === Dl ||
							(3 === Dl &&
								(130023424 & _l) === _l &&
								500 > Je() - jl)
								? uu(e, 0)
								: (Ll |= n)),
						eu(e, t);
				}
				function Eu(e, t) {
					0 === t &&
						(0 === (1 & e.mode)
							? (t = 1)
							: ((t = ut),
								0 === (130023424 & (ut <<= 1)) &&
									(ut = 4194304)));
					var n = Kl();
					null !== (e = So(e, t)) && (gt(e, t, n), eu(e, n));
				}
				function Cu(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), Eu(e, n);
				}
				function ku(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								i = e.memoizedState;
							null !== i && (n = i.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						default:
							throw Error(o(314));
					}
					null !== r && r.delete(t), Eu(e, n);
				}
				function Su(e, t) {
					return Ge(e, t);
				}
				function Tu(e, t, n, r) {
					(this.tag = e),
						(this.key = n),
						(this.sibling =
							this.child =
							this.return =
							this.stateNode =
							this.type =
							this.elementType =
								null),
						(this.index = 0),
						(this.ref = null),
						(this.pendingProps = t),
						(this.dependencies =
							this.memoizedState =
							this.updateQueue =
							this.memoizedProps =
								null),
						(this.mode = r),
						(this.subtreeFlags = this.flags = 0),
						(this.deletions = null),
						(this.childLanes = this.lanes = 0),
						(this.alternate = null);
				}
				function _u(e, t, n, r) {
					return new Tu(e, t, n, r);
				}
				function Pu(e) {
					return !(!(e = e.prototype) || !e.isReactComponent);
				}
				function Mu(e, t) {
					var n = e.alternate;
					return (
						null === n
							? (((n = _u(e.tag, t, e.key, e.mode)).elementType =
									e.elementType),
								(n.type = e.type),
								(n.stateNode = e.stateNode),
								(n.alternate = e),
								(e.alternate = n))
							: ((n.pendingProps = t),
								(n.type = e.type),
								(n.flags = 0),
								(n.subtreeFlags = 0),
								(n.deletions = null)),
						(n.flags = 14680064 & e.flags),
						(n.childLanes = e.childLanes),
						(n.lanes = e.lanes),
						(n.child = e.child),
						(n.memoizedProps = e.memoizedProps),
						(n.memoizedState = e.memoizedState),
						(n.updateQueue = e.updateQueue),
						(t = e.dependencies),
						(n.dependencies =
							null === t
								? null
								: {
										lanes: t.lanes,
										firstContext: t.firstContext,
									}),
						(n.sibling = e.sibling),
						(n.index = e.index),
						(n.ref = e.ref),
						n
					);
				}
				function Du(e, t, n, r, i, a) {
					var s = 2;
					if (((r = e), 'function' === typeof e)) Pu(e) && (s = 1);
					else if ('string' === typeof e) s = 5;
					else
						e: switch (e) {
							case E:
								return Ou(n.children, i, a, t);
							case C:
								(s = 8), (i |= 8);
								break;
							case k:
								return (
									((e = _u(12, n, t, 2 | i)).elementType = k),
									(e.lanes = a),
									e
								);
							case P:
								return (
									((e = _u(13, n, t, i)).elementType = P),
									(e.lanes = a),
									e
								);
							case M:
								return (
									((e = _u(19, n, t, i)).elementType = M),
									(e.lanes = a),
									e
								);
							case R:
								return Ru(n, i, a, t);
							default:
								if ('object' === typeof e && null !== e)
									switch (e.$$typeof) {
										case S:
											s = 10;
											break e;
										case T:
											s = 9;
											break e;
										case _:
											s = 11;
											break e;
										case D:
											s = 14;
											break e;
										case O:
											(s = 16), (r = null);
											break e;
									}
								throw Error(
									o(130, null == e ? e : typeof e, ''),
								);
						}
					return (
						((t = _u(s, n, t, i)).elementType = e),
						(t.type = r),
						(t.lanes = a),
						t
					);
				}
				function Ou(e, t, n, r) {
					return ((e = _u(7, e, r, t)).lanes = n), e;
				}
				function Ru(e, t, n, r) {
					return (
						((e = _u(22, e, r, t)).elementType = R),
						(e.lanes = n),
						(e.stateNode = { isHidden: !1 }),
						e
					);
				}
				function Bu(e, t, n) {
					return ((e = _u(6, e, null, t)).lanes = n), e;
				}
				function Lu(e, t, n) {
					return (
						((t = _u(
							4,
							null !== e.children ? e.children : [],
							e.key,
							t,
						)).lanes = n),
						(t.stateNode = {
							containerInfo: e.containerInfo,
							pendingChildren: null,
							implementation: e.implementation,
						}),
						t
					);
				}
				function Iu(e, t, n, r, i) {
					(this.tag = t),
						(this.containerInfo = e),
						(this.finishedWork =
							this.pingCache =
							this.current =
							this.pendingChildren =
								null),
						(this.timeoutHandle = -1),
						(this.callbackNode =
							this.pendingContext =
							this.context =
								null),
						(this.callbackPriority = 0),
						(this.eventTimes = mt(0)),
						(this.expirationTimes = mt(-1)),
						(this.entangledLanes =
							this.finishedLanes =
							this.mutableReadLanes =
							this.expiredLanes =
							this.pingedLanes =
							this.suspendedLanes =
							this.pendingLanes =
								0),
						(this.entanglements = mt(0)),
						(this.identifierPrefix = r),
						(this.onRecoverableError = i),
						(this.mutableSourceEagerHydrationData = null);
				}
				function Fu(e, t, n, r, i, o, a, s, l) {
					return (
						(e = new Iu(e, t, n, s, l)),
						1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
						(o = _u(3, null, null, t)),
						(e.current = o),
						(o.stateNode = e),
						(o.memoizedState = {
							element: r,
							isDehydrated: n,
							cache: null,
							transitions: null,
							pendingSuspenseBoundaries: null,
						}),
						_o(o),
						e
					);
				}
				function ju(e) {
					if (!e) return Ei;
					e: {
						if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
							throw Error(o(170));
						var t = e;
						do {
							switch (t.tag) {
								case 3:
									t = t.stateNode.context;
									break e;
								case 1:
									if (_i(t.type)) {
										t =
											t.stateNode
												.__reactInternalMemoizedMergedChildContext;
										break e;
									}
							}
							t = t.return;
						} while (null !== t);
						throw Error(o(171));
					}
					if (1 === e.tag) {
						var n = e.type;
						if (_i(n)) return Di(e, n, t);
					}
					return t;
				}
				function Nu(e, t, n, r, i, o, a, s, l) {
					return (
						((e = Fu(n, r, !0, e, 0, o, 0, s, l)).context =
							ju(null)),
						(n = e.current),
						((o = Mo((r = Kl()), (i = Zl(n)))).callback =
							void 0 !== t && null !== t ? t : null),
						Do(n, o, i),
						(e.current.lanes = i),
						gt(e, i, r),
						eu(e, r),
						e
					);
				}
				function zu(e, t, n, r) {
					var i = t.current,
						o = Kl(),
						a = Zl(i);
					return (
						(n = ju(n)),
						null === t.context
							? (t.context = n)
							: (t.pendingContext = n),
						((t = Mo(o, a)).payload = { element: e }),
						null !== (r = void 0 === r ? null : r) &&
							(t.callback = r),
						null !== (e = Do(i, t, a)) &&
							($l(e, i, a, o), Oo(e, i, a)),
						a
					);
				}
				function Vu(e) {
					return (e = e.current).child
						? (e.child.tag, e.child.stateNode)
						: null;
				}
				function Uu(e, t) {
					if (
						null !== (e = e.memoizedState) &&
						null !== e.dehydrated
					) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t;
					}
				}
				function Yu(e, t) {
					Uu(e, t), (e = e.alternate) && Uu(e, t);
				}
				wl = function (e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || ki.current)
							gs = !0;
						else {
							if (0 === (e.lanes & n) && 0 === (128 & t.flags))
								return (
									(gs = !1),
									(function (e, t, n) {
										switch (t.tag) {
											case 3:
												Ss(t), uo();
												break;
											case 5:
												na(t);
												break;
											case 1:
												_i(t.type) && Oi(t);
												break;
											case 4:
												ea(
													t,
													t.stateNode.containerInfo,
												);
												break;
											case 10:
												var r = t.type._context,
													i = t.memoizedProps.value;
												xi(po, r._currentValue),
													(r._currentValue = i);
												break;
											case 13:
												if (
													null !==
													(r = t.memoizedState)
												)
													return null !== r.dehydrated
														? (xi(
																ia,
																1 & ia.current,
															),
															(t.flags |= 128),
															null)
														: 0 !==
															  (n &
																	t.child
																		.childLanes)
															? Bs(e, t, n)
															: (xi(
																	ia,
																	1 &
																		ia.current,
																),
																null !==
																(e = Vs(
																	e,
																	t,
																	n,
																))
																	? e.sibling
																	: null);
												xi(ia, 1 & ia.current);
												break;
											case 19:
												if (
													((r =
														0 !==
														(n & t.childLanes)),
													0 !== (128 & e.flags))
												) {
													if (r) return Ns(e, t, n);
													t.flags |= 128;
												}
												if (
													(null !==
														(i = t.memoizedState) &&
														((i.rendering = null),
														(i.tail = null),
														(i.lastEffect = null)),
													xi(ia, ia.current),
													r)
												)
													break;
												return null;
											case 22:
											case 23:
												return (
													(t.lanes = 0), bs(e, t, n)
												);
										}
										return Vs(e, t, n);
									})(e, t, n)
								);
							gs = 0 !== (131072 & e.flags);
						}
					else
						(gs = !1),
							eo &&
								0 !== (1048576 & t.flags) &&
								qi(t, Ui, t.index);
					switch (((t.lanes = 0), t.tag)) {
						case 2:
							var r = t.type;
							zs(e, t), (e = t.pendingProps);
							var i = Ti(t, Ci.current);
							bo(t, n), (i = wa(null, t, r, e, i, n));
							var a = ba();
							return (
								(t.flags |= 1),
								'object' === typeof i &&
								null !== i &&
								'function' === typeof i.render &&
								void 0 === i.$$typeof
									? ((t.tag = 1),
										(t.memoizedState = null),
										(t.updateQueue = null),
										_i(r) ? ((a = !0), Oi(t)) : (a = !1),
										(t.memoizedState =
											null !== i.state &&
											void 0 !== i.state
												? i.state
												: null),
										_o(t),
										(i.updater = jo),
										(t.stateNode = i),
										(i._reactInternals = t),
										Uo(t, r, e, n),
										(t = ks(null, t, r, !0, a, n)))
									: ((t.tag = 0),
										eo && a && Ji(t),
										vs(null, t, i, n),
										(t = t.child)),
								t
							);
						case 16:
							r = t.elementType;
							e: {
								switch (
									(zs(e, t),
									(e = t.pendingProps),
									(r = (i = r._init)(r._payload)),
									(t.type = r),
									(i = t.tag =
										(function (e) {
											if ('function' === typeof e)
												return Pu(e) ? 1 : 0;
											if (void 0 !== e && null !== e) {
												if ((e = e.$$typeof) === _)
													return 11;
												if (e === D) return 14;
											}
											return 2;
										})(r)),
									(e = ho(r, e)),
									i)
								) {
									case 0:
										t = Es(null, t, r, e, n);
										break e;
									case 1:
										t = Cs(null, t, r, e, n);
										break e;
									case 11:
										t = As(null, t, r, e, n);
										break e;
									case 14:
										t = ys(null, t, r, ho(r.type, e), n);
										break e;
								}
								throw Error(o(306, r, ''));
							}
							return t;
						case 0:
							return (
								(r = t.type),
								(i = t.pendingProps),
								Es(
									e,
									t,
									r,
									(i = t.elementType === r ? i : ho(r, i)),
									n,
								)
							);
						case 1:
							return (
								(r = t.type),
								(i = t.pendingProps),
								Cs(
									e,
									t,
									r,
									(i = t.elementType === r ? i : ho(r, i)),
									n,
								)
							);
						case 3:
							e: {
								if ((Ss(t), null === e)) throw Error(o(387));
								(r = t.pendingProps),
									(i = (a = t.memoizedState).element),
									Po(e, t),
									Bo(t, r, null, n);
								var s = t.memoizedState;
								if (((r = s.element), a.isDehydrated)) {
									if (
										((a = {
											element: r,
											isDehydrated: !1,
											cache: s.cache,
											pendingSuspenseBoundaries:
												s.pendingSuspenseBoundaries,
											transitions: s.transitions,
										}),
										(t.updateQueue.baseState = a),
										(t.memoizedState = a),
										256 & t.flags)
									) {
										t = Ts(
											e,
											t,
											r,
											n,
											(i = as(Error(o(423)), t)),
										);
										break e;
									}
									if (r !== i) {
										t = Ts(
											e,
											t,
											r,
											n,
											(i = as(Error(o(424)), t)),
										);
										break e;
									}
									for (
										$i = oi(
											t.stateNode.containerInfo
												.firstChild,
										),
											Zi = t,
											eo = !0,
											to = null,
											n = Xo(t, null, r, n),
											t.child = n;
										n;

									)
										(n.flags = (-3 & n.flags) | 4096),
											(n = n.sibling);
								} else {
									if ((uo(), r === i)) {
										t = Vs(e, t, n);
										break e;
									}
									vs(e, t, r, n);
								}
								t = t.child;
							}
							return t;
						case 5:
							return (
								na(t),
								null === e && oo(t),
								(r = t.type),
								(i = t.pendingProps),
								(a = null !== e ? e.memoizedProps : null),
								(s = i.children),
								Zr(r, i)
									? (s = null)
									: null !== a && Zr(r, a) && (t.flags |= 32),
								xs(e, t),
								vs(e, t, s, n),
								t.child
							);
						case 6:
							return null === e && oo(t), null;
						case 13:
							return Bs(e, t, n);
						case 4:
							return (
								ea(t, t.stateNode.containerInfo),
								(r = t.pendingProps),
								null === e
									? (t.child = Wo(t, null, r, n))
									: vs(e, t, r, n),
								t.child
							);
						case 11:
							return (
								(r = t.type),
								(i = t.pendingProps),
								As(
									e,
									t,
									r,
									(i = t.elementType === r ? i : ho(r, i)),
									n,
								)
							);
						case 7:
							return vs(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return (
								vs(e, t, t.pendingProps.children, n), t.child
							);
						case 10:
							e: {
								if (
									((r = t.type._context),
									(i = t.pendingProps),
									(a = t.memoizedProps),
									(s = i.value),
									xi(po, r._currentValue),
									(r._currentValue = s),
									null !== a)
								)
									if (rr(a.value, s)) {
										if (
											a.children === i.children &&
											!ki.current
										) {
											t = Vs(e, t, n);
											break e;
										}
									} else
										for (
											null !== (a = t.child) &&
											(a.return = t);
											null !== a;

										) {
											var l = a.dependencies;
											if (null !== l) {
												s = a.child;
												for (
													var u = l.firstContext;
													null !== u;

												) {
													if (u.context === r) {
														if (1 === a.tag) {
															(u = Mo(
																-1,
																n & -n,
															)).tag = 2;
															var c =
																a.updateQueue;
															if (null !== c) {
																var d = (c =
																	c.shared)
																	.pending;
																null === d
																	? (u.next =
																			u)
																	: ((u.next =
																			d.next),
																		(d.next =
																			u)),
																	(c.pending =
																		u);
															}
														}
														(a.lanes |= n),
															null !==
																(u =
																	a.alternate) &&
																(u.lanes |= n),
															wo(a.return, n, t),
															(l.lanes |= n);
														break;
													}
													u = u.next;
												}
											} else if (10 === a.tag)
												s =
													a.type === t.type
														? null
														: a.child;
											else if (18 === a.tag) {
												if (null === (s = a.return))
													throw Error(o(341));
												(s.lanes |= n),
													null !==
														(l = s.alternate) &&
														(l.lanes |= n),
													wo(s, n, t),
													(s = a.sibling);
											} else s = a.child;
											if (null !== s) s.return = a;
											else
												for (s = a; null !== s; ) {
													if (s === t) {
														s = null;
														break;
													}
													if (
														null !== (a = s.sibling)
													) {
														(a.return = s.return),
															(s = a);
														break;
													}
													s = s.return;
												}
											a = s;
										}
								vs(e, t, i.children, n), (t = t.child);
							}
							return t;
						case 9:
							return (
								(i = t.type),
								(r = t.pendingProps.children),
								bo(t, n),
								(r = r((i = xo(i)))),
								(t.flags |= 1),
								vs(e, t, r, n),
								t.child
							);
						case 14:
							return (
								(i = ho((r = t.type), t.pendingProps)),
								ys(e, t, r, (i = ho(r.type, i)), n)
							);
						case 15:
							return ws(e, t, t.type, t.pendingProps, n);
						case 17:
							return (
								(r = t.type),
								(i = t.pendingProps),
								(i = t.elementType === r ? i : ho(r, i)),
								zs(e, t),
								(t.tag = 1),
								_i(r) ? ((e = !0), Oi(t)) : (e = !1),
								bo(t, n),
								zo(t, r, i),
								Uo(t, r, i, n),
								ks(null, t, r, !0, e, n)
							);
						case 19:
							return Ns(e, t, n);
						case 22:
							return bs(e, t, n);
					}
					throw Error(o(156, t.tag));
				};
				var Qu =
					'function' === typeof reportError
						? reportError
						: function (e) {
								console.error(e);
							};
				function Hu(e) {
					this._internalRoot = e;
				}
				function Gu(e) {
					this._internalRoot = e;
				}
				function Wu(e) {
					return !(
						!e ||
						(1 !== e.nodeType &&
							9 !== e.nodeType &&
							11 !== e.nodeType)
					);
				}
				function Xu(e) {
					return !(
						!e ||
						(1 !== e.nodeType &&
							9 !== e.nodeType &&
							11 !== e.nodeType &&
							(8 !== e.nodeType ||
								' react-mount-point-unstable ' !== e.nodeValue))
					);
				}
				function qu() {}
				function Ju(e, t, n, r, i) {
					var o = n._reactRootContainer;
					if (o) {
						var a = o;
						if ('function' === typeof i) {
							var s = i;
							i = function () {
								var e = Vu(a);
								s.call(e);
							};
						}
						zu(t, a, e, i);
					} else
						a = (function (e, t, n, r, i) {
							if (i) {
								if ('function' === typeof r) {
									var o = r;
									r = function () {
										var e = Vu(a);
										o.call(e);
									};
								}
								var a = Nu(t, r, e, 0, null, !1, 0, '', qu);
								return (
									(e._reactRootContainer = a),
									(e[ci] = a.current),
									jr(8 === e.nodeType ? e.parentNode : e),
									su(),
									a
								);
							}
							for (; (i = e.lastChild); ) e.removeChild(i);
							if ('function' === typeof r) {
								var s = r;
								r = function () {
									var e = Vu(l);
									s.call(e);
								};
							}
							var l = Fu(e, 0, !1, null, 0, !1, 0, '', qu);
							return (
								(e._reactRootContainer = l),
								(e[ci] = l.current),
								jr(8 === e.nodeType ? e.parentNode : e),
								su(function () {
									zu(t, l, n, r);
								}),
								l
							);
						})(n, t, e, i, r);
					return Vu(a);
				}
				(Gu.prototype.render = Hu.prototype.render =
					function (e) {
						var t = this._internalRoot;
						if (null === t) throw Error(o(409));
						zu(e, t, null, null);
					}),
					(Gu.prototype.unmount = Hu.prototype.unmount =
						function () {
							var e = this._internalRoot;
							if (null !== e) {
								this._internalRoot = null;
								var t = e.containerInfo;
								su(function () {
									zu(null, e, null, null);
								}),
									(t[ci] = null);
							}
						}),
					(Gu.prototype.unstable_scheduleHydration = function (e) {
						if (e) {
							var t = Et();
							e = { blockedOn: null, target: e, priority: t };
							for (
								var n = 0;
								n < Ot.length && 0 !== t && t < Ot[n].priority;
								n++
							);
							Ot.splice(n, 0, e), 0 === n && It(e);
						}
					}),
					(wt = function (e) {
						switch (e.tag) {
							case 3:
								var t = e.stateNode;
								if (t.current.memoizedState.isDehydrated) {
									var n = ct(t.pendingLanes);
									0 !== n &&
										(vt(t, 1 | n),
										eu(t, Je()),
										0 === (6 & kl) &&
											((Nl = Je() + 500), ji()));
								}
								break;
							case 13:
								su(function () {
									var t = So(e, 1);
									if (null !== t) {
										var n = Kl();
										$l(t, e, 1, n);
									}
								}),
									Yu(e, 1);
						}
					}),
					(bt = function (e) {
						if (13 === e.tag) {
							var t = So(e, 134217728);
							if (null !== t) $l(t, e, 134217728, Kl());
							Yu(e, 134217728);
						}
					}),
					(xt = function (e) {
						if (13 === e.tag) {
							var t = Zl(e),
								n = So(e, t);
							if (null !== n) $l(n, e, t, Kl());
							Yu(e, t);
						}
					}),
					(Et = function () {
						return At;
					}),
					(Ct = function (e, t) {
						var n = At;
						try {
							return (At = e), t();
						} finally {
							At = n;
						}
					}),
					(be = function (e, t, n) {
						switch (t) {
							case 'input':
								if (
									(Z(e, n),
									(t = n.name),
									'radio' === n.type && null != t)
								) {
									for (n = e; n.parentNode; )
										n = n.parentNode;
									for (
										n = n.querySelectorAll(
											'input[name=' +
												JSON.stringify('' + t) +
												'][type="radio"]',
										),
											t = 0;
										t < n.length;
										t++
									) {
										var r = n[t];
										if (r !== e && r.form === e.form) {
											var i = vi(r);
											if (!i) throw Error(o(90));
											W(r), Z(r, i);
										}
									}
								}
								break;
							case 'textarea':
								oe(e, n);
								break;
							case 'select':
								null != (t = n.value) &&
									ne(e, !!n.multiple, t, !1);
						}
					}),
					(Te = au),
					(_e = su);
				var Ku = {
						usingClientEntryPoint: !1,
						Events: [mi, gi, vi, ke, Se, au],
					},
					Zu = {
						findFiberByHostInstance: pi,
						bundleType: 0,
						version: '18.2.0',
						rendererPackageName: 'react-dom',
					},
					$u = {
						bundleType: Zu.bundleType,
						version: Zu.version,
						rendererPackageName: Zu.rendererPackageName,
						rendererConfig: Zu.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: w.ReactCurrentDispatcher,
						findHostInstanceByFiber: function (e) {
							return null === (e = Qe(e)) ? null : e.stateNode;
						},
						findFiberByHostInstance:
							Zu.findFiberByHostInstance ||
							function () {
								return null;
							},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
					};
				if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var ec = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!ec.isDisabled && ec.supportsFiber)
						try {
							(rt = ec.inject($u)), (it = ec);
						} catch (tc) {}
				}
				(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ku),
					(t.createPortal = function (e, t) {
						var n =
							2 < arguments.length && void 0 !== arguments[2]
								? arguments[2]
								: null;
						if (!Wu(t)) throw Error(o(200));
						return (function (e, t, n) {
							var r =
								3 < arguments.length && void 0 !== arguments[3]
									? arguments[3]
									: null;
							return {
								$$typeof: x,
								key: null == r ? null : '' + r,
								children: e,
								containerInfo: t,
								implementation: n,
							};
						})(e, t, null, n);
					}),
					(t.createRoot = function (e, t) {
						if (!Wu(e)) throw Error(o(299));
						var n = !1,
							r = '',
							i = Qu;
						return (
							null !== t &&
								void 0 !== t &&
								(!0 === t.unstable_strictMode && (n = !0),
								void 0 !== t.identifierPrefix &&
									(r = t.identifierPrefix),
								void 0 !== t.onRecoverableError &&
									(i = t.onRecoverableError)),
							(t = Fu(e, 1, !1, null, 0, n, 0, r, i)),
							(e[ci] = t.current),
							jr(8 === e.nodeType ? e.parentNode : e),
							new Hu(t)
						);
					}),
					(t.findDOMNode = function (e) {
						if (null == e) return null;
						if (1 === e.nodeType) return e;
						var t = e._reactInternals;
						if (void 0 === t) {
							if ('function' === typeof e.render)
								throw Error(o(188));
							throw (
								((e = Object.keys(e).join(',')),
								Error(o(268, e)))
							);
						}
						return (e = null === (e = Qe(t)) ? null : e.stateNode);
					}),
					(t.flushSync = function (e) {
						return su(e);
					}),
					(t.hydrate = function (e, t, n) {
						if (!Xu(t)) throw Error(o(200));
						return Ju(null, e, t, !0, n);
					}),
					(t.hydrateRoot = function (e, t, n) {
						if (!Wu(e)) throw Error(o(405));
						var r = (null != n && n.hydratedSources) || null,
							i = !1,
							a = '',
							s = Qu;
						if (
							(null !== n &&
								void 0 !== n &&
								(!0 === n.unstable_strictMode && (i = !0),
								void 0 !== n.identifierPrefix &&
									(a = n.identifierPrefix),
								void 0 !== n.onRecoverableError &&
									(s = n.onRecoverableError)),
							(t = Nu(
								t,
								null,
								e,
								1,
								null != n ? n : null,
								i,
								0,
								a,
								s,
							)),
							(e[ci] = t.current),
							jr(e),
							r)
						)
							for (e = 0; e < r.length; e++)
								(i = (i = (n = r[e])._getVersion)(n._source)),
									null == t.mutableSourceEagerHydrationData
										? (t.mutableSourceEagerHydrationData = [
												n,
												i,
											])
										: t.mutableSourceEagerHydrationData.push(
												n,
												i,
											);
						return new Gu(t);
					}),
					(t.render = function (e, t, n) {
						if (!Xu(t)) throw Error(o(200));
						return Ju(null, e, t, !1, n);
					}),
					(t.unmountComponentAtNode = function (e) {
						if (!Xu(e)) throw Error(o(40));
						return (
							!!e._reactRootContainer &&
							(su(function () {
								Ju(null, null, e, !1, function () {
									(e._reactRootContainer = null),
										(e[ci] = null);
								});
							}),
							!0)
						);
					}),
					(t.unstable_batchedUpdates = au),
					(t.unstable_renderSubtreeIntoContainer = function (
						e,
						t,
						n,
						r,
					) {
						if (!Xu(n)) throw Error(o(200));
						if (null == e || void 0 === e._reactInternals)
							throw Error(o(38));
						return Ju(e, t, n, !1, r);
					}),
					(t.version = '18.2.0-next-9e3b772b8-20220608');
			},
			250: (e, t, n) => {
				'use strict';
				var r = n(164);
				(t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
			},
			164: (e, t, n) => {
				'use strict';
				!(function e() {
					if (
						'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
						'function' ===
							typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
					)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (t) {
							console.error(t);
						}
				})(),
					(e.exports = n(463));
			},
			374: (e, t, n) => {
				'use strict';
				var r = n(791),
					i = Symbol.for('react.element'),
					o = Symbol.for('react.fragment'),
					a = Object.prototype.hasOwnProperty,
					s =
						r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
							.ReactCurrentOwner,
					l = { key: !0, ref: !0, __self: !0, __source: !0 };
				function u(e, t, n) {
					var r,
						o = {},
						u = null,
						c = null;
					for (r in (void 0 !== n && (u = '' + n),
					void 0 !== t.key && (u = '' + t.key),
					void 0 !== t.ref && (c = t.ref),
					t))
						a.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
					if (e && e.defaultProps)
						for (r in (t = e.defaultProps))
							void 0 === o[r] && (o[r] = t[r]);
					return {
						$$typeof: i,
						type: e,
						key: u,
						ref: c,
						props: o,
						_owner: s.current,
					};
				}
				(t.Fragment = o), (t.jsx = u), (t.jsxs = u);
			},
			117: (e, t) => {
				'use strict';
				var n = Symbol.for('react.element'),
					r = Symbol.for('react.portal'),
					i = Symbol.for('react.fragment'),
					o = Symbol.for('react.strict_mode'),
					a = Symbol.for('react.profiler'),
					s = Symbol.for('react.provider'),
					l = Symbol.for('react.context'),
					u = Symbol.for('react.forward_ref'),
					c = Symbol.for('react.suspense'),
					d = Symbol.for('react.memo'),
					f = Symbol.for('react.lazy'),
					h = Symbol.iterator;
				var p = {
						isMounted: function () {
							return !1;
						},
						enqueueForceUpdate: function () {},
						enqueueReplaceState: function () {},
						enqueueSetState: function () {},
					},
					m = Object.assign,
					g = {};
				function v(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = g),
						(this.updater = n || p);
				}
				function A() {}
				function y(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = g),
						(this.updater = n || p);
				}
				(v.prototype.isReactComponent = {}),
					(v.prototype.setState = function (e, t) {
						if (
							'object' !== typeof e &&
							'function' !== typeof e &&
							null != e
						)
							throw Error(
								'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
							);
						this.updater.enqueueSetState(this, e, t, 'setState');
					}),
					(v.prototype.forceUpdate = function (e) {
						this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
					}),
					(A.prototype = v.prototype);
				var w = (y.prototype = new A());
				(w.constructor = y),
					m(w, v.prototype),
					(w.isPureReactComponent = !0);
				var b = Array.isArray,
					x = Object.prototype.hasOwnProperty,
					E = { current: null },
					C = { key: !0, ref: !0, __self: !0, __source: !0 };
				function k(e, t, r) {
					var i,
						o = {},
						a = null,
						s = null;
					if (null != t)
						for (i in (void 0 !== t.ref && (s = t.ref),
						void 0 !== t.key && (a = '' + t.key),
						t))
							x.call(t, i) &&
								!C.hasOwnProperty(i) &&
								(o[i] = t[i]);
					var l = arguments.length - 2;
					if (1 === l) o.children = r;
					else if (1 < l) {
						for (var u = Array(l), c = 0; c < l; c++)
							u[c] = arguments[c + 2];
						o.children = u;
					}
					if (e && e.defaultProps)
						for (i in (l = e.defaultProps))
							void 0 === o[i] && (o[i] = l[i]);
					return {
						$$typeof: n,
						type: e,
						key: a,
						ref: s,
						props: o,
						_owner: E.current,
					};
				}
				function S(e) {
					return (
						'object' === typeof e && null !== e && e.$$typeof === n
					);
				}
				var T = /\/+/g;
				function _(e, t) {
					return 'object' === typeof e && null !== e && null != e.key
						? (function (e) {
								var t = { '=': '=0', ':': '=2' };
								return (
									'$' +
									e.replace(/[=:]/g, function (e) {
										return t[e];
									})
								);
							})('' + e.key)
						: t.toString(36);
				}
				function P(e, t, i, o, a) {
					var s = typeof e;
					('undefined' !== s && 'boolean' !== s) || (e = null);
					var l = !1;
					if (null === e) l = !0;
					else
						switch (s) {
							case 'string':
							case 'number':
								l = !0;
								break;
							case 'object':
								switch (e.$$typeof) {
									case n:
									case r:
										l = !0;
								}
						}
					if (l)
						return (
							(a = a((l = e))),
							(e = '' === o ? '.' + _(l, 0) : o),
							b(a)
								? ((i = ''),
									null != e &&
										(i = e.replace(T, '$&/') + '/'),
									P(a, t, i, '', function (e) {
										return e;
									}))
								: null != a &&
									(S(a) &&
										(a = (function (e, t) {
											return {
												$$typeof: n,
												type: e.type,
												key: t,
												ref: e.ref,
												props: e.props,
												_owner: e._owner,
											};
										})(
											a,
											i +
												(!a.key ||
												(l && l.key === a.key)
													? ''
													: ('' + a.key).replace(
															T,
															'$&/',
														) + '/') +
												e,
										)),
									t.push(a)),
							1
						);
					if (((l = 0), (o = '' === o ? '.' : o + ':'), b(e)))
						for (var u = 0; u < e.length; u++) {
							var c = o + _((s = e[u]), u);
							l += P(s, t, i, c, a);
						}
					else if (
						((c = (function (e) {
							return null === e || 'object' !== typeof e
								? null
								: 'function' ===
									  typeof (e =
											(h && e[h]) || e['@@iterator'])
									? e
									: null;
						})(e)),
						'function' === typeof c)
					)
						for (e = c.call(e), u = 0; !(s = e.next()).done; )
							l += P((s = s.value), t, i, (c = o + _(s, u++)), a);
					else if ('object' === s)
						throw (
							((t = String(e)),
							Error(
								'Objects are not valid as a React child (found: ' +
									('[object Object]' === t
										? 'object with keys {' +
											Object.keys(e).join(', ') +
											'}'
										: t) +
									'). If you meant to render a collection of children, use an array instead.',
							))
						);
					return l;
				}
				function M(e, t, n) {
					if (null == e) return e;
					var r = [],
						i = 0;
					return (
						P(e, r, '', '', function (e) {
							return t.call(n, e, i++);
						}),
						r
					);
				}
				function D(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then(
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 1), (e._result = t));
							},
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 2), (e._result = t));
							},
						),
							-1 === e._status &&
								((e._status = 0), (e._result = t));
					}
					if (1 === e._status) return e._result.default;
					throw e._result;
				}
				var O = { current: null },
					R = { transition: null },
					B = {
						ReactCurrentDispatcher: O,
						ReactCurrentBatchConfig: R,
						ReactCurrentOwner: E,
					};
				(t.Children = {
					map: M,
					forEach: function (e, t, n) {
						M(
							e,
							function () {
								t.apply(this, arguments);
							},
							n,
						);
					},
					count: function (e) {
						var t = 0;
						return (
							M(e, function () {
								t++;
							}),
							t
						);
					},
					toArray: function (e) {
						return (
							M(e, function (e) {
								return e;
							}) || []
						);
					},
					only: function (e) {
						if (!S(e))
							throw Error(
								'React.Children.only expected to receive a single React element child.',
							);
						return e;
					},
				}),
					(t.Component = v),
					(t.Fragment = i),
					(t.Profiler = a),
					(t.PureComponent = y),
					(t.StrictMode = o),
					(t.Suspense = c),
					(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
					(t.cloneElement = function (e, t, r) {
						if (null === e || void 0 === e)
							throw Error(
								'React.cloneElement(...): The argument must be a React element, but you passed ' +
									e +
									'.',
							);
						var i = m({}, e.props),
							o = e.key,
							a = e.ref,
							s = e._owner;
						if (null != t) {
							if (
								(void 0 !== t.ref &&
									((a = t.ref), (s = E.current)),
								void 0 !== t.key && (o = '' + t.key),
								e.type && e.type.defaultProps)
							)
								var l = e.type.defaultProps;
							for (u in t)
								x.call(t, u) &&
									!C.hasOwnProperty(u) &&
									(i[u] =
										void 0 === t[u] && void 0 !== l
											? l[u]
											: t[u]);
						}
						var u = arguments.length - 2;
						if (1 === u) i.children = r;
						else if (1 < u) {
							l = Array(u);
							for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
							i.children = l;
						}
						return {
							$$typeof: n,
							type: e.type,
							key: o,
							ref: a,
							props: i,
							_owner: s,
						};
					}),
					(t.createContext = function (e) {
						return (
							((e = {
								$$typeof: l,
								_currentValue: e,
								_currentValue2: e,
								_threadCount: 0,
								Provider: null,
								Consumer: null,
								_defaultValue: null,
								_globalName: null,
							}).Provider = { $$typeof: s, _context: e }),
							(e.Consumer = e)
						);
					}),
					(t.createElement = k),
					(t.createFactory = function (e) {
						var t = k.bind(null, e);
						return (t.type = e), t;
					}),
					(t.createRef = function () {
						return { current: null };
					}),
					(t.forwardRef = function (e) {
						return { $$typeof: u, render: e };
					}),
					(t.isValidElement = S),
					(t.lazy = function (e) {
						return {
							$$typeof: f,
							_payload: { _status: -1, _result: e },
							_init: D,
						};
					}),
					(t.memo = function (e, t) {
						return {
							$$typeof: d,
							type: e,
							compare: void 0 === t ? null : t,
						};
					}),
					(t.startTransition = function (e) {
						var t = R.transition;
						R.transition = {};
						try {
							e();
						} finally {
							R.transition = t;
						}
					}),
					(t.unstable_act = function () {
						throw Error(
							'act(...) is not supported in production builds of React.',
						);
					}),
					(t.useCallback = function (e, t) {
						return O.current.useCallback(e, t);
					}),
					(t.useContext = function (e) {
						return O.current.useContext(e);
					}),
					(t.useDebugValue = function () {}),
					(t.useDeferredValue = function (e) {
						return O.current.useDeferredValue(e);
					}),
					(t.useEffect = function (e, t) {
						return O.current.useEffect(e, t);
					}),
					(t.useId = function () {
						return O.current.useId();
					}),
					(t.useImperativeHandle = function (e, t, n) {
						return O.current.useImperativeHandle(e, t, n);
					}),
					(t.useInsertionEffect = function (e, t) {
						return O.current.useInsertionEffect(e, t);
					}),
					(t.useLayoutEffect = function (e, t) {
						return O.current.useLayoutEffect(e, t);
					}),
					(t.useMemo = function (e, t) {
						return O.current.useMemo(e, t);
					}),
					(t.useReducer = function (e, t, n) {
						return O.current.useReducer(e, t, n);
					}),
					(t.useRef = function (e) {
						return O.current.useRef(e);
					}),
					(t.useState = function (e) {
						return O.current.useState(e);
					}),
					(t.useSyncExternalStore = function (e, t, n) {
						return O.current.useSyncExternalStore(e, t, n);
					}),
					(t.useTransition = function () {
						return O.current.useTransition();
					}),
					(t.version = '18.2.0');
			},
			791: (e, t, n) => {
				'use strict';
				e.exports = n(117);
			},
			184: (e, t, n) => {
				'use strict';
				e.exports = n(374);
			},
			813: (e, t) => {
				'use strict';
				function n(e, t) {
					var n = e.length;
					e.push(t);
					e: for (; 0 < n; ) {
						var r = (n - 1) >>> 1,
							i = e[r];
						if (!(0 < o(i, t))) break e;
						(e[r] = t), (e[n] = i), (n = r);
					}
				}
				function r(e) {
					return 0 === e.length ? null : e[0];
				}
				function i(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var r = 0, i = e.length, a = i >>> 1; r < a; ) {
							var s = 2 * (r + 1) - 1,
								l = e[s],
								u = s + 1,
								c = e[u];
							if (0 > o(l, n))
								u < i && 0 > o(c, l)
									? ((e[r] = c), (e[u] = n), (r = u))
									: ((e[r] = l), (e[s] = n), (r = s));
							else {
								if (!(u < i && 0 > o(c, n))) break e;
								(e[r] = c), (e[u] = n), (r = u);
							}
						}
					}
					return t;
				}
				function o(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id;
				}
				if (
					'object' === typeof performance &&
					'function' === typeof performance.now
				) {
					var a = performance;
					t.unstable_now = function () {
						return a.now();
					};
				} else {
					var s = Date,
						l = s.now();
					t.unstable_now = function () {
						return s.now() - l;
					};
				}
				var u = [],
					c = [],
					d = 1,
					f = null,
					h = 3,
					p = !1,
					m = !1,
					g = !1,
					v = 'function' === typeof setTimeout ? setTimeout : null,
					A =
						'function' === typeof clearTimeout
							? clearTimeout
							: null,
					y =
						'undefined' !== typeof setImmediate
							? setImmediate
							: null;
				function w(e) {
					for (var t = r(c); null !== t; ) {
						if (null === t.callback) i(c);
						else {
							if (!(t.startTime <= e)) break;
							i(c), (t.sortIndex = t.expirationTime), n(u, t);
						}
						t = r(c);
					}
				}
				function b(e) {
					if (((g = !1), w(e), !m))
						if (null !== r(u)) (m = !0), R(x);
						else {
							var t = r(c);
							null !== t && B(b, t.startTime - e);
						}
				}
				function x(e, n) {
					(m = !1), g && ((g = !1), A(S), (S = -1)), (p = !0);
					var o = h;
					try {
						for (
							w(n), f = r(u);
							null !== f &&
							(!(f.expirationTime > n) || (e && !P()));

						) {
							var a = f.callback;
							if ('function' === typeof a) {
								(f.callback = null), (h = f.priorityLevel);
								var s = a(f.expirationTime <= n);
								(n = t.unstable_now()),
									'function' === typeof s
										? (f.callback = s)
										: f === r(u) && i(u),
									w(n);
							} else i(u);
							f = r(u);
						}
						if (null !== f) var l = !0;
						else {
							var d = r(c);
							null !== d && B(b, d.startTime - n), (l = !1);
						}
						return l;
					} finally {
						(f = null), (h = o), (p = !1);
					}
				}
				'undefined' !== typeof navigator &&
					void 0 !== navigator.scheduling &&
					void 0 !== navigator.scheduling.isInputPending &&
					navigator.scheduling.isInputPending.bind(
						navigator.scheduling,
					);
				var E,
					C = !1,
					k = null,
					S = -1,
					T = 5,
					_ = -1;
				function P() {
					return !(t.unstable_now() - _ < T);
				}
				function M() {
					if (null !== k) {
						var e = t.unstable_now();
						_ = e;
						var n = !0;
						try {
							n = k(!0, e);
						} finally {
							n ? E() : ((C = !1), (k = null));
						}
					} else C = !1;
				}
				if ('function' === typeof y)
					E = function () {
						y(M);
					};
				else if ('undefined' !== typeof MessageChannel) {
					var D = new MessageChannel(),
						O = D.port2;
					(D.port1.onmessage = M),
						(E = function () {
							O.postMessage(null);
						});
				} else
					E = function () {
						v(M, 0);
					};
				function R(e) {
					(k = e), C || ((C = !0), E());
				}
				function B(e, n) {
					S = v(function () {
						e(t.unstable_now());
					}, n);
				}
				(t.unstable_IdlePriority = 5),
					(t.unstable_ImmediatePriority = 1),
					(t.unstable_LowPriority = 4),
					(t.unstable_NormalPriority = 3),
					(t.unstable_Profiling = null),
					(t.unstable_UserBlockingPriority = 2),
					(t.unstable_cancelCallback = function (e) {
						e.callback = null;
					}),
					(t.unstable_continueExecution = function () {
						m || p || ((m = !0), R(x));
					}),
					(t.unstable_forceFrameRate = function (e) {
						0 > e || 125 < e
							? console.error(
									'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
								)
							: (T = 0 < e ? Math.floor(1e3 / e) : 5);
					}),
					(t.unstable_getCurrentPriorityLevel = function () {
						return h;
					}),
					(t.unstable_getFirstCallbackNode = function () {
						return r(u);
					}),
					(t.unstable_next = function (e) {
						switch (h) {
							case 1:
							case 2:
							case 3:
								var t = 3;
								break;
							default:
								t = h;
						}
						var n = h;
						h = t;
						try {
							return e();
						} finally {
							h = n;
						}
					}),
					(t.unstable_pauseExecution = function () {}),
					(t.unstable_requestPaint = function () {}),
					(t.unstable_runWithPriority = function (e, t) {
						switch (e) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								e = 3;
						}
						var n = h;
						h = e;
						try {
							return t();
						} finally {
							h = n;
						}
					}),
					(t.unstable_scheduleCallback = function (e, i, o) {
						var a = t.unstable_now();
						switch (
							('object' === typeof o && null !== o
								? (o =
										'number' === typeof (o = o.delay) &&
										0 < o
											? a + o
											: a)
								: (o = a),
							e)
						) {
							case 1:
								var s = -1;
								break;
							case 2:
								s = 250;
								break;
							case 5:
								s = 1073741823;
								break;
							case 4:
								s = 1e4;
								break;
							default:
								s = 5e3;
						}
						return (
							(e = {
								id: d++,
								callback: i,
								priorityLevel: e,
								startTime: o,
								expirationTime: (s = o + s),
								sortIndex: -1,
							}),
							o > a
								? ((e.sortIndex = o),
									n(c, e),
									null === r(u) &&
										e === r(c) &&
										(g ? (A(S), (S = -1)) : (g = !0),
										B(b, o - a)))
								: ((e.sortIndex = s),
									n(u, e),
									m || p || ((m = !0), R(x))),
							e
						);
					}),
					(t.unstable_shouldYield = P),
					(t.unstable_wrapCallback = function (e) {
						var t = h;
						return function () {
							var n = h;
							h = t;
							try {
								return e.apply(this, arguments);
							} finally {
								h = n;
							}
						};
					});
			},
			296: (e, t, n) => {
				'use strict';
				e.exports = n(813);
			},
		},
		t = {};
	function n(r) {
		var i = t[r];
		if (void 0 !== i) return i.exports;
		var o = (t[r] = { exports: {} });
		return e[r].call(o.exports, o, o.exports, n), o.exports;
	}
	(n.m = e),
		(n.n = (e) => {
			var t = e && e.__esModule ? () => e.default : () => e;
			return n.d(t, { a: t }), t;
		}),
		(() => {
			var e,
				t = Object.getPrototypeOf
					? (e) => Object.getPrototypeOf(e)
					: (e) => e.__proto__;
			n.t = function (r, i) {
				if ((1 & i && (r = this(r)), 8 & i)) return r;
				if ('object' === typeof r && r) {
					if (4 & i && r.__esModule) return r;
					if (16 & i && 'function' === typeof r.then) return r;
				}
				var o = Object.create(null);
				n.r(o);
				var a = {};
				e = e || [null, t({}), t([]), t(t)];
				for (
					var s = 2 & i && r;
					'object' == typeof s && !~e.indexOf(s);
					s = t(s)
				)
					Object.getOwnPropertyNames(s).forEach(
						(e) => (a[e] = () => r[e]),
					);
				return (a.default = () => r), n.d(o, a), o;
			};
		})(),
		(n.d = (e, t) => {
			for (var r in t)
				n.o(t, r) &&
					!n.o(e, r) &&
					Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
		}),
		(n.f = {}),
		(n.e = (e) =>
			Promise.all(
				Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []),
			)),
		(n.u = (e) => 'static/js/' + e + '.77cdd497.chunk.js'),
		(n.miniCssF = (e) => {}),
		(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(() => {
			var e = {},
				t = 'forntend-react:';
			n.l = (r, i, o, a) => {
				if (e[r]) e[r].push(i);
				else {
					var s, l;
					if (void 0 !== o)
						for (
							var u = document.getElementsByTagName('script'),
								c = 0;
							c < u.length;
							c++
						) {
							var d = u[c];
							if (
								d.getAttribute('src') == r ||
								d.getAttribute('data-webpack') == t + o
							) {
								s = d;
								break;
							}
						}
					s ||
						((l = !0),
						((s = document.createElement('script')).charset =
							'utf-8'),
						(s.timeout = 120),
						n.nc && s.setAttribute('nonce', n.nc),
						s.setAttribute('data-webpack', t + o),
						(s.src = r)),
						(e[r] = [i]);
					var f = (t, n) => {
							(s.onerror = s.onload = null), clearTimeout(h);
							var i = e[r];
							if (
								(delete e[r],
								s.parentNode && s.parentNode.removeChild(s),
								i && i.forEach((e) => e(n)),
								t)
							)
								return t(n);
						},
						h = setTimeout(
							f.bind(null, void 0, {
								type: 'timeout',
								target: s,
							}),
							12e4,
						);
					(s.onerror = f.bind(null, s.onerror)),
						(s.onload = f.bind(null, s.onload)),
						l && document.head.appendChild(s);
				}
			};
		})(),
		(n.r = (e) => {
			'undefined' !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: 'Module',
				}),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(n.p = '/'),
		(() => {
			var e = { 179: 0 };
			n.f.j = (t, r) => {
				var i = n.o(e, t) ? e[t] : void 0;
				if (0 !== i)
					if (i) r.push(i[2]);
					else {
						var o = new Promise((n, r) => (i = e[t] = [n, r]));
						r.push((i[2] = o));
						var a = n.p + n.u(t),
							s = new Error();
						n.l(
							a,
							(r) => {
								if (
									n.o(e, t) &&
									(0 !== (i = e[t]) && (e[t] = void 0), i)
								) {
									var o =
											r &&
											('load' === r.type
												? 'missing'
												: r.type),
										a = r && r.target && r.target.src;
									(s.message =
										'Loading chunk ' +
										t +
										' failed.\n(' +
										o +
										': ' +
										a +
										')'),
										(s.name = 'ChunkLoadError'),
										(s.type = o),
										(s.request = a),
										i[1](s);
								}
							},
							'chunk-' + t,
							t,
						);
					}
			};
			var t = (t, r) => {
					var i,
						o,
						a = r[0],
						s = r[1],
						l = r[2],
						u = 0;
					if (a.some((t) => 0 !== e[t])) {
						for (i in s) n.o(s, i) && (n.m[i] = s[i]);
						if (l) l(n);
					}
					for (t && t(r); u < a.length; u++)
						(o = a[u]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
				},
				r = (self.webpackChunkforntend_react =
					self.webpackChunkforntend_react || []);
			r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
		})(),
		(() => {
			'use strict';
			var e = n(791),
				t = n(250);
			const r = (0, e.createContext)({
					transformPagePoint: (e) => e,
					isStatic: !1,
					reducedMotion: 'never',
				}),
				i = (0, e.createContext)({}),
				o = (0, e.createContext)(null),
				a = 'undefined' !== typeof document,
				s = a ? e.useLayoutEffect : e.useEffect,
				l = (0, e.createContext)({ strict: !1 });
			function u(e) {
				return (
					'object' === typeof e &&
					Object.prototype.hasOwnProperty.call(e, 'current')
				);
			}
			function c(e) {
				return 'string' === typeof e || Array.isArray(e);
			}
			function d(e) {
				return 'object' === typeof e && 'function' === typeof e.start;
			}
			const f = [
					'animate',
					'whileInView',
					'whileFocus',
					'whileHover',
					'whileTap',
					'whileDrag',
					'exit',
				],
				h = ['initial', ...f];
			function p(e) {
				return d(e.animate) || h.some((t) => c(e[t]));
			}
			function m(e) {
				return Boolean(p(e) || e.variants);
			}
			function g(t) {
				const { initial: n, animate: r } = (function (e, t) {
					if (p(e)) {
						const { initial: t, animate: n } = e;
						return {
							initial: !1 === t || c(t) ? t : void 0,
							animate: c(n) ? n : void 0,
						};
					}
					return !1 !== e.inherit ? t : {};
				})(t, (0, e.useContext)(i));
				return (0, e.useMemo)(
					() => ({ initial: n, animate: r }),
					[v(n), v(r)],
				);
			}
			function v(e) {
				return Array.isArray(e) ? e.join(' ') : e;
			}
			const A = {
					animation: [
						'animate',
						'variants',
						'whileHover',
						'whileTap',
						'exit',
						'whileInView',
						'whileFocus',
						'whileDrag',
					],
					exit: ['exit'],
					drag: ['drag', 'dragControls'],
					focus: ['whileFocus'],
					hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
					tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
					pan: [
						'onPan',
						'onPanStart',
						'onPanSessionStart',
						'onPanEnd',
					],
					inView: [
						'whileInView',
						'onViewportEnter',
						'onViewportLeave',
					],
					layout: ['layout', 'layoutId'],
				},
				y = {};
			for (const n in A)
				y[n] = { isEnabled: (e) => A[n].some((t) => !!e[t]) };
			const w = (0, e.createContext)({}),
				b = (0, e.createContext)({}),
				x = Symbol.for('motionComponentSymbol');
			function E(t) {
				let {
					preloadedFeatures: n,
					createVisualElement: c,
					useRender: d,
					useVisualState: f,
					Component: h,
				} = t;
				n &&
					(function (e) {
						for (const t in e) y[t] = { ...y[t], ...e[t] };
					})(n);
				const p = (0, e.forwardRef)(function (t, p) {
					let m;
					const v = { ...(0, e.useContext)(r), ...t, layoutId: C(t) },
						{ isStatic: A } = v,
						y = g(t),
						w = f(t, A);
					if (!A && a) {
						y.visualElement = (function (t, n, a, u) {
							const { visualElement: c } = (0, e.useContext)(i),
								d = (0, e.useContext)(l),
								f = (0, e.useContext)(o),
								h = (0, e.useContext)(r).reducedMotion,
								p = (0, e.useRef)();
							(u = u || d.renderer),
								!p.current &&
									u &&
									(p.current = u(t, {
										visualState: n,
										parent: c,
										props: a,
										presenceContext: f,
										blockInitialAnimation:
											!!f && !1 === f.initial,
										reducedMotionConfig: h,
									}));
							const m = p.current;
							return (
								(0, e.useInsertionEffect)(() => {
									m && m.update(a, f);
								}),
								s(() => {
									m && m.render();
								}),
								(0, e.useEffect)(() => {
									m && m.updateFeatures();
								}),
								(window.HandoffAppearAnimations
									? s
									: e.useEffect)(() => {
									m &&
										m.animationState &&
										m.animationState.animateChanges();
								}),
								m
							);
						})(h, w, v, c);
						const t = (0, e.useContext)(b),
							a = (0, e.useContext)(l).strict;
						y.visualElement &&
							(m = y.visualElement.loadFeatures(v, a, n, t));
					}
					return e.createElement(
						i.Provider,
						{ value: y },
						m && y.visualElement
							? e.createElement(m, {
									visualElement: y.visualElement,
									...v,
								})
							: null,
						d(
							h,
							t,
							(function (t, n, r) {
								return (0, e.useCallback)(
									(e) => {
										e && t.mount && t.mount(e),
											n && (e ? n.mount(e) : n.unmount()),
											r &&
												('function' === typeof r
													? r(e)
													: u(r) && (r.current = e));
									},
									[n],
								);
							})(w, y.visualElement, p),
							w,
							A,
							y.visualElement,
						),
					);
				});
				return (p[x] = h), p;
			}
			function C(t) {
				let { layoutId: n } = t;
				const r = (0, e.useContext)(w).id;
				return r && void 0 !== n ? r + '-' + n : n;
			}
			function k(e) {
				function t(t) {
					return E(
						e(
							t,
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {},
						),
					);
				}
				if ('undefined' === typeof Proxy) return t;
				const n = new Map();
				return new Proxy(t, {
					get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r)),
				});
			}
			const S = [
				'animate',
				'circle',
				'defs',
				'desc',
				'ellipse',
				'g',
				'image',
				'line',
				'filter',
				'marker',
				'mask',
				'metadata',
				'path',
				'pattern',
				'polygon',
				'polyline',
				'rect',
				'stop',
				'switch',
				'symbol',
				'svg',
				'text',
				'tspan',
				'use',
				'view',
			];
			function T(e) {
				return (
					'string' === typeof e &&
					!e.includes('-') &&
					!!(S.indexOf(e) > -1 || /[A-Z]/.test(e))
				);
			}
			const _ = {};
			const P = [
					'transformPerspective',
					'x',
					'y',
					'z',
					'translateX',
					'translateY',
					'translateZ',
					'scale',
					'scaleX',
					'scaleY',
					'rotate',
					'rotateX',
					'rotateY',
					'rotateZ',
					'skew',
					'skewX',
					'skewY',
				],
				M = new Set(P);
			function D(e, t) {
				let { layout: n, layoutId: r } = t;
				return (
					M.has(e) ||
					e.startsWith('origin') ||
					((n || void 0 !== r) && (!!_[e] || 'opacity' === e))
				);
			}
			const O = (e) => Boolean(e && e.getVelocity),
				R = {
					x: 'translateX',
					y: 'translateY',
					z: 'translateZ',
					transformPerspective: 'perspective',
				},
				B = P.length;
			const L = (e) => (t) => 'string' === typeof t && t.startsWith(e),
				I = L('--'),
				F = L('var(--'),
				j = (e, t) => (t && 'number' === typeof e ? t.transform(e) : e),
				N = (e, t, n) => Math.min(Math.max(n, e), t),
				z = {
					test: (e) => 'number' === typeof e,
					parse: parseFloat,
					transform: (e) => e,
				},
				V = { ...z, transform: (e) => N(0, 1, e) },
				U = { ...z, default: 1 },
				Y = (e) => Math.round(1e5 * e) / 1e5,
				Q = /(-)?([\d]*\.?[\d])+/g,
				H =
					/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
				G =
					/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
			function W(e) {
				return 'string' === typeof e;
			}
			const X = (e) => ({
					test: (t) =>
						W(t) && t.endsWith(e) && 1 === t.split(' ').length,
					parse: parseFloat,
					transform: (t) => ''.concat(t).concat(e),
				}),
				q = X('deg'),
				J = X('%'),
				K = X('px'),
				Z = X('vh'),
				$ = X('vw'),
				ee = {
					...J,
					parse: (e) => J.parse(e) / 100,
					transform: (e) => J.transform(100 * e),
				},
				te = { ...z, transform: Math.round },
				ne = {
					borderWidth: K,
					borderTopWidth: K,
					borderRightWidth: K,
					borderBottomWidth: K,
					borderLeftWidth: K,
					borderRadius: K,
					radius: K,
					borderTopLeftRadius: K,
					borderTopRightRadius: K,
					borderBottomRightRadius: K,
					borderBottomLeftRadius: K,
					width: K,
					maxWidth: K,
					height: K,
					maxHeight: K,
					size: K,
					top: K,
					right: K,
					bottom: K,
					left: K,
					padding: K,
					paddingTop: K,
					paddingRight: K,
					paddingBottom: K,
					paddingLeft: K,
					margin: K,
					marginTop: K,
					marginRight: K,
					marginBottom: K,
					marginLeft: K,
					rotate: q,
					rotateX: q,
					rotateY: q,
					rotateZ: q,
					scale: U,
					scaleX: U,
					scaleY: U,
					scaleZ: U,
					skew: q,
					skewX: q,
					skewY: q,
					distance: K,
					translateX: K,
					translateY: K,
					translateZ: K,
					x: K,
					y: K,
					z: K,
					perspective: K,
					transformPerspective: K,
					opacity: V,
					originX: ee,
					originY: ee,
					originZ: K,
					zIndex: te,
					fillOpacity: V,
					strokeOpacity: V,
					numOctaves: te,
				};
			function re(e, t, n, r) {
				const {
					style: i,
					vars: o,
					transform: a,
					transformOrigin: s,
				} = e;
				let l = !1,
					u = !1,
					c = !0;
				for (const d in t) {
					const e = t[d];
					if (I(d)) {
						o[d] = e;
						continue;
					}
					const n = ne[d],
						r = j(e, n);
					if (M.has(d)) {
						if (((l = !0), (a[d] = r), !c)) continue;
						e !== (n.default || 0) && (c = !1);
					} else
						d.startsWith('origin')
							? ((u = !0), (s[d] = r))
							: (i[d] = r);
				}
				if (
					(t.transform ||
						(l || r
							? (i.transform = (function (e, t, n, r) {
									let {
											enableHardwareAcceleration: i = !0,
											allowTransformNone: o = !0,
										} = t,
										a = '';
									for (let s = 0; s < B; s++) {
										const t = P[s];
										if (void 0 !== e[t]) {
											const n = R[t] || t;
											a += ''
												.concat(n, '(')
												.concat(e[t], ') ');
										}
									}
									return (
										i && !e.z && (a += 'translateZ(0)'),
										(a = a.trim()),
										r
											? (a = r(e, n ? '' : a))
											: o && n && (a = 'none'),
										a
									);
								})(e.transform, n, c, r))
							: i.transform && (i.transform = 'none')),
					u)
				) {
					const {
						originX: e = '50%',
						originY: t = '50%',
						originZ: n = 0,
					} = s;
					i.transformOrigin = ''
						.concat(e, ' ')
						.concat(t, ' ')
						.concat(n);
				}
			}
			const ie = () => ({
				style: {},
				transform: {},
				transformOrigin: {},
				vars: {},
			});
			function oe(e, t, n) {
				for (const r in t) O(t[r]) || D(r, n) || (e[r] = t[r]);
			}
			function ae(t, n, r) {
				const i = {};
				return (
					oe(i, t.style || {}, t),
					Object.assign(
						i,
						(function (t, n, r) {
							let { transformTemplate: i } = t;
							return (0, e.useMemo)(() => {
								const e = ie();
								return (
									re(
										e,
										n,
										{ enableHardwareAcceleration: !r },
										i,
									),
									Object.assign({}, e.vars, e.style)
								);
							}, [n]);
						})(t, n, r),
					),
					t.transformValues ? t.transformValues(i) : i
				);
			}
			function se(e, t, n) {
				const r = {},
					i = ae(e, t, n);
				return (
					e.drag &&
						!1 !== e.dragListener &&
						((r.draggable = !1),
						(i.userSelect =
							i.WebkitUserSelect =
							i.WebkitTouchCallout =
								'none'),
						(i.touchAction =
							!0 === e.drag
								? 'none'
								: 'pan-'.concat('x' === e.drag ? 'y' : 'x'))),
					void 0 === e.tabIndex &&
						(e.onTap || e.onTapStart || e.whileTap) &&
						(r.tabIndex = 0),
					(r.style = i),
					r
				);
			}
			const le = new Set([
				'animate',
				'exit',
				'variants',
				'initial',
				'style',
				'values',
				'variants',
				'transition',
				'transformTemplate',
				'transformValues',
				'custom',
				'inherit',
				'onLayoutAnimationStart',
				'onLayoutAnimationComplete',
				'onLayoutMeasure',
				'onBeforeLayoutMeasure',
				'onAnimationStart',
				'onAnimationComplete',
				'onUpdate',
				'onDragStart',
				'onDrag',
				'onDragEnd',
				'onMeasureDragConstraints',
				'onDirectionLock',
				'onDragTransitionEnd',
				'_dragX',
				'_dragY',
				'onHoverStart',
				'onHoverEnd',
				'onViewportEnter',
				'onViewportLeave',
				'ignoreStrict',
				'viewport',
			]);
			function ue(e) {
				return (
					e.startsWith('while') ||
					(e.startsWith('drag') && 'draggable' !== e) ||
					e.startsWith('layout') ||
					e.startsWith('onTap') ||
					e.startsWith('onPan') ||
					le.has(e)
				);
			}
			let ce = (e) => !ue(e);
			try {
				(de = require('@emotion/is-prop-valid').default) &&
					(ce = (e) => (e.startsWith('on') ? !ue(e) : de(e)));
			} catch (Pw) {}
			var de;
			function fe(e, t, n) {
				return 'string' === typeof e ? e : K.transform(t + n * e);
			}
			const he = {
					offset: 'stroke-dashoffset',
					array: 'stroke-dasharray',
				},
				pe = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
			function me(e, t, n, r, i) {
				let {
					attrX: o,
					attrY: a,
					attrScale: s,
					originX: l,
					originY: u,
					pathLength: c,
					pathSpacing: d = 1,
					pathOffset: f = 0,
					...h
				} = t;
				if ((re(e, h, n, i), r))
					return void (
						e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
					);
				(e.attrs = e.style), (e.style = {});
				const { attrs: p, style: m, dimensions: g } = e;
				p.transform &&
					(g && (m.transform = p.transform), delete p.transform),
					g &&
						(void 0 !== l || void 0 !== u || m.transform) &&
						(m.transformOrigin = (function (e, t, n) {
							const r = fe(t, e.x, e.width),
								i = fe(n, e.y, e.height);
							return ''.concat(r, ' ').concat(i);
						})(g, void 0 !== l ? l : 0.5, void 0 !== u ? u : 0.5)),
					void 0 !== o && (p.x = o),
					void 0 !== a && (p.y = a),
					void 0 !== s && (p.scale = s),
					void 0 !== c &&
						(function (e, t) {
							let n =
									arguments.length > 2 &&
									void 0 !== arguments[2]
										? arguments[2]
										: 1,
								r =
									arguments.length > 3 &&
									void 0 !== arguments[3]
										? arguments[3]
										: 0,
								i =
									!(
										arguments.length > 4 &&
										void 0 !== arguments[4]
									) || arguments[4];
							e.pathLength = 1;
							const o = i ? he : pe;
							e[o.offset] = K.transform(-r);
							const a = K.transform(t),
								s = K.transform(n);
							e[o.array] = ''.concat(a, ' ').concat(s);
						})(p, c, d, f, !1);
			}
			const ge = () => ({ ...ie(), attrs: {} }),
				ve = (e) => 'string' === typeof e && 'svg' === e.toLowerCase();
			function Ae(t, n, r, i) {
				const o = (0, e.useMemo)(() => {
					const e = ge();
					return (
						me(
							e,
							n,
							{ enableHardwareAcceleration: !1 },
							ve(i),
							t.transformTemplate,
						),
						{ ...e.attrs, style: { ...e.style } }
					);
				}, [n]);
				if (t.style) {
					const e = {};
					oe(e, t.style, t), (o.style = { ...e, ...o.style });
				}
				return o;
			}
			function ye() {
				let t =
					arguments.length > 0 &&
					void 0 !== arguments[0] &&
					arguments[0];
				return (n, r, i, o, a) => {
					let { latestValues: s } = o;
					const l = (T(n) ? Ae : se)(r, s, a, n),
						u = (function (e, t, n) {
							const r = {};
							for (const i in e)
								('values' === i &&
									'object' === typeof e.values) ||
									((ce(i) ||
										(!0 === n && ue(i)) ||
										(!t && !ue(i)) ||
										(e.draggable &&
											i.startsWith('onDrag'))) &&
										(r[i] = e[i]));
							return r;
						})(r, 'string' === typeof n, t),
						c = { ...u, ...l, ref: i },
						{ children: d } = r,
						f = (0, e.useMemo)(() => (O(d) ? d.get() : d), [d]);
					return (0, e.createElement)(n, { ...c, children: f });
				};
			}
			const we = (e) =>
				e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
			function be(e, t, n, r) {
				let { style: i, vars: o } = t;
				Object.assign(e.style, i, r && r.getProjectionStyles(n));
				for (const a in o) e.style.setProperty(a, o[a]);
			}
			const xe = new Set([
				'baseFrequency',
				'diffuseConstant',
				'kernelMatrix',
				'kernelUnitLength',
				'keySplines',
				'keyTimes',
				'limitingConeAngle',
				'markerHeight',
				'markerWidth',
				'numOctaves',
				'targetX',
				'targetY',
				'surfaceScale',
				'specularConstant',
				'specularExponent',
				'stdDeviation',
				'tableValues',
				'viewBox',
				'gradientTransform',
				'pathLength',
				'startOffset',
				'textLength',
				'lengthAdjust',
			]);
			function Ee(e, t, n, r) {
				be(e, t, void 0, r);
				for (const i in t.attrs)
					e.setAttribute(xe.has(i) ? i : we(i), t.attrs[i]);
			}
			function Ce(e, t) {
				const { style: n } = e,
					r = {};
				for (const i in n)
					(O(n[i]) || (t.style && O(t.style[i])) || D(i, e)) &&
						(r[i] = n[i]);
				return r;
			}
			function ke(e, t) {
				const n = Ce(e, t);
				for (const r in e)
					if (O(e[r]) || O(t[r])) {
						n[
							-1 !== P.indexOf(r)
								? 'attr' +
									r.charAt(0).toUpperCase() +
									r.substring(1)
								: r
						] = e[r];
					}
				return n;
			}
			function Se(e, t, n) {
				let r =
						arguments.length > 3 && void 0 !== arguments[3]
							? arguments[3]
							: {},
					i =
						arguments.length > 4 && void 0 !== arguments[4]
							? arguments[4]
							: {};
				return (
					'function' === typeof t &&
						(t = t(void 0 !== n ? n : e.custom, r, i)),
					'string' === typeof t && (t = e.variants && e.variants[t]),
					'function' === typeof t &&
						(t = t(void 0 !== n ? n : e.custom, r, i)),
					t
				);
			}
			const Te = (e) => Array.isArray(e),
				_e = (e) =>
					Boolean(e && 'object' === typeof e && e.mix && e.toValue),
				Pe = (e) => (Te(e) ? e[e.length - 1] || 0 : e);
			function Me(e) {
				const t = O(e) ? e.get() : e;
				return _e(t) ? t.toValue() : t;
			}
			const De = (t) => (n, r) => {
				const a = (0, e.useContext)(i),
					s = (0, e.useContext)(o),
					l = () =>
						(function (e, t, n, r) {
							let {
								scrapeMotionValuesFromProps: i,
								createRenderState: o,
								onMount: a,
							} = e;
							const s = {
								latestValues: Oe(t, n, r, i),
								renderState: o(),
							};
							return a && (s.mount = (e) => a(t, e, s)), s;
						})(t, n, a, s);
				return r
					? l()
					: (function (t) {
							const n = (0, e.useRef)(null);
							return (
								null === n.current && (n.current = t()),
								n.current
							);
						})(l);
			};
			function Oe(e, t, n, r) {
				const i = {},
					o = r(e, {});
				for (const d in o) i[d] = Me(o[d]);
				let { initial: a, animate: s } = e;
				const l = p(e),
					u = m(e);
				t &&
					u &&
					!l &&
					!1 !== e.inherit &&
					(void 0 === a && (a = t.initial),
					void 0 === s && (s = t.animate));
				let c = !!n && !1 === n.initial;
				c = c || !1 === a;
				const f = c ? s : a;
				if (f && 'boolean' !== typeof f && !d(f)) {
					(Array.isArray(f) ? f : [f]).forEach((t) => {
						const n = Se(e, t);
						if (!n) return;
						const { transitionEnd: r, transition: o, ...a } = n;
						for (const e in a) {
							let t = a[e];
							if (Array.isArray(t)) {
								t = t[c ? t.length - 1 : 0];
							}
							null !== t && (i[e] = t);
						}
						for (const e in r) i[e] = r[e];
					});
				}
				return i;
			}
			const Re = {
					useVisualState: De({
						scrapeMotionValuesFromProps: ke,
						createRenderState: ge,
						onMount: (e, t, n) => {
							let { renderState: r, latestValues: i } = n;
							try {
								r.dimensions =
									'function' === typeof t.getBBox
										? t.getBBox()
										: t.getBoundingClientRect();
							} catch (o) {
								r.dimensions = {
									x: 0,
									y: 0,
									width: 0,
									height: 0,
								};
							}
							me(
								r,
								i,
								{ enableHardwareAcceleration: !1 },
								ve(t.tagName),
								e.transformTemplate,
							),
								Ee(t, r);
						},
					}),
				},
				Be = {
					useVisualState: De({
						scrapeMotionValuesFromProps: Ce,
						createRenderState: ie,
					}),
				};
			function Le(e, t, n) {
				let r =
					arguments.length > 3 && void 0 !== arguments[3]
						? arguments[3]
						: { passive: !0 };
				return (
					e.addEventListener(t, n, r),
					() => e.removeEventListener(t, n)
				);
			}
			const Ie = (e) =>
				'mouse' === e.pointerType
					? 'number' !== typeof e.button || e.button <= 0
					: !1 !== e.isPrimary;
			function Fe(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: 'page';
				return { point: { x: e[t + 'X'], y: e[t + 'Y'] } };
			}
			const je = (e) => (t) => Ie(t) && e(t, Fe(t));
			function Ne(e, t, n, r) {
				return Le(e, t, je(n), r);
			}
			const ze = (e, t) => (n) => t(e(n)),
				Ve = function () {
					for (
						var e = arguments.length, t = new Array(e), n = 0;
						n < e;
						n++
					)
						t[n] = arguments[n];
					return t.reduce(ze);
				};
			function Ue(e) {
				let t = null;
				return () => {
					const n = () => {
						t = null;
					};
					return null === t && ((t = e), n);
				};
			}
			const Ye = Ue('dragHorizontal'),
				Qe = Ue('dragVertical');
			function He(e) {
				let t = !1;
				if ('y' === e) t = Qe();
				else if ('x' === e) t = Ye();
				else {
					const e = Ye(),
						n = Qe();
					e && n
						? (t = () => {
								e(), n();
							})
						: (e && e(), n && n());
				}
				return t;
			}
			function Ge() {
				const e = He(!0);
				return !e || (e(), !1);
			}
			class We {
				constructor(e) {
					(this.isMounted = !1), (this.node = e);
				}
				update() {}
			}
			const Xe = { delta: 0, timestamp: 0, isProcessing: !1 };
			let qe = !0,
				Je = !1;
			const Ke = ['read', 'update', 'preRender', 'render', 'postRender'],
				Ze = Ke.reduce(
					(e, t) => (
						(e[t] = (function (e) {
							let t = [],
								n = [],
								r = 0,
								i = !1,
								o = !1;
							const a = new WeakSet(),
								s = {
									schedule: function (e) {
										const o =
												arguments.length > 2 &&
												void 0 !== arguments[2] &&
												arguments[2] &&
												i,
											s = o ? t : n;
										return (
											arguments.length > 1 &&
												void 0 !== arguments[1] &&
												arguments[1] &&
												a.add(e),
											-1 === s.indexOf(e) &&
												(s.push(e),
												o && i && (r = t.length)),
											e
										);
									},
									cancel: (e) => {
										const t = n.indexOf(e);
										-1 !== t && n.splice(t, 1), a.delete(e);
									},
									process: (l) => {
										if (i) o = !0;
										else {
											if (
												((i = !0),
												([t, n] = [n, t]),
												(n.length = 0),
												(r = t.length),
												r)
											)
												for (let n = 0; n < r; n++) {
													const r = t[n];
													r(l),
														a.has(r) &&
															(s.schedule(r),
															e());
												}
											(i = !1),
												o && ((o = !1), s.process(l));
										}
									},
								};
							return s;
						})(() => (Je = !0))),
						e
					),
					{},
				),
				$e = (e) => Ze[e].process(Xe),
				et = (e) => {
					(Je = !1),
						(Xe.delta = qe
							? 1e3 / 60
							: Math.max(Math.min(e - Xe.timestamp, 40), 1)),
						(Xe.timestamp = e),
						(Xe.isProcessing = !0),
						Ke.forEach($e),
						(Xe.isProcessing = !1),
						Je && ((qe = !1), requestAnimationFrame(et));
				},
				tt = Ke.reduce((e, t) => {
					const n = Ze[t];
					return (
						(e[t] = function (e) {
							let t =
									arguments.length > 1 &&
									void 0 !== arguments[1] &&
									arguments[1],
								r =
									arguments.length > 2 &&
									void 0 !== arguments[2] &&
									arguments[2];
							return (
								Je ||
									((Je = !0),
									(qe = !0),
									Xe.isProcessing ||
										requestAnimationFrame(et)),
								n.schedule(e, t, r)
							);
						}),
						e
					);
				}, {});
			function nt(e) {
				Ke.forEach((t) => Ze[t].cancel(e));
			}
			function rt(e, t) {
				const n = 'pointer' + (t ? 'enter' : 'leave'),
					r = 'onHover' + (t ? 'Start' : 'End');
				return Ne(
					e.current,
					n,
					(n, i) => {
						if ('touch' === n.type || Ge()) return;
						const o = e.getProps();
						e.animationState &&
							o.whileHover &&
							e.animationState.setActive('whileHover', t),
							o[r] && tt.update(() => o[r](n, i));
					},
					{ passive: !e.getProps()[r] },
				);
			}
			const it = (e, t) => !!t && (e === t || it(e, t.parentElement)),
				ot = (e) => e;
			function at(e, t) {
				if (!t) return;
				const n = new PointerEvent('pointer' + e);
				t(n, Fe(n));
			}
			const st = new WeakMap(),
				lt = new WeakMap(),
				ut = (e) => {
					const t = st.get(e.target);
					t && t(e);
				},
				ct = (e) => {
					e.forEach(ut);
				};
			function dt(e, t, n) {
				const r = (function (e) {
					let { root: t, ...n } = e;
					const r = t || document;
					lt.has(r) || lt.set(r, {});
					const i = lt.get(r),
						o = JSON.stringify(n);
					return (
						i[o] ||
							(i[o] = new IntersectionObserver(ct, {
								root: t,
								...n,
							})),
						i[o]
					);
				})(t);
				return (
					st.set(e, n),
					r.observe(e),
					() => {
						st.delete(e), r.unobserve(e);
					}
				);
			}
			const ft = { some: 0, all: 1 };
			const ht = {
				inView: {
					Feature: class extends We {
						constructor() {
							super(...arguments),
								(this.hasEnteredView = !1),
								(this.isInView = !1);
						}
						startObserver() {
							this.unmount();
							const { viewport: e = {} } = this.node.getProps(),
								{
									root: t,
									margin: n,
									amount: r = 'some',
									once: i,
								} = e,
								o = {
									root: t ? t.current : void 0,
									rootMargin: n,
									threshold:
										'number' === typeof r ? r : ft[r],
								};
							return dt(this.node.current, o, (e) => {
								const { isIntersecting: t } = e;
								if (this.isInView === t) return;
								if (
									((this.isInView = t),
									i && !t && this.hasEnteredView)
								)
									return;
								t && (this.hasEnteredView = !0),
									this.node.animationState &&
										this.node.animationState.setActive(
											'whileInView',
											t,
										);
								const {
										onViewportEnter: n,
										onViewportLeave: r,
									} = this.node.getProps(),
									o = t ? n : r;
								o && o(e);
							});
						}
						mount() {
							this.startObserver();
						}
						update() {
							if ('undefined' === typeof IntersectionObserver)
								return;
							const { props: e, prevProps: t } = this.node,
								n = ['amount', 'margin', 'root'].some(
									(function (e) {
										let { viewport: t = {} } = e,
											{ viewport: n = {} } =
												arguments.length > 1 &&
												void 0 !== arguments[1]
													? arguments[1]
													: {};
										return (e) => t[e] !== n[e];
									})(e, t),
								);
							n && this.startObserver();
						}
						unmount() {}
					},
				},
				tap: {
					Feature: class extends We {
						constructor() {
							super(...arguments),
								(this.removeStartListeners = ot),
								(this.removeEndListeners = ot),
								(this.removeAccessibleListeners = ot),
								(this.startPointerPress = (e, t) => {
									if (
										(this.removeEndListeners(),
										this.isPressing)
									)
										return;
									const n = this.node.getProps(),
										r = Ne(
											window,
											'pointerup',
											(e, t) => {
												if (!this.checkPressEnd())
													return;
												const {
													onTap: n,
													onTapCancel: r,
												} = this.node.getProps();
												tt.update(() => {
													it(
														this.node.current,
														e.target,
													)
														? n && n(e, t)
														: r && r(e, t);
												});
											},
											{
												passive: !(
													n.onTap || n.onPointerUp
												),
											},
										),
										i = Ne(
											window,
											'pointercancel',
											(e, t) => this.cancelPress(e, t),
											{
												passive: !(
													n.onTapCancel ||
													n.onPointerCancel
												),
											},
										);
									(this.removeEndListeners = Ve(r, i)),
										this.startPress(e, t);
								}),
								(this.startAccessiblePress = () => {
									const e = Le(
											this.node.current,
											'keydown',
											(e) => {
												if (
													'Enter' !== e.key ||
													this.isPressing
												)
													return;
												this.removeEndListeners(),
													(this.removeEndListeners =
														Le(
															this.node.current,
															'keyup',
															(e) => {
																'Enter' ===
																	e.key &&
																	this.checkPressEnd() &&
																	at(
																		'up',
																		(
																			e,
																			t,
																		) => {
																			const {
																				onTap: n,
																			} =
																				this.node.getProps();
																			n &&
																				tt.update(
																					() =>
																						n(
																							e,
																							t,
																						),
																				);
																		},
																	);
															},
														)),
													at('down', (e, t) => {
														this.startPress(e, t);
													});
											},
										),
										t = Le(
											this.node.current,
											'blur',
											() => {
												this.isPressing &&
													at('cancel', (e, t) =>
														this.cancelPress(e, t),
													);
											},
										);
									this.removeAccessibleListeners = Ve(e, t);
								});
						}
						startPress(e, t) {
							this.isPressing = !0;
							const { onTapStart: n, whileTap: r } =
								this.node.getProps();
							r &&
								this.node.animationState &&
								this.node.animationState.setActive(
									'whileTap',
									!0,
								),
								n && tt.update(() => n(e, t));
						}
						checkPressEnd() {
							this.removeEndListeners(), (this.isPressing = !1);
							return (
								this.node.getProps().whileTap &&
									this.node.animationState &&
									this.node.animationState.setActive(
										'whileTap',
										!1,
									),
								!Ge()
							);
						}
						cancelPress(e, t) {
							if (!this.checkPressEnd()) return;
							const { onTapCancel: n } = this.node.getProps();
							n && tt.update(() => n(e, t));
						}
						mount() {
							const e = this.node.getProps(),
								t = Ne(
									this.node.current,
									'pointerdown',
									this.startPointerPress,
									{
										passive: !(
											e.onTapStart || e.onPointerStart
										),
									},
								),
								n = Le(
									this.node.current,
									'focus',
									this.startAccessiblePress,
								);
							this.removeStartListeners = Ve(t, n);
						}
						unmount() {
							this.removeStartListeners(),
								this.removeEndListeners(),
								this.removeAccessibleListeners();
						}
					},
				},
				focus: {
					Feature: class extends We {
						constructor() {
							super(...arguments), (this.isActive = !1);
						}
						onFocus() {
							let e = !1;
							try {
								e = this.node.current.matches(':focus-visible');
							} catch (t) {
								e = !0;
							}
							e &&
								this.node.animationState &&
								(this.node.animationState.setActive(
									'whileFocus',
									!0,
								),
								(this.isActive = !0));
						}
						onBlur() {
							this.isActive &&
								this.node.animationState &&
								(this.node.animationState.setActive(
									'whileFocus',
									!1,
								),
								(this.isActive = !1));
						}
						mount() {
							this.unmount = Ve(
								Le(this.node.current, 'focus', () =>
									this.onFocus(),
								),
								Le(this.node.current, 'blur', () =>
									this.onBlur(),
								),
							);
						}
						unmount() {}
					},
				},
				hover: {
					Feature: class extends We {
						mount() {
							this.unmount = Ve(
								rt(this.node, !0),
								rt(this.node, !1),
							);
						}
						unmount() {}
					},
				},
			};
			function pt(e, t) {
				if (!Array.isArray(t)) return !1;
				const n = t.length;
				if (n !== e.length) return !1;
				for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
				return !0;
			}
			function mt(e, t, n) {
				const r = e.getProps();
				return Se(
					r,
					t,
					void 0 !== n ? n : r.custom,
					(function (e) {
						const t = {};
						return e.values.forEach((e, n) => (t[n] = e.get())), t;
					})(e),
					(function (e) {
						const t = {};
						return (
							e.values.forEach(
								(e, n) => (t[n] = e.getVelocity()),
							),
							t
						);
					})(e),
				);
			}
			const gt = 'data-' + we('framerAppearId');
			let vt = ot,
				At = ot;
			const yt = (e) => 1e3 * e,
				wt = (e) => e / 1e3,
				bt = !1,
				xt = (e) => Array.isArray(e) && 'number' === typeof e[0];
			function Et(e) {
				return Boolean(
					!e ||
						('string' === typeof e && kt[e]) ||
						xt(e) ||
						(Array.isArray(e) && e.every(Et)),
				);
			}
			const Ct = (e) => {
					let [t, n, r, i] = e;
					return 'cubic-bezier('
						.concat(t, ', ')
						.concat(n, ', ')
						.concat(r, ', ')
						.concat(i, ')');
				},
				kt = {
					linear: 'linear',
					ease: 'ease',
					easeIn: 'ease-in',
					easeOut: 'ease-out',
					easeInOut: 'ease-in-out',
					circIn: Ct([0, 0.65, 0.55, 1]),
					circOut: Ct([0.55, 0, 1, 0.45]),
					backIn: Ct([0.31, 0.01, 0.66, -0.59]),
					backOut: Ct([0.33, 1.53, 0.69, 0.99]),
				};
			function St(e) {
				if (e)
					return xt(e) ? Ct(e) : Array.isArray(e) ? e.map(St) : kt[e];
			}
			const Tt = {
					waapi: () =>
						Object.hasOwnProperty.call(
							Element.prototype,
							'animate',
						),
				},
				_t = {},
				Pt = {};
			for (const n in Tt)
				Pt[n] = () => (void 0 === _t[n] && (_t[n] = Tt[n]()), _t[n]);
			const Mt = (e, t, n) =>
					(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) *
					e,
				Dt = 1e-7,
				Ot = 12;
			function Rt(e, t, n, r) {
				if (e === t && n === r) return ot;
				const i = (t) =>
					(function (e, t, n, r, i) {
						let o,
							a,
							s = 0;
						do {
							(a = t + (n - t) / 2),
								(o = Mt(a, r, i) - e),
								o > 0 ? (n = a) : (t = a);
						} while (Math.abs(o) > Dt && ++s < Ot);
						return a;
					})(t, 0, 1, e, n);
				return (e) => (0 === e || 1 === e ? e : Mt(i(e), t, r));
			}
			const Bt = Rt(0.42, 0, 1, 1),
				Lt = Rt(0, 0, 0.58, 1),
				It = Rt(0.42, 0, 0.58, 1),
				Ft = (e) => Array.isArray(e) && 'number' !== typeof e[0],
				jt = (e) => (t) =>
					t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
				Nt = (e) => (t) => 1 - e(1 - t),
				zt = (e) => 1 - Math.sin(Math.acos(e)),
				Vt = Nt(zt),
				Ut = jt(Vt),
				Yt = Rt(0.33, 1.53, 0.69, 0.99),
				Qt = Nt(Yt),
				Ht = jt(Qt),
				Gt = {
					linear: ot,
					easeIn: Bt,
					easeInOut: It,
					easeOut: Lt,
					circIn: zt,
					circInOut: Ut,
					circOut: Vt,
					backIn: Qt,
					backInOut: Ht,
					backOut: Yt,
					anticipate: (e) =>
						(e *= 2) < 1
							? 0.5 * Qt(e)
							: 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
				},
				Wt = (e) => {
					if (Array.isArray(e)) {
						At(
							4 === e.length,
							'Cubic bezier arrays must contain four numerical values.',
						);
						const [t, n, r, i] = e;
						return Rt(t, n, r, i);
					}
					return 'string' === typeof e
						? (At(
								void 0 !== Gt[e],
								"Invalid easing type '".concat(e, "'"),
							),
							Gt[e])
						: e;
				},
				Xt = (e, t) => (n) =>
					Boolean(
						(W(n) && G.test(n) && n.startsWith(e)) ||
							(t && Object.prototype.hasOwnProperty.call(n, t)),
					),
				qt = (e, t, n) => (r) => {
					if (!W(r)) return r;
					const [i, o, a, s] = r.match(Q);
					return {
						[e]: parseFloat(i),
						[t]: parseFloat(o),
						[n]: parseFloat(a),
						alpha: void 0 !== s ? parseFloat(s) : 1,
					};
				},
				Jt = {
					...z,
					transform: (e) => Math.round(((e) => N(0, 255, e))(e)),
				},
				Kt = {
					test: Xt('rgb', 'red'),
					parse: qt('red', 'green', 'blue'),
					transform: (e) => {
						let { red: t, green: n, blue: r, alpha: i = 1 } = e;
						return (
							'rgba(' +
							Jt.transform(t) +
							', ' +
							Jt.transform(n) +
							', ' +
							Jt.transform(r) +
							', ' +
							Y(V.transform(i)) +
							')'
						);
					},
				};
			const Zt = {
					test: Xt('#'),
					parse: function (e) {
						let t = '',
							n = '',
							r = '',
							i = '';
						return (
							e.length > 5
								? ((t = e.substring(1, 3)),
									(n = e.substring(3, 5)),
									(r = e.substring(5, 7)),
									(i = e.substring(7, 9)))
								: ((t = e.substring(1, 2)),
									(n = e.substring(2, 3)),
									(r = e.substring(3, 4)),
									(i = e.substring(4, 5)),
									(t += t),
									(n += n),
									(r += r),
									(i += i)),
							{
								red: parseInt(t, 16),
								green: parseInt(n, 16),
								blue: parseInt(r, 16),
								alpha: i ? parseInt(i, 16) / 255 : 1,
							}
						);
					},
					transform: Kt.transform,
				},
				$t = {
					test: Xt('hsl', 'hue'),
					parse: qt('hue', 'saturation', 'lightness'),
					transform: (e) => {
						let {
							hue: t,
							saturation: n,
							lightness: r,
							alpha: i = 1,
						} = e;
						return (
							'hsla(' +
							Math.round(t) +
							', ' +
							J.transform(Y(n)) +
							', ' +
							J.transform(Y(r)) +
							', ' +
							Y(V.transform(i)) +
							')'
						);
					},
				},
				en = {
					test: (e) => Kt.test(e) || Zt.test(e) || $t.test(e),
					parse: (e) =>
						Kt.test(e)
							? Kt.parse(e)
							: $t.test(e)
								? $t.parse(e)
								: Zt.parse(e),
					transform: (e) =>
						W(e)
							? e
							: e.hasOwnProperty('red')
								? Kt.transform(e)
								: $t.transform(e),
				},
				tn = (e, t, n) => -n * e + n * t + e;
			function nn(e, t, n) {
				return (
					n < 0 && (n += 1),
					n > 1 && (n -= 1),
					n < 1 / 6
						? e + 6 * (t - e) * n
						: n < 0.5
							? t
							: n < 2 / 3
								? e + (t - e) * (2 / 3 - n) * 6
								: e
				);
			}
			const rn = (e, t, n) => {
					const r = e * e;
					return Math.sqrt(Math.max(0, n * (t * t - r) + r));
				},
				on = [Zt, Kt, $t],
				an = (e) => on.find((t) => t.test(e));
			function sn(e) {
				const t = an(e);
				At(
					Boolean(t),
					"'".concat(
						e,
						"' is not an animatable color. Use the equivalent color code instead.",
					),
				);
				let n = t.parse(e);
				return (
					t === $t &&
						(n = (function (e) {
							let {
								hue: t,
								saturation: n,
								lightness: r,
								alpha: i,
							} = e;
							(t /= 360), (n /= 100), (r /= 100);
							let o = 0,
								a = 0,
								s = 0;
							if (n) {
								const e = r < 0.5 ? r * (1 + n) : r + n - r * n,
									i = 2 * r - e;
								(o = nn(i, e, t + 1 / 3)),
									(a = nn(i, e, t)),
									(s = nn(i, e, t - 1 / 3));
							} else o = a = s = r;
							return {
								red: Math.round(255 * o),
								green: Math.round(255 * a),
								blue: Math.round(255 * s),
								alpha: i,
							};
						})(n)),
					n
				);
			}
			const ln = (e, t) => {
				const n = sn(e),
					r = sn(t),
					i = { ...n };
				return (e) => (
					(i.red = rn(n.red, r.red, e)),
					(i.green = rn(n.green, r.green, e)),
					(i.blue = rn(n.blue, r.blue, e)),
					(i.alpha = tn(n.alpha, r.alpha, e)),
					Kt.transform(i)
				);
			};
			const un = {
					regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
					countKey: 'Vars',
					token: '${v}',
					parse: ot,
				},
				cn = {
					regex: H,
					countKey: 'Colors',
					token: '${c}',
					parse: en.parse,
				},
				dn = {
					regex: Q,
					countKey: 'Numbers',
					token: '${n}',
					parse: z.parse,
				};
			function fn(e, t) {
				let { regex: n, countKey: r, token: i, parse: o } = t;
				const a = e.tokenised.match(n);
				a &&
					((e['num' + r] = a.length),
					(e.tokenised = e.tokenised.replace(n, i)),
					e.values.push(...a.map(o)));
			}
			function hn(e) {
				const t = e.toString(),
					n = {
						value: t,
						tokenised: t,
						values: [],
						numVars: 0,
						numColors: 0,
						numNumbers: 0,
					};
				return (
					n.value.includes('var(--') && fn(n, un),
					fn(n, cn),
					fn(n, dn),
					n
				);
			}
			function pn(e) {
				return hn(e).values;
			}
			function mn(e) {
				const {
						values: t,
						numColors: n,
						numVars: r,
						tokenised: i,
					} = hn(e),
					o = t.length;
				return (e) => {
					let t = i;
					for (let i = 0; i < o; i++)
						t =
							i < r
								? t.replace(un.token, e[i])
								: i < r + n
									? t.replace(cn.token, en.transform(e[i]))
									: t.replace(dn.token, Y(e[i]));
					return t;
				};
			}
			const gn = (e) => ('number' === typeof e ? 0 : e);
			const vn = {
					test: function (e) {
						var t, n;
						return (
							isNaN(e) &&
							W(e) &&
							((null === (t = e.match(Q)) || void 0 === t
								? void 0
								: t.length) || 0) +
								((null === (n = e.match(H)) || void 0 === n
									? void 0
									: n.length) || 0) >
								0
						);
					},
					parse: pn,
					createTransformer: mn,
					getAnimatableNone: function (e) {
						const t = pn(e);
						return mn(e)(t.map(gn));
					},
				},
				An = (e, t) => (n) => ''.concat(n > 0 ? t : e);
			function yn(e, t) {
				return 'number' === typeof e
					? (n) => tn(e, t, n)
					: en.test(e)
						? ln(e, t)
						: e.startsWith('var(')
							? An(e, t)
							: xn(e, t);
			}
			const wn = (e, t) => {
					const n = [...e],
						r = n.length,
						i = e.map((e, n) => yn(e, t[n]));
					return (e) => {
						for (let t = 0; t < r; t++) n[t] = i[t](e);
						return n;
					};
				},
				bn = (e, t) => {
					const n = { ...e, ...t },
						r = {};
					for (const i in n)
						void 0 !== e[i] &&
							void 0 !== t[i] &&
							(r[i] = yn(e[i], t[i]));
					return (e) => {
						for (const t in r) n[t] = r[t](e);
						return n;
					};
				},
				xn = (e, t) => {
					const n = vn.createTransformer(t),
						r = hn(e),
						i = hn(t);
					return r.numVars === i.numVars &&
						r.numColors === i.numColors &&
						r.numNumbers >= i.numNumbers
						? Ve(wn(r.values, i.values), n)
						: (vt(
								!0,
								"Complex values '"
									.concat(e, "' and '")
									.concat(
										t,
										"' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.",
									),
							),
							An(e, t));
				},
				En = (e, t, n) => {
					const r = t - e;
					return 0 === r ? 1 : (n - e) / r;
				},
				Cn = (e, t) => (n) => tn(e, t, n);
			function kn(e, t, n) {
				const r = [],
					i =
						n ||
						(function (e) {
							return 'number' === typeof e
								? Cn
								: 'string' === typeof e
									? en.test(e)
										? ln
										: xn
									: Array.isArray(e)
										? wn
										: 'object' === typeof e
											? bn
											: Cn;
						})(e[0]),
					o = e.length - 1;
				for (let a = 0; a < o; a++) {
					let n = i(e[a], e[a + 1]);
					if (t) {
						const e = Array.isArray(t) ? t[a] || ot : t;
						n = Ve(e, n);
					}
					r.push(n);
				}
				return r;
			}
			function Sn(e, t) {
				let {
					clamp: n = !0,
					ease: r,
					mixer: i,
				} = arguments.length > 2 && void 0 !== arguments[2]
					? arguments[2]
					: {};
				const o = e.length;
				if (
					(At(
						o === t.length,
						'Both input and output ranges must be the same length',
					),
					1 === o)
				)
					return () => t[0];
				e[0] > e[o - 1] &&
					((e = [...e].reverse()), (t = [...t].reverse()));
				const a = kn(t, r, i),
					s = a.length,
					l = (t) => {
						let n = 0;
						if (s > 1)
							for (; n < e.length - 2 && !(t < e[n + 1]); n++);
						const r = En(e[n], e[n + 1], t);
						return a[n](r);
					};
				return n ? (t) => l(N(e[0], e[o - 1], t)) : l;
			}
			function Tn(e) {
				const t = [0];
				return (
					(function (e, t) {
						const n = e[e.length - 1];
						for (let r = 1; r <= t; r++) {
							const i = En(0, t, r);
							e.push(tn(n, 1, i));
						}
					})(t, e.length - 1),
					t
				);
			}
			function _n(e) {
				let {
					duration: t = 300,
					keyframes: n,
					times: r,
					ease: i = 'easeInOut',
				} = e;
				const o = Ft(i) ? i.map(Wt) : Wt(i),
					a = { done: !1, value: n[0] },
					s = (function (e, t) {
						return e.map((e) => e * t);
					})(r && r.length === n.length ? r : Tn(n), t),
					l = Sn(s, n, {
						ease: Array.isArray(o)
							? o
							: ((u = n),
								(c = o),
								u.map(() => c || It).splice(0, u.length - 1)),
					});
				var u, c;
				return {
					calculatedDuration: t,
					next: (e) => ((a.value = l(e)), (a.done = e >= t), a),
				};
			}
			function Pn(e, t) {
				return t ? e * (1e3 / t) : 0;
			}
			const Mn = 5;
			function Dn(e, t, n) {
				const r = Math.max(t - Mn, 0);
				return Pn(n - e(r), t - r);
			}
			const On = 0.001,
				Rn = 0.01,
				Bn = 10,
				Ln = 0.05,
				In = 1;
			function Fn(e) {
				let t,
					n,
					{
						duration: r = 800,
						bounce: i = 0.25,
						velocity: o = 0,
						mass: a = 1,
					} = e;
				vt(r <= yt(Bn), 'Spring duration must be 10 seconds or less');
				let s = 1 - i;
				(s = N(Ln, In, s)),
					(r = N(Rn, Bn, wt(r))),
					s < 1
						? ((t = (e) => {
								const t = e * s,
									n = t * r,
									i = t - o,
									a = Nn(e, s),
									l = Math.exp(-n);
								return On - (i / a) * l;
							}),
							(n = (e) => {
								const n = e * s * r,
									i = n * o + o,
									a = Math.pow(s, 2) * Math.pow(e, 2) * r,
									l = Math.exp(-n),
									u = Nn(Math.pow(e, 2), s);
								return (
									((-t(e) + On > 0 ? -1 : 1) *
										((i - a) * l)) /
									u
								);
							}))
						: ((t = (e) =>
								Math.exp(-e * r) * ((e - o) * r + 1) - On),
							(n = (e) => Math.exp(-e * r) * (r * r * (o - e))));
				const l = (function (e, t, n) {
					let r = n;
					for (let i = 1; i < jn; i++) r -= e(r) / t(r);
					return r;
				})(t, n, 5 / r);
				if (((r = yt(r)), isNaN(l)))
					return { stiffness: 100, damping: 10, duration: r };
				{
					const e = Math.pow(l, 2) * a;
					return {
						stiffness: e,
						damping: 2 * s * Math.sqrt(a * e),
						duration: r,
					};
				}
			}
			const jn = 12;
			function Nn(e, t) {
				return e * Math.sqrt(1 - t * t);
			}
			const zn = ['duration', 'bounce'],
				Vn = ['stiffness', 'damping', 'mass'];
			function Un(e, t) {
				return t.some((t) => void 0 !== e[t]);
			}
			function Yn(e) {
				let { keyframes: t, restDelta: n, restSpeed: r, ...i } = e;
				const o = t[0],
					a = t[t.length - 1],
					s = { done: !1, value: o },
					{
						stiffness: l,
						damping: u,
						mass: c,
						velocity: d,
						duration: f,
						isResolvedFromDuration: h,
					} = (function (e) {
						let t = {
							velocity: 0,
							stiffness: 100,
							damping: 10,
							mass: 1,
							isResolvedFromDuration: !1,
							...e,
						};
						if (!Un(e, Vn) && Un(e, zn)) {
							const n = Fn(e);
							(t = { ...t, ...n, velocity: 0, mass: 1 }),
								(t.isResolvedFromDuration = !0);
						}
						return t;
					})(i),
					p = d ? -wt(d) : 0,
					m = u / (2 * Math.sqrt(l * c)),
					g = a - o,
					v = wt(Math.sqrt(l / c)),
					A = Math.abs(g) < 5;
				let y;
				if (
					(r || (r = A ? 0.01 : 2), n || (n = A ? 0.005 : 0.5), m < 1)
				) {
					const e = Nn(v, m);
					y = (t) => {
						const n = Math.exp(-m * v * t);
						return (
							a -
							n *
								(((p + m * v * g) / e) * Math.sin(e * t) +
									g * Math.cos(e * t))
						);
					};
				} else if (1 === m)
					y = (e) => a - Math.exp(-v * e) * (g + (p + v * g) * e);
				else {
					const e = v * Math.sqrt(m * m - 1);
					y = (t) => {
						const n = Math.exp(-m * v * t),
							r = Math.min(e * t, 300);
						return (
							a -
							(n *
								((p + m * v * g) * Math.sinh(r) +
									e * g * Math.cosh(r))) /
								e
						);
					};
				}
				return {
					calculatedDuration: (h && f) || null,
					next: (e) => {
						const t = y(e);
						if (h) s.done = e >= f;
						else {
							let i = p;
							0 !== e && (i = m < 1 ? Dn(y, e, t) : 0);
							const o = Math.abs(i) <= r,
								l = Math.abs(a - t) <= n;
							s.done = o && l;
						}
						return (s.value = s.done ? a : t), s;
					},
				};
			}
			function Qn(e) {
				let {
					keyframes: t,
					velocity: n = 0,
					power: r = 0.8,
					timeConstant: i = 325,
					bounceDamping: o = 10,
					bounceStiffness: a = 500,
					modifyTarget: s,
					min: l,
					max: u,
					restDelta: c = 0.5,
					restSpeed: d,
				} = e;
				const f = t[0],
					h = { done: !1, value: f },
					p = (e) =>
						void 0 === l
							? u
							: void 0 === u || Math.abs(l - e) < Math.abs(u - e)
								? l
								: u;
				let m = r * n;
				const g = f + m,
					v = void 0 === s ? g : s(g);
				v !== g && (m = v - f);
				const A = (e) => -m * Math.exp(-e / i),
					y = (e) => v + A(e),
					w = (e) => {
						const t = A(e),
							n = y(e);
						(h.done = Math.abs(t) <= c), (h.value = h.done ? v : n);
					};
				let b, x;
				const E = (e) => {
					((e) => (void 0 !== l && e < l) || (void 0 !== u && e > u))(
						h.value,
					) &&
						((b = e),
						(x = Yn({
							keyframes: [h.value, p(h.value)],
							velocity: Dn(y, e, h.value),
							damping: o,
							stiffness: a,
							restDelta: c,
							restSpeed: d,
						})));
				};
				return (
					E(0),
					{
						calculatedDuration: null,
						next: (e) => {
							let t = !1;
							return (
								x || void 0 !== b || ((t = !0), w(e), E(e)),
								void 0 !== b && e > b
									? x.next(e - b)
									: (!t && w(e), h)
							);
						},
					}
				);
			}
			const Hn = (e) => {
					const t = (t) => {
						let { timestamp: n } = t;
						return e(n);
					};
					return {
						start: () => tt.update(t, !0),
						stop: () => nt(t),
						now: () =>
							Xe.isProcessing ? Xe.timestamp : performance.now(),
					};
				},
				Gn = 2e4;
			function Wn(e) {
				let t = 0;
				let n = e.next(t);
				for (; !n.done && t < Gn; ) (t += 50), (n = e.next(t));
				return t >= Gn ? 1 / 0 : t;
			}
			const Xn = {
				decay: Qn,
				inertia: Qn,
				tween: _n,
				keyframes: _n,
				spring: Yn,
			};
			function qn(e) {
				let t,
					n,
					{
						autoplay: r = !0,
						delay: i = 0,
						driver: o = Hn,
						keyframes: a,
						type: s = 'keyframes',
						repeat: l = 0,
						repeatDelay: u = 0,
						repeatType: c = 'loop',
						onPlay: d,
						onStop: f,
						onComplete: h,
						onUpdate: p,
						...m
					} = e,
					g = 1,
					v = !1;
				const A = () => {
					t && t(),
						(n = new Promise((e) => {
							t = e;
						}));
				};
				let y;
				A();
				const w = Xn[s] || _n;
				let b;
				w !== _n &&
					'number' !== typeof a[0] &&
					((b = Sn([0, 100], a, { clamp: !1 })), (a = [0, 100]));
				const x = w({ ...m, keyframes: a });
				let E;
				'mirror' === c &&
					(E = w({
						...m,
						keyframes: [...a].reverse(),
						velocity: -(m.velocity || 0),
					}));
				let C = 'idle',
					k = null,
					S = null,
					T = null;
				null === x.calculatedDuration &&
					l &&
					(x.calculatedDuration = Wn(x));
				const { calculatedDuration: _ } = x;
				let P = 1 / 0,
					M = 1 / 0;
				null !== _ && ((P = _ + u), (M = P * (l + 1) - u));
				let D = 0;
				const O = (e) => {
						if (null === S) return;
						g > 0 && (S = Math.min(S, e)),
							(D = null !== k ? k : (e - S) * g);
						const t = D - i,
							n = t < 0;
						(D = Math.max(t, 0)),
							'finished' === C && null === k && (D = M);
						let r = D,
							o = x;
						if (l) {
							const e = D / P;
							let t = Math.floor(e),
								n = e % 1;
							!n && e >= 1 && (n = 1),
								1 === n && t--,
								(t = Math.min(t, l + 1));
							const i = Boolean(t % 2);
							i &&
								('reverse' === c
									? ((n = 1 - n), u && (n -= u / P))
									: 'mirror' === c && (o = E));
							let a = N(0, 1, n);
							D > M && (a = 'reverse' === c && i ? 1 : 0),
								(r = a * P);
						}
						const s = n ? { done: !1, value: a[0] } : o.next(r);
						b && (s.value = b(s.value));
						let { done: d } = s;
						n || null === _ || (d = D >= M);
						const f =
							null === k &&
							('finished' === C ||
								('running' === C && d) ||
								(g < 0 && D <= 0));
						return p && p(s.value), f && L(), s;
					},
					R = () => {
						y && y.stop(), (y = void 0);
					},
					B = () => {
						(C = 'idle'), R(), A(), (S = T = null);
					},
					L = () => {
						(C = 'finished'), h && h(), R(), A();
					},
					I = () => {
						if (v) return;
						y || (y = o(O));
						const e = y.now();
						d && d(),
							null !== k
								? (S = e - k)
								: (S && 'finished' !== C) || (S = e),
							(T = S),
							(k = null),
							(C = 'running'),
							y.start();
					};
				r && I();
				const F = {
					then: (e, t) => n.then(e, t),
					get time() {
						return wt(D);
					},
					set time(e) {
						(e = yt(e)),
							(D = e),
							null === k && y && 0 !== g
								? (S = y.now() - e / g)
								: (k = e);
					},
					get duration() {
						const e =
							null === x.calculatedDuration
								? Wn(x)
								: x.calculatedDuration;
						return wt(e);
					},
					get speed() {
						return g;
					},
					set speed(e) {
						e !== g && y && ((g = e), (F.time = wt(D)));
					},
					get state() {
						return C;
					},
					play: I,
					pause: () => {
						(C = 'paused'), (k = D);
					},
					stop: () => {
						(v = !0), 'idle' !== C && ((C = 'idle'), f && f(), B());
					},
					cancel: () => {
						null !== T && O(T), B();
					},
					complete: () => {
						C = 'finished';
					},
					sample: (e) => ((S = 0), O(e)),
				};
				return F;
			}
			const Jn = new Set([
					'opacity',
					'clipPath',
					'filter',
					'transform',
					'backgroundColor',
				]),
				Kn = 10,
				Zn = 2e4,
				$n = (e, t) =>
					'spring' === t.type ||
					'backgroundColor' === e ||
					!Et(t.ease);
			function er(e, t, n) {
				let { onUpdate: r, onComplete: i, ...o } = n;
				if (
					!(
						Pt.waapi() &&
						Jn.has(t) &&
						!o.repeatDelay &&
						'mirror' !== o.repeatType &&
						0 !== o.damping &&
						'inertia' !== o.type
					)
				)
					return !1;
				let a,
					s,
					l = !1;
				const u = () => {
					s = new Promise((e) => {
						a = e;
					});
				};
				u();
				let { keyframes: c, duration: d = 300, ease: f, times: h } = o;
				if ($n(t, o)) {
					const e = qn({ ...o, repeat: 0, delay: 0 });
					let t = { done: !1, value: c[0] };
					const n = [];
					let r = 0;
					for (; !t.done && r < Zn; )
						(t = e.sample(r)), n.push(t.value), (r += Kn);
					(h = void 0), (c = n), (d = r - Kn), (f = 'linear');
				}
				const p = (function (e, t, n) {
						let {
							delay: r = 0,
							duration: i,
							repeat: o = 0,
							repeatType: a = 'loop',
							ease: s,
							times: l,
						} = arguments.length > 3 && void 0 !== arguments[3]
							? arguments[3]
							: {};
						const u = { [t]: n };
						l && (u.offset = l);
						const c = St(s);
						return (
							Array.isArray(c) && (u.easing = c),
							e.animate(u, {
								delay: r,
								duration: i,
								easing: Array.isArray(c) ? 'linear' : c,
								fill: 'both',
								iterations: o + 1,
								direction:
									'reverse' === a ? 'alternate' : 'normal',
							})
						);
					})(e.owner.current, t, c, {
						...o,
						duration: d,
						ease: f,
						times: h,
					}),
					m = () => p.cancel(),
					g = () => {
						tt.update(m), a(), u();
					};
				return (
					(p.onfinish = () => {
						e.set(
							(function (e, t) {
								let { repeat: n, repeatType: r = 'loop' } = t;
								return e[
									n && 'loop' !== r && n % 2 === 1
										? 0
										: e.length - 1
								];
							})(c, o),
						),
							i && i(),
							g();
					}),
					{
						then: (e, t) => s.then(e, t),
						get time() {
							return wt(p.currentTime || 0);
						},
						set time(e) {
							p.currentTime = yt(e);
						},
						get speed() {
							return p.playbackRate;
						},
						set speed(e) {
							p.playbackRate = e;
						},
						get duration() {
							return wt(d);
						},
						play: () => {
							l || (p.play(), nt(m));
						},
						pause: () => p.pause(),
						stop: () => {
							if (((l = !0), 'idle' === p.playState)) return;
							const { currentTime: t } = p;
							if (t) {
								const n = qn({ ...o, autoplay: !1 });
								e.setWithVelocity(
									n.sample(t - Kn).value,
									n.sample(t).value,
									Kn,
								);
							}
							g();
						},
						complete: () => p.finish(),
						cancel: g,
					}
				);
			}
			const tr = {
					type: 'spring',
					stiffness: 500,
					damping: 25,
					restSpeed: 10,
				},
				nr = { type: 'keyframes', duration: 0.8 },
				rr = {
					type: 'keyframes',
					ease: [0.25, 0.1, 0.35, 1],
					duration: 0.3,
				},
				ir = (e, t) => {
					let { keyframes: n } = t;
					return n.length > 2
						? nr
						: M.has(e)
							? e.startsWith('scale')
								? {
										type: 'spring',
										stiffness: 550,
										damping:
											0 === n[1]
												? 2 * Math.sqrt(550)
												: 30,
										restSpeed: 10,
									}
								: tr
							: rr;
				},
				or = (e, t) =>
					'zIndex' !== e &&
					(!('number' !== typeof t && !Array.isArray(t)) ||
						!(
							'string' !== typeof t ||
							(!vn.test(t) && '0' !== t) ||
							t.startsWith('url(')
						)),
				ar = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
			function sr(e) {
				const [t, n] = e.slice(0, -1).split('(');
				if ('drop-shadow' === t) return e;
				const [r] = n.match(Q) || [];
				if (!r) return e;
				const i = n.replace(r, '');
				let o = ar.has(t) ? 1 : 0;
				return r !== n && (o *= 100), t + '(' + o + i + ')';
			}
			const lr = /([a-z-]*)\(.*?\)/g,
				ur = {
					...vn,
					getAnimatableNone: (e) => {
						const t = e.match(lr);
						return t ? t.map(sr).join(' ') : e;
					},
				},
				cr = {
					...ne,
					color: en,
					backgroundColor: en,
					outlineColor: en,
					fill: en,
					stroke: en,
					borderColor: en,
					borderTopColor: en,
					borderRightColor: en,
					borderBottomColor: en,
					borderLeftColor: en,
					filter: ur,
					WebkitFilter: ur,
				},
				dr = (e) => cr[e];
			function fr(e, t) {
				let n = dr(e);
				return (
					n !== ur && (n = vn),
					n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
				);
			}
			const hr = (e) => /^0[^.\s]+$/.test(e);
			function pr(e) {
				return 'number' === typeof e
					? 0 === e
					: null !== e
						? 'none' === e || '0' === e || hr(e)
						: void 0;
			}
			function mr(e, t) {
				return e[t] || e.default || e;
			}
			const gr = function (e, t, n) {
				let r =
					arguments.length > 3 && void 0 !== arguments[3]
						? arguments[3]
						: {};
				return (i) => {
					const o = mr(r, e) || {},
						a = o.delay || r.delay || 0;
					let { elapsed: s = 0 } = r;
					s -= yt(a);
					const l = (function (e, t, n, r) {
							const i = or(t, n);
							let o;
							o = Array.isArray(n) ? [...n] : [null, n];
							const a = void 0 !== r.from ? r.from : e.get();
							let s;
							const l = [];
							for (let u = 0; u < o.length; u++)
								null === o[u] &&
									(o[u] = 0 === u ? a : o[u - 1]),
									pr(o[u]) && l.push(u),
									'string' === typeof o[u] &&
										'none' !== o[u] &&
										'0' !== o[u] &&
										(s = o[u]);
							if (i && l.length && s)
								for (let u = 0; u < l.length; u++)
									o[l[u]] = fr(t, s);
							return o;
						})(t, e, n, o),
						u = l[0],
						c = l[l.length - 1],
						d = or(e, u),
						f = or(e, c);
					vt(
						d === f,
						'You are trying to animate '
							.concat(e, ' from "')
							.concat(u, '" to "')
							.concat(c, '". ')
							.concat(
								u,
								' is not an animatable value - to enable this animation set ',
							)
							.concat(u, ' to a value animatable to ')
							.concat(c, ' via the `style` property.'),
					);
					let h = {
						keyframes: l,
						velocity: t.getVelocity(),
						ease: 'easeOut',
						...o,
						delay: -s,
						onUpdate: (e) => {
							t.set(e), o.onUpdate && o.onUpdate(e);
						},
						onComplete: () => {
							i(), o.onComplete && o.onComplete();
						},
					};
					if (
						((function (e) {
							let {
								when: t,
								delay: n,
								delayChildren: r,
								staggerChildren: i,
								staggerDirection: o,
								repeat: a,
								repeatType: s,
								repeatDelay: l,
								from: u,
								elapsed: c,
								...d
							} = e;
							return !!Object.keys(d).length;
						})(o) || (h = { ...h, ...ir(e, h) }),
						h.duration && (h.duration = yt(h.duration)),
						h.repeatDelay && (h.repeatDelay = yt(h.repeatDelay)),
						!d || !f || bt || !1 === o.type)
					)
						return (function (e) {
							let {
								keyframes: t,
								delay: n,
								onUpdate: r,
								onComplete: i,
							} = e;
							const o = () => (
								r && r(t[t.length - 1]),
								i && i(),
								{
									time: 0,
									speed: 1,
									duration: 0,
									play: ot,
									pause: ot,
									stop: ot,
									then: (e) => (e(), Promise.resolve()),
									cancel: ot,
									complete: ot,
								}
							);
							return n
								? qn({
										keyframes: [0, 1],
										duration: 0,
										delay: n,
										onComplete: o,
									})
								: o();
						})(h);
					if (
						t.owner &&
						t.owner.current instanceof HTMLElement &&
						!t.owner.getProps().onUpdate
					) {
						const n = er(t, e, h);
						if (n) return n;
					}
					return qn(h);
				};
			};
			function vr(e) {
				return Boolean(O(e) && e.add);
			}
			const Ar = (e) => /^\-?\d*\.?\d+$/.test(e);
			function yr(e, t) {
				-1 === e.indexOf(t) && e.push(t);
			}
			function wr(e, t) {
				const n = e.indexOf(t);
				n > -1 && e.splice(n, 1);
			}
			class br {
				constructor() {
					this.subscriptions = [];
				}
				add(e) {
					return (
						yr(this.subscriptions, e),
						() => wr(this.subscriptions, e)
					);
				}
				notify(e, t, n) {
					const r = this.subscriptions.length;
					if (r)
						if (1 === r) this.subscriptions[0](e, t, n);
						else
							for (let i = 0; i < r; i++) {
								const r = this.subscriptions[i];
								r && r(e, t, n);
							}
				}
				getSize() {
					return this.subscriptions.length;
				}
				clear() {
					this.subscriptions.length = 0;
				}
			}
			class xr {
				constructor(e) {
					var t = this;
					let n =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: {};
					var r;
					(this.version = '10.12.14'),
						(this.timeDelta = 0),
						(this.lastUpdated = 0),
						(this.canTrackVelocity = !1),
						(this.events = {}),
						(this.updateAndNotify = function (e) {
							let n =
								!(
									arguments.length > 1 &&
									void 0 !== arguments[1]
								) || arguments[1];
							(t.prev = t.current), (t.current = e);
							const { delta: r, timestamp: i } = Xe;
							t.lastUpdated !== i &&
								((t.timeDelta = r),
								(t.lastUpdated = i),
								tt.postRender(t.scheduleVelocityCheck)),
								t.prev !== t.current &&
									t.events.change &&
									t.events.change.notify(t.current),
								t.events.velocityChange &&
									t.events.velocityChange.notify(
										t.getVelocity(),
									),
								n &&
									t.events.renderRequest &&
									t.events.renderRequest.notify(t.current);
						}),
						(this.scheduleVelocityCheck = () =>
							tt.postRender(this.velocityCheck)),
						(this.velocityCheck = (e) => {
							let { timestamp: t } = e;
							t !== this.lastUpdated &&
								((this.prev = this.current),
								this.events.velocityChange &&
									this.events.velocityChange.notify(
										this.getVelocity(),
									));
						}),
						(this.hasAnimated = !1),
						(this.prev = this.current = e),
						(this.canTrackVelocity =
							((r = this.current), !isNaN(parseFloat(r)))),
						(this.owner = n.owner);
				}
				onChange(e) {
					return this.on('change', e);
				}
				on(e, t) {
					this.events[e] || (this.events[e] = new br());
					const n = this.events[e].add(t);
					return 'change' === e
						? () => {
								n(),
									tt.read(() => {
										this.events.change.getSize() ||
											this.stop();
									});
							}
						: n;
				}
				clearListeners() {
					for (const e in this.events) this.events[e].clear();
				}
				attach(e, t) {
					(this.passiveEffect = e), (this.stopPassiveEffect = t);
				}
				set(e) {
					let t =
						!(arguments.length > 1 && void 0 !== arguments[1]) ||
						arguments[1];
					t && this.passiveEffect
						? this.passiveEffect(e, this.updateAndNotify)
						: this.updateAndNotify(e, t);
				}
				setWithVelocity(e, t, n) {
					this.set(t), (this.prev = e), (this.timeDelta = n);
				}
				jump(e) {
					this.updateAndNotify(e),
						(this.prev = e),
						this.stop(),
						this.stopPassiveEffect && this.stopPassiveEffect();
				}
				get() {
					return this.current;
				}
				getPrevious() {
					return this.prev;
				}
				getVelocity() {
					return this.canTrackVelocity
						? Pn(
								parseFloat(this.current) -
									parseFloat(this.prev),
								this.timeDelta,
							)
						: 0;
				}
				start(e) {
					return (
						this.stop(),
						new Promise((t) => {
							(this.hasAnimated = !0),
								(this.animation = e(t)),
								this.events.animationStart &&
									this.events.animationStart.notify();
						}).then(() => {
							this.events.animationComplete &&
								this.events.animationComplete.notify(),
								this.clearAnimation();
						})
					);
				}
				stop() {
					this.animation &&
						(this.animation.stop(),
						this.events.animationCancel &&
							this.events.animationCancel.notify()),
						this.clearAnimation();
				}
				isAnimating() {
					return !!this.animation;
				}
				clearAnimation() {
					delete this.animation;
				}
				destroy() {
					this.clearListeners(),
						this.stop(),
						this.stopPassiveEffect && this.stopPassiveEffect();
				}
			}
			function Er(e, t) {
				return new xr(e, t);
			}
			const Cr = (e) => (t) => t.test(e),
				kr = [
					z,
					K,
					J,
					q,
					$,
					Z,
					{ test: (e) => 'auto' === e, parse: (e) => e },
				],
				Sr = (e) => kr.find(Cr(e)),
				Tr = [...kr, en, vn],
				_r = (e) => Tr.find(Cr(e));
			function Pr(e, t, n) {
				e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Er(n));
			}
			function Mr(e, t) {
				const n = mt(e, t);
				let {
					transitionEnd: r = {},
					transition: i = {},
					...o
				} = n ? e.makeTargetAnimatable(n, !1) : {};
				o = { ...o, ...r };
				for (const a in o) {
					Pr(e, a, Pe(o[a]));
				}
			}
			function Dr(e, t) {
				if (!t) return;
				return (t[e] || t.default || t).from;
			}
			function Or(e, t) {
				let { protectedKeys: n, needsAnimating: r } = e;
				const i = n.hasOwnProperty(t) && !0 !== r[t];
				return (r[t] = !1), i;
			}
			function Rr(e, t) {
				let {
						delay: n = 0,
						transitionOverride: r,
						type: i,
					} = arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: {},
					{
						transition: o = e.getDefaultTransition(),
						transitionEnd: a,
						...s
					} = e.makeTargetAnimatable(t);
				const l = e.getValue('willChange');
				r && (o = r);
				const u = [],
					c = i && e.animationState && e.animationState.getState()[i];
				for (const d in s) {
					const t = e.getValue(d),
						r = s[d];
					if (!t || void 0 === r || (c && Or(c, d))) continue;
					const i = { delay: n, elapsed: 0, ...o };
					if (window.HandoffAppearAnimations && !t.hasAnimated) {
						const n = e.getProps()[gt];
						n &&
							(i.elapsed = window.HandoffAppearAnimations(
								n,
								d,
								t,
								tt,
							));
					}
					t.start(
						gr(
							d,
							t,
							r,
							e.shouldReduceMotion && M.has(d) ? { type: !1 } : i,
						),
					);
					const a = t.animation;
					vr(l) && (l.add(d), a.then(() => l.remove(d))), u.push(a);
				}
				return (
					a &&
						Promise.all(u).then(() => {
							a && Mr(e, a);
						}),
					u
				);
			}
			function Br(e, t) {
				let n =
					arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: {};
				const r = mt(e, t, n.custom);
				let { transition: i = e.getDefaultTransition() || {} } =
					r || {};
				n.transitionOverride && (i = n.transitionOverride);
				const o = r
						? () => Promise.all(Rr(e, r, n))
						: () => Promise.resolve(),
					a =
						e.variantChildren && e.variantChildren.size
							? function () {
									let r =
										arguments.length > 0 &&
										void 0 !== arguments[0]
											? arguments[0]
											: 0;
									const {
										delayChildren: o = 0,
										staggerChildren: a,
										staggerDirection: s,
									} = i;
									return (function (e, t) {
										let n =
												arguments.length > 2 &&
												void 0 !== arguments[2]
													? arguments[2]
													: 0,
											r =
												arguments.length > 3 &&
												void 0 !== arguments[3]
													? arguments[3]
													: 0,
											i =
												arguments.length > 4 &&
												void 0 !== arguments[4]
													? arguments[4]
													: 1,
											o =
												arguments.length > 5
													? arguments[5]
													: void 0;
										const a = [],
											s =
												(e.variantChildren.size - 1) *
												r,
											l =
												1 === i
													? function () {
															return (
																(arguments.length >
																	0 &&
																void 0 !==
																	arguments[0]
																	? arguments[0]
																	: 0) * r
															);
														}
													: function () {
															return (
																s -
																(arguments.length >
																	0 &&
																void 0 !==
																	arguments[0]
																	? arguments[0]
																	: 0) *
																	r
															);
														};
										return (
											Array.from(e.variantChildren)
												.sort(Lr)
												.forEach((e, r) => {
													e.notify(
														'AnimationStart',
														t,
													),
														a.push(
															Br(e, t, {
																...o,
																delay: n + l(r),
															}).then(() =>
																e.notify(
																	'AnimationComplete',
																	t,
																),
															),
														);
												}),
											Promise.all(a)
										);
									})(e, t, o + r, a, s, n);
								}
							: () => Promise.resolve(),
					{ when: s } = i;
				if (s) {
					const [e, t] = 'beforeChildren' === s ? [o, a] : [a, o];
					return e().then(() => t());
				}
				return Promise.all([o(), a(n.delay)]);
			}
			function Lr(e, t) {
				return e.sortNodePosition(t);
			}
			const Ir = [...f].reverse(),
				Fr = f.length;
			function jr(e) {
				return (t) =>
					Promise.all(
						t.map((t) => {
							let { animation: n, options: r } = t;
							return (function (e, t) {
								let n,
									r =
										arguments.length > 2 &&
										void 0 !== arguments[2]
											? arguments[2]
											: {};
								if (
									(e.notify('AnimationStart', t),
									Array.isArray(t))
								) {
									const i = t.map((t) => Br(e, t, r));
									n = Promise.all(i);
								} else if ('string' === typeof t)
									n = Br(e, t, r);
								else {
									const i =
										'function' === typeof t
											? mt(e, t, r.custom)
											: t;
									n = Promise.all(Rr(e, i, r));
								}
								return n.then(() =>
									e.notify('AnimationComplete', t),
								);
							})(e, n, r);
						}),
					);
			}
			function Nr(e) {
				let t = jr(e);
				const n = {
					animate: Vr(!0),
					whileInView: Vr(),
					whileHover: Vr(),
					whileTap: Vr(),
					whileDrag: Vr(),
					whileFocus: Vr(),
					exit: Vr(),
				};
				let r = !0;
				const i = (t, n) => {
					const r = mt(e, n);
					if (r) {
						const { transition: e, transitionEnd: n, ...i } = r;
						t = { ...t, ...i, ...n };
					}
					return t;
				};
				function o(o, a) {
					const s = e.getProps(),
						l = e.getVariantContext(!0) || {},
						u = [],
						f = new Set();
					let h = {},
						p = 1 / 0;
					for (let t = 0; t < Fr; t++) {
						const m = Ir[t],
							g = n[m],
							v = void 0 !== s[m] ? s[m] : l[m],
							A = c(v),
							y = m === a ? g.isActive : null;
						!1 === y && (p = t);
						let w = v === l[m] && v !== s[m] && A;
						if (
							(w && r && e.manuallyAnimateOnMount && (w = !1),
							(g.protectedKeys = { ...h }),
							(!g.isActive && null === y) ||
								(!v && !g.prevProp) ||
								d(v) ||
								'boolean' === typeof v)
						)
							continue;
						const b = zr(g.prevProp, v);
						let x =
							b ||
							(m === a && g.isActive && !w && A) ||
							(t > p && A);
						const E = Array.isArray(v) ? v : [v];
						let C = E.reduce(i, {});
						!1 === y && (C = {});
						const { prevResolvedValues: k = {} } = g,
							S = { ...k, ...C },
							T = (e) => {
								(x = !0),
									f.delete(e),
									(g.needsAnimating[e] = !0);
							};
						for (const e in S) {
							const t = C[e],
								n = k[e];
							h.hasOwnProperty(e) ||
								(t !== n
									? Te(t) && Te(n)
										? !pt(t, n) || b
											? T(e)
											: (g.protectedKeys[e] = !0)
										: void 0 !== t
											? T(e)
											: f.add(e)
									: void 0 !== t && f.has(e)
										? T(e)
										: (g.protectedKeys[e] = !0));
						}
						(g.prevProp = v),
							(g.prevResolvedValues = C),
							g.isActive && (h = { ...h, ...C }),
							r && e.blockInitialAnimation && (x = !1),
							x &&
								!w &&
								u.push(
									...E.map((e) => ({
										animation: e,
										options: { type: m, ...o },
									})),
								);
					}
					if (f.size) {
						const t = {};
						f.forEach((n) => {
							const r = e.getBaseTarget(n);
							void 0 !== r && (t[n] = r);
						}),
							u.push({ animation: t });
					}
					let m = Boolean(u.length);
					return (
						r &&
							!1 === s.initial &&
							!e.manuallyAnimateOnMount &&
							(m = !1),
						(r = !1),
						m ? t(u) : Promise.resolve()
					);
				}
				return {
					animateChanges: o,
					setActive: function (t, r, i) {
						var a;
						if (n[t].isActive === r) return Promise.resolve();
						null === (a = e.variantChildren) ||
							void 0 === a ||
							a.forEach((e) => {
								var n;
								return null === (n = e.animationState) ||
									void 0 === n
									? void 0
									: n.setActive(t, r);
							}),
							(n[t].isActive = r);
						const s = o(i, t);
						for (const e in n) n[e].protectedKeys = {};
						return s;
					},
					setAnimateFunction: function (n) {
						t = n(e);
					},
					getState: () => n,
				};
			}
			function zr(e, t) {
				return 'string' === typeof t
					? t !== e
					: !!Array.isArray(t) && !pt(t, e);
			}
			function Vr() {
				return {
					isActive:
						arguments.length > 0 &&
						void 0 !== arguments[0] &&
						arguments[0],
					protectedKeys: {},
					needsAnimating: {},
					prevResolvedValues: {},
				};
			}
			let Ur = 0;
			const Yr = {
					animation: {
						Feature: class extends We {
							constructor(e) {
								super(e),
									e.animationState ||
										(e.animationState = Nr(e));
							}
							updateAnimationControlsSubscription() {
								const { animate: e } = this.node.getProps();
								this.unmount(),
									d(e) &&
										(this.unmount = e.subscribe(this.node));
							}
							mount() {
								this.updateAnimationControlsSubscription();
							}
							update() {
								const { animate: e } = this.node.getProps(),
									{ animate: t } = this.node.prevProps || {};
								e !== t &&
									this.updateAnimationControlsSubscription();
							}
							unmount() {}
						},
					},
					exit: {
						Feature: class extends We {
							constructor() {
								super(...arguments), (this.id = Ur++);
							}
							update() {
								if (!this.node.presenceContext) return;
								const {
										isPresent: e,
										onExitComplete: t,
										custom: n,
									} = this.node.presenceContext,
									{ isPresent: r } =
										this.node.prevPresenceContext || {};
								if (!this.node.animationState || e === r)
									return;
								const i = this.node.animationState.setActive(
									'exit',
									!e,
									{
										custom:
											null !== n && void 0 !== n
												? n
												: this.node.getProps().custom,
									},
								);
								t && !e && i.then(() => t(this.id));
							}
							mount() {
								const { register: e } =
									this.node.presenceContext || {};
								e && (this.unmount = e(this.id));
							}
							unmount() {}
						},
					},
				},
				Qr = (e, t) => Math.abs(e - t);
			class Hr {
				constructor(e, t) {
					let { transformPagePoint: n } =
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: {};
					if (
						((this.startEvent = null),
						(this.lastMoveEvent = null),
						(this.lastMoveEventInfo = null),
						(this.handlers = {}),
						(this.updatePoint = () => {
							if (!this.lastMoveEvent || !this.lastMoveEventInfo)
								return;
							const e = Xr(this.lastMoveEventInfo, this.history),
								t = null !== this.startEvent,
								n =
									(function (e, t) {
										const n = Qr(e.x, t.x),
											r = Qr(e.y, t.y);
										return Math.sqrt(n ** 2 + r ** 2);
									})(e.offset, { x: 0, y: 0 }) >= 3;
							if (!t && !n) return;
							const { point: r } = e,
								{ timestamp: i } = Xe;
							this.history.push({ ...r, timestamp: i });
							const { onStart: o, onMove: a } = this.handlers;
							t ||
								(o && o(this.lastMoveEvent, e),
								(this.startEvent = this.lastMoveEvent)),
								a && a(this.lastMoveEvent, e);
						}),
						(this.handlePointerMove = (e, t) => {
							(this.lastMoveEvent = e),
								(this.lastMoveEventInfo = Gr(
									t,
									this.transformPagePoint,
								)),
								tt.update(this.updatePoint, !0);
						}),
						(this.handlePointerUp = (e, t) => {
							if (
								(this.end(),
								!this.lastMoveEvent || !this.lastMoveEventInfo)
							)
								return;
							const { onEnd: n, onSessionEnd: r } = this.handlers,
								i = Xr(
									'pointercancel' === e.type
										? this.lastMoveEventInfo
										: Gr(t, this.transformPagePoint),
									this.history,
								);
							this.startEvent && n && n(e, i), r && r(e, i);
						}),
						!Ie(e))
					)
						return;
					(this.handlers = t), (this.transformPagePoint = n);
					const r = Gr(Fe(e), this.transformPagePoint),
						{ point: i } = r,
						{ timestamp: o } = Xe;
					this.history = [{ ...i, timestamp: o }];
					const { onSessionStart: a } = t;
					a && a(e, Xr(r, this.history)),
						(this.removeListeners = Ve(
							Ne(window, 'pointermove', this.handlePointerMove),
							Ne(window, 'pointerup', this.handlePointerUp),
							Ne(window, 'pointercancel', this.handlePointerUp),
						));
				}
				updateHandlers(e) {
					this.handlers = e;
				}
				end() {
					this.removeListeners && this.removeListeners(),
						nt(this.updatePoint);
				}
			}
			function Gr(e, t) {
				return t ? { point: t(e.point) } : e;
			}
			function Wr(e, t) {
				return { x: e.x - t.x, y: e.y - t.y };
			}
			function Xr(e, t) {
				let { point: n } = e;
				return {
					point: n,
					delta: Wr(n, Jr(t)),
					offset: Wr(n, qr(t)),
					velocity: Kr(t, 0.1),
				};
			}
			function qr(e) {
				return e[0];
			}
			function Jr(e) {
				return e[e.length - 1];
			}
			function Kr(e, t) {
				if (e.length < 2) return { x: 0, y: 0 };
				let n = e.length - 1,
					r = null;
				const i = Jr(e);
				for (
					;
					n >= 0 &&
					((r = e[n]), !(i.timestamp - r.timestamp > yt(t)));

				)
					n--;
				if (!r) return { x: 0, y: 0 };
				const o = wt(i.timestamp - r.timestamp);
				if (0 === o) return { x: 0, y: 0 };
				const a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
				return (
					a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
				);
			}
			function Zr(e) {
				return e.max - e.min;
			}
			function $r(e) {
				let t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: 0,
					n =
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: 0.01;
				return Math.abs(e - t) <= n;
			}
			function ei(e, t, n) {
				let r =
					arguments.length > 3 && void 0 !== arguments[3]
						? arguments[3]
						: 0.5;
				(e.origin = r),
					(e.originPoint = tn(t.min, t.max, e.origin)),
					(e.scale = Zr(n) / Zr(t)),
					($r(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
					(e.translate = tn(n.min, n.max, e.origin) - e.originPoint),
					($r(e.translate) || isNaN(e.translate)) &&
						(e.translate = 0);
			}
			function ti(e, t, n, r) {
				ei(e.x, t.x, n.x, r ? r.originX : void 0),
					ei(e.y, t.y, n.y, r ? r.originY : void 0);
			}
			function ni(e, t, n) {
				(e.min = n.min + t.min), (e.max = e.min + Zr(t));
			}
			function ri(e, t, n) {
				(e.min = t.min - n.min), (e.max = e.min + Zr(t));
			}
			function ii(e, t, n) {
				ri(e.x, t.x, n.x), ri(e.y, t.y, n.y);
			}
			function oi(e, t, n) {
				return {
					min: void 0 !== t ? e.min + t : void 0,
					max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
				};
			}
			function ai(e, t) {
				let n = t.min - e.min,
					r = t.max - e.max;
				return (
					t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
					{ min: n, max: r }
				);
			}
			const si = 0.35;
			function li(e, t, n) {
				return { min: ui(e, t), max: ui(e, n) };
			}
			function ui(e, t) {
				return 'number' === typeof e ? e : e[t] || 0;
			}
			const ci = () => ({
					x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
					y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
				}),
				di = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
			function fi(e) {
				return [e('x'), e('y')];
			}
			function hi(e) {
				let { top: t, left: n, right: r, bottom: i } = e;
				return { x: { min: n, max: r }, y: { min: t, max: i } };
			}
			function pi(e) {
				return void 0 === e || 1 === e;
			}
			function mi(e) {
				let { scale: t, scaleX: n, scaleY: r } = e;
				return !pi(t) || !pi(n) || !pi(r);
			}
			function gi(e) {
				return (
					mi(e) || vi(e) || e.z || e.rotate || e.rotateX || e.rotateY
				);
			}
			function vi(e) {
				return Ai(e.x) || Ai(e.y);
			}
			function Ai(e) {
				return e && '0%' !== e;
			}
			function yi(e, t, n) {
				return n + t * (e - n);
			}
			function wi(e, t, n, r, i) {
				return void 0 !== i && (e = yi(e, i, r)), yi(e, n, r) + t;
			}
			function bi(e) {
				let t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: 0,
					n =
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: 1,
					r = arguments.length > 3 ? arguments[3] : void 0,
					i = arguments.length > 4 ? arguments[4] : void 0;
				(e.min = wi(e.min, t, n, r, i)),
					(e.max = wi(e.max, t, n, r, i));
			}
			function xi(e, t) {
				let { x: n, y: r } = t;
				bi(e.x, n.translate, n.scale, n.originPoint),
					bi(e.y, r.translate, r.scale, r.originPoint);
			}
			function Ei(e) {
				return Number.isInteger(e) ||
					e > 1.0000000000001 ||
					e < 0.999999999999
					? e
					: 1;
			}
			function Ci(e, t) {
				(e.min = e.min + t), (e.max = e.max + t);
			}
			function ki(e, t, n) {
				let [r, i, o] = n;
				const a = void 0 !== t[o] ? t[o] : 0.5,
					s = tn(e.min, e.max, a);
				bi(e, t[r], t[i], s, t.scale);
			}
			const Si = ['x', 'scaleX', 'originX'],
				Ti = ['y', 'scaleY', 'originY'];
			function _i(e, t) {
				ki(e.x, t, Si), ki(e.y, t, Ti);
			}
			function Pi(e, t) {
				return hi(
					(function (e, t) {
						if (!t) return e;
						const n = t({ x: e.left, y: e.top }),
							r = t({ x: e.right, y: e.bottom });
						return { top: n.y, left: n.x, bottom: r.y, right: r.x };
					})(e.getBoundingClientRect(), t),
				);
			}
			const Mi = new WeakMap();
			class Di {
				constructor(e) {
					(this.openGlobalLock = null),
						(this.isDragging = !1),
						(this.currentDirection = null),
						(this.originPoint = { x: 0, y: 0 }),
						(this.constraints = !1),
						(this.hasMutatedConstraints = !1),
						(this.elastic = di()),
						(this.visualElement = e);
				}
				start(e) {
					let { snapToCursor: t = !1 } =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: {};
					const { presenceContext: n } = this.visualElement;
					if (n && !1 === n.isPresent) return;
					this.panSession = new Hr(
						e,
						{
							onSessionStart: (e) => {
								this.stopAnimation(),
									t && this.snapToCursor(Fe(e, 'page').point);
							},
							onStart: (e, t) => {
								const {
									drag: n,
									dragPropagation: r,
									onDragStart: i,
								} = this.getProps();
								if (
									n &&
									!r &&
									(this.openGlobalLock &&
										this.openGlobalLock(),
									(this.openGlobalLock = He(n)),
									!this.openGlobalLock)
								)
									return;
								(this.isDragging = !0),
									(this.currentDirection = null),
									this.resolveConstraints(),
									this.visualElement.projection &&
										((this.visualElement.projection.isAnimationBlocked =
											!0),
										(this.visualElement.projection.target =
											void 0)),
									fi((e) => {
										let t =
											this.getAxisMotionValue(e).get() ||
											0;
										if (J.test(t)) {
											const { projection: n } =
												this.visualElement;
											if (n && n.layout) {
												const r = n.layout.layoutBox[e];
												if (r) {
													t =
														Zr(r) *
														(parseFloat(t) / 100);
												}
											}
										}
										this.originPoint[e] = t;
									}),
									i && tt.update(() => i(e, t), !1, !0);
								const { animationState: o } =
									this.visualElement;
								o && o.setActive('whileDrag', !0);
							},
							onMove: (e, t) => {
								const {
									dragPropagation: n,
									dragDirectionLock: r,
									onDirectionLock: i,
									onDrag: o,
								} = this.getProps();
								if (!n && !this.openGlobalLock) return;
								const { offset: a } = t;
								if (r && null === this.currentDirection)
									return (
										(this.currentDirection = (function (e) {
											let t =
													arguments.length > 1 &&
													void 0 !== arguments[1]
														? arguments[1]
														: 10,
												n = null;
											Math.abs(e.y) > t
												? (n = 'y')
												: Math.abs(e.x) > t &&
													(n = 'x');
											return n;
										})(a)),
										void (
											null !== this.currentDirection &&
											i &&
											i(this.currentDirection)
										)
									);
								this.updateAxis('x', t.point, a),
									this.updateAxis('y', t.point, a),
									this.visualElement.render(),
									o && o(e, t);
							},
							onSessionEnd: (e, t) => this.stop(e, t),
						},
						{
							transformPagePoint:
								this.visualElement.getTransformPagePoint(),
						},
					);
				}
				stop(e, t) {
					const n = this.isDragging;
					if ((this.cancel(), !n)) return;
					const { velocity: r } = t;
					this.startAnimation(r);
					const { onDragEnd: i } = this.getProps();
					i && tt.update(() => i(e, t));
				}
				cancel() {
					this.isDragging = !1;
					const { projection: e, animationState: t } =
						this.visualElement;
					e && (e.isAnimationBlocked = !1),
						this.panSession && this.panSession.end(),
						(this.panSession = void 0);
					const { dragPropagation: n } = this.getProps();
					!n &&
						this.openGlobalLock &&
						(this.openGlobalLock(), (this.openGlobalLock = null)),
						t && t.setActive('whileDrag', !1);
				}
				updateAxis(e, t, n) {
					const { drag: r } = this.getProps();
					if (!n || !Oi(e, r, this.currentDirection)) return;
					const i = this.getAxisMotionValue(e);
					let o = this.originPoint[e] + n[e];
					this.constraints &&
						this.constraints[e] &&
						(o = (function (e, t, n) {
							let { min: r, max: i } = t;
							return (
								void 0 !== r && e < r
									? (e = n ? tn(r, e, n.min) : Math.max(e, r))
									: void 0 !== i &&
										e > i &&
										(e = n
											? tn(i, e, n.max)
											: Math.min(e, i)),
								e
							);
						})(o, this.constraints[e], this.elastic[e])),
						i.set(o);
				}
				resolveConstraints() {
					const { dragConstraints: e, dragElastic: t } =
							this.getProps(),
						{ layout: n } = this.visualElement.projection || {},
						r = this.constraints;
					e && u(e)
						? this.constraints ||
							(this.constraints = this.resolveRefConstraints())
						: (console.log(n),
							(this.constraints =
								!(!e || !n) &&
								(function (e, t) {
									let {
										top: n,
										left: r,
										bottom: i,
										right: o,
									} = t;
									return {
										x: oi(e.x, r, o),
										y: oi(e.y, n, i),
									};
								})(n.layoutBox, e))),
						(this.elastic = (function () {
							let e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: si;
							return (
								!1 === e ? (e = 0) : !0 === e && (e = si),
								{
									x: li(e, 'left', 'right'),
									y: li(e, 'top', 'bottom'),
								}
							);
						})(t)),
						r !== this.constraints &&
							n &&
							this.constraints &&
							!this.hasMutatedConstraints &&
							fi((e) => {
								this.getAxisMotionValue(e) &&
									(this.constraints[e] = (function (e, t) {
										const n = {};
										return (
											void 0 !== t.min &&
												(n.min = t.min - e.min),
											void 0 !== t.max &&
												(n.max = t.max - e.min),
											n
										);
									})(n.layoutBox[e], this.constraints[e]));
							});
				}
				resolveRefConstraints() {
					const { dragConstraints: e, onMeasureDragConstraints: t } =
						this.getProps();
					if (!e || !u(e)) return !1;
					const n = e.current;
					At(
						null !== n,
						"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
					);
					const { projection: r } = this.visualElement;
					if (!r || !r.layout) return !1;
					const i = (function (e, t, n) {
						const r = Pi(e, n),
							{ scroll: i } = t;
						return (
							i && (Ci(r.x, i.offset.x), Ci(r.y, i.offset.y)), r
						);
					})(n, r.root, this.visualElement.getTransformPagePoint());
					let o = (function (e, t) {
						return { x: ai(e.x, t.x), y: ai(e.y, t.y) };
					})(r.layout.layoutBox, i);
					if (t) {
						const e = t(
							(function (e) {
								let { x: t, y: n } = e;
								return {
									top: n.min,
									right: t.max,
									bottom: n.max,
									left: t.min,
								};
							})(o),
						);
						(this.hasMutatedConstraints = !!e), e && (o = hi(e));
					}
					return o;
				}
				startAnimation(e) {
					const {
							drag: t,
							dragMomentum: n,
							dragElastic: r,
							dragTransition: i,
							dragSnapToOrigin: o,
							onDragTransitionEnd: a,
						} = this.getProps(),
						s = this.constraints || {},
						l = fi((a) => {
							if (!Oi(a, t, this.currentDirection)) return;
							let l = (s && s[a]) || {};
							o && (l = { min: 0, max: 0 });
							const u = r ? 200 : 1e6,
								c = r ? 40 : 1e7,
								d = {
									type: 'inertia',
									velocity: n ? e[a] : 0,
									bounceStiffness: u,
									bounceDamping: c,
									timeConstant: 750,
									restDelta: 1,
									restSpeed: 10,
									...i,
									...l,
								};
							return this.startAxisValueAnimation(a, d);
						});
					return Promise.all(l).then(a);
				}
				startAxisValueAnimation(e, t) {
					const n = this.getAxisMotionValue(e);
					return n.start(gr(e, n, 0, t));
				}
				stopAnimation() {
					fi((e) => this.getAxisMotionValue(e).stop());
				}
				getAxisMotionValue(e) {
					const t = '_drag' + e.toUpperCase(),
						n = this.visualElement.getProps(),
						r = n[t];
					return (
						r ||
						this.visualElement.getValue(
							e,
							(n.initial ? n.initial[e] : void 0) || 0,
						)
					);
				}
				snapToCursor(e) {
					fi((t) => {
						const { drag: n } = this.getProps();
						if (!Oi(t, n, this.currentDirection)) return;
						const { projection: r } = this.visualElement,
							i = this.getAxisMotionValue(t);
						if (r && r.layout) {
							const { min: n, max: o } = r.layout.layoutBox[t];
							i.set(e[t] - tn(n, o, 0.5));
						}
					});
				}
				scalePositionWithinConstraints() {
					if (!this.visualElement.current) return;
					const { drag: e, dragConstraints: t } = this.getProps(),
						{ projection: n } = this.visualElement;
					if (!u(t) || !n || !this.constraints) return;
					this.stopAnimation();
					const r = { x: 0, y: 0 };
					fi((e) => {
						const t = this.getAxisMotionValue(e);
						if (t) {
							const n = t.get();
							r[e] = (function (e, t) {
								let n = 0.5;
								const r = Zr(e),
									i = Zr(t);
								return (
									i > r
										? (n = En(t.min, t.max - r, e.min))
										: r > i &&
											(n = En(e.min, e.max - i, t.min)),
									N(0, 1, n)
								);
							})({ min: n, max: n }, this.constraints[e]);
						}
					});
					const { transformTemplate: i } =
						this.visualElement.getProps();
					(this.visualElement.current.style.transform = i
						? i({}, '')
						: 'none'),
						n.root && n.root.updateScroll(),
						n.updateLayout(),
						this.resolveConstraints(),
						fi((t) => {
							if (!Oi(t, e, null)) return;
							const n = this.getAxisMotionValue(t),
								{ min: i, max: o } = this.constraints[t];
							n.set(tn(i, o, r[t]));
						});
				}
				addListeners() {
					if (!this.visualElement.current) return;
					Mi.set(this.visualElement, this);
					const e = Ne(
							this.visualElement.current,
							'pointerdown',
							(e) => {
								const { drag: t, dragListener: n = !0 } =
									this.getProps();
								t && n && this.start(e);
							},
						),
						t = () => {
							const { dragConstraints: e } = this.getProps();
							u(e) &&
								(this.constraints =
									this.resolveRefConstraints());
						},
						{ projection: n } = this.visualElement,
						r = n.addEventListener('measure', t);
					n &&
						!n.layout &&
						(n.root && n.root.updateScroll(), n.updateLayout()),
						t();
					const i = Le(window, 'resize', () =>
							this.scalePositionWithinConstraints(),
						),
						o = n.addEventListener('didUpdate', (e) => {
							let { delta: t, hasLayoutChanged: n } = e;
							this.isDragging &&
								n &&
								(fi((e) => {
									const n = this.getAxisMotionValue(e);
									n &&
										((this.originPoint[e] +=
											t[e].translate),
										n.set(n.get() + t[e].translate));
								}),
								this.visualElement.render());
						});
					return () => {
						i(), e(), r(), o && o();
					};
				}
				getProps() {
					const e = this.visualElement.getProps(),
						{
							drag: t = !1,
							dragDirectionLock: n = !1,
							dragPropagation: r = !1,
							dragConstraints: i = !1,
							dragElastic: o = si,
							dragMomentum: a = !0,
						} = e;
					return {
						...e,
						drag: t,
						dragDirectionLock: n,
						dragPropagation: r,
						dragConstraints: i,
						dragElastic: o,
						dragMomentum: a,
					};
				}
			}
			function Oi(e, t, n) {
				return (!0 === t || t === e) && (null === n || n === e);
			}
			const Ri = (e) => (t, n) => {
				e && tt.update(() => e(t, n));
			};
			const Bi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
			function Li(e, t) {
				return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
			}
			const Ii = {
					correct: (e, t) => {
						if (!t.target) return e;
						if ('string' === typeof e) {
							if (!K.test(e)) return e;
							e = parseFloat(e);
						}
						const n = Li(e, t.target.x),
							r = Li(e, t.target.y);
						return ''.concat(n, '% ').concat(r, '%');
					},
				},
				Fi = {
					correct: (e, t) => {
						let { treeScale: n, projectionDelta: r } = t;
						const i = e,
							o = vn.parse(e);
						if (o.length > 5) return i;
						const a = vn.createTransformer(e),
							s = 'number' !== typeof o[0] ? 1 : 0,
							l = r.x.scale * n.x,
							u = r.y.scale * n.y;
						(o[0 + s] /= l), (o[1 + s] /= u);
						const c = tn(l, u, 0.5);
						return (
							'number' === typeof o[2 + s] && (o[2 + s] /= c),
							'number' === typeof o[3 + s] && (o[3 + s] /= c),
							a(o)
						);
					},
				};
			class ji extends e.Component {
				componentDidMount() {
					const {
							visualElement: e,
							layoutGroup: t,
							switchLayoutGroup: n,
							layoutId: r,
						} = this.props,
						{ projection: i } = e;
					var o;
					(o = zi),
						Object.assign(_, o),
						i &&
							(t.group && t.group.add(i),
							n && n.register && r && n.register(i),
							i.root.didUpdate(),
							i.addEventListener('animationComplete', () => {
								this.safeToRemove();
							}),
							i.setOptions({
								...i.options,
								onExitComplete: () => this.safeToRemove(),
							})),
						(Bi.hasEverUpdated = !0);
				}
				getSnapshotBeforeUpdate(e) {
					const {
							layoutDependency: t,
							visualElement: n,
							drag: r,
							isPresent: i,
						} = this.props,
						o = n.projection;
					return o
						? ((o.isPresent = i),
							r || e.layoutDependency !== t || void 0 === t
								? o.willUpdate()
								: this.safeToRemove(),
							e.isPresent !== i &&
								(i
									? o.promote()
									: o.relegate() ||
										tt.postRender(() => {
											const e = o.getStack();
											(e && e.members.length) ||
												this.safeToRemove();
										})),
							null)
						: null;
				}
				componentDidUpdate() {
					const { projection: e } = this.props.visualElement;
					e &&
						(e.root.didUpdate(),
						queueMicrotask(() => {
							!e.currentAnimation &&
								e.isLead() &&
								this.safeToRemove();
						}));
				}
				componentWillUnmount() {
					const {
							visualElement: e,
							layoutGroup: t,
							switchLayoutGroup: n,
						} = this.props,
						{ projection: r } = e;
					r &&
						(r.scheduleCheckAfterUnmount(),
						t && t.group && t.group.remove(r),
						n && n.deregister && n.deregister(r));
				}
				safeToRemove() {
					const { safeToRemove: e } = this.props;
					e && e();
				}
				render() {
					return null;
				}
			}
			function Ni(t) {
				const [n, r] = (function () {
						const t = (0, e.useContext)(o);
						if (null === t) return [!0, null];
						const {
								isPresent: n,
								onExitComplete: r,
								register: i,
							} = t,
							a = (0, e.useId)();
						return (
							(0, e.useEffect)(() => i(a), []),
							!n && r ? [!1, () => r && r(a)] : [!0]
						);
					})(),
					i = (0, e.useContext)(w);
				return e.createElement(ji, {
					...t,
					layoutGroup: i,
					switchLayoutGroup: (0, e.useContext)(b),
					isPresent: n,
					safeToRemove: r,
				});
			}
			const zi = {
					borderRadius: {
						...Ii,
						applyTo: [
							'borderTopLeftRadius',
							'borderTopRightRadius',
							'borderBottomLeftRadius',
							'borderBottomRightRadius',
						],
					},
					borderTopLeftRadius: Ii,
					borderTopRightRadius: Ii,
					borderBottomLeftRadius: Ii,
					borderBottomRightRadius: Ii,
					boxShadow: Fi,
				},
				Vi = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
				Ui = Vi.length,
				Yi = (e) => ('string' === typeof e ? parseFloat(e) : e),
				Qi = (e) => 'number' === typeof e || K.test(e);
			function Hi(e, t) {
				return void 0 !== e[t] ? e[t] : e.borderRadius;
			}
			const Gi = Xi(0, 0.5, Vt),
				Wi = Xi(0.5, 0.95, ot);
			function Xi(e, t, n) {
				return (r) => (r < e ? 0 : r > t ? 1 : n(En(e, t, r)));
			}
			function qi(e, t) {
				(e.min = t.min), (e.max = t.max);
			}
			function Ji(e, t) {
				qi(e.x, t.x), qi(e.y, t.y);
			}
			function Ki(e, t, n, r, i) {
				return (
					(e = yi((e -= t), 1 / n, r)),
					void 0 !== i && (e = yi(e, 1 / i, r)),
					e
				);
			}
			function Zi(e, t, n, r, i) {
				let [o, a, s] = n;
				!(function (e) {
					let t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: 0,
						n =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: 1,
						r =
							arguments.length > 3 && void 0 !== arguments[3]
								? arguments[3]
								: 0.5,
						i = arguments.length > 4 ? arguments[4] : void 0,
						o =
							arguments.length > 5 && void 0 !== arguments[5]
								? arguments[5]
								: e,
						a =
							arguments.length > 6 && void 0 !== arguments[6]
								? arguments[6]
								: e;
					J.test(t) &&
						((t = parseFloat(t)),
						(t = tn(a.min, a.max, t / 100) - a.min));
					if ('number' !== typeof t) return;
					let s = tn(o.min, o.max, r);
					e === o && (s -= t),
						(e.min = Ki(e.min, t, n, s, i)),
						(e.max = Ki(e.max, t, n, s, i));
				})(e, t[o], t[a], t[s], t.scale, r, i);
			}
			const $i = ['x', 'scaleX', 'originX'],
				eo = ['y', 'scaleY', 'originY'];
			function to(e, t, n, r) {
				Zi(e.x, t, $i, n ? n.x : void 0, r ? r.x : void 0),
					Zi(e.y, t, eo, n ? n.y : void 0, r ? r.y : void 0);
			}
			function no(e) {
				return 0 === e.translate && 1 === e.scale;
			}
			function ro(e) {
				return no(e.x) && no(e.y);
			}
			function io(e, t) {
				return (
					e.x.min === t.x.min &&
					e.x.max === t.x.max &&
					e.y.min === t.y.min &&
					e.y.max === t.y.max
				);
			}
			function oo(e) {
				return Zr(e.x) / Zr(e.y);
			}
			class ao {
				constructor() {
					this.members = [];
				}
				add(e) {
					yr(this.members, e), e.scheduleRender();
				}
				remove(e) {
					if (
						(wr(this.members, e),
						e === this.prevLead && (this.prevLead = void 0),
						e === this.lead)
					) {
						const e = this.members[this.members.length - 1];
						e && this.promote(e);
					}
				}
				relegate(e) {
					const t = this.members.findIndex((t) => e === t);
					if (0 === t) return !1;
					let n;
					for (let r = t; r >= 0; r--) {
						const e = this.members[r];
						if (!1 !== e.isPresent) {
							n = e;
							break;
						}
					}
					return !!n && (this.promote(n), !0);
				}
				promote(e, t) {
					const n = this.lead;
					if (
						e !== n &&
						((this.prevLead = n), (this.lead = e), e.show(), n)
					) {
						n.instance && n.scheduleRender(),
							e.scheduleRender(),
							(e.resumeFrom = n),
							t && (e.resumeFrom.preserveOpacity = !0),
							n.snapshot &&
								((e.snapshot = n.snapshot),
								(e.snapshot.latestValues =
									n.animationValues || n.latestValues)),
							e.root &&
								e.root.isUpdating &&
								(e.isLayoutDirty = !0);
						const { crossfade: r } = e.options;
						!1 === r && n.hide();
					}
				}
				exitAnimationComplete() {
					this.members.forEach((e) => {
						const { options: t, resumingFrom: n } = e;
						t.onExitComplete && t.onExitComplete(),
							n &&
								n.options.onExitComplete &&
								n.options.onExitComplete();
					});
				}
				scheduleRender() {
					this.members.forEach((e) => {
						e.instance && e.scheduleRender(!1);
					});
				}
				removeLeadSnapshot() {
					this.lead &&
						this.lead.snapshot &&
						(this.lead.snapshot = void 0);
				}
			}
			function so(e, t, n) {
				let r = '';
				const i = e.x.translate / t.x,
					o = e.y.translate / t.y;
				if (
					((i || o) &&
						(r = 'translate3d('
							.concat(i, 'px, ')
							.concat(o, 'px, 0) ')),
					(1 === t.x && 1 === t.y) ||
						(r += 'scale('
							.concat(1 / t.x, ', ')
							.concat(1 / t.y, ') ')),
					n)
				) {
					const { rotate: e, rotateX: t, rotateY: i } = n;
					e && (r += 'rotate('.concat(e, 'deg) ')),
						t && (r += 'rotateX('.concat(t, 'deg) ')),
						i && (r += 'rotateY('.concat(i, 'deg) '));
				}
				const a = e.x.scale * t.x,
					s = e.y.scale * t.y;
				return (
					(1 === a && 1 === s) ||
						(r += 'scale('.concat(a, ', ').concat(s, ')')),
					r || 'none'
				);
			}
			const lo = (e, t) => e.depth - t.depth;
			class uo {
				constructor() {
					(this.children = []), (this.isDirty = !1);
				}
				add(e) {
					yr(this.children, e), (this.isDirty = !0);
				}
				remove(e) {
					wr(this.children, e), (this.isDirty = !0);
				}
				forEach(e) {
					this.isDirty && this.children.sort(lo),
						(this.isDirty = !1),
						this.children.forEach(e);
				}
			}
			const co = ['', 'X', 'Y', 'Z'],
				fo = 1e3;
			let ho = 0;
			const po = {
				type: 'projectionFrame',
				totalNodes: 0,
				resolvedTargetDeltas: 0,
				recalculatedProjection: 0,
			};
			function mo(e) {
				let {
					attachResizeListener: t,
					defaultParent: n,
					measureScroll: r,
					checkIsScrollRoot: i,
					resetTransform: o,
				} = e;
				return class {
					constructor() {
						let e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: {},
							t =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: null === n || void 0 === n
										? void 0
										: n();
						(this.id = ho++),
							(this.animationId = 0),
							(this.children = new Set()),
							(this.options = {}),
							(this.isTreeAnimating = !1),
							(this.isAnimationBlocked = !1),
							(this.isLayoutDirty = !1),
							(this.isProjectionDirty = !1),
							(this.isSharedProjectionDirty = !1),
							(this.isTransformDirty = !1),
							(this.updateManuallyBlocked = !1),
							(this.updateBlockedByResize = !1),
							(this.isUpdating = !1),
							(this.isSVG = !1),
							(this.needsReset = !1),
							(this.shouldResetTransform = !1),
							(this.treeScale = { x: 1, y: 1 }),
							(this.eventHandlers = new Map()),
							(this.hasTreeAnimated = !1),
							(this.updateScheduled = !1),
							(this.checkUpdateFailed = () => {
								this.isUpdating &&
									((this.isUpdating = !1),
									this.clearAllSnapshots());
							}),
							(this.updateProjection = () => {
								var e;
								(po.totalNodes =
									po.resolvedTargetDeltas =
									po.recalculatedProjection =
										0),
									this.nodes.forEach(Ao),
									this.nodes.forEach(ko),
									this.nodes.forEach(So),
									this.nodes.forEach(yo),
									(e = po),
									window.MotionDebug &&
										window.MotionDebug.record(e);
							}),
							(this.hasProjected = !1),
							(this.isVisible = !0),
							(this.animationProgress = 0),
							(this.sharedNodes = new Map()),
							(this.latestValues = e),
							(this.root = t ? t.root || t : this),
							(this.path = t ? [...t.path, t] : []),
							(this.parent = t),
							(this.depth = t ? t.depth + 1 : 0);
						for (let n = 0; n < this.path.length; n++)
							this.path[n].shouldResetTransform = !0;
						this.root === this && (this.nodes = new uo());
					}
					addEventListener(e, t) {
						return (
							this.eventHandlers.has(e) ||
								this.eventHandlers.set(e, new br()),
							this.eventHandlers.get(e).add(t)
						);
					}
					notifyListeners(e) {
						const t = this.eventHandlers.get(e);
						for (
							var n = arguments.length,
								r = new Array(n > 1 ? n - 1 : 0),
								i = 1;
							i < n;
							i++
						)
							r[i - 1] = arguments[i];
						t && t.notify(...r);
					}
					hasListeners(e) {
						return this.eventHandlers.has(e);
					}
					mount(e) {
						let n =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: this.root.hasTreeAnimated;
						if (this.instance) return;
						var r;
						(this.isSVG =
							(r = e) instanceof SVGElement &&
							'svg' !== r.tagName),
							(this.instance = e);
						const {
							layoutId: i,
							layout: o,
							visualElement: a,
						} = this.options;
						if (
							(a && !a.current && a.mount(e),
							this.root.nodes.add(this),
							this.parent && this.parent.children.add(this),
							n && (o || i) && (this.isLayoutDirty = !0),
							t)
						) {
							let n;
							const r = () =>
								(this.root.updateBlockedByResize = !1);
							t(e, () => {
								(this.root.updateBlockedByResize = !0),
									n && n(),
									(n = (function (e, t) {
										const n = performance.now(),
											r = (i) => {
												let { timestamp: o } = i;
												const a = o - n;
												a >= t && (nt(r), e(a - t));
											};
										return tt.read(r, !0), () => nt(r);
									})(r, 250)),
									Bi.hasAnimatedSinceResize &&
										((Bi.hasAnimatedSinceResize = !1),
										this.nodes.forEach(Co));
							});
						}
						i && this.root.registerSharedNode(i, this),
							!1 !== this.options.animate &&
								a &&
								(i || o) &&
								this.addEventListener('didUpdate', (e) => {
									let {
										delta: t,
										hasLayoutChanged: n,
										hasRelativeTargetChanged: r,
										layout: i,
									} = e;
									if (this.isTreeAnimationBlocked())
										return (
											(this.target = void 0),
											void (this.relativeTarget = void 0)
										);
									const o =
											this.options.transition ||
											a.getDefaultTransition() ||
											Oo,
										{
											onLayoutAnimationStart: s,
											onLayoutAnimationComplete: l,
										} = a.getProps(),
										u =
											!this.targetLayout ||
											!io(this.targetLayout, i) ||
											r,
										c = !n && r;
									if (
										this.options.layoutRoot ||
										(this.resumeFrom &&
											this.resumeFrom.instance) ||
										c ||
										(n && (u || !this.currentAnimation))
									) {
										this.resumeFrom &&
											((this.resumingFrom =
												this.resumeFrom),
											(this.resumingFrom.resumingFrom =
												void 0)),
											this.setAnimationOrigin(t, c);
										const e = {
											...mr(o, 'layout'),
											onPlay: s,
											onComplete: l,
										};
										(a.shouldReduceMotion ||
											this.options.layoutRoot) &&
											((e.delay = 0), (e.type = !1)),
											this.startAnimation(e);
									} else
										n || Co(this),
											this.isLead() &&
												this.options.onExitComplete &&
												this.options.onExitComplete();
									this.targetLayout = i;
								});
					}
					unmount() {
						this.options.layoutId && this.willUpdate(),
							this.root.nodes.remove(this);
						const e = this.getStack();
						e && e.remove(this),
							this.parent && this.parent.children.delete(this),
							(this.instance = void 0),
							nt(this.updateProjection);
					}
					blockUpdate() {
						this.updateManuallyBlocked = !0;
					}
					unblockUpdate() {
						this.updateManuallyBlocked = !1;
					}
					isUpdateBlocked() {
						return (
							this.updateManuallyBlocked ||
							this.updateBlockedByResize
						);
					}
					isTreeAnimationBlocked() {
						return (
							this.isAnimationBlocked ||
							(this.parent &&
								this.parent.isTreeAnimationBlocked()) ||
							!1
						);
					}
					startUpdate() {
						this.isUpdateBlocked() ||
							((this.isUpdating = !0),
							this.nodes && this.nodes.forEach(To),
							this.animationId++);
					}
					getTransformTemplate() {
						const { visualElement: e } = this.options;
						return e && e.getProps().transformTemplate;
					}
					willUpdate() {
						let e =
							!(
								arguments.length > 0 && void 0 !== arguments[0]
							) || arguments[0];
						if (
							((this.root.hasTreeAnimated = !0),
							this.root.isUpdateBlocked())
						)
							return void (
								this.options.onExitComplete &&
								this.options.onExitComplete()
							);
						if (
							(!this.root.isUpdating && this.root.startUpdate(),
							this.isLayoutDirty)
						)
							return;
						this.isLayoutDirty = !0;
						for (let i = 0; i < this.path.length; i++) {
							const e = this.path[i];
							(e.shouldResetTransform = !0),
								e.updateScroll('snapshot'),
								e.options.layoutRoot && e.willUpdate(!1);
						}
						const { layoutId: t, layout: n } = this.options;
						if (void 0 === t && !n) return;
						const r = this.getTransformTemplate();
						(this.prevTransformTemplateValue = r
							? r(this.latestValues, '')
							: void 0),
							this.updateSnapshot(),
							e && this.notifyListeners('willUpdate');
					}
					update() {
						this.updateScheduled = !1;
						if (this.isUpdateBlocked())
							return (
								this.unblockUpdate(),
								this.clearAllSnapshots(),
								void this.nodes.forEach(bo)
							);
						this.isUpdating || this.nodes.forEach(xo),
							(this.isUpdating = !1),
							this.nodes.forEach(Eo),
							this.nodes.forEach(go),
							this.nodes.forEach(vo),
							this.clearAllSnapshots(),
							Ze.update.process(Xe),
							Ze.preRender.process(Xe),
							Ze.render.process(Xe);
					}
					didUpdate() {
						this.updateScheduled ||
							((this.updateScheduled = !0),
							queueMicrotask(() => this.update()));
					}
					clearAllSnapshots() {
						this.nodes.forEach(wo), this.sharedNodes.forEach(_o);
					}
					scheduleUpdateProjection() {
						tt.preRender(this.updateProjection, !1, !0);
					}
					scheduleCheckAfterUnmount() {
						tt.postRender(() => {
							this.isLayoutDirty
								? this.root.didUpdate()
								: this.root.checkUpdateFailed();
						});
					}
					updateSnapshot() {
						!this.snapshot &&
							this.instance &&
							(this.snapshot = this.measure());
					}
					updateLayout() {
						if (!this.instance) return;
						if (
							(this.updateScroll(),
							(!this.options.alwaysMeasureLayout ||
								!this.isLead()) &&
								!this.isLayoutDirty)
						)
							return;
						if (this.resumeFrom && !this.resumeFrom.instance)
							for (let n = 0; n < this.path.length; n++) {
								this.path[n].updateScroll();
							}
						const e = this.layout;
						(this.layout = this.measure(!1)),
							(this.layoutCorrected = di()),
							(this.isLayoutDirty = !1),
							(this.projectionDelta = void 0),
							this.notifyListeners(
								'measure',
								this.layout.layoutBox,
							);
						const { visualElement: t } = this.options;
						t &&
							t.notify(
								'LayoutMeasure',
								this.layout.layoutBox,
								e ? e.layoutBox : void 0,
							);
					}
					updateScroll() {
						let e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: 'measure',
							t = Boolean(
								this.options.layoutScroll && this.instance,
							);
						this.scroll &&
							this.scroll.animationId === this.root.animationId &&
							this.scroll.phase === e &&
							(t = !1),
							t &&
								(this.scroll = {
									animationId: this.root.animationId,
									phase: e,
									isRoot: i(this.instance),
									offset: r(this.instance),
								});
					}
					resetTransform() {
						if (!o) return;
						const e =
								this.isLayoutDirty || this.shouldResetTransform,
							t =
								this.projectionDelta &&
								!ro(this.projectionDelta),
							n = this.getTransformTemplate(),
							r = n ? n(this.latestValues, '') : void 0,
							i = r !== this.prevTransformTemplateValue;
						e &&
							(t || gi(this.latestValues) || i) &&
							(o(this.instance, r),
							(this.shouldResetTransform = !1),
							this.scheduleRender());
					}
					measure() {
						let e =
							!(
								arguments.length > 0 && void 0 !== arguments[0]
							) || arguments[0];
						const t = this.measurePageBox();
						let n = this.removeElementScroll(t);
						var r;
						return (
							e && (n = this.removeTransform(n)),
							Ro((r = n).x),
							Ro(r.y),
							{
								animationId: this.root.animationId,
								measuredBox: t,
								layoutBox: n,
								latestValues: {},
								source: this.id,
							}
						);
					}
					measurePageBox() {
						const { visualElement: e } = this.options;
						if (!e) return di();
						const t = e.measureViewportBox(),
							{ scroll: n } = this.root;
						return (
							n && (Ci(t.x, n.offset.x), Ci(t.y, n.offset.y)), t
						);
					}
					removeElementScroll(e) {
						const t = di();
						Ji(t, e);
						for (let n = 0; n < this.path.length; n++) {
							const r = this.path[n],
								{ scroll: i, options: o } = r;
							if (r !== this.root && i && o.layoutScroll) {
								if (i.isRoot) {
									Ji(t, e);
									const { scroll: n } = this.root;
									n &&
										(Ci(t.x, -n.offset.x),
										Ci(t.y, -n.offset.y));
								}
								Ci(t.x, i.offset.x), Ci(t.y, i.offset.y);
							}
						}
						return t;
					}
					applyTransform(e) {
						let t =
							arguments.length > 1 &&
							void 0 !== arguments[1] &&
							arguments[1];
						const n = di();
						Ji(n, e);
						for (let r = 0; r < this.path.length; r++) {
							const e = this.path[r];
							!t &&
								e.options.layoutScroll &&
								e.scroll &&
								e !== e.root &&
								_i(n, {
									x: -e.scroll.offset.x,
									y: -e.scroll.offset.y,
								}),
								gi(e.latestValues) && _i(n, e.latestValues);
						}
						return (
							gi(this.latestValues) && _i(n, this.latestValues), n
						);
					}
					removeTransform(e) {
						const t = di();
						Ji(t, e);
						for (let n = 0; n < this.path.length; n++) {
							const e = this.path[n];
							if (!e.instance) continue;
							if (!gi(e.latestValues)) continue;
							mi(e.latestValues) && e.updateSnapshot();
							const r = di();
							Ji(r, e.measurePageBox()),
								to(
									t,
									e.latestValues,
									e.snapshot ? e.snapshot.layoutBox : void 0,
									r,
								);
						}
						return (
							gi(this.latestValues) && to(t, this.latestValues), t
						);
					}
					setTargetDelta(e) {
						(this.targetDelta = e),
							this.root.scheduleUpdateProjection(),
							(this.isProjectionDirty = !0);
					}
					setOptions(e) {
						this.options = {
							...this.options,
							...e,
							crossfade: void 0 === e.crossfade || e.crossfade,
						};
					}
					clearMeasurements() {
						(this.scroll = void 0),
							(this.layout = void 0),
							(this.snapshot = void 0),
							(this.prevTransformTemplateValue = void 0),
							(this.targetDelta = void 0),
							(this.target = void 0),
							(this.isLayoutDirty = !1);
					}
					forceRelativeParentToResolveTarget() {
						this.relativeParent &&
							this.relativeParent.resolvedRelativeTargetAt !==
								Xe.timestamp &&
							this.relativeParent.resolveTargetDelta(!0);
					}
					resolveTargetDelta() {
						let e =
							arguments.length > 0 &&
							void 0 !== arguments[0] &&
							arguments[0];
						var t;
						const n = this.getLead();
						this.isProjectionDirty ||
							(this.isProjectionDirty = n.isProjectionDirty),
							this.isTransformDirty ||
								(this.isTransformDirty = n.isTransformDirty),
							this.isSharedProjectionDirty ||
								(this.isSharedProjectionDirty =
									n.isSharedProjectionDirty);
						const r = Boolean(this.resumingFrom) || this !== n;
						if (
							!(
								e ||
								(r && this.isSharedProjectionDirty) ||
								this.isProjectionDirty ||
								(null === (t = this.parent) || void 0 === t
									? void 0
									: t.isProjectionDirty) ||
								this.attemptToResolveRelativeTarget
							)
						)
							return;
						const { layout: i, layoutId: o } = this.options;
						if (this.layout && (i || o)) {
							if (
								((this.resolvedRelativeTargetAt = Xe.timestamp),
								!this.targetDelta && !this.relativeTarget)
							) {
								const e = this.getClosestProjectingParent();
								e && e.layout && 1 !== this.animationProgress
									? ((this.relativeParent = e),
										this.forceRelativeParentToResolveTarget(),
										(this.relativeTarget = di()),
										(this.relativeTargetOrigin = di()),
										ii(
											this.relativeTargetOrigin,
											this.layout.layoutBox,
											e.layout.layoutBox,
										),
										Ji(
											this.relativeTarget,
											this.relativeTargetOrigin,
										))
									: (this.relativeParent =
											this.relativeTarget =
												void 0);
							}
							if (this.relativeTarget || this.targetDelta) {
								var a, s, l;
								if (
									(this.target ||
										((this.target = di()),
										(this.targetWithTransforms = di())),
									this.relativeTarget &&
									this.relativeTargetOrigin &&
									this.relativeParent &&
									this.relativeParent.target
										? (this.forceRelativeParentToResolveTarget(),
											(a = this.target),
											(s = this.relativeTarget),
											(l = this.relativeParent.target),
											ni(a.x, s.x, l.x),
											ni(a.y, s.y, l.y))
										: this.targetDelta
											? (Boolean(this.resumingFrom)
													? (this.target =
															this.applyTransform(
																this.layout
																	.layoutBox,
															))
													: Ji(
															this.target,
															this.layout
																.layoutBox,
														),
												xi(
													this.target,
													this.targetDelta,
												))
											: Ji(
													this.target,
													this.layout.layoutBox,
												),
									this.attemptToResolveRelativeTarget)
								) {
									this.attemptToResolveRelativeTarget = !1;
									const e = this.getClosestProjectingParent();
									e &&
									Boolean(e.resumingFrom) ===
										Boolean(this.resumingFrom) &&
									!e.options.layoutScroll &&
									e.target &&
									1 !== this.animationProgress
										? ((this.relativeParent = e),
											this.forceRelativeParentToResolveTarget(),
											(this.relativeTarget = di()),
											(this.relativeTargetOrigin = di()),
											ii(
												this.relativeTargetOrigin,
												this.target,
												e.target,
											),
											Ji(
												this.relativeTarget,
												this.relativeTargetOrigin,
											))
										: (this.relativeParent =
												this.relativeTarget =
													void 0);
								}
								po.resolvedTargetDeltas++;
							}
						}
					}
					getClosestProjectingParent() {
						if (
							this.parent &&
							!mi(this.parent.latestValues) &&
							!vi(this.parent.latestValues)
						)
							return this.parent.isProjecting()
								? this.parent
								: this.parent.getClosestProjectingParent();
					}
					isProjecting() {
						return Boolean(
							(this.relativeTarget ||
								this.targetDelta ||
								this.options.layoutRoot) &&
								this.layout,
						);
					}
					calcProjection() {
						var e;
						const t = this.getLead(),
							n = Boolean(this.resumingFrom) || this !== t;
						let r = !0;
						if (
							((this.isProjectionDirty ||
								(null === (e = this.parent) || void 0 === e
									? void 0
									: e.isProjectionDirty)) &&
								(r = !1),
							n &&
								(this.isSharedProjectionDirty ||
									this.isTransformDirty) &&
								(r = !1),
							this.resolvedRelativeTargetAt === Xe.timestamp &&
								(r = !1),
							r)
						)
							return;
						const { layout: i, layoutId: o } = this.options;
						if (
							((this.isTreeAnimating = Boolean(
								(this.parent && this.parent.isTreeAnimating) ||
									this.currentAnimation ||
									this.pendingAnimation,
							)),
							this.isTreeAnimating ||
								(this.targetDelta = this.relativeTarget =
									void 0),
							!this.layout || (!i && !o))
						)
							return;
						Ji(this.layoutCorrected, this.layout.layoutBox);
						const a = this.treeScale.x,
							s = this.treeScale.y;
						!(function (e, t, n) {
							let r =
								arguments.length > 3 &&
								void 0 !== arguments[3] &&
								arguments[3];
							const i = n.length;
							if (!i) return;
							let o, a;
							t.x = t.y = 1;
							for (let s = 0; s < i; s++) {
								(o = n[s]), (a = o.projectionDelta);
								const i = o.instance;
								(i &&
									i.style &&
									'contents' === i.style.display) ||
									(r &&
										o.options.layoutScroll &&
										o.scroll &&
										o !== o.root &&
										_i(e, {
											x: -o.scroll.offset.x,
											y: -o.scroll.offset.y,
										}),
									a &&
										((t.x *= a.x.scale),
										(t.y *= a.y.scale),
										xi(e, a)),
									r &&
										gi(o.latestValues) &&
										_i(e, o.latestValues));
							}
							(t.x = Ei(t.x)), (t.y = Ei(t.y));
						})(this.layoutCorrected, this.treeScale, this.path, n),
							!t.layout ||
								t.target ||
								(1 === this.treeScale.x &&
									1 === this.treeScale.y) ||
								(t.target = t.layout.layoutBox);
						const { target: l } = t;
						if (!l)
							return void (
								this.projectionTransform &&
								((this.projectionDelta = ci()),
								(this.projectionTransform = 'none'),
								this.scheduleRender())
							);
						this.projectionDelta ||
							((this.projectionDelta = ci()),
							(this.projectionDeltaWithTransform = ci()));
						const u = this.projectionTransform;
						ti(
							this.projectionDelta,
							this.layoutCorrected,
							l,
							this.latestValues,
						),
							(this.projectionTransform = so(
								this.projectionDelta,
								this.treeScale,
							)),
							(this.projectionTransform === u &&
								this.treeScale.x === a &&
								this.treeScale.y === s) ||
								((this.hasProjected = !0),
								this.scheduleRender(),
								this.notifyListeners('projectionUpdate', l)),
							po.recalculatedProjection++;
					}
					hide() {
						this.isVisible = !1;
					}
					show() {
						this.isVisible = !0;
					}
					scheduleRender() {
						let e =
							!(
								arguments.length > 0 && void 0 !== arguments[0]
							) || arguments[0];
						if (
							(this.options.scheduleRender &&
								this.options.scheduleRender(),
							e)
						) {
							const e = this.getStack();
							e && e.scheduleRender();
						}
						this.resumingFrom &&
							!this.resumingFrom.instance &&
							(this.resumingFrom = void 0);
					}
					setAnimationOrigin(e) {
						let t =
							arguments.length > 1 &&
							void 0 !== arguments[1] &&
							arguments[1];
						const n = this.snapshot,
							r = n ? n.latestValues : {},
							i = { ...this.latestValues },
							o = ci();
						(this.relativeParent &&
							this.relativeParent.options.layoutRoot) ||
							(this.relativeTarget = this.relativeTargetOrigin =
								void 0),
							(this.attemptToResolveRelativeTarget = !t);
						const a = di(),
							s =
								(n ? n.source : void 0) !==
								(this.layout ? this.layout.source : void 0),
							l = this.getStack(),
							u = !l || l.members.length <= 1,
							c = Boolean(
								s &&
									!u &&
									!0 === this.options.crossfade &&
									!this.path.some(Do),
							);
						let d;
						(this.animationProgress = 0),
							(this.mixTargetDelta = (t) => {
								const n = t / 1e3;
								Po(o.x, e.x, n),
									Po(o.y, e.y, n),
									this.setTargetDelta(o),
									this.relativeTarget &&
										this.relativeTargetOrigin &&
										this.layout &&
										this.relativeParent &&
										this.relativeParent.layout &&
										(ii(
											a,
											this.layout.layoutBox,
											this.relativeParent.layout
												.layoutBox,
										),
										(function (e, t, n, r) {
											Mo(e.x, t.x, n.x, r),
												Mo(e.y, t.y, n.y, r);
										})(
											this.relativeTarget,
											this.relativeTargetOrigin,
											a,
											n,
										),
										d &&
											io(this.relativeTarget, d) &&
											(this.isProjectionDirty = !1),
										d || (d = di()),
										Ji(d, this.relativeTarget)),
									s &&
										((this.animationValues = i),
										(function (e, t, n, r, i, o) {
											i
												? ((e.opacity = tn(
														0,
														void 0 !== n.opacity
															? n.opacity
															: 1,
														Gi(r),
													)),
													(e.opacityExit = tn(
														void 0 !== t.opacity
															? t.opacity
															: 1,
														0,
														Wi(r),
													)))
												: o &&
													(e.opacity = tn(
														void 0 !== t.opacity
															? t.opacity
															: 1,
														void 0 !== n.opacity
															? n.opacity
															: 1,
														r,
													));
											for (let a = 0; a < Ui; a++) {
												const i = 'border'.concat(
													Vi[a],
													'Radius',
												);
												let o = Hi(t, i),
													s = Hi(n, i);
												(void 0 === o &&
													void 0 === s) ||
													(o || (o = 0),
													s || (s = 0),
													0 === o ||
													0 === s ||
													Qi(o) === Qi(s)
														? ((e[i] = Math.max(
																tn(
																	Yi(o),
																	Yi(s),
																	r,
																),
																0,
															)),
															(J.test(s) ||
																J.test(o)) &&
																(e[i] += '%'))
														: (e[i] = s));
											}
											(t.rotate || n.rotate) &&
												(e.rotate = tn(
													t.rotate || 0,
													n.rotate || 0,
													r,
												));
										})(i, r, this.latestValues, n, c, u)),
									this.root.scheduleUpdateProjection(),
									this.scheduleRender(),
									(this.animationProgress = n);
							}),
							this.mixTargetDelta(
								this.options.layoutRoot ? 1e3 : 0,
							);
					}
					startAnimation(e) {
						this.notifyListeners('animationStart'),
							this.currentAnimation &&
								this.currentAnimation.stop(),
							this.resumingFrom &&
								this.resumingFrom.currentAnimation &&
								this.resumingFrom.currentAnimation.stop(),
							this.pendingAnimation &&
								(nt(this.pendingAnimation),
								(this.pendingAnimation = void 0)),
							(this.pendingAnimation = tt.update(() => {
								(Bi.hasAnimatedSinceResize = !0),
									(this.currentAnimation = (function (
										e,
										t,
										n,
									) {
										const r = O(e) ? e : Er(e);
										return (
											r.start(gr('', r, t, n)),
											r.animation
										);
									})(0, fo, {
										...e,
										onUpdate: (t) => {
											this.mixTargetDelta(t),
												e.onUpdate && e.onUpdate(t);
										},
										onComplete: () => {
											e.onComplete && e.onComplete(),
												this.completeAnimation();
										},
									})),
									this.resumingFrom &&
										(this.resumingFrom.currentAnimation =
											this.currentAnimation),
									(this.pendingAnimation = void 0);
							}));
					}
					completeAnimation() {
						this.resumingFrom &&
							((this.resumingFrom.currentAnimation = void 0),
							(this.resumingFrom.preserveOpacity = void 0));
						const e = this.getStack();
						e && e.exitAnimationComplete(),
							(this.resumingFrom =
								this.currentAnimation =
								this.animationValues =
									void 0),
							this.notifyListeners('animationComplete');
					}
					finishAnimation() {
						this.currentAnimation &&
							(this.mixTargetDelta && this.mixTargetDelta(fo),
							this.currentAnimation.stop()),
							this.completeAnimation();
					}
					applyTransformsToTarget() {
						const e = this.getLead();
						let {
							targetWithTransforms: t,
							target: n,
							layout: r,
							latestValues: i,
						} = e;
						if (t && n && r) {
							if (
								this !== e &&
								this.layout &&
								r &&
								Bo(
									this.options.animationType,
									this.layout.layoutBox,
									r.layoutBox,
								)
							) {
								n = this.target || di();
								const t = Zr(this.layout.layoutBox.x);
								(n.x.min = e.target.x.min),
									(n.x.max = n.x.min + t);
								const r = Zr(this.layout.layoutBox.y);
								(n.y.min = e.target.y.min),
									(n.y.max = n.y.min + r);
							}
							Ji(t, n),
								_i(t, i),
								ti(
									this.projectionDeltaWithTransform,
									this.layoutCorrected,
									t,
									i,
								);
						}
					}
					registerSharedNode(e, t) {
						this.sharedNodes.has(e) ||
							this.sharedNodes.set(e, new ao());
						this.sharedNodes.get(e).add(t);
						const n = t.options.initialPromotionConfig;
						t.promote({
							transition: n ? n.transition : void 0,
							preserveFollowOpacity:
								n && n.shouldPreserveFollowOpacity
									? n.shouldPreserveFollowOpacity(t)
									: void 0,
						});
					}
					isLead() {
						const e = this.getStack();
						return !e || e.lead === this;
					}
					getLead() {
						var e;
						const { layoutId: t } = this.options;
						return (
							(t &&
								(null === (e = this.getStack()) || void 0 === e
									? void 0
									: e.lead)) ||
							this
						);
					}
					getPrevLead() {
						var e;
						const { layoutId: t } = this.options;
						return t
							? null === (e = this.getStack()) || void 0 === e
								? void 0
								: e.prevLead
							: void 0;
					}
					getStack() {
						const { layoutId: e } = this.options;
						if (e) return this.root.sharedNodes.get(e);
					}
					promote() {
						let {
							needsReset: e,
							transition: t,
							preserveFollowOpacity: n,
						} = arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: {};
						const r = this.getStack();
						r && r.promote(this, n),
							e &&
								((this.projectionDelta = void 0),
								(this.needsReset = !0)),
							t && this.setOptions({ transition: t });
					}
					relegate() {
						const e = this.getStack();
						return !!e && e.relegate(this);
					}
					resetRotation() {
						const { visualElement: e } = this.options;
						if (!e) return;
						let t = !1;
						const { latestValues: n } = e;
						if (
							((n.rotate ||
								n.rotateX ||
								n.rotateY ||
								n.rotateZ) &&
								(t = !0),
							!t)
						)
							return;
						const r = {};
						for (let i = 0; i < co.length; i++) {
							const t = 'rotate' + co[i];
							n[t] && ((r[t] = n[t]), e.setStaticValue(t, 0));
						}
						e.render();
						for (const i in r) e.setStaticValue(i, r[i]);
						e.scheduleRender();
					}
					getProjectionStyles() {
						let e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {};
						var t, n;
						const r = {};
						if (!this.instance || this.isSVG) return r;
						if (!this.isVisible) return { visibility: 'hidden' };
						r.visibility = '';
						const i = this.getTransformTemplate();
						if (this.needsReset)
							return (
								(this.needsReset = !1),
								(r.opacity = ''),
								(r.pointerEvents = Me(e.pointerEvents) || ''),
								(r.transform = i
									? i(this.latestValues, '')
									: 'none'),
								r
							);
						const o = this.getLead();
						if (
							!this.projectionDelta ||
							!this.layout ||
							!o.target
						) {
							const t = {};
							return (
								this.options.layoutId &&
									((t.opacity =
										void 0 !== this.latestValues.opacity
											? this.latestValues.opacity
											: 1),
									(t.pointerEvents =
										Me(e.pointerEvents) || '')),
								this.hasProjected &&
									!gi(this.latestValues) &&
									((t.transform = i ? i({}, '') : 'none'),
									(this.hasProjected = !1)),
								t
							);
						}
						const a = o.animationValues || o.latestValues;
						this.applyTransformsToTarget(),
							(r.transform = so(
								this.projectionDeltaWithTransform,
								this.treeScale,
								a,
							)),
							i && (r.transform = i(a, r.transform));
						const { x: s, y: l } = this.projectionDelta;
						(r.transformOrigin = ''
							.concat(100 * s.origin, '% ')
							.concat(100 * l.origin, '% 0')),
							o.animationValues
								? (r.opacity =
										o === this
											? null !==
													(n =
														null !==
															(t = a.opacity) &&
														void 0 !== t
															? t
															: this.latestValues
																	.opacity) &&
												void 0 !== n
												? n
												: 1
											: this.preserveOpacity
												? this.latestValues.opacity
												: a.opacityExit)
								: (r.opacity =
										o === this
											? void 0 !== a.opacity
												? a.opacity
												: ''
											: void 0 !== a.opacityExit
												? a.opacityExit
												: 0);
						for (const u in _) {
							if (void 0 === a[u]) continue;
							const { correct: e, applyTo: t } = _[u],
								n = 'none' === r.transform ? a[u] : e(a[u], o);
							if (t) {
								const e = t.length;
								for (let i = 0; i < e; i++) r[t[i]] = n;
							} else r[u] = n;
						}
						return (
							this.options.layoutId &&
								(r.pointerEvents =
									o === this
										? Me(e.pointerEvents) || ''
										: 'none'),
							r
						);
					}
					clearSnapshot() {
						this.resumeFrom = this.snapshot = void 0;
					}
					resetTree() {
						this.root.nodes.forEach((e) => {
							var t;
							return null === (t = e.currentAnimation) ||
								void 0 === t
								? void 0
								: t.stop();
						}),
							this.root.nodes.forEach(bo),
							this.root.sharedNodes.clear();
					}
				};
			}
			function go(e) {
				e.updateLayout();
			}
			function vo(e) {
				var t;
				const n =
					(null === (t = e.resumeFrom) || void 0 === t
						? void 0
						: t.snapshot) || e.snapshot;
				if (
					e.isLead() &&
					e.layout &&
					n &&
					e.hasListeners('didUpdate')
				) {
					const { layoutBox: t, measuredBox: r } = e.layout,
						{ animationType: i } = e.options,
						o = n.source !== e.layout.source;
					'size' === i
						? fi((e) => {
								const r = o ? n.measuredBox[e] : n.layoutBox[e],
									i = Zr(r);
								(r.min = t[e].min), (r.max = r.min + i);
							})
						: Bo(i, n.layoutBox, t) &&
							fi((r) => {
								const i = o ? n.measuredBox[r] : n.layoutBox[r],
									a = Zr(t[r]);
								(i.max = i.min + a),
									e.relativeTarget &&
										!e.currentAnimation &&
										((e.isProjectionDirty = !0),
										(e.relativeTarget[r].max =
											e.relativeTarget[r].min + a));
							});
					const a = ci();
					ti(a, t, n.layoutBox);
					const s = ci();
					o
						? ti(s, e.applyTransform(r, !0), n.measuredBox)
						: ti(s, t, n.layoutBox);
					const l = !ro(a);
					let u = !1;
					if (!e.resumeFrom) {
						const r = e.getClosestProjectingParent();
						if (r && !r.resumeFrom) {
							const { snapshot: i, layout: o } = r;
							if (i && o) {
								const a = di();
								ii(a, n.layoutBox, i.layoutBox);
								const s = di();
								ii(s, t, o.layoutBox),
									io(a, s) || (u = !0),
									r.options.layoutRoot &&
										((e.relativeTarget = s),
										(e.relativeTargetOrigin = a),
										(e.relativeParent = r));
							}
						}
					}
					e.notifyListeners('didUpdate', {
						layout: t,
						snapshot: n,
						delta: s,
						layoutDelta: a,
						hasLayoutChanged: l,
						hasRelativeTargetChanged: u,
					});
				} else if (e.isLead()) {
					const { onExitComplete: t } = e.options;
					t && t();
				}
				e.options.transition = void 0;
			}
			function Ao(e) {
				po.totalNodes++,
					e.parent &&
						(e.isProjecting() ||
							(e.isProjectionDirty = e.parent.isProjectionDirty),
						e.isSharedProjectionDirty ||
							(e.isSharedProjectionDirty = Boolean(
								e.isProjectionDirty ||
									e.parent.isProjectionDirty ||
									e.parent.isSharedProjectionDirty,
							)),
						e.isTransformDirty ||
							(e.isTransformDirty = e.parent.isTransformDirty));
			}
			function yo(e) {
				e.isProjectionDirty =
					e.isSharedProjectionDirty =
					e.isTransformDirty =
						!1;
			}
			function wo(e) {
				e.clearSnapshot();
			}
			function bo(e) {
				e.clearMeasurements();
			}
			function xo(e) {
				e.isLayoutDirty = !1;
			}
			function Eo(e) {
				const { visualElement: t } = e.options;
				t &&
					t.getProps().onBeforeLayoutMeasure &&
					t.notify('BeforeLayoutMeasure'),
					e.resetTransform();
			}
			function Co(e) {
				e.finishAnimation(),
					(e.targetDelta = e.relativeTarget = e.target = void 0),
					(e.isProjectionDirty = !0);
			}
			function ko(e) {
				e.resolveTargetDelta();
			}
			function So(e) {
				e.calcProjection();
			}
			function To(e) {
				e.resetRotation();
			}
			function _o(e) {
				e.removeLeadSnapshot();
			}
			function Po(e, t, n) {
				(e.translate = tn(t.translate, 0, n)),
					(e.scale = tn(t.scale, 1, n)),
					(e.origin = t.origin),
					(e.originPoint = t.originPoint);
			}
			function Mo(e, t, n, r) {
				(e.min = tn(t.min, n.min, r)), (e.max = tn(t.max, n.max, r));
			}
			function Do(e) {
				return (
					e.animationValues &&
					void 0 !== e.animationValues.opacityExit
				);
			}
			const Oo = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
			function Ro(e) {
				(e.min = Math.round(e.min)), (e.max = Math.round(e.max));
			}
			function Bo(e, t, n) {
				return (
					'position' === e ||
					('preserve-aspect' === e && !$r(oo(t), oo(n), 0.2))
				);
			}
			const Lo = mo({
					attachResizeListener: (e, t) => Le(e, 'resize', t),
					measureScroll: () => ({
						x:
							document.documentElement.scrollLeft ||
							document.body.scrollLeft,
						y:
							document.documentElement.scrollTop ||
							document.body.scrollTop,
					}),
					checkIsScrollRoot: () => !0,
				}),
				Io = { current: void 0 },
				Fo = mo({
					measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
					defaultParent: () => {
						if (!Io.current) {
							const e = new Lo({});
							e.mount(window),
								e.setOptions({ layoutScroll: !0 }),
								(Io.current = e);
						}
						return Io.current;
					},
					resetTransform: (e, t) => {
						e.style.transform = void 0 !== t ? t : 'none';
					},
					checkIsScrollRoot: (e) =>
						Boolean(
							'fixed' === window.getComputedStyle(e).position,
						),
				}),
				jo = {
					pan: {
						Feature: class extends We {
							constructor() {
								super(...arguments),
									(this.removePointerDownListener = ot);
							}
							onPointerDown(e) {
								this.session = new Hr(
									e,
									this.createPanHandlers(),
									{
										transformPagePoint:
											this.node.getTransformPagePoint(),
									},
								);
							}
							createPanHandlers() {
								const {
									onPanSessionStart: e,
									onPanStart: t,
									onPan: n,
									onPanEnd: r,
								} = this.node.getProps();
								return {
									onSessionStart: Ri(e),
									onStart: Ri(t),
									onMove: n,
									onEnd: (e, t) => {
										delete this.session,
											r && tt.update(() => r(e, t));
									},
								};
							}
							mount() {
								this.removePointerDownListener = Ne(
									this.node.current,
									'pointerdown',
									(e) => this.onPointerDown(e),
								);
							}
							update() {
								this.session &&
									this.session.updateHandlers(
										this.createPanHandlers(),
									);
							}
							unmount() {
								this.removePointerDownListener(),
									this.session && this.session.end();
							}
						},
					},
					drag: {
						Feature: class extends We {
							constructor(e) {
								super(e),
									(this.removeGroupControls = ot),
									(this.removeListeners = ot),
									(this.controls = new Di(e));
							}
							mount() {
								const { dragControls: e } =
									this.node.getProps();
								e &&
									(this.removeGroupControls = e.subscribe(
										this.controls,
									)),
									(this.removeListeners =
										this.controls.addListeners() || ot);
							}
							unmount() {
								this.removeGroupControls(),
									this.removeListeners();
							}
						},
						ProjectionNode: Fo,
						MeasureLayout: Ni,
					},
				},
				No = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
			const zo = 4;
			function Vo(e, t) {
				let n =
					arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: 1;
				At(
					n <= zo,
					'Max CSS variable fallback depth detected in property "'.concat(
						e,
						'". This may indicate a circular fallback dependency.',
					),
				);
				const [r, i] = (function (e) {
					const t = No.exec(e);
					if (!t) return [,];
					const [, n, r] = t;
					return [n, r];
				})(e);
				if (!r) return;
				const o = window.getComputedStyle(t).getPropertyValue(r);
				return o ? o.trim() : F(i) ? Vo(i, t, n + 1) : i;
			}
			const Uo = new Set([
					'width',
					'height',
					'top',
					'left',
					'right',
					'bottom',
					'x',
					'y',
				]),
				Yo = (e) => Uo.has(e),
				Qo = (e) => Object.keys(e).some(Yo),
				Ho = (e) => e === z || e === K,
				Go = (e, t) => parseFloat(e.split(', ')[t]),
				Wo = (e, t) => (n, r) => {
					let { transform: i } = r;
					if ('none' === i || !i) return 0;
					const o = i.match(/^matrix3d\((.+)\)$/);
					if (o) return Go(o[1], t);
					{
						const t = i.match(/^matrix\((.+)\)$/);
						return t ? Go(t[1], e) : 0;
					}
				},
				Xo = new Set(['x', 'y', 'z']),
				qo = P.filter((e) => !Xo.has(e));
			const Jo = {
					width: (e, t) => {
						let { x: n } = e,
							{ paddingLeft: r = '0', paddingRight: i = '0' } = t;
						return n.max - n.min - parseFloat(r) - parseFloat(i);
					},
					height: (e, t) => {
						let { y: n } = e,
							{ paddingTop: r = '0', paddingBottom: i = '0' } = t;
						return n.max - n.min - parseFloat(r) - parseFloat(i);
					},
					top: (e, t) => {
						let { top: n } = t;
						return parseFloat(n);
					},
					left: (e, t) => {
						let { left: n } = t;
						return parseFloat(n);
					},
					bottom: (e, t) => {
						let { y: n } = e,
							{ top: r } = t;
						return parseFloat(r) + (n.max - n.min);
					},
					right: (e, t) => {
						let { x: n } = e,
							{ left: r } = t;
						return parseFloat(r) + (n.max - n.min);
					},
					x: Wo(4, 13),
					y: Wo(5, 14),
				},
				Ko = function (e, t) {
					let n =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: {},
						r =
							arguments.length > 3 && void 0 !== arguments[3]
								? arguments[3]
								: {};
					(t = { ...t }), (r = { ...r });
					const i = Object.keys(t).filter(Yo);
					let o = [],
						s = !1;
					const l = [];
					if (
						(i.forEach((i) => {
							const a = e.getValue(i);
							if (!e.hasValue(i)) return;
							let u = n[i],
								c = Sr(u);
							const d = t[i];
							let f;
							if (Te(d)) {
								const e = d.length,
									t = null === d[0] ? 1 : 0;
								(u = d[t]), (c = Sr(u));
								for (let n = t; n < e && null !== d[n]; n++)
									f
										? At(
												Sr(d[n]) === f,
												'All keyframes must be of the same type',
											)
										: ((f = Sr(d[n])),
											At(
												f === c || (Ho(c) && Ho(f)),
												'Keyframes must be of the same dimension as the current value',
											));
							} else f = Sr(d);
							if (c !== f)
								if (Ho(c) && Ho(f)) {
									const e = a.get();
									'string' === typeof e &&
										a.set(parseFloat(e)),
										'string' === typeof d
											? (t[i] = parseFloat(d))
											: Array.isArray(d) &&
												f === K &&
												(t[i] = d.map(parseFloat));
								} else
									(null === c || void 0 === c
										? void 0
										: c.transform) &&
									(null === f || void 0 === f
										? void 0
										: f.transform) &&
									(0 === u || 0 === d)
										? 0 === u
											? a.set(f.transform(u))
											: (t[i] = c.transform(d))
										: (s ||
												((o = (function (e) {
													const t = [];
													return (
														qo.forEach((n) => {
															const r =
																e.getValue(n);
															void 0 !== r &&
																(t.push([
																	n,
																	r.get(),
																]),
																r.set(
																	n.startsWith(
																		'scale',
																	)
																		? 1
																		: 0,
																));
														}),
														t.length && e.render(),
														t
													);
												})(e)),
												(s = !0)),
											l.push(i),
											(r[i] =
												void 0 !== r[i] ? r[i] : t[i]),
											a.jump(d));
						}),
						l.length)
					) {
						const n =
								l.indexOf('height') >= 0
									? window.pageYOffset
									: null,
							i = ((e, t, n) => {
								const r = t.measureViewportBox(),
									i = t.current,
									o = getComputedStyle(i),
									{ display: a } = o,
									s = {};
								'none' === a &&
									t.setStaticValue(
										'display',
										e.display || 'block',
									),
									n.forEach((e) => {
										s[e] = Jo[e](r, o);
									}),
									t.render();
								const l = t.measureViewportBox();
								return (
									n.forEach((n) => {
										const r = t.getValue(n);
										r && r.jump(s[n]), (e[n] = Jo[n](l, o));
									}),
									e
								);
							})(t, e, l);
						return (
							o.length &&
								o.forEach((t) => {
									let [n, r] = t;
									e.getValue(n).set(r);
								}),
							e.render(),
							a && null !== n && window.scrollTo({ top: n }),
							{ target: i, transitionEnd: r }
						);
					}
					return { target: t, transitionEnd: r };
				};
			const Zo = (e, t, n, r) => {
					const i = (function (e, t, n) {
						let { ...r } = t;
						const i = e.current;
						if (!(i instanceof Element))
							return { target: r, transitionEnd: n };
						n && (n = { ...n }),
							e.values.forEach((e) => {
								const t = e.get();
								if (!F(t)) return;
								const n = Vo(t, i);
								n && e.set(n);
							});
						for (const o in r) {
							const e = r[o];
							if (!F(e)) continue;
							const t = Vo(e, i);
							t &&
								((r[o] = t),
								n || (n = {}),
								void 0 === n[o] && (n[o] = e));
						}
						return { target: r, transitionEnd: n };
					})(e, t, r);
					return (function (e, t, n, r) {
						return Qo(t)
							? Ko(e, t, n, r)
							: { target: t, transitionEnd: r };
					})(e, (t = i.target), n, (r = i.transitionEnd));
				},
				$o = { current: null },
				ea = { current: !1 };
			const ta = new WeakMap(),
				na = Object.keys(y),
				ra = na.length,
				ia = [
					'AnimationStart',
					'AnimationComplete',
					'Update',
					'BeforeLayoutMeasure',
					'LayoutMeasure',
					'LayoutAnimationStart',
					'LayoutAnimationComplete',
				],
				oa = h.length;
			class aa {
				constructor(e) {
					let {
							parent: t,
							props: n,
							presenceContext: r,
							reducedMotionConfig: i,
							visualState: o,
						} = e,
						a =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {};
					(this.current = null),
						(this.children = new Set()),
						(this.isVariantNode = !1),
						(this.isControllingVariants = !1),
						(this.shouldReduceMotion = null),
						(this.values = new Map()),
						(this.features = {}),
						(this.valueSubscriptions = new Map()),
						(this.prevMotionValues = {}),
						(this.events = {}),
						(this.propEventSubscriptions = {}),
						(this.notifyUpdate = () =>
							this.notify('Update', this.latestValues)),
						(this.render = () => {
							this.current &&
								(this.triggerBuild(),
								this.renderInstance(
									this.current,
									this.renderState,
									this.props.style,
									this.projection,
								));
						}),
						(this.scheduleRender = () =>
							tt.render(this.render, !1, !0));
					const { latestValues: s, renderState: l } = o;
					(this.latestValues = s),
						(this.baseTarget = { ...s }),
						(this.initialValues = n.initial ? { ...s } : {}),
						(this.renderState = l),
						(this.parent = t),
						(this.props = n),
						(this.presenceContext = r),
						(this.depth = t ? t.depth + 1 : 0),
						(this.reducedMotionConfig = i),
						(this.options = a),
						(this.isControllingVariants = p(n)),
						(this.isVariantNode = m(n)),
						this.isVariantNode &&
							(this.variantChildren = new Set()),
						(this.manuallyAnimateOnMount = Boolean(t && t.current));
					const { willChange: u, ...c } =
						this.scrapeMotionValuesFromProps(n, {});
					for (const d in c) {
						const e = c[d];
						void 0 !== s[d] &&
							O(e) &&
							(e.set(s[d], !1), vr(u) && u.add(d));
					}
				}
				scrapeMotionValuesFromProps(e, t) {
					return {};
				}
				mount(e) {
					(this.current = e),
						ta.set(e, this),
						this.projection &&
							!this.projection.instance &&
							this.projection.mount(e),
						this.parent &&
							this.isVariantNode &&
							!this.isControllingVariants &&
							(this.removeFromVariantTree =
								this.parent.addVariantChild(this)),
						this.values.forEach((e, t) =>
							this.bindToMotionValue(t, e),
						),
						ea.current ||
							(function () {
								if (((ea.current = !0), a))
									if (window.matchMedia) {
										const e = window.matchMedia(
												'(prefers-reduced-motion)',
											),
											t = () => ($o.current = e.matches);
										e.addListener(t), t();
									} else $o.current = !1;
							})(),
						(this.shouldReduceMotion =
							'never' !== this.reducedMotionConfig &&
							('always' === this.reducedMotionConfig ||
								$o.current)),
						this.parent && this.parent.children.add(this),
						this.update(this.props, this.presenceContext);
				}
				unmount() {
					ta.delete(this.current),
						this.projection && this.projection.unmount(),
						nt(this.notifyUpdate),
						nt(this.render),
						this.valueSubscriptions.forEach((e) => e()),
						this.removeFromVariantTree &&
							this.removeFromVariantTree(),
						this.parent && this.parent.children.delete(this);
					for (const e in this.events) this.events[e].clear();
					for (const e in this.features) this.features[e].unmount();
					this.current = null;
				}
				bindToMotionValue(e, t) {
					const n = M.has(e),
						r = t.on('change', (t) => {
							(this.latestValues[e] = t),
								this.props.onUpdate &&
									tt.update(this.notifyUpdate, !1, !0),
								n &&
									this.projection &&
									(this.projection.isTransformDirty = !0);
						}),
						i = t.on('renderRequest', this.scheduleRender);
					this.valueSubscriptions.set(e, () => {
						r(), i();
					});
				}
				sortNodePosition(e) {
					return this.current &&
						this.sortInstanceNodePosition &&
						this.type === e.type
						? this.sortInstanceNodePosition(this.current, e.current)
						: 0;
				}
				loadFeatures(e, t, n, r) {
					let i,
						o,
						{ children: a, ...s } = e;
					for (let l = 0; l < ra; l++) {
						const e = na[l],
							{
								isEnabled: t,
								Feature: n,
								ProjectionNode: r,
								MeasureLayout: a,
							} = y[e];
						r && (i = r),
							t(s) &&
								(!this.features[e] &&
									n &&
									(this.features[e] = new n(this)),
								a && (o = a));
					}
					if (!this.projection && i) {
						this.projection = new i(
							this.latestValues,
							this.parent && this.parent.projection,
						);
						const {
							layoutId: e,
							layout: t,
							drag: n,
							dragConstraints: o,
							layoutScroll: a,
							layoutRoot: l,
						} = s;
						this.projection.setOptions({
							layoutId: e,
							layout: t,
							alwaysMeasureLayout: Boolean(n) || (o && u(o)),
							visualElement: this,
							scheduleRender: () => this.scheduleRender(),
							animationType: 'string' === typeof t ? t : 'both',
							initialPromotionConfig: r,
							layoutScroll: a,
							layoutRoot: l,
						});
					}
					return o;
				}
				updateFeatures() {
					for (const e in this.features) {
						const t = this.features[e];
						t.isMounted
							? t.update()
							: (t.mount(), (t.isMounted = !0));
					}
				}
				triggerBuild() {
					this.build(
						this.renderState,
						this.latestValues,
						this.options,
						this.props,
					);
				}
				measureViewportBox() {
					return this.current
						? this.measureInstanceViewportBox(
								this.current,
								this.props,
							)
						: di();
				}
				getStaticValue(e) {
					return this.latestValues[e];
				}
				setStaticValue(e, t) {
					this.latestValues[e] = t;
				}
				makeTargetAnimatable(e) {
					let t =
						!(arguments.length > 1 && void 0 !== arguments[1]) ||
						arguments[1];
					return this.makeTargetAnimatableFromInstance(
						e,
						this.props,
						t,
					);
				}
				update(e, t) {
					(e.transformTemplate || this.props.transformTemplate) &&
						this.scheduleRender(),
						(this.prevProps = this.props),
						(this.props = e),
						(this.prevPresenceContext = this.presenceContext),
						(this.presenceContext = t);
					for (let n = 0; n < ia.length; n++) {
						const t = ia[n];
						this.propEventSubscriptions[t] &&
							(this.propEventSubscriptions[t](),
							delete this.propEventSubscriptions[t]);
						const r = e['on' + t];
						r && (this.propEventSubscriptions[t] = this.on(t, r));
					}
					(this.prevMotionValues = (function (e, t, n) {
						const { willChange: r } = t;
						for (const i in t) {
							const o = t[i],
								a = n[i];
							if (O(o)) e.addValue(i, o), vr(r) && r.add(i);
							else if (O(a))
								e.addValue(i, Er(o, { owner: e })),
									vr(r) && r.remove(i);
							else if (a !== o)
								if (e.hasValue(i)) {
									const t = e.getValue(i);
									!t.hasAnimated && t.set(o);
								} else {
									const t = e.getStaticValue(i);
									e.addValue(
										i,
										Er(void 0 !== t ? t : o, { owner: e }),
									);
								}
						}
						for (const i in n) void 0 === t[i] && e.removeValue(i);
						return t;
					})(
						this,
						this.scrapeMotionValuesFromProps(e, this.prevProps),
						this.prevMotionValues,
					)),
						this.handleChildMotionValue &&
							this.handleChildMotionValue();
				}
				getProps() {
					return this.props;
				}
				getVariant(e) {
					return this.props.variants
						? this.props.variants[e]
						: void 0;
				}
				getDefaultTransition() {
					return this.props.transition;
				}
				getTransformPagePoint() {
					return this.props.transformPagePoint;
				}
				getClosestVariantNode() {
					return this.isVariantNode
						? this
						: this.parent
							? this.parent.getClosestVariantNode()
							: void 0;
				}
				getVariantContext() {
					if (
						arguments.length > 0 &&
						void 0 !== arguments[0] &&
						arguments[0]
					)
						return this.parent
							? this.parent.getVariantContext()
							: void 0;
					if (!this.isControllingVariants) {
						const e =
							(this.parent && this.parent.getVariantContext()) ||
							{};
						return (
							void 0 !== this.props.initial &&
								(e.initial = this.props.initial),
							e
						);
					}
					const e = {};
					for (let t = 0; t < oa; t++) {
						const n = h[t],
							r = this.props[n];
						(c(r) || !1 === r) && (e[n] = r);
					}
					return e;
				}
				addVariantChild(e) {
					const t = this.getClosestVariantNode();
					if (t)
						return (
							t.variantChildren && t.variantChildren.add(e),
							() => t.variantChildren.delete(e)
						);
				}
				addValue(e, t) {
					t !== this.values.get(e) &&
						(this.removeValue(e), this.bindToMotionValue(e, t)),
						this.values.set(e, t),
						(this.latestValues[e] = t.get());
				}
				removeValue(e) {
					this.values.delete(e);
					const t = this.valueSubscriptions.get(e);
					t && (t(), this.valueSubscriptions.delete(e)),
						delete this.latestValues[e],
						this.removeValueFromRenderState(e, this.renderState);
				}
				hasValue(e) {
					return this.values.has(e);
				}
				getValue(e, t) {
					if (this.props.values && this.props.values[e])
						return this.props.values[e];
					let n = this.values.get(e);
					return (
						void 0 === n &&
							void 0 !== t &&
							((n = Er(t, { owner: this })), this.addValue(e, n)),
						n
					);
				}
				readValue(e) {
					return void 0 === this.latestValues[e] && this.current
						? this.readValueFromInstance(
								this.current,
								e,
								this.options,
							)
						: this.latestValues[e];
				}
				setBaseTarget(e, t) {
					this.baseTarget[e] = t;
				}
				getBaseTarget(e) {
					var t;
					const { initial: n } = this.props,
						r =
							'string' === typeof n || 'object' === typeof n
								? null === (t = Se(this.props, n)) ||
									void 0 === t
									? void 0
									: t[e]
								: void 0;
					if (n && void 0 !== r) return r;
					const i = this.getBaseTargetFromProps(this.props, e);
					return void 0 === i || O(i)
						? void 0 !== this.initialValues[e] && void 0 === r
							? void 0
							: this.baseTarget[e]
						: i;
				}
				on(e, t) {
					return (
						this.events[e] || (this.events[e] = new br()),
						this.events[e].add(t)
					);
				}
				notify(e) {
					if (this.events[e]) {
						for (
							var t = arguments.length,
								n = new Array(t > 1 ? t - 1 : 0),
								r = 1;
							r < t;
							r++
						)
							n[r - 1] = arguments[r];
						this.events[e].notify(...n);
					}
				}
			}
			class sa extends aa {
				sortInstanceNodePosition(e, t) {
					return 2 & e.compareDocumentPosition(t) ? 1 : -1;
				}
				getBaseTargetFromProps(e, t) {
					return e.style ? e.style[t] : void 0;
				}
				removeValueFromRenderState(e, t) {
					let { vars: n, style: r } = t;
					delete n[e], delete r[e];
				}
				makeTargetAnimatableFromInstance(e, t, n) {
					let { transition: r, transitionEnd: i, ...o } = e,
						{ transformValues: a } = t,
						s = (function (e, t, n) {
							const r = {};
							for (const i in e) {
								const e = Dr(i, t);
								if (void 0 !== e) r[i] = e;
								else {
									const e = n.getValue(i);
									e && (r[i] = e.get());
								}
							}
							return r;
						})(o, r || {}, this);
					if (
						(a &&
							(i && (i = a(i)), o && (o = a(o)), s && (s = a(s))),
						n)
					) {
						!(function (e, t, n) {
							var r, i;
							const o = Object.keys(t).filter(
									(t) => !e.hasValue(t),
								),
								a = o.length;
							if (a)
								for (let s = 0; s < a; s++) {
									const a = o[s],
										l = t[a];
									let u = null;
									Array.isArray(l) && (u = l[0]),
										null === u &&
											(u =
												null !==
													(i =
														null !== (r = n[a]) &&
														void 0 !== r
															? r
															: e.readValue(a)) &&
												void 0 !== i
													? i
													: t[a]),
										void 0 !== u &&
											null !== u &&
											('string' === typeof u &&
											(Ar(u) || hr(u))
												? (u = parseFloat(u))
												: !_r(u) &&
													vn.test(l) &&
													(u = fr(a, l)),
											e.addValue(a, Er(u, { owner: e })),
											void 0 === n[a] && (n[a] = u),
											null !== u &&
												e.setBaseTarget(a, u));
								}
						})(this, o, s);
						const e = Zo(this, o, s, i);
						(i = e.transitionEnd), (o = e.target);
					}
					return { transition: r, transitionEnd: i, ...o };
				}
			}
			class la extends sa {
				readValueFromInstance(e, t) {
					if (M.has(t)) {
						const e = dr(t);
						return (e && e.default) || 0;
					}
					{
						const r = ((n = e), window.getComputedStyle(n)),
							i = (I(t) ? r.getPropertyValue(t) : r[t]) || 0;
						return 'string' === typeof i ? i.trim() : i;
					}
					var n;
				}
				measureInstanceViewportBox(e, t) {
					let { transformPagePoint: n } = t;
					return Pi(e, n);
				}
				build(e, t, n, r) {
					re(e, t, n, r.transformTemplate);
				}
				scrapeMotionValuesFromProps(e, t) {
					return Ce(e, t);
				}
				handleChildMotionValue() {
					this.childSubscription &&
						(this.childSubscription(),
						delete this.childSubscription);
					const { children: e } = this.props;
					O(e) &&
						(this.childSubscription = e.on('change', (e) => {
							this.current &&
								(this.current.textContent = ''.concat(e));
						}));
				}
				renderInstance(e, t, n, r) {
					be(e, t, n, r);
				}
			}
			class ua extends sa {
				constructor() {
					super(...arguments), (this.isSVGTag = !1);
				}
				getBaseTargetFromProps(e, t) {
					return e[t];
				}
				readValueFromInstance(e, t) {
					if (M.has(t)) {
						const e = dr(t);
						return (e && e.default) || 0;
					}
					return (t = xe.has(t) ? t : we(t)), e.getAttribute(t);
				}
				measureInstanceViewportBox() {
					return di();
				}
				scrapeMotionValuesFromProps(e, t) {
					return ke(e, t);
				}
				build(e, t, n, r) {
					me(e, t, n, this.isSVGTag, r.transformTemplate);
				}
				renderInstance(e, t, n, r) {
					Ee(e, t, 0, r);
				}
				mount(e) {
					(this.isSVGTag = ve(e.tagName)), super.mount(e);
				}
			}
			const ca = (e, t) =>
					T(e)
						? new ua(t, { enableHardwareAcceleration: !1 })
						: new la(t, { enableHardwareAcceleration: !0 }),
				da = {
					...Yr,
					...ht,
					...jo,
					...{ layout: { ProjectionNode: Fo, MeasureLayout: Ni } },
				},
				fa = k((e, t) =>
					(function (e, t, n, r) {
						let { forwardMotionProps: i = !1 } = t;
						return {
							...(T(e) ? Re : Be),
							preloadedFeatures: n,
							useRender: ye(i),
							createVisualElement: r,
							Component: e,
						};
					})(e, t, da, ca),
				);
			const ha = n.p + 'static/media/email.37b9e890eea501421fbf.png',
				pa = n.p + 'static/media/mobile.145d9ce0157a56f8fcd8.png',
				ma = n.p + 'static/media/cpp.9002a804bbfa0354d0b8.png',
				ga = n.p + 'static/media/css.5721a3928fe43de6baf8.png',
				va = n.p + 'static/media/figma.152e55329b6f1915967e.png',
				Aa = n.p + 'static/media/git.a54d3fa44e02f2f61e69.png',
				ya = n.p + 'static/media/graphql.0372057049181c5de51a.png',
				wa = n.p + 'static/media/node.8683d89cf78ffae3d1f7.png',
				ba = n.p + 'static/media/redux.c9be37e0fece29c624b0.png',
				xa = n.p + 'static/media/sass.36e863bfbcb25c109d00.png';
			const Ea =
					n.p +
					'static/media/hexagon.fe3d66b40fc6dddf6cec0e9020cff48f.svg',
				Ca = n.p + 'static/media/logo.7047b63023f3fe974e1c.png',
				ka = n.p + 'static/media/me2.02efbd2ea4695b81231a.png',
				Sa = {
					back: n.p + 'static/media/back.4ef49bb722d99179a328.jpeg',
					me2: ka,
					email: ha,
					mobile: pa,
					api: 'data:image/png;base64,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',
					cpp: ma,
					css: ga,
					figma: va,
					flutter:
						'data:image/png;base64,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',
					git: Aa,
					graphql: ya,
					html: 'data:image/png;base64,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',
					javascript:
						'data:image/png;base64,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',
					mu5: 'data:image/png;base64,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',
					node: wa,
					python: 'data:image/png;base64,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',
					react: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAPgUlEQVR4nO2ba5RU1ZXHf/veKujmKYSqblobuqrbFQUf+BhEY5yYqJnoUvA5iRDEcUUy43IcExM1IJzGRo0x+ByXy/gIY3yMjyhEZ5JBgxpnxIgaQIEsoG5Dx4auQt6Etqvu3fOh7q2u7i6q6zbOp+H/6Z5z995n733Pa+9zLhzGYRzG/2fIFyHELNeINe6zkxTvOBWxRV1Hc94q8+W67V+I/D+3jyFiTwIrLuLZCqtMIr4GET1U2YfsAONkrkV1LlDf65UHvCvI4uHRzl/9oL7+QBi5i9raqvd2DZqllsxAmQJYvUjWIfoTk6h55RDUPwQHqIpxMr8EZlZAnUa1mS3xR83ZkitHaJZrhIbMP6HMAeIVKHK7SdbMq0jnEhiwA5o3pW9V4Q6/uA/hQVTfRKwuUW1U5RyEqUB1Edsay+KqeQ3xj0rJXLAxc4pn6ZPA8UXV+xBdKp68LpakPE+HIvoNkGuBYQCicuX8xtizA7FjQA4wWzJ15HQDMATYban31XmNtWv60Dk7jxByN6jqD4HhfnUW0bmmIf6zwhhWlWYnfZNCC8ggn26XKHcPGeo98KPa2v19ZKc6TgD5AzACaB8R/bwp7DCDATqgx9dXvc401jxcjr4l1T4+R+QXwLlF1S9ygKsh1kX19sdBZ3Rrpc8Qqbre1I/cUVaPVPo6hYfyPPIdk4g9F9aW3hNLRVDhYv9xL9Zfn+iPfm6ybrNJxL6JyGxgn199mQzhbarTbxQZvweV6SZRM70/4wGGRz9/oiBPdVp4SwbggEVtbdXAJL/4pkkkOitiFFGTiD2KJX8LbAVQ5SSQM32Kdgs9yzTGnqlUF7/Lv+UXJ1fKV4zQDtiTqx4PRP3iqrD8piH2YURzF4F2dddqV9SSC+cla0LLQ/nYf2own+igsrQlMIAhoLXBk8C2sNx3bdoxMieRx4omO0AGZT193Dg7jwitjiWBDsKgHRUsm73YwzII3uBCQflrGN5FbW3VnZJbCpwIIMoaVV3tv56EZl817e1DQumjdK8QlheKFwY4CRZxj6iU9HlVe0+26lngLL8qpRbnieq5wAa/7it8HnnBqFasl2phecX2PLdSvgChHaBq7yw8ezqqUr61TmYB6FS/mLaVvzOJ+DbTVJvGtb8OuiUvlPOldfttlWvkFT6CO9gKvQ8I7QDbymW6S1LRmDWb0ucDt/jFA6hccFtjfEPh/dFf+gtwIeSHlKrOa3Y6vlmZRjLSf1D2jgkdfEXCMrj7az6lOpPL88r4/uhbUu3js8hTQtCt9R7L1qjZ1HGO2Pnuqy57LYv9nmctBG8hYKnKs8bZerJJjG0t24DFOPL7yR1monSVpS2BgW2FU+kNQBPQZpLxceCHxPXbT/RsPR7VJJAUkaQqp9K9bIZVLqvoB2BtBM9BJIXIapwxq4OgyqTSW4B6kDdMMnZO2DZC9wAAlDUITUB9c6rjbsU6CTJTPBiW/xp5v+ohRusKUZApoFNAQH2h4zP7TCqzArw/0R2Glwyw+kOoHmDa24dIp32pp9wiIhPKSxYP9SwQVMmJZT2FeltF2KNwAKRT0N15Q2UkaJVAtSojQOKgs4AIgoqi2v98tRL0/hHRrpfCBEUVOcBsTDdh8S/ADGBkCZJdwAoRWaHoe7aK44o+g3Ky74wbTSJ2X6VKATRvytyooot8Nf9ow0zP0iQqk1V1CnB6GV2etl2997ajazb1105ZB9zeui3hqrSg8veAXcTkgbiKRoH1JGITjYhXWnlWTkjEplwhEmqNNqoWTua/gSl+ozeYRPyBXu8/Bo4FyYLa9OwlLuhzEdw5c5N1mw/WTsluZZZrxDiZea5nrUXlyiLjVyFyox21xikEoecx9uaOwmpgNu0Yp6IL/GIOS2aHNR4g71CdDWQBUO64vXVbokDQum0ccGy+oItx7fGi8gMg2FnaINNzRNaZVHquWa4l57s+DjBbMnU0ZN5CtRmo8qtXgkw1idhJJhG7b279mE9FvSUBj6fWRd0ScvfhZ2pA7jUNsQ/DGl/QJVmzGiQYOkNd1/p58E40cmmBUGWJOfpLf5nfGLvXJGKTRLxpKEG71cDtjM8sX9iaGdu7jR4OMJs7kuT0HZQz/Ko2EW+aScb/xiRjS4uzsNopvwM6AVSZBmBS2ycjBHF5K1VZczDjFrZmxppN6fObW9PfMk669mB0voz8XkCYtsDZdlreZr3Ep9iHte/1Ar2Izk/ULjHJ2Kli6SUon/pvzsx6+o7Z3JEsFl+YA4yz8wg0uwL4sl/1WpVGpt/SOHr3wXQzqfSrwAWAZ1tek+tZjwDn5QXrzPnJmqd687S0bT8yl3UfBrmwqH0PlaVEuc6Mi7X3badjBogvS96IkL0mRyRF/gO+YJLxKw6qo7PzCLzsMwjf8qvWI9HTTWLULijuAZq9p8j4f5+QiE0tZ3xeF33Mf7I8114YGI/IJ5qIP13aeO9dkIvoOQFbiE4jpyvMlkxdn3YS8Wco5B70Gzm17irS/flyKprEqF0TkrELgRf8qmPQrru7G8bv+nB1Xr6uHe3uvqqSiWtCQ/w3+N3TQy8P6gV3TvGqECD/5fucHxSjnqw+1McIEQ+kO/Ut1mX+WNw6dkdsSW/63rhCxEX2zwTW+QKuCSZUC0BcLg2eEZn/z0cf/Xl/QguC4Rd5tmBXqX+c31CztI8RWzJ1frcvD2FqqTnBJGNLgXf9YkTyjT4y+1TJVqKrn7oL5iTL8+xLwDdaRY7pViD6eh/ucvC8xyj62qL6k1JHVuLpiVS28bIEPbHUC7FkTlFRsXmsFN3BMNgetKybWY+B4KsrA96125Y9StXrN6zWEG0cjFZzUuxAocsdXanMkq1QmEh0fUGqZs8tzVAarnizpejDqsgdqPb50lGRVeTPC/uDh8jqkm8sb2HPsvX9MLp2eV3nBc+C9WfwHWBb+hLgAig0G8epKimhFxa1tVWjXOUX/XlDJpvW9NTetHMaYltR6TM3lMDLJhHvk2xtdrZNJdgWd2eUZ5oNn1WUllvU1latSrNfdFVyL4HvgNsaah3Qx/2Xx6JDn3pe1S4lqBh7s4OvBPG7oSwG/INPq6Ukf5TrgLaDS9QtUUuu711rVC1VK1BeEQnODoaL7X63Pz3Nco3syQ3+FcEyr/pYkGgpjN0qjf6YwjLBZWudzKt3bt5VNuenMMt/9GzLvQv0Sb+Bieuc9JV9FBkXayciU1Bepudw8BB+HbWsKXMaYlt784mTno6fSQZexIvMD/gVvl3W+Lbdoxmf+Q+US3zd1uJFflyQXUycj/6sZSiNflU7qtebZPzl3jP7HRu2xrpseyv5QOlNk4yfbTZ8dhS2u4F8DNFKVW6iqasrmTr3l7pJAFHVj+YkazpK0rW3D6Ez8gnQALiIdZxJjFlvUul3gK8ALp5XZ5pq0z0Y88f3lwIPAEEMsBFxzy1Os/WYvfNDgTOBt/2qOkReMk7mg2Zn29Tiya0rYl/gG48Ir0CQ3NR/9Uka6IweNBYwifg2k4j/1iTivz2Y8QB0Rpt940H4N5MYk5+wVX7tU9hYdncwpirNrR0XGyfzIfndX2D8W1H0zN45xpLr8vOq9lonczMwh/wReIDVqCyOqPVCTtz78Q9JbctL+s7jp+szww9EdR3CkeTD4dMGGhEuSHWc6CHvA1HQHVGYEDjLOFsbUDvl2/BaxLP/MSfe5YjOouf9gv0oLROSsZ+V2t2W3Zi0bPysPme5LcCVFOUPBVQFD8UGWUdizHE9EiKp9OXavUd/f0IidnrYnMDzqvba1sx7KKcAoFxjGuOFk2ijaomT+Vjh2Hz6TaWXPTngaVx7rp92L4nKUmKbO5K4cgPwXaDUxLgHWIHqu2LLe5bLRld4EMjn9geSEktlfqjoPX7x7RxybUS1EXQyImcAp0HJk6mdwFO25d0X9MpyCJcUdZwq8YZdrBZzUe0nKVrYXwr5r7EYIS2wG+hU5AB5xwGMELQaqFIYiWodWNNBI4IEG8P+dF0twh3K/iUVH9lXILQkivIAoNyFcBJwBt3XYP6vsQf4HxFWqXIzAKLPmkRNn6W3PwzsXAA5Lp+kl82mMXYr5Mfs+s2ZEzxPj0dJIlYSNAl6CkhFO8s+reR3lysVNqHqIKQQWT2hIbYmmFNMquM7IONQOWUgbYR2gHGcKlSDmP5PQb2v0Ef0OqAwG7fF1ZJVArV5o2SeirsMT4YVH41h6T7UPh80OBjtUGFSqW1xD4isRBkHNJlP0sPMxPi+svS9ENoBtje03pUgitTy53aAaapNN2/aNkPF+i/AUvQWVJaYxpoVPehS2yeDd5NfdBH5tknE+r+A4bHFH8gWQ6yjgPXlGXpiAMfjWriFIZbsLEcbYH5j7RuCBJuiISCvtaTau1PpG9NN4C2l+07hPJOIvVmhRt1pO5e+6bR+EN4BESlaenRXpXzzE2NagMV+8agckdeNk641WzJ1WCwDavx3L5KI3VW5RtaewqPtVnxho8AdlqFHssJjTxnSnhBRDsSuRVnu1zSh/I4syyhsdfX3o93dM0rlEw8ulr3dyknoIR3+jpBId75QCHUnx0yUrsGRQZeiutavOgHx9xPCB9WfW9MqzUcGUGFokXah7wcMoAdIIVxVf2YPg1vHH7ET8a7WYmVVuwYL37v5mNjeMqyl4XXfWkPcdBnKkgjtgBGRA5sJzuu6Y/SKYZz0JLBfEYru9IkM+tzjtQUbM+HXcuG4wnOXtzEse2gH+Gfvwfp/dqXpMwDjpGehvIUfogr8AWSl/3qsZ+lbzU5mdqmcYin4t1a/5hdTA/lBY0DX5CSf0QEYJjr0mv7oW9q2H2mc9GsoTxIEMKLPjnJ3nzsi2nkWyi990qGq+ohxti8zztaG/uTuyQ6+BoI5oJAfCIUBxQILWzNjs55u8BvfA/rV/EluT/x0fWb4gUF6PfAjILhRlgUWmERsYXGWyTgd30flPiC4iLkP1UUMqrq/1MVp46QnobxNPv7I2srE4ptnlWLgP0w46ZtVCdbrfQgPiupyQTpVSKrydeASCkflgOpaS62Z85piH5SSaVozJ+PxMOhpRdWdwG8Q/T0eG8WWqLryNUSvo/D19ecmWXNTCZH94tB+mUllnkAKidFyyIjKnaO8XQ/3t8wZVYtUZhbCnVTyy4zyn2N3xqZWekTWG4f801RzKvM9xZsLMq7E6/dReY5OfTRskJJPhtqXgfwD+eu1vXXdDTzE5pjp7z+kcvjCfpuj/rOzxPISQBUqrYq9xjSO3vJFyG9p235krss9TUSOVNGsgDM80vX2QH6ROYzDOIzDKMb/AmZVYJ9sQq8gAAAAAElFTkSuQmCC',
					redux: ba,
					sass: xa,
					typescript:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAABmJLR0QA/wD/AP+gvaeTAAAEgUlEQVRoge2ae0wcRRzHZ2b39nrA3SGUO+CAUs4+KFraFBIDMU0NBpWelfpAGlOJEVNDrCFBMZo0UfEvTU0kNaGm2kRTS61N/2hN0xTjUQVrrqW1SVPkdQXuaDiu3ME9uMfu+Mcl57K3ew97dGiy3792fjPzy3xm5jeP3YW5B34GKylKW7ii/tGKen8AkgFISwYgLRmAtGQA0pIBSEsGIC0ZgLRkANKSAUhLBiAtGYC0ZADSkgFI66EHoJMv2rrLqFJQfAuFoFqliF8LKrPCLPYGWADA1SnPwPhCbBmVAjU8llNr1Bi0ShWDMAYz7uCUK/DrsGtwYgHjNAF07t6SnZGgufHVbbYLACAEb9bkd9QVZatEWvLOzsIbNm/HmfG/bV4pnylMISV9v/ONgpCfpBHsad7QZSoVbX1ElYbM829XPFuRI1UghTZRCCYulMDDsuSh50r2bM1NWIuhUU/zo1UlatHcBxrE/A7YrM9orS1IsqKSRkeajLRYD6YQA5eHHTQl4qK8UKPTrOFbrt+Zd/tDkWdIK6P2CedS9LnlCb2gPSEW/zTkuGnzMjSqL3+kpkwTzbI6l949PRbmRMIZ3v8npqNvVO+tLuZbTIf7B0fmIs9Sn5jM7Vs36zP4lrbe0dNDc9Hke3VFHXVFGINvB+92XZj0BTlRPymMQHolCNxAmDt7w8m3fNE3zdDIPOL6fUxk5Y2KGIBgTYMA0BTkTxKMwWcXJhP6IbYTzy6G+EmGRq9V6/6HH2IAY3N+geVTU2mXqVSnTm2vJAbwo8UhsCAIWmvz/3p/+8cN6/I1TJJ+iAFcuj1vmVyMtasU6MCTBZbO7V++VLZRp0rohxgAh0Fb75jLFxbNVVBwX5XO3F751cvGgrijkQYACABeriSPHFbnUuM3t2zuoGTjIGjakTfQsW1flWR8p2EZXadmrVYr32JcqxwYSarurRnf81/fPNKo1ytDcYod3AFf2FTYdMIee7Qmf6GZdof2HJ8+9JvXFVZAKDl4JVns4d36WDt5gIguDnueOTbddt5t99FSGDUGpM8STpnVAhCRZcq/93vb62fmJxZFMDDmPti1VmBcXQAR3Z4NNJ+wHfxlASBhf5fnrbIRQAhI3fOuTPq+GxLu1lpGGMUkARof1/S/Zeh5UfJa0z8uvArHRgcZgHK98lyLobNGReNwRQ730VN5osV2GjMFltgbDYHj9Cf1uvoyCnP/7cGmDciYW9B+btbtZ6PGpzeqWyrXAMzy6zqFc4oEgMPDYk44FbbkcBdbdK4gdc+PaQT0mZABIUHrAQBX7cL9jsAU6v7DOeMX6TjMcVo6tF4dLs4MM0BkY4aI+tw8JzCSiYH9vXc9bGrnfghh9xWfJyC8GZMBWAywDcft/7ipOGcHviBEx64Hf7jmis0itowGwtz+k/YPL3mcwXhHIAih1UO/csp59M97ogXSEMSnrjk2LX9BYrG6k6zbN+rpG/UUZyte3aatNjBZShR5WRFkwbwfX76zdHLI7ZS4M0SUhvdC8SX/epxAMgBpPfQA/wLmWnEhTQityAAAAABJRU5ErkJggg==',
					vue: 'data:image/png;base64,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',
					hexagon: Ea,
					logo: Ca,
				};
			var Ta = n(184);
			const _a = () =>
					(0, Ta.jsxs)('nav', {
						id: 'navbar',
						className: 'app__navbar',
						children: [
							(0, Ta.jsx)('div', {
								className: 'app__navbar-logo',
								children: (0, Ta.jsx)('img', {
									src: Sa.logo,
									alt: 'logo',
								}),
							}),
							(0, Ta.jsx)('ul', {
								className: 'app__navbar-links',
								children: [
									'home',
									'about',
									'work',
									'skills',
									'contact',
								].map((e) =>
									(0, Ta.jsxs)(
										'li',
										{
											className: 'app__flex p-text',
											children: [
												(0, Ta.jsx)('div', {}),
												(0, Ta.jsx)(fa.a, {
													href: '#'.concat(e),
													whileHover: { scale: 1.1 },
													className: 'app__navbar-el',
													children: e,
												}),
											],
										},
										'link-'.concat(e),
									),
								),
							}),
						],
					}),
				Pa = (e, t, n) => {
					const r = t - e;
					return ((((n - e) % r) + r) % r) + e;
				};
			const Ma = (e) =>
					(0, Ta.jsx)(fa.path, {
						fill: 'transparent',
						strokeWidth: '3',
						stroke: 'hsl(0, 0%, 18%)',
						strokeLinecap: 'round',
						...e,
					}),
				Da = (e) => {
					let { toggle: t } = e;
					return (0, Ta.jsx)('button', {
						className: 'hamburger',
						onClick: t,
						children: (0, Ta.jsxs)('svg', {
							width: '23',
							height: '23',
							viewBox: '0 0 23 23',
							children: [
								(0, Ta.jsx)(Ma, {
									variants: {
										closed: { d: 'M 2 2.5 L 20 2.5' },
										open: { d: 'M 3 16.5 L 17 2.5' },
									},
								}),
								(0, Ta.jsx)(Ma, {
									d: 'M 2 9.423 L 20 9.423',
									variants: {
										closed: { opacity: 1 },
										open: { opacity: 0 },
									},
									transition: { duration: 0.1 },
								}),
								(0, Ta.jsx)(Ma, {
									variants: {
										closed: { d: 'M 2 16.346 L 20 16.346' },
										open: { d: 'M 3 2.5 L 17 16.346' },
									},
								}),
							],
						}),
					});
				},
				Oa = {
					open: function () {
						return {
							clipPath: 'circle('.concat(
								2 *
									(arguments.length > 0 &&
									void 0 !== arguments[0]
										? arguments[0]
										: 1e3) +
									200,
								'px at 40px 40px)',
							),
							transition: {
								type: 'spring',
								stiffness: 20,
								restDelta: 2,
							},
						};
					},
					closed: {
						clipPath: 'circle(0px at 260px 40px)',
						transition: {
							delay: 0.25,
							type: 'spring',
							stiffness: 400,
							damping: 40,
						},
					},
				},
				Ra = {
					open: {
						transition: {
							staggerChildren: 0.07,
							delayChildren: 0.2,
						},
						opacity: 1,
					},
					closed: {
						transition: {
							staggerChildren: 0.05,
							staggerDirection: -1,
						},
						opacity: 0,
					},
				},
				Ba = () => {
					const [t, n] = (function () {
							for (
								var t = arguments.length,
									n = new Array(t),
									r = 0;
								r < t;
								r++
							)
								n[r] = arguments[r];
							const i = (0, e.useRef)(0),
								[o, a] = (0, e.useState)(n[i.current]);
							return [
								o,
								(0, e.useCallback)(
									(e) => {
										(i.current =
											'number' !== typeof e
												? Pa(0, n.length, i.current + 1)
												: e),
											a(n[i.current]);
									},
									[n.length, ...n],
								),
							];
						})(!1, !0),
						r = (0, e.useRef)(null),
						{ height: i } = ((t) => {
							const n = (0, e.useRef)({ width: 0, height: 0 });
							return (
								(0, e.useEffect)(() => {
									(n.current.width = t.current.offsetWidth),
										(n.current.height =
											t.current.offsetHeight);
								}, [t]),
								n.current
							);
						})(r);
					return (
						(0, e.useEffect)(() => {
							const e = document.querySelector('.hamburger'),
								t = document.querySelector('.ul-variants'),
								r = document.querySelectorAll('.items'),
								i = document.querySelector('.navbar-mobile');
							function o() {
								t.classList.toggle('active'),
									i.classList.contains('active-1')
										? setTimeout(() => {
												i.classList.toggle('active-1');
											}, 500)
										: i.classList.toggle('active-1');
							}
							function a() {
								n(), o();
							}
							return (
								e.addEventListener('click', o),
								r.forEach((e) =>
									e.addEventListener('click', a),
								),
								() => {
									e.removeEventListener('click', o),
										r.forEach((e) =>
											e.removeEventListener('click', a),
										);
								}
							);
						}, [n]),
						(0, Ta.jsxs)(fa.div, {
							initial: !1,
							animate: t ? 'open' : 'closed',
							custom: i,
							ref: r,
							className: 'navbar-mobile',
							children: [
								(0, Ta.jsx)(fa.div, {
									className: 'background',
									variants: Oa,
								}),
								(0, Ta.jsx)(fa.ul, {
									className: 'ul-variants',
									variants: Ra,
									children: [
										'home',
										'about',
										'work',
										'skills',
										'contact',
									].map((e) =>
										(0, Ta.jsx)(
											fa.li,
											{
												className: 'li-variants',
												variants: Ra,
												whileHover: { scale: 1.1 },
												whileTap: { scale: 0.95 },
												transition: { duration: 0.2 },
												children: (0, Ta.jsx)('a', {
													className: 'items',
													href: '#'.concat(e),
													children: e,
												}),
											},
											e,
										),
									),
								}),
								(0, Ta.jsx)(Da, { toggle: () => n() }),
							],
						})
					);
				},
				La = (e) => {
					let { active: t } = e;
					return (0, Ta.jsx)('div', {
						className: 'app__navigation',
						children: [
							'home',
							'text',
							'about',
							'work',
							'skills',
							'testimonial',
							'contact',
						].map((e, n) =>
							(0, Ta.jsx)(
								'a',
								{
									className: 'app__navigation-dot',
									style:
										t === e
											? { backgroundColor: '#313BAC' }
											: {},
									href: '#'.concat(e),
								},
								e + n,
							),
						),
					});
				},
				Ia = (e, t, n) =>
					function () {
						return (0, Ta.jsxs)('div', {
							id: t,
							className: 'app__container '.concat(n),
							children: [
								(0, Ta.jsx)('div', {
									className: 'app__wrapper app__flex',
									children: (0, Ta.jsx)(e, {}),
								}),
								(0, Ta.jsx)(La, { active: t }),
							],
						});
					},
				Fa = {
					hidden: { y: 100, opacity: 0 },
					show: {
						opacity: 1,
						y: 0,
						transition: { duration: 0.5, type: 'tween' },
					},
				},
				ja = (e, t) =>
					function () {
						return (0, Ta.jsx)(fa.div, {
							whileInView: 'show',
							initial: 'hidden',
							variants: Fa,
							className: ''.concat(t, ' app__flex'),
							viewport: { once: !0, amount: 0.1 },
							children: (0, Ta.jsx)(e, {}),
						});
					},
				Na = {
					timeout:
						'undefined' !== typeof navigator &&
						'ReactNative' === navigator.product
							? 6e4
							: 12e4,
				};
			function za(e) {
				const t =
						'string' === typeof e
							? Object.assign({ url: e }, Na)
							: Object.assign({}, Na, e),
					n = new URL(t.url, 'http://localhost');
				if (((t.timeout = Va(t.timeout)), t.query))
					for (const [r, i] of Object.entries(t.query))
						if (void 0 !== i)
							if (Array.isArray(i))
								for (const e of i) n.searchParams.append(r, e);
							else n.searchParams.append(r, i);
				return (
					(t.method =
						t.body && !t.method
							? 'POST'
							: (t.method || 'GET').toUpperCase()),
					(t.url =
						'http://localhost' === n.origin
							? ''.concat(n.pathname, '?').concat(n.searchParams)
							: n.toString()),
					t
				);
			}
			function Va(e) {
				if (!1 === e || 0 === e) return !1;
				if (e.connect || e.socket) return e;
				const t = Number(e);
				return isNaN(t) ? Va(Na.timeout) : { connect: t, socket: t };
			}
			const Ua = /^https?:\/\//i;
			function Ya(e) {
				if (!Ua.test(e.url))
					throw new Error('"'.concat(e.url, '" is not a valid URL'));
			}
			var Qa = n(913),
				Ha = (e) =>
					function (t, n) {
						const r = 'onError' === t;
						let i = n;
						for (
							var o = arguments.length,
								a = new Array(o > 2 ? o - 2 : 0),
								s = 2;
							s < o;
							s++
						)
							a[s - 2] = arguments[s];
						for (let l = 0; l < e[t].length; l++) {
							if (((i = (0, e[t][l])(i, ...a)), r && !i)) break;
						}
						return i;
					};
			const Ga = ['request', 'response', 'progress', 'error', 'abort'],
				Wa = [
					'processOptions',
					'validateOptions',
					'interceptRequest',
					'finalizeOptions',
					'onRequest',
					'onResponse',
					'onError',
					'onReturn',
					'onHeaders',
				];
			function Xa(e, t) {
				const n = [],
					r = Wa.reduce((e, t) => ((e[t] = e[t] || []), e), {
						processOptions: [za],
						validateOptions: [Ya],
					});
				function i(e) {
					const n = Ga.reduce(
							(e, t) => (
								(e[t] = (function () {
									const e = Object.create(null);
									let t = 0;
									return {
										publish: function (t) {
											for (const n in e) e[n](t);
										},
										subscribe: function (n) {
											const r = t++;
											return (
												(e[r] = n),
												function () {
													delete e[r];
												}
											);
										},
									};
								})()),
								e
							),
							{},
						),
						i = Ha(r),
						o = i('processOptions', e);
					i('validateOptions', o);
					const a = { options: o, channels: n, applyMiddleware: i };
					let s = null;
					const l = n.request.subscribe((e) => {
						s = t(e, (t, r) =>
							(function (e, r, o) {
								let a = e,
									s = r;
								if (!a)
									try {
										s = i('onResponse', r, o);
									} catch (t) {
										(s = null), (a = t);
									}
								(a = a && i('onError', a, o)),
									a
										? n.error.publish(a)
										: s && n.response.publish(s);
							})(t, r, e),
						);
					});
					n.abort.subscribe(() => {
						l(), s && s.abort();
					});
					const u = i('onReturn', n, a);
					return u === n && n.request.publish(a), u;
				}
				return (
					(i.use = function (e) {
						if (!e)
							throw new Error(
								'Tried to add middleware that resolved to falsey value',
							);
						if ('function' === typeof e)
							throw new Error(
								'Tried to add middleware that was a function. It probably expects you to pass options to it.',
							);
						if (e.onReturn && r.onReturn.length > 0)
							throw new Error(
								'Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event',
							);
						return (
							Wa.forEach((t) => {
								e[t] && r[t].push(e[t]);
							}),
							n.push(e),
							i
						);
					}),
					(i.clone = function () {
						return Xa(n, t);
					}),
					e.forEach(i.use),
					i
				);
			}
			var qa,
				Ja,
				Ka,
				Za,
				$a,
				es = (e, t, n) => {
					if (!t.has(e)) throw TypeError('Cannot ' + n);
				},
				ts = (e, t, n) => (
					es(e, t, 'read from private field'),
					n ? n.call(e) : t.get(e)
				),
				ns = (e, t, n) => {
					if (t.has(e))
						throw TypeError(
							'Cannot add the same private member more than once',
						);
					t instanceof WeakSet ? t.add(e) : t.set(e, n);
				},
				rs = (e, t, n, r) => (
					es(e, t, 'write to private field'),
					r ? r.call(e, n) : t.set(e, n),
					n
				);
			(qa = new WeakMap()),
				(Ja = new WeakMap()),
				(Ka = new WeakMap()),
				(Za = new WeakMap()),
				($a = new WeakMap());
			const is = 'function' === typeof XMLHttpRequest ? 'xhr' : 'fetch',
				os =
					'xhr' === is
						? XMLHttpRequest
						: class {
								constructor() {
									(this.readyState = 0),
										(this.responseType = ''),
										ns(this, qa, void 0),
										ns(this, Ja, void 0),
										ns(this, Ka, void 0),
										ns(this, Za, {}),
										ns(this, $a, void 0);
								}
								open(e, t, n) {
									rs(this, qa, e),
										rs(this, Ja, t),
										rs(this, Ka, ''),
										(this.readyState = 1),
										this.onreadystatechange(),
										rs(this, $a, void 0);
								}
								abort() {
									ts(this, $a) && ts(this, $a).abort();
								}
								getAllResponseHeaders() {
									return ts(this, Ka);
								}
								setRequestHeader(e, t) {
									ts(this, Za)[e] = t;
								}
								send(e) {
									const t =
											'arraybuffer' !== this.responseType,
										n = {
											method: ts(this, qa),
											headers: ts(this, Za),
											body: e,
										};
									'function' === typeof AbortController &&
										(rs(this, $a, new AbortController()),
										'undefined' !== typeof EventTarget &&
											ts(this, $a).signal instanceof
												EventTarget &&
											(n.signal = ts(this, $a).signal)),
										'undefined' !== typeof document &&
											(n.credentials = this
												.withCredentials
												? 'include'
												: 'omit'),
										fetch(ts(this, Ja), n)
											.then(
												(e) => (
													e.headers.forEach(
														(e, t) => {
															rs(
																this,
																Ka,
																ts(this, Ka) +
																	''
																		.concat(
																			t,
																			': ',
																		)
																		.concat(
																			e,
																			'\r\n',
																		),
															);
														},
													),
													(this.status = e.status),
													(this.statusText =
														e.statusText),
													(this.readyState = 3),
													t
														? e.text()
														: e.arrayBuffer()
												),
											)
											.then((e) => {
												'string' === typeof e
													? (this.responseText = e)
													: (this.response = e),
													(this.readyState = 4),
													this.onreadystatechange();
											})
											.catch((e) => {
												var t;
												'AbortError' !== e.name
													? null ==
															(t =
																this.onerror) ||
														t.call(this, e)
													: this.onabort();
											});
								}
							};
			var as = (e, t) => {
				const n = e.options,
					r = e.applyMiddleware('finalizeOptions', n),
					i = {},
					o = e.applyMiddleware('interceptRequest', void 0, {
						adapter: is,
						context: e,
					});
				if (o) {
					const e = setTimeout(t, 0, null, o);
					return { abort: () => clearTimeout(e) };
				}
				let a = new os();
				const s = r.headers,
					l = r.timeout;
				let u = !1,
					c = !1,
					d = !1;
				if (
					((a.onerror = p),
					(a.ontimeout = p),
					(a.onabort = () => {
						h(!0), (u = !0);
					}),
					(a.onreadystatechange = () => {
						!(function () {
							if (!l) return;
							h(),
								(i.socket = setTimeout(
									() => f('ESOCKETTIMEDOUT'),
									l.socket,
								));
						})(),
							u ||
								4 !== a.readyState ||
								(0 !== a.status &&
									(function () {
										if (u || c || d) return;
										if (0 === a.status)
											return void p(
												new Error('Unknown XHR error'),
											);
										h(),
											(c = !0),
											t(null, {
												body:
													a.response ||
													('' === a.responseType ||
													'text' === a.responseType
														? a.responseText
														: ''),
												url: r.url,
												method: r.method,
												headers: Qa(
													a.getAllResponseHeaders(),
												),
												statusCode: a.status,
												statusMessage: a.statusText,
											});
									})());
					}),
					a.open(r.method, r.url, !0),
					(a.withCredentials = !!r.withCredentials),
					s && a.setRequestHeader)
				)
					for (const m in s)
						s.hasOwnProperty(m) && a.setRequestHeader(m, s[m]);
				return (
					r.rawBody && (a.responseType = 'arraybuffer'),
					e.applyMiddleware('onRequest', {
						options: r,
						adapter: is,
						request: a,
						context: e,
					}),
					a.send(r.body || null),
					l &&
						(i.connect = setTimeout(
							() => f('ETIMEDOUT'),
							l.connect,
						)),
					{
						abort: function () {
							(u = !0), a && a.abort();
						},
					}
				);
				function f(t) {
					(d = !0), a.abort();
					const n = new Error(
						'ESOCKETTIMEDOUT' === t
							? 'Socket timed out on request to '.concat(r.url)
							: 'Connection timed out on request to '.concat(
									r.url,
								),
					);
					(n.code = t), e.channels.error.publish(n);
				}
				function h(e) {
					(e || u || (a.readyState >= 2 && i.connect)) &&
						clearTimeout(i.connect),
						i.socket && clearTimeout(i.socket);
				}
				function p(e) {
					if (c) return;
					h(!0), (c = !0), (a = null);
					const n =
						e ||
						new Error(
							'Network error while attempting to reach '.concat(
								r.url,
							),
						);
					(n.isNetworkError = !0), (n.request = r), t(n);
				}
			};
			const ss = function () {
				return Xa(
					arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: [],
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: as,
				);
			};
			n(392);
			function ls(e) {
				return '[object Object]' === Object.prototype.toString.call(e);
			}
			Object.prototype.hasOwnProperty;
			class us extends Error {
				constructor(e, t) {
					super();
					const n =
						e.url.length > 400
							? ''.concat(e.url.slice(0, 399), '\u2026')
							: e.url;
					let r = ''
						.concat(e.method, '-request to ')
						.concat(n, ' resulted in ');
					'HTTP '.concat(e.statusCode, ' ').concat(e.statusMessage),
						(this.message = r.trim()),
						(this.response = e),
						(this.request = t.options);
				}
			}
			const cs =
					'undefined' === typeof Buffer
						? () => !1
						: (e) => Buffer.isBuffer(e),
				ds = ['boolean', 'string', 'number'];
			function fs() {
				return {
					processOptions: (e) => {
						const t = e.body;
						if (!t) return e;
						return !('function' === typeof t.pipe) &&
							!cs(t) &&
							(-1 !== ds.indexOf(typeof t) ||
								Array.isArray(t) ||
								(function (e) {
									var t, n;
									return (
										!1 !== ls(e) &&
										(void 0 === (t = e.constructor) ||
											(!1 !== ls((n = t.prototype)) &&
												!1 !==
													n.hasOwnProperty(
														'isPrototypeOf',
													)))
									);
								})(t))
							? Object.assign({}, e, {
									body: JSON.stringify(e.body),
									headers: Object.assign({}, e.headers, {
										'Content-Type': 'application/json',
									}),
								})
							: e;
					},
				};
			}
			function hs(e) {
				return {
					onResponse: (n) => {
						const r = n.headers['content-type'] || '',
							i =
								(e && e.force) ||
								-1 !== r.indexOf('application/json');
						return n.body && r && i
							? Object.assign({}, n, { body: t(n.body) })
							: n;
					},
					processOptions: (e) =>
						Object.assign({}, e, {
							headers: Object.assign(
								{ Accept: 'application/json' },
								e.headers,
							),
						}),
				};
				function t(e) {
					try {
						return JSON.parse(e);
					} catch (t) {
						throw (
							((t.message =
								'Failed to parsed response body as JSON: '.concat(
									t.message,
								)),
							t)
						);
					}
				}
			}
			let ps;
			ps =
				'undefined' !== typeof globalThis
					? globalThis
					: 'undefined' !== typeof window
						? window
						: 'undefined' !== typeof global
							? global
							: 'undefined' !== typeof self
								? self
								: {};
			var ms = ps;
			function gs() {
				const e =
					(arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: {}
					).implementation || ms.Observable;
				if (!e)
					throw new Error(
						'`Observable` is not available in global scope, and no implementation was passed',
					);
				return {
					onReturn: (t, n) =>
						new e(
							(e) => (
								t.error.subscribe((t) => e.error(t)),
								t.progress.subscribe((t) =>
									e.next(
										Object.assign({ type: 'progress' }, t),
									),
								),
								t.response.subscribe((t) => {
									e.next(
										Object.assign({ type: 'response' }, t),
									),
										e.complete();
								}),
								t.request.publish(n),
								() => t.abort.publish()
							),
						),
				};
			}
			const vs = function () {
				let e =
					arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: {};
				const t = e.implementation || Promise;
				if (!t)
					throw new Error(
						'`Promise` is not available in global scope, and no implementation was passed',
					);
				return {
					onReturn: (n, r) =>
						new t((t, i) => {
							const o = r.options.cancelToken;
							o &&
								o.promise.then((e) => {
									n.abort.publish(e), i(e);
								}),
								n.error.subscribe(i),
								n.response.subscribe((n) => {
									t(e.onlyBody ? n.body : n);
								}),
								setTimeout(() => {
									try {
										n.request.publish(r);
									} catch (e) {
										i(e);
									}
								}, 0);
						}),
				};
			};
			class As {
				constructor(e) {
					(this.__CANCEL__ = !0), (this.message = e);
				}
				toString() {
					return 'Cancel'.concat(
						this.message ? ': '.concat(this.message) : '',
					);
				}
			}
			const ys = class {
				constructor(e) {
					if ('function' !== typeof e)
						throw new TypeError('executor must be a function.');
					let t = null;
					(this.promise = new Promise((e) => {
						t = e;
					})),
						e((e) => {
							this.reason ||
								((this.reason = new As(e)), t(this.reason));
						});
				}
			};
			let ws = ys;
			ws.source = () => {
				let e;
				return {
					token: new ys((t) => {
						e = t;
					}),
					cancel: e,
				};
			};
			(vs.Cancel = As),
				(vs.CancelToken = ws),
				(vs.isCancel = (e) =>
					!(!e || !(null == e ? void 0 : e.__CANCEL__)));
			var bs = (e, t, n) =>
				('GET' === n.method || 'HEAD' === n.method) &&
				(e.isNetworkError || !1);
			function xs(e) {
				return 100 * Math.pow(2, e) + 100 * Math.random();
			}
			(function () {
				return ((e) => {
					const t = e.maxRetries || 5,
						n = e.retryDelay || xs,
						r = e.shouldRetry;
					return {
						onError: (e, i) => {
							const o = i.options,
								a = o.maxRetries || t,
								s = o.shouldRetry || r,
								l = o.attemptNumber || 0;
							if (
								null !== (u = o.body) &&
								'object' === typeof u &&
								'function' === typeof u.pipe
							)
								return e;
							var u;
							if (!s(e, l, o) || l >= a) return e;
							const c = Object.assign({}, i, {
								options: Object.assign({}, o, {
									attemptNumber: l + 1,
								}),
							});
							return (
								setTimeout(
									() => i.channels.request.publish(c),
									n(l),
								),
								null
							);
						},
					};
				})({
					shouldRetry: bs,
					...(arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: {}),
				});
			}).shouldRetry = bs;
			var Es = function (e, t) {
				return (
					(Es =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t;
							}) ||
						function (e, t) {
							for (var n in t)
								Object.prototype.hasOwnProperty.call(t, n) &&
									(e[n] = t[n]);
						}),
					Es(e, t)
				);
			};
			function Cs(e, t) {
				if ('function' !== typeof t && null !== t)
					throw new TypeError(
						'Class extends value ' +
							String(t) +
							' is not a constructor or null',
					);
				function n() {
					this.constructor = e;
				}
				Es(e, t),
					(e.prototype =
						null === t
							? Object.create(t)
							: ((n.prototype = t.prototype), new n()));
			}
			Object.create;
			function ks(e) {
				var t = 'function' === typeof Symbol && Symbol.iterator,
					n = t && e[t],
					r = 0;
				if (n) return n.call(e);
				if (e && 'number' === typeof e.length)
					return {
						next: function () {
							return (
								e && r >= e.length && (e = void 0),
								{ value: e && e[r++], done: !e }
							);
						},
					};
				throw new TypeError(
					t
						? 'Object is not iterable.'
						: 'Symbol.iterator is not defined.',
				);
			}
			function Ss(e, t) {
				var n = 'function' === typeof Symbol && e[Symbol.iterator];
				if (!n) return e;
				var r,
					i,
					o = n.call(e),
					a = [];
				try {
					for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
						a.push(r.value);
				} catch (s) {
					i = { error: s };
				} finally {
					try {
						r && !r.done && (n = o.return) && n.call(o);
					} finally {
						if (i) throw i.error;
					}
				}
				return a;
			}
			function Ts(e, t, n) {
				if (n || 2 === arguments.length)
					for (var r, i = 0, o = t.length; i < o; i++)
						(!r && i in t) ||
							(r || (r = Array.prototype.slice.call(t, 0, i)),
							(r[i] = t[i]));
				return e.concat(r || Array.prototype.slice.call(t));
			}
			Object.create;
			function _s(e) {
				return 'function' === typeof e;
			}
			function Ps(e) {
				var t = e(function (e) {
					Error.call(e), (e.stack = new Error().stack);
				});
				return (
					(t.prototype = Object.create(Error.prototype)),
					(t.prototype.constructor = t),
					t
				);
			}
			var Ms = Ps(function (e) {
				return function (t) {
					e(this),
						(this.message = t
							? t.length +
								' errors occurred during unsubscription:\n' +
								t
									.map(function (e, t) {
										return t + 1 + ') ' + e.toString();
									})
									.join('\n  ')
							: ''),
						(this.name = 'UnsubscriptionError'),
						(this.errors = t);
				};
			});
			function Ds(e, t) {
				if (e) {
					var n = e.indexOf(t);
					0 <= n && e.splice(n, 1);
				}
			}
			var Os = (function () {
				function e(e) {
					(this.initialTeardown = e),
						(this.closed = !1),
						(this._parentage = null),
						(this._finalizers = null);
				}
				return (
					(e.prototype.unsubscribe = function () {
						var e, t, n, r, i;
						if (!this.closed) {
							this.closed = !0;
							var o = this._parentage;
							if (o)
								if (
									((this._parentage = null), Array.isArray(o))
								)
									try {
										for (
											var a = ks(o), s = a.next();
											!s.done;
											s = a.next()
										) {
											s.value.remove(this);
										}
									} catch (h) {
										e = { error: h };
									} finally {
										try {
											s &&
												!s.done &&
												(t = a.return) &&
												t.call(a);
										} finally {
											if (e) throw e.error;
										}
									}
								else o.remove(this);
							var l = this.initialTeardown;
							if (_s(l))
								try {
									l();
								} catch (p) {
									i = p instanceof Ms ? p.errors : [p];
								}
							var u = this._finalizers;
							if (u) {
								this._finalizers = null;
								try {
									for (
										var c = ks(u), d = c.next();
										!d.done;
										d = c.next()
									) {
										var f = d.value;
										try {
											Bs(f);
										} catch (m) {
											(i =
												null !== i && void 0 !== i
													? i
													: []),
												m instanceof Ms
													? (i = Ts(
															Ts([], Ss(i)),
															Ss(m.errors),
														))
													: i.push(m);
										}
									}
								} catch (g) {
									n = { error: g };
								} finally {
									try {
										d &&
											!d.done &&
											(r = c.return) &&
											r.call(c);
									} finally {
										if (n) throw n.error;
									}
								}
							}
							if (i) throw new Ms(i);
						}
					}),
					(e.prototype.add = function (t) {
						var n;
						if (t && t !== this)
							if (this.closed) Bs(t);
							else {
								if (t instanceof e) {
									if (t.closed || t._hasParent(this)) return;
									t._addParent(this);
								}
								(this._finalizers =
									null !== (n = this._finalizers) &&
									void 0 !== n
										? n
										: []).push(t);
							}
					}),
					(e.prototype._hasParent = function (e) {
						var t = this._parentage;
						return t === e || (Array.isArray(t) && t.includes(e));
					}),
					(e.prototype._addParent = function (e) {
						var t = this._parentage;
						this._parentage = Array.isArray(t)
							? (t.push(e), t)
							: t
								? [t, e]
								: e;
					}),
					(e.prototype._removeParent = function (e) {
						var t = this._parentage;
						t === e
							? (this._parentage = null)
							: Array.isArray(t) && Ds(t, e);
					}),
					(e.prototype.remove = function (t) {
						var n = this._finalizers;
						n && Ds(n, t), t instanceof e && t._removeParent(this);
					}),
					(e.EMPTY = (function () {
						var t = new e();
						return (t.closed = !0), t;
					})()),
					e
				);
			})();
			Os.EMPTY;
			function Rs(e) {
				return (
					e instanceof Os ||
					(e &&
						'closed' in e &&
						_s(e.remove) &&
						_s(e.add) &&
						_s(e.unsubscribe))
				);
			}
			function Bs(e) {
				_s(e) ? e() : e.unsubscribe();
			}
			var Ls = {
					onUnhandledError: null,
					onStoppedNotification: null,
					Promise: void 0,
					useDeprecatedSynchronousErrorHandling: !1,
					useDeprecatedNextContext: !1,
				},
				Is = {
					setTimeout: function (e, t) {
						for (var n = [], r = 2; r < arguments.length; r++)
							n[r - 2] = arguments[r];
						var i = Is.delegate;
						return (
							null === i || void 0 === i ? void 0 : i.setTimeout
						)
							? i.setTimeout.apply(i, Ts([e, t], Ss(n)))
							: setTimeout.apply(void 0, Ts([e, t], Ss(n)));
					},
					clearTimeout: function (e) {
						var t = Is.delegate;
						return (
							(null === t || void 0 === t
								? void 0
								: t.clearTimeout) || clearTimeout
						)(e);
					},
					delegate: void 0,
				};
			function Fs() {}
			var js = Ns('C', void 0, void 0);
			function Ns(e, t, n) {
				return { kind: e, value: t, error: n };
			}
			var zs = null;
			var Vs = (function (e) {
					function t(t) {
						var n = e.call(this) || this;
						return (
							(n.isStopped = !1),
							t
								? ((n.destination = t), Rs(t) && t.add(n))
								: (n.destination = Xs),
							n
						);
					}
					return (
						Cs(t, e),
						(t.create = function (e, t, n) {
							return new Hs(e, t, n);
						}),
						(t.prototype.next = function (e) {
							this.isStopped
								? Ws(
										(function (e) {
											return Ns('N', e, void 0);
										})(e),
										this,
									)
								: this._next(e);
						}),
						(t.prototype.error = function (e) {
							this.isStopped
								? Ws(Ns('E', void 0, e), this)
								: ((this.isStopped = !0), this._error(e));
						}),
						(t.prototype.complete = function () {
							this.isStopped
								? Ws(js, this)
								: ((this.isStopped = !0), this._complete());
						}),
						(t.prototype.unsubscribe = function () {
							this.closed ||
								((this.isStopped = !0),
								e.prototype.unsubscribe.call(this),
								(this.destination = null));
						}),
						(t.prototype._next = function (e) {
							this.destination.next(e);
						}),
						(t.prototype._error = function (e) {
							try {
								this.destination.error(e);
							} finally {
								this.unsubscribe();
							}
						}),
						(t.prototype._complete = function () {
							try {
								this.destination.complete();
							} finally {
								this.unsubscribe();
							}
						}),
						t
					);
				})(Os),
				Us = Function.prototype.bind;
			function Ys(e, t) {
				return Us.call(e, t);
			}
			var Qs = (function () {
					function e(e) {
						this.partialObserver = e;
					}
					return (
						(e.prototype.next = function (e) {
							var t = this.partialObserver;
							if (t.next)
								try {
									t.next(e);
								} catch (n) {
									Gs(n);
								}
						}),
						(e.prototype.error = function (e) {
							var t = this.partialObserver;
							if (t.error)
								try {
									t.error(e);
								} catch (n) {
									Gs(n);
								}
							else Gs(e);
						}),
						(e.prototype.complete = function () {
							var e = this.partialObserver;
							if (e.complete)
								try {
									e.complete();
								} catch (t) {
									Gs(t);
								}
						}),
						e
					);
				})(),
				Hs = (function (e) {
					function t(t, n, r) {
						var i,
							o,
							a = e.call(this) || this;
						_s(t) || !t
							? (i = {
									next:
										null !== t && void 0 !== t ? t : void 0,
									error:
										null !== n && void 0 !== n ? n : void 0,
									complete:
										null !== r && void 0 !== r ? r : void 0,
								})
							: a && Ls.useDeprecatedNextContext
								? (((o = Object.create(t)).unsubscribe =
										function () {
											return a.unsubscribe();
										}),
									(i = {
										next: t.next && Ys(t.next, o),
										error: t.error && Ys(t.error, o),
										complete:
											t.complete && Ys(t.complete, o),
									}))
								: (i = t);
						return (a.destination = new Qs(i)), a;
					}
					return Cs(t, e), t;
				})(Vs);
			function Gs(e) {
				var t;
				Ls.useDeprecatedSynchronousErrorHandling
					? ((t = e),
						Ls.useDeprecatedSynchronousErrorHandling &&
							zs &&
							((zs.errorThrown = !0), (zs.error = t)))
					: (function (e) {
							Is.setTimeout(function () {
								var t = Ls.onUnhandledError;
								if (!t) throw e;
								t(e);
							});
						})(e);
			}
			function Ws(e, t) {
				var n = Ls.onStoppedNotification;
				n &&
					Is.setTimeout(function () {
						return n(e, t);
					});
			}
			var Xs = {
					closed: !0,
					next: Fs,
					error: function (e) {
						throw e;
					},
					complete: Fs,
				},
				qs =
					('function' === typeof Symbol && Symbol.observable) ||
					'@@observable';
			function Js(e) {
				return e;
			}
			function Ks(e) {
				return 0 === e.length
					? Js
					: 1 === e.length
						? e[0]
						: function (t) {
								return e.reduce(function (e, t) {
									return t(e);
								}, t);
							};
			}
			var Zs = (function () {
				function e(e) {
					e && (this._subscribe = e);
				}
				return (
					(e.prototype.lift = function (t) {
						var n = new e();
						return (n.source = this), (n.operator = t), n;
					}),
					(e.prototype.subscribe = function (e, t, n) {
						var r,
							i = this,
							o =
								((r = e) && r instanceof Vs) ||
								((function (e) {
									return (
										e &&
										_s(e.next) &&
										_s(e.error) &&
										_s(e.complete)
									);
								})(r) &&
									Rs(r))
									? e
									: new Hs(e, t, n);
						return (
							(function (e) {
								if (Ls.useDeprecatedSynchronousErrorHandling) {
									var t = !zs;
									if (
										(t &&
											(zs = {
												errorThrown: !1,
												error: null,
											}),
										e(),
										t)
									) {
										var n = zs,
											r = n.errorThrown,
											i = n.error;
										if (((zs = null), r)) throw i;
									}
								} else e();
							})(function () {
								var e = i,
									t = e.operator,
									n = e.source;
								o.add(
									t
										? t.call(o, n)
										: n
											? i._subscribe(o)
											: i._trySubscribe(o),
								);
							}),
							o
						);
					}),
					(e.prototype._trySubscribe = function (e) {
						try {
							return this._subscribe(e);
						} catch (t) {
							e.error(t);
						}
					}),
					(e.prototype.forEach = function (e, t) {
						var n = this;
						return new (t = $s(t))(function (t, r) {
							var i = new Hs({
								next: function (t) {
									try {
										e(t);
									} catch (n) {
										r(n), i.unsubscribe();
									}
								},
								error: r,
								complete: t,
							});
							n.subscribe(i);
						});
					}),
					(e.prototype._subscribe = function (e) {
						var t;
						return null === (t = this.source) || void 0 === t
							? void 0
							: t.subscribe(e);
					}),
					(e.prototype[qs] = function () {
						return this;
					}),
					(e.prototype.pipe = function () {
						for (var e = [], t = 0; t < arguments.length; t++)
							e[t] = arguments[t];
						return Ks(e)(this);
					}),
					(e.prototype.toPromise = function (e) {
						var t = this;
						return new (e = $s(e))(function (e, n) {
							var r;
							t.subscribe(
								function (e) {
									return (r = e);
								},
								function (e) {
									return n(e);
								},
								function () {
									return e(r);
								},
							);
						});
					}),
					(e.create = function (t) {
						return new e(t);
					}),
					e
				);
			})();
			function $s(e) {
				var t;
				return null !==
					(t = null !== e && void 0 !== e ? e : Ls.Promise) &&
					void 0 !== t
					? t
					: Promise;
			}
			var el = Ps(function (e) {
				return function () {
					e(this),
						(this.name = 'EmptyError'),
						(this.message = 'no elements in sequence');
				};
			});
			function tl(e, t) {
				var n = 'object' === typeof t;
				return new Promise(function (r, i) {
					var o,
						a = !1;
					e.subscribe({
						next: function (e) {
							(o = e), (a = !0);
						},
						error: i,
						complete: function () {
							a ? r(o) : n ? r(t.defaultValue) : i(new el());
						},
					});
				});
			}
			function nl(e) {
				return function (t) {
					if (
						(function (e) {
							return _s(
								null === e || void 0 === e ? void 0 : e.lift,
							);
						})(t)
					)
						return t.lift(function (t) {
							try {
								return e(t, this);
							} catch (n) {
								this.error(n);
							}
						});
					throw new TypeError(
						'Unable to lift unknown Observable type',
					);
				};
			}
			function rl(e, t, n, r, i) {
				return new il(e, t, n, r, i);
			}
			var il = (function (e) {
				function t(t, n, r, i, o, a) {
					var s = e.call(this, t) || this;
					return (
						(s.onFinalize = o),
						(s.shouldUnsubscribe = a),
						(s._next = n
							? function (e) {
									try {
										n(e);
									} catch (r) {
										t.error(r);
									}
								}
							: e.prototype._next),
						(s._error = i
							? function (e) {
									try {
										i(e);
									} catch (e) {
										t.error(e);
									} finally {
										this.unsubscribe();
									}
								}
							: e.prototype._error),
						(s._complete = r
							? function () {
									try {
										r();
									} catch (e) {
										t.error(e);
									} finally {
										this.unsubscribe();
									}
								}
							: e.prototype._complete),
						s
					);
				}
				return (
					Cs(t, e),
					(t.prototype.unsubscribe = function () {
						var t;
						if (
							!this.shouldUnsubscribe ||
							this.shouldUnsubscribe()
						) {
							var n = this.closed;
							e.prototype.unsubscribe.call(this),
								!n &&
									(null === (t = this.onFinalize) ||
										void 0 === t ||
										t.call(this));
						}
					}),
					t
				);
			})(Vs);
			function ol(e, t) {
				return nl(function (n, r) {
					var i = 0;
					n.subscribe(
						rl(r, function (n) {
							r.next(e.call(t, n, i++));
						}),
					);
				});
			}
			function al(e, t) {
				return nl(function (n, r) {
					var i = 0;
					n.subscribe(
						rl(r, function (n) {
							return e.call(t, n, i++) && r.next(n);
						}),
					);
				});
			}
			const sl = 5;
			class ll extends Error {
				constructor(e) {
					const t = cl(e);
					super(t.message),
						(this.statusCode = 400),
						Object.assign(this, t);
				}
			}
			class ul extends Error {
				constructor(e) {
					const t = cl(e);
					super(t.message),
						(this.statusCode = 500),
						Object.assign(this, t);
				}
			}
			function cl(e) {
				const t = e.body,
					n = {
						response: e,
						statusCode: e.statusCode,
						responseBody: fl(t, e),
						message: '',
						details: void 0,
					};
				if (t.error && t.message)
					return (
						(n.message = ''
							.concat(t.error, ' - ')
							.concat(t.message)),
						n
					);
				if (
					(function (e) {
						return (
							dl(e) &&
							dl(e.error) &&
							'mutationError' === e.error.type &&
							'string' === typeof e.error.description
						);
					})(t)
				) {
					const e = t.error.items || [],
						r = e
							.slice(0, sl)
							.map((e) => {
								var t;
								return null == (t = e.error)
									? void 0
									: t.description;
							})
							.filter(Boolean);
					let i = r.length ? ':\n- '.concat(r.join('\n- ')) : '';
					return (
						e.length > sl &&
							(i += '\n...and '.concat(e.length - sl, ' more')),
						(n.message = ''.concat(t.error.description).concat(i)),
						(n.details = t.error),
						n
					);
				}
				return t.error && t.error.description
					? ((n.message = t.error.description),
						(n.details = t.error),
						n)
					: ((n.message =
							t.error ||
							t.message ||
							(function (e) {
								const t = e.statusMessage
									? ' '.concat(e.statusMessage)
									: '';
								return ''
									.concat(e.method, '-request to ')
									.concat(e.url, ' resulted in HTTP ')
									.concat(e.statusCode)
									.concat(t);
							})(e)),
						n);
			}
			function dl(e) {
				return 'object' === typeof e && null !== e && !Array.isArray(e);
			}
			function fl(e, t) {
				return -1 !==
					(t.headers['content-type'] || '')
						.toLowerCase()
						.indexOf('application/json')
					? JSON.stringify(e, null, 2)
					: e;
			}
			const hl = {
					onResponse: (e) => {
						if (e.statusCode >= 500) throw new ul(e);
						if (e.statusCode >= 400) throw new ll(e);
						return e;
					},
				},
				pl = {
					onResponse: (e) => {
						const t = e.headers['x-sanity-warning'];
						return (
							(Array.isArray(t) ? t : [t])
								.filter(Boolean)
								.forEach((e) => console.warn(e)),
							e
						);
					},
				};
			const ml = 'X-Sanity-Project-ID';
			function gl(e) {
				if ('string' === typeof e || Array.isArray(e)) return { id: e };
				if (
					'object' === typeof e &&
					null !== e &&
					'query' in e &&
					'string' === typeof e.query
				)
					return 'params' in e &&
						'object' === typeof e.params &&
						null !== e.params
						? { query: e.query, params: e.params }
						: { query: e.query };
				const t = [
					'* Document ID (<docId>)',
					'* Array of document IDs',
					'* Object containing `query`',
				].join('\n');
				throw new Error(
					'Unknown selection - must be one of:\n\n'.concat(t),
				);
			}
			const vl = ['image', 'file'],
				Al = ['before', 'after', 'replace'],
				yl = (e) => {
					if (
						!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(
							e,
						)
					)
						throw new Error(
							'Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters',
						);
				},
				wl = (e) => {
					if (-1 === vl.indexOf(e))
						throw new Error(
							'Invalid asset type: '
								.concat(e, '. Must be one of ')
								.concat(vl.join(', ')),
						);
				},
				bl = (e, t) => {
					if (null === t || 'object' !== typeof t || Array.isArray(t))
						throw new Error(
							''.concat(e, '() takes an object of properties'),
						);
				},
				xl = (e, t) => {
					if (
						'string' !== typeof t ||
						!/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(t) ||
						t.includes('..')
					)
						throw new Error(
							''
								.concat(e, '(): "')
								.concat(t, '" is not a valid document ID'),
						);
				},
				El = (e, t) => {
					if (!t._id)
						throw new Error(
							''.concat(
								e,
								'() requires that the document contains an ID ("_id" property)',
							),
						);
					xl(e, t._id);
				},
				Cl = (e) => {
					if (!e.dataset)
						throw new Error(
							'`dataset` must be provided to perform queries',
						);
					return e.dataset || '';
				},
				kl = (e) => {
					if (
						'string' !== typeof e ||
						!/^[a-z0-9._-]{1,75}$/i.test(e)
					)
						throw new Error(
							'Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.',
						);
					return e;
				},
				Sl = (e) => {
					let { query: t, params: n = {}, options: r = {} } = e;
					const i = new URLSearchParams(),
						{ tag: o, ...a } = r;
					o && i.set('tag', o), i.set('query', t);
					for (const [s, l] of Object.entries(n))
						i.set('$'.concat(s), JSON.stringify(l));
					for (const [s, l] of Object.entries(a))
						l && i.set(s, ''.concat(l));
					return '?'.concat(i);
				};
			var Tl,
				_l,
				Pl = (e, t, n) => {
					if (!t.has(e)) throw TypeError('Cannot ' + n);
				},
				Ml = (e, t, n) => (
					Pl(e, t, 'read from private field'),
					n ? n.call(e) : t.get(e)
				),
				Dl = (e, t, n) => {
					if (t.has(e))
						throw TypeError(
							'Cannot add the same private member more than once',
						);
					t instanceof WeakSet ? t.add(e) : t.set(e, n);
				},
				Ol = (e, t, n, r) => (
					Pl(e, t, 'write to private field'),
					r ? r.call(e, n) : t.set(e, n),
					n
				);
			class Rl {
				constructor(e) {
					let t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: {};
					(this.selection = e), (this.operations = t);
				}
				set(e) {
					return this._assign('set', e);
				}
				setIfMissing(e) {
					return this._assign('setIfMissing', e);
				}
				diffMatchPatch(e) {
					return (
						bl('diffMatchPatch', e),
						this._assign('diffMatchPatch', e)
					);
				}
				unset(e) {
					if (!Array.isArray(e))
						throw new Error(
							'unset(attrs) takes an array of attributes to unset, non-array given',
						);
					return (
						(this.operations = Object.assign({}, this.operations, {
							unset: e,
						})),
						this
					);
				}
				inc(e) {
					return this._assign('inc', e);
				}
				dec(e) {
					return this._assign('dec', e);
				}
				insert(e, t, n) {
					return (
						((e, t, n) => {
							const r = 'insert(at, selector, items)';
							if (-1 === Al.indexOf(e)) {
								const e = Al.map((e) =>
									'"'.concat(e, '"'),
								).join(', ');
								throw new Error(
									''
										.concat(
											r,
											' takes an "at"-argument which is one of: ',
										)
										.concat(e),
								);
							}
							if ('string' !== typeof t)
								throw new Error(
									''.concat(
										r,
										' takes a "selector"-argument which must be a string',
									),
								);
							if (!Array.isArray(n))
								throw new Error(
									''.concat(
										r,
										' takes an "items"-argument which must be an array',
									),
								);
						})(e, t, n),
						this._assign('insert', { [e]: t, items: n })
					);
				}
				append(e, t) {
					return this.insert('after', ''.concat(e, '[-1]'), t);
				}
				prepend(e, t) {
					return this.insert('before', ''.concat(e, '[0]'), t);
				}
				splice(e, t, n, r) {
					const i = t < 0 ? t - 1 : t,
						o =
							'undefined' === typeof n || -1 === n
								? -1
								: Math.max(0, t + n),
						a = i < 0 && o >= 0 ? '' : o,
						s = ''.concat(e, '[').concat(i, ':').concat(a, ']');
					return this.insert('replace', s, r || []);
				}
				ifRevisionId(e) {
					return (this.operations.ifRevisionID = e), this;
				}
				serialize() {
					return { ...gl(this.selection), ...this.operations };
				}
				toJSON() {
					return this.serialize();
				}
				reset() {
					return (this.operations = {}), this;
				}
				_assign(e, t) {
					let n =
						!(arguments.length > 2 && void 0 !== arguments[2]) ||
						arguments[2];
					return (
						bl(e, t),
						(this.operations = Object.assign({}, this.operations, {
							[e]: Object.assign(
								{},
								(n && this.operations[e]) || {},
								t,
							),
						})),
						this
					);
				}
				_set(e, t) {
					return this._assign(e, t, !1);
				}
			}
			const Bl = class extends Rl {
				constructor(e, t, n) {
					super(e, t), Dl(this, Tl, void 0), Ol(this, Tl, n);
				}
				clone() {
					return new Bl(
						this.selection,
						{ ...this.operations },
						Ml(this, Tl),
					);
				}
				commit(e) {
					if (!Ml(this, Tl))
						throw new Error(
							'No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method',
						);
					const t = 'string' === typeof this.selection,
						n = Object.assign(
							{ returnFirst: t, returnDocuments: !0 },
							e,
						);
					return Ml(this, Tl).mutate({ patch: this.serialize() }, n);
				}
			};
			let Ll = Bl;
			Tl = new WeakMap();
			const Il = class extends Rl {
				constructor(e, t, n) {
					super(e, t), Dl(this, _l, void 0), Ol(this, _l, n);
				}
				clone() {
					return new Il(
						this.selection,
						{ ...this.operations },
						Ml(this, _l),
					);
				}
				commit(e) {
					if (!Ml(this, _l))
						throw new Error(
							'No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method',
						);
					const t = 'string' === typeof this.selection,
						n = Object.assign(
							{ returnFirst: t, returnDocuments: !0 },
							e,
						);
					return Ml(this, _l).mutate({ patch: this.serialize() }, n);
				}
			};
			let Fl = Il;
			_l = new WeakMap();
			var jl,
				Nl,
				zl = (e, t, n) => {
					if (!t.has(e)) throw TypeError('Cannot ' + n);
				},
				Vl = (e, t, n) => (
					zl(e, t, 'read from private field'),
					n ? n.call(e) : t.get(e)
				),
				Ul = (e, t, n) => {
					if (t.has(e))
						throw TypeError(
							'Cannot add the same private member more than once',
						);
					t instanceof WeakSet ? t.add(e) : t.set(e, n);
				},
				Yl = (e, t, n, r) => (
					zl(e, t, 'write to private field'),
					r ? r.call(e, n) : t.set(e, n),
					n
				);
			const Ql = { returnDocuments: !1 };
			class Hl {
				constructor() {
					let e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					(this.operations = e), (this.trxId = t);
				}
				create(e) {
					return bl('create', e), this._add({ create: e });
				}
				createIfNotExists(e) {
					const t = 'createIfNotExists';
					return bl(t, e), El(t, e), this._add({ [t]: e });
				}
				createOrReplace(e) {
					const t = 'createOrReplace';
					return bl(t, e), El(t, e), this._add({ [t]: e });
				}
				delete(e) {
					return xl('delete', e), this._add({ delete: { id: e } });
				}
				transactionId(e) {
					return e ? ((this.trxId = e), this) : this.trxId;
				}
				serialize() {
					return [...this.operations];
				}
				toJSON() {
					return this.serialize();
				}
				reset() {
					return (this.operations = []), this;
				}
				_add(e) {
					return this.operations.push(e), this;
				}
			}
			const Gl = class extends Hl {
				constructor(e, t, n) {
					super(e, n), Ul(this, jl, void 0), Yl(this, jl, t);
				}
				clone() {
					return new Gl(
						[...this.operations],
						Vl(this, jl),
						this.trxId,
					);
				}
				commit(e) {
					if (!Vl(this, jl))
						throw new Error(
							'No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method',
						);
					return Vl(this, jl).mutate(
						this.serialize(),
						Object.assign(
							{ transactionId: this.trxId },
							Ql,
							e || {},
						),
					);
				}
				patch(e, t) {
					const n = 'function' === typeof t;
					if ('string' !== typeof e && e instanceof Fl)
						return this._add({ patch: e.serialize() });
					if (n) {
						const n = t(new Fl(e, {}, Vl(this, jl)));
						if (!(n instanceof Fl))
							throw new Error(
								'function passed to `patch()` must return the patch',
							);
						return this._add({ patch: n.serialize() });
					}
					return this._add({ patch: { id: e, ...t } });
				}
			};
			let Wl = Gl;
			jl = new WeakMap();
			const Xl = class extends Hl {
				constructor(e, t, n) {
					super(e, n), Ul(this, Nl, void 0), Yl(this, Nl, t);
				}
				clone() {
					return new Xl(
						[...this.operations],
						Vl(this, Nl),
						this.trxId,
					);
				}
				commit(e) {
					if (!Vl(this, Nl))
						throw new Error(
							'No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method',
						);
					return Vl(this, Nl).mutate(
						this.serialize(),
						Object.assign(
							{ transactionId: this.trxId },
							Ql,
							e || {},
						),
					);
				}
				patch(e, t) {
					const n = 'function' === typeof t;
					if ('string' !== typeof e && e instanceof Ll)
						return this._add({ patch: e.serialize() });
					if (n) {
						const n = t(new Ll(e, {}, Vl(this, Nl)));
						if (!(n instanceof Ll))
							throw new Error(
								'function passed to `patch()` must return the patch',
							);
						return this._add({ patch: n.serialize() });
					}
					return this._add({ patch: { id: e, ...t } });
				}
			};
			let ql = Xl;
			Nl = new WeakMap();
			const Jl = function () {
					let e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: {};
					return {
						dryRun: e.dryRun,
						returnIds: !0,
						returnDocuments:
							((t = e.returnDocuments),
							(n = !0),
							!1 === t
								? void 0
								: 'undefined' === typeof t
									? n
									: t),
						visibility: e.visibility || 'sync',
						autoGenerateArrayKeys: e.autoGenerateArrayKeys,
						skipCrossDatasetReferenceValidation:
							e.skipCrossDatasetReferenceValidation,
					};
					var t, n;
				},
				Kl = (e) => 'response' === e.type,
				Zl = (e) => e.body,
				$l = (e, t) =>
					e.reduce((e, n) => ((e[t(n)] = n), e), Object.create(null)),
				eu = 11264;
			function tu(e, t, n, r) {
				let i =
					arguments.length > 4 && void 0 !== arguments[4]
						? arguments[4]
						: {};
				const o = !1 === i.filterResponse ? (e) => e : (e) => e.result;
				return lu(e, t, 'query', { query: n, params: r }, i).pipe(
					ol(o),
				);
			}
			function nu(e, t, n) {
				let r =
					arguments.length > 3 && void 0 !== arguments[3]
						? arguments[3]
						: {};
				return cu(e, t, {
					uri: fu(e, 'doc', n),
					json: !0,
					tag: r.tag,
				}).pipe(
					al(Kl),
					ol((e) => e.body.documents && e.body.documents[0]),
				);
			}
			function ru(e, t, n) {
				let r =
					arguments.length > 3 && void 0 !== arguments[3]
						? arguments[3]
						: {};
				return cu(e, t, {
					uri: fu(e, 'doc', n.join(',')),
					json: !0,
					tag: r.tag,
				}).pipe(
					al(Kl),
					ol((e) => {
						const t = $l(e.body.documents || [], (e) => e._id);
						return n.map((e) => t[e] || null);
					}),
				);
			}
			function iu(e, t, n, r) {
				return (
					El('createIfNotExists', n),
					uu(e, t, n, 'createIfNotExists', r)
				);
			}
			function ou(e, t, n, r) {
				return (
					El('createOrReplace', n), uu(e, t, n, 'createOrReplace', r)
				);
			}
			function au(e, t, n, r) {
				return lu(
					e,
					t,
					'mutate',
					{ mutations: [{ delete: gl(n) }] },
					r,
				);
			}
			function su(e, t, n, r) {
				let i;
				i =
					n instanceof Fl || n instanceof Ll
						? { patch: n.serialize() }
						: n instanceof Wl || n instanceof ql
							? n.serialize()
							: n;
				return lu(
					e,
					t,
					'mutate',
					{
						mutations: Array.isArray(i) ? i : [i],
						transactionId: (r && r.transactionId) || void 0,
					},
					r,
				);
			}
			function lu(e, t, n, r) {
				let i =
					arguments.length > 4 && void 0 !== arguments[4]
						? arguments[4]
						: {};
				const o = 'mutate' === n,
					a = 'query' === n,
					s = o ? '' : Sl(r),
					l = !o && s.length < eu,
					u = l ? s : '',
					c = i.returnFirst,
					{ timeout: d, token: f, tag: h, headers: p } = i;
				return cu(e, t, {
					method: l ? 'GET' : 'POST',
					uri: fu(e, n, u),
					json: !0,
					body: l ? void 0 : r,
					query: o && Jl(i),
					timeout: d,
					headers: p,
					token: f,
					tag: h,
					canUseCdn: a,
					signal: i.signal,
				}).pipe(
					al(Kl),
					ol(Zl),
					ol((e) => {
						if (!o) return e;
						const t = e.results || [];
						if (i.returnDocuments)
							return c
								? t[0] && t[0].document
								: t.map((e) => e.document);
						const n = c ? 'documentId' : 'documentIds',
							r = c ? t[0] && t[0].id : t.map((e) => e.id);
						return {
							transactionId: e.transactionId,
							results: t,
							[n]: r,
						};
					}),
				);
			}
			function uu(e, t, n, r) {
				let i =
					arguments.length > 4 && void 0 !== arguments[4]
						? arguments[4]
						: {};
				return lu(
					e,
					t,
					'mutate',
					{ mutations: [{ [r]: n }] },
					Object.assign({ returnFirst: !0, returnDocuments: !0 }, i),
				);
			}
			function cu(e, t, n) {
				const r = n.url || n.uri,
					i = e.config(),
					o =
						'undefined' === typeof n.canUseCdn
							? ['GET', 'HEAD'].indexOf(n.method || 'GET') >= 0 &&
								0 === r.indexOf('/data/')
							: n.canUseCdn,
					a = i.useCdn && o,
					s =
						n.tag && i.requestTagPrefix
							? [i.requestTagPrefix, n.tag].join('.')
							: n.tag || i.requestTagPrefix;
				s && (n.query = { tag: kl(s), ...n.query });
				const l = (function (e) {
						let t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {};
						const n = {},
							r = t.token || e.token;
						r && (n.Authorization = 'Bearer '.concat(r)),
							t.useGlobalApi ||
								e.useProjectHostname ||
								!e.projectId ||
								(n[ml] = e.projectId);
						const i = Boolean(
								'undefined' === typeof t.withCredentials
									? e.token || e.withCredentials
									: t.withCredentials,
							),
							o =
								'undefined' === typeof t.timeout
									? e.timeout
									: t.timeout;
						return Object.assign({}, t, {
							headers: Object.assign({}, n, t.headers || {}),
							timeout: 'undefined' === typeof o ? 3e5 : o,
							proxy: t.proxy || e.proxy,
							json: !0,
							withCredentials: i,
						});
					})(i, Object.assign({}, n, { url: hu(e, r, a) })),
					u = new Zs((e) => t(l, i.requester).subscribe(e));
				return n.signal
					? u.pipe(
							((c = n.signal),
							(e) =>
								new Zs((t) => {
									const n = () =>
										t.error(
											(function (e) {
												var t, n;
												if (pu)
													return new DOMException(
														null !=
														(t =
															null == e
																? void 0
																: e.reason)
															? t
															: 'The operation was aborted.',
														'AbortError',
													);
												const r = new Error(
													null !=
													(n =
														null == e
															? void 0
															: e.reason)
														? n
														: 'The operation was aborted.',
												);
												return (
													(r.name = 'AbortError'), r
												);
											})(c),
										);
									if (c && c.aborted) return void n();
									const r = e.subscribe(t);
									return (
										c.addEventListener('abort', n),
										() => {
											c.removeEventListener('abort', n),
												r.unsubscribe();
										}
									);
								})),
						)
					: u;
				var c;
			}
			function du(e, t, n) {
				return cu(e, t, n).pipe(
					al((e) => 'response' === e.type),
					ol((e) => e.body),
				);
			}
			function fu(e, t, n) {
				const r = e.config(),
					i = Cl(r),
					o = '/'.concat(t, '/').concat(i),
					a = n ? ''.concat(o, '/').concat(n) : o;
				return '/data'.concat(a).replace(/\/($|\?)/, '$1');
			}
			function hu(e, t) {
				let n =
					arguments.length > 2 &&
					void 0 !== arguments[2] &&
					arguments[2];
				const { url: r, cdnUrl: i } = e.config();
				return ''.concat(n ? i : r, '/').concat(t.replace(/^\//, ''));
			}
			const pu = Boolean(globalThis.DOMException);
			var mu,
				gu,
				vu,
				Au,
				yu = (e, t, n) => {
					if (!t.has(e)) throw TypeError('Cannot ' + n);
				},
				wu = (e, t, n) => (
					yu(e, t, 'read from private field'),
					n ? n.call(e) : t.get(e)
				),
				bu = (e, t, n) => {
					if (t.has(e))
						throw TypeError(
							'Cannot add the same private member more than once',
						);
					t instanceof WeakSet ? t.add(e) : t.set(e, n);
				},
				xu = (e, t, n, r) => (
					yu(e, t, 'write to private field'),
					r ? r.call(e, n) : t.set(e, n),
					n
				);
			class Eu {
				constructor(e, t) {
					bu(this, mu, void 0),
						bu(this, gu, void 0),
						xu(this, mu, e),
						xu(this, gu, t);
				}
				upload(e, t, n) {
					return ku(wu(this, mu), wu(this, gu), e, t, n);
				}
			}
			(mu = new WeakMap()), (gu = new WeakMap());
			class Cu {
				constructor(e, t) {
					bu(this, vu, void 0),
						bu(this, Au, void 0),
						xu(this, vu, e),
						xu(this, Au, t);
				}
				upload(e, t, n) {
					return tl(
						ku(wu(this, vu), wu(this, Au), e, t, n).pipe(
							al((e) => 'response' === e.type),
							ol((e) => e.body.document),
						),
					);
				}
			}
			function ku(e, t, n, r) {
				let i =
					arguments.length > 4 && void 0 !== arguments[4]
						? arguments[4]
						: {};
				wl(n);
				let o = i.extract || void 0;
				o && !o.length && (o = ['none']);
				const a = Cl(e.config()),
					s = 'image' === n ? 'images' : 'files',
					l = (function (e, t) {
						if ('undefined' === typeof File || !(t instanceof File))
							return e;
						return Object.assign(
							{
								filename:
									!1 === e.preserveFilename ? void 0 : t.name,
								contentType: t.type,
							},
							e,
						);
					})(i, r),
					{
						tag: u,
						label: c,
						title: d,
						description: f,
						creditLine: h,
						filename: p,
						source: m,
					} = l,
					g = {
						label: c,
						title: d,
						description: f,
						filename: p,
						meta: o,
						creditLine: h,
					};
				return (
					m &&
						((g.sourceId = m.id),
						(g.sourceName = m.name),
						(g.sourceUrl = m.url)),
					cu(e, t, {
						tag: u,
						method: 'POST',
						timeout: l.timeout || 0,
						uri: '/assets/'.concat(s, '/').concat(a),
						headers: l.contentType
							? { 'Content-Type': l.contentType }
							: {},
						query: g,
						body: r,
					})
				);
			}
			(vu = new WeakMap()), (Au = new WeakMap());
			const Su = 'https://www.sanity.io/help/';
			function Tu(e) {
				return Su + e;
			}
			const _u = (e) =>
					(function (e) {
						let t,
							n = !1;
						return function () {
							return n || ((t = e(...arguments)), (n = !0)), t;
						};
					})(function () {
						for (
							var t = arguments.length, n = new Array(t), r = 0;
							r < t;
							r++
						)
							n[r] = arguments[r];
						return console.warn(e.join(' '), ...n);
					}),
				Pu = _u([
					'You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and',
					'cheaper. Think about it! For more info, see '.concat(
						Tu('js-client-cdn-configuration'),
						' ',
					),
					'To hide this warning, please set the `useCdn` option to either `true` or `false` when creating',
					'the client.',
				]),
				Mu = _u([
					'You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.',
					'See '.concat(
						Tu('js-client-browser-token'),
						' for more information and how to hide this warning.',
					),
				]),
				Du = _u([
					'Using the Sanity client without specifying an API version is deprecated.',
					'See '.concat(Tu('js-client-api-version')),
				]),
				Ou = _u([
					'The default export of @sanity/client has been deprecated. Use the named export `createClient` instead',
				]),
				Ru = {
					apiHost: 'https://api.sanity.io',
					apiVersion: '1',
					useProjectHostname: !0,
				},
				Bu = ['localhost', '127.0.0.1', '0.0.0.0'],
				Lu = (e, t) => {
					const n = Object.assign({}, t, e);
					n.apiVersion || Du();
					const r = Object.assign({}, Ru, n),
						i = r.useProjectHostname;
					if ('undefined' === typeof Promise) {
						const e = Tu('js-client-promise-polyfill');
						throw new Error(
							'No native Promise-implementation found, polyfill needed - see '.concat(
								e,
							),
						);
					}
					if (i && !r.projectId)
						throw new Error(
							'Configuration must contain `projectId`',
						);
					const o =
							'undefined' !== typeof window &&
							window.location &&
							window.location.hostname,
						a =
							o &&
							((e) => -1 !== Bu.indexOf(e))(
								window.location.hostname,
							);
					o && a && r.token && !0 !== r.ignoreBrowserTokenWarning
						? Mu()
						: 'undefined' === typeof r.useCdn && Pu(),
						i &&
							((e) => {
								if (!/^[-a-z0-9]+$/i.test(e))
									throw new Error(
										'`projectId` can only contain only a-z, 0-9 and dashes',
									);
							})(r.projectId),
						r.dataset && yl(r.dataset),
						'requestTagPrefix' in r &&
							(r.requestTagPrefix = r.requestTagPrefix
								? kl(r.requestTagPrefix).replace(/\.+$/, '')
								: void 0),
						(r.apiVersion = ''
							.concat(r.apiVersion)
							.replace(/^v/, '')),
						(r.isDefaultApi = r.apiHost === Ru.apiHost),
						(r.useCdn = Boolean(r.useCdn) && !r.withCredentials),
						(function (e) {
							if ('1' === e || 'X' === e) return;
							const t = new Date(e);
							if (
								!(
									/^\d{4}-\d{2}-\d{2}$/.test(e) &&
									t instanceof Date &&
									t.getTime() > 0
								)
							)
								throw new Error(
									'Invalid API version string, expected `1` or date in format `YYYY-MM-DD`',
								);
						})(r.apiVersion);
					const s = r.apiHost.split('://', 2),
						l = s[0],
						u = s[1],
						c = r.isDefaultApi ? 'apicdn.sanity.io' : u;
					return (
						r.useProjectHostname
							? ((r.url = ''
									.concat(l, '://')
									.concat(r.projectId, '.')
									.concat(u, '/v')
									.concat(r.apiVersion)),
								(r.cdnUrl = ''
									.concat(l, '://')
									.concat(r.projectId, '.')
									.concat(c, '/v')
									.concat(r.apiVersion)))
							: ((r.url = ''
									.concat(r.apiHost, '/v')
									.concat(r.apiVersion)),
								(r.cdnUrl = r.url)),
						r
					);
				};
			var Iu = (e, t) =>
				Object.keys(t)
					.concat(Object.keys(e))
					.reduce(
						(n, r) => (
							(n[r] = 'undefined' === typeof e[r] ? t[r] : e[r]),
							n
						),
						{},
					);
			const Fu = (e, t) =>
					t.reduce(
						(t, n) => (
							'undefined' === typeof e[n] || (t[n] = e[n]), t
						),
						{},
					),
				ju = 14800,
				Nu = [
					'includePreviousRevision',
					'includeResult',
					'visibility',
					'effectFormat',
					'tag',
				],
				zu = { includeResult: !0 };
			function Vu(e, t) {
				let r =
					arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: {};
				const {
						url: i,
						token: o,
						withCredentials: a,
						requestTagPrefix: s,
					} = this.config(),
					l = r.tag && s ? [s, r.tag].join('.') : r.tag,
					u = { ...Iu(r, zu), tag: l },
					c = Fu(u, Nu),
					d = Sl({ query: e, params: t, options: { tag: l, ...c } }),
					f = ''.concat(i).concat(fu(this, 'listen', d));
				if (f.length > ju)
					return new Zs((e) =>
						e.error(new Error('Query too large for listener')),
					);
				const h = u.events ? u.events : ['mutation'],
					p = -1 !== h.indexOf('reconnect'),
					m = {};
				return (
					(o || a) && (m.withCredentials = !0),
					o && (m.headers = { Authorization: 'Bearer '.concat(o) }),
					new Zs((e) => {
						let t, r;
						c()
							.then((e) => {
								t = e;
							})
							.catch((t) => {
								e.error(t), g();
							});
						let i = !1;
						function o() {
							i ||
								(p && e.next({ type: 'reconnect' }),
								i ||
									(t.readyState === t.CLOSED &&
										(u(),
										clearTimeout(r),
										(r = setTimeout(d, 100)))));
						}
						function a(t) {
							e.error(
								(function (e) {
									if (e instanceof Error) return e;
									const t = Uu(e);
									return t instanceof Error
										? t
										: new Error(
												(function (e) {
													if (!e.error)
														return (
															e.message ||
															'Unknown listener error'
														);
													if (e.error.description)
														return e.error
															.description;
													return 'string' ===
														typeof e.error
														? e.error
														: JSON.stringify(
																e.error,
																null,
																2,
															);
												})(t),
											);
								})(t),
							);
						}
						function s(t) {
							const n = Uu(t);
							return n instanceof Error ? e.error(n) : e.next(n);
						}
						function l() {
							(i = !0), u(), e.complete();
						}
						function u() {
							t &&
								(t.removeEventListener('error', o),
								t.removeEventListener('channelError', a),
								t.removeEventListener('disconnect', l),
								h.forEach((e) => t.removeEventListener(e, s)),
								t.close());
						}
						async function c() {
							const { default: e } = await n
									.e(726)
									.then(n.t.bind(n, 726, 19)),
								t = new e(f, m);
							return (
								t.addEventListener('error', o),
								t.addEventListener('channelError', a),
								t.addEventListener('disconnect', l),
								h.forEach((e) => t.addEventListener(e, s)),
								t
							);
						}
						function d() {
							c()
								.then((e) => {
									t = e;
								})
								.catch((t) => {
									e.error(t), g();
								});
						}
						function g() {
							(i = !0), u();
						}
						return g;
					})
				);
			}
			function Uu(e) {
				try {
					const t = (e.data && JSON.parse(e.data)) || {};
					return Object.assign({ type: e.type }, t);
				} catch (t) {
					return t;
				}
			}
			var Yu,
				Qu,
				Hu,
				Gu,
				Wu = (e, t, n) => {
					if (!t.has(e)) throw TypeError('Cannot ' + n);
				},
				Xu = (e, t, n) => (
					Wu(e, t, 'read from private field'),
					n ? n.call(e) : t.get(e)
				),
				qu = (e, t, n) => {
					if (t.has(e))
						throw TypeError(
							'Cannot add the same private member more than once',
						);
					t instanceof WeakSet ? t.add(e) : t.set(e, n);
				},
				Ju = (e, t, n, r) => (
					Wu(e, t, 'write to private field'),
					r ? r.call(e, n) : t.set(e, n),
					n
				);
			class Ku {
				constructor(e, t) {
					qu(this, Yu, void 0),
						qu(this, Qu, void 0),
						Ju(this, Yu, e),
						Ju(this, Qu, t);
				}
				create(e, t) {
					return $u(Xu(this, Yu), Xu(this, Qu), 'PUT', e, t);
				}
				edit(e, t) {
					return $u(Xu(this, Yu), Xu(this, Qu), 'PATCH', e, t);
				}
				delete(e) {
					return $u(Xu(this, Yu), Xu(this, Qu), 'DELETE', e);
				}
				list() {
					return du(Xu(this, Yu), Xu(this, Qu), { uri: '/datasets' });
				}
			}
			(Yu = new WeakMap()), (Qu = new WeakMap());
			class Zu {
				constructor(e, t) {
					qu(this, Hu, void 0),
						qu(this, Gu, void 0),
						Ju(this, Hu, e),
						Ju(this, Gu, t);
				}
				create(e, t) {
					return tl($u(Xu(this, Hu), Xu(this, Gu), 'PUT', e, t));
				}
				edit(e, t) {
					return tl($u(Xu(this, Hu), Xu(this, Gu), 'PATCH', e, t));
				}
				delete(e) {
					return tl($u(Xu(this, Hu), Xu(this, Gu), 'DELETE', e));
				}
				list() {
					return tl(
						du(Xu(this, Hu), Xu(this, Gu), { uri: '/datasets' }),
					);
				}
			}
			function $u(e, t, n, r, i) {
				return (
					yl(r),
					du(e, t, {
						method: n,
						uri: '/datasets/'.concat(r),
						body: i,
					})
				);
			}
			(Hu = new WeakMap()), (Gu = new WeakMap());
			var ec,
				tc,
				nc,
				rc,
				ic = (e, t, n) => {
					if (!t.has(e)) throw TypeError('Cannot ' + n);
				},
				oc = (e, t, n) => (
					ic(e, t, 'read from private field'),
					n ? n.call(e) : t.get(e)
				),
				ac = (e, t, n) => {
					if (t.has(e))
						throw TypeError(
							'Cannot add the same private member more than once',
						);
					t instanceof WeakSet ? t.add(e) : t.set(e, n);
				},
				sc = (e, t, n, r) => (
					ic(e, t, 'write to private field'),
					r ? r.call(e, n) : t.set(e, n),
					n
				);
			class lc {
				constructor(e, t) {
					ac(this, ec, void 0),
						ac(this, tc, void 0),
						sc(this, ec, e),
						sc(this, tc, t);
				}
				list() {
					return du(oc(this, ec), oc(this, tc), { uri: '/projects' });
				}
				getById(e) {
					return du(oc(this, ec), oc(this, tc), {
						uri: '/projects/'.concat(e),
					});
				}
			}
			(ec = new WeakMap()), (tc = new WeakMap());
			class uc {
				constructor(e, t) {
					ac(this, nc, void 0),
						ac(this, rc, void 0),
						sc(this, nc, e),
						sc(this, rc, t);
				}
				list() {
					return tl(
						du(oc(this, nc), oc(this, rc), { uri: '/projects' }),
					);
				}
				getById(e) {
					return tl(
						du(oc(this, nc), oc(this, rc), {
							uri: '/projects/'.concat(e),
						}),
					);
				}
			}
			(nc = new WeakMap()), (rc = new WeakMap());
			var cc,
				dc,
				fc,
				hc,
				pc = (e, t, n) => {
					if (!t.has(e)) throw TypeError('Cannot ' + n);
				},
				mc = (e, t, n) => (
					pc(e, t, 'read from private field'),
					n ? n.call(e) : t.get(e)
				),
				gc = (e, t, n) => {
					if (t.has(e))
						throw TypeError(
							'Cannot add the same private member more than once',
						);
					t instanceof WeakSet ? t.add(e) : t.set(e, n);
				},
				vc = (e, t, n, r) => (
					pc(e, t, 'write to private field'),
					r ? r.call(e, n) : t.set(e, n),
					n
				);
			class Ac {
				constructor(e, t) {
					gc(this, cc, void 0),
						gc(this, dc, void 0),
						vc(this, cc, e),
						vc(this, dc, t);
				}
				getById(e) {
					return du(mc(this, cc), mc(this, dc), {
						uri: '/users/'.concat(e),
					});
				}
			}
			(cc = new WeakMap()), (dc = new WeakMap());
			class yc {
				constructor(e, t) {
					gc(this, fc, void 0),
						gc(this, hc, void 0),
						vc(this, fc, e),
						vc(this, hc, t);
				}
				getById(e) {
					return tl(
						du(mc(this, fc), mc(this, hc), {
							uri: '/users/'.concat(e),
						}),
					);
				}
			}
			(fc = new WeakMap()), (hc = new WeakMap());
			var wc,
				bc,
				xc,
				Ec,
				Cc = (e, t, n) => {
					if (!t.has(e)) throw TypeError('Cannot ' + n);
				},
				kc = (e, t, n) => (
					Cc(e, t, 'read from private field'),
					n ? n.call(e) : t.get(e)
				),
				Sc = (e, t, n) => {
					if (t.has(e))
						throw TypeError(
							'Cannot add the same private member more than once',
						);
					t instanceof WeakSet ? t.add(e) : t.set(e, n);
				},
				Tc = (e, t, n, r) => (
					Cc(e, t, 'write to private field'),
					r ? r.call(e, n) : t.set(e, n),
					n
				);
			const _c = class {
				constructor(e) {
					let t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: Ru;
					Sc(this, wc, void 0),
						Sc(this, bc, void 0),
						(this.listen = Vu),
						this.config(t),
						Tc(this, bc, e),
						(this.assets = new Eu(this, kc(this, bc))),
						(this.datasets = new Ku(this, kc(this, bc))),
						(this.projects = new lc(this, kc(this, bc))),
						(this.users = new Ac(this, kc(this, bc)));
				}
				clone() {
					return new _c(kc(this, bc), this.config());
				}
				config(e) {
					if (void 0 === e) return { ...kc(this, wc) };
					if (kc(this, wc) && !1 === kc(this, wc).allowReconfigure)
						throw new Error(
							'Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client',
						);
					return Tc(this, wc, Lu(e, kc(this, wc) || {})), this;
				}
				withConfig(e) {
					return new _c(kc(this, bc), { ...this.config(), ...e });
				}
				fetch(e, t) {
					let n =
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: {};
					return tu(this, kc(this, bc), e, t, n);
				}
				getDocument(e, t) {
					return nu(this, kc(this, bc), e, t);
				}
				getDocuments(e, t) {
					return ru(this, kc(this, bc), e, t);
				}
				create(e, t) {
					return uu(this, kc(this, bc), e, 'create', t);
				}
				createIfNotExists(e, t) {
					return iu(this, kc(this, bc), e, t);
				}
				createOrReplace(e, t) {
					return ou(this, kc(this, bc), e, t);
				}
				delete(e, t) {
					return au(this, kc(this, bc), e, t);
				}
				mutate(e, t) {
					return su(this, kc(this, bc), e, t);
				}
				patch(e, t) {
					return new Ll(e, t, this);
				}
				transaction(e) {
					return new ql(e, this);
				}
				request(e) {
					return du(this, kc(this, bc), e);
				}
				getUrl(e, t) {
					return hu(this, e, t);
				}
				getDataUrl(e, t) {
					return fu(this, e, t);
				}
			};
			let Pc = _c;
			(wc = new WeakMap()), (bc = new WeakMap());
			const Mc = class {
				constructor(e) {
					let t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: Ru;
					Sc(this, xc, void 0),
						Sc(this, Ec, void 0),
						(this.listen = Vu),
						this.config(t),
						Tc(this, Ec, e),
						(this.assets = new Cu(this, kc(this, Ec))),
						(this.datasets = new Zu(this, kc(this, Ec))),
						(this.projects = new uc(this, kc(this, Ec))),
						(this.users = new yc(this, kc(this, Ec))),
						(this.observable = new Pc(e, t));
				}
				clone() {
					return new Mc(kc(this, Ec), this.config());
				}
				config(e) {
					if (void 0 === e) return { ...kc(this, xc) };
					if (kc(this, xc) && !1 === kc(this, xc).allowReconfigure)
						throw new Error(
							'Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client',
						);
					return (
						this.observable && this.observable.config(e),
						Tc(this, xc, Lu(e, kc(this, xc) || {})),
						this
					);
				}
				withConfig(e) {
					return new Mc(kc(this, Ec), { ...this.config(), ...e });
				}
				fetch(e, t) {
					let n =
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: {};
					return tl(tu(this, kc(this, Ec), e, t, n));
				}
				getDocument(e, t) {
					return tl(nu(this, kc(this, Ec), e, t));
				}
				getDocuments(e, t) {
					return tl(ru(this, kc(this, Ec), e, t));
				}
				create(e, t) {
					return tl(uu(this, kc(this, Ec), e, 'create', t));
				}
				createIfNotExists(e, t) {
					return tl(iu(this, kc(this, Ec), e, t));
				}
				createOrReplace(e, t) {
					return tl(ou(this, kc(this, Ec), e, t));
				}
				delete(e, t) {
					return tl(au(this, kc(this, Ec), e, t));
				}
				mutate(e, t) {
					return tl(su(this, kc(this, Ec), e, t));
				}
				patch(e, t) {
					return new Fl(e, t, this);
				}
				transaction(e) {
					return new Wl(e, this);
				}
				request(e) {
					return tl(du(this, kc(this, Ec), e));
				}
				dataRequest(e, t, n) {
					return tl(lu(this, kc(this, Ec), e, t, n));
				}
				getUrl(e, t) {
					return hu(this, e, t);
				}
				getDataUrl(e, t) {
					return fu(this, e, t);
				}
			};
			let Dc = Mc;
			(xc = new WeakMap()), (Ec = new WeakMap());
			const Oc = (function (e) {
				const t = ss([
					...e,
					pl,
					fs(),
					hs(),
					{
						onRequest: (e) => {
							if ('xhr' !== e.adapter) return;
							const t = e.request,
								n = e.context;
							function r(e) {
								return (t) => {
									const r = t.lengthComputable
										? (t.loaded / t.total) * 100
										: -1;
									n.channels.progress.publish({
										stage: e,
										percent: r,
										total: t.total,
										loaded: t.loaded,
										lengthComputable: t.lengthComputable,
									});
								};
							}
							'upload' in t &&
								'onprogress' in t.upload &&
								(t.upload.onprogress = r('upload')),
								'onprogress' in t &&
									(t.onprogress = r('download'));
						},
					},
					hl,
					gs({ implementation: Zs }),
				]);
				function n(e) {
					return (
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: t
					)({ maxRedirects: 0, ...e });
				}
				return (n.defaultRequester = t), n;
			})([]);
			Oc.defaultRequester;
			var Rc = n(597),
				Bc = n.n(Rc);
			const Lc = (function (e) {
					return Ou(), new Dc(Oc, e);
				})({
					projectId: {
						NODE_ENV: 'production',
						PUBLIC_URL: '',
						WDS_SOCKET_HOST: void 0,
						WDS_SOCKET_PATH: void 0,
						WDS_SOCKET_PORT: void 0,
						FAST_REFRESH: !0,
					}.REACT_APP_SANITY_PROJECT_ID,
					dataset: 'production',
					apiVersion: '2022-02-01',
					useCdn: !0,
					token: {
						NODE_ENV: 'production',
						PUBLIC_URL: '',
						WDS_SOCKET_HOST: void 0,
						WDS_SOCKET_PATH: void 0,
						WDS_SOCKET_PORT: void 0,
						FAST_REFRESH: !0,
					}.REACT_APP_SANITY_TOKEN,
				}),
				Ic = Bc()(Lc),
				Fc = (e) => Ic.image(e),
				jc = {
					hidden: { opacity: 0, y: -100 },
					show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
				},
				Nc = {
					hidden: { opacity: 0, y: 100 },
					show: {
						opacity: 1,
						y: 0,
						transition: { duration: 0.5, type: 'tween' },
					},
				},
				zc = {
					scale: 1.05,
					transition: { duration: 0.5, type: 'spring' },
				},
				Vc = Ia(() => {
					const [t, n] = (0, e.useState)(!0),
						[r, i] = (0, e.useState)([]);
					return (
						(0, e.useEffect)(() => {
							Lc.fetch('*[_type == "abouts"]').then((e) => i(e)),
								n(!1);
						}, []),
						(0, Ta.jsx)(Ta.Fragment, {
							children:
								!t &&
								(0, Ta.jsxs)(Ta.Fragment, {
									children: [
										(0, Ta.jsxs)(fa.h2, {
											variants: jc,
											initial: 'hidden',
											whileInView: 'show',
											viewport: { once: !0, amount: 0.2 },
											id: 'about',
											className:
												'head-text app__about-header',
											children: [
												'From ',
												(0, Ta.jsx)('span', {
													children: 'Idea ',
												}),
												'to Reality: ',
												(0, Ta.jsx)('br', {}),
												'My Dynamic ',
												(0, Ta.jsx)('span', {
													children: 'Development',
												}),
												' Approach',
											],
										}),
										(0, Ta.jsx)(fa.div, {
											className: 'app__profiles',
											children: r
												.sort()
												.map((e, t) =>
													(0, Ta.jsxs)(
														fa.div,
														{
															variants: Nc,
															initial: 'hidden',
															whileInView: 'show',
															whileHover: zc,
															viewport: {
																once: !0,
																amount: 0.2,
															},
															className:
																'app__profile-item',
															children: [
																(0, Ta.jsx)(
																	fa.img,
																	{
																		src: Fc(
																			e.imgUrl,
																		),
																		alt: e.imageAlt,
																	},
																),
																(0, Ta.jsx)(
																	'h2',
																	{
																		className:
																			'bold-text',
																		style: {
																			marginTop: 20,
																		},
																		children:
																			e.title,
																	},
																),
																(0, Ta.jsx)(
																	'p',
																	{
																		className:
																			'p-text',
																		style: {
																			marginTop: 10,
																		},
																		children:
																			e.description,
																	},
																),
															],
														},
														e.title + t,
													),
												),
										}),
									],
								}),
						})
					);
				}, 'about');
			var Uc = {
					color: void 0,
					size: void 0,
					className: void 0,
					style: void 0,
					attr: void 0,
				},
				Yc = e.createContext && e.createContext(Uc),
				Qc = function () {
					return (
						(Qc =
							Object.assign ||
							function (e) {
								for (
									var t, n = 1, r = arguments.length;
									n < r;
									n++
								)
									for (var i in (t = arguments[n]))
										Object.prototype.hasOwnProperty.call(
											t,
											i,
										) && (e[i] = t[i]);
								return e;
							}),
						Qc.apply(this, arguments)
					);
				},
				Hc = function (e, t) {
					var n = {};
					for (var r in e)
						Object.prototype.hasOwnProperty.call(e, r) &&
							t.indexOf(r) < 0 &&
							(n[r] = e[r]);
					if (
						null != e &&
						'function' === typeof Object.getOwnPropertySymbols
					) {
						var i = 0;
						for (
							r = Object.getOwnPropertySymbols(e);
							i < r.length;
							i++
						)
							t.indexOf(r[i]) < 0 &&
								Object.prototype.propertyIsEnumerable.call(
									e,
									r[i],
								) &&
								(n[r[i]] = e[r[i]]);
					}
					return n;
				};
			function Gc(t) {
				return (
					t &&
					t.map(function (t, n) {
						return e.createElement(
							t.tag,
							Qc({ key: n }, t.attr),
							Gc(t.child),
						);
					})
				);
			}
			function Wc(t) {
				return function (n) {
					return e.createElement(
						Xc,
						Qc({ attr: Qc({}, t.attr) }, n),
						Gc(t.child),
					);
				};
			}
			function Xc(t) {
				var n = function (n) {
					var r,
						i = t.attr,
						o = t.size,
						a = t.title,
						s = Hc(t, ['attr', 'size', 'title']),
						l = o || n.size || '1em';
					return (
						n.className && (r = n.className),
						t.className && (r = (r ? r + ' ' : '') + t.className),
						e.createElement(
							'svg',
							Qc(
								{
									stroke: 'currentColor',
									fill: 'currentColor',
									strokeWidth: '0',
								},
								n.attr,
								i,
								s,
								{
									className: r,
									style: Qc(
										Qc(
											{ color: t.color || n.color },
											n.style,
										),
										t.style,
									),
									height: l,
									width: l,
									xmlns: 'http://www.w3.org/2000/svg',
								},
							),
							a && e.createElement('title', null, a),
							t.children,
						)
					);
				};
				return void 0 !== Yc
					? e.createElement(Yc.Consumer, null, function (e) {
							return n(e);
						})
					: n(Uc);
			}
			function qc(e) {
				return Wc({
					tag: 'svg',
					attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
					child: [
						{
							tag: 'path',
							attr: {
								d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z',
							},
						},
					],
				})(e);
			}
			function Jc(e) {
				return Wc({
					tag: 'svg',
					attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
					child: [
						{
							tag: 'path',
							attr: {
								d: 'M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z',
							},
						},
					],
				})(e);
			}
			const Kc = Ia(
					ja(() => {
						const [t, n] = (0, e.useState)({
								name: '',
								email: '',
								message: '',
							}),
							[r, i] = (0, e.useState)(!1),
							[o, a] = (0, e.useState)(!1),
							[s, l] = (0, e.useState)(null),
							{ username: u, email: c, message: d } = t,
							f = (e) => {
								const { name: r, value: i } = e.target;
								n({ ...t, [r]: i });
							};
						return (0, Ta.jsxs)(Ta.Fragment, {
							children: [
								(0, Ta.jsxs)('h2', {
									className: 'head-text',
									children: [
										(0, Ta.jsx)('span', {
											children: 'Connect',
										}),
										'Hub   \ud83d\udcde ',
									],
								}),
								(0, Ta.jsxs)('div', {
									className: 'app__footer-socials-icons',
									children: [
										(0, Ta.jsx)('a', {
											className: 'icons-socials',
											rel: 'noreferrer',
											href: 'https://www.twitter.com/kKaskak',
											target: '_blank',
											children: (0, Ta.jsx)(Jc, {
												className: 'bsIcon',
												size: 45,
											}),
										}),
										(0, Ta.jsx)('a', {
											className: 'icons-socials',
											rel: 'noreferrer',
											href: 'https://www.github.com/kKaskak',
											target: '_blank',
											children: (0, Ta.jsx)(qc, {
												className: 'bsIcon',
												size: 45,
											}),
										}),
									],
								}),
								(0, Ta.jsxs)('div', {
									className: 'app__footer-contact app__flex',
									children: [
										(0, Ta.jsxs)('div', {
											className: 'app__footer-card',
											children: [
												(0, Ta.jsx)('img', {
													src: Sa.email,
													alt: Sa.name,
												}),
												(0, Ta.jsx)('a', {
													href: 'mailto:hamiahumorek@gmail.com',
													className: 'p-text',
													children:
														'hamiahumorek@gmail.com',
												}),
											],
										}),
										(0, Ta.jsxs)('div', {
											className: 'app__footer-card',
											children: [
												(0, Ta.jsx)('img', {
													src: Sa.mobile,
													alt: 'phone',
												}),
												(0, Ta.jsx)('a', {
													href: 'tel: +359878245823',
													className: 'p-text',
													children:
														'+359 878 245 823',
												}),
											],
										}),
									],
								}),
								r
									? (0, Ta.jsx)('div', {
											children: (0, Ta.jsx)('h3', {
												id: 'message',
												className: 'head-text',
												children:
													'Thank you for getting in touch!',
											}),
										})
									: (0, Ta.jsxs)(Ta.Fragment, {
											children: [
												(0, Ta.jsxs)('div', {
													className:
														'app__footer-form app__flex',
													children: [
														(0, Ta.jsx)('div', {
															className:
																'app__flex',
															children: (0,
															Ta.jsx)('input', {
																className:
																	'p-text',
																type: 'text',
																placeholder:
																	'Your Name',
																name: 'username',
																value: u,
																onChange: f,
															}),
														}),
														(0, Ta.jsx)('div', {
															className:
																'app__flex',
															children: (0,
															Ta.jsx)('input', {
																className:
																	'p-text',
																type: 'email',
																placeholder:
																	'Your Email',
																name: 'email',
																value: c,
																onChange: f,
															}),
														}),
														(0, Ta.jsx)('div', {
															children: (0,
															Ta.jsx)(
																'textarea',
																{
																	className:
																		'p-text',
																	placeholder:
																		'Your Message',
																	value: d,
																	name: 'message',
																	onChange: f,
																},
															),
														}),
														(0, Ta.jsx)('button', {
															type: 'button',
															className: 'p-text',
															onClick: () => {
																if (
																	'' === u ||
																	'' === c ||
																	'' === d
																)
																	return (
																		l(
																			'Please fill in all the fields!',
																		),
																		void setTimeout(
																			() => {
																				l(
																					null,
																				);
																			},
																			3e3,
																		)
																	);
																a(!0);
																const e = {
																	_type: 'contact',
																	name: t.username,
																	email: t.email,
																	message:
																		t.message,
																};
																Lc.create(e)
																	.then(
																		() => {
																			a(
																				!1,
																			),
																				i(
																					!0,
																				);
																		},
																	)
																	.catch(
																		(e) =>
																			console.log(
																				e,
																			),
																	);
															},
															children: o
																? 'Sending...'
																: 'Send Message',
														}),
													],
												}),
												(0, Ta.jsx)('div', {
													style: s
														? {
																visibility:
																	'visible',
															}
														: {
																visibility:
																	'hidden',
															},
													className: 'error-message',
													children:
														s ||
														'Please fill in all the fields!',
												}),
											],
										}),
								(0, Ta.jsxs)('p', {
									className: 'p-text absolute',
									children: [
										(0, Ta.jsx)('strong', {
											children: 'kKaskak',
										}),
										'\xae All rights reserved',
									],
								}),
							],
						});
					}, 'app__footer'),
					'contact',
					'app__whitebg',
				),
				Zc = {
					hidden: { opacity: 0, scale: 0 },
					show: {
						opacity: 1,
						scale: 1,
						transition: {
							delayChildren: 1.1,
							staggerChildren: 0.6,
						},
					},
				},
				$c = {
					hidden: { opacity: 0, x: -200 },
					show: {
						x: 0,
						opacity: 1,
						transition: { duration: 0.5, staggerChildren: 0.5 },
					},
				},
				ed = {
					hidden: { y: -100, opacity: 0 },
					show: {
						y: 0,
						opacity: 1,
						transition: {
							duration: 0.5,
							delayChildren: 0.7,
							delay: 0.7,
						},
					},
				},
				td = {
					hidden: { x: -100, scale: 0 },
					show: {
						x: 0,
						scale: 1,
						transition: { duration: 1, ease: 'easeInOut' },
					},
				},
				nd = {
					hidden: { opacity: 0, scale: 0 },
					show: { opacity: 1, scale: 1 },
				},
				rd = {
					hidden: { opacity: 0, x: -100 },
					show: { opacity: 1, x: 0 },
				},
				id = Ia(
					() =>
						(0, Ta.jsxs)('div', {
							id: 'home',
							className: 'app__header app__flex',
							children: [
								(0, Ta.jsx)(fa.div, {
									whileInView: $c.show,
									variants: $c,
									className: 'app__header-info',
									initial: 'hidden',
									animate: 'show',
									children: (0, Ta.jsxs)('div', {
										className: 'app__header-badge',
										children: [
											(0, Ta.jsxs)(fa.div, {
												variants: rd,
												whileTap: {
													scale: 1.1,
													transition: {
														type: 'tween',
														duration: 0.5,
													},
												},
												className:
													'badge-cmp app__flex',
												children: [
													(0, Ta.jsx)('span', {
														children:
															'\ud83d\udc4b',
													}),
													(0, Ta.jsxs)('div', {
														style: {
															marginLeft: 20,
														},
														children: [
															(0, Ta.jsx)('p', {
																className:
																	'p-text',
																children:
																	'Hello, I am',
															}),
															(0, Ta.jsx)('h1', {
																className:
																	'head-text',
																children:
																	'Timothy',
															}),
														],
													}),
												],
											}),
											(0, Ta.jsxs)(fa.div, {
												variants: rd,
												whileTap: {
													scale: 1.1,
													transition: {
														type: 'tween',
														duration: 0.5,
													},
												},
												className: 'tag-cmp app__flex',
												children: [
													(0, Ta.jsx)('p', {
														className: 'p-text',
														children: 'Fullstack',
													}),
													(0, Ta.jsx)('p', {
														className: 'p-text',
														children: 'Developer',
													}),
												],
											}),
										],
									}),
								}),
								(0, Ta.jsxs)(fa.div, {
									variants: ed,
									whileInView: ed.show,
									initial: 'hidden',
									animate: 'show',
									className: 'app__header-img',
									children: [
										(0, Ta.jsx)('img', {
											src: Sa.me2,
											alt: 'profile_bg',
										}),
										(0, Ta.jsx)(fa.img, {
											variants: td,
											className: 'overlay_circle',
											src: Sa.hexagon,
											alt: 'profile_circle',
										}),
									],
								}),
								(0, Ta.jsx)(fa.div, {
									className: 'app__header-circles',
									variants: Zc,
									initial: 'hidden',
									animate: 'show',
									children: [
										Sa.html,
										Sa.javascript,
										Sa.sass,
									].map((e, t) =>
										(0, Ta.jsx)(
											fa.div,
											{
												variants: nd,
												className:
													'circle-cmp app_flex',
												children: (0, Ta.jsx)(fa.img, {
													whileInView: {
														opacity: [0, 1],
													},
													transition: {
														duration: 0.2,
														type: 'tween',
														delayChildren: 1.1,
														staggerChildren: 0.6,
													},
													src: e,
													whileHover: { scale: 1.1 },
													whileTap: {
														scale: 0.6,
														rotate: -180,
														transition: {
															type: 'tween',
															duration: 0.5,
														},
													},
													alt: 'circle',
												}),
											},
											'circle-'.concat(t),
										),
									),
								}),
							],
						}),
					'home',
				);
			var od = n(694);
			function ad(e) {
				return e.split('-')[1];
			}
			function sd(e) {
				return 'y' === e ? 'height' : 'width';
			}
			function ld(e) {
				return e.split('-')[0];
			}
			function ud(e) {
				return ['top', 'bottom'].includes(ld(e)) ? 'x' : 'y';
			}
			function cd(e, t, n) {
				let { reference: r, floating: i } = e;
				const o = r.x + r.width / 2 - i.width / 2,
					a = r.y + r.height / 2 - i.height / 2,
					s = ud(t),
					l = sd(s),
					u = r[l] / 2 - i[l] / 2,
					c = 'x' === s;
				let d;
				switch (ld(t)) {
					case 'top':
						d = { x: o, y: r.y - i.height };
						break;
					case 'bottom':
						d = { x: o, y: r.y + r.height };
						break;
					case 'right':
						d = { x: r.x + r.width, y: a };
						break;
					case 'left':
						d = { x: r.x - i.width, y: a };
						break;
					default:
						d = { x: r.x, y: r.y };
				}
				switch (ad(t)) {
					case 'start':
						d[s] -= u * (n && c ? -1 : 1);
						break;
					case 'end':
						d[s] += u * (n && c ? -1 : 1);
				}
				return d;
			}
			const dd = async (e, t, n) => {
				const {
						placement: r = 'bottom',
						strategy: i = 'absolute',
						middleware: o = [],
						platform: a,
					} = n,
					s = o.filter(Boolean),
					l = await (null == a.isRTL ? void 0 : a.isRTL(t));
				let u = await a.getElementRects({
						reference: e,
						floating: t,
						strategy: i,
					}),
					{ x: c, y: d } = cd(u, r, l),
					f = r,
					h = {},
					p = 0;
				for (let m = 0; m < s.length; m++) {
					const { name: n, fn: o } = s[m],
						{
							x: g,
							y: v,
							data: A,
							reset: y,
						} = await o({
							x: c,
							y: d,
							initialPlacement: r,
							placement: f,
							strategy: i,
							middlewareData: h,
							rects: u,
							platform: a,
							elements: { reference: e, floating: t },
						});
					(c = null != g ? g : c),
						(d = null != v ? v : d),
						(h = { ...h, [n]: { ...h[n], ...A } }),
						y &&
							p <= 50 &&
							(p++,
							'object' == typeof y &&
								(y.placement && (f = y.placement),
								y.rects &&
									(u =
										!0 === y.rects
											? await a.getElementRects({
													reference: e,
													floating: t,
													strategy: i,
												})
											: y.rects),
								({ x: c, y: d } = cd(u, f, l))),
							(m = -1));
				}
				return {
					x: c,
					y: d,
					placement: f,
					strategy: i,
					middlewareData: h,
				};
			};
			function fd(e) {
				return 'number' != typeof e
					? (function (e) {
							return {
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
								...e,
							};
						})(e)
					: { top: e, right: e, bottom: e, left: e };
			}
			function hd(e) {
				return {
					...e,
					top: e.y,
					left: e.x,
					right: e.x + e.width,
					bottom: e.y + e.height,
				};
			}
			async function pd(e, t) {
				var n;
				void 0 === t && (t = {});
				const {
						x: r,
						y: i,
						platform: o,
						rects: a,
						elements: s,
						strategy: l,
					} = e,
					{
						boundary: u = 'clippingAncestors',
						rootBoundary: c = 'viewport',
						elementContext: d = 'floating',
						altBoundary: f = !1,
						padding: h = 0,
					} = t,
					p = fd(h),
					m =
						s[
							f
								? 'floating' === d
									? 'reference'
									: 'floating'
								: d
						],
					g = hd(
						await o.getClippingRect({
							element:
								null ==
									(n = await (null == o.isElement
										? void 0
										: o.isElement(m))) || n
									? m
									: m.contextElement ||
										(await (null == o.getDocumentElement
											? void 0
											: o.getDocumentElement(
													s.floating,
												))),
							boundary: u,
							rootBoundary: c,
							strategy: l,
						}),
					),
					v =
						'floating' === d
							? { ...a.floating, x: r, y: i }
							: a.reference,
					A = await (null == o.getOffsetParent
						? void 0
						: o.getOffsetParent(s.floating)),
					y = ((await (null == o.isElement
						? void 0
						: o.isElement(A))) &&
						(await (null == o.getScale
							? void 0
							: o.getScale(A)))) || { x: 1, y: 1 },
					w = hd(
						o.convertOffsetParentRelativeRectToViewportRelativeRect
							? await o.convertOffsetParentRelativeRectToViewportRelativeRect(
									{ rect: v, offsetParent: A, strategy: l },
								)
							: v,
					);
				return {
					top: (g.top - w.top + p.top) / y.y,
					bottom: (w.bottom - g.bottom + p.bottom) / y.y,
					left: (g.left - w.left + p.left) / y.x,
					right: (w.right - g.right + p.right) / y.x,
				};
			}
			const md = Math.min,
				gd = Math.max;
			function vd(e, t, n) {
				return gd(e, md(t, n));
			}
			const Ad = (e) => ({
					name: 'arrow',
					options: e,
					async fn(t) {
						const { element: n, padding: r = 0 } = e || {},
							{
								x: i,
								y: o,
								placement: a,
								rects: s,
								platform: l,
								elements: u,
							} = t;
						if (null == n) return {};
						const c = fd(r),
							d = { x: i, y: o },
							f = ud(a),
							h = sd(f),
							p = await l.getDimensions(n),
							m = 'y' === f,
							g = m ? 'top' : 'left',
							v = m ? 'bottom' : 'right',
							A = m ? 'clientHeight' : 'clientWidth',
							y =
								s.reference[h] +
								s.reference[f] -
								d[f] -
								s.floating[h],
							w = d[f] - s.reference[f],
							b = await (null == l.getOffsetParent
								? void 0
								: l.getOffsetParent(n));
						let x = b ? b[A] : 0;
						(x &&
							(await (null == l.isElement
								? void 0
								: l.isElement(b)))) ||
							(x = u.floating[A] || s.floating[h]);
						const E = y / 2 - w / 2,
							C = c[g],
							k = x - p[h] - c[v],
							S = x / 2 - p[h] / 2 + E,
							T = vd(C, S, k),
							_ =
								null != ad(a) &&
								S != T &&
								s.reference[h] / 2 -
									(S < C ? c[g] : c[v]) -
									p[h] / 2 <
									0;
						return {
							[f]: d[f] - (_ ? (S < C ? C - S : k - S) : 0),
							data: { [f]: T, centerOffset: S - T },
						};
					},
				}),
				yd = ['top', 'right', 'bottom', 'left'],
				wd =
					(yd.reduce(
						(e, t) => e.concat(t, t + '-start', t + '-end'),
						[],
					),
					{
						left: 'right',
						right: 'left',
						bottom: 'top',
						top: 'bottom',
					});
			function bd(e) {
				return e.replace(/left|right|bottom|top/g, (e) => wd[e]);
			}
			function xd(e, t, n) {
				void 0 === n && (n = !1);
				const r = ad(e),
					i = ud(e),
					o = sd(i);
				let a =
					'x' === i
						? r === (n ? 'end' : 'start')
							? 'right'
							: 'left'
						: 'start' === r
							? 'bottom'
							: 'top';
				return (
					t.reference[o] > t.floating[o] && (a = bd(a)),
					{ main: a, cross: bd(a) }
				);
			}
			const Ed = { start: 'end', end: 'start' };
			function Cd(e) {
				return e.replace(/start|end/g, (e) => Ed[e]);
			}
			const kd = function (e) {
				return (
					void 0 === e && (e = {}),
					{
						name: 'flip',
						options: e,
						async fn(t) {
							var n;
							const {
									placement: r,
									middlewareData: i,
									rects: o,
									initialPlacement: a,
									platform: s,
									elements: l,
								} = t,
								{
									mainAxis: u = !0,
									crossAxis: c = !0,
									fallbackPlacements: d,
									fallbackStrategy: f = 'bestFit',
									fallbackAxisSideDirection: h = 'none',
									flipAlignment: p = !0,
									...m
								} = e,
								g = ld(r),
								v = ld(a) === a,
								A = await (null == s.isRTL
									? void 0
									: s.isRTL(l.floating)),
								y =
									d ||
									(v || !p
										? [bd(a)]
										: (function (e) {
												const t = bd(e);
												return [Cd(e), t, Cd(t)];
											})(a));
							d ||
								'none' === h ||
								y.push(
									...(function (e, t, n, r) {
										const i = ad(e);
										let o = (function (e, t, n) {
											const r = ['left', 'right'],
												i = ['right', 'left'],
												o = ['top', 'bottom'],
												a = ['bottom', 'top'];
											switch (e) {
												case 'top':
												case 'bottom':
													return n
														? t
															? i
															: r
														: t
															? r
															: i;
												case 'left':
												case 'right':
													return t ? o : a;
												default:
													return [];
											}
										})(ld(e), 'start' === n, r);
										return (
											i &&
												((o = o.map(
													(e) => e + '-' + i,
												)),
												t && (o = o.concat(o.map(Cd)))),
											o
										);
									})(a, p, h, A),
								);
							const w = [a, ...y],
								b = await pd(t, m),
								x = [];
							let E =
								(null == (n = i.flip) ? void 0 : n.overflows) ||
								[];
							if ((u && x.push(b[g]), c)) {
								const { main: e, cross: t } = xd(r, o, A);
								x.push(b[e], b[t]);
							}
							if (
								((E = [...E, { placement: r, overflows: x }]),
								!x.every((e) => e <= 0))
							) {
								var C, k;
								const e =
										((null == (C = i.flip)
											? void 0
											: C.index) || 0) + 1,
									t = w[e];
								if (t)
									return {
										data: { index: e, overflows: E },
										reset: { placement: t },
									};
								let n =
									null ==
									(k = E.filter(
										(e) => e.overflows[0] <= 0,
									).sort(
										(e, t) =>
											e.overflows[1] - t.overflows[1],
									)[0])
										? void 0
										: k.placement;
								if (!n)
									switch (f) {
										case 'bestFit': {
											var S;
											const e =
												null ==
												(S = E.map((e) => [
													e.placement,
													e.overflows
														.filter((e) => e > 0)
														.reduce(
															(e, t) => e + t,
															0,
														),
												]).sort(
													(e, t) => e[1] - t[1],
												)[0])
													? void 0
													: S[0];
											e && (n = e);
											break;
										}
										case 'initialPlacement':
											n = a;
									}
								if (r !== n) return { reset: { placement: n } };
							}
							return {};
						},
					}
				);
			};
			const Sd = function (e) {
				return (
					void 0 === e && (e = 0),
					{
						name: 'offset',
						options: e,
						async fn(t) {
							const { x: n, y: r } = t,
								i = await (async function (e, t) {
									const {
											placement: n,
											platform: r,
											elements: i,
										} = e,
										o = await (null == r.isRTL
											? void 0
											: r.isRTL(i.floating)),
										a = ld(n),
										s = ad(n),
										l = 'x' === ud(n),
										u = ['left', 'top'].includes(a)
											? -1
											: 1,
										c = o && l ? -1 : 1,
										d = 'function' == typeof t ? t(e) : t;
									let {
										mainAxis: f,
										crossAxis: h,
										alignmentAxis: p,
									} = 'number' == typeof d
										? {
												mainAxis: d,
												crossAxis: 0,
												alignmentAxis: null,
											}
										: {
												mainAxis: 0,
												crossAxis: 0,
												alignmentAxis: null,
												...d,
											};
									return (
										s &&
											'number' == typeof p &&
											(h = 'end' === s ? -1 * p : p),
										l
											? { x: h * c, y: f * u }
											: { x: f * u, y: h * c }
									);
								})(t, e);
							return { x: n + i.x, y: r + i.y, data: i };
						},
					}
				);
			};
			function Td(e) {
				return 'x' === e ? 'y' : 'x';
			}
			const _d = function (e) {
				return (
					void 0 === e && (e = {}),
					{
						name: 'shift',
						options: e,
						async fn(t) {
							const { x: n, y: r, placement: i } = t,
								{
									mainAxis: o = !0,
									crossAxis: a = !1,
									limiter: s = {
										fn: (e) => {
											let { x: t, y: n } = e;
											return { x: t, y: n };
										},
									},
									...l
								} = e,
								u = { x: n, y: r },
								c = await pd(t, l),
								d = ud(ld(i)),
								f = Td(d);
							let h = u[d],
								p = u[f];
							if (o) {
								const e = 'y' === d ? 'bottom' : 'right';
								h = vd(
									h + c['y' === d ? 'top' : 'left'],
									h,
									h - c[e],
								);
							}
							if (a) {
								const e = 'y' === f ? 'bottom' : 'right';
								p = vd(
									p + c['y' === f ? 'top' : 'left'],
									p,
									p - c[e],
								);
							}
							const m = s.fn({ ...t, [d]: h, [f]: p });
							return { ...m, data: { x: m.x - n, y: m.y - r } };
						},
					}
				);
			};
			function Pd(e) {
				var t;
				return (
					(null == (t = e.ownerDocument) ? void 0 : t.defaultView) ||
					window
				);
			}
			function Md(e) {
				return Pd(e).getComputedStyle(e);
			}
			function Dd(e) {
				return e instanceof Pd(e).Node;
			}
			function Od(e) {
				return Dd(e) ? (e.nodeName || '').toLowerCase() : '';
			}
			let Rd;
			function Bd() {
				if (Rd) return Rd;
				const e = navigator.userAgentData;
				return e && Array.isArray(e.brands)
					? ((Rd = e.brands
							.map((e) => e.brand + '/' + e.version)
							.join(' ')),
						Rd)
					: navigator.userAgent;
			}
			function Ld(e) {
				return e instanceof Pd(e).HTMLElement;
			}
			function Id(e) {
				return e instanceof Pd(e).Element;
			}
			function Fd(e) {
				return (
					'undefined' != typeof ShadowRoot &&
					(e instanceof Pd(e).ShadowRoot || e instanceof ShadowRoot)
				);
			}
			function jd(e) {
				const {
					overflow: t,
					overflowX: n,
					overflowY: r,
					display: i,
				} = Md(e);
				return (
					/auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
					!['inline', 'contents'].includes(i)
				);
			}
			function Nd(e) {
				return ['table', 'td', 'th'].includes(Od(e));
			}
			function zd(e) {
				const t = /firefox/i.test(Bd()),
					n = Md(e),
					r = n.backdropFilter || n.WebkitBackdropFilter;
				return (
					'none' !== n.transform ||
					'none' !== n.perspective ||
					(!!r && 'none' !== r) ||
					(t && 'filter' === n.willChange) ||
					(t && !!n.filter && 'none' !== n.filter) ||
					['transform', 'perspective'].some((e) =>
						n.willChange.includes(e),
					) ||
					['paint', 'layout', 'strict', 'content'].some((e) => {
						const t = n.contain;
						return null != t && t.includes(e);
					})
				);
			}
			function Vd() {
				return /^((?!chrome|android).)*safari/i.test(Bd());
			}
			function Ud(e) {
				return ['html', 'body', '#document'].includes(Od(e));
			}
			const Yd = Math.min,
				Qd = Math.max,
				Hd = Math.round;
			function Gd(e) {
				const t = Md(e);
				let n = parseFloat(t.width),
					r = parseFloat(t.height);
				const i = Ld(e),
					o = i ? e.offsetWidth : n,
					a = i ? e.offsetHeight : r,
					s = Hd(n) !== o || Hd(r) !== a;
				return (
					s && ((n = o), (r = a)),
					{ width: n, height: r, fallback: s }
				);
			}
			function Wd(e) {
				return Id(e) ? e : e.contextElement;
			}
			const Xd = { x: 1, y: 1 };
			function qd(e) {
				const t = Wd(e);
				if (!Ld(t)) return Xd;
				const n = t.getBoundingClientRect(),
					{ width: r, height: i, fallback: o } = Gd(t);
				let a = (o ? Hd(n.width) : n.width) / r,
					s = (o ? Hd(n.height) : n.height) / i;
				return (
					(a && Number.isFinite(a)) || (a = 1),
					(s && Number.isFinite(s)) || (s = 1),
					{ x: a, y: s }
				);
			}
			function Jd(e, t, n, r) {
				var i, o;
				void 0 === t && (t = !1), void 0 === n && (n = !1);
				const a = e.getBoundingClientRect(),
					s = Wd(e);
				let l = Xd;
				t && (r ? Id(r) && (l = qd(r)) : (l = qd(e)));
				const u = s ? Pd(s) : window,
					c = Vd() && n;
				let d =
						(a.left +
							((c &&
								(null == (i = u.visualViewport)
									? void 0
									: i.offsetLeft)) ||
								0)) /
						l.x,
					f =
						(a.top +
							((c &&
								(null == (o = u.visualViewport)
									? void 0
									: o.offsetTop)) ||
								0)) /
						l.y,
					h = a.width / l.x,
					p = a.height / l.y;
				if (s) {
					const e = Pd(s),
						t = r && Id(r) ? Pd(r) : r;
					let n = e.frameElement;
					for (; n && r && t !== e; ) {
						const e = qd(n),
							t = n.getBoundingClientRect(),
							r = getComputedStyle(n);
						(t.x +=
							(n.clientLeft + parseFloat(r.paddingLeft)) * e.x),
							(t.y +=
								(n.clientTop + parseFloat(r.paddingTop)) * e.y),
							(d *= e.x),
							(f *= e.y),
							(h *= e.x),
							(p *= e.y),
							(d += t.x),
							(f += t.y),
							(n = Pd(n).frameElement);
					}
				}
				return hd({ width: h, height: p, x: d, y: f });
			}
			function Kd(e) {
				return (
					(Dd(e) ? e.ownerDocument : e.document) || window.document
				).documentElement;
			}
			function Zd(e) {
				return Id(e)
					? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
					: { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
			}
			function $d(e) {
				return Jd(Kd(e)).left + Zd(e).scrollLeft;
			}
			function ef(e) {
				if ('html' === Od(e)) return e;
				const t =
					e.assignedSlot ||
					e.parentNode ||
					(Fd(e) && e.host) ||
					Kd(e);
				return Fd(t) ? t.host : t;
			}
			function tf(e) {
				const t = ef(e);
				return Ud(t)
					? t.ownerDocument.body
					: Ld(t) && jd(t)
						? t
						: tf(t);
			}
			function nf(e, t) {
				var n;
				void 0 === t && (t = []);
				const r = tf(e),
					i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
					o = Pd(r);
				return i
					? t.concat(o, o.visualViewport || [], jd(r) ? r : [])
					: t.concat(r, nf(r));
			}
			function rf(e, t, n) {
				let r;
				if ('viewport' === t)
					r = (function (e, t) {
						const n = Pd(e),
							r = Kd(e),
							i = n.visualViewport;
						let o = r.clientWidth,
							a = r.clientHeight,
							s = 0,
							l = 0;
						if (i) {
							(o = i.width), (a = i.height);
							const e = Vd();
							(!e || (e && 'fixed' === t)) &&
								((s = i.offsetLeft), (l = i.offsetTop));
						}
						return { width: o, height: a, x: s, y: l };
					})(e, n);
				else if ('document' === t)
					r = (function (e) {
						const t = Kd(e),
							n = Zd(e),
							r = e.ownerDocument.body,
							i = Qd(
								t.scrollWidth,
								t.clientWidth,
								r.scrollWidth,
								r.clientWidth,
							),
							o = Qd(
								t.scrollHeight,
								t.clientHeight,
								r.scrollHeight,
								r.clientHeight,
							);
						let a = -n.scrollLeft + $d(e);
						const s = -n.scrollTop;
						return (
							'rtl' === Md(r).direction &&
								(a += Qd(t.clientWidth, r.clientWidth) - i),
							{ width: i, height: o, x: a, y: s }
						);
					})(Kd(e));
				else if (Id(t))
					r = (function (e, t) {
						const n = Jd(e, !0, 'fixed' === t),
							r = n.top + e.clientTop,
							i = n.left + e.clientLeft,
							o = Ld(e) ? qd(e) : { x: 1, y: 1 };
						return {
							width: e.clientWidth * o.x,
							height: e.clientHeight * o.y,
							x: i * o.x,
							y: r * o.y,
						};
					})(t, n);
				else {
					const n = { ...t };
					if (Vd()) {
						var i, o;
						const t = Pd(e);
						(n.x -=
							(null == (i = t.visualViewport)
								? void 0
								: i.offsetLeft) || 0),
							(n.y -=
								(null == (o = t.visualViewport)
									? void 0
									: o.offsetTop) || 0);
					}
					r = n;
				}
				return hd(r);
			}
			function of(e, t) {
				return Ld(e) && 'fixed' !== Md(e).position
					? t
						? t(e)
						: e.offsetParent
					: null;
			}
			function af(e, t) {
				const n = Pd(e);
				if (!Ld(e)) return n;
				let r = of(e, t);
				for (; r && Nd(r) && 'static' === Md(r).position; )
					r = of(r, t);
				return r &&
					('html' === Od(r) ||
						('body' === Od(r) &&
							'static' === Md(r).position &&
							!zd(r)))
					? n
					: r ||
							(function (e) {
								let t = ef(e);
								for (; Ld(t) && !Ud(t); ) {
									if (zd(t)) return t;
									t = ef(t);
								}
								return null;
							})(e) ||
							n;
			}
			function sf(e, t, n) {
				const r = Ld(t),
					i = Kd(t),
					o = Jd(e, !0, 'fixed' === n, t);
				let a = { scrollLeft: 0, scrollTop: 0 };
				const s = { x: 0, y: 0 };
				if (r || (!r && 'fixed' !== n))
					if ((('body' !== Od(t) || jd(i)) && (a = Zd(t)), Ld(t))) {
						const e = Jd(t, !0);
						(s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
					} else i && (s.x = $d(i));
				return {
					x: o.left + a.scrollLeft - s.x,
					y: o.top + a.scrollTop - s.y,
					width: o.width,
					height: o.height,
				};
			}
			const lf = {
				getClippingRect: function (e) {
					let {
						element: t,
						boundary: n,
						rootBoundary: r,
						strategy: i,
					} = e;
					const o =
							'clippingAncestors' === n
								? (function (e, t) {
										const n = t.get(e);
										if (n) return n;
										let r = nf(e).filter(
												(e) =>
													Id(e) && 'body' !== Od(e),
											),
											i = null;
										const o = 'fixed' === Md(e).position;
										let a = o ? ef(e) : e;
										for (; Id(a) && !Ud(a); ) {
											const e = Md(a),
												t = zd(a);
											'fixed' === e.position
												? (i = null)
												: (
															o
																? t || i
																: t ||
																	'static' !==
																		e.position ||
																	!i ||
																	![
																		'absolute',
																		'fixed',
																	].includes(
																		i.position,
																	)
													  )
													? (i = e)
													: (r = r.filter(
															(e) => e !== a,
														)),
												(a = ef(a));
										}
										return t.set(e, r), r;
									})(t, this._c)
								: [].concat(n),
						a = [...o, r],
						s = a[0],
						l = a.reduce(
							(e, n) => {
								const r = rf(t, n, i);
								return (
									(e.top = Qd(r.top, e.top)),
									(e.right = Yd(r.right, e.right)),
									(e.bottom = Yd(r.bottom, e.bottom)),
									(e.left = Qd(r.left, e.left)),
									e
								);
							},
							rf(t, s, i),
						);
					return {
						width: l.right - l.left,
						height: l.bottom - l.top,
						x: l.left,
						y: l.top,
					};
				},
				convertOffsetParentRelativeRectToViewportRelativeRect:
					function (e) {
						let { rect: t, offsetParent: n, strategy: r } = e;
						const i = Ld(n),
							o = Kd(n);
						if (n === o) return t;
						let a = { scrollLeft: 0, scrollTop: 0 },
							s = { x: 1, y: 1 };
						const l = { x: 0, y: 0 };
						if (
							(i || (!i && 'fixed' !== r)) &&
							(('body' !== Od(n) || jd(o)) && (a = Zd(n)), Ld(n))
						) {
							const e = Jd(n);
							(s = qd(n)),
								(l.x = e.x + n.clientLeft),
								(l.y = e.y + n.clientTop);
						}
						return {
							width: t.width * s.x,
							height: t.height * s.y,
							x: t.x * s.x - a.scrollLeft * s.x + l.x,
							y: t.y * s.y - a.scrollTop * s.y + l.y,
						};
					},
				isElement: Id,
				getDimensions: function (e) {
					return Gd(e);
				},
				getOffsetParent: af,
				getDocumentElement: Kd,
				getScale: qd,
				async getElementRects(e) {
					let { reference: t, floating: n, strategy: r } = e;
					const i = this.getOffsetParent || af,
						o = this.getDimensions;
					return {
						reference: sf(t, await i(n), r),
						floating: { x: 0, y: 0, ...(await o(n)) },
					};
				},
				getClientRects: (e) => Array.from(e.getClientRects()),
				isRTL: (e) => 'rtl' === Md(e).direction,
			};
			const uf = (e, t, n) => {
					const r = new Map(),
						i = { platform: lf, ...n },
						o = { ...i.platform, _c: r };
					return dd(e, t, { ...i, platform: o });
				},
				cf = (e, t, n) => {
					let r = null;
					return function () {
						for (
							var i = arguments.length, o = new Array(i), a = 0;
							a < i;
							a++
						)
							o[a] = arguments[a];
						r && clearTimeout(r),
							(r = setTimeout(() => {
								(r = null), n || e.apply(this, o);
							}, t));
					};
				},
				df = {
					anchorRefs: new Set(),
					activeAnchor: { current: null },
					attach: () => {},
					detach: () => {},
					setActiveAnchor: () => {},
				},
				ff = (0, e.createContext)({ getTooltipData: () => df });
			function hf() {
				let t =
					arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: 'DEFAULT_TOOLTIP_ID';
				return (0, e.useContext)(ff).getTooltipData(t);
			}
			const pf =
					'undefined' != typeof window
						? e.useLayoutEffect
						: e.useEffect,
				mf = async (e) => {
					let {
						elementReference: t = null,
						tooltipReference: n = null,
						tooltipArrowReference: r = null,
						place: i = 'top',
						offset: o = 10,
						strategy: a = 'absolute',
						middlewares: s = [
							Sd(Number(o)),
							kd(),
							_d({ padding: 5 }),
						],
					} = e;
					if (!t)
						return {
							tooltipStyles: {},
							tooltipArrowStyles: {},
							place: i,
						};
					if (null === n)
						return {
							tooltipStyles: {},
							tooltipArrowStyles: {},
							place: i,
						};
					const l = s;
					return r
						? (l.push(Ad({ element: r, padding: 5 })),
							uf(t, n, {
								placement: i,
								strategy: a,
								middleware: l,
							}).then((e) => {
								let {
									x: t,
									y: n,
									placement: r,
									middlewareData: i,
								} = e;
								var o, a;
								const s = {
										left: ''.concat(t, 'px'),
										top: ''.concat(n, 'px'),
									},
									{ x: l, y: u } =
										null !== (o = i.arrow) && void 0 !== o
											? o
											: { x: 0, y: 0 };
								return {
									tooltipStyles: s,
									tooltipArrowStyles: {
										left:
											null != l ? ''.concat(l, 'px') : '',
										top:
											null != u ? ''.concat(u, 'px') : '',
										right: '',
										bottom: '',
										[null !==
											(a = {
												top: 'bottom',
												right: 'left',
												bottom: 'top',
												left: 'right',
											}[r.split('-')[0]]) && void 0 !== a
											? a
											: 'bottom']: '-4px',
									},
									place: r,
								};
							}))
						: uf(t, n, {
								placement: 'bottom',
								strategy: a,
								middleware: l,
							}).then((e) => {
								let { x: t, y: n, placement: r } = e;
								return {
									tooltipStyles: {
										left: ''.concat(t, 'px'),
										top: ''.concat(n, 'px'),
									},
									tooltipArrowStyles: {},
									place: r,
								};
							});
				};
			var gf = {
				tooltip: 'styles-module_tooltip__mnnfp',
				fixed: 'styles-module_fixed__7ciUi',
				arrow: 'styles-module_arrow__K0L3T',
				noArrow: 'styles-module_noArrow__T8y2L',
				clickable: 'styles-module_clickable__Bv9o7',
				show: 'styles-module_show__2NboJ',
				dark: 'styles-module_dark__xNqje',
				light: 'styles-module_light__Z6W-X',
				success: 'styles-module_success__A2AKt',
				warning: 'styles-module_warning__SCK0X',
				error: 'styles-module_error__JvumD',
				info: 'styles-module_info__BWdHW',
			};
			const vf = (t) => {
					let {
						id: n,
						className: r,
						classNameArrow: i,
						variant: o = 'dark',
						anchorId: a,
						anchorSelect: s,
						place: l = 'top',
						offset: u = 10,
						events: c = ['hover'],
						openOnClick: d = !1,
						positionStrategy: f = 'absolute',
						middlewares: h,
						wrapper: p,
						delayShow: m = 0,
						delayHide: g = 0,
						float: v = !1,
						noArrow: A = !1,
						clickable: y = !1,
						closeOnEsc: w = !1,
						style: b,
						position: x,
						afterShow: E,
						afterHide: C,
						content: k,
						contentWrapperRef: S,
						isOpen: T,
						setIsOpen: _,
						activeAnchor: P,
						setActiveAnchor: M,
					} = t;
					const D = (0, e.useRef)(null),
						O = (0, e.useRef)(null),
						R = (0, e.useRef)(null),
						B = (0, e.useRef)(null),
						[L, I] = (0, e.useState)(l),
						[F, j] = (0, e.useState)({}),
						[N, z] = (0, e.useState)({}),
						[V, U] = (0, e.useState)(!1),
						[Y, Q] = (0, e.useState)(!1),
						H = (0, e.useRef)(!1),
						G = (0, e.useRef)(null),
						{ anchorRefs: W, setActiveAnchor: X } = hf(n),
						q = (0, e.useRef)(!1),
						[J, K] = (0, e.useState)([]),
						Z = (0, e.useRef)(!1),
						$ = d || c.includes('click');
					pf(
						() => (
							(Z.current = !0),
							() => {
								Z.current = !1;
							}
						),
						[],
					),
						(0, e.useEffect)(() => {
							if (!V) {
								const e = setTimeout(() => {
									Q(!1);
								}, 150);
								return () => {
									clearTimeout(e);
								};
							}
							return () => null;
						}, [V]);
					const ee = (e) => {
						Z.current &&
							(e && Q(!0),
							setTimeout(() => {
								Z.current &&
									(null == _ || _(e), void 0 === T && U(e));
							}, 10));
					};
					(0, e.useEffect)(() => {
						if (void 0 === T) return () => null;
						T && Q(!0);
						const e = setTimeout(() => {
							U(T);
						}, 10);
						return () => {
							clearTimeout(e);
						};
					}, [T]),
						(0, e.useEffect)(() => {
							V !== H.current &&
								((H.current = V),
								V ? null == E || E() : null == C || C());
						}, [V]);
					const te = function () {
							let e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: g;
							B.current && clearTimeout(B.current),
								(B.current = setTimeout(() => {
									q.current || ee(!1);
								}, e));
						},
						ne = (e) => {
							var t;
							if (!e) return;
							const n =
								null !== (t = e.currentTarget) && void 0 !== t
									? t
									: e.target;
							if (!(null == n ? void 0 : n.isConnected))
								return M(null), void X({ current: null });
							m
								? (R.current && clearTimeout(R.current),
									(R.current = setTimeout(() => {
										ee(!0);
									}, m)))
								: ee(!0),
								M(n),
								X({ current: n }),
								B.current && clearTimeout(B.current);
						},
						re = () => {
							y ? te(g || 100) : g ? te() : ee(!1),
								R.current && clearTimeout(R.current);
						},
						ie = (e) => {
							let { x: t, y: n } = e;
							mf({
								place: l,
								offset: u,
								elementReference: {
									getBoundingClientRect: () => ({
										x: t,
										y: n,
										width: 0,
										height: 0,
										top: n,
										left: t,
										right: t,
										bottom: n,
									}),
								},
								tooltipReference: D.current,
								tooltipArrowReference: O.current,
								strategy: f,
								middlewares: h,
							}).then((e) => {
								Object.keys(e.tooltipStyles).length &&
									j(e.tooltipStyles),
									Object.keys(e.tooltipArrowStyles).length &&
										z(e.tooltipArrowStyles),
									I(e.place);
							});
						},
						oe = (e) => {
							if (!e) return;
							const t = e,
								n = { x: t.clientX, y: t.clientY };
							ie(n), (G.current = n);
						},
						ae = (e) => {
							ne(e), g && te();
						},
						se = (e) => {
							var t;
							[
								document.querySelector("[id='".concat(a, "']")),
								...J,
							].some((t) =>
								null == t ? void 0 : t.contains(e.target),
							) ||
								(null === (t = D.current) || void 0 === t
									? void 0
									: t.contains(e.target)) ||
								ee(!1);
						},
						le = (e) => {
							'Escape' === e.key && ee(!1);
						},
						ue = cf(ne, 50),
						ce = cf(re, 50);
					(0, e.useEffect)(() => {
						var e, t;
						const n = new Set(W);
						J.forEach((e) => {
							n.add({ current: e });
						});
						const r = document.querySelector(
							"[id='".concat(a, "']"),
						);
						r && n.add({ current: r }),
							w && window.addEventListener('keydown', le);
						const i = [];
						$
							? (window.addEventListener('click', se),
								i.push({ event: 'click', listener: ae }))
							: (i.push(
									{ event: 'mouseenter', listener: ue },
									{ event: 'mouseleave', listener: ce },
									{ event: 'focus', listener: ue },
									{ event: 'blur', listener: ce },
								),
								v &&
									i.push({
										event: 'mousemove',
										listener: oe,
									}));
						const o = () => {
								q.current = !0;
							},
							s = () => {
								(q.current = !1), re();
							};
						return (
							y &&
								!$ &&
								(null === (e = D.current) ||
									void 0 === e ||
									e.addEventListener('mouseenter', o),
								null === (t = D.current) ||
									void 0 === t ||
									t.addEventListener('mouseleave', s)),
							i.forEach((e) => {
								let { event: t, listener: r } = e;
								n.forEach((e) => {
									var n;
									null === (n = e.current) ||
										void 0 === n ||
										n.addEventListener(t, r);
								});
							}),
							() => {
								var e, t;
								$ && window.removeEventListener('click', se),
									w &&
										window.removeEventListener(
											'keydown',
											le,
										),
									y &&
										!$ &&
										(null === (e = D.current) ||
											void 0 === e ||
											e.removeEventListener(
												'mouseenter',
												o,
											),
										null === (t = D.current) ||
											void 0 === t ||
											t.removeEventListener(
												'mouseleave',
												s,
											)),
									i.forEach((e) => {
										let { event: t, listener: r } = e;
										n.forEach((e) => {
											var n;
											null === (n = e.current) ||
												void 0 === n ||
												n.removeEventListener(t, r);
										});
									});
							}
						);
					}, [Y, W, J, w, c]),
						(0, e.useEffect)(() => {
							let e = null != s ? s : '';
							!e &&
								n &&
								(e = "[data-tooltip-id='".concat(n, "']"));
							const t = new MutationObserver((t) => {
								const r = [];
								t.forEach((t) => {
									if (
										('attributes' === t.type &&
											'data-tooltip-id' ===
												t.attributeName &&
											t.target.getAttribute(
												'data-tooltip-id',
											) === n &&
											r.push(t.target),
										'childList' === t.type &&
											(P &&
												[...t.removedNodes].some(
													(e) => {
														var t;
														return (
															!!(null ===
																(t =
																	null == e
																		? void 0
																		: e.contains) ||
															void 0 === t
																? void 0
																: t.call(
																		e,
																		P,
																	)) &&
															(Q(!1),
															ee(!1),
															M(null),
															!0)
														);
													},
												),
											e))
									)
										try {
											const n = [...t.addedNodes].filter(
												(e) => 1 === e.nodeType,
											);
											r.push(
												...n.filter((t) =>
													t.matches(e),
												),
											),
												r.push(
													...n.flatMap((t) => [
														...t.querySelectorAll(
															e,
														),
													]),
												);
										} catch (e) {}
								}),
									r.length && K((e) => [...e, ...r]);
							});
							return (
								t.observe(document.body, {
									childList: !0,
									subtree: !0,
									attributes: !0,
									attributeFilter: ['data-tooltip-id'],
								}),
								() => {
									t.disconnect();
								}
							);
						}, [n, s, P]);
					const de = () => {
						x
							? ie(x)
							: v
								? G.current && ie(G.current)
								: mf({
										place: l,
										offset: u,
										elementReference: P,
										tooltipReference: D.current,
										tooltipArrowReference: O.current,
										strategy: f,
										middlewares: h,
									}).then((e) => {
										Z.current &&
											(Object.keys(e.tooltipStyles)
												.length && j(e.tooltipStyles),
											Object.keys(e.tooltipArrowStyles)
												.length &&
												z(e.tooltipArrowStyles),
											I(e.place));
									});
					};
					(0, e.useEffect)(() => {
						de();
					}, [V, P, k, b, l, u, f, x]),
						(0, e.useEffect)(() => {
							if (!(null == S ? void 0 : S.current))
								return () => null;
							const e = new ResizeObserver(() => {
								de();
							});
							return (
								e.observe(S.current),
								() => {
									e.disconnect();
								}
							);
						}, [k, null == S ? void 0 : S.current]),
						(0, e.useEffect)(() => {
							var e;
							const t = document.querySelector(
									"[id='".concat(a, "']"),
								),
								n = [...J, t];
							(P && n.includes(P)) ||
								M(null !== (e = J[0]) && void 0 !== e ? e : t);
						}, [a, J, P]),
						(0, e.useEffect)(
							() => () => {
								R.current && clearTimeout(R.current),
									B.current && clearTimeout(B.current);
							},
							[],
						),
						(0, e.useEffect)(() => {
							let e = s;
							if (
								(!e &&
									n &&
									(e = "[data-tooltip-id='".concat(n, "']")),
								e)
							)
								try {
									const t = Array.from(
										document.querySelectorAll(e),
									);
									K(t);
								} catch (e) {
									K([]);
								}
						}, [n, s]);
					const fe = k && V && Object.keys(F).length > 0;
					return Y
						? e.createElement(
								p,
								{
									id: n,
									role: 'tooltip',
									className: od(
										'react-tooltip',
										gf.tooltip,
										gf[o],
										r,
										'react-tooltip__place-'.concat(L),
										{
											[gf.show]: fe,
											[gf.fixed]: 'fixed' === f,
											[gf.clickable]: y,
										},
									),
									style: { ...b, ...F },
									ref: D,
								},
								k,
								e.createElement(p, {
									className: od(
										'react-tooltip-arrow',
										gf.arrow,
										i,
										{ [gf.noArrow]: A },
									),
									style: N,
									ref: O,
								}),
							)
						: null;
				},
				Af = (t) => {
					let { content: n } = t;
					return e.createElement('span', {
						dangerouslySetInnerHTML: { __html: n },
					});
				},
				yf = (t) => {
					let {
						id: n,
						anchorId: r,
						anchorSelect: i,
						content: o,
						html: a,
						render: s,
						className: l,
						classNameArrow: u,
						variant: c = 'dark',
						place: d = 'top',
						offset: f = 10,
						wrapper: h = 'div',
						children: p = null,
						events: m = ['hover'],
						openOnClick: g = !1,
						positionStrategy: v = 'absolute',
						middlewares: A,
						delayShow: y = 0,
						delayHide: w = 0,
						float: b = !1,
						noArrow: x = !1,
						clickable: E = !1,
						closeOnEsc: C = !1,
						style: k,
						position: S,
						isOpen: T,
						setIsOpen: _,
						afterShow: P,
						afterHide: M,
					} = t;
					const [D, O] = (0, e.useState)(o),
						[R, B] = (0, e.useState)(a),
						[L, I] = (0, e.useState)(d),
						[F, j] = (0, e.useState)(c),
						[N, z] = (0, e.useState)(f),
						[V, U] = (0, e.useState)(y),
						[Y, Q] = (0, e.useState)(w),
						[H, G] = (0, e.useState)(b),
						[W, X] = (0, e.useState)(h),
						[q, J] = (0, e.useState)(m),
						[K, Z] = (0, e.useState)(v),
						[$, ee] = (0, e.useState)(null),
						{ anchorRefs: te, activeAnchor: ne } = hf(n),
						re = (e) =>
							null == e
								? void 0
								: e.getAttributeNames().reduce((t, n) => {
										var r;
										return (
											n.startsWith('data-tooltip-') &&
												(t[
													n.replace(
														/^data-tooltip-/,
														'',
													)
												] =
													null !==
														(r =
															null == e
																? void 0
																: e.getAttribute(
																		n,
																	)) &&
													void 0 !== r
														? r
														: null),
											t
										);
									}, {}),
						ie = (e) => {
							const t = {
								place: (e) => {
									var t;
									I(null !== (t = e) && void 0 !== t ? t : d);
								},
								content: (e) => {
									O(null != e ? e : o);
								},
								html: (e) => {
									B(null != e ? e : a);
								},
								variant: (e) => {
									var t;
									j(null !== (t = e) && void 0 !== t ? t : c);
								},
								offset: (e) => {
									z(null === e ? f : Number(e));
								},
								wrapper: (e) => {
									var t;
									X(null !== (t = e) && void 0 !== t ? t : h);
								},
								events: (e) => {
									const t = null == e ? void 0 : e.split(' ');
									J(null != t ? t : m);
								},
								'position-strategy': (e) => {
									var t;
									Z(null !== (t = e) && void 0 !== t ? t : v);
								},
								'delay-show': (e) => {
									U(null === e ? y : Number(e));
								},
								'delay-hide': (e) => {
									Q(null === e ? w : Number(e));
								},
								float: (e) => {
									G(null === e ? b : 'true' === e);
								},
							};
							Object.values(t).forEach((e) => e(null)),
								Object.entries(e).forEach((e) => {
									let [n, r] = e;
									var i;
									null === (i = t[n]) ||
										void 0 === i ||
										i.call(t, r);
								});
						};
					(0, e.useEffect)(() => {
						O(o);
					}, [o]),
						(0, e.useEffect)(() => {
							B(a);
						}, [a]),
						(0, e.useEffect)(() => {
							I(d);
						}, [d]),
						(0, e.useEffect)(() => {
							var e;
							const t = new Set(te);
							let o = i;
							if (
								(!o &&
									n &&
									(o = "[data-tooltip-id='".concat(n, "']")),
								o)
							)
								try {
									document
										.querySelectorAll(o)
										.forEach((e) => {
											t.add({ current: e });
										});
								} catch (e) {
									console.warn(
										'[react-tooltip] "'.concat(
											i,
											'" is not a valid CSS selector',
										),
									);
								}
							const a = document.querySelector(
								"[id='".concat(r, "']"),
							);
							if ((a && t.add({ current: a }), !t.size))
								return () => null;
							const s =
									null !== (e = null != $ ? $ : a) &&
									void 0 !== e
										? e
										: ne.current,
								l = new MutationObserver((e) => {
									e.forEach((e) => {
										var t;
										if (
											!s ||
											'attributes' !== e.type ||
											!(null === (t = e.attributeName) ||
											void 0 === t
												? void 0
												: t.startsWith('data-tooltip-'))
										)
											return;
										const n = re(s);
										ie(n);
									});
								}),
								u = {
									attributes: !0,
									childList: !1,
									subtree: !1,
								};
							if (s) {
								const e = re(s);
								ie(e), l.observe(s, u);
							}
							return () => {
								l.disconnect();
							};
						}, [te, ne, $, r, i]);
					let oe = p;
					const ae = (0, e.useRef)(null);
					s
						? (oe = e.createElement(
								'div',
								{
									ref: ae,
									className: 'react-tooltip-content-wrapper',
								},
								s({
									content: null != D ? D : null,
									activeAnchor: $,
								}),
							))
						: D && (oe = D),
						R && (oe = e.createElement(Af, { content: R }));
					const se = {
						id: n,
						anchorId: r,
						anchorSelect: i,
						className: l,
						classNameArrow: u,
						content: oe,
						contentWrapperRef: ae,
						place: L,
						variant: F,
						offset: N,
						wrapper: W,
						events: q,
						openOnClick: g,
						positionStrategy: K,
						middlewares: A,
						delayShow: V,
						delayHide: Y,
						float: H,
						noArrow: x,
						clickable: E,
						closeOnEsc: C,
						style: k,
						position: S,
						isOpen: T,
						setIsOpen: _,
						afterShow: P,
						afterHide: M,
						activeAnchor: $,
						setActiveAnchor: (e) => ee(e),
					};
					return e.createElement(vf, { ...se });
				},
				wf = Ia(
					ja(() => {
						const [t, n] = (0, e.useState)([]),
							[r, i] = (0, e.useState)([]);
						return (
							(0, e.useEffect)(() => {
								Lc.fetch('*[_type == "experiences"]').then(
									(e) => {
										n(e);
									},
								),
									Lc.fetch('*[_type == "skills"]').then(
										(e) => {
											i(e);
										},
									);
							}, []),
							(0, Ta.jsxs)(Ta.Fragment, {
								children: [
									(0, Ta.jsx)('h2', {
										className: 'head-text',
										children: 'Skills & Experiences',
									}),
									(0, Ta.jsxs)('div', {
										className: 'app__skills-container',
										children: [
											(0, Ta.jsx)(fa.div, {
												className: 'app__skills-list',
												children: r.map((e) =>
													(0, Ta.jsxs)(
														fa.div,
														{
															whileInView: {
																opacity: [0, 1],
															},
															viewport: {
																once: !0,
															},
															transition: {
																duration: 0.5,
															},
															className:
																'app__skills-item app__flex',
															children: [
																(0, Ta.jsx)(
																	'div',
																	{
																		className:
																			'app__flex',
																		style: {
																			backgroundColor:
																				e.bgColor,
																		},
																		children:
																			(0,
																			Ta.jsx)(
																				'img',
																				{
																					src: Fc(
																						e.icon,
																					),
																					alt: e.imageAlt,
																				},
																			),
																	},
																),
																(0, Ta.jsx)(
																	'p',
																	{
																		className:
																			'p-text',
																		children:
																			e.name,
																	},
																),
															],
														},
														e.name,
													),
												),
											}),
											(0, Ta.jsx)('div', {
												className: 'app__skills-exp',
												children: t
													.sort(
														(e, t) =>
															e.year - t.year,
													)
													.map((e) =>
														(0, Ta.jsxs)(
															fa.div,
															{
																className:
																	'app__skills-exp-item',
																children: [
																	(0, Ta.jsx)(
																		'div',
																		{
																			className:
																				'app__skills-exp-year',
																			children:
																				(0,
																				Ta.jsx)(
																					'p',
																					{
																						className:
																							'bold-text',
																						children:
																							e.year,
																					},
																				),
																		},
																	),
																	(0, Ta.jsx)(
																		fa.div,
																		{
																			className:
																				'app__skills-exp-works',
																			children:
																				e.works.map(
																					(
																						e,
																					) =>
																						(0,
																						Ta.jsxs)(
																							Ta.Fragment,
																							{
																								children:
																									[
																										(0,
																										Ta.jsxs)(
																											fa.div,
																											{
																												className:
																													'app__skills-exp-work',
																												'data-tip':
																													!0,
																												'data-for':
																													e.name,
																												children:
																													[
																														(0,
																														Ta.jsx)(
																															'h4',
																															{
																																className:
																																	'bold-text',
																																children:
																																	e.name,
																															},
																														),
																														(0,
																														Ta.jsx)(
																															'p',
																															{
																																className:
																																	'p-text',
																																children:
																																	e.company,
																															},
																														),
																													],
																											},
																											e.name,
																										),
																										(0,
																										Ta.jsx)(
																											yf,
																											{
																												id: e.name,
																												effect: 'solid',
																												arrowColor:
																													'#fff',
																												className:
																													'skills-tooltip',
																												children:
																													e.desc,
																											},
																										),
																									],
																							},
																						),
																				),
																		},
																	),
																],
															},
															e.year,
														),
													),
											}),
										],
									}),
								],
							})
						);
					}, 'app__skills'),
					'skills',
					'app__whitebg',
				);
			function bf(e) {
				return Wc({
					tag: 'svg',
					attr: { viewBox: '0 0 1024 1024' },
					child: [
						{
							tag: 'path',
							attr: {
								d: 'M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z',
							},
						},
					],
				})(e);
			}
			function xf(e) {
				return Wc({
					tag: 'svg',
					attr: { viewBox: '0 0 1024 1024' },
					child: [
						{
							tag: 'path',
							attr: {
								d: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
							},
						},
					],
				})(e);
			}
			const Ef = Ia(
				ja(() => {
					const [t, n] = (0, e.useState)([]),
						[r, i] = (0, e.useState)([]),
						[o, a] = (0, e.useState)('All'),
						[s, l] = (0, e.useState)({ y: 0, opacity: 1 });
					(0, e.useEffect)(() => {
						Lc.fetch('*[_type == "works"]').then((e) => {
							n(e), i(e);
						});
					}, []);
					return (0, Ta.jsxs)(Ta.Fragment, {
						children: [
							(0, Ta.jsxs)(fa.h2, {
								className: 'head-text',
								children: [
									'My Creative ',
									(0, Ta.jsx)('span', {
										children: 'Portfolio',
									}),
									' Section',
								],
							}),
							(0, Ta.jsx)(fa.div, {
								whileInView: { opacity: [0, 1], y: [-100, 0] },
								transition: {
									duration: 0.7,
									type: 'tween',
									delay: 0.5,
									staggerChildren: 0.5,
								},
								viewport: { once: !0 },
								className: 'app__work-filter',
								children: [
									'UI/UX',
									'Web App',
									'React JS',
									'All',
								].map((e, n) =>
									(0, Ta.jsx)(
										'div',
										{
											onClick: () =>
												((e) => {
													a(e),
														l([
															{
																y: 100,
																opacity: 0,
															},
														]),
														setTimeout(() => {
															l([
																{
																	y: 0,
																	opacity: 1,
																},
															]),
																i(
																	'All' === e
																		? t
																		: t.filter(
																				(
																					t,
																				) =>
																					t.tags.includes(
																						e,
																					),
																			),
																);
														}, 500);
												})(e),
											className:
												'app__work-filter-item app__flex p-text '.concat(
													o === e
														? 'item-active'
														: '',
												),
											children: e,
										},
										n,
									),
								),
							}),
							(0, Ta.jsx)(fa.div, {
								animate: s,
								transition: {
									duration: 0.5,
									delayChildren: 0.5,
								},
								className: 'app__work-portfolio',
								children: r.map((e, t) =>
									(0, Ta.jsxs)(
										fa.div,
										{
											className:
												'app__work-item app__flex',
											children: [
												(0, Ta.jsxs)('div', {
													id: 'card',
													className:
														'app__work-img app__flex',
													children: [
														(0, Ta.jsx)('img', {
															src: Fc(e.imgUrl),
															alt: e.name,
														}),
														(0, Ta.jsxs)(fa.div, {
															whileHover: {
																opacity: [0, 1],
																transition: {
																	delay: 0.1,
																},
															},
															whileTap: {
																opacity: 1,
															},
															transition: {
																duration: 0.5,
																ease: 'easeInOut',
																staggerChildren: 0.5,
															},
															className:
																'app__work-hover app__flex',
															children: [
																(0, Ta.jsx)(
																	'a',
																	{
																		href: e.projectLink,
																		target: '_blank',
																		rel: 'noreferrer',
																		children:
																			(0,
																			Ta.jsx)(
																				fa.div,
																				{
																					whileInView:
																						{
																							scale: [
																								0,
																								1,
																							],
																						},
																					whileHover:
																						{
																							scale: [
																								1,
																								0.9,
																							],
																						},
																					transition:
																						{
																							duration: 0.25,
																						},
																					className:
																						'app__flex',
																					children:
																						(0,
																						Ta.jsx)(
																							bf,
																							{},
																						),
																				},
																			),
																	},
																),
																(0, Ta.jsx)(
																	'a',
																	{
																		href: e.codeLink,
																		target: '_blank',
																		rel: 'noreferrer',
																		children:
																			(0,
																			Ta.jsx)(
																				fa.div,
																				{
																					whileInView:
																						{
																							scale: [
																								0,
																								1,
																							],
																						},
																					whileHover:
																						{
																							scale: [
																								1,
																								0.9,
																							],
																						},
																					transition:
																						{
																							duration: 0.25,
																						},
																					className:
																						'app__flex',
																					children:
																						(0,
																						Ta.jsx)(
																							xf,
																							{},
																						),
																				},
																			),
																	},
																),
															],
														}),
													],
												}),
												(0, Ta.jsxs)('div', {
													className:
														'app__work-content app__flex',
													children: [
														(0, Ta.jsx)('h4', {
															className:
																'bold-text',
															children: e.title,
														}),
														(0, Ta.jsx)('p', {
															className: 'p-text',
															style: {
																marginTop: 10,
															},
															children:
																e.description,
														}),
														(0, Ta.jsx)('div', {
															className:
																'app__work-tag app__flex',
															children: (0,
															Ta.jsx)('p', {
																className:
																	'p-text',
																children:
																	e.tags[0],
															}),
														}),
													],
												}),
											],
										},
										t,
									),
								),
							}),
						],
					});
				}, 'app__works'),
				'work',
				'app__primarybg',
			);
			function Cf(e) {
				return Wc({
					tag: 'svg',
					attr: {
						viewBox: '0 0 20 20',
						fill: 'currentColor',
						'aria-hidden': 'true',
					},
					child: [
						{
							tag: 'path',
							attr: {
								fillRule: 'evenodd',
								d: 'M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z',
								clipRule: 'evenodd',
							},
						},
					],
				})(e);
			}
			function kf(e) {
				return Wc({
					tag: 'svg',
					attr: {
						viewBox: '0 0 20 20',
						fill: 'currentColor',
						'aria-hidden': 'true',
					},
					child: [
						{
							tag: 'path',
							attr: {
								fillRule: 'evenodd',
								d: 'M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z',
								clipRule: 'evenodd',
							},
						},
					],
				})(e);
			}
			const Sf = Ia(
				ja(() => {
					const [t, n] = (0, e.useState)(0),
						[r, i] = (0, e.useState)([]),
						o = (e) => {
							n(e);
						};
					return (
						(0, e.useEffect)(() => {
							Lc.fetch('*[_type == "testimonials"]').then((e) => {
								i(e);
							});
						}, []),
						(0, Ta.jsx)(Ta.Fragment, {
							children:
								r.length &&
								(0, Ta.jsxs)(Ta.Fragment, {
									children: [
										(0, Ta.jsxs)('div', {
											id: 'testimonials',
											className:
												'app__testimonial-item app__flex',
											children: [
												(0, Ta.jsx)('img', {
													src: Fc(r[t].imgurl),
													alt: r[t].name,
												}),
												(0, Ta.jsxs)('div', {
													className:
														'app__testimonial-content',
													children: [
														(0, Ta.jsx)('p', {
															className: 'p-text',
															children:
																r[t].feedback,
														}),
														(0, Ta.jsxs)('div', {
															children: [
																(0, Ta.jsx)(
																	'h4',
																	{
																		className:
																			'bold-text',
																		children:
																			r[t]
																				.name,
																	},
																),
																(0, Ta.jsx)(
																	'h5',
																	{
																		className:
																			'p-text',
																		children:
																			r[t]
																				.company,
																	},
																),
															],
														}),
													],
												}),
											],
										}),
										(0, Ta.jsxs)('div', {
											className:
												'app__testimonial-btns app__flex',
											children: [
												(0, Ta.jsx)('div', {
													className: 'app__flex',
													onClick: () =>
														o(
															0 === t
																? r.length - 1
																: t - 1,
														),
													children: (0, Ta.jsx)(
														Cf,
														{},
													),
												}),
												(0, Ta.jsx)('div', {
													className: 'app__flex',
													onClick: () =>
														o(
															t === r.length - 1
																? 0
																: t + 1,
														),
													children: (0, Ta.jsx)(
														kf,
														{},
													),
												}),
											],
										}),
									],
								}),
						})
					);
				}, 'app__testimonial'),
				'testimonial',
				'app__primarybg',
			);
			function Tf(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			var _f,
				Pf,
				Mf,
				Df,
				Of,
				Rf,
				Bf,
				Lf,
				If,
				Ff,
				jf,
				Nf,
				zf,
				Vf = function () {
					return (
						_f ||
						('undefined' !== typeof window &&
							(_f = window.gsap) &&
							_f.registerPlugin &&
							_f)
					);
				},
				Uf = 1,
				Yf = [],
				Qf = [],
				Hf = [],
				Gf = Date.now,
				Wf = function (e, t) {
					return t;
				},
				Xf = function (e, t) {
					return ~Hf.indexOf(e) && Hf[Hf.indexOf(e) + 1][t];
				},
				qf = function (e) {
					return !!~Ff.indexOf(e);
				},
				Jf = function (e, t, n, r, i) {
					return e.addEventListener(t, n, {
						passive: !r,
						capture: !!i,
					});
				},
				Kf = function (e, t, n, r) {
					return e.removeEventListener(t, n, !!r);
				},
				Zf = 'scrollLeft',
				$f = 'scrollTop',
				eh = function () {
					return (jf && jf.isPressed) || Qf.cache++;
				},
				th = function (e, t) {
					var n = function n(r) {
						if (r || 0 === r) {
							Uf && (Mf.history.scrollRestoration = 'manual');
							var i = jf && jf.isPressed;
							(r = n.v = Math.round(r) || (jf && jf.iOS ? 1 : 0)),
								e(r),
								(n.cacheID = Qf.cache),
								i && Wf('ss', r);
						} else
							(t || Qf.cache !== n.cacheID || Wf('ref')) &&
								((n.cacheID = Qf.cache), (n.v = e()));
						return n.v + n.offset;
					};
					return (n.offset = 0), e && n;
				},
				nh = {
					s: Zf,
					p: 'left',
					p2: 'Left',
					os: 'right',
					os2: 'Right',
					d: 'width',
					d2: 'Width',
					a: 'x',
					sc: th(function (e) {
						return arguments.length
							? Mf.scrollTo(e, rh.sc())
							: Mf.pageXOffset || Df[Zf] || Of[Zf] || Rf[Zf] || 0;
					}),
				},
				rh = {
					s: $f,
					p: 'top',
					p2: 'Top',
					os: 'bottom',
					os2: 'Bottom',
					d: 'height',
					d2: 'Height',
					a: 'y',
					op: nh,
					sc: th(function (e) {
						return arguments.length
							? Mf.scrollTo(nh.sc(), e)
							: Mf.pageYOffset || Df[$f] || Of[$f] || Rf[$f] || 0;
					}),
				},
				ih = function (e, t) {
					return (
						((t && t._ctx && t._ctx.selector) || _f.utils.toArray)(
							e,
						)[0] ||
						('string' === typeof e &&
						!1 !== _f.config().nullTargetWarn
							? console.warn('Element not found:', e)
							: null)
					);
				},
				oh = function (e, t) {
					var n = t.s,
						r = t.sc;
					qf(e) && (e = Df.scrollingElement || Of);
					var i = Qf.indexOf(e),
						o = r === rh.sc ? 1 : 2;
					!~i && (i = Qf.push(e) - 1),
						Qf[i + o] || Jf(e, 'scroll', eh);
					var a = Qf[i + o],
						s =
							a ||
							(Qf[i + o] =
								th(Xf(e, n), !0) ||
								(qf(e)
									? r
									: th(function (t) {
											return arguments.length
												? (e[n] = t)
												: e[n];
										})));
					return (
						(s.target = e),
						a ||
							(s.smooth =
								'smooth' ===
								_f.getProperty(e, 'scrollBehavior')),
						s
					);
				},
				ah = function (e, t, n) {
					var r = e,
						i = e,
						o = Gf(),
						a = o,
						s = t || 50,
						l = Math.max(500, 3 * s),
						u = function (e, t) {
							var l = Gf();
							t || l - o > s
								? ((i = r), (r = e), (a = o), (o = l))
								: n
									? (r += e)
									: (r = i + ((e - i) / (l - a)) * (o - a));
						};
					return {
						update: u,
						reset: function () {
							(i = r = n ? 0 : r), (a = o = 0);
						},
						getVelocity: function (e) {
							var t = a,
								s = i,
								c = Gf();
							return (
								(e || 0 === e) && e !== r && u(e),
								o === a || c - a > l
									? 0
									: ((r + (n ? s : -s)) / ((n ? c : o) - t)) *
										1e3
							);
						},
					};
				},
				sh = function (e, t) {
					return (
						t && !e._gsapAllow && e.preventDefault(),
						e.changedTouches ? e.changedTouches[0] : e
					);
				},
				lh = function (e) {
					var t = Math.max.apply(Math, e),
						n = Math.min.apply(Math, e);
					return Math.abs(t) >= Math.abs(n) ? t : n;
				},
				uh = function () {
					(If = _f.core.globals().ScrollTrigger) &&
						If.core &&
						(function () {
							var e = If.core,
								t = e.bridge || {},
								n = e._scrollers,
								r = e._proxies;
							n.push.apply(n, Qf),
								r.push.apply(r, Hf),
								(Qf = n),
								(Hf = r),
								(Wf = function (e, n) {
									return t[e](n);
								});
						})();
				},
				ch = function (e) {
					return (
						(_f = e || Vf()) &&
							'undefined' !== typeof document &&
							document.body &&
							((Mf = window),
							(Df = document),
							(Of = Df.documentElement),
							(Rf = Df.body),
							(Ff = [Mf, Df, Of, Rf]),
							_f.utils.clamp,
							(zf = _f.core.context || function () {}),
							(Lf = 'onpointerenter' in Rf ? 'pointer' : 'mouse'),
							(Bf = dh.isTouch =
								Mf.matchMedia &&
								Mf.matchMedia(
									'(hover: none), (pointer: coarse)',
								).matches
									? 1
									: 'ontouchstart' in Mf ||
										  navigator.maxTouchPoints > 0 ||
										  navigator.msMaxTouchPoints > 0
										? 2
										: 0),
							(Nf = dh.eventTypes =
								(
									'ontouchstart' in Of
										? 'touchstart,touchmove,touchcancel,touchend'
										: 'onpointerdown' in Of
											? 'pointerdown,pointermove,pointercancel,pointerup'
											: 'mousedown,mousemove,mouseup,mouseup'
								).split(',')),
							setTimeout(function () {
								return (Uf = 0);
							}, 500),
							uh(),
							(Pf = 1)),
						Pf
					);
				};
			(nh.op = rh), (Qf.cache = 0);
			var dh = (function () {
				function e(e) {
					this.init(e);
				}
				var t, n, r;
				return (
					(e.prototype.init = function (e) {
						Pf ||
							ch(_f) ||
							console.warn(
								'Please gsap.registerPlugin(Observer)',
							),
							If || uh();
						var t = e.tolerance,
							n = e.dragMinimum,
							r = e.type,
							i = e.target,
							o = e.lineHeight,
							a = e.debounce,
							s = e.preventDefault,
							l = e.onStop,
							u = e.onStopDelay,
							c = e.ignore,
							d = e.wheelSpeed,
							f = e.event,
							h = e.onDragStart,
							p = e.onDragEnd,
							m = e.onDrag,
							g = e.onPress,
							v = e.onRelease,
							A = e.onRight,
							y = e.onLeft,
							w = e.onUp,
							b = e.onDown,
							x = e.onChangeX,
							E = e.onChangeY,
							C = e.onChange,
							k = e.onToggleX,
							S = e.onToggleY,
							T = e.onHover,
							_ = e.onHoverEnd,
							P = e.onMove,
							M = e.ignoreCheck,
							D = e.isNormalizer,
							O = e.onGestureStart,
							R = e.onGestureEnd,
							B = e.onWheel,
							L = e.onEnable,
							I = e.onDisable,
							F = e.onClick,
							j = e.scrollSpeed,
							N = e.capture,
							z = e.allowClicks,
							V = e.lockAxis,
							U = e.onLockAxis;
						(this.target = i = ih(i) || Of),
							(this.vars = e),
							c && (c = _f.utils.toArray(c)),
							(t = t || 1e-9),
							(n = n || 0),
							(d = d || 1),
							(j = j || 1),
							(r = r || 'wheel,touch,pointer'),
							(a = !1 !== a),
							o ||
								(o =
									parseFloat(
										Mf.getComputedStyle(Rf).lineHeight,
									) || 22);
						var Y,
							Q,
							H,
							G,
							W,
							X,
							q,
							J = this,
							K = 0,
							Z = 0,
							$ = oh(i, nh),
							ee = oh(i, rh),
							te = $(),
							ne = ee(),
							re =
								~r.indexOf('touch') &&
								!~r.indexOf('pointer') &&
								'pointerdown' === Nf[0],
							ie = qf(i),
							oe = i.ownerDocument || Df,
							ae = [0, 0, 0],
							se = [0, 0, 0],
							le = 0,
							ue = function () {
								return (le = Gf());
							},
							ce = function (e, t) {
								return (
									((J.event = e) &&
										c &&
										~c.indexOf(e.target)) ||
									(t && re && 'touch' !== e.pointerType) ||
									(M && M(e, t))
								);
							},
							de = function () {
								var e = (J.deltaX = lh(ae)),
									n = (J.deltaY = lh(se)),
									r = Math.abs(e) >= t,
									i = Math.abs(n) >= t;
								C && (r || i) && C(J, e, n, ae, se),
									r &&
										(A && J.deltaX > 0 && A(J),
										y && J.deltaX < 0 && y(J),
										x && x(J),
										k && J.deltaX < 0 !== K < 0 && k(J),
										(K = J.deltaX),
										(ae[0] = ae[1] = ae[2] = 0)),
									i &&
										(b && J.deltaY > 0 && b(J),
										w && J.deltaY < 0 && w(J),
										E && E(J),
										S && J.deltaY < 0 !== Z < 0 && S(J),
										(Z = J.deltaY),
										(se[0] = se[1] = se[2] = 0)),
									(G || H) &&
										(P && P(J),
										H && (m(J), (H = !1)),
										(G = !1)),
									X && !(X = !1) && U && U(J),
									W && (B(J), (W = !1)),
									(Y = 0);
							},
							fe = function (e, t, n) {
								(ae[n] += e),
									(se[n] += t),
									J._vx.update(e),
									J._vy.update(t),
									a
										? Y || (Y = requestAnimationFrame(de))
										: de();
							},
							he = function (e, t) {
								V &&
									!q &&
									((J.axis = q =
										Math.abs(e) > Math.abs(t) ? 'x' : 'y'),
									(X = !0)),
									'y' !== q &&
										((ae[2] += e), J._vx.update(e, !0)),
									'x' !== q &&
										((se[2] += t), J._vy.update(t, !0)),
									a
										? Y || (Y = requestAnimationFrame(de))
										: de();
							},
							pe = function (e) {
								if (!ce(e, 1)) {
									var t = (e = sh(e, s)).clientX,
										r = e.clientY,
										i = t - J.x,
										o = r - J.y,
										a = J.isDragging;
									(J.x = t),
										(J.y = r),
										(a ||
											Math.abs(J.startX - t) >= n ||
											Math.abs(J.startY - r) >= n) &&
											(m && (H = !0),
											a || (J.isDragging = !0),
											he(i, o),
											a || (h && h(J)));
								}
							},
							me = (J.onPress = function (e) {
								ce(e, 1) ||
									(e && e.button) ||
									((J.axis = q = null),
									Q.pause(),
									(J.isPressed = !0),
									(e = sh(e)),
									(K = Z = 0),
									(J.startX = J.x = e.clientX),
									(J.startY = J.y = e.clientY),
									J._vx.reset(),
									J._vy.reset(),
									Jf(D ? i : oe, Nf[1], pe, s, !0),
									(J.deltaX = J.deltaY = 0),
									g && g(J));
							}),
							ge = (J.onRelease = function (e) {
								if (!ce(e, 1)) {
									Kf(D ? i : oe, Nf[1], pe, !0);
									var t = !isNaN(J.y - J.startY),
										n =
											J.isDragging &&
											(Math.abs(J.x - J.startX) > 3 ||
												Math.abs(J.y - J.startY) > 3),
										r = sh(e);
									!n &&
										t &&
										(J._vx.reset(),
										J._vy.reset(),
										s &&
											z &&
											_f.delayedCall(0.08, function () {
												if (
													Gf() - le > 300 &&
													!e.defaultPrevented
												)
													if (e.target.click)
														e.target.click();
													else if (oe.createEvent) {
														var t =
															oe.createEvent(
																'MouseEvents',
															);
														t.initMouseEvent(
															'click',
															!0,
															!0,
															Mf,
															1,
															r.screenX,
															r.screenY,
															r.clientX,
															r.clientY,
															!1,
															!1,
															!1,
															!1,
															0,
															null,
														),
															e.target.dispatchEvent(
																t,
															);
													}
											})),
										(J.isDragging =
											J.isGesturing =
											J.isPressed =
												!1),
										l && !D && Q.restart(!0),
										p && n && p(J),
										v && v(J, n);
								}
							}),
							ve = function (e) {
								return (
									e.touches &&
									e.touches.length > 1 &&
									(J.isGesturing = !0) &&
									O(e, J.isDragging)
								);
							},
							Ae = function () {
								return (J.isGesturing = !1) || R(J);
							},
							ye = function (e) {
								if (!ce(e)) {
									var t = $(),
										n = ee();
									fe((t - te) * j, (n - ne) * j, 1),
										(te = t),
										(ne = n),
										l && Q.restart(!0);
								}
							},
							we = function (e) {
								if (!ce(e)) {
									(e = sh(e, s)), B && (W = !0);
									var t =
										(1 === e.deltaMode
											? o
											: 2 === e.deltaMode
												? Mf.innerHeight
												: 1) * d;
									fe(e.deltaX * t, e.deltaY * t, 0),
										l && !D && Q.restart(!0);
								}
							},
							be = function (e) {
								if (!ce(e)) {
									var t = e.clientX,
										n = e.clientY,
										r = t - J.x,
										i = n - J.y;
									(J.x = t),
										(J.y = n),
										(G = !0),
										(r || i) && he(r, i);
								}
							},
							xe = function (e) {
								(J.event = e), T(J);
							},
							Ee = function (e) {
								(J.event = e), _(J);
							},
							Ce = function (e) {
								return ce(e) || (sh(e, s) && F(J));
							};
						(Q = J._dc =
							_f
								.delayedCall(u || 0.25, function () {
									J._vx.reset(),
										J._vy.reset(),
										Q.pause(),
										l && l(J);
								})
								.pause()),
							(J.deltaX = J.deltaY = 0),
							(J._vx = ah(0, 50, !0)),
							(J._vy = ah(0, 50, !0)),
							(J.scrollX = $),
							(J.scrollY = ee),
							(J.isDragging = J.isGesturing = J.isPressed = !1),
							zf(this),
							(J.enable = function (e) {
								return (
									J.isEnabled ||
										(Jf(ie ? oe : i, 'scroll', eh),
										r.indexOf('scroll') >= 0 &&
											Jf(ie ? oe : i, 'scroll', ye, s, N),
										r.indexOf('wheel') >= 0 &&
											Jf(i, 'wheel', we, s, N),
										((r.indexOf('touch') >= 0 && Bf) ||
											r.indexOf('pointer') >= 0) &&
											(Jf(i, Nf[0], me, s, N),
											Jf(oe, Nf[2], ge),
											Jf(oe, Nf[3], ge),
											z && Jf(i, 'click', ue, !1, !0),
											F && Jf(i, 'click', Ce),
											O && Jf(oe, 'gesturestart', ve),
											R && Jf(oe, 'gestureend', Ae),
											T && Jf(i, Lf + 'enter', xe),
											_ && Jf(i, Lf + 'leave', Ee),
											P && Jf(i, Lf + 'move', be)),
										(J.isEnabled = !0),
										e && e.type && me(e),
										L && L(J)),
									J
								);
							}),
							(J.disable = function () {
								J.isEnabled &&
									(Yf.filter(function (e) {
										return e !== J && qf(e.target);
									}).length || Kf(ie ? oe : i, 'scroll', eh),
									J.isPressed &&
										(J._vx.reset(),
										J._vy.reset(),
										Kf(D ? i : oe, Nf[1], pe, !0)),
									Kf(ie ? oe : i, 'scroll', ye, N),
									Kf(i, 'wheel', we, N),
									Kf(i, Nf[0], me, N),
									Kf(oe, Nf[2], ge),
									Kf(oe, Nf[3], ge),
									Kf(i, 'click', ue, !0),
									Kf(i, 'click', Ce),
									Kf(oe, 'gesturestart', ve),
									Kf(oe, 'gestureend', Ae),
									Kf(i, Lf + 'enter', xe),
									Kf(i, Lf + 'leave', Ee),
									Kf(i, Lf + 'move', be),
									(J.isEnabled =
										J.isPressed =
										J.isDragging =
											!1),
									I && I(J));
							}),
							(J.kill = J.revert =
								function () {
									J.disable();
									var e = Yf.indexOf(J);
									e >= 0 && Yf.splice(e, 1),
										jf === J && (jf = 0);
								}),
							Yf.push(J),
							D && qf(i) && (jf = J),
							J.enable(f);
					}),
					(t = e),
					(n = [
						{
							key: 'velocityX',
							get: function () {
								return this._vx.getVelocity();
							},
						},
						{
							key: 'velocityY',
							get: function () {
								return this._vy.getVelocity();
							},
						},
					]) && Tf(t.prototype, n),
					r && Tf(t, r),
					e
				);
			})();
			(dh.version = '3.12.2'),
				(dh.create = function (e) {
					return new dh(e);
				}),
				(dh.register = ch),
				(dh.getAll = function () {
					return Yf.slice();
				}),
				(dh.getById = function (e) {
					return Yf.filter(function (t) {
						return t.vars.id === e;
					})[0];
				}),
				Vf() && _f.registerPlugin(dh);
			var fh,
				hh,
				ph,
				mh,
				gh,
				vh,
				Ah,
				yh,
				wh,
				bh,
				xh,
				Eh,
				Ch,
				kh,
				Sh,
				Th,
				_h,
				Ph,
				Mh,
				Dh,
				Oh,
				Rh,
				Bh,
				Lh,
				Ih,
				Fh,
				jh,
				Nh,
				zh,
				Vh,
				Uh,
				Yh,
				Qh,
				Hh,
				Gh,
				Wh,
				Xh = 1,
				qh = Date.now,
				Jh = qh(),
				Kh = 0,
				Zh = 0,
				$h = function (e, t, n) {
					var r =
						hp(e) &&
						('clamp(' === e.substr(0, 6) || e.indexOf('max') > -1);
					return (
						(n['_' + t + 'Clamp'] = r),
						r ? e.substr(6, e.length - 7) : e
					);
				},
				ep = function (e, t) {
					return !t || (hp(e) && 'clamp(' === e.substr(0, 6))
						? e
						: 'clamp(' + e + ')';
				},
				tp = function e() {
					return Zh && requestAnimationFrame(e);
				},
				np = function () {
					return (kh = 1);
				},
				rp = function () {
					return (kh = 0);
				},
				ip = function (e) {
					return e;
				},
				op = function (e) {
					return Math.round(1e5 * e) / 1e5 || 0;
				},
				ap = function () {
					return 'undefined' !== typeof window;
				},
				sp = function () {
					return (
						fh ||
						(ap() && (fh = window.gsap) && fh.registerPlugin && fh)
					);
				},
				lp = function (e) {
					return !!~Ah.indexOf(e);
				},
				up = function (e) {
					return (
						('Height' === e ? Uh : ph['inner' + e]) ||
						gh['client' + e] ||
						vh['client' + e]
					);
				},
				cp = function (e) {
					return (
						Xf(e, 'getBoundingClientRect') ||
						(lp(e)
							? function () {
									return (
										(xm.width = ph.innerWidth),
										(xm.height = Uh),
										xm
									);
								}
							: function () {
									return Ip(e);
								})
					);
				},
				dp = function (e, t) {
					var n = t.s,
						r = t.d2,
						i = t.d,
						o = t.a;
					return Math.max(
						0,
						(n = 'scroll' + r) && (o = Xf(e, n))
							? o() - cp(e)()[i]
							: lp(e)
								? (gh[n] || vh[n]) - up(r)
								: e[n] - e['offset' + r],
					);
				},
				fp = function (e, t) {
					for (var n = 0; n < Mh.length; n += 3)
						(!t || ~t.indexOf(Mh[n + 1])) &&
							e(Mh[n], Mh[n + 1], Mh[n + 2]);
				},
				hp = function (e) {
					return 'string' === typeof e;
				},
				pp = function (e) {
					return 'function' === typeof e;
				},
				mp = function (e) {
					return 'number' === typeof e;
				},
				gp = function (e) {
					return 'object' === typeof e;
				},
				vp = function (e, t, n) {
					return e && e.progress(t ? 0 : 1) && n && e.pause();
				},
				Ap = function (e, t) {
					if (e.enabled) {
						var n = t(e);
						n && n.totalTime && (e.callbackAnimation = n);
					}
				},
				yp = Math.abs,
				wp = 'left',
				bp = 'right',
				xp = 'bottom',
				Ep = 'width',
				Cp = 'height',
				kp = 'Right',
				Sp = 'Left',
				Tp = 'Top',
				_p = 'Bottom',
				Pp = 'padding',
				Mp = 'margin',
				Dp = 'Width',
				Op = 'Height',
				Rp = 'px',
				Bp = function (e) {
					return ph.getComputedStyle(e);
				},
				Lp = function (e, t) {
					for (var n in t) n in e || (e[n] = t[n]);
					return e;
				},
				Ip = function (e, t) {
					var n =
							t &&
							'matrix(1, 0, 0, 1, 0, 0)' !== Bp(e)[Sh] &&
							fh
								.to(e, {
									x: 0,
									y: 0,
									xPercent: 0,
									yPercent: 0,
									rotation: 0,
									rotationX: 0,
									rotationY: 0,
									scale: 1,
									skewX: 0,
									skewY: 0,
								})
								.progress(1),
						r = e.getBoundingClientRect();
					return n && n.progress(0).kill(), r;
				},
				Fp = function (e, t) {
					var n = t.d2;
					return e['offset' + n] || e['client' + n] || 0;
				},
				jp = function (e) {
					var t,
						n = [],
						r = e.labels,
						i = e.duration();
					for (t in r) n.push(r[t] / i);
					return n;
				},
				Np = function (e) {
					var t = fh.utils.snap(e),
						n =
							Array.isArray(e) &&
							e.slice(0).sort(function (e, t) {
								return e - t;
							});
					return n
						? function (e, r, i) {
								var o;
								if ((void 0 === i && (i = 0.001), !r))
									return t(e);
								if (r > 0) {
									for (e -= i, o = 0; o < n.length; o++)
										if (n[o] >= e) return n[o];
									return n[o - 1];
								}
								for (o = n.length, e += i; o--; )
									if (n[o] <= e) return n[o];
								return n[0];
							}
						: function (n, r, i) {
								void 0 === i && (i = 0.001);
								var o = t(n);
								return !r ||
									Math.abs(o - n) < i ||
									o - n < 0 === r < 0
									? o
									: t(r < 0 ? n - e : n + e);
							};
				},
				zp = function (e, t, n, r) {
					return n.split(',').forEach(function (n) {
						return e(t, n, r);
					});
				},
				Vp = function (e, t, n, r, i) {
					return e.addEventListener(t, n, {
						passive: !r,
						capture: !!i,
					});
				},
				Up = function (e, t, n, r) {
					return e.removeEventListener(t, n, !!r);
				},
				Yp = function (e, t, n) {
					(n = n && n.wheelHandler) &&
						(e(t, 'wheel', n), e(t, 'touchmove', n));
				},
				Qp = {
					startColor: 'green',
					endColor: 'red',
					indent: 0,
					fontSize: '16px',
					fontWeight: 'normal',
				},
				Hp = { toggleActions: 'play', anticipatePin: 0 },
				Gp = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
				Wp = function (e, t) {
					if (hp(e)) {
						var n = e.indexOf('='),
							r = ~n
								? +(e.charAt(n - 1) + 1) *
									parseFloat(e.substr(n + 1))
								: 0;
						~n &&
							(e.indexOf('%') > n && (r *= t / 100),
							(e = e.substr(0, n - 1))),
							(e =
								r +
								(e in Gp
									? Gp[e] * t
									: ~e.indexOf('%')
										? (parseFloat(e) * t) / 100
										: parseFloat(e) || 0));
					}
					return e;
				},
				Xp = function (e, t, n, r, i, o, a, s) {
					var l = i.startColor,
						u = i.endColor,
						c = i.fontSize,
						d = i.indent,
						f = i.fontWeight,
						h = mh.createElement('div'),
						p = lp(n) || 'fixed' === Xf(n, 'pinType'),
						m = -1 !== e.indexOf('scroller'),
						g = p ? vh : n,
						v = -1 !== e.indexOf('start'),
						A = v ? l : u,
						y =
							'border-color:' +
							A +
							';font-size:' +
							c +
							';color:' +
							A +
							';font-weight:' +
							f +
							';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
					return (
						(y +=
							'position:' +
							((m || s) && p ? 'fixed;' : 'absolute;')),
						(m || s || !p) &&
							(y +=
								(r === rh ? bp : xp) +
								':' +
								(o + parseFloat(d)) +
								'px;'),
						a &&
							(y +=
								'box-sizing:border-box;text-align:left;width:' +
								a.offsetWidth +
								'px;'),
						(h._isStart = v),
						h.setAttribute(
							'class',
							'gsap-marker-' + e + (t ? ' marker-' + t : ''),
						),
						(h.style.cssText = y),
						(h.innerText = t || 0 === t ? e + '-' + t : e),
						g.children[0]
							? g.insertBefore(h, g.children[0])
							: g.appendChild(h),
						(h._offset = h['offset' + r.op.d2]),
						qp(h, 0, r, v),
						h
					);
				},
				qp = function (e, t, n, r) {
					var i = { display: 'block' },
						o = n[r ? 'os2' : 'p2'],
						a = n[r ? 'p2' : 'os2'];
					(e._isFlipped = r),
						(i[n.a + 'Percent'] = r ? -100 : 0),
						(i[n.a] = r ? '1px' : 0),
						(i['border' + o + Dp] = 1),
						(i['border' + a + Dp] = 0),
						(i[n.p] = t + 'px'),
						fh.set(e, i);
				},
				Jp = [],
				Kp = {},
				Zp = function () {
					return (
						qh() - Kh > 34 &&
						(Qh || (Qh = requestAnimationFrame(mm)))
					);
				},
				$p = function () {
					(!Bh || !Bh.isPressed || Bh.startX > vh.clientWidth) &&
						(Qf.cache++,
						Bh ? Qh || (Qh = requestAnimationFrame(mm)) : mm(),
						Kh || om('scrollStart'),
						(Kh = qh()));
				},
				em = function () {
					(Fh = ph.innerWidth), (Ih = ph.innerHeight);
				},
				tm = function () {
					Qf.cache++,
						!Ch &&
							!Rh &&
							!mh.fullscreenElement &&
							!mh.webkitFullscreenElement &&
							(!Lh ||
								Fh !== ph.innerWidth ||
								Math.abs(ph.innerHeight - Ih) >
									0.25 * ph.innerHeight) &&
							yh.restart(!0);
				},
				nm = {},
				rm = [],
				im = function e() {
					return Up(Pm, 'scrollEnd', e) || fm(!0);
				},
				om = function (e) {
					return (
						(nm[e] &&
							nm[e].map(function (e) {
								return e();
							})) ||
						rm
					);
				},
				am = [],
				sm = function (e) {
					for (var t = 0; t < am.length; t += 5)
						(!e || (am[t + 4] && am[t + 4].query === e)) &&
							((am[t].style.cssText = am[t + 1]),
							am[t].getBBox &&
								am[t].setAttribute(
									'transform',
									am[t + 2] || '',
								),
							(am[t + 3].uncache = 1));
				},
				lm = function (e, t) {
					var n;
					for (Th = 0; Th < Jp.length; Th++)
						!(n = Jp[Th]) ||
							(t && n._ctx !== t) ||
							(e ? n.kill(1) : n.revert(!0, !0));
					t && sm(t), t || om('revert');
				},
				um = function (e, t) {
					Qf.cache++,
						(t || !Hh) &&
							Qf.forEach(function (e) {
								return pp(e) && e.cacheID++ && (e.rec = 0);
							}),
						hp(e) && (ph.history.scrollRestoration = zh = e);
				},
				cm = 0,
				dm = function () {
					vh.appendChild(Vh),
						(Uh = Vh.offsetHeight || ph.innerHeight),
						vh.removeChild(Vh);
				},
				fm = function (e, t) {
					if (!Kh || e) {
						dm(),
							(Hh = Pm.isRefreshing = !0),
							Qf.forEach(function (e) {
								return pp(e) && ++e.cacheID && (e.rec = e());
							});
						var n = om('refreshInit');
						Dh && Pm.sort(),
							t || lm(),
							Qf.forEach(function (e) {
								pp(e) &&
									(e.smooth &&
										(e.target.style.scrollBehavior =
											'auto'),
									e(0));
							}),
							Jp.slice(0).forEach(function (e) {
								return e.refresh();
							}),
							Jp.forEach(function (e, t) {
								if (e._subPinOffset && e.pin) {
									var n = e.vars.horizontal
											? 'offsetWidth'
											: 'offsetHeight',
										r = e.pin[n];
									e.revert(!0, 1),
										e.adjustPinSpacing(e.pin[n] - r),
										e.refresh();
								}
							}),
							Jp.forEach(function (e) {
								var t = dp(e.scroller, e._dir);
								('max' === e.vars.end ||
									(e._endClamp && e.end > t)) &&
									e.setPositions(
										e.start,
										Math.max(e.start + 1, t),
										!0,
									);
							}),
							n.forEach(function (e) {
								return e && e.render && e.render(-1);
							}),
							Qf.forEach(function (e) {
								pp(e) &&
									(e.smooth &&
										requestAnimationFrame(function () {
											return (e.target.style.scrollBehavior =
												'smooth');
										}),
									e.rec && e(e.rec));
							}),
							um(zh, 1),
							yh.pause(),
							cm++,
							(Hh = 2),
							mm(2),
							Jp.forEach(function (e) {
								return (
									pp(e.vars.onRefresh) && e.vars.onRefresh(e)
								);
							}),
							(Hh = Pm.isRefreshing = !1),
							om('refresh');
					} else Vp(Pm, 'scrollEnd', im);
				},
				hm = 0,
				pm = 1,
				mm = function (e) {
					if (!Hh || 2 === e) {
						(Pm.isUpdating = !0), Wh && Wh.update(0);
						var t = Jp.length,
							n = qh(),
							r = n - Jh >= 50,
							i = t && Jp[0].scroll();
						if (
							((pm = hm > i ? -1 : 1),
							Hh || (hm = i),
							r &&
								(Kh &&
									!kh &&
									n - Kh > 200 &&
									((Kh = 0), om('scrollEnd')),
								(xh = Jh),
								(Jh = n)),
							pm < 0)
						) {
							for (Th = t; Th-- > 0; )
								Jp[Th] && Jp[Th].update(0, r);
							pm = 1;
						} else
							for (Th = 0; Th < t; Th++)
								Jp[Th] && Jp[Th].update(0, r);
						Pm.isUpdating = !1;
					}
					Qh = 0;
				},
				gm = [
					wp,
					'top',
					xp,
					bp,
					Mp + _p,
					Mp + kp,
					Mp + Tp,
					Mp + Sp,
					'display',
					'flexShrink',
					'float',
					'zIndex',
					'gridColumnStart',
					'gridColumnEnd',
					'gridRowStart',
					'gridRowEnd',
					'gridArea',
					'justifySelf',
					'alignSelf',
					'placeSelf',
					'order',
				],
				vm = gm.concat([
					Ep,
					Cp,
					'boxSizing',
					'max' + Dp,
					'max' + Op,
					'position',
					Mp,
					Pp,
					Pp + Tp,
					Pp + kp,
					Pp + _p,
					Pp + Sp,
				]),
				Am = function (e, t, n, r) {
					if (!e._gsap.swappedIn) {
						for (
							var i, o = gm.length, a = t.style, s = e.style;
							o--;

						)
							a[(i = gm[o])] = n[i];
						(a.position =
							'absolute' === n.position
								? 'absolute'
								: 'relative'),
							'inline' === n.display &&
								(a.display = 'inline-block'),
							(s[xp] = s[bp] = 'auto'),
							(a.flexBasis = n.flexBasis || 'auto'),
							(a.overflow = 'visible'),
							(a.boxSizing = 'border-box'),
							(a[Ep] = Fp(e, nh) + Rp),
							(a[Cp] = Fp(e, rh) + Rp),
							(a[Pp] = s[Mp] = s.top = s[wp] = '0'),
							wm(r),
							(s[Ep] = s['max' + Dp] = n[Ep]),
							(s[Cp] = s['max' + Op] = n[Cp]),
							(s[Pp] = n[Pp]),
							e.parentNode !== t &&
								(e.parentNode.insertBefore(t, e),
								t.appendChild(e)),
							(e._gsap.swappedIn = !0);
					}
				},
				ym = /([A-Z])/g,
				wm = function (e) {
					if (e) {
						var t,
							n,
							r = e.t.style,
							i = e.length,
							o = 0;
						for (
							(e.t._gsap || fh.core.getCache(e.t)).uncache = 1;
							o < i;
							o += 2
						)
							(n = e[o + 1]),
								(t = e[o]),
								n
									? (r[t] = n)
									: r[t] &&
										r.removeProperty(
											t.replace(ym, '-$1').toLowerCase(),
										);
					}
				},
				bm = function (e) {
					for (
						var t = vm.length, n = e.style, r = [], i = 0;
						i < t;
						i++
					)
						r.push(vm[i], n[vm[i]]);
					return (r.t = e), r;
				},
				xm = { left: 0, top: 0 },
				Em = function (e, t, n, r, i, o, a, s, l, u, c, d, f, h) {
					pp(e) && (e = e(s)),
						hp(e) &&
							'max' === e.substr(0, 3) &&
							(e =
								d +
								('=' === e.charAt(4)
									? Wp('0' + e.substr(3), n)
									: 0));
					var p,
						m,
						g,
						v = f ? f.time() : 0;
					if ((f && f.seek(0), isNaN(e) || (e = +e), mp(e)))
						f &&
							(e = fh.utils.mapRange(
								f.scrollTrigger.start,
								f.scrollTrigger.end,
								0,
								d,
								e,
							)),
							a && qp(a, n, r, !0);
					else {
						pp(t) && (t = t(s));
						var A,
							y,
							w,
							b,
							x = (e || '0').split(' ');
						(g = ih(t, s) || vh),
							((A = Ip(g) || {}) && (A.left || A.top)) ||
								'none' !== Bp(g).display ||
								((b = g.style.display),
								(g.style.display = 'block'),
								(A = Ip(g)),
								b
									? (g.style.display = b)
									: g.style.removeProperty('display')),
							(y = Wp(x[0], A[r.d])),
							(w = Wp(x[1] || '0', n)),
							(e = A[r.p] - l[r.p] - u + y + i - w),
							a &&
								qp(
									a,
									w,
									r,
									n - w < 20 || (a._isStart && w > 20),
								),
							(n -= n - w);
					}
					if ((h && ((s[h] = e || -0.001), e < 0 && (e = 0)), o)) {
						var E = e + n,
							C = o._isStart;
						(p = 'scroll' + r.d2),
							qp(
								o,
								E,
								r,
								(C && E > 20) ||
									(!C &&
										(c
											? Math.max(vh[p], gh[p])
											: o.parentNode[p]) <=
											E + 1),
							),
							c &&
								((l = Ip(a)),
								c &&
									(o.style[r.op.p] =
										l[r.op.p] - r.op.m - o._offset + Rp));
					}
					return (
						f &&
							g &&
							((p = Ip(g)),
							f.seek(d),
							(m = Ip(g)),
							(f._caScrollDist = p[r.p] - m[r.p]),
							(e = (e / f._caScrollDist) * d)),
						f && f.seek(v),
						f ? e : Math.round(e)
					);
				},
				Cm = /(webkit|moz|length|cssText|inset)/i,
				km = function (e, t, n, r) {
					if (e.parentNode !== t) {
						var i,
							o,
							a = e.style;
						if (t === vh) {
							for (i in ((e._stOrig = a.cssText), (o = Bp(e))))
								+i ||
									Cm.test(i) ||
									!o[i] ||
									'string' !== typeof a[i] ||
									'0' === i ||
									(a[i] = o[i]);
							(a.top = n), (a.left = r);
						} else a.cssText = e._stOrig;
						(fh.core.getCache(e).uncache = 1), t.appendChild(e);
					}
				},
				Sm = function (e, t, n) {
					var r = t,
						i = r;
					return function (t) {
						var o = Math.round(e());
						return (
							o !== r &&
								o !== i &&
								Math.abs(o - r) > 3 &&
								Math.abs(o - i) > 3 &&
								((t = o), n && n()),
							(i = r),
							(r = t),
							t
						);
					};
				},
				Tm = function (e, t, n) {
					var r = {};
					(r[t.p] = '+=' + n), fh.set(e, r);
				},
				_m = function (e, t) {
					var n = oh(e, t),
						r = '_scroll' + t.p2,
						i = function t(i, o, a, s, l) {
							var u = t.tween,
								c = o.onComplete,
								d = {};
							a = a || n();
							var f = Sm(n, a, function () {
								u.kill(), (t.tween = 0);
							});
							return (
								(l = (s && l) || 0),
								(s = s || i - a),
								u && u.kill(),
								(o[r] = i),
								(o.modifiers = d),
								(d[r] = function () {
									return f(
										a + s * u.ratio + l * u.ratio * u.ratio,
									);
								}),
								(o.onUpdate = function () {
									Qf.cache++, mm();
								}),
								(o.onComplete = function () {
									(t.tween = 0), c && c.call(u);
								}),
								(u = t.tween = fh.to(e, o))
							);
						};
					return (
						(e[r] = n),
						(n.wheelHandler = function () {
							return i.tween && i.tween.kill() && (i.tween = 0);
						}),
						Vp(e, 'wheel', n.wheelHandler),
						Pm.isTouch && Vp(e, 'touchmove', n.wheelHandler),
						i
					);
				},
				Pm = (function () {
					function e(t, n) {
						hh ||
							e.register(fh) ||
							console.warn(
								'Please gsap.registerPlugin(ScrollTrigger)',
							),
							Nh(this),
							this.init(t, n);
					}
					return (
						(e.prototype.init = function (t, n) {
							if (
								((this.progress = this.start = 0),
								this.vars && this.kill(!0, !0),
								Zh)
							) {
								var r,
									i,
									o,
									a,
									s,
									l,
									u,
									c,
									d,
									f,
									h,
									p,
									m,
									g,
									v,
									A,
									y,
									w,
									b,
									x,
									E,
									C,
									k,
									S,
									T,
									_,
									P,
									M,
									D,
									O,
									R,
									B,
									L,
									I,
									F,
									j,
									N,
									z,
									V,
									U,
									Y = (t = Lp(
										hp(t) || mp(t) || t.nodeType
											? { trigger: t }
											: t,
										Hp,
									)),
									Q = Y.onUpdate,
									H = Y.toggleClass,
									G = Y.id,
									W = Y.onToggle,
									X = Y.onRefresh,
									q = Y.scrub,
									J = Y.trigger,
									K = Y.pin,
									Z = Y.pinSpacing,
									$ = Y.invalidateOnRefresh,
									ee = Y.anticipatePin,
									te = Y.onScrubComplete,
									ne = Y.onSnapComplete,
									re = Y.once,
									ie = Y.snap,
									oe = Y.pinReparent,
									ae = Y.pinSpacer,
									se = Y.containerAnimation,
									le = Y.fastScrollEnd,
									ue = Y.preventOverlaps,
									ce =
										t.horizontal ||
										(t.containerAnimation &&
											!1 !== t.horizontal)
											? nh
											: rh,
									de = !q && 0 !== q,
									fe = ih(t.scroller || ph),
									he = fh.core.getCache(fe),
									pe = lp(fe),
									me =
										'fixed' ===
										('pinType' in t
											? t.pinType
											: Xf(fe, 'pinType') ||
												(pe && 'fixed')),
									ge = [
										t.onEnter,
										t.onLeave,
										t.onEnterBack,
										t.onLeaveBack,
									],
									ve = de && t.toggleActions.split(' '),
									Ae =
										'markers' in t ? t.markers : Hp.markers,
									ye = pe
										? 0
										: parseFloat(
												Bp(fe)['border' + ce.p2 + Dp],
											) || 0,
									we = this,
									be =
										t.onRefreshInit &&
										function () {
											return t.onRefreshInit(we);
										},
									xe = (function (e, t, n) {
										var r = n.d,
											i = n.d2,
											o = n.a;
										return (o = Xf(
											e,
											'getBoundingClientRect',
										))
											? function () {
													return o()[r];
												}
											: function () {
													return (
														(t
															? up(i)
															: e[
																	'client' + i
																]) || 0
													);
												};
									})(fe, pe, ce),
									Ee = (function (e, t) {
										return !t || ~Hf.indexOf(e)
											? cp(e)
											: function () {
													return xm;
												};
									})(fe, pe),
									Ce = 0,
									ke = 0,
									Se = 0,
									Te = oh(fe, ce);
								if (
									((we._startClamp = we._endClamp = !1),
									(we._dir = ce),
									(ee *= 45),
									(we.scroller = fe),
									(we.scroll = se ? se.time.bind(se) : Te),
									(a = Te()),
									(we.vars = t),
									(n = n || t.animation),
									'refreshPriority' in t &&
										((Dh = 1),
										-9999 === t.refreshPriority &&
											(Wh = we)),
									(he.tweenScroll = he.tweenScroll || {
										top: _m(fe, rh),
										left: _m(fe, nh),
									}),
									(we.tweenTo = r = he.tweenScroll[ce.p]),
									(we.scrubDuration = function (e) {
										(L = mp(e) && e)
											? B
												? B.duration(e)
												: (B = fh.to(n, {
														ease: 'expo',
														totalProgress: '+=0',
														duration: L,
														paused: !0,
														onComplete:
															function () {
																return (
																	te && te(we)
																);
															},
													}))
											: (B && B.progress(1).kill(),
												(B = 0));
									}),
									n &&
										((n.vars.lazy = !1),
										(n._initted && !we.isReverted) ||
											(!1 !== n.vars.immediateRender &&
												!1 !== t.immediateRender &&
												n.duration() &&
												n.render(0, !0, !0)),
										(we.animation = n.pause()),
										(n.scrollTrigger = we),
										we.scrubDuration(q),
										(O = 0),
										G || (G = n.vars.id)),
									ie &&
										((gp(ie) && !ie.push) ||
											(ie = { snapTo: ie }),
										'scrollBehavior' in vh.style &&
											fh.set(pe ? [vh, gh] : fe, {
												scrollBehavior: 'auto',
											}),
										Qf.forEach(function (e) {
											return (
												pp(e) &&
												e.target ===
													(pe
														? mh.scrollingElement ||
															gh
														: fe) &&
												(e.smooth = !1)
											);
										}),
										(o = pp(ie.snapTo)
											? ie.snapTo
											: 'labels' === ie.snapTo
												? (function (e) {
														return function (t) {
															return fh.utils.snap(
																jp(e),
																t,
															);
														};
													})(n)
												: 'labelsDirectional' ===
													  ie.snapTo
													? ((U = n),
														function (e, t) {
															return Np(jp(U))(
																e,
																t.direction,
															);
														})
													: !1 !== ie.directional
														? function (e, t) {
																return Np(
																	ie.snapTo,
																)(
																	e,
																	qh() - ke <
																		500
																		? 0
																		: t.direction,
																);
															}
														: fh.utils.snap(
																ie.snapTo,
															)),
										(I = ie.duration || {
											min: 0.1,
											max: 2,
										}),
										(I = gp(I)
											? bh(I.min, I.max)
											: bh(I, I)),
										(F = fh
											.delayedCall(
												ie.delay || L / 2 || 0.1,
												function () {
													var e = Te(),
														t = qh() - ke < 500,
														i = r.tween;
													if (
														!(
															t ||
															Math.abs(
																we.getVelocity(),
															) < 10
														) ||
														i ||
														kh ||
														Ce === e
													)
														we.isActive &&
															Ce !== e &&
															F.restart(!0);
													else {
														var a = (e - l) / g,
															s =
																n && !de
																	? n.totalProgress()
																	: a,
															c = t
																? 0
																: ((s - R) /
																		(qh() -
																			xh)) *
																		1e3 ||
																	0,
															d = fh.utils.clamp(
																-a,
																1 - a,
																(yp(c / 2) *
																	c) /
																	0.185,
															),
															f =
																a +
																(!1 ===
																ie.inertia
																	? 0
																	: d),
															h = bh(
																0,
																1,
																o(f, we),
															),
															p = Math.round(
																l + h * g,
															),
															m = ie,
															v = m.onStart,
															A = m.onInterrupt,
															y = m.onComplete;
														if (
															e <= u &&
															e >= l &&
															p !== e
														) {
															if (
																i &&
																!i._initted &&
																i.data <=
																	yp(p - e)
															)
																return;
															!1 === ie.inertia &&
																(d = h - a),
																r(
																	p,
																	{
																		duration:
																			I(
																				yp(
																					(0.185 *
																						Math.max(
																							yp(
																								f -
																									s,
																							),
																							yp(
																								h -
																									s,
																							),
																						)) /
																						c /
																						0.05 ||
																						0,
																				),
																			),
																		ease:
																			ie.ease ||
																			'power3',
																		data: yp(
																			p -
																				e,
																		),
																		onInterrupt:
																			function () {
																				return (
																					F.restart(
																						!0,
																					) &&
																					A &&
																					A(
																						we,
																					)
																				);
																			},
																		onComplete:
																			function () {
																				we.update(),
																					(Ce =
																						Te()),
																					(O =
																						R =
																							n &&
																							!de
																								? n.totalProgress()
																								: we.progress),
																					ne &&
																						ne(
																							we,
																						),
																					y &&
																						y(
																							we,
																						);
																			},
																	},
																	e,
																	d * g,
																	p -
																		e -
																		d * g,
																),
																v &&
																	v(
																		we,
																		r.tween,
																	);
														}
													}
												},
											)
											.pause())),
									G && (Kp[G] = we),
									(V =
										(J = we.trigger =
											ih(J || (!0 !== K && K))) &&
										J._gsap &&
										J._gsap.stRevert) && (V = V(we)),
									(K = !0 === K ? J : ih(K)),
									hp(H) && (H = { targets: J, className: H }),
									K &&
										(!1 === Z ||
											Z === Mp ||
											(Z =
												!(
													!Z &&
													K.parentNode &&
													K.parentNode.style &&
													'flex' ===
														Bp(K.parentNode).display
												) && Pp),
										(we.pin = K),
										(i = fh.core.getCache(K)).spacer
											? (v = i.pinState)
											: (ae &&
													((ae = ih(ae)) &&
														!ae.nodeType &&
														(ae =
															ae.current ||
															ae.nativeElement),
													(i.spacerIsNative = !!ae),
													ae &&
														(i.spacerState =
															bm(ae))),
												(i.spacer = w =
													ae ||
													mh.createElement('div')),
												w.classList.add('pin-spacer'),
												G &&
													w.classList.add(
														'pin-spacer-' + G,
													),
												(i.pinState = v = bm(K))),
										!1 !== t.force3D &&
											fh.set(K, { force3D: !0 }),
										(we.spacer = w = i.spacer),
										(D = Bp(K)),
										(S = D[Z + ce.os2]),
										(x = fh.getProperty(K)),
										(E = fh.quickSetter(K, ce.a, Rp)),
										Am(K, w, D),
										(y = bm(K))),
									Ae)
								) {
									(p = gp(Ae) ? Lp(Ae, Qp) : Qp),
										(f = Xp(
											'scroller-start',
											G,
											fe,
											ce,
											p,
											0,
										)),
										(h = Xp(
											'scroller-end',
											G,
											fe,
											ce,
											p,
											0,
											f,
										)),
										(b = f['offset' + ce.op.d2]);
									var _e = ih(Xf(fe, 'content') || fe);
									(c = this.markerStart =
										Xp('start', G, _e, ce, p, b, 0, se)),
										(d = this.markerEnd =
											Xp('end', G, _e, ce, p, b, 0, se)),
										se &&
											(z = fh.quickSetter(
												[c, d],
												ce.a,
												Rp,
											)),
										me ||
											(Hf.length &&
												!0 ===
													Xf(fe, 'fixedMarkers')) ||
											(!(function (e) {
												var t = Bp(e).position;
												e.style.position =
													'absolute' === t ||
													'fixed' === t
														? t
														: 'relative';
											})(pe ? vh : fe),
											fh.set([f, h], { force3D: !0 }),
											(_ = fh.quickSetter(f, ce.a, Rp)),
											(M = fh.quickSetter(h, ce.a, Rp)));
								}
								if (se) {
									var Pe = se.vars.onUpdate,
										Me = se.vars.onUpdateParams;
									se.eventCallback('onUpdate', function () {
										we.update(0, 0, 1),
											Pe && Pe.apply(se, Me || []);
									});
								}
								if (
									((we.previous = function () {
										return Jp[Jp.indexOf(we) - 1];
									}),
									(we.next = function () {
										return Jp[Jp.indexOf(we) + 1];
									}),
									(we.revert = function (e, t) {
										if (!t) return we.kill(!0);
										var r = !1 !== e || !we.enabled,
											i = Ch;
										r !== we.isReverted &&
											(r &&
												((j = Math.max(
													Te(),
													we.scroll.rec || 0,
												)),
												(Se = we.progress),
												(N = n && n.progress())),
											c &&
												[c, d, f, h].forEach(
													function (e) {
														return (e.style.display =
															r
																? 'none'
																: 'block');
													},
												),
											r && ((Ch = we), we.update(r)),
											!K ||
												(oe && we.isActive) ||
												(r
													? (function (e, t, n) {
															wm(n);
															var r = e._gsap;
															if (
																r.spacerIsNative
															)
																wm(
																	r.spacerState,
																);
															else if (
																e._gsap
																	.swappedIn
															) {
																var i =
																	t.parentNode;
																i &&
																	(i.insertBefore(
																		e,
																		t,
																	),
																	i.removeChild(
																		t,
																	));
															}
															e._gsap.swappedIn =
																!1;
														})(K, w, v)
													: Am(K, w, Bp(K), T)),
											r || we.update(r),
											(Ch = i),
											(we.isReverted = r));
									}),
									(we.refresh = function (i, o, p, b) {
										if ((!Ch && we.enabled) || o)
											if (K && i && Kh)
												Vp(e, 'scrollEnd', im);
											else {
												!Hh && be && be(we),
													(Ch = we),
													r.tween &&
														!p &&
														(r.tween.kill(),
														(r.tween = 0)),
													B && B.pause(),
													$ &&
														n &&
														n
															.revert({
																kill: !1,
															})
															.invalidate(),
													we.isReverted ||
														we.revert(!0, !0),
													(we._subPinOffset = !1);
												var E,
													S,
													_,
													M,
													D,
													O,
													R,
													L,
													I,
													z,
													V,
													U,
													Y,
													Q = xe(),
													H = Ee(),
													G = se
														? se.duration()
														: dp(fe, ce),
													W = g <= 0.01,
													q = 0,
													ee = b || 0,
													te = gp(p) ? p.end : t.end,
													ne = t.endTrigger || J,
													re = gp(p)
														? p.start
														: t.start ||
															(0 !== t.start && J
																? K
																	? '0 0'
																	: '0 100%'
																: 0),
													ie = (we.pinnedContainer =
														t.pinnedContainer &&
														ih(
															t.pinnedContainer,
															we,
														)),
													ae =
														(J &&
															Math.max(
																0,
																Jp.indexOf(we),
															)) ||
														0,
													le = ae;
												for (
													Ae &&
													gp(p) &&
													((U = fh.getProperty(
														f,
														ce.p,
													)),
													(Y = fh.getProperty(
														h,
														ce.p,
													)));
													le--;

												)
													(O = Jp[le]).end ||
														O.refresh(0, 1) ||
														(Ch = we),
														!(R = O.pin) ||
															(R !== J &&
																R !== K &&
																R !== ie) ||
															O.isReverted ||
															(z || (z = []),
															z.unshift(O),
															O.revert(!0, !0)),
														O !== Jp[le] &&
															(ae--, le--);
												for (
													pp(re) && (re = re(we)),
														re = $h(
															re,
															'start',
															we,
														),
														l =
															Em(
																re,
																J,
																Q,
																ce,
																Te(),
																c,
																f,
																we,
																H,
																ye,
																me,
																G,
																se,
																we._startClamp &&
																	'_startClamp',
															) ||
															(K ? -0.001 : 0),
														pp(te) && (te = te(we)),
														hp(te) &&
															!te.indexOf('+=') &&
															(~te.indexOf(' ')
																? (te =
																		(hp(re)
																			? re.split(
																					' ',
																				)[0]
																			: '') +
																		te)
																: ((q = Wp(
																		te.substr(
																			2,
																		),
																		Q,
																	)),
																	(te = hp(re)
																		? re
																		: (se
																				? fh.utils.mapRange(
																						0,
																						se.duration(),
																						se
																							.scrollTrigger
																							.start,
																						se
																							.scrollTrigger
																							.end,
																						l,
																					)
																				: l) +
																			q),
																	(ne = J))),
														te = $h(te, 'end', we),
														u =
															Math.max(
																l,
																Em(
																	te ||
																		(ne
																			? '100% 0'
																			: G),
																	ne,
																	Q,
																	ce,
																	Te() + q,
																	d,
																	h,
																	we,
																	H,
																	ye,
																	me,
																	G,
																	se,
																	we._endClamp &&
																		'_endClamp',
																),
															) || -0.001,
														q = 0,
														le = ae;
													le--;

												)
													(R = (O = Jp[le]).pin) &&
														O.start - O._pinPush <=
															l &&
														!se &&
														O.end > 0 &&
														((E =
															O.end -
															(we._startClamp
																? Math.max(
																		0,
																		O.start,
																	)
																: O.start)),
														((R === J &&
															O.start -
																O._pinPush <
																l) ||
															R === ie) &&
															isNaN(re) &&
															(q +=
																E *
																(1 -
																	O.progress)),
														R === K && (ee += E));
												if (
													((l += q),
													(u += q),
													we._startClamp &&
														(we._startClamp += q),
													we._endClamp &&
														!Hh &&
														((we._endClamp =
															u || -0.001),
														(u = Math.min(
															u,
															dp(fe, ce),
														))),
													(g =
														u - l ||
														((l -= 0.01) && 0.001)),
													W &&
														(Se = fh.utils.clamp(
															0,
															1,
															fh.utils.normalize(
																l,
																u,
																j,
															),
														)),
													(we._pinPush = ee),
													c &&
														q &&
														(((E = {})[ce.a] =
															'+=' + q),
														ie &&
															(E[ce.p] =
																'-=' + Te()),
														fh.set([c, d], E)),
													K)
												)
													(E = Bp(K)),
														(M = ce === rh),
														(_ = Te()),
														(C =
															parseFloat(
																x(ce.a),
															) + ee),
														!G &&
															u > 1 &&
															((V = {
																style: (V = (
																	pe
																		? mh.scrollingElement ||
																			gh
																		: fe
																).style),
																value: V[
																	'overflow' +
																		ce.a.toUpperCase()
																],
															}),
															pe &&
																'scroll' !==
																	Bp(vh)[
																		'overflow' +
																			ce.a.toUpperCase()
																	] &&
																(V.style[
																	'overflow' +
																		ce.a.toUpperCase()
																] = 'scroll')),
														Am(K, w, E),
														(y = bm(K)),
														(S = Ip(K, !0)),
														(L =
															me &&
															oh(
																fe,
																M ? nh : rh,
															)()),
														Z &&
															(((T = [
																Z + ce.os2,
																g + ee + Rp,
															]).t = w),
															(le =
																Z === Pp
																	? Fp(
																			K,
																			ce,
																		) +
																		g +
																		ee
																	: 0) &&
																T.push(
																	ce.d,
																	le + Rp,
																),
															wm(T),
															ie &&
																Jp.forEach(
																	function (
																		e,
																	) {
																		e.pin ===
																			ie &&
																			!1 !==
																				e
																					.vars
																					.pinSpacing &&
																			(e._subPinOffset =
																				!0);
																	},
																),
															me && Te(j)),
														me &&
															(((D = {
																top:
																	S.top +
																	(M
																		? _ - l
																		: L) +
																	Rp,
																left:
																	S.left +
																	(M
																		? L
																		: _ -
																			l) +
																	Rp,
																boxSizing:
																	'border-box',
																position:
																	'fixed',
															})[Ep] = D[
																'max' + Dp
															] =
																Math.ceil(
																	S.width,
																) + Rp),
															(D[Cp] = D[
																'max' + Op
															] =
																Math.ceil(
																	S.height,
																) + Rp),
															(D[Mp] =
																D[Mp + Tp] =
																D[Mp + kp] =
																D[Mp + _p] =
																D[Mp + Sp] =
																	'0'),
															(D[Pp] = E[Pp]),
															(D[Pp + Tp] =
																E[Pp + Tp]),
															(D[Pp + kp] =
																E[Pp + kp]),
															(D[Pp + _p] =
																E[Pp + _p]),
															(D[Pp + Sp] =
																E[Pp + Sp]),
															(A = (function (
																e,
																t,
																n,
															) {
																for (
																	var r,
																		i = [],
																		o =
																			e.length,
																		a = n
																			? 8
																			: 0;
																	a < o;
																	a += 2
																)
																	(r = e[a]),
																		i.push(
																			r,
																			r in
																				t
																				? t[
																						r
																					]
																				: e[
																						a +
																							1
																					],
																		);
																return (
																	(i.t = e.t),
																	i
																);
															})(v, D, oe)),
															Hh && Te(0)),
														n
															? ((I = n._initted),
																Oh(1),
																n.render(
																	n.duration(),
																	!0,
																	!0,
																),
																(k =
																	x(ce.a) -
																	C +
																	g +
																	ee),
																(P =
																	Math.abs(
																		g - k,
																	) > 1),
																me &&
																	P &&
																	A.splice(
																		A.length -
																			2,
																		2,
																	),
																n.render(
																	0,
																	!0,
																	!0,
																),
																I ||
																	n.invalidate(
																		!0,
																	),
																n.parent ||
																	n.totalTime(
																		n.totalTime(),
																	),
																Oh(0))
															: (k = g),
														V &&
															(V.value
																? (V.style[
																		'overflow' +
																			ce.a.toUpperCase()
																	] = V.value)
																: V.style.removeProperty(
																		'overflow-' +
																			ce.a,
																	));
												else if (J && Te() && !se)
													for (
														S = J.parentNode;
														S && S !== vh;

													)
														S._pinOffset &&
															((l -=
																S._pinOffset),
															(u -=
																S._pinOffset)),
															(S = S.parentNode);
												z &&
													z.forEach(function (e) {
														return e.revert(!1, !0);
													}),
													(we.start = l),
													(we.end = u),
													(a = s = Hh ? j : Te()),
													se ||
														Hh ||
														(a < j && Te(j),
														(we.scroll.rec = 0)),
													we.revert(!1, !0),
													(ke = qh()),
													F &&
														((Ce = -1),
														F.restart(!0)),
													(Ch = 0),
													n &&
														de &&
														(n._initted || N) &&
														n.progress() !== N &&
														n
															.progress(
																N || 0,
																!0,
															)
															.render(
																n.time(),
																!0,
																!0,
															),
													(W ||
														Se !== we.progress ||
														se) &&
														(n &&
															!de &&
															n.totalProgress(
																se &&
																	l <
																		-0.001 &&
																	!Se
																	? fh.utils.normalize(
																			l,
																			u,
																			0,
																		)
																	: Se,
																!0,
															),
														(we.progress =
															W ||
															(a - l) / g === Se
																? 0
																: Se)),
													K &&
														Z &&
														(w._pinOffset =
															Math.round(
																we.progress * k,
															)),
													B && B.invalidate(),
													isNaN(U) ||
														((U -= fh.getProperty(
															f,
															ce.p,
														)),
														(Y -= fh.getProperty(
															h,
															ce.p,
														)),
														Tm(f, ce, U),
														Tm(c, ce, U - (b || 0)),
														Tm(h, ce, Y),
														Tm(
															d,
															ce,
															Y - (b || 0),
														)),
													W && !Hh && we.update(),
													!X ||
														Hh ||
														m ||
														((m = !0),
														X(we),
														(m = !1));
											}
									}),
									(we.getVelocity = function () {
										return (
											((Te() - s) / (qh() - xh)) * 1e3 ||
											0
										);
									}),
									(we.endAnimation = function () {
										vp(we.callbackAnimation),
											n &&
												(B
													? B.progress(1)
													: n.paused()
														? de ||
															vp(
																n,
																we.direction <
																	0,
																1,
															)
														: vp(n, n.reversed()));
									}),
									(we.labelToScroll = function (e) {
										return (
											(n &&
												n.labels &&
												(l || we.refresh() || l) +
													(n.labels[e] /
														n.duration()) *
														g) ||
											0
										);
									}),
									(we.getTrailing = function (e) {
										var t = Jp.indexOf(we),
											n =
												we.direction > 0
													? Jp.slice(0, t).reverse()
													: Jp.slice(t + 1);
										return (
											hp(e)
												? n.filter(function (t) {
														return (
															t.vars
																.preventOverlaps ===
															e
														);
													})
												: n
										).filter(function (e) {
											return we.direction > 0
												? e.end <= l
												: e.start >= u;
										});
									}),
									(we.update = function (e, t, i) {
										if (!se || i || e) {
											var o,
												c,
												d,
												h,
												p,
												m,
												v,
												b = !0 === Hh ? j : we.scroll(),
												x = e ? 0 : (b - l) / g,
												T =
													x < 0
														? 0
														: x > 1
															? 1
															: x || 0,
												D = we.progress;
											if (
												(t &&
													((s = a),
													(a = se ? Te() : b),
													ie &&
														((R = O),
														(O =
															n && !de
																? n.totalProgress()
																: T))),
												ee &&
													!T &&
													K &&
													!Ch &&
													!Xh &&
													Kh &&
													l <
														b +
															((b - s) /
																(qh() - xh)) *
																ee &&
													(T = 1e-4),
												T !== D && we.enabled)
											) {
												if (
													((h =
														(p =
															(o = we.isActive =
																!!T &&
																T < 1) !==
															(!!D && D < 1)) ||
														!!T !== !!D),
													(we.direction =
														T > D ? 1 : -1),
													(we.progress = T),
													h &&
														!Ch &&
														((c =
															T && !D
																? 0
																: 1 === T
																	? 1
																	: 1 === D
																		? 2
																		: 3),
														de &&
															((d =
																(!p &&
																	'none' !==
																		ve[
																			c +
																				1
																		] &&
																	ve[
																		c + 1
																	]) ||
																ve[c]),
															(v =
																n &&
																('complete' ===
																	d ||
																	'reset' ===
																		d ||
																	d in n)))),
													ue &&
														(p || v) &&
														(v || q || !n) &&
														(pp(ue)
															? ue(we)
															: we
																	.getTrailing(
																		ue,
																	)
																	.forEach(
																		function (
																			e,
																		) {
																			return e.endAnimation();
																		},
																	)),
													de ||
														(!B || Ch || Xh
															? n &&
																n.totalProgress(
																	T,
																	!(
																		!Ch ||
																		(!ke &&
																			!e)
																	),
																)
															: (B._dp._time -
																	B._start !==
																	B._time &&
																	B.render(
																		B._dp
																			._time -
																			B._start,
																	),
																B.resetTo
																	? B.resetTo(
																			'totalProgress',
																			T,
																			n._tTime /
																				n._tDur,
																		)
																	: ((B.vars.totalProgress =
																			T),
																		B.invalidate().restart()))),
													K)
												)
													if (
														(e &&
															Z &&
															(w.style[
																Z + ce.os2
															] = S),
														me)
													) {
														if (h) {
															if (
																((m =
																	!e &&
																	T > D &&
																	u + 1 > b &&
																	b + 1 >=
																		dp(
																			fe,
																			ce,
																		)),
																oe)
															)
																if (
																	e ||
																	(!o && !m)
																)
																	km(K, w);
																else {
																	var L = Ip(
																			K,
																			!0,
																		),
																		I =
																			b -
																			l;
																	km(
																		K,
																		vh,
																		L.top +
																			(ce ===
																			rh
																				? I
																				: 0) +
																			Rp,
																		L.left +
																			(ce ===
																			rh
																				? 0
																				: I) +
																			Rp,
																	);
																}
															wm(o || m ? A : y),
																(P &&
																	T < 1 &&
																	o) ||
																	E(
																		C +
																			(1 !==
																				T ||
																			m
																				? 0
																				: k),
																	);
														}
													} else E(op(C + k * T));
												ie &&
													!r.tween &&
													!Ch &&
													!Xh &&
													F.restart(!0),
													H &&
														(p ||
															(re &&
																T &&
																(T < 1 ||
																	!Yh))) &&
														wh(H.targets).forEach(
															function (e) {
																return e.classList[
																	o || re
																		? 'add'
																		: 'remove'
																](H.className);
															},
														),
													Q && !de && !e && Q(we),
													h && !Ch
														? (de &&
																(v &&
																	('complete' ===
																	d
																		? n
																				.pause()
																				.totalProgress(
																					1,
																				)
																		: 'reset' ===
																			  d
																			? n
																					.restart(
																						!0,
																					)
																					.pause()
																			: 'restart' ===
																				  d
																				? n.restart(
																						!0,
																					)
																				: n[
																						d
																					]()),
																Q && Q(we)),
															(!p && Yh) ||
																(W &&
																	p &&
																	Ap(we, W),
																ge[c] &&
																	Ap(
																		we,
																		ge[c],
																	),
																re &&
																	(1 === T
																		? we.kill(
																				!1,
																				1,
																			)
																		: (ge[
																				c
																			] =
																				0)),
																p ||
																	(ge[
																		(c =
																			1 ===
																			T
																				? 1
																				: 3)
																	] &&
																		Ap(
																			we,
																			ge[
																				c
																			],
																		))),
															le &&
																!o &&
																Math.abs(
																	we.getVelocity(),
																) >
																	(mp(le)
																		? le
																		: 2500) &&
																(vp(
																	we.callbackAnimation,
																),
																B
																	? B.progress(
																			1,
																		)
																	: vp(
																			n,
																			'reverse' ===
																				d
																				? 1
																				: !T,
																			1,
																		)))
														: de &&
															Q &&
															!Ch &&
															Q(we);
											}
											if (M) {
												var N = se
													? (b / se.duration()) *
														(se._caScrollDist || 0)
													: b;
												_(N + (f._isFlipped ? 1 : 0)),
													M(N);
											}
											z &&
												z(
													(-b / se.duration()) *
														(se._caScrollDist || 0),
												);
										}
									}),
									(we.enable = function (t, n) {
										we.enabled ||
											((we.enabled = !0),
											Vp(fe, 'resize', tm),
											pe || Vp(fe, 'scroll', $p),
											be && Vp(e, 'refreshInit', be),
											!1 !== t &&
												((we.progress = Se = 0),
												(a = s = Ce = Te())),
											!1 !== n && we.refresh());
									}),
									(we.getTween = function (e) {
										return e && r ? r.tween : B;
									}),
									(we.setPositions = function (e, t, n, r) {
										if (se) {
											var i = se.scrollTrigger,
												o = se.duration(),
												a = i.end - i.start;
											(e = i.start + (a * e) / o),
												(t = i.start + (a * t) / o);
										}
										we.refresh(
											!1,
											!1,
											{
												start: ep(
													e,
													n && !!we._startClamp,
												),
												end: ep(t, n && !!we._endClamp),
											},
											r,
										),
											we.update();
									}),
									(we.adjustPinSpacing = function (e) {
										if (T && e) {
											var t = T.indexOf(ce.d) + 1;
											(T[t] = parseFloat(T[t]) + e + Rp),
												(T[1] =
													parseFloat(T[1]) + e + Rp),
												wm(T);
										}
									}),
									(we.disable = function (t, n) {
										if (
											we.enabled &&
											(!1 !== t && we.revert(!0, !0),
											(we.enabled = we.isActive = !1),
											n || (B && B.pause()),
											(j = 0),
											i && (i.uncache = 1),
											be && Up(e, 'refreshInit', be),
											F &&
												(F.pause(),
												r.tween &&
													r.tween.kill() &&
													(r.tween = 0)),
											!pe)
										) {
											for (var o = Jp.length; o--; )
												if (
													Jp[o].scroller === fe &&
													Jp[o] !== we
												)
													return;
											Up(fe, 'resize', tm),
												pe || Up(fe, 'scroll', $p);
										}
									}),
									(we.kill = function (e, r) {
										we.disable(e, r),
											B && !r && B.kill(),
											G && delete Kp[G];
										var o = Jp.indexOf(we);
										o >= 0 && Jp.splice(o, 1),
											o === Th && pm > 0 && Th--,
											(o = 0),
											Jp.forEach(function (e) {
												return (
													e.scroller ===
														we.scroller && (o = 1)
												);
											}),
											o || Hh || (we.scroll.rec = 0),
											n &&
												((n.scrollTrigger = null),
												e && n.revert({ kill: !1 }),
												r || n.kill()),
											c &&
												[c, d, f, h].forEach(
													function (e) {
														return (
															e.parentNode &&
															e.parentNode.removeChild(
																e,
															)
														);
													},
												),
											Wh === we && (Wh = 0),
											K &&
												(i && (i.uncache = 1),
												(o = 0),
												Jp.forEach(function (e) {
													return e.pin === K && o++;
												}),
												o || (i.spacer = 0)),
											t.onKill && t.onKill(we);
									}),
									Jp.push(we),
									we.enable(!1, !1),
									V && V(we),
									n && n.add && !g)
								) {
									var De = we.update;
									(we.update = function () {
										(we.update = De),
											l || u || we.refresh();
									}),
										fh.delayedCall(0.01, we.update),
										(g = 0.01),
										(l = u = 0);
								} else we.refresh();
								K &&
									(function () {
										if (Gh !== cm) {
											var e = (Gh = cm);
											requestAnimationFrame(function () {
												return e === cm && fm(!0);
											});
										}
									})();
							} else this.update = this.refresh = this.kill = ip;
						}),
						(e.register = function (t) {
							return (
								hh ||
									((fh = t || sp()),
									ap() && window.document && e.enable(),
									(hh = Zh)),
								hh
							);
						}),
						(e.defaults = function (e) {
							if (e) for (var t in e) Hp[t] = e[t];
							return Hp;
						}),
						(e.disable = function (e, t) {
							(Zh = 0),
								Jp.forEach(function (n) {
									return n[t ? 'kill' : 'disable'](e);
								}),
								Up(ph, 'wheel', $p),
								Up(mh, 'scroll', $p),
								clearInterval(Eh),
								Up(mh, 'touchcancel', ip),
								Up(vh, 'touchstart', ip),
								zp(
									Up,
									mh,
									'pointerdown,touchstart,mousedown',
									np,
								),
								zp(Up, mh, 'pointerup,touchend,mouseup', rp),
								yh.kill(),
								fp(Up);
							for (var n = 0; n < Qf.length; n += 3)
								Yp(Up, Qf[n], Qf[n + 1]),
									Yp(Up, Qf[n], Qf[n + 2]);
						}),
						(e.enable = function () {
							if (
								((ph = window),
								(mh = document),
								(gh = mh.documentElement),
								(vh = mh.body),
								fh &&
									((wh = fh.utils.toArray),
									(bh = fh.utils.clamp),
									(Nh = fh.core.context || ip),
									(Oh = fh.core.suppressOverwrites || ip),
									(zh =
										ph.history.scrollRestoration || 'auto'),
									(hm = ph.pageYOffset),
									fh.core.globals('ScrollTrigger', e),
									vh))
							) {
								(Zh = 1),
									((Vh =
										document.createElement(
											'div',
										)).style.height = '100vh'),
									(Vh.style.position = 'absolute'),
									dm(),
									tp(),
									dh.register(fh),
									(e.isTouch = dh.isTouch),
									(jh =
										dh.isTouch &&
										/(iPad|iPhone|iPod|Mac)/g.test(
											navigator.userAgent,
										)),
									Vp(ph, 'wheel', $p),
									(Ah = [ph, mh, gh, vh]),
									fh.matchMedia
										? ((e.matchMedia = function (e) {
												var t,
													n = fh.matchMedia();
												for (t in e) n.add(t, e[t]);
												return n;
											}),
											fh.addEventListener(
												'matchMediaInit',
												function () {
													return lm();
												},
											),
											fh.addEventListener(
												'matchMediaRevert',
												function () {
													return sm();
												},
											),
											fh.addEventListener(
												'matchMedia',
												function () {
													fm(0, 1), om('matchMedia');
												},
											),
											fh.matchMedia(
												'(orientation: portrait)',
												function () {
													return em(), em;
												},
											))
										: console.warn(
												'Requires GSAP 3.11.0 or later',
											),
									em(),
									Vp(mh, 'scroll', $p);
								var t,
									n,
									r = vh.style,
									i = r.borderTopStyle,
									o = fh.core.Animation.prototype;
								for (
									o.revert ||
										Object.defineProperty(o, 'revert', {
											value: function () {
												return this.time(-0.01, !0);
											},
										}),
										r.borderTopStyle = 'solid',
										t = Ip(vh),
										rh.m = Math.round(t.top + rh.sc()) || 0,
										nh.m =
											Math.round(t.left + nh.sc()) || 0,
										i
											? (r.borderTopStyle = i)
											: r.removeProperty(
													'border-top-style',
												),
										Eh = setInterval(Zp, 250),
										fh.delayedCall(0.5, function () {
											return (Xh = 0);
										}),
										Vp(mh, 'touchcancel', ip),
										Vp(vh, 'touchstart', ip),
										zp(
											Vp,
											mh,
											'pointerdown,touchstart,mousedown',
											np,
										),
										zp(
											Vp,
											mh,
											'pointerup,touchend,mouseup',
											rp,
										),
										Sh = fh.utils.checkPrefix('transform'),
										vm.push(Sh),
										hh = qh(),
										yh = fh.delayedCall(0.2, fm).pause(),
										Mh = [
											mh,
											'visibilitychange',
											function () {
												var e = ph.innerWidth,
													t = ph.innerHeight;
												mh.hidden
													? ((_h = e), (Ph = t))
													: (_h === e && Ph === t) ||
														tm();
											},
											mh,
											'DOMContentLoaded',
											fm,
											ph,
											'load',
											fm,
											ph,
											'resize',
											tm,
										],
										fp(Vp),
										Jp.forEach(function (e) {
											return e.enable(0, 1);
										}),
										n = 0;
									n < Qf.length;
									n += 3
								)
									Yp(Up, Qf[n], Qf[n + 1]),
										Yp(Up, Qf[n], Qf[n + 2]);
							}
						}),
						(e.config = function (t) {
							'limitCallbacks' in t && (Yh = !!t.limitCallbacks);
							var n = t.syncInterval;
							(n && clearInterval(Eh)) ||
								((Eh = n) && setInterval(Zp, n)),
								'ignoreMobileResize' in t &&
									(Lh =
										1 === e.isTouch &&
										t.ignoreMobileResize),
								'autoRefreshEvents' in t &&
									(fp(Up) ||
										fp(Vp, t.autoRefreshEvents || 'none'),
									(Rh =
										-1 ===
										(t.autoRefreshEvents + '').indexOf(
											'resize',
										)));
						}),
						(e.scrollerProxy = function (e, t) {
							var n = ih(e),
								r = Qf.indexOf(n),
								i = lp(n);
							~r && Qf.splice(r, i ? 6 : 2),
								t &&
									(i
										? Hf.unshift(ph, t, vh, t, gh, t)
										: Hf.unshift(n, t));
						}),
						(e.clearMatchMedia = function (e) {
							Jp.forEach(function (t) {
								return (
									t._ctx &&
									t._ctx.query === e &&
									t._ctx.kill(!0, !0)
								);
							});
						}),
						(e.isInViewport = function (e, t, n) {
							var r = (hp(e) ? ih(e) : e).getBoundingClientRect(),
								i = r[n ? Ep : Cp] * t || 0;
							return n
								? r.right - i > 0 && r.left + i < ph.innerWidth
								: r.bottom - i > 0 &&
										r.top + i < ph.innerHeight;
						}),
						(e.positionInViewport = function (e, t, n) {
							hp(e) && (e = ih(e));
							var r = e.getBoundingClientRect(),
								i = r[n ? Ep : Cp],
								o =
									null == t
										? i / 2
										: t in Gp
											? Gp[t] * i
											: ~t.indexOf('%')
												? (parseFloat(t) * i) / 100
												: parseFloat(t) || 0;
							return n
								? (r.left + o) / ph.innerWidth
								: (r.top + o) / ph.innerHeight;
						}),
						(e.killAll = function (e) {
							if (
								(Jp.slice(0).forEach(function (e) {
									return (
										'ScrollSmoother' !== e.vars.id &&
										e.kill()
									);
								}),
								!0 !== e)
							) {
								var t = nm.killAll || [];
								(nm = {}),
									t.forEach(function (e) {
										return e();
									});
							}
						}),
						e
					);
				})();
			(Pm.version = '3.12.2'),
				(Pm.saveStyles = function (e) {
					return e
						? wh(e).forEach(function (e) {
								if (e && e.style) {
									var t = am.indexOf(e);
									t >= 0 && am.splice(t, 5),
										am.push(
											e,
											e.style.cssText,
											e.getBBox &&
												e.getAttribute('transform'),
											fh.core.getCache(e),
											Nh(),
										);
								}
							})
						: am;
				}),
				(Pm.revert = function (e, t) {
					return lm(!e, t);
				}),
				(Pm.create = function (e, t) {
					return new Pm(e, t);
				}),
				(Pm.refresh = function (e) {
					return e ? tm() : (hh || Pm.register()) && fm(!0);
				}),
				(Pm.update = function (e) {
					return ++Qf.cache && mm(!0 === e ? 2 : 0);
				}),
				(Pm.clearScrollMemory = um),
				(Pm.maxScroll = function (e, t) {
					return dp(e, t ? nh : rh);
				}),
				(Pm.getScrollFunc = function (e, t) {
					return oh(ih(e), t ? nh : rh);
				}),
				(Pm.getById = function (e) {
					return Kp[e];
				}),
				(Pm.getAll = function () {
					return Jp.filter(function (e) {
						return 'ScrollSmoother' !== e.vars.id;
					});
				}),
				(Pm.isScrolling = function () {
					return !!Kh;
				}),
				(Pm.snapDirectional = Np),
				(Pm.addEventListener = function (e, t) {
					var n = nm[e] || (nm[e] = []);
					~n.indexOf(t) || n.push(t);
				}),
				(Pm.removeEventListener = function (e, t) {
					var n = nm[e],
						r = n && n.indexOf(t);
					r >= 0 && n.splice(r, 1);
				}),
				(Pm.batch = function (e, t) {
					var n,
						r = [],
						i = {},
						o = t.interval || 0.016,
						a = t.batchMax || 1e9,
						s = function (e, t) {
							var n = [],
								r = [],
								i = fh
									.delayedCall(o, function () {
										t(n, r), (n = []), (r = []);
									})
									.pause();
							return function (e) {
								n.length || i.restart(!0),
									n.push(e.trigger),
									r.push(e),
									a <= n.length && i.progress(1);
							};
						};
					for (n in t)
						i[n] =
							'on' === n.substr(0, 2) &&
							pp(t[n]) &&
							'onRefreshInit' !== n
								? s(0, t[n])
								: t[n];
					return (
						pp(a) &&
							((a = a()),
							Vp(Pm, 'refresh', function () {
								return (a = t.batchMax());
							})),
						wh(e).forEach(function (e) {
							var t = {};
							for (n in i) t[n] = i[n];
							(t.trigger = e), r.push(Pm.create(t));
						}),
						r
					);
				});
			var Mm,
				Dm = function (e, t, n, r) {
					return (
						t > r ? e(r) : t < 0 && e(0),
						n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
					);
				},
				Om = function e(t, n) {
					!0 === n
						? t.style.removeProperty('touch-action')
						: (t.style.touchAction =
								!0 === n
									? 'auto'
									: n
										? 'pan-' +
											n +
											(dh.isTouch ? ' pinch-zoom' : '')
										: 'none'),
						t === gh && e(vh, n);
				},
				Rm = { auto: 1, scroll: 1 },
				Bm = function (e) {
					var t,
						n = e.event,
						r = e.target,
						i = e.axis,
						o = (n.changedTouches ? n.changedTouches[0] : n).target,
						a = o._gsap || fh.core.getCache(o),
						s = qh();
					if (!a._isScrollT || s - a._isScrollT > 2e3) {
						for (
							;
							o &&
							o !== vh &&
							((o.scrollHeight <= o.clientHeight &&
								o.scrollWidth <= o.clientWidth) ||
								(!Rm[(t = Bp(o)).overflowY] &&
									!Rm[t.overflowX]));

						)
							o = o.parentNode;
						(a._isScroll =
							o &&
							o !== r &&
							!lp(o) &&
							(Rm[(t = Bp(o)).overflowY] || Rm[t.overflowX])),
							(a._isScrollT = s);
					}
					(a._isScroll || 'x' === i) &&
						(n.stopPropagation(), (n._gsapAllow = !0));
				},
				Lm = function (e, t, n, r) {
					return dh.create({
						target: e,
						capture: !0,
						debounce: !1,
						lockAxis: !0,
						type: t,
						onWheel: (r = r && Bm),
						onPress: r,
						onDrag: r,
						onScroll: r,
						onEnable: function () {
							return n && Vp(mh, dh.eventTypes[0], Fm, !1, !0);
						},
						onDisable: function () {
							return Up(mh, dh.eventTypes[0], Fm, !0);
						},
					});
				},
				Im = /(input|label|select|textarea)/i,
				Fm = function (e) {
					var t = Im.test(e.target.tagName);
					(t || Mm) && ((e._gsapAllow = !0), (Mm = t));
				},
				jm = function (e) {
					gp(e) || (e = {}),
						(e.preventDefault =
							e.isNormalizer =
							e.allowClicks =
								!0),
						e.type || (e.type = 'wheel,touch'),
						(e.debounce = !!e.debounce),
						(e.id = e.id || 'normalizer');
					var t,
						n,
						r,
						i,
						o,
						a,
						s,
						l,
						u = e,
						c = u.normalizeScrollX,
						d = u.momentum,
						f = u.allowNestedScroll,
						h = u.onRelease,
						p = ih(e.target) || gh,
						m = fh.core.globals().ScrollSmoother,
						g = m && m.get(),
						v =
							jh &&
							((e.content && ih(e.content)) ||
								(g &&
									!1 !== e.content &&
									!g.smooth() &&
									g.content())),
						A = oh(p, rh),
						y = oh(p, nh),
						w = 1,
						b =
							(dh.isTouch && ph.visualViewport
								? ph.visualViewport.scale *
									ph.visualViewport.width
								: ph.outerWidth) / ph.innerWidth,
						x = 0,
						E = pp(d)
							? function () {
									return d(t);
								}
							: function () {
									return d || 2.8;
								},
						C = Lm(p, e.type, !0, f),
						k = function () {
							return (i = !1);
						},
						S = ip,
						T = ip,
						_ = function () {
							(n = dp(p, rh)),
								(T = bh(jh ? 1 : 0, n)),
								c && (S = bh(0, dp(p, nh))),
								(r = cm);
						},
						P = function () {
							(v._gsap.y =
								op(parseFloat(v._gsap.y) + A.offset) + 'px'),
								(v.style.transform =
									'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
									parseFloat(v._gsap.y) +
									', 0, 1)'),
								(A.offset = A.cacheID = 0);
						},
						M = function () {
							_(),
								o.isActive() &&
									o.vars.scrollY > n &&
									(A() > n
										? o.progress(1) && A(n)
										: o.resetTo('scrollY', n));
						};
					return (
						v && fh.set(v, { y: '+=0' }),
						(e.ignoreCheck = function (e) {
							return (
								(jh &&
									'touchmove' === e.type &&
									(function () {
										if (i) {
											requestAnimationFrame(k);
											var e = op(t.deltaY / 2),
												n = T(A.v - e);
											if (v && n !== A.v + A.offset) {
												A.offset = n - A.v;
												var r = op(
													(parseFloat(
														v && v._gsap.y,
													) || 0) - A.offset,
												);
												(v.style.transform =
													'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
													r +
													', 0, 1)'),
													(v._gsap.y = r + 'px'),
													(A.cacheID = Qf.cache),
													mm();
											}
											return !0;
										}
										A.offset && P(), (i = !0);
									})()) ||
								(w > 1.05 && 'touchstart' !== e.type) ||
								t.isGesturing ||
								(e.touches && e.touches.length > 1)
							);
						}),
						(e.onPress = function () {
							i = !1;
							var e = w;
							(w = op(
								((ph.visualViewport &&
									ph.visualViewport.scale) ||
									1) / b,
							)),
								o.pause(),
								e !== w && Om(p, w > 1.01 || (!c && 'x')),
								(a = y()),
								(s = A()),
								_(),
								(r = cm);
						}),
						(e.onRelease = e.onGestureStart =
							function (e, t) {
								if ((A.offset && P(), t)) {
									Qf.cache++;
									var r,
										i,
										a = E();
									c &&
										((i =
											(r = y()) +
											(0.05 * a * -e.velocityX) / 0.227),
										(a *= Dm(y, r, i, dp(p, nh))),
										(o.vars.scrollX = S(i))),
										(i =
											(r = A()) +
											(0.05 * a * -e.velocityY) / 0.227),
										(a *= Dm(A, r, i, dp(p, rh))),
										(o.vars.scrollY = T(i)),
										o.invalidate().duration(a).play(0.01),
										((jh && o.vars.scrollY >= n) ||
											r >= n - 1) &&
											fh.to(
												{},
												{ onUpdate: M, duration: a },
											);
								} else l.restart(!0);
								h && h(e);
							}),
						(e.onWheel = function () {
							o._ts && o.pause(),
								qh() - x > 1e3 && ((r = 0), (x = qh()));
						}),
						(e.onChange = function (e, t, n, i, o) {
							if (
								(cm !== r && _(),
								t &&
									c &&
									y(
										S(
											i[2] === t
												? a + (e.startX - e.x)
												: y() + t - i[1],
										),
									),
								n)
							) {
								A.offset && P();
								var l = o[2] === n,
									u = l ? s + e.startY - e.y : A() + n - o[1],
									d = T(u);
								l && u !== d && (s += d - u), A(d);
							}
							(n || t) && mm();
						}),
						(e.onEnable = function () {
							Om(p, !c && 'x'),
								Pm.addEventListener('refresh', M),
								Vp(ph, 'resize', M),
								A.smooth &&
									((A.target.style.scrollBehavior = 'auto'),
									(A.smooth = y.smooth = !1)),
								C.enable();
						}),
						(e.onDisable = function () {
							Om(p, !0),
								Up(ph, 'resize', M),
								Pm.removeEventListener('refresh', M),
								C.kill();
						}),
						(e.lockAxis = !1 !== e.lockAxis),
						((t = new dh(e)).iOS = jh),
						jh && !A() && A(1),
						jh && fh.ticker.add(ip),
						(l = t._dc),
						(o = fh.to(t, {
							ease: 'power4',
							paused: !0,
							scrollX: c ? '+=0.1' : '+=0',
							scrollY: '+=0.1',
							modifiers: {
								scrollY: Sm(A, A(), function () {
									return o.pause();
								}),
							},
							onUpdate: mm,
							onComplete: l.vars.onComplete,
						})),
						t
					);
				};
			function Nm(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called",
					);
				return e;
			}
			function zm(e, t) {
				(e.prototype = Object.create(t.prototype)),
					(e.prototype.constructor = e),
					(e.__proto__ = t);
			}
			(Pm.sort = function (e) {
				return Jp.sort(
					e ||
						function (e, t) {
							return (
								-1e6 * (e.vars.refreshPriority || 0) +
								e.start -
								(t.start + -1e6 * (t.vars.refreshPriority || 0))
							);
						},
				);
			}),
				(Pm.observe = function (e) {
					return new dh(e);
				}),
				(Pm.normalizeScroll = function (e) {
					if ('undefined' === typeof e) return Bh;
					if (!0 === e && Bh) return Bh.enable();
					if (!1 === e) return Bh && Bh.kill();
					var t = e instanceof dh ? e : jm(e);
					return (
						Bh && Bh.target === t.target && Bh.kill(),
						lp(t.target) && (Bh = t),
						t
					);
				}),
				(Pm.core = {
					_getVelocityProp: ah,
					_inputObserver: Lm,
					_scrollers: Qf,
					_proxies: Hf,
					bridge: {
						ss: function () {
							Kh || om('scrollStart'), (Kh = qh());
						},
						ref: function () {
							return Ch;
						},
					},
				}),
				sp() && fh.registerPlugin(Pm);
			var Vm,
				Um,
				Ym,
				Qm,
				Hm,
				Gm,
				Wm,
				Xm,
				qm,
				Jm,
				Km,
				Zm = {
					autoSleep: 120,
					force3D: 'auto',
					nullTargetWarn: 1,
					units: { lineHeight: '' },
				},
				$m = { duration: 0.5, overwrite: !1, delay: 0 },
				eg = 1e8,
				tg = 1e-8,
				ng = 2 * Math.PI,
				rg = ng / 4,
				ig = 0,
				og = Math.sqrt,
				ag = Math.cos,
				sg = Math.sin,
				lg = function (e) {
					return 'string' === typeof e;
				},
				ug = function (e) {
					return 'function' === typeof e;
				},
				cg = function (e) {
					return 'number' === typeof e;
				},
				dg = function (e) {
					return 'undefined' === typeof e;
				},
				fg = function (e) {
					return 'object' === typeof e;
				},
				hg = function (e) {
					return !1 !== e;
				},
				pg = function () {
					return 'undefined' !== typeof window;
				},
				mg = function (e) {
					return ug(e) || lg(e);
				},
				gg =
					('function' === typeof ArrayBuffer && ArrayBuffer.isView) ||
					function () {},
				vg = Array.isArray,
				Ag = /(?:-?\.?\d|\.)+/gi,
				yg = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
				wg = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
				bg = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
				xg = /[+-]=-?[.\d]+/,
				Eg = /[^,'"\[\]\s]+/gi,
				Cg = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
				kg = {},
				Sg = {},
				Tg = function (e) {
					return (Sg = nv(e, kg)) && ry;
				},
				_g = function (e, t) {
					return console.warn(
						'Invalid property',
						e,
						'set to',
						t,
						'Missing plugin? gsap.registerPlugin()',
					);
				},
				Pg = function (e, t) {
					return !t && console.warn(e);
				},
				Mg = function (e, t) {
					return (e && (kg[e] = t) && Sg && (Sg[e] = t)) || kg;
				},
				Dg = function () {
					return 0;
				},
				Og = { suppressEvents: !0, isStart: !0, kill: !1 },
				Rg = { suppressEvents: !0, kill: !1 },
				Bg = { suppressEvents: !0 },
				Lg = {},
				Ig = [],
				Fg = {},
				jg = {},
				Ng = {},
				zg = 30,
				Vg = [],
				Ug = '',
				Yg = function (e) {
					var t,
						n,
						r = e[0];
					if (
						(fg(r) || ug(r) || (e = [e]),
						!(t = (r._gsap || {}).harness))
					) {
						for (n = Vg.length; n-- && !Vg[n].targetTest(r); );
						t = Vg[n];
					}
					for (n = e.length; n--; )
						(e[n] &&
							(e[n]._gsap || (e[n]._gsap = new vA(e[n], t)))) ||
							e.splice(n, 1);
					return e;
				},
				Qg = function (e) {
					return e._gsap || Yg(Bv(e))[0]._gsap;
				},
				Hg = function (e, t, n) {
					return (n = e[t]) && ug(n)
						? e[t]()
						: (dg(n) && e.getAttribute && e.getAttribute(t)) || n;
				},
				Gg = function (e, t) {
					return (e = e.split(',')).forEach(t) || e;
				},
				Wg = function (e) {
					return Math.round(1e5 * e) / 1e5 || 0;
				},
				Xg = function (e) {
					return Math.round(1e7 * e) / 1e7 || 0;
				},
				qg = function (e, t) {
					var n = t.charAt(0),
						r = parseFloat(t.substr(2));
					return (
						(e = parseFloat(e)),
						'+' === n
							? e + r
							: '-' === n
								? e - r
								: '*' === n
									? e * r
									: e / r
					);
				},
				Jg = function (e, t) {
					for (
						var n = t.length, r = 0;
						e.indexOf(t[r]) < 0 && ++r < n;

					);
					return r < n;
				},
				Kg = function () {
					var e,
						t,
						n = Ig.length,
						r = Ig.slice(0);
					for (Fg = {}, Ig.length = 0, e = 0; e < n; e++)
						(t = r[e]) &&
							t._lazy &&
							(t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
				},
				Zg = function (e, t, n, r) {
					Ig.length && !Um && Kg(),
						e.render(
							t,
							n,
							r || (Um && t < 0 && (e._initted || e._startAt)),
						),
						Ig.length && !Um && Kg();
				},
				$g = function (e) {
					var t = parseFloat(e);
					return (t || 0 === t) && (e + '').match(Eg).length < 2
						? t
						: lg(e)
							? e.trim()
							: e;
				},
				ev = function (e) {
					return e;
				},
				tv = function (e, t) {
					for (var n in t) n in e || (e[n] = t[n]);
					return e;
				},
				nv = function (e, t) {
					for (var n in t) e[n] = t[n];
					return e;
				},
				rv = function e(t, n) {
					for (var r in n)
						'__proto__' !== r &&
							'constructor' !== r &&
							'prototype' !== r &&
							(t[r] = fg(n[r])
								? e(t[r] || (t[r] = {}), n[r])
								: n[r]);
					return t;
				},
				iv = function (e, t) {
					var n,
						r = {};
					for (n in e) n in t || (r[n] = e[n]);
					return r;
				},
				ov = function (e) {
					var t,
						n = e.parent || Qm,
						r = e.keyframes
							? ((t = vg(e.keyframes)),
								function (e, n) {
									for (var r in n)
										r in e ||
											('duration' === r && t) ||
											'ease' === r ||
											(e[r] = n[r]);
								})
							: tv;
					if (hg(e.inherit))
						for (; n; )
							r(e, n.vars.defaults), (n = n.parent || n._dp);
					return e;
				},
				av = function (e, t, n, r, i) {
					void 0 === n && (n = '_first'),
						void 0 === r && (r = '_last');
					var o,
						a = e[r];
					if (i) for (o = t[i]; a && a[i] > o; ) a = a._prev;
					return (
						a
							? ((t._next = a._next), (a._next = t))
							: ((t._next = e[n]), (e[n] = t)),
						t._next ? (t._next._prev = t) : (e[r] = t),
						(t._prev = a),
						(t.parent = t._dp = e),
						t
					);
				},
				sv = function (e, t, n, r) {
					void 0 === n && (n = '_first'),
						void 0 === r && (r = '_last');
					var i = t._prev,
						o = t._next;
					i ? (i._next = o) : e[n] === t && (e[n] = o),
						o ? (o._prev = i) : e[r] === t && (e[r] = i),
						(t._next = t._prev = t.parent = null);
				},
				lv = function (e, t) {
					e.parent &&
						(!t || e.parent.autoRemoveChildren) &&
						e.parent.remove &&
						e.parent.remove(e),
						(e._act = 0);
				},
				uv = function (e, t) {
					if (e && (!t || t._end > e._dur || t._start < 0))
						for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
					return e;
				},
				cv = function (e, t, n, r) {
					return (
						e._startAt &&
						(Um
							? e._startAt.revert(Rg)
							: (e.vars.immediateRender && !e.vars.autoRevert) ||
								e._startAt.render(t, !0, r))
					);
				},
				dv = function e(t) {
					return !t || (t._ts && e(t.parent));
				},
				fv = function (e) {
					return e._repeat
						? hv(e._tTime, (e = e.duration() + e._rDelay)) * e
						: 0;
				},
				hv = function (e, t) {
					var n = Math.floor((e /= t));
					return e && n === e ? n - 1 : n;
				},
				pv = function (e, t) {
					return (
						(e - t._start) * t._ts +
						(t._ts >= 0
							? 0
							: t._dirty
								? t.totalDuration()
								: t._tDur)
					);
				},
				mv = function (e) {
					return (e._end = Xg(
						e._start +
							(e._tDur / Math.abs(e._ts || e._rts || tg) || 0),
					));
				},
				gv = function (e, t) {
					var n = e._dp;
					return (
						n &&
							n.smoothChildTiming &&
							e._ts &&
							((e._start = Xg(
								n._time -
									(e._ts > 0
										? t / e._ts
										: ((e._dirty
												? e.totalDuration()
												: e._tDur) -
												t) /
											-e._ts),
							)),
							mv(e),
							n._dirty || uv(n, e)),
						e
					);
				},
				vv = function (e, t) {
					var n;
					if (
						((t._time ||
							(!t._dur && t._initted) ||
							(t._start < e._time && (t._dur || !t.add))) &&
							((n = pv(e.rawTime(), t)),
							(!t._dur ||
								Pv(0, t.totalDuration(), n) - t._tTime > tg) &&
								t.render(n, !0)),
						uv(e, t)._dp &&
							e._initted &&
							e._time >= e._dur &&
							e._ts)
					) {
						if (e._dur < e.duration())
							for (n = e; n._dp; )
								n.rawTime() >= 0 && n.totalTime(n._tTime),
									(n = n._dp);
						e._zTime = -1e-8;
					}
				},
				Av = function (e, t, n, r) {
					return (
						t.parent && lv(t),
						(t._start = Xg(
							(cg(n)
								? n
								: n || e !== Qm
									? Sv(e, n, t)
									: e._time) + t._delay,
						)),
						(t._end = Xg(
							t._start +
								(t.totalDuration() / Math.abs(t.timeScale()) ||
									0),
						)),
						av(e, t, '_first', '_last', e._sort ? '_start' : 0),
						xv(t) || (e._recent = t),
						r || vv(e, t),
						e._ts < 0 && gv(e, e._tTime),
						e
					);
				},
				yv = function (e, t) {
					return (
						(kg.ScrollTrigger || _g('scrollTrigger', t)) &&
						kg.ScrollTrigger.create(t, e)
					);
				},
				wv = function (e, t, n, r, i) {
					return (
						kA(e, t, i),
						e._initted
							? !n &&
								e._pt &&
								!Um &&
								((e._dur && !1 !== e.vars.lazy) ||
									(!e._dur && e.vars.lazy)) &&
								qm !== iA.frame
								? (Ig.push(e), (e._lazy = [i, r]), 1)
								: void 0
							: 1
					);
				},
				bv = function e(t) {
					var n = t.parent;
					return (
						n &&
						n._ts &&
						n._initted &&
						!n._lock &&
						(n.rawTime() < 0 || e(n))
					);
				},
				xv = function (e) {
					var t = e.data;
					return 'isFromStart' === t || 'isStart' === t;
				},
				Ev = function (e, t, n, r) {
					var i = e._repeat,
						o = Xg(t) || 0,
						a = e._tTime / e._tDur;
					return (
						a && !r && (e._time *= o / e._dur),
						(e._dur = o),
						(e._tDur = i
							? i < 0
								? 1e10
								: Xg(o * (i + 1) + e._rDelay * i)
							: o),
						a > 0 && !r && gv(e, (e._tTime = e._tDur * a)),
						e.parent && mv(e),
						n || uv(e.parent, e),
						e
					);
				},
				Cv = function (e) {
					return e instanceof yA ? uv(e) : Ev(e, e._dur);
				},
				kv = { _start: 0, endTime: Dg, totalDuration: Dg },
				Sv = function e(t, n, r) {
					var i,
						o,
						a,
						s = t.labels,
						l = t._recent || kv,
						u = t.duration() >= eg ? l.endTime(!1) : t._dur;
					return lg(n) && (isNaN(n) || n in s)
						? ((o = n.charAt(0)),
							(a = '%' === n.substr(-1)),
							(i = n.indexOf('=')),
							'<' === o || '>' === o
								? (i >= 0 && (n = n.replace(/=/, '')),
									('<' === o
										? l._start
										: l.endTime(l._repeat >= 0)) +
										(parseFloat(n.substr(1)) || 0) *
											(a
												? (i < 0
														? l
														: r
													).totalDuration() / 100
												: 1))
								: i < 0
									? (n in s || (s[n] = u), s[n])
									: ((o = parseFloat(
											n.charAt(i - 1) + n.substr(i + 1),
										)),
										a &&
											r &&
											(o =
												(o / 100) *
												(vg(r)
													? r[0]
													: r
												).totalDuration()),
										i > 1
											? e(t, n.substr(0, i - 1), r) + o
											: u + o))
						: null == n
							? u
							: +n;
				},
				Tv = function (e, t, n) {
					var r,
						i,
						o = cg(t[1]),
						a = (o ? 2 : 1) + (e < 2 ? 0 : 1),
						s = t[a];
					if ((o && (s.duration = t[1]), (s.parent = n), e)) {
						for (r = s, i = n; i && !('immediateRender' in r); )
							(r = i.vars.defaults || {}),
								(i = hg(i.vars.inherit) && i.parent);
						(s.immediateRender = hg(r.immediateRender)),
							e < 2
								? (s.runBackwards = 1)
								: (s.startAt = t[a - 1]);
					}
					return new MA(t[0], s, t[a + 1]);
				},
				_v = function (e, t) {
					return e || 0 === e ? t(e) : t;
				},
				Pv = function (e, t, n) {
					return n < e ? e : n > t ? t : n;
				},
				Mv = function (e, t) {
					return lg(e) && (t = Cg.exec(e)) ? t[1] : '';
				},
				Dv = [].slice,
				Ov = function (e, t) {
					return (
						e &&
						fg(e) &&
						'length' in e &&
						((!t && !e.length) ||
							(e.length - 1 in e && fg(e[0]))) &&
						!e.nodeType &&
						e !== Hm
					);
				},
				Rv = function (e, t, n) {
					return (
						void 0 === n && (n = []),
						e.forEach(function (e) {
							var r;
							return (lg(e) && !t) || Ov(e, 1)
								? (r = n).push.apply(r, Bv(e))
								: n.push(e);
						}) || n
					);
				},
				Bv = function (e, t, n) {
					return Ym && !t && Ym.selector
						? Ym.selector(e)
						: !lg(e) || n || (!Gm && oA())
							? vg(e)
								? Rv(e, n)
								: Ov(e)
									? Dv.call(e, 0)
									: e
										? [e]
										: []
							: Dv.call((t || Wm).querySelectorAll(e), 0);
				},
				Lv = function (e) {
					return (
						(e = Bv(e)[0] || Pg('Invalid scope') || {}),
						function (t) {
							var n = e.current || e.nativeElement || e;
							return Bv(
								t,
								n.querySelectorAll
									? n
									: n === e
										? Pg('Invalid scope') ||
											Wm.createElement('div')
										: e,
							);
						}
					);
				},
				Iv = function (e) {
					return e.sort(function () {
						return 0.5 - Math.random();
					});
				},
				Fv = function (e) {
					if (ug(e)) return e;
					var t = fg(e) ? e : { each: e },
						n = fA(t.ease),
						r = t.from || 0,
						i = parseFloat(t.base) || 0,
						o = {},
						a = r > 0 && r < 1,
						s = isNaN(r) || a,
						l = t.axis,
						u = r,
						c = r;
					return (
						lg(r)
							? (u = c =
									{ center: 0.5, edges: 0.5, end: 1 }[r] || 0)
							: !a && s && ((u = r[0]), (c = r[1])),
						function (e, a, d) {
							var f,
								h,
								p,
								m,
								g,
								v,
								A,
								y,
								w,
								b = (d || t).length,
								x = o[b];
							if (!x) {
								if (
									!(w =
										'auto' === t.grid
											? 0
											: (t.grid || [1, eg])[1])
								) {
									for (
										A = -eg;
										A <
											(A =
												d[w++].getBoundingClientRect()
													.left) && w < b;

									);
									w--;
								}
								for (
									x = o[b] = [],
										f = s
											? Math.min(w, b) * u - 0.5
											: r % w,
										h =
											w === eg
												? 0
												: s
													? (b * c) / w - 0.5
													: (r / w) | 0,
										A = 0,
										y = eg,
										v = 0;
									v < b;
									v++
								)
									(p = (v % w) - f),
										(m = h - ((v / w) | 0)),
										(x[v] = g =
											l
												? Math.abs('y' === l ? m : p)
												: og(p * p + m * m)),
										g > A && (A = g),
										g < y && (y = g);
								'random' === r && Iv(x),
									(x.max = A - y),
									(x.min = y),
									(x.v = b =
										(parseFloat(t.amount) ||
											parseFloat(t.each) *
												(w > b
													? b - 1
													: l
														? 'y' === l
															? b / w
															: w
														: Math.max(w, b / w)) ||
											0) * ('edges' === r ? -1 : 1)),
									(x.b = b < 0 ? i - b : i),
									(x.u = Mv(t.amount || t.each) || 0),
									(n = n && b < 0 ? cA(n) : n);
							}
							return (
								(b = (x[e] - x.min) / x.max || 0),
								Xg(x.b + (n ? n(b) : b) * x.v) + x.u
							);
						}
					);
				},
				jv = function (e) {
					var t = Math.pow(10, ((e + '').split('.')[1] || '').length);
					return function (n) {
						var r = Xg(Math.round(parseFloat(n) / e) * e * t);
						return (r - (r % 1)) / t + (cg(n) ? 0 : Mv(n));
					};
				},
				Nv = function (e, t) {
					var n,
						r,
						i = vg(e);
					return (
						!i &&
							fg(e) &&
							((n = i = e.radius || eg),
							e.values
								? ((e = Bv(e.values)),
									(r = !cg(e[0])) && (n *= n))
								: (e = jv(e.increment))),
						_v(
							t,
							i
								? ug(e)
									? function (t) {
											return (
												(r = e(t)),
												Math.abs(r - t) <= n ? r : t
											);
										}
									: function (t) {
											for (
												var i,
													o,
													a = parseFloat(r ? t.x : t),
													s = parseFloat(r ? t.y : 0),
													l = eg,
													u = 0,
													c = e.length;
												c--;

											)
												(i = r
													? (i = e[c].x - a) * i +
														(o = e[c].y - s) * o
													: Math.abs(e[c] - a)) < l &&
													((l = i), (u = c));
											return (
												(u = !n || l <= n ? e[u] : t),
												r || u === t || cg(t)
													? u
													: u + Mv(t)
											);
										}
								: jv(e),
						)
					);
				},
				zv = function (e, t, n, r) {
					return _v(
						vg(e) ? !t : !0 === n ? !!(n = 0) : !r,
						function () {
							return vg(e)
								? e[~~(Math.random() * e.length)]
								: (n = n || 1e-5) &&
										(r =
											n < 1
												? Math.pow(
														10,
														(n + '').length - 2,
													)
												: 1) &&
										Math.floor(
											Math.round(
												(e -
													n / 2 +
													Math.random() *
														(t - e + 0.99 * n)) /
													n,
											) *
												n *
												r,
										) / r;
						},
					);
				},
				Vv = function (e, t, n) {
					return _v(n, function (n) {
						return e[~~t(n)];
					});
				},
				Uv = function (e) {
					for (
						var t, n, r, i, o = 0, a = '';
						~(t = e.indexOf('random(', o));

					)
						(r = e.indexOf(')', t)),
							(i = '[' === e.charAt(t + 7)),
							(n = e.substr(t + 7, r - t - 7).match(i ? Eg : Ag)),
							(a +=
								e.substr(o, t - o) +
								zv(
									i ? n : +n[0],
									i ? 0 : +n[1],
									+n[2] || 1e-5,
								)),
							(o = r + 1);
					return a + e.substr(o, e.length - o);
				},
				Yv = function (e, t, n, r, i) {
					var o = t - e,
						a = r - n;
					return _v(i, function (t) {
						return n + (((t - e) / o) * a || 0);
					});
				},
				Qv = function (e, t, n) {
					var r,
						i,
						o,
						a = e.labels,
						s = eg;
					for (r in a)
						(i = a[r] - t) < 0 === !!n &&
							i &&
							s > (i = Math.abs(i)) &&
							((o = r), (s = i));
					return o;
				},
				Hv = function (e, t, n) {
					var r,
						i,
						o,
						a = e.vars,
						s = a[t],
						l = Ym,
						u = e._ctx;
					if (s)
						return (
							(r = a[t + 'Params']),
							(i = a.callbackScope || e),
							n && Ig.length && Kg(),
							u && (Ym = u),
							(o = r ? s.apply(i, r) : s.call(i)),
							(Ym = l),
							o
						);
				},
				Gv = function (e) {
					return (
						lv(e),
						e.scrollTrigger && e.scrollTrigger.kill(!!Um),
						e.progress() < 1 && Hv(e, 'onInterrupt'),
						e
					);
				},
				Wv = [],
				Xv = function (e) {
					if (pg() && e) {
						var t = (e = (!e.name && e.default) || e).name,
							n = ug(e),
							r =
								t && !n && e.init
									? function () {
											this._props = [];
										}
									: e,
							i = {
								init: Dg,
								render: NA,
								add: EA,
								kill: VA,
								modifier: zA,
								rawVars: 0,
							},
							o = {
								targetTest: 0,
								get: 0,
								getSetter: LA,
								aliases: {},
								register: 0,
							};
						if ((oA(), e !== r)) {
							if (jg[t]) return;
							tv(r, tv(iv(e, i), o)),
								nv(r.prototype, nv(i, iv(e, o))),
								(jg[(r.prop = t)] = r),
								e.targetTest && (Vg.push(r), (Lg[t] = 1)),
								(t =
									('css' === t
										? 'CSS'
										: t.charAt(0).toUpperCase() +
											t.substr(1)) + 'Plugin');
						}
						Mg(t, r), e.register && e.register(ry, r, QA);
					} else e && Wv.push(e);
				},
				qv = 255,
				Jv = {
					aqua: [0, qv, qv],
					lime: [0, qv, 0],
					silver: [192, 192, 192],
					black: [0, 0, 0],
					maroon: [128, 0, 0],
					teal: [0, 128, 128],
					blue: [0, 0, qv],
					navy: [0, 0, 128],
					white: [qv, qv, qv],
					olive: [128, 128, 0],
					yellow: [qv, qv, 0],
					orange: [qv, 165, 0],
					gray: [128, 128, 128],
					purple: [128, 0, 128],
					green: [0, 128, 0],
					red: [qv, 0, 0],
					pink: [qv, 192, 203],
					cyan: [0, qv, qv],
					transparent: [qv, qv, qv, 0],
				},
				Kv = function (e, t, n) {
					return (
						((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
							? t + (n - t) * e * 6
							: e < 0.5
								? n
								: 3 * e < 2
									? t + (n - t) * (2 / 3 - e) * 6
									: t) *
							qv +
							0.5) |
						0
					);
				},
				Zv = function (e, t, n) {
					var r,
						i,
						o,
						a,
						s,
						l,
						u,
						c,
						d,
						f,
						h = e
							? cg(e)
								? [e >> 16, (e >> 8) & qv, e & qv]
								: 0
							: Jv.black;
					if (!h) {
						if (
							(',' === e.substr(-1) &&
								(e = e.substr(0, e.length - 1)),
							Jv[e])
						)
							h = Jv[e];
						else if ('#' === e.charAt(0)) {
							if (
								(e.length < 6 &&
									((r = e.charAt(1)),
									(i = e.charAt(2)),
									(o = e.charAt(3)),
									(e =
										'#' +
										r +
										r +
										i +
										i +
										o +
										o +
										(5 === e.length
											? e.charAt(4) + e.charAt(4)
											: ''))),
								9 === e.length)
							)
								return [
									(h = parseInt(e.substr(1, 6), 16)) >> 16,
									(h >> 8) & qv,
									h & qv,
									parseInt(e.substr(7), 16) / 255,
								];
							h = [
								(e = parseInt(e.substr(1), 16)) >> 16,
								(e >> 8) & qv,
								e & qv,
							];
						} else if ('hsl' === e.substr(0, 3))
							if (((h = f = e.match(Ag)), t)) {
								if (~e.indexOf('='))
									return (
										(h = e.match(yg)),
										n && h.length < 4 && (h[3] = 1),
										h
									);
							} else
								(a = (+h[0] % 360) / 360),
									(s = +h[1] / 100),
									(r =
										2 * (l = +h[2] / 100) -
										(i =
											l <= 0.5
												? l * (s + 1)
												: l + s - l * s)),
									h.length > 3 && (h[3] *= 1),
									(h[0] = Kv(a + 1 / 3, r, i)),
									(h[1] = Kv(a, r, i)),
									(h[2] = Kv(a - 1 / 3, r, i));
						else h = e.match(Ag) || Jv.transparent;
						h = h.map(Number);
					}
					return (
						t &&
							!f &&
							((r = h[0] / qv),
							(i = h[1] / qv),
							(o = h[2] / qv),
							(l =
								((u = Math.max(r, i, o)) +
									(c = Math.min(r, i, o))) /
								2),
							u === c
								? (a = s = 0)
								: ((d = u - c),
									(s =
										l > 0.5
											? d / (2 - u - c)
											: d / (u + c)),
									(a =
										u === r
											? (i - o) / d + (i < o ? 6 : 0)
											: u === i
												? (o - r) / d + 2
												: (r - i) / d + 4),
									(a *= 60)),
							(h[0] = ~~(a + 0.5)),
							(h[1] = ~~(100 * s + 0.5)),
							(h[2] = ~~(100 * l + 0.5))),
						n && h.length < 4 && (h[3] = 1),
						h
					);
				},
				$v = function (e) {
					var t = [],
						n = [],
						r = -1;
					return (
						e.split(tA).forEach(function (e) {
							var i = e.match(wg) || [];
							t.push.apply(t, i), n.push((r += i.length + 1));
						}),
						(t.c = n),
						t
					);
				},
				eA = function (e, t, n) {
					var r,
						i,
						o,
						a,
						s = '',
						l = (e + s).match(tA),
						u = t ? 'hsla(' : 'rgba(',
						c = 0;
					if (!l) return e;
					if (
						((l = l.map(function (e) {
							return (
								(e = Zv(e, t, 1)) &&
								u +
									(t
										? e[0] +
											',' +
											e[1] +
											'%,' +
											e[2] +
											'%,' +
											e[3]
										: e.join(',')) +
									')'
							);
						})),
						n && ((o = $v(e)), (r = n.c).join(s) !== o.c.join(s)))
					)
						for (
							a = (i = e.replace(tA, '1').split(wg)).length - 1;
							c < a;
							c++
						)
							s +=
								i[c] +
								(~r.indexOf(c)
									? l.shift() || u + '0,0,0,0)'
									: (o.length
											? o
											: l.length
												? l
												: n
										).shift());
					if (!i)
						for (a = (i = e.split(tA)).length - 1; c < a; c++)
							s += i[c] + l[c];
					return s + i[a];
				},
				tA = (function () {
					var e,
						t =
							'(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
					for (e in Jv) t += '|' + e + '\\b';
					return new RegExp(t + ')', 'gi');
				})(),
				nA = /hsl[a]?\(/,
				rA = function (e) {
					var t,
						n = e.join(' ');
					if (((tA.lastIndex = 0), tA.test(n)))
						return (
							(t = nA.test(n)),
							(e[1] = eA(e[1], t)),
							(e[0] = eA(e[0], t, $v(e[1]))),
							!0
						);
				},
				iA = (function () {
					var e,
						t,
						n,
						r,
						i,
						o,
						a = Date.now,
						s = 500,
						l = 33,
						u = a(),
						c = u,
						d = 1e3 / 240,
						f = d,
						h = [],
						p = function n(p) {
							var m,
								g,
								v,
								A,
								y = a() - c,
								w = !0 === p;
							if (
								(y > s && (u += y - l),
								((m = (v = (c += y) - u) - f) > 0 || w) &&
									((A = ++r.frame),
									(i = v - 1e3 * r.time),
									(r.time = v /= 1e3),
									(f += m + (m >= d ? 4 : d - m)),
									(g = 1)),
								w || (e = t(n)),
								g)
							)
								for (o = 0; o < h.length; o++) h[o](v, i, A, p);
						};
					return (
						(r = {
							time: 0,
							frame: 0,
							tick: function () {
								p(!0);
							},
							deltaRatio: function (e) {
								return i / (1e3 / (e || 60));
							},
							wake: function () {
								Xm &&
									(!Gm &&
										pg() &&
										((Hm = Gm = window),
										(Wm = Hm.document || {}),
										(kg.gsap = ry),
										(
											Hm.gsapVersions ||
											(Hm.gsapVersions = [])
										).push(ry.version),
										Tg(
											Sg ||
												Hm.GreenSockGlobals ||
												(!Hm.gsap && Hm) ||
												{},
										),
										(n = Hm.requestAnimationFrame),
										Wv.forEach(Xv)),
									e && r.sleep(),
									(t =
										n ||
										function (e) {
											return setTimeout(
												e,
												(f - 1e3 * r.time + 1) | 0,
											);
										}),
									(Km = 1),
									p(2));
							},
							sleep: function () {
								(n ? Hm.cancelAnimationFrame : clearTimeout)(e),
									(Km = 0),
									(t = Dg);
							},
							lagSmoothing: function (e, t) {
								(s = e || 1 / 0), (l = Math.min(t || 33, s));
							},
							fps: function (e) {
								(d = 1e3 / (e || 240)), (f = 1e3 * r.time + d);
							},
							add: function (e, t, n) {
								var i = t
									? function (t, n, o, a) {
											e(t, n, o, a), r.remove(i);
										}
									: e;
								return (
									r.remove(e),
									h[n ? 'unshift' : 'push'](i),
									oA(),
									i
								);
							},
							remove: function (e, t) {
								~(t = h.indexOf(e)) &&
									h.splice(t, 1) &&
									o >= t &&
									o--;
							},
							_listeners: h,
						}),
						r
					);
				})(),
				oA = function () {
					return !Km && iA.wake();
				},
				aA = {},
				sA = /^[\d.\-M][\d.\-,\s]/,
				lA = /["']/g,
				uA = function (e) {
					for (
						var t,
							n,
							r,
							i = {},
							o = e.substr(1, e.length - 3).split(':'),
							a = o[0],
							s = 1,
							l = o.length;
						s < l;
						s++
					)
						(n = o[s]),
							(t = s !== l - 1 ? n.lastIndexOf(',') : n.length),
							(r = n.substr(0, t)),
							(i[a] = isNaN(r) ? r.replace(lA, '').trim() : +r),
							(a = n.substr(t + 1).trim());
					return i;
				},
				cA = function (e) {
					return function (t) {
						return 1 - e(1 - t);
					};
				},
				dA = function e(t, n) {
					for (var r, i = t._first; i; )
						i instanceof yA
							? e(i, n)
							: !i.vars.yoyoEase ||
								(i._yoyo && i._repeat) ||
								i._yoyo === n ||
								(i.timeline
									? e(i.timeline, n)
									: ((r = i._ease),
										(i._ease = i._yEase),
										(i._yEase = r),
										(i._yoyo = n))),
							(i = i._next);
				},
				fA = function (e, t) {
					return (
						(e &&
							(ug(e)
								? e
								: aA[e] ||
									(function (e) {
										var t = (e + '').split('('),
											n = aA[t[0]];
										return n && t.length > 1 && n.config
											? n.config.apply(
													null,
													~e.indexOf('{')
														? [uA(t[1])]
														: (function (e) {
																var t =
																		e.indexOf(
																			'(',
																		) + 1,
																	n =
																		e.indexOf(
																			')',
																		),
																	r =
																		e.indexOf(
																			'(',
																			t,
																		);
																return e.substring(
																	t,
																	~r && r < n
																		? e.indexOf(
																				')',
																				n +
																					1,
																			)
																		: n,
																);
															})(e)
																.split(',')
																.map($g),
												)
											: aA._CE && sA.test(e)
												? aA._CE('', e)
												: n;
									})(e))) ||
						t
					);
				},
				hA = function (e, t, n, r) {
					void 0 === n &&
						(n = function (e) {
							return 1 - t(1 - e);
						}),
						void 0 === r &&
							(r = function (e) {
								return e < 0.5
									? t(2 * e) / 2
									: 1 - t(2 * (1 - e)) / 2;
							});
					var i,
						o = { easeIn: t, easeOut: n, easeInOut: r };
					return (
						Gg(e, function (e) {
							for (var t in ((aA[e] = kg[e] = o),
							(aA[(i = e.toLowerCase())] = n),
							o))
								aA[
									i +
										('easeIn' === t
											? '.in'
											: 'easeOut' === t
												? '.out'
												: '.inOut')
								] = aA[e + '.' + t] = o[t];
						}),
						o
					);
				},
				pA = function (e) {
					return function (t) {
						return t < 0.5
							? (1 - e(1 - 2 * t)) / 2
							: 0.5 + e(2 * (t - 0.5)) / 2;
					};
				},
				mA = function e(t, n, r) {
					var i = n >= 1 ? n : 1,
						o = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
						a = (o / ng) * (Math.asin(1 / i) || 0),
						s = function (e) {
							return 1 === e
								? 1
								: i * Math.pow(2, -10 * e) * sg((e - a) * o) +
										1;
						},
						l =
							'out' === t
								? s
								: 'in' === t
									? function (e) {
											return 1 - s(1 - e);
										}
									: pA(s);
					return (
						(o = ng / o),
						(l.config = function (n, r) {
							return e(t, n, r);
						}),
						l
					);
				},
				gA = function e(t, n) {
					void 0 === n && (n = 1.70158);
					var r = function (e) {
							return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
						},
						i =
							'out' === t
								? r
								: 'in' === t
									? function (e) {
											return 1 - r(1 - e);
										}
									: pA(r);
					return (
						(i.config = function (n) {
							return e(t, n);
						}),
						i
					);
				};
			Gg('Linear,Quad,Cubic,Quart,Quint,Strong', function (e, t) {
				var n = t < 5 ? t + 1 : t;
				hA(
					e + ',Power' + (n - 1),
					t
						? function (e) {
								return Math.pow(e, n);
							}
						: function (e) {
								return e;
							},
					function (e) {
						return 1 - Math.pow(1 - e, n);
					},
					function (e) {
						return e < 0.5
							? Math.pow(2 * e, n) / 2
							: 1 - Math.pow(2 * (1 - e), n) / 2;
					},
				);
			}),
				(aA.Linear.easeNone = aA.none = aA.Linear.easeIn),
				hA('Elastic', mA('in'), mA('out'), mA()),
				(function (e, t) {
					var n = 1 / t,
						r = function (r) {
							return r < n
								? e * r * r
								: r < 0.7272727272727273
									? e * Math.pow(r - 1.5 / t, 2) + 0.75
									: r < 0.9090909090909092
										? e * (r -= 2.25 / t) * r + 0.9375
										: e * Math.pow(r - 2.625 / t, 2) +
											0.984375;
						};
					hA(
						'Bounce',
						function (e) {
							return 1 - r(1 - e);
						},
						r,
					);
				})(7.5625, 2.75),
				hA('Expo', function (e) {
					return e ? Math.pow(2, 10 * (e - 1)) : 0;
				}),
				hA('Circ', function (e) {
					return -(og(1 - e * e) - 1);
				}),
				hA('Sine', function (e) {
					return 1 === e ? 1 : 1 - ag(e * rg);
				}),
				hA('Back', gA('in'), gA('out'), gA()),
				(aA.SteppedEase =
					aA.steps =
					kg.SteppedEase =
						{
							config: function (e, t) {
								void 0 === e && (e = 1);
								var n = 1 / e,
									r = e + (t ? 0 : 1),
									i = t ? 1 : 0;
								return function (e) {
									return (
										(((r * Pv(0, 0.99999999, e)) | 0) + i) *
										n
									);
								};
							},
						}),
				($m.ease = aA['quad.out']),
				Gg(
					'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
					function (e) {
						return (Ug += e + ',' + e + 'Params,');
					},
				);
			var vA = function (e, t) {
					(this.id = ig++),
						(e._gsap = this),
						(this.target = e),
						(this.harness = t),
						(this.get = t ? t.get : Hg),
						(this.set = t ? t.getSetter : LA);
				},
				AA = (function () {
					function e(e) {
						(this.vars = e),
							(this._delay = +e.delay || 0),
							(this._repeat =
								e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
								((this._rDelay = e.repeatDelay || 0),
								(this._yoyo = !!e.yoyo || !!e.yoyoEase)),
							(this._ts = 1),
							Ev(this, +e.duration, 1, 1),
							(this.data = e.data),
							Ym && ((this._ctx = Ym), Ym.data.push(this)),
							Km || iA.wake();
					}
					var t = e.prototype;
					return (
						(t.delay = function (e) {
							return e || 0 === e
								? (this.parent &&
										this.parent.smoothChildTiming &&
										this.startTime(
											this._start + e - this._delay,
										),
									(this._delay = e),
									this)
								: this._delay;
						}),
						(t.duration = function (e) {
							return arguments.length
								? this.totalDuration(
										this._repeat > 0
											? e +
													(e + this._rDelay) *
														this._repeat
											: e,
									)
								: this.totalDuration() && this._dur;
						}),
						(t.totalDuration = function (e) {
							return arguments.length
								? ((this._dirty = 0),
									Ev(
										this,
										this._repeat < 0
											? e
											: (e -
													this._repeat *
														this._rDelay) /
													(this._repeat + 1),
									))
								: this._tDur;
						}),
						(t.totalTime = function (e, t) {
							if ((oA(), !arguments.length)) return this._tTime;
							var n = this._dp;
							if (n && n.smoothChildTiming && this._ts) {
								for (
									gv(this, e),
										!n._dp || n.parent || vv(n, this);
									n && n.parent;

								)
									n.parent._time !==
										n._start +
											(n._ts >= 0
												? n._tTime / n._ts
												: (n.totalDuration() -
														n._tTime) /
													-n._ts) &&
										n.totalTime(n._tTime, !0),
										(n = n.parent);
								!this.parent &&
									this._dp.autoRemoveChildren &&
									((this._ts > 0 && e < this._tDur) ||
										(this._ts < 0 && e > 0) ||
										(!this._tDur && !e)) &&
									Av(
										this._dp,
										this,
										this._start - this._delay,
									);
							}
							return (
								(this._tTime !== e ||
									(!this._dur && !t) ||
									(this._initted &&
										Math.abs(this._zTime) === tg) ||
									(!e &&
										!this._initted &&
										(this.add || this._ptLookup))) &&
									(this._ts || (this._pTime = e),
									Zg(this, e, t)),
								this
							);
						}),
						(t.time = function (e, t) {
							return arguments.length
								? this.totalTime(
										Math.min(
											this.totalDuration(),
											e + fv(this),
										) %
											(this._dur + this._rDelay) ||
											(e ? this._dur : 0),
										t,
									)
								: this._time;
						}),
						(t.totalProgress = function (e, t) {
							return arguments.length
								? this.totalTime(this.totalDuration() * e, t)
								: this.totalDuration()
									? Math.min(1, this._tTime / this._tDur)
									: this.ratio;
						}),
						(t.progress = function (e, t) {
							return arguments.length
								? this.totalTime(
										this.duration() *
											(!this._yoyo || 1 & this.iteration()
												? e
												: 1 - e) +
											fv(this),
										t,
									)
								: this.duration()
									? Math.min(1, this._time / this._dur)
									: this.ratio;
						}),
						(t.iteration = function (e, t) {
							var n = this.duration() + this._rDelay;
							return arguments.length
								? this.totalTime(this._time + (e - 1) * n, t)
								: this._repeat
									? hv(this._tTime, n) + 1
									: 1;
						}),
						(t.timeScale = function (e) {
							if (!arguments.length)
								return -1e-8 === this._rts ? 0 : this._rts;
							if (this._rts === e) return this;
							var t =
								this.parent && this._ts
									? pv(this.parent._time, this)
									: this._tTime;
							return (
								(this._rts = +e || 0),
								(this._ts =
									this._ps || -1e-8 === e ? 0 : this._rts),
								this.totalTime(
									Pv(-Math.abs(this._delay), this._tDur, t),
									!0,
								),
								mv(this),
								(function (e) {
									for (var t = e.parent; t && t.parent; )
										(t._dirty = 1),
											t.totalDuration(),
											(t = t.parent);
									return e;
								})(this)
							);
						}),
						(t.paused = function (e) {
							return arguments.length
								? (this._ps !== e &&
										((this._ps = e),
										e
											? ((this._pTime =
													this._tTime ||
													Math.max(
														-this._delay,
														this.rawTime(),
													)),
												(this._ts = this._act = 0))
											: (oA(),
												(this._ts = this._rts),
												this.totalTime(
													this.parent &&
														!this.parent
															.smoothChildTiming
														? this.rawTime()
														: this._tTime ||
																this._pTime,
													1 === this.progress() &&
														Math.abs(
															this._zTime,
														) !== tg &&
														(this._tTime -= tg),
												))),
									this)
								: this._ps;
						}),
						(t.startTime = function (e) {
							if (arguments.length) {
								this._start = e;
								var t = this.parent || this._dp;
								return (
									t &&
										(t._sort || !this.parent) &&
										Av(t, this, e - this._delay),
									this
								);
							}
							return this._start;
						}),
						(t.endTime = function (e) {
							return (
								this._start +
								(hg(e)
									? this.totalDuration()
									: this.duration()) /
									Math.abs(this._ts || 1)
							);
						}),
						(t.rawTime = function (e) {
							var t = this.parent || this._dp;
							return t
								? e &&
									(!this._ts ||
										(this._repeat &&
											this._time &&
											this.totalProgress() < 1))
									? this._tTime % (this._dur + this._rDelay)
									: this._ts
										? pv(t.rawTime(e), this)
										: this._tTime
								: this._tTime;
						}),
						(t.revert = function (e) {
							void 0 === e && (e = Bg);
							var t = Um;
							return (
								(Um = e),
								(this._initted || this._startAt) &&
									(this.timeline && this.timeline.revert(e),
									this.totalTime(-0.01, e.suppressEvents)),
								'nested' !== this.data &&
									!1 !== e.kill &&
									this.kill(),
								(Um = t),
								this
							);
						}),
						(t.globalTime = function (e) {
							for (
								var t = this,
									n = arguments.length ? e : t.rawTime();
								t;

							)
								(n = t._start + n / (t._ts || 1)), (t = t._dp);
							return !this.parent && this._sat
								? this._sat.vars.immediateRender
									? -1 / 0
									: this._sat.globalTime(e)
								: n;
						}),
						(t.repeat = function (e) {
							return arguments.length
								? ((this._repeat = e === 1 / 0 ? -2 : e),
									Cv(this))
								: -2 === this._repeat
									? 1 / 0
									: this._repeat;
						}),
						(t.repeatDelay = function (e) {
							if (arguments.length) {
								var t = this._time;
								return (
									(this._rDelay = e),
									Cv(this),
									t ? this.time(t) : this
								);
							}
							return this._rDelay;
						}),
						(t.yoyo = function (e) {
							return arguments.length
								? ((this._yoyo = e), this)
								: this._yoyo;
						}),
						(t.seek = function (e, t) {
							return this.totalTime(Sv(this, e), hg(t));
						}),
						(t.restart = function (e, t) {
							return this.play().totalTime(
								e ? -this._delay : 0,
								hg(t),
							);
						}),
						(t.play = function (e, t) {
							return (
								null != e && this.seek(e, t),
								this.reversed(!1).paused(!1)
							);
						}),
						(t.reverse = function (e, t) {
							return (
								null != e &&
									this.seek(e || this.totalDuration(), t),
								this.reversed(!0).paused(!1)
							);
						}),
						(t.pause = function (e, t) {
							return (
								null != e && this.seek(e, t), this.paused(!0)
							);
						}),
						(t.resume = function () {
							return this.paused(!1);
						}),
						(t.reversed = function (e) {
							return arguments.length
								? (!!e !== this.reversed() &&
										this.timeScale(
											-this._rts || (e ? -1e-8 : 0),
										),
									this)
								: this._rts < 0;
						}),
						(t.invalidate = function () {
							return (
								(this._initted = this._act = 0),
								(this._zTime = -1e-8),
								this
							);
						}),
						(t.isActive = function () {
							var e,
								t = this.parent || this._dp,
								n = this._start;
							return !(
								t &&
								!(
									this._ts &&
									this._initted &&
									t.isActive() &&
									(e = t.rawTime(!0)) >= n &&
									e < this.endTime(!0) - tg
								)
							);
						}),
						(t.eventCallback = function (e, t, n) {
							var r = this.vars;
							return arguments.length > 1
								? (t
										? ((r[e] = t),
											n && (r[e + 'Params'] = n),
											'onUpdate' === e &&
												(this._onUpdate = t))
										: delete r[e],
									this)
								: r[e];
						}),
						(t.then = function (e) {
							var t = this;
							return new Promise(function (n) {
								var r = ug(e) ? e : ev,
									i = function () {
										var e = t.then;
										(t.then = null),
											ug(r) &&
												(r = r(t)) &&
												(r.then || r === t) &&
												(t.then = e),
											n(r),
											(t.then = e);
									};
								(t._initted &&
									1 === t.totalProgress() &&
									t._ts >= 0) ||
								(!t._tTime && t._ts < 0)
									? i()
									: (t._prom = i);
							});
						}),
						(t.kill = function () {
							Gv(this);
						}),
						e
					);
				})();
			tv(AA.prototype, {
				_time: 0,
				_start: 0,
				_end: 0,
				_tTime: 0,
				_tDur: 0,
				_dirty: 0,
				_repeat: 0,
				_yoyo: !1,
				parent: null,
				_initted: !1,
				_rDelay: 0,
				_ts: 1,
				_dp: 0,
				ratio: 0,
				_zTime: -1e-8,
				_prom: 0,
				_ps: !1,
				_rts: 1,
			});
			var yA = (function (e) {
				function t(t, n) {
					var r;
					return (
						void 0 === t && (t = {}),
						((r = e.call(this, t) || this).labels = {}),
						(r.smoothChildTiming = !!t.smoothChildTiming),
						(r.autoRemoveChildren = !!t.autoRemoveChildren),
						(r._sort = hg(t.sortChildren)),
						Qm && Av(t.parent || Qm, Nm(r), n),
						t.reversed && r.reverse(),
						t.paused && r.paused(!0),
						t.scrollTrigger && yv(Nm(r), t.scrollTrigger),
						r
					);
				}
				zm(t, e);
				var n = t.prototype;
				return (
					(n.to = function (e, t, n) {
						return Tv(0, arguments, this), this;
					}),
					(n.from = function (e, t, n) {
						return Tv(1, arguments, this), this;
					}),
					(n.fromTo = function (e, t, n, r) {
						return Tv(2, arguments, this), this;
					}),
					(n.set = function (e, t, n) {
						return (
							(t.duration = 0),
							(t.parent = this),
							ov(t).repeatDelay || (t.repeat = 0),
							(t.immediateRender = !!t.immediateRender),
							new MA(e, t, Sv(this, n), 1),
							this
						);
					}),
					(n.call = function (e, t, n) {
						return Av(this, MA.delayedCall(0, e, t), n);
					}),
					(n.staggerTo = function (e, t, n, r, i, o, a) {
						return (
							(n.duration = t),
							(n.stagger = n.stagger || r),
							(n.onComplete = o),
							(n.onCompleteParams = a),
							(n.parent = this),
							new MA(e, n, Sv(this, i)),
							this
						);
					}),
					(n.staggerFrom = function (e, t, n, r, i, o, a) {
						return (
							(n.runBackwards = 1),
							(ov(n).immediateRender = hg(n.immediateRender)),
							this.staggerTo(e, t, n, r, i, o, a)
						);
					}),
					(n.staggerFromTo = function (e, t, n, r, i, o, a, s) {
						return (
							(r.startAt = n),
							(ov(r).immediateRender = hg(r.immediateRender)),
							this.staggerTo(e, t, r, i, o, a, s)
						);
					}),
					(n.render = function (e, t, n) {
						var r,
							i,
							o,
							a,
							s,
							l,
							u,
							c,
							d,
							f,
							h,
							p,
							m = this._time,
							g = this._dirty ? this.totalDuration() : this._tDur,
							v = this._dur,
							A = e <= 0 ? 0 : Xg(e),
							y =
								this._zTime < 0 !== e < 0 &&
								(this._initted || !v);
						if (
							(this !== Qm && A > g && e >= 0 && (A = g),
							A !== this._tTime || n || y)
						) {
							if (
								(m !== this._time &&
									v &&
									((A += this._time - m),
									(e += this._time - m)),
								(r = A),
								(d = this._start),
								(l = !(c = this._ts)),
								y &&
									(v || (m = this._zTime),
									(e || !t) && (this._zTime = e)),
								this._repeat)
							) {
								if (
									((h = this._yoyo),
									(s = v + this._rDelay),
									this._repeat < -1 && e < 0)
								)
									return this.totalTime(100 * s + e, t, n);
								if (
									((r = Xg(A % s)),
									A === g
										? ((a = this._repeat), (r = v))
										: ((a = ~~(A / s)) &&
												a === A / s &&
												((r = v), a--),
											r > v && (r = v)),
									(f = hv(this._tTime, s)),
									!m &&
										this._tTime &&
										f !== a &&
										this._tTime - f * s - this._dur <= 0 &&
										(f = a),
									h && 1 & a && ((r = v - r), (p = 1)),
									a !== f && !this._lock)
								) {
									var w = h && 1 & f,
										b = w === (h && 1 & a);
									if (
										(a < f && (w = !w),
										(m = w ? 0 : A % v ? v : A),
										(this._lock = 1),
										(this.render(
											m || (p ? 0 : Xg(a * s)),
											t,
											!v,
										)._lock = 0),
										(this._tTime = A),
										!t &&
											this.parent &&
											Hv(this, 'onRepeat'),
										this.vars.repeatRefresh &&
											!p &&
											(this.invalidate()._lock = 1),
										(m && m !== this._time) ||
											l !== !this._ts ||
											(this.vars.onRepeat &&
												!this.parent &&
												!this._act))
									)
										return this;
									if (
										((v = this._dur),
										(g = this._tDur),
										b &&
											((this._lock = 2),
											(m = w ? v : -1e-4),
											this.render(m, !0),
											this.vars.repeatRefresh &&
												!p &&
												this.invalidate()),
										(this._lock = 0),
										!this._ts && !l)
									)
										return this;
									dA(this, p);
								}
							}
							if (
								(this._hasPause &&
									!this._forcing &&
									this._lock < 2 &&
									((u = (function (e, t, n) {
										var r;
										if (n > t)
											for (
												r = e._first;
												r && r._start <= n;

											) {
												if (
													'isPause' === r.data &&
													r._start > t
												)
													return r;
												r = r._next;
											}
										else
											for (
												r = e._last;
												r && r._start >= n;

											) {
												if (
													'isPause' === r.data &&
													r._start < t
												)
													return r;
												r = r._prev;
											}
									})(this, Xg(m), Xg(r))),
									u && (A -= r - (r = u._start))),
								(this._tTime = A),
								(this._time = r),
								(this._act = !c),
								this._initted ||
									((this._onUpdate = this.vars.onUpdate),
									(this._initted = 1),
									(this._zTime = e),
									(m = 0)),
								!m &&
									r &&
									!t &&
									!a &&
									(Hv(this, 'onStart'), this._tTime !== A))
							)
								return this;
							if (r >= m && e >= 0)
								for (i = this._first; i; ) {
									if (
										((o = i._next),
										(i._act || r >= i._start) &&
											i._ts &&
											u !== i)
									) {
										if (i.parent !== this)
											return this.render(e, t, n);
										if (
											(i.render(
												i._ts > 0
													? (r - i._start) * i._ts
													: (i._dirty
															? i.totalDuration()
															: i._tDur) +
															(r - i._start) *
																i._ts,
												t,
												n,
											),
											r !== this._time ||
												(!this._ts && !l))
										) {
											(u = 0),
												o && (A += this._zTime = -1e-8);
											break;
										}
									}
									i = o;
								}
							else {
								i = this._last;
								for (var x = e < 0 ? e : r; i; ) {
									if (
										((o = i._prev),
										(i._act || x <= i._end) &&
											i._ts &&
											u !== i)
									) {
										if (i.parent !== this)
											return this.render(e, t, n);
										if (
											(i.render(
												i._ts > 0
													? (x - i._start) * i._ts
													: (i._dirty
															? i.totalDuration()
															: i._tDur) +
															(x - i._start) *
																i._ts,
												t,
												n ||
													(Um &&
														(i._initted ||
															i._startAt)),
											),
											r !== this._time ||
												(!this._ts && !l))
										) {
											(u = 0),
												o &&
													(A += this._zTime =
														x ? -1e-8 : tg);
											break;
										}
									}
									i = o;
								}
							}
							if (
								u &&
								!t &&
								(this.pause(),
								(u.render(r >= m ? 0 : -1e-8)._zTime =
									r >= m ? 1 : -1),
								this._ts)
							)
								return (
									(this._start = d),
									mv(this),
									this.render(e, t, n)
								);
							this._onUpdate && !t && Hv(this, 'onUpdate', !0),
								((A === g &&
									this._tTime >= this.totalDuration()) ||
									(!A && m)) &&
									((d !== this._start &&
										Math.abs(c) === Math.abs(this._ts)) ||
										this._lock ||
										((e || !v) &&
											((A === g && this._ts > 0) ||
												(!A && this._ts < 0)) &&
											lv(this, 1),
										t ||
											(e < 0 && !m) ||
											(!A && !m && g) ||
											(Hv(
												this,
												A === g && e >= 0
													? 'onComplete'
													: 'onReverseComplete',
												!0,
											),
											this._prom &&
												!(
													A < g &&
													this.timeScale() > 0
												) &&
												this._prom())));
						}
						return this;
					}),
					(n.add = function (e, t) {
						var n = this;
						if (
							(cg(t) || (t = Sv(this, t, e)), !(e instanceof AA))
						) {
							if (vg(e))
								return (
									e.forEach(function (e) {
										return n.add(e, t);
									}),
									this
								);
							if (lg(e)) return this.addLabel(e, t);
							if (!ug(e)) return this;
							e = MA.delayedCall(0, e);
						}
						return this !== e ? Av(this, e, t) : this;
					}),
					(n.getChildren = function (e, t, n, r) {
						void 0 === e && (e = !0),
							void 0 === t && (t = !0),
							void 0 === n && (n = !0),
							void 0 === r && (r = -eg);
						for (var i = [], o = this._first; o; )
							o._start >= r &&
								(o instanceof MA
									? t && i.push(o)
									: (n && i.push(o),
										e &&
											i.push.apply(
												i,
												o.getChildren(!0, t, n),
											))),
								(o = o._next);
						return i;
					}),
					(n.getById = function (e) {
						for (
							var t = this.getChildren(1, 1, 1), n = t.length;
							n--;

						)
							if (t[n].vars.id === e) return t[n];
					}),
					(n.remove = function (e) {
						return lg(e)
							? this.removeLabel(e)
							: ug(e)
								? this.killTweensOf(e)
								: (sv(this, e),
									e === this._recent &&
										(this._recent = this._last),
									uv(this));
					}),
					(n.totalTime = function (t, n) {
						return arguments.length
							? ((this._forcing = 1),
								!this._dp &&
									this._ts &&
									(this._start = Xg(
										iA.time -
											(this._ts > 0
												? t / this._ts
												: (this.totalDuration() - t) /
													-this._ts),
									)),
								e.prototype.totalTime.call(this, t, n),
								(this._forcing = 0),
								this)
							: this._tTime;
					}),
					(n.addLabel = function (e, t) {
						return (this.labels[e] = Sv(this, t)), this;
					}),
					(n.removeLabel = function (e) {
						return delete this.labels[e], this;
					}),
					(n.addPause = function (e, t, n) {
						var r = MA.delayedCall(0, t || Dg, n);
						return (
							(r.data = 'isPause'),
							(this._hasPause = 1),
							Av(this, r, Sv(this, e))
						);
					}),
					(n.removePause = function (e) {
						var t = this._first;
						for (e = Sv(this, e); t; )
							t._start === e && 'isPause' === t.data && lv(t),
								(t = t._next);
					}),
					(n.killTweensOf = function (e, t, n) {
						for (
							var r = this.getTweensOf(e, n), i = r.length;
							i--;

						)
							wA !== r[i] && r[i].kill(e, t);
						return this;
					}),
					(n.getTweensOf = function (e, t) {
						for (
							var n,
								r = [],
								i = Bv(e),
								o = this._first,
								a = cg(t);
							o;

						)
							o instanceof MA
								? Jg(o._targets, i) &&
									(a
										? (!wA || (o._initted && o._ts)) &&
											o.globalTime(0) <= t &&
											o.globalTime(o.totalDuration()) > t
										: !t || o.isActive()) &&
									r.push(o)
								: (n = o.getTweensOf(i, t)).length &&
									r.push.apply(r, n),
								(o = o._next);
						return r;
					}),
					(n.tweenTo = function (e, t) {
						t = t || {};
						var n,
							r = this,
							i = Sv(r, e),
							o = t,
							a = o.startAt,
							s = o.onStart,
							l = o.onStartParams,
							u = o.immediateRender,
							c = MA.to(
								r,
								tv(
									{
										ease: t.ease || 'none',
										lazy: !1,
										immediateRender: !1,
										time: i,
										overwrite: 'auto',
										duration:
											t.duration ||
											Math.abs(
												(i -
													(a && 'time' in a
														? a.time
														: r._time)) /
													r.timeScale(),
											) ||
											tg,
										onStart: function () {
											if ((r.pause(), !n)) {
												var e =
													t.duration ||
													Math.abs(
														(i -
															(a && 'time' in a
																? a.time
																: r._time)) /
															r.timeScale(),
													);
												c._dur !== e &&
													Ev(c, e, 0, 1).render(
														c._time,
														!0,
														!0,
													),
													(n = 1);
											}
											s && s.apply(c, l || []);
										},
									},
									t,
								),
							);
						return u ? c.render(0) : c;
					}),
					(n.tweenFromTo = function (e, t, n) {
						return this.tweenTo(
							t,
							tv({ startAt: { time: Sv(this, e) } }, n),
						);
					}),
					(n.recent = function () {
						return this._recent;
					}),
					(n.nextLabel = function (e) {
						return (
							void 0 === e && (e = this._time),
							Qv(this, Sv(this, e))
						);
					}),
					(n.previousLabel = function (e) {
						return (
							void 0 === e && (e = this._time),
							Qv(this, Sv(this, e), 1)
						);
					}),
					(n.currentLabel = function (e) {
						return arguments.length
							? this.seek(e, !0)
							: this.previousLabel(this._time + tg);
					}),
					(n.shiftChildren = function (e, t, n) {
						void 0 === n && (n = 0);
						for (var r, i = this._first, o = this.labels; i; )
							i._start >= n && ((i._start += e), (i._end += e)),
								(i = i._next);
						if (t) for (r in o) o[r] >= n && (o[r] += e);
						return uv(this);
					}),
					(n.invalidate = function (t) {
						var n = this._first;
						for (this._lock = 0; n; )
							n.invalidate(t), (n = n._next);
						return e.prototype.invalidate.call(this, t);
					}),
					(n.clear = function (e) {
						void 0 === e && (e = !0);
						for (var t, n = this._first; n; )
							(t = n._next), this.remove(n), (n = t);
						return (
							this._dp &&
								(this._time = this._tTime = this._pTime = 0),
							e && (this.labels = {}),
							uv(this)
						);
					}),
					(n.totalDuration = function (e) {
						var t,
							n,
							r,
							i = 0,
							o = this,
							a = o._last,
							s = eg;
						if (arguments.length)
							return o.timeScale(
								(o._repeat < 0
									? o.duration()
									: o.totalDuration()) /
									(o.reversed() ? -e : e),
							);
						if (o._dirty) {
							for (r = o.parent; a; )
								(t = a._prev),
									a._dirty && a.totalDuration(),
									(n = a._start) > s &&
									o._sort &&
									a._ts &&
									!o._lock
										? ((o._lock = 1),
											(Av(o, a, n - a._delay, 1)._lock =
												0))
										: (s = n),
									n < 0 &&
										a._ts &&
										((i -= n),
										((!r && !o._dp) ||
											(r && r.smoothChildTiming)) &&
											((o._start += n / o._ts),
											(o._time -= n),
											(o._tTime -= n)),
										o.shiftChildren(-n, !1, -Infinity),
										(s = 0)),
									a._end > i && a._ts && (i = a._end),
									(a = t);
							Ev(o, o === Qm && o._time > i ? o._time : i, 1, 1),
								(o._dirty = 0);
						}
						return o._tDur;
					}),
					(t.updateRoot = function (e) {
						if (
							(Qm._ts && (Zg(Qm, pv(e, Qm)), (qm = iA.frame)),
							iA.frame >= zg)
						) {
							zg += Zm.autoSleep || 120;
							var t = Qm._first;
							if (
								(!t || !t._ts) &&
								Zm.autoSleep &&
								iA._listeners.length < 2
							) {
								for (; t && !t._ts; ) t = t._next;
								t || iA.sleep();
							}
						}
					}),
					t
				);
			})(AA);
			tv(yA.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
			var wA,
				bA,
				xA = function (e, t, n, r, i, o, a) {
					var s,
						l,
						u,
						c,
						d,
						f,
						h,
						p,
						m = new QA(this._pt, e, t, 0, 1, jA, null, i),
						g = 0,
						v = 0;
					for (
						m.b = n,
							m.e = r,
							n += '',
							(h = ~(r += '').indexOf('random(')) && (r = Uv(r)),
							o &&
								(o((p = [n, r]), e, t), (n = p[0]), (r = p[1])),
							l = n.match(bg) || [];
						(s = bg.exec(r));

					)
						(c = s[0]),
							(d = r.substring(g, s.index)),
							u
								? (u = (u + 1) % 5)
								: 'rgba(' === d.substr(-5) && (u = 1),
							c !== l[v++] &&
								((f = parseFloat(l[v - 1]) || 0),
								(m._pt = {
									_next: m._pt,
									p: d || 1 === v ? d : ',',
									s: f,
									c:
										'=' === c.charAt(1)
											? qg(f, c) - f
											: parseFloat(c) - f,
									m: u && u < 4 ? Math.round : 0,
								}),
								(g = bg.lastIndex));
					return (
						(m.c = g < r.length ? r.substring(g, r.length) : ''),
						(m.fp = a),
						(xg.test(r) || h) && (m.e = 0),
						(this._pt = m),
						m
					);
				},
				EA = function (e, t, n, r, i, o, a, s, l, u) {
					ug(r) && (r = r(i || 0, e, o));
					var c,
						d = e[t],
						f =
							'get' !== n
								? n
								: ug(d)
									? l
										? e[
												t.indexOf('set') ||
												!ug(e['get' + t.substr(3)])
													? t
													: 'get' + t.substr(3)
											](l)
										: e[t]()
									: d,
						h = ug(d) ? (l ? RA : OA) : DA;
					if (
						(lg(r) &&
							(~r.indexOf('random(') && (r = Uv(r)),
							'=' === r.charAt(1) &&
								((c = qg(f, r) + (Mv(f) || 0)) || 0 === c) &&
								(r = c)),
						!u || f !== r || bA)
					)
						return isNaN(f * r) || '' === r
							? (!d && !(t in e) && _g(t, r),
								xA.call(
									this,
									e,
									t,
									f,
									r,
									h,
									s || Zm.stringFilter,
									l,
								))
							: ((c = new QA(
									this._pt,
									e,
									t,
									+f || 0,
									r - (f || 0),
									'boolean' === typeof d ? FA : IA,
									0,
									h,
								)),
								l && (c.fp = l),
								a && c.modifier(a, this, e),
								(this._pt = c));
				},
				CA = function (e, t, n, r, i, o) {
					var a, s, l, u;
					if (
						jg[e] &&
						!1 !==
							(a = new jg[e]()).init(
								i,
								a.rawVars
									? t[e]
									: (function (e, t, n, r, i) {
											if (
												(ug(e) &&
													(e = TA(e, i, t, n, r)),
												!fg(e) ||
													(e.style && e.nodeType) ||
													vg(e) ||
													gg(e))
											)
												return lg(e)
													? TA(e, i, t, n, r)
													: e;
											var o,
												a = {};
											for (o in e)
												a[o] = TA(e[o], i, t, n, r);
											return a;
										})(t[e], r, i, o, n),
								n,
								r,
								o,
							) &&
						((n._pt = s =
							new QA(
								n._pt,
								i,
								e,
								0,
								1,
								a.render,
								a,
								0,
								a.priority,
							)),
						n !== Jm)
					)
						for (
							l = n._ptLookup[n._targets.indexOf(i)],
								u = a._props.length;
							u--;

						)
							l[a._props[u]] = s;
					return a;
				},
				kA = function e(t, n, r) {
					var i,
						o,
						a,
						s,
						l,
						u,
						c,
						d,
						f,
						h,
						p,
						m,
						g,
						v = t.vars,
						A = v.ease,
						y = v.startAt,
						w = v.immediateRender,
						b = v.lazy,
						x = v.onUpdate,
						E = v.onUpdateParams,
						C = v.callbackScope,
						k = v.runBackwards,
						S = v.yoyoEase,
						T = v.keyframes,
						_ = v.autoRevert,
						P = t._dur,
						M = t._startAt,
						D = t._targets,
						O = t.parent,
						R = O && 'nested' === O.data ? O.vars.targets : D,
						B = 'auto' === t._overwrite && !Vm,
						L = t.timeline;
					if (
						(L && (!T || !A) && (A = 'none'),
						(t._ease = fA(A, $m.ease)),
						(t._yEase = S ? cA(fA(!0 === S ? A : S, $m.ease)) : 0),
						S &&
							t._yoyo &&
							!t._repeat &&
							((S = t._yEase),
							(t._yEase = t._ease),
							(t._ease = S)),
						(t._from = !L && !!v.runBackwards),
						!L || (T && !v.stagger))
					) {
						if (
							((m =
								(d = D[0] ? Qg(D[0]).harness : 0) && v[d.prop]),
							(i = iv(v, Lg)),
							M &&
								(M._zTime < 0 && M.progress(1),
								n < 0 && k && w && !_
									? M.render(-1, !0)
									: M.revert(k && P ? Rg : Og),
								(M._lazy = 0)),
							y)
						) {
							if (
								(lv(
									(t._startAt = MA.set(
										D,
										tv(
											{
												data: 'isStart',
												overwrite: !1,
												parent: O,
												immediateRender: !0,
												lazy: !M && hg(b),
												startAt: null,
												delay: 0,
												onUpdate: x,
												onUpdateParams: E,
												callbackScope: C,
												stagger: 0,
											},
											y,
										),
									)),
								),
								(t._startAt._dp = 0),
								(t._startAt._sat = t),
								n < 0 &&
									(Um || (!w && !_)) &&
									t._startAt.revert(Rg),
								w && P && n <= 0 && r <= 0)
							)
								return void (n && (t._zTime = n));
						} else if (k && P && !M)
							if (
								(n && (w = !1),
								(a = tv(
									{
										overwrite: !1,
										data: 'isFromStart',
										lazy: w && !M && hg(b),
										immediateRender: w,
										stagger: 0,
										parent: O,
									},
									i,
								)),
								m && (a[d.prop] = m),
								lv((t._startAt = MA.set(D, a))),
								(t._startAt._dp = 0),
								(t._startAt._sat = t),
								n < 0 &&
									(Um
										? t._startAt.revert(Rg)
										: t._startAt.render(-1, !0)),
								(t._zTime = n),
								w)
							) {
								if (!n) return;
							} else e(t._startAt, tg, tg);
						for (
							t._pt = t._ptCache = 0,
								b = (P && hg(b)) || (b && !P),
								o = 0;
							o < D.length;
							o++
						) {
							if (
								((c = (l = D[o])._gsap || Yg(D)[o]._gsap),
								(t._ptLookup[o] = h = {}),
								Fg[c.id] && Ig.length && Kg(),
								(p = R === D ? o : R.indexOf(l)),
								d &&
									!1 !==
										(f = new d()).init(
											l,
											m || i,
											t,
											p,
											R,
										) &&
									((t._pt = s =
										new QA(
											t._pt,
											l,
											f.name,
											0,
											1,
											f.render,
											f,
											0,
											f.priority,
										)),
									f._props.forEach(function (e) {
										h[e] = s;
									}),
									f.priority && (u = 1)),
								!d || m)
							)
								for (a in i)
									jg[a] && (f = CA(a, i, t, p, l, R))
										? f.priority && (u = 1)
										: (h[a] = s =
												EA.call(
													t,
													l,
													a,
													'get',
													i[a],
													p,
													R,
													0,
													v.stringFilter,
												));
							t._op && t._op[o] && t.kill(l, t._op[o]),
								B &&
									t._pt &&
									((wA = t),
									Qm.killTweensOf(l, h, t.globalTime(n)),
									(g = !t.parent),
									(wA = 0)),
								t._pt && b && (Fg[c.id] = 1);
						}
						u && YA(t), t._onInit && t._onInit(t);
					}
					(t._onUpdate = x),
						(t._initted = (!t._op || t._pt) && !g),
						T && n <= 0 && L.render(eg, !0, !0);
				},
				SA = function (e, t, n, r) {
					var i,
						o,
						a = t.ease || r || 'power1.inOut';
					if (vg(t))
						(o = n[e] || (n[e] = [])),
							t.forEach(function (e, n) {
								return o.push({
									t: (n / (t.length - 1)) * 100,
									v: e,
									e: a,
								});
							});
					else
						for (i in t)
							(o = n[i] || (n[i] = [])),
								'ease' === i ||
									o.push({ t: parseFloat(e), v: t[i], e: a });
				},
				TA = function (e, t, n, r, i) {
					return ug(e)
						? e.call(t, n, r, i)
						: lg(e) && ~e.indexOf('random(')
							? Uv(e)
							: e;
				},
				_A =
					Ug +
					'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
				PA = {};
			Gg(
				_A + ',id,stagger,delay,duration,paused,scrollTrigger',
				function (e) {
					return (PA[e] = 1);
				},
			);
			var MA = (function (e) {
				function t(t, n, r, i) {
					var o;
					'number' === typeof n &&
						((r.duration = n), (n = r), (r = null));
					var a,
						s,
						l,
						u,
						c,
						d,
						f,
						h,
						p = (o = e.call(this, i ? n : ov(n)) || this).vars,
						m = p.duration,
						g = p.delay,
						v = p.immediateRender,
						A = p.stagger,
						y = p.overwrite,
						w = p.keyframes,
						b = p.defaults,
						x = p.scrollTrigger,
						E = p.yoyoEase,
						C = n.parent || Qm,
						k = (vg(t) || gg(t) ? cg(t[0]) : 'length' in n)
							? [t]
							: Bv(t);
					if (
						((o._targets = k.length
							? Yg(k)
							: Pg(
									'GSAP target ' +
										t +
										' not found. https://greensock.com',
									!Zm.nullTargetWarn,
								) || []),
						(o._ptLookup = []),
						(o._overwrite = y),
						w || A || mg(m) || mg(g))
					) {
						if (
							((n = o.vars),
							(a = o.timeline =
								new yA({
									data: 'nested',
									defaults: b || {},
									targets:
										C && 'nested' === C.data
											? C.vars.targets
											: k,
								})).kill(),
							(a.parent = a._dp = Nm(o)),
							(a._start = 0),
							A || mg(m) || mg(g))
						) {
							if (((u = k.length), (f = A && Fv(A)), fg(A)))
								for (c in A)
									~_A.indexOf(c) &&
										(h || (h = {}), (h[c] = A[c]));
							for (s = 0; s < u; s++)
								((l = iv(n, PA)).stagger = 0),
									E && (l.yoyoEase = E),
									h && nv(l, h),
									(d = k[s]),
									(l.duration = +TA(m, Nm(o), s, d, k)),
									(l.delay =
										(+TA(g, Nm(o), s, d, k) || 0) -
										o._delay),
									!A &&
										1 === u &&
										l.delay &&
										((o._delay = g = l.delay),
										(o._start += g),
										(l.delay = 0)),
									a.to(d, l, f ? f(s, d, k) : 0),
									(a._ease = aA.none);
							a.duration() ? (m = g = 0) : (o.timeline = 0);
						} else if (w) {
							ov(tv(a.vars.defaults, { ease: 'none' })),
								(a._ease = fA(w.ease || n.ease || 'none'));
							var S,
								T,
								_,
								P = 0;
							if (vg(w))
								w.forEach(function (e) {
									return a.to(k, e, '>');
								}),
									a.duration();
							else {
								for (c in ((l = {}), w))
									'ease' === c ||
										'easeEach' === c ||
										SA(c, w[c], l, w.easeEach);
								for (c in l)
									for (
										S = l[c].sort(function (e, t) {
											return e.t - t.t;
										}),
											P = 0,
											s = 0;
										s < S.length;
										s++
									)
										((_ = {
											ease: (T = S[s]).e,
											duration:
												((T.t - (s ? S[s - 1].t : 0)) /
													100) *
												m,
										})[c] = T.v),
											a.to(k, _, P),
											(P += _.duration);
								a.duration() < m &&
									a.to({}, { duration: m - a.duration() });
							}
						}
						m || o.duration((m = a.duration()));
					} else o.timeline = 0;
					return (
						!0 !== y ||
							Vm ||
							((wA = Nm(o)), Qm.killTweensOf(k), (wA = 0)),
						Av(C, Nm(o), r),
						n.reversed && o.reverse(),
						n.paused && o.paused(!0),
						(v ||
							(!m &&
								!w &&
								o._start === Xg(C._time) &&
								hg(v) &&
								dv(Nm(o)) &&
								'nested' !== C.data)) &&
							((o._tTime = -1e-8),
							o.render(Math.max(0, -g) || 0)),
						x && yv(Nm(o), x),
						o
					);
				}
				zm(t, e);
				var n = t.prototype;
				return (
					(n.render = function (e, t, n) {
						var r,
							i,
							o,
							a,
							s,
							l,
							u,
							c,
							d,
							f = this._time,
							h = this._tDur,
							p = this._dur,
							m = e < 0,
							g = e > h - tg && !m ? h : e < tg ? 0 : e;
						if (p) {
							if (
								g !== this._tTime ||
								!e ||
								n ||
								(!this._initted && this._tTime) ||
								(this._startAt && this._zTime < 0 !== m)
							) {
								if (
									((r = g), (c = this.timeline), this._repeat)
								) {
									if (
										((a = p + this._rDelay),
										this._repeat < -1 && m)
									)
										return this.totalTime(
											100 * a + e,
											t,
											n,
										);
									if (
										((r = Xg(g % a)),
										g === h
											? ((o = this._repeat), (r = p))
											: ((o = ~~(g / a)) &&
													o === g / a &&
													((r = p), o--),
												r > p && (r = p)),
										(l = this._yoyo && 1 & o) &&
											((d = this._yEase), (r = p - r)),
										(s = hv(this._tTime, a)),
										r === f && !n && this._initted)
									)
										return (this._tTime = g), this;
									o !== s &&
										(c && this._yEase && dA(c, l),
										!this.vars.repeatRefresh ||
											l ||
											this._lock ||
											((this._lock = n = 1),
											(this.render(
												Xg(a * o),
												!0,
											).invalidate()._lock = 0)));
								}
								if (!this._initted) {
									if (wv(this, m ? e : r, n, t, g))
										return (this._tTime = 0), this;
									if (f !== this._time) return this;
									if (p !== this._dur)
										return this.render(e, t, n);
								}
								if (
									((this._tTime = g),
									(this._time = r),
									!this._act &&
										this._ts &&
										((this._act = 1), (this._lazy = 0)),
									(this.ratio = u = (d || this._ease)(r / p)),
									this._from && (this.ratio = u = 1 - u),
									r &&
										!f &&
										!t &&
										!o &&
										(Hv(this, 'onStart'),
										this._tTime !== g))
								)
									return this;
								for (i = this._pt; i; )
									i.r(u, i.d), (i = i._next);
								(c &&
									c.render(
										e < 0
											? e
											: !r && l
												? -1e-8
												: c._dur *
													c._ease(r / this._dur),
										t,
										n,
									)) ||
									(this._startAt && (this._zTime = e)),
									this._onUpdate &&
										!t &&
										(m && cv(this, e, 0, n),
										Hv(this, 'onUpdate')),
									this._repeat &&
										o !== s &&
										this.vars.onRepeat &&
										!t &&
										this.parent &&
										Hv(this, 'onRepeat'),
									(g !== this._tDur && g) ||
										this._tTime !== g ||
										(m &&
											!this._onUpdate &&
											cv(this, e, 0, !0),
										(e || !p) &&
											((g === this._tDur &&
												this._ts > 0) ||
												(!g && this._ts < 0)) &&
											lv(this, 1),
										t ||
											(m && !f) ||
											!(g || f || l) ||
											(Hv(
												this,
												g === h
													? 'onComplete'
													: 'onReverseComplete',
												!0,
											),
											this._prom &&
												!(
													g < h &&
													this.timeScale() > 0
												) &&
												this._prom()));
							}
						} else
							!(function (e, t, n, r) {
								var i,
									o,
									a,
									s = e.ratio,
									l =
										t < 0 ||
										(!t &&
											((!e._start &&
												bv(e) &&
												(e._initted || !xv(e))) ||
												((e._ts < 0 || e._dp._ts < 0) &&
													!xv(e))))
											? 0
											: 1,
									u = e._rDelay,
									c = 0;
								if (
									(u &&
										e._repeat &&
										((c = Pv(0, e._tDur, t)),
										(o = hv(c, u)),
										e._yoyo && 1 & o && (l = 1 - l),
										o !== hv(e._tTime, u) &&
											((s = 1 - l),
											e.vars.repeatRefresh &&
												e._initted &&
												e.invalidate())),
									l !== s ||
										Um ||
										r ||
										e._zTime === tg ||
										(!t && e._zTime))
								) {
									if (!e._initted && wv(e, t, r, n, c))
										return;
									for (
										a = e._zTime,
											e._zTime = t || (n ? tg : 0),
											n || (n = t && !a),
											e.ratio = l,
											e._from && (l = 1 - l),
											e._time = 0,
											e._tTime = c,
											i = e._pt;
										i;

									)
										i.r(l, i.d), (i = i._next);
									t < 0 && cv(e, t, 0, !0),
										e._onUpdate && !n && Hv(e, 'onUpdate'),
										c &&
											e._repeat &&
											!n &&
											e.parent &&
											Hv(e, 'onRepeat'),
										(t >= e._tDur || t < 0) &&
											e.ratio === l &&
											(l && lv(e, 1),
											n ||
												Um ||
												(Hv(
													e,
													l
														? 'onComplete'
														: 'onReverseComplete',
													!0,
												),
												e._prom && e._prom()));
								} else e._zTime || (e._zTime = t);
							})(this, e, t, n);
						return this;
					}),
					(n.targets = function () {
						return this._targets;
					}),
					(n.invalidate = function (t) {
						return (
							(!t || !this.vars.runBackwards) &&
								(this._startAt = 0),
							(this._pt =
								this._op =
								this._onUpdate =
								this._lazy =
								this.ratio =
									0),
							(this._ptLookup = []),
							this.timeline && this.timeline.invalidate(t),
							e.prototype.invalidate.call(this, t)
						);
					}),
					(n.resetTo = function (e, t, n, r) {
						Km || iA.wake(), this._ts || this.play();
						var i = Math.min(
							this._dur,
							(this._dp._time - this._start) * this._ts,
						);
						return (
							this._initted || kA(this, i),
							(function (e, t, n, r, i, o, a) {
								var s,
									l,
									u,
									c,
									d = ((e._pt && e._ptCache) ||
										(e._ptCache = {}))[t];
								if (!d)
									for (
										d = e._ptCache[t] = [],
											u = e._ptLookup,
											c = e._targets.length;
										c--;

									) {
										if ((s = u[c][t]) && s.d && s.d._pt)
											for (
												s = s.d._pt;
												s && s.p !== t && s.fp !== t;

											)
												s = s._next;
										if (!s)
											return (
												(bA = 1),
												(e.vars[t] = '+=0'),
												kA(e, a),
												(bA = 0),
												1
											);
										d.push(s);
									}
								for (c = d.length; c--; )
									((s = (l = d[c])._pt || l).s =
										(!r && 0 !== r) || i
											? s.s + (r || 0) + o * s.c
											: r),
										(s.c = n - s.s),
										l.e && (l.e = Wg(n) + Mv(l.e)),
										l.b && (l.b = s.s + Mv(l.b));
							})(this, e, t, n, r, this._ease(i / this._dur), i)
								? this.resetTo(e, t, n, r)
								: (gv(this, 0),
									this.parent ||
										av(
											this._dp,
											this,
											'_first',
											'_last',
											this._dp._sort ? '_start' : 0,
										),
									this.render(0))
						);
					}),
					(n.kill = function (e, t) {
						if (
							(void 0 === t && (t = 'all'),
							!e && (!t || 'all' === t))
						)
							return (
								(this._lazy = this._pt = 0),
								this.parent ? Gv(this) : this
							);
						if (this.timeline) {
							var n = this.timeline.totalDuration();
							return (
								this.timeline.killTweensOf(
									e,
									t,
									wA && !0 !== wA.vars.overwrite,
								)._first || Gv(this),
								this.parent &&
									n !== this.timeline.totalDuration() &&
									Ev(
										this,
										(this._dur * this.timeline._tDur) / n,
										0,
										1,
									),
								this
							);
						}
						var r,
							i,
							o,
							a,
							s,
							l,
							u,
							c = this._targets,
							d = e ? Bv(e) : c,
							f = this._ptLookup,
							h = this._pt;
						if (
							(!t || 'all' === t) &&
							(function (e, t) {
								for (
									var n = e.length, r = n === t.length;
									r && n-- && e[n] === t[n];

								);
								return n < 0;
							})(c, d)
						)
							return 'all' === t && (this._pt = 0), Gv(this);
						for (
							r = this._op = this._op || [],
								'all' !== t &&
									(lg(t) &&
										((s = {}),
										Gg(t, function (e) {
											return (s[e] = 1);
										}),
										(t = s)),
									(t = (function (e, t) {
										var n,
											r,
											i,
											o,
											a = e[0] ? Qg(e[0]).harness : 0,
											s = a && a.aliases;
										if (!s) return t;
										for (r in ((n = nv({}, t)), s))
											if ((r in n))
												for (
													i = (o = s[r].split(','))
														.length;
													i--;

												)
													n[o[i]] = n[r];
										return n;
									})(c, t))),
								u = c.length;
							u--;

						)
							if (~d.indexOf(c[u]))
								for (s in ((i = f[u]),
								'all' === t
									? ((r[u] = t), (a = i), (o = {}))
									: ((o = r[u] = r[u] || {}), (a = t)),
								a))
									(l = i && i[s]) &&
										(('kill' in l.d &&
											!0 !== l.d.kill(s)) ||
											sv(this, l, '_pt'),
										delete i[s]),
										'all' !== o && (o[s] = 1);
						return (
							this._initted && !this._pt && h && Gv(this), this
						);
					}),
					(t.to = function (e, n) {
						return new t(e, n, arguments[2]);
					}),
					(t.from = function (e, t) {
						return Tv(1, arguments);
					}),
					(t.delayedCall = function (e, n, r, i) {
						return new t(n, 0, {
							immediateRender: !1,
							lazy: !1,
							overwrite: !1,
							delay: e,
							onComplete: n,
							onReverseComplete: n,
							onCompleteParams: r,
							onReverseCompleteParams: r,
							callbackScope: i,
						});
					}),
					(t.fromTo = function (e, t, n) {
						return Tv(2, arguments);
					}),
					(t.set = function (e, n) {
						return (
							(n.duration = 0),
							n.repeatDelay || (n.repeat = 0),
							new t(e, n)
						);
					}),
					(t.killTweensOf = function (e, t, n) {
						return Qm.killTweensOf(e, t, n);
					}),
					t
				);
			})(AA);
			tv(MA.prototype, {
				_targets: [],
				_lazy: 0,
				_startAt: 0,
				_op: 0,
				_onInit: 0,
			}),
				Gg('staggerTo,staggerFrom,staggerFromTo', function (e) {
					MA[e] = function () {
						var t = new yA(),
							n = Dv.call(arguments, 0);
						return (
							n.splice('staggerFromTo' === e ? 5 : 4, 0, 0),
							t[e].apply(t, n)
						);
					};
				});
			var DA = function (e, t, n) {
					return (e[t] = n);
				},
				OA = function (e, t, n) {
					return e[t](n);
				},
				RA = function (e, t, n, r) {
					return e[t](r.fp, n);
				},
				BA = function (e, t, n) {
					return e.setAttribute(t, n);
				},
				LA = function (e, t) {
					return ug(e[t]) ? OA : dg(e[t]) && e.setAttribute ? BA : DA;
				},
				IA = function (e, t) {
					return t.set(
						t.t,
						t.p,
						Math.round(1e6 * (t.s + t.c * e)) / 1e6,
						t,
					);
				},
				FA = function (e, t) {
					return t.set(t.t, t.p, !!(t.s + t.c * e), t);
				},
				jA = function (e, t) {
					var n = t._pt,
						r = '';
					if (!e && t.b) r = t.b;
					else if (1 === e && t.e) r = t.e;
					else {
						for (; n; )
							(r =
								n.p +
								(n.m
									? n.m(n.s + n.c * e)
									: Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
								r),
								(n = n._next);
						r += t.c;
					}
					t.set(t.t, t.p, r, t);
				},
				NA = function (e, t) {
					for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
				},
				zA = function (e, t, n, r) {
					for (var i, o = this._pt; o; )
						(i = o._next),
							o.p === r && o.modifier(e, t, n),
							(o = i);
				},
				VA = function (e) {
					for (var t, n, r = this._pt; r; )
						(n = r._next),
							(r.p === e && !r.op) || r.op === e
								? sv(this, r, '_pt')
								: r.dep || (t = 1),
							(r = n);
					return !t;
				},
				UA = function (e, t, n, r) {
					r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
				},
				YA = function (e) {
					for (var t, n, r, i, o = e._pt; o; ) {
						for (t = o._next, n = r; n && n.pr > o.pr; )
							n = n._next;
						(o._prev = n ? n._prev : i)
							? (o._prev._next = o)
							: (r = o),
							(o._next = n) ? (n._prev = o) : (i = o),
							(o = t);
					}
					e._pt = r;
				},
				QA = (function () {
					function e(e, t, n, r, i, o, a, s, l) {
						(this.t = t),
							(this.s = r),
							(this.c = i),
							(this.p = n),
							(this.r = o || IA),
							(this.d = a || this),
							(this.set = s || DA),
							(this.pr = l || 0),
							(this._next = e),
							e && (e._prev = this);
					}
					return (
						(e.prototype.modifier = function (e, t, n) {
							(this.mSet = this.mSet || this.set),
								(this.set = UA),
								(this.m = e),
								(this.mt = n),
								(this.tween = t);
						}),
						e
					);
				})();
			Gg(
				Ug +
					'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
				function (e) {
					return (Lg[e] = 1);
				},
			),
				(kg.TweenMax = kg.TweenLite = MA),
				(kg.TimelineLite = kg.TimelineMax = yA),
				(Qm = new yA({
					sortChildren: !1,
					defaults: $m,
					autoRemoveChildren: !0,
					id: 'root',
					smoothChildTiming: !0,
				})),
				(Zm.stringFilter = rA);
			var HA = [],
				GA = {},
				WA = [],
				XA = 0,
				qA = 0,
				JA = function (e) {
					return (GA[e] || WA).map(function (e) {
						return e();
					});
				},
				KA = function () {
					var e = Date.now(),
						t = [];
					e - XA > 2 &&
						(JA('matchMediaInit'),
						HA.forEach(function (e) {
							var n,
								r,
								i,
								o,
								a = e.queries,
								s = e.conditions;
							for (r in a)
								(n = Hm.matchMedia(a[r]).matches) && (i = 1),
									n !== s[r] && ((s[r] = n), (o = 1));
							o && (e.revert(), i && t.push(e));
						}),
						JA('matchMediaRevert'),
						t.forEach(function (e) {
							return e.onMatch(e);
						}),
						(XA = e),
						JA('matchMedia'));
				},
				ZA = (function () {
					function e(e, t) {
						(this.selector = t && Lv(t)),
							(this.data = []),
							(this._r = []),
							(this.isReverted = !1),
							(this.id = qA++),
							e && this.add(e);
					}
					var t = e.prototype;
					return (
						(t.add = function (e, t, n) {
							ug(e) && ((n = t), (t = e), (e = ug));
							var r = this,
								i = function () {
									var e,
										i = Ym,
										o = r.selector;
									return (
										i && i !== r && i.data.push(r),
										n && (r.selector = Lv(n)),
										(Ym = r),
										(e = t.apply(r, arguments)),
										ug(e) && r._r.push(e),
										(Ym = i),
										(r.selector = o),
										(r.isReverted = !1),
										e
									);
								};
							return (
								(r.last = i),
								e === ug ? i(r) : e ? (r[e] = i) : i
							);
						}),
						(t.ignore = function (e) {
							var t = Ym;
							(Ym = null), e(this), (Ym = t);
						}),
						(t.getTweens = function () {
							var t = [];
							return (
								this.data.forEach(function (n) {
									return n instanceof e
										? t.push.apply(t, n.getTweens())
										: n instanceof MA &&
												!(
													n.parent &&
													'nested' === n.parent.data
												) &&
												t.push(n);
								}),
								t
							);
						}),
						(t.clear = function () {
							this._r.length = this.data.length = 0;
						}),
						(t.kill = function (e, t) {
							var n = this;
							if (e) {
								var r = this.getTweens();
								this.data.forEach(function (e) {
									'isFlip' === e.data &&
										(e.revert(),
										e
											.getChildren(!0, !0, !1)
											.forEach(function (e) {
												return r.splice(
													r.indexOf(e),
													1,
												);
											}));
								}),
									r
										.map(function (e) {
											return { g: e.globalTime(0), t: e };
										})
										.sort(function (e, t) {
											return t.g - e.g || -1 / 0;
										})
										.forEach(function (t) {
											return t.t.revert(e);
										}),
									this.data.forEach(function (t) {
										return (
											!(t instanceof MA) &&
											t.revert &&
											t.revert(e)
										);
									}),
									this._r.forEach(function (t) {
										return t(e, n);
									}),
									(this.isReverted = !0);
							} else
								this.data.forEach(function (e) {
									return e.kill && e.kill();
								});
							if ((this.clear(), t))
								for (var i = HA.length; i--; )
									HA[i].id === this.id && HA.splice(i, 1);
						}),
						(t.revert = function (e) {
							this.kill(e || {});
						}),
						e
					);
				})(),
				$A = (function () {
					function e(e) {
						(this.contexts = []), (this.scope = e);
					}
					var t = e.prototype;
					return (
						(t.add = function (e, t, n) {
							fg(e) || (e = { matches: e });
							var r,
								i,
								o,
								a = new ZA(0, n || this.scope),
								s = (a.conditions = {});
							for (i in (Ym &&
								!a.selector &&
								(a.selector = Ym.selector),
							this.contexts.push(a),
							(t = a.add('onMatch', t)),
							(a.queries = e),
							e))
								'all' === i
									? (o = 1)
									: (r = Hm.matchMedia(e[i])) &&
										(HA.indexOf(a) < 0 && HA.push(a),
										(s[i] = r.matches) && (o = 1),
										r.addListener
											? r.addListener(KA)
											: r.addEventListener('change', KA));
							return o && t(a), this;
						}),
						(t.revert = function (e) {
							this.kill(e || {});
						}),
						(t.kill = function (e) {
							this.contexts.forEach(function (t) {
								return t.kill(e, !0);
							});
						}),
						e
					);
				})(),
				ey = {
					registerPlugin: function () {
						for (
							var e = arguments.length, t = new Array(e), n = 0;
							n < e;
							n++
						)
							t[n] = arguments[n];
						t.forEach(function (e) {
							return Xv(e);
						});
					},
					timeline: function (e) {
						return new yA(e);
					},
					getTweensOf: function (e, t) {
						return Qm.getTweensOf(e, t);
					},
					getProperty: function (e, t, n, r) {
						lg(e) && (e = Bv(e)[0]);
						var i = Qg(e || {}).get,
							o = n ? ev : $g;
						return (
							'native' === n && (n = ''),
							e
								? t
									? o(((jg[t] && jg[t].get) || i)(e, t, n, r))
									: function (t, n, r) {
											return o(
												((jg[t] && jg[t].get) || i)(
													e,
													t,
													n,
													r,
												),
											);
										}
								: e
						);
					},
					quickSetter: function (e, t, n) {
						if ((e = Bv(e)).length > 1) {
							var r = e.map(function (e) {
									return ry.quickSetter(e, t, n);
								}),
								i = r.length;
							return function (e) {
								for (var t = i; t--; ) r[t](e);
							};
						}
						e = e[0] || {};
						var o = jg[t],
							a = Qg(e),
							s =
								(a.harness && (a.harness.aliases || {})[t]) ||
								t,
							l = o
								? function (t) {
										var r = new o();
										(Jm._pt = 0),
											r.init(e, n ? t + n : t, Jm, 0, [
												e,
											]),
											r.render(1, r),
											Jm._pt && NA(1, Jm);
									}
								: a.set(e, s);
						return o
							? l
							: function (t) {
									return l(e, s, n ? t + n : t, a, 1);
								};
					},
					quickTo: function (e, t, n) {
						var r,
							i = ry.to(
								e,
								nv(
									(((r = {})[t] = '+=0.1'),
									(r.paused = !0),
									r),
									n || {},
								),
							),
							o = function (e, n, r) {
								return i.resetTo(t, e, n, r);
							};
						return (o.tween = i), o;
					},
					isTweening: function (e) {
						return Qm.getTweensOf(e, !0).length > 0;
					},
					defaults: function (e) {
						return (
							e && e.ease && (e.ease = fA(e.ease, $m.ease)),
							rv($m, e || {})
						);
					},
					config: function (e) {
						return rv(Zm, e || {});
					},
					registerEffect: function (e) {
						var t = e.name,
							n = e.effect,
							r = e.plugins,
							i = e.defaults,
							o = e.extendTimeline;
						(r || '').split(',').forEach(function (e) {
							return (
								e &&
								!jg[e] &&
								!kg[e] &&
								Pg(t + ' effect requires ' + e + ' plugin.')
							);
						}),
							(Ng[t] = function (e, t, r) {
								return n(Bv(e), tv(t || {}, i), r);
							}),
							o &&
								(yA.prototype[t] = function (e, n, r) {
									return this.add(
										Ng[t](
											e,
											fg(n) ? n : (r = n) && {},
											this,
										),
										r,
									);
								});
					},
					registerEase: function (e, t) {
						aA[e] = fA(t);
					},
					parseEase: function (e, t) {
						return arguments.length ? fA(e, t) : aA;
					},
					getById: function (e) {
						return Qm.getById(e);
					},
					exportRoot: function (e, t) {
						void 0 === e && (e = {});
						var n,
							r,
							i = new yA(e);
						for (
							i.smoothChildTiming = hg(e.smoothChildTiming),
								Qm.remove(i),
								i._dp = 0,
								i._time = i._tTime = Qm._time,
								n = Qm._first;
							n;

						)
							(r = n._next),
								(!t &&
									!n._dur &&
									n instanceof MA &&
									n.vars.onComplete === n._targets[0]) ||
									Av(i, n, n._start - n._delay),
								(n = r);
						return Av(Qm, i, 0), i;
					},
					context: function (e, t) {
						return e ? new ZA(e, t) : Ym;
					},
					matchMedia: function (e) {
						return new $A(e);
					},
					matchMediaRefresh: function () {
						return (
							HA.forEach(function (e) {
								var t,
									n,
									r = e.conditions;
								for (n in r) r[n] && ((r[n] = !1), (t = 1));
								t && e.revert();
							}) || KA()
						);
					},
					addEventListener: function (e, t) {
						var n = GA[e] || (GA[e] = []);
						~n.indexOf(t) || n.push(t);
					},
					removeEventListener: function (e, t) {
						var n = GA[e],
							r = n && n.indexOf(t);
						r >= 0 && n.splice(r, 1);
					},
					utils: {
						wrap: function e(t, n, r) {
							var i = n - t;
							return vg(t)
								? Vv(t, e(0, t.length), n)
								: _v(r, function (e) {
										return ((i + ((e - t) % i)) % i) + t;
									});
						},
						wrapYoyo: function e(t, n, r) {
							var i = n - t,
								o = 2 * i;
							return vg(t)
								? Vv(t, e(0, t.length - 1), n)
								: _v(r, function (e) {
										return (
											t +
											((e =
												(o + ((e - t) % o)) % o || 0) >
											i
												? o - e
												: e)
										);
									});
						},
						distribute: Fv,
						random: zv,
						snap: Nv,
						normalize: function (e, t, n) {
							return Yv(e, t, 0, 1, n);
						},
						getUnit: Mv,
						clamp: function (e, t, n) {
							return _v(n, function (n) {
								return Pv(e, t, n);
							});
						},
						splitColor: Zv,
						toArray: Bv,
						selector: Lv,
						mapRange: Yv,
						pipe: function () {
							for (
								var e = arguments.length,
									t = new Array(e),
									n = 0;
								n < e;
								n++
							)
								t[n] = arguments[n];
							return function (e) {
								return t.reduce(function (e, t) {
									return t(e);
								}, e);
							};
						},
						unitize: function (e, t) {
							return function (n) {
								return e(parseFloat(n)) + (t || Mv(n));
							};
						},
						interpolate: function e(t, n, r, i) {
							var o = isNaN(t + n)
								? 0
								: function (e) {
										return (1 - e) * t + e * n;
									};
							if (!o) {
								var a,
									s,
									l,
									u,
									c,
									d = lg(t),
									f = {};
								if ((!0 === r && (i = 1) && (r = null), d))
									(t = { p: t }), (n = { p: n });
								else if (vg(t) && !vg(n)) {
									for (
										l = [], u = t.length, c = u - 2, s = 1;
										s < u;
										s++
									)
										l.push(e(t[s - 1], t[s]));
									u--,
										(o = function (e) {
											e *= u;
											var t = Math.min(c, ~~e);
											return l[t](e - t);
										}),
										(r = n);
								} else i || (t = nv(vg(t) ? [] : {}, t));
								if (!l) {
									for (a in n) EA.call(f, t, a, 'get', n[a]);
									o = function (e) {
										return NA(e, f) || (d ? t.p : t);
									};
								}
							}
							return _v(r, o);
						},
						shuffle: Iv,
					},
					install: Tg,
					effects: Ng,
					ticker: iA,
					updateRoot: yA.updateRoot,
					plugins: jg,
					globalTimeline: Qm,
					core: {
						PropTween: QA,
						globals: Mg,
						Tween: MA,
						Timeline: yA,
						Animation: AA,
						getCache: Qg,
						_removeLinkedListItem: sv,
						reverting: function () {
							return Um;
						},
						context: function (e) {
							return (
								e && Ym && (Ym.data.push(e), (e._ctx = Ym)), Ym
							);
						},
						suppressOverwrites: function (e) {
							return (Vm = e);
						},
					},
				};
			Gg('to,from,fromTo,delayedCall,set,killTweensOf', function (e) {
				return (ey[e] = MA[e]);
			}),
				iA.add(yA.updateRoot),
				(Jm = ey.to({}, { duration: 0 }));
			var ty = function (e, t) {
					for (
						var n = e._pt;
						n && n.p !== t && n.op !== t && n.fp !== t;

					)
						n = n._next;
					return n;
				},
				ny = function (e, t) {
					return {
						name: e,
						rawVars: 1,
						init: function (e, n, r) {
							r._onInit = function (e) {
								var r, i;
								if (
									(lg(n) &&
										((r = {}),
										Gg(n, function (e) {
											return (r[e] = 1);
										}),
										(n = r)),
									t)
								) {
									for (i in ((r = {}), n)) r[i] = t(n[i]);
									n = r;
								}
								!(function (e, t) {
									var n,
										r,
										i,
										o = e._targets;
									for (n in t)
										for (r = o.length; r--; )
											(i = e._ptLookup[r][n]) &&
												(i = i.d) &&
												(i._pt && (i = ty(i, n)),
												i &&
													i.modifier &&
													i.modifier(
														t[n],
														e,
														o[r],
														n,
													));
								})(e, n);
							};
						},
					};
				},
				ry =
					ey.registerPlugin(
						{
							name: 'attr',
							init: function (e, t, n, r, i) {
								var o, a, s;
								for (o in ((this.tween = n), t))
									(s = e.getAttribute(o) || ''),
										((a = this.add(
											e,
											'setAttribute',
											(s || 0) + '',
											t[o],
											r,
											i,
											0,
											0,
											o,
										)).op = o),
										(a.b = s),
										this._props.push(o);
							},
							render: function (e, t) {
								for (var n = t._pt; n; )
									Um ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d),
										(n = n._next);
							},
						},
						{
							name: 'endArray',
							init: function (e, t) {
								for (var n = t.length; n--; )
									this.add(
										e,
										n,
										e[n] || 0,
										t[n],
										0,
										0,
										0,
										0,
										0,
										1,
									);
							},
						},
						ny('roundProps', jv),
						ny('modifiers'),
						ny('snap', Nv),
					) || ey;
			(MA.version = yA.version = ry.version = '3.12.2'),
				(Xm = 1),
				pg() && oA();
			aA.Power0,
				aA.Power1,
				aA.Power2,
				aA.Power3,
				aA.Power4,
				aA.Linear,
				aA.Quad,
				aA.Cubic,
				aA.Quart,
				aA.Quint,
				aA.Strong,
				aA.Elastic,
				aA.Back,
				aA.SteppedEase,
				aA.Bounce,
				aA.Sine,
				aA.Expo,
				aA.Circ;
			var iy,
				oy,
				ay,
				sy,
				ly,
				uy,
				cy,
				dy,
				fy = {},
				hy = 180 / Math.PI,
				py = Math.PI / 180,
				my = Math.atan2,
				gy = /([A-Z])/g,
				vy = /(left|right|width|margin|padding|x)/i,
				Ay = /[\s,\(]\S/,
				yy = {
					autoAlpha: 'opacity,visibility',
					scale: 'scaleX,scaleY',
					alpha: 'opacity',
				},
				wy = function (e, t) {
					return t.set(
						t.t,
						t.p,
						Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
						t,
					);
				},
				by = function (e, t) {
					return t.set(
						t.t,
						t.p,
						1 === e
							? t.e
							: Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
						t,
					);
				},
				xy = function (e, t) {
					return t.set(
						t.t,
						t.p,
						e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
						t,
					);
				},
				Ey = function (e, t) {
					var n = t.s + t.c * e;
					t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
				},
				Cy = function (e, t) {
					return t.set(t.t, t.p, e ? t.e : t.b, t);
				},
				ky = function (e, t) {
					return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
				},
				Sy = function (e, t, n) {
					return (e.style[t] = n);
				},
				Ty = function (e, t, n) {
					return e.style.setProperty(t, n);
				},
				_y = function (e, t, n) {
					return (e._gsap[t] = n);
				},
				Py = function (e, t, n) {
					return (e._gsap.scaleX = e._gsap.scaleY = n);
				},
				My = function (e, t, n, r, i) {
					var o = e._gsap;
					(o.scaleX = o.scaleY = n), o.renderTransform(i, o);
				},
				Dy = function (e, t, n, r, i) {
					var o = e._gsap;
					(o[t] = n), o.renderTransform(i, o);
				},
				Oy = 'transform',
				Ry = Oy + 'Origin',
				By = function e(t, n) {
					var r = this,
						i = this.target,
						o = i.style;
					if (t in fy && o) {
						if (((this.tfm = this.tfm || {}), 'transform' === t))
							return yy.transform
								.split(',')
								.forEach(function (t) {
									return e.call(r, t, n);
								});
						if (
							(~(t = yy[t] || t).indexOf(',')
								? t.split(',').forEach(function (e) {
										return (r.tfm[e] = Zy(i, e));
									})
								: (this.tfm[t] = i._gsap.x
										? i._gsap[t]
										: Zy(i, t)),
							this.props.indexOf(Oy) >= 0)
						)
							return;
						i._gsap.svg &&
							((this.svgo = i.getAttribute('data-svg-origin')),
							this.props.push(Ry, n, '')),
							(t = Oy);
					}
					(o || n) && this.props.push(t, n, o[t]);
				},
				Ly = function (e) {
					e.translate &&
						(e.removeProperty('translate'),
						e.removeProperty('scale'),
						e.removeProperty('rotate'));
				},
				Iy = function () {
					var e,
						t,
						n = this.props,
						r = this.target,
						i = r.style,
						o = r._gsap;
					for (e = 0; e < n.length; e += 3)
						n[e + 1]
							? (r[n[e]] = n[e + 2])
							: n[e + 2]
								? (i[n[e]] = n[e + 2])
								: i.removeProperty(
										'--' === n[e].substr(0, 2)
											? n[e]
											: n[e]
													.replace(gy, '-$1')
													.toLowerCase(),
									);
					if (this.tfm) {
						for (t in this.tfm) o[t] = this.tfm[t];
						o.svg &&
							(o.renderTransform(),
							r.setAttribute('data-svg-origin', this.svgo || '')),
							((e = cy()) && e.isStart) ||
								i[Oy] ||
								(Ly(i), (o.uncache = 1));
					}
				},
				Fy = function (e, t) {
					var n = { target: e, props: [], revert: Iy, save: By };
					return (
						e._gsap || ry.core.getCache(e),
						t &&
							t.split(',').forEach(function (e) {
								return n.save(e);
							}),
						n
					);
				},
				jy = function (e, t) {
					var n = oy.createElementNS
						? oy.createElementNS(
								(t || 'http://www.w3.org/1999/xhtml').replace(
									/^https/,
									'http',
								),
								e,
							)
						: oy.createElement(e);
					return n.style ? n : oy.createElement(e);
				},
				Ny = function e(t, n, r) {
					var i = getComputedStyle(t);
					return (
						i[n] ||
						i.getPropertyValue(
							n.replace(gy, '-$1').toLowerCase(),
						) ||
						i.getPropertyValue(n) ||
						(!r && e(t, Vy(n) || n, 1)) ||
						''
					);
				},
				zy = 'O,Moz,ms,Ms,Webkit'.split(','),
				Vy = function (e, t, n) {
					var r = (t || ly).style,
						i = 5;
					if (e in r && !n) return e;
					for (
						e = e.charAt(0).toUpperCase() + e.substr(1);
						i-- && !(zy[i] + e in r);

					);
					return i < 0
						? null
						: (3 === i ? 'ms' : i >= 0 ? zy[i] : '') + e;
				},
				Uy = function () {
					'undefined' !== typeof window &&
						window.document &&
						((iy = window),
						(oy = iy.document),
						(ay = oy.documentElement),
						(ly = jy('div') || { style: {} }),
						jy('div'),
						(Oy = Vy(Oy)),
						(Ry = Oy + 'Origin'),
						(ly.style.cssText =
							'border-width:0;line-height:0;position:absolute;padding:0'),
						(dy = !!Vy('perspective')),
						(cy = ry.core.reverting),
						(sy = 1));
				},
				Yy = function e(t) {
					var n,
						r = jy(
							'svg',
							(this.ownerSVGElement &&
								this.ownerSVGElement.getAttribute('xmlns')) ||
								'http://www.w3.org/2000/svg',
						),
						i = this.parentNode,
						o = this.nextSibling,
						a = this.style.cssText;
					if (
						(ay.appendChild(r),
						r.appendChild(this),
						(this.style.display = 'block'),
						t)
					)
						try {
							(n = this.getBBox()),
								(this._gsapBBox = this.getBBox),
								(this.getBBox = e);
						} catch (s) {}
					else this._gsapBBox && (n = this._gsapBBox());
					return (
						i &&
							(o ? i.insertBefore(this, o) : i.appendChild(this)),
						ay.removeChild(r),
						(this.style.cssText = a),
						n
					);
				},
				Qy = function (e, t) {
					for (var n = t.length; n--; )
						if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
				},
				Hy = function (e) {
					var t;
					try {
						t = e.getBBox();
					} catch (n) {
						t = Yy.call(e, !0);
					}
					return (
						(t && (t.width || t.height)) ||
							e.getBBox === Yy ||
							(t = Yy.call(e, !0)),
						!t || t.width || t.x || t.y
							? t
							: {
									x: +Qy(e, ['x', 'cx', 'x1']) || 0,
									y: +Qy(e, ['y', 'cy', 'y1']) || 0,
									width: 0,
									height: 0,
								}
					);
				},
				Gy = function (e) {
					return !(
						!e.getCTM ||
						(e.parentNode && !e.ownerSVGElement) ||
						!Hy(e)
					);
				},
				Wy = function (e, t) {
					if (t) {
						var n = e.style;
						t in fy && t !== Ry && (t = Oy),
							n.removeProperty
								? (('ms' !== t.substr(0, 2) &&
										'webkit' !== t.substr(0, 6)) ||
										(t = '-' + t),
									n.removeProperty(
										t.replace(gy, '-$1').toLowerCase(),
									))
								: n.removeAttribute(t);
					}
				},
				Xy = function (e, t, n, r, i, o) {
					var a = new QA(e._pt, t, n, 0, 1, o ? ky : Cy);
					return (
						(e._pt = a), (a.b = r), (a.e = i), e._props.push(n), a
					);
				},
				qy = { deg: 1, rad: 1, turn: 1 },
				Jy = { grid: 1, flex: 1 },
				Ky = function e(t, n, r, i) {
					var o,
						a,
						s,
						l,
						u = parseFloat(r) || 0,
						c = (r + '').trim().substr((u + '').length) || 'px',
						d = ly.style,
						f = vy.test(n),
						h = 'svg' === t.tagName.toLowerCase(),
						p =
							(h ? 'client' : 'offset') +
							(f ? 'Width' : 'Height'),
						m = 100,
						g = 'px' === i,
						v = '%' === i;
					return i === c || !u || qy[i] || qy[c]
						? u
						: ('px' !== c && !g && (u = e(t, n, r, 'px')),
							(l = t.getCTM && Gy(t)),
							(!v && '%' !== c) ||
							(!fy[n] && !~n.indexOf('adius'))
								? ((d[f ? 'width' : 'height'] =
										m + (g ? c : i)),
									(a =
										~n.indexOf('adius') ||
										('em' === i && t.appendChild && !h)
											? t
											: t.parentNode),
									l &&
										(a = (t.ownerSVGElement || {})
											.parentNode),
									(a && a !== oy && a.appendChild) ||
										(a = oy.body),
									(s = a._gsap) &&
									v &&
									s.width &&
									f &&
									s.time === iA.time &&
									!s.uncache
										? Wg((u / s.width) * m)
										: ((v || '%' === c) &&
												!Jy[Ny(a, 'display')] &&
												(d.position = Ny(
													t,
													'position',
												)),
											a === t && (d.position = 'static'),
											a.appendChild(ly),
											(o = ly[p]),
											a.removeChild(ly),
											(d.position = 'absolute'),
											f &&
												v &&
												(((s = Qg(a)).time = iA.time),
												(s.width = a[p])),
											Wg(
												g
													? (o * u) / m
													: o && u
														? (m / o) * u
														: 0,
											)))
								: ((o = l
										? t.getBBox()[f ? 'width' : 'height']
										: t[p]),
									Wg(v ? (u / o) * m : (u / 100) * o)));
				},
				Zy = function (e, t, n, r) {
					var i;
					return (
						sy || Uy(),
						t in yy &&
							'transform' !== t &&
							~(t = yy[t]).indexOf(',') &&
							(t = t.split(',')[0]),
						fy[t] && 'transform' !== t
							? ((i = cw(e, r)),
								(i =
									'transformOrigin' !== t
										? i[t]
										: i.svg
											? i.origin
											: dw(Ny(e, Ry)) +
												' ' +
												i.zOrigin +
												'px'))
							: (!(i = e.style[t]) ||
									'auto' === i ||
									r ||
									~(i + '').indexOf('calc(')) &&
								(i =
									(rw[t] && rw[t](e, t, n)) ||
									Ny(e, t) ||
									Hg(e, t) ||
									('opacity' === t ? 1 : 0)),
						n && !~(i + '').trim().indexOf(' ')
							? Ky(e, t, i, n) + n
							: i
					);
				},
				$y = function (e, t, n, r) {
					if (!n || 'none' === n) {
						var i = Vy(t, e, 1),
							o = i && Ny(e, i, 1);
						o && o !== n
							? ((t = i), (n = o))
							: 'borderColor' === t &&
								(n = Ny(e, 'borderTopColor'));
					}
					var a,
						s,
						l,
						u,
						c,
						d,
						f,
						h,
						p,
						m,
						g,
						v = new QA(this._pt, e.style, t, 0, 1, jA),
						A = 0,
						y = 0;
					if (
						((v.b = n),
						(v.e = r),
						(n += ''),
						'auto' === (r += '') &&
							((e.style[t] = r),
							(r = Ny(e, t) || r),
							(e.style[t] = n)),
						rA((a = [n, r])),
						(r = a[1]),
						(l = (n = a[0]).match(wg) || []),
						(r.match(wg) || []).length)
					) {
						for (; (s = wg.exec(r)); )
							(f = s[0]),
								(p = r.substring(A, s.index)),
								c
									? (c = (c + 1) % 5)
									: ('rgba(' !== p.substr(-5) &&
											'hsla(' !== p.substr(-5)) ||
										(c = 1),
								f !== (d = l[y++] || '') &&
									((u = parseFloat(d) || 0),
									(g = d.substr((u + '').length)),
									'=' === f.charAt(1) && (f = qg(u, f) + g),
									(h = parseFloat(f)),
									(m = f.substr((h + '').length)),
									(A = wg.lastIndex - m.length),
									m ||
										((m = m || Zm.units[t] || g),
										A === r.length &&
											((r += m), (v.e += m))),
									g !== m && (u = Ky(e, t, d, m) || 0),
									(v._pt = {
										_next: v._pt,
										p: p || 1 === y ? p : ',',
										s: u,
										c: h - u,
										m:
											(c && c < 4) || 'zIndex' === t
												? Math.round
												: 0,
									}));
						v.c = A < r.length ? r.substring(A, r.length) : '';
					} else v.r = 'display' === t && 'none' === r ? ky : Cy;
					return xg.test(r) && (v.e = 0), (this._pt = v), v;
				},
				ew = {
					top: '0%',
					bottom: '100%',
					left: '0%',
					right: '100%',
					center: '50%',
				},
				tw = function (e) {
					var t = e.split(' '),
						n = t[0],
						r = t[1] || '50%';
					return (
						('top' !== n &&
							'bottom' !== n &&
							'left' !== r &&
							'right' !== r) ||
							((e = n), (n = r), (r = e)),
						(t[0] = ew[n] || n),
						(t[1] = ew[r] || r),
						t.join(' ')
					);
				},
				nw = function (e, t) {
					if (t.tween && t.tween._time === t.tween._dur) {
						var n,
							r,
							i,
							o = t.t,
							a = o.style,
							s = t.u,
							l = o._gsap;
						if ('all' === s || !0 === s) (a.cssText = ''), (r = 1);
						else
							for (i = (s = s.split(',')).length; --i > -1; )
								(n = s[i]),
									fy[n] &&
										((r = 1),
										(n =
											'transformOrigin' === n ? Ry : Oy)),
									Wy(o, n);
						r &&
							(Wy(o, Oy),
							l &&
								(l.svg && o.removeAttribute('transform'),
								cw(o, 1),
								(l.uncache = 1),
								Ly(a)));
					}
				},
				rw = {
					clearProps: function (e, t, n, r, i) {
						if ('isFromStart' !== i.data) {
							var o = (e._pt = new QA(e._pt, t, n, 0, 0, nw));
							return (
								(o.u = r),
								(o.pr = -10),
								(o.tween = i),
								e._props.push(n),
								1
							);
						}
					},
				},
				iw = [1, 0, 0, 1, 0, 0],
				ow = {},
				aw = function (e) {
					return (
						'matrix(1, 0, 0, 1, 0, 0)' === e || 'none' === e || !e
					);
				},
				sw = function (e) {
					var t = Ny(e, Oy);
					return aw(t) ? iw : t.substr(7).match(yg).map(Wg);
				},
				lw = function (e, t) {
					var n,
						r,
						i,
						o,
						a = e._gsap || Qg(e),
						s = e.style,
						l = sw(e);
					return a.svg && e.getAttribute('transform')
						? '1,0,0,1,0,0' ===
							(l = [
								(i = e.transform.baseVal.consolidate().matrix)
									.a,
								i.b,
								i.c,
								i.d,
								i.e,
								i.f,
							]).join(',')
							? iw
							: l
						: (l !== iw ||
								e.offsetParent ||
								e === ay ||
								a.svg ||
								((i = s.display),
								(s.display = 'block'),
								((n = e.parentNode) && e.offsetParent) ||
									((o = 1),
									(r = e.nextElementSibling),
									ay.appendChild(e)),
								(l = sw(e)),
								i ? (s.display = i) : Wy(e, 'display'),
								o &&
									(r
										? n.insertBefore(e, r)
										: n
											? n.appendChild(e)
											: ay.removeChild(e))),
							t && l.length > 6
								? [l[0], l[1], l[4], l[5], l[12], l[13]]
								: l);
				},
				uw = function (e, t, n, r, i, o) {
					var a,
						s,
						l,
						u = e._gsap,
						c = i || lw(e, !0),
						d = u.xOrigin || 0,
						f = u.yOrigin || 0,
						h = u.xOffset || 0,
						p = u.yOffset || 0,
						m = c[0],
						g = c[1],
						v = c[2],
						A = c[3],
						y = c[4],
						w = c[5],
						b = t.split(' '),
						x = parseFloat(b[0]) || 0,
						E = parseFloat(b[1]) || 0;
					n
						? c !== iw &&
							(s = m * A - g * v) &&
							((l =
								x * (-g / s) +
								E * (m / s) -
								(m * w - g * y) / s),
							(x =
								x * (A / s) +
								E * (-v / s) +
								(v * w - A * y) / s),
							(E = l))
						: ((x =
								(a = Hy(e)).x +
								(~b[0].indexOf('%') ? (x / 100) * a.width : x)),
							(E =
								a.y +
								(~(b[1] || b[0]).indexOf('%')
									? (E / 100) * a.height
									: E))),
						r || (!1 !== r && u.smooth)
							? ((y = x - d),
								(w = E - f),
								(u.xOffset = h + (y * m + w * v) - y),
								(u.yOffset = p + (y * g + w * A) - w))
							: (u.xOffset = u.yOffset = 0),
						(u.xOrigin = x),
						(u.yOrigin = E),
						(u.smooth = !!r),
						(u.origin = t),
						(u.originIsAbsolute = !!n),
						(e.style[Ry] = '0px 0px'),
						o &&
							(Xy(o, u, 'xOrigin', d, x),
							Xy(o, u, 'yOrigin', f, E),
							Xy(o, u, 'xOffset', h, u.xOffset),
							Xy(o, u, 'yOffset', p, u.yOffset)),
						e.setAttribute('data-svg-origin', x + ' ' + E);
				},
				cw = function (e, t) {
					var n = e._gsap || new vA(e);
					if ('x' in n && !t && !n.uncache) return n;
					var r,
						i,
						o,
						a,
						s,
						l,
						u,
						c,
						d,
						f,
						h,
						p,
						m,
						g,
						v,
						A,
						y,
						w,
						b,
						x,
						E,
						C,
						k,
						S,
						T,
						_,
						P,
						M,
						D,
						O,
						R,
						B,
						L = e.style,
						I = n.scaleX < 0,
						F = 'px',
						j = 'deg',
						N = getComputedStyle(e),
						z = Ny(e, Ry) || '0';
					return (
						(r = i = o = l = u = c = d = f = h = 0),
						(a = s = 1),
						(n.svg = !(!e.getCTM || !Gy(e))),
						N.translate &&
							(('none' === N.translate &&
								'none' === N.scale &&
								'none' === N.rotate) ||
								(L[Oy] =
									('none' !== N.translate
										? 'translate3d(' +
											(N.translate + ' 0 0')
												.split(' ')
												.slice(0, 3)
												.join(', ') +
											') '
										: '') +
									('none' !== N.rotate
										? 'rotate(' + N.rotate + ') '
										: '') +
									('none' !== N.scale
										? 'scale(' +
											N.scale.split(' ').join(',') +
											') '
										: '') +
									('none' !== N[Oy] ? N[Oy] : '')),
							(L.scale = L.rotate = L.translate = 'none')),
						(g = lw(e, n.svg)),
						n.svg &&
							(n.uncache
								? ((T = e.getBBox()),
									(z =
										n.xOrigin -
										T.x +
										'px ' +
										(n.yOrigin - T.y) +
										'px'),
									(S = ''))
								: (S = !t && e.getAttribute('data-svg-origin')),
							uw(
								e,
								S || z,
								!!S || n.originIsAbsolute,
								!1 !== n.smooth,
								g,
							)),
						(p = n.xOrigin || 0),
						(m = n.yOrigin || 0),
						g !== iw &&
							((w = g[0]),
							(b = g[1]),
							(x = g[2]),
							(E = g[3]),
							(r = C = g[4]),
							(i = k = g[5]),
							6 === g.length
								? ((a = Math.sqrt(w * w + b * b)),
									(s = Math.sqrt(E * E + x * x)),
									(l = w || b ? my(b, w) * hy : 0),
									(d = x || E ? my(x, E) * hy + l : 0) &&
										(s *= Math.abs(Math.cos(d * py))),
									n.svg &&
										((r -= p - (p * w + m * x)),
										(i -= m - (p * b + m * E))))
								: ((B = g[6]),
									(O = g[7]),
									(P = g[8]),
									(M = g[9]),
									(D = g[10]),
									(R = g[11]),
									(r = g[12]),
									(i = g[13]),
									(o = g[14]),
									(u = (v = my(B, D)) * hy),
									v &&
										((S =
											C * (A = Math.cos(-v)) +
											P * (y = Math.sin(-v))),
										(T = k * A + M * y),
										(_ = B * A + D * y),
										(P = C * -y + P * A),
										(M = k * -y + M * A),
										(D = B * -y + D * A),
										(R = O * -y + R * A),
										(C = S),
										(k = T),
										(B = _)),
									(c = (v = my(-x, D)) * hy),
									v &&
										((A = Math.cos(-v)),
										(R = E * (y = Math.sin(-v)) + R * A),
										(w = S = w * A - P * y),
										(b = T = b * A - M * y),
										(x = _ = x * A - D * y)),
									(l = (v = my(b, w)) * hy),
									v &&
										((S =
											w * (A = Math.cos(v)) +
											b * (y = Math.sin(v))),
										(T = C * A + k * y),
										(b = b * A - w * y),
										(k = k * A - C * y),
										(w = S),
										(C = T)),
									u &&
										Math.abs(u) + Math.abs(l) > 359.9 &&
										((u = l = 0), (c = 180 - c)),
									(a = Wg(Math.sqrt(w * w + b * b + x * x))),
									(s = Wg(Math.sqrt(k * k + B * B))),
									(v = my(C, k)),
									(d = Math.abs(v) > 2e-4 ? v * hy : 0),
									(h = R ? 1 / (R < 0 ? -R : R) : 0)),
							n.svg &&
								((S = e.getAttribute('transform')),
								(n.forceCSS =
									e.setAttribute('transform', '') ||
									!aw(Ny(e, Oy))),
								S && e.setAttribute('transform', S))),
						Math.abs(d) > 90 &&
							Math.abs(d) < 270 &&
							(I
								? ((a *= -1),
									(d += l <= 0 ? 180 : -180),
									(l += l <= 0 ? 180 : -180))
								: ((s *= -1), (d += d <= 0 ? 180 : -180))),
						(t = t || n.uncache),
						(n.x =
							r -
							((n.xPercent =
								r &&
								((!t && n.xPercent) ||
									(Math.round(e.offsetWidth / 2) ===
									Math.round(-r)
										? -50
										: 0)))
								? (e.offsetWidth * n.xPercent) / 100
								: 0) +
							F),
						(n.y =
							i -
							((n.yPercent =
								i &&
								((!t && n.yPercent) ||
									(Math.round(e.offsetHeight / 2) ===
									Math.round(-i)
										? -50
										: 0)))
								? (e.offsetHeight * n.yPercent) / 100
								: 0) +
							F),
						(n.z = o + F),
						(n.scaleX = Wg(a)),
						(n.scaleY = Wg(s)),
						(n.rotation = Wg(l) + j),
						(n.rotationX = Wg(u) + j),
						(n.rotationY = Wg(c) + j),
						(n.skewX = d + j),
						(n.skewY = f + j),
						(n.transformPerspective = h + F),
						(n.zOrigin = parseFloat(z.split(' ')[2]) || 0) &&
							(L[Ry] = dw(z)),
						(n.xOffset = n.yOffset = 0),
						(n.force3D = Zm.force3D),
						(n.renderTransform = n.svg ? Aw : dy ? vw : hw),
						(n.uncache = 0),
						n
					);
				},
				dw = function (e) {
					return (e = e.split(' '))[0] + ' ' + e[1];
				},
				fw = function (e, t, n) {
					var r = Mv(t);
					return (
						Wg(
							parseFloat(t) + parseFloat(Ky(e, 'x', n + 'px', r)),
						) + r
					);
				},
				hw = function (e, t) {
					(t.z = '0px'),
						(t.rotationY = t.rotationX = '0deg'),
						(t.force3D = 0),
						vw(e, t);
				},
				pw = '0deg',
				mw = '0px',
				gw = ') ',
				vw = function (e, t) {
					var n = t || this,
						r = n.xPercent,
						i = n.yPercent,
						o = n.x,
						a = n.y,
						s = n.z,
						l = n.rotation,
						u = n.rotationY,
						c = n.rotationX,
						d = n.skewX,
						f = n.skewY,
						h = n.scaleX,
						p = n.scaleY,
						m = n.transformPerspective,
						g = n.force3D,
						v = n.target,
						A = n.zOrigin,
						y = '',
						w = ('auto' === g && e && 1 !== e) || !0 === g;
					if (A && (c !== pw || u !== pw)) {
						var b,
							x = parseFloat(u) * py,
							E = Math.sin(x),
							C = Math.cos(x);
						(x = parseFloat(c) * py),
							(b = Math.cos(x)),
							(o = fw(v, o, E * b * -A)),
							(a = fw(v, a, -Math.sin(x) * -A)),
							(s = fw(v, s, C * b * -A + A));
					}
					m !== mw && (y += 'perspective(' + m + gw),
						(r || i) && (y += 'translate(' + r + '%, ' + i + '%) '),
						(w || o !== mw || a !== mw || s !== mw) &&
							(y +=
								s !== mw || w
									? 'translate3d(' +
										o +
										', ' +
										a +
										', ' +
										s +
										') '
									: 'translate(' + o + ', ' + a + gw),
						l !== pw && (y += 'rotate(' + l + gw),
						u !== pw && (y += 'rotateY(' + u + gw),
						c !== pw && (y += 'rotateX(' + c + gw),
						(d === pw && f === pw) ||
							(y += 'skew(' + d + ', ' + f + gw),
						(1 === h && 1 === p) ||
							(y += 'scale(' + h + ', ' + p + gw),
						(v.style[Oy] = y || 'translate(0, 0)');
				},
				Aw = function (e, t) {
					var n,
						r,
						i,
						o,
						a,
						s = t || this,
						l = s.xPercent,
						u = s.yPercent,
						c = s.x,
						d = s.y,
						f = s.rotation,
						h = s.skewX,
						p = s.skewY,
						m = s.scaleX,
						g = s.scaleY,
						v = s.target,
						A = s.xOrigin,
						y = s.yOrigin,
						w = s.xOffset,
						b = s.yOffset,
						x = s.forceCSS,
						E = parseFloat(c),
						C = parseFloat(d);
					(f = parseFloat(f)),
						(h = parseFloat(h)),
						(p = parseFloat(p)) &&
							((h += p = parseFloat(p)), (f += p)),
						f || h
							? ((f *= py),
								(h *= py),
								(n = Math.cos(f) * m),
								(r = Math.sin(f) * m),
								(i = Math.sin(f - h) * -g),
								(o = Math.cos(f - h) * g),
								h &&
									((p *= py),
									(a = Math.tan(h - p)),
									(i *= a = Math.sqrt(1 + a * a)),
									(o *= a),
									p &&
										((a = Math.tan(p)),
										(n *= a = Math.sqrt(1 + a * a)),
										(r *= a))),
								(n = Wg(n)),
								(r = Wg(r)),
								(i = Wg(i)),
								(o = Wg(o)))
							: ((n = m), (o = g), (r = i = 0)),
						((E && !~(c + '').indexOf('px')) ||
							(C && !~(d + '').indexOf('px'))) &&
							((E = Ky(v, 'x', c, 'px')),
							(C = Ky(v, 'y', d, 'px'))),
						(A || y || w || b) &&
							((E = Wg(E + A - (A * n + y * i) + w)),
							(C = Wg(C + y - (A * r + y * o) + b))),
						(l || u) &&
							((a = v.getBBox()),
							(E = Wg(E + (l / 100) * a.width)),
							(C = Wg(C + (u / 100) * a.height))),
						(a =
							'matrix(' +
							n +
							',' +
							r +
							',' +
							i +
							',' +
							o +
							',' +
							E +
							',' +
							C +
							')'),
						v.setAttribute('transform', a),
						x && (v.style[Oy] = a);
				},
				yw = function (e, t, n, r, i) {
					var o,
						a,
						s = 360,
						l = lg(i),
						u =
							parseFloat(i) * (l && ~i.indexOf('rad') ? hy : 1) -
							r,
						c = r + u + 'deg';
					return (
						l &&
							('short' === (o = i.split('_')[1]) &&
								(u %= s) !== u % 180 &&
								(u += u < 0 ? s : -360),
							'cw' === o && u < 0
								? (u = ((u + 36e9) % s) - ~~(u / s) * s)
								: 'ccw' === o &&
									u > 0 &&
									(u = ((u - 36e9) % s) - ~~(u / s) * s)),
						(e._pt = a = new QA(e._pt, t, n, r, u, by)),
						(a.e = c),
						(a.u = 'deg'),
						e._props.push(n),
						a
					);
				},
				ww = function (e, t) {
					for (var n in t) e[n] = t[n];
					return e;
				},
				bw = function (e, t, n) {
					var r,
						i,
						o,
						a,
						s,
						l,
						u,
						c = ww({}, n._gsap),
						d = n.style;
					for (i in (c.svg
						? ((o = n.getAttribute('transform')),
							n.setAttribute('transform', ''),
							(d[Oy] = t),
							(r = cw(n, 1)),
							Wy(n, Oy),
							n.setAttribute('transform', o))
						: ((o = getComputedStyle(n)[Oy]),
							(d[Oy] = t),
							(r = cw(n, 1)),
							(d[Oy] = o)),
					fy))
						(o = c[i]) !== (a = r[i]) &&
							'perspective,force3D,transformOrigin,svgOrigin'.indexOf(
								i,
							) < 0 &&
							((s =
								Mv(o) !== (u = Mv(a))
									? Ky(n, i, o, u)
									: parseFloat(o)),
							(l = parseFloat(a)),
							(e._pt = new QA(e._pt, r, i, s, l - s, wy)),
							(e._pt.u = u || 0),
							e._props.push(i));
					ww(r, c);
				};
			Gg('padding,margin,Width,Radius', function (e, t) {
				var n = 'Top',
					r = 'Right',
					i = 'Bottom',
					o = 'Left',
					a = (
						t < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]
					).map(function (n) {
						return t < 2 ? e + n : 'border' + n + e;
					});
				rw[t > 1 ? 'border' + e : e] = function (e, t, n, r, i) {
					var o, s;
					if (arguments.length < 4)
						return (
							(o = a.map(function (t) {
								return Zy(e, t, n);
							})),
							5 === (s = o.join(' ')).split(o[0]).length
								? o[0]
								: s
						);
					(o = (r + '').split(' ')),
						(s = {}),
						a.forEach(function (e, t) {
							return (s[e] = o[t] = o[t] || o[((t - 1) / 2) | 0]);
						}),
						e.init(t, s, i);
				};
			});
			var xw = {
				name: 'css',
				register: Uy,
				targetTest: function (e) {
					return e.style && e.nodeType;
				},
				init: function (e, t, n, r, i) {
					var o,
						a,
						s,
						l,
						u,
						c,
						d,
						f,
						h,
						p,
						m,
						g,
						v,
						A,
						y,
						w,
						b = this._props,
						x = e.style,
						E = n.vars.startAt;
					for (d in (sy || Uy(),
					(this.styles = this.styles || Fy(e)),
					(w = this.styles.props),
					(this.tween = n),
					t))
						if (
							'autoRound' !== d &&
							((a = t[d]), !jg[d] || !CA(d, t, n, r, e, i))
						)
							if (
								((u = typeof a),
								(c = rw[d]),
								'function' === u &&
									(u = typeof (a = a.call(n, r, e, i))),
								'string' === u &&
									~a.indexOf('random(') &&
									(a = Uv(a)),
								c)
							)
								c(this, e, d, a, n) && (y = 1);
							else if ('--' === d.substr(0, 2))
								(o = (
									getComputedStyle(e).getPropertyValue(d) + ''
								).trim()),
									(a += ''),
									(tA.lastIndex = 0),
									tA.test(o) || ((f = Mv(o)), (h = Mv(a))),
									h
										? f !== h && (o = Ky(e, d, o, h) + h)
										: f && (a += f),
									this.add(
										x,
										'setProperty',
										o,
										a,
										r,
										i,
										0,
										0,
										d,
									),
									b.push(d),
									w.push(d, 0, x[d]);
							else if ('undefined' !== u) {
								if (
									(E && d in E
										? ((o =
												'function' === typeof E[d]
													? E[d].call(n, r, e, i)
													: E[d]),
											lg(o) &&
												~o.indexOf('random(') &&
												(o = Uv(o)),
											Mv(o + '') ||
												(o +=
													Zm.units[d] ||
													Mv(Zy(e, d)) ||
													''),
											'=' === (o + '').charAt(1) &&
												(o = Zy(e, d)))
										: (o = Zy(e, d)),
									(l = parseFloat(o)),
									(p =
										'string' === u &&
										'=' === a.charAt(1) &&
										a.substr(0, 2)) && (a = a.substr(2)),
									(s = parseFloat(a)),
									d in yy &&
										('autoAlpha' === d &&
											(1 === l &&
												'hidden' ===
													Zy(e, 'visibility') &&
												s &&
												(l = 0),
											w.push(
												'visibility',
												0,
												x.visibility,
											),
											Xy(
												this,
												x,
												'visibility',
												l ? 'inherit' : 'hidden',
												s ? 'inherit' : 'hidden',
												!s,
											)),
										'scale' !== d &&
											'transform' !== d &&
											~(d = yy[d]).indexOf(',') &&
											(d = d.split(',')[0])),
									(m = d in fy))
								)
									if (
										(this.styles.save(d),
										g ||
											(((v = e._gsap).renderTransform &&
												!t.parseTransform) ||
												cw(e, t.parseTransform),
											(A =
												!1 !== t.smoothOrigin &&
												v.smooth),
											((g = this._pt =
												new QA(
													this._pt,
													x,
													Oy,
													0,
													1,
													v.renderTransform,
													v,
													0,
													-1,
												)).dep = 1)),
										'scale' === d)
									)
										(this._pt = new QA(
											this._pt,
											v,
											'scaleY',
											v.scaleY,
											(p ? qg(v.scaleY, p + s) : s) -
												v.scaleY || 0,
											wy,
										)),
											(this._pt.u = 0),
											b.push('scaleY', d),
											(d += 'X');
									else {
										if ('transformOrigin' === d) {
											w.push(Ry, 0, x[Ry]),
												(a = tw(a)),
												v.svg
													? uw(e, a, 0, A, 0, this)
													: ((h =
															parseFloat(
																a.split(' ')[2],
															) || 0) !==
															v.zOrigin &&
															Xy(
																this,
																v,
																'zOrigin',
																v.zOrigin,
																h,
															),
														Xy(
															this,
															x,
															d,
															dw(o),
															dw(a),
														));
											continue;
										}
										if ('svgOrigin' === d) {
											uw(e, a, 1, A, 0, this);
											continue;
										}
										if (d in ow) {
											yw(
												this,
												v,
												d,
												l,
												p ? qg(l, p + a) : a,
											);
											continue;
										}
										if ('smoothOrigin' === d) {
											Xy(this, v, 'smooth', v.smooth, a);
											continue;
										}
										if ('force3D' === d) {
											v[d] = a;
											continue;
										}
										if ('transform' === d) {
											bw(this, a, e);
											continue;
										}
									}
								else d in x || (d = Vy(d) || d);
								if (
									m ||
									((s || 0 === s) &&
										(l || 0 === l) &&
										!Ay.test(a) &&
										d in x)
								)
									s || (s = 0),
										(f = (o + '').substr(
											(l + '').length,
										)) !==
											(h =
												Mv(a) ||
												(d in Zm.units
													? Zm.units[d]
													: f)) &&
											(l = Ky(e, d, o, h)),
										(this._pt = new QA(
											this._pt,
											m ? v : x,
											d,
											l,
											(p ? qg(l, p + s) : s) - l,
											m ||
											('px' !== h && 'zIndex' !== d) ||
											!1 === t.autoRound
												? wy
												: Ey,
										)),
										(this._pt.u = h || 0),
										f !== h &&
											'%' !== h &&
											((this._pt.b = o),
											(this._pt.r = xy));
								else if (d in x)
									$y.call(this, e, d, o, p ? p + a : a);
								else if (d in e)
									this.add(
										e,
										d,
										o || e[d],
										p ? p + a : a,
										r,
										i,
									);
								else if ('parseTransform' !== d) {
									_g(d, a);
									continue;
								}
								m ||
									(d in x
										? w.push(d, 0, x[d])
										: w.push(d, 1, o || e[d])),
									b.push(d);
							}
					y && YA(this);
				},
				render: function (e, t) {
					if (t.tween._time || !cy())
						for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
					else t.styles.revert();
				},
				get: Zy,
				aliases: yy,
				getSetter: function (e, t, n) {
					var r = yy[t];
					return (
						r && r.indexOf(',') < 0 && (t = r),
						t in fy && t !== Ry && (e._gsap.x || Zy(e, 'x'))
							? n && uy === n
								? 'scale' === t
									? Py
									: _y
								: (uy = n || {}) && ('scale' === t ? My : Dy)
							: e.style && !dg(e.style[t])
								? Sy
								: ~t.indexOf('-')
									? Ty
									: LA(e, t)
					);
				},
				core: { _removeProperty: Wy, _getMatrix: lw },
			};
			(ry.utils.checkPrefix = Vy),
				(ry.core.getStyleSaver = Fy),
				(function (e, t, n, r) {
					var i = Gg(
						e +
							',' +
							t +
							',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
						function (e) {
							fy[e] = 1;
						},
					);
					Gg(t, function (e) {
						(Zm.units[e] = 'deg'), (ow[e] = 1);
					}),
						(yy[i[13]] = e + ',' + t),
						Gg(
							'0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
							function (e) {
								var t = e.split(':');
								yy[t[1]] = i[t[0]];
							},
						);
				})(
					'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
					'rotation,rotationX,rotationY,skewX,skewY',
				),
				Gg(
					'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
					function (e) {
						Zm.units[e] = 'px';
					},
				),
				ry.registerPlugin(xw);
			var Ew = ry.registerPlugin(xw) || ry;
			Ew.core.Tween;
			const Cw = 'Text_div__8ekYL',
				kw = 'Text_body__alfrN',
				Sw = Ia(() => {
					(0, e.useEffect)(() => {
						Ew.registerPlugin(Pm), t();
					}, []);
					const t = () => {
						Ew.to(n.current, {
							scrollTrigger: {
								trigger: r.current,
								scrub: !0,
								start: '15% center',
								end: '+='.concat(window.innerHeight / 1.5),
							},
							opacity: 1,
							ease: 'none',
							stagger: 0.1,
						});
					};
					let n = (0, e.useRef)([]);
					const r = (0, e.useRef)(null),
						i = (e) => {
							let t = [];
							return (
								e.split(' ').forEach((e, n) => {
									const r = a(e);
									t.push(
										(0, Ta.jsx)(
											'p',
											{ children: r },
											e + '_' + n,
										),
									);
								}),
								t
							);
						},
						{ body: o } = i,
						a = (e) => {
							let t = [];
							return (
								e.split('').forEach((e, r) => {
									t.push(
										(0, Ta.jsx)(
											'span',
											{
												ref: (e) => {
													n.current.push(e);
												},
												children: e,
											},
											e + '_' + r,
										),
									);
								}),
								t
							);
						};
					return (0, Ta.jsx)('div', {
						ref: r,
						className: Cw,
						children: (0, Ta.jsx)('div', {
							ref: o,
							className: kw,
							children: i(
								'Like an author weaving tales from beginning to end, a full-stack developer scripts digital stories, harmonizing the dance of data and design in every line of code.',
							),
						}),
					});
				}, 'text'),
				Tw = () => {
					const [t, n] = (0, e.useState)(!1);
					return (
						(0, e.useEffect)(() => {
							const e = () => {
								setTimeout(() => {
									n(!0);
								}, 200);
							};
							return (
								'complete' === document.readyState ||
								'interactive' === document.readyState
									? e()
									: document.addEventListener(
											'DOMContentLoaded',
											e,
										),
								() => {
									document.removeEventListener(
										'DOMContentLoaded',
										e,
									);
								}
							);
						}, []),
						(0, Ta.jsx)('div', {
							className: 'app '.concat(t ? 'loaded' : ''),
							children:
								t &&
								(0, Ta.jsxs)(Ta.Fragment, {
									children: [
										(0, Ta.jsx)(_a, {}),
										(0, Ta.jsx)(Ba, {}),
										(0, Ta.jsx)(id, {}),
										(0, Ta.jsx)(Sw, {}),
										(0, Ta.jsx)(Vc, {}),
										(0, Ta.jsx)(Ef, {}),
										(0, Ta.jsx)(wf, {}),
										(0, Ta.jsx)(Sf, {}),
										(0, Ta.jsx)(Kc, {}),
									],
								}),
						})
					);
				},
				_w = document.getElementById('root');
			t.createRoot(_w).render((0, Ta.jsx)(Tw, {}));
		})();
})();
//# sourceMappingURL=main.8d4d999c.js.map
