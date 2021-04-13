import {
    Home,
    Info,
    PenTool,
    PlayCircle,
    ShoppingBag,
    ShoppingCart,
    UserCheck,
    UserPlus,
    Users,
  } from "react-feather";

  export const MainSideBarMenu = [
    {
      title: "Dashboard",
      icon: Home,
      type: "link",
      path: "/userDashboard/default",
      active: true,
    },
    {
      title: "Buy",
      icon: UserCheck,
      type: "link",
      active: false,
      path: "/userDashboard/leads",
      type: "link",
    },
    {
      title: "Policies",
      icon: PenTool,
      type: "sub",
      active: false,
      children: [
        {
          path: "/userDashboard/sold-policies", title: "Sold", type: "link"
        },
        {
          path: "/userDashboard/saved-policies", title: "Saved Policies", type: "link"
        },
        {
          path: "/userDashboard/renewals", title: "Renewals", type: "link"
        },
        {
          path: "/userDashboard/endorsement", title: "Endorsement", type: "link"
        },
        {
          path: "/userDashboard/policy-reminder", title: "Policy Reminder", type: "link"
        },
      ]
    },
    {
        title: "CRM",
        icon: Info,
        type: "link",
        path: "dashboard/emailSetting",
        active: false,
      },
      {
        title: "Reports",
        icon: PenTool,
        type: "sub",
        active: false,
        children: [
          {
            path: "/userDashboard/earnings", title: "Earnings", type: "link"
          },
          {
            path: "/userDashboard/products", title: "Products", type: "link"
          },
          {
            path: "/userDashboard/ICreports", title: "IC", type: "link"
          },
        ]
      },
      {
        title: "GST Transaction",
        icon: Info,
        type: "link",
        path: "/userDashboard/project",
        active: false,
      },
      {
        title: "Support",
        icon: Info,
        type: "link",
        path: "/userDashboard/project",
        active: false,
      },
      {
        title: "Reconcilation",
        icon: Info,
        type: "link",
        path: "/userDashboard/project",
        active: false,
      },
      {
        title: "Settings",
        icon: Info,
        type: "link",
        path: "/userDashboard/project",
        active: false,
      },
      {
        title: "Configuration",
        icon: Info,
        type: "link",
        path: "/userDashboard/project",
        active: false,
      },
]