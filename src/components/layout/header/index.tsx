import { Box, Divider } from "@mui/material";
import Navigators from "./Navigators";
import CorpName from "./CorpName";

export default function Header() {
  return (
    <Box className="bg-gray-50 text-slate-900 p-2">
      <header className="flex">
        <Box className="flex-none">
          <CorpName />
        </Box>
        <Box className="grow">
          <Navigators />
        </Box>
      </header>
      <Divider />
    </Box>
  );
}