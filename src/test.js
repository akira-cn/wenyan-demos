/*___wenyan_module_算經_start___*/
var 算經 = new function() {
	var JIN4ZHI4 = 1;
	var _ans1 = 1;
	var TUI4ZHI4 = _ans1;
	var ZONG3SUAN4WEI4 = 0;
	var SHANG4WEI4MI4 = 1;
	var XIA4WEI4MI4 = 1;
	var ZHI4DA4ZHI3 = 0;
	var JU4WEI4MI4 = 1;
	var ZHI4JU4SHU4 = 1;
	var ZHI4XIAO3ZHI3 = 0;
	var WEI1WEI4MI4 = 1;
	var ZHI4WEI1SHU4 = 1;
	var WEI4JI2CHA4 = 1;
	var FU2DIAN3LING2 = 0;
	var FU2DIAN3YI1 = 1;
	var SHI4JIE4 = () => 0;
	SHI4JIE4 = function(XIAN4) {
		return function(YUAN2) {
			return function(JI1) {
				return function(HE2) {
					return function(JU4) {
						var ZAO4BIAO3LIE4 = () => 0;
						ZAO4BIAO3LIE4 = function(YIN3) {
							return function(SHI2) {
								var BIAO3LIE4 = {};
								BIAO3LIE4 = {
									"引": YIN3,
									"實": SHI2,
								};
								return BIAO3LIE4;
							};
						};
						var XIN1JU4 = () => 0;
						XIN1JU4 = function(YIN3) {
							return function(SHI2) {
								if (YIN3 >= XIAN4) {
									return true;
								};
								var _ans2 = JU4(SHI2);
								if (_ans2) {
									return true;
								};
								return false;
							};
						};
						var _ans3 = XIN1JU4(0)(YUAN2);
						if (_ans3) {
							var _ans4 = 0;
							var _ans5 = YUAN2;
							var _ans6 = ZAO4BIAO3LIE4(_ans4)(_ans5);
							return _ans6;
						};
						var _ans7 = XIN1JU4(1)(JI1);
						if (_ans7) {
							var _ans8 = 1;
							var _ans9 = JI1;
							var _ans10 = ZAO4BIAO3LIE4(_ans8)(_ans9);
							return _ans10;
						};
						var YIN3 = 1;
						var SHI2 = JI1;
						var JI4BIAO3LIE4 = [];
						while (true) {
							var _ans11 = YIN3 + YIN3;
							var XIN1YIN3 = _ans11;
							var _ans12 = SHI2;
							var _ans13 = SHI2;
							var _ans14 = HE2(_ans12)(_ans13);
							var XIN1SHI2 = _ans14;
							var _ans15 = XIN1JU4(XIN1YIN3)(XIN1SHI2);
							if (_ans15) {
								break;
							};
							var _ans16 = YIN3;
							var _ans17 = SHI2;
							var _ans18 = ZAO4BIAO3LIE4(_ans16)(_ans17);
							JI4BIAO3LIE4.push(_ans18);
							YIN3 = XIN1YIN3;
							SHI2 = XIN1SHI2;
						};
						var _ans19 = JI4BIAO3LIE4.length;
						var JIA3 = _ans19;
						while (true) {
							if (JIA3 == 0) {
								break;
							};
							var _ans20 = JI4BIAO3LIE4[JIA3 - 1];
							var BIAO3LIE4 = _ans20;
							var _ans21 = BIAO3LIE4["引"];
							var _ans22 = YIN3 + _ans21;
							var XIN1YIN3 = _ans22;
							var _ans23 = BIAO3LIE4["實"];
							var _ans24 = SHI2;
							var _ans25 = HE2(_ans23)(_ans24);
							var XIN1SHI2 = _ans25;
							var _ans26 = XIN1JU4(XIN1YIN3)(XIN1SHI2);
							if (!(_ans26)) {
								YIN3 = XIN1YIN3;
								SHI2 = XIN1SHI2;
							};
							var _ans27 = JIA3 - 1;
							JIA3 = _ans27;
						};
						var _ans28 = YIN3 + 1;
						var _ans29 = JI1;
						var _ans30 = SHI2;
						var _ans31 = HE2(_ans29)(_ans30);
						var _ans32 = ZAO4BIAO3LIE4(_ans28)(_ans31);
						return _ans32;
					};
				};
			};
		};
	};
	var PAN2GU3 = () => 0;
	PAN2GU3 = function() {
		var _ans33 = 3 / 1;
		if (_ans33 == 0) {
			var _ans34 = "告。計算機除不盡而捨餘者。不可行本算經之術。";
			console.log(_ans34);
			return;
		};
		var YIN2 = 0.5;
		var _ans35 = YIN2 - YIN2;
		var MAO3 = _ans35;
		var _ans36 = MAO3 * MAO3;
		FU2DIAN3LING2 = _ans36;
		var _ans37 = FU2DIAN3LING2 + 1;
		FU2DIAN3YI1 = _ans37;
		var SU4SHU4 = [];
		SU4SHU4.push(2, 3, 5, 7, 11, 13);
		var JIN4ZHI4SU4YIN1SHU4 = 0;
		JIN4ZHI4 = FU2DIAN3YI1;
		for (var FA3 of SU4SHU4) {
			var _ans38 = FA3 + 1;
			var _ans39 = _ans38 / FA3;
			var _ans40 = _ans39 - 1;
			var _ans41 = _ans40 * FA3;
			var YU2 = _ans41;
			if (YU2 == 1) {
				var _ans42 = JIN4ZHI4 * FA3;
				JIN4ZHI4 = _ans42;
				var _ans43 = JIN4ZHI4SU4YIN1SHU4 + 1;
				JIN4ZHI4SU4YIN1SHU4 = _ans43;
			};
			if (YU2 == 0) {
				var _ans44 = "告。計算機除不盡而不得分釐者。不可行本算經之術。";
				console.log(_ans44);
				return;
			};
		};
		if (JIN4ZHI4SU4YIN1SHU4 > 2) {
			var _ans45 = "告。計算機掩絲毫之瑕而求整者。不可行本算經之術。";
			console.log(_ans45);
			return;
		};
		if (JIN4ZHI4 != 2) {
			var _ans46 = "告。計算機非二進者。不可行本算經之術。";
			console.log(_ans46);
			return;
		};
		var _ans47 = 1 / JIN4ZHI4;
		TUI4ZHI4 = _ans47;
		var JIA1 = () => 0;
		JIA1 = function(JIA3) {
			return function(YI3) {
				var _ans48 = YI3 + JIA3;
				return _ans48;
			};
		};
		var CHENG2 = () => 0;
		CHENG2 = function(JIA3) {
			return function(YI3) {
				var _ans49 = YI3 * JIA3;
				return _ans49;
			};
		};
		var WEI4YI4HU1 = () => 0;
		WEI4YI4HU1 = function(JIA3) {
			var _ans50 = JIA3 * JIN4ZHI4;
			var YI3 = _ans50;
			var _ans51 = YI3 + 1;
			var _ans52 = _ans51 - YI3;
			if (_ans52 == 1) {
				return false;
			} else {
				return true;
			};
		};
		var SHI4WEI4XIAN4 = 10000;
		var _ans53 = SHI4JIE4(SHI4WEI4XIAN4)(FU2DIAN3YI1)(JIN4ZHI4)(CHENG2)(WEI4YI4HU1);
		var SUAN4XIAN4BIAO3 = _ans53;
		var _ans54 = SUAN4XIAN4BIAO3["引"];
		if (_ans54 >= SHI4WEI4XIAN4) {
			var _ans55 = "告。計算機算位無限者。不可行本算經之術。";
			console.log(_ans55);
			return;
		};
		var _ans56 = SUAN4XIAN4BIAO3["引"];
		var _ans57 = _ans56 + 1;
		ZONG3SUAN4WEI4 = _ans57;
		var _ans58 = SUAN4XIAN4BIAO3["實"];
		SHANG4WEI4MI4 = _ans58;
		var _ans59 = 1 / SHANG4WEI4MI4;
		XIA4WEI4MI4 = _ans59;
		var _ans60 = 1 + XIA4WEI4MI4;
		var _ans61 = _ans60 - 1;
		if (_ans61 != XIA4WEI4MI4) {
			var _ans62 = "告。計算機非二進者。不可行本算經之術。";
			console.log(_ans62);
			return;
		};
		var SHANG4YI4HU1 = () => 0;
		SHANG4YI4HU1 = function(JIA3) {
			var _ans63 = JIA3 * JIN4ZHI4;
			var YI3 = _ans63;
			var _ans64 = YI3 * JIN4ZHI4;
			if (_ans64 > YI3) {
				return false;
			} else {
				return true;
			};
		};
		var XIA4YI4HU1 = () => 0;
		XIA4YI4HU1 = function(JIA3) {
			var _ans65 = JIA3 * TUI4ZHI4;
			var YI3 = _ans65;
			if (YI3 == 0) {
				return true;
			};
			if (YI3 < JIA3) {
				return false;
			};
			return true;
		};
		var SHI4ZHI3XIAN4 = 100000000;
		var _ans66 = SHI4JIE4(SHI4ZHI3XIAN4)(FU2DIAN3YI1)(JIN4ZHI4)(CHENG2)(SHANG4YI4HU1);
		var SHANG4XIAN4BIAO3 = _ans66;
		var _ans67 = SHANG4XIAN4BIAO3["引"];
		ZHI4DA4ZHI3 = _ans67;
		var _ans68 = SHANG4XIAN4BIAO3["實"];
		JU4WEI4MI4 = _ans68;
		var _ans69 = JIN4ZHI4 - XIA4WEI4MI4;
		var _ans70 = _ans69 * JU4WEI4MI4;
		ZHI4JU4SHU4 = _ans70;
		var _ans71 = SHI4JIE4(SHI4ZHI3XIAN4)(FU2DIAN3YI1)(TUI4ZHI4)(CHENG2)(XIA4YI4HU1);
		var XIA4XIAN4BIAO3 = _ans71;
		var _ans72 = XIA4XIAN4BIAO3["引"];
		var _ans73 = ZONG3SUAN4WEI4 - _ans72;
		var _ans74 = _ans73 - 1;
		ZHI4XIAO3ZHI3 = _ans74;
		var _ans75 = XIA4XIAN4BIAO3["實"];
		ZHI4WEI1SHU4 = _ans75;
		var _ans76 = ZHI4WEI1SHU4 * SHANG4WEI4MI4;
		WEI1WEI4MI4 = _ans76;
		var _ans77 = ZHI4XIAO3ZHI3 - ZONG3SUAN4WEI4;
		var _ans78 = ZHI4DA4ZHI3 - _ans77;
		WEI4JI2CHA4 = _ans78; /*"以上驗算制。"*/
	};
	var _ans79 = PAN2GU3(); /*"圓周率。同Javascript之Math.PI也。"*/
	var YUAN2ZHOU1LV4 = this.YUAN2ZHOU1LV4 = 3.141592653589793238462643383279502884197; /*"倍圓周率。同Javascript之Math.PI * 2也。"*/
	var BEI4YUAN2ZHOU1LV4 = this.BEI4YUAN2ZHOU1LV4 = 6.283185307179586476925286766559005768394; /*"半圓周率。同Javascript之Math.PI / 2也。"*/
	var BAN4YUAN2ZHOU1LV4 = this.BAN4YUAN2ZHOU1LV4 = 1.570796326794896619231321691639751442099; /*"四分圓周率。同Javascript之Math.PI / 4也。"*/
	var SI4FEN1YUAN2ZHOU1LV4 = this.SI4FEN1YUAN2ZHOU1LV4 = 0.7853981633974483096156608458198757210493; /*"自然常數。同Javascript之Math.E也。"*/
	var ZI4RAN2CHANG2SHU4 = this.ZI4RAN2CHANG2SHU4 = 2.718281828459045235360287471352662497757; /*"歐拉常數。同Javascript之0.5772156649015329也。"*/
	var OU1LA1CHANG2SHU4 = this.OU1LA1CHANG2SHU4 = 0.5772156649015328606065120900824024310422; /*"黃金分割數。同Javascript之1.618033988749895也。"*/
	var HUANG2JIN1FEN1GE1SHU4 = this.HUANG2JIN1FEN1GE1SHU4 = 1.61803398874989484820458683436563811772; /*"二之平方根。同Javascript之Math.SQRT2也。"*/
	var ER4ZHI1PING2FANG1GEN1 = this.ER4ZHI1PING2FANG1GEN1 = 1.41421356237309504880168872420969807857; /*"二之對數。同Javascript之Math.LN2也。"*/
	var ER4ZHI1DUI4SHU4 = this.ER4ZHI1DUI4SHU4 = 0.6931471805599453094172321214581765680755; /*"十之對數。同Javascript之Math.LN10也。"*/
	var SHI2ZHI1DUI4SHU4 = this.SHI2ZHI1DUI4SHU4 = 2.302585092994045684017991454684364207601; /*"不可算數乎。同Javascript之Number.isNaN也。"*/
	var BU4KE3SUAN4SHU4HU1 = this.BU4KE3SUAN4SHU4HU1 = () => 0;
	BU4KE3SUAN4SHU4HU1 = this.BU4KE3SUAN4SHU4HU1 = function(JIA3) {
		if (JIA3 == JIA3) {
			return false;
		} else {
			return true;
		};
	};
	var XIA4YI4 = () => 0;
	XIA4YI4 = function(FU2) {
		var _ans80 = FU2 * WEI1WEI4MI4;
		var _ans81 = _ans80 * ZHI4WEI1SHU4;
		return _ans81;
	};
	var SHANG4YI4 = () => 0;
	SHANG4YI4 = function(FU2) {
		var _ans82 = FU2 * ZHI4JU4SHU4;
		var _ans83 = _ans82 * ZHI4JU4SHU4;
		return _ans83;
	};
	var CHU2YI3LING2 = () => 0;
	CHU2YI3LING2 = function(FU2) {
		var _ans84 = FU2 / FU2DIAN3LING2;
		return _ans84;
	};
	var BU4KE3SUAN4 = () => 0;
	BU4KE3SUAN4 = function() {
		var _ans85 = FU2DIAN3LING2 / FU2DIAN3LING2;
		return _ans85;
	};
	var QIU2JIN4MI4 = () => 0;
	QIU2JIN4MI4 = function(WEI4) {
		var WU2ZHI1MI4 = () => 0;
		WU2ZHI1MI4 = function(DI3) {
			return function(ZHI3_) {
				var JIA3 = DI3;
				var MI4 = FU2DIAN3YI1;
				while (true) {
					if (ZHI3_ == 0) {
						break;
					};
					var _ans86 = ZHI3_ % 2;
					var YU2 = _ans86;
					if (YU2 > 0) {
						var _ans87 = MI4 * JIA3;
						MI4 = _ans87;
					};
					var _ans88 = JIA3 * JIA3;
					JIA3 = _ans88;
					var _ans89 = ZHI3_ - YU2;
					var _ans90 = _ans89 / 2;
					ZHI3_ = _ans90;
				};
				return MI4;
			};
		};
		if (WEI4 < 0) {
			var _ans91 = TUI4ZHI4;
			var _ans92 = 0 - WEI4;
			var _ans93 = WU2ZHI1MI4(_ans91)(_ans92);
			return _ans93;
		} else {
			var _ans94 = JIN4ZHI4;
			var _ans95 = WEI4;
			var _ans96 = WU2ZHI1MI4(_ans94)(_ans95);
			return _ans96;
		};
	};
	var QU3WEI4CHANG2SHU4JIA3 = 0;
	var QU3WEI4CHANG2SHU4YI3 = 0;
	var QU3WEI4SHANG4YI4XIAN4 = 0;
	var FEN1SUAN4CHANG2SHU4 = 0;
	var FEN1SUAN4SHANG4YI4XIAN4JIA3 = 0;
	var FEN1SUAN4SHANG4YI4XIAN4YI3 = 0;
	var FU2XI1 = () => 0;
	FU2XI1 = function() {
		var _ans97 = SHANG4WEI4MI4 + 1;
		QU3WEI4CHANG2SHU4JIA3 = _ans97;
		var _ans98 = XIA4WEI4MI4 / 2;
		var _ans99 = 1 - _ans98;
		QU3WEI4CHANG2SHU4YI3 = _ans99;
		var _ans100 = JU4WEI4MI4 / SHANG4WEI4MI4;
		QU3WEI4SHANG4YI4XIAN4 = _ans100;
		var _ans101 = ZONG3SUAN4WEI4 + 1;
		var JIA3 = _ans101;
		var _ans102 = JIA3 % 2;
		var _ans103 = JIA3 - _ans102;
		var _ans104 = _ans103 / 2;
		var BAN4SUAN4WEI4 = _ans104;
		var _ans105 = QIU2JIN4MI4(BAN4SUAN4WEI4);
		var BAN4WEI4MI4 = _ans105;
		var _ans106 = BAN4WEI4MI4 + 1;
		FEN1SUAN4CHANG2SHU4 = _ans106;
		var _ans107 = JU4WEI4MI4 / BAN4WEI4MI4;
		FEN1SUAN4SHANG4YI4XIAN4JIA3 = _ans107;
		var _ans108 = XIA4WEI4MI4 * BAN4WEI4MI4;
		var _ans109 = JIN4ZHI4 - _ans108;
		var _ans110 = _ans109 * JU4WEI4MI4;
		FEN1SUAN4SHANG4YI4XIAN4YI3 = _ans110;
	};
	var _ans111 = FU2XI1();
	var QU3BEN3WEI4MI4 = () => 0;
	QU3BEN3WEI4MI4 = function(JIA3) {
		/*"二進者方可施是術。"*/
		var _ans112 = JUE2DUI4(JIA3);
		var YI3 = _ans112;
		if (YI3 < QU3WEI4SHANG4YI4XIAN4) {
			var _ans113 = YI3 * QU3WEI4CHANG2SHU4JIA3;
			var BING3 = _ans113;
			var _ans114 = BING3 * QU3WEI4CHANG2SHU4YI3;
			var DING1 = _ans114;
			var _ans115 = BING3 - DING1;
			return _ans115;
		} else {
			var _ans116 = YI3 * XIA4WEI4MI4;
			var _ans117 = _ans116 * XIA4WEI4MI4;
			var BING3 = _ans117;
			if (BING3 < QU3WEI4SHANG4YI4XIAN4) {
				var _ans118 = QU3BEN3WEI4MI4(BING3);
				var _ans119 = _ans118 * SHANG4WEI4MI4;
				var _ans120 = _ans119 * SHANG4WEI4MI4;
				return _ans120;
			} else {
				return YI3;
			};
		};
	};
	var QU3NEI4LIN2SHU4 = () => 0;
	QU3NEI4LIN2SHU4 = function(JIA3) {
		/*"二進者方可施是術。"*/
		var _ans121 = JIA3 * QU3WEI4CHANG2SHU4YI3;
		var YI3 = _ans121;
		if (YI3 != JIA3) {
			return YI3;
		};
		if (JIA3 == 0) {
			return JIA3;
		};
		var _ans122 = ZHENG4FU4(JIA3);
		var FU2 = _ans122;
		var _ans123 = JIA3 * FU2;
		var BING3 = _ans123;
		if (BING3 > ZHI4JU4SHU4) {
			var _ans124 = ZHI4JU4SHU4 * FU2;
			return _ans124;
		};
		var _ans125 = BING3 - ZHI4WEI1SHU4;
		var _ans126 = _ans125 * FU2;
		return _ans126;
	};
	var QU3WAI4LIN2SHU4 = () => 0;
	QU3WAI4LIN2SHU4 = function(JIA3) {
		/*"二進者方可施是術。"*/
		var _ans127 = ZHENG4FU4(JIA3);
		var FU2 = _ans127;
		var _ans128 = QU3BEN3WEI4MI4(JIA3);
		var _ans129 = _ans128 * XIA4WEI4MI4;
		var _ans130 = _ans129 * FU2;
		var _ans131 = _ans130 + JIA3;
		var YI3 = _ans131;
		if (YI3 != JIA3) {
			return YI3;
		};
		if (JIA3 == 0) {
			return ZHI4WEI1SHU4;
		};
		var _ans132 = JIA3 * FU2;
		var _ans133 = _ans132 + ZHI4WEI1SHU4;
		var _ans134 = _ans133 * FU2;
		return _ans134;
	};
	var FEN1SUAN4 = () => 0;
	FEN1SUAN4 = function(JIA3) {
		/*"分算者。其位上下二分。借二算布之也。"*/
		var ER4SUAN4 = [];
		var _ans135 = JUE2DUI4(JIA3);
		var YI3 = _ans135;
		if (YI3 < FEN1SUAN4SHANG4YI4XIAN4JIA3) {
			var _ans136 = JIA3 * FEN1SUAN4CHANG2SHU4;
			var BING3 = _ans136;
			var _ans137 = JIA3 - BING3;
			var DING1 = _ans137;
			var _ans138 = BING3 + DING1;
			var SHANG4JIA3 = _ans138;
			ER4SUAN4.push(SHANG4JIA3);
			var _ans139 = JIA3 - SHANG4JIA3;
			ER4SUAN4.push(_ans139);
		} else {
			if (YI3 < FEN1SUAN4SHANG4YI4XIAN4YI3) {
				var _ans140 = JIA3 * XIA4WEI4MI4;
				var BING3 = _ans140;
				var _ans141 = FEN1SUAN4(BING3);
				var DING1 = _ans141;
				for (var WU4 of DING1) {
					var _ans142 = WU4 * SHANG4WEI4MI4;
					ER4SUAN4.push(_ans142);
				};
			} else {
				var _ans143 = YI3 - FEN1SUAN4SHANG4YI4XIAN4YI3;
				var BING3 = _ans143;
				if (BING3 < FEN1SUAN4SHANG4YI4XIAN4YI3) {
					var _ans144 = ZHENG4FU4(JIA3);
					var FU2 = _ans144;
					var _ans145 = FEN1SUAN4SHANG4YI4XIAN4YI3 * FU2;
					ER4SUAN4.push(_ans145);
					var _ans146 = BING3 * FU2;
					ER4SUAN4.push(_ans146);
				} else {
					ER4SUAN4.push(JIA3, JIA3);
				};
			};
		};
		return ER4SUAN4;
	};
	var ZAO4SHUANG1SHU4 = () => 0;
	ZAO4SHUANG1SHU4 = function(SHANG4) {
		return function(XIA4) {
			/*"雙數者。以二算布一數。其位倍之。"*/
			var SHUANG1 = [];
			SHUANG1.push(SHANG4, XIA4);
			return SHUANG1;
		};
	};
	var SHUANG1SHU4QU3FAN3 = () => 0;
	SHUANG1SHU4QU3FAN3 = function(JIA3) {
		var _ans147 = JIA3[1 - 1];
		var _ans148 = _ans147 * -1;
		var SHANG4 = _ans148;
		var _ans149 = JIA3[2 - 1];
		var _ans150 = _ans149 * -1;
		var XIA4 = _ans150;
		var _ans151 = ZAO4SHUANG1SHU4(SHANG4)(XIA4);
		return _ans151;
	};
	var YI3XIAO3JIA1DA4DE2SHUANG1 = () => 0;
	YI3XIAO3JIA1DA4DE2SHUANG1 = function(XIAO3) {
		return function(DA4) {
			/*"大小者。二數移位之大小也。或前小而後大。或同。不可反之。"*/
			var _ans152 = DA4 + XIAO3;
			var SHANG4HE2 = _ans152;
			var _ans153 = SHANG4HE2 - DA4;
			var BING3 = _ans153;
			var _ans154 = XIAO3 - BING3;
			var XIA4HE2 = _ans154;
			var _ans155 = ZAO4SHUANG1SHU4(SHANG4HE2)(XIA4HE2);
			return _ans155;
		};
	};
	var XIANG1JIA1DE2SHUANG1 = () => 0;
	XIANG1JIA1DE2SHUANG1 = function(JIA3) {
		return function(YI3) {
			var _ans156 = YI3 + JIA3;
			var SHANG4HE2 = _ans156;
			var _ans157 = SHANG4HE2 - YI3;
			var BING3 = _ans157;
			var _ans158 = SHANG4HE2 - BING3;
			var DING1 = _ans158;
			var _ans159 = JIA3 - BING3;
			var WU4 = _ans159;
			var _ans160 = YI3 - DING1;
			var JI3 = _ans160;
			var _ans161 = JI3 + WU4;
			var XIA4HE2 = _ans161;
			var _ans162 = ZAO4SHUANG1SHU4(SHANG4HE2)(XIA4HE2);
			return _ans162;
		};
	};
	var JIA1DAN1YU2SHUANG1 = () => 0;
	JIA1DAN1YU2SHUANG1 = function(JIA3) {
		return function(YI3) {
			var _ans163 = YI3[1 - 1];
			var SHANG4YI3 = _ans163;
			var _ans164 = YI3[2 - 1];
			var XIA4YI3 = _ans164;
			var _ans165 = XIANG1JIA1DE2SHUANG1(JIA3)(SHANG4YI3);
			var BING3 = _ans165;
			var _ans166 = BING3[2 - 1];
			var _ans167 = XIA4YI3 + _ans166;
			var _ans168 = BING3[1 - 1];
			var _ans169 = YI3XIAO3JIA1DA4DE2SHUANG1(_ans167)(_ans168);
			return _ans169;
		};
	};
	var YI3DAN1JIAN3SHUANG1DE2DAN1 = () => 0;
	YI3DAN1JIAN3SHUANG1DE2DAN1 = function(JIA3) {
		return function(YI3) {
			var _ans170 = YI3[1 - 1];
			var SHANG4YI3 = _ans170;
			var _ans171 = YI3[2 - 1];
			var XIA4YI3 = _ans171;
			var _ans172 = SHANG4YI3 - JIA3;
			var _ans173 = _ans172 + XIA4YI3;
			return _ans173;
		};
	};
	var JIA1SHUANG1YU2SHUANG1 = () => 0;
	JIA1SHUANG1YU2SHUANG1 = function(JIA3) {
		return function(YI3) {
			var _ans174 = JIA3[1 - 1];
			var _ans175 = YI3[1 - 1];
			var _ans176 = XIANG1JIA1DE2SHUANG1(_ans174)(_ans175);
			var BING3 = _ans176;
			var _ans177 = JIA3[2 - 1];
			var _ans178 = YI3[2 - 1];
			var _ans179 = XIANG1JIA1DE2SHUANG1(_ans177)(_ans178);
			var DING1 = _ans179;
			var _ans180 = BING3[1 - 1];
			var SHANG4BING3 = _ans180;
			var _ans181 = BING3[2 - 1];
			var XIA4BING3 = _ans181;
			var _ans182 = DING1[1 - 1];
			var _ans183 = XIA4BING3 + _ans182;
			var _ans184 = SHANG4BING3;
			var _ans185 = YI3XIAO3JIA1DA4DE2SHUANG1(_ans183)(_ans184);
			var WU4 = _ans185;
			var _ans186 = WU4[1 - 1];
			var SHANG4WU4 = _ans186;
			var _ans187 = WU4[2 - 1];
			var XIA4WU4 = _ans187;
			var _ans188 = DING1[2 - 1];
			var _ans189 = XIA4WU4 + _ans188;
			var _ans190 = SHANG4WU4;
			var _ans191 = YI3XIAO3JIA1DA4DE2SHUANG1(_ans189)(_ans190);
			return _ans191;
		};
	};
	var ZI4CHENG2DE2SHUANG1 = () => 0;
	ZI4CHENG2DE2SHUANG1 = function(JIA3) {
		var _ans192 = JIA3 * JIA3;
		var SHANG4FANG1 = _ans192;
		var _ans193 = FEN1SUAN4(JIA3);
		var FEN1JIA3 = _ans193;
		var _ans194 = FEN1JIA3[1 - 1];
		var SHANG4JIA3 = _ans194;
		var _ans195 = FEN1JIA3[2 - 1];
		var XIA4JIA3 = _ans195;
		var _ans196 = SHANG4JIA3 * SHANG4JIA3;
		var _ans197 = _ans196 - SHANG4FANG1;
		var BING3 = _ans197;
		var _ans198 = XIA4JIA3 * SHANG4JIA3;
		var _ans199 = _ans198 * 2;
		var _ans200 = BING3 + _ans199;
		var DING1 = _ans200;
		var _ans201 = XIA4JIA3 * XIA4JIA3;
		var _ans202 = DING1 + _ans201;
		var XIA4FANG1 = _ans202;
		var _ans203 = ZAO4SHUANG1SHU4(SHANG4FANG1)(XIA4FANG1);
		return _ans203;
	};
	var XIANG1CHENG2DE2SHUANG1 = () => 0;
	XIANG1CHENG2DE2SHUANG1 = function(JIA3) {
		return function(YI3) {
			var _ans204 = JIA3 * YI3;
			var SHANG4JI1 = _ans204;
			var _ans205 = FEN1SUAN4(JIA3);
			var FEN1JIA3 = _ans205;
			var _ans206 = FEN1JIA3[1 - 1];
			var SHANG4JIA3 = _ans206;
			var _ans207 = FEN1JIA3[2 - 1];
			var XIA4JIA3 = _ans207;
			var _ans208 = FEN1SUAN4(YI3);
			var FEN1YI3 = _ans208;
			var _ans209 = FEN1YI3[1 - 1];
			var SHANG4YI3 = _ans209;
			var _ans210 = FEN1YI3[2 - 1];
			var XIA4YI3 = _ans210;
			var _ans211 = SHANG4YI3 * SHANG4JIA3;
			var _ans212 = _ans211 - SHANG4JI1;
			var BING3 = _ans212;
			var _ans213 = XIA4YI3 * SHANG4JIA3;
			var _ans214 = BING3 + _ans213;
			var DING1 = _ans214;
			var _ans215 = SHANG4YI3 * XIA4JIA3;
			var _ans216 = DING1 + _ans215;
			var WU4 = _ans216;
			var _ans217 = XIA4YI3 * XIA4JIA3;
			var _ans218 = WU4 + _ans217;
			var XIA4JI1 = _ans218;
			var _ans219 = ZAO4SHUANG1SHU4(SHANG4JI1)(XIA4JI1);
			return _ans219;
		};
	};
	var CHENG2DAN1YU2SHUANG1 = () => 0;
	CHENG2DAN1YU2SHUANG1 = function(JIA3) {
		return function(YI3) {
			var _ans220 = YI3[1 - 1];
			var SHANG4YI3 = _ans220;
			var _ans221 = YI3[2 - 1];
			var XIA4YI3 = _ans221;
			var _ans222 = XIANG1CHENG2DE2SHUANG1(JIA3)(SHANG4YI3);
			var BING3 = _ans222;
			var _ans223 = XIA4YI3 * JIA3;
			var DING1 = _ans223;
			var _ans224 = BING3[2 - 1];
			var _ans225 = _ans224 + DING1;
			var _ans226 = BING3[1 - 1];
			var _ans227 = YI3XIAO3JIA1DA4DE2SHUANG1(_ans225)(_ans226);
			return _ans227;
		};
	};
	var SHUANG1SHU4ZI4CHENG2 = () => 0;
	SHUANG1SHU4ZI4CHENG2 = function(JIA3) {
		var _ans228 = JIA3[1 - 1];
		var SHANG4JIA3 = _ans228;
		var _ans229 = JIA3[2 - 1];
		var XIA4JIA3 = _ans229;
		var _ans230 = ZI4CHENG2DE2SHUANG1(SHANG4JIA3);
		var YI3 = _ans230;
		var _ans231 = XIA4JIA3 * SHANG4JIA3;
		var _ans232 = _ans231 * 2;
		var BING3 = _ans232;
		var _ans233 = YI3[2 - 1];
		var _ans234 = _ans233 + BING3;
		var _ans235 = YI3[1 - 1];
		var _ans236 = YI3XIAO3JIA1DA4DE2SHUANG1(_ans234)(_ans235);
		return _ans236;
	};
	var CHENG2SHUANG1YU2SHUANG1 = () => 0;
	CHENG2SHUANG1YU2SHUANG1 = function(JIA3) {
		return function(YI3) {
			var _ans237 = JIA3[1 - 1];
			var SHANG4JIA3 = _ans237;
			var _ans238 = JIA3[2 - 1];
			var XIA4JIA3 = _ans238;
			var _ans239 = YI3[1 - 1];
			var SHANG4YI3 = _ans239;
			var _ans240 = YI3[2 - 1];
			var XIA4YI3 = _ans240;
			var _ans241 = XIANG1CHENG2DE2SHUANG1(SHANG4JIA3)(SHANG4YI3);
			var BING3 = _ans241;
			var _ans242 = XIA4YI3 * SHANG4JIA3;
			var DING1 = _ans242;
			var _ans243 = SHANG4YI3 * XIA4JIA3;
			var _ans244 = DING1 + _ans243;
			var WU4 = _ans244;
			var _ans245 = BING3[2 - 1];
			var _ans246 = _ans245 + WU4;
			var _ans247 = BING3[1 - 1];
			var _ans248 = YI3XIAO3JIA1DA4DE2SHUANG1(_ans246)(_ans247);
			return _ans248;
		};
	};
	var QIU2DUO1XIANG4SHI4 = () => 0;
	QIU2DUO1XIANG4SHI4 = function(SHI4) {
		return function(JIA3) {
			var JIE3 = 0;
			var _ans249 = SHI4.length;
			var YIN3 = _ans249;
			while (true) {
				if (YIN3 == 0) {
					return JIE3;
				};
				var _ans250 = JIE3 * JIA3;
				var YI3 = _ans250;
				var _ans251 = SHI4[YIN3 - 1];
				var _ans252 = YI3 + _ans251;
				JIE3 = _ans252;
				var _ans253 = YIN3 - 1;
				YIN3 = _ans253;
			};
		};
	}; /*"浮點移位。同Javascript之x * Math.pow(2, y), y is integer也。"*/
	var FU2DIAN3YI2WEI4 = this.FU2DIAN3YI2WEI4 = () => 0;
	FU2DIAN3YI2WEI4 = this.FU2DIAN3YI2WEI4 = function(BEN3) {
		return function(WEI4) {
			/*"位正則進位。負則退位。"*/
			if (WEI4 <= ZHI4DA4ZHI3) {
				if (WEI4 >= ZHI4XIAO3ZHI3) {
					var _ans254 = QIU2JIN4MI4(WEI4);
					var _ans255 = BEN3 * _ans254;
					return _ans255;
				};
			};
			var _ans256 = BU4KE3SUAN4SHU4HU1(BEN3);
			if (_ans256) {
				return BEN3;
			};
			var _ans257 = BU4KE3SUAN4SHU4HU1(WEI4);
			if (_ans257) {
				return WEI4;
			};
			if (WEI4 > 0) {
				var _ans258 = WEI4JI2CHA4 + 2;
				var XIAN4 = _ans258;
				if (WEI4 <= XIAN4) {
					var _ans259 = BEN3;
					var _ans260 = WEI4 - ZHI4DA4ZHI3;
					var _ans261 = FU2DIAN3YI2WEI4(_ans259)(_ans260);
					var _ans262 = _ans261 * JU4WEI4MI4;
					return _ans262;
				};
				if (WEI4 <= ZHI4JU4SHU4) {
					var _ans263 = BEN3;
					var _ans264 = XIAN4 - ZHI4DA4ZHI3;
					var _ans265 = FU2DIAN3YI2WEI4(_ans263)(_ans264);
					var _ans266 = _ans265 * JU4WEI4MI4;
					return _ans266;
				};
				if (BEN3 != 0) {
					var _ans267 = ZHENG4FU4(BEN3);
					var _ans268 = SHANG4YI4(_ans267);
					return _ans268;
				} else {
					var _ans269 = BU4KE3SUAN4();
					return _ans269;
				};
			} else {
				var _ans270 = -2 - WEI4JI2CHA4;
				var XIAN4 = _ans270;
				if (WEI4 >= XIAN4) {
					var _ans271 = BEN3;
					var _ans272 = WEI4 - ZHI4XIAO3ZHI3;
					var _ans273 = FU2DIAN3YI2WEI4(_ans271)(_ans272);
					var _ans274 = _ans273 * WEI1WEI4MI4;
					return _ans274;
				};
				var _ans275 = ZHI4JU4SHU4 * -1;
				if (WEI4 >= _ans275) {
					var _ans276 = BEN3;
					var _ans277 = XIAN4 - ZHI4XIAO3ZHI3;
					var _ans278 = FU2DIAN3YI2WEI4(_ans276)(_ans277);
					var _ans279 = _ans278 * WEI1WEI4MI4;
					return _ans279;
				};
				var _ans280 = JUE2DUI4(BEN3);
				if (_ans280 <= ZHI4JU4SHU4) {
					var _ans281 = BEN3 * FU2DIAN3LING2;
					return _ans281;
				} else {
					var _ans282 = BU4KE3SUAN4();
					return _ans282;
				};
			};
		};
	}; /*"析浮點數。同Javascript之N/A也。"*/
	var XI1FU2DIAN3SHU4 = this.XI1FU2DIAN3SHU4 = () => 0;
	XI1FU2DIAN3SHU4 = this.XI1FU2DIAN3SHU4 = function(JIA3) {
		/*"是術得一物。物有三數。曰符。曰位。曰本。符者。正負也。位者。進退位也。本者。本數也。"*/ /*"設計算機二進。若施是術於負六。乃得符負一。位二。本一又五分。"*/
		var ZAO4XI1 = () => 0;
		ZAO4XI1 = function(FU2) {
			return function(WEI4) {
				return function(BEN3) {
					var XI1 = {};
					XI1 = {
						"符": FU2,
						"位": WEI4,
						"本": BEN3,
					};
					return XI1;
				};
			};
		};
		var CHENG2 = () => 0;
		CHENG2 = function(BING3) {
			return function(DING1) {
				var _ans283 = DING1 * BING3;
				return _ans283;
			};
		};
		var _ans284 = ZHENG4FU4(JIA3);
		var FU2 = _ans284;
		var _ans285 = JIA3 * FU2;
		var YI3 = _ans285;
		if (JIA3 == 0) {
			var _ans286 = FU2;
			var _ans287 = CHU2YI3LING2(-1);
			var _ans288 = YI3;
			var _ans289 = ZAO4XI1(_ans286)(_ans287)(_ans288);
			return _ans289;
		};
		var _ans290 = BU4KE3SUAN4SHU4HU1(JIA3);
		if (_ans290) {
			var _ans291 = FU2;
			var _ans292 = JIA3;
			var _ans293 = YI3;
			var _ans294 = ZAO4XI1(_ans291)(_ans292)(_ans293);
			return _ans294;
		};
		if (YI3 > ZHI4JU4SHU4) {
			var _ans295 = FU2;
			var _ans296 = YI3;
			var _ans297 = YI3;
			var _ans298 = ZAO4XI1(_ans295)(_ans296)(_ans297);
			return _ans298;
		};
		if (YI3 >= 1) {
			var JU4 = () => 0;
			JU4 = function(BING3) {
				var _ans299 = BING3 * JIN4ZHI4;
				if (_ans299 > YI3) {
					return true;
				} else {
					return false;
				};
			};
			var _ans300 = ZHI4DA4ZHI3;
			var _ans301 = FU2DIAN3YI1;
			var _ans302 = JIN4ZHI4;
			var _ans303 = CHENG2;
			var _ans304 = JU4;
			var _ans305 = SHI4JIE4(_ans300)(_ans301)(_ans302)(_ans303)(_ans304);
			var WEI4BIAO3 = _ans305;
			var _ans306 = WEI4BIAO3["引"];
			var WEI4 = _ans306;
			var _ans307 = WEI4BIAO3["實"];
			var _ans308 = YI3 / _ans307;
			var BEN3 = _ans308;
			var _ans309 = FU2;
			var _ans310 = WEI4;
			var _ans311 = BEN3;
			var _ans312 = ZAO4XI1(_ans309)(_ans310)(_ans311);
			return _ans312;
		} else {
			var JU4 = () => 0;
			JU4 = function(BING3) {
				if (BING3 <= YI3) {
					return true;
				} else {
					return false;
				};
			};
			var _ans313 = ZONG3SUAN4WEI4 - ZHI4XIAO3ZHI3;
			var _ans314 = FU2DIAN3YI1;
			var _ans315 = TUI4ZHI4;
			var _ans316 = CHENG2;
			var _ans317 = JU4;
			var _ans318 = SHI4JIE4(_ans313)(_ans314)(_ans315)(_ans316)(_ans317);
			var WEI4BIAO3 = _ans318;
			var _ans319 = WEI4BIAO3["引"];
			var _ans320 = 0 - _ans319;
			var WEI4 = _ans320;
			var _ans321 = WEI4BIAO3["實"];
			var _ans322 = YI3 / _ans321;
			var BEN3 = _ans322;
			var _ans323 = FU2;
			var _ans324 = WEI4;
			var _ans325 = BEN3;
			var _ans326 = ZAO4XI1(_ans323)(_ans324)(_ans325);
			return _ans326;
		};
	};
	var _ans327 = SHANG4WEI4MI4 / 4;
	var ZHENG3CHU2DA4SHU4XIAN4 = _ans327; /*"取底除。同Javascript之{ 商: Math.floor(x / y), 餘: x - y * quo }也。"*/
	var QU3DI3CHU2 = this.QU3DI3CHU2 = () => 0;
	QU3DI3CHU2 = this.QU3DI3CHU2 = function(SHI2) {
		return function(FA3) {
			var _ans328 = ZHENG4FU4(FA3);
			var FA3FU2 = _ans328;
			var _ans329 = FA3 * FA3FU2;
			var FA3ZHI2 = _ans329;
			var _ans330 = SHI2 * FA3FU2;
			var YI3 = _ans330;
			var _ans331 = ZHENG4FU4(YI3);
			var YI3FU2 = _ans331;
			var _ans332 = YI3 * YI3FU2;
			var SHI2ZHI2 = _ans332;
			var _ans333 = SHI2ZHI2 % FA3ZHI2;
			var YU2 = _ans333;
			var _ans334 = SHI2ZHI2 - YU2;
			var _ans335 = _ans334 / FA3ZHI2;
			var _ans336 = QU3ZHENG3(_ans335);
			var SHANG1 = _ans336;
			if (YI3FU2 < 0) {
				if (YU2 != 0) {
					var _ans337 = -1 - SHANG1;
					SHANG1 = _ans337;
					var _ans338 = FA3ZHI2 - YU2;
					YU2 = _ans338;
				};
			};
			var SHANG1YU2 = {};
			SHANG1YU2 = {
				"商": SHANG1,
				"餘": YU2,
			};
			return SHANG1YU2;
		};
	}; /*"取整除。同Javascript之{ 商: Math.round(x / y), 餘: x - y * quo }也。"*/
	var QU3ZHENG3CHU2 = this.QU3ZHENG3CHU2 = () => 0;
	QU3ZHENG3CHU2 = this.QU3ZHENG3CHU2 = function(SHI2) {
		return function(FA3) {
			var _ans339 = ZHENG4FU4(FA3);
			var FA3FU2 = _ans339;
			var _ans340 = FA3 * FA3FU2;
			var FA3ZHI2 = _ans340;
			var _ans341 = ZHENG4FU4(SHI2);
			var SHI2FU2 = _ans341;
			var _ans342 = SHI2 * SHI2FU2;
			var SHI2ZHI2 = _ans342;
			var _ans343 = SHI2FU2 * FA3FU2;
			var FU2 = _ans343;
			var _ans344 = SHI2ZHI2 % FA3ZHI2;
			var YU2 = _ans344;
			var _ans345 = SHI2ZHI2 - YU2;
			var _ans346 = _ans345 / FA3ZHI2;
			var _ans347 = QU3ZHENG3(_ans346);
			var SHANG1 = _ans347;
			var _ans348 = FA3ZHI2 / 2;
			if (YU2 >= _ans348) {
				var _ans349 = SHANG1 + 1;
				SHANG1 = _ans349;
				var _ans350 = YU2 - FA3ZHI2;
				YU2 = _ans350;
			};
			var _ans351 = SHANG1 * FU2;
			SHANG1 = _ans351;
			var _ans352 = YU2 * FU2;
			YU2 = _ans352;
			var SHANG1YU2 = {};
			SHANG1YU2 = {
				"商": SHANG1,
				"餘": YU2,
			};
			return SHANG1YU2;
		};
	};
	var BAN4YUAN2ZHOU1LV4MI4LV4 = [];
	var _ans353 = FU2DIAN3YI2WEI4(884279719003555)(-49);
	BAN4YUAN2ZHOU1LV4MI4LV4.push(_ans353);
	var _ans354 = FU2DIAN3YI2WEI4(4967757600021511)(-106);
	BAN4YUAN2ZHOU1LV4MI4LV4.push(_ans354);
	var FEN1SI4XIANG4 = () => 0;
	FEN1SI4XIANG4 = function(JIA3) {
		return function(SHANG4XIAN4) {
			/*"甲須為有限非零數。"*/ /*"術尚不精。當以極密率除之。"*/
			var _ans355 = JIA3;
			var _ans356 = BAN4YUAN2ZHOU1LV4MI4LV4[1 - 1];
			var _ans357 = QU3ZHENG3CHU2(_ans355)(_ans356);
			var YI3 = _ans357;
			var _ans358 = YI3["商"];
			var SHANG1 = _ans358;
			var _ans359 = YI3["餘"];
			var YU2 = _ans359; /*"半圓周率弧度即一象。"*/
			var _ans360 = JUE2DUI4(SHANG1);
			if (_ans360 >= ZHENG3CHU2DA4SHU4XIAN4) {
				/*"商甚大。或算位不足而謬之。"*/
				var YI2WEI4 = 4;
				var _ans361 = JIA3;
				var _ans362 = 0 - YI2WEI4;
				var _ans363 = FU2DIAN3YI2WEI4(_ans361)(_ans362);
				var _ans364 = SHANG4XIAN4;
				var _ans365 = FEN1SI4XIANG4(_ans363)(_ans364);
				var _ans366 = _ans365["角"];
				var _ans367 = YI2WEI4;
				var _ans368 = FU2DIAN3YI2WEI4(_ans366)(_ans367);
				var _ans369 = SHANG4XIAN4;
				var _ans370 = FEN1SI4XIANG4(_ans368)(_ans369);
				return _ans370;
			};
			var _ans371 = QU3DI3CHU2(SHANG1)(4);
			var _ans372 = _ans371["餘"];
			var XIANG4_ = _ans372;
			var _ans373 = BAN4YUAN2ZHOU1LV4MI4LV4[2 - 1];
			var _ans374 = _ans373 * SHANG1;
			var _ans375 = YU2 - _ans374;
			YU2 = _ans375;
			var _ans376 = JUE2DUI4(YU2);
			if (_ans376 > SHANG4XIAN4) {
				var _ans377 = FEN1SI4XIANG4(YU2)(SHANG4XIAN4);
				var JIE3 = _ans377;
				var _ans378 = JIE3["象"];
				var _ans379 = XIANG4_ + _ans378;
				var _ans380 = 4;
				var _ans381 = QU3DI3CHU2(_ans379)(_ans380);
				var _ans382 = _ans381["餘"];
				JIE3["象"] = _ans382;
				return JIE3;
			} else {
				var JIE3 = {};
				JIE3 = {
					"角": YU2,
					"象": XIANG4_,
				};
				return JIE3;
			};
		};
	};
	var ZHENG4YU2XIAN2JIAO3XIAN4 = 0.79; /*"略大於四十五度。"*/
	var ZHENG4XIAN2DUO1XIANG4SHI4 = [];
	var _ans383 = -1 / 6;
	ZHENG4XIAN2DUO1XIANG4SHI4.push(_ans383);
	var _ans384 = 1 / 120;
	ZHENG4XIAN2DUO1XIANG4SHI4.push(_ans384);
	var _ans385 = -1 / 5040;
	ZHENG4XIAN2DUO1XIANG4SHI4.push(_ans385);
	var _ans386 = 1 / 362880;
	ZHENG4XIAN2DUO1XIANG4SHI4.push(_ans386);
	var _ans387 = -1 / 39916800;
	ZHENG4XIAN2DUO1XIANG4SHI4.push(_ans387);
	var _ans388 = 1 / 6227020800;
	ZHENG4XIAN2DUO1XIANG4SHI4.push(_ans388);
	var _ans389 = -1 / 1307674368000;
	ZHENG4XIAN2DUO1XIANG4SHI4.push(_ans389);
	var _ans390 = 1 / 355687428096000;
	ZHENG4XIAN2DUO1XIANG4SHI4.push(_ans390);
	var YU2XIAN2DUO1XIANG4SHI4 = [];
	var _ans391 = -1 / 2;
	YU2XIAN2DUO1XIANG4SHI4.push(_ans391);
	var _ans392 = 1 / 24;
	YU2XIAN2DUO1XIANG4SHI4.push(_ans392);
	var _ans393 = -1 / 720;
	YU2XIAN2DUO1XIANG4SHI4.push(_ans393);
	var _ans394 = 1 / 40320;
	YU2XIAN2DUO1XIANG4SHI4.push(_ans394);
	var _ans395 = -1 / 3628800;
	YU2XIAN2DUO1XIANG4SHI4.push(_ans395);
	var _ans396 = 1 / 479001600;
	YU2XIAN2DUO1XIANG4SHI4.push(_ans396);
	var _ans397 = -1 / 87178291200;
	YU2XIAN2DUO1XIANG4SHI4.push(_ans397);
	var _ans398 = 1 / 20922789888000;
	YU2XIAN2DUO1XIANG4SHI4.push(_ans398); /*"正弦。同Javascript之Math.sin也。"*/
	var ZHENG4XIAN2 = this.ZHENG4XIAN2 = () => 0;
	ZHENG4XIAN2 = this.ZHENG4XIAN2 = function(JIA3) {
		/*"數小甚矣。乃得其身。否則以泰勒展開求之。復以週期性得其餘。"*/
		var _ans399 = JUE2DUI4(JIA3);
		var YI3 = _ans399;
		if (YI3 < XIA4WEI4MI4) {
			return JIA3;
		};
		if (YI3 < ZHENG4YU2XIAN2JIAO3XIAN4) {
			var _ans400 = JIA3 * JIA3;
			var ER4CI4MI4 = _ans400;
			var _ans401 = QIU2DUO1XIANG4SHI4(ZHENG4XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
			var _ans402 = _ans401 * ER4CI4MI4;
			var _ans403 = _ans402 * JIA3;
			var _ans404 = JIA3 + _ans403;
			return _ans404;
		};
		if (YI3 <= ZHI4JU4SHU4) {
			var _ans405 = FEN1SI4XIANG4(JIA3)(ZHENG4YU2XIAN2JIAO3XIAN4);
			var BING3 = _ans405;
			var _ans406 = BING3["角"];
			var DING1 = _ans406;
			var _ans407 = BING3["象"];
			var XIANG4_ = _ans407;
			var _ans408 = DING1 * DING1;
			var ER4CI4MI4 = _ans408;
			if (XIANG4_ == 0) {
				var _ans409 = QIU2DUO1XIANG4SHI4(ZHENG4XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans410 = _ans409 * ER4CI4MI4;
				var _ans411 = _ans410 * DING1;
				var _ans412 = DING1 + _ans411;
				return _ans412;
			};
			if (XIANG4_ == 1) {
				var _ans413 = QIU2DUO1XIANG4SHI4(YU2XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans414 = _ans413 * ER4CI4MI4;
				var _ans415 = 1 + _ans414;
				return _ans415;
			};
			if (XIANG4_ == 2) {
				var _ans416 = QIU2DUO1XIANG4SHI4(ZHENG4XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans417 = _ans416 * ER4CI4MI4;
				var _ans418 = _ans417 * DING1;
				var _ans419 = DING1 + _ans418;
				var _ans420 = _ans419 * -1;
				return _ans420;
			};
			if (XIANG4_ == 3) {
				var _ans421 = QIU2DUO1XIANG4SHI4(YU2XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans422 = _ans421 * ER4CI4MI4;
				var _ans423 = -1 - _ans422;
				return _ans423;
			};
		};
		var _ans424 = BU4KE3SUAN4SHU4HU1(JIA3);
		if (_ans424) {
			return JIA3;
		};
		var _ans425 = BU4KE3SUAN4();
		return _ans425;
	}; /*"餘弦。同Javascript之Math.cos也。"*/
	var YU2XIAN2 = this.YU2XIAN2 = () => 0;
	YU2XIAN2 = this.YU2XIAN2 = function(JIA3) {
		/*"餘弦者。蓋正弦之變化所得。"*/
		var _ans426 = JUE2DUI4(JIA3);
		var YI3 = _ans426;
		if (YI3 < XIA4WEI4MI4) {
			return 1;
		};
		if (YI3 < ZHENG4YU2XIAN2JIAO3XIAN4) {
			var _ans427 = JIA3 * JIA3;
			var ER4CI4MI4 = _ans427;
			var _ans428 = QIU2DUO1XIANG4SHI4(YU2XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
			var _ans429 = _ans428 * ER4CI4MI4;
			var _ans430 = _ans429 + 1;
			return _ans430;
		};
		if (YI3 <= ZHI4JU4SHU4) {
			var _ans431 = FEN1SI4XIANG4(JIA3)(ZHENG4YU2XIAN2JIAO3XIAN4);
			var BING3 = _ans431;
			var _ans432 = BING3["角"];
			var DING1 = _ans432;
			var _ans433 = BING3["象"];
			var XIANG4_ = _ans433;
			var _ans434 = DING1 * DING1;
			var ER4CI4MI4 = _ans434;
			if (XIANG4_ == 0) {
				var _ans435 = QIU2DUO1XIANG4SHI4(YU2XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans436 = _ans435 * ER4CI4MI4;
				var _ans437 = 1 + _ans436;
				return _ans437;
			};
			if (XIANG4_ == 1) {
				var _ans438 = QIU2DUO1XIANG4SHI4(ZHENG4XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans439 = _ans438 * ER4CI4MI4;
				var _ans440 = _ans439 * DING1;
				var _ans441 = DING1 + _ans440;
				var _ans442 = _ans441 * -1;
				return _ans442;
			};
			if (XIANG4_ == 2) {
				var _ans443 = QIU2DUO1XIANG4SHI4(YU2XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans444 = _ans443 * ER4CI4MI4;
				var _ans445 = -1 - _ans444;
				return _ans445;
			};
			if (XIANG4_ == 3) {
				var _ans446 = QIU2DUO1XIANG4SHI4(ZHENG4XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans447 = _ans446 * ER4CI4MI4;
				var _ans448 = _ans447 * DING1;
				var _ans449 = DING1 + _ans448;
				return _ans449;
			};
		};
		var _ans450 = BU4KE3SUAN4SHU4HU1(JIA3);
		if (_ans450) {
			return JIA3;
		};
		var _ans451 = BU4KE3SUAN4();
		return _ans451;
	};
	var FAN3ZHENG4XIAN2DUO1XIANG4SHI4 = [];
	FAN3ZHENG4XIAN2DUO1XIANG4SHI4.push(0.16666666666666646);
	FAN3ZHENG4XIAN2DUO1XIANG4SHI4.push(0.075000000000231853);
	FAN3ZHENG4XIAN2DUO1XIANG4SHI4.push(0.044642857099518776);
	FAN3ZHENG4XIAN2DUO1XIANG4SHI4.push(0.030381947612588188);
	FAN3ZHENG4XIAN2DUO1XIANG4SHI4.push(0.022372039724067996);
	FAN3ZHENG4XIAN2DUO1XIANG4SHI4.push(0.017355408429699168);
	FAN3ZHENG4XIAN2DUO1XIANG4SHI4.push(0.01392791627807614);
	FAN3ZHENG4XIAN2DUO1XIANG4SHI4.push(0.011888530510538809);
	FAN3ZHENG4XIAN2DUO1XIANG4SHI4.push(0.0077401244180669033);
	FAN3ZHENG4XIAN2DUO1XIANG4SHI4.push(0.016223422623182562);
	FAN3ZHENG4XIAN2DUO1XIANG4SHI4.push(-0.01106652157807397);
	FAN3ZHENG4XIAN2DUO1XIANG4SHI4.push(0.028400749201451962); /*"反正弦。同Javascript之Math.asin也。"*/
	var FAN3ZHENG4XIAN2 = this.FAN3ZHENG4XIAN2 = () => 0;
	FAN3ZHENG4XIAN2 = this.FAN3ZHENG4XIAN2 = function(JIA3) {
		/*"小於五分者。以多項式求之。其餘以三角恆等式變化可得。"*/
		var _ans452 = ZHENG4FU4(JIA3);
		var FU2 = _ans452;
		var _ans453 = JIA3 * FU2;
		var YI3 = _ans453;
		var FEI1CHANG2 = true;
		if (YI3 > 0) {
			if (YI3 <= 1) {
				FEI1CHANG2 = false;
			};
		};
		if (FEI1CHANG2) {
			if (JIA3 == 0) {
				return JIA3;
			};
			var _ans454 = BU4KE3SUAN4SHU4HU1(JIA3);
			if (_ans454) {
				return JIA3;
			};
			var _ans455 = BU4KE3SUAN4();
			return _ans455;
		};
		if (YI3 > 0.5) {
			var _ans456 = 1 - YI3;
			var _ans457 = _ans456 / 2;
			var BING3 = _ans457;
			var _ans458 = PING2FANG1GEN1(BING3);
			var _ans459 = _ans458 * 2;
			var DING1 = _ans459;
			var _ans460 = QIU2DUO1XIANG4SHI4(FAN3ZHENG4XIAN2DUO1XIANG4SHI4)(BING3);
			var _ans461 = _ans460 * BING3;
			var _ans462 = _ans461 * DING1;
			var _ans463 = _ans462 + DING1;
			var WU4 = _ans463;
			var _ans464 = BAN4YUAN2ZHOU1LV4MI4LV4[2 - 1];
			var _ans465 = _ans464 - WU4;
			var JI3 = _ans465;
			var _ans466 = BAN4YUAN2ZHOU1LV4MI4LV4[1 - 1];
			var _ans467 = JI3 + _ans466;
			var _ans468 = _ans467 * FU2;
			return _ans468;
		} else {
			var _ans469 = YI3 * YI3;
			var BING3 = _ans469;
			var _ans470 = QIU2DUO1XIANG4SHI4(FAN3ZHENG4XIAN2DUO1XIANG4SHI4)(BING3);
			var _ans471 = _ans470 * BING3;
			var _ans472 = _ans471 * JIA3;
			var _ans473 = JIA3 + _ans472;
			return _ans473;
		};
	}; /*"反餘弦。同Javascript之Math.acos也。"*/
	var FAN3YU2XIAN2 = this.FAN3YU2XIAN2 = () => 0;
	FAN3YU2XIAN2 = this.FAN3YU2XIAN2 = function(JIA3) {
		/*"反餘弦者。蓋反正弦之變化所得。"*/
		var _ans474 = JUE2DUI4(JIA3);
		var YI3 = _ans474;
		var FEI1CHANG2 = true;
		if (YI3 <= 1) {
			FEI1CHANG2 = false;
		};
		if (FEI1CHANG2) {
			var _ans475 = BU4KE3SUAN4SHU4HU1(JIA3);
			if (_ans475) {
				return JIA3;
			};
			var _ans476 = BU4KE3SUAN4();
			return _ans476;
		};
		if (YI3 > 0.5) {
			var _ans477 = 1 - YI3;
			var _ans478 = _ans477 / 2;
			var BING3 = _ans478;
			var _ans479 = PING2FANG1GEN1(BING3);
			var _ans480 = _ans479 * 2;
			var DING1 = _ans480;
			var _ans481 = QIU2DUO1XIANG4SHI4(FAN3ZHENG4XIAN2DUO1XIANG4SHI4)(BING3);
			var _ans482 = _ans481 * BING3;
			var _ans483 = _ans482 * DING1;
			var _ans484 = _ans483 + DING1;
			var WU4 = _ans484;
			if (JIA3 > 0) {
				return WU4;
			} else {
				var _ans485 = BAN4YUAN2ZHOU1LV4MI4LV4[2 - 1];
				var _ans486 = _ans485 * 2;
				var _ans487 = _ans486 - WU4;
				var JI3 = _ans487;
				var _ans488 = BAN4YUAN2ZHOU1LV4MI4LV4[1 - 1];
				var _ans489 = _ans488 * 2;
				var _ans490 = JI3 + _ans489;
				return _ans490;
			};
		} else {
			var _ans491 = YI3 * YI3;
			var BING3 = _ans491;
			var _ans492 = QIU2DUO1XIANG4SHI4(FAN3ZHENG4XIAN2DUO1XIANG4SHI4)(BING3);
			var _ans493 = _ans492 * BING3;
			var _ans494 = _ans493 * JIA3;
			var _ans495 = JIA3 + _ans494;
			var WU4 = _ans495;
			var _ans496 = BAN4YUAN2ZHOU1LV4MI4LV4[2 - 1];
			var _ans497 = _ans496 - WU4;
			var JI3 = _ans497;
			var _ans498 = BAN4YUAN2ZHOU1LV4MI4LV4[1 - 1];
			var _ans499 = JI3 + _ans498;
			return _ans499;
		};
	}; /*"正切。同Javascript之Math.tan也。"*/
	var ZHENG4QIE1 = this.ZHENG4QIE1 = () => 0;
	ZHENG4QIE1 = this.ZHENG4QIE1 = function(JIA3) {
		/*"數小甚矣。乃得其身。其餘或以三角恆等式。或以週期性可得。"*/
		var _ans500 = JUE2DUI4(JIA3);
		var YI3 = _ans500;
		if (YI3 < XIA4WEI4MI4) {
			return JIA3;
		};
		if (YI3 < ZHENG4YU2XIAN2JIAO3XIAN4) {
			var _ans501 = JIA3 * JIA3;
			var ER4CI4MI4 = _ans501;
			var _ans502 = QIU2DUO1XIANG4SHI4(ZHENG4XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
			var _ans503 = _ans502 * ER4CI4MI4;
			var _ans504 = _ans503 * JIA3;
			var _ans505 = JIA3 + _ans504;
			var GOU1 = _ans505;
			var _ans506 = QIU2DUO1XIANG4SHI4(YU2XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
			var _ans507 = _ans506 * ER4CI4MI4;
			var _ans508 = _ans507 + 1;
			var GU3 = _ans508;
			var _ans509 = GOU1 / GU3;
			return _ans509;
		};
		if (YI3 <= ZHI4JU4SHU4) {
			var _ans510 = FEN1SI4XIANG4(JIA3)(ZHENG4YU2XIAN2JIAO3XIAN4);
			var BING3 = _ans510;
			var _ans511 = BING3["角"];
			var DING1 = _ans511;
			var _ans512 = BING3["象"];
			var XIANG4_ = _ans512;
			var _ans513 = DING1 * DING1;
			var ER4CI4MI4 = _ans513;
			if (XIANG4_ == 0) {
				var _ans514 = QIU2DUO1XIANG4SHI4(ZHENG4XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans515 = _ans514 * ER4CI4MI4;
				var _ans516 = _ans515 * DING1;
				var _ans517 = DING1 + _ans516;
				var GOU1 = _ans517;
				var _ans518 = QIU2DUO1XIANG4SHI4(YU2XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans519 = _ans518 * ER4CI4MI4;
				var _ans520 = 1 + _ans519;
				var GU3 = _ans520;
				var _ans521 = GOU1 / GU3;
				return _ans521;
			};
			if (XIANG4_ == 1) {
				var _ans522 = QIU2DUO1XIANG4SHI4(YU2XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans523 = _ans522 * ER4CI4MI4;
				var _ans524 = 1 + _ans523;
				var GOU1 = _ans524;
				var _ans525 = QIU2DUO1XIANG4SHI4(ZHENG4XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans526 = _ans525 * ER4CI4MI4;
				var _ans527 = _ans526 * DING1;
				var _ans528 = DING1 + _ans527;
				var _ans529 = _ans528 * -1;
				var GU3 = _ans529;
				var _ans530 = GOU1 / GU3;
				return _ans530;
			};
			if (XIANG4_ == 2) {
				var _ans531 = QIU2DUO1XIANG4SHI4(ZHENG4XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans532 = _ans531 * ER4CI4MI4;
				var _ans533 = _ans532 * DING1;
				var _ans534 = DING1 + _ans533;
				var _ans535 = _ans534 * -1;
				var GOU1 = _ans535;
				var _ans536 = QIU2DUO1XIANG4SHI4(YU2XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans537 = _ans536 * ER4CI4MI4;
				var _ans538 = -1 - _ans537;
				var GU3 = _ans538;
				var _ans539 = GOU1 / GU3;
				return _ans539;
			};
			if (XIANG4_ == 3) {
				var _ans540 = QIU2DUO1XIANG4SHI4(YU2XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans541 = _ans540 * ER4CI4MI4;
				var _ans542 = -1 - _ans541;
				var GOU1 = _ans542;
				var _ans543 = QIU2DUO1XIANG4SHI4(ZHENG4XIAN2DUO1XIANG4SHI4)(ER4CI4MI4);
				var _ans544 = _ans543 * ER4CI4MI4;
				var _ans545 = _ans544 * DING1;
				var _ans546 = DING1 + _ans545;
				var GU3 = _ans546;
				var _ans547 = GOU1 / GU3;
				return _ans547;
			};
		};
		var _ans548 = BU4KE3SUAN4SHU4HU1(JIA3);
		if (_ans548) {
			return JIA3;
		};
		var _ans549 = BU4KE3SUAN4();
		return _ans549;
	};
	var FAN3ZHENG4QIE1DUO1XIANG4SHI4 = [];
	FAN3ZHENG4QIE1DUO1XIANG4SHI4.push(-0.33333333333333326);
	FAN3ZHENG4QIE1DUO1XIANG4SHI4.push(0.19999999999992268);
	FAN3ZHENG4QIE1DUO1XIANG4SHI4.push(-0.14285714284210957);
	FAN3ZHENG4QIE1DUO1XIANG4SHI4.push(0.11111110996568103);
	FAN3ZHENG4QIE1DUO1XIANG4SHI4.push(-0.090909045736192809);
	FAN3ZHENG4QIE1DUO1XIANG4SHI4.push(0.076922022110850696);
	FAN3ZHENG4QIE1DUO1XIANG4SHI4.push(-0.066650962737093755);
	FAN3ZHENG4QIE1DUO1XIANG4SHI4.push(0.058668191246172313);
	FAN3ZHENG4QIE1DUO1XIANG4SHI4.push(-0.051590554508407487);
	FAN3ZHENG4QIE1DUO1XIANG4SHI4.push(0.04288146123573456);
	FAN3ZHENG4QIE1DUO1XIANG4SHI4.push(-0.029030170160975751);
	FAN3ZHENG4QIE1DUO1XIANG4SHI4.push(0.011208491193087792); /*"反正切。同Javascript之Math.atan也。"*/
	var FAN3ZHENG4QIE1 = this.FAN3ZHENG4QIE1 = () => 0;
	FAN3ZHENG4QIE1 = this.FAN3ZHENG4QIE1 = function(JIA3) {
		/*"小於五分者。以多項式求之。其餘以三角恆等式變化可得。"*/
		var _ans550 = ZHENG4FU4(JIA3);
		var FU2 = _ans550;
		var _ans551 = JIA3 * FU2;
		var YI3 = _ans551;
		var FEI1CHANG2 = true;
		if (YI3 > 0) {
			if (YI3 <= ZHI4JU4SHU4) {
				FEI1CHANG2 = false;
			};
		};
		if (FEI1CHANG2) {
			if (YI3 == 0) {
				return JIA3;
			};
			if (YI3 > ZHI4JU4SHU4) {
				var _ans552 = BAN4YUAN2ZHOU1LV4 * FU2;
				return _ans552;
			};
			return JIA3;
		};
		if (YI3 < 0.5) {
			var _ans553 = YI3 * YI3;
			var BING3 = _ans553;
			var _ans554 = QIU2DUO1XIANG4SHI4(FAN3ZHENG4QIE1DUO1XIANG4SHI4)(BING3);
			var _ans555 = _ans554 * BING3;
			var _ans556 = _ans555 * JIA3;
			var _ans557 = JIA3 + _ans556;
			return _ans557;
		} else if (YI3 > 2) {
			var _ans558 = 1 / YI3;
			var DING1 = _ans558;
			var _ans559 = DING1 * DING1;
			var BING3 = _ans559;
			var _ans560 = QIU2DUO1XIANG4SHI4(FAN3ZHENG4QIE1DUO1XIANG4SHI4)(BING3);
			var _ans561 = _ans560 * BING3;
			var _ans562 = _ans561 * DING1;
			var _ans563 = DING1 + _ans562;
			var WU4 = _ans563;
			var _ans564 = BAN4YUAN2ZHOU1LV4MI4LV4[2 - 1];
			var _ans565 = _ans564 - WU4;
			var JI3 = _ans565;
			var _ans566 = BAN4YUAN2ZHOU1LV4MI4LV4[1 - 1];
			var _ans567 = JI3 + _ans566;
			var _ans568 = _ans567 * FU2;
			return _ans568;
		} else {
			var _ans569 = YI3 - 1;
			var GENG1 = _ans569;
			var _ans570 = 1 + YI3;
			var _ans571 = GENG1 / _ans570;
			var DING1 = _ans571;
			var _ans572 = DING1 * DING1;
			var BING3 = _ans572;
			var _ans573 = QIU2DUO1XIANG4SHI4(FAN3ZHENG4QIE1DUO1XIANG4SHI4)(BING3);
			var _ans574 = _ans573 * BING3;
			var _ans575 = _ans574 * DING1;
			var _ans576 = DING1 + _ans575;
			var WU4 = _ans576;
			var _ans577 = BAN4YUAN2ZHOU1LV4MI4LV4[2 - 1];
			var _ans578 = _ans577 / 2;
			var _ans579 = WU4 + _ans578;
			var JI3 = _ans579;
			var _ans580 = BAN4YUAN2ZHOU1LV4MI4LV4[1 - 1];
			var _ans581 = _ans580 / 2;
			var _ans582 = JI3 + _ans581;
			var _ans583 = _ans582 * FU2;
			return _ans583;
		};
	}; /*"勾股求角。同Javascript之Math.atan2也。"*/
	var GOU1GU3QIU2JIAO3 = this.GOU1GU3QIU2JIAO3 = () => 0;
	GOU1GU3QIU2JIAO3 = this.GOU1GU3QIU2JIAO3 = function(JIA3) {
		return function(YI3) {
			/*"反正切之分類討論也"*/
			var _ans584 = JUE2DUI4(JIA3);
			if (_ans584 > ZHI4JU4SHU4) {
				var _ans585 = JUE2DUI4(YI3);
				if (_ans585 > ZHI4JU4SHU4) {
					var _ans586 = ZHENG4FU4(JIA3);
					var _ans587 = ZHENG4FU4(YI3);
					var _ans588 = GOU1GU3QIU2JIAO3(_ans586)(_ans587);
					return _ans588;
				};
			};
			if (YI3 == 0) {
				if (JIA3 > 0) {
					return BAN4YUAN2ZHOU1LV4;
				};
				if (JIA3 < 0) {
					var _ans589 = 0 - BAN4YUAN2ZHOU1LV4;
					return _ans589;
				};
				return 0;
			};
			var _ans590 = JIA3 / YI3;
			var _ans591 = FAN3ZHENG4QIE1(_ans590);
			var BING3 = _ans591;
			if (YI3 > 0) {
				return BING3;
			};
			if (JIA3 >= 0) {
				var _ans592 = BING3 + YUAN2ZHOU1LV4;
				return _ans592;
			};
			var _ans593 = BING3 - YUAN2ZHOU1LV4;
			return _ans593;
		};
	};
	var _ans594 = 5062973 / 2097152;
	var GOU1GU3QIU2XIAN2CHANG2SHU4SHANG4 = _ans594;
	var GOU1GU3QIU2XIAN2CHANG2SHU4XIA4 = -9.500605534182331127579030192143032812462e-8; /*"加二之平方根於一也。"*/ /*"勾股求弦。同Javascript之Math.hypot也。"*/
	var GOU1GU3QIU2XIAN2 = this.GOU1GU3QIU2XIAN2 = () => 0;
	GOU1GU3QIU2XIAN2 = this.GOU1GU3QIU2XIAN2 = function(GOU1) {
		return function(GU3) {
			var _ans595 = JUE2DUI4(GOU1);
			var JIA3 = _ans595;
			var _ans596 = JUE2DUI4(GU3);
			var YI3 = _ans596;
			if (JIA3 == 0) {
				return YI3;
			};
			if (YI3 == 0) {
				return JIA3;
			};
			if (JIA3 > ZHI4JU4SHU4) {
				return JIA3;
			};
			if (YI3 > ZHI4JU4SHU4) {
				return YI3;
			};
			var _ans597 = BU4KE3SUAN4SHU4HU1(JIA3);
			if (_ans597) {
				return JIA3;
			};
			var _ans598 = BU4KE3SUAN4SHU4HU1(YI3);
			if (_ans598) {
				return YI3;
			};
			if (YI3 > JIA3) {
				var JIE4 = JIA3;
				JIA3 = YI3;
				YI3 = JIE4;
			};
			var _ans599 = JIA3 - YI3;
			var BING3 = _ans599;
			if (BING3 == JIA3) {
				return JIA3;
			} else if (BING3 > YI3) {
				var _ans600 = JIA3 / YI3;
				var DING1 = _ans600;
				var _ans601 = DING1 * DING1;
				var _ans602 = 1 + _ans601;
				var _ans603 = PING2FANG1GEN1(_ans602);
				var _ans604 = DING1 + _ans603;
				var _ans605 = YI3 / _ans604;
				var _ans606 = JIA3 + _ans605;
				return _ans606;
			} else {
				var _ans607 = BING3 / YI3;
				var WU4 = _ans607;
				var _ans608 = 2 + WU4;
				var _ans609 = _ans608 * WU4;
				var JI3 = _ans609;
				var _ans610 = 2 + JI3;
				var _ans611 = PING2FANG1GEN1(_ans610);
				var _ans612 = ER4ZHI1PING2FANG1GEN1 + _ans611;
				var _ans613 = JI3 / _ans612;
				var GENG1 = _ans613;
				var _ans614 = GOU1GU3QIU2XIAN2CHANG2SHU4XIA4 + GENG1;
				var _ans615 = WU4 + _ans614;
				var _ans616 = GOU1GU3QIU2XIAN2CHANG2SHU4SHANG4 + _ans615;
				var _ans617 = YI3 / _ans616;
				var _ans618 = JIA3 + _ans617;
				return _ans618;
			};
		};
	};
	var _ans619 = 1453635 / 2097152;
	var ER4ZHI1DUI4SHU4SHANG4 = _ans619;
	var ER4ZHI1DUI4SHU4XIA4 = -1.90465429995776787854182343192449986564e-9;
	var DUI4SHU4DUO1XIANG4SHI4JIA3 = [];
	var _ans620 = 1 / 3;
	DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans620);
	var _ans621 = 1 / 5;
	DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans621);
	var _ans622 = 1 / 7;
	DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans622);
	var _ans623 = 1 / 9;
	DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans623);
	var _ans624 = 1 / 11;
	DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans624);
	var _ans625 = 1 / 13;
	DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans625);
	var _ans626 = 1 / 15;
	DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans626);
	var _ans627 = 1 / 17;
	DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans627);
	var _ans628 = 1 / 19;
	DUI4SHU4DUO1XIANG4SHI4JIA3.push(_ans628); /*" x^2 * f(x^2) = atanh(x)/x - 1 "*/ /*"對數。同Javascript之Math.log也。"*/
	var DUI4SHU4 = this.DUI4SHU4 = () => 0;
	DUI4SHU4 = this.DUI4SHU4 = function(JIA3) {
		/*"自然對數。"*/
		var FEI1CHANG2 = true;
		if (JIA3 > 0) {
			if (JIA3 <= ZHI4JU4SHU4) {
				FEI1CHANG2 = false;
			};
		};
		if (FEI1CHANG2) {
			if (JIA3 == 0) {
				var _ans629 = CHU2YI3LING2(-1);
				return _ans629;
			};
			if (JIA3 < 0) {
				var _ans630 = BU4KE3SUAN4();
				return _ans630;
			};
			return JIA3;
		}; /*"以對數屬性佐泰勒展開"*/
		var _ans631 = XI1FU2DIAN3SHU4(JIA3);
		var XI1JIA3 = _ans631;
		var _ans632 = XI1JIA3["位"];
		var WEI4 = _ans632;
		var _ans633 = XI1JIA3["本"];
		var BEN3 = _ans633;
		if (BEN3 > ER4ZHI1PING2FANG1GEN1) {
			var _ans634 = WEI4 + 1;
			WEI4 = _ans634;
			var _ans635 = BEN3 / 2;
			BEN3 = _ans635;
		};
		var _ans636 = WEI4 * ER4ZHI1DUI4SHU4;
		var YI3 = _ans636;
		var _ans637 = BEN3 - 1;
		var FEN1ZI3 = _ans637;
		var _ans638 = BEN3 + 1;
		var _ans639 = FEN1ZI3 / _ans638;
		var BING3 = _ans639;
		var _ans640 = BING3 * BING3;
		var ER4CI4MI4 = _ans640;
		var _ans641 = QIU2DUO1XIANG4SHI4(DUI4SHU4DUO1XIANG4SHI4JIA3)(ER4CI4MI4);
		var _ans642 = _ans641 * ER4CI4MI4;
		var _ans643 = _ans642 * BING3;
		var _ans644 = BING3 + _ans643;
		var _ans645 = _ans644 * 2;
		var _ans646 = _ans645 + YI3;
		return _ans646;
	};
	var _ans647 = ZHI4DA4ZHI3 + 2;
	var _ans648 = _ans647 * ER4ZHI1DUI4SHU4;
	var ZHI3SHU4SHANG4YI4XIAN4 = _ans648;
	var _ans649 = ZHI4XIAO3ZHI3 - ZONG3SUAN4WEI4;
	var _ans650 = _ans649 - 1;
	var _ans651 = _ans650 * ER4ZHI1DUI4SHU4;
	var ZHI3SHU4XIA4YI4XIAN4 = _ans651;
	var ZHI3SHU4DUO1XIANG4SHI4JIA3 = [];
	var _ans652 = 1 / 3;
	ZHI3SHU4DUO1XIANG4SHI4JIA3.push(_ans652);
	var _ans653 = -1 / 45;
	ZHI3SHU4DUO1XIANG4SHI4JIA3.push(_ans653);
	var _ans654 = 2 / 945;
	ZHI3SHU4DUO1XIANG4SHI4JIA3.push(_ans654);
	var _ans655 = -1 / 4725;
	ZHI3SHU4DUO1XIANG4SHI4JIA3.push(_ans655);
	var _ans656 = 2 / 93555;
	ZHI3SHU4DUO1XIANG4SHI4JIA3.push(_ans656);
	var _ans657 = -1382 / 638512875;
	ZHI3SHU4DUO1XIANG4SHI4JIA3.push(_ans657); /*" x^2 * f(x^2) = x/tanh(x) - 1 "*/ /*"指數。同Javascript之Math.exp也。"*/
	var ZHI3SHU4 = this.ZHI3SHU4 = () => 0;
	ZHI3SHU4 = this.ZHI3SHU4 = function(JIA3) {
		/*"自然指數。"*/
		var FEI1CHANG2 = true;
		if (JIA3 < ZHI3SHU4SHANG4YI4XIAN4) {
			if (JIA3 > ZHI3SHU4XIA4YI4XIAN4) {
				FEI1CHANG2 = false;
			};
		};
		if (FEI1CHANG2) {
			var _ans658 = BU4KE3SUAN4SHU4HU1(JIA3);
			if (_ans658) {
				return JIA3;
			};
			if (JIA3 > 0) {
				if (JIA3 > ZHI4JU4SHU4) {
					return JIA3;
				} else {
					var _ans659 = SHANG4YI4(1);
					return _ans659;
				};
			} else {
				var _ans660 = ZHI4JU4SHU4 * -1;
				if (JIA3 < _ans660) {
					return FU2DIAN3LING2;
				} else {
					var _ans661 = XIA4YI4(1);
					return _ans661;
				};
			};
		};
		var _ans662 = JIA3 / ER4ZHI1DUI4SHU4;
		var _ans663 = QU3ZHENG3(_ans662);
		var YI2WEI4SHU4 = _ans663;
		var _ans664 = YI2WEI4SHU4 * ER4ZHI1DUI4SHU4SHANG4;
		var _ans665 = JIA3 - _ans664;
		var YI3 = _ans665;
		var _ans666 = YI2WEI4SHU4 * ER4ZHI1DUI4SHU4XIA4;
		var _ans667 = YI3 - _ans666;
		var BING3 = _ans667; /*"除二之對數於甲。其餘者丙。以密率求之。"*/
		var _ans668 = BING3 / 2;
		var DING1 = _ans668;
		var _ans669 = DING1 * DING1;
		var WU4 = _ans669;
		var _ans670 = QIU2DUO1XIANG4SHI4(ZHI3SHU4DUO1XIANG4SHI4JIA3)(WU4);
		var _ans671 = _ans670 * WU4;
		var _ans672 = DING1 - _ans671;
		var JI3 = _ans672;
		var _ans673 = 1 - JI3;
		var _ans674 = BING3 / _ans673;
		var _ans675 = 1 + _ans674;
		var GENG1 = _ans675;
		var _ans676 = FU2DIAN3YI2WEI4(GENG1)(YI2WEI4SHU4);
		return _ans676;
	};
	var DUI4SHU4DUO1XIANG4SHI4YI3SHANG4 = [];
	DUI4SHU4DUO1XIANG4SHI4YI3SHANG4.push(0.33331724229478565391105, 0.20431337379679007093536);
	var DUI4SHU4DUO1XIANG4SHI4YI3XIA4 = [];
	DUI4SHU4DUO1XIANG4SHI4YI3XIA4.push(1.6091038547679431e-5, -0.0043133737967901067, 0.14285714285717646, 0.11111111109925075, 0.090909092988218018, 0.076922873303695544, 0.066678321857932515, 0.058437264131467867, 0.059443884378751484); /*" x^2 * (f0(x^2) + f1(x^2)) = atanh(x)/x - 1 "*/
	var ZHENG4SHU4ZHI1MI4 = () => 0;
	ZHENG4SHU4ZHI1MI4 = function(DI3) {
		return function(ZHI3_) {
			/*"底為有限正數。指為有限數。"*/ /*"以下求底之對數。"*/
			var _ans677 = XI1FU2DIAN3SHU4(DI3);
			var XI1DI3 = _ans677;
			var _ans678 = XI1DI3["位"];
			var WEI4 = _ans678;
			var _ans679 = XI1DI3["本"];
			var BEN3 = _ans679;
			if (BEN3 > ER4ZHI1PING2FANG1GEN1) {
				var _ans680 = WEI4 + 1;
				WEI4 = _ans680;
				var _ans681 = BEN3 / 2;
				BEN3 = _ans681;
			};
			var _ans682 = BEN3 - 1;
			var BING3 = _ans682;
			var _ans683 = BEN3 + 1;
			var DING1 = _ans683;
			var _ans684 = BING3 / DING1;
			var WU4 = _ans684;
			var _ans685 = WU4;
			var _ans686 = WU4;
			var _ans687 = BEN3;
			var _ans688 = XIANG1CHENG2DE2SHUANG1(_ans686)(_ans687);
			var _ans689 = JIA1DAN1YU2SHUANG1(_ans685)(_ans688);
			var JI3 = _ans689;
			var _ans690 = BING3;
			var _ans691 = JI3;
			var _ans692 = YI3DAN1JIAN3SHUANG1DE2DAN1(_ans690)(_ans691);
			var _ans693 = _ans692 * -1;
			var _ans694 = _ans693 / DING1;
			var _ans695 = WU4;
			var _ans696 = YI3XIAO3JIA1DA4DE2SHUANG1(_ans694)(_ans695);
			var GENG1 = _ans696;
			var _ans697 = SHUANG1SHU4ZI4CHENG2(GENG1);
			var XIN1 = _ans697;
			var _ans698 = DUI4SHU4DUO1XIANG4SHI4YI3XIA4;
			var _ans699 = XIN1[1 - 1];
			var _ans700 = QIU2DUO1XIANG4SHI4(_ans698)(_ans699);
			var _ans701 = DUI4SHU4DUO1XIANG4SHI4YI3SHANG4[2 - 1];
			var _ans702 = XIN1;
			var _ans703 = CHENG2DAN1YU2SHUANG1(_ans701)(_ans702);
			var _ans704 = JIA1DAN1YU2SHUANG1(_ans700)(_ans703);
			var REN2 = _ans704;
			var _ans705 = DUI4SHU4DUO1XIANG4SHI4YI3SHANG4[1 - 1];
			var _ans706 = REN2;
			var _ans707 = JIA1DAN1YU2SHUANG1(_ans705)(_ans706);
			var _ans708 = XIN1;
			var _ans709 = CHENG2SHUANG1YU2SHUANG1(_ans707)(_ans708);
			var _ans710 = GENG1;
			var _ans711 = CHENG2SHUANG1YU2SHUANG1(_ans709)(_ans710);
			var _ans712 = GENG1;
			var _ans713 = JIA1SHUANG1YU2SHUANG1(_ans711)(_ans712);
			var GUI3 = _ans713;
			var _ans714 = GUI3[1 - 1];
			var _ans715 = _ans714 * 2;
			var _ans716 = ER4ZHI1DUI4SHU4SHANG4 * WEI4;
			var _ans717 = XIANG1JIA1DE2SHUANG1(_ans715)(_ans716);
			var ZI3 = _ans717;
			var _ans718 = GUI3[2 - 1];
			var _ans719 = _ans718 * 2;
			var CHOU3 = _ans719;
			var _ans720 = ZI3[2 - 1];
			var _ans721 = _ans720 + CHOU3;
			var YIN2 = _ans721;
			var _ans722 = ER4ZHI1DUI4SHU4XIA4 * WEI4;
			var _ans723 = _ans722 + YIN2;
			var _ans724 = ZI3[1 - 1];
			var _ans725 = YI3XIAO3JIA1DA4DE2SHUANG1(_ans723)(_ans724);
			var DI3ZHI1DUI4SHU4 = _ans725; /*"以下求冪之對數。"*/
			var _ans726 = DI3ZHI1DUI4SHU4[1 - 1];
			var _ans727 = _ans726 * ZHI3_;
			var MAO3 = _ans727;
			if (MAO3 > ZHI3SHU4SHANG4YI4XIAN4) {
				var _ans728 = SHANG4YI4(1);
				return _ans728;
			} else if (MAO3 < ZHI3SHU4XIA4YI4XIAN4) {
				var _ans729 = XIA4YI4(1);
				return _ans729;
			};
			var _ans730 = ZHI3_;
			var _ans731 = DI3ZHI1DUI4SHU4;
			var _ans732 = CHENG2DAN1YU2SHUANG1(_ans730)(_ans731);
			var MI4ZHI1DUI4SHU4 = _ans732;
			var _ans733 = MI4ZHI1DUI4SHU4[1 - 1];
			var _ans734 = _ans733 / ER4ZHI1DUI4SHU4;
			var _ans735 = QU3ZHENG3(_ans734);
			var YI2WEI4SHU4 = _ans735;
			var _ans736 = YI2WEI4SHU4 * ER4ZHI1DUI4SHU4XIA4;
			var _ans737 = YI2WEI4SHU4 * ER4ZHI1DUI4SHU4SHANG4;
			var _ans738 = YI3XIAO3JIA1DA4DE2SHUANG1(_ans736)(_ans737);
			var _ans739 = SHUANG1SHU4QU3FAN3(_ans738);
			var _ans740 = MI4ZHI1DUI4SHU4;
			var _ans741 = JIA1SHUANG1YU2SHUANG1(_ans739)(_ans740);
			var CHEN2 = _ans741;
			var _ans742 = CHEN2[1 - 1];
			var _ans743 = ZHI3SHU4(_ans742);
			var _ans744 = YI2WEI4SHU4;
			var _ans745 = FU2DIAN3YI2WEI4(_ans743)(_ans744);
			return _ans745;
		};
	}; /*"冪。同Javascript之Math.pow也。"*/
	var MI4 = this.MI4 = () => 0;
	MI4 = this.MI4 = function(DI3) {
		return function(ZHI3_) {
			if (ZHI3_ == 0) {
				return 1;
			} else if (ZHI3_ == 1) {
				return DI3;
			} else if (ZHI3_ == 2) {
				var _ans746 = DI3 * DI3;
				return _ans746;
			} else if (ZHI3_ == -1) {
				var _ans747 = 1 / DI3;
				return _ans747;
			} else if (ZHI3_ == 0.5) {
				var _ans748 = PING2FANG1GEN1(DI3);
				return _ans748;
			} else if (ZHI3_ == 3) {
				var _ans749 = DI3 * DI3;
				var _ans750 = DI3 * _ans749;
				return _ans750;
			} else if (ZHI3_ == -2) {
				var _ans751 = 1 / DI3;
				var _ans752 = _ans751 / DI3;
				return _ans752;
			} else if (ZHI3_ == -0.5) {
				var _ans753 = PING2FANG1GEN1(DI3);
				var _ans754 = 1 / _ans753;
				return _ans754;
			};
			if (DI3 == 1) {
				return 1;
			};
			var _ans755 = BU4KE3SUAN4SHU4HU1(DI3);
			if (_ans755) {
				return DI3;
			};
			var _ans756 = BU4KE3SUAN4SHU4HU1(ZHI3_);
			if (_ans756) {
				return ZHI3_;
			};
			var _ans757 = JUE2DUI4(DI3);
			var JIA3 = _ans757;
			var _ans758 = JUE2DUI4(ZHI3_);
			var YI3 = _ans758;
			if (YI3 > ZHI4JU4SHU4) {
				if (JIA3 == 1) {
					return 1;
				} else if (JIA3 < 1) {
					if (ZHI3_ > 0) {
						return FU2DIAN3LING2;
					} else {
						return YI3;
					};
				} else {
					if (ZHI3_ > 0) {
						return YI3;
					} else {
						return FU2DIAN3LING2;
					};
				};
			};
			var ZHI3WEI4OU3SHU4 = false;
			var ZHI3WEI4QI2SHU4 = false;
			var ZHI3FEI1ZHENG3SHU4 = false;
			var _ans759 = YI3 % 2;
			var BING3 = _ans759;
			if (BING3 == 0) {
				ZHI3WEI4OU3SHU4 = true;
			} else if (BING3 == 1) {
				ZHI3WEI4QI2SHU4 = true;
			} else {
				ZHI3FEI1ZHENG3SHU4 = true;
			};
			if (DI3 == 0) {
				if (ZHI3_ < 0) {
					if (ZHI3WEI4QI2SHU4) {
						var _ans760 = 1 / DI3;
						return _ans760;
					} else {
						var _ans761 = 1 / JIA3;
						return _ans761;
					};
				} else {
					if (ZHI3WEI4QI2SHU4) {
						return DI3;
					} else {
						return JIA3;
					};
				};
			} else if (JIA3 > ZHI4JU4SHU4) {
				if (ZHI3_ < 0) {
					if (ZHI3WEI4QI2SHU4) {
						var _ans762 = ZHENG4FU4(DI3);
						var _ans763 = FU2DIAN3LING2 * _ans762;
						return _ans763;
					} else {
						return FU2DIAN3LING2;
					};
				} else {
					if (ZHI3WEI4QI2SHU4) {
						return DI3;
					} else {
						return JIA3;
					};
				};
			} else if (DI3 < 0) {
				if (ZHI3FEI1ZHENG3SHU4) {
					var _ans764 = BU4KE3SUAN4();
					return _ans764;
				} else if (ZHI3WEI4QI2SHU4) {
					var _ans765 = ZHENG4SHU4ZHI1MI4(JIA3)(ZHI3_);
					var _ans766 = _ans765 * -1;
					return _ans766;
				};
			};
			var _ans767 = ZHENG4SHU4ZHI1MI4(JIA3)(ZHI3_);
			return _ans767;
		};
	};
	var PING2FANG1GEN1CHANG2SHU4JIA3 = 0.417319; /*" (2^0.5 - 1) * sqrt((2^0.25 + 2^-0.25) / 2) "*/
	var _ans768 = ER4ZHI1PING2FANG1GEN1 - 1;
	var _ans769 = _ans768 * 2;
	var PING2FANG1GEN1CHANG2SHU4YI3 = _ans769;
	var _ans770 = WEI1WEI4MI4 * SHANG4WEI4MI4;
	var _ans771 = _ans770 * JIN4ZHI4;
	var _ans772 = _ans771 * JIN4ZHI4;
	var PING2FANG1GEN1XIA4YI4JIE4 = _ans772; /*"平方根。同Javascript之Math.sqrt也。"*/
	var PING2FANG1GEN1 = this.PING2FANG1GEN1 = () => 0;
	PING2FANG1GEN1 = this.PING2FANG1GEN1 = function(JIA3) {
		var FEI1CHANG2 = true;
		if (JIA3 >= PING2FANG1GEN1XIA4YI4JIE4) {
			if (JIA3 < JU4WEI4MI4) {
				FEI1CHANG2 = false;
			};
		};
		if (FEI1CHANG2) {
			if (JIA3 == 0) {
				return FU2DIAN3LING2;
			};
			var _ans773 = BU4KE3SUAN4SHU4HU1(JIA3);
			if (_ans773) {
				return JIA3;
			};
			if (JIA3 > ZHI4JU4SHU4) {
				return JIA3;
			};
			if (JIA3 < 0) {
				var _ans774 = BU4KE3SUAN4();
				return _ans774;
			};
			if (JIA3 <= PING2FANG1GEN1XIA4YI4JIE4) {
				var _ans775 = JIA3 * SHANG4WEI4MI4;
				var _ans776 = _ans775 * SHANG4WEI4MI4;
				var _ans777 = _ans776 * JIN4ZHI4;
				var _ans778 = _ans777 * JIN4ZHI4;
				var _ans779 = PING2FANG1GEN1(_ans778);
				var _ans780 = _ans779 * XIA4WEI4MI4;
				var _ans781 = _ans780 * TUI4ZHI4;
				return _ans781;
			};
			if (JIA3 >= JU4WEI4MI4) {
				var _ans782 = JIA3 * TUI4ZHI4;
				var _ans783 = _ans782 * TUI4ZHI4;
				var _ans784 = PING2FANG1GEN1(_ans783);
				var _ans785 = _ans784 * JIN4ZHI4;
				return _ans785;
			};
		};
		var _ans786 = XI1FU2DIAN3SHU4(JIA3);
		var XI1JIA3 = _ans786;
		var _ans787 = XI1JIA3["位"];
		var _ans788 = _ans787 / 2;
		var BAN4WEI4 = _ans788;
		var _ans789 = QU3DI3(BAN4WEI4);
		var ZHENG3BAN4WEI4 = _ans789;
		var _ans790 = XI1JIA3["本"];
		var _ans791 = _ans790 + ER4ZHI1PING2FANG1GEN1;
		var _ans792 = _ans791 * PING2FANG1GEN1CHANG2SHU4JIA3;
		var DING1 = _ans792;
		var _ans793 = BAN4WEI4 - ZHENG3BAN4WEI4;
		var _ans794 = _ans793 * PING2FANG1GEN1CHANG2SHU4YI3;
		var _ans795 = _ans794 + 1;
		var _ans796 = _ans795 * DING1;
		var WU4 = _ans796;
		var _ans797 = QIU2JIN4MI4(ZHENG3BAN4WEI4);
		var JI3 = _ans797;
		var _ans798 = WU4 * JI3;
		var YI3 = _ans798; /*"以上求疏根"*/ /*"蓋用牛頓法耳"*/
		for (var _rand1 = 0; _rand1 < 3; _rand1++) {
			var _ans799 = JIA3 / YI3;
			var _ans800 = _ans799 + YI3;
			var _ans801 = _ans800 / 2;
			var BING3 = _ans801;
			YI3 = BING3;
		}; /*"以下校末位。"*/
		var _ans802 = JI3 * XIA4WEI4MI4;
		var GENG1 = _ans802;
		var _ans803 = YI3 - GENG1;
		var XIA4SHU4 = _ans803;
		var _ans804 = XIANG1CHENG2DE2SHUANG1(YI3)(XIA4SHU4);
		var XIA4JI1 = _ans804;
		var _ans805 = XIA4JI1[1 - 1];
		if (_ans805 > JIA3) {
			return XIA4SHU4;
		};
		var _ans806 = XIA4JI1[1 - 1];
		if (_ans806 == JIA3) {
			var _ans807 = XIA4JI1[2 - 1];
			if (_ans807 >= 0) {
				return XIA4SHU4;
			};
		}; /*"若甲等於中數乘下數者。其平方根不足下半間數。捨餘得下數也。"*/
		var _ans808 = YI3 + GENG1;
		var SHANG4SHU4 = _ans808;
		var _ans809 = XIANG1CHENG2DE2SHUANG1(YI3)(SHANG4SHU4);
		var SHANG4JI1 = _ans809;
		var _ans810 = SHANG4JI1[1 - 1];
		if (_ans810 < JIA3) {
			return SHANG4SHU4;
		};
		var _ans811 = SHANG4JI1[1 - 1];
		if (_ans811 == JIA3) {
			var _ans812 = SHANG4JI1[2 - 1];
			if (_ans812 < 0) {
				return SHANG4SHU4;
			};
		}; /*"若甲等於中數乘上數者。其平方根不足上半間數。捨餘得中數也。"*/
		return YI3;
	}; /*"絕對。同Javascript之Math.abs也。"*/
	var JUE2DUI4 = this.JUE2DUI4 = () => 0;
	JUE2DUI4 = this.JUE2DUI4 = function(JIA3) {
		var _ans813 = ZHENG4FU4(JIA3);
		var FU2 = _ans813;
		var _ans814 = JIA3 * FU2;
		return _ans814;
	}; /*"取頂。同Javascript之Math.ceil也。"*/
	var QU3DING3 = this.QU3DING3 = () => 0;
	QU3DING3 = this.QU3DING3 = function(JIA3) {
		var _ans815 = JIA3 * -1;
		var _ans816 = QU3DI3(_ans815);
		var _ans817 = _ans816 * -1;
		return _ans817;
	}; /*"取底。同Javascript之Math.floor也。"*/
	var QU3DI3 = this.QU3DI3 = () => 0;
	QU3DI3 = this.QU3DI3 = function(JIA3) {
		var _ans818 = ZHENG4FU4(JIA3);
		var FU2 = _ans818;
		var _ans819 = JIA3 * FU2;
		var YI3 = _ans819; /*"JavaScript者。除負以正。所餘負也。Python者。除負以正。所餘正也。"*/
		var _ans820 = YI3 % 1;
		var BING3 = _ans820;
		if (BING3 > 0) {
			var _ans821 = YI3 - BING3;
			var _ans822 = _ans821 * FU2;
			var DING1 = _ans822;
			if (FU2 < 0) {
				var _ans823 = DING1 - 1;
				return _ans823;
			} else {
				return DING1;
			};
		} else {
			return JIA3;
		};
	}; /*"取整。同Javascript之Math.round, but rounded away from zero when the fractional part is exactly 0.5也。"*/
	var QU3ZHENG3 = this.QU3ZHENG3 = () => 0;
	QU3ZHENG3 = this.QU3ZHENG3 = function(JIA3) {
		var _ans824 = ZHENG4FU4(JIA3);
		var FU2 = _ans824;
		var _ans825 = JIA3 * FU2;
		var YI3 = _ans825;
		var _ans826 = YI3 % 1;
		var BING3 = _ans826;
		if (BING3 == BING3) {
			if (BING3 < 0.5) {
				var _ans827 = YI3 - BING3;
				var _ans828 = _ans827 * FU2;
				return _ans828;
			} else {
				var _ans829 = YI3 - BING3;
				var _ans830 = _ans829 + 1;
				var _ans831 = _ans830 * FU2;
				return _ans831;
			};
		} else {
			return JIA3;
		};
	}; /*"捨餘。同Javascript之Math.trunc也。"*/
	var SHE3YU2 = this.SHE3YU2 = () => 0;
	SHE3YU2 = this.SHE3YU2 = function(JIA3) {
		var _ans832 = ZHENG4FU4(JIA3);
		var FU2 = _ans832;
		var _ans833 = JIA3 * FU2;
		var YI3 = _ans833;
		var _ans834 = YI3 % 1;
		var BING3 = _ans834;
		if (BING3 == BING3) {
			var _ans835 = YI3 - BING3;
			var _ans836 = _ans835 * FU2;
			return _ans836;
		} else {
			return JIA3;
		};
	}; /*"正負。同Javascript之Math.sign也。"*/
	var ZHENG4FU4 = this.ZHENG4FU4 = () => 0;
	ZHENG4FU4 = this.ZHENG4FU4 = function(JIA3) {
		if (JIA3 > 0) {
			return 1;
		};
		if (JIA3 < 0) {
			return -1;
		};
		return JIA3;
	};
}; /*___wenyan_module_算經_end___*/ /*___wenyan_module_畫譜_start___*/
var 畫譜 = new function() {
	var SE4BIAO3 = [];
	SE4BIAO3.push("黑", "#000000", "鈦白", "#ffffff", "藤黃", "#faea56", "硃磦", "#d44906", "硃砂", "#c0927b", "胭脂", "#491817", "曙紅", "#c72c35", "赭石", "#522d14", "大紅", "#b91c1b", "花青", "#141931", "三綠", "#afceb5", "酞青藍", "#1e2867", "三青", "#acc8d4");
	var BEI4ZHI3 = this.BEI4ZHI3 = () => 0;
	BEI4ZHI3 = this.BEI4ZHI3 = function(KUAN1) {
		return function(GAO1) {
			var _ans1 = document.createElement("canvas");
			var canv = _ans1;
			var _ans2 = canv.getContext("2d");
			var ctx = _ans2;
			canv["width"] = KUAN1;
			canv["height"] = GAO1;
			ctx.lineJoin = "round";
			ctx.lineCap = "round";
			return canv;
		};
	};
	var BIAO3HUA4 = this.BIAO3HUA4 = () => 0;
	BIAO3HUA4 = this.BIAO3HUA4 = function(ZHI3) {
		return function(BI4) {
			var _ans3 = document.getElementById(BI4);
			var div = _ans3;
			var _ans4 = div.appendChild(ZHI3);
		};
	};
	var LUO4BI3 = this.LUO4BI3 = () => 0;
	LUO4BI3 = this.LUO4BI3 = function(ZHI3) {
		return function(DONG1) {
			return function(NAN2) {
				var canv = ZHI3;
				var _ans5 = canv.getContext("2d");
				var ctx = _ans5;
				var _ans6 = ctx.beginPath();
				var _ans7 = (x => y => ctx.moveTo(x, y))(DONG1)(NAN2);
			};
		};
	};
	var YUN4BI3 = this.YUN4BI3 = () => 0;
	YUN4BI3 = this.YUN4BI3 = function(ZHI3) {
		return function(DONG1) {
			return function(NAN2) {
				var canv = ZHI3;
				var _ans8 = canv.getContext("2d");
				var ctx = _ans8;
				var _ans9 = (x => y => ctx.lineTo(x, y))(DONG1)(NAN2);
			};
		};
	};
	var ZHAN4SE4 = this.ZHAN4SE4 = () => 0;
	ZHAN4SE4 = this.ZHAN4SE4 = function(ZHI3) {
		return function(SE4) {
			var canv = ZHI3;
			var _ans10 = canv.getContext("2d");
			var ctx = _ans10;
			var SHI2LIU4JIN4ZHI4SE4 = "";
			var WU4 = 1;
			while (true) {
				if (WU4 > SE4BIAO3.length) {
					break;
				};
				if (SE4BIAO3[WU4 - 1] == SE4) {
					var _ans11 = WU4 + 1;
					var SE4SHU4 = _ans11;
					var _ans12 = SE4BIAO3[SE4SHU4 - 1];
					SHI2LIU4JIN4ZHI4SE4 = _ans12;
					break;
				};
				var _ans13 = 2 + WU4;
				WU4 = _ans13;
			};
			ctx.strokeStyle = SHI2LIU4JIN4ZHI4SE4;
			ctx.fillStyle = SHI2LIU4JIN4ZHI4SE4;
		};
	};
	var ZE2BI3 = this.ZE2BI3 = () => 0;
	ZE2BI3 = this.ZE2BI3 = function(ZHI3) {
		return function(HAO4) {
			var canv = ZHI3;
			var _ans14 = canv.getContext("2d");
			var ctx = _ans14;
			ctx.lineWidth = HAO4;
		};
	};
	var TI2BI3 = this.TI2BI3 = () => 0;
	TI2BI3 = this.TI2BI3 = function(ZHI3) {
		var canv = ZHI3;
		var _ans15 = canv.getContext("2d");
		var ctx = _ans15;
		var _ans16 = ctx.stroke();
	};
	var SHE4SE4 = this.SHE4SE4 = () => 0;
	SHE4SE4 = this.SHE4SE4 = function(ZHI3) {
		var canv = ZHI3;
		var _ans17 = canv.getContext("2d");
		var ctx = _ans17;
		var _ans18 = ctx.fill();
	};
}; /*___wenyan_module_畫譜_end___*/
var BEI4ZHI3 = 畫譜.BEI4ZHI3;
var ZE2BI3 = 畫譜.ZE2BI3;
var ZHAN4SE4 = 畫譜.ZHAN4SE4;
var LUO4BI3 = 畫譜.LUO4BI3;
var YUN4BI3 = 畫譜.YUN4BI3;
var TI2BI3 = 畫譜.TI2BI3;
var BIAO3HUA4 = 畫譜.BIAO3HUA4;
var ZHENG4XIAN2 = 算經.ZHENG4XIAN2;
var YU2XIAN2 = 算經.YU2XIAN2;
var BAN4YUAN2ZHOU1LV4 = 算經.BAN4YUAN2ZHOU1LV4;
var HUA4SHU4FA3 = () => 0;
HUA4SHU4FA3 = function(ZHI3) {
	return function(DONG1) {
		return function(NAN2) {
			return function(CHANG2) {
				return function(CU1) {
					return function(XIANG4) {
						var _ans1 = YU2XIAN2(XIANG4);
						var _ans2 = _ans1 * CHANG2;
						var _ans3 = _ans2 + DONG1;
						var MO4DONG1 = _ans3;
						var _ans4 = ZHENG4XIAN2(XIANG4);
						var _ans5 = _ans4 * CHANG2;
						var _ans6 = NAN2 - _ans5;
						var MO4NAN2 = _ans6;
						var _ans7 = ZE2BI3(ZHI3)(CU1);
						var _ans8 = LUO4BI3(ZHI3)(DONG1)(NAN2);
						var _ans9 = YUN4BI3(ZHI3)(MO4DONG1)(MO4NAN2);
						var _ans10 = TI2BI3(ZHI3);
						var _ans11 = XIANG4 + 0.3;
						var ZUO3XIANG4 = _ans11;
						var _ans12 = XIANG4 - 0.3;
						var YOU4XIANG4 = _ans12;
						var _ans13 = CHANG2 * 0.8;
						var ZHI1CHANG2 = _ans13;
						var _ans14 = CU1 * 0.8;
						var ZHI1CU1 = _ans14;
						if (ZHI1CHANG2 < 5) {
							return;
						};
						var _ans15 = HUA4SHU4FA3(ZHI3)(MO4DONG1)(MO4NAN2)(ZHI1CHANG2)(ZHI1CU1)(ZUO3XIANG4);
						var _ans16 = HUA4SHU4FA3(ZHI3)(MO4DONG1)(MO4NAN2)(ZHI1CHANG2)(ZHI1CU1)(YOU4XIANG4);
					};
				};
			};
		};
	};
};
var _ans17 = BEI4ZHI3(256)(256);
var ZHI3 = _ans17;
var _ans18 = ZHAN4SE4(ZHI3)("黑");
var _ans19 = HUA4SHU4FA3(ZHI3)(128)(256)(50)(5)(BAN4YUAN2ZHOU1LV4);
var _ans20 = BIAO3HUA4(ZHI3)("out");