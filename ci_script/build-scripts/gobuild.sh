#!/bin/bash
source /etc/profile
echo "gobuild --> CI_PROJECT_PATH_SLUG = ${CI_PROJECT_PATH_SLUG}"
#如果未在gitlab的pipiline传递环境参数env，则默认传递的test，选取develop分支，这样会部署到测试环境
if [[ $env == '' ]]; then
export   env='sit'
export   CI_BUILD_REF_NAME='develop'
fi
if [[ $env == 'uat' ]]; then
export   env='uat'
export   CI_BUILD_REF_NAME='develop'
fi
if [[ $env == 'prod' ]]; then
export   env='prod'
export   CI_BUILD_REF_NAME='master'
fi

echo "gobuild --> 当前环境为-->${env}  ${CI_BUILD_REF_NAME}"
SCRIPTS_DIR=$(dirname "$0")
#以参数CI_PROJECT_PATH_SLUG判断具体使用哪个脚本部署
#若项目仓库地址是CI_PROJECT_URL=http://gitlab.logan.com.cn/incentive/incentive/
#则CI_PROJECT_PATH_SLUG=incentive-incentive
#项目必须先自建feature分支，脚本里用变量CI_BUILD_REF_NAME可取到值“feature”。
if [[ $env == 'uat' ]]; then
   sh $SCRIPTS_DIR/logan-fund-web-sit-build.sh || exit 1
   fi
if [ $env == 'prod' ]; then
   sh $SCRIPTS_DIR/logan-fund-web-prod-build.sh || exit 1
else
  echo "gobuild --> This project is not connected to an automated build!"
  fi
