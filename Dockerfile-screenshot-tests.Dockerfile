FROM mcr.microsoft.com/playwright:v1.48.2-jammy AS base

WORKDIR /app
COPY . .
RUN npm install

# CMD 대신에 ENTRYPOINT 쓰면 docker run 돌릴때 --update-snapshots 같은 파라미터 추가 할수 있어요.
ENTRYPOINT ["npm", "run", "test-ct"]
