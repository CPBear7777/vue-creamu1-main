/*
=========================================================
* Vue 
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgPricing from "../../../../assets/img/1 (1).jpg";
import imgFeatures from "../../../../assets/img/1 (2).jpg";
import imgBlogPosts from "../../../../assets/img/1 (3).jpg";
import imgTestimonials from "../../../../assets/img/1 (4).jpg";
import imgTeam from "../../../../assets/img/1 (5).jpg";
import imgStat from "../../../../assets/img/1 (6).jpg";
import imgContent from "../../../../assets/img/1 (7).jpg";
import imgPagination from "../../../../assets/img/1 (8).jpg";
import imgAlert from "../../../../assets/img/1 (9).jpg";
import imgPopover from "../../../../assets/img/1 (10).jpg";
import imgModal from "../../../../assets/img/1 (11).jpg";
import imgDropdowns from "../../../../assets/img/1 (12).jpg";
import imgFAQ from "../../../../assets/img/1 (13).jpg";
import imgCTA from "../../../../assets/img/1 (14).jpg";
import imgApplications from "../../../../assets/img/1 (15).jpg";
import imgLogo from "../../../../assets/img/1 (16).jpg";
import imgnews1 from "../../../../assets/img/0.jpg";
import imgnews2 from "../../../../assets/img/dg1.jpg";



export default [
  {
    heading: "無角系列",
    description:"全款項熱銷中",
    items: [
      // {
      //   image: `https://p.turbosquid.com/ts-thumb/pD/vXemma/qrhw3vXC/26/jpg/1528624183/1920x1080/fit_q87/eaf62682fe73201c2e133793601640951c646a88/26.jpg`,
      //   title: "Page Headers",
      //   subtitle: "10 Examples",
      //   route: "page-headers",
      //   pro: false,
      // },
      // {
      //   image: imgFeatures,
      //   title: "Features",
      //   subtitle: "14 Examples",
      //   route: "page-features",
      //   pro: false,
      // },
      // {
      //   image: imgPricing,
      //   title: "Pricing",
      //   subtitle: "8 Examples",
      //   route: "presentation",
      //   pro: false,
      // },
      {
        image: imgFAQ,
    title: "大象",
        subtitle: "$499",
        route: "presentation",
        pro: false,
      },
      {
        image: imgModal,
    title: "河馬",
        subtitle: "$499",
        route: "ac-modals",
        pro: false,
      },
      {
        image: imgTestimonials,
    title: "猴子",
        subtitle: "$499",
        route: "presentation",
        pro: false,
      },
      {
        image: imgTeam,
    title: "無尾熊",
        subtitle: "$499",
        route: "presentation",
        pro: false,
      },
      {
        image: imgStat,
    title: "浣熊",
        subtitle: "$499",
        route: "presentation",
        pro: false,
      },
      {
        image: imgCTA,
    title: "樹懶",
        subtitle: "$499",
        route: "presentation",
        pro: false,
      },
      // {
      //   image: imgLogo,
      //   title: "Logo Areas",
      //   subtitle: "4 Examples",
      //   route: "presentation",
      //   pro: false,
      // },
      // {
      //   image: `${imagesPrefix}/footers.jpg`,
      //   title: "Footers",
      //   subtitle: "10 Examples",
      //   route: "presentation",
      //   pro: false,
      // },
      // {
      //   image: `${imagesPrefix}/general-cards.jpg`,
      //   title: "General Cards",
      //   subtitle: "9 Examples",
      //   route: "presentation",
      //   pro: false,
      // },
    ],
  },
  {
    heading: "有角系列",
    description: "聽說有角的更可愛，但也更貴(?",
    items: [
      {
        image: imgPricing,
title: "馴鹿",
        subtitle: "$499",
        route: "navigation-navbars",
        pro: false,
      },
      {
        image: imgApplications,
    title: "犀牛",
        subtitle: "$499",
        route: "presentation",
        pro: false,
      },
      {
        image: imgFeatures,
    title: "馴鹿",
        subtitle: "$499",
        route: "navigation-navtabs",
        pro: false,
      },
      {
        image: imgLogo,
    title: "水牛",
        subtitle: "$499",
        route: "navigation-pagination",
        pro: false,
      },
      {
        image: imgDropdowns,
    title: "山羊",
        subtitle: "$499",
        route: "el-dropdowns",
        pro: false,
      },
      {
        image: imgContent,
    title: "長頸鹿",
        subtitle: "$499",
        route: "presentation",
        pro: false,
      },
    ],
  },
  {
    heading: "居家動物風",
    description:
      "目前僅有的3款居家寵物，其他寵物即將陸續推出",
    items: [
      {
        image: imgAlert,
title: "斑點小狗",
        subtitle: "$499",
        route: "ac-alerts",
        pro: false,
      },
      {
        image: imgBlogPosts,
    title: "貓",
        subtitle: "$499",
        route: "presentation",
        pro: false,
      },
      {
        image: imgPopover,
    title: "松鼠",
        subtitle: "$499",
        route: "ac-tooltips-popovers",
        pro: false,
      },
    ],
  },
  {
    heading: "News",
    description:
      "所有最新消息都在此",
    items: [
      {
        image: imgnews1,
title: "全款項blender透視圖",
        subtitle: "2023/08/01",
        route: "el-buttons",
        pro: false,
      },
      {
        image: imgnews1,
        title: "全款項blender透視圖",
        subtitle: "2023/08/01",
        route: "el-avatars",
        pro: false,
      },
      {
        image: imgnews1,
        title: "全款項blender透視圖",
        subtitle: "2023/08/01",
        route: "el-toggles",
        pro: false,
      },
      {
        image: imgnews2,
        title: "全款項blender透視圖",
subtitle: "會員專屬資訊，請先登入以獲取最新資訊",
        route: "presentation",
        pro: true,
      },
      {
        image: imgnews1,
        title: "全款項blender透視圖",
        subtitle: "2023/08/01",
        route: "el-breadcrumbs",
        pro: false,
      },
      {
        image: imgnews1,
        title: "全款項blender透視圖",
        subtitle: "2023/08/01",
        route: "el-badges",
        pro: false,
      },
      {
        image: imgnews1,
        title: "全款項blender透視圖",
        subtitle: "2023/08/01",
        route: "el-progress-bars",
        pro: false,
      },
      {
        image: imgnews2,
        title: "全款項blender透視圖",
        subtitle: "會員專屬資訊，請先登入以獲取最新資訊",
        route: "presentation",
        pro: true,
      },
      {
        image: imgnews1,
        title: "全款項blender透視圖",
        subtitle: "2023/08/01",
        route: "el-typography",
        pro: false,
      },
    ],
  },
];
