修改记录：2015-4-4

新增文件：
1、ypt-submit-order--success.html
2、error-icon.png
3、success-icon.png
4、pop-bg.png
修改文件：
1、ypt-groupBuy-detail.html
    修改内容：将遮罩层、普通弹窗、登录弹窗的代码写在了页面的最底部，其他页面均适用。
    代码：
    <!--遮罩层-->
    <div class="pop-mask"></div>
    <!--普通弹窗-->
    <div class="common-pop-w hide">
        <span>恭喜你，你已完成目标</span>
    </div>
    <!--登录弹窗-->
    <div class="login-pop-w">
        <i class="l-pop--close">&times;</i>
        <div class="l-section-w">
            <h3>登录</h3>
            <form class="login-form" action="" method="">
                <div class="l-error-mes">账号或密码输入错误,请重新输入.</div>
                <div class="form-field">
                    <i class="site-sprite1 user-icon"></i>
                    <input type="text" placeholder="手机号" name="username"/>
                </div>
                <div class="form-field">
                    <i class="site-sprite1 pass-icon"></i>
                    <input type="password" placeholder="密码" name="password"/>
                </div>
                <div class="form-field">
                    <input class="l-captcha" type="text" placeholder="输入验证码" name="password"/>
                    <img src="img/captcha.png" alt="验证码"/>
                </div>
                <div class="form-field">
                    <a class="forget-password" href="#">忘记密码？</a>
                </div>
                <div class="form-field">
                    <input class="site-mast-bg" type="submit" name="登录" value="登录"/>
                </div>
                <div class="form-field">
                    还没有帐号？
                    <a class="regist-free" href="#">免费注册</a>
                </div>
            </form>
        </div>
    </div>

2、common.css
   修改内容：新增弹窗遮罩层样式，普通弹窗样式，并将登录表单的css样式由login.css中转到common.css，以便于其他页面弹窗登录的样式引用。
   使用方式：直接替换到当前最新的common.css文件。
3、login.css
   修改内容：去掉了登录表单的css样式。
   使用方式：直接替换到当前最新的login.css文件。
4、submit-order.css
   修改内容：新增了支付成功提示的样式。
   使用方式：直接替换到当前最新的submit-order.css文件。