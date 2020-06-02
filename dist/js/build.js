function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function (e) {
  Array.prototype.map || (Array.prototype.map = function (e, r) {
    var a, o, i;
    if (null == this) throw new TypeError(" this is null or not defined");
    var n = Object(this),
        t = n.length >>> 0;
    if ("function" != typeof e) throw new TypeError(e + " is not a function");

    for (r && (a = r), o = Array(t), i = 0; t > i;) {
      var l, d;
      i in n && (l = n[i], d = e.call(a, l, i, n), o[i] = d), i++;
    }

    return o;
  });

  var r = e.detect = function () {
    var e = function e() {},
        r = {
      browser_parsers: [{
        regex: "^(Opera)/(\\d+)\\.(\\d+) \\(Nintendo Wii",
        family_replacement: "Wii",
        manufacturer: "Nintendo"
      }, {
        regex: "(SeaMonkey|Camino)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
        family_replacement: "Camino",
        other: !0
      }, {
        regex: "(Pale[Mm]oon)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
        family_replacement: "Pale Moon (Firefox Variant)",
        other: !0
      }, {
        regex: "(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
        family_replacement: "Firefox Mobile"
      }, {
        regex: "(Fennec)/(\\d+)\\.(\\d+)(pre)",
        family_replacment: "Firefox Mobile"
      }, {
        regex: "(Fennec)/(\\d+)\\.(\\d+)",
        family_replacement: "Firefox Mobile"
      }, {
        regex: "Mobile.*(Firefox)/(\\d+)\\.(\\d+)",
        family_replacement: "Firefox Mobile"
      }, {
        regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?)",
        family_replacement: "Firefox ($1)"
      }, {
        regex: "(Firefox)/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
        family_replacement: "Firefox Alpha"
      }, {
        regex: "(Firefox)/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
        family_replacement: "Firefox Beta"
      }, {
        regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
        family_replacement: "Firefox Alpha"
      }, {
        regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
        family_replacement: "Firefox Beta"
      }, {
        regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?",
        family_replacement: "Firefox ($1)"
      }, {
        regex: "(Firefox).*Tablet browser (\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "MicroB",
        tablet: !0
      }, {
        regex: "(MozillaDeveloperPreview)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?"
      }, {
        regex: "(Flock)/(\\d+)\\.(\\d+)(b\\d+?)",
        family_replacement: "Flock",
        other: !0
      }, {
        regex: "(RockMelt)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Rockmelt",
        other: !0
      }, {
        regex: "(Navigator)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Netscape"
      }, {
        regex: "(Navigator)/(\\d+)\\.(\\d+)([ab]\\d+)",
        family_replacement: "Netscape"
      }, {
        regex: "(Netscape6)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Netscape"
      }, {
        regex: "(MyIBrow)/(\\d+)\\.(\\d+)",
        family_replacement: "My Internet Browser",
        other: !0
      }, {
        regex: "(Opera Tablet).*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        family_replacement: "Opera Tablet",
        tablet: !0
      }, {
        regex: "(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)",
        family_replacement: "Opera Mobile"
      }, {
        regex: "Opera Mobi",
        family_replacement: "Opera Mobile"
      }, {
        regex: "(Opera Mini)/(\\d+)\\.(\\d+)",
        family_replacement: "Opera Mini"
      }, {
        regex: "(Opera Mini)/att/(\\d+)\\.(\\d+)",
        family_replacement: "Opera Mini"
      }, {
        regex: "(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        family_replacement: "Opera"
      }, {
        regex: "(OPR)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        family_replacement: "Opera"
      }, {
        regex: "(webOSBrowser)/(\\d+)\\.(\\d+)",
        family_replacement: "webOS"
      }, {
        regex: "(webOS)/(\\d+)\\.(\\d+)",
        family_replacement: "webOS"
      }, {
        regex: "(wOSBrowser).+TouchPad/(\\d+)\\.(\\d+)",
        family_replacement: "webOS TouchPad"
      }, {
        regex: "(luakit)",
        family_replacement: "LuaKit",
        other: !0
      }, {
        regex: "(Lightning)/(\\d+)\\.(\\d+)([ab]?\\d+[a-z]*)",
        family_replacement: "Lightning",
        other: !0
      }, {
        regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?) \\(Swiftfox\\)",
        family_replacement: "Swiftfox",
        other: !0
      }, {
        regex: "(Firefox)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)? \\(Swiftfox\\)",
        family_replacement: "Swiftfox",
        other: !0
      }, {
        regex: "rekonq",
        family_replacement: "Rekonq",
        other: !0
      }, {
        regex: "(conkeror|Conkeror)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
        family_replacement: "Conkeror",
        other: !0
      }, {
        regex: "(konqueror)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Konqueror",
        other: !0
      }, {
        regex: "(WeTab)-Browser",
        family_replacement: "WeTab",
        other: !0
      }, {
        regex: "(Comodo_Dragon)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Comodo Dragon",
        other: !0
      }, {
        regex: "(YottaaMonitor)",
        family_replacement: "Yottaa Monitor",
        other: !0
      }, {
        regex: "(Kindle)/(\\d+)\\.(\\d+)",
        family_replacement: "Kindle"
      }, {
        regex: "(Symphony) (\\d+).(\\d+)",
        family_replacement: "Symphony",
        other: !0
      }, {
        regex: "Minimo",
        family_replacement: "Minimo",
        other: !0
      }, {
        regex: "(Edge)/(\\d+)\\.(\\d+)",
        family_replacement: "Edge"
      }, {
        regex: "(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Chrome Mobile"
      }, {
        regex: "(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Chrome Mobile iOS"
      }, {
        regex: "(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile",
        family_replacement: "Chrome Mobile"
      }, {
        regex: "(chromeframe)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Chrome Frame"
      }, {
        regex: "(UC Browser)(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "UC Browser",
        other: !0
      }, {
        regex: "(SLP Browser)/(\\d+)\\.(\\d+)",
        family_replacement: "Tizen Browser",
        other: !0
      }, {
        regex: "(Epiphany)/(\\d+)\\.(\\d+).(\\d+)",
        family_replacement: "Epiphany",
        other: !0
      }, {
        regex: "(SE 2\\.X) MetaSr (\\d+)\\.(\\d+)",
        family_replacement: "Sogou Explorer",
        other: !0
      }, {
        regex: "(Pingdom.com_bot_version_)(\\d+)\\.(\\d+)",
        family_replacement: "PingdomBot",
        other: !0
      }, {
        regex: "(facebookexternalhit)/(\\d+)\\.(\\d+)",
        family_replacement: "FacebookBot"
      }, {
        regex: "(Twitterbot)/(\\d+)\\.(\\d+)",
        family_replacement: "TwitterBot"
      }, {
        regex: "(AdobeAIR|Chromium|FireWeb|Jasmine|ANTGalio|Midori|Fresco|Lobo|PaleMoon|Maxthon|Lynx|OmniWeb|Dillo|Camino|Demeter|Fluid|Fennec|Shiira|Sunrise|Chrome|Flock|Netscape|Lunascape|WebPilot|NetFront|Netfront|Konqueror|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|Opera Mini|iCab|NetNewsWire|ThunderBrowse|Iron|Iris|UP\\.Browser|Bunjaloo|Google Earth|Raven for Mac)/(\\d+)\\.(\\d+)\\.(\\d+)"
      }, {
        regex: "(Bolt|Jasmine|IceCat|Skyfire|Midori|Maxthon|Lynx|Arora|IBrowse|Dillo|Camino|Shiira|Fennec|Phoenix|Chrome|Flock|Netscape|Lunascape|Epiphany|WebPilot|Opera Mini|Opera|NetFront|Netfront|Konqueror|Googlebot|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|iCab|NetNewsWire|Iron|Space Bison|Stainless|Orca|Dolfin|BOLT|Minimo|Tizen Browser|Polaris)/(\\d+)\\.(\\d+)"
      }, {
        regex: "(iRider|Crazy Browser|SkipStone|iCab|Lunascape|Sleipnir|Maemo Browser) (\\d+)\\.(\\d+)\\.(\\d+)"
      }, {
        regex: "(iCab|Lunascape|Opera|Android|Jasmine|Polaris|BREW) (\\d+)\\.(\\d+)\\.?(\\d+)?"
      }, {
        regex: "(Android) Donut",
        v2_replacement: "2",
        v1_replacement: "1"
      }, {
        regex: "(Android) Eclair",
        v2_replacement: "1",
        v1_replacement: "2"
      }, {
        regex: "(Android) Froyo",
        v2_replacement: "2",
        v1_replacement: "2"
      }, {
        regex: "(Android) Gingerbread",
        v2_replacement: "3",
        v1_replacement: "2"
      }, {
        regex: "(Android) Honeycomb",
        v1_replacement: "3"
      }, {
        regex: "(IEMobile)[ /](\\d+)\\.(\\d+)",
        family_replacement: "IE Mobile"
      }, {
        regex: "(MSIE) (\\d+)\\.(\\d+).*XBLWP7",
        family_replacement: "IE Large Screen"
      }, {
        regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)"
      }, {
        regex: "(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*)?"
      }, {
        regex: "(Obigo)InternetBrowser",
        other: !0
      }, {
        regex: "(Obigo)\\-Browser",
        other: !0
      }, {
        regex: "(Obigo|OBIGO)[^\\d]*(\\d+)(?:.(\\d+))?",
        other: !0
      }, {
        regex: "(MAXTHON|Maxthon) (\\d+)\\.(\\d+)",
        family_replacement: "Maxthon",
        other: !0
      }, {
        regex: "(Maxthon|MyIE2|Uzbl|Shiira)",
        v1_replacement: "0",
        other: !0
      }, {
        regex: "(PLAYSTATION) (\\d+)",
        family_replacement: "PlayStation",
        manufacturer: "Sony"
      }, {
        regex: "(PlayStation Portable)[^\\d]+(\\d+).(\\d+)",
        manufacturer: "Sony"
      }, {
        regex: "(BrowseX) \\((\\d+)\\.(\\d+)\\.(\\d+)",
        other: !0
      }, {
        regex: "(POLARIS)/(\\d+)\\.(\\d+)",
        family_replacement: "Polaris",
        other: !0
      }, {
        regex: "(Embider)/(\\d+)\\.(\\d+)",
        family_replacement: "Polaris",
        other: !0
      }, {
        regex: "(BonEcho)/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Bon Echo",
        other: !0
      }, {
        regex: "(iPod).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Mobile Safari",
        manufacturer: "Apple"
      }, {
        regex: "(iPod).*Version/(\\d+)\\.(\\d+)",
        family_replacement: "Mobile Safari",
        manufacturer: "Apple"
      }, {
        regex: "(iPod)",
        family_replacement: "Mobile Safari",
        manufacturer: "Apple"
      }, {
        regex: "(iPhone).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Mobile Safari",
        manufacturer: "Apple"
      }, {
        regex: "(iPhone).*Version/(\\d+)\\.(\\d+)",
        family_replacement: "Mobile Safari",
        manufacturer: "Apple"
      }, {
        regex: "(iPhone)",
        family_replacement: "Mobile Safari",
        manufacturer: "Apple"
      }, {
        regex: "(iPad).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Mobile Safari",
        tablet: !0,
        manufacturer: "Apple"
      }, {
        regex: "(iPad).*Version/(\\d+)\\.(\\d+)",
        family_replacement: "Mobile Safari",
        tablet: !0,
        manufacturer: "Apple"
      }, {
        regex: "(iPad)",
        family_replacement: "Mobile Safari",
        tablet: !0,
        manufacturer: "Apple"
      }, {
        regex: "(AvantGo) (\\d+).(\\d+)",
        other: !0
      }, {
        regex: "(Avant)",
        v1_replacement: "1",
        other: !0
      }, {
        regex: "^(Nokia)",
        family_replacement: "Nokia Services (WAP) Browser",
        manufacturer: "Nokia"
      }, {
        regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)\\.(\\d+)",
        manufacturer: "Nokia"
      }, {
        regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)",
        manufacturer: "Nokia"
      }, {
        regex: "(NokiaBrowser)/(\\d+)\\.(\\d+)",
        manufacturer: "Nokia"
      }, {
        regex: "(BrowserNG)/(\\d+)\\.(\\d+).(\\d+)",
        family_replacement: "NokiaBrowser",
        manufacturer: "Nokia"
      }, {
        regex: "(Series60)/5\\.0",
        v2_replacement: "0",
        v1_replacement: "7",
        family_replacement: "NokiaBrowser",
        manufacturer: "Nokia"
      }, {
        regex: "(Series60)/(\\d+)\\.(\\d+)",
        family_replacement: "Nokia OSS Browser",
        manufacturer: "Nokia"
      }, {
        regex: "(S40OviBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Nokia Series 40 Ovi Browser",
        manufacturer: "Nokia"
      }, {
        regex: "(Nokia)[EN]?(\\d+)",
        manufacturer: "Nokia"
      }, {
        regex: "(PlayBook).+RIM Tablet OS (\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Blackberry WebKit",
        tablet: !0,
        manufacturer: "Nokia"
      }, {
        regex: "(Black[bB]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
        family_replacement: "Blackberry WebKit",
        manufacturer: "RIM"
      }, {
        regex: "(Black[bB]erry)\\s?(\\d+)",
        family_replacement: "Blackberry",
        manufacturer: "RIM"
      }, {
        regex: "(OmniWeb)/v(\\d+)\\.(\\d+)",
        other: !0
      }, {
        regex: "(Blazer)/(\\d+)\\.(\\d+)",
        family_replacement: "Palm Blazer",
        manufacturer: "Palm"
      }, {
        regex: "(Pre)/(\\d+)\\.(\\d+)",
        family_replacement: "Palm Pre",
        manufacturer: "Palm"
      }, {
        regex: "(Links) \\((\\d+)\\.(\\d+)",
        other: !0
      }, {
        regex: "(QtWeb) Internet Browser/(\\d+)\\.(\\d+)",
        other: !0
      }, {
        regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
        other: !0,
        tablet: !0
      }, {
        regex: "(AppleWebKit)/(\\d+)\\.?(\\d+)?\\+ .* Version/\\d+\\.\\d+.\\d+ Safari/",
        family_replacement: "WebKit Nightly"
      }, {
        regex: "(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari/",
        family_replacement: "Safari"
      }, {
        regex: "(Safari)/\\d+"
      }, {
        regex: "(OLPC)/Update(\\d+)\\.(\\d+)",
        other: !0
      }, {
        regex: "(OLPC)/Update()\\.(\\d+)",
        v1_replacement: "0",
        other: !0
      }, {
        regex: "(SEMC\\-Browser)/(\\d+)\\.(\\d+)",
        other: !0
      }, {
        regex: "(Teleca)",
        family_replacement: "Teleca Browser",
        other: !0
      }, {
        regex: "Trident(.*)rv.(\\d+)\\.(\\d+)",
        family_replacement: "IE"
      }, {
        regex: "(MSIE) (\\d+)\\.(\\d+)",
        family_replacement: "IE"
      }],
      os_parsers: [{
        regex: "(Android) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"
      }, {
        regex: "(Android)\\-(\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"
      }, {
        regex: "(Android) Donut",
        os_v2_replacement: "2",
        os_v1_replacement: "1"
      }, {
        regex: "(Android) Eclair",
        os_v2_replacement: "1",
        os_v1_replacement: "2"
      }, {
        regex: "(Android) Froyo",
        os_v2_replacement: "2",
        os_v1_replacement: "2"
      }, {
        regex: "(Android) Gingerbread",
        os_v2_replacement: "3",
        os_v1_replacement: "2"
      }, {
        regex: "(Android) Honeycomb",
        os_v1_replacement: "3"
      }, {
        regex: "(Silk-Accelerated=[a-z]{4,5})",
        os_replacement: "Android"
      }, {
        regex: "(Windows Phone 6\\.5)"
      }, {
        regex: "(Windows (?:NT 5\\.2|NT 5\\.1))",
        os_replacement: "Windows XP"
      }, {
        regex: "(XBLWP7)",
        os_replacement: "Windows Phone OS"
      }, {
        regex: "(Windows NT 6\\.1)",
        os_replacement: "Windows 7"
      }, {
        regex: "(Windows NT 6\\.0)",
        os_replacement: "Windows Vista"
      }, {
        regex: "(Windows 98|Windows XP|Windows ME|Windows 95|Windows CE|Windows 7|Windows NT 4\\.0|Windows Vista|Windows 2000)"
      }, {
        regex: "(Windows NT 6\\.4|Windows NT 10\\.0)",
        os_replacement: "Windows 10"
      }, {
        regex: "(Windows NT 6\\.2)",
        os_replacement: "Windows 8"
      }, {
        regex: "(Windows Phone 8)",
        os_replacement: "Windows Phone 8"
      }, {
        regex: "(Windows NT 5\\.0)",
        os_replacement: "Windows 2000"
      }, {
        regex: "(Windows Phone OS) (\\d+)\\.(\\d+)"
      }, {
        regex: "(Windows ?Mobile)",
        os_replacement: "Windows Mobile"
      }, {
        regex: "(WinNT4.0)",
        os_replacement: "Windows NT 4.0"
      }, {
        regex: "(Win98)",
        os_replacement: "Windows 98"
      }, {
        regex: "(Tizen)/(\\d+)\\.(\\d+)",
        other: !0
      }, {
        regex: "(Mac OS X) (\\d+)[_.](\\d+)(?:[_.](\\d+))?",
        manufacturer: "Apple"
      }, {
        regex: "(?:PPC|Intel) (Mac OS X)",
        manufacturer: "Apple"
      }, {
        regex: "(CPU OS|iPhone OS) (\\d+)_(\\d+)(?:_(\\d+))?",
        os_replacement: "iOS",
        manufacturer: "Apple"
      }, {
        regex: "(iPhone|iPad|iPod); Opera",
        os_replacement: "iOS",
        manufacturer: "Apple"
      }, {
        regex: "(iPad); Opera",
        tablet: !0,
        manufacturer: "Apple"
      }, {
        regex: "(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)",
        os_replacement: "iOS",
        manufacturer: "Apple"
      }, {
        regex: "(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        os_replacement: "Chrome OS"
      }, {
        regex: "(Debian)-(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        other: !0
      }, {
        regex: "(Linux Mint)(?:/(\\d+))?",
        other: !0
      }, {
        regex: "(Mandriva)(?: Linux)?/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        other: !0
      }, {
        regex: "(Symbian[Oo][Ss])/(\\d+)\\.(\\d+)",
        os_replacement: "Symbian OS"
      }, {
        regex: "(Symbian/3).+NokiaBrowser/7\\.3",
        os_replacement: "Symbian^3 Anna"
      }, {
        regex: "(Symbian/3).+NokiaBrowser/7\\.4",
        os_replacement: "Symbian^3 Belle"
      }, {
        regex: "(Symbian/3)",
        os_replacement: "Symbian^3"
      }, {
        regex: "(Series 60|SymbOS|S60)",
        os_replacement: "Symbian OS"
      }, {
        regex: "(MeeGo)",
        other: !0
      }, {
        regex: "Symbian [Oo][Ss]",
        os_replacement: "Symbian OS"
      }, {
        regex: "(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        os_replacement: "BlackBerry OS",
        manufacturer: "RIM"
      }, {
        regex: "(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        os_replacement: "BlackBerry OS",
        manufacturer: "RIM"
      }, {
        regex: "(RIM Tablet OS) (\\d+)\\.(\\d+)\\.(\\d+)",
        os_replacement: "BlackBerry Tablet OS",
        tablet: !0,
        manufacturer: "RIM"
      }, {
        regex: "(Play[Bb]ook)",
        os_replacement: "BlackBerry Tablet OS",
        tablet: !0,
        manufacturer: "RIM"
      }, {
        regex: "(Black[Bb]erry)",
        os_replacement: "Blackberry OS",
        manufacturer: "RIM"
      }, {
        regex: "(webOS|hpwOS)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
        os_replacement: "webOS"
      }, {
        regex: "(SUSE|Fedora|Red Hat|PCLinuxOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
        other: !0
      }, {
        regex: "(SUSE|Fedora|Red Hat|Puppy|PCLinuxOS|CentOS)/(\\d+)\\.(\\d+)\\.(\\d+)",
        other: !0
      }, {
        regex: "(Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Red Hat|Slackware)/(\\d+)\\.(\\d+)"
      }, {
        regex: "(Windows|OpenBSD|FreeBSD|NetBSD|Ubuntu|Kubuntu|Android|Arch Linux|CentOS|WeTab|Slackware)"
      }, {
        regex: "(Linux|BSD)",
        other: !0
      }],
      mobile_os_families: ["Windows Phone 6.5", "Windows CE", "Symbian OS"],
      device_parsers: [{
        regex: "HTC ([A-Z][a-z0-9]+) Build",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "HTC ([A-Z][a-z0-9 ]+) \\d+\\.\\d+\\.\\d+\\.\\d+",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "HTC_Touch_([A-Za-z0-9]+)",
        device_replacement: "HTC Touch ($1)",
        manufacturer: "HTC"
      }, {
        regex: "USCCHTC(\\d+)",
        device_replacement: "HTC $1 (US Cellular)",
        manufacturer: "HTC"
      }, {
        regex: "Sprint APA(9292)",
        device_replacement: "HTC $1 (Sprint)",
        manufacturer: "HTC"
      }, {
        regex: "HTC ([A-Za-z0-9]+ [A-Z])",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "HTC-([A-Za-z0-9]+)",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "HTC_([A-Za-z0-9]+)",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "HTC ([A-Za-z0-9]+)",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "(ADR[A-Za-z0-9]+)",
        device_replacement: "HTC $1",
        manufacturer: "HTC"
      }, {
        regex: "(HTC)",
        manufacturer: "HTC"
      }, {
        regex: "SonyEricsson([A-Za-z0-9]+)/",
        device_replacement: "Ericsson $1",
        other: !0,
        manufacturer: "Sony"
      }, {
        regex: "Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; WOWMobile (.+) Build"
      }, {
        regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
      }, {
        regex: "Android[\\- ][\\d]+\\.[\\d]+\\-update1\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
      }, {
        regex: "Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
      }, {
        regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; (.+) Build"
      }, {
        regex: "NokiaN([0-9]+)",
        device_replacement: "Nokia N$1",
        manufacturer: "Nokia"
      }, {
        regex: "Nokia([A-Za-z0-9\\v-]+)",
        device_replacement: "Nokia $1",
        manufacturer: "Nokia"
      }, {
        regex: "NOKIA ([A-Za-z0-9\\-]+)",
        device_replacement: "Nokia $1",
        manufacturer: "Nokia"
      }, {
        regex: "Nokia ([A-Za-z0-9\\-]+)",
        device_replacement: "Nokia $1",
        manufacturer: "Nokia"
      }, {
        regex: "Lumia ([A-Za-z0-9\\-]+)",
        device_replacement: "Lumia $1",
        manufacturer: "Nokia"
      }, {
        regex: "Symbian",
        device_replacement: "Nokia",
        manufacturer: "Nokia"
      }, {
        regex: "(PlayBook).+RIM Tablet OS",
        device_replacement: "Blackberry Playbook",
        tablet: !0,
        manufacturer: "RIM"
      }, {
        regex: "(Black[Bb]erry [0-9]+);",
        manufacturer: "RIM"
      }, {
        regex: "Black[Bb]erry([0-9]+)",
        device_replacement: "BlackBerry $1",
        manufacturer: "RIM"
      }, {
        regex: "(Pre)/(\\d+)\\.(\\d+)",
        device_replacement: "Palm Pre",
        manufacturer: "Palm"
      }, {
        regex: "(Pixi)/(\\d+)\\.(\\d+)",
        device_replacement: "Palm Pixi",
        manufacturer: "Palm"
      }, {
        regex: "(Touchpad)/(\\d+)\\.(\\d+)",
        device_replacement: "HP Touchpad",
        manufacturer: "HP"
      }, {
        regex: "HPiPAQ([A-Za-z0-9]+)/(\\d+).(\\d+)",
        device_replacement: "HP iPAQ $1",
        manufacturer: "HP"
      }, {
        regex: "Palm([A-Za-z0-9]+)",
        device_replacement: "Palm $1",
        manufacturer: "Palm"
      }, {
        regex: "Treo([A-Za-z0-9]+)",
        device_replacement: "Palm Treo $1",
        manufacturer: "Palm"
      }, {
        regex: "webOS.*(P160UNA)/(\\d+).(\\d+)",
        device_replacement: "HP Veer",
        manufacturer: "HP"
      }, {
        regex: "(Kindle Fire)",
        manufacturer: "Amazon"
      }, {
        regex: "(Kindle)",
        manufacturer: "Amazon"
      }, {
        regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
        device_replacement: "Kindle Fire",
        tablet: !0,
        manufacturer: "Amazon"
      }, {
        regex: "(iPad) Simulator;",
        manufacturer: "Apple"
      }, {
        regex: "(iPad);",
        manufacturer: "Apple"
      }, {
        regex: "(iPod);",
        manufacturer: "Apple"
      }, {
        regex: "(iPhone) Simulator;",
        manufacturer: "Apple"
      }, {
        regex: "(iPhone);",
        manufacturer: "Apple"
      }, {
        regex: "Nexus\\ ([A-Za-z0-9\\-]+)",
        device_replacement: "Nexus $1"
      }, {
        regex: "acer_([A-Za-z0-9]+)_",
        device_replacement: "Acer $1",
        manufacturer: "Acer"
      }, {
        regex: "acer_([A-Za-z0-9]+)_",
        device_replacement: "Acer $1",
        manufacturer: "Acer"
      }, {
        regex: "Amoi\\-([A-Za-z0-9]+)",
        device_replacement: "Amoi $1",
        other: !0,
        manufacturer: "Amoi"
      }, {
        regex: "AMOI\\-([A-Za-z0-9]+)",
        device_replacement: "Amoi $1",
        other: !0,
        manufacturer: "Amoi"
      }, {
        regex: "Asus\\-([A-Za-z0-9]+)",
        device_replacement: "Asus $1",
        manufacturer: "Asus"
      }, {
        regex: "ASUS\\-([A-Za-z0-9]+)",
        device_replacement: "Asus $1",
        manufacturer: "Asus"
      }, {
        regex: "BIRD\\-([A-Za-z0-9]+)",
        device_replacement: "Bird $1",
        other: !0
      }, {
        regex: "BIRD\\.([A-Za-z0-9]+)",
        device_replacement: "Bird $1",
        other: !0
      }, {
        regex: "BIRD ([A-Za-z0-9]+)",
        device_replacement: "Bird $1",
        other: !0
      }, {
        regex: "Dell ([A-Za-z0-9]+)",
        device_replacement: "Dell $1",
        manufacturer: "Dell"
      }, {
        regex: "DoCoMo/2\\.0 ([A-Za-z0-9]+)",
        device_replacement: "DoCoMo $1",
        other: !0
      }, {
        regex: "([A-Za-z0-9]+)\\_W\\;FOMA",
        device_replacement: "DoCoMo $1",
        other: !0
      }, {
        regex: "([A-Za-z0-9]+)\\;FOMA",
        device_replacement: "DoCoMo $1",
        other: !0
      }, {
        regex: "vodafone([A-Za-z0-9]+)",
        device_replacement: "Huawei Vodafone $1",
        other: !0
      }, {
        regex: "i\\-mate ([A-Za-z0-9]+)",
        device_replacement: "i-mate $1",
        other: !0
      }, {
        regex: "Kyocera\\-([A-Za-z0-9]+)",
        device_replacement: "Kyocera $1",
        other: !0
      }, {
        regex: "KWC\\-([A-Za-z0-9]+)",
        device_replacement: "Kyocera $1",
        other: !0
      }, {
        regex: "Lenovo\\-([A-Za-z0-9]+)",
        device_replacement: "Lenovo $1",
        manufacturer: "Lenovo"
      }, {
        regex: "Lenovo\\_([A-Za-z0-9]+)",
        device_replacement: "Lenovo $1",
        manufacturer: "Levovo"
      }, {
        regex: "LG/([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LG-LG([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LGE-LG([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LGE VX([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LG ([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LGE LG\\-AX([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LG\\-([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LGE\\-([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "LG([A-Za-z0-9]+)",
        device_replacement: "LG $1",
        manufacturer: "LG"
      }, {
        regex: "(KIN)\\.One (\\d+)\\.(\\d+)",
        device_replacement: "Microsoft $1"
      }, {
        regex: "(KIN)\\.Two (\\d+)\\.(\\d+)",
        device_replacement: "Microsoft $1"
      }, {
        regex: "(Motorola)\\-([A-Za-z0-9]+)",
        manufacturer: "Motorola"
      }, {
        regex: "MOTO\\-([A-Za-z0-9]+)",
        device_replacement: "Motorola $1",
        manufacturer: "Motorola"
      }, {
        regex: "MOT\\-([A-Za-z0-9]+)",
        device_replacement: "Motorola $1",
        manufacturer: "Motorola"
      }, {
        regex: "Philips([A-Za-z0-9]+)",
        device_replacement: "Philips $1",
        manufacturer: "Philips"
      }, {
        regex: "Philips ([A-Za-z0-9]+)",
        device_replacement: "Philips $1",
        manufacturer: "Philips"
      }, {
        regex: "SAMSUNG-([A-Za-z0-9\\-]+)",
        device_replacement: "Samsung $1",
        manufacturer: "Samsung"
      }, {
        regex: "SAMSUNG\\; ([A-Za-z0-9\\-]+)",
        device_replacement: "Samsung $1",
        manufacturer: "Samsung"
      }, {
        regex: "Softbank/1\\.0/([A-Za-z0-9]+)",
        device_replacement: "Softbank $1",
        other: !0
      }, {
        regex: "Softbank/2\\.0/([A-Za-z0-9]+)",
        device_replacement: "Softbank $1",
        other: !0
      }, {
        regex: "(hiptop|avantgo|plucker|xiino|blazer|elaine|up.browser|up.link|mmp|smartphone|midp|wap|vodafone|o2|pocket|mobile|pda)",
        device_replacement: "Generic Smartphone"
      }, {
        regex: "^(1207|3gso|4thp|501i|502i|503i|504i|505i|506i|6310|6590|770s|802s|a wa|acer|acs\\-|airn|alav|asus|attw|au\\-m|aur |aus |abac|acoo|aiko|alco|alca|amoi|anex|anny|anyw|aptu|arch|argo|bell|bird|bw\\-n|bw\\-u|beck|benq|bilb|blac|c55/|cdm\\-|chtm|capi|comp|cond|craw|dall|dbte|dc\\-s|dica|ds\\-d|ds12|dait|devi|dmob|doco|dopo|el49|erk0|esl8|ez40|ez60|ez70|ezos|ezze|elai|emul|eric|ezwa|fake|fly\\-|fly\\_|g\\-mo|g1 u|g560|gf\\-5|grun|gene|go.w|good|grad|hcit|hd\\-m|hd\\-p|hd\\-t|hei\\-|hp i|hpip|hs\\-c|htc |htc\\-|htca|htcg)",
        device_replacement: "Generic Feature Phone"
      }, {
        regex: "^(htcp|htcs|htct|htc\\_|haie|hita|huaw|hutc|i\\-20|i\\-go|i\\-ma|i230|iac|iac\\-|iac/|ig01|im1k|inno|iris|jata|java|kddi|kgt|kgt/|kpt |kwc\\-|klon|lexi|lg g|lg\\-a|lg\\-b|lg\\-c|lg\\-d|lg\\-f|lg\\-g|lg\\-k|lg\\-l|lg\\-m|lg\\-o|lg\\-p|lg\\-s|lg\\-t|lg\\-u|lg\\-w|lg/k|lg/l|lg/u|lg50|lg54|lge\\-|lge/|lynx|leno|m1\\-w|m3ga|m50/|maui|mc01|mc21|mcca|medi|meri|mio8|mioa|mo01|mo02|mode|modo|mot |mot\\-|mt50|mtp1|mtv |mate|maxo|merc|mits|mobi|motv|mozz|n100|n101|n102|n202|n203|n300|n302|n500|n502|n505|n700|n701|n710|nec\\-|nem\\-|newg|neon)",
        device_replacement: "Generic Feature Phone"
      }, {
        regex: "^(netf|noki|nzph|o2 x|o2\\-x|opwv|owg1|opti|oran|ot\\-s|p800|pand|pg\\-1|pg\\-2|pg\\-3|pg\\-6|pg\\-8|pg\\-c|pg13|phil|pn\\-2|pt\\-g|palm|pana|pire|pock|pose|psio|qa\\-a|qc\\-2|qc\\-3|qc\\-5|qc\\-7|qc07|qc12|qc21|qc32|qc60|qci\\-|qwap|qtek|r380|r600|raks|rim9|rove|s55/|sage|sams|sc01|sch\\-|scp\\-|sdk/|se47|sec\\-|sec0|sec1|semc|sgh\\-|shar|sie\\-|sk\\-0|sl45|slid|smb3|smt5|sp01|sph\\-|spv |spv\\-|sy01|samm|sany|sava|scoo|send|siem|smar|smit|soft|sony|t\\-mo|t218|t250|t600|t610|t618|tcl\\-|tdg\\-|telm|tim\\-|ts70|tsm\\-|tsm3|tsm5|tx\\-9|tagt)",
        device_replacement: "Generic Feature Phone"
      }, {
        regex: "^(talk|teli|topl|tosh|up.b|upg1|utst|v400|v750|veri|vk\\-v|vk40|vk50|vk52|vk53|vm40|vx98|virg|vite|voda|vulc|w3c |w3c\\-|wapj|wapp|wapu|wapm|wig |wapi|wapr|wapv|wapy|wapa|waps|wapt|winc|winw|wonu|x700|xda2|xdag|yas\\-|your|zte\\-|zeto|aste|audi|avan|blaz|brew|brvw|bumb|ccwa|cell|cldc|cmd\\-|dang|eml2|fetc|hipt|http|ibro|idea|ikom|ipaq|jbro|jemu|jigs|keji|kyoc|kyok|libw|m\\-cr|midp|mmef|moto|mwbp|mywa|newt|nok6|o2im|pant|pdxg|play|pluc|port|prox|rozo|sama|seri|smal|symb|treo|upsi|vx52|vx53|vx60|vx61|vx70|vx80|vx81|vx83|vx85|wap\\-|webc|whit|wmlb|xda\\-|xda\\_)",
        device_replacement: "Generic Feature Phone"
      }, {
        regex: "(bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\\-webcrawler|converacrawler|dataparksearch|findlinks)",
        device_replacement: "Spider"
      }],
      mobile_browser_families: ["Firefox Mobile", "Opera Mobile", "Opera Mini", "Mobile Safari", "webOS", "IE Mobile", "Playstation Portable", "Nokia", "Blackberry", "Palm", "Silk", "Android", "Maemo", "Obigo", "Netfront", "AvantGo", "Teleca", "SEMC-Browser", "Bolt", "Iris", "UP.Browser", "Symphony", "Minimo", "Bunjaloo", "Jasmine", "Dolfin", "Polaris", "BREW", "Chrome Mobile", "Chrome Mobile iOS", "UC Browser", "Tizen Browser"]
    };

    e.parsers = ["device_parsers", "browser_parsers", "os_parsers", "mobile_os_families", "mobile_browser_families"], e.types = ["browser", "os", "device"], e.regexes = r || function () {
      var r = {};
      return e.parsers.map(function (e) {
        r[e] = [];
      }), r;
    }(), e.families = function () {
      var r = {};
      return e.types.map(function (e) {
        r[e] = [];
      }), r;
    }();
    var a = Array.prototype,
        o = (Object.prototype, Function.prototype, a.forEach);
    a.indexOf;

    var i = function i(e, r) {
      for (var a = {}, o = 0; r.length > o && !(a = r[o](e)); o++) {
        ;
      }

      return a;
    },
        n = function n(e, r) {
      t(e, function (e) {
        t(r, function (r) {
          delete e[r];
        });
      });
    },
        t = forEach = function forEach(e, r, a) {
      if (null != e) if (o && e.forEach === o) e.forEach(r, a);else if (e.length === +e.length) for (var i = 0, n = e.length; n > i; i++) {
        r.call(a, e[i], i, e);
      } else for (var t in e) {
        _.has(e, t) && r.call(a, e[t], t, e);
      }
    },
        l = function l(e) {
      return !(!e || e === undefined || null == e);
    },
        d = function d(e) {
      var r = "";
      return e = e || {}, l(e) && l(e.major) && (r += e.major, l(e.minor) && (r += "." + e.minor, l(e.patch) && (r += "." + e.patch))), r;
    },
        c = function c(e) {
      e = e || {};
      var r = d(e);
      return r && (r = " " + r), e && l(e.family) ? e.family + r : "";
    };

    return e.parse = function (r) {
      var a = function a(r) {
        return e.regexes[r + "_parsers"].map(function (e) {
          function a(r) {
            var a = r.match(o);
            if (!a) return null;
            var t = {};
            return t.family = (i ? i.replace("$1", a[1]) : a[1]) || "other", t.major = parseInt(n ? n : a[2]) || null, t.minor = a[3] ? parseInt(a[3]) : null, t.patch = a[4] ? parseInt(a[4]) : null, t.tablet = e.tablet, t.man = e.manufacturer || null, t;
          }

          var o = RegExp(e.regex),
              i = e[("browser" === r ? "family" : r) + "_replacement"],
              n = e.major_version_replacement;
          return a;
        });
      },
          o = function o() {},
          t = a("browser"),
          m = a("os"),
          p = a("device"),
          s = new o();

      s.source = r, s.browser = i(r, t), l(s.browser) ? (s.browser.name = c(s.browser), s.browser.version = d(s.browser)) : s.browser = {}, s.os = i(r, m), l(s.os) ? (s.os.name = c(s.os), s.os.version = d(s.os)) : s.os = {}, s.device = i(r, p), l(s.device) ? (s.device.name = c(s.device), s.device.version = d(s.device)) : s.device = {
        tablet: !1,
        family: "Other"
      };
      var g = {};
      return e.regexes.mobile_browser_families.map(function (e) {
        g[e] = !0;
      }), e.regexes.mobile_os_families.map(function (e) {
        g[e] = !0;
      }), s.device.type = "Spider" === s.browser.family ? "Spider" : s.browser.tablet || s.os.tablet || s.device.tablet ? "Tablet" : g.hasOwnProperty(s.browser.family) ? "Mobile" : "Desktop", s.device.manufacturer = s.browser.man || s.os.man || s.device.man || null, n([s.browser, s.os, s.device], ["tablet", "man"]), s;
    }, e;
  }();

  "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = r), exports.detect = r) : e.detect = r, "function" == typeof define && define.amd && define(function () {
    return r;
  });
})(window);

!function (e) {
  function t(a) {
    if (n[a]) return n[a].exports;
    var i = n[a] = {
      i: a,
      l: !1,
      exports: {}
    };
    return e[a].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
  }

  var n = {};
  t.m = e, t.c = n, t.d = function (e, n, a) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: a
    });
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = "", t(t.s = 3);
}([function (e, t, n) {
  "use strict";

  var a, i, r;
  "function" == typeof Symbol && Symbol.iterator;
  !function (o) {
    i = [n(2)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e) {
    return e;
  });
}, function (e, t, n) {
  "use strict";

  var a,
      i,
      r,
      o = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
    return _typeof2(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
  };
  !function (o) {
    i = [n(0), n(10), n(11)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t, n, a) {
    function i(t, n, o) {
      if (!(this instanceof i)) return new i(t, n, o);
      this.el = a, this.events = {}, this.maskset = a, this.refreshValue = !1, !0 !== o && (e.isPlainObject(t) ? n = t : (n = n || {}).alias = t, this.opts = e.extend(!0, {}, this.defaults, n), this.noMasksCache = n && n.definitions !== a, this.userOptions = n || {}, this.isRTL = this.opts.numericInput, r(this.opts.alias, n, this.opts));
    }

    function r(t, n, o) {
      var s = i.prototype.aliases[t];
      return s ? (s.alias && r(s.alias, a, o), e.extend(!0, o, s), e.extend(!0, o, n), !0) : (null === o.mask && (o.mask = t), !1);
    }

    function s(t, n) {
      function r(t, r, o) {
        var s = !1;

        if (null !== t && "" !== t || ((s = null !== o.regex) ? t = (t = o.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, t = ".*")), 1 === t.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ""), o.repeat > 0 || "*" === o.repeat || "+" === o.repeat) {
          var l = "*" === o.repeat ? 0 : "+" === o.repeat ? 1 : o.repeat;
          t = o.groupmarker.start + t + o.groupmarker.end + o.quantifiermarker.start + l + "," + o.repeat + o.quantifiermarker.end;
        }

        var c,
            u = s ? "regex_" + o.regex : o.numericInput ? t.split("").reverse().join("") : t;
        return i.prototype.masksCache[u] === a || !0 === n ? (c = {
          mask: t,
          maskToken: i.prototype.analyseMask(t, s, o),
          validPositions: {},
          _buffer: a,
          buffer: a,
          tests: {},
          metadata: r,
          maskLength: a
        }, !0 !== n && (i.prototype.masksCache[u] = c, c = e.extend(!0, {}, i.prototype.masksCache[u]))) : c = e.extend(!0, {}, i.prototype.masksCache[u]), c;
      }

      if (e.isFunction(t.mask) && (t.mask = t.mask(t)), e.isArray(t.mask)) {
        if (t.mask.length > 1) {
          t.keepStatic = null === t.keepStatic || t.keepStatic;
          var o = t.groupmarker.start;
          return e.each(t.numericInput ? t.mask.reverse() : t.mask, function (n, i) {
            o.length > 1 && (o += t.groupmarker.end + t.alternatormarker + t.groupmarker.start), i.mask === a || e.isFunction(i.mask) ? o += i : o += i.mask;
          }), o += t.groupmarker.end, r(o, t.mask, t);
        }

        t.mask = t.mask.pop();
      }

      return t.mask && t.mask.mask !== a && !e.isFunction(t.mask.mask) ? r(t.mask.mask, t.mask, t) : r(t.mask, t.mask, t);
    }

    function l(r, s, c) {
      function m(e, t, n) {
        t = t || 0;
        var i,
            r,
            o,
            s = [],
            l = 0,
            u = v();

        do {
          !0 === e && h().validPositions[l] ? (r = (o = h().validPositions[l]).match, i = o.locator.slice(), s.push(!0 === n ? o.input : !1 === n ? r.nativeDef : I(l, r))) : (r = (o = b(l, i, l - 1)).match, i = o.locator.slice(), (!1 === c.jitMasking || l < u || "number" == typeof c.jitMasking && isFinite(c.jitMasking) && c.jitMasking > l) && s.push(!1 === n ? r.nativeDef : I(l, r))), l++;
        } while ((Q === a || l < Q) && (null !== r.fn || "" !== r.def) || t > l);

        return "" === s[s.length - 1] && s.pop(), h().maskLength = l + 1, s;
      }

      function h() {
        return s;
      }

      function g(e) {
        var t = h();
        t.buffer = a, !0 !== e && (t.validPositions = {}, t.p = 0);
      }

      function v(e, t, n) {
        var i = -1,
            r = -1,
            o = n || h().validPositions;
        e === a && (e = -1);

        for (var s in o) {
          var l = parseInt(s);
          o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (i = l), l >= e && (r = l));
        }

        return -1 !== i && e - i > 1 || r < e ? i : r;
      }

      function y(t, n, i, r) {
        var o,
            s = t,
            l = e.extend(!0, {}, h().validPositions),
            u = !1;

        for (h().p = t, o = n - 1; o >= s; o--) {
          h().validPositions[o] !== a && (!0 !== i && (!h().validPositions[o].match.optionality && function (e) {
            var t = h().validPositions[e];

            if (t !== a && null === t.match.fn) {
              var n = h().validPositions[e - 1],
                  i = h().validPositions[e + 1];
              return n !== a && i !== a;
            }

            return !1;
          }(o) || !1 === c.canClearPosition(h(), o, v(), r, c)) || delete h().validPositions[o]);
        }

        for (g(!0), o = s + 1; o <= v();) {
          for (; h().validPositions[s] !== a;) {
            s++;
          }

          if (o < s && (o = s + 1), h().validPositions[o] === a && M(o)) o++;else {
            var p = b(o);
            !1 === u && l[s] && l[s].match.def === p.match.def ? (h().validPositions[s] = e.extend(!0, {}, l[s]), h().validPositions[s].input = p.input, delete h().validPositions[o], o++) : P(s, p.match.def) ? !1 !== R(s, p.input || I(o), !0) && (delete h().validPositions[o], o++, u = !0) : M(o) || (o++, s--), s++;
          }
        }

        g(!0);
      }

      function k(e, t) {
        for (var n, i = e, r = v(), o = h().validPositions[r] || S(0)[0], s = o.alternation !== a ? o.locator[o.alternation].toString().split(",") : [], l = 0; l < i.length && (!((n = i[l]).match && (c.greedy && !0 !== n.match.optionalQuantifier || (!1 === n.match.optionality || !1 === n.match.newBlockMarker) && !0 !== n.match.optionalQuantifier) && (o.alternation === a || o.alternation !== n.alternation || n.locator[o.alternation] !== a && O(n.locator[o.alternation].toString().split(","), s))) || !0 === t && (null !== n.match.fn || /[0-9a-bA-Z]/.test(n.match.def))); l++) {
          ;
        }

        return n;
      }

      function b(e, t, n) {
        return h().validPositions[e] || k(S(e, t ? t.slice() : t, n));
      }

      function x(e) {
        return h().validPositions[e] ? h().validPositions[e] : S(e)[0];
      }

      function P(e, t) {
        for (var n = !1, a = S(e), i = 0; i < a.length; i++) {
          if (a[i].match && a[i].match.def === t) {
            n = !0;
            break;
          }
        }

        return n;
      }

      function S(t, n, i) {
        function r(n, i, o, l) {
          function p(o, l, g) {
            function v(t, n) {
              var a = 0 === e.inArray(t, n.matches);
              return a || e.each(n.matches, function (e, i) {
                if (!0 === i.isQuantifier && (a = v(t, n.matches[e - 1]))) return !1;
              }), a;
            }

            function y(t, n, i) {
              var r, o;
              if (h().validPositions[t - 1] && i && h().tests[t]) for (var s = h().validPositions[t - 1].locator, l = h().tests[t][0].locator, c = 0; c < i; c++) {
                if (s[c] !== l[c]) return s.slice(i + 1);
              }
              return (h().tests[t] || h().validPositions[t]) && e.each(h().tests[t] || [h().validPositions[t]], function (e, t) {
                var s = i !== a ? i : t.alternation,
                    l = t.locator[s] !== a ? t.locator[s].toString().indexOf(n) : -1;
                (o === a || l < o) && -1 !== l && (r = t, o = l);
              }), r ? r.locator.slice((i !== a ? i : r.alternation) + 1) : i !== a ? y(t, n) : a;
            }

            if (u > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + h().mask;
            if (u === t && o.matches === a) return f.push({
              match: o,
              locator: l.reverse(),
              cd: m
            }), !0;

            if (o.matches !== a) {
              if (o.isGroup && g !== o) {
                if (o = p(n.matches[e.inArray(o, n.matches) + 1], l)) return !0;
              } else if (o.isOptional) {
                var k = o;

                if (o = r(o, i, l, g)) {
                  if (s = f[f.length - 1].match, !v(s, k)) return !0;
                  d = !0, u = t;
                }
              } else if (o.isAlternator) {
                var b,
                    x = o,
                    P = [],
                    S = f.slice(),
                    w = l.length,
                    A = i.length > 0 ? i.shift() : -1;

                if (-1 === A || "string" == typeof A) {
                  var E,
                      C = u,
                      O = i.slice(),
                      R = [];
                  if ("string" == typeof A) R = A.split(",");else for (E = 0; E < x.matches.length; E++) {
                    R.push(E);
                  }

                  for (var M = 0; M < R.length; M++) {
                    if (E = parseInt(R[M]), f = [], i = y(u, E, w) || O.slice(), !0 !== (o = p(x.matches[E] || n.matches[E], [E].concat(l), g) || o) && o !== a && R[R.length - 1] < x.matches.length) {
                      var _ = e.inArray(o, n.matches) + 1;

                      n.matches.length > _ && (o = p(n.matches[_], [_].concat(l.slice(1, l.length)), g)) && (R.push(_.toString()), e.each(f, function (e, t) {
                        t.alternation = l.length - 1;
                      }));
                    }

                    b = f.slice(), u = C, f = [];

                    for (var D = 0; D < b.length; D++) {
                      var j = b[D],
                          N = !1;
                      j.alternation = j.alternation || w;

                      for (var I = 0; I < P.length; I++) {
                        var F = P[I];

                        if ("string" != typeof A || -1 !== e.inArray(j.locator[j.alternation].toString(), R)) {
                          if (function (e, t) {
                            return e.match.nativeDef === t.match.nativeDef || e.match.def === t.match.nativeDef || e.match.nativeDef === t.match.def;
                          }(j, F)) {
                            N = !0, j.alternation === F.alternation && -1 === F.locator[F.alternation].toString().indexOf(j.locator[j.alternation]) && (F.locator[F.alternation] = F.locator[F.alternation] + "," + j.locator[j.alternation], F.alternation = j.alternation), j.match.nativeDef === F.match.def && (j.locator[j.alternation] = F.locator[F.alternation], P.splice(P.indexOf(F), 1, j));
                            break;
                          }

                          if (j.match.def === F.match.def) {
                            N = !1;
                            break;
                          }

                          if (function (e, n) {
                            return null === e.match.fn && null !== n.match.fn && n.match.fn.test(e.match.def, h(), t, !1, c, !1);
                          }(j, F) || function (e, n) {
                            return null !== e.match.fn && null !== n.match.fn && n.match.fn.test(e.match.def.replace(/[\[\]]/g, ""), h(), t, !1, c, !1);
                          }(j, F)) {
                            j.alternation === F.alternation && -1 === j.locator[j.alternation].toString().indexOf(F.locator[F.alternation].toString().split("")[0]) && (j.na = j.na || j.locator[j.alternation].toString(), -1 === j.na.indexOf(j.locator[j.alternation].toString().split("")[0]) && (j.na = j.na + "," + j.locator[F.alternation].toString().split("")[0]), N = !0, j.locator[j.alternation] = F.locator[F.alternation].toString().split("")[0] + "," + j.locator[j.alternation], P.splice(P.indexOf(F), 0, j));
                            break;
                          }
                        }
                      }

                      N || P.push(j);
                    }
                  }

                  "string" == typeof A && (P = e.map(P, function (t, n) {
                    if (isFinite(n)) {
                      var i = t.alternation,
                          r = t.locator[i].toString().split(",");
                      t.locator[i] = a, t.alternation = a;

                      for (var o = 0; o < r.length; o++) {
                        -1 !== e.inArray(r[o], R) && (t.locator[i] !== a ? (t.locator[i] += ",", t.locator[i] += r[o]) : t.locator[i] = parseInt(r[o]), t.alternation = i);
                      }

                      if (t.locator[i] !== a) return t;
                    }
                  })), f = S.concat(P), u = t, d = f.length > 0, o = P.length > 0, i = O.slice();
                } else o = p(x.matches[A] || n.matches[A], [A].concat(l), g);

                if (o) return !0;
              } else if (o.isQuantifier && g !== n.matches[e.inArray(o, n.matches) - 1]) for (var T = o, G = i.length > 0 ? i.shift() : 0; G < (isNaN(T.quantifier.max) ? G + 1 : T.quantifier.max) && u <= t; G++) {
                var B = n.matches[e.inArray(T, n.matches) - 1];

                if (o = p(B, [G].concat(l), B)) {
                  if (s = f[f.length - 1].match, s.optionalQuantifier = G > T.quantifier.min - 1, v(s, B)) {
                    if (G > T.quantifier.min - 1) {
                      d = !0, u = t;
                      break;
                    }

                    return !0;
                  }

                  return !0;
                }
              } else if (o = r(o, i, l, g)) return !0;
            } else u++;
          }

          for (var g = i.length > 0 ? i.shift() : 0; g < n.matches.length; g++) {
            if (!0 !== n.matches[g].isQuantifier) {
              var v = p(n.matches[g], [g].concat(o), l);
              if (v && u === t) return v;
              if (u > t) break;
            }
          }
        }

        function o(e) {
          if (c.keepStatic && t > 0 && e.length > 1 + ("" === e[e.length - 1].match.def ? 1 : 0) && !0 !== e[0].match.optionality && !0 !== e[0].match.optionalQuantifier && null === e[0].match.fn && !/[0-9a-bA-Z]/.test(e[0].match.def)) {
            if (h().validPositions[t - 1] === a) return [k(e)];
            if (h().validPositions[t - 1].alternation === e[0].alternation) return [k(e)];
            if (h().validPositions[t - 1]) return [k(e)];
          }

          return e;
        }

        var s,
            l = h().maskToken,
            u = n ? i : 0,
            p = n ? n.slice() : [0],
            f = [],
            d = !1,
            m = n ? n.join("") : "";

        if (t > -1) {
          if (n === a) {
            for (var g, v = t - 1; (g = h().validPositions[v] || h().tests[v]) === a && v > -1;) {
              v--;
            }

            g !== a && v > -1 && (p = function (t) {
              var n = [];
              return e.isArray(t) || (t = [t]), t.length > 0 && (t[0].alternation === a ? 0 === (n = k(t.slice()).locator.slice()).length && (n = t[0].locator.slice()) : e.each(t, function (e, t) {
                if ("" !== t.def) if (0 === n.length) n = t.locator.slice();else for (var a = 0; a < n.length; a++) {
                  t.locator[a] && -1 === n[a].toString().indexOf(t.locator[a]) && (n[a] += "," + t.locator[a]);
                }
              })), n;
            }(g), m = p.join(""), u = v);
          }

          if (h().tests[t] && h().tests[t][0].cd === m) return o(h().tests[t]);

          for (var y = p.shift(); y < l.length && !(r(l[y], p, [y]) && u === t || u > t); y++) {
            ;
          }
        }

        return (0 === f.length || d) && f.push({
          match: {
            fn: null,
            cardinality: 0,
            optionality: !0,
            casing: null,
            def: "",
            placeholder: ""
          },
          locator: [],
          cd: m
        }), n !== a && h().tests[t] ? o(e.extend(!0, [], f)) : (h().tests[t] = e.extend(!0, [], f), o(h().tests[t]));
      }

      function w() {
        return h()._buffer === a && (h()._buffer = m(!1, 1), h().buffer === a && (h().buffer = h()._buffer.slice())), h()._buffer;
      }

      function A(e) {
        return h().buffer !== a && !0 !== e || (h().buffer = m(!0, v(), !0)), h().buffer;
      }

      function E(e, t, n) {
        var i, r;
        if (!0 === e) g(), e = 0, t = n.length;else for (i = e; i < t; i++) {
          delete h().validPositions[i];
        }

        for (r = e, i = e; i < t; i++) {
          if (g(!0), n[i] !== c.skipOptionalPartCharacter) {
            var o = R(r, n[i], !0, !0);
            !1 !== o && (g(!0), r = o.caret !== a ? o.caret : o.pos + 1);
          }
        }
      }

      function C(t, n, a) {
        switch (c.casing || n.casing) {
          case "upper":
            t = t.toUpperCase();
            break;

          case "lower":
            t = t.toLowerCase();
            break;

          case "title":
            var r = h().validPositions[a - 1];
            t = 0 === a || r && r.input === String.fromCharCode(i.keyCode.SPACE) ? t.toUpperCase() : t.toLowerCase();
            break;

          default:
            if (e.isFunction(c.casing)) {
              var o = Array.prototype.slice.call(arguments);
              o.push(h().validPositions), t = c.casing.apply(this, o);
            }

        }

        return t;
      }

      function O(t, n, i) {
        for (var r, o = c.greedy ? n : n.slice(0, 1), s = !1, l = i !== a ? i.split(",") : [], u = 0; u < l.length; u++) {
          -1 !== (r = t.indexOf(l[u])) && t.splice(r, 1);
        }

        for (var p = 0; p < t.length; p++) {
          if (-1 !== e.inArray(t[p], o)) {
            s = !0;
            break;
          }
        }

        return s;
      }

      function R(t, n, r, o, s, l) {
        function u(e) {
          var t = Z ? e.begin - e.end > 1 || e.begin - e.end == 1 : e.end - e.begin > 1 || e.end - e.begin == 1;
          return t && 0 === e.begin && e.end === h().maskLength ? "full" : t;
        }

        function p(n, i, r) {
          var s = !1;
          return e.each(S(n), function (l, p) {
            for (var d = p.match, m = i ? 1 : 0, k = "", b = d.cardinality; b > m; b--) {
              k += j(n - (b - 1));
            }

            if (i && (k += i), A(!0), !1 !== (s = null != d.fn ? d.fn.test(k, h(), n, r, c, u(t)) : (i === d.def || i === c.skipOptionalPartCharacter) && "" !== d.def && {
              c: I(n, d, !0) || d.def,
              pos: n
            })) {
              var x = s.c !== a ? s.c : i;
              x = x === c.skipOptionalPartCharacter && null === d.fn ? I(n, d, !0) || d.def : x;
              var P = n,
                  S = A();

              if (s.remove !== a && (e.isArray(s.remove) || (s.remove = [s.remove]), e.each(s.remove.sort(function (e, t) {
                return t - e;
              }), function (e, t) {
                y(t, t + 1, !0);
              })), s.insert !== a && (e.isArray(s.insert) || (s.insert = [s.insert]), e.each(s.insert.sort(function (e, t) {
                return e - t;
              }), function (e, t) {
                R(t.pos, t.c, !0, o);
              })), s.refreshFromBuffer) {
                var w = s.refreshFromBuffer;
                if (E(!0 === w ? w : w.start, w.end, S), s.pos === a && s.c === a) return s.pos = v(), !1;
                if ((P = s.pos !== a ? s.pos : n) !== n) return s = e.extend(s, R(P, x, !0, o)), !1;
              } else if (!0 !== s && s.pos !== a && s.pos !== n && (P = s.pos, E(n, P, A().slice()), P !== n)) return s = e.extend(s, R(P, x, !0)), !1;

              return (!0 === s || s.pos !== a || s.c !== a) && (l > 0 && g(!0), f(P, e.extend({}, p, {
                input: C(x, d, P)
              }), o, u(t)) || (s = !1), !1);
            }
          }), s;
        }

        function f(t, n, i, r) {
          if (r || c.insertMode && h().validPositions[t] !== a && i === a) {
            var o,
                s = e.extend(!0, {}, h().validPositions),
                l = v(a, !0);

            for (o = t; o <= l; o++) {
              delete h().validPositions[o];
            }

            h().validPositions[t] = e.extend(!0, {}, n);
            var u,
                p = !0,
                f = h().validPositions,
                m = !1,
                y = h().maskLength;

            for (o = u = t; o <= l; o++) {
              var k = s[o];
              if (k !== a) for (var b = u; b < h().maskLength && (null === k.match.fn && f[o] && (!0 === f[o].match.optionalQuantifier || !0 === f[o].match.optionality) || null != k.match.fn);) {
                if (b++, !1 === m && s[b] && s[b].match.def === k.match.def) h().validPositions[b] = e.extend(!0, {}, s[b]), h().validPositions[b].input = k.input, d(b), u = b, p = !0;else if (P(b, k.match.def)) {
                  var x = R(b, k.input, !0, !0);
                  p = !1 !== x, u = x.caret || x.insert ? v() : b, m = !0;
                } else if (!(p = !0 === k.generatedInput) && b >= h().maskLength - 1) break;
                if (h().maskLength < y && (h().maskLength = y), p) break;
              }
              if (!p) break;
            }

            if (!p) return h().validPositions = e.extend(!0, {}, s), g(!0), !1;
          } else h().validPositions[t] = e.extend(!0, {}, n);

          return g(!0), !0;
        }

        function d(t) {
          for (var n = t - 1; n > -1 && !h().validPositions[n]; n--) {
            ;
          }

          var i, r;

          for (n++; n < t; n++) {
            h().validPositions[n] === a && (!1 === c.jitMasking || c.jitMasking > n) && ("" === (r = S(n, b(n - 1).locator, n - 1).slice())[r.length - 1].match.def && r.pop(), (i = k(r)) && (i.match.def === c.radixPointDefinitionSymbol || !M(n, !0) || e.inArray(c.radixPoint, A()) < n && i.match.fn && i.match.fn.test(I(n), h(), n, !1, c)) && !1 !== (x = p(n, I(n, i.match, !0) || (null == i.match.fn ? i.match.def : "" !== I(n) ? I(n) : A()[n]), !0)) && (h().validPositions[x.pos || n].generatedInput = !0));
          }
        }

        r = !0 === r;
        var m = t;
        t.begin !== a && (m = Z && !u(t) ? t.end : t.begin);
        var x = !0,
            w = e.extend(!0, {}, h().validPositions);

        if (e.isFunction(c.preValidation) && !r && !0 !== o && !0 !== l && (x = c.preValidation(A(), m, n, u(t), c)), !0 === x) {
          if (d(m), u(t) && (V(a, i.keyCode.DELETE, t, !0, !0), m = h().p), m < h().maskLength && (Q === a || m < Q) && (x = p(m, n, r), (!r || !0 === o) && !1 === x && !0 !== l)) {
            var D = h().validPositions[m];

            if (!D || null !== D.match.fn || D.match.def !== n && n !== c.skipOptionalPartCharacter) {
              if ((c.insertMode || h().validPositions[_(m)] === a) && !M(m, !0)) for (var N = m + 1, F = _(m); N <= F; N++) {
                if (!1 !== (x = p(N, n, r))) {
                  !function (t, n) {
                    var i = h().validPositions[n];
                    if (i) for (var r = i.locator, o = r.length, s = t; s < n; s++) {
                      if (h().validPositions[s] === a && !M(s, !0)) {
                        var l = S(s).slice(),
                            c = k(l, !0),
                            u = -1;
                        "" === l[l.length - 1].match.def && l.pop(), e.each(l, function (e, t) {
                          for (var n = 0; n < o; n++) {
                            if (t.locator[n] === a || !O(t.locator[n].toString().split(","), r[n].toString().split(","), t.na)) {
                              var i = r[n],
                                  s = c.locator[n],
                                  l = t.locator[n];
                              i - s > Math.abs(i - l) && (c = t);
                              break;
                            }

                            u < n && (u = n, c = t);
                          }
                        }), (c = e.extend({}, c, {
                          input: I(s, c.match, !0) || c.match.def
                        })).generatedInput = !0, f(s, c, !0), h().validPositions[n] = a, p(n, i.input, !0);
                      }
                    }
                  }(m, x.pos !== a ? x.pos : N), m = N;
                  break;
                }
              }
            } else x = {
              caret: _(m)
            };
          }

          !1 === x && c.keepStatic && !r && !0 !== s && (x = function (t, n, i) {
            var r,
                s,
                l,
                u,
                p,
                f,
                d,
                m,
                y = e.extend(!0, {}, h().validPositions),
                k = !1,
                b = v();

            for (u = h().validPositions[b]; b >= 0; b--) {
              if ((l = h().validPositions[b]) && l.alternation !== a) {
                if (r = b, s = h().validPositions[r].alternation, u.locator[l.alternation] !== l.locator[l.alternation]) break;
                u = l;
              }
            }

            if (s !== a) {
              m = parseInt(r);
              var x = u.locator[u.alternation || s] !== a ? u.locator[u.alternation || s] : d[0];
              x.length > 0 && (x = x.split(",")[0]);
              var P = h().validPositions[m],
                  w = h().validPositions[m - 1];
              e.each(S(m, w ? w.locator : a, m - 1), function (r, l) {
                d = l.locator[s] ? l.locator[s].toString().split(",") : [];

                for (var u = 0; u < d.length; u++) {
                  var b = [],
                      S = 0,
                      w = 0,
                      A = !1;

                  if (x < d[u] && (l.na === a || -1 === e.inArray(d[u], l.na.split(",")) || -1 === e.inArray(x.toString(), d))) {
                    h().validPositions[m] = e.extend(!0, {}, l);
                    var E = h().validPositions[m].locator;

                    for (h().validPositions[m].locator[s] = parseInt(d[u]), null == l.match.fn ? (P.input !== l.match.def && (A = !0, !0 !== P.generatedInput && b.push(P.input)), w++, h().validPositions[m].generatedInput = !/[0-9a-bA-Z]/.test(l.match.def), h().validPositions[m].input = l.match.def) : h().validPositions[m].input = P.input, p = m + 1; p < v(a, !0) + 1; p++) {
                      (f = h().validPositions[p]) && !0 !== f.generatedInput && /[0-9a-bA-Z]/.test(f.input) ? b.push(f.input) : p < t && S++, delete h().validPositions[p];
                    }

                    for (A && b[0] === l.match.def && b.shift(), g(!0), k = !0; b.length > 0;) {
                      var C = b.shift();
                      if (C !== c.skipOptionalPartCharacter && !(k = R(v(a, !0) + 1, C, !1, o, !0))) break;
                    }

                    if (k) {
                      h().validPositions[m].locator = E;
                      var O = v(t) + 1;

                      for (p = m + 1; p < v() + 1; p++) {
                        ((f = h().validPositions[p]) === a || null == f.match.fn) && p < t + (w - S) && w++;
                      }

                      k = R((t += w - S) > O ? O : t, n, i, o, !0);
                    }

                    if (k) return !1;
                    g(), h().validPositions = e.extend(!0, {}, y);
                  }
                }
              });
            }

            return k;
          }(m, n, r)), !0 === x && (x = {
            pos: m
          });
        }

        if (e.isFunction(c.postValidation) && !1 !== x && !r && !0 !== o && !0 !== l) {
          var T = c.postValidation(A(!0), x, c);

          if (T.refreshFromBuffer && T.buffer) {
            var G = T.refreshFromBuffer;
            E(!0 === G ? G : G.start, G.end, T.buffer);
          }

          x = !0 === T ? x : T;
        }

        return x && x.pos === a && (x.pos = m), !1 !== x && !0 !== l || (g(!0), h().validPositions = e.extend(!0, {}, w)), x;
      }

      function M(e, t) {
        var n = b(e).match;
        if ("" === n.def && (n = x(e).match), null != n.fn) return n.fn;

        if (!0 !== t && e > -1) {
          var a = S(e);
          return a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0);
        }

        return !1;
      }

      function _(e, t) {
        var n = h().maskLength;
        if (e >= n) return n;
        var a = e;

        for (S(n + 1).length > 1 && (m(!0, n + 1, !0), n = h().maskLength); ++a < n && (!0 === t && (!0 !== x(a).match.newBlockMarker || !M(a)) || !0 !== t && !M(a));) {
          ;
        }

        return a;
      }

      function D(e, t) {
        var n,
            a = e;
        if (a <= 0) return 0;

        for (; --a > 0 && (!0 === t && !0 !== x(a).match.newBlockMarker || !0 !== t && !M(a) && ((n = S(a)).length < 2 || 2 === n.length && "" === n[1].match.def));) {
          ;
        }

        return a;
      }

      function j(e) {
        return h().validPositions[e] === a ? I(e) : h().validPositions[e].input;
      }

      function N(t, n, i, r, o) {
        if (r && e.isFunction(c.onBeforeWrite)) {
          var s = c.onBeforeWrite.call(W, r, n, i, c);

          if (s) {
            if (s.refreshFromBuffer) {
              var l = s.refreshFromBuffer;
              E(!0 === l ? l : l.start, l.end, s.buffer || n), n = A(!0);
            }

            i !== a && (i = s.caret !== a ? s.caret : i);
          }
        }

        t !== a && (t.inputmask._valueSet(n.join("")), i === a || r !== a && "blur" === r.type ? H(t, i, 0 === n.length) : d && r && "input" === r.type ? setTimeout(function () {
          G(t, i);
        }, 0) : G(t, i), !0 === o && (X = !0, e(t).trigger("input")));
      }

      function I(t, n, i) {
        if ((n = n || x(t).match).placeholder !== a || !0 === i) return e.isFunction(n.placeholder) ? n.placeholder(c) : n.placeholder;

        if (null === n.fn) {
          if (t > -1 && h().validPositions[t] === a) {
            var r,
                o = S(t),
                s = [];
            if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var l = 0; l < o.length; l++) {
              if (!0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (null === o[l].match.fn || r === a || !1 !== o[l].match.fn.test(r.match.def, h(), t, !0, c)) && (s.push(o[l]), null === o[l].match.fn && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return c.placeholder.charAt(t % c.placeholder.length);
            }
          }

          return n.def;
        }

        return c.placeholder.charAt(t % c.placeholder.length);
      }

      function F(t, r, o, s, l) {
        function u(e, t) {
          return -1 !== w().slice(e, _(e)).join("").indexOf(t) && !M(e) && x(e).match.nativeDef === t.charAt(t.length - 1);
        }

        var p = s.slice(),
            f = "",
            d = -1,
            m = a;
        if (g(), o || !0 === c.autoUnmask) d = _(d);else {
          var y = w().slice(0, _(-1)).join(""),
              k = p.join("").match(new RegExp("^" + i.escapeRegex(y), "g"));
          k && k.length > 0 && (p.splice(0, k.length * y.length), d = _(d));
        }

        if (-1 === d ? (h().p = _(d), d = 0) : h().p = d, e.each(p, function (n, i) {
          if (i !== a) if (h().validPositions[n] === a && p[n] === I(n) && M(n, !0) && !1 === R(n, p[n], !0, a, a, !0)) h().p++;else {
            var r = new e.Event("_checkval");
            r.which = i.charCodeAt(0), f += i;
            var s = v(a, !0),
                l = h().validPositions[s],
                y = b(s + 1, l ? l.locator.slice() : a, s);

            if (!u(d, f) || o || c.autoUnmask) {
              var k = o ? n : null == y.match.fn && y.match.optionality && s + 1 < h().p ? s + 1 : h().p;
              m = ae.keypressEvent.call(t, r, !0, !1, o, k), d = k + 1, f = "";
            } else m = ae.keypressEvent.call(t, r, !0, !1, !0, s + 1);

            if (!1 !== m && !o && e.isFunction(c.onBeforeWrite)) {
              var x = m;

              if (m = c.onBeforeWrite.call(W, r, A(), m.forwardPosition, c), (m = e.extend(x, m)) && m.refreshFromBuffer) {
                var P = m.refreshFromBuffer;
                E(!0 === P ? P : P.start, P.end, m.buffer), g(!0), m.caret && (h().p = m.caret, m.forwardPosition = m.caret);
              }
            }
          }
        }), r) {
          var P = a;
          n.activeElement === t && m && (P = c.numericInput ? D(m.forwardPosition) : m.forwardPosition), N(t, A(), P, l || new e.Event("checkval"), l && "input" === l.type);
        }
      }

      function T(t) {
        if (t) {
          if (t.inputmask === a) return t.value;
          t.inputmask && t.inputmask.refreshValue && ae.setValueEvent.call(t);
        }

        var n = [],
            i = h().validPositions;

        for (var r in i) {
          i[r].match && null != i[r].match.fn && n.push(i[r].input);
        }

        var o = 0 === n.length ? "" : (Z ? n.reverse() : n).join("");

        if (e.isFunction(c.onUnMask)) {
          var s = (Z ? A().slice().reverse() : A()).join("");
          o = c.onUnMask.call(W, s, o, c);
        }

        return o;
      }

      function G(e, i, r, o) {
        function s(e) {
          return !0 === o || !Z || "number" != typeof e || c.greedy && "" === c.placeholder || (e = A().join("").length - e), e;
        }

        var l;
        if (i === a) return e.setSelectionRange ? (i = e.selectionStart, r = e.selectionEnd) : t.getSelection ? (l = t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && l.commonAncestorContainer !== e || (i = l.startOffset, r = l.endOffset) : n.selection && n.selection.createRange && (r = (i = 0 - (l = n.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + l.text.length), {
          begin: s(i),
          end: s(r)
        };

        if (i.begin !== a && (r = i.end, i = i.begin), "number" == typeof i) {
          i = s(i), r = "number" == typeof (r = s(r)) ? r : i;
          var p = parseInt(((e.ownerDocument.defaultView || t).getComputedStyle ? (e.ownerDocument.defaultView || t).getComputedStyle(e, null) : e.currentStyle).fontSize) * r;
          if (e.scrollLeft = p > e.scrollWidth ? p : 0, u || !1 !== c.insertMode || i !== r || r++, e.setSelectionRange) e.selectionStart = i, e.selectionEnd = r;else if (t.getSelection) {
            if (l = n.createRange(), e.firstChild === a || null === e.firstChild) {
              var f = n.createTextNode("");
              e.appendChild(f);
            }

            l.setStart(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), l.setEnd(e.firstChild, r < e.inputmask._valueGet().length ? r : e.inputmask._valueGet().length), l.collapse(!0);
            var d = t.getSelection();
            d.removeAllRanges(), d.addRange(l);
          } else e.createTextRange && ((l = e.createTextRange()).collapse(!0), l.moveEnd("character", r), l.moveStart("character", i), l.select());
          H(e, {
            begin: i,
            end: r
          });
        }
      }

      function B(t) {
        var n,
            i,
            r = A(),
            o = r.length,
            s = v(),
            l = {},
            c = h().validPositions[s],
            u = c !== a ? c.locator.slice() : a;

        for (n = s + 1; n < r.length; n++) {
          u = (i = b(n, u, n - 1)).locator.slice(), l[n] = e.extend(!0, {}, i);
        }

        var p = c && c.alternation !== a ? c.locator[c.alternation] : a;

        for (n = o - 1; n > s && ((i = l[n]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || p && (p !== l[n].locator[c.alternation] && null != i.match.fn || null === i.match.fn && i.locator[c.alternation] && O(i.locator[c.alternation].toString().split(","), p.toString().split(",")) && "" !== S(n)[0].def)) && r[n] === I(n, i.match); n--) {
          o--;
        }

        return t ? {
          l: o,
          def: l[o] ? l[o].match : a
        } : o;
      }

      function L(e) {
        for (var t, n = B(), i = e.length, r = h().validPositions[v()]; n < i && !M(n, !0) && (t = r !== a ? b(n, r.locator.slice(""), r) : x(n)) && !0 !== t.match.optionality && (!0 !== t.match.optionalQuantifier && !0 !== t.match.newBlockMarker || n + 1 === i && "" === (r !== a ? b(n + 1, r.locator.slice(""), r) : x(n + 1)).match.def);) {
          n++;
        }

        for (; (t = h().validPositions[n - 1]) && t && t.match.optionality && t.input === c.skipOptionalPartCharacter;) {
          n--;
        }

        return e.splice(n), e;
      }

      function U(t) {
        if (e.isFunction(c.isComplete)) return c.isComplete(t, c);
        if ("*" === c.repeat) return a;
        var n = !1,
            i = B(!0),
            r = D(i.l);

        if (i.def === a || i.def.newBlockMarker || i.def.optionality || i.def.optionalQuantifier) {
          n = !0;

          for (var o = 0; o <= r; o++) {
            var s = b(o).match;

            if (null !== s.fn && h().validPositions[o] === a && !0 !== s.optionality && !0 !== s.optionalQuantifier || null === s.fn && t[o] !== I(o, s)) {
              n = !1;
              break;
            }
          }
        }

        return n;
      }

      function V(t, n, r, o, s) {
        if ((c.numericInput || Z) && (n === i.keyCode.BACKSPACE ? n = i.keyCode.DELETE : n === i.keyCode.DELETE && (n = i.keyCode.BACKSPACE), Z)) {
          var l = r.end;
          r.end = r.begin, r.begin = l;
        }

        n === i.keyCode.BACKSPACE && (r.end - r.begin < 1 || !1 === c.insertMode) ? (r.begin = D(r.begin), h().validPositions[r.begin] !== a && h().validPositions[r.begin].input === c.groupSeparator && r.begin--) : n === i.keyCode.DELETE && r.begin === r.end && (r.end = M(r.end, !0) && h().validPositions[r.end] && h().validPositions[r.end].input !== c.radixPoint ? r.end + 1 : _(r.end) + 1, h().validPositions[r.begin] !== a && h().validPositions[r.begin].input === c.groupSeparator && r.end++), y(r.begin, r.end, !1, o), !0 !== o && function () {
          if (c.keepStatic) {
            for (var n = [], i = v(-1, !0), r = e.extend(!0, {}, h().validPositions), o = h().validPositions[i]; i >= 0; i--) {
              var s = h().validPositions[i];

              if (s) {
                if (!0 !== s.generatedInput && /[0-9a-bA-Z]/.test(s.input) && n.push(s.input), delete h().validPositions[i], s.alternation !== a && s.locator[s.alternation] !== o.locator[s.alternation]) break;
                o = s;
              }
            }

            if (i > -1) for (h().p = _(v(-1, !0)); n.length > 0;) {
              var l = new e.Event("keypress");
              l.which = n.pop().charCodeAt(0), ae.keypressEvent.call(t, l, !0, !1, !1, h().p);
            } else h().validPositions = e.extend(!0, {}, r);
          }
        }();
        var u = v(r.begin, !0);
        if (u < r.begin) h().p = _(u);else if (!0 !== o && (h().p = r.begin, !0 !== s)) for (; h().p < u && h().validPositions[h().p] === a;) {
          h().p++;
        }
      }

      function K(a) {
        function i(e) {
          var t,
              i = n.createElement("span");

          for (var o in r) {
            isNaN(o) && -1 !== o.indexOf("font") && (i.style[o] = r[o]);
          }

          i.style.textTransform = r.textTransform, i.style.letterSpacing = r.letterSpacing, i.style.position = "absolute", i.style.height = "auto", i.style.width = "auto", i.style.visibility = "hidden", i.style.whiteSpace = "nowrap", n.body.appendChild(i);

          var s,
              l = a.inputmask._valueGet(),
              c = 0;

          for (t = 0, s = l.length; t <= s; t++) {
            if (i.innerHTML += l.charAt(t) || "_", i.offsetWidth >= e) {
              var u = e - c,
                  p = i.offsetWidth - e;
              i.innerHTML = l.charAt(t), t = (u -= i.offsetWidth / 3) < p ? t - 1 : t;
              break;
            }

            c = i.offsetWidth;
          }

          return n.body.removeChild(i), t;
        }

        var r = (a.ownerDocument.defaultView || t).getComputedStyle(a, null),
            o = n.createElement("div");
        o.style.width = r.width, o.style.textAlign = r.textAlign, ($ = n.createElement("div")).className = "im-colormask", a.parentNode.insertBefore($, a), a.parentNode.removeChild(a), $.appendChild(o), $.appendChild(a), a.style.left = o.offsetLeft + "px", e(a).on("click", function (e) {
          return G(a, i(e.clientX)), ae.clickEvent.call(a, [e]);
        }), e(a).on("keydown", function (e) {
          e.shiftKey || !1 === c.insertMode || setTimeout(function () {
            H(a);
          }, 0);
        });
      }

      function H(e, t, i) {
        function r() {
          f || null !== s.fn && l.input !== a ? f && (null !== s.fn && l.input !== a || "" === s.def) && (f = !1, p += "</span>") : (f = !0, p += "<span class='im-static'>");
        }

        function o(a) {
          !0 !== a && d !== t.begin || n.activeElement !== e || (p += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>");
        }

        var s,
            l,
            u,
            p = "",
            f = !1,
            d = 0;

        if ($ !== a) {
          var m = A();

          if (t === a ? t = G(e) : t.begin === a && (t = {
            begin: t,
            end: t
          }), !0 !== i) {
            var g = v();

            do {
              o(), h().validPositions[d] ? (l = h().validPositions[d], s = l.match, u = l.locator.slice(), r(), p += m[d]) : (l = b(d, u, d - 1), s = l.match, u = l.locator.slice(), (!1 === c.jitMasking || d < g || "number" == typeof c.jitMasking && isFinite(c.jitMasking) && c.jitMasking > d) && (r(), p += I(d, s))), d++;
            } while ((Q === a || d < Q) && (null !== s.fn || "" !== s.def) || g > d || f);

            -1 === p.indexOf("im-caret") && o(!0), f && r();
          }

          var y = $.getElementsByTagName("div")[0];
          y.innerHTML = p, e.inputmask.positionColorMask(e, y);
        }
      }

      s = s || this.maskset, c = c || this.opts;
      var z,
          q,
          Q,
          $,
          W = this,
          Y = this.el,
          Z = this.isRTL,
          J = !1,
          X = !1,
          ee = !1,
          te = !1,
          ne = {
        on: function on(t, n, r) {
          var o = function o(t) {
            if (this.inputmask === a && "FORM" !== this.nodeName) {
              var n = e.data(this, "_inputmask_opts");
              n ? new i(n).mask(this) : ne.off(this);
            } else {
              if ("setvalue" === t.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === c.tabThrough && t.keyCode === i.keyCode.TAB))) {
                switch (t.type) {
                  case "input":
                    if (!0 === X) return X = !1, t.preventDefault();
                    break;

                  case "keydown":
                    J = !1, X = !1;
                    break;

                  case "keypress":
                    if (!0 === J) return t.preventDefault();
                    J = !0;
                    break;

                  case "click":
                    if (p || f) {
                      var o = this,
                          s = arguments;
                      return setTimeout(function () {
                        r.apply(o, s);
                      }, 0), !1;
                    }

                }

                var l = r.apply(this, arguments);
                return !1 === l && (t.preventDefault(), t.stopPropagation()), l;
              }

              t.preventDefault();
            }
          };

          t.inputmask.events[n] = t.inputmask.events[n] || [], t.inputmask.events[n].push(o), -1 !== e.inArray(n, ["submit", "reset"]) ? null !== t.form && e(t.form).on(n, o) : e(t).on(n, o);
        },
        off: function off(t, n) {
          if (t.inputmask && t.inputmask.events) {
            var a;
            n ? (a = [])[n] = t.inputmask.events[n] : a = t.inputmask.events, e.each(a, function (n, a) {
              for (; a.length > 0;) {
                var i = a.pop();
                -1 !== e.inArray(n, ["submit", "reset"]) ? null !== t.form && e(t.form).off(n, i) : e(t).off(n, i);
              }

              delete t.inputmask.events[n];
            });
          }
        }
      },
          ae = {
        keydownEvent: function keydownEvent(t) {
          var a = this,
              r = e(a),
              o = t.keyCode,
              s = G(a);
          if (o === i.keyCode.BACKSPACE || o === i.keyCode.DELETE || f && o === i.keyCode.BACKSPACE_SAFARI || t.ctrlKey && o === i.keyCode.X && !function (e) {
            var t = n.createElement("input"),
                a = "on" + e,
                i = (a in t);
            return i || (t.setAttribute(a, "return;"), i = "function" == typeof t[a]), t = null, i;
          }("cut")) t.preventDefault(), V(a, o, s), N(a, A(!0), h().p, t, a.inputmask._valueGet() !== A().join("")), a.inputmask._valueGet() === w().join("") ? r.trigger("cleared") : !0 === U(A()) && r.trigger("complete");else if (o === i.keyCode.END || o === i.keyCode.PAGE_DOWN) {
            t.preventDefault();

            var l = _(v());

            c.insertMode || l !== h().maskLength || t.shiftKey || l--, G(a, t.shiftKey ? s.begin : l, l, !0);
          } else o === i.keyCode.HOME && !t.shiftKey || o === i.keyCode.PAGE_UP ? (t.preventDefault(), G(a, 0, t.shiftKey ? s.begin : 0, !0)) : (c.undoOnEscape && o === i.keyCode.ESCAPE || 90 === o && t.ctrlKey) && !0 !== t.altKey ? (F(a, !0, !1, z.split("")), r.trigger("click")) : o !== i.keyCode.INSERT || t.shiftKey || t.ctrlKey ? !0 === c.tabThrough && o === i.keyCode.TAB ? (!0 === t.shiftKey ? (null === x(s.begin).match.fn && (s.begin = _(s.begin)), s.end = D(s.begin, !0), s.begin = D(s.end, !0)) : (s.begin = _(s.begin, !0), s.end = _(s.begin, !0), s.end < h().maskLength && s.end--), s.begin < h().maskLength && (t.preventDefault(), G(a, s.begin, s.end))) : t.shiftKey || !1 === c.insertMode && (o === i.keyCode.RIGHT ? setTimeout(function () {
            var e = G(a);
            G(a, e.begin);
          }, 0) : o === i.keyCode.LEFT && setTimeout(function () {
            var e = G(a);
            G(a, Z ? e.begin + 1 : e.begin - 1);
          }, 0)) : (c.insertMode = !c.insertMode, G(a, c.insertMode || s.begin !== h().maskLength ? s.begin : s.begin - 1));
          c.onKeyDown.call(this, t, A(), G(a).begin, c), ee = -1 !== e.inArray(o, c.ignorables);
        },
        keypressEvent: function keypressEvent(t, n, r, o, s) {
          var l = this,
              u = e(l),
              p = t.which || t.charCode || t.keyCode;
          if (!(!0 === n || t.ctrlKey && t.altKey) && (t.ctrlKey || t.metaKey || ee)) return p === i.keyCode.ENTER && z !== A().join("") && (z = A().join(""), setTimeout(function () {
            u.trigger("change");
          }, 0)), !0;

          if (p) {
            46 === p && !1 === t.shiftKey && "" !== c.radixPoint && (p = c.radixPoint.charCodeAt(0));
            var f,
                d = n ? {
              begin: s,
              end: s
            } : G(l),
                m = String.fromCharCode(p);
            h().writeOutBuffer = !0;
            var v = R(d, m, o);

            if (!1 !== v && (g(!0), f = v.caret !== a ? v.caret : n ? v.pos + 1 : _(v.pos), h().p = f), !1 !== r && (setTimeout(function () {
              c.onKeyValidation.call(l, p, v, c);
            }, 0), h().writeOutBuffer && !1 !== v)) {
              var y = A();
              N(l, y, c.numericInput && v.caret === a ? D(f) : f, t, !0 !== n), !0 !== n && setTimeout(function () {
                !0 === U(y) && u.trigger("complete");
              }, 0);
            }

            if (t.preventDefault(), n) return !1 !== v && (v.forwardPosition = f), v;
          }
        },
        pasteEvent: function pasteEvent(n) {
          var a,
              i = this,
              r = n.originalEvent || n,
              o = e(i),
              s = i.inputmask._valueGet(!0),
              l = G(i);

          Z && (a = l.end, l.end = l.begin, l.begin = a);
          var u = s.substr(0, l.begin),
              p = s.substr(l.end, s.length);
          if (u === (Z ? w().reverse() : w()).slice(0, l.begin).join("") && (u = ""), p === (Z ? w().reverse() : w()).slice(l.end).join("") && (p = ""), Z && (a = u, u = p, p = a), t.clipboardData && t.clipboardData.getData) s = u + t.clipboardData.getData("Text") + p;else {
            if (!r.clipboardData || !r.clipboardData.getData) return !0;
            s = u + r.clipboardData.getData("text/plain") + p;
          }
          var f = s;

          if (e.isFunction(c.onBeforePaste)) {
            if (!1 === (f = c.onBeforePaste.call(W, s, c))) return n.preventDefault();
            f || (f = s);
          }

          return F(i, !1, !1, Z ? f.split("").reverse() : f.toString().split("")), N(i, A(), _(v()), n, z !== A().join("")), !0 === U(A()) && o.trigger("complete"), n.preventDefault();
        },
        inputFallBackEvent: function inputFallBackEvent(t) {
          var n = this,
              a = n.inputmask._valueGet();

          if (A().join("") !== a) {
            var r = G(n);
            if (!1 === function (t, n, a) {
              if ("." === n.charAt(a.begin - 1) && "" !== c.radixPoint && ((n = n.split(""))[a.begin - 1] = c.radixPoint.charAt(0), n = n.join("")), n.charAt(a.begin - 1) === c.radixPoint && n.length > A().length) {
                var i = new e.Event("keypress");
                return i.which = c.radixPoint.charCodeAt(0), ae.keypressEvent.call(t, i, !0, !0, !1, a.begin - 1), !1;
              }
            }(n, a, r)) return !1;
            if (a = a.replace(new RegExp("(" + i.escapeRegex(w().join("")) + ")*"), ""), !1 === function (t, n, a) {
              if (p) {
                var i = n.replace(A().join(""), "");

                if (1 === i.length) {
                  var r = new e.Event("keypress");
                  return r.which = i.charCodeAt(0), ae.keypressEvent.call(t, r, !0, !0, !1, h().validPositions[a.begin - 1] ? a.begin : a.begin - 1), !1;
                }
              }
            }(n, a, r)) return !1;
            r.begin > a.length && (G(n, a.length), r = G(n));
            var o = A().join(""),
                s = a.substr(0, r.begin),
                l = a.substr(r.begin),
                u = o.substr(0, r.begin),
                f = o.substr(r.begin),
                d = r,
                m = "",
                g = !1;

            if (s !== u) {
              d.begin = 0;

              for (var v = (g = s.length >= u.length) ? s.length : u.length, y = 0; s.charAt(y) === u.charAt(y) && y < v; y++) {
                d.begin++;
              }

              g && (m += s.slice(d.begin, d.end));
            }

            l !== f && (l.length > f.length ? g && (d.end = d.begin) : l.length < f.length ? d.end += f.length - l.length : l.charAt(0) !== f.charAt(0) && d.end++), N(n, A(), d), m.length > 0 ? e.each(m.split(""), function (t, a) {
              var i = new e.Event("keypress");
              i.which = a.charCodeAt(0), ee = !1, ae.keypressEvent.call(n, i);
            }) : (d.begin === d.end - 1 && G(n, D(d.begin + 1), d.end), t.keyCode = i.keyCode.DELETE, ae.keydownEvent.call(n, t)), t.preventDefault();
          }
        },
        setValueEvent: function setValueEvent(t) {
          this.inputmask.refreshValue = !1;

          var n = this,
              a = n.inputmask._valueGet(!0);

          e.isFunction(c.onBeforeMask) && (a = c.onBeforeMask.call(W, a, c) || a), a = a.split(""), F(n, !0, !1, Z ? a.reverse() : a), z = A().join(""), (c.clearMaskOnLostFocus || c.clearIncomplete) && n.inputmask._valueGet() === w().join("") && n.inputmask._valueSet("");
        },
        focusEvent: function focusEvent(e) {
          var t = this,
              n = t.inputmask._valueGet();

          c.showMaskOnFocus && (!c.showMaskOnHover || c.showMaskOnHover && "" === n) && (t.inputmask._valueGet() !== A().join("") ? N(t, A(), _(v())) : !1 === te && G(t, _(v()))), !0 === c.positionCaretOnTab && !1 === te && "" !== n && (N(t, A(), G(t)), ae.clickEvent.apply(t, [e, !0])), z = A().join("");
        },
        mouseleaveEvent: function mouseleaveEvent(e) {
          var t = this;

          if (te = !1, c.clearMaskOnLostFocus && n.activeElement !== t) {
            var a = A().slice(),
                i = t.inputmask._valueGet();

            i !== t.getAttribute("placeholder") && "" !== i && (-1 === v() && i === w().join("") ? a = [] : L(a), N(t, a));
          }
        },
        clickEvent: function clickEvent(t, i) {
          function r(t) {
            if ("" !== c.radixPoint) {
              var n = h().validPositions;

              if (n[t] === a || n[t].input === I(t)) {
                if (t < _(-1)) return !0;
                var i = e.inArray(c.radixPoint, A());

                if (-1 !== i) {
                  for (var r in n) {
                    if (i < r && n[r].input !== I(r)) return !1;
                  }

                  return !0;
                }
              }
            }

            return !1;
          }

          var o = this;
          setTimeout(function () {
            if (n.activeElement === o) {
              var e = G(o);
              if (i && (Z ? e.end = e.begin : e.begin = e.end), e.begin === e.end) switch (c.positionCaretOnClick) {
                case "none":
                  break;

                case "radixFocus":
                  if (r(e.begin)) {
                    var t = A().join("").indexOf(c.radixPoint);
                    G(o, c.numericInput ? _(t) : t);
                    break;
                  }

                default:
                  var s = e.begin,
                      l = v(s, !0),
                      u = _(l);

                  if (s < u) G(o, M(s, !0) || M(s - 1, !0) ? s : _(s));else {
                    var p = h().validPositions[l],
                        f = b(u, p ? p.match.locator : a, p),
                        d = I(u, f.match);

                    if ("" !== d && A()[u] !== d && !0 !== f.match.optionalQuantifier && !0 !== f.match.newBlockMarker || !M(u, !0) && f.match.def === d) {
                      var m = _(u);

                      (s >= m || s === u) && (u = m);
                    }

                    G(o, u);
                  }
              }
            }
          }, 0);
        },
        dblclickEvent: function dblclickEvent(e) {
          var t = this;
          setTimeout(function () {
            G(t, 0, _(v()));
          }, 0);
        },
        cutEvent: function cutEvent(a) {
          var r = this,
              o = e(r),
              s = G(r),
              l = a.originalEvent || a,
              c = t.clipboardData || l.clipboardData,
              u = Z ? A().slice(s.end, s.begin) : A().slice(s.begin, s.end);
          c.setData("text", Z ? u.reverse().join("") : u.join("")), n.execCommand && n.execCommand("copy"), V(r, i.keyCode.DELETE, s), N(r, A(), h().p, a, z !== A().join("")), r.inputmask._valueGet() === w().join("") && o.trigger("cleared");
        },
        blurEvent: function blurEvent(t) {
          var n = e(this),
              i = this;

          if (i.inputmask) {
            var r = i.inputmask._valueGet(),
                o = A().slice();

            "" !== r && (c.clearMaskOnLostFocus && (-1 === v() && r === w().join("") ? o = [] : L(o)), !1 === U(o) && (setTimeout(function () {
              n.trigger("incomplete");
            }, 0), c.clearIncomplete && (g(), o = c.clearMaskOnLostFocus ? [] : w().slice())), N(i, o, a, t)), z !== A().join("") && (z = o.join(""), n.trigger("change"));
          }
        },
        mouseenterEvent: function mouseenterEvent(e) {
          var t = this;
          te = !0, n.activeElement !== t && c.showMaskOnHover && t.inputmask._valueGet() !== A().join("") && N(t, A());
        },
        submitEvent: function submitEvent(e) {
          z !== A().join("") && q.trigger("change"), c.clearMaskOnLostFocus && -1 === v() && Y.inputmask._valueGet && Y.inputmask._valueGet() === w().join("") && Y.inputmask._valueSet(""), c.removeMaskOnSubmit && (Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(), !0), setTimeout(function () {
            N(Y, A());
          }, 0));
        },
        resetEvent: function resetEvent(e) {
          Y.inputmask.refreshValue = !0, setTimeout(function () {
            q.trigger("setvalue");
          }, 0);
        }
      };

      i.prototype.positionColorMask = function (e, t) {
        e.style.left = t.offsetLeft + "px";
      };

      var ie;
      if (r !== a) switch (r.action) {
        case "isComplete":
          return Y = r.el, U(A());

        case "unmaskedvalue":
          return Y !== a && r.value === a || (ie = r.value, ie = (e.isFunction(c.onBeforeMask) ? c.onBeforeMask.call(W, ie, c) || ie : ie).split(""), F(a, !1, !1, Z ? ie.reverse() : ie), e.isFunction(c.onBeforeWrite) && c.onBeforeWrite.call(W, a, A(), 0, c)), T(Y);

        case "mask":
          !function (t) {
            ne.off(t);

            var i = function (t, i) {
              var r = t.getAttribute("type"),
                  s = "INPUT" === t.tagName && -1 !== e.inArray(r, i.supportsInputType) || t.isContentEditable || "TEXTAREA" === t.tagName;
              if (!s) if ("INPUT" === t.tagName) {
                var l = n.createElement("input");
                l.setAttribute("type", r), s = "text" === l.type, l = null;
              } else s = "partial";
              return !1 !== s ? function (t) {
                function r() {
                  return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== v() || !0 !== i.nullable ? n.activeElement === this && i.clearMaskOnLostFocus ? (Z ? L(A().slice()).reverse() : L(A().slice())).join("") : l.call(this) : "" : l.call(this);
                }

                function s(t) {
                  c.call(this, t), this.inputmask && e(this).trigger("setvalue");
                }

                var l, c;

                if (!t.inputmask.__valueGet) {
                  if (!0 !== i.noValuePatching) {
                    if (Object.getOwnPropertyDescriptor) {
                      "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === o("test".__proto__) ? function (e) {
                        return e.__proto__;
                      } : function (e) {
                        return e.constructor.prototype;
                      });
                      var u = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : a;
                      u && u.get && u.set ? (l = u.get, c = u.set, Object.defineProperty(t, "value", {
                        get: r,
                        set: s,
                        configurable: !0
                      })) : "INPUT" !== t.tagName && (l = function l() {
                        return this.textContent;
                      }, c = function c(e) {
                        this.textContent = e;
                      }, Object.defineProperty(t, "value", {
                        get: r,
                        set: s,
                        configurable: !0
                      }));
                    } else n.__lookupGetter__ && t.__lookupGetter__("value") && (l = t.__lookupGetter__("value"), c = t.__lookupSetter__("value"), t.__defineGetter__("value", r), t.__defineSetter__("value", s));

                    t.inputmask.__valueGet = l, t.inputmask.__valueSet = c;
                  }

                  t.inputmask._valueGet = function (e) {
                    return Z && !0 !== e ? l.call(this.el).split("").reverse().join("") : l.call(this.el);
                  }, t.inputmask._valueSet = function (e, t) {
                    c.call(this.el, null === e || e === a ? "" : !0 !== t && Z ? e.split("").reverse().join("") : e);
                  }, l === a && (l = function l() {
                    return this.value;
                  }, c = function c(e) {
                    this.value = e;
                  }, function (t) {
                    if (e.valHooks && (e.valHooks[t] === a || !0 !== e.valHooks[t].inputmaskpatch)) {
                      var n = e.valHooks[t] && e.valHooks[t].get ? e.valHooks[t].get : function (e) {
                        return e.value;
                      },
                          r = e.valHooks[t] && e.valHooks[t].set ? e.valHooks[t].set : function (e, t) {
                        return e.value = t, e;
                      };
                      e.valHooks[t] = {
                        get: function get(e) {
                          if (e.inputmask) {
                            if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                            var t = n(e);
                            return -1 !== v(a, a, e.inputmask.maskset.validPositions) || !0 !== i.nullable ? t : "";
                          }

                          return n(e);
                        },
                        set: function set(t, n) {
                          var a,
                              i = e(t);
                          return a = r(t, n), t.inputmask && i.trigger("setvalue"), a;
                        },
                        inputmaskpatch: !0
                      };
                    }
                  }(t.type), function (t) {
                    ne.on(t, "mouseenter", function (t) {
                      var n = e(this);
                      this.inputmask._valueGet() !== A().join("") && n.trigger("setvalue");
                    });
                  }(t));
                }
              }(t) : t.inputmask = a, s;
            }(t, c);

            if (!1 !== i && (Y = t, q = e(Y), -1 === (Q = Y !== a ? Y.maxLength : a) && (Q = a), !0 === c.colorMask && K(Y), d && (Y.hasOwnProperty("inputmode") && (Y.inputmode = c.inputmode, Y.setAttribute("inputmode", c.inputmode)), "rtfm" === c.androidHack && (!0 !== c.colorMask && K(Y), Y.type = "password")), !0 === i && (ne.on(Y, "submit", ae.submitEvent), ne.on(Y, "reset", ae.resetEvent), ne.on(Y, "mouseenter", ae.mouseenterEvent), ne.on(Y, "blur", ae.blurEvent), ne.on(Y, "focus", ae.focusEvent), ne.on(Y, "mouseleave", ae.mouseleaveEvent), !0 !== c.colorMask && ne.on(Y, "click", ae.clickEvent), ne.on(Y, "dblclick", ae.dblclickEvent), ne.on(Y, "paste", ae.pasteEvent), ne.on(Y, "dragdrop", ae.pasteEvent), ne.on(Y, "drop", ae.pasteEvent), ne.on(Y, "cut", ae.cutEvent), ne.on(Y, "complete", c.oncomplete), ne.on(Y, "incomplete", c.onincomplete), ne.on(Y, "cleared", c.oncleared), d || !0 === c.inputEventOnly ? Y.removeAttribute("maxLength") : (ne.on(Y, "keydown", ae.keydownEvent), ne.on(Y, "keypress", ae.keypressEvent)), ne.on(Y, "compositionstart", e.noop), ne.on(Y, "compositionupdate", e.noop), ne.on(Y, "compositionend", e.noop), ne.on(Y, "keyup", e.noop), ne.on(Y, "input", ae.inputFallBackEvent), ne.on(Y, "beforeinput", e.noop)), ne.on(Y, "setvalue", ae.setValueEvent), z = w().join(""), "" !== Y.inputmask._valueGet(!0) || !1 === c.clearMaskOnLostFocus || n.activeElement === Y)) {
              var r = e.isFunction(c.onBeforeMask) ? c.onBeforeMask.call(W, Y.inputmask._valueGet(!0), c) || Y.inputmask._valueGet(!0) : Y.inputmask._valueGet(!0);
              "" !== r && F(Y, !0, !1, Z ? r.split("").reverse() : r.split(""));
              var s = A().slice();
              z = s.join(""), !1 === U(s) && c.clearIncomplete && g(), c.clearMaskOnLostFocus && n.activeElement !== Y && (-1 === v() ? s = [] : L(s)), N(Y, s), n.activeElement === Y && G(Y, _(v()));
            }
          }(Y);
          break;

        case "format":
          return ie = (e.isFunction(c.onBeforeMask) ? c.onBeforeMask.call(W, r.value, c) || r.value : r.value).split(""), F(a, !0, !1, Z ? ie.reverse() : ie), r.metadata ? {
            value: Z ? A().slice().reverse().join("") : A().join(""),
            metadata: l.call(this, {
              action: "getmetadata"
            }, s, c)
          } : Z ? A().slice().reverse().join("") : A().join("");

        case "isValid":
          r.value ? (ie = r.value.split(""), F(a, !0, !0, Z ? ie.reverse() : ie)) : r.value = A().join("");

          for (var re = A(), oe = B(), se = re.length - 1; se > oe && !M(se); se--) {
            ;
          }

          return re.splice(oe, se + 1 - oe), U(re) && r.value === A().join("");

        case "getemptymask":
          return w().join("");

        case "remove":
          if (Y && Y.inputmask) {
            q = e(Y), Y.inputmask._valueSet(c.autoUnmask ? T(Y) : Y.inputmask._valueGet(!0)), ne.off(Y);
            Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y), "value") && Y.inputmask.__valueGet && Object.defineProperty(Y, "value", {
              get: Y.inputmask.__valueGet,
              set: Y.inputmask.__valueSet,
              configurable: !0
            }) : n.__lookupGetter__ && Y.__lookupGetter__("value") && Y.inputmask.__valueGet && (Y.__defineGetter__("value", Y.inputmask.__valueGet), Y.__defineSetter__("value", Y.inputmask.__valueSet)), Y.inputmask = a;
          }

          return Y;

        case "getmetadata":
          if (e.isArray(s.metadata)) {
            var le = m(!0, 0, !1).join("");
            return e.each(s.metadata, function (e, t) {
              if (t.mask === le) return le = t, !1;
            }), le;
          }

          return s.metadata;
      }
    }

    var c = navigator.userAgent,
        u = /mobile/i.test(c),
        p = /iemobile/i.test(c),
        f = /iphone/i.test(c) && !p,
        d = /android/i.test(c) && !p;
    return i.prototype = {
      dataAttribute: "data-inputmask",
      defaults: {
        placeholder: "_",
        optionalmarker: {
          start: "[",
          end: "]"
        },
        quantifiermarker: {
          start: "{",
          end: "}"
        },
        groupmarker: {
          start: "(",
          end: ")"
        },
        alternatormarker: "|",
        escapeChar: "\\",
        mask: null,
        regex: null,
        oncomplete: e.noop,
        onincomplete: e.noop,
        oncleared: e.noop,
        repeat: 0,
        greedy: !0,
        autoUnmask: !1,
        removeMaskOnSubmit: !1,
        clearMaskOnLostFocus: !0,
        insertMode: !0,
        clearIncomplete: !1,
        alias: null,
        onKeyDown: e.noop,
        onBeforeMask: null,
        onBeforePaste: function onBeforePaste(t, n) {
          return e.isFunction(n.onBeforeMask) ? n.onBeforeMask.call(this, t, n) : t;
        },
        onBeforeWrite: null,
        onUnMask: null,
        showMaskOnFocus: !0,
        showMaskOnHover: !0,
        onKeyValidation: e.noop,
        skipOptionalPartCharacter: " ",
        numericInput: !1,
        rightAlign: !1,
        undoOnEscape: !0,
        radixPoint: "",
        radixPointDefinitionSymbol: a,
        groupSeparator: "",
        keepStatic: null,
        positionCaretOnTab: !0,
        tabThrough: !1,
        supportsInputType: ["text", "tel", "password"],
        ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
        isComplete: null,
        canClearPosition: e.noop,
        preValidation: null,
        postValidation: null,
        staticDefinitionSymbol: a,
        jitMasking: !1,
        nullable: !0,
        inputEventOnly: !1,
        noValuePatching: !1,
        positionCaretOnClick: "lvp",
        casing: null,
        inputmode: "verbatim",
        colorMask: !1,
        androidHack: !1,
        importDataAttributes: !0
      },
      definitions: {
        9: {
          validator: "[0-9１-９]",
          cardinality: 1,
          definitionSymbol: "*"
        },
        a: {
          validator: "[A-Za-zА-яЁёÀ-ÿµ]",
          cardinality: 1,
          definitionSymbol: "*"
        },
        "*": {
          validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]",
          cardinality: 1
        }
      },
      aliases: {},
      masksCache: {},
      mask: function mask(o) {
        function c(n, i, o, s) {
          if (!0 === i.importDataAttributes) {
            var l,
                c,
                u,
                p,
                f = function f(e, i) {
              null !== (i = i !== a ? i : n.getAttribute(s + "-" + e)) && ("string" == typeof i && (0 === e.indexOf("on") ? i = t[i] : "false" === i ? i = !1 : "true" === i && (i = !0)), o[e] = i);
            },
                d = n.getAttribute(s);

            if (d && "" !== d && (d = d.replace(new RegExp("'", "g"), '"'), c = JSON.parse("{" + d + "}")), c) {
              u = a;

              for (p in c) {
                if ("alias" === p.toLowerCase()) {
                  u = c[p];
                  break;
                }
              }
            }

            f("alias", u), o.alias && r(o.alias, o, i);

            for (l in i) {
              if (c) {
                u = a;

                for (p in c) {
                  if (p.toLowerCase() === l.toLowerCase()) {
                    u = c[p];
                    break;
                  }
                }
              }

              f(l, u);
            }
          }

          return e.extend(!0, i, o), ("rtl" === n.dir || i.rightAlign) && (n.style.textAlign = "right"), ("rtl" === n.dir || i.numericInput) && (n.dir = "ltr", n.removeAttribute("dir"), i.isRTL = !0), i;
        }

        var u = this;
        return "string" == typeof o && (o = n.getElementById(o) || n.querySelectorAll(o)), o = o.nodeName ? [o] : o, e.each(o, function (t, n) {
          var r = e.extend(!0, {}, u.opts);
          c(n, r, e.extend(!0, {}, u.userOptions), u.dataAttribute);
          var o = s(r, u.noMasksCache);
          o !== a && (n.inputmask !== a && (n.inputmask.opts.autoUnmask = !0, n.inputmask.remove()), n.inputmask = new i(a, a, !0), n.inputmask.opts = r, n.inputmask.noMasksCache = u.noMasksCache, n.inputmask.userOptions = e.extend(!0, {}, u.userOptions), n.inputmask.isRTL = r.isRTL || r.numericInput, n.inputmask.el = n, n.inputmask.maskset = o, e.data(n, "_inputmask_opts", r), l.call(n.inputmask, {
            action: "mask"
          }));
        }), o && o[0] ? o[0].inputmask || this : this;
      },
      option: function option(t, n) {
        return "string" == typeof t ? this.opts[t] : "object" === (void 0 === t ? "undefined" : o(t)) ? (e.extend(this.userOptions, t), this.el && !0 !== n && this.mask(this.el), this) : void 0;
      },
      unmaskedvalue: function unmaskedvalue(e) {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
          action: "unmaskedvalue",
          value: e
        });
      },
      remove: function remove() {
        return l.call(this, {
          action: "remove"
        });
      },
      getemptymask: function getemptymask() {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
          action: "getemptymask"
        });
      },
      hasMaskedValue: function hasMaskedValue() {
        return !this.opts.autoUnmask;
      },
      isComplete: function isComplete() {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
          action: "isComplete"
        });
      },
      getmetadata: function getmetadata() {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
          action: "getmetadata"
        });
      },
      isValid: function isValid(e) {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
          action: "isValid",
          value: e
        });
      },
      format: function format(e, t) {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
          action: "format",
          value: e,
          metadata: t
        });
      },
      analyseMask: function analyseMask(t, n, r) {
        function o(e, t, n, a) {
          this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = a || !1, this.quantifier = {
            min: 1,
            max: 1
          };
        }

        function s(t, o, s) {
          s = s !== a ? s : t.matches.length;
          var l = t.matches[s - 1];
          if (n) 0 === o.indexOf("[") || b && /\\d|\\s|\\w]/i.test(o) || "." === o ? t.matches.splice(s++, 0, {
            fn: new RegExp(o, r.casing ? "i" : ""),
            cardinality: 1,
            optionality: t.isOptional,
            newBlockMarker: l === a || l.def !== o,
            casing: null,
            def: o,
            placeholder: a,
            nativeDef: o
          }) : (b && (o = o[o.length - 1]), e.each(o.split(""), function (e, n) {
            l = t.matches[s - 1], t.matches.splice(s++, 0, {
              fn: null,
              cardinality: 0,
              optionality: t.isOptional,
              newBlockMarker: l === a || l.def !== n && null !== l.fn,
              casing: null,
              def: r.staticDefinitionSymbol || n,
              placeholder: r.staticDefinitionSymbol !== a ? n : a,
              nativeDef: n
            });
          })), b = !1;else {
            var c = (r.definitions ? r.definitions[o] : a) || i.prototype.definitions[o];

            if (c && !b) {
              for (var u = c.prevalidator, p = u ? u.length : 0, f = 1; f < c.cardinality; f++) {
                var d = p >= f ? u[f - 1] : [],
                    m = d.validator,
                    h = d.cardinality;
                t.matches.splice(s++, 0, {
                  fn: m ? "string" == typeof m ? new RegExp(m, r.casing ? "i" : "") : new function () {
                    this.test = m;
                  }() : new RegExp("."),
                  cardinality: h || 1,
                  optionality: t.isOptional,
                  newBlockMarker: l === a || l.def !== (c.definitionSymbol || o),
                  casing: c.casing,
                  def: c.definitionSymbol || o,
                  placeholder: c.placeholder,
                  nativeDef: o
                }), l = t.matches[s - 1];
              }

              t.matches.splice(s++, 0, {
                fn: c.validator ? "string" == typeof c.validator ? new RegExp(c.validator, r.casing ? "i" : "") : new function () {
                  this.test = c.validator;
                }() : new RegExp("."),
                cardinality: c.cardinality,
                optionality: t.isOptional,
                newBlockMarker: l === a || l.def !== (c.definitionSymbol || o),
                casing: c.casing,
                def: c.definitionSymbol || o,
                placeholder: c.placeholder,
                nativeDef: o
              });
            } else t.matches.splice(s++, 0, {
              fn: null,
              cardinality: 0,
              optionality: t.isOptional,
              newBlockMarker: l === a || l.def !== o && null !== l.fn,
              casing: null,
              def: r.staticDefinitionSymbol || o,
              placeholder: r.staticDefinitionSymbol !== a ? o : a,
              nativeDef: o
            }), b = !1;
          }
        }

        function l(t) {
          t && t.matches && e.each(t.matches, function (e, i) {
            var o = t.matches[e + 1];
            (o === a || o.matches === a || !1 === o.isQuantifier) && i && i.isGroup && (i.isGroup = !1, n || (s(i, r.groupmarker.start, 0), !0 !== i.openGroup && s(i, r.groupmarker.end))), l(i);
          });
        }

        function c() {
          if (P.length > 0) {
            if (m = P[P.length - 1], s(m, f), m.isAlternator) {
              h = P.pop();

              for (var e = 0; e < h.matches.length; e++) {
                h.matches[e].isGroup = !1;
              }

              P.length > 0 ? (m = P[P.length - 1]).matches.push(h) : x.matches.push(h);
            }
          } else s(x, f);
        }

        function u(e) {
          e.matches = e.matches.reverse();

          for (var t in e.matches) {
            if (e.matches.hasOwnProperty(t)) {
              var n = parseInt(t);

              if (e.matches[t].isQuantifier && e.matches[n + 1] && e.matches[n + 1].isGroup) {
                var i = e.matches[t];
                e.matches.splice(t, 1), e.matches.splice(n + 1, 0, i);
              }

              e.matches[t].matches !== a ? e.matches[t] = u(e.matches[t]) : e.matches[t] = function (e) {
                return e === r.optionalmarker.start ? e = r.optionalmarker.end : e === r.optionalmarker.end ? e = r.optionalmarker.start : e === r.groupmarker.start ? e = r.groupmarker.end : e === r.groupmarker.end && (e = r.groupmarker.start), e;
              }(e.matches[t]);
            }
          }

          return e;
        }

        var p,
            f,
            d,
            m,
            h,
            g,
            v,
            y = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
            k = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            b = !1,
            x = new o(),
            P = [],
            S = [];

        for (n && (r.optionalmarker.start = a, r.optionalmarker.end = a); p = n ? k.exec(t) : y.exec(t);) {
          if (f = p[0], n) switch (f.charAt(0)) {
            case "?":
              f = "{0,1}";
              break;

            case "+":
            case "*":
              f = "{" + f + "}";
          }
          if (b) c();else switch (f.charAt(0)) {
            case r.escapeChar:
              b = !0, n && c();
              break;

            case r.optionalmarker.end:
            case r.groupmarker.end:
              if (d = P.pop(), d.openGroup = !1, d !== a) {
                if (P.length > 0) {
                  if ((m = P[P.length - 1]).matches.push(d), m.isAlternator) {
                    h = P.pop();

                    for (var w = 0; w < h.matches.length; w++) {
                      h.matches[w].isGroup = !1, h.matches[w].alternatorGroup = !1;
                    }

                    P.length > 0 ? (m = P[P.length - 1]).matches.push(h) : x.matches.push(h);
                  }
                } else x.matches.push(d);
              } else c();
              break;

            case r.optionalmarker.start:
              P.push(new o(!1, !0));
              break;

            case r.groupmarker.start:
              P.push(new o(!0));
              break;

            case r.quantifiermarker.start:
              var A = new o(!1, !1, !0),
                  E = (f = f.replace(/[{}]/g, "")).split(","),
                  C = isNaN(E[0]) ? E[0] : parseInt(E[0]),
                  O = 1 === E.length ? C : isNaN(E[1]) ? E[1] : parseInt(E[1]);

              if ("*" !== O && "+" !== O || (C = "*" === O ? 0 : 1), A.quantifier = {
                min: C,
                max: O
              }, P.length > 0) {
                var R = P[P.length - 1].matches;
                (p = R.pop()).isGroup || ((v = new o(!0)).matches.push(p), p = v), R.push(p), R.push(A);
              } else (p = x.matches.pop()).isGroup || (n && null === p.fn && "." === p.def && (p.fn = new RegExp(p.def, r.casing ? "i" : "")), (v = new o(!0)).matches.push(p), p = v), x.matches.push(p), x.matches.push(A);

              break;

            case r.alternatormarker:
              if (P.length > 0) {
                var M = (m = P[P.length - 1]).matches[m.matches.length - 1];
                g = m.openGroup && (M.matches === a || !1 === M.isGroup && !1 === M.isAlternator) ? P.pop() : m.matches.pop();
              } else g = x.matches.pop();

              if (g.isAlternator) P.push(g);else if (g.alternatorGroup ? (h = P.pop(), g.alternatorGroup = !1) : h = new o(!1, !1, !1, !0), h.matches.push(g), P.push(h), g.openGroup) {
                g.openGroup = !1;

                var _ = new o(!0);

                _.alternatorGroup = !0, P.push(_);
              }
              break;

            default:
              c();
          }
        }

        for (; P.length > 0;) {
          d = P.pop(), x.matches.push(d);
        }

        return x.matches.length > 0 && (l(x), S.push(x)), (r.numericInput || r.isRTL) && u(S[0]), S;
      }
    }, i.extendDefaults = function (t) {
      e.extend(!0, i.prototype.defaults, t);
    }, i.extendDefinitions = function (t) {
      e.extend(!0, i.prototype.definitions, t);
    }, i.extendAliases = function (t) {
      e.extend(!0, i.prototype.aliases, t);
    }, i.format = function (e, t, n) {
      return i(t).format(e, n);
    }, i.unmask = function (e, t) {
      return i(t).unmaskedvalue(e);
    }, i.isValid = function (e, t) {
      return i(t).isValid(e);
    }, i.remove = function (t) {
      e.each(t, function (e, t) {
        t.inputmask && t.inputmask.remove();
      });
    }, i.escapeRegex = function (e) {
      var t = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
      return e.replace(new RegExp("(\\" + t.join("|\\") + ")", "gim"), "\\$1");
    }, i.keyCode = {
      ALT: 18,
      BACKSPACE: 8,
      BACKSPACE_SAFARI: 127,
      CAPS_LOCK: 20,
      COMMA: 188,
      COMMAND: 91,
      COMMAND_LEFT: 91,
      COMMAND_RIGHT: 93,
      CONTROL: 17,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      INSERT: 45,
      LEFT: 37,
      MENU: 93,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SHIFT: 16,
      SPACE: 32,
      TAB: 9,
      UP: 38,
      WINDOWS: 91,
      X: 88
    }, i;
  });
}, function (e, t) {
  e.exports = jQuery;
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }

  n(4), n(9), n(12), n(13), n(14), n(15);
  var i = a(n(1)),
      r = a(n(0)),
      o = a(n(2));
  r["default"] === o["default"] && n(16), window.Inputmask = i["default"];
}, function (e, t, n) {
  var a = n(5);
  "string" == typeof a && (a = [[e.i, a, ""]]);
  var i = {
    hmr: !0
  };
  i.transform = void 0;
  n(7)(a, i);
  a.locals && (e.exports = a.locals);
}, function (e, t, n) {
  (e.exports = n(6)(void 0)).push([e.i, "span.im-caret {\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\nspan.im-static {\r\n    color: grey;\r\n}\r\n\r\ndiv.im-colormask {\r\n    display: inline-block;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n    -webkit-appearance: textfield;\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\ndiv.im-colormask > input {\r\n    position: absolute;\r\n    display: inline-block;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    -webkit-appearance: caret;\r\n    -moz-appearance: caret;\r\n    appearance: caret;\r\n    border-style: none;\r\n    left: 0; /*calculated*/\r\n}\r\n\r\ndiv.im-colormask > input:focus {\r\n    outline: none;\r\n}\r\n\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > input::selection{\r\n    background: none;\r\n}\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > div {\r\n    color: black;\r\n    display: inline-block;\r\n    width: 100px; /*calculated*/\r\n}", ""]);
}, function (e, t) {
  function n(e, t) {
    var n = e[1] || "",
        i = e[3];
    if (!i) return n;

    if (t && "function" == typeof btoa) {
      var r = a(i),
          o = i.sources.map(function (e) {
        return "/*# sourceURL=" + i.sourceRoot + e + " */";
      });
      return [n].concat(o).concat([r]).join("\n");
    }

    return [n].join("\n");
  }

  function a(e) {
    return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e))))) + " */";
  }

  e.exports = function (e) {
    var t = [];
    return t.toString = function () {
      return this.map(function (t) {
        var a = n(t, e);
        return t[2] ? "@media " + t[2] + "{" + a + "}" : a;
      }).join("");
    }, t.i = function (e, n) {
      "string" == typeof e && (e = [[null, e, ""]]);

      for (var a = {}, i = 0; i < this.length; i++) {
        var r = this[i][0];
        "number" == typeof r && (a[r] = !0);
      }

      for (i = 0; i < e.length; i++) {
        var o = e[i];
        "number" == typeof o[0] && a[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t.push(o));
      }
    }, t;
  };
}, function (e, t, n) {
  function a(e, t) {
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
          i = m[a.id];

      if (i) {
        i.refs++;

        for (o = 0; o < i.parts.length; o++) {
          i.parts[o](a.parts[o]);
        }

        for (; o < a.parts.length; o++) {
          i.parts.push(u(a.parts[o], t));
        }
      } else {
        for (var r = [], o = 0; o < a.parts.length; o++) {
          r.push(u(a.parts[o], t));
        }

        m[a.id] = {
          id: a.id,
          refs: 1,
          parts: r
        };
      }
    }
  }

  function i(e, t) {
    for (var n = [], a = {}, i = 0; i < e.length; i++) {
      var r = e[i],
          o = t.base ? r[0] + t.base : r[0],
          s = {
        css: r[1],
        media: r[2],
        sourceMap: r[3]
      };
      a[o] ? a[o].parts.push(s) : n.push(a[o] = {
        id: o,
        parts: [s]
      });
    }

    return n;
  }

  function r(e, t) {
    var n = g(e.insertInto);
    if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var a = k[k.length - 1];
    if ("top" === e.insertAt) a ? a.nextSibling ? n.insertBefore(t, a.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), k.push(t);else if ("bottom" === e.insertAt) n.appendChild(t);else {
      if ("object" != _typeof2(e.insertAt) || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      var i = g(e.insertInto + " " + e.insertAt.before);
      n.insertBefore(t, i);
    }
  }

  function o(e) {
    if (null === e.parentNode) return !1;
    e.parentNode.removeChild(e);
    var t = k.indexOf(e);
    t >= 0 && k.splice(t, 1);
  }

  function s(e) {
    var t = document.createElement("style");
    return e.attrs.type = "text/css", c(t, e.attrs), r(e, t), t;
  }

  function l(e) {
    var t = document.createElement("link");
    return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", c(t, e.attrs), r(e, t), t;
  }

  function c(e, t) {
    Object.keys(t).forEach(function (n) {
      e.setAttribute(n, t[n]);
    });
  }

  function u(e, t) {
    var n, a, i, r;

    if (t.transform && e.css) {
      if (!(r = t.transform(e.css))) return function () {};
      e.css = r;
    }

    if (t.singleton) {
      var c = y++;
      n = v || (v = s(t)), a = p.bind(null, n, c, !1), i = p.bind(null, n, c, !0);
    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), a = d.bind(null, n, t), i = function i() {
      o(n), n.href && URL.revokeObjectURL(n.href);
    }) : (n = s(t), a = f.bind(null, n), i = function i() {
      o(n);
    });

    return a(e), function (t) {
      if (t) {
        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
        a(e = t);
      } else i();
    };
  }

  function p(e, t, n, a) {
    var i = n ? "" : a.css;
    if (e.styleSheet) e.styleSheet.cssText = x(t, i);else {
      var r = document.createTextNode(i),
          o = e.childNodes;
      o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(r, o[t]) : e.appendChild(r);
    }
  }

  function f(e, t) {
    var n = t.css,
        a = t.media;
    if (a && e.setAttribute("media", a), e.styleSheet) e.styleSheet.cssText = n;else {
      for (; e.firstChild;) {
        e.removeChild(e.firstChild);
      }

      e.appendChild(document.createTextNode(n));
    }
  }

  function d(e, t, n) {
    var a = n.css,
        i = n.sourceMap,
        r = void 0 === t.convertToAbsoluteUrls && i;
    (t.convertToAbsoluteUrls || r) && (a = b(a)), i && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
    var o = new Blob([a], {
      type: "text/css"
    }),
        s = e.href;
    e.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s);
  }

  var m = {},
      h = function (e) {
    var t;
    return function () {
      return void 0 === t && (t = e.apply(this, arguments)), t;
    };
  }(function () {
    return window && document && document.all && !window.atob;
  }),
      g = function (e) {
    var t = {};
    return function (n) {
      if (void 0 === t[n]) {
        var a = e.call(this, n);
        if (a instanceof window.HTMLIFrameElement) try {
          a = a.contentDocument.head;
        } catch (e) {
          a = null;
        }
        t[n] = a;
      }

      return t[n];
    };
  }(function (e) {
    return document.querySelector(e);
  }),
      v = null,
      y = 0,
      k = [],
      b = n(8);

  e.exports = function (e, t) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof2(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
    (t = t || {}).attrs = "object" == _typeof2(t.attrs) ? t.attrs : {}, t.singleton || (t.singleton = h()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
    var n = i(e, t);
    return a(n, t), function (e) {
      for (var r = [], o = 0; o < n.length; o++) {
        var s = n[o];
        (l = m[s.id]).refs--, r.push(l);
      }

      e && a(i(e, t), t);

      for (o = 0; o < r.length; o++) {
        var l = r[o];

        if (0 === l.refs) {
          for (var c = 0; c < l.parts.length; c++) {
            l.parts[c]();
          }

          delete m[l.id];
        }
      }
    };
  };

  var x = function () {
    var e = [];
    return function (t, n) {
      return e[t] = n, e.filter(Boolean).join("\n");
    };
  }();
}, function (e, t) {
  e.exports = function (e) {
    var t = "undefined" != typeof window && window.location;
    if (!t) throw new Error("fixUrls requires window.location");
    if (!e || "string" != typeof e) return e;
    var n = t.protocol + "//" + t.host,
        a = n + t.pathname.replace(/\/[^\/]*$/, "/");
    return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
      var i = t.trim().replace(/^"(.*)"$/, function (e, t) {
        return t;
      }).replace(/^'(.*)'$/, function (e, t) {
        return t;
      });
      if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return e;
      var r;
      return r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : a + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")";
    });
  };
}, function (e, t, n) {
  "use strict";

  var a, i, r;
  "function" == typeof Symbol && Symbol.iterator;
  !function (o) {
    i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t) {
    function n(e) {
      return isNaN(e) || 29 === new Date(e, 2, 0).getDate();
    }

    return t.extendAliases({
      "dd/mm/yyyy": {
        mask: "1/2/y",
        placeholder: "dd/mm/yyyy",
        regex: {
          val1pre: new RegExp("[0-3]"),
          val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
          val2pre: function val2pre(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|[12][0-9]|3[01])" + n + "[01])");
          },
          val2: function val2(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|[12][0-9])" + n + "(0[1-9]|1[012]))|(30" + n + "(0[13-9]|1[012]))|(31" + n + "(0[13578]|1[02]))");
          }
        },
        leapday: "29/02/",
        separator: "/",
        yearrange: {
          minyear: 1900,
          maxyear: 2099
        },
        isInYearRange: function isInYearRange(e, t, n) {
          if (isNaN(e)) return !1;
          var a = parseInt(e.concat(t.toString().slice(e.length))),
              i = parseInt(e.concat(n.toString().slice(e.length)));
          return !isNaN(a) && t <= a && a <= n || !isNaN(i) && t <= i && i <= n;
        },
        determinebaseyear: function determinebaseyear(e, t, n) {
          var a = new Date().getFullYear();
          if (e > a) return e;

          if (t < a) {
            for (var i = t.toString().slice(0, 2), r = t.toString().slice(2, 4); t < i + n;) {
              i--;
            }

            var o = i + r;
            return e > o ? e : o;
          }

          if (e <= a && a <= t) {
            for (var s = a.toString().slice(0, 2); t < s + n;) {
              s--;
            }

            var l = s + n;
            return l < e ? e : l;
          }

          return a;
        },
        onKeyDown: function onKeyDown(n, a, i, r) {
          var o = e(this);

          if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
            var s = new Date();
            o.val(s.getDate().toString() + (s.getMonth() + 1).toString() + s.getFullYear().toString()), o.trigger("setvalue");
          }
        },
        getFrontValue: function getFrontValue(e, t, n) {
          for (var a = 0, i = 0, r = 0; r < e.length && "2" !== e.charAt(r); r++) {
            var o = n.definitions[e.charAt(r)];
            o ? (a += i, i = o.cardinality) : i++;
          }

          return t.join("").substr(a, i);
        },
        postValidation: function postValidation(e, t, a) {
          var i,
              r,
              o = e.join("");
          return 0 === a.mask.indexOf("y") ? (r = o.substr(0, 4), i = o.substring(4, 10)) : (r = o.substring(6, 10), i = o.substr(0, 6)), t && (i !== a.leapday || n(r));
        },
        definitions: {
          1: {
            validator: function validator(e, t, n, a, i) {
              var r = i.regex.val1.test(e);
              return a || r || e.charAt(1) !== i.separator && -1 === "-./".indexOf(e.charAt(1)) || !(r = i.regex.val1.test("0" + e.charAt(0))) ? r : (t.buffer[n - 1] = "0", {
                refreshFromBuffer: {
                  start: n - 1,
                  end: n
                },
                pos: n,
                c: e.charAt(0)
              });
            },
            cardinality: 2,
            prevalidator: [{
              validator: function validator(e, t, n, a, i) {
                var r = e;
                isNaN(t.buffer[n + 1]) || (r += t.buffer[n + 1]);
                var o = 1 === r.length ? i.regex.val1pre.test(r) : i.regex.val1.test(r);

                if (o && t.validPositions[n] && (i.regex.val2(i.separator).test(e + t.validPositions[n].input) || (t.validPositions[n].input = "0" === e ? "1" : "0")), !a && !o) {
                  if (o = i.regex.val1.test(e + "0")) return t.buffer[n] = e, t.buffer[++n] = "0", {
                    pos: n,
                    c: "0"
                  };
                  if (o = i.regex.val1.test("0" + e)) return t.buffer[n] = "0", n++, {
                    pos: n
                  };
                }

                return o;
              },
              cardinality: 1
            }]
          },
          2: {
            validator: function validator(e, t, n, a, i) {
              var r = i.getFrontValue(t.mask, t.buffer, i);
              -1 !== r.indexOf(i.placeholder[0]) && (r = "01" + i.separator);
              var o = i.regex.val2(i.separator).test(r + e);
              return a || o || e.charAt(1) !== i.separator && -1 === "-./".indexOf(e.charAt(1)) || !(o = i.regex.val2(i.separator).test(r + "0" + e.charAt(0))) ? o : (t.buffer[n - 1] = "0", {
                refreshFromBuffer: {
                  start: n - 1,
                  end: n
                },
                pos: n,
                c: e.charAt(0)
              });
            },
            cardinality: 2,
            prevalidator: [{
              validator: function validator(e, t, n, a, i) {
                isNaN(t.buffer[n + 1]) || (e += t.buffer[n + 1]);
                var r = i.getFrontValue(t.mask, t.buffer, i);
                -1 !== r.indexOf(i.placeholder[0]) && (r = "01" + i.separator);
                var o = 1 === e.length ? i.regex.val2pre(i.separator).test(r + e) : i.regex.val2(i.separator).test(r + e);
                return o && t.validPositions[n] && (i.regex.val2(i.separator).test(e + t.validPositions[n].input) || (t.validPositions[n].input = "0" === e ? "1" : "0")), a || o || !(o = i.regex.val2(i.separator).test(r + "0" + e)) ? o : (t.buffer[n] = "0", n++, {
                  pos: n
                });
              },
              cardinality: 1
            }]
          },
          y: {
            validator: function validator(e, t, n, a, i) {
              return i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear);
            },
            cardinality: 4,
            prevalidator: [{
              validator: function validator(e, t, n, a, i) {
                var r = i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear);

                if (!a && !r) {
                  var o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e + "0").toString().slice(0, 1);
                  if (r = i.isInYearRange(o + e, i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n++] = o.charAt(0), {
                    pos: n
                  };
                  if (o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e + "0").toString().slice(0, 2), r = i.isInYearRange(o + e, i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n++] = o.charAt(0), t.buffer[n++] = o.charAt(1), {
                    pos: n
                  };
                }

                return r;
              },
              cardinality: 1
            }, {
              validator: function validator(e, t, n, a, i) {
                var r = i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear);

                if (!a && !r) {
                  var o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e).toString().slice(0, 2);
                  if (r = i.isInYearRange(e[0] + o[1] + e[1], i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n++] = o.charAt(1), {
                    pos: n
                  };
                  if (o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e).toString().slice(0, 2), r = i.isInYearRange(o + e, i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n - 1] = o.charAt(0), t.buffer[n++] = o.charAt(1), t.buffer[n++] = e.charAt(0), {
                    refreshFromBuffer: {
                      start: n - 3,
                      end: n
                    },
                    pos: n
                  };
                }

                return r;
              },
              cardinality: 2
            }, {
              validator: function validator(e, t, n, a, i) {
                return i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear);
              },
              cardinality: 3
            }]
          }
        },
        insertMode: !1,
        autoUnmask: !1
      },
      "mm/dd/yyyy": {
        placeholder: "mm/dd/yyyy",
        alias: "dd/mm/yyyy",
        regex: {
          val2pre: function val2pre(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])");
          },
          val2: function val2(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)");
          },
          val1pre: new RegExp("[01]"),
          val1: new RegExp("0[1-9]|1[012]")
        },
        leapday: "02/29/",
        onKeyDown: function onKeyDown(n, a, i, r) {
          var o = e(this);

          if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
            var s = new Date();
            o.val((s.getMonth() + 1).toString() + s.getDate().toString() + s.getFullYear().toString()), o.trigger("setvalue");
          }
        }
      },
      "yyyy/mm/dd": {
        mask: "y/1/2",
        placeholder: "yyyy/mm/dd",
        alias: "mm/dd/yyyy",
        leapday: "/02/29",
        onKeyDown: function onKeyDown(n, a, i, r) {
          var o = e(this);

          if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
            var s = new Date();
            o.val(s.getFullYear().toString() + (s.getMonth() + 1).toString() + s.getDate().toString()), o.trigger("setvalue");
          }
        }
      },
      "dd.mm.yyyy": {
        mask: "1.2.y",
        placeholder: "dd.mm.yyyy",
        leapday: "29.02.",
        separator: ".",
        alias: "dd/mm/yyyy"
      },
      "dd-mm-yyyy": {
        mask: "1-2-y",
        placeholder: "dd-mm-yyyy",
        leapday: "29-02-",
        separator: "-",
        alias: "dd/mm/yyyy"
      },
      "mm.dd.yyyy": {
        mask: "1.2.y",
        placeholder: "mm.dd.yyyy",
        leapday: "02.29.",
        separator: ".",
        alias: "mm/dd/yyyy"
      },
      "mm-dd-yyyy": {
        mask: "1-2-y",
        placeholder: "mm-dd-yyyy",
        leapday: "02-29-",
        separator: "-",
        alias: "mm/dd/yyyy"
      },
      "yyyy.mm.dd": {
        mask: "y.1.2",
        placeholder: "yyyy.mm.dd",
        leapday: ".02.29",
        separator: ".",
        alias: "yyyy/mm/dd"
      },
      "yyyy-mm-dd": {
        mask: "y-1-2",
        placeholder: "yyyy-mm-dd",
        leapday: "-02-29",
        separator: "-",
        alias: "yyyy/mm/dd"
      },
      datetime: {
        mask: "1/2/y h:s",
        placeholder: "dd/mm/yyyy hh:mm",
        alias: "dd/mm/yyyy",
        regex: {
          hrspre: new RegExp("[012]"),
          hrs24: new RegExp("2[0-4]|1[3-9]"),
          hrs: new RegExp("[01][0-9]|2[0-4]"),
          ampm: new RegExp("^[a|p|A|P][m|M]"),
          mspre: new RegExp("[0-5]"),
          ms: new RegExp("[0-5][0-9]")
        },
        timeseparator: ":",
        hourFormat: "24",
        definitions: {
          h: {
            validator: function validator(e, t, n, a, i) {
              if ("24" === i.hourFormat && 24 === parseInt(e, 10)) return t.buffer[n - 1] = "0", t.buffer[n] = "0", {
                refreshFromBuffer: {
                  start: n - 1,
                  end: n
                },
                c: "0"
              };
              var r = i.regex.hrs.test(e);
              if (!a && !r && (e.charAt(1) === i.timeseparator || -1 !== "-.:".indexOf(e.charAt(1))) && (r = i.regex.hrs.test("0" + e.charAt(0)))) return t.buffer[n - 1] = "0", t.buffer[n] = e.charAt(0), n++, {
                refreshFromBuffer: {
                  start: n - 2,
                  end: n
                },
                pos: n,
                c: i.timeseparator
              };

              if (r && "24" !== i.hourFormat && i.regex.hrs24.test(e)) {
                var o = parseInt(e, 10);
                return 24 === o ? (t.buffer[n + 5] = "a", t.buffer[n + 6] = "m") : (t.buffer[n + 5] = "p", t.buffer[n + 6] = "m"), (o -= 12) < 10 ? (t.buffer[n] = o.toString(), t.buffer[n - 1] = "0") : (t.buffer[n] = o.toString().charAt(1), t.buffer[n - 1] = o.toString().charAt(0)), {
                  refreshFromBuffer: {
                    start: n - 1,
                    end: n + 6
                  },
                  c: t.buffer[n]
                };
              }

              return r;
            },
            cardinality: 2,
            prevalidator: [{
              validator: function validator(e, t, n, a, i) {
                var r = i.regex.hrspre.test(e);
                return a || r || !(r = i.regex.hrs.test("0" + e)) ? r : (t.buffer[n] = "0", n++, {
                  pos: n
                });
              },
              cardinality: 1
            }]
          },
          s: {
            validator: "[0-5][0-9]",
            cardinality: 2,
            prevalidator: [{
              validator: function validator(e, t, n, a, i) {
                var r = i.regex.mspre.test(e);
                return a || r || !(r = i.regex.ms.test("0" + e)) ? r : (t.buffer[n] = "0", n++, {
                  pos: n
                });
              },
              cardinality: 1
            }]
          },
          t: {
            validator: function validator(e, t, n, a, i) {
              return i.regex.ampm.test(e + "m");
            },
            casing: "lower",
            cardinality: 1
          }
        },
        insertMode: !1,
        autoUnmask: !1
      },
      datetime12: {
        mask: "1/2/y h:s t\\m",
        placeholder: "dd/mm/yyyy hh:mm xm",
        alias: "datetime",
        hourFormat: "12"
      },
      "mm/dd/yyyy hh:mm xm": {
        mask: "1/2/y h:s t\\m",
        placeholder: "mm/dd/yyyy hh:mm xm",
        alias: "datetime12",
        regex: {
          val2pre: function val2pre(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])");
          },
          val2: function val2(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)");
          },
          val1pre: new RegExp("[01]"),
          val1: new RegExp("0[1-9]|1[012]")
        },
        leapday: "02/29/",
        onKeyDown: function onKeyDown(n, a, i, r) {
          var o = e(this);

          if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
            var s = new Date();
            o.val((s.getMonth() + 1).toString() + s.getDate().toString() + s.getFullYear().toString()), o.trigger("setvalue");
          }
        }
      },
      "hh:mm t": {
        mask: "h:s t\\m",
        placeholder: "hh:mm xm",
        alias: "datetime",
        hourFormat: "12"
      },
      "h:s t": {
        mask: "h:s t\\m",
        placeholder: "hh:mm xm",
        alias: "datetime",
        hourFormat: "12"
      },
      "hh:mm:ss": {
        mask: "h:s:s",
        placeholder: "hh:mm:ss",
        alias: "datetime",
        autoUnmask: !1
      },
      "hh:mm": {
        mask: "h:s",
        placeholder: "hh:mm",
        alias: "datetime",
        autoUnmask: !1
      },
      date: {
        alias: "dd/mm/yyyy"
      },
      "mm/yyyy": {
        mask: "1/y",
        placeholder: "mm/yyyy",
        leapday: "donotuse",
        separator: "/",
        alias: "mm/dd/yyyy"
      },
      shamsi: {
        regex: {
          val2pre: function val2pre(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "[0-3])");
          },
          val2: function val2(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + n + "30)|((0[1-6])" + n + "31)");
          },
          val1pre: new RegExp("[01]"),
          val1: new RegExp("0[1-9]|1[012]")
        },
        yearrange: {
          minyear: 1300,
          maxyear: 1499
        },
        mask: "y/1/2",
        leapday: "/12/30",
        placeholder: "yyyy/mm/dd",
        alias: "mm/dd/yyyy",
        clearIncomplete: !0
      },
      "yyyy-mm-dd hh:mm:ss": {
        mask: "y-1-2 h:s:s",
        placeholder: "yyyy-mm-dd hh:mm:ss",
        alias: "datetime",
        separator: "-",
        leapday: "-02-29",
        regex: {
          val2pre: function val2pre(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])");
          },
          val2: function val2(e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)");
          },
          val1pre: new RegExp("[01]"),
          val1: new RegExp("0[1-9]|1[012]")
        },
        onKeyDown: function onKeyDown(e, t, n, a) {}
      }
    }), t;
  });
}, function (e, t, n) {
  "use strict";

  var a;
  "function" == typeof Symbol && Symbol.iterator;
  void 0 !== (a = function () {
    return window;
  }.call(t, n, t, e)) && (e.exports = a);
}, function (e, t, n) {
  "use strict";

  var a;
  "function" == typeof Symbol && Symbol.iterator;
  void 0 !== (a = function () {
    return document;
  }.call(t, n, t, e)) && (e.exports = a);
}, function (e, t, n) {
  "use strict";

  var a, i, r;
  "function" == typeof Symbol && Symbol.iterator;
  !function (o) {
    i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t) {
    return t.extendDefinitions({
      A: {
        validator: "[A-Za-zА-яЁёÀ-ÿµ]",
        cardinality: 1,
        casing: "upper"
      },
      "&": {
        validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
        cardinality: 1,
        casing: "upper"
      },
      "#": {
        validator: "[0-9A-Fa-f]",
        cardinality: 1,
        casing: "upper"
      }
    }), t.extendAliases({
      url: {
        definitions: {
          i: {
            validator: ".",
            cardinality: 1
          }
        },
        mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
        insertMode: !1,
        autoUnmask: !1,
        inputmode: "url"
      },
      ip: {
        mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
        definitions: {
          i: {
            validator: function validator(e, t, n, a, i) {
              return n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : e = "00" + e, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e);
            },
            cardinality: 1
          }
        },
        onUnMask: function onUnMask(e, t, n) {
          return e;
        },
        inputmode: "numeric"
      },
      email: {
        mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
        greedy: !1,
        onBeforePaste: function onBeforePaste(e, t) {
          return (e = e.toLowerCase()).replace("mailto:", "");
        },
        definitions: {
          "*": {
            validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
            cardinality: 1,
            casing: "lower"
          },
          "-": {
            validator: "[0-9A-Za-z-]",
            cardinality: 1,
            casing: "lower"
          }
        },
        onUnMask: function onUnMask(e, t, n) {
          return e;
        },
        inputmode: "email"
      },
      mac: {
        mask: "##:##:##:##:##:##"
      },
      vin: {
        mask: "V{13}9{4}",
        definitions: {
          V: {
            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
            cardinality: 1,
            casing: "upper"
          }
        },
        clearIncomplete: !0,
        autoUnmask: !0
      }
    }), t;
  });
}, function (e, t, n) {
  "use strict";

  var a, i, r;
  "function" == typeof Symbol && Symbol.iterator;
  !function (o) {
    i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t, n) {
    function a(e, n) {
      for (var a = "", i = 0; i < e.length; i++) {
        t.prototype.definitions[e.charAt(i)] || n.definitions[e.charAt(i)] || n.optionalmarker.start === e.charAt(i) || n.optionalmarker.end === e.charAt(i) || n.quantifiermarker.start === e.charAt(i) || n.quantifiermarker.end === e.charAt(i) || n.groupmarker.start === e.charAt(i) || n.groupmarker.end === e.charAt(i) || n.alternatormarker === e.charAt(i) ? a += "\\" + e.charAt(i) : a += e.charAt(i);
      }

      return a;
    }

    return t.extendAliases({
      numeric: {
        mask: function mask(e) {
          if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0, e.groupSeparator === e.radixPoint && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = n), e.autoGroup = e.autoGroup && "" !== e.groupSeparator, e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)), isFinite(e.integerDigits))) {
            var t = Math.floor(e.integerDigits / e.groupSize),
                i = e.integerDigits % e.groupSize;
            e.integerDigits = parseInt(e.integerDigits) + (0 === i ? t - 1 : t), e.integerDigits < 1 && (e.integerDigits = "*");
          }

          e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && !1 === e.integerOptional && (e.positionCaretOnClick = "lvp"), e.definitions[";"] = e.definitions["~"], e.definitions[";"].definitionSymbol = "~", !0 === e.numericInput && (e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
          var r = "[+]";

          if (r += a(e.prefix, e), !0 === e.integerOptional ? r += "~{1," + e.integerDigits + "}" : r += "~{" + e.integerDigits + "}", e.digits !== n) {
            e.radixPointDefinitionSymbol = e.decimalProtect ? ":" : e.radixPoint;
            var o = e.digits.toString().split(",");
            isFinite(o[0] && o[1] && isFinite(o[1])) ? r += e.radixPointDefinitionSymbol + ";{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional ? r += "[" + e.radixPointDefinitionSymbol + ";{1," + e.digits + "}]" : r += e.radixPointDefinitionSymbol + ";{" + e.digits + "}");
          }

          return r += a(e.suffix, e), r += "[-]", e.greedy = !1, r;
        },
        placeholder: "",
        greedy: !1,
        digits: "*",
        digitsOptional: !0,
        enforceDigitsOnBlur: !1,
        radixPoint: ".",
        positionCaretOnClick: "radixFocus",
        groupSize: 3,
        groupSeparator: "",
        autoGroup: !1,
        allowMinus: !0,
        negationSymbol: {
          front: "-",
          back: ""
        },
        integerDigits: "+",
        integerOptional: !0,
        prefix: "",
        suffix: "",
        rightAlign: !0,
        decimalProtect: !0,
        min: null,
        max: null,
        step: 1,
        insertMode: !0,
        autoUnmask: !1,
        unmaskAsNumber: !1,
        inputmode: "numeric",
        preValidation: function preValidation(t, a, i, r, o) {
          if ("-" === i || i === o.negationSymbol.front) return !0 === o.allowMinus && (o.isNegative = o.isNegative === n || !o.isNegative, "" === t.join("") || {
            caret: a,
            dopost: !0
          });

          if (!1 === r && i === o.radixPoint && o.digits !== n && (isNaN(o.digits) || parseInt(o.digits) > 0)) {
            var s = e.inArray(o.radixPoint, t);
            if (-1 !== s) return !0 === o.numericInput ? a === s : {
              caret: s + 1
            };
          }

          return !0;
        },
        postValidation: function postValidation(a, i, r) {
          var o = r.suffix.split(""),
              s = r.prefix.split("");
          if (i.pos === n && i.caret !== n && !0 !== i.dopost) return i;
          var l = i.caret !== n ? i.caret : i.pos,
              c = a.slice();
          r.numericInput && (l = c.length - l - 1, c = c.reverse());
          var u = c[l];
          if (u === r.groupSeparator && (u = c[l += 1]), l === c.length - r.suffix.length - 1 && u === r.radixPoint) return i;
          u !== n && u !== r.radixPoint && u !== r.negationSymbol.front && u !== r.negationSymbol.back && (c[l] = "?", r.prefix.length > 0 && l >= (!1 === r.isNegative ? 1 : 0) && l < r.prefix.length - 1 + (!1 === r.isNegative ? 1 : 0) ? s[l - (!1 === r.isNegative ? 1 : 0)] = "?" : r.suffix.length > 0 && l >= c.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0) && (o[l - (c.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0))] = "?")), s = s.join(""), o = o.join("");
          var p = c.join("").replace(s, "");

          if (p = p.replace(o, ""), p = p.replace(new RegExp(t.escapeRegex(r.groupSeparator), "g"), ""), p = p.replace(new RegExp("[-" + t.escapeRegex(r.negationSymbol.front) + "]", "g"), ""), p = p.replace(new RegExp(t.escapeRegex(r.negationSymbol.back) + "$"), ""), isNaN(r.placeholder) && (p = p.replace(new RegExp(t.escapeRegex(r.placeholder), "g"), "")), p.length > 1 && 1 !== p.indexOf(r.radixPoint) && ("0" === u && (p = p.replace(/^\?/g, "")), p = p.replace(/^0/g, "")), p.charAt(0) === r.radixPoint && "" !== r.radixPoint && !0 !== r.numericInput && (p = "0" + p), "" !== p) {
            if (p = p.split(""), (!r.digitsOptional || r.enforceDigitsOnBlur && "blur" === i.event) && isFinite(r.digits)) {
              var f = e.inArray(r.radixPoint, p),
                  d = e.inArray(r.radixPoint, c);
              -1 === f && (p.push(r.radixPoint), f = p.length - 1);

              for (var m = 1; m <= r.digits; m++) {
                r.digitsOptional && (!r.enforceDigitsOnBlur || "blur" !== i.event) || p[f + m] !== n && p[f + m] !== r.placeholder.charAt(0) ? -1 !== d && c[d + m] !== n && (p[f + m] = p[f + m] || c[d + m]) : p[f + m] = i.placeholder || r.placeholder.charAt(0);
              }
            }

            if (!0 !== r.autoGroup || "" === r.groupSeparator || u === r.radixPoint && i.pos === n && !i.dopost) p = p.join("");else {
              var h = p[p.length - 1] === r.radixPoint && i.c === r.radixPoint;
              p = t(function (e, t) {
                var n = "";

                if (n += "(" + t.groupSeparator + "*{" + t.groupSize + "}){*}", "" !== t.radixPoint) {
                  var a = e.join("").split(t.radixPoint);
                  a[1] && (n += t.radixPoint + "*{" + a[1].match(/^\d*\??\d*/)[0].length + "}");
                }

                return n;
              }(p, r), {
                numericInput: !0,
                jitMasking: !0,
                definitions: {
                  "*": {
                    validator: "[0-9?]",
                    cardinality: 1
                  }
                }
              }).format(p.join("")), h && (p += r.radixPoint), p.charAt(0) === r.groupSeparator && p.substr(1);
            }
          }

          if (r.isNegative && "blur" === i.event && (r.isNegative = "0" !== p), p = s + p, p += o, r.isNegative && (p = r.negationSymbol.front + p, p += r.negationSymbol.back), p = p.split(""), u !== n) if (u !== r.radixPoint && u !== r.negationSymbol.front && u !== r.negationSymbol.back) (l = e.inArray("?", p)) > -1 ? p[l] = u : l = i.caret || 0;else if (u === r.radixPoint || u === r.negationSymbol.front || u === r.negationSymbol.back) {
            var g = e.inArray(u, p);
            -1 !== g && (l = g);
          }
          r.numericInput && (l = p.length - l - 1, p = p.reverse());
          var v = {
            caret: u === n || i.pos !== n ? l + (r.numericInput ? -1 : 1) : l,
            buffer: p,
            refreshFromBuffer: i.dopost || a.join("") !== p.join("")
          };
          return v.refreshFromBuffer ? v : i;
        },
        onBeforeWrite: function onBeforeWrite(a, i, r, o) {
          if (a) switch (a.type) {
            case "keydown":
              return o.postValidation(i, {
                caret: r,
                dopost: !0
              }, o);

            case "blur":
            case "checkval":
              var s;

              if (function (e) {
                e.parseMinMaxOptions === n && (null !== e.min && (e.min = e.min.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
              }(o), null !== o.min || null !== o.max) {
                if (s = o.onUnMask(i.join(""), n, e.extend({}, o, {
                  unmaskAsNumber: !0
                })), null !== o.min && s < o.min) return o.isNegative = o.min < 0, o.postValidation(o.min.toString().replace(".", o.radixPoint).split(""), {
                  caret: r,
                  dopost: !0,
                  placeholder: "0"
                }, o);
                if (null !== o.max && s > o.max) return o.isNegative = o.max < 0, o.postValidation(o.max.toString().replace(".", o.radixPoint).split(""), {
                  caret: r,
                  dopost: !0,
                  placeholder: "0"
                }, o);
              }

              return o.postValidation(i, {
                caret: r,
                placeholder: "0",
                event: "blur"
              }, o);

            case "_checkval":
              return {
                caret: r
              };
          }
        },
        regex: {
          integerPart: function integerPart(e, n) {
            return n ? new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?") : new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?\\d+");
          },
          integerNPart: function integerNPart(e) {
            return new RegExp("[\\d" + t.escapeRegex(e.groupSeparator) + t.escapeRegex(e.placeholder.charAt(0)) + "]+");
          }
        },
        definitions: {
          "~": {
            validator: function validator(e, a, i, r, o, s) {
              var l = r ? new RegExp("[0-9" + t.escapeRegex(o.groupSeparator) + "]").test(e) : new RegExp("[0-9]").test(e);

              if (!0 === l) {
                if (!0 !== o.numericInput && a.validPositions[i] !== n && "~" === a.validPositions[i].match.def && !s) {
                  var c = a.buffer.join(""),
                      u = (c = (c = c.replace(new RegExp("[-" + t.escapeRegex(o.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back) + "$"), "")).split(o.radixPoint);
                  u.length > 1 && (u[1] = u[1].replace(/0/g, o.placeholder.charAt(0))), "0" === u[0] && (u[0] = u[0].replace(/0/g, o.placeholder.charAt(0))), c = u[0] + o.radixPoint + u[1] || "";

                  var p = a._buffer.join("");

                  for (c === o.radixPoint && (c = p); null === c.match(t.escapeRegex(p) + "$");) {
                    p = p.slice(1);
                  }

                  l = (c = (c = c.replace(p, "")).split(""))[i] === n ? {
                    pos: i,
                    remove: i
                  } : {
                    pos: i
                  };
                }
              } else r || e !== o.radixPoint || a.validPositions[i - 1] !== n || (a.buffer[i] = "0", l = {
                pos: i + 1
              });

              return l;
            },
            cardinality: 1
          },
          "+": {
            validator: function validator(e, t, n, a, i) {
              return i.allowMinus && ("-" === e || e === i.negationSymbol.front);
            },
            cardinality: 1,
            placeholder: ""
          },
          "-": {
            validator: function validator(e, t, n, a, i) {
              return i.allowMinus && e === i.negationSymbol.back;
            },
            cardinality: 1,
            placeholder: ""
          },
          ":": {
            validator: function validator(e, n, a, i, r) {
              var o = "[" + t.escapeRegex(r.radixPoint) + "]",
                  s = new RegExp(o).test(e);
              return s && n.validPositions[a] && n.validPositions[a].match.placeholder === r.radixPoint && (s = {
                caret: a + 1
              }), s;
            },
            cardinality: 1,
            placeholder: function placeholder(e) {
              return e.radixPoint;
            }
          }
        },
        onUnMask: function onUnMask(e, n, a) {
          if ("" === n && !0 === a.nullable) return n;
          var i = e.replace(a.prefix, "");
          return i = i.replace(a.suffix, ""), i = i.replace(new RegExp(t.escapeRegex(a.groupSeparator), "g"), ""), "" !== a.placeholder.charAt(0) && (i = i.replace(new RegExp(a.placeholder.charAt(0), "g"), "0")), a.unmaskAsNumber ? ("" !== a.radixPoint && -1 !== i.indexOf(a.radixPoint) && (i = i.replace(t.escapeRegex.call(this, a.radixPoint), ".")), i = i.replace(new RegExp("^" + t.escapeRegex(a.negationSymbol.front)), "-"), i = i.replace(new RegExp(t.escapeRegex(a.negationSymbol.back) + "$"), ""), Number(i)) : i;
        },
        isComplete: function isComplete(e, n) {
          var a = e.join("");
          if (e.slice().join("") !== a) return !1;
          var i = a.replace(n.prefix, "");
          return i = i.replace(n.suffix, ""), i = i.replace(new RegExp(t.escapeRegex(n.groupSeparator), "g"), ""), "," === n.radixPoint && (i = i.replace(t.escapeRegex(n.radixPoint), ".")), isFinite(i);
        },
        onBeforeMask: function onBeforeMask(e, a) {
          if (a.isNegative = n, e = e.toString().charAt(e.length - 1) === a.radixPoint ? e.toString().substr(0, e.length - 1) : e.toString(), "" !== a.radixPoint && isFinite(e)) {
            var i = e.split("."),
                r = "" !== a.groupSeparator ? parseInt(a.groupSize) : 0;
            2 === i.length && (i[0].length > r || i[1].length > r || i[0].length <= r && i[1].length < r) && (e = e.replace(".", a.radixPoint));
          }

          var o = e.match(/,/g),
              s = e.match(/\./g);

          if (e = s && o ? s.length > o.length ? (e = e.replace(/\./g, "")).replace(",", a.radixPoint) : o.length > s.length ? (e = e.replace(/,/g, "")).replace(".", a.radixPoint) : e.indexOf(".") < e.indexOf(",") ? e.replace(/\./g, "") : e.replace(/,/g, "") : e.replace(new RegExp(t.escapeRegex(a.groupSeparator), "g"), ""), 0 === a.digits && (-1 !== e.indexOf(".") ? e = e.substring(0, e.indexOf(".")) : -1 !== e.indexOf(",") && (e = e.substring(0, e.indexOf(",")))), "" !== a.radixPoint && isFinite(a.digits) && -1 !== e.indexOf(a.radixPoint)) {
            var l = e.split(a.radixPoint)[1].match(new RegExp("\\d*"))[0];

            if (parseInt(a.digits) < l.toString().length) {
              var c = Math.pow(10, parseInt(a.digits));
              e = e.replace(t.escapeRegex(a.radixPoint), "."), e = (e = Math.round(parseFloat(e) * c) / c).toString().replace(".", a.radixPoint);
            }
          }

          return e;
        },
        canClearPosition: function canClearPosition(e, t, n, a, i) {
          var r = e.validPositions[t],
              o = r.input !== i.radixPoint || null !== e.validPositions[t].match.fn && !1 === i.decimalProtect || r.input === i.radixPoint && e.validPositions[t + 1] && null === e.validPositions[t + 1].match.fn || isFinite(r.input) || t === n || r.input === i.groupSeparator || r.input === i.negationSymbol.front || r.input === i.negationSymbol.back;
          return !o || "+" !== r.match.nativeDef && "-" !== r.match.nativeDef || (i.isNegative = !1), o;
        },
        onKeyDown: function onKeyDown(n, a, i, r) {
          var o = e(this);
          if (n.ctrlKey) switch (n.keyCode) {
            case t.keyCode.UP:
              o.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(r.step)), o.trigger("setvalue");
              break;

            case t.keyCode.DOWN:
              o.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(r.step)), o.trigger("setvalue");
          }
        }
      },
      currency: {
        prefix: "$ ",
        groupSeparator: ",",
        alias: "numeric",
        placeholder: "0",
        autoGroup: !0,
        digits: 2,
        digitsOptional: !1,
        clearMaskOnLostFocus: !1
      },
      decimal: {
        alias: "numeric"
      },
      integer: {
        alias: "numeric",
        digits: 0,
        radixPoint: ""
      },
      percentage: {
        alias: "numeric",
        digits: 2,
        digitsOptional: !0,
        radixPoint: ".",
        placeholder: "0",
        autoGroup: !1,
        min: 0,
        max: 100,
        suffix: " %",
        allowMinus: !1
      }
    }), t;
  });
}, function (e, t, n) {
  "use strict";

  var a, i, r;
  "function" == typeof Symbol && Symbol.iterator;
  !function (o) {
    i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t) {
    function n(e, t) {
      var n = (e.mask || e).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
          a = (t.mask || t).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
          i = (e.mask || e).split("#")[0],
          r = (t.mask || t).split("#")[0];
      return 0 === r.indexOf(i) ? -1 : 0 === i.indexOf(r) ? 1 : n.localeCompare(a);
    }

    var a = t.prototype.analyseMask;
    return t.prototype.analyseMask = function (t, n, i) {
      function r(e, n, a) {
        n = n || "", a = a || s, "" !== n && (a[n] = {});

        for (var i = "", o = a[n] || a, l = e.length - 1; l >= 0; l--) {
          o[i = (t = e[l].mask || e[l]).substr(0, 1)] = o[i] || [], o[i].unshift(t.substr(1)), e.splice(l, 1);
        }

        for (var c in o) {
          o[c].length > 500 && r(o[c].slice(), c, o);
        }
      }

      function o(t) {
        var n = "",
            a = [];

        for (var r in t) {
          e.isArray(t[r]) ? 1 === t[r].length ? a.push(r + t[r]) : a.push(r + i.groupmarker.start + t[r].join(i.groupmarker.end + i.alternatormarker + i.groupmarker.start) + i.groupmarker.end) : a.push(r + o(t[r]));
        }

        return 1 === a.length ? n += a[0] : n += i.groupmarker.start + a.join(i.groupmarker.end + i.alternatormarker + i.groupmarker.start) + i.groupmarker.end, n;
      }

      var s = {};
      return i.phoneCodes && (i.phoneCodes && i.phoneCodes.length > 1e3 && (r((t = t.substr(1, t.length - 2)).split(i.groupmarker.end + i.alternatormarker + i.groupmarker.start)), t = o(s)), t = t.replace(/9/g, "\\9")), a.call(this, t, n, i);
    }, t.extendAliases({
      abstractphone: {
        groupmarker: {
          start: "<",
          end: ">"
        },
        countrycode: "",
        phoneCodes: [],
        mask: function mask(e) {
          return e.definitions = {
            "#": t.prototype.definitions[9]
          }, e.phoneCodes.sort(n);
        },
        keepStatic: !0,
        onBeforeMask: function onBeforeMask(e, t) {
          var n = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
          return (n.indexOf(t.countrycode) > 1 || -1 === n.indexOf(t.countrycode)) && (n = "+" + t.countrycode + n), n;
        },
        onUnMask: function onUnMask(e, t, n) {
          return e.replace(/[()#-]/g, "");
        },
        inputmode: "tel"
      }
    }), t;
  });
}, function (e, t, n) {
  "use strict";

  var a, i, r;
  "function" == typeof Symbol && Symbol.iterator;
  !function (o) {
    i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t) {
    return t.extendAliases({
      Regex: {
        mask: "r",
        greedy: !1,
        repeat: "*",
        regex: null,
        regexTokens: null,
        tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
        quantifierFilter: /[0-9]+[^,]/,
        isComplete: function isComplete(e, t) {
          return new RegExp(t.regex, t.casing ? "i" : "").test(e.join(""));
        },
        definitions: {
          r: {
            validator: function validator(t, n, a, i, r) {
              function o(e, t) {
                this.matches = [], this.isGroup = e || !1, this.isQuantifier = t || !1, this.quantifier = {
                  min: 1,
                  max: 1
                }, this.repeaterPart = void 0;
              }

              function s(t, n) {
                var a = !1;
                n && (p += "(", d++);

                for (var i = 0; i < t.matches.length; i++) {
                  var o = t.matches[i];
                  if (!0 === o.isGroup) a = s(o, !0);else if (!0 === o.isQuantifier) {
                    var c = e.inArray(o, t.matches),
                        u = t.matches[c - 1],
                        f = p;

                    if (isNaN(o.quantifier.max)) {
                      for (; o.repeaterPart && o.repeaterPart !== p && o.repeaterPart.length > p.length && !(a = s(u, !0));) {
                        ;
                      }

                      (a = a || s(u, !0)) && (o.repeaterPart = p), p = f + o.quantifier.max;
                    } else {
                      for (var m = 0, h = o.quantifier.max - 1; m < h && !(a = s(u, !0)); m++) {
                        ;
                      }

                      p = f + "{" + o.quantifier.min + "," + o.quantifier.max + "}";
                    }
                  } else if (void 0 !== o.matches) for (var g = 0; g < o.length && !(a = s(o[g], n)); g++) {
                    ;
                  } else {
                    var v;

                    if ("[" == o.charAt(0)) {
                      v = p, v += o;

                      for (b = 0; b < d; b++) {
                        v += ")";
                      }

                      a = (x = new RegExp("^(" + v + ")$", r.casing ? "i" : "")).test(l);
                    } else for (var y = 0, k = o.length; y < k; y++) {
                      if ("\\" !== o.charAt(y)) {
                        v = p, v = (v += o.substr(0, y + 1)).replace(/\|$/, "");

                        for (var b = 0; b < d; b++) {
                          v += ")";
                        }

                        var x = new RegExp("^(" + v + ")$", r.casing ? "i" : "");
                        if (a = x.test(l)) break;
                      }
                    }

                    p += o;
                  }
                  if (a) break;
                }

                return n && (p += ")", d--), a;
              }

              var l,
                  c,
                  u = n.buffer.slice(),
                  p = "",
                  f = !1,
                  d = 0;
              null === r.regexTokens && function () {
                var e,
                    t,
                    n = new o(),
                    a = [];

                for (r.regexTokens = []; e = r.tokenizer.exec(r.regex);) {
                  switch ((t = e[0]).charAt(0)) {
                    case "(":
                      a.push(new o(!0));
                      break;

                    case ")":
                      c = a.pop(), a.length > 0 ? a[a.length - 1].matches.push(c) : n.matches.push(c);
                      break;

                    case "{":
                    case "+":
                    case "*":
                      var i = new o(!1, !0),
                          s = (t = t.replace(/[{}]/g, "")).split(","),
                          l = isNaN(s[0]) ? s[0] : parseInt(s[0]),
                          u = 1 === s.length ? l : isNaN(s[1]) ? s[1] : parseInt(s[1]);

                      if (i.quantifier = {
                        min: l,
                        max: u
                      }, a.length > 0) {
                        var p = a[a.length - 1].matches;
                        (e = p.pop()).isGroup || ((c = new o(!0)).matches.push(e), e = c), p.push(e), p.push(i);
                      } else (e = n.matches.pop()).isGroup || ((c = new o(!0)).matches.push(e), e = c), n.matches.push(e), n.matches.push(i);

                      break;

                    default:
                      a.length > 0 ? a[a.length - 1].matches.push(t) : n.matches.push(t);
                  }
                }

                n.matches.length > 0 && r.regexTokens.push(n);
              }(), u.splice(a, 0, t), l = u.join("");

              for (var m = 0; m < r.regexTokens.length; m++) {
                var h = r.regexTokens[m];
                if (f = s(h, h.isGroup)) break;
              }

              return f;
            },
            cardinality: 1
          }
        }
      }
    }), t;
  });
}, function (e, t, n) {
  "use strict";

  var a,
      i,
      r,
      o = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
    return _typeof2(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
  };
  !function (o) {
    i = [n(2), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r);
  }(function (e, t) {
    return void 0 === e.fn.inputmask && (e.fn.inputmask = function (n, a) {
      var i,
          r = this[0];
      if (void 0 === a && (a = {}), "string" == typeof n) switch (n) {
        case "unmaskedvalue":
          return r && r.inputmask ? r.inputmask.unmaskedvalue() : e(r).val();

        case "remove":
          return this.each(function () {
            this.inputmask && this.inputmask.remove();
          });

        case "getemptymask":
          return r && r.inputmask ? r.inputmask.getemptymask() : "";

        case "hasMaskedValue":
          return !(!r || !r.inputmask) && r.inputmask.hasMaskedValue();

        case "isComplete":
          return !r || !r.inputmask || r.inputmask.isComplete();

        case "getmetadata":
          return r && r.inputmask ? r.inputmask.getmetadata() : void 0;

        case "setvalue":
          e(r).val(a), r && void 0 === r.inputmask && e(r).triggerHandler("setvalue");
          break;

        case "option":
          if ("string" != typeof a) return this.each(function () {
            if (void 0 !== this.inputmask) return this.inputmask.option(a);
          });
          if (r && void 0 !== r.inputmask) return r.inputmask.option(a);
          break;

        default:
          return a.alias = n, i = new t(a), this.each(function () {
            i.mask(this);
          });
      } else {
        if ("object" == (void 0 === n ? "undefined" : o(n))) return i = new t(n), void 0 === n.mask && void 0 === n.alias ? this.each(function () {
          if (void 0 !== this.inputmask) return this.inputmask.option(n);
          i.mask(this);
        }) : this.each(function () {
          i.mask(this);
        });
        if (void 0 === n) return this.each(function () {
          (i = new t(a)).mask(this);
        });
      }
    }), e.fn.inputmask;
  });
}]);
!function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
          n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == _typeof2(t) && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;

    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
        t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      }

      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;

    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");

        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");

          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }

          d.appendChild(a);
        }

        o.appendChild(d);
      }

      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();

    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;

      for (o in r.breakpoints) {
        r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      }

      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);

    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;

      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;

      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;

      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }

      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
        ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      }
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
      ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];

    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) {
      s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    }

    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());

    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
      e.$slides.eq(s).attr("tabindex", 0);
    }

    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }

    var t,
        o,
        s,
        n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) {
      r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    }
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;

    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";

      for (e in n) {
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (t = n[e].breakpoint; o >= 0;) {
            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
          }

          s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
        }
      }

      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) {
      if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
        for (e = r.options.responsive.length - 1; e >= 0;) {
          r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
        }

        r.options.responsive.push(s[t]);
      }
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;

    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;

    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
        t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      }

      for (e = 0; e < o + s.slideCount; e += 1) {
        t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      }

      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;

    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;

        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }

      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;

      case "move":
        e.swipeMove(i);
        break;

      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;

    for (i = 0; i < r; i++) {
      if ("object" == _typeof2(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    }

    return o;
  };
});

(function (e) {
  typeof define == "function" && define.amd ? define(["jquery"], e) : (typeof module === "undefined" ? "undefined" : _typeof2(module)) == "object" && module.exports ? module.exports = function (t, n) {
    return n === undefined && (typeof window != "undefined" ? n = require("jquery") : n = require("jquery")(t)), e(n), n;
  } : e(jQuery);
})(function (e) {
  function A(t, n, i) {
    typeof i == "string" && (i = {
      className: i
    }), this.options = E(w, e.isPlainObject(i) ? i : {}), this.loadHTML(), this.wrapper = e(h.html), this.options.clickToHide && this.wrapper.addClass(r + "-hidable"), this.wrapper.data(r, this), this.arrow = this.wrapper.find("." + r + "-arrow"), this.container = this.wrapper.find("." + r + "-container"), this.container.append(this.userContainer), t && t.length && (this.elementType = t.attr("type"), this.originalElement = t, this.elem = N(t), this.elem.data(r, this), this.elem.before(this.wrapper)), this.container.hide(), this.run(n);
  }

  var t = [].indexOf || function (e) {
    for (var t = 0, n = this.length; t < n; t++) {
      if (t in this && this[t] === e) return t;
    }

    return -1;
  },
      n = "notify",
      r = n + "js",
      i = n + "!blank",
      s = {
    t: "top",
    m: "middle",
    b: "bottom",
    l: "left",
    c: "center",
    r: "right"
  },
      o = ["l", "c", "r"],
      u = ["t", "m", "b"],
      a = ["t", "b", "l", "r"],
      f = {
    t: "b",
    m: null,
    b: "t",
    l: "r",
    c: null,
    r: "l"
  },
      l = function l(t) {
    var n;
    return n = [], e.each(t.split(/\W+/), function (e, t) {
      var r;
      r = t.toLowerCase().charAt(0);
      if (s[r]) return n.push(r);
    }), n;
  },
      c = {},
      h = {
    name: "core",
    html: '<div class="' + r + '-wrapper">\n	<div class="' + r + '-arrow"></div>\n	<div class="' + r + '-container"></div>\n</div>',
    css: "." + r + "-corner {\n	position: fixed;\n	margin: 5px;\n	z-index: 1050;\n}\n\n." + r + "-corner ." + r + "-wrapper,\n." + r + "-corner ." + r + "-container {\n	position: relative;\n	display: block;\n	height: inherit;\n	width: inherit;\n	margin: 3px;\n}\n\n." + r + "-wrapper {\n	z-index: 1;\n	position: absolute;\n	display: inline-block;\n	height: 0;\n	width: 0;\n}\n\n." + r + "-container {\n	display: none;\n	z-index: 1;\n	position: absolute;\n}\n\n." + r + "-hidable {\n	cursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n	position: relative;\n}\n\n." + r + "-arrow {\n	position: absolute;\n	z-index: 2;\n	width: 0;\n	height: 0;\n}"
  },
      p = {
    "border-radius": ["-webkit-", "-moz-"]
  },
      d = function d(e) {
    return c[e];
  },
      v = function v(e) {
    if (!e) throw "Missing Style name";
    c[e] && delete c[e];
  },
      m = function m(t, i) {
    if (!t) throw "Missing Style name";
    if (!i) throw "Missing Style definition";
    if (!i.html) throw "Missing Style HTML";
    var s = c[t];
    s && s.cssElem && (window.console && console.warn(n + ": overwriting style '" + t + "'"), c[t].cssElem.remove()), i.name = t, c[t] = i;
    var o = "";
    i.classes && e.each(i.classes, function (t, n) {
      return o += "." + r + "-" + i.name + "-" + t + " {\n", e.each(n, function (t, n) {
        return p[t] && e.each(p[t], function (e, r) {
          return o += "	" + r + t + ": " + n + ";\n";
        }), o += "	" + t + ": " + n + ";\n";
      }), o += "}\n";
    }), i.css && (o += "/* styles for " + i.name + " */\n" + i.css), o && (i.cssElem = g(o), i.cssElem.attr("id", "notify-" + i.name));
    var u = {},
        a = e(i.html);
    y("html", a, u), y("text", a, u), i.fields = u;
  },
      g = function g(t) {
    var n, r, i;
    r = x("style"), r.attr("type", "text/css"), e("head").append(r);

    try {
      r.html(t);
    } catch (s) {
      r[0].styleSheet.cssText = t;
    }

    return r;
  },
      y = function y(t, n, r) {
    var s;
    return t !== "html" && (t = "text"), s = "data-notify-" + t, b(n, "[" + s + "]").each(function () {
      var n;
      n = e(this).attr(s), n || (n = i), r[n] = t;
    });
  },
      b = function b(e, t) {
    return e.is(t) ? e : e.find(t);
  },
      w = {
    clickToHide: !0,
    autoHide: !0,
    autoHideDelay: 5e3,
    arrowShow: !0,
    arrowSize: 5,
    breakNewLines: !0,
    elementPosition: "bottom",
    globalPosition: "top right",
    style: "bootstrap",
    className: "error",
    showAnimation: "slideDown",
    showDuration: 400,
    hideAnimation: "slideUp",
    hideDuration: 200,
    gap: 5
  },
      E = function E(t, n) {
    var r;
    return r = function r() {}, r.prototype = t, e.extend(!0, new r(), n);
  },
      S = function S(t) {
    return e.extend(w, t);
  },
      x = function x(t) {
    return e("<" + t + "></" + t + ">");
  },
      T = {},
      N = function N(t) {
    var n;
    return t.is("[type=radio]") && (n = t.parents("form:first").find("[type=radio]").filter(function (n, r) {
      return e(r).attr("name") === t.attr("name");
    }), t = n.first()), t;
  },
      C = function C(e, t, n) {
    var r, i;
    if (typeof n == "string") n = parseInt(n, 10);else if (typeof n != "number") return;
    if (isNaN(n)) return;
    return r = s[f[t.charAt(0)]], i = t, e[r] !== undefined && (t = s[r.charAt(0)], n = -n), e[t] === undefined ? e[t] = n : e[t] += n, null;
  },
      k = function k(e, t, n) {
    if (e === "l" || e === "t") return 0;
    if (e === "c" || e === "m") return n / 2 - t / 2;
    if (e === "r" || e === "b") return n - t;
    throw "Invalid alignment";
  },
      L = function L(e) {
    return L.e = L.e || x("div"), L.e.text(e).html();
  };

  A.prototype.loadHTML = function () {
    var t;
    t = this.getStyle(), this.userContainer = e(t.html), this.userFields = t.fields;
  }, A.prototype.show = function (e, t) {
    var n, r, i, s, o;
    r = function (n) {
      return function () {
        !e && !n.elem && n.destroy();
        if (t) return t();
      };
    }(this), o = this.container.parent().parents(":hidden").length > 0, i = this.container.add(this.arrow), n = [];
    if (o && e) s = "show";else if (o && !e) s = "hide";else if (!o && e) s = this.options.showAnimation, n.push(this.options.showDuration);else {
      if (!!o || !!e) return r();
      s = this.options.hideAnimation, n.push(this.options.hideDuration);
    }
    return n.push(r), i[s].apply(i, n);
  }, A.prototype.setGlobalPosition = function () {
    var t = this.getPosition(),
        n = t[0],
        i = t[1],
        o = s[n],
        u = s[i],
        a = n + "|" + i,
        f = T[a];

    if (!f || !document.body.contains(f[0])) {
      f = T[a] = x("div");
      var l = {};
      l[o] = 0, u === "middle" ? l.top = "45%" : u === "center" ? l.left = "45%" : l[u] = 0, f.css(l).addClass(r + "-corner"), e("body").append(f);
    }

    return f.prepend(this.wrapper);
  }, A.prototype.setElementPosition = function () {
    var n, r, i, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, L, A, O, M, _, D, P, H, B, j;

    H = this.getPosition(), _ = H[0], O = H[1], M = H[2], g = this.elem.position(), d = this.elem.outerHeight(), y = this.elem.outerWidth(), v = this.elem.innerHeight(), m = this.elem.innerWidth(), j = this.wrapper.position(), c = this.container.height(), h = this.container.width(), T = s[_], L = f[_], A = s[L], p = {}, p[A] = _ === "b" ? d : _ === "r" ? y : 0, C(p, "top", g.top - j.top), C(p, "left", g.left - j.left), B = ["top", "left"];

    for (w = 0, S = B.length; w < S; w++) {
      D = B[w], N = parseInt(this.elem.css("margin-" + D), 10), N && C(p, D, N);
    }

    b = Math.max(0, this.options.gap - (this.options.arrowShow ? i : 0)), C(p, A, b);
    if (!this.options.arrowShow) this.arrow.hide();else {
      i = this.options.arrowSize, r = e.extend({}, p), n = this.userContainer.css("border-color") || this.userContainer.css("border-top-color") || this.userContainer.css("background-color") || "white";

      for (E = 0, x = a.length; E < x; E++) {
        D = a[E], P = s[D];
        if (D === L) continue;
        l = P === T ? n : "transparent", r["border-" + P] = i + "px solid " + l;
      }

      C(p, s[L], i), t.call(a, O) >= 0 && C(r, s[O], i * 2);
    }
    t.call(u, _) >= 0 ? (C(p, "left", k(O, h, y)), r && C(r, "left", k(O, i, m))) : t.call(o, _) >= 0 && (C(p, "top", k(O, c, d)), r && C(r, "top", k(O, i, v))), this.container.is(":visible") && (p.display = "block"), this.container.removeAttr("style").css(p);
    if (r) return this.arrow.removeAttr("style").css(r);
  }, A.prototype.getPosition = function () {
    var e, n, r, i, s, f, c, h;
    h = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition), e = l(h), e.length === 0 && (e[0] = "b");
    if (n = e[0], t.call(a, n) < 0) throw "Must be one of [" + a + "]";
    if (e.length === 1 || (r = e[0], t.call(u, r) >= 0) && (i = e[1], t.call(o, i) < 0) || (s = e[0], t.call(o, s) >= 0) && (f = e[1], t.call(u, f) < 0)) e[1] = (c = e[0], t.call(o, c) >= 0) ? "m" : "l";
    return e.length === 2 && (e[2] = e[1]), e;
  }, A.prototype.getStyle = function (e) {
    var t;
    e || (e = this.options.style), e || (e = "default"), t = c[e];
    if (!t) throw "Missing style: " + e;
    return t;
  }, A.prototype.updateClasses = function () {
    var t, n;
    return t = ["base"], e.isArray(this.options.className) ? t = t.concat(this.options.className) : this.options.className && t.push(this.options.className), n = this.getStyle(), t = e.map(t, function (e) {
      return r + "-" + n.name + "-" + e;
    }).join(" "), this.userContainer.attr("class", t);
  }, A.prototype.run = function (t, n) {
    var r, s, o, u, a;
    e.isPlainObject(n) ? e.extend(this.options, n) : e.type(n) === "string" && (this.options.className = n);

    if (this.container && !t) {
      this.show(!1);
      return;
    }

    if (!this.container && !t) return;
    s = {}, e.isPlainObject(t) ? s = t : s[i] = t;

    for (o in s) {
      r = s[o], u = this.userFields[o];
      if (!u) continue;
      u === "text" && (r = L(r), this.options.breakNewLines && (r = r.replace(/\n/g, "<br/>"))), a = o === i ? "" : "=" + o, b(this.userContainer, "[data-notify-" + u + a + "]").html(r);
    }

    this.updateClasses(), this.elem ? this.setElementPosition() : this.setGlobalPosition(), this.show(!0), this.options.autoHide && (clearTimeout(this.autohideTimer), this.autohideTimer = setTimeout(this.show.bind(this, !1), this.options.autoHideDelay));
  }, A.prototype.destroy = function () {
    this.wrapper.data(r, null), this.wrapper.remove();
  }, e[n] = function (t, r, i) {
    return t && t.nodeName || t.jquery ? e(t)[n](r, i) : (i = r, r = t, new A(null, r, i)), t;
  }, e.fn[n] = function (t, n) {
    return e(this).each(function () {
      var i = N(e(this)).data(r);
      i && i.destroy();
      var s = new A(e(this), t, n);
    }), this;
  }, e.extend(e[n], {
    defaults: S,
    addStyle: m,
    removeStyle: v,
    pluginOptions: w,
    getStyle: d,
    insertCSS: g
  }), m("bootstrap", {
    html: "<div>\n<span data-notify-text></span>\n</div>",
    classes: {
      base: {
        "font-weight": "bold",
        padding: "8px 15px 8px 14px",
        "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
        "background-color": "#fcf8e3",
        border: "1px solid #fbeed5",
        "border-radius": "4px",
        "white-space": "nowrap",
        "padding-left": "25px",
        "background-repeat": "no-repeat",
        "background-position": "3px 7px"
      },
      error: {
        color: "#B94A48",
        "background-color": "#F2DEDE",
        "border-color": "#EED3D7",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)"
      },
      success: {
        color: "#468847",
        "background-color": "#DFF0D8",
        "border-color": "#D6E9C6",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)"
      },
      info: {
        color: "#3A87AD",
        "background-color": "#D9EDF7",
        "border-color": "#BCE8F1",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)"
      },
      warn: {
        color: "#C09853",
        "background-color": "#FCF8E3",
        "border-color": "#FBEED5",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)"
      }
    }
  }), e(function () {
    g(h.css).attr("id", "core-notify"), e(document).on("click", "." + r + "-hidable", function (t) {
      e(this).trigger("notify-hide");
    }), e(document).on("notify-hide", "." + r + "-wrapper", function (t) {
      var n = e(this).data(r);
      n && n.show(!1);
    });
  });
});

!function (a, b) {
  if ("function" == typeof define && define.amd) define(["module", "exports"], b);else if ("undefined" != typeof exports) b(module, exports);else {
    var c = {
      exports: {}
    };
    b(c, c.exports), a.WOW = c.exports;
  }
}(this, function (a, b) {
  "use strict";

  function c(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
  }

  function d(a, b) {
    return b.indexOf(a) >= 0;
  }

  function e(a, b) {
    for (var c in b) {
      if (null == a[c]) {
        var d = b[c];
        a[c] = d;
      }
    }

    return a;
  }

  function f(a) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
  }

  function g(a) {
    var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
        c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
        d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
        e = void 0;
    return null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e;
  }

  function h(a, b) {
    null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]();
  }

  function i(a, b, c) {
    null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c;
  }

  function j(a, b, c) {
    null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
  }

  function k() {
    return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
  }

  Object.defineProperty(b, "__esModule", {
    value: !0
  });

  var l,
      m,
      n = function () {
    function a(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
      }
    }

    return function (b, c, d) {
      return c && a(b.prototype, c), d && a(b, d), b;
    };
  }(),
      o = window.WeakMap || window.MozWeakMap || function () {
    function a() {
      c(this, a), this.keys = [], this.values = [];
    }

    return n(a, [{
      key: "get",
      value: function value(a) {
        for (var b = 0; b < this.keys.length; b++) {
          var c = this.keys[b];
          if (c === a) return this.values[b];
        }
      }
    }, {
      key: "set",
      value: function value(a, b) {
        for (var c = 0; c < this.keys.length; c++) {
          var d = this.keys[c];
          if (d === a) return this.values[c] = b, this;
        }

        return this.keys.push(a), this.values.push(b), this;
      }
    }]), a;
  }(),
      p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function () {
    function a() {
      c(this, a), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."));
    }

    return n(a, [{
      key: "observe",
      value: function value() {}
    }]), a;
  }(), l.notSupported = !0, m),
      q = window.getComputedStyle || function (a) {
    var b = /(\-([a-z]){1})/g;
    return {
      getPropertyValue: function getPropertyValue(c) {
        "float" === c && (c = "styleFloat"), b.test(c) && c.replace(b, function (a, b) {
          return b.toUpperCase();
        });
        var d = a.currentStyle;
        return (null != d ? d[c] : void 0) || null;
      }
    };
  },
      r = function () {
    function a() {
      var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
      c(this, a), this.defaults = {
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: null,
        scrollContainer: null,
        resetAnimation: !0
      }, this.animate = function () {
        return "requestAnimationFrame" in window ? function (a) {
          return window.requestAnimationFrame(a);
        } : function (a) {
          return a();
        };
      }(), this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = e(b, this.defaults), null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)), this.animationNameCache = new o(), this.wowEvent = g(this.config.boxClass);
    }

    return n(a, [{
      key: "init",
      value: function value() {
        this.element = window.document.documentElement, d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), this.finished = [];
      }
    }, {
      key: "start",
      value: function value() {
        var a = this;
        if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length) if (this.disabled()) this.resetStyle();else for (var b = 0; b < this.boxes.length; b++) {
          var c = this.boxes[b];
          this.applyStyle(c, !0);
        }

        if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
          var d = new p(function (b) {
            for (var c = 0; c < b.length; c++) {
              for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                var f = d.addedNodes[e];
                a.doSync(f);
              }
            }
          });
          d.observe(document.body, {
            childList: !0,
            subtree: !0
          });
        }
      }
    }, {
      key: "stop",
      value: function value() {
        this.stopped = !0, j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval);
      }
    }, {
      key: "sync",
      value: function value() {
        p.notSupported && this.doSync(this.element);
      }
    }, {
      key: "doSync",
      value: function value(a) {
        if ("undefined" != typeof a && null !== a || (a = this.element), 1 === a.nodeType) {
          a = a.parentNode || a;

          for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
            var e = b[c];
            d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), this.scrolled = !0);
          }
        }
      }
    }, {
      key: "show",
      value: function value(a) {
        return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), h(a, this.wowEvent), this.config.resetAnimation && (i(a, "animationend", this.resetAnimation), i(a, "oanimationend", this.resetAnimation), i(a, "webkitAnimationEnd", this.resetAnimation), i(a, "MSAnimationEnd", this.resetAnimation)), a;
      }
    }, {
      key: "applyStyle",
      value: function value(a, b) {
        var c = this,
            d = a.getAttribute("data-wow-duration"),
            e = a.getAttribute("data-wow-delay"),
            f = a.getAttribute("data-wow-iteration");
        return this.animate(function () {
          return c.customStyle(a, b, d, e, f);
        });
      }
    }, {
      key: "resetStyle",
      value: function value() {
        for (var a = 0; a < this.boxes.length; a++) {
          var b = this.boxes[a];
          b.style.visibility = "visible";
        }
      }
    }, {
      key: "resetAnimation",
      value: function value(a) {
        if (a.type.toLowerCase().indexOf("animationend") >= 0) {
          var b = a.target || a.srcElement;
          b.className = b.className.replace(this.config.animateClass, "").trim();
        }
      }
    }, {
      key: "customStyle",
      value: function value(a, b, c, d, e) {
        return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
          animationDuration: c
        }), d && this.vendorSet(a.style, {
          animationDelay: d
        }), e && this.vendorSet(a.style, {
          animationIterationCount: e
        }), this.vendorSet(a.style, {
          animationName: b ? "none" : this.cachedAnimationName(a)
        }), a;
      }
    }, {
      key: "vendorSet",
      value: function value(a, b) {
        for (var c in b) {
          if (b.hasOwnProperty(c)) {
            var d = b[c];
            a["" + c] = d;

            for (var e = 0; e < this.vendors.length; e++) {
              var f = this.vendors[e];
              a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
            }
          }
        }
      }
    }, {
      key: "vendorCSS",
      value: function value(a, b) {
        for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
          var f = this.vendors[e];
          d = d || c.getPropertyCSSValue("-" + f + "-" + b);
        }

        return d;
      }
    }, {
      key: "animationName",
      value: function value(a) {
        var b = void 0;

        try {
          b = this.vendorCSS(a, "animation-name").cssText;
        } catch (c) {
          b = q(a).getPropertyValue("animation-name");
        }

        return "none" === b ? "" : b;
      }
    }, {
      key: "cacheAnimationName",
      value: function value(a) {
        return this.animationNameCache.set(a, this.animationName(a));
      }
    }, {
      key: "cachedAnimationName",
      value: function value(a) {
        return this.animationNameCache.get(a);
      }
    }, {
      key: "scrollHandler",
      value: function value() {
        this.scrolled = !0;
      }
    }, {
      key: "scrollCallback",
      value: function value() {
        if (this.scrolled) {
          this.scrolled = !1;

          for (var a = [], b = 0; b < this.boxes.length; b++) {
            var c = this.boxes[b];

            if (c) {
              if (this.isVisible(c)) {
                this.show(c);
                continue;
              }

              a.push(c);
            }
          }

          this.boxes = a, this.boxes.length || this.config.live || this.stop();
        }
      }
    }, {
      key: "offsetTop",
      value: function value(a) {
        for (; void 0 === a.offsetTop;) {
          a = a.parentNode;
        }

        for (var b = a.offsetTop; a.offsetParent;) {
          a = a.offsetParent, b += a.offsetTop;
        }

        return b;
      }
    }, {
      key: "isVisible",
      value: function value(a) {
        var b = a.getAttribute("data-wow-offset") || this.config.offset,
            c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            d = c + Math.min(this.element.clientHeight, k()) - b,
            e = this.offsetTop(a),
            f = e + a.clientHeight;
        return d >= e && f >= c;
      }
    }, {
      key: "disabled",
      value: function value() {
        return !this.config.mobile && f(navigator.userAgent);
      }
    }]), a;
  }();

  b["default"] = r, a.exports = b["default"];
});

(function ($) {
  var jWindow = $(window);
  var elements = [];
  var elementsInView = [];
  var isSpying = false;
  var ticks = 0;
  var offset = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function findElements(top, right, bottom, left) {
    var hits = $();
    $.each(elements, function (i, element) {
      var elTop = element.offset().top,
          elLeft = element.offset().left,
          elRight = elLeft + element.width(),
          elBottom = elTop + element.height();
      var isIntersect = !(elLeft > right || elRight < left || elTop > bottom || elBottom < top);

      if (isIntersect) {
        hits.push(element);
      }
    });
    return hits;
  }

  function onScroll() {
    ++ticks;
    var top = jWindow.scrollTop(),
        left = jWindow.scrollLeft(),
        right = left + jWindow.width(),
        bottom = top + jWindow.height();
    var intersections = findElements(top + offset.top, right + offset.right, bottom + offset.bottom, left + offset.left);
    $.each(intersections, function (i, element) {
      var lastTick = element.data('scrollSpy:ticks');

      if (typeof lastTick != 'number') {
        element.triggerHandler('scrollSpy:enter');
      }

      element.data('scrollSpy:ticks', ticks);
    });
    $.each(elementsInView, function (i, element) {
      var lastTick = element.data('scrollSpy:ticks');

      if (typeof lastTick == 'number' && lastTick !== ticks) {
        element.triggerHandler('scrollSpy:exit');
        element.data('scrollSpy:ticks', null);
      }
    });
    elementsInView = intersections;
  }

  function onWinSize() {
    jWindow.trigger('scrollSpy:winSize');
  }

  var getTime = Date.now || function () {
    return new Date().getTime();
  };

  function throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});

    var later = function later() {
      previous = options.leading === false ? 0 : getTime();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };

    return function () {
      var now = getTime();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;

      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }

      return result;
    };
  }

  ;

  $.scrollSpy = function (selector, options) {
    selector = $(selector);
    selector.each(function (i, element) {
      elements.push($(element));
    });
    options = options || {
      throttle: 100
    };
    offset.top = options.offsetTop || 0;
    offset.right = options.offsetRight || 0;
    offset.bottom = options.offsetBottom || 0;
    offset.left = options.offsetLeft || 0;
    var throttledScroll = throttle(onScroll, options.throttle || 100);

    var readyScroll = function readyScroll() {
      $(document).ready(throttledScroll);
    };

    if (!isSpying) {
      jWindow.on('scroll', readyScroll);
      jWindow.on('resize', readyScroll);
      isSpying = true;
    }

    setTimeout(readyScroll, 0);
    return selector;
  };

  $.winSizeSpy = function (options) {
    $.winSizeSpy = function () {
      return jWindow;
    };

    options = options || {
      throttle: 100
    };
    return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));
  };

  $.fn.scrollSpy = function (options) {
    return $.scrollSpy($(this), options);
  };
})(jQuery);

function _extends() {
  return (_extends = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var o in n) {
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
      }
    }

    return t;
  }).apply(this, arguments);
}

function _typeof(t) {
  return (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
    return _typeof2(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
  })(t);
}

!function (t, e) {
  "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.LazyLoad = e();
}(this, function () {
  "use strict";

  var t = "undefined" != typeof window,
      e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
      n = t && "IntersectionObserver" in window,
      o = t && "classList" in document.createElement("p"),
      r = {
    elements_selector: "img",
    container: e || t ? document : null,
    threshold: 300,
    thresholds: null,
    data_src: "src",
    data_srcset: "srcset",
    data_sizes: "sizes",
    data_bg: "bg",
    class_loading: "loading",
    class_loaded: "loaded",
    class_error: "error",
    load_delay: 0,
    auto_unobserve: !0,
    callback_enter: null,
    callback_exit: null,
    callback_reveal: null,
    callback_loaded: null,
    callback_error: null,
    callback_finish: null,
    use_native: !1
  },
      a = function a(t, e) {
    var n,
        o = new t(e);

    try {
      n = new CustomEvent("LazyLoad::Initialized", {
        detail: {
          instance: o
        }
      });
    } catch (t) {
      (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
        instance: o
      });
    }

    window.dispatchEvent(n);
  };

  var i = function i(t, e) {
    return t.getAttribute("data-" + e);
  },
      s = function s(t, e, n) {
    var o = "data-" + e;
    null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
  },
      c = function c(t) {
    return "true" === i(t, "was-processed");
  },
      l = function l(t, e) {
    return s(t, "ll-timeout", e);
  },
      u = function u(t) {
    return i(t, "ll-timeout");
  },
      d = function d(t, e) {
    t && t(e);
  },
      f = function f(t, e) {
    t._loadingCount += e, 0 === t._elements.length && 0 === t._loadingCount && d(t._settings.callback_finish);
  },
      _ = function _(t) {
    for (var e, n = [], o = 0; e = t.children[o]; o += 1) {
      "SOURCE" === e.tagName && n.push(e);
    }

    return n;
  },
      v = function v(t, e, n) {
    n && t.setAttribute(e, n);
  },
      g = function g(t, e) {
    v(t, "sizes", i(t, e.data_sizes)), v(t, "srcset", i(t, e.data_srcset)), v(t, "src", i(t, e.data_src));
  },
      m = {
    IMG: function IMG(t, e) {
      var n = t.parentNode;
      n && "PICTURE" === n.tagName && _(n).forEach(function (t) {
        g(t, e);
      });
      g(t, e);
    },
    IFRAME: function IFRAME(t, e) {
      v(t, "src", i(t, e.data_src));
    },
    VIDEO: function VIDEO(t, e) {
      _(t).forEach(function (t) {
        v(t, "src", i(t, e.data_src));
      }), v(t, "src", i(t, e.data_src)), t.load();
    }
  },
      b = function b(t, e) {
    var n,
        o,
        r = e._settings,
        a = t.tagName,
        s = m[a];
    if (s) return s(t, r), f(e, 1), void (e._elements = (n = e._elements, o = t, n.filter(function (t) {
      return t !== o;
    })));
    !function (t, e) {
      var n = i(t, e.data_src),
          o = i(t, e.data_bg);
      n && (t.style.backgroundImage = 'url("'.concat(n, '")')), o && (t.style.backgroundImage = o);
    }(t, r);
  },
      h = function h(t, e) {
    o ? t.classList.add(e) : t.className += (t.className ? " " : "") + e;
  },
      p = function p(t, e, n) {
    t.addEventListener(e, n);
  },
      y = function y(t, e, n) {
    t.removeEventListener(e, n);
  },
      E = function E(t, e, n) {
    y(t, "load", e), y(t, "loadeddata", e), y(t, "error", n);
  },
      w = function w(t, e, n) {
    var r = n._settings,
        a = e ? r.class_loaded : r.class_error,
        i = e ? r.callback_loaded : r.callback_error,
        s = t.target;
    !function (t, e) {
      o ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
    }(s, r.class_loading), h(s, a), d(i, s), f(n, -1);
  },
      I = function I(t, e) {
    var n = function n(r) {
      w(r, !0, e), E(t, n, o);
    },
        o = function o(r) {
      w(r, !1, e), E(t, n, o);
    };

    !function (t, e, n) {
      p(t, "load", e), p(t, "loadeddata", e), p(t, "error", n);
    }(t, n, o);
  },
      k = ["IMG", "IFRAME", "VIDEO"],
      A = function A(t, e) {
    var n = e._observer;
    z(t, e), n && e._settings.auto_unobserve && n.unobserve(t);
  },
      L = function L(t) {
    var e = u(t);
    e && (clearTimeout(e), l(t, null));
  },
      x = function x(t, e) {
    var n = e._settings.load_delay,
        o = u(t);
    o || (o = setTimeout(function () {
      A(t, e), L(t);
    }, n), l(t, o));
  },
      z = function z(t, e, n) {
    var o = e._settings;
    !n && c(t) || (k.indexOf(t.tagName) > -1 && (I(t, e), h(t, o.class_loading)), b(t, e), function (t) {
      s(t, "was-processed", "true");
    }(t), d(o.callback_reveal, t), d(o.callback_set, t));
  },
      O = function O(t) {
    return !!n && (t._observer = new IntersectionObserver(function (e) {
      e.forEach(function (e) {
        return function (t) {
          return t.isIntersecting || t.intersectionRatio > 0;
        }(e) ? function (t, e) {
          var n = e._settings;
          d(n.callback_enter, t), n.load_delay ? x(t, e) : A(t, e);
        }(e.target, t) : function (t, e) {
          var n = e._settings;
          d(n.callback_exit, t), n.load_delay && L(t);
        }(e.target, t);
      });
    }, {
      root: (e = t._settings).container === document ? null : e.container,
      rootMargin: e.thresholds || e.threshold + "px"
    }), !0);
    var e;
  },
      N = ["IMG", "IFRAME"],
      C = function C(t, e) {
    return function (t) {
      return t.filter(function (t) {
        return !c(t);
      });
    }((n = t || function (t) {
      return t.container.querySelectorAll(t.elements_selector);
    }(e), Array.prototype.slice.call(n)));
    var n;
  },
      M = function M(t, e) {
    this._settings = function (t) {
      return _extends({}, r, t);
    }(t), this._loadingCount = 0, O(this), this.update(e);
  };

  return M.prototype = {
    update: function update(t) {
      var n,
          o = this,
          r = this._settings;
      (this._elements = C(t, r), !e && this._observer) ? (function (t) {
        return t.use_native && "loading" in HTMLImageElement.prototype;
      }(r) && ((n = this)._elements.forEach(function (t) {
        -1 !== N.indexOf(t.tagName) && (t.setAttribute("loading", "lazy"), z(t, n));
      }), this._elements = C(t, r)), this._elements.forEach(function (t) {
        o._observer.observe(t);
      })) : this.loadAll();
    },
    destroy: function destroy() {
      var t = this;
      this._observer && (this._elements.forEach(function (e) {
        t._observer.unobserve(e);
      }), this._observer = null), this._elements = null, this._settings = null;
    },
    load: function load(t, e) {
      z(t, this, e);
    },
    loadAll: function loadAll() {
      var t = this;

      this._elements.forEach(function (e) {
        A(e, t);
      });
    }
  }, t && function (t, e) {
    if (e) if (e.length) for (var n, o = 0; n = e[o]; o += 1) {
      a(t, n);
    } else a(t, e);
  }(M, window.lazyLoadOptions), M;
});

jQuery.cookie = function (b, j, m) {
  if (typeof j != "undefined") {
    m = m || {};

    if (j === null) {
      j = "";
      m.expires = -1;
    }

    var e = "";

    if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
      var f;

      if (typeof m.expires == "number") {
        f = new Date();
        f.setTime(f.getTime() + m.expires * 24 * 60 * 60 * 1000);
      } else {
        f = m.expires;
      }

      e = "; expires=" + f.toUTCString();
    }

    var l = m.path ? "; path=" + m.path : "";
    var g = m.domain ? "; domain=" + m.domain : "";
    var a = m.secure ? "; secure" : "";
    document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("");
  } else {
    var d = null;

    if (document.cookie && document.cookie != "") {
      var k = document.cookie.split(";");

      for (var h = 0; h < k.length; h++) {
        var c = jQuery.trim(k[h]);

        if (c.substring(0, b.length + 1) == b + "=") {
          d = decodeURIComponent(c.substring(b.length + 1));
          break;
        }
      }
    }

    return d;
  }
};

$(document).ready(function () {
  //-LazyLoad
  var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy",
    threshold: 550
  }); //-LazyLoad Quiz

  var myLazyLoadQuiz = new LazyLoad({
    elements_selector: ".lazy-quiz"
  }); //-Quiz

  var quiz = document.querySelector('#quiz');
  var body = document.querySelector('body');
  var btnOpenQuiz = document.querySelector('#openQuiz');
  var btnCloseQuiz = document.querySelector('#closeQuiz');
  var btnForward = document.querySelector('#quizBtnNext');
  var btnBack = document.querySelector('#quizBtnPrev');
  var quizSlider = document.querySelector('.quiz_slider');
  var quizSlides = document.querySelectorAll('.quiz__right-step');
  var doneWidth = ['17%', '29%', '40%', '52%', '64%', '76%', '88%', '100%'];
  var quizSlidesLength = quizSlides.length;
  var rotateStage = 100 / quizSlidesLength;
  var quizForm = document.querySelector('#quizForm');
  var quizTitle = document.querySelector('#quizTitle');
  var currentSlide = 0;
  var quizProgress = document.querySelector('#quizProgress');
  var quizProgressVal = document.querySelector('#quizProgressVal');
  var quizProgressBarDone = document.querySelector('#progressBarDone');
  var quizStageNum = document.querySelector('.quizStageNum');
  var quizStageLength = document.querySelector('.quizStageLength');
  var quizGiftPaginator = document.querySelector('#quizGiftPaginator');
  var quizGiftPaginatorCircle = document.querySelector('#quizGiftPaginatorCircle');
  var quizGiftPaginatorCircleBlock = document.querySelector('#quizGiftPaginatorCircleBlock');
  var quizCompleted = document.querySelector('#quizCompleted');
  var quizStepsLength = document.querySelector('#quizStepsLength');
  var quizStepsCount = document.querySelector('#quizStepsCount');
  quizStageLength.innerHTML = quizSlidesLength; //-Стрелки часов

  for (var i = 0; i < quizSlidesLength; i++) {
    var li = document.createElement('li');
    li.classList.add('quiz__left-gift-paginator-pie-clock');
    li.setAttribute('id', "quizClock".concat(i));
    li.style.transform = 'rotate(' + 360 / quizSlidesLength * i + 'deg)';
    quizGiftPaginator.appendChild(li);
  }

  function paginator() {
    var rotate = 100 - rotateStage * (currentSlide + 1);
    var rotateVal = Math.round(rotate * 3.6) - 180;
    quizGiftPaginatorCircle.style.transform = 'rotate(' + rotateVal + 'deg)';

    if (rotateVal <= 0) {
      quizGiftPaginatorCircleBlock.classList.add('hide');
    } else {
      quizGiftPaginatorCircleBlock.classList.remove('hide');
    }
  }

  paginator(); //-Открыть квиз

  btnOpenQuiz.onclick = function () {
    quiz.classList.add('active');
    body.classList.add('scroll-hidden');
    myLazyLoadQuiz.loadAll();
  }; //-Закрыть квиз


  btnCloseQuiz.onclick = function () {
    closedQuiz();
  };

  quiz.addEventListener('click', function (e) {
    var target = e.target;

    if (target === quiz) {
      closedQuiz();
    }
  }); //-Следующий слайд

  btnForward.addEventListener('click', function (e) {
    e.preventDefault();

    if (currentSlide < quizSlides.length - 1) {
      currentSlide++;
      slider(1);
      paginator(); //-2 слайд

      if (currentSlide === 1) {
        btnBack.style.display = 'block';
        return false;
      } //-Если последний слайд


      if (currentSlide === quizSlides.length - 1) {
        btnForward.style.display = 'none';
        progressBar();
        return false;
      }
    }
  }); //-Предыдущий слайд

  btnBack.addEventListener('click', function (e) {
    e.preventDefault();

    if (currentSlide > 0) {
      currentSlide--;
      slider(-1);
      paginator(); //-Если предпоследний слайд

      if (currentSlide === quizSlides.length - 2) {
        btnForward.style.display = 'block';
        quizTitle.style.display = 'block';
        quizProgress.classList.remove('hide');
        quizForm.classList.remove('active');
        quizProgressVal.innerHTML = '0%';
        return false;
      } //-Возвращение на 1 слайд


      if (currentSlide === 0) {
        btnBack.style.display = 'none';
        return false;
      }
    }
  });

  function closedQuiz() {
    quiz.classList.remove('active');
    body.classList.remove('scroll-hidden');
  }

  function slider(numb) {
    for (var _i = 0; _i < quizSlides.length; _i++) {
      if (_i === currentSlide) {
        quizSlides[_i - numb].classList.toggle('active');

        quizSlides[_i].classList.toggle('active');
      }
    }

    quizStageNum.innerHTML = currentSlide + 1;
    quizProgressBarDone.style.width = doneWidth[currentSlide];
  } //-Прогресс бар


  function progressBar() {
    quizProgressVal.innerHTML = '0%';
    var intervalId = setInterval(function () {
      var val = parseInt(quizProgressVal.innerHTML);
      val += 5;

      if (val == 100) {
        clearInterval(intervalId);
        quizTitle.style.display = 'none';
        quizProgress.classList.add('hide');
        quizForm.classList.add('active');
        val = 0;
      }

      quizProgressVal.innerHTML = val + '%';
    }, 100);
  }

  var quizRadioBtn = document.querySelectorAll('.radio_btn');
  quizRadioBtn.forEach(function (e) {
    e.addEventListener('change', function () {
      var quizRadioBtn = e.parentNode;
      Array.prototype.filter.call(quizRadioBtn.parentNode.children, function (child) {
        child !== quizRadioBtn ? child.classList.remove('active') : child.classList.add('active');
      });
    });
  });
  var quizItemCheckbox = document.querySelectorAll('.quiz__item-checkbox');
  quizItemCheckbox.forEach(function (e) {
    e.addEventListener('change', function () {
      var itemCheckbox = e.querySelector('.check_btn');
      itemCheckbox.checked ? e.classList.add('active') : e.classList.remove('active');
    });
  });
  var quizFormGroup = document.querySelectorAll('.quiz__form-input-group');
  quizFormGroup.forEach(function (e) {
    var itemInput = e.querySelector('.quiz__form-input');
    itemInput.addEventListener('change', function () {
      var itemInputVal = itemInput.value.length;
      itemInputVal > 0 ? e.classList.add('active') : e.classList.remove('active');
    });
  });
});