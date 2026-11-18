import { defineCustomElement } from 'vue'
import ToolboxExplorer from './ToolboxExplorer.ce.vue'

const tag = 'toolbox-explorer'
if (!customElements.get(tag)) {
  customElements.define(tag, defineCustomElement(ToolboxExplorer))
}
