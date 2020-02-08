import wy from '../wy-lang.js';

export default async () => {
  let code = await import('!raw-loader!./序.wy');
  const html = await import('!raw-loader!~/index.html');

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
            if(!el) {
              el = document.createElement('pre');
              out.append(el);
            }
            el.innerText += msg + '\\n';
          };
          Wenyan.execute(\`\${code}\`, {
            logCallback: () => {},
            importPaths: [location.origin],
            allowHttp: true,
          });
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
        if(/[\[\]]/mg.test(value)) {
          const res = value.replace(/\[/mg, '「').replace(/\]/mg, '」');
          editor.setValue(res);
          return false;
        } 
      }
    }
  };
};