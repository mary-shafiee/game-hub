import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatform"

const PlatformSelector = () => {
    const {data} = usePlatform()
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platform</MenuButton>
      <MenuList>
        {data && data.map(platform => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
