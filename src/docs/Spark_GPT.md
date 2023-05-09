---
title: Spark_GPT
icon: page
order: 1
author: canxin
date: 2023-5-8
comment: false
category:
  - Nonebot
tag:
  - Chatgpt
  - Claude
  - Neeva
  - Newbing
  - Dalle
sticky: true
star: true
footer: canxin
copyright: canxin121版权所属，禁止随意转载
---


<!-- more -->

## :yum:功能特性:yum

- 汇聚众多来源的gpt，支持多平台使用
- 方便而全面的使用功能，便捷的管理员管理项
- 完善的使用逻辑和任务处理逻辑
- 美观而实用的markdown图片渲染回复

## :heart_eyes:功能实用说明:heart_eyes:

### Spark-GPT 聚合帮助说明

- 以下命令前面全部要加 '/'。

#### Poe帮助命令

| 命令 | 描述 |
| --- | --- |
| `/poehelp / ph` | 获取Poe帮助说明。 |

#### Newbing帮助命令

| 命令 | 描述 |
| --- | --- |
| `/binghelp / bh` | 获取Newbing帮助说明。 |

#### GPT_Web帮助命令

| 命令 | 描述 |
| --- | --- |
| `/gwhelp / gwh` | 获取GPT_Web帮助说明。 |

#### 通用命令

- 所有用户均可使用

| 命令 | 描述 |
| --- | --- |
| `/botlist / bl` | 获取你的所有机器人的列表。 |

- 只有spark管理员可以使用

| 命令 | 描述 |
| --- | --- |
| `/添加预设 / ap` | 添加通用预设 |
| `/删除预设 / rp` | 删除通用预设 |

### spark-gpt Poe使用说明

> 共享的机器人供多人共同使用，而用户隔离的机器人每个人都是相互独立的。

> 以下命令前面全部要加 '/' ！！！！！

> 对话问答功能均支持以下特性：

> 可以通过回复机器人的最后一个回答来继续对话，而无需命令。

> 可以回复 "(清除/清空)(对话/历史)" 或 刷新对话, 清除对话历史 或 "pd", "poedump", "pdump" 来清空对话。

> 可以通过建议回复的数字索引来使用建议回复。

#### 以下命令均支持用户隔离

| 命令 | 描述 |
| --- | --- |
| `/ptalk / pt + 你要询问的内容` | 对话功能，如果没创建机器人，对话将自动创建默认机器人。 |
| `/poecreate / pc` | 创建机器人。 |
| `/poeremove / pr (+ 机器人名称)` | 删除指定名称的机器人。 |
| `/poeswitch / ps (+ 机器人名称)` | 切换到指定名称的机器人。 |
| `你的机器人的名字 + 空格 + 你要询问的内容` | 指定机器人对话。 |

#### 以下命令均是多用户共享的

| 命令 | 描述 |
| --- | --- |
| `/psn + 你要搜索的内容` | NeevaAI搜索引擎，返回链接及标题。 |
| `/psg + 你要询问的内容` | 共享的GPT对话。 |
| `/psc + 你要询问的内容` | 共享的CLAUDE对话。 |
| `/pss + 你要询问的内容` | 共享的SAGE对话。 |
| `/psd + 你要询问的内容` | 共享的Dragonfly对话。 |

#### 以下功能仅限特定白名单用户使用，同样是多用户共享的

| 命令 | 描述 |
| --- | --- |
| `/psg4 + 询问内容` | 使用GPT4对话。 |
| `/pscp + 询问内容` | 使用CLAUDE+对话。 |

#### 以下功能仅限poe管理员使用

| 命令 | 描述 |
| --- | --- |
| `/poechangeprompt / 切换自动预设 / pcp` | 切换自动创建的默认预设。 |

### spark-gpt NewBing使用说明

- 机器人对每个人都是相互独立的。

- !!! 以下命令前面全部要加 '/' !!!  

#### 对话命令

- 支持以下特性：可以通过对话 (清除/清空)(对话/历史)或刷新对话来开启另一个新对话  
- 对话一次后，就可以直接回复机器人给你的最后的回复来进行连续对话  
- 可以通过建议回复的数字索引来使用建议回复  

| 命令 | 描述 |
| --- | --- |
| `/bing / b + 内容` | 对话功能|

#### 切换对话模式命令

| 命令 | 描述 |
| --- | --- |
| `/bc / bingchange / bing切换 (+ 数字)` | 切换对话模式，支持以下三种模式：1. 创造力模式；2. 均衡模式；3. 精确模式。 |

#### 画图命令

| 命令 | 描述 |
| --- | --- |
| `/bingdraw / bd / bing绘图(bing画图) + 要画的东西(中文/英文)` | Dall-e画图功能，可以画出指定的中文或英文内容。 |

### spark-gpt GPT_web使用说明

> !!! 以下命令前面全部要加 '/' !!!  

> 问答功能均支持以下特性：可以通过回复机器人的最后一个回答来继续对话，而无需命令；

> 可以回复 "(清除/清空)(对话/历史)"或 "刷新对话"，"清除对话历史"来清空对话；可以通过建议回复的数字索引来使用建议回复。  

#### 对话命令

| 命令 | 描述 |
| --- | --- |
| `/gwtalk / gwt + 你要询问的内容` | 对话功能，如果没创建机器人，对话将自动创建默认机器人。 |


#### 机器人管理命令

| 命令 | 描述 |
| --- | --- |
| `/gwcreate / gwc` | 创建机器人。 |
| `/gwremove / gwr (+ 机器人名称)` | 删除指定名称的机器人。 |
| `/gwswitch / gws (+ 机器人名称)` | 切换到指定名称的机器人。 |
| `/机器人名字 + 空格 + 你要询问的内容` | 指定机器人对话。 |

#### 管理员命令

> 仅限poe管理员使用

| 命令 | 描述 |
| --- | --- |
| `/gwcp / gwchangeprompt` | 切换自动创建的默认预设。 |

## :dizzy_face:安装:dizzy_face:

### step.1:yellow_heart:

#### nb安装  

```md
nb plugin install nonebot-plugin-spark-gpt
```

#### 或者pip安装并添加到pyproject.toml的plugins列表中  

```md
pip install nonebot-plugin-spark-gpt
```

### step.2:blue_heart:

> 用于poe的稳定实现和render的渲染图片

```md
playwright install chromium
```

## :punch:配置:punch:

> （在.env或你是用的.env_*中修改）  

### Spark-GPT通用配置

> 除必填外均可省略不写
> 通用配置可以被其他相应配置覆盖

```md
#spark-gpt 管理员(必填)
spark_superusers = ["123456","789213"]
#spark-gpt 响应模式，默认black黑名单模式，不允许blacklist中用户或群使用
#而white为白名单模式，仅允许whitelist白名单用户或群使用

spark_mode = "black"
spark_blacklist = ["123456","789213"]
spark_whitelist = ["123456","789213"]
#通用输出控制
#是否以图片形式回复，默认None，及根据回答字数限制limit来回复，大于限制回复图片，小于限制直接回复文本
spark_picable = None
#上文字数限制
spark_limit
#以图片回复时，是否附上原文本链接，默认True
spark_urlable = True
#是否开启建议回复，仅对poe和newbing有效,默认True
spark_suggestable
```

### poe配置

> 获取ck时请确保可以创建bot，先创建一个bot试一下

```md
#poe网站cookie(必填)
#获取方式见后文代码块后截图
poe_cookie = "f87HlVW- %3D%3D"

#poe允许使用gpt4和claude+的用户，默认为superuser
poe_accesslist = ["123","456"]

#本地局域网代理端口配置(如果你开启代理后分流好，直接可以访问外网，请不要填写)
#以下仅是示例，请填写你自己相应的配置
poe_server = socks://127.0.0.1:7890
poe_name = canxin
poe_passwd = passwd


#以下配置会覆盖通用配置
poe_superusers = ["123456","132145"]
poe_mode = "white"
poe_whitelist = ["123","456"]
poe_blacklist = ["123","456"]
poe_limit = 350
poe_picable = True
poe_urlable = True
poe_suggestable = True

```

![ck获取](/resource/spark/ck.png)

### Newbing配置

cookie文件(必填)
在`你的nonebot项目目录\data\spark_gpt\newbing_cookie.json`中填写cookie
> cookie获取方法:
> edge登录后打开newbing界面，确保可以使用的情况下，使用edge插件cookie-editor导出cookie为json，然后复制到此文件中

![ck获取](/resource/spark/nbck.png)

```md
#本地局域网代理链接
newbing_proxy = 

#以下配置会覆盖通用配置
newbing_superusers = ["123456","132145"]
newbing_mode = "white"
newbing_whitelist = ["123","456"]
newbing_blacklist = ["123","456"]
newbing_limit = 350
newbing_picable = True
newbing_urlable = True
newbing_suggestable = True

```

### ChatGPT_web配置

session token文件(必填)
在`你的nonebot项目目录\data\spark_gpt\gpt_web_session_token.txt`中填写session token
> session token获取方法:
> 登录后Chatgpt网页版后，F12打开开发者工具，在应用栏下找到cookie，点击后右侧找到__Secure-next-auth.session-token，复制它的值，粘贴到此文件中

![session token获取](/resource/spark/session.png)

```md
#endpoint api地址,默认值能用的情况下不要填写，以下为默认值
gpt_web_api_url = "https://chat.loli.vet/"

#以下配置会覆盖通用配置
gpt_web_superusers = ["123456","132145"]
gpt_web_mode = "white"
gpt_web_whitelist = ["123","456"]
gpt_web_blacklist = ["123","456"]
gpt_web_limit = 350
gpt_web_picable = True
gpt_web_urlable = True

```

## :gift:示例:gift:

| Image 1 | Image 2 |
|:-------:|:-------:|
| ![1](/resource/spark/demo (1).png) | ![2](/resource/spark/demo (2).png) |
| ![1](/resource/spark/demo (3).png) | ![2](/resource/spark/demo (4).png) |
| ![1](/resource/spark/demo (5).png) ||

## :balloon:更新:balloon:
