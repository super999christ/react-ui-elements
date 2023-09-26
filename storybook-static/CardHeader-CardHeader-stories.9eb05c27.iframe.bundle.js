"use strict";(self.webpackChunk_pickleballinc_react_ui=self.webpackChunk_pickleballinc_react_ui||[]).push([[2404],{"./src/CardHeader/CardHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithAvatarAndCustomHeaderLine:()=>WithAvatarAndCustomHeaderLine,WithAvatarAndHeaderLine:()=>WithAvatarAndHeaderLine,WithBadgeAndAvatarAndCustomHeaderLine:()=>WithBadgeAndAvatarAndCustomHeaderLine,WithBadgeAndAvatarAndHeaderLine:()=>WithBadgeAndAvatarAndHeaderLine,WithBadgeAndDropdown:()=>WithBadgeAndDropdown,WithBadgeAndDropdownAndAvatar:()=>WithBadgeAndDropdownAndAvatar,WithBadgeAndHeaderLine:()=>WithBadgeAndHeaderLine,WithDropdown:()=>WithDropdown,WithDropdownAndAvatar:()=>WithDropdownAndAvatar,WithHeaderLine:()=>WithHeaderLine,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardHeader_stories});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CardHeader_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/CardHeader/CardHeader.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CardHeader_module.Z,options);const CardHeader_CardHeader_module=CardHeader_module.Z&&CardHeader_module.Z.locals?CardHeader_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardHeader=react.forwardRef((function CardHeader(props,ref){const{Avatar,Badge,children,className,Dropdown,SupportingText,Text="Text",withHeaderLine,...rest}=props,wrapperClasses=(0,clsx.Z)(CardHeader_CardHeader_module.wrapper,{[CardHeader_CardHeader_module["wrapper--with-header-line"]]:withHeaderLine},className),avatarTextContainerClasses=(0,clsx.Z)(CardHeader_CardHeader_module.avatar__text__container),textContainerClasses=(0,clsx.Z)(CardHeader_CardHeader_module.text__container),textBadgeContainerClasses=(0,clsx.Z)(CardHeader_CardHeader_module.text__badge__container),textClasses=(0,clsx.Z)(CardHeader_CardHeader_module.text),supportingTextClasses=(0,clsx.Z)(CardHeader_CardHeader_module.supporting__text),dropdownClasses=(0,clsx.Z)(CardHeader_CardHeader_module.dropdown);return(0,jsx_runtime.jsxs)("div",{className:wrapperClasses,ref,...rest,children:[(0,jsx_runtime.jsxs)("div",{className:avatarTextContainerClasses,children:[Avatar&&Avatar(),(0,jsx_runtime.jsxs)("div",{className:textContainerClasses,children:[(0,jsx_runtime.jsxs)("div",{className:textBadgeContainerClasses,children:["string"==typeof Text?(0,jsx_runtime.jsx)("div",{className:textClasses,children:Text}):Text(),Badge&&Badge()]}),SupportingText&&("string"==typeof SupportingText?(0,jsx_runtime.jsx)("div",{className:supportingTextClasses,children:SupportingText}):SupportingText())]})]}),children,Dropdown&&(0,jsx_runtime.jsx)("div",{className:dropdownClasses,children:Dropdown()})]})})),CardHeader_CardHeader=CardHeader;try{CardHeader.displayName="CardHeader",CardHeader.__docgenInfo={description:"",displayName:"CardHeader",props:{SupportingText:{defaultValue:null,description:"",name:"SupportingText",required:!1,type:{name:"string | (() => ReactNode)"}},Text:{defaultValue:null,description:"",name:"Text",required:!0,type:{name:"string | (() => ReactNode)"}},Avatar:{defaultValue:null,description:"",name:"Avatar",required:!1,type:{name:"(() => ReactNode)"}},Badge:{defaultValue:null,description:"",name:"Badge",required:!1,type:{name:"(() => ReactNode)"}},Dropdown:{defaultValue:null,description:"",name:"Dropdown",required:!1,type:{name:"(() => ReactNode)"}},withHeaderLine:{defaultValue:null,description:"",name:"withHeaderLine",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CardHeader/CardHeader.tsx#CardHeader"]={docgenInfo:CardHeader.__docgenInfo,name:"CardHeader",path:"src/CardHeader/CardHeader.tsx#CardHeader"})}catch(__react_docgen_typescript_loader_error){}var Avatar=__webpack_require__("./src/Avatar/index.ts"),Badge=__webpack_require__("./src/Badge/index.ts"),Button=__webpack_require__("./src/Button/index.ts"),Menu=__webpack_require__("./src/Menu/Menu.tsx");const CardHeader_stories={title:"Design System/CardHeader",component:CardHeader_CardHeader,tags:["autodocs"],parameters:{}},WithBadgeAndDropdown={args:{Badge:()=>(0,jsx_runtime.jsx)(Badge.Z,{label:"10/20 Seats",className:"!bg-primary-50 !text-primary-700"}),Dropdown:()=>(0,jsx_runtime.jsx)(Menu.ZP,{children:"..."}),SupportingText:"Manage your team members and their account permissions here.",Text:"Team members",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row flex-wrap gap-3",children:[(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"secondary",children:"Secondary"}),(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"primary",children:"Primary"})]})}},WithBadgeAndDropdownAndAvatar={args:{Avatar:()=>(0,jsx_runtime.jsx)(Avatar.Z,{size:"xl"}),Badge:()=>(0,jsx_runtime.jsx)(Badge.Z,{label:"New user",className:"!bg-primary-50 !text-primary-700"}),Dropdown:()=>(0,jsx_runtime.jsx)(Menu.ZP,{children:"..."}),SupportingText:"olivia@untitledui.com",Text:"Olivia Rhye",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row flex-wrap gap-3",children:[(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"secondary",children:"Secondary"}),(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"primary",children:"Primary"})]})}},WithBadgeAndHeaderLine={args:{Badge:()=>(0,jsx_runtime.jsx)(Badge.Z,{label:"10/20 Seats",className:"!bg-primary-50 !text-primary-700"}),SupportingText:"Manage your team members and their account permissions here.",Text:"Team members",withHeaderLine:!0,children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row flex-wrap gap-3",children:[(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"secondary",children:"Secondary"}),(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"primary",children:"Primary"})]})}},WithBadgeAndAvatarAndHeaderLine={args:{Avatar:()=>(0,jsx_runtime.jsx)(Avatar.Z,{size:"xl"}),Badge:()=>(0,jsx_runtime.jsx)(Badge.Z,{label:"New user",className:"!bg-primary-50 !text-primary-700"}),SupportingText:"olivia@untitledui.com",Text:"Olivia Rhye",withHeaderLine:!0,children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row flex-wrap gap-3",children:[(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"secondary",children:"Secondary"}),(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"primary",children:"Primary"})]})}},WithBadgeAndAvatarAndCustomHeaderLine={args:{Avatar:()=>(0,jsx_runtime.jsx)(Avatar.Z,{size:"xl"}),Badge:()=>(0,jsx_runtime.jsx)(Badge.Z,{label:"New user",className:"!bg-primary-50 !text-primary-700"}),SupportingText:"olivia@untitledui.com",Text:"Olivia Rhye",withHeaderLine:!0,children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row flex-wrap gap-3",children:[(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"secondary",children:"Secondary"}),(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"primary",children:"Primary"})]}),className:"!border-t-error-500"}},WithDropdown={args:{Dropdown:()=>(0,jsx_runtime.jsx)(Menu.ZP,{children:"..."}),SupportingText:"Manage your team members and their account permissions here.",Text:"Team members",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row flex-wrap gap-3",children:[(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"secondary",children:"Secondary"}),(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"primary",children:"Primary"})]})}},WithDropdownAndAvatar={args:{Avatar:()=>(0,jsx_runtime.jsx)(Avatar.Z,{size:"xl"}),Dropdown:()=>(0,jsx_runtime.jsx)(Menu.ZP,{children:"..."}),SupportingText:"olivia@untitledui.com",Text:"Olivia Rhye",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row flex-wrap gap-3",children:[(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"secondary",children:"Secondary"}),(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"primary",children:"Primary"})]})}},WithHeaderLine={args:{SupportingText:"Manage your team members and their account permissions here.",Text:"Team members",withHeaderLine:!0,children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row flex-wrap gap-3",children:[(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"secondary",children:"Secondary"}),(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"primary",children:"Primary"})]})}},WithAvatarAndHeaderLine={args:{Avatar:()=>(0,jsx_runtime.jsx)(Avatar.Z,{size:"xl"}),SupportingText:"olivia@untitledui.com",Text:"Olivia Rhye",withHeaderLine:!0,children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row flex-wrap gap-3",children:[(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"secondary",children:"Secondary"}),(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"primary",children:"Primary"})]})}},WithAvatarAndCustomHeaderLine={args:{Avatar:()=>(0,jsx_runtime.jsx)(Avatar.Z,{size:"xl"}),SupportingText:"olivia@untitledui.com",Text:"Olivia Rhye",withHeaderLine:!0,children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row flex-wrap gap-3",children:[(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"secondary",children:"Secondary"}),(0,jsx_runtime.jsx)(Button.Z,{size:"md",variant:"primary",children:"Primary"})]}),className:"!border-t-success-500"}};WithBadgeAndDropdown.parameters={...WithBadgeAndDropdown.parameters,docs:{...WithBadgeAndDropdown.parameters?.docs,source:{originalSource:"{\n  args: {\n    Badge: () => <Badge label='10/20 Seats' className='!bg-primary-50 !text-primary-700' />,\n    Dropdown: () => <Dropdown>...</Dropdown>,\n    SupportingText: 'Manage your team members and their account permissions here.',\n    Text: 'Team members',\n    children: <div className='flex flex-row flex-wrap gap-3'>\n        <Button size='md' variant='secondary'>Secondary</Button>\n        <Button size='md' variant='primary'>Primary</Button>\n      </div>\n  }\n}",...WithBadgeAndDropdown.parameters?.docs?.source}}},WithBadgeAndDropdownAndAvatar.parameters={...WithBadgeAndDropdownAndAvatar.parameters,docs:{...WithBadgeAndDropdownAndAvatar.parameters?.docs,source:{originalSource:"{\n  args: {\n    Avatar: () => <AvatarOriginal size='xl' />,\n    Badge: () => <Badge label='New user' className='!bg-primary-50 !text-primary-700' />,\n    Dropdown: () => <Dropdown>...</Dropdown>,\n    SupportingText: 'olivia@untitledui.com',\n    Text: 'Olivia Rhye',\n    children: <div className='flex flex-row flex-wrap gap-3'>\n        <Button size='md' variant='secondary'>Secondary</Button>\n        <Button size='md' variant='primary'>Primary</Button>\n      </div>\n  }\n}",...WithBadgeAndDropdownAndAvatar.parameters?.docs?.source}}},WithBadgeAndHeaderLine.parameters={...WithBadgeAndHeaderLine.parameters,docs:{...WithBadgeAndHeaderLine.parameters?.docs,source:{originalSource:"{\n  args: {\n    Badge: () => <Badge label='10/20 Seats' className='!bg-primary-50 !text-primary-700' />,\n    SupportingText: 'Manage your team members and their account permissions here.',\n    Text: 'Team members',\n    withHeaderLine: true,\n    children: <div className='flex flex-row flex-wrap gap-3'>\n        <Button size='md' variant='secondary'>Secondary</Button>\n        <Button size='md' variant='primary'>Primary</Button>\n      </div>\n  }\n}",...WithBadgeAndHeaderLine.parameters?.docs?.source}}},WithBadgeAndAvatarAndHeaderLine.parameters={...WithBadgeAndAvatarAndHeaderLine.parameters,docs:{...WithBadgeAndAvatarAndHeaderLine.parameters?.docs,source:{originalSource:"{\n  args: {\n    Avatar: () => <AvatarOriginal size='xl' />,\n    Badge: () => <Badge label='New user' className='!bg-primary-50 !text-primary-700' />,\n    SupportingText: 'olivia@untitledui.com',\n    Text: 'Olivia Rhye',\n    withHeaderLine: true,\n    children: <div className='flex flex-row flex-wrap gap-3'>\n        <Button size='md' variant='secondary'>Secondary</Button>\n        <Button size='md' variant='primary'>Primary</Button>\n      </div>\n  }\n}",...WithBadgeAndAvatarAndHeaderLine.parameters?.docs?.source}}},WithBadgeAndAvatarAndCustomHeaderLine.parameters={...WithBadgeAndAvatarAndCustomHeaderLine.parameters,docs:{...WithBadgeAndAvatarAndCustomHeaderLine.parameters?.docs,source:{originalSource:"{\n  args: {\n    Avatar: () => <AvatarOriginal size='xl' />,\n    Badge: () => <Badge label='New user' className='!bg-primary-50 !text-primary-700' />,\n    SupportingText: 'olivia@untitledui.com',\n    Text: 'Olivia Rhye',\n    withHeaderLine: true,\n    children: <div className='flex flex-row flex-wrap gap-3'>\n        <Button size='md' variant='secondary'>Secondary</Button>\n        <Button size='md' variant='primary'>Primary</Button>\n      </div>,\n    className: '!border-t-error-500'\n  }\n}",...WithBadgeAndAvatarAndCustomHeaderLine.parameters?.docs?.source}}},WithDropdown.parameters={...WithDropdown.parameters,docs:{...WithDropdown.parameters?.docs,source:{originalSource:"{\n  args: {\n    Dropdown: () => <Dropdown>...</Dropdown>,\n    SupportingText: 'Manage your team members and their account permissions here.',\n    Text: 'Team members',\n    children: <div className='flex flex-row flex-wrap gap-3'>\n        <Button size='md' variant='secondary'>Secondary</Button>\n        <Button size='md' variant='primary'>Primary</Button>\n      </div>\n  }\n}",...WithDropdown.parameters?.docs?.source}}},WithDropdownAndAvatar.parameters={...WithDropdownAndAvatar.parameters,docs:{...WithDropdownAndAvatar.parameters?.docs,source:{originalSource:"{\n  args: {\n    Avatar: () => <AvatarOriginal size='xl' />,\n    Dropdown: () => <Dropdown>...</Dropdown>,\n    SupportingText: 'olivia@untitledui.com',\n    Text: 'Olivia Rhye',\n    children: <div className='flex flex-row flex-wrap gap-3'>\n        <Button size='md' variant='secondary'>Secondary</Button>\n        <Button size='md' variant='primary'>Primary</Button>\n      </div>\n  }\n}",...WithDropdownAndAvatar.parameters?.docs?.source}}},WithHeaderLine.parameters={...WithHeaderLine.parameters,docs:{...WithHeaderLine.parameters?.docs,source:{originalSource:"{\n  args: {\n    SupportingText: 'Manage your team members and their account permissions here.',\n    Text: 'Team members',\n    withHeaderLine: true,\n    children: <div className='flex flex-row flex-wrap gap-3'>\n        <Button size='md' variant='secondary'>Secondary</Button>\n        <Button size='md' variant='primary'>Primary</Button>\n      </div>\n  }\n}",...WithHeaderLine.parameters?.docs?.source}}},WithAvatarAndHeaderLine.parameters={...WithAvatarAndHeaderLine.parameters,docs:{...WithAvatarAndHeaderLine.parameters?.docs,source:{originalSource:"{\n  args: {\n    Avatar: () => <AvatarOriginal size='xl' />,\n    SupportingText: 'olivia@untitledui.com',\n    Text: 'Olivia Rhye',\n    withHeaderLine: true,\n    children: <div className='flex flex-row flex-wrap gap-3'>\n        <Button size='md' variant='secondary'>Secondary</Button>\n        <Button size='md' variant='primary'>Primary</Button>\n      </div>\n  }\n}",...WithAvatarAndHeaderLine.parameters?.docs?.source}}},WithAvatarAndCustomHeaderLine.parameters={...WithAvatarAndCustomHeaderLine.parameters,docs:{...WithAvatarAndCustomHeaderLine.parameters?.docs,source:{originalSource:"{\n  args: {\n    Avatar: () => <AvatarOriginal size='xl' />,\n    SupportingText: 'olivia@untitledui.com',\n    Text: 'Olivia Rhye',\n    withHeaderLine: true,\n    children: <div className='flex flex-row flex-wrap gap-3'>\n        <Button size='md' variant='secondary'>Secondary</Button>\n        <Button size='md' variant='primary'>Primary</Button>\n      </div>,\n    className: '!border-t-success-500'\n  }\n}",...WithAvatarAndCustomHeaderLine.parameters?.docs?.source}}};const __namedExportsOrder=["WithBadgeAndDropdown","WithBadgeAndDropdownAndAvatar","WithBadgeAndHeaderLine","WithBadgeAndAvatarAndHeaderLine","WithBadgeAndAvatarAndCustomHeaderLine","WithDropdown","WithDropdownAndAvatar","WithHeaderLine","WithAvatarAndHeaderLine","WithAvatarAndCustomHeaderLine"]},"./src/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_Avatar});var pro_light_svg_icons=__webpack_require__("./node_modules/@fortawesome/pro-light-svg-icons/index.mjs"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Avatar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/Avatar/Avatar.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Avatar_module.Z,options);const Avatar_Avatar_module=Avatar_module.Z&&Avatar_module.Z.locals?Avatar_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Avatar=(0,react.forwardRef)((function Avatar(props,propsRef){const{active=!1,className,customIconRender,customImageRender,imageUrl,focusable=!1,onlineIndicator,size="md",...rest}=props,avatarContainerClasses=(0,clsx.Z)(Avatar_Avatar_module["avatar-root"],{[Avatar_Avatar_module["avatar--size-xs"]]:"xs"===size,[Avatar_Avatar_module["avatar--size-sm"]]:"sm"===size,[Avatar_Avatar_module["avatar--size-md"]]:"md"===size,[Avatar_Avatar_module["avatar--size-lg"]]:"lg"===size,[Avatar_Avatar_module["avatar--size-xl"]]:"xl"===size,[Avatar_Avatar_module["avatar--size-2xl"]]:"2xl"===size,[Avatar_Avatar_module["avatar--size-3xl"]]:"3xl"===size,[Avatar_Avatar_module["avatar--size-4xl"]]:"4xl"===size}),avatarClasses=(0,clsx.Z)(Avatar_Avatar_module.avatar,{[Avatar_Avatar_module["avatar--focusable-active"]]:active,[Avatar_Avatar_module["avatar--focusable"]]:focusable},className),indicatorClasses=(0,clsx.Z)(Avatar_Avatar_module["avatar--indicator"],{[Avatar_Avatar_module["avatar--indicator-online"]]:!0===onlineIndicator,[Avatar_Avatar_module["avatar--indicator-offline"]]:!1===onlineIndicator});return(0,jsx_runtime.jsxs)("div",{className:avatarContainerClasses,children:[(0,jsx_runtime.jsx)("div",{className:avatarClasses,ref:propsRef,tabIndex:focusable?0:-1,role:"button",...rest,children:imageUrl?customImageRender?customImageRender(imageUrl):(0,jsx_runtime.jsx)("img",{src:imageUrl,alt:"",className:"absolute inset-0 h-full w-full object-cover"}):customIconRender?customIconRender():(0,jsx_runtime.jsx)("div",{className:Avatar_Avatar_module["avatar--placeholder"],children:(0,jsx_runtime.jsx)(index_es.G,{icon:pro_light_svg_icons.ILF,className:"text-gray-700"})})}),"boolean"==typeof onlineIndicator&&void 0!==onlineIndicator?(0,jsx_runtime.jsx)("div",{className:indicatorClasses}):null]})})),Avatar_Avatar=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"xs"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'}]}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},customIconRender:{defaultValue:null,description:"",name:"customIconRender",required:!1,type:{name:"(() => ReactNode)"}},customImageRender:{defaultValue:null,description:"",name:"customImageRender",required:!1,type:{name:"((imageUrl: string) => ReactNode)"}},focusable:{defaultValue:null,description:"",name:"focusable",required:!1,type:{name:"boolean"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!1,type:{name:"string"}},onlineIndicator:{defaultValue:null,description:"",name:"onlineIndicator",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/Avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_Avatar__WEBPACK_IMPORTED_MODULE_0__.Z});var _Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Avatar/Avatar.tsx")},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/Avatar/Avatar.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".BbFNrZRWng_8Bm_W8hM1 {\n  position: relative;\n  display: inline-flex\n}\n\n.L9K2z1Eddw492_HKexMO {\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9999px;\n  overflow: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgb(242 244 247 / var(--tw-bg-opacity));\n  font-weight: 500\n}\n\n.lZSjwCSioo_SnlpAxCrA,\n._1CeKTcpG7ldiy706WU19:focus {\n  --tw-shadow: 0 0 0 4px rgb(214 228 255 / 100%);\n  --tw-shadow-colored: 0 0 0 4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  outline: 0\n}\n\n.JubIbXo843xZpQygMb4w .L9K2z1Eddw492_HKexMO {\n  width: 1.5rem;\n  height: 1.5rem\n}\n\n.jk_i3BFoW8Easda6_iXo .L9K2z1Eddw492_HKexMO {\n  width: 2rem;\n  height: 2rem\n}\n\n.GAZ6XxNPVh76_3Io7iKv .L9K2z1Eddw492_HKexMO {\n  width: 2.5rem;\n  height: 2.5rem\n}\n\n.GpgGMlQEqs_dJSmN1HXz .L9K2z1Eddw492_HKexMO {\n  width: 3rem;\n  height: 3rem\n}\n\n.uBDi9Zd8sIKsQRGoTUAo .L9K2z1Eddw492_HKexMO {\n  width: 3.5rem;\n  height: 3.5rem\n}\n\n.SnjRu1xrxNF6ql1uA1Qz .L9K2z1Eddw492_HKexMO {\n  width: 4rem;\n  height: 4rem\n}\n\n.WzZ0qduzPf2v_meRaWBw .L9K2z1Eddw492_HKexMO {\n  width: 6rem;\n  height: 6rem\n}\n\n.HfosJdZf1bVLgpkRwiRB .L9K2z1Eddw492_HKexMO {\n  width: 10rem;\n  height: 10rem\n}\n\n.RVJYk0OwwTQ097s_Bln0 {\n  border-radius: 9999px;\n  bottom: 0px;\n  right: 0px;\n  position: absolute\n}\n\n.YqKmOD4PKpevDf625RtO,\n.lWEAfqcr3u0HGLe9Okf0 {\n  --tw-shadow: 0 0 0 1.5px rgb(255 255 255 / 100%);\n  --tw-shadow-colored: 0 0 0 1.5px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.YqKmOD4PKpevDf625RtO {\n  --tw-bg-opacity: 1;\n  background-color: rgb(18 183 106 / var(--tw-bg-opacity))\n}\n\n.lWEAfqcr3u0HGLe9Okf0 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 68 56 / var(--tw-bg-opacity))\n}\n\n.JubIbXo843xZpQygMb4w .RVJYk0OwwTQ097s_Bln0 {\n  width: 6px;\n  height: 6px;\n  right: 1px;\n  bottom: 1px\n}\n\n.jk_i3BFoW8Easda6_iXo .RVJYk0OwwTQ097s_Bln0 {\n  width: 0.5rem;\n  height: 0.5rem;\n  right: 1px;\n  bottom: 1px\n}\n\n.GAZ6XxNPVh76_3Io7iKv .RVJYk0OwwTQ097s_Bln0 {\n  width: 10px;\n  height: 10px;\n  right: 1px;\n  bottom: 1px\n}\n\n.GpgGMlQEqs_dJSmN1HXz .RVJYk0OwwTQ097s_Bln0 {\n  width: 0.75rem;\n  height: 0.75rem;\n  right: 2px;\n  bottom: 2px\n}\n\n.uBDi9Zd8sIKsQRGoTUAo .RVJYk0OwwTQ097s_Bln0 {\n  width: 14px;\n  height: 14px;\n  right: 2px;\n  bottom: 2px\n}\n\n.SnjRu1xrxNF6ql1uA1Qz .RVJYk0OwwTQ097s_Bln0 {\n  width: 1rem;\n  height: 1rem;\n  right: 2px;\n  bottom: 2px\n}\n\n.WzZ0qduzPf2v_meRaWBw .RVJYk0OwwTQ097s_Bln0 {\n  width: 1.5rem;\n  height: 1.5rem;\n  right: 2px;\n  bottom: 2px\n}\n\n.HfosJdZf1bVLgpkRwiRB .RVJYk0OwwTQ097s_Bln0 {\n  width: 2rem;\n  height: 2rem;\n  right: 0.25rem;\n  bottom: 0.25rem\n}\n\n.iQejQRBpLs1hl3hPVOkQ {\n  --tw-text-opacity: 1;\n  color: rgb(71 84 103 / var(--tw-text-opacity))\n}\n\n.BbFNrZRWng_8Bm_W8hM1.JubIbXo843xZpQygMb4w .L9K2z1Eddw492_HKexMO .iQejQRBpLs1hl3hPVOkQ {\n  font-size: 0.875rem;\n  line-height: 1.25rem\n}\n\n.BbFNrZRWng_8Bm_W8hM1.jk_i3BFoW8Easda6_iXo .L9K2z1Eddw492_HKexMO .iQejQRBpLs1hl3hPVOkQ {\n  font-size: 1rem;\n  line-height: 1.5rem\n}\n\n.BbFNrZRWng_8Bm_W8hM1.GAZ6XxNPVh76_3Io7iKv .L9K2z1Eddw492_HKexMO .iQejQRBpLs1hl3hPVOkQ {\n  font-size: 1.25rem;\n  line-height: 1.75rem\n}\n\n.BbFNrZRWng_8Bm_W8hM1.GpgGMlQEqs_dJSmN1HXz .L9K2z1Eddw492_HKexMO .iQejQRBpLs1hl3hPVOkQ {\n  font-size: 1.5rem;\n  line-height: 2rem\n}\n\n.BbFNrZRWng_8Bm_W8hM1.uBDi9Zd8sIKsQRGoTUAo .L9K2z1Eddw492_HKexMO .iQejQRBpLs1hl3hPVOkQ {\n  font-size: 28px\n}\n\n.BbFNrZRWng_8Bm_W8hM1.SnjRu1xrxNF6ql1uA1Qz .L9K2z1Eddw492_HKexMO .iQejQRBpLs1hl3hPVOkQ {\n  font-size: 28px\n}\n\n.BbFNrZRWng_8Bm_W8hM1.WzZ0qduzPf2v_meRaWBw .L9K2z1Eddw492_HKexMO .iQejQRBpLs1hl3hPVOkQ {\n  font-size: 48px\n}\n\n.BbFNrZRWng_8Bm_W8hM1.HfosJdZf1bVLgpkRwiRB .L9K2z1Eddw492_HKexMO .iQejQRBpLs1hl3hPVOkQ {\n  font-size: 64px\n}\n","",{version:3,sources:["webpack://./src/Avatar/Avatar.module.css"],names:[],mappings:"AACE;EAAA,kBAAe;EACf;AADe;;AAKf;EAAA,kBAAe;EACf,oBAAkB;EAClB,uBAAqB;EACrB,mBAAmB;EACnB,qBAAmB;EACnB,gBAAsB;EACtB,kBAAkB;EAAlB,yDAAkB;EAClB;AAPe;;AAYf;;EAAA,8CAA0D;EAA1D,qDAA0D;EAA1D,uGAA0D;EAC1D;AAD0D;;AAK1D;EAAA,aAAU;EACV;AADU;;AAKV;EAAA,WAAU;EACV;AADU;;AAKV;EAAA,aAAW;EACX;AADW;;AAKX;EAAA,WAAW;EACX;AADW;;AAKX;EAAA,aAAW;EACX;AADW;;AAKX;EAAA,WAAW;EACX;AADW;;AAKX;EAAA,WAAW;EACX;AADW;;AAKX;EAAA,YAAW;EACX;AADW;;AAKX;EAAA,qBAAmB;EACnB,WAAe;EACf,UAAc;EACd;AAHmB;;AAQnB;;EAAA,gDAAsD;EAAtD,uDAAsD;EAAtD;AAAsD;;AAItD;EAAA,kBAAqB;EAArB;AAAqB;;AAIrB;EAAA,kBAAmB;EAAnB;AAAmB;;AAInB;EAAA,UAAc;EACd,WAAc;EACd,UAAkB;EAClB;AAHc;;AAOd;EAAA,aAAU;EACV,cAAU;EACV,UAAkB;EAClB;AAHU;;AAOV;EAAA,WAAe;EACf,YAAe;EACf,UAAkB;EAClB;AAHe;;AAOf;EAAA,cAAU;EACV,eAAU;EACV,UAAkB;EAClB;AAHU;;AAOV;EAAA,WAAe;EACf,YAAe;EACf,UAAkB;EAClB;AAHe;;AAOf;EAAA,WAAU;EACV,YAAU;EACV,UAAkB;EAClB;AAHU;;AAOV;EAAA,aAAU;EACV,cAAU;EACV,UAAkB;EAClB;AAHU;;AAOV;EAAA,WAAU;EACV,YAAU;EACV,cAAc;EACd;AAHU;;AAOV;EAAA,oBAAoB;EAApB;AAAoB;;AAIpB;EAAA,mBAAc;EAAd;AAAc;;AAId;EAAA,eAAgB;EAAhB;AAAgB;;AAIhB;EAAA,kBAAc;EAAd;AAAc;;AAId;EAAA,iBAAe;EAAf;AAAe;;AAIf;EAAA;AAAkB;;AAIlB;EAAA;AAAkB;;AAIlB;EAAA;AAAkB;;AAIlB;EAAA;AAAkB",sourcesContent:['.avatar-root {\n  @apply relative;\n  @apply inline-flex;\n}\n\n.avatar {\n  @apply relative;\n  @apply inline-flex;\n  @apply justify-center;\n  @apply items-center;\n  @apply rounded-full;\n  @apply overflow-hidden;\n  @apply bg-gray-100;\n  @apply font-medium;\n}\n\n.avatar--focusable-active,\n.avatar--focusable:focus {\n  @apply shadow-[0_0_0_4px_theme("colors.primary.100/100%")];\n  outline: 0;\n}\n\n.avatar--size-xs .avatar {\n  @apply w-6;\n  @apply h-6;\n}\n\n.avatar--size-sm .avatar {\n  @apply w-8;\n  @apply h-8;\n}\n\n.avatar--size-md .avatar {\n  @apply w-10;\n  @apply h-10;\n}\n\n.avatar--size-lg .avatar {\n  @apply w-12;\n  @apply h-12;\n}\n\n.avatar--size-xl .avatar {\n  @apply w-14;\n  @apply h-14;\n}\n\n.avatar--size-2xl .avatar {\n  @apply w-16;\n  @apply h-16;\n}\n\n.avatar--size-3xl .avatar {\n  @apply w-24;\n  @apply h-24;\n}\n\n.avatar--size-4xl .avatar {\n  @apply w-40;\n  @apply h-40;\n}\n\n.avatar--indicator {\n  @apply rounded-full;\n  @apply bottom-0;\n  @apply right-0;\n  @apply absolute;\n}\n\n.avatar--indicator-online,\n.avatar--indicator-offline {\n  @apply shadow-[0_0_0_1.5px_theme("colors.white/100%")];\n}\n\n.avatar--indicator-online {\n  @apply bg-success-500;\n}\n\n.avatar--indicator-offline {\n  @apply bg-error-500;\n}\n\n.avatar--size-xs .avatar--indicator {\n  @apply w-[6px];\n  @apply h-[6px];\n  @apply right-[1px];\n  @apply bottom-[1px];\n}\n\n.avatar--size-sm .avatar--indicator {\n  @apply w-2;\n  @apply h-2;\n  @apply right-[1px];\n  @apply bottom-[1px];\n}\n\n.avatar--size-md .avatar--indicator {\n  @apply w-[10px];\n  @apply h-[10px];\n  @apply right-[1px];\n  @apply bottom-[1px];\n}\n\n.avatar--size-lg .avatar--indicator {\n  @apply w-3;\n  @apply h-3;\n  @apply right-[2px];\n  @apply bottom-[2px];\n}\n\n.avatar--size-xl .avatar--indicator {\n  @apply w-[14px];\n  @apply h-[14px];\n  @apply right-[2px];\n  @apply bottom-[2px];\n}\n\n.avatar--size-2xl .avatar--indicator {\n  @apply w-4;\n  @apply h-4;\n  @apply right-[2px];\n  @apply bottom-[2px];\n}\n\n.avatar--size-3xl .avatar--indicator {\n  @apply w-6;\n  @apply h-6;\n  @apply right-[2px];\n  @apply bottom-[2px];\n}\n\n.avatar--size-4xl .avatar--indicator {\n  @apply w-8;\n  @apply h-8;\n  @apply right-1;\n  @apply bottom-1;\n}\n\n.avatar--placeholder {\n  @apply text-gray-600;\n}\n\n.avatar-root.avatar--size-xs .avatar .avatar--placeholder {\n  @apply text-sm;\n}\n\n.avatar-root.avatar--size-sm .avatar .avatar--placeholder {\n  @apply text-base;\n}\n\n.avatar-root.avatar--size-md .avatar .avatar--placeholder {\n  @apply text-xl;\n}\n\n.avatar-root.avatar--size-lg .avatar .avatar--placeholder {\n  @apply text-2xl;\n}\n\n.avatar-root.avatar--size-xl .avatar .avatar--placeholder {\n  @apply text-[28px];\n}\n\n.avatar-root.avatar--size-2xl .avatar .avatar--placeholder {\n  @apply text-[28px];\n}\n\n.avatar-root.avatar--size-3xl .avatar .avatar--placeholder {\n  @apply text-[48px];\n}\n\n.avatar-root.avatar--size-4xl .avatar .avatar--placeholder {\n  @apply text-[64px];\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"avatar-root":"BbFNrZRWng_8Bm_W8hM1",avatar:"L9K2z1Eddw492_HKexMO","avatar--focusable-active":"lZSjwCSioo_SnlpAxCrA","avatar--focusable":"_1CeKTcpG7ldiy706WU19","avatar--size-xs":"JubIbXo843xZpQygMb4w","avatar--size-sm":"jk_i3BFoW8Easda6_iXo","avatar--size-md":"GAZ6XxNPVh76_3Io7iKv","avatar--size-lg":"GpgGMlQEqs_dJSmN1HXz","avatar--size-xl":"uBDi9Zd8sIKsQRGoTUAo","avatar--size-2xl":"SnjRu1xrxNF6ql1uA1Qz","avatar--size-3xl":"WzZ0qduzPf2v_meRaWBw","avatar--size-4xl":"HfosJdZf1bVLgpkRwiRB","avatar--indicator":"RVJYk0OwwTQ097s_Bln0","avatar--indicator-online":"YqKmOD4PKpevDf625RtO","avatar--indicator-offline":"lWEAfqcr3u0HGLe9Okf0","avatar--placeholder":"iQejQRBpLs1hl3hPVOkQ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/CardHeader/CardHeader.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".lJO2R6POSYl05sr0EWPl {position: relative;display: flex;flex-direction: column;align-items: flex-start;gap: 1rem;align-self: stretch;--tw-bg-opacity: 1;background-color: rgb(255 255 255 / var(--tw-bg-opacity));padding-left: 1rem;padding-right: 1rem;padding-top: 1.25rem;padding-bottom: 1.25rem\n}@media (min-width: 640px) {.lJO2R6POSYl05sr0EWPl {width: 100%;flex-direction: row;padding-left: 1.5rem;padding-right: 1.5rem;padding-top: 1.25rem;padding-bottom: 1.25rem\n    }\n}\n\n.fv2w5X62RBgXEIyeMUX2 {border-top-width: 8px;--tw-border-opacity: 1;border-top-color: rgb(25 57 183 / var(--tw-border-opacity));border-top-color: solid\n}\n\n.JgbgWpmd0j8v7jcvRSRG {display: flex;flex: 1 0 0;align-items: center;gap: 0.5rem\n}\n\n@media (min-width: 640px) {.JgbgWpmd0j8v7jcvRSRG {gap: 1rem\n    }\n}\n\n.ErpWMovuTb5pEYHu5sZ1 {display: flex;flex: 1 0 0;flex-direction: column;align-items: flex-start;justify-content: center;gap: 0.25rem;align-self: stretch\n}\n\n.KiIF95NqElNatQs8cOZF {display: flex;align-items: center;gap: 0.5rem;align-self: stretch\n}\n\n.WJeUayp_TvjrJDe7TMTR {font-size: 1.125rem;font-weight: 600;font-style: normal;line-height: 1.75rem;--tw-text-opacity: 1;color: rgb(16 24 40 / var(--tw-text-opacity))\n}\n\n.iSN_9VL3r0eA7r6gz1X0 {font-size: 0.875rem;font-weight: 400;font-style: normal;line-height: 1.25rem;--tw-text-opacity: 1;color: rgb(71 84 103 / var(--tw-text-opacity))\n}\n\n.QEBFUeuRJ74stlL6AtFz {position: absolute;right: 0.5rem;top: 1.75rem;display: flex;flex-direction: column;align-items: flex-start\n}\n\n@media (min-width: 640px) {.QEBFUeuRJ74stlL6AtFz {position: relative;right: unset;top: unset\n    }\n}\n","",{version:3,sources:["webpack://./src/CardHeader/CardHeader.module.css"],names:[],mappings:"AACE,uBAAA,kBAA+E,CAA/E,aAA+E,CAA/E,sBAA+E,CAA/E,uBAA+E,CAA/E,SAA+E,CAA/E,mBAA+E,CAA/E,kBAA+E,CAA/E,yDAA+E,CAA/E,kBAA+E,CAA/E,mBAA+E,CAA/E,oBAA+E,CAA/E;AAA+E,CAC/E,2BAAA,uBAAA,WAA4C,CAA5C,mBAA4C,CAA5C,oBAA4C,CAA5C,qBAA4C,CAA5C,oBAA4C,CAA5C;IAA4C;AAAA;;AAI5C,uBAAA,qBAAuD,CAAvD,sBAAuD,CAAvD,2DAAuD,CAAvD;AAAuD;;AAIvD,uBAAA,aAA2C,CAA3C,WAA2C,CAA3C,mBAA2C,CAA3C;AAA2C;;AAC3C,2BAAA,uBAAA;IAAe;AAAA;;AAIf,uBAAA,aAA+E,CAA/E,WAA+E,CAA/E,sBAA+E,CAA/E,uBAA+E,CAA/E,uBAA+E,CAA/E,YAA+E,CAA/E;AAA+E;;AAI/E,uBAAA,aAA2C,CAA3C,mBAA2C,CAA3C,WAA2C,CAA3C;AAA2C;;AAI3C,uBAAA,mBAA+D,CAA/D,gBAA+D,CAA/D,kBAA+D,CAA/D,oBAA+D,CAA/D,oBAA+D,CAA/D;AAA+D;;AAI/D,uBAAA,mBAA6D,CAA7D,gBAA6D,CAA7D,kBAA6D,CAA7D,oBAA6D,CAA7D,oBAA6D,CAA7D;AAA6D;;AAI7D,uBAAA,kBAAmG,CAAnG,aAAmG,CAAnG,YAAmG,CAAnG,aAAmG,CAAnG,sBAAmG,CAAnG;AAAmG;;AAAnG,2BAAA,uBAAA,kBAAmG,CAAnG,YAAmG,CAAnG;IAAmG;AAAA",sourcesContent:[".wrapper {\n  @apply bg-white flex flex-col items-start gap-4 self-stretch relative px-4 py-5;\n  @apply sm:w-full sm:px-6 sm:py-5 sm:flex-row;\n}\n\n.wrapper--with-header-line {\n  @apply border-t-8 border-t-primary-700 border-t-[solid];\n}\n\n.avatar__text__container {\n  @apply flex gap-2 flex-[1_0_0] items-center;\n  @apply sm:gap-4;\n}\n\n.text__container {\n  @apply flex flex-col justify-center items-start gap-1 flex-[1_0_0] self-stretch;\n}\n\n.text__badge__container {\n  @apply flex items-center gap-2 self-stretch;\n}\n\n.text {\n  @apply text-gray-900 text-lg not-italic font-semibold leading-7;\n}\n\n.supporting__text {\n  @apply text-gray-600 text-sm not-italic font-normal leading-5;\n}\n\n.dropdown {\n  @apply flex flex-col items-start absolute right-2 top-7 sm:relative sm:right-[unset] sm:top-[unset];\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"lJO2R6POSYl05sr0EWPl","wrapper--with-header-line":"fv2w5X62RBgXEIyeMUX2",avatar__text__container:"JgbgWpmd0j8v7jcvRSRG",text__container:"ErpWMovuTb5pEYHu5sZ1",text__badge__container:"KiIF95NqElNatQs8cOZF",text:"WJeUayp_TvjrJDe7TMTR",supporting__text:"iSN_9VL3r0eA7r6gz1X0",dropdown:"QEBFUeuRJ74stlL6AtFz"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);