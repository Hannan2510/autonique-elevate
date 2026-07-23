import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dsatn3T4.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-z44O9b_1.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Autonique — Modern clinic operations" },
			{
				name: "description",
				content: "Autonique is the operating system for modern clinics. Patient records, scheduling, revenue and team, in one calm workspace."
			},
			{
				name: "author",
				content: "Autonique"
			},
			{
				property: "og:title",
				content: "Autonique — Modern clinic operations"
			},
			{
				property: "og:description",
				content: "The operating system for modern clinics."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@autonique"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$5 = () => import("./routes-4OZ40F4P.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Autonique — Enterprise Clinical Operating System" },
		{
			name: "description",
			content: "The modern clinical OS for doctors, practice groups, and hospitals. Unifies patient scheduling, EMR, prescriptions, billing, and WhatsApp patient automation."
		},
		{
			property: "og:title",
			content: "Autonique — Enterprise Clinical OS"
		},
		{
			property: "og:description",
			content: "All-in-one clinical operating system for doctors, practice groups, and hospitals."
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("../_app-_VRMVRaf.mjs");
var Route$4 = createFileRoute("/_app")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("../_app.clinic-PjfgpWoe.mjs");
var Route$3 = createFileRoute("/_app/clinic")({
	head: () => ({ meta: [
		{ title: "Clinic Panel · Autonique" },
		{
			name: "description",
			content: "Manage clinic platform subscriptions, payment gateway and billing."
		},
		{
			property: "og:title",
			content: "Clinic Panel · Autonique"
		},
		{
			property: "og:description",
			content: "Manage clinic platform subscriptions, payment gateway and billing."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_app.customers-e8O3dp6E.mjs");
var Route$2 = createFileRoute("/_app/customers")({
	head: () => ({ meta: [
		{ title: "Patients · Autonique" },
		{
			name: "description",
			content: "Search, review and manage patient records across your clinic."
		},
		{
			property: "og:title",
			content: "Patients · Autonique"
		},
		{
			property: "og:description",
			content: "Search, review and manage patient records across your clinic."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("../_app.dashboard-xwHIIie3.mjs");
var Route$1 = createFileRoute("/_app/dashboard")({
	head: () => ({ meta: [
		{ title: "Overview · Autonique" },
		{
			name: "description",
			content: "Today's revenue, appointments and clinic activity at a glance."
		},
		{
			property: "og:title",
			content: "Overview · Autonique"
		},
		{
			property: "og:description",
			content: "Today's revenue, appointments and clinic activity at a glance."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_app.settings-QeOtUXVd.mjs");
var Route = createFileRoute("/_app/settings")({
	head: () => ({ meta: [
		{ title: "Settings · Autonique" },
		{
			name: "description",
			content: "Manage your profile, notifications, organization, billing and security."
		},
		{
			property: "og:title",
			content: "Settings · Autonique"
		},
		{
			property: "og:description",
			content: "Manage your profile, notifications, organization, billing and security."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var AppRoute = Route$4.update({
	id: "/_app",
	getParentRoute: () => Route$6
});
var AppRouteChildren = {
	AppClinicRoute: Route$3.update({
		id: "/clinic",
		path: "/clinic",
		getParentRoute: () => AppRoute
	}),
	AppCustomersRoute: Route$2.update({
		id: "/customers",
		path: "/customers",
		getParentRoute: () => AppRoute
	}),
	AppDashboardRoute: Route$1.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => AppRoute
	}),
	AppSettingsRoute: Route.update({
		id: "/settings",
		path: "/settings",
		getParentRoute: () => AppRoute
	})
};
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRoute._addFileChildren(AppRouteChildren)
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
