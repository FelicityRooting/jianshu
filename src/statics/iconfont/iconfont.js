import { createGlobalStyle } from 'styled-components';

const GlobalStyleFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1542077916196'); /* IE9*/
  src: url('./iconfont.eot?t=1542077916196#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1542077916196') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1542077916196#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-zhinanzhen:before { content: "\e695"; }

.icon-spin:before { content: "\e851"; }

.icon-fangdajing:before { content: "\e617"; }

.icon-icon-pencil:before { content: "\e670"; }

.icon-ai231:before { content: "\e6db"; }

.icon-quill:before { content: "\e600"; }

.icon-Aa:before { content: "\e636"; }
`;
export default GlobalStyleFont




