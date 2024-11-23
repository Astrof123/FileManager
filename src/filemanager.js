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
        this.rootFolderName = rootFolderName;
        this.FileManagerServer = FileManagerServer;
        if (!(root instanceof HTMLElement)) {
            throw new SyntaxError("An empty or invalid variable type was passed.");
        }
        this.root = root;
        this.initInterface();
    }
    createHTMLFileList(file) {
        var _a;
        let file_blockHTML = document.createElement("div");
        file_blockHTML.classList.add("file_block");
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
                file_typeHTML.textContent = "File";
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
        file_sizeHTML.textContent = file.isFolder ? "" : file.size;
        file_blockHTML.append(file_iconHTML);
        file_blockHTML.append(file_nameHTML);
        file_blockHTML.append(file_changedateHTML);
        file_blockHTML.append(file_typeHTML);
        file_blockHTML.append(file_sizeHTML);
        (_a = this.files_listHTML) === null || _a === void 0 ? void 0 : _a.append(file_blockHTML);
        return file_blockHTML;
    }
    createHTMLNavFolder(folder, root) {
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
        folder_wrapperHTML.append(folderHTML);
        folder_wrapperHTML.append(folder_childrenHTML);
        root.append(folder_wrapperHTML);
        return [folder_open_icon_wrapperHTML, folderHTML];
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
                            let path = this.getPath(folder_wrapper, folder_name === null || folder_name === void 0 ? void 0 : folder_name.textContent);
                            yield this.getInternalFolders(folder_children, path);
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
    handleOpenNavFolderClick(event) {
        event.stopPropagation();
        if (event.target != null && event.target instanceof HTMLElement) {
            let targetElem = event.target;
            let folder_parent = targetElem.closest('.folder_parent');
            if (folder_parent != null && folder_parent instanceof HTMLElement) {
                this.openCloseFolder(folder_parent, 'nav');
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
    }
    getPath(wrapper, folderName) {
        var _a, _b;
        if (wrapper == null) {
            throw new Error('The hierarchy of elements was violated');
        }
        let buff_div = wrapper;
        let path;
        if (folderName != null) {
            if (buff_div.classList.contains("folder_root_wrapper")) {
                path = "/";
            }
            else {
                path = "/" + folderName;
                buff_div = (_a = buff_div.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                if (buff_div == null) {
                    throw new Error('The hierarchy of elements was violated');
                }
                while (!buff_div.classList.contains("folder_root_wrapper")) {
                    let buff_span = buff_div.querySelector(".folder_name");
                    path = `/${buff_span === null || buff_span === void 0 ? void 0 : buff_span.textContent}${path}`;
                    buff_div = (_b = buff_div.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
                    if (buff_div == null) {
                        throw new Error('The hierarchy of elements was violated');
                    }
                }
            }
            return path;
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
    }
    handleShowFileListClick(event) {
        var _a;
        event.stopPropagation();
        if (event.target != null && event.target instanceof HTMLElement) {
            let targetElem = event.target;
            let folder_wrapper = targetElem.closest('.folder_wrapper');
            let folder_parent = targetElem.closest('.folder_parent');
            let folder_name = folder_parent === null || folder_parent === void 0 ? void 0 : folder_parent.querySelector(".folder_name");
            if (folder_wrapper != null && folder_parent != null && folder_name != null && folder_parent instanceof HTMLElement && folder_name.textContent) {
                let path = this.getPath(folder_wrapper, folder_name.textContent);
                if (folder_parent !== this.currentFolder) {
                    (_a = this.currentFolder) === null || _a === void 0 ? void 0 : _a.classList.remove("folder_parent__opened");
                    folder_parent === null || folder_parent === void 0 ? void 0 : folder_parent.classList.add("folder_parent__opened");
                    this.currentFolder = folder_parent;
                }
                this.getInternalFiles(path);
            }
            else {
                throw new Error('The hierarchy of elements was violated');
            }
        }
        else {
            throw new Error('The hierarchy of elements was violated');
        }
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
                        let path = this.getPath(newCurrentFolderWrapper, file_name === null || file_name === void 0 ? void 0 : file_name.textContent);
                        (_d = this.currentFolder) === null || _d === void 0 ? void 0 : _d.classList.remove("folder_parent__opened");
                        newCurrentFolder.classList.add("folder_parent__opened");
                        this.currentFolder = newCurrentFolder;
                        if (this.files_listHTML != null) {
                            this.files_listHTML.innerHTML = "";
                            this.getInternalFiles(path);
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
    getInternalFolders(folder_children, path) {
        return __awaiter(this, void 0, void 0, function* () {
            let folders = yield this.FileManagerServer.getFolders(path);
            if (folders != null) {
                folders.forEach(folder => {
                    var _a, _b;
                    let newfolder = this.createHTMLNavFolder(folder, folder_children);
                    if (newfolder) {
                        (_a = newfolder[0]) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.handleOpenNavFolderClick.bind(this));
                        (_b = newfolder[1]) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.handleShowFileListClick.bind(this));
                    }
                });
            }
        });
    }
    getInternalFiles(path) {
        return __awaiter(this, void 0, void 0, function* () {
            let files = yield this.FileManagerServer.getFiles(path);
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
        let filemanager_mainHTML = document.createElement("div");
        filemanager_mainHTML.classList.add("filemanager_main");
        // Creating folders_nav
        let folders_navHTML = document.createElement("div");
        folders_navHTML.classList.add("folders_nav");
        let rootfolder = this.createHTMLNavFolder({ name: this.rootFolderName }, folders_navHTML);
        if (rootfolder) {
            let rootfolder_icon_wrapper = rootfolder[0];
            let rootfolder_parent = rootfolder[1];
            let rootfolder_wrapper = rootfolder_parent.closest(".folder_wrapper");
            if (rootfolder_wrapper) {
                rootfolder_wrapper.classList.add("folder_root_wrapper");
            }
            rootfolder_icon_wrapper === null || rootfolder_icon_wrapper === void 0 ? void 0 : rootfolder_icon_wrapper.addEventListener("click", this.handleOpenNavFolderClick.bind(this));
            rootfolder_parent === null || rootfolder_parent === void 0 ? void 0 : rootfolder_parent.addEventListener("click", this.handleShowFileListClick.bind(this));
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