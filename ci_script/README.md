# incentive自动化构建说明

1. 将配置文件.gitlab-ci.yml放到项目的代码根目录下，每个项目都要放。  
2. “build-scripts”与“deploy-scripts”目录下分别是构建和部署脚本。
3. build-scripts脚本说明：
- 根据env的不同，构建测试环境或者生产环境代码
    可用选项：  test  prod
- 根据CI_BUILD_REF_NAME，执行不同分支代码
    默认：develop
- 根据CI_PROJECT_PATH_SLUG参数的不同，执行前端或者后台代码  	
    前台代码：incentive-frontend
    后台代码：incentive-backend

4. deploy-scripts脚本说明：
- 根据env的不同，发布代码到测试环境或者生产环境
    可用选项：  test  prod
- 根据CI_PROJECT_PATH_SLUG参数的不同，执行前端或者后台代码  
    前台代码：incentive-frontend
    后台代码：incentive-backend	
    
5. 自动化部署前的准备，在各个服务器，执行如下脚本：
    ```bash
    #!/bin/bash
    mkdir -p /home/cifiadmin/.ssh
    cat > /home/cifiadmin/.ssh/authorized_keys <<EOF
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDsFDIHDKoLBlrd/GMX5GXdoF6Wg4WcRkAy0BjsaHt1QE9jDcxKrvgeD75r76UXGY7GElWgCHeM6v0+lY3EEnukzRcutshiD9PVjoEM2PunHVAia8sdbm8FP+eVb60vdpBTwzuLa7hXQEtELzJxCwvd01e5Hor7NfgJs62k2lHc5u2HfyOODuPCMzPsHL+bIUInzPNCNFFzW2bw6KB5DtzLpACT26kvUgC5ade5yXWathlXbAE5WeNCydvx8WWCl+jI+kxjdHBe6/s85Fo9lfJwJvcYExEH14wZWS1PyCYclk7UK1N3ORz7SdjD+WdI3YEEAS4kM9KaVxRbffya3QLx gitlab-runner@522e7b401c28
    EOF
    chown -R cifiadmin.cifiadmin /home/cifiadmin/.ssh
    chmod 600 /home/cifiadmin/.ssh/authorized_keys
    ls -al /home/cifiadmin/.ssh
    ```    