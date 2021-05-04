# 如何获取所有分支

该仓库有很多的分支，可以通过下面的做法获取所有分支

1. 克隆仓库

```shell
git clone https://github.com/Dengyuxi6/nodejs-study
cd nodejs-study
```

2. 获取所有远程分支并映射到本地

```shell
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
```

3. 查看目前所有的分支

此时，你已经可以看到所有的分支了

```shell
git branch
```

### 切换分支

运行下面的命令即可：

```shell
git checkout 分支名
```