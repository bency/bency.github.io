(function () {
    var policyLines = [
        { value: '112/10', text: '試辦直接左轉（中正路/府前路）', position: 'start' },
        { value: '112/12', text: '擴大試辦多路段', position: 'end' },
        { value: '113/08', text: '大規模開放 36 路段', position: 'start' }
    ];

    fetch('tainan-pedestrian-accidents.json')
        .then(function (response) { return response.json(); })
        .then(function (rows) {
            var labels = rows.map(function (r) { return r.label; });
            var ped = rows.map(function (r) { return r.ped; });
            var rate = rows.map(function (r) { return r.rate; });

            c3.generate({
                bindto: '#chart11',
                subchart: { show: true },
                data: {
                    x: 'x',
                    columns: [
                        ['x'].concat(labels),
                        ['行人事故案件數'].concat(ped),
                        ['行人占比(%)'].concat(rate)
                    ],
                    axes: {
                        '行人事故案件數': 'y',
                        '行人占比(%)': 'y2'
                    },
                    names: {
                        '行人事故案件數': '行人事故案件數',
                        '行人占比(%)': '行人占比'
                    },
                    colors: {
                        '行人事故案件數': '#4C72B0',
                        '行人占比(%)': '#C44E52'
                    },
                    type: 'line'
                },
                legend: { position: 'bottom' },
                grid: {
                    x: { lines: policyLines },
                    y: { show: true },
                    y2: { show: true }
                },
                tooltip: {
                    format: {
                        title: function (d) { return '民國 ' + d; },
                        value: function (value, ratio, id) {
                            if (id === '行人占比(%)') {
                                return value + '%';
                            }
                            return value + ' 件';
                        }
                    }
                },
                axis: {
                    x: {
                        type: 'category',
                        tick: {
                            rotate: -45,
                            multiline: false,
                            culling: { max: 24 }
                        }
                    },
                    y: {
                        label: { text: '行人事故案件數 / 月', position: 'outer-middle' }
                    },
                    y2: {
                        show: true,
                        label: { text: '行人占比 (%)', position: 'outer-middle' },
                        tick: {
                            format: function (d) { return d + '%'; }
                        }
                    }
                },
                regions: [
                    { axis: 'x', start: '113/08', class: 'policy-region' }
                ]
            });
        })
        .catch(function (err) {
            var el = document.getElementById('chart11');
            if (el) {
                el.innerHTML = '<p class="text-danger mb-0">圖表資料載入失敗，請稍後再試。</p>';
            }
            console.error(err);
        });
})();
