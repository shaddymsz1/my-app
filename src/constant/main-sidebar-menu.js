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
    path: "/dashboard/project",
    active: true,
  },
  {
    title: "Leads",
    icon: UserCheck,
    type: "link",
    active: false,
    path: "/dashboard/leads",
    type: "link",
  },
  {
    title: "Quotes",
    icon: Info,
    type: "link",
    path: "/dashboard/project",
    active: false,
  },
  {
    title: "Customers",
    icon: Users,
    type: "link",
    path: "",
    active: false,
  },
  {
    title: "Marketing",
    icon: ShoppingCart,
    type: "link",
    path: "/dashboard/marketing",
    active: false,
  },
  {
    title: "Payment Reconciliations",
    icon: ShoppingBag,
    type: "link",
    path: "",
    active: false,
  },
  {
    title: "Reporting",
    icon: PenTool,
    type: "sub",
    active: false,
    children: [
      {
        path: "/dashboard/reporting",
        title: "report1",
        type: "link",
      },
      {
        path: "/dashboard/reporting2",
        title: "report2",
        type: "link",
      },
    ],
  },
  {
    title: "LMS",
    icon: PlayCircle,
    type: "sub",
    active: false,
    children: [
      { path: "/learning/learning-list", title: "Courses", type: "link" },
      {
        path: "/knowledgebase/knowledgebaseComponent",
        title: "KnowledgeBase",
        type: "link",
      },
      { path: "/faq/faqComponent", title: "Faqs", type: "link" },
    ],
  },
  {
    title: "Learning",
    icon: PlayCircle,
    type: "sub",
    active: false,
    children: [
      {
        path: "/admin/lms/create-section",
        title: "Create New Section",
        type: "link",
      },
      {
        path: "/admin/lms/create-video",
        title: "Create Video Form",
        type: "link",
      },
      { path: "/admin/lms/edit-video", title: "Edit Video Form", type: "link" },
      { path: "/admin/lms/section-list", title: "All list", type: "link" },
    ],
  },
  {
    title: "Settings",
    icon: UserPlus,
    type: "link",
    path: "",
    active: false,
  },
  {
    title: "Tools",
    icon: PenTool,
    type: "sub",
    path: "",
    active: false,
    children: [
      {
        path: "/admin/tools/workflow",
        title: "workflow",
        type: "link",
      },
      {
        path: "/admin/tools/dms",
        title: "DMS",
        type: "link",
      },
    ],
  },
  {
    title: "Manage Users",
    icon: UserCheck,
    type: "sub",
    path: "",
    active: false,
    children: [
      {
        path: "/dashboard/addUser",
        title: "Add User",
        type: "link",
      },
      {
        path: "/dashboard/addDepartment",
        title: "Add Department",
        type: "link",
      },
      {
        path: "/dashboard/addBranch",
        title: "Add Branch",
        type: "link",
      },
      {
        path: "/dashboard/addIC",
        title: "Add IC",
        type: "link",
      },
      {
        path: "/dashboard/permissions",
        title: "Permissions",
        type: "link",
      },
    ],
  },
];
