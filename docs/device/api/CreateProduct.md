# CreateProduct
调用该接口创建产品。

# 使用说明
暂无

# 请求参数
## CreateProductRequest
| 名称             | 类型     | 是否必选 | 描述                                                   |
|----------------|--------|------|------------------------------------------------------|
| connectMode    | String | 是    | 连网方式:<br/>wifi<br/>4G<br/>lora<br/>ethernet<br/>     |
| dataType       | String | 是    | 数据格式: <br/>json <br/> binary                         |
| deviceAuthMode | String | 是    | 设备认证方式 默认secret，secret：密钥认证                          |
| linkProtocol   | String | 是    | 协议类型:<br/>MQTT<br/>其它<br/>Modbus<br/>OPC-UA<br/>HTTP |
| model          | String | 是    | 产品型号                                                 |
| productName    | String | 是    | 产品名称                                                 |
| secretType     | String | 是    | 产品加密类型：<br/>TRIPLET<br/>ID²<br/>CERT                 |
| vendors        | String | 是    | 生产厂商                                                 |
| productDesc    | String | 否    | 备注                                                   |


# 返回数据
## CreateProductResponse
| 名称   | 类型     | 描述                         |
|------|--------|----------------------------|
| code | String | 调用成功，返回0，调用失败，查看错误信息。      |
| msg  | String | 调用成功，提示"操作成功"，调用失败，查看错误信息。 |
| data | Object | 返回结果。结果内容详情，查看下方示例。        |

# 示例
## 请求示例
```json
{
  "connectMode":"4G",
  "dataType":"json",
  "deviceAuthMode":"secret",
  "linkProtocol":"HTTP",
  "model":"productType",
  "productDesc":"开鸿智谷厂家",
  "productName":"goodProduct",
  "secretType":"TRIPLET",
  "vendors":"开鸿智谷"
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

