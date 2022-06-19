FROM node:16-alpine
# 移动当前目录到 /app
ADD . /app/
# 进入到 app 目录下面，类似 cd 操作
WORKDIR /app/
# 安装依赖
RUN npm config set registry https://registry.npm.taobao.org \
    && npm config  set sass_binary_site https://npm.taobao.org/mirrors/node-sass \
    && npm install
# 打包项目
RUN npm run build
# 对外暴露端口
EXPOSE 3000
# 启动项目
CMD ["npm", "run", "dev:docker"]