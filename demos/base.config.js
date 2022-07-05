import wy from './wy-lang.js';

export default function({html, code}) {
  return {
    html: {
      code: html,
    },
    javascript: {
      tabName: '文言',
      code,
      transformer: 'wy',
      visible: true,
      transform(code) {
        // eslint-disable-next-line quotes
        const cc = `(async function(){
          const code = \`${code}\`;
          const _log = console.log;
          let el = null;
          console.log = (msg) => {
            _log(msg);
            if(!el) {
              el = document.createElement('pre');
              out.append(el);
            }
            el.innerText += msg + '\\n';
          };
          const path = location.href.indexOf('localhost') >= 0 ? location.origin: 'https://akira-cn.github.io/wenyan-demos/';
          const jscode = Wenyan.compile(\`吾嘗觀「「天地玄黃」」之書。\n\n\${code}\`, {
            logCallback: () => {},
            importPaths: [path],
            allowHttp: true,
          });
          Wenyan.evalCompiled(\`(async () => {\${jscode}})()\`);
        }());`;
        return cc;
      },
      editorHook(monaco, code, language) {
        // Register a new language
        monaco.languages.register({ id: 'wy' });

        // Register a tokens provider for the language
        monaco.languages.setMonarchTokensProvider('wy', wy);
      },
      inputHook(editor, value) {
        if(/[【】]/mg.test(value)) {
          const res = value.replace(/【/mg, '「').replace(/】/mg, '」');
          editor.setValue(res);
          return false;
        } 
      }
    }
  };
}