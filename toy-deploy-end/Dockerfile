FROM node:16-alpine
# 移动当前目录到 /app
ADD . /app/
# 进入到 app 目录下面，类似 cd 操作
WORKDIR /app/
# 安装依赖
RUN npm config set registry https://registry.npm.taobao.org \
    && npm install
# 对外暴露端口
EXPOSE 7001
# 启动项目
CMD ["npm", "run", "start:docker"]