# DeleteProduct
调用该接口删除产品。

# 使用说明
暂无

# 请求参数
## DeleteProductRequest

| 名称         | 类型     | 是否必选 | 描述    |
|------------|--------|------|-------|
| productKey | String | 是    | 产品key |


# 返回数据

## DeleteProductResponse

| 名称   | 类型     | 描述                         |
|------|--------|----------------------------|
| code | String | 调用成功，返回0，调用失败，查看错误信息。      |
| msg  | String | 调用成功，提示"操作成功"，调用失败，查看错误信息。 |
| data | Object | 返回结果。结果内容详情，查看下方示例。        |

# 示例

## 请求示例

```json
{
  "productKey": "h2YN5LNiL"
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

