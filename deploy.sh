git pull
npm install
npm run build
docker rm boostrap-angular-app -f | true
docker rmi boostrap-angular-app | true
docker build -t boostrap-angular-app --cache-from boostrap-angular-app:latest .
docker run --rm -d --name boostrap-angular-app -p 2222:80 boostrap-angular-app
