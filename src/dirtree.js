// #!/usr/bin/env node



const fs = require('fs')
const path = require('path')
let args = process.argv.splice(2)
let target_dir = args?.[0] || './'
//过滤掉的文件和目录名
let exclude = ['node_modules', 'assets', 'public', 'dist', 'build', 'out', 'lib', '.git', '.gitignore', '.jpg', '.png', '.svg', '.jpeg']

//目录、文件信息树状数组
let dirTreeInfoArr = [
    {
        name: target_dir,
        level: 1,
        type: 'directory', //'file' 'directory'
        anno: '',
        children: []
    }
]


let finalDirInfoContent = '```bash \n'
let dirTreeMdPath = './dirTree.md'

if (!isDirectory(target_dir)) {
    console.log('Error: target path must be a directory path')
    process.exit()
}

if (['-h', '-help'].includes(target_dir.toLowerCase())) {
    console.log('Info : read README.md to get the way how to use dirtree.')
    console.log('Info : Use the comments // ... and /** ... */ at the top of the file to explain what the file does')
    process.exit()
}

// console.log("🚀 args", JSON.stringify(args))
//获取指定目录下的树状结构数组
function getDirInfo(dir, dirTreeArr, level) {
    let dirInfo = fs.readdirSync(dir)
    let includeDirInfo = dirInfo.filter(i => !isExcludeName(i))
    includeDirInfo.forEach((itemPath) => {
        //一个目录的树状结构对象
        let treeObj = {
            name: itemPath,
            level: level,
            type: 'file', //'file' 'directory'
            anno: '',
            children: []
        }
        let fullPath = path.join(dir, itemPath)
        if (isFile(fullPath)) {
            const fileInfo = fs.readFileSync(fullPath, 'utf-8')
            const fpstr = fileInfo.split('\n')[0]
            treeObj.anno = fpstr.match(/^\/((\*|\/)*.+(\**\/)?)/gi)?.[0]?.length > 0 ? fpstr.replace(/(^\/(\**|\/*)\s*|\s*(\*\/)?)/gi, '') : ""
            delete treeObj.children
        } else if (isDirectory(fullPath)) {
            treeObj.type = 'directory'
            getDirInfo(fullPath, treeObj.children, treeObj.level + 1)
        }
        dirTreeArr.push(treeObj)
    })
}

//递归目录数组树状结构，生成对应的 字符串
function logDirInfoStr(dirInfo) {
    //┌─ |  ├─ └─
    dirInfo.forEach((item, idx) => {
        if (item.level === 1 && idx === 0) {
            finalDirInfoContent += '\n┌─ ' + item.name
        }
        else if (idx === dirInfo.length - 1) {
            finalDirInfoContent += '\n' + getDupStr('|  ', item.level) + '└─ ' + item.name + getAnno(item.anno)
        } else {
            console.log(item.level, getDupStr('|  ', item.level));
            finalDirInfoContent += '\n' + getDupStr('|  ', item.level) + '├─ ' + item.name + getAnno(item.anno)
        }
        if (item.type === 'directory' && item?.children?.length > 0) {
            logDirInfoStr(item.children)
        }
    })
}
//获取不同层级重复的树状字符串
function getDupStr(str, number = 1) {
    let arr = []
    while (number > 0) {
        arr.push('')
        number--
    }
    return arr.reduce((pre) => pre + str, '')
}
function getAnno(anno) {
    return anno?.length > 0 ? `  # ${anno}` : ""
}
function isFile(path) {
    const pathStat = fs.statSync(path)
    return pathStat.isFile()
}
function isDirectory(path) {
    const pathStat = fs.statSync(path)
    return pathStat.isDirectory()
}
function isExcludeName(name) {
    return exclude.some(i => !!name.match(i))
}
function writeTextToFile(path, content) {
    content += '\n```'
    fs.writeFileSync(path, `${content}`)
}

getDirInfo(target_dir, dirTreeInfoArr[0].children, 2)
logDirInfoStr(dirTreeInfoArr)
writeTextToFile(dirTreeMdPath, finalDirInfoContent)

// console.log("🚀 ~ file: dirtree.js ~ line 76 ~ dirTreeInfoArr", JSON.stringify(dirTreeInfoArr, null, 4))