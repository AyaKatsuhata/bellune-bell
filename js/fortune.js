(function (global) {
  'use strict';

  const tenshoTable = {
    "2023": [55, 26, 54, 25, 55, 26, 56, 27, 58, 28, 59, 29],
    "2022": [50, 21, 49, 20, 50, 21, 51, 22, 53, 23, 54, 24],
    "2021": [45, 16, 44, 15, 45, 16, 46, 17, 48, 18, 49, 19],
    "2020": [39, 10, 39, 10, 40, 11, 41, 12, 43, 13, 44, 14],
    "2019": [34, 5, 33, 5, 34, 5, 35, 6, 37, 7, 38, 8],
    "2018": [29, 0, 28, 0, 29, 0, 30, 1, 32, 2, 33, 3],
    "2017": [24, 55, 23, 55, 24, 55, 25, 56, 27, 57, 28, 58],
    "2016": [18, 49, 18, 49, 19, 50, 20, 51, 22, 52, 23, 53],
    "2015": [13, 44, 12, 43, 13, 44, 14, 45, 16, 46, 17, 47],
    "2014": [8, 39, 7, 38, 8, 39, 9, 40, 11, 41, 12, 42],
    "2013": [3, 34, 2, 33, 3, 34, 4, 35, 6, 36, 7, 37],
    "2012": [57, 28, 57, 28, 58, 29, 59, 30, 1, 31, 2, 32],
    "2011": [52, 23, 51, 22, 52, 23, 53, 24, 55, 25, 56, 26],
    "2010": [47, 18, 46, 17, 47, 18, 48, 19, 50, 20, 51, 21],
    "2009": [42, 13, 41, 12, 42, 13, 43, 14, 45, 15, 46, 16],
    "2008": [36, 7, 36, 7, 37, 8, 38, 9, 40, 10, 41, 11],
    "2007": [31, 2, 30, 1, 31, 2, 32, 3, 34, 4, 35, 5],
    "2006": [26, 57, 25, 56, 26, 57, 27, 58, 29, 59, 30, 0],
    "2005": [21, 52, 20, 51, 21, 52, 22, 53, 24, 54, 25, 55],
    "2004": [15, 46, 15, 46, 16, 47, 17, 48, 19, 49, 20, 50],
    "2003": [10, 41, 9, 40, 10, 41, 11, 42, 13, 43, 14, 44],
    "2002": [5, 36, 4, 35, 5, 36, 6, 37, 8, 38, 9, 39],
    "2001": [0, 31, 59, 30, 0, 31, 1, 32, 3, 33, 4, 34],
    "2000": [54, 25, 54, 25, 55, 26, 56, 27, 58, 28, 59, 29],
    "1999": [49, 20, 48, 19, 49, 20, 50, 21, 52, 22, 53, 23],
    "1998": [44, 15, 43, 14, 44, 15, 45, 16, 47, 17, 48, 18],
    "1997": [39, 10, 38, 9, 39, 10, 40, 11, 42, 12, 43, 13],
    "1996": [33, 4, 33, 4, 34, 5, 35, 6, 37, 7, 38, 8],
    "1995": [28, 59, 27, 58, 28, 59, 29, 0, 31, 1, 32, 2],
    "1994": [23, 54, 22, 53, 23, 54, 24, 55, 26, 56, 27, 57],
    "1993": [18, 49, 17, 48, 18, 49, 19, 50, 21, 51, 22, 52],
    "1992": [12, 43, 12, 43, 13, 44, 14, 45, 16, 46, 17, 47],
    "1991": [7, 38, 6, 37, 7, 38, 8, 39, 10, 40, 11, 41],
    "1990": [2, 33, 1, 32, 2, 33, 3, 34, 5, 35, 6, 36],
    "1989": [57, 28, 56, 27, 57, 28, 58, 29, 0, 30, 1, 31],
    "1988": [51, 22, 51, 22, 52, 23, 53, 24, 55, 25, 56, 26],
    "1987": [46, 17, 45, 16, 46, 17, 47, 18, 49, 19, 50, 20],
    "1986": [41, 12, 40, 11, 41, 12, 42, 13, 44, 14, 45, 15],
    "1985": [36, 7, 35, 6, 36, 7, 37, 8, 39, 9, 40, 10],
    "1984": [30, 1, 30, 1, 31, 2, 32, 3, 34, 4, 35, 5],
    "1983": [25, 56, 24, 55, 25, 56, 26, 57, 28, 58, 29, 59],
    "1982": [20, 51, 19, 50, 20, 51, 21, 52, 23, 53, 24, 54],
    "1981": [15, 46, 14, 45, 15, 46, 16, 47, 18, 48, 19, 49],
    "1980": [9, 40, 9, 40, 10, 41, 11, 42, 13, 43, 14, 44],
    "1979": [4, 35, 3, 34, 4, 35, 5, 36, 7, 37, 8, 38],
    "1978": [59, 30, 58, 29, 59, 30, 0, 31, 2, 32, 3, 33],
    "1977": [54, 25, 53, 24, 54, 25, 55, 26, 57, 27, 58, 28],
    "1976": [48, 19, 48, 19, 49, 20, 50, 21, 52, 22, 53, 23],
    "1975": [43, 14, 42, 13, 43, 14, 44, 15, 46, 16, 47, 17],
    "1974": [38, 9, 37, 8, 38, 9, 39, 10, 41, 11, 42, 12],
    "1973": [33, 4, 32, 3, 33, 4, 34, 5, 36, 6, 37, 7],
    "1972": [27, 58, 27, 58, 28, 59, 29, 0, 31, 1, 32, 2],
    "1971": [22, 53, 21, 52, 22, 53, 23, 54, 25, 55, 26, 56],
    "1970": [17, 48, 16, 47, 17, 48, 18, 49, 20, 50, 21, 51],
    "1969": [12, 43, 11, 42, 12, 43, 13, 44, 15, 45, 16, 46],
    "1968": [6, 37, 6, 37, 7, 38, 8, 39, 10, 40, 11, 41],
    "1967": [1, 32, 0, 31, 1, 32, 2, 33, 4, 34, 5, 35],
    "1966": [56, 27, 55, 26, 56, 27, 57, 28, 59, 29, 0, 30],
    "1965": [51, 22, 50, 21, 51, 22, 52, 23, 54, 24, 55, 25],
    "1964": [45, 16, 45, 16, 46, 17, 47, 18, 49, 19, 50, 20],
    "1963": [40, 11, 39, 10, 40, 11, 41, 12, 43, 13, 44, 14],
    "1962": [35, 6, 34, 5, 35, 6, 36, 7, 38, 8, 39, 9],
    "1961": [30, 1, 29, 0, 30, 1, 31, 2, 33, 3, 34, 4],
    "1960": [24, 55, 24, 55, 25, 56, 26, 57, 28, 58, 29, 59],
    "1959": [19, 50, 18, 49, 19, 50, 20, 51, 22, 52, 23, 53],
    "1958": [14, 45, 13, 44, 14, 45, 15, 46, 17, 47, 18, 48],
    "1957": [9, 40, 8, 39, 9, 40, 10, 41, 12, 42, 13, 43],
    "1956": [3, 34, 3, 34, 4, 35, 5, 36, 7, 37, 8, 38],
    "1955": [58, 29, 57, 28, 58, 29, 59, 30, 1, 31, 2, 32],
    "1954": [53, 24, 52, 23, 53, 24, 54, 25, 56, 26, 57, 27],
    "1953": [48, 19, 47, 18, 48, 19, 49, 20, 51, 21, 52, 22],
    "1952": [52, 13, 42, 13, 43, 14, 44, 15, 46, 16, 47, 17],
    "1951": [37, 8, 36, 7, 37, 8, 38, 9, 40, 10, 41, 11]
  };

  const groupMapping = {
    fullMoon: [4, 10, 33, 39, 45],
    firstQuarter: [11, 17, 32, 38],
    lastQuarter: [2, 3, 8, 41, 47],
    newMoon: [14, 20, 23, 26, 29, 36],
    sky: [6, 43, 49, 54, 55, 60],
    mountain: [9, 15, 16, 34, 40, 46],
    continent: [1, 5, 50, 53, 56, 59],
    ocean: [51, 52, 57, 58],
    sunrise: [21, 22, 27, 28],
    midday: [7, 42, 44, 48],
    sunset: [12, 18, 31, 37],
    midnight: [13, 19, 24, 25, 30, 35]
  };

  const groupLabels = {
    fullMoon: "満月",
    firstQuarter: "上弦の月",
    lastQuarter: "下弦の月",
    newMoon: "新月",
    sky: "空",
    mountain: "山脈",
    continent: "大陸",
    ocean: "海",
    sunrise: "朝日",
    midday: "真昼",
    sunset: "夕焼け",
    midnight: "深夜"
  };

  // ===== ユーティリティ =====
  function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  function daysInMonth(year, month) {
    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;
    if ([4, 6, 9, 11].includes(month)) return 30;
    return isLeap(year) ? 29 : 28; // February
  }
  function validateDate(year, month, day) {
    if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
      return '生年月日をすべて選択してください。';
    }
    if (!tenshoTable[String(year)]) {
      return `天星表に該当する年がありません（${year}年）`;
    }
    if (month < 1 || month > 12) {
      return '月の値が不正です。';
    }
    const maxDay = daysInMonth(year, month);
    if (day < 1 || day > maxDay) {
      return `日付が不正です（${month}月は${maxDay}日まで）。`;
    }
    return null;
  }
  function calcTenshoNumber(year, month, day) {
    const base = tenshoTable[String(year)][month - 1];
    let tenshoNumber = base + day;
    while (tenshoNumber > 60) tenshoNumber -= 60;
    return tenshoNumber;
  }
  function resolveGroup(tenshoNumber) {
    for (const [key, numbers] of Object.entries(groupMapping)) {
      if (numbers.includes(tenshoNumber)) return key;
    }
    return 'unknown';
  }
  function getResultUrl(groupKey) {
    return groupURLs[groupKey] || '';
  }

  /**
   * エントリポイント：ボタン押下時に呼び出してください。
   * @param {Object} params
   * @param {number} params.year
   * @param {number} params.month
   * @param {number} params.day
   * @param {(msg:string)=>void} [params.onError] - エラー表示用（未指定ならalert）
   * @param {(url:string, ctx:Object)=>void} [params.onRedirect] - 遷移フック（未指定ならlocation.href）
   * @returns {Object} 実行結果
   */
  function startFortuneFlow({ year, month, day, onError, onRedirect }) {
    const err = validateDate(year, month, day);
    if (err) { if (onError) onError(err); else alert(err); return { ok:false, error:err }; }
  
    const tenshoNumber = calcTenshoNumber(year, month, day);
    const groupKey = resolveGroup(tenshoNumber);
  
    // クエリで結果ページへ（必要なら他の値も付与OK）
    // const url = `${RESULT_URL}?g=${encodeURIComponent(groupKey)}&n=${encodeURIComponent(tenshoNumber)}&y=${year}&m=${month}&d=${day}`;
    const url = `/result.html?g=${encodeURIComponent(groupKey)}&n=${encodeURIComponent(tenshoNumber)}&y=${year}&m=${month}&d=${day}`;
    if (typeof onRedirect === 'function') onRedirect(url, { tenshoNumber, groupKey });
    else window.location.href = url;
  
    return { ok:true, url, tenshoNumber, groupKey };
  }

  // ==== グローバル公開 ====
  global.startFortuneFlow = startFortuneFlow;
  // （必要に応じて）内部関数も束ねて公開
  global.Fortune = {
    validateDate,
    calcTenshoNumber,
    resolveGroup,
    getResultUrl,
    groupLabels,
    groupURLs,
    groupMapping,
    tenshoTable
  };
})(window);