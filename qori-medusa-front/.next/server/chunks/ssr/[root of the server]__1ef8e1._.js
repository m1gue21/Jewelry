module.exports = {

"[externals]/ [external] (util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("util");

module.exports = mod;
}}),
"[project]/src/lib/config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "sdk": (()=>sdk)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@medusajs/js-sdk/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@medusajs/js-sdk/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
;
// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = "http://localhost:9000";
if (process.env.MEDUSA_BACKEND_URL) {
    MEDUSA_BACKEND_URL = process.env.MEDUSA_BACKEND_URL;
}
const sdk = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]({
    baseUrl: MEDUSA_BACKEND_URL,
    debug: ("TURBOPACK compile-time value", "development") === "development",
    publishableKey: ("TURBOPACK compile-time value", "pk_5f5db1980f34664ef1ba1670914445569ff8ad6601880892c77f58b6ae7403a4")
});
}}),
"[project]/src/lib/util/medusa-error.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>medusaError)
});
function medusaError(error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const u = new URL(error.config.url, error.config.baseURL);
        console.error("Resource:", u.toString());
        console.error("Response data:", error.response.data);
        console.error("Status code:", error.response.status);
        console.error("Headers:", error.response.headers);
        // Extracting the error message from the response data
        const message = error.response.data.message || error.response.data;
        throw new Error(message.charAt(0).toUpperCase() + message.slice(1) + ".");
    } else if (error.request) {
        // The request was made but no response was received
        throw new Error("No response received: " + error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        throw new Error("Error setting up the request: " + error.message);
    }
}
}}),
"[project]/src/lib/data/cookies.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getAuthHeaders": (()=>getAuthHeaders),
    "getCacheOptions": (()=>getCacheOptions),
    "getCacheTag": (()=>getCacheTag),
    "getCartId": (()=>getCartId),
    "removeAuthToken": (()=>removeAuthToken),
    "removeCartId": (()=>removeCartId),
    "setAuthToken": (()=>setAuthToken),
    "setCartId": (()=>setCartId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
const getAuthHeaders = async ()=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookies.get("_medusa_jwt")?.value;
    if (!token) {
        return {};
    }
    return {
        authorization: `Bearer ${token}`
    };
};
const getCacheTag = async (tag)=>{
    try {
        const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        const cacheId = cookies.get("_medusa_cache_id")?.value;
        if (!cacheId) {
            return "";
        }
        return `${tag}-${cacheId}`;
    } catch (error) {
        return "";
    }
};
const getCacheOptions = async (tag)=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const cacheTag = await getCacheTag(tag);
    if (!cacheTag) {
        return {};
    }
    return {
        tags: [
            `${cacheTag}`
        ]
    };
};
const setAuthToken = async (token)=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookies.set("_medusa_jwt", token, {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        sameSite: "strict",
        secure: ("TURBOPACK compile-time value", "development") === "production"
    });
};
const removeAuthToken = async ()=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookies.set("_medusa_jwt", "", {
        maxAge: -1
    });
};
const getCartId = async ()=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return cookies.get("_medusa_cart_id")?.value;
};
const setCartId = async (cartId)=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookies.set("_medusa_cart_id", cartId, {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        sameSite: "strict",
        secure: ("TURBOPACK compile-time value", "development") === "production"
    });
};
const removeCartId = async ()=>{
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookies.set("_medusa_cart_id", "", {
        maxAge: -1
    });
};
}}),
"[project]/src/lib/data/regions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f47d20f64b79082f86c05969ea3f2c65ea297a1b9":"listRegions","7f4bb40c409e8b383fba73aa2d40b8f4fcc6d8941b":"getRegion","7fee8f36f215429faddffa0f8bc9ec323f7af36cbc":"retrieveRegion"} */ __turbopack_esm__({
    "getRegion": (()=>getRegion),
    "listRegions": (()=>listRegions),
    "retrieveRegion": (()=>retrieveRegion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/util/medusa-error.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/data/cookies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const listRegions = async ()=>{
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("regions")
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/regions`, {
        method: "GET",
        next,
        cache: "force-cache"
    }).then(({ regions })=>regions).catch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
};
const retrieveRegion = async (id)=>{
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])([
            "regions",
            id
        ].join("-"))
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/regions/${id}`, {
        method: "GET",
        next,
        cache: "force-cache"
    }).then(({ region })=>region).catch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
};
const regionMap = new Map();
const getRegion = async (countryCode)=>{
    try {
        if (regionMap.has(countryCode)) {
            return regionMap.get(countryCode);
        }
        const regions = await listRegions();
        if (!regions) {
            return null;
        }
        regions.forEach((region)=>{
            region.countries?.forEach((c)=>{
                regionMap.set(c?.iso_2 ?? "", region);
            });
        });
        const region = countryCode ? regionMap.get(countryCode) : regionMap.get("us");
        return region;
    } catch (e) {
        return null;
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    listRegions,
    retrieveRegion,
    getRegion
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listRegions, "7f47d20f64b79082f86c05969ea3f2c65ea297a1b9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(retrieveRegion, "7fee8f36f215429faddffa0f8bc9ec323f7af36cbc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRegion, "7f4bb40c409e8b383fba73aa2d40b8f4fcc6d8941b", null);
}}),
"[project]/src/lib/data/cart.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"00ab8eb78b0b70bf6ce1f3c47f85f43cddd76dad90":"listCartOptions","402103384a200fec4ca2ef2f3421b390996baa1e7f":"deleteLineItem","403abac2f9949eafbadcd3de2083f4c8b45b7d64ad":"placeOrder","4047d7f250e35763b4095c5266c279b6ded5a79b0c":"setShippingMethod","404f984293a8f60e4e588e26a29a413c275c495a17":"updateLineItem","405bc0d3eb68aed6c4ed2118cd86dfb4d3160443e9":"addToCart","406502743290dc6ce56278e714fca36bb72f1186a7":"removeDiscount","409dd3001228ea962c81f1b694b6c073200c94d647":"updateCart","40c01b9e426a71f9774d1a00cf70acd03f3c197173":"getOrSetCart","40d6ec036f86a3ed15851f3bc9c171aca0c62ffbff":"applyPromotions","40f29a66e7fecaa55f04418daf00e74e1a26807e99":"retrieveCart","40f7fab38fca5bb649d23ef192c8c37cbd646657af":"applyGiftCard","60299119670ad665638d5affabbaba036ce144879e":"setAddresses","603156a0d7acb0f91d49ab41605149cdfba1961c09":"updateRegion","60643cb7d7146f660764117092ce54fd45c46e1701":"initiatePaymentSession","60976a8fd5fa235c6840213fb05627259c82480d66":"submitPromotionForm","609f822710f0ddfe57ab41b973b4308a2e2800f5f8":"removeGiftCard"} */ __turbopack_esm__({
    "addToCart": (()=>addToCart),
    "applyGiftCard": (()=>applyGiftCard),
    "applyPromotions": (()=>applyPromotions),
    "deleteLineItem": (()=>deleteLineItem),
    "getOrSetCart": (()=>getOrSetCart),
    "initiatePaymentSession": (()=>initiatePaymentSession),
    "listCartOptions": (()=>listCartOptions),
    "placeOrder": (()=>placeOrder),
    "removeDiscount": (()=>removeDiscount),
    "removeGiftCard": (()=>removeGiftCard),
    "retrieveCart": (()=>retrieveCart),
    "setAddresses": (()=>setAddresses),
    "setShippingMethod": (()=>setShippingMethod),
    "submitPromotionForm": (()=>submitPromotionForm),
    "updateCart": (()=>updateCart),
    "updateLineItem": (()=>updateLineItem),
    "updateRegion": (()=>updateRegion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/util/medusa-error.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/data/cookies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$regions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/data/regions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function retrieveCart(cartId) {
    const id = cartId || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (!id) {
        return null;
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("carts")
    };
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/carts/${id}`, {
        method: "GET",
        query: {
            fields: "*items, *region, *items.product, *items.variant, *items.thumbnail, *items.metadata, +items.total, *promotions, +shipping_methods.name"
        },
        headers,
        next,
        cache: "force-cache"
    }).then(({ cart })=>cart).catch(()=>null);
}
async function getOrSetCart(countryCode) {
    const region = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$regions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRegion"])(countryCode);
    if (!region) {
        throw new Error(`Region not found for country code: ${countryCode}`);
    }
    let cart = await retrieveCart();
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    if (!cart) {
        const cartResp = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.create({
            region_id: region.id
        }, {}, headers);
        cart = cartResp.cart;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setCartId"])(cart.id);
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
    }
    if (cart && cart?.region_id !== region.id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.update(cart.id, {
            region_id: region.id
        }, {}, headers);
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
    }
    return cart;
}
async function updateCart(data) {
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (!cartId) {
        throw new Error("No existing cart found, please create one before updating");
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.update(cartId, data, {}, headers).then(async ({ cart })=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        const fulfillmentCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("fulfillment");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(fulfillmentCacheTag);
        return cart;
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function addToCart({ variantId, quantity, countryCode }) {
    if (!variantId) {
        throw new Error("Missing variant ID when adding to cart");
    }
    const cart = await getOrSetCart(countryCode);
    if (!cart) {
        throw new Error("Error retrieving or creating cart");
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.createLineItem(cart.id, {
        variant_id: variantId,
        quantity
    }, {}, headers).then(async ()=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        const fulfillmentCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("fulfillment");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(fulfillmentCacheTag);
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function updateLineItem({ lineId, quantity }) {
    if (!lineId) {
        throw new Error("Missing lineItem ID when updating line item");
    }
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (!cartId) {
        throw new Error("Missing cart ID when updating line item");
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.updateLineItem(cartId, lineId, {
        quantity
    }, {}, headers).then(async ()=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        const fulfillmentCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("fulfillment");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(fulfillmentCacheTag);
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function deleteLineItem(lineId) {
    if (!lineId) {
        throw new Error("Missing lineItem ID when deleting line item");
    }
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (!cartId) {
        throw new Error("Missing cart ID when deleting line item");
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.deleteLineItem(cartId, lineId, headers).then(async ()=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        const fulfillmentCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("fulfillment");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(fulfillmentCacheTag);
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function setShippingMethod({ cartId, shippingMethodId }) {
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.addShippingMethod(cartId, {
        option_id: shippingMethodId
    }, {}, headers).then(async ()=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function initiatePaymentSession(cart, data) {
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.payment.initiatePaymentSession(cart, data, {}, headers).then(async (resp)=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        return resp;
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function applyPromotions(codes) {
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (!cartId) {
        throw new Error("No existing cart found");
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.update(cartId, {
        promo_codes: codes
    }, {}, headers).then(async ()=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        const fulfillmentCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("fulfillment");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(fulfillmentCacheTag);
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
async function applyGiftCard(code) {
//   const cartId = getCartId()
//   if (!cartId) return "No cartId cookie found"
//   try {
//     await updateCart(cartId, { gift_cards: [{ code }] }).then(() => {
//       revalidateTag("cart")
//     })
//   } catch (error: any) {
//     throw error
//   }
}
async function removeDiscount(code) {
// const cartId = getCartId()
// if (!cartId) return "No cartId cookie found"
// try {
//   await deleteDiscount(cartId, code)
//   revalidateTag("cart")
// } catch (error: any) {
//   throw error
// }
}
async function removeGiftCard(codeToRemove, giftCards) {
//   const cartId = getCartId()
//   if (!cartId) return "No cartId cookie found"
//   try {
//     await updateCart(cartId, {
//       gift_cards: [...giftCards]
//         .filter((gc) => gc.code !== codeToRemove)
//         .map((gc) => ({ code: gc.code })),
//     }).then(() => {
//       revalidateTag("cart")
//     })
//   } catch (error: any) {
//     throw error
//   }
}
async function submitPromotionForm(currentState, formData) {
    const code = formData.get("code");
    try {
        await applyPromotions([
            code
        ]);
    } catch (e) {
        return e.message;
    }
}
async function setAddresses(currentState, formData) {
    try {
        if (!formData) {
            throw new Error("No form data found when setting addresses");
        }
        const cartId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
        if (!cartId) {
            throw new Error("No existing cart found when setting addresses");
        }
        const data = {
            shipping_address: {
                first_name: formData.get("shipping_address.first_name"),
                last_name: formData.get("shipping_address.last_name"),
                address_1: formData.get("shipping_address.address_1"),
                address_2: "",
                company: formData.get("shipping_address.company"),
                postal_code: formData.get("shipping_address.postal_code"),
                city: formData.get("shipping_address.city"),
                country_code: formData.get("shipping_address.country_code"),
                province: formData.get("shipping_address.province"),
                phone: formData.get("shipping_address.phone")
            },
            email: formData.get("email")
        };
        const sameAsBilling = formData.get("same_as_billing");
        if (sameAsBilling === "on") data.billing_address = data.shipping_address;
        if (sameAsBilling !== "on") data.billing_address = {
            first_name: formData.get("billing_address.first_name"),
            last_name: formData.get("billing_address.last_name"),
            address_1: formData.get("billing_address.address_1"),
            address_2: "",
            company: formData.get("billing_address.company"),
            postal_code: formData.get("billing_address.postal_code"),
            city: formData.get("billing_address.city"),
            country_code: formData.get("billing_address.country_code"),
            province: formData.get("billing_address.province"),
            phone: formData.get("billing_address.phone")
        };
        await updateCart(data);
    } catch (e) {
        return e.message;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/${formData.get("shipping_address.country_code")}/checkout?step=delivery`);
}
async function placeOrder(cartId) {
    const id = cartId || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (!id) {
        throw new Error("No existing cart found when placing an order");
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    const cartRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.complete(id, {}, headers).then(async (cartRes)=>{
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
        return cartRes;
    }).catch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
    if (cartRes?.type === "order") {
        const countryCode = cartRes.order.shipping_address?.country_code?.toLowerCase();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeCartId"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/${countryCode}/order/${cartRes?.order.id}/confirmed`);
    }
    return cartRes.cart;
}
async function updateRegion(countryCode, currentPath) {
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    const region = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$regions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRegion"])(countryCode);
    if (!region) {
        throw new Error(`Region not found for country code: ${countryCode}`);
    }
    if (cartId) {
        await updateCart({
            region_id: region.id
        });
        const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
    }
    const regionCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("regions");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(regionCacheTag);
    const productsCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("products");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(productsCacheTag);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/${countryCode}${currentPath}`);
}
async function listCartOptions() {
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("shippingOptions")
    };
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch("/store/shipping-options", {
        query: {
            cart_id: cartId
        },
        next,
        headers,
        cache: "force-cache"
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    retrieveCart,
    getOrSetCart,
    updateCart,
    addToCart,
    updateLineItem,
    deleteLineItem,
    setShippingMethod,
    initiatePaymentSession,
    applyPromotions,
    applyGiftCard,
    removeDiscount,
    removeGiftCard,
    submitPromotionForm,
    setAddresses,
    placeOrder,
    updateRegion,
    listCartOptions
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(retrieveCart, "40f29a66e7fecaa55f04418daf00e74e1a26807e99", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrSetCart, "40c01b9e426a71f9774d1a00cf70acd03f3c197173", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCart, "409dd3001228ea962c81f1b694b6c073200c94d647", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addToCart, "405bc0d3eb68aed6c4ed2118cd86dfb4d3160443e9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLineItem, "404f984293a8f60e4e588e26a29a413c275c495a17", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLineItem, "402103384a200fec4ca2ef2f3421b390996baa1e7f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setShippingMethod, "4047d7f250e35763b4095c5266c279b6ded5a79b0c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(initiatePaymentSession, "60643cb7d7146f660764117092ce54fd45c46e1701", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(applyPromotions, "40d6ec036f86a3ed15851f3bc9c171aca0c62ffbff", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(applyGiftCard, "40f7fab38fca5bb649d23ef192c8c37cbd646657af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeDiscount, "406502743290dc6ce56278e714fca36bb72f1186a7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeGiftCard, "609f822710f0ddfe57ab41b973b4308a2e2800f5f8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitPromotionForm, "60976a8fd5fa235c6840213fb05627259c82480d66", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setAddresses, "60299119670ad665638d5affabbaba036ce144879e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(placeOrder, "403abac2f9949eafbadcd3de2083f4c8b45b7d64ad", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateRegion, "603156a0d7acb0f91d49ab41605149cdfba1961c09", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listCartOptions, "00ab8eb78b0b70bf6ce1f3c47f85f43cddd76dad90", null);
}}),
"[project]/src/lib/data/customer.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"00d2a9beeaf3ea0c8e03bbefb5c91ebc4db229771b":"transferCart","40a18acd1cbb3e63083276b97262e9abe4a8ace3ec":"signout","6046214a31a89da81720c63fa8761ffdfff35b21d3":"signup","607e6ea6ae6ba4c9d99bb0657abde969d5eea30d9e":"login","7f14a7ccdef050f54c633babcb886df8eac5e7c7c9":"updateCustomerAddress","7f3734a14846199f910a175e23c964c7b2fda404d1":"updateCustomer","7f42af98b42bc623e20bfafe682bf4a2c6603cdf6d":"addCustomerAddress","7f4f47e91c492bd8d10c91446f7fa7386b86b4f27e":"deleteCustomerAddress","7fc387bab5b1da571c498156cecd93e246120c42fe":"retrieveCustomer"} */ __turbopack_esm__({
    "addCustomerAddress": (()=>addCustomerAddress),
    "deleteCustomerAddress": (()=>deleteCustomerAddress),
    "login": (()=>login),
    "retrieveCustomer": (()=>retrieveCustomer),
    "signout": (()=>signout),
    "signup": (()=>signup),
    "transferCart": (()=>transferCart),
    "updateCustomer": (()=>updateCustomer),
    "updateCustomerAddress": (()=>updateCustomerAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/util/medusa-error.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/data/cookies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const retrieveCustomer = async ()=>{
    const authHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])();
    if (!authHeaders) return null;
    const headers = {
        ...authHeaders
    };
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("customers")
    };
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/customers/me`, {
        method: "GET",
        query: {
            fields: "*orders"
        },
        headers,
        next,
        cache: "force-cache"
    }).then(({ customer })=>customer).catch(()=>null);
};
const updateCustomer = async (body)=>{
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    const updateRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.customer.update(body, {}, headers).then(({ customer })=>customer).catch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$medusa$2d$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
    const cacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("customers");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cacheTag);
    return updateRes;
};
async function signup(_currentState, formData) {
    const password = formData.get("password");
    const customerForm = {
        email: formData.get("email"),
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        phone: formData.get("phone")
    };
    try {
        const token = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].auth.register("customer", "emailpass", {
            email: customerForm.email,
            password: password
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setAuthToken"])(token);
        const headers = {
            ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
        };
        const { customer: createdCustomer } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.customer.create(customerForm, {}, headers);
        const loginToken = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].auth.login("customer", "emailpass", {
            email: customerForm.email,
            password
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setAuthToken"])(loginToken);
        const customerCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("customers");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(customerCacheTag);
        await transferCart();
        return createdCustomer;
    } catch (error) {
        return error.toString();
    }
}
async function login(_currentState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].auth.login("customer", "emailpass", {
            email,
            password
        }).then(async (token)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setAuthToken"])(token);
            const customerCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("customers");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(customerCacheTag);
        });
    } catch (error) {
        return error.toString();
    }
    try {
        await transferCart();
    } catch (error) {
        return error.toString();
    }
}
async function signout(countryCode) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].auth.logout();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeAuthToken"])();
    const customerCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("customers");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(customerCacheTag);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/${countryCode}/account`);
}
async function transferCart() {
    const cartId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartId"])();
    if (!cartId) {
        return;
    }
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.cart.transferCart(cartId, {}, headers);
    const cartCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("carts");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(cartCacheTag);
}
const addCustomerAddress = async (currentState, formData)=>{
    const isDefaultBilling = currentState.isDefaultBilling || false;
    const isDefaultShipping = currentState.isDefaultShipping || false;
    const address = {
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        company: formData.get("company"),
        address_1: formData.get("address_1"),
        address_2: formData.get("address_2"),
        city: formData.get("city"),
        postal_code: formData.get("postal_code"),
        province: formData.get("province"),
        country_code: formData.get("country_code"),
        phone: formData.get("phone"),
        is_default_billing: isDefaultBilling,
        is_default_shipping: isDefaultShipping
    };
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.customer.createAddress(address, {}, headers).then(async ({ customer })=>{
        const customerCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("customers");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(customerCacheTag);
        return {
            success: true,
            error: null
        };
    }).catch((err)=>{
        return {
            success: false,
            error: err.toString()
        };
    });
};
const deleteCustomerAddress = async (addressId)=>{
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.customer.deleteAddress(addressId, headers).then(async ()=>{
        const customerCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("customers");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(customerCacheTag);
        return {
            success: true,
            error: null
        };
    }).catch((err)=>{
        return {
            success: false,
            error: err.toString()
        };
    });
};
const updateCustomerAddress = async (currentState, formData)=>{
    const addressId = currentState.addressId || formData.get("addressId");
    if (!addressId) {
        return {
            success: false,
            error: "Address ID is required"
        };
    }
    const address = {
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        company: formData.get("company"),
        address_1: formData.get("address_1"),
        address_2: formData.get("address_2"),
        city: formData.get("city"),
        postal_code: formData.get("postal_code"),
        province: formData.get("province"),
        country_code: formData.get("country_code")
    };
    const phone = formData.get("phone");
    if (phone) {
        address.phone = phone;
    }
    const headers = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthHeaders"])()
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].store.customer.updateAddress(addressId, address, {}, headers).then(async ()=>{
        const customerCacheTag = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheTag"])("customers");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(customerCacheTag);
        return {
            success: true,
            error: null
        };
    }).catch((err)=>{
        return {
            success: false,
            error: err.toString()
        };
    });
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    retrieveCustomer,
    updateCustomer,
    signup,
    login,
    signout,
    transferCart,
    addCustomerAddress,
    deleteCustomerAddress,
    updateCustomerAddress
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(retrieveCustomer, "7fc387bab5b1da571c498156cecd93e246120c42fe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCustomer, "7f3734a14846199f910a175e23c964c7b2fda404d1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signup, "6046214a31a89da81720c63fa8761ffdfff35b21d3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "607e6ea6ae6ba4c9d99bb0657abde969d5eea30d9e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signout, "40a18acd1cbb3e63083276b97262e9abe4a8ace3ec", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(transferCart, "00d2a9beeaf3ea0c8e03bbefb5c91ebc4db229771b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addCustomerAddress, "7f42af98b42bc623e20bfafe682bf4a2c6603cdf6d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCustomerAddress, "7f4f47e91c492bd8d10c91446f7fa7386b86b4f27e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCustomerAddress, "7f14a7ccdef050f54c633babcb886df8eac5e7c7c9", null);
}}),
"[project]/src/modules/layout/components/cart-mismatch-banner/index.tsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/modules/layout/components/cart-mismatch-banner/index.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/layout/components/cart-mismatch-banner/index.tsx <module evaluation>", "default");
}}),
"[project]/src/modules/layout/components/cart-mismatch-banner/index.tsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/modules/layout/components/cart-mismatch-banner/index.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/layout/components/cart-mismatch-banner/index.tsx", "default");
}}),
"[project]/src/modules/layout/components/cart-mismatch-banner/index.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$mismatch$2d$banner$2f$index$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/modules/layout/components/cart-mismatch-banner/index.tsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$mismatch$2d$banner$2f$index$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/src/modules/layout/components/cart-mismatch-banner/index.tsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$mismatch$2d$banner$2f$index$2e$tsx__$28$client__proxy$29$__);
}}),
"[project]/src/lib/data/categories.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getCategoryByHandle": (()=>getCategoryByHandle),
    "listCategories": (()=>listCategories)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/data/cookies.ts [app-rsc] (ecmascript)");
;
;
const listCategories = async (query)=>{
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("categories")
    };
    const limit = query?.limit || 100;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch("/store/product-categories", {
        query: {
            fields: "*category_children, *products, *parent_category, *parent_category.parent_category",
            limit,
            ...query
        },
        next,
        cache: "force-cache"
    }).then(({ product_categories })=>product_categories);
};
const getCategoryByHandle = async (categoryHandle)=>{
    const handle = `${categoryHandle.join("/")}`;
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("categories")
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/product-categories`, {
        query: {
            fields: "*category_children, *products",
            handle
        },
        next,
        cache: "force-cache"
    }).then(({ product_categories })=>product_categories[0]);
};
}}),
"[project]/src/lib/data/collections.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7fc3e7893dd4295f14598752b78d6c82addecb0aaf":"listCollections","7fc9daab24a902b2e94bfa1b691b1446a1d66609c8":"getCollectionByHandle","7fd2d4f764d0400cd66bd7fe676d5e154061b35a95":"retrieveCollection"} */ __turbopack_esm__({
    "getCollectionByHandle": (()=>getCollectionByHandle),
    "listCollections": (()=>listCollections),
    "retrieveCollection": (()=>retrieveCollection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/data/cookies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const retrieveCollection = async (id)=>{
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("collections")
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/collections/${id}`, {
        next,
        cache: "force-cache"
    }).then(({ collection })=>collection);
};
const listCollections = async (queryParams = {})=>{
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("collections")
    };
    queryParams.limit = queryParams.limit || "100";
    queryParams.offset = queryParams.offset || "0";
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch("/store/collections", {
        query: queryParams,
        next,
        cache: "force-cache"
    }).then(({ collections })=>({
            collections,
            count: collections.length
        }));
};
const getCollectionByHandle = async (handle)=>{
    const next = {
        ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheOptions"])("collections")
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].client.fetch(`/store/collections`, {
        query: {
            handle,
            fields: "*products"
        },
        next,
        cache: "force-cache"
    }).then(({ collections })=>collections[0]);
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    retrieveCollection,
    listCollections,
    getCollectionByHandle
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(retrieveCollection, "7fd2d4f764d0400cd66bd7fe676d5e154061b35a95", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(listCollections, "7fc3e7893dd4295f14598752b78d6c82addecb0aaf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCollectionByHandle, "7fc9daab24a902b2e94bfa1b691b1446a1d66609c8", null);
}}),
"[project]/src/modules/common/components/localized-client-link/index.tsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/modules/common/components/localized-client-link/index.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/common/components/localized-client-link/index.tsx <module evaluation>", "default");
}}),
"[project]/src/modules/common/components/localized-client-link/index.tsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/modules/common/components/localized-client-link/index.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/common/components/localized-client-link/index.tsx", "default");
}}),
"[project]/src/modules/common/components/localized-client-link/index.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/modules/common/components/localized-client-link/index.tsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/src/modules/common/components/localized-client-link/index.tsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$28$client__proxy$29$__);
}}),
"[project]/src/modules/common/icons/medusa.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const Medusa = ({ size = "20", color = "#9CA3AF", ...attributes })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        ...attributes,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15.2447 2.92183L11.1688 0.576863C9.83524 -0.192288 8.20112 -0.192288 6.86753 0.576863L2.77285 2.92183C1.45804 3.69098 0.631592 5.11673 0.631592 6.63627V11.345C0.631592 12.8833 1.45804 14.2903 2.77285 15.0594L6.84875 17.4231C8.18234 18.1923 9.81646 18.1923 11.15 17.4231L15.2259 15.0594C16.5595 14.2903 17.3672 12.8833 17.3672 11.345V6.63627C17.4048 5.11673 16.5783 3.69098 15.2447 2.92183ZM9.00879 13.1834C6.69849 13.1834 4.82019 11.3075 4.82019 9C4.82019 6.69255 6.69849 4.81657 9.00879 4.81657C11.3191 4.81657 13.2162 6.69255 13.2162 9C13.2162 11.3075 11.3379 13.1834 9.00879 13.1834Z",
            fill: color
        }, void 0, false, {
            fileName: "[project]/src/modules/common/icons/medusa.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/modules/common/icons/medusa.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Medusa;
}}),
"[project]/src/modules/common/icons/nextjs.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const NextJs = ({ size = "20", color = "#9CA3AF", ...attributes })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        ...attributes,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8.41117 0.0131402C8.3725 0.0166554 8.24946 0.0289589 8.13873 0.0377471C5.58488 0.267998 3.19273 1.64599 1.67764 3.76395C0.833977 4.94157 0.294381 6.27737 0.090495 7.69227C0.0184318 8.18617 0.00964355 8.33206 0.00964355 9.00172C0.00964355 9.67138 0.0184318 9.81726 0.090495 10.3112C0.579119 13.6876 2.98181 16.5244 6.24048 17.5755C6.82402 17.7636 7.43919 17.8919 8.13873 17.9692C8.41117 17.9991 9.58879 17.9991 9.86122 17.9692C11.0687 17.8356 12.0917 17.5368 13.1006 17.0218C13.2552 16.9427 13.2851 16.9216 13.264 16.9041C13.25 16.8935 12.5908 16.0094 11.7999 14.9408L10.3621 12.9986L8.56057 10.3323C7.56926 8.86638 6.75371 7.66767 6.74668 7.66767C6.73965 7.66591 6.73262 8.85056 6.7291 10.2971C6.72383 12.8299 6.72207 12.9318 6.69044 12.9916C6.64474 13.0777 6.60958 13.1128 6.53576 13.1515C6.47952 13.1796 6.43031 13.1849 6.1649 13.1849H5.86083L5.77998 13.1339C5.72725 13.1005 5.68858 13.0566 5.66222 13.0056L5.62531 12.9265L5.62882 9.40246L5.63409 5.87663L5.68858 5.80808C5.7167 5.77117 5.77646 5.72372 5.81865 5.70087C5.89071 5.66571 5.91883 5.6622 6.2229 5.6622C6.58146 5.6622 6.64122 5.67626 6.73438 5.7782C6.76074 5.80632 7.73623 7.27571 8.90331 9.04566C10.0704 10.8156 11.6663 13.2324 12.4502 14.4188L13.8739 16.5754L13.946 16.5279C14.584 16.1131 15.2589 15.5226 15.7933 14.9074C16.9305 13.6015 17.6634 12.009 17.9095 10.3112C17.9815 9.81726 17.9903 9.67138 17.9903 9.00172C17.9903 8.33206 17.9815 8.18617 17.9095 7.69227C17.4208 4.31585 15.0181 1.47901 11.7595 0.427943C11.1847 0.241633 10.5731 0.113326 9.88758 0.0359895C9.71885 0.0184131 8.55705 -0.000920974 8.41117 0.0131402ZM12.0917 5.45128C12.176 5.49346 12.2446 5.57432 12.2692 5.65868C12.2832 5.70438 12.2868 6.68163 12.2832 8.88395L12.278 12.0442L11.7208 11.19L11.1619 10.3358V8.03853C11.1619 6.55332 11.1689 5.71844 11.1795 5.67802C11.2076 5.57959 11.2691 5.50225 11.3535 5.45655C11.4255 5.41964 11.4519 5.41613 11.7278 5.41613C11.988 5.41613 12.0337 5.41964 12.0917 5.45128Z",
            fill: color
        }, void 0, false, {
            fileName: "[project]/src/modules/common/icons/nextjs.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/modules/common/icons/nextjs.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = NextJs;
}}),
"[project]/src/modules/layout/components/medusa-cta/index.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$icons$2f$medusa$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/modules/common/icons/medusa.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$icons$2f$nextjs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/modules/common/icons/nextjs.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$medusajs$2f$ui$2f$dist$2f$esm$2f$components$2f$text$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@medusajs/ui/dist/esm/components/text/text.js [app-rsc] (ecmascript)");
;
;
;
;
const MedusaCTA = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$medusajs$2f$ui$2f$dist$2f$esm$2f$components$2f$text$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
        className: "flex gap-x-2 txt-compact-small-plus items-center",
        children: [
            "Powered by",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://www.medusajs.com",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$icons$2f$medusa$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    fill: "#9ca3af",
                    className: "fill-[#9ca3af]"
                }, void 0, false, {
                    fileName: "[project]/src/modules/layout/components/medusa-cta/index.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/layout/components/medusa-cta/index.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            "&",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://nextjs.org",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$icons$2f$nextjs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    fill: "#9ca3af"
                }, void 0, false, {
                    fileName: "[project]/src/modules/layout/components/medusa-cta/index.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/layout/components/medusa-cta/index.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/layout/components/medusa-cta/index.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = MedusaCTA;
}}),
"[project]/src/modules/layout/templates/footer/index.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/data/categories.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$collections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/data/collections.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/modules/common/components/localized-client-link/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$medusa$2d$cta$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/modules/layout/components/medusa-cta/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$medusajs$2f$ui$2f$dist$2f$esm$2f$utils$2f$clx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@medusajs/ui/dist/esm/utils/clx.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$medusajs$2f$ui$2f$dist$2f$esm$2f$components$2f$text$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@medusajs/ui/dist/esm/components/text/text.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function Footer() {
    const { collections } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$collections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listCollections"])({
        fields: "*products"
    });
    const productCategories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listCategories"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-ui-border-base w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-container flex flex-col w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase",
                                children: "Qori Joyeria"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3",
                            children: [
                                productCategories && productCategories?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "txt-small-plus txt-ui-fg-base",
                                            children: "Categories"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "grid grid-cols-1 gap-2",
                                            "data-testid": "footer-categories",
                                            children: productCategories?.slice(0, 6).map((c)=>{
                                                if (c.parent_category) {
                                                    return;
                                                }
                                                const children = c.category_children?.map((child)=>({
                                                        name: child.name,
                                                        handle: child.handle,
                                                        id: child.id
                                                    })) || null;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex flex-col gap-2 text-ui-fg-subtle txt-small",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$medusajs$2f$ui$2f$dist$2f$esm$2f$utils$2f$clx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clx"])("hover:text-ui-fg-base", children && "txt-small-plus"),
                                                            href: `/categories/${c.handle}`,
                                                            "data-testid": "category-link",
                                                            children: c.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 25
                                                        }, this),
                                                        children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "grid grid-cols-1 ml-3 gap-2",
                                                            children: children && children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: "hover:text-ui-fg-base",
                                                                        href: `/categories/${child.handle}`,
                                                                        "data-testid": "category-link",
                                                                        children: child.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                                                        lineNumber: 68,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                }, child.id, false, {
                                                                    fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                                                    lineNumber: 67,
                                                                    columnNumber: 33
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, c.id, true, {
                                                    fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this),
                                collections && collections.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "txt-small-plus txt-ui-fg-base",
                                            children: "Collections"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$medusajs$2f$ui$2f$dist$2f$esm$2f$utils$2f$clx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clx"])("grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small", {
                                                "grid-cols-2": (collections?.length || 0) > 3
                                            }),
                                            children: collections?.slice(0, 6).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "hover:text-ui-fg-base",
                                                        href: `/collections/${c.handle}`,
                                                        children: c.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 23
                                                    }, this)
                                                }, c.id, false, {
                                                    fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "txt-small-plus txt-ui-fg-base",
                                            children: "Medusa"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://github.com/medusajs",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "hover:text-ui-fg-base",
                                                        children: "GitHub"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://docs.medusajs.com",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "hover:text-ui-fg-base",
                                                        children: "Documentation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://github.com/medusajs/nextjs-starter-medusa",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "hover:text-ui-fg-base",
                                                        children: "Source code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full mb-16 justify-between text-ui-fg-muted",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$medusajs$2f$ui$2f$dist$2f$esm$2f$components$2f$text$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                            className: "txt-compact-small",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Qori Joyeria. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$medusa$2d$cta$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/modules/layout/templates/footer/index.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/modules/layout/components/cart-dropdown/index.tsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/modules/layout/components/cart-dropdown/index.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/layout/components/cart-dropdown/index.tsx <module evaluation>", "default");
}}),
"[project]/src/modules/layout/components/cart-dropdown/index.tsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/modules/layout/components/cart-dropdown/index.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/layout/components/cart-dropdown/index.tsx", "default");
}}),
"[project]/src/modules/layout/components/cart-dropdown/index.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$dropdown$2f$index$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/modules/layout/components/cart-dropdown/index.tsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$dropdown$2f$index$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/src/modules/layout/components/cart-dropdown/index.tsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$dropdown$2f$index$2e$tsx__$28$client__proxy$29$__);
}}),
"[project]/src/modules/layout/components/cart-button/index.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CartButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/data/cart.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$dropdown$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/modules/layout/components/cart-dropdown/index.tsx [app-rsc] (ecmascript)");
;
;
;
async function CartButton() {
    const cart = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["retrieveCart"])().catch(()=>null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$dropdown$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        cart: cart
    }, void 0, false, {
        fileName: "[project]/src/modules/layout/components/cart-button/index.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}}),
"[project]/src/modules/layout/components/side-menu/index.tsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/modules/layout/components/side-menu/index.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/layout/components/side-menu/index.tsx <module evaluation>", "default");
}}),
"[project]/src/modules/layout/components/side-menu/index.tsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/modules/layout/components/side-menu/index.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/layout/components/side-menu/index.tsx", "default");
}}),
"[project]/src/modules/layout/components/side-menu/index.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$side$2d$menu$2f$index$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/modules/layout/components/side-menu/index.tsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$side$2d$menu$2f$index$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/src/modules/layout/components/side-menu/index.tsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$side$2d$menu$2f$index$2e$tsx__$28$client__proxy$29$__);
}}),
"[project]/src/modules/layout/templates/nav/index.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Nav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$regions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/data/regions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/modules/common/components/localized-client-link/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$button$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/modules/layout/components/cart-button/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$side$2d$menu$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/modules/layout/components/side-menu/index.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function Nav() {
    const regions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$regions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listRegions"])().then((regions)=>regions);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky top-0 inset-x-0 z-50 group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 basis-0 h-full flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$side$2d$menu$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                regions: regions
                            }, void 0, false, {
                                fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
                                lineNumber: 18,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "txt-compact-xlarge-plus hover:text-ui-fg-base uppercase",
                            "data-testid": "nav-store-link",
                            children: "Qori Joyeria"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-x-6 h-full flex-1 basis-0 justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden small:flex items-center gap-x-6 h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    className: "hover:text-ui-fg-base",
                                    href: "/account",
                                    "data-testid": "nav-account-link",
                                    children: "Account"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$common$2f$components$2f$localized$2d$client$2d$link$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    className: "hover:text-ui-fg-base flex gap-2",
                                    href: "/cart",
                                    "data-testid": "nav-cart-link",
                                    children: "Cart (0)"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, void 0),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$button$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/modules/layout/templates/nav/index.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/modules/shipping/components/free-shipping-price-nudge/index.tsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/modules/shipping/components/free-shipping-price-nudge/index.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/shipping/components/free-shipping-price-nudge/index.tsx <module evaluation>", "default");
}}),
"[project]/src/modules/shipping/components/free-shipping-price-nudge/index.tsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/modules/shipping/components/free-shipping-price-nudge/index.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/shipping/components/free-shipping-price-nudge/index.tsx", "default");
}}),
"[project]/src/modules/shipping/components/free-shipping-price-nudge/index.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$shipping$2f$components$2f$free$2d$shipping$2d$price$2d$nudge$2f$index$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/modules/shipping/components/free-shipping-price-nudge/index.tsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$shipping$2f$components$2f$free$2d$shipping$2d$price$2d$nudge$2f$index$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/src/modules/shipping/components/free-shipping-price-nudge/index.tsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$shipping$2f$components$2f$free$2d$shipping$2d$price$2d$nudge$2f$index$2e$tsx__$28$client__proxy$29$__);
}}),
"[project]/src/app/[countryCode]/(main)/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PageLayout),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/data/cart.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$customer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/data/customer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/util/env.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$mismatch$2d$banner$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/modules/layout/components/cart-mismatch-banner/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$templates$2f$footer$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/modules/layout/templates/footer/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$templates$2f$nav$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/modules/layout/templates/nav/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$shipping$2f$components$2f$free$2d$shipping$2d$price$2d$nudge$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/modules/shipping/components/free-shipping-price-nudge/index.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const metadata = {
    metadataBase: new URL((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$util$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBaseURL"])())
};
async function PageLayout(props) {
    const customer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$customer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["retrieveCustomer"])();
    const cart = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["retrieveCart"])();
    let shippingOptions = [];
    if (cart) {
        const { shipping_options } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listCartOptions"])();
        shippingOptions = shipping_options;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$templates$2f$nav$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/[countryCode]/(main)/layout.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            customer && cart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$components$2f$cart$2d$mismatch$2d$banner$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                customer: customer,
                cart: cart
            }, void 0, false, {
                fileName: "[project]/src/app/[countryCode]/(main)/layout.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this),
            cart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$shipping$2f$components$2f$free$2d$shipping$2d$price$2d$nudge$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                variant: "popup",
                cart: cart,
                shippingOptions: shippingOptions
            }, void 0, false, {
                fileName: "[project]/src/app/[countryCode]/(main)/layout.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this),
            props.children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$layout$2f$templates$2f$footer$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/[countryCode]/(main)/layout.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/[countryCode]/(main)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/src/app/[countryCode]/(main)/layout.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__1ef8e1._.js.map