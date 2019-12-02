# depcost
find the cost of adding a npm package to your bundle.

## Todo
- [ ] 使用TS
- [ ] 统计依赖的总包大小
- [ ] 分别统计 devDep 和 Dep 包的大小
- [ ] 可视化展示每个包的大小
- [ ] 可视化展示devDep 和 Dep 每个包的大小
- [ ] 按照包大小可排序
- [ ] 根据那个插件（判断哪些包使用了，没使用的），可使用不同颜色进行标记<i>  --- 扩展功能</i>
- [ ] 带有测试
- [ ] 使用柱状图和饼图等展示图表，柱状图展示不同包的大小（展示会很丑），饼图展示比例，可以了解占比，挺有意思的（展示比较拥挤，但是容易展示） show tip show legend ?? 可配置

## Plan
1. ts如何写npm包
2. 如何统计package.json包的大小
3. 如何写命令
4. 了解判断哪些包使用和没使用的功能实现
5. 如何使用tap进行测试
6. 如何压缩代码

#### 参考
https://github.com/siddharthkp/cost-of-modules/blob/master/src/helpers.js

#### ts 写 npm 包开发指南

1. 创建package文件，`yarn init`
2. 安装必要文件`yarn add -D eslint` `yarn add -D typescript @typescript-eslint/parser` `yarn add -D @typescript-eslint/eslint-plugin`
3. 创建`.eslintrc.js`配置文件
4. 使用合适的集成规则，我使用Airbnb的`yarn add -D tslint-config-airbnb`
5. 编写配置文件

#### argv plan
- [ ] -v | --version
- [ ] -d  (depend)
- [ ] -l |--less (少于10个)
- [ ] -D (devDepend)
- [ ] -s | --sort
- [ ] -c | --chart
- [ ] -h (highlight) 判断哪些包使用，哪些包没有使用


#### 后续计划
是否需要递归分析整个依赖呢，比如某个依赖进行分析等等
添加一个参数，要么本地node_modules分析，要么通过啥分析

生成的图表，是通过生成图表呢，还是通过手绘实现。。。。。