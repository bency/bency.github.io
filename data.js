var chart = c3.generate({
    bindto: '#chart',
    subchart: {
        show: true
    },
    data: {
        x : 'x',
        columns: [
            ['x','80年','81年','82年','83年','84年','85年','86年','87年','88年','89年','90年','91年','92年','93年','94年','95年','96年','97年','98年','99年','100年','101年','102年','103年','104年','105年','106年','107年', '108年'],
            ['每萬人肇事率',1.59,0.94,0.71,0.94,0.86,0.76,0.74,0.58,0.49,0.78,0.86,0.76,0.72,0.64,0.73,0.91,0.74,0.67,0.61,0.61,0.64,0.61,0.57,0.56,0.51,0.50,0.47,0.47,0.61],
            ['每萬人死亡率',0.90,0.56,0.53,0.69,0.65,0.56,0.52,0.46,0.40,0.79,0.87,0.78,0.73,0.65,0.74,0.92,0.76,0.68,0.62,0.62,0.65,0.62,0.58,0.57,0.52,0.50,0.47,0.48,0.61],
            ['每萬人受傷率',1.41,0.82,0.50,0.68,0.59,0.51,0.54,0.34,0.27,0.24,0.31,0.24,0.24,0.23,0.26,0.27,0.25,0.24,0.23,0.18,0.24,0.21,0.20,0.19,0.19,0.18,0.20,0.18,0.23]
        ],
        hide: ['每萬人受傷率'],
        type: 'line'
    },
    legend: {
        position: 'right'
    },
    regions: [
        {start: 8, end: 10, class: "warning"},
        {start: 13, end: 15, class: "warning"},
    ],
    grid: {
        x: {
            lines: [
                {value: '83年', text: '台北市強制戴安全帽', position: 'start'},
                {value: '86年', text: '全國強制戴安全帽', position: 'start'},
                {value: '88年', text: '全國實施強制兩段式左轉、禁行機車'},
                {value: '93年', text: '實施路權優先安全第一專案'},
                {value: '95年', text: '路權優先安全第一專案結束', position: 'start'},
            ]
        },
        y: {
            lines:[
                {value: 0.49, text: '民國88年肇事率基準線', position: 'end'},
                {value: 0.40, text: '民國88年死亡率基準線', position: 'end'}
            ]
        }
    },
    axis: {
        x: {
            type: 'category'
        },
        y:{
            max: 1.0
        }
    }
});
var chart2 = c3.generate({
    bindto: '#chart2',
    subchart: {
        show: true
    },
    data: {
        x : 'x',
        columns: [
            ['x',   '80年',   '81年',   '82年',   '83年',   '84年',   '85年',   '86年',   '87年',   '88年',   '89年',   '90年',   '91年',   '92年',   '93年',   '94年',   '95年',   '96年',   '97年',   '98年',   '99年',   '100年',  '101年',  '102年',  '103年',  '104年',  '105年',  '106年',  '107年', '108年'],
            ['小客車',  4.94,   3.64,   2.74,   3.56,   3.65,   3.42,   2.66,   2.38,   2.29,   2.84,   2.57,   1.93,   1.75,   1.64,   1.76,   1.69,   1.29,   1.12,   1,  0.96,   0.94,   0.85,   0.84,   0.74,   0.73,   0.67,   0.6,0.58, 0.65],
            ['機車',    0.9,0.56,   0.53,   0.69,   0.65,   0.56,   0.52,   0.46,   0.4,0.79,   0.87,   0.78,   0.73,   0.65,   0.74,   0.92,   0.76,   0.68,   0.62,   0.62,   0.65,   0.62,   0.58,   0.57,   0.52,   0.5,0.47,   0.48, 0.61],
            ['大客車',  76.67,  50.22,  39.53,  45.22,  43.41,  40.58,  32.35,  28.5,   23.57,  35.2,   32.52,  30.53,  26.03,  25.73,  19.47,  25.69,  21.14,  15.36,  17.45,  9.88,   7.45,   13.75,  9.52,   8.94,   7.48,   9.65,   19.5,   6.46, 7.15],
            ['大貨車',  55.37,  51.1,   39.18,  44.08,  32.05,  31.36,  29.83,  23.49,  23.49,  28.07,  26.52,  23.48,  18.09,  19.58,  19.96,  19.19,  14.72,  12.73,  10.69,  13.44,  11.93,  11.25,  11.81,  10.26,  9.3,9.38,   7.54,   7.6, 8.9],
            ['小貨車',  6.71,   5.48,   3.99,   5.58,   5.33,   4.45,   4.6,3.78,   4.33,   6.47,   5.24,   4.26,   4.2,3.5,4.1,3.85,   3.51,   2.65,   2.79,   2.36,   2.47,   2.26,   2.11,   2.19,   2.08,   1.64,   1.76,   1.63, 2.03],
        ],
        hide: ['大客車', '大貨車', '小貨車'],
        type: 'line'
    },
    legend: {
        position: 'right'
    },
    regions: [
        {start: 8, end: 10, class: "warning"},
        {start: 13, end: 15, class: "warning"},
    ],
    grid: {
        x: {
            lines: [
                {value: '83年', text: '台北市強制戴安全帽', position: 'end'},
                {value: '86年', text: '全國強制戴安全帽', position: 'end'},
                {value: '86年', text: '駕駛強制繫安全帶', position: 'start'},
                {value: '88年', text: '全國實施強制兩段式左轉、禁行機車'},
                {value: '90年', text: '副駕駛強制繫安全帶', position: 'end'},
                {value: '93年', text: '實施路權優先安全第一專案'},
                {value: '95年', text: '路權優先安全第一專案結束'},
                {value: '98年', text: '安全氣囊列為標準配備'},
                {value: '100年', text: '後座強制繫安全帶'},
            ]
        }
    },
    axis: {
        x: {
            type: 'category'
        }
    }
});
var chart4 = c3.generate({
    bindto: '#chart3',
    subchart: {
        show: false
    },
    data: {
        x : 'x',
        columns: [
            ['x',  '91年',   '92年',   '93年',   '94年',   '95年',   '96年',   '97年',   '98年',   '99年',   '100年',  '101年',  '102年',  '103年',  '104年',  '105年',  '106年',  '107年', '108年'],
            ['data1', 1882,  4311,  6941,  10493, 14334, 18189, 21855, 24133, 26793, 30410, 36829, 50742, 67020, 89042, 108157,126962,142598,157867],
            ['data2', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 2954,  3053,  3123,  3420,  3719,  6127,  14923, 24778, 37307, 47688, 57004, 65306, 74339],
            ['data3', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 15235, 18802, 21010, 23373, 26691, 30702, 35819, 42242, 51735, 60469, 69958, 77292, 83528],
            ['data4', 'N/A', 2.29,   1.61,   1.51,   1.37,   1.27,   1.20,   1.10,   1.11,   1.13,   1.21,   1.38,   1.32,   1.33,   1.21,   1.17,   1.12,   1.11],
            ['data5', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1.03,   1.02,   1.10,   1.09,   1.65,   2.44,   1.66,   1.51,   1.28,   1.20,   1.15,   1.14],
            ['data6', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 1.23,   1.12,   1.11,   1.14,   1.15,   1.17,   1.18,   1.22,   1.17,   1.16,   1.10,   1.08],
        ],
        names: {
            data1: '總和',
            data2: '未滿550cc',
            data3: '550cc以上',
            data4: '總成長率',
            data5: '未滿550cc成長率',
            data6: '550cc以上成長率',
        },
        hide: ['data1', 'data4', 'data5', 'data6'],
        axes: {
            data1: 'y',
            data2: 'y',
            data3: 'y',
            data4: 'y2',
            data5: 'y2',
            data6: 'y2',
        },
        types: {
            data4: 'bar',
            data5: 'bar',
            data6: 'bar',
        },
        colors: {
            data1: '#0000ff',
            data2: '#f0e024',
            data3: '#f04124',
            data4: '#0000ff',
            data5: '#f0e024',
            data6: '#ff000c',
        },
        type: 'line'
    },
    grid: {
        x: {
            lines: [
                {value: '96年', text: '開放 550cc 以上高架道路', position: 'end'},
                {value: '101年', text: '開放未滿 550cc 高架道路', position: 'end'},
            ]
        },
        y: {
            show: true,
        }
    },
    axis: {
        x: {
            type: 'category'
        },
        y : {
            tick: {
                format: function (d) { return d / 10000 + "萬"; }
            }
        },
        y2: {
            show: true
        }
    }
});
var chart3 = c3.generate({
    bindto: '#chart4',
    subchart: {
        show: false
    },
    legend: {
        position: 'right'
    },
    regions: [
        {start: 8, end: 10, class: "warning"},
        {start: 13, end: 15, class: "warning"},
    ],
    data: {
        x : 'x',
        columns: [
            ['x', '80年','81年','82年','83年','84年','85年','86年','87年','88年','89年','90年','91年','92年','93年','94年','95年','96年','97年','98年','99年','100年','101年','102年','103年','104年','105年','106年','107年', '108年'],
            ['data1', 4729,3489,2696,3603,3528,3619,3162,2720,2487,52952,64264,86259,120223,137221,155814,160897,163971,170127,184749,219651,235776,249465,278388,307842,305413,305556,296826,320315, 341972],
            ['data2', 3305,2717,2349,3094,3065,2990,2735,2507,2392,3388,3344,2861,2718,2634,2894,3140,2573,2224,2092,2047,2117,2040,1928,1819,1696,1604,1517,1493, 1849],
            ['data3','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A','N/A',66895,80612,109594,156303,179108,203087,211176,216927,227423,246994,293764,315201,334082,373568,413229,410073,403906,394198,428049, 456378],
        ],
        names: {
            data1: '肇事件數',
            data2: '死亡人數',
            data3: '受傷人數',
        },
        hide: ['data1'],
        axes: {
            data1: 'y',
            data2: 'y2',
            data3: 'y',
        },
        type: 'line'
    },
    grid: {
        x: {
            lines: [
                {value: '83年', text: '台北市強制戴安全帽', position: 'start'},
                {value: '86年', text: '全國強制戴安全帽', position: 'start'},
                {value: '88年', text: '全國實施強制兩段式左轉、禁行機車'},
                {value: '93年', text: '實施路權優先安全第一專案'},
                {value: '95年', text: '路權優先安全第一專案結束', position: 'start'},
            ]
        },
        y: {
            show: true,
        }
    },
    axis: {
        x: {
            type: 'category'
        },
        y2: {
            show: true
        },
        y : {
            tick: {
                format: function (d) { return Number.parseFloat(d / 10000).toFixed(2) + "萬"; }
            }
        }
    }
});
var chart5 = c3.generate({
    bindto: '#chart5',
    data: {
        x : 'x',
        columns: [
            ['x','81年','82年','83年','84年','85年','86年','87年','88年','89年','90年','91年','92年','93年','94年','95年','96年','97年','98年','99年','100年','101年','102年','103年','104年','105年','106年','107年'],
            ['汽車',3618946,3989128,4342573,4684447,4989551,5294130,5430095,5359299,5599517,5731835,5923200,6133794,6389186,6667542,6750169,6768281,6726916,6769845,6876515,7053082,7206770,7367522,7554319,7739144,7842423,7948783,8035720],
            ['機車',7649308,7867396,8034509,8517024,9283914,10051613,10529040,10958469,11423172,11733202,11983757,12366864,12793950,13195265,13557028,13943473,14365442,14604330,14844932,15173602,15139628,14195123,13735960,13661719,13668227,13755582,13835520],
            ['大客車',21294,21210,21252,21598,21772,22743,22871,23798,23923,24053,25079,25628,26453,26967,27522,27361,27339,27667,29030,29991,31098,31960,32928,33890,34531,34188,33877],
            ['大貨車',137535,148297,155256,156756,155740,158000,156239,152878,155623,155140,155805,157156,160460,164248,166211,164004,161231,158812,161084,164221,161256,162122,163446,165695,166943,167088,164661],
            ['小客車',2900042,3238754,3570497,3874203,4146475,4411911,4545488,4509430,4716217,4825581,4989336,5169733,5390848,5634362,5698324,5712842,5674426,5704312,5803413,5960088,6091324,6236879,6405778,6573746,6666006,6763422,6845711],
            ['小貨車',533218,548272,556553,591394,622144,655410,657855,627034,652963,675533,700978,728624,758809,789222,805590,811646,812440,827955,832466,848732,862230,875544,890703,903739,911524,919294,926128],
            ['特種車',26857,32595,39015,40496,43420,46066,47642,46159,50791,51528,52002,52653,52616,52743,52522,52428,51480,51099,50522,50050,60862,61017,61464,62074,63419,64791,65343],
        ],
        hide: ['汽車', '大客車', '大貨車', '小貨車', '特種車'],
        type: 'line'
    },
    legend: {
        position: 'right'
    },
    grid: {
        x: {
            lines: [
                {value: '83年', text: '台北市強制戴安全帽', position: 'start'},
                {value: '86年', text: '全國強制戴安全帽', position: 'start'},
                {value: '88年', text: '全國實施強制兩段式左轉、禁行機車'},
                {value: '93年', text: '實施路權優先安全第一專案'},
                {value: '95年', text: '路權優先安全第一專案結束', position: 'start'},
            ]
        },
        y: {
            lines:[
                {value: 10000000, position: 'end'}
            ]
        }
    },
    axis: {
        x: {
            type: 'category'
        },
        y : {
            tick: {
                format: function (d) { return Number.parseFloat(d / 10000).toFixed(2) + "萬"; }
            }
        }
    }
});
var chart6 = c3.generate({
    bindto: '#chart6',
    data: {
        x : 'x',
        columns: [
            ['x', '98年', '99年', '100年', '101年', '102年', '103年', '104年', '105年', '106年', '107年', '108年1~8月'],
            ['舉發總件數', 2674221, 1902552, 1489207, 1652124, 1628083, 1552160, 1802705, 1917990, 1909152, 2131596, 1590341],
            ['汽車', 1351671, 1060951, 875527, 922579, 895084, 881163, 993223, 1103228, 1082216, 1201032, 900085],
            ['機車', 1048534, 674945, 520868, 653972, 662360, 617200, 756810, 765685, 779372, 879128, 646853],
            ['其他', 531, 297, 776, 452, 272, 288, 489, 344, 323, 320, 269],
            ['慢車', 190, 223, 164, 269, 522, 996, 1343, 1758, 2069, 2056, 2082],
            ['行人', 129633, 48462, 12212, 11019, 11476, 7750, 7143, 7555, 7168, 7798, 12659],
            ['道路障礙', 143662, 117674, 79660, 63833, 58369, 44763, 43697, 39420, 38004, 41262, 28393]
        ],
        groups: [['汽車', '機車', '其他', '慢車', '行人', '道路障礙']],
        hide: ['舉發總件數'],
        type: 'area-spline'
    },
    legend: {
        position: 'right'
    },
    grid: {
        x: {
            lines: [
            ]
        },
        y: {
            lines:[
            ]
        }
    },
    axis: {
        x: {
            type: 'category'
        },
        y : {
            tick: {
                format: function (d) {
                    if (d < 10000) {
                        return d + '件';
                    }
                    return Math.round(d / 100) / 100 + "萬件";
                }
            }
        }
    }
});
document.getElementById('toggle-chart6').addEventListener('click', function () {
    if ('line' === this.getAttribute('data-target')) {
        chart6.transform('line');
        chart6.groups([[]]);
        this.setAttribute('data-target', 'area-spline');
    } else {
        chart6.transform('area-spline');
        chart6.groups([['汽車', '機車', '其他', '慢車', '行人', '道路障礙']]);
        this.setAttribute('data-target', 'line');
    }
})
