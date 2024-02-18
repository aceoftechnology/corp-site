import { Box } from "@mui/material"
import Divider from "@/components/layout/Divider";

export default function Footer() {
  return (
    <footer>
      <Divider />
      <Box className="bg-gray-50 text-slate-900 px-2 pb-2 w-full h-32 flex items-center justify-center">
        <p className="text-gray-500">&copy; 2024 Ace of Technology</p>
      </Box>
    </footer>
  );
}
