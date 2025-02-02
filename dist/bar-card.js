function e(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${n}--\x3e`,a=new RegExp(`${n}|${o}`),r="$lit$";class s{constructor(e,t){this.parts=[],this.element=t;const i=[],o=[],s=document.createTreeWalker(t.content,133,null,!1);let l=0,p=-1,u=0;const{strings:g,values:{length:m}}=e;for(;u<m;){const e=s.nextNode();if(null!==e){if(p++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let n=0;for(let e=0;e<i;e++)c(t[e].name,r)&&n++;for(;n-- >0;){const t=g[u],i=h.exec(t)[2],n=i.toLowerCase()+r,o=e.getAttribute(n);e.removeAttribute(n);const s=o.split(a);this.parts.push({type:"attribute",index:p,name:i,strings:s}),u+=s.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const n=e.parentNode,o=t.split(a),s=o.length-1;for(let t=0;t<s;t++){let i,a=o[t];if(""===a)i=d();else{const e=h.exec(a);null!==e&&c(e[2],r)&&(a=a.slice(0,e.index)+e[1]+e[2].slice(0,-5)+e[3]),i=document.createTextNode(a)}n.insertBefore(i,e),this.parts.push({type:"node",index:++p})}""===o[s]?(n.insertBefore(d(),e),i.push(e)):e.data=o[s],u+=s}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&p!==l||(p++,t.insertBefore(d(),e)),l=p,this.parts.push({type:"node",index:p}),null===e.nextSibling?e.data="":(i.push(e),p--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),u++}}else s.currentNode=o.pop()}for(const e of i)e.parentNode.removeChild(e)}}const c=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},l=e=>-1!==e.index,d=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){const{element:{content:i},parts:n}=e,o=document.createTreeWalker(i,133,null,!1);let a=g(n),r=n[a],s=-1,c=0;const l=[];let d=null;for(;o.nextNode();){s++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==r&&r.index===s;)r.index=null!==d?-1:r.index-c,a=g(n,a),r=n[a]}l.forEach((e=>e.parentNode.removeChild(e)))}const u=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},g=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(l(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=e=>"function"==typeof e&&m.has(e),v={},b={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let a,r=0,s=0,c=o.nextNode();for(;r<n.length;)if(a=n[r],l(a)){for(;s<a.index;)s++,"TEMPLATE"===c.nodeName&&(i.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=i.pop(),c=o.nextNode());if("node"===a.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,a.name,a.strings,this.options));r++}else this.__parts.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),$=` ${n} `;class w{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let a=0;a<e;a++){const e=this.strings[a],s=e.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===e.indexOf("--\x3e",s+1);const c=h.exec(e);t+=null===c?e+(i?$:o):e.substr(0,c.index)+c[1]+c[2]+r+c[3]+n}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==_&&(t=_.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class A{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new k(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!S(e))return e}let n="";for(let o=0;o<t;o++){n+=e[o];const t=i[o];if(void 0!==t){const e=t.value;if(x(e)||!S(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===v||x(e)&&e===this.value||(this.value=e,f(e)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const e=this.value;this.value=v,e(this)}this.value!==v&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}const e=this.__pendingValue;e!==v&&(x(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===b?(this.value=b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const i=new y(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const o of e)i=t[n],void 0===i&&(i=new C(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(o),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=v}}class N extends A{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends k{}let P=!1;(()=>{try{const e={get capture(){return P=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class T{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=j(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=v}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const j=e=>e&&(P?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function V(e){let t=U.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},U.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(n);return i=t.keyString.get(o),void 0===i&&(i=new s(e,e.getTemplateElement()),t.keyString.set(o,i)),t.stringsArray.set(e.strings,i),i}const U=new Map,I=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const z=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,n){const o=t[0];if("."===o){return new N(e,t.slice(1),i).parts}if("@"===o)return[new T(e,t.slice(1),n.eventContext)];if("?"===o)return[new E(e,t.slice(1),i)];return new A(e,t,i).parts}handleTextExpression(e){return new C(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const R=(e,...t)=>new w(e,t,"html",z)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,M=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const B=e=>t=>{const i=M(t.type,e);let o=U.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},U.set(i,o));let a=o.stringsArray.get(t.strings);if(void 0!==a)return a;const r=t.strings.join(n);if(a=o.keyString.get(r),void 0===a){const i=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(i,e),a=new s(t,i),o.keyString.set(r,a)}return o.stringsArray.set(t.strings,a),a},D=["html","svg"],H=new Set,q=(e,t,i)=>{H.add(e);const n=i?i.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:a}=o;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(n,e);const r=document.createElement("style");for(let e=0;e<a;e++){const t=o[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{D.forEach((t=>{const i=U.get(M(t,e));void 0!==i&&i.keyString.forEach((e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{i.add(e)})),p(e,i)}))}))})(e);const s=n.content;i?function(e,t,i=null){const{element:{content:n},parts:o}=e;if(null==i)return void n.appendChild(t);const a=document.createTreeWalker(n,133,null,!1);let r=g(o),s=0,c=-1;for(;a.nextNode();)for(c++,a.currentNode===i&&(s=u(t),i.parentNode.insertBefore(t,i));-1!==r&&o[r].index===c;){if(s>0){for(;-1!==r;)o[r].index+=s,r=g(o,r);return}r=g(o,r)}}(i,r,s.firstChild):s.insertBefore(r,s.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const c=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){s.insertBefore(r,s.firstChild);const e=new Set;e.add(r),p(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:W},X="finalized";class Y extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,i)=>{const n=this._attributeNameForProperty(i,t);void 0!==n&&(this._attributeToPropertyMap.set(n,i),e.push(n))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdateInternal(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||J}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(X)||e.finalize(),this[X]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=W){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,n=t.converter||F,o="function"==typeof n?n:n.fromAttribute;return o?o(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,n=t.converter;return(n&&n.toAttribute||F.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=J){const n=this.constructor,o=n._attributeNameForProperty(e,i);if(void 0!==o){const e=n._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(e);if(void 0!==n){const e=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let n=!0;if(void 0!==e){const o=this.constructor;i=i||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Y[X]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const G=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),K=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function Q(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):K(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Z=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ie=(e,...t)=>{const i=t.reduce(((t,i,n)=>t+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[n+1]),e[0]);return new te(i,ee)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const ne={};class oe extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight(((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e)),i),i=t(e,new Set),n=[];i.forEach((e=>n.unshift(e))),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!Z){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new te(String(t),ee)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ne&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return ne}}var ae,re,se;function ce(e){return e.substr(0,e.indexOf("."))}oe.finalized=!0,oe.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const o=n.scopeName,a=I.has(t),r=L&&11===t.nodeType&&!!t.host,s=r&&!H.has(o),c=s?document.createDocumentFragment():t;if(((e,t,n)=>{let o=I.get(t);void 0===o&&(i(t,t.firstChild),I.set(t,o=new C(Object.assign({templateFactory:V},n))),o.appendInto(t)),o.setValue(e),o.commit()})(e,c,Object.assign({templateFactory:B(o)},n)),s){const e=I.get(c);I.delete(c);const n=e.value instanceof y?e.value.template:void 0;q(o,c,n),i(t,t.firstChild),t.appendChild(c),I.set(t,e)}!a&&r&&window.ShadyCSS.styleElement(t.host)},oe.shadowRootOptions={mode:"open"},(se=ae||(ae={})).language="language",se.system="system",se.comma_decimal="comma_decimal",se.decimal_comma="decimal_comma",se.space_comma="space_comma",se.none="none",function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(re||(re={}));var le=["closed","locked","off"],de=function(e,t,i,n){n=n||{},i=null==i?{}:i;var o=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,e.dispatchEvent(o),o},he={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function pe(e,t){if(e in he)return he[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return t&&"off"===t?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===t?"mdi:window-closed":"mdi:window-open";case"lock":return t&&"unlocked"===t?"mdi:lock-open":"mdi:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"mdi:cast-connected":"mdi:cast";case"zwave":switch(t){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"mdi:bookmark"}}var ue=function(e){de(window,"haptic",e)},ge=function(e,t){return function(e,t,i){void 0===i&&(i=!0);var n,o=ce(t),a="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}return e.callService(a,n,{entity_id:t})}(e,t,le.includes(e.states[t].state))},me=function(e,t,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||(ue("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&de(e,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),de(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(ge(t,i.entity),ue("success"));break;case"call-service":if(!n.service)return void ue("failure");var o=n.service.split(".",2);t.callService(o[0],o[1],n.service_data,n.target),ue("success");break;case"fire-dom-event":de(e,"ll-custom",n)}};function fe(e){return void 0!==e&&"none"!==e.action}function ve(...e){const t=e=>e&&"object"==typeof e;return e.reduce(((e,i)=>(Object.keys(i).forEach((n=>{const o=e[n],a=i[n];Array.isArray(o)&&Array.isArray(a)?e[n]=o.concat(...a):t(o)&&t(a)?e[n]=ve(o,a):e[n]=a})),e)),{})}function be(e,t,i){if(t.has("config")||i)return!0;for(const i of e._configArray)if(i.entity){const n=t.get("hass");if(n){if(n.states[i.entity]!==e.hass.states[i.entity])return!0;if(isNaN(i.target)&&n.states[i.target]!==e.hass.states[i.target])return!0;if(isNaN(i.min)&&n.states[i.min]!==e.hass.states[i.min])return!0;if(isNaN(i.max)&&n.states[i.max]!==e.hass.states[i.max])return!0;continue}return!0}return!1}function ye(e,t,i){const n=e[t],o=e.slice();return o.splice(t,1),o.splice(i,0,n),o}function _e(e,t){return void 0===t?NaN:"number"==typeof t?t:void 0!==e&&e.states[t]?Number(e.states[t].state):NaN}let $e=class extends oe{constructor(){super(...arguments),this._configArray=[],this._entityOptionsArray=[]}shouldUpdate(e){return be(this,e,!0)}setConfig(e){this._config=Object.assign({},e),e.entity||e.entities||(this._config.entity="none"),this._config.entity&&(this._configArray.push({entity:e.entity}),this._config.entities=[{entity:e.entity}],delete this._config.entity),this._configArray=function(e){const t=[];if(e.entities){for(const i of e.entities)if("string"==typeof i){const e=ve({},{entity:i});t.push(e)}else if("object"==typeof i){const e=ve({},i);t.push(e)}}else t.push(e);return t}(this._config),this._config.animation&&0===Object.entries(this._config.animation).length&&(delete this._config.animation,de(this,"config-changed",{config:this._config})),this._config.positions&&0===Object.entries(this._config.positions).length&&(delete this._config.positions,de(this,"config-changed",{config:this._config}));for(const e of this._configArray)e.animation&&0===Object.entries(e.animation).length&&delete e.animation,e.positions&&0===Object.entries(e.positions).length&&delete e.positions;this._config.entities=this._configArray,de(this,"config-changed",{config:this._config});const t={icon:"format-list-numbered",name:"Bar",secondary:"Bar settings.",show:!1},i={icon:"numeric",name:"Value",secondary:"Value settings.",show:!1},n={icon:"card-bulleted",name:"Card",secondary:"Card settings.",show:!1},o={icon:"arrow-expand-horizontal",name:"Positions",secondary:"Set positions of card elements.",show:!1},a={icon:"exclamation-thick",name:"Severity",secondary:"Define bar colors based on value.",show:!1},r={icon:"animation",name:"Animation",secondary:"Define animation settings.",show:!1},s={show:!1,options:{positions:Object.assign({},o),bar:Object.assign({},t),value:Object.assign({},i),severity:Object.assign({},a),actions:Object.assign({},{icon:"gesture-tap",name:"Actions",secondary:"Coming soon... Use code editor for Actions.",show:!1}),animation:Object.assign({},r)}};for(const e of this._configArray)this._entityOptionsArray.push(Object.assign({},s));this._options||(this._options={entities:{icon:"tune",name:"Entities",secondary:"Manage card entities.",show:!0,options:{entities:this._entityOptionsArray}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the global name, icon, etc.",show:!1,options:{positions:o,bar:t,value:i,card:n,severity:a,animation:r}}})}render(){return R`${this._createEntitiesElement()} ${this._createAppearanceElement()}`}_createActionsElement(e){const t=this._options.entities.options.entities[e].options.actions;return R`
      <div class="sub-category" style="opacity: 0.5;">
        <div>
          <div class="row">
            <ha-icon .icon=${`mdi:${t.icon}`}></ha-icon>
            <div class="title">${t.name}</div>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
      </div>
    `}_createEntitiesValues(){if(!this.hass||!this._config)return[R``];const e=this._options.entities;Object.keys(this.hass.states);const t=[];for(const i of this._configArray){const n=this._configArray.indexOf(i);t.push(R`
        <div class="sub-category" style="display: flex; flex-direction: row; align-items: center;">
          <div style="display: flex; align-items: center; flex-direction: column;">
            <div
              style="font-size: 10px; margin-bottom: -8px; opacity: 0.5;"
              @click=${this._toggleThing}
              .options=${e.options.entities[n]}
              .optionsTarget=${e.options.entities}
              .index=${n}
            >
              options
            </div>
            <ha-icon
              icon="mdi:chevron-${e.options.entities[n].show?"up":"down"}"
              @click=${this._toggleThing}
              .options=${e.options.entities[n]}
              .optionsTarget=${e.options.entities}
              .index=${n}
            ></ha-icon>
          </div>
          <div class="value" style="flex-grow: 1;">
            <paper-input
              label="Entity"
              @value-changed=${this._valueChanged}
              .configAttribute=${"entity"}
              .configObject=${this._configArray[n]}
              .value=${i.entity}
            >
            </paper-input>
          </div>
          ${0!==n?R`
                <ha-icon
                  class="ha-icon-large"
                  icon="mdi:arrow-up"
                  @click=${this._moveEntity}
                  .configDirection=${"up"}
                  .configArray=${this._config.entities}
                  .arrayAttribute=${"entities"}
                  .arraySource=${this._config}
                  .index=${n}
                ></ha-icon>
              `:R`<ha-icon icon="mdi:arrow-up" style="opacity: 25%;" class="ha-icon-large"></ha-icon>`}
          ${n!==this._configArray.length-1?R`
                <ha-icon
                  class="ha-icon-large"
                  icon="mdi:arrow-down"
                  @click=${this._moveEntity}
                  .configDirection=${"down"}
                  .configArray=${this._config.entities}
                  .arrayAttribute=${"entities"}
                  .arraySource=${this._config}
                  .index=${n}
                ></ha-icon>
              `:R`<ha-icon icon="mdi:arrow-down" style="opacity: 25%;" class="ha-icon-large"></ha-icon>`}
          <ha-icon
            class="ha-icon-large"
            icon="mdi:close"
            @click=${this._removeEntity}
            .configAttribute=${"entity"}
            .configArray=${"entities"}
            .configIndex=${n}
          ></ha-icon>
        </div>
        ${e.options.entities[n].show?R`
              <div class="options">
                ${this._createBarElement(n)} ${this._createValueElement(n)}
                ${this._createPositionsElement(n)} ${this._createSeverityElement(n)}
                ${this._createAnimationElement(n)} ${this._createActionsElement(n)}
              </div>
            `:""}
      `)}return t}_createEntitiesElement(){if(!this.hass||!this._config)return R``;const e=this._options.entities;return R`
      <div class="card-config">
        <div class="option" @click=${this._toggleThing} .options=${e} .optionsTarget=${this._options}>
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?R`
              <div class="card-background" style="max-height: 400px; overflow: auto;">
                ${this._createEntitiesValues()}
                <div class="sub-category" style="display: flex; flex-direction: column; align-items: flex-end;">
                  <ha-fab
                    mini
                    icon="mdi:plus"
                    @click=${this._addEntity}
                    .configArray=${this._configArray}
                    .configAddValue=${"entity"}
                    .sourceArray=${this._config.entities}
                  ></ha-fab>
                </div>
              </div>
            `:""}
      </div>
    `}_createAppearanceElement(){if(!this.hass)return R``;const e=this._options.appearance;return R`
        <div class="option" @click=${this._toggleThing} .options=${e} .optionsTarget=${this._options}>
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon
              .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"}
              style="margin-left: auto;"
            ></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?R`
                <div class="card-background">
                  ${this._createCardElement()} ${this._createBarElement(null)} ${this._createValueElement(null)}
                  ${this._createPositionsElement(null)} ${this._createSeverityElement(null)}
                  ${this._createAnimationElement(null)}
                </div>
              `:""}
      </div>`}_createBarElement(e){let t,i;return null!==e?(t=this._options.entities.options.entities[e].options.bar,i=this._configArray[e]):(t=this._options.appearance.options.bar,i=this._config),R`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${t}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${t.icon}`}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?R`
              <div class="value">
                <div>
                  <paper-dropdown-menu
                    label="Direction"
                    @selected-item-changed=${this._valueChanged}
                    .configObject=${i}
                    .configAttribute=${"direction"}
                    .ignoreNull=${!0}
                  >
                    <paper-listbox
                      slot="dropdown-content"
                      attr-for-selected="item-name"
                      selected="${i.direction?i.direction:null}"
                    >
                      <paper-item item-name="right">right</paper-item>
                      <paper-item item-name="up">up</paper-item>
                    </paper-listbox>
                  </paper-dropdown-menu>
                  ${i.direction?R`
                        <ha-icon
                          class="ha-icon-large"
                          icon="mdi:close"
                          @click=${this._valueChanged}
                          .value=${""}
                          .configAttribute=${"direction"}
                          .configObject=${i}
                        ></ha-icon>
                      `:""}
                </div>
                ${null!==e?R`
                      <paper-input
                        label="Name"
                        .value="${i.name?i.name:""}"
                        editable
                        .configAttribute=${"name"}
                        .configObject=${i}
                        @value-changed=${this._valueChanged}
                      ></paper-input>
                    `:""}
                <paper-input
                  label="Icon"
                  .value="${i.icon?i.icon:""}"
                  editable
                  .configAttribute=${"icon"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Height"
                  .value="${i.height?i.height:""}"
                  editable
                  .configAttribute=${"height"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Width"
                  .value="${i.width?i.width:""}"
                  editable
                  .configAttribute=${"width"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Color"
                  .value="${i.color?i.color:""}"
                  editable
                  .configAttribute=${"color"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `:""}
      </div>
    `}_createAnimationElement(e){let t,i;return null!==e?(t=this._options.entities.options.entities[e].options.animation,i=this._configArray[e]):(t=this._options.appearance.options.animation,i=this._config),i.animation=Object.assign({},i.animation),R`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${t}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${t.icon}`}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?i.animation?R`
                <div class="value">
                  <div>
                    <paper-dropdown-menu
                      label="State"
                      @selected-item-changed=${this._valueChanged}
                      .configAttribute=${"state"}
                      .configObject=${i.animation}
                      .index=${e}
                      .ignoreNull=${!0}
                    >
                      <paper-listbox
                        slot="dropdown-content"
                        attr-for-selected="item-name"
                        selected="${i.animation.state?i.animation.state:null}"
                      >
                        <paper-item item-name="on">on</paper-item>
                        <paper-item item-name="off">off</paper-item>
                      </paper-listbox>
                    </paper-dropdown-menu>
                    ${i.animation.state?R`
                          <ha-icon
                            class="ha-icon-large"
                            icon="mdi:close"
                            @click=${this._valueChanged}
                            .value=${""}
                            .configAttribute=${"state"}
                            .configObject=${i.animation}
                            .index=${e}
                          ></ha-icon>
                        `:""}
                  </div>
                  <paper-input
                    label="Speed"
                    .value="${i.animation.speed?i.animation.speed:""}"
                    editable
                    @value-changed=${this._valueChanged}
                    .configAttribute=${"speed"}
                    .configObject=${i.animation}
                    .index=${e}
                  ></paper-input>
                </div>
              `:R`
                <div class="value">
                  <div>
                    <paper-dropdown-menu
                      label="State"
                      @selected-item-changed=${this._valueChanged}
                      .configObject=${i}
                      .configAttribute=${"state"}
                      .configAdd=${"animation"}
                      .index=${e}
                      .ignoreNull=${!0}
                    >
                      <paper-listbox slot="dropdown-content" attr-for-selected="item-name">
                        <paper-item item-name="on">on</paper-item>
                        <paper-item item-name="off">off</paper-item>
                      </paper-listbox>
                    </paper-dropdown-menu>
                  </div>
                  <paper-input
                    label="Speed"
                    editable
                    .value=${""}
                    @value-changed=${this._valueChanged}
                    .configAttribute=${"speed"}
                    .configObject=${i}
                    .configAdd=${"animation"}
                    .index=${e}
                  ></paper-input>
                </div>
              `:""}
      </div>
    `}_createSeverityElement(e){let t,i;null!==e?(t=this._options.entities.options.entities[e].options.severity,i=this._configArray[e]):(t=this._options.appearance.options.severity,i=this._config);const n=i.severity?i.severity.length:0;return R`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${t}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${t.icon}`}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?R`
              <div class="card-background" style="overflow: auto; max-height: 420px;">
                ${n>0?R`${this._createSeverityValues(e)}`:""}
                <div class="sub-category" style="display: flex; flex-direction: column; align-items: flex-end;">
                  <ha-fab mini icon="mdi:plus" @click=${this._addSeverity} .index=${e}></ha-fab>
                </div>
              </div>
            `:""}
      </div>
    `}_createSeverityValues(e){let t;t=null===e?this._config:this._configArray[e];const i=[];for(const n of t.severity){const o=t.severity.indexOf(n);i.push(R`
        <div class="sub-category" style="display: flex; flex-direction: row; align-items: center;">
          <div class="value">
            <div style="display:flex;">
              <paper-input
                label="From"
                type="number"
                .value="${n.from||0===n.from?n.from:""}"
                editable
                .severityAttribute=${"from"}
                .index=${e}
                .severityIndex=${o}
                @value-changed=${this._updateSeverity}
              ></paper-input>
              <paper-input
                label="To"
                type="number"
                .value="${n.to?n.to:""}"
                editable
                .severityAttribute=${"to"}
                .index=${e}
                .severityIndex=${o}
                @value-changed=${this._updateSeverity}
              ></paper-input>
            </div>
            <div style="display:flex;">
              <paper-input
                label="Color"
                .value="${n.color?n.color:""}"
                editable
                .severityAttribute=${"color"}
                .index=${e}
                .severityIndex=${o}
                @value-changed=${this._updateSeverity}
              ></paper-input>
              <paper-input
                label="Icon"
                .value="${n.icon?n.icon:""}"
                editable
                .severityAttribute=${"icon"}
                .index=${e}
                .severityIndex=${o}
                @value-changed=${this._updateSeverity}
              ></paper-input>
            </div>
            ${n.hide?R`
                  <ha-switch
                    checked
                    .severityAttribute=${"hide"}
                    .index=${e}
                    .severityIndex=${o}
                    .value=${!n.hide}
                    @change=${this._updateSeverity}
                    >Hide</ha-switch
                  >
                `:R`
                  <ha-switch
                    unchecked
                    .severityAttribute=${"hide"}
                    .index=${e}
                    .severityIndex=${o}
                    .value=${!n.hide}
                    @change=${this._updateSeverity}
                    >Hide</ha-switch
                  >
                `}
          </div>
          <div style="display: flex;">
            ${0!==o?R`
                  <ha-icon
                    class="ha-icon-large"
                    icon="mdi:arrow-up"
                    @click=${this._moveSeverity}
                    .configDirection=${"up"}
                    .index=${e}
                    .severityIndex=${o}
                  ></ha-icon>
                `:R`<ha-icon icon="mdi:arrow-up" style="opacity: 25%;" class="ha-icon-large"></ha-icon>`}
            ${o!==t.severity.length-1?R`
                  <ha-icon
                    class="ha-icon-large"
                    icon="mdi:arrow-down"
                    @click=${this._moveSeverity}
                    .configDirection=${"down"}
                    .index=${e}
                    .severityIndex=${o}
                  ></ha-icon>
                `:R`<ha-icon icon="mdi:arrow-down" style="opacity: 25%;" class="ha-icon-large"></ha-icon>`}
            <ha-icon
              class="ha-icon-large"
              icon="mdi:close"
              @click=${this._removeSeverity}
              .index=${e}
              .severityIndex=${o}
            ></ha-icon>
          </div>
        </div>
      `)}return i}_createCardElement(){if(!this.hass)return R``;const e=this._config,t=this._options.appearance.options.card;return R`
      <div class="category" id="card">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${t}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${t.icon}`}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?R`
              <div class="value-container">
                <paper-input
                  editable
                  label="Header Title"
                  .value="${e.title?e.title:""}"
                  .configObject=${e}
                  .configAttribute=${"title"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Columns"
                  .value=${e.columns?e.columns:""}
                  .configObject=${e}
                  .configAttribute=${"columns"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <div>
                  ${e.entity_row?R`
                        <ha-switch
                          checked
                          .configAttribute=${"entity_row"}
                          .configObject=${e}
                          .value=${!e.entity_row}
                          @change=${this._valueChanged}
                          >Entity Row</ha-switch
                        >
                      `:R`
                        <ha-switch
                          unchecked
                          .configAttribute=${"entity_row"}
                          .configObject=${e}
                          .value=${!e.entity_row}
                          @change=${this._valueChanged}
                          >Entity Row</ha-switch
                        >
                      `}
                </div>
              </div>
            `:""}
      </div>
    `}_createPositionsValues(e){let t;t=null===e?this._config:this._configArray[e],t.positions=Object.assign({},t.positions);const i=[],n=Object.keys({icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"});for(const e of n)t.positions[e]?i.push(R`
          <div class="value">
            <paper-dropdown-menu
              label="${e}"
              @value-changed=${this._valueChanged}
              .configAttribute=${e}
              .configObject=${t.positions}
              .ignoreNull=${!0}
            >
              <paper-listbox
                slot="dropdown-content"
                attr-for-selected="item-name"
                .selected=${t.positions[e]}
              >
                <paper-item item-name="inside">inside</paper-item>
                <paper-item item-name="outside">outside</paper-item>
                <paper-item item-name="off">off</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
            <ha-icon
              class="ha-icon-large"
              icon="mdi:close"
              @click=${this._valueChanged}
              .value=${""}
              .configAttribute=${e}
              .configObject=${t.positions}
            ></ha-icon>
          </div>
        `):i.push(R`
          <div class="value">
            <paper-dropdown-menu
              label="${e}"
              @value-changed=${this._valueChanged}
              .configAttribute=${e}
              .configObject=${t.positions}
            >
              <paper-listbox slot="dropdown-content" .selected=${null}>
                <paper-item>inside</paper-item>
                <paper-item>outside</paper-item>
                <paper-item>off</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
        `);return i}_createPositionsElement(e){if(!this.hass)return R``;let t;return null===e?(t=this._options.appearance.options.positions,this._config):(t=this._options.entities.options.entities[e].options.positions,this._configArray[e]),R`
      <div class="category">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${t}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${t.icon}`}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?R`${this._createPositionsValues(e)}`:""}
      </div>
    `}_createValueElement(e){if(!this.hass)return R``;let t,i;return null!==e?(t=this._options.entities.options.entities[e].options.value,i=this._configArray[e]):(t=this._options.appearance.options.value,i=this._config),R`
      <div class="category" id="value">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${t}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${t.icon}`}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?R`
              <div class="value">
                ${i.limit_value?R`
                      <ha-switch
                        checked
                        .configAttribute=${"limit_value"}
                        .configObject=${i}
                        .value=${!i.limit_value}
                        @change=${this._valueChanged}
                        >Limit Value</ha-switch
                      >
                    `:R`
                      <ha-switch
                        unchecked
                        .configObject=${i}
                        .configAttribute=${"limit_value"}
                        .value=${!i.limit_value}
                        @change=${this._valueChanged}
                        >Limit Value</ha-switch
                      >
                    `}
                ${i.complementary?R`
                      <ha-switch
                        checked
                        .configAttribute=${"complementary"}
                        .configObject=${i}
                        .value=${!i.complementary}
                        @change=${this._valueChanged}
                        >Complementary</ha-switch
                      >
                    `:R`
                      <ha-switch
                        unchecked
                        .configObject=${i}
                        .configAttribute=${"complementary"}
                        .value=${!i.complementary}
                        @change=${this._valueChanged}
                        >Complementary</ha-switch
                      >
                    `}
                <paper-input
                  class="value-number"
                  label="Decimal"
                  type="number"
                  .value="${i.decimal?i.decimal:""}"
                  editable
                  .configAttribute=${"decimal"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Min"
                  .value="${i.min?i.min:""}"
                  editable
                  .configAttribute=${"min"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Max"
                  .value="${i.max?i.max:""}"
                  editable
                  .configAttribute=${"max"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Target"
                  .value="${i.target?i.target:""}"
                  editable
                  .configAttribute=${"target"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Unit of Measurement"
                  .value="${i.unit_of_measurement?i.unit_of_measurement:""}"
                  editable
                  .configAttribute=${"unit_of_measurement"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Attribute"
                  .value="${i.attribute?i.attribute:""}"
                  editable
                  .configAttribute=${"attribute"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `:""}
      </div>
    `}_toggleThing(e){const t=e.target.options,i=!t.show;if(e.target.optionsTarget)if(Array.isArray(e.target.optionsTarget))for(const t of e.target.optionsTarget)t.show=!1;else for(const[t]of Object.entries(e.target.optionsTarget))e.target.optionsTarget[t].show=!1;t.show=i,this._toggle=!this._toggle}_addEntity(e){if(!this._config||!this.hass)return;const t=e.target;let i;i=t.configAddObject?t.configAddObject:{[t.configAddValue]:""};const n=t.configArray.slice();n.push(i),this._config.entities=n,de(this,"config-changed",{config:this._config})}_moveEntity(e){if(!this._config||!this.hass)return;const t=e.target;let i=t.configArray.slice();"up"==t.configDirection?i=ye(i,t.index,t.index-1):"down"==t.configDirection&&(i=ye(i,t.index,t.index+1)),this._config.entities=i,de(this,"config-changed",{config:this._config})}_removeEntity(e){if(!this._config||!this.hass)return;const t=e.target,i=[];let n=0;for(const e of this._configArray)t.configIndex!==n&&i.push(e),n++;const o={[t.configArray]:i};this._config=Object.assign(this._config,o),de(this,"config-changed",{config:this._config})}_addSeverity(e){if(!this._config||!this.hass)return;const t=e.target;let i;i=null===t.index?this._config.severity:this._config.entities[t.index].severity,i||(i=[]);const n=i.slice();n.push({from:"",to:"",color:""}),null===t.index?this._config.severity=n:this._configArray[t.index].severity=n,this._config.entities=this._configArray,de(this,"config-changed",{config:this._config})}_moveSeverity(e){if(!this._config||!this.hass)return;const t=e.target;let i;i=null===t.index?this._config.severity:this._config.entities[t.index].severity;let n=i.slice();"up"==t.configDirection?n=ye(n,t.severityIndex,t.severityIndex-1):"down"==t.configDirection&&(n=ye(n,t.severityIndex,t.severityIndex+1)),null===t.index?this._config.severity=n:this._configArray[t.index].severity=n,this._config.entities=this._configArray,de(this,"config-changed",{config:this._config})}_removeSeverity(e){if(!this._config||!this.hass)return;const t=e.target;let i;i=null===t.index?this._config.severity:this._configArray[t.index].severity;const n=i.slice(),o=[];let a=0;for(const e of n)t.severityIndex!==a&&o.push(n[a]),a++;null===t.index?0===o.length?delete this._config.severity:this._config.severity=o:0===o.length?delete this._configArray[t.index].severity:this._configArray[t.index].severity=o,this._config.entities=this._configArray,de(this,"config-changed",{config:this._config})}_updateSeverity(e){const t=e.target;let i;i=null===t.index?this._config.severity:this._configArray[t.index].severity;const n=[];for(const e in i)if(t.severityIndex==e){const o=Object.assign({},i[e]),a={[t.severityAttribute]:t.value},r=Object.assign(o,a);""==t.value&&delete r[t.severityAttribute],n.push(r)}else n.push(i[e]);null===t.index?this._config.severity=n:this._configArray[t.index].severity=n,this._config.entities=this._configArray,de(this,"config-changed",{config:this._config})}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;if(t.configObject[t.configAttribute]!=t.value){if(t.configAdd&&""!==t.value&&(t.configObject=Object.assign(t.configObject,{[t.configAdd]:{[t.configAttribute]:t.value}})),t.configAttribute&&t.configObject&&!t.configAdd)if(""==t.value||!1===t.value){if(1==t.ignoreNull)return;delete t.configObject[t.configAttribute]}else console.log(t.configObject),t.configObject[t.configAttribute]=t.value;this._config.entities=this._configArray,de(this,"config-changed",{config:this._config})}}static get styles(){return ie`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .options {
        background: var(--primary-background-color);
        border-radius: var(--ha-card-border-radius);
        cursor: pointer;
        padding: 8px;
      }
      .sub-category {
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
        margin-top: 14px;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .value {
        padding: 0px 8px;
      }
      .value-container {
        padding: 0px 8px;
        transition: all 0.5s ease-in-out;
      }
      .value-container:target {
        height: 50px;
      }
      .value-number {
        width: 100px;
      }
      ha-fab {
        margin: 8px;
      }
      ha-switch {
        padding: 16px 0;
      }
      .card-background {
        background: var(--paper-card-background-color);
        border-radius: var(--ha-card-border-radius);
        padding: 8px;
      }
      .category {
        background: #0000;
      }
      .ha-icon-large {
        cursor: pointer;
        margin: 0px 4px;
      }
    `}};e([Q()],$e.prototype,"hass",void 0),e([Q()],$e.prototype,"_config",void 0),e([Q()],$e.prototype,"_toggle",void 0),$e=e([G("bar-card-editor")],$e),window.customCards=window.customCards||[],window.customCards.push({type:"bar-card",name:"Bar Card Unofficial",preview:!1,description:"A customizable bar card."});const we="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class xe extends HTMLElement{constructor(){super(),this.holdTime=500,this.ripple=document.createElement("mwc-ripple"),this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:we?"100px":"50px",height:we?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((e=>{document.addEventListener(e,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(e,t){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",(e=>{const t=e||window.event;t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1}));const i=e=>{if(this.cooldownStart)return;let t,i;this.held=!1,e.touches?(t=e.touches[0].pageX,i=e.touches[0].pageY):(t=e.pageX,i=e.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(t,i),this.held=!0}),this.holdTime),this.cooldownStart=!0,window.setTimeout((()=>this.cooldownStart=!1),100)},n=i=>{this.cooldownEnd||["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?de(e,"action",{action:"hold"}):t.hasDoubleTap?1===i.detail||"keyup"===i.type?this.dblClickTimeout=window.setTimeout((()=>{de(e,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),de(e,"action",{action:"double_tap"})):de(e,"action",{action:"tap"}),this.cooldownEnd=!0,window.setTimeout((()=>this.cooldownEnd=!1),100))};e.addEventListener("touchstart",i,{passive:!0}),e.addEventListener("touchend",n),e.addEventListener("touchcancel",n),e.addEventListener("keyup",(e=>{if(13===e.keyCode)return n(e)}));/iPhone OS 13_/.test(window.navigator.userAgent)||(e.addEventListener("mousedown",i,{passive:!0}),e.addEventListener("click",n))}startAnimation(e,t){Object.assign(this.style,{left:`${e}px`,top:`${t}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-bar",xe);const Se=(e,t)=>{const i=(()=>{const e=document.body;if(e.querySelector("action-handler-bar"))return e.querySelector("action-handler-bar");const t=document.createElement("action-handler-bar");return e.appendChild(t),t})();i&&i.bind(e,t)},Ae=(ke=(e={})=>t=>{Se(t.committer.element,e)},(...e)=>{const t=ke(...e);return m.set(t,!0),t});var ke;var Ce={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",entity_not_available:"Entity not available"},Ee={common:Ce},Ne={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Oe={common:Ne},Pe={en:Object.freeze({__proto__:null,common:Ce,default:Ee}),nb:Object.freeze({__proto__:null,common:Ne,default:Oe})};function Te(e,t="",i=""){const n=e.split(".")[0],o=e.split(".")[1],a=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");var r;try{r=Pe[a][n][o]}catch(e){r=Pe.en[n][o]}return void 0===r&&(r=Pe.en[n][o]),""!==t&&""!==i&&(r=r.replace(t,i)),r}const je=R`
  <style>
    .warning {
      display: block;
      color: black;
      background-color: #fce588;
      padding: 8px;
    }
    #states {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    #states > * {
      margin-bottom: 8px;
    }
    #states > :last-child {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    #states > :first-child {
      margin-top: 0px;
    }
    ha-card {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    bar-card-row {
      display: flex;
      flex-grow: 1;
    }
    bar-card-row > div {
      flex-basis: 100%;
    }
    bar-card-row:empty {
      display: none;
    }
    bar-card-card {
      display: flex;
      flex-basis: 100%;
      flex-direction: row;
      margin-right: 8px;
    }
    bar-card-card:last-child {
      margin-right: 0px;
    }
    bar-card-background {
      cursor: pointer;
      flex-grow: 1;
      position: relative;
    }
    bar-card-iconbar {
      color: var(--icon-color, var(--paper-item-icon-color));
      align-items: center;
      align-self: center;
      display: flex;
      height: 40px;
      justify-content: center;
      position: relative;
      width: 40px;
    }
    bar-card-currentbar,
    bar-card-backgroundbar,
    bar-card-contentbar,
    bar-card-targetbar,
    bar-card-animationbar {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: var(--bar-card-border-radius, var(--ha-card-border-radius));
    }
    bar-card-contentbar {
      align-items: center;
      color: var(--primary-text-color);
      display: flex;
      justify-content: flex-start;
    }
    .contentbar-direction-right {
      flex-direction: row;
    }
    .contentbar-direction-up {
      flex-direction: column;
    }
    bar-card-backgroundbar {
      background: var(--bar-color);
      filter: brightness(0.5);
      opacity: 0.25;
    }
    bar-card-currentbar {
      background: linear-gradient(
        to var(--bar-direction),
        var(--bar-color) var(--bar-percent),
        #0000 var(--bar-percent),
        #0000 var(--bar-percent)
      );
    }
    bar-card-targetbar {
      background: linear-gradient(
        to var(--bar-direction),
        #0000 var(--bar-percent),
        var(--bar-color) var(--bar-percent),
        var(--bar-color) var(--bar-target-percent),
        #0000 var(--bar-target-percent)
      );
      display: var(--target-display);
      filter: brightness(0.66);
      opacity: 0.33;
    }
    bar-card-markerbar {
      background: var(--bar-color);
      filter: brightness(0.75);
      opacity: 50%;
      position: absolute;
    }
    bar-card-animationbar {
      background-repeat: no-repeat;
      filter: brightness(0.75);
      opacity: 0%;
    }
    .animationbar-horizontal {
      background: linear-gradient(to var(--animation-direction), var(--bar-color) 0%, var(--bar-color) 1%, #0000 1%);
    }
    .animationbar-vertical {
      background: linear-gradient(to var(--animation-direction), #0000 0%, #0000 1%, var(--bar-color) 1%);
    }
    @keyframes animation-increase {
      0% {
        opacity: 50%;
        background-size: var(--bar-percent) 100%;
      }
      100% {
        opacity: 0%;
        background-size: 10000% 100%;
      }
    }
    @keyframes animation-decrease {
      0% {
        opacity: 0%;
        background-size: 10000%;
      }
      100% {
        opacity: 50%;
        background-size: var(--bar-percent);
      }
    }
    @keyframes animation-increase-vertical {
      0% {
        opacity: 50%;
        background-size: 100% var(--bar-percent);
      }
      100% {
        background-size: 100% 0%;
        opacity: 0%;
      }
    }
    @keyframes animation-decrease-vertical {
      0% {
        background-size: 100% 100%;
        opacity: 0%;
      }
      100% {
        opacity: 50%;
        background-size: 100% var(--bar-percent);
      }
    }
    bar-card-indicator {
      align-self: center;
      color: var(--bar-color);
      filter: brightness(0.75);
      height: 16px;
      width: 16px;
      position: relative;
      text-align: center;
    }
    .indicator-direction-right {
      margin-right: -16px;
      left: -6px;
    }
    .indicator-direction-up {
      margin: 4px;
    }
    bar-card-name {
      align-items: center;
      align-self: center;
      justify-content: center;
      margin: 4px;
      overflow: hidden;
      position: relative;
      text-align: left;
      text-overflow: ellipsis;
    }
    .name-outside {
      margin-left: 16px;
    }
    bar-card-value,
    bar-card-min,
    bar-card-max,
    bar-card-divider {
      align-self: center;
      position: relative;
    }
    bar-card-min,
    bar-card-max,
    bar-card-divider {
      font-size: 10px;
      margin: 2px;
      opacity: 0.5;
    }
    .min-direction-up {
      margin-top: auto;
    }
    .min-direction-right {
      margin-left: auto;
    }
    bar-card-divider {
      margin-left: 0px;
      margin-right: 0px;
    }
    bar-card-value {
      white-space: nowrap;
      margin: 4px;
    }
    .value-direction-right {
      margin-left: auto;
    }
    .value-direction-up {
      margin-top: auto;
    }
  </style>
`;console.info("%c BAR-CARD %c 3.2.1","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let Ve=class extends oe{constructor(){super(...arguments),this._configArray=[],this._stateArray=[],this._animationState=[],this._rowAmount=1}static async getConfigElement(){return document.createElement("bar-card-editor")}static getStubConfig(){return{}}shouldUpdate(e){return be(this,e,!1)}setConfig(e){if(!e)throw new Error(Te("common.invalid_configuration"));this._config=ve({animation:{state:"off",speed:5},color:"var(--bar-card-color, var(--primary-color))",columns:1,direction:"right",max:100,min:0,positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"}},e),"horizontal"==this._config.stack&&(this._config.columns=this._config.entities.length),this._configArray=function(e){const t=[];if(e.entities){for(const i of e.entities)if("string"==typeof i){const n=ve({},e);delete n.entities;const o=ve(n,{entity:i});t.push(o)}else if("object"==typeof i){const n=ve({},e);delete n.entities;const o=ve(n,i);t.push(o)}}else t.push(e);return t}(this._config),this._rowAmount=this._configArray.length/this._config.columns}render(){return this._config&&this.hass?R`
      <ha-card
        .header=${this._config.title?this._config.title:null}
        style="${this._config.entity_row?"background: #0000; box-shadow: none;":""}"
      >
        <div
          id="states"
          class="card-content"
          style="${this._config.entity_row?"padding: 0px;":""} ${"up"==this._config.direction?"":"flex-grow: 0;"}"
        >
          ${this._createBarArray()}
        </div>
      </ha-card>
      ${je}
    `:R``}_createBarArray(){const e=[];for(let t=0;t<this._configArray.length;t++)(e.length+1)*this._config.columns==t&&e.push(this._config.columns),this._configArray.length==t+1&&e.push(this._configArray.length-e.length*this._config.columns);const t=[];for(let i=0;i<e.length;i++){const n=[];for(let t=0;t<e[i];t++){const e=i*this._config.columns+t,o=this._configArray[e],a=this.hass.states[o.entity];if(!a){n.push(R`
            <div class="warning" style="margin-bottom: 8px;">
              ${Te("common.entity_not_available")}: ${o.entity}
            </div>
          `);continue}let r;if(r=o.attribute?a.attributes[o.attribute]:a.state,o.severity&&this._computeSeverityVisibility(r,e))continue;const s=_e(this.hass,o.max),c=_e(this.hass,o.min);o.limit_value&&(r=Math.min(r,s),r=Math.max(r,c)),isNaN(Number(r))||(0==o.decimal?r=Number(r).toFixed(0):o.decimal&&(r=Number(r).toFixed(o.decimal)));let l=40;o.height&&(l=o.height);let d,h,p,u="stretch",g="0px 0px 0px 13px",m="right",f="row",v="left",b="height: 100%; width: 2px;";switch(o.direction){case"right":m="right",v="left";break;case"up":g="0px",m="top",f="column-reverse",v="bottom",b="height: 2px; width: 100%;"}switch(p=this._computeSeverityIcon(r,e)?this._computeSeverityIcon(r,e):o.icon?o.icon:a.attributes.icon?a.attributes.icon:pe(ce(o.entity),r),o.positions.icon){case"outside":d=R`
              <bar-card-iconbar>
                <ha-icon icon="${p}"></ha-icon>
              </bar-card-iconbar>
            `;break;case"inside":h=R`
              <bar-card-iconbar>
                <ha-icon icon="${p}"></ha-icon>
              </bar-card-iconbar>
            `,g="0px";break;case"off":g="0px"}const y=o.name?o.name:a.attributes.friendly_name;let _,$,w,x,S,A,k;switch(o.positions.name){case"outside":_=R`
              <bar-card-name
                class="${o.entity_row?"name-outside":""}"
                style="${"up"==o.direction?"":o.width?`width: calc(100% - ${o.width});`:""}"
                >${y}</bar-card-name
              >
            `,g="0px";break;case"inside":$=R`<bar-card-name>${y}</bar-card-name>`}switch(w=isNaN(Number(r))?"":o.unit_of_measurement?o.unit_of_measurement:a.attributes.unit_of_measurement,o.positions.minmax){case"outside":x=R`
              <bar-card-min>${c}${w}</bar-card-min>
              <bar-card-divider>/</bar-card-divider>
              <bar-card-max>${s}${w}</bar-card-max>
            `;break;case"inside":S=R`
              <bar-card-min class="${"up"==o.direction?"min-direction-up":"min-direction-right"}"
                >${c}${w}</bar-card-min
              >
              <bar-card-divider>/</bar-card-divider>
              <bar-card-max> ${s}${w}</bar-card-max>
            `}switch(o.positions.value){case"outside":A=R`
              <bar-card-value class="${"up"==o.direction?"value-direction-up":"value-direction-right"}"
                >${o.complementary?s-r:r} ${w}</bar-card-value
              >
            `;break;case"inside":k=R`
              <bar-card-value
                class="${"inside"==o.positions.minmax?"":"up"==o.direction?"value-direction-up":"value-direction-right"}"
                >${o.complementary?s-r:r} ${w}</bar-card-value
              >
            `;break;case"off":g="0px"}let C="";r>this._stateArray[e]?(C="▲","up"==o.direction?this._animationState[e]="animation-increase-vertical":this._animationState[e]="animation-increase"):r<this._stateArray[e]?(C="▼","up"==o.direction?this._animationState[e]="animation-decrease-vertical":this._animationState[e]="animation-decrease"):this._animationState[e]=this._animationState[e],isNaN(Number(r))&&(C="");const E=this._computeBarColor(r,e);let N,O;switch(o.positions.indicator){case"outside":N=R`
              <bar-card-indicator
                class="${"up"==o.direction?"":"indicator-direction-right"}"
                style="--bar-color: ${E};"
                >${C}</bar-card-indicator
              >
            `;break;case"inside":O=R`
              <bar-card-indicator style="--bar-color: ${E};">${C}</bar-card-indicator>
            `}const P=this._computePercent(r,e,c,s),T=_e(this.hass,o.target);if(void 0!==o.target&&isNaN(T)){n.push(R`
            <div class="warning" style="margin-bottom: 8px;">
              ${Te("common.entity_not_available")}: ${o.target}
            </div>
          `);continue}const j=this._computePercent(T.toString(),e,c,s);let V=P,U=this._computePercent(T.toString(),e,c,s);U<V&&(V=U,U=P);let I="";o.width&&(u="center",I=`width: ${o.width}`);const z=this._animationState[e];let M="right",L=100*P,B="animationbar-horizontal";"animation-increase-vertical"!=z&&"animation-decrease-vertical"!=z||(M="bottom",B="animationbar-vertical",L=100*(100-P)),n.push(R`
          <bar-card-card
            style="flex-direction: ${f}; align-items: ${u};"
            @action=${this._handleAction}
            .config=${o}
            .actionHandler=${Ae({hasHold:fe(o.hold_action),hasDoubleClick:fe(o.double_tap_action)})}
          >
            ${d} ${N} ${_}
            <bar-card-background
              style="margin: ${g}; height: ${l}${"number"==typeof l?"px":""}; ${I}"
            >
              <bar-card-backgroundbar style="--bar-color: ${E};"></bar-card-backgroundbar>
              ${"on"==o.animation.state?R`
                    <bar-card-animationbar
                      style="animation: ${z} ${o.animation.speed}s infinite ease-out; --bar-percent: ${L}%; --bar-color: ${E}; --animation-direction: ${M};"
                      class="${B}"
                    ></bar-card-animationbar>
                  `:""}
              <bar-card-currentbar
                style="--bar-color: ${E}; --bar-percent: ${P}%; --bar-direction: ${m}"
              ></bar-card-currentbar>
              ${o.target?R`
                    <bar-card-targetbar
                      style="--bar-color: ${E}; --bar-percent: ${V}%; --bar-target-percent: ${U}%; --bar-direction: ${m};"
                    ></bar-card-targetbar>
                    <bar-card-markerbar
                      style="--bar-color: ${E}; --bar-target-percent: ${j}%; ${v}: calc(${j}% - 1px); ${b}}"
                    ></bar-card-markerbar>
                  `:""}
              <bar-card-contentbar
                class="${"up"==o.direction?"contentbar-direction-up":"contentbar-direction-right"}"
              >
                ${h} ${O} ${$} ${S} ${k}
              </bar-card-contentbar>
            </bar-card-background>
            ${x} ${A}
          </bar-card-card>
        `),r!==this._stateArray[e]&&(this._stateArray[e]=r)}t.push(n)}let i="column";(this._config.columns||this._config.stack)&&(i="row");const n=[];for(const e of t)n.push(R`<bar-card-row style="flex-direction: ${i};">${e}</bar-card-row>`);return n}_computeBarColor(e,t){const i=this._configArray[t];let n;return n=i.severity?this._computeSeverityColor(e,t):"unavailable"==e?`var(--bar-card-disabled-color, ${i.color})`:i.color,n}_computeSeverityColor(e,t){const i=this._configArray[t],n=Number(e),o=i.severity;let a;return isNaN(n)?o.forEach((t=>{e==t.text&&(a=t.color)})):o.forEach((e=>{n>=e.from&&n<=e.to&&(a=e.color)})),null==a&&(a=i.color),a}_computeSeverityVisibility(e,t){const i=this._configArray[t],n=Number(e),o=i.severity;let a=!1;return isNaN(n)?o.forEach((t=>{e==t.text&&(a=t.hide)})):o.forEach((e=>{n>=e.from&&n<=e.to&&(a=e.hide)})),a}_computeSeverityIcon(e,t){const i=this._configArray[t],n=Number(e),o=i.severity;let a=!1;return!!o&&(isNaN(n)?o.forEach((t=>{e==t.text&&(a=t.icon)})):o.forEach((e=>{n>=e.from&&n<=e.to&&(a=e.icon)})),a)}_computePercent(e,t,i,n){const o=this._configArray[t],a=Number(e);if("unavailable"==e)return 0;if(isNaN(a))return 100;switch(o.direction){case"right-reverse":case"left-reverse":case"up-reverse":case"down-reverse":return 100-100*(a-i)/(n-i);default:return 100*(a-i)/(n-i)}}_handleAction(e){this.hass&&e.target.config&&e.detail.action&&function(e,t,i,n){var o;"double_tap"===n&&i.double_tap_action?o=i.double_tap_action:"hold"===n&&i.hold_action?o=i.hold_action:"tap"===n&&i.tap_action&&(o=i.tap_action),me(e,t,i,o)}(this,this.hass,e.target.config,e.detail.action)}getCardSize(){if(this._config.height){const e=this._config.height.toString();return Math.trunc(Number(e.replace("px",""))/50*this._rowAmount)+1}return this._rowAmount+1}};e([Q()],Ve.prototype,"hass",void 0),e([Q()],Ve.prototype,"_config",void 0),e([Q()],Ve.prototype,"_configArray",void 0),Ve=e([G("bar-card")],Ve);export{Ve as BarCard};
