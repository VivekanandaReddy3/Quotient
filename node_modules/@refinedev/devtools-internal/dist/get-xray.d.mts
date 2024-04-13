import { TraceType } from "@refinedev/devtools-shared";
export type XRayResponse = {
    hookName: string;
    trace: TraceType[];
    resourcePath: string | null;
    legacyKey: boolean;
};
export declare function getXRay(hookName: string, legacyKey: boolean): XRayResponse;
//# sourceMappingURL=get-xray.d.ts.map