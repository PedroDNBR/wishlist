import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Dropdown } from "../Dropdown";
import { Trigger } from "./styles";

export function OpenImageModal() {
  return (
    <>
      <DropdownMenu.Root>
            <Trigger></Trigger>
        <Dropdown side="right" align="start">
        
        </Dropdown>
      </DropdownMenu.Root>
    </>
  )
}