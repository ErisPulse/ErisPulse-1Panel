const GITHUB_RAW = "https://raw.githubusercontent.com/ErisPulse/ErisPulse-1Panel/main";

// 多语言配置
const I18N = {
  en: {
    title: "ErisPulse · 1Panel App Store",
    desc: "Event-driven multi-platform bot development framework",
    crumbs: "App Store / ErisPulse",
    badges: ["Docker", "amd64 / arm64", "1Panel v2"],
    installMain: "Install",
    installLabel: "1Panel Scheduled Task / Terminal",
    copyBtn: "Copy",
    copiedBtn: "Copied!",
    orWith: "Or with wget:",
    stepsTitle: "Setup Steps",
    steps: [
      "Copy the install command above",
      "Run it via 1Panel Scheduled Task (Shell script), or SSH into your server and execute directly",
      "Go to 1Panel App Store, click \"Update App List\" to refresh local apps",
      "Find ErisPulse, click Install and configure the port and Dashboard token",
      "Visit <code>http://&lt;IP&gt;:&lt;port&gt;/Dashboard</code> and log in with your token"
    ],
    uninstallTitle: "Uninstall",
    infoTitle: "App Info",
    infoItems: [
      ["Dashboard", "http://<IP>:<port>/Dashboard"],
      ["Token", "set on install, stored in Dashboard.token"],
      ["Image", "erispulse/erispulse"],
      ["Arch", "amd64 / arm64"],
      ["Requires", "1Panel v2 · Docker"]
    ],
    linksTitle: "Resources",
    links: {
      github: "GitHub",
      docker: "Docker Hub",
      website: "Website",
      repo: "This Repo",
      panel: "1Panel Official"
    },
    footer: "&copy; ErisDev"
  },
  zh: {
    title: "ErisPulse · 1Panel 应用商店",
    desc: "事件驱动的多平台机器人开发框架",
    crumbs: "应用商店 / ErisPulse",
    badges: ["Docker", "amd64 / arm64", "1Panel v2"],
    installMain: "安装",
    installLabel: "1Panel 计划任务 / 终端",
    copyBtn: "复制",
    copiedBtn: "已复制!",
    orWith: "或使用 wget:",
    stepsTitle: "安装步骤",
    steps: [
      "复制上方的安装命令",
      "通过 1Panel 计划任务 (Shell 脚本) 运行，或 SSH 登录服务器直接执行",
      "进入 1Panel 应用商店，点击 \"更新应用列表\" 刷新本地应用",
      "找到 ErisPulse，点击安装并配置端口和 Dashboard 令牌",
      "访问 <code>http://&lt;IP&gt;:&lt;port&gt;/Dashboard</code> 并使用令牌登录"
    ],
    uninstallTitle: "卸载",
    infoTitle: "应用信息",
    infoItems: [
      ["访问地址", "http://<IP>:<端口>/Dashboard"],
      ["访问令牌", "安装时配置，存于 Dashboard.token"],
      ["容器镜像", "erispulse/erispulse"],
      ["架构", "amd64 / arm64"],
      ["依赖", "1Panel v2 · Docker"]
    ],
    linksTitle: "相关链接",
    links: {
      github: "GitHub",
      docker: "Docker Hub",
      website: "官方网站",
      repo: "本项目仓库",
      panel: "1Panel 官网"
    },
    footer: "&copy; ErisDev"
  }
};

async function fetchScript(name) {
  const resp = await fetch(`${GITHUB_RAW}/scripts/${name}`);
  if (!resp.ok) return null;
  return resp.text();
}

function getLang(request, url) {
  const param = url.searchParams.get("lang");
  if (param === "zh" || param === "en") return param;
  const acceptLang = request.headers.get("Accept-Language") || "";
  return acceptLang.toLowerCase().includes("zh") ? "zh" : "en";
}

// —— 官方 Logo（词标 SVG，剥离动画样式后的静态版，经 /logo.svg 提供） ——

const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="190 740 1720 600" role="img" aria-labelledby="title desc"><title id="title">ErisPulse</title><desc id="desc">ErisPulse logo traced from the supplied reference image as editable SVG paths.</desc><defs><!--
      ==============================================================
      ErisPulse Logo — Editable SVG
      ==============================================================

      这版以提供的「无白色描边」Logo 图片作为轮廓参考。

      设计原则：

      1. 不使用字体
      2. 不使用白色外描边
      3. 每个字母都是独立 Group
      4. i 的点单独存在
      5. P 的下方弧线属于 P
      6. 高光独立
      7. 纹理独立
      8. 所有主体轮廓都是 SVG Path

      可以直接使用 CSS / JavaScript / SMIL
      对每一个字母进行动画。

      可用动画 ID：

        #letter-E
        #letter-r
        #letter-i-dot
        #letter-i
        #letter-s
        #letter-P
        #letter-u
        #letter-l
        #letter-s2
        #letter-e

      ==============================================================
    --><!-- ============================================================
         蓝色部分
         E r i s
         ============================================================ --><linearGradient
      id="eris-blue"
      gradientUnits="userSpaceOnUse"
      x1="0"
      y1="770"
      x2="0"
      y2="1165"
    ><stop
        offset="0"
        stop-color="#80C8F8"
      /><stop
        offset=".50"
        stop-color="#9CC8F2"
      /><stop
        offset="1"
        stop-color="#B99BEF"
      /></linearGradient><!-- ============================================================
         粉色部分
         Pulse
         ============================================================ --><linearGradient
      id="pulse-pink"
      gradientUnits="userSpaceOnUse"
      x1="0"
      y1="790"
      x2="0"
      y2="1300"
    ><stop
        offset="0"
        stop-color="#F08CBD"
      /><stop
        offset=".48"
        stop-color="#F19FD0"
      /><stop
        offset="1"
        stop-color="#C99BEF"
      /></linearGradient><!-- ============================================================
         Logo 内部的轻微颗粒纹理

         这不是必须的。

         如果以后需要纯色版本：

           .texture {
             display: none;
           }

         即可。
         ============================================================ --><pattern
      id="speckles"
      width="12"
      height="12"
      patternUnits="userSpaceOnUse"
    ><circle
        cx="2"
        cy="3"
        r=".55"
        fill="#7569A7"
        opacity=".10"
      /><circle
        cx="8"
        cy="9"
        r=".45"
        fill="#7569A7"
        opacity=".07"
      /></pattern><!-- ============================================================
         公共 CSS
         ============================================================ --></defs><!-- ==============================================================
       E
       ============================================================== --><g
    id="letter-E"
    class="letter"
    data-letter="E"
  ><!--
      E 主体轮廓
    --><path
      id="shape-E"
      fill="url(#eris-blue)"
      fill-rule="evenodd"
      d="
        M 483.00 771.00
        L 473.00 768.00
        L 449.00 768.00
        L 361.00 775.00
        L 305.00 777.00
        L 289.00 781.00
        L 281.00 786.00
        L 273.00 795.00
        L 266.00 813.00
        L 257.00 876.00
        L 242.00 956.00
        L 233.00 1019.00
        L 217.00 1110.00
        L 217.00 1131.00
        L 220.00 1141.00
        L 225.00 1150.00
        L 237.00 1161.00
        L 261.00 1170.00
        L 284.00 1170.00
        L 291.00 1168.00
        L 425.00 1159.00
        L 443.00 1154.00
        L 450.00 1148.00
        L 458.00 1136.00
        L 464.00 1114.00
        L 464.00 1093.00
        L 460.00 1084.00
        L 449.00 1076.00
        L 435.00 1074.00
        L 356.00 1080.00
        L 315.00 1081.00
        L 309.00 1074.00
        L 309.00 1064.00
        L 316.00 1014.00
        L 320.00 1004.00
        L 374.00 999.00
        L 406.00 998.00
        L 415.00 996.00
        L 433.00 996.00
        L 442.00 994.00
        L 450.00 988.00
        L 454.00 982.00
        L 460.00 963.00
        L 461.00 938.00
        L 458.00 929.00
        L 452.00 923.00
        L 443.00 920.00
        L 429.00 920.00
        L 337.00 928.00
        L 333.00 924.00
        L 334.00 908.00
        L 338.00 892.00
        L 342.00 861.00
        L 344.00 857.00
        L 349.00 854.00
        L 376.00 851.00
        L 416.00 850.00
        L 425.00 848.00
        L 466.00 847.00
        L 480.00 842.00
        L 488.00 834.00
        L 495.00 811.00
        L 494.00 785.00
        L 491.00 778.00
        Z
      "
    /><!-- E 纹理 --><use
      href="#shape-E"
      class="texture"
      fill="url(#speckles)"
    /><!-- E 高光 --><path
      class="highlight"
      d="
        M 286.00 802.00
        L 293.00 799.00
        L 300.00 801.00
        L 308.00 807.00
        L 312.00 813.00
        L 309.00 818.00
        L 303.00 821.00
        L 296.00 825.00
        L 289.00 826.00
        L 285.00 821.00
        L 284.00 813.00
        Z
      "
    /></g><!-- ==============================================================
       r
       ============================================================== --><g
    id="letter-r"
    class="letter"
    data-letter="r"
  ><path
      id="shape-r"
      fill="url(#eris-blue)"
      fill-rule="evenodd"
      d="
        M 660.00 915.00
        L 642.00 908.00
        L 627.00 909.00
        L 610.00 915.00
        L 589.00 931.00
        L 578.00 947.00
        L 575.00 942.00
        L 574.00 932.00
        L 570.00 921.00
        L 562.00 915.00
        L 556.00 913.00
        L 543.00 912.00
        L 530.00 915.00
        L 514.00 927.00
        L 509.00 937.00
        L 507.00 946.00
        L 486.00 1123.00
        L 486.00 1133.00
        L 490.00 1146.00
        L 499.00 1155.00
        L 511.00 1159.00
        L 532.00 1158.00
        L 543.00 1154.00
        L 552.00 1146.00
        L 558.00 1131.00
        L 568.00 1045.00
        L 574.00 1021.00
        L 586.00 1001.00
        L 597.00 991.00
        L 610.00 984.00
        L 618.00 982.00
        L 627.00 983.00
        L 644.00 989.00
        L 650.00 988.00
        L 658.00 982.00
        L 666.00 965.00
        L 670.00 948.00
        L 670.00 934.00
        L 666.00 921.00
        Z
      "
    /><use
      href="#shape-r"
      class="texture"
      fill="url(#speckles)"
    /><path
      class="highlight"
      d="
        M 524.00 935.00
        L 530.00 932.00
        L 537.00 933.00
        L 541.00 937.00
        L 539.00 943.00
        L 533.00 948.00
        L 527.00 950.00
        L 523.00 946.00
        L 522.00 940.00
        Z
      "
    /></g><!-- ==============================================================
       i 点
       ============================================================== --><g
    id="letter-i-dot"
    class="letter"
    data-letter="i-dot"
  ><path
      id="shape-i-dot"
      fill="url(#eris-blue)"
      d="
        M 765.00 803.00
        L 750.00 799.00
        L 731.00 801.00
        L 716.00 809.00
        L 706.00 819.00
        L 699.00 835.00
        L 697.00 851.00
        L 698.00 860.00
        L 703.00 874.00
        L 714.00 886.00
        L 728.00 892.00
        L 745.00 892.00
        L 762.00 886.00
        L 777.00 872.00
        L 784.00 856.00
        L 786.00 837.00
        L 778.00 815.00
        Z
      "
    /><use
      href="#shape-i-dot"
      class="texture"
      fill="url(#speckles)"
    /><path
      class="highlight"
      d="
        M 717.00 824.00
        L 722.00 819.00
        L 728.00 818.00
        L 734.00 821.00
        L 734.00 826.00
        L 729.00 831.00
        L 723.00 835.00
        L 718.00 833.00
        L 716.00 829.00
        Z
      "
    /></g><!-- ==============================================================
       i
       ============================================================== --><g
    id="letter-i"
    class="letter"
    data-letter="i"
  ><path
      id="shape-i"
      fill="url(#eris-blue)"
      fill-rule="evenodd"
      d="
        M 741.00 915.00
        L 723.00 916.00
        L 707.00 923.00
        L 699.00 932.00
        L 695.00 945.00
        L 675.00 1103.00
        L 673.00 1138.00
        L 675.00 1144.00
        L 683.00 1154.00
        L 700.00 1160.00
        L 715.00 1160.00
        L 731.00 1155.00
        L 739.00 1148.00
        L 746.00 1128.00
        L 750.00 1099.00
        L 752.00 1064.00
        L 766.00 956.00
        L 766.00 936.00
        L 760.00 923.00
        L 749.00 917.00
        Z
      "
    /><use
      href="#shape-i"
      class="texture"
      fill="url(#speckles)"
    /><path
      class="highlight"
      d="
        M 711.00 937.00
        L 716.00 933.00
        L 722.00 933.00
        L 727.00 936.00
        L 726.00 941.00
        L 720.00 947.00
        L 714.00 950.00
        L 710.00 947.00
        L 709.00 942.00
        Z
      "
    /></g><!-- ==============================================================
       s
       ============================================================== --><g
    id="letter-s"
    class="letter"
    data-letter="s"
  ><path
      id="shape-s"
      fill="url(#eris-blue)"
      fill-rule="evenodd"
      d="
        M 904.00 907.00
        L 886.00 904.00
        L 872.00 904.00
        L 854.00 907.00
        L 831.00 917.00
        L 813.00 931.00
        L 803.00 944.00
        L 795.00 959.00
        L 790.00 979.00
        L 790.00 996.00
        L 795.00 1014.00
        L 802.00 1026.00
        L 819.00 1042.00
        L 837.00 1050.00
        L 847.00 1052.00
        L 865.00 1062.00
        L 875.00 1075.00
        L 875.00 1082.00
        L 870.00 1091.00
        L 856.00 1099.00
        L 845.00 1099.00
        L 830.00 1091.00
        L 820.00 1076.00
        L 810.00 1068.00
        L 796.00 1068.00
        L 787.00 1073.00
        L 779.00 1082.00
        L 774.00 1092.00
        L 771.00 1102.00
        L 771.00 1112.00
        L 773.00 1120.00
        L 779.00 1131.00
        L 786.00 1138.00
        L 800.00 1146.00
        L 827.00 1155.00
        L 867.00 1156.00
        L 878.00 1154.00
        L 900.00 1145.00
        L 915.00 1134.00
        L 926.00 1122.00
        L 936.00 1104.00
        L 942.00 1086.00
        L 943.00 1062.00
        L 938.00 1044.00
        L 932.00 1034.00
        L 922.00 1023.00
        L 910.00 1015.00
        L 861.00 993.00
        L 856.00 988.00
        L 853.00 981.00
        L 856.00 970.00
        L 862.00 964.00
        L 875.00 959.00
        L 883.00 960.00
        L 894.00 965.00
        L 908.00 980.00
        L 913.00 982.00
        L 926.00 981.00
        L 932.00 978.00
        L 939.00 971.00
        L 944.00 962.00
        L 947.00 950.00
        L 944.00 935.00
        L 928.00 918.00
        Z
      "
    /><use
      href="#shape-s"
      class="texture"
      fill="url(#speckles)"
    /></g><!-- ==============================================================
       P
       ============================================================== --><g
    id="letter-P"
    class="letter"
    data-letter="P"
  ><!--
      P 的完整轮廓。

      注意：

      下方的大弧线已经包含在同一个 shape-P 中。

      因此：

        #letter-P

      才是完整的 P 动画对象。
    --><path
      id="shape-P"
      fill="url(#pulse-pink)"
      fill-rule="evenodd"
      d="
        M 1162.00 825.00
        L 1146.00 817.00
        L 1121.00 810.00
        L 1079.00 808.00
        L 1041.00 813.00
        L 1023.00 818.00
        L 1009.00 827.00
        L 1001.00 839.00
        L 996.00 861.00
        L 987.00 927.00
        L 981.00 963.00
        L 976.00 1005.00
        L 971.00 1043.00
        L 966.00 1085.00
        L 962.00 1111.00
        L 956.00 1154.00
        L 947.00 1180.00
        L 939.00 1192.00
        L 927.00 1204.00
        L 911.00 1212.00
        L 893.00 1216.00
        L 870.00 1214.00
        L 843.00 1204.00
        L 829.00 1195.00
        L 812.00 1175.00
        L 801.00 1174.00
        L 767.00 1203.00
        L 750.00 1212.00
        L 733.00 1217.00
        L 712.00 1217.00
        L 696.00 1212.00
        L 687.00 1206.00
        L 676.00 1195.00
        L 666.00 1181.00
        L 655.00 1173.00
        L 640.00 1168.00
        L 625.00 1169.00
        L 614.00 1173.00
        L 604.00 1180.00
        L 595.00 1189.00
        L 587.00 1205.00
        L 586.00 1233.00
        L 589.00 1245.00
        L 595.00 1258.00
        L 602.00 1266.00
        L 619.00 1282.00
        L 640.00 1292.00
        L 665.00 1296.00
        L 683.00 1296.00
        L 704.00 1293.00
        L 730.00 1284.00
        L 748.00 1275.00
        L 768.00 1262.00
        L 796.00 1236.00
        L 802.00 1234.00
        L 821.00 1254.00
        L 838.00 1266.00
        L 859.00 1276.00
        L 881.00 1282.00
        L 923.00 1282.00
        L 944.00 1276.00
        L 972.00 1260.00
        L 1001.00 1230.00
        L 1016.00 1205.00
        L 1025.00 1184.00
        L 1034.00 1148.00
        L 1042.00 1082.00
        L 1048.00 1079.00
        L 1076.00 1079.00
        L 1102.00 1075.00
        L 1122.00 1068.00
        L 1140.00 1059.00
        L 1160.00 1044.00
        L 1170.00 1034.00
        L 1188.00 1008.00
        L 1204.00 969.00
        L 1209.00 947.00
        L 1211.00 927.00
        L 1210.00 899.00
        L 1204.00 875.00
        L 1190.00 849.00
        L 1178.00 835.00
        Z

        M 1111.00 887.00
        L 1123.00 895.00
        L 1130.00 904.00
        L 1135.00 915.00
        L 1137.00 940.00
        L 1131.00 962.00
        L 1119.00 982.00
        L 1108.00 993.00
        L 1097.00 1000.00
        L 1078.00 1007.00
        L 1065.00 1009.00
        L 1049.00 1008.00
        L 1058.00 938.00
        L 1062.00 892.00
        L 1070.00 885.00
        L 1083.00 883.00
        L 1095.00 883.00
        Z
      "
    /><use
      href="#shape-P"
      class="texture"
      fill="url(#speckles)"
    /><!-- P 主体高光 --><path
      class="highlight"
      d="
        M 1014.00 841.00
        L 1020.00 837.00
        L 1027.00 838.00
        L 1033.00 842.00
        L 1033.00 847.00
        L 1028.00 852.00
        L 1022.00 857.00
        L 1016.00 857.00
        L 1013.00 852.00
        L 1012.00 846.00
        Z
      "
    /><!-- P 下方弧线高光 --><path
      class="highlight"
      d="
        M 606.00 1192.00
        L 612.00 1189.00
        L 618.00 1190.00
        L 624.00 1194.00
        L 625.00 1199.00
        L 620.00 1204.00
        L 614.00 1210.00
        L 608.00 1210.00
        L 605.00 1206.00
        L 604.00 1200.00
        Z
      "
    /></g><!-- ==============================================================
       u
       ============================================================== --><g
    id="letter-u"
    class="letter"
    data-letter="u"
  ><path
      id="shape-u"
      fill="url(#pulse-pink)"
      fill-rule="evenodd"
      d="
        M 1395.00 924.00
        L 1383.00 920.00
        L 1371.00 920.00
        L 1356.00 924.00
        L 1345.00 933.00
        L 1341.00 940.00
        L 1327.00 1057.00
        L 1321.00 1070.00
        L 1315.00 1078.00
        L 1305.00 1086.00
        L 1294.00 1090.00
        L 1284.00 1087.00
        L 1278.00 1081.00
        L 1274.00 1068.00
        L 1276.00 1042.00
        L 1290.00 949.00
        L 1288.00 941.00
        L 1280.00 929.00
        L 1266.00 923.00
        L 1245.00 926.00
        L 1235.00 931.00
        L 1229.00 937.00
        L 1224.00 948.00
        L 1221.00 965.00
        L 1219.00 993.00
        L 1212.00 1037.00
        L 1209.00 1082.00
        L 1213.00 1110.00
        L 1223.00 1131.00
        L 1236.00 1144.00
        L 1258.00 1154.00
        L 1282.00 1154.00
        L 1298.00 1148.00
        L 1314.00 1138.00
        L 1325.00 1125.00
        L 1332.00 1142.00
        L 1337.00 1147.00
        L 1348.00 1151.00
        L 1359.00 1151.00
        L 1373.00 1146.00
        L 1380.00 1138.00
        L 1384.00 1126.00
        L 1392.00 1055.00
        L 1396.00 1034.00
        L 1400.00 985.00
        L 1404.00 962.00
        L 1404.00 937.00
        L 1402.00 932.00
        Z
      "
    /><use
      href="#shape-u"
      class="texture"
      fill="url(#speckles)"
    /><path
      class="highlight"
      d="
        M 1240.00 947.00
        L 1245.00 943.00
        L 1251.00 943.00
        L 1256.00 947.00
        L 1255.00 952.00
        L 1250.00 957.00
        L 1244.00 961.00
        L 1239.00 959.00
        L 1237.00 954.00
        Z
      "
    /><path
      class="highlight"
      d="
        M 1355.00 944.00
        L 1360.00 940.00
        L 1366.00 940.00
        L 1371.00 944.00
        L 1370.00 949.00
        L 1365.00 954.00
        L 1359.00 958.00
        L 1354.00 956.00
        L 1352.00 951.00
        Z
      "
    /></g><!-- ==============================================================
       l
       ============================================================== --><g
    id="letter-l"
    class="letter"
    data-letter="l"
  ><path
      id="shape-l"
      fill="url(#pulse-pink)"
      fill-rule="evenodd"
      d="
        M 1494.00 791.00
        L 1479.00 791.00
        L 1467.00 795.00
        L 1456.00 805.00
        L 1451.00 816.00
        L 1445.00 853.00
        L 1443.00 882.00
        L 1437.00 914.00
        L 1433.00 962.00
        L 1421.00 1054.00
        L 1418.00 1093.00
        L 1421.00 1124.00
        L 1428.00 1134.00
        L 1435.00 1140.00
        L 1447.00 1146.00
        L 1456.00 1148.00
        L 1474.00 1148.00
        L 1493.00 1140.00
        L 1501.00 1132.00
        L 1505.00 1124.00
        L 1509.00 1106.00
        L 1508.00 1092.00
        L 1504.00 1085.00
        L 1490.00 1081.00
        L 1484.00 1075.00
        L 1495.00 981.00
        L 1500.00 954.00
        L 1516.00 829.00
        L 1516.00 811.00
        L 1512.00 803.00
        L 1506.00 796.00
        Z
      "
    /><use
      href="#shape-l"
      class="texture"
      fill="url(#speckles)"
    /><path
      class="highlight"
      d="
        M 1466.00 817.00
        L 1471.00 812.00
        L 1477.00 812.00
        L 1481.00 816.00
        L 1480.00 821.00
        L 1475.00 826.00
        L 1469.00 831.00
        L 1465.00 829.00
        L 1464.00 824.00
        Z
      "
    /></g><!-- ==============================================================
       第二个 s
       ============================================================== --><g
    id="letter-s2"
    class="letter"
    data-letter="s2"
  ><path
      id="shape-s2"
      fill="url(#pulse-pink)"
      fill-rule="evenodd"
      d="
        M 1645.00 901.00
        L 1628.00 898.00
        L 1605.00 899.00
        L 1579.00 907.00
        L 1562.00 917.00
        L 1549.00 929.00
        L 1542.00 939.00
        L 1534.00 956.00
        L 1531.00 970.00
        L 1531.00 994.00
        L 1533.00 1004.00
        L 1541.00 1020.00
        L 1555.00 1034.00
        L 1569.00 1042.00
        L 1603.00 1052.00
        L 1614.00 1061.00
        L 1617.00 1067.00
        L 1617.00 1073.00
        L 1613.00 1082.00
        L 1600.00 1091.00
        L 1592.00 1092.00
        L 1583.00 1091.00
        L 1574.00 1087.00
        L 1566.00 1081.00
        L 1556.00 1068.00
        L 1550.00 1066.00
        L 1536.00 1068.00
        L 1525.00 1077.00
        L 1519.00 1093.00
        L 1519.00 1101.00
        L 1523.00 1114.00
        L 1535.00 1128.00
        L 1555.00 1140.00
        L 1581.00 1147.00
        L 1604.00 1147.00
        L 1630.00 1140.00
        L 1646.00 1131.00
        L 1660.00 1118.00
        L 1667.00 1109.00
        L 1676.00 1090.00
        L 1680.00 1069.00
        L 1676.00 1043.00
        L 1668.00 1027.00
        L 1662.00 1019.00
        L 1652.00 1011.00
        L 1635.00 1002.00
        L 1604.00 990.00
        L 1594.00 981.00
        L 1592.00 977.00
        L 1592.00 969.00
        L 1596.00 963.00
        L 1605.00 956.00
        L 1610.00 955.00
        L 1627.00 956.00
        L 1645.00 972.00
        L 1651.00 974.00
        L 1661.00 974.00
        L 1668.00 971.00
        L 1677.00 962.00
        L 1683.00 946.00
        L 1683.00 933.00
        L 1680.00 925.00
        L 1666.00 911.00
        Z
      "
    /><use
      href="#shape-s2"
      class="texture"
      fill="url(#speckles)"
    /><path
      class="highlight"
      d="
        M 1557.00 934.00
        L 1561.00 930.00
        L 1566.00 930.00
        L 1570.00 934.00
        L 1569.00 938.00
        L 1565.00 942.00
        L 1560.00 945.00
        L 1556.00 943.00
        L 1555.00 939.00
        Z
      "
    /></g><!-- ==============================================================
       e
       ============================================================== --><g
    id="letter-e"
    class="letter"
    data-letter="e"
  ><path
      id="shape-e"
      fill="url(#pulse-pink)"
      fill-rule="evenodd"
      d="
        M 1844.00 899.00
        L 1822.00 895.00
        L 1806.00 896.00
        L 1786.00 901.00
        L 1768.00 909.00
        L 1743.00 926.00
        L 1726.00 943.00
        L 1717.00 957.00
        L 1707.00 979.00
        L 1701.00 999.00
        L 1697.00 1029.00
        L 1697.00 1049.00
        L 1702.00 1074.00
        L 1708.00 1090.00
        L 1718.00 1107.00
        L 1734.00 1122.00
        L 1755.00 1133.00
        L 1778.00 1139.00
        L 1808.00 1139.00
        L 1837.00 1131.00
        L 1853.00 1122.00
        L 1869.00 1108.00
        L 1875.00 1100.00
        L 1882.00 1085.00
        L 1882.00 1076.00
        L 1878.00 1067.00
        L 1873.00 1061.00
        L 1863.00 1056.00
        L 1852.00 1055.00
        L 1845.00 1057.00
        L 1827.00 1075.00
        L 1814.00 1083.00
        L 1792.00 1085.00
        L 1776.00 1077.00
        L 1768.00 1069.00
        L 1760.00 1053.00
        L 1760.00 1045.00
        L 1764.00 1042.00
        L 1781.00 1042.00
        L 1826.00 1035.00
        L 1846.00 1028.00
        L 1862.00 1018.00
        L 1876.00 1003.00
        L 1884.00 985.00
        L 1887.00 972.00
        L 1887.00 955.00
        L 1884.00 942.00
        L 1876.00 924.00
        L 1862.00 909.00
        Z

        M 1827.00 957.00
        L 1829.00 961.00
        L 1830.00 973.00
        L 1829.00 979.00
        L 1823.00 986.00
        L 1797.00 995.00
        L 1764.00 1000.00
        L 1760.00 997.00
        L 1766.00 978.00
        L 1774.00 967.00
        L 1786.00 956.00
        L 1801.00 949.00
        L 1815.00 948.00
        Z
      "
    /><use
      href="#shape-e"
      class="texture"
      fill="url(#speckles)"
    /></g><!-- ==============================================================
       Animation Notes
       ==============================================================

       每个字母都可以单独控制。

       例如：

         #letter-P {
           animation: bounce .8s ease-in-out;
         }

         @keyframes bounce {
           50% {
             transform:
               translateY(-10px)
               rotate(-1deg);
           }
         }


       逐字出现：

         .letter {
           opacity: 0;
           animation:
             logo-in .5s ease forwards;
         }

         @keyframes logo-in {
           from {
             opacity: 0;
             transform: translateY(15px);
           }

           to {
             opacity: 1;
             transform: translateY(0);
           }
         }


       P 的下方弧线属于 #letter-P，
       所以 P 做旋转、弹跳、缩放时会保持整体关系。


       高光也是独立元素：

         .highlight {
           animation: shine 2s infinite;
         }


       纹理也是独立元素：

         .texture {
           animation: grain 1.5s infinite;
         }

       ==============================================================
  --></svg>`;

function renderHTML(request, url) {
  const host = request.headers.get("Host") || "get-1panel.erisdev.com";
  const baseUrl = `https://${host}`;
  const lang = getLang(request, url);
  const t = I18N[lang];
  const isZh = lang === "zh";

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${t.title}</title>
<link rel="icon" type="image/svg+xml" href="/logo.svg">
<style>
  :root {
    --ink: #2d2d2d;
    --paper: #f5f0e8;
    --card: #fbf7ef;
    --white: #ffffff;
    --red: #e74c3c;
    --blue: #3498db;
    --orange: #f39c12;
    --violet: #9b59b6;
    --sh-sm: 3px 3px 0 rgba(45,45,45,.22);
    --dash: 2px dashed rgba(45,45,45,.4);
    --serif: Georgia, "Songti SC", "STSong", "SimSun", serif;
    --sans: system-ui, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
    --mono: ui-monospace, "Cascadia Mono", "Courier New", monospace;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { overflow-x: clip; }
  body { font-family: var(--sans); font-size: 15px; line-height: 1.6; color: var(--ink); background: var(--paper); min-height: 100vh; -webkit-font-smoothing: antialiased; }
  a { color: inherit; }
  code { font-family: var(--mono); }
  :focus-visible { outline: 3px solid var(--blue); outline-offset: 2px; }

  /* —— 旋转与纸片阴影：旋转一律用类，避免与 hover 冲突 —— */
  .tilt { transform: rotate(var(--rot, 0deg)); transition: transform .2s ease, filter .2s ease; }
  .tilt:hover { transform: rotate(0deg) translateY(-2px); }
  .r-1 { --rot: -1.6deg; } .r-2 { --rot: -.7deg; } .r-3 { --rot: 1.1deg; }
  .r-4 { --rot: .8deg; } .r-5 { --rot: 2deg; } .r-6 { --rot: -2.1deg; }
  .lift { filter: drop-shadow(6px 6px 0 rgba(45,45,45,.28)); }
  .lift:hover { filter: drop-shadow(8px 8px 0 rgba(45,45,45,.28)); }
  .torn { clip-path: polygon(0 2%,8% 0,20% 3%,35% 0,50% 2%,65% 0,80% 3%,92% 0,100% 2%,100% 98%,90% 100%,75% 97%,60% 100%,45% 98%,30% 100%,15% 97%,0 100%); }

  /* —— 剪下来的标签条 —— */
  .tag { display: inline-block; height: 28px; line-height: 28px; padding: 0 14px; font-family: var(--mono); font-size: 13px; letter-spacing: .08em; text-transform: uppercase; background: var(--blue); color: #fff; clip-path: polygon(8px 0,calc(100% - 8px) 0,100% 50%,calc(100% - 8px) 100%,8px 100%,0 50%); }
  .badges { display: flex; gap: 12px; margin-top: 22px; flex-wrap: wrap; }
  .badges .tag:nth-child(4n+2) { background: var(--red); }
  .badges .tag:nth-child(4n+3) { background: var(--orange); color: var(--ink); }
  .badges .tag:nth-child(4n) { background: var(--violet); }
  .badges .tag:nth-child(odd) { transform: rotate(-1.6deg); }
  .badges .tag:nth-child(even) { transform: rotate(1.4deg); }

  /* —— 胶带 —— */
  .tape { position: absolute; width: 130px; height: 22px; pointer-events: none; clip-path: polygon(3% 0,97% 0,100% 28%,96% 52%,100% 78%,97% 100%,3% 100%,0 72%,4% 46%,0 24%); }
  .tape-red { background: rgba(231,76,49,.5); }
  .tape-blue { background: rgba(52,152,219,.45); }
  .tape-white { background: rgba(255,255,255,.6); }
  .tape-orange { background: rgba(243,156,18,.5); }

  /* —— 顶栏 —— */
  .topbar { width: min(1120px, calc(100% - 32px)); margin: 24px auto 0; display: flex; align-items: center; gap: 14px; }
  .brand-logo { height: 30px; width: auto; display: block; }
  .top-tag { background: var(--orange); color: var(--ink); transform: rotate(-1.5deg); }
  .sp { flex: 1; }
  .round { width: 36px; height: 36px; border: 2px solid var(--ink); border-radius: 2px; background: var(--white); display: flex; align-items: center; justify-content: center; color: var(--ink); cursor: pointer; transition: transform .15s ease, box-shadow .15s ease; }
  .round:hover { transform: translate(-2px,-2px); box-shadow: var(--sh-sm); }
  .round svg { width: 17px; height: 17px; }

  main { width: min(1120px, calc(100% - 32px)); margin: 0 auto; padding: 34px 0 70px; }

  /* —— 头部：混合字体堆叠 —— */
  .hero { margin-bottom: 46px; }
  .hero > .tag { margin-bottom: 20px; transform: rotate(-1.2deg); }
  .hero-title { position: relative; font-family: var(--serif); font-weight: 900; font-size: clamp(40px, 6vw, 62px); line-height: 1.05; letter-spacing: -.02em; max-width: 840px; }
  .hero-title .tape { top: -12px; right: 4%; width: 150px; transform: rotate(5deg); }
  .hero-sub { margin-top: 16px; font-size: 18px; line-height: 1.55; max-width: 660px; color: rgba(45,45,45,.85); transform: rotate(-.5deg); }
  .badges { margin-top: 22px; }

  /* —— 纸片网格 —— */
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px 26px; align-items: start; }
  .card { position: relative; }
  .card.full { grid-column: 1 / -1; }
  .torn-body { background: var(--card); padding: 26px 26px 24px; }
  .card-head { display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; }
  .num { display: inline-block; padding: 3px 12px; font-family: var(--mono); font-size: 11px; letter-spacing: .14em; color: #fff; background: var(--ink); clip-path: polygon(6px 0,calc(100% - 6px) 0,100% 50%,calc(100% - 6px) 100%,6px 100%,0 50%); align-self: flex-start; }
  .num.alt { background: var(--red); }
  .card-head h2 { font-family: var(--serif); font-weight: 700; font-size: 26px; line-height: 1.15; }

  /* —— 剪切痕迹代码块 —— */
  .cmd-wrapper { border: var(--dash); border-radius: 2px; background: var(--white); margin-bottom: 14px; }
  .cmd-label { display: flex; align-items: center; gap: 8px; padding: 8px 14px; font-family: var(--mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: rgba(45,45,45,.7); border-bottom: 2px dashed rgba(45,45,45,.25); }
  .cmd-label svg { width: 14px; height: 14px; flex: none; }
  .cmd-content { padding: 12px 14px; display: flex; align-items: flex-start; gap: 12px; }
  .cmd-text { flex: 1; min-width: 0; font-family: var(--mono); font-size: 13px; line-height: 1.5; white-space: nowrap; overflow-x: auto; scrollbar-width: thin; }
  .btn { font-family: var(--mono); font-size: 12px; letter-spacing: .05em; background: var(--ink); color: #fff; border: none; padding: 7px 14px; border-radius: 2px; cursor: pointer; white-space: nowrap; transform: rotate(-1deg); transition: transform .15s ease, box-shadow .15s ease, background-color .15s ease; }
  .btn:hover { transform: translate(-2px,-2px) rotate(0); box-shadow: var(--sh-sm); }
  .btn.ok { background: var(--blue); }
  .hint { margin-top: 12px; font-size: 13px; color: rgba(45,45,45,.75); }
  .hint code { background: var(--white); border: 1px solid rgba(45,45,45,.25); padding: 2px 6px; font-size: 12px; word-break: break-all; }

  /* —— 步骤：贴纸编号 —— */
  .steps { list-style: none; counter-reset: s; margin-top: 20px; }
  .steps li { position: relative; padding-left: 42px; margin-bottom: 14px; font-size: 14px; color: rgba(45,45,45,.85); }
  .steps li:last-child { margin-bottom: 0; }
  .steps li::before { counter-increment: s; content: counter(s); position: absolute; left: 0; top: 2px; width: 27px; height: 27px; border-radius: 999px; background: var(--blue); color: #fff; font-family: var(--mono); font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; transform: rotate(-4deg); }
  .steps li:nth-child(2n)::before { background: var(--red); transform: rotate(3deg); }
  .steps li:nth-child(3n)::before { background: var(--orange); color: var(--ink); transform: rotate(-2deg); }
  .steps code { background: var(--white); border: 1px solid rgba(45,45,45,.25); padding: 1px 5px; font-size: 12px; }

  /* —— 应用信息（等宽标签条） —— */
  .info-list { display: flex; flex-direction: column; }
  .info-row { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; padding: 9px 2px; border-bottom: 2px dashed rgba(45,45,45,.18); font-size: 13px; }
  .info-row:last-child { border-bottom: none; }
  .info-k { color: rgba(45,45,45,.7); flex: none; }
  .info-v { color: var(--ink); font-family: var(--mono); font-size: 12.5px; text-align: right; word-break: break-all; }

  /* —— 链接纸条 —— */
  .links-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .link-item { display: flex; align-items: center; justify-content: center; padding: 13px 10px; background: var(--white); border: var(--dash); border-radius: 2px; text-decoration: none; font-family: var(--mono); font-size: 13px; letter-spacing: .04em; text-align: center; transition: background-color .15s ease; }
  .link-item:nth-child(3n+1) { transform: rotate(-1.2deg); }
  .link-item:nth-child(3n+2) { transform: rotate(.9deg); }
  .link-item:nth-child(3n) { transform: rotate(-.4deg); }
  .link-item:hover { background: var(--orange); }

  /* —— 页脚 —— */
  .foot { margin-top: 48px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
  .foot-text { font-family: var(--mono); font-size: 12px; letter-spacing: .08em; color: rgba(45,45,45,.6); }
  .lang-switch { display: inline-flex; gap: 8px; }
  .lang-btn { height: 28px; padding: 0 14px; border: none; cursor: pointer; font-family: var(--mono); font-size: 12px; letter-spacing: .08em; background: var(--white); color: var(--ink); clip-path: polygon(7px 0,calc(100% - 7px) 0,100% 50%,calc(100% - 7px) 100%,7px 100%,0 50%); }
  .lang-btn.active { background: var(--ink); color: #fff; }

  @media (max-width: 1099px) {
    .grid { grid-template-columns: 1fr; gap: 30px; }
    .hero-title .tape { width: 110px; }
    .cmd-content { flex-direction: column; }
    .btn { width: 100%; }
    .lift { filter: drop-shadow(4px 4px 0 rgba(45,45,45,.28)); }
  }
  @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
</style>
</head>
<body>
<div class="topbar">
  <img class="brand-logo" src="/logo.svg" alt="ErisPulse">
  <span class="tag top-tag">1Panel</span>
  <div class="sp"></div>
  <a class="round" href="https://github.com/ErisPulse/ErisPulse" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
  </a>
</div>

<main>
  <header class="hero">
    <span class="tag">${t.crumbs}</span>
    <h1 class="hero-title">ErisPulse<span class="tape tape-blue"></span></h1>
    <p class="hero-sub">${t.desc}</p>
    <div class="badges">${t.badges.map(b => `<span class="tag">${b}</span>`).join('')}</div>
  </header>

  <div class="grid">
    <div class="card full lift tilt r-1">
      <div class="torn torn-body">
        <span class="tape tape-red" style="top:-10px;left:26px;transform:rotate(-5deg)"></span>
        <div class="card-head"><span class="num">01</span><h2>${t.installMain}</h2></div>
        <div class="cmd-wrapper">
          <div class="cmd-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>${t.installLabel}</div>
          <div class="cmd-content">
            <span class="cmd-text">bash &lt;(curl -sL ${baseUrl}/install.sh)</span>
            <button class="btn" data-copy>${t.copyBtn}</button>
          </div>
        </div>
        <p class="hint">${t.orWith} <code>wget -qO- ${baseUrl}/install.sh</code></p>
        <ol class="steps">${t.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      </div>
    </div>

    <div class="card lift tilt r-3">
      <div class="torn torn-body">
        <span class="tape tape-orange" style="top:-10px;right:20px;transform:rotate(4deg)"></span>
        <div class="card-head"><span class="num alt">02</span><h2>${t.uninstallTitle}</h2></div>
        <div class="cmd-wrapper">
          <div class="cmd-content">
            <span class="cmd-text">bash &lt;(curl -sL ${baseUrl}/uninstall.sh)</span>
            <button class="btn" data-copy>${t.copyBtn}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="card lift tilt r-4">
      <div class="torn torn-body">
        <div class="card-head"><span class="num">03</span><h2>${t.infoTitle}</h2></div>
        <div class="info-list">
          ${t.infoItems.map(function (row) { return '<div class="info-row"><span class="info-k">' + row[0] + '</span><span class="info-v">' + row[1] + '</span></div>'; }).join('')}
        </div>
      </div>
    </div>

    <div class="card lift tilt r-6">
      <div class="torn torn-body">
        <div class="card-head"><span class="num alt">04</span><h2>${t.linksTitle}</h2></div>
        <div class="links-grid">
          <a href="https://github.com/ErisPulse/ErisPulse" target="_blank" rel="noopener noreferrer" class="link-item">${t.links.github}</a>
          <a href="https://hub.docker.com/r/erispulse/erispulse" target="_blank" rel="noopener noreferrer" class="link-item">${t.links.docker}</a>
          <a href="https://www.erisdev.com" target="_blank" rel="noopener noreferrer" class="link-item">${t.links.website}</a>
          <a href="https://github.com/ErisPulse/ErisPulse-1Panel" target="_blank" rel="noopener noreferrer" class="link-item">${t.links.repo}</a>
          <a href="https://1panel.cn" target="_blank" rel="noopener noreferrer" class="link-item">${t.links.panel}</a>
        </div>
      </div>
    </div>
  </div>

  <div class="foot">
    <div class="foot-text">${t.footer}</div>
    <div class="lang-switch">
      <button class="lang-btn ${isZh ? '' : 'active'}" onclick="switchLang('en')">English</button>
      <button class="lang-btn ${isZh ? 'active' : ''}" onclick="switchLang('zh')">中文</button>
    </div>
  </div>
</main>

<script>
(function () {
  var COPY_OK = ${JSON.stringify(t.copiedBtn)};
  var COPY_TXT = ${JSON.stringify(t.copyBtn)};
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var wrapper = btn.closest(".cmd-wrapper");
      var text = wrapper ? wrapper.querySelector(".cmd-text") : null;
      if (!text) return;
      var done = function () {
        btn.innerText = COPY_OK;
        btn.classList.add("ok");
        setTimeout(function () { btn.innerText = COPY_TXT; btn.classList.remove("ok"); }, 2000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text.innerText.trim()).then(done, done);
      } else { done(); }
    });
  });
  window.switchLang = function (lang) {
    var url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.location.href = url.toString();
  };
})();
</script>
</body>
</html>`;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Support manual language override via query param

    if (path === "/install.sh") {
      const script = await fetchScript("install.sh");
      if (!script) return new Response("Not Found", { status: 404 });
      return new Response(script, {
        headers: {
          "Content-Type": "text/x-shellscript; charset=utf-8",
          "Cache-Control": "public, max-age=300",
        },
      });
    }

    if (path === "/uninstall.sh") {
      const script = await fetchScript("uninstall.sh");
      if (!script) return new Response("Not Found", { status: 404 });
      return new Response(script, {
        headers: {
          "Content-Type": "text/x-shellscript; charset=utf-8",
          "Cache-Control": "public, max-age=300",
        },
      });
    }

    if (path === "/logo.png") {
      const resp = await fetch(`${GITHUB_RAW}/apps/erispulse/logo.png`);
      if (resp.ok) {
        return new Response(resp.body, {
          headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=86400",
          },
        });
      }
      return new Response("Not Found", { status: 404 });
    }
    if (path === "/logo.svg") {
      return new Response(LOGO_SVG, {
        headers: {
          "Content-Type": "image/svg+xml; charset=utf-8",
          "Cache-Control": "public, max-age=86400",
        },
      });
    }

    return new Response(renderHTML(request, url), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
};
