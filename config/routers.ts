interface RouterConfig {
  path: string;
  component?: string;
  routes?: RouterConfig[];
  redirect?: string;
  wrappers?: any;
  name?: string;
  icon?: string;
  hideInBreadcrumb?: boolean;
  layout?: boolean;
  menuRender?: boolean;
  menuHeaderRender?: boolean;
  headerRender?: boolean;
  hideInMenu?: boolean;
  access?: string;
}
const routers: RouterConfig[] = [
  { path: "/", component: "index" ,name:"首页"},
  { path: "/docs", component: "docs" ,name:"文档"},

];
export default routers;
