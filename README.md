######  1.全局安装-生成
```
    //全局安装
    npm install dirtree -g


    /**
    * [dir_path] : (可选)，
    * 不传默认全部 - (.git , .gitignore , node_modules ,dist , build , out , lib 等目录名默认不生产 )
    * 指定的基于项目根路径的目录path (string | string[])
    * -h | -help : 帮助日志
    */ 
    dirtree  [dir_path] 
```
###### 2.项目本地安装-生成1
```

    // 项目本地安装
    npm install dirtree --dev
    
    // 指定目录生成 - 命令后可选择带 [指定的基于项目根路径的目录path] | -h | -help | 不带参数
    npm set prepare-dirtree "node ./node_modules/dirtree/src/dirtree"

    //或者 在package.json 中设置script 命令
    "script":{
        "prepare-dirtree":"node ./node_modules/dirtree/src/dirtree"
    }


    //项目根路径下- 指定目录 | 全部目录生成目录树
    npm run prepare-dirtree  [dir_path]
```

###### 3.项目本地安装-生成2
```
    // 项目本地安装
    npm install dirtree --dev

    //项目根路径下 node执行命令 可选生成方式，指定目录或不传默认全部
    node ./node_modules/dirtree/src/dirtree   [dir_path] | -h/-help

```
