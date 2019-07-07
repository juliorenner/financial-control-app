import { 
    TAB_SWIP_RIGHT,
    TAB_SWIP_LEFT
} from "../actions/types"

import tabsMetadata from "./metadata/tabs.json"

const INITIAL_STATE = {
    selectedIndex: 0
}

export default (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case TAB_SWIP_RIGHT: {
            let index = (tabsMetadata.length == state.selectedIndex+1 ? state.selectedIndex : state.selectedIndex+1)
            return { 
                selectedIndex: index,
                content: tabs[index]
            }
        }
        case TAB_SWIP_LEFT: {
            let index = (0 == state.selectedIndex-1 ? state.selectedIndex : state.selectedIndex-1)
            return { 
                selectedIndex: index,
                content: tabs[index]
            }
        }
        default: 
            return state
    }   
}