# Get Started Guide

This guide will help you get started with the `vanilla-filemanager` JavaScript library.

You can find the complete code for connecting, configuring the library, and the server-side part [here](https://github.com/Astrof123/FileManagerServer).

## What is File Manager?

File Manager is a JavaScript library that provides a widget for working with files and folders. It allows users to browse, upload, delete, rename, and perform other basic file operations directly in a web interface.

## Prerequisites

*   Basic knowledge of JavaScript, HTML, and CSS.
*   Installed Node.js and npm (or yarn) for dependency management (if you are using a module bundler).
*   A backend capable of handling HTTP requests for file operations (read, write, delete, etc.).
*   Any module bundler, if you don't want to use a CDN.

## Step 1: Install and Import the Library

You can install the File Manager library in several ways:

Method 1: Using CDN (Content Delivery Network)

The easiest way to get started is to use a CDN. Add the following `<script>` tag to your HTML file:
```html
<script src="https://unpkg.com/vanilla-filemanager"></script>
```


Method 2: Installing with npm (or yarn)

If you are using a module bundler, install the library via npm:

```shell
npm install vanilla-filemanager
```

Import the library into your JavaScript file:

```JavaScript
import { FileManager, FileManagerServer } from 'vanilla-filemanager';
```

## Step 2: Creating a Server Class

The File Manager library interacts with a server to perform file operations. You need to create a class that extends FileManagerServer and implements methods for interacting with your backend. Example:

```JavaScript
import { FileManager, FileManagerServer } from 'https://unpkg.com/vanilla-filemanager';

class MyFileManagerServer extends FileManagerServer {
    async getFolders(path) {
        const url = '/get-folders';
    
        const body = JSON.stringify({ path: path });

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });
    
        try {
            if (!res.ok) { 
                throw new Error(`Ошибка сервера: ${res.status}`);
            }
    
            const data = await res.json();
            return data.folders;
    
        } catch (error) {
            const errorText = await res.text();
            throw new Error(`HTTP Error: ${res.status} - ${res.statusText}, Body: ${errorText}`);
        }
    }

    async getFiles(path) {
        const url = '/get-files';
    
        const body = JSON.stringify({ path: path });
    
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });
        try {
            if (!res.ok) { 
                throw new Error(`Ошибка сервера: ${res.status}`);
            }
    
            const data = await res.json();
    

            return data.files;
    
        } catch (error) {
            const errorText = await res.text();
            throw new Error(`HTTP Error: ${res.status} - ${res.statusText}, Body: ${errorText}`);
        }
    }

    async uploadFile(file, path) {
        const formData = new FormData();

        formData.append('path', path);
        formData.append('files', file);

        const response = await fetch('/upload', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            console.log("Всё ок!");

            return true;
        } 
        else {
            const errorText = await res.text();
            throw new Error(`HTTP Error: ${res.status} - ${res.statusText}, Body: ${errorText}`);
        }
    }

    ...
}
```

Explanation of the methods:

*   `getFolders(path)`: Gets a list of folders in the specified path.
*   `getFiles(path)`: Gets a list of files in the specified path.
*   `uploadFile(file, path)`: Uploads a single file to the specified path.
*   `uploadFolder(files, path)`: Uploads multiple files to the specified path (for folder uploads).
*   `removeFileOrFolder(path)`: Deletes a file or folder at the specified path.
*   `renameFileOrFolder(oldPath, newPath)`: Renames a file or folder.
*   `copyFileOrFolder(oldPath, newPath)`: Copies a file or folder.
*   `downloadFiles(paths)`: Downloads files as an archive.
*   `searchFiles(searchString, path)`: Performs a file search.
*   `createEmptyFile(path)`: Creates an empty file.
*   `createEmptyFolder(path)`: Creates an empty folder.

Important:

*   Specify the correct URLs (`/get-folders`, `/get-files`, `/upload`, etc.) for your server-side handlers.
*   Implement error handling and data return logic according to your backend.
*   Ensure that your backend handles requests securely to prevent unauthorized access to files.


## Step 3: Creating a File Manager Instance and Initialization

1.  HTML Container: Add an HTML element that will serve as a container for the File Manager widget.


```HTML
<div class="somediv"></div>
```

2. Initialization: In your JavaScript code, create an instance of MyFileManagerServer and then FileManager, passing the container, the server instance, and options:

```JavaScript
import { FileManager, FileManagerServer } from 'https://unpkg.com/vanilla-filemanager';

// Your MyFileManagerServer class (see step 2)

function main() {
    const icons = {
        addFile: "/icons/add_file.png",
        addFolder: "/icons/add_folder.png",
        arrowDownFolder: "/icons/arrow-point-to-down.png",
        arrowRightFolders: "/icons/arrow-point-to-right.png",
        arrowRightNavigation: "/icons/arrow-right.png",
        cut: "/icons/cut.png",
        copy: "/icons/copy.png",
        folder: "/icons/folder2.png",
        settings: "/icons/gear.png",
        grid: "/icons/grid.png",
        insert: "/icons/insert.png",
        arrowBack: "/icons/next-left.png",
        arrowUp: "/icons/next-upper.png",
        refresh: "/icons/refresh.png",
        picture: "/icons/picture.png",
        remove: "/icons/remove.png",
        rename: "/icons/rename.png",
        addFilesButton: "/icons/sticky-notes.png",
        list: "/icons/list.png",
        textfile: "/icons/textfile.png",
        openedFolder: "/icons/open-folder.png",
        download: "/icons/download.png",
        createFile: "/icons/create-file.png",
        createFolder: "/icons/create-folder.png",
        css: "/icons/css.png",
        doc: "/icons/doc.png",
        docx: "/icons/docx.png",
        exe: "/icons/exe.png",
        html: "/icons/html.png",
        mp4: "/icons/mp4.png",
        pdf: "/icons/pdf.png",
        php: "/icons/php.png",
        ppt: "/icons/ppt.png",
        pptx: "/icons/pptx.png",
        py: "/icons/python-file.png",
        svg: "/icons/svg.png",
        wav: "/icons/wav.png",
        xls: "/icons/xls.png",
        xlsx: "/icons/xlsx.png",
        zipFolder: "/icons/zip-folder.png"
    }

    const customStyles = {
        "fm_folders_nav": {
            border: "3px solid red"
        }
    }

    const customLanguages = {
        es: {
            "Upload": "Subir",
            "Searching": "Buscando",
            "Upload file": "Subir archivo",
            "Upload folder": "Subir carpeta",
            "Settings": "Configuración",
            "Hover color": "Color al pasar el ratón",
            "Background color": "Color de fondo",
            "Border color": "Color del borde",
            "Select color": "Seleccionar color",
            "Text color": "Color del texto",
            "Address Pane interface": "Interfaz del panel de dirección",
            "Tools Pane interface": "Interfaz del panel de herramientas",
            "Navigation Pane interface": "Interfaz del panel de navegación",
            "Content Pane interface": "Interfaz del panel de contenido",
            "Settings Pane interface": "Interfaz del panel de configuración:",
            "medium": "mediano",
            "xsmall": "extra pequeño",
            "small": "pequeño",
            "large": "grande",
            "xlarge": "extra grande",
            "To default": "Por defecto",
            "Submit": "Enviar",
            "Success": "Éxito",
            "Refresh": "Actualizar",
            "Up": "Arriba",
            "Back": "Atrás",
            "This folder is empty.": "Esta carpeta está vacía.",
            "Cut file/folder": "Cortar archivo/carpeta",
            "Copy file/folder": "Copiar archivo/carpeta",
            "Paste file/folder": "Pegar archivo/carpeta",
            "Rename file/folder": "Renombrar archivo/carpeta",
            "Remove file/folder": "Eliminar archivo/carpeta",
            "Download file/folder": "Descargar archivo/carpeta",
            "Create empty file": "Crear archivo vacío",
            "Create empty folder": "Crear carpeta vacía",
            "Name": "Nombre",
            "Date of change": "Fecha de modificación",
            "Type": "Tipo",
            "Size": "Tamaño",
            "Byte": "Byte",
            "Folder": "Carpeta",
            "file": "archivo",
            "Change file display to list": "Cambiar visualización de archivos a lista",
            "Change file display to tiles": "Cambiar visualización de archivos a mosaicos",
            "MB": "MB",
            "KB": "KB",
            "Image": "Imagen",
            "Are you sure you want to reset?": "¿Estás seguro de que quieres restablecer?",
            "Are you sure you want to delete?": "¿Estás seguro de que quieres eliminar?",
            "Are you sure you want to download?": "¿Estás seguro de que quieres descargar?"
        }
    }

    const options = {
        rootFolderName: "Root",
        icons: icons,
        language: "ru",
        addressPaneOptions: {
            addressPaneEnabled: true,
            searchingEnabled: true,
            refreshButtonEnabled: true,
            upButtonEnabled: true,
            backButtonEnabled: true,
        },
        toolsPaneOptions: {
            toolsPaneEnabled: true,
            uploadingFilesEnabled: true,
            toolsEnabled: {
                deletingFiles: true,
                renamingFiles: true,
                downloadingFiles: true,
                movingFiles: true,
                createFiles: true,
            },
            defaultFileDisplayMode: "list",
            fileDisplayModesEnabled: true,
            settingsOptions: {
                settingsEnabled: true,
                colorSettingsEnabled: true,
                sizeSettingsEnabled: true,
            },
        },
        navigationPaneEnabled: true,
    }


    const filemanagerRoot = document.querySelector(".somediv");
        
    const myFileManagerServer = new MyFileManagerServer();
    const filemanager = new FileManager(filemanagerRoot, myFileManagerServer, options, customStyles, customLanguages);

}

main();

```

## Step 4: Configuring the Backend

You will need to create a backend that handles requests from the File Manager. The backend should:

*  Provide an API to get a list of folders and files in the specified path.
*  Handle file uploads.
*  Implement deletion, renaming, and copying of files/folders.
*  Provide the ability to download files as an archive.
*  Perform file searches.
*  Create empty files and folders.


## Step 5: Customizing Appearance and Behavior (Optional)

You can customize the File Manager by passing an options object to the FileManager constructor:

*  `rootFolderName`: The name of the root folder.
*  `icons`: An object with paths to custom icons.
*  `language`: The interface language (e.g., "ru", "en").
*  `addressPaneOptions`: Address bar settings (enable/disable, search, buttons).
*  `toolsPaneOptions`: Toolbar settings (enable/disable, file upload, tools).
*  `navigationPaneEnabled`: Enable/disable the navigation panel.
*  `customStyles`: Styles for overriding the default library styles.
*  `customLanguages`: Object with translations for different languages.


```JavaScript

const options = {
    rootFolderName: "Root",
    icons: icons,
    language: "ru",
    addressPaneOptions: {
        addressPaneEnabled: true,
        searchingEnabled: true,
        refreshButtonEnabled: true,
        upButtonEnabled: true,
        backButtonEnabled: true,
    },
    toolsPaneOptions: {
        toolsPaneEnabled: true,
        uploadingFilesEnabled: true,
        toolsEnabled: {
            deletingFiles: true,
            renamingFiles: true,
            downloadingFiles: true,
            movingFiles: true,
            createFiles: true,
        },
        defaultFileDisplayMode: "list",
        fileDisplayModesEnabled: true,
        settingsOptions: {
            settingsEnabled: true,
            colorSettingsEnabled: true,
            sizeSettingsEnabled: true,
        },
    },
    navigationPaneEnabled: true,
}

```

You can find the complete code for connecting, configuring the library, and the server-side part [here](https://github.com/Astrof123/FileManagerServer)