import 'construct-style-sheets-polyfill'

import { default as uhWebEditor_css }     from './uh-web-editor/uh-web-editor.element.css'
import { default as uhWebEditor_artboard_css }     from './uh-web-editor/uh-web-editor.artboard.css'
import { default as handles_css }    from './selection/handles.element.css'
import { default as handle_css }     from './selection/handle.element.css'
import { default as hover_css }      from './selection/hover.element.css'
import { default as corners_css }    from './selection/corners.element.css'
import { default as distance_css }   from './selection/distance.element.css'
import { default as gridline_css }   from './selection/gridlines.element.css'
import { default as label_css }      from './selection/label.element.css'
import { default as offscreenLabel_css }      from './selection/offscreenLabel.element.css'
import { default as overlay_css }    from './selection/overlay.element.css'
import { default as boxmodel_css }   from './selection/box-model.element.css'
import { default as metatip_css }    from './metatip/metatip.element.css'
import { default as hotkeymap_css }  from './hotkey-map/base.element.css'
import { default as grip_css }       from './selection/grip.element.css'

import { default as light_css }            from './_variables_light.css'
import { default as uhWebEditor_light_css }     from './uh-web-editor/uh-web-editor.element_light.css'
import { default as metatip_light_css }    from './metatip/metatip.element_light.css'
import { default as hotkeymap_light_css }  from './hotkey-map/base.element_light.css'

import { default as dark_css }             from './_variables_dark.css'
import { default as uhWebEditor_dark_css }      from './uh-web-editor/uh-web-editor.element_dark.css'
import { default as metatip_dark_css }     from './metatip/metatip.element_dark.css'
import { default as hotkeymap_dark_css }   from "./hotkey-map/base.element_dark.css"

const constructStylesheet = (styles, stylesheet = new CSSStyleSheet()) => {
  stylesheet.replaceSync(styles)
  return stylesheet
}

export const WebEditorStyles         = constructStylesheet(uhWebEditor_css)
export const HandlesStyles        = constructStylesheet(handles_css)
export const HandleStyles         = constructStylesheet(handle_css)
export const HoverStyles          = constructStylesheet(hover_css)
export const CornerStyles         = constructStylesheet(corners_css)
export const MetatipStyles        = constructStylesheet(metatip_css)
export const DistanceStyles       = constructStylesheet(distance_css)
export const GridlineStyles       = constructStylesheet(gridline_css)
export const LabelStyles          = constructStylesheet(label_css)
export const OffscreenLabelStyles  = constructStylesheet(offscreenLabel_css)
export const OverlayStyles        = constructStylesheet(overlay_css)
export const BoxModelStyles       = constructStylesheet(boxmodel_css)
export const HotkeymapStyles      = constructStylesheet(hotkeymap_css)
export const GripStyles           = constructStylesheet(grip_css)

export const LightTheme           = constructStylesheet(light_css)
export const WebEditorLightStyles    = constructStylesheet(uhWebEditor_light_css)
export const MetatipLightStyles   = constructStylesheet(metatip_light_css)
export const HotkeymapLightStyles = constructStylesheet(hotkeymap_light_css)

export const DarkTheme            = constructStylesheet(dark_css)
export const WebEditorDarkStyles     = constructStylesheet(uhWebEditor_dark_css)
export const MetatipDarkStyles    = constructStylesheet(metatip_dark_css)
export const HotkeymapDarkStyles  = constructStylesheet(hotkeymap_dark_css)
export const ArtboardStyles       = constructStylesheet(uhWebEditor_artboard_css)
