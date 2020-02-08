module.exports = function(env) {
  return {
    devServer: {
      port: 3000,
    },
    output: {
      dir: 'docs',
      publicUrl: '.',
    },
    staticFolder: '藏書樓',
    // themeFile: 'demos/theme.scss',
    // demoList: env === 'development' ? '.demoList.dev.json': '.demoList.prod.json',
    name: '文言',
    version: 'v1',
    homePage: 'https://github.com/akira-cn/wenyan-demos',
    logo: '',
    // 可选主题: active4d, allHallowsEve, amy, blackboard, brillianceBlack,
    // brillianceDull, chromeDevtools, cloudsMidnight, clouds, cobalt,
    // dawn, dreamweaver, eiffel, espressoLibre, github, idle, katzenmilch,
    // kuroirTheme, lazy, magicwbAmiga, merbivoreSoft, merbivore, monokai,
    // pastelsOnDark, slushAndPoppies, solarizedDark, solarizedLight,
    // spacecadet, sunburst, textmateMacClassic, tomorrowNightBlue,
    // tomorrowNightBright, tomorrowNightEighties, tomorrowNight, tomorrow,
    // twilight, vibrantInk, zenburnesque, iplastic, idlefingers, krtheme,
    // monoindustrial,
    boxTheme: 'monokai',
    globalPackages: {
      js: ['https://unpkg.com/@wenyanlang/core/index.min.js'],
      css: [],
    },
    // tab waterfall
    editorViewMode: 'tab',
  };
};
