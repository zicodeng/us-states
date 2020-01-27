import translate from 'translate';
import fs from 'fs';

import { US_STATES } from './index.js';

(async () => {
  translate.engine = 'yandex';
  translate.key = process.env.TRANSLATE_KEY;

  const result = await Promise.all(
    US_STATES.map(async state => {
      let translation = '';

      switch (state.name) {
        case 'Alaska':
          translation = '阿拉斯加州';
          break;

        case 'Georgia':
          translation = '乔治亚州';
          break;

        case 'Guam Gu':
          translation = '关岛';
          break;

        case 'Hawaii':
          translation = '夏威夷州';
          break;

        case 'New Jersey':
          translation = '新泽西州';
          break;

        case 'New York':
          translation = '纽约州';
          break;

        case 'North Carolina':
          translation = '北卡罗来纳州';
          break;

        case 'South Carolina':
          translation = '南卡罗来纳州';
          break;

        case 'Virgin Islands':
          translation = '维尔京群岛';
          break;

        case 'Washington':
          translation = '华盛顿州';
          break;

        default:
          translation = await translate(state.name, 'chinese');
          break;
      }

      state.translation = translation;

      return state;
    }),
  );

  fs.writeFileSync('./tmp.js', JSON.stringify(result));
})();
