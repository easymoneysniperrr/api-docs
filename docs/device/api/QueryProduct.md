# QueryProduct
调用该接口查看产品。

# 使用说明
暂无

# 请求参数
## QueryProductRequest
| 名称    | 类型     | 是否必选 | 描述    |
|-------|--------|------|-------|
| 产品key | String | 是    | 产品key |


# 返回数据
## QueryProductResponse
| 名称   | 类型     | 描述                         |
|------|--------|----------------------------|
| code | String | 调用成功，返回0，调用失败，查看错误信息。      |
| msg  | String | 调用成功，提示"操作成功"，调用失败，查看错误信息。 |
| data | Object | 返回结果。结果内容详情，查看下方示例。        |

## result
| 名称             | 类型      | 是否必选 | 描述                                                   |
|----------------|---------|------|------------------------------------------------------|
| productId      | String  | 是    | 产品ID                                                 |
| productKey     | String  | 是    | 产品Key                                                |
| productName    | String  | 是    | 产品名称                                                 |
| productSecret  | String  | 是    | 产品密钥                                                 |
| secretType     | String  | 是    | 产品加密类型：<br/>TRIPLET<br/>ID²<br/>CERT                 |
| linkProtocol   | String  | 是    | 协议类型:<br/>MQTT<br/>其它<br/>Modbus<br/>OPC-UA<br/>HTTP |
| connectMode    | String  | 是    | 连网方式:<br/>wifi<br/>4G<br/>lora<br/>ethernet<br/>     |
| dataType       | String  | 是    | 数据格式: <br/>json <br/> binary                         |
| deviceAuthMode | String  | 是    | 设备认证方式 默认secret，secret：密钥认证                          |
| productDesc    | String  | 是    | 备注                                                   |
| vendors        | String  | 是    | 厂商                                                   |
| model          | String  | 是    | 产品型号                                                 |
| dataStatus     | String  | 是    | 数据状态 <br/> publish-已发布 <br/> developing-开发中          |
| createTime     | String  | 是    | 创建时间 yyyy-MM-dd HH:mm:ss                             |
| deviceNums     | Integer | 是    | 产品下的所有设备数量                                           |
| activeNums     | Integer | 是    | 激活的设备数量                                              |


# 示例
## 请求示例
```json
{
  
}
```

## 返回示例
```json
{
    "code": "0",
    "msg": "操作成功",
    "data": null
}
```

### data数据
```json
{
  "productId": "9e080e25ce344e34828c7eb10b5383e1",
  "productKey": "T2ahgQhiQ",
  "productName": "添加产品",
  "productSecret": "e10c4a46876f3462",
  "secretType": "TRIPLET",
  "linkProtocol": "HTTP",
  "connectMode": "wifi",
  "dataType": "json",
  "deviceAuthMode": "secret",
  "productDesc": "开鸿智谷备注",
  "vendors": "开鸿智谷",
  "model": "产品型号",
  "dataStatus": "developing",
  "createTime": "2023-10-10 18:54:12",
  "deviceNums": 0,
  "activeNums": 0
}
```

