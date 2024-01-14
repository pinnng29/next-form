import { FormElement } from "./FormElements";
import SideBarBtnElement from "./SidebarBtnElement";


function DesignerSidebar() {
    
    return (
        <aside className="w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
            Elements
            <SideBarBtnElement formElement={FormElement.TextField} />
        </aside>
    )
}

export default DesignerSidebar;