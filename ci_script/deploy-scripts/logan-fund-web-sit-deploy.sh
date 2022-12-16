#!/bin/bash
#根据环境区分部署的IP数组值。环境区分是传入的env参数及选取的分支CI_BUILD_REF_NAME决定。
#替换argv值即可。
if [[ $env == 'sit' && $CI_BUILD_REF_NAME == 'develop' ]]; then
   argv=(10.193.49.1 10.193.49.2)
elif [[ $env == 'uat' ]] && [[ $CI_BUILD_REF_NAME == 'develop' ]]; then
   argv=(10.193.49.1 10.193.49.2)
elif [[ $env == 'prod' ]] && [[ $CI_BUILD_REF_NAME == 'master' ]];
then
   argv=(10.193.5.1 10.193.5.2)
else
   echo 'logan-itpm-web-sit-deploy --> Please enter environment parameters env as sit or uat or prod ! env = ${env}   CI_BUILD_REF_NAME = ${CI_BUILD_REF_NAME} '
   exit 1
fi

pwd
ls -l

echo "logan-itpm-web-sit-deploy --> 当前环境为-->${env} ${argv[@]}"
#遍历IP并部署：部署先将gitlab打的包放到机器的/tmp目录下，然后登陆目标机器将包放到部署目录，并删除/tmp下内容
for i in "${argv[@]}";do
	scp -o StrictHostKeyChecking=no $CI_PROJECT_DIR/publish/dist.zip loganadmin@$i:/tmp/ && \
    ssh -o PasswordAuthentication=no -o StrictHostKeyChecking=no loganadmin@$i "
    source /etc/profile ;
	rm -rf /app/fund/dist /app/fund/dist.zip ;
    \cp /tmp/dist.zip /app/fund/ ;
	unzip /app/fund/dist.zip -d /app/fund ;
    rm -f /tmp/dist.zip ;
    exit 0 ;" || exit 1
    echo "logan-itpm-web-sit-deploy --> operate $i "
done
echo 'logan-itpm-web-sit-deploy --> deploy successful!'
