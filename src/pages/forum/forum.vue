<template>
<div id="forum">
    <div class="top-nav">
        <div class="content">
            <div class="msg-left" style="">
                <Button  type="success" :size="buttonSize" @click="health_center">健康中心</Button>
                <!--<a :href=" '/#/' " style="color:#fff">健康中心</a>-->
                <span style="color:#c1cad1">论坛</span>
            </div>
            <div class="msg-right" style="display: flex;flex-direction: row;margin-right: -100px;">
                <div class="nav-other" style="">
                    <Tabs value="name1" @on-click="" :class="">
                        <TabPane :label="label_1" name="name1"></TabPane>
                        <TabPane :label="label_2" name="name2"></TabPane>
                        <TabPane :label="label_3" name="name3"></TabPane>
                        <TabPane :label="label_4" name="name4"></TabPane>
                        <TabPane :label="label_5" name="name5"></TabPane>
                        <TabPane :label="label_6" name="name6"></TabPane>
                        <TabPane :label="label_7" name="name7"></TabPane>
                    </Tabs>
                </div>
                <div class="forum-login" style="display:none;">
                    <Button size="small" @click="login">登录</Button>
                    <Button size="small" @click="register">注册</Button>
                </div>
                <div class="forum-login">
                    <span style="color:#fff">欢迎你,</span> <a :href=" '/#/' " style="cursor:pointer">莉莎</a>
                    <a class="exit" :href=" '/#/' " style="">【退出】</a>
                </div>
            </div>
        </div>
    </div>

    <div class="search">
        <div class="bg">
            <div style="width: 60%;margin:0px auto;text-align: center;padding: 55px 0;">
                <h3>
                    <font>有一个问题？</font>
                </h3>
                <p style="margin-top:15px;color:#fff;font-style:italic">如果您有任何疑问，可以在下面询问或输入您要找的内容！</p>
                <Input style="margin-top: 20px;width: 70%;" search placeholder="Enter something..." />
            </div>

        </div>
    </div>

    <div class="detail" style="width: 100%;">
        <div style="margin-top: 20px;width: 80%;margin: 0px auto;display:flex;flex-direction:row;">
            <div id="nav" class="detail-left" style="clear:both;width: 10%;">
                <Menu :theme="theme3" active-name="1">
                    <MenuItem name="1"><Icon type="md-document" />推荐</MenuItem>
                    <MenuItem name="2"><Icon type="ios-camera" />关注</MenuItem>
                    <MenuItem name="3"><Icon type="md-paper" />文章</MenuItem>
                    <MenuItem name="4"><Icon type="md-photos" />图片</MenuItem>
                    <MenuItem name="5"><Icon type="md-heart" />生活</MenuItem>
                    <MenuItem name="6"><Icon type="md-pricetag" />主题</MenuItem>
                    <MenuItem name="7"><Icon type="md-leaf" />测试</MenuItem>
                    <MenuItem name="8"><Icon type="md-contacts" />咨询</MenuItem>
                    <MenuItem name="9"><Icon type="md-code-working" />其他</MenuItem>
                </Menu>
            </div>
            <div id="center" classs="detail-center" style="width:61%;background-color: #fff;margin-left: 1%;">
                <ul style="padding: 15px;background-color: rgb(255, 255, 255);box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;">
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="listing-main">
                            <div class="title">
                                <Icon type="ios-paper" />
                                <a href="" style="color:#3b4348 ;cursor: pointer;font-weight: bold;">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">将WordPress与您的网站集成</font>
                                    </font>
                                </a>
                                <div class="list-author" style="margin-top: 10px;padding: 4px 3px 4px 0px;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;margin-bottom: 15px;font-size: 12px;">
                        <span class="list">
                            <Icon type="ios-calendar" />2019年2月13日
                        </span>
                        <span class="list">
                            <Icon type="ios-contact" />莉莎
                        </span>
                        <span class="list">
                            <Icon type="ios-chatboxes" />13<span>评论</span>
                        </span>
                                </div>
                            </div>
                            <p class="cont" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                                我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事，从不停顿，永无止境。
                                然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="Introduction" class="detail-right" style="width:27%;margin-left: 1%;">
                <div class="support" style="">
                    <h3 style="font-weight: 600;font-size: 20px;">支持</h3>
                    <p style="font-size: 12px;line-height: 22px;color: #6f7579;">需要更多支持？如果您没有找到答案，请联系我们获取进一步的帮助。</p>
                </div>
                <div class="part recommended-today" style="">
                    <div>
                        <span class="line"></span>
                        <h3 style="font-weight: 600;font-size: 20px;">今日推荐</h3>
                        <ul style="margin-top: 20px;">
                            <li style="margin-bottom: 15px;">
                                <img style="width: 64px;height: 48px;border-radius: 5px;" src="./../../images/forum/man.png" />
                                <div style="float:right;width: 75%">
                                    <a style="display: block;font-size: 14px;color: #3d3d3d;max-width: 200px;overflow: hidden;cursor: pointer;font-weight: bold;">关注亚健康问题，巴拉看一下这是什么鬼？</a>
                                </div>
                            </li>
                            <li style="margin-bottom: 15px;">
                                <img style="width: 64px;height: 48px;border-radius: 5px;" src="./../../images/forum/man.png" />
                                <div style="float:right;width: 75%">
                                    <a style="display: block;font-size: 14px;color: #3d3d3d;max-width: 200px;overflow: hidden;cursor: pointer;font-weight: bold;">关注亚健康问题，巴拉看一下这是什么鬼？</a>
                                </div>
                            </li>
                            <li style="margin-bottom: 15px;">
                                <img style="width: 64px;height: 48px;border-radius: 5px;" src="./../../images/forum/man.png" />
                                <div style="float:right;width: 75%">
                                    <a style="display: block;font-size: 14px;color: #3d3d3d;max-width: 200px;overflow: hidden;cursor: pointer;font-weight: bold;">关注亚健康问题，巴拉看一下这是什么鬼？</a>
                                </div>
                            </li>
                            <li style="margin-bottom: 15px;">
                                <img style="width: 64px;height: 48px;border-radius: 5px;" src="./../../images/forum/man.png" />
                                <div style="float:right;width: 75%">
                                    <a style="display: block;font-size: 14px;color: #3d3d3d;max-width: 200px;overflow: hidden;cursor: pointer;font-weight: bold;">关注亚健康问题，巴拉看一下这是什么鬼？</a>
                                </div>
                            </li>
                            <li style="margin-bottom: 15px;">
                                <img style="width: 64px;height: 48px;border-radius: 5px;" src="./../../images/forum/man.png" />
                                <div style="float:right;width: 75%">
                                    <a style="display: block;font-size: 14px;color: #3d3d3d;max-width: 200px;overflow: hidden;cursor: pointer;font-weight: bold;">关注亚健康问题，巴拉看一下这是什么鬼？</a>
                                </div>
                            </li>
                        </ul>
                        <!--<hr style="border-top: 1px solid rgb(242, 242, 242)">-->
                    </div>
                </div>
                <div class="part weather-forecast">
                    <span class="line"></span>
                    <h3 style="font-weight: 600;font-size: 20px;">天气预报</h3>
                    <div>
                        <div class="address">
                            <Icon type="ios-pin" />
                            <span>成都</span>
                            <em style="padding: 0 36px 0 8px;color: #999999;font-size: 12px;">[切换]</em>
                            <div style="float:right;color: #999999;font-size: 12px;line-height: 24px;">12.06<span>更新</span></div>
                        </div>
                        <div class="temperature" style="display: flex;flex-direction:row;">
                            <div style="color: #3388ff;padding-bottom: 20px;position: relative;left: 24px;">
                                <span style="font-size: 78px;">11</span><em style="font-size: 30px;position: absolute;top: 21px;left: 70px;">℃</em>
                                <p class="p2" style="display: block;width: 130px;height: 20px;background: #8ccd26; border-radius: 10px;text-align: center;line-height: 20px;color: #fff;font-size: 12px;">72 良 </p>
                            </div>
                            <div style="position: relative;right: -30px;">
                                <p style="text-align: center;font-size: 24px;color: #333;padding-top: 20px;">多云</p>
                                <p style="font-size: 12px;color: #333;padding-left: 19px;;">
                                    <Icon type="ios-nuclear-outline" />西风 1级</p>
                                <p style="font-size: 12px;color: #333;padding-left: 19px;">
                                    <Icon type="ios-water-outline" />相对湿度 65%</p>
                            </div>
                        </div>
                        <hr style="border-top: 1px solid rgb(242, 242, 242)">
                        <div>
                          <ul class="prediction-weather" style="display: flex;flex-direction:row;">
                              <li>
                                 <p>周三</p>
                                  <Icon type="ios-cloud" />
                                  <p>12℃</p>
                              </li>
                              <li>
                                  <p>周四</p>
                                  <Icon type="ios-partly-sunny" />
                                  <p>12℃</p>
                              </li>
                              <li>
                                  <p>周五</p>
                                  <Icon type="ios-rainy" />
                                  <p>12℃</p>
                              </li>
                              <li>
                                  <p>周六</p>
                                  <Icon type="ios-thunderstorm" />
                                  <p>12℃</p>
                              </li>
                              <li>
                                  <p>周天</p>
                                  <Icon type="ios-sunny" />
                                  <p>12℃</p>
                              </li>
                          </ul>
                        </div>
                    </div>
                </div>

                <div class="part ">
                    <span class="line"></span>
                    <h3 style="font-weight: 600;font-size: 20px;">健康小贴士</h3>
                    <div style="width:100%;margin:0px auto;text-align: center">
                        <Carousel autoplay v-model="value" :dots="dots">
                            <CarouselItem>
                                <div class="demo-carousel">
                                    <div style="font-size: 13px;max-height: 100px;width: 200px;margin: 0px auto;">
                                        枸杞配水水水水水水水水啊啊啊啊啊啊啊啊啊
                                        啊的顶顶顶顶顶什么什么的有助于眼镜的哈
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div class="demo-carousel">
                                    <div style="font-size: 13px;max-height: 100px;width: 200px;margin: 0px auto;">
                                        aaaaaaaaaaaaaa
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div class="demo-carousel">
                                    <div style="font-size: 13px;max-height: 100px;width: 200px;margin: 0px auto;">
                                        dddddddddddddddddddddddddd
                                    </div>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>

                <div class="part contant-us">
                    <span class="line"></span>
                    <h3 style="font-weight: 600;font-size: 20px;">联系我们</h3>
                    <div style="display: flex;flex-direction: row;padding: 12px;">
                        <div style="margin-left: 5px;">
                            <Icon type="md-mail" />
                            <span style="margin-left: 0px;font-size: 12px;">lisa.wow@outlook.com</span>
                        </div>
                        <div style="margin-left: 15px;">
                            <Icon type="ios-call" />
                            <span style="margin-left: 0px;font-size: 12px;">028-87654321</span>
                        </div>
                    </div>
                    <p style="text-align: center;font-size: 13px;">工作时间：8:30 - 22:00</p>
                </div>

            </div>
        </div>

    </div>

    <!--<div class="footer" style="margin-bottom:-10px;">-->
        <!--<div style="width:100%;min-height:50px;padding: 15px 35px 10px;background-color: #353c41;">-->
            <!--<div style="float:left;width: 570px;margin-left: 15%;">-->
                <!--<p>-->
                    <!--<font>-->
                        <!--版权所有©2019。保留所有权利KnowledgeBase.Collect来自毕业设计-->
                    <!--</font>-->
                <!--</p>-->
            <!--</div>-->
            <!--<div style="float: right;margin-right: 18%;">-->
                <!--<ul class="contant-logo">-->
                    <!--<li><Icon type="logo-facebook" /></li>-->
                    <!--<li><Icon type="logo-twitter" /></li>-->
                    <!--<li><Icon type="ios-wifi" /></li>-->
                    <!--<li><Icon type="logo-github" /></li>-->
                    <!--<li><Icon type="logo-apple" /></li>-->
                    <!--<li><Icon type="logo-chrome" /></li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->


    <Modal v-model="modal_bmi" width="650" title="免费计算你的身体质量指数 (BMI)">
        <div>
            <div id="bmi" style="display: none">
                <div style="width: 100%;height:35px;background-color: #ffa;border:1px dotted #ddd;font-size: 15px;color: black;">
                    <div style="line-height: 35px;margin-left: 15px;">
                        <Icon type="md-arrow-round-forward" />
                        <span>您的BMI值:</span><em style="color: red">{{  this.bmi_parameter }}</em>,
                        <span>身体状态：</span><em style="color: red">{{  this.bmi_value }}</em>
                        <!--<Poptip trigger="hover" >-->
                        <!--<Button style="color: red;cursor: pointer;background-color: rgb(255, 255, 170);border: none;height: 25px;margin-left: -10px;margin-top: -10px;">偏瘦</Button>-->
                        <!--</Poptip>-->

                    </div>
                </div>
            </div>

            <div style="padding: 10px;display: flex">
                <div style="margin: 14px auto;">
                    <div>
                        <span>度量单位：</span>
                        <RadioGroup v-model="measure" >
                            <Radio label="公制">

                            </Radio>
                            <Radio label="英制">

                            </Radio>
                        </RadioGroup>
                    </div>
                    <div style="margin-top: 5px;">
                        <span>我的身高：</span>
                        <Input v-model="height" @on-blur="input_check('height')" placeholder="输入身高" style="width: 200px" />
                        <!--<input type="number" min="0"/>-->
                        单位:<span> {{ (this.measure === '公制') ? '厘米 cm' : '英寸 in'}} </span>
                        <p style="color:red;margin-left: 63px;">{{ this.error_msg1 }}</p>
                    </div>
                    <div style="margin-top: 10px;">
                        <span>我的体重：</span>
                        <Input v-model="weight" @on-blur="input_check('weight')" placeholder="输入体重" style="width: 200px" />
                        <!--<input type="number" min="0"/>-->
                        单位:<span> {{ (this.measure === '公制') ? '千克 kg' : '磅 lb'}} </span>
                        <!--<input type="number" min="0"/>-->
                        <!--<Input v-model="weight" @on-blur="input_check('weight')"placeholder="输入体重" style="width: 200px" />-->
                        <!--单位:<span> {{ (this.measure === '公制') ? '千克 kg' : '啊磅 lb'}} </span>-->
                        <p style="color:red;margin-left: 63px;">{{ this.error_msg2 }}</p>
                    </div>
                </div>

                <div style="width: 210px;margin-left: 20px;">
                    <div>
                        <p style="font-size: 15px;color:black;font-weight: bold">BMI 中国标准</p>
                        <div>
                            <Table :row-class-name="rowClassName" :columns="columns" :data="data"></Table>
                        </div>
                    </div>
                </div>
            </div>




        </div>
        <div slot="footer">
            <Button type="primary" size="small" @click="bmi_ok">确认</Button>
            <Button size="small"  @click="bmi_cancel">取消</Button>
        </div>
    </Modal>


    <Modal  v-model="login_modal" width="500px" :footer-hide='footer_hide'>
        <loginpage></loginpage>
    </Modal>



</div>
</template>

<script>

    import {chinArk_form} from './../../../config/Utils'
    import loginpage from './../login.vue'

    export default {
        name: 'forum',
        data() {
            return {
                weight:'',  //体重
                height:'',  //身高
                login_modal:false,
                modal_loading:false,
                footer_hide:true,
                error_msg1:'',
                error_msg2:'',
                bmi_value:'',      //bmi的值
                bmi_parameter:'',   //bmi的参数
                unit_1: '厘米 cm',
                unit_2: '千克 kg',
                measure: '公制',
                modal_bmi:false,
                value:0,
                scrollTop:0,
                dots:'none',
                theme3: 'light',
                buttonSize:'small',
                label_1:(h) => {return h('a',{domProps:{href:'#home'},},'首页')},
                label_2:(h) => {return h('a',{domProps:{href:'#part-2'},},'下载')},
                label_3:(h) => {return h('a',{domProps:{href:'#part-3'},},'问答')},
                label_4:(h) => {return h('a',{domProps:{href:'#part-4'},},'商城')},
                label_5:(h) => {return h('a',{domProps:{href:'#part-5'},},'活动')},
                label_6:(h) => {return h('a',{domProps:{href:'#part-6'},},'招聘')},
                label_7:(h) => {return h('a',{domProps:{href:'#part-7'},},'学院')},
                columns:[
                    {
                        title: '分类',
                        key: 'name'
                    },
                    {
                        title: 'BMI范围',
                        key: 'value'
                    },
                ],
                data:[
                {
                    name: '偏瘦',
                    value: '<= 18.4',
                },
                {
                    name: '正常',
                    value: '18.5 ~ 23.9',
                },
                {
                    name: '过重',
                    value: '24.0 ~ 27.9',
                },
                {
                    name: '肥胖',
                    value: '>= 28.0',
                }
            ],

        }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
            this.info();
        },
        components: {loginpage},
        created() {
        },
        methods: {
            info (nodesc) {
                this.$Notice.info({
                    title: '即刻测试你的BMI指数',
//                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. ',
                    duration: 0,
                        render: h => {
                            return h('div',{

                            }, [
//                                h('input',{
//                                    style:{
//                                        marginRight:'5px'
//                                    }
//                                }),
                                h('Button',{
                                    style: {
                                        backgroundColor: '#2d8cf0',
                                        color:'#fff'
                                    },
                                    attrs: {
                                        disabled: (this.modal_bmi == false) ? false : true,
                                    },
                                    on: {
                                        click: () => {this.bmi()}
                                    }
//                                    domProps: {
//                                        title:'确认',
//                                    }
                                },'进入')])
                        }
                });
            },

            bmi(){
//                alert('测试BMI')
                document.getElementById('bmi').style.display = 'none'
                this.modal_bmi = true;
            },

            health_center(){
                this.$router.push({name: 'index', params: {}})
            },

            handleScroll () {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//                console.log(this.scrollTop)
//                console.log(document.getElementById("nav").offsetHeight)
                if( parseInt(this.scrollTop) > 396 ){
                    document.getElementById("nav").style.position = 'fixed';
                    document.getElementById("nav").style.bottom = '0px';
                    document.getElementById("nav").style.top = '0px';
                    document.getElementById("nav").style.width = '8%';
                    document.getElementById("center").style.marginLeft = '11%';
                }else{
                    document.getElementById("nav").style.position = '';
                    document.getElementById("nav").style.bottom = '';
                    document.getElementById("nav").style.width = '10%';
                    document.getElementById("center").style.marginLeft = '1%';
                    document.getElementById("nav").style.top = '';
                }

                if( parseInt(this.scrollTop) > 1179 ){
                    document.getElementById("Introduction").style.position = 'fixed';
                    document.getElementById("Introduction").style.bottom = '0px';
                    document.getElementById("Introduction").style.width = '21%';
                    document.getElementById("Introduction").style.right = '10.5%';
                }else{
                    document.getElementById("Introduction").style.position = '';
                    document.getElementById("Introduction").style.bottom = '';
                    document.getElementById("Introduction").style.width = '27%';
                    document.getElementById("Introduction").style.right = '';
                    document.getElementById("Introduction").style.marginLeft = '1%';
                }
            },

            bmi_ok(){
                this.input_check('height')
                this.input_check('weight')
                var bmi = 0;
                if(this.error_msg1 == '' && this.error_msg2 == ''){
                    var height = this.height
                    var weight = this.weight;
                    if(this.measure == '公制'){
//                        体重（kg）÷身高^2（m）
                        height = (height / 100).toFixed(2);
                        height = height * height;
//                        console.log(this.bmi_parameter)
//                        console.log(this.bmi_value)
                    }else if(this.measure == '英制'){
//                        console.log(weight)
                        weight = (weight * 0.4535924).toFixed(2);
//                        console.log(weight)
                        height = (height * 0.0254).toFixed(2)
                        height = height * height;
                    }
                    bmi = (weight / height).toFixed(1)
                    this.bmi_parameter = bmi
                    if(bmi < 18.4 || bmi == 18.4){
                        this.bmi_value = "偏瘦"
                    }else if( 18.5 < bmi && bmi < 23.9){
//                        18.5 ~ 23.9
                        this.bmi_value = "正常"
                    }
                    else if( 24.0 < bmi && bmi < 27.9){
//                        24.0 ~ 27.9
                        this.bmi_value = "过重"
                    }else if( bmi > 28.0 || bmi == 28.0){
                        this.bmi_value = "肥胖"
                    }
                    document.getElementById('bmi').style.display = 'block'
                }

            },
            bmi_cancel(){
                this.modal_bmi = false;
            },
            input_check(value){
                if(value == 'height'){
                    var error_msg = chinArk_form('num', this.height);
                    this.error_msg1 = error_msg;
                }
                else if(value == 'weight'){
                    var error_msg = chinArk_form('num', this.weight);
                    this.error_msg2 = error_msg;
                }
            },

            rowClassName(row, index){
                if (index === 0) {
                    return 'table-bmi-thin';
                }else if(index === 1){
                    return 'table-bmi-normal';
                }else if(index === 2){
                    return 'table-bmi-weight';
                }else if(index === 3){
                    return 'table-bmi-fat';
                }
            },

            login(){
                this.login_modal = true;
            },

            login_cancel(){
                this.login_modal = false;
            },

            login_ok(){
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                this.login_modal = false;
                this.$Message.success('登录成功！');
            }, 2000);
            },
            register(){}


        },
        beforeDestroy:function(){
//            console.log('lisa')
            window.removeEventListener('scroll', this.handleScroll)
            this.$Notice.destroy()
        },


    }

</script>

<style type="text/css">
    #forum .top-nav{
     background-color: #3b4348;
     width: 100%;
     height: 50px;
 }

    #forum .top-nav .content{
     width:70%;
     padding:10px;
     text-align: center;
     margin:0px auto;
 }

    #forum .msg-right{
        float: right;
        margin-right: 0px;
        margin-top: -10px;
        height: 50px;
    }
    #forum .msg-left{
        float:left;
        width:15%;
        line-height: 40px;
    }

    .msg-left span{
        /*color: #818a90;*/
        font-size: 12px;
        margin-left: 7px;
    }

    #forum .msg-right a{
        font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 13px;
        color: #c1cad1 !important;
    }

    #forum .ivu-tabs-tab-focused a {
        color: #fff !important;
    }
    #forum .ivu-tabs-ink-bar{
        background-color: transparent;
    }

    #forum .search .bg{
        background: #353b65 url('./../../images/forum/main-bg.jpg') center top no-repeat;
        background-size: 100%;
        min-height: 279px;
        height: auto !important;
    }

    #forum .detail{
        width: 80%;
        margin: 15px auto;
    }

    #forum .ivu-menu-light{
        width: 100% !important;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04);
    }

    #forum .ivu-icon-ios-paper{
        font-size:28px;
    }

    #forum .list{
        display: inline-block;
        /*padding-left: 22px;*/
        /*margin-right: 15px;*/
        line-height: 22px;
        color: #6f7579;
    }

    #forum .ivu-icon-ios-calendar, #forum .ivu-icon-ios-contact, #forum .ivu-icon-ios-chatboxes{
        margin-right:5px;
        font-size: 16px;
    }

    #forum .cont{
        color: #6f7579;
        font-size:13px;
        line-height: 25px;
    }

    #forum .support{
        border: 1px solid #e9e6c4;
        padding: 10px 100px 10px 20px;
        background: #fefbdc url('./../../images/forum/support.png') no-repeat 95% 20px;
        margin-bottom: 20px;
        height:135px;
    }

    #forum .line{
        display: block;
        float: left;
        width: 3px;
        height: 20px;
        background: #cf2730;
        overflow: hidden;
        margin: 0 5px 0 0;
    }

    #forum .part{
        padding:15px;
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
        margin-bottom: 20px;
    }

    #forum .ivu-icon-ios-pin{
        font-size: 20px;
    }

    #forum a:hover{
        color: #2d8cf0 !important;
    }

    #forum .footer font{
        font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 13px;
        line-height: 22px;
        color: #6f7579;
    }

    #forum .contant-logo > li{
        float: left;
        margin-left: 8px;
    }

    #forum .ivu-icon-logo-facebook, #forum .ivu-icon-logo-twitter, #forum .ivu-icon-ios-wifi, #forum .ivu-icon-logo-github,
    #forum .ivu-icon-logo-apple, #forum .ivu-icon-logo-chrome{
        font-size: 28px;
        color:#8f98a0;
        cursor: pointer;
    }

    #forum .ivu-icon-logo-facebook:hover, #forum .ivu-icon-logo-twitter:hover, #forum .ivu-icon-ios-wifi:hover, #forum .ivu-icon-logo-github:hover,
    #forum .ivu-icon-logo-apple:hover, #forum .ivu-icon-logo-chrome:hover{
        color:#fff;
    }

    #forum .search .bg h3{
        font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: bold;
        font-size: 36px;
        color: #fff;
        text-align: center;
    }

    #forum .prediction-weather > li{
        width: 20%;
        text-align: center;
        padding: 22px 0 0 0;
    }

    #forum .prediction-weather > p{
        color: #333;
        font-size: 12px;
        margin-bottom: 0px;
    }

    #forum .ivu-icon-ios-cloud{
        font-size: 30px;
        color:#86bcf5;
    }

    #forum .ivu-icon-ios-partly-sunny{
        font-size: 30px;
        color:#eca0a8;
    }

    #forum .ivu-icon-ios-rainy{
        font-size: 30px;
        color:#8395bd;
    }

    #forum .ivu-icon-ios-thunderstorm{
        font-size: 30px;
        color:#6c757d;
    }

    #forum .ivu-icon-ios-sunny{
        font-size: 30px;
        color:#e2795e;
    }

    #forum .listing-main{
        margin-bottom: 30px;
    }

    .ivu-table .table-bmi-thin td{
        background-color: rgb(204, 204, 204);
        color: black;
        height: 27px;
    }

    .ivu-table .table-bmi-normal td{
        background-color: rgb(102, 204, 0);
        color: black;
        height: 27px;
    }

    .ivu-table .table-bmi-weight td{
        background-color: rgb(255, 255, 0);
        color: black;
        height: 27px;
    }

    .ivu-table .table-bmi-fat td{
        background-color: rgb(255, 153, 0);
        color: black;
        height: 27px;
    }

    #forum .forum-login{
        font-size: 13px;
        width: 200px;
        line-height: 50px;
    }

    #forum .exit:hover{
        color:#eca8e4 !important;
    }

    /*.ivu-icon-md-arrow-round-forward {*/
        /*color: rgb(102, 204, 0);*/
    /*}*/






</style>