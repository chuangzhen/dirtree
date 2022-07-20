######  1.全局安装-生成
```
    //全局安装

    npm install dirtree -g


    /** [dir_read_type] : [ required ] 目录生成方式 
    *  -s :指定生成目录树的目录 ，没有指定[dir_path]则默认全部
    *  -h | -help : 帮助日志
    *  -all : 生成全部目录树结构(.git , .gitignore , node_modules ,dist , build , out , lib 等目录名默认不生产 )
    */

    // [dir_path] : 指定生成方式为 -s时，需要在后边指定的基于项目根路径的目录path (string | string[])

    dirtree [dir_read_type] [dir_path] 
```
###### 2.项目本地安装-生成1
```

    // 项目本地安装
    npm install dirtree --dev
    
    // 指定目录生成 - 命令后需要带 [指定的基于项目根路径的目录path]
    npm set prepare-dirtree-s "node ./node_modules/dirtree/src/dirtree -s"

    // 指定全部目录参与生成目录树  (.git , .gitignore , node_modules ,dist , build , out , lib 等目录名默认不生产 )
    npm set prepare-dirtree-all "node ./node_modules/dirtree/src/dirtree -all"

    //项目根路径下- 指定目录 | 全部目录生成目录树
    npm run prepare-dirtree-s  [dir_path]  / prepare-dirtree-all 
```

###### 3.项目本地安装-生成2
```
    // 项目本地安装
    npm install dirtree --dev

    //项目根路径下 node执行命令 可选生成方式，指定目录
    node ./node_modules/dirtree/src/dirtree  [dir_read_type] [dir_path]

```
