"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

"use strict";
class FileManagerStyles {
    constructor() {
        this.updatableElements = {};
        this.fileManagerMutableStyles = {
            "colors": {
                hover: "#3e3e3e",
                border: "#2B2B2B",
                main_background: "#252526",
                selected: "#4a4a4a",
                text_color: "#ffffff"
            },
        };
        this.fileManagerHeaderStyles = {};
        this.fileManagerStyles = {};
        this.setDefaultMutableStyles();
        if (localStorage.fmMutableStyles) {
            this.updateMutableStyles();
        }
        else {
            let defaultStyles = this.getDefaultMutableStyles();
            this.setMutableStyles(defaultStyles);
            this.updateMutableStyles();
        }
        this.updateFileManagerStyles();
        this.updateFileManagerHeaderStyles();
        this.headerStyleElement = document.createElement('style');
        document.head.appendChild(this.headerStyleElement);
    }
    updateFileManagerStyles() {
        this.fileManagerStyles = {
            "fm_super_root": {
                "box-sizing": 'border-box',
                fontFamily: '"Roboto", sans-serif',
                width: '800px',
                height: "600px",
                display: "flex",
                "flex-direction": "column",
            },
            "fm_folders_nav": {
                width: '220px',
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                "border-radius": '4px',
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                color: '#e3e3e3',
                overflowX: 'scroll',
                height: '100%',
                scrollbarWidth: 'thin',
                scrollbarColor: `#888 ${this.fileManagerMutableStyles.colors.border}`,
            },
            "fm_folder_icon": {
                width: '22px',
                marginRight: '8px',
            },
            "fm_folder_name": {
                fontSize: '14px',
                color: this.fileManagerMutableStyles.colors.text_color,
            },
            "fm_folder": {
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                marginLeft: '24px',
            },
            "fm_folder_parent": {
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                width: '100%',
            },
            "fm_folder_open_icon_wrapper": {
                paddingLeft: '4px',
                paddingRight: '8px',
            },
            "fm_folder_parent__opened": {
                "background-color": this.fileManagerMutableStyles.colors.selected,
            },
            "fm_openedFile": {
                "background-color": this.fileManagerMutableStyles.colors.selected,
            },
            "fm_folder_open_icon": {
                width: '10px',
            },
            "fm_folder_wrapper": {
                position: 'relative',
                left: '24px',
                userSelect: 'none',
            },
            "fm_folder_root_wrapper": {
                position: 'static',
            },
            "fm_files_panel": {
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                color: '#e3e3e3',
                width: '80%',
                "border-radius": '4px',
                overflowY: 'auto',
                height: '100%',
            },
            "fm_filemanager_main": {
                display: 'flex',
                flexDirection: 'row',
                gap: '8px',
                padding: '16px',
                paddingTop: '8px',
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                "border-radius": '0px 0px 4px 4px',
                height: "85%",
                "box-sizing": "border-box"
            },
            "fm_metadata_block": {
                display: 'flex',
                flexDirection: 'row',
                borderBottom: `2px solid ${this.fileManagerMutableStyles.colors.border}`,
                padding: '8px',
                fontSize: '12px',
                paddingLeft: '12px',
            },
            "fm_metadata": {
                userSelect: 'none',
            },
            "fm_metadata_name": {
                width: '40%',
            },
            "fm_metadata_changedate": {
                width: '32%',
            },
            "fm_file_changedate": {
                width: '32%',
            },
            "fm_metadata_type": {
                width: '14%',
            },
            "fm_metadata_size": {
                width: '14%',
            },
            "fm_file_type": {
                width: '14%',
            },
            "fm_file_size": {
                width: '14%',
            },
            "fm_files_list": {
                padding: '8px 0px',
            },
            "fm_file_metadata": {
                overflow: 'hidden',
                userSelect: 'none',
                color: this.fileManagerMutableStyles.colors.text_color,
            },
            "fm_file_block": {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottom: `2px solid ${this.fileManagerMutableStyles.colors.border}`,
                padding: '8px 0px',
                paddingLeft: '12px',
                cursor: 'pointer',
            },
            "fm_file_icon": {
                width: '22px',
                marginRight: '2%',
                userSelect: 'none',
            },
            "fm_file_name": {
                width: '31%',
                marginRight: '2%',
                overflow: 'hidden',
                "box-sizing": "border-box",
            },
            "fm_filemanager_tools": {
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                borderTop: 'none',
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                padding: '0px 16px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: '50px',
                "box-sizing": 'border-box',
            },
            "fm_filemanager_navigation": {
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                "border-radius": '4px 4px 0px 0px',
                padding: '8px 16px',
                display: 'flex',
                flexDirection: 'row',
            },
            "fm_filemanager_arrow": {
                width: '16px',
                display: 'block',
                userSelect: 'none',
            },
            "fm_arrows_block": {
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                display: 'flex',
                "border-radius": '4px',
            },
            "fm_arrow_wrapper": {
                padding: '8px 12px',
                "border-radius": '4px',
                cursor: 'pointer',
            },
            "fm_add_file_button": {
                color: this.fileManagerMutableStyles.colors.text_color,
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                borderTop: 'none',
                borderBottom: 'none',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500',
                height: '100%',
                "user-select": "none"
            },
            "fm_add_file_icon": {
                width: '24px',
            },
            "fm_tool": {
                width: '35px',
                height: '35px',
                padding: '8px',
                margin: '0px 8px',
                cursor: 'pointer',
                display: 'block',
                userSelect: 'none',
                "box-sizing": 'border-box'
            },
            "fm_current_path": {
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                "border-radius": '4px',
                width: '60%',
                marginLeft: '16px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '8px',
                padding: '0px 12px',
                marginRight: '8px',
            },
            "fm_path_arrow": {
                width: '12px',
            },
            "fm_path_folder": {
                color: this.fileManagerMutableStyles.colors.text_color,
                userSelect: 'none',
            },
            "fm_search": {
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                "border-radius": '4px',
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                padding: '0px 8px',
                color: '#ffff',
                width: '20%',
            },
            "fm_grid_wrapper": {
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-end',
            },
            "fm_disabled": {
                opacity: '0.5',
            },
            "fm_upload_files_block": {
                display: 'flex',
                flexDirection: 'column',
                "background-color": this.fileManagerMutableStyles.colors.hover,
                width: '143px',
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                borderTop: 'none',
                position: 'absolute',
                bottom: '-84px',
                zIndex: '10',
                cursor: 'pointer',
                "box-sizing": 'border-box',
            },
            "fm_upload_files_func_wrapper": {
                display: 'flex',
                flexDirection: 'row',
                padding: '8px',
                gap: '8px',
                alignItems: 'center',
                width: '100%',
                userSelect: 'none',
                "box-sizing": 'border-box',
                position: 'relative',
            },
            "fm_upload_files_func_icon": {
                width: '24px',
            },
            "fm_upload_files_func_name": {
                color: this.fileManagerMutableStyles.colors.text_color,
                fontSize: '13px',
                fontWeight: '500',
            },
            "fm_hidden": {
                display: 'none',
            },
            "fm_upload_files_func_input": {
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0px',
                left: '0px',
                opacity: '0',
            },
            "fm_upload_file_func_input": {
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0px',
                left: '0px',
                opacity: '0',
            },
            "fm_tool_active": {
                opacity: '0.6',
            },
            "fm_settings_panel": {
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                width: "100%",
                height: "100%",
                padding: "4%",
                "box-sizing": "border-box",
                "border-radius": "4px"
            },
            "fm_leave_settings_arrow": {},
            "fm_params_panel": {
                display: "flex",
                "flex-direction": "row",
                padding: "16px 8px",
                "flex-wrap": "wrap",
                gap: "12px",
            },
            "fm_color_label": {
                color: this.fileManagerMutableStyles.colors.text_color,
                display: "flex",
                gap: "8px",
                "flex-direction": "column",
                padding: "16px",
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                "border-radius": '8px',
            },
            "fm_color_input": {
                width: "40px",
                height: "40px",
                "box-shadow": "0px 4px 8px 0px rgba(171, 171, 171, 0.2)",
                padding: "0px",
                margin: "0px",
                border: "none",
                cursor: "pointer",
                "border-radius": "4px",
            },
            "fm_title_block": {
                color: this.fileManagerMutableStyles.colors.text_color,
                "font-size": "20px",
                "font-weight": "600",
                display: "flex",
                "flex-direction": "column-reverse",
                gap: "16px",
                "margin-left": "12px",
            },
            "fm_buttons_panel": {
                display: "flex",
                "justify-content": "flex-end",
                gap: "16px",
                "align-items": "center"
            },
            "fm_submit_settings_button": {
                padding: "12px",
                "background-color": "#a7d649",
                border: "none",
                "border-radius": "8px",
                "font-weight": "600",
                "cursor": "pointer"
            },
            "fm_settings_form": {
                height: "85%",
                display: "flex",
                "flex-direction": "column",
                "justify-content": "space-between",
                "box-sizing": "border-box",
            },
            "fm_reset_settings_button": {
                padding: "12px",
                "background-color": "#a9b09b",
                border: "none",
                "border-radius": "8px",
                "font-weight": "600",
                "cursor": "pointer"
            },
            "fm_message_submit": {
                color: "#a7d649"
            },
        };
    }
    updateFileManagerHeaderStyles() {
        this.fileManagerHeaderStyles = {
            "fm_folder_parent:hover": {
                "background-color": this.fileManagerMutableStyles.colors.hover,
            },
            'fm_folders_nav::-webkit-scrollbar': {
                width: '10px',
            },
            'fm_files_panel::-webkit-scrollbar': {
                width: '10px',
            },
            'fm_folders_nav::-webkit-scrollbar-track': {
                "background-color": this.fileManagerMutableStyles.colors.border,
            },
            'fm_files_panel::-webkit-scrollbar-track': {
                "background-color": this.fileManagerMutableStyles.colors.border,
            },
            'fm_folders_nav::-webkit-scrollbar-thumb': {
                "background-color": '#888',
            },
            'fm_files_panel::-webkit-scrollbar-thumb': {
                "background-color": '#888',
            },
            "fm_arrow_wrapper:hover": {
                "background-color": this.fileManagerMutableStyles.colors.hover,
            },
            "fm_arrow_wrapper:active": {
                opacity: '0.6',
            },
            "fm_add_file_button:hover": {
                "background-color": this.fileManagerMutableStyles.colors.hover,
            },
            "fm_tool:hover": {
                "background-color": this.fileManagerMutableStyles.colors.hover,
                "border-radius": '4px',
            },
            "fm_path_folder:hover": {
                color: '#dcdbdb',
                cursor: 'pointer',
            },
            "fm_file_block:hover": {
                "background-color": this.fileManagerMutableStyles.colors.hover
            },
            "fm_search:focus": {
                "background-color": this.fileManagerMutableStyles.colors.hover,
            },
            "fm_upload_files_func_wrapper:hover": {
                "background-color": this.fileManagerMutableStyles.colors.selected,
            },
            "fm_submit_settings_button:hover": {
                "background-color": "#94be41",
            },
            "fm_reset_settings_button:hover": {
                "background-color": "#9aa08e",
            }
        };
    }
    fmAddClass(element, classname) {
        Object.assign(element.style, this.fileManagerStyles[classname]);
    }
    fmRemoveClass(element, classname) {
        let element_styles = this.fileManagerStyles[classname];
        for (let key in element_styles) {
            if (classname === "fm_openedFile" && key === "background-color") {
                element.style.backgroundColor = "";
            }
            else if (classname === "fm_folder_parent__opened" && key === "background-color") {
                element.style.backgroundColor = "";
            }
            else if (classname === "fm_disabled" && key === 'opacity') {
                element.style.opacity = "1";
            }
            else if (classname === "fm_hidden" && key === 'display') {
                element.style.display = "block";
            }
        }
    }
    updateHeaderStyles() {
        this.headerStyleElement.textContent = "";
        for (let classname in this.fileManagerHeaderStyles) {
            this.headerStyleElement.textContent += `.${classname} {\n`;
            for (let style in this.fileManagerHeaderStyles[classname]) {
                this.headerStyleElement.textContent += `    ${style}: ${this.fileManagerHeaderStyles[classname][style]} !important;\n`;
            }
            this.headerStyleElement.textContent += `}\n`;
        }
    }
    updateUpdatableElements() {
        for (let key in this.updatableElements) {
            this.updatableElements[key].forEach(element => {
                Object.assign(element.style, this.fileManagerStyles[key]);
            });
        }
    }
    updateMutableStyles() {
        this.fileManagerMutableStyles = JSON.parse(localStorage.fmMutableStyles);
    }
    setMutableStyles(mutableStyles) {
        localStorage.fmMutableStyles = JSON.stringify(mutableStyles);
    }
    getDefaultMutableStyles() {
        return JSON.parse(localStorage.fmDefaultMutableStyles);
    }
    setDefaultMutableStyles() {
        let defaultMutableStyles = {
            "colors": {
                hover: "#3e3e3e",
                border: "#2B2B2B",
                main_background: "#252526",
                selected: "#4a4a4a",
                text_color: "#ffffff"
            },
        };
        localStorage.fmDefaultMutableStyles = JSON.stringify(defaultMutableStyles);
    }
}


class FileManagerServer {
}
class FileManager {
    constructor(root, FileManagerServer, rootFolderName = 'Root') {
        this.image_extension = ['png', 'jpg', 'jpeg', 'webp'];
        this.FileManagerStyles = new FileManagerStyles();
        this.lastFolders = [];
        this.currentPath = '/';
        this.currentFilePath = '/';
        this.selectedFilePath = '/';
        this.duplicateState = false;
        this.cutState = false;
        this.openFolders = [];
        this.settingsColorInput = {};
        this.toolsState = {
            remove: false,
            cut: false,
            duplicate: false,
            insert: false,
            rename: false
        };
        this.FileManagerStyles.updateHeaderStyles();
        this.rootFolderName = rootFolderName;
        this.FileManagerServer = FileManagerServer;
        this.arrowsState = {
            back_arrow: true,
            up_arrow: false,
        };
        if (!(root instanceof HTMLElement)) {
            throw new SyntaxError("An empty or invalid variable type was passed.");
        }
        this.root = root;
        this.filemanager_root = this.initInterface();
        this.filemanager_root.addEventListener("click", this.handleFilemanagerClick.bind(this));
        let bufferChecker = this.filemanager_root.querySelector(".fm_upload_files_block");
        if (bufferChecker instanceof HTMLElement) {
            this.uploadFilesPanel = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        bufferChecker = this.filemanager_root.querySelector(".fm_settings_panel");
        if (bufferChecker instanceof HTMLElement) {
            this.settingsPanel = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        bufferChecker = this.filemanager_root.querySelector(".fm_settings_panel");
        if (bufferChecker instanceof HTMLElement) {
            this.settingsPanel = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        bufferChecker = this.filemanager_root.querySelector(".fm_filemanager_navigation");
        if (bufferChecker instanceof HTMLElement) {
            this.navigationPanel = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        bufferChecker = this.filemanager_root.querySelector(".fm_filemanager_tools");
        if (bufferChecker instanceof HTMLElement) {
            this.toolsPanel = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        bufferChecker = this.filemanager_root.querySelector(".fm_settings_form");
        if (bufferChecker instanceof HTMLElement) {
            this.settingsForm = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        bufferChecker = this.filemanager_root.querySelector(".fm_filemanager_main");
        if (bufferChecker instanceof HTMLElement) {
            this.mainPanel = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        bufferChecker = this.filemanager_root.querySelector(".fm_current_path");
        if (bufferChecker instanceof HTMLElement) {
            this.currentPathElem = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        const back_arrow = this.filemanager_root.querySelector(".fm_arrow_back");
        const up_arrow = this.filemanager_root.querySelector(".fm_arrow_up");
        if (back_arrow instanceof HTMLElement && up_arrow instanceof HTMLElement) {
            this.arrowsElements = {
                back_arrow: back_arrow,
                up_arrow: up_arrow,
            };
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        const remove_elem = this.filemanager_root.querySelector(".fm_remove");
        const cut_elem = this.filemanager_root.querySelector(".fm_cut");
        const duplicate_elem = this.filemanager_root.querySelector(".fm_duplicate");
        const insert_elem = this.filemanager_root.querySelector(".fm_insert");
        const rename_elem = this.filemanager_root.querySelector(".fm_rename");
        if (remove_elem instanceof HTMLElement && cut_elem instanceof HTMLElement && duplicate_elem instanceof HTMLElement && insert_elem instanceof HTMLElement && rename_elem instanceof HTMLElement) {
            this.toolsElements = {
                remove: remove_elem,
                cut: cut_elem,
                duplicate: duplicate_elem,
                insert: insert_elem,
                rename: rename_elem
            };
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        this.updateBackArrow();
        bufferChecker = document.querySelector(".fm_folder_root_wrapper");
        let root_parent = bufferChecker === null || bufferChecker === void 0 ? void 0 : bufferChecker.querySelector(".fm_folder_parent");
        if (root_parent instanceof HTMLElement) {
            this.updateFileList(root_parent, true);
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
    }
    createHTMLFileList(file) {
        var _a;
        let file_blockHTML = document.createElement("div");
        file_blockHTML.classList.add("fm_file_block");
        this.FileManagerStyles.fmAddClass(file_blockHTML, "fm_file_block");
        file_blockHTML.addEventListener("click", this.handleFileClick.bind(this));
        if (this.FileManagerStyles.updatableElements["fm_file_block"]) {
            this.FileManagerStyles.updatableElements["fm_file_block"].push(file_blockHTML);
        }
        else {
            this.FileManagerStyles.updatableElements["fm_file_block"] = [file_blockHTML];
        }
        let file_iconHTML = document.createElement("img");
        file_iconHTML.classList.add("fm_file_icon");
        this.FileManagerStyles.fmAddClass(file_iconHTML, "fm_file_icon");
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
            file_iconHTML.src = "icons/folder.png";
            file_typeHTML.textContent = "Folder";
        }
        else {
            let ext = file.name.split('.');
            if (this.image_extension.includes(ext[ext.length - 1])) {
                file_iconHTML.src = "icons/picture.png";
                file_typeHTML.textContent = "Image";
            }
            else {
                file_iconHTML.src = "icons/textfile.png";
                file_typeHTML.textContent = "Text File";
            }
        }
        let file_nameHTML = document.createElement("span");
        file_nameHTML.classList.add("fm_file_name");
        file_nameHTML.classList.add("fm_file_metadata");
        this.FileManagerStyles.fmAddClass(file_nameHTML, "fm_file_name");
        this.FileManagerStyles.fmAddClass(file_nameHTML, "fm_file_metadata");
        this.FileManagerStyles.updatableElements["fm_file_metadata"].push(file_nameHTML);
        file_nameHTML.textContent = file.name;
        let file_changedateHTML = document.createElement("span");
        file_changedateHTML.classList.add("fm_file_changedate");
        file_changedateHTML.classList.add("fm_file_metadata");
        this.FileManagerStyles.fmAddClass(file_changedateHTML, "fm_file_changedate");
        this.FileManagerStyles.fmAddClass(file_changedateHTML, "fm_file_metadata");
        this.FileManagerStyles.updatableElements["fm_file_metadata"].push(file_changedateHTML);
        file_changedateHTML.textContent = file.changedate;
        let file_sizeHTML = document.createElement("span");
        file_sizeHTML.classList.add("fm_file_size");
        file_sizeHTML.classList.add("fm_file_metadata");
        this.FileManagerStyles.fmAddClass(file_sizeHTML, "fm_file_size");
        this.FileManagerStyles.fmAddClass(file_sizeHTML, "fm_file_metadata");
        this.FileManagerStyles.updatableElements["fm_file_metadata"].push(file_sizeHTML);
        if (!file.isFolder) {
            // let size = Number(file.size.replace(/^\D+/g, ''));
            const match = file.size.match(/-?\d+(\.\d+)?/);
            let size = match ? parseFloat(match[0]) : NaN;
            if (size > 1024) {
                size = size / 1024;
                file_sizeHTML.textContent = String(Math.round(size * 10) / 10) + " КБ";
            }
            else if (size > 1024 * 1024) {
                size = size / (1024 * 1024);
                file_sizeHTML.textContent = String(Math.round(size * 10) / 10) + " МБ";
            }
            else {
                file_sizeHTML.textContent = String(size) + " Байт";
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
        (_a = this.files_listHTML) === null || _a === void 0 ? void 0 : _a.append(file_blockHTML);
        return file_blockHTML;
    }
    createHTMLNavFolder(folder, root, initial = false) {
        let root_parent = root.parentElement;
        let root_parent_path = root_parent === null || root_parent === void 0 ? void 0 : root_parent.getAttribute("path");
        if (!root_parent_path && !initial) {
            throw new Error('Element does not have a path attribute');
        }
        let folder_wrapperHTML = document.createElement("div");
        folder_wrapperHTML.classList.add("fm_folder_wrapper");
        this.FileManagerStyles.fmAddClass(folder_wrapperHTML, "fm_folder_wrapper");
        let folder_childrenHTML = document.createElement("div");
        folder_childrenHTML.classList.add("fm_folder_children");
        this.FileManagerStyles.fmAddClass(folder_childrenHTML, "fm_folder_children");
        let folderHTML = document.createElement("div");
        folderHTML.classList.add("fm_folder_parent");
        this.FileManagerStyles.fmAddClass(folderHTML, "fm_folder_parent");
        let folder_open_icon_wrapperHTML = document.createElement("div");
        folder_open_icon_wrapperHTML.classList.add("fm_folder_open_icon_wrapper");
        this.FileManagerStyles.fmAddClass(folder_open_icon_wrapperHTML, "fm_folder_open_icon_wrapper");
        let folder_open_iconHTML = document.createElement("img");
        folder_open_iconHTML.classList.add("fm_folder_open_icon");
        this.FileManagerStyles.fmAddClass(folder_open_iconHTML, "fm_folder_open_icon");
        folder_open_iconHTML.src = "icons/arrow-point-to-right.png";
        let folder_iconHTML = document.createElement("img");
        folder_iconHTML.classList.add("fm_folder_icon");
        this.FileManagerStyles.fmAddClass(folder_iconHTML, "fm_folder_icon");
        folder_iconHTML.src = "icons/folder.png";
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
    openCloseFolder(folder_parent_1) {
        return __awaiter(this, arguments, void 0, function* (folder_parent, from = "nav") {
            let folder_open_icon = folder_parent === null || folder_parent === void 0 ? void 0 : folder_parent.querySelector('.fm_folder_open_icon');
            let folder_wrapper = folder_parent.closest('.fm_folder_wrapper');
            let folder_children = folder_wrapper === null || folder_wrapper === void 0 ? void 0 : folder_wrapper.querySelector('.fm_folder_children');
            let folder_name = folder_parent.querySelector('.fm_folder_name');
            if (folder_wrapper != null && folder_name != null && folder_open_icon != null && folder_open_icon instanceof HTMLImageElement && folder_children != null && folder_children != undefined) {
                let children = folder_children.children;
                if ((folder_parent === null || folder_parent === void 0 ? void 0 : folder_parent.classList.contains('fm_opened')) && from !== "filelist") {
                    folder_parent.classList.remove('fm_opened');
                    this.FileManagerStyles.fmRemoveClass(folder_parent, "fm_opened");
                    folder_open_icon.src = "icons/arrow-point-to-right.png";
                    for (const child of children) {
                        if (child instanceof HTMLElement) {
                            child.style.display = "none";
                        }
                    }
                }
                else if (!(folder_parent === null || folder_parent === void 0 ? void 0 : folder_parent.classList.contains('fm_opened'))) {
                    folder_parent === null || folder_parent === void 0 ? void 0 : folder_parent.classList.add('fm_opened');
                    this.FileManagerStyles.fmAddClass(folder_parent, "fm_opened");
                    folder_open_icon.src = "icons/arrow-point-to-down.png";
                    if (children.length === 0) {
                        if (folder_name === null || folder_name === void 0 ? void 0 : folder_name.textContent) {
                            let path = folder_wrapper.getAttribute("path");
                            if (path) {
                                this.currentPath = path;
                                yield this.getInternalFolders(folder_children, path);
                                this.updateUpArrow(path);
                                this.updateRemove();
                                this.updateRename();
                                this.updateDuplicate();
                                this.updateCut();
                                this.updateBackArrow();
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
        });
    }
    handleOpenNavFolder(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.stopPropagation();
            if (event.target != null && event.target instanceof HTMLElement) {
                let targetElem = event.target;
                let folder_parent = targetElem.closest('.fm_folder_parent');
                if (folder_parent != null && folder_parent instanceof HTMLElement) {
                    yield this.openCloseFolder(folder_parent, 'nav');
                }
                else {
                    throw new Error('The hierarchy of elements was violated');
                }
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
        });
    }
    focusNavFolder(folder_parent, back) {
        var _a;
        if (folder_parent !== this.currentFolder) {
            if (this.currentFolder) {
                (_a = this.currentFolder) === null || _a === void 0 ? void 0 : _a.classList.remove("fm_folder_parent__opened");
                this.FileManagerStyles.fmRemoveClass(this.currentFolder, "fm_folder_parent__opened");
                if (!back) {
                    this.lastFolders.push(this.currentFolder);
                }
            }
            folder_parent === null || folder_parent === void 0 ? void 0 : folder_parent.classList.add("fm_folder_parent__opened");
            this.FileManagerStyles.fmAddClass(folder_parent, "fm_folder_parent__opened");
            this.FileManagerStyles.updatableElements["fm_folder_parent__opened"] = [folder_parent];
            this.currentFolder = folder_parent;
        }
    }
    handleShowFileList(event) {
        event.stopPropagation();
        if (event.target != null && event.target instanceof HTMLElement) {
            let targetElem = event.target;
            this.updateFileList(targetElem);
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
    }
    updateBackArrow() {
        if (this.lastFolders.length > 0 && !this.arrowsState.back_arrow) {
            this.arrowsState.back_arrow = true;
            this.arrowsElements.back_arrow.classList.remove("fm_disabled");
            this.FileManagerStyles.fmRemoveClass(this.arrowsElements.back_arrow, "fm_disabled");
            this.arrowsElements.back_arrow.style.pointerEvents = 'auto';
        }
        else if (this.lastFolders.length === 0 && this.arrowsState.back_arrow) {
            this.arrowsState.back_arrow = false;
            this.arrowsElements.back_arrow.classList.add("fm_disabled");
            this.FileManagerStyles.fmAddClass(this.arrowsElements.back_arrow, "fm_disabled");
            this.arrowsElements.back_arrow.style.pointerEvents = 'none';
        }
    }
    updateUpArrow(path) {
        if (path !== "/" && !this.arrowsState.up_arrow) {
            this.arrowsState.up_arrow = true;
            this.arrowsElements.up_arrow.classList.remove("fm_disabled");
            this.FileManagerStyles.fmRemoveClass(this.arrowsElements.up_arrow, "fm_disabled");
            this.arrowsElements.up_arrow.style.pointerEvents = 'auto';
        }
        else if (path === "/" && this.arrowsState.up_arrow) {
            this.arrowsState.up_arrow = false;
            this.arrowsElements.up_arrow.classList.add("fm_disabled");
            this.FileManagerStyles.fmAddClass(this.arrowsElements.up_arrow, "fm_disabled");
            this.arrowsElements.up_arrow.style.pointerEvents = 'none';
        }
    }
    updateCurrentPath(path) {
        this.currentPathElem.innerHTML = "";
        let path_elements = path.split("/");
        let root_path = document.createElement("span");
        root_path.classList.add("fm_path_folder");
        this.FileManagerStyles.fmAddClass(root_path, "fm_path_folder");
        this.FileManagerStyles.updatableElements["fm_path_folder"] = [root_path];
        root_path.textContent = this.rootFolderName;
        this.currentPathElem.append(root_path);
        if (path_elements[1] !== '') {
            for (let i = 1; i < path_elements.length; i++) {
                let path_img = document.createElement("img");
                path_img.classList.add("fm_path_arrow");
                this.FileManagerStyles.fmAddClass(path_img, "fm_path_arrow");
                path_img.src = "icons/arrow-right.png";
                let path_folder = document.createElement("span");
                path_folder.classList.add("fm_path_folder");
                this.FileManagerStyles.fmAddClass(path_folder, "fm_path_folder");
                this.FileManagerStyles.updatableElements["fm_path_folder"].push(path_folder);
                path_folder.textContent = path_elements[i];
                this.currentPathElem.append(path_img);
                this.currentPathElem.append(path_folder);
            }
        }
    }
    handleBackArrowClick(event) {
        event.stopPropagation();
        if (this.lastFolders.length > 0) {
            let lastFolder = this.lastFolders.pop();
            if (lastFolder) {
                this.updateFileList(lastFolder, true);
            }
        }
    }
    handleUpArrowClick(event) {
        var _a, _b, _c;
        event.stopPropagation();
        if (this.currentFolder instanceof HTMLElement) {
            let folder_wrapper = (_c = (_b = (_a = this.currentFolder) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement;
            let folder_parent = folder_wrapper === null || folder_wrapper === void 0 ? void 0 : folder_wrapper.querySelector('.fm_folder_parent');
            if (folder_parent instanceof HTMLElement) {
                this.updateFileList(folder_parent, true);
            }
        }
    }
    handleRefreshClick(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.currentFolder instanceof HTMLElement) {
                yield this.updateNavFolders();
                this.updateFileList(this.currentFolder, true);
                this.selectedFilePath = "/";
                this.toolsState.cut = false;
                this.toolsState.duplicate = false;
                this.updateInsert();
            }
        });
    }
    handleUploadClick(event) {
        if (this.uploadFilesPanel.classList.contains("fm_hidden")) {
            this.FileManagerStyles.fmRemoveClass(this.uploadFilesPanel, "fm_hidden");
            this.uploadFilesPanel.classList.remove("fm_hidden");
        }
        else {
            this.FileManagerStyles.fmAddClass(this.uploadFilesPanel, "fm_hidden");
            this.uploadFilesPanel.classList.add("fm_hidden");
        }
    }
    handleSubmitSettings(event) {
        event.preventDefault();
        let newMutableStyles = {
            "colors": {
                hover: this.settingsForm.hover_color.value,
                border: this.settingsForm.border_color.value,
                main_background: this.settingsForm.background_color.value,
                selected: this.settingsForm.select_color.value,
                text_color: this.settingsForm.text_color.value
            }
        };
        this.FileManagerStyles.setMutableStyles(newMutableStyles);
        this.FileManagerStyles.updateMutableStyles();
        this.FileManagerStyles.updateFileManagerStyles();
        this.FileManagerStyles.updateFileManagerHeaderStyles();
        this.FileManagerStyles.updateHeaderStyles();
        this.FileManagerStyles.updateUpdatableElements();
        this.mainPanel.style.display = "none";
        this.toolsPanel.style.display = "none";
        this.navigationPanel.style.display = "none";
        this.FileManagerStyles.fmAddClass(this.uploadFilesPanel, "fm_hidden");
        let message_submitHTML = this.filemanager_root.querySelector(".fm_message_submit");
        console.log(message_submitHTML);
        if (message_submitHTML instanceof HTMLElement) {
            message_submitHTML.textContent = "Success";
            setTimeout(() => {
                message_submitHTML.textContent = "";
            }, 2000);
        }
    }
    handleResetSettings(event) {
        event.preventDefault();
        let result = window.confirm("Are you sure you want to reset?");
        if (result) {
            let newMutableStyles = this.FileManagerStyles.getDefaultMutableStyles();
            this.FileManagerStyles.setMutableStyles(newMutableStyles);
            this.FileManagerStyles.updateMutableStyles();
            this.FileManagerStyles.updateFileManagerStyles();
            this.FileManagerStyles.updateFileManagerHeaderStyles();
            this.FileManagerStyles.updateHeaderStyles();
            this.FileManagerStyles.updateUpdatableElements();
            this.updateSettingsColorInputs();
            this.mainPanel.style.display = "none";
            this.toolsPanel.style.display = "none";
            this.navigationPanel.style.display = "none";
            this.FileManagerStyles.fmAddClass(this.uploadFilesPanel, "fm_hidden");
            let message_submitHTML = this.filemanager_root.querySelector(".fm_message_submit");
            if (message_submitHTML instanceof HTMLElement) {
                message_submitHTML.textContent = "Success";
                setTimeout(() => {
                    message_submitHTML.textContent = "";
                }, 2000);
            }
        }
    }
    updateFileList(targetElement_1) {
        return __awaiter(this, arguments, void 0, function* (targetElement, back = false) {
            let folder_wrapper = targetElement.closest('.fm_folder_wrapper');
            if (folder_wrapper) {
                let folder_parent = folder_wrapper === null || folder_wrapper === void 0 ? void 0 : folder_wrapper.querySelector('.fm_folder_parent');
                if (folder_parent instanceof HTMLElement) {
                    let path = folder_wrapper.getAttribute("path");
                    if (path) {
                        this.currentPath = path;
                        yield this.getInternalFiles(path);
                        this.focusNavFolder(folder_parent, back);
                        this.updateUpArrow(path);
                        this.clearCurrentFile();
                        this.updateBackArrow();
                        this.updateCurrentPath(path);
                    }
                }
            }
        });
    }
    handleUploadingFile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            let input_file = this.filemanager_root.querySelector('.fm_upload_file_func_input');
            if (input_file instanceof HTMLInputElement && input_file.files) {
                const file = input_file.files[0];
                if (!file) {
                    return;
                }
                try {
                    yield this.FileManagerServer.uploadFile(file, this.currentPath);
                }
                catch (error) {
                    throw error;
                }
                this.getInternalFiles(this.currentPath);
                this.updateUpArrow(this.currentPath);
                this.updateRemove();
                this.updateRename();
                this.updateDuplicate();
                this.updateCut();
                this.updateInsert();
                this.updateCurrentPath(this.currentPath);
                this.updateBackArrow();
                input_file.value = "";
            }
        });
    }
    openPreviousFolders() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.openFolders.length; i++) {
                let check_wrapper = this.filemanager_root.querySelector(`[path="${this.openFolders[i]}"]`);
                let open_folder = check_wrapper === null || check_wrapper === void 0 ? void 0 : check_wrapper.querySelector(".fm_folder_parent");
                if (open_folder instanceof HTMLElement) {
                    yield this.openCloseFolder(open_folder);
                }
            }
            this.openFolders = [];
        });
    }
    searchOpenFoldersStart() {
        let folder_root_wrapper = this.filemanager_root.querySelector(".fm_folder_root_wrapper");
        let folder_children_element = folder_root_wrapper === null || folder_root_wrapper === void 0 ? void 0 : folder_root_wrapper.querySelector(".fm_folder_children");
        let folder_children = folder_children_element === null || folder_children_element === void 0 ? void 0 : folder_children_element.children;
        if (folder_children) {
            for (let i = 0; i < folder_children.length; i++) {
                this.searchOpenFoldersRecursion(folder_children[i]);
            }
        }
    }
    searchOpenFoldersRecursion(folder_wrapper) {
        let folder_children_element = folder_wrapper === null || folder_wrapper === void 0 ? void 0 : folder_wrapper.querySelector(".fm_folder_children");
        let folder_children = folder_children_element === null || folder_children_element === void 0 ? void 0 : folder_children_element.children;
        let folder_parent = folder_wrapper === null || folder_wrapper === void 0 ? void 0 : folder_wrapper.querySelector(".fm_folder_parent");
        if (folder_parent && folder_parent.classList.contains("fm_opened") && folder_wrapper instanceof HTMLElement) {
            let path = folder_wrapper.getAttribute("path");
            if (path) {
                this.openFolders.push(path);
            }
        }
        if (folder_children) {
            for (let i = 0; i < folder_children.length; i++) {
                this.searchOpenFoldersRecursion(folder_children[i]);
            }
        }
    }
    updateNavFolders() {
        return __awaiter(this, void 0, void 0, function* () {
            let folder_root_wrapper = this.filemanager_root.querySelector(".fm_folder_root_wrapper");
            let folder_root_parent = folder_root_wrapper === null || folder_root_wrapper === void 0 ? void 0 : folder_root_wrapper.querySelector(".fm_folder_parent");
            let folder_root_childen_element = folder_root_wrapper === null || folder_root_wrapper === void 0 ? void 0 : folder_root_wrapper.querySelector(".fm_folder_children");
            let folder_open_icon = folder_root_parent === null || folder_root_parent === void 0 ? void 0 : folder_root_parent.querySelector('.fm_folder_open_icon');
            if (folder_root_parent instanceof HTMLElement && folder_root_childen_element && folder_open_icon instanceof HTMLImageElement) {
                let buffer_currentPath = this.currentPath;
                this.searchOpenFoldersStart();
                folder_root_childen_element.innerHTML = "";
                if (folder_root_parent === null || folder_root_parent === void 0 ? void 0 : folder_root_parent.classList.contains('fm_opened')) {
                    folder_root_parent.classList.remove('fm_opened');
                    this.FileManagerStyles.fmRemoveClass(folder_root_parent, "fm_opened");
                    folder_open_icon.src = "icons/arrow-point-to-right.png";
                }
                else if (!(folder_root_parent === null || folder_root_parent === void 0 ? void 0 : folder_root_parent.classList.contains('fm_opened'))) {
                    folder_root_parent === null || folder_root_parent === void 0 ? void 0 : folder_root_parent.classList.add('fm_opened');
                    this.FileManagerStyles.fmAddClass(folder_root_parent, "fm_opened");
                    folder_open_icon.src = "icons/arrow-point-to-down.png";
                }
                yield this.openCloseFolder(folder_root_parent, 'nav');
                yield this.openPreviousFolders();
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
        });
    }
    handleUploadingFolder(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            let input_folder = this.filemanager_root.querySelector('.fm_upload_files_func_input');
            if (input_folder instanceof HTMLInputElement && input_folder.files) {
                const files = input_folder.files;
                if (files.length === 0) {
                    return;
                }
                try {
                    yield this.FileManagerServer.uploadFolder(files, this.currentPath);
                }
                catch (error) {
                    throw error;
                }
                input_folder.value = "";
                yield this.updateNavFolders();
                if (this.currentFolder instanceof HTMLElement) {
                    this.updateFileList(this.currentFolder);
                }
            }
        });
    }
    handleOpenFileListFolder(event) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            event.stopPropagation();
            if (event.target != null && event.target instanceof HTMLElement) {
                if (this.currentFolder != null) {
                    yield this.openCloseFolder(this.currentFolder, 'filelist');
                }
                let targetElem = event.target;
                let file_block = targetElem.closest('.fm_file_block');
                let file_name = file_block === null || file_block === void 0 ? void 0 : file_block.querySelector('.fm_file_name');
                let currentWrapper = (_a = this.currentFolder) === null || _a === void 0 ? void 0 : _a.parentElement;
                let currentChildren = (_b = currentWrapper === null || currentWrapper === void 0 ? void 0 : currentWrapper.querySelector('.fm_folder_children')) === null || _b === void 0 ? void 0 : _b.children;
                if (file_block != null && file_name != null && currentWrapper != null && (file_name === null || file_name === void 0 ? void 0 : file_name.textContent) && currentChildren != null) {
                    let newCurrentFolder;
                    let newCurrentFolderWrapper;
                    for (let wrapper of currentChildren) {
                        if (((_c = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelector(".fm_folder_name")) === null || _c === void 0 ? void 0 : _c.textContent) === (file_name === null || file_name === void 0 ? void 0 : file_name.textContent)) {
                            newCurrentFolder = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelector(".fm_folder_parent");
                            newCurrentFolderWrapper = wrapper;
                            break;
                        }
                    }
                    if (newCurrentFolder && newCurrentFolder instanceof HTMLElement && newCurrentFolderWrapper != null && newCurrentFolderWrapper instanceof HTMLElement) {
                        let path = newCurrentFolderWrapper.getAttribute("path");
                        if (path && this.currentFolder) {
                            this.currentPath = path;
                            (_d = this.currentFolder) === null || _d === void 0 ? void 0 : _d.classList.remove("fm_folder_parent__opened");
                            this.FileManagerStyles.fmRemoveClass(this.currentFolder, "fm_folder_parent__opened");
                            newCurrentFolder.classList.add("fm_folder_parent__opened");
                            this.FileManagerStyles.fmAddClass(newCurrentFolder, "fm_folder_parent__opened");
                            if (this.currentFolder) {
                                this.lastFolders.push(this.currentFolder);
                            }
                            this.currentFolder = newCurrentFolder;
                            if (this.files_listHTML != null) {
                                this.files_listHTML.innerHTML = "";
                                this.getInternalFiles(path);
                                this.updateUpArrow(path);
                                this.updateCurrentPath(path);
                                this.updateBackArrow();
                                this.clearCurrentFile();
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
        });
    }
    updateRemove() {
        if (this.currentFile !== null && this.currentFilePath !== "/") {
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
    updateRename() {
        if (this.currentFile !== null && this.currentFilePath !== "/") {
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
    updateDuplicate() {
        if (this.currentFile !== null && this.currentFilePath !== "/") {
            this.toolsState.duplicate = true;
            this.toolsElements.duplicate.classList.remove("fm_disabled");
            this.FileManagerStyles.fmRemoveClass(this.toolsElements.duplicate, "fm_disabled");
            this.toolsElements.duplicate.style.pointerEvents = 'auto';
        }
        else {
            this.toolsState.duplicate = false;
            this.toolsElements.duplicate.classList.add("fm_disabled");
            this.FileManagerStyles.fmAddClass(this.toolsElements.duplicate, "fm_disabled");
            this.toolsElements.duplicate.style.pointerEvents = 'none';
        }
        this.updateInsert();
    }
    updateCut() {
        if (this.currentFile !== null && this.currentFilePath !== "/") {
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
    updateInsert() {
        if (this.selectedFilePath !== '/') {
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
    clearCurrentFile() {
        if (this.currentFile) {
            this.currentFile.classList.remove("fm_openedFile");
            this.FileManagerStyles.fmRemoveClass(this.currentFile, "fm_openedFile");
        }
        this.currentFile = null;
        this.currentFilePath = '/';
        this.updateRemove();
        this.updateRename();
        this.updateDuplicate();
        this.updateCut();
    }
    handleFilemanagerClick(event) {
        if (event.target instanceof HTMLElement && !event.target.closest(".fm_file_block")) {
            this.clearCurrentFile();
        }
    }
    handleRemoveClick(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.stopPropagation();
            let result = window.confirm("Are you sure you want to delete?");
            if (this.currentFilePath !== "/" && result) {
                try {
                    yield this.FileManagerServer.removeFileOrFolder(this.currentPath + "/" + this.currentFilePath);
                    if (this.currentFolder instanceof HTMLElement) {
                        yield this.updateNavFolders();
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
        });
    }
    handleRenameClick(event) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            event.stopPropagation();
            if (this.currentFile instanceof HTMLElement) {
                const originalTextElem = (_a = this.currentFile) === null || _a === void 0 ? void 0 : _a.querySelector(".fm_file_name");
                if (originalTextElem instanceof HTMLElement && originalTextElem.textContent) {
                    const inputElement = document.createElement('input');
                    inputElement.type = 'text';
                    inputElement.value = originalTextElem.textContent;
                    inputElement.classList.add("fm_file_name");
                    this.FileManagerStyles.fmAddClass(inputElement, "fm_file_name");
                    this.currentFile.replaceChild(inputElement, originalTextElem);
                    inputElement.focus();
                    let bufferThis = this;
                    inputElement.addEventListener('blur', function () {
                        return __awaiter(this, void 0, void 0, function* () {
                            const newTextElement = document.createElement('span');
                            newTextElement.textContent = inputElement.value;
                            newTextElement.classList.add("fm_file_name");
                            newTextElement.classList.add("fm_file_metadata");
                            bufferThis.FileManagerStyles.fmAddClass(newTextElement, "fm_file_name");
                            bufferThis.FileManagerStyles.fmAddClass(newTextElement, "fm_file_metadata");
                            if (bufferThis.currentFile instanceof HTMLElement) {
                                bufferThis.currentFile.replaceChild(newTextElement, inputElement);
                                if (originalTextElem.textContent === inputElement.value) {
                                    return;
                                }
                                try {
                                    if (bufferThis.currentPath === "/") {
                                        yield bufferThis.FileManagerServer.renameFileOrFolder(`/${bufferThis.currentFilePath}`, `/${newTextElement.textContent}`);
                                    }
                                    else {
                                        yield bufferThis.FileManagerServer.renameFileOrFolder(`${bufferThis.currentPath}/${bufferThis.currentFilePath}`, `${bufferThis.currentPath}/${newTextElement.textContent}`);
                                    }
                                    if (bufferThis.currentFolder instanceof HTMLElement) {
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
                    });
                }
            }
        });
    }
    handleDuplicateClick(event) {
        event.stopPropagation();
        if (this.currentFilePath !== '/') {
            if (this.currentPath === "/") {
                this.selectedFilePath = `/${this.currentFilePath}`;
            }
            else {
                this.selectedFilePath = `${this.currentPath}/${this.currentFilePath}`;
            }
            this.cutState = false;
            this.duplicateState = true;
            this.updateInsert();
        }
    }
    handleCutClick(event) {
        event.stopPropagation();
        if (this.currentFilePath !== '/') {
            if (this.currentPath === "/") {
                this.selectedFilePath = `/${this.currentFilePath}`;
            }
            else {
                this.selectedFilePath = `${this.currentPath}/${this.currentFilePath}`;
            }
            this.duplicateState = false;
            this.cutState = true;
            this.updateInsert();
        }
    }
    handleInsertClick(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.stopPropagation();
            if (this.selectedFilePath !== "/") {
                if (this.duplicateState) {
                    try {
                        let insert_element_paths = this.selectedFilePath.split('/');
                        let insert_element_name = insert_element_paths[insert_element_paths.length - 1];
                        if (this.currentPath === "/") {
                            yield this.FileManagerServer.duplicateFileOrFolder(`${this.selectedFilePath}`, `/${insert_element_name}`);
                        }
                        else {
                            yield this.FileManagerServer.duplicateFileOrFolder(`${this.selectedFilePath}`, `${this.currentPath}/${insert_element_name}`);
                        }
                        if (this.currentFolder instanceof HTMLElement) {
                            yield this.updateNavFolders();
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
                        let insert_element_paths = this.selectedFilePath.split('/');
                        let insert_element_name = insert_element_paths[insert_element_paths.length - 1];
                        if (this.currentPath.includes(this.selectedFilePath)) {
                            return;
                        }
                        if (this.currentPath === "/" && this.selectedFilePath === `/${insert_element_name}`) {
                            return;
                        }
                        if (this.selectedFilePath === `${this.currentPath}/${insert_element_name}`) {
                            return;
                        }
                        if (this.currentPath === "/") {
                            yield this.FileManagerServer.cutFileOrFolder(`${this.selectedFilePath}`, `/${insert_element_name}`);
                        }
                        else {
                            yield this.FileManagerServer.cutFileOrFolder(`${this.selectedFilePath}`, `${this.currentPath}/${insert_element_name}`);
                        }
                        yield this.FileManagerServer.removeFileOrFolder(`${this.selectedFilePath}`);
                        if (this.currentFolder instanceof HTMLElement) {
                            yield this.updateNavFolders();
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
        });
    }
    handleSettingsClick() {
        if (this.settingsPanel.style.display === "block") {
            this.settingsPanel.style.display = "none";
            this.mainPanel.style.display = "flex";
            this.toolsPanel.style.display = "flex";
            this.navigationPanel.style.display = "flex";
        }
        else {
            this.settingsPanel.style.display = "block";
            this.mainPanel.style.display = "none";
            this.toolsPanel.style.display = "none";
            this.navigationPanel.style.display = "none";
        }
    }
    handleFileClick(event) {
        if (event.target instanceof HTMLElement) {
            const file_block = event.target.closest(".fm_file_block");
            if (file_block instanceof HTMLDivElement) {
                if (this.currentFile) {
                    this.currentFile.classList.remove("fm_openedFile");
                    this.FileManagerStyles.fmRemoveClass(this.currentFile, "fm_openedFile");
                }
                this.FileManagerStyles.fmAddClass(file_block, "fm_openedFile");
                file_block.classList.add("fm_openedFile");
                this.currentFile = file_block;
                const file_name = file_block.querySelector(".fm_file_name");
                if (file_name instanceof HTMLElement && file_name.textContent) {
                    this.currentFilePath = file_name.textContent;
                }
                this.updateRemove();
                this.updateRename();
                this.updateDuplicate();
                this.updateCut();
            }
        }
    }
    getInternalFolders(folder_children, path) {
        return __awaiter(this, void 0, void 0, function* () {
            let folders;
            try {
                folders = yield this.FileManagerServer.getFolders(path);
            }
            catch (error) {
                throw error;
            }
            if (folders != null) {
                folders.forEach(folder => {
                    var _a, _b;
                    let newfolder = this.createHTMLNavFolder(folder, folder_children);
                    if (newfolder) {
                        (_a = newfolder[0]) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.handleOpenNavFolder.bind(this));
                        (_b = newfolder[1]) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.handleShowFileList.bind(this));
                    }
                });
            }
        });
    }
    getInternalFiles(path) {
        return __awaiter(this, void 0, void 0, function* () {
            let files;
            try {
                files = yield this.FileManagerServer.getFiles(path);
            }
            catch (error) {
                throw error;
            }
            if (files != null && this.files_listHTML) {
                this.files_listHTML.innerHTML = "";
                files.forEach(file => {
                    let file_block = this.createHTMLFileList(file);
                    if (file.isFolder) {
                        file_block.addEventListener("dblclick", this.handleOpenFileListFolder.bind(this));
                    }
                });
            }
        });
    }
    updateSettingsColorInputs() {
        for (let key in this.settingsColorInput) {
            this.settingsColorInput[key].value = this.FileManagerStyles.fileManagerMutableStyles.colors[key];
        }
    }
    initInterface() {
        // Creating filemanager_navigation
        let filemanager_super_root = document.createElement("div");
        this.FileManagerStyles.fmAddClass(filemanager_super_root, "fm_super_root");
        filemanager_super_root.classList.add("fm_super_root");
        let filemanager_navigationHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(filemanager_navigationHTML, "fm_filemanager_navigation");
        filemanager_navigationHTML.classList.add("fm_filemanager_navigation");
        this.FileManagerStyles.updatableElements["fm_filemanager_navigation"] = [filemanager_navigationHTML];
        let arrows_blockHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(arrows_blockHTML, "fm_arrows_block");
        arrows_blockHTML.classList.add("fm_arrows_block");
        this.FileManagerStyles.updatableElements["fm_arrows_block"] = [arrows_blockHTML];
        let current_pathHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(current_pathHTML, "fm_current_path");
        current_pathHTML.classList.add("fm_current_path");
        this.FileManagerStyles.updatableElements["fm_current_path"] = [current_pathHTML];
        let searchHTML = document.createElement("input");
        searchHTML.type = "text";
        searchHTML.placeholder = "Searching";
        this.FileManagerStyles.fmAddClass(searchHTML, "fm_search");
        searchHTML.classList.add("fm_search");
        this.FileManagerStyles.updatableElements["fm_search"] = [searchHTML];
        let arrow_backHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(arrow_backHTML, "fm_arrow_wrapper");
        this.FileManagerStyles.fmAddClass(arrow_backHTML, "fm_arrow_back");
        arrow_backHTML.classList.add("fm_arrow_wrapper");
        arrow_backHTML.classList.add("fm_arrow_back");
        arrow_backHTML.addEventListener('click', this.handleBackArrowClick.bind(this));
        let arrow_upHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(arrow_upHTML, "fm_arrow_wrapper");
        this.FileManagerStyles.fmAddClass(arrow_upHTML, "fm_arrow_up");
        this.FileManagerStyles.fmAddClass(arrow_upHTML, "fm_disabled");
        arrow_upHTML.classList.add("fm_arrow_wrapper");
        arrow_upHTML.classList.add("fm_arrow_up");
        arrow_upHTML.classList.add("fm_disabled");
        arrow_upHTML.style.pointerEvents = 'none';
        arrow_upHTML.addEventListener('click', this.handleUpArrowClick.bind(this));
        let arrow_refreshHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(arrow_refreshHTML, "fm_arrow_wrapper");
        this.FileManagerStyles.fmAddClass(arrow_refreshHTML, "fm_arrow_refresh");
        arrow_refreshHTML.classList.add("fm_arrow_wrapper");
        arrow_refreshHTML.classList.add("fm_arrow_refresh");
        arrow_refreshHTML.addEventListener('click', this.handleRefreshClick.bind(this));
        let arrow_backIMG = document.createElement("img");
        this.FileManagerStyles.fmAddClass(arrow_backIMG, "fm_filemanager_arrow");
        arrow_backIMG.classList.add("fm_filemanager_arrow");
        arrow_backIMG.src = "/icons/next-left.png";
        let arrow_upIMG = document.createElement("img");
        this.FileManagerStyles.fmAddClass(arrow_upIMG, "fm_filemanager_arrow");
        arrow_upIMG.classList.add("fm_filemanager_arrow");
        arrow_upIMG.src = "/icons/next-upper.png";
        let arrow_refreshIMG = document.createElement("img");
        this.FileManagerStyles.fmAddClass(arrow_refreshIMG, "fm_filemanager_arrow");
        arrow_refreshIMG.classList.add("fm_filemanager_arrow");
        arrow_refreshIMG.src = "/icons/refresh.png";
        arrow_backHTML.append(arrow_backIMG);
        arrow_upHTML.append(arrow_upIMG);
        arrow_refreshHTML.append(arrow_refreshIMG);
        arrows_blockHTML.append(arrow_backHTML);
        arrows_blockHTML.append(arrow_upHTML);
        arrows_blockHTML.append(arrow_refreshHTML);
        let path_folderHTML = document.createElement("span");
        this.FileManagerStyles.fmAddClass(path_folderHTML, "fm_path_folder");
        path_folderHTML.classList.add("fm_path_folder");
        this.FileManagerStyles.updatableElements["fm_path_folder"] = [path_folderHTML];
        path_folderHTML.textContent = this.rootFolderName;
        current_pathHTML.append(path_folderHTML);
        filemanager_navigationHTML.append(arrows_blockHTML);
        filemanager_navigationHTML.append(current_pathHTML);
        filemanager_navigationHTML.append(searchHTML);
        filemanager_super_root.append(filemanager_navigationHTML);
        let filemanager_mainHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(filemanager_mainHTML, "fm_filemanager_main");
        filemanager_mainHTML.classList.add("fm_filemanager_main");
        this.FileManagerStyles.updatableElements["fm_filemanager_main"] = [filemanager_mainHTML];
        // Creating filemanager_tools
        let filemanager_toolsHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(filemanager_toolsHTML, "fm_filemanager_tools");
        filemanager_toolsHTML.classList.add("fm_filemanager_tools");
        this.FileManagerStyles.updatableElements["fm_filemanager_tools"] = [filemanager_toolsHTML];
        filemanager_toolsHTML.style.position = "relative";
        let add_file_buttonHTML = document.createElement("button");
        add_file_buttonHTML.type = "button";
        this.FileManagerStyles.fmAddClass(add_file_buttonHTML, "fm_add_file_button");
        add_file_buttonHTML.classList.add("fm_add_file_button");
        this.FileManagerStyles.updatableElements["fm_add_file_button"] = [add_file_buttonHTML];
        add_file_buttonHTML.addEventListener("click", this.handleUploadClick.bind(this));
        let add_file_iconHTML = document.createElement("img");
        add_file_iconHTML.src = "icons/sticky-notes.png";
        this.FileManagerStyles.fmAddClass(add_file_iconHTML, "fm_add_file_icon");
        add_file_iconHTML.classList.add("fm_add_file_icon");
        add_file_buttonHTML.append(add_file_iconHTML);
        let add_file_spanHTML = document.createElement("span");
        add_file_spanHTML.textContent = "Upload";
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
        let upload_file_imgHTML = document.createElement("img");
        upload_file_imgHTML.src = "icons/add_file.png";
        this.FileManagerStyles.fmAddClass(upload_file_imgHTML, "fm_upload_files_func_icon");
        this.FileManagerStyles.fmAddClass(upload_file_imgHTML, "fm_upload_file");
        upload_file_imgHTML.classList.add("fm_upload_files_func_icon");
        upload_file_imgHTML.classList.add("fm_upload_file");
        upload_files_wrapperHTML1.append(upload_file_imgHTML);
        let upload_file_spanHTML = document.createElement("span");
        upload_file_spanHTML.textContent = "Upload file";
        this.FileManagerStyles.fmAddClass(upload_file_spanHTML, "fm_upload_files_func_name");
        upload_file_spanHTML.classList.add("fm_upload_files_func_name");
        this.FileManagerStyles.updatableElements["fm_upload_files_func_name"] = [upload_file_spanHTML];
        upload_files_wrapperHTML1.append(upload_file_spanHTML);
        let upload_file_inputHTML = document.createElement("input");
        this.FileManagerStyles.fmAddClass(upload_file_inputHTML, "fm_upload_file_func_input");
        upload_file_inputHTML.classList.add("fm_upload_file_func_input");
        upload_file_inputHTML.type = "file";
        // upload_file_inputHTML.name = "upload_file"
        // upload_file_inputHTML.id = "upload_file"
        upload_file_inputHTML.addEventListener("change", this.handleUploadingFile.bind(this));
        upload_files_wrapperHTML1.append(upload_file_inputHTML);
        let upload_files_wrapperHTML2 = document.createElement("div");
        this.FileManagerStyles.fmAddClass(upload_files_wrapperHTML2, "fm_upload_files_func_wrapper");
        upload_files_wrapperHTML2.classList.add("fm_upload_files_func_wrapper");
        let upload_file_imgHTML2 = document.createElement("img");
        upload_file_imgHTML2.src = "icons/add_folder.png";
        this.FileManagerStyles.fmAddClass(upload_file_imgHTML2, "fm_upload_files_func_icon");
        this.FileManagerStyles.fmAddClass(upload_file_imgHTML2, "fm_upload_folder");
        upload_file_imgHTML2.classList.add("fm_upload_files_func_icon");
        upload_file_imgHTML2.classList.add("fm_upload_folder");
        upload_files_wrapperHTML2.append(upload_file_imgHTML2);
        let upload_file_spanHTML2 = document.createElement("span");
        upload_file_spanHTML2.textContent = "Upload folder";
        this.FileManagerStyles.fmAddClass(upload_file_spanHTML2, "fm_upload_files_func_name");
        upload_file_spanHTML2.classList.add("fm_upload_files_func_name");
        upload_files_wrapperHTML2.append(upload_file_spanHTML2);
        this.FileManagerStyles.updatableElements["fm_upload_files_func_name"].push(upload_file_spanHTML2);
        let upload_file_inputHTML2 = document.createElement("input");
        this.FileManagerStyles.fmAddClass(upload_file_inputHTML2, "fm_upload_files_func_input");
        upload_file_inputHTML2.classList.add("fm_upload_files_func_input");
        upload_file_inputHTML2.type = "file";
        upload_file_inputHTML2.setAttribute("webkitdirectory", '');
        upload_file_inputHTML2.setAttribute("directory", '');
        upload_file_inputHTML2.setAttribute("multiple", '');
        upload_file_inputHTML2.addEventListener("change", this.handleUploadingFolder.bind(this));
        upload_files_wrapperHTML2.append(upload_file_inputHTML2);
        upload_files_blockHTML.append(upload_files_wrapperHTML1);
        upload_files_blockHTML.append(upload_files_wrapperHTML2);
        filemanager_toolsHTML.append(upload_files_blockHTML);
        let cutHTML = document.createElement("img");
        cutHTML.src = "icons/cut2.png";
        this.FileManagerStyles.fmAddClass(cutHTML, "fm_tool");
        this.FileManagerStyles.fmAddClass(cutHTML, "fm_cut");
        cutHTML.classList.add("fm_tool");
        cutHTML.classList.add("fm_cut");
        cutHTML.addEventListener("click", this.handleCutClick.bind(this));
        let duplicateHTML = document.createElement("img");
        duplicateHTML.src = "icons/duplicate.png";
        this.FileManagerStyles.fmAddClass(duplicateHTML, "fm_tool");
        this.FileManagerStyles.fmAddClass(duplicateHTML, "fm_duplicate");
        duplicateHTML.classList.add("fm_tool");
        duplicateHTML.classList.add("fm_duplicate");
        duplicateHTML.addEventListener('click', this.handleDuplicateClick.bind(this));
        let insertHTML = document.createElement("img");
        insertHTML.src = "icons/insert.png";
        this.FileManagerStyles.fmAddClass(insertHTML, "fm_tool");
        this.FileManagerStyles.fmAddClass(insertHTML, "fm_insert");
        insertHTML.classList.add("fm_tool");
        insertHTML.classList.add("fm_insert");
        insertHTML.addEventListener('click', this.handleInsertClick.bind(this));
        let renameHTML = document.createElement("img");
        renameHTML.src = "icons/rename.png";
        this.FileManagerStyles.fmAddClass(renameHTML, "fm_tool");
        this.FileManagerStyles.fmAddClass(renameHTML, "fm_rename");
        renameHTML.classList.add("fm_tool");
        renameHTML.classList.add("fm_rename");
        renameHTML.addEventListener("click", this.handleRenameClick.bind(this));
        let removeHTML = document.createElement("img");
        removeHTML.src = "icons/remove.png";
        this.FileManagerStyles.fmAddClass(removeHTML, "fm_tool");
        this.FileManagerStyles.fmAddClass(removeHTML, "fm_remove");
        removeHTML.classList.add("fm_tool");
        removeHTML.classList.add("fm_remove");
        removeHTML.addEventListener("click", this.handleRemoveClick.bind(this));
        let grid_wrapperHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(grid_wrapperHTML, "fm_grid_wrapper");
        grid_wrapperHTML.classList.add("fm_grid_wrapper");
        let tableHTML = document.createElement("img");
        tableHTML.src = "icons/table.png";
        this.FileManagerStyles.fmAddClass(tableHTML, "fm_tool");
        this.FileManagerStyles.fmAddClass(tableHTML, "fm_table");
        tableHTML.classList.add("fm_tool");
        tableHTML.classList.add("fm_table");
        let gridHTML = document.createElement("img");
        gridHTML.src = "icons/grid.png";
        this.FileManagerStyles.fmAddClass(gridHTML, "fm_tool");
        this.FileManagerStyles.fmAddClass(gridHTML, "fm_grid");
        gridHTML.classList.add("fm_tool");
        gridHTML.classList.add("fm_grid");
        grid_wrapperHTML.append(tableHTML);
        grid_wrapperHTML.append(gridHTML);
        let settingsHTML = document.createElement("img");
        settingsHTML.src = "icons/gear.png";
        this.FileManagerStyles.fmAddClass(settingsHTML, "fm_tool");
        this.FileManagerStyles.fmAddClass(settingsHTML, "fm_settings");
        settingsHTML.classList.add("fm_tool");
        settingsHTML.classList.add("fm_settings");
        settingsHTML.addEventListener("click", this.handleSettingsClick.bind(this));
        filemanager_toolsHTML.append(add_file_buttonHTML);
        filemanager_toolsHTML.append(cutHTML);
        filemanager_toolsHTML.append(duplicateHTML);
        filemanager_toolsHTML.append(insertHTML);
        filemanager_toolsHTML.append(renameHTML);
        filemanager_toolsHTML.append(removeHTML);
        filemanager_toolsHTML.append(grid_wrapperHTML);
        filemanager_toolsHTML.append(settingsHTML);
        filemanager_super_root.append(filemanager_toolsHTML);
        // Creating folders_nav
        let folders_navHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(folders_navHTML, "fm_folders_nav");
        folders_navHTML.classList.add("fm_folders_nav");
        this.FileManagerStyles.updatableElements["fm_folders_nav"] = [folders_navHTML];
        let rootfolder = this.createHTMLNavFolder({ name: this.rootFolderName }, folders_navHTML, true);
        if (rootfolder) {
            let rootfolder_icon_wrapper = rootfolder[0];
            let rootfolder_parent = rootfolder[1];
            let rootfolder_wrapper = rootfolder[2];
            if (rootfolder_wrapper) {
                this.FileManagerStyles.fmAddClass(rootfolder_wrapper, "fm_folder_root_wrapper");
                rootfolder_wrapper.classList.add("fm_folder_root_wrapper");
            }
            rootfolder_icon_wrapper === null || rootfolder_icon_wrapper === void 0 ? void 0 : rootfolder_icon_wrapper.addEventListener("click", this.handleOpenNavFolder.bind(this));
            rootfolder_parent === null || rootfolder_parent === void 0 ? void 0 : rootfolder_parent.addEventListener("click", this.handleShowFileList.bind(this));
        }
        filemanager_mainHTML.append(folders_navHTML);
        // Creating files_panel
        let files_panelHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(files_panelHTML, "fm_files_panel");
        files_panelHTML.classList.add("fm_files_panel");
        this.FileManagerStyles.updatableElements["fm_files_panel"] = [files_panelHTML];
        let metadata_blockHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(metadata_blockHTML, "fm_metadata_block");
        metadata_blockHTML.classList.add("fm_metadata_block");
        this.FileManagerStyles.updatableElements["fm_metadata_block"] = [metadata_blockHTML];
        this.files_listHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(this.files_listHTML, "fm_files_list");
        this.files_listHTML.classList.add("fm_files_list");
        let metadata_nameHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(metadata_nameHTML, "fm_metadata_name");
        this.FileManagerStyles.fmAddClass(metadata_nameHTML, "fm_metadata");
        metadata_nameHTML.classList.add("fm_metadata_name");
        metadata_nameHTML.classList.add("fm_metadata");
        metadata_nameHTML.textContent = "Name";
        let metadata_changedateHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(metadata_changedateHTML, "fm_metadata_changedate");
        this.FileManagerStyles.fmAddClass(metadata_changedateHTML, "fm_metadata");
        metadata_changedateHTML.classList.add("fm_metadata_changedate");
        metadata_changedateHTML.classList.add("fm_metadata");
        metadata_changedateHTML.textContent = "Date of change";
        let metadata_typeHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(metadata_typeHTML, "fm_metadata_type");
        this.FileManagerStyles.fmAddClass(metadata_typeHTML, "fm_metadata");
        metadata_typeHTML.classList.add("fm_metadata_type");
        metadata_typeHTML.classList.add("fm_metadata");
        metadata_typeHTML.textContent = "Type";
        let metadata_sizeHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(metadata_sizeHTML, "fm_metadata_size");
        this.FileManagerStyles.fmAddClass(metadata_sizeHTML, "fm_metadata");
        metadata_sizeHTML.classList.add("fm_metadata_size");
        metadata_sizeHTML.classList.add("fm_metadata");
        metadata_sizeHTML.textContent = "Size";
        metadata_blockHTML.append(metadata_nameHTML);
        metadata_blockHTML.append(metadata_changedateHTML);
        metadata_blockHTML.append(metadata_typeHTML);
        metadata_blockHTML.append(metadata_sizeHTML);
        files_panelHTML.append(metadata_blockHTML);
        files_panelHTML.append(this.files_listHTML);
        filemanager_mainHTML.append(files_panelHTML);
        filemanager_super_root.append(filemanager_mainHTML);
        // Creating settings panel
        let settings_panelHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(settings_panelHTML, "fm_settings_panel");
        settings_panelHTML.classList.add("fm_settings_panel");
        this.FileManagerStyles.updatableElements["fm_settings_panel"] = [settings_panelHTML];
        settings_panelHTML.style.display = "none";
        let title_blockHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(title_blockHTML, "fm_title_block");
        title_blockHTML.classList.add("fm_title_block");
        this.FileManagerStyles.updatableElements["fm_title_block"] = [title_blockHTML];
        title_blockHTML.textContent = "Settings";
        let leave_settings_arrowHTML = document.createElement("img");
        this.FileManagerStyles.fmAddClass(leave_settings_arrowHTML, "fm_leave_settings_arrow");
        this.FileManagerStyles.fmAddClass(leave_settings_arrowHTML, "fm_tool");
        leave_settings_arrowHTML.classList.add("fm_leave_settings_arrow");
        leave_settings_arrowHTML.classList.add("fm_tool");
        leave_settings_arrowHTML.style.margin = "0px";
        leave_settings_arrowHTML.src = "icons/next-left.png";
        leave_settings_arrowHTML.addEventListener("click", this.handleSettingsClick.bind(this));
        title_blockHTML.append(leave_settings_arrowHTML);
        let settingsFormHTML = document.createElement("form");
        this.FileManagerStyles.fmAddClass(settingsFormHTML, "fm_settings_form");
        settingsFormHTML.classList.add("fm_settings_form");
        settingsFormHTML.name = "fm_settings_form";
        settingsFormHTML.addEventListener("submit", this.handleSubmitSettings.bind(this));
        let params_panelHTML = document.createElement("div");
        this.FileManagerStyles.fmAddClass(params_panelHTML, "fm_params_panel");
        params_panelHTML.classList.add("fm_params_panel");
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
        hover_color_labelHTML.innerHTML = "Hover color:<br>";
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
        background_color_labelHTML.innerHTML = "Background color:<br>";
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
        border_color_labelHTML.innerHTML = "Border color:<br>";
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
        select_color_labelHTML.innerHTML = "Select color:<br>";
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
        text_color_labelHTML.innerHTML = "Text color:<br>";
        text_color_labelHTML.append(text_colorHTML);
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
        reset_settings_buttonHTML.textContent = "To default";
        reset_settings_buttonHTML.type = "button";
        reset_settings_buttonHTML.addEventListener("click", this.handleResetSettings.bind(this));
        let submit_settings_buttonHTML = document.createElement("button");
        this.FileManagerStyles.fmAddClass(submit_settings_buttonHTML, "fm_submit_settings_button");
        submit_settings_buttonHTML.classList.add("fm_submit_settings_button");
        submit_settings_buttonHTML.textContent = "Submit";
        submit_settings_buttonHTML.type = "submit";
        params_panelHTML.append(hover_color_labelHTML);
        params_panelHTML.append(background_color_labelHTML);
        params_panelHTML.append(border_color_labelHTML);
        params_panelHTML.append(select_color_labelHTML);
        params_panelHTML.append(text_color_labelHTML);
        buttons_panelHTML.append(message_submitHTML);
        buttons_panelHTML.append(reset_settings_buttonHTML);
        buttons_panelHTML.append(submit_settings_buttonHTML);
        settingsFormHTML.append(params_panelHTML);
        settingsFormHTML.append(buttons_panelHTML);
        settings_panelHTML.append(title_blockHTML);
        settings_panelHTML.append(settingsFormHTML);
        filemanager_super_root.append(settings_panelHTML);
        this.root.append(filemanager_super_root);
        return filemanager_super_root;
    }
}
