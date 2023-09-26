"use strict";(self.webpackChunk_pickleballinc_react_ui=self.webpackChunk_pickleballinc_react_ui||[]).push([[798],{"./src/pickleball/ResultCard/ResultCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ResultCard_stories});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),pro_regular_svg_icons=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@fortawesome/pro-regular-svg-icons/index.mjs")),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ResultCard_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/pickleball/ResultCard/ResultCard.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ResultCard_module.Z,options);const ResultCard_ResultCard_module=ResultCard_module.Z&&ResultCard_module.Z.locals?ResultCard_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MatchSide=({match,team})=>{const reversed="team2"===team,oppositionTeam="team1"===team?"team2":"team1",teamName="team1"===team?"Team 2":"Team 1",matchSideClasses=(0,clsx.Z)(ResultCard_ResultCard_module.match__side,{[ResultCard_ResultCard_module["match__side--reversed"]]:reversed,[ResultCard_ResultCard_module["match__side--not-reversed"]]:!reversed,[ResultCard_ResultCard_module["match__side--duo"]]:2===match[team].length,[ResultCard_ResultCard_module["match__side--solo"]]:2!==match[team].length}),teamInfoClasses=(0,clsx.Z)(ResultCard_ResultCard_module.team__info,{[ResultCard_ResultCard_module["team__info--reversed"]]:reversed,[ResultCard_ResultCard_module["team__ino--not-rversed"]]:!reversed,[ResultCard_ResultCard_module["team__info--duo"]]:2===match[team].length,[ResultCard_ResultCard_module["team__info--solo"]]:2!==match[team].length}),teamContainerClasses=(0,clsx.Z)(ResultCard_ResultCard_module.team__container,{[ResultCard_ResultCard_module["team__container--winner"]]:match.winner===team,[ResultCard_ResultCard_module["team__container--duo"]]:match[team].length>1}),trophyClasses=(0,clsx.Z)(ResultCard_ResultCard_module.trophy),playerInfoClasses=(0,clsx.Z)(ResultCard_ResultCard_module.player__info,{[ResultCard_ResultCard_module["player__info--reversed-duo"]]:reversed&&match[team].length>1,[ResultCard_ResultCard_module["player__info--reversed-solo"]]:reversed&&match[team].length<=1,[ResultCard_ResultCard_module["player__info--not-reversed-duo"]]:!reversed&&match[team].length>1,[ResultCard_ResultCard_module["player__info--not-reversed-solo"]]:!reversed&&match[team].length<=1}),nameClasses=(0,clsx.Z)(ResultCard_ResultCard_module.name),firstNameClasses=(0,clsx.Z)(ResultCard_ResultCard_module.first__name),lastNameClasses=(0,clsx.Z)(ResultCard_ResultCard_module.last__name),playerImageClasses=(0,clsx.Z)(ResultCard_ResultCard_module.player__image,{[ResultCard_ResultCard_module["player__image--duo"]]:match[team].length>1,[ResultCard_ResultCard_module["player__image--solo"]]:match[team].length<=1}),playerImgClasses=(0,clsx.Z)(ResultCard_ResultCard_module.player__img),winnerClasses=(0,clsx.Z)(ResultCard_ResultCard_module.winner,{[ResultCard_ResultCard_module["winner--reversed-duo"]]:reversed&&match[team].length>1,[ResultCard_ResultCard_module["winner--not-reversed-duo"]]:!reversed&&match[team].length>1,[ResultCard_ResultCard_module["winner--team2"]]:"team2"===match.winner&&"team2"===team}),setWrapperClasses=(0,clsx.Z)(ResultCard_ResultCard_module.set__wrapper,{[ResultCard_ResultCard_module["set__wrapper--reversed"]]:reversed,[ResultCard_ResultCard_module["set__wrapper--not-reversed"]]:!reversed}),setClasses=(0,clsx.Z)(ResultCard_ResultCard_module.set,{[ResultCard_ResultCard_module["set--winner"]]:match.winner===team,[ResultCard_ResultCard_module["set--loser"]]:match.winner!==team}),grayBgClasses=(0,clsx.Z)(ResultCard_ResultCard_module.gray__bg),whiteBgClasses=(0,clsx.Z)(ResultCard_ResultCard_module.white__bg),greenTxtClasses=(0,clsx.Z)(ResultCard_ResultCard_module.green__txt),grayTxtClasses=(0,clsx.Z)(ResultCard_ResultCard_module.gray__txt),winnerMiddleClasses=(0,clsx.Z)(ResultCard_ResultCard_module.winner__middle),loserMiddleClasses=(0,clsx.Z)(ResultCard_ResultCard_module.loser__middle);return(0,jsx_runtime.jsxs)("div",{className:matchSideClasses,children:[(0,jsx_runtime.jsxs)("div",{className:teamInfoClasses,children:[match.winner===team&&(0,jsx_runtime.jsx)("div",{className:trophyClasses,children:(0,jsx_runtime.jsx)(index_es.G,{width:20,height:20,color:"#099250",icon:pro_regular_svg_icons.kWN})}),(0,jsx_runtime.jsxs)("div",{className:teamContainerClasses,children:[match[team].map(((player,index)=>(0,jsx_runtime.jsxs)("div",{className:playerInfoClasses,children:[(0,jsx_runtime.jsxs)("div",{className:nameClasses,children:[(0,jsx_runtime.jsx)("span",{className:firstNameClasses,children:player.firstName.charAt(0)}),", ",(0,jsx_runtime.jsx)("span",{className:lastNameClasses,children:player.lastName})]}),(0,jsx_runtime.jsx)("div",{className:playerImageClasses,children:player.img?(0,jsx_runtime.jsx)("img",{alt:`${teamName} - Player ${index+1}`,src:player.img,className:playerImgClasses}):(0,jsx_runtime.jsx)(index_es.G,{icon:pro_regular_svg_icons.ILF,size:"sm"})})]},index))),match.winner===team&&match[team].length<=1&&(0,jsx_runtime.jsx)("div",{className:winnerClasses,children:"Winner"})]})]}),(0,jsx_runtime.jsx)("div",{className:setWrapperClasses,children:match.result.map(((set,index)=>(0,jsx_runtime.jsx)("div",{className:`${setClasses} ${index%2==0?grayBgClasses:whiteBgClasses} ${set[team]>set[oppositionTeam]?greenTxtClasses:grayTxtClasses} ${match.winner===team&&index%2==0&&winnerMiddleClasses} ${match.winner!==team&&index%2==0&&loserMiddleClasses}\n              `,children:set[team]},index)))})]})};MatchSide.displayName="MatchSide";const ResultCard_MatchSide=MatchSide;try{MatchSide.displayName="MatchSide",MatchSide.__docgenInfo={description:"",displayName:"MatchSide",props:{match:{defaultValue:null,description:"",name:"match",required:!0,type:{name:"MatchInterface"}},team:{defaultValue:null,description:"",name:"team",required:!0,type:{name:"enum",value:[{value:'"team1"'},{value:'"team2"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pickleball/ResultCard/MatchSide.tsx#MatchSide"]={docgenInfo:MatchSide.__docgenInfo,name:"MatchSide",path:"src/pickleball/ResultCard/MatchSide.tsx#MatchSide"})}catch(__react_docgen_typescript_loader_error){}const ResultCard=({category,gradient,link,match,name})=>{const wrapperClasses=(0,clsx.Z)(ResultCard_ResultCard_module.wrapper),headerClasses=(0,clsx.Z)(ResultCard_ResultCard_module.header),linkClasses=(0,clsx.Z)(ResultCard_ResultCard_module.link),contentClasses=(0,clsx.Z)(ResultCard_ResultCard_module.content),finalClasses=(0,clsx.Z)(ResultCard_ResultCard_module.final);return(0,jsx_runtime.jsxs)("div",{className:wrapperClasses,children:[(0,jsx_runtime.jsx)("div",{style:{background:gradient||""},className:headerClasses,children:(0,jsx_runtime.jsxs)("a",{href:link,rel:"noopener noreferrer",target:"_blank",className:linkClasses,children:[name,category&&` - ${category}`]})}),(0,jsx_runtime.jsxs)("div",{className:contentClasses,children:[(0,jsx_runtime.jsx)(ResultCard_MatchSide,{match,team:"team1"}),(0,jsx_runtime.jsx)("div",{className:finalClasses,children:"Final"}),(0,jsx_runtime.jsx)(ResultCard_MatchSide,{match,team:"team2"})]})]})};ResultCard.displayName="ResultCard";const ResultCard_ResultCard=ResultCard;try{ResultCard.displayName="ResultCard",ResultCard.__docgenInfo={description:"",displayName:"ResultCard",props:{category:{defaultValue:null,description:"",name:"category",required:!1,type:{name:"string"}},gradient:{defaultValue:null,description:"",name:"gradient",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},match:{defaultValue:null,description:"",name:"match",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pickleball/ResultCard/ResultCard.tsx#ResultCard"]={docgenInfo:ResultCard.__docgenInfo,name:"ResultCard",path:"src/pickleball/ResultCard/ResultCard.tsx#ResultCard"})}catch(__react_docgen_typescript_loader_error){}const ResultCard_stories={title:"Pickleball/ResultCard",component:ResultCard_ResultCard,tags:["autodocs"],parameters:{}},Primary={args:{name:"PPA Tour: Atlanta Open",gradient:"linear-gradient(90deg, #F05235 0%, #F0821F 100%)",link:"https://www.pickleballtournaments.com/tournamentinfo.pl?tid=7974",match:{team1:[{firstName:"J",lastName:"Collin",img:"https://www.ppatour.com/wp-content/uploads/2023/06/Collin-Johns-HS-1.png"}],team2:[{firstName:"N",lastName:"Riley",img:"https://www.ppatour.com/wp-content/uploads/2023/06/Riley-Newman-HS.png"}],winner:"team1",result:[{team1:11,team2:4},{team1:9,team2:11},{team1:11,team2:2}]}}},Secondary={args:{name:"PPA Tour: Texas Open",category:"Golden Ticket Qualifier",gradient:"linear-gradient(90deg, #898E9C 0%, #151C3C 100%)",link:"https://www.pickleballtournaments.com/tournamentinfo.pl?tid=7470",match:{team1:[{firstName:"W",lastName:"Anna",img:"https://www.ppatour.com/wp-content/uploads/2023/06/Catherine-Parenteau-HS.png"},{firstName:"S",lastName:"Callie",img:"https://www.ppatour.com/wp-content/uploads/2023/06/Anna-Leigh-Waters-HS.png"}],team2:[{firstName:"K",lastName:"Lucy",img:"https://www.ppatour.com/wp-content/uploads/2023/06/lucy-headshot-e1654201944791-removebg-preview.png"},{firstName:"A",lastName:"Mira",img:"https://www.ppatour.com/wp-content/uploads/2023/06/Callie-Smith-HS-768x768-1.png"}],winner:"team2",result:[{team1:3,team2:11},{team1:5,team2:11},{team1:5,team2:11}]}}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "PPA Tour: Atlanta Open",\n    gradient: "linear-gradient(90deg, #F05235 0%, #F0821F 100%)",\n    link: "https://www.pickleballtournaments.com/tournamentinfo.pl?tid=7974",\n    match: {\n      team1: [{\n        firstName: "J",\n        lastName: "Collin",\n        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Collin-Johns-HS-1.png"\n      }],\n      team2: [{\n        firstName: "N",\n        lastName: "Riley",\n        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Riley-Newman-HS.png"\n      }],\n      winner: "team1",\n      result: [{\n        team1: 11,\n        team2: 4\n      }, {\n        team1: 9,\n        team2: 11\n      }, {\n        team1: 11,\n        team2: 2\n      }]\n    }\n  }\n}',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "PPA Tour: Texas Open",\n    category: "Golden Ticket Qualifier",\n    gradient: "linear-gradient(90deg, #898E9C 0%, #151C3C 100%)",\n    link: "https://www.pickleballtournaments.com/tournamentinfo.pl?tid=7470",\n    match: {\n      team1: [{\n        firstName: "W",\n        lastName: "Anna",\n        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Catherine-Parenteau-HS.png"\n      }, {\n        firstName: "S",\n        lastName: "Callie",\n        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Anna-Leigh-Waters-HS.png"\n      }],\n      team2: [{\n        firstName: "K",\n        lastName: "Lucy",\n        img: "https://www.ppatour.com/wp-content/uploads/2023/06/lucy-headshot-e1654201944791-removebg-preview.png"\n      }, {\n        firstName: "A",\n        lastName: "Mira",\n        img: "https://www.ppatour.com/wp-content/uploads/2023/06/Callie-Smith-HS-768x768-1.png"\n      }],\n      winner: "team2",\n      result: [{\n        team1: 3,\n        team2: 11\n      }, {\n        team1: 5,\n        team2: 11\n      }, {\n        team1: 5,\n        team2: 11\n      }]\n    }\n  }\n}',...Secondary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/pickleball/ResultCard/ResultCard.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".XpvkEbmbCxPz8OZ6qvBo {\n  width: 100%;\n  border-bottom-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(234 236 240 / var(--tw-border-opacity));\n}\n\n.hjDdJqfbRAHz5CCpEZ3Q {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0em;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.neBCDExp0w2nFlVP11BA {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n\n.neBCDExp0w2nFlVP11BA:hover {\n  text-decoration-line: underline;\n}\n\n.cK5krSgFnAvII68ImTks {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.Ebfwx0d7Q5r5D5oxMmIm {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  text-align: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  line-height: 1rem;\n  letter-spacing: 0em;\n  --tw-text-opacity: 1;\n  color: rgb(16 24 40 / var(--tw-text-opacity));\n}\n\n@media (min-width: 640px) {\n\n  .Ebfwx0d7Q5r5D5oxMmIm {\n    padding-left: 26px;\n    padding-right: 26px;\n  }\n}\n\n/* MatchSide classes */\n\n.cguHKRcomZV0LBv65jHy {\n  flex: 1 1 0px;\n  display: flex;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n\n@media (min-width: 640px) {\n\n  .cguHKRcomZV0LBv65jHy {\n    justify-content: flex-end;\n  }\n}\n\n.ZzYGXorB0fb9Op57Im0m {\n  flex-direction: row-reverse;\n}\n\n.zAWjIrs_4NBfapWuIVLM {\n  flex-direction: row;\n}\n\n.shhBpmRXOAvGKjA5qaE3 {\n  gap: 0.25rem;\n}\n\n@media (min-width: 640px) {\n\n  .shhBpmRXOAvGKjA5qaE3 {\n    gap: 1rem;\n  }\n}\n\n.zj8VK201g4JfbHdxUZp2 {\n  justify-content: center;\n}\n\n@media (min-width: 640px) {\n\n  .zj8VK201g4JfbHdxUZp2 {\n    justify-content: flex-end;\n  }\n}\n\n.R9EGuL7qbWVrGyOZAHTw {\n  display: flex;\n  width: 100%;\n  gap: 0.625rem;\n}\n\n.hk30eHgd0Rz86UQXAymH {\n  flex-direction: row-reverse;\n}\n\n.VrAc08lB4SE_egxdQUlJ {\n  flex-direction: row;\n}\n\n.Cuksrgaqu6jjNUMc17zx {\n  justify-content: center;\n}\n\n._nAkB7dvyDAc7MyiYhHp {\n  justify-content: center;\n}\n\n.vxx8AHihhbwJJyLWmhpW {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n\n@media (min-width: 640px) {\n\n  .vxx8AHihhbwJJyLWmhpW {\n    padding-top: 0.875rem;\n    padding-bottom: 0.875rem;\n  }\n\n  .tlSjQhby1bXPVEKwHBRO {\n    padding-bottom: 0px;\n  }\n}\n\n._XG3QrAOJSI0JKjuDKet {\n  gap: 0.25rem;\n  padding-top: 9px;\n  padding-bottom: 9px;\n}\n\n.jeXRZJ9kziZvAfBalVxP {\n  display: none;\n  align-items: center;\n}\n\n@media (min-width: 640px) {\n\n  .jeXRZJ9kziZvAfBalVxP {\n    display: flex;\n  }\n}\n\n.jJ4dT411yq8epicZXb8h {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n@media (min-width: 640px) {\n\n  .jJ4dT411yq8epicZXb8h {\n    gap: 0.5rem;\n  }\n}\n\n.beJokVdBtg0nvC8fVlP5 {\n  flex-direction: row-reverse;\n  gap: 0.25rem;\n}\n\n@media (min-width: 640px) {\n\n  .beJokVdBtg0nvC8fVlP5 {\n    flex-direction: row-reverse;\n  }\n}\n\n.Tcv3LvYDFr51GoRrKvyb {\n  flex-direction: column-reverse;\n  gap: 0px;\n}\n\n@media (min-width: 640px) {\n\n  .Tcv3LvYDFr51GoRrKvyb {\n    flex-direction: row-reverse;\n    gap: 0.5rem;\n  }\n}\n\n.M6Tz9mEkQrtRwa1mktk9 {\n  flex-direction: row;\n  gap: 0.25rem;\n}\n\n@media (min-width: 640px) {\n\n  .M6Tz9mEkQrtRwa1mktk9 {\n    flex-direction: row;\n  }\n}\n\n._42vChaDrLxu7xYOXW7w {\n  flex-direction: column-reverse;\n  gap: 0px;\n}\n\n@media (min-width: 640px) {\n\n  ._42vChaDrLxu7xYOXW7w {\n    flex-direction: row;\n    gap: 0.5rem;\n  }\n}\n\n.uXsSvPr8TbdXmujMVOof {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n\n.WvT01wX0xT8R5Yn6D3p7 {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  line-height: 18px;\n  letter-spacing: 0em;\n}\n\n@media (min-width: 640px) {\n\n  .WvT01wX0xT8R5Yn6D3p7 {\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.25rem;\n  }\n}\n\n.vZoKP14EeQphAmtPuiOw {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0em;\n}\n\n@media (min-width: 640px) {\n\n  .vZoKP14EeQphAmtPuiOw {\n    font-size: 0.875rem;\n    font-weight: 700;\n    line-height: 1.25rem;\n  }\n}\n\n.EjMaXNYK5XxBFZetId2b {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  border-radius: 9999px;\n  border-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(208 213 221 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  padding: 0px;\n}\n\n.cxboBqUHqb32hZ8JxDb5 {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n.n8PDuTvxLukJ6EjJLFTP {\n  height: 2rem;\n  width: 2rem;\n}\n\n@media (min-width: 640px) {\n\n  .n8PDuTvxLukJ6EjJLFTP {\n    height: 2.5rem;\n    width: 2.5rem;\n  }\n}\n\n.ct8BONbhlbuvMOdnU04s {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.NnS5OzfSGNkCPIhaS56L {\n  display: none;\n  text-align: left;\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 1rem;\n  letter-spacing: 0em;\n  --tw-text-opacity: 1;\n  color: rgb(3 152 85 / var(--tw-text-opacity));\n}\n\n@media (min-width: 640px) {\n\n  .NnS5OzfSGNkCPIhaS56L {\n    display: block;\n  }\n}\n\n.h4rWZvxUh6vf6RNZMo6Q {\n  text-align: right;\n}\n\n.IrcGL_fgZiqLJBKofUSN {\n  left: 2rem;\n  bottom: -0.125rem;\n}\n\n.sXgFzHkKCfBY0UkRBUxL {\n  right: 2rem;\n  top: 100%;\n}\n\n.ijKgvqPgYgSeXaABhLfd {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.LkJdr_G9Nz3K_a6N3LJ1 {\n  flex-direction: row-reverse;\n}\n\n.U6PAPJWsFV6YgY9l7OHG {\n  flex-direction: row;\n}\n\n.zIXMFdwg68DaZcZbOvcA {\n  display: flex;\n  min-width: 20px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-size: 0.875rem;\n  font-weight: 700;\n  line-height: 1.25rem;\n  letter-spacing: 0em;\n}\n\n@media (min-width: 640px) {\n\n  .zIXMFdwg68DaZcZbOvcA {\n    min-width: 26px;\n  }\n}\n\n.vtSIWBkk_5gakQepYHUw {\n  --tw-bg-opacity: 1;\n  background-color: rgb(236 253 243 / var(--tw-bg-opacity));\n}\n\n.RhhUy9CT0yMiN4ghWO4W {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n@media (min-width: 640px) {\n\n  .JbFU9Nu2r7xc7TZVuV2R {\n    --tw-bg-opacity: 1 !important;\n    background-color: rgb(242 244 247 / var(--tw-bg-opacity)) !important;\n  }\n\n  .IV_SzeSqJB1dGg3I3L__ {\n    --tw-bg-opacity: 1 !important;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;\n  }\n}\n\n.w_SFiFCHa_DPbnkf1hH9 {\n  --tw-text-opacity: 1;\n  color: rgb(3 152 85 / var(--tw-text-opacity));\n}\n\n.Eighq29oXjwdXKcoIZxg {\n  --tw-text-opacity: 1;\n  color: rgb(152 162 179 / var(--tw-text-opacity));\n}\n\n.UdtZjVcKKTzm4xmwxe2X {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n\n.kGKdRuE00Eu43wwfe58C {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(242 244 247 / var(--tw-border-opacity));\n}\n","",{version:3,sources:["webpack://./src/pickleball/ResultCard/ResultCard.module.css"],names:[],mappings:"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",sourcesContent:[".wrapper {\n  @apply w-full border-b border-solid border-gray-200;\n}\n\n.header {\n  @apply flex w-full items-center justify-center rounded-t-xl text-xs font-semibold leading-[18px] tracking-normal text-white;\n}\n\n.link {\n  @apply line-clamp-1 hover:underline;\n}\n\n.content {\n  @apply flex flex-row justify-center;\n}\n\n.final {\n  @apply flex items-center justify-center px-2 text-center text-xs font-semibold leading-4 tracking-normal text-gray-900;\n  @apply sm:px-[26px];\n}\n\n/* MatchSide classes */\n\n.match__side {\n  flex: 1 1 0px;\n  @apply flex shrink-0 overflow-hidden;\n  @apply sm:justify-end;\n}\n\n.match__side--reversed {\n  @apply flex-row-reverse;\n}\n\n.match__side--not-reversed {\n  @apply flex-row;\n}\n\n.match__side--duo {\n  @apply gap-1 sm:gap-4;\n}\n\n.match__side--solo {\n  @apply justify-center sm:justify-end;\n}\n\n.team__info {\n  @apply flex w-full gap-2.5;\n}\n\n.team__info--reversed {\n  @apply flex-row-reverse;\n}\n\n.team__info--not-reversed {\n  @apply flex-row;\n}\n\n.team__info--duo {\n  @apply justify-center;\n}\n\n.team__info--solo {\n  @apply justify-center;\n}\n\n.team__container {\n  @apply relative flex flex-col justify-center py-[7px] sm:py-3.5;\n}\n\n.team__container--winner {\n  @apply sm:pb-0;\n}\n\n.team__container--duo {\n  @apply py-[9px] gap-1;\n}\n\n.trophy {\n  @apply hidden items-center;\n  @apply sm:flex;\n}\n\n.player__info {\n  @apply flex w-full items-center justify-end;\n  @apply sm:gap-2;\n}\n\n.player__info--reversed-duo {\n  @apply gap-1 flex-row-reverse;\n  @apply sm:flex-row-reverse;\n}\n\n.player__info--reversed-solo {\n  @apply gap-0 flex-col-reverse;\n  @apply sm:gap-2 sm:flex-row-reverse;\n}\n\n.player__info--not-reversed-duo {\n  @apply gap-1 flex-row;\n  @apply sm:flex-row;\n}\n\n.player__info--not-reversed-solo {\n  @apply gap-0 flex-col-reverse;\n  @apply sm:gap-2 sm:flex-row;\n}\n\n.name {\n  @apply line-clamp-1;\n}\n\n.first__name {\n  @apply text-xs leading-[18px] tracking-normal;\n  @apply sm:text-sm sm:font-normal sm:leading-5;\n}\n\n.last__name {\n  @apply text-xs font-semibold leading-[18px] tracking-normal;\n  @apply sm:text-sm sm:font-bold sm:leading-5\n}\n\n.player__image {\n  @apply relative flex items-center justify-center overflow-hidden rounded-full border border-solid border-gray-300 bg-white p-0;\n}\n\n.player__image--duo {\n  @apply w-6 h-6;\n}\n\n.player__image--solo {\n  @apply w-8 h-8;\n  @apply sm:w-10 sm:h-10;\n}\n\n.player__img {\n  @apply object-cover;\n}\n\n.winner {\n  @apply hidden text-left text-[10px] font-semibold leading-4 tracking-normal text-success-600;\n  @apply sm:block;\n}\n\n.winner--team2 {\n  @apply text-right;\n}\n\n.winner--reversed-duo {\n  @apply left-8 -bottom-0.5;\n}\n\n.winner--not-reversed-duo {\n  @apply right-8 top-full;\n}\n\n.set__wrapper {\n  @apply flex justify-end;\n}\n\n.set__wrapper--reversed {\n  @apply flex-row-reverse;\n}\n\n.set__wrapper--not-reversed {\n  @apply flex-row;\n}\n\n.set {\n  @apply flex min-w-[20px] items-center justify-center text-center text-sm font-bold leading-5 tracking-normal;\n  @apply sm:min-w-[26px];\n}\n\n.set--winner {\n  @apply bg-success-50;\n}\n\n.set--loser {\n  @apply bg-white;\n}\n\n.gray__bg {\n  @apply sm:!bg-gray-100;\n}\n\n.white__bg {\n  @apply sm:!bg-white;\n}\n\n.green__txt {\n  @apply text-success-600;\n}\n\n.gray__txt {\n  @apply text-gray-400;\n}\n\n.winner__middle {\n  @apply border-x border-solid border-white;\n}\n\n.loser__middle {\n  @apply border-x border-solid border-gray-100;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"XpvkEbmbCxPz8OZ6qvBo",header:"hjDdJqfbRAHz5CCpEZ3Q",link:"neBCDExp0w2nFlVP11BA",content:"cK5krSgFnAvII68ImTks",final:"Ebfwx0d7Q5r5D5oxMmIm",match__side:"cguHKRcomZV0LBv65jHy","match__side--reversed":"ZzYGXorB0fb9Op57Im0m","match__side--not-reversed":"zAWjIrs_4NBfapWuIVLM","match__side--duo":"shhBpmRXOAvGKjA5qaE3","match__side--solo":"zj8VK201g4JfbHdxUZp2",team__info:"R9EGuL7qbWVrGyOZAHTw","team__info--reversed":"hk30eHgd0Rz86UQXAymH","team__info--not-reversed":"VrAc08lB4SE_egxdQUlJ","team__info--duo":"Cuksrgaqu6jjNUMc17zx","team__info--solo":"_nAkB7dvyDAc7MyiYhHp",team__container:"vxx8AHihhbwJJyLWmhpW","team__container--winner":"tlSjQhby1bXPVEKwHBRO","team__container--duo":"_XG3QrAOJSI0JKjuDKet",trophy:"jeXRZJ9kziZvAfBalVxP",player__info:"jJ4dT411yq8epicZXb8h","player__info--reversed-duo":"beJokVdBtg0nvC8fVlP5","player__info--reversed-solo":"Tcv3LvYDFr51GoRrKvyb","player__info--not-reversed-duo":"M6Tz9mEkQrtRwa1mktk9","player__info--not-reversed-solo":"_42vChaDrLxu7xYOXW7w",name:"uXsSvPr8TbdXmujMVOof",first__name:"WvT01wX0xT8R5Yn6D3p7",last__name:"vZoKP14EeQphAmtPuiOw",player__image:"EjMaXNYK5XxBFZetId2b","player__image--duo":"cxboBqUHqb32hZ8JxDb5","player__image--solo":"n8PDuTvxLukJ6EjJLFTP",player__img:"ct8BONbhlbuvMOdnU04s",winner:"NnS5OzfSGNkCPIhaS56L","winner--team2":"h4rWZvxUh6vf6RNZMo6Q","winner--reversed-duo":"IrcGL_fgZiqLJBKofUSN","winner--not-reversed-duo":"sXgFzHkKCfBY0UkRBUxL",set__wrapper:"ijKgvqPgYgSeXaABhLfd","set__wrapper--reversed":"LkJdr_G9Nz3K_a6N3LJ1","set__wrapper--not-reversed":"U6PAPJWsFV6YgY9l7OHG",set:"zIXMFdwg68DaZcZbOvcA","set--winner":"vtSIWBkk_5gakQepYHUw","set--loser":"RhhUy9CT0yMiN4ghWO4W",gray__bg:"JbFU9Nu2r7xc7TZVuV2R",white__bg:"IV_SzeSqJB1dGg3I3L__",green__txt:"w_SFiFCHa_DPbnkf1hH9",gray__txt:"Eighq29oXjwdXKcoIZxg",winner__middle:"UdtZjVcKKTzm4xmwxe2X",loser__middle:"kGKdRuE00Eu43wwfe58C"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);