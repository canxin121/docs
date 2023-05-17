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

## 本项目已被融入Spark-GPT，请使用Spark-GPT

## :yum:功能特性:yum:

- 可以使用gpt3.5和claude两种模型，支持自定义预设和本地预设  
- 可以使用neeva ai搜索引擎  
- 有共享的机器人供多人共同使用(仅支持命令来对话，不支持以下特性)  
- 有用户隔离的个人机器人使用,支持下面两个功能  
- > 可以直接回复机器人给你的回答来继续对话，无需命令  
- > 可以使用数字索引来使用建议回复  
- > 可以直接用机器人名称作命令，向指定机器人询问  
- > 可以回复特定字段来直接清除对应机器人的对话历史
- 有完备的等待队列，又支持每次几名用户同时请求  
- 所有分步操作都可以用 取消 或 算了来终止,并且支持错误重输  
- 如果未创建机器人，对话命令将默认创建gpt3.5,而默认预设可以由管理员来切换  
- 机器人的回答会以回复形式发送，支持发送带二维码的图片格式和相应的链接  
- 机器人的给普通用户的时效性回复都会自动撤回，防止刷屏  
- 插件储存数据放置在./data/poe_chat中  
- 支持填写代理地址http,https,socks，及其username,password

## :heart_eyes:功能使用:heart_eyes:

- 以下命令前面全部要加 /

---

### 用户帮助:hourglass:

| 指令 | 需要@ | 范围 | 说明 | 权限 |
|:----:|:----:|:----:|:----:|:----:|
| poehelp / ph / poe帮助 | 否 | 群聊、私聊 | 用户帮助 | 普通用户 |

### 用户隔离的命令:pencil2:


> 每个人互不干扰

> 可以直接回复机器人给你的最新的回答来继续相应机器人的对话，无需命令  

> 可以通过数字索引来使用建议回复，命令+数字 或 只回复数字 都可以  

> 可以通过回复"(清除/清空)(对话/历史)"或"pd","poedump","pdump"来清空历史对话  

| 指令 | 需要@ | 范围 | 说明 | 权限 |
|:----:|:----:|:----:|:----:|:----:|
| poetalk / ptalk / pt + 询问的内容 | 否 | 群聊、私聊 | 进行对话 | 普通用户 |
| poedump / pdump / pd | 否 | 群聊、私聊 | 清空当前机器人历史对话 | 普通用户 |
| poecreate / 创建bot / pc | 否 | 群聊、私聊 | 创建机器人 | 普通用户 |
| poeremove / 删除bot / pr (+ 机器人名字)| 否 | 群聊、私聊 | 删除机器人 | 普通用户 |
| poeswitch / 切换bot / ps (+ 机器人名字)| 否 | 群聊、私聊 | 切换机器人 | 普通用户 |
| '/' + 你的机器人的名称 + 询问的内容 | 否 | 群聊、私聊 | 与指定机器人进行对话 | 普通用户 |
---

### 用户共享的命令:black_nib:

> 所有人都是用的同一个机器人

| 指令 | 需要@ | 范围 | 说明 | 权限 |
|:----:|:----:|:----:|:----:|:----:|
| poeneeva / pneeva / pn | 否 | 群聊、私聊 | 使用 NeevaAI 搜索引擎 | 普通用户 |
| poesharegpt / psharegpt / psg + 要询问的内容| 否 | 群聊、私聊 | 共享 GPT 对话 | 普通用户 |
| poegptdump / poegpt清除 / pgd | 否 | 群聊、私聊 | 清空共享的 GPT 对话历史 | 普通用户 |
| poeshareclaude / pshareclaude / psc + 要询问的内容| 否 | 群聊、私聊 | 共享 Claude 对话 | 普通用户 |
| poeclaudedump / poeclaude清除 / pcd | 否 | 群聊、私聊 | 清空共享的 Claude 对话历史 | 普通用户 |

---

### 管理员命令:flags:

> 以下功能仅限poe管理员使用

| 指令 | 需要@ | 范围 | 说明 | 权限 |
|:----:|:----:|:----:|:----:|:----:|
| poelogin / plogin / pl | 否 | 群聊、私聊 | 登录账号 | poe管理员 |
| poeaddprompt / 添加预设 / pap | 否 | 群聊、私聊 | 添加预设 | poe管理员 |
| poeremoveprompt / 删除预设 / prp | 否 | 群聊、私聊 | 删除预设 | poe管理员 |
| poechangeprompt / 切换自动预设 / pcp | 否 | 群聊、私聊 | 切换自动创建机器人时的默认预设 | poe管理员 |

### 特权白名单命令:tada:

> 以下功能仅限accesslist白名单用户(特权用户)使用

| 指令 | 需要@ | 范围 | 说明 | 权限 |
|:----:|:----:|:----:|:----:|:----:|
| poesharegpt4 \ psharegpt4 \ psg4 + 询问内容\n | 否 | 群聊、私聊 | 使用GPT4对话 | 特权用户 |
| poegpt4dump \ poegpt4清除 \ pg4d | 否 | 群聊、私聊 | 清除GPT4对话历史 | 特权用户 |
| poeshareclaudep \ pshareclaudp \ pscp +询问内容 | 否 | 群聊、私聊 | 使用CLAUDE+对话 | 特权用户 |
| poeclaudepdump \ poeclaudep清除 \ pcpd | 否 | 群聊、私聊 | 清除CLADUE+对话历史 | 特权用户 |

---

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

### 管理员账号(必填):two:

2.poe_superusers，poe插件管理员qq号  

```md
poe_superusers = ["123456","132145"]
```

### 群聊私聊黑白名单:three:

3.黑白名单模式，默认"black"，默认poe_blacklist = []

> black为黑名单模式，禁止名单内的人或群使用
> white为白名单模式，只允许名单内的人或群使用

```md
poe_mode = "white"
poe_whitelist = ["123","456"]
poe_blacklist = ["123","456"]
```

### 特权用户名单:four:

4.特权用户名单，可以使用gpt4和claude+的用户的qq号或者群号

```md
poe_accesslist = ["123","456"]
```

### 自动转图片的阈值:five:

> 如果没有设置poe_picable的值(既没写False也没写True)，则超过设置的poe_limit自动转化为图片，是否需要二维码和链接可以参考下一个配置项的设置

5.达到多少字数自动转图片，默认为350

```md
poe_limit = 350
```

### 图片和链接回复:six:

> 注意如果设置不以图片形式回复(poe_picable = False)，后两个配置项就是无效的  

6.是否以图片形式回复,不填的话，默认值为True

```md
poe_picable = True
```

7.是否在图片上粘上二维码

```md
poe_qrable = False
```

8.是否在图片形式回复后跟上二维码的链接,不填的话，默认为True

```md
poe_urlable = True
```

### 建议回复:seven:

9.是否开启建议回复，不填的话，默认True

```md
poe_suggestable = True
```

### 代理地址:eight:

10.以下只是示例，根据自己实际情况调整；
代理地址如果你的电脑直接就能访问外网，也就是系统代理，请都不填写，不要留空，直接都不填;  
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

## :balloon:更新:balloon:

- 2023/5/2 v1.1.8:  
    1.增加GPT4和CLAUDE+的使用命令  
    2.增加能使用GPT4和CLAUDE+的配置项poe_accesslist,只有list中的qq号和群号可以使用（不填默认poe管理员）  
- 2023/5/1 v1.1.6:  
    1.完善预设管理的逻辑  
- 2023/5/1 v1.1.5:  
    1.修复回复失败后建议回复被清空的bug  
- 2023/4/30 v1.1.4:  
    1.修复配置失效bug  
    2.优化回复逻辑，增加字数限制配置，未设置是否以图片形式回复的情况下，在字数小于指定字数时直接回复，大于时转化为图片回复  
    3.重构一些代码  
- 2023/4/30 v1.1.3:  
    1.切换机器人和删除机器人支持直接命令 + 机器人名称  
    2.增加黑白名单配置，默认黑名单模式，默认无黑名单用户或群  
    3.支持直接使用'/' + 用户自己的机器人名称来询问特定机器人，并支持直接回复来继续对话  
    4.在所有通过回复来继续对话中，支持使用特定字段来清空对话历史（见详细文档）  
- 2023/4/28 v1.1.2:  
    1.修复没有跟随命令发送询问内容时的报错（直接pass掉）  
    2.增加黑名单配置  
- 2023/4/27 v1.1.1:  
    1.支持管理员切换自动创建的预设  
    2.支持在配置中开启和关闭建议回复和图片中二维码，详情看上文 配置  
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
