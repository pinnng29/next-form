import { FormElements } from "./FormElements";
import SideBarBtnElement from "./SidebarBtnElement";


function FormElementsSidebar () {
    return (
        <div>
            Elements
            <SideBarBtnElement formElement={FormElements.TextField} />
        </div>
    );
}

export default FormElementsSidebar;