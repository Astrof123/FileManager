import { IfileManagerStyles, FileManagerStyles } from './filemanager-styles'

export type folder = {
    name: string
}

export type file = {
    name: string,
    changedate: string,
    isFolder: boolean,
    size: string,
    image: string|null,
    path: string|null
}

export type icons = {
    addFile: string,
    addFolder: string,
    arrowDownFolder: string,
    arrowRightFolders: string,
    arrowRightNavigation: string,
    cut: string,
    copy: string,
    folder: string,
    settings: string,
    grid: string,
    insert: string,
    arrowBack: string,
    arrowUp: string,
    refresh: string,
    picture: string,
    remove: string,
    rename: string,
    addFilesButton: string,
    list: string,
    textfile: string,
    openedFolder: string,
    download: string,
    createFile: string,
    createFolder: string,
    css: string,
    doc: string,
    docx: string,
    exe: string,
    html: string,
    mp4: string,
    pdf: string,
    php: string,
    ppt: string,
    pptx: string,
    svg: string,
    wav: string,
    xls: string,
    xlsx: string,
    zipFolder: string,
    py: string
}


export type colors = {
    hover: string,
    border: string,
    main_background: string,
    selected: string,
    text_color: string
}


export type sizing = {
    tools: string,
    address: string,
    navigation_pane: string,
    content_pane: string,
    settings_panel: string
}


export type options = {
    rootFolderName: string,
    icons: icons,
    language: string,
    addressPaneOptions: {
        addressPaneEnabled: boolean,
        searchingEnabled: boolean,
        refreshButtonEnabled: boolean,
        upButtonEnabled: boolean,
        backButtonEnabled: boolean,
    },
    toolsPaneOptions: {
        toolsPaneEnabled: boolean,
        uploadingFilesEnabled: boolean,
        toolsEnabled: {
            deletingFiles: boolean,
            renamingFiles: boolean,
            downloadingFiles: boolean,
            movingFiles: boolean,
            createFiles: boolean
        },
        defaultFileDisplayMode: "list"|"tiles",
        fileDisplayModesEnabled: boolean,
        settingsOptions: {
            settingsEnabled: boolean,
            colorSettingsEnabled: boolean,
            sizeSettingsEnabled: boolean,
        },
    },
    navigationPaneEnabled: boolean,
    theme: string,
    colors: colors,
    sizing: sizing
}


export abstract class FileManagerServer {
    public abstract getFolders(path: string): Promise<folder[]>;

    public abstract getFiles(path: string): Promise<file[]>;

    public abstract uploadFile(file: File, path: string): boolean;

    public abstract uploadFolder(files: FileList, path: string): boolean;

    public abstract removeFileOrFolder(path: string): boolean;

    public abstract renameFileOrFolder(oldPath: string, newPath: string): boolean;

    public abstract copyFileOrFolder(oldPath: string, newPath: string): boolean;

    public abstract downloadFiles(paths: string[]): boolean;

    public abstract searchFiles(searchString: string, path: string): Promise<file[]>;

    public abstract createEmptyFile(path: string) : boolean;

    public abstract createEmptyFolder(path: string) : boolean;
}


export class FileManager {
    public translations: {
        [index: string]: {
            [index: string]: string
        }} = {
        en: {
            "Upload": "Upload",
            "Searching": "Searching",
            "Upload file": "Upload file",
            "Upload folder": "Upload folder",
            "Settings": "Settings",
            "Hover color": "Hover color",
            "Background color": "Background color",
            "Border color": "Border color",
            "Select color": "Select color",
            "Text color": "Text color",
            "Address Pane interface": "Address Pane interface",
            "Tools Pane interface": "Tools Pane interface",
            "Navigation Pane interface": "Navigation Pane interface",
            "Content Pane interface": "Content Pane interface",
            "Settings Pane interface": "Settings Pane interface",
            "medium": "medium",
            "xsmall": "xsmall",
            "small": "small",
            "large": "large",
            "xlarge": "xlarge",
            "To default": "To default",
            "Submit": "Submit",
            "Success": "Success",
            "Refresh": "Refresh",
            "Up": "Up",
            "Back": "Back",
            "This folder is empty.": "This folder is empty.",
            "Cut file/folder": "Cut file/folder",
            "Copy file/folder": "Copy file/folder",
            "Paste file/folder": "Paste file/folder",
            "Rename file/folder": "Rename file/folder",
            "Remove file/folder": "Remove file/folder",
            "Download file/folder": "Download file/folder",
            "Create empty file": "Create empty file",
            "Create empty folder": "Create empty folder",
            "Name": "Name",
            "Date of change": "Date of change",
            "Type": "Type",
            "Size": "Size",
            "Byte": "Byte",
            "Folder": "Folder",
            "file": "file",
            "Change file display to list": "Change file display to list",
            "Change file display to tiles": "Change file display to tiles",
            "MB": "MB",
            "KB": "KB",
            "Image": "Image",
            "Are you sure you want to reset?": "Are you sure you want to reset?",
            "Are you sure you want to delete?": "Are you sure you want to delete?",
            "Are you sure you want to download?": "Are you sure you want to download?"
        },
        ru: {
            "Upload": "Загрузить",
            "Searching": "Поиск",
            "Upload file": "Загрузить файл",
            "Upload folder": "Загрузить папку",
            "Settings": "Настройки",
            "Hover color": "Цвет при наведении",
            "Background color": "Цвет фона",
            "Border color": "Цвет рамки",
            "Select color": "Цвет выделения",
            "Text color": "Цвет текста",
            "Address Pane interface": "Интерфейс панели адреса",
            "Tools Pane interface": "Интерфейс панели инструментов",
            "Navigation Pane interface": "Интерфейс панели навигации",
            "Content Pane interface": "Интерфейс панели контента",
            "Settings Pane interface": "Интерфейс панели настроек",
            "medium": "средний",
            "xsmall": "очень маленький",
            "small": "маленький",
            "large": "большой",
            "xlarge": "очень большой",
            "To default": "По умолчанию",
            "Submit": "Отправить",
            "Success": "Успех",
            "Refresh": "Обновить",
            "Up": "Вверх",
            "Back": "Назад",
            "This folder is empty.": "Эта папка пуста.",
            "Cut file/folder": "Вырезать файл/папку",
            "Copy file/folder": "Копировать файл/папку",
            "Paste file/folder": "Вставить файл/папку",
            "Rename file/folder": "Переименовать файл/папку",
            "Remove file/folder": "Удалить файл/папку",
            "Download file/folder": "Скачать файл/папку",
            "Create empty file": "Создать пустой файл",
            "Create empty folder": "Создать пустую папку",
            "Name": "Имя",
            "Date of change": "Дата изменения",
            "Type": "Тип",
            "Size": "Размер",
            "Byte": "Байт",
            "Folder": "Папка",
            "file": "файл",
            "Change file display to list": "Изменить отображение файлов на список",
            "Change file display to tiles": "Изменить отображение файлов на плитки",
            "MB": "МБ",
            "KB": "KБ",
            "Image": "Изображение",
            "Are you sure you want to reset?": "Вы уверены, что хотите сбросить настройки?",
            "Are you sure you want to delete?": "Вы уверены, что хотите удалить?",
            "Are you sure you want to download?": "Вы уверены, что хотите скачать?"
          },
        de: {
            "Upload": "Hochladen",
            "Searching": "Suche",
            "Upload file": "Datei hochladen",
            "Upload folder": "Ordner hochladen",
            "Settings": "Einstellungen",
            "Hover color": "Hover-Farbe",
            "Background color": "Hintergrundfarbe",
            "Border color": "Rahmenfarbe",
            "Select color": "Farbe auswählen",
            "Text color": "Textfarbe",
            "Address Pane interface": "Adressleisten-Oberfläche",
            "Tools Pane interface": "Werkzeugleisten-Oberfläche",
            "Navigation Pane interface": "Navigationsleisten-Oberfläche",
            "Content Pane interface": "Inhaltsbereich-Oberfläche",
            "Settings Pane interface": "Einstellungsbereich-Oberfläche",
            "medium": "mittel",
            "xsmall": "sehr klein",
            "small": "klein",
            "large": "groß",
            "xlarge": "sehr groß",
            "To default": "Standard",
            "Submit": "Absenden",
            "Success": "Erfolg",
            "Refresh": "Aktualisieren",
            "Up": "Hoch",
            "Back": "Zurück",
            "This folder is empty.": "Dieser Ordner ist leer.",
            "Cut file/folder": "Datei/Ordner ausschneiden",
            "Copy file/folder": "Datei/Ordner kopieren",
            "Paste file/folder": "Datei/Ordner einfügen",
            "Rename file/folder": "Datei/Ordner umbenennen",
            "Remove file/folder": "Datei/Ordner entfernen",
            "Download file/folder": "Datei/Ordner herunterladen",
            "Create empty file": "Leere Datei erstellen",
            "Create empty folder": "Leeren Ordner erstellen",
            "Name": "Name",
            "Date of change": "Änderungsdatum",
            "Type": "Typ",
            "Size": "Größe",
            "Byte": "Byte",
            "Folder": "Ordner",
            "file": "Datei",
            "Change file display to list": "Dateianzeige in Liste ändern",
            "Change file display to tiles": "Dateianzeige in Kacheln ändern",
            "MB": "MB",
            "KB": "KB",
            "Image": "Bild",
            "Are you sure you want to reset?": "Möchten Sie wirklich zurücksetzen?",
            "Are you sure you want to delete?": "Möchten Sie wirklich löschen?",
            "Are you sure you want to download?": "Möchten Sie wirklich herunterladen?"
        },
        fr: {
            "Upload": "Télécharger",
            "Searching": "Recherche",
            "Upload file": "Télécharger un fichier",
            "Upload folder": "Télécharger un dossier",
            "Settings": "Paramètres",
            "Hover color": "Couleur de survol",
            "Background color": "Couleur de fond",
            "Border color": "Couleur de bordure",
            "Select color": "Sélectionner une couleur",
            "Text color": "Couleur du texte",
            "Address Pane interface": "Interface du volet d'adresse",
            "Tools Pane interface": "Interface du volet d'outils",
            "Navigation Pane interface": "Interface du volet de navigation",
            "Content Pane interface": "Interface du volet de contenu",
            "Settings Pane interface": "Interface du volet de paramètres",
            "medium": "moyen",
            "xsmall": "très petit",
            "small": "petit",
            "large": "grand",
            "xlarge": "très grand",
            "To default": "Par défaut",
            "Submit": "Envoyer",
            "Success": "Succès",
            "Refresh": "Actualiser",
            "Up": "Haut",
            "Back": "Retour",
            "This folder is empty.": "Ce dossier est vide.",
            "Cut file/folder": "Couper le fichier/dossier",
            "Copy file/folder": "Copier le fichier/dossier",
            "Paste file/folder": "Coller le fichier/dossier",
            "Rename file/folder": "Renommer le fichier/dossier",
            "Remove file/folder": "Supprimer le fichier/dossier",
            "Download file/folder": "Télécharger le fichier/dossier",
            "Create empty file": "Créer un fichier vide",
            "Create empty folder": "Créer un dossier vide",
            "Name": "Nom",
            "Date of change": "Date de modification",
            "Type": "Type",
            "Size": "Taille",
            "Byte": "Octet",
            "Folder": "Dossier",
            "file": "fichier",
            "Change file display to list": "Afficher les fichiers sous forme de liste",
            "Change file display to tiles": "Afficher les fichiers sous forme de vignettes",
            "MB": "MB",
            "KB": "KB",
            "Image": "Image",
            "Are you sure you want to reset?": "Êtes-vous sûr de vouloir réinitialiser ?",
            "Are you sure you want to delete?": "Êtes-vous sûr de vouloir supprimer ?",
            "Are you sure you want to download?": "Êtes-vous sûr de vouloir télécharger ?"
            
        }
    };

    private currentLang = "en";

    private image_extension: string[] = ['png', 'jpg', 'jpeg', 'webp'];
    private rootFolderName: string;
    private FileManagerServer: FileManagerServer;
    private FileManagerStyles: FileManagerStyles;
    private root: HTMLElement;
    private filemanager_root: HTMLElement;
    private settingsForm: HTMLFormElement|null = null;
    private files_listHTML: HTMLElement;
    private searchInputElement: HTMLInputElement|null = null;
    private searchingString: string = "";
    private files_metadataHTML: HTMLElement;
    private currentFolder: HTMLElement|undefined;
    private lastFolders: HTMLElement[] = [];
    private currentPath: string = '/';
    private currentFiles: HTMLElement[] = [];
    private currentFilesPaths: string[] = [];
    private selectedFilesPaths: string[] = [];
    private copyState: boolean = false;
    private cutState: boolean = false;
    private openFolders: string[] = [];
    private settingsPanel: HTMLElement|null = null;
    private mainPanel: HTMLElement;
    private toolsPane: HTMLElement|null = null;
    private addressPane: HTMLElement|null = null;
    private options;
    private lastFile: HTMLElement|null = null;
    private isMobileVersion: boolean = false;
    private navigationPane: HTMLElement|null = null;
    private extraToolsPane: HTMLElement|null = null;
    private isTabletVersion: boolean = false;
    private timerTouching: null|NodeJS.Timeout = null;

    private settingsColorInput: {
        [index: string]: HTMLInputElement
    } =  {};

    private settingsInterfaceSelect: {
        [index: string]: HTMLSelectElement
    } =  {};

    private filesTilesElement: HTMLElement;
    private filesDisplayMode: string;

    private toolsState: {
        remove: boolean,
        cut: boolean,
        copy: boolean,
        insert: boolean,
        rename: boolean,
        download: boolean,
        createFile: boolean,
        createFolder: boolean
    } = {
        remove: false,
        cut: false,
        copy: false,
        insert: false,
        rename: false,
        download: false,
        createFile: true,
        createFolder: true
    }

    private toolsElements: {
        remove: HTMLElement|null,
        cut: HTMLElement|null,
        copy: HTMLElement|null,
        insert: HTMLElement|null,
        rename: HTMLElement|null,
        download: HTMLElement|null,
        createFile: HTMLElement|null,
        createFolder: HTMLElement|null,
    }|null = null;

    private displayModesElements: {
        list: HTMLElement,
        tiles: HTMLElement,
    }|null = null;

    private arrowsState: {
        back_arrow: boolean,
        up_arrow: boolean
    };

    private arrowsElements: {
        back_arrow: HTMLElement|null,
        up_arrow: HTMLElement|null
    }|null = null;

    private currentPathElem: HTMLElement|null = null;;
    private uploadFilesPanel: HTMLElement|null = null;
    private loaderElem: HTMLElement;
    private iconsPaths: icons;

    private currentDragPath: string|null = null;
    private currentStartDragElement: HTMLElement|null = null;
    private currentDragingElement: HTMLElement|null = null;

    constructor(root: Element|null, FileManagerServer: FileManagerServer, options: options, customStyles: IfileManagerStyles|null = null, customLanguages: IfileManagerStyles|null = null) {
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
        this.options = options;
        this.iconsPaths = this.options?.icons;
        
        this.FileManagerStyles = new FileManagerStyles(customStyles, this.options.theme, this.options.colors , this.options.sizing)

        for (let key in customLanguages) {
            this.translations[key] = customLanguages[key];
        }

        if (this.translations[this.options?.language]) {
            this.currentLang = this.options?.language;
        }
        else {
            this.currentLang = "en";
        }

        if (localStorage.fmFilesDisplayMode) {
            this.filesDisplayMode = localStorage.fmFilesDisplayMode;
        }
        else {
            if (this.options?.toolsPaneOptions?.defaultFileDisplayMode && this.options?.toolsPaneOptions?.defaultFileDisplayMode !== "list" && this.options?.toolsPaneOptions?.defaultFileDisplayMode !== "tiles") {
                this.options.toolsPaneOptions.defaultFileDisplayMode = "list";
            }
            localStorage.fmFilesDisplayMode = this.options?.toolsPaneOptions?.defaultFileDisplayMode ? this.options?.toolsPaneOptions?.defaultFileDisplayMode : "list";
            this.filesDisplayMode = this.options?.toolsPaneOptions?.defaultFileDisplayMode ? this.options?.toolsPaneOptions?.defaultFileDisplayMode : "list";
        }
        
        this.FileManagerStyles.updateHeaderStyles();
        this.rootFolderName = this.options?.rootFolderName != undefined ? this.options?.rootFolderName : "Root";
        this.FileManagerServer = FileManagerServer;
        this.arrowsState = {
            back_arrow: true,
            up_arrow: false,
        };

        if (!(root instanceof HTMLElement)) {
            throw new SyntaxError("An empty or invalid variable type was passed.")
        }
        
        this.root = root;
        this.filemanager_root = this.initInterface();
        this.filemanager_root.addEventListener("click", this.handleFilemanagerClick.bind(this));
        let bufferChecker;

        bufferChecker = this.filemanager_root.querySelector(".fm_loader_wrapper");
        if (bufferChecker instanceof HTMLElement) {
            this.loaderElem = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }

        if (this.options?.toolsPaneOptions?.toolsPaneEnabled && this.options?.toolsPaneOptions?.uploadingFilesEnabled == true) {
            bufferChecker = this.filemanager_root.querySelector(".fm_upload_files_block");
            if (bufferChecker instanceof HTMLElement) {
                this.uploadFilesPanel = bufferChecker;
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
        }
        
        if (this.options?.toolsPaneOptions?.settingsOptions?.settingsEnabled && (this.options?.toolsPaneOptions?.settingsOptions?.colorSettingsEnabled || this.options?.toolsPaneOptions?.settingsOptions?.sizeSettingsEnabled)) {
            bufferChecker = this.filemanager_root.querySelector(".fm_settings_panel");
            if (bufferChecker instanceof HTMLElement) {
                this.settingsPanel = bufferChecker;
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
    
        }

        if (this.options?.addressPaneOptions?.addressPaneEnabled) {
            bufferChecker = this.filemanager_root.querySelector(".fm_filemanager_address");
            if (bufferChecker instanceof HTMLElement) {
                this.addressPane = bufferChecker;
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
        }

        if (this.options?.toolsPaneOptions?.toolsPaneEnabled && 
                (this.options?.toolsPaneOptions?.uploadingFilesEnabled ||
                this.options?.toolsPaneOptions?.toolsEnabled?.deletingFiles ||
                this.options?.toolsPaneOptions?.toolsEnabled?.movingFiles ||
                this.options?.toolsPaneOptions?.toolsEnabled?.renamingFiles ||
                this.options?.toolsPaneOptions?.toolsEnabled?.downloadingFiles
            )) {
            bufferChecker = this.filemanager_root.querySelector(".fm_filemanager_tools");
            if (bufferChecker instanceof HTMLElement) {
                this.toolsPane = bufferChecker;
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }    
        }

        if (this.options?.toolsPaneOptions?.settingsOptions?.settingsEnabled && (this.options?.toolsPaneOptions?.settingsOptions?.colorSettingsEnabled || this.options?.toolsPaneOptions?.settingsOptions?.sizeSettingsEnabled)) {
            bufferChecker = this.filemanager_root.querySelector(".fm_settings_form");
            if (bufferChecker instanceof HTMLElement) {
                this.settingsForm = bufferChecker as HTMLFormElement;
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
        }

        if (this.options?.addressPaneOptions?.addressPaneEnabled && this.options?.addressPaneOptions?.searchingEnabled) {
            bufferChecker = this.filemanager_root.querySelector(".fm_search");
            if (bufferChecker instanceof HTMLElement) {
                this.searchInputElement = bufferChecker as HTMLInputElement;
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
    
        }

        bufferChecker = this.filemanager_root.querySelector(".fm_filemanager_main");
        if (bufferChecker instanceof HTMLElement) {
            this.mainPanel = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }

        if (this.options?.addressPaneOptions?.addressPaneEnabled && !this.isMobileVersion) {
            bufferChecker = this.filemanager_root.querySelector(".fm_current_path");
            if (bufferChecker instanceof HTMLElement) {
                this.currentPathElem = bufferChecker;
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
        }

        bufferChecker = this.filemanager_root.querySelector(".fm_files_tiles");
        if (bufferChecker instanceof HTMLElement) {
            this.filesTilesElement = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }

        bufferChecker = this.filemanager_root.querySelector(".fm_files_list");
        if (bufferChecker instanceof HTMLElement) {
            this.files_listHTML = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }

        bufferChecker = this.filemanager_root.querySelector(".fm_metadata_block");
        if (bufferChecker instanceof HTMLElement) {
            this.files_metadataHTML = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }


        
        if (this.options?.addressPaneOptions?.addressPaneEnabled) {
            let back_arrow = null;
            let up_arrow = null;

            if (this.options?.addressPaneOptions?.backButtonEnabled) {
                back_arrow = this.filemanager_root.querySelector(".fm_arrow_back") as HTMLElement;
            }

            if (this.options?.addressPaneOptions?.upButtonEnabled) {
                up_arrow = this.filemanager_root.querySelector(".fm_arrow_up") as HTMLElement;
            }
            
            this.arrowsElements = {
                back_arrow: back_arrow,
                up_arrow: up_arrow,
            };
        }

        let cut_elem = null;
        let copy_elem = null;
        let insert_elem = null;
        let remove_elem = null;
        let rename_elem = null;
        let download_elem = null;
        let create_file_elem = null;
        let create_folder_elem = null;

        if (this.options?.toolsPaneOptions?.toolsEnabled?.movingFiles) {
            cut_elem = this.filemanager_root.querySelector(".fm_cut") as HTMLElement;
            copy_elem = this.filemanager_root.querySelector(".fm_copy") as HTMLElement;
            insert_elem = this.filemanager_root.querySelector(".fm_insert") as HTMLElement;
        }

        if (this.options?.toolsPaneOptions?.toolsEnabled?.deletingFiles == true) {
            remove_elem = this.filemanager_root.querySelector(".fm_remove") as HTMLElement;
        }

        if (this.options?.toolsPaneOptions?.toolsEnabled?.renamingFiles == true) {
            rename_elem = this.filemanager_root.querySelector(".fm_rename") as HTMLElement;
        }

        if (this.options?.toolsPaneOptions?.toolsEnabled?.downloadingFiles == true) {
            download_elem = this.filemanager_root.querySelector(".fm_download") as HTMLElement;
        }

        if (this.options?.toolsPaneOptions?.toolsEnabled?.createFiles == true) {
            create_file_elem = this.filemanager_root.querySelector(".fm_create_file") as HTMLElement;
            create_folder_elem = this.filemanager_root.querySelector(".fm_create_folder") as HTMLElement;
        }

        this.toolsElements = {
            remove: remove_elem,
            cut: cut_elem,
            copy: copy_elem,
            insert: insert_elem,
            rename: rename_elem,
            download: download_elem,
            createFile: create_file_elem,
            createFolder: create_folder_elem
        };

        if (this.options?.toolsPaneOptions?.fileDisplayModesEnabled) {
            const listDisplayModeIcon = this.filemanager_root.querySelector(".fm_list");
            const tilesDisplayModeIcon = this.filemanager_root.querySelector(".fm_tiles");
            if (listDisplayModeIcon instanceof HTMLElement && tilesDisplayModeIcon instanceof HTMLElement) {
                this.displayModesElements = {
                    list: listDisplayModeIcon,
                    tiles: tilesDisplayModeIcon,
                };
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
        }

        this.updateBackArrow();

        bufferChecker = document.querySelector(".fm_folder_root_wrapper");
        let root_parent = bufferChecker?.querySelector(".fm_folder_parent");
        
        if (root_parent instanceof HTMLElement) {
            this.updateFileList(root_parent, true);
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }

        this.updateListDisplayIcon();
        this.updateTilesDisplayIcon();

        if (this.isMobileVersion) {
            let newMutableStyles = {
                "colors": this.FileManagerStyles.fileManagerMutableStyles["colors"],
                "sizing": {
                    tools: "xsmall",
                    address: "small",
                    content_pane: "small",
                    navigation_pane: "small",
                    settings_panel: "xsmall",
                }
            };

            this.submitSettings(newMutableStyles, true);
        }
        if (this.isTabletVersion) {
            let newMutableStyles = {
                "colors": this.FileManagerStyles.fileManagerMutableStyles["colors"],
                "sizing": {
                    tools: "small",
                    address: "medium",
                    content_pane: "medium",
                    navigation_pane: "medium",
                    settings_panel: "small",
                }
            };

            this.submitSettings(newMutableStyles, true);
        }
    }

    private createHTMLFileList(file: file, draggable = true): HTMLElement {
        let file_blockHTML = document.createElement("div");
        file_blockHTML.classList.add("fm_file_block");
        this.FileManagerStyles.fmAddClass(file_blockHTML, "fm_file_block");
        file_blockHTML.addEventListener("click", this.handleFileClick.bind(this));

        if (draggable) {
            file_blockHTML.addEventListener("dragleave", this.handleFilesDragLeave.bind(this));
            file_blockHTML.addEventListener("drop", this.handleFilesDrop.bind(this));
            file_blockHTML.addEventListener("dragstart", this.handleFilesDragStart.bind(this));
        }
        file_blockHTML.draggable = draggable;

        if (this.FileManagerStyles.updatableElements["fm_file_block"]) {
            this.FileManagerStyles.updatableElements["fm_file_block"].push(file_blockHTML);
        }
        else {
            this.FileManagerStyles.updatableElements["fm_file_block"] = [file_blockHTML];
        }

        let file_iconHTML = document.createElement("img");
        file_iconHTML.classList.add("fm_file_icon");
        file_iconHTML.draggable = false;

        this.FileManagerStyles.fmAddClass(file_iconHTML, "fm_file_icon");
        if (this.FileManagerStyles.updatableElements["fm_file_icon"]) {
            this.FileManagerStyles.updatableElements["fm_file_icon"].push(file_iconHTML);
        }
        else {
            this.FileManagerStyles.updatableElements["fm_file_icon"] = [file_iconHTML];
        }

        let file_typeHTML = document.createElement("span");
        file_typeHTML.classList.add("fm_file_type");
        file_typeHTML.classList.add("fm_file_metadata");
        this.FileManagerStyles.fmAddClass(file_typeHTML, "fm_file_type");
        this.FileManagerStyles.fmAddClass(file_typeHTML, "fm_file_metadata");

        if (this.FileManagerStyles.updatableElements["fm_file_metadata"]) {
            this.FileManagerStyles.updatableElements["fm_file_metadata"].push(file_typeHTML);
        }
        else {
            this.FileManagerStyles.updatableElements["fm_file_metadata"] = [file_typeHTML];
        }
        

        if (file.isFolder) {
            file_iconHTML.src = this.iconsPaths.folder;
            file_typeHTML.textContent = this.translations[this.currentLang]["Folder"];
            file_blockHTML.setAttribute("isFolder", "true");
            file_blockHTML.addEventListener("dragover", this.handleFilesDragOver.bind(this));
        }
        else {
            let ext = file.name.split('.');
            if (this.image_extension.includes(ext[ext.length - 1]) && this.iconsPaths.picture) {
                file_iconHTML.src = this.iconsPaths.picture;  
                file_typeHTML.textContent = this.translations[this.currentLang]["Image"];
            }
            else if (ext[ext.length - 1] === "css" && this.iconsPaths.css) {
                file_iconHTML.src = this.iconsPaths.css;  
                file_typeHTML.textContent = "CSS " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "doc" && this.iconsPaths.doc) {
                file_iconHTML.src = this.iconsPaths.doc;  
                file_typeHTML.textContent = "DOC " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "docx" && this.iconsPaths.docx) {
                file_iconHTML.src = this.iconsPaths.docx;  
                file_typeHTML.textContent = "DOCX " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "exe" && this.iconsPaths.exe) {
                file_iconHTML.src = this.iconsPaths.exe;  
                file_typeHTML.textContent = "EXE " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "html" && this.iconsPaths.html) {
                file_iconHTML.src = this.iconsPaths.html;  
                file_typeHTML.textContent = "HTML " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "mp4" && this.iconsPaths.mp4) {
                file_iconHTML.src = this.iconsPaths.mp4;  
                file_typeHTML.textContent = "MP4 " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "pdf" && this.iconsPaths.pdf) {
                file_iconHTML.src = this.iconsPaths.pdf;  
                file_typeHTML.textContent = "PDF " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "php" && this.iconsPaths.php) {
                file_iconHTML.src = this.iconsPaths.php;  
                file_typeHTML.textContent = "PHP " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "ppt" && this.iconsPaths.ppt) {
                file_iconHTML.src = this.iconsPaths.ppt;  
                file_typeHTML.textContent = "PPT " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "pptx" && this.iconsPaths.pptx) {
                file_iconHTML.src = this.iconsPaths.pptx;  
                file_typeHTML.textContent = "PPTX " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "py" && this.iconsPaths.py) {
                file_iconHTML.src = this.iconsPaths.py;  
                file_typeHTML.textContent = "PY " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "svg" && this.iconsPaths.svg) {
                file_iconHTML.src = this.iconsPaths.svg;  
                file_typeHTML.textContent = "SVG " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "wav" && this.iconsPaths.wav) {
                file_iconHTML.src = this.iconsPaths.wav;  
                file_typeHTML.textContent = "WAV " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "xls" && this.iconsPaths.xls) {
                file_iconHTML.src = this.iconsPaths.xls;  
                file_typeHTML.textContent = "XLS " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "xlsx" && this.iconsPaths.xlsx) {
                file_iconHTML.src = this.iconsPaths.xlsx;  
                file_typeHTML.textContent = "XSLX " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "zip" && this.iconsPaths.zipFolder) {
                file_iconHTML.src = this.iconsPaths.zipFolder;  
                file_typeHTML.textContent = "ZIP " + this.translations[this.currentLang]["file"];
            }
            else if (ext[ext.length - 1] === "rar" && this.iconsPaths.zipFolder) {
                file_iconHTML.src = this.iconsPaths.zipFolder;  
                file_typeHTML.textContent = "RAR " + this.translations[this.currentLang]["file"];
            }
            else {
                file_iconHTML.src = this.iconsPaths.textfile;
                file_typeHTML.textContent = "TXT " + this.translations[this.currentLang]["file"];
            }
            
            file_blockHTML.setAttribute("isFolder", "false");
        }


        let file_nameHTML = document.createElement("span");
        file_nameHTML.classList.add("fm_file_name");
        file_nameHTML.classList.add("fm_file_metadata");
        this.FileManagerStyles.fmAddClass(file_nameHTML, "fm_file_name");
        this.FileManagerStyles.fmAddClass(file_nameHTML, "fm_file_metadata");
        this.FileManagerStyles.updatableElements["fm_file_metadata"].push(file_nameHTML);
        file_nameHTML.textContent = file.name;
        file_nameHTML.draggable = false;

        let file_changedateHTML = document.createElement("span");
        file_changedateHTML.classList.add("fm_file_changedate");
        file_changedateHTML.classList.add("fm_file_metadata");
        this.FileManagerStyles.fmAddClass(file_changedateHTML, "fm_file_changedate");
        this.FileManagerStyles.fmAddClass(file_changedateHTML, "fm_file_metadata");
        this.FileManagerStyles.updatableElements["fm_file_metadata"].push(file_changedateHTML);
        file_changedateHTML.textContent = file.changedate;
        file_changedateHTML.draggable = false;

        let file_sizeHTML = document.createElement("span");
        file_sizeHTML.classList.add("fm_file_size");
        file_sizeHTML.classList.add("fm_file_metadata");
        this.FileManagerStyles.fmAddClass(file_sizeHTML, "fm_file_size");
        this.FileManagerStyles.fmAddClass(file_sizeHTML, "fm_file_metadata");
        this.FileManagerStyles.updatableElements["fm_file_metadata"].push(file_sizeHTML);
        file_sizeHTML.draggable = false;

        if (!file.isFolder) {
            // let size = Number(file.size.replace(/^\D+/g, ''));
            const match = file.size.match(/-?\d+(\.\d+)?/);
            let size = match ? parseFloat(match[0]) : NaN;
            if (size > 1024 * 1024) {
                size = size / (1024 * 1024);
                file_sizeHTML.textContent = String(Math.round(size * 10) / 10) + " " + this.translations[this.currentLang]["MB"]; 
            }
            else if (size > 1024) {
                size = size / 1024;
                file_sizeHTML.textContent = String(Math.round(size * 10) / 10) + " " + this.translations[this.currentLang]["KB"]; 
            }
            else {
                file_sizeHTML.textContent = String(size) + " " + this.translations[this.currentLang]["Byte"];
            }   
        }
        else {
            file_sizeHTML.textContent = "";
        }

        file_blockHTML.append(file_iconHTML);
        file_blockHTML.append(file_nameHTML);
        file_blockHTML.append(file_changedateHTML);
        file_blockHTML.append(file_typeHTML);
        file_blockHTML.append(file_sizeHTML);
        this.files_listHTML.append(file_blockHTML);

        return file_blockHTML;
    }

    private createHTMLFileTiles(file: file, draggable = true): HTMLElement {
        let file_blockHTML = document.createElement("div");

        file_blockHTML.classList.add("fm_file_block");
        file_blockHTML.classList.add("fm_file_block_tiles");
        this.FileManagerStyles.fmAddClass(file_blockHTML, "fm_file_block_tiles");
        file_blockHTML.addEventListener("click", this.handleFileClick.bind(this));

        if (draggable) {
            file_blockHTML.addEventListener("dragleave", this.handleFilesDragLeave.bind(this));
            file_blockHTML.addEventListener("drop", this.handleFilesDrop.bind(this));
            file_blockHTML.addEventListener("dragstart", this.handleFilesDragStart.bind(this));
        }

        file_blockHTML.draggable = draggable;

        if (this.FileManagerStyles.updatableElements["fm_file_block_tiles"]) {
            this.FileManagerStyles.updatableElements["fm_file_block_tiles"].push(file_blockHTML);
        }
        else {
            this.FileManagerStyles.updatableElements["fm_file_block_tiles"] = [file_blockHTML];
        }

        let file_iconHTML = document.createElement("img");
        file_iconHTML.classList.add("fm_file_icon");
        file_iconHTML.draggable = false;

        this.FileManagerStyles.fmAddClass(file_iconHTML, "fm_file_icon_tiles");
        if (this.FileManagerStyles.updatableElements["fm_file_icon_tiles"]) {
            this.FileManagerStyles.updatableElements["fm_file_icon_tiles"].push(file_iconHTML);
        }
        else {
            this.FileManagerStyles.updatableElements["fm_file_icon_tiles"] = [file_iconHTML];
        }

        if (file.isFolder) {
            file_iconHTML.src = this.iconsPaths.folder;
            file_blockHTML.setAttribute("isFolder", "true");
            file_blockHTML.addEventListener("dragover", this.handleFilesDragOver.bind(this));
        }
        else {
            let ext = file.name.split('.');

            if (this.image_extension.includes(ext[ext.length - 1]) && this.iconsPaths.picture) {
                if (file.image) {
                    file_iconHTML.src = file.image;
                }
                else {
                    file_iconHTML.src = this.iconsPaths.picture;
                }
            }
            else if (ext[ext.length - 1] === "css" && this.iconsPaths.css) {
                file_iconHTML.src = this.iconsPaths.css;
            }
            else if (ext[ext.length - 1] === "doc" && this.iconsPaths.doc) {
                file_iconHTML.src = this.iconsPaths.doc;
            }
            else if (ext[ext.length - 1] === "docx" && this.iconsPaths.docx) {
                file_iconHTML.src = this.iconsPaths.docx;
            }
            else if (ext[ext.length - 1] === "exe" && this.iconsPaths.exe) {
                file_iconHTML.src = this.iconsPaths.exe;
            }
            else if (ext[ext.length - 1] === "html" && this.iconsPaths.html) {
                file_iconHTML.src = this.iconsPaths.html;
            }
            else if (ext[ext.length - 1] === "mp4" && this.iconsPaths.mp4) {
                file_iconHTML.src = this.iconsPaths.mp4;
            }
            else if (ext[ext.length - 1] === "pdf" && this.iconsPaths.pdf) {
                file_iconHTML.src = this.iconsPaths.pdf;
            }
            else if (ext[ext.length - 1] === "php" && this.iconsPaths.php) {
                file_iconHTML.src = this.iconsPaths.php;
            }
            else if (ext[ext.length - 1] === "ppt" && this.iconsPaths.ppt) {
                file_iconHTML.src = this.iconsPaths.ppt;
            }
            else if (ext[ext.length - 1] === "pptx" && this.iconsPaths.pptx) {
                file_iconHTML.src = this.iconsPaths.pptx;
            }
            else if (ext[ext.length - 1] === "py" && this.iconsPaths.py) {
                file_iconHTML.src = this.iconsPaths.py;
            }
            else if (ext[ext.length - 1] === "svg" && this.iconsPaths.svg) {
                file_iconHTML.src = this.iconsPaths.svg;
            }
            else if (ext[ext.length - 1] === "wav" && this.iconsPaths.wav) {
                file_iconHTML.src = this.iconsPaths.wav;
            }
            else if (ext[ext.length - 1] === "xls" && this.iconsPaths.xls) {
                file_iconHTML.src = this.iconsPaths.xls;
            }
            else if (ext[ext.length - 1] === "xlsx" && this.iconsPaths.xlsx) {
                file_iconHTML.src = this.iconsPaths.xlsx;
            }
            else if (ext[ext.length - 1] === "zip" && this.iconsPaths.zipFolder) {
                file_iconHTML.src = this.iconsPaths.zipFolder;
            }
            else if (ext[ext.length - 1] === "rar" && this.iconsPaths.zipFolder) {
                file_iconHTML.src = this.iconsPaths.zipFolder;
            }
            else {
                file_iconHTML.src = this.iconsPaths.textfile;
            }

            file_blockHTML.setAttribute("isFolder", "false");
        }

        let file_nameHTML = document.createElement("span");
        file_nameHTML.classList.add("fm_file_name");
        file_nameHTML.classList.add("fm_file_metadata");
        this.FileManagerStyles.fmAddClass(file_nameHTML, "fm_file_name_tiles");
        file_nameHTML.textContent = file.name;
        file_nameHTML.draggable = false;

        if (this.FileManagerStyles.updatableElements["fm_file_name_tiles"]) {
            this.FileManagerStyles.updatableElements["fm_file_name_tiles"].push(file_nameHTML);
        }
        else {
            this.FileManagerStyles.updatableElements["fm_file_name_tiles"] = [file_nameHTML];
        }

        file_blockHTML.append(file_iconHTML);
        file_blockHTML.append(file_nameHTML);
        this.filesTilesElement.append(file_blockHTML);

        return file_blockHTML;
    }

    private createHTMLNavFolder(folder: folder, root: HTMLElement, initial: boolean = false): HTMLElement[] {
        let root_parent = root.parentElement;
        let root_parent_path = root_parent?.getAttribute("path");

        if (!root_parent_path && !initial) {
            throw new Error('Element does not have a path attribute');
        }

        let folder_wrapperHTML = document.createElement("div");
        folder_wrapperHTML.classList.add("fm_folder_wrapper");
        this.FileManagerStyles.fmAddClass(folder_wrapperHTML, "fm_folder_wrapper");

        if (this.FileManagerStyles.updatableElements["fm_folder_wrapper"]) {
            this.FileManagerStyles.updatableElements["fm_folder_wrapper"].push(folder_wrapperHTML);
        }
        else {
            this.FileManagerStyles.updatableElements["fm_folder_wrapper"] = [folder_wrapperHTML];
        }
        
        let folder_childrenHTML = document.createElement("div");
        folder_childrenHTML.classList.add("fm_folder_children");
        this.FileManagerStyles.fmAddClass(folder_childrenHTML, "fm_folder_children");

        let folderHTML = document.createElement("div");
        folderHTML.classList.add("fm_folder_parent");
        this.FileManagerStyles.fmAddClass(folderHTML, "fm_folder_parent");
        folderHTML.addEventListener("dragleave", this.handleFilesDragLeave.bind(this));
        folderHTML.addEventListener("drop", this.handleFilesDrop.bind(this));
        folderHTML.addEventListener("dragstart", this.handleFilesDragStart.bind(this));
        folderHTML.addEventListener("dragover", this.handleFilesDragOver.bind(this));

        let folder_open_icon_wrapperHTML = document.createElement("div");
        folder_open_icon_wrapperHTML.classList.add("fm_folder_open_icon_wrapper");
        this.FileManagerStyles.fmAddClass(folder_open_icon_wrapperHTML, "fm_folder_open_icon_wrapper");
        if (this.FileManagerStyles.updatableElements["fm_folder_open_icon_wrapper"]) {
            this.FileManagerStyles.updatableElements["fm_folder_open_icon_wrapper"].push(folder_open_icon_wrapperHTML);
        }
        else {
            this.FileManagerStyles.updatableElements["fm_folder_open_icon_wrapper"] = [folder_open_icon_wrapperHTML];
        }

        let folder_open_iconHTML = document.createElement("img");
        folder_open_iconHTML.classList.add("fm_folder_open_icon");
        this.FileManagerStyles.fmAddClass(folder_open_iconHTML, "fm_folder_open_icon");
        folder_open_iconHTML.src = this.iconsPaths.arrowRightFolders;
        if (this.FileManagerStyles.updatableElements["fm_folder_open_icon"]) {
            this.FileManagerStyles.updatableElements["fm_folder_open_icon"].push(folder_open_iconHTML);
        }
        else {
            this.FileManagerStyles.updatableElements["fm_folder_open_icon"] = [folder_open_iconHTML];
        }
        
        let folder_iconHTML = document.createElement("img");
        folder_iconHTML.classList.add("fm_folder_icon");
        this.FileManagerStyles.fmAddClass(folder_iconHTML, "fm_folder_icon");
        folder_iconHTML.src = this.iconsPaths.folder;
        if (this.FileManagerStyles.updatableElements["fm_folder_icon"]) {
            this.FileManagerStyles.updatableElements["fm_folder_icon"].push(folder_iconHTML);
        }
        else {
            this.FileManagerStyles.updatableElements["fm_folder_icon"] = [folder_iconHTML];
        }

        let folder_nameHTML = document.createElement("span");
        folder_nameHTML.classList.add("fm_folder_name");
        this.FileManagerStyles.fmAddClass(folder_nameHTML, "fm_folder_name");
        folder_nameHTML.textContent = folder.name;
        if (this.FileManagerStyles.updatableElements["fm_folder_name"]) {
            this.FileManagerStyles.updatableElements["fm_folder_name"].push(folder_nameHTML);
        }
        else {
            this.FileManagerStyles.updatableElements["fm_folder_name"] = [folder_nameHTML];
        }

        folder_open_icon_wrapperHTML.append(folder_open_iconHTML);
        folderHTML.append(folder_open_icon_wrapperHTML);
        folderHTML.append(folder_iconHTML);
        folderHTML.append(folder_nameHTML);

        if (initial) {
            folder_wrapperHTML.setAttribute("path", "/");
        }
        else {
            if (root_parent_path === "/") {
                folder_wrapperHTML.setAttribute("path", root_parent_path + folder.name);
            }
            else {
                folder_wrapperHTML.setAttribute("path", root_parent_path + "/" + folder.name);
            }
        }
        
        folder_wrapperHTML.append(folderHTML);
        folder_wrapperHTML.append(folder_childrenHTML);

        root.append(folder_wrapperHTML);

        return [folder_open_icon_wrapperHTML, folderHTML, folder_wrapperHTML];
    }

    private async openCloseFolder(folder_parent: HTMLElement, from: string = "nav") {
        let folder_open_icon = folder_parent?.querySelector('.fm_folder_open_icon');
        let folder_wrapper: HTMLElement|null = folder_parent.closest('.fm_folder_wrapper');
        let folder_children: HTMLElement|null|undefined = folder_wrapper?.querySelector('.fm_folder_children');
        let folder_name: HTMLElement|null = folder_parent.querySelector('.fm_folder_name');

        if (folder_wrapper != null && folder_name != null && folder_open_icon != null && folder_open_icon instanceof HTMLImageElement && folder_children != null && folder_children != undefined) {
            let children = folder_children.children;

            if (folder_parent?.classList.contains('fm_opened') && from !== "filelist") {
                folder_parent.classList.remove('fm_opened');
                this.FileManagerStyles.fmRemoveClass(folder_parent, "fm_opened");
                folder_open_icon.src = this.iconsPaths.arrowRightFolders;
    
                for (const child of children) {
                    if (child instanceof HTMLElement) {
                        child.style.display = "none";
                    }
                }
            }
            else if (!folder_parent?.classList.contains('fm_opened')) {
                folder_parent?.classList.add('fm_opened');
                this.FileManagerStyles.fmAddClass(folder_parent, "fm_opened");
                folder_open_icon.src = this.iconsPaths.arrowDownFolder
    
                if (children.length === 0) {
                    if (folder_name?.textContent) {
                        let path = folder_wrapper.getAttribute("path");
                        
                        if (path) {
                            // this.currentPath = path;
                            await this.getInternalFolders(folder_children, path);
                            this.updateUpArrow(path);
                            this.updateRemove();
                            this.updateDownload();
                            this.updateRename();
                            this.updateCopy();
                            this.updateCut();
                            this.updateBackArrow();
                            this.updateCreateFolderAndFiles();
                        }
                    }
                    else {
                        throw new Error('The hierarchy of elements was violated');
                    }
                }
                else {
                    for (const child of children) {
                        if (child instanceof HTMLElement) {
                            child.style.display = "block";
                        }
                        else {
                            throw new Error('The hierarchy of elements was violated');
                        }
                    }
                }
            }
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        
    }

    public async handleOpenNavFolder(event: Event) {
        event.stopPropagation();

        if (event.target != null && event.target instanceof HTMLElement) {
            let targetElem = event.target;

            let folder_parent = targetElem.closest('.fm_folder_parent');
            
            if (folder_parent != null && folder_parent instanceof HTMLElement) {
                await this.openCloseFolder(folder_parent, 'nav');
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
    }

    private focusNavFolder(folder_parent: HTMLElement, back: boolean) {
        if (folder_parent !== this.currentFolder) {
            if (this.currentFolder) {
                this.currentFolder?.classList.remove("fm_folder_parent__opened");
                this.FileManagerStyles.fmRemoveClass(this.currentFolder, "fm_folder_parent__opened");
                
                if (!back) {
                    this.lastFolders.push(this.currentFolder);
                }
            }

            folder_parent?.classList.add("fm_folder_parent__opened");
            this.FileManagerStyles.fmAddClass(folder_parent, "fm_folder_parent__opened");
            this.FileManagerStyles.updatableElements["fm_folder_parent__opened"] = [folder_parent];
            this.currentFolder = folder_parent;
        }
    }

    public handleShowFileList(event: Event): void {
        event.stopPropagation();

        if (event.target != null && event.target instanceof HTMLElement) {
            let targetElem = event.target;
            this.resetSearching();
            this.updateFileList(targetElem);

        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
    }

    private updateListDisplayIcon() {
        if (this.displayModesElements && this.filesDisplayMode === "list") {
            this.displayModesElements.list.classList.add("fm_disabled");
            this.displayModesElements.list.classList.add("fm_selected");
            this.FileManagerStyles.fmAddClass(this.displayModesElements.list, "fm_disabled");
            this.FileManagerStyles.fmAddClass(this.displayModesElements.list, "fm_selected");
            this.displayModesElements.list.style.pointerEvents = 'none';
        }
        else if (this.displayModesElements && this.filesDisplayMode !== "list") {
            this.displayModesElements.list.classList.remove("fm_disabled");
            this.displayModesElements.list.classList.remove("fm_selected");
            this.FileManagerStyles.fmRemoveClass(this.displayModesElements.list, "fm_disabled");
            this.FileManagerStyles.fmRemoveClass(this.displayModesElements.list, "fm_selected");
            this.displayModesElements.list.style.pointerEvents = 'auto';
        }
    }

    private updateTilesDisplayIcon() {
        if (this.displayModesElements && this.filesDisplayMode === "tiles") {
            this.displayModesElements.tiles.classList.add("fm_disabled");
            this.displayModesElements.tiles.classList.add("fm_selected");
            this.FileManagerStyles.fmAddClass(this.displayModesElements.tiles, "fm_disabled");
            this.FileManagerStyles.fmAddClass(this.displayModesElements.tiles, "fm_selected");
            this.displayModesElements.tiles.style.pointerEvents = 'none';
        }
        else if (this.displayModesElements && this.filesDisplayMode !== "tiles") {
            this.displayModesElements.tiles.classList.remove("fm_disabled");
            this.displayModesElements.tiles.classList.remove("fm_selected");
            this.FileManagerStyles.fmRemoveClass(this.displayModesElements.tiles, "fm_disabled");
            this.FileManagerStyles.fmRemoveClass(this.displayModesElements.tiles, "fm_selected");
            this.displayModesElements.tiles.style.pointerEvents = 'auto';
        }
    }

    public handleListDisplayModeClick(event: Event) {
        if (this.filesDisplayMode !== "list") {
            localStorage.fmFilesDisplayMode = "list";
            this.filesDisplayMode = "list";
            this.files_listHTML.style.display = "block";
            this.files_metadataHTML.style.display = "flex";
            this.filesTilesElement.style.display = "none";

            if (this.currentFolder instanceof HTMLElement) {
                this.updateFileList(this.currentFolder, true);
            }

            this.updateListDisplayIcon();
            this.updateTilesDisplayIcon();
        }
    }

    public handleTilesDisplayModeClick(event: Event) {
        if (this.filesDisplayMode !== "tiles") {
            localStorage.fmFilesDisplayMode = "tiles";
            this.filesDisplayMode = "tiles";
            this.files_listHTML.style.display = "none";
            this.files_metadataHTML.style.display = "none";
            this.filesTilesElement.style.display = "flex";

            if (this.currentFolder instanceof HTMLElement) {
                this.updateFileList(this.currentFolder, true);
            }

            this.updateListDisplayIcon();
            this.updateTilesDisplayIcon();
        }
    }

    private updateBackArrow() {
        if (this.options?.addressPaneOptions?.backButtonEnabled && this.arrowsElements && this.arrowsElements.back_arrow) {
            if (this.arrowsElements && this.lastFolders.length > 0 && !this.arrowsState.back_arrow) {
                this.arrowsState.back_arrow = true;
    
                this.arrowsElements.back_arrow.classList.remove("fm_disabled");
                this.FileManagerStyles.fmRemoveClass(this.arrowsElements.back_arrow, "fm_disabled");
                this.arrowsElements.back_arrow.style.pointerEvents = 'auto';
            }
            else if (this.arrowsElements && this.lastFolders.length === 0 && this.arrowsState.back_arrow) {
                this.arrowsState.back_arrow = false;
    
                this.arrowsElements.back_arrow.classList.add("fm_disabled");
                this.FileManagerStyles.fmAddClass(this.arrowsElements.back_arrow, "fm_disabled");
                this.arrowsElements.back_arrow.style.pointerEvents = 'none';
            }
        }

    }

    private updateUpArrow(path: String) {
        if (this.options?.addressPaneOptions?.upButtonEnabled && this.arrowsElements && this.arrowsElements.up_arrow) {
            if (this.arrowsElements && path !== "/" && !this.arrowsState.up_arrow) {
                this.arrowsState.up_arrow = true;
    
                this.arrowsElements.up_arrow.classList.remove("fm_disabled");
                this.FileManagerStyles.fmRemoveClass(this.arrowsElements.up_arrow, "fm_disabled");
                this.arrowsElements.up_arrow.style.pointerEvents = 'auto';
            }
            else if (this.arrowsElements && path === "/" && this.arrowsState.up_arrow) {
                this.arrowsState.up_arrow = false;
    
                this.arrowsElements.up_arrow.classList.add("fm_disabled");
                this.FileManagerStyles.fmAddClass(this.arrowsElements.up_arrow, "fm_disabled");
                this.arrowsElements.up_arrow.style.pointerEvents = 'none';
            }
        }

    }

    private updateCurrentPath(path: String) {
        if (this.currentPathElem) {
            this.currentPathElem.innerHTML = "";

            let path_elements = path.split("/");
    
            let root_path = document.createElement("span");
            root_path.classList.add("fm_path_folder");
            this.FileManagerStyles.fmAddClass(root_path, "fm_path_folder");
            this.FileManagerStyles.updatableElements["fm_path_folder"] = [root_path];
            root_path.textContent = this.rootFolderName;
            this.currentPathElem.append(root_path);
            root_path.setAttribute("path2", "/");
            root_path.addEventListener("click", this.handleNavigationPathClick.bind(this));
    
            if (path_elements[1] !== '') {
                for (let i = 1; i < path_elements.length; i++) {
                    let path_img = document.createElement("img");
                    path_img.classList.add("fm_path_arrow");
                    this.FileManagerStyles.fmAddClass(path_img, "fm_path_arrow");
                    path_img.src = this.iconsPaths.arrowRightNavigation;
    
                    let path_folder = document.createElement("span");
                    path_folder.classList.add("fm_path_folder");
                    this.FileManagerStyles.fmAddClass(path_folder, "fm_path_folder");
                    this.FileManagerStyles.updatableElements["fm_path_folder"].push(path_folder);
                    path_folder.textContent = path_elements[i];
                    
                    this.currentPathElem.append(path_img);
                    this.currentPathElem.append(path_folder);
    
                    let previousPath = path_folder.previousElementSibling?.previousElementSibling?.getAttribute("path2");
                    
                    if (previousPath) {
                        if (previousPath === "/") {
                            path_folder.setAttribute("path2", previousPath + path_elements[i]);
                        }
                        else {
                            path_folder.setAttribute("path2", previousPath + "/" + path_elements[i]);
                        }
                        
                        path_folder.addEventListener("click", this.handleNavigationPathClick.bind(this));
                    }
                }
            }
        } 
    }

    public async handleNavigationPathClick(event: Event) {
        event.stopPropagation();

        if (event.target instanceof HTMLElement) {
            let path = event.target.getAttribute("path2");

            let folder_parent = this.mainPanel.querySelector(`[path="${path}"]`)?.querySelector(".fm_folder_parent");

            if (path && folder_parent instanceof HTMLElement) {
                this.currentPath = path;
                this.resetSearching();
                await this.getInternalFiles(path);
                this.focusNavFolder(folder_parent, false);
                this.updateUpArrow(path);
                this.clearCurrentFiles();
                this.updateBackArrow();
                this.updateCurrentPath(path);
            }
        }
    }

    public handleBackArrowClick(event: Event) {
        event.stopPropagation();

        if (this.lastFolders.length > 0) {
            let lastFolder = this.lastFolders.pop();
            if (lastFolder && lastFolder.isConnected) {
                this.resetSearching();
                this.updateFileList(lastFolder, true);
            }
        }
    }

    public handleUpArrowClick(event: Event) {
        event.stopPropagation();
        if (this.currentFolder instanceof HTMLElement) {
            let folder_wrapper: HTMLElement|null|undefined = this.currentFolder?.parentElement?.parentElement?.parentElement;
            let folder_parent: HTMLElement|null|undefined = folder_wrapper?.querySelector('.fm_folder_parent')

            if (folder_parent instanceof HTMLElement) {
                this.resetSearching();
                this.updateFileList(folder_parent, true);
            }
        }
    }

    public async handleRefreshClick(event: Event) {
        this.updateInterface();
    }

    public handleUploadClick(event: Event) {
        if (this.uploadFilesPanel !== null) {
            if (this.uploadFilesPanel.classList.contains("fm_hidden")) {
                this.FileManagerStyles.fmRemoveClass(this.uploadFilesPanel, "fm_hidden");
                this.uploadFilesPanel.classList.remove("fm_hidden");
            }
            else {
                this.FileManagerStyles.fmAddClass(this.uploadFilesPanel, "fm_hidden");
                this.uploadFilesPanel.classList.add("fm_hidden");
            }
        }
    }

    public submitSettings(mutableStyles: IfileManagerStyles, isInit: boolean) {
        if (this.options?.toolsPaneOptions?.settingsOptions?.settingsEnabled) {    
            this.FileManagerStyles.setMutableStyles(mutableStyles);
            this.FileManagerStyles.updateMutableStyles();
            this.FileManagerStyles.updateFileManagerStyles();
            this.FileManagerStyles.updateFileManagerHeaderStyles();
            this.FileManagerStyles.updateHeaderStyles();
            this.FileManagerStyles.updateUpdatableElements();

            if (!isInit) {
                this.mainPanel.style.display = "none";
    
                if (this.toolsPane !== null) {
                    this.toolsPane.style.display = "none";
                }
                
                if ((this.options?.addressPaneOptions?.addressPaneEnabled) && this.addressPane !== null) {
                    this.addressPane.style.display = "none";
                }
        
                if (this.uploadFilesPanel !== null) {
                    this.FileManagerStyles.fmAddClass(this.uploadFilesPanel, "fm_hidden");
                }
    
                // if (this.navigationPane instanceof HTMLElement && (this.options?.navigationPaneEnabled !== null || this.isMobileVersion || this.isTabletVersion)) {
                //     this.FileManagerStyles.fmAddClass(this.navigationPane, "fm_hidden");
                // }
        
                let message_submitHTML = this.filemanager_root.querySelector(".fm_message_submit");
                if (message_submitHTML instanceof HTMLElement) {
                    message_submitHTML.textContent = this.translations[this.currentLang]["Success"];
        
                    setTimeout(() => {
                        message_submitHTML.textContent = "";
                    }, 2000);
                }
            }
            else if (this.navigationPane) {
                if (this.isMobileVersion || this.isTabletVersion) {
                    this.FileManagerStyles.fmAddClass(this.navigationPane, "fm_hidden");
                }

                if (this.uploadFilesPanel !== null) {
                    this.FileManagerStyles.fmAddClass(this.uploadFilesPanel, "fm_hidden");
                }
            }

        }
    }

    public handleSubmitSettings(event: Event) {
        event.preventDefault();

        if (this.settingsForm) {
            let newMutableStyles = {
                "colors": {
                    hover: this.settingsForm.hover_color.value,
                    border: this.settingsForm.border_color.value,
                    main_background: this.settingsForm.background_color.value,
                    selected: this.settingsForm.select_color.value,
                    text_color: this.settingsForm.text_color.value
                },
                "sizing": {
                    tools: this.settingsForm.tools.value,
                    address: this.settingsForm.address.value,
                    content_pane: this.settingsForm.content_pane.value,
                    navigation_pane: this.settingsForm.navigation_pane.value,
                    settings_panel: this.settingsForm.settings_panel.value,
                }
            };

            this.submitSettings(newMutableStyles, false);
        }   
    }

    public handleResetSettings(event: Event) {
        event.preventDefault();

        let result = window.confirm(this.translations[this.currentLang]["Are you sure you want to reset?"]);
        if (result) {
            let newMutableStyles = this.FileManagerStyles.getDefaultMutableStyles();

            this.FileManagerStyles.setMutableStyles(newMutableStyles);
            this.FileManagerStyles.updateMutableStyles();
            this.FileManagerStyles.updateFileManagerStyles();
            this.FileManagerStyles.updateFileManagerHeaderStyles();
            this.FileManagerStyles.updateHeaderStyles();
            this.FileManagerStyles.updateUpdatableElements();
            this.updateSettingsColorInputs();
            this.updateSettingsInterfaceSelects();
            this.mainPanel.style.display = "none";
            if (this.toolsPane !== null) {
                this.toolsPane.style.display = "none";
            }

            if ((this.options?.addressPaneOptions?.addressPaneEnabled) && this.addressPane) {
                this.addressPane.style.display = "none";
            }

            if (this.uploadFilesPanel !== null) {
                this.FileManagerStyles.fmAddClass(this.uploadFilesPanel, "fm_hidden");
            }

            let message_submitHTML = this.filemanager_root.querySelector(".fm_message_submit");
        
            if (message_submitHTML instanceof HTMLElement) {
                message_submitHTML.textContent = this.translations[this.currentLang]["Success"];
    
                setTimeout(() => {
                    message_submitHTML.textContent = "";
                }, 2000);
            }
        }
    }

    public async handleSearchChange(event: Event) {
        if (this.searchInputElement && this.searchInputElement.value && this.searchInputElement.value !== "") {
            this.searchingString = this.searchInputElement.value;
            await this.getInternalFiles(this.currentPath);

            this.updateCreateFolderAndFiles();
        }
    }

    private async updateFileList(targetElement: HTMLElement, back: boolean = false) {
        let folder_wrapper: HTMLElement|null = targetElement.closest('.fm_folder_wrapper');

        if (folder_wrapper) {
            let folder_parent: HTMLElement|null = folder_wrapper?.querySelector('.fm_folder_parent');

            if (folder_parent instanceof HTMLElement) {
                let path = folder_wrapper.getAttribute("path");

                if (path) {
                    this.currentPath = path;
                    await this.getInternalFiles(path);
                    this.focusNavFolder(folder_parent, back);
                    this.updateUpArrow(path);
                    this.clearCurrentFiles();
                    this.updateBackArrow();
                    this.updateCurrentPath(path);
                }
            }
        }
    }

    private resetSearching() {
        if ((this.options?.addressPaneOptions?.searchingEnabled) && this.searchInputElement) {
            this.searchingString = "";
            this.searchInputElement.value = "";
        }
    }

    public async handleUploadingFile(event: Event) {
        event.preventDefault();

        let input_file = this.filemanager_root.querySelector('.fm_upload_file_func_input');

        if (input_file instanceof HTMLInputElement && input_file.files) {
            const file = input_file.files[0];

            if (!file) {
                return;
            }

            try {
                await this.FileManagerServer.uploadFile(file, this.currentPath);
            }
            catch (error) {
                throw error;
            }
            
            this.resetSearching();
            await this.getInternalFiles(this.currentPath);
            this.updateUpArrow(this.currentPath);
            this.updateRemove();
            this.updateDownload();
            this.updateRename();
            this.updateCopy();
            this.updateCut();
            this.updateInsert();
            this.updateCreateFolderAndFiles();
            
            this.updateCurrentPath(this.currentPath);
            this.updateBackArrow();

            input_file.value = "";
        }
    }

    private async openPreviousFolders(){
        for (let i = 0; i < this.openFolders.length; i++) {
            let check_wrapper = this.filemanager_root.querySelector(`[path="${this.openFolders[i]}"]`);
            let open_folder = check_wrapper?.querySelector(".fm_folder_parent");

            if (open_folder instanceof HTMLElement) {
                await this.openCloseFolder(open_folder);
            }
        }

        this.openFolders = []
    }

    private searchOpenFoldersStart() {
        let folder_root_wrapper = this.filemanager_root.querySelector(".fm_folder_root_wrapper");
        let folder_children_element = folder_root_wrapper?.querySelector(".fm_folder_children");
        let folder_children = folder_children_element?.children;

        if (folder_children) {
            for (let i = 0; i < folder_children.length; i++) {
                this.searchOpenFoldersRecursion(folder_children[i] as HTMLElement);
            }
        }
    }

    private searchOpenFoldersRecursion(folder_wrapper: HTMLElement) {
        let folder_children_element = folder_wrapper?.querySelector(".fm_folder_children");
        let folder_children = folder_children_element?.children;
        let folder_parent = folder_wrapper?.querySelector(".fm_folder_parent");

        if (folder_parent && folder_parent.classList.contains("fm_opened") && folder_wrapper instanceof HTMLElement) {
            let path = folder_wrapper.getAttribute("path");

            if (path) {
                this.openFolders.push(path);
            }
        }

        if (folder_children) {
            for (let i = 0; i < folder_children.length; i++) {
                this.searchOpenFoldersRecursion(folder_children[i] as HTMLElement);
            }
        }
    }

    private async updateNavFolders() {
        let folder_root_wrapper = this.filemanager_root.querySelector(".fm_folder_root_wrapper");
        let folder_root_parent = folder_root_wrapper?.querySelector(".fm_folder_parent");
        let folder_root_childen_element = folder_root_wrapper?.querySelector(".fm_folder_children");
        let folder_open_icon = folder_root_parent?.querySelector('.fm_folder_open_icon');

        if (folder_root_parent instanceof HTMLElement && folder_root_childen_element && folder_open_icon instanceof HTMLImageElement) {
            let buffer_currentPath = this.currentPath;
            
            this.searchOpenFoldersStart();
            folder_root_childen_element.innerHTML = "";

            if (folder_root_parent?.classList.contains('fm_opened')) {
                folder_root_parent.classList.remove('fm_opened');
                this.FileManagerStyles.fmRemoveClass(folder_root_parent, "fm_opened");
                folder_open_icon.src = this.iconsPaths.arrowRightFolders;
            }
            else if (!folder_root_parent?.classList.contains('fm_opened')) {
                folder_root_parent?.classList.add('fm_opened');
                this.FileManagerStyles.fmAddClass(folder_root_parent, "fm_opened");
                folder_open_icon.src = this.iconsPaths.arrowDownFolder;
            }
            
            await this.openCloseFolder(folder_root_parent, 'nav');

            await this.openPreviousFolders();
            this.currentPath = buffer_currentPath;
            let bufferCurrentFolder = this.filemanager_root.querySelector(`[path="${this.currentPath}"]`);
            
            if (bufferCurrentFolder instanceof HTMLElement) {
                this.currentFolder = bufferCurrentFolder;
            }
            else {
                this.currentPath = "/";

                let bufferCurrentFolder = this.filemanager_root.querySelector(`[path="${this.currentPath}"]`);
                if (bufferCurrentFolder instanceof HTMLElement) {
                    this.currentFolder = bufferCurrentFolder;
                }
            }

            
        }
    }

    public async handleUploadingFolder(event: Event) {
        event.preventDefault();

        let input_folder = this.filemanager_root.querySelector('.fm_upload_files_func_input');
        
        if (input_folder instanceof HTMLInputElement && input_folder.files) {
            const files = input_folder.files;

            if (files.length === 0) {
                return;
            }

            try {
                await this.FileManagerServer.uploadFolder(files, this.currentPath);
            }
            catch (error) {
                throw error;
            }

            input_folder.value = "";
            await this.updateNavFolders();

            if (this.currentFolder instanceof HTMLElement) {
                this.resetSearching();
                this.updateFileList(this.currentFolder);
            }
            
        }
    }

    private async openFileListFolder(event: Event) {
        if (event.target != null && event.target instanceof HTMLElement) {
            if (this.currentFolder != null) {
                await this.openCloseFolder(this.currentFolder, 'filelist');
            }

            let targetElem: HTMLElement = event.target;
            let file_block: HTMLElement|null = targetElem.closest('.fm_file_block');
            let file_name: HTMLElement|null|undefined = file_block?.querySelector('.fm_file_name');
            let currentWrapper: HTMLElement|null|undefined = this.currentFolder?.parentElement;
            let currentChildren: HTMLCollection|null|undefined = currentWrapper?.querySelector('.fm_folder_children')?.children;

            if (file_block != null && file_name != null && currentWrapper != null && file_name?.textContent && currentChildren != null) {
                let newCurrentFolder;
                let newCurrentFolderWrapper;

                for (let wrapper of currentChildren) {
                    if (wrapper?.querySelector(".fm_folder_name")?.textContent === file_name?.textContent) {
                        newCurrentFolder = wrapper?.querySelector(".fm_folder_parent");
                        newCurrentFolderWrapper = wrapper;
                        break;
                    }
                }

                if (newCurrentFolder && newCurrentFolder instanceof HTMLElement && newCurrentFolderWrapper != null && newCurrentFolderWrapper instanceof HTMLElement) {
                    let path = newCurrentFolderWrapper.getAttribute("path");
                        
                    if (path && this.currentFolder) {
                        this.currentPath = path;
                        this.currentFolder?.classList.remove("fm_folder_parent__opened");
                        this.FileManagerStyles.fmRemoveClass(this.currentFolder, "fm_folder_parent__opened");

                        newCurrentFolder.classList.add("fm_folder_parent__opened");
                        this.FileManagerStyles.fmAddClass(newCurrentFolder, "fm_folder_parent__opened");
    
                        if (this.currentFolder) {
                            this.lastFolders.push(this.currentFolder);
                        }
    
                        this.currentFolder = newCurrentFolder;
                        
                        if (this.files_listHTML != null) {
                            this.files_listHTML.innerHTML = "";
                            await this.getInternalFiles(path);
                            this.updateUpArrow(path);
                            this.updateCurrentPath(path);
                            this.updateBackArrow();
                            this.clearCurrentFiles();
                        }
                    }
                }
                else {
                    throw new Error('The hierarchy of elements was violated');
                }
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            } 
        }
    }

    public async handleOpenFileListFolder(event: Event) {
        event.stopPropagation();
        this.openFileListFolder(event);
    }

    private updateRemove() {
        if (this.toolsElements !== null && this.toolsElements && this.toolsElements.remove) {
            if (this.currentFilesPaths.length > 0) {
                this.toolsState.remove = true;
    
                this.toolsElements.remove.classList.remove("fm_disabled");
                this.FileManagerStyles.fmRemoveClass(this.toolsElements.remove, "fm_disabled");
                this.toolsElements.remove.style.pointerEvents = 'auto';
            }
            else {
                this.toolsState.remove = false;
    
                this.toolsElements.remove.classList.add("fm_disabled");
                this.FileManagerStyles.fmAddClass(this.toolsElements.remove, "fm_disabled");
                this.toolsElements.remove.style.pointerEvents = 'none';
            }
        }


    }

    private updateDownload() {
        if (this.toolsElements !== null && this.toolsElements && this.toolsElements.download) {
            if (this.currentFilesPaths.length > 0) {
                this.toolsState.download = true;
    
                this.toolsElements.download.classList.remove("fm_disabled");
                this.FileManagerStyles.fmRemoveClass(this.toolsElements.download, "fm_disabled");
                this.toolsElements.download.style.pointerEvents = 'auto';
            }
            else {
                this.toolsState.download = false;
    
                this.toolsElements.download.classList.add("fm_disabled");
                this.FileManagerStyles.fmAddClass(this.toolsElements.download, "fm_disabled");
                this.toolsElements.download.style.pointerEvents = 'none';
            }
        }
    }

    private updateCreateFolderAndFiles() {
        if (this.toolsElements !== null && this.toolsElements && this.toolsElements.createFile && this.toolsElements.createFolder) {
            if (this.currentPath && this.searchingString === "") {
                this.toolsState.createFile = true;
                this.toolsState.createFolder = true;
    
                this.toolsElements.createFile.classList.remove("fm_disabled");
                this.FileManagerStyles.fmRemoveClass(this.toolsElements.createFile, "fm_disabled");
                this.toolsElements.createFile.style.pointerEvents = 'auto';

                this.toolsElements.createFolder.classList.remove("fm_disabled");
                this.FileManagerStyles.fmRemoveClass(this.toolsElements.createFolder, "fm_disabled");
                this.toolsElements.createFolder.style.pointerEvents = 'auto';
            }
            else {
                this.toolsState.createFile = false;
                this.toolsState.createFolder = false;
    
                this.toolsElements.createFile.classList.add("fm_disabled");
                this.FileManagerStyles.fmAddClass(this.toolsElements.createFile, "fm_disabled");
                this.toolsElements.createFile.style.pointerEvents = 'none';

                this.toolsElements.createFolder.classList.add("fm_disabled");
                this.FileManagerStyles.fmAddClass(this.toolsElements.createFolder, "fm_disabled");
                this.toolsElements.createFolder.style.pointerEvents = 'none';
            }
        }
    }

    private updateRename() {
        if (this.toolsElements !== null && this.toolsElements && this.toolsElements.rename) {
            if (this.currentFilesPaths.length === 1) {
                this.toolsState.rename = true;
    
                this.toolsElements.rename.classList.remove("fm_disabled");
                this.FileManagerStyles.fmRemoveClass(this.toolsElements.rename, "fm_disabled");
                this.toolsElements.rename.style.pointerEvents = 'auto';
            }
            else {
                this.toolsState.rename = false;
    
                this.toolsElements.rename.classList.add("fm_disabled");
                this.FileManagerStyles.fmAddClass(this.toolsElements.rename, "fm_disabled");
                this.toolsElements.rename.style.pointerEvents = 'none';
            }
        }
    }

    private updateCopy() {
        if (this.toolsElements !== null && this.toolsElements && this.toolsElements.copy) {
            if (this.currentFilesPaths.length > 0 && this.searchingString === "") {
                this.toolsState.copy = true;
    
                this.toolsElements.copy.classList.remove("fm_disabled");
                this.FileManagerStyles.fmRemoveClass(this.toolsElements.copy, "fm_disabled");
                this.toolsElements.copy.style.pointerEvents = 'auto';
            }
            else {
                this.toolsState.copy = false;
    
                this.toolsElements.copy.classList.add("fm_disabled");
                this.FileManagerStyles.fmAddClass(this.toolsElements.copy, "fm_disabled");
                this.toolsElements.copy.style.pointerEvents = 'none';
            }
    
            this.updateInsert();
        }

    }

    private updateCut() {
        if (this.toolsElements !== null && this.toolsElements && this.toolsElements.cut) {
            if (this.currentFilesPaths.length > 0 && this.searchingString === "") {
                this.toolsState.cut = true;
    
                this.toolsElements.cut.classList.remove("fm_disabled");
                this.FileManagerStyles.fmRemoveClass(this.toolsElements.cut, "fm_disabled");
                this.toolsElements.cut.style.pointerEvents = 'auto';
            }
            else {
                this.toolsState.cut = false;
    
                this.toolsElements.cut.classList.add("fm_disabled");
                this.FileManagerStyles.fmAddClass(this.toolsElements.cut, "fm_disabled");
                this.toolsElements.cut.style.pointerEvents = 'none';
            }
    
            this.updateInsert();
        }
    }

    private updateInsert() {
        if (this.toolsElements !== null && this.toolsElements && this.toolsElements.insert) {
            if (this.selectedFilesPaths.length > 0 && this.searchingString === "") {
                this.toolsState.insert = true;
    
                this.toolsElements.insert.classList.remove("fm_disabled");
                this.FileManagerStyles.fmRemoveClass(this.toolsElements.insert, "fm_disabled");
                this.toolsElements.insert.style.pointerEvents = 'auto';
            }
            else {
                this.toolsState.insert = false;
    
                this.toolsElements.insert.classList.add("fm_disabled");
                this.FileManagerStyles.fmAddClass(this.toolsElements.insert, "fm_disabled");
                this.toolsElements.insert.style.pointerEvents = 'none';
            }
        }
    }

    private clearCurrentFiles() {
        this.currentFiles.forEach(fileBlock => {
            fileBlock.classList.remove("fm_openedFile")
            this.FileManagerStyles.fmRemoveClass(fileBlock, "fm_openedFile");
        });

        this.currentFiles = [];
        this.currentFilesPaths = [];
        this.lastFile = null;

        this.updateRemove();
        this.updateDownload();
        this.updateRename();
        this.updateCopy();
        this.updateCreateFolderAndFiles();
        this.updateCut();
    }

    public handleFilemanagerClick(event: Event) {
        if (event.target instanceof HTMLElement && !event.target.closest(".fm_file_block")) {
            this.clearCurrentFiles();
        }
    }

    public async handleRemoveClick(event: Event) {
        event.stopPropagation();
        
        let result = window.confirm(this.translations[this.currentLang]["Are you sure you want to delete?"]);
        
        if (this.currentFilesPaths.length > 0 && result) {
            try {
                await this.currentFilesPaths.forEach(async filePath => {
                    await this.FileManagerServer.removeFileOrFolder(filePath);
                });

                if (this.currentFolder instanceof HTMLElement) {
                    await this.updateNavFolders();
                    this.updateFileList(this.currentFolder, true);
                    
                }
                else {
                    throw new Error('The hierarchy of elements was violated');
                }
                
            }
            catch (error) {
                throw error;
            }
        }
    }

    public async handleDownloadClick(event: Event) {
        event.stopPropagation();

        let result = window.confirm(this.translations[this.currentLang]["Are you sure you want to download?"]);

        if (result) {
            try {
                await this.FileManagerServer.downloadFiles(this.currentFilesPaths);
                
                if (this.currentFolder instanceof HTMLElement) {
                    await this.updateNavFolders();
                    this.updateFileList(this.currentFolder, true);
                    
                }
                else {
                    throw new Error('The hierarchy of elements was violated');
                }
                
            }
            catch (error) {
                throw error;
            }
        }
    }

    public async handleRenameClick(event: Event) {
        event.stopPropagation();

        if (this.currentFiles.length === 1) {
            const originalTextElem = this.currentFiles[0]?.querySelector(".fm_file_name");

            if (originalTextElem instanceof HTMLElement && originalTextElem.textContent) {
                const inputElement = document.createElement('input');
                // inputElement.type = 'text';
                inputElement.value = originalTextElem.textContent;
                inputElement.classList.add("fm_file_name");
                inputElement.style.height = "80%";
                inputElement.style.width = "80%";
                inputElement.style.resize = "None";
                

                if (this.filesDisplayMode === "tiles") {
                    this.FileManagerStyles.fmAddClass(inputElement, "fm_file_name_tiles");
                }
                else {
                    this.FileManagerStyles.fmAddClass(inputElement, "fm_file_name");
                    this.FileManagerStyles.fmAddClass(inputElement, "fm_file_metadata");
                }
                inputElement.style.color = "black";
    
                this.currentFiles[0].replaceChild(inputElement, originalTextElem);
    
                inputElement.focus();


                let bufferThis = this;
                inputElement.addEventListener('blur', async function() {
                    
                    const newTextElement = document.createElement('span');
                    newTextElement.textContent = inputElement.value;
                    newTextElement.classList.add("fm_file_name");
                    newTextElement.classList.add("fm_file_metadata");
                    if (bufferThis.filesDisplayMode === "tiles") {
                        bufferThis.FileManagerStyles.fmAddClass(newTextElement, "fm_file_name_tiles");
                    }
                    else {
                        bufferThis.FileManagerStyles.fmAddClass(newTextElement, "fm_file_name");
                        bufferThis.FileManagerStyles.fmAddClass(newTextElement, "fm_file_metadata");
                    }
        
                    
                    if (bufferThis.currentFiles[0] instanceof HTMLElement) {
                        bufferThis.currentFiles[0].replaceChild(newTextElement, inputElement);
                        
                        if (originalTextElem.textContent === inputElement.value) {
                            return;
                        }

                        try {
                            if (bufferThis.searchingString !== "") {
                                let pathWithoutFileName = bufferThis.currentFilesPaths[0].split("/").slice(0, -1).join("/");
                                let newPath = pathWithoutFileName + "/" + newTextElement.textContent;
                                await bufferThis.FileManagerServer.renameFileOrFolder(`${bufferThis.currentFilesPaths[0]}`, `${newPath}`);
                            }
                            else {
                                if (bufferThis.currentPath === "/") {
                                    await bufferThis.FileManagerServer.renameFileOrFolder(bufferThis.currentFilesPaths[0], `/${newTextElement.textContent}`);
                                }
                                else {
                                    await bufferThis.FileManagerServer.renameFileOrFolder(bufferThis.currentFilesPaths[0], `${bufferThis.currentPath}/${newTextElement.textContent}`);
                                }
                            }
                            
                            if (bufferThis.currentFolder instanceof HTMLElement) {
                                await bufferThis.updateNavFolders();
                                bufferThis.updateFileList(bufferThis.currentFolder, true);
                            }
                            else {
                                throw new Error('The hierarchy of elements was violated');
                            }
                        }
                        catch (error) {
                            throw error;
                        }
                    }
                });
            }
        }
    }

    public handleCopyClick(event: Event) {
        event.stopPropagation();

        this.copyFiles();
    }

    public handleCutClick(event: Event) {
        event.stopPropagation();

        this.cutFiles();
    }

    private async copyFiles() {
        if (!this.options?.toolsPaneOptions?.toolsEnabled?.movingFiles) {
            return;
        }

        if (this.searchingString !== "") {
            return;
        }

        this.selectedFilesPaths = [];
        if (this.currentFilesPaths.length > 0) {
            this.currentFilesPaths.forEach(filePath => {
                this.selectedFilesPaths.push(filePath);
            });
            
            this.cutState = false;
            this.copyState = true;
            this.updateInsert();
        }
    }

    private async insertFiles() {
        if (!this.options?.toolsPaneOptions?.toolsEnabled?.movingFiles) {
            return;
        }

        if (this.searchingString !== "") {
            return;
        }

        if (this.selectedFilesPaths.length > 0) {
            if (this.copyState) {
                try {
                    await this.selectedFilesPaths.forEach(async filePath => {
                        let insert_element_paths = filePath.split('/');
                        let insert_element_name = insert_element_paths[insert_element_paths.length - 1];

                        
                        if (this.currentPath.includes(filePath)) {
                            return;
                        }
                    

                        await this.FileManagerServer.copyFileOrFolder(`${filePath}`, `${this.currentPath}/${insert_element_name}`);

                    });

                    if (this.currentFolder instanceof HTMLElement) {
                        await this.updateNavFolders();
                        this.updateFileList(this.currentFolder, true);
                    }
                    else {
                        throw new Error('The hierarchy of elements was violated');
                    }
                    
                }
                catch (error) {
                    throw error;
                }
            }
            else if (this.cutState) {
                try {
                    await this.selectedFilesPaths.forEach(async filePath => {
                        let insert_element_paths = filePath.split('/');
                        let insert_element_name = insert_element_paths[insert_element_paths.length - 1];
    
                        if (this.currentPath.includes(filePath)) {
                            return;
                        }
    
                        if (this.currentPath === "/" && filePath === `/${insert_element_name}`) {
                            return;
                        }
    
                        if (filePath === `${this.currentPath}/${insert_element_name}`) {
                            return;
                        }
                        
                        await this.FileManagerServer.copyFileOrFolder(`${filePath}`, `${this.currentPath}/${insert_element_name}`);
                        
                        await this.FileManagerServer.removeFileOrFolder(`${filePath}`);
                    });
                    
    
                    if (this.currentFolder instanceof HTMLElement) {
                        await this.updateNavFolders();
                        this.updateFileList(this.currentFolder, true);
                    }
                    else {
                        throw new Error('The hierarchy of elements was violated');
                    }
                }
                catch (error) {
                    throw error;
                }
            }
        }
    }

    private async cutFiles() {
        if (!this.options?.toolsPaneOptions?.toolsEnabled?.movingFiles) {
            return;
        }
        
        if (this.searchingString !== "") {
            return;
        }

        this.selectedFilesPaths = [];
        if (this.currentFilesPaths.length > 0) {
            this.currentFilesPaths.forEach(filePath => {
                this.selectedFilesPaths.push(filePath);
            });
            
            this.copyState = false;
            this.cutState = true;
            this.updateInsert();
        }
    }

    public async handleInsertClick(event: Event) {
        event.stopPropagation();

        await this.insertFiles();
    }

    public handleSettingsClick() {  
        if (this.options?.toolsPaneOptions?.settingsOptions?.settingsEnabled && this.settingsPanel) {
            if (this.settingsPanel.style.display === "block") {
                this.settingsPanel.style.display = "none";
                this.mainPanel.style.display = "flex";
                if (this.toolsPane !== null) {
                    this.toolsPane.style.display = "flex";

                    if (this.isMobileVersion && this.extraToolsPane) {
                        this.extraToolsPane.style.display = "flex";
                    }
                }
                if ((this.options?.addressPaneOptions?.addressPaneEnabled) && this.addressPane) {
                    this.addressPane.style.display = "flex";
                }
            }
            else {
                this.settingsPanel.style.display = "block";
                this.mainPanel.style.display = "none";
                if (this.toolsPane !== null) {
                    this.toolsPane.style.display = "none";

                    if (this.isMobileVersion && this.extraToolsPane) {
                        this.extraToolsPane.style.display = "none";
                    }
                }
    
                if ((this.options?.addressPaneOptions?.addressPaneEnabled) && this.addressPane) {
                    this.addressPane.style.display = "none";
                }

                
            }
        }
    }

    public async handleKeyDown(event: KeyboardEvent) {
        // Ctrl/Cmd + C
        if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
            event.preventDefault();
            this.copyFiles();
        }
        // Ctrl/Cmd + V
        else if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
            event.preventDefault();
            await this.insertFiles();
        }
        // Ctrl/Cmd + X
        else if ((event.ctrlKey || event.metaKey) && event.key === 'x') {
            event.preventDefault();
            this.cutFiles();
        }
        else if (event.key === "Delete") {
            event.preventDefault();
            let result = window.confirm(this.translations[this.currentLang]["Are you sure you want to delete?"]);
            if (this.currentFilesPaths.length > 0 && result) {
                try {
                    await this.currentFilesPaths.forEach(async filePath => {
                        await this.FileManagerServer.removeFileOrFolder(filePath);
                    });

                    if (this.currentFolder instanceof HTMLElement) {
                        await this.updateNavFolders();
                        this.updateFileList(this.currentFolder, true);
                        
                    }
                    else {
                        throw new Error('The hierarchy of elements was violated');
                    }
                    
                }
                catch (error) {
                    throw error;
                }
            }
        }
    }

    public handleInsert(event: Event) {
        if (this.searchingString !== "") {
            return;
        }

        this.selectedFilesPaths = [];
        if (this.currentFilesPaths.length > 0) {
            this.currentFilesPaths.forEach(filePath => {
                this.selectedFilesPaths.push(filePath);
            });
            
            this.cutState = false;
            this.copyState = true;
            this.updateInsert();
        }
    }

    public handleFileClick(event: MouseEvent) {
        if (event.target instanceof HTMLElement) {
            if (!event.ctrlKey && !event.shiftKey) {
                this.currentFiles.forEach(fileBlock => {
                    this.FileManagerStyles.fmRemoveClass(fileBlock, "fm_openedFile");
                    fileBlock.classList.remove("fm_openedFile");
                });
            }

            const file_block = event.target.closest(".fm_file_block");

            if (file_block instanceof HTMLDivElement) {
                if (!file_block.classList.contains("fm_openedFile")) {
                    if (event.shiftKey && this.lastFile) {
                        let allFileBlocks;
                        if (this.filesDisplayMode === "list") {
                            allFileBlocks = this.files_listHTML.children;
                        }
                        else {
                            allFileBlocks = this.filesTilesElement.children;
                        }

                        let startSelect = false;

                        for (const file of allFileBlocks) {
                            let fileBuffer = file as HTMLElement;
                            if (fileBuffer === file_block) {
                                if (startSelect) {
                                    const file_name = fileBuffer.querySelector(".fm_file_name");
                                    if (file_name instanceof HTMLElement && file_name.textContent) {
                                        this.currentFiles.push(fileBuffer);
                                        this.FileManagerStyles.fmAddClass(fileBuffer, "fm_openedFile");
                                        fileBuffer.classList.add("fm_openedFile");
    
                                        if (this.searchingString !== "" && !this.currentFilesPaths.includes(fileBuffer.title)) {
                                            this.currentFilesPaths.push(fileBuffer.title);
                                        }
                                        else  {
                                            let fullPath = this.currentPath === "/" ?  "/" + file_name.textContent : this.currentPath + "/" + file_name.textContent;
                                            
                                            if (!this.currentFilesPaths.includes(fullPath)) {
                                                this.currentFilesPaths.push(fullPath);
                                            }
                                        }
    
                                    }
                                   
                                    startSelect = false;
                                    break;
                                }
                                else {
                                    startSelect = true;
                                }
                            }

                            if (startSelect) {
                                const file_name = fileBuffer.querySelector(".fm_file_name");
                                if (file_name instanceof HTMLElement && file_name.textContent) {
                                    this.currentFiles.push(fileBuffer);
                                    this.FileManagerStyles.fmAddClass(fileBuffer, "fm_openedFile");
                                    fileBuffer.classList.add("fm_openedFile");
    
                                    if (this.searchingString !== "" && !this.currentFilesPaths.includes(fileBuffer.title)) {
                                        this.currentFilesPaths.push(file_block.title);
                                    }
                                    else {
                                        let fullPath = this.currentPath === "/" ?  "/" + file_name.textContent : this.currentPath + "/" + file_name.textContent;
                                        if (!this.currentFilesPaths.includes(fullPath)) {
                                            this.currentFilesPaths.push(fullPath);
                                        }
                                    }
                                }
                            }

                            if (fileBuffer === this.lastFile) {
                                if (startSelect) {
                                    startSelect = false;
                                    break;
                                }
                                else {
                                    startSelect = true;
                                }
                            }
                        }
                    }
                    else {
                        this.FileManagerStyles.fmAddClass(file_block, "fm_openedFile");
                        file_block.classList.add("fm_openedFile");
    
                        const file_name = file_block.querySelector(".fm_file_name");
                        if (file_name instanceof HTMLElement && file_name.textContent) {
                            if (event.ctrlKey) {
                                this.currentFiles.push(file_block);
                                this.lastFile = file_block;
        
                                if (this.searchingString !== "") {
                                    this.currentFilesPaths.push(file_block.title);
                                }
                                else {
                                    let fullPath = this.currentPath === "/" ?  "/" + file_name.textContent : this.currentPath + "/" + file_name.textContent;
                                    this.currentFilesPaths.push(fullPath);
                                }
                            }
                            else {
                                this.currentFiles = [file_block];
    
                                this.lastFile = file_block;
        
                                if (this.searchingString !== "") {
                                    this.currentFilesPaths = [file_block.title];
                                }
                                else {
                                    let fullPath = this.currentPath === "/" ?  "/" + file_name.textContent : this.currentPath + "/" + file_name.textContent;
                                    this.currentFilesPaths = [fullPath];
                                }
                            }
                        }
                    }
                }
                else {
                    this.FileManagerStyles.fmRemoveClass(file_block, "fm_openedFile");
                    file_block.classList.remove("fm_openedFile");

                    let index = this.currentFiles.indexOf(file_block);
                    if (index !== -1) {
                        this.currentFiles.splice(index, 1);
                    }

                    const file_name = file_block.querySelector(".fm_file_name");
    
                    if (file_name instanceof HTMLElement && file_name.textContent) {
                        if (this.searchingString !== "") {
                            let index = this.currentFilesPaths.indexOf(file_block.title);
                            if (index !== -1) {
                                this.currentFiles.splice(index, 1);
                            }
                        }
                        else {
                            let fullPath = this.currentPath === "/" ?  "/" + file_name.textContent : this.currentPath + "/" + file_name.textContent;
                            let index = this.currentFilesPaths.indexOf(fullPath);
                            if (index !== -1) {
                                this.currentFiles.splice(index, 1);
                            }
                        }
                    }
                }


                this.updateRemove();
                this.updateDownload();
                this.updateRename();
                this.updateCopy();
                this.updateCut();
            }

            
        }
    }

    private async getInternalFolders(folder_children: HTMLElement, path: string) {
        let folders: folder[];

        try {
            folders = await this.FileManagerServer.getFolders(path);
        } catch (error) {
            throw error;
        }

        if (folders != null) {
            folders.forEach(folder => {
                let newfolder = this.createHTMLNavFolder(folder, folder_children);
    
                if (newfolder) {
                    newfolder[0]?.addEventListener("click", this.handleOpenNavFolder.bind(this));
                    newfolder[1]?.addEventListener("click", this.handleShowFileList.bind(this));
                }
            });
        }
    }

    private startLoading() {
        this.loaderElem.style.display = "flex";
        this.filesTilesElement.style.display = "none";
        this.files_listHTML.style.display = "none";
        this.files_metadataHTML.style.display = "none";
    }

    private endLoading() {
        this.loaderElem.style.display = "none";

        if (this.filesDisplayMode === "list") {
            this.files_listHTML.style.display = "block";
            this.files_metadataHTML.style.display = "flex";
        }
        else if (this.filesDisplayMode === "tiles") {
            this.filesTilesElement.style.display = "flex";
        }
    }

    public handleTouchFolderStart(event: Event) {
        let bufferThis = this;
        this.timerTouching = setTimeout(function() {
            bufferThis.openFileListFolder(event);
          }, 500);
    }

    public handleTouchFolderEnd(event: Event) {
        if (this.timerTouching) {
            clearTimeout(this.timerTouching);
        }
    }

    private async getInternalFiles(path: string) {
        let files: file[];
        this.startLoading();
        try {
            if (this.searchingString === "") {
                files = await this.FileManagerServer.getFiles(path);
            }
            else {
                files = await this.FileManagerServer.searchFiles(this.searchingString, path);
            }
        } catch (error) {
            throw error;
        }
        this.endLoading();

        if (files != null && this.files_listHTML) {
            if (this.filesDisplayMode === "list") {
                this.files_listHTML.innerHTML = "";

                if (files.length === 0) {
                    let emptyMessage = document.createElement("span");
                    emptyMessage.textContent = this.translations[this.currentLang]["This folder is empty."]
                    this.FileManagerStyles.fmAddClass(emptyMessage, "fm_empty_message");
                    this.files_listHTML.append(emptyMessage)
                }

                files.forEach(file => {
                    if (this.searchingString === "") {
                        let file_block;
                        if (this.options?.toolsPaneOptions?.toolsEnabled?.movingFiles) {
                            file_block = this.createHTMLFileList(file, true);
                        }
                        else {
                            file_block = this.createHTMLFileList(file, false);
                        }

                        if (file.isFolder) {
                            file_block.addEventListener("dblclick", this.handleOpenFileListFolder.bind(this));
                            file_block.addEventListener("touchstart", this.handleTouchFolderStart.bind(this));
                            file_block.addEventListener("touchend", this.handleTouchFolderEnd.bind(this));
                        }
                    }
                    else {
                        let file_block = this.createHTMLFileList(file, false);
                        
                        if (file.path) {
                            file_block.title = file.path;
                        }
                    }

                });
            }
            else if (this.filesDisplayMode === "tiles") {
                this.filesTilesElement.innerHTML = "";

                if (files.length === 0) {
                    let emptyMessage = document.createElement("span");
                    emptyMessage.textContent = this.translations[this.currentLang]["This folder is empty."]
                    this.FileManagerStyles.fmAddClass(emptyMessage, "fm_empty_message");
                    this.filesTilesElement.append(emptyMessage)
                }

                files.forEach(file => {
                    if (this.searchingString === "") {
                        let file_block;
                        if (this.options?.toolsPaneOptions?.toolsEnabled?.movingFiles) {
                            file_block = this.createHTMLFileTiles(file, true);
                        }
                        else {
                            file_block = this.createHTMLFileTiles(file, false);
                        }

                        if (file.isFolder) {
                            file_block.addEventListener("dblclick", this.handleOpenFileListFolder.bind(this));
                            file_block.addEventListener("touchstart", this.handleTouchFolderStart.bind(this));
                            file_block.addEventListener("touchend", this.handleTouchFolderEnd.bind(this));
                        }
                    }
                    else {
                        let file_block = this.createHTMLFileTiles(file, false);
                        
                        if (file.path) {
                            file_block.title = file.path;
                        }
                    }
                });
            }
        }
        
    }

    private updateSettingsColorInputs() {
        for (let key in this.settingsColorInput) {
            this.settingsColorInput[key].value = this.FileManagerStyles.fileManagerMutableStyles.colors[key];
        }
    }

    private updateSettingsInterfaceSelects() {
        for (let key in this.settingsInterfaceSelect) {
            let options: HTMLCollection = this.settingsInterfaceSelect[key].children;

            for (let i = 0; i < options.length; i++) {
                let option = options[i] as HTMLOptionElement;
                if (option.value === this.FileManagerStyles.fileManagerMutableStyles.sizing[key]) {
                    option.selected = true;
                }
            }
        }
    }

    public handleFilesDragStart(event: Event) {
        if (this.searchingString !== "" || !this.options?.toolsPaneOptions?.toolsEnabled?.movingFiles) {
            return;
        }

        let target = event.target as HTMLElement;
        let file_block = target.closest(".fm_file_block");
        if (file_block instanceof HTMLElement && this.currentPath) {
            let file_name = file_block.querySelector(".fm_file_name")?.textContent;

            if (!file_name) {
                return;
            }

            if (this.currentPath === "/") {
                this.currentDragPath = `${this.currentPath}${file_name}`;
            }
            else {
                this.currentDragPath = `${this.currentPath}/${file_name}`;
            }

            this.currentStartDragElement = file_block;
        }
    }

    public handleFilesDragOver(event: Event) {
        if (this.searchingString !== "" || !this.options?.toolsPaneOptions?.toolsEnabled?.movingFiles) {
            return;
        }

        event.preventDefault();
        let target = event.target as HTMLElement;
        let file_block = target.closest(".fm_file_block");
        let folder_block = target.closest(".fm_folder_parent");

        if (file_block instanceof HTMLElement && this.currentPath && this.currentStartDragElement !== file_block && !this.currentFiles.includes(file_block)) {
            if (file_block.getAttribute("isfolder") === "true") {
                this.currentDragingElement = file_block;
                let file_icon = file_block.querySelector(".fm_file_icon");
                
                if (file_icon instanceof HTMLImageElement) {
                    file_icon.src = this.options?.icons?.openedFolder;
                    this.FileManagerStyles.fmAddClass(file_block, "fm_selected");
                    let checkDragingElement = this.currentDragingElement;
                    
                    setTimeout(() => {
                        if (this.currentDragingElement !== checkDragingElement) {
                            this.FileManagerStyles.fmRemoveClass(file_block, "fm_selected");
                            file_icon.src = this.options?.icons?.folder;
                        }
                    }, 100);
                }   
            }
        }
        else if (folder_block instanceof HTMLElement && this.currentPath) {
            this.currentDragingElement = folder_block;

            let folder_icon = folder_block.querySelector(".fm_folder_icon");
            if (folder_icon instanceof HTMLImageElement) {
                folder_icon.src = this.options?.icons?.openedFolder;

                this.FileManagerStyles.fmAddClass(folder_block, "fm_selected");
                let checkDragingElement = this.currentDragingElement;

                setTimeout(() => {
                    if (this.currentDragingElement !== checkDragingElement) {
                        this.FileManagerStyles.fmRemoveClass(folder_block, "fm_selected");
                        folder_icon.src = this.options?.icons?.folder;
                    }
                }, 100);
            }
        }
    } 

    public handleFilesDragLeave(event: Event) {
        event.preventDefault()

        this.currentDragingElement = null;
    }

    public async handleFilesDrop(event: Event) {
        if (this.searchingString !== "" || !this.options?.toolsPaneOptions?.toolsEnabled?.movingFiles) {
            return;
        }

        let target = event.target as HTMLElement;
        let file_block = target.closest(".fm_file_block");
        let folder_block = target.closest(".fm_folder_parent");
        let folder_block_wrapper = folder_block?.parentElement;

        if (this.currentStartDragElement instanceof HTMLElement && file_block instanceof HTMLElement && this.currentPath && this.currentDragPath && !this.currentFiles.includes(file_block)) {
            let file_name = file_block.querySelector(".fm_file_name")?.textContent;

            if (!file_name) {
                let file_icon = file_block.querySelector(".fm_file_icon");
                
                if (file_icon instanceof HTMLImageElement) {
                    file_icon.src = this.options?.icons?.folder;
                }
                this.FileManagerStyles.fmRemoveClass(file_block, "fm_selected");
                
                return;
            }

            let targetPath;
            if (this.currentPath === "/") {
                targetPath = `${this.currentPath}${file_name}`;
            }
            else {
                targetPath = `${this.currentPath}/${file_name}`;
            }
            
            let index = this.currentFiles.indexOf(this.currentStartDragElement);
            if (index === -1) {
                if (targetPath === this.currentDragPath || file_block.getAttribute("isFolder") === "false") {
                    let file_icon = file_block.querySelector(".fm_file_icon");
                    
                    if (file_icon instanceof HTMLImageElement) {
                        file_icon.src = this.options?.icons?.folder;
                    }
                    this.FileManagerStyles.fmRemoveClass(file_block, "fm_selected");
                    return;
                }
                
                let splitedCurrentDragPath = this.currentDragPath.split("/");
                let currentDragElementName = splitedCurrentDragPath[splitedCurrentDragPath.length - 1];
                let finalPath = `${targetPath}/${currentDragElementName}`;

                if (this.currentDragPath == finalPath) {
                    return;
                }

                if (targetPath.includes(this.currentDragPath)) {
                    let file_icon = file_block.querySelector(".fm_file_icon");
                    
                    if (file_icon instanceof HTMLImageElement) {
                        file_icon.src = this.options?.icons?.folder;
                    }
                    this.FileManagerStyles.fmRemoveClass(file_block, "fm_selected");
                    return;
                }

                await this.FileManagerServer.copyFileOrFolder(this.currentDragPath, finalPath);
                await this.FileManagerServer.removeFileOrFolder(this.currentDragPath);
            }
            else {
                await this.currentFilesPaths.forEach(async filePath => {
                    if (targetPath === filePath || file_block.getAttribute("isFolder") === "false") {
                        let file_icon = file_block.querySelector(".fm_file_icon");
                        
                        if (file_icon instanceof HTMLImageElement) {
                            file_icon.src = this.options?.icons?.folder;
                        }
                        this.FileManagerStyles.fmRemoveClass(file_block, "fm_selected");
                        return;
                    }
                    
                    let splitedCurrentDragPath = filePath.split("/");
                    let currentDragElementName = splitedCurrentDragPath[splitedCurrentDragPath.length - 1];
                    let finalPath = `${targetPath}/${currentDragElementName}`;

                    if (filePath == finalPath) {
                        return;
                    }

                    if (targetPath.includes(filePath)) {
                        let file_icon = file_block.querySelector(".fm_file_icon");
                        
                        if (file_icon instanceof HTMLImageElement) {
                            file_icon.src = this.options?.icons?.folder;
                        }
                        this.FileManagerStyles.fmRemoveClass(file_block, "fm_selected");
                        return;
                    }

                    await this.FileManagerServer.copyFileOrFolder(filePath, finalPath);
                    await this.FileManagerServer.removeFileOrFolder(filePath);
                });
            }
            
            if (this.currentFolder instanceof HTMLElement) {
                await this.updateNavFolders();
                this.updateFileList(this.currentFolder, true);
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
        }
        else if (this.currentStartDragElement instanceof HTMLElement && folder_block instanceof HTMLElement && folder_block_wrapper instanceof HTMLElement && this.currentDragPath) {     
            if (folder_block_wrapper.classList.contains("fm_folder_root_wrapper")) {
                this.FileManagerStyles.fmRemoveClass(folder_block, "fm_selected");
                let folder_icon = folder_block.querySelector(".fm_folder_icon");

                if (folder_icon instanceof HTMLImageElement) {
                    folder_icon.src = this.options?.icons?.folder;
                }
            }
            
            let index = this.currentFiles.indexOf(this.currentStartDragElement);
            if (index === -1) {
                let targetPath = folder_block_wrapper.getAttribute("path");
                let splitedCurrentDragPath = this.currentDragPath.split("/");
                let currentDragElementName = splitedCurrentDragPath[splitedCurrentDragPath.length - 1];
    
                let finalPath;
                if (targetPath=== "/") {
                    finalPath = `/${currentDragElementName}`;
                }
                else {
                    finalPath = `${targetPath}/${currentDragElementName}`;
                }
    
                if (targetPath !== null && targetPath.includes(this.currentDragPath)) {
                    this.FileManagerStyles.fmRemoveClass(folder_block, "fm_selected");
                    let folder_icon = folder_block.querySelector(".fm_folder_icon");
    
                    if (folder_icon instanceof HTMLImageElement) {
                        folder_icon.src = this.options?.icons?.folder;
                    }
    
                    return;
                }
    
                if (this.currentDragPath == finalPath) {
                    return;
                }

                if (this.currentFilesPaths.includes(finalPath)) {
                    return;
                }
    
                await this.FileManagerServer.copyFileOrFolder(this.currentDragPath, finalPath);
                await this.FileManagerServer.removeFileOrFolder(this.currentDragPath);
            }
            else {
                await this.currentFilesPaths.forEach(async filePath => {
                    let targetPath = folder_block_wrapper.getAttribute("path");
                    let splitedCurrentDragPath = filePath.split("/");
                    let currentDragElementName = splitedCurrentDragPath[splitedCurrentDragPath.length - 1];
        
                    let finalPath;
                    if (targetPath=== "/") {
                        finalPath = `/${currentDragElementName}`;
                    }
                    else {
                        finalPath = `${targetPath}/${currentDragElementName}`;
                    }
        
                    if (targetPath !== null && targetPath.includes(filePath)) {
                        this.FileManagerStyles.fmRemoveClass(folder_block, "fm_selected");
                        let folder_icon = folder_block.querySelector(".fm_folder_icon");
        
                        if (folder_icon instanceof HTMLImageElement) {
                            folder_icon.src = this.options?.icons?.folder;
                        }
        
                        return;
                    }
        
        
                    if (filePath == finalPath) {
                        return;
                    }
        
                    await this.FileManagerServer.copyFileOrFolder(filePath, finalPath);
                    await this.FileManagerServer.removeFileOrFolder(filePath);
                }); 
            }

            if (this.currentFolder instanceof HTMLElement) {
                await this.updateNavFolders();
                this.updateFileList(this.currentFolder, true);
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
    }

    public async handleCreateFileClick(event: Event) {
        if (this.searchingString !== "") {
            return;
        }

        if (this.currentPath) {
            await this.FileManagerServer.createEmptyFile(this.currentPath);

            if (this.currentFolder instanceof HTMLElement) {
                await this.updateNavFolders();
                this.updateFileList(this.currentFolder, true);
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
        }
    }

    public async handleCreateFolderClick(event: Event) {
        if (this.searchingString !== "") {
            return;
        }

        if (this.currentPath) {
            await this.FileManagerServer.createEmptyFolder(this.currentPath);

            if (this.currentFolder instanceof HTMLElement) {
                await this.updateNavFolders();
                this.updateFileList(this.currentFolder, true);
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
        }
    }

    public async updateInterface() {
        if (this.currentFolder instanceof HTMLElement) {
            await this.updateNavFolders();
            this.updateFileList(this.currentFolder, true);
            this.selectedFilesPaths = [];
            this.toolsState.cut = false;
            this.toolsState.copy = false;
            this.updateInsert();
            this.updateCreateFolderAndFiles();
        }
    }

    private initInterface(): HTMLElement {
        let rootWidthString = this.root.offsetWidth;
        let rootWidthNumber = Number(rootWidthString);
        if (rootWidthNumber < 450) {
            this.isMobileVersion = true;
        }
        else if (rootWidthNumber < 730) {
            this.isTabletVersion = true;
        }

        let filemanager_super_root = document.createElement("div");
        this.FileManagerStyles.fmAddClass(filemanager_super_root, "fm_super_root");
        filemanager_super_root.id = "fm_super_root";
        filemanager_super_root.classList.add("fm_super_root");
        this.FileManagerStyles.updatableElements["fm_super_root"] = [filemanager_super_root];

        // Creating filemanager_address
        let filemanager_addressHTML;
        let current_pathHTML;
        if (this.options?.addressPaneOptions?.addressPaneEnabled == true) {
            filemanager_addressHTML = document.createElement("div");
            this.FileManagerStyles.fmAddClass(filemanager_addressHTML, "fm_filemanager_address");
            filemanager_addressHTML.classList.add("fm_filemanager_address");
            this.FileManagerStyles.updatableElements["fm_filemanager_address"] = [filemanager_addressHTML];
            
            let arrows_blockHTML;
            if (this.options?.addressPaneOptions?.backButtonEnabled || this.options?.addressPaneOptions?.upButtonEnabled || this.options?.addressPaneOptions?.refreshButtonEnabled) {
                
                arrows_blockHTML = document.createElement("div");
                this.FileManagerStyles.fmAddClass(arrows_blockHTML, "fm_arrows_block");
                arrows_blockHTML.classList.add("fm_arrows_block");
                this.FileManagerStyles.updatableElements["fm_arrows_block"] = [arrows_blockHTML];

                if (this.options?.addressPaneOptions?.backButtonEnabled == true) {
                    let arrow_backHTML = document.createElement("div");
                    this.FileManagerStyles.fmAddClass(arrow_backHTML, "fm_arrow_wrapper");
                    this.FileManagerStyles.fmAddClass(arrow_backHTML, "fm_arrow_back");
                    arrow_backHTML.classList.add("fm_arrow_wrapper");
                    arrow_backHTML.classList.add("fm_arrow_back");
                    arrow_backHTML.title = this.translations[this.currentLang]["Back"];
                    arrow_backHTML.addEventListener('click', this.handleBackArrowClick.bind(this));
                    this.FileManagerStyles.updatableElements["fm_arrow_wrapper"] = [arrow_backHTML];
    
                    let arrow_backIMG = document.createElement("img");
                    this.FileManagerStyles.fmAddClass(arrow_backIMG, "fm_filemanager_arrow");
                    arrow_backIMG.classList.add("fm_filemanager_arrow");
                    arrow_backIMG.src = this.iconsPaths.arrowBack;
                    this.FileManagerStyles.updatableElements["fm_filemanager_arrow"] = [arrow_backIMG];
    
                    arrow_backHTML.append(arrow_backIMG);
                    arrows_blockHTML.append(arrow_backHTML);
                }
    
                if (this.options?.addressPaneOptions?.upButtonEnabled == true) {
                    let arrow_upHTML = document.createElement("div");
                    this.FileManagerStyles.fmAddClass(arrow_upHTML, "fm_arrow_wrapper");
                    this.FileManagerStyles.fmAddClass(arrow_upHTML, "fm_arrow_up");
                    this.FileManagerStyles.fmAddClass(arrow_upHTML, "fm_disabled");
                    arrow_upHTML.classList.add("fm_arrow_wrapper");
                    arrow_upHTML.classList.add("fm_arrow_up");
                    arrow_upHTML.classList.add("fm_disabled");
                    arrow_upHTML.style.pointerEvents = 'none';
                    arrow_upHTML.title = this.translations[this.currentLang]["Up"];
                    arrow_upHTML.addEventListener('click', this.handleUpArrowClick.bind(this));
                    this.FileManagerStyles.updatableElements["fm_arrow_wrapper"].push(arrow_upHTML);
    
                    let arrow_upIMG = document.createElement("img");
                    this.FileManagerStyles.fmAddClass(arrow_upIMG, "fm_filemanager_arrow");
                    arrow_upIMG.classList.add("fm_filemanager_arrow");
                    arrow_upIMG.src = this.iconsPaths.arrowUp;
                    this.FileManagerStyles.updatableElements["fm_filemanager_arrow"].push(arrow_upIMG);
    
                    arrow_upHTML.append(arrow_upIMG);
                    arrows_blockHTML.append(arrow_upHTML);
                }
        
                if (this.options?.addressPaneOptions?.refreshButtonEnabled == true) {
                    let arrow_refreshHTML = document.createElement("div");
                    this.FileManagerStyles.fmAddClass(arrow_refreshHTML, "fm_arrow_wrapper");
                    this.FileManagerStyles.fmAddClass(arrow_refreshHTML, "fm_arrow_refresh");
                    arrow_refreshHTML.classList.add("fm_arrow_wrapper");
                    arrow_refreshHTML.classList.add("fm_arrow_refresh");
                    arrow_refreshHTML.title = this.translations[this.currentLang]["Refresh"];
                    arrow_refreshHTML.addEventListener('click', this.handleRefreshClick.bind(this));
                    this.FileManagerStyles.updatableElements["fm_arrow_wrapper"].push(arrow_refreshHTML);
    
                    let arrow_refreshIMG = document.createElement("img");
                    this.FileManagerStyles.fmAddClass(arrow_refreshIMG, "fm_filemanager_arrow");
                    arrow_refreshIMG.classList.add("fm_filemanager_arrow");
                    arrow_refreshIMG.src = this.iconsPaths.refresh;
                    this.FileManagerStyles.updatableElements["fm_filemanager_arrow"].push(arrow_refreshIMG);
    
                    arrow_refreshHTML.append(arrow_refreshIMG);
                    arrows_blockHTML.append(arrow_refreshHTML);
                }
            }
            
            if (!this.isMobileVersion) {
                current_pathHTML = document.createElement("div");
                this.FileManagerStyles.fmAddClass(current_pathHTML, "fm_current_path");
                current_pathHTML.classList.add("fm_current_path");
                this.FileManagerStyles.updatableElements["fm_current_path"] = [current_pathHTML];
            }

    
            if (this.options?.addressPaneOptions?.searchingEnabled == true) {
                if (this.isMobileVersion) {
                    let searchHTML = document.createElement("input");
                    searchHTML.type = "search";
                    searchHTML.placeholder = this.translations[this.currentLang]["Searching"];
                    this.FileManagerStyles.fmAddClass(searchHTML, "fm_search_mobile");
                    searchHTML.classList.add("fm_search");
                    this.FileManagerStyles.updatableElements["fm_search_mobile"] = [searchHTML];
                    searchHTML.addEventListener("change", this.handleSearchChange.bind(this))
    
                    filemanager_addressHTML.append(searchHTML);
                }
                else {
                    let searchHTML = document.createElement("input");
                    searchHTML.type = "search";
                    searchHTML.placeholder = this.translations[this.currentLang]["Searching"];
                    this.FileManagerStyles.fmAddClass(searchHTML, "fm_search");
                    searchHTML.classList.add("fm_search");
                    this.FileManagerStyles.updatableElements["fm_search"] = [searchHTML];
                    searchHTML.addEventListener("change", this.handleSearchChange.bind(this))
    
                    filemanager_addressHTML.append(searchHTML);
                }
            }

            if (!this.isMobileVersion && current_pathHTML) {
                let path_folderHTML = document.createElement("span");
                this.FileManagerStyles.fmAddClass(path_folderHTML, "fm_path_folder");
                path_folderHTML.classList.add("fm_path_folder");
                this.FileManagerStyles.updatableElements["fm_path_folder"] = [path_folderHTML];
                path_folderHTML.textContent = this.rootFolderName;
        
                current_pathHTML.append(path_folderHTML);
    
                filemanager_addressHTML.prepend(current_pathHTML);
            }

            if (arrows_blockHTML) {
                
                filemanager_addressHTML.prepend(arrows_blockHTML);
            }
            filemanager_super_root.append(filemanager_addressHTML);
        }
        
        let filemanager_mainHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(filemanager_mainHTML, "fm_filemanager_main");
        filemanager_mainHTML.classList.add("fm_filemanager_main");
        this.FileManagerStyles.updatableElements["fm_filemanager_main"] = [filemanager_mainHTML];

        // Creating filemanager_tools
        if (this.options?.toolsPaneOptions?.toolsPaneEnabled == true) {
            let filemanager_toolsHTML = document.createElement("div");
            this.FileManagerStyles.fmAddClass(filemanager_toolsHTML, "fm_filemanager_tools");
            filemanager_toolsHTML.classList.add("fm_filemanager_tools");
            this.FileManagerStyles.updatableElements["fm_filemanager_tools"] = [filemanager_toolsHTML];
            filemanager_toolsHTML.style.position = "relative";


            if (this.options?.toolsPaneOptions?.uploadingFilesEnabled) {
                let add_file_buttonHTML = document.createElement("button");
                add_file_buttonHTML.type = "button";
                this.FileManagerStyles.fmAddClass(add_file_buttonHTML, "fm_add_file_button");
                add_file_buttonHTML.classList.add("fm_add_file_button");
                this.FileManagerStyles.updatableElements["fm_add_file_button"] = [add_file_buttonHTML];
                add_file_buttonHTML.addEventListener("click", this.handleUploadClick.bind(this))
    
                let add_file_iconHTML = document.createElement("img");
                add_file_iconHTML.src = this.iconsPaths.addFilesButton;
                this.FileManagerStyles.fmAddClass(add_file_iconHTML, "fm_add_file_icon");
                add_file_iconHTML.classList.add("fm_add_file_icon");
                add_file_buttonHTML.append(add_file_iconHTML);
                this.FileManagerStyles.updatableElements["fm_add_file_icon"] = [add_file_iconHTML];
    
                let add_file_spanHTML = document.createElement("span");
                add_file_spanHTML.textContent = this.translations[this.currentLang]["Upload"];
                add_file_buttonHTML.append(add_file_spanHTML);
    
                let upload_files_blockHTML = document.createElement("div");
                this.FileManagerStyles.fmAddClass(upload_files_blockHTML, "fm_upload_files_block");
                this.FileManagerStyles.fmAddClass(upload_files_blockHTML, "fm_hidden");
                this.FileManagerStyles.updatableElements["fm_upload_files_block"] = [upload_files_blockHTML];
                upload_files_blockHTML.classList.add("fm_upload_files_block");
                upload_files_blockHTML.classList.add("fm_hidden");

                let upload_files_wrapperHTML1 = document.createElement("div");
                this.FileManagerStyles.fmAddClass(upload_files_wrapperHTML1, "fm_upload_files_func_wrapper");
                upload_files_wrapperHTML1.classList.add("fm_upload_files_func_wrapper");
                this.FileManagerStyles.updatableElements["fm_upload_files_func_wrapper"] = [upload_files_wrapperHTML1];
    
                let upload_file_imgHTML = document.createElement("img");
                upload_file_imgHTML.src = this.iconsPaths.addFile;
                this.FileManagerStyles.fmAddClass(upload_file_imgHTML, "fm_upload_files_func_icon");
                this.FileManagerStyles.fmAddClass(upload_file_imgHTML, "fm_upload_file");
                upload_file_imgHTML.classList.add("fm_upload_files_func_icon");
                upload_file_imgHTML.classList.add("fm_upload_file");
                upload_files_wrapperHTML1.append(upload_file_imgHTML);
                this.FileManagerStyles.updatableElements["fm_upload_files_func_icon"] = [upload_file_imgHTML];
    
                let upload_file_spanHTML = document.createElement("span");
                upload_file_spanHTML.textContent = this.translations[this.currentLang]["Upload file"];
                this.FileManagerStyles.fmAddClass(upload_file_spanHTML, "fm_upload_files_func_name");
                upload_file_spanHTML.classList.add("fm_upload_files_func_name");
                this.FileManagerStyles.updatableElements["fm_upload_files_func_name"] = [upload_file_spanHTML];
                upload_files_wrapperHTML1.append(upload_file_spanHTML);
    
                let upload_file_inputHTML = document.createElement("input");
                this.FileManagerStyles.fmAddClass(upload_file_inputHTML, "fm_upload_file_func_input");
                upload_file_inputHTML.classList.add("fm_upload_file_func_input")
                upload_file_inputHTML.type = "file";
                upload_file_inputHTML.addEventListener("change", this.handleUploadingFile.bind(this))
                upload_files_wrapperHTML1.append(upload_file_inputHTML);

                upload_files_blockHTML.append(upload_files_wrapperHTML1);

                let upload_files_wrapperHTML2 = document.createElement("div");
                this.FileManagerStyles.fmAddClass(upload_files_wrapperHTML2, "fm_upload_files_func_wrapper");
                upload_files_wrapperHTML2.classList.add("fm_upload_files_func_wrapper");
                this.FileManagerStyles.updatableElements["fm_upload_files_func_wrapper"].push(upload_files_wrapperHTML2);
    
                let upload_file_imgHTML2 = document.createElement("img");
                upload_file_imgHTML2.src = this.iconsPaths.addFolder;
                this.FileManagerStyles.fmAddClass(upload_file_imgHTML2, "fm_upload_files_func_icon");
                this.FileManagerStyles.fmAddClass(upload_file_imgHTML2, "fm_upload_folder");
                upload_file_imgHTML2.classList.add("fm_upload_files_func_icon");
                upload_file_imgHTML2.classList.add("fm_upload_folder");
                upload_files_wrapperHTML2.append(upload_file_imgHTML2);
                this.FileManagerStyles.updatableElements["fm_upload_files_func_icon"].push(upload_file_imgHTML2);
    
                let upload_file_spanHTML2 = document.createElement("span");
                upload_file_spanHTML2.textContent = this.translations[this.currentLang]["Upload folder"];
                this.FileManagerStyles.fmAddClass(upload_file_spanHTML2, "fm_upload_files_func_name");
                upload_file_spanHTML2.classList.add("fm_upload_files_func_name");
                upload_files_wrapperHTML2.append(upload_file_spanHTML2);
                this.FileManagerStyles.updatableElements["fm_upload_files_func_name"].push(upload_file_spanHTML2);
    
                let upload_file_inputHTML2 = document.createElement("input");
                this.FileManagerStyles.fmAddClass(upload_file_inputHTML2, "fm_upload_files_func_input");
                upload_file_inputHTML2.classList.add("fm_upload_files_func_input")
                upload_file_inputHTML2.type = "file";
    
                upload_file_inputHTML2.setAttribute("webkitdirectory", '');
                upload_file_inputHTML2.setAttribute("directory", '');
                upload_file_inputHTML2.setAttribute("multiple", '');
                upload_file_inputHTML2.addEventListener("change", this.handleUploadingFolder.bind(this))
                upload_files_wrapperHTML2.append(upload_file_inputHTML2);

                upload_files_blockHTML.append(upload_files_wrapperHTML2);

                filemanager_toolsHTML.append(upload_files_blockHTML);
                filemanager_toolsHTML.append(add_file_buttonHTML);
            }

            let extraToolsPane;
            if (this.isMobileVersion) {
                extraToolsPane = document.createElement("div");
                this.FileManagerStyles.fmAddClass(extraToolsPane, "fm_extra_tools_pane");
                extraToolsPane.classList.add("fm_extra_tools_pane");
                this.extraToolsPane = extraToolsPane;
            }


            if (this.options?.toolsPaneOptions?.toolsEnabled?.movingFiles) {
                let cutHTML = document.createElement("img");
                cutHTML.src = this.iconsPaths.cut;
                this.FileManagerStyles.fmAddClass(cutHTML, "fm_tool");
                this.FileManagerStyles.fmAddClass(cutHTML, "fm_cut");
                cutHTML.classList.add("fm_tool");
                cutHTML.classList.add("fm_cut");
                cutHTML.title = this.translations[this.currentLang]["Cut file/folder"];
                cutHTML.addEventListener("click", this.handleCutClick.bind(this));
                this.FileManagerStyles.updatableElements["fm_tool"] = [cutHTML];
    
                let copyHTML = document.createElement("img");
                copyHTML.src = this.iconsPaths.copy;
                this.FileManagerStyles.fmAddClass(copyHTML, "fm_tool");
                this.FileManagerStyles.fmAddClass(copyHTML, "fm_copy");
                copyHTML.classList.add("fm_tool");
                copyHTML.classList.add("fm_copy");
                copyHTML.title = this.translations[this.currentLang]["Copy file/folder"];
                copyHTML.addEventListener('click', this.handleCopyClick.bind(this));
                this.FileManagerStyles.updatableElements["fm_tool"].push(copyHTML);
    
                let insertHTML = document.createElement("img");
                insertHTML.src = this.iconsPaths.insert;
                this.FileManagerStyles.fmAddClass(insertHTML, "fm_tool");
                this.FileManagerStyles.fmAddClass(insertHTML, "fm_insert");
                insertHTML.classList.add("fm_tool");
                insertHTML.classList.add("fm_insert");
                insertHTML.title = this.translations[this.currentLang]["Paste file/folder"];
                insertHTML.addEventListener('click', this.handleInsertClick.bind(this));
                if (this.FileManagerStyles.updatableElements["fm_tool"]) {
                    this.FileManagerStyles.updatableElements["fm_tool"].push(insertHTML);
                }
                else {
                    this.FileManagerStyles.updatableElements["fm_tool"] = [insertHTML];
                }

                if (this.isMobileVersion) {
                    extraToolsPane?.append(cutHTML);
                    extraToolsPane?.append(copyHTML);
                    extraToolsPane?.append(insertHTML);
                }
                else {
                    filemanager_toolsHTML.append(cutHTML);
                    filemanager_toolsHTML.append(copyHTML);
                    filemanager_toolsHTML.append(insertHTML);
                }
            }

            if (this.options?.toolsPaneOptions?.toolsEnabled?.renamingFiles) {
                let renameHTML = document.createElement("img");
                renameHTML.src = this.iconsPaths.rename;
                this.FileManagerStyles.fmAddClass(renameHTML, "fm_tool");
                this.FileManagerStyles.fmAddClass(renameHTML, "fm_rename");
                renameHTML.classList.add("fm_tool");
                renameHTML.classList.add("fm_rename");
                renameHTML.title = this.translations[this.currentLang]["Rename file/folder"];
                renameHTML.addEventListener("click", this.handleRenameClick.bind(this));
                
                if (this.FileManagerStyles.updatableElements["fm_tool"]) {
                    this.FileManagerStyles.updatableElements["fm_tool"].push(renameHTML);
                }
                else {
                    this.FileManagerStyles.updatableElements["fm_tool"] = [renameHTML];
                }

                if (this.isMobileVersion) {
                    extraToolsPane?.append(renameHTML);
                }
                else {
                    filemanager_toolsHTML.append(renameHTML);
                }
            }
    
            if (this.options?.toolsPaneOptions?.toolsEnabled?.deletingFiles) {
                let removeHTML = document.createElement("img");
                removeHTML.src = this.iconsPaths.remove;
                this.FileManagerStyles.fmAddClass(removeHTML, "fm_tool");
                this.FileManagerStyles.fmAddClass(removeHTML, "fm_remove");
                removeHTML.classList.add("fm_tool");
                removeHTML.classList.add("fm_remove");
                removeHTML.title = this.translations[this.currentLang]["Remove file/folder"];
                removeHTML.addEventListener("click", this.handleRemoveClick.bind(this));

                if (this.FileManagerStyles.updatableElements["fm_tool"]) {
                    this.FileManagerStyles.updatableElements["fm_tool"].push(removeHTML);
                }
                else {
                    this.FileManagerStyles.updatableElements["fm_tool"] = [removeHTML];
                }

                if (this.isMobileVersion) {
                    extraToolsPane?.append(removeHTML);
                }
                else {
                    filemanager_toolsHTML.append(removeHTML);
                }
            }

            if (this.options?.toolsPaneOptions?.toolsEnabled?.downloadingFiles) {
                let downloadHTML = document.createElement("img");
                downloadHTML.src = this.iconsPaths.download;
                this.FileManagerStyles.fmAddClass(downloadHTML, "fm_tool");
                this.FileManagerStyles.fmAddClass(downloadHTML, "fm_download");
                downloadHTML.classList.add("fm_tool");
                downloadHTML.classList.add("fm_download");
                downloadHTML.title = this.translations[this.currentLang]["Download file/folder"];
                downloadHTML.addEventListener("click", this.handleDownloadClick.bind(this));
                if (this.FileManagerStyles.updatableElements["fm_tool"]) {
                    this.FileManagerStyles.updatableElements["fm_tool"].push(downloadHTML);
                }
                else {
                    this.FileManagerStyles.updatableElements["fm_tool"] = [downloadHTML];
                }

                if (this.isMobileVersion) {
                    extraToolsPane?.append(downloadHTML);
                }
                else {
                    filemanager_toolsHTML.append(downloadHTML);

                }
            }

            if (this.options?.toolsPaneOptions?.toolsEnabled?.createFiles) {
                let createFileHTML = document.createElement("img");
                createFileHTML.src = this.iconsPaths.createFile;
                this.FileManagerStyles.fmAddClass(createFileHTML, "fm_tool");
                this.FileManagerStyles.fmAddClass(createFileHTML, "fm_create_file");
                createFileHTML.classList.add("fm_tool");
                createFileHTML.classList.add("fm_create_file");
                createFileHTML.title = this.translations[this.currentLang]["Create empty file"];
                createFileHTML.addEventListener("click", this.handleCreateFileClick.bind(this));
                if (this.FileManagerStyles.updatableElements["fm_tool"]) {
                    this.FileManagerStyles.updatableElements["fm_tool"].push(createFileHTML);
                }
                else {
                    this.FileManagerStyles.updatableElements["fm_tool"] = [createFileHTML];
                }                


                let createFolderHTML = document.createElement("img");
                createFolderHTML.src = this.iconsPaths.createFolder;
                this.FileManagerStyles.fmAddClass(createFolderHTML, "fm_tool");
                this.FileManagerStyles.fmAddClass(createFolderHTML, "fm_create_folder");
                createFolderHTML.classList.add("fm_tool");
                createFolderHTML.classList.add("fm_create_folder");
                createFolderHTML.title = this.translations[this.currentLang]["Create empty folder"];
                createFolderHTML.addEventListener("click", this.handleCreateFolderClick.bind(this));
                if (this.FileManagerStyles.updatableElements["fm_tool"]) {
                    this.FileManagerStyles.updatableElements["fm_tool"].push(createFolderHTML);
                }
                else {
                    this.FileManagerStyles.updatableElements["fm_tool"] = [createFolderHTML];
                }
 

                if (this.isMobileVersion) {
                    extraToolsPane?.append(createFileHTML);
                    extraToolsPane?.append(createFolderHTML);
                }
                else {
                    filemanager_toolsHTML.append(createFileHTML);
                    filemanager_toolsHTML.append(createFolderHTML);
                }
            }

            let grid_wrapperHTML;
            if (this.options?.toolsPaneOptions?.fileDisplayModesEnabled === true) {
                grid_wrapperHTML = document.createElement("div");
                this.FileManagerStyles.fmAddClass(grid_wrapperHTML, "fm_grid_wrapper");
                grid_wrapperHTML.classList.add("fm_grid_wrapper");
    
                let listHTML = document.createElement("img");
                listHTML.src = this.iconsPaths.list;
                this.FileManagerStyles.fmAddClass(listHTML, "fm_tool");
                this.FileManagerStyles.fmAddClass(listHTML, "fm_list");
                listHTML.classList.add("fm_tool");
                listHTML.classList.add("fm_list");
                listHTML.title = this.translations[this.currentLang]["Change file display to list"];
                listHTML.addEventListener("click", this.handleListDisplayModeClick.bind(this));
    
                if (this.FileManagerStyles.updatableElements["fm_tool"]) {
                    this.FileManagerStyles.updatableElements["fm_tool"].push(listHTML);
                }
                else {
                    this.FileManagerStyles.updatableElements["fm_tool"] = [listHTML];
                }
                
    
                let tilesHTML = document.createElement("img");
                tilesHTML.src = this.iconsPaths.grid;
                this.FileManagerStyles.fmAddClass(tilesHTML, "fm_tool");
                this.FileManagerStyles.fmAddClass(tilesHTML, "fm_tiles");
                tilesHTML.classList.add("fm_tool");
                tilesHTML.classList.add("fm_tiles");
                tilesHTML.title = this.translations[this.currentLang]["Change file display to tiles"];
                tilesHTML.addEventListener("click", this.handleTilesDisplayModeClick.bind(this));
                this.FileManagerStyles.updatableElements["fm_tool"].push(tilesHTML);
                
                
                grid_wrapperHTML.append(listHTML);
                grid_wrapperHTML.append(tilesHTML);

                if (current_pathHTML instanceof HTMLElement && !this.options?.toolsPaneOptions?.uploadingFilesEnabled) {
                    current_pathHTML.after(grid_wrapperHTML);
                }
                else {
                    filemanager_toolsHTML.append(grid_wrapperHTML);
                }
            }

            if (this.options?.toolsPaneOptions?.settingsOptions?.settingsEnabled === true && (this.options?.toolsPaneOptions?.settingsOptions?.sizeSettingsEnabled || this.options?.toolsPaneOptions?.settingsOptions?.colorSettingsEnabled)) {
                let settingsHTML = document.createElement("img");
                settingsHTML.src = this.iconsPaths.settings;
                this.FileManagerStyles.fmAddClass(settingsHTML, "fm_tool");
                this.FileManagerStyles.fmAddClass(settingsHTML, "fm_settings");
                settingsHTML.classList.add("fm_tool");
                settingsHTML.classList.add("fm_settings");
                settingsHTML.title = this.translations[this.currentLang]["Settings"];
                settingsHTML.addEventListener("click", this.handleSettingsClick.bind(this));

                if (this.FileManagerStyles.updatableElements["fm_tool"]) {
                    this.FileManagerStyles.updatableElements["fm_tool"].push(settingsHTML);
                }
                else {
                    this.FileManagerStyles.updatableElements["fm_tool"] = [settingsHTML];
                }
                

                if (current_pathHTML instanceof HTMLElement && !this.options?.toolsPaneOptions?.uploadingFilesEnabled) {
                    if (grid_wrapperHTML === null || grid_wrapperHTML === undefined) {
                        current_pathHTML.after(settingsHTML);
                    }
                    else {
                        grid_wrapperHTML.after(settingsHTML);
                    }
                }
                else {
                    filemanager_toolsHTML.append(settingsHTML);
                }
            }
            
            if (this.options?.toolsPaneOptions?.toolsPaneEnabled && 
                (this.options?.toolsPaneOptions?.uploadingFilesEnabled ||
                this.options?.toolsPaneOptions?.toolsEnabled?.deletingFiles || 
                this.options?.toolsPaneOptions?.toolsEnabled?.movingFiles || 
                this.options?.toolsPaneOptions?.toolsEnabled?.renamingFiles || 
                this.options?.toolsPaneOptions?.toolsEnabled?.downloadingFiles)
            ) {
                filemanager_super_root.append(filemanager_toolsHTML);

                if (this.isMobileVersion && extraToolsPane) {
                    filemanager_super_root.append(extraToolsPane);
                }
            }
        }
        
        
        // Creating folders_nav
        let folders_navHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(folders_navHTML, "fm_folders_nav");
        folders_navHTML.classList.add("fm_folders_nav");
        this.FileManagerStyles.updatableElements["fm_folders_nav"] = [folders_navHTML];
        this.navigationPane = folders_navHTML;

        let rootfolder = this.createHTMLNavFolder({name: this.rootFolderName}, folders_navHTML, true);

        if (rootfolder) {
            let rootfolder_icon_wrapper = rootfolder[0];
            let rootfolder_parent = rootfolder[1];
            let rootfolder_wrapper = rootfolder[2];
            
            if (rootfolder_wrapper) {
                this.FileManagerStyles.fmAddClass(rootfolder_wrapper, "fm_folder_root_wrapper");
                rootfolder_wrapper.classList.add("fm_folder_root_wrapper");
                this.FileManagerStyles.updatableElements["fm_folder_root_wrapper"] = [rootfolder_wrapper];
            }

            rootfolder_icon_wrapper?.addEventListener("click", this.handleOpenNavFolder.bind(this));
            rootfolder_parent?.addEventListener("click", this.handleShowFileList.bind(this));
        }
        if (!this.options?.navigationPaneEnabled || this.isMobileVersion || this.isTabletVersion) {
            this.FileManagerStyles.fmAddClass(folders_navHTML, "fm_hidden");
        }

        filemanager_mainHTML.append(folders_navHTML);

        // Creating content_pane

        let content_paneHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(content_paneHTML, "fm_content_pane");
        content_paneHTML.classList.add("fm_content_pane");
        this.FileManagerStyles.updatableElements["fm_content_pane"] = [content_paneHTML];

        let files_tilesHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(files_tilesHTML, "fm_files_tiles");
        files_tilesHTML.classList.add("fm_files_tiles");
        this.FileManagerStyles.updatableElements["fm_files_tiles"] = [files_tilesHTML];

        if (this.filesDisplayMode === "tiles") {
            files_tilesHTML.style.display = "flex";
        }
        else {
            files_tilesHTML.style.display = "none";
        }

        let metadata_blockHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(metadata_blockHTML, "fm_metadata_block");
        metadata_blockHTML.classList.add("fm_metadata_block");
        this.FileManagerStyles.updatableElements["fm_metadata_block"] = [metadata_blockHTML];

        if (this.filesDisplayMode === "tiles") {
            metadata_blockHTML.style.display = "none";
        }
        else {
            metadata_blockHTML.style.display = "flex";
        }

        let files_listHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(files_listHTML, "fm_files_list");
        files_listHTML.classList.add("fm_files_list");
        this.FileManagerStyles.updatableElements["fm_files_list"] = [files_listHTML];

        if (this.filesDisplayMode === "list") {
            files_listHTML.style.display = "block";
        }
        else {
            files_listHTML.style.display = "none";
        }

        let metadata_nameHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(metadata_nameHTML, "fm_metadata_name");
        this.FileManagerStyles.fmAddClass(metadata_nameHTML, "fm_metadata");
        metadata_nameHTML.classList.add("fm_metadata_name");
        metadata_nameHTML.classList.add("fm_metadata");
        metadata_nameHTML.textContent = this.translations[this.currentLang]["Name"];
        this.FileManagerStyles.updatableElements["fm_metadata"] = [metadata_nameHTML];

        let metadata_changedateHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(metadata_changedateHTML, "fm_metadata_changedate");
        this.FileManagerStyles.fmAddClass(metadata_changedateHTML, "fm_metadata");
        metadata_changedateHTML.classList.add("fm_metadata_changedate");
        metadata_changedateHTML.classList.add("fm_metadata");
        metadata_changedateHTML.textContent = this.translations[this.currentLang]["Date of change"];
        this.FileManagerStyles.updatableElements["fm_metadata"].push(metadata_changedateHTML);

        let metadata_typeHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(metadata_typeHTML, "fm_metadata_type");
        this.FileManagerStyles.fmAddClass(metadata_typeHTML, "fm_metadata");
        metadata_typeHTML.classList.add("fm_metadata_type");
        metadata_typeHTML.classList.add("fm_metadata");
        metadata_typeHTML.textContent = this.translations[this.currentLang]["Type"];
        this.FileManagerStyles.updatableElements["fm_metadata"].push(metadata_typeHTML);

        let metadata_sizeHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(metadata_sizeHTML, "fm_metadata_size");
        this.FileManagerStyles.fmAddClass(metadata_sizeHTML, "fm_metadata");
        metadata_sizeHTML.classList.add("fm_metadata_size");
        metadata_sizeHTML.classList.add("fm_metadata");
        metadata_sizeHTML.textContent = this.translations[this.currentLang]["Size"];
        this.FileManagerStyles.updatableElements["fm_metadata"].push(metadata_sizeHTML);

        metadata_blockHTML.append(metadata_nameHTML);
        metadata_blockHTML.append(metadata_changedateHTML);
        metadata_blockHTML.append(metadata_typeHTML);
        metadata_blockHTML.append(metadata_sizeHTML);
        
        let loaderWrapperHTML = document.createElement("div");
        loaderWrapperHTML.classList.add("fm_loader_wrapper");
        this.FileManagerStyles.fmAddClass(loaderWrapperHTML, "fm_loader_wrapper");
        loaderWrapperHTML.style.display = "none";

        let loaderHTML = document.createElement("span");
        loaderHTML.classList.add("fm_loader");
        this.FileManagerStyles.fmAddClass(loaderHTML, "fm_loader");
        this.FileManagerStyles.addRotationAnimation(loaderHTML);
        loaderWrapperHTML.append(loaderHTML);
        this.FileManagerStyles.updatableElements["fm_loader"] = [loaderHTML];

        content_paneHTML.append(metadata_blockHTML);
        content_paneHTML.append(files_listHTML);
        content_paneHTML.append(files_tilesHTML);
        content_paneHTML.append(loaderWrapperHTML);

        filemanager_mainHTML.append(content_paneHTML);

        filemanager_super_root.append(filemanager_mainHTML);

        // Creating settings panel

        if (this.options?.toolsPaneOptions?.settingsOptions?.settingsEnabled && (this.options?.toolsPaneOptions?.settingsOptions?.colorSettingsEnabled || this.options?.toolsPaneOptions?.settingsOptions?.sizeSettingsEnabled)) {
            let settings_panelHTML = document.createElement("div");
            this.FileManagerStyles.fmAddClass(settings_panelHTML, "fm_settings_panel");
            settings_panelHTML.classList.add("fm_settings_panel");
            this.FileManagerStyles.updatableElements["fm_settings_panel"] = [settings_panelHTML];
            settings_panelHTML.style.display = "none";
    
            let title_blockHTML = document.createElement("div");
            this.FileManagerStyles.fmAddClass(title_blockHTML, "fm_title_block");
            title_blockHTML.classList.add("fm_title_block");
            this.FileManagerStyles.updatableElements["fm_title_block"] = [title_blockHTML];
            title_blockHTML.textContent = this.translations[this.currentLang]["Settings"];
    
            let leave_settings_arrowHTML = document.createElement("img");
            this.FileManagerStyles.fmAddClass(leave_settings_arrowHTML, "fm_leave_settings_arrow");
            leave_settings_arrowHTML.classList.add("fm_leave_settings_arrow");
            this.FileManagerStyles.updatableElements["fm_leave_settings_arrow"] = [leave_settings_arrowHTML];
            leave_settings_arrowHTML.style.margin = "0px";
            leave_settings_arrowHTML.src = this.iconsPaths.arrowBack;
            leave_settings_arrowHTML.addEventListener("click", this.handleSettingsClick.bind(this));
            title_blockHTML.append(leave_settings_arrowHTML)
            
            let settingsFormHTML = document.createElement("form");
            this.FileManagerStyles.fmAddClass(settingsFormHTML, "fm_settings_form");
            settingsFormHTML.classList.add("fm_settings_form");
            settingsFormHTML.name = "fm_settings_form";
            settingsFormHTML.addEventListener("submit", this.handleSubmitSettings.bind(this));
    
            let params_panelHTML = document.createElement("div");
            this.FileManagerStyles.fmAddClass(params_panelHTML, "fm_params_panel");
            params_panelHTML.classList.add("fm_params_panel");
            
            if (this.options?.toolsPaneOptions?.settingsOptions?.colorSettingsEnabled) {
                let hover_colorHTML = document.createElement("input");
                this.FileManagerStyles.fmAddClass(hover_colorHTML, "fm_color_input");
                hover_colorHTML.classList.add("fm_color_input");
                hover_colorHTML.type = "color";
                hover_colorHTML.name = "hover_color";
                hover_colorHTML.value = this.FileManagerStyles.fileManagerMutableStyles.colors.hover;
                this.settingsColorInput["hover"] = hover_colorHTML;
        
                let hover_color_labelHTML = document.createElement("label");
                this.FileManagerStyles.fmAddClass(hover_color_labelHTML, "fm_color_label");
                hover_color_labelHTML.classList.add("fm_color_label");
                this.FileManagerStyles.updatableElements["fm_color_label"] = [hover_color_labelHTML];
                hover_color_labelHTML.innerHTML = this.translations[this.currentLang]["Hover color"] + ":<br>";
                hover_color_labelHTML.append(hover_colorHTML);
        
                let background_colorHTML = document.createElement("input");
                this.FileManagerStyles.fmAddClass(background_colorHTML, "fm_color_input");
                background_colorHTML.classList.add("fm_color_input");
                background_colorHTML.type = "color";
                background_colorHTML.name = "background_color";
                background_colorHTML.value = this.FileManagerStyles.fileManagerMutableStyles.colors.main_background;
                this.settingsColorInput["main_background"] = background_colorHTML;
        
                let background_color_labelHTML = document.createElement("label");
                this.FileManagerStyles.fmAddClass(background_color_labelHTML, "fm_color_label");
                background_color_labelHTML.classList.add("fm_color_label");
                this.FileManagerStyles.updatableElements["fm_color_label"].push(background_color_labelHTML);
                background_color_labelHTML.innerHTML = this.translations[this.currentLang]["Background color"] + ":<br>";
                background_color_labelHTML.append(background_colorHTML);
        
                let border_colorHTML = document.createElement("input");
                this.FileManagerStyles.fmAddClass(border_colorHTML, "fm_color_input");
                border_colorHTML.classList.add("fm_color_input");
                border_colorHTML.type = "color";
                border_colorHTML.name = "border_color";
                border_colorHTML.value = this.FileManagerStyles.fileManagerMutableStyles.colors.border;
                this.settingsColorInput["border"] = border_colorHTML;
        
                let border_color_labelHTML = document.createElement("label");
                this.FileManagerStyles.fmAddClass(border_color_labelHTML, "fm_color_label");
                border_color_labelHTML.classList.add("fm_color_label");
                this.FileManagerStyles.updatableElements["fm_color_label"].push(border_color_labelHTML);
                border_color_labelHTML.innerHTML = this.translations[this.currentLang]["Border color"] + ":<br>";
                border_color_labelHTML.append(border_colorHTML);
        
                let select_colorHTML = document.createElement("input");
                this.FileManagerStyles.fmAddClass(select_colorHTML, "fm_color_input");
                select_colorHTML.classList.add("fm_color_input");
                select_colorHTML.type = "color";
                select_colorHTML.name = "select_color";
                select_colorHTML.value = this.FileManagerStyles.fileManagerMutableStyles.colors.selected;
                this.settingsColorInput["selected"] = select_colorHTML;
        
                let select_color_labelHTML = document.createElement("label");
                this.FileManagerStyles.fmAddClass(select_color_labelHTML, "fm_color_label");
                select_color_labelHTML.classList.add("fm_color_label");
                this.FileManagerStyles.updatableElements["fm_color_label"].push(select_color_labelHTML);
                select_color_labelHTML.innerHTML = this.translations[this.currentLang]["Select color"] + ":<br>";
                select_color_labelHTML.append(select_colorHTML);
        
                let text_colorHTML = document.createElement("input");
                this.FileManagerStyles.fmAddClass(text_colorHTML, "fm_color_input");
                text_colorHTML.classList.add("fm_color_input");
                text_colorHTML.type = "color";
                text_colorHTML.name = "text_color";
                text_colorHTML.value = this.FileManagerStyles.fileManagerMutableStyles.colors.text_color;
                this.settingsColorInput["text_color"] = text_colorHTML;
        
                let text_color_labelHTML = document.createElement("label");
                this.FileManagerStyles.fmAddClass(text_color_labelHTML, "fm_color_label");
                text_color_labelHTML.classList.add("fm_color_label");
                this.FileManagerStyles.updatableElements["fm_color_label"].push(text_color_labelHTML);
                text_color_labelHTML.innerHTML = this.translations[this.currentLang]["Text color"] + ":<br>";
                text_color_labelHTML.append(text_colorHTML);

                params_panelHTML.append(hover_color_labelHTML);
                params_panelHTML.append(background_color_labelHTML);
                params_panelHTML.append(border_color_labelHTML);
                params_panelHTML.append(select_color_labelHTML);
                params_panelHTML.append(text_color_labelHTML);
    
            }
          
            if (this.options?.toolsPaneOptions?.settingsOptions?.sizeSettingsEnabled) {
                let address_pane_sizeHTML = document.createElement("select");
                this.FileManagerStyles.fmAddClass(address_pane_sizeHTML, "fm_select_input");
                this.FileManagerStyles.updatableElements["fm_select_input"] = [address_pane_sizeHTML];
                address_pane_sizeHTML.classList.add("fm_select_input");
                address_pane_sizeHTML.name = "address";
                this.settingsInterfaceSelect["address"] = address_pane_sizeHTML;
        
                let address_pane_xsmall_sizeHTML = document.createElement("option");
                address_pane_xsmall_sizeHTML.value = "xsmall";
                address_pane_xsmall_sizeHTML.textContent = this.translations[this.currentLang]["xsmall"];
                address_pane_xsmall_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.address === "xsmall";
        
                let address_pane_small_sizeHTML = document.createElement("option");
                address_pane_small_sizeHTML.value = "small";
                address_pane_small_sizeHTML.textContent = this.translations[this.currentLang]["small"];
                address_pane_small_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.address === "small";
        
                let address_pane_medium_sizeHTML = document.createElement("option");
                address_pane_medium_sizeHTML.value = "medium";
                address_pane_medium_sizeHTML.textContent = this.translations[this.currentLang]["medium"];
                address_pane_medium_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.address === "medium";
        
                let address_pane_large_sizeHTML = document.createElement("option");
                address_pane_large_sizeHTML.value = "large";
                address_pane_large_sizeHTML.textContent = this.translations[this.currentLang]["large"];
                address_pane_large_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.address === "large";
        
                let address_pane_xlarge_sizeHTML = document.createElement("option");
                address_pane_xlarge_sizeHTML.value = "xlarge";
                address_pane_xlarge_sizeHTML.textContent = this.translations[this.currentLang]["xlarge"];
                address_pane_xlarge_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.address === "xlarge";
        
                address_pane_sizeHTML.append(address_pane_xsmall_sizeHTML);
                address_pane_sizeHTML.append(address_pane_small_sizeHTML);
                address_pane_sizeHTML.append(address_pane_medium_sizeHTML);
                address_pane_sizeHTML.append(address_pane_large_sizeHTML);
                address_pane_sizeHTML.append(address_pane_xlarge_sizeHTML);
        
                let address_pane_size_labelHTML = document.createElement("label");
                this.FileManagerStyles.fmAddClass(address_pane_size_labelHTML, "fm_color_label");
                address_pane_size_labelHTML.classList.add("fm_color_label");

                if (this.FileManagerStyles.updatableElements["fm_color_label"]) {
                    this.FileManagerStyles.updatableElements["fm_color_label"].push(address_pane_size_labelHTML);
                }
                else {
                    this.FileManagerStyles.updatableElements["fm_color_label"] = [address_pane_size_labelHTML];
                }

                address_pane_size_labelHTML.innerHTML = this.translations[this.currentLang]["Address Pane interface"] + ":<br>";
                address_pane_size_labelHTML.append(address_pane_sizeHTML);
        
                let tools_sizeHTML = document.createElement("select");
                this.FileManagerStyles.fmAddClass(tools_sizeHTML, "fm_select_input");
                this.FileManagerStyles.updatableElements["fm_select_input"].push(tools_sizeHTML);
                tools_sizeHTML.classList.add("fm_select_input");
                tools_sizeHTML.name = "tools";
                this.settingsInterfaceSelect["tools"] = tools_sizeHTML;
        
                let tools_xsmall_sizeHTML = document.createElement("option");
                tools_xsmall_sizeHTML.value = "xsmall";
                tools_xsmall_sizeHTML.textContent = this.translations[this.currentLang]["xsmall"];
                tools_xsmall_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.tools === "xsmall";
        
                let tools_small_sizeHTML = document.createElement("option");
                tools_small_sizeHTML.value = "small";
                tools_small_sizeHTML.textContent = this.translations[this.currentLang]["small"];
                tools_small_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.tools === "small";
        
                let tools_medium_sizeHTML = document.createElement("option");
                tools_medium_sizeHTML.value = "medium";
                tools_medium_sizeHTML.textContent = this.translations[this.currentLang]["medium"];
                tools_medium_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.tools === "medium";
        
                let tools_large_sizeHTML = document.createElement("option");
                tools_large_sizeHTML.value = "large";
                tools_large_sizeHTML.textContent = this.translations[this.currentLang]["large"];
                tools_large_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.tools === "large";
        
                let tools_xlarge_sizeHTML = document.createElement("option");
                tools_xlarge_sizeHTML.value = "xlarge";
                tools_xlarge_sizeHTML.textContent = this.translations[this.currentLang]["xlarge"];
                tools_xlarge_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.tools === "xlarge";
        
                tools_sizeHTML.append(tools_xsmall_sizeHTML);
                tools_sizeHTML.append(tools_small_sizeHTML);
                tools_sizeHTML.append(tools_medium_sizeHTML);
                tools_sizeHTML.append(tools_large_sizeHTML);
                tools_sizeHTML.append(tools_xlarge_sizeHTML);
        
                let tools_size_labelHTML = document.createElement("label");
                this.FileManagerStyles.fmAddClass(tools_size_labelHTML, "fm_color_label");
                tools_size_labelHTML.classList.add("fm_color_label");
                this.FileManagerStyles.updatableElements["fm_color_label"].push(tools_size_labelHTML);
                tools_size_labelHTML.innerHTML = this.translations[this.currentLang]["Tools Pane interface"] + ":<br>";
                tools_size_labelHTML.append(tools_sizeHTML);
        
                let navigation_pane_sizeHTML = document.createElement("select");
                this.FileManagerStyles.fmAddClass(navigation_pane_sizeHTML, "fm_select_input");
                this.FileManagerStyles.updatableElements["fm_select_input"].push(navigation_pane_sizeHTML);
                navigation_pane_sizeHTML.classList.add("fm_select_input");
                navigation_pane_sizeHTML.name = "navigation_pane";
                this.settingsInterfaceSelect["navigation_pane"] = navigation_pane_sizeHTML;
        
                let navigation_pane_xsmall_sizeHTML = document.createElement("option");
                navigation_pane_xsmall_sizeHTML.value = "xsmall";
                navigation_pane_xsmall_sizeHTML.textContent = this.translations[this.currentLang]["xsmall"];
                navigation_pane_xsmall_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.navigation_pane === "xsmall";
        
                let navigation_pane_small_sizeHTML = document.createElement("option");
                navigation_pane_small_sizeHTML.value = "small";
                navigation_pane_small_sizeHTML.textContent = this.translations[this.currentLang]["small"];
                navigation_pane_small_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.navigation_pane === "small";
        
                let navigation_pane_medium_sizeHTML = document.createElement("option");
                navigation_pane_medium_sizeHTML.value = "medium";
                navigation_pane_medium_sizeHTML.textContent = this.translations[this.currentLang]["medium"];
                navigation_pane_medium_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.navigation_pane === "medium";
        
                let navigation_pane_large_sizeHTML = document.createElement("option");
                navigation_pane_large_sizeHTML.value = "large";
                navigation_pane_large_sizeHTML.textContent = this.translations[this.currentLang]["large"];
                navigation_pane_large_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.navigation_pane === "large";
        
                let navigation_pane_xlarge_sizeHTML = document.createElement("option");
                navigation_pane_xlarge_sizeHTML.value = "xlarge";
                navigation_pane_xlarge_sizeHTML.textContent = this.translations[this.currentLang]["xlarge"];
                navigation_pane_xlarge_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.navigation_pane === "xlarge";
        
                navigation_pane_sizeHTML.append(navigation_pane_xsmall_sizeHTML);
                navigation_pane_sizeHTML.append(navigation_pane_small_sizeHTML);
                navigation_pane_sizeHTML.append(navigation_pane_medium_sizeHTML);
                navigation_pane_sizeHTML.append(navigation_pane_large_sizeHTML);
                navigation_pane_sizeHTML.append(navigation_pane_xlarge_sizeHTML);
        
                let navigation_pane_size_labelHTML = document.createElement("label");
                this.FileManagerStyles.fmAddClass(navigation_pane_size_labelHTML, "fm_color_label");
                navigation_pane_size_labelHTML.classList.add("fm_color_label");
                this.FileManagerStyles.updatableElements["fm_color_label"].push(navigation_pane_size_labelHTML);
                navigation_pane_size_labelHTML.innerHTML = this.translations[this.currentLang]["Navigation Pane interface"] + ":<br>";
                navigation_pane_size_labelHTML.append(navigation_pane_sizeHTML);
        
                let content_pane_sizeHTML = document.createElement("select");
                this.FileManagerStyles.fmAddClass(content_pane_sizeHTML, "fm_select_input");
                this.FileManagerStyles.updatableElements["fm_select_input"].push(content_pane_sizeHTML);
                content_pane_sizeHTML.classList.add("fm_select_input");
                content_pane_sizeHTML.name = "content_pane";
                this.settingsInterfaceSelect["content_pane"] = content_pane_sizeHTML;
        
                let content_pane_xsmall_sizeHTML = document.createElement("option");
                content_pane_xsmall_sizeHTML.value = "xsmall";
                content_pane_xsmall_sizeHTML.textContent = this.translations[this.currentLang]["xsmall"];
                content_pane_xsmall_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.content_pane === "xsmall";
        
                let content_pane_small_sizeHTML = document.createElement("option");
                content_pane_small_sizeHTML.value = "small";
                content_pane_small_sizeHTML.textContent = this.translations[this.currentLang]["small"];
                content_pane_small_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.content_pane === "small";
        
                let content_pane_medium_sizeHTML = document.createElement("option");
                content_pane_medium_sizeHTML.value = "medium";
                content_pane_medium_sizeHTML.textContent = this.translations[this.currentLang]["medium"];
                content_pane_medium_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.content_pane === "medium";
        
                let content_pane_large_sizeHTML = document.createElement("option");
                content_pane_large_sizeHTML.value = "large";
                content_pane_large_sizeHTML.textContent = this.translations[this.currentLang]["large"];
                content_pane_large_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.content_pane === "large";
        
                let content_pane_xlarge_sizeHTML = document.createElement("option");
                content_pane_xlarge_sizeHTML.value = "xlarge";
                content_pane_xlarge_sizeHTML.textContent = this.translations[this.currentLang]["xlarge"];
                content_pane_xlarge_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.content_pane === "xlarge";
        
                content_pane_sizeHTML.append(content_pane_xsmall_sizeHTML);
                content_pane_sizeHTML.append(content_pane_small_sizeHTML);
                content_pane_sizeHTML.append(content_pane_medium_sizeHTML);
                content_pane_sizeHTML.append(content_pane_large_sizeHTML);
                content_pane_sizeHTML.append(content_pane_xlarge_sizeHTML);
        
                let content_pane_size_labelHTML = document.createElement("label");
                this.FileManagerStyles.fmAddClass(content_pane_size_labelHTML, "fm_color_label");
                content_pane_size_labelHTML.classList.add("fm_color_label");
                this.FileManagerStyles.updatableElements["fm_color_label"].push(content_pane_size_labelHTML);
                content_pane_size_labelHTML.innerHTML = this.translations[this.currentLang]["Content Pane interface"] + ":<br>";
                content_pane_size_labelHTML.append(content_pane_sizeHTML);
        
                let settings_panel_sizeHTML = document.createElement("select");
                this.FileManagerStyles.fmAddClass(settings_panel_sizeHTML, "fm_select_input");
                this.FileManagerStyles.updatableElements["fm_select_input"].push(settings_panel_sizeHTML);
                settings_panel_sizeHTML.classList.add("fm_select_input");
                settings_panel_sizeHTML.name = "settings_panel";
                this.settingsInterfaceSelect["settings_panel"] = settings_panel_sizeHTML;
        
                let settings_panel_xsmall_sizeHTML = document.createElement("option");
                settings_panel_xsmall_sizeHTML.value = "xsmall";
                settings_panel_xsmall_sizeHTML.textContent = this.translations[this.currentLang]["xsmall"];
                settings_panel_xsmall_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.settings_panel === "xsmall";
        
                let settings_panel_small_sizeHTML = document.createElement("option");
                settings_panel_small_sizeHTML.value = "small";
                settings_panel_small_sizeHTML.textContent = this.translations[this.currentLang]["small"];
                settings_panel_small_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.settings_panel === "small";
        
                let settings_panel_medium_sizeHTML = document.createElement("option");
                settings_panel_medium_sizeHTML.value = "medium";
                settings_panel_medium_sizeHTML.textContent = this.translations[this.currentLang]["medium"];
                settings_panel_medium_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.settings_panel === "medium";
        
                let settings_panel_large_sizeHTML = document.createElement("option");
                settings_panel_large_sizeHTML.value = "large";
                settings_panel_large_sizeHTML.textContent = this.translations[this.currentLang]["large"];
                settings_panel_large_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.settings_panel === "large";
        
                let settings_panel_xlarge_sizeHTML = document.createElement("option");
                settings_panel_xlarge_sizeHTML.value = "xlarge";
                settings_panel_xlarge_sizeHTML.textContent = this.translations[this.currentLang]["xlarge"];
                settings_panel_xlarge_sizeHTML.selected = this.FileManagerStyles.fileManagerMutableStyles.sizing.settings_panel === "xlarge";
        
                settings_panel_sizeHTML.append(settings_panel_xsmall_sizeHTML);
                settings_panel_sizeHTML.append(settings_panel_small_sizeHTML);
                settings_panel_sizeHTML.append(settings_panel_medium_sizeHTML);
                settings_panel_sizeHTML.append(settings_panel_large_sizeHTML);
                settings_panel_sizeHTML.append(settings_panel_xlarge_sizeHTML);
        
                let settings_panel_size_labelHTML = document.createElement("label");
                this.FileManagerStyles.fmAddClass(settings_panel_size_labelHTML, "fm_color_label");
                settings_panel_size_labelHTML.classList.add("fm_color_label");
                this.FileManagerStyles.updatableElements["fm_color_label"].push(settings_panel_size_labelHTML);
                settings_panel_size_labelHTML.innerHTML = this.translations[this.currentLang]["Settings Pane interface"] + ":<br>";
                settings_panel_size_labelHTML.append(settings_panel_sizeHTML);

                params_panelHTML.append(address_pane_size_labelHTML);
                params_panelHTML.append(tools_size_labelHTML);
                params_panelHTML.append(navigation_pane_size_labelHTML);
                params_panelHTML.append(content_pane_size_labelHTML);
                params_panelHTML.append(settings_panel_size_labelHTML);
            }
           
            let buttons_panelHTML = document.createElement("div");
            this.FileManagerStyles.fmAddClass(buttons_panelHTML, "fm_buttons_panel");
            buttons_panelHTML.classList.add("fm_buttons_panel");
    
            let message_submitHTML = document.createElement("span");
            this.FileManagerStyles.fmAddClass(message_submitHTML, "fm_message_submit");
            message_submitHTML.classList.add("fm_message_submit");
            message_submitHTML.textContent = "";
    
            let reset_settings_buttonHTML = document.createElement("button");
            this.FileManagerStyles.fmAddClass(reset_settings_buttonHTML, "fm_reset_settings_button");
            reset_settings_buttonHTML.classList.add("fm_reset_settings_button");
            this.FileManagerStyles.updatableElements["fm_reset_settings_button"] = [reset_settings_buttonHTML];
            reset_settings_buttonHTML.textContent = this.translations[this.currentLang]["To default"];
            reset_settings_buttonHTML.type = "button";
            reset_settings_buttonHTML.addEventListener("click", this.handleResetSettings.bind(this));
    
            let submit_settings_buttonHTML = document.createElement("button");
            this.FileManagerStyles.fmAddClass(submit_settings_buttonHTML, "fm_submit_settings_button");
            submit_settings_buttonHTML.classList.add("fm_submit_settings_button");
            this.FileManagerStyles.updatableElements["fm_submit_settings_button"] = [submit_settings_buttonHTML];
            submit_settings_buttonHTML.textContent = this.translations[this.currentLang]["Submit"];
            submit_settings_buttonHTML.type = "submit";
    
            buttons_panelHTML.append(message_submitHTML);
            buttons_panelHTML.append(reset_settings_buttonHTML);
            buttons_panelHTML.append(submit_settings_buttonHTML);
            settingsFormHTML.append(params_panelHTML);
            settingsFormHTML.append(buttons_panelHTML);
            settings_panelHTML.append(title_blockHTML);
            settings_panelHTML.append(settingsFormHTML);
            filemanager_super_root.append(settings_panelHTML);
        }

        this.root.append(filemanager_super_root);



        return filemanager_super_root;
    }
}