git pull
npm install
node --max_old_space_size=1096 ./node_modules/@angular/cli/bin/ng build --prod
docker rm boostrap-angular-app -f | true
docker rmi boostrap-angular-app | true
docker build -t boostrap-angular-app --cache-from boostrap-angular-app:latest .
docker run --rm -d --name boostrap-angular-app -p 2222:80 boostrap-angular-app
