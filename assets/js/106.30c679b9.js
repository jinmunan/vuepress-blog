(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{436:function(t,a,_){"use strict";_.r(a);var s=_(3),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linux用户管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux用户管理"}},[t._v("#")]),t._v(" Linux用户管理")]),t._v(" "),a("h2",{attrs:{id:"一、基本介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、基本介绍"}},[t._v("#")]),t._v(" 一、基本介绍")]),t._v(" "),a("p",[t._v("Linux系统是一个多用户多任务的操作系统，任何一个要使用系统资源的用户，都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/tool/linux/image-20221031103933220.png",alt:"image-20221031103933220"}})]),t._v(" "),a("h2",{attrs:{id:"二、添加用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、添加用户"}},[t._v("#")]),t._v(" 二、添加用户")]),t._v(" "),a("h3",{attrs:{id:"_1、基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、基本命令"}},[t._v("#")]),t._v(" 1、基本命令")]),t._v(" "),a("p",[a("code",[t._v("useradd options 用户名")])]),t._v(" "),a("p",[a("strong",[t._v("选项说明")])]),t._v(" "),a("ul",[a("li",[t._v("-c 【comment】：用户的注释信息，也称为备注、用户全称等，默认无。")]),t._v(" "),a("li",[t._v("-g 【group】：设置用户所属的主群组，也称主要组、主组群等，默认为与用户名同名的用户组。")]),t._v(" "),a("li",[t._v("-G 【group】：设置用户所属的附加群组，也称附加组、附加群租等，默认无。")]),t._v(" "),a("li",[t._v("-d 【directory】：设置用户的主目录，默认为/home/用户名。")]),t._v(" "),a("li",[t._v("-s 【shell】：设置用户登录Shell环境，默认为/bin/bash。")]),t._v(" "),a("li",[t._v("-u 【UID】：设置用户的ID值，默认为自动设置。")]),t._v(" "),a("li",[t._v("-e 【expire】：设置账号的过期时间，默认为空，格式为 "),a("code",[t._v("YYYY-MM-DD")]),t._v("。")]),t._v(" "),a("li",[t._v("-f 【inactive】：设置密码过期多少天后禁用该用户，默认为空。")])]),t._v(" "),a("h3",{attrs:{id:"_2、细节说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、细节说明"}},[t._v("#")]),t._v(" 2、细节说明")]),t._v(" "),a("ul",[a("li",[t._v("当创建用户成功后，会自动的创建和用户同名的家目录。")]),t._v(" "),a("li",[t._v("也可以通过 "),a("code",[t._v("useradd -d 指定目录 新的用户名")]),t._v(" ，给新创建的用户指定家目录。")])]),t._v(" "),a("h2",{attrs:{id:"三、修改密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、修改密码"}},[t._v("#")]),t._v(" 三、修改密码")]),t._v(" "),a("h3",{attrs:{id:"_1、基本命令-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、基本命令-2"}},[t._v("#")]),t._v(" 1、基本命令")]),t._v(" "),a("p",[a("code",[t._v("passwd options 用户名")])]),t._v(" "),a("p",[a("strong",[t._v("选项说明")])]),t._v(" "),a("ul",[a("li",[t._v("-l 【name】：锁定系统中的普通账户,使其不能登录。")]),t._v(" "),a("li",[t._v("-u 【name】：解锁系统中被锁定的普通用户，恢复其登录功能。")]),t._v(" "),a("li",[t._v("-x 【days】：最长密码使用时间（天）。")]),t._v(" "),a("li",[t._v("-n 【days】：最短密码使用时间（天）。")]),t._v(" "),a("li",[t._v("-d 【delete】：删除用户的密码。")])]),t._v(" "),a("h2",{attrs:{id:"四、删除用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、删除用户"}},[t._v("#")]),t._v(" 四、删除用户")]),t._v(" "),a("h3",{attrs:{id:"_1、基本命令-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、基本命令-3"}},[t._v("#")]),t._v(" 1、基本命令")]),t._v(" "),a("p",[a("code",[t._v("userdel options 用户名")])]),t._v(" "),a("p",[a("strong",[t._v("选项说明")])]),t._v(" "),a("ul",[a("li",[t._v("-r 【remove】：删除用户以及用户主目录。")])]),t._v(" "),a("h3",{attrs:{id:"_2、细节说明-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、细节说明-2"}},[t._v("#")]),t._v(" 2、细节说明")]),t._v(" "),a("ul",[a("li",[t._v("删除用户tom，但是要保留家目录，"),a("code",[t._v("userdel tom")])]),t._v(" "),a("li",[t._v("删除用户以及用户主目录，"),a("code",[t._v("userdel -r tom")])])]),t._v(" "),a("h2",{attrs:{id:"五、查询用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、查询用户"}},[t._v("#")]),t._v(" 五、查询用户")]),t._v(" "),a("h3",{attrs:{id:"_1、基本命令-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、基本命令-4"}},[t._v("#")]),t._v(" 1、基本命令")]),t._v(" "),a("p",[a("code",[t._v("id options 用户名")])]),t._v(" "),a("p",[a("strong",[t._v("选项说明")])]),t._v(" "),a("ul",[a("li",[t._v("-u 【UID】：显示用户的ID。")]),t._v(" "),a("li",[t._v("-g 【group】：显示用户的主群组ID。")]),t._v(" "),a("li",[t._v("-G 【group】：显示用户的所有群组的ID。")])]),t._v(" "),a("h2",{attrs:{id:"六、切换用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、切换用户"}},[t._v("#")]),t._v(" 六、切换用户")]),t._v(" "),a("h3",{attrs:{id:"_1、介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、介绍"}},[t._v("#")]),t._v(" 1、介绍")]),t._v(" "),a("p",[t._v("在操作Linux中，如果当前用户的权限不够，可以通过"),a("code",[t._v("su - 指令")]),t._v("，切换到高权限用户，比如root。")]),t._v(" "),a("h3",{attrs:{id:"_2、基本语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、基本语法"}},[t._v("#")]),t._v(" 2、基本语法")]),t._v(" "),a("p",[a("code",[t._v("su - 切换用户名")])]),t._v(" "),a("h3",{attrs:{id:"_3、细节说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、细节说明"}},[t._v("#")]),t._v(" 3、细节说明")]),t._v(" "),a("ul",[a("li",[t._v("从权限高的用户切换到权限低的用户，不需要输入密码，反之需要。")]),t._v(" "),a("li",[t._v("当需要返回到原来用户时，使用 "),a("code",[t._v("exit/logout")]),t._v(" 指令。")])]),t._v(" "),a("h2",{attrs:{id:"七、查看当前登录用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、查看当前登录用户"}},[t._v("#")]),t._v(" 七、查看当前登录用户")]),t._v(" "),a("p",[a("code",[t._v("who am i")])]),t._v(" "),a("h2",{attrs:{id:"八、用户组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八、用户组"}},[t._v("#")]),t._v(" 八、用户组")]),t._v(" "),a("h3",{attrs:{id:"_1、基本介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、基本介绍"}},[t._v("#")]),t._v(" 1、基本介绍")]),t._v(" "),a("p",[t._v("类似于角色，系统可以对有共性/权限的多个用户进行统一的管理。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/tool/linux/image-20221031111320586.png",alt:"image-20221031111320586"}})]),t._v(" "),a("h3",{attrs:{id:"_2、新增组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、新增组"}},[t._v("#")]),t._v(" 2、新增组")]),t._v(" "),a("p",[a("code",[t._v("groupadd 组名")])]),t._v(" "),a("p",[a("strong",[t._v("新增用户到组里")])]),t._v(" "),a("p",[a("code",[t._v("useradd -g 用户组 用户名")])]),t._v(" "),a("h3",{attrs:{id:"_3、删除组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、删除组"}},[t._v("#")]),t._v(" 3、删除组")]),t._v(" "),a("p",[a("code",[t._v("groupdel 组名")])]),t._v(" "),a("h3",{attrs:{id:"_4、修改组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、修改组"}},[t._v("#")]),t._v(" 4、修改组")]),t._v(" "),a("p",[a("code",[t._v("groupmod 组名")])]),t._v(" "),a("p",[a("strong",[t._v("修改用户到另一个组")])]),t._v(" "),a("p",[a("code",[t._v("usermod -g 用户组 用户名")])]),t._v(" "),a("h2",{attrs:{id:"九、用户和组相关文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#九、用户和组相关文件"}},[t._v("#")]),t._v(" 九、用户和组相关文件")]),t._v(" "),a("h3",{attrs:{id:"_1、-etc-passwd-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、-etc-passwd-文件"}},[t._v("#")]),t._v(" 1、/etc/passwd 文件")]),t._v(" "),a("p",[t._v("用户（ user）的配置文件，记录用户的各种信息，每行的含义：")]),t._v(" "),a("p",[a("strong",[t._v("用户名:口令:用户标识号:组标识号:注释性描述:主目录:登录 Shell")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/tool/linux/image-20221031124627034.png",alt:"image-20221031124627034"}})]),t._v(" "),a("h3",{attrs:{id:"_2、-etc-shadow-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、-etc-shadow-文件"}},[t._v("#")]),t._v(" 2、/etc/shadow 文件")]),t._v(" "),a("p",[t._v("口令的配置文件，每行的含义：")]),t._v(" "),a("p",[a("strong",[t._v("登录名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:标志")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/tool/linux/image-20221031124931701.png",alt:"image-20221031124931701"}})]),t._v(" "),a("h3",{attrs:{id:"_3、-etc-group-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、-etc-group-文件"}},[t._v("#")]),t._v(" 3、/etc/group 文件")]),t._v(" "),a("p",[t._v("组( group )的配置文件，记录Linux包含的组的信息，每行含义：")]),t._v(" "),a("p",[a("strong",[t._v("组名:口令:组标识号:组内用户列表")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/jinmunan/imgs@master/tool/linux/image-20221031125124639.png",alt:"image-20221031125124639"}})]),t._v(" "),a("h2",{attrs:{id:"十、linux用户的常见属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十、linux用户的常见属性"}},[t._v("#")]),t._v(" 十、Linux用户的常见属性")]),t._v(" "),a("h3",{attrs:{id:"_1、用户名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、用户名"}},[t._v("#")]),t._v(" 1、用户名")]),t._v(" "),a("p",[t._v('用户登录时，用于系统识别使用的名称。其由字母、数字和下划线组成，在整个系统中具有唯一性，也称为用户账号、用户名不得使用"*" "," ";"等非法的字符。')]),t._v(" "),a("h3",{attrs:{id:"_2、用户口令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、用户口令"}},[t._v("#")]),t._v(" 2、用户口令")]),t._v(" "),a("p",[t._v("用户登录系统时用于验证用户名的字符串，应该设置得足够复杂。")]),t._v(" "),a("h3",{attrs:{id:"_3、用户id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、用户id"}},[t._v("#")]),t._v(" 3、用户ID")]),t._v(" "),a("p",[t._v("在Linux系统中，每一个用户不但具有唯一的名称，还具有唯一的整数值，也就是用户ID或UID。root用户的ID值为0。特殊用户的ID默认取值范围为1~499。超级用户创建的普通用户ID值从500开始递增。第一个普通用户为500，第二个普通用户为501，以此类推。")]),t._v(" "),a("h3",{attrs:{id:"_4、用户组id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、用户组id"}},[t._v("#")]),t._v(" 4、用户组ID")]),t._v(" "),a("p",[t._v("在Linux系统中，每一个用户组不但具有唯一的用户组名，还具有唯一的整数值，也就是用户组ID或GID。")]),t._v(" "),a("h3",{attrs:{id:"_5、用户主目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、用户主目录"}},[t._v("#")]),t._v(" 5、用户主目录")]),t._v(" "),a("p",[t._v("Linux系统为普通用户默认分配一个主目录。根用户root的主目录是/root，普通用户的主目录默认为/home/用户名。如普通用户tom的主目录默认为/home/tom。")]),t._v(" "),a("h3",{attrs:{id:"_6、备注"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、备注"}},[t._v("#")]),t._v(" 6、备注")]),t._v(" "),a("p",[t._v("备注也被称为用户全名、全称、注释信息，是用户账号的附件信息，可为空。")]),t._v(" "),a("h3",{attrs:{id:"_7、登录shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、登录shell"}},[t._v("#")]),t._v(" 7、登录Shell")]),t._v(" "),a("p",[t._v("用户登录系统后使用的Shell环境。对于超级用户root和普通用户，其shell环境一般为/bin/bash。对于系统用户，其Shelli环境一般为/sbin/nplogin，表示该用户不能登录。")])])}),[],!1,null,null,null);a.default=r.exports}}]);