export declare class Processors {
    alignLeft: () => void;
    alignHCenter: () => void;
    alignRight: () => void;
    alignTop: () => void;
    alignVCenter: () => void;
    alignBottom: () => void;
    resizeFit: () => void;
    resizeWidth: (value: string) => void;
    resizeHeight: (value: string) => void;
    resizeProportion: () => void;
    resizeRotation: (value: string) => void;
    resizeBorderRadius: (value: string) => void;
    resizeAllBorders: () => void;
    autoLayoutFlexRow: () => void;
    autoLayoutFlexColumn: () => void;
    autoLayoutFlexWrap: () => void;
    autoLayoutAlignGrid: (num: number) => void;
    autoLayoutHorizontalGap: (value: string) => void;
    autoLayoutVerticalGap: (value: string) => void;
    autoLayoutHorizontalPadding: (value: string) => void;
    autoLayoutVerticalPadding: (value: string) => void;
    layerMixBlendMode: (value: string) => void;
    layerMixBlendModeAlpha: (value: string) => void;
    fillBackgroundColor: (value: string) => void;
    fillBackgroundColorAlpha: (value: string) => void;
    strokeColor: (value: string) => void;
    strokeColorAlpha: (value: string) => void;
    strokeWidth: (value: string) => void;
    strokeType: (value: string) => void;
    strokeTop: () => void;
    strokeRight: () => void;
    strokeBottom: () => void;
    strokeLeft: () => void;
    constructor();
}
export declare const alignLeft: () => void;
export declare const alignHCenter: () => void;
export declare const alignRight: () => void;
export declare const alignTop: () => void;
export declare const alignVCenter: () => void;
export declare const alignBottom: () => void;
export declare const resizeFit: () => void;
export declare const resizeWidth: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const resizeHeight: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const resizeProportion: () => void;
export declare const resizeRotation: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const resizeBorderRadius: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const resizeAllBorders: () => void;
export declare const autoLayoutFlexRow: () => void;
export declare const autoLayoutFlexColumn: () => void;
export declare const autoLayoutFlexWrap: () => void;
export declare const autoLayoutAlignGrid: (num: number) => void;
export declare const autoLayoutHorizontalGap: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const autoLayoutVerticalGap: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const autoLayoutHorizontalPadding: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const autoLayoutVerticalPadding: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const layerMixBlendMode: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const layerMixBlendModeAlpha: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const fillBackgroundColor: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const fillBackgroundColorAlpha: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const strokeColor: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const strokeColorAlpha: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const strokeWidth: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const strokeType: (value: any, updateUI?: boolean, updateCode?: boolean) => void;
export declare const strokeTop: () => void;
export declare const strokeRight: () => void;
export declare const strokeBottom: () => void;
export declare const strokeLeft: () => void;
export declare const actions: {
    align: {
        left: {
            type: string;
            prop: string;
            activationValue: string;
            actions: string[];
        };
        hcenter: {
            type: string;
            prop: string;
            activationValue: string;
            actions: string[];
        };
        right: {
            type: string;
            prop: string;
            activationValue: string;
            actions: string[];
        };
        top: {
            type: string;
            prop: string;
            activationValue: string;
            actions: string[];
        };
        vcenter: {
            type: string;
            prop: string;
            activationValue: string;
            actions: string[];
        };
        bottom: {
            type: string;
            prop: string;
            activationValue: string;
            actions: string[];
        };
    };
    resize: {
        fit: {
            type: string;
            prop: string;
            activationValue: string;
            actions: string[];
        };
        width: {
            type: string;
            draggable: boolean;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
        height: {
            type: string;
            draggable: boolean;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
        proportion: {
            type: string;
            prop: string;
            activationValue: string;
            actions: string[];
        };
        rotation: {
            type: string;
            draggable: boolean;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
        borderRadius: {
            type: string;
            draggable: boolean;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
        allBorders: {
            type: string;
            prop: string;
            activationValue: string;
            actions: string[];
        };
    };
    autoLayout: {
        flexRow: {
            type: string;
            prop: string[];
            activationValue: string[];
            actions: string[];
        };
        flexColumn: {
            type: string;
            prop: string[];
            activationValue: string[];
            actions: string[];
        };
        flexWrap: {
            type: string;
            prop: string[];
            activationValue: string[];
            actions: string[];
        };
        alignGrid: {
            type: string;
            prop: string[];
            activationValue: string[];
            actions: string[];
        };
        horizontalGap: {
            type: string;
            draggable: boolean;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
        verticalGap: {
            type: string;
            draggable: boolean;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
        horizontalPadding: {
            type: string;
            draggable: boolean;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
        verticalPadding: {
            type: string;
            draggable: boolean;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
    };
    layer: {
        mixBlendMode: {
            type: string;
            prop: string;
            actions: string[];
        };
        mixBlendModeAlpha: {
            type: string;
            draggable: boolean;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
    };
    fill: {
        backgroundColor: {
            type: string;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
        backgroundColorAlpha: {
            type: string;
            draggable: boolean;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
    };
    stroke: {
        strokeColor: {
            type: string;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
        strokeColorAlpha: {
            type: string;
            draggable: boolean;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
        strokeWidth: {
            type: string;
            draggable: boolean;
            default: string;
            prop: string;
            regex: RegExp;
            actions: string[];
        };
        strokeType: {
            type: string;
            prop: string;
            actions: string[];
        };
        allSides: {
            type: string;
            prop: string[];
            activationValue: string[];
            actions: string[];
        };
    };
};
