#### 版本和配置
- 查看git版本 git --version
- git本地配置:
    1. git conifg --global  user.name 提交人姓名
    2. git config -- global  user.email  提交人邮箱
    3. git config list 查看配置信息
    
####  分支管理
- 查看文件状态  --------- git status
  
- 查看分支 ---------  git branch
  
- 创建分支 --------- git branch "分支名称"
  
- 切换分支 ----------- git checkout "分支名称"
  
- 合并分支 ------------- git merage "分支名称"

####  提交文件
-  将文件提交到暂存区 ------ git add
- 将所有文件添加到暂存区 --------git add . 
-  将文件提交到git仓库 -------git  commit -m ‘’
- 查看仓库提交记录 -------- git log 
- 查看文件修改内容 --------git diff 

####  git仓库
- git push 远程仓库地址 分支名称; 将本地仓库推送到远程仓库
- git remote add 远程仓库别名 远程仓库地; 给远程仓库起一个别名
- git push -u 别名 分支名; 记住远程仓库地址、分支
- git clone 远程仓库地址; 克隆远程仓库到本地
- git pull 远程仓库地址,分支名称; 拉取远程仓库最新版本
- git remote rm origin 删除别名



 
