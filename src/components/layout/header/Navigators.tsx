import { Box } from "@mui/material";

export default function Navigators() {
  return (
    <Box className="flex flex-row-reverse">
      <nav className="list-none">
        <ul className="flex">
          <li className="m-2">Home</li>
          <li className="m-2">About</li>
          <li className="m-2">Service</li>
          <li className="m-2">Contact</li>
        </ul>
      </nav>
    </Box>
  );
}