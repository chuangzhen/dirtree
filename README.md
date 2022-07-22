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

###### 4.效果
```
┌─components
| ├─ AuthComponents
| | ├─ AuthButton.tsx # 权限按钮组件
| | ├─ AuthContainer.tsx # 自定义权限按钮并支持二次确认弹窗
| | ├─ AuthLink.tsx # 为表格便捷操作的权限text组件（只有拥有权限才能触发text点击事件）
| | └─ AuthMenuItem.tsx # 权限菜单按钮 
| ├─ Authorized
| | ├─ Authorized.tsx # 权限校验容器组件 
| | ├─ CheckPermissions.tsx # 通用权限检查方法 
| | ├─ PromiseRender.jsx # 异步权限校验组件 
| | ├─ Secured.jsx # 用于判断是否拥有权限访问此 view 权限 
| | └─ renderAuthorize.ts # 更新权限方法 
| ├─ CustomSelectors
| | ├─ TagSelector.tsx # 标签选择器
| | ├─ ThemeSelect.tsx # 主题选择组件
| | └─ index.tsx # 导出ThemeSelect、TagSelector 组件
| ├─ ProTable
| | └─ index.tsx # ProTable 基于ProTable二次封装表格组件 

```