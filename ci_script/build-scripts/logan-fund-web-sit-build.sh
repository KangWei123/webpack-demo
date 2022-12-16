#!/bin/bash
#编译后将包拷贝至新建的publish/pcdist目录下，当前目录就是代码根目录。
#因为pc与mobile会部署到同一套机器，部署时需要先将包拷贝到部署机器的/tmp下，未免冲突，所以这里多建了一层目录，mobile对应也有mobiledist目录
echo "logan-itpm-web-sit-build --> CI_PROJECT_PATH_SLUG = ${CI_PROJECT_PATH_SLUG}"
if [[ $env == 'sit' ]] && [[ $CI_BUILD_REF_NAME == 'develop' ]]; then
profile=uat
elif [[ $env == 'uat' ]] && [[ $CI_BUILD_REF_NAME == 'develop' ]]; then
profile=uat
elif [[ $env == 'prod' ]] && [[ $CI_BUILD_REF_NAME == 'master' ]]; then
profile=prod
else
echo 'logan-itpm-web-sit-build --> Please enter CORRECT environment parameters sit, uat or prod !'
exit 1
fi

echo $profile
echo $CI_PIPELINE_ID
echo 'logan-itpm-web-sit-build --> profile = ${profile}  CI_PIPELINE_ID = ${CI_PIPELINE_ID}'

# /root/builds/rapG8XqC/0/incentive/logan-itpm-web-sit
pwd
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
# npm rebuild node-sass
npm run build:stage

pwd
ls -l

echo "logan-itpm-web-sit-build --> npm run buil sucessful! now going to zip"
zip -r dist.zip dist

echo "logan-itpm-web-sit-build --> zip sucessful! "
mkdir -p publish && \
mv ./dist.zip publish/ && \

#rm -rf /tmp/dist.zip
#mv ./dist.zip /tmp/dist.zip

ls -l publish/ | grep dist.zip

echo "logan-itpm-web-sit-build --> build sucessful!"
