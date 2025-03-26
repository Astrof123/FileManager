export interface IfileManagerStyles {
    [index: string]: {
        [index: string]: string;
    };
}
export declare class FileManagerStyles {
    headerStyleElement: HTMLElement;
    updatableElements: {
        [index: string]: [HTMLElement];
    };
    fileManagerMutableStyles: IfileManagerStyles;
    fileManagerHeaderStyles: IfileManagerStyles;
    customStyles: IfileManagerStyles | null;
    fileManagerStyles: IfileManagerStyles;
    constructor(customStyles?: IfileManagerStyles | null);
    updateFileManagerStyles(): void;
    updateFileManagerHeaderStyles(): void;
    fmAddClass(element: HTMLElement, classname: string): void;
    fmRemoveClass(element: HTMLElement, classname: string): void;
    settingSizing(settings: number[], panel: string): string;
    updateHeaderStyles(): void;
    updateUpdatableElements(): void;
    updateMutableStyles(): void;
    setMutableStyles(mutableStyles: IfileManagerStyles): void;
    getDefaultMutableStyles(): any;
    setDefaultMutableStyles(): void;
    addRotationAnimation(element: HTMLElement): void;
}
