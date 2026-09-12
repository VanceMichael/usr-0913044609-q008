# 变压器产能协调服务

工程记录变压器规格、物料、产线能力与客户订单，为排程和停机影响分析提供后端接口。Node.js 源码位于 `src/`，MongoDB 连接通过环境变量配置，测试目录为 `test/`。

执行 `docker compose up --build` 启动 MongoDB 和 API，健康检查地址为 `:3000/healthz`。构建使用 `npm run build`，测试命令为 `npm test`。
