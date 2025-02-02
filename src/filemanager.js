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
export class FileManagerServer {
}
export class FileManager {
    constructor(root, FileManagerServer, rootFolderName = 'Root') {
        this.image_extension = ['png', 'jpg', 'jpeg', 'webp'];
        this.lastFolders = [];
        this.currentPath = '/';
        this.currentFilePath = '/';
        this.selectedFilePath = '/';
        this.duplicateState = false;
        this.cutState = false;
        this.openFolders = [];
        this.toolsState = {
            remove: false,
            cut: false,
            duplicate: false,
            insert: false,
            rename: false
        };
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
        this.root.addEventListener("click", this.handleFilemanagerClick.bind(this));
        this.initInterface();
        let bufferChecker = this.root.querySelector(".upload_files_block");
        if (bufferChecker instanceof HTMLElement) {
            this.uploadFilesPanel = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        bufferChecker = this.root.querySelector(".current_path");
        if (bufferChecker instanceof HTMLElement) {
            this.currentPathElem = bufferChecker;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        const back_arrow = this.root.querySelector(".arrow_back");
        const up_arrow = this.root.querySelector(".arrow_up");
        if (back_arrow instanceof HTMLElement && up_arrow instanceof HTMLElement) {
            this.arrowsElements = {
                back_arrow: back_arrow,
                up_arrow: up_arrow,
            };
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
        const remove_elem = this.root.querySelector(".remove");
        const cut_elem = this.root.querySelector(".cut");
        const duplicate_elem = this.root.querySelector(".duplicate");
        const insert_elem = this.root.querySelector(".insert");
        const rename_elem = this.root.querySelector(".rename");
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
        bufferChecker = document.querySelector(".folder_root_wrapper");
        let root_parent = bufferChecker === null || bufferChecker === void 0 ? void 0 : bufferChecker.querySelector(".folder_parent");
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
        file_blockHTML.classList.add("file_block");
        file_blockHTML.addEventListener("click", this.handleFileClick.bind(this));
        let file_iconHTML = document.createElement("img");
        file_iconHTML.classList.add("file_icon");
        let file_typeHTML = document.createElement("span");
        file_typeHTML.classList.add("file_type");
        file_typeHTML.classList.add("file_metadata");
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
        file_nameHTML.classList.add("file_name");
        file_nameHTML.classList.add("file_metadata");
        file_nameHTML.textContent = file.name;
        let file_changedateHTML = document.createElement("span");
        file_changedateHTML.classList.add("file_changedate");
        file_changedateHTML.classList.add("file_metadata");
        file_changedateHTML.textContent = file.changedate;
        let file_sizeHTML = document.createElement("span");
        file_sizeHTML.classList.add("file_size");
        file_sizeHTML.classList.add("file_metadata");
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
        folder_wrapperHTML.classList.add("folder_wrapper");
        let folder_childrenHTML = document.createElement("div");
        folder_childrenHTML.classList.add("folder_children");
        let folderHTML = document.createElement("div");
        folderHTML.classList.add("folder_parent");
        let folder_open_icon_wrapperHTML = document.createElement("div");
        folder_open_icon_wrapperHTML.classList.add("folder_open_icon_wrapper");
        let folder_open_iconHTML = document.createElement("img");
        folder_open_iconHTML.classList.add("folder_open_icon");
        folder_open_iconHTML.src = "icons/arrow-point-to-right.png";
        let folder_iconHTML = document.createElement("img");
        folder_iconHTML.classList.add("folder_icon");
        folder_iconHTML.src = "icons/folder.png";
        let folder_nameHTML = document.createElement("span");
        folder_nameHTML.classList.add("folder_name");
        folder_nameHTML.textContent = folder.name;
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
            let folder_open_icon = folder_parent === null || folder_parent === void 0 ? void 0 : folder_parent.querySelector('.folder_open_icon');
            let folder_wrapper = folder_parent.closest('.folder_wrapper');
            let folder_children = folder_wrapper === null || folder_wrapper === void 0 ? void 0 : folder_wrapper.querySelector('.folder_children');
            let folder_name = folder_parent.querySelector('.folder_name');
            if (folder_wrapper != null && folder_name != null && folder_open_icon != null && folder_open_icon instanceof HTMLImageElement && folder_children != null && folder_children != undefined) {
                let children = folder_children.children;
                if ((folder_parent === null || folder_parent === void 0 ? void 0 : folder_parent.classList.contains('opened')) && from !== "filelist") {
                    folder_parent.classList.remove('opened');
                    folder_open_icon.src = "icons/arrow-point-to-right.png";
                    for (const child of children) {
                        if (child instanceof HTMLElement) {
                            child.style.display = "none";
                        }
                    }
                }
                else if (!(folder_parent === null || folder_parent === void 0 ? void 0 : folder_parent.classList.contains('opened'))) {
                    folder_parent === null || folder_parent === void 0 ? void 0 : folder_parent.classList.add('opened');
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
                let folder_parent = targetElem.closest('.folder_parent');
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
                (_a = this.currentFolder) === null || _a === void 0 ? void 0 : _a.classList.remove("folder_parent__opened");
                if (!back) {
                    this.lastFolders.push(this.currentFolder);
                }
            }
            folder_parent === null || folder_parent === void 0 ? void 0 : folder_parent.classList.add("folder_parent__opened");
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
            this.arrowsElements.back_arrow.classList.remove("disabled");
            this.arrowsElements.back_arrow.style.pointerEvents = 'auto';
        }
        else if (this.lastFolders.length === 0 && this.arrowsState.back_arrow) {
            this.arrowsState.back_arrow = false;
            this.arrowsElements.back_arrow.classList.add("disabled");
            this.arrowsElements.back_arrow.style.pointerEvents = 'none';
        }
    }
    updateUpArrow(path) {
        if (path !== "/" && !this.arrowsState.up_arrow) {
            this.arrowsState.up_arrow = true;
            this.arrowsElements.up_arrow.classList.remove("disabled");
            this.arrowsElements.up_arrow.style.pointerEvents = 'auto';
        }
        else if (path === "/" && this.arrowsState.up_arrow) {
            this.arrowsState.up_arrow = false;
            this.arrowsElements.up_arrow.classList.add("disabled");
            this.arrowsElements.up_arrow.style.pointerEvents = 'none';
        }
    }
    updateCurrentPath(path) {
        this.currentPathElem.innerHTML = "";
        let path_elements = path.split("/");
        let root_path = document.createElement("span");
        root_path.classList.add("path_folder");
        root_path.textContent = this.rootFolderName;
        this.currentPathElem.append(root_path);
        if (path_elements[1] !== '') {
            for (let i = 1; i < path_elements.length; i++) {
                let path_img = document.createElement("img");
                path_img.classList.add("path_arrow");
                path_img.src = "icons/arrow-right.png";
                let path_folder = document.createElement("span");
                path_folder.classList.add("path_folder");
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
            let folder_parent = folder_wrapper === null || folder_wrapper === void 0 ? void 0 : folder_wrapper.querySelector('.folder_parent');
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
        this.uploadFilesPanel.classList.toggle("hidden");
    }
    updateFileList(targetElement_1) {
        return __awaiter(this, arguments, void 0, function* (targetElement, back = false) {
            let folder_wrapper = targetElement.closest('.folder_wrapper');
            if (folder_wrapper) {
                let folder_parent = folder_wrapper === null || folder_wrapper === void 0 ? void 0 : folder_wrapper.querySelector('.folder_parent');
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
            let input_file = document.getElementById('upload_file');
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
                let check_wrapper = this.root.querySelector(`[path="${this.openFolders[i]}"]`);
                let open_folder = check_wrapper === null || check_wrapper === void 0 ? void 0 : check_wrapper.querySelector(".folder_parent");
                if (open_folder instanceof HTMLElement) {
                    yield this.openCloseFolder(open_folder);
                }
            }
            this.openFolders = [];
        });
    }
    searchOpenFoldersStart() {
        let folder_root_wrapper = this.root.querySelector(".folder_root_wrapper");
        let folder_children_element = folder_root_wrapper === null || folder_root_wrapper === void 0 ? void 0 : folder_root_wrapper.querySelector(".folder_children");
        let folder_children = folder_children_element === null || folder_children_element === void 0 ? void 0 : folder_children_element.children;
        if (folder_children) {
            for (let i = 0; i < folder_children.length; i++) {
                this.searchOpenFoldersRecursion(folder_children[i]);
            }
        }
    }
    searchOpenFoldersRecursion(folder_wrapper) {
        let folder_children_element = folder_wrapper === null || folder_wrapper === void 0 ? void 0 : folder_wrapper.querySelector(".folder_children");
        let folder_children = folder_children_element === null || folder_children_element === void 0 ? void 0 : folder_children_element.children;
        let folder_parent = folder_wrapper === null || folder_wrapper === void 0 ? void 0 : folder_wrapper.querySelector(".folder_parent");
        if (folder_parent && folder_parent.classList.contains("opened") && folder_wrapper instanceof HTMLElement) {
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
            let folder_root_wrapper = this.root.querySelector(".folder_root_wrapper");
            let folder_root_parent = folder_root_wrapper === null || folder_root_wrapper === void 0 ? void 0 : folder_root_wrapper.querySelector(".folder_parent");
            let folder_root_childen_element = folder_root_wrapper === null || folder_root_wrapper === void 0 ? void 0 : folder_root_wrapper.querySelector(".folder_children");
            let folder_open_icon = folder_root_parent === null || folder_root_parent === void 0 ? void 0 : folder_root_parent.querySelector('.folder_open_icon');
            if (folder_root_parent instanceof HTMLElement && folder_root_childen_element && folder_open_icon instanceof HTMLImageElement) {
                let buffer_currentPath = this.currentPath;
                this.searchOpenFoldersStart();
                folder_root_childen_element.innerHTML = "";
                if (folder_root_parent === null || folder_root_parent === void 0 ? void 0 : folder_root_parent.classList.contains('opened')) {
                    folder_root_parent.classList.remove('opened');
                    folder_open_icon.src = "icons/arrow-point-to-right.png";
                }
                else if (!(folder_root_parent === null || folder_root_parent === void 0 ? void 0 : folder_root_parent.classList.contains('opened'))) {
                    folder_root_parent === null || folder_root_parent === void 0 ? void 0 : folder_root_parent.classList.add('opened');
                    folder_open_icon.src = "icons/arrow-point-to-down.png";
                }
                yield this.openCloseFolder(folder_root_parent, 'nav');
                yield this.openPreviousFolders();
                this.currentPath = buffer_currentPath;
                let bufferCurrentFolder = this.root.querySelector(`[path="${this.currentPath}"]`);
                if (bufferCurrentFolder instanceof HTMLElement) {
                    this.currentFolder = bufferCurrentFolder;
                }
                else {
                    this.currentPath = "/";
                    let bufferCurrentFolder = this.root.querySelector(`[path="${this.currentPath}"]`);
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
            let input_folder = document.getElementById('upload_folder');
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
                let file_block = targetElem.closest('.file_block');
                let file_name = file_block === null || file_block === void 0 ? void 0 : file_block.querySelector('.file_name');
                let currentWrapper = (_a = this.currentFolder) === null || _a === void 0 ? void 0 : _a.parentElement;
                let currentChildren = (_b = currentWrapper === null || currentWrapper === void 0 ? void 0 : currentWrapper.querySelector('.folder_children')) === null || _b === void 0 ? void 0 : _b.children;
                if (file_block != null && file_name != null && currentWrapper != null && (file_name === null || file_name === void 0 ? void 0 : file_name.textContent) && currentChildren != null) {
                    let newCurrentFolder;
                    let newCurrentFolderWrapper;
                    for (let wrapper of currentChildren) {
                        if (((_c = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelector(".folder_name")) === null || _c === void 0 ? void 0 : _c.textContent) === (file_name === null || file_name === void 0 ? void 0 : file_name.textContent)) {
                            newCurrentFolder = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelector(".folder_parent");
                            newCurrentFolderWrapper = wrapper;
                            break;
                        }
                    }
                    if (newCurrentFolder && newCurrentFolder instanceof HTMLElement && newCurrentFolderWrapper != null && newCurrentFolderWrapper instanceof HTMLElement) {
                        let path = newCurrentFolderWrapper.getAttribute("path");
                        if (path) {
                            this.currentPath = path;
                            (_d = this.currentFolder) === null || _d === void 0 ? void 0 : _d.classList.remove("folder_parent__opened");
                            newCurrentFolder.classList.add("folder_parent__opened");
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
            this.toolsElements.remove.classList.remove("disabled");
            this.toolsElements.remove.style.pointerEvents = 'auto';
        }
        else {
            this.toolsState.remove = false;
            this.toolsElements.remove.classList.add("disabled");
            this.toolsElements.remove.style.pointerEvents = 'none';
        }
    }
    updateRename() {
        if (this.currentFile !== null && this.currentFilePath !== "/") {
            this.toolsState.rename = true;
            this.toolsElements.rename.classList.remove("disabled");
            this.toolsElements.rename.style.pointerEvents = 'auto';
        }
        else {
            this.toolsState.rename = false;
            this.toolsElements.rename.classList.add("disabled");
            this.toolsElements.rename.style.pointerEvents = 'none';
        }
    }
    updateDuplicate() {
        if (this.currentFile !== null && this.currentFilePath !== "/") {
            this.toolsState.duplicate = true;
            this.toolsElements.duplicate.classList.remove("disabled");
            this.toolsElements.duplicate.style.pointerEvents = 'auto';
        }
        else {
            this.toolsState.duplicate = false;
            this.toolsElements.duplicate.classList.add("disabled");
            this.toolsElements.duplicate.style.pointerEvents = 'none';
        }
        this.updateInsert();
    }
    updateCut() {
        if (this.currentFile !== null && this.currentFilePath !== "/") {
            this.toolsState.cut = true;
            this.toolsElements.cut.classList.remove("disabled");
            this.toolsElements.cut.style.pointerEvents = 'auto';
        }
        else {
            this.toolsState.cut = false;
            this.toolsElements.cut.classList.add("disabled");
            this.toolsElements.cut.style.pointerEvents = 'none';
        }
        this.updateInsert();
    }
    updateInsert() {
        if (this.selectedFilePath !== '/') {
            this.toolsState.insert = true;
            this.toolsElements.insert.classList.remove("disabled");
            this.toolsElements.insert.style.pointerEvents = 'auto';
        }
        else {
            this.toolsState.insert = false;
            this.toolsElements.insert.classList.add("disabled");
            this.toolsElements.insert.style.pointerEvents = 'none';
        }
    }
    clearCurrentFile() {
        if (this.currentFile) {
            this.currentFile.classList.remove("openedFile");
        }
        this.currentFile = null;
        this.currentFilePath = '/';
        this.updateRemove();
        this.updateRename();
        this.updateDuplicate();
        this.updateCut();
    }
    handleFilemanagerClick(event) {
        if (event.target instanceof HTMLElement && !event.target.closest(".file_block")) {
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
                const originalTextElem = (_a = this.currentFile) === null || _a === void 0 ? void 0 : _a.querySelector(".file_name");
                if (originalTextElem instanceof HTMLElement && originalTextElem.textContent) {
                    const inputElement = document.createElement('input');
                    inputElement.type = 'text';
                    inputElement.value = originalTextElem.textContent;
                    inputElement.classList.add("file_name");
                    this.currentFile.replaceChild(inputElement, originalTextElem);
                    inputElement.focus();
                    let bufferThis = this;
                    inputElement.addEventListener('blur', function () {
                        return __awaiter(this, void 0, void 0, function* () {
                            const newTextElement = document.createElement('span');
                            newTextElement.textContent = inputElement.value;
                            newTextElement.classList.add("file_name");
                            newTextElement.classList.add("file_metadata");
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
    handleFileClick(event) {
        if (event.target instanceof HTMLElement) {
            const file_block = event.target.closest(".file_block");
            if (file_block instanceof HTMLDivElement) {
                if (this.currentFile) {
                    this.currentFile.classList.remove("openedFile");
                }
                file_block.classList.add("openedFile");
                this.currentFile = file_block;
                const file_name = file_block.querySelector(".file_name");
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
    initInterface() {
        // Creating filemanager_navigation
        let filemanager_navigationHTML = document.createElement("div");
        filemanager_navigationHTML.classList.add("filemanager_navigation");
        let arrows_blockHTML = document.createElement("div");
        arrows_blockHTML.classList.add("arrows_block");
        let current_pathHTML = document.createElement("div");
        current_pathHTML.classList.add("current_path");
        let searchHTML = document.createElement("input");
        searchHTML.type = "text";
        searchHTML.placeholder = "Searching";
        searchHTML.classList.add("search");
        let arrow_backHTML = document.createElement("div");
        arrow_backHTML.classList.add("arrow_wrapper");
        arrow_backHTML.classList.add("arrow_back");
        arrow_backHTML.addEventListener('click', this.handleBackArrowClick.bind(this));
        let arrow_upHTML = document.createElement("div");
        arrow_upHTML.classList.add("arrow_wrapper");
        arrow_upHTML.classList.add("arrow_up");
        arrow_upHTML.classList.add("disabled");
        arrow_upHTML.style.pointerEvents = 'none';
        arrow_upHTML.addEventListener('click', this.handleUpArrowClick.bind(this));
        let arrow_refreshHTML = document.createElement("div");
        arrow_refreshHTML.classList.add("arrow_wrapper");
        arrow_refreshHTML.classList.add("arrow_refresh");
        arrow_refreshHTML.addEventListener('click', this.handleRefreshClick.bind(this));
        let arrow_backIMG = document.createElement("img");
        arrow_backIMG.classList.add("filemanager_arrow");
        arrow_backIMG.src = "/icons/next-left.png";
        let arrow_upIMG = document.createElement("img");
        arrow_upIMG.classList.add("filemanager_arrow");
        arrow_upIMG.src = "/icons/next-upper.png";
        let arrow_refreshIMG = document.createElement("img");
        arrow_refreshIMG.classList.add("filemanager_arrow");
        arrow_refreshIMG.src = "/icons/refresh.png";
        arrow_backHTML.append(arrow_backIMG);
        arrow_upHTML.append(arrow_upIMG);
        arrow_refreshHTML.append(arrow_refreshIMG);
        arrows_blockHTML.append(arrow_backHTML);
        arrows_blockHTML.append(arrow_upHTML);
        arrows_blockHTML.append(arrow_refreshHTML);
        let path_folderHTML = document.createElement("span");
        path_folderHTML.classList.add("path_folder");
        path_folderHTML.textContent = this.rootFolderName;
        current_pathHTML.append(path_folderHTML);
        filemanager_navigationHTML.append(arrows_blockHTML);
        filemanager_navigationHTML.append(current_pathHTML);
        filemanager_navigationHTML.append(searchHTML);
        this.root.append(filemanager_navigationHTML);
        let filemanager_mainHTML = document.createElement("div");
        filemanager_mainHTML.classList.add("filemanager_main");
        // Creating filemanager_tools
        let filemanager_toolsHTML = document.createElement("div");
        filemanager_toolsHTML.classList.add("filemanager_tools");
        filemanager_toolsHTML.style.position = "relative";
        let add_file_buttonHTML = document.createElement("button");
        add_file_buttonHTML.type = "button";
        add_file_buttonHTML.classList.add("add_file_button");
        add_file_buttonHTML.addEventListener("click", this.handleUploadClick.bind(this));
        let add_file_iconHTML = document.createElement("img");
        add_file_iconHTML.src = "icons/sticky-notes.png";
        add_file_iconHTML.classList.add("add_file_icon");
        add_file_buttonHTML.append(add_file_iconHTML);
        let add_file_spanHTML = document.createElement("span");
        add_file_spanHTML.textContent = "Upload";
        add_file_buttonHTML.append(add_file_spanHTML);
        let upload_files_blockHTML = document.createElement("div");
        upload_files_blockHTML.classList.add("upload_files_block");
        upload_files_blockHTML.classList.add("hidden");
        let upload_files_wrapperHTML1 = document.createElement("div");
        upload_files_wrapperHTML1.classList.add("upload_files_func_wrapper");
        let upload_file_imgHTML = document.createElement("img");
        upload_file_imgHTML.src = "icons/add_file.png";
        upload_file_imgHTML.classList.add("upload_files_func_icon");
        upload_file_imgHTML.classList.add("upload_file");
        upload_files_wrapperHTML1.append(upload_file_imgHTML);
        let upload_file_spanHTML = document.createElement("span");
        upload_file_spanHTML.textContent = "Upload file";
        upload_file_spanHTML.classList.add("upload_files_func_name");
        upload_files_wrapperHTML1.append(upload_file_spanHTML);
        let upload_file_inputHTML = document.createElement("input");
        upload_file_inputHTML.classList.add("upload_files_func_input");
        upload_file_inputHTML.type = "file";
        upload_file_inputHTML.name = "upload_file";
        upload_file_inputHTML.id = "upload_file";
        upload_file_inputHTML.addEventListener("change", this.handleUploadingFile.bind(this));
        upload_files_wrapperHTML1.append(upload_file_inputHTML);
        let upload_files_wrapperHTML2 = document.createElement("div");
        upload_files_wrapperHTML2.classList.add("upload_files_func_wrapper");
        let upload_file_imgHTML2 = document.createElement("img");
        upload_file_imgHTML2.src = "icons/add_folder.png";
        upload_file_imgHTML2.classList.add("upload_files_func_icon");
        upload_file_imgHTML2.classList.add("upload_folder");
        upload_files_wrapperHTML2.append(upload_file_imgHTML2);
        let upload_file_spanHTML2 = document.createElement("span");
        upload_file_spanHTML2.textContent = "Upload folder";
        upload_file_spanHTML2.classList.add("upload_files_func_name");
        upload_files_wrapperHTML2.append(upload_file_spanHTML2);
        let upload_file_inputHTML2 = document.createElement("input");
        upload_file_inputHTML2.classList.add("upload_files_func_input");
        upload_file_inputHTML2.type = "file";
        upload_file_inputHTML2.name = "upload_folder";
        upload_file_inputHTML2.id = "upload_folder";
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
        cutHTML.classList.add("tool");
        cutHTML.classList.add("cut");
        cutHTML.addEventListener("click", this.handleCutClick.bind(this));
        let duplicateHTML = document.createElement("img");
        duplicateHTML.src = "icons/duplicate.png";
        duplicateHTML.classList.add("tool");
        duplicateHTML.classList.add("duplicate");
        duplicateHTML.addEventListener('click', this.handleDuplicateClick.bind(this));
        let insertHTML = document.createElement("img");
        insertHTML.src = "icons/insert.png";
        insertHTML.classList.add("tool");
        insertHTML.classList.add("insert");
        insertHTML.addEventListener('click', this.handleInsertClick.bind(this));
        let renameHTML = document.createElement("img");
        renameHTML.src = "icons/rename.png";
        renameHTML.classList.add("tool");
        renameHTML.classList.add("rename");
        renameHTML.addEventListener("click", this.handleRenameClick.bind(this));
        let removeHTML = document.createElement("img");
        removeHTML.src = "icons/remove.png";
        removeHTML.classList.add("tool");
        removeHTML.classList.add("remove");
        removeHTML.addEventListener("click", this.handleRemoveClick.bind(this));
        let grid_wrapperHTML = document.createElement("div");
        grid_wrapperHTML.classList.add("grid_wrapper");
        let tableHTML = document.createElement("img");
        tableHTML.src = "icons/table.png";
        tableHTML.classList.add("tool");
        tableHTML.classList.add("table");
        let gridHTML = document.createElement("img");
        gridHTML.src = "icons/grid.png";
        gridHTML.classList.add("tool");
        gridHTML.classList.add("grid");
        grid_wrapperHTML.append(tableHTML);
        grid_wrapperHTML.append(gridHTML);
        filemanager_toolsHTML.append(add_file_buttonHTML);
        filemanager_toolsHTML.append(cutHTML);
        filemanager_toolsHTML.append(duplicateHTML);
        filemanager_toolsHTML.append(insertHTML);
        filemanager_toolsHTML.append(renameHTML);
        filemanager_toolsHTML.append(removeHTML);
        filemanager_toolsHTML.append(grid_wrapperHTML);
        this.root.append(filemanager_toolsHTML);
        // Creating folders_nav
        let folders_navHTML = document.createElement("div");
        folders_navHTML.classList.add("folders_nav");
        let rootfolder = this.createHTMLNavFolder({ name: this.rootFolderName }, folders_navHTML, true);
        if (rootfolder) {
            let rootfolder_icon_wrapper = rootfolder[0];
            let rootfolder_parent = rootfolder[1];
            let rootfolder_wrapper = rootfolder[2];
            if (rootfolder_wrapper) {
                rootfolder_wrapper.classList.add("folder_root_wrapper");
            }
            rootfolder_icon_wrapper === null || rootfolder_icon_wrapper === void 0 ? void 0 : rootfolder_icon_wrapper.addEventListener("click", this.handleOpenNavFolder.bind(this));
            rootfolder_parent === null || rootfolder_parent === void 0 ? void 0 : rootfolder_parent.addEventListener("click", this.handleShowFileList.bind(this));
        }
        filemanager_mainHTML.append(folders_navHTML);
        // Creating files_panel
        let files_panelHTML = document.createElement("div");
        files_panelHTML.classList.add("files_panel");
        let metadata_blockHTML = document.createElement("div");
        metadata_blockHTML.classList.add("metadata_block");
        this.files_listHTML = document.createElement("div");
        this.files_listHTML.classList.add("files_list");
        let metadata_nameHTML = document.createElement("div");
        metadata_nameHTML.classList.add("metadata_name");
        metadata_nameHTML.classList.add("metadata");
        metadata_nameHTML.textContent = "Name";
        let metadata_changedateHTML = document.createElement("div");
        metadata_changedateHTML.classList.add("metadata_changedate");
        metadata_changedateHTML.classList.add("metadata");
        metadata_changedateHTML.textContent = "Date of change";
        let metadata_typeHTML = document.createElement("div");
        metadata_typeHTML.classList.add("metadata_type");
        metadata_typeHTML.classList.add("metadata");
        metadata_typeHTML.textContent = "Type";
        let metadata_sizeHTML = document.createElement("div");
        metadata_sizeHTML.classList.add("metadata_size");
        metadata_sizeHTML.classList.add("metadata");
        metadata_sizeHTML.textContent = "Size";
        metadata_blockHTML.append(metadata_nameHTML);
        metadata_blockHTML.append(metadata_changedateHTML);
        metadata_blockHTML.append(metadata_typeHTML);
        metadata_blockHTML.append(metadata_sizeHTML);
        files_panelHTML.append(metadata_blockHTML);
        files_panelHTML.append(this.files_listHTML);
        filemanager_mainHTML.append(files_panelHTML);
        this.root.append(filemanager_mainHTML);
    }
}
