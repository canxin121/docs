---
title: nonebot-poe-chat
icon: page
order: 1
author: canxin
date: 2023-4-26
comment: false
category:
  - Nonebot
tag:
  - Chatgpt
  - Claude
  - Neeva
sticky: true
star: true
footer: canxin
copyright: canxin121版权所属，禁止随意转载
---


<!-- more -->

## :yum:功能特性:yum:

- 可以使用gpt3.5和claude两种模型，支持自定义预设和本地预设  
- 可以使用neeva ai搜索引擎  
- 有共享的机器人供多人共同使用
- 有完备的等待队列，又支持每次几名用户同时请求  
- 注意所有功能都是用户独立的，每个用户只能操作自己的内容  
- 所有分步操作都可以用 取消 或 算了来终止,并且支持错误重输  
- 如果未创建机器人，对话命令将默认创建gpt3.5  
- 可以直接回复机器人给你的回答来继续对话，无需命令  
- 可以使用数字索引来使用建议回复  
- 机器人的回答会以回复形式发送，支持发送带二维码的图片格式和相应的链接  
- 机器人的时效性回复都会自动撤回，防止刷屏  
- 插件储存数据放置在./data/poe_chat中  
- 支持填写代理地址http,https,socks，及其username,password

## :heart_eyes:功能使用:heart_eyes:

- 以下命令前面全部要加 /

---

### 用户隔离的命令:pencil2:

- 以下命令均支持用户隔离  :open_hands:
- 对话:poetalk / ptalk / pt + 你要询问的内容  
- 清空历史对话:poedump / pdump / pd  
- 创建机器人:poecreate / 创建bot / pc  
- 删除机器人:poeremove / 删除bot / pr  
- 切换机器人:poeswitch / 切换bot / ps  

---

### 用户共享的命令:black_nib:

- 以下命令均是多用户共享的  :open_hands:
- 搜索引擎返回的是链接及标题  
- NeevaAI搜索引擎:poeneeva / pneeva / pn  
- 共享的gpt对话:poesharegpt / psharegpt / psg + 对话的内容
- 清空共享的gpt的对话历史:poegptdump / poegpt清除 / pgd  
- 共享的claude对话:poeshareclaude / pshareclaude / psc + 对话的内容
- 清空共享的claude的对话历史:poeclaudedump / poeclaude清除 / pcd  

---

- 以下功能仅限poe管理员使用  :point_up:
- 登录:poelogin / plogin / pl  
- 添加预设:poeaddprompt / 添加预设 / pap  
- 删除预设:poeremoveprompt / 删除预设 / prp"  

## :dizzy_face:安装:dizzy_face:

### step.1:yellow_heart:

#### nb安装  

```md
nb plugin install nonebot-poe-chat
```

#### 或者pip安装并添加到pyproject.toml的plugins列表中  

```md
pip install nonebot-poe-chat
```

### step.2:blue_heart:

```md
playwright install chromium
```

### step.3:purple_heart:

打开poe官网（poe.com），注册账号登录并填写profile（点击create bot可能会弹出让你填写），提取cookie（见后文截图）  

## :punch:配置:punch:

> （在.env或你是用的.env_*中修改）  

### cookie:one:

1.poe_cookie,poe网站的ck，见后文截图，也可以不填，而使用/pl命令登陆（pl登录暂时不稳定，可以自行尝试一下，不行就手动填cookie）  

```md
poe_cookie = "f87HlVW- %3D%3D"
```

![ck获取](https://github.com/canxin121/docs/blob/main/src/docs/resource/ck.png)

### 管理员账号:two:

2.poe_superusers，poe插件管理员qq号  

```md
poe_superusers = ["123456","132145"]
```

### 图片和链接回复:three:

3.是否以图片形式回复,不填的话，默认值为True

```md
poe_picable = True
```

4.是否在图片形式回复后跟上二维码的链接,不填的话，默认为True

```md
poe_urlable = True
```

5.以下只是示例，根据自己实际情况调整；
代理地址如果你的电脑直接就能访问外网，也就是系统代理，请不填写，不要留空，直接不填;  
如果你只开启了局域网代理，则填写相应信息;

- 首先是代理地址

```md
poe_server = socks://127.0.0.1:7890
```

如果代理没有验证用的账号密码，不要写下面这两项

- 代理name  

```md
poe_name = canxin
```

- 代理passwd

```md
poe_passwd = passwd
```

## :gift:示例:gift:


| Image 1 | Image 2 |
|:-------:|:-------:|
| ![1](https://github.com/canxin121/docs/blob/main/src/docs/resource/demo(1).png) | ![2](https://github.com/canxin121/docs/blob/main/src/docs/resource/demo(2).png) |
| Image 3 | Image 4 |
| ![3](https://github.com/canxin121/docs/blob/main/src/docs/resource/demo(3).png) | ![4](https://github.com/canxin121/docs/blob/main/src/docs/resource/demo(4).png) |
| Image 5 | Image 6 |
| ![5](https://github.com/canxin121/docs/blob/main/src/docs/resource/demo(5).png) | ![6](https://github.com/canxin121/docs/blob/main/src/docs/resource/demo(6).png) |
| Image 7 | Image 8 |
| ![7](https://github.com/canxin121/docs/blob/main/src/docs/resource/demo(7).png) | ![8](https://github.com/canxin121/docs/blob/main/src/docs/resource/demo(8).png) |

## :balloon:更新:balloon:

- 2023/4/26 v1.0.9:  
    1.修复cookie致命bug  
    2./pl登录可能暂时不好用了，因为poe在检测机器人登录，请自行填写ck  
    3.新增neevaAi搜索功能  
    4.新增共享的gpt和claude聊天  
    5.修复自定义预设中间有空格造成错误的bug  
    6.补上了创建bot的代码的lock  
    7.恢复正常的suggest，并修复了一个由suggest引起的死循环bug  
- 2023/4/26 v1.0.8:  
    1.单例模式重构，只创建一个context，稍微减轻性能消耗  
    2.暂时修复poe官网suggest消失造成死循环的bug  
