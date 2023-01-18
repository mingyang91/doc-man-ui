# API

## Device API

### Report

确定唯一设备：
委托单位 - 检测地址 - 设备编号

```bash

curl --location --request POST 'http://localhost:9000/api/render?template=1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "device": {
        "requester": "上海市黄浦区外滩街道社区卫生服务中心",
        "address": "宁波路321号",
        "model": "Q-Rad",
        "deviceName": "医用检测X射线DR机",
        "sampleName": "医用检测X射线DR机",
        "sampleNo": "Hxxxx-1",
        "deviceNo": "KL10019",
        "vendor": "锐珂（上海）医疗器材有限公司",
        "place": "摄片机房",
        "accordingTo": "WS 76—2020《医用X射线诊断设备质量控制检测规范》",
        "equipment": "B-PIRANHA多功能 X射线测试仪，DR质量模体",
        "testItem": "设备质量控制（状态监测）"
    },
    "info": {
        "reportNo": "FYS-2022-H-XXXX",
        "date": "2022年04月25日"
    },
    "items1": [ // 通用检测项
        {
            "name": "管电压指示的偏离",
            "conditionFactor": "100 mA,0.125s",
            "defaultValue": "60kV",
            "result": "-3.12%(-1.87kV)",
            "acceptanceRequire": "±5.0%或±5.0 kV内,以较大者控制",
            "stateRequire": "±5.0%或±5.0 kV内,以较大者控制",
            "conclusion": "合格"
        }
    ],
    "items2": [ // 专用检测项
        {
            "name": "探测器剂量指示(DDI)",
            "conditionFactor": "（10μGy）\n70kV, 10mAs",
            "defaultValue": "",
            "result": "1767 (-1.98%)\n（平均像素值）",
            "acceptanceRequire": "DDI (10μGy)计算值与测量值±20.0%，DDI或平均像素值建立基线值",
            "stateRequire": "DDI测量值与计算值±20.0%，或基线值±20.0%",
            "conclusion": "合格"
        }
    ]
}'

```

检测项选择的字段名称为专用字段

通用专用检测项标识分开

