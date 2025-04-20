export interface IfileManagerStyles {
    [index: string]: {
        [index: string]: string
    }
}


export class FileManagerStyles {
    public headerStyleElement: HTMLElement;
    public updatableElements: {
        [index: string]: [HTMLElement]
    }= {}

    public fileManagerMutableStyles: IfileManagerStyles = {
        "colors": {
            hover: "#3e3e3e",
            border: "#2B2B2B",
            main_background: "#252526",
            selected: "#4a4a4a",
            text_color: "#ffffff"
        },
        "sizing": {
            tools: "medium",
            address: "medium",
            navigation_pane: "medium",
            content_pane: "medium",
            settings_panel: "medium" 
        }
    };

    public fileManagerHeaderStyles: IfileManagerStyles = {};
    public customStyles: IfileManagerStyles|null;
    public fileManagerStyles: IfileManagerStyles = {};
    
    constructor(customStyles: IfileManagerStyles|null = null) {
        this.customStyles = customStyles;
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
        document.head.prepend(this.headerStyleElement);
    }

    public updateFileManagerStyles() {
        this.fileManagerStyles = {
            "fm_super_root": {
                "box-sizing": 'border-box',
                fontFamily: "inherit",
                width: '100%',
                height: "100%",
                "min-height": "300px",
                "min-width": "300px",
                display: "flex",
                "flex-direction": "column",
                "border-radius": "4px",
                padding: "8px 16px",
                "background-color": this.fileManagerMutableStyles.colors.main_background
            },
            "fm_folders_nav": {
                width: '220px',
                border: this.settingSizing([3], "navigation_pane") + ` solid ${this.fileManagerMutableStyles.colors.border}`,
                "border-radius": '4px',
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                color: '#e3e3e3',
                overflowX: 'scroll',
                height: '100%',
                scrollbarWidth: 'thin',
                scrollbarColor: `#888 ${this.fileManagerMutableStyles.colors.border}`,
                display: "flex",
                "box-sizing": "border-box",
                resize: "horizontal",
            },
            "fm_folder_icon": {
                width: this.settingSizing([22], "navigation_pane"),
                marginRight: this.settingSizing([8], "navigation_pane"),
            },
            "fm_folder_name": {
                fontSize: this.settingSizing([14], "navigation_pane"),
                color: this.fileManagerMutableStyles.colors.text_color,
                "text-overflow": "ellipsis",
                "width": "90%",
                "white-space": "nowrap",
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
                "overflow": "hidden",
                
            },
            "fm_folder_open_icon_wrapper": {
                paddingLeft: this.settingSizing([4], "navigation_pane"),
                paddingRight: this.settingSizing([8], "navigation_pane"),
            },
            "fm_folder_parent__opened": {
                "background-color": this.fileManagerMutableStyles.colors.selected,
            },
            "fm_openedFile": {
                "background-color": this.fileManagerMutableStyles.colors.selected,
            },
            "fm_folder_open_icon": {
                width: this.settingSizing([10], "navigation_pane"),
            },
            "fm_folder_wrapper": {
                position: 'relative',
                left: this.settingSizing([24], "navigation_pane"),
                userSelect: 'none',
                "box-sizing": "border-box",
                "min-width": '100%',
                display: "table"
            },
            "fm_folder_root_wrapper": {
                position: 'static',
            },
            "fm_content_pane": {
                border: this.settingSizing([3], "content_pane") + ` solid ${this.fileManagerMutableStyles.colors.border}`,
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                color: '#e3e3e3',
                "width": "100%",
                "border-radius": '4px',
                overflowY: 'auto',
                height: '100%',
            },
            "fm_filemanager_main": {
                display: 'flex',
                flexDirection: 'row',
                gap: '8px',
                // padding: '16px',
                paddingTop: '8px',
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                // height: "85%",
                "flex-grow": "1",
                "box-sizing": "border-box",
                "overflow": "hidden"

            },
            "fm_metadata_block": {
                flexDirection: 'row',
                borderBottom: this.settingSizing([3], "content_pane") + ` solid ${this.fileManagerMutableStyles.colors.border}`,
                padding: this.settingSizing([8], "content_pane"),
                fontSize: this.settingSizing([12], "content_pane"),
                paddingLeft: this.settingSizing([12], "content_pane"),
            },
            "fm_metadata": {
                userSelect: 'none',
                color: this.fileManagerMutableStyles.colors.text_color
            },
            "fm_metadata_name": {
               width: '37%',
            },
            "fm_metadata_changedate": {
              width: '34%',
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
                "flex-grow": "1"
            },
            "fm_file_metadata": {
                // overflow: 'hidden',
                userSelect: 'none',
                color: this.fileManagerMutableStyles.colors.text_color,
                "margin-right": '2%',
                "font-size": this.settingSizing([16], "content_pane"),
                "white-space": "nowrap",
                "text-overflow": "ellipsis",
                "overflow": "hidden"
            },
            "fm_file_block": {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottom: this.settingSizing([2], "content_pane") + ` solid ${this.fileManagerMutableStyles.colors.border}`,
                padding: this.settingSizing([8, 0], "content_pane"),
                paddingLeft: this.settingSizing([12], "content_pane"),
                cursor: 'pointer',
            },
            "fm_file_icon": {
                width: this.settingSizing([22], "content_pane"),
                marginRight: '2%',
                userSelect: 'none',
            },
            "fm_file_name": {
                width: '31%',
                overflow: 'hidden',
                "box-sizing": "border-box",
                "white-space": "nowrap",
            },
            "fm_filemanager_tools": {
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                // "border-left": 'none',
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                "box-sizing": 'border-box',
                "padding": "2px 0px",
                // "flex-wrap": "wrap"
            },
            "fm_tools_wrapper": {
                "display": "flex",
                "flex-wrap": "wrap"
            },
            "fm_filemanager_address": {
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                "border-bottom": "0px",
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                "border-radius": '4px 4px 0px 0px',
                padding: '8px 16px',
                display: 'flex',
                flexDirection: 'row',
            },
            "fm_filemanager_arrow": {
                width: this.settingSizing([16], "address"),
                display: 'block',
                userSelect: 'none',
            },
            "fm_arrows_block": {
                border: this.settingSizing([3], 'address') + ` solid ${this.fileManagerMutableStyles.colors.border}`,
                display: 'flex',
                "border-radius": '4px',
            },
            "fm_arrow_wrapper": {
                padding: this.settingSizing([8, 12], "address"),
                "border-radius": '4px',
                cursor: 'pointer',
            },
            "fm_add_file_button": {
                color: this.fileManagerMutableStyles.colors.text_color,
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                border: this.settingSizing([3], 'tools') + ` solid ${this.fileManagerMutableStyles.colors.border}`,
                borderTop: 'none',
                borderBottom: 'none',
                borderLeft: 'none',
                padding: this.settingSizing([8, 12], 'tools'),
                display: 'flex',
                alignItems: 'center',
                gap: this.settingSizing([8], 'tools'),
                cursor: 'pointer',
                fontSize: this.settingSizing([13], 'tools'),
                fontWeight: '500',
                height: '100%',
                "user-select": "none"
            },
            "fm_add_file_icon": {
                width: this.settingSizing([24], 'tools'),
            },
            "fm_tool": {
                width: this.settingSizing([35], 'tools'),
                height: this.settingSizing([35], 'tools'),
                padding: this.settingSizing([8], 'tools'),
                margin: this.settingSizing([0, 8], 'tools'),
                cursor: 'pointer',
                display: 'block',
                userSelect: 'none',
                "box-sizing": 'border-box'
            },
            "fm_current_path": {
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                "border-radius": '4px',
                width: '100%',
                "flex-grow": "100",
                marginLeft: '16px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                marginRight: '8px',
                "overflow-x": "scroll",
                "white-space": "nowrap",
            },
            "fm_path_arrow": {
                width: '12px',
                "user-select": "none"
            },
            "fm_path_folder": {
                color: this.fileManagerMutableStyles.colors.text_color,
                userSelect: 'none',
                "font-size": this.settingSizing([16], "address"),
            },
            "fm_search": {
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                "border-radius": '4px',
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                padding: '0px 8px',
                color: '#ffff',
                width: '20%',
                "font-size": this.settingSizing([14], "address"),
                "user-select": "none"
            },
            "fm_search_mobile": {
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                "border-radius": '4px',
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                padding: '0px 8px',
                color: '#ffff',
                width: '100%',
                "margin-left": "16px",
                "font-size": this.settingSizing([14], "address"),
                "user-select": "none"
            },
            "fm_grid_wrapper": {
                display: 'flex',
                // width: '',
                "flex-grow": "1",
                justifyContent: 'flex-end',
            },
            "fm_disabled": {
                opacity: '0.5',
            },
            "fm_upload_files_block": {
                display: 'flex',
                flexDirection: 'column',
                "background-color": this.fileManagerMutableStyles.colors.hover,
                width: this.settingSizing([191], "tools"),
                border: this.settingSizing([3], "tools") + ` solid ${this.fileManagerMutableStyles.colors.border}`,
                borderTop: 'none',
                position: 'absolute',
                bottom: this.settingSizing([-84], "tools"),
                zIndex: '10',
                cursor: 'pointer',
                "box-sizing": 'border-box',
            },
            "fm_upload_files_func_wrapper": {
                display: 'flex',
                flexDirection: 'row',
                padding: this.settingSizing([8], "tools"),
                gap: this.settingSizing([8], "tools"),
                alignItems: 'center',
                width: '100%',
                userSelect: 'none',
                "box-sizing": 'border-box',
                position: 'relative',
            },
            "fm_upload_files_func_icon": {
                width: this.settingSizing([24], "tools"),
            },
            "fm_upload_files_func_name": {
                color: this.fileManagerMutableStyles.colors.text_color,
                fontSize: this.settingSizing([13], "tools"),
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
            "fm_leave_settings_arrow": {
                width: this.settingSizing([35], "settings_panel"),
                height: this.settingSizing([35], "settings_panel"),
                padding: "8px",
                cursor: 'pointer',
                display: 'block',
                userSelect: 'none',
                "box-sizing": 'border-box'
            },
            "fm_params_panel": {
                display: "flex",
                "flex-direction": "row",
                padding: this.settingSizing([16, 8], "settings_panel"),
                "flex-wrap": "wrap",
                gap: this.settingSizing([12], "settings_panel"),
                overflow: "auto",
                "margin-bottom": this.settingSizing([12], "settings_panel")
            },
            "fm_color_label": {
                color: this.fileManagerMutableStyles.colors.text_color,
                display: "flex",
                gap: this.settingSizing([8], "settings_panel"),
                "flex-direction": "column",
                padding: this.settingSizing([16], "settings_panel"),
                border: this.settingSizing([3], "settings_panel") + ` solid ${this.fileManagerMutableStyles.colors.border}`,
                "border-radius": '8px',
                "font-size": this.settingSizing([16], "settings_panel")
            },
            "fm_color_input": {
                width: this.settingSizing([40], "settings_panel"),
                height: this.settingSizing([40], "settings_panel"),
                "box-shadow": "0px 4px 8px 0px rgba(171, 171, 171, 0.2)",
                padding: "0px",
                margin: "0px",
                border: "none",
                cursor: "pointer",
                "border-radius": "4px",
            },
            "fm_title_block": {
                color: this.fileManagerMutableStyles.colors.text_color,
                "font-size": this.settingSizing([20], "settings_panel"),
                "font-weight": "600",
                display: "flex",
                "flex-direction": "column-reverse",
                gap: this.settingSizing([16], "settings_panel"),
                "margin-left": "12px",
            },
            "fm_buttons_panel": {
                display: "flex",
                "justify-content": "flex-end",
                gap: "16px",
                "align-items": "center"
            },
            "fm_submit_settings_button": {
                padding: this.settingSizing([12], "settings_panel"),
                "background-color": "#a7d649",
                border: "none",
                "border-radius": "8px",
                "font-weight": "600",
                "cursor": "pointer",
                "font-size": this.settingSizing([14], "settings_panel"),
            },
            "fm_settings_form": {
                height: "85%",
                display: "flex",
                "flex-direction": "column",
                "justify-content": "space-between",
                "box-sizing": "border-box",
            },
            "fm_reset_settings_button": {
                padding: this.settingSizing([12], "settings_panel"),
                "background-color": "#a9b09b",
                border: "none",
                "border-radius": "8px",
                "font-weight": "600",
                "cursor": "pointer",
                "font-size": this.settingSizing([14], "settings_panel"),
            },
            "fm_message_submit": {
                color: "#a7d649"
            },
            "fm_files_tiles": {
                "flex-wrap": "wrap",
                "flex-direction": "row",
                "row-gap": this.settingSizing([8], "content_pane"),
                "column-gap": "1%",
                padding: this.settingSizing([12], "content_pane"),
                "box-sizing": "border-box",
                "height": "100%",
                "align-content": "flex-start",
            },
            "fm_selected": {
                "background-color": this.fileManagerMutableStyles.colors.selected,
                "border-radius": "4px"
            },
            "fm_file_block_tiles": {
                width: this.settingSizing([90], "content_pane"),
                display: 'flex',
                "flex-direction": 'column',
                "align-items": 'center',
                "justify-content": "space-beetwen",
                gap: this.settingSizing([8], "content_pane"),
                border: this.settingSizing([3], "content_pane") + ` solid ${this.fileManagerMutableStyles.colors.border}`,
                padding: this.settingSizing([6], "content_pane"),
                cursor: 'pointer',
                "box-sizing": "border-box",
                "border-radius": "6px",
                "overflow": "hidden",
                height: this.settingSizing([104], "content_pane"),
                // "justify-content": "center",

            },
            "fm_file_name_tiles": {
                // width: '80px',
                "box-sizing": "border-box",
                "font-size": this.settingSizing([13], "content_pane"),
                "text-align": "center",
                "overflow": "hidden",
                "word-break": "break-all",
                "display": "flex",
                "text-overflow": "ellipsis",
                "font-weight": "500",
                "user-select": "none",
                color: this.fileManagerMutableStyles.colors.text_color,
            },
            "fm_file_icon_tiles": {
                "max-width": this.settingSizing([62], "content_pane"),
                "max-height": this.settingSizing([41], "content_pane"),
                "user-select": 'none',
            },
            "fm_loader": {
                width: "48px",
                height: "48px",
                // border: "5px solid #fff",
                "border-radius": "50%",
                display: "inline-block",
                "box-sizing": "border-box",
                "border-top": "4px solid #FFF",
                "border-right": "4px solid transparent",
            },
            "fm_loader_wrapper": {
                display: "flex",
                width: "100%",
                height: "100%",
                "align-items": "center",
                "justify-content": "center",
            },
            "fm_select_input": {
                width: this.settingSizing([75], "settings_panel"),
                height: this.settingSizing([22], "settings_panel"),
                "border-radius": "4px",
                "font-size": this.settingSizing([12], "settings_panel")
            },
            "fm_file_name_wrapper": {
                "max-height": '100%',
                "box-sizing": 'border-box',
                "overflow": "hidden",
            },
            "fm_empty_message": {
                "font-size": this.settingSizing([16], "content_pane"),
                "color": this.fileManagerMutableStyles.colors.text_color,
                "width": "100%",
                "text-align": "center",
                display: "block",
                "margin-top": this.settingSizing([12], "content_pane"),
                "user-select": "none"
            }
        }

        if (this.customStyles != null) {
            for (let selector in this.customStyles) {
                if (selector in this.fileManagerStyles) {
                    for (let style in this.customStyles[selector]) {
                        this.fileManagerStyles[selector][style] = this.customStyles[selector][style];
                    }
                }
            }
        }
    }

    public updateFileManagerHeaderStyles() {
        this.fileManagerHeaderStyles = {
            "fm_folder_parent:hover": {
                "background-color": this.fileManagerMutableStyles.colors.hover,
            },
            'fm_folders_nav::-webkit-scrollbar': {
                width: this.settingSizing([10], "navigation_pane"),
            },
            'fm_content_pane::-webkit-scrollbar': {
                width: this.settingSizing([10], "content_pane"),
            },
            'fm_folders_nav::-webkit-scrollbar-track': {
                "background-color": this.fileManagerMutableStyles.colors.border,
            },
            'fm_content_pane::-webkit-scrollbar-track': {
                "background-color": this.fileManagerMutableStyles.colors.border,
            },
            'fm_folders_nav::-webkit-scrollbar-thumb': {
                "background-color": '#888',
            },
            'fm_content_pane::-webkit-scrollbar-thumb': {
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
            "fm_tool:hover, fm_leave_settings_arrow:hover": {
                "background-color": this.fileManagerMutableStyles.colors.hover,
                "border-radius": '4px',
            },
            "fm_leave_settings_arrow:hover": {
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
            "fm_file_block_tiles:hover": {
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
            },
            'fm_current_path::-webkit-scrollbar': {
                width: this.settingSizing([10], "address"),
                height: "4px"
            },
            'fm_current_path::-webkit-scrollbar-track': {
                "background-color": this.fileManagerMutableStyles.colors.border,
            },
            'fm_current_path::-webkit-scrollbar-thumb': {
                "background-color": '#888',
            },
            "fm_extra_tools_pane": {
                display: "flex",
                "flex-direction": "row",
                "align-items": "center",
                border: `3px solid ${this.fileManagerMutableStyles.colors.border}`,
                "border-top": "none",
                "background-color": this.fileManagerMutableStyles.colors.main_background,
                "box-sizing": 'border-box',
                "padding": "2px 0px",
            }
        };
    }
    
    public fmAddClass(element: HTMLElement, classname: string) {
        Object.assign(element.style, this.fileManagerStyles[classname]);
    }
    
    public fmRemoveClass(element: HTMLElement, classname: string) {
        let element_styles = this.fileManagerStyles[classname];
    
        for (let key in element_styles) {
            if (classname === "fm_openedFile" && key === "background-color") {
                element.style.backgroundColor = "";
            }
            else if (classname === "fm_folder_parent__opened" && key === "background-color") {
                element.style.backgroundColor = "";
            }
            else if (classname === "fm_selected" && key === "background-color") {
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

    public settingSizing(settings: number[], panel: string) {
        let final_settings = "";
        let multy: number = 1;

        if (this.fileManagerMutableStyles.sizing[panel] === "xsmall") {
            multy = 0.75;
        }
        else if (this.fileManagerMutableStyles.sizing[panel] === "small") {
            multy = 0.9;
        }
        else if (this.fileManagerMutableStyles.sizing[panel] === "medium") {
            multy = 1;
        }
        else if (this.fileManagerMutableStyles.sizing[panel] === "large") {
            multy = 1.2;
        }
        else if (this.fileManagerMutableStyles.sizing[panel] === "xlarge") {
            multy = 1.4;
        }

        for (let i = 0; i < settings.length; i++) {
            final_settings += String(settings[i] * multy) + "px ";
        }

        return final_settings.trim();
    }
    
    public updateHeaderStyles() {
        this.headerStyleElement.textContent = `
            .fm_loader::after {
                content: '';  
                box-sizing: border-box;
                position: absolute;
                left: 0;
                top: 0;
                width: 48px;
                height: 48px;
                border-radius: 50%;
                border-bottom: 4px solid #FF3D00;
                border-left: 4px solid transparent;
            }
        `;

        for (let classname in this.fileManagerHeaderStyles) {
            this.headerStyleElement.textContent += `.${classname} {\n`;

            for (let style in this.fileManagerHeaderStyles[classname]) {
                this.headerStyleElement.textContent += `    ${style}: ${this.fileManagerHeaderStyles[classname][style]};\n`;
            }

            this.headerStyleElement.textContent += `}\n`;
        }
    }

    public updateUpdatableElements() {
        for (let key in this.updatableElements) {
            this.updatableElements[key].forEach(element => {
                Object.assign(element.style, this.fileManagerStyles[key]);
            });
        }
    }

    public updateMutableStyles() {
        this.fileManagerMutableStyles = JSON.parse(localStorage.fmMutableStyles);
    }

    public setMutableStyles(mutableStyles: IfileManagerStyles) {
        localStorage.fmMutableStyles = JSON.stringify(mutableStyles);
    }

    public getDefaultMutableStyles() {
        return JSON.parse(localStorage.fmDefaultMutableStyles);
    }

    public setDefaultMutableStyles() {
        let defaultMutableStyles = {
            "colors": {
                hover: "#3e3e3e",
                border: "#2B2B2B",
                main_background: "#252526",
                selected: "#4a4a4a",
                text_color: "#ffffff"
            },
            "sizing": {
                tools: "medium",
                address: "medium",
                navigation_pane: "medium",
                content_pane: "medium",
                settings_panel: "medium"
            }
        };

        localStorage.fmDefaultMutableStyles = JSON.stringify(defaultMutableStyles);
    }

    public addRotationAnimation(element: HTMLElement) {
        element.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' }
        ], {
            duration: 1000,
            iterations: Infinity,
            easing: 'linear'
        });
      }
}   

